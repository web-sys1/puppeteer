(window.webpackJsonp=window.webpackJsonp||[]).push([[2438],{2509:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),p=r(7),a=(r(0),r(2839)),o=["components"],c={},i={unversionedId:"puppeteer.eventemitter.once",id:"version-10.0.0/puppeteer.eventemitter.once",isDocsHomePage:!1,title:"puppeteer.eventemitter.once",description:"Home &gt; puppeteer &gt; EventEmitter &gt; once",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.eventemitter.once.md",slug:"/puppeteer.eventemitter.once",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.once",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.eventemitter.on",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.on"},next:{title:"puppeteer.eventemitter.removelistener",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.removelistener"}},l=[{value:"EventEmitter.once() method",id:"eventemitteronce-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.once"},"once")),Object(a.b)("h2",{id:"eventemitteronce-method"},"EventEmitter.once() method"),Object(a.b)("p",null,"Like ",Object(a.b)("inlineCode",{parentName:"p"},"on")," but the listener will only be fired once and then it will be removed."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"once(event: EventType, handler: Handler): EventEmitter;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"event"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.eventtype"},"EventType")),Object(a.b)("td",{parentName:"tr",align:null},"the event you'd like to listen to")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"handler"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.handler"},"Handler")),Object(a.b)("td",{parentName:"tr",align:null},"the handler function to run when the event occurs")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.eventemitter"},"EventEmitter")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"this")," to enable you to chain method calls."))}b.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=p.a.createContext({}),u=function(e){var t=p.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return p.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,s=b["".concat(o,".").concat(d)]||b[d]||m[d]||a;return r?p.a.createElement(s,c(c({ref:t},l),{},{components:r})):p.a.createElement(s,c({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);