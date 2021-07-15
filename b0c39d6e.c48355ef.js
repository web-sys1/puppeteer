(window.webpackJsonp=window.webpackJsonp||[]).push([[1932],{2004:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),p=(r(0),r(2839)),u=["components"],c={},l={unversionedId:"puppeteer.frame.evaluate",id:"puppeteer.frame.evaluate",isDocsHomePage:!1,title:"puppeteer.frame.evaluate",description:"Home &gt; puppeteer &gt; Frame &gt; evaluate",source:"@site/docs\\puppeteer.frame.evaluate.md",slug:"/puppeteer.frame.evaluate",permalink:"/puppeteer/docs/next/puppeteer.frame.evaluate",version:"current"},o=[{value:"Frame.evaluate() method",id:"frameevaluate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],i={toc:o};function b(e){var t=e.components,r=Object(n.a)(e,u);return Object(p.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame"},"Frame")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.evaluate"},"evaluate")),Object(p.b)("h2",{id:"frameevaluate-method"},"Frame.evaluate() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"evaluate<T extends EvaluateFn>(pageFunction: T, ...args: SerializableOrJSHandle[]): Promise<UnwrapPromiseLike<EvaluateFnReturnType<T>>>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(p.b)("td",{parentName:"tr",align:null},"T"),Object(p.b)("td",{parentName:"tr",align:null},"a function that is run within the frame")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"args"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(p.b)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.unwrappromiselike"},"UnwrapPromiseLike"),"<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.evaluatefnreturntype"},"EvaluateFnReturnType"),"<","T",">",">",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"This method behaves identically to ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.evaluate"},"Page.evaluate()")," except it's run within the context of the ",Object(p.b)("inlineCode",{parentName:"p"},"frame"),", rather than the entire page."))}b.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=i(r),s=a,d=b["".concat(u,".").concat(s)]||b[s]||m[s]||p;return r?n.a.createElement(d,c(c({ref:t},o),{},{components:r})):n.a.createElement(d,c({ref:t},o))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,u=new Array(p);u[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,u[1]=c;for(var o=2;o<p;o++)u[o]=r[o];return n.a.createElement.apply(null,u)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);