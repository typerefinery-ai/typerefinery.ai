---
sidebar: auto
---

# फ़ीचर दस्तावेज़ीकरण

## अंतर्राष्ट्रीयकरण/बहुभाषी
उत्पादों और सेवाओं की योजना बनाने और उन्हें लागू करने की प्रक्रिया ताकि वे आसानी से विशिष्ट स्थानीय भाषाओं और संस्कृतियों के अनुकूल हो सकें, एक प्रक्रिया जिसे स्थानीयकरण कहा जाता है। [vue-i18n](https://www.npmjs.com/package/vue-i18n)पैकेज का उपयोग करके, यह सुविधा लागू की गई है


<!-- - Type: `string`
- Default: `/` -->

## प्राइमव्यू
[PrimeVue](https://www.primefaces.org/primevue/#/setup) Vue के लिए ओपन सोर्स नेटिव घटकों का एक समृद्ध सेट है।
यह Vue3 और इसके ठीक काम करने के साथ संगत है।
## Vuetify
[Vuetify3alpha](https://next.vuetifyjs.com/en/getting-started/installation/) भी Vue के लिए UI फ्रेमवर्क है और यह Vue3 के साथ समर्थित नहीं है।

## मैक के लिए आईसीएनएस छवि प्रारूप
मैकोज़ प्रोग्राम द्वारा उपयोग किए जाने वाले आइकन प्रारूप को आईसीएनएस फ़ाइल कहा जाता है। मैकोज़ ब्राउज़र और इंटरफ़ेस में प्रोग्राम आइकन आईसीएनएस फाइलों का उपयोग करके प्रदर्शित होता है। मैक बिल्ड ऐप के लिए फ़ोल्डर इलेक्ट्रॉन-> संपत्ति .आईसीएनएस प्रारूप में होना चाहिए।
## विटेस्ट
[विटेस्ट](https://vitest.dev/) Vite द्वारा संचालित एक धमाकेदार तेज़ इकाई परीक्षण ढांचा है।
"vite" के लिए संस्करण: "^2.7.13", "vitest": "^0.4.1" और "vue": "^3.2.31"।
यदि हम प्राइमव्यू, i18n जैसे किसी इनबिल्ट पैकेज का उपयोग करते हैं, तो हमें परीक्षण फ़ाइल में विश्व स्तर पर आयात करने की आवश्यकता है

 

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

