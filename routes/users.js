import express from 'express';
const router = express.Router();
import User from '../model/user'
const jwt = require('../jwt');
// import md5 from 'md5';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录成功生成token
router.post('/login', (req, res)=>{
  User
  .findOne({name:req.body.name})
  .exec()
  .then(data=>{
    if (data) {
      if (data.password === req.body.password) {
        res.json({
          success: true, 
          message: '登录成功',
          data: jwt.sign({ _id: data._id }),// 生成token，并传入用户_id
        });
      }else{
        res.json({success: false, message: '密码错误'});
      }
    } else {
      res.json({success: false, message: '用户名不存在，请先注册'});
    }
  });
});


// 登录成功生成token
router.post('/register', (req, res)=>{
  User
  .findOne({name:req.body.name})
  .exec()
  .then(data=>{
    if (data) {
      res.json({
        success: false, 
        message: '用户已经存在'
      });
    } else {
      User.create({name:req.body.name, password: req.body.password}).then((data)=>{
        res.json({
          success: true, 
          message: '注册成功',
          data: data
        });
      })
    }
  });
});
export default router;
