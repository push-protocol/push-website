"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[68483],{

/***/ 728339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */// React + Web3 Essentials
function getPublicImagePath(relativePath){return relativePath;}function getSrcSet(srcSet){return srcSet.split(',').map(srcSetItem=>srcSetItem.trim()).map(srcSetItem=>getPublicImagePath(srcSetItem)).join(', ');}function ImageHolder(props){const{srcWebp,fallback,src,srcSet,alt,...restProps}=props||{};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("picture",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source",{srcSet:srcWebp,type:"image/webp"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("source",{srcSet:fallback,type:"image/jpeg"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:getPublicImagePath(src),srcSet:getSrcSet(srcSet),alt:alt,...restProps})]});}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(ImageHolder));

/***/ }),

/***/ 353760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PageMeta)
/* harmony export */ });
const PageMeta={HOME:{pageTitle:'Home',pageDescription:'Homepage of Push Protocol - The communication protocol of Web3'},TOS:{pageTitle:'Terms of Service',pageDescription:'Terms of Service of Push Protocol'},PRIVACY:{pageTitle:'Privacy Policy',pageDescription:'Privacy Policy of Push Protocol'},PRIVACYFORMOBILE:{pageTitle:'Mobile Apps Privacy Policy',pageDescription:'Mobile Apps Privacy Policy of Push Protocol'},FAQS:{pageTitle:'FAQ',pageDescription:'Frequently Asked Questions of Push Protocol'},FRENS:{pageTitle:'Frens',pageDescription:'Explore integrations done by our frens'},SPACES:{pageTitle:'Spaces',pageDescription:"Explore Push Spaces and how to get started with it's integration"},CHEAT:{pageTitle:'Cheat Sheet',pageDescription:'Explore Push Cheat Sheet and how to get started with it'},ABOUTUS:{pageTitle:'About Us',pageDescription:"Learn what makes Push Protocol tick... it's the team"},BRB:{pageTitle:'Billion Reasons to Build (BRB)',pageDescription:'Solve a Hard Problem from top global web3 projects and earn prize and recognition'},DOCS:{pageTitle:'Documentation Hub',pageDescription:'One stop shop for all your Push Protocol documentation needs'},BLOG:{pageTitle:'Push Blog',pageDescription:'Learn about the latest updates and news from Push Protocol'},BOOTCAMP:{pageTitle:'BRB Bootcamp Campaign',pageDescription:'BRB Bootcamp is the go-to place to learn every aspect of the web3 ecosystem from fundamentals to shipping your first project'}};

/***/ }),

