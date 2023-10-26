
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

function createBrowserOnlyLibComponentUIWeb(componentExportName) {
  return function LibComponentBrowserOnly(props) {
    return (
      <BrowserOnly fallback={<div>...</div>}>
        {() => {
          const Component = require("@pushprotocol/uiweb")[componentExportName];
          return <Component {...props} />;
        }}
      </BrowserOnly>
    );
  }
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  NotificationItem: createBrowserOnlyLibComponentUIWeb("NotificationItem"),
  ChatUIProvider: createBrowserOnlyLibComponentUIWeb("ChatUIProvider"),
  ChatViewComponent: createBrowserOnlyLibComponentUIWeb("ChatViewComponent"),
  darkChatTheme: createBrowserOnlyLibComponentUIWeb("darkChatTheme"),
};
export default ReactLiveScope;
