
const {
  glob,
  globSync,
  globStream,
  globStreamSync,
  Glob,
} = require('glob')
const fs = require('fs')
const sidebar = [];

glob
  .sync('src/**/*.md')
  .map((path) => path.replace('src/', ''))
  .sort()
  .forEach((path) =>
    path.split('/').forEach((name, index, array) => {
      let children = sidebar

      for (let i = 0; i < index; i++) {
        children = (
          children.find(
            (child) => typeof child === 'object' && child.text === array[i]
          ) || { children: [] }
        ).children
      }

      if (name === 'index.md' || name === 'README.md') {
        children.push(
          `/${path
            .replace('.md', '')
            .replace('index', '')
            .replace('README', '')}`
        )
        return
      }

      if (name.endsWith('.md')) {
        children.push(`/${path.replace('.md', '')}`)
        return
      }

      const child = children.find(
        (child) => typeof child === 'object' && child.text === name
      ) || null

      if (!child) {
        children.push({ text: name, children: [], collapsible: true })
      }
    })
  )

console.log(JSON.stringify(sidebar));

module.exports = {
  head: [["link", { rel: "icon", href: "/logo.png" }]],
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
        lang: 'en-AU',
        title: 'TypeRefinery.ai',
        description: 'TypeRefinery.ai',
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
            text: "Design",
            link: "/design/",
          },
          {
            text: "Features",
            link: "/feature/",
          },
          {
            text: "Learn More",
            ariaLabel: "Learn More",
            items: [
              {
                text: "Contributing Guide",
                items: [
                  {
                    text: "Local Development",
                    link: "/localdevelopment/",
                  },
                  {
                    text: "App Generation",
                    link: "/app_generation/",
                  },
                  {
                    text: "Update Document",
                    link: "/update_document/",
                  },
                  {
                    text: "Tech Stack",
                    link: "/tech_stack/",
                  },
                  {
                    text: "FAQ",
                    link: "/faq/",
                  },
                  {
                    text: "Glossary",
                    link: "/glossary/",
                  },
                ],
              },
            ],
          },
          {
            text: "GitHub",
            link: "https://github.com/typerefinery-ai",
          },
        ],
        sidebar: {
          "/design/": [
            {
              title: "Design",
              collapsable: false,
              children: [
                "", 
                "clientlibs",
                "textparagraphmode"
              ],
            },
          ],
          "/guide/": [
            {
              title: "Guide",
              collapsable: false,
              children: [
                "",
                "typerefinery",
                "architecture",
                "setup",
              ],
            },
          ],
        },
      },
      "/hi/": {
        lang: 'en-AU',
        title: 'TypeRefinery.ai',
        description: 'TypeRefinery.ai',
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
            text: "डिजाइन",
            link: "/hi/design/",
          },
          {
            text: "विशेषताएँ",
            link: "/hi/feature/",
          },
          {
            text: "अधिक जानकारी",
            ariaLabel: "अधिक जानकारी",
            items: [
              {
                text: "योगदान गाइड",
                items: [
                  {
                    text: "स्थानीय विकास",
                    link: "/hi/localdevelopment/",
                  },
                  {
                    text: "ऐप जनरेशन",
                    link: "/app_generation/",
                  },
                  {
                    text: "दस्तावेज़ अपडेट करें",
                    link: "/hi/update_document/",
                  },
                  {
                    text: "टेक स्टैक",
                    link: "/tech_stack/",
                  },
                  {
                    text: "सामान्य प्रश्न",
                    link: "/hi/faq/",
                  },
                  {
                    text: "शब्दकोष",
                    link: "/hi/glossary/",
                  },
                ],
              },
            ],
          },
          {
            text: "GitHub",
            link: "https://github.com/innovolve-ai",
          },
        ],
        sidebar: {
          "/hi/guide/": [
            {
              title: "मार्गदर्शक",
              collapsable: false,
              children: ["", "setup"],
            },
          ],
        },
      },
    },
    docsDir: "src"
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
  ],
};
