(window.webpackJsonp=window.webpackJsonp||[]).push([[2755],{2827:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(2839)),p=["components"],c={},b={unversionedId:"puppeteer.browsercontext",id:"puppeteer.browsercontext",isDocsHomePage:!1,title:"puppeteer.browsercontext",description:"Home &gt; puppeteer &gt; BrowserContext",source:"@site/docs\\puppeteer.browsercontext.md",slug:"/puppeteer.browsercontext",permalink:"/puppeteer/docs/next/puppeteer.browsercontext",version:"current",sidebar:"docs",previous:{title:"puppeteer.browser.wsendpoint",permalink:"/puppeteer/docs/next/puppeteer.browser.wsendpoint"},next:{title:"puppeteer.browsercontext.browser",permalink:"/puppeteer/docs/next/puppeteer.browsercontext.browser"}},s=[{value:"BrowserContext class",id:"browsercontext-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],l={toc:s};function i(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontext"},"BrowserContext")),Object(o.b)("h2",{id:"browsercontext-class"},"BrowserContext class"),Object(o.b)("p",null,"BrowserContexts provide a way to operate multiple independent browser sessions. When a browser is launched, it has a single BrowserContext used by default. The method ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser.newpage"},"Browser.newPage")," creates a page in the default browser context."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class BrowserContext extends EventEmitter \n")),Object(o.b)("b",null,"Extends:")," [EventEmitter](/puppeteer/docs/next/puppeteer.eventemitter)",Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"The Browser class extends from Puppeteer's ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.eventemitter"},"EventEmitter")," class and will emit various events which are documented in the ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontextemittedevents"},"BrowserContextEmittedEvents")," enum."),Object(o.b)("p",null,"If a page opens another page, e.g. with a ",Object(o.b)("inlineCode",{parentName:"p"},"window.open")," call, the popup will belong to the parent page's browser context."),Object(o.b)("p",null,'Puppeteer allows creation of "incognito" browser contexts with ',Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browser.createincognitobrowsercontext"},"Browser.createIncognitoBrowserContext"),' method. "Incognito" browser contexts don\'t write any browsing data to disk.'),Object(o.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(o.b)("inlineCode",{parentName:"p"},"BrowserContext")," class."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// Create a new incognito browser context\nconst context = await browser.createIncognitoBrowserContext();\n// Create a new page inside context.\nconst page = await context.newPage();\n// ... do stuff with page ...\nawait page.goto('https://example.com');\n// Dispose context once it's no longer needed.\nawait context.close();\n\n")),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.browser"},"browser()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"The browser this browser context belongs to.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.clearpermissionoverrides"},"clearPermissionOverrides()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Clears all permission overrides for the browser context.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.close"},"close()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Closes the browser context. All the targets that belong to the browser context will be closed.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.isincognito"},"isIncognito()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Returns whether BrowserContext is incognito. The default browser context is the only non-incognito browser context.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.newpage"},"newPage()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Creates a new page in the browser context.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.overridepermissions"},"overridePermissions(origin, permissions)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.pages"},"pages()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"An array of all pages inside the browser context.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.targets"},"targets()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"An array of all active targets inside the browser context.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.waitfortarget"},"waitForTarget(predicate, options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"This searches for a target in this specific browser context.")))))}i.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),i=l(r),d=n,m=i["".concat(p,".").concat(d)]||i[d]||u[d]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);