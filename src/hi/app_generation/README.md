---
sidebar: auto
---

## ऐप जनरेशन

इस ऐप को स्क्रैच से जेनरेट करने के लिए निम्नलिखित चलाएं:

### भाग 1 - स्वचालित

- विश्व स्तर पर Vue स्थापित करें - `npm install -g @vue/cli`
- व्यू ऐप बनाएं `vue create template-electron-vuex-vuetify`
  - कृपया एक प्रीसेट चुनें:
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

### भाग 2 - मैनुअल चरण

- Remove Jest, will be replaced by [Vitest](https://vitest.dev/)
  - remove test folder
  - remove dependencies

```sh
npm remove @types/jest jest ts-jest @vue/vue3-jest @vue/cli-plugin-unit-jest babel-jest @vue/cli-plugin-babel
```

- Vite config को कॉपी करने के लिए [Vite टेम्पलेट](https://vitejs.dev/guide/#trying-vite-online) बनाएं

  - खाली त्वरित-दृश्य ऐप बनाएं `npm create vite@latest my-vue-app -- --template vue`
  - फ़ोल्डरों में कॉपी करें `cypress` and `.vscode`
  - सभी विन्यास योग्य फाइलों को कॉपी करें

- इलेक्ट्रॉन, विटेस्ट और विटे जोड़ें
  - add configs `package.json`, `vite.config.ts`, `electron.js` and `electron/preload.js` follow this [Vite + Vue 3 + electron + TypeScript](https://dev.to/brojenuel/vite-vue-3-electron-5h4o)
  - add dependencies

```sh
npm install vitest vue-tsc jsdom start-server-and-test @types/jsdom @types/node @vue/tsconfig @rushstack/eslint-patch @vitejs/plugin-vue concurrently cross-env electron electron-builder wait-on @types/electron-devtools-installer vite --save-dev
```

## वीडियो और जीआईएफ बनाएं

यहां हमने वीडियो बनाने के लिए [फ्री कैम] (https://www.freescreenrecording.com/) का उपयोग किया है और उसके बाद हमने ऑनलाइन कनवर्टर का उपयोग किया है
[ezgif](https://ezgif.com/video-to-gif) वीडियो को GIF में बदलने के लिए।

<img width="800px" src="/freecam_window.png" />

यह फ्री कैम वीडियो रिकॉर्डर की मुख्य विंडो है, `New recording` पर क्लिक करने के बाद वीडियो रिकॉर्डिंग शुरू हो जाएगी।

<img width="800px" src="/ezgif_window.png" />

[ezgif](https://ezgif.com/video-to-gif) साइट से `Choose file` विकल्प में वीडियो का चयन करने की आवश्यकता है और GIF रूपांतरण के लिए `Upload video!`।
