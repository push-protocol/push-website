"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[89810],{

/***/ 235083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_CustomLinkCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80778);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113490);


const frontMatter = {
	id: 'docs-notifications-concepts-architecture-overview',
	title: 'Push Notification Architecture',
	hide_title: true,
	slug: './push-notification-architecture',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_notifications_concepts_architecture_overview--push_notification_architecture.png'
};
const contentTitle = 'Architecture overview';
const metadata = {
  "id": "notifications/concepts/docs-notifications-concepts-architecture-overview",
  "title": "Push Notification Architecture",
  "description": "Push Notification is a web3 alert protocol that enables wallet addresses to send and receive notifications, offering a secure and privacy-focused and transparent alternative to traditional notification services.. By leveraging blockchain technology, users can communicate directly via their wallet addresses without personal identifiers like phone numbers, email addresses, etc.",
  "source": "@site/docs/notifications/06-concepts/01-Concepts-Architecture.mdx",
  "sourceDirName": "notifications/06-concepts",
  "slug": "/notifications/concepts/push-notification-architecture",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/concepts/push-notification-architecture",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/06-concepts/01-Concepts-Architecture.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "docs-notifications-concepts-architecture-overview",
    "title": "Push Notification Architecture",
    "hide_title": true,
    "slug": "./push-notification-architecture",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 1,
    "image": "/assets/docs/previews/docs_notifications_concepts_architecture_overview--push_notification_architecture.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Concepts",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/concepts"
  },
  "next": {
    "title": "Push Notifications For Web3",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/concepts/push-notifications-for-web3"
  }
};
const assets = {

};





const toc = [{
  "value": "Spam prevention",
  "id": "spam-prevention",
  "level": 2
}, {
  "value": "Sending notifications",
  "id": "sending-notifications",
  "level": 2
}, {
  "value": "Decentralization",
  "id": "decentralization",
  "level": 2
}, {
  "value": "Verification Proof",
  "id": "verification-proof",
  "level": 3
}, {
  "value": "Push Notification SDK",
  "id": "push-notification-sdk",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "architecture-overview",
      children: "Architecture overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Notification is a web3 alert protocol that enables wallet addresses to send and receive notifications, offering a secure and privacy-focused and transparent alternative to traditional notification services.. By leveraging blockchain technology, users can communicate directly via their wallet addresses without personal identifiers like phone numbers, email addresses, etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Designed for mainstream adoption, Push Notification serves as a protocol that any dApp, web3 wallet, or backend can integrate to provide their users with notification capabilities."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: 'Architecture Overview | Push Notifications | Push Documentation'
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Since Push Protocol started with decentralized notifications, every chat message sent on the protocol has a notification built in. Whenever a message is sent to an address, the receiving address will receive a notification along with the message but only if they have accepted your chat request."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Unlike traditional notification / alert services that require users to provide their information to sign up, like their email, phone number, or any other personal data about the user, Push Notification requires no personal information whatsoever to start receiving / sending notifications on the protocol. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["All the user needs is a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "wallet address."
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "All the notifications are stored either on Push Nodes, IPFS or onchain depending on the storage choosed by the client and are signed."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "When sending a notification to an address, it is sent through Push Nodes. "
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Push Nodes"
        })
      }), " are a network of nodes, where each node can have a different role in the network that is responsible for validating each notification and chat message between addresses. "]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Their main task is to validate that:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: " the notification payload is following the corresponding payload standard,"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "the sender is a valid channel or delegator and can actually send the notification, and signature validation,"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "if the payload is valid, the Push Nodes will process the notification and send it to the delivery nodes for pushing the alerts to the clients."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "spam-prevention",
      children: "Spam prevention"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Spam prevention has always been one of our major priorities. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There are countless examples of users spamming others with fake giveaways, random messages, or unwanted notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For notifications, the core protocol itself adopts a user-centric approach. This means that all the notifications are opt-in or opt-out based. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This means that users shall only receive notifications from protocols they opt in to. Users can fine-tune which notifications they see the value of and only opt-in for them while every other notification shall land in the user's spam box. "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "sending-notifications",
      children: "Sending notifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The core protocol allows to create channels which acts as services that can send notifications to any wallet address.\nThe channels can also send notifications on alias chains using an alias address of the specific chain.\nIf the wallet address is a subscriber, notifications lands in the inbox, otherwise in spam box."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "decentralization",
      children: "Decentralization"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Notifications are sent between addresses via the Push Nodes. Push Nodes are the nodes responsible for validating notification and chat payload and for dispatching notifications to addresses. Push Nodes can have different roles in this Communication Network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The vision for Push Protocol is for the Push Nodes to be run by the community and to get rewarded by contributing to the network's decentralization. As of today, Push Nodes are run by Push Protocol, but the team is working on decentralizing the nodes."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Although the Push Nodes are run by Push Protocol, users can always verify that the chat messages and notifications haven’t been tampered with and that they have indeed been sent by the correct address. Users can always verify this by the Verification Proof."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "verification-proof",
      children: "Verification Proof"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Verification Proof is a property that is sent along with the notifications and chats messages to help the network validate the sender, the chain from which the notification (or message) is sent, and the content of the notification (or message) along with any other validation that might be required."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For notifications, the verification proofs differ based on the platform from which they are sent. i.e., Smart contracts verification proof can be validated on-chain, and smart contract-based notifications will usually carry transaction hash proofs while off-chain/gasless notifications usually carry EIP-712 proofs, though they are capable of carrying smart contract verification proof as well, which makes it composable."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-notification-sdk",
      children: "Push Notification SDK"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With the SDK, it will be easy for developers to integrate notifications into their dapps. The use cases are endless:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Alerts for gas price changes."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Notifications for token price changes."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "New Governance Proposals of DAO"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Loan Liquidation Alert"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Any other cool, crazy feature you can think of"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Alright. Now that you have a clear picture of the Push Notification and its SDK, let's dive in and try to integrate the push notification into your application."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 80778:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
const CustomLinkCard=props=>{const{link,text,target,emoji}=props;const[isMouseHovered,setIsMouseHovered]=React.useState(false);return/*#__PURE__*/_jsxs("div",{onMouseEnter:()=>setIsMouseHovered(true),onMouseLeave:()=>setIsMouseHovered(false),style:{margin:'1.5rem 0',backgroundColor:'transparent',borderRadius:'0.5rem',border:'0.5px solid var(--ifm-custom-base)',padding:'0.8rem 1rem',fontSize:'1.25rem',width:'100%',display:'flex',alignItems:'center',cursor:'pointer',transition:'all .2s ease-in-out',boxShadow:`${isMouseHovered?'rgba(0, 0, 0, 0.05) 0px 19px 43px':'none'}`,transform:`${isMouseHovered?'translate3d(0px, -1px, 0px)':'none'}`,wordBreak:'break-word'},children:[emoji?emoji:'📄',/*#__PURE__*/_jsx("a",{href:link,target:target,style:{marginLeft:'0.8rem',textDecoration:'none',color:`${isMouseHovered?'var(--ifm-color-primary)':'var(--ifm-custom-base)'}`},children:text})]});};/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CustomLinkCard)));

/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);