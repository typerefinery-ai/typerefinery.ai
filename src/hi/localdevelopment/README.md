---
sidebar: auto
---
# स्थानीय विकास

## डिज़ाइन

## अनुशंसित आईडीई सेटअप

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).


## अनुशंसित सॉफ्टवेयर सेटअप

- cypress
- typedb
- powershell
- windows terminal

## TS में `.vue` आयात के लिए समर्थन टाइप करें

टाइपस्क्रिप्ट डिफ़ॉल्ट रूप से `.vue` आयात के लिए प्रकार की जानकारी को संभाल नहीं सकता है, इसलिए हम टाइप जाँच के लिए `tsc` CLI को `vue-tsc` से बदल देते हैं। संपादकों में, हमें टाइपस्क्रिप्ट भाषा सेवा को `.vue` से अवगत कराने के लिए [टाइपस्क्रिप्ट वू प्लगिन (वोलर)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) की आवश्यकता होती है। 

यदि स्टैंडअलोन टाइपस्क्रिप्ट प्लगइन आपको पर्याप्त तेज़ नहीं लगता है, तो Volar ने एक [टेक ओवर मोड] (https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) भी लागू किया है जो अधिक प्रदर्शनकारी है। आप इसे निम्न चरणों द्वारा सक्षम कर सकते हैं:

1. बिल्ट-इन टाइपस्क्रिप्ट एक्सटेंशन को अक्षम करें
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. कमांड पैलेट से `डेवलपर: रीलोड विंडो` चलाकर VSCode विंडो को फिर से लोड करें।


## परियोजना सेटअप

```sh
npm install
```

### विकास के लिए संकलन और हॉट-रीलोड

```sh
npm run dev
```

### उत्पादन के लिए टाइप-चेक, संकलन और छोटा करें

```sh
npm run build
```

### यूनिट टेस्ट के साथ [Vitest](https://vitest.dev/)

नोट: यह अभी तक काम नहीं करता है, योगदान करने के लिए स्वतंत्र महसूस करें।

```sh
npm run test:unit
```

### एंड-टू-एंड टेस्ट के साथ [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### लिंट के साथ [ESLint](https://eslint.org/)

```sh
npm run lint
```

### इलेक्ट्रॉन देव

विकास सर्वर और इलेक्ट्रॉन UI चलाएँ।

```sh
npm run electron:dev
```

### इलेक्ट्रॉन डिस्ट का निर्माण

इंस्टॉल करने योग्य इलेक्ट्रॉन पैकेज संकलित करें।

```sh
npm run app:build
```

### गिट हुक जोड़ें 

```sh
npx simple-git-hooks
```

## निर्देशिका संरचना
VuePress "कॉन्फ़िगरेशन से बेहतर है" के सिद्धांत का पालन करता है। अनुशंसित संरचना इस प्रकार है:

<img width="400px" src="/directory.png" />

यहां आपको सोर्स फाइल में उपलब्ध कंपोनेंट्स मिलेंगे।

<img width="500px" src="/directory_structure.gif" />

## अनुकूलित कॉन्फ़िगरेशन

- See [Configuration Reference](https://cli.vuejs.org/config/).
- Mac category [LSApplicationCategoryType](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8)
- Update App Icons in `electron/assets` folder.
- Update App Details and build config in `package.json`.

## पाइपलाइनों

कोड को संकलित करने के लिए निम्नलिखित पाइपलाइन मौजूद हैं:

- ब्रंच बनाएँ (build.yml) - सभी शाखाओं का निर्माण और परीक्षण करें और रिलीज़ बनाएँ।

## रिलीज

जब आप एक नई रिलीज़ बनाना चाहते हैं, तो इन चरणों का पालन करें:

1. अपने प्रोजेक्ट के संस्करण को अपडेट करें (package.json file) (e.g. `2022.02.20`)
2. प्रतिबद्ध करें और उस परिवर्तन पर हस्ताक्षर करें (`git commit -s -a -m "chore: release v2022.02.20"`)
3. टैग करें और अपनी प्रतिबद्धता पर हस्ताक्षर करें (`git tag -s -a v2022.02.20 -m "v2022.02.20"`). सुनिश्चित करें कि आपके टैग नाम का प्रारूप है `v{YYYY}.{MM}.{DD}`. आपका वर्कफ़्लो इस टैग का उपयोग यह पता लगाने के लिए करेगा कि रिलीज़ कब बनाई जाए
4. GitHub में अपने परिवर्तन पुश करें (git push && git push --tags)

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

<img width="800px" src="/freecamwindow.png" />

यह फ्री कैम वीडियो रिकॉर्डर की मुख्य विंडो है, `New recording` पर क्लिक करने के बाद वीडियो रिकॉर्डिंग शुरू हो जाएगी।

<img width="800px" src="/ezgifwindow.png" />

[ezgif](https://ezgif.com/video-to-gif) साइट से `Choose file` विकल्प में वीडियो का चयन करने की आवश्यकता है और GIF रूपांतरण के लिए `Upload video!`।
