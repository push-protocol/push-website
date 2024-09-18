(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[84813],{

/***/ 856977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hK: () => (/* binding */ Spacer),
/* harmony export */   n9: () => (/* binding */ Date),
/* harmony export */   uR: () => (/* binding */ ReadingTime)
/* harmony export */ });
/* unused harmony export useReadingTimePlural */
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(853465);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(721312);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(795093);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474848);
function useReadingTimePlural(){const{selectMessage}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .usePluralForm */ .W)();return readingTimeFloat=>{const readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* .translate */ .T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime}));};}function Spacer(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:' · '});}function ReadingTime(_ref){let{readingTime}=_ref;const readingTimePlural=useReadingTimePlural();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:readingTimePlural(readingTime)});}function Date(_ref2){let{date,formattedDate,mr}=_ref2;var year=moment__WEBPACK_IMPORTED_MODULE_2___default()().year();const isPresentYear=formattedDate===null||formattedDate===void 0?void 0:formattedDate.includes(year);const newDate=moment__WEBPACK_IMPORTED_MODULE_2___default()(formattedDate).format(!isPresentYear?'MMM DD,  YYYY':'MMM DD');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("time",{style:{marginRight:mr},dateTime:date,itemProp:"datePublished",children:newDate});}

/***/ }),

/***/ 159037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ SPINNER_TYPE),
  A: () => (/* binding */ Spinner)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(944404);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
;// CONCATENATED MODULE: ./static/assets/src/components/reusables/spinners/checkmark.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const SvgCheckmark = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", _extends({
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M19.75 0A19.75 19.75 0 1 0 39.5 19.75 19.788 19.788 0 0 0 19.75 0Zm9.4 16.294L18.022 26.928c-.288.271-.669.42-1.064.418a1.462 1.462 0 0 1-1.044-.418l-5.564-5.317a1.52 1.52 0 1 1 2.089-2.203l4.52 4.311 10.102-9.628a1.52 1.52 0 0 1 2.09 2.203Z",
    fill: "#30CC8B"
  })));
};
/* harmony default export */ const checkmark = (SvgCheckmark);
;// CONCATENATED MODULE: ./static/assets/src/components/reusables/spinners/error.svg
var error_path;
function error_extends() { return error_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, error_extends.apply(null, arguments); }

const SvgError = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", error_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    style: {
      enableBackground: "new 0 0 40 40"
    },
    xmlSpace: "preserve",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, error_path || (error_path = /*#__PURE__*/react.createElement("path", {
    d: "M20 .5c-3.9 0-7.6 1.1-10.8 3.3C6 5.9 3.5 9 2 12.5.5 16.1.1 20 .9 23.8c.8 3.8 2.6 7.3 5.3 10 2.7 2.7 6.2 4.6 10 5.3 3.8.8 7.7.4 11.3-1.1 3.6-1.5 6.6-4 8.8-7.2 2.1-3.2 3.3-7 3.3-10.8 0-5.2-2.1-10.1-5.7-13.8C30.1 2.6 25.2.5 20 .5zM18.5 11c0-.4.2-.8.4-1.1.3-.3.7-.4 1.1-.4s.8.2 1.1.4c.3.3.4.7.4 1.1v10.5c0 .4-.2.8-.4 1.1s-.7.4-1.1.4-.8-.2-1.1-.4c-.3-.3-.4-.7-.4-1.1V11zM20 30.5c-.4 0-.9-.1-1.2-.4s-.7-.6-.8-1c-.2-.4-.2-.9-.1-1.3s.3-.8.6-1.2c.3-.3.7-.5 1.2-.6.4-.1.9 0 1.3.1.4.2.8.5 1 .8s.4.8.4 1.2c0 .6-.2 1.2-.7 1.6-.5.6-1.1.8-1.7.8z",
    fill: "#E93636"
  })));
};
/* harmony default export */ const error = (SvgError);
;// CONCATENATED MODULE: ./static/assets/src/components/reusables/spinners/spinner.svg
var spinner_path;
function spinner_extends() { return spinner_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, spinner_extends.apply(null, arguments); }

