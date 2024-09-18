"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[68658],{

/***/ 824874:
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
	id: 'docs-notifications-tutorial-create-channel',
	title: 'Creating your channel',
	hide_title: true,
	slug: './create-your-channel',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_notifications_tutorial_create_channel--creating_your_channel.png'
};
const contentTitle = 'Creating your Channel';
const metadata = {
  "id": "notifications/tutorials/docs-notifications-tutorial-create-channel",
  "title": "Creating your channel",
  "description": "Creating a channel is the very first step for sending notifications via Push. Having a Channel is allows you to establish a communication pathway with your users in Web3.",
  "source": "@site/docs/notifications/05-tutorials/01-Tutorial-Create-Channel.mdx",
  "sourceDirName": "notifications/05-tutorials",
  "slug": "/notifications/tutorials/create-your-channel",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/create-your-channel",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/05-tutorials/01-Tutorial-Create-Channel.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 1,
  "frontMatter": {
    "id": "docs-notifications-tutorial-create-channel",
    "title": "Creating your channel",
    "hide_title": true,
    "slug": "./create-your-channel",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 1,
    "image": "/assets/docs/previews/docs_notifications_tutorial_create_channel--creating_your_channel.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Tutorials",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials"
  },
  "next": {
    "title": "Enabling channel on other chains",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials/enabling-channel-on-other-chains"
  }
};
const assets = {

};



