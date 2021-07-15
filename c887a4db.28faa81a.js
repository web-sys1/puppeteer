(window.webpackJsonp=window.webpackJsonp||[]).push([[2191],{2263:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),a=(t(0),t(2839)),p=["components"],c={},i={unversionedId:"puppeteer.browserfetcher.download",id:"version-10.0.0/puppeteer.browserfetcher.download",isDocsHomePage:!1,title:"puppeteer.browserfetcher.download",description:"Home &gt; puppeteer &gt; BrowserFetcher &gt; download",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.browserfetcher.download.md",slug:"/puppeteer.browserfetcher.download",permalink:"/puppeteer/docs/10.0.0/puppeteer.browserfetcher.download",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.browserfetcher.candownload",permalink:"/puppeteer/docs/10.0.0/puppeteer.browserfetcher.candownload"},next:{title:"puppeteer.browserfetcher.host",permalink:"/puppeteer/docs/10.0.0/puppeteer.browserfetcher.host"}},l=[{value:"BrowserFetcher.download() method",id:"browserfetcherdownload-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],b={toc:l};function d(e){var r=e.components,t=Object(o.a)(e,p);return Object(a.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.browserfetcher"},"BrowserFetcher")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.browserfetcher.download"},"download")),Object(a.b)("h2",{id:"browserfetcherdownload-method"},"BrowserFetcher.download() method"),Object(a.b)("p",null,"Initiates a GET request to download the revision from the host."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"download(revision: string, progressCallback?: (x: number, y: number) => void): Promise<BrowserFetcherRevisionInfo>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"revision"),Object(a.b)("td",{parentName:"tr",align:null},"string"),Object(a.b)("td",{parentName:"tr",align:null},"The revision to download.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"progressCallback"),Object(a.b)("td",{parentName:"tr",align:null},"(x: number, y: number) =",">"," void"),Object(a.b)("td",{parentName:"tr",align:null},"A function that will be called with two arguments: How many bytes have been downloaded and the total number of bytes of the download.")))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.browserfetcherrevisioninfo"},"BrowserFetcherRevisionInfo"),">"),Object(a.b)("p",null,"A promise with revision information when the revision is downloaded and extracted."),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"This method is affected by the current ",Object(a.b)("inlineCode",{parentName:"p"},"product"),"."))}d.isMDXComponent=!0},2839:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=b(t),s=n,m=d["".concat(p,".").concat(s)]||d[s]||u[s]||a;return t?o.a.createElement(m,c(c({ref:r},l),{},{components:t})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=s;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<a;l++)p[l]=t[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);