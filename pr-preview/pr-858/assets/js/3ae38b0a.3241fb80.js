"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[28236],{

/***/ 254506:
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
	id: 'docs-notifications-tutorial-integrate-notifications-via-aws-sns',
	title: 'Integrate notifications via AWS SNS',
	hide_title: true,
	slug: './integrate-notifications-via-aws-sns',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 8,
	image: '/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_aws_sns.png'
};
const contentTitle = 'Integrate Notifications via AWS SNS';
const metadata = {
  "id": "notifications/tutorials/docs-notifications-tutorial-integrate-notifications-via-aws-sns",
  "title": "Integrate notifications via AWS SNS",
  "description": "Notifications via AWS SNS is more of a Web2.5 approach than Web3. Do check out integrating notifications section for your frontend to see other recommended ways for integrating notifications on your frontend.",
  "source": "@site/docs/notifications/05-tutorials/08-Tutorial-Integrate-Notifications-AWS-SNS.mdx",
  "sourceDirName": "notifications/05-tutorials",
  "slug": "/notifications/tutorials/integrate-notifications-via-aws-sns",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/integrate-notifications-via-aws-sns",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/08-Tutorial-Integrate-Notifications-AWS-SNS.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 8,
  "frontMatter": {
    "id": "docs-notifications-tutorial-integrate-notifications-via-aws-sns",
    "title": "Integrate notifications via AWS SNS",
    "hide_title": true,
    "slug": "./integrate-notifications-via-aws-sns",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 8,
    "image": "/assets/docs/previews/docs_notifications_tutorial--integrate_notifications_via_aws_sns.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Integrate notifications via Delivery Node",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/integrate-notifications-via-delivery-node"
  },
  "next": {
    "title": "Concepts",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/concepts"
  }
};
const assets = {

};



