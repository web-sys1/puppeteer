(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{2839:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),p=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=p.a.createContext({}),l=function(e){var r=p.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return p.a.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return p.a.createElement(p.a.Fragment,{},r)}},s=p.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=l(t),s=n,b=d["".concat(o,".").concat(s)]||d[s]||f[s]||a;return t?p.a.createElement(b,c(c({ref:r},i),{},{components:t})):p.a.createElement(b,c({ref:r},i))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<a;i++)o[i]=t[i];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},786:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return d}));var n=t(3),p=t(7),a=(t(0),t(2839)),o=["components"],c={},u={unversionedId:"puppeteer.handler",id:"version-6.0.0/puppeteer.handler",isDocsHomePage:!1,title:"puppeteer.handler",description:"Home &gt; puppeteer &gt; Handler",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.handler.md",slug:"/puppeteer.handler",permalink:"/puppeteer/docs/6.0.0/puppeteer.handler",version:"6.0.0"},i=[{value:"Handler type",id:"handler-type",children:[]}],l={toc:i};function d(e){var r=e.components,t=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.handler"},"Handler")),Object(a.b)("h2",{id:"handler-type"},"Handler type"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export declare type Handler<T = any> = (event?: T) => void;\n")))}d.isMDXComponent=!0}}]);