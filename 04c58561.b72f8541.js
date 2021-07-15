(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(2839)),l=["components"],o={},c={unversionedId:"puppeteer.elementhandle._eval",id:"version-6.0.0/puppeteer.elementhandle._eval",isDocsHomePage:!1,title:"puppeteer.elementhandle._eval",description:"Home &gt; puppeteer &gt; ElementHandle &gt; $eval",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.elementhandle._eval.md",slug:"/puppeteer.elementhandle._eval",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle._eval",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.elementhandle.__eval",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.__eval"},next:{title:"puppeteer.elementhandle._x",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle._x"}},i=[{value:"ElementHandle.$eval() method",id:"elementhandleeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.elementhandle._eval"},"$eval")),Object(p.b)("h2",{id:"elementhandleeval-method"},"ElementHandle.$eval() method"),Object(p.b)("p",null,"This method runs ",Object(p.b)("inlineCode",{parentName:"p"},"document.querySelector")," within the element and passes it as the first argument to ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction"),". If there's no element matching ",Object(p.b)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),Object(p.b)("p",null,"If ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",Object(p.b)("inlineCode",{parentName:"p"},"frame.$eval")," would wait for the promise to resolve and return its value."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"$eval<ReturnType>(selector: string, pageFunction: (element: Element, ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"selector"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(p.b)("td",{parentName:"tr",align:null},"(element: Element, ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"args"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const tweetHandle = await page.$('.tweet');\nexpect(await tweetHandle.$eval('.like', node => node.innerText)).toBe('100');\nexpect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe('10');\n\n")))}b.isMDXComponent=!0},2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,s=b["".concat(l,".").concat(d)]||b[d]||m[d]||p;return n?a.a.createElement(s,o(o({ref:t},i),{},{components:n})):a.a.createElement(s,o({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);