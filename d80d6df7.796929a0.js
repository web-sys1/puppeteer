(window.webpackJsonp=window.webpackJsonp||[]).push([[2359],{2430:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),p=r(7),o=(r(0),r(2839)),i=["components"],a={},c={unversionedId:"puppeteer.puppeteer.networkconditions",id:"version-10.0.0/puppeteer.puppeteer.networkconditions",isDocsHomePage:!1,title:"puppeteer.puppeteer.networkconditions",description:"Home &gt; puppeteer &gt; Puppeteer &gt; networkConditions",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.puppeteer.networkconditions.md",slug:"/puppeteer.puppeteer.networkconditions",permalink:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.networkconditions",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.puppeteer.errors",permalink:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.errors"},next:{title:"puppeteer.puppeteer.registercustomqueryhandler",permalink:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.registercustomqueryhandler"}},u=[{value:"Puppeteer.networkConditions property",id:"puppeteernetworkconditions-property",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(p.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.puppeteer"},"Puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.puppeteer.networkconditions"},"networkConditions")),Object(o.b)("h2",{id:"puppeteernetworkconditions-property"},"Puppeteer.networkConditions property"),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"get networkConditions(): PredefinedNetworkConditions;\n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"Returns a list of network conditions to be used with ",Object(o.b)("inlineCode",{parentName:"p"},"page.emulateNetworkConditions(networkConditions)"),". Actual list of predefined conditions can be found in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/NetworkConditions.ts"},"src/common/NetworkConditions.ts"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\nconst slow3G = puppeteer.networkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n\n")))}l.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=p.a.createContext({}),s=function(e){var t=p.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},b=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return r?p.a.createElement(m,a(a({ref:t},u),{},{components:r})):p.a.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return p.a.createElement.apply(null,i)}return p.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);