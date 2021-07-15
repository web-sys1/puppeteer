(window.webpackJsonp=window.webpackJsonp||[]).push([[1609],{1680:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),p=(a(0),a(2839)),l=["components"],c={},u={unversionedId:"puppeteer.page.evaluatehandle",id:"version-10.0.0/puppeteer.page.evaluatehandle",isDocsHomePage:!1,title:"puppeteer.page.evaluatehandle",description:"Home &gt; puppeteer &gt; Page &gt; evaluateHandle",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.page.evaluatehandle.md",slug:"/puppeteer.page.evaluatehandle",permalink:"/puppeteer/docs/10.0.0/puppeteer.page.evaluatehandle",version:"10.0.0"},o=[{value:"Page.evaluateHandle() method",id:"pageevaluatehandle-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],i={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,l);return Object(p.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.evaluatehandle"},"evaluateHandle")),Object(p.b)("h2",{id:"pageevaluatehandle-method"},"Page.evaluateHandle() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"evaluateHandle<HandlerType extends JSHandle = JSHandle>(pageFunction: EvaluateHandleFn, ...args: SerializableOrJSHandle[]): Promise<HandlerType>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"pageFunction"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.evaluatehandlefn"},"EvaluateHandleFn")),Object(p.b)("td",{parentName:"tr",align:null},"a function that is run within the page")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"args"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),Object(p.b)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","HandlerType",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"The only difference between ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.evaluate"},"page.evaluate")," and ",Object(p.b)("inlineCode",{parentName:"p"},"page.evaluateHandle")," is that ",Object(p.b)("inlineCode",{parentName:"p"},"evaluateHandle")," will return the value wrapped in an in-page object."),Object(p.b)("p",null,"If the function passed to ",Object(p.b)("inlineCode",{parentName:"p"},"page.evaluteHandle")," returns a Promise, the function will wait for the promise to resolve and return its value."),Object(p.b)("p",null,"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"),Object(p.b)("h2",{id:"example-1"},"Example 1"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"const aHandle = await page.evaluateHandle('document')\n\n")),Object(p.b)("h2",{id:"example-2"},"Example 2"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.jshandle"},"JSHandle")," instances can be passed as arguments to the ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"const aHandle = await page.evaluateHandle(() => document.body);\nconst resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);\nconsole.log(await resultHandle.jsonValue());\nawait resultHandle.dispose();\n\n")),Object(p.b)("p",null,"Most of the time this function returns a ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.jshandle"},"JSHandle"),", but if ",Object(p.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a reference to an element, you instead get an ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.elementhandle"},"ElementHandle")," back:"),Object(p.b)("h2",{id:"example-3"},"Example 3"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"const button = await page.evaluateHandle(() => document.querySelector('button'));\n// can call `click` because `button` is an `ElementHandle`\nawait button.click();\n\n")),Object(p.b)("p",null,"The TypeScript definitions assume that ",Object(p.b)("inlineCode",{parentName:"p"},"evaluateHandle")," returns a ",Object(p.b)("inlineCode",{parentName:"p"},"JSHandle"),", but if you know it's going to return an ",Object(p.b)("inlineCode",{parentName:"p"},"ElementHandle"),", pass it as the generic argument:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"const button = await page.evaluateHandle<ElementHandle>(...);\n\n")))}b.isMDXComponent=!0},2839:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),b=i(a),s=n,m=b["".concat(l,".").concat(s)]||b[s]||d[s]||p;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<p;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);