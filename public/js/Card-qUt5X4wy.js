import{ai as B,aj as p,az as I,aC as S,aD as x,aE as R,aH as a,aF as s,aN as _,aS as N,aT as m,aX as r,aZ as v,aY as n,aG as z,b0 as M,b1 as T}from"./vendor-Ca624vxD.js";import{R as d}from"./RemixIcon-Cy7WqHn8.js";import{M as j}from"./Modal-DAiAG9nN.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=e=>(M("data-v-278a39cb"),e=e(),T(),e),E={class:"text-xs lg:text-base break-all text-center"},F={class:"bg-white dark:bg-neutral-600 shadow-lg drop-shadow-lg rounded px-2 text-sm lg:text-normal"},q=u(()=>a("span",null,"编辑",-1)),G=u(()=>a("span",null,"删除",-1)),H=u(()=>a("span",{class:"align-center"},"你真的要删除这个卡片？",-1)),O=B({__name:"Card",props:{modelValue:{type:Object,default:()=>({})},theme:{type:String,default:"purple",validator(e){return["slate","purple","blue","green","red","yellow","sky","orange","pink"].includes(e)}},editable:{type:Boolean,default:!1}},emits:["update:modelValue","cardClick","edit","remove"],setup(e,{emit:k}){const l=p(),f=()=>document.body,b=I(),t=e,i=p(!1),c=k,g=()=>{!t.modelValue||!t.modelValue.url?c("cardClick"):t.modelValue.inner?b.push({path:t.modelValue.url,query:{appId:t.modelValue._id}}):window.open(t.modelValue.url,"_blank")},C=()=>{var o;t.editable&&(c("edit",t.modelValue),(o=l==null?void 0:l.value)==null||o.hide())},V=()=>{var o;i.value=!0,(o=l==null?void 0:l.value)==null||o.hide()},y=()=>{i.value=!1},w=()=>{c("remove",t.modelValue)};return(o,h)=>{const $=S("tippy");return x(),R(z,null,[a("a",{class:n(["relative w-full h-[4.5rem] lg:w-28 lg:h-28 p-1 lg:p-4 flex flex-col items-center rounded shadow-md hover:shadow-lg dark:border dark:border-slate-50/20 dark:bg-neutral-800 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50",`text-${e.theme}-400 hover:text-${e.theme}-700`]),onClick:r(g,["stop"])},[s(d,{class:"text-2xl lg:text-4xl lg:mb-2",name:e.modelValue.icon||"book-2-line"},null,8,["name"]),a("span",E,_(e.modelValue.title),1),e.editable?(x(),N($,{key:0,ref_key:"dropdown",ref:l,class:"absolute top-0 right-0 z-10 px-0 lg:px-2",trigger:"mouseenter click",placement:"bottom-start",offset:[0,0],animation:"scale",interactive:!0,arrow:!0,appendTo:f,onClick:h[0]||(h[0]=r(()=>{},["stop"]))},{content:m(()=>[a("div",F,[a("div",{class:n(["p-1 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50 cursor-pointer",`text-${e.theme}-400 hover:text-${e.theme}-700`]),onClick:r(C,["stop"])},[s(d,{class:"mr-1",name:"edit-line"}),q],2),a("div",{class:n(["p-1 dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50 cursor-pointer",`text-${e.theme}-400 hover:text-${e.theme}-700`]),onClick:r(V,["stop"])},[s(d,{class:"mr-1",name:"delete-bin-line"}),G],2)])]),default:m(()=>[s(d,{class:n(["dark:text-slate-300 dark:hover:text-slate-50 dark:hover:border-slate-50",`text-${e.theme}-400 hover:text-${e.theme}-700`]),name:"more-fill"},null,8,["class"])]),_:1},512)):v("",!0)],2),v("",!0),s(j,{visible:i.value,closable:!1,title:"确认删除",onConfirm:w,onCancel:y},{default:m(()=>[H]),_:1},8,["visible"])],64)}}}),J=D(O,[["__scopeId","data-v-278a39cb"]]);export{J as C};
