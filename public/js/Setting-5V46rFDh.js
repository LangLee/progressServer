import{H as h}from"./Header-DxcrElIQ.js";import{ad as y,ae as v,aL as w,ay as n,az as i,aC as u,aT as b,aU as k,aP as x,aZ as C,aA as f}from"./vendor-BSAPUjJi.js";import{s as g,u as U}from"./userInfo-Dj_dDAEm.js";import{b as A}from"./index-DVZ6Nk77.js";import{u as $,a as j}from"./user-DPFXhvfg.js";import"./RemixIcon-Cb0msOyL.js";const B={class:"flex flex-col items-center justify-center"},z=["src"],F={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-16 h-16 text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},L=u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},null,-1),M=[L],S={class:"mt-2 text-sm text-gray-500"},H=y({__name:"AvatarUploader",props:{img:{type:String,default:""},upload:{type:Function,default:()=>null}},emits:["remove"],setup(d,{emit:t}){const o=d,c=t,a=v(),e=v(""),r=async l=>{const s=l.target.files[0];if(!s)return;if(!["image/jpeg","image/png"].includes(s.type)){e.value="只允许上传jpeg/png格式的图片";return}if(s.size>2*1024*1024){e.value="图片上传大小不能超过2MB";return}if(o.upload&&await o.upload(s)){const m=new FileReader;m.onload=p=>{a.value=p.target&&p.target.result,e.value=""},m.readAsDataURL(s)}},_=()=>{a.value=null,e.value="",c("remove")};return w(()=>o.img,l=>{l&&(a.value=l)},{immediate:!0}),(l,s)=>(n(),i("div",B,[u("label",{for:"avatar",class:b(["cursor-pointer relative inline-block w-32 h-32 rounded-full overflow-hidden bg-gray-200",{"border-4 border-dashed border-blue-500":!a.value}])},[a.value?(n(),i("img",{key:0,src:a.value,class:"w-full h-full object-cover"},null,8,z)):(n(),i("svg",F,M)),u("input",{type:"file",id:"avatar",class:"hidden",accept:"image/*",onChange:r,"accept-charset":"utf-8"},null,32)],2),a.value?(n(),i("button",{key:0,class:"mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",onClick:_}," 删除头像 ")):k("",!0),u("p",S,x(e.value),1)]))}}),I={class:"h-screen"},N={class:"p-4"},G={__name:"Setting",setup(d){const t=U(),o=C(()=>{if(t.value&&t.value.avatar)return`${A}/file/download?file=${t.value.avatar}&token=${localStorage.getItem("me_token")}`}),c=e=>$(t.value._id,e).then(r=>{r&&(t.value=r,g(r))}),a=()=>j(t.value).then(e=>{e&&(t.value=e,g(e))});return(e,r)=>(n(),i("div",I,[f(h,{hiddenFold:!0}),u("div",N,[f(H,{upload:c,img:o.value,onRemove:a},null,8,["img"])])]))}};export{G as default};