const SvgSpinner = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", spinner_extends({
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, spinner_path || (spinner_path = /*#__PURE__*/react.createElement("path", {
    d: "M20.759 5.19v5.19M31.77 9.747l-3.665 3.665M36.327 20.759h-5.19M31.77 31.77l-3.665-3.665M20.759 36.327v-5.19M9.747 31.77l3.665-3.665M5.19 20.759h5.19M9.747 9.747l3.665 3.665",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
/* harmony default export */ const spinner = (SvgSpinner);
;// CONCATENATED MODULE: ./static/assets/src/components/reusables/spinners/warning.svg
var warning_path;
function warning_extends() { return warning_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, warning_extends.apply(null, arguments); }

const SvgWarning = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", warning_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40",
    style: {
      enableBackground: "new 0 0 40 40"
    },
    xmlSpace: "preserve",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, warning_path || (warning_path = /*#__PURE__*/react.createElement("path", {
    d: "M39.1 31.2 23.7 4.6c-.4-.6-.9-1.2-1.5-1.5-.6-.4-1.4-.6-2.1-.6s-1.5.2-2.1.6-1.2.9-1.5 1.5L1 31.2c-.4.6-.6 1.4-.6 2.1s.2 1.5.6 2.1.9 1.2 1.5 1.5c.6.4 1.4.6 2.1.6h30.8c.7 0 1.5-.2 2.1-.6.6-.4 1.2-.9 1.5-1.5.4-.6.6-1.4.6-2.1.1-.7-.1-1.4-.5-2.1zM18.7 16.5c0-.4.1-.7.4-1s.6-.4 1-.4.7.1 1 .4c.3.3.4.6.4 1v7c0 .4-.1.7-.4 1s-.6.4-1 .4-.7-.1-1-.4-.4-.6-.4-1v-7zm1.4 15.4c-.4 0-.8-.1-1.2-.4-.3-.2-.6-.6-.8-.9-.2-.4-.2-.8-.1-1.2.1-.4.3-.8.6-1.1.3-.3.7-.5 1.1-.6s.8 0 1.2.1c.4.2.7.4.9.8.2.3.4.8.4 1.2 0 .6-.2 1.1-.6 1.5-.4.4-1 .6-1.5.6z",
    fill: "#E2B71D"
  })));
};
/* harmony default export */ const warning = (SvgWarning);
;// CONCATENATED MODULE: ./static/assets/src/components/reusables/spinners/whitelist.svg
var _style, _defs, _defs2, _defs3, _defs4, _defs5, _defs6, _defs7, _defs8, _defs9, _defs10, _defs11, _defs12, _defs13, _defs14, _defs15, _defs16, _defs17, _defs18, _defs19, _defs20, _defs21, _defs22, _defs23, _defs24, _defs25, _defs26, _defs27, _defs28, _defs29, _defs30, _defs31, _defs32, _defs33, _defs34, _defs35, _defs36, _defs37, _defs38, _defs39, _defs40, _defs41, _defs42, _defs43, _defs44, _defs45, _defs46, whitelist_path, _path2, _path3, _path4, _path5, _ellipse, _ellipse2;
function whitelist_extends() { return whitelist_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, whitelist_extends.apply(null, arguments); }

const SvgWhitelist = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", whitelist_extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: 0,
    y: 0,
    viewBox: "0 0 40 40",
    style: {
      enableBackground: "new 0 0 40 40"
    },
    xmlSpace: "preserve",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _style || (_style = /*#__PURE__*/react.createElement("style", null, ".st46{fill:#1d1b2b}.st47{fill:#fff}")), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_1_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018918372174887251900000015824477832139132297_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_1_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000018918372174887251900000015824477832139132297_)",
      fill: "#fff"
    },
    d: "M0 38.8h40v2.3H0z"
  }), _defs2 || (_defs2 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000061450589948466646510000013504075378911607728_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000055682935648448171650000016603174337301644678_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000061450589948466646510000013504075378911607728_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000055682935648448171650000016603174337301644678_)",
      fill: "#fff"
    },
    d: "M0 37.9h40v.9H0z"
  }), _defs3 || (_defs3 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163034462217135671110000003281837544710597775_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075864108932851334380000002986285549391122838_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163034462217135671110000003281837544710597775_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000075864108932851334380000002986285549391122838_)",
      fill: "#fffeff"
    },
    d: "M0 37h40v.9H0z"
  }), _defs4 || (_defs4 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000006692677491398917330000017482009431168088462_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000003075014919243425030000011766347674950723261_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000006692677491398917330000017482009431168088462_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000003075014919243425030000011766347674950723261_)",
      fill: "#fffdfe"
    },
    d: "M0 36.2h40v.9H0z"
  }), _defs5 || (_defs5 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000141442324025079556200000011100813681160334496_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000012438998958180247690000011278953616519101884_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000141442324025079556200000011100813681160334496_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000012438998958180247690000011278953616519101884_)",
      fill: "#fffcfe"
    },
    d: "M0 35.3h40v.9H0z"
  }), _defs6 || (_defs6 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000011004148776498408480000017310563633542503075_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000144330688052182505440000016428669231102353283_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000011004148776498408480000017310563633542503075_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000144330688052182505440000016428669231102353283_)",
      fill: "#fffbfd"
    },
    d: "M0 34.4h40v.9H0z"
  }), _defs7 || (_defs7 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000155850701760738328060000010413364524085188518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000048473522845518449670000008113787965347178399_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000155850701760738328060000010413364524085188518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000048473522845518449670000008113787965347178399_)",
      fill: "#fffafd"
    },
    d: "M0 33.6h40v.9H0z"
  }), _defs8 || (_defs8 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000137131541068540407790000016247830109529001619_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000108272877519578440370000001025939932002251165_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000137131541068540407790000016247830109529001619_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000108272877519578440370000001025939932002251165_)",
      fill: "#fff9fd"
    },
    d: "M0 32.7h40v.9H0z"
  }), _defs9 || (_defs9 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000109720934535134491310000011648451755277933958_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000162318190728897410240000002855588279128880782_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000109720934535134491310000011648451755277933958_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000162318190728897410240000002855588279128880782_)",
      fill: "#fff8fc"
    },
    d: "M0 31.8h40v.9H0z"
  }), _defs10 || (_defs10 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000096747640785436913280000001512168473767242389_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000063592068306203697200000018347425271494145700_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000096747640785436913280000001512168473767242389_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000063592068306203697200000018347425271494145700_)",
      fill: "#fff7fc"
    },
    d: "M0 31h40v.9H0z"
  }), _defs11 || (_defs11 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000013157299449276695760000003349513374129929912_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160167297034968768660000008956667901020093587_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000013157299449276695760000003349513374129929912_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000160167297034968768660000008956667901020093587_)",
      fill: "#fff6fc"
    },
    d: "M0 30.1h40v.9H0z"
  }), _defs12 || (_defs12 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000072961236756052102270000006627217966794170288_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000061451857290518586430000006541355441525342346_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000072961236756052102270000006627217966794170288_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000061451857290518586430000006541355441525342346_)",
      fill: "#fff5fb"
    },
    d: "M0 29.2h40v.9H0z"
  }), _defs13 || (_defs13 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000120542686423071063450000000505450966208064155_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000133528992170648054940000016960040424049888420_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000120542686423071063450000000505450966208064155_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000133528992170648054940000016960040424049888420_)",
      fill: "#fff4fb"
    },
    d: "M0 28.4h40v.9H0z"
  }), _defs14 || (_defs14 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000008119827539101434540000000687617348997178507_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000064331356223243395160000010623984466305916805_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000008119827539101434540000000687617348997178507_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000064331356223243395160000010623984466305916805_)",
      fill: "#fff3fa"
    },
    d: "M0 27.5h40v.9H0z"
  }), _defs15 || (_defs15 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000171682524410186990790000005811129307630537647_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000078763078787120445770000007001818294259582600_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000171682524410186990790000005811129307630537647_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000078763078787120445770000007001818294259582600_)",
      fill: "#fff2fa"
    },
    d: "M0 26.6h40v.9H0z"
  }), _defs16 || (_defs16 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000065050872124673854550000011491961441940586880_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000057131134804002396060000009557613862229203384_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000065050872124673854550000011491961441940586880_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000057131134804002396060000009557613862229203384_)",
      fill: "#fff1fa"
    },
    d: "M0 25.8h40v.9H0z"
  }), _defs17 || (_defs17 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000087385040504023843390000018418788957200632503_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000076563080506624790950000010371028636572745404_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000087385040504023843390000018418788957200632503_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000076563080506624790950000010371028636572745404_)",
      fill: "#fff0f9"
    },
    d: "M0 24.9h40v.9H0z"
  }), _defs18 || (_defs18 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000101804543001505160640000015307778896616661144_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000013899847274804831830000000233545883125910147_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000101804543001505160640000015307778896616661144_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000013899847274804831830000000233545883125910147_)",
      fill: "#ffeff9"
    },
    d: "M0 24h40v.9H0z"
  }), _defs19 || (_defs19 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000117652643455354779510000000732370446844200352_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000155129756036335704530000000175185976145107875_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000117652643455354779510000000732370446844200352_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000155129756036335704530000000175185976145107875_)",
      fill: "#ffeef9"
    },
    d: "M0 23.1h40v.9H0z"
  }), _defs20 || (_defs20 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176745914730401483050000012806336722484400315_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000060733723242332595490000001634423417351642253_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176745914730401483050000012806336722484400315_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000060733723242332595490000001634423417351642253_)",
      fill: "#ffedf8"
    },
    d: "M0 22.3h40v.9H0z"
  }), _defs21 || (_defs21 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040550745487777584420000000758410058113256618_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000091712846254972437900000013214413499904591794_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040550745487777584420000000758410058113256618_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000091712846254972437900000013214413499904591794_)",
      fill: "#ffecf8"
    },
    d: "M0 21.4h40v.9H0z"
  }), _defs22 || (_defs22 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000050622890411462128450000006918849132186199463_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000134956723128218873730000014747212991663680666_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000050622890411462128450000006918849132186199463_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000134956723128218873730000014747212991663680666_)",
      fill: "#ffebf7"
    },
    d: "M0 20.5h40v.9H0z"
  }), _defs23 || (_defs23 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000042013878504789517810000002886984029806200970_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018227916600075664650000004189574246866099331_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000042013878504789517810000002886984029806200970_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000018227916600075664650000004189574246866099331_)",
      fill: "#ffeaf7"
    },
    d: "M0 19.7h40v.9H0z"
  }), _defs24 || (_defs24 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000016072037337204008790000009927608052063207089_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000150807696221521878140000004991997934014485179_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000016072037337204008790000009927608052063207089_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000150807696221521878140000004991997934014485179_)",
      fill: "#ffe9f7"
    },
    d: "M0 18.8h40v.9H0z"
  }), _defs25 || (_defs25 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000084514207464486415670000003310696959034258854_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000058578791989943792610000012383172789239653264_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000084514207464486415670000003310696959034258854_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000058578791989943792610000012383172789239653264_)",
      fill: "#ffe8f6"
    },
    d: "M0 17.9h40v.9H0z"
  }), _defs26 || (_defs26 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168111191864700588090000007796528425639013510_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000070078952479914823790000004488696996978778007_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168111191864700588090000007796528425639013510_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000070078952479914823790000004488696996978778007_)",
      fill: "#ffe7f6"
    },
    d: "M0 17.1h40v.9H0z"
  }), _defs27 || (_defs27 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000075130085298569226120000004569212675584808839_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000047766726030502953150000010023485457926448316_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000075130085298569226120000004569212675584808839_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000047766726030502953150000010023485457926448316_)",
      fill: "#ffe6f5"
    },
    d: "M0 16.2h40v.9H0z"
  }), _defs28 || (_defs28 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168116181925040745410000002903075994739185055_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000043452126976694784750000012308186940523659704_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168116181925040745410000002903075994739185055_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000043452126976694784750000012308186940523659704_)",
      fill: "#ffe5f5"
    },
    d: "M0 15.3h40v.9H0z"
  }), _defs29 || (_defs29 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000177448109613987390960000011019027865223704209_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000021812416521141934700000002333976695276009393_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000177448109613987390960000011019027865223704209_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000021812416521141934700000002333976695276009393_)",
      fill: "#ffe4f5"
    },
    d: "M0 14.5h40v.9H0z"
  }), _defs30 || (_defs30 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000111151405705220863100000001025211950351930558_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059989357482531445890000017046315160651017109_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000111151405705220863100000001025211950351930558_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000059989357482531445890000017046315160651017109_)",
      fill: "#ffe2f4"
    },
    d: "M0 13.6h40v.9H0z"
  }), _defs31 || (_defs31 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000035520961028888308890000003278063309023780273_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160892813641910849680000011144828949471446192_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000035520961028888308890000003278063309023780273_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000160892813641910849680000011144828949471446192_)",
      fill: "#ffe1f4"
    },
    d: "M0 12.7h40v.9H0z"
  }), _defs32 || (_defs32 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000140728387563177599840000012730772879254337939_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000037688082872228396440000001000391440606982552_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000140728387563177599840000012730772879254337939_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000037688082872228396440000001000391440606982552_)",
      fill: "#ffe0f4"
    },
    d: "M0 11.9h40v.9H0z"
  }), _defs33 || (_defs33 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000062902141774892129720000006726931906645007260_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000053539272798156628880000017065418397300399770_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000062902141774892129720000006726931906645007260_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000053539272798156628880000017065418397300399770_)",
      fill: "#ffdff3"
    },
    d: "M0 11h40v.9H0z"
  }), _defs34 || (_defs34 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040547372916521375320000005890058930478112652_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160153280092721671810000004859756486784431748_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040547372916521375320000005890058930478112652_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000160153280092721671810000004859756486784431748_)",
      fill: "#ffdef3"
    },
    d: "M0 10.1h40v.9H0z"
  }), _defs35 || (_defs35 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163059607669502062840000017743019053605817518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000151511471683653591520000015804692774727439535_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163059607669502062840000017743019053605817518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000151511471683653591520000015804692774727439535_)",
      fill: "#ffddf2"
    },
    d: "M0 9.3h40v.9H0z"
  }), _defs36 || (_defs36 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000144318015516876581950000010115243927339900334_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000132053964521438257980000004376603876963634310_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000144318015516876581950000010115243927339900334_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000132053964521438257980000004376603876963634310_)",
      fill: "#ffdcf2"
    },
    d: "M0 8.4h40v.9H0z"
  }), _defs37 || (_defs37 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000069375009007884915410000012084705223235533990_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000027591519312448932060000002674521480899297195_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000069375009007884915410000012084705223235533990_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000027591519312448932060000002674521480899297195_)",
      fill: "#ffdbf2"
    },
    d: "M0 7.5h40v.9H0z"
  }), _defs38 || (_defs38 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000097466014070156734330000018119008136695687863_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000083079768499160939580000002773316710753211056_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000097466014070156734330000018119008136695687863_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000083079768499160939580000002773316710753211056_)",
      fill: "#ffdaf1"
    },
    d: "M0 6.6h40v.9H0z"
  }), _defs39 || (_defs39 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000058584356311605613920000016150045757713579408_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075845908238826625400000012510611160665630597_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000058584356311605613920000016150045757713579408_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000075845908238826625400000012510611160665630597_)",
      fill: "#ffd9f1"
    },
    d: "M0 5.8h40v.9H0z"
  }), _defs40 || (_defs40 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000047757054525194763150000002456340682455169461_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000051348588743116802470000001633313117524182157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000047757054525194763150000002456340682455169461_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000051348588743116802470000001633313117524182157_)",
      fill: "#ffd8f0"
    },
    d: "M0 4.9h40v.9H0z"
  }), _defs41 || (_defs41 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051382489426439920660000003018019370891297153_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059293702624119336140000001360157132647433360_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051382489426439920660000003018019370891297153_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000059293702624119336140000001360157132647433360_)",
      fill: "#ffd7f0"
    },
    d: "M0 4h40v.9H0z"
  }), _defs42 || (_defs42 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000170268887129915914900000010352499974422115500_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000123436790536674588720000012719220988143637644_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000170268887129915914900000010352499974422115500_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000123436790536674588720000012719220988143637644_)",
      fill: "#ffd6f0"
    },
    d: "M0 3.2h40v.9H0z"
  }), _defs43 || (_defs43 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000003091413043892447630000001266546031989514142_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000103978116915317622890000010407028949154571157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000003091413043892447630000001266546031989514142_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000103978116915317622890000010407028949154571157_)",
      fill: "#ffd5ef"
    },
    d: "M0 2.3h40v.9H0z"
  }), _defs44 || (_defs44 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176737943936596983000000007461901653307844785_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000168110594437402215340000007824184069559080593_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176737943936596983000000007461901653307844785_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000168110594437402215340000007824184069559080593_)",
      fill: "#ffd4ef"
    },
    d: "M0 1.4h40v.9H0z"
  }), _defs45 || (_defs45 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000018232783389487562290000008517843368293322889_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000045582657913821574560000008704575164935371400_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000018232783389487562290000008517843368293322889_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000045582657913821574560000008704575164935371400_)",
      fill: "#ffd3ef"
    },
    d: "M0 .6h40v.9H0z"
  }), _defs46 || (_defs46 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051377637767468729150000006262176937780331137_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2z"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000178168343591342257400000000584671388335673478_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051377637767468729150000006262176937780331137_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    style: {
      clipPath: "url(#SVGID_00000178168343591342257400000000584671388335673478_)",
      fill: "#ffd2ee"
    },
    d: "M0 .2h40v.4H0z"
  }), whitelist_path || (whitelist_path = /*#__PURE__*/react.createElement("path", {
    className: "st46",
    d: "M20 40c-6.3 0-12.6-1.3-18.5-3.9-.6-.3-1.3-.6-1.4-1.4-.2-.9.4-1.5 1-2.1l.5-.5c.8-1 1-2.5 1-3.9.1-1.8.1-3.6.1-5.5v-4.6c.1-3.7.9-7 2.3-9.7-.1-.1 0-.3.1-.5 1.2-2.2 3-4.1 5.2-5.5C13.8.2 18.3 0 20.1 0c3.4 0 8.6 1.1 11.8 4.4 1.8 1.8 3.3 4.1 4.2 6.5 1.3 3.6 1.4 7.6 1.4 11.4v2.8c0 2.7-.1 5.5 1.5 7.4l.1.2c.5.6 1.1 1.4.8 2.2-.2.6-.7.9-1.2 1.1-5.9 2.7-12.3 4-18.7 4zM20.1.4c-1.7 0-6.1.2-9.5 2.4C8.4 4.2 6.7 6 5.5 8.2c-.1.1-.2.3-.3.5-1.4 2.6-2.1 5.9-2.2 9.5v4.5c0 1.9 0 3.6-.1 5.5-.1 1.5-.2 3.1-1.1 4.2-.1.2-.3.4-.5.5-.5.6-1 1.1-.9 1.7.1.5.7.8 1.2 1.1 11.7 5.2 25.2 5.2 36.9-.1.4-.2.9-.4 1-.8.2-.6-.3-1.3-.8-1.8l-.1-.2C37 30.7 37 27.9 37 25.1v-2.8c0-3.8-.1-7.7-1.4-11.3-.9-2.4-2.3-4.6-4.1-6.3-3-3.2-8.1-4.3-11.4-4.3z"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    className: "st46",
    d: "M21.9 27c-.1 0-.3-.1-.3-.2 0-.5 0-1.2-.2-1.8-.2-.6-.7-.9-1.4-.9s-1.2.3-1.4.9c-.2.6-.2 1.3-.2 1.8 0 .1-.1.2-.3.2-.1 0-.3-.1-.3-.2 0-.5 0-1.3.2-1.9.3-.8 1-1.2 1.9-1.2s1.6.4 1.9 1.2c.2.6.2 1.4.2 1.9.2.1.1.2-.1.2zM14.5 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3z"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    className: "st46",
    d: "M13.3 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8zm0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4zM27.6 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3z"
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    className: "st46",
    d: "M26.4 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8zm0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4z"
  })), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
    className: "st47",
    d: "M13.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.7-1.7-1.4-1.7zM26.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.6-1.7-1.4-1.7z"
  })), _ellipse || (_ellipse = /*#__PURE__*/react.createElement("ellipse", {
    className: "st47",
    cx: 14.6,
    cy: 20.5,
    rx: 0.4,
    ry: 0.5
  })), _ellipse2 || (_ellipse2 = /*#__PURE__*/react.createElement("ellipse", {
    className: "st47",
    cx: 27.7,
    cy: 20.5,
    rx: 0.4,
    ry: 0.5
  })));
};
/* harmony default export */ const whitelist = (SvgWhitelist);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/components/reusables/spinners/SpinnerUnit.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types *//* eslint-disable */// React + Web3 Essentials
// External Packages
// Internal Compoonents
// Import Assets
// Internal Configs
// Interfaces
// Constants
const SPINNER_TYPE={PROCESSING:1,WARNING:2,ERROR:3,COMPLETED:4,WHITELIST:5};// Create Spinner
function Spinner(_ref){let{size=42,color=globals/* default */.Ay.COLORS.PRIMARY_COLOR,type=SPINNER_TYPE.PROCESSING}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(SpinLoader,{flex:"initial",alignSelf:"center",color:color,width:`${size}px`,completed:type==SPINNER_TYPE.PROCESSING?false:true,children:[type==SPINNER_TYPE.PROCESSING&&/*#__PURE__*/(0,jsx_runtime.jsx)(spinner,{}),type==SPINNER_TYPE.ERROR&&/*#__PURE__*/(0,jsx_runtime.jsx)(error,{}),type==SPINNER_TYPE.WARNING&&/*#__PURE__*/(0,jsx_runtime.jsx)(warning,{}),type==SPINNER_TYPE.COMPLETED&&/*#__PURE__*/(0,jsx_runtime.jsx)(checkmark,{}),type==SPINNER_TYPE.WHITELIST&&/*#__PURE__*/(0,jsx_runtime.jsx)(whitelist,{})]});}const spinAnimation=(0,styled_components_browser_esm/* keyframes */.i7)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);const SpinLoader=(0,styled_components_browser_esm/* default */.Ay)(SharedStyling/* ItemV */.y8).withConfig({displayName:"SpinnerUnit__SpinLoader",componentId:"sc-6wzamy-0"})(["color:",";",""],props=>props.color,props=>!props.completed&&(0,styled_components_browser_esm/* css */.AH)(["animation-name:",";animation-duration:2500ms;animation-iteration-count:infinite;animation-timing-function:linear;"],spinAnimation));

