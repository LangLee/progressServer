import express from 'express';
const router = express.Router();
import axios from 'axios';
import sha256 from '../utils/sha256';
const jwt = require('../jwt');
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// 百度千帆大模型

const API_KEY = "MNGeOeRpzX5dvOvHJhrYpDwq";
const SECRET_KEY = "EsDeAJAVtMYBFwOH4gR9V7UyZXEEEVR7";
const TOKEN_URL = "https://aip.baidubce.com/oauth/2.0/token";
const QIANFAN_CHART_AI_URL = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro"
const getToken = async () => {
    const url = `${TOKEN_URL}?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`
    return axios.post(url).then((res) => {
        if (res && res.data) {
            return res.data;
        }
    });
}
router.post('/getQianFanAiChart', jwt.verify, async (req, res) => {
    let {
        messages
    } = req.body;
    messages = messages || [{ role: "user", content: "你好！" }];
    let tokenObj = await getToken();
    if (!tokenObj || !tokenObj.access_token) {
        return res.json({
            success: false,
            message: "获取token失败"
        });
    }
    let token = tokenObj.access_token;
    const url = `${QIANFAN_CHART_AI_URL}?access_token=${token}`;
    const params = { messages }
    axios.post(url, params).then((data) => {
        if (data.data) {
            res.json({
                success: true,
                data: data.data
            });
        }
    })
})

// 有道智云
const truncate = (q) => {
    var len = q.length;
    if (len <= 20) return q;
    return q.substring(0, 10) + len + q.substring(len - 10, len);
}
const YOUDAO_TRANSLATE_URL = "https://openapi.youdao.com/api";
const YOUDAO_APP_KEY = '43c2129e39ddbfb6';
const YOUDAO_SECRET_KEY = 'ZNcKooCW67TkpI2wQpS85lZKhpmM4BsI';
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

    const params = {
        q: query,
        appKey: YOUDAO_APP_KEY,
        salt: salt,
        from: from,
        to: to,
        sign: sign,
        signType: "v3",
        curtime
    };
    axios.get(YOUDAO_TRANSLATE_URL, {params}).then(data => {
        if (data.data) {
            let {errorCode, translation} = data.data;
            if (errorCode === '0') {
                res.json({
                    success: true,
                    data: translation
                });
            } else {
                res.json({
                    success: false,
                    message: `翻译失败，错误码: ${errorCode}`
                });
            }
            
        }
    }).catch(()=>{
        res.json({
            success: false,
            message: "翻译失败"
        });
    })
})

// 阿里通义
const TONGYI_AI_URL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation';
const TONGYI_API_KEY = 'sk-5ff136a985654f72a5fb61e3218aa000';
router.post('/getTongYiAiChart', jwt.verify, async (req, res) => {
    let {
        messages,
        question
    } = req.body;
    const params = {
        model: 'qwen-turbo',
        input: {
            prompt: question
        },
        messages
    }
    const headers = {Authorization: TONGYI_API_KEY};
    axios.post(TONGYI_AI_URL, params, {headers}).then(data => {
        if (data.data) {
            res.json({
                success: true,
                data: data.data
            });
        }
    }).catch()
})
export default router;