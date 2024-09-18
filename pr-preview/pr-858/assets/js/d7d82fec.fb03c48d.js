"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[50524],{

/***/ 592436:
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
	id: 'docs-notifications-tutorial-token-transfer-notification-from-smart-contract',
	title: 'Token transfer notification from smart contract',
	hide_title: true,
	slug: './token-transfer-notification-from-smart-contract',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 4,
	image: '/assets/docs/previews/docs_notifications_tutorial--token_transfer_notification_from_smart_contract.png'
};
const contentTitle = 'Overview';
const metadata = {
  "id": "notifications/tutorials/docs-notifications-tutorial-token-transfer-notification-from-smart-contract",
  "title": "Token transfer notification from smart contract",
  "description": "This tutorial explains how you can integrate notifications directly in your smart contract by importing Push comm smart contract and using its interface. We will be creating a simple token transfer notification for this guide.",
  "source": "@site/docs/notifications/05-tutorials/04-Tutorial-Smart-Contract-Notifications.mdx",
  "sourceDirName": "notifications/05-tutorials",
  "slug": "/notifications/tutorials/token-transfer-notification-from-smart-contract",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/token-transfer-notification-from-smart-contract",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/04-Tutorial-Smart-Contract-Notifications.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 4,
  "frontMatter": {
    "id": "docs-notifications-tutorial-token-transfer-notification-from-smart-contract",
    "title": "Token transfer notification from smart contract",
    "hide_title": true,
    "slug": "./token-transfer-notification-from-smart-contract",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 4,
    "image": "/assets/docs/previews/docs_notifications_tutorial--token_transfer_notification_from_smart_contract.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Advance - Create your channel using Safe",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/create-your-channel-using-safe"
  },
  "next": {
    "title": "Advance - Create channel and notif from smart contract",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/advance-create-channel-and-notif-from-smart-contract"
  }
};
const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "What&#39;s going to happen",
  "id": "whats-going-to-happen",
  "level": 2
}, {
  "value": "Tutorial time",
  "id": "tutorial-time",
  "level": 2
}, {
  "value": "Code",
  "id": "code",
  "level": 3
}, {
  "value": "Add delegate",
  "id": "add-delegate",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This tutorial explains how you can integrate notifications directly in your smart contract by importing Push comm smart contract and using its interface. We will be creating a simple token transfer notification for this guide."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Token Transfer Notification from Smart Contract | Tutorial | Push
  Notifications | Push Documentation`
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Ensure you have created your channel - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/tutorials/create-your-channel/",
          title: "Guide to create your channel for sending notifications from Push protocol",
          children: "Creating your channel"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Ensure you know what are channel delegates - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/tutorials/create-your-channel/#adding-delegates-for-channel",
          title: "Guide to adding delegates for your channel",
          children: "Adding channel delegates"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Ensure you know types of notifications to know what you want to send - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/build/types-of-notification/",
          title: "Guide explaining the types of notifications",
          children: "Types of notifications"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "whats-going-to-happen",
      children: "What's going to happen"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "We create a channel and copy it's address"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "We import interface and function call to trigger notification"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "We deploy the contract and add the contract address as delegate"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Watch in 😲 as each transfer now notifies the wallet address about tokens received"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "tutorial-time",
      children: "Tutorial time"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push protocol also supports sending notifications to user wallets directly from your smart contract and that too by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "only adding 2 lines of extra code to your smart contract"
      }), " 🎉."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The best way to do it is by creating your channel first > tweaking your smart contract with notification logic and finally adding the deployed contract address as delegate to your channel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To learn more about how to import interface and the function call of send notification, please see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/build/send-notification-via-smart-contract/",
        title: "Smart contract intergace to send notification",
        children: "send notification (via smart contract)"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "code",
      children: "Code"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-solidity",
        children: "pragma solidity ^0.8.20;\n// SPDX-License-Identifier: UNLICENSED\n\nimport \"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.5.0/contracts/token/ERC20/ERC20.sol\";\nimport \"https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.0/contracts/utils/StringsUpgradeable.sol\";\n\n// PUSH Comm Contract Interface\ninterface IPUSHCommInterface {\n    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;\n}\n\ncontract Push is ERC20 {\n\n    using StringsUpgradeable for uint256;\n    using StringsUpgradeable for address;\n\n    // EPNS COMM ADDRESS ON ETHEREUM SEPOLIA, CHECK THIS: https://docs.epns.io/developers/developer-tooling/epns-smart-contracts/epns-contract-addresses\n    address public EPNS_COMM_ADDRESS = 0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7;\n\n    constructor ()\n        ERC20(\"Push Token\", \"PUSH\")\n     {\n        _mint(msg.sender, 1000 * 10 ** uint(decimals()));\n    }\n\n    function transfer(address to, uint amount) override public returns (bool success) {\n        address owner = _msgSender();\n        _transfer(owner, to, amount);\n        address sender = msg.sender;\n        uint256 readableAmount = amount / 10 ** uint(decimals());\n\n        //\"0+3+Hooray! \", msg.sender, \" sent \", token amount, \" PUSH to you!\"\n        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(\n            0x554d29160f779Adf0a4328597cD33Ea1Df4D9Ee9, // from channel\n            to, // to recipient, put address(this) in case you want Broadcast or Subset. For Targeted put the address to which you want to send\n            bytes(\n                string(\n                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n                    abi.encodePacked(\n                        \"0\", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n                        \"+\", // segregator\n                        \"3\", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)\n                        \"+\", // segregator\n                        \"Tranfer Alert\", // this is notification title\n                        \"+\", // segregator\n                        \"Hooray! \", // notification body\n                        sender.toHexString(), // notification body\n                        \" sent \", // notification body\n                        readableAmount.toString(), // notification body\n                        \" PUSH to you!\" // notification body\n                    )\n                )\n            )\n        );\n\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "add-delegate",
      children: "Add delegate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The only remaining step is to deploy your contract and then go to your channel and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/tutorials/create-your-channel/#adding-delegates-for-channel",
        title: "Add delegate to your channel",
        children: "add the smart contract address as delegate to your channel"
      }), " which will allow that smart contract address to send notification on behalf of your channel."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That's it! Your channel should now send notification as soon as anyone transfer your tokens from one address to the other 🎉🎉🎉!"
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