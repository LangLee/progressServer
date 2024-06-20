import express from 'express';
const router = express.Router();
import axios from 'axios';
const jwt = require('../jwt');
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 百度千帆大模型

const API_KEY = "MNGeOeRpzX5dvOvHJhrYpDwq";
const SECRET_KEY="EsDeAJAVtMYBFwOH4gR9V7UyZXEEEVR7";
const TOKEN_URL = "https://aip.baidubce.com/oauth/2.0/token";
const CHART_AI_URL = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro"
const getToken = async ()=>{
    const url = `${TOKEN_URL}?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`
    return axios.post(url).then((res) => {
        if (res && res.data) {
            return res.data;
        }
    });
}
router.post('/getQianfanAiChart', jwt.verify, async (req, res) => {
    let {
        messages
    } = req.body;
    messages = messages || [{role: "user", content: "你好！"}];
    let tokenObj = await getToken();
    if (!tokenObj || !tokenObj.access_token) {
        return res.json({
            success: false,
            message: "获取token失败"
        });
    }
    let token = tokenObj.access_token;
    const url = `${CHART_AI_URL}?access_token=${token}`;
    const params = {messages: messages || []}
    axios.post(url, params).then((data)=>{
        if (data.data) {
            res.json({
                success: true,
                data: data.data
            });
        }
    })
})

export default router;