const toc = [{
  "value": "Integration process",
  "id": "integration-process",
  "level": 2
}, {
  "value": "Step 1️⃣ - Implement webhook",
  "id": "step-1️⃣---implement-webhook",
  "level": 3
}, {
  "value": "Step 2️⃣ - Test endpoint",
  "id": "step-2️⃣---test-endpoint",
  "level": 3
}, {
  "value": "Step 3️⃣ - Get whitelisted",
  "id": "step-3️⃣---get-whitelisted",
  "level": 3
}, {
  "value": "Push SNS Boilerplate",
  "id": "push-sns-boilerplate",
  "level": 2
}, {
  "value": "SNS Sample Messages",
  "id": "sns-sample-messages",
  "level": 2
}, {
  "value": "Subscription Confirmation",
  "id": "subscription-confirmation",
  "level": 3
}, {
  "value": "Notification",
  "id": "notification",
  "level": 3
}, {
  "value": "Message",
  "id": "message",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
      id: "integrate-notifications-via-aws-sns",
      children: "Integrate Notifications via AWS SNS"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Notifications via AWS SNS is more of a Web2.5 approach than Web3. Do check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/notifications/build/integrating-notifications",
          title: "Learn how to integrate notifications from Push protocol to your frontend",
          children: "integrating notifications section"
        }), " for your frontend to see other recommended ways for integrating notifications on your frontend."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "SNS module for Push delivery node allows any developer to receive notifications, chats, or any other form of web3 communication directly to the platform they are building with the help of webhooks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hosted SNS Module is a mid-level solution that eliminates all the heavy load of running a node or syncing information and gives you webhooks that you implement to start receiving notifications, chats, or any other web3 communication in your software."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "integration-process",
      children: "Integration process"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Integrating the SNS module into your code takes less than 10 mins and contains just 3 steps:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1️⃣---implement-webhook",
      children: "Step 1️⃣ - Implement webhook"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Implement a webhook to listen to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sns-examples.html",
        title: "Example of AWS SNS",
        children: "AWS SNS"
      }), ". Here’s a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-sns-boilerplate",
        title: "Push SNS boilerplate repo",
        children: "boilerplate"
      }), " along with specs to get you npm installed and running."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2️⃣---test-endpoint",
      children: "Step 2️⃣ - Test endpoint"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You will need to open an endpoint either at a dedicated IP that listens to SNS or, if you are testing locally, have to expose the public endpoint for which tons of software is available."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["For testing locally, You can also use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://ngrok.com/download",
          title: "ngrok download link",
          children: "ngrok"
        }), " to expose the public endpoint. If you use this with the boilerplate, the port needs to be 6000. The ngrok URL is now the SNS endpoint required in step 3."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3️⃣---get-whitelisted",
      children: "Step 3️⃣ - Get whitelisted"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Once you set up this, you need to contact us by either shouting / tagging us on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushprotocol",
        title: "Invite link to Push Discord server",
        children: "Push Discord server"
      }), ". We need this as the SNS module requires whitelisting of your webhook endpoint."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-sns-boilerplate",
      children: "Push SNS Boilerplate"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For your reference, here's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-sns-boilerplate",
        title: "Push AWS SNS boilerplate",
        children: "Push AWS SNS boilerplate"
      }), " which can be used as a starting point to consume the feeds from the Push SNS Topic."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here’s a timelapse of how everything works… see you on the other side 😃"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Timelapse gif of Push AWS SNS boilerplate setup",
        src: (__webpack_require__(321125)/* ["default"] */ .A) + "",
        title: "Representation of how to setup Push SNS AWS boilerplate",
        width: "1556",
        height: "1192"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "sns-sample-messages",
      children: "SNS Sample Messages"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "subscription-confirmation",
      children: "Subscription Confirmation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is a one-time message confirming if the SNS subscription is successful."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "notification",
      children: "Notification"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These are the actual notifications which need to be delivered to the end users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n    Type: 'Notification',\n    MessageId: '62918f56-9bce-5497-a23e-d422c782a01d',\n    TopicArn: 'arn:aws:sns:us-east-1:293359341249:dev-epns-notifications',\n    Message: '{\"sid\":121,\"users\":[\"0x35B84d6848D16415177c64D64504663b998A6ab4\"],\"payload\":{\"apns\":{\"payload\":{\"aps\":{\"category\":\"withappicon\",\"mutable-content\":1,\"content-available\":1}},\"fcm_options\":{\"image\":\"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx\"}},\"data\":{\"app\":\"Shunya\",\"sid\":\"121\",\"url\":\"https://shunya.fi/\",\"acta\":\"https://shunya.fi\",\"aimg\":\"https://shunya.fi/_nuxt/img/shunya.cfece51.png\",\"amsg\":\"Your portfolio is up by 0.08% since yesterday.\",\"asub\":\"Assets Daily\",\"icon\":\"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx\",\"type\":\"3\",\"epoch\":\"1660554419\",\"appbot\":\"0\",\"hidden\":\"0\",\"secret\":\"\"},\"android\":{\"notification\":{\"icon\":\"@drawable/ic_stat_name\",\"color\":\"#e20880\",\"image\":\"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx\",\"default_vibrate_timings\":true}},\"notification\":{\"body\":\"Your portfolio is up by 0.08% since yesterday.\",\"title\":\"Shunya - Assets Daily\"}},\"epoch\":\"1660554419\",\"topic\":\"Notification\",\"subtopic\":\"Channel\"}',\n    Timestamp: '2022-08-15T14:37:00.408Z',\n    SignatureVersion: '1',\n    Signature: 'iqnfhnF/SsQYaqVrhAjWlCFWYoeMSftRLRrkkxje3CppCNm/CATg13ljIz0tChVa7OJEoaVI/tpUERiuhZ9wxuGmDI6ReaGORam4Yda4CC0HqfitqYG8M0AamScXgiqN9hgcGHbbitYQWWIp2vmFKC+P1j9Hq9Lz19fBlHz1/9hJwHlRfKDADqh1I15wERZZGGUu//Z+S6bnJ9k2JrektKDNRukSihSU1u07563RirE+EJ6TCxQGUY4GzuuwlOu6vj9ESsVE4mBdfxnmNLsZoVBl87KHg7/z9Uh1IJTqkdRyN5+XXg4XDE1puYr9qypfhk8abmZQIrn5obrHDe+ZBQ==',\n    SigningCertURL: 'https://sns.us-east-1.amazonaws.com/SimpleNotificationService-56e67fcb41f6fec09b0196692625d385.pem',\n    UnsubscribeURL: 'https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:293359341249:dev-epns-notifications:cc473de2-b46e-462c-95d4-178580487a26'\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Message"
      }), " is the field in the above JSON is the actual notification sent from the Push in JSON stringified format."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "message",
      children: "Message"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "When converted to JSON, a sample message looks like the one below."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "{\n\t\"sid\": 121,\n\t\"users\": [\"0x35B84d6848D16415177c64D64504663b998A6ab4\"],\n\t\"sender\": \"0x35B84d6848D16415177c64D64504663b998A6ab4\",\n\t\"payload\": {\n\t\t\"data\": {\n\t\t\t\"app\": \"Shunya\",\n\t\t\t\"sid\": \"121\",\n\t\t\t\"url\": \"https://shunya.fi/\",\n\t\t\t\"acta\": \"https://shunya.fi\",\n\t\t\t\"aimg\": \"https://shunya.fi/_nuxt/img/shunya.cfece51.png\",\n\t\t\t\"amsg\": \"Your portfolio is up by 0.08% since yesterday.\",\n\t\t\t\"asub\": \"Assets Daily\",\n\t\t\t\"icon\": \"https://gateway.ipfs.io/ipfs/QmQM97KUTGTT6nt6Xd7xAJpdGB8adiJ1LVUJoN8RoFUYfx\",\n\t\t\t\"type\": \"3\",\n\t\t\t\"epoch\": \"1660554419\",\n\t\t\t\"appbot\": \"0\",\n\t\t\t\"hidden\": \"0\",\n\t\t\t\"secret\": \"\"\n\t\t},\n\t\t\"notification\": {\n\t\t\t\"body\": \"Your portfolio is up by 0.08% since yesterday.\",\n\t\t\t\"title\": \"Shunya - Assets Daily\"\n\t\t}\n\t},\n\t\"epoch\": \"1660554419\",\n\t\"topic\": \"Notification\",\n\t\"subtopic\": \"Channel\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "sid"
        }), " - unique id from the push"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "users"
        }), " - list of wallet addresses for which the notification needs to be delivered"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "payload"
        }), " - an actual payload that needs to be delivered to the user's device"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "epoch"
        }), " - timestamp when the payload is generated"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "topic"
        }), " - the type of payload, i.e. Notification, Chat etc"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "subtopic"
        }), " - mode of delivery, i.e. Channel or User level"]
      }), "\n"]
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

/***/ 321125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/knowYourChannel-17e31e6207fc2bada43d2874e0da6eab.png");

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