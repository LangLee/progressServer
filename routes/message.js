import express from 'express';
const router = express.Router();
import Message from '../model/message';
const jwt = require('../jwt');

router.get('/getContactMessages', jwt.verify, async (req, res) => {
    const userId = req._userId;
    const contact = req.query.contact;
    Message.find({$or: [{$and: [{from: userId}, {to: contact}]},{$and: [{from: contact},{to:userId}]}]}).select('from to createTime content status').sort({createTime: 'asc'}).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        } else {
            res.json({
                success: false,
                message: '获取聊天信息失败！'
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '获取聊天信息失败！'
        })
    });
})
router.post('/updateContactMessageStatus', jwt.verify, async (req, res) => {
    let {from ,to ,status} = req.body || {};
    Message.updateMany({from, to}, {$set: {status: status}}).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        } else {
            res.json({
                success: false,
                message: '更新聊天信息状态失败！'
            })
        }
    })
})
export default router;