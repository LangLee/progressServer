import{C as g}from"./Card-iLg7ySo8.js";import{d as C}from"./index-bEem1MK9.js";import{az as r,aA as c,aD as u,aB as A,aj as p,aW as U,a_ as B,a$ as E,aG as i,aH as j,ap as q,aO as h,b2 as H,au as w}from"./vendor-DqHIQWU1.js";import{P as v}from"./ProInput-DLzwbHQE.js";import{H as M}from"./Header-jlxeZXVD.js";import{g as N,c as P,u as R,r as S}from"./app-ECC3QMWu.js";import{m as z}from"./message-DsTL7g5X.js";import{u as F}from"./userInfo-CSbayTML.js";import"./utils-DVDKZiQc.js";import"./remixicon-l0sNRNKZ.js";/* empty css                                                                 */import"./user-BZG51SbY.js";import"./file-D7E9LNHg.js";const I={class:"relative inline-flex items-center h-6 border border-slate-400 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"},O=["checked"],D=u("span",{class:"sr-only"},"Use setting",-1),x={__name:"ProSwitch",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:d}){return(o,s)=>(r(),c("label",I,[u("input",{type:"checkbox",checked:e.modelValue,onChange:s[0]||(s[0]=t=>o.$emit("update:modelValue",t.target.checked)),class:"absolute opacity-0 w-0 h-0"},null,40,O),u("span",{"aria-hidden":"true",class:A(["inline-block w-5 h-5 rounded-full shadow transform ring-0 transition duration-200 ease-in-out",{"bg-blue-400 translate-x-5":e.modelValue,"bg-slate-400 translate-x-0":!e.modelValue}])},null,2),D]))}},G={class:"flex flex-row items-center px-2 my-2"},L=u("span",{class:"mr-2"},"是否内置",-1),W={class:"flex flex-row items-center px-2 my-2"},J=u("span",{class:"mr-2"},"快捷应用",-1),K={key:0,class:"flex flex-row items-center px-2 my-2"},Q=u("span",{class:"mr-2"},"系统应用",-1),T={__name:"AppModal",props:{title:{type:String,default:"新增应用"},visible:{type:Boolean,default:!1},app:{type:Object,default:()=>({title:"",url:"",icon:"",inner:!1,quick:!1,system:!1})},system:{type:Boolean,default:!1}},emits:["update:app","confirm","cancel"],setup(e,{emit:d}){const o=e,s=d,t=p(o.visible),f=()=>{s("confirm"),t.value=!1},V=()=>{s("cancel"),t.value=!1};return U(()=>o.visible,()=>{t.value=o.visible}),(y,l)=>(r(),B(C,{title:e.title,visible:t.value,"onUpdate:visible":l[7]||(l[7]=a=>t.value=a),onConfirm:f,onCancel:V},{default:E(()=>[i(v,{class:"lg:my-2",name:"name",modelValue:e.app.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.app.name=a),placeholder:"请输入应用名"},null,8,["modelValue"]),i(v,{class:"lg:my-2",name:"title",modelValue:e.app.title,"onUpdate:modelValue":l[1]||(l[1]=a=>e.app.title=a),placeholder:"请输入应用标题"},null,8,["modelValue"]),i(v,{class:"lg:my-2",name:"url",modelValue:e.app.url,"onUpdate:modelValue":l[2]||(l[2]=a=>e.app.url=a),placeholder:"请输入应用地址"},null,8,["modelValue"]),i(v,{class:"lg:my-2",name:"icon",modelValue:e.app.icon,"onUpdate:modelValue":l[3]||(l[3]=a=>e.app.icon=a),placeholder:"请输入应用图标"},null,8,["modelValue"]),u("div",G,[L,i(x,{modelValue:e.app.inner,"onUpdate:modelValue":l[4]||(l[4]=a=>e.app.inner=a)},null,8,["modelValue"])]),u("div",W,[J,i(x,{modelValue:e.app.quick,"onUpdate:modelValue":l[5]||(l[5]=a=>e.app.quick=a)},null,8,["modelValue"])]),e.system?(r(),c("div",K,[Q,i(x,{modelValue:e.app.system,"onUpdate:modelValue":l[6]||(l[6]=a=>e.app.system=a)},null,8,["modelValue"])])):j("",!0)]),_:1},8,["title","visible"]))}},X={class:"h-screen w-full flex flex-col overflow-y-auto"},Y={class:"flex p-2 lg:p-4 flex-wrap justify-start max-w-screen-2xl mx-auto"},Z={class:"flex flex-col items-center p-2 lg:p-4 basis-1/4 md:basis-1/6 lg:basis-1/12"},ce={__name:"Apps",setup(e){const d=p([]),o=p(!1),s=p(void 0),t=p(!1),f=F(),V=()=>{t.value=!0,s.value={title:"新增",icon:"book-2-fill",inner:!0},o.value=!0},y=n=>{t.value=!1,s.value=n,o.value=!0},l=async()=>{t.value?await P(s.value).then(n=>{d.value.push(n),t.value=!1}):await R(s.value).catch(n=>{z.error(n)}),o.value=!1},a=()=>{t.value=!1,s.value=void 0,o.value=!1},k=n=>{S(n).then(b=>{d.value=d.value.filter(m=>m._id!==n)})};return q(()=>{N("user").then(n=>{d.value=n||[]})}),(n,b)=>(r(),c(h,null,[u("div",X,[i(M,{hiddenFold:!0}),u("div",Y,[(r(!0),c(h,null,H(d.value,(m,_)=>(r(),c("div",{key:m._id,class:"flex flex-col items-center p-2 lg:p-4 basis-1/4 md:basis-1/6 lg:basis-1/12"},[i(g,{editable:!0,modelValue:m,theme:"blue",onEdit:$=>y(m),onRemove:$=>k(m._id)},null,8,["modelValue","onEdit","onRemove"])]))),128)),u("div",Z,[i(g,{theme:"blue",modelValue:{title:"新增应用",icon:"add-line"},onCardClick:V})])])]),i(T,{title:`${t.value?"新增应用":"编辑应用"}`,visible:o.value,app:s.value,"onUpdate:app":b[0]||(b[0]=m=>s.value=m),onConfirm:l,onCancel:a,system:w(f)&&w(f).administrator},null,8,["title","visible","app","system"])],64))}};export{ce as default};