/***/ }),

/***/ 353760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PageMeta)
/* harmony export */ });
const PageMeta={HOME:{pageTitle:'Home',pageDescription:'Homepage of Push Protocol - The communication protocol of Web3'},TOS:{pageTitle:'Terms of Service',pageDescription:'Terms of Service of Push Protocol'},PRIVACY:{pageTitle:'Privacy Policy',pageDescription:'Privacy Policy of Push Protocol'},PRIVACYFORMOBILE:{pageTitle:'Mobile Apps Privacy Policy',pageDescription:'Mobile Apps Privacy Policy of Push Protocol'},FAQS:{pageTitle:'FAQ',pageDescription:'Frequently Asked Questions of Push Protocol'},FRENS:{pageTitle:'Frens',pageDescription:'Explore integrations done by our frens'},SPACES:{pageTitle:'Spaces',pageDescription:"Explore Push Spaces and how to get started with it's integration"},CHEAT:{pageTitle:'Cheat Sheet',pageDescription:'Explore Push Cheat Sheet and how to get started with it'},ABOUTUS:{pageTitle:'About Us',pageDescription:"Learn what makes Push Protocol tick... it's the team"},BRB:{pageTitle:'Billion Reasons to Build (BRB)',pageDescription:'Solve a Hard Problem from top global web3 projects and earn prize and recognition'},DOCS:{pageTitle:'Documentation Hub',pageDescription:'One stop shop for all your Push Protocol documentation needs'},BLOG:{pageTitle:'Push Blog',pageDescription:'Learn about the latest updates and news from Push Protocol'},BOOTCAMP:{pageTitle:'BRB Bootcamp Campaign',pageDescription:'BRB Bootcamp is the go-to place to learn every aspect of the web3 ecosystem from fundamentals to shipping your first project'}};

/***/ }),

