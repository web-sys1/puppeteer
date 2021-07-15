(window.webpackJsonp=window.webpackJsonp||[]).push([[1398],{1469:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),p=n(7),a=(n(0),n(2839)),o=["components"],l={},c={unversionedId:"puppeteer.elementhandle.press",id:"version-5.4.0/puppeteer.elementhandle.press",isDocsHomePage:!1,title:"puppeteer.elementhandle.press",description:"Home &gt; puppeteer &gt; ElementHandle &gt; press",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.elementhandle.press.md",slug:"/puppeteer.elementhandle.press",permalink:"/puppeteer/docs/puppeteer.elementhandle.press",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.elementhandle.isintersectingviewport",permalink:"/puppeteer/docs/puppeteer.elementhandle.isintersectingviewport"},next:{title:"puppeteer.elementhandle.screenshot",permalink:"/puppeteer/docs/puppeteer.elementhandle.screenshot"}},i=[{value:"ElementHandle.press() method",id:"elementhandlepress-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],s={toc:i};function b(e){var t=e.components,n=Object(p.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle.press"},"press")),Object(a.b)("h2",{id:"elementhandlepress-method"},"ElementHandle.press() method"),Object(a.b)("p",null,"Focuses the element, and then uses ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.down"},"Keyboard.down()")," and ",Object(a.b)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.up"},"Keyboard.up()"),"."),Object(a.b)("b",null,"Signature:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"press(key: KeyInput, options?: PressOptions): Promise<void>;\n")),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Parameter"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"key"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.keyinput"},"KeyInput")),Object(a.b)("td",{parentName:"tr",align:null},"Name of key to press, such as ",Object(a.b)("code",null,"ArrowLeft"),". See ",Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"options"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.pressoptions"},"PressOptions")),Object(a.b)("td",{parentName:"tr",align:null})))),Object(a.b)("b",null,"Returns:"),Object(a.b)("p",null,"Promise","<","void",">"),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",Object(a.b)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",Object(a.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(a.b)("inlineCode",{parentName:"p"},"input")," event will also be generated. The ",Object(a.b)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),Object(a.b)("p",null,"*","*","NOTE","*","*"," Modifier keys DO affect ",Object(a.b)("inlineCode",{parentName:"p"},"elementHandle.press"),". Holding down ",Object(a.b)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}b.isMDXComponent=!0},2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),p=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=p.a.createContext({}),s=function(e){var t=p.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?p.a.createElement(m,l(l({ref:t},i),{},{components:n})):p.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);