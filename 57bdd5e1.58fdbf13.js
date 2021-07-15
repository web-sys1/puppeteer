(window.webpackJsonp=window.webpackJsonp||[]).push([[960],{1031:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),p=(r(0),r(2839)),c=["components"],a={},s={unversionedId:"puppeteer.browsercontext.close",id:"puppeteer.browsercontext.close",isDocsHomePage:!1,title:"puppeteer.browsercontext.close",description:"Home &gt; puppeteer &gt; BrowserContext &gt; close",source:"@site/docs\\puppeteer.browsercontext.close.md",slug:"/puppeteer.browsercontext.close",permalink:"/puppeteer/docs/next/puppeteer.browsercontext.close",version:"current",sidebar:"docs",previous:{title:"puppeteer.browsercontext.overridepermissions",permalink:"/puppeteer/docs/next/puppeteer.browsercontext.overridepermissions"},next:{title:"puppeteer.browsercontext.isincognito",permalink:"/puppeteer/docs/next/puppeteer.browsercontext.isincognito"}},i=[{value:"BrowserContext.close() method",id:"browsercontextclose-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],u={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,c);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontext.close"},"close")),Object(p.b)("h2",{id:"browsercontextclose-method"},"BrowserContext.close() method"),Object(p.b)("p",null,"Closes the browser context. All the targets that belong to the browser context will be closed."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"close(): Promise<void>;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Only incognito browser contexts can be closed."))}l.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||p;return r?o.a.createElement(m,a(a({ref:t},i),{},{components:r})):o.a.createElement(m,a({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,c=new Array(p);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var i=2;i<p;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);