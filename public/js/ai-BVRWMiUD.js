import{ay as p,be as h}from"./vendor-CWXOCgin.js";import{b}from"./index-B7emg1l8.js";const S=e=>p.post("/ai/getYouDaoAiTranslate",e).then(t=>t.data&&t.data.success?t.data.data&&t.data.data:Promise.reject(t.data&&t.data.message)),y=({appId:e,id:t,mode:l,question:c,autoSave:d},u,o)=>{let a=new AbortController;const g=localStorage.getItem("me_token")||"";return h(`${b}/ai/getAiChatStream`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:g,appId:e},openWhenHidden:!0,body:JSON.stringify({id:t,mode:l,question:c,autoSave:d}),signal:a==null?void 0:a.signal,onmessage:n=>{const i=n.data||"";if(i==="[DONE]"){o(),a.abort();return}const r=JSON.parse(i);if(r.Done){let m=r.id;o(m),a.abort();return}const s=r.choices[0].delta.content;if(s==null){console.log("stop..."),o();return}u(s)},onclose(){console.log("close")},onerror(n){throw a.abort(),n}})};export{S as a,y as g};
