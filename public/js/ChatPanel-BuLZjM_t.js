import{ae as w,aL as C,ay as t,az as o,aC as s,aB as g,aQ as B,aT as m,aM as d,aU as n,aP as h,aA as f,aI as P,aJ as I,aR as S,aS as y,ar as L}from"./vendor-BLq22pPX.js";import{R as T}from"./RemixIcon-BDA1nEXk.js";import{L as K}from"./Loading-BaoDrf3C.js";import{_ as i}from"./Header-Ch826NfX.js";const M={id:"chatContent",class:"flex-1 text-base p-2 lg:p-4 text-slate-900 font-normal overflow-y-auto"},N={key:0,class:"flex flex-col content-space-between"},R={key:1,class:"inline-block my-3 self-start lg:mr-8"},V={class:"px-4 py-2 text-slate-700 dark:text-slate-50 bg-blue-50 dark:bg-neutral-800 rounded-xl shadow-md"},$={key:0,class:"relative h-24 lg:h-28 w-full text-lg px-2 lg:px-4 mb-4 lg:mb-8"},q=["onKeyup"],z=s("span",{class:"mr-1"},"发送",-1),F={__name:"ChatPanel",props:{editable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},messages:{type:Array,default:()=>[]},placeholder:{type:String,default:"开始向我提问吧..."},owner:{type:String,default:"user"},roleProperty:{type:String,default:"role"}},emits:["chart"],setup(e,{emit:x}){const{proxy:p}=L(),b=e,k=x,a=w(""),u=()=>{a.value=a.value.replace(/[\r\n]/g,""),k("chart",a.value),a.value=""};return C(()=>b.messages,(c,r)=>{c&&c.length!==r.length&&(a.value="",p.$nextTick(()=>{document.getElementById("chatContent"),chatContent&&chatContent.scrollTo({top:chatContent.scrollHeight,behavior:"smooth"})}))}),(c,r)=>(t(),o(g,null,[s("div",M,[e.messages&&e.messages.length>0?(t(),o("div",N,[(t(!0),o(g,null,B(e.messages,(l,v)=>(t(),o("div",{key:v,class:m(`my-3 text-slate-700 dark:text-slate-50 ${l[e.roleProperty]!==e.owner?"self-start lg:mr-8":"self-end lg: ml-8"}`)},[l[e.roleProperty]!==e.owner?(t(),d(i,{key:0,icon:"robot-2-fill"})):n("",!0),s("span",{class:m(["inline-block px-4 py-2 rounded-xl shadow-md",l[e.roleProperty]!==e.owner?"dark:bg-neutral-800":"bg-blue-50 dark:bg-neutral-800"])},h(l.content),3),l[e.roleProperty]===e.owner?(t(),d(i,{key:1})):n("",!0)],2))),128))])):(t(),o("div",R,[f(i,{icon:"robot-2-fill"}),s("span",V,h(e.placeholder),1)]))]),e.editable?(t(),o("div",$,[P(s("textarea",{ref:"questionInput",rows:3,class:"w-full border rounded-lg shadow-sm py-2 lg:py-4 pl-4 pr-20 text-slate-600 placeholder-slate-300 font-normal text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-neutral-800 dark:focus:ring-slate-300 dark:border-slate-600","onUpdate:modelValue":r[0]||(r[0]=l=>a.value=l),type:"text",placeholder:"开始对话",onKeyup:S(y(u,["stop"]),["enter"])},null,40,q),[[I,a.value]]),s("button",{class:"absolute top-2 lg:top-4 right-4 lg:right-8 w-16 text-blue-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-slate-50",onClick:y(u,["stop"])},[z,f(T,{name:"send-plane-fill"})])])):n("",!0),e.loading?(t(),d(K,{key:1})):n("",!0)],64))}};export{F as _};
