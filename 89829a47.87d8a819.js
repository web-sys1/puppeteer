(window.webpackJsonp=window.webpackJsonp||[]).push([[1493],{1564:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),p=(r(0),r(2839)),l=["components"],b={},u={unversionedId:"puppeteer.httprequest",id:"version-5.4.0/puppeteer.httprequest",isDocsHomePage:!1,title:"puppeteer.httprequest",description:"Home &gt; puppeteer &gt; HTTPRequest",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.httprequest.md",slug:"/puppeteer.httprequest",permalink:"/puppeteer/docs/puppeteer.httprequest",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.elementhandle.uploadfile",permalink:"/puppeteer/docs/puppeteer.elementhandle.uploadfile"},next:{title:"puppeteer.httprequest.abort",permalink:"/puppeteer/docs/puppeteer.httprequest.abort"}},c=[{value:"HTTPRequest class",id:"httprequest-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:c};function i(e){var t=e.components,r=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.httprequest"},"HTTPRequest")),Object(p.b)("h2",{id:"httprequest-class"},"HTTPRequest class"),Object(p.b)("p",null,"Represents an HTTP request sent by a page."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class HTTPRequest \n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Whenever the page sends a request, such as for a network resource, the following events are emitted by Puppeteer's ",Object(p.b)("inlineCode",{parentName:"p"},"page"),":"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"request"),": emitted when the request is issued by the page. - ",Object(p.b)("inlineCode",{parentName:"li"},"requestfinished")," - emitted when the response body is downloaded and the request is complete.")),Object(p.b)("p",null,"If request fails at some point, then instead of ",Object(p.b)("inlineCode",{parentName:"p"},"requestfinished")," event the ",Object(p.b)("inlineCode",{parentName:"p"},"requestfailed")," event is emitted."),Object(p.b)("p",null,"All of these events provide an instance of ",Object(p.b)("inlineCode",{parentName:"p"},"HTTPRequest")," representing the request that occurred:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"page.on('request', request => ...)\n\n")),Object(p.b)("p",null,"NOTE: HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",Object(p.b)("inlineCode",{parentName:"p"},"requestfinished")," event."),Object(p.b)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the ",Object(p.b)("inlineCode",{parentName:"p"},"requestfinished")," event, and a new request is issued to a redirected url."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"HTTPRequest")," class."),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.abort"},"abort(errorCode)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Aborts a request.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.continue"},"continue(overrides)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Continues request with optional request overrides.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.failure"},"failure()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Access information about the request's failure.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.frame"},"frame()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.headers"},"headers()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.isnavigationrequest"},"isNavigationRequest()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.method"},"method()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.postdata"},"postData()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.redirectchain"},"redirectChain()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"A ",Object(p.b)("code",null,"redirectChain")," is a chain of requests initiated to fetch a resource.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.resourcetype"},"resourceType()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Contains the request's resource type as it was perceived by the rendering engine.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.respond"},"respond(response)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Fulfills a request with the given response.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.response"},"response()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.httprequest.url"},"url()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})))))}i.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},i=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),i=s(r),d=n,m=i["".concat(l,".").concat(d)]||i[d]||o[d]||p;return r?a.a.createElement(m,b(b({ref:t},c),{},{components:r})):a.a.createElement(m,b({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=d;var b={};for(var u in t)hasOwnProperty.call(t,u)&&(b[u]=t[u]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var c=2;c<p;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);