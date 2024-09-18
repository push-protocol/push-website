"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[87401],{

/***/ 185323:
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
	id: 'docs-notifications-showrunners-scaffold-deepdive',
	title: 'Scaffold Deepdive',
	hide_title: true,
	slug: './scaffold-deepdive',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_notifications_showrunners--scaffold_deepdive.png'
};
const contentTitle = 'Showrunners deepdive overview';
const metadata = {
  "id": "notifications/showrunners-scaffold/docs-notifications-showrunners-scaffold-deepdive",
  "title": "Scaffold Deepdive",
  "description": "Showrunners framework provides you with a scaffold that enables plug and play for your channel or even for multiple channels having their own logic triggers.",
  "source": "@site/docs/notifications/04-showrunners-scaffold/02-Showrunner-Scaffold-Scaffold-Deepdive.mdx",
  "sourceDirName": "notifications/04-showrunners-scaffold",
  "slug": "/notifications/showrunners-scaffold/scaffold-deepdive",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/scaffold-deepdive",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/02-Showrunner-Scaffold-Scaffold-Deepdive.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "docs-notifications-showrunners-scaffold-deepdive",
    "title": "Scaffold Deepdive",
    "hide_title": true,
    "slug": "./scaffold-deepdive",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 2,
    "image": "/assets/docs/previews/docs_notifications_showrunners--scaffold_deepdive.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Get Started",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/get-started"
  },
  "next": {
    "title": "NFT transfer trigger",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/nft-transfer-trigger"
  }
};
const assets = {

};



const toc = [{
  "value": "Channel Structure",
  "id": "channel-structure",
  "level": 2
}, {
  "value": "Mandatory files required inside Channel directory",
  "id": "mandatory-files-required-inside-channel-directory",
  "level": 3
}, {
  "value": "Optional files inside channel directory",
  "id": "optional-files-inside-channel-directory",
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
      id: "showrunners-deepdive-overview",
      children: "Showrunners deepdive overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Showrunners framework provides you with a scaffold that enables plug and play for your channel or even for multiple channels having their own logic triggers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let's understand the requirements for the folder structure inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/showrunners"
      }), " folder and how you can use them to quickly refine / debug / deploy your channels."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Ensure you have read ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/showrunners-scaffold/get-started",
          title: "Guide for getting started with Showrunners scaffold for trigger notificatons via Push protocol",
          children: "get started guide"
        }), " for Showrunners scaffold before diving in specifics of this guide as the guide relies on terminologies used over there."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Showrunners Scaffold Deepdive | Showrunners Scaffold | Push Notifications |
  Push Documentation`
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "channel-structure",
      children: "Channel Structure"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Each folder inside ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/showrunners"
      }), " is treated as their own channel and can have their own triggers for firing custom notifications."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Showrunners is designed to be a plug and play solution for your channel which means that each of the folders designated filenames are used to add-on various functionalities. You can have a look at all the files that are required to be inside your channel folder and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/tree/main/src/sample_showrunners/helloWorld",
        title: "Hello World channel with custom trigger using Showrunners scaffold",
        children: "it's structure here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Note: For example, we will assume that your are creating a channel called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "helloWorld"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "mandatory-files-required-inside-channel-directory",
      children: "Mandatory files required inside Channel directory"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "At the very least, two files are required to be inside your channel directory:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{channelname}"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Channel.js [.ts]"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For example: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "helloWorldChannel.js"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldChannel.ts",
          title: "Example file in repo for helloWorldChannel.js",
          children: "demo file here"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This file contains all the logic functions of your channel, it can for instance have a way to poll all opted in users of your channel and based on certain conditions that are met, fire notifications out."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{channelname}"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Keys.js[.ts]"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For example: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "helloWorldKeys.json"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldKeys.json",
          title: "Example file in repo for helloWorldKeys.js",
          children: "demo file here"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This file contains all your private keys that you either belong to the channel you created or have authorized the wallets to send notification on your channel's behalf."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Sample json file should look like:", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-js",
            children: "{\n  \"PRIVATE_KEY_NEW_STANDARD_1\":\n  {\n      \"PK\": \"YOUR_CHANNEL_PRIVATE_KEY_HERE\",\n      \"CHAIN_ID\": \"CHAIN_ID_HERE\"\n  },\n  \"PRIVATE_KEY_NEW_STANDARD_2\":\n  {\n      \"PK\": \"YOUR_CHANNEL_DELEGATE_1_PRIVATE_KEY_HERE\",\n      \"CHAIN_ID\": \"CHAIN_ID_HERE\"\n  },\n  \"PRIVATE_KEY_NEW_STANDARD_3\":\n  {\n      \"PK\": \"YOUR_CHANNEL_DELEGATE_2_PRIVATE_KEY_HERE\",\n      \"CHAIN_ID\": \"CHAIN_ID_HERE\"\n  },\n  }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Only one private key is required and your channel delegate key also works. Some devs prefer to not expose their channel creator key even when it's used on your server or local backend to sign the notification payload."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It's also useful when you create a channel from a smart contract or a multisig / multisafe."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These two files inside your channel folder will ensure that your channel is correctly loaded in showrunners framework but it doesn't do any magic by itself. Do ensure that your channel is triggering logic points either through cron job or through postman routes, you need ways to trigger that which leads us to the optional files that enables that."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "optional-files-inside-channel-directory",
      children: "Optional files inside channel directory"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These files while optional enables certain trigger points for your channel to operate on."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{channelname}"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Routes.js [.ts]"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For example: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "helloWorldRoutes.js"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldRoutes.ts",
          title: "Example file in repo for helloWorldRoutes.js",
          children: "demo file here"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["This file contains the routes that you will enable to ensure you are able to manually trigger notification or any other logic points in your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "{channelname}"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Channel.js [.ts]"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "You will ideally use the route of this files in postman to trigger logic functions / test them out."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{channelname}"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Jobs.js [.ts]"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For example: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "helloWorldJobs.js"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldJobs.ts",
          title: "Example file in repo for helloWorldJobs.js",
          children: "demo file here"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["This file contains your cron jobs to trigger logic points in your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "{channelname}"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Channel.js [.ts]"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["This file is based on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/node-schedule/node-schedule",
          title: "Repo of node-schedule, an advance cron job library for node",
          children: "node-schdeule"
        }), " and can handle a wide variety of automated cron jobs to enable sending wide array of notifications based on triggers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{channelname}"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "AWSSNS.js [.ts]"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For example: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "helloWorldAWSSNS.ts"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/helloWorld/helloWorldAWSSNS.ts",
          title: "Example file in repo for helloWorldAWSSNS.js",
          children: "demo file here"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This file contains the webhook helpers and handle the logic points for consuming a webhook."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["This file is based on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://aws.amazon.com/sns/",
          title: "Learn about AWS SNS",
          children: "AWS-SNS"
        }), " and can handle the variety of logics for consuming webhook to enable sending wide array of notifications based on webhook triggers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Congrats, that is all you need to know to start creating your channel and sending notifications. [Checkout examples of showrunners channel notification triggers] for different implementations of custom notification triggers that you can do to inform users of your protocol about various things."
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