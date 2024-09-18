"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[89315],{

/***/ 564235:
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
	id: 'docs-notifications-showrunners-examples-service-based-trigger',
	title: 'Service based trigger',
	hide_title: true,
	slug: './service-based-trigger',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_notifications_showrunners_examples--service_based_trigger.png'
};
const contentTitle = 'Service based trigger via showrunner scaffold';
const metadata = {
  "id": "notifications/showrunners-scaffold/Examples/docs-notifications-showrunners-examples-service-based-trigger",
  "title": "Service based trigger",
  "description": "This is a step-by-step introductory tutorial that will teach you how to build a channel based on a specific service related notifications. Its a great way to get hang of service based channels!",
  "source": "@site/docs/notifications/04-showrunners-scaffold/03-Examples/03-Showrunner-Example-Service-Based-Trigger.mdx",
  "sourceDirName": "notifications/04-showrunners-scaffold/03-Examples",
  "slug": "/notifications/showrunners-scaffold/Examples/service-based-trigger",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/service-based-trigger",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/03-Showrunner-Example-Service-Based-Trigger.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "id": "docs-notifications-showrunners-examples-service-based-trigger",
    "title": "Service based trigger",
    "hide_title": true,
    "slug": "./service-based-trigger",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 3,
    "image": "/assets/docs/previews/docs_notifications_showrunners_examples--service_based_trigger.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "NFT based trigger",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/nft-based-trigger"
  },
  "next": {
    "title": "Offchain (Web2) based trigger",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/offchain-based-trigger"
  }
};
const assets = {

};



