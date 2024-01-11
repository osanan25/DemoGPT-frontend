(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{8365:function(e,n,t){"use strict";t(7294);var r=t(5893);n.Z=function(){return(0,r.jsxs)("a",{className:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple",href:"https://github.com/roketid/windmill-dashboard-nextjs-typescript",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),(0,r.jsx)("span",{children:"Star this project on GitHub"})]}),(0,r.jsxs)("span",{children:["View more ",(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:"&RightArrow;"}})]})]})}},3064:function(e,n,t){"use strict";t(7294);var r=t(5893);n.Z=function(e){var n=e.children;return(0,r.jsx)("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200",children:n})}},7937:function(e,n,t){"use strict";t(7294);var r=t(5893);n.Z=function(e){var n=e.children;return(0,r.jsx)("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300",children:n})}},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var i,l=(i=t(7294))&&i.__esModule?i:{default:i},o=t(1063),c=t(4651),s=t(132);var a={};function u(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,i=c.useRouter(),d=l.default.useMemo((function(){var n=o.resolveHref(i,e.href,!0),t=r(n,2),l=t[0],c=t[1];return{href:l,as:e.as?o.resolveHref(i,e.as):c||l}}),[i,e.href,e.as]),f=d.href,h=d.as,x=e.children,p=e.replace,v=e.shallow,m=e.scroll,j=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var y=(n=l.default.Children.only(x))&&"object"===typeof n&&n.ref,g=s.useIntersection({rootMargin:"200px"}),b=r(g,2),w=b[0],L=b[1],B=l.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);l.default.useEffect((function(){var e=L&&t&&o.isLocalURL(f),n="undefined"!==typeof j?j:i&&i.locale,r=a[f+"%"+h+(n?"%"+n:"")];e&&!r&&u(i,f,h,{locale:n})}),[h,f,L,j,t,i]);var k={ref:B,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,l,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[i?"replace":"push"](t,r,{shallow:l,locale:s,scroll:c}))}(e,i,f,h,p,v,m,j)},onMouseEnter:function(e){o.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof j?j:i&&i.locale,T=i&&i.isLocaleDomain&&o.getDomainLocale(h,E,i&&i.locales,i&&i.domainLocales);k.href=T||o.addBasePath(o.addLocale(h,E,i&&i.defaultLocale))}return l.default.cloneElement(n,k)};n.default=d},132:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,s=i.useRef(),a=i.useState(!1),u=r(a,2),d=u[0],f=u[1],h=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,l=r.observer,o=r.elements;return o.set(e,n),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return i.useEffect((function(){if(!o&&!d){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),[h,d]};var i=t(7294),l=t(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},1946:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(3651),i=t(3064),l=t(7937),o=t(8365),c=t(2325),s=t(5733),a=t(5893);n.default=function(){return(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(i.Z,{children:"Buttons"}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(l.Z,{children:"Primary"}),(0,a.jsxs)("div",{className:"flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{size:"larger",children:"Larger Button"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{size:"large",children:"Large Button"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{children:"Regular"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{disabled:!0,children:"Disabled"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{size:"small",children:"Small"})})]}),(0,a.jsx)(l.Z,{children:"Outline"}),(0,a.jsxs)("div",{className:"flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"outline",size:"larger",children:"Larger Button"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"outline",size:"large",children:"Large Button"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"outline",children:"Regular"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"outline",disabled:!0,children:"Disabled"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"outline",size:"small",children:"Small"})})]}),(0,a.jsx)(l.Z,{children:"Link"}),(0,a.jsxs)("div",{className:"flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"link",size:"larger",children:"Larger Button"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"link",size:"large",children:"Large Button"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"link",children:"Regular"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"link",disabled:!0,children:"Disabled"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{layout:"link",size:"small",children:"Small"})})]}),(0,a.jsx)(l.Z,{children:"Icons"}),(0,a.jsxs)("div",{className:"flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{iconRight:s.HeartIcon,children:(0,a.jsx)("span",{children:"Icon right"})})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{iconLeft:s.HeartIcon,children:(0,a.jsx)("span",{children:"Icon Left"})})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{icon:s.HeartIcon,"aria-label":"Like"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{icon:s.EditIcon,"aria-label":"Edit"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{icon:s.HeartIcon,layout:"link","aria-label":"Like"})}),(0,a.jsx)("div",{children:(0,a.jsx)(r.Button,{icon:s.HeartIcon,layout:"outline","aria-label":"Like"})})]})]})}},9432:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/buttons",function(){return t(1946)}])},1664:function(e,n,t){e.exports=t(2167)},4155:function(e){var n,t,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{t="function"===typeof clearTimeout?clearTimeout:l}catch(e){t=l}}();var c,s=[],a=!1,u=-1;function d(){a&&c&&(a=!1,c.length?s=c.concat(s):u=-1,s.length&&f())}function f(){if(!a){var e=o(d);a=!0;for(var n=s.length;n;){for(c=s,s=[];++u<n;)c&&c[u].run();u=-1,n=s.length}c=null,a=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===l||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function x(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new h(e,n)),1!==s.length||a||o(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=x,r.addListener=x,r.once=x,r.off=x,r.removeListener=x,r.removeAllListeners=x,r.emit=x,r.prependListener=x,r.prependOnceListener=x,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},219:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[733,325,774,888,179],(function(){return n=9432,e(e.s=n);var n}));var n=e.O();_N_E=n}]);