(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(2839)),p=["components"],c={},l={unversionedId:"puppeteer.coverage",id:"version-6.0.0/puppeteer.coverage",isDocsHomePage:!1,title:"puppeteer.coverage",description:"Home &gt; puppeteer &gt; Coverage",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.coverage.md",slug:"/puppeteer.coverage",permalink:"/puppeteer/docs/6.0.0/puppeteer.coverage",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.cdpsession.send",permalink:"/puppeteer/docs/6.0.0/puppeteer.cdpsession.send"},next:{title:"puppeteer.coverage.startcsscoverage",permalink:"/puppeteer/docs/6.0.0/puppeteer.coverage.startcsscoverage"}},s=[{value:"Coverage class",id:"coverage-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}],b={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,p);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/6.0.0/puppeteer.coverage"},"Coverage")),Object(o.b)("h2",{id:"coverage-class"},"Coverage class"),Object(o.b)("p",null,"The Coverage class provides methods to gathers information about parts of JavaScript and CSS that were used by the page."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Coverage \n")),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"To output coverage in a form consumable by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/istanbuljs"},"Istanbul"),", see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/istanbuljs/puppeteer-to-istanbul"},"puppeteer-to-istanbul"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"An example of using JavaScript and CSS coverage to get percentage of initially executed code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// Enable both JavaScript and CSS coverage\nawait Promise.all([\n  page.coverage.startJSCoverage(),\n  page.coverage.startCSSCoverage()\n]);\n// Navigate to page\nawait page.goto('https://example.com');\n// Disable both JavaScript and CSS coverage\nconst [jsCoverage, cssCoverage] = await Promise.all([\n  page.coverage.stopJSCoverage(),\n  page.coverage.stopCSSCoverage(),\n]);\nlet totalBytes = 0;\nlet usedBytes = 0;\nconst coverage = [...jsCoverage, ...cssCoverage];\nfor (const entry of coverage) {\n  totalBytes += entry.text.length;\n  for (const range of entry.ranges)\n    usedBytes += range.end - range.start - 1;\n}\nconsole.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);\n\n")),Object(o.b)("h2",{id:"constructors"},"Constructors"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Constructor"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.coverage._constructor_"},"(constructor)(client)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",Object(o.b)("code",null,"Coverage")," class")))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Method"),Object(o.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.coverage.startcsscoverage"},"startCSSCoverage(options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.coverage.startjscoverage"},"startJSCoverage(options)")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.coverage.stopcsscoverage"},"stopCSSCoverage()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/6.0.0/puppeteer.coverage.stopjscoverage"},"stopJSCoverage()")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||i[d]||o;return r?n.a.createElement(g,c(c({ref:t},s),{},{components:r})):n.a.createElement(g,c({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);