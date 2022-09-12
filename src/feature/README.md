---
sidebar: auto
---

# Feature documentaion

## Design

### Main Window

When you open InnovolveApp for the first time, the Start Screen will appear like this.

<img width="800px" src="/mainwindow.png" />

### Theme
Here are the options of different theme.

#### Light
Light mode looks like this if you switch it from top in `Toggle Theme` option.

<img width="800px" src="/light.gif" />

#### Dark
To get the dark theme, switch `Toggle Theme` from light to dark.

<img width="800px" src="/dark.gif" />

### Focus

Here, its shown how the focus button is working in this app.

<img width="800px" src="/focus.gif" />

### Splitpanes
[Splitpanes](https://www.npmjs.com/package/splitpanes) is a Vue.js reliable, simple and touch-ready panes splitter / resizer. A SplitPane displays two components, either side by side or one on top of the other. By dragging the divider that appears between 
the components, the user can specify how much of the split pane's total area goes to each component.

<img width="800px" src="/splitpanes.gif" />

### Minimise App
When click on `Close` button then the app will give a popup of `Are you sure want to quit?` and will have option of `Yes, Quit` and `No, Just Minimise`. So, if need to closeapp permanently then click on `Yes,Quit` option or need to run app in background then click on `No, Just Minimise` option.

<img width="800px" src="/minimiseapp.gif" />

This shows after minimise, app is running in background.

<img width="800px" src="/quitapp.gif" />

Here app is closed permanently.

## Tech Stack

### Internationalisation/Multilingual
the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization. Using the [vue-i18n](https://www.npmjs.com/package/vue-i18n)package, this feature is
implemented.

### PrimeVue
[PrimeVue](https://www.primefaces.org/primevue/#/setup) is a rich set of open source native components for Vue.
It is compatible with Vue3 and its working fine.

### Cypress
[Cypress](https://www.cypress.io/) is one of those popular tools which has established its place very quickly and is very popular for Web integration and End to End UI test automation.



### Sass
[Sass](https://sass-lang.com/documentation) stands for Syntactically Awesome Stylesheet. When Stylesheets are getting larger, more complex, and harder to maintain, where sass can help. Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

### TypeDB
[TypeDB](https://vaticle.com/typedb) is an open-source, distributed, strongly-typed database with a rich and logical type system.TypeDB empowers you to tackle complex problems, and TypeQL is its query language. TypeDB allows you to model your domain based on logical and object-oriented programming principles.

### FastAPI
[FastAPI](https://fastapi.tiangolo.com/) is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints. The key features are: Fast: Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic). One of the fastest Python frameworks available.

### Electron
[Electron](https://www.electronjs.org/)  is the most popular framework for desktop app development. Will it be a good fit for your project? Learn more about its features, architecture, and look at a sample project.