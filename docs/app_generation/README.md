---
sidebar: auto
---

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

<img width="800px" src="/freecam_window.png" />

Its the main window of free cam video recorder , after clicking on `New recording` the video recording will get start.

<img width="800px" src="/ezgif_window.png" />

Need to select video in `Choose file` option from [ezgif] site and `Upload video!` for GIF conversion.
