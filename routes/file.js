import express from 'express';
import upload from '../utils/upload'
const router = express.Router();
const jwt = require('../jwt');
// const fs = require('fs');
import Attachment from '../model/attachment';
// 本地存储 处理接口
// 路由处理文件上传
// router.post('/upload', jwt.verify, upload.single('file'), (req, res) => {
//   // 文件信息在 req.file  
//   if (!req.file) {
//     return res.json({
//       success: false,
//       message: '上传失败！'
//     });
//   }
//   res.json({
//     success: true,
//     data: req.file
//   });
// });
// 路由处理文件下载
// router.get('/download', jwt.verify, (req, res) => {
//   let fileName = req.query.file;
//   const file = `uploads/${fileName}`;
//   res.download(file, (err) => {
//     if (err) {
//       res.json({
//         success: false,
//         message: '文件未找到！'
//       });
//     }
//   });
// });
// 删除文件
// router.get('/delete', (req, res) => {
//   let fileName = req.query.file;
//   if (!fileName) {
//     res.json({
//       success: false,
//       message: '文件名错误！'
//     });
//   }
//   const filePath = `uploads/${fileName}`;
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       res.json({
//         success: false,
//         message: '文件未找到！'
//       });
//     } else {
//       res.json({
//         success: true,
//         message: '文件删除成功！'
//       });
//     }
//   });
// });

// 数据库存储
// 路由处理文件下载  
router.post('/upload', jwt.verify, upload.single('file'), (req, res) => {
  // 文件信息在 req.file  
  if (!req.file) {
    return res.json({
      success: false,
      message: '上传失败！'
    });
  }
  let { fieldname, originalname, mimetype, buffer } = req.file || {};
  originalname = Buffer.from(originalname, "latin1").toString("utf8");
  let filename = fieldname + '_' + Date.now() + '_' + originalname;
  Attachment.create({ name: filename, type: mimetype, content: buffer }).then((data) => {
    if (data) {
      let { name } = data;
      res.json({
        success: true,
        data: name,
        message: '上传成功！'
      });
    }
  }).catch(() => {
    res.json({
      success: false,
      message: '上传失败！'
    });
  });
})
// 预览
router.get('/preview', (req, res) => {
  let fileName = req.query.file;
  Attachment.findOne({ name: fileName }).then((image) => {
    if (!image) {
      res.json({
        success: false,
        message: '文件未找到！'
      });
    } else {
      let { type, content } = image || {};
      res.set('Content-Type', type);
      res.send(content);
    }
  }).catch((error) => {
    res.json({
      success: false,
      message: error.message
    });
  })
});
// 路由处理文件下载
router.get('/download', (req, res) => {
  let fileName = req.query.file;
  Attachment.findOne({ name: fileName }).then((image) => {
    if (!image) {
      res.json({
        success: false,
        message: '文件未找到！'
      });
    } else {
      let { type, content } = image || {};
      const base64 = content.toString('base64');
      const base64String = `data:${type};base64,${base64}`;
      console.log(base64String);
      res.json({
        success: true,
        data: base64String
      });
    }
  }).catch((error) => {
    res.json({
      success: false,
      message: error.message
    });
  })
});
router.get('/delete', (req, res) => {
  let fileName = req.query.file;
  if (!fileName) {
    res.json({
      success: false,
      message: '文件名错误！'
    });
  }
  Attachment.findOneAndDelete({ name: fileName }).then((data) => {
    if (data) {
      res.json({
        success: true,
        message: '文件删除成功！'
      });
    } else {
      res.json({
        success: false,
        message: '文件未找到！'
      });
    }
  }).catch((error) => {
    res.json({
      success: false,
      message: error.message
    })
  })
});
export default router;