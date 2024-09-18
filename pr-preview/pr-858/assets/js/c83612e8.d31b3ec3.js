"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[84075],{

/***/ 964904:
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
	id: 'docs-slider-settings-with-eth-tracker-showrunners-example',
	title: 'Notification Settings in ETH Tracker',
	hide_title: true,
	slug: './eth-tracker-with-showrunners-example',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 8,
	image: '/assets/docs/previews/docs_slider_settings_with_eth_tracker_showrunners_example--notification_settings_in_eth_tracker.png'
};
const contentTitle = 'Slider Notification Settings in Showrunners';
const metadata = {
  "id": "notifications/showrunners-scaffold/Examples/docs-slider-settings-with-eth-tracker-showrunners-example",
  "title": "Notification Settings in ETH Tracker",
  "description": "This example is intended to get you understand slider based notification settings with a real-world application. For the example we are going to look at a scenario where users can choose a time interval and showrunners framework will notify them as per their request. Checkout Showrunners Docs, Showrunners Framework, Channel Settings Docs and Channel Settings Demo for better understanding!",
  "source": "@site/docs/notifications/04-showrunners-scaffold/03-Examples/08-Showrunner-Example-Eth-Tracker-Time-Interval.mdx",
  "sourceDirName": "notifications/04-showrunners-scaffold/03-Examples",
  "slug": "/notifications/showrunners-scaffold/Examples/eth-tracker-with-showrunners-example",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/eth-tracker-with-showrunners-example",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/08-Showrunner-Example-Eth-Tracker-Time-Interval.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 8,
  "frontMatter": {
    "id": "docs-slider-settings-with-eth-tracker-showrunners-example",
    "title": "Notification Settings in ETH Tracker",
    "hide_title": true,
    "slug": "./eth-tracker-with-showrunners-example",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 8,
    "image": "/assets/docs/previews/docs_slider_settings_with_eth_tracker_showrunners_example--notification_settings_in_eth_tracker.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Showrunners X Notification Settings",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/notification-settings-with-showrunners-example"
  },
  "next": {
    "title": "Notification Settings in BTC Tracker",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/btc-tracker-with-showrunners-example"
  }
};
const assets = {

};





