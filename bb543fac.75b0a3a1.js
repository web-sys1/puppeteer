(window.webpackJsonp=window.webpackJsonp||[]).push([[2029],{2101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),p=r(7),a=(r(0),r(2839)),o=["components"],c={},i={unversionedId:"puppeteer.page.setrequestinterception",id:"version-6.0.0/puppeteer.page.setrequestinterception",isDocsHomePage:!1,title:"puppeteer.page.setrequestinterception",description:"Home &gt; puppeteer &gt; Page &gt; setRequestInterception",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.page.setrequestinterception.md",slug:"/puppeteer.page.setrequestinterception",permalink:"/puppeteer/docs/6.0.0/puppeteer.page.setrequestinterception",version:"6.0.0"},u=[{value:"Page.setRequestInterception() method",id:"pagesetrequestinterception-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page"},"Page")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page.setrequestinterception"},"setRequestInterception")),Object(a.b)("h2",{id:"pagesetrequestinterception-method"},"Page.setRequestInterception() method"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"setRequestInterception(value: boolean): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"value"),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"Whether to enable request interception.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"Activating request interception enables ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.httprequest.abort"},"HTTPRequest.abort()"),", ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.httprequest.continue"},"HTTPRequest.continue()")," and ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.httprequest.respond"},"HTTPRequest.respond()")," methods. This provides the capability to modify network requests that are made by a page."),Object(a.b)("p",null,"Once request interception is enabled, every request will stall unless it's continued, responded or aborted; or completed using the browser cache."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"An example of a na\xefve request interceptor that aborts all image requests:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (interceptedRequest.url().endsWith('.png') ||\n        interceptedRequest.url().endsWith('.jpg'))\n      interceptedRequest.abort();\n    else\n      interceptedRequest.continue();\n    });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n\n")))}l.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=p.a.createContext({}),s=function(e){var t=p.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(o,".").concat(d)]||l[d]||b[d]||a;return r?p.a.createElement(m,c(c({ref:t},u),{},{components:r})):p.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);