/***/ 729520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(705260);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(956347);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(384479);
/* harmony import */ var _theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(218256);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(944404);
/* harmony import */ var _site_src_config_pageMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(353760);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){const{sidebar,toc,children}=props;const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_6__/* .useLocation */ .zy)();const pathname=location.pathname;const isBlogMainPage=pathname.includes('/page/')||pathname=='/blog/'||pathname=='/blog';return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{title:isBlogMainPage?_site_src_config_pageMeta__WEBPACK_IMPORTED_MODULE_4__/* .PageMeta */ .t.BLOG.pageTitle:'',description:isBlogMainPage?_site_src_config_pageMeta__WEBPACK_IMPORTED_MODULE_4__/* .PageMeta */ .t.BLOG.pageDescription:'',children:[isBlogMainPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{property:"og:url",content:"https://push.org/blog"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{property:"og:type",content:"website"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{property:"og:title",content:"Push Blog"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{property:"og:description",content:"Discover the latest trends, insights, and tips about Push Protocol in our blog! Stay informed and inspired with our expert articles, guides, and resources."}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{property:"og:image",content:(__webpack_require__(381418)/* ["default"] */ .A)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{name:"twitter:site",content:"@pushprotocol"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{name:"twitter:title",content:"Push Blog"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{name:"twitter:description",content:"Discover the latest trends, insights, and tips about Push Protocol in our blog! Stay informed and inspired with our expert articles, guides, and resources."}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta",{name:"twitter:image"// content={useBaseUrl(
//   require("/static/assets/previews/blogpreview.png").default,
//   { absolute: true },
// )}
,content:(__webpack_require__(381418)/* ["default"] */ .A)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("script",{type:"application/ld+json",children:JSON.stringify({'@context':'https://schema.org/','@type':'Organization',name:'Push Protocol',description:'The Communication Protocol of Web3',url:'https://push.org',logo:'/assets/website/favicon.ico',sameAs:['https://twitter.com/pushprotocol','https://www.linkedin.com/company/push-protocol/mycompany/']})})]}),toc?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(BlogItem,{className:"",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TOC,{className:""}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main",{className:"mainItem",itemScope:true,itemType:"http://schema.org/Blog",children:children}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TOC,{className:"",children:toc})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{sidebar:sidebar}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("main",{className:"mainItem",itemScope:true,itemType:"http://schema.org/Blog",children:children})]})]});}const BlogItem=styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.div.withConfig({displayName:"BlogLayout__BlogItem",componentId:"sc-1b3qbvb-0"})(["max-width:100vw !important;@media (min-width:1200px){display:flex;flex-direction:row;justify-content:space-between;max-width:85vw !important;min-width:85vw !important;margin:0 auto;& main{margin:0 auto;}}"]);const TOC=styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay.div.withConfig({displayName:"BlogLayout__TOC",componentId:"sc-1b3qbvb-1"})(["display:none;@media (min-width:1200px){width:250px;display:block;margin-top:100px;}"]);

/***/ }),

/***/ 603345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogListPaginator)
/* harmony export */ });
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(721312);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880222);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(944404);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Internal Configs
function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(NavItem// className="pagination-nav"
,{"aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* .translate */ .T)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'}),children:[previousPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{permalink:previousPage,title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),nextPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{permalink:nextPage,title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:true})]});}const NavItem=styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.nav.withConfig({displayName:"BlogListPaginator__NavItem",componentId:"sc-1vltjzo-0"})(["margin:0 auto 72px auto;display:flex;flex-direction:row;gap:32px;justify-content:center;width:1120px !important;@media ","{width:100% !important;}@media ","{grid-template-columns:repeat(1,minmax(0,1fr));}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_3__/* .device */ .jO.laptopL,_site_src_config_globals__WEBPACK_IMPORTED_MODULE_3__/* .device */ .jO.tablet);

/***/ }),

/***/ 128997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItemFooter)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(107131);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(361943);
// EXTERNAL MODULE: ./src/theme/TagsListInline/index.js
var TagsListInline = __webpack_require__(117290);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(721312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Footer/ReadMoreLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ReadMoreLabel(){return/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})});}function BlogPostItemFooterReadMoreLink(props){const{blogPostTitle,...linkProps}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{"aria-label":(0,Translate/* translate */.T)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title:blogPostTitle}),...linkProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ReadMoreLabel,{})});}
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"blogPostFooterDetailsFull":"blogPostFooterDetailsFull_Wr5y"});
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemFooter(){const{metadata,isBlogPostPage}=(0,blogPost/* useBlogPost */.e)();const{tags,title,editUrl,hasTruncateMarker}=metadata;// A post is truncated if it's in the "list view" and it has a truncate marker
const truncatedPost=!isBlogPostPage&&hasTruncateMarker;const tagsExists=tags.length>0;const renderFooter=tagsExists||truncatedPost||editUrl;if(!renderFooter){return null;}return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isBlogPostPage&&/*#__PURE__*/(0,jsx_runtime.jsxs)("footer",{className:(0,clsx_m["default"])('row docusaurus-mt-lg',isBlogPostPage&&styles_module.blogPostFooterDetailsFull),children:[tagsExists&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m["default"])('col',{'col--9':truncatedPost}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TagsListInline/* default */.A,{tags:tags})}),editUrl&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col margin-top--sm",children:/*#__PURE__*/(0,jsx_runtime.jsx)(EditThisPage/* default */.A,{editUrl:editUrl})}),truncatedPost&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m["default"])('col text--right',{'col--3':tagsExists}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink,{blogPostTitle:title,to:metadata===null||metadata===void 0?void 0:metadata.permalink})})]}),!isBlogPostPage&&truncatedPost&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink,{blogPostTitle:title,to:metadata===null||metadata===void 0?void 0:metadata.permalink})})]});}

/***/ }),

/***/ 247712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItemHeaderInfo)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(107131);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"container":"container_iJTo"});
// EXTERNAL MODULE: ./src/components/reusables/date.tsx
var reusables_date = __webpack_require__(856977);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// import moment from "moment";
function BlogPostItemHeaderInfo(_ref){let{className,morePosts}=_ref;const{metadata,isBlogPostPage}=(0,blogPost/* useBlogPost */.e)();const{date,formattedDate,readingTime}=metadata;if(morePosts){const blogDate=morePosts.date;const blogFormattedDate=morePosts.formattedDate;const blogReadingTime=morePosts.readingTime;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m["default"])(styles_module.container,!isBlogPostPage?'margin-vert--sm':'',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(reusables_date/* Date */.n9,{date:blogDate,formattedDate:blogFormattedDate}),typeof blogReadingTime!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(reusables_date/* Spacer */.hK,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(reusables_date/* ReadingTime */.uR,{readingTime:blogReadingTime})]})]});}else{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m["default"])(styles_module.container,!isBlogPostPage?'margin-vert--sm':'',className),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(reusables_date/* Date */.n9,{date:date,formattedDate:formattedDate}),typeof readingTime!=='undefined'&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(reusables_date/* Spacer */.hK,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(reusables_date/* ReadingTime */.uR,{readingTime:readingTime})]})]});}}

/***/ }),

/***/ 740375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItemHeader)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(107131);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"title":"title_xvU1"});
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(944404);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Internal Configs
function BlogPostItemHeaderTitle(_ref){let{className}=_ref;const{metadata,isBlogPostPage}=(0,blogPost/* useBlogPost */.e)();const{permalink,title}=metadata;const TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/(0,jsx_runtime.jsx)(TitleHeading,{className:(0,clsx_m["default"])(styles_module.title,className),itemProp:"headline",children:isBlogPostPage?/*#__PURE__*/(0,jsx_runtime.jsx)(PostTitle,{children:title}):/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{itemProp:"url",to:permalink,children:/*#__PURE__*/(0,jsx_runtime.jsx)(LinkText,{children:title})})});}const LinkText=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"Title__LinkText",componentId:"sc-56ahs6-0"})(["overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--ifm-color-primary-blog) !important;font-family:Strawford;font-size:25px;font-style:normal;font-weight:700;line-height:36px;&:hover{color:#dd44b9 !important;}"]);const PostTitle=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"Title__PostTitle",componentId:"sc-56ahs6-1"})(["color:var(--ifm-color-primary-blog) !important;font-family:Strawford;font-size:40px;font-style:normal;font-weight:700;line-height:55.5px;@media ","{font-size:25px;line-height:30px;}"],globals/* device */.jO.tablet);
// EXTERNAL MODULE: ./src/theme/BlogPostItem/Header/Info/index.js + 1 modules
var Info = __webpack_require__(247712);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/Author/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MaybeLink(props){if(props.href){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{...props});}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}function BlogPostItemHeaderAuthor(_ref){let{author,index}=_ref;const{name,title,url,imageURL,email}=author;const link=url||email&&`mailto:${email}`||undefined;return/*#__PURE__*/(0,jsx_runtime.jsxs)(AvatarDiv,{children:[imageURL&&/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeLink,{href:link,className:"avatar__photo-link",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Img,{src:imageURL,alt:name,itemProp:"image"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(AvatarItem,{children:[name&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{itemProp:"author",itemScope:true,itemType:"https://schema.org/Person",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"avatar__name",children:/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeLink,{href:link,itemProp:"url",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{itemProp:"name",children:name})})}),title&&/*#__PURE__*/(0,jsx_runtime.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:title})]}),index===0&&/*#__PURE__*/(0,jsx_runtime.jsx)(Info/* default */.A,{})]})]});}const AvatarItem=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"Author__AvatarItem",componentId:"sc-1kej64z-0"})(["display:flex;flex-direction:column;"]);const Img=styled_components_browser_esm/* default */.Ay.img.withConfig({displayName:"Author__Img",componentId:"sc-1kej64z-1"})(["width:56px;height:56px;border:var(--ifm-blog-avatar-border);border-radius:100%;background:white;"]);const AvatarDiv=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"Author__AvatarDiv",componentId:"sc-1kej64z-2"})(["display:flex;flex-direction:row;gap:16px;align-items:center;"]);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Authors_styles_module = ({"authorCol":"authorCol_q4o9","imageOnlyAuthorRow":"imageOnlyAuthorRow_lXe7","imageOnlyAuthorCol":"imageOnlyAuthorCol_cxD5"});
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/Authors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostItemHeaderAuthors(_ref){let{className}=_ref;const{metadata:{authors},assets}=(0,blogPost/* useBlogPost */.e)();const authorsCount=authors.length;if(authorsCount===0){return null;}const imageOnly=authors.every(_ref2=>{let{name}=_ref2;return!name;});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m["default"])('margin-top--md margin-bottom--sm',imageOnly?Authors_styles_module.imageOnlyAuthorRow:'row',className),children:authors.map((author,idx)=>{var _assets$authorsImageU;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m["default"])(!imageOnly&&'col col--6',imageOnly?Authors_styles_module.imageOnlyAuthorCol:Authors_styles_module.authorCol),children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderAuthor,{index:idx,author:{...author,// Handle author images using relative paths
imageURL:(_assets$authorsImageU=assets.authorsImageUrls[idx])!==null&&_assets$authorsImageU!==void 0?_assets$authorsImageU:author.imageURL}})},idx);})});}
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemHeader(_ref){let{list}=_ref;const{isBlogPostPage}=(0,blogPost/* useBlogPost */.e)();if(list){return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Info/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderTitle,{})]});}else{return/*#__PURE__*/(0,jsx_runtime.jsxs)("header",{children:[isBlogPostPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors,{}),!isBlogPostPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(Info/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemHeaderTitle,{})]});}}

