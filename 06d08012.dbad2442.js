(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),p=r(7),a=(r(0),r(2839)),o=["components"],c={},u={unversionedId:"puppeteer.responseforrequest",id:"puppeteer.responseforrequest",isDocsHomePage:!1,title:"puppeteer.responseforrequest",description:"Home &gt; puppeteer &gt; ResponseForRequest",source:"@site/docs\\puppeteer.responseforrequest.md",slug:"/puppeteer.responseforrequest",permalink:"/puppeteer/docs/next/puppeteer.responseforrequest",version:"current"},s=[{value:"ResponseForRequest interface",id:"responseforrequest-interface",children:[]},{value:"Properties",id:"properties",children:[]}],l={toc:s};function b(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.responseforrequest"},"ResponseForRequest")),Object(a.b)("h2",{id:"responseforrequest-interface"},"ResponseForRequest interface"),Object(a.b)("p",null,"Required response data to fulfill a request with."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export interface ResponseForRequest \n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Property"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.responseforrequest.body"},"body")),Object(a.b)("td",{parentName:"tr",align:null},"string ","|"," Buffer"),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.responseforrequest.contenttype"},"contentType")),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.responseforrequest.headers"},"headers")),Object(a.b)("td",{parentName:"tr",align:null},"Record","<","string, unknown",">"),Object(a.b)("td",{parentName:"tr",align:null},"Optional response headers. All values are converted to strings.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.responseforrequest.status"},"status")),Object(a.b)("td",{parentName:"tr",align:null},"number"),Object(a.b)("td",{parentName:"tr",align:null})))))}b.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=p.a.createContext({}),l=function(e){var t=p.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return p.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(o,".").concat(d)]||b[d]||i[d]||a;return r?p.a.createElement(f,c(c({ref:t},s),{},{components:r})):p.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);