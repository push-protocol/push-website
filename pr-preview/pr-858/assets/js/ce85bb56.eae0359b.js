"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[67760],{

/***/ 178313:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'hello-world-buid-ling-a-working-epns-mobile-app',
	title: 'Hello World: BUIDLing a working EPNS Mobile app',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'It’s another day at EthGlobal HackMoney hackathon and we are back with more detail and further progress. While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first.',
	tags: [
		'Ethereum',
		'Solidity',
		'Ethglobal',
		'Notifications',
		'Developer'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/hello-world-buid-ling-a-working-epns-mobile-app",
  "source": "@site/blog/2020-05-01-hello-world-buid-ling-a-working/index.md",
  "title": "Hello World: BUIDLing a working EPNS Mobile app",
  "description": "Cover Image of Hello World: BUIDLing a working EPNS Mobile app",
  "date": "2020-05-01T00:00:00.000Z",
  "formattedDate": "May 1, 2020",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/ethereum"
    },
    {
      "label": "Solidity",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/solidity"
    },
    {
      "label": "Ethglobal",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/ethglobal"
    },
    {
      "label": "Notifications",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/notifications"
    },
    {
      "label": "Developer",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/developer"
    }
  ],
  "readingTime": 2.3866666666666667,
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
    "slug": "hello-world-buid-ling-a-working-epns-mobile-app",
    "title": "Hello World: BUIDLing a working EPNS Mobile app",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "It’s another day at EthGlobal HackMoney hackathon and we are back with more detail and further progress. While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first.",
    "tags": [
      "Ethereum",
      "Solidity",
      "Ethglobal",
      "Notifications",
      "Developer"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS push notifications are never boring",
    "permalink": "/push-website/pr-preview/pr-858/blog/epns-push-notifications-are-never-boring"
  },
  "nextItem": {
    "title": "Push Game Theory Explained",
    "permalink": "/push-website/pr-preview/pr-858/blog/push-game-theory-explained"
  }
};
const assets = {
"image": (__webpack_require__(45315)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Features",
  "id": "features",
  "level": 3
}, {
  "value": "Tech Specs",
  "id": "tech-specs",
  "level": 3
}, {
  "value": "Storing User Wallet Private Key (Offline on the User’s Device)",
  "id": "storing-user-wallet-private-key-offline-on-the-users-device",
  "level": 4
}, {
  "value": "Mapping user’s wallet address to device tokens",
  "id": "mapping-users-wallet-address-to-device-tokens",
  "level": 4
}, {
  "value": "Communicate with the epns server to verify and store these device tokens (mapped to wallet address)",
  "id": "communicate-with-the-epns-server-to-verify-and-store-these-device-tokens-mapped-to-wallet-address",
  "level": 4
}, {
  "value": "Handling Incoming Push Notifications",
  "id": "handling-incoming-push-notifications",
  "level": 4
}, {
  "value": "Fetching Previous Notifications of the User",
  "id": "fetching-previous-notifications-of-the-user",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Hello World: BUIDLing a working EPNS Mobile app",
        src: (__webpack_require__(604464)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It’s another day at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.ethglobal.co/",
        children: "EthGlobal HackMoney hackathon"
      }), " and we are back with more detail and further progress."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "While most of the dev project cycles start at smart contract and end at dApp, we have taken a different approach and instead are focusing on getting the EPNS mobile app and push notification server built out first."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The reasons? We are quite happy with the app specs and don’t think that will change anytime soon while we wanted to think and iterate a bit more on smart contract so we choose this route. Without further ado, Let’s dive into how we are going to create the magic in the mobile app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "features",
      children: "Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The EPNS mobile app is built using react native and provides the following features:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "App should be able to receive push notifications."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "App should be able to connect the user’s wallet (singular at the moment) in a secure manner."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "App should connect the user wallet to the push notification device tokens that are generated by Apple Push Notification Service or Android Push Notification Service."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "App should be able to send this information to the epns server in a secure format."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "App should be able to fetch user notifications (kind of like emails) that were already delivered to them."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Notification announcement Image",
        src: (__webpack_require__(583792)/* ["default"] */ .A) + "",
        width: "625",
        height: "468"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: "We all get a notification, woohoo !!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "tech-specs",
      children: "Tech Specs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Mobile push notifications use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://help.pushwoosh.com/hc/en-us/articles/360000364923-What-is-a-Device-token-",
        children: "device tokens"
      }), " for registration of the device and the push notification server then sends out mass or specific messages using these device tokens. For EPNS to work, we need to register these device tokens as well as the wallet to which they belong to."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For the EPNS Service to work, the following modules need to be built:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Storing User Wallet Private Key (Offline on the User’s Device)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Mapping user’s wallet address to device tokens"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Communicate with the epns server to verify and store these device tokens (mapped to wallet address)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Handling Incoming Push Notifications"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Fetching Previous Notifications of the User"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "storing-user-wallet-private-key-offline-on-the-users-device",
      children: "Storing User Wallet Private Key (Offline on the User’s Device)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The app needs to store the user’s wallet private key to decrypt the message received by the user and to encrypt the token registration process. This ensures that the epns server only maps the verified device tokens to the user wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Furthermore, we need to provide either biometric or passcode based security to the user in the app since the app is storing sensitive user credentials. We will also be storing these user credentials in an encrypted format, we will mostly be using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/oblador/react-native-keychain",
        children: "React-Native-Keychain"
      }), " for this."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "mapping-users-wallet-address-to-device-tokens",
      children: "Mapping user’s wallet address to device tokens"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once a user has imported the wallet, the device tokens which are generated would be mapped to the wallet of the user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "communicate-with-the-epns-server-to-verify-and-store-these-device-tokens-mapped-to-wallet-address",
      children: "Communicate with the epns server to verify and store these device tokens (mapped to wallet address)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will mostly be using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/pubkey/eth-crypto",
        children: "Eth-Crypto"
      }), " to handle the secure verification process."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Current proposal is to send the operation code as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Register"
      }), " along with the device token as the signature of the user using the above library and the public wallet address. The server will first decrypt the hash to find the public wallet address of the user and will only proceed if the public wallet address sent matches with the decrypted address of the public wallet. This ensures that spoofing can’t be done by any user to receive notifications meant for the intended recipients."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To know more about the server and it’s architecture, please head to [", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/ethereum-push-notification-system",
        children: "epns-push-notification-server repo"
      }), "]"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "handling-incoming-push-notifications",
      children: "Handling Incoming Push Notifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The push notification handling (for when the app is open) will also be built to handle notifications received by the users when they are inside the app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "fetching-previous-notifications-of-the-user",
      children: "Fetching Previous Notifications of the User"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "TBA. We are still contemplating storing a cache on the epns server or handle it alternatively, community brainstorming is welcome :)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["TLDR; try out the (not so complete work in progress) ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/ethereum-push-notification-system/epns-mobile-app",
        children: "react native"
      }), " app."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Please feel free to share your support and amazing feedback. If you liked this article, consider reading our previous posts as well!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/@epnsdapp/building-ethereum-protocol-notification-system-d406f0efdba0",
        children: "EPNS General specs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/@epnsdapp/epns-game-theory-explained-25425bbe4eae",
        children: "EPNS Game theory"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Connect with us if you have any questions!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 45315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5f410054272f99221ba0a2a927cd460c.webp");

/***/ }),

/***/ 604464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5f410054272f99221ba0a2a927cd460c.webp");

/***/ }),

/***/ 583792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-1116a57c7b82892a0f405a8dfc0540b2.webp");

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