import{au as p,ae as u,ak as _,ay as t,az as a,aA as h,aC as e,aB as m,aQ as b,aP as l,aT as f,aS as g}from"./vendor-BLq22pPX.js";import{a as x}from"./book-B1UjrR01.js";import"./RemixIcon-BDA1nEXk.js";import{H as v}from"./Header-C6RPu72y.js";import"./userInfo-CtL9gwPY.js";import"./user-Bu3yqCiw.js";import"./index-DpKJEyGL.js";const k={class:"flex flex-col w-full h-screen"},w={class:"flex-1 p-4 lg:p-8 overflow-y-auto"},y={class:"lg:w-1/2 mx-auto"},B={class:"inline-block w-1/2 px-4 lg:text-right"},C={class:"text-normal text-slate-500"},M=e("span",{class:"hidden border-blue-500 border-teal-500 border-red-500 border-orange-500 border-amber-500 border-yellow-500 border-purple-500 border-green-500 border-pink-500 border-rose-500"},null,-1),S=e("div",{class:"absolute start-1/2 w-4 top-6 h-20"},[e("div",{class:"w-0.5 mx-auto bg-slate-300 h-full"})],-1),$={class:"inline-block w-1/2 pl-8"},z=["onClick"],V={__name:"Schedule",setup(A){const n=p(),r=u([]),d=o=>{n.push({path:`/book/${o._id}`,query:{appId:o.appId}})},i=["blue","teal","red","orange","amber","yellow","purple","green","pink","rose"];return _(()=>{x().then(o=>{r.value=o||[]})}),(o,F)=>(t(),a("div",k,[h(v,{hiddenFold:!1}),e("div",w,[e("ul",y,[(t(!0),a(m,null,b(r.value,(s,c)=>(t(),a("li",{key:c,class:"relative flex h-28"},[e("div",B,[e("span",C,l(s.createTime),1)]),e("div",{class:f(`absolute w-4 h-4 start-1/2 top-1 bg-slate-50 border-4 rounded-lg  border-${i[Math.floor(Math.random()*10)]}-500`)},null,2),M,S,e("div",$,[e("a",{class:"text-normal font-bold text-slate-700 cursor-pointer",onClick:g(H=>d(s),["stop"])},l(s.title),9,z)])]))),128))])])]))}};export{V as default};
