const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Login-B4ST388L.js","./vendor-7SOp03Eo.js","../css/vendor-BPbd6SgJ.css","./user-DjlSiqBu.js","./message-DneuB5hD.js","./_plugin-vue_export-helper-DlAUqK2U.js","../css/message-Ld0-QEl8.css","./userInfo-GWa4mCN8.js","../css/Login-DFyfCOcz.css","./Home-Cq8VtFKP.js","./Card-DdO88aH6.js","./RemixIcon-C3kAUqBT.js","./Modal-DgpgRzLZ.js","../css/Card-9P6zUyBi.css","./Header-RLgrfCVI.js","../css/Header-DzSoJcto.css","./Loading-Be-tKEiL.js","../css/Loading-Cm_ATn7p.css","./app-CrZG00tE.js","./Register-Bj8p1bxj.js","./Books-CUhxbc8q.js","./Menu-jBSap3KG.js","./book-D8GVYk51.js","./GroupModal-CTqx1GXs.js","./utils-BIo_BOvM.js","../css/Menu-BYcJK5mv.css","./Empty-C8kN9Bn4.js","./FishGlass-D70-aktY.js","../css/FishGlass-DD7IDg5z.css","./Book-D1r0j35o.js","./Schedule-B3E3iFNu.js","./Robot-VDtaLjy-.js","./ChatPanel-D5UVYgbA.js","./Question-DeWIvzl_.js","./ai-BmD9iuyl.js","./Translation-D0i8FXFz.js","./word-OiIENb-c.js","./Portals-Ddh_E8Ql.js","./Coding-CvPeaaX8.js","../css/Coding-DKT1DZ9o.css","./Setting-TBuZvF4p.js","./Words-CQZgWTiW.js","./Chat-BRM3Ht4v.js","../css/Chat-Dp11bZZV.css","./Board-Cs_sZK3d.js","./Apps-CnG_s0Ck.js"])))=>i.map(i=>d[i]);
import{ay as E,az as w,aA as P,aB as A,aC as R,aD as O,aE as S,aF as T,aG as B,aH as y,aI as I,aJ as V,aK as a,aL as z,aM as D}from"./vendor-7SOp03Eo.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const C="http://111.229.165.93:3000";let k=C;function x(s,i){E.interceptors.request.use(function(e){const l=localStorage.getItem("me_token");return e.headers.Authorization=l,e.headers.appId=s.query.appId,e.url&&!new RegExp(/http|https/).test(e.url)&&(e.url=k+e.url),console.log("Starting request",e),e},function(e){return console.log("Request error",e),Promise.reject(e)}),E.interceptors.response.use(function(e){return e.status===200?(console.log("Successful response",e),e):(e.status===401&&i(),Promise.reject(e))},function(e){return e.response&&e.response.status===401&&i(),Promise.reject(e)})}const M=y("div",{class:"absolute z-20 top-0 lg:top-0 inset-x-0 flex justify-center lg:justify-end overflow-hidden pointer-events-none bg-slate-300"},[y("div",{class:"w-[80rem] lg:w-[100rem] flex-none flex justify-end"})],-1),j={__name:"App",setup(s){const i=w(),e=P();return A(()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),x(e,()=>{localStorage.removeItem("me_token"),i.replace("/login")})}),(l,o)=>{const r=R("router-view");return O(),S(B,null,[M,T(r)],64)}}};window._iconfont_svg_string_4523946='<svg><symbol id="me-error" viewBox="0 0 1024 1024"><path d="M512 725.333333a68.266667 68.266667 0 1 1 0 136.533334 68.266667 68.266667 0 0 1 0-136.533334z" fill="#e74c3c" ></path><path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667zM417.450667 357.589333a42.666667 42.666667 0 0 0-56.32 63.914667L451.669333 512l-90.538666 90.496-3.541334 4.053333a42.666667 42.666667 0 0 0 63.914667 56.32L512 572.330667l90.496 90.538666 4.053333 3.541334a42.666667 42.666667 0 0 0 56.32-63.914667L572.330667 512l90.538666-90.496 3.541334-4.053333a42.666667 42.666667 0 0 0-63.914667-56.32L512 451.669333 421.504 361.130667z" fill="#e74c3c" ></path></symbol><symbol id="me-success" viewBox="0 0 1024 1024"><path d="M512 32C248 32 32 248 32 512s216 480 480 480 480-216 480-480-216-480-480-480z m280.00000031 391.99999969L504.00000031 720.00000031c-7.99999969 7.99999969-16.00000031 16.00000031-32.00000062 15.99999938-7.99999969 0-24-7.99999969-31.99999969-15.99999938l-160.00000031-168c0-7.99999969-7.99999969-16.00000031-7.99999969-32.00000062 0-7.99999969 7.99999969-16.00000031 7.99999969-24 16.00000031-16.00000031 40.00000031-16.00000031 56.00000062 0l135.99999938 144 256.00000031-271.99999969c16.00000031-16.00000031 40.00000031-16.00000031 55.99999969 0 16.00000031 16.00000031 16.00000031 40.00000031 8.00000062 55.99999969z" fill="#2ecc71" ></path></symbol><symbol id="me-info" viewBox="0 0 1024 1024"><path d="M512 26.59669333C243.98203221 26.59669333 26.54814777 243.88494222 26.54814777 512c0 268.11505778 217.43388445 485.45185223 485.45185223 485.45185223 268.16360334 0 485.45185223-217.33679445 485.45185223-485.45185223 0-268.06651221-217.28824889-485.3547611-485.45185223-485.3547611z m76.11884999 664.09813334c-36.60307001 54.85605888-73.83722667 97.33309667-136.60615111 97.33309667-42.81685333-6.9419611-60.29312-37.67106333-51.02098887-68.88561777l80.68209778-267.19270002c1.94180779-6.50505443-1.35926557-13.4955611-7.28177778-15.63154888-5.97105778-2.03889778-17.67044779 5.67978667-27.81639111 16.69954333L397.43336334 511.66018333c-1.35926557-9.80612779-0.14563555-26.11731001-0.14563555-32.67090888 36.60307001-55.00169443 96.79909888-98.35254557 137.52850887-98.35254556 38.83614777 3.93216 57.2833189 34.95253333 50.43844779 69.03125333l-81.16755002 268.45487445a12.52465778 12.52465778 0 0 0 7.62159446 14.17519332c5.92251221 2.03889778 18.54426112-5.72833223 28.54456889-16.69954332l48.78791111-58.69112889c1.35926557 9.80612779-0.9223589 27.18530333-0.9223589 33.73890332z m-10.77703111-349.0398811c-30.82619221 0-55.92405333-22.42787555-55.92405333-55.53569224 0-33.01072555 25.09786112-55.53569223 55.92405333-55.53569223 30.82619221 0 55.77841778 22.47642112 55.77841778 55.53569223 0 33.10781667-24.95222557 55.53569223-55.82696221 55.53569224z" fill="#4a90e2" ></path></symbol><symbol id="me-warning" viewBox="0 0 1024 1024"><path d="M844.8 179.2C759.466667 93.866667 640 42.666667 512 42.666667S264.533333 93.866667 179.2 179.2 42.666667 384 42.666667 512s51.2 247.466667 136.533333 332.8S379.733333 981.333333 512 981.333333c132.266667 0 247.466667-51.2 332.8-136.533333S981.333333 644.266667 981.333333 512c0-132.266667-51.2-247.466667-136.533333-332.8zM469.333333 256v-4.266667c4.266667-21.333333 21.333333-38.4 42.666667-38.4s38.4 17.066667 42.666667 38.4v349.866667c-4.266667 21.333333-21.333333 38.4-42.666667 38.4s-38.4-17.066667-42.666667-38.4V256z m42.666667 533.333333c-29.866667 0-51.2-25.6-51.2-51.2S482.133333 682.666667 512 682.666667s51.2 25.6 51.2 51.2-21.333333 55.466667-51.2 55.466666z" fill="#f39c12" ></path></symbol><symbol id="me-progress" viewBox="0 0 1024 1024"><path d="M960.7 737.8V98H64.5v639.8h384v127.8h-192v64h512.1v-64h-192V737.8h384.1zM128.5 162h768.2v511.8H128.5V162z"  ></path><path d="M287.2 567c-7.9 0-15.7-2.9-21.9-8.7-12.9-12.1-13.5-32.4-1.4-45.2l141-150c11.2-11.9 29.6-13.5 42.6-3.6l123.6 93.3 142.4-158.2c11.8-13.1 32.1-14.2 45.2-2.4 13.1 11.8 14.2 32.1 2.4 45.2l-162 180c-11.1 12.3-29.8 14.1-43.1 4.1l-124.1-93.7-121.4 129.1c-6.3 6.7-14.8 10.1-23.3 10.1z"  ></path></symbol><symbol id="me-progress-simple" viewBox="0 0 1024 1024"><path d="M624.469333 694.784c-32.028444 20.878222-63.943111 19.968-94.492444-9.557333L367.274667 521.671111 175.786667 708.835556c-30.151111 30.151111-73.443556 42.666667-100.522667 16.839111s-23.665778-65.763556 6.428444-95.857778c0.625778-0.568889 1.251556-1.365333 1.991112-1.934222l221.866666-214.243556a79.872 79.872 0 0 1 64.341334-21.617778c17.237333 1.706667 33.735111 9.045333 47.104 21.731556l166.343111 160.654222 277.390222-268.060444c31.175111-29.070222 71.793778-27.477333 92.956444-4.892445 21.162667 22.528 17.408 61.155556-11.946666 90.567111-190.179556 187.960889-295.879111 288.881778-317.269334 302.819556z" fill="#333333" ></path></symbol></svg>',function(s){var e=(e=document.getElementsByTagName("script"))[e.length-1],i=e.getAttribute("data-injectcss"),e=e.getAttribute("data-disable-injectsvg");if(!e){var l,o,r,n,p,m=function(u,t){t.parentNode.insertBefore(u,t)};if(i&&!s.__iconfont__svg__cssinject__){s.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(u){console&&console.log(u)}}l=function(){var u,t=document.createElement("div");t.innerHTML=s._iconfont_svg_string_4523946,(t=t.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",t=t,(u=document.body).firstChild?m(t,u.firstChild):u.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(l,0):(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),l()},document.addEventListener("DOMContentLoaded",o,!1)):document.attachEvent&&(r=l,n=s.document,p=!1,h(),n.onreadystatechange=function(){n.readyState=="complete"&&(n.onreadystatechange=null,d())})}function d(){p||(p=!0,r())}function h(){try{n.documentElement.doScroll("left")}catch{return void setTimeout(h,50)}d()}}(window);const q="modulepreload",H=function(s,i){return new URL(s,i).href},L={},c=function(i,e,l){let o=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),p=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.all(e.map(m=>{if(m=H(m,l),m in L)return;L[m]=!0;const d=m.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!l)for(let _=r.length-1;_>=0;_--){const f=r[_];if(f.href===m&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${h}`))return;const t=document.createElement("link");if(t.rel=d?"stylesheet":q,d||(t.as="script",t.crossOrigin=""),t.href=m,p&&t.setAttribute("nonce",p),document.head.appendChild(t),d)return new Promise((_,f)=>{t.addEventListener("load",_),t.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${m}`)))})}))}return o.then(()=>i()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})},N=a(()=>c(()=>import("./Login-B4ST388L.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)),U=a(()=>c(()=>import("./Home-Cq8VtFKP.js"),__vite__mapDeps([9,1,2,10,11,12,5,13,14,7,3,15,4,6,16,17,18]),import.meta.url)),F=a(()=>c(()=>import("./Register-Bj8p1bxj.js"),__vite__mapDeps([19,1,2,3,4,5,6]),import.meta.url)),W=a(()=>c(()=>import("./Books-CUhxbc8q.js"),__vite__mapDeps([20,21,1,2,22,23,12,11,24,4,5,6,25,14,7,3,15]),import.meta.url)),$=a(()=>c(()=>import("./Empty-C8kN9Bn4.js"),__vite__mapDeps([26,27,5,1,2,28]),import.meta.url)),v=a(()=>c(()=>import("./Book-D1r0j35o.js"),__vite__mapDeps([29,1,2,22,4,5,6,11,16,17]),import.meta.url)),K=a(()=>c(()=>import("./Schedule-B3E3iFNu.js"),__vite__mapDeps([30,1,2,22,11,14,7,3,5,15]),import.meta.url)),G=a(()=>c(()=>import("./Robot-VDtaLjy-.js"),__vite__mapDeps([31,11,1,2,12,14,7,3,5,15,32,24,4,6,33,27,28,21,22,23,25,34]),import.meta.url)),J=a(()=>c(()=>import("./Translation-D0i8FXFz.js"),__vite__mapDeps([35,1,2,11,34,36,4,5,6,14,7,3,15,16,17,24,33]),import.meta.url)),Q=a(()=>c(()=>import("./Portals-Ddh_E8Ql.js"),__vite__mapDeps([37,1,2,11,10,12,5,13,23,24,14,7,3,15,22,4,6]),import.meta.url)),X=a(()=>c(()=>import("./Coding-CvPeaaX8.js"),__vite__mapDeps([38,1,2,14,11,7,3,5,15,39]),import.meta.url)),Y=a(()=>c(()=>import("./Setting-TBuZvF4p.js"),__vite__mapDeps([40,14,1,2,11,7,3,5,15]),import.meta.url)),Z=a(()=>c(()=>import("./Words-CQZgWTiW.js"),__vite__mapDeps([41,11,1,2,36,4,5,6,14,7,3,15]),import.meta.url)),ee=a(()=>c(()=>import("./Chat-BRM3Ht4v.js"),__vite__mapDeps([42,14,1,2,11,7,3,5,15,32,12,24,4,6,33,27,28,43]),import.meta.url)),te=a(()=>c(()=>import("./Board-Cs_sZK3d.js"),__vite__mapDeps([44,14,1,2,11,7,3,5,15,22]),import.meta.url)),oe=a(()=>c(()=>import("./Apps-CnG_s0Ck.js"),__vite__mapDeps([45,10,1,2,11,12,5,13,14,7,3,15,18,4,6]),import.meta.url)),re=[{name:"root",path:"/",redirect:"/home"},{name:"login",path:"/login",component:N},{name:"home",path:"/home",component:U},{name:"register",path:"/register",component:F},{name:"books",path:"/books",component:W,children:[{path:":id",component:v},{path:"",component:$}]},{name:"book",path:"/book",component:v,children:[{path:":id",component:v}]},{name:"schedule",path:"/schedule",component:K},{name:"robot",path:"/robot",component:G},{name:"translation",path:"/translation",component:J},{name:"portals",path:"/portals",component:Q},{name:"coding",path:"/coding",component:X},{name:"setting",path:"/setting",component:Y},{name:"words",path:"/words",component:Z},{name:"chat",path:"/chat",component:ee},{name:"board",path:"/board",component:te},{name:"apps",path:"/apps",component:oe}],b=I({history:V(),routes:re,scrollBehavior(s){if(s.hash)return{el:s.hash}}});b.beforeEach(async(s,i,e)=>{console.log("route",s,i),e()});const g=z(j);g.use(b);g.use(D,{defaultProps:{theme:"light"}});g.mount("#app");export{c as _,k as b};
