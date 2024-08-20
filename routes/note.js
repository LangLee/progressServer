import express from 'express';
const router = express.Router();
import Note from '../model/note';
const jwt = require('../jwt');
import { getOneNote } from '../utils/api'
router.get('/getOneNote', async (req, res) => {
    // 获取当天的开始和结束时间戳
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    let note = await Note.findOne({
        daily: true, 
        createTime: {
            $gte: todayStart, //大于等于
            $lte: todayEnd //小于等于
        }
    }).exec();
    if (note) {
        res.json({
            success: true,
            data: note
        })
        return;
    }
    note = await getOneNote();
    if (note) {
        console.log(note);
        let { word, wordfrom, imgurl, imgauthor } = note || {};
        wordfrom = wordfrom || 'one';
        imgauthor = imgauthor || 'one';        
        await Note.create({ word, from:wordfrom, image: imgurl, photoBy: imgauthor, daily: true }).then((data) => {
            res.json({
                success: true,
                data: data
            })
        }).catch(() => {
            res.json({
                success: false,
                message: '获取每日一言失败！'
            })
        });
    } else {
        res.json({
            success: false,
            message: '获取失败！'
        })
    }
})

router.get('/getNotes', jwt.verify, async (req, res) => {
    const userId = req._userId;
    Note.find({ createBy: userId }).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        } else {
            res.json({
                success: false,
                message: '获取箴言失败！'
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '获取箴言失败！'
        })
    });
})

router.post('/createNote', jwt.verify, async (req, res) => {
    let userId = req._userId;
    let { word, from, image, photoBy } = req.body;
    Note.create({ word, from, image, photoBy, createBy: userId }).then((data) => {
        if (data) {
            res.json({
                success: true,
                message: '创建成功！',
                data: data
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '创建失败！'
        })
    });
})
router.post('/updateNote', jwt.verify, async (req, res) => {
    let { _id, word, from, image, photoBy } = req.body;
    Word.findByIdAndUpdate(_id, { $set: { word, from, image, photoBy } }).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '更新失败！'
        })
    });
})
router.post('/removeNote', jwt.verify, async (req, res) => {
    let { id } = req.body;
    Note.findByIdAndDelete(id).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '删除失败！'
        })
    });
})

export default router;