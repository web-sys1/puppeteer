(window.webpackJsonp=window.webpackJsonp||[]).push([[1845],{1917:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),p=(a(0),a(2839)),l=["components"],c={},u={unversionedId:"puppeteer.frame.evaluatehandle",id:"version-6.0.0/puppeteer.frame.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.frame.evaluatehandle",description:"Home &gt; puppeteer &gt; Frame &gt; evaluateHandle",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.evaluatehandle.md",slug:"/puppeteer.frame.evaluatehandle",permalink:"/puppeteer/docs/6.0.0/puppeteer.frame.evaluatehandle",version:"6.0.0"},o=[{value:"Frame.evaluateHandle() method",id:"frameevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],i={toc:o};function b(e){var t=e.components,a=Object(n.a)(e,l);return Object(p.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.frame.evaluatehandle"},"evaluateHandle")),Object(p.b)("h2",{id:"frameevaluatehandle-method"},"Frame.evaluateHandle() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandlerType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<HandlerType>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),Object(p.b)("td",{parentName:"tr",align:null},"a function that is run within the frame")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"args"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(p.b)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","HandlerType",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"The only difference between ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.frame.evaluate"},"Frame.evaluate()")," and ",Object(p.b)("inlineCode",{parentName:"p"},"frame.evaluateHandle")," is that ",Object(p.b)("inlineCode",{parentName:"p"},"evaluateHandle")," will return the value wrapped in an in-page object."),Object(p.b)("p",null,"This method behaves identically to ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()")," except it's run within the context of the ",Object(p.b)("inlineCode",{parentName:"p"},"frame"),", rather than the entire page."))}b.isMDXComponent=!0},2839:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),i=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=i(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),b=i(a),m=r,s=b["".concat(l,".").concat(m)]||b[m]||d[m]||p;return a?n.a.createElement(s,c(c({ref:t},o),{},{components:a})):n.a.createElement(s,c({ref:t},o))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<p;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);