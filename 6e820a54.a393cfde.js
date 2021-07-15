(window.webpackJsonp=window.webpackJsonp||[]).push([[1198],{1269:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(2839)),p=["components"],c={},i={unversionedId:"puppeteer.jscoverageoptions",id:"puppeteer.jscoverageoptions",isDocsHomePage:!1,title:"puppeteer.jscoverageoptions",description:"Home &gt; puppeteer &gt; JSCoverageOptions",source:"@site/docs\\puppeteer.jscoverageoptions.md",slug:"/puppeteer.jscoverageoptions",permalink:"/puppeteer/docs/next/puppeteer.jscoverageoptions",version:"current"},u=[{value:"JSCoverageOptions interface",id:"jscoverageoptions-interface",children:[]},{value:"Properties",id:"properties",children:[]}],l={toc:u};function b(e){var t=e.components,r=Object(o.a)(e,p);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.jscoverageoptions"},"JSCoverageOptions")),Object(a.b)("h2",{id:"jscoverageoptions-interface"},"JSCoverageOptions interface"),Object(a.b)("p",null,"Set of configurable options for JS coverage."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"export interface JSCoverageOptions \n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Property"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.jscoverageoptions.reportanonymousscripts"},"reportAnonymousScripts?")),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("i",null,"(Optional)")," Whether anonymous scripts generated by the page should be reported.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.jscoverageoptions.resetonnavigation"},"resetOnNavigation?")),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("i",null,"(Optional)")," Whether to reset coverage on every navigation.")))))}b.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=l(r),O=n,f=b["".concat(p,".").concat(O)]||b[O]||s[O]||a;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var u=2;u<a;u++)p[u]=r[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);