/***/ }),

/***/ 282774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(107131);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(486025);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContainer(_ref){var _assets$image,_frontMatter$keywords;let{children,className}=_ref;const{frontMatter,assets,metadata:{description}}=(0,blogPost/* useBlogPost */.e)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.h)();const image=(_assets$image=assets.image)!==null&&_assets$image!==void 0?_assets$image:frontMatter.image;const keywords=(_frontMatter$keywords=frontMatter.keywords)!==null&&_frontMatter$keywords!==void 0?_frontMatter$keywords:[];return/*#__PURE__*/(0,jsx_runtime.jsxs)("article",{className:className,itemProp:"blogPost",itemScope:true,itemType:"https://schema.org/BlogPosting",children:[description&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{itemProp:"description",content:description}),image&&/*#__PURE__*/(0,jsx_runtime.jsx)("link",{itemProp:"image",href:withBaseUrl(image,{absolute:true})}),keywords.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{itemProp:"keywords",content:keywords.join(',')}),children]});}
// EXTERNAL MODULE: ./src/theme/BlogPostItem/Header/index.js + 5 modules
var Header = __webpack_require__(740375);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(270440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 13 modules
var MDXContent = __webpack_require__(803827);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItemContent(_ref){let{children,className}=_ref;const{isBlogPostPage}=(0,blogPost/* useBlogPost */.e)();return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?lib.blogPostContainerID:undefined,className:(0,clsx_m["default"])('markdown',className),itemProp:"articleBody",children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:children})});}
// EXTERNAL MODULE: ./src/theme/BlogPostItem/Footer/index.js + 2 modules
var Footer = __webpack_require__(128997);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(944404);
// EXTERNAL MODULE: ./src/hooks/useMediaQuery.ts
var useMediaQuery = __webpack_require__(452005);
// EXTERNAL MODULE: ./src/theme/BlogPostItems/index.js
var BlogPostItems = __webpack_require__(672852);
// EXTERNAL MODULE: ./src/theme/BlogPostPage/FooterItem.js
var FooterItem = __webpack_require__(736991);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
;// CONCATENATED MODULE: ./src/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Internal Configs
// apply a bottom margin in list view
function useContainerClassName(){const{isBlogPostPage}=(0,blogPost/* useBlogPost */.e)();const isMobile=(0,useMediaQuery/* default */.A)(globals/* device */.jO.tablet);return!isBlogPostPage&&!isMobile?'margin-bottom--xl':!isBlogPostPage&&isMobile?'margin-bottom--md':undefined;}function BlogPostItem(_ref){let{children,className,list}=_ref;const containerClassName=useContainerClassName();const{isBlogPostPage}=(0,blogPost/* useBlogPost */.e)();if(list){var _children$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)(ListView,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemContent,{children:children})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TextView,{children:[!isBlogPostPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* default */.A,{list:list}),/*#__PURE__*/(0,jsx_runtime.jsx)(TextSpan,{children:children===null||children===void 0||(_children$type=children.type)===null||_children$type===void 0||(_children$type=_children$type.frontMatter)===null||_children$type===void 0?void 0:_children$type.text}),/*#__PURE__*/(0,jsx_runtime.jsx)(Footer/* default */.A,{})]})]});}else{var _children$type2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogPostItemContainer,{className:(0,clsx_m["default"])(containerClassName,className),children:[isBlogPostPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItemContent,{children:children}),!isBlogPostPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(Header/* default */.A,{}),!isBlogPostPage&&/*#__PURE__*/(0,jsx_runtime.jsx)(TextSpan,{children:children===null||children===void 0||(_children$type2=children.type)===null||_children$type2===void 0||(_children$type2=_children$type2.frontMatter)===null||_children$type2===void 0?void 0:_children$type2.text}),/*#__PURE__*/(0,jsx_runtime.jsx)(Footer/* default */.A,{})]});}}const ListView=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"BlogPostItem__ListView",componentId:"sc-1h8nyco-0"})(["display:flex;flex-direction:row;margin:32px 0;align-items:center;gap:32px;@media (max-width:1200px){flex-direction:column;gap:0px;}"]);const Content=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"BlogPostItem__Content",componentId:"sc-1h8nyco-1"})(["min-width:544px;max-width:544px;@media (max-width:1200px){min-width:100%;max-width:100%;}"]);const TextView=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"BlogPostItem__TextView",componentId:"sc-1h8nyco-2"})(["@media (max-width:1200px){width:100%;}"]);const TextSpan=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"BlogPostItem__TextSpan",componentId:"sc-1h8nyco-3"})(["color:var(--ifm-color-secondary-blog);font-family:Strawford;font-size:19px;font-style:normal;font-weight:300;line-height:32px;margin-bottom:20px;overflow:hidden;display:-webkit-box !important;-webkit-line-clamp:3;-webkit-box-orient:vertical;"]);const GridItem=styled_components_browser_esm/* default */.Ay.div.withConfig({displayName:"BlogPostItem__GridItem",componentId:"sc-1h8nyco-4"})(["width:800px !important;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:33px;box-sizing:border-box;margin:50px auto 0 auto;@media ","{width:90% !important;}@media ","{grid-template-columns:repeat(1,minmax(0,1fr));}"],globals/* device */.jO.laptopL,globals/* device */.jO.tablet);

/***/ }),

/***/ 672852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogPostItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(107131);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282774);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems(_ref){let{items,component:BlogPostItemComponent=_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,list}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:items===null||items===void 0?void 0:items.map(_ref2=>{var _BlogPostContent$meta;let{content:BlogPostContent}=_ref2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .BlogPostProvider */ .i,{content:BlogPostContent,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlogPostItemComponent,{list:list,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlogPostContent,{})})},BlogPostContent===null||BlogPostContent===void 0||(_BlogPostContent$meta=BlogPostContent.metadata)===null||_BlogPostContent$meta===void 0?void 0:_BlogPostContent$meta.permalink);})});}

/***/ }),

