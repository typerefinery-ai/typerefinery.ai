
module.exports = {
  locales: {
    /* This is where you place your general locale config */
    "/": {
      lang: "en-US",
      title: "TypeRefinery Docs",
      // description: "Innovolve App-Knowledge Graph",
    },
    "/hi/": {
      lang: "hi",
      title: "टाइप रिफाइनरी डॉक्स",
      // description: "ऐप-ज्ञान ग्राफ को शामिल करें",
    },
  },
  themeConfig: {
   
    locales: {
      "/": {
        label: "English",
        // algolia: {
        //   indexName: "typerefinery.ai",
        //   apiKey: "5792a907c238f1c51eadbc3816abd9a1",
        //   appId: "2PR5B0W9C6",
        //   // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
        // },
        algolia: {
          indexName: "typerefinery.ai",
          apiKey: "5792a907c238f1c51eadbc3816abd9a1",
          appId: "2PR5B0W9C6",
          algoliaOptions: {
            facetFilters: ["tags:v1"],
          },
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
            text: 'Learn More',
            ariaLabel: 'Learn More',
            items: [
              {
                text: 'API',
                items: [
                  {
                    text: 'CLI',
                    link: '/api/cli.md'
                  },
                  {
                    text: 'Node',
                    link: '/api/node.html'
                  }
                ]
              },
              {
                text: 'Contributing Guide',
                items: [
                  {
                    text: 'Local Development',
                    link: '/miscellaneous/local-development.html'
                  },
                  {
                    text: 'Design Concepts',
                    link: '/miscellaneous/design-concepts.html'
                  },
                  {
                    text: 'FAQ',
                    link: '/faq/'
                  },
                  {
                    text: 'Glossary',
                    link: '/miscellaneous/glossary.html'
                  }
                ]
              },
              {
                text: 'Resources',
                items: [
                  {
                    text: 'Migrate from 0.x',
                    link: '/miscellaneous/migration-guide.html'
                  },
                  {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                  }
                ]
              }
            ]
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
      "/hi/": {
        // selectText: '选择语言',
        label: "हिन्दी",
        // editLinkText: '在 GitHub 上编辑此页',
        // serviceWorker: {
        //   updatePopup: {
        //     message: "发现新内容可用.",
        //     buttonText: "刷新"
        //   }
        // },
        // algolia: {
        //   indexName: "typerefinery.ai",
        //   apiKey: "5792a907c238f1c51eadbc3816abd9a1",
        //   appId: "2PR5B0W9C6",
        //   // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
        // },
        algolia: {
          indexName: "typerefinery.ai",
          apiKey: "5792a907c238f1c51eadbc3816abd9a1",
          appId: "2PR5B0W9C6",
          algoliaOptions: {
            facetFilters: ["tags:v1"],
          },
        },
        nav: [
          {
            text: "मार्गदर्शक",
            link: "/hi/guide/",
          },
          {
            text: "विशेषता",
            link: "/hi/feature/",
          },
          {
            text: "GitHub",
            link: "https://github.com/innovolve-ai/typerefinery.ai",
          },
        ],
        sidebar: {
          "/hi/guide/": [
            {
              title: "मार्गदर्शक",
              collapsable: false,
              children: ["", "setup-vue", "directory-vue"],
            },
          ],
        },
      },
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
