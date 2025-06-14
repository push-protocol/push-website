import { default as BrowserOnly } from '@docusaurus/BrowserOnly';
import Spinner, {
  SPINNER_TYPE,
} from '@site/src/components/reusables/spinners/SpinnerUnit';
import GLOBALS from '@site/src/config/globals';
import React from 'react';
import { LiveEditor, LiveProvider, LiveError, LivePreview } from 'react-live';

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

function loadClientSideLibraryPushProtocolUIWeb(constantName) {
  return typeof window !== 'undefined'
    ? require('@pushprotocol/uiweb')[constantName]
    : Promise.resolve({}); // Return an empty object or appropriate placeholder for SSR.
}

function loadClientSideLibraryPushChainUIKit(constantName) {
  return typeof window !== 'undefined'
    ? require('@pushchain/ui-kit')[constantName]
    : Promise.resolve({}); // Return an empty object or appropriate placeholder for SSR.
}

function loadClientSideLibraryPushChainCore(constantName) {
  return typeof window !== 'undefined'
    ? require('@pushchain/core')[constantName]
    : Promise.resolve({}); // Return an empty object or appropriate placeholder for SSR.
}

// For @pushprotocol/UIWeb components, we will dynamically load them in the BrowserOnly component.
function createBrowserOnlyLibComponentUIWeb(componentExportName) {
  return function LibComponentBrowserOnly(props) {
    return (
      <BrowserOnly
        fallback={
          <Spinner
            size={42}
            color={GLOBALS.COLORS.PRIMARY_COLOR}
            type={SPINNER_TYPE.PROCESSING}
          />
        }
      >
        {() => {
          const Component = require('@pushprotocol/uiweb')[componentExportName];
          return <Component {...props} />;
        }}
      </BrowserOnly>
    );
  };
}

const ReactLiveScope = {
  React,
  ...React,
  LiveEditor,
  LiveProvider,
  LiveError,
  LivePreview,
  BrowserOnly,
  Spinner,
  SPINNER_TYPE,
  GLOBALS,
  // Asynchronously import ethers and PushAPI only on the client side
  ethers: loadClientSideLibraryEthers('ethers'),
  PushAPI: loadClientSideLibraryPushProtocolRestAPI('PushAPI'),
  // CONSTANTS: loadClientSideLibraryPushProtocolRestAPI('CONSTANTS'),
  MODAL_POSITION_TYPE: loadClientSideLibraryPushProtocolUIWeb(
    'MODAL_POSITION_TYPE'
  ),
  // Continue using the BrowserOnly component for UI components
  SupportChat: createBrowserOnlyLibComponentUIWeb('SupportChat'),
  ChatWidget: createBrowserOnlyLibComponentUIWeb('ChatWidget'),
  NotificationItem: createBrowserOnlyLibComponentUIWeb('NotificationItem'),
  ChatUIProvider: createBrowserOnlyLibComponentUIWeb('ChatUIProvider'),
  ChatView: createBrowserOnlyLibComponentUIWeb('ChatView'),
  CreateGroupModal: createBrowserOnlyLibComponentUIWeb('CreateGroupModal'),
  ChatProfile: createBrowserOnlyLibComponentUIWeb('ChatProfile'),
  MessageInput: createBrowserOnlyLibComponentUIWeb('MessageInput'),
  ChatViewBubble: createBrowserOnlyLibComponentUIWeb('ChatViewBubble'),
  ChatViewList: createBrowserOnlyLibComponentUIWeb('ChatViewList'),
  UserProfile: createBrowserOnlyLibComponentUIWeb('UserProfile'),
  ChatPreview: createBrowserOnlyLibComponentUIWeb('ChatPreview'),
  ChatPreviewList: createBrowserOnlyLibComponentUIWeb('ChatPreviewList'),
  darkChatTheme: createBrowserOnlyLibComponentUIWeb('darkChatTheme'),
  lightChatTheme: createBrowserOnlyLibComponentUIWeb('lightChatTheme'),
  // NotificationItem: createBrowserOnlyLibComponentUIWeb('NotificationItem'),
  SubscriptionManager: createBrowserOnlyLibComponentUIWeb(
    'SubscriptionManager'
  ),
  WidgetUIProvider: createBrowserOnlyLibComponentUIWeb('WidgetUIProvider'),
  PushUniversalWalletProvider: loadClientSideLibraryPushChainUIKit(
    'PushUniversalWalletProvider'
  ),
  PushUniversalAccountButton: loadClientSideLibraryPushChainUIKit(
    'PushUniversalAccountButton'
  ),
  usePushWalletContext: loadClientSideLibraryPushChainUIKit(
    'usePushWalletContext'
  ),
  usePushChainClient: loadClientSideLibraryPushChainUIKit('usePushChainClient'),
  PushUI: loadClientSideLibraryPushChainUIKit('PushUI'),
  PushChain: loadClientSideLibraryPushChainCore('PushChain'),
};

export default ReactLiveScope;
