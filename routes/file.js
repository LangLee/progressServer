import express from 'express';
import upload from '../utils/upload'
import sharp from 'sharp';
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
router.get('/getFiles', jwt.verify,(req, res) => {
  let userId = req._userId;
  Attachment.find({ createBy: userId }).select('name type createTime').then((files) => {
    if (!files) {
      res.json({
        success: false,
        message: '文件未找到！'
      });
    } else {
      res.json({
        success: true,
        data: files
      });
    }
  }).catch((error) => {
    res.json({
      success: false,
      message: error.message
    });
  })
});
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
  Attachment.create({ name: filename, type: mimetype, content: buffer, createBy: req._userId }).then((data) => {
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
router.get('/preview', (req, res) => {
  let fileName = req.query.file;
  let thumbnail = req.query.thumbnail === 'true'; // 增加一个参数来决定是否压缩

  Attachment.findOne({ name: fileName }).then((image) => {
    if (!image) {
      res.json({
        success: false,
        message: '文件未找到！'
      });
    } else {
      let { type, content } = image || {};

      if (thumbnail) {
        // 使用sharp压缩图片
        sharp(content)
          .resize(200, 200) // 设置缩略图尺寸
          .toBuffer()
          .then((buffer) => {
            res.set('Content-Type', type);
            res.send(buffer);
          })
          .catch((error) => {
            res.json({
              success: false,
              message: '图片压缩失败！'
            });
          });
      } else {
        res.set('Content-Type', type);
        res.send(content);
      }
    }
  }).catch((error) => {
    res.json({
      success: false,
      message: error.message
    });
  });
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
router.get('/delete', jwt.verify, (req, res) => {
  let fileName = req.query.file;
  let userId = req._userId;
  if (!fileName) {
    res.json({
      success: false,
      message: '文件名错误！'
    });
  }
  Attachment.findOneAndDelete({ name: fileName, createBy: userId }).then((data) => {
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