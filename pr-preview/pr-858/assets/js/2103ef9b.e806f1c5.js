"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[41883],{

/***/ 239952:
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	id: 'docs-chat-develop-conditional-rules-for-group',
	title: 'Conditional Rules for Group',
	hide_title: true,
	slug: './conditional-rules-for-group',
	displayed_sidebar: 'pushChatSidebar',
	sidebar_position: 10,
	image: '/assets/docs/previews/docs_chat_develop--conditional_rules_for_group.png'
};
const contentTitle = 'Conditional gating overview';
const metadata = {
  "id": "chat/build/docs-chat-develop-conditional-rules-for-group",
  "title": "Conditional Rules for Group",
  "description": "Conditional gating allows you to define rules for the members of the group for different privileges / permissions such as entry or chat. It is driven by Push Chat rules engine which is inspired by json rules engine and allows you to create powerful dynamics guiding communication for your community. Some examples of what you can achieve with it —",
  "source": "@site/docs/chat/01-build/10-Develop-Conditional-Rule-For-Groups.mdx",
  "sourceDirName": "chat/01-build",
  "slug": "/chat/build/conditional-rules-for-group",
  "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/conditional-rules-for-group",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/chat/01-build/10-Develop-Conditional-Rule-For-Groups.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 10,
  "frontMatter": {
    "id": "docs-chat-develop-conditional-rules-for-group",
    "title": "Conditional Rules for Group",
    "hide_title": true,
    "slug": "./conditional-rules-for-group",
    "displayed_sidebar": "pushChatSidebar",
    "sidebar_position": 10,
    "image": "/assets/docs/previews/docs_chat_develop--conditional_rules_for_group.png"
  },
  "sidebar": "pushChatSidebar",
  "previous": {
    "title": "Group Permissions",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/group-permissions"
  },
  "next": {
    "title": "Manage Group",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/manage-group"
  }
};
const assets = {

};






