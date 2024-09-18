"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[25397],{

/***/ 476779:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119365);


const frontMatter = {
	id: 'docs-slider-settings-with-showrunners-example',
	title: 'Notification Settings in BTC Tracker',
	hide_title: true,
	slug: './btc-tracker-with-showrunners-example',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 9,
	image: '/assets/docs/previews/docs_slider_settings_with_showrunners_example--notification_settings_in_btc_tracker.png'
};
const contentTitle = 'Notification Settings in BTC Tracker Channel';
const metadata = {
  "id": "notifications/showrunners-scaffold/Examples/docs-slider-settings-with-showrunners-example",
  "title": "Notification Settings in BTC Tracker",
  "description": "This example is intended to get you understand slider based notification settings with a real-world application. For the example we are going to look at a scenario where users can choose a time interval and showrunners framework will notify them as per their request. Checkout Showrunners Docs, Showrunners Framework, Channel Settings Docs and Channel Settings Demo for better understanding!",
  "source": "@site/docs/notifications/04-showrunners-scaffold/03-Examples/09-Showrunner-Example-Btc-Tracker.mdx",
  "sourceDirName": "notifications/04-showrunners-scaffold/03-Examples",
  "slug": "/notifications/showrunners-scaffold/Examples/btc-tracker-with-showrunners-example",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/btc-tracker-with-showrunners-example",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/09-Showrunner-Example-Btc-Tracker.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 9,
  "frontMatter": {
    "id": "docs-slider-settings-with-showrunners-example",
    "title": "Notification Settings in BTC Tracker",
    "hide_title": true,
    "slug": "./btc-tracker-with-showrunners-example",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 9,
    "image": "/assets/docs/previews/docs_slider_settings_with_showrunners_example--notification_settings_in_btc_tracker.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Notification Settings in ETH Tracker",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/eth-tracker-with-showrunners-example"
  },
  "next": {
    "title": "Price Tracker Channel",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/price-tracker-with-showrunners-example"
  }
};
const assets = {

};





