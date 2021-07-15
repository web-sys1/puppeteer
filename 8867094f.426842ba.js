(window.webpackJsonp=window.webpackJsonp||[]).push([[1474],{1545:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),p=r(7),o=(r(0),r(2839)),a=["components"],c={},i={unversionedId:"puppeteer.jshandle.getproperties",id:"version-10.0.0/puppeteer.jshandle.getproperties",isDocsHomePage:!1,title:"puppeteer.jshandle.getproperties",description:"Home &gt; puppeteer &gt; JSHandle &gt; getProperties",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.jshandle.getproperties.md",slug:"/puppeteer.jshandle.getproperties",permalink:"/puppeteer/docs/10.0.0/puppeteer.jshandle.getproperties",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.jshandle.executioncontext",permalink:"/puppeteer/docs/10.0.0/puppeteer.jshandle.executioncontext"},next:{title:"puppeteer.jshandle.getproperty",permalink:"/puppeteer/docs/10.0.0/puppeteer.jshandle.getproperty"}},l=[{value:"JSHandle.getProperties() method",id:"jshandlegetproperties-method",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(p.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.jshandle"},"JSHandle")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.jshandle.getproperties"},"getProperties")),Object(o.b)("h2",{id:"jshandlegetproperties-method"},"JSHandle.getProperties() method"),Object(o.b)("p",null,"The method returns a map with property names as keys and JSHandle instances for the property values."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"getProperties(): Promise<Map<string, JSHandle>>;\n")),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<","Map","<","string, ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.jshandle"},"JSHandle"),">",">"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const listHandle = await page.evaluateHandle(() => document.body.children);\nconst properties = await listHandle.getProperties();\nconst children = [];\nfor (const property of properties.values()) {\n  const element = property.asElement();\n  if (element)\n    children.push(element);\n}\nchildren; // holds elementHandles to all children of document.body\n\n")))}u.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),p=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=p.a.createContext({}),s=function(e){var t=p.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return p.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},b=p.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return r?p.a.createElement(m,c(c({ref:t},l),{},{components:r})):p.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return p.a.createElement.apply(null,a)}return p.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);