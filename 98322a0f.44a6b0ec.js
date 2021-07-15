(window.webpackJsonp=window.webpackJsonp||[]).push([[1673],{1744:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),p=(a(0),a(2839)),b=["components"],l={},c={unversionedId:"puppeteer.page",id:"version-5.4.0/puppeteer.page",isDocsHomePage:!1,title:"puppeteer.page",description:"Home &gt; puppeteer &gt; Page",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.page.md",slug:"/puppeteer.page",permalink:"/puppeteer/docs/puppeteer.page",version:"5.4.0"},d=[{value:"Page class",id:"page-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],o={toc:d};function u(e){var t=e.components,a=Object(n.a)(e,b);return Object(p.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page")),Object(p.b)("h2",{id:"page-class"},"Page class"),Object(p.b)("p",null,"Page provides methods to interact with a single tab or ",Object(p.b)("a",{parentName:"p",href:"https://developer.chrome.com/extensions/background_pages"},"extension background page")," in Chromium."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Page extends EventEmitter \n")),Object(p.b)("b",null,"Extends:")," [EventEmitter](/puppeteer/docs/puppeteer.eventemitter)",Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"One Browser instance might have multiple Page instances."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"Page")," class."),Object(p.b)("h2",{id:"example-1"},"Example 1"),Object(p.b)("p",null,"This example creates a page, navigates it to a URL, and then ","*"," saves a screenshot:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await page.screenshot({path: 'screenshot.png'});\n  await browser.close();\n})();\n\n")),Object(p.b)("p",null,"The Page class extends from Puppeteer's ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.eventemitter"},"EventEmitter")," class and will emit various events which are documented in the ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.pageemittedevents"},"PageEmittedEvents")," enum."),Object(p.b)("h2",{id:"example-2"},"Example 2"),Object(p.b)("p",null,"This example logs a message for a single page ",Object(p.b)("inlineCode",{parentName:"p"},"load")," event:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"page.once('load', () => console.log('Page loaded!'));\n\n")),Object(p.b)("p",null,"To unsubscribe from events use the ",Object(p.b)("inlineCode",{parentName:"p"},"off")," method:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"function logRequest(interceptedRequest) {\n  console.log('A request was made:', interceptedRequest.url());\n}\npage.on('request', logRequest);\n// Sometime later...\npage.off('request', logRequest);\n\n")),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.accessibility"},"accessibility")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.accessibility"},"Accessibility")),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.coverage"},"coverage")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.coverage"},"Coverage")),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.isdraginterceptionenabled"},"isDragInterceptionEnabled")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.keyboard"},"keyboard")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.keyboard"},"Keyboard")),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.mouse"},"mouse")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.mouse"},"Mouse")),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.touchscreen"},"touchscreen")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.touchscreen"},"Touchscreen")),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.tracing"},"tracing")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.tracing"},"Tracing")),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page._"},"$(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Runs ",Object(p.b)("code",null,"document.querySelector")," within the page. If no element matches the selector, the return value resolves to ",Object(p.b)("code",null,"null"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.__"},"$$(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"The method runs ",Object(p.b)("code",null,"document.querySelectorAll")," within the page. If no elements match the selector, the return value resolves to ",Object(p.b)("code",null,"[]"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.__eval"},"$$eval(selector, pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method runs ",Object(p.b)("code",null,"Array.from(document.querySelectorAll(selector))")," within the page and passes the result as the first argument to the ",Object(p.b)("code",null,"pageFunction"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page._eval"},"$eval(selector, pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method runs ",Object(p.b)("code",null,"document.querySelector")," within the page and passes the result as the first argument to the ",Object(p.b)("code",null,"pageFunction"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page._x"},"$x(expression)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"The method evaluates the XPath expression relative to the page document as its context node. If there are no such elements, the method resolves to an empty array.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.addscripttag"},"addScriptTag(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Adds a ",Object(p.b)("code",null,"<","script",">")," tag into the page with the desired URL or content.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.addstyletag"},"addStyleTag(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Adds a ",Object(p.b)("code",null,"<","link rel=",'"',"stylesheet",'"',">")," tag into the page with the desired URL or a ",Object(p.b)("code",null,"<","style type=",'"',"text/css",'"',">")," tag with the content.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.authenticate"},"authenticate(credentials)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Provide credentials for ",Object(p.b)("code",null,"HTTP authentication"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.bringtofront"},"bringToFront()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Brings page to front (activates tab).")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.browser"},"browser()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Get the browser the page belongs to.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.browsercontext"},"browserContext()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Get the browser context that the page belongs to.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.click"},"click(selector, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method fetches an element with ",Object(p.b)("code",null,"selector"),", scrolls it into view if needed, and then uses  to click in the center of the element. If there's no element matching ",Object(p.b)("code",null,"selector"),", the method throws an error.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.close"},"close(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.content"},"content()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.cookies"},"cookies(urls)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"If no URLs are specified, this method returns cookies for the current page URL. If URLs are specified, only cookies for those URLs are returned.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.deletecookie"},"deleteCookie(cookies)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.emulate"},"emulate(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Emulates given device metrics and user agent. This method is a shortcut for calling two methods:  and  To aid emulation, Puppeteer provides a list of device descriptors that can be obtained via the  ",Object(p.b)("code",null,"page.emulate")," will resize the page. A lot of websites don't expect phones to change size, so you should emulate before navigating to the page.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.emulateidlestate"},"emulateIdleState(overrides)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Emulates the idle state. If no arguments set, clears idle state emulation.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.emulatemediafeatures"},"emulateMediaFeatures(features)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.emulatemediatype"},"emulateMediaType(type)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.emulatenetworkconditions"},"emulateNetworkConditions(networkConditions)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.emulatetimezone"},"emulateTimezone(timezoneId)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.emulatevisiondeficiency"},"emulateVisionDeficiency(type)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Simulates the given vision deficiency on the page.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.evaluate"},"evaluate(pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.evaluatehandle"},"evaluateHandle(pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.evaluateonnewdocument"},"evaluateOnNewDocument(pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.exposefunction"},"exposeFunction(name, puppeteerFunction)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.focus"},"focus(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.frames"},"frames()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.goback"},"goBack(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.goforward"},"goForward(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.goto"},"goto(url, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.hover"},"hover(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.isclosed"},"isClosed()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.isjavascriptenabled"},"isJavaScriptEnabled()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.mainframe"},"mainFrame()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.metrics"},"metrics()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.on"},"on(eventName, handler)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Listen to page events.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.once"},"once(eventName, handler)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.pdf"},"pdf(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Generatees a PDF of the page with the ",Object(p.b)("code",null,"print")," CSS media type.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.queryobjects"},"queryObjects(prototypeHandle)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method iterates the JavaScript heap and finds all objects with the given prototype.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.reload"},"reload(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.screenshot"},"screenshot(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.select"},"select(selector, values)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setbypasscsp"},"setBypassCSP(enabled)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setcacheenabled"},"setCacheEnabled(enabled)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setcontent"},"setContent(html, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setcookie"},"setCookie(cookies)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setdefaultnavigationtimeout"},"setDefaultNavigationTimeout(timeout)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setdefaulttimeout"},"setDefaultTimeout(timeout)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setdraginterception"},"setDragInterception(enabled)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setextrahttpheaders"},"setExtraHTTPHeaders(headers)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setgeolocation"},"setGeolocation(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Sets the page's geolocation.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setjavascriptenabled"},"setJavaScriptEnabled(enabled)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setofflinemode"},"setOfflineMode(enabled)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setrequestinterception"},"setRequestInterception(value)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setuseragent"},"setUserAgent(userAgent)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.setviewport"},"setViewport(viewport)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.tap"},"tap(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.target"},"target()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.title"},"title()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.type"},"type(selector, text, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.url"},"url()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.viewport"},"viewport()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitfor"},"waitFor(selectorOrFunctionOrTimeout, options, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitforfilechooser"},"waitForFileChooser(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitforfunction"},"waitForFunction(pageFunction, options, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitfornavigation"},"waitForNavigation(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitforrequest"},"waitForRequest(urlOrPredicate, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitforresponse"},"waitForResponse(urlOrPredicate, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitforselector"},"waitForSelector(selector, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitfortimeout"},"waitForTimeout(milliseconds)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Causes your script to wait for the given number of milliseconds.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.waitforxpath"},"waitForXPath(xpath, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.page.workers"},"workers()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},2839:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),o=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,b=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=o(a),m=r,s=u["".concat(b,".").concat(m)]||u[m]||i[m]||p;return a?n.a.createElement(s,l(l({ref:t},d),{},{components:a})):n.a.createElement(s,l({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,b=new Array(p);b[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var d=2;d<p;d++)b[d]=a[d];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);