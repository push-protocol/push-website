"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[64266],{

/***/ 989796:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'docs-notifications-develop-send-notification-via-smart-contract',
	title: 'Send Notification (via Smart Contract)',
	hide_title: true,
	slug: './send-notification-via-smart-contract',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 13,
	image: '/assets/docs/previews/docs_notifications_develop--send_notification_(via_smart_contract).png'
};
const contentTitle = 'Send notification using smart contract overview';
const metadata = {
  "id": "notifications/build/docs-notifications-develop-send-notification-via-smart-contract",
  "title": "Send Notification (via Smart Contract)",
  "description": "Push contracts are designed to act as a communication middleware for your smart contracts which ensures that even smart contracts can communicate with the wallet addresses (ie: web3 users).",
  "source": "@site/docs/notifications/01-build/13-Develop-Send-Notification-Smart-Contract.mdx",
  "sourceDirName": "notifications/01-build",
  "slug": "/notifications/build/send-notification-via-smart-contract",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/build/send-notification-via-smart-contract",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/01-build/13-Develop-Send-Notification-Smart-Contract.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 13,
  "frontMatter": {
    "id": "docs-notifications-develop-send-notification-via-smart-contract",
    "title": "Send Notification (via Smart Contract)",
    "hide_title": true,
    "slug": "./send-notification-via-smart-contract",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 13,
    "image": "/assets/docs/previews/docs_notifications_develop--send_notification_(via_smart_contract).png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Send Notification",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/build/send-notification"
  },
  "next": {
    "title": "Notification Styling",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/build/styling-notification-content"
  }
};
const assets = {

};



const toc = [{
  "value": "Sending notifications from smart contract",
  "id": "sending-notifications-from-smart-contract",
  "level": 2
}, {
  "value": "Step 1️⃣ - Locate the contract address of Push",
  "id": "step-1️⃣---locate-the-contract-address-of-push",
  "level": 3
}, {
  "value": "Step 2️⃣ - Import Push Comm interface",
  "id": "step-2️⃣---import-push-comm-interface",
  "level": 3
}, {
  "value": "Step 3️⃣ - Locate your channel address",
  "id": "step-3️⃣---locate-your-channel-address",
  "level": 3
}, {
  "value": "Step 4️⃣ - Call the contract function",
  "id": "step-4️⃣---call-the-contract-function",
  "level": 3
}, {
  "value": "Step 5️⃣ - Add your smart contract address as your channel delegate",
  "id": "step-5️⃣---add-your-smart-contract-address-as-your-channel-delegate",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "send-notification-using-smart-contract-overview",
      children: "Send notification using smart contract overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push contracts are designed to act as a communication middleware for your smart contracts which ensures that even smart contracts can communicate with the wallet addresses (ie: web3 users)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Send Notification (via Smart Contract) | Push Notifications | Push
  Documentation`
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "sending-notifications-from-smart-contract",
      children: "Sending notifications from smart contract"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1️⃣---locate-the-contract-address-of-push",
      children: "Step 1️⃣ - Locate the contract address of Push"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Ensure that you know the contract address of Push Communication smart contract based on the blockchain and network from which you are sending the communication out."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For example: Staging Ethereum contract (Sepolia) address for Push Communicator contract is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7"
      }), ". List of all smart contract and their environment is available here 👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/push-smart-contracts/contract-addresses/",
        title: "List of all relevant push protocol smart contract addresses",
        children: "Push smart contract addresses"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2️⃣---import-push-comm-interface",
      children: "Step 2️⃣ - Import Push Comm interface"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Start by importing the Push comm contract interface in your smart contract 👇"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-solidity",
        children: "// PUSH Comm Contract Interface\ninterface IPUSHCommInterface {\n    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3️⃣---locate-your-channel-address",
      children: "Step 3️⃣ - Locate your channel address"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Ensure your channel is up and running by following this guide - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/tutorials/create-your-channel/",
        title: "Guide explaining how to create your channel",
        children: "Creating your channel"
      }), ". Note down your channel address which you need to put in the code below as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "YOUR_CHANNEL_ADDRESS"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-4️⃣---call-the-contract-function",
      children: "Step 4️⃣ - Call the contract function"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Next call the function ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sendNotification(address _channel, address _recipient, bytes calldata _identity)"
      }), " and pass the address of the channel, recipient and the identity based on your needs."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-solidity",
        children: "IPUSHCommInterface(EPNS_COMM_CONTRACT_ADDRESS_FOR_SPECIFIC_BLOCKCHAIN).sendNotification(\n    YOUR_CHANNEL_ADDRESS, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel\n    to, // to recipient, put YOUR_CHANNEL_ADDRESS in case you want Broadcast or Subset. For Targetted put the address to which you want to send\n\n    bytes(\n        string(\n            // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n            abi.encodePacked(\n                \"0\", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity\n                \"+\", // segregator\n                \"3\", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)\n                \"+\", // segregator\n                \"Title\", // this is notification title\n                \"+\", // segregator\n                \"Body\" // notification body\n            )\n        )\n    )\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-5️⃣---add-your-smart-contract-address-as-your-channel-delegate",
      children: "Step 5️⃣ - Add your smart contract address as your channel delegate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The last step is to go back to your channel and add the smart contract address as a delegate ensuring notifications sent by your smart contract are routed through your channel and presented to your users. Checkout ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/tutorials/create-your-channel/#adding-delegates-for-channel",
        title: "Guide to adding delegates to your channel",
        children: "guide for adding delegates for channel"
      }), " to understand how to add delegates to your channel."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Here's an example of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/tutorials/token-transfer-notification-from-smart-contract/",
          children: "how to build your ERC-20 token with in-built notifications"
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
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