(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{978:function(e,t,r){"use strict";r.r(t);var n=r(266),o=r(2809),s=r(809),a=r.n(s),i=r(7294),c=r(1664),l=r(5675),u=r(3636),d=r(1163),m=r(6042),f=(r(733),r(5733)),h=r(3651),p=r(6426),x=r(2440),w=r(5893);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=(0,d.useRouter)(),t=(0,i.useState)(!1),r=t[0],s=t[1],g="dark"===(0,i.useContext)(h.WindmillContext).mode?"/assets/img/create-account-office-dark.jpeg":"/assets/img/create-account-office.jpeg",v=(0,p.Nq)({onSuccess:function(t){console.log("token",t),m.Am.success("Login successfully"),localStorage.setItem("token",t.access_token),e.push("/dashboard")},onError:function(e){console.log(e)}}),b=(0,i.useState)(!1),y=b[0],k=b[1],N=(0,i.useState)(!1),L=N[0],C=N[1];function O(e){console.log("data",e),"password"===e?k((function(e){return!e})):C((function(e){return!e}))}var T=(0,i.useState)({email:"",password:"",confirm_password:""}),_=T[0],E=T[1],P=function(){return""!==_.email.trim()&&""!==_.password.trim()&&""!==_.confirm_password.trim()},S=function(e){var t=e.target,r=t.name,n=t.value;E(j(j({},_),{},(0,o.Z)({},r,n)))};console.log("signup",_);var A=function(){var t=(0,n.Z)(a().mark((function t(r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),r.preventDefault(),t.prev=2,t.next=5,u.Z.post("".concat("http://localhost:8000","/signup"),_);case 5:n=t.sent,console.log("response",n),200==n.data.code&&"User registered successfully"===n.data.message?(s(!1),m.Am.success(n.data.message),e.push("/dashboard/login")):(s(!1),console.log("Signup failed. Please try again.")),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(2),s(!1),console.log("Response",t.t0.response.data.detail),m.Am.error(t.t0.response.data.detail.message);case 15:s(!1);case 16:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,w.jsx)("div",{className:"flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900",children:(0,w.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:(0,w.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[(0,w.jsx)("div",{className:"relative h-32 md:h-auto md:w-1/2",children:(0,w.jsx)(l.default,{"aria-hidden":"true",className:"object-cover w-full h-full",src:g,alt:"Office",layout:"fill"})}),(0,w.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:(0,w.jsxs)("div",{className:"w-full",children:[(0,w.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Create account"}),(0,w.jsxs)(h.Label,{children:[(0,w.jsx)("span",{children:"Email"}),(0,w.jsx)(h.Input,{className:"mt-1",type:"email",name:"email",value:_.email,onChange:S,placeholder:"john@doe.com"})]}),(0,w.jsxs)(h.Label,{className:"mt-4",children:[(0,w.jsx)("span",{children:"Password"}),(0,w.jsxs)("div",{className:"relative  container mx-auto  mt-1",children:[(0,w.jsx)(h.Input,{type:y?"text":"password",placeholder:"Password",className:"w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1",name:"password",onChange:S,value:_.password}),(0,w.jsx)("button",{className:"absolute inset-y-0 right-0 flex items-center px-4 text-gray-600",onClick:function(){return O("password")},children:y?(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:[(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})]}),(0,w.jsxs)(h.Label,{className:"mt-4",children:[(0,w.jsx)("span",{children:"Confirm password"}),(0,w.jsxs)("div",{className:"relative  container mx-auto mt-1",children:[(0,w.jsx)(h.Input,{type:L?"text":"password",placeholder:"Confirm password",className:"w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1",value:_.confirm_password,name:"confirm_password",onChange:S}),(0,w.jsx)("button",{className:"absolute inset-y-0 right-0 flex items-center px-4 text-gray-600",onClick:function(){return O("confirm password")},children:L?(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:[(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),(0,w.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})]}),(0,w.jsx)("form",{onSubmit:A,children:(0,w.jsx)(h.Button,{block:!0,style:{cursor:P()?"pointer":"not-allowed"},className:"mt-4 ".concat(P()?"":"opacity-50"),type:"submit",disabled:!P(),children:r?(0,w.jsx)(x.s5,{visible:!0,width:"20",strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"}):"Sign Up"})}),(0,w.jsx)("hr",{className:"my-8"}),(0,w.jsxs)(h.Button,{block:!0,layout:"outline",onClick:function(){return v()},children:[(0,w.jsx)(f.GoogleIcon,{className:"w-4 h-4 mr-2","aria-hidden":"true"}),"Sign in with Google"]}),(0,w.jsx)("p",{className:"mt-4",children:(0,w.jsx)(c.default,{href:"/dashboard/login",children:(0,w.jsx)("a",{className:"text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline",children:"Already have an account? Login"})})})]})})]})})})}},3339:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/create-account",function(){return r(978)}])},4155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var i,c=[],l=!1,u=-1;function d(){l&&i&&(l=!1,i.length?c=i.concat(c):u=-1,c.length&&m())}function m(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(i=c,c=[];++u<t;)i&&i[u].run();u=-1,t=c.length}i=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new f(e,t)),1!==c.length||l||a(m)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},function(e){e.O(0,[794,256,675,528,169,733,774,888,179],(function(){return t=3339,e(e.s=t);var t}));var t=e.O();_N_E=t}]);