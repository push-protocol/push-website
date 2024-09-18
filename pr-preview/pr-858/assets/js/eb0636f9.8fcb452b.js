"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[85756],{

/***/ 156227:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119365);
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(641622);


const frontMatter = {
	id: 'docs-chat-develop-stream-chat',
	title: 'Stream Chat',
	hide_title: true,
	slug: './stream-chat',
	displayed_sidebar: 'pushChatSidebar',
	sidebar_position: 12,
	image: '/assets/docs/previews/docs_chat_develop--stream_chat.png'
};
const contentTitle = 'Stream chat overview';
const metadata = {
  "id": "chat/build/docs-chat-develop-stream-chat",
  "title": "Stream Chat",
  "description": "Stream Chat APIs enable you to receive chat messages, chat requests, group invites, and notifications instantly, without the need for constant polling. Push Chat achieves this by the use of sockets.",
  "source": "@site/docs/chat/01-build/12-Develop-Stream-Chat.mdx",
  "sourceDirName": "chat/01-build",
  "slug": "/chat/build/stream-chat",
  "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/stream-chat",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/chat/01-build/12-Develop-Stream-Chat.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 12,
  "frontMatter": {
    "id": "docs-chat-develop-stream-chat",
    "title": "Stream Chat",
    "hide_title": true,
    "slug": "./stream-chat",
    "displayed_sidebar": "pushChatSidebar",
    "sidebar_position": 12,
    "image": "/assets/docs/previews/docs_chat_develop--stream_chat.png"
  },
  "sidebar": "pushChatSidebar",
  "previous": {
    "title": "Manage Group",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/manage-group"
  },
  "next": {
    "title": "All API Calls",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/all-api-calls"
  }
};
const assets = {

};






