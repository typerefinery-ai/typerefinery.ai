const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Tpyerefinery Docs",
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
    docsDir: "",
    // search:false,
    editLinkText: "",
    // lastUpdated: false,
    lastUpdated: "Last Updated",
    algolia: {
      indexName: "Demo",
      apiKey: "3d5fe2d1d68adda7787ceb7fb21ad72a",

      appId: "3HSP2MEZNG",
      // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
    },
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      // {
      //   text: "Text",
      //   link: "/text/",
      // },
      {
        text: "Feature",
        link: "/feature/",
      },
      {
        text: "GitHub",
        link: "https://github.com/innovolve-ai",
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
