import{ai as B,aj as I,aK as S,aN as N,az as c,aA as h,aD as a,aG as r,aE as p,a_ as O,a$ as k,aF as s,aH as m,aB as n,aO as z,bb as j,bc as D}from"./vendor-DqHIQWU1.js";import{_ as d,m as x}from"./index-bEem1MK9.js";import{_ as E}from"./message-DsTL7g5X.js";const b=e=>(j("data-v-d6e0c00a"),e=e(),D(),e),F={class:"text-xs lg:text-base break-all text-center"},T={class:"text-sm lg:text-normal"},q=b(()=>a("span",null,"编辑",-1)),A=b(()=>a("span",null,"删除",-1)),G=B({__name:"Card",props:{modelValue:{type:Object,default:()=>({})},theme:{type:String,default:"purple",validator(e){return["slate","purple","blue","green","red","yellow","sky","orange","pink"].includes(e)}},editable:{type:Boolean,default:!1},publishable:{type:Boolean,default:!1}},emits:["update:modelValue","cardClick","edit","remove","publish"],setup(e,{emit:v}){const l=I(),f=()=>document.body,g=S(),t=e,i=v,V=()=>{!t.modelValue||!t.modelValue.url?i("cardClick"):t.modelValue.inner?g.push({path:t.modelValue.url,query:{appId:t.modelValue._id}}):window.open(t.modelValue.url,"_blank")},y=()=>{var o;t.editable&&(i("edit",t.modelValue),(o=l==null?void 0:l.value)==null||o.hide())},C=()=>{var o;x.confirm({title:"确认删除",content:"确定要删除该应用？",onOk:()=>{i("remove",t.modelValue)}}),(o=l==null?void 0:l.value)==null||o.hide()},$=()=>{x.confirm({title:"确认发布",content:"确定要发布该应用？",onOk:()=>{i("publish",t.modelValue)}})};return(o,u)=>{const w=N("tippy");return c(),h(z,null,[a("a",{class:n(["relative w-full h-[4.5rem] lg:w-28 lg:h-28 p-1 lg:p-4 flex flex-col items-center rounded cursor-pointer shadow-md hover:shadow-lg dark:border dark:border-slate-50/20 dark:bg-neutral-800 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50",`text-${e.theme}-400 hover:text-${e.theme}-700`]),onClick:s(V,["stop"])},[r(d,{class:"text-2xl lg:text-4xl lg:mb-2",name:e.modelValue.icon||"book-2-line"},null,8,["name"]),a("span",F,p(e.modelValue.title),1),e.editable?(c(),O(w,{key:0,ref_key:"dropdown",ref:l,class:"absolute top-0 right-0 z-10 px-0 lg:px-2",trigger:"mouseenter click",placement:"bottom-start",offset:[0,0],animation:"scale",interactive:!0,arrow:!0,appendTo:f,onClick:u[0]||(u[0]=s(()=>{},["stop"]))},{content:k(()=>[a("div",T,[a("div",{class:n(["p-1 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50 cursor-pointer",`text-${e.theme}-400 hover:text-${e.theme}-700`]),onClick:s(y,["stop"])},[r(d,{class:"mr-1",name:"edit-line"}),q],2),a("div",{class:n(["p-1 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50 cursor-pointer",`text-${e.theme}-400 hover:text-${e.theme}-700`]),onClick:s(C,["stop"])},[r(d,{class:"mr-1",name:"delete-bin-line"}),A],2),e.publishable?(c(),h("div",{key:0,class:n(["p-1 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50 cursor-pointer",`text-${e.theme}-400 hover:text-${e.theme}-700`]),onClick:s($,["stop"])},[r(d,{class:"mr-1",name:"share-line"}),a("span",null,p(e.modelValue.published?"取消发布":"发布"),1)],2)):m("",!0)])]),default:k(()=>[r(d,{class:n(["dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50",`text-${e.theme}-400 hover:text-${e.theme}-700`]),name:"more-fill"},null,8,["class"])]),_:1},512)):m("",!0)],2),m("",!0)],64)}}}),R=E(G,[["__scopeId","data-v-d6e0c00a"]]);export{R as C};
