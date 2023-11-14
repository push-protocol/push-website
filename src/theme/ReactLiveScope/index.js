
import { default as BrowserOnly } from '@docusaurus/BrowserOnly';
import Spinner, { SPINNER_TYPE } from '@site/src/components/reusables/spinners/SpinnerUnit';
import GLOBALS from '@site/src/config/globals';
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


function loadClientSideLibraryPushProtocolUIWeb(constantName) {
  return typeof window !== 'undefined'
    ? require('@pushprotocol/uiweb')[constantName]
    : Promise.resolve({}); // Return an empty object or appropriate placeholder for SSR.
}

// For @pushprotocol/UIWeb components, we will dynamically load them in the BrowserOnly component.
function createBrowserOnlyLibComponentUIWeb(componentExportName) {
  return function LibComponentBrowserOnly(props) {
    return (
      <BrowserOnly fallback={<Spinner size={42} color={GLOBALS.COLORS.PRIMARY_COLOR} type={SPINNER_TYPE.PROCESSING}/>}>
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
  SupportChat: createBrowserOnlyLibComponentUIWeb('SupportChat'),
  NotificationItem: createBrowserOnlyLibComponentUIWeb('NotificationItem'),
  ChatUIProvider: createBrowserOnlyLibComponentUIWeb('ChatUIProvider'),
  ChatView: createBrowserOnlyLibComponentUIWeb('ChatView'),
  CreateGroupModal: createBrowserOnlyLibComponentUIWeb('CreateGroupModal'),
  ChatProfile: createBrowserOnlyLibComponentUIWeb('ChatProfile'),
  MessageInput: createBrowserOnlyLibComponentUIWeb('MessageInput'),
  ChatViewBubble: createBrowserOnlyLibComponentUIWeb('ChatViewBubble'),
  ChatViewList: createBrowserOnlyLibComponentUIWeb('ChatViewList'),
  MODAL_POSITION_TYPE: loadClientSideLibraryPushProtocolUIWeb('MODAL_POSITION_TYPE'),
  darkChatTheme: createBrowserOnlyLibComponentUIWeb('darkChatTheme'),
  NotificationItem: createBrowserOnlyLibComponentUIWeb('NotificationItem'),
};

export default ReactLiveScope;
