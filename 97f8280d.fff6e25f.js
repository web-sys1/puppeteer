(window.webpackJsonp=window.webpackJsonp||[]).push([[1670],{1741:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(7),p=(t(0),t(2839)),a=["components"],i={},s={unversionedId:"puppeteer.browsercontext.overridepermissions",id:"version-5.4.0/puppeteer.browsercontext.overridepermissions",isDocsHomePage:!1,title:"puppeteer.browsercontext.overridepermissions",description:"Home &gt; puppeteer &gt; BrowserContext &gt; overridePermissions",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.browsercontext.overridepermissions.md",slug:"/puppeteer.browsercontext.overridepermissions",permalink:"/puppeteer/docs/puppeteer.browsercontext.overridepermissions",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.browsercontext.browser",permalink:"/puppeteer/docs/puppeteer.browsercontext.browser"},next:{title:"puppeteer.browsercontext.close",permalink:"/puppeteer/docs/puppeteer.browsercontext.close"}},c=[{value:"BrowserContext.overridePermissions() method",id:"browsercontextoverridepermissions-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function b(e){var r=e.components,t=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browsercontext.overridepermissions"},"overridePermissions")),Object(p.b)("h2",{id:"browsercontextoverridepermissions-method"},"BrowserContext.overridePermissions() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"overridePermissions(origin: string, permissions: Permission[]): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"origin"),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},'The origin to grant permissions to, e.g. "',Object(p.b)("a",{parentName:"td",href:"https://example.com%22"},'https://example.com"'),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"permissions"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.permission"},"Permission"),"[","]"),Object(p.b)("td",{parentName:"tr",align:null},"An array of permissions to grant. All permissions that are not listed here will be automatically denied.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const context = browser.defaultBrowserContext();\nawait context.overridePermissions('https://html5demos.com', ['geolocation']);\n\n")))}b.isMDXComponent=!0},2839:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=l(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(t),m=n,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||p;return t?o.a.createElement(d,i(i({ref:r},c),{},{components:t})):o.a.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);