const toc = [{
  "value": "Stream chat API",
  "id": "stream-chat-api",
  "level": 2
}, {
  "value": "Stream chat parameters",
  "id": "stream-chat-parameters",
  "level": 3
}, {
  "value": "Stream chat listen events",
  "id": "stream-chat-listen-events",
  "level": 3
}, {
  "value": "Re-initialize chat stream",
  "id": "re-initialize-chat-stream",
  "level": 2
}, {
  "value": "Reinit Stream chat parameters",
  "id": "reinit-stream-chat-parameters",
  "level": 3
}, {
  "value": "Stream info API",
  "id": "stream-info-api",
  "level": 2
}, {
  "value": "Stream status API",
  "id": "stream-status-api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "stream-chat-overview",
      children: "Stream chat overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Stream Chat APIs enable you to receive chat messages, chat requests, group invites, and notifications instantly, without the need for constant polling. Push Chat achieves this by the use of sockets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Stream Chats | Push Chat | Push Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "stream-chat-api",
      children: "Stream chat API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "codetabs",
      groupId: "code-examples",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "js",
        attributes: {
          className: "codetab js"
        },
        default: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            children: "// Initialize stream to listen for events:\nconst stream = await userAlice.initStream(\n  [\n    CONSTANTS.STREAM.CHAT, // Listen for chat messages\n    CONSTANTS.STREAM.NOTIF, // Listen for notifications\n    CONSTANTS.STREAM.CONNECT, // Listen for connection events\n    CONSTANTS.STREAM.DISCONNECT, // Listen for disconnection events\n  ],\n  {\n    // Filter options:\n    filter: {\n      // Listen to all channels and chats (default):\n      channels: ['*'],\n      chats: ['*'],\n\n      // Listen to specific channels and chats:\n      // channels: ['channel-id-1', 'channel-id-2'],\n      // chats: ['chat-id-1', 'chat-id-2'],\n\n      // Listen to events with a specific recipient:\n      // recipient: '0x...' (replace with recipient wallet address)\n    },\n    // Connection options:\n    connection: {\n      retries: 3, // Retry connection 3 times if it fails\n    },\n    raw: false, // Receive events in structured format\n  }\n);\n\n// Chat event listeners:\n\n// Stream connection established:\nstream.on(CONSTANTS.STREAM.CONNECT, async (a) => {\n  console.log('Stream Connected');\n\n  // Send initial message to PushAI Bot:\n  console.log('Sending message to PushAI Bot');\n\n  await userAlice.chat.send(pushAIWalletAddress, {\n    content: 'Hello, from Alice',\n    type: 'Text',\n  });\n\n  console.log('Message sent to PushAI Bot');\n});\n\n// Chat message received:\nstream.on(CONSTANTS.STREAM.CHAT, (message) => {\n  console.log('Encrypted Message Received');\n  console.log(message); // Log the message payload\n});\n\n// Chat operation received:\nstream.on(CONSTANTS.STREAM.CHAT_OPS, (data) => {\n  console.log('Chat operation received.');\n  console.log(data); // Log the chat operation data\n});\n\n// Connect the stream:\nawait stream.connect(); // Establish the connection after setting up listeners\n\n// Stream disconnection:\nstream.on(CONSTANTS.STREAM.DISCONNECT, () => {\n  console.log('Stream Disconnected');\n});\n\n// Stream Chat also supports other products like CONSTANTS.STREAM.NOTIF.\n// For more information, please refer to push.org/docs/notifications.\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "stream-chat-parameters",
      children: "Stream chat parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Sub-Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "listen"
              })
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "constant"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Choose from various streams: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CHAT"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CHAT_OPS"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.NOTIF"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CONNECT"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.DISCONNECT"
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "PushStreamInitializeProps"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Optional configuration properties for initializing the stream."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.filter"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Configure to listen to specific chats or notifications."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.filter.channels"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "array of strings"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "['*']"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Pass list of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "channels"
            }), " over here to only listen to notifications coming from them."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.filter.chats"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "array of strings"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "['*']"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Pass list of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatids"
            }), " over here to only listen to chats coming from them."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.connection"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Option to configure the connection settings of the stream"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.connection.retries"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "number"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "3"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Number of automatic retries incase of error"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.raw"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "If enabled, respond with metadata useful in verifying the integrity of incoming chats or notifications among other things."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Note: Parameters ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "in this style"
          })
        }), " are mandatory."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "stream-chat-listen-events",
      children: "Stream chat listen events"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Listen events"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "When is it triggered?"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CHAT"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Whenever a chat is received."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CHAT_OPS"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Whenever a chat operation is received."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CONNECT"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Whenever the stream establishes connection."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.DISCONNECT"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Whenever the stream gets disconnected."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Chat Request Stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.request\",\n  \"origin\": \"other\",\n  \"timestamp\": \"1696576961629\",\n  \"chatId\": \"b6f53ac38d0698ea64e6c4b0f024437ac2271ca869413d5f779d7cda75de1aaa\",\n  \"from\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n  \"to\": [\n      \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\"\n  ],\n  \"message\": {\n      \"type\": \"Text\",\n      \"content\": \"Hey There!!!\"\n  },\n  \"meta\": {\n      \"group\": false\n  },\n  \"reference\": \"bafyreid7b7m5ub3ouybgp2nzu733vle73bem5jcz5lg5u2epknncfhfeuy\",\n  \"raw\": {\n    \"fromCAIP10\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n    \"toCAIP10\": \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\",\n    \"fromDID\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n    \"toDID\": \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\",\n    \"encType\": \"pgp\",\n    \"encryptedSecret\": \"-----BEGIN PGP MESSAGE-----\\n\\nwcBMAyaG8qwtJd4vAQf+JbzXYRQZ4Tm+8P+igfgH5kHFxMdd6XD11+UgyX3o\\nhvxIaH43AjtpAuhNCvVVnmmIjWHAnCye7IDrT5BFEYVI03FaxxMyAwxvROTe\\nb1xn4R5TmXPzuZ2N0AGbD1iTAqvPjLj3UvHJJihilOOAs5rqUNmWns4+xWr6\\n8Znl5J2RyyqxJ3+LnHn4N6Spwm1gFzJ0alS2gwp+Tdi7OEPRiiWTkIcrdRcw\\nKUv1i3aJw4Jyd9wDz6jldNBsa3L8RHUf47Oo4b/17dEqeFkioKCuWyH/DlKO\\nkxZRsZEGUDR8ILKCRxbQw7RwWjxQnUeP+4oRuGC6P34zxZEJofHFz/8VWjlG\\necHATAOhR72eaWLr8wEIAJEP2F/ocesJWKafpUzIN33fTTIFBjIvVB5GXb/V\\nRvtwgRqsrKoudQLUf3ybsH2jw5JOmA8nV4Kc/aB/DVtvSyfObLxxngXe4HnD\\n4OlUBGH80Z/RC2p6egrxIQUu1AMhTpu9SJ3HApTHHkDtGetp9Lnax5AxEV2t\\ntFQWgkfwYy0xz2UuU+f85skTDgHBn7cW4Hb8WAaXWptpoGIlxMaVQYcHzA8A\\ny7opcoPJPlE7AtRVQDmrQDLMZTRjxPwu9+vOYSh9bC3QFXE8PQeaseK379BG\\no8wL6lnfX9mOdX3xaXRBuccm5akT61UGHnFH1zZv+rhyM67/bVCsIHEsG2Mt\\nSHrSQAG/I7P/KleW2A4iEKPW8LAV1hGFkZZj1YumMGqHocTLncC8QwKzzHzi\\nKyO4PxEL0qhgP16ya+vzT0PazgQnYtA=\\n=AmIG\\n-----END PGP MESSAGE-----\\n\",\n    \"signature\": \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7XBCRCfItQMnVG/eBYhBKTq6JYHJG7fZv5Yop8i1Ayd\\nUb94AACmjgf/XGx0k/OMCg7XNIb5DjPMtiDuSU9Gm5KSUGhoBDIatNhrgZsj\\nhULiKdk0DG1tk6G6a1/IpxM17obw4q3OI6QrT5TdgNS5c4kNRJ65xN0smxLl\\nZC9fM5GEoTNI9CMIghH+zTesmVxkq6cS5iwzFJNgV05MoCa+HBCSHR3oLKFU\\nH2muI7veUj1/yF93OEqtsqUjsgVr+bsqSVhwD8hcjS4AlRmHgBCLdwMWSOnK\\nqFFV/0X/SZXnq0Jy2NULGFGTuQSV6NhB448HMEToxGrVbkYhPxRazBbEaSxD\\nDrYQ+8b6EQBSJlPCKO3MAV8CNMNbfwwGo1RtXm6+xZj3DCHEdiU96w==\\n=BRdW\\n-----END PGP SIGNATURE-----\\n\",\n    \"sigType\": \"pgpv2\",\n    \"verificationProof\": \"pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7XBCRCfItQMnVG/eBYhBKTq6JYHJG7fZv5Yop8i1Ayd\\nUb94AAClEggAxIFP9BJNwHzqUlEB8UD7gK+wNJxx5Nc7b31y0edUiSL6MWGL\\n/b82efqACFNi2yc8/3xreJZr5ZuyHHSuCAb6zRamBS4QYTD+cMhNwpUTPiQE\\ngyGZejVP8o+ko4N//itioi43BC619iSs7OTCvXkWS+gLFvOeRrBBPfp/15NG\\nbeTavruBfiIUBR3YGtlcY296LLmo2YCEz49B1q/nQ+Ant1UNdhmuVhqU6W5l\\nBzV3mLkxnlxpey9JNnNjC6tiKDB34OI06aYc863mLphk0R3obzGyt3XQqgL2\\noteUPdkfPsJb3DCdq9F/XRNNJtypnAWeuMk8T5OK44FfLnjo26lwHQ==\\n=QPQd\\n-----END PGP SIGNATURE-----\\n\",\n    \"previousReference\": null\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Chat accept stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.accept\",\n  \"origin\": \"self\",\n  \"timestamp\": \"1696576962016\",\n  \"chatId\": \"b6f53ac38d0698ea64e6c4b0f024437ac2271ca869413d5f779d7cda75de1aaa\",\n  \"from\": \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\",\n  \"to\": [\n      \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\"\n  ],\n  \"message\": {\n      \"type\": null,\n      \"content\": null\n  },\n  \"meta\": {\n      \"group\": false\n  },\n  \"reference\": null,\n  \"raw\": {\n    \"fromCAIP10\": \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\",\n    \"toCAIP10\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n    \"fromDID\": \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\",\n    \"toDID\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n    \"encType\": \"\",\n    \"encryptedSecret\": null,\n    \"signature\": \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7XBCRAMkuwWk00HQxYhBKHMQtCl0iVWLJla7QyS7BaT\\nTQdDAAAE+Af/U8h9c2tBPq6PjvDvjjs+yL/qTadagegzLZN0Gd9pT1kAmZ50\\n+J1+f05oLCFdFcVTFz8dFZpueh+0s/8daXJ1uKVTBPPpfvWRInkD2KxlRrMu\\n6gry3Tr2Fb1k8nIulIB/GSs7A85jJZQaG5WShZmfvg03bMadNIYmgl3ACmEe\\nX3VovLFM5VLzuzKJGTn+7OM1VrZlZdsMRa7nfIdMKafMEEJcr41bmXCeYfzN\\nw24kEO9/tAGaHzSRLsoNYxYDjby45OU1AJUHaLwjInk0klugcw7GWfMM3r2u\\nE8qDuDZ0eveI6yArosK9amBlGF26l4UhEVPbCpumMrBBoItU03MPRw==\\n=InOB\\n-----END PGP SIGNATURE-----\\n\",\n    \"sigType\": \"pgp\",\n    \"verificationProof\": \"pgp-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7XBCRAMkuwWk00HQxYhBKHMQtCl0iVWLJla7QyS7BaT\\nTQdDAAAE+Af/U8h9c2tBPq6PjvDvjjs+yL/qTadagegzLZN0Gd9pT1kAmZ50\\n+J1+f05oLCFdFcVTFz8dFZpueh+0s/8daXJ1uKVTBPPpfvWRInkD2KxlRrMu\\n6gry3Tr2Fb1k8nIulIB/GSs7A85jJZQaG5WShZmfvg03bMadNIYmgl3ACmEe\\nX3VovLFM5VLzuzKJGTn+7OM1VrZlZdsMRa7nfIdMKafMEEJcr41bmXCeYfzN\\nw24kEO9/tAGaHzSRLsoNYxYDjby45OU1AJUHaLwjInk0klugcw7GWfMM3r2u\\nE8qDuDZ0eveI6yArosK9amBlGF26l4UhEVPbCpumMrBBoItU03MPRw==\\n=InOB\\n-----END PGP SIGNATURE-----\\n\",\n    \"previousReference\": null\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Chat message stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.message\",\n  \"origin\": \"other\",\n  \"timestamp\": \"1696576962232\",\n  \"chatId\": \"b6f53ac38d0698ea64e6c4b0f024437ac2271ca869413d5f779d7cda75de1aaa\",\n  \"from\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n  \"to\": [\n      \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\"\n  ],\n  \"message\": {\n      \"type\": \"Text\",\n      \"content\": \"Hey There!!!\"\n  },\n  \"meta\": {\n      \"group\": false\n  },\n  \"reference\": \"bafyreich6wtnzojmgqft6eudx43y4xir2emfnhxqlvyy7rq6a73w7szywe\",\n  \"raw\": {\n    \"fromCAIP10\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n    \"toCAIP10\": \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\",\n    \"fromDID\": \"eip155:0x0aF73cF3b072E39A46D78E6c4fbaA058A138Bc05\",\n    \"toDID\": \"eip155:0x52C6050536a77A405F03b6Da3F98Db9Ca69ad899\",\n    \"encType\": \"pgp\",\n    \"encryptedSecret\": \"-----BEGIN PGP MESSAGE-----\\n\\nwcBMAyaG8qwtJd4vAQf9Fg4udBKFN/Pqd9+bi5dqGnLr/PJbRHaIljRlzt5R\\nm+6sPUeGyVkXcFdGbSnUKG0M7rtwKVOg0LiCX/oFx//k6ULJWJNVpuZsy4QT\\nGYZevcU6dEPMMw4KSG/KJb+sdTAqlRPegibfrfg7YK/Mr9xd0DbN8K9CFsqC\\nW/CYz0AkgZS/wN2099cy9WEgesv9yHMd1tU+59A/gAjmI5qk1ge3PvReKGP/\\ncSWCX4wz0lioviib7g9zdw79ecpJThmWXKWaW/dPikcNYUTCbK31gY9TuRsy\\nS+z+7AdddGj0hqgQvZIfj4XHgHbpQrRisddbgc1AE1xV7eiiT2jtNPswtsat\\n48HATAOhR72eaWLr8wEIAJ06+SdpAuQT6mdlIAo/Kttiyd71UkxgMlappQKQ\\nM5e2aei/H/C93EFYIitVHobeH/Q8Y89k4E+Plopo23OS6TGGbWIUl0PSJkyg\\nxAIyC8J4RfqylCp+k/d9ZxZP/l0WrrXo9SqGOfXnAVm/IITLl8hlG7dvSztI\\ng8ndUrk8Af3Jwq4vbrbUOMr2ophzV027HVWQl53Dez/e+DfpuyvT2uDAevTw\\nf82H0+2DIz3jzj3rNfkvyA6C3InhW37K4JNh+T3XlL7qWV77XTWFN0yLzZwP\\nrW0hLWV5YGAj0kqpup5oY4H1ANPknRiNxP6hUrQH5ZkHPahEUo78gpP70qgc\\nZafSQAHfRbVWZC7J+0OF15W+dR3iM8Ngrz/PjYEchVo73a8uBtNk4mSai8o7\\nv1A2hx74RVX6yN05D8Bxpf6u7wQMXB8=\\n=T81R\\n-----END PGP MESSAGE-----\\n\",\n    \"signature\": \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7XCCRCfItQMnVG/eBYhBKTq6JYHJG7fZv5Yop8i1Ayd\\nUb94AAB/NQf/bwUkzVHV6/ODTtnjeA0y0kqEv3OAzbYoG60QdgNf3zAEmFbk\\nf4ULNghzvl3Nt3S7TYsF06xu4gzzsjaOt8glPxJCiZUa3lXdJH53X5+VCbZV\\nSWJuip9tdljAv4zg27+ZAGrwyC4NrTHE8t1b8mDHLTgJeqae6dJHjScmCXKZ\\ngBZb2mNeVYWklg1mpCuXxB8YJpeFKDgSYeZ3C+YNSGAmoCyICRpYvxYo038P\\nDehkFMS3HHvSGjFslcDN0D9l8gWY/4H520Rfer4GHJoFMSZeKlyWkQRCNPNz\\nFY3fjmPLuimbEnnzd9Nxw1kbx4P9SBEEa4xhEjJnxx/sAnQxJX72RQ==\\n=1zuZ\\n-----END PGP SIGNATURE-----\\n\",\n    \"sigType\": \"pgpv2\",\n    \"verificationProof\": \"pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7XCCRCfItQMnVG/eBYhBKTq6JYHJG7fZv5Yop8i1Ayd\\nUb94AACE2wf9GQq+/lkGQ7HVVmLF3SnSRI0IM9s4OvLckwjyd1i3D1lLnwu5\\nVaPj+VxKZSBe+GHHukd/gQ+qYr9fhfHNMQ019AfHfz81kCCai6KhExH3YVbE\\nsrL+j2bwttfcRjRWy/MoHo1T6M9F8PR4jm4aaktTSliApRE0k92Igm8Gw5it\\nUaP1/qDIOQRjlofa7wAyDz7Kf83/WkbS78+MJZP0JWL9znhdFH5em8RvVYpS\\nMa7/Skl8BnCr46BIfcd4Urd9q/RECKA4WJaxpOosH42MJQ4DLJ2iRnzZKkyr\\nyZBfXXyiMA5goy+uzJzVhA5tlsHZp3jUFEZSvofaMX6a5UopweHMGw==\\n=Wp+E\\n-----END PGP SIGNATURE-----\\n\",\n    \"previousReference\": \"bafyreid7b7m5ub3ouybgp2nzu733vle73bem5jcz5lg5u2epknncfhfeuy\"\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Chat rejection stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.reject\",\n  \"origin\": \"self\",\n  \"timestamp\": \"1696577053528\",\n  \"chatId\": \"e819ff24ee06d44927bdc0c0967bd55b6410d389c29c72c329dcce4dca9f413d\",\n  \"from\": \"eip155:0xd49F5038C4baA79DF1f1191d6B18FF55D06a4648\",\n  \"to\": [\n    \"eip155:0x1fd48A2697Bdfd5A63436cEf5548e095649B65a7\"\n  ],\n  \"message\": {\n    \"type\": null,\n    \"content\": null\n  },\n  \"meta\": {\n    \"group\": false\n  },\n  \"reference\": null,\n  \"raw\": {\n    \"fromCAIP10\": \"eip155:0xd49F5038C4baA79DF1f1191d6B18FF55D06a4648\",\n    \"toCAIP10\": \"eip155:0x1fd48A2697Bdfd5A63436cEf5548e095649B65a7\",\n    \"fromDID\": \"eip155:0xd49F5038C4baA79DF1f1191d6B18FF55D06a4648\",\n    \"toDID\": \"eip155:0x1fd48A2697Bdfd5A63436cEf5548e095649B65a7\",\n    \"encType\": \"\",\n    \"encryptedSecret\": null,\n    \"signature\": \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7YdCRCAVGEKwfvuDBYhBDuMv0sczhcV+XqGZYBUYQrB\\n++4MAACNGQf/UM17dLBNzMLEmhfThqnxdXo1w1n4U/1DCSmzavvJ2CmCXvTU\\nfekuTaxEEGQ83yKeI85KEkHdKgYpNmNa7O5OfOekjum4kRLi8qo4yVH6uard\\nEiV+r4i52gWAqdrZOuFqWOLpbtWzMXF3gl6f+Sq5VT/SIi2/g5lO/bYd4QFX\\n7cm/J+M5MzDJvxDht29bwDMylJVJXYr93xsEsLUAG0xo71mzsnEc7aSCxY71\\nGw+4/KstoSDT40pvoZLw7qRidmHOt5QLHI6wpcztdo8ALDByYpIifV/J7lao\\ns4bDS0TOXCb8/F6MQt2SXRKD8pIvzQ3CZBBZSKg+29Muq7Gw8hDq/A==\\n=lcfd\\n-----END PGP SIGNATURE-----\\n\",\n    \"sigType\": \"pgp\",\n    \"verificationProof\": \"pgp-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7YdCRCAVGEKwfvuDBYhBDuMv0sczhcV+XqGZYBUYQrB\\n++4MAACNGQf/UM17dLBNzMLEmhfThqnxdXo1w1n4U/1DCSmzavvJ2CmCXvTU\\nfekuTaxEEGQ83yKeI85KEkHdKgYpNmNa7O5OfOekjum4kRLi8qo4yVH6uard\\nEiV+r4i52gWAqdrZOuFqWOLpbtWzMXF3gl6f+Sq5VT/SIi2/g5lO/bYd4QFX\\n7cm/J+M5MzDJvxDht29bwDMylJVJXYr93xsEsLUAG0xo71mzsnEc7aSCxY71\\nGw+4/KstoSDT40pvoZLw7qRidmHOt5QLHI6wpcztdo8ALDByYpIifV/J7lao\\ns4bDS0TOXCb8/F6MQt2SXRKD8pIvzQ3CZBBZSKg+29Muq7Gw8hDq/A==\\n=lcfd\\n-----END PGP SIGNATURE-----\\n\",\n    \"previousReference\": null\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Group chat message stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.message\",\n  \"origin\": \"self\",\n  \"timestamp\": \"1696576220066\",\n  \"chatId\": \"a64abd4256a607e7bd2ab4068d9024ddb0d355687267c0e39eb31a3a7d245ab0\",\n  \"from\": \"eip155:0x9d57759F2D0cbf19D6cfAf72C5A4c4B1A2443500\",\n  \"to\": [\n    \"a64abd4256a607e7bd2ab4068d9024ddb0d355687267c0e39eb31a3a7d245ab0\"\n  ],\n  \"message\": {\n    \"type\": \"Text\",\n    \"content\": \"Hello\"\n  },\n  \"meta\": {\n    \"group\": true\n  },\n  \"reference\": \"bafyreidheq2764lxdi2plbp4mik24ohtjfyvfbmkde2wsb2ahvwdjrwygq\",\n  \"raw\": {\n    \"fromCAIP10\": \"eip155:0x9d57759F2D0cbf19D6cfAf72C5A4c4B1A2443500\",\n    \"toCAIP10\": \"a64abd4256a607e7bd2ab4068d9024ddb0d355687267c0e39eb31a3a7d245ab0\",\n    \"fromDID\": \"eip155:0x9d57759F2D0cbf19D6cfAf72C5A4c4B1A2443500\",\n    \"toDID\": \"a64abd4256a607e7bd2ab4068d9024ddb0d355687267c0e39eb31a3a7d245ab0\",\n    \"encType\": \"PlainText\",\n    \"encryptedSecret\": \"\",\n    \"signature\": \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7LcCRBG3kV4UbDyWhYhBPyPo+yD4wbsNV5YNkbeRXhR\\nsPJaAABWfAf+MQFE/qy3X8R19wQeQ90eu6rYtK1h5aVlLwezo4z8F/8KqK1S\\nwr8tlrtlQ9TieNH6Q5xebM2K356R44QnmE3qZB52Ukww2hiyrrCu7+x55KzK\\na1+P8bQh1bGiesBYOa3LqnFlnFyQgBFJvGQqI0m2QBDbkM5OTkQGUYSi4tnO\\nYIxVplb/lhEYHt/ZRGu1xg0XMhgycsRESidNLldKRx+AooeGfWgNIws97Yaq\\nBbGTEgNOul8XV8b7y2ORL74Dl18UMPRF91dyktm/y8FJp30rWHaeNMAgKzlX\\nr/nSgXFtCkfxclQgbBlSit1PBHmhB/Sr0amZKelpiYdRT+lVluknLg==\\n=/QXX\\n-----END PGP SIGNATURE-----\\n\",\n    \"sigType\": \"pgpv2\",\n    \"verificationProof\": \"pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7LcCRBG3kV4UbDyWhYhBPyPo+yD4wbsNV5YNkbeRXhR\\nsPJaAAAHQQf/eb4aaRUTbcAwLRWlI+55Ddd1PBeWXhTyDIZgsiFYUwSmtLLd\\n/bFHnQzyplo+Tp8BuUB+wO5dH112ousWxOeTj8yAGUve6OhbP/8g9nJmHecJ\\nmZwAHPhr4BVYomQRQChLp8FstLLjiI3CNdfarIYzBmlWGhrurXltjx69e+Ef\\nyxtxRZ6zZavG56IHhOJru0p3y1nsbNI5eGsXG9Wq3FdAUXhbsOizxDCAdqN/\\nfzOmqnZGMKsk6DNQ1471txAGujbg29i9o41lxYGcuNYYMal0CEceawfMXDH8\\n8T2fbILXRZzpX/I+dlArPMDHqLdfNu2uLwYOmq+aTv7qUm3t1SkR0w==\\n=+0T5\\n-----END PGP SIGNATURE-----\\n\",\n    \"previousReference\": null\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Group chat request stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"origin\": \"self\",\n  \"timestamp\": 1696576021653,\n  \"chatId\": \"3781b4193166ec8f0a1fabe162ef3f2458cac28516d4d20f8dd7faf446815900\",\n  \"from\": \"eip155:0x136E326b22ED48dbB665733eC024407d4fAA4F12\",\n  \"to\": [\n    \"eip155:0x3AD7cf4Ef82dd7f4f040c5eD7352f12C662F21db\",\n    \"eip155:0x1b77273e527Ec5948995f395e3ADa41E708d617e\",\n    \"eip155:0x7711FED1Bc6B1E461aE7869959bdBf529335db5A\"\n  ],\n  \"event\": \"chat.request\",\n  \"meta\": {\n    \"group\": true\n  },\n  \"raw\": {\n    \"verificationProof\": \"pgp:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7IVCRAxpSc3atCeoBYhBGHp9Ifk8vvLrMzkYTGlJzdq\\n0J6gAAD//wf/bTrC0LnwzcUIE10d3XQ2Y56jK6kRVGWKR/7i6CC+hGs5PGKu\\nzefIGdtLVjAqTeKn6PbNnb1t2niLhmMeTbN+knGCzSqx/FN8OodLLmunLNAx\\nWJ5thFyjZWNyIF7IoH2zUdc8zbsjXHzfd70yoxMZSwd5C7EPj/e17kyYHdj2\\nzPQecbTsnCIjJKzi0PBa2YMNoF5fExP3hwTnP0k693r8oC5ivxj7Ht3Hwmu0\\njsv+sGXk+XZPC/JQQfEEviEh3j9dEiNIeHutk/7cFdEnDfEy5dFMxubjf6oH\\nY6vt0q2V2CZJHHw99JYeTHN/d3YDXc4RggoUINo1cysR904owgEsVw==\\n=QTX8\\n-----END PGP SIGNATURE-----\\n:0x136E326b22ED48dbB665733eC024407d4fAA4F12\"\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Group chat request accepted stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.accept\",\n  \"origin\": \"other\",\n  \"timestamp\": \"1696576021843\",\n  \"chatId\": \"3781b4193166ec8f0a1fabe162ef3f2458cac28516d4d20f8dd7faf446815900\",\n  \"from\": \"eip155:0x3AD7cf4Ef82dd7f4f040c5eD7352f12C662F21db\",\n  \"to\": null,\n  \"message\": {\n    \"type\": null,\n    \"content\": null\n  },\n  \"meta\": {\n    \"group\": true\n  },\n  \"reference\": null,\n  \"raw\": {\n    \"fromCAIP10\": \"eip155:0x3AD7cf4Ef82dd7f4f040c5eD7352f12C662F21db\",\n    \"toCAIP10\": \"3781b4193166ec8f0a1fabe162ef3f2458cac28516d4d20f8dd7faf446815900\",\n    \"fromDID\": \"eip155:0x3AD7cf4Ef82dd7f4f040c5eD7352f12C662F21db\",\n    \"toDID\": \"3781b4193166ec8f0a1fabe162ef3f2458cac28516d4d20f8dd7faf446815900\",\n    \"encType\": \"\",\n    \"encryptedSecret\": null,\n    \"signature\": \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7IVCRA1c2iyC1q/7RYhBH5kgFyUQlfGEgbg0jVzaLIL\\nWr/tAABinQf9E+7UUlPnAVu9VifNHS6GJuf/o1RJdE8gL4mi27+rdfr+Y2+Y\\nzZaZbBEJK3BTJgT4op1yJKtg2GZDZUIMWSbkcouE+2YyyYsANS89z/blq/05\\nYf6RFuUeHr3pGIyzkeb7Aj7VEHbUhrK5nHheTkO7K6Gpa9blNEYVrhsYrHbs\\n7UhYKlq6tsoo1E8XXFWBhd+2rVPKF4zhIt9jPdqNPYTQSn7K7hjVvZueWd0Z\\nD7Vr4RO4Af3a/5EiVAvOtxVGLpwhw+FKDOGJhRdNCNLqEc8gZ0q+l1cvglKp\\nfAiqSZpnnTzIUloszJvNFAeQSR/nZQ9wjEihosDztVOOz5uyQ3XhZw==\\n=kX/p\\n-----END PGP SIGNATURE-----\\n\",\n    \"sigType\": \"pgp\",\n    \"verificationProof\": \"pgp-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7IVCRA1c2iyC1q/7RYhBH5kgFyUQlfGEgbg0jVzaLIL\\nWr/tAABinQf9E+7UUlPnAVu9VifNHS6GJuf/o1RJdE8gL4mi27+rdfr+Y2+Y\\nzZaZbBEJK3BTJgT4op1yJKtg2GZDZUIMWSbkcouE+2YyyYsANS89z/blq/05\\nYf6RFuUeHr3pGIyzkeb7Aj7VEHbUhrK5nHheTkO7K6Gpa9blNEYVrhsYrHbs\\n7UhYKlq6tsoo1E8XXFWBhd+2rVPKF4zhIt9jPdqNPYTQSn7K7hjVvZueWd0Z\\nD7Vr4RO4Af3a/5EiVAvOtxVGLpwhw+FKDOGJhRdNCNLqEc8gZ0q+l1cvglKp\\nfAiqSZpnnTzIUloszJvNFAeQSR/nZQ9wjEihosDztVOOz5uyQ3XhZw==\\n=kX/p\\n-----END PGP SIGNATURE-----\\n\",\n    \"previousReference\": null\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Group chat request rejected stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.reject\",\n  \"origin\": \"other\",\n  \"timestamp\": \"1696576601599\",\n  \"chatId\": \"7a200d55cc76428e9938e935b604e993c5f6cb2f3e9a1dd7108a07dd32de0791\",\n  \"from\": \"eip155:0x15d8a67c0B1eb61dA5901109DB4CA382E989aA13\",\n  \"to\": null,\n  \"message\": {\n    \"type\": null,\n    \"content\": null\n  },\n  \"meta\": {\n    \"group\": true\n  },\n  \"reference\": null,\n  \"raw\": {\n    \"fromCAIP10\": \"eip155:0x15d8a67c0B1eb61dA5901109DB4CA382E989aA13\",\n    \"toCAIP10\": \"7a200d55cc76428e9938e935b604e993c5f6cb2f3e9a1dd7108a07dd32de0791\",\n    \"fromDID\": \"eip155:0x15d8a67c0B1eb61dA5901109DB4CA382E989aA13\",\n    \"toDID\": \"7a200d55cc76428e9938e935b604e993c5f6cb2f3e9a1dd7108a07dd32de0791\",\n    \"encType\": \"\",\n    \"encryptedSecret\": null,\n    \"signature\": \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7RZCRA8vrXKPfPlwRYhBECQe8HJcpH3IRX27jy+tco9\\n8+XBAADl0Af7BumEnrIcSj/1H3LvxaqG4wK/G6iTP3iTvXUca0n7UBplXS8P\\nbKV7XFhjollN6jJVZ53mmUHgNDAbfaQTvutm3SRJlFVJxV4zV9uL7UMZW+k4\\nYAJM5XNbqqyn7+KjcLIwBpJ3YLMmmLfdrO4+WJAYswAAJGiS+KPDsU+oOsfm\\nHMWc5aRqis0Epf3FLWELO0uDyydm75575bBe60FxfPjnd5GhUgmMWydNCZH1\\ngeGMLZbhuQ+bvnLjTuWSmnW64cl+jlRCzs2Mpgwvrh0ZQIcPWjVDjNevNohu\\n3l9VXhHuYPUCyGGIyhcPG3tubRcudY+U/uavhQ6XXgWPVdKZ/qwfAw==\\n=0jOy\\n-----END PGP SIGNATURE-----\\n\",\n    \"sigType\": \"pgp\",\n    \"verificationProof\": \"pgp-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7RZCRA8vrXKPfPlwRYhBECQe8HJcpH3IRX27jy+tco9\\n8+XBAADl0Af7BumEnrIcSj/1H3LvxaqG4wK/G6iTP3iTvXUca0n7UBplXS8P\\nbKV7XFhjollN6jJVZ53mmUHgNDAbfaQTvutm3SRJlFVJxV4zV9uL7UMZW+k4\\nYAJM5XNbqqyn7+KjcLIwBpJ3YLMmmLfdrO4+WJAYswAAJGiS+KPDsU+oOsfm\\nHMWc5aRqis0Epf3FLWELO0uDyydm75575bBe60FxfPjnd5GhUgmMWydNCZH1\\ngeGMLZbhuQ+bvnLjTuWSmnW64cl+jlRCzs2Mpgwvrh0ZQIcPWjVDjNevNohu\\n3l9VXhHuYPUCyGGIyhcPG3tubRcudY+U/uavhQ6XXgWPVdKZ/qwfAw==\\n=0jOy\\n-----END PGP SIGNATURE-----\\n\",\n    \"previousReference\": null\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Participant removed from group stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.group.participant.remove\",\n  \"origin\": \"other\",\n  \"timestamp\": 1696576219688,\n  \"chatId\": \"a64abd4256a607e7bd2ab4068d9024ddb0d355687267c0e39eb31a3a7d245ab0\",\n  \"from\": \"eip155:0x50bbFA4833e89389FE00a62D14E6eDDf1c155855\",\n  \"to\": [\n      \"eip155:0x50bbFA4833e89389FE00a62D14E6eDDf1c155855\"\n  ],\n  \"raw\": {\n      \"verificationProof\": \"pgp:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7LbCRByYd40HdgiDBYhBLSq7nZZRBYzsnezMXJh3jQd\\n2CIMAADNoAf/UxniQM/ZtzDuSmhIuvWiuGzl8vkeFbN2dOLW1a2yJO2Z8jDa\\nDDuxyTcSt9d9YyCO/NojhbxmScE73gBysVt9OLdUn9hXlAKclYjXu4r7KvLk\\nmrQyMlN3akDjpzH1gGiiCSi18vll07KRGSgWt3P13cA9vGpT+YV3A6uiCGUS\\nE3CV16wdYTd0FUPJHckTJVVu3se1K3NfzzELMwIeN9bPJLxaZD3u3t074dN/\\nc+jwUS1OC0sUQ5ptHCgfNIMgtueutKSPPZO6MKVBE/qQauKh81PHgzrhW0OE\\n6gMkSDPjVbncjBSumofTWga7udk65RhwysCxx9qa3O/u6skBH0N+bg==\\n=oqeR\\n-----END PGP SIGNATURE-----\\n:0x50bbFA4833e89389FE00a62D14E6eDDf1c155855\"\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Participant joins a group stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.group.participant.join\",\n  \"origin\": \"other\",\n  \"timestamp\": 1696576531987,\n  \"chatId\": \"1032596dea9f24a7a0ee419668f7d39da32a2fb32003a27c6b293cc6668d2a82\",\n  \"from\": \"eip155:0x8c1EAB3227250526f133681630c2B191969f8581\",\n  \"to\": null,\n  \"raw\": {\n    \"verificationProof\": \"pgp:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7QTCRCI26TZ8c3OJBYhBNDtmDIWimjDn9MUIIjbpNnx\\nzc4kAAAfFwgAgQkKBS/W7e53maVOne1lob2Qk14gWfUQm/LaRlP0iO5YwPlg\\njckyQaX0Ient3PmLSqUoykuKWH2wR53YJ6Wgb//EkOxdywkrDbAZCGnQgxaO\\nakTU30mDaV06HLQjDQmRTHdeozwV+6PF+i71vZPNmsCSI8x/VSex/gMrs2nk\\nhSAHnuhUcuEWHshc+FXEO70acz8nkhH7Pw0icDwb50yFZNuekrK4rjUPmXb2\\nwBzwFDjpfS6n8JMQz4//jYXyFuDfzYlr97ymWdltR5h8QKs1iZsN++X/5FsA\\nO2EltMRqhxcpPApcHB9QQe6CAZFG+1fB8FKOXx6MZMwHqjyEtrL27Q==\\n=bDP5\\n-----END PGP SIGNATURE-----\\n:0x8c1EAB3227250526f133681630c2B191969f8581\"\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT - Participant leaves a group stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.group.participant.leave\",\n  \"origin\": \"other\",\n  \"timestamp\": 1696576531987,\n  \"chatId\": \"1032596dea9f24a7a0ee419668f7d39da32a2fb32003a27c6b293cc6668d2a82\",\n  \"from\": \"eip155:0x8c1EAB3227250526f133681630c2B191969f8581\",\n  \"to\": null,\n  \"raw\": {\n      \"verificationProof\": \"pgp:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7QTCRCI26TZ8c3OJBYhBNDtmDIWimjDn9MUIIjbpNnx\\nzc4kAAAfFwgAgQkKBS/W7e53maVOne1lob2Qk14gWfUQm/LaRlP0iO5YwPlg\\njckyQaX0Ient3PmLSqUoykuKWH2wR53YJ6Wgb//EkOxdywkrDbAZCGnQgxaO\\nakTU30mDaV06HLQjDQmRTHdeozwV+6PF+i71vZPNmsCSI8x/VSex/gMrs2nk\\nhSAHnuhUcuEWHshc+FXEO70acz8nkhH7Pw0icDwb50yFZNuekrK4rjUPmXb2\\nwBzwFDjpfS6n8JMQz4//jYXyFuDfzYlr97ymWdltR5h8QKs1iZsN++X/5FsA\\nO2EltMRqhxcpPApcHB9QQe6CAZFG+1fB8FKOXx6MZMwHqjyEtrL27Q==\\n=bDP5\\n-----END PGP SIGNATURE-----\\n:0x8c1EAB3227250526f133681630c2B191969f8581\"\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT_OPS - Group created stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.group.create\",\n  \"origin\": \"self\",\n  \"timestamp\": 1696576020848,\n  \"chatId\": \"3781b4193166ec8f0a1fabe162ef3f2458cac28516d4d20f8dd7faf446815900\",\n  \"from\": \"eip155:0x136E326b22ED48dbB665733eC024407d4fAA4F12\",\n  \"meta\": {\n    \"name\": \"test\",\n    \"description\": \"test\",\n    \"image\": \"test\",\n    \"owner\": \"eip155:0x136E326b22ED48dbB665733eC024407d4fAA4F12\",\n    \"members\": [],\n    \"admins\": [\n      {\n        \"address\": \"eip155:0x136E326b22ED48dbB665733eC024407d4fAA4F12\",\n        \"profile\": {\n          \"image\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA30lEQVR4AcXBsa2DMBSG0S+/3LJBKkZgjUzADi4sJEoqSkvIBSNEYhtG8BIMkNdeGqd4iu45j+f79aHh7HasY91oGZcJa7giLcKZcCacBb441g1rXCZajnXjJtEknAlnwlk4u52WIUWsfEWaEjdnt9MinAlnwlk41g0rp4o1l57/GFLEmkuPJZwJZ8JZ4IucKr8knAlnwlnIqWLNpcfKqWKd3U7LcEWsufRYOVUs4Uw4E87CXHqscZmwRu6GK9Jydjs3C3frhiWcCWfC2eP5fn0w5tLzSzlVLOFMOBPO/gCOGzPC9wXXhQAAAABJRU5ErkJggg==\",\n          \"publicKey\": \"-----BEGIN PGP PUBLIC KEY BLOCK-----\\n\\nxsBNBGUfshMBCADOFCC0uSjbBGbjJi5QWaEtDpv7PMGqA0kU+e2mHBvZgGM2\\nimibNukifrDArM+oJL3/OnjQHwkF5L6W3oCnKwe1hwSiceLDf3uR0F5E+wWA\\nEeFv3xPdYYpqbT9tdYXlOCJpoSJH2TM7mcvSECltpSOIYAWpD2E450kTTHCJ\\nYDrnrMdPifrCTSrfh4X1pKkbdSDJIrHHeqVTDcUPZhZlbXdEypqK4u5wjEqe\\nLc/AprwDyeDx+ltGAo4hmD3ojHGkckk7ctW9RmdqGBGCB/VaK35JT0Tp6AQ8\\nrmKOejF4nxbH5eCzUX4vC6xz666gWGj2eGDnS5XCGaBtfWfvYvTCoe4HABEB\\nAAHNAMLAigQQAQgAPgUCZR+yEwQLCQcICRAxpSc3atCeoAMVCAoEFgACAQIZ\\nAQIbAwIeARYhBGHp9Ifk8vvLrMzkYTGlJzdq0J6gAABuBwgAvNkpwWQCoB8D\\nFC56ir7s2tRlzpIUb+nnK5ygqpxp/Wvo1+TpFoWGkdUOC0ng9H98MrJmEh1k\\nhLkaBv1VPQN6l+O7tjAyvWNA+JfKLaefxc6EB0KFUOZH1E/gFWc8b6+cciXZ\\npAINmBW8+PPSlt1EYuo2UAXqEAOW4dlez8Z6OCf7c4L7+MZKVv2a5r3Cqfl2\\nNHaI4lHQYabWt1tsoVyN7kyfZkENXQQv3LsJ7o98WK0FnfFEM/hA1I5jM8Ww\\nf0qBukDmzOTxtgYDE7mo3xHNDpjptr8lk5oOFPsHCpOwgksAVKK4yHqy4aQe\\nqXPBjBMmUBUuSlB/8KwI6FtX2JFm9s7ATQRlH7ITAQgAySkQBm6drDe5FJI1\\nUe5QhoUXX8ugfXyCR7SoL4JMxVmhaO9/Fj/Swy1UoagONZYJZzcamJWnPzAR\\nvfYBEzSEFGrkPKVdrJAM7Zf1sX5v+wpUtLTE6/gSCzAJMnK11pdgTHqEn+Rc\\nfPuTnGYFZw3EybYMbhr/wBCyvFd49ES+8q3jrjHbMGS5lFCnVFYE/gyN9nqp\\nSG0biMS7pl+w51bjIfJ9bRiUzrxpk5yvr9WDqMTVJA0N6ZRsD+xtkipc7XFe\\nnsY0caCVVYFOH9YCiwuytC4ShU2VHjEPXcgzLTk9k5ecfE8AdwiYgLsWOHTn\\nbz1JpwqYJx5Rndkb4vXdV6Pi7wARAQABwsB2BBgBCAAqBQJlH7ITCRAxpSc3\\natCeoAIbDBYhBGHp9Ifk8vvLrMzkYTGlJzdq0J6gAACZvQgAyJrLhQ9/MsBU\\n6E1ZwdKlKBWi62A4SBXRZJpRl2hBwagyNq7zbsX/yO7D7fW1FVLfcT28cmCe\\nCUD6aa904dQ8GVDyuUqRsSXZZvZqFdddgNT7O8fCbIbMCihfz9Gg6mbxVHcy\\nOby7nkOBbrKDBpIPab9yMHHYsycsPDo8/8cGI9RNZz06aAgOVGjfcMTuw8RR\\nXWINBmTWn9I4xrylEtH7SQU9b0Alj2SxfV9N/+mMGGv/Zo3E99/a/p2DLExY\\n/+dk0I9kxjxHkjtq49/tT00JYLDkHVtMgGxjl9n8Uv7KXFHkuGFg7gV9ivdN\\n1phi4oalkdY5sqbd5GkUxM7M1VN6Xg==\\n=nCF5\\n-----END PGP PUBLIC KEY BLOCK-----\\n\"\n        }\n      }\n    ],\n    \"pending\": {\n      \"members\": [],\n      \"admins\": []\n    },\n    \"private\": false,\n    \"rules\": {}\n  },\n  \"raw\": {\n    \"verificationProof\": \"pgp:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7IUCRAxpSc3atCeoBYhBGHp9Ifk8vvLrMzkYTGlJzdq\\n0J6gAADrLAgAgDSQ7CJ3ZVOPye++rkpyR4Q9XSGnV3Z0bqO+HCqFDW/hTmJ+\\n12kjrAQV43Q1fQviIMqh+RTA9WJHPA14vu/ZYHjmCM/HfPSxbY4zV/7FJF9C\\nCaEgq+wGs+2vhixHX4Zoo4qrxdXQ6q8Wl4XXW3SVaw1sGxfIh+uMje54Tsil\\nnaLNK+lIPdSAJDw1hOHIM3iMWaSzZasLaXkJ6KY9KefW52mhg112BZI94FxJ\\n/wFQtlIaXGZHhCbaqiigjRPKo17KyW7PX6I0rTAQJlwHyIKS/vIH8Uahi2x3\\ndzjonpXjjtsgcP+VhzEP1jxQkpo4mG47Fxkxzp/Q7ztdSGHnJGlXkQ==\\n=HydQ\\n-----END PGP SIGNATURE-----\\n\"\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response (CONSTANTS.STREAM.CHAT_OPS - Group updated stream)",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"event\": \"chat.group.update\",\n  \"origin\": \"self\",\n  \"timestamp\": 1696576021192,\n  \"chatId\": \"3781b4193166ec8f0a1fabe162ef3f2458cac28516d4d20f8dd7faf446815900\",\n  \"from\": \"eip155:0x136E326b22ED48dbB665733eC024407d4fAA4F12\",\n  \"meta\": {\n    \"name\": \"test\",\n    \"description\": \"Updated Description\",\n    \"image\": \"test\",\n    \"owner\": \"eip155:0x136E326b22ED48dbB665733eC024407d4fAA4F12\",\n    \"members\": [],\n    \"admins\": [\n      {\n        \"address\": \"eip155:0x136E326b22ED48dbB665733eC024407d4fAA4F12\",\n        \"profile\": {\n          \"image\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA30lEQVR4AcXBsa2DMBSG0S+/3LJBKkZgjUzADi4sJEoqSkvIBSNEYhtG8BIMkNdeGqd4iu45j+f79aHh7HasY91oGZcJa7giLcKZcCacBb441g1rXCZajnXjJtEknAlnwlk4u52WIUWsfEWaEjdnt9MinAlnwlk41g0rp4o1l57/GFLEmkuPJZwJZ8JZ4IucKr8knAlnwlnIqWLNpcfKqWKd3U7LcEWsufRYOVUs4Uw4E87CXHqscZmwRu6GK9Jydjs3C3frhiWcCWfC2eP5fn0w5tLzSzlVLOFMOBPO/gCOGzPC9wXXhQAAAABJRU5ErkJggg==\",\n          \"publicKey\": \"-----BEGIN PGP PUBLIC KEY BLOCK-----\\n\\nxsBNBGUfshMBCADOFCC0uSjbBGbjJi5QWaEtDpv7PMGqA0kU+e2mHBvZgGM2\\nimibNukifrDArM+oJL3/OnjQHwkF5L6W3oCnKwe1hwSiceLDf3uR0F5E+wWA\\nEeFv3xPdYYpqbT9tdYXlOCJpoSJH2TM7mcvSECltpSOIYAWpD2E450kTTHCJ\\nYDrnrMdPifrCTSrfh4X1pKkbdSDJIrHHeqVTDcUPZhZlbXdEypqK4u5wjEqe\\nLc/AprwDyeDx+ltGAo4hmD3ojHGkckk7ctW9RmdqGBGCB/VaK35JT0Tp6AQ8\\nrmKOejF4nxbH5eCzUX4vC6xz666gWGj2eGDnS5XCGaBtfWfvYvTCoe4HABEB\\nAAHNAMLAigQQAQgAPgUCZR+yEwQLCQcICRAxpSc3atCeoAMVCAoEFgACAQIZ\\nAQIbAwIeARYhBGHp9Ifk8vvLrMzkYTGlJzdq0J6gAABuBwgAvNkpwWQCoB8D\\nFC56ir7s2tRlzpIUb+nnK5ygqpxp/Wvo1+TpFoWGkdUOC0ng9H98MrJmEh1k\\nhLkaBv1VPQN6l+O7tjAyvWNA+JfKLaefxc6EB0KFUOZH1E/gFWc8b6+cciXZ\\npAINmBW8+PPSlt1EYuo2UAXqEAOW4dlez8Z6OCf7c4L7+MZKVv2a5r3Cqfl2\\nNHaI4lHQYabWt1tsoVyN7kyfZkENXQQv3LsJ7o98WK0FnfFEM/hA1I5jM8Ww\\nf0qBukDmzOTxtgYDE7mo3xHNDpjptr8lk5oOFPsHCpOwgksAVKK4yHqy4aQe\\nqXPBjBMmUBUuSlB/8KwI6FtX2JFm9s7ATQRlH7ITAQgAySkQBm6drDe5FJI1\\nUe5QhoUXX8ugfXyCR7SoL4JMxVmhaO9/Fj/Swy1UoagONZYJZzcamJWnPzAR\\nvfYBEzSEFGrkPKVdrJAM7Zf1sX5v+wpUtLTE6/gSCzAJMnK11pdgTHqEn+Rc\\nfPuTnGYFZw3EybYMbhr/wBCyvFd49ES+8q3jrjHbMGS5lFCnVFYE/gyN9nqp\\nSG0biMS7pl+w51bjIfJ9bRiUzrxpk5yvr9WDqMTVJA0N6ZRsD+xtkipc7XFe\\nnsY0caCVVYFOH9YCiwuytC4ShU2VHjEPXcgzLTk9k5ecfE8AdwiYgLsWOHTn\\nbz1JpwqYJx5Rndkb4vXdV6Pi7wARAQABwsB2BBgBCAAqBQJlH7ITCRAxpSc3\\natCeoAIbDBYhBGHp9Ifk8vvLrMzkYTGlJzdq0J6gAACZvQgAyJrLhQ9/MsBU\\n6E1ZwdKlKBWi62A4SBXRZJpRl2hBwagyNq7zbsX/yO7D7fW1FVLfcT28cmCe\\nCUD6aa904dQ8GVDyuUqRsSXZZvZqFdddgNT7O8fCbIbMCihfz9Gg6mbxVHcy\\nOby7nkOBbrKDBpIPab9yMHHYsycsPDo8/8cGI9RNZz06aAgOVGjfcMTuw8RR\\nXWINBmTWn9I4xrylEtH7SQU9b0Alj2SxfV9N/+mMGGv/Zo3E99/a/p2DLExY\\n/+dk0I9kxjxHkjtq49/tT00JYLDkHVtMgGxjl9n8Uv7KXFHkuGFg7gV9ivdN\\n1phi4oalkdY5sqbd5GkUxM7M1VN6Xg==\\n=nCF5\\n-----END PGP PUBLIC KEY BLOCK-----\\n\"\n        }\n      }\n    ],\n    \"pending\": {\n      \"members\": [],\n      \"admins\": []\n    },\n    \"private\": false,\n    \"rules\": {}\n  },\n  \"raw\": {\n    \"verificationProof\": \"pgp:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlH7IVCRAxpSc3atCeoBYhBGHp9Ifk8vvLrMzkYTGlJzdq\\n0J6gAACfBQgAgDYEX8fSjArginDEbjDmMxQxmieIMt3/N2wTjWU/r8muAnNb\\nIpijtAvftEkCoVnefXH9rlILr0rUGLwFXTsc6YYO6u9Tr1iODQQZopD8Bqtc\\ntKE5RzRT6qS6QUQQP8YNlh/iqtTWCzdY7aYKGNWkrSOUKhu+iHKLIsEqNSf2\\nYV9S9qksGWhK9xfsExkHjR0Df3yo/BUwpDKW/duiwBPgl99aUYunjAQyRRun\\njlXmX6W+bEAlEmJABq5C9Tw+M/+j4AiBy57kdrxAQ6aKHnfGJafH7Xo8/BuN\\nG6XJdNELJKug/5Xb+eWjO3JggGOD90fetTKcVdzGJPhXaVyIhL0e/A==\\n=+sdF\\n-----END PGP SIGNATURE-----\\n:0x136E326b22ED48dbB665733eC024407d4fAA4F12\"\n  }\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "re-initialize-chat-stream",
      children: "Re-initialize chat stream"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To reinstate a chat stream. Useful for updating an already initialized stream objects to add / remove listen events or filter options."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "codetabs",
      groupId: "code-examples",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "js",
        attributes: {
          className: "codetab js"
        },
        default: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            children: "// await stream.reinit(listen, newOptions)\nconst newStream = await stream.reinit(\n  [\n    CONSTANTS.STREAM.CHAT, // Listen for chat messages\n    CONSTANTS.STREAM.CONNECT, // Listen for connection events\n    CONSTANTS.STREAM.DISCONNECT, // Listen for disconnection events\n  ],\n  {\n    // Filter options:\n    filter: {\n      // Listen to all channels and chats (default):\n      channels: ['*'],\n      chats: ['*'],\n\n      // Listen to specific channels and chats:\n      // channels: ['channel-id-1', 'channel-id-2'],\n      // chats: ['chat-id-1', 'chat-id-2'],\n\n      // Listen to events with a specific recipient:\n      // recipient: '0x...' (replace with recipient wallet address)\n    },\n    // Connection options:\n    connection: {\n      retries: 3, // Retry connection 3 times if it fails\n    },\n    raw: false, // Receive events in structured format\n  }\n);\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "reinit-stream-chat-parameters",
      children: "Reinit Stream chat parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Sub-Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "listen"
              })
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "constant"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Choose from various streams: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CHAT"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CHAT_OPS"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.NOTIF"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.CONNECT"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CONSTANTS.STREAM.DISCONNECT"
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "newOptions"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "PushStreamInitializeProps"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Optional configuration properties for initializing the stream."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "newOptions.filter"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Configure to listen to specific chats or notifications."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "newOptions.filter.channels"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "array of strings"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "['*']"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Pass list of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "channels"
            }), " over here to only listen to notifications coming from them."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "newOptions.filter.chats"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "array of strings"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "['*']"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Pass list of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatids"
            }), " over here to only listen to chats coming from them."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "newOptions.connection"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Option to configure the connection settings of the stream"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "newOptions.connection.retries"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "number"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "3"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Number of automatic retries incase of error"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "newOptions.raw"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "If enabled, respond with metadata useful in verifying the integrity of incoming chats or notifications among other things."
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Note: Parameters ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "in this style"
          })
        }), " are mandatory."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "stream-info-api",
      children: "Stream info API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To get the info of the current stream."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "codetabs",
      groupId: "code-examples",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "js",
        attributes: {
          className: "codetab js"
        },
        default: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            children: "// stream.info()\nconst streamInfo = await stream.info();\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  options: { raw: false, connection: { auto: true, retries: 3 }, env: 'prod' },\n  listen: [ 'STREAM.CHAT', 'STREAM.CONNECT', 'STREAM.DISCONNECT' ]\n}\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "stream-status-api",
      children: "Stream status API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To get the connection status of the current stream."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "codetabs",
      groupId: "code-examples",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "js",
        attributes: {
          className: "codetab js"
        },
        default: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            children: "// stream.connected()\nconst streamStatus = await stream.connected();\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "typescript true // if connected, else false "
        })
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
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

/***/ 119365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ }),

/***/ 411470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(823104);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(956347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(300205);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(757485);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(231682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(289466);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){var _React$Children$toArr,_React$Children$toArr2;return(_React$Children$toArr=(_React$Children$toArr2=react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);}))===null||_React$Children$toArr2===void 0?void 0:_React$Children$toArr2.filter(Boolean))!==null&&_React$Children$toArr!==void 0?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.X)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>tabRefs.push(tabControl),onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value},value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:'margin-top--md'});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,{...props,...tabs}),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,{...props,...tabs})]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,{...props,children:sanitizeTabsChildren(props.children)},String(isBrowser));}

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