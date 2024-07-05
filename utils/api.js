import axios from 'axios';

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
export { getWord, getOneNote, getDailyEnglish }