---
sidebar: auto
---
# Local Development
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).


## Recommended Software Setup

- cypress
- typedb
- powershell
- windows terminal

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

NOTE: this does not work yet, feel free to contribute.

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Electron Dev

Run development server and electron UI.

```sh
npm run electron:dev
```

### Build Electron Dist

Compile installable Electron packages.

```sh
npm run app:build
```

### Add Githooks

```sh
npx simple-git-hooks
```
## Directory Structure
VuePress follows the principle of "Convention is better than configuration". The recommended structure is as follows:

<img width="400px" src="/directory.png" />

Here you will get the components available in source file.

<img width="500px" src="/directory_structure.gif" />

## Customize configuration

- See [Configuration Reference](https://cli.vuejs.org/config/).
- Mac category [LSApplicationCategoryType](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8)
- Update App Icons in `electron/assets` folder.
- Update App Details and build config in `package.json`.

## Pipelines

Following pipleines exist for compiling code as its commited

- Build Branche (build.yml) - Build and Test all branches and create releases.

## Releasing

When you want to create a new release, follow these steps:

1. Update the version in your project's package.json file (e.g. `2022.02.20`)
2. Commit and sign that change (`git commit -s -a -m "chore: release v2022.02.20"`)
3. Tag and sign your commit (`git tag -s -a v2022.02.20 -m "v2022.02.20"`). Make sure your tag name's format is `v{YYYY}.{MM}.{DD}`. Your workflow will use this tag to detect when to create a release
4. Push your changes to GitHub (git push && git push --tags)

## App Generation

To generate this app from sratch run the following:

### Part 1 - Automated

- Install Vue globally - `npm install -g @vue/cli`
- Create Vue App `vue create template-electron-vuex-vuetify`
  - Please pick a preset:
    - Manually select features
  - Features (All Yes)
  - Babel
    - TypeScript
    - Progressive Web App (PWA) Support
    - Router
    - Vuex
    - CSS Pre-processors
    - Linter / Formatter
    - Unit Testing
    - E2E Testing
  - Use class-style component syntax?
    - Yes
  - Use Babel alongside TypeScript?
    - Yes
  - Use history mode for router?
    - Yes
  - Pick a CSS pre-processor:
    - Sass/SCSS (with dart-sass)
  - Pick a linter / formatter config:
    - ESLint + Prettier
- Pick additional lint features: \* Lint on save
  - Pick a unit testing solution:
    - Jest
  - Pick an E2E testing solution:
    Cypress
  - Where do you prefer placing config:
    - In dedicated config files
- Add Vuetify UI framework `vue add vuetify`
  - use `Default`

### Part 2 - Manual steps

- Remove Jest, will be replaced by [Vitest](https://vitest.dev/)
  - remove test folder
  - remove dependencies

```sh
npm remove @types/jest jest ts-jest @vue/vue3-jest @vue/cli-plugin-unit-jest babel-jest @vue/cli-plugin-babel
```

- Create [Vite template](https://vitejs.dev/guide/#trying-vite-online) for copying Vite config

  - create blank vite-vue app `npm create vite@latest my-vue-app -- --template vue`
  - copy accross folders `cypress` and `.vscode`
  - copy acresss all the conig files

- Add Electron, Vitest and Vite
  - add configs `package.json`, `vite.config.ts`, `electron.js` and `electron/preload.js` follow this [Vite + Vue 3 + electron + TypeScript](https://dev.to/brojenuel/vite-vue-3-electron-5h4o)
  - add dependencies

```sh
npm install vitest vue-tsc jsdom start-server-and-test @types/jsdom @types/node @vue/tsconfig @rushstack/eslint-patch @vitejs/plugin-vue concurrently cross-env electron electron-builder wait-on @types/electron-devtools-installer vite --save-dev
```
## Create Videos and GIF

Here [Free Cam](https://www.freescreenrecording.com/) is used to create videos and after that a online converter
[ezgif](https://ezgif.com/video-to-gif) is used to convert videos to GIF.


<img width="800px" src="/freecamwindow.png" />

Its the main window of free cam video recorder , after clicking on `New recording` the video recording will get start.

<img width="800px" src="/ezgifwindow.png" />

Need to select video in  `Choose file` option from [ezgif] site and `Upload video!` for GIF conversion.






