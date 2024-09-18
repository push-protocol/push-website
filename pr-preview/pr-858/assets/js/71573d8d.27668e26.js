"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[86810],{

/***/ 531200:
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
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641622);


const frontMatter = {
	id: 'docs-notifications-ns-notif-standards-advance',
	title: 'Notification Standards (Advance)',
	hide_title: true,
	slug: './notification-standards-advance',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_notifications_ns_notif_standards_advance--notification_standards_(advance).png'
};
const contentTitle = 'What is a Notification in Push protocol?';
const metadata = {
  "id": "notifications/notification-standards/docs-notifications-ns-notif-standards-advance",
  "title": "Notification Standards (Advance)",
  "description": "Notifications follow composable blocks that helps achieve modular structure and helps in building on top of them. Any developer can utilize the notification protocol to send out notifications (on-chain or off-chain) to their users from a variety of platforms including web3 protocols, smart contracts, dapps, backend, etc.",
  "source": "@site/docs/notifications/07-notification-standards/02-Notification-Standards-Advance.mdx",
  "sourceDirName": "notifications/07-notification-standards",
  "slug": "/notifications/notification-standards/notification-standards-advance",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/notification-standards/notification-standards-advance",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/07-notification-standards/02-Notification-Standards-Advance.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "docs-notifications-ns-notif-standards-advance",
    "title": "Notification Standards (Advance)",
    "hide_title": true,
    "slug": "./notification-standards-advance",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 2,
    "image": "/assets/docs/previews/docs_notifications_ns_notif_standards_advance--notification_standards_(advance).png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Notification Standards (Basic)",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/notification-standards/notification-standards-basic"
  },
  "next": {
    "title": "Push Smart Contracts",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/push-smart-contracts"
  }
};
const assets = {

};




