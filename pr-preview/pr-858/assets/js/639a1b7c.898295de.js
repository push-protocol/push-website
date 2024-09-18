"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[27571],{

/***/ 326123:
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
	id: 'price-tracker-with-showrunners-example',
	title: 'Price Tracker Channel',
	hide_title: true,
	slug: './price-tracker-with-showrunners-example',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 10,
	image: '/assets/docs/previews/price_tracker_with_showrunners_example--price_tracker_channel.png'
};
const contentTitle = 'Price Tracker in Showrunners';
const metadata = {
  "id": "notifications/showrunners-scaffold/Examples/price-tracker-with-showrunners-example",
  "title": "Price Tracker Channel",
  "description": "This example is intended to get you understand channel Settings with a real-world application. For the example we are going to look at a scenario where users can choose a their preferred tokens, a time interval and a price percentage change and showrunners framework will notify them as per their request. Checkout Showrunners Docs, Showrunners Framework, Channel Settings Docs and Channel Settings Demo for better understanding!",
  "source": "@site/docs/notifications/04-showrunners-scaffold/03-Examples/10-Showrunner-Example-Price-Tracker.mdx",
  "sourceDirName": "notifications/04-showrunners-scaffold/03-Examples",
  "slug": "/notifications/showrunners-scaffold/Examples/price-tracker-with-showrunners-example",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/price-tracker-with-showrunners-example",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/10-Showrunner-Example-Price-Tracker.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 10,
  "frontMatter": {
    "id": "price-tracker-with-showrunners-example",
    "title": "Price Tracker Channel",
    "hide_title": true,
    "slug": "./price-tracker-with-showrunners-example",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 10,
    "image": "/assets/docs/previews/price_tracker_with_showrunners_example--price_tracker_channel.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Notification Settings in BTC Tracker",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/btc-tracker-with-showrunners-example"
  },
  "next": {
    "title": "Aave Channel with Channel Settings",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/aave-with-showrunners-example"
  }
};
const assets = {

};





