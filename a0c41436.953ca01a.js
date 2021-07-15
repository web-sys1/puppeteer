(window.webpackJsonp=window.webpackJsonp||[]).push([[1754],{1825:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),p=(r(0),r(2839)),o=["components"],b={},i={unversionedId:"puppeteer.keyboard.down",id:"version-6.0.0/puppeteer.keyboard.down",isDocsHomePage:!1,title:"puppeteer.keyboard.down",description:"Home &gt; puppeteer &gt; Keyboard &gt; down",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.keyboard.down.md",slug:"/puppeteer.keyboard.down",permalink:"/puppeteer/docs/6.0.0/puppeteer.keyboard.down",version:"6.0.0"},c=[{value:"Keyboard.down() method",id:"keyboarddown-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],d={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.keyboard"},"Keyboard")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.keyboard.down"},"down")),Object(p.b)("h2",{id:"keyboarddown-method"},"Keyboard.down() method"),Object(p.b)("p",null,"Dispatches a ",Object(p.b)("inlineCode",{parentName:"p"},"keydown")," event."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"down(key: KeyInput, options?: {\n        text?: string;\n    }): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"key"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.keyinput"},"KeyInput")),Object(p.b)("td",{parentName:"tr",align:null},"Name of key to press, such as ",Object(p.b)("code",null,"ArrowLeft"),". See ",Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ text?: string; }"),Object(p.b)("td",{parentName:"tr",align:null},"An object of options. Accepts text which, if specified, generates an input event with this text.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"If ",Object(p.b)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",Object(p.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(p.b)("inlineCode",{parentName:"p"},"input")," event will also generated. The ",Object(p.b)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated. If ",Object(p.b)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",Object(p.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(p.b)("inlineCode",{parentName:"p"},"Control"),", or ",Object(p.b)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.keyboard.up"},"Keyboard.up()"),"."),Object(p.b)("p",null,"After the key is pressed once, subsequent calls to ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.keyboard.down"},"Keyboard.down()")," will have ",Object(p.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"},"repeat")," set to true. To release the key, use ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.keyboard.up"},"Keyboard.up()"),"."),Object(p.b)("p",null,"Modifier keys DO influence ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.keyboard.down"},"Keyboard.down()"),". Holding down ",Object(p.b)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}l.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(r),s=n,m=l["".concat(o,".").concat(s)]||l[s]||u[s]||p;return r?a.a.createElement(m,b(b({ref:t},c),{},{components:r})):a.a.createElement(m,b({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<p;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);