/***/ 441068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ spaces)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(705260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(486025);
// EXTERNAL MODULE: ./src/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(384479);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(944404);
// EXTERNAL MODULE: ./src/api/index.ts
var api = __webpack_require__(222054);
// EXTERNAL MODULE: ./src/components/ImageHolder.tsx
var ImageHolder = __webpack_require__(728339);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./src/hooks/useMediaQuery.ts
var useMediaQuery = __webpack_require__(452005);
;// CONCATENATED MODULE: ./static/assets/website/spaces/mobile-space-background.webp
/* harmony default export */ const mobile_space_background = (__webpack_require__.p + "assets/images/mobile-space-background-5a3dce1dd4f41bc5fb623df581256b6e.webp");
;// CONCATENATED MODULE: ./static/assets/website/spaces/mobile-space-image.webp
/* harmony default export */ const mobile_space_image = (__webpack_require__.p + "assets/images/mobile-space-image-f89686dba715d18717e9dde9a8103b49.webp");
;// CONCATENATED MODULE: ./static/assets/website/spaces/space-background.webp
/* harmony default export */ const space_background = (__webpack_require__.p + "assets/images/space-background-80350263cca63b86f51ddea3632a5d1a.webp");
;// CONCATENATED MODULE: ./static/assets/website/spaces/space-image.webp
/* harmony default export */ const space_image = (__webpack_require__.p + "assets/images/space-image-b0223171ad6bc44f352ea6aeef3a5cb9.webp");
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/config/pageMeta.ts
var pageMeta = __webpack_require__(353760);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/pages/spaces.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */// React + Web3 Essentials
// External Components
// Internal Components
// Import Assets
// Internal Configs
const MESSAGES={SUCCESS:'Thanks for subscribing!',ERROR:'Something went wrong!',REPEAT:'Already subscribed!',INVALID:'Invalid Email!'};const validateEmail=email=>{const re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase());};const Spaces=()=>{const[isLoading,setIsLoading]=(0,react.useState)(false);const[emailSuccess,setEmailSuccess]=(0,react.useState)(false);const[emailError,setEmailError]=(0,react.useState)('');const isMobile=(0,useMediaQuery/* default */.A)(globals/* device */.jO.tablet);const joinWaitlist=async e=>{e.preventDefault();const formData=Object.fromEntries(new FormData(e.target));if(validateEmail(formData.email)){console.log(formData.email);try{var _getResponse$response,_getResponse$response2;setIsLoading(true);const getResponse=await (0,api/* subscribeToSpace */.mI)({email:formData.email});console.log(getResponse);if((getResponse===null||getResponse===void 0?void 0:getResponse.status)===201){console.log('Succesfully added to waitlist');setEmailSuccess(MESSAGES.SUCCESS);setEmailError('');}else if((getResponse===null||getResponse===void 0||(_getResponse$response=getResponse.response)===null||_getResponse$response===void 0?void 0:_getResponse$response.status)===500&&getResponse!==null&&getResponse!==void 0&&(_getResponse$response2=getResponse.response)!==null&&_getResponse$response2!==void 0&&(_getResponse$response2=_getResponse$response2.data)!==null&&_getResponse$response2!==void 0&&(_getResponse$response2=_getResponse$response2.error)!==null&&_getResponse$response2!==void 0&&(_getResponse$response2=_getResponse$response2.info)!==null&&_getResponse$response2!==void 0&&_getResponse$response2.includes('ER_DUP_ENTRY')){setEmailSuccess('');setEmailError(MESSAGES.REPEAT);}}catch(e){setEmailSuccess('');setEmailError(MESSAGES.ERROR);console.log('emailSent error: ',e);}finally{setIsLoading(false);}}else{setEmailSuccess('');setEmailError(MESSAGES.INVALID);}};const shootUpHandler=()=>{window.open('https://app.push.org/spaces');};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:pageMeta/* PageMeta */.t.SPACES.pageTitle,description:pageMeta/* PageMeta */.t.SPACES.pageDescription,showNavbar:"website",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Head/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:url",content:"https://push.org/spaces"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:type",content:"website"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:title",content:"Push | Spaces"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:description",content:"Explore the spaces feature in the Push dapp, where you can join live audio conversations, connect with experts, and engage with a diverse community. Dive into real-time discussions and expand your horizons on Push Spaces."}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:image",content:(0,useBaseUrl/* default */.A)((__webpack_require__(799969)/* ["default"] */ .A),{absolute:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:site",content:"@pushprotocol"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:title",content:"Push | Spaces"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"twitter:description",content:"Explore the spaces feature in the Push dapp, where you can join live audio conversations, connect with experts, and engage with a diverse community. Dive into real-time discussions and expand your horizons on Push Spaces."}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"twitter:image",content:(0,useBaseUrl/* default */.A)((__webpack_require__(799969)/* ["default"] */ .A),{absolute:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify({'@context':'https://schema.org/','@type':'Organization',name:'Push Protocol',description:'The Communication Protocol of Web3',url:'https://push.org',logo:'/assets/website/favicon.ico',sameAs:['https://twitter.com/pushprotocol','https://www.linkedin.com/company/push-protocol/mycompany/']})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SpaceWrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemV */.y8,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(SpaceText,{children:["Unlock new ",isMobile&&/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})," dimensions in your ",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})," web3 journey."]}),/*#__PURE__*/(0,jsx_runtime.jsx)(SpaceSubText,{children:"Join the conversation on Push Spaces"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Box,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ShootUp,{onClick:shootUpHandler,children:"Shoot Up Now!"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(SpaceImageHolder,{isMobile:isMobile,children:[!isMobile&&/*#__PURE__*/(0,jsx_runtime.jsx)(MemberImage,{className:"figureSvg",src:space_image,srcSet:space_image,alt:'Space Image',title:"Space Image",width:"100%",height:"100%"}),isMobile&&/*#__PURE__*/(0,jsx_runtime.jsx)(MemberImage,{className:"figureSvg",src:mobile_space_image,srcSet:mobile_space_image,alt:'Space Image',title:"Space Image",width:"100%",height:"100%"})]})]})})]});};const SpaceWrapper=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* ItemV */.y8).withConfig({displayName:"spaces__SpaceWrapper",componentId:"sc-4kxtvr-0"})(["min-height:100vh;width:100vw;background-image:url(",");background-position:center;background-repeat:no-repeat;background-size:cover;"],props=>props.isMobile?mobile_space_background:space_background);const SpaceText=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"spaces__SpaceText",componentId:"sc-4kxtvr-1"})(["margin:280px 0 0 0;color:#fff;text-align:center;font-family:Strawford;font-size:68px;font-style:normal;font-weight:700;line-height:110%;letter-spacing:-2.04px;margin-top:208px;@media ","{font-size:36px;margin-top:138px;}"],globals/* device */.jO.tablet);const MemberImage=(0,styled_components_browser_esm/* default */.Ay)(ImageHolder/* default */.A).withConfig({displayName:"spaces__MemberImage",componentId:"sc-4kxtvr-2"})([""]);const SpaceSubText=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"spaces__SpaceSubText",componentId:"sc-4kxtvr-3"})(["color:#fff;text-align:center;font-family:Strawford;font-size:32px;font-style:normal;font-weight:400;line-height:142%;letter-spacing:-0.96px;margin-top:25px;@media ","{font-size:18px;margin-top:20px;}"],globals/* device */.jO.tablet);const SpaceImageHolder=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"spaces__SpaceImageHolder",componentId:"sc-4kxtvr-4"})(["width:892px;margin:96px auto 0 auto;@media ","{width:100%;margin:59px auto 0 auto;}"],globals/* device */.jO.tablet);// input button
const Box=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"spaces__Box",componentId:"sc-4kxtvr-5"})(["width:600px;display:flex;flex-direction:column;margin:28px auto 0 auto;& span.msg{font-weight:300;line-height:138.5%;margin-top:12px;spacing:-0.03em;}@media ","{width:90%;}"],globals/* device */.jO.tablet);const Wrapper=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"spaces__Wrapper",componentId:"sc-4kxtvr-6"})(["width:100%;display:flex;justify-content:center;"]);const ShootUp=styled_components_browser_esm/* default */.Ay.button.withConfig({displayName:"spaces__ShootUp",componentId:"sc-4kxtvr-7"})(["width:177px;padding:14px 32px;border:0;font-size:16px;border-radius:16px;background:#dd44b9;color:#ffff;cursor:pointer;"]);const MaskInput=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"spaces__MaskInput",componentId:"sc-4kxtvr-8"})(["position:absolute;background:#fff;top:0;left:0;right:0;bottom:0;border-radius:21px;opacity:0.4;z-index:10;"]);/* harmony default export */ const spaces = (Spaces);

/***/ }),

/***/ 799969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/spacespreview-a4efb8da3de94a8e2512d177ca3b2665.png");

/***/ })

}]);