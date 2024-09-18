"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[80877],{

/***/ 845404:
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
	slug: 'recreating-web2-communication-channels-in-web3-using-push',
	title: 'Recreating Web2 Communication Channels in Web3 Using Push👥',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The ability to communicate effectively with users is a crucial aspect of any decentralized application or service. This is where communication channels come in. Serving as a bridge between dapps and users, enabling notifications, chat messages and other forms of communication across various blockchain networks.',
	tags: [
		'Web3',
		'Blockchain',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/recreating-web2-communication-channels-in-web3-using-push",
  "source": "@site/blog/2023-03-24-recreating-web2-communication-in-in-web3/index.md",
  "title": "Recreating Web2 Communication Channels in Web3 Using Push👥",
  "description": "Cover image of Recreating Web2 Communication Channels in Web3 Using Push👥",
  "date": "2023-03-24T00:00:00.000Z",
  "formattedDate": "March 24, 2023",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/web-3"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain-technology"
    }
  ],
  "readingTime": 3.59,
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
    "slug": "recreating-web2-communication-channels-in-web3-using-push",
    "title": "Recreating Web2 Communication Channels in Web3 Using Push👥",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "The ability to communicate effectively with users is a crucial aspect of any decentralized application or service. This is where communication channels come in. Serving as a bridge between dapps and users, enabling notifications, chat messages and other forms of communication across various blockchain networks.",
    "tags": [
      "Web3",
      "Blockchain",
      "Blockchain Technology"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Protocol’s Bug Bounty Program Goes Live!",
    "permalink": "/push-website/pr-preview/pr-858/blog/push-protocol-s-bug-bounty-program-goes-live"
  },
  "nextItem": {
    "title": "Web3 & Push Protocol through the Lens of First Principle Thinking🔍",
    "permalink": "/push-website/pr-preview/pr-858/blog/web3-and-push-protocol-through-the-lens-of-first-principle-thinking"
  }
};
const assets = {
"image": (__webpack_require__(788926)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What Are Communication Channels?",
  "id": "what-are-communication-channels",
  "level": 2
}, {
  "value": "Push Protocol and Communication Channels",
  "id": "push-protocol-and-communication-channels",
  "level": 2
}, {
  "value": "Creating a Communication Channel",
  "id": "creating-a-communication-channel",
  "level": 2
}, {
  "value": "BNB Chain (Binance Channel Setup)",
  "id": "bnb-chain-binance-channel-setup",
  "level": 2
}, {
  "value": "Conclusion",
  "id": "conclusion",
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
        alt: "Cover image of Recreating Web2 Communication Channels in Web3 Using Push👥",
        src: (__webpack_require__(387679)/* ["default"] */ .A) + "",
        width: "1100",
        height: "578"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The ability to communicate effectively with users is a crucial aspect of any decentralized application or service. This is where communication channels come in. Serving as a bridge between dapps and users, enabling notifications, chat messages and other forms of communication across various blockchain networks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this article we will dive deeper into the concept of communication channels, their evolution in the current web, and how Push Protocol is being used to improve this communication process."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-are-communication-channels",
      children: "What Are Communication Channels?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A communication channel is a virtual connection that enables the exchange of information between two or more entities. In the current web, communication channels are typically software-based programs or services that facilitate the exchange of messages, images, files, or other forms of data between users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Communication channels have been a crucial part of the web since its inception. In the era of Web2, communication channels are ubiquitous and enable us to communicate with our friends, family, and colleagues in real-time. Examples of communication channels in the current web include messaging apps, social media platforms, email, and video conferencing tools like Telegram and Zoom."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Communication channels in Web2 can be divided into two categories: synchronous and asynchronous."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Synchronous"
      }), " communication channels refer to real-time communication between two or more individuals. The most common examples of synchronous communication channels include phone calls, instant messaging, and video conferencing. These channels allow people to communicate with each other in real-time."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Asynchronous"
      }), " communication channels on the other hand, refers to communication that doesn’t require real-time interactions. The most common examples of asynchronous communication channels include email, social media, and forums. These channels allow people to communicate with each other at their own convenience."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In Web2, communication channels have been used by businesses to improve customer engagement and provide better customer service. For instance, businesses can use email or social media to inform customers about product updates, promotions, and special offers. They can also use messaging apps and chatbots to provide customer support and resolve issues in real-time."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In Web3, communication channels have a similar function but operate on different infrastructures. Instead of relying on centralized servers, Web3 communication channels are built on decentralized networks, such as the Ethereum blockchain. These channels allow dapps, wallets, and services to send notifications, chat messages, and other forms of communication to their users on various blockchain networks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "At a technical level, a communication channel in Web3 typically involves the creation of a smart contract on the blockchain. The smart contract acts as an intermediary between the dapp, wallet, or service and its users, enabling messages to be sent back and forth. These messages can be encrypted to provide an additional layer of security and privacy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-protocol-and-communication-channels",
      children: "Push Protocol and Communication Channels"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Within Push Protocol, a communication channel is a service via smart contracts that facilitates messaging and notifications for Web3 users. These communication channels enable dApps, protocols, or even Web2 services to send messages to subscribers directly linked to their wallet addresses. Communication channels are designed to be chain-agnostic, meaning that they can deliver messages on any network of choice."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Protocol allows for both general chat and notifications. Users can restrict receiving notifications only from specific channels to ensure they only receive messages from approved senders. Users can opt in or out of the channels they are interested in without incurring transaction fees. The communication channels are also spam resistant and ensure that subscribers only receive messages relevant to them. This is accomplished through smart message filtering, ensuring that users only receive notifications that are relevant to their interests."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "creating-a-communication-channel",
      children: "Creating a Communication Channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Creating a communication channel on Push Protocol is a simple process that can be done using the Push dapp or smart contracts. To set up a channel, you will need the following:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A channel name"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A channel logo (an image of size 128px * 128px)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "An amount of 50 $PUSH tokens in your wallet (and some ETH)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A brief channel description (250 characters)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel CTA (call-to-action link)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Network & Alias address"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once you have created a channel on the compatible blockchain, you can enable it on other blockchain networks, such as Binance Chain (BNB)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "bnb-chain-binance-channel-setup",
      children: "BNB Chain (Binance Channel Setup)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With the recent Binance Chain (BNB) deployment, let’s look at how you can create a communication channel that seamlessly communicates with users on the BNB network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You must complete two straightforward steps to set up a channel alias address for the Binance Chain. First, select the Binance Chain and provide the correct alias address for the channel during its creation. Second, you need to verify the alias address on the Binance Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It’s essential to note that the alias verification procedure is part of the channel creation process, and verification must occur on the selected chain. This procedure ensures that the alias address provided during channel creation actually belongs to the channel owner. Once the verification is complete, the channel owner can use their alias address to communicate with subscribers on the Binance Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In practice, the verification process involves"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Logging into the dApp with the same address provided as the Alias Address during channel creation"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Navigating to the Create Channel menu"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Clicking the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Verify Alias Address"
        }), " button"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once the verification transaction is approved on the Binance Chain, the alias address is successfully verified on the Binance Chain and linked with the Ethereum network channel. The channel owner can access their channel profile page and send notifications from the Binance Chain using their alias address."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It’s worth noting that delegate addresses are also useful for ensuring notifications can be sent out from wallets other than the one that created the channel. The channel creator is the only person able to add or remove delegates at any time. The communication channels’ chat feature also allows users to whitelist addresses, block addresses, and prevent spam messages. These features help ensure that communication channels remain secure and relevant to their subscribers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To learn more about Channel Aliases and Delegates, you can refer to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/concepts/push-notifications-for-web3/#what-is-a-channel-alias",
        children: "Push documentation here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Communication channels play a crucial role in enabling decentralized applications and services to communicate with their users. Push Protocol offers a chain-agnostic solution that enables communication across ecosystems and networks. Following the straightforward steps outlined in this section, you can easily set up a communication channel on one of the compatible chains and communicate seamlessly."
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

/***/ 788926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fbc2825d86f8927c8dd90eeaa12c6fac.webp");

/***/ }),

/***/ 387679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fbc2825d86f8927c8dd90eeaa12c6fac.webp");

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