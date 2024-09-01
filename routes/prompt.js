import express from 'express';
const router = express.Router();
import Prompt from '../model/prompt';
const jwt = require('../jwt');
router.get('/getPrompts', jwt.verify, async (req, res) => {
    const userId = req._userId;
    Prompt.find({ createBy: userId }).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        } else {
            res.json({
                success: false,
                message: '获取提词器失败！'
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '获取提词器失败！'
        })
    });
})

router.post('/createPrompt', jwt.verify, async (req, res) => {
    let userId = req._userId;
    let { name, content } = req.body;
    Prompt.create({ name, content, createBy: userId }).then((data) => {
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
router.post('/updatePrompt', jwt.verify, async (req, res) => {
    let { _id, name, content } = req.body;
    Prompt.findByIdAndUpdate(_id, { $set: { name, content } }).then((data) => {
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
router.post('/removePrompt', jwt.verify, async (req, res) => {
    let { id } = req.body;
    Prompt.findByIdAndDelete(id).then((data) => {
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