const toc = [{
  "value": "What we gonna build?",
  "id": "what-we-gonna-build",
  "level": 2
}, {
  "value": "Creating BTC Tracker in Showrunners",
  "id": "creating-btc-tracker-in-showrunners",
  "level": 2
}, {
  "value": "Step 1: Setup the Showrunners in your local machine",
  "id": "step-1-setup-the-showrunners-in-your-local-machine",
  "level": 3
}, {
  "value": "Step 2: Install Dependencies &amp; start up",
  "id": "step-2-install-dependencies--start-up",
  "level": 3
}, {
  "value": "Step 3: Import the Push SDK",
  "id": "step-3-import-the-push-sdk",
  "level": 3
}, {
  "value": "Step 4: Create a <code>btcTickerKeys.json</code> file in the channel folder",
  "id": "step-4-create-a-btctickerkeysjson-file-in-the-channel-folder",
  "level": 3
}, {
  "value": "Step 5: Create a <code>btcTickerSettings.json</code> file in the channel folder",
  "id": "step-5-create-a-btctickersettingsjson-file-in-the-channel-folder",
  "level": 3
}, {
  "value": "Step 6: Create a <code>btcTickerChannel.ts</code> file in the channel folder",
  "id": "step-6-create-a-btctickerchannelts-file-in-the-channel-folder",
  "level": 3
}, {
  "value": "Step 7: Getting started with the channel logic",
  "id": "step-7-getting-started-with-the-channel-logic",
  "level": 3
}, {
  "value": "Step 8: Create a <code>btcTickerModel.ts</code> file in the folder.",
  "id": "step-8-create-a-btctickermodelts-file-in-the-folder",
  "level": 3
}, {
  "value": "Step 9: Create a <code>btcTickerJobs.ts</code> file in the folder.",
  "id": "step-9-create-a-btctickerjobsts-file-in-the-folder",
  "level": 3
}, {
  "value": "Wrapping it UP 🚀",
  "id": "wrapping-it-up-rocket",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "notification-settings-in-btc-tracker-channel",
      children: "Notification Settings in BTC Tracker Channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This example is intended to get you understand slider based notification settings with a real-world application. For the example we are going to look at a scenario where users can choose a time interval and showrunners framework will notify them as per their request. Checkout ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/showrunners-scaffold/get-started/",
        title: "Push Showrunners Docs",
        children: "Showrunners Docs"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/tree/main",
        title: "Push Showrunners Github",
        children: "Showrunners Framework"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/build/create-channel-settings/",
        title: "Push Channel Settings Docs",
        children: "Channel Settings Docs"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/tree/main/src/sample_showrunners/bank",
        title: "Channel Settings Example Github",
        children: "Channel Settings Demo"
      }), " for better understanding!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Price Alerts with Showrunners tutorial | Push Notification | Push Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-we-gonna-build",
      children: "What we gonna build?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Imagine you are a crypto trader or a general crypto enthusiast. You want to be notified every once in a while about the price movements and activities in the market. But you either lose track of time or forget about it. To solve this exact problem, we will be looking into a slider type notification settings implementation where you as a user can specify the time interval and/or required percentage change of a token on which he/she would like to get notified."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will choose the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/tree/main/src/sample_showrunners/btcTicker",
        title: "Push Channel BTC Tracker",
        children: "BTC Tracker"
      }), " channel to demonstrate this example."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "creating-btc-tracker-in-showrunners",
      children: "Creating BTC Tracker in Showrunners"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-1-setup-the-showrunners-in-your-local-machine",
      children: "Step 1: Setup the Showrunners in your local machine"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For detailed, step-by-step guide visit the Showrunners ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/showrunners-scaffold/get-started/",
        title: "Push Showrunners Docs",
        children: "docs"
      }), ". First we need to create a folder in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/showrunners/<your_channel_name>"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-2-install-dependencies--start-up",
      children: "Step 2: Install Dependencies & start up"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Navigate to the SDK directory and install required dependencies."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "cd push-showrunners-framework\nyarn install\ndocker-compose up\nyarn run dev\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-3-import-the-push-sdk",
      children: "Step 3: Import the Push SDK"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["After you have created a channel folder. Refer to Showrunners ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/showrunners-scaffold/get-started/",
        title: "Push Showrunners Docs",
        children: "docs"
      }), ". Move to the [name]Channel.ts file and import the dependencies."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { PushAPI } from '@pushprotocol/restapi';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-4-create-a-btctickerkeysjson-file-in-the-channel-folder",
      children: ["Step 4: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "btcTickerKeys.json"
      }), " file in the channel folder"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Use the boilerplate for the keys file.\n."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "{\n  \"PRIVATE_KEY_NEW_STANDARD\": {\n    \"PK\": \"0x{PRIVATE_KEY_HERE}\",\n    \"CHAIN_ID\": \"eip155:11155111\"\n  },\n  \"PRIVATE_KEY_OLD_STANDARD\": \"0x{PRIVATE_KEY_HERE}\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-5-create-a-btctickersettingsjson-file-in-the-channel-folder",
      children: ["Step 5: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "btcTickerSettings.json"
      }), " file in the channel folder"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Use the below code for the settings file."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "{\n  \"cmcEndpoint\": \"https://pro-api.coinmarketcap.com/\",\n  \"providerUrl\":\"SEPOLIA_PROVIDER_HERE\",\n  \"route\":\"v1/cryptocurrency/quotes/latest\",\n  \"cmcKey\":\"CMC_API_KEY_HERE\",\n  \"id\": 1\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-6-create-a-btctickerchannelts-file-in-the-channel-folder",
      children: ["Step 6: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "btcTickerChannel.ts"
      }), " file in the channel folder"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "btcTickerChannel.ts"
      }), " will be the file which will contain all the logic for the fetching the data and constructing the payload."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There is some boilerplate code involved in creating a channel. The channel.ts file will contain the following boilerplate:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { Inject, Service } from 'typedi';\nimport { Logger } from 'winston';\nimport config, { defaultSdkSettings } from '../../config';\nimport { EPNSChannel } from '../../helpers/epnschannel';\n\nconst NETWORK_TO_MONITOR = config.web3MainnetNetwork;\n\n@Service()\nexport default class BtcTickerChannel extends EPNSChannel {\n  constructor(@Inject('logger') public logger: Logger, @Inject('cached') public cached) {\n    super(logger, {\n      sdkSettings: {\n        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,\n        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,\n        networkSettings: defaultSdkSettings.networkSettings,\n      },\n      networkToMonitor: NETWORK_TO_MONITOR,\n      dirname: __dirname,\n      name: 'BTC Tracker',\n      url: 'https://push.org/',\n      useOffChain: true,\n    });\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "What's going on here?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "W"
        }), "e are creating a new class ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "BtcTickerChannel"
        }), " which extends the Push Channel class."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "super()"
        }), " the constructor we pass in certain arguments required for the channel like the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "networkToMonitor"
        }), " , name, and URL for the channel."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "useOffChain the"
        }), " parameter tells the showrunner to use the off-chain notification instead of an on-chain one."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "step-7-getting-started-with-the-channel-logic",
      children: "Step 7: Getting started with the channel logic"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Our objective is to create a channel to send notifications about price movements depending upon users' settings (Time interval and Percentage change here).\nSo, to achieve this we will follow the following logic:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Fetch current prices of tokens using the CoinMarketCap API"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// API URL components and settings\nconst cmcroute = settings.route;\nconst cmcEndpoint = settings.cmcEndpoint;\nconst pollURL = `${cmcEndpoint}${cmcroute}?id=${\n  settings.id\n}&aux=cmc_rank&CMC_PRO_API_KEY=${settings.cmcKey || config.cmcAPIKey}`;\n// Fetching data from the CMC API\nlet { data } = await axios.get(pollURL);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Initialize ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "userAlice"
        }), " for the channel using your private key and signer."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// Initalize provider, signer and userAlice for Channel interaction\nconst provider = new ethers.providers.JsonRpcProvider(settings.providerUrl);\nconst signer = new ethers.Wallet(keys.PRIVATE_KEY_NEW_STANDARD.PK, provider);\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Fetch the current prices, hourly, daily and weekly change for notification payload."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// Get the required prices here\nconst price = data.BTC.quote.USD.price;\nconst formattedPrice = Number(Number(price).toFixed(2));\n\nconst hourChange = Number(data.BTC.quote.USD.percent_change_1h);\nconst dayChange = Number(data.BTC.quote.USD.percent_change_24h);\nconst weekChange = Number(data.BTC.quote.USD.percent_change_7d);\n\nconst hourChangeFixed = hourChange.toFixed(2);\nconst dayChangeFixed = dayChange.toFixed(2);\nconst weekChangeFixed = weekChange.toFixed(2);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Before we begin with the logic, we need to fetch the get the current cycles and previous BTC price from our database."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// Retrive Global data\nconst btcTrackerGlobalData =\n  (await btcTickerGlobalModel.findOne({ _id: 'btcTrackerGlobal' })) ||\n  (await btcTickerGlobalModel.create({\n    _id: 'btcTrackerGlobal',\n    prevBtcPrice: Number(formattedPrice),\n    cycles: 0,\n  }));\n\n// Assign cycles and prevBtcPrice\nconst CYCLES = btcTrackerGlobalData.cycles ? btcTrackerGlobalData.cycles : 0;\nconst prevPrice = btcTrackerGlobalData.prevBtcPrice\n  ? btcTrackerGlobalData.prevBtcPrice\n  : 0;\n\n// Update current price as prev price\nawait btcTickerGlobalModel.findByIdAndUpdate(\n  { _id: 'btcTrackerGlobal' },\n  { prevBtcPrice: Number(formattedPrice) },\n  { upsert: true }\n);\n\n// Calculate percentage change\nconst globalChangePercentage = Math.round(\n  (Math.abs(formattedPrice - prevPrice) / prevPrice) * 100\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Build a payload using the above details"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// Build Payload Content\nlet changeInper = Number(\n  ((Math.abs(formattedPrice - prevPrice) / prevPrice) * 100).toFixed(2)\n);\n\nconst title = 'BTC at $' + formattedPrice;\nconst message = `\\nHourly Movement: ${hourChangeFixed}%\\nDaily Movement: ${dayChangeFixed}%\\nWeekly Movement: ${weekChangeFixed}%`;\nconst payloadTitle = `BTC Price Movement`;\nconst globalPayloadMsg = `BTC at [t:$${formattedPrice} (${\n  changeInper >= 0\n    ? changeInper < 100\n      ? `+` + changeInper + '%'\n      : '+' + 0 + '%'\n    : `-` + changeInper + '%'\n})]\\n\\nHourly Movement: ${\n  hourChange >= 0\n    ? '[s: +' + hourChangeFixed + '%]'\n    : '[d: -' + hourChangeFixed + '%]'\n}\\nDaily Movement: ${\n  dayChange >= 0\n    ? '[s: +' + dayChangeFixed + '%]'\n    : '[d: -' + dayChangeFixed + '%]'\n}\\nWeekly Movement: ${\n  weekChange >= 0\n    ? '[s: +' + weekChangeFixed + '%]'\n    : '[d: -' + weekChangeFixed + '%]'\n}[timestamp: ${Math.floor(Date.now() / 1000)}]`;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here, you can use colours as per your wish. For example price pump is shown in blue and price dump is shown in red/pink colour in this case."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Fetch the current subscribers of the channel using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "subscribers()"
        }), " in the Push SDK"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// Looping for subscribers' data in the channel\nwhile (true) {\n  const userData: any = await userAlice.channel.subscribers({\n    page: i,\n    limit: 30,\n    setting: true,\n  });\n  if (userData.itemcount != 0) {\n    i++;\n  } else {\n    i = 1;\n    // UPDATE CYCLES VALUE\n    // HERE\n    await btcTickerGlobalModel.findOneAndUpdate(\n      { _id: 'btcTrackerGlobal' },\n      { $inc: { cycles: 3 } },\n      { upsert: true },\n    );\n\n    break;\n  }\n\n  // Next block of code goes here\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Loop across each subscriber to fetch their ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "userSettings"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here, we need to track the price of BTC at which a user got notified and send a notification accordingly. Therefore, we need to build custom notifications for the user. Here, is how we can do it:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "await Promise.all(\n  userData.subscribers.map(async (subscriberObj: { settings: string; subscriber: any }) => {\n\n  // Converting String to JS object\n  const userSettings = JSON.parse(subscriberObj.settings);\n\n  // Fetch users last btc price & last cycle values\n  const userDBValue =\n    (await btcTickerUserModel.findOne({ _id: subscriberObj.subscriber })) ||\n    (await btcTickerUserModel.create({\n      _id: subscriberObj.subscriber,\n      lastCycle: btcTrackerGlobalData.cycles,\n      lastbtcPrice: btcTrackerGlobalData.prevBtcPrice,\n    }));\n\n  // Calculation of percentage change for each subscriber\n  const changePercentage = (\n    (Math.abs(formattedPrice - Number(userDBValue.lastBtcPrice) || prevPrice) /\n      Number(userDBValue.lastBtcPrice) || prevPrice) * 100\n  ).toFixed(2);\n\n  // Build payload message for each subscriber\n  let payloadMsg;\n\n  if (Number(changePercentage) == 0) {\n    payloadMsg = `BTC at [t:$${formattedPrice} ( 0 %\n    )]\\n\\nHourly Movement: ${\n      hourChange >= 0 ? '[s: +' + hourChangeFixed + '%]' : '[d: ' + hourChangeFixed + '%]'\n    }\\nDaily Movement: ${\n      dayChange >= 0 ? '[s: +' + dayChangeFixed + '%]' : '[d: ' + dayChangeFixed + '%]'\n    }\\nWeekly Movement: ${\n      weekChange >= 0 ? '[s: +' + weekChangeFixed + '%]' : '[d: ' + weekChangeFixed + '%]'\n    }[timestamp: ${Math.floor(Date.now() / 1000)}]`;\n  } else {\n    let changeInpercentage = Number(\n      (\n        ((formattedPrice - Number(userDBValue.lastBtcPrice) || prevPrice) /\n          Number(userDBValue.lastBtcPrice) || prevPrice) * 100\n      ).toFixed(2),\n    );\n    payloadMsg = `BTC at [t:$${formattedPrice} (${\n      changeInpercentage > 0\n        ? changeInpercentage < 100\n          ? `+` + changeInpercentage + '%'\n          : '+' + 0 + '%'\n        : `-` + changeInpercentage + '%'\n    })]\\n\\nHourly Movement: ${\n      hourChange >= 0 ? '[s: +' + hourChangeFixed + '%]' : '[d: ' + hourChangeFixed + '%]'\n    }\\nDaily Movement: ${\n      dayChange >= 0 ? '[s: +' + dayChangeFixed + '%]' : '[d: ' + dayChangeFixed + '%]'\n    }\\nWeekly Movement: ${\n      weekChange >= 0 ? '[s: +' + weekChangeFixed + '%]' : '[d: ' + weekChangeFixed + '%]'\n    }[timestamp: ${Math.floor(Date.now() / 1000)}]`;\n  }\n\n  // Only perform computation if user settings exist\n  if (userSettings !== null) {\n    /*\n    {\n      Handle the notification trigger cases here\n    }\n    */\n  } else {\n    //Send Notifications to old users\n    // Build Payload\n    await btcTickerUserModel.findOneAndUpdate(\n      { _id: subscriberObj.subscriber },\n      { lastCycle: CYCLES, lastBtcPrice: Number(formattedPrice) },\n      { upsert: true },\n    );\n\n    const payload = {\n      type: 3, // Type of Notification\n      notifTitle: title, // Title of Notification\n      notifMsg: message, // Message of Notification\n      title: payloadTitle, // Internal Title\n      msg: payloadMsg, // Internal Message\n      recipient: subscriberObj.subscriber, // Recipient\n    };\n    // Send notification\n    this.sendNotification({\n      recipient: payload.recipient, // new\n      title: payload.notifTitle,\n      message: payload.notifMsg,\n      payloadTitle: payload.title,\n      payloadMsg: payload.msg,\n      notificationType: payload.type,\n      simulate: simulate,\n      image: null,\n    });\n  }\n})\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Now, we need to trigger notifications as per the users' channel settings combination. i) User opted for both time interval and percentage change, ii) Only percentage change and iii) Only Time interval"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// if both Change percentage and Time interval is enabled\nif (userSettings[0]?.enabled == true && userSettings[1]?.enabled == true) {\n  const settingUserValue1 = userSettings[0].user; // Percent Change\n  const settingUserValue2 =\n    userSettings[1].user == 0 ? 3 : userSettings[1].user; // Time interval\n\n  // Case for if user opts-in, opts-out and again opts-in later in time interval\n  const presentInDb = (await btcTickerUserModel.findOne({\n    _id: subscriberObj.subscriber,\n  }))\n    ? true\n    : false;\n\n  if (presentInDb) {\n    const userDBValueCheck = await btcTickerUserModel.findOne({\n      _id: subscriberObj.subscriber,\n    });\n\n    if (\n      Number(userDBValueCheck.lastCycle + settingUserValue2) < Number(CYCLES)\n    ) {\n      // Set current cycle as lastCycle\n      await btcTickerUserModel.findOneAndUpdate(\n        { _id: subscriberObj.subscriber },\n        { lastCycle: CYCLES },\n        { upsert: true }\n      );\n    }\n  }\n\n  // --------------------------------------------------------------------------------\n\n  // Check if user changed their settings\n  const userDBValueBefore =\n    (await btcTickerUserModel.findOne({ _id: subscriberObj.subscriber })) ||\n    (await btcTickerUserModel.create({\n      _id: subscriberObj.subscriber,\n      lastCycle: CYCLES,\n      settingsValue: settingUserValue2,\n    }));\n\n  const userSettingsDBValue = userDBValueBefore.settingsValue\n    ? userDBValueBefore.settingsValue\n    : 0;\n  const userChangedValue = userSettingsDBValue != settingUserValue2; // true\n\n  if (userChangedValue) {\n    await btcTickerUserModel.findOneAndUpdate(\n      { _id: subscriberObj.subscriber },\n      { lastCycle: CYCLES, settingsValue: settingUserValue2 }\n    );\n  }\n\n  // ------------------------------------------------------------------------\n\n  const userDBValue = await btcTickerUserModel.findOne({\n    _id: subscriberObj.subscriber,\n  });\n\n  if (userDBValue.lastCycle + settingUserValue2 == CYCLES) {\n    if (changePercentage >= settingUserValue1) {\n      // UPDATE the users mapped value in DB\n      await btcTickerUserModel.findOneAndUpdate(\n        { _id: subscriberObj.subscriber },\n        { lastCycle: CYCLES, lastBtcPrice: Number(formattedPrice) },\n        { upsert: true }\n      );\n\n      // Sending Notification\n      try {\n        // Build Payload\n        const payload = {\n          type: 3, // Type of Notification\n          notifTitle: title, // Title of Notification\n          notifMsg: message, // Message of Notification\n          title: payloadTitle, // Internal Title\n          msg: payloadMsg, // Internal Message\n          recipient: subscriberObj.subscriber, // Recipient\n        };\n\n        // Send notification\n        this.sendNotification({\n          recipient: payload.recipient, // new\n          title: payload.notifTitle,\n          message: payload.notifMsg,\n          payloadTitle: payload.title,\n          payloadMsg: payload.msg,\n          notificationType: payload.type,\n          simulate: simulate,\n          image: null,\n        });\n      } catch (error) {\n        this.logError(`Error sending notification: ${error}`);\n      }\n    } else {\n      // UPDATE the users mapped value in DB\n      await btcTickerUserModel.findOneAndUpdate(\n        { _id: subscriberObj.subscriber },\n        { lastCycle: CYCLES, lastBtcPrice: Number(formattedPrice) },\n        { upsert: true }\n      );\n    }\n  }\n}\n// if only Change percentage is enabled\nelse if (userSettings[0]?.enabled === true) {\n  const settingUserValue1 = userSettings[0].user; // Percent Change\n\n  if (Math.abs(Number(globalChangePercentage)) >= settingUserValue1) {\n    // Sending Notification\n    try {\n      // Build Payload\n      const payload = {\n        type: 3, // Type of Notification\n        notifTitle: title, // Title of Notification\n        notifMsg: message, // Message of Notification\n        title: payloadTitle, // Internal Title\n        msg: globalPayloadMsg, // Internal Message\n        recipient: subscriberObj.subscriber, // Recipient\n      };\n\n      // Send notification\n      this.sendNotification({\n        recipient: payload.recipient, // new\n        title: payload.notifTitle,\n        message: payload.notifMsg,\n        payloadTitle: payload.title,\n        payloadMsg: payload.msg,\n        notificationType: payload.type,\n        simulate: simulate,\n        image: null,\n      });\n    } catch (error) {\n      this.logError(`Error sending notification: ${error}`);\n    }\n  }\n}\n// if only Time interval is enabled\nelse if (userSettings[1]?.enabled === true) {\n  const settingUserValue2 =\n    userSettings[1].user == 0 ? 3 : userSettings[1].user; // Time interval\n\n  // Case for if user opts-in, opts-out and again opts-in later in time interval\n  const presentInDb = (await btcTickerUserModel.findOne({\n    _id: subscriberObj.subscriber,\n  }))\n    ? true\n    : false;\n\n  if (presentInDb) {\n    const userDBValueCheck = await btcTickerUserModel.findOne({\n      _id: subscriberObj.subscriber,\n    });\n\n    if (\n      Number(userDBValueCheck.lastCycle + settingUserValue2) < Number(CYCLES)\n    ) {\n      // Set current cycle as lastCycle\n      await btcTickerUserModel.findOneAndUpdate(\n        { _id: subscriberObj.subscriber },\n        { lastCycle: CYCLES },\n        { upsert: true }\n      );\n    }\n  }\n\n  // --------------------------------------------------------------------------------\n\n  // Check if user changed their settings\n  const userDBValueBefore =\n    (await btcTickerUserModel.findOne({ _id: subscriberObj.subscriber })) ||\n    (await btcTickerUserModel.create({\n      _id: subscriberObj.subscriber,\n      lastCycle: CYCLES,\n      settingsValue: settingUserValue2,\n    }));\n\n  const userSettingsDBValue = userDBValueBefore.settingsValue\n    ? userDBValueBefore.settingsValue\n    : 0;\n  const userChangedValue = userSettingsDBValue != settingUserValue2;\n\n  if (userChangedValue) {\n    await btcTickerUserModel.findOneAndUpdate(\n      { _id: subscriberObj.subscriber },\n      { lastCycle: CYCLES, settingsValue: settingUserValue2 }\n    );\n  }\n\n  // ------------------------------------------------------------------------\n\n  const userDBValue = await btcTickerUserModel.findOne({\n    _id: subscriberObj.subscriber,\n  });\n\n  if (userDBValue.lastCycle + settingUserValue2 == CYCLES) {\n    // UPDATE the users mapped value in DB\n    await btcTickerUserModel.findOneAndUpdate(\n      { _id: subscriberObj.subscriber },\n      { lastCycle: CYCLES, lastBtcPrice: Number(formattedPrice) },\n      { upsert: true }\n    );\n\n    // Sending Notification\n    try {\n      // Build Payload\n      const payload = {\n        type: 3, // Type of Notification\n        notifTitle: title, // Title of Notification\n        notifMsg: message, // Message of Notification\n        title: payloadTitle, // Internal Title\n        msg: payloadMsg, // Internal Message\n        recipient: subscriberObj.subscriber, // Recipient\n      };\n\n      // Send notification\n      this.sendNotification({\n        recipient: payload.recipient, // new\n        title: payload.notifTitle,\n        message: payload.notifMsg,\n        payloadTitle: payload.title,\n        payloadMsg: payload.msg,\n        notificationType: payload.type,\n        simulate: simulate,\n        image: null,\n      });\n    } catch (error) {\n      this.logError(`Error sending notification: ${error}`);\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "🤯Those were a lots of code out there. Let's understand what is actually happening there and what conditions trigger the notifications in different cases."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Case 1: Both percent change and time interval is enabled"
      }), " - When a user opts in to both these settings, what the user want is to receive a notification for their selected tokens when there is a particular change in price and it occured within the time interval.\nSo, the basic logic here is:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "if (userDBValue.lastCycle + settingUserValue2 == CYCLES) {\n  if (changePercentage >= settingUserValue1) {\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We just fetched the prices from the CMC API and using the previous price stored in database as per user, we can calculate the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "changePercentage"
      }), " value.\nFor the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CYCLES"
      }), " variable, everytime our showrunners framework is executed it is incremented by 3 as the lowest ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ticker"
      }), " value in the slider is 3. You can change it as per your channel and logic. This helps us to calculate when a new user will receive a notification based on on which cycle did he opted in.\nAlso, there are 3 conditions that you need to lookout for:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "i) What happens when time is triggered but not percentage?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "ii) What happens if a user opts-in, opts-out and then again after several days opt-in?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "iii) What happens if someone changes their time-interval settings?"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We have already handled these edge cases in the code. Test yourself and see if you can find them😉."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Case 2: Only percent change is enabled"
      }), " - Here, a user want to receive notification when there is a particular change in price. So, the basic logic here is:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// Condition to trigger notification\nif (Number(changePercentage) >= userValue) {\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The calculation for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "changePercentage"
      }), " is same like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Case 1"
      }), ". The only difference here is we use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "globalChangePercentage"
      }), " instead of the users last price."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Case 3: Only time interval is enabled"
      }), " - Here, a user want to receive notification as per their chosen interval. So, the basic logic here is:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// Condition to trigger notification\nif (userDBValue.lastCycle + userValue == CYCLES) {\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The calculation and significance of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CYCLES"
      }), " variable is explained in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Case 1"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This wraps up the channel logic. Now, let's move onto buidling the cron-jobs file and model file."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-8-create-a-btctickermodelts-file-in-the-folder",
      children: ["Step 8: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "btcTickerModel.ts"
      }), " file in the folder."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { model, Schema } from 'mongoose';\n\nexport interface BtcTickerUserData {\n  _id?: string;\n  lastCycle?: number;\n  lastBtcPrice?: number;\n  settingsValue?: number;\n}\n\nconst btcTickerUserSchema = new Schema<BtcTickerUserData>({\n  _id: {\n    type: String,\n  },\n  lastCycle: {\n    type: Number,\n  },\n  lastBtcPrice: {\n    type: Number\n  },\n  settingsValue: {\n    type: Number,\n  }\n});\n\nexport const btcTickerUserModel = model<BtcTickerUserData>('btcTickerUserDB', btcTickerUserSchema);\n\nexport interface BtcTickerGlobal {\n  _id?: string;\n  prevBtcPrice?: number;\n  cycles?: number;\n}\n\nconst btcTickerGlobalSchema = new Schema<BtcTickerGlobal>({\n  _id: {\n    type: String,\n  },\n  prevBtcPrice: {\n    type: Number,\n  },\n  cycles: {\n    type: Number,\n  },\n});\n\nexport const btcTickerGlobalModel = model<BtcTickerGlobal>('btcTickerGlobalDB', btcTickerGlobalSchema);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is a good practice to write your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Interface"
      }), " then ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Schema"
      }), " and then create your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Model"
      }), ". Remember to keep different names of your database for each model."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-9-create-a-btctickerjobsts-file-in-the-folder",
      children: ["Step 9: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "btcTickerJobs.ts"
      }), " file in the folder."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "// Do Scheduling\n// https://github.com/node-schedule/node-schedule\n// *    *    *    *    *    *\n// ┬    ┬    ┬    ┬    ┬    ┬\n// │    │    │    │    │    │\n// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)\n// │    │    │    │    └───── month (1 - 12)\n// │    │    │    └────────── day of month (1 - 31)\n// │    │    └─────────────── hour (0 - 23)\n// │    └──────────────────── minute (0 - 59)\n// └───────────────────────── second (0 - 59, OPTIONAL)\n// Execute a cron job every 5 Minutes = */5 * * * *\n// Starts from seconds = * * * * * *\n\nimport logger from '../../loaders/logger';\n\nimport { Container } from 'typedi';\nimport schedule from 'node-schedule';\n\nimport BtcTickerChannel from './btcTickerChannel';\n\nexport default async () => {\n  const startTime = new Date(new Date().setHours(0, 0, 0, 0));\n\n  const threeHourRule = new schedule.RecurrenceRule();\n  threeHourRule.hour = new schedule.Range(0, 23, 3);\n  threeHourRule.minute = 0;\n  threeHourRule.second = 0;\n\n  const channel = Container.get(BtcTickerChannel);\n  channel.logInfo(`🛵 Scheduling Showrunner`);\n\n  schedule.scheduleJob(\n    { start: startTime, rule: threeHourRule },\n    async function () {\n      const taskName = 'BTC Ticker Fetch and sendMessageToContract()';\n      try {\n        await channel.sendMessageToContract(true);\n        logger.info(\n          `[${new Date(Date.now())}] 🐣 Cron Task Completed -- ${taskName}`\n        );\n      } catch (err) {\n        logger.error(\n          `[${new Date(Date.now())}] ❌ Cron Task Failed -- ${taskName}`\n        );\n        logger.error(`[${new Date(Date.now())}] Error Object: %o`, err);\n      }\n    }\n  );\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can change the scheduling frequency as per your use-case."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "wrapping-it-up-rocket",
      children: ["Wrapping it UP ", "🚀"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Congratulations🎊...you have just built a amazing channel that tracks and notifies you about BTC price without you worrying about missing on important price movements and always be in the game. Isn't it cool?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Channel settings just opened a whole new notification experience window for users just like you and me. Now, you have all the divine knowledge about the channel settings. So, put your thinking caps on and built some cool stuff with it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "See you until the next time. Keep Building🎊"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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