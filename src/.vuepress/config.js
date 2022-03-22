const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "TypeRefinery Docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "src",
    // search:false,
    editLinkText: "",
    // lastUpdated: false,
    lastUpdated: "Last Updated",
    algolia: {
      indexName: "typerefinery.ai",
      apiKey: "5792a907c238f1c51eadbc3816abd9a1",
      appId: "2PR5B0W9C6",
      // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
    },
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Feature",
        link: "/feature/",
      },
      {
        text: "GitHub",
        link: "https://github.com/innovolve-ai/typerefinery.ai",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "setup-vue", "directory-vue"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
