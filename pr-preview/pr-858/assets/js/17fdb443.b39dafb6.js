"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[48448],{

/***/ 120345:
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
	id: 'docs-notifications-tutorial-enabling-channel-on-other-chains',
	title: 'Enabling channel on other chains',
	hide_title: true,
	slug: './enabling-channel-on-other-chains',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_notifications_tutorial--enabling_channel_on_other_chains.png'
};
const contentTitle = 'Enabling your channel on other chains';
const metadata = {
  "id": "notifications/tutorials/docs-notifications-tutorial-enabling-channel-on-other-chains",
  "title": "Enabling channel on other chains",
  "description": "The protocol is designed to enable your channel to send notifications on multiple chains, instead of only Ethereum.",
  "source": "@site/docs/notifications/05-tutorials/02-Tutorial-Enabling-Channel-Other-Chains.mdx",
  "sourceDirName": "notifications/05-tutorials",
  "slug": "/notifications/tutorials/enabling-channel-on-other-chains",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/enabling-channel-on-other-chains",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/02-Tutorial-Enabling-Channel-Other-Chains.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "docs-notifications-tutorial-enabling-channel-on-other-chains",
    "title": "Enabling channel on other chains",
    "hide_title": true,
    "slug": "./enabling-channel-on-other-chains",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 2,
    "image": "/assets/docs/previews/docs_notifications_tutorial--enabling_channel_on_other_chains.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Creating your channel",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/create-your-channel"
  },
  "next": {
    "title": "Advance - Create your channel using Safe",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/create-your-channel-using-safe"
  }
};
const assets = {

};





