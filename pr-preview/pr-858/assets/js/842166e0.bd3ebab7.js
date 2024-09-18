"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[81571],{

/***/ 959855:
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
	slug: 'introducing-push-improvement-proposal-pip',
	title: 'Introducing Push Improvement Proposal (PIP)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Push (previously known as EPNS) has grown to become the leading communication layer for all Web3 actors including protocols, dapps, smart contracts, wallets, backend, and users. But, to service such a large ecosystem, there needs to be a streamlined process for improving and developing the ecosystem to meet every actor’s needs. Introducing — Push Improvement Proposals (PIP).',
	tags: [
		'Web3',
		'Blockchain',
		'Blockchain Technology',
		'Push Notification',
		'Pushprotocol'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/introducing-push-improvement-proposal-pip",
  "source": "@site/blog/2022-11-17-push-improvement-proposals/index.md",
  "title": "Introducing Push Improvement Proposal (PIP)",
  "description": "Cover image of Introducing Push Improvement Proposal (PIP)",
  "date": "2022-11-17T00:00:00.000Z",
  "formattedDate": "November 17, 2022",
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
    },
    {
      "label": "Push Notification",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/push-notification"
    },
    {
      "label": "Pushprotocol",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/pushprotocol"
    }
  ],
  "readingTime": 3.8333333333333335,
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
    "slug": "introducing-push-improvement-proposal-pip",
    "title": "Introducing Push Improvement Proposal (PIP)",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Push (previously known as EPNS) has grown to become the leading communication layer for all Web3 actors including protocols, dapps, smart contracts, wallets, backend, and users. But, to service such a large ecosystem, there needs to be a streamlined process for improving and developing the ecosystem to meet every actor’s needs. Introducing — Push Improvement Proposals (PIP).",
    "tags": [
      "Web3",
      "Blockchain",
      "Blockchain Technology",
      "Push Notification",
      "Pushprotocol"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Earnifi — Never Miss an Airdrop With Push Notifications",
    "permalink": "/push-website/pr-preview/pr-858/blog/earnifi-never-miss-an-airdrop-with-push-notifications"
  },
  "nextItem": {
    "title": "Push Protocol Allies With Boba Network to Enable Decentralized Communication",
    "permalink": "/push-website/pr-preview/pr-858/blog/push-protocol-allies-with-boba-network-to-enable-decentralized-communication"
  }
};
const assets = {
"image": (__webpack_require__(158097)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What is a PIP?",
  "id": "what-is-a-pip",
  "level": 2
}, {
  "value": "Why do PIPs matter?",
  "id": "why-do-pips-matter",
  "level": 2
}, {
  "value": "What is the lifecycle of a PIP?",
  "id": "what-is-the-lifecycle-of-a-pip",
  "level": 2
}, {
  "value": "How can builders contribute towards improving Push?",
  "id": "how-can-builders-contribute-towards-improving-push",
  "level": 2
}, {
  "value": "Come contribute to grow the Push ecosystem!",
  "id": "come-contribute-to-grow-the-push-ecosystem",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Introducing Push Improvement Proposal (PIP)",
        src: (__webpack_require__(272268)/* ["default"] */ .A) + "",
        width: "1100",
        height: "578"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "TLDR;"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The Push community can now submit proposals for standardized, community-driven improvements, specs, and standards or improvements to the Push ecosystem via Push Improvement Proposal (PIP)."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "There is now a standardized and transparent process that allows the community to review and contribute to every PIP to ensure each PIP is in the best interest of the Push ecosystem."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This will allow users to submit PIPs in a well-defined cycle, through which moderators and the community can take decisions on the proposal."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("center", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: ".  .  ."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push (previously known as EPNS) has grown to become the leading communication layer for all Web3 actors including protocols, dapps, smart contracts, wallets, backend, and users. But, to service such a large ecosystem, there needs to be a streamlined process for improving and developing the ecosystem to meet every actor’s needs. Introducing — Push Improvement Proposals (PIP)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "PIP is a new standard for proposing improvements, specs, and standards to the Push ecosystem. The goal of PIPs is to provide a standardized, community-driven improvements, specs, and standards for improving the Push ecosystem. In this way, PIPs is going to become an integral part of how the Push ecosystem grows and evolves to best serve the needs of its users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Curious to know more about what PIPs are, how they’re processed, and why they matter? Read on to find out."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-a-pip",
      children: "What is a PIP?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["PIP stands for Push Improvement Proposal. It is a standardized process that enables developers and community members alike to collaborate and make changes to the Push ecosystem. Inspired by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-1",
        children: "EIP"
      }), " (Ethereum Improvement Proposal), PIP is a step towards broadening the scope of community participation in innovating the Push ecosystem."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There are three types of PIPs:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Standard"
        }), " PIP describes any change that affects most or all Push ecosystem implementations, such as changes in core, interface, networking, or application level standards."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Meta"
        }), " PIP describes a process surrounding Push or proposes a change to (or an event in) a process. Process PIPs are like Standards Track PIPs but apply to areas other than the Push protocol itself. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Push development. Any ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "meta-PIP"
        }), " is also considered a Process PIP."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Informational"
        }), " PIP provides general guidelines or information to the Push community but does not propose a new feature. Informational PIPs do not necessarily represent a Push community consensus or recommendation, so users and implementers are free to ignore Informational PIPs or follow their advice."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "why-do-pips-matter",
      children: "Why do PIPs matter?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["PIPs play a central role in how changes happen and are documented in the Push ecosystem. They are the way for people to propose, debate, and adopt changes. There are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/PIPs/tree/main/definitions#type",
        children: "different types of PIPs"
      }), " including core PIPs for low-level protocol changes that affect consensus and improvements in API/RPC as well as PRCs for application standards. For example, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/PIPs/tree/main/definitions/Standard/PRC/Notification/Verification",
        children: "Verification Proof"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/PIPs/tree/main/definitions/Standard/PRC/Notification/Identity",
        children: "Identity"
      }), " for Notifications is described in PRC to create a standard."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-the-lifecycle-of-a-pip",
      children: "What is the lifecycle of a PIP?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Just like passing a new law, the approval process of a PIP involves various stages of discussion, editing, and review. Variations in this process are based on the type of proposal we have at hand and the timeline for discussion which might be set by the editor. In broad terms, all PIPs follow a standard process that includes the following steps:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Lifecycle",
        src: (__webpack_require__(516903)/* ["default"] */ .A) + "",
        width: "828",
        height: "439"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Ideation:"
        }), " Any ideas for new changes or development of the Push ecosystem are presented and discussed over the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://gov.push.org/c/pip/29",
          children: "Push’s governance forum"
        }), " or discord. If members find this idea worth pursuing, it is presented as a documented PIP to the larger community of Push developers."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Drafting:"
        }), " This is the first formal step in proposal development where the authors of a new idea create a technical draft of their vision. To submit a draft, authors should submit a Pull Request (PR) against an issue in the PIPs repository."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Reviewing:"
        }), " After the preliminary vetting process, a new draft is open for feedback from editors, reviewers, and any interested parties. This stage involves a large-scale audit of a given proposal where authors invite insights on their development plan from the Web3 community."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Last call:"
        }), " This is the final window for the reviewing stage after which the PIP gets finalized. The editor provides a deadline (typically two weeks), after which a given proposal will not accept any new suggestions. In case any significant changes are needed, the proposal goes back to the reviewing stage."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Final:"
        }), " After passing the last call stage, a proposal is accepted as a final or implementable standard. The only modifications at this point can be made to correct errata or add non-normative clarifications."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In certain cases, the lifecycle of a PIP can undergo special stages such as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Stagnant:"
      }), " Any proposal which remains inactive for a period of 4 months or more in the Draft/Review/Last Call state is considered stale. Such a proposal may be resurrected from this state by Authors or Editors who can move it back to an earlier status. If not resurrected, the proposal stays stagnant forever."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Withdrawn:"
      }), " If the authors of a proposal withdraw their submission, it is considered a finality that cannot be retracted. If the same idea is to be pursued at a later stage, it is launched as a new proposal."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Living:"
      }), " This is a special status designated to PIPs which are expected to undergo continued updates. Such proposals never reach a state of finality and remain in an editing loop for their whole lifecycle. An example of such a proposal is PIP-1."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-can-builders-contribute-towards-improving-push",
      children: "How can builders contribute towards improving Push?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push ecosystem is addressing a gap in critical blockchain infrastructure by enabling native communication between protocols, dapps, and wallets. Push is live on Ethereum and Polygon to power real-time uncensorable connectivity for over 100 Web3 apps and service providers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Developers can contribute to the Push ecosystem in the capacity of their interest, which includes Push protocol implementations, such as changes in core, interface, networking, or application-level standards. Also, if you’re aligned towards the meta-PIP it opens up a contribution channel for procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Push development."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Small PIP",
        src: (__webpack_require__(970241)/* ["default"] */ .A) + "",
        width: "828",
        height: "435"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "come-contribute-to-grow-the-push-ecosystem",
      children: "Come contribute to grow the Push ecosystem!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you’re interested to read more about PIPs, check out the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/PIPs",
        children: "PIPs Github"
      }), " repository where you can find additional information, including:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/PIPs/blob/main/pip-template.md",
          children: "PIP template for submission"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://gov.push.org/c/pip/29",
          children: "PIP forum"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://gov.push.org/c/pip/29",
          children: "PIP-1 — Purpose and Guidelines"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/PIPs/tree/main/definitions",
          children: "Definitions of Types, and categories of PIPs"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We invite all members interested in contributing to the future of native communication in Web3 to check out the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/pushprotocol",
        children: "Push Discord"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.push.org/c/pip/29",
        children: "PIP forum"
      }), " and come meet the pioneers behind Push."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Who knows, you just might be the author of the next chapter of Push and native communication in Web3."
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

/***/ 158097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8e4dc6c697a0b12d035d6e13ed8852f9.webp");

/***/ }),

/***/ 272268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8e4dc6c697a0b12d035d6e13ed8852f9.webp");

/***/ }),

/***/ 516903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-2900035c6631c71a840f6d3d81325546.png");

/***/ }),

/***/ 970241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-d887b39e7fd62da706bee5562330e942.webp");

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