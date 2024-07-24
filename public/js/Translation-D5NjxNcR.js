import{ae as a,ak as B,ay as d,az as p,aC as t,aA as r,aP as m,aU as g,aS as v,aI as E,aJ as S,aR as D,aM as U,aB as $}from"./vendor-BLq22pPX.js";import{R as u}from"./RemixIcon-BDA1nEXk.js";import{a as z}from"./ai-gi_gpRwF.js";import{g as H,c as I}from"./word-BkP-zV36.js";import{m as b}from"./message-AZuur2LZ.js";import{H as M}from"./Header-CxjGTUPx.js";import{L as N}from"./Loading-BaoDrf3C.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./userInfo-CtL9gwPY.js";import"./user-C3fmNsgu.js";import"./index-Bm23j2VF.js";const P={class:"flex flex-col h-screen w-full justify-center items-center text-slate-700 dark:text-slate-300"},R={class:"flex-1 w-full p-2 lg:p-4 overflow-y-auto"},V={key:0,class:"rounded-lg shadow-lg p-4 lg:p-8 mb-4 lg:mb-8"},q=t("div",{class:"font-bold text-normal lg:text-lg py-2"},[t("span",{class:"bg-blue-600 text-slate-50 rounded-xl px-2 py-1"},"每日一句")],-1),K={class:"text-normal lg:text-lg p-2"},L={class:"text-normal lg:text-lg p-2"},W={key:1,class:"rounded shadow-lg p-4 lg:p-8 mb-4 lg:mb-8"},j={class:"font-bold text-lg lg:text-xl text-blue-700 py-1"},F={class:"text-lg text-slate-300"},J={key:2,class:"rounded shadow-lg p-4 lg:p-8 mb-4 lg:mb-8"},Q={class:"font-bold text-lg lg:text-xl text-blue-700"},Y={class:"text-lg text-slate-300"},Z=["src"],G={class:"relative h-24 lg:h-28 w-full text-lg px-2 lg:px-4 mb-4 lg:mb-8"},O=["onKeyup"],X=t("span",{class:"mr-1"},"发送",-1),ve={__name:"Translation",setup(ee){const w=l=>{var e=document.createElement("textarea");e.value=l,document.body.appendChild(e),e.focus(),e.select();try{var o=document.execCommand("copy"),h=o?"成功拷贝!":"拷贝失败!";console.log(h)}catch(f){console.error("拷贝到剪贴板失败:",f)}document.body.removeChild(e)},n=a(""),i=a("");a("");const y=a(""),s=a(""),x=a(!1);a("");const c=a(),_=()=>{s.value&&(navigator.clipboard||(navigator.clipboard={writeText:w}),navigator.clipboard.writeText(s.value),b.success("复制成功！"))},C=()=>{I({code:s.value,english:s.value,chinese:i.value,newWord:!0}).catch(l=>{b.error(l)})},k=()=>{n.value||b.warning("请输入要翻译的文本！");let l=n.value.replace(/[\r\n]/g,"");const o=new RegExp(/^[A-Za-z\s]*$/).test(l);x.value=!0,z({query:l,from:o?"en":"zh-CHS",to:o?"zh-CHS":"en"}).then(h=>{let{translation:f,speakUrl:te,tSpeakUrl:A,dict:le,tDict:oe}=h||{};n.value="",i.value=l,s.value=f,y.value=A,x.value=!1})},T=l=>{let e=null;e=document.getElementById("responseAudioPlayer"),e.paused?e.play():e.pause()};return B(()=>{H().then(l=>{c.value=l})}),(l,e)=>(d(),p($,null,[t("div",P,[r(M),t("div",R,[c.value?(d(),p("div",V,[q,t("div",K,m(c.value.chinese||""),1),t("div",L,m(c.value.english||""),1)])):g("",!0),i.value?(d(),p("div",W,[t("div",j,m(i.value),1),t("span",F,[r(u,{class:"hover:text-blue-400",name:"clipboard-line",onClick:e[0]||(e[0]=v(o=>_(i.value),["stop"]))})])])):g("",!0),s.value?(d(),p("div",J,[t("div",Q,m(s.value),1),t("span",Y,[r(u,{class:"mr-2 hover:text-blue-400",name:"volume-up-line",onClick:e[1]||(e[1]=o=>T())}),r(u,{class:"mr-2 hover:text-blue-400",name:"clipboard-line",onClick:e[2]||(e[2]=v(o=>_(),["stop"]))}),r(u,{class:"hover:text-blue-400",name:"add-line",onClick:e[3]||(e[3]=v(o=>C(),["stop"]))})]),t("audio",{id:"responseAudioPlayer",src:y.value},null,8,Z)])):g("",!0)]),t("div",G,[E(t("textarea",{ref:"questionInput",rows:3,class:"w-full border rounded-lg shadow-sm py-2 lg:py-4 pl-4 pr-20 text-slate-600 placeholder-slate-300 font-normal text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-neutral-800 dark:focus:ring-slate-300 dark:border-slate-600","onUpdate:modelValue":e[4]||(e[4]=o=>n.value=o),type:"text",placeholder:"开始对话",onKeyup:D(v(k,["stop"]),["enter"])},null,40,O),[[S,n.value]]),t("button",{class:"absolute top-2 lg:top-4 right-4 lg:right-8 w-16 text-blue-300 hover:text-blue-600 dark:text-slate-300 dark:hover:text-slate-50",onClick:k},[X,r(u,{name:"send-plane-fill"})])])]),x.value?(d(),U(N,{key:0})):g("",!0)],64))}};export{ve as default};
