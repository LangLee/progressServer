import express from 'express';
const router = express.Router();
import Word from '../model/word';
const jwt = require('../jwt');
import { getWord, getDailyEnglish } from '../utils/api'
router.get('/getDailyEnglish', async (req, res) => {
    // 获取当天的开始和结束时间戳
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);
    let word = await Word.findOne({
        dailyWord: true, createTime: {
            $gte: todayStart, //大于等于
            $lte: todayEnd //小于等于
        }
    }).exec();
    if (word) {
        res.json({
            success: true,
            data: word
        })
        return;
    }
    word = await getDailyEnglish();
    if (word) {
        let { content, note, id } = word || {};
        await Word.create({ code: id, english: content, chinese: note, dailyWord: true }).then((data) => {
            res.json({
                success: true,
                data: data
            })
        }).catch(() => {
            res.json({
                success: false,
                message: '创建每日一句失败！'
            })
        });
    } else {
        res.json({
            success: false,
            message: '获取每日一句失败！'
        })
    }
})

router.get('/getWords', jwt.verify, async (req, res) => {
    const userId = req._userId;
    const newWord = req.query.newWord;
    Word.find({ createBy: userId, newWord, dailyWord: false }).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        } else {
            res.json({
                success: false,
                message: '获取单词表失败！'
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '获取生词表失败！'
        })
    });
})

router.post('/createWord', jwt.verify, async (req, res) => {
    let userId = req._userId;
    let { code, english, chinese, newWord } = req.body;
    newWord = typeof newWord === 'boolean' ? newWord : true;
    if (!code) {
        res.json({
            success: false,
            message: '单词code不能为空！'
        })
        return;
    } else {
        Word.findOne({ code, createBy: userId }).then((data) => {
            if (data) {
                res.json({
                    success: false,
                    message: '单词已存在！'
                })
            } else {
                Word.create({ code, english, chinese, createBy: userId, newWord }).then((data) => {
                    if (data) {
                        res.json({
                            success: true,
                            message: '创建单词成功！',
                            data: data
                        })
                    }
                }).catch((e) => {
                    res.json({
                        success: false,
                        message: '创建单词失败！'
                    })
                });
            }
        })
    }
})
router.post('/toggleNewWord', jwt.verify, async (req, res) => {
    let { id, newWord } = req.body;
    Word.findByIdAndUpdate(id, { $set: { newWord: newWord } }).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '标记单词失败！'
        })
    });
})
router.post('/removeWord', jwt.verify, async (req, res) => {
    let { id } = req.body;
    Word.findByIdAndDelete(id).then((data) => {
        if (data) {
            res.json({
                success: true,
                data: data
            })
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: '删除单词失败！'
        })
    });
})

router.get('/getXHZDWord', async (req, res) => {
    let { word } = req.query;
    getWord(word).then((data) => {
        res.json({
            success: true,
            data: data
        })
    }).catch((e) => {
        res.json({
            success: false,
            message: '获取词典失败！'
        })
    });
})
export default router;