(window.webpackJsonp=window.webpackJsonp||[]).push([[1466],{1537:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),p=(n(0),n(2839)),l=["components"],o={},b={unversionedId:"puppeteer.launchoptions",id:"version-10.0.0/puppeteer.launchoptions",isDocsHomePage:!1,title:"puppeteer.launchoptions",description:"Home &gt; puppeteer &gt; LaunchOptions",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.launchoptions.md",slug:"/puppeteer.launchoptions",permalink:"/puppeteer/docs/10.0.0/puppeteer.launchoptions",version:"10.0.0"},c=[{value:"LaunchOptions interface",id:"launchoptions-interface",children:[]},{value:"Properties",id:"properties",children:[]}],i={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions"},"LaunchOptions")),Object(p.b)("h2",{id:"launchoptions-interface"},"LaunchOptions interface"),Object(p.b)("p",null,"Generic launch options that can be passed when launching any browser."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export interface LaunchOptions \n")),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Property"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.dumpio"},"dumpio?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," If true, pipes the browser process stdout and stderr to ",Object(p.b)("code",null,"process.stdout")," and ",Object(p.b)("code",null,"process.stderr"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.env"},"env?")),Object(p.b)("td",{parentName:"tr",align:null},"Record","<","string, string ","|"," undefined",">"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Specify environment variables that will be visible to the browser.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.executablepath"},"executablePath?")),Object(p.b)("td",{parentName:"tr",align:null},"string"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.extraprefsfirefox"},"extraPrefsFirefox?")),Object(p.b)("td",{parentName:"tr",align:null},"Record","<","string, unknown",">"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," ",Object(p.b)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference"},"Additional preferences")," that can be passed when launching with Firefox.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.handlesighup"},"handleSIGHUP?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Close the browser process on ",Object(p.b)("code",null,"SIGHUP"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.handlesigint"},"handleSIGINT?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Close the browser process on ",Object(p.b)("code",null,"Ctrl+C"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.handlesigterm"},"handleSIGTERM?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Close the browser process on ",Object(p.b)("code",null,"SIGTERM"),".")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.ignoredefaultargs"},"ignoreDefaultArgs?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean ","|"," string","[","]"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," If ",Object(p.b)("code",null,"true"),", do not use ",Object(p.b)("code",null,"puppeteer.defaultArgs()")," when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.pipe"},"pipe?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Connect to a browser over a pipe instead of a WebSocket.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.product"},"product?")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.product"},"Product")),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Which browser to launch.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.timeout"},"timeout?")),Object(p.b)("td",{parentName:"tr",align:null},"number"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Maximum time in milliseconds to wait for the browser to start. Pass ",Object(p.b)("code",null,"0")," to disable the timeout.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.launchoptions.waitforinitialpage"},"waitForInitialPage?")),Object(p.b)("td",{parentName:"tr",align:null},"boolean"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("i",null,"(Optional)")," Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. ",Object(p.b)("code",null,"--no-startup-window")," for Chrome).")))))}u.isMDXComponent=!0},2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,O=u["".concat(l,".").concat(d)]||u[d]||s[d]||p;return n?a.a.createElement(O,o(o({ref:t},c),{},{components:n})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);