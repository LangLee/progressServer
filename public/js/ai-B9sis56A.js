import{at as s}from"./vendor-BSAPUjJi.js";const i=e=>s.post("/ai/getYouDaoAiTranslate",e).then(a=>a.data&&a.data.success?a.data.data&&a.data.data:Promise.reject(a.data&&a.data.message)),n=(e,a,d)=>s.post("/ai/getAiChat",{id:e,mode:a,question:d}).then(t=>t.data&&t.data.success?t.data.data:Promise.reject(t.data&&t.data.message));export{i as a,n as g};
