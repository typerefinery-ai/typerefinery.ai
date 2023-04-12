
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
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { "http-equiv": "Content-Security-Policy", content: "default-src *; img-src * 'self' data: https:; script-src 'self' https://static.highlight.io; worker-src 'self' https://static.highlight.io blob:; connect-src 'self' https://pub.highlight.run; object-src 'none';" }],
    // ["meta", { "http-equiv": "Content-Security-Policy", content: "default-src *; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *; worker-src 'self' 'unsafe-eval' blob:; connect-src 'self' 'unsafe-eval';" }],
    // ["meta", { "http-equiv": "Content-Security-Policy", content: "default-src *; script-src 'self' https://static.highlight.io; worker-src 'self' blob: https://static.highlight.io; connect-src https://pub.highlight.run;" }],
    ["script", { src: "https://code.jquery.com/jquery-3.4.1.min.js" }],
    ["script", { defer: "defer", src: "https://unpkg.com/highlight.run" }],
    ["script", { defer: "defer" }, `
      (function() { 
      var script = document.createElement("script"); 
      script.src = "/scripts/highlight.js";
      setTimeout(() => document.body.append(script))
      })(); 
    `]
  ],
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
          apiKey: "a0a0d5c5915a4c610596d07386d5ae97",
          appId: "RUJ2HHX41L",
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
          apiKey: "a0a0d5c5915a4c610596d07386d5ae97",
          appId: "RUJ2HHX41L",
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