const toc = [{
  "value": "How to set up Channel Alias?",
  "id": "how-to-set-up-channel-alias",
  "level": 2
}, {
  "value": "Setting channel alias for different chain (Example: Polygon)",
  "id": "setting-channel-alias-for-different-chain-example-polygon",
  "level": 2
}, {
  "value": "Channel Verification on Alias Network",
  "id": "channel-verification-on-alias-network",
  "level": 3
}, {
  "value": "Step-by-Step Guide to Alias Verification",
  "id": "step-by-step-guide-to-alias-verification",
  "level": 3
}, {
  "value": "Supported chains for Channel Alias",
  "id": "supported-chains-for-channel-alias",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "enabling-your-channel-on-other-chains",
      children: "Enabling your channel on other chains"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The protocol is designed to enable your channel to send notifications on multiple chains, instead of only Ethereum."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["However, to enable a channel for sending notifications on chains other than Ethereum, the concept of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "channel alias"
      }), " plays a major role."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Check out this section to get an introduction to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/concepts/push-notifications-for-web3/#what-is-a-channel-alias",
          title: "Section covering about channel alias and some important concepts of Push protocol",
          children: "channel alias"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Enabling notification on other chains | Tutorial | Push Notifications | Push
  Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-to-set-up-channel-alias",
      children: "How to set up Channel Alias?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now that we understand channel alias, it's time to understand how one set up their channel alias address for any other chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In order to set up a channel alias address for any preferred chain, one has to go through 2 simple steps:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Selecting the chain and providing the right ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "alias address"
        }), " for the channel during channel creation itself."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Verification of the alias Address on the selected chain."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["While the first step is quite simple and happens right at the time of channel creation itself, let's try to understand how the alias verification procedure is completed to adequately set up a channel's alias, using a quick example of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Polygon chain"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "setting-channel-alias-for-different-chain-example-polygon",
      children: "Setting channel alias for different chain (Example: Polygon)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "This part of the guide assumes that you have successfully created a channel and passed the correct Polygon address as the alias address during the channel creation process."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If you haven't set up your channel yet, please read ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .AImp */ .Yo, {
          href: "/docs/notifications/tutorials/create-your-channel/",
          title: "Tutorial for creating your channel on Push protocol",
          children: "guide to creating your channel"
        }), " first. It's improtant to create your channel with the right alias address since alias can't be changed after channel creation."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now that you have the channel created successfully on the Ethereum chain, and you have passed your preferred alias address for the Polygon chain, let's quickly understand how you can verify your alias address."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "channel-verification-on-alias-network",
      children: "Channel Verification on Alias Network"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In order to ensure that the alias address provided (during channel creation) actually belongs to the owner of the channel, alias verification is included as a part of the channel creation procedure."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Additionally, a channel owner can only use his alias address to communicate with its subscribers on Polygon after the alias verification is successfully executed on the Polygon chain itself."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-by-step-guide-to-alias-verification",
      children: "Step-by-Step Guide to Alias Verification"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Verification of alias address must happen on the selected chain (in this case, Polygon) itself. Therefore, once your channel is successfully created on Ethereum, you need to switch your network to Polygon."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Make sure you have already added the Polygon network to your MetaMask. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://wiki.polygon.technology/docs/tools/wallets/metamask/config-polygon-on-metamask/",
          children: "This guide from Polygon"
        }), " helps in case you don't how to add other networks to your MetaMask."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once you have switched your network to Polygon chain, follow the steps mentioned below:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Log into the Push dApp with the same address that was set as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "alias address"
        }), " during channel creation."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Go to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Developers > Create Channel"
        }), " from the sidebar."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Verify channel alias"
        }), " button."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Approve the transaction required for Alias Verification, on Polygon chain"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That's it. Once the transaction is approved, your alias address is verified on Polygon and is now successfully set up and linked with your channel on the Ethereum chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You will now be able to access your channel profile page and be able to send notifications from Polygon using your alias address."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Video Guide for Alias Verification on Polygon Chain 👇"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_components_LoomEmbed__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      embedURL: "https://www.loom.com/embed/43c6b7d000b64dbbba2cd7a0165c5041?sid=10da4024-876d-4591-a253-7325d5458fc1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "supported-chains-for-channel-alias",
      children: "Supported chains for Channel Alias"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push protocol supports a number of different chains (EVMs) for setting channel aliases for notifications —"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalContainer */ .Bs, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalSmall */ .N4, {
        flexDirection: "column",
        maxWidth: "200px",
        onClick: () => window.open('https://ethereum.org/', '_blank'),
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalWrapper */ .FQ, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Ethereum"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
              width: "20",
              height: "28",
              viewBox: "0 0 29 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "m7.501 21.001 14-14M10.125 7.001H21.5v11.375",
                stroke: "#A0A3B1",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            })]
          })
        })
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalSmall */ .N4, {
        flexDirection: "column",
        maxWidth: "200px",
        onClick: () => window.open('https://polygon.technology/', '_blank'),
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalWrapper */ .FQ, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Polygon"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
              width: "20",
              height: "28",
              viewBox: "0 0 29 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "m7.501 21.001 14-14M10.125 7.001H21.5v11.375",
                stroke: "#A0A3B1",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            })]
          })
        })
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalSmall */ .N4, {
        flexDirection: "column",
        maxWidth: "200px",
        onClick: () => window.open('https://www.bnbchain.org/en', '_blank'),
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalWrapper */ .FQ, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "BNB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
              width: "20",
              height: "28",
              viewBox: "0 0 29 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "m7.501 21.001 14-14M10.125 7.001H21.5v11.375",
                stroke: "#A0A3B1",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            })]
          })
        })
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalSmall */ .N4, {
        flexDirection: "column",
        maxWidth: "200px",
        onClick: () => window.open('https://polygon.technology/', '_blank'),
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalWrapper */ .FQ, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Polygon zkEVM"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
              width: "20",
              height: "28",
              viewBox: "0 0 29 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "m7.501 21.001 14-14M10.125 7.001H21.5v11.375",
                stroke: "#A0A3B1",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            })]
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalSmall */ .N4, {
        flexDirection: "column",
        maxWidth: "200px",
        onClick: () => window.open('https://arbitrum.io/', '_blank'),
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ModalWrapper */ .FQ, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Arbitrum One"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
              width: "20",
              height: "28",
              viewBox: "0 0 29 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "m7.501 21.001 14-14M10.125 7.001H21.5v11.375",
                stroke: "#A0A3B1",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            })]
          })
        })
      })]
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