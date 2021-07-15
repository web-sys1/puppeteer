(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=n,m=d["".concat(l,".").concat(s)]||d[s]||b[s]||p;return r?a.a.createElement(m,o(o({ref:t},c),{},{components:r})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<p;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},697:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),p=(r(0),r(2839)),l=["components"],o={},i={unversionedId:"puppeteer.elementhandle.uploadfile",id:"version-6.0.0/puppeteer.elementhandle.uploadfile",isDocsHomePage:!1,title:"puppeteer.elementhandle.uploadfile",description:"Home &gt; puppeteer &gt; ElementHandle &gt; uploadFile",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.elementhandle.uploadfile.md",slug:"/puppeteer.elementhandle.uploadfile",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.uploadfile",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.elementhandle.type",permalink:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.type"},next:{title:"puppeteer.httprequest",permalink:"/puppeteer/docs/6.0.0/puppeteer.httprequest"}},c=[{value:"ElementHandle.uploadFile() method",id:"elementhandleuploadfile-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:c};function d(e){var t=e.components,r=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.elementhandle.uploadfile"},"uploadFile")),Object(p.b)("h2",{id:"elementhandleuploadfile-method"},"ElementHandle.uploadFile() method"),Object(p.b)("p",null,"This method expects ",Object(p.b)("inlineCode",{parentName:"p"},"elementHandle")," to point to an ",Object(p.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"uploadFile(...filePaths: string[]): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"filePaths"),Object(p.b)("td",{parentName:"tr",align:null},"string","[","]"),Object(p.b)("td",{parentName:"tr",align:null},"Sets the value of the file input to these paths. If some of the ",Object(p.b)("code",null,"filePaths")," are relative paths, then they are resolved relative to the ",Object(p.b)("a",{parentName:"td",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"))))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"))}d.isMDXComponent=!0}}]);