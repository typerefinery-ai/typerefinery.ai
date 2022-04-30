(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{429:function(e,t,s){"use strict";s.r(t);var a=s(56),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"local-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[e._v("#")]),e._v(" Local Development")]),e._v(" "),s("h2",{attrs:{id:"recommended-ide-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommended-ide-setup"}},[e._v("#")]),e._v(" Recommended IDE Setup")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode"),s("OutboundLink")],1),e._v(" + "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar",target:"_blank",rel:"noopener noreferrer"}},[e._v("Volar"),s("OutboundLink")],1),e._v(" (and disable Vetur) + "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript Vue Plugin (Volar)"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"recommended-software-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommended-software-setup"}},[e._v("#")]),e._v(" Recommended Software Setup")]),e._v(" "),s("ul",[s("li",[e._v("cypress")]),e._v(" "),s("li",[e._v("typedb")]),e._v(" "),s("li",[e._v("powershell")]),e._v(" "),s("li",[e._v("windows terminal")])]),e._v(" "),s("h2",{attrs:{id:"type-support-for-vue-imports-in-ts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-support-for-vue-imports-in-ts"}},[e._v("#")]),e._v(" Type Support for "),s("code",[e._v(".vue")]),e._v(" Imports in TS")]),e._v(" "),s("p",[e._v("TypeScript cannot handle type information for "),s("code",[e._v(".vue")]),e._v(" imports by default, so we replace the "),s("code",[e._v("tsc")]),e._v(" CLI with "),s("code",[e._v("vue-tsc")]),e._v(" for type checking. In editors, we need "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript Vue Plugin (Volar)"),s("OutboundLink")],1),e._v(" to make the TypeScript language service aware of "),s("code",[e._v(".vue")]),e._v(" types.")]),e._v(" "),s("p",[e._v("If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a "),s("a",{attrs:{href:"https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669",target:"_blank",rel:"noopener noreferrer"}},[e._v("Take Over Mode"),s("OutboundLink")],1),e._v(" that is more performant. You can enable it by the following steps:")]),e._v(" "),s("ol",[s("li",[e._v("Disable the built-in TypeScript Extension\n"),s("ol",[s("li",[e._v("Run "),s("code",[e._v("Extensions: Show Built-in Extensions")]),e._v(" from VSCode's command palette")]),e._v(" "),s("li",[e._v("Find "),s("code",[e._v("TypeScript and JavaScript Language Features")]),e._v(", right click and select "),s("code",[e._v("Disable (Workspace)")])])])]),e._v(" "),s("li",[e._v("Reload the VSCode window by running "),s("code",[e._v("Developer: Reload Window")]),e._v(" from the command palette.")])]),e._v(" "),s("h2",{attrs:{id:"project-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-setup"}},[e._v("#")]),e._v(" Project Setup")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),s("h3",{attrs:{id:"compile-and-hot-reload-for-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-hot-reload-for-development"}},[e._v("#")]),e._v(" Compile and Hot-Reload for Development")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])]),s("h3",{attrs:{id:"type-check-compile-and-minify-for-production"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-check-compile-and-minify-for-production"}},[e._v("#")]),e._v(" Type-Check, Compile and Minify for Production")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),s("h3",{attrs:{id:"run-unit-tests-with-vitest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-unit-tests-with-vitest"}},[e._v("#")]),e._v(" Run Unit Tests with "),s("a",{attrs:{href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vitest"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("NOTE: this does not work yet, feel free to contribute.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run test:unit\n")])])]),s("h3",{attrs:{id:"run-end-to-end-tests-with-cypress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-end-to-end-tests-with-cypress"}},[e._v("#")]),e._v(" Run End-to-End Tests with "),s("a",{attrs:{href:"https://www.cypress.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cypress"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run test:e2e "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or `npm run test:e2e:ci` for headless testing")]),e._v("\n")])])]),s("h3",{attrs:{id:"lint-with-eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lint-with-eslint"}},[e._v("#")]),e._v(" Lint with "),s("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESLint"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run lint\n")])])]),s("h3",{attrs:{id:"electron-dev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#electron-dev"}},[e._v("#")]),e._v(" Electron Dev")]),e._v(" "),s("p",[e._v("Run development server and electron UI.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run electron:dev\n")])])]),s("h3",{attrs:{id:"build-electron-dist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-electron-dist"}},[e._v("#")]),e._v(" Build Electron Dist")]),e._v(" "),s("p",[e._v("Compile installable Electron packages.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run app:build\n")])])]),s("h3",{attrs:{id:"add-githooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-githooks"}},[e._v("#")]),e._v(" Add Githooks")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx simple-git-hooks\n")])])]),s("h2",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),s("p",[e._v('VuePress follows the principle of "Convention is better than configuration". The recommended structure is as follows:')]),e._v(" "),s("img",{attrs:{width:"400px",src:"/directory.png"}}),e._v(" "),s("p",[e._v("Here you will get the components available in source file.")]),e._v(" "),s("img",{attrs:{width:"500px",src:"/directory_structure.gif"}}),e._v(" "),s("h2",{attrs:{id:"customize-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customize-configuration"}},[e._v("#")]),e._v(" Customize configuration")]),e._v(" "),s("ul",[s("li",[e._v("See "),s("a",{attrs:{href:"https://cli.vuejs.org/config/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration Reference"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Mac category "),s("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8",target:"_blank",rel:"noopener noreferrer"}},[e._v("LSApplicationCategoryType"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Update App Icons in "),s("code",[e._v("electron/assets")]),e._v(" folder.")]),e._v(" "),s("li",[e._v("Update App Details and build config in "),s("code",[e._v("package.json")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"pipelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipelines"}},[e._v("#")]),e._v(" Pipelines")]),e._v(" "),s("p",[e._v("Following pipleines exist for compiling code as its commited")]),e._v(" "),s("ul",[s("li",[e._v("Build Branche (build.yml) - Build and Test all branches and create releases.")])]),e._v(" "),s("h2",{attrs:{id:"releasing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#releasing"}},[e._v("#")]),e._v(" Releasing")]),e._v(" "),s("p",[e._v("When you want to create a new release, follow these steps:")]),e._v(" "),s("ol",[s("li",[e._v("Update the version in your project's package.json file (e.g. "),s("code",[e._v("2022.02.20")]),e._v(")")]),e._v(" "),s("li",[e._v("Commit and sign that change ("),s("code",[e._v('git commit -s -a -m "chore: release v2022.02.20"')]),e._v(")")]),e._v(" "),s("li",[e._v("Tag and sign your commit ("),s("code",[e._v('git tag -s -a v2022.02.20 -m "v2022.02.20"')]),e._v("). Make sure your tag name's format is "),s("code",[e._v("v{YYYY}.{MM}.{DD}")]),e._v(". Your workflow will use this tag to detect when to create a release")]),e._v(" "),s("li",[e._v("Push your changes to GitHub (git push && git push --tags)")])]),e._v(" "),s("h2",{attrs:{id:"app-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-generation"}},[e._v("#")]),e._v(" App Generation")]),e._v(" "),s("p",[e._v("To generate this app from sratch run the following:")]),e._v(" "),s("h3",{attrs:{id:"part-1-automated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#part-1-automated"}},[e._v("#")]),e._v(" Part 1 - Automated")]),e._v(" "),s("ul",[s("li",[e._v("Install Vue globally - "),s("code",[e._v("npm install -g @vue/cli")])]),e._v(" "),s("li",[e._v("Create Vue App "),s("code",[e._v("vue create template-electron-vuex-vuetify")]),e._v(" "),s("ul",[s("li",[e._v("Please pick a preset:\n"),s("ul",[s("li",[e._v("Manually select features")])])]),e._v(" "),s("li",[e._v("Features (All Yes)")]),e._v(" "),s("li",[e._v("Babel\n"),s("ul",[s("li",[e._v("TypeScript")]),e._v(" "),s("li",[e._v("Progressive Web App (PWA) Support")]),e._v(" "),s("li",[e._v("Router")]),e._v(" "),s("li",[e._v("Vuex")]),e._v(" "),s("li",[e._v("CSS Pre-processors")]),e._v(" "),s("li",[e._v("Linter / Formatter")]),e._v(" "),s("li",[e._v("Unit Testing")]),e._v(" "),s("li",[e._v("E2E Testing")])])]),e._v(" "),s("li",[e._v("Use class-style component syntax?\n"),s("ul",[s("li",[e._v("Yes")])])]),e._v(" "),s("li",[e._v("Use Babel alongside TypeScript?\n"),s("ul",[s("li",[e._v("Yes")])])]),e._v(" "),s("li",[e._v("Use history mode for router?\n"),s("ul",[s("li",[e._v("Yes")])])]),e._v(" "),s("li",[e._v("Pick a CSS pre-processor:\n"),s("ul",[s("li",[e._v("Sass/SCSS (with dart-sass)")])])]),e._v(" "),s("li",[e._v("Pick a linter / formatter config:\n"),s("ul",[s("li",[e._v("ESLint + Prettier")])])])])]),e._v(" "),s("li",[e._v("Pick additional lint features: * Lint on save\n"),s("ul",[s("li",[e._v("Pick a unit testing solution:\n"),s("ul",[s("li",[e._v("Jest")])])]),e._v(" "),s("li",[e._v("Pick an E2E testing solution:\nCypress")]),e._v(" "),s("li",[e._v("Where do you prefer placing config:\n"),s("ul",[s("li",[e._v("In dedicated config files")])])])])]),e._v(" "),s("li",[e._v("Add Vuetify UI framework "),s("code",[e._v("vue add vuetify")]),e._v(" "),s("ul",[s("li",[e._v("use "),s("code",[e._v("Default")])])])])]),e._v(" "),s("h3",{attrs:{id:"part-2-manual-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#part-2-manual-steps"}},[e._v("#")]),e._v(" Part 2 - Manual steps")]),e._v(" "),s("ul",[s("li",[e._v("Remove Jest, will be replaced by "),s("a",{attrs:{href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vitest"),s("OutboundLink")],1),e._v(" "),s("ul",[s("li",[e._v("remove test folder")]),e._v(" "),s("li",[e._v("remove dependencies")])])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" remove @types/jest jest ts-jest @vue/vue3-jest @vue/cli-plugin-unit-jest babel-jest @vue/cli-plugin-babel\n")])])]),s("ul",[s("li",[s("p",[e._v("Create "),s("a",{attrs:{href:"https://vitejs.dev/guide/#trying-vite-online",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite template"),s("OutboundLink")],1),e._v(" for copying Vite config")]),e._v(" "),s("ul",[s("li",[e._v("create blank vite-vue app "),s("code",[e._v("npm create vite@latest my-vue-app -- --template vue")])]),e._v(" "),s("li",[e._v("copy accross folders "),s("code",[e._v("cypress")]),e._v(" and "),s("code",[e._v(".vscode")])]),e._v(" "),s("li",[e._v("copy acresss all the conig files")])])]),e._v(" "),s("li",[s("p",[e._v("Add Electron, Vitest and Vite")]),e._v(" "),s("ul",[s("li",[e._v("add configs "),s("code",[e._v("package.json")]),e._v(", "),s("code",[e._v("vite.config.ts")]),e._v(", "),s("code",[e._v("electron.js")]),e._v(" and "),s("code",[e._v("electron/preload.js")]),e._v(" follow this "),s("a",{attrs:{href:"https://dev.to/brojenuel/vite-vue-3-electron-5h4o",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite + Vue 3 + electron + TypeScript"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("add dependencies")])])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" vitest vue-tsc jsdom start-server-and-test @types/jsdom @types/node @vue/tsconfig @rushstack/eslint-patch @vitejs/plugin-vue concurrently cross-env electron electron-builder wait-on @types/electron-devtools-installer vite --save-dev\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);