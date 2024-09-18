"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[12630],{

/***/ 778460:
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
	slug: 'introducing-push-protocol-v1-5',
	title: 'Introducing Push Protocol v1.5 🎊',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push Protocol is elated to announce the successful completion of the security audit of our smart contracts v1.5 with Chainsafe.',
	tags: [
		'Web3',
		'Blockchain Technology',
		'Blockhain Development',
		'Push Notification',
		'Communication Tools'
	]
};
const contentTitle = 'We’re proud to announce ChainSafe has successfully completed its audit of Push Smart Contracts v1.5! Here’s what to expect from the update.';
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/introducing-push-protocol-v1-5",
  "source": "@site/blog/2022-12-13-push-protocol-v1-5/index.md",
  "title": "Introducing Push Protocol v1.5 🎊",
  "description": "Cover image of Introducing Push Protocol v1.5 🎊",
  "date": "2022-12-13T00:00:00.000Z",
  "formattedDate": "December 13, 2022",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/web-3"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain-technology"
    },
    {
      "label": "Blockhain Development",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockhain-development"
    },
    {
      "label": "Push Notification",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/push-notification"
    },
    {
      "label": "Communication Tools",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/communication-tools"
    }
  ],
  "readingTime": 4.713333333333333,
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
    "slug": "introducing-push-protocol-v1-5",
    "title": "Introducing Push Protocol v1.5 🎊",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Push Protocol is elated to announce the successful completion of the security audit of our smart contracts v1.5 with Chainsafe.",
    "tags": [
      "Web3",
      "Blockchain Technology",
      "Blockhain Development",
      "Push Notification",
      "Communication Tools"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push and Tollan Worlds Partner to Level Up Communication With Gamers",
    "permalink": "/push-website/pr-preview/pr-858/blog/push-and-tollan-worlds-partner-to-level-up-communication-with-gamers"
  },
  "nextItem": {
    "title": "Developer DAO x Push — Enhancing UX Through Web3 Communication Tools",
    "permalink": "/push-website/pr-preview/pr-858/blog/developer-dao-x-push-enhancing-ux-through-web3-communication-tools"
  }
};
const assets = {
"image": (__webpack_require__(486942)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "1) Enhancing the PUSH token utility through channel creation",
  "id": "1-enhancing-the-push-token-utility-through-channel-creation",
  "level": 2
}, {
  "value": "2) Incentivizing the network with the PUSH Protocol Fee Pool",
  "id": "2-incentivizing-the-network-with-the-push-protocol-fee-pool",
  "level": 2
}, {
  "value": "3) Enabling more flexibility and customization with time-bound channels",
  "id": "3-enabling-more-flexibility-and-customization-with-time-bound-channels",
  "level": 2
}, {
  "value": "4) Allowing for upgrades and adjustments with channel edit features",
  "id": "4-allowing-for-upgrades-and-adjustments-with-channel-edit-features",
  "level": 2
}, {
  "value": "5) Enabling notifications using The Graph subgraph",
  "id": "5-enabling-notifications-using-the-graph-subgraph",
  "level": 2
}, {
  "value": "6) Including of EIP-1271 in the Push Communicator contract",
  "id": "6-including-of-eip-1271-in-the-push-communicator-contract",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Introducing Push Protocol v1.5 🎊",
        src: (__webpack_require__(706183)/* ["default"] */ .A) + "",
        width: "1100",
        height: "578"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Protocol is elated to announce the successful completion of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/ChainSafe/audits/blob/main/EPNS/epns-protocol-11-2022.pdf",
        children: "security audit of our smart contracts v1.5"
      }), " with Chainsafe."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The completion of this audit was one of the most significant roadmap items for this year. We couldn’t be happier to share with you all that our version 1.5 of Core and Communicator smart contracts have been successfully audited by Chainsafe."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/epns-contract-v2-features-e7887fac72a6",
        children: "initial plan"
      }), " was to release Push v2 all at once in 2022. However, we decided to split up the upgrade into v1.5 and v2 in order to ensure adequate time for development, testing, and auditing. The decision allowed us to drive forward with this launch of v1.5 while continuing to build v2"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Version 1.5 of Push smart contracts includes imperative functionalities that will provide better features to users and also improve the overall utility of the PUSH token. Below, we recap six of the most critical new functionalities of the Push Core and Communicator smart contracts in v1.5."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let’s dive in!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("center", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: ".  .  ."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-enhancing-the-push-token-utility-through-channel-creation",
      children: "1) Enhancing the PUSH token utility through channel creation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["One of the most significant modifications in v1.5 of the Push smart contract can be found in the channel creation procedure. In v1 of the core contract design, channel creators were required to deposit DAI to launch a channel. In v1.5, the protocol removes the need to deposit DAI. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Instead, all channels will now be created using PUSH"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Additionally, v1.5 of Push smart contracts will also deprecate the use of AAVE, which was previously used to deposit DAI tokens and earn interests."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["All crucial transactions of core smart contracts like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "channel creations, channel reactivation or deactivation, and channel details modifications"
      }), " will require PUSH with the launch of v1.5."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-incentivizing-the-network-with-the-push-protocol-fee-pool",
      children: "2) Incentivizing the network with the PUSH Protocol Fee Pool"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Version 1.5 of Push smart contracts will introduce the concept of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Protocol Fee Pool"
      }), ". So, what exactly is a Protocol Fee Pool?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The protocol fee is a small fee amount deducted by the core smart contract for any imperative transaction like channel creation, channel reactivation, channel detail modification, and others."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As of now, the protocol fee is set to be equal to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "10 PUSH tokens"
      }), ". This value, however, can be changed by the community later using on-chain governance."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "Note for Channel Creators:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It must be noted that this is not an additional fee that is charged on top of channel creation fees. Instead, the protocol fee is simply deducted from the same amount that a channel creator chooses to stake in the protocol. For example, if you chose to stake 50 PUSH during channel creation, 10 of those 50 PUSH tokens go into Protocol Fee Pool, while the remaining goes into Channel Pool Funds that are claimable by channel owners anytime they choose to deactivate their channel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Protocol Fee Pool is going to play an imperative role in the incentivization mechanism of the core smart contracts, which will allow PUSH holders and users of the protocol to also earn incentives from the protocol in the form of PUSH."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Since the incentives will be directly tied to the protocol’s fee pool, this would mean that the more the protocol expands its boundaries, the better the incentives for users that they can claim from the contracts."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-enabling-more-flexibility-and-customization-with-time-bound-channels",
      children: "3) Enabling more flexibility and customization with time-bound channels"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With this new version of smart contracts, v1.5 will introduce another amazing feature that allows users to create time-bound channels.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Time-bound channels"
      }), " are the ones that can be created for a specific duration of time and can easily be removed once the duration is over."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Diving a bit deeper into this function: while the underlying channel creation procedure is similar, this feature allows users to pass an additional parameter — the date of expiry of the channel — to the already existing channel creation function. This is what indicates that a time-bound channel with a predefined expiration date is to be created. Once the channel’s duration is over, the channel creator can destroy the channel and get the staked tokens back."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Finally, the original creator can recreate the channel using the same address after destroying the previous time-bound channel. This was not possible till now with permanent channels."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "4-allowing-for-upgrades-and-adjustments-with-channel-edit-features",
      children: "4) Allowing for upgrades and adjustments with channel edit features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "V1.5 brings with it a much-awaited feature: the ability to modify your channel details! Descriptions, logo, information, etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "While editing channels is a simple feature, there were a specific set of reasons why this wasn’t made available until v1.5."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Ideally, modifying channel details repeatedly is not a behaviour that is encouraged. Editing and modifying channel details could allow a malicious channel owner to update details and confuse subscribers, impersonating important DeFi or governance channels, for example."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, since this feature was an important one for the community and users, we included this feature in v1.5 of the smart contracts along with the crucial steps to avoid the above-mentioned scenario."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "💰 Channel Edit Fees 💰:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Editing channel details requires fees to be deposited. This fee shall keep increasing if the channel owner repeatedly updates their channel name, logo, description, etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "⚠️ Warning Sign ⚠️:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Whenever a channel owner modifies any specific detail about their channel on the protocol, the channel shall appear with an additional note/warning in the dApp UI. This note will inform the rest of the users as well as subscribers about the channel’s old name or description."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "5-enabling-notifications-using-the-graph-subgraph",
      children: "5) Enabling notifications using The Graph subgraph"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push has developed an in-house helper function specifically for The Graph protocol that allows you to read events from the subgraph and define notifications accordingly. Once defined, they will be stored on the Subgraph in a “long string” format."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This function shall simply allow users to pass subGraph data, in the form of bytes, which is basically a combination of the Subgraph ID and Poll Interval. It emits out the event with the msg.sender and the bytes value."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The function shall only be accessible by the activated channels in the protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "6-including-of-eip-1271-in-the-push-communicator-contract",
      children: "6) Including of EIP-1271 in the Push Communicator contract"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Alright, now that we have talked about quite a few new features in the Push Core smart contracts, it’s time to discuss the Push Communicator smart contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Although the communicator contract doesn’t have a lot of new features in this version, it has one major feature worth discussing. The v1.5 of Push Communicator smart contract implements ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "EIP-1271"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "What is EIP-1271?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In very simpler terms, EIP 1271 provides a standard to verify signatures that come from the account which is a smart contract address instead of an EOA address."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["While externally-owned accounts (EOA) can easily sign messages with their associated private keys, smart contracts can’t do the same (since they don’t have any private keys). However, with the help of the EIP-1271 standard, we have an effective mechanism by which a contract can indicate whether a given signature is valid or not on its behalf. Read more about EIP-1271 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-1271",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Some of the crucial features of the Push Protocol communicator contract are now carried out off-chain. For example, opting in or opting out of a channel or sending notifications are now fairly easy procedures as all you need to do is sign a message using your EOA."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, now with EIP-1271 implementation in the communicator contract, it shall be fairly simple for wallets like Argent wallet, multi-sigs like Gnosis safe, or smart contracts to validate signatures on their behalf and use these features as well."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "Preparing for the future with Push v1.5"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A lot of development has gone into reaching this moment with Push v1.5. We’re thrilled by all the support from the community. V1.5 is one of the most important upgrades the protocol has undergone. Updates to channel creation and fees create more nuanced utility for the PUSH token and ecosystem. Time-bound and editable channels deliver much-requested customization to users. The integration with The Graph and EIP-1271 demonstrate Push’s commitment to best-in-class technology standards and partners. We’re thrilled for the Push community to welcome v1.5 soon, while we continue to build out Push v2 and deliver that to the community in the near future!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "Note:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Core and Communicator smart contracts will be upgraded to version 1.5 by January 2023. All the above-mentioned modifications and new features will come into effect post the upgrade."
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

/***/ 486942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-bfe26be1ce25a6b32da6687fe42260b7.webp");

/***/ }),

/***/ 706183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-bfe26be1ce25a6b32da6687fe42260b7.webp");

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