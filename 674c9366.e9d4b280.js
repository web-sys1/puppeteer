(window.webpackJsonp=window.webpackJsonp||[]).push([[1124],{1195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),p=(r(0),r(2839)),o=["components"],c={},l={unversionedId:"puppeteer.browserfetcher",id:"puppeteer.browserfetcher",isDocsHomePage:!1,title:"puppeteer.browserfetcher",description:"Home &gt; puppeteer &gt; BrowserFetcher",source:"@site/docs\\puppeteer.browserfetcher.md",slug:"/puppeteer.browserfetcher",permalink:"/puppeteer/docs/next/puppeteer.browserfetcher",version:"current",sidebar:"docs",previous:{title:"puppeteer.puppeteer.unregistercustomqueryhandler",permalink:"/puppeteer/docs/next/puppeteer.puppeteer.unregistercustomqueryhandler"},next:{title:"puppeteer.browserfetcher.candownload",permalink:"/puppeteer/docs/next/puppeteer.browserfetcher.candownload"}},b=[{value:"BrowserFetcher class",id:"browserfetcher-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],i={toc:b};function s(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browserfetcher"},"BrowserFetcher")),Object(p.b)("h2",{id:"browserfetcher-class"},"BrowserFetcher class"),Object(p.b)("p",null,"BrowserFetcher can download and manage different versions of Chromium and Firefox."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class BrowserFetcher \n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"BrowserFetcher operates on revision strings that specify a precise version of Chromium, e.g. ",Object(p.b)("inlineCode",{parentName:"p"},'"533271"'),". Revision strings can be obtained from ",Object(p.b)("a",{parentName:"p",href:"http://omahaproxy.appspot.com/"},"omahaproxy.appspot.com"),". In the Firefox case, BrowserFetcher downloads Firefox Nightly and operates on version numbers such as ",Object(p.b)("inlineCode",{parentName:"p"},'"75"'),"."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"BrowserFetcher")," class."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("p",null,"An example of using BrowserFetcher to download a specific version of Chromium and running Puppeteer against it:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const browserFetcher = puppeteer.createBrowserFetcher();\nconst revisionInfo = await browserFetcher.download('533271');\nconst browser = await puppeteer.launch({executablePath: revisionInfo.executablePath})\n\n")),Object(p.b)("p",null,"*","*","NOTE","*","*"," BrowserFetcher is not designed to work concurrently with other instances of BrowserFetcher that share the same downloads directory."),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.candownload"},"canDownload(revision)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Initiates a HEAD request to check if the revision is available.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.download"},"download(revision, progressCallback)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Initiates a GET request to download the revision from the host.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.host"},"host()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.localrevisions"},"localRevisions()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.platform"},"platform()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.product"},"product()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.remove"},"remove(revision)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browserfetcher.revisioninfo"},"revisionInfo(revision)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||p;return r?a.a.createElement(m,c(c({ref:t},b),{},{components:r})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<p;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);