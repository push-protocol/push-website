"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[55123],{

/***/ 368712:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'how-decentralized-notifications-can-revolutionize-on-chain',
	title: 'How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)',
	description: 'How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'In the previous article, we explored the various problems faced by On-Chain Governance and the issues that arise due to a lack of standardized communication medium by Web3 protocols to communicate with their stakeholders with the help of YAM as an example',
	tags: [
		'Blockchain',
		'Decentralization',
		'Push Notification',
		'Governance',
		'Blog'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-website/pr-preview/pr-858/blog/how-decentralized-notifications-can-revolutionize-on-chain",
  "source": "@site/blog/2020-09-28-how-decentralized-notifications-can-revolutionize-on-chain/index.md",
  "title": "How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)",
  "description": "How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)",
  "date": "2020-09-28T00:00:00.000Z",
  "formattedDate": "September 28, 2020",
  "tags": [
    {
      "label": "Blockchain",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blockchain"
    },
    {
      "label": "Decentralization",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/decentralization"
    },
    {
      "label": "Push Notification",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/push-notification"
    },
    {
      "label": "Governance",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/governance"
    },
    {
      "label": "Blog",
      "permalink": "/push-website/pr-preview/pr-858/blog/tags/blog"
    }
  ],
  "readingTime": 5.63,
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
    "slug": "how-decentralized-notifications-can-revolutionize-on-chain",
    "title": "How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)",
    "description": "How Decentralized Notifications can Revolutionize On-Chain Governance (Part II)",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "In the previous article, we explored the various problems faced by On-Chain Governance and the issues that arise due to a lack of standardized communication medium by Web3 protocols to communicate with their stakeholders with the help of YAM as an example",
    "tags": [
      "Blockchain",
      "Decentralization",
      "Push Notification",
      "Governance",
      "Blog"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Blockchain Game Mode ON — Engage Users using EPNS",
    "permalink": "/push-website/pr-preview/pr-858/blog/blockchain-game-mode-on"
  },
  "nextItem": {
    "title": "EPNS awarded AAVE grant !!",
    "permalink": "/push-website/pr-preview/pr-858/blog/epns-awarded-aave-grant"
  }
};
const assets = {
"image": (__webpack_require__(963378)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "TL;DR Key Points:",
  "id": "tldr-key-points",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of How Decentralized Notifications can Revolutionize On-Chain Governance",
        src: (__webpack_require__(967387)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Game Theory & Focal Points in Governance"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "This article is Part 2 of a 2-part series on how EPNS as a service can improve the efficiency of on-chain governance, and hence eventually add to the overall value of the network. You can check out Part 1"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/how-decentralised-notifications-can-revolutionize-on-chain-governance-part-i-ff09e7465279",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "here"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/how-decentralised-notifications-can-revolutionize-on-chain-governance-part-i-ff09e7465279",
        children: "previous article"
      }), ", we explored the various problems faced by On-Chain Governance and the issues that arise due to a lack of standardized communication medium by Web3 protocols to communicate with their stakeholders with the help of YAM as an example. Low-voter turnout and voter apathy could be tracked to the poor user experience as well as lack of subject matter expertise when it comes to the majority of stakeholders which ultimately leads to the undistributed voter turnout in On-Chain Governance. We saw ultimately saw how ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://epns.io",
        children: "EPNS"
      }), " as a platform could help reduce voter apathy and eventually increase voter turnout."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "What we will be discussing here today in Part 2 of this series will be a different aspect of on-chain governance to streamline efficient decision making and efficient protocol upgrades. One which could very likely make sure that everyone in the network is on the same page."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is where ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Game Theory & Governance"
      }), " join hands and provide us with a way to analyze user sentiments and predict human reasoning in order to facilitate a decision better on-chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "tldr-key-points",
      children: "TL;DR Key Points:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "In Blockchain, upgrading the system or various protocols and policies is often a coordination game."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2)A governance system in Blockchain can help facilitate the coordination of the community on an equilibrium that everyone can accept. It acts as a focal point (Signal). It doesn’t enforce a decision on the system, instead, it guides the stakeholders of the system to a coordinated choice."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        start: "3",
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Right now, the overwhelming majority of the governance of decentralized systems such as measuring community sentiment and user intentions is mostly done on Web 2.0 platforms such as Reddit, Twitter, Github and forums — centralized platforms that are susceptible to various forms of opaque attack and bias."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["4)", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "EPNS"
        }), " can act as a focal point for governance decisions as services are able to broadcast messages and signals to the public."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "game-theory-and-focal-points-in-governance",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Game Theory and Focal Points in Governance"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Game theory is the study of rational behaviour in situations involving interdependence. The goal of game theory for cryptocurrency and Blockchain systems is to build networks that need no oversight by modelling and predicting human reasoning and yet have positive outcomes for the greater good. In Blockchain, upgrading the system or various protocols and policies is often a coordination game. Coordination games are strategic games with multiple ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/@robin.rrt123/blockchain-governance-game-theory-2bd28e6513e3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Nash equilibria"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The 3 possibilities for a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "blockchain policy upgrade"
      }), " are:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "1. The entire chain stays with the current status quo"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "2. The entire chain can upgrade to the new policy"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "3. There can be a hard fork, wherein a considerable amount of stakeholders want to change to the new policy whereas the rest desire to continue with the status quo, and hence both the old and new chains co-exist simultaneously. (Coordination Failure)"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Blockchain communities can prevent coordination failures by introducing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "focal points"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "focal point"
      }), " is a public signal that all participants in the blockchain system can understand. It indicates to everyone which Nash equilibrium they should choose. A focal point can be anything — a sign, a signal, anything that increases the chance that all players coordinate on the same equilibrium."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With the help of a common and unified communication medium for the entire user base where the chain or protocol developers are able to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "directly communicate"
      }), " with users who have a right to vote in governance-related matters by virtue of holding the tokens to that network. The developers are able to provide timely updates for the dedicated user base as well as provide focal points to the community and guide them to make an informed decision."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "governance system in Blockchain"
      }), " can help facilitate the coordination of the community on an equilibrium that everyone can accept."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For example, a majority rule governance system could help the community coordinate to one chain. If a 55% vote is in favour of the change, it would indicate to everyone or a majority of the users will move to or will be using the upgraded chain, therefore the individuals could be better off using the upgraded chain and the vice versa is also true for rejecting the upgradation proposal and staying in the status quo (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Network Effects"
        })
      }), ")."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this, a governance system acts as a focal point. It doesn’t enforce a decision on the system, instead, it guides the stakeholders of the system to a coordinated choice. As per the above example, the chain developers could probably send a broadcast message to wallet addresses that hold the tokens to a protocol which gives a call to action to take a poll and then broadcast the results back to the users to allow them to have a general idea on how the final vote will turn out to be as well as show the pros and cons to a proposal."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This concept of focal points can be achieved with the help of “Signals”. Signals are indicators used by users or stakeholders of that blockchain network to indicate their preference regarding a particular governance-related decision, which is, in-turn, non-binding and also one which doesn’t cost the stakeholder as well."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "An example of this type of signalling could be that of Carbon Votes on the Ethereum Platform. “Carbon Vote was initiated during the DAO hard fork and conducted vote in a secure web-page fashion with the feature that the voting conducted did not require coins to leave voters’ wallets. It had been a great source of reference when the community decided to go with the fork.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Carbon Vote acted as a signalling device, where stakeholders of the Ethereum protocol could send a 0 ETH transaction to either a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "YES"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NO"
      }), " address, during a specific voting period, after which the tally is calculated by looking at the stake of each voter who voted their preference."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With the help of Carbon Vote as a focal point, stakeholders of Ethereum were able to make decisions on whether to fork or not, after the DAO incident."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "epns-a-focal-point-for-the-future",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "EPNS: A Focal Point for the future?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["EPNS aims to be a platform-agnostic decentralized notification system. It provides a uniform and standardized way for Web3 services to communicate seamlessly with their users. As Phil Lucsok from Polkadot says in his ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/polkadot-network/why-on-chain-governance-82ecf28f314c",
        children: "article"
      }), ", that right now, the overwhelming majority of the governance of decentralized systems such as measuring community sentiment and user intentions is mostly done on Web 2.0 platforms such as Reddit, Twitter, Github and forums — centralized platforms that are susceptible to various forms of opaque attack and bias. In simple words, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Web 3.0 shouldn’t be governed using Web 2.0 platforms."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS can act as a focal point for governance decisions as protocols are able to broadcast messages and signals to the public. Let’s imagine a chain such as Tezos using this protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Tezos is popular for its completely on-chain governance model. Their motto is “a truly leaderless, smart contract platform”. Their governance model design allows all users to vote on everything including chain rewrites. The interesting thing about this project is that it has a cyclical voting system in place — one for each quarter of the year. With each cycle having its individual use case — the first cycle for proposal consideration, the second deals with actual voting and the third is for testing and live update. The third stage has a specified threshold or majority required in order for the proposed changes to be deployed on the Tezos mainnet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "what could a chain like Tezos gain from a protocol like EPNS?"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "What we will focus here will be the second cycle — the voting. Tezos could activate themselves as a Channel on the EPNS protocol, and then during the voting period, the Tezos channel could broadcast a message to all the subscribers(wallet addresses) of the channel which guides them to a dedicated voting platform where users can indicate their preferences about the proposal before the actual voting takes place (signalling in a sense), during this phase, the channel can broadcast hourly voting trackers. In this way, the users will stay updated on how the vote is proceeding and also be able to change their decision if they would like to due to Network Effects."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The Channel, in this way, can act as a focal point and provide an idea to all stakeholders about the possible outcome of the actual voting when it occurs. This will allow the facilitation of educated decision making when it comes to the actual voting. As explained earlier, using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "such a system doesn’t enforce a decision on the system, instead, it guides the stakeholders of the system to a coordinated choice."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "conclusion",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Conclusion"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In Blockchain, upgrading the system or various protocols and policies is often a coordination game. Often, achieving this coordination to make unanimous collective decisions is not as easy as it sounds. With the help of Game Theory and the concept of Focal points, one can try to facilitate decision making by using Signals to indicate stakeholder preferences."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "On-Chain governance often suffers from voter apathy and low voter turnout, which usually leads to a more centralized decision-making process to an otherwise decentralized protocol. In order to increase decentralization when it comes to on-chain voting, the use of a platform such as EPNS as a possible tool for creating focal points can come in handy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you like what EPNS is attempting to do by shaking the very foundations of blockchain & decentralized communication, and you would like to follow our journey…"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Consider joining our buzzing Social Media Community!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Telegram:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://t.me/epnsproject",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "https://t.me/epnsproject"
          })
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Twitter:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://twitter.com/epnsproject",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "https://twitter.com/epnsproject"
          })
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Github:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "https://github.com/push-protocol"
          })
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "References:"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/@robin.rrt123/blockchain-governance-game-theory-2bd28e6513e3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Blockchain Governance & Game Theory"
        })
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "— Robin Roy |"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/polkadot-network/why-on-chain-governance-82ecf28f314c",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Why On-Chain Governance?"
        })
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "— Phil Lucsok |"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/strongblock-consulting/voting-vs-signaling-in-blockchain-governance-24ddacdaab9d",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Voting vs Signaling"
        })
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "— Thomas Cox"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 963378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-6b78feda7eb55877b80fbf99e68d456d.webp");

/***/ }),

/***/ 967387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-6b78feda7eb55877b80fbf99e68d456d.webp");

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