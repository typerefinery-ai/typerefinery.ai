---
sidebar: auto
---

# Feature documentaion

## Internationalisation/Multilingual
the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization. Using the [vue-i18n](https://www.npmjs.com/package/vue-i18n)package, this feature is implemented


<!-- - Type: `string`
- Default: `/` -->

## PrimeVue
[PrimeVue](https://www.primefaces.org/primevue/#/setup) is a rich set of open source native components for Vue.
It is compatible with Vue3 and its working fine.

## Vuetify
[Vuetify3alpha](https://next.vuetifyjs.com/en/getting-started/installation/) is also UI framework for Vue and it is not supported with Vue3 .

## ICNS image format for mac
An icon format used by macOS programs is called an ICNS file.The program icon in the macOS browser and interface is displayed using ICNS files.In folder electron->assets .icns format should be there for mac build app.

## Vitest
[Vitest](https://vitest.dev/) is a blazing fast unit test framework powered by Vite.
Version for "vite": "^2.7.13", "vitest": "^0.4.1" and "vue": "^3.2.31".
If we use any inbuilt package like Primevue, i18n we need to import globally in test file

 

```bash
import { describe, it, expect } from "vitest"
import router from "@/router"
import i18n from "@/i18n"
import Tooltip from "primevue/tooltip"
import PrimeVue from "primevue/config"
import { config, mount } from "@vue/test-utils"
import ProjectContent from "../MenuBar.vue"
config.global.stubs = {
  ProjectContent,
}
describe("Content tabs tests", () => {
  it("renders properly", () => {
    const wrapper = mount(ProjectContent, {
      global: {
        plugins: [router, i18n, PrimeVue],
        directives: {Tooltip}
      },
      props:{menuBarVisible:true}
    })
    expect(wrapper.text()).toContain("hello")
    wrapper.get('#focus').trigger('click')
  })
})

```

