import{ae as d,au as b,aw as x,ag as h,ay as v,az as w,aC as o,aI as m,aJ as i,aK as c}from"./vendor-BLq22pPX.js";import{l as y}from"./user-C3fmNsgu.js";import{m as l}from"./message-AZuur2LZ.js";import{s as _}from"./userInfo-CtL9gwPY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={class:"h-screen flex items-center justify-center"},B={class:"w-80 p-4 flex flex-col bg-transparent"},I=o("span",{class:"animate-bounce font-sans font-medium lg:font-semibold text-2xl lg:text-3xl leading-10 text-slate-500 mt-2"}," I Want Progress ",-1),R={__name:"Login",setup(U){const n=d(""),s=d(""),r=b(),u=()=>{console.log(n.value,s.value,c(s.value)),y({name:n.value,password:c(s.value)}).then(e=>{if(console.log(e),e&&e.data)if(e.data.success){let{token:a,_id:t,name:g,avatar:f}=e.data.data;a?(localStorage.setItem("me_token",a),_({_id:t,name:g,avatar:f}),r.push("/home")):e.data.message&&l.error(e.data.message)}else console.log("登录失败"),e.data.message&&l.error(e.data.message);else e.data.message&&l.error("登录失败")})},p=()=>{r.push("register")};return x(()=>{}),h(()=>{}),(e,a)=>(v(),w("div",k,[o("div",B,[I,m(o("input",{class:"px-4 py-3 my-2 lg:my-3 bg-transparent text-slate-300 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>n.value=t),placeholder:"请输入用户名"},null,512),[[i,n.value]]),m(o("input",{class:"px-4 py-3 my-2 lg:my-3 bg-transparent text-slate-300 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",type:"password","onUpdate:modelValue":a[1]||(a[1]=t=>s.value=t),placeholder:"请输入密码"},null,512),[[i,s.value]]),o("div",{class:"flex flex-row justify-between my-2 lg:my-3"},[o("button",{class:"w-1/2 py-3 mr-2 bg-blue-300 text-white font-semibold rounded-md shadow-md hover:bg-blue-600",onClick:u},"登录"),o("button",{class:"w-1/2 py-3 ml-2 bg-red-300 text-white font-semibold rounded-md shadow-md hover:bg-red-600",onClick:p},"注册")])])]))}};export{R as default};
