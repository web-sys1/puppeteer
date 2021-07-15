(window.webpackJsonp=window.webpackJsonp||[]).push([[1699],{1770:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2839)),o=["components"],i={},c={unversionedId:"puppeteer.viewport",id:"version-6.0.0/puppeteer.viewport",isDocsHomePage:!1,title:"puppeteer.viewport",description:"Home &gt; puppeteer &gt; Viewport",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.viewport.md",slug:"/puppeteer.viewport",permalink:"/puppeteer/docs/6.0.0/puppeteer.viewport",version:"6.0.0"},l=[{value:"Viewport interface",id:"viewport-interface",children:[]},{value:"Properties",id:"properties",children:[]}],b={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.viewport"},"Viewport")),Object(p.b)("h2",{id:"viewport-interface"},"Viewport interface"),Object(p.b)("p",null,"Sets the viewport of the page."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export interface Viewport \n")),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.viewport.devicescalefactor"},"deviceScaleFactor?")),Object(p.b)("td",{parentName:"tr",align:null},"number"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Specify device scale factor. See ",Object(p.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio"},"devicePixelRatio")," for more info.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.viewport.hastouch"},"hasTouch?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Specify if the viewport supports touch events.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.viewport.height"},"height")),Object(p.b)("td",{parentName:"tr",align:null},"number"),Object(p.b)("td",{parentName:"tr",align:null},"The page height in pixels.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.viewport.islandscape"},"isLandscape?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Specifies if the viewport is in landscape mode.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.viewport.ismobile"},"isMobile?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Whether the ",Object(p.b)("code",null,"meta viewport")," tag is taken into account.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.viewport.width"},"width")),Object(p.b)("td",{parentName:"tr",align:null},"number"),Object(p.b)("td",{parentName:"tr",align:null},"The page width in pixels.")))))}u.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,s=u["".concat(o,".").concat(m)]||u[m]||d[m]||p;return r?a.a.createElement(s,i(i({ref:t},l),{},{components:r})):a.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);