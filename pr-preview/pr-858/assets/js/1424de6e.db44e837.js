"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[74256],{

/***/ 874036:
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
	slug: 'understanding-delivery-nodes',
	title: 'Understanding Delivery Nodes🚂',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'To fully grasp the concept of push notifications and messages, it is essential to first understand the role of delivery nodes in a communication protocol. Delivery nodes are endpoints where messages are sent and received. They can be physical devices, applications, or servers and are tasked with relaying messages from one point to another.',
	tags: [
		'Web3',
		'Push Protocol',
		'Delivery Nodes'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/understanding-delivery-nodes",
  "source": "@site/blog/2023-04-19-understanding-delivery-nodes/index.md",
  "title": "Understanding Delivery Nodes🚂",
  "description": "Cover image of Understanding Delivery Nodes🚂",
  "date": "2023-04-19T00:00:00.000Z",
  "formattedDate": "April 19, 2023",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/web-3"
    },
    {
      "label": "Push Protocol",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/push-protocol"
    },
    {
      "label": "Delivery Nodes",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/delivery-nodes"
    }
  ],
  "readingTime": 4.77,
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
    "slug": "understanding-delivery-nodes",
    "title": "Understanding Delivery Nodes🚂",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "To fully grasp the concept of push notifications and messages, it is essential to first understand the role of delivery nodes in a communication protocol. Delivery nodes are endpoints where messages are sent and received. They can be physical devices, applications, or servers and are tasked with relaying messages from one point to another.",
    "tags": [
      "Web3",
      "Push Protocol",
      "Delivery Nodes"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Shaping The Future of The DEX User Experience | Push x ShapeShift🦊",
    "permalink": "/push-website/pr-preview/pr-858/blog/shaping-the-future-of-the-dex-user-experience-push-x-shape-shift"
  },
  "nextItem": {
    "title": "Push Protocol Selected as Communication Partner for dApp Store Kit! 🔔💜",
    "permalink": "/push-website/pr-preview/pr-858/blog/push-protocol-selected-as-communication-partner-for-d-app-store-kit"
  }
};
const assets = {
"image": (__webpack_require__(93590)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Types of Delivery Nodes in Communication Protocols",
  "id": "types-of-delivery-nodes-in-communication-protocols",
  "level": 2
}, {
  "value": "User Devices:",
  "id": "user-devices",
  "level": 3
}, {
  "value": "Application Servers:",
  "id": "application-servers",
  "level": 3
}, {
  "value": "Message Brokers:",
  "id": "message-brokers",
  "level": 3
}, {
  "value": "Cloud Messaging Services:",
  "id": "cloud-messaging-services",
  "level": 3
}, {
  "value": "The Train Analogy🚂",
  "id": "the-train-analogy",
  "level": 2
}, {
  "value": "Key Features of Push Notifications in Communication Protocols",
  "id": "key-features-of-push-notifications-in-communication-protocols",
  "level": 2
}, {
  "value": "Cloud Messaging Services for Real-time Push Notifications",
  "id": "cloud-messaging-services-for-real-time-push-notifications",
  "level": 3
}, {
  "value": "Firebase Cloud Messaging (FCM):",
  "id": "firebase-cloud-messaging-fcm",
  "level": 3
}, {
  "value": "Alternative Cloud Messaging Services:",
  "id": "alternative-cloud-messaging-services",
  "level": 3
}, {
  "value": "The 5 Core Components of Push Chat",
  "id": "the-5-core-components-of-push-chat",
  "level": 2
}, {
  "value": "1. Push Tokens Service: Device Token Management",
  "id": "1-push-tokens-service-device-token-management",
  "level": 3
}, {
  "value": "2. Feed Processor Service: Message Payload Distribution",
  "id": "2-feed-processor-service-message-payload-distribution",
  "level": 3
}, {
  "value": "3. Push Message Service: Message Transmission",
  "id": "3-push-message-service-message-transmission",
  "level": 3
}, {
  "value": "4. FCM Service: Delivering Messages to Devices",
  "id": "4-fcm-service-delivering-messages-to-devices",
  "level": 3
}, {
  "value": "5. Authentication Service: Securing Communication",
  "id": "5-authentication-service-securing-communication",
  "level": 3
}, {
  "value": "Build With Push Delivery Nodes",
  "id": "build-with-push-delivery-nodes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
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
        alt: "Cover image of Understanding Delivery Nodes🚂",
        src: (__webpack_require__(386707)/* ["default"] */ .A) + "",
        width: "1100",
        height: "578"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To fully grasp the concept of push notifications and messages, it is essential to first understand the role of delivery nodes in a communication protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Delivery nodes are endpoints where messages are sent and received. They can be physical devices, applications, or servers and are tasked with relaying messages from one point to another."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this blog post, we will explore the various types of delivery nodes and their involvement in push notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "types-of-delivery-nodes-in-communication-protocols",
      children: "Types of Delivery Nodes in Communication Protocols"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Delivery nodes in communication protocols can be classified into the following categories:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "User devices"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Application servers"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Message brokers"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Cloud messaging services"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "user-devices",
      children: "User Devices:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "User devices are the most prevalent type of delivery node. These devices, including smartphones, tablets, and computers, receive messages from application servers and display them to the user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "application-servers",
      children: "Application Servers:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Application servers serve as intermediaries between a user device and the message source, ensuring that messages are delivered to the correct device and that the device can display the message. They perform additional functions such as message processing and storage, and may also provide features like message filtering or user authentication. Application servers are primarily responsible for delivering messages to the intended recipients."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "message-brokers",
      children: "Message Brokers:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Message brokers act as intermediaries between different applications and services, receiving messages from the source and forwarding them to the appropriate destination. They provide a middleware layer that facilitates efficient and reliable message delivery. Unlike application servers, message brokers do not process or store messages, but instead route messages between different applications or services based on their intended destination. They may also perform additional functions like message filtering or message transformation to ensure successful delivery."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "cloud-messaging-services",
      children: "Cloud Messaging Services:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Cloud messaging services are delivery nodes that send push notifications to user devices. These services act as intermediaries between the application server and the user device, processing and delivering messages from the application server to the user device through push notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "the-train-analogy",
      children: "The Train Analogy🚂"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Delivery nodes in communication protocols can be compared to the different components of a train system."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Cloud messaging services"
      }), " are like the train tracks that connect different destinations. They provide a reliable and efficient route for messages to travel between different devices and services."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Application servers"
      }), " are like the trains that run on the tracks, carrying messages to their intended destinations. They ensure that messages are delivered to the correct device and can be displayed to the user. Application servers also perform additional functions like message processing and storage, as well as providing features like message filtering and user authentication."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Message brokers"
      }), " are like the engines that propel the trains, ensuring they are running efficiently and reliably. The message brokers act as intermediaries between different applications and services, providing a middleware layer that facilitates efficient and reliable message delivery. Message brokers may also perform additional functions like message filtering or message transformation to ensure successful delivery."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "User devices"
      }), " are like train destinations, which receive the messages and display them to the users. They are the ultimate destination of the messages, and it is important that they receive the messages in a reliable and efficient manner."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Together, these delivery nodes work together to enable seamless and secure communication in a communication protocol. By understanding the different roles of each component and how they work together, businesses and organizations can implement effective messaging solutions that meet their specific communication needs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "key-features-of-push-notifications-in-communication-protocols",
      children: "Key Features of Push Notifications in Communication Protocols"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push notifications are a crucial feature of modern communication protocols as they enable real-time updates to be delivered directly to a user’s device even when the application is inactive. To enable push notifications, several key components must work together."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "cloud-messaging-services-for-real-time-push-notifications",
      children: "Cloud Messaging Services for Real-time Push Notifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Different cloud messaging services are available to enable real-time push notifications in applications. Firebase Cloud Messaging (FCM), Apple Push Notification Service (APNS), and Amazon Simple Notification Service (SNS) are some of the popular options that provide similar functionality for sending real-time updates to user devices."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "firebase-cloud-messaging-fcm",
      children: "Firebase Cloud Messaging (FCM):"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "One popular cloud messaging service is Firebase Cloud Messaging (FCM), a cross-platform messaging service that supports real-time messaging for Android, iOS, and web applications. FCM is a reliable and efficient way to send push notifications to user devices, making it ideal for applications that require real-time updates."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To utilize FCM, an application must first integrate the FCM SDK, which provides the required functionality for sending and receiving messages. Once the SDK is integrated, the application can send messages to FCM using the FCM API."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The FCM API enables applications to send messages to individual devices, groups of devices, or topics. The ‘topics’ feature allows messages to be transmitted to multiple devices subscribed to a specific topic. This simplifies the process of messaging groups of users based on their interests or preferences."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Upon receiving a message, FCM processes and delivers it as a push notification to the user device, which then displays the notification, providing real-time updates."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "alternative-cloud-messaging-services",
      children: "Alternative Cloud Messaging Services:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Apart from FCM, other cloud messaging services, such as Apple Push Notification Service (APNS) and Amazon Simple Notification Service (SNS), are available. These services offer similar functionality to FCM, allowing applications to send real-time push notifications to user devices."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "the-5-core-components-of-push-chat",
      children: "The 5 Core Components of Push Chat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Protocol is designed to allow developers to build messaging applications with a highly scalable, secure, and efficient messaging system. It relies on several services that make up the delivery nodes that handle the transmission of messages from sender to receiver."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-push-tokens-service-device-token-management",
      children: "1. Push Tokens Service: Device Token Management"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The first service in the Push Protocol is the Push Tokens Service. This crucial component is tasked with managing the registration of device tokens and their corresponding wallet addresses. When a user installs a messaging application, the Push Tokens Service generates a unique device token for their device and links it with their wallet address. This information is then stored in a database for future reference."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-feed-processor-service-message-payload-distribution",
      children: "2. Feed Processor Service: Message Payload Distribution"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The next key service is the Feed Processor Service, which processes incoming feeds containing messages and data (also known as message payloads) along with recipient wallet addresses. This service retrieves the device tokens linked to the recipient wallet addresses from the Push Tokens Service and organizes them into batches based on the messaging platform’s maximum size allowance. Each batch of device tokens and its corresponding message payload are then dispatched to the Push Message Service."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-push-message-service-message-transmission",
      children: "3. Push Message Service: Message Transmission"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Message Service is at the heart of the message transmission process. Upon receiving batches of device tokens and message payloads from the Feed Processor Service, the Push Message Service stores this data in a database. The Push Message Service then processes the messages in batches, forwarding them to the appropriate devices via Firebase Cloud Messaging (FCM)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-fcm-service-delivering-messages-to-devices",
      children: "4. FCM Service: Delivering Messages to Devices"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The FCM Service is responsible for ensuring that messages reach their intended devices. Utilizing the Firebase Cloud Messaging platform, it sends the message payload to the device tokens provided by the Push Message Service. The FCM Service subsequently receives a response from FCM, indicating whether each message was successfully delivered. In a failed delivery, the FCM Service forwards the device token to the Push Tokens Service for removal."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "5-authentication-service-securing-communication",
      children: "5. Authentication Service: Securing Communication"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The final puzzle piece of the process is the Authentication (Auth) Service. This service generates and administers server tokens to authenticate communication between the various services aforementioned."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For each wallet address that wants to receive messages, it must first request a token from the Auth Service. The Auth Service then generates a unique server token and associates it with a secret key for that wallet address. This information is stored in a database, and the server token is made available to the other services for authentication purposes when making requests."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With all these services working together, messages can be sent from one wallet to another through the messaging platform. The Feed Processor Service first processes the message, retrieves the recipient device tokens from the Push Tokens Service, and sends them to the Push Message Service. The Push Message Service then sends the messages to the devices using the FCM Service, which reports whether the message was delivered successfully or not. The Auth Service ensures that communication between the services is secure and authenticated."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "build-with-push-delivery-nodes",
      children: "Build With Push Delivery Nodes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To begin building with Push Delivery Nodes, read up on our documentation specifically for it here:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["👉👉👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/tutorials/integrate-notifications-via-delivery-node/",
        children: "https://push.org/docs/notifications/tutorials/integrate-notifications-via-delivery-node/"
      })]
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

/***/ 93590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ec42467b79df63a6f8f2ddd3d987659f.webp");

/***/ }),

/***/ 386707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ec42467b79df63a6f8f2ddd3d987659f.webp");

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