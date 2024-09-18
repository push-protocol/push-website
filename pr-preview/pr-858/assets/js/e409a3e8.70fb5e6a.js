"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[48410],{

/***/ 692484:
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
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(313554);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);


const frontMatter = {
	id: 'docs-notifications-tutorial-integrate-notifications-via-delivery-node',
	title: 'Integrate notifications via Delivery Node',
	hide_title: true,
	slug: './integrate-notifications-via-delivery-node',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 7,
	image: '/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_delivery_node.png'
};
const contentTitle = 'Integrate Notifications via Delivery Node';
const metadata = {
  "id": "notifications/tutorials/docs-notifications-tutorial-integrate-notifications-via-delivery-node",
  "title": "Integrate notifications via Delivery Node",
  "description": "Do check out integrating notifications section for your frontend to see other recommended ways for integrating notifications on your frontend.",
  "source": "@site/docs/notifications/05-tutorials/07-Tutorial-Integrate-Notifications-Delivery-Node.mdx",
  "sourceDirName": "notifications/05-tutorials",
  "slug": "/notifications/tutorials/integrate-notifications-via-delivery-node",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/integrate-notifications-via-delivery-node",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/07-Tutorial-Integrate-Notifications-Delivery-Node.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 7,
  "frontMatter": {
    "id": "docs-notifications-tutorial-integrate-notifications-via-delivery-node",
    "title": "Integrate notifications via Delivery Node",
    "hide_title": true,
    "slug": "./integrate-notifications-via-delivery-node",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 7,
    "image": "/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_delivery_node.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Send notification via your subgraph",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/send-notification-via-subgraph"
  },
  "next": {
    "title": "Integrate notifications via AWS SNS",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/integrate-notifications-via-aws-sns"
  }
};
const assets = {

};




const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Setup",
  "id": "setup",
  "level": 2
}, {
  "value": "Step 1️⃣ - Prerequisites",
  "id": "step-1️⃣---prerequisites",
  "level": 3
}, {
  "value": "Step 2️⃣ - Clone Push delivery node repo",
  "id": "step-2️⃣---clone-push-delivery-node-repo",
  "level": 3
}, {
  "value": "Step 3️⃣ - Environment configuration",
  "id": "step-3️⃣---environment-configuration",
  "level": 3
}, {
  "value": "Step 4️⃣ - Infra Setup: Local",
  "id": "step-4️⃣---infra-setup-local",
  "level": 3
}, {
  "value": "Step 5️⃣ - (Optional) Infra Setup: Server (Production)",
  "id": "step-5️⃣---optional-infra-setup-server-production",
  "level": 3
}, {
  "value": "Step 6️⃣ - FCM Project Setup",
  "id": "step-6️⃣---fcm-project-setup",
  "level": 3
}, {
  "value": "Step 7️⃣ - Build the delivery node project",
  "id": "step-7️⃣---build-the-delivery-node-project",
  "level": 3
}, {
  "value": "Step 8️⃣ - Start the delivery node project",
  "id": "step-8️⃣---start-the-delivery-node-project",
  "level": 3
}, {
  "value": "Step 9️⃣ - Device Registration",
  "id": "step-9️⃣---device-registration",
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
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "integrate-notifications-via-delivery-node",
      children: "Integrate Notifications via Delivery Node"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Do check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/build/integrating-notifications",
          title: "Learn how to integrate notifications from Push protocol to your frontend",
          children: "integrating notifications section"
        }), " for your frontend to see other recommended ways for integrating notifications on your frontend."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "push-delivery-nodes-is-a-whitelabel-solution-to-enable-any-app-either-mobile-desktop-or-extension-to-allow-web3-push-notifications-to-their-app",
      children: "Push delivery Nodes is a Whitelabel solution to enable any app, either mobile, desktop, or extension, to allow Web3 push notifications to their app."
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is a decentralized solutions to enable web3 to web2 bridging. It allows any platform (whether centralized or decentralized) to receive communication from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push storage nodes"
      }), ", i.e., the nodes validating and indexing all communications and tying them to your wallet address (and multi-chain identity)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_player__WEBPACK_IMPORTED_MODULE_2___default()), {
      controls: true,
      width: "100%",
      url: "https://www.youtube.com/watch?v=OlRHL3qd4oY"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The whitelabel solution of Push delivery node ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-delivery-node",
        title: "Repo of delivery node of Push protocol",
        children: "is located in this github repo"
      }), ". Below are the steps for getting started —"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1️⃣---prerequisites",
      children: "Step 1️⃣ - Prerequisites"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "MYSQL (Version >= 5.7)"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Redis (Version >= 6.0)"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Docker (For local setup)"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Google FCM Account Setup"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2️⃣---clone-push-delivery-node-repo",
      children: "Step 2️⃣ - Clone Push delivery node repo"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-zsh",
        children: "git clone https://github.com/push-protocol/push-delivery-node.git\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3️⃣---environment-configuration",
      children: "Step 3️⃣ - Environment configuration"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Refer env sample file. The MYSQL DB credentials and Redis URL needs to be updated. The remaining conf need not be edited as of now."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you use docker-compose for the local setup MYSQL DB and Redis config can be left as it is."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ts",
        children: "# REDIS\n\nREDIS_URL=redis://localhost:6379\n\n# DELIVERY NODE MYSQL DATABASE\n\nDELIVERY_NODE_DB_HOST=localhost\nDELIVERY_NODE_DB_NAME=dbname\nDELIVERY_NODE_DB_USER=user\nDELIVERY_NODE_DB_PASS=pass\nDELIVERY_NODE_DB_PORT=3306\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-4️⃣---infra-setup-local",
      children: "Step 4️⃣ - Infra Setup: Local"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The docker-compose will bring up the MYSQL, Redis, and PHPMyAdmin containers for the delivery node."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-zsh",
        children: "docker compose up\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-5️⃣---optional-infra-setup-server-production",
      children: "Step 5️⃣ - (Optional) Infra Setup: Server (Production)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Host MYSQL and Redis Separately"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Add MYSQL and Redis credentials in the .env file"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-6️⃣---fcm-project-setup",
      children: "Step 6️⃣ - FCM Project Setup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Refer ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://firebase.google.com/docs/admin/setup",
          title: "Article from google on how to setup Firebase",
          children: "Firebase docs"
        }), " to setup FCM"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Create the firebase-adminsdk.json file in the root folder and add the FCM JSON to this file"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-7️⃣---build-the-delivery-node-project",
      children: "Step 7️⃣ - Build the delivery node project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You should then be able to build the project using"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-zsh",
        children: "cd push-delivery-node\nnpm install\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-8️⃣---start-the-delivery-node-project",
      children: "Step 8️⃣ - Start the delivery node project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You should then be able to start the server using the following"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-zsh",
        children: "cd push-delivery-node\nnpm start\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-9️⃣---device-registration",
      children: "Step 9️⃣ - Device Registration"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "An endpoint is hosted as part of the delivery node project, which can be used for Device Registration."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Below is the API to create a mapping between the wallet address and the device token for which the messages need to be delivered."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<delivery_node_url>"
        }), " is the base URL of the delivery node you have hosted."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Below is the curl request of this endpoint"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-zsh",
        children: "\ncurl --location --request POST 'https://<delivery_node_url>/apis/v1/pushtokens/register' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\n    \"wallet\": \"eip155:0x35B84d6848D16415177c64D64504663b998A6ab4\",\n    \"device_token\": \"device_token\",\n    \"platform\": \"android\"\n}'\n"
      })
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