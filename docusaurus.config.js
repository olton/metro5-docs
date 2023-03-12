// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metro UI Documentation',
  tagline: 'Welcome to Metro UI Docs portal!',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],

  // Set the production url of your site here
  url: 'https://www.metroui.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/metroui/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Metro5 Docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/olton/metro5-docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/metro5-docs-social-card.jpg',
      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          href: '/metroui/docs',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
            className: "navbar__item navbar__link"
          },
          {
            href: 'https://test.korzh.com',
            position: 'left',
            target: "_self",
            label: "Korzh.com"
          },
          {
            href: 'https://test.korzh.com/metroui',
            position: 'left',
            target: "_self",
            label: "Metro UI"
          },
          {
            href: 'https://pimenov.com.ua',
            position: 'right',
            target: "_blank",
            html: "<img alt='Metro 5 Author' src='/metroui/docs/img/author.jpg' style='height: 24px; margin-top: 8px; border-radius: 50%;' />"
          },
          {
            href: 'https://github.com/olton/metro5-docs',
            position: 'right',
            className: 'header-github-link',
            target: "_blank"
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Serhii Pimenov.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAdsense: {
        dataAdClient: 'ca-pub-1632668592742327',
      },
    }),
  plugins: ['docusaurus-plugin-google-adsense'],
};

module.exports = config;
