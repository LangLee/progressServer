import express from 'express';
const router = express.Router();
import Book from '../model/book'
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
// 获取书籍列表
router.get('/getBooks', jwt.verify, (req, res) => {
  Book.find().select('title createTime').sort({createTime: 'asc'})
    .exec()
    .then(data => {
      if (data) {
        res.json({
          success: true,
          data: data
        });
      } else {
        res.json({ success: false, message: '' });
      }
    });
});
// 获取书籍
router.get('/getBookById', jwt.verify, (req, res) => {
  console.log(req.query.id);
  if (!req.query || !req.query.id) {
    res.json({ success: false, message: '参数错误！' });
    return;
  }
  Book.findById(req.query.id)
    .exec().then((data) => {
      if(data) {
        res.json({
          success: true,
          data: data
        });
      } else {
        res.json({ success: false, message: '没有找到书籍！' });
      }
    })
});
// 创建书籍
router.post('/createBook', jwt.verify, (req, res) => {
  let { title, content } = res.body || {};
  Book.create({ title, content }).then((data) => {
    if (data) {
      res.json({
        success: true,
        data: data
      });
    } else {
      res.json({ success: false, message: '创建失败！' });
    }
  })
});
// 更新书籍
router.post('/updateBook', jwt.verify, (req, res) => {
  let { id, content, anchors } = req.body || {};
  if (!id) {
    res.json({ success: false, message: '更新失败！' });
  };
  Book.findByIdAndUpdate(id, { $set: { content, anchors}}).exec().then((data) => {
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
// 更新书籍
router.post('/updateBookTitle', jwt.verify, (req, res) => {
  let { id, title } = req.body || {};
  if (!id) {
    res.json({ success: false, message: '更新失败！' });
  };
  Book.findByIdAndUpdate(id, { $set: { title: title}}).exec().then((data) => {
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
// 删除书籍
router.get('/searchBook', jwt.verify, (req, res) => {
  let { key="" } = req.query || {};
  Book.find({'$or': [{'title': {$regex: key}}, {'anchors': {$elemMatch: {'textContent': {$regex: key}}}}]}).exec().then((data) => {
    let books = [];
    if (data && data.length > 0) {
      books = data.map(({id, title, anchors}) => {
        let filterAnchors = anchors.filter(({textContent})=>textContent.indexOf(key) !== -1).map(({id, textContent})=>({id, textContent}));
        return {id, title, anchors: filterAnchors}
      })
    }
    res.json({
      success: true,
      data: books
    });
  });
});
export default router;
