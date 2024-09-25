import express from 'express';
const router = express.Router();
import User from '../model/user'
const jwt = require('../jwt');
import mongoose from 'mongoose';
import Attachment from '../model/attachment';
import upload from '../utils/upload';
import { getUnlimitedQRCode } from '../utils/api'
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 登录成功生成token
router.post('/login', (req, res) => {
  let {name, password} = req.body || {};
  User
    .findOne({$or: [{ name }, { email: name }, { mobile: name }]})
    .exec()
    .then(data => {
      if (data) {
        if (data.password === password) {
          let token = jwt.sign({ _id: data._id });
          res.json({
            success: true,
            message: '登录成功',
            data: { token, user: data },// 生成token，并传入用户_id
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
  let {name, email, mobile, password} = req.body || {};
  User
    .findOne({ name })
    .exec()
    .then(data => {
      if (data) {
        res.json({
          success: false,
          message: '用户已经存在'
        });
      } else {
        User.create({ name, mobile, email, password }).then((data) => {
          res.json({
            success: true,
            message: '注册成功',
            data: data
          });
        })
      }
    });
});
// 更新用户
router.post('/update', (req, res) => {
  let { _id, name, avatar, mobile, email } = req.body || {};
  User
    .findByIdAndUpdate(_id, { $set: { name: name, avatar: avatar, mobile, email } })
    .then(data => {
      if (data) {
        res.json({
          success: true,
          data: data
        });
      } else {
        res.json({
          success: false,
          message: '更新失败！'
        });
      }
    });
});
// 更新头像
router.post('/uploadAvatar', jwt.verify, upload.single('avatar'), async (req, res) => {
  if (!req.file) {
    return res.json({
      success: false,
      message: '上传失败！'
    });
  }
  let { userId } = req.body || {};
  let user = await User.findById(userId);
  if (user.avatar) {
    // 删除历史头像
    // 本地硬盘存储
    // const filePath = `uploads/${user.avatar}`;
    // if (fs.existsSync(filePath)) {
    //   fs.unlink(filePath, (err) => {
    //     if (err) {
    //       res.json({
    //         success: false,
    //         message: err.message
    //       });
    //     }
    //   });
    // }
    // mongodb存储
    await Attachment.findOneAndDelete({ name: user.avatar }).catch(() => {
      res.json({
        success: false,
        message: '删除旧的头像失败！'
      });
    });
  }
  let { fieldname, originalname, mimetype, buffer } = req.file || {};
  originalname = Buffer.from(originalname, "latin1").toString("utf8");
  let filename = fieldname + '_' + Date.now() + '_' + originalname;
  Attachment.create({ name: filename, type: mimetype, content: buffer, createBy: userId}).then((data) => {
    if (data) {
      user.$set({ avatar: filename });
      user.save().then((data) => {
        if (data) {
          let { _id, name, avatar } = data;
          res.json({
            success: true,
            data: { _id, name, avatar }
          });
        } else {
          res.json({
            success: false,
            message: '更新头像失败！'
          });
        }
      });
    } else {
      res.json({
        success: false,
        message: '上传失败！'
      });
    }
  }).catch(() => {
    res.json({
      success: false,
      message: '上传失败！'
    });
  });
});
router.post('/removeAvatar', jwt.verify, async (req, res) => {
  let { _id, avatar } = req.body || {};
  if (!avatar) {
    return res.json({
      success: false,
      message: '删除失败！'
    });
  }
  Attachment.findOneAndDelete({ name: avatar }).then(() => {
    User.findByIdAndUpdate(_id, { $set: { avatar: '' } }).then((data) => {
      if (data) {
        let { _id, name } = data;
        res.json({
          success: true,
          data: { _id, name, avatar: '' }
        });
      } else {
        res.json({
          success: false,
          message: '更新头像失败！'
        });
      }
    });
  }).catch(() => {
    res.json({
      success: false,
      message: '删除失败！'
    });
  });
  // 本地硬盘存储 删除头像
  // const filePath = `uploads/${avatar}`;
  // if (fs.existsSync(filePath)) {
  //   fs.unlink(filePath, (err) => {
  //     if (err) {
  //       res.json({
  //         success: false,
  //         message: '删除失败！'
  //       });
  //     } else {
  //       User.findByIdAndUpdate(_id, { $set: { avatar: '' } }).then((data) => {
  //         if (data) {
  //           let { _id, name } = data;
  //           res.json({
  //             success: true,
  //             data: { _id, name, avatar: '' }
  //           });
  //         } else {
  //           res.json({
  //             success: false,
  //             message: '更新失败！'
  //           });
  //         }
  //       });
  //     }
  //   });
  // } else {
  //   User.findByIdAndUpdate(_id, { $set: { avatar: '' } }).then((data) => {
  //     if (data) {
  //       let { _id, name } = data;
  //       res.json({
  //         success: true,
  //         data: { _id, name, avatar: '' }
  //       });
  //     } else {
  //       res.json({
  //         success: false,
  //         message: '更新失败！'
  //       });
  //     }
  //   });
  // }
});

// 获取用户列表
router.get('/getLoginUser', jwt.verify, (req, res) => {
  let userId = req._userId;
  User
    .findOne({ _id: userId }).then(data => {
      if (data) {
        res.json({
          success: true,
          data: data
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
  let userIdObj = new mongoose.Types.ObjectId(userId);
  User.aggregate([
    {
      $match: {
        _id: { $ne: userIdObj }
      }
    },
    {
      $lookup: {
        from: "message", // 关联的集合名称
        let: { mainId: "$_id" }, // 定义变量，这里的$_id是主文档的字段
        pipeline: [ // 关联集合的查询管道
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$from", "$$mainId"] },
                  { $eq: ["$to", userIdObj] },
                  { $ne: ["$status", "read"] }
                ]
              }
            }
          }, // 关联条件
          { $limit: 1 } // 限制输出，如果关联集合为空，则不会输出这个stage的结果
        ],
        as: "message_info" // 输出字段名
      }
    },
    {
      $project: {
        _id: 1,
        name: 1,
        avatar: 1,
        noReadCount: {
          $cond: [
            { $gt: [{ $size: "$message_info" }, 0] },
            { $sum: 1 },
            0
          ]
        }
      }
    }
  ])
    // User.aggregate([
    //   {
    //     $match: {
    //       _id: { $ne: userIdObj }
    //     }
    //   },
    //   {
    //     $lookup: {
    //       from: "message",
    //       localField: "_id",
    //       foreignField: "from",
    //       as: "message_info"
    //     }
    //   },
    //   {
    //     $unwind: {
    //       path: "$message_info",
    //       preserveNullAndEmptyArrays: true
    //     }
    //   },
    //   {
    //     $match: {
    //       "message_info.to":userIdObj,
    //       // "message_info.status": { $ne: "read" }
    //     }
    //   },
    //   {
    //     $group: {
    //       _id: "$_id",
    //       name: { $first: "$name" },
    //       avatar: { $first: "$avatar" },
    //       noReadCount: { $sum: 1 }
    //     }
    //   },
    //   {
    //     $project: {
    //       _id: 1,
    //       name: 1,
    //       avatar: 1,
    //       noReadCount: 1
    //     }
    //   }
    // ])
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
router.get('/getQRCode', (req, res) => {
  let scene = req.query.scene || '123';
  getUnlimitedQRCode(scene).then(data => {
    if (data && data.data) {
      const base64 = data.data.toString('base64');
      const base64String = `data:image/png;base64,${base64}`;
      res.json({
        success: true,
        data: base64String
      });
    } else {
      res.json({
        success: false,
        message: '获取二维码失败！'
      });
    }
  }).catch(err => {
    res.json({
      success: false,
      message: err.message
    });
  })
})
export default router;