const toc = [{
  "value": "What we gonna build?",
  "id": "what-we-gonna-build",
  "level": 2
}, {
  "value": "Creating Eth Tracker in Showrunners",
  "id": "creating-eth-tracker-in-showrunners",
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
  "value": "Channel File",
  "id": "channel-file",
  "level": 4
}, {
  "value": "Fetch subscribers data",
  "id": "fetch-subscribers-data",
  "level": 3
}, {
  "value": "Basic logic implementation",
  "id": "basic-logic-implementation",
  "level": 3
}, {
  "value": "Build the notification payload",
  "id": "build-the-notification-payload",
  "level": 3
}, {
  "value": "Setup Notification trigger",
  "id": "setup-notification-trigger",
  "level": 3
}, {
  "value": "How does it actually work?",
  "id": "how-does-it-actually-work",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "slider-notification-settings-in-showrunners",
      children: "Slider Notification Settings in Showrunners"
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
      children: "Imagine you are a crypto trader or a general crypto enthusiast. You want to be notified every once in a while about the price movements and activities in the market. But you either lose track of time or forget about it. To solve this exact problem, we will be looking into a slider type notification settings implementation where you as a user can specify the time interval after which you would like to get notified."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will choose the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-channels/tree/wallet-tracker/Staging_channels/ethTicker",
        title: "Push Channel Eth Tracker",
        children: "Eth Tracker"
      }), " channel to demonstrate this example."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "creating-eth-tracker-in-showrunners",
      children: "Creating Eth Tracker in Showrunners"
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "channel-file",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/bank/bankChannel.ts",
        title: "Eth Tracker Channel Github",
        children: "Channel File"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In order to send notification, we need to have the instance of the user channel. To get that, we need to add the below function in our 'Channel class'\n."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const provider = new ethers.providers.JsonRpcProvider(settings.providerUrl);\nconst signer = new ethers.Wallet(keys.PRIVATE_KEY_NEW_STANDARD.PK, provider);\nconst userAlice = await PushAPI.initialize(signer, {\n  env: CONSTANTS.ENV.STAGING,\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here, you can use any provider of your choice and fetch the signer using the private key of the wallet that was used to create the channel. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "userAlice"
      }), " is an instance of the channel using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PushAPI"
      }), " from the sdk. This will allow us to fetch data of subscribers and their notification settings to build our logic around."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let's get to building it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "fetch-subscribers-data",
      children: "Fetch subscribers data"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To fetch a list of all users who have opted into receiving notifications along with their opted value from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "userAlice"
      }), ", you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "subscribers"
      }), " method. You can read about this method in detail ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/build/manage-channel/#get-channel-subscribers-api",
        title: "Channel Settings Docs",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "\nconst userData: any = await userAlice.channel.subscribers({\n   page: i,\n   limit: 10,\n   setting: true,\n });\n\n// Output :\n{\n \"itemcount\": 5,\n \"subscribers\": [\n   {\n     \"subscriber\": \"0x279c00e16c638a752ea42ae5e09db3c3992f70ad\",\n     \"settings\": \"[{\\\"type\\\": 2, \\\"user\\\": 8, \\\"index\\\": 1, \\\"ticker\\\": 1, \\\"default\\\": 1, \\\"enabled\\\": true, \\\"lowerLimit\\\": 1, \\\"upperLimit\\\": 10, \\\"description\\\": \\\"Price Range\\\"}]\"\n   },\n   {\n     \"subscriber\": \"0x49403ae592c82fc3f861cd0b9738f7524fb1f38c\",\n     \"settings\": \"[{\\\"type\\\": 2, \\\"user\\\": 1, \\\"index\\\": 1, \\\"ticker\\\": 1, \\\"default\\\": 1, \\\"enabled\\\": true, \\\"lowerLimit\\\": 1, \\\"upperLimit\\\": 10, \\\"description\\\": \\\"Price Range\\\"}]\"\n   },\n   {\n     \"subscriber\": \"0x71ffa5771e8019787190d098586efe02026a3c8c\",\n     \"settings\": \"[{\\\"type\\\": 2, \\\"user\\\": 2, \\\"index\\\": 1, \\\"ticker\\\": 1, \\\"default\\\": 1, \\\"enabled\\\": true, \\\"lowerLimit\\\": 1, \\\"upperLimit\\\": 10, \\\"description\\\": \\\"Price Range\\\"}]\"\n   },\n   {\n     \"subscriber\": \"0x7a45f2e84055b0c79696c9533c97a4b21dee30d3\",\n     \"settings\": \"[{\\\"type\\\": 2, \\\"user\\\": 2, \\\"index\\\": 1, \\\"ticker\\\": 1, \\\"default\\\": 1, \\\"enabled\\\": true, \\\"lowerLimit\\\": 1, \\\"upperLimit\\\": 10, \\\"description\\\": \\\"Price Range\\\"}]\"\n   },\n   {\n     \"subscriber\": \"0xc1836ce1eb918cfc8e9acab71ce9c6e1ebe0dff0\",\n     \"settings\": \"[{\\\"type\\\": 2, \\\"user\\\": 7, \\\"index\\\": 1, \\\"ticker\\\": 1, \\\"default\\\": 1, \\\"enabled\\\": true, \\\"lowerLimit\\\": 1, \\\"upperLimit\\\": 10, \\\"description\\\": \\\"Price Range\\\"}]\"\n   }\n ]\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The main parameters that we need for our use-case is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "type"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "user"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "index"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "enabled"
      }), ". Let's go one by one in brief."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "type"
        }), " - Type here tells us if a notification type is boolean or slider type. There are: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "1 ---> boolean"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "2 ---> slider"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "user"
        }), " - This parameter tells us the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "value a specific user"
        }), " chose in their settings. A value in case of a slider and true/false in case of boolean."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "index"
        }), " - This tells us the index of the notification settings as per their creation by the channel owner. The first channel settings gets the index value 1, the next gets 2 and so on."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "enabled"
        }), " - As the name suggests, it tells us if an user have ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "opted in for a settings or not"
        }), ". It's values can be true or false."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "basic-logic-implementation",
      children: "Basic logic implementation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "let i = 1;\n\nwhile (true) {\n  const userData: any = await userAlice.channel.subscribers({\n    page: i,\n    limit: 10,\n    setting: true,\n  });\n\n  if (userData.itemcount != 0) {\n    i++;\n  } else {\n    console.log(\"Breakkkk.\")\n    i=1;\n    break;\n  }\n\n  // Loop through the `settings` array for the required type (say 2 here) --> Time interval\n  userData.subscribers.map(async (subscriberObj) => {\n    const userSettings = JSON.parse(subscriberObj.settin\n    const mappedValue = await ethTickerModel.findOne({ subscriber: subscriberObj.subscriber });\n\n    if (userSettings !== null) {\n      const temp = userSettings.find((obj) => obj.index == 2); // for time interval\n      let userValue: number;\n\n      //IF user has enabled notification then enter\n      if (temp.enabled === true) {\n        userValue = temp.userValue;\n\n        if (mappedValue.lastCycle + userValue == CYCLES) {\n          recipients.push(subscriberObj.subscriber);\n\n        // UPDATE the users mapped value in DB\n        await ethTickerModel.findOneAndUpdate(\n          { subscriber: subscriberObj.subscriber },\n          { lastCycle: mappedValue.lastCycle + userValue},\n          { upsert: true },\n        );\n      }\n    }\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let's go step-by-step here."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "We run a loop through all the subscribers of a channel. Remember to handle pagination as the subscribers' list is paginated."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Here, we can consider a global variable ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CYCLES"
        }), " that we store in our database that is responsible to track the iterations of the cron-job we setup for 1 hour."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We check if a new subscriber is added to the channel at the start of every cron-job, if yes then we add ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "subscriber address"
        }), " mapped to the current ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CYCLES"
        }), " value in MongoDB."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For sending notification, if the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "mappedValue + userValue == CYCLES"
        }), ", we send a notification."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We then update the value in DB, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "mappedValue += userValue"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["After the entire logic is done, we update the CYCLES variable, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CYCLES++"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is the basic logic behind the notification trigger."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "build-the-notification-payload",
      children: "Build the notification payload"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Design your own payload with custom values in the when you want to trigger notifications. To learn more about notification settings, refer to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/docs/notifications/build/create-channel-settings/",
        children: "docs"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const payload = {\n  notification: {\n    title: 'Title',\n    body: 'Notif Body',\n  },\n  payload: {\n    title: 'Title',\n    body: 'Payload body',\n    cta: 'https://google.com/',\n    embed: 'https://avatars.githubusercontent.com/u/64157541?s=200&v=4',\n    // index of the notification the channel wants to trigger, in this for 1nd index which is for Boolean type\n    category: 1, // Depending upon your use-case\n  },\n};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "setup-notification-trigger",
      children: "Setup Notification trigger"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "public async sendMessageToNode(simulate) {\n  const logger = this.logger;\n  this.getNewPrice()\n    .then(async (payload: any) => {\n      for (let i = 0; i < payload.recipients.length; i++) {\n        this.sendNotification({\n          recipient: payload.recipients[i], // new\n          title: payload.notifTitle,\n          message: payload.notifMsg,\n          payloadTitle: payload.title,\n          payloadMsg: payload.msg,\n          notificationType: payload.type,\n          simulate: simulate,\n          image: null,\n        });\n      }\n    })\n    .catch(err => {\n      logger.error(`[${new Date(Date.now())}]-[ETH Ticker]- Errored on CMC API... skipped with error: %o`, err);\n    });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-does-it-actually-work",
      children: "How does it actually work?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Summarizing what we implemented in the example, we use a concept of a global clock (say CYCLES) using a variable that is stored in our database and it gets updated after every iteration of the cron-job that runs for every 1 hour. We check if any new users have subscribed to the channel after the last iteration and store a mapping of the user address and the current CYCLES value. This mapping will allow us to calculate the correct dispatch time of notification as per user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Well, that's it. You now have a clear understanding of how notification slider settings work and you can use it to build amazing use-cases. We'll see you in another one. Until then keep building🔥"
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