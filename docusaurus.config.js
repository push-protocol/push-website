// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Push Documentation Hub",
  tagline: "One place to learn about everything Push Protocol.",
  favicon: "img/Bell.svg",

  // Set the production url of your site here
  url: "https://docsv2.push.org/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Ethereum Push Notificaion Service", // Usually your GitHub org/user name.
  projectName: "push-documentation", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Static linking
  staticDirectories: ['public', 'static'],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ethereum-push-notification-service/push-documentation/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {      
        hideOnScroll: true,
        // title: 'Title with Logo',
        logo: {
          alt: "Push Logo",
          src: "img/PushLogoTextDark.svg",
          srcDark: "img/PushLogoTextWhite.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "pushChatSidebar",
            position: "right",
            label: "Documentation Hub",
          },
          // { to: "/blog", label: "Blog", position: "right" },
          {
            to: "https://discord.com/invite/pushprotocol",
            label: "Discord",
            position: "right",
          },
          {
            to: "https://app.push.org/",
            label: "App",
            position: "right",
          },
          {
            href: "https://github.com/ethereum-push-notification-service/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",

      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",

      //   indexName: "YOUR_INDEX_NAME",
      // },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fff',
      //   textColor: '#e03dc1',
      //   isCloseable: true,
      // },
    }),
};

module.exports = config;
