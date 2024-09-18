"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[57925],{

/***/ 393209:
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	id: 'docs-chat-ui-components-advanced-chatviewbubble-component',
	title: 'ChatViewBubble Component',
	hide_title: true,
	slug: './chatviewbubble-component',
	displayed_sidebar: 'pushChatSidebar',
	sidebar_position: 6,
	image: '/assets/docs/previews/docs_chat_ui_components_advanced--chatviewbubble_component.png'
};
const contentTitle = 'ChatViewBubble';
const metadata = {
  "id": "chat/ui-components/Advanced/docs-chat-ui-components-advanced-chatviewbubble-component",
  "title": "ChatViewBubble Component",
  "description": "Simplify Development: Instantly Integrate Pre-built Chat Bubble UI for Your Dapp",
  "source": "@site/docs/chat/03-ui-components/Advanced/06-Integrate-Advanced-ChatViewBubble-Component.mdx",
  "sourceDirName": "chat/03-ui-components/Advanced",
  "slug": "/chat/ui-components/Advanced/chatviewbubble-component",
  "permalink": "/push-website/pr-preview/pr-858/docs/chat/ui-components/Advanced/chatviewbubble-component",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/push-protocol/push-website/blob/main/docs/chat/03-ui-components/Advanced/06-Integrate-Advanced-ChatViewBubble-Component.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 6,
  "frontMatter": {
    "id": "docs-chat-ui-components-advanced-chatviewbubble-component",
    "title": "ChatViewBubble Component",
    "hide_title": true,
    "slug": "./chatviewbubble-component",
    "displayed_sidebar": "pushChatSidebar",
    "sidebar_position": 6,
    "image": "/assets/docs/previews/docs_chat_ui_components_advanced--chatviewbubble_component.png"
  },
  "sidebar": "pushChatSidebar",
  "previous": {
    "title": "MessageInput Component",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/ui-components/Advanced/messageinput-component"
  },
  "next": {
    "title": "CreateGroupModal Component",
    "permalink": "/push-website/pr-preview/pr-858/docs/chat/ui-components/Advanced/creategroupmodal-component"
  }
};
const assets = {

};






