(window.webpackJsonp=window.webpackJsonp||[]).push([[1111],{1182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2839)),o=["components"],c={},b={unversionedId:"puppeteer.browser",id:"version-6.0.0/puppeteer.browser",isDocsHomePage:!1,title:"puppeteer.browser",description:"Home &gt; puppeteer &gt; Browser",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.browser.md",slug:"/puppeteer.browser",permalink:"/puppeteer/docs/6.0.0/puppeteer.browser",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.browserfetcher.revisioninfo",permalink:"/puppeteer/docs/6.0.0/puppeteer.browserfetcher.revisioninfo"},next:{title:"puppeteer.browser.browsercontexts",permalink:"/puppeteer/docs/6.0.0/puppeteer.browser.browsercontexts"}},s=[{value:"Browser class",id:"browser-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Methods",id:"methods",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browser"},"Browser")),Object(p.b)("h2",{id:"browser-class"},"Browser class"),Object(p.b)("p",null,"A Browser is created when Puppeteer connects to a Chromium instance, either through ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.puppeteernode.launch"},"PuppeteerNode.launch()")," or ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Browser extends EventEmitter \n")),Object(p.b)("b",null,"Extends:")," [EventEmitter](/puppeteer/docs/6.0.0/puppeteer.eventemitter)",Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"The Browser class extends from Puppeteer's ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.eventemitter"},"EventEmitter")," class and will emit various events which are documented in the ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browseremittedevents"},"BrowserEmittedEvents")," enum."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"Browser")," class."),Object(p.b)("h2",{id:"example-1"},"Example 1"),Object(p.b)("p",null,"An example of using a ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browser"},"Browser")," to create a ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page"},"Page"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n\n")),Object(p.b)("h2",{id:"example-2"},"Example 2"),Object(p.b)("p",null,"An example of disconnecting from and reconnecting to a ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.browser"},"Browser"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  // Store the endpoint to be able to reconnect to Chromium\n  const browserWSEndpoint = browser.wsEndpoint();\n  // Disconnect puppeteer from Chromium\n  browser.disconnect();\n\n  // Use the endpoint to reestablish a connection\n  const browser2 = await puppeteer.connect({browserWSEndpoint});\n  // Close Chromium\n  await browser2.close();\n})();\n\n")),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.browsercontexts"},"browserContexts()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Returns an array of all open browser contexts. In a newly created browser, this will return a single instance of ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browsercontext"},"BrowserContext"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.close"},"close()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Closes Chromium and all of its pages (if any were opened). The ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser"},"Browser")," object itself is considered to be disposed and cannot be used anymore.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.createincognitobrowsercontext"},"createIncognitoBrowserContext()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Creates a new incognito browser context. This won't share cookies/cache with other browser contexts.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.defaultbrowsercontext"},"defaultBrowserContext()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Returns the default browser context. The default browser context cannot be closed.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.disconnect"},"disconnect()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Disconnects Puppeteer from the browser, but leaves the Chromium process running. After calling ",Object(p.b)("code",null,"disconnect"),", the ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser"},"Browser")," object is considered disposed and cannot be used anymore.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.isconnected"},"isConnected()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Indicates that the browser is connected.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.newpage"},"newPage()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Promise which resolves to a new ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.page"},"Page")," object. The Page is created in a default browser context.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.pages"},"pages()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"An array of all open pages inside the Browser.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.process"},"process()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"The spawned browser process. Returns ",Object(p.b)("code",null,"null")," if the browser instance was created with ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.target"},"target()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"The target associated with the browser.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.targets"},"targets()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"All active targets inside the Browser. In case of multiple browser contexts, returns an array with all the targets in all browser contexts.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.useragent"},"userAgent()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"The browser's original user agent. Pages can override the browser user agent with ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.page.setuseragent"},"Page.setUserAgent()"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.version"},"version()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"A string representing the browser name and version.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.waitfortarget"},"waitForTarget(predicate, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Searches for a target in all browser contexts.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.browser.wsendpoint"},"wsEndpoint()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"The browser websocket endpoint which can be used as an argument to ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),".")))))}u.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||i[d]||p;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<p;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);