const toc = [{
  "value": "What we gonna build?",
  "id": "what-we-gonna-build",
  "level": 2
}, {
  "value": "Creating Price Tracker in Showrunners",
  "id": "creating-price-tracker-in-showrunners",
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
  "value": "Step 4: Create a <code>priceTrackerKeys.json</code> file in the channel folder",
  "id": "step-4-create-a-pricetrackerkeysjson-file-in-the-channel-folder",
  "level": 3
}, {
  "value": "Step 5: Create a <code>priceTrackerSettings.json</code> file in the channel folder",
  "id": "step-5-create-a-pricetrackersettingsjson-file-in-the-channel-folder",
  "level": 3
}, {
  "value": "Step 6: Create a <code>priceTrackerChannel.ts</code> file in the channel folder",
  "id": "step-6-create-a-pricetrackerchannelts-file-in-the-channel-folder",
  "level": 3
}, {
  "value": "Step 7: Getting started with the channel logic",
  "id": "step-7-getting-started-with-the-channel-logic",
  "level": 3
}, {
  "value": "Step 8: Create a <code>priceTrackerModel.ts</code> file in the folder.",
  "id": "step-8-create-a-pricetrackermodelts-file-in-the-folder",
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
      id: "price-tracker-in-showrunners",
      children: "Price Tracker in Showrunners"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This example is intended to get you understand channel Settings with a real-world application. For the example we are going to look at a scenario where users can choose a their preferred tokens, a time interval and a price percentage change and showrunners framework will notify them as per their request. Checkout ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
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
        children: `Price Tracker with Showrunners tutorial | Example | Showrunners Scaffold |
  Push Notifications | Push Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-we-gonna-build",
      children: "What we gonna build?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Imagine you are a crypto trader or a general crypto enthusiast. You want to be notified every once in a while about the price movements and activities in the market. But you either lose track of time or forget about it. To solve this exact problem, we will be looking into a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/tree/main/src/sample_showrunners/priceTracker/",
        title: "Price tracker github repo",
        children: "Price Tracker"
      }), " and Channel Settings implementation where you as a user can specify conditions on which you would like to get notified."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "creating-price-tracker-in-showrunners",
      children: "Creating Price Tracker in Showrunners"
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
      id: "step-4-create-a-pricetrackerkeysjson-file-in-the-channel-folder",
      children: ["Step 4: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "priceTrackerKeys.json"
      }), " file in the channel folder"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Use the boilerplate for the keys file.\n."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "{\n  \"PRIVATE_KEY_NEW_STANDARD\": {\n    \"PK\": \"0x{PRIVATE_KEY_HERE}\",\n    \"CHAIN_ID\": \"eip155:11155111\"\n  },\n  \"PRIVATE_KEY_OLD_STANDARD\": \"0x{PRIVATE_KEY_HERE}\"\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-5-create-a-pricetrackersettingsjson-file-in-the-channel-folder",
      children: ["Step 5: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "priceTrackerSettings.json"
      }), " file in the channel folder"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Use the below code for the settings file."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "{\n    \"cmcEndpoint\": \"https://pro-api.coinmarketcap.com/\",\n    \"providerUrl\":\"https://ethereum-sepolia.publicnode.com\",\n    \"route\":\"v2/cryptocurrency/quotes/latest\",\n    \"cmcKey\":\"CMC_AP_KEY_HERE\",\n    \"id\":\"1,1027,...,3890,9111\", // IDs as per CMC API\n    \"tokenNames\":[\"BTC\",\"ETH\",...,\"MATIC\",\"PUSH\"] // Token names as per CMC API\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-6-create-a-pricetrackerchannelts-file-in-the-channel-folder",
      children: ["Step 6: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "priceTrackerChannel.ts"
      }), " file in the channel folder"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "preiceTrackerChannel.ts"
      }), " will be the file which will contain all the logic for the fetching the data and constructing the payload."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There is some boilerplate code involved in creating a channel. The channel.ts file will contain the following boilerplate:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { Inject, Service } from 'typedi';\nimport { Logger } from 'winston';\nimport config, { defaultSdkSettings } from '../../config';\nimport { EPNSChannel } from '../../helpers/epnschannel';\n\nconst NETWORK_TO_MONITOR = config.web3SepoliaTestnetNetwork;\n\n// Author : Shubham Patel(aeyshuhb)\n\n@Service()\nexport default class PricetrackerChannel extends EPNSChannel {\n  constructor(@Inject('logger') public logger: Logger, @Inject('cached') public cached) {\n    super(logger, {\n      sdkSettings: {\n        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,\n        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,\n        networkSettings: defaultSdkSettings.networkSettings,\n      },\n      networkToMonitor: NETWORK_TO_MONITOR,\n      dirname: __dirname,\n      name: 'Price Tracker',\n      url: 'https://app.push.org/',\n      useOffChain: true,\n    });\n  }\n}\n"
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
          children: "PricetrackerChannel"
        }), " which extends the Push Channel class."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "super() the"
        }), " constructor we pass in certain arguments required for the channel like the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
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
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Create a function ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "triggerUserNotification"
        }), " which will be called every 3 hours by the Cron job we are setting in Jobs file."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "  public async triggerUserNotification(simulate) {\n    const logger = this.logger;\n\n    try {\n      this.logInfo(`🔔🔔Sending notifications`);\n\n      // Get New price function call\n      await this.getNewPrice(simulate);\n    } catch (error) {\n      logger.error(`[${new Date(Date.now())}]-[Price Tracker]- Errored on CMC API... skipped with error: %o`, err);\n    }\n  }```\n\n- Call getNewPrice and fetch current prices of tokens using the CoinMarketCap API and store it in array.\n- Initialize `userAlice` for the channel using your private key and signer.\n\n```js\npublic async getNewPrice(simulate) {\n    try {\n      const logger = this.logger;\n      logger.debug(`[${new Date(Date.now())}]-[Pricetracker]-Getting price of tokens... `);\n\n      // API URL components and settings\n      const cmcroute = settings.route;\n      const cmcEndpoint = settings.cmcEndpoint;\n      const pollURL = `${cmcEndpoint}${cmcroute}?id=${settings.id}&aux=cmc_rank&CMC_PRO_API_KEY=${\n        settings.cmcKey || config.cmcAPIKey\n      }`;\n\n      // Fetching data from the CMC API\n      let { data } = await axios.get(pollURL);\n      data = data.data;\n\n      // Initalize provider, signer and userAlice for Channel interaction\n      const provider = new ethers.providers.JsonRpcProvider(config.web3TestnetSepoliaProvider || settings.providerUrl);\n      const signer = new ethers.Wallet(keys.PRIVATE_KEY_NEW_STANDARD.PK, provider);\n      const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });\n\n      // Global variables\n      let i = 1;\n      let tokenInfo = [];\n\n      // Structuring token data info\n      for (let id in data) {\n        let tokenPrice = data[id].quote.USD?.price;\n        let tokenSymbol = data[id].symbol;\n        let formattedPrice = Number(Number(tokenPrice).toFixed(2));\n        tokenInfo.push({ symbol: tokenSymbol, price: formattedPrice });\n      }\n    }catch(e){console.log(\"Error occured\"+e)}\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "first,we are creating a variable to store Cycles value in db so that we can track user's time interval settings and\nto decide on which cron job to send notification."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["up next, we will fetch the current subscribers of the channel using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "subscribers()"
        }), ",this method will return us an array\nof 10 elemnts in which each element will have a address and user's channel settings for that address which will denote\nwhat are the fields a user is interested in/opted in."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "further we are incrementing the user's cycle value by 3 for every cron job they have executed/taken part in,this will helpe\nus to track when to send notification to user and in which cycle."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: " // Global variables from DB\n      const priceTrackerGlobalData =\n        (await priceTrackerGlobalModel.findOne({ _id: 'global' })) ||\n        (await priceTrackerGlobalModel.create({\n          _id: 'global',\n          cycles: 0,\n        }));\n\n      // Set CYCLES variable in DB\n      const CYCLES = priceTrackerGlobalData.cycles;\n\n      // Looping for subscribers' data in the channel\n      while (true) {\n        const userData: any = await userAlice.channel.subscribers({\n          page: i,\n          limit: 10,\n          setting: true,\n        });\n\n        if (userData.itemcount != 0) {\n          i++;\n        } else {\n          i = 1;\n\n          // UPDATE CYCLES VALUE\n          // HERE\n          await priceTrackerGlobalModel.findOneAndUpdate({ _id: 'global' }, { $inc: { cycles: 3 } }, { upsert: true });\n          const priceTickerGlobalData = await priceTrackerGlobalModel.findOne({ _id: 'global' });\n\n        //  this.logInfo(`Cycles value after all computation: ${priceTickerGlobalData?.cycles}`);\n\n          break;\n        }\n      }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Loop across each subscriber to fetch their ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "userSettings"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "await Promise.all(\n    userData?.subscribers?.map(async (subscriberObj: { settings: string; subscriber: any }) => {\n        // Converting String to JS object\n        let userSettings = JSON.parse(subscriberObj?.settings);\n\n        // For merging different token details in payload\n        const notifData2 = [];\n\n        // Only perform computation if user settings exist\n        try {\n            if (userSettings !== null) {\n                this.logInfo(`Subs ${subscriberObj.subscriber}`);\n                // Looping through userSettings to handle each userSetting\n                await Promise.all(\n                    userSettings?.map(async (mapObj, index) => {\n                        // Your code logic goes here\n                    })\n                );\n            }\n        } catch (error) {\n            // Handle error here\n        }\n    })\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Loop through every ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "userSetting"
        }), " (Tokens) user selected."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "if (mapObj.user == true) {\n  // Get current price of the token\n  const currentToken = tokenInfo.find(\n    (obj) => obj.symbol === mapObj.description\n  );\n  const currentPrice = currentToken?.price;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Calculate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "changePercentage"
        }), " using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "prevPrice"
        }), " stored in database and update it."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// Get current price of the token\nconst currentToken = tokenInfo.find((obj) => obj.symbol === mapObj.description);\nconst currentPrice = currentToken.price;\n\n// Get previous token price\nconst previousPriceData = (await priceTrackerTokenModel.findOne({\n  _id: mapObj.description,\n}))\n  ? await priceTrackerTokenModel.findOne({ _id: mapObj.description })\n  : 0;\n\n// Update the new price\nawait priceTrackerTokenModel.findOneAndUpdate(\n  { _id: mapObj.description },\n  { tokenPrevPrice: currentPrice },\n  { upsert: true }\n);\n\n// Calculate Change\nconst changePercentage = (\n  (Math.abs(Number(currentPrice) - previousPriceData.tokenPrevPrice) /\n    previousPriceData.tokenPrevPrice) *\n  100\n).toFixed(2);\n\n/* Conditions go here */\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This code block is responsible for handling price tracking notifications based on user settings."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Craft the 4 major conditions :", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["i. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "User opted for both time interval and percentage change"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "It checks if the price alert and time interval slider are enabled for a subscriber."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If both are enabled, it fetches the user values for settings and the user's last cycle values from the database."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "It then compares the change percentage with the user-defined price value and checks if the last cycle value matches the current cycle."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If the conditions are met, it updates the user's mapped value in the database and builds a payload for the notification."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The payload includes the percentage change, description, and current price."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ii. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Only percentage change"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If only the price alert slider is enabled, it fetches the user value for the price setting and compares it with the change percentage."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["iii. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Only Time interval"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If only the time interval slider is enabled, it fetches the user value for the time setting and the user's last cycle values from the database."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "It then checks if the sum of the last cycle value and the user value matches the current cycle."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If the condition is met, it updates the user's mapped value in the database and builds a payload for the notification."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["iv. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Receive general notifications"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If none of the sliders are enabled, it builds a payload for the notification without any conditions."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// The 4 conditions here\n// index - 9 ---> Time Interval\n// index - 10 ---> Price Change\n\nif (userSettings[9]?.enabled == true && userSettings[10]?.enabled == true) {\n  this.logInfo(\n    `Price Alert & Time Interval Slider case: ${subscriberObj.subscriber}`\n  );\n\n  // Fetch user values for settings\n  let userValueTime = userSettings[9].user == 0 ? 3 : userSettings[9].user;\n  let userValuePrice = userSettings[10].user;\n\n  // Fetch user last cycle values\n  const userDBValue =\n    (await priceTrackerModel.findOne({ _id: subscriberObj.subscriber })) ||\n    (await priceTrackerModel.create({\n      _id: subscriberObj.subscriber,\n      lastCycle: priceTrackerGlobalData.cycles,\n    }));\n\n  this.logInfo(\n    `Mapped value of ${userDBValue._id} is ${userDBValue.lastCycle} from both price and time`\n  );\n  this.logInfo(\n    `User value of ${userDBValue._id} is ${userValueTime} from both price and time`\n  );\n\n  // Condition to trigger notification\n  if (\n    Math.abs(Number(changePercentage)) >= userValuePrice &&\n    userDBValue.lastCycle + userValueTime == CYCLES\n  ) {\n    // UPDATE the users mapped value in DB\n    await priceTrackerModel.findOneAndUpdate(\n      { _id: subscriberObj.subscriber },\n      { lastCycle: CYCLES },\n      { upsert: true }\n    );\n    // Build the payload of the notification\n    const payloadMsg =\n      Number(changePercentage) > 0\n        ? `Percentage Change(${mapObj.description}): [s: +${Math.abs(Number(changePercentage))}% ($${currentPrice})]\\n`\n        : `Percentage Change(${mapObj.description}): [d: -${Math.abs(Number(changePercentage))}% ($${currentPrice})]\\n`;\n    this.logInfo(`Address: ${subscriberObj.subscriber} Data: ${payloadMsg}`);\n\n    notifData2.push({\n      key: `${Math.abs(Number(changePercentage))}`,\n      notif: `${payloadMsg}`,\n    });\n  }\n} else if (userSettings[10]?.enabled == true) {\n  this.logInfo(`Price Alert Slider only case: ${subscriberObj.subscriber}`);\n\n  // Fetch user values for settings\n  let userValue = userSettings[10].user;\n\n  // Condition to trigger notification\n  if (Math.abs(Number(changePercentage)) >= userValue) {\n    // Build the payload of the notification\n    const payloadMsg =\n      Number(changePercentage) > 0\n        ? `Percentage Change(${mapObj.description}): [s: +${Math.abs(Number(changePercentage))}% ($${currentPrice})]\\n`\n        : `Percentage Change(${mapObj.description}): [d: -${Math.abs(Number(changePercentage))}% ($${currentPrice})]\\n`;\n\n    notifData2.push({\n      key: `${Math.abs(Number(changePercentage))}`,\n      notif: `${payloadMsg}`,\n    });\n  }\n} else if (userSettings[9]?.enabled == true) {\n  this.logInfo(`Time Interval Slider only case: ${subscriberObj.subscriber}`);\n\n  // Fetch user values for settings\n  let userValue = userSettings[9].user == 0 ? 3 : userSettings[9].user;\n\n  const userDBValue =\n    (await priceTrackerModel.findOne({ _id: subscriberObj.subscriber })) ||\n    (await priceTrackerModel.create({\n      _id: subscriberObj.subscriber,\n      lastCycle: priceTrackerGlobalData.cycles,\n    }));\n\n  if (userDBValue.lastCycle + userValue == CYCLES) {\n    // UPDATE the users mapped value in DB\n    await priceTrackerModel.findOneAndUpdate(\n      { _id: subscriberObj.subscriber },\n      { lastCycle: CYCLES },\n      { upsert: true }\n    );\n\n    // Build the payload of the notification\n    const payloadMsg = `${mapObj.description} at[d:$${currentPrice}]\\n`;\n\n    notifData2.push({ key: `${currentPrice}`, notif: `${payloadMsg}` });\n  }\n} else {\n  // Build the payload of the notification\n  const payloadMsg = `${mapObj.description} at[d:$${currentPrice}]\\n`;\n\n  notifData2.push({ key: `${currentPrice}`, notif: `${payloadMsg}` });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "🤯Those were a lots of code out there. Let's understand what is actually happening there and what coditions trigger the notifications in different cases."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Case 1: Both percent change and time interval is enabled"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "When a user opts in to both these settings, what the user want is to receive a notification for their selected tokens when there is a particular change in price and it occured within the time interval.\nSo, the basic logic here is:"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// Condition to trigger notification\nif (\n  Number(changePercentage) >= userValuePrice &&\n  userDBValue.lastCycle + userValueTime == CYCLES\n) {\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Also, there are 3 conditions that you need to lookout for:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\ni. What happens when time is triggered but not percentage?", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nii. What happens if a user opts-in, opts-out and then again after several days opt-in?", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\niii. What happens if someone changes their time-interval settings?", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We have already handled these edge cases in the code. Test yourself and see if you can find them😉.\nWe just fetched the prices from the CMC API and using the previous price stored in database, we can calculate the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "changePercentage"
      }), " value.\nFor the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "CYCLES"
      }), " variable, everytime our showrunners framework is executed it is incremented by 3 as the lowest ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ticker"
      }), " value in the slider is 3. You can change it as per your channel and logic. This helps us to calculate when a new user will receive a notification based on on ehich cycle did he opted in."]
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
      }), "."]
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Case 4: Regular Notifications"
      }), " - Here, a user want to receive notification containing the price of their chosen token at regular intervals. So, we simple resolve this in a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "else"
      }), " condition."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "step-8-create-a-pricetrackermodelts-file-in-the-folder",
      children: ["Step 8: Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "priceTrackerModel.ts"
      }), " file in the folder."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "import { model, Schema } from 'mongoose';\n\nexport interface PriceTrackerData {\n  _id?: string;\n  lastCycle?: number;\n  settingsValue?: number;\n}\n\n\nconst priceTrackerSchema = new Schema<PriceTrackerData>({\n  _id: {\n    type: String,\n  },\n  lastCycle: {\n    type: Number,\n  },\n  settingsValue: {\n    type: Number,\n  }\n});\n\nexport const priceTrackerModel = model<PriceTrackerData>('priceTrackerUserDB', priceTrackerSchema);\n\nexport interface PriceTrackerGlobal {\n  _id?: string;\n  cycles?: number;\n}\n\nconst priceTrackerGlobalSchema = new Schema<PriceTrackerGlobal>({\n  _id: {\n    type: String,\n  },\n  cycles: {\n    type: Number,\n  },\n});\n\nexport const priceTrackerGlobalModel = model<PriceTrackerGlobal>('priceTrackerGlobalDB', priceTrackerGlobalSchema);\n\nexport interface PriceTrackerToken {\n  _id?: String;\n  symbol?: String;\n  tokenPrevPrice?: Number;\n}\n\nconst PriceTrackerTokenSchema = new Schema<PriceTrackerToken>({\n  _id: String,\n  symbol: String,\n  tokenPrevPrice: Number,\n});\n\nexport const priceTrackerTokenModel = model<PriceTrackerToken>('priceTokenTracker', PriceTrackerTokenSchema);\n\nexport interface UserTokenInfo {\n  _id?: String;\n  userTokenPrevPrice?: Number;\n}\n\nconst UserTokenInfoSchema = new Schema<UserTokenInfo>({\n  _id: String,\n  userTokenPrevPrice: Number,\n});\n\nexport const userTokenModel = model<UserTokenInfo>('userTokenInfo', UserTokenInfoSchema);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is a good practise to write your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Interface"
      }), " then ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Schema"
      }), " and then create your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Model"
      }), ". Remember to keep different names of your database for each model."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "wrapping-it-up-rocket",
      children: ["Wrapping it UP ", "🚀"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Congratulations🎊...you have just built a amazing channel that let users subscribe and receive notifications of their favorite tokens. Now, they are not gonna miss a single update, isnt't it?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is a very basic yet real-life use-case of channel settings paired up with the showrunners framework. The ways in which you can customize this to create basically any kind of notification is unlimited."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["One can even go ahead and include an image in the notification using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "image"
      }), " parameter in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sendNotification"
      }), " function."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That's all for this time. We'll see you in the next one and until then keep building amazing stuff👋"
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