const toc = [{
  "value": "Composability Structure",
  "id": "composability-structure",
  "level": 2
}, {
  "value": "Notification Verification Proof",
  "id": "notification-verification-proof",
  "level": 2
}, {
  "value": "Specifications",
  "id": "specifications",
  "level": 3
}, {
  "value": "Understanding Verification Proof",
  "id": "understanding-verification-proof",
  "level": 3
}, {
  "value": "Verification Proof Examples",
  "id": "verification-proof-examples",
  "level": 3
}, {
  "value": "Notification Identity",
  "id": "notification-identity",
  "level": 2
}, {
  "value": "Specifications",
  "id": "specifications-1",
  "level": 3
}, {
  "value": "Identity Examples",
  "id": "identity-examples",
  "level": 3
}, {
  "value": "Notification Payload",
  "id": "notification-payload",
  "level": 2
}, {
  "value": "Specifications",
  "id": "specifications-2",
  "level": 3
}, {
  "value": "Payload Examples",
  "id": "payload-examples",
  "level": 3
}, {
  "value": "Notification Content",
  "id": "notification-content",
  "level": 2
}, {
  "value": "Specifications",
  "id": "specifications-3",
  "level": 3
}, {
  "value": "Push Notification markdown live playground",
  "id": "push-notification-markdown-live-playground",
  "level": 3
}, {
  "value": "Content Examples",
  "id": "content-examples",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "what-is-a-notification-in-push-protocol",
      children: "What is a Notification in Push protocol?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Notifications follow composable blocks that helps achieve modular structure and helps in building on top of them. Any developer can utilize the notification protocol to send out notifications (on-chain or off-chain) to their users from a variety of platforms including web3 protocols, smart contracts, dapps, backend, etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These notifications are tied to wallet address of the user and are indexed by push nodes allowing any crypto frontend such as wallet, dapp or mobile app to query and display these notifications for the wallet users along with sending them out as push notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Notification Composable Block",
        src: (__webpack_require__(454504)/* ["default"] */ .A) + "",
        title: "Representation of composable blocks of notification",
        width: "1280",
        height: "640"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Notification Standards (Advance) | Push Notifications | Push Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "composability-structure",
      children: "Composability Structure"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Each notification is made up of these composable blocks:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Verification - To verify the notification\n    Identity - To understand the storage format and rules to interpret the notification payload\n        Payload - To understand what is the type of notification, what data it contains and to whom it should be addresses to\n            Content - To interpret or extend format types for content inside the notification\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Verification"
        }), " - It defines the way to verify that the payload is valid by checking sender, source, and authenticitiy of the payload content."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Identity"
        }), " - Notification Identity Payload is the standard through which notification payload can be sent to Push Nodes for processing. There are multiple ways by which these payloads can be stored (storage-independent behavior) and identity ensures that the push node are able to understand and construct the notification payload from the data."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Payload"
        }), " - Each notification sent to the protocol is essentially a JSON payload which contains data about things a notification contains, notification recipients and even data to encrypt these notifications. This json payload is what makes Push Protocol payload content-independent and allows for expansion to several new types of notifications based on the community needs and as the communication protocol develops further."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Content"
        }), " - Notification Content Markdown standardize the content markdown and create a standard for styling and formatting."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "notification-verification-proof",
      children: "Notification Verification Proof"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Verification Proof is the outermost composable block that is sent along with the notification to help the network validate the notification sender, the chain from which the notification is sent, and the content of the notification along with any other validation that might be required."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Verification proofs differ based on the platform from which they are sent. For instance, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "smart contracts verification proof can be validated on-chain"
      }), " and smart contract-based notifications will usually carry transaction hash proofs, while ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "off-chain / gasless notifications usually carry eip712 proofs"
      }), ", though they are capable of carrying smart contract verification proof as well which makes it composable."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "specifications",
      children: "Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "verificationProof"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Definition"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Proof of verification"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "eip155:chainId:txHash::uid::optionaluid"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Verification proof generated from transaction hash of EPNSComm smart contracts on Ethereum or Polygon."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The type can be proven by on-chain activity"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "eip712v1:signature::uid::optionaluid"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Verification proof generated from off-chain EIP-712 signing of payload"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The type is proven by verifying the signature of eip712."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "eip712v2:signature::uid::optionaluid"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Verification proof generated from off-chain EIP-712 signing of payload"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The type is proven by verifying the signature of eip712"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["thegraph", ":graphid", "+notifcounter::uid::optionaluid"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Verification proof generated from any subgraph"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The type is proven by validating if the subgraph is attached to the channel and then the counter id is used to pick the message and compare the payload with the payload stored on the graph"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "::uid:: is an optional delimiter which if present along with optionaluid allows the proof to be uniquely different."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "understanding-verification-proof",
      children: "Understanding Verification Proof"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "eip155:chainId:txHash::uid::optionaluid"
          }), " - This signifies the on-chain verification. Currently, Ethereum and Polygon are supported networks and it can be verified by resolving the transaction hash from the respective chains and making sure that identity is present in the block."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "eip712v1"
          }), " - This signifies the verification from the off-chain, the verification is done through an EIP-712-based signature."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "eip-712v1 has a limitation to support only completed old payloads which include all the parameters of the payload which are part of notification, data, and recipients."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "As identity formats like 0, 1 and 3 have single string payload, only identity 2 is compatible with eip-712v1. To overcome this limitation eip-712v2 is introduced which is identity-independent."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "eip712v2"
          }), " - eip712v2:<Proof>, it contains a payload that is future compatible. It means the payload can be dynamic and can be extended for future reference."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "thegraph"
          }), " - Notification can be triggered through a subgraph as well\nThey need to call the addSubgraph function from Push Core Contract to add the subgraph. The Push Node will pick up the same and verification proof for this consists of:"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "GraphId"
              })
            }), ": This will be the id of subgraph. It is usually represented as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "githubid/subgraph"
            }), " name e.g - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "push/pushsubgraph"
            }), "."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "notification number[counter]"
              })
            }), " - It will keep the count of Notifications and will process in a successive manner."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "::uid::optionaluid"
              })
            }), " - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "::uid"
            }), " is an optional delimiter which if present along with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "optionaluid"
            }), " allows the proof to be uniquely different."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "verification-proof-examples",
      children: "Verification Proof Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Transaction Based (eip155:....)",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "This signifies the verification from the on-chain, currently, Ethereum and Polygon are supported networks and it can be verified by resolving the transaction hash from the respective chains and making sure that identity is present in the block."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "1. For Identity 0"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\":\"eip155:<chainId>:<TX-Hash>\",\n  \"channel\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"source\": \"ETH_TEST_SEPOLIA or POLYGON_TEST_MUMBAI or ETH_MAINNET\"\n  \"identity\": \"0+<Notification-Type>+<Title>+<body>\"\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "2. For Identity 1"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\":\"eip155:<chainId>:<TX-Hash>\",\n  \"channel\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"source\": \"ETH_TEST_SEPOLIA or POLYGON_TEST_MUMBAI or ETH_MAINNET\"\n  \"identity\": \"1+<IPFS-HASH>\"\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "3. For Identity 2"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\": \"eip155:<chainId>:<TX-Hash>\",\n  \"channel\": \"eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681\",\n  \"source\": \"ETH_TEST_SEPOLIA or POLYGON_TEST_MUMBAI or ETH_MAINNET\",\n  \"identity\": \"2+<Payload-in-form-of-string>\"\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "3. For Identity 3"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\": \"eip155:<chainId>:<TX-Hash>\",\n  \"channel\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"source\": \"THE_GRAPH\",\n  \"identity\": \"3+graph:<subgraph-id>+<notification number>\"\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "EIP-712v1",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "This signifies the verification from the off-chain, the verification is done through an EIP-712-based signature."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "EIP-712v1 - It contains a fully loaded old payload. This is deprecated but present to provide backward compatibility."
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "This has a limitation to support only the completed old payload which includes all the parameters of the payload which are part of notification, data, and recipients. As identity formats like 0, 1 and 3 have single string payload, only identity 2 is compatible with eip-712v1. To overcome this limitation eip-712v2 is identity independent."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"channel\": \"0x69e666767Ba3a661369e1e2F572EdE7ADC926029\",\n  \"recipient\": \"0x69e666767Ba3a661369e1e2F572EdE7ADC926029\",\n  \"signature\": \"<Signature generated using eip712>\",\n  \"deployedContract\": \"0x99047d328496C14016222a998564B334A4A5723f\",\n  \"chainId\": \"42\",\n  \"payload\": {\n    \"data\": {\n      \"acta\": \"\",\n      \"aimg\": \"\",\n      \"amsg\": \"Current BTC price is - 47,785.10USD\",\n      \"asub\": \"\",\n      \"type\": \"1\",\n      \"secret\": \"\"\n    }\n  },\n  \"type\": \"1\",\n  \"op\": \"write\"\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "EIP-712v2 - eip712v2:<Proof>",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Contains a payload that is future compatible. It means the payload can be dynamic and can be extended for future reference."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\": \"eip712v2:<Proof>\",\n  \"channel\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"source\": \"ETH_TEST_SEPOLIA or POLYGON_TEST_MUMBAI or ETH_MAINNET\",\n  \"identity\": \"0+1+Test Title+Test Body\"\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\": \"eip712v2:<Proof>\",\n  \"channel\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"source\": \"ETH_TEST_SEPOLIA or POLYGON_TEST_MUMBAI or ETH_MAINNET\",\n  \"identity\": \"1+bafkreicuttr5gpbyzyn6cyapxctlr7dk2g6fnydqxy6lps424mcjcn73we\"\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\": \"eip712v2:<Proof>\",\n  \"channel\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xd8634c39bbfd4033c0d3289c4515275102423681\",\n  \"source\": \"THE_GRAPH\",\n  \"identity\": \"3+graph:<subgraph-id>+<notification number>\"\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\": \"eip712v1:<Proof>\",\n  \"channel\": \"eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681\",\n  \"source\": \"ETH_TEST_SEPOLIA or POLYGON_TEST_MUMBAI or ETH_MAINNET\",\n  \"identity\": \"2+{\\\\'notification\\\\':{\\\\'title\\\\':\\\\'TEST Title\\\\',\\\\'body\\\\':\\\\'Test Body\\\\'},\\\\'data\\\\':{\\\\'acta\\\\':\\\\'\\\\',\\\\'aimg\\\\':\\\\'\\\\',\\\\'amsg\\\\':\\\\'Test Message\\\\',\\\\'asub\\\\':\\\\'\\\\',\\\\'type\\\\':\\\\'3\\\\',\\\\'etime\\\\':\\\\'\\\\',\\\\'hidden\\\\':\\\\'\\\\'}}\"\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "TheGraph",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"verificationProof\": `graph:<subgraph-id>+<notification number>`,\n  \"channel\": \"eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681\",\n  \"recipient\": \"eip155:42 or 80001:0xD8634C39BBFd4033c0d3289C4515275102423681\",\n  \"source\": \"THE_GRAPH\",\n  \"identity\": `3+graph:<subgraph-id>+<notification number>`\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "notification-identity",
      children: "Notification Identity"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Identity defines where the notification is coming from and the rules by which we can get the payload JSON of that specific notification. Currently, supported identities are Minimal, IPFS, Direct, and Subgraph."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "specifications-1",
      children: "Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Each notification identity carries at least two parameters which are joined by + delimiter."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Storage Type"
          })
        }), ": The first parameter represents ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "the identity type used"
        }), " (Minimal, IPFS, Direct, etc). The type id represents where the payload is stored or coming from."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Payload storage info"
          })
        }), ": Hash of the payload representing proof or pointer from which the payload can be retrieved. The second parameter represents either the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "hash or identifying information"
        }), " that can be used to fetch the necessary JSON which can also be made of composable information."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Storage Types"
      }), "\nAs of now, there are 4 types of storage that are supported:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Id"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Defintion"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "0"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Minimal"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Recommended for Smart Contract"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "IPFS"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Indicates storage on IPFS"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Direct Payload"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Indicates storage of direct payload"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "3"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "SubGraph"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Indicates storage on the subgraph"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "identity-examples",
      children: "Identity Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Identity Type 0",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0+<Notification Payload Type>+<Title>+<Body>"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<Notification Payload Type>"
        }), ": Type of notification (Broadcast, Subset, Targeted, Secret, etc)"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<Title>"
        }), ": This will be the title of the Message."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<Body>"
        }), ": This will be the body/description of the Message."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Example:"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "0+1+Hello+This is a broadacasted notification\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Identity Type 1",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "1+<IPFS HASH (cid)>"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<IPFS HASH (cid)>"
        }), ": The IPFS hash pointing to the payload. The payload should be as per Push protocol standard for Notification."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Example:"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "1+b45165ed3cd437b9ffad02a2aad22a4ddc69162470e2622982889ce5826f6e3d\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Identity Type 2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "2+<Payload in string format>"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<Payload in string format>"
        }), ": The payload as per Push standard should be stringified and attested to the storage type."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Example:"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "2+{\\\\\"notification\\\\\":{\\\\\"title\\\\\":\\\\\"TEST Title\\\\\",\\\\\"body\\\\\":\\\\\"Test Body\\\\\"},\\\\\"data\\\\\":{\\\\\"acta\\\\\":\\\\\"\\\\\",\\\\\"aimg\\\\\":\\\\\"\\\\\",\\\\\"amsg\\\\\":\\\\\"Test Message\\\\\",\\\\\"asub\\\\\":\\\\\"\\\\\",\\\\\"type\\\\\":\\\\\"3\\\\\",\\\\\"etime\\\\\":\\\\\"\\\\\",\\\\\"hidden\\\\\":\\\\\"\\\\\"}}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Identity Type 3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Format:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "3+<subgraphId>+<notification number[counter]>"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<subgraphId>"
        }), ": The subgraph id deployed in The Graph. It should be in the format of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "<github id>/<subgraph name>"
        }), ".\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "notification number[counter]"
        }), ": Every subgraph notification has a notification number attached. You will need to pass the subgraph number to identify which subgraph data should be sent as a notification."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "notification-payload",
      children: "Notification Payload"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Each notification sent to the protocol is essentially a JSON payload, bytes data, or hash/pointer of the JSON payload."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The protocol distinguishes payloads content which will contain the content which needs to be displayed, rules to display/morph the content, the recipients to which the content is meant to be delivered along with the encryption method used if the content is encrypted."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The notification payload type for Push is infinitely extensible and opens a huge range of possibilities including multi-factor authentication, payments, blacklisting address (Multi-sig contract as a channel with exchanges as their subscribers), etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The data defined in the JSON payload they carry is used to interpret and extend that functionality."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "specifications-2",
      children: "Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-json",
        children: "{\n\t\"notification\": {\n\t\t\"title\": \"The title of your message displayed on the screen (50 Chars)\",\n\t\t\"body\": \"The intended message displayed on the screen (180 Chars)\"\n\t},\n\t\"data\": {\n\t\t\"type\": \"1\" or \"3\" or \"4\", // 1 is broadcast, 3 is targeted, 4 is subset\n\t\t\"sectype\": null or [Encryption_Method], // for example: aes+eip85\n\t\t\"asub\": \"encrypted by secret using sectype | [Optional] The subject of the message displayed inside app (80 Chars)\",\n\t\t\"amsg\": \"encrypted by secret using sectype | [Optional] The intended message displayed inside app (500 Chars)\",\n\t\t\"acta\": \"encrypted by secret using sectype | [Optional] The cta link parsed inside the app\",\n\t\t\"aimg\": \"encrypted by secret using sectype | [Optional] The image url which is shown inside the app\",\n\t\t\"etime\": \"[Optional] if given, notif will be deleted after this in epoch\",\n\t\t\"hidden\" :\"[Optional] if given, notif will not show in user feed\"\n\t},\n\t\"recipients\": 0x0 for type 1, 0xtarget for type 3, array for type 4 [\n\t\t0x1: null or [{\n\t\t\tsecret: [secret used to encrypt]\n\t\t}],\n\t\t0x2: null or [{\n\t\t\tsecret: [secret used to encrypt]\n\t\t}],\n\t\t...\n\t\t0xn: null or [{\n\t\t\tsecret: [secret used to encrypt]\n\t\t}]\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Payload variable"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "notification (Required)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Represents the notification typically delivered on the home screen of the platform (mobile, tablet, web, extension, etc), the icon of the channel is automatically added to outline where the notification is coming from."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "title (Required)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The title of the message displayed on the screen differs from the data JSON because the title while transforming the payload can be different from the title presented. For example, secret notification title are always transformed to say Channel has sent you a secret notification."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "body (Required)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The body of the message displayed on the screen differs from the data JSON because the title while transforming the payload can be different from the title presented. For example, secret notification body are always transformed to say Please open the dApp / app to view your notification."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "data (Optional)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The data field present here forms the visual feedBox for the user. Indicates the data field the payload will carry. This allows the notification to transform according to the payload type and the content defined on the platform frontend (ie: app, dApp, wallet, etc)."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "type (Required)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Each payload has a type that tells how the data should be interpreted, this type is mirrored on the protocol function call as well."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "sectype (Required)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "is the encryption technique used for the secret/encrypted notification. In open notifs it can be entered null."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "asub (Optional)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "is the subject shown in the feed item."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "amsg (Optional)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "is the message shown in the feed item, has rich text formatting."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "acta (Optional)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "is the call to action of that feed item."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "aimg (Optional)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "is the image shown in the feed item, this field is also capable of carrying youtube links."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "etime (Optional)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "if given, notif will be deleted after this in epoch"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "recipients (Required)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Recipients address needs to be defined depending on the payload type, if 0x00 is provided it will represents all the subscribers of the channel and in the case of secret payload each subscriber address will be mapped with the secret."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "secret (Optional)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "is required for encryption and decryption of payload data, this will be mapped with the user address as key-value pair."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "payload-examples",
      children: "Payload Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Standard Payload Structure",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"notification\": {\n    \"title\": \"The title of your message displayed on screen (50 Chars)\",\n    \"body\": \"The intended message displayed on screen (180 Chars)\"\n  },\n  \"data\": {\n    \"type\": \"1\" or \"3\" or \"4\", // 1 is broadcast, 3 is targeted, 4 is subset\n    \"sectype\": null or [Encryption_Method] // for example: aes+eip85\n    \"asub\": \"encrypted by secret using sectype | [Optional] The subject of the message displayed inside app (80 Chars)\",\n    \"amsg\": \"encrypted by secret using sectype | [Optional] The intended message displayed inside app (500 Chars)\",\n    \"acta\": \"encrypted by secret using sectype | [Optional] The cta link parsed inside the app\",\n    \"aimg\": \"encrypted by secret using sectype | [Optional] The image url which is shown inside the app\",\n    \"etime\": \"[Optional] if given, notif will be deleted after this in epoch\"\n    \"hidden\" :\"[Optional] if given, notif will not show in user feed\"\n  },\n  \"recipients\": 0x0 for type 1, 0xtarget for type 3 or [\n\t\t0x1: null or [{\n\t\t\tsecret: [secret used to encrypt]\n\t\t}],\n\t\t0x2: null or [{\n\t\t\tsecret: [secret used to encrypt]\n\t\t}],\n\t\t...\n\t\t0xn: null or [{\n\t\t\tsecret: [secret used to encrypt]\n\t\t}] for type 4\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Broadcast Payload",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"notification\": {\n    \"title\": \"The title of your message displayed on screen (50 Chars)\",\n    \"body\": \"The intended message displayed on screen (180 Chars)\"\n  },\n  \"data\": {\n    \"type\": \"1\"\n    \"sectype\": null\n    \"asub\": \"[Optional] The subject of the message displayed inside app (80 Chars)\",\n    \"amsg\": \"[Optional] The intended message displayed inside app (500 Chars)\",\n    \"acta\": \"[Optional] The cta link parsed inside the app\",\n    \"aimg\": \"[Optional] The image url which is shown inside the app\",\n    \"etime\": \"[Optional] if given, notif will be deleted after this in epoch\"\n    \"hidden\" :\"[Optional] if given, notif will not show in user feed\"\n  },\n  \"recipients\": 0x0\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Targeted Payload",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"notification\": {\n    \"title\": \"The title of your message displayed on screen (50 Chars)\",\n    \"body\": \"The intended message displayed on screen (180 Chars)\"\n  },\n  \"data\": {\n    \"type\": \"3\"\n    \"sectype\": null\n    \"asub\": \"[Optional] The subject of the message displayed inside app (80 Chars)\",\n    \"amsg\": \"[Optional] The intended message displayed inside app (500 Chars)\",\n    \"acta\": \"[Optional] The cta link parsed inside the app\",\n    \"aimg\": \"[Optional] The image url which is shown inside the app\",\n    \"etime\": \"[Optional] if given, notif will be deleted after this in epoch\"\n    \"hidden\" :\"[Optional] if given, notif will not show in user feed\"\n  },\n    \"recipients\": 0xtarget\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Subset Payload",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"notification\": {\n    \"title\": \"The title of your message displayed on screen (50 Chars)\",\n    \"body\": \"The intended message displayed on screen (180 Chars)\"\n  },\n  \"data\": {\n    \"type\": \"4\"\n    \"sectype\": null\n    \"asub\": \"[Optional] The subject of the message displayed inside app (80 Chars)\",\n    \"amsg\": \"[Optional] The intended message displayed inside app (500 Chars)\",\n    \"acta\": \"[Optional] The cta link parsed inside the app\",\n    \"aimg\": \"[Optional] The image url which is shown inside the app\",\n    \"etime\": \"[Optional] if given, notif will be deleted after this in epoch\"\n    \"hidden\" :\"[Optional] if given, notif will not show in user feed\"\n  },\n  \"recipients\": [\n     0x1: null,\n     0x2: null,\n     ...\n     0xn: null\n   ]\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "Encrypted Payload",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          children: "{\n  \"notification\": {\n    \"title\": \"The title of your message displayed on screen (50 Chars)\",\n    \"body\": \"The intended message displayed on screen (180 Chars)\"\n  },\n  \"data\": {\n    \"type\": \"4\"\n    \"sectype\": \"aes+eip85\"\n    \"asub\": \"encrypted by secret using sectype | [Optional] The subject of the message displayed inside app (80 Chars)\",\n    \"amsg\": \"encrypted by secret using sectype | [Optional] The intended message displayed inside app (500 Chars)\",\n    \"acta\": \"encrypted by secret using sectype | [Optional] The cta link parsed inside the app\",\n    \"aimg\": \"encrypted by secret using sectype | [Optional] The image url which is shown inside the app\",\n    \"etime\": \"[Optional] if given, notif will be deleted after this in epoch\"\n    \"hidden\" :\"[Optional] if given, notif will not show in user feed\"\n  },\n  \"recipients\": [\n     0x1:[{\n     secret: [secret used to encrypt]\n     }],\n     0x2: [{\n     secret: [secret used to encrypt]\n     }],\n     ...\n     0xn: [{\n     secret: [secret used to encrypt]\n     }]\n  ]\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "notification-content",
      children: "Notification Content"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Notification Feeds have the ability to display customized content. By adopting and standardizing the notification content markdown, it ensures that we can keep on advancing the ways notification are presented on the frontend / UI."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "specifications-3",
      children: "Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Markdown Format"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Use Case"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Styling effects"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "**Bold**"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Emphasis"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Bold"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "*Italic*"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Emphasis"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Italics"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "***Bold&Italics***"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Emphasis"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Bold and Italics"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "\\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Segregation"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For new line"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<span color=\"white\">Hello World</span>"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For colored text"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For white color"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<span color=\"#ANYHEXCODE\"> Hello world </span>"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For colored text"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Supports any color hexcode"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<span color=\"primary\">Hello World </span>"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For colored text"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Push Primary colored Text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<span color=\"secondary\">Hello World </span>"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For colored text"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Push Secondary colored Text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<span color=\"tertiary\">Hello World </span>"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For colored text"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Push Tertiary colored Text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "[PUSH website](https://push.org)"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For URL's"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Underlined, Red Colored Text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "[timestamp: 1699032018]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "For Timestamp"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "converts Epoch timestamps to human readable timestamp"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-notification-markdown-live-playground",
      children: "Push Notification markdown live playground"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { NotificationItem } from @pushprotocol/restapi;\nfunction App(props) {\n  return (\n    <>\n      <h2>Markdown Notification to style your notification as per your need</h2>\n      <NotificationItem\n        notificationTitle={'Title'}\n        notificationBody={\n          \"***Bold&Italic*** \\n **Bold** \\n *Italic* \\n <span color='green'>green text</span> \\n [PUSH website](https://push.org) \\n [timestamp: 1699347011]\"\n        }\n        image={'https://push.org/assets/pushIcon.svg'}\n        chainName={'ETH_TEST_SEPOLIA'}\n        icon={'https://push.org/assets/pushIcon.svg'}\n        app={'PUSH'}\n      />\n    </>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "content-examples",
      children: "Content Examples"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Timestamp",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown - [ts: 1699032018]\n> Example - Friday, November 3, 2023 5:20:18 PM\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Bold",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  **Bold**\n> Example -  **PUSH IMPROVEMENT PROPOSAL**\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Italics",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  *Italics*\n> Example -  *Slant text*\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Bold and Italics",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  ***Bold&Italics***\n> Example -  ***Push guidelines***\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For new Line",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  \\n\n> Example -  Sub category of Notification PRC -  \\n\n                  * Content\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For white color",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  <PUSHText color=\"white\">PUSH</PUSHText>\n> Example -  <PUSHText color=\"white\">w2w chat</PUSHText>\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For any color in hexcode",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  <PUSHText color=”#ANYHEXCODE”> Hello world </PUSHText>\n> Example -  <PUSHText color=”#00FF00”> Push Nodes </PUSHText>\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Push primary color",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  <PUSHText color=\"primary\">Hello World </PUSHText>\n> Example - <PUSHText color=\"primary\"> Analytics dashboard </PUSHText>\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Push secondary color",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  <PUSHText color=\"secondary\">Hello World </PUSHText>\n> Example - <PUSHText color=\"secondary\">EPNS Dapp </PUSHText>\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Push tetiary color",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown -  <PUSHText color=\"tertiary\">Hello World </PUSHText>\n> Example - <PUSHText color=\"tertiary\">EPNS Browser extension</PUSHText>\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      summary: "For Underlined, Red Colored",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "\n> Markdown - <EPNSLink color=”red”>[EPNS Website](https://www.epns.io) </EPNSLink>\n> Example - <PUSHText color=\"green\" link=\"https://www.google.com\">Hello World </PUSHText>\n\n"
        })
      })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 641622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Details_Details)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(15066);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(41422);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){let{summary,children,...props}=_ref;const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open});// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const[open,setOpen]=(0,react.useState)(props.open);const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!==null&&summary!==void 0?summary:'Details'});return/*#__PURE__*/(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",{...props,ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,dist_clsx/* default */.A)(styles_module.details,isBrowser&&styles_module.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,disableSSRStyle:true// Allows component to work fine even with JS disabled!
,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.collapsibleContent,children:children})})]}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_b_Ee"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details_Details(_ref){let{...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,{...props,className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module.details,props.className)});}

/***/ }),

/***/ 454504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/notificationComposableBlock-aa83ac7f2d754450609a912e007f4028.png");

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