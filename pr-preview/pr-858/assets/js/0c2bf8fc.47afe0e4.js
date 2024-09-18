"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[86611],{

/***/ 808411:
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
	id: 'docs-notifications-tutorial-advance-create-channel-and-notif-from-smart-contract',
	title: 'Advance - Create channel and notif from smart contract',
	hide_title: true,
	slug: './advance-create-channel-and-notif-from-smart-contract',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_notifications_tutorial_advance_create_channel_and_notif_from_smart_contract--advance_-_create_channel_and_notif_from_smart_contract.png'
};
const contentTitle = 'Overview';
const metadata = {
  "id": "notifications/tutorials/docs-notifications-tutorial-advance-create-channel-and-notif-from-smart-contract",
  "title": "Advance - Create channel and notif from smart contract",
  "description": "This tutorial explains how you can create channel and trigger notifications directly from your smart contract by importing Push core and comm smart contract and using its interface.",
  "source": "@site/docs/notifications/05-tutorials/05-Tutorial-Smart-Contract-Channel-And-Notifications.mdx",
  "sourceDirName": "notifications/05-tutorials",
  "slug": "/notifications/tutorials/advance-create-channel-and-notif-from-smart-contract",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/advance-create-channel-and-notif-from-smart-contract",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/05-Tutorial-Smart-Contract-Channel-And-Notifications.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 5,
  "frontMatter": {
    "id": "docs-notifications-tutorial-advance-create-channel-and-notif-from-smart-contract",
    "title": "Advance - Create channel and notif from smart contract",
    "hide_title": true,
    "slug": "./advance-create-channel-and-notif-from-smart-contract",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 5,
    "image": "/assets/docs/previews/docs_notifications_tutorial_advance_create_channel_and_notif_from_smart_contract--advance_-_create_channel_and_notif_from_smart_contract.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Token transfer notification from smart contract",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/token-transfer-notification-from-smart-contract"
  },
  "next": {
    "title": "Send notification via your subgraph",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/send-notification-via-subgraph"
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
      children: "This tutorial explains how you can create channel and trigger notifications directly from your smart contract by importing Push core and comm smart contract and using its interface."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will be creating a simple contract that allows owner to create a channel using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ipfshash"
      }), " and send notification for this guide."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Channel Creation and Notification from Smart Contract | Tutorial | Push Notifications | Push Documentation`
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Ensure you have know what is a channel (Don't need to create from dApp as we will be creating it from your smart contract) - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/tutorials/create-your-channel/",
          title: "Guide to create your channel for sending notifications from Push protocol",
          children: "Creating your channel"
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
        children: "We import interface and function call to create channel function"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "We import interface and function call to trigger notification"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Watch in 😲 as each payment in contract now notifies the wallet address about tokens received"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "tutorial-time",
      children: "Tutorial time"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Along with the UI one can also use contract to contract interaction to create channel as well as send notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here is an example of an contract that uses Push Core to create channel and Push communicator to send notification whenever the contract receives fund."
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
        children: "//SPDX-License-Identifier: UNLICENSED\npragma solidity >0.5.0 <0.9.0;\n\n//EPNS Core Contract Interface\ninterface IEPNSCoreInterface {\n  enum ChannelType {\n    ProtocolNonInterest,\n    ProtocolPromotion,\n    InterestBearingOpen,\n    InterestBearingMutual\n  }\n\n  function createChannelWithFees(\n    ChannelType _channelType,\n    bytes calldata _identity,\n    uint256 _amount\n  ) external;\n\n\n}\n\n//EPNS Comm Contract Interface\ninterface IEPNSCommInterface {\n  function sendNotification(address _channel, address _recipient, bytes memory _identity) external;\n}\n\n//ERC20 Interface to approve sending push\ninterface IERC20Interface {\n  function approve(address spender, uint256 amount) external returns (bool);\n}\n\ncontract Fund  {\n  address public EPNS_CORE_ADDRESS =0x97D7c5f14B8fe94Ef2b4bA589379f5Ec992197dA;\n  address public EPNS_COMM_ADDRESS=0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;\n  address public PUSH_ADDRESS = 0xf418588522d5dd018b425E472991E52EBBeEEEEE;\n  address payable public owner;\n\n  constructor() {\n    owner = payable(msg.sender);\n  }\n\n  modifier onlyOwner() {\n    require(msg.sender == owner, \"Only owner can perform the task\");\n    _;\n  }\n\n  //To create channel\n  function createChannelWithEPNS(string memory _ipfsHash) public onlyOwner {\n    IERC20Interface(PUSH_ADDRESS).approve(EPNS_CORE_ADDRESS, 50 ether);\n    IEPNSCoreInterface(EPNS_CORE_ADDRESS).createChannelWithPUSH(\n      IEPNSCoreInterface.ChannelType.InterestBearingOpen,\n      bytes(string(\n      abi.encodePacked(\n        \"1\",\n        \"+\",\n        _ipfsHash\n      )\n    )),\n      50 ether\n    );\n  }\n\n  // To send notification when the contract receives fund\n  receive() external payable {\n    IEPNSCommInterface(EPNS_COMM_ADDRESS).sendNotification(address(this), address(this), bytes(string(\n      // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n        abi.encodePacked(\n          \"0\", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations\n          \"+\", // segregator\n          \"1\", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targeted or subset)\n          \"+\", // segregator\n          \"Incoming Funds\", // this is notification title\n          \"+\", // segregator\n          \"Hooray! Someone sent you some funds!\", // notification body\n        )\n    )));\n  }\n\n  function transferFundToOwner() public payable onlyOwner{\n    owner.transfer(address(this).balance);\n  }\n\n  function checkAmount() public view returns(uint){\n    return address(this).balance;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Note: Make sure you have transferred some $PUSH to the contract address so that later it will used while creating the channel. Some of the constants that would be used throughout the code:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-solidity",
        children: "  address public EPNS_CORE_ADDRESS =0x97D7c5f14B8fe94Ef2b4bA589379f5Ec992197dA;\n  address public EPNS_COMM_ADDRESS=0x87da9Af1899ad477C67FeA31ce89c1d2435c77DC;\n  address public PUSH_ADDRESS = 0xf418588522d5dd018b425E472991E52EBBeEEEEE;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createChannelWithEPNS"
      }), " takes in IPFS hash which contains the channel details as per protocol standard. Then the function approves Push Core Contract to spend 50 PUSH. At last, it calls the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "createChannelWithFees"
      }), " of Push Core Contract to create the channel."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After the channel is created, we want to notify all the subscribers whenever funds are sent to the contract. This is where we will use the Push Communicator contract to send notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "receive"
      }), " function is a special function that gets executed whenever ether is sent to the contract. So, here we are calling the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sendNotification"
      }), " of the communicator contract. The parameters include channel, recipient and the message body in the form of identity bytes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That's it! Your channel should now send notification as soon as anyone transfer any ether to your contract 🎉🎉🎉!"
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