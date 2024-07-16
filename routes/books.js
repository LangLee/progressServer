import express from 'express';
const router = express.Router();
import Book from '../model/book'
import dateFormatter from '../utils/dateFormat';
import { story, storyWithoutTitle, helloworld, todoList } from '../template/book';
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/getAllBooks', jwt.verify, (req, res) => {
  let { sort = { updateTime: 'desc' } } = req.query;
  Book.find().select('title updateTime category type url appId description author').sort(sort)
    .exec()
    .then(data => {
      let books = data && data.length && data.map(({ _id, title, updateTime, category, type, url, appId, description, author }) => {
        return {
          _id,
          title,
          category,
          type,
          url,
          appId,
          description,
          author,
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
  Book.find({ author: userId }).select('title createTime category type url appId').sort(sort)
    .exec()
    .then(data => {
      let books = data && data.length && data.map(({ _id, title, createTime, category, type, url, appId }) => {
        return {
          _id,
          title,
          createTime: dateFormatter.format(new Date(createTime)),
          category,
          type,
          url,
          appId
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
  Book.find({ author: userId, appId }).select('title createTime category type url appId').sort(sort)
    .exec()
    .then(data => {
      let books = data && data.length && data.map(({ _id, title, createTime, category, type, url, appId }) => {
        return {
          _id,
          title,
          createTime: dateFormatter.format(new Date(createTime)),
          category,
          type,
          url,
          appId
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
router.get('/getBookById', jwt.verify, (req, res) => {
  let userId = req._userId;
  if (!req.query || !req.query.id) {
    res.json({ success: false, message: '参数错误！' });
    return;
  }
  Book.findById(req.query.id)
    .exec().then((data) => {
      if (data) {
        let {_id, title, content, url, type, author, anchors } = data;
        res.json({
          success: true,
          data: {_id, title, content, anchors, url, type, editable: author.equals(userId) }
        });
      } else {
        res.json({ success: false, message: '没有找到书籍！' });
      }
    })
});
// 创建书籍
router.post('/createBook', jwt.verify, (req, res) => {
  let { title, content, type, category, url } = req.body || {};
  let userId = req._userId;
  let appId = req.headers.appid;
  let template;
  switch (type) {
    case 'text':
      template = storyWithoutTitle
      break;
    case 'code':
      template = helloworld;
      break;
    case 'task':
      template = todoList;
      break;
    case 'link':
    case 'chat':
      template = '';
      break;
    default:
      template = story;
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
  let { id, title, content, anchors, url, category, description, image } = req.body || {};
  if (!id) {
    res.json({ success: false, message: '更新失败！' });
  };
  let book = await Book.findById(id);
  if(!book) {
    return res.json({ success: false, message: '未找到书目！' })
  } else if (!book.author.equals(userId)) {
    return res.json({ success: false, message: '没有权限更改！' })
  } else if (book.type === 'link' && !url) {
    return res.json({ success: false, message: '请填写链接地址！' })
  } else {
    Book.findByIdAndUpdate(id, { $set: { title, category, url, content, anchors, updateTime: new Date(), description, image} }).exec().then((data) => {
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
router.get('/searchBook', jwt.verify, (req, res) => {
  let { key = "" } = req.query || {};
  Book.find({ '$or': [{ 'title': { $regex: key } }, { 'anchors': { $elemMatch: { 'textContent': { $regex: key } } } }] }).exec().then((data) => {
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
export default router;
