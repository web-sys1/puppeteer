(window.webpackJsonp=window.webpackJsonp||[]).push([[920],{2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=i.a.createContext({}),l=function(e){var t=i.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,f=b["".concat(a,".").concat(d)]||b[d]||u[d]||c;return r?i.a.createElement(f,s(s({ref:t},o),{},{components:r})):i.a.createElement(f,s({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var o=2;o<c;o++)a[o]=r[o];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},991:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),c=(r(0),r(2839)),a=["components"],s={},p={unversionedId:"puppeteer.accessibility",id:"version-5.4.0/puppeteer.accessibility",isDocsHomePage:!1,title:"puppeteer.accessibility",description:"Home &gt; puppeteer &gt; Accessibility",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.accessibility.md",slug:"/puppeteer.accessibility",permalink:"/puppeteer/docs/puppeteer.accessibility",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.webworker.url",permalink:"/puppeteer/docs/puppeteer.webworker.url"},next:{title:"puppeteer.accessibility.snapshot",permalink:"/puppeteer/docs/puppeteer.accessibility.snapshot"}},o=[{value:"Accessibility class",id:"accessibility-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],l={toc:o};function b(e){var t=e.components,r=Object(i.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.accessibility"},"Accessibility")),Object(c.b)("h2",{id:"accessibility-class"},"Accessibility class"),Object(c.b)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",Object(c.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Screen_reader"},"screen readers")," or ",Object(c.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Switch_access"},"switches"),"."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Accessibility \n")),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),Object(c.b)("p",null,'Blink - Chrome\'s rendering engine - has a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives users access to the Blink Accessibility Tree.'),Object(c.b)("p",null,'Most of the accessibility tree gets filtered out when converting from Blink AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Puppeteer tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),Object(c.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(c.b)("inlineCode",{parentName:"p"},"Accessibility")," class."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Method"),Object(c.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.accessibility.snapshot"},"snapshot(options)")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.")))))}b.isMDXComponent=!0}}]);