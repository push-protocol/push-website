"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[89788],{

/***/ 680436:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119365);
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(641622);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(113490);


const frontMatter = {
	id: 'docs-chat-develop-manage-group',
	title: 'Manage Group',
	hide_title: true,
	slug: './manage-group',
	displayed_sidebar: 'pushChatSidebar',
	sidebar_position: 11,
	image: '/assets/docs/previews/docs_chat_develop--manage_group.png'
};
const contentTitle = 'Manage group overview';
const metadata = {
  "id": "chat/build/docs-chat-develop-manage-group",
  "title": "Manage Group",
  "description": "This section covers all APIs related to managing groups including adding / removing members or admins, updating group info or fetching group info.",
  "source": "@site/docs/chat/01-build/11-Develop-Manage-Group.mdx",
  "sourceDirName": "chat/01-build",
  "slug": "/chat/build/manage-group",
  "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/manage-group",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/chat/01-build/11-Develop-Manage-Group.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 11,
  "frontMatter": {
    "id": "docs-chat-develop-manage-group",
    "title": "Manage Group",
    "hide_title": true,
    "slug": "./manage-group",
    "displayed_sidebar": "pushChatSidebar",
    "sidebar_position": 11,
    "image": "/assets/docs/previews/docs_chat_develop--manage_group.png"
  },
  "sidebar": "pushChatSidebar",
  "previous": {
    "title": "Conditional Rules for Group",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/conditional-rules-for-group"
  },
  "next": {
    "title": "Stream Chat",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/build/stream-chat"
  }
};
const assets = {

};







