(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{2839:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=i,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},954:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),r=(n(0),n(2839)),o=["components"],l={},s={unversionedId:"contributing",id:"version-10.0.0/contributing",isDocsHomePage:!1,title:"contributing",description:"- How to Contribute",source:"@site/versioned_docs\\version-10.0.0\\contributing.md",slug:"/contributing",permalink:"/puppeteer/docs/10.0.0/contributing",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.eventemitter.removealllisteners",permalink:"/puppeteer/docs/10.0.0/puppeteer.eventemitter.removealllisteners"}},c=[{value:"Contributor License Agreement",id:"contributor-license-agreement",children:[]},{value:"Getting Code",id:"getting-code",children:[]},{value:"Code reviews",id:"code-reviews",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"TypeScript guidelines",id:"typescript-guidelines",children:[]},{value:"Project structure and TypeScript compilation",id:"project-structure-and-typescript-compilation",children:[{value:"Shipping CJS and ESM bundles",id:"shipping-cjs-and-esm-bundles",children:[]},{value:"tsconfig for the tests",id:"tsconfig-for-the-tests",children:[]},{value:"Root <code>tsconfig.json</code>",id:"root-tsconfigjson",children:[]}]},{value:"API guidelines",id:"api-guidelines",children:[]},{value:"Commit Messages",id:"commit-messages",children:[]},{value:"Writing Documentation",id:"writing-documentation",children:[]},{value:"Adding New Dependencies",id:"adding-new-dependencies",children:[]},{value:"Running &amp; Writing Tests",id:"running--writing-tests",children:[]},{value:"Public API Coverage",id:"public-api-coverage",children:[]},{value:"Debugging Puppeteer",id:"debugging-puppeteer",children:[]},{value:"Rolling new Chromium version",id:"rolling-new-chromium-version",children:[{value:"Bisecting upstream changes",id:"bisecting-upstream-changes",children:[]}]},{value:"Releasing to npm",id:"releasing-to-npm",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#how-to-contribute"},"How to Contribute"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#contributor-license-agreement"},"Contributor License Agreement")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#getting-code"},"Getting Code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#code-reviews"},"Code reviews")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#code-style"},"Code Style")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#typescript-guidelines"},"TypeScript guidelines")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#project-structure-and-typescript-compilation"},"Project structure and TypeScript compilation"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#shipping-cjs-and-esm-bundles"},"Shipping CJS and ESM bundles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#tsconfig-for-the-tests"},"tsconfig for the tests")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#root-tsconfigjson"},"Root ",Object(r.b)("inlineCode",{parentName:"a"},"tsconfig.json"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#api-guidelines"},"API guidelines")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#commit-messages"},"Commit Messages")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#writing-documentation"},"Writing Documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#adding-new-dependencies"},"Adding New Dependencies")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#running--writing-tests"},"Running & Writing Tests")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#public-api-coverage"},"Public API Coverage")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#debugging-puppeteer"},"Debugging Puppeteer")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#for-project-maintainers"},"For Project Maintainers"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#rolling-new-chromium-version"},"Rolling new Chromium version"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#bisecting-upstream-changes"},"Bisecting upstream changes")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#releasing-to-npm"},"Releasing to npm"))))),Object(r.b)("h1",{id:"how-to-contribute"},"How to Contribute"),Object(r.b)("p",null,"First of all, thank you for your interest in Puppeteer!\nWe'd love to accept your patches and contributions!"),Object(r.b)("h2",{id:"contributor-license-agreement"},"Contributor License Agreement"),Object(r.b)("p",null,"Contributions to this project must be accompanied by a Contributor License\nAgreement. You (or your employer) retain the copyright to your contribution,\nthis simply gives us permission to use and redistribute your contributions as\npart of the project. Head over to ",Object(r.b)("a",{parentName:"p",href:"https://cla.developers.google.com/"},"https://cla.developers.google.com/")," to see\nyour current agreements on file or to sign a new one."),Object(r.b)("p",null,"You generally only need to submit a CLA once, so if you've already submitted one\n(even if it was for a different project), you probably don't need to do it\nagain."),Object(r.b)("h2",{id:"getting-code"},"Getting Code"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clone this repository")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/puppeteer/puppeteer\ncd puppeteer\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Install dependencies")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Run Puppeteer tests locally. For more information about tests, read ",Object(r.b)("a",{parentName:"li",href:"#running--writing-tests"},"Running & Writing Tests"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run unit\n")),Object(r.b)("h2",{id:"code-reviews"},"Code reviews"),Object(r.b)("p",null,"All submissions, including submissions by project members, require review. We\nuse GitHub pull requests for this purpose. Consult\n",Object(r.b)("a",{parentName:"p",href:"https://help.github.com/articles/about-pull-requests/"},"GitHub Help")," for more\ninformation on using pull requests."),Object(r.b)("h2",{id:"code-style"},"Code Style"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Coding style is fully defined in ",Object(r.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/main/.eslintrc.js"},Object(r.b)("inlineCode",{parentName:"a"},".eslintrc"))," and we automatically format our code with ",Object(r.b)("a",{parentName:"li",href:"https://prettier.io"},"Prettier"),"."),Object(r.b)("li",{parentName:"ul"},"It's recommended to set-up Prettier into your editor, or you can run ",Object(r.b)("inlineCode",{parentName:"li"},"npm run eslint-fix")," to automatically format any files."),Object(r.b)("li",{parentName:"ul"},"If you're working in a JS file, code should be annotated with ",Object(r.b)("a",{parentName:"li",href:"https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler"},"closure annotations"),"."),Object(r.b)("li",{parentName:"ul"},"If you're working in a TS file, you should explicitly type all variables and return types. You'll get ESLint warnings if you don't so if you're not sure use them as guidelines, and feel free to ask us for help!")),Object(r.b)("p",null,"To run ESLint, use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run eslint\n")),Object(r.b)("p",null,"You can check your code (both JS & TS) type-checks by running:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run tsc\n")),Object(r.b)("h2",{id:"typescript-guidelines"},"TypeScript guidelines"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Try to avoid the use of ",Object(r.b)("inlineCode",{parentName:"li"},"any")," when possible. Consider ",Object(r.b)("inlineCode",{parentName:"li"},"unknown")," as a better alternative. You are able to use ",Object(r.b)("inlineCode",{parentName:"li"},"any")," if needbe, but it will generate an ESLint warning.")),Object(r.b)("h2",{id:"project-structure-and-typescript-compilation"},"Project structure and TypeScript compilation"),Object(r.b)("p",null,"The code in Puppeteer is split primarily into two folders:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src")," contains all source code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vendor")," contains all dependencies that we've vendored into the codebase. See the (",Object(r.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/blob/main/vendor/README.md"},"https://github.com/puppeteer/puppeteer/blob/main/vendor/README.md"),") for details.")),Object(r.b)("p",null,"We structure these using TypeScript's project references, which lets us treat each folder like a standalone TypeScript project."),Object(r.b)("h3",{id:"shipping-cjs-and-esm-bundles"},"Shipping CJS and ESM bundles"),Object(r.b)("p",null,"Currently Puppeteer ships two bundles; a CommonJS version for Node and an ESM bundle for the browser. Therefore we maintain two ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig")," files for each project; ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.esm.json")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.cjs.json"),". At build time we compile twice, once outputting to CJS and another time to output to ESM."),Object(r.b)("p",null,"We compile into the ",Object(r.b)("inlineCode",{parentName:"p"},"lib")," directory which is what we publish on the npm repository and it's structured like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"lib\n- cjs\n  - puppeteer <== the output of compiling `src/tsconfig.cjs.json`\n  - vendor <== the output of compiling `vendor/tsconfig.cjs.json`\n- esm\n  - puppeteer <== the output of compiling `src/tsconfig.esm.json`\n  - vendor <== the output of compiling `vendor/tsconfig.esm.json`\n")),Object(r.b)("p",null,"The main entry point for the Node module Puppeteer is ",Object(r.b)("inlineCode",{parentName:"p"},"cjs-entry.js"),". This imports ",Object(r.b)("inlineCode",{parentName:"p"},"lib/cjs/puppeteer/index.js")," and exposes it to Node users."),Object(r.b)("h3",{id:"tsconfig-for-the-tests"},"tsconfig for the tests"),Object(r.b)("p",null,"We also maintain ",Object(r.b)("inlineCode",{parentName:"p"},"test/tsconfig.test.json"),". This is ",Object(r.b)("strong",{parentName:"p"},"only used to compile the unit test ",Object(r.b)("inlineCode",{parentName:"strong"},"*.spec.ts")," files"),". When the tests are run, we first compile Puppeteer as normal before running the unit tests ",Object(r.b)("strong",{parentName:"p"},"against the compiled output"),". Doing this lets the test run against the compiled code we ship to users so it gives us more confidence in our compiled output being correct."),Object(r.b)("h3",{id:"root-tsconfigjson"},"Root ",Object(r.b)("inlineCode",{parentName:"h3"},"tsconfig.json")),Object(r.b)("p",null,"The root ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," exists for the API Extractor; it has to find a ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," in the project's root directory. It is ",Object(r.b)("em",{parentName:"p"},"not")," used for anything else."),Object(r.b)("h2",{id:"api-guidelines"},"API guidelines"),Object(r.b)("p",null,"When authoring new API methods, consider the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Expose as little information as needed. When in doubt, don\u2019t expose new information."),Object(r.b)("li",{parentName:"ul"},"Methods are used in favor of getters/setters.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The only exception is namespaces, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"page.keyboard")," and ",Object(r.b)("inlineCode",{parentName:"li"},"page.coverage")))),Object(r.b)("li",{parentName:"ul"},"All string literals must be small case. This includes event names and option values."),Object(r.b)("li",{parentName:"ul"},'Avoid adding "sugar" API (API that is trivially implementable in user-space) unless they\'re ',Object(r.b)("strong",{parentName:"li"},"very")," demanded.")),Object(r.b)("h2",{id:"commit-messages"},"Commit Messages"),Object(r.b)("p",null,"Commit messages should follow ",Object(r.b)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},"the Conventional Commits format"),". This is enforced via ",Object(r.b)("inlineCode",{parentName:"p"},"npm run lint"),"."),Object(r.b)("p",null,"In particular, breaking changes should clearly be noted as \u201cBREAKING CHANGE:\u201d in the commit message footer. Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"fix(page): fix page.pizza method\n\nThis patch fixes page.pizza so that it works with iframes.\n\nIssues: #123, #234\n\nBREAKING CHANGE: page.pizza now delivers pizza at home by default.\nTo deliver to a different location, use the \"deliver\" option:\n  `page.pizza({deliver: 'work'})`.\n")),Object(r.b)("h2",{id:"writing-documentation"},"Writing Documentation"),Object(r.b)("p",null,"All public API should have a descriptive entry in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md"},Object(r.b)("inlineCode",{parentName:"a"},"docs/api.md")),". There's a ",Object(r.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/tree/main/utils/doclint"},"documentation linter")," which makes sure documentation is aligned with the codebase."),Object(r.b)("p",null,"To run the documentation linter, use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run doc\n")),Object(r.b)("p",null,"To format the documentation markdown and its code snippets, use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run markdownlint-fix\n")),Object(r.b)("h2",{id:"adding-new-dependencies"},"Adding New Dependencies"),Object(r.b)("p",null,"For all dependencies (both installation and development):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Do not add")," a dependency if the desired functionality is easily implementable."),Object(r.b)("li",{parentName:"ul"},"If adding a dependency, it should be well-maintained and trustworthy.")),Object(r.b)("p",null,"A barrier for introducing new installation dependencies is especially high:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Do not add")," installation dependency unless it's critical to project success.")),Object(r.b)("p",null,"There are additional considerations for dependencies that are environment agonistic. See the (",Object(r.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/vendor/README.md"},"https://github.com/puppeteer/puppeteer/blob/main/vendor/README.md"),") for details."),Object(r.b)("h2",{id:"running--writing-tests"},"Running & Writing Tests"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Every feature should be accompanied by a test."),Object(r.b)("li",{parentName:"ul"},"Every public api event/method should be accompanied by a test."),Object(r.b)("li",{parentName:"ul"},"Tests should not depend on external services."),Object(r.b)("li",{parentName:"ul"},"Tests should work on all three platforms: Mac, Linux and Win. This is especially important for screenshot tests.")),Object(r.b)("p",null,"Puppeteer tests are located in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/test/"},"the ",Object(r.b)("inlineCode",{parentName:"a"},"test")," directory")," and are written using Mocha. See (",Object(r.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/test/README.md"},"https://github.com/puppeteer/puppeteer/blob/main/test/README.md"),") for more details."),Object(r.b)("p",null,"Despite being named 'unit', these are integration tests, making sure public API methods and events work as expected."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To run all tests:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run unit\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To run a specific test, substitute the ",Object(r.b)("inlineCode",{parentName:"li"},"it")," with ",Object(r.b)("inlineCode",{parentName:"li"},"it.only"),":")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"  ...\n  it.only('should work', async function({server, page}) {\n    const response = await page.goto(server.EMPTY_PAGE);\n    expect(response.ok).toBe(true);\n  });\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To disable a specific test, substitute the ",Object(r.b)("inlineCode",{parentName:"li"},"it")," with ",Object(r.b)("inlineCode",{parentName:"li"},"xit")," (mnemonic rule: '",Object(r.b)("em",{parentName:"li"},"cross it"),"'):")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"  ...\n  // Using \"xit\" to skip specific test\n  xit('should work', async function({server, page}) {\n    const response = await page.goto(server.EMPTY_PAGE);\n    expect(response.ok).toBe(true);\n  });\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To run tests in non-headless mode:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"HEADLESS=false npm run unit\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To run Firefox tests, firstly ensure you have Firefox installed locally (you only need to do this once, not on every test run) and then you can run the tests:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"PUPPETEER_PRODUCT=firefox node install.js\nPUPPETEER_PRODUCT=firefox npm run unit\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To run tests with custom browser executable:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"BINARY=<path-to-executable> npm run unit\n")),Object(r.b)("h2",{id:"public-api-coverage"},"Public API Coverage"),Object(r.b)("p",null,"Every public API method or event should be called at least once in tests. To ensure this, there's a ",Object(r.b)("inlineCode",{parentName:"p"},"coverage")," command which tracks calls to public API and reports back if some methods/events were not called."),Object(r.b)("p",null,"Run coverage:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run coverage\n")),Object(r.b)("h2",{id:"debugging-puppeteer"},"Debugging Puppeteer"),Object(r.b)("h1",{id:"for-project-maintainers"},"For Project Maintainers"),Object(r.b)("h2",{id:"rolling-new-chromium-version"},"Rolling new Chromium version"),Object(r.b)("p",null,"The following steps are needed to update the Chromium version."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Find a suitable Chromium revision\nNot all revisions have builds for all platforms, so we need to find one that does.\nTo do so, run ",Object(r.b)("inlineCode",{parentName:"li"},"utils/check_availability.js -rd")," to find the latest suitable ",Object(r.b)("inlineCode",{parentName:"li"},"dev")," Chromium revision (see ",Object(r.b)("inlineCode",{parentName:"li"},"utils/check_availability.js -help")," for more options)."),Object(r.b)("li",{parentName:"ol"},"Update ",Object(r.b)("inlineCode",{parentName:"li"},"src/revisions.ts")," with the found revision number."),Object(r.b)("li",{parentName:"ol"},"Update ",Object(r.b)("inlineCode",{parentName:"li"},"versions.js")," with the new Chromium-to-Puppeteer version mapping."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm run ensure-correct-devtools-protocol-revision"),".\nIf it fails, update ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," with the expected ",Object(r.b)("inlineCode",{parentName:"li"},"devtools-protocol")," version."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm run tsc")," and ",Object(r.b)("inlineCode",{parentName:"li"},"npm install"),"."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm run unit")," and ensure that all tests pass. If a test fails, ",Object(r.b)("a",{parentName:"li",href:"#bisecting-upstream-changes"},"bisect")," the upstream cause of the failure, and either update the test expectations accordingly (if it was an intended change) or work around the changes in Puppeteer (if it\u2019s not desirable to change Puppeteer\u2019s observable behavior)."),Object(r.b)("li",{parentName:"ol"},"Commit and push your changes and open a pull request.\nThe commit message must contain the version in ",Object(r.b)("inlineCode",{parentName:"li"},"Chromium <version> (<revision>)")," format to ensure that ",Object(r.b)("a",{parentName:"li",href:"https://pptr.dev/"},"pptr.dev")," can parse it correctly, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"'feat(chromium): roll to Chromium 90.0.4427.0 (r856583)'"),".")),Object(r.b)("h3",{id:"bisecting-upstream-changes"},"Bisecting upstream changes"),Object(r.b)("p",null,"Sometimes, performing a Chromium roll causes tests to fail. To figure out the cause, you need to bisect Chromium revisions to figure out the earliest possible revision that changed the behavior. The script in ",Object(r.b)("inlineCode",{parentName:"p"},"utils/bisect.js")," can be helpful here. Given a Node.js script that calls ",Object(r.b)("inlineCode",{parentName:"p"},"process.exit(1)")," for bad revisions, run this from the Puppeteer repository\u2019s root directory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"node utils/bisect.js --good 686378 --bad 706915 script.js\n")),Object(r.b)("h2",{id:"releasing-to-npm"},"Releasing to npm"),Object(r.b)("p",null,"Releasing to npm consists of the following phases:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Source Code: mark a release.",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm run release"),". (This automatically bumps the version number in ",Object(r.b)("inlineCode",{parentName:"li"},"package.json"),", populates the changelog, updates the docs, and creates a Git commit for the next step.)"),Object(r.b)("li",{parentName:"ol"},"Send a PR for the commit created in the previous step."),Object(r.b)("li",{parentName:"ol"},"Make sure the PR passes ",Object(r.b)("strong",{parentName:"li"},"all checks"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"WHY"),": there are linters in place that help to avoid unnecessary errors, e.g. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/pull/2446"},"like this")))),Object(r.b)("li",{parentName:"ol"},"Merge the PR."),Object(r.b)("li",{parentName:"ol"},"Once merged, publish the release notes from ",Object(r.b)("inlineCode",{parentName:"li"},"CHANGELOG.md")," using ",Object(r.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/releases/new"},"GitHub\u2019s \u201cdraft new release tag\u201d option"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOTE"),": tag names are prefixed with ",Object(r.b)("inlineCode",{parentName:"li"},"'v'"),", e.g. for version ",Object(r.b)("inlineCode",{parentName:"li"},"1.4.0")," the tag is ",Object(r.b)("inlineCode",{parentName:"li"},"v1.4.0"),"."))),Object(r.b)("li",{parentName:"ol"},"As soon as the Git tag is created by completing the previous step, our CI automatically ",Object(r.b)("inlineCode",{parentName:"li"},"npm publish"),"es the new releases for both the ",Object(r.b)("inlineCode",{parentName:"li"},"puppeteer")," and ",Object(r.b)("inlineCode",{parentName:"li"},"puppeteer-core")," packages."))),Object(r.b)("li",{parentName:"ol"},"Source Code: mark post-release.",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Bump ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," version to the ",Object(r.b)("inlineCode",{parentName:"li"},"-post")," version, run ",Object(r.b)("inlineCode",{parentName:"li"},"npm run doc")," to update the \u201creleased APIs\u201d section at the top of ",Object(r.b)("inlineCode",{parentName:"li"},"docs/api.md")," accordingly, and send a PR titled ",Object(r.b)("inlineCode",{parentName:"li"},"'chore: bump version to vXXX.YYY.ZZZ-post'")," (",Object(r.b)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer/pull/6808"},"example"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOTE"),": no other commits should be landed in-between release commit and bump commit.")))))))}b.isMDXComponent=!0}}]);