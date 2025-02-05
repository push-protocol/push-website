export const OthersFeaturesList = {
  products: [
    {
      config: {
        id: 'video',
        padding: '28px 48px 48px 48px',
        mobilepadding: '28px 32px',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        bodyjustifycontent: 'bottom',
        hidehovereffect: false,
        hide3deffect: true,
      },
      body: [
        {
          type: 'image',
          imagesrc: 'otherproducts/push-video',
          videosrc: 'otherproducts/push-video-video',
          videowebm: true,
          imagealt: 'home.video-section.alt',
          imagetitle: 'home.video-section.title',
        },
        {
          type: 'text',
          bodytext: 'home.video-section.title',
          bodytextcolor: '#D98AEC',
          bodytextsize: '14px',
          bodytextweight: '700',
          uppercase: true,
          margin: '12px 0 0 0',
          align: 'left',
        },
        {
          type: 'text',
          bodytext: 'home.video-section.subtitle',
          bodytextcolor: '#FFF',
          bodytextsize: '30px',
          mobilebodytextsize: '24px',
          bodytextweight: '500',
          margin: '-12px 0 0 0',
          align: 'left',
          bodytextwidth: '70%',
          mobilebodytextwidth: '85%',
        },
        {
          type: 'text',
          bodytext: 'home.video-section.content',
          bodytextcolor: '#BBBCD0',
          bodytextsize: '19px',
          mobilebodytextsize: '17px',
          bodytextweight: '400',
          margin: '-8px 0 0 0',
          align: 'left',
          bodytextwidth: '70%',
          mobilebodytextwidth: '85%',
        },
        {
          type: 'styled-link',
          href: 'https://comms.push.org/docs/video/',
          hrefText: 'home.video-section.itemLink',
          margin: '4px 0 0 0',
          align: 'left',
        },
      ],
    },
    {
      config: {
        id: 'spaces',
        padding: '28px 48px 48px 48px',
        mobilepadding: '28px 32px',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        bodyjustifycontent: 'bottom',
        bodyfullwidth: false,
        hidehovereffect: false,
        hide3deffect: true,
      },
      body: [
        {
          type: 'image',
          imagesrc: 'otherproducts/push-spaces',
          videosrc: 'otherproducts/push-spaces-video',
          videowebm: true,
          imagealt: 'home.space-section.alt',
          imagetitle: 'home.space-section.title',
        },
        {
          type: 'text',
          bodytext: 'home.space-section.title',
          bodytextcolor: '#D98AEC',
          bodytextsize: '14px',
          bodytextweight: '700',
          uppercase: true,
          margin: '12px 0 0 0',
          align: 'left',
        },
        {
          type: 'text',
          bodytext: 'home.space-section.subtitle',
          bodytextcolor: '#FFF',
          bodytextsize: '30px',
          mobilebodytextsize: '24px',
          bodytextweight: '500',
          margin: '-12px 0 0 0',
          align: 'left',
          bodytextwidth: '70%',
          mobilebodytextwidth: '85%',
        },
        {
          type: 'text',
          bodytext: 'home.space-section.content',
          bodytextcolor: '#BBBCD0',
          bodytextsize: '19px',
          mobilebodytextsize: '17px',
          bodytextweight: '400',
          margin: '-8px 0 0 0',
          align: 'left',
          bodytextwidth: '70%',
          mobilebodytextwidth: '85%',
        },
        {
          type: 'styled-link',
          href: 'https://www.npmjs.com/package/@pushprotocol/restapi#for-spaces',
          hrefText: 'home.space-section.itemLink',
          margin: '4px 0 0 0',
          align: 'left',
        },
      ],
    },
  ],
};
