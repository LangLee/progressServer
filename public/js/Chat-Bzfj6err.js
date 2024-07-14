var k=Object.defineProperty;var M=(a,e,t)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var c=(a,e,t)=>M(a,typeof e!="symbol"?e+"":e,t);import{_ as w,H as y}from"./Header-DxcrElIQ.js";import{_ as S}from"./ChatPanel-BqICyG1x.js";import{ae as i,aL as L,ay as g,az as h,aC as p,aB as U,aQ as E,aA as f,aP as _,aU as F,aT as C,aS as R,at as x,ag as T,ao as v}from"./vendor-BSAPUjJi.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as B,s as N}from"./userInfo-Dj_dDAEm.js";import{g as j,b as z}from"./user-DPFXhvfg.js";import"./RemixIcon-Cb0msOyL.js";import"./index-DVZ6Nk77.js";import"./Loading-0byxj1Jj.js";const P={class:"flex-1 p-2 sm:p-3 xl:p-5 pb-10 lg:pb-14 bg-white/95 lg:bg-transparent"},V=["onClick"],A={key:0,class:"absolute left-8 top-0 block w-4 h-4 bg-red-600 text-slate-50 text-center rounded-xl text-xs"},I={__name:"Contacts",props:{fold:{type:Boolean,default:!0},contacts:{type:Array,default:()=>[]}},emits:["toggleFold","menuChange"],setup(a,{emit:e}){const t=a,s=i(!0),n=i(""),l=e,r=()=>{s.value=!0,l("toggleFold",!0)},u=d=>{n.value=d,l("chatTo",d)};return L(()=>t.fold,(d,m)=>{s.value=d},{immediate:!0}),(d,m)=>(g(),h("div",{class:C(["flex flex-col fixed top-16 bottom-0 backdrop-blur overflow-y-auto z-20 bg-black/20 lg:bg-transparent w-full lg:w-80 pr-24 lg:pr-0 transition-transform duration-300 ease-out delay-100 lg:translate-x-0",s.value?"translate-x-[-100%]":"translate-x-0"]),onClick:R(r,["stop"])},[p("nav",P,[p("ul",null,[(g(!0),h(U,null,E(a.contacts,(o,b)=>(g(),h("li",{key:o._id,onClick:G=>u(o._id),class:"relative cursor-pointer"},[f(w,{size:"md"}),o.noReadCount>0?(g(),h("span",A,_(o.noReadCount),1)):F("",!0),p("span",{class:C(n.value===o._id?"text-blue-500 font-bold":"text-slate-500 hover:text-blue-300")},_(o.name),3)],8,V))),128))])])],2))}},O=$(I,[["__scopeId","data-v-86786112"]]),H=a=>x.get("/message/getContactMessages",{params:{contact:a}}).then(e=>e&&e.data&&e.data.success?e.data.data:Promise.reject(e&&e.data&&e.data.message)),J=(a,e,t)=>x.post("/message/updateContactMessageStatus",{from:a,to:e,status:t}).then(s=>s&&s.data&&s.data.success?s.data.data:Promise.reject(s&&s.data&&s.data.message)),W="ws://42.193.244.237:3001";class D{constructor(){c(this,"sender",i());c(this,"recipient");c(this,"contacts",i([]));c(this,"messages",i([]));c(this,"socket");c(this,"useMessages",()=>this.messages);c(this,"useUserId",()=>this.sender);this.sender=i(B()),this.recipient="",j().then(e=>{this.contacts.value=e||[]}),this.socket=new WebSocket(W),this.bindEvent()}sendMessage(e){e&&(this.socket.send(JSON.stringify(e)),this.appendMessage(e))}appendMessage(e,t=!1){let{from:s,to:n}=e,l=t?s:n;this.messages.value=this.messages.value.concat([e]);let r=this.contacts.value.find(({_id:u})=>u===l);r&&!t&&(r.unreadCount=r.unreadCount?r.unreadCount+1:1)}close(){this.socket.close(),this.contacts=null,this.messages=null}bindEvent(){this.socket.addEventListener("open",()=>{console.log("Connection opened"),this.sender&&this.sender.value?this.socket.send(this.sender.value):z().then(e=>{this.sender.value=e.userId,N(e),this.socket.send(e.userId)})}),this.socket.addEventListener("message",e=>{let t=e.data;console.log(`Received message: ${t}`),t=JSON.parse(t),Object.prototype.toString.call(t)==="[object Array]"?t.forEach(s=>{this.appendMessage(s,!0)}):this.appendMessage(t,!0)}),this.socket.addEventListener("close",()=>{console.log("Connection closed")})}getContacts(){var e;return(e=this.contacts)==null?void 0:e.value}useContacts(){return this.contacts}setContacts(e){this.contacts.value=e}changeRecipient(e){this.recipient=e;let t=this.contacts.value.find(({_id:n})=>n===e),s=t==null?void 0:t.messages;s?this.messages.value=s:H(e).then(n=>{this.messages.value=n||[],this.contacts.value.find(({_id:l})=>l===e).messages=this.messages.value}),t!=null&&t.noReadCount&&J(e,this.sender.value,"read").then(()=>{t.noReadCount=0})}onChat(e){this.sendMessage({from:this.sender.value,to:this.recipient,content:e})}}const Q={class:"flex flex-col w-full h-screen"},q={class:"flex-1 flex flex-col w-full lg:pl-80 overflow-y-auto"},le={__name:"Chat",setup(a){let e=new D;const t=i(!0),s=i(!1),n=e.useContacts(),l=e.useMessages(),r=e.useUserId(),u=o=>{if(o!==void 0){t.value=o;return}t.value=!t.value},d=o=>{e.changeRecipient(o)},m=o=>{e.onChat(o)};return T(()=>{e.close(),e=null}),(o,b)=>(g(),h("div",Q,[f(y,{onToggleFold:u,fold:t.value},null,8,["fold"]),f(O,{class:"lg: border-r",onChatTo:d,fold:t.value,contacts:v(n),onToggleFold:u},null,8,["fold","contacts"]),p("div",q,[f(S,{placeholder:"咱们开始聊天吧...",editable:!0,messages:v(l),loading:s.value,onChart:m,owner:v(r),roleProperty:"from"},null,8,["messages","loading","owner"])])]))}};export{le as default};
