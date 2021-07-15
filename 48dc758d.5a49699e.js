(window.webpackJsonp=window.webpackJsonp||[]).push([[797],{2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),i=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,s=d["".concat(a,".").concat(m)]||d[m]||b[m]||p;return n?o.a.createElement(s,l(l({ref:t},u),{},{components:n})):o.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<p;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},868:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),p=(n(0),n(2839)),a=["components"],l={},c={unversionedId:"puppeteer.elementhandle.boxmodel",id:"puppeteer.elementhandle.boxmodel",isDocsHomePage:!1,title:"puppeteer.elementhandle.boxmodel",description:"Home &gt; puppeteer &gt; ElementHandle &gt; boxModel",source:"@site/docs\\puppeteer.elementhandle.boxmodel.md",slug:"/puppeteer.elementhandle.boxmodel",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.boxmodel",version:"current",sidebar:"docs",previous:{title:"puppeteer.elementhandle.boundingbox",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.boundingbox"},next:{title:"puppeteer.elementhandle.click",permalink:"/puppeteer/docs/next/puppeteer.elementhandle.click"}},u=[{value:"ElementHandle.boxModel() method",id:"elementhandleboxmodel-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],i={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,a);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle.boxmodel"},"boxModel")),Object(p.b)("h2",{id:"elementhandleboxmodel-method"},"ElementHandle.boxModel() method"),Object(p.b)("p",null,"This method returns boxes of the element, or ",Object(p.b)("inlineCode",{parentName:"p"},"null")," if the element is not visible."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"boxModel(): Promise<BoxModel | null>;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.boxmodel"},"BoxModel")," ","|"," null",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Boxes are represented as an array of points; Each Point is an object ",Object(p.b)("inlineCode",{parentName:"p"},"{x, y}"),". Box points are sorted clock-wise."))}d.isMDXComponent=!0}}]);