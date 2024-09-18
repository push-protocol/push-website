"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[45482],{

/***/ 938607:
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
	id: 'aave-settings-with-showrunners-example',
	title: 'Aave Channel with Channel Settings',
	hide_title: true,
	slug: './aave-with-showrunners-example',
	displayed_sidebar: 'pushNotificationSidebar',
	sidebar_position: 11,
	image: '/assets/docs/previews/aave_settings_with_showrunners_example--aave_channel_with_channel_settings.png'
};
const contentTitle = 'Channel Settings using Showrunners';
const metadata = {
  "id": "notifications/showrunners-scaffold/Examples/aave-settings-with-showrunners-example",
  "title": "Aave Channel with Channel Settings",
  "description": "{AAVE with Showrunners tutorial | Push Notification | Push Documentation}",
  "source": "@site/docs/notifications/04-showrunners-scaffold/03-Examples/11-Showrunner-Example-Aave.mdx",
  "sourceDirName": "notifications/04-showrunners-scaffold/03-Examples",
  "slug": "/notifications/showrunners-scaffold/Examples/aave-with-showrunners-example",
  "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/aave-with-showrunners-example",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/notifications/04-showrunners-scaffold/03-Examples/11-Showrunner-Example-Aave.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 11,
  "frontMatter": {
    "id": "aave-settings-with-showrunners-example",
    "title": "Aave Channel with Channel Settings",
    "hide_title": true,
    "slug": "./aave-with-showrunners-example",
    "displayed_sidebar": "pushNotificationSidebar",
    "sidebar_position": 11,
    "image": "/assets/docs/previews/aave_settings_with_showrunners_example--aave_channel_with_channel_settings.png"
  },
  "sidebar": "pushNotificationSidebar",
  "previous": {
    "title": "Price Tracker Channel",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/showrunners-scaffold/Examples/price-tracker-with-showrunners-example"
  },
  "next": {
    "title": "Tutorials",
    "permalink": "/push-website/pr-preview/pr-858/docs/notifications/tutorials"
  }
};
const assets = {

};





