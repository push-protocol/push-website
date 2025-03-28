/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  pushChainSidebar: [
    {
      type: 'doc',
      id: 'chain/introduction',
    },
    {
      type: 'doc',
      id: 'chain/docs-chain-quickstart',
    },
    {
      type: 'doc',
      id: 'chain/docs-chain-important-concepts',
    },
    {
      type: 'doc',
      id: 'chain/docs-chain-use-cases',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'chain/docs-chain-build-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'chain/01-build' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'chain/docs-chain-tutorials-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'chain/02-tutorials' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'chain/docs-chain-concepts-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'chain/03-concepts' }],
    },
  ],
  pushNotificationSidebar: [
    {
      type: 'doc',
      id: 'notifications/notifications',
    },
  ],
  pushChatSidebar: [
    {
      type: 'doc',
      id: 'chat/chat',
    },
  ],
  pushVideoSidebar: [
    {
      type: 'doc',
      id: 'video/video',
    },
  ],
  pushDaoSidebar: [
    {
      type: 'doc',
      id: 'dao/dao',
    },
  ],
  pushHackersSidebar: [
    {
      type: 'doc',
      id: 'hackers/hackers',
    },
  ],
  pushTokenomicsSidebar: [
    {
      type: 'doc',
      id: 'tokenomics/tokenomics',
    },
  ],
  pushRoadmapSidebar: [
    {
      type: 'doc',
      id: 'roadmap/roadmap',
    },
  ],
  pushRewardsSidebar: [
    {
      type: 'category',
      label: 'Push Rewards',
      link: {
        type: 'doc',
        id: 'rewards/rewards', // This links to the main rewards page
      },
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'rewards/seasons/rewards-s1', // Corrected document ID
        },
        {
          type: 'doc',
          id: 'rewards/seasons/rewards-s2', // Corrected document ID
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Push Rewards',
    //   link: {
    //     type: 'doc',
    //     id: 'rewards/rewards',
    //   },
    //   collapsed: false,
    //   items: [{ type: 'autogenerated', dirName: 'rewards/seasons' }],
    // },
  ],
};

module.exports = sidebars;
