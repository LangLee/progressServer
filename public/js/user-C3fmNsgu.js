import{at as e}from"./vendor-BLq22pPX.js";const o=t=>e.post("/users/login",t),u=t=>e.post("/users/register",t),d=()=>e.get("/users/getLoginUser").then(t=>t.data.success?t.data.data:Promise.reject(t.data.message)),c=()=>e.get("/users/getContactList").then(t=>t.data.success?t.data.data:Promise.reject(t.data.message)),i=(t,a)=>{let s=new FormData;return s.append("userId",t),s.append("avatar",a),e.post("/users/uploadAvatar",s,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>r.data.success?r.data.data:Promise.reject(r.data.message))},g=t=>e.post("/users/removeAvatar",t).then(a=>a.data.success?a.data.data:Promise.reject(a.data.message));export{g as a,d as b,c as g,o as l,u as r,i as u};
