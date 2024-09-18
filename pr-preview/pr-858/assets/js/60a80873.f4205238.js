"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[28164],{

/***/ 985569:
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);
/* harmony import */ var _site_src_components_LoomEmbed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671269);


const frontMatter = {
	id: 'docs-notifications-tutorial-advance-create-your-channel-using-safe',
	title: 'Advance - Create your channel using Safe',
	hide_title: true,
	slug: './create-your-channel-using-safe',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_notifications_tutorial_advance_create_your_channel_using_safe--advance_-_create_your_channel_using_safe.png'
};
const contentTitle = 'Creating a Channel using Safe';
const metadata = {
  "id": "notifications/tutorials/docs-notifications-tutorial-advance-create-your-channel-using-safe",
  "title": "Advance - Create your channel using Safe",
  "description": "This is an advance tutorial which assumes your knowledge of web3 to be of intermediate level. At the very least, you should be aware of what is a safe, multisig, EOA and smart contract wallets.",
  "source": "@site/docs/notifications/05-tutorials/03-Tutorial-Create-Channel-Using-Safe.mdx",
  "sourceDirName": "notifications/05-tutorials",
  "slug": "/notifications/tutorials/create-your-channel-using-safe",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/create-your-channel-using-safe",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/03-Tutorial-Create-Channel-Using-Safe.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "id": "docs-notifications-tutorial-advance-create-your-channel-using-safe",
    "title": "Advance - Create your channel using Safe",
    "hide_title": true,
    "slug": "./create-your-channel-using-safe",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 3,
    "image": "/assets/docs/previews/docs_notifications_tutorial_advance_create_your_channel_using_safe--advance_-_create_your_channel_using_safe.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Enabling channel on other chains",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/enabling-channel-on-other-chains"
  },
  "next": {
    "title": "Token transfer notification from smart contract",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/token-transfer-notification-from-smart-contract"
  }
};
const assets = {

};





const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Setup",
  "id": "setup",
  "level": 2
}, {
  "value": "Step 1️⃣ - Connect Push dApp to Safe",
  "id": "step-1️⃣---connect-push-dapp-to-safe",
  "level": 3
}, {
  "value": "Step 2️⃣ - Create the Channel",
  "id": "step-2️⃣---create-the-channel",
  "level": 3
}, {
  "value": "Step 3️⃣ - Signing and Initiating channel creation transaction",
  "id": "step-3️⃣---signing-and-initiating-channel-creation-transaction",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "creating-a-channel-using-safe",
      children: "Creating a Channel using Safe"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "This is an advance tutorial which assumes your knowledge of web3 to be of intermediate level. At the very least, you should be aware of what is a safe, multisig, EOA and smart contract wallets."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "While you can use an EOA for creating a channel, that's not the only option."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Channels, on the Push protocol, can also be created using a multi-sig contract. Once created, that contract shall be the owner of that channel and any channel action can be performed after the approval of the required signers of that particular multi-sig contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this quick example, we shall learn to create a channel on Push using a Safe (instead of a simple EOA)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Create Channel using Safe| Tutorial | Push Notifications | Push
  Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Before we proceed with the actual steps of connecting the safe to the Push dapp and creating a channel, let's quickly understand the prerequisites:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Create your own safe with the right set of owners and policies."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Fund your safe with at least 50 PUSH tokens. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "This amount of PUSH is required for channel creation."
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Initiate a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "contract interaction"
        }), " from your safe itself to trigger the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "approve()"
        }), " function of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://etherscan.io/token/0xf418588522d5dd018b425e472991e52ebbeeeeee",
          children: "Push token"
        }), " with the following values for the argument:"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "spender (address) :0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE - EPNSCore Contract"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "rawAmount (uint256) - 50 * 10^18 PUSH tokens -> Channel Creation Fees"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is important to ensure that the core contract is allowed to use 50 PUSH tokens from the safe for the successful creation of the channel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Sample $PUSH approval transaction from SAFE",
        src: (__webpack_require__(159270)/* ["default"] */ .A) + "",
        title: "A sample of how PUSH approval transaction looks like from SAFE",
        width: "697",
        height: "767"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "once you have ensured all the prerequisites are completed, let's move forward with creating a channel with the safe using the following steps —"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1️⃣---connect-push-dapp-to-safe",
      children: "Step 1️⃣ - Connect Push dApp to Safe"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["a. Open a new tab and goto ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org",
        title: "Production dApp of Push Protocol",
        children: "Push dApp"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["b. Select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Wallet Connect"
      }), " as an option to connect your wallet to the dapp and Copy the connection link. (Keep this link handy as we will use it soon)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["c. Open a new tab and go to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://safe.global/",
        title: "Production dApp of Safe",
        children: "Safe"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "d. Once you have connected with your safe on the safe app, go to the apps section at the left sidebar of the safe app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "e. Search for the Wallet connect app and click on it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["f. Paste the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "connection link"
      }), " (from step b) in the given Wallet connect box."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "You should now be connected to Push dapp from Safe."
      }), " Below is a quick video of the entire process of connecting your safe to Push dapp 👇"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_LoomEmbed__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      embedURL: "https://www.loom.com/embed/a08d946e81bc48e88f24874ebbfd0939?sid=17d62549-b889-4524-b6a5-ea5ff28351d2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2️⃣---create-the-channel",
      children: "Step 2️⃣ - Create the Channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now that you are connected to the dapp, creating a channel using a safe is an exactly similar process as it was using an EOA account. Follow this step by step guide to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .AImp */ .Yo, {
        href: "/docs/notifications/tutorials/create-your-channel/#setup-channel",
        title: "Setup your notification channel via Push protocol",
        children: "setup your channel"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3️⃣---signing-and-initiating-channel-creation-transaction",
      children: "Step 3️⃣ - Signing and Initiating channel creation transaction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The only difference in creating a channel with safe is the fact that every transaction must be signed and executed on the safe app itself."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Therefore, once the channel details are entered and the transaction is initiated, it's time for the required number of owners to sign and approve this transaction from the safe app to execute it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After the successful execution of the transaction, your channel will be created on the Push dapp and will be owned by the safe(and its owners)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Remember in order to access the channel's profile page, you must log in to the dapp from the safe itself."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_LoomEmbed__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      embedURL: "https://www.loom.com/embed/388b7a807f5c4bc3b8e7538c90a717a8?sid=fcf38949-efbb-4197-a28e-7cdccaa5d828"
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

/***/ 671269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(944404);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
// React + Web3 Essentials
// External Components
const LoomEmbed=_ref=>{let{embedURL}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoomWrapper,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{src:embedURL,frameBorder:"0",allowFullScreen:true,style:{width:'100%',height:'100%',display:'block',margin:'auto',border:'none'}})});};const LoomWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.div.withConfig({displayName:"LoomEmbed__LoomWrapper",componentId:"sc-lg5kbk-0"})(["padding-bottom:56.25%;position:relative;& iframe{position:absolute;}"]);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoomEmbed);

/***/ }),

/***/ 159270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pushTransactionFormSafe-307e833df57f432edf4624ee0c877a96.png");

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