(window.webpackJsonp=window.webpackJsonp||[]).push([[2661],{2733:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(2839)),p=["components"],i={},c={unversionedId:"puppeteer.page.waitforfilechooser",id:"puppeteer.page.waitforfilechooser",isDocsHomePage:!1,title:"puppeteer.page.waitforfilechooser",description:"Home &gt; puppeteer &gt; Page &gt; waitForFileChooser",source:"@site/docs\\puppeteer.page.waitforfilechooser.md",slug:"/puppeteer.page.waitforfilechooser",permalink:"/puppeteer/docs/next/puppeteer.page.waitforfilechooser",version:"current"},l=[{value:"Page.waitForFileChooser() method",id:"pagewaitforfilechooser-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page.waitforfilechooser"},"waitForFileChooser")),Object(o.b)("h2",{id:"pagewaitforfilechooser-method"},"Page.waitForFileChooser() method"),Object(o.b)("p",null,"This method is typically coupled with an action that triggers file choosing. The following example clicks a button that issues a file chooser and then responds with ",Object(o.b)("inlineCode",{parentName:"p"},"/tmp/myfile.pdf")," as if a user has selected this file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const [fileChooser] = await Promise.all([\npage.waitForFileChooser(),\npage.click('#upload-file-button'),\n// some button that triggers file selection\n]);\nawait fileChooser.accept(['/tmp/myfile.pdf']);\n\n")),Object(o.b)("p",null,"NOTE: This must be called before the file chooser is launched. It will not return a currently active file chooser."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"waitForFileChooser(options?: WaitTimeoutOptions): Promise<FileChooser>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.waittimeoutoptions"},"WaitTimeoutOptions")),Object(o.b)("td",{parentName:"tr",align:null},"Optional waiting parameters")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.filechooser"},"FileChooser"),">"),Object(o.b)("p",null,"Resolves after a page requests a file picker."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("p",null,"NOTE: In non-headless Chromium, this method results in the native file picker dialog ",Object(o.b)("inlineCode",{parentName:"p"},"not showing up")," for the user."))}u.isMDXComponent=!0},2839:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(p,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);