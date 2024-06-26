import express from 'express';
const router = express.Router();
import App from '../model/app'
import User from '../model/user'
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
// 获取应用
router.get('/getApps', jwt.verify, async (req, res) => {
  let user = await User.findById(req._userId).exec();
  App.find().exec()
    .then(data => {
      res.json({
        success: true,
        data: {editable: user.administrator, apps: data}
      });
    }).catch(err => {
      res.json({ success: false, message: err });
    });
});
// 创建应用
router.post('/createApp', jwt.verify, (req, res) => {
  let { title, inner, url, icon, description } = req.body || {};
  let userId = req._userId;
  App.create({ title, inner, url, icon, description, author: userId }).then((data) => {
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
// 更新应用
router.post('/updateApp', jwt.verify, (req, res) => {
  let { id, title, inner, url, icon, description } = req.body || {};
  if (!id) {
    res.json({ success: false, message: '更新失败！' });
  };
  App.findByIdAndUpdate(id, { $set: { title, inner, url, icon, description}}).exec().then((data) => {
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
