import express from 'express';
const router = express.Router();
import axios from 'axios';
import sha256 from '../utils/sha256';
import {getMoonshotAiChat, getTongYiAiChat, getQianFanAiChat} from '../utils/api';
import Book from '../model/book';
const jwt = require('../jwt');
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/getAiChat', jwt.verify, async (req, res) => {
    let {
        id,
        mode,
        question
    } = req.body;
    let appId = req.headers.appid;
    let func = function (messages, question) {
        switch (mode) {
            case 'tongyi':
                return getTongYiAiChat(messages, question);
            case 'moonshot':
                return getMoonshotAiChat(messages, question);
            case 'qianfan':
                return getQianFanAiChat(messages, question);
            default:
                return getTongYiAiChat(messages, question);
        }
    }
    let messages = [], book;
    if (id) {
        book = await Book.findById(id);
        if (book) {
            messages = book.content?JSON.parse(book.content):[]
        }
    }
    let result = await func(messages, question);
    if (result && result.success) {
        messages = messages.concat([{ role: "user", content: question }, { role: "assistant", content: result.data }])
        if (book) {
            book.content = JSON.stringify(messages);
            book.save();
        } else {
            book = await Book.create({
                title: question.slice(0, 8),
                content: JSON.stringify(messages),
                author: req._userId,
                appId,
                type: "chat"
            })
        }
        res.json({
            success: true,
            data: {id: book._id, response: result.data}
        });
    } else {
        res.json({
            success: false,
            message: result.message
        });
    }
})
// 有道智云
const truncate = (q) => {
    var len = q.length;
    if (len <= 20) return q;
    return q.substring(0, 10) + len + q.substring(len - 10, len);
}
const YOUDAO_TRANSLATE_URL = "https://openapi.youdao.com/api";
const YOUDAO_DICT_URL = "https://openapi.youdao.com/v2/dict"
const YOUDAO_APP_KEY = '43c2129e39ddbfb6';
const YOUDAO_SECRET_KEY = 'ZNcKooCW67TkpI2wQpS85lZKhpmM4BsI';
router.post('/getYouDaoAiDict', jwt.verify, async (req, res) => {
    let {
        query,
        langType = 'zh-CHS',
    } = req.body;
    let salt = (new Date).getTime();
    let curtime = Math.round(new Date().getTime() / 1000);
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    let sign = sha256(YOUDAO_APP_KEY + truncate(query) + salt + curtime + YOUDAO_SECRET_KEY);
    const params = {
        q: query,
        langType: langType,
        appKey: YOUDAO_APP_KEY,
        dicts: langType === 'zh-CHS' ? 'ce' : 'ec',
        sign: sign,
        signType: 'v3',
        curtime: curtime,
        salt: salt
    };
    axios.post(YOUDAO_DICT_URL, params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(data => {
        res.json({
            success: true,
            data: data.data
        });
    }).catch((e) => {
        res.json({
            success: false,
            message: e
        })
    });
})
router.post('/getYouDaoAiTranslate', jwt.verify, async (req, res) => {
    let {
        from,
        to,
        query
    } = req.body;
    let salt = (new Date).getTime();
    let curtime = Math.round(new Date().getTime() / 1000);
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'

    from = from || 'zh-CHS';
    to = to || 'en';
    let sign = sha256(YOUDAO_APP_KEY + truncate(query) + salt + curtime + YOUDAO_SECRET_KEY);

    const chatParams = {
        q: query,
        appKey: YOUDAO_APP_KEY,
        from: from,
        to: to,
        salt: salt,
        sign: sign,
        signType: 'v3',
        curtime,
        ext: 'mp3'
    };
    axios.get(YOUDAO_TRANSLATE_URL, { params: chatParams }).then(async data => {
        if (data.data) {
            let { errorCode, translation, speakUrl, tSpeakUrl } = data.data;
            translation = translation ? translation[0] : '';
            if (errorCode === '0') {
                res.json({
                    success: true,
                    data: { translation, speakUrl, tSpeakUrl }
                });
            } else {
                res.json({
                    success: false,
                    message: `翻译失败，错误码: ${errorCode}`
                });
            }
        }
    }).catch((e) => {
        res.json({
            success: false,
            message: "翻译失败"
        });
    })
})

export default router;