import express from 'express';
const router = express.Router();
import Book from '../model/book'
const jwt = require('../jwt');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 获取书籍
router.get('/getBookById', jwt.verify, (req, res)=>{
    Book.findById(req.body.id)
  .exec()
  .then(data=>{
    if (data) {
        res.json({
            success: true,
            data: data
          });
    } else {
      res.json({success: false, message: '没有书'});
    }
  });
});
// 创建书籍
router.post('/createBook', jwt.verify, (req, res)=>{
    let {name, content} = res.body || {};
    Book.create({ name, content }).then((data)=>{
        if (data) {
            res.json({
                success: true,
                data: data
              });
        } else {
            res.json({success: false, message: '创建失败！'});
        }
    })
});
export default router;
