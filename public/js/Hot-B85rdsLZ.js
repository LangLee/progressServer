import{H as h}from"./Header-jlxeZXVD.js";import{_ as x}from"./index-bEem1MK9.js";import{ay as v,aj as g,ap as b,az as s,aA as a,aD as e,au as _,aE as n,aH as f,aO as m,b2 as p,aB as w,aG as u}from"./vendor-DqHIQWU1.js";import{g as y,a as k}from"./utils-DVDKZiQc.js";import"./userInfo-CSbayTML.js";import"./file-D7E9LNHg.js";import"./user-BZG51SbY.js";import"./remixicon-l0sNRNKZ.js";const j=r=>v.get("/api/hotTop",{params:{type:r}}).then(o=>{if(o.data.success)return o.data.data}),H={class:"flex flex-col w-full h-full shadow-lg rounded-md"},$={class:"flex items-center justify-between h-12 px-4"},T={key:0,class:"flex items-center text-lg font-bold"},B=["src"],C={class:"font-semibold text-sm"},z={key:0,class:"flex flex-col flex-1 overflow-y-auto px-4"},D={class:"flex items-center w-full py-2"},N={class:"flex-1"},V=["href"],q={class:"flex items-center justify-between h-12 px-4 text-slate-500"},A={class:"text-sm"},E={__name:"HotCard",props:{type:String},setup(r){const o=r,t=g({}),c=()=>{j(o.type).then(async l=>{l&&(t.value=l)})};return b(()=>{c()}),(l,G)=>(s(),a("div",H,[e("div",$,[t.value.name?(s(),a("div",T,[e("img",{src:_(y)(`icon/${t.value.name}.png`),class:"w-6 h-6 mr-2"},null,8,B),e("span",null,n(t.value.title),1)])):f("",!0),e("div",C,n(t.value.type),1)]),t.value.data&&t.value.data.length>0?(s(),a("div",z,[(s(!0),a(m,null,p(t.value.data,(d,i)=>(s(),a("div",D,[e("div",{class:w(["font-bold w-6 h-6 mr-2 rounded text-center",i===0?"bg-red-500 text-slate-50":i===1?"bg-red-300 text-slate-50":i===2?"bg-red-200 text-slate-50":"bg-slate-300"])},n(i+1),3),e("div",N,[e("a",{href:d.url,target:"_blank"},n(d.title),9,V)])]))),256))])):f("",!0),e("div",q,[e("span",A,n(_(k)(t.value.updateTime)),1),e("div",{class:"bg-slate-100 hover:bg-slate-300 h-6 w-6 text-center rounded-lg cursor-pointer",onClick:c},[u(x,{name:"refresh-line"})])])]))}},F={class:"flex flex-col w-full h-screen"},L={class:"flex-1 w-full flex flex-wrap p-2 overflow-y-auto max-w-screen-2xl mx-auto"},S={class:"w-full lg:w-1/4 h-96 p-2"},U={__name:"Hot",setup(r){const o=["toutiao","qq-news","weibo","zhihu","douyin","baidu","36kr","bilibili","netease-news","tieba","juejin","douban-movie","jianshu","hellogithub"];return(t,c)=>(s(),a("div",F,[u(h),e("div",L,[(s(),a(m,null,p(o,l=>e("div",S,[u(E,{type:l},null,8,["type"])])),64))])]))}};export{U as default};
