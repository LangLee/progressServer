import{e as u,_ as s,m as f}from"./index-bEem1MK9.js";import{bd as p,az as l,aA as v,aD as a,a_ as c,aH as n}from"./vendor-DqHIQWU1.js";const _={class:"w-full p-2 relative cursor-pointer"},b=["src","alt"],h={class:"flex justify-center items-center h-full"},x={class:"text-white text-lg"},w={__name:"ImageView",props:{modelValue:{type:Object,default:()=>{}},editable:{type:Boolean,default:!0},selectable:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:"remove",setup(e,{emit:i}){const t=e,o=i,m=p(()=>`${u}/file/preview?file=${t.modelValue.name}`),r=()=>{f.confirm({title:"确认删除",content:"确认删除该图片？",onOk:()=>{o("remove",t.modelValue.name)}})},d=()=>{t.selectable&&o("select",t.modelValue)};return(y,k)=>(l(),v("div",_,[a("img",{class:"w-full",src:m.value,alt:e.modelValue.name},null,8,b),a("div",{class:"absolute top-0 left-0 w-32 h-32 m-2 bg-gray-500 opacity-0 hover:opacity-50",onClick:d},[a("div",h,[a("div",x,[e.editable?(l(),c(s,{key:0,class:"text-2xl",name:"delete-bin-line",onClick:r})):n("",!0),e.active?(l(),c(s,{key:1,class:"text-2xl",name:"checkbox-circle-line"})):n("",!0)])])])]))}};export{w as _};
