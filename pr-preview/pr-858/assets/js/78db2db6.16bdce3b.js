"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[89202],{

/***/ 929361:
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
	slug: 'empower-your-wallet-app-or-platform-with-push-delivery-nodes',
	title: 'Empower Your Wallet, App, or Platform with Push Delivery Nodes⚡',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'Push Delivery Nodes serve as a decentralized solution for connecting web3 and web2. They allow any centralized or decentralized platform to receive communications from Push Storage Nodes, which validate and index all communications and link them to a user’s wallet address and multi-chain identit',
	tags: [
		'Web3',
		'Developer',
		'Blockchain Development',
		'Blockchain Technology',
		'Delivery Nodes'
	]
};
const contentTitle = 'The Swiftest Route to Web3 Notifications, Chats, and More Across Mobile, Desktop, and Extensions.';
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/empower-your-wallet-app-or-platform-with-push-delivery-nodes",
  "source": "@site/blog/2023-02-16-empower-your-wallet-app-or-platform/index.md",
  "title": "Empower Your Wallet, App, or Platform with Push Delivery Nodes⚡",
  "description": "Cover image of Empower Your Wallet, App, or Platform with Push Delivery Nodes⚡",
  "date": "2023-02-16T00:00:00.000Z",
  "formattedDate": "February 16, 2023",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/web-3"
    },
    {
      "label": "Developer",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/developer"
    },
    {
      "label": "Blockchain Development",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain-development"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain-technology"
    },
    {
      "label": "Delivery Nodes",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/delivery-nodes"
    }
  ],
  "readingTime": 2.56,
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
    "slug": "empower-your-wallet-app-or-platform-with-push-delivery-nodes",
    "title": "Empower Your Wallet, App, or Platform with Push Delivery Nodes⚡",
    "authors": [
      "push"
    ],
    "image": "./cover-image.png",
    "text": "Push Delivery Nodes serve as a decentralized solution for connecting web3 and web2. They allow any centralized or decentralized platform to receive communications from Push Storage Nodes, which validate and index all communications and link them to a user’s wallet address and multi-chain identit",
    "tags": [
      "Web3",
      "Developer",
      "Blockchain Development",
      "Blockchain Technology",
      "Delivery Nodes"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Getting Started With Push SDK: uiweb API🛠️",
    "permalink": "/push-website/pr-preview/pr-858/blog/getting-started-with-push-sdk-uiweb-api"
  },
  "nextItem": {
    "title": "Building a Better UX in BNB With Our 8 Launch Collaborators🚀",
    "permalink": "/push-website/pr-preview/pr-858/blog/building-a-better-ux-in-bnb-with-our-8-launch-collaborators"
  }
};
const assets = {
"image": (__webpack_require__(7666)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "What are the Delivery Nodes?",
  "id": "what-are-the-delivery-nodes",
  "level": 2
}, {
  "value": "7 Steps for Getting Started With the Delivery Node Module🌱",
  "id": "7-steps-for-getting-started-with-the-delivery-node-module",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Step 1: Clone Push delivery node repo",
  "id": "step-1-clone-push-delivery-node-repo",
  "level": 3
}, {
  "value": "Step 2: Environment configuration",
  "id": "step-2-environment-configuration",
  "level": 3
}, {
  "value": "Step 3. a: Infra setup: (local)",
  "id": "step-3-a-infra-setup-local",
  "level": 3
}, {
  "value": "Step 3. b: (Alternate) infra setup: (Production)",
  "id": "step-3-b-alternate-infra-setup-production",
  "level": 3
}, {
  "value": "Step 4: FCM project setup",
  "id": "step-4-fcm-project-setup",
  "level": 3
}, {
  "value": "Step 5: Build the delivery node project",
  "id": "step-5-build-the-delivery-node-project",
  "level": 3
}, {
  "value": "Step 6: Start the delivery node project",
  "id": "step-6-start-the-delivery-node-project",
  "level": 3
}, {
  "value": "Step 7: Device registration",
  "id": "step-7-device-registration",
  "level": 3
}, {
  "value": "Useful Links",
  "id": "useful-links",
  "level": 2
}, {
  "value": "Push Support",
  "id": "push-support",
  "level": 2
}, {
  "value": "Push SNS Module for Delivery Node",
  "id": "push-sns-module-for-delivery-node",
  "level": 2
}, {
  "value": "What’s next for Push Delivery Nodes?",
  "id": "whats-next-for-push-delivery-nodes",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Empower Your Wallet, App, or Platform with Push Delivery Nodes⚡",
        src: (__webpack_require__(141091)/* ["default"] */ .A) + "",
        width: "1600",
        height: "840"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
      children: "Simplify Web3 Notifications for Your App with Push Delivery Nodes — A One-Stop Solution for Mobile, Desktop or Extension. These Decentralized Nodes Connect Web3 and Web2, Allowing Your Platform to Receive Notifications from Validating and Indexing Storage Nodes, Tied Directly to Your Wallet Address and Multi-Chain Identity"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-are-the-delivery-nodes",
      children: "What are the Delivery Nodes?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Delivery Nodes serve as a decentralized solution for connecting web3 and web2. They allow any centralized or decentralized platform to receive communications from Push Storage Nodes, which validate and index all communications and link them to a user’s wallet address and multi-chain identity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Developers can run these nodes on their backend to connect their web2 infrastructure to web3 communication, allowing for extended communication beyond web3 wallet addresses to web2 platform users. Push Delivery Nodes enable mapping any web2 device token or platform username to a specific web3 wallet address, which can then send alerts to web2 or web2.5 platforms."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Examples of platforms that can be reached include crypto wallet apps, mobile apps, browser extensions, Telegram and Discord bots, email alerts, and more."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For a pure web3 experience, listening to Push Storage Nodes or utilizing their RPC endpoints/SDK is the best option. However, if you’re a developer looking to extend these communication experiences to centralized platforms, you need to use Push Delivery Nodes."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Docusaurus Image",
        src: (__webpack_require__(63443)/* ["default"] */ .A) + "",
        width: "1400",
        height: "1124"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "7-steps-for-getting-started-with-the-delivery-node-module",
      children: "7 Steps for Getting Started With the Delivery Node Module🌱"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "MYSQL (Version >= 5.7)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Redis (Version >= 6.0)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Docker (For local setup)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Google FCM Account Setup"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1-clone-push-delivery-node-repo",
      children: "Step 1: Clone Push delivery node repo"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Git clone can be found here: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-delivery-node.git",
        children: "https://github.com/push-protocol/push-delivery-node.git"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2-environment-configuration",
      children: "Step 2: Environment configuration"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Refer env sample file. The MYSQL DB credentials and Redis URL needs to be updated. The remaining conf need not be edited as of now."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you use docker-compose for the local setup MYSQL DB and Redis config can be left as it is."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "# REDIS\nREDIS_URL=redis://localhost:6379\n# DELIVERY NODE MYSQL DATABASE\nDELIVERY_NODE_DB_HOST=localhost\nDELIVERY_NODE_DB_NAME=dbname\nDELIVERY_NODE_DB_USER=user\nDELIVERY_NODE_DB_PASS=pass\nDELIVERY_NODE_DB_PORT=3306\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3-a-infra-setup-local",
      children: "Step 3. a: Infra setup: (local)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The docker-compose will bring up the MYSQL, Redis, and PHPMyAdmin containers for the Delivery Node."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "docker compose up\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3-b-alternate-infra-setup-production",
      children: "Step 3. b: (Alternate) infra setup: (Production)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Host MYSQL and Redis Separately"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Add MYSQL and Redis credentials in the .env file"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-4-fcm-project-setup",
      children: "Step 4: FCM project setup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Refer ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://firebase.google.com/docs/admin/setup",
          children: "https://firebase.google.com/docs/admin/setup"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Create the firebase-adminsdk.json file in the root folder and add the FCM JSON to this file"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-5-build-the-delivery-node-project",
      children: "Step 5: Build the delivery node project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You should then be able to build the project using:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "cd push-delivery-node\nnpm install\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-6-start-the-delivery-node-project",
      children: "Step 6: Start the delivery node project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You should be able to start the server using:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "cd push-delivery-node\nnpm start\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-7-device-registration",
      children: "Step 7: Device registration"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "An endpoint is hosted as part of the delivery node project, which can be used for device registration."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Below is the API to create a mapping between the wallet address and the device token for which the messages need to be delivered."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<delivery_node_url>"
        }), " is the base URL of the Delivery node you have hosted."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Below is the curl request of this endpoint"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "curl - location - request POST 'https://<delivery_node_url>/apis/v1/pushtokens/register' \\\n - header 'Content-Type: application/json' \\\n - data-raw '{\n\"wallet\": \"eip155:0x35B84d6848D16415177c64D64504663b998A6ab4\",\n\"device_token\": \"device_token\",\n\"platform\": \"android\"\n}'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "useful-links",
      children: "Useful Links"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "Delivery Node Repo Link:"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://github.com/push-protocol/push-delivery-node",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://github.com/push-protocol/push-delivery-node",
            children: "https://github.com/push-protocol/push-delivery-node"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "Demo Mobile App Repo Link:"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://github.com/push-protocol/demo-push-mobile-app",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://github.com/push-protocol/demo-push-mobile-app",
            children: "https://github.com/push-protocol/demo-push-mobile-app"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "Delivery Node Setup Video Tutorial:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .VideoContainer */ .bC, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
        width: "100%",
        height: "100%",
        style: {
          borderRadius: "32px"
        },
        src: "https://www.youtube.com/embed/OlRHL3qd4oY",
        title: "Get started with Push Delivery Nodes | #web3 communication",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      children: "PUSH Documentation:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
      href: "/docs/notifications/tutorials/integrate-notifications-via-delivery-node/",
      children: "Integrating notifications via Push Delivery Nodes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-support",
      children: "Push Support"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If at any point you find yourself needing assistance and help with getting set up, Push has a team of helpful developers ready when you need it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Come join us in Discord where you can get assistance and meet other devs who are building with Push👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushprotocol",
        children: "https://discord.com/invite/pushprotocol"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-sns-module-for-delivery-node",
      children: "Push SNS Module for Delivery Node"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We have also launched the Push SNS Module for the delivery nodes, which instantly allows any developer to receive notifications, chats, or any other form of web3 communication directly to the platform they are building with the help of webhooks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can find more details here."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "whats-next-for-push-delivery-nodes",
      children: "What’s next for Push Delivery Nodes?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Dockerization"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Analytics"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Monitoring APIs"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Support Push Chat"
      }), "\n"]
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

/***/ 7666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ede90200ac248a620781b6d4c8808ee5.png");

/***/ }),

/***/ 141091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ede90200ac248a620781b6d4c8808ee5.png");

/***/ }),

/***/ 63443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-a62e854efaaef056a9b784c16558a4a1.png");

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