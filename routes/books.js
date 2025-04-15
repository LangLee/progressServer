import express from 'express';
const router = express.Router();
import Book from '../model/book'
import App from '../model/app'
import dateFormatter from '../utils/dateFormat';
import { story, storyWithoutTitle, helloworld, todoList } from '../template/book';
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/getAllBooks', (req, res) => {
  let { sort = { updateTime: 'desc' } } = req.query;
  Book.find({ share: true }).populate('author', 'name')
  .select('title updateTime category type url appId description author share').sort(sort)
    .exec()
    .then(data => {
      let books = data && data.length && data.map(({ _id, title, updateTime, category, type, url, appId, description, author, share }) => {
        return {
          _id,
          title,
          category,
          type,
          url,
          appId,
          description,
          author: author.name,
          share,
          updateTime: dateFormatter.format(new Date(updateTime))
        }
      })
      res.json({
        success: true,
        data: books
      });
    }).catch(err => {
      res.json({ success: false, message: err });
    });
});
// 获取书籍列表
router.get('/getBooks', jwt.verify, (req, res) => {
  let { sort = { createTime: 'desc' } } = req.query;
  let userId = req._userId;
  Book.find({ author: userId }).select('title createTime category type url appId share').sort(sort)
    .exec()
    .then(data => {
      let books = data && data.length && data.map(({ _id, title, createTime, category, type, url, appId, share }) => {
        return {
          _id,
          title,
          createTime: dateFormatter.format(new Date(createTime)),
          category,
          type,
          url,
          appId,
          share
        }
      })
      res.json({
        success: true,
        data: books
      });
    }).catch(err => {
      res.json({ success: false, message: err });
    });
});
// 获取应用下书籍列表
router.get('/getAppBooks', jwt.verify, (req, res) => {
  let { sort = { createTime: 'desc' } } = req.query;
  let userId = req._userId;
  let appId = req.headers.appid;
  Book.find({ author: userId, appId }).select('title createTime category type url appId share').sort(sort)
    .exec()
    .then(data => {
      let books = data && data.length && data.map(({ _id, title, createTime, category, type, url, appId, share }) => {
        return {
          _id,
          title,
          createTime: dateFormatter.format(new Date(createTime)),
          category,
          type,
          url,
          appId,
          share
        }
      })
      res.json({
        success: true,
        data: books
      });
    }).catch(err => {
      res.json({ success: false, message: err });
    });
});
// 获取书籍
router.get('/getBookById', (req, res) => {
  if (!req.query || !req.query.id) {
    res.json({ success: false, message: '参数错误！' });
    return;
  }
  Book.findById(req.query.id)
    .exec().then((data) => {
      if (data) {
        let { _id, title, content, url, type, author, anchors, share } = data;
        jwt.execVerify(req).then((userId)=>{
            res.json({
              success: true,
              data: { _id, title, content, anchors, url, type, editable: author.equals(userId) }
            });
        }).catch(()=>{
          if (share) {
            res.json({
              success: true,
              data: { _id, title, content, anchors, url, type, editable: false }
            });
          } else {
            res.json({ success: false, message: '没有权限查看！' });
          }
        })
      } else {
        res.json({ success: false, message: '没有找到书籍！' });
      }
    }).catch((err) => {
      res.json({ success: false, message: err.message });
    })
});
// 创建书籍
router.post('/createBook', jwt.verify, async (req, res) => {
  let { title, content, type, category, url } = req.body || {};
  let userId = req._userId;
  let appId = req.headers.appid;
  if (!appId) {
    let defaultApp = await App.findOne({ name: 'book', inner: true }).exec();
    if (defaultApp) {
      appId = defaultApp._id;
    } else {
      res.json({ success: false, message: '请先创建应用！' });
      return;
    }
  }
  let template;
  switch (type) {
    case 'code':
      template = helloworld;
      break;
    case 'task':
      template = todoList;
      break;
    case 'text':
    case 'link':
    case 'chat':
      template = '';
      break;
    default:
      template = '';
      break;
  }
  content = content || template;
  Book.create({ title, content, author: userId, type, category, url, appId }).then((data) => {
    if (data) {
      res.json({
        success: true,
        data: data
      });
    } else {
      res.json({ success: false, message: '创建失败！' });
    }
  }).catch((err) => {
    res.json({ success: false, message: err.message });
  });
});
// 更新书籍
router.post('/updateBook', jwt.verify, async (req, res) => {
  let userId = req._userId;
  let { _id, id, title, content, anchors, url, category, description, image, share } = req.body || {};
  id = _id || id;
  if (!id) {
    res.json({ success: false, message: '更新失败！' });
  };
  let book = await Book.findById(id);
  if (!book) {
    return res.json({ success: false, message: '未找到书目！' })
  } else if (!book.author.equals(userId)) {
    return res.json({ success: false, message: '没有权限更改！' })
  } else if (book.type === 'link' && !url) {
    return res.json({ success: false, message: '请填写链接地址！' })
  } else {
    Book.findByIdAndUpdate(id, { $set: { title, category, url, content, anchors, updateTime: new Date(), description, image, share } }).exec().then((data) => {
      if (data) {
        res.json({
          success: true,
          data: data
        });
      } else {
        res.json({ success: false, message: '更新失败！' });
      }
    }).catch((err) => {
      res.json({ success: false, message: err.message });
    });
  }
});
// 更新书籍
router.post('/updateBookTitle', jwt.verify, (req, res) => {
  let { id, title, type, category } = req.body || {};
  if (!id) {
    res.json({ success: false, message: '更新失败！' });
  };
  Book.findByIdAndUpdate(id, { $set: { title, type, category } }).exec().then((data) => {
    if (data) {
      res.json({
        success: true,
        data: data
      });
    } else {
      res.json({ success: false, message: '更新失败！' });
    }
  });
});
// 删除书籍
router.post('/removeBook', jwt.verify, (req, res) => {
  let { id } = req.body || {};
  Book.findByIdAndDelete(id).then((data) => {
    if (data) {
      res.json({
        success: true,
        message: '删除成功！',
        data: data
      });
    } else {
      res.json({ success: false, message: '删除失败！' });
    }
  });
});
// 查询书籍
router.get('/searchBook', async (req, res) => {
  let { key = "" } = req.query || {};
  let appId = req.headers.appid;
  let app = await App.findById(appId);
  let query = { '$or': [{ 'title': { $regex: key } }, { 'anchors': { $elemMatch: { 'textContent': { $regex: key } } } }], appId }
  if (app.published) {
    query.share = true;
  } else {
    query.author = await jwt.execVerify(req).catch(()=>{
      return res.json({
        success: false,
        message: '没有搜索权限！'
      })
    })
  }
  Book.find(query).exec().then((data) => {
    let books = [];
    if (data && data.length > 0) {
      books = data.map(({ id, title, appId, anchors }) => {
        let filterAnchors = anchors.filter(({ textContent }) => textContent.indexOf(key) !== -1).map(({ id, textContent }) => ({ id, textContent }));
        return { id, title, appId, anchors: filterAnchors }
      })
    }
    res.json({
      success: true,
      data: books
    });
  });
});
router.get('/searchAppBook', jwt.verify, (req, res) => {
  let { key = "" } = req.query || {};
  let appId = req.headers.appid;
  Book.find({ '$and': [{ 'appId': appId }, { '$or': [{ 'title': { $regex: key } }, { 'anchors': { $elemMatch: { 'textContent': { $regex: key } } } }] }] }).exec().then((data) => {
    let books = [];
    if (data && data.length > 0) {
      books = data.map(({ id, title, appId, anchors }) => {
        let filterAnchors = anchors.filter(({ textContent }) => textContent.indexOf(key) !== -1).map(({ id, textContent }) => ({ id, textContent }));
        return { id, title, appId, anchors: filterAnchors }
      })
    }
    res.json({
      success: true,
      data: books
    });
  });
});
// 获取默认应用（我的书籍）下的书籍列表
router.get('/getDefaultAppBooks', jwt.verify, async(req, res) => {
  let { sort = { createTime: 'desc' } } = req.query;
  let userId = req._userId;
  let app = await App.findOne({ name: 'book', inner: true });
  if (!app) {
    return res.json({
      success: false,
      message: '没有找到默认应用！'
    })
  }
  Book.find({ author: userId, appId: app._id }).select('title createTime type url appId image').sort(sort)
   .exec()
   .then(data => {
     let books = data && data.length && data.map(({ _id, title, createTime, type, url, appId, image }) => {
       return {
         _id,
         title,
         createTime: dateFormatter.format(new Date(createTime)),
         type,
         url,
         appId,
         image
       }
     })
     res.json({
       success: true,
       data: books
     })
   })
})
export default router;
