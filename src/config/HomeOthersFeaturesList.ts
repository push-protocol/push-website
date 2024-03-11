export const OthersFeaturesList = {
  products: [
    {
      config: {
        id: "share",
        padding: "24px 24px 0px 24px",
        fillheight: true,
        hideonmobile: false,
        bodyjustifycontent: "bottom",
      },
      header: {
        title: "home.chat-section.box1.title",
        align: "left",
      },
      body: [
        {
          type: "image",
          imagesrc: "chats/share",
          videosrc: "chats/share-video",
          imagealt: "home.chat-section.box1.imagealt",
          imagetitle: "home.chat-section.box1.imagetitle",
        },
      ],
    },
    {
      config: {
        id: "chat-requests",
        padding: "24px",
        hideonmobile: true,
      },
      header: {
        title: "home.chat-section.box2.title",
        align: "left",
        illustration: "chats/requests",
        illustrationvideo: "chats/requests-video",
        subheader: "home.chat-section.box2.subheader",
        iconalt: "home.chat-section.box2.iconalt",
        icontitle: "home.chat-section.box2.icontitle",
      },
    },
  ],
};
