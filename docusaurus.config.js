const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MeowForm 🐱',
  tagline: 'Cats are cool',
  url: 'https://docs.meowform.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'tewarig', // Usually your GitHub org/user name.
  projectName: 'meowform', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MeowForm',
      logo: {
        alt: 'MeowForm',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
       
      ],
    },
    footer: {
      style: 'dark',
      links: [
       
        {
          title: 'Community',
          items: [
            
            {
              label: 'Twitter',
              href: 'https://twitter.com/oyeTewari',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tewarig/meowform',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meow!. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