/***/ 736991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(944404);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(796710);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(635504);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(801612);
/* harmony import */ var _site_src_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(452005);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120312);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(474848);
// Internal Components
// Internal Configs
const FooterItem=()=>{const isMobile=(0,_site_src_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.tablet);const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(false);const openModal=()=>{setOpen(true);// document.body.style.overflow = "hidden";
};function afterOpenModal(){document.body.style.overflow='hidden';// references are now sync'd and can be accessed.
}const closeModal=()=>{setOpen(false);document.body.style.overflow='auto';// Enable scrollin
};const customStyles={overlay:{background:'rgba(0, 0, 0, 0.60)',backdropFilter:'blur(10px)'},content:{height:'230px',width:'348px',top:'50%',left:'50%',transform:'translate(-50%, -50%)',borderRadius:'16px',border:'none',background:'var(--ifm-color-primary-inverse)'}};const OpenURL=link=>{window.open(link,'_blank');};const LinkModal=()=>{const openLink=link=>{window.open(link,'_blank');};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()),{isOpen:open,onRequestClose:closeModal,style:customStyles,onAfterOpen:afterOpenModal,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ModalItem,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ModalDiv,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalTopic,{children:"Share"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__/* .BsX */ .IeJ,{color:"",size:28,onClick:closeModal,className:"closeIcon"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ModalIcons,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalFigure,{color:"#1DA1F2",onClick:()=>openLink(`https://twitter.com/intent/tweet?text=${window.location.href}`),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__/* .BsTwitter */ .Pj_,{size:32,color:"#fff"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalFigure,{color:"#0077B5",onClick:()=>openLink(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaLinkedinIn */ .H1h,{size:32,color:"#fff"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalFigure,{color:"#4867AA",onClick:()=>openLink(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaFacebookF */ .ok6,{size:32,color:"#fff"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ModalLink,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalInput,{children:window.location.href}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ModalCopy,{onClick:()=>navigator.clipboard.writeText(window.location.href),children:"Copy link"})]})]})});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ShareRow,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ResponsiveH2,{size:isMobile?'16px':'24px',weight:"500",spacing:"-0.02em",lineHeight:"110%",color:"#00000",children:"Be a part of the conversation by sharing this article"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ShareButton,{title:"Developer Docs",background:"#D53A94",radius:"12px",padding:"14px 20px",size:"16px",weight:"500",spacing:"-0.03em",lineHeight:"26px",display:"flex",flexDirection:"row",alignItems:"center",self:isMobile?'stretch':'self',onClick:openModal,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__/* .BiShareAlt */ .e7V,{size:23,color:"#fff",style:{marginRight:'10px'}}),"Share"]})]}),open&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LinkModal,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(AboutSection,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AboutTitle,{children:"About Push Protocol"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AboutSpan,{fontFamily:"Strawford",textAlign:"center",fontSize:"19px",fontWeight:"400",lineHeight:"32px",children:"Push is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform-agnostic fashion. The open communication layer allows any crypto wallet / frontend to tap into the network and get the communication across."})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(KPIBanner,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(BannerItem,{onClick:()=>OpenURL('https://twitter.com/pushprotocol'),gap:"18px",className:"kpiItem",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__/* .BsTwitter */ .Pj_,{size:32}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(KPIMetric,{children:"Twitter"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(BannerItem,{onClick:()=>OpenURL('https://discord.gg/pushprotocol'),gap:"18px",className:"kpiItem",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__/* .FaDiscord */ .O4U,{size:32}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(KPIMetric,{children:"Discord"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(BannerItem,{onClick:()=>OpenURL('https://www.youtube.com/@pushprotocol'),gap:"18px",className:"kpiItem",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__/* .BsYoutube */ .ZZd,{size:32}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(KPIMetric,{children:"YouTube"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(BannerItem,{onClick:()=>OpenURL('https://www.linkedin.com/company/push-protocol/'),gap:"18px",className:"kpiItem",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__/* .BsLinkedin */ .Y5M,{size:32}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(KPIMetric,{children:"Linkedin"})]})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterItem);const AboutSection=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__AboutSection",componentId:"sc-ifcen3-0"})(["margin-top:99px;span{font-size:18px;line-height:37px;color:#282a2d;letter-spacing:-0.002em;@media ","{font-size:16px;line-height:36px;}}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL);const AboutTitle=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__AboutTitle",componentId:"sc-ifcen3-1"})(["font-family:'Strawford' !important;font-weight:700;font-size:28px;line-height:38px;color:var(--ifm-color-primary-blog);margin-bottom:10px;letter-spacing:-0.02em;@media ","{font-weight:700;font-size:24px;line-height:30px;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL);const AboutSpan=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .Span */ .L9).withConfig({displayName:"FooterItem__AboutSpan",componentId:"sc-ifcen3-2"})(["color:var(--ifm-color-blog-tag) !important;"]);const KPIBanner=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__KPIBanner",componentId:"sc-ifcen3-3"})(["background:var(--ifm-color-blog-footer);border-radius:24px;display:flex;align-items:center;justify-content:center;width:100%;padding:20px 0px;font-family:'Strawford';font-style:normal;margin-top:30px;margin-bottom:100px;& .kpiItem{display:flex;flex-direction:row;align-items:center !important;}@media ","{flex-direction:row;flex-wrap:wrap;width:100%;row-gap:32px;column-gap:8px;margin-top:30px;& .kpiItem{flex-direction:row;row-gap:8px;flex:0 0 48%;}}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.tablet);const KPIFigure=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__KPIFigure",componentId:"sc-ifcen3-4"})(["height:fit-content;width:fit-content;"]);const BannerItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ItemV */ .y8).withConfig({displayName:"FooterItem__BannerItem",componentId:"sc-ifcen3-5"})(["color:var(--ifm-color-footer);grid-gap:8px;cursor:pointer align-items:center !important;&:hover{color:#d53893;}"]);const KPIMetric=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__KPIMetric",componentId:"sc-ifcen3-6"})(["font-weight:500;font-size:16px;line-height:110%;letter-spacing:-0.03em;@media ","{font-size:16px;font-weight:400;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.tablet);const ResponsiveH2=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__.H2).withConfig({displayName:"FooterItem__ResponsiveH2",componentId:"sc-ifcen3-7"})([""]);const ShareRow=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ShareRow",componentId:"sc-ifcen3-8"})(["margin:50px 0 0px 0;display:flex;justify-content:space-between;align-items:center;@media ","{flex-direction:row;margin-top:52px;align-items:center;}@media ","{display:flex;flex-direction:column;justify-content:space-between;align-items:center;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.tablet,_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL);const ShareButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n).withConfig({displayName:"FooterItem__ShareButton",componentId:"sc-ifcen3-9"})(["@media ","{width:100%;margin:20px;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL);// modal url
const ModalDiv=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalDiv",componentId:"sc-ifcen3-10"})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:32px;&.closeIcon{cursor:pointer;}"]);const ModalTopic=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalTopic",componentId:"sc-ifcen3-11"})(["color:var(--ifm-color-primary-text);font-size:20px;font-family:Strawford;line-height:142%;letter-spacing:-0.6px;"]);const ModalIcons=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalIcons",componentId:"sc-ifcen3-12"})(["width:fit-content;margin:0 auto;display:flex;flex-direction:row;grid-gap:32px;"]);const ModalLink=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalLink",componentId:"sc-ifcen3-13"})(["width:100%;display:flex;flex-direction:row;align-items:center;margin-top:28px;justify-content:center;"]);const ModalCopy=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalCopy",componentId:"sc-ifcen3-14"})(["color:#fff;font-size:14px;font-family:Strawford;font-weight:500;line-height:142%;letter-spacing:-0.42px;border-radius:0px 8px 8px 0px;background:#d53a94;padding:8px 12px;height:35.88px;cursor:pointer;"]);const ModalInput=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalInput",componentId:"sc-ifcen3-15"})(["border-radius:8px 0px 0px 8px;border:var(--ifm-modal-border-input);background:var(--ifm-modal-input);color:var(--ifm-color-primary-text);padding:8px 12px;max-width:212px;min-width:212px;height:35.88px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center;@media ","{max-width:200px;min-width:200px;}@media ","{max-width:150px;min-width:150px;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL,_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileM);const ModalClose=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalClose",componentId:"sc-ifcen3-16"})(["cursor:pointer;"]);const ModalFigure=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalFigure",componentId:"sc-ifcen3-17"})(["width:52px;height:52px;border-radius:16px;background:",";display:flex;justify-content:center;align-items:center;cursor:pointer;"],props=>props.color);const ModalItem=styled_components__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.div.withConfig({displayName:"FooterItem__ModalItem",componentId:"sc-ifcen3-18"})([""]);

/***/ }),

/***/ 549117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogTagsPostsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(320053);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(721312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(853465);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(169024);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(117559);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175489);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(729520);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(603345);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(841463);
/* harmony import */ var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(672852);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(944404);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Internal Configs
// Very simple pluralization: probably good enough for now
function useBlogPostsPlural(){const{selectMessage}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__/* .usePluralForm */ .W)();return count=>selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count}));}function useBlogTagsPostsPageTitle(tag){const blogPostsPlural=useBlogPostsPlural();return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(tag.count),tagName:tag.label});}function BlogTagsPostsPageMetadata(_ref){let{tag}=_ref;const title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .PageMetadata */ .be,{title:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{tag:"blog_tags_posts"})]});}function BlogTagsPostsPageContent(_ref2){let{tag,items,sidebar,listMetadata}=_ref2;const title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(TagsHeader,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1",{children:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{href:tag.allTagsPath,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(GridItem,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{items:items}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{metadata:listMetadata})]})]});}function BlogTagsPostsPage(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .HtmlClassNameProvider */ .e3,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__["default"])(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_12__/* .ThemeClassNames */ .G.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_12__/* .ThemeClassNames */ .G.page.blogTagPostListPage),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlogTagsPostsPageMetadata,{...props}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlogTagsPostsPageContent,{...props})]});}const TagsHeader=styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay.header.withConfig({displayName:"BlogTagsPostsPage__TagsHeader",componentId:"sc-7f13bn-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:1120px !important;margin:20px auto 0 auto;@media ","{flex-direction:column;width:90% !important;align-items:flex-start;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_7__/* .device */ .jO.tablet);const GridItem=styled_components__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Ay.div.withConfig({displayName:"BlogTagsPostsPage__GridItem",componentId:"sc-7f13bn-1"})(["width:1120px !important;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:33px;box-sizing:border-box;margin:50px auto 0 auto;@media ","{width:90% !important;}@media ","{grid-template-columns:repeat(1,minmax(0,1fr));}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_7__/* .device */ .jO.laptopL,_site_src_config_globals__WEBPACK_IMPORTED_MODULE_7__/* .device */ .jO.tablet);

/***/ }),

/***/ 880222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(320053);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(956347);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(354625);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(944404);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// import Link from "@docusaurus/Link";
function PaginatorNavLink(props){var _history$location;const{permalink,title,subLabel,isNext}=props;const history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useHistory */ .W6)();if((history===null||history===void 0||(_history$location=history.location)===null||_history$location===void 0?void 0:_history$location.pathname).includes('blog')){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(NavLink,{onClick:()=>history.push(permalink),children:[subLabel&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:subLabel}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:title})]});}else return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .N_,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__["default"])('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink,children:[subLabel&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"pagination-nav__sublabel",children:subLabel}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"pagination-nav__label",children:title})]});}const NavLink=styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.div.withConfig({displayName:"PaginatorNavLink__NavLink",componentId:"sc-uig86l-0"})(["text-decoration:none;color:var(--ifm-color-primary-blog);padding:10px 20px;border-radius:62px;font-size:15px;font-weight:500;font-family:Strawford;border:1px solid #bac4d6;width:fit-content;cursor:pointer;"]);

/***/ }),