const toc = [{
  "value": "Inside Aave&#39;s Channel Settings.",
  "id": "inside-aaves-channel-settings",
  "level": 2
}, {
  "value": "Pre-requisites",
  "id": "pre-requisites",
  "level": 3
}, {
  "value": "Perform following steps to get started with Channel Settings.",
  "id": "perform-following-steps-to-get-started-with-channel-settings",
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
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `AAVE with Showrunners tutorial | Push Notification | Push Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "channel-settings-using-showrunners",
      children: "Channel Settings using Showrunners"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "inside-aaves-channel-settings",
      children: "Inside Aave's Channel Settings."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The Aave Channel supports both versions of Aave i.e Aave v2 and v3."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Need of the channel : To alert the user of his health factor before Liquidation of his assets starts."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "You can select a range of Health Factor and if your health factor falls in that range then a notification about your health factor will be sent."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Eg : Only send me notification if my health factor is in range of 1.2 to 1.5.\n-Every 3 hours , Aave channel will check for your health factor on both versions and then send/not send notification."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "pre-requisites",
      children: "Pre-requisites"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "In this tutorial, we will only understand the logic part of Aave i.e how Notifications are being triggered in Aave."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For step-by-step tutorial of Channel Settings,please refer ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://push.org/docs/notifications/showrunners-scaffold/Examples/eth-tracker-with-showrunners-example/",
          title: "BTC Tracker tutorial",
          children: "BTC Tracker Tutorial"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Subscribe to this channel Address ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xAA940b3501176af328423d975C350d0d1BaAae50/",
          title: "Aave channel on Push",
          children: "Aave Channel"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "perform-following-steps-to-get-started-with-channel-settings",
      children: "Perform following steps to get started with Channel Settings."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Step 1 : Create a Position on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.aave.com/",
        title: "Link to Aave",
        children: "Aave V3/V2 Mainnet"
      }), " by Supplying and borrowing against some asset.\nStep 2: You should be able to see some health Factor like 1.5 or 1.8.\nStep 3:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Create a function called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "getUserSetings()"
        }), " which will have main logic part."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["This function will do following things :", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "Fetch Notification setting set by the user."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["If Channel Settings exist and is enabled by the user then get the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "lower"
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "upper"
            }), " range values set by the user and pass the values to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "checkHealthFactor"
            }), " function with susbcriber's address."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["If Channel Settings exists but are turned off i.e disabled by the user then pass dummy values of lower and upper values to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "checkHealthFactor"
            }), " function.\n(Fun Fact : If you have just supplied assets on Aave and have not borrowed against it then you would have a crazy Health Factor > 3 due to which no notifications will be sent.)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "while (true) {\n  const userData: any = await userAlice.channel.subscribers({\n    page: i,\n    limit: 30,\n    setting: true,\n  });\n  if (userData.itemcount != 0) {\n    i++;\n    userData.subscribers.map((subscriberObj) => {\n      const userSettings = JSON.parse(subscriberObj.settings);\n      if (userSettings !== null) {\n        status = false;\n        // this.logInfo(\"User Info\" + JSON.stringify(userSettings[0]));\n        userSettings.map(async (settings) => {\n          if (settings.index == 1 && settings.enabled == true) {\n            // Aave user settings Enabled.\n            let temp = userSettings[0];\n            let lowerLimit = JSON.stringify(temp.user.lower);\n            let upperLimit = JSON.stringify(temp.user.upper);\n            this.checkHealthFactor(subscriberObj.subscriber, Number(lowerLimit), Number(upperLimit), simulate);\n          }\n          else if (settings.index == 1 && settings.enabled == false) {\n            //If User settings Exist but is disabled by the user => send normal notification.\n            this.checkHealthFactor(subscriberObj.subscriber, 0, 3, simulate)\n          }\n          // Supply APY code goes here -->\n          //Borrow APY code goes here -->\n        });\n      }\n    })}else{\n      i=1;\n      break;\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "If Channel Settings dosen't exist then we would just send a normal notification if there Health Factor is in range of 0 to 3."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Here if you are wondering why i have set the range as 0 to 3 then the reason is that if you don't borrow against your asset then your asset is completely safe and you need not to worry about anything but if you have borrowed against youe assets then you need to worry about liquidation og your assets."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Generally if you borrow then your health decreases and comes in range of 1 to 3 and if your health factor reaches 1 then your assets can get liquidated."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "In this step we will fetch the Channel Settings of our channel's subscribers."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 4:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "In this step we check the health factor of Channel subscribers and then trigger notification on the basis of their upper and lower values set by the user."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "  public async checkHealthFactor(userAddress, lowerLimit, upperLimit, simulate) {\n    try {\n      const logicOverride =\n        typeof simulate == 'object'\n          ? simulate.hasOwnProperty('logicOverride') && simulate.logicOverride.mode\n            ? simulate.logicOverride.mode\n            : false\n          : false;\n      const simulateApplyToAddr =\n        logicOverride && simulate.logicOverride.hasOwnProperty('applyToAddr')\n          ? simulate.logicOverride.applyToAddr\n          : false;\n      const simulateAaveNetwork =\n        logicOverride && simulate.logicOverride.hasOwnProperty('aaveNetwork')\n          ? simulate.logicOverride.aaveNetwork\n          : false;\n\n      if (!userAddress) {\n        if (simulateApplyToAddr) {\n          userAddress = simulateApplyToAddr;\n        } else {\n          // this.logDebug('userAddress is not defined');\n        }\n      }\n    } catch (err) {\n      this.logError('An error occured while checking health factor');\n      this.logError(err);\n    }\n    try{\n    let aaveV2 = await this.getContract(\n      aaveSettings.aaveLendingPoolDeployedContractMainnet,\n      JSON.stringify(aaveLendingPoolDeployedContractABI),\n    );\n    let aaveV3 = await this.getContract(\n      aaveSettings.aaveV3PoolContractMainnet,\n      JSON.stringify(aaveLendingPoolDeployedContractABI),\n    );\n    // console.log(\"User Address\"+userAddress);\n    //simulate object settings END\n    const aaveV2UserData = await aaveV2?.contract.getUserAccountData(userAddress);\n    const aaveV3UserData = await aaveV3?.contract.getUserAccountData(userAddress);\n    let healthFactorV2 = ethers.utils.formatEther(aaveV2UserData.healthFactor);\n    let healthFactorV3 = ethers.utils.formatEther(aaveV3UserData.healthFactor);\n    // console.log(`HF of ${userAddress} is ${healthFactorV3}`)\n    // this.logInfo('For wallet: %s, Health Factor: %o', userAddress, healthFactor);\n    if (Number(healthFactorV2).toFixed(2) >= lowerLimit && Number(healthFactorV2).toFixed(2) <= upperLimit) {\n      //  this.logInfo(\"Aave v2 Notification sending to \" + userAddress);\n      const precision = CUSTOMIZABLE_SETTINGS.precision;\n      const newHealthFactor = parseFloat(healthFactorV2).toFixed(precision);\n      const title = 'Aave V2 Liquidation Alert!';\n      const message =\n        userAddress +\n        ' your account has healthFactor ' +\n        newHealthFactor +\n        '. Maintain it above 1 to avoid liquidation.';\n      const payloadTitle = 'Aave V2 Liquidity Alert!';\n      const payloadMsg = `Your account on Aave V2 has healthFactor [d:${newHealthFactor}] . Maintain it above 1 to avoid liquidation.`;\n      const notificationType = 3;\n      const tx = await this.sendNotification({\n        recipient: userAddress,\n        title: title,\n        message: message,\n        payloadTitle: payloadTitle,\n        payloadMsg: payloadMsg,\n        notificationType: notificationType,\n        cta: 'https://app.aave.com/#/dashboard',\n        image: null,\n        simulate: simulate,\n      });\n    }\n    if (Number(healthFactorV3).toFixed(2) >= lowerLimit && Number(healthFactorV3).toFixed(2) <= upperLimit) {\n      this.logInfo(\"Aave v3 Notification sending to \" + userAddress);\n      const precision = CUSTOMIZABLE_SETTINGS.precision;\n      const newHealthFactor = parseFloat(healthFactorV3).toFixed(precision);\n      const title = 'Aave V3 Liquidation Alert!';\n      const message =\n        userAddress +\n        ' your account has healthFactor ' +\n        newHealthFactor +\n        '. Maintain it above 1 to avoid liquidation.';\n      const payloadTitle = 'Aave V3 Liquidity Alert!';\n      const payloadMsg = `Your account on Aave V3 has healthFactor [d:${newHealthFactor}] . Maintain it above 1 to avoid liquidation.`;\n      const notificationType = 3;\n      const tx = await this.sendNotification({\n        recipient: userAddress,\n        title: title,\n        message: message,\n        payloadTitle: payloadTitle,\n        payloadMsg: payloadMsg,\n        notificationType: notificationType,\n        cta: 'https://app.aave.com/#/dashboard',\n        image: null,\n        simulate: simulate,\n      });\n    } else {\n      //  this.logInfo(`Wallet: ${userAddress} is SAFE with Health Factor:: ${healthFactor}`);\n    }\n    return true;\n  }catch(e){\n    this.logInfo(\"Error occured in Aave Liquidity Alert\")\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 5 : Our second goal is to give notification about APYs for assets that can be borrowed or supplied to on aave."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "So first we will start by getting all the addresses of assets available on Aave."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["In the below code,we are quering the addresses of the assets using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "getAllReservesTokens"
          }), " method, it returns a array in which each element is a array itself with two values i.e [assetName,assetAdderss]."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Up next,we have a for loop in which we are quering the data of APR about each asset using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "getReserveData"
          }), " method.\n(APR : It is the rate of interest you get on your asset on yearly basis.\nAPY : It is the compounded rate of interest you get on your assets on yearly basis. )"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "let status:boolean = false;\nstatus = await this.getData();\n\npublic async getData(){\n  let aaveV3 = await this.getContract(\n    aaveSettings.aaveV3PoolDataProvider,\n    JSON.stringify(aavePoolDataProviderAbi),\n  );\n  //Re-settings Arrays\n  this.tokens.length = 0;\n  this.supplyApy.length = 0;\n  this.borrowApy.length = 0;\n  let aaveV3Tokens = await aaveV3?.contract.getAllReservesTokens();\n  let RAY = 10 ** 27 // 10 to the power 27\n  let SECONDS_PER_YEAR = 31536000\n\n  for(let i=0;i<aaveV3Tokens.length;i++){\n\n    let aaveV2APR = await aaveV3?.contract.getReserveData(aaveV3Tokens[i][1]);\n    let depositAPR = (aaveV2APR[5] / RAY)\n    let variableBorrowAPR = (aaveV2APR[6] / RAY)\n\n    let depositAPY = (((1 + (depositAPR / SECONDS_PER_YEAR)) ** SECONDS_PER_YEAR) - 1) * 100\n    let variableBorrowAPY = (((1 + (variableBorrowAPR / SECONDS_PER_YEAR)) ** SECONDS_PER_YEAR) - 1) * 100\n    this.tokens.push(aaveV3Tokens[i][0]);\n    this.supplyApy.push((depositAPY).toFixed(2));\n    this.borrowApy.push(variableBorrowAPY.toFixed(2));\n\n    //  console.log(aaveV3Tokens[i][0] + \"[\" + depositAPY.toFixed(2) + \",\" + variableBorrowAPY.toFixed(2) + \"]\");\n\n  }\n\n  return true;\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Aave uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RAY"
          }), " for storing it's numbers and for more precision,as eth uses wei to store decimal and normal values with 18 digits precision,RAY has 27 digit precision due to which we will first convert it into normal format and then perform operations on it."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Next,we are finding the APYs of each assets and pushing it into different arrays which we will use in later stages(Tokens,supplyApy,borrowApy)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 6 : Filtering APYs on the basis of channel settings and send notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Let's go back in Step 1 where we were querying Channel Settings and add our logic for getting the Channel setting for Supply APY selected by the user."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The Channel setting for Supply Apy will be a number like 1.5 or 2 ."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "further We will compare APY of an asset with the number opted by the user and if the APY is greater than the user's number then we will add that asset with it's APY in the payload for notification."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "if (settings.index == 2 && settings.enabled == true) {\n  let k = 0;\n  let loopCounter = 0;\n  let title = 'Aave v3 supply APYs are here!';\n  let message = 'Here is a List of Assets that you can supply to on Aave v3';\n  let payloadTitle = 'Aave V3 Supply APY Alert!';\n  let payloadMsg = ``;\n  let notificationType = 3;\n  this.supplyApy.map(async (apy) => {\n    //  console.log(apy);\n    if (Number(apy) >= Number(JSON.stringify(settings.user))) {\n      if (loopCounter % 2 == 0 && loopCounter != 1) {\n        let sentence = `${this.tokens[k]}'s APY :[d:${apy}]%\\t\\t`;\n        payloadMsg += sentence;\n      } else {\n        let sentence = `${this.tokens[k]}'s APY :[d:${apy}]%\\n`;\n        payloadMsg += sentence;\n      }\n      loopCounter++;\n    }\n    k++;\n  });\n  // console.log(\"Payload \" + payloadMsg)\n  const tx = await this.sendNotification({\n    recipient: subscriberObj.subscriber,\n    title: title,\n    message: message,\n    payloadTitle: payloadTitle,\n    payloadMsg: payloadMsg,\n    notificationType: notificationType,\n    cta: 'https://app.aave.com/#/dashboard',\n    image: null,\n    simulate: simulate,\n  });\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "We are using a similar logic for Borrow APY too which can be decoded easily."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["I hope you enjoyed this tutotial,reach out to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://discord.gg/pushprotocol/",
            title: "Push Discord Link",
            children: "Push Discord"
          }), " if you stuck somehwere or have any doubts."]
        }), "\n"]
      }), "\n"]
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