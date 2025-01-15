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
      type: 'doc',
      id: 'rewards/rewards',
    },
  ],
};

module.exports = sidebars;
