(window.webpackJsonp=window.webpackJsonp||[]).push([[1151],{1222:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),p=(a(0),a(2839)),l=["components"],b={},c={unversionedId:"puppeteer.frame",id:"version-6.0.0/puppeteer.frame",isDocsHomePage:!1,title:"puppeteer.frame",description:"Home &gt; puppeteer &gt; Frame",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.frame.md",slug:"/puppeteer.frame",permalink:"/puppeteer/docs/6.0.0/puppeteer.frame",version:"6.0.0"},o=[{value:"Frame class",id:"frame-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Methods",id:"methods",children:[]}],m={toc:o};function d(e){var t=e.components,a=Object(n.a)(e,l);return Object(p.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.frame"},"Frame")),Object(p.b)("h2",{id:"frame-class"},"Frame class"),Object(p.b)("p",null,"At every point of time, page exposes its current frame tree via the ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.page.mainframe"},"page.mainFrame")," and ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.frame.childframes"},"frame.childFrames")," methods."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Frame\n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Frame")," object lifecycles are controlled by three events that are all dispatched on the page object:"),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"Frame")," class."),Object(p.b)("h2",{id:"example-1"},"Example 1"),Object(p.b)("p",null,"An example of dumping frame tree:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com/chrome/browser/canary.html');\n  dumpFrameTree(page.mainFrame(), '');\n  await browser.close();\n\n  function dumpFrameTree(frame, indent) {\n    console.log(indent + frame.url());\n    for (const child of frame.childFrames()) {\n    dumpFrameTree(child, indent + '  ');\n    }\n  }\n})();\n\n")),Object(p.b)("h2",{id:"example-2"},"Example 2"),Object(p.b)("p",null,"An example of getting text from an iframe element:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const frame = page.frames().find(frame => frame.name() === 'myframe');\nconst text = await frame.$eval('.selector', element => element.textContent);\nconsole.log(text);\n\n")),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame._"},"$(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method queries the frame for the given selector.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.__"},"$$(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This runs ",Object(p.b)("code",null,"document.querySelectorAll")," in the frame and returns the result.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.__eval"},"$$eval(selector, pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame._eval"},"$eval(selector, pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame._x"},"$x(expression)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method evaluates the given XPath expression and returns the results.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.addscripttag"},"addScriptTag(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Adds a ",Object(p.b)("code",null,"<","script",">")," tag into the page with the desired url or content.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.addstyletag"},"addStyleTag(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Adds a ",Object(p.b)("code",null,"<","link rel=",'"',"stylesheet",'"',">")," tag into the page with the desired url or a ",Object(p.b)("code",null,"<","style type=",'"',"text/css",'"',">")," tag with the content.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.childframes"},"childFrames()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.click"},"click(selector, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method clicks the first element found that matches ",Object(p.b)("code",null,"selector"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.content"},"content()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.evaluate"},"evaluate(pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.evaluatehandle"},"evaluateHandle(pageFunction, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.executioncontext"},"executionContext()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.focus"},"focus(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method fetches an element with ",Object(p.b)("code",null,"selector")," and focuses it.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.goto"},"goto(url, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.hover"},"hover(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method fetches an element with ",Object(p.b)("code",null,"selector"),", scrolls it into view if needed, and then uses ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.isdetached"},"isDetached()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.name"},"name()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.parentframe"},"parentFrame()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.select"},"select(selector, values)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Triggers a ",Object(p.b)("code",null,"change")," and ",Object(p.b)("code",null,"input")," event once all the provided options have been selected.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.setcontent"},"setContent(html, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Set the content of the frame.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.tap"},"tap(selector)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"This method fetches an element with ",Object(p.b)("code",null,"selector"),", scrolls it into view if needed, and then uses ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.page.touchscreen"},"Page.touchscreen")," to tap in the center of the element.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.title"},"title()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.type"},"type(selector, text, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Sends a ",Object(p.b)("code",null,"keydown"),", ",Object(p.b)("code",null,"keypress"),"/",Object(p.b)("code",null,"input"),", and ",Object(p.b)("code",null,"keyup")," event for each character in the text.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.url"},"url()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.waitfor"},"waitFor(selectorOrFunctionOrTimeout, options, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.waitforfunction"},"waitForFunction(pageFunction, options, args)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.waitfornavigation"},"waitForNavigation(options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.waitforselector"},"waitForSelector(selector, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.waitfortimeout"},"waitForTimeout(milliseconds)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Causes your script to wait for the given number of milliseconds.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.frame.waitforxpath"},"waitForXPath(xpath, options)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},2839:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),m=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=m(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},i=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=m(a),i=r,s=d["".concat(l,".").concat(i)]||d[i]||u[i]||p;return a?n.a.createElement(s,b(b({ref:t},o),{},{components:a})):n.a.createElement(s,b({ref:t},o))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=i;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<p;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"}}]);