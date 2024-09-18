"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[63512],{

/***/ 347776:
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
	id: 'docs-notifications-showrunners-examples-offchain-based-trigger',
	title: 'Offchain (Web2) based trigger',
	hide_title: true,
	slug: './offchain-based-trigger',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 4,
	image: '/assets/docs/previews/docs_notifications_showrunners_examples_offchain_based_trigger--offchain_(web2)_based_trigger.png'
};
const contentTitle = 'Offchain (Web2) based trigger via showrunner scaffold';
const metadata = {
  "id": "notifications/showrunners-scaffold/Examples/docs-notifications-showrunners-examples-offchain-based-trigger",
  "title": "Offchain (Web2) based trigger",
  "description": "This is a step-by-step introductory tutorial that will teach you how to build a channel based on Off-chain News Broadcasting. Its a great way to get hang of news-based channels!",
  "source": "@site/docs/notifications/04-showrunners-scaffold/03-Examples/04-Showrunner-Example-Offchain-Web2-Based-Trigger.mdx",
  "sourceDirName": "notifications/04-showrunners-scaffold/03-Examples",
  "slug": "/notifications/showrunners-scaffold/Examples/offchain-based-trigger",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/offchain-based-trigger",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/04-Showrunner-Example-Offchain-Web2-Based-Trigger.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 4,
  "frontMatter": {
    "id": "docs-notifications-showrunners-examples-offchain-based-trigger",
    "title": "Offchain (Web2) based trigger",
    "hide_title": true,
    "slug": "./offchain-based-trigger",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 4,
    "image": "/assets/docs/previews/docs_notifications_showrunners_examples_offchain_based_trigger--offchain_(web2)_based_trigger.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Service based trigger",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/service-based-trigger"
  },
  "next": {
    "title": "DeFi based trigger",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/defi-based-trigger"
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
  "value": "Jobs File",
  "id": "jobs-file",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
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
      id: "offchain-web2-based-trigger-via-showrunner-scaffold",
      children: "Offchain (Web2) based trigger via showrunner scaffold"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is a step-by-step introductory tutorial that will teach you how to build a channel based on Off-chain News Broadcasting. Its a great way to get hang of news-based channels!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Greetings!"
      }), " If you are new to Push protocol and don't have a proper idea of how to create an news-based channel for notifications on top of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs/notifications/showrunners-scaffold/get-started",
        children: "showrunners"
      }), ". This guide is for you ;)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We will walk through coding and interacting with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://thedefiant.io/",
        children: "The Defiant"
      }), " for fetching the articles."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "And don’t worry if you don’t understand what any these words mean yet, I'll explain everything!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `Offchain (Web2) based trigger | Example | Showrunners Scaffold | Push
  Notifications | Push Documentation`
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The notifications for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "The Defiant"
        })
      }), " channel are mainly focused on informing the user about the latest article posted on their domain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Data Provided"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the news article type of channels we most try to get the RSS-FEED URL. They are easy to operate on due to a Module called \"xml2js\" which converts the XML code to Java script making it usable to our codebase."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In the case of Defiant, they have provided the feed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://thedefiant.io/feed/",
        children: "URL"
      }), " "]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "channel-file",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "#channel-file",
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
        children: "import { Inject, Service } from 'typedi';\nimport { Logger } from 'winston';\nimport config, { defaultSdkSettings } from '../../config';\nimport { EPNSChannel } from '../../helpers/epnschannel';\n\nexport default class DefiantChannel extends EPNSChannel {\n  constructor(@Inject('logger') public logger: Logger, @Inject('cached') public cached) {\n    super(logger, {\n      sdkSettings: {\n        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,\n        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,\n        networkSettings: defaultSdkSettings.networkSettings,\n      },\n      networkToMonitor: config.web3MainnetNetwork,\n      dirname: __dirname,\n      name: 'The Defiant',\n      url: 'https://thedefiant.io/',\n      useOffChain: true,\n    });\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you observe the variable \"useOffChain\" is assigned as True, this enables the Off chain notification for the channel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "The channel logic function"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The main channel logic function follows to sequence of function calling and conditions.They are chronologically listed and explained below:-"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: " 1.) Calling the fetch article function"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2.) Getting the locally stored date for comparison"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "3.) Condition to check presence of a new article"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "4.) Calling the send Notification function"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "async checkForNewArticles(simulate) {\n    try {\n      // Get the articles from the RSS Feed\n      const articles = await this.getArticles(simulate);\n\n      // Get the comparer pub date stored in db to compare for finding new articles\n      const compDate = await this.getComparerDate();\n      let latestDate = compDate;\n      const upto = simulate?.logicOverride?.mode ? articles.length - 2 : 0;\n\n      for (let i = articles.length - 1; i >= upto; i--) {\n        const article = articles[i];\n        const publicationTimestamp = Date.parse(article.pubDate[0]) / 1000;\n        this.logInfo(\n          `publicationTimestamp : ${publicationTimestamp} compDate : ${compDate} publicationTimestamp > compDate : ${publicationTimestamp >\n            compDate}`,\n        );\n        if (publicationTimestamp > compDate || simulate?.logicOverride?.mode) {\n          this.logInfo(`publicationTimestamp > compDate. New Article Found!!`);\n\n          if (publicationTimestamp > latestDate) {\n            this.logInfo(`publicationTimestamp > latestDate updating latestDate`);\n            latestDate = publicationTimestamp;\n          }\n\n          const info = {\n            title: article.title[0],\n            link: article.link[0],\n            description: article.description,\n            publicationTimestamp: publicationTimestamp,\n          };\n\n          this.log(info);\n\n          this.logInfo('Found new article sending notification');\n          await this.sendNewArticleNotification(info, simulate);\n        }\n      }\n\n      return { success: true };\n    } catch (error) {\n      this.logError(error);\n    }\n  }\n\n  public async getArticles(simulate): Promise<any> {\n    this.logInfo('getArticles called.. Checking For New Articles');\n\n    const url = defiantSettings.FEED_URL;\n\n    this.logInfo('Fetching Articles');\n    let res = await axios.get(url);\n    xml2js.parseStringPromise = util.promisify(xml2js.parseString);\n    let result = await xml2js.parseStringPromise(res.data);\n    this.logInfo('Articles obtained');\n\n    return result.rss.channel[0].item;\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Fetching the Articles"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This function imports and reads the RSS Feed and tries to convert the code to JavaScript. These articles are then fetched and worked upon."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "  public async getArticles(simulate): Promise<any> {\n    this.logInfo('getArticles called.. Checking For New Articles');\n\n    const url = defiantSettings.FEED_URL;\n    // const parser = new xml2js.Parser();\n\n    this.logInfo('Fetching Articles');\n    let res = await axios.get(url);\n    xml2js.parseStringPromise = util.promisify(xml2js.parseString);\n    let result = await xml2js.parseStringPromise(res.data);\n    this.logInfo('Articles obtained');\n\n    return result.rss.channel[0].item;\n  }\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Triggering the notification"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The function takes the data such as heading, preview message and CTA Link.Then sendNotification from our sdk is used.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "Note: The notification are both Off Chain and Broadcast Type"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        children: "async sendNewArticleNotification(info, simulate) {\n    try {\n      const title = `${info.title}`;\n      const payloadTitle = `${info.title}`;\n      const message = `${info.description}`;\n      const payloadMsg = `${info.description}`;\n      const notificationType = 1;\n\n      await this.sendNotification({\n        recipient: this.channelAddress,\n        title: title,\n        message: message,\n        payloadMsg: payloadMsg,\n        payloadTitle: payloadTitle,\n        notificationType: notificationType,\n        simulate: simulate,\n        image: null,\n        cta: info.link,\n        timestamp: info.publicationTimestamp,\n      });\n    } catch (e) {\n      this.logError(e);\n    }\n  }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Fetching the Dates for comparison"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We first fetch the timestamp from the local database and then create a variable called the comparer date which is basically a timestamp for the latest notification which was sent.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "This timestamp is then used to compare the RSS Feed timestamp and then generate a notification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "jobs-file",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "#jobs-file",
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
      children: ["You can now heat up the server by running ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "docker-compose up"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npm run dev"
      }), " and start sending notification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
        children: ["In the channel file you can also track the last publication date for which last notification was sent by using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "database"
        }), " , so that next time the jobs hit the engine, it won't repeat sending notification from same block again i.e. repeated notifications"]
      })
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