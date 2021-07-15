(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),p=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=p.a.createContext({}),u=function(e){var t=p.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},b=p.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||d[b]||a;return n?p.a.createElement(m,c(c({ref:t},i),{},{components:n})):p.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<a;i++)o[i]=n[i];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),p=n(7),a=(n(0),n(2839)),o=["components"],c={},s={unversionedId:"puppeteer.cdpsession.send",id:"puppeteer.cdpsession.send",isDocsHomePage:!1,title:"puppeteer.cdpsession.send",description:"Home &gt; puppeteer &gt; CDPSession &gt; send",source:"@site/docs\\puppeteer.cdpsession.send.md",slug:"/puppeteer.cdpsession.send",permalink:"/puppeteer/docs/next/puppeteer.cdpsession.send",version:"current",sidebar:"docs",previous:{title:"puppeteer.cdpsession.detach",permalink:"/puppeteer/docs/next/puppeteer.cdpsession.detach"},next:{title:"puppeteer.coverage",permalink:"/puppeteer/docs/next/puppeteer.coverage"}},i=[{value:"CDPSession.send() method",id:"cdpsessionsend-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:i};function l(e){var t=e.components,n=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.cdpsession"},"CDPSession")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.cdpsession.send"},"send")),Object(a.b)("h2",{id:"cdpsessionsend-method"},"CDPSession.send() method"),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"send<T extends keyof ProtocolMapping.Commands>(method: T, ...paramArgs: ProtocolMapping.Commands[T]['paramsType']): Promise<ProtocolMapping.Commands[T]['returnType']>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"method"),Object(a.b)("td",{parentName:"tr",align:null},"T"),Object(a.b)("td",{parentName:"tr",align:null})),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"paramArgs"),Object(a.b)("td",{parentName:"tr",align:null},"ProtocolMapping.Commands","[","T","]","[","'paramsType'","]"),Object(a.b)("td",{parentName:"tr",align:null})))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","ProtocolMapping.Commands","[","T","]","[","'returnType'","]",">"))}l.isMDXComponent=!0}}]);