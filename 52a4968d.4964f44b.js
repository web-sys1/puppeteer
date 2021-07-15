(window.webpackJsonp=window.webpackJsonp||[]).push([[889],{2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=m(r),b=n,f=l["".concat(o,".").concat(b)]||l[b]||s[b]||p;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<p;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},960:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),p=(r(0),r(2839)),o=["components"],c={},i={unversionedId:"puppeteer.frame.name",id:"version-10.0.0/puppeteer.frame.name",isDocsHomePage:!1,title:"puppeteer.frame.name",description:"Home &gt; puppeteer &gt; Frame &gt; name",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.frame.name.md",slug:"/puppeteer.frame.name",permalink:"/puppeteer/docs/10.0.0/puppeteer.frame.name",version:"10.0.0"},u=[{value:"Frame.name() method",id:"framename-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],m={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.frame"},"Frame")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.frame.name"},"name")),Object(p.b)("h2",{id:"framename-method"},"Frame.name() method"),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"name(): string;\n")),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"string"),Object(p.b)("p",null,"the frame's ",Object(p.b)("inlineCode",{parentName:"p"},"name")," attribute as specified in the tag."),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"If the name is empty, it returns the ",Object(p.b)("inlineCode",{parentName:"p"},"id")," attribute instead."),Object(p.b)("p",null,"Note: This value is calculated once when the frame is created, and will not update if the attribute is changed later."))}l.isMDXComponent=!0}}]);