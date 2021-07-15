(window.webpackJsonp=window.webpackJsonp||[]).push([[1256],{1327:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),p=t(7),a=(t(0),t(2839)),o=["components"],c={},l={unversionedId:"puppeteer.unwrapelementhandle",id:"version-6.0.0/puppeteer.unwrapelementhandle",isDocsHomePage:!1,title:"puppeteer.unwrapelementhandle",description:"Home &gt; puppeteer &gt; UnwrapElementHandle",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.unwrapelementhandle.md",slug:"/puppeteer.unwrapelementhandle",permalink:"/puppeteer/docs/6.0.0/puppeteer.unwrapelementhandle",version:"6.0.0"},u=[{value:"UnwrapElementHandle type",id:"unwrapelementhandle-type",children:[]}],i={toc:u};function d(e){var n=e.components,t=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.unwrapelementhandle"},"UnwrapElementHandle")),Object(a.b)("h2",{id:"unwrapelementhandle-type"},"UnwrapElementHandle type"),Object(a.b)("p",null,"Unwraps a DOM element out of an ElementHandle instance"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export declare type UnwrapElementHandle<X> = X extends ElementHandle<infer E> ? E : X;\n")),Object(a.b)("b",null,"References:")," [ElementHandle](/puppeteer/docs/6.0.0/puppeteer.elementhandle)")}d.isMDXComponent=!0},2839:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),p=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=p.a.createContext({}),i=function(e){var n=p.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=i(e.components);return p.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return p.a.createElement(p.a.Fragment,{},n)}},s=p.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),s=r,f=d["".concat(o,".").concat(s)]||d[s]||m[s]||a;return t?p.a.createElement(f,c(c({ref:n},u),{},{components:t})):p.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);