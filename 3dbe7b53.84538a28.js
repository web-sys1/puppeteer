(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),i=l(r),d=n,s=i["".concat(c,".").concat(d)]||i[d]||m[d]||p;return r?a.a.createElement(s,o(o({ref:t},b),{},{components:r})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,c=new Array(p);c[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<p;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},734:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),p=(r(0),r(2839)),c=["components"],o={},u={unversionedId:"puppeteer.page.once",id:"version-6.0.0/puppeteer.page.once",isDocsHomePage:!1,title:"puppeteer.page.once",description:"Home &gt; puppeteer &gt; Page &gt; once",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.page.once.md",slug:"/puppeteer.page.once",permalink:"/puppeteer/docs/6.0.0/puppeteer.page.once",version:"6.0.0"},b=[{value:"Page.once() method",id:"pageonce-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:b};function i(e){var t=e.components,r=Object(a.a)(e,c);return Object(p.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page.once"},"once")),Object(p.b)("h2",{id:"pageonce-method"},"Page.once() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"once<K extends keyof PageEventObject>(eventName: K, handler: (event: PageEventObject[K]) => void): EventEmitter;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"eventName"),Object(p.b)("td",{parentName:"tr",align:null},"K"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"handler"),Object(p.b)("td",{parentName:"tr",align:null},"(event: ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.pageeventobject"},"PageEventObject"),"[","K","]",") =",">"," void"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.eventemitter"},"EventEmitter")))}i.isMDXComponent=!0}}]);