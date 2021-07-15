(window.webpackJsonp=window.webpackJsonp||[]).push([[2664],{2736:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),p=(n(0),n(2839)),o=["components"],c={},u={unversionedId:"puppeteer.executioncontext.queryobjects",id:"version-6.0.0/puppeteer.executioncontext.queryobjects",isDocsHomePage:!1,title:"puppeteer.executioncontext.queryobjects",description:"Home &gt; puppeteer &gt; ExecutionContext &gt; queryObjects",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.executioncontext.queryobjects.md",slug:"/puppeteer.executioncontext.queryobjects",permalink:"/puppeteer/docs/6.0.0/puppeteer.executioncontext.queryobjects",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.executioncontext.frame",permalink:"/puppeteer/docs/6.0.0/puppeteer.executioncontext.frame"},next:{title:"puppeteer.jshandle",permalink:"/puppeteer/docs/6.0.0/puppeteer.jshandle"}},i=[{value:"ExecutionContext.queryObjects() method",id:"executioncontextqueryobjects-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],l={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.executioncontext"},"ExecutionContext")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.executioncontext.queryobjects"},"queryObjects")),Object(p.b)("h2",{id:"executioncontextqueryobjects-method"},"ExecutionContext.queryObjects() method"),Object(p.b)("p",null,"This method iterates the JavaScript heap and finds all the objects with the given prototype."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"queryObjects(prototypeHandle: JSHandle): Promise<JSHandle>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"prototypeHandle"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.jshandle"},"JSHandle")),Object(p.b)("td",{parentName:"tr",align:null},"a handle to the object prototype")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.jshandle"},"JSHandle"),">"),Object(p.b)("p",null,"A handle to an array of objects with the given prototype."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"// Create a Map object\nawait page.evaluate(() => window.map = new Map());\n// Get a handle to the Map object prototype\nconst mapPrototype = await page.evaluateHandle(() => Map.prototype);\n// Query all map instances into an array\nconst mapInstances = await page.queryObjects(mapPrototype);\n// Count amount of map objects in heap\nconst count = await page.evaluate(maps => maps.length, mapInstances);\nawait mapInstances.dispose();\nawait mapPrototype.dispose();\n\n")))}b.isMDXComponent=!0},2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||p;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);