"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[13065],{

/***/ 992232:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28453);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(411470);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119365);
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(641622);


const frontMatter = {
	id: 'docs-video-develop-manage-user',
	title: 'Manage User',
	hide_title: true,
	slug: './manage-user',
	displayed_sidebar: 'pushVideoSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_video_develop--manage_user.png'
};
const contentTitle = 'Manage user overview';
const metadata = {
  "id": "video/build/docs-video-develop-manage-user",
  "title": "Manage User",
  "description": "These APIs are useful when you want to manage the Push User profile. This includes changing profile name, avatar, preferences or encrytion algorithms.",
  "source": "@site/docs/video/01-build/03-Develop-Manage-User.mdx",
  "sourceDirName": "video/01-build",
  "slug": "/video/build/manage-user",
  "permalink": "/push-website/pr-preview/pr-858/docs/video/build/manage-user",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/video/01-build/03-Develop-Manage-User.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 3,
  "frontMatter": {
    "id": "docs-video-develop-manage-user",
    "title": "Manage User",
    "hide_title": true,
    "slug": "./manage-user",
    "displayed_sidebar": "pushVideoSidebar",
    "sidebar_position": 3,
    "image": "/assets/docs/previews/docs_video_develop--manage_user.png"
  },
  "sidebar": "pushVideoSidebar",
  "previous": {
    "title": "Initialize User",
    "permalink": "/push-website/pr-preview/pr-858/docs/video/build/initialize-user"
  },
  "next": {
    "title": "Setup Video Stream",
    "permalink": "/push-website/pr-preview/pr-858/docs/video/build/setup-video-stream"
  }
};
const assets = {

};






