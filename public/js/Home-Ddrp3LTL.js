import{_ as V}from"./Card.vue_vue_type_script_setup_true_lang-C23AzbU6.js";import{ae as c,aL as C,ay as m,aM as M,aN as j,aI as g,aJ as x,aC as l,aO as N,az as b,aP as A,at as f,ak as E,aA as p,aB as _,aQ as O}from"./vendor-BSAPUjJi.js";import{M as P}from"./Modal-kPGpxXj6.js";import{H as U}from"./Header-DxcrElIQ.js";import{m as w}from"./message-CIMfOfme.js";import"./RemixIcon-Cb0msOyL.js";import"./userInfo-Dj_dDAEm.js";import"./user-DPFXhvfg.js";import"./index-DVZ6Nk77.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const H={class:"px-2"},L=l("label",{class:"mr-2",for:"inner"},"是否内置",-1),R={__name:"AppModal",props:{title:{type:String,default:"新增应用"},visible:{type:Boolean,default:!1},app:{type:Object,default:()=>({title:"",url:"",icon:"",inner:!1})}},emits:["update:app","confirm","cancel"],setup(e,{emit:t}){const r=e,u=t,s=c(r.visible),d=()=>{u("confirm"),s.value=!1},v=()=>{u("cancel"),s.value=!1};return C(()=>r.visible,()=>{s.value=r.visible}),(y,o)=>(m(),M(P,{title:e.title,visible:s.value,"onUpdate:visible":o[4]||(o[4]=n=>s.value=n),onConfirm:d,onCancel:v},{default:j(()=>[g(l("input",{class:"p-2 mb-4 bg-white text-slate-600 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>e.app.title=n),placeholder:"请输入应用标题"},null,512),[[x,e.app.title]]),g(l("input",{class:"p-2 mb-4 bg-white text-slate-600 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",type:"text","onUpdate:modelValue":o[1]||(o[1]=n=>e.app.url=n),placeholder:"请输入应用地址"},null,512),[[x,e.app.url]]),g(l("input",{class:"p-2 mb-4 bg-white text-slate-600 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",type:"text","onUpdate:modelValue":o[2]||(o[2]=n=>e.app.icon=n),placeholder:"应用图标"},null,512),[[x,e.app.icon]]),l("div",H,[L,l("span",null,[g(l("input",{id:"inner",type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=n=>e.app.inner=n)},null,512),[[N,e.app.inner]])])])]),_:1},8,["title","visible"]))}},S={class:"flex flex-col items-center shadow-lg rounded-lg bg-white"},D=["src","alt"],F={class:"lg:text-lg text-slate-300"},z={class:"p-4 lg:p-8 lg:font-medium lg:text-lg text-slate-500"},I={__name:"Note",props:{modelValue:{type:Object,default:()=>({_id:"",image:"",word:"",from:"",photoBy:""})}},setup(e){return(t,r)=>(m(),b("div",S,[l("img",{class:"w-full lg:w-[50rem]",src:e.modelValue.image,alt:e.modelValue.photoBy},null,8,D),l("span",F,A(e.modelValue.photoBy),1),l("p",z,A(e.modelValue.word),1)]))}},J=()=>f.get("/app/getApps").then(e=>e&&e.data&&e.data.success?e.data.data:Promise.reject(e&&e.data&&e.data.message)),Q=e=>f.post("/app/createApp",e).then(t=>t&&t.data&&t.data.success?t.data.data:Promise.reject(t&&t.data&&t.data.message)),T=e=>f.post("/app/updateApp",e).then(t=>t&&t.data&&t.data.success?(t.data.message&&w.success(t.data.message),t.data.data):Promise.reject(t&&t.data&&t.data.message)),q=e=>f.post("/app/removeApp",{id:e}).then(t=>t&&t.data&&t.data.success?t.data.data:Promise.reject(t&&t.data&&t.data.message)),G=()=>f.get("/note/getOneNote").then(e=>{if(e.data.success)return e.data.data;e.data.message&&w.error(e.data.message)}),K={class:"h-screen w-full flex flex-col overflow-y-auto"},W={class:"flex p-2 lg:p-4 flex-wrap justify-start"},X={class:"flex flex-col items-center p-2 lg:p-4 basis-1/4 md:basis-1/6 lg:basis-1/12"},de={__name:"Home",setup(e){const t=c([]),r=c(!1),u=c(!1),s=c(void 0),d=c(!1),v=c(),y=()=>{d.value=!0,s.value={title:"新增",icon:"book-2-fill",inner:!0},u.value=!0},o=a=>{d.value=!1,s.value=a,u.value=!0},n=async()=>{d.value?await Q(s.value).then(a=>{t.value.push(a),d.value=!1}):await T(s.value).catch(a=>{w.error(a)}),u.value=!1},$=()=>{d.value=!1,s.value=void 0,u.value=!1},k=a=>{q(a).then(h=>{t.value=t.value.filter(i=>i._id!==a)})};return E(()=>{J().then(a=>{let{editable:h,apps:i}=a||{};t.value=i||[],r.value=h}),G().then(a=>{v.value=a})}),(a,h)=>(m(),b(_,null,[l("div",K,[p(U,{hiddenFold:!0}),p(I,{class:"flex-none m-4 lg:m-8",modelValue:v.value},null,8,["modelValue"]),l("div",W,[(m(!0),b(_,null,O(t.value,(i,Y)=>(m(),b("div",{key:i._id,class:"flex flex-col items-center p-2 lg:p-4 basis-1/4 md:basis-1/6 lg:basis-1/12"},[p(V,{class:"w-full h-full",editable:i.system&&r.value||!i.system,modelValue:i,theme:"blue",onEdit:B=>o(i),onRemove:B=>k(i._id)},null,8,["editable","modelValue","onEdit","onRemove"])]))),128)),l("div",X,[p(V,{theme:"blue",modelValue:{title:"新增应用",icon:"add-line"},onCardClick:y})])])]),p(R,{title:`${d.value?"新增应用":"编辑应用"}`,visible:u.value,app:s.value,onConfirm:n,onCancel:$},null,8,["title","visible","app"])],64))}};export{de as default};
