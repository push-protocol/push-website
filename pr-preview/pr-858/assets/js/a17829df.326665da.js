"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[67853],{

/***/ 177887:
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
	slug: 'deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need',
	title: 'Deep-dive into Push Snaps Features & Getting Started 🛠️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Deep-dive into Push Snaps Features & Getting Started 🛠️',
	text: 'As we outlined in our announcement article — the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet.',
	tags: [
		'Push Protocol',
		'Metamask',
		'Metamask Wallet',
		'Web3',
		'Blockchain'
	]
};
const contentTitle = 'All the technical specifications and getting started tips you need.';
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need",
  "source": "@site/blog/2023-09-13-deep-dive-into-push-snaps/index.md",
  "title": "Deep-dive into Push Snaps Features & Getting Started 🛠️",
  "description": "Deep-dive into Push Snaps Features & Getting Started 🛠️",
  "date": "2023-09-13T00:00:00.000Z",
  "formattedDate": "September 13, 2023",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/push-protocol"
    },
    {
      "label": "Metamask",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/metamask"
    },
    {
      "label": "Metamask Wallet",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/metamask-wallet"
    },
    {
      "label": "Web3",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/web-3"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain"
    }
  ],
  "readingTime": 4.32,
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
    "slug": "deep-dive-into-push-snaps-features-and-getting-started-all-the-technical-specifications-and-getting-started-tips-you-need",
    "title": "Deep-dive into Push Snaps Features & Getting Started 🛠️",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Deep-dive into Push Snaps Features & Getting Started 🛠️",
    "text": "As we outlined in our announcement article — the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet.",
    "tags": [
      "Push Protocol",
      "Metamask",
      "Metamask Wallet",
      "Web3",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "4 Reasons To Separate Your dApp’s Communication and Execution Layers",
    "permalink": "/push-website/pr-preview/pr-858/blog/4-reasons-to-seperate-your-dapp-communication-and-execution-layers"
  },
  "nextItem": {
    "title": "Bringing Push to MetaMask Snaps",
    "permalink": "/push-website/pr-preview/pr-858/blog/bringing-push-to-meta-mask-snaps"
  }
};
const assets = {
"image": (__webpack_require__(206505)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Core Snap Features",
  "id": "core-snap-features",
  "level": 2
}, {
  "value": "Brief glance at the Push Snap’s working mechanism",
  "id": "brief-glance-at-the-push-snaps-working-mechanism",
  "level": 2
}, {
  "value": "Snap installation and Set-Up guide",
  "id": "snap-installation-and-set-up-guide",
  "level": 2
}, {
  "value": "Snap’s permissions",
  "id": "snaps-permissions",
  "level": 2
}, {
  "value": "Technical Specifications",
  "id": "technical-specifications",
  "level": 2
}, {
  "value": "onRPCHandler Specifications",
  "id": "onrpchandler-specifications",
  "level": 2
}, {
  "value": "onCronjob Handler Specifications",
  "id": "oncronjob-handler-specifications",
  "level": 2
}, {
  "value": "Trouble getting started? We’re here to help!",
  "id": "trouble-getting-started-were-here-to-help",
  "level": 2
}, {
  "value": "Other FAQs",
  "id": "other-faqs",
  "level": 2
}, {
  "value": "How can I install the Push Snap?",
  "id": "how-can-i-install-the-push-snap",
  "level": 3
}, {
  "value": "Can I add an address that I do not own?",
  "id": "can-i-add-an-address-that-i-do-not-own",
  "level": 3
}, {
  "value": "Can I opt for only in-app MetaMask notifications?",
  "id": "can-i-opt-for-only-in-app-metamask-notifications",
  "level": 3
}, {
  "value": "Can I opt into channels using this Push Snap?",
  "id": "can-i-opt-into-channels-using-this-push-snap",
  "level": 3
}, {
  "value": "Can the Push Snap sign and send transactions?",
  "id": "can-the-push-snap-sign-and-send-transactions",
  "level": 3
}, {
  "value": "Is there a way to minimize frequent notification pop-ups?",
  "id": "is-there-a-way-to-minimize-frequent-notification-pop-ups",
  "level": 3
}, {
  "value": "What permissions do I need to provide while installing or using the Push Snap?",
  "id": "what-permissions-do-i-need-to-provide-while-installing-or-using-the-push-snap",
  "level": 3
}, {
  "value": "Can I add more than one wallet to receive notifications?",
  "id": "can-i-add-more-than-one-wallet-to-receive-notifications",
  "level": 3
}, {
  "value": "If I have more than one wallet added to the Push Snap, will I receive notifications for all of them?",
  "id": "if-i-have-more-than-one-wallet-added-to-the-push-snap-will-i-receive-notifications-for-all-of-them",
  "level": 3
}, {
  "value": "Does the MetaMask Wallet need to be unlocked to receive notification?",
  "id": "does-the-metamask-wallet-need-to-be-unlocked-to-receive-notification",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Deep-dive into Push Snaps Features &amp; Getting Started 🛠️",
        src: (__webpack_require__(729026)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As we outlined in our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push-protocol.medium.com/bringing-push-to-metamask-snaps-fc780fec004b",
        children: "announcement article"
      }), " — the Push Snap is a powerful tool that allows any wallet address and user to receive notifications directly in their MetaMask wallet. With the Push Snap installed, you can now seamlessly receive notifications powered by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/",
        children: "Push Protocol"
      }), " directly into your wallet, ensuring you never miss out on important updates from the channels you subscribe to."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "By delivering notifications directly to your wallet address, we’re eliminating the need to log in to any other front-end separately to get those same notifications and alerts. By bringing all your notifications into one place, we’re saving you time, effort, and allowing you to more easily stay connected and informed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "core-snap-features",
      children: "Core Snap Features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The main features of version 1 of the Push Snap include:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Notifications"
        }), ": Notifying users of all updates from the channels they\nopt-in to."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Address Selection"
        }), ": Addition or removal of their desired addresses for\nnotifications."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Customization of Pop-Ups"
        }), ": Push Snap allows users to toggle popup\nnotifications at their convenience."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "brief-glance-at-the-push-snaps-working-mechanism",
      children: "Brief glance at the Push Snap’s working mechanism"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The snap requests permission to run periodically every minute."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "While running, it scouts for all new notifications/alerts received by your wallet"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "It then bundles all the notifications together and shows all of them in the form of a pop-up as well as in-app notification."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The Push Snap allows users to update their address for which they prefer to receive notifications."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The Push Snap also includes features to toggle the pop-up notifications as per the user’s choice."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Note: Currently, the Push Snap checks if more than 25 notifications are\nreceived per minute. If that’s the case, the Push Snap automatically notifies\nthe user and snoozes the popups, which can always be turned back on from the\ndApp."
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "snap-installation-and-set-up-guide",
      children: "Snap installation and Set-Up guide"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["If you don’t already have a MetaMask wallet, install and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask",
          children: "set-up a wallet in MetaMask"
        }), " here."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Next, go to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/receive",
          children: "https://app.push.org/receive"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Click on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Install Snap"
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "approve the required permissions to run the snap"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Once successfully installed the snap will redirect to Push Channels Dapp"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Here you can opt-in to your favourite channels to receive notifications"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Once done, you can go back to the Snap Settings Page."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["With the connected wallet, click on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Add Address:"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This allows you to add an address for which you prefer to receive notifications"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Once you click, simply sign the message to complete the process"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Once done, you are all set. The address will now start receiving notifications."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "snaps-permissions",
      children: "Snap’s permissions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Local storage"
        }), ": To store the addresses to send notifications and PGP\nprivate key to send PUSH Chat notifications"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Periodic actions"
        }), ": This includes sending notifications every minute to\nthe wallet"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Dialog Boxes"
        }), ": This includes popups for showing notifications on screen\nand the initial screen"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Internet Access"
        }), ": The Push Snap has internet access and can make API\ncalls using fetch()"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "technical-specifications",
      children: "Technical Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Mentioned below are the imperative calls made by the Push Snap."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "onrpchandler-specifications",
      children: "onRPCHandler Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "‘pushproto_addaddress’"
        }), " — This stores the address in the local storage chosen\nby the user after the signature is successful. This address will be served the\nnotifications."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "‘pushproto_removeaddress’"
        }), " — This removes the address from the local storage\nchosen by the user. That address won’t be served the notification anymore."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "‘pushproto_welcome’"
        }), " — Serves as an initial popup to introduce the user to\nwhat the snap does and redirects the user to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://app.push.org",
          children: "\napp.push.org\n"
        }), " to opt-in to the push channels to start getting notifications."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "‘pushproto_togglepopup’"
        }), " — This method turns off the snooze and notifications\nwould be allowed to be shown in the form of popups again."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "oncronjob-handler-specifications",
      children: "onCronjob Handler Specifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Check if the total notification received is >25. If not it continues to display notifications in the form of popups, otherwise it turns off popups notifying the user, and it can be toggled from the app"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "InApp notifications have a limit of 11 notifications per second since notifications could be sent every 5 sec, to adhere to that it’s limited to 11 latest notifications per second fired every 5 seconds, adding up to 55 secs, and the next 5-sec gap is freed for the next iteration"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "trouble-getting-started-were-here-to-help",
      children: "Trouble getting started? We’re here to help!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you have any issues with setting up your Push Snap, we have a 24/7 dedicated team of devs to help you out."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can find us here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/pushprotocol",
        children: "https://discord.gg/pushprotocol"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "other-faqs",
      children: "Other FAQs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-can-i-install-the-push-snap",
      children: "How can I install the Push Snap?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To install the Push Protocol Snap, you need to go to our dApp, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/receive",
        children: "https://app.push.org/receive"
      }), " and click on the Receive Notifications section. From there, install the Push Snap by giving it the required permissions. After adding addresses, you’re all set to start receiving notifications."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "can-i-add-an-address-that-i-do-not-own",
      children: "Can I add an address that I do not own?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The addresses to receive notifications can be added only after signing a message, which proves the ownership of that address, hence un-owned addresses cannot be added"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "can-i-opt-for-only-in-app-metamask-notifications",
      children: "Can I opt for only in-app MetaMask notifications?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Yes, the Push Snap can run only on in-app notifications, to avail that, you need to go through the Push Snap settings in the Push dApp and turn off pop-up notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "can-i-opt-into-channels-using-this-push-snap",
      children: "Can I opt into channels using this Push Snap?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Opting-in to channels can only be done using the Push Protocol dApp. The Push Snap is only for receiving and displaying these notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "can-the-push-snap-sign-and-send-transactions",
      children: "Can the Push Snap sign and send transactions?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "No, the Push Snap does not have access to the Ethereum provider nor the signer hence the Push Snap cannot initiate any kind of transaction that may or may not involve asset transfers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "is-there-a-way-to-minimize-frequent-notification-pop-ups",
      children: "Is there a way to minimize frequent notification pop-ups?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Snap has an in-built feature to snooze frequent pop-up notifications. If you receive more than 25 notifications within 5 minutes, it automatically goes into snooze mode and notifications would only come in MetaMask. These settings can always be reset from the dApp."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-permissions-do-i-need-to-provide-while-installing-or-using-the-push-snap",
      children: "What permissions do I need to provide while installing or using the Push Snap?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The only permissions required are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Local storage access for the Push Snap to store details of notifications received and allowed addresses"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Internet access to gather notifications from Push Protocol"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Periodic running of services while the browser is active to check for latest notifications"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Dialog box access to allow pop-up notifications"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "can-i-add-more-than-one-wallet-to-receive-notifications",
      children: "Can I add more than one wallet to receive notifications?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Yes, more than one wallet can be added to receive notifications:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Go to the Push Snap settings on the Push dApp"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Connect the wallet you want to add"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Click on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          children: "Add Address"
        }), " button and sign a message"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The address will be added to the snap to receive notifications"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "if-i-have-more-than-one-wallet-added-to-the-push-snap-will-i-receive-notifications-for-all-of-them",
      children: "If I have more than one wallet added to the Push Snap, will I receive notifications for all of them?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Yes, every wallet you add will receive a notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "does-the-metamask-wallet-need-to-be-unlocked-to-receive-notification",
      children: "Does the MetaMask Wallet need to be unlocked to receive notification?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Yes, the browser window needs to be active and MetaMask needs to be unlocked to start receiving notifications."
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

/***/ 206505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-dc4fc741e7f89b68c30fa4b588200bc7.webp");

/***/ }),

/***/ 729026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-dc4fc741e7f89b68c30fa4b588200bc7.webp");

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