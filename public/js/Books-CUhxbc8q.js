import{M as j}from"./Menu-jBSap3KG.js";import{H as q}from"./Header-RLgrfCVI.js";import{az as D,aA as A,aj as b,aB as E,ao as N,al as T,aw as z,aR as H,aD as u,aE as p,aH as a,aF as n,aO as O,aP as P,aU as F,aV as _,aG as w,aT as K,aW as M,aN as S,aX as I,ai as L,aY as W,aS as R,aC as G}from"./vendor-7SOp03Eo.js";import{R as i}from"./RemixIcon-C3kAUqBT.js";import{s as X}from"./book-D8GVYk51.js";import"./GroupModal-CTqx1GXs.js";import"./Modal-DgpgRzLZ.js";import"./utils-BIo_BOvM.js";import"./message-DneuB5hD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./userInfo-GWa4mCN8.js";import"./user-DjlSiqBu.js";const Y={class:"flex px-6 py-4 border-b border-slate-100 dark:border-slate-300/10"},J={class:"flex flex-1 items-center"},Q={class:"flex flex-1 flex-col p-6 overflow-auto"},Z={key:0,class:"text-center p-6"},ee=a("p",{class:"text-slate-300 text-base"},"没有搜索结果",-1),ae=[ee],oe={key:1,class:"text-normal font-normal text-slate-600 dark:text-slate-300"},te=["onClick"],le={class:"flex-1"},se={key:0,class:"ml-4"},ne=["onClick"],re={class:"flex-1"},de={class:"flex h-10 py-2 px-6 border-t border-slate-100 dark:border-slate-300/10 leading-6"},ue=a("span",{class:"mr-8"},"选择",-1),ce=a("span",null,"上下移动",-1),ie={__name:"SearchModal",props:{visible:{type:Boolean,default:!1},container:{type:[String,Object],default:"body"}},emits:["update:visible"],setup(k,{emit:h}){const c=D();A();const d=k;let l=null;const s=b(""),r=b([]),e=b(),U=h,x=()=>{U("update:visible",!1)},V=()=>{s.value&&X(s.value).then(o=>{o&&o.length>=0&&(r.value=o,e.value={bookIdx:0,anchorIdx:-1})})},C=o=>{c.push({path:`/books/${o.id}`,query:{appId:o.appId}}),x()},$=(o,t)=>{c.push({path:`/books/${o.id}`,query:{appId:o.appId,anchorId:t.id}}),x()},B=o=>{if(o.key==="Escape")x(),o.preventDefault();else if(o.key==="ArrowUp"){if(e.value){if(e.value.anchorIdx>-1)e.value.anchorIdx--;else if(e.value.bookIdx>0){e.value.bookIdx--;let t=r.value[e.value.bookIdx];t&&t.anchors&&t.anchors.length>0&&(e.value.anchorIdx=t.anchors.length-1)}}}else if(o.key==="ArrowDown"){if(e.value){let t=r.value[e.value.bookIdx];e.value.anchorIdx<t.anchors.length-1?e.value.anchorIdx++:e.value.bookIdx<r.value.length-1&&(e.value.bookIdx++,e.value.anchorIdx=-1)}}else if(o.key==="Enter"&&e.value){let t=r.value[e.value.bookIdx];e.value.anchorIdx>-1?$(t,t.anchors[e.value.anchorIdx]):C(t)}};E(()=>{document.addEventListener("keydown",B)}),N(()=>{typeof d.container=="string"?l=document.querySelector(d.container):l=d.container,l?l.appendChild(f.$el):console.error("Invalid container specified for CustomPopup."),f.$nextTick(()=>{f.$refs.searchInput.focus()})}),T(()=>{document.removeEventListener("keydown",B),l&&l.contains(f.$el)&&(l.removeChild(f.$el),l=null)});const{proxy:f}=z();return H(()=>d.visible,(o,t)=>{o&&o!==t&&f.$nextTick(()=>{f.$refs.searchInput.focus()})},{immediate:!0}),(o,t)=>k.visible?(u(),p("div",{key:0,class:"flex flex-col lg:justify-start justify-end fixed top-0 left-0 inset-0 center z-50 backdrop-blur bg-black/20 dark:bg-transparent",onClick:_(x,["stop"])},[a("div",{class:"flex flex-col w-full lg:w-1/2 mx-auto lg:mt-[10%] max-h-full lg:max-h-[60%] shadow-lg rounded-lg bg-white dark:bg-neutral-800",onClick:t[1]||(t[1]=_(()=>{},["stop"]))},[a("div",Y,[a("div",J,[n(i,{name:"search-line",class:"leading-6"}),O(a("input",{placeholder:"输入关键字",class:"flex flex-1 px-2 text-slate-600 dark:text-slate-300 dark:bg-transparent placeholder-slate-300 text-base focus:outline-none focus:border-transparent","onUpdate:modelValue":t[0]||(t[0]=v=>s.value=v),onKeyup:F(V,["enter"]),ref:"searchInput"},null,544),[[P,s.value]])]),a("button",{class:"rounded px-2 bg-slate-100 dark:bg-neutral-700 hover:bg-blue-300 dark:hover:bg-neutral-500 hover:text-slate-100",onClick:_(x,["stop"])},[n(i,{name:"close-line",class:"leading-6"})])]),a("div",Q,[!r.value||r.value.length<1?(u(),p("div",Z,ae)):(u(),p("ul",oe,[(u(!0),p(w,null,K(r.value,(v,m)=>(u(),p("li",{key:m},[a("a",{onClick:y=>C(v),class:M(["flex m-2 p-2 lg:p-4 hover:bg-blue-400 dark:hover:bg-neutral-600 dark:bg-neutral-700 rounded-lg hover:text-slate-100 shadow-sm",{"bg-slate-100":e.value.bookIdx!==m||e.value.anchorIdx!==-1,"bg-blue-500 dark:bg-neutral-500":e.value.bookIdx===m&&e.value.anchorIdx===-1,"text-slate-100":e.value.bookIdx===m&&e.value.anchorIdx===-1}])},[a("div",le,[n(i,{name:"book-open-line",class:"font-semibold mr-4 p-1 border-2 rounded hover:border-slate-100"}),a("span",null,S(v.title),1)]),n(i,{name:"arrow-right-s-line"})],10,te),v.anchors&&v.anchors.length>0?(u(),p("ul",se,[(u(!0),p(w,null,K(v.anchors,(y,g)=>(u(),p("li",{key:g,class:"pl-4 border-l-2 border-slate-100 dark:border-slate-300"},[a("a",{onClick:ge=>$(v,y),class:M(["flex m-2 p-2 lg:p-4 hover:bg-blue-400 dark:hover:bg-neutral-600 dark:bg-neutral-700 rounded-lg hover:text-slate-100 shadow-sm",{"bg-slate-100":e.value.bookIdx!==m||e.value.anchorIdx!==g,"bg-blue-500 dark:bg-neutral-500":e.value.bookIdx===m&&e.value.anchorIdx===g,"text-slate-100":e.value.bookIdx===m&&e.value.anchorIdx===g}])},[a("div",re,[n(i,{name:"hashtag",class:"font-semibold mr-4 p-1 border-2 rounded hover:border-slate-100"}),a("span",null,S(y.textContent),1)]),n(i,{name:"arrow-right-s-line"})],10,ne)]))),128))])):I("",!0)]))),128))]))]),a("div",de,[n(i,{name:"corner-down-left-line",class:"px-2 mr-2 rounded shadow-sm shadow-slate-700 dark:shadow-slate-300"}),ue,n(i,{name:"arrow-down-line",class:"px-2 mr-2 rounded shadow-sm shadow-slate-700 dark:shadow-slate-300"}),n(i,{name:"arrow-up-line",class:"px-2 mr-2 rounded shadow-sm shadow-slate-700 dark:shadow-slate-300"}),ce])])])):I("",!0)}},pe=["onKeydown"],he=a("span",{class:"px-3 text-normal"},"搜索一切",-1),ve=a("span",{class:"px-1 text-normal bg-slate-200 rounded"},"⌘K",-1),fe=a("span",null,"这是一个测试",-1),me=L({__name:"Search",setup(k){const h=b(!1),c=()=>{h.value=!0},d=l=>{l.key==="k"&&l.metaKey&&(h.value=!0,l.preventDefault())};return E(()=>{document.addEventListener("keydown",d)}),T(()=>{document.removeEventListener("keydown",d)}),(l,s)=>(u(),p(w,null,[a("button",{class:"text-slate-400 px-2 lg:px-4 py-3 my-2",onClick:c,onKeydown:F(_(d,["meta"]),["key"])},[n(i,{name:"search-line"}),he,ve],40,pe),h.value?(u(),W(ie,{key:0,visible:h.value,"onUpdate:visible":s[0]||(s[0]=r=>h.value=r)},{default:R(()=>[fe]),_:1},8,["visible"])):I("",!0)],64))}}),xe={id:"content",class:"w-full max-w-screen-2xl mx-auto"},be={class:"lg:flex"},ke={id:"contentWrapper",class:"min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible lg:pl-80"},Te=L({__name:"Books",setup(k){const h=D(),c=b(!0),d=s=>{if(s!==void 0){c.value=s;return}c.value=!c.value},l=(s,r)=>{let e=s?`/books/${s}`:"/books";h.replace({path:e,query:{appId:r}})};return(s,r)=>{const e=G("router-view");return u(),p(w,null,[n(q,{onToggleFold:d,fold:c.value},{default:R(()=>[n(me)]),_:1},8,["fold"]),a("div",xe,[a("div",be,[n(j,{editable:!0,onToggleFold:d,fold:c.value,onMenuChange:l,defaultSelected:!1},null,8,["fold"]),a("div",ke,[n(e)])])])],64)}}});export{Te as default};