const toc = [{
  "value": "Usage",
  "id": "usage",
  "level": 2
}, {
  "value": "Customization Parameters",
  "id": "customization-parameters",
  "level": 3
}, {
  "value": "Live playground",
  "id": "live-playground",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
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
      id: "chatviewbubble",
      children: "ChatViewBubble"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Simplify Development: Instantly Integrate Pre-built Chat Bubble UI for Your Dapp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "ChatViewBubble serves as the fundamental building block for a chat view, allowing users to showcase individual chat messages while formatting them based on the provided payload. This essential component facilitates the presentation and customization of single chat messages with ease."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: `ChatViewBubble | UI Components (@pushprotocol/uiweb) | Push Chat | Push
  Documentation`
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      className: "codetabs",
      groupId: "code-examples",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        value: "react",
        attributes: {
          className: "codetab react"
        },
        default: true,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-typescript",
            children: "import { ChatViewBubble } from \"@pushprotocol/uiweb\";\n\nconst ChatViewBubbleTest = () => {\n  const msg = {\n    fromCAIP10: \"eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd\",\n    toCAIP10:\n      \"b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1\",\n    fromDID: \"eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd\",\n    toDID: \"b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1\",\n    messageObj: {\n      content: \"heyyy\",\n    },\n    messageContent: \"heyyy\",\n    messageType: \"Text\",\n    timestamp: 1695170770877,\n    encType: \"PlainText\",\n    encryptedSecret: \"\",\n    signature:\n      \"-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAD+pgf+PFVDOzs8dP5wrzVQZdNf8t/jXEMqqYF00VFzVwsirVJY8YEm\\nN0eXNB5Ndk99g4+k1aPxR1ToKk67nJxnUvZi6lqFFcqaOfsIzgxPNO0dtkw/\\nvDNaVJIAE2B6YqdLQmv7kjbPUXZD1vQjzxR/8qusQWqt0IeO8c2SXTciT6uI\\ndsjiJgZctH6VINz8I6H9gf35aPrDf3f4VqhgHDgwhtjyfQXLBMPh1vZ78sAB\\noOKVNQN464llAsCjK7Q8zTANgAwT/G14V7IiHdDX0ZRRqH38AKRstX1y44l8\\nQYQRlQXqGGwz3n3upnT5ZXpPNkdO/btuoNj8W8npic8CIc9rBRoTXg==\\n=Xmu2\\n-----END PGP SIGNATURE-----\\n\",\n    sigType: \"pgpv2\",\n    verificationProof:\n      \"pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAC1mwf/Ydi97nNrk7y58tO8Pmw6i7bGHbie7KNEEvH5aL3sMgzeOWTX\\nAozDvWXuQI0/InVhqAe8l7VR6/mXEaWsewn1S/gcPkIxHSTaD0UIVbXHcoq3\\nNcuCzZaXL6n1mhx+wJSKCsAaa7Z/L7+4Ru6yj9LGEAzRpDQrY7RfgQP6ezSz\\nxNLz2XavBMmIEwMS/wuC5nvT4Xl8amQlmPkFxZK6+2sfDxxzKMPVVewlFIwh\\n4yHd2EYpIlVfuhQh/2KidLg9LAlqHUUgmrE0GU1aCV8bwKl/4hyjzREPahGc\\nJ0wB1059rCMaJBXI+YbE0Z1bhX/G+4nM095QBsWDajAWmwnDUQYmFA==\\n=BiZz\\n-----END PGP SIGNATURE-----\\n\",\n    link: \"bafyreianm5wnvhdhm2dymbykleoi4w54z2et7q4gbkxogaax5life7btqi\",\n    cid: \"bafyreihzt35ubpsq2vsi4swfnuq4mjaiufpnwt6nx2ngthtu5wk5h2z6ca\",\n  };\n\n  return (\n    <div>\n      <ChatViewBubble decryptedMessagePayload={msg} />\n    </div>\n  );\n};\n\nexport default ChatViewBubbleTest;\n"
          })
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__/* .ModalContainer */ .Bs, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: (__webpack_require__(86538)/* ["default"] */ .A)
          })
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "customization-parameters",
      children: "Customization Parameters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Param"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Remarks"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "decryptedMessagePayload"
              })
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "IMessagePayload"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "It is a decrypted message payload object"
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Note: Parameters ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "in this style"
          })
        }), " are mandatory."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Note: Refer ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chat/ui-components/Advanced/ChatUIProvider/",
          children: "ChatUIProvider"
        }), " for details on its paramters."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "live-playground",
      children: "Live playground"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "customPropMinimized = 'true';\n\n// DO NOT FORGET TO IMPORT LIBRARIES\n// NOT NEEDED HERE SINCE PLAYGROUND IMPORTS INTERNALLY\n// import { ChatUIProvider, ChatViewBubble } from @pushprotocol/uiweb;\nfunction App(props) {\n  const msg = {\n    fromCAIP10: 'eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd',\n    toCAIP10:\n      'b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1',\n    fromDID: 'eip155:0xAC5d2aE3b4307D8F4304C0292D11de8968eB9DFd',\n    toDID: 'b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1',\n    messageObj: {\n      content: 'heyyy',\n    },\n    messageContent: 'heyyy',\n    messageType: 'Text',\n    timestamp: 1695170770877,\n    encType: 'PlainText',\n    encryptedSecret: '',\n    signature:\n      '-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAD+pgf+PFVDOzs8dP5wrzVQZdNf8t/jXEMqqYF00VFzVwsirVJY8YEm\\nN0eXNB5Ndk99g4+k1aPxR1ToKk67nJxnUvZi6lqFFcqaOfsIzgxPNO0dtkw/\\nvDNaVJIAE2B6YqdLQmv7kjbPUXZD1vQjzxR/8qusQWqt0IeO8c2SXTciT6uI\\ndsjiJgZctH6VINz8I6H9gf35aPrDf3f4VqhgHDgwhtjyfQXLBMPh1vZ78sAB\\noOKVNQN464llAsCjK7Q8zTANgAwT/G14V7IiHdDX0ZRRqH38AKRstX1y44l8\\nQYQRlQXqGGwz3n3upnT5ZXpPNkdO/btuoNj8W8npic8CIc9rBRoTXg==\\n=Xmu2\\n-----END PGP SIGNATURE-----\\n',\n    sigType: 'pgpv2',\n    verificationProof:\n      'pgpv2:-----BEGIN PGP SIGNATURE-----\\n\\nwsBzBAEBCAAnBQJlCkDSCRB79EVvuUuFJxYhBKgXzyQx/165mhxKK3v0RW+5\\nS4UnAAC1mwf/Ydi97nNrk7y58tO8Pmw6i7bGHbie7KNEEvH5aL3sMgzeOWTX\\nAozDvWXuQI0/InVhqAe8l7VR6/mXEaWsewn1S/gcPkIxHSTaD0UIVbXHcoq3\\nNcuCzZaXL6n1mhx+wJSKCsAaa7Z/L7+4Ru6yj9LGEAzRpDQrY7RfgQP6ezSz\\nxNLz2XavBMmIEwMS/wuC5nvT4Xl8amQlmPkFxZK6+2sfDxxzKMPVVewlFIwh\\n4yHd2EYpIlVfuhQh/2KidLg9LAlqHUUgmrE0GU1aCV8bwKl/4hyjzREPahGc\\nJ0wB1059rCMaJBXI+YbE0Z1bhX/G+4nM095QBsWDajAWmwnDUQYmFA==\\n=BiZz\\n-----END PGP SIGNATURE-----\\n',\n    link: 'bafyreianm5wnvhdhm2dymbykleoi4w54z2et7q4gbkxogaax5life7btqi',\n    cid: 'bafyreihzt35ubpsq2vsi4swfnuq4mjaiufpnwt6nx2ngthtu5wk5h2z6ca',\n  };\n  return (\n    <>\n      <h2>\n        Change the msg object in the Live editor to test different types of\n        messages\n      </h2>\n      <ChatUIProvider>\n        <ChatViewBubble decryptedMessagePayload={msg} />\n      </ChatUIProvider>\n    </>\n  );\n}\n"
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

/***/ 86538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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