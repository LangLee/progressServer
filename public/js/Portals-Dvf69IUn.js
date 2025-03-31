import{ai as L,aj as r,ap as O,az as v,aA as d,aD as u,aG as i,a$ as _,aO as x,b2 as h,aH as y,aE as S,a_ as T,aF as q}from"./vendor-DqHIQWU1.js";import{d as J,_ as k}from"./index-bEem1MK9.js";import{C}from"./Card-iLg7ySo8.js";import{a as K,G as Q,B as W,c as X,u as Y}from"./GroupModal-DcQdgpqj.js";import{H as Z}from"./Header-jlxeZXVD.js";import{r as ee,c as oe,u as le}from"./book-J-0CnIOg.js";import{m as B}from"./message-DsTL7g5X.js";import"./utils-DVDKZiQc.js";import"./remixicon-l0sNRNKZ.js";import"./ProInput-DLzwbHQE.js";/* empty css                                                                 */import"./userInfo-CSbayTML.js";import"./file-D7E9LNHg.js";import"./user-BZG51SbY.js";const ae={class:"flex flex-col w-full"},te={key:0},se={class:"flex-1 p-2 lg:p-4 overflow-y-auto w-full max-w-screen-2xl mx-auto"},ne=["onMouseover"],ie={class:"mr-2"},ue={class:"flex flex-row flex-wrap"},re={key:0,class:"p-2 md:p-4 lg:p-4 basis-1/4 md:basis-1/6 lg:basis-1/12"},ve=u("p",{class:"align-center"},"你真的要删除这个书签？",-1),Me=L({__name:"Portals",setup(de){const a=r(Array()),m=r(!1),t=r(),p=r(),n=r(),s=r(!1),f=r(),b=r(""),w=e=>{s.value=!0,t.value={title:"新增书签",type:"link",url:"",category:e.id}},M=e=>{s.value=!1,t.value=e,p.value=e.category},$=e=>{f.value=e.id},P=()=>{f.value=null},E=()=>{ee(f.value).then(e=>{a.value=a.value.map(o=>(o.id===e.category&&(o.books=o.books&&o.books.filter(l=>l.id!==e.id)),o)),f.value=null})},R=()=>{s.value=!0,n.value={name:""}},V=e=>{s.value=!1,n.value=e},G=()=>{B.warning("还未开发，敬请期待")},N=()=>{B.warning("还未开发，敬请期待")},A=()=>{s.value?X(n.value).then(e=>{a.value&&a.value.length>0&&a.value.push(e),n.value=void 0,s.value=!1}):Y(n.value).then(e=>{a.value=a.value.map(o=>o.id===e.id?e:o),n.value=void 0})},F=()=>{s.value?oe(t.value).then(e=>{let o=a.value.find(({id:l})=>l===e.category);o&&(o.books=o.books||[],e.id=e._id,o.books.splice(0,0,e),t.value=void 0,s.value=!1)}):t&&t.value&&le(t.value).then(e=>{e.category!==p.value&&(a.value=a.value.map(o=>{var l;return o.id===p.value&&(o.books=o.books&&o.books.filter(g=>g.id!==e.id)),o.id===e.category&&((l=o.books)==null||l.splice(0,0,e)),o})),t.value=void 0})},H=()=>{n.value=void 0,s.value=!1},I=()=>{t.value=void 0,p.value=void 0,s.value=!1},D=e=>{b.value=e},U=()=>{b.value=""};return O(()=>{K().then(e=>{m.value=e.editable,a.value=e.portals})}),(e,o)=>(v(),d(x,null,[u("div",ae,[i(Z,{hiddenFold:!0},{default:_(()=>[m.value?(v(),d("div",te,[u("button",{class:"px-2 py-1 text-2xl text-gray-500 hover:bg-gray-100 rounded",onClick:R},[i(k,{name:"add-line"})]),u("button",{class:"px-2 py-1 text-2xl text-gray-500 hover:bg-gray-100 rounded",onClick:G},[i(k,{name:"import-line"})]),u("button",{class:"px-2 py-1 text-2xl text-gray-500 hover:bg-gray-100 rounded",onClick:N},[i(k,{name:"export-line"})])])):y("",!0)]),_:1}),u("div",se,[(v(!0),d(x,null,h(a.value,(l,g)=>(v(),d("ul",{key:g},[u("p",{class:"mx-2 md:mx-4 lg:mx-4 text-gray-600 dark:text-gray-200 font-medium",onMouseover:c=>D(l.id),onMouseleave:o[0]||(o[0]=c=>U())},[u("span",ie,S(l.name),1),m.value&&b.value===l.id?(v(),T(k,{key:0,class:"shadow-sm rounded-sm text-blue-300 hover:text-blue-700",name:"edit-line",onClick:q(c=>V(l),["stop"])},null,8,["onClick"])):y("",!0)],40,ne),u("div",ue,[(v(!0),d(x,null,h(l.books,(c,j)=>(v(),d("li",{class:"p-2 md:p-4 lg:p-4 basis-1/4 md:basis-1/6 lg:basis-1/12",key:j},[i(C,{theme:"blue",editable:m.value,modelValue:c,onEdit:z=>M(c),onRemove:z=>$(c)},null,8,["editable","modelValue","onEdit","onRemove"])]))),128)),m.value?(v(),d("li",re,[i(C,{theme:"blue",modelValue:{title:"新增书签",icon:"add-line"},onCardClick:()=>w(l)},null,8,["onCardClick"])])):y("",!0)])]))),128))])]),i(Q,{title:`${s.value?"新增分类":"编辑分类"}`,visible:!!n.value,group:n.value,"onUpdate:group":o[1]||(o[1]=l=>n.value=l),onConfirm:A,onCancel:H},null,8,["title","visible","group"]),i(W,{fixedType:"link",title:`${s.value?"新增书签":"编辑书签"}`,visible:!!t.value,book:t.value,"onUpdate:book":o[2]||(o[2]=l=>t.value=l),onConfirm:F,categories:a.value,onCancel:I},null,8,["title","visible","book","categories"]),i(J,{visible:!!f.value,closable:!1,title:"确认删除",onConfirm:E,onCancel:P},{default:_(()=>[ve]),_:1},8,["visible"])],64))}});export{Me as default};
