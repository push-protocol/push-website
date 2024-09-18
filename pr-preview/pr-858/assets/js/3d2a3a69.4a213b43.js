"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[95974],{

/***/ 454262:
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
	slug: 'my-dapp-would-like-to-send-you-push-notifications',
	title: '‘My Dapp’ Would Like to Send You Push Notifications',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'In Part 1.1, we introduced modern push technology, which consists of these primary components: an app publisher who publishes information by notifications, a client who is the receiver of notifications based on a subscription, and the push notification provider who acts as middleware between these two actors. ',
	tags: [
		'Push Notification',
		'Web3',
		'Blockchain',
		'Blockchain Development',
		'Pn101'
	]
};
const contentTitle = 'An Introduction to Push Notification: Part 1.2';
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/my-dapp-would-like-to-send-you-push-notifications",
  "source": "@site/blog/2022-09-05-dapp-would-like-to-send-notification/index.md",
  "title": "‘My Dapp’ Would Like to Send You Push Notifications",
  "description": "Cover image of ‘My Dapp’ Would Like to Send You Push Notifications",
  "date": "2022-09-05T00:00:00.000Z",
  "formattedDate": "September 5, 2022",
  "tags": [
    {
      "label": "Push Notification",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/push-notification"
    },
    {
      "label": "Web3",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/web-3"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain"
    },
    {
      "label": "Blockchain Development",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain-development"
    },
    {
      "label": "Pn101",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/pn-101"
    }
  ],
  "readingTime": 2.59,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Protocol",
      "url": "https://twitter.com/pushprotocol",
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "my-dapp-would-like-to-send-you-push-notifications",
    "title": "‘My Dapp’ Would Like to Send You Push Notifications",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "In Part 1.1, we introduced modern push technology, which consists of these primary components: an app publisher who publishes information by notifications, a client who is the receiver of notifications based on a subscription, and the push notification provider who acts as middleware between these two actors. ",
    "tags": [
      "Push Notification",
      "Web3",
      "Blockchain",
      "Blockchain Development",
      "Pn101"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Reef Chain Integrates EPNS to Enable Seamless Communication With Users",
    "permalink": "/push-website/pr-preview/pr-858/blog/reef-chain-integrates-epns-to-enable-seamless-communication-with-users"
  },
  "nextItem": {
    "title": "EPNS Monthly Blocks",
    "permalink": "/push-website/pr-preview/pr-858/blog/epns-monthly-blocks-august"
  }
};
const assets = {
"image": (__webpack_require__(660752)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Taking the Push Notification Provider Away From the Notifications",
  "id": "taking-the-push-notification-provider-away-from-the-notifications",
  "level": 2
}, {
  "value": "Enter Web3 Push Notifications",
  "id": "enter-web3-push-notifications",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of ‘My Dapp’ Would Like to Send You Push Notifications",
        src: (__webpack_require__(177933)/* ["default"] */ .A) + "",
        width: "1100",
        height: "578"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/my-app-would-like-to-send-you-push-notifications-4b591a68f803",
        children: "Part 1.1"
      }), ", we introduced modern push technology, which consists of these primary components: an app publisher who publishes information by notifications, a client who is the receiver of notifications based on a subscription, and the push notification provider who acts as middleware between these two actors."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Middleware is software that acts as an intermediary between two applications or services. Middleware also provides services that are not present in the operating system. The push notification service provider is an example of this, known as an operating system push notification service (OSPNS). For instance, the Apple Push Notification Service (APNS) lives on iPhone devices as an OSPNS middleware software."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "taking-the-push-notification-provider-away-from-the-notifications",
      children: "Taking the Push Notification Provider Away From the Notifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Web3 moves away from the traditional client-server model and alleviates today’s power concentration over the control and truth of information and data. Web3 attempts to take service providers away from services, where middleware becomes trustless software (but can still be trustful) that offers security guarantees and robust communication through decentralization. Web3 also attempts to reconfigure how we monetize things in society and redirect incentives to where they should go, users, participants, communities, and those generating value."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Addressing the limitations of push technology while utilizing its features in the next iteration of the web requires an OSPNS-like piece of middleware. There needs to be a similar layer of abstraction and push technology primitives that allow notifications to create a web3-based OSPNS."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "enter-web3-push-notifications",
      children: "Enter Web3 Push Notifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://epns.io/",
        children: "The Ethereum Push Notification Service (EPNS)"
      }), ": a decentralized OSPNS for push notifications; the open communication layer for web3."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Project Stacks",
        src: (__webpack_require__(926393)/* ["default"] */ .A) + "",
        width: "828",
        height: "500"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS addresses the user experience problem in web3 by providing push notifications for wallets and dapps. EPNS allows any dapp, smart contract, backend, protocol, or, in principle, any distributed technology to send communication directly to user wallet addresses in an open, feeless, and platform-agnostic way. Being an open and permissionless protocol, anyone can create dedicated channels to distribute information directly to user wallets without needing to rely on centralized service providers. The protocol serves many communication primitives beyond simple push notifications, such as peer-to-peer chatting, communication channel creation, and on-chain governance. In addition, EPNS addresses information and content censorship as the protocol allows users and applications to control the content they’d like to push."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Web3 users:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "don’t need to trust or rely on a centralized OSPNS for information."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "don’t need to interact with applications unnecessarily and manually stay on stand-by for any activities they would like."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "can opt-in to information and alerts they find useful."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "can communicate with other accounts instead of operating in isolation."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "can automate messages that users and dapps care about."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "can expect a much better onboarding experience."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS enables open and direct peer-to-peer communication through an incentivization scheme without compromising communication or anonymity. Instead of app-to-client messaging, EPNS allows for wallet-to-wallet or service-to-wallet messaging both for on and off-chain events. As a result, end users have end-to-end visibility of transactions and on-chain events to generate awareness while increasing trust."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Governance mechanisms in web3 often lack good user experience as users must constantly check on and off-chain activity for recent updates and proposals. Or, users depend on the news efforts from individuals on the latest governance activity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If, for instance, a user wants to keep informed and engaged with Uniswap’s governance proposals, they have the overhead of constant engagement to not miss out on any activity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      children: "With EPNS, that changes."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Integrating EPNS with Uniswap allows users to receive notifications directly to their wallets whenever a new governance proposal is submitted, such as the recent governance proposal to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.uniswap.org/#/vote/2/24?chain=mainnet",
        children: "create the Uniswap Foundation"
      }), ", allowing users to stay up-to-date and never miss a vote."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Project",
        src: (__webpack_require__(961116)/* ["default"] */ .A) + "",
        width: "818",
        height: "760"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is what EPNS had the pleasure of doing in early 2021 — integrating with Uniswap to accelerate DeFi and the web3 experience. Learn more about the collaboration in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/accelerating-defi-with-epns-f2cbfaa33c91",
        children: "this blog post"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The information required to notify users about different web3 events is complex and requires massive infrastructure efforts, which is another reason EPNS started. EPNS is also a demonstration of how to scale services and implement solutions in a modular way, as developers can easily build dapps with EPNS. Before diving into the communication layer itself, including how communication channels and messaging work with EPNS, how the publish/subscribe model fits into web3, and understanding EPNS under the hood, we will attempt to make the case by using web3 push notifications for different use cases and the need for a web3 communication layer in Part 2."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      children: "By Danny Salman"
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



/***/ }),

/***/ 660752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f0407acc9177d9738941b83aa58766c3.webp");

/***/ }),

/***/ 177933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f0407acc9177d9738941b83aa58766c3.webp");

/***/ }),

/***/ 926393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-300099749d8b8f37802c1b002b940ed0.webp");

/***/ }),

/***/ 961116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-390fdf9493e7a9c4250906e400575658.webp");

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