/***/ 404588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Playground)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/BrowserOnly.js
var BrowserOnly = __webpack_require__(978478);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(267489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(721312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/errorBoundaryUtils.js + 1 modules
var errorBoundaryUtils = __webpack_require__(112181);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
var usePrismTheme = __webpack_require__(426058);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(144586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
// EXTERNAL MODULE: ./src/components/reusables/spinners/SpinnerUnit.tsx + 5 modules
var SpinnerUnit = __webpack_require__(159037);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(242644);
// EXTERNAL MODULE: ./node_modules/react-live/dist/index.mjs + 58 modules
var dist = __webpack_require__(86850);
;// CONCATENATED MODULE: ./src/theme/Playground/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"playgroundContainer":"playgroundContainer_TGbA","playgroundHeader":"playgroundHeader_qwyd","playgroundEditor":"playgroundEditor_PvJ1","playgroundPreview":"playgroundPreview_bb8I"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/theme/Playground/index.js
function Header(_ref){let{children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx_m["default"])(styles_module.playgroundHeader),children:children});}function LivePreviewLoader(){// Is it worth improving/translating?
// eslint-disable-next-line @docusaurus/no-untranslated-text
return/*#__PURE__*/(0,jsx_runtime.jsx)(SpinnerUnit/* default */.A,{size:42,color:globals/* default */.Ay.COLORS.PRIMARY_COLOR,type:SpinnerUnit/* SPINNER_TYPE */.N.PROCESSING});}function Preview(){// No SSR for the live preview
// See https://github.com/facebook/docusaurus/issues/5747
return/*#__PURE__*/(0,jsx_runtime.jsx)(BrowserOnly/* default */.A,{fallback:/*#__PURE__*/(0,jsx_runtime.jsx)(LivePreviewLoader,{}),children:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{fallback:params=>/*#__PURE__*/(0,jsx_runtime.jsx)(errorBoundaryUtils/* ErrorBoundaryErrorMessageFallback */.MN,{...params}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LivePreview */.pA,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LiveError */.p1,{})]})});}function ResultWithHeader(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Header,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"LIVE PREVIEW"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.playgroundPreview,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Preview,{})})]});}function ThemedLiveEditor(){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LiveEditor */.w// We force remount the editor on hydration,
// otherwise dark prism theme is not applied
,{className:styles_module.playgroundEditor},String(isBrowser));}function EditorWithHeader(_ref2){let{minimized}=_ref2;const[minimizedState,setMinimizedState]=(0,react.useState)(minimized);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Header,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* Button */.$n,{onClick:()=>{setMinimizedState(!minimizedState);},textTransform:"uppercase",background:"transparent",padding:"0px",width:"100%",display:"flex",hoverBackground:"transparent",borderRadius:"0px",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(SharedStyling/* ItemH */.Oj,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(SharedStyling/* ItemV */.y8,{flex:"1",alignItems:"flex-start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"LIVE EDITOR"})}),minimizedState?/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiChevronDown */.fK4,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiChevronUp */.wAb,{})]})})}),!minimizedState&&/*#__PURE__*/(0,jsx_runtime.jsx)(ThemedLiveEditor,{})]});}function Playground(_ref3){var _props$metastring$inc,_props$metastring;let{children,transformCode,...props}=_ref3;const{siteConfig:{themeConfig}}=(0,useDocusaurusContext/* default */.A)();const{liveCodeBlock:{playgroundPosition}}=themeConfig;const prismTheme=(0,usePrismTheme/* usePrismTheme */.A)();const noInline=(_props$metastring$inc=(_props$metastring=props.metastring)===null||_props$metastring===void 0?void 0:_props$metastring.includes('noInline'))!==null&&_props$metastring$inc!==void 0?_props$metastring$inc:false;// Look for customPropMinimized, customPropHidden
let minimized=false;let pattern=/customPropMinimized="([^"]+)"/;let match=children.match(pattern);console.log(match,pattern);if(match){const customProp=match[1];if(customProp==='true'){minimized=true;// remove the first match
children=children.replace(pattern,'');}}// Look for customPropHidden
let hidden=false;pattern=/customPropHidden="([^"]+)"\n/;match=children.match(pattern);if(match){const customProp=match[1];if(customProp==='true'){hidden=true;// remove the first match
children=children.replace(pattern,'');}}// finally replace if new line is there in the start
children=children.replace(/\n/,'');return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.playgroundContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* LiveProvider */.Q,{code:children.replace(/\n$/,''),noInline:noInline,transformCode:transformCode!==null&&transformCode!==void 0?transformCode:code=>`${code};`,theme:prismTheme,...props,children:playgroundPosition==='top'?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ResultWithHeader,{}),!hidden&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditorWithHeader,{minimized:minimized})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!hidden&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditorWithHeader,{minimized:minimized}),/*#__PURE__*/(0,jsx_runtime.jsx)(ResultWithHeader,{})]})})});}

/***/ }),

/***/ 351433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(978478);
/* harmony import */ var _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159037);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61530);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474848);
// This function returns a promise that resolves to the library,
// ensuring it's only imported on the client side.
function loadClientSideLibraryEthers(constantName){return typeof window!=='undefined'?__webpack_require__(986894)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryPushProtocolRestAPI(constantName){return typeof window!=='undefined'?__webpack_require__(514086)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryPushProtocolUIWeb(constantName){return typeof window!=='undefined'?__webpack_require__(670645)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}// For @pushprotocol/UIWeb components, we will dynamically load them in the BrowserOnly component.
function createBrowserOnlyLibComponentUIWeb(componentExportName){return function LibComponentBrowserOnly(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{fallback:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{size:42,color:_site_src_config_globals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.COLORS.PRIMARY_COLOR,type:_site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__/* .SPINNER_TYPE */ .N.PROCESSING}),children:()=>{const Component=__webpack_require__(670645)[componentExportName];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component,{...props});}});};}const ReactLiveScope={React: react__WEBPACK_IMPORTED_MODULE_3__,...react__WEBPACK_IMPORTED_MODULE_3__,// Asynchronously import ethers and PushAPI only on the client side
ethers:loadClientSideLibraryEthers('ethers'),PushAPI:loadClientSideLibraryPushProtocolRestAPI('PushAPI'),CONSTANTS:loadClientSideLibraryPushProtocolRestAPI('CONSTANTS'),MODAL_POSITION_TYPE:loadClientSideLibraryPushProtocolUIWeb('MODAL_POSITION_TYPE'),// Continue using the BrowserOnly component for UI components
SupportChat:createBrowserOnlyLibComponentUIWeb('SupportChat'),ChatWidget:createBrowserOnlyLibComponentUIWeb('ChatWidget'),NotificationItem:createBrowserOnlyLibComponentUIWeb('NotificationItem'),ChatUIProvider:createBrowserOnlyLibComponentUIWeb('ChatUIProvider'),ChatView:createBrowserOnlyLibComponentUIWeb('ChatView'),CreateGroupModal:createBrowserOnlyLibComponentUIWeb('CreateGroupModal'),ChatProfile:createBrowserOnlyLibComponentUIWeb('ChatProfile'),MessageInput:createBrowserOnlyLibComponentUIWeb('MessageInput'),ChatViewBubble:createBrowserOnlyLibComponentUIWeb('ChatViewBubble'),ChatViewList:createBrowserOnlyLibComponentUIWeb('ChatViewList'),UserProfile:createBrowserOnlyLibComponentUIWeb('UserProfile'),ChatPreview:createBrowserOnlyLibComponentUIWeb('ChatPreview'),ChatPreviewList:createBrowserOnlyLibComponentUIWeb('ChatPreviewList'),darkChatTheme:createBrowserOnlyLibComponentUIWeb('darkChatTheme'),lightChatTheme:createBrowserOnlyLibComponentUIWeb('lightChatTheme'),NotificationItem:createBrowserOnlyLibComponentUIWeb('NotificationItem'),SubscriptionManager:createBrowserOnlyLibComponentUIWeb('SubscriptionManager'),WidgetUIProvider:createBrowserOnlyLibComponentUIWeb('WidgetUIProvider')};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactLiveScope);

/***/ }),

/***/ 293751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(175489);
;// CONCATENATED MODULE: ./src/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tagRegular":"tagRegular_bmnp","tagWithCount":"tagWithCount_vddX"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// CONCATENATED MODULE: ./src/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){let{permalink,label,count}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{href:permalink,className:(0,clsx_m["default"])(count?styles_module.tagWithCount:styles_module.tagRegular),children:label});}

/***/ }),

