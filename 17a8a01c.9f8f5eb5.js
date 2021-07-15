(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=p.a.createContext({}),c=function(e){var t=p.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return p.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},b=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=c(r),b=n,d=s["".concat(u,".").concat(b)]||s[b]||f[b]||a;return r?p.a.createElement(d,o(o({ref:t},l),{},{components:r})):p.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var l=2;l<a;l++)u[l]=r[l];return p.a.createElement.apply(null,u)}return p.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},332:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),p=r(7),a=(r(0),r(2839)),u=["components"],o={},i={unversionedId:"puppeteer.httprequest.failure",id:"version-6.0.0/puppeteer.httprequest.failure",isDocsHomePage:!1,title:"puppeteer.httprequest.failure",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; failure",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.httprequest.failure.md",slug:"/puppeteer.httprequest.failure",permalink:"/puppeteer/docs/6.0.0/puppeteer.httprequest.failure",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.httprequest.continue",permalink:"/puppeteer/docs/6.0.0/puppeteer.httprequest.continue"},next:{title:"puppeteer.httprequest.frame",permalink:"/puppeteer/docs/6.0.0/puppeteer.httprequest.frame"}},l=[{value:"HTTPRequest.failure() method",id:"httprequestfailure-method",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function s(e){var t=e.components,r=Object(p.a)(e,u);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.httprequest.failure"},"failure")),Object(a.b)("h2",{id:"httprequestfailure-method"},"HTTPRequest.failure() method"),Object(a.b)("p",null,"Access information about the request's failure."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"failure(): {\n        errorText: string;\n    } | null;\n")),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"{ errorText: string; } ","|"," null"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"null")," unless the request failed. If the request fails this can return an object with ",Object(a.b)("inlineCode",{parentName:"p"},"errorText")," containing a human-readable error message, e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"net::ERR_FAILED"),". It is not guaranteeded that there will be failure text if the request fails."),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"Example of logging all failed requests:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n\n")))}s.isMDXComponent=!0}}]);