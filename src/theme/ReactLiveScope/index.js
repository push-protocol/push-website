
import { default as BrowserOnly } from '@docusaurus/BrowserOnly';
import React from 'react';

// This function returns a promise that resolves to the library, 
// ensuring it's only imported on the client side.
function loadClientSideLibraryEthers(constantName) {
  return typeof window !== 'undefined'
    ? require('ethers')[constantName]
    : Promise.resolve({}); // Return an empty object or appropriate placeholder for SSR.
}

function loadClientSideLibraryPushProtocolRestAPI(constantName) {
  return typeof window !== 'undefined'
    ? require('@pushprotocol/restapi')[constantName]
    : Promise.resolve({}); // Return an empty object or appropriate placeholder for SSR.
}

function loadClientSideLibraryPushProtocolRestAPIStream(constantName) {
  return typeof window !== 'undefined'
    ? require('@pushprotocol/restapi/src/lib/pushstream/pushStreamTypes')[constantName]
    : Promise.resolve({}); // Return an empty object or appropriate placeholder for SSR.
}


// For @pushprotocol/UIWeb components, we will dynamically load them in the BrowserOnly component.
function createBrowserOnlyLibComponentUIWeb(componentExportName) {
  return function LibComponentBrowserOnly(props) {
    return (
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          const Component = require('@pushprotocol/uiweb')[componentExportName];
          return <Component {...props} />;
        }}
      </BrowserOnly>
    );
  }
}

const ReactLiveScope = {
  React,
  ...React,
  // Asynchronously import ethers and PushAPI only on the client side
  ethers: loadClientSideLibraryEthers('ethers'),
  PushAPI: loadClientSideLibraryPushProtocolRestAPI('PushAPI'),
  STREAM: loadClientSideLibraryPushProtocolRestAPIStream('STREAM'),
  // Continue using the BrowserOnly component for UI components
  Chat: createBrowserOnlyLibComponentUIWeb('Chat'),
  NotificationItem: createBrowserOnlyLibComponentUIWeb('NotificationItem'),
  ChatUIProvider: createBrowserOnlyLibComponentUIWeb('ChatUIProvider'),
  ChatViewComponent: createBrowserOnlyLibComponentUIWeb('ChatViewComponent'),
  darkChatTheme: createBrowserOnlyLibComponentUIWeb('darkChatTheme'),
};

export default ReactLiveScope;
