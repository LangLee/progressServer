const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Login-CTxNpr1c.js","./vendor-DqHIQWU1.js","../css/vendor-C0fGup_u.css","./user-BZG51SbY.js","./message-DsTL7g5X.js","../css/message-Ld0-QEl8.css","./userInfo-CSbayTML.js","./file-D7E9LNHg.js","./ProInput-DLzwbHQE.js","./utils-DVDKZiQc.js","./remixicon-l0sNRNKZ.js","../css/ProInput-C8YhN2zD.css","./Loading-DYsgb3I1.js","../css/Loading-B01z9qu9.css","../css/Login-C72OYR1A.css","./Home-47myFo0e.js","./Card-iLg7ySo8.js","../css/Card-BRkEFV1N.css","./Header-jlxeZXVD.js","./oneNote-D4VVWFj3.js","./app-ECC3QMWu.js","./Register-CkjQAN-K.js","./Books-DfH06VLT.js","./Menu-ynX6Yh31.js","./book-J-0CnIOg.js","./GroupModal-DcQdgpqj.js","../css/Menu-BYbIFQvl.css","./Empty-ONv7fKtX.js","./no-data-ou6-36FL.js","./Book-Eq7mVqjq.js","./tiptap-Bkjnv3GL.js","../css/Book-COhFXL7S.css","./Schedule-aAVu9lA-.js","./Robot-Cyk8drUl.js","./ChatPanel-DWOakeds.js","./Question-DbNPOHdm.js","../css/Question-DN7bJTeH.css","./ai-BzmOfZ_l.js","./PromptModal-CoDoiaRN.js","../css/PromptModal-OHlHABdJ.css","./Translation-CqDgxDjM.js","./word-DiNLvsHA.js","./Portals-Dvf69IUn.js","./Setting-B822aEcf.js","./verification-CL8ovHMx.js","./Words-nimwvs0Z.js","./Chat-1qvuDzfo.js","../css/Chat-lWQdhZeW.css","./Board-Bw36A3Uo.js","./Apps-DOqPpaEP.js","./Forget-Uul1IBKi.js","./FileManager-jDgZX48b.js","./ImageView-B5jy2EQC.js","./Library-L8gqQ-wV.js","./UserManager-CKdMHguS.js","./Hot-B85rdsLZ.js"])))=>i.map(i=>d[i]);
import{ay as R,az as _,aA as g,aB as S,ak as M,ap as z,aC as B,aD as h,aE as w,aF as b,aG as k,aH as x,aI as D,aJ as j,as as T,aK as N,aL as $,aM as q,aN as U,aO as H,aP as F,aQ as W,aR as i,aS as K,aT as G,aU as J,aV as Q}from"./vendor-DqHIQWU1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();const X="http://111.229.165.93:3000";let Y=X,Me="http://111.229.165.93:3000";function Z(t,s){R.interceptors.request.use(function(e){const c=localStorage.getItem("me_token");return e.headers.Authorization=c,e.headers.appId=t.query.appId,e.url&&!new RegExp(/http|https/).test(e.url)&&(e.url=Y+e.url),console.log("Starting request",e),e},function(e){return console.log("Request error",e),Promise.reject(e)}),R.interceptors.response.use(function(e){return e.status===200?(console.log("Successful response",e),e):(e.status===401&&s(),Promise.reject(e))},function(e){return e.response&&e.response.status===401&&s(),Promise.reject(e)})}const ee={__name:"RemixIcon",props:{name:{type:String,required:!0}},setup(t){return(s,e)=>(_(),g("i",{class:S(`ri-${t.name}`)},null,2))}},te={key:0,class:"flex p-4 border-b border-slate-100 dark:border-slate-50/20"},oe={class:"flex flex-1 items-center"},ne={class:"text-lg font-semibold"},re={class:"flex flex-1 flex-col p-4 overflow-auto"},ae={key:1,class:"flex border-t border-slate-100 dark:border-slate-50/20 shadow-lg rounded-lg"},se={__name:"Modal",props:{visible:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:Number,default:20},closable:{type:Boolean,default:!0},container:{type:[String,Object],default:"body"},zIndex:{type:Number,default:50},footer:{type:Boolean,default:!0},okText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"}},emits:["update:visible","confirm","cancel"],setup(t,{emit:s}){const e=t,c=s,{proxy:n}=M();let o=null;const r=()=>{c("update:visible",!1),m()},p=()=>{c("confirm")},m=()=>{c("cancel")};return z(()=>{typeof e.container=="string"?o=document.querySelector(e.container):o=e.container,o?o.appendChild(n.$el):console.error("Invalid container specified for CustomPopup.")}),B(()=>{o&&o.contains(n.$el)&&(o.removeChild(n.$el),o=null)}),(u,f)=>(_(),g("div",{class:S(["flex flex-col lg:justify-center justify-end fixed top-0 left-0 inset-0 backdrop-blur bg-black/20 dark:bg-transparent transition-transform duration-500 ease-in-out delay-200",{"translate-y-0":t.visible,"translate-y-[100%]":!t.visible}]),style:j({zIndex:t.zIndex}),onClick:b(r,["stop"])},[h("div",{class:"flex flex-col w-full lg:w-80 mx-auto max-h-full lg:max-h-[60%] shadow-lg lg:rounded bg-white dark:bg-neutral-800",onClick:f[0]||(f[0]=b(()=>{},["stop"]))},[t.title||!t.closable?(_(),g("div",te,[h("div",oe,[h("span",ne,w(t.title),1)]),t.closable?(_(),g("button",{key:0,class:"rounded px-2 text-xl hover:bg-blue-300 hover:text-slate-100",onClick:b(r,["stop"])},[k(ee,{name:"close-line",class:"leading-6"})])):x("",!0)])):x("",!0),h("div",re,[D(u.$slots,"default")]),t.footer?(_(),g("div",ae,[h("button",{class:"basis-1/2 py-3 bg-blue-400 text-white font-medium hover:bg-blue-700",onClick:b(p,["stop"])},w(t.okText),1),h("button",{class:"basis-1/2 py-3 font-medium bg-white hover:bg-slate-50 dark:bg-transparent",onClick:b(m,["stop"])},w(t.cancelText),1)])):x("",!0)])],6))}},ie=t=>{const s=k(se,{visible:!0,title:t.title,onConfirm:()=>{t.onOk&&t.onOk(),O(e)},onCancel:()=>{t.onCancel&&t.onCancel(),O(e)}},t.content),e=document.createElement("div");T(s,e),document.body.appendChild(e)},O=t=>{T(null,t),t.remove()},le=t=>ie(t),ce={confirm:le};let I=!1;const me=t=>{I=t},ue=()=>I,de=h("div",{class:"absolute z-20 top-0 lg:top-0 inset-x-0 flex justify-center lg:justify-end overflow-hidden pointer-events-none bg-slate-300"},[h("div",{class:"w-[80rem] lg:w-[100rem] flex-none flex justify-end"})],-1),pe={__name:"App",setup(t){const s=N(),e=$();return s.beforeEach((c,n,o)=>{new RegExp(/^\/(books|book)/).test(n.path)&&ue()?ce.confirm({title:"提示",content:"您有未保存的修改，确定离开吗？",onOk:()=>{me(!1),o()},onCancel:()=>{o(!1)}}):o()}),q(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),localStorage.theme="dark"):(document.documentElement.classList.remove("dark"),localStorage.theme="light"),Z(e,()=>{localStorage.removeItem("me_token"),s.replace("/login")})}),(c,n)=>{const o=U("router-view");return _(),g(H,null,[de,k(o)],64)}}};window._iconfont_svg_string_4523946='<svg><symbol id="me-error" viewBox="0 0 1024 1024"><path d="M512 725.333333a68.266667 68.266667 0 1 1 0 136.533334 68.266667 68.266667 0 0 1 0-136.533334z" fill="#e74c3c" ></path><path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667zM417.450667 357.589333a42.666667 42.666667 0 0 0-56.32 63.914667L451.669333 512l-90.538666 90.496-3.541334 4.053333a42.666667 42.666667 0 0 0 63.914667 56.32L512 572.330667l90.496 90.538666 4.053333 3.541334a42.666667 42.666667 0 0 0 56.32-63.914667L572.330667 512l90.538666-90.496 3.541334-4.053333a42.666667 42.666667 0 0 0-63.914667-56.32L512 451.669333 421.504 361.130667z" fill="#e74c3c" ></path></symbol><symbol id="me-success" viewBox="0 0 1024 1024"><path d="M512 32C248 32 32 248 32 512s216 480 480 480 480-216 480-480-216-480-480-480z m280.00000031 391.99999969L504.00000031 720.00000031c-7.99999969 7.99999969-16.00000031 16.00000031-32.00000062 15.99999938-7.99999969 0-24-7.99999969-31.99999969-15.99999938l-160.00000031-168c0-7.99999969-7.99999969-16.00000031-7.99999969-32.00000062 0-7.99999969 7.99999969-16.00000031 7.99999969-24 16.00000031-16.00000031 40.00000031-16.00000031 56.00000062 0l135.99999938 144 256.00000031-271.99999969c16.00000031-16.00000031 40.00000031-16.00000031 55.99999969 0 16.00000031 16.00000031 16.00000031 40.00000031 8.00000062 55.99999969z" fill="#2ecc71" ></path></symbol><symbol id="me-info" viewBox="0 0 1024 1024"><path d="M512 26.59669333C243.98203221 26.59669333 26.54814777 243.88494222 26.54814777 512c0 268.11505778 217.43388445 485.45185223 485.45185223 485.45185223 268.16360334 0 485.45185223-217.33679445 485.45185223-485.45185223 0-268.06651221-217.28824889-485.3547611-485.45185223-485.3547611z m76.11884999 664.09813334c-36.60307001 54.85605888-73.83722667 97.33309667-136.60615111 97.33309667-42.81685333-6.9419611-60.29312-37.67106333-51.02098887-68.88561777l80.68209778-267.19270002c1.94180779-6.50505443-1.35926557-13.4955611-7.28177778-15.63154888-5.97105778-2.03889778-17.67044779 5.67978667-27.81639111 16.69954333L397.43336334 511.66018333c-1.35926557-9.80612779-0.14563555-26.11731001-0.14563555-32.67090888 36.60307001-55.00169443 96.79909888-98.35254557 137.52850887-98.35254556 38.83614777 3.93216 57.2833189 34.95253333 50.43844779 69.03125333l-81.16755002 268.45487445a12.52465778 12.52465778 0 0 0 7.62159446 14.17519332c5.92251221 2.03889778 18.54426112-5.72833223 28.54456889-16.69954332l48.78791111-58.69112889c1.35926557 9.80612779-0.9223589 27.18530333-0.9223589 33.73890332z m-10.77703111-349.0398811c-30.82619221 0-55.92405333-22.42787555-55.92405333-55.53569224 0-33.01072555 25.09786112-55.53569223 55.92405333-55.53569223 30.82619221 0 55.77841778 22.47642112 55.77841778 55.53569223 0 33.10781667-24.95222557 55.53569223-55.82696221 55.53569224z" fill="#4a90e2" ></path></symbol><symbol id="me-warning" viewBox="0 0 1024 1024"><path d="M844.8 179.2C759.466667 93.866667 640 42.666667 512 42.666667S264.533333 93.866667 179.2 179.2 42.666667 384 42.666667 512s51.2 247.466667 136.533333 332.8S379.733333 981.333333 512 981.333333c132.266667 0 247.466667-51.2 332.8-136.533333S981.333333 644.266667 981.333333 512c0-132.266667-51.2-247.466667-136.533333-332.8zM469.333333 256v-4.266667c4.266667-21.333333 21.333333-38.4 42.666667-38.4s38.4 17.066667 42.666667 38.4v349.866667c-4.266667 21.333333-21.333333 38.4-42.666667 38.4s-38.4-17.066667-42.666667-38.4V256z m42.666667 533.333333c-29.866667 0-51.2-25.6-51.2-51.2S482.133333 682.666667 512 682.666667s51.2 25.6 51.2 51.2-21.333333 55.466667-51.2 55.466666z" fill="#f39c12" ></path></symbol><symbol id="me-progress" viewBox="0 0 1024 1024"><path d="M960.7 737.8V98H64.5v639.8h384v127.8h-192v64h512.1v-64h-192V737.8h384.1zM128.5 162h768.2v511.8H128.5V162z"  ></path><path d="M287.2 567c-7.9 0-15.7-2.9-21.9-8.7-12.9-12.1-13.5-32.4-1.4-45.2l141-150c11.2-11.9 29.6-13.5 42.6-3.6l123.6 93.3 142.4-158.2c11.8-13.1 32.1-14.2 45.2-2.4 13.1 11.8 14.2 32.1 2.4 45.2l-162 180c-11.1 12.3-29.8 14.1-43.1 4.1l-124.1-93.7-121.4 129.1c-6.3 6.7-14.8 10.1-23.3 10.1z"  ></path></symbol><symbol id="me-progress-simple" viewBox="0 0 1024 1024"><path d="M624.469333 694.784c-32.028444 20.878222-63.943111 19.968-94.492444-9.557333L367.274667 521.671111 175.786667 708.835556c-30.151111 30.151111-73.443556 42.666667-100.522667 16.839111s-23.665778-65.763556 6.428444-95.857778c0.625778-0.568889 1.251556-1.365333 1.991112-1.934222l221.866666-214.243556a79.872 79.872 0 0 1 64.341334-21.617778c17.237333 1.706667 33.735111 9.045333 47.104 21.731556l166.343111 160.654222 277.390222-268.060444c31.175111-29.070222 71.793778-27.477333 92.956444-4.892445 21.162667 22.528 17.408 61.155556-11.946666 90.567111-190.179556 187.960889-295.879111 288.881778-317.269334 302.819556z" fill="#333333" ></path></symbol></svg>',function(t){var e=(e=document.getElementsByTagName("script"))[e.length-1],s=e.getAttribute("data-injectcss"),e=e.getAttribute("data-disable-injectsvg");if(!e){var c,n,o,r,p,m=function(d,a){a.parentNode.insertBefore(d,a)};if(s&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(d){console&&console.log(d)}}c=function(){var d,a=document.createElement("div");a.innerHTML=t._iconfont_svg_string_4523946,(a=a.getElementsByTagName("svg")[0])&&(a.setAttribute("aria-hidden","true"),a.style.position="absolute",a.style.width=0,a.style.height=0,a.style.overflow="hidden",a=a,(d=document.body).firstChild?m(a,d.firstChild):d.appendChild(a))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(c,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),c()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(o=c,r=t.document,p=!1,f(),r.onreadystatechange=function(){r.readyState=="complete"&&(r.onreadystatechange=null,u())})}function u(){p||(p=!0,o())}function f(){try{r.documentElement.doScroll("left")}catch{return void setTimeout(f,50)}u()}}(window);const he="modulepreload",fe=function(t,s){return new URL(t,s).href},P={},l=function(s,e,c){let n=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),p=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.all(e.map(m=>{if(m=fe(m,c),m in P)return;P[m]=!0;const u=m.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!c)for(let v=o.length-1;v>=0;v--){const y=o[v];if(y.href===m&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${f}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":he,u||(a.as="script",a.crossOrigin=""),a.href=m,p&&a.setAttribute("nonce",p),document.head.appendChild(a),u)return new Promise((v,y)=>{a.addEventListener("load",v),a.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${m}`)))})}))}return n.then(()=>s()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},_e=i(()=>l(()=>import("./Login-CTxNpr1c.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url)),ge=i(()=>l(()=>import("./Home-47myFo0e.js"),__vite__mapDeps([15,1,2,16,4,5,17,10,18,6,7,3,19,12,13,20,11]),import.meta.url)),ve=i(()=>l(()=>import("./Register-CkjQAN-K.js"),__vite__mapDeps([21,1,2,3,4,5,8,9,10,11]),import.meta.url)),A=i(()=>l(()=>import("./Books-DfH06VLT.js"),__vite__mapDeps([22,23,1,2,24,25,9,10,8,4,5,11,26,18,6,7,3]),import.meta.url)),C=i(()=>l(()=>import("./Empty-ONv7fKtX.js"),__vite__mapDeps([27,28,1,2]),import.meta.url)),E=i(()=>l(()=>import("./Book-Eq7mVqjq.js"),__vite__mapDeps([29,1,2,24,4,5,12,13,9,10,30,31]),import.meta.url)),be=i(()=>l(()=>import("./Schedule-aAVu9lA-.js"),__vite__mapDeps([32,1,2,24,18,6,7,3]),import.meta.url)),ye=i(()=>l(()=>import("./Robot-Cyk8drUl.js"),__vite__mapDeps([33,10,18,1,2,6,7,3,34,28,9,4,5,35,36,19,13,23,24,25,8,11,26,37,38,39]),import.meta.url)),Ee=i(()=>l(()=>import("./Translation-CqDgxDjM.js"),__vite__mapDeps([40,1,2,37,41,4,5,18,6,7,3,12,13,9,10,35,36]),import.meta.url)),Le=i(()=>l(()=>import("./Portals-Dvf69IUn.js"),__vite__mapDeps([42,1,2,16,4,5,17,25,9,10,8,11,18,6,7,3,24]),import.meta.url)),we=i(()=>l(()=>import("./Setting-B822aEcf.js"),__vite__mapDeps([43,18,1,2,6,7,3,8,9,10,4,5,11,44]),import.meta.url)),xe=i(()=>l(()=>import("./Words-nimwvs0Z.js"),__vite__mapDeps([45,41,4,1,2,5,18,6,7,3]),import.meta.url)),ke=i(()=>l(()=>import("./Chat-1qvuDzfo.js"),__vite__mapDeps([46,18,1,2,6,7,3,34,28,10,9,4,5,35,36,19,13,47]),import.meta.url)),Re=i(()=>l(()=>import("./Board-Bw36A3Uo.js"),__vite__mapDeps([48,18,1,2,6,7,3,24]),import.meta.url)),Oe=i(()=>l(()=>import("./Apps-DOqPpaEP.js"),__vite__mapDeps([49,16,1,2,4,5,17,8,9,10,11,18,6,7,3,20]),import.meta.url)),Pe=i(()=>l(()=>import("./Forget-Uul1IBKi.js"),__vite__mapDeps([50,1,2,4,5,8,9,10,11,44]),import.meta.url)),Ae=i(()=>l(()=>import("./FileManager-jDgZX48b.js"),__vite__mapDeps([51,7,1,2,18,6,3,52,9,10]),import.meta.url)),Ce=i(()=>l(()=>import("./Library-L8gqQ-wV.js"),__vite__mapDeps([53,16,1,2,4,5,17,8,9,10,11,18,6,7,3,20]),import.meta.url)),Se=i(()=>l(()=>import("./UserManager-CKdMHguS.js"),__vite__mapDeps([54,18,1,2,6,7,3,4,5,10]),import.meta.url)),Te=i(()=>l(()=>import("./Hot-B85rdsLZ.js"),__vite__mapDeps([55,18,1,2,6,7,3,9,10]),import.meta.url)),Ie=[{name:"root",path:"/",redirect:"/home"},{name:"login",path:"/login",component:_e},{name:"home",path:"/home",component:ge},{name:"register",path:"/register",component:ve},{name:"books",path:"/books",component:A,children:[{path:":id",component:E},{path:"",component:C}]},{name:"share",path:"/share",component:A,children:[{path:":id",component:E},{path:"",component:C}],props:{published:!0}},{name:"book",path:"/book",component:E,children:[{path:":id",component:E}]},{name:"schedule",path:"/schedule",component:be},{name:"robot",path:"/robot",component:ye},{name:"translation",path:"/translation",component:Ee},{name:"portals",path:"/portals",component:Le},{name:"setting",path:"/setting",component:we},{name:"words",path:"/words",component:xe},{name:"chat",path:"/chat",component:ke},{name:"board",path:"/board",component:Re},{name:"apps",path:"/apps",component:Oe},{name:"forget",path:"/forget",component:Pe},{name:"fileManager",path:"/fileManager",component:Ae},{name:"library",path:"/library",component:Ce},{name:"userManager",path:"/userManager",component:Se},{name:"hot",path:"/hotTop",component:Te}],V=F({history:W(),routes:Ie,scrollBehavior(t){if(t.hash)return{el:t.hash}}});V.beforeEach(async(t,s,e)=>{console.log("route",t,s),e()});const L=K(pe);L.directive("tippy",G);L.use(V);L.use(J,{defaultProps:{animation:"scale",theme:"light",arrow:Q}});L.mount("#app");export{ee as _,l as a,Me as b,me as c,se as d,Y as e,ce as m};