const toc = [{
  "value": "Understanding the rules object",
  "id": "understanding-the-rules-object",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 3
}, {
  "value": "Rules object Parameters",
  "id": "rules-object-parameters",
  "level": 3
}, {
  "value": "Criteria object Parameters",
  "id": "criteria-object-parameters",
  "level": 3
}, {
  "value": "When using type - <code>PUSH</code>",
  "id": "when-using-type---push",
  "level": 4
}, {
  "value": "Use Case Example - Token gated community",
  "id": "use-case-example---token-gated-community",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 3
}, {
  "value": "Solution",
  "id": "solution",
  "level": 3
}, {
  "value": "Token gated group and send message example",
  "id": "token-gated-group-and-send-message-example",
  "level": 2
}, {
  "value": "NFT gated group example",
  "id": "nft-gated-group-example",
  "level": 2
}, {
  "value": "NFT gated group github example repo",
  "id": "nft-gated-group-github-example-repo",
  "level": 3
}, {
  "value": "Guild gated group example",
  "id": "guild-gated-group-example",
  "level": 2
}, {
  "value": "Examples for gating entry to the group",
  "id": "examples-for-gating-entry-to-the-group",
  "level": 3
}, {
  "value": "Example 1",
  "id": "example-1",
  "level": 4
}, {
  "value": "Example 2",
  "id": "example-2",
  "level": 4
}, {
  "value": "Example 3",
  "id": "example-3",
  "level": 4
}, {
  "value": "Examples for gating entry and chat permissions to the group",
  "id": "examples-for-gating-entry-and-chat-permissions-to-the-group",
  "level": 3
}, {
  "value": "Example 1",
  "id": "example-1-1",
  "level": 4
}, {
  "value": "Example 2",
  "id": "example-2-1",
  "level": 4
}, {
  "value": "Example 3",
  "id": "example-3-1",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "conditional-gating-overview",
      children: "Conditional gating overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Conditional gating allows you to define rules for the members of the group for different privileges / permissions such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "entry"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "chat"
      }), ". It is driven by Push Chat rules engine which is inspired by json rules engine and allows you to create powerful dynamics guiding communication for your community. Some examples of what you can achieve with it —"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Creating token gated group"
        }), " - ie: user needs to hold XX token to join the group"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Creating nft gated group"
        }), " - ie: user needs to hold XX NFT to join the gorup"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Defining multi-chain conditions"
        }), " - ie: user can join the group if they have 5 tokens on Ethereum or 10 tokens on Polygon"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Defining sending message conditions"
        }), " - ie: user needs 1 token to join the group but 100 to send message"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Defining non-web3 conditions using Guild"
        }), " - ie: user needs to follow ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "@pushprotocol"
        }), " on twitter to be able to join the group"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Creating game theories by combining one or multiple conditions"
        }), " - ie: you need 1 token on any chain to join the group but sending messages require you to hold 1000 tokens or 1 NFT or 20 POAPs, etc"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Conditional Gating of Group | Push Chat | Push Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "understanding-the-rules-object",
      children: "Understanding the rules object"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "rules"
      }), " object is an optional parameter that you pass in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/chat/build/create-group",
        children: "create group API call"
      }), " to conditional gate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "joining"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "sending message"
      }), " in group chat."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "rules"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n├ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "permission"
      }), " - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "entry"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "chat"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n └ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "conditions"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n  └ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "decider"
      }), " - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "any"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "all"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n   └", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "condition a"
      }), " - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "any"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "all"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n    └", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "criteria 1"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n    └", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "criteria 2"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n   └", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "condition b"
      }), " - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "any"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "all"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n    └", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "criteria 3"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "rules"
        })
      }), " object is made up of individual ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "permissions"
      }), " that define privilages of the group."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "permission"
        })
      }), " object contains ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "conditions"
      }), " that needs to be satisfied."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "conditions"
        })
      }), " object is an array of one or more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "condition"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "decider"
        })
      }), " the namespace (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "any"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "all"
      }), ") decides if all of the conditions or anyone of the condition needs to be fulfilled."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "condition"
        })
      }), " contains array of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "criteria"
      }), ", the namespace (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "any"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "all"
      }), ") decides if all criterias or anyone of the criteria needs to be fulfilled."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "criteria"
        })
      }), " is the atomic condition that has ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "type"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "category"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "subcategory"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "data"
      }), ", based on which a particular condition is deemed as completed or failed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To summarize, a list of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "criteria"
      }), " is created by you that is then defined inside ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "decider"
      }), " to define their logical operation which is then passed in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "conditions"
      }), " of a particular ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "permission"
      }), ". The list of individual ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "permission"
      }), " is then attached to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "rules"
      }), " of the group to enable Push Chat rule engine to create dynamic communities with creative game theories."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "rules-object-parameters",
      children: "Rules object Parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Subtype"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Rules object"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Permissions object for specific privilege of the group. Multiple permission object can reside within ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules"
            }), " object"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "entry"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Permissions object for specific privilege of the group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "entry"
            }), " permission conditionalizes joining a group"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "chat"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Permissions object for specific privilege of the group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "chat"
            }), " permission conditionalizes sending a message in that group"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission].conditions"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "array of objects"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Contains array of all ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "condition"
            }), " objects"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission].conditions.[decider]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Contains namespace ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "any"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "all"
            }), " by which it's decided whether one condition or all condition needs to be fulfilled"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission].conditions.[decider].[condition]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "array of objects"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Contains lists of criteria objects defined by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "decider"
            }), " key, Valid ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "decider"
            }), " keys are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "any"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "all"
            }), ". ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "any"
            }), " will mean only one criteria needs to be fulfilled, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "all"
            }), " means all criteria should pass"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "any"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "any"
            }), " will mean only one criteria needs to be fulfilled from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission].conditions.[condition]"
            }), " array"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "all"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "all"
            }), " will mean only one criteria needs to be fulfilled from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission].conditions.[condition]"
            }), " array"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission].conditions.[decider].[condition].[criteria]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Individual criteria inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "rules.[permission].conditions.[condition]"
            }), " array"]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "criteria-object-parameters",
      children: "Criteria object Parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Criteria object supports multiple access control protocols which can have different conditions and rules, currently Push Chat supports ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PUSH"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "GUILD"
      }), " type in criteria, owing to the way each individual protocol handles their respective ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "type"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "category"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "subcategory"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "data"
      }), ", we are segregating the options and what they do for clarity."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "when-using-type---push",
      children: ["When using type - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PUSH"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Subtype"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {})]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "[criteria]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Criteria object"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "type"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Define the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "type"
            }), " of the criteria, needs to be ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "PUSH"
            }), " for below category, subcategory to be applicable"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "category"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            }), " - can be ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC20"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC721"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CustomEndpoint"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Defines the category of the criteria, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC20"
            }), " means ERC-20 or normal token, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC721"
            }), " means ERC-721 or NFT tokens, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CustomEndpoint"
            }), " means a URL will be provided that results in 200 OK"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "subcategory"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Further narrows down the condition that you want to run. For ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC20"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC721"
            }), " - supported conditions are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "holder"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "owner"
            }), " which means that the criteria will check if a wallet is owner or holder. For ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CustomEndpoint"
            }), ", the subcategory is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "GET"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "POST"
            }), " depending upon what HTTP request you want to use"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "data"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "object"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "define the data to be passed for checking conditions of criteria"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "contract"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Only used for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC20"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC721"
            }), " category. Remember to define the contract in chain agnostic fashion. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{chain_standard}:{chain_id}:{contract_address}"
              })
            }), ", for example: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "eip155:1:0xf418588522d5dd018b425E472991E52EBBeEEEEE"
            }), " points to $PUSH token on Ethereum mainnet while ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1"
            }), " points to $PUSH token on Polygon mainnet"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "comparison"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            }), " - supports ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<="
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: ">="
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "=="
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Only used for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC20"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC721"
            }), " category. Define what comparison to use while comparing the data"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "amount"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "number"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Only used for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC20"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ERC721"
            }), " category. Define the number to be passed in the amount"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "url"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Only used for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "CustomEndpoint"
            }), " category. Pass in the URL that when polled will return 200 OK for success. API url are automatically appended with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{{user_address}}/checkAccess"
            }), " while checking access"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "use-case-example---token-gated-community",
      children: "Use Case Example - Token gated community"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We want to create a group that whose content is not visible to anyone outside our community of $PUSH. Furthermore, we want to make sure that the group can be viewed by anyone who has at least 1 $PUSH on Ethereum or on Polygon."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "solution",
      children: "Solution"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let's break down the problem statement into individual requirements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Visibility:"
      }), " Creating a group that is not visible to anyone outside it's member is simple, we need to set up ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "private"
      }), " flag in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/chat/build/create-group#create-group-api",
        children: "create group API"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Group Join Permission:"
      }), " We have two criteria over here:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Criteria 1"
        }), ": User should have 1 $PUSH on Ethereum"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Criteria 2"
        }), ": User should have 1 $PUSH on Polygon"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Push token on Ethereum Criteria\n{\n  \"type\": \"PUSH\", // define type that rules engine should go for\n  \"category\": \"ERC20\", // define it's ERC20 token that you want to check, supports ERC721 as well\n  \"subcategory\": \"holder\", // define if you are checking 'holder' or 'owner'\n  \"data\": {\n    \"contract\": \"eip155:1:0xf418588522d5dd018b425E472991E52EBBeEEEEE\", // $PUSH address on ETH\n    \"comparison\": \">=\", // what comparison needs to pass\n    \"amount\": 1, // amount that needs to passed\n    \"decimals\": 18, // the decimals for the token\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Push token on Polygon Criteria\n{\n  \"type\": \"PUSH\", // define type that rules engine should go for\n  \"category\": \"ERC20\", // define it's ERC20 token that you want to check, supports ERC721 as well\n  \"subcategory\": \"holder\", // define if you are checking 'holder' or 'owner'\n  'data': {\n    \"contract\": \"eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1\", // $PUSH address on ETH\n    \"comparison\": \">=\", // what comparison needs to pass\n    \"amount\": 1, // amount that needs to passed\n    \"decimals\": 18, // the decimals for the token\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Either of criteria should be able to allow user to join the group, this means that the condition's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "namespace"
        }), " to use to combine these criterias would be ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "any"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// decider object - 'any' since either condition should allow access\n\"any\": [\n  {\n    \"type\": \"PUSH\", // define type that rules engine should go for\n    \"category\": \"ERC20\", // define it's ERC20 token that you want to check, supports ERC721 as well\n    \"subcategory\": \"holder\", // define if you are checking 'holder' or 'owner'\n    \"data\": {\n      \"contract\": \"eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1\", // $PUSH address on ETH\n      \"comparison\": \">=\", // what comparison needs to pass\n      \"amount\": 1, // amount that needs to passed\n      \"decimals\": 18, // the decimals for the token\n    }\n  },\n  {\n    \"type\": \"PUSH\", // define type that rules engine should go for\n    \"category\": \"ERC20\", // define it's ERC20 token that you want to check, supports ERC721 as well\n    \"subcategory\": \"holder\", // define if you are checking 'holder' or 'owner'\n    \"data\": {\n      \"contract\": \"eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1\", // $PUSH address on ETH\n      \"comparison\": \">=\", // what comparison needs to pass\n      \"amount\": 1, // amount that needs to passed\n      \"decimals\": 18, // the decimals for the token\n    }\n  }\n]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Since there are no other conditions that are required, create the entire rules object, conditions only has one condition in entry so namespace for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "conditions"
        }), " doesn't matter but to keep things clear, we will mark it as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "all"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "  \"rules\": {\n    \"entry\": { // permission object\n      \"conditions\": { // conditions object\n        \"any\": [ // conditions namespace decider - Either group owner / admin invites the user or the user has $PUSH on Ethereum or Polygon\n          { // decider 1 - If admin or owner invites someone\n            \"any\": [\n              { // criteria 1\n                \"type\": \"PUSH\",\n                \"category\": \"INVITE\",\n                \"subcategory\": \"DEFAULT\",\n                \"data\": {\n                    \"inviterRoles\": [\n                        \"ADMIN\",\n                        \"OWNER\"\n                    ]\n                }\n              }\n            ]\n          },\n          {\n            \"any\": [ // decider 2 - If user has $PUSH on Ethereum or on Polygon\n              { // criteria object\n                \"type\": \"PUSH\", // define type that rules engine should go for\n                \"category\": \"ERC20\", // define it's ERC20 token that you want to check, supports ERC721 as well\n                \"subcategory\": \"holder\", // define if you are checking 'holder' or 'owner'\n                \"data\": {\n                  \"contract\": \"eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1\", // $PUSH address on ETH\n                  \"comparison\": \">=\", // what comparison needs to pass\n                  \"amount\": 1, // amount that needs to passed\n                  \"decimals\": 18, // the decimals for the token\n                }\n              },\n              { // criteria object\n                \"type\": \"PUSH\", // define type that rules engine should go for\n                \"category\": \"ERC20\", // define it's ERC20 token that you want to check, supports ERC721 as well\n                \"subcategory\": \"holder\", // define if you are checking 'holder' or 'owner'\n                \"data\": {\n                  \"contract\": \"eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1\", // $PUSH address on ETH\n                  \"comparison\": \">=\", // what comparison needs to pass\n                  \"amount\": 1, // amount that needs to passed\n                  \"decimals\": 18, // the decimals for the token\n                }\n              }\n            ]\n          }\n        ]\n      }\n    }\n    // since we are not defining chat permissions, it means that any user who is part of the group can chat\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Finally pass this rules object into the group that we are creating using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chat/build/create-group",
          children: "create group API call"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Creating your token gated community\nconst createTokenGatedGroup = await userAlice.chat.group.create(\n  'Push Community',\n  {\n    description: 'Token gated web3 native chat example', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // not needed as per problem statement, can omit\n    private: true,\n    rules: {\n      entry: {\n        // permission object\n        conditions: {\n          // conditions object\n          any: [\n            // conditions namespace decider - Either group owner / admin invites the user or the user has $PUSH on Ethereum or Polygon\n            {\n              // decider 1 - If admin or owner invites someone\n              any: [\n                {\n                  // criteria 1\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              any: [\n                // decider 2 - If user has $PUSH on Ethereum or on Polygon\n                {\n                  // criteria object\n                  type: 'PUSH', // define type that rules engine should go for\n                  category: 'ERC20', // define it's ERC20 token that you want to check, supports ERC721 as well\n                  subcategory: 'holder', // define if you are checking 'holder' or 'owner'\n                  data: {\n                    contract:\n                      'eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1', // $PUSH address on ETH\n                    comparison: '>=', // what comparison needs to pass\n                    amount: 1, // amount that needs to passed\n                    decimals: 18, // the decimals for the token\n                  },\n                },\n                {\n                  // criteria object\n                  type: 'PUSH', // define type that rules engine should go for\n                  category: 'ERC20', // define it's ERC20 token that you want to check, supports ERC721 as well\n                  subcategory: 'holder', // define if you are checking 'holder' or 'owner'\n                  data: {\n                    contract:\n                      'eip155:137:0x58001cC1A9E17A20935079aB40B1B8f4Fc19EFd1', // $PUSH address on ETH\n                    comparison: '>=', // what comparison needs to pass\n                    amount: 1, // amount that needs to passed\n                    decimals: 18, // the decimals for the token\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n      // since we are not defining chat permissions, it means that any user who is part of the group can chat\n    },\n  }\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "token-gated-group-and-send-message-example",
      children: "Token gated group and send message example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Below is an advance version of gated controls that are applied to both ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "entry"
      }), " to the group as well as sending ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "chat"
      }), " in the group."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// We are going to create a group that is:\n// Private - All conversations in this group is encrypted and visible only to members of the group\n// Gated entry by either of two rules\n// Gated entry - Rule 1 - It takes 10 $XYZ token on Ethereum or on Polygon to join the group\n// Gated chat by rule of having $1000 XYZ on Ethereum token to allow sending chat in the group\nconst myTokenGatedGroup = await userAlice.chat.group.create('BRB Chat', {\n  description: 'This is your DAO community native web3 chat', // provide short description of group\n  image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n  members: ['0x123...', '0xABC...', 'eip155:0x754...'], // see types of recipient to learn more\n  admins: [\n    'nft:eip155:11155111:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528',\n  ], // NFT addresses are supported as well\n  private: true, // ensures chat within group is encrypted and is only visible to members of the group\n  rules: {\n    // define rules to gate different permissions of the group, ie: joining group or sending messages\n    entry: {\n      // define condition for joining the group\n      conditions: {\n        // set of all conditions that should be fulfilled to join the group\n        any: [\n          {\n            any: [\n              // set decider to 'any', if 'and' then all rules need to be fulfilled\n              {\n                // define criteria 1\n                type: 'PUSH',\n                category: 'INVITE',\n                subcategory: 'DEFAULT',\n                data: {\n                  inviterRoles: ['ADMIN', 'OWNER'],\n                },\n              },\n              {\n                // define criteria 2\n                type: 'PUSH', // define type that rules engine should go for, currently supports PUSH or GUILD\n                category: 'ERC20', // define it's ERC20 token that you want to check, supports ERC721 as well\n                subcategory: 'holder', // define if you are checking 'holder' or 'owner'\n                data: {\n                  // define the data check\n                  contract:\n                    'eip155:1:0xBE18197d1c071b72fb2460B1652C96C22d40F1D9', // pass {blockchain_standard}:{chain_id}:{address} as a shorthand\n                  comparison: '>=', // what comparison needs to pass\n                  amount: 10, // amount that needs to passed\n                  decimals: 18, // the decimals for the contract\n                },\n              },\n              {\n                // define criteria 3\n                type: 'PUSH', // define type that rules engine should go for, currently supports PUSH or GUILD\n                category: 'ERC20', // define it's ERC20 token that you want to check, supports ERC721 as well\n                subcategory: 'holder', // define if you are checking 'holder' or 'owner'\n                data: {\n                  // define the data check\n                  contract:\n                    'eip155:137:0xBE18197d1c071b72fb2460B1652C96C22d40F1D9', // assuming $XYZ contract address is 0xBE18197d1c071b72fb2460B1652C96C22d40F1D9\n                  comparison: '>=', // what comparison needs to pass\n                  amount: 10, // amount that needs to passed\n                  decimals: 18, // the decimals for the contract\n                },\n              },\n            ],\n          },\n        ],\n      },\n    },\n    chat: {\n      conditions: {\n        // define condition for sending message in the group\n        all: [\n          {\n            any: [\n              // set decider to 'any', if 'and' then all rules need to be fulfilled\n              {\n                // define criteria 1\n                type: 'PUSH', // define type that rules engine should go for, currently supports PUSH or GUILD\n                category: 'ERC20', // define it's ERC20 token that you want to check, supports ERC721 as well\n                subcategory: 'holder', // define if you are checking 'holder' or 'owner'\n                data: {\n                  // define the data check\n                  contract:\n                    'eip155:1:0xBE18197d1c071b72fb2460B1652C96C22d40F1D9', // pass {blockchain_standard}:{chain_id}:{address} as a shorthand\n                  comparison: '>=', // what comparison needs to pass\n                  amount: 1000, // amount that needs to passed\n                  decimals: 18, // the decimals for the contract\n                },\n              },\n            ],\n          },\n        ],\n      },\n    },\n  },\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "nft-gated-group-example",
      children: "NFT gated group example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Below is an example of how to NFT gate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "entry"
      }), " to the group."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\nimport { ethers } from 'ethers';\n\n// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\nconsole.log(\n  `Signer address: ${signer.address} | Signer private key: ${signer.privateKey}`\n);\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n\n// Creating your token gated community\nconst createTokenGatedGroup = await userAlice.chat.group.create(\n  'Push Community',\n  {\n    description: 'Token gated web3 native chat example', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // not needed as per problem statement, can omit\n    private: true,\n    rules: {\n      entry: {\n        // entry is based on conditions\n        conditions: {\n          any: [\n            // any of the decider should allow entry\n            {\n              // decider 1 - If admin or owner invites someone\n              any: [\n                {\n                  // criteria 1\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              // decicder 2 - If wallet holds 1 NFT on polygon testnet\n              any: [\n                {\n                  // criteria 1\n                  type: 'PUSH', // define type that rules engine should go for\n                  category: 'ERC721', // define it's ERC20 token that you want to check, supports ERC721 as well\n                  subcategory: 'holder', // define if you are checking 'holder'\n                  data: {\n                    contract:\n                      'eip155:80001:0x9105D95577575116948F5afcF479254f49F27939',\n                    comparison: '>=', // what comparison needs to pass\n                    amount: 1, // amount that needs to passed\n                    decimals: 18,\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }\n);\n\nconsole.log('Chat created successfully!', createTokenGatedGroup);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "nft-gated-group-github-example-repo",
      children: "NFT gated group github example repo"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-sdk/tree/main/packages/examples/token-gated-chat",
        title: "Token gated example using Push Chat",
        children: "Follow this token gated example github"
      }), " repo to see and play with the API."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "guild-gated-group-example",
      children: "Guild gated group example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Below are the examples of how you can create gated group chats for guilds at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "guild.xyz"
      }), " using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "GUILD"
      }), " type in criteria."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "examples-for-gating-entry-to-the-group",
      children: "Examples for gating entry to the group"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "example-1",
      children: "Example 1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Allow a user to join the group if they have atleast one role in the guild. Say there are 3 different roles in your guild, and you want to allow a user to be able to join your gated group if they have any one of the guild roles (atleast one role)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\nimport { ethers } from 'ethers';\n\n// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\nconsole.log(\n  `Signer address: ${signer.address} | Signer private key: ${signer.privateKey}`\n);\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n\n// Creating your guild gated community\nconst createGuildGatedGroup = await userAlice.chat.group.create(\n  'Guild Community',\n  {\n    description: 'This is a community chat gated by guild roles', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // can  adds admins if needed\n    private: false, // in our case, we are making a public group\n    rules: {\n      entry: {\n        conditions: {\n          any: [\n            {\n              all: [\n                //  this criteria lets admins or owners invite anyone\n                {\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: 'any', // in our case, we are allowing if user has atleast one role in the guild mentioned above\n                    role: '*', // useful when you want to target a specific role but in our case, its any role so we are using *\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }\n);\n\nconsole.log('Chat created successfully!', createGuildGatedGroup);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "example-2",
      children: "Example 2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Allow a user to join the group only if they have all the roles in the guild. Say there are 3 different roles in your guild, and you want to allow a user to be able to join your gated group only if they have all the 3 of the guild roles."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\nimport { ethers } from 'ethers';\n\n// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\nconsole.log(\n  `Signer address: ${signer.address} | Signer private key: ${signer.privateKey}`\n);\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n\n// Creating your guild gated community\nconst createGuildGatedGroup = await userAlice.chat.group.create(\n  'Guild Community',\n  {\n    description: 'This is a community chat gated by guild roles', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // can  adds admins if needed\n    private: false, // in our case, we are making a public group\n    rules: {\n      entry: {\n        conditions: {\n          any: [\n            {\n              all: [\n                // this criteria lets admins or owners invite anyone\n                {\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: 'all', // in our case, we are allowing only if user has all the roles in the guild mentioned above\n                    role: '*', // useful when you want to target a specific role but in our case, its any role so we are using *\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }\n);\n\nconsole.log('Chat created successfully!', createGuildGatedGroup);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "example-3",
      children: "Example 3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Say you want to allow entry only for users that have specific roles in the guild, you can do that by passing the role name in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "role"
      }), " key of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), " object."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\nimport { ethers } from 'ethers';\n\n// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\nconsole.log(\n  `Signer address: ${signer.address} | Signer private key: ${signer.privateKey}`\n);\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n\n// Creating your guild gated community\nconst createGuildGatedGroup = await userAlice.chat.group.create(\n  'Guild Community',\n  {\n    description: 'This is a community chat gated by guild roles', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // can  adds admins if needed\n    private: false, // in our case, we are making a public group\n    rules: {\n      entry: {\n        conditions: {\n          any: [\n            {\n              all: [\n                {\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: '', // in our case, its targetting a specific role so we are leaving it empty\n                    role: 'discord fellow', // role name or role id that you want to target\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }\n);\n\nconsole.log('Chat created successfully!', createGuildGatedGroup);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "examples-for-gating-entry-and-chat-permissions-to-the-group",
      children: "Examples for gating entry and chat permissions to the group"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "example-1-1",
      children: "Example 1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Allow a user to join and send messages in the group if they have atleast one role in the guild. Say there are 3 different roles in your guild, and you want to allow a user to be able to join your gated group if they have any one of the guild roles (atleast one role)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\nimport { ethers } from 'ethers';\n\n// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\nconsole.log(\n  `Signer address: ${signer.address} | Signer private key: ${signer.privateKey}`\n);\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n\n// Creating your guild gated community\nconst createGuildGatedGroup = await userAlice.chat.group.create(\n  'Guild Community',\n  {\n    description: 'This is a community chat gated by guild roles', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // can  adds admins if needed\n    private: false, // in our case, we are making a public group\n    rules: {\n      entry: {\n        conditions: {\n          all: [\n            {\n              all: [\n                // this criteria lets admins or owners invite anyone\n                {\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: 'any', // in our case, we are allowing if user has atleast one role in the guild mentioned above\n                    role: '*', // useful when you want to target a specific role but in our case, its all roles so we are using *\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n      chat: {\n        conditions: {\n          all: [\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: 'any', // in our case, we are allowing if user has atleast one role in the guild mentioned above\n                    role: '*', // useful when you want to target a specific role but in our case, its all roles so we are using *\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }\n);\n\nconsole.log('Chat created successfully!', createGuildGatedGroup);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "example-2-1",
      children: "Example 2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Allow a user to join and send messages in the group only if they have all the roles in the guild. Say there are 3 different roles in your guild, and you want to allow a user to be able to join your gated group only if they have all the 3 of the guild roles."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\nimport { ethers } from 'ethers';\n\n// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\nconsole.log(\n  `Signer address: ${signer.address} | Signer private key: ${signer.privateKey}`\n);\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n\n// Creating your guild gated community\nconst createGuildGatedGroup = await userAlice.chat.group.create(\n  'Guild Community',\n  {\n    description: 'This is a community chat gated by guild roles', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // can  adds admins if needed\n    private: false, // in our case, we are making a public group\n    rules: {\n      entry: {\n        conditions: {\n          all: [\n            {\n              all: [\n                // this criteria lets admins or owners invite anyone\n                {\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: 'all', // in our case, we are allowing only if user has all the roles in the guild mentioned above\n                    role: '*', // useful when you want to target a specific role but in our case, its all roles so we are using *\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n      chat: {\n        conditions: {\n          all: [\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: 'all', // in our case, we are allowing only if user has all the roles in the guild mentioned above\n                    role: '*', // useful when you want to target a specific role but in our case, its all roles so we are using *\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }\n);\n\nconsole.log('Chat created successfully!', createGuildGatedGroup);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "example-3-1",
      children: "Example 3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Say you want to allow entry and messaging capability only for users that have specific roles in the guild, you can do that by passing the role name in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "role"
      }), " key of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "data"
      }), " object."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { PushAPI, CONSTANTS } from '@pushprotocol/restapi';\nimport { ethers } from 'ethers';\n\n// Creating a random signer from a wallet, ideally this is the wallet you will connect\nconst signer = ethers.Wallet.createRandom();\n\nconsole.log(\n  `Signer address: ${signer.address} | Signer private key: ${signer.privateKey}`\n);\n\n// Initialize wallet user\n// 'CONSTANTS.ENV.PROD' -> mainnet apps | 'CONSTANTS.ENV.STAGING' -> testnet apps\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n\n// Creating your guild gated community\nconst createGuildGatedGroup = await userAlice.chat.group.create(\n  'Guild Community',\n  {\n    description: 'This is a community chat gated by guild roles', // provide short description of group\n    image: 'data:image/png;base64,iVBORw0K...', // provide base64 encoded image\n    members: [], // not needed, rules define this, can omit\n    admins: [], // can  adds admins if needed\n    private: false, // in our case, we are making a public group\n    rules: {\n      entry: {\n        conditions: {\n          all: [\n            {\n              all: [\n                // this criteria lets admins or owners invite anyone\n                {\n                  type: 'PUSH',\n                  category: 'INVITE',\n                  subcategory: 'DEFAULT',\n                  data: {\n                    inviterRoles: ['ADMIN', 'OWNER'],\n                  },\n                },\n              ],\n            },\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: '', // in our case, its targetting a specific role so we are leaving it empty\n                    role: 'discord fellow', // role name or role id that you want to target, not case sensitive\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n      chat: {\n        conditions: {\n          all: [\n            {\n              all: [\n                {\n                  type: 'GUILD', // define type that rules engine should go for, currently supports PUSH or GUILD\n                  category: 'ROLES', // define it's ROLES for GUILD groups\n                  subcategory: 'DEFAULT', // its DEFAULT for GUILD groups\n                  data: {\n                    id: 'sniper-fam', // your guild id or guild URL name\n                    comparison: '', // in our case, its targetting a specific role so we are leaving it empty\n                    role: 'discord fellow', // role name or role id that you want to target, not case sensitive\n                  },\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }\n);\n\nconsole.log('Chat created successfully!', createGuildGatedGroup);\n"
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