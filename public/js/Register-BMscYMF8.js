import{ae as r,au as v,ay as x,az as h,aC as o,aI as u,aJ as c,aP as b,aK as p}from"./vendor-BSAPUjJi.js";import{r as w}from"./user-DPFXhvfg.js";import{m as i}from"./message-CIMfOfme.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"h-screen flex items-center justify-center"},_={class:"min-h-80 w-80 p-4 flex flex-col bg-slate-50 rounded-lg shadow-md"},k=o("span",{class:"font-sans font-semibold text-3xl leading-10 text-slate-300"},"I Want Progress",-1),V={class:"text-red-400 text-sm"},D={__name:"Register",setup(B){const l=r(""),s=r(""),n=r(""),d=r(""),m=v(),f=()=>{let a="",e=!0;return s.value?s.value.length<6?(a="请输入至少6位的密码",e=!1):s.value!==n.value&&(a="两次输入密码不同",e=!1):(a="请输入密码",e=!1),{message:a,success:e}},g=()=>{let a=f();if(!a.success){d.value=a.message,console.log(d);return}console.log(l.value,s.value,p(s.value)),w({name:l.value,password:p(s.value)}).then(e=>{console.log(e),e&&e.data?e.data.success?(e.data.message&&i.success(e.data.message),m.push("login")):(console.log("注册失败"),e.data.message&&i.error(e.data.message)):(console.log("注册失败"),i.error("注册失败"))})};return(a,e)=>(x(),h("div",y,[o("div",_,[k,u(o("input",{class:"px-4 py-3 my-2 bg-white text-slate-600 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),placeholder:"输入用户名"},null,512),[[c,l.value]]),u(o("input",{class:"px-4 py-3 my-2 bg-white text-slate-600 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t),placeholder:"输入大于6位密码"},null,512),[[c,s.value]]),u(o("input",{class:"px-4 py-3 my-2 bg-white text-slate-600 placeholder-slate-300 shadow-sm border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",type:"password","onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),placeholder:"再次输入大于6位密码"},null,512),[[c,n.value]]),o("span",V,b(d.value),1),o("button",{class:"py-3 px-4 my-2 bg-slate-400 text-white font-semibold rounded-md shadow-md hover:bg-slate-700",onClick:g},"注册")])]))}};export{D as default};