const toc = [{
  "value": "Choose your deployment environment",
  "id": "choose-your-deployment-environment",
  "level": 2
}, {
  "value": "Gather channel requirements",
  "id": "gather-channel-requirements",
  "level": 2
}, {
  "value": "Setup channel",
  "id": "setup-channel",
  "level": 2
}, {
  "value": "Step 1️⃣ - Visit Push dapp",
  "id": "step-1️⃣---visit-push-dapp",
  "level": 3
}, {
  "value": "Step 2️⃣ - Connect to Web3",
  "id": "step-2️⃣---connect-to-web3",
  "level": 3
}, {
  "value": "Step 3️⃣ - Developers &gt; Create Channel",
  "id": "step-3️⃣---developers--create-channel",
  "level": 3
}, {
  "value": "Step 4️⃣ - Understand and fill details (Especially network and channel alias)",
  "id": "step-4️⃣---understand-and-fill-details-especially-network-and-channel-alias",
  "level": 3
}, {
  "value": "Step 5️⃣ - Do transactions",
  "id": "step-5️⃣---do-transactions",
  "level": 3
}, {
  "value": "Step 6️⃣ - Verify channel on another blockchain",
  "id": "step-6️⃣---verify-channel-on-another-blockchain",
  "level": 3
}, {
  "value": "Adding Delegates For Channel",
  "id": "adding-delegates-for-channel",
  "level": 2
}, {
  "value": "Step 1️⃣ - Visit your channel dashboard",
  "id": "step-1️⃣---visit-your-channel-dashboard",
  "level": 3
}, {
  "value": "Step 2️⃣ - Add or remove delegates",
  "id": "step-2️⃣---add-or-remove-delegates",
  "level": 3
}, {
  "value": "About your channel dashboard",
  "id": "about-your-channel-dashboard",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "creating-your-channel",
      children: "Creating your Channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Creating a channel is the very first step for sending notifications via Push. Having a Channel is allows you to establish a communication pathway with your users in Web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will be using Push dApp to create your channel for this turotial though you can also do it from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/build/create-channel/",
        children: "Push SDK create channel API"
      }), " or directly from the Push protocol smart contracts as well."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Create Channel | Tutorial | Push Notifications | Push Documentation`
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "choose-your-deployment-environment",
      children: "Choose your deployment environment"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can create your channel on either the staging environment or on the production environment —"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/dashboard",
          children: "Production dApp"
        }), " - The Production dApp is mainly useful for fully functional dapps & smart contracts that are live on the blockchain. Creating your channel on prod requires 50 PUSH, and it's recommended if you have a good user base or active community who wants notifications."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://staging.push.org/dashboard",
          children: "Staging dApp"
        }), " - The Staging dapp is very useful for developers to test out channels, send dummy notifications, and understand the functionalities of the Push protocol."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "gather-channel-requirements",
      children: "Gather channel requirements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There are six crucial requirements for creating a channel. Make sure you are ready with the below list 👇🏼"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel name"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel logo (an image of size 128px * 128px)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "An amount of 50 $PUSH tokens in your wallet (and some ETH)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A brief channel description (250 Characters)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel website URL (call to action link)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Additional Network settings (Alias address) - Alias address is the representation of your channel on other selected chains of your choice."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The alias address allows you to provide an address that will represent your channel on the other chain selected in the Network dropdown section."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Important:"
      }), " The address you pass as an alias, must be your own as it will be further verified as a part of the channel creation process."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "You can pass the same Ethereum (EVM-compatible) address, being used for channel creation, as an alias address for other EVM-compatible chains as well.\nThe Alias address is quite crucial to activate your channel on other chains. Read more about it in page."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Note: The channel address is basically the account(wallet) address you use when creating the channel."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "setup-channel",
      children: "Setup channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Make sure you are ready with your wallet. Push protocol supports both EOA & Multisig wallets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1️⃣---visit-push-dapp",
      children: "Step 1️⃣ - Visit Push dapp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Head to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/dashboard",
        children: "prod dapp"
      }), " or the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://staging.push.org/dashboard",
        children: "staging dapp"
      }), " based on your channel creation requirement."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2️⃣---connect-to-web3",
      children: "Step 2️⃣ - Connect to Web3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Connect your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://metamask.io",
        children: "Metamask wallet"
      }), " or any other supported wallet!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Connect your wallet",
        src: (__webpack_require__(785037)/* ["default"] */ .A) + "",
        title: "Representation of how to connect your web3 wallet",
        width: "1000",
        height: "752"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3️⃣---developers--create-channel",
      children: "Step 3️⃣ - Developers > Create Channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once Connected, go to the Developers > Create Channel and fill in the details"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "caution",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Currently, Channel Alias is the only way to enable multi-chain communication and it is immutable. It's heavily recommended to understand it and set it up as part of channel creation."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Create your channel",
        src: (__webpack_require__(31386)/* ["default"] */ .A) + "",
        title: "Representation of how to start creating your channel",
        width: "1000",
        height: "907"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you are on a staging environment, don't forget to mint:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Get Sepolia ETH from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://sepoliafaucet.com/",
          children: "Alchemy Faucet"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Get Sepolia ETH by joining ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://discord.gg/pushprotocol",
          children: "Push Discord"
        }), " > Asking an admin"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Get Sepolia PUSH from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://sepolia.etherscan.io/token/0x37c779a1564DCc0e3914aB130e0e787d93e21804#writeContract#F5",
          children: "Push Testnet Contract"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Get Testnet Matic from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://faucet.polygon.technology/",
          children: "Polygon Faucet"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Faucets giving you trouble? Head to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://discord.gg/pushprotocol",
          title: "Join Push Discord channel",
          children: "Push Discord"
        }), " and ask an admin to send you some."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-4️⃣---understand-and-fill-details-especially-network-and-channel-alias",
      children: "Step 4️⃣ - Understand and fill details (Especially network and channel alias)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fill in your channel details",
        src: (__webpack_require__(464025)/* ["default"] */ .A) + "",
        title: "Representation of details you need to fill for your channel including channel alias",
        width: "1000",
        height: "1298"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "What is a channel alias address?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "An alias address is required to enable your channel on other chains so that they are capable of triggering notifications on other chains apart from the Ethereum chain only."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For instance, if you wish to send a notification on the polygon chain, provide the alias address of your channel on Polygon chain. Alternatively, you may choose to keep it blank if you only wish to send notifications on the Ethereum chain itself."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Channel Alias is only shown if you switch to any other network than Ethereum. This means that your channel will be able to send notifications on both Ethereum and the other blockchains which you select!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-5️⃣---do-transactions",
      children: "Step 5️⃣ - Do transactions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You will need to do two transactions (and optionally the third one if you are creating a multi-chain channel, more on that in step 6)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Approval of PUSH tokens"
        }), " -> This transaction ensures that your wallet address has successfully approved the Push core contract to use 50 PUSH tokens on your behalf."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Channel Creation on Push Core"
        }), " -> Once approved, the 2nd transaction calls the channel creation function on Push core contract to create the channel."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Confirm transactions for your channel creation",
        src: (__webpack_require__(588010)/* ["default"] */ .A) + "",
        title: "Representation of confirm transactions screen during your channel creation process",
        width: "1062",
        height: "660"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-6️⃣---verify-channel-on-another-blockchain",
      children: "Step 6️⃣ - Verify channel on another blockchain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you have created a multichain channel then you need to switch to that blockchain network and do another tx that verifies your channel on that network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Verify channel on other blockchain",
        src: (__webpack_require__(621008)/* ["default"] */ .A) + "",
        title: "Representation of how to verify channel on other blockchain",
        width: "1386",
        height: "1010"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "adding-delegates-for-channel",
      children: "Adding Delegates For Channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Delegate addresses enable another address to send a notification on a channel's behalf. A channel can add (or remove) multiple delegate addresses."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Adding channel delegates is a protocol level call but the recommended way to do it is via our dApp or via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/push-website/pr-preview/pr-858/docs/notifications/build/channel-delegates",
        title: "API for adding channel delegates",
        children: "Push SDK Channel Delegates API"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Delegate addresses are useful to ensure notifications can be sent out from other wallets apart from the one that created the channel. The channel creator is the only one who is able to add or remove a delegate at any time."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1️⃣---visit-your-channel-dashboard",
      children: "Step 1️⃣ - Visit your channel dashboard"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Adding or removing delegates",
        src: (__webpack_require__(574437)/* ["default"] */ .A) + "",
        title: "Representation of how a developer can add or remove delegates from their channel via channel dashboard",
        width: "2684",
        height: "1510"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2️⃣---add-or-remove-delegates",
      children: "Step 2️⃣ - Add or remove delegates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To add or remove the delegates, tap on the three dots at the top right of your channel dashboard and choose the appropriate option."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "about-your-channel-dashboard",
      children: "About your channel dashboard"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After successful channel creation, the Push dApp will start showing the channel's profile Page. There are a few details about this page listed below for your reference;"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Explore your channel",
        src: (__webpack_require__(321125)/* ["default"] */ .A) + "",
        title: "Representation of how channel dashboard looks to the developer after channel is successfully created",
        width: "1556",
        height: "1192"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This Channel Profile page shall only be visible to the Creator of the Channel."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The Channel Profile page allows the channel owner to trigger notifications to its subscribers via the dApp."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This page also gives the channel owner access to the Settings button through which the channel owner can perform multiple actions, such as adding a delegate notification sender for the channel, removing a delegate, deactivating the channel, etc."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Alright, now that you own a Channel, start using it to send web3 native notifications to your subscribers and establish better communications in the Web3 world 🥳"
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

/***/ 574437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/channelDelegates-377a420919f07d97b0a6154c2ff641ab.png");

/***/ }),

/***/ 588010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/confirmTransaction-8436184b9008360dff9e8a9a429c9a5f.png");

/***/ }),

/***/ 785037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/connectWallet-376cc913f3f25695642d62e0c7a6c5a4.png");

/***/ }),

/***/ 464025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/createChannelAlias-c1a34948297f0a57e7fd0cab29d7963c.png");

/***/ }),

/***/ 31386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/createYourChannel-8be99d22d4f0cf7243271a0f1c765fb3.png");

/***/ }),

/***/ 321125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/knowYourChannel-17e31e6207fc2bada43d2874e0da6eab.png");

/***/ }),

/***/ 621008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/verifyChannel-616ea1436d842166345454cbf8ffe2fa.png");

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