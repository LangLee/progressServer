import express from 'express';
const router = express.Router();
import User from '../model/user'
const jwt = require('../jwt');
// import md5 from 'md5';
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 登录成功生成token
router.post('/login', (req, res) => {
  User
    .findOne({ name: req.body.name })
    .exec()
    .then(data => {
      if (data) {
        if (data.password === req.body.password) {
          let { _id, name, avatar } = data;
          let token = jwt.sign({ _id: data._id });
          res.json({
            success: true,
            message: '登录成功',
            data: { token, userId: _id, name, avatar },// 生成token，并传入用户_id
          });
        } else {
          res.json({ success: false, message: '密码错误' });
        }
      } else {
        res.json({ success: false, message: '用户名不存在，请先注册' });
      }
    });
});


// 登录成功生成token
router.post('/register', (req, res) => {
  User
    .findOne({ name: req.body.name })
    .exec()
    .then(data => {
      if (data) {
        res.json({
          success: false,
          message: '用户已经存在'
        });
      } else {
        User.create({ name: req.body.name, password: req.body.password }).then((data) => {
          res.json({
            success: true,
            message: '注册成功',
            data: data
          });
        })
      }
    });
});

// 获取用户列表
router.get('/getLoginUser', jwt.verify, (req, res) => {
  let userId = req._userId;
  User
    .findOne({ _id: userId }).then(data => {
      if (data) {
        let { _id, name, avatar } = data;
        res.json({
          success: true,
          data: { userId: _id, name, avatar }
        });
      } else {
        res.json({
          success: false,
          message: '获取用户信息失败'
        })
      }
    }).catch(() => {
      res.json({
        success: false,
        message: '获取用户信息失败'
      });
    });
});
// 获取用户列表
router.get('/getContactList', jwt.verify, (req, res) => {
  let userId = req._userId;
  User
    .find({ _id: { $ne: userId } }).select('name avatar')
    .then(data => {
      res.json({
        success: true,
        data: data || []
      });
    }).catch((err) => {
      res.json({
        success: false,
        message: err.message
      });
    });
});
export default router;
