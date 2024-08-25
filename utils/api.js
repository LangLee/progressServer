import axios from 'axios';
import {OpenAI} from 'openai';

// 天聚数行 
const langlee_apiKey = 'af7db205f03bc9d1d2b455424e3aadae';
const liliang_apiKey = 'f58d47e888cdee871fc5fb5fb3326248';
// 新华字典

const getWord = (word) => {
    return axios.get(`https://apis.tianapi.com/xhzd/index?key=${liliang_apiKey}&word=${word}`).then((res) => {
        if (res.data.code === 200) {
            return res.data.result;
        }
    });
}
const getDailyEnglish = () => {
    return axios.get(`https://apis.tianapi.com/everyday/index?key=${langlee_apiKey}`).then(res => {
        if (res.data.code === 200) {
            return res.data.result;
        }
    });
}
const getOneNote = () => {
    return axios.get(`https://apis.tianapi.com/one/index?key=${langlee_apiKey}`).then(res => {
        if (res.data.code === 200) {
            return res.data.result;
        }
    })
}
// 阿里通义
const TONGYI_AI_URL = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation';
const TONGYI_API_KEY = 'sk-5ff136a985654f72a5fb61e3218aa000';
const getTongYiAiChat = (messages, question)=>{
    const params = {
        model: 'qwen-turbo',
        input: {
            prompt: question
        },
        messages
    }
    const headers = { Authorization: TONGYI_API_KEY };
    return axios.post(TONGYI_AI_URL, params, { headers }).then(data => {
        if (data.data) {
            let text = data?.data?.output?.text || "";
            return {
                success: true,
                data: text
            };
        }
    }).catch(
        err => {
            return {
                success: false,
                message: err.message
            }
        }
    )
}

// 月之暗面 Moonshot
const MOONSHOT_AI_URL = 'https://api.moonshot.cn/v1';
const MOONSHOT_API_KEY = 'sk-D0iEXHeRJAmEIz7DXTExkQwK51lWknK8xjK9VomjPT7WqR5u';
const moonshotClient = new OpenAI({
    apiKey: MOONSHOT_API_KEY,    
    baseURL: MOONSHOT_AI_URL,
});

const getMoonshotAiChat = async (messages, question, stream = false) => {
    messages = messages || [];
    messages.push({ role: "user", content: question });
    const completion = await moonshotClient.chat.completions.create({
        model: "moonshot-v1-8k",         
        messages: messages,
        temperature: 0.3,
        stream
    }).catch(err => {
        return {
            success: false,
            message: err.message
        }
    });
    if (stream) {
        return completion;
    }
    if (completion && completion.choices && completion.choices.length > 0) {
        return {
            success: true,
            data: completion.choices[0].message.content
        };
    } else {
        return {
            success: false,
            message: '对话失败'
        };
    }
}
// 千帆
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
const getQianFanAiChat = async (messages, question)=>{
    messages = messages || [];
    messages.push({role: 'user', content: question});
    let tokenObj = await getToken();
    if (!tokenObj || !tokenObj.access_token) {
        return {
            success: false,
            message: "获取token失败"
        }
    }
    let token = tokenObj.access_token;
    const url = `${QIANFAN_CHART_AI_URL}?access_token=${token}`;
    const params = { messages }
    return axios.post(url, params).then((data) => {
        if (data.data) {
            return {
                success: true,
                data: data?.data?.result
            };
        }
    })
}

//微信小程序
const WX_APPID='wx40228c524762c2d1';
const WX_APP_SECRET = 'f5578a83e2394f6d4d69600c9d3a428a';
const WX_ACCESS_TOKEN_URL = 'https://api.weixin.qq.com/cgi-bin/token';
const getWXAccessToken = async () => {
    const url = `${WX_ACCESS_TOKEN_URL}?grant_type=client_credential&appid=${WX_APPID}&secret=${WX_APP_SECRET}`
    return axios.post(url).then((res) => {
        if (res && res.data) {
            return res.data.access_token;
        }
    });
}
const WX_UNLIMITED_QR_CODE_URL = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit'
const getUnlimitedQRCode = async (scene) => {
    let token = await getWXAccessToken();
    if (!token) {
        return {
            success: false,
            message: "获取token失败"
        }
    }
    const url = `${WX_UNLIMITED_QR_CODE_URL}?access_token=${token}`;
    const params = {
        scene: scene,
        width: 280,
        auto_color: true,
        line_color: {
            "r": "0",
            "g":"0",
        }
    }
    return axios.post(url, params, { responseType: 'arraybuffer' }).then((data) => {
        if (data.data) {
            return {
                success: true,
                data: data.data
            };
        }
    })
}
export { getWord, getOneNote, getDailyEnglish, getMoonshotAiChat, getQianFanAiChat, getTongYiAiChat, getUnlimitedQRCode }