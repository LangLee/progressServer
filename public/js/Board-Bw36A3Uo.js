import{H as i}from"./Header-jlxeZXVD.js";import{az as o,aA as a,aD as e,aE as n,aK as u,aj as _,ap as m,aG as f,aO as h,b2 as x,a_ as p}from"./vendor-DqHIQWU1.js";import{d as g}from"./book-J-0CnIOg.js";import"./index-bEem1MK9.js";import"./userInfo-CSbayTML.js";import"./file-D7E9LNHg.js";import"./user-BZG51SbY.js";const k={class:"flex flex-row w-full rounded-lg shadow-lg mb-2 lg:mb-4 p-2 bg-white dark:bg-neutral-800"},b={class:"w-24 h-24 mr-2"},w=["src"],v={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-full",fill:"none",viewBox:"0 0 24 24",stroke:"rgb(147 197 253)"},y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},null,-1),B=[y],$={class:"flex-1 flex flex-col"},j={class:"lg:text-lg font-semibold text-slate-700 mb-2 dark:text-gray-200"},C={class:"flex flex-row text-sm text-gray-400 dark:text-gray-500 mb-2"},H={class:"text-gray-500 dark:text-gray-400 text-sm"},L={__name:"BookCard",props:{book:{type:Object,required:!0}},setup(t){return(c,l)=>(o(),a("div",k,[e("div",b,[t.book.image?(o(),a("img",{key:0,class:"w-full h-full rounded-lg",src:t.book.image,alt:""},null,8,w)):(o(),a("svg",v,B))]),e("div",$,[e("div",j,n(t.book.title),1),e("div",C,[e("span",null,n(t.book.updateTime),1)]),e("div",H,n(t.book.description||"这是描述信息..."),1)])]))}},M={class:"h-screen w-full flex flex-col overflow-y-auto"},V={class:"flex-1 flex p-2 lg:p-4 flex-wrap justify-start bg-gray-300/20"},q={class:"flex flex-col w-full max-w-screen-md mx-auto"},K={__name:"Board",setup(t){const c=u(),l=_([]),d=s=>{c.push({path:`/book/${s._id}`,query:{appId:s.appId}})};return m(()=>{g().then(s=>{l.value=s})}),(s,z)=>(o(),a("div",M,[f(i,{hiddenFold:!0}),e("div",V,[e("div",q,[(o(!0),a(h,null,x(l.value,r=>(o(),p(L,{key:r._id,book:r,onClick:A=>d(r)},null,8,["book","onClick"]))),128))])])]))}};export{K as default};
