import{_ as h}from"./GroupModal-YoYI_7zp.js";import{H as _}from"./Header-Ch826NfX.js";import{_ as y}from"./ChatPanel-BuLZjM_t.js";import{M as x}from"./Menu-QEa-JMzE.js";import{g as C}from"./ai-gi_gpRwF.js";import{au as w,av as L,ae as u,aL as b,ay as M,az as V,aA as c,aN as B,aC as I,ao as N}from"./vendor-BLq22pPX.js";import{g as T}from"./book-B1UjrR01.js";import"./Modal-C_kiZLYD.js";import"./RemixIcon-BDA1nEXk.js";import"./userInfo-CtL9gwPY.js";import"./user-C3fmNsgu.js";import"./index-BVdKAO4C.js";import"./Loading-BaoDrf3C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./message-AZuur2LZ.js";const q=[{value:"tongyi",label:"通义千问"},{value:"qianfan",label:"文心一言"},{value:"moonshot",label:"月之暗面"}],S={class:"flex flex-col w-full h-screen"},k={class:"flex-1 flex flex-col w-full lg:pl-80 overflow-y-auto"},W={__name:"Robot",setup(A){const i=w(),d=L(),a=u([]),n=u(!1),r=u("tongyi"),l=u(""),t=u(!0),f=e=>{if(e!==void 0){t.value=e;return}t.value=!t.value},m=(e,o)=>{i.push({path:"/robot",query:{id:e,appId:o}}),l.value=e||"",e?T(e).then(s=>{a.value=JSON.parse(s.content||"[]")}):a.value=[]},p=e=>{n.value=!0,C(l.value,r.value,e).then(o=>{let{id:s,response:g}=o;l.value=s,n.value=!1,a.value=a.value.concat([{role:"user",content:e},{role:"assistant",content:g}])}).catch(o=>{n.value=!1,a.value=a.value.concat([{role:"assistant",content:o.message}])})},v=(e,o)=>{r.value=e,a.value&&a.value.length>0&&(i.push({path:"/robot",query:{id:"new",appId:d.query.appId}}),a.value=[],l.value="")};return b(d.query.id,(e,o)=>{l.value=e},{immediate:!0}),(e,o)=>(M(),V("div",S,[c(_,{onToggleFold:f,fold:t.value},{default:B(()=>[c(h,{class:"w-32 lg:w-48 mx-2",modelValue:r.value,"onUpdate:modelValue":[o[0]||(o[0]=s=>r.value=s),v],palaceHolder:"请选择模型",options:N(q)},null,8,["modelValue","options"])]),_:1},8,["fold"]),c(x,{fixedType:"chat",defaultGroup:!0,fold:t.value,defaultSelected:!1,onToggleFold:f,onMenuChange:m},null,8,["fold"]),I("div",k,[c(y,{editable:!0,messages:a.value,loading:n.value,onChart:p},null,8,["messages","loading"])])]))}};export{W as default};