const toc = [{
  "value": "User info API",
  "id": "user-info-api",
  "level": 2
}, {
  "value": "User info parameters",
  "id": "user-info-parameters",
  "level": 3
}, {
  "value": "User profile info API",
  "id": "user-profile-info-api",
  "level": 2
}, {
  "value": "User profile info parameters",
  "id": "user-profile-info-parameters",
  "level": 3
}, {
  "value": "User profile update API",
  "id": "user-profile-update-api",
  "level": 2
}, {
  "value": "User profile update parameters",
  "id": "user-profile-update-parameters",
  "level": 3
}, {
  "value": "User encryption info API",
  "id": "user-encryption-info-api",
  "level": 2
}, {
  "value": "User encryption update API",
  "id": "user-encryption-update-api",
  "level": 2
}, {
  "value": "User encryption update parameters",
  "id": "user-encryption-update-parameters",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "manage-user-overview",
      children: "Manage user overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["These APIs are useful when you want to manage the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push User"
      }), " profile. This includes changing profile name, avatar, preferences or encrytion algorithms."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "Manage User | Push Video | Push Documentation"
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "user-info-api",
      children: "User info API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Returns info of the initialized user containing user's DID, public key, wallets, etc."
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
            children: "// userAlice.info({options?})\nconst response = await userAlice.info();\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "user-info-parameters",
      children: "User info parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Sub-Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "InfoOptions"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Optional configuration properties"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.overrideAccount"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "/docs/video/supported-wallet-standards",
              title: "Push Video support wallet standards",
              children: "account"
            }), " for which info is retrieved, can override to get info of other accounts not owned by the user. If not provided, it is derived from signer."]
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  did: 'eip155:0xeF05bec7A4D9572Ab0EE671A3e00F3864870406F',\n  wallets: 'eip155:0xeF05bec7A4D9572Ab0EE671A3e00F3864870406F',\n  publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n    '\\n' +\n    'xsBNBGWdgogBCACvVX3FpEFuuQDsU7rEFPfw+Xl+sGWnwOYo2cLzByyoi+Yz\\n' +\n    'tpxdaKsal51pBc3sQzypwpCoBY52RehskKArm958wIJE0+Nc6wqlHFKI8Kxw\\n' +\n    'yywvyyIumLfZoYINzLyv6hJ4lK4O2d/BdyJwCSLru22NIzWvNwINP61nuYDD\\n' +\n    'hdps2cxdmtzMEgFWk1u4gTXHZtBL0JNkDSqn1epNnqj7s5T7iVvn1sMBgNnk\\n' +\n    'siz5T4Xomhg6zgPu1dUbRPEjVycLSQSOEL9EW6XgrwbqL37mHmKijjoE9czA\\n' +\n    'AlxGiyXyrmJOy3/k9PTGjXTqtnS5pP93NgW9yFtdLVLZSH77AKxNmXoLABEB\\n' +\n    'AAHNAMLAigQQAQgAPgWCZZ2CiAQLCQcICZClwhL/VObkrwMVCAoEFgACAQIZ\\n' +\n    'AQKbAwIeARYhBO3PPiNbnO+m2kTm6KXCEv9U5uSvAAC1CAf/cjr7ATr61h17\\n' +\n    'gx1ZL/kDSq1DQiHaLjwfL3P17e780ezgg/Jdsa98wk8PXBOsi2JceyeH1NKO\\n' +\n    'i86VCxIyneM1UYlgy3SaMJBhpsFJl8jEMdGP1KOrczQ5I7RQutG2VmxbTpx1\\n' +\n    'vAB9qUa6MmQ+wgiM86xkU/BIOXhdnpTGPDzjldKBs8IU6AxnPUyV+ULZKvRt\\n' +\n    'x/23aQIJ+EhzSEV4XJaw+Mh/EaJbgPKFkdcLtsk58X4LjLvd52VNj/VaUqmt\\n' +\n    '4ODZA2wap79VIaumI+V9J89tkDVHrNuhasVI7otEThOyCbqggMhl901urWCA\\n' +\n    '8owjZKPCE5yD9ChtTusi4fqex2aM0M7ATQRlnYKIAQgAxft1NlueBXh+Rk3u\\n' +\n    '6s4zYrF3863XBHGpKtY/C3wg5L2FCxuRvrydWffXQSRz31bvijHRPH4w56Y9\\n' +\n    'SVY1t41SShC7XUMU3/43RVIDBrnpY9f6uGJBejpnJNrNklJSSStxj8riP34c\\n' +\n    'PALEnwV+CRk458ubwdPT90IASUj2njTgaJZqAvW6La3xsjdwwQOzeB+wJnu7\\n' +\n    'GGNKRsKgJulTZkJUkgnxsa0AiMWwKciVDyNs26sN55skCPhIH/yqiooblhZj\\n' +\n    'PByGLS1b5bGhRUQKX1MQabkfT5CXIHzHTGT7PP57ySfOVB+HWFyLpxcTnu3d\\n' +\n    'zv+duwdbe2njzeMqA7mE04EMIwARAQABwsB2BBgBCAAqBYJlnYKICZClwhL/\\n' +\n    'VObkrwKbDBYhBO3PPiNbnO+m2kTm6KXCEv9U5uSvAABpeQf/UvUV6GafM9HP\\n' +\n    'NrWTjiYjuW+mvowhHC1Q4dNyVJGdY0luryeGR5nuwU/zli7gHWKfjaI/S3cX\\n' +\n    'aINsELuyrb1HbnPG1lIYpcfaoHaGjCgEOH2VmCrDFRFyOhGEAVXRRdWPJ8BZ\\n' +\n    'RW+JNreZZQlcliWaVWk++vPdeOcTp14uQpS4/rD4h0d7ufVP/OCUVVN6Hq3+\\n' +\n    'xyvuBw16OIgKgvgZhYpTW3+kVN9fTkKN16odYThdBimut9TW08PKgO5j+tAy\\n' +\n    '7RAtHn38tBk5RAn6iOKFWBEbhya3BifNDMD18T5ABQ/B6Cpwm1lE38bNKAAs\\n' +\n    'VrjWMhg20VOJ+vVcV1OvSD10cFGkcg==\\n' +\n    '=TzY6\\n' +\n    '-----END PGP PUBLIC KEY BLOCK-----\\n',\n  encryptedPrivateKey: '{\"ciphertext\":\"6fe7fdf953289b29d18ede401bf2b697c6da9b90ef645d6ed1b71ab70c8431002c591e93d2d4472957c0d46057b3f06347c35329cafaf28a4ceaf17d4cde08475a82958b18c0e84e5e939871cfea14ae4296a4672a55c16718b4bc9255afe90e1c56fe203896badc5f004c9bc0f2093d9cba2d577b9b7453cd7a24198139229efd469f103d13ec9a60a8d1b4613f9088a968ca8c5da4c62ea2682bb37aaf99d086f589dc2c0f721c8e79d6ae09a6681b2927e8cc98181a34dbf250cda77e9d9bf1a30f480eee570db7f0eb2108c0391db7d0b3dd860fdc61a347f2cba4ebe96b5dce9943c9682dc80291f0d190acfc27a3125cf17511563fad94d6f7b4efc24cc56f133acc14679a462ab62a795ba6afbe90af271be64644e7890b209397e447ccfaa5923f8bf00b19192eea7a2c139b9941ea9093578070acbce020367fee33042519a05806c3973d5db6ba36a85d02051dad301683dee00fe8cdfd2588c7ceeb01d84ad66a6f88ad67239d2996ddfc31f384774593eced92c7c602b12be9a12dbb717e8fb9998c0101f62057748aafeed196b1a4cf57d02e02daeee66d1698f1c6bb6201b98d500ca5df3f96f53209be65c66ed873ab58d1ff3ec2b98153dd67cc4159934c37ea04e12f35216bfdb377c1d71599568be115ff425cfab86d89f37e63ebbc4c2611e63a8b52a0db76125f4420f1616ec19e19b3f272e62c77dfc92b88250cfbea2d368fb7c375d7cb6fd85546e2e2ec6a7d623b4db4896bbd2c96e4529c14b6c5885e85d10e4b817bdca1eff1308767fd3656652d3761058418f59ba06a170575d95c5a75b5372471159612a0538aef6c0f622ff0c5869d9e246c4eb55fff5301cb22bed8aab17240ed49b0d6bf1cb522c3687ff8e6a522b96cd8d2ff4aba1ed389070e2fb1fb34e982f12fe25af60b6acccafbb021659ea1eda6772cdd8c15dfdeddf27d7e6f9eb77d250f9372d466d8dc03b339f73772f2dbece7840d161c93582cdc76e8ab31684f7149fed046143bf36a216f9d8c38f4bd0af952fca2874217c3739a5a76807b8df064c6470bec20ae5ad9e66929a2d0d696b4d1d9260b752995dfc30db27b1456a242b1b71df1e84cdc5fb87ea855f3d24a012236d5b7324bf69e9ea7abbf68e31a5894d52fd6feeec43c6de2d89064f4e7d944fb8c2c3c8a6531082cf4cb13f61f6bbe63cf5fab3530a26d9d296052402a571c48759e7e843eddfe0e1c7ea37e9e7b9b4c0e4bcfd8c67defe5864228ffe46d6a85d2cfbff2d1bccc405f20cfa0ccf44945c12e28fd7d3d80f5a8e523ae7395887bc0039560b2274772bc499e87e72271bcc161333b1459181cf016ec505e0502e5b76fd4b0a29d837c923d5d8301fd86cb349d1336c4b06eddbebc65361a11524adf0fd18f189aef4a30afc7fb7de079a675df4a5e51c434677d9d89cc0e8ff10f7b01775896b478900c5e70eb49648d5082d1eaeda33abdaf01ff9ce9a473f52f15773c0e22e3f78545ddce4577a1f82e87e1b4df016508b7ab586a4e7ff9396f7edd6181290a492b5b15e8d43c7445362a508a80f4d838bf0005d97b0974af54c218d959b5beb9194a914fdabcecfef986e67942a7188d35dc02cb7cdba5b91000e316c552bb6bfb12f86bd3d1ddd332dc1c427fb3dd6962b90e3bfbbba4104a2edd6c6319062920a256eac4a9721fdf03a889e1121fade0ecc8740e1cb08eca08f4d24bdddf8d40617283055f28af1d872a417dd9558ad503276bc8796a50b1691a84137a5d0d3458ec21d0d7cae27e3f53c944372720d588302f0955060bfecff9d00bfdb965d81a280211e6421f79bc09557da2c571367563f00aaa460ec52d52a56cd7b7249bd0c38c997af9f15716928dc9d72fcb1b58a6fd48d48ecaad7d5777b7b526ddbe21314c07fdb7eb21102ef96a416eef514fbc94d4b169bfce0e929446e1970acba7ab358717acdd08421e1335fa6790309817f84c90bec12932284e8b5f03707da0d6ea19f0a22875d0ec0a50c4da5af15ea352954bbdf7f79a7e2232cfe2b9ca8f5711100f5706fa49aea48eb0e19feb9db18df8b85d2d53384aa69773ea390815c8abfc12b1646f1f4a7821ee3fa2291d48dff63fd9ad189601c285cd00d25df3575d29ca5c6973ec1f9022bd9f69ddb2db17c863fe3b7bc2d541e8f20e85120d5a0e620b98f653cd7fcbd8479e22945ef683e657b76e36f5508881104f3c551b3a5354dd3fb0db0c3e1c467289ec5d5edbde6c2f02a7309897aae6619895ed5bb099350772da6db8d1375e9f213669ea51dc8cfefed12a8972f4afe1a1ad86ab694bd9b2aac78d3e664484a8e9770e886a4190388bd60d726689633ac8a3a635019f52ccb7d084b4b51488784ddcfadde436f44eb0f864f32f62af5ddecc7eabfb84b4aa951c9aba79c1d973abc19babc33b154b5d9ef2887635c228a94cc37d1b4026413c23a6c27a3e1355e744283558853d1ef469a5906a0e80443b43f809a48931bd796dfd956ae50e93899518955afb95dff6fee8e1114666717e3860de8a342835be98e1fc6f17b8aef2c0da756f20485bd865e2e1aa558b6cc74df652e04d522645b4337ac2f960c1430ee755355d0e8efbe29001dfb0896af1ebe0228c6f4cd383beded4ebb58a25f07341fa173fb03362de806ce31f683188b54bc45e2571c86bae39073743abc8a4450b982d552b5ee1feb68b3b97e8a8fb2835d3ec7eb8baa3d14b59edf6cf01e80484d0349edcddd1409603ce99f717d943ffad4ae7a18e109dc3b9a6000019c620b1df687c7e1d8029271c46e4c0aad97c18300de00c17c83846fe61ce44f1a7e6be6051f6b2410b907c774b2c8660fbdd2503807f3f260c5da4c22e497b3babd528c0d2e8f68662e2e1451fc32a0fb9de857990fbc373cf75feb2fe7e0bdb7131dc448af37c26a260ec527ea65630030c234d797524e6d08f7c6670cfbe4454b434876385126333f1d953ce967d62a98c803ca3b756e3e92ce888d78aa5eef555d8c95c5d4d354e14324b42a5e921ffc7eed6aeb137c23ae39eb00fac42c314d07566b11fd8285b65a4e616461f164107409bc3f934a467b48c99e40ef80c0558f3391454765338afbd5931ba487d3c1b3d2c38991df0ec766a27a9d40050e54054ac227ae315e3141c1b663c30393ec9ef7346adee1fe310decb2764b78d9dcc38dad814394fea4591211f3ace9c9319af802f4a824db27f90b63b865cc70d346e85d507cc14f10b6ab28da4303051c7d79f8c8a8ec64de45e3701cd4d885ca4f29f90f542d5dd6cc9817e003157f779b23140140886d7e48cee17c253645a980c1823d5a71a5e92b663c85c1e2cf33a54e55737e97c5bce23cc0ee298aa7885fac68754738bd20719d9eebb3c246cce0ea119d950610c1d1dca0ea34bc4e40c7ab4dd2ad3255d2c7d93702416630d0895ae56bfc54875ff0ff5b06289e69385d0ffbc32f8592892af801e978bb6aa1044519e3ec31369d3620abff98b5df7b013bae37f20bb90b0648f7c13c612b82d7a6827f2d62216a465f6c840583519df7f57d0b0ff98fbcd1af743a13820daee02c49f6e16d928eeffcacb3c0fceba3204ed1142fa18478f9663a1e3eee041d82f9960842dd751847b025615168749567309b381a3fd9b512c1153a993fe09f4eae9177eb8d87c708148b04a68401f5360da2a60e1737751295359df27b8e3d734550f752d9a209e8751c8ff7d74922374c236b261d3de14f303f68c99a15bf7e8ee32483be053b59c7e038a9c9b4a905eac9fdbdb6b28afb640c94cc842df125dadacd06d8e08801e6e2e072172b7a0fb1a1335a16b82360b7dde80a7bfd4a9a5eafb63ab663cee5927719227b366297636b534dc16fac05e0d9d5207048c65fdc7859d0f10c6c610fccc9f06c96c4ffc68f30e1d482debab6777db0dcb61ad6df9527edf428d9118a042171f4bf92bbfb4a57df8a7fb7f45a9be9531a7ccbf47d4f4f5d125c3a486283f5554287f16c08213dd1a47ae848d92212b2749308b8a9c907995528cf7f0742bd06e18b8bba25018dec6665fdecbfc572aae835793087f8e1b0acd0d9081f35f439cf139d21695585bd0b3eb370114d0f1f37bc6bbc9c846ac718cc4cd67ed3dfdf586add4f19272c7301f603a624190725055868bf9d0c81226d6a974ab72ff7a2d42fbd64850dfa3a2ba15787b4bf8c4e54db3c5a2922717b3356f7ae30a8baeb89ff57154d3f746a9dd8cf3625259d45499fb04c94b637bbefa6c372f6c2ff16ff1a17a1daec1d8ebee3778ea9e3e8ed15368bcd88d4f46147874c4776dd0db2ed25bf47904e6806b552e201f1d62d14f340519558b5d0d81e06332049e9207432eb75a19c8d0290dc6ab18925188c1315a5e65db7a32890c060466b4246fbf761769fdbb292d9603ebd9509bf9c0d2e8492d297ca6dcbb0e4dba6db598eafe994521ae87afa77097a5cb7ebf8806d0a6aaf28ac4aed5360cd22d797af093a058664cd53c2e646b91171c045140693363f48489caae1be7c5185ff475b8b7b2b6537721b7fec3b01a8b6a8a5d09bcdbf6f851535d5cf22df9742a071f63ddbe2be3e8be29d6fa46f48b9e880b9278f22d4cac0153fef91921f989cce971dfadf049adf41597e3e4352c558cba6c788f31f65385903ca505b95e2b611790a7857c4f2ed3578f659b89c3c744f926251ef6f7acce9ea223e19166079a7c219d905825644932281ed7092df4f1671eaf8d426ab4b080cf243db3b8a765c7cb1845ebb5b2fffd7fa6ecc9fc9c147b6433fb0bb39f64a6e57b3b1c937c6bc7f8b5ba86d0ed428ea5b41e2aa33200c239481f36f3bc6bfc17344245ac8530d4ed0f11d69520b5d6574cb553c6e4af81095ebc4fda7af6419d31cdd90f6f9f452c7fa07c59\",\"salt\":\"e2474092db07f3cdd4f0f654cd40b5e26f499ceee4f66fd67bfe691bc74e2934\",\"nonce\":\"d535b48d48fa263d04af4d73\",\"version\":\"eip191-aes256-gcm-hkdf-sha256\",\"preKey\":\"f40d7db537e9d5e8201249b1f9c2db7756ab197e58434cb6dfad3180796fc25a\"}',\n  verificationProof: 'eip191v2:0x9d28b544ddef2c7d793a018e0e0e14107e4b57dcb22e06cea7222beb477641e13bfd9b3f10e78cbda7dd9de07b5da3ca6233a86da5f33562d7784de5c6d7cd321b',\n  msgSent: 0,\n  maxMsgPersisted: 1000,\n  profile: {\n    name: null,\n    desc: null,\n    picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAuUlEQVR4AcXBsY0CMRRF0TtPkxKQbTYBfbgFJGJXgeQqXMa4AVpwAXRAQCVD+rXB34CV3jnL/bwfJGppfGPMTkaYCTNhtp62G7lGNGYnU0sjOm03MsJMmAmz5Xn9OUiM2flGLY2MMBNmwkyYCTNhJsyW+3k/MBJmwkyYrbU0ojE7US2NaMxOppZGNGYnqqURCTNhJsxWfqml8Z9qaWSEmTATZit/eLxfRLVcyDzeL6LrdiEjzISZMPsAJr4jjmZvcRoAAAAASUVORK5CYII=',\n    profileVerificationProof: null\n  },\n  origin: null,\n  name: null,\n  about: null,\n  profilePicture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAuUlEQVR4AcXBsY0CMRRF0TtPkxKQbTYBfbgFJGJXgeQqXMa4AVpwAXRAQCVD+rXB34CV3jnL/bwfJGppfGPMTkaYCTNhtp62G7lGNGYnU0sjOm03MsJMmAmz5Xn9OUiM2flGLY2MMBNmwkyYCTNhJsyW+3k/MBJmwkyYrbU0ojE7US2NaMxOppZGNGYnqqURCTNhJsxWfqml8Z9qaWSEmTATZit/eLxfRLVcyDzeL6LrdiEjzISZMPsAJr4jjmZvcRoAAAAASUVORK5CYII=',\n  numMsg: 0,\n  allowedNumMsg: 1000,\n  encryptionType: 'eip191-aes256-gcm-hkdf-sha256',\n  signature: '0x9d28b544ddef2c7d793a018e0e0e14107e4b57dcb22e06cea7222beb477641e13bfd9b3f10e78cbda7dd9de07b5da3ca6233a86da5f33562d7784de5c6d7cd321b',\n  sigType: 'eip191v2',\n  encryptedPassword: null,\n  nftOwner: null,\n  linkedListHash: null,\n  nfts: null\n}\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "user-profile-info-api",
      children: "User profile info API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Returns profile info of the user like name, avatar, etc."
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
            children: "// userAlice.profile.info({options?})\nconst response = await userAlice.profile.info();\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "user-profile-info-parameters",
      children: "User profile info parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Sub-Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "InfoOptions"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Optional configuration properties"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.overrideAccount"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "/docs/video/supported-wallet-standards",
              title: "Push Video support wallet standards",
              children: "account"
            }), " for which info is retrieved, can override to get info of other accounts not owned by the user. If not provided, it is derived from signer."]
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  name: null,\n  desc: null,\n  picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAyklEQVR4AcXBsWlDMRSG0S8XCbKBQJu50QAuvIBV+i2gwk06F3mbCTSDiqS9cSF42OQ/5+P78+uHA3qKrOQxOcIQM8QMsdBTxMtjspLH5BU9RTxDzBAzxAJPztuOV1vBu10erNRW8G6XB15tBc8QM8QMscBBtRXeyRAzxAyxkMfkP+Ux8QwxQ8wQCzyprfBOtRX+mniGmCFmiIWeIl4ek5WeIit5TFZ6iniGmCFmiIU8Jt552/Hu1xNeHpMjztuOd7+e8AwxQ8wQ+wWFoy7RoNsnSwAAAABJRU5ErkJggg==',\n  blockedUsersList: ['0xabc..'], // omitted if array is empty\n  profileVerificationProof: null\n}\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "user-profile-update-api",
      children: "User profile update API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Used for updating profile of a user like name, avatar, description, etc."
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
            children: "// userAlice.profile.update({options?})\nconst response = await userAlice.profile.update({\n  name: 'Alice',\n  description: 'Alice is a software developer',\n  picture:\n    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzUlEQVR4AcXBsWlDMRiF0c8XTeAJPIAgoFbgQew1PIbXyKsyhUGtCqM6ZAJX6Z32fykM4hnuObv71++TYJRKlHtji1EqUe6NSJgJM2G2W74/nkzIvfHKKJUZwkyYCbOUe+Odcm/MEGbCTJil2/VMdLx8Eo1S2SL3RnS7nomEmTATZmm//BANKlHujS1GqUT7hRVhJsyEWWLSKJVXcm/MEGbCTJgl/sm9EY1SmTFKJcq9EY1SiYSZMBNm6XE6sHJhJffGOz1OByJhJsyE2R/3lDA4e9QQhAAAAABJRU5ErkJggg==', // base64 encoded image\n});\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "user-profile-update-parameters",
      children: "User profile update parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Sub-Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
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
            children: "Optional configuration properties"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.name"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Name of the Push User"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.description"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Description of the Push User"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.picture"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Avatar of the Push User, should be base64 encoded image and not an url"
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  name: 'Alice',\n  desc: null,\n  picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA7ElEQVR4AcXBsW3DMBRF0esPlQYyBldgTXCBFIRG0BIutYSQCQRlBIE1e1fcQ73TPrlQYyD/nNvX7/OFSKGhppL5xLLtqNojynBmODOcDSk0/lMKDWU4M5wZzgbe1B452XZU7ZErKTRU7RGVQkMZzgxnhrNhKpmTbUfVHlHr486VcY6oFBpqKhllODOcGc5u38+fF6L2iEqh8YnaIyqFhjKcGc4MZwNv1seds8wnJs6WjRPDmeHMcDZMJaPG+eBKCo0rtUeurCWjDGeGM8PZsGw7ai0ZNc4HaiqZK3U+UOvjjlq2HWU4M5wZzv4A2KQ7gp8Kf0gAAAAASUVORK5CYII=',\n  blockedUsersList: [],\n  verificationProof: 'pgpv2:-----BEGIN PGP SIGNATURE-----\\n' +\n    '\\n' +\n    'wsBzBAEBCAAnBYJlnlrlCZAad/25xFamrBYhBINr+laRrMoGk+IA0Rp3/bnE\\n' +\n    'VqasAADpLgf/RuN4ny4S5rYUa0JJNhhDs8HbokFnyMytRrf0Ka7UjUmFZsYN\\n' +\n    'cBS3wku0SwWOIgUaoxZWtHcITPFsIOvk4etVLm30mRY1tTJAfOvY5WIy9kPF\\n' +\n    'l/3COBfyOt92d/uhtkvg4q+Jy8dBsseYuCljce7qxlpW6kbtdR2HFsp9xgYc\\n' +\n    'AEOUDW30Z8gBz/KDW1J+SxqcnfevCNgcXkBH+ZPkzSPWET5lrki1NUaZPjxE\\n' +\n    'ehoem6lZQU3uzOB920m9TLJM5ZFef5vGrJrMnnOWTJkboQPNEQnvxA6z9DkY\\n' +\n    'xAJBHKaKCKI4h+h0ZZXEerAPd7oQYho5WCtfP9XPhhNltYNbUyAgsw==\\n' +\n    '=XxgM\\n' +\n    '-----END PGP SIGNATURE-----\\n'\n}\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "user-encryption-info-api",
      children: "User encryption info API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Returns encryption info of the user like public key, private key, etc."
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
            children: "// userAlice.encryption.info({options?})\nconst response = await userAlice.encryption.info();\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  decryptedPgpPrivateKey: '-----BEGIN PGP PRIVATE KEY BLOCK-----\\n' +\n    '\\n' +\n    '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\\n' +\n    '7ToGYHsbN96HlkJLALXAYSDZ2w==\\n' +\n    '=7o+m\\n' +\n    '-----END PGP PRIVATE KEY BLOCK-----\\n',\n  pgpPublicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n    '\\n' +\n    'xsBNBGWeWGYBCAC7mmKWauQ8DZH0EHoKGUHwVqpcqkYDcyYqDF3W75hd+yDr\\n' +\n    'OkC/PCeRYwfuSJe/BydAbK35hqsoXrPGPas+ZmtTSDbH99jxXBw/mYP0F3Ck\\n' +\n    'z5BvyTlVmFVn5KLy9ylcKE376fFLER169w7S3sNGypkFOOE9380P6pCA5ltx\\n' +\n    'jZcVkku/p7PziA3Puzx/neUDYYLBgP11/ZHyJS8ZdRnaMfymQeRFVvfMqiFN\\n' +\n    'eCR9ny14/w8uHbMVfdaGT/95ylP0vsBmzxIbvojPQln64S0mQyQ4iWSca78P\\n' +\n    '7TFgTadlPr5em/l444Pcfj59DwMuqfaRcag8+DngfLryDPtnZB2/sJoNABEB\\n' +\n    'AAHNAMLAigQQAQgAPgWCZZ5YZgQLCQcICZDG8fVhTTCp0gMVCAoEFgACAQIZ\\n' +\n    'AQKbAwIeARYhBMrgYq7LxHgSb9Gq4Mbx9WFNMKnSAABxeQf7BA1LqD/JBMvQ\\n' +\n    '6rY3UZZjRqLThjrauzC6M0zmGxkswtgSMKhXwe5GY0CIVT4QirpMH3nuuS4t\\n' +\n    'CBPGepyne0vxC3rtNaFQiTRCk2aF4E4dmdqlRIJjpbynWRjWX7aZxH6r9gkE\\n' +\n    'YojFcTqLiXWziUl9rNVMg3yuSnNg72M/krQesiZDQOMAnIrPV3WTvnVMnsst\\n' +\n    'cTuVbF3iC6tZ4A5gKN2RusH6fN8WZQpWnC1Sfz5HngEhCXA735PlyUH2vh4m\\n' +\n    'cWx1HyoKsefEu/QW9PrVMJIh+5or710fKM8Xq77+HZwepNyuQeb1yJFtw+v7\\n' +\n    'LB1loJ8lZJLwtKKt8UyJzyEpjTzWI87ATQRlnlhmAQgAwx04LUrBPmRPjtX+\\n' +\n    'rQ0H5f3X7TZommsNPbQf6VOaN79j60OTQdEGcT3QW3uZObi9MiZBSLMcepqF\\n' +\n    'jpPIGN4tLXmVUu1p3ekiKnonWIaZXJaJ0PFaLDqxMkTmsVkzxmRilAZHLmpA\\n' +\n    'LIgJo/K6OTcW4Z/xDcKWkmYlr7BGadnnQ5UJ1tABZno3+cSm910dY1k0GKlf\\n' +\n    '0j4IACn4Q+XMPG7dDT7/9IErXM1bhlJVsaDaWxSlIoZF0w2/RkGzJlvuZgRy\\n' +\n    'JBAmzgv+Y77XhiQBJg2w99xGQBbz6+nhi11IhBesI6B8K+LvvKggDPtL5m1p\\n' +\n    'twgWrYngxnwCedJRVKI05gc8pQARAQABwsB2BBgBCAAqBYJlnlhmCZDG8fVh\\n' +\n    'TTCp0gKbDBYhBMrgYq7LxHgSb9Gq4Mbx9WFNMKnSAADv9Qf+Ji7LazGnZN/S\\n' +\n    'fYeTQ/yK6JthGuRB2zz6ktDzk0O5b2iR9hfp8LYv3mL7TecJio9p8GKsE5Zv\\n' +\n    'R2h9kiBUyr+maY5A+Y2GoqZ0eWoDJqkoocKQzkW/SgqKyZgS1HfT4YaWtq44\\n' +\n    'S0v8E2jK54KGt5ycFdEhKB9m6hhX4iUJ3wwZaI5RqekSiJyF8vuWcVb/ifoX\\n' +\n    'DRBxDHBECNS0H2BcvPORL3oKTVDEAfUPJk5vq/Rh243/QFlJQU7WLqJxuChU\\n' +\n    'Tp7Ocg7pdP0RvHFmQHcjYwecCRqxHlW0OPI7YS6DqNVyXa/tnNUt8f/h1Nbe\\n' +\n    '1zO47ToGYHsbN96HlkJLALXAYSDZ2w==\\n' +\n    '=QtCp\\n' +\n    '-----END PGP PUBLIC KEY BLOCK-----\\n',\n  decryptedPassword: 'password', // omitted if empty, only returned for NFT users\n}\n\n"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "user-encryption-update-api",
      children: "User encryption update API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Used for updating encryption version, algo or NFT user password. In case of NFT transfer, it's recommended to update password after transfer."
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
            children: "// userAlice.encryption.update(ENCRYPTION_TYPE, {options?})\n// Wallet User Update,\n// Usually not required as it's handled internally by the SDK to automatically update to recommended encryption type\nconst walletAlice = await userAlice.encryption.update(\n  CONSTANTS.USER.ENCRYPTION_TYPE.PGP_V3\n);\n\n// NFT User Update\n// Should be done when the NFT is transferred to a different user\n// so messages and connections can be migrated to the new user\nconst nftAlice = await userAlice.encryption.update(\n  CONSTANTS.USER.ENCRYPTION_TYPE.NFTPGP_V1,\n  {\n    versionMeta: {\n      NFTPGP_V1: {\n        password: 'new_password',\n      },\n    },\n  }\n);\n"
          })
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "tip",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Attaching progress hook functionality in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/video/build/initialize-user",
          children: "Initialize user API"
        }), " will help you to track the progress of encryption update."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "user-encryption-update-parameters",
      children: "User encryption update parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Sub-Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
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
            children: "Optional configuration properties"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "options.versionMeta"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "{ NFTPGP_V1 ?: password: string }"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Metadata related to the encryption version, including a password if needed."
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      summary: "Expected response",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  did: 'nft:eip155:11155111:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528',\n  wallets: 'nft:eip155:11155111:0x42af3147f17239341477113484752D5D3dda997B:2:1683058528',\n  publicKey: '-----BEGIN PGP PUBLIC KEY BLOCK-----\\n' +\n    '\\n' +\n    'xsBNBGWe42IBCAClV0fsRSH1r9An6p1+QFvYdNM7Jy+keygumt8sRTAoVlkJ\\n' +\n    'DijCnntjjuygG9e5WBG0rqxtM+21GzRWawjsAldNRUU02Kn8De7Vi6UvZS6p\\n' +\n    'amHuMeOtrXRUIAuFBAMaHqFa5aEfN71K8Z5Plq7kuvpEL5XLLjYo+Q15B+Cb\\n' +\n    'OHoyRa7G1WXqdyyepwHXd2qLHDqbtC1uYcAbmYDGW0v9jZIJeYca8l0FR0+C\\n' +\n    'nKuoVyoxHrOvDl3yFtgzA03nHeJkXFc2ijNBJR37taykOdmaRXaWzuIB9twM\\n' +\n    'hzAQ0NaIfEEqGCo9STxeU1oPE5W6eGLD8WU99uPBog5g+mDi7cnqKAolABEB\\n' +\n    'AAHNAMLAigQQAQgAPgWCZZ7jYgQLCQcICZAZ5G2Colq48QMVCAoEFgACAQIZ\\n' +\n    'AQKbAwIeARYhBKwKzbz9BxH66mp8bxnkbYKiWrjxAACdIwf9GzQxT3NmKGVZ\\n' +\n    'TPDD6zPuZMQXWjppHXyRT/ou74bLtFJdM2ivRLWPiGaud8zw1rL2bUb7Mn25\\n' +\n    '3r+NB+BogqLzF+q91NIDiRR3pv2RImFGJDK3r2Sfugo4dIU7RNe1SKctdgAk\\n' +\n    'DBSyOVX7ugd429giQewr5aVE/jT1vJ/lDDDiRw+TvdKt5CGMu4ud5gbuatto\\n' +\n    'cJFCQSP4i6BuxYdghKH8EuzeO4gvMGMNHpS+4abbpzwWiJ6uL7kje4FOtLxV\\n' +\n    '7Xm9IgvFnAVPpdey1ker+8Te0Yw2DDkesaZ3QjwQ7oy8TBVuBdtp2X7GxXhu\\n' +\n    'cbt5Pt56cy6Q0I5c1+WDgNxrkR7j2M7ATQRlnuNiAQgAtci6M2dNHj5j1htI\\n' +\n    'jl5+I/+B7R2uRj/OPBAV/lmpC3xtsw7miFDAvxDS1+g/K1F/dEUtxVe43cRx\\n' +\n    '/dD4j006GE/rxAwJ67P4xt5c3p7XFy0ycRcRyPsYNv3Fqepe8NwEhBEN10dz\\n' +\n    'AcTXtFm/r6gAdOpssL7as1knyxJOgNkdi0R8y74EHIpMIany6/3Z7rU9+KMn\\n' +\n    'tTaZzFnXFuIvHbOL8ge8LCD3S/qtcza1GAJlO1I2gsyuOXmahILyw/UT2YhV\\n' +\n    '91tippy6gvAEMJLAP6vm7Y9z5kv9T+qFeLSIb5/L5A3fD+DcxO26NzT2wOGA\\n' +\n    'dyS+zXwPzdkwpO1fChmwU3B6fwARAQABwsB2BBgBCAAqBYJlnuNiCZAZ5G2C\\n' +\n    'olq48QKbDBYhBKwKzbz9BxH66mp8bxnkbYKiWrjxAABnLQf8DhOlVRi/OQXV\\n' +\n    'mT6ed2NiNrYfesfV59nUjP1a9A5GuxMNeVprZ9VJBMLibqQuTX2gdUujVl5m\\n' +\n    '8kWPPiW8++sv2OFpSYuD+Fjguo2r8JpO5/6BrSnFE5+b9PiDtNp1ImcL3FFv\\n' +\n    'Il2gHTW+qzfsPGz1X57HHr+PidqFXPT+fczoDTTEahXmsdT6I/47beTey4GR\\n' +\n    'KFZNwNnBETdShpFQxxdIw9BcEm5o+xrLCH+Fz7qdXDqDHEC/VN1bCOWitYWk\\n' +\n    'ItMMF4+2JTJehksITeRT8Svg+90ZuXUJeQz4uLatahmj8rsHP9udxHAhnRYc\\n' +\n    'R3O8gfxAOS60jTsP4FpIPpsbbDx73g==\\n' +\n    '=qiH0\\n' +\n    '-----END PGP PUBLIC KEY BLOCK-----\\n',\n  encryptedPrivateKey: '{\"ciphertext\":\"8e053a21399740d65aa1ba5b7b28b0a1e045a2d0a2abc83adbd41424e76bf460db5081e42e35464dd48444bd92376caaefa63692e28ffac7cef7a49be7e94c2c7a85a32770211ad7c176077a8a7a65f2a7daeacbe3ed31c96d537f10b8390645657ac3f3f447a37023a243f06ae7d7a4445135925409ab8f73db8f40e37132253175b6872012f921fcbc171c1c8ea3cba5c53130117ea81bbc9a9de461e3419461bc8fcd686b19811b8b11788df97d4e4811c3d3743a04804ff5ada44bb177b692fdc95ed6688d84384d1f3ca74de7f11e0d2bc58a0d9f1655eeddf305be801c031a8166482c2f6400595e6582f3d70289889cf1d92fd3c373cc1322edb5f75f7e6333fe34e42d33a67b2e4295afdba3ac59ec87383cfef40011e7aa7c9d5c1f19177b8b0fd532877e7f3d886f6af412fc364d2cdb560976128447d7049e3a84a925c6fd6251a23c644b18767b7b9f44c159a4a1a12c8bba26aed0a48545e2881b136047461c2d87fd866c90e89abeb0ff6cb1f86acd4140b9c43d566fb5a552209c3f4fb319a141e8004e50536a9d9f7bc6fe4b7173310db16b9e9d9d26fa30cfc7fd95eceb5b649f62ad0fe02919751f357e521195cee27302b5eb655328ec32052c3f01358ae9efcec2319d98322506cd1448db58186e00a4ecb02d814f2618e88ebc67b38c564be7a2f14bee0627ef7d40206d7c11d9e48b55f5beddd72c239b97b4f695fe021ee73049f4360048a43f49943366d2ee969e3f100a223f00a7454b81862ddd83a984f3a9a2a857472e983cafaf942552150529a7e2c5b7485096d009ff5713506a4791277db33be29e7d060321013725c658fbb3fefa1a884bdd92c29e52039213ed86c2be2d44d7db06db6dac99799b98690fcc00c2aa3e7e70389816a43ca64abffc2647fd44d9da191f6465d9f245f3029161c90317cb52a19611b6451b06db43093ee05309808a05bdf47f6e1904d6e623cd8d7e32d04e6c61daa1a669de18a4f3da37b5f9af0da68cac3fc36b50462410c0e6fe6ed1f22e64a5200fc5aa5fcbbdeaa2e8b7f3380400829219faa15c851cb11aa073f79fe1c875a568bef6b95897131aa084765b8a20ba47ce0d4920b9f8ad846e1e22024917ece69088b96e061fe9f1ca110d170bd1b72f4f3e16c7fa21054029863efc3e5c9fe1f8e4cdd41c2c8985b523891444bf561d108e684711b88c056cfd0186e6be8acf4665c5c3370a931bd0b46c6aa8c2680f61b6a35689510878d790bed674296388fe2d01710c8e4cc68364112bc5d789469eaf22f1585cc4c245f951ac65bd307d8b5cfd3b663baf944aafe4cfcdec579fd06b20c688b4a62fa6e7ebddc22a2676889e980c0d8d06cf2ab71da3b547c22f2939eb854505767e5cf5f6411b0fdd13123f2e041cc3134c9ce60480ca9e6f3767a332f7d8fc37858b4e3cb14e6df74bbbc4a8be4f7bac0a778bedb576ca270977a5498648d0ca80c84938ea20641fcb49424d4a30b8aa5f3bb50c27635eeb065612dd937f5ea8f0284cbcc73125408cab2731ad9cad129387b0ce20bdb55c37bf1f0e715f7750f2ae46d631626bee4e7d95c62d1ea3b99923d7db9fbea952d2ed81a88092491dc3c887c02cbe4d16894ce6821c7d69d70fcfed898fd281e5e77b5f046dbcc9f99fe77da7d7f0ca0061e7f7194ae6443b70a99ac7acb239ec5f505e79dbd91fea61779cbed693dac922e0f0bffc8838fbe125ba3863d49a5a7bd5d4a9a93b32702bcd1c59f0a0b9f5c93827b9e6fc917d3cbdc6ba50d64c49ace3db61a5d313cf8a2813c4e3f98c2b96fb6320b60ab8861703c05655569843dcf3f778a2141fa3d3065e7915e71ef25a58ef0d7c3de00a523b809e7078b2d446ccdd521fe47d4029b197383377e3538cf66daf4c54afd7512e0aed9ce2c9767e8605dbe675601cddc98904f7dedc865d1f335c7e933f6488cd49e6138b245c5c705be35bf575b7908de133fcc67c3273f9ceffa65e93be7f88698366ed4ea1d2e36607e360c0dd1df05adec0fcbd066ab0d60f76fa96c660bd06af649a03e83cdbd05b1c849b1939cff96c772525afcc2b416ea36c71067d00ad7980abb0ce628b5b2c7f6374b9debf4674b025c8099ecb78ad22ffe20ae2f37b57c7498c8f4c53830b12cddcc229c40ab8fd01c44eb758fc7251811e1a63119805b8905da81f87435ae9a9041f1797a080145c4b4407841b20f52c45faa250695a80e9ca0c04380deaeede524eb60fc55211eb26caa8fc1d0885074791807425365e81b2a08cfa804b094ef2fd4e9de80bf9160d4c26bb3b54e8598e4fcb79416ce52c3bd2097e80f5197a3c3ec8f5a50215c67662a505bbf57473c65a6c419e4a9a37aaabb4a4ec8006ae1ad2823f46c430f977b4fd974f5468a912ef8f6569de0616d98c411b06b304a0df74a1f5bc3d9f7136c6bfab0a2cb451ff934a9bb0f577f3db7572396770b4c8be3267e3258e79de9032b28725b25c7c2773caada7334cf277d218aab55622f257e1c03b4352006f7f4bbb62c76222f02c4c25aedc0f45c1b8b7911625d5e70b2111f9a5bba5651418ddf2317c079e1d6db56f1871be67c1b9fa6530a1cda97e76fdc5ff0de583b7c7e7537f628fb1545c3f87eb93e298d4d64a6670073c47d08d53f83ccc0bd07f704cec11d7e460451b1733b0bee83f81c212df84256e0a986a32f28489abc5b69ed74082f3b1251bf9ea5a48477079e582924db050b7961e2cbb59c32a60b5c2129930c2a1768ea4ce74d512267bd650ebc035ac59a475a8a02cdfa3e42b38168132986eb21a0a780caa2e13075eb4e0530a069d8773892fdfa5781ce1e70723936088d2830a1935d3c78677e2476929f1e819fe7714018b46706d2c6759092191b7db52dbdd52301a5dc32b70ac363b5b3d9b68560295707783f04c67e22040e6dcf0a5d86c0c7fa81b15f063d0a4e3afd785b2711a1cccfd9a8ac7e37380c5c6b288b5ad63f91ad8683f2503bca9c5dacda23eff22766229e3f9141fa83f087166d86da90a2d0b245e2022ed01b075652957157a561df6ef9fe8cad4258fcfd4d61f0e2f3f00480208c511d44eaf8aa9eedc8dbeb024af736b5b5831697b3aabdd847da8c6dad21582b398889ae26f42daa801ae6979fecfdabce29bfa25630c465787edaca23afcba105013ce13df4a64e75c13fce9af57b95d10eab2985ff45b0dcbc9a09a83d6847fbac882b4e1350469b8fabba9f59a4279e53b7802d7d1ad9646c5a7cc0c35bdfb400347924ddbba0ca5e922ddb05c3bfd839010a202c9932b201df47874134231f0c2090d20b28255a71e134ddbabfd333fb0f4413ec03038145b28c238c7bc5e388766311b771a820104a00fce13d37236d484405668b3c87f6e5bc733e5d926f2406ae86e2215000f6543eddf298741267981e4470c0432e534f3623086b0c9911ca5d23819f9a5a5e93695027fb19d64d51c0a3d2849dae7dca34e2c31bf0d5a28a5aed6cdb8c63df51ede95c15e9ad321a661e4085d75f3d8d27f308e24f39e626caced82741bc020d25854a04b176578ead49fb9a5d41188c95655b7d22f528ec896d553caa68db5fd6600e290e057c42643b2cbdc7fc43281d245f45787655e2276c89188e0f165754912f85ccb8603aef761c14d021646ac2d389b46ca2d5e719ce34faaa5f1d1d7f32ce97066bc71fa423bdcde8c2442e21b4d5e7ee13b778a1174f59c3c7b157fcd35172f113fc3589a75f1c00891a2416df4c77bb43da3086ad7c2ea18b9ba1e3904c5c5a8bfc31fc29ba646455dea29ab97bc1a1b320a0bb67b7ccc689eabae8e4ccad5dfe5e2945df2a2ddd77537f80a9da266d4f13f561be38f78b0b2b652a1ed58406ae5b26866d48490c47dc464fab5d5c2e163ccff04c35bed174c0a1e95402f3f1f4049a89ea638d8b42b488161df894bf14b097c1b0d0fd2f7a3467bde251746c1964d783a3e6406b3889d83f3b6111bee7387e724a9966087626c2e593207bb644ba12e2ac5c34d2b0d965fedf6282bea11987bd9f9ee9c519c10f36328c550e7ba1eb21a05d5b13e41fde27b5344d176e66048c09199c3eece738d91ce015ea927c5b91ea53d8ebdb43f2cb25760a2dc764a60592e9ebc1211d911e4464f80241f2314fd8f9420d9e01ae360096211594896cbfe2738f840be8fd643f3057614d27cf2e6849a4f7e4766d30ee5f5447c9bd9fd439decd85357e03e18e269e1049883a0edfe53d8ff543a4e7ba3e71a9608e0e5423bcb7d6bbc1a3973c2f93cd22b1425c31cd4eee752442c040fbcc94beabb20f8cf3301170ad65498a3adf3af2b0f86c2ebd92c0bb5ea332da9efcfc745f5796c2bad607a8338d0f688b2d47a6036db75bd3d9b67e1d03726d966e0fc4f0f2e30acd7e0430c59868bd3915aecf6f8829ba7e8e31e53f9a1ff7144b107752bee7de2562db070b33f226b4274a564511f9a6c57a51f811ca7a1c01250859efb5389880b8ab16b1009c33057a55794803b9d8d056766709d072cb41691ea73e84da34a2c41d00f0b23b820a6c08131af99a5e2d31ee0f06bebf57ae853154dc9df5c5f3b40c384d701a62a95cdf24b1b2914a3512a7fbfc451cc091fc3641d4757335338e3a1a6764ecb00dc7357eb00b0edecad0d166c7b4a5f0315f9a569bfc8283d4e91228afd0fab3e6ad2ac0d28af70921ef023204704d360064fabb936e019291c12c9dff9e339ba98ba3aa0c6c670d062e262b51648c92d2a885543d9a25818255bdb83eae32c02958d0f964a14d7f0af177ce93f08ec3ac006cff2d948575d766f201fd4638bc8d6d415ae5479aa7c3378f0d7dc853c4698eeb97b75a380cb3d8c262ecec330fcb04d9c691f609f9f7adc308c3c7ac2a6b8330cd31cc1dc7578ccb51effa4dc\",\"salt\":\"0287a217f9384a5be8f42c11f9e95b3c35e0afab193d0bc8619eb521e69f5959\",\"nonce\":\"7c0f3ef16a4e74072cbb7acb\",\"version\":\"eip191-aes256-gcm-hkdf-sha256\",\"preKey\":\"e43ad43ccb43b0680050eb97d2e957e7ab297511832996d5295374deec57c203\"}',\n  verificationProof: 'eip191v2:0x663648ad6fbc6c067855aa9d99792a4f43e2bfaf068e908c241bd238fe54f1ec3623a40efe63be2c333ab02351a6cc321c939db3be7c627234d6103182d38a9f1c',\n  msgSent: 0,\n  maxMsgPersisted: 1000,\n  profile: {\n    picture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA30lEQVR4AcXBobHCQBiF0S//REXgkKmB3UaQqNcGJmZnTQydIJHPvBJ2e6AHbJ69mMwgmHvO8Pv3syFe65NvmpYZFZgFZoHZcDoeNkRNmW8qvaECs8AsMBtryqjSG6qmjCq9saemjCq9oWrKqMAsMAvMxtIbe6ZlRtWVXdMy8+bSUKU3VGAWmAVmw+l42PhATZk9pTc+EZgFZoHZeLufUdfLA1VTRpXe2FNTRpXeULf7GRWYBWaB2XA6HjaMArPALDAba8qoaZlR18sDVVNmT+kNdbufUa/1iQrMArPA7B/2PTX9dpiaVQAAAABJRU5ErkJggg==',\n    name: null,\n    desc: null,\n    profileVerificationProof: null\n  },\n  origin: null,\n  name: null,\n  about: null,\n  profilePicture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA30lEQVR4AcXBobHCQBiF0S//REXgkKmB3UaQqNcGJmZnTQydIJHPvBJ2e6AHbJ69mMwgmHvO8Pv3syFe65NvmpYZFZgFZoHZcDoeNkRNmW8qvaECs8AsMBtryqjSG6qmjCq9saemjCq9oWrKqMAsMAvMxtIbe6ZlRtWVXdMy8+bSUKU3VGAWmAVmw+l42PhATZk9pTc+EZgFZoHZeLufUdfLA1VTRpXe2FNTRpXeULf7GRWYBWaB2XA6HjaMArPALDAba8qoaZlR18sDVVNmT+kNdbufUa/1iQrMArPA7B/2PTX9dpiaVQAAAABJRU5ErkJggg==',\n  numMsg: 0,\n  allowedNumMsg: 1000,\n  encryptionType: 'eip191-aes256-gcm-hkdf-sha256',\n  signature: '0x663648ad6fbc6c067855aa9d99792a4f43e2bfaf068e908c241bd238fe54f1ec3623a40efe63be2c333ab02351a6cc321c939db3be7c627234d6103182d38a9f1c',\n  sigType: 'eip191v2',\n  encryptedPassword: null,\n  nftOwner: null,\n  linkedListHash: null,\n  nfts: null\n}\n"
        })
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
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