/***/ 117290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TagsListInline)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(721312);
/* harmony import */ var _theme_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(293751);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(944404);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Internal Configs
// import styles from "./styles.module.css";
function TagsListInline(_ref){let{tags}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Ul,{children:tags.map(_ref2=>{let{label,permalink:tagPermalink}=_ref2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Li,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_theme_Tag__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{label:label,permalink:tagPermalink})},tagPermalink);})})});}const Li=styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.li.withConfig({displayName:"TagsListInline__Li",componentId:"sc-155q1zc-0"})(["list-style:none;display:flex !important;flex-direction:row;flex-wrap:wrap;margin:0 0.4rem 0.5rem 0;@media ","{display:flex !important;flex-direction:row;flex-wrap:wrap;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_3__/* .device */ .jO.laptopL);const Ul=styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.ul.withConfig({displayName:"TagsListInline__Ul",componentId:"sc-155q1zc-1"})(["margin:0 0;padding:0 0;display:flex !important;flex-direction:row;flex-wrap:wrap;"]);

/***/ }),

/***/ 35358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 25177,
	"./af.js": 25177,
	"./ar": 561509,
	"./ar-dz": 741488,
	"./ar-dz.js": 741488,
	"./ar-kw": 458676,
	"./ar-kw.js": 458676,
	"./ar-ly": 842353,
	"./ar-ly.js": 842353,
	"./ar-ma": 824496,
	"./ar-ma.js": 824496,
	"./ar-ps": 806947,
	"./ar-ps.js": 806947,
	"./ar-sa": 582682,
	"./ar-sa.js": 582682,
	"./ar-tn": 489756,
	"./ar-tn.js": 489756,
	"./ar.js": 561509,
	"./az": 295533,
	"./az.js": 295533,
	"./be": 928959,
	"./be.js": 928959,
	"./bg": 447777,
	"./bg.js": 447777,
	"./bm": 754903,
	"./bm.js": 754903,
	"./bn": 661290,
	"./bn-bd": 917357,
	"./bn-bd.js": 917357,
	"./bn.js": 661290,
	"./bo": 931545,
	"./bo.js": 931545,
	"./br": 611470,
	"./br.js": 611470,
	"./bs": 744429,
	"./bs.js": 744429,
	"./ca": 7306,
	"./ca.js": 7306,
	"./cs": 856464,
	"./cs.js": 856464,
	"./cv": 773635,
	"./cv.js": 773635,
	"./cy": 364226,
	"./cy.js": 364226,
	"./da": 393601,
	"./da.js": 393601,
	"./de": 877853,
	"./de-at": 226111,
	"./de-at.js": 226111,
	"./de-ch": 854697,
	"./de-ch.js": 854697,
	"./de.js": 877853,
	"./dv": 860708,
	"./dv.js": 860708,
	"./el": 254691,
	"./el.js": 254691,
	"./en-au": 753872,
	"./en-au.js": 753872,
	"./en-ca": 928298,
	"./en-ca.js": 928298,
	"./en-gb": 956195,
	"./en-gb.js": 956195,
	"./en-ie": 866584,
	"./en-ie.js": 866584,
	"./en-il": 65543,
	"./en-il.js": 65543,
	"./en-in": 9033,
	"./en-in.js": 9033,
	"./en-nz": 479402,
	"./en-nz.js": 479402,
	"./en-sg": 343004,
	"./en-sg.js": 343004,
	"./eo": 832934,
	"./eo.js": 832934,
	"./es": 497650,
	"./es-do": 120838,
	"./es-do.js": 120838,
	"./es-mx": 217730,
	"./es-mx.js": 217730,
	"./es-us": 456575,
	"./es-us.js": 456575,
	"./es.js": 497650,
	"./et": 303035,
	"./et.js": 303035,
	"./eu": 303508,
	"./eu.js": 303508,
	"./fa": 500119,
	"./fa.js": 500119,
	"./fi": 190527,
	"./fi.js": 190527,
	"./fil": 395995,
	"./fil.js": 395995,
	"./fo": 252477,
	"./fo.js": 252477,
	"./fr": 585498,
	"./fr-ca": 326435,
	"./fr-ca.js": 326435,
	"./fr-ch": 37892,
	"./fr-ch.js": 37892,
	"./fr.js": 585498,
	"./fy": 737071,
	"./fy.js": 737071,
	"./ga": 241734,
	"./ga.js": 241734,
	"./gd": 370217,
	"./gd.js": 370217,
	"./gl": 977329,
	"./gl.js": 977329,
	"./gom-deva": 432124,
	"./gom-deva.js": 432124,
	"./gom-latn": 193383,
	"./gom-latn.js": 193383,
	"./gu": 295050,
	"./gu.js": 295050,
	"./he": 711713,
	"./he.js": 711713,
	"./hi": 543861,
	"./hi.js": 543861,
	"./hr": 826308,
	"./hr.js": 826308,
	"./hu": 390609,
	"./hu.js": 390609,
	"./hy-am": 217160,
	"./hy-am.js": 217160,
	"./id": 674063,
	"./id.js": 674063,
	"./is": 589374,
	"./is.js": 589374,
	"./it": 988383,
	"./it-ch": 21827,
	"./it-ch.js": 21827,
	"./it.js": 988383,
	"./ja": 823827,
	"./ja.js": 823827,
	"./jv": 289722,
	"./jv.js": 289722,
	"./ka": 341794,
	"./ka.js": 341794,
	"./kk": 927088,
	"./kk.js": 927088,
	"./km": 96870,
	"./km.js": 96870,
	"./kn": 484451,
	"./kn.js": 484451,
	"./ko": 363164,
	"./ko.js": 363164,
	"./ku": 998174,
	"./ku-kmr": 306181,
	"./ku-kmr.js": 306181,
	"./ku.js": 998174,
	"./ky": 778474,
	"./ky.js": 778474,
	"./lb": 679680,
	"./lb.js": 679680,
	"./lo": 15867,
	"./lo.js": 15867,
	"./lt": 545766,
	"./lt.js": 545766,
	"./lv": 269532,
	"./lv.js": 269532,
	"./me": 158076,
	"./me.js": 158076,
	"./mi": 841848,
	"./mi.js": 841848,
	"./mk": 930306,
	"./mk.js": 930306,
	"./ml": 73739,
	"./ml.js": 73739,
	"./mn": 199053,
	"./mn.js": 199053,
	"./mr": 386169,
	"./mr.js": 386169,
	"./ms": 573386,
	"./ms-my": 892297,
	"./ms-my.js": 892297,
	"./ms.js": 573386,
	"./mt": 677075,
	"./mt.js": 677075,
	"./my": 272264,
	"./my.js": 272264,
	"./nb": 822274,
	"./nb.js": 822274,
	"./ne": 508235,
	"./ne.js": 508235,
	"./nl": 592572,
	"./nl-be": 843784,
	"./nl-be.js": 843784,
	"./nl.js": 592572,
	"./nn": 954566,
	"./nn.js": 954566,
	"./oc-lnc": 169330,
	"./oc-lnc.js": 169330,
	"./pa-in": 629849,
	"./pa-in.js": 629849,
	"./pl": 494418,
	"./pl.js": 494418,
	"./pt": 579834,
	"./pt-br": 748303,
	"./pt-br.js": 748303,
	"./pt.js": 579834,
	"./ro": 824457,
	"./ro.js": 824457,
	"./ru": 182271,
	"./ru.js": 182271,
	"./sd": 801221,
	"./sd.js": 801221,
	"./se": 233478,
	"./se.js": 233478,
	"./si": 617538,
	"./si.js": 617538,
	"./sk": 105784,
	"./sk.js": 105784,
	"./sl": 946637,
	"./sl.js": 946637,
	"./sq": 286794,
	"./sq.js": 286794,
	"./sr": 545719,
	"./sr-cyrl": 703322,
	"./sr-cyrl.js": 703322,
	"./sr.js": 545719,
	"./ss": 956000,
	"./ss.js": 956000,
	"./sv": 941011,
	"./sv.js": 941011,
	"./sw": 740748,
	"./sw.js": 740748,
	"./ta": 511025,
	"./ta.js": 511025,
	"./te": 911885,
	"./te.js": 911885,
	"./tet": 428861,
	"./tet.js": 428861,
	"./tg": 786571,
	"./tg.js": 786571,
	"./th": 855802,
	"./th.js": 855802,
	"./tk": 159527,
	"./tk.js": 159527,
	"./tl-ph": 229231,
	"./tl-ph.js": 229231,
	"./tlh": 331052,
	"./tlh.js": 331052,
	"./tr": 985096,
	"./tr.js": 985096,
	"./tzl": 579846,
	"./tzl.js": 579846,
	"./tzm": 181765,
	"./tzm-latn": 997711,
	"./tzm-latn.js": 997711,
	"./tzm.js": 181765,
	"./ug-cn": 248414,
	"./ug-cn.js": 248414,
	"./uk": 916618,
	"./uk.js": 916618,
	"./ur": 657777,
	"./ur.js": 657777,
	"./uz": 957609,
	"./uz-latn": 972475,
	"./uz-latn.js": 972475,
	"./uz.js": 957609,
	"./vi": 521135,
	"./vi.js": 521135,
	"./x-pseudo": 564051,
	"./x-pseudo.js": 564051,
	"./yo": 882218,
	"./yo.js": 882218,
	"./zh-cn": 552648,
	"./zh-cn.js": 552648,
	"./zh-hk": 201632,
	"./zh-hk.js": 201632,
	"./zh-mo": 631541,
	"./zh-mo.js": 631541,
	"./zh-tw": 350304,
	"./zh-tw.js": 350304
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35358;

/***/ }),

/***/ 381418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blogpreview-93e29439814c9b636cd3bebfa40ecbf6.png");

/***/ }),

/***/ 391848:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 858954:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 650477:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 242634:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 271281:
/***/ (() => {

/* (ignored) */

/***/ })

}]);