const toc = [{
  "value": "Get group info API",
  "id": "get-group-info-api",
  "level": 2
}, {
  "value": "Get group info parameters",
  "id": "get-group-info-parameters",
  "level": 3
}, {
  "value": "Update group API",
  "id": "update-group-api",
  "level": 2
}, {
  "value": "Update group parameters",
  "id": "update-group-parameters",
  "level": 3
}, {
  "value": "Add participants to group API",
  "id": "add-participants-to-group-api",
  "level": 2
}, {
  "value": "Add participants to group parameters",
  "id": "add-participants-to-group-parameters",
  "level": 3
}, {
  "value": "Remove participants from group API",
  "id": "remove-participants-from-group-api",
  "level": 2
}, {
  "value": "Remove participants from group parameters",
  "id": "remove-participants-from-group-parameters",
  "level": 3
}, {
  "value": "Fetch Participants of a Group",
  "id": "fetch-participants-of-a-group",
  "level": 2
}, {
  "value": "Fetch Participants of a Group parameters",
  "id": "fetch-participants-of-a-group-parameters",
  "level": 3
}, {
  "value": "Fetch Participants Count of a Group",
  "id": "fetch-participants-count-of-a-group",
  "level": 2
}, {
  "value": "Fetch Participants Count of a Group parameters",
  "id": "fetch-participants-count-of-a-group-parameters",
  "level": 3
}, {
  "value": "Fetch Participant Status in a Group",
  "id": "fetch-participant-status-in-a-group",
  "level": 2
}, {
  "value": "Fetch Participants of a Group parameters",
  "id": "fetch-participants-of-a-group-parameters-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "manage-group-overview",
      children: "Manage group overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This section covers all APIs related to managing groups including adding / removing members or admins, updating group info or fetching group info."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Manage Group | Push Chat | Push Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "get-group-info-api",
      children: "Get group info API"
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
            children: "// userAlice.chat.group.info(chatid)\nconst groupInfo = await userAlice.chat.group.info(chatid);\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "get-group-info-parameters",
      children: "Get group info parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " related to that specific group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " are unique identifiers of the group"]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Note: Parameters ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "in this style"
          })
        }), " are mandatory."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  members: [\n    {\n      wallet: 'eip155:0x34E8E400BE58476977EB37c18d3C005878AB6d0C',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n...\\n-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3UlEQVR4AcXBwWnDMBiG4TdfPYEhHaUHQTcQ+OwptEQW0BDFZ4Nm0LlzJOAV0uufHASGwvc8l4/frydBaoWo50q0HCsj+7wRpVaIeq5EwkyYCbOJN9d0Z2SfN864pjsjwkyYCbPL9+3nyQk9V0ZSK5whzISZMJt6rkTLsRLt88YZPVei5ViJ9nkjEmbCTJhNqRWiB28yL1IrjPRciR79kyhRiISZMBNmU8+VkdQKUc+VEWEmzITZxEmpFf6TMBNmwmxajpWRB696roykVoiWY2VEmAkzYfYH3Hw19cO7Z2gAAAAASUVORK5CYII='\n    },\n    // ... other members\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0xa708408C8a7329686D2fa3878d89c5506BCFc208',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n...\\n-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAv0lEQVR4AcXBsW3DMBCG0U8HbSBWqrRFuAOXUKU5bghV2YM7UIu4YmZQ2oMLBobh/O9N+7ndDHhqvMN7ZsQQM8QMsdlTI/r++iHymonWUhl51EK0lkp0XAuRIWaIGWIzT45rIXLec1wLI4aYIWaITfu53QSeGp/kPRMZYoaYITbzxHvmPxlihpghNq+lEj1q4ZPWUokMMUPMEJv2c7t5gafGiPfMKwwxQ8wQm/mDp0bkPTPiqRF5z4wYYoaYIfYLX7goJhSWdjIAAAAASUVORK5CYII='\n    },\n    {\n      wallet: 'eip155:0x057fcD7BD66e0b0e7CBF387D12b2A49A20d30922',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n...\\n-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA0UlEQVR4AcXBoXWEQBiF0Y93ONQSAxXQQRQWRQ+jUgQiHaDGRFBCDBVAN2sm9t+I2cNZ8e5tPn+/ChXLuRNtw0TNcu5E2zBRI8yEmTBrfr4/CkbCTJgJs5abcr9SM1+JO4SZMBNmLS/kfiWar0RN7lei+UrUCDNhJsza3K9Ej+YgWs7EHfOViLZhIurKSCTMhJkwa/mnKyPPdt7RlZEaYSbMhFk7X4loGyaibZiIujJS82gOnh1Ey7kTCTNhJsza3K9Ey5mo23lH7lciYSbMhNkfIf8uvOtcjvQAAAAASUVORK5CYII='\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBQJk6On3CRAtcVo/Zi9rvxYhBIrLzeZNLt+Uy3klWy1xWj9m\\n' +\n    'L2u/AAAtBQgAku//IjUJkU1VTEJkW0t3U1yAgQNfTtkCrlIN9a627YI5f+yW\\n' +\n    'tuv09s6WcJyiY1re05OiMMi/aRVs+zXSEwOJ2vb5q/DyEg/sSqMIxBo1YSAA\\n' +\n    'LyH2BcvGiuHgaNoIVd37UQ5PcZPZ9NZBSDANwKS27+3Ze9fIcap/Fsdq1sRb\\n' +\n    'CkE0U905jCAqJppRsY7sCcauf8dcDcL6CD5zsXCK6aRZtHVPMe4b4pq3+aCU\\n' +\n    'inlMO2CN6gkB6sKDkJ/BoQspwEVvIsKzlgc40g3EFgpiw0PbcuGO78aNVzkJ\\n' +\n    '2diQItfLLJr5Ptr9cgUJZYvI1edFytHUJMU3v+jCMMLTyuJxtEULEQ==\\n' +\n    '=Ij/9\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAA'... 174406 more characters,\n  groupName: 'BRB Chat',\n  groupDescription: 'Learn, Build, Chat, and stay updated about everything BRB with this exclusive Token-gated group',\n  isPublic: true,\n  groupCreator: 'eip155:0x0d73BfA82E7C4f8997b989bB44C4566FA4553776',\n  chatId: '4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  encryptedSecret: null,\n  sessionKey: null,\n  rules: { chat: { conditions: [Array] } }\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Param"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Type"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "entry"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Refers if the Profile has access to enter the group"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chat"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Refers if the Profile has access to chat in the group"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "rules"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "object"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Moderation rules of the group"
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "update-group-api",
      children: "Update group API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To update a group you created."
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
            children: "// userAlice.chat.group.update(chatid, {options?})\nconst updatedGroup = await userAlice.chat.group.update(chatid, options);\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "update-group-parameters",
      children: "Update group parameters"
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " related to that specific group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " are unique identifiers of the group"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {})]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options"
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
            children: "Optional Configuration for creating group."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.description"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "A description of the group."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.image"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Image for the group in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://en.wikipedia.org/wiki/Base64",
              children: "Base64"
            }), " format"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.private"
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
            children: "Indicates if the group is private."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.rules"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "any[]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Define conditions such as token gating, nft gating, custom endpoint for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "joining"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "sending message"
            }), " in a group. See ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "/docs/chat/build/conditional-rules-for-group",
              children: "conditional group gating"
            }), " to understand rule engine and how to fine tune conditional rules of your group"]
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: [" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'update'\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "add-participants-to-group-api",
      children: "Add participants to group API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// await userAlice.chat.group.add(chatid, {options?})\nconst addAdminToGroup = await userAlice.chat.group.add(groupChatId, {\n  role: 'ADMIN', // 'ADMIN' or 'MEMBER'\n  accounts: [account1, account2],\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "add-participants-to-group-parameters",
      children: "Add participants to group parameters"
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
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
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " related to that specific group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " are unique identifiers of the group"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options"
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
            children: "Configuration for adding participants to group."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "role"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ADMIN"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "MEMBER"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Role of added participant"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "accounts"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string[]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Added participant addresses"
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: [" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'update'\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Parameter"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Type"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Array<Object>"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "An array containing member objects."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.wallet"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The wallet address of the member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.publicKey"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The member's public PGP key (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.isAdmin"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Indicates whether the member is an admin."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.image"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Image associated with the member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Array<Object>"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "An array containing pending member objects."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.wallet"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The wallet address of the pending member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.publicKey"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The pending member's public PGP key (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.isAdmin"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Indicates whether the pending member is an admin."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.image"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Image associated with the pending member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "contractAddressERC20"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Contract address for ERC20 tokens (Used for tokenGating)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "numberOfERC20"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The number of ERC20 tokens associated. (Used for tokenGating)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "contractAddressNFT"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Contract address for NFT tokens (Used for tokenGating)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "numberOfNFTTokens"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The number of NFT tokens associated. (Used for tokenGating)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "verificationProof"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Verification proof associated with group data."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupImage"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Group's image."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupName"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The name of the group."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupDescription"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Description of the group."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "isPublic"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Indicates whether the group is public or private."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupCreator"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Push Profile DID of the group creator."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Unique chat ID associated with the group."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "meta"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "object"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Additional metadata (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "scheduleAt"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "timestamp"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Scheduled start time (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "scheduleEnd"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "timestamp"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Scheduled end time (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupType"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Type of the group (default, spaces, live etc)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "status"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Status information ( active, expired etc)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "rules"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Group-specific moderation rules"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "eventType"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The type of event (create, update etc)"
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "remove-participants-from-group-api",
      children: "Remove participants from group API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// await userAlice.chat.group.remove(chatid, {options?})\nconst removeAdminFromGroup = await userAlice.chat.group.remove(groupChatId, {\n  role: 'ADMIN', // 'ADMIN' or 'MEMBER'\n  accounts: [account1, account2],\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "remove-participants-from-group-parameters",
      children: "Remove participants from group parameters"
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
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
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " related to that specific group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " are unique identifiers of the group"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options"
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
            children: "Configuration for adding participants to group."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "role"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "ADMIN"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "MEMBER"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Role of added participant"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "accounts"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string[]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Added participant addresses"
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: [" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Expected response"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  members: [\n    {\n      wallet: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADeYpZfxgn1HoMUuWM42v8ZWfLPwglQYmzz5rY3PdPPoRFU\\n' +\n        'v0AyPjYKpmLh2ZNfXjPaS9GuMdpXaomYSEwsV02hXZOQelo9cLop0Fc2i+l7\\n' +\n        '70rYhePuOuQ+XD/xYzhngAgNJ9rX96YnSodldb8uJfxYmgoF0E9Z2o2fgZGj\\n' +\n        'll2CPnOaLXZaBQlPS3x/461TmZ1n2ZePS/fwiC7taLz3PtyGtKaC0vo4isvI\\n' +\n        'yf04fkjudG0XIns5CWjdR2HeDC8BzSl8OVj8AQAc5uVU8Abk+ejWVr4zfoox\\n' +\n        'eaziDPgGdkckFiQ6Tdsg0tPwwOpSrCCtJocTmc/fWaBb0YlnyAAL88fJABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZBMYqhmfI2WQQMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAACxNQf/UrM/whR7vCs+\\n' +\n        'ez8Y8Hz4WqIuXtfMh4l2nKVv5UUuAfQkBxEY5j6Ga2+JgKU3neQ34x/v6fm9\\n' +\n        'CLcY38Tc4AWyEx8KC78J+xOs7RMfyNBeiaf8KdaFfQrP0nMmufE6TxkfV1Y5\\n' +\n        'LJZZ8350rZVtYJppWtlH+gbyUmMObyWDWbL3aWtqa3xjv0kLsf7TnugiFwzB\\n' +\n        'gHHtk8tlDSOxRt0VdNNd19+/zrBYNl07Ig24WD2ETaJiaqa651z24/6/MkGT\\n' +\n        'MBoQh+679tuWWcTrNi4jIA8jhSQ5BOgbAapl3qXk0m9/Aexpe2s6ISLXe8YJ\\n' +\n        'j4cObDLv/ZKKeLZYTq9lVCydLAQUbs7ATQRk7zWYAQgAmx36uefgUF4cCSYH\\n' +\n        'WMWAOTyc8Awo+hxn6FktOLU1+9hfGrX2jwGLOoOwjNgbYJbiSvRglAX2b57/\\n' +\n        'qkkltAg1ZYCLSUzfBUbbWYlJNBwpv7+52zHaLUZ3gmI5aE48ad+uzaadgpVT\\n' +\n        'VqLbhdgkN6jkemPTlfMehyS49AAbmqeKfo2U72tm9ZqT2cPVCASMjN/Ux2qG\\n' +\n        '3W8HTo0KIVFSbkTthl1zAlwAFksp0q437+pxbdJIecJ9mO6N4OQMnv+hVBDc\\n' +\n        'WrPqBDJ0nas4JNgLxmLv0pheGg/TEfwS/p6xGRW5m08bj2l0cgqmEaM27jbi\\n' +\n        'DEpOykRWsDMhheEfI2zV/Qam8QARAQABwsB2BBgBCAAqBYJk7zWYCZBMYqhm\\n' +\n        'fI2WQQKbDBYhBC9DyzhpX3ACb/yTq0xiqGZ8jZZBAAAnBggA1gkIopr9HJFP\\n' +\n        'fO5SebcbowH4AG9M0qBqF4h1JIKbqvOnxLSsC5QmmzFcjS9ihyHBvzbRVGkC\\n' +\n        'zEHYpLRedQ2AmQQfsf/VOoZJEOlb7tTk4+SpYtsGte5X/yLT5Bkls7Rp8ubK\\n' +\n        '/V99muj1nA/OkasllXQUSGEweVz6ejzJ0oMm3Vewmw8PelsdAnfS7Ud1MnXQ\\n' +\n        'h+O8TCR56F5gAMWxZmxFpZMZyUFOH6KM+vL7HJUBztUS2g0ELsHKy9ep2yhv\\n' +\n        'iABIwx/gEuPr0NDAH9x9XFKg5m3rO64KTY4BRWBISwmQ25dM1s1bwDPLi5XI\\n' +\n        '6Daw1glFxpPRrxgQGlVLzJOu5b8swQ==\\n' +\n        '=9hCc\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: true,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg=='\n    }\n  ],\n  pendingMembers: [\n    {\n      wallet: 'eip155:0x119bb8ad40B1f94e2b30ae5f59eeaEB67cD0Bd6C',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0x6e0C509d14EbF26A529bf6DC5CC9bee7F5b8DBa4',\n      publicKey: null,\n      isAdmin: false,\n      image: null\n    },\n    {\n      wallet: 'eip155:0xE3FDD0527a9F8418f9a7D9e970452827FbE202FF',\n      publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n        '\\n' +\n        'xsBNBGTvNZgBCADouo4S2kPqA//+I7nDAk15/LcJ2TGvDhOYuPNUNMiNGOb4\\n' +\n        'txusuKz6HOaG+K9hiUBpHjKrYEmCT2FEXxt8bfS3SpWb74RHSkWUNUkxk25y\\n' +\n        'gE5gaCKyAdcnOUyVLmobVFFYtH6naK9bULaUtkVik1P0iuEevWHxtTpsjbyH\\n' +\n        'bZtNpVTdprdLib4Wx6bb7VogsvjlvNJcVJ4sfPE0XgsQgAGIev7yJyU0DGzt\\n' +\n        '/EbvFX4sv51Kb1dX9ctBcvzVbs9+qT6LTivsrQp+TNHUN4zEeMhnWFFP5K1d\\n' +\n        'H445S6FWk53XvBudcOkFPtltU1MPCS6hmhevArBfYzy5eSlaKA/fH+kFABEB\\n' +\n        'AAHNAMLAigQQAQgAPgWCZO81mAQLCQcICZCrD2gy8Zu4awMVCAoEFgACAQIZ\\n' +\n        'AQKbAwIeARYhBKru9/u8wPcTeHibkasPaDLxm7hrAADa/Af+PbamVg/Ig2S2\\n' +\n        'HgIy4w5x7ulSk1/49+AmuiUMiVUwJSVBhROsyDbLET56w4+1TIMYZFJaczW3\\n' +\n        '8tCvAOUSauzc52I3zwGmaCupBJokIWp7ncPh0B8TFYrgThgXV7sLf3xy4roy\\n' +\n        'y8oFz1Zla88krwtPe4Az7TF+WNdXoDsLNJ3GXRmNqs1GITmDqAXFWncl12NM\\n' +\n        'ajUKWIKc/Gi1oKfz22mabJTtWBimDpA12LaGK3GjEK5CiWXT3Tzlqn6R14EZ\\n' +\n        '6ohpKZldSJiMPL0Bu9iT52iHOsw1wTZNC1L5lKhOCi3c+/fLRcJZt3hdCjqy\\n' +\n        'd/FSCa8/Ny/GrHBWoL49rSF4pDEA+s7ATQRk7zWYAQgAtNOoHCL7BCnjwp8O\\n' +\n        'htTxEI5r7Q/1zKKHiz6QKjjrGBYyR6gcmPM3JNEcvzY4OsCFnKBv2suOgrqH\\n' +\n        '8kXJzfpIQ7u7uJs+O3p/cn86RMANiEnO8NbB/0scpfZ7Vg3eOfoiWYE4I/1o\\n' +\n        'FVDCyZ1YVqtbcmuW6D8i1djjeoUmkUDZyPo7Qs6hUsJeYA/Rfl8mH5sjy2cN\\n' +\n        'WXf8cEtOUqJtwERXt5aRB/nBZiC0bsP6hf0HtAoNA8/96TkqrcQpODW/RckD\\n' +\n        'fo4wkpEONHRH+LGX7GV0pwymHu42TUnULmED6BrMgMYG2sKpxMThxtAxRaiP\\n' +\n        'nZ3DKXr8GCjTYnbEZpoi2zKCOQARAQABwsB2BBgBCAAqBYJk7zWYCZCrD2gy\\n' +\n        '8Zu4awKbDBYhBKru9/u8wPcTeHibkasPaDLxm7hrAADGyQgA5NMUkoyDTPZa\\n' +\n        'Znj1dB+17xBXCZ/u7pPQc1DukBefVke7/qYIicdnnEGIX3Zd7TckFRsDljR/\\n' +\n        '3418Bne4WyL57fAF/GgYsegpJ9n1KT7oPxWzibIaYdj7R6bkDt5r61EDWC3N\\n' +\n        'VBbnZu9cO15TYkObJIiyNvwbQyd6Dm313b39GnEE8sM709TWsI6Es6rRZAfC\\n' +\n        '+sI8ezYxqVUbP7sW3jJZYzdPOhZPHvFd5iJ2EfygEOuk5tb7AimfNwF/CNcB\\n' +\n        'weQGEU7feOSB9lXXA+Ag1duLM4B9bLbbHEQIPhKlBF1ED64e/W/5HNfoAkS4\\n' +\n        'qhzOD5XWs6xs45nnYqUbBFLG9Xk+Jg==\\n' +\n        '=qtAv\\n' +\n        '-----END PGP PUBLIC KEY BLOCK-----\\n',\n      isAdmin: false,\n      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBsXECMRRF0csbdbAZBagHKlJMSOL90IUq2h5UABktLE6/HcizY4/fOafrcntzQB/BTKvBEcJMmAmz0keQtRpk67bzRQ1m1m0nu19E1keQCTNhJsxO1+X2JukjmHm+Ppg5Lw9mWg0yYSbMhFnhoPPy4C8JM2EmzArftBr8J2EmzIRZ6SPIWg2yPoKs1WCmjyBrNcj6CDJhJsyEWWk1OKKP4DdaDTJhJsyEWeEHrQbZuu3M3C/iCGEmzITZJ/s7LOkKUABjAAAAAElFTkSuQmCC'\n    }\n  ],\n  contractAddressERC20: null,\n  numberOfERC20: 0,\n  contractAddressNFT: null,\n  numberOfNFTTokens: 0,\n  verificationProof: 'pgp:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJk7zWZCZBMYqhmfI2WQRYhBC9DyzhpX3ACb/yTq0xiqGZ8\\n' +\n    'jZZBAADwAwgAq/6WjtwRt1aPTLWwtSx80Ng/Wxf97dkpebMXSj9T7f5ia1rM\\n' +\n    '8wqsuNUDMEMPB9LM34f6Q5pD994oeN2YT7z34u20mskiNphZdx/DNvu8w9UZ\\n' +\n    'rI3tyjfZULhARNVM34sSABnHtExbl4ZArhNDsT86ku0sZNjr9frn2mtgmlKN\\n' +\n    'nQdGcLJSxbci0hFg3nE5mYNpwZNs2S/2uk11WHKxzMhII6AdePE77BKPqedu\\n' +\n    'PiXDODO2dIvV8glLQoJPRPgc2ap+/xYIBUFljqHGPU/62VSLlHxBJv72p5s/\\n' +\n    'kOxiqD42TmpaaMtfudqgsZsGoYpZDHcMKYGNZs+9qVRHPRD+s0QhEA==\\n' +\n    '=c6IF\\n' +\n    '-----END PGP SIGNATURE-----\\n',\n  groupImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',\n  groupName: 'influential_maroon_gamefowl',\n  groupDescription: 'urgent_brown_butterfly',\n  isPublic: false,\n  groupCreator: 'eip155:0x140BE62b2177A975Bbef398DF8934b883E7d13f9',\n  chatId: '5f769c881ffe328117dea3d3acd0b97ce7f4c163e440f75a96be3e33f7d2a000',\n  meta: null,\n  scheduleAt: null,\n  scheduleEnd: null,\n  groupType: 'default',\n  status: null,\n  rules: {},\n  eventType: 'update'\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Parameter"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Type"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Array<Object>"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "An array containing member objects."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.wallet"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The wallet address of the member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.publicKey"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The member's public PGP key (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.isAdmin"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Indicates whether the member is an admin."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "members.image"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Image associated with the member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Array<Object>"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "An array containing pending member objects."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.wallet"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The wallet address of the pending member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.publicKey"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The pending member's public PGP key (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.isAdmin"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Indicates whether the pending member is an admin."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pendingMembers.image"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Image associated with the pending member."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "contractAddressERC20"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Contract address for ERC20 tokens (Used for tokenGating)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "numberOfERC20"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The number of ERC20 tokens associated. (Used for tokenGating)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "contractAddressNFT"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Contract address for NFT tokens (Used for tokenGating)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "numberOfNFTTokens"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The number of NFT tokens associated. (Used for tokenGating)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "verificationProof"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Verification proof associated with group data."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupImage"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Group's image."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupName"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The name of the group."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupDescription"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Description of the group."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "isPublic"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Indicates whether the group is public or private."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupCreator"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Push Profile DID of the group creator."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Unique chat ID associated with the group."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "meta"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "object"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Additional metadata (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "scheduleAt"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "timestamp"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Scheduled start time (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "scheduleEnd"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "timestamp"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Scheduled end time (if available)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "groupType"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Type of the group (default, spaces, live etc)."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "status"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Status information ( active, expired etc)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "rules"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Group-specific moderation rules"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "eventType"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "The type of event (create, update etc)"
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "fetch-participants-of-a-group",
      children: "Fetch Participants of a Group"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// await userAlice.chat.group.participants.list(chatid, {options?})\nconst getAllParticipants = await userAlice.chat.group.participants.list(\n  groupChatId,\n  {\n    page: 1,\n    limit: 20,\n    filter: {\n      role: 'admin', // or member or depending on what you're filtering fo\n      pending: false, // true or false\n    },\n  }\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "fetch-participants-of-a-group-parameters",
      children: "Fetch Participants of a Group parameters"
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
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
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " related to that specific group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " are unique identifiers of the group"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options"
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
            children: "Optional Configuration for fetching participants of a group."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.page"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "number"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "1"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The page number for pagination."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.limit"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "number"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "10"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The maximum number of items to retrieve per page."
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.filter.role"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "admin"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "member"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Filters participants based on their role within the group. Use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "admin"
            }), " to fetch only admins, or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "member"
            }), " for regular members of the group."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.filter.pending"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["Set to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), " to include participants who have been invited but haven't joined yet. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            }), " returns only current members."]
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: [" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Expected response"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  members: [\n    {\n      address: 'eip155:0xb44a29524433dBC639C35124459c741bC241d4f4',\n      intent: true,\n      role: 'admin',\n      userInfo: {\n        did: 'eip155:0xb44a29524433dBC639C35124459c741bC241d4f4',\n        wallets: 'eip155:0xb44a29524433dBC639C35124459c741bC241d4f4',\n        publicKey:\n          '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n\\nxsBNBGQX78kBCAC5qhWJ2ZytwBxVa5AQLxgxzcNiS29DV820sYKyeN2vaFc5\\nqznkM4V/teJ3xKjEtFdfZaQjZJ6ybd1pQX6h6MjlFWXvzgEQbaWsaIzGWz43\\nrwNCiR18Y2Hp2zce1BRlDLSW0jaiNTXeuMjE/Q7fLr1RtxMvAmjxt49NXUTg\\n+xvZZdwHpdvt1ihDUtUdrQSxzn8IsgE2LoCzMv9kjFkAltfHD9T7r3Rk4D2M\\nvGzXM6QOzAkYNs3nZb0WRDjPpJKtCn0Et0Tq/oGayRnu/r/GHTdXqLLoQ6Zu\\nc6m+rrCHwm11/ngrBwC5bnaZBjDLL9ooYzpxOS5WMMKsQ4+cC7wIEA75ABEB\\nAAHNAMLAigQQAQgAPgWCZBfvyQQLCQcICZAHUaFDocEjzwMVCAoEFgACAQIZ\\nAQKbAwIeARYhBKi8PuksO7F6gelIrAdRoUOhwSPPAACPAQgAguR5QcGH/Vos\\nXGDgoDpjR2okfW12U6Cbwa+K4Ns/BoQdgpAi4bkMzyKvbVzyoz5BaNMhQKWv\\nUzha7SsrhbZKkZdblOvuercAGYt4sx2H1ih1T/oIZHIugDWWzn8OpE7f40wL\\nCVI+qfREQM0ZCBSbEF3dWvcJKFm2YCdK+gHK6D6TCwEw1hukJdEzEpZ/aH4r\\nDBWZe3ph7H8jiMqxj3OhTS8sc88Z7HeG7sO+UpLOYHKNANj0YlyGvV1Tgukm\\nSZHS0reJrCg597bMnqUV683JxitFRnF2PASMWqFaj3QtPCOuQsRwV6PPV144\\nzQk3lF/ojJ1+8GxVdBUMHqCTyyAEPc7ATQRkF+/JAQgAuQPAuY1V+xsNsT8C\\n9eBn7p8Vy2vrGXDEaxAOy7e6V9KEBgEJNW5F748SMCkob2YIaKVXMF/TOAde\\neP0HBn8wsuVnmDF2o1kD2qcIiPj0G1M0G4plTTmEBtezXQD15fPAajWlMXS0\\nqTjUjuCs2x8ogMXZjGMt2kZZpxP3v2EWmOpcAwTe/0dX8GALOl9MX5eXKiau\\nuJde3jLOrYdTDt9NduLGd/UVr3BOu5KJWFOulL5G0s6LsWnY98Jq8wkTyrTJ\\n9GQ8VKp104WTfY1+YBI/GwyQEhZ7+3psTO7nCeWTEwSOe8aIQOqcky9MMLp9\\nlZF1d0nVriEyuh2mQrab3IpyZQARAQABwsB2BBgBCAAqBYJkF+/JCZAHUaFD\\nocEjzwKbDBYhBKi8PuksO7F6gelIrAdRoUOhwSPPAADoIggAsuvY5AGzNXTt\\nJkxKvEZX0Ch1U6n8QkLiqhN+QUPhB9Gi+8IWiA+G5kfCD7ClYn/VaGEmpY1W\\n3AKcNZQWSuCZSrCGIfk83LoSMt2/ODEvmpaLkdYjByoPYHEuEp31ZBOFjUyQ\\nJpQEUy64Ycffo+MRDDVY10phYGqeoElR3ROmlIuobbqufU4VLXmu2CJoBdDJ\\nGpLOTUcBp2VAEVMocIk0mojgyHwMTbegU24AD7IOn52jpwyAhUnP826Ux0VV\\nVes1QaKHzcdrusCR1ebdUNNM+d+vVfhD6/uVLpYiSLbSJ8iVVf2NJGMFittk\\nrmLd4sbgjmxy3d21SqL/B+pqQyfqkA==\\n=p+iN\\n-----END PGP PUBLIC KEY BLOCK-----\\n',\n        encryptedPrivateKey:\n          '{\"ciphertext\":\"840c20a56848c4e8179f6da2893f3551bd271babf8642eb64a75f24388838d9eaadaebc4ccab17dc634716e666f0b975431fed70bbc71c146df02e966f1b342b6c91300c14044edf02ed5f77f668c48d540bd184cab55783bd7be2e52298b367446eb21bf9e1b4ae004b6077681e33a808650a34b775453140ea720f4696addf5bfec3d552704c0e0456bc943cad18bc7e934081e9a81e62bc0525e378db6af3d4fa9ae22c205a4caa5e47fb49f4832b67d25961b9ee1fd9bfaf49baa2ca1f39dc44046aa78e79014055420c5fb614c01875f9da59e25feeb39e6bad12d5522d18e656a0c213be6771730354b01ae170dcd646e81d13984acec13472e57268cd40458b1fdda863876bcdb716160e2eb895ddac34d0462db92539caf8587d2381a3bb6080d116ce477fea55ead71cd0dfd1cf8cb2e3e2ef18b809f4a5947f380c78fac57a3948cce26f51f7bc17b0df1fea78096402c9054e5b3a6a80010224e1014e58b6515cb260baaaffdd8b4102952a9040d532f3b058799b68b90a47442b258ac33d84ab1bf0c792af4ae1bc601cc6dc9d735448d2b91f12574f2312b55a3b303f91e16c3dce6e1357c4f59612f0a3d7f737e583ddbc44ed7306ebe132be4197d2c3fae7099f4bd0d51e38c8fadf18d561559d8ce5b72b6ffd27b13b92e37ca7bc5ddd380df001c5456b76e70502c5f046902cd6d404df3ce80871984237f54a1257f89e9d5d203a70094580e4473bb360a9e412933f784d4b90fab415b84bb63e1354657d18ca1f035dc14d52d2e118ab3d8bd75157216d3b85a928bcf6dbb183e46e74a42d7e87a0d5e84893059542f9e64b1a77b03424e661338a75da3bd67f485124fbfdcc6b7d56dd98d8dbdd253d77fbdcc4a87bf01cac26dc527b3002d0f28616b74dbe11b71d4648da208c5f245beb7a715f68dd62ce627e7ec825fac0480325eeca5e02a1f917f0afce1a442a26fd6020fa5bc996ce430480d021c036707f62c82442cb0fd1be1fcd23db929ebbd985edf8ba724747c6390bcc2ddc6f5a4327b298ede0c2fbb682c561f65f443ea9d5afaea0c4cf8d099fe06f4a231fcc0aa0475e1e851c1cda053c07e106ad50684a881335ff75affd62a119bb0ec6f750db1e6bf64739eac73f66dcf0196bdab4158868f4ecce790d3b7529253b02ec75ff72f93a6929986aa4b6c36e84b23d202ffb37aa59fb56a56b7c717653e8df45b1c8f3fa67340ffee3b1fa1fbf32564671440ba1eed22518f0971dafa781a5d030cfcc5832790a6ba1a4efb9eab9fb5cbfdbb6ba8abe4861f909fe3cb4758b0ee1a8786e3d89e37dc9c79763e361cb58c090c2a8c02bbb4a8b65d017c368b4d32294c70d56eed843f60e0926def662de8d8de011f00469ca56c5295a82cc2da136831f5e7a5d86c6e80176a40c73ff8c74a7c16af293721d7af1641d781f6e87e9fd511d7d772d2f719c6e6f79ac99c76d5eb66e1816c6b54d0e675232a18edcc15234a9992d99877f2c6ee8a9063a8e6e12cacd1c20172e88ef2fd4d942767aaef57edd48dca4c4321709ec8adcb97f7fc5a11d16052d23c3390c72eeb64d9819dbc952d4c6242374ed56e708f18ffa1fab1acca69ac111f52a4883a334900beefe39432eb3df4dac5dd59eddd97a32c48a4cabb32da215280c0ffdd130ee4e692272a92ded8775a13ce4268227fcd6eb252c641149f7ef9753b75b09abbb4eb252a6e6079a02e075af64c9312aabcba5d44031abb81776849a5a305bce21979ecf5b75be1767ce9c15d6f1276d35058315ebc0537802bd6c24bcb813dc5748747f69332ca6bacfa975775048daf8ffcac54229141d7d87fa08428c6905b876d7f42ebc37e761f9d0cdd207d45c4ad6ee55b70a14336c87221ff9a1feebc2ed97530bb39397094ec5572dd75f0d011bbded0343f97b8137cd491e736aabb3e832d0a61a277bbc83d32b5f9df1b975632212a22c596e2417b5a8700c09d7dfe27a3adf72e692b1193279a58673988792e5ed96f5bcce00c876aedc699f7f5a900fb225f5e5ffbb4cb137182f78e8ca77628c2883650a2504f99d8f894bc92bfd74f72d5bcdced81b6ed711c20ddc3b46114d3f687c64048c0230feed459f9aabebd7e5da2cfb0d6e4d53e5396c50e276d5059dc6d50f3930cf3a5cbf6340febfb7e1eccfed57e9666f4e58847b5a47126f09297f4b35ddb2e38a64c691f402f01554f1316e2b86368d1868228b981774a0d2a6f3b24ec2ae92ea425fd86a325dc0dd0d4173cc56cc1977651694eabdb8bf8b457c6f349debe58306c5afa50ad28cc5f4ba425b9df18c4ec3febb5e251ae6785a1b782a202c225dbee33cdd10e7005ae1715f23acc46e5134bbf3f54c11cfddb7f6df59b82b9ddd5122031facdc1a4df2db0733905f8156d2592be7255a37824fccb0cde5e7d29bb0f9ffa0d1fe6877e68e3e7c1afc9199a2110ad65a9f36a10ddf0375a3fd484d2b2bae18b982c3821e917f51669d30e1bdb3f96f2dd87a699eb6c2c50f32a105114d674f5bd1dc359d4309c0f2ea6aec5d1f52302b3308d3c00554cbec3515c2f459720dc2ea09467b9a3177c6268b89bb791a91745465fcb56ef4fd0b187ddbf4743b8d527374303d73df303ad17fe104371daa7d89b1d48030875b9471889667f70ddde1e45a7a4164e433f5af4f1a0e8f8e3645ced45fc1a4a5637b2ae1435b37b3c496fc4b11a661dc31fa504850f00f9551ba370187177b2eff767c0a438271c747fa5bf32e3b9fdb7bf82bc299000aa1f84fc4ddf341fdb6e8b93aad82c8f1537d567535ac29ce4e0626188008deb7aec4b28d79bc2bafaecb24dfc1d74ee3b5c99416ded16710df235bb4a36608ded4cd98464f30208752818fe02332dbd3c745a61b704132d348129cbc974e6fefd6bdcbfd1931251f57c15f53104b68b8e3efbff32b86bea3e57b3b64308109a1c2e0d8ee775b439e295018d19202bf4f614c74304dbb5505ccac446ab08ea52d44141bd285d76cf4f26a9bb81e42e6856e02d04538e45dcd4adbe582bc14a7d4ce52e791986a9ce1edd2d845cd9d505bb704e1cdb16bbcccd19ab4f4e66b885d8e6f51272e57bb27c49ece675fb64406eb13af77c2cfc170490bb1ced51580f488bf3b1b89562244b81f7a30538ea0a942f414c7ca3dab6105ca71e54afa196885b8ee59754bdcaeb8f02f8b24dd434697e7b3e7e12e2f1767d7f03cdf630fe109bea57ea587fb0c9b2e8218f70c721d359d18b6c1ba0828530a9f0446d582a6f7f58cf4f777b851785d3f92d2bdff96d2e8555cec169a8165166b2b610d9cf8be2a380963d4d0fbd638c15181e413780d7f248fe995d2ff94e1da24e5a583b006ebb5eaf5ba09b79150f12abbdf4bf71eaab5db06b6891eb35e23c3bf2929b70bebca59671f0c983e621da2f76299a3a588a11adf27f47d5ea4829c681dfabafe73d1038da5892b6ddb068ea564de7c951e1bd356f16f83dcb383978a905036c4492e37a98eece11764d2eb93ce879ca8e1f97429d57dae6bcda06aaef6d82beaaa50080886c2d005ea5fd712c1a133892e8645f410a160cf19300984b2f76bcaabc4c6026ee3a98901bf44940e89514b757a9a37775e5fce4c3ed009a3f2a461ccce1efdfa7c6b59c00563761b907f41bf6f1062f63bc0208bd86c55db3da24b9586df67a7b9c8b9ccea87aa79027da1df64f16ac382c52a0ebc6f952b6dc440e497e518d53b1050b52869823837100756a979dd96595f8e345d092848e5426494c5ec0844ea547970fe9bf5607d0facb1b9218c472c75df136c5ae54c2a0de32c7379abeb37e4b03191a6f25dd7a723d031e5c2c5b77c313b3b665252adb2bd52f370471247ca7ac79412c39acb92cb21290d145c62810128773189712a9280f3d6e21e78d24445928eaa3b30bca68507079c6a40deb09bc17ce45fd32c361f445a28b7e3a1f956ddd755f9569373586c3354b356e7f6de73c1c2b4be1d387897987cd5fc5fca71f9dcaec9be7d261b070e143e42815fe0e6180075c0a5abdd5bfab213f6c27d5abf82e80701d9086573eada357c78e4b87f8bf19958de1363f0864a8af72029e5522340d9b8a9176439153427b8641917a3f33a9f6f570acc90199ac3214386dfcb7d468311c05bc31fe7ffdd8a02f4ac723b2b4ada9cbf3be319fc780903dc73745ca21c49c7c9eb13939a5cf104436a52647994fffc3cc86f1f5a9c1c200a4f77b47b1b6b7edb55a783690bb42d71ab426ae4028bbea3bd5f602dd5f1aa5d56ffdc1a0ad29b9e954667ccae879c4af2f615edd2db1fb98871318ec6eed598f38fd34d181c878fd9dc9f219c36b2c99231538d9b17456b6776da8f7f003b8ef7a328ce24f05fc9ae649b1f89d8d564ff50763e3c91a753c691ee55fba45e40303cea2e7006decee504c56dc052e5a0425fab17d3e894635487b3c68ad7174b51c7ae543e1c5f6a165ac022f06f5a373514c5e3e81b9099ec97dfb31a58a786822db25f42ea1443030b2ab9d36aabea2031186f570382db348a734ec0c2631b348f0baeb6795b8520838523c68ec735f4d047d443c77ba9cae7583688e2e406f5bf59312b2bb3083e9c0b81ef08c0be36716e88fa91967d2d5adc3b88115222c0a651481134ee9d5f6fb42f3403020753042c9fe8b832f8a4b4711a1cf3ce536e99aa0e2d21ffddde2b059db9afd6e094c3f659428a62d77590a8b6795017cd510b06de4bcb839ae71eded36532c773fa554d888a0b824a62fa6e7411b81acbd5e0a64eefcf2c587d2153fe039fb2fe5a1fbd16f1b17f16ab757adb404581b13e2efb48ae0a1dc75fb9beaa2401b4569c924d40ec8f59b76674e4feac53327cdfb8d59a9ab46e848c6d163899befd508ab57557a844a3ac80a77f8cb3ff905b\",\"version\":\"eip191-aes256-gcm-hkdf-sha256\",\"salt\":\"078c53bc6f1945b3317516e5a5ecfa87ee6a5825b1bf829b4f4c727e265ec819\",\"nonce\":\"6699c2dcc81f2f105d83336b\",\"preKey\":\"0f8f03852f0ad3f6f0bc4385c6efb12774ff9631b7f4dadd1f85577197621922\"}',\n        verificationProof:\n          'eip191:0x4d0715e3c887bc553e3b2c0315bb9e9c0bf04ca43b21194f713bc3cdda2012126d18303814842b76e36aeb2ca543f071e806aafaba40124728301e661821b0b11b',\n        msgSent: 17,\n        maxMsgPersisted: 100,\n        profile: {\n          name: 'siddesh.blockchain',\n          desc: null,\n          picture:\n            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAy0lEQVR4AcXBoW0DQRCG0c+TJabu4soxWnrS8qAtY1sY6eigK8ctBJkaJnR8YKVTEv3vXT6/Pr5Jwgf/qbZOZogZYoZYCR9ktXWy8MFv1NbJwgeZIWaIGWKFg21fyNbWycIHM7V1sm1fyK68M8QMMUOscLDeH2Thg+x1c2bCB9naOlk4bwwxQ8wQK5y03h/MhHOKIWaIGWKFg/DBXwofzBhihpghVmrrnBE+mKmtc4YhZogZYmXbF7LrszFTW2cmfDDzujmZIWaIGWI/VjkwD8EMoAoAAAAASUVORK5CYII=',\n          blockedUsersList: [],\n          profileVerificationProof:\n            'pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBYJlqWBACZAHUaFDocEjzxYhBKi8PuksO7F6gelIrAdRoUOh\\nwSPPAAD7rQf9H2pluOBvzXTxHUl/LZQzT4QriV4xXR0AbQyXTssQmxhsFXES\\ncW2X0UX82HifFoaxbrxoLPyL8+BsFOmoSnhHWdJONqTKTHRWFMBQR7mX+LCZ\\nrr/XE5KwBODi+8789f4AbhlEunaDXUQNgIoNQJfMO6127PhUwhLAcSQhWZai\\nNZEduOWD8SenU1nDHPxdFTA93koSe1l31/oz+Da4hwbQAdGvfql8p3FrJdrp\\nVAG/IEVxOHfSta1w74m8LLQ2aKOFAPMIzPtAgKfRQxCmpqjIZT2OofAPO9+A\\ngS147kRY1kFYiZr70vTQtB5klfyKLiVpE8GqwP01fpI0zypSAsWfvQ==\\n=5hHv\\n-----END PGP SIGNATURE-----\\n',\n        },\n        origin: null,\n      },\n    },\n    {\n      address: 'eip155:0x1A3cDE21e27CA9a2670C2c647550D39a72d9637C',\n      intent: true,\n      role: 'admin',\n      userInfo: {\n        did: 'eip155:0x1A3cDE21e27CA9a2670C2c647550D39a72d9637C',\n        wallets: 'eip155:0x1A3cDE21e27CA9a2670C2c647550D39a72d9637C',\n        publicKey:\n          '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n\\nxsBNBGNjVOUBCACJiL3Ujyngs2WED2trgkwIvg5pfksN2hDcnHI/u5VWCJC9\\ntM6Eu1KPuspD5LgTmMKPg8qjyGPzai8FS1udwPGCC1K9ZbnvcqzHUrCg1T9z\\nGd938mlzBVb3asDmrZgXYpwnZeqRFMTh1UuLmUztEeoVafi3iElF/nRE6m2G\\nz6K6Xqd31ixVYkBqPkrBQwNBQg6K97da1XLBrCGyPeqqQ/AgRAqJXrjWRiPO\\nXvluWuWcnJGR1tRe1rxe2hR3pD4SdiFnYgPknLBEpTBLAoTY8mhwof6RLXcE\\nmnW0r1g4vuxhr2jEA6H0fFOHyFt8NAYQ/MX/JxFQPbctSe1RKgWqG1bhABEB\\nAAHNAMLAigQQAQgAPgUCY2NU5QQLCQcICRAQ+CT44JXXewMVCAoEFgACAQIZ\\nAQIbAwIeARYhBLkckYLs32NvtQ3xnxD4JPjgldd7AABLzggAhe8nkuIrBB5Z\\n1xQ0+4gvwUp81OU1GAxmO/TTDJlR2M1csHhxi802NCqV5lJc9Y242KFxrVJJ\\nuiTVjE42cJZof4QdTuMjR/6ryi6vc2N19iE2wqcnEYrfpbdeSRqSkRYpiCNZ\\nFAgTgcmajsi/m+VO3ydk6/xVajwy5e4k3c9dgNPv7CMwvv0UI11BsYRODiQQ\\n8DabqZjFbPmfcVFchU89IRLOsGfZugrt145jLa5P5rtRviu/JjmtNmPNPxp2\\nHBSsWEit1cScj4dnOOhbzQ9mr8PrfGogDlTVjYzR6si5dHcsvQdUIXb0ABNs\\n4qz7N5ARgs7E4CzTwSMtruBfq+NQ5M7ATQRjY1TlAQgAzoiWfiufIZmm6w8V\\n1X9Sjb7cBpAzA2U+nEiar7JxzAEmoMpq4AZ82JxA/2et8kecmWfaO+iz6C66\\nWAa93z9OdBknJxDxciHxKEd4WjIwwcXjEEAk4MAzG+J/ZCyb5qYL+fRXaq24\\n7tDUBtzND2uFqEqVRc1vfh90aRuO7GX4Zu1SX5YTztuXUlYEoV6HXE9F7xPe\\nF9+RqudLFPnM0nSzJ6TwLfTP918KXCajRCbG4Qiz3X+NEM0k20wneg+D+PQG\\nL9Z2uyLOOEIv38RLCfvBuPyqxZs/gPdxMOXP0xEUC1eOgi5CK7rG3zWnVR9W\\netLS8RoZX2FzNnpOMKRz4VKLMQARAQABwsB2BBgBCAAqBQJjY1TlCRAQ+CT4\\n4JXXewIbDBYhBLkckYLs32NvtQ3xnxD4JPjgldd7AABGTAf/Xi//wrNbZy+g\\nF+trW1ZGm42HE/RLNuFa2QAzbr5e2tGacTM9AM6eScFLLsLOKRzFj3OO4FHY\\nUnN0/wPAxTaidJvS74cX+49kYKFUekESo6MmiTI+CeyNYNHV3QkmA1aCaCpg\\n8yH3eaPzSwzXpky7Nxs9Bf4ljz08Z4ZLc/bHcw9riBB/LGRL2rWihLAVxCF0\\nFmu/dEri/QnyQuqRE7p7B+VNgghxvMI11sFdsdCysl+1kgbW9GH2fd+TuCqb\\nv4hJZ8m9LP5XoVF0jbYzCZ9TKwVoAiSewzUWMrwlLNa82QDwve4wB4c5whok\\ndw7nYxycnMhwuyjiT+XuLVh1s5tTbg==\\n=2YFx\\n-----END PGP PUBLIC KEY BLOCK-----\\n',\n        encryptedPrivateKey:\n          '{\"ciphertext\":\"d4d20369b584e95fcf88f05ee65ba42240b7d50b92db2c0a72fe9af8af595cbeaf47057cf95483bf50aa50cdd06a9f645deeae9e8384632d7dadb07fd23948d9efc35cfe7129fabe968cc756a18411829244401cbcf7fe4be1779a610d322dc1d6871c84a4e1b553e9d10a035c9f31d60c478faee06b669f3e9d37d9284968d6129a5e623aa02d4c422f54302d72fc66ae384606570ed31a61ffbab4599db19a3bffcc1ed595d3ed9fe2518e2e8872e09d3dd99a0578948f36817257f31a1114c73326f32db19f688c9791520649644d366d34f5c5d673a134044cc3f7a87189c9dfa635b12b6378f57d817f397517687dc13315979174abe967f1060d5becd1dd7a3af61b4d73a0032e9bcd72acc2d82b0a9311740c159522d496ee558ae6582172c54b3b145df30d9a23958ae29395126f51e7e2e2da9b401a53e015b9f3e0c0411b84a40df729a743f8cd2dc3a35c87fa9f02d5f5b92c9d02b4ef6044b6e75130723a541843d45d1b92b2f2283e651672f69fec5a3ac034d3cb5b2ffd748075388eccc31ea28f0b2ae02e96c86781620356d294ad5fcf28de296c2e70ff239eb70565d746f350609b662df6cb00e8c9e46b1c3807c0e23aa67d45973b12fbf088eb8497d5e2b7bad82e92beafdb4a09f95b53a323693217d5c9724ad9d26f45d616c078a73b9831b5478192c99cc42f160eb364706a739282296a9c2ec4ac95fd932a50053c64c02ec1f710205609e202cf5f10a0a68d943aae10b1316028fbf00302174a656f77317a51b7fa147cca815e9282926c5660d2c65a54fd6cf530c6bde673c5fdb48d0e008e2339d0c77a91b349376240ced5c9726b073f4d0a7b60fa0510b514aed3a5d508afeede79d3d20aff7794ec207c79d6581e28d8cc8c5a6f692034ee5f23646ee1d8f8e49f0c86fb30572f61d4de2cf840d06eb0c71376d11d022862a55090182953cd9ef75ae3874b76b2137cd7b6b72d372523557b3203cace09740824326aadb24602ead7f3f2d9481acac049bc4d8e6572330b8a1c503c26503dbdf8d5d233c3cb1f8f4f8bf70943dcce3f83f5ce417bfbcc1ae663c3bf3ea50b2212b4906715e0ab19a7e83083ceed87fc02261847255274effbc475ad548dd8d45bf163b90270dce341a5b8cb6dcfdf9b09f475f30df9a9cea6bf4d3d4ee193fa223cd9f159334418f85c821cec78a252e7aa0f7104061f2a329f6ccb07be4072ca1789c1688760571d4d4232d2679a7d783885edee6d6eeb53add6068b4461f229dc34c8f402a666a7caf99ad3a36a75e57b2049b0d4454fca9a516a610aebbd1bc70d8d5201dc5a037e46158485751b2c3aa161292759b95476655269137e3b8d16046cbeea9af3e79f44cb48e904c9c7a598defef3b409f401c6a9c7521c06d0c31a5d2d9ed49c7828f52930dcb568e5210eafee47f5d428baab607fdc0dec955ef78c3e5c2c6813b761eab28df76f4463bb6ae90009a0678123a9be5588d88464ffef69585c10da01d7925a6cf85bac0a6938323084ecf1d4d80f4114eb12821b5c786bd2999c4b99b7dd6b1e462f45b988158b8d48be9959f6b25986bf8960e6616ceac7132a5bf56ac9bb6f7c2f0b6a948edceb28ea6ab9d85e5dd93b672e8e95438a1c5b1c5ab4ddb691040e2799af66d5bd6ac2fba551fdf2ab0ad5e72742e053513f73d98abfeed3358aff120fd1cfa5dfd286d9a43ca0b5b8b0d1e3b90613909e2a4dd2727f8c68f9fee1d55958284b59912e493d17b3d4595f2c576b93811e5285ca0bde40ce7a0ab3f2e16b6ba162cc348f153877e31cf7cdfb0b4e900af2827c6ddf728588043807e7ce9b5975b7de49cbd53c2c581b17243b034d9eeaee33206ed5d688dfcf27e527bd33b77d66158975277a62f94b2236dbd41e762a6fbcdde9a49086ce6f58748c88dff09e6fdddc940734770f3b273d067cab0eb933b3193d6d51c5837fa00d4ed6446b362ff312dd8e008c47387c19e284e2ef3230f811a775159778aa8f80be027cf11fad85ad00a9d7400db6b87ecbd4e1b1adb0670e9c82457e962254fbbca8159071824dad65d8f9e8eb7eb916fde7279ce4321a59b92a0be11afc0df8c7c8b67b2c73dbc9e45cd70137d0decfe91e2dcb6e9d5cbaf5a450e69ffe9abcf969be1efbae586a48e30c3a1bafdf8d6e4de5a5d0a96c60794898f0d93e7f4e1738cecc2791834f9124a59340959e4820a705547342d1d188d94a1104dfe4618d761f903f7a4e08d815437a78208b1ef3b232bab4e385e50d12c82165920816c2bb5697f9eaf7e96d7cb7bc44494660714ac756a088ca9d3132083ee97e54c852faaf00e2e0bebd99e96552c027b5ccc4f0ea65167cd33c57cd6526658db35bc62d206094ab964a8f1335391a9ceb2137a209d17530037ec73bb261ca4ffdf9495211b01b685816c997afa6acdf53cf983cacdff743d299a25fb2c8233d8880e4bfd24162a42e29da9596bcab8609526e3aa4a414089ff8a40c38cf79ae351ca64a510e432f6f9bd4868888e277d7417e2f2704697b44e0e9728dc70953fbe8e1e00f30a9a2d02828a427015c41f6fbe263be25e26a4d6ae7ca2919c330474d245f9b786fa0819cd96770397792e99057b00262ab397622526a337b1ed375931d9f0bc073b8f28759f181e7c6a3827032f648b4cad19be66ed4a52508d9537e51cf70c78c68c2121c7c876d9987449d521e1db76bf3f658f54e24a558e224d44006bbc4bbe2a072912f9746ed2ab8c4aa65cd5ce80b88072194f2d41aafbd5e1c4629dc22fba2f039809843bfea9c0143bc8aebe65b1f41a5e3e4a6fedb1040c8f057cd3d27be62706d8a3f84ccf0e7187d273b1adf92626034d7f09a9a8fad43c92808f5f2ceb031f2356f2bd02b52b245acde4d8d4949277f8d865e89d7a67fd2d910fd9c01f91db18f8aadae42880904858e6c08d72693aa77bf735430095979b6df30c77732efb31f36eec12f93f4fda0abede73a1b6948ef861c7f97b2936c7b7307e1d1581b14e9efa22743eae13f2996861f6c493e07e7a4c456e2426ea6c2347c660f89c4c8f5909248b94c695d53e69d3117c55564997083647b86a467835a1fe20f34abb0ada2d18cacb6742a9b29532a9295efa86c38140c2f9902133ccbd970ff44c7cd352a267ac5f95c9ed189d94746a57ed650e3c1747c099a25b1fa6186fbc65089809f8b21b11678f9cb24eb86d0a30e1507ef4cd48ed422504acd9ee0b23d70811b79f7d95943ec79ce701d8fb33819206df5b0ab10154003c84899d882b7378a6402d488c389c2fee80b6a9dd519545f848816655a9a00c90ec287bc4fd79aca024fcdf951821e85a3bc252e333822946b73a8d467828d89466e5b116357f9d82e5107f36e2b5690f6e4af6c3a2881749d4582c4a5ffafc4eab59fa59399f7cd527a160ad476ad56fdd1fecf06bf499152f2190073fd6f786e503c049e3b03a3fcbd1c08400e66cd48ceb30c1d352007247bb00c39fc2532c502a3e13f79cb35be778712403cbe0898f0c57cc1fa83692d80ed365c226697d561b1a74584c27945a965f2b867f2d4b0246bc21e26ef5b6739087f03fae6fd2a0fffa143a1eef988483f24b12490b8ad50599ac0aa120fbf75106198b3ac63a0a44add176a8c35b8b713453ef061c9fe5e3d08fcd72376b2367e02325c8cb8d9e9e3ddc22863dfac63b2b96a3758eb745810b3b9353332f0a036eeb391a159ba7259c8522c0b0b5ae203b1d06d259b6b64612c6737743761f98032725a3ecf8cb710880dc3ce063b5db8be96272cd7116c6726ba5a32d1dd7bc4013a9a1367cf582511748972b4831c825584e280f885566d0e54e332a36ba22d3fdb59ec15b82baab06273d412ff2cff39f3410ddb3444d8e4a9ccba84cf572253a1925348addd533c5684f7ef1157bfb0659aa9f400389348b2a568a73f67895936dcb35d35a28b6f2413cd0998fed80a8e51bc6a71c175ca544340b5a87634ca8370642079346d70841451b47a35972ae9846b6dcf5567790240f2de7e5ad3307ea314aff5d56de633eafc8afe35e2b321847aa68fc44a3cf3e77a3f9abb0a10ed1a9fc59aed2d74f970ac570718d2a664924a56984cf09747348c79ec7595f9c5635fdfc62435bd3abcd8d80454fa194e6137ef67bfd2b6fa6c6aa7ddceb2e51dfc7b3d3c4356921214a2a5713d8bf957649cd41a199c0651cd9427cfb874568fda99b81ed25a59023ff882ecc9f08bb85b5212fc594a09bd604f149d79139711e1233f8075e1867b907d80dbebedda045c3fdade588c0faa0b6677d6e829a3428614f093129556cc7afc34c43e84e1ba4372e8aba65a167c983012fc12e5062df705c3585bc520725105ba125b7dc4b410a471ac9c1186d1fc6221db4202002104235a981f6574cdffd943c8b07e5853416f0f249bb9c160e54b88f738ff5fe28cbd371f7978cc945eea13a3d07f7e385f87418782675eac05f284b6255a4a3c8b596813140d389c11e64b48ac7a548b89c57770b6462bbc1ec0f94c54d897f5dcc279cb95ee0e9ae78b9c6c37c176ad67d230db0ef6b4c63cef252b13e3bba7bc2a555314939529b8b6d86cd741decceb12f6d20920df1bf62d240f34e9e64d2219eb2238b42359f9c3b2985feebc0bd01ef113a06a988b770d1e54428dc88a265ff4c62a667f610c4e04c96fba8cdf576b50332669cb562bc2d05041d72d673ea2316cd0a245b7703cecfde1e4d38d09c3ea97e0eb48b8095852e39ec8950e63c7310ff4c942d46167498bae9d2cec116a0bd1f9d58b2797de66561ddc721a09d01ca529028c2572dd62afd81064521c5719bc445030f8c309f4eff05c4a38adf1217c11013b08a59c93e17a7e6bfcfc6c6f1a664e36e1bcfe6ae04e4a84493ee5aa76\",\"version\":\"eip191-aes256-gcm-hkdf-sha256\",\"salt\":\"5ac175d14345bbf55e670ac52a0b5959e1a8cf9c952ff636618eea90885cfcaf\",\"nonce\":\"590a95e459bd3ec45beef960\",\"preKey\":\"2730c16a51f55b5bb3da3e5ce13181b688e4dbc8a0625446d791fb6187c2a1e4\"}',\n        verificationProof:\n          'eip191:0x6a244928fc15aea138701dfef49e0123902c38f5bc036dfe1f149e01b0191ef330f71082548b5b28ae49b89440a8e8be5259042d05d823b9279bb7f6e3a0c8821c',\n        msgSent: 23,\n        maxMsgPersisted: 100,\n        profile: {\n          name: 'coral-sophisticated-smelt',\n          desc: null,\n          picture:\n            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAy0lEQVR4AcXBsW2EQBRF0bsPCsAlINEPtEBOB8YZHXhyWhgkd+EWkKYFGlit0y8Hs8Haeufc3t8+HwTHdSfa14Fo3k5q9nUgmreTaOwaImEmzITZ7fvj64GRMBNmwqzNqRBNS89/yqkQCTNhJsxansip8Ipp6akRZsJMmLX8klMhmpaeV+RUqBFmwkyYtcd1Jxq7hiinwl86rjuRMBNmwqwdu4ZoWnpq5u2kZl8HqlIhEmbCTJi1PJFTIdrXgZqcCtG09NQIM2EmzH4AC5cvf1h+9KkAAAAASUVORK5CYII=',\n          blockedUsersList: [],\n          profileVerificationProof: null,\n        },\n        origin: null,\n      },\n    },\n  ];\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "fetch-participants-count-of-a-group",
      children: "Fetch Participants Count of a Group"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// await userAlice.chat.group.participants.count(chatid)\nconst getCount = await userAlice.chat.group.participants.count(groupChatId);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "fetch-participants-count-of-a-group-parameters",
      children: "Fetch Participants Count of a Group parameters"
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
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
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
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " related to that specific group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " are unique identifiers of the group"]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Note: Parameters ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "in this style"
          })
        }), " are mandatory."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: [" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Expected response"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  \"overallCount\": 3,\n  \"adminsCount\": 2,\n  \"membersCount\": 0,\n  \"pendingCount\": 1,\n  \"approvedCount\": 2,\n  \"roles\": {\n    \"ADMIN\": {\n      \"total\": 2,\n      \"pending\": 0\n    },\n    \"MEMBER\": {\n      \"total\": 0,\n      \"pending\": 1\n    }\n  }\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "fetch-participant-status-in-a-group",
      children: "Fetch Participant Status in a Group"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-typescript",
        children: "// await userAlice.chat.group.participants.status(chatid, accountId)\nconst getParticipantStatus = await userAlice.chat.group.participants.status(\n  groupChatId,\n  BobAddress\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "fetch-participants-of-a-group-parameters-1",
      children: "Fetch Participants of a Group parameters"
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
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "chatId"
              })
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
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " related to that specific group. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "chatid"
            }), " are unique identifiers of the group."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "accountId"
              })
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "string"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "The wallet address of the user whose participation status you wish to check within the group."
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: [" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Expected response"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{ \n  pending: false, \n  role: 'admin', \n  participant: true \n}\n"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
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