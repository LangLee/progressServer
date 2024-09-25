import express from 'express';
const router = express.Router();
import App from '../model/app'
import Book from '../model/book'
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
// 获取应用
router.get('/getApps', jwt.verify, async (req, res) => {
  let type = req.query.type;
  let url = req.query.url;
  let query = {};
  switch (type) {
    case 'system':
      query = {system: true}
      break;
    case 'user':
      query = {author: req._userId}
      break;
    case 'quick':
      query = {$or: [{$and: [{author: req._userId}, {quick: true}]}, {system: true}]};
      break;
    default:
      query = {$or: [{author: req._userId}, {system: true}]};
      break;
  }
  if (url) {
    query.url = url;
  }
  // let user = await User.findById(req._userId).exec();
  App.find(query).exec().then(data => {
      res.json({
        success: true,
        data: data
      });
    }).catch(e => {
      res.json({ success: false, message: e.message });
    });
});
// 创建应用
router.post('/createApp', jwt.verify, (req, res) => {
  let { name, title, inner, url, icon, description } = req.body || {};
  let userId = req._userId;
  name = name || new Date().getTime();
  App.create({ name, title, inner, url, icon, description, author: userId }).then((data) => {
    if (data) {
      res.json({
        success: true,
        data: data
      });
    } else {
      res.json({ success: false, message: '创建失败！' });
    }
  }).catch(e => {
    res.json({ success: false, message: e.message });
  });
});
// 更新应用
router.post('/updateApp', jwt.verify, (req, res) => {
  let { _id, name, title, inner, url, icon, description, quick, system } = req.body || {};
  if (!_id) {
    res.json({ success: false, message: '更新失败！' });
  };
  App.findByIdAndUpdate(_id, { $set: { name, title, inner, url, icon, description, quick, system}}).exec().then((data) => {
    if (data) {
      res.json({
        success: true,
        message: '更新成功！',
        data: data
      });
    } else {
      res.json({ success: false, message: '更新失败！' });
    }
  });
});
// 发布应用
router.post('/publishApp', jwt.verify, (req, res) => {
  let { _id, published, publishAll=true } = req.body || {};
  let userId = req._userId;
  let errMes = `${published?'':'取消'}发布失败！`;
  let sucMes = `${published?'':'取消'}发布成功！`;
  if (!_id) {
    res.json({ success: false, message: errMes });
  };
  App.findByIdAndUpdate(_id, { $set: { published}}).exec().then((data) => {
    if (data) {
      if(publishAll) {
        Book.updateMany({ appId: _id, author: userId}, { share: published }).then(() => {
          return res.json({
            success: true,
            message: sucMes,
            data: data
          });
        }).catch((err) => {
          return res.json({ success: false, message: err.message });
        })
      } else {
        return res.json({
          success: true,
          message: sucMes,
          data: data
        });
      }
    } else {
      res.json({ success: false, message: errMes });
    }
  }).catch((err) => {
    return res.json({ success: false, message: err.message });
  });
});
// 删除应用
router.post('/removeApp', jwt.verify, (req, res) => {
  let { id } = req.body || {};
  App.findByIdAndDelete(id).then((data) => {
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
export default router;