const toc = [{
  "value": "Setup channel folder",
  "id": "setup-channel-folder",
  "level": 3
}, {
  "value": "Use case",
  "id": "use-case",
  "level": 3
}, {
  "value": "Channel File",
  "id": "channel-file",
  "level": 4
}, {
  "value": "The Channel Class Creation (The Boilerplate)",
  "id": "the-channel-class-creation-the-boilerplate",
  "level": 4
}, {
  "value": "The Notification Trigger Function",
  "id": "the-notification-trigger-function",
  "level": 4
}, {
  "value": "The Notification Trigger Logic",
  "id": "the-notification-trigger-logic",
  "level": 4
}, {
  "value": "Jobs File",
  "id": "jobs-file",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "service-based-trigger-via-showrunner-scaffold",
      children: "Service based trigger via showrunner scaffold"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is a step-by-step introductory tutorial that will teach you how to build a channel based on a specific service related notifications. Its a great way to get hang of service based channels!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Greetings!!"
      }), " If you are new to Push protocol and don't have a proper idea of how to create an service-based channel for notifications on top of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/showrunners-scaffold/get-started",
        children: "showrunners"
      }), ". This guide is for you ;)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will walk through coding and interacting with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://ens.domains/",
        children: "ENS"
      }), " Domain service to create the notification if a user's domain is expiring. And don’t worry if you don’t understand what any these words mean yet, I'll explain everything!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can access the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework-staging/tree/main/src/sample_showrunners/ens",
        children: "code"
      }), " for the channel and get some vibe for how the code is looking !!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Service based trigger | Example | Showrunners Scaffold | Push Notifications
  | Push Documentation`
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "setup-channel-folder",
      children: "Setup channel folder"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For starting with showrunners and setting it up follow this guide here. // need to add link"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["First we need to create a folder in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/showrunners/<your_channel_name>"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "use-case",
      children: "Use case"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The notifications for the ENS channel are mainly focused on informing the user about the Domain Validity"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "channel-file",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/ens/ensChannel.ts",
        children: "Channel File"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The channel file is the brain for every channel notification logic. The file follows basic steps of input obtainment, some processed logic and conditions and when the condition for logic is satisfied the code generates the notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "the-channel-class-creation-the-boilerplate",
      children: "The Channel Class Creation (The Boilerplate)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Every development procedure initiates with creating a channel specific class with contains various information regarding the concerned channel, such as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The network to monitor for the Channel"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Name of the Channel"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The URL of channel owner"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Whether channel uses off chain notification or not"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { Inject, Service } from 'typedi';\nimport { Logger } from 'winston';\nimport config, { defaultSdkSettings } from '../../config';\nimport { EPNSChannel } from '../../helpers/epnschannel';\n\nexport default class EnsExpirationChannel extends EPNSChannel {\n  constructor(@Inject('logger') public logger: Logger) {\n    super(logger, {\n      sdkSettings: {\n        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,\n        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,\n        networkSettings: defaultSdkSettings.networkSettings,\n      },\n      networkToMonitor: NETWORK_TO_MONITOR,\n      dirname: __dirname,\n      name: 'ENS',\n      url: '<https://ens.domains/>',\n      useOffChain: true,\n    });\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "the-notification-trigger-function",
      children: "The Notification Trigger Function"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The notification trigger function is the function which calls all the trigger logic functions in a specific order to successfully trigger a notification that will be sent to the concerned user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "async checkDomainExpiryTask(simulate) {\n    this.logInfo(`checkDomainExpiryTask`);\n    const sdk = await this.getSdk();\n    const users = simulate?.logicOverride?.mode ? [simulate?.logicOverride?.user] : await sdk.getSubscribedUsers();\n\n    for (let user of users) {\n      user = user.toLowerCase();\n      const regs = await this.getUserRegistredDomains(user);\n\n      for (const reg of regs) {\n        await this.processRegistration(reg, simulate);\n      }\n    }\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The above functions first gets the number of the users from the registered domains data, then checks all the domains existing for that user, whether any domain has verified the condition for triggering a notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "the-notification-trigger-logic",
      children: "The Notification Trigger Logic"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The ENS channel follows a simple logic for sending a notification to the user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "First of all we get the data of domains for a specific user using GraphQL Queries."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Getting the User Registered Domain data"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        children: "async getUserRegistredDomains(user: string): Promise<Registration[]> {\n    this.logInfo(`get user registred domains for ${user}`);\n    const query = gql`{\n      registrations(where:{registrant:\"${user}\"}){\n        id\n       labelName\n        expiryDate\n        registrant{\n          id\n        }\n        domain {\n          id\n          name\n          owner {\n            id\n          }\n        }\n      }\n    }`;\n\n    let res = await request(ensSettings.ensEndpoint, query);\n    let registrations = res?.registrations;\n\n    return registrations;\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After getting the data the task shifts upon triggering a notification for a specific case."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Getting the information about the status of expiry"
      }), " "]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We at the starting of the code has assigned a threshold time span, reaching which a user should be informed about his/her expiring domain. The value of this variable is taken in seconds and the threshold for the ENS channel is 7 days."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const TRIGGER_THRESHOLD_SECS = 60 * 60 * 24 * 7; // Seconds for 7 Days\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We also calculate the remaining time for the expiration of the certain domain. Using the expiration date timestamp and the present timestamp and taking their difference."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const secDiff = reg.expiryDate - Math.floor(Date.now() / 1000);\nconst expiresInDays = Math.floor(secDiff / (60 * 60 * 24));\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We now compare both Threshold and the difference, to check if the expiry is beyond the threshold by any chance ."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "if (secDiff < TRIGGER_THRESHOLD_SECS && secDiff >= 0) {\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If the above condition is verified the process of triggering a notification is initiated. For this we use an inbuilt Push class function called “sendNotification”. This function to send the notification requires certain data from our side. The following data is what we generally provide in a notification:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Recipient Address"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Notification Title"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Notification Message"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Call to Action Link (The link which redirects the user to the channel holders domain for further actions)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const message = `Your ENS Domain ${reg.domain.name} is set to expire \n      ${expiresInDays > 0 ? `in ${expiresInDays} day(s)` : `today`}.`;\nconst title = 'ENS Domain Expiry Alert!!';\nconst cta = `https://app.ens.domains/name/${reg.domain.name}/details`;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cushioning Up for any exceptional condition"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Due to large amount of user base, many exceptional cases can sometimes surpass the main logic. We as the developer sometimes provide a cushion logic so that the notification is successfully sent to the correct user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this channel logic, there can be a case where the Owner of the domain can be different from the Registrant, so for this we put a IF condition to filter out, and then send the notification to the owner of the domain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "if (reg.registrant.id.toLowerCase() != reg.domain.owner.id.toLowerCase()) {\n  this.logInfo(`Owner and registrant different sending notif to owner`);\n  await this.sendNotification({\n    recipient: reg.domain.owner.id,\n    image: null,\n    message: message,\n    payloadMsg: payloadMsg,\n    title: title,\n    payloadTitle: title,\n    notificationType: 3,\n    simulate: simulate,\n    cta: cta,\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Setting up a Notification"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After getting all the data from our side the notification is good-to-go, and the sendNotification function is implemented."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "await this.sendNotification({\n  recipient: reg.registrant.id,\n  image: null,\n  message: message,\n  payloadMsg: payloadMsg,\n  title: title,\n  payloadTitle: title,\n  notificationType: 3,\n  simulate: simulate,\n  cta: cta,\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "jobs-file",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/ens/ensJobs.ts",
        children: "Jobs File"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This folder is responsible to run the Cron Jobs. Expanding on the “Cron Jobs”, this is a function which uses a module called Node-Schedule to run a code at a specific, repeating time interval. Though the main logic resides in the Channel file, the logic is constantly run by this file, so that as soon as the function satisfies the condition when its called, a notification is sent."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Creation of a Time Rule"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This involves creating a type of countdown values for a specific job to run.This is customised on the basis of the requirement of a certain use case. For example in this case we create a Daily Rule which makes the channel logic run once in every 24 Hours interval."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "const startTime = new Date(new Date().setHours(0, 0, 0, 0));\n\nconst dailyRule = new schedule.RecurrenceRule();\ndailyRule.hour = 0;\ndailyRule.minute = 0;\ndailyRule.second = 0;\ndailyRule.dayOfWeek = new schedule.Range(0, 6);\nconst channel = Container.get(EnsExpirationChannel);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Calling the Channel Function for a Job"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once the schedule job is set to run. The below stated function calls the Task Function from the Channel file to run and send the notification if need be."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "schedule.scheduleJob({ start: startTime, rule: dailyRule }, async function () {\n  const taskName = `${channel.cSettings.name} checkDomainExpiryTask`;\n\n  try {\n    await channel.checkDomainExpiryTask(false);\n    channel.logInfo(`🐣 Cron Task Completed -- ${taskName}`);\n  } catch (err) {\n    logger.error(\n      `[${new Date(Date.now())}] ❌ Cron Task Failed -- ${taskName}`\n    );\n    logger.error(`[${new Date(Date.now())}] Error Object: %o`, err);\n  }\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The local ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework/blob/main/src/sample_showrunners/ens/ensSettings.json",
        children: "settings"
      }), " file also play an influential in the code flow for reference you can have a look into that too."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can now heat up the server by running ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "docker-compose up"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npm run dev"
      }), " and start sending notification. "]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That's all for now :)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you enjoyed this tutorial, Do join our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushprotocol",
        children: "discord server"
      }), " to meet other dev and builders."]
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