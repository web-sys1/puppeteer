(window.webpackJsonp=window.webpackJsonp||[]).push([[1875],{1947:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),p=r(7),a=(r(0),r(2839)),o=["components"],i={},c={unversionedId:"puppeteer.eventemitter.listenercount",id:"version-6.0.0/puppeteer.eventemitter.listenercount",isDocsHomePage:!1,title:"puppeteer.eventemitter.listenercount",description:"Home &gt; puppeteer &gt; EventEmitter &gt; listenerCount",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.eventemitter.listenercount.md",slug:"/puppeteer.eventemitter.listenercount",permalink:"/puppeteer/docs/6.0.0/puppeteer.eventemitter.listenercount",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.eventemitter.addlistener",permalink:"/puppeteer/docs/6.0.0/puppeteer.eventemitter.addlistener"},next:{title:"puppeteer.eventemitter.off",permalink:"/puppeteer/docs/6.0.0/puppeteer.eventemitter.off"}},u=[{value:"EventEmitter.listenerCount() method",id:"eventemitterlistenercount-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:u};function b(e){var t=e.components,r=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.eventemitter"},"EventEmitter")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.eventemitter.listenercount"},"listenerCount")),Object(a.b)("h2",{id:"eventemitterlistenercount-method"},"EventEmitter.listenerCount() method"),Object(a.b)("p",null,"Gets the number of listeners for a given event."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"listenerCount(event: EventType): number;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"event"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.eventtype"},"EventType")),Object(a.b)("td",{parentName:"tr",align:null},"the event to get the listener count for")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"number"),Object(a.b)("p",null,"the number of listeners bound to the given event"))}b.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),p=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=p.a.createContext({}),l=function(e){var t=p.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return p.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},m=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||a;return r?p.a.createElement(d,i(i({ref:t},u),{},{components:r})):p.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);