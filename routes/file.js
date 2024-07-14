import express from 'express';
import upload from '../utils/upload'
const router = express.Router();
const jwt = require('../jwt');
const fs = require('fs');

// 路由处理文件上传  
router.post('/upload', jwt.verify, upload.single('file'), (req, res) => {  
  // 文件信息在 req.file  
  if (!req.file) {  
    return res.json({
        success: false,
        message: '上传失败！'
    });  
  }  
  res.json({  
    success: true,
    data: req.file
  });  
});  
// 路由处理文件下载  
router.get('/download', jwt.verify, (req, res) => {  
    let fileName = req.query.file;
    const file = `uploads/${fileName}`;  
    res.download(file, (err) => {  
      if (err) { 
        res.json({  
          success: false,
          message: '文件未找到！'
        });  
      }
    });  
  });
  // 删除文件
  router.get('/delete', (req, res) => {
    let fileName = req.query.file;
    if (!fileName) {
        res.json({  
          success: false,
          message: '文件名错误！'
        });
    }
    const filePath = `uploads/${fileName}`; 
    fs.unlink(filePath, (err) => {
        if (err) {
          res.json({  
            success: false,
            message: '文件未找到！'
          });
        } else {
          res.json({  
            success: true,
            message: '文件删除成功！'
          });
        }
      });
  });
export default router;