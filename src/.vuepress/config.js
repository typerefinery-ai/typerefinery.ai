
module.exports = {
  locales: {
    /* This is the place where general locale config */
    "/": {
      lang: "en-US",
      title: "TypeRefinery Docs",
    },
    "/hi/": {
      lang: "hi",
      title: "टाइप रिफाइनरी डॉक्स",
    },
  },
  themeConfig: {
   
    locales: {
      "/": {
        label: "English",
       
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
            text: "Features",
            link: "/feature/",
          },
          {
            text: 'Learn More',
            ariaLabel: 'Learn More',
            items: [
              {
                text: 'Contributing Guide',
                items: [
                  {
                    text: 'Local Development',
                    link: '/localdevelopment/'
                  },
                  {
                    text: 'Design Concepts',
                    link: '/design-concepts/'
                  },
                  {
                    text: 'FAQ',
                    link: '/faq/'
                  },
                  {
                    text: 'Glossary',
                    link: '/glossary/'
                  }
                ]
              },
            
            ]
          },
          {
            text: "GitHub",
            link: "https://github.com/innovolve-ai/typerefinery.git",
          },
        ],
        sidebar: {
          "/guide/": [
            {
              title: "Guide",
              collapsable: false,
              children: ["", "setup-vue" ,],
            },
          ],
        },
      },
      "/hi/": {
        
        label: "हिन्दी",
        
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
            text: "विशेषताएँ",
            link: "/hi/feature/",
          },
          {
            text: 'अधिक जानकारी',
            ariaLabel: 'अधिक जानकारी',
            items: [
              {
                text: 'योगदान गाइड',
                items: [
                  {
                    text: 'स्थानीय विकास',
                    link: "/hi/localdevelopment/"
                  },
                  {
                    text: 'डिजाइन अवधारणाएं',
                    link: '/hi/design-concepts/'
                  },
                  {
                    text: 'सामान्य प्रश्न',
                    link: '/hi/faq/'
                  },
                  {
                    text: 'शब्दकोष',
                    link: '/hi/glossary/'
                  }
                ]
              },
            
            ]
          },
          {
            text: "GitHub",
            link: "https://github.com/innovolve-ai/typerefinery.git",
          },
        ],
        sidebar: {
          "/hi/guide/": [
            {
              title: "मार्गदर्शक",
              collapsable: false,
              children: ["", "setup-vue",],
            },
          ],
        },
      },
    },
  },
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
