exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 277173:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 391089:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return (typeof document === "undefined" &&
        typeof navigator !== "undefined" &&
        navigator.product === "ReactNative");
}
exports.isReactNative = isReactNative;
function isNode() {
    return (typeof process !== "undefined" &&
        typeof process.versions !== "undefined" &&
        typeof process.versions.node !== "undefined");
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser;
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 525682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(498186);
tslib_1.__exportStar(__webpack_require__(277173), exports);
tslib_1.__exportStar(__webpack_require__(391089), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 498186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 420185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  REQUIRED_METHODS: () => (/* binding */ ethereum_provider_dist_index_es_g),
  "default": () => (/* binding */ ethereum_provider_dist_index_es_C)
});

// UNUSED EXPORTS: EthereumProvider, OPTIONAL_EVENTS, OPTIONAL_METHODS, REQUIRED_EVENTS

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/identity.js
var identity_namespaceObject = {};
__webpack_require__.r(identity_namespaceObject);
__webpack_require__.d(identity_namespaceObject, {
  identity: () => (identity)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base2.js
var base2_namespaceObject = {};
__webpack_require__.r(base2_namespaceObject);
__webpack_require__.d(base2_namespaceObject, {
  base2: () => (base2)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base8.js
var base8_namespaceObject = {};
__webpack_require__.r(base8_namespaceObject);
__webpack_require__.d(base8_namespaceObject, {
  base8: () => (base8)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base10.js
var base10_namespaceObject = {};
__webpack_require__.r(base10_namespaceObject);
__webpack_require__.d(base10_namespaceObject, {
  base10: () => (base10)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base16.js
var base16_namespaceObject = {};
__webpack_require__.r(base16_namespaceObject);
__webpack_require__.d(base16_namespaceObject, {
  base16: () => (base16),
  base16upper: () => (base16upper)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base36.js
var base36_namespaceObject = {};
__webpack_require__.r(base36_namespaceObject);
__webpack_require__.d(base36_namespaceObject, {
  base36: () => (base36),
  base36upper: () => (base36upper)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  base64: () => (base64),
  base64pad: () => (base64pad),
  base64url: () => (base64url),
  base64urlpad: () => (base64urlpad)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_namespaceObject = {};
__webpack_require__.r(base256emoji_namespaceObject);
__webpack_require__.d(base256emoji_namespaceObject, {
  base256emoji: () => (base256emoji)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/sha2.js
var sha2_namespaceObject = {};
__webpack_require__.r(sha2_namespaceObject);
__webpack_require__.d(sha2_namespaceObject, {
  sha256: () => (sha256),
  sha512: () => (sha512)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/identity.js
var hashes_identity_namespaceObject = {};
__webpack_require__.r(hashes_identity_namespaceObject);
__webpack_require__.d(hashes_identity_namespaceObject, {
  identity: () => (identity_identity)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/codecs/raw.js
var raw_namespaceObject = {};
__webpack_require__.r(raw_namespaceObject);
__webpack_require__.d(raw_namespaceObject, {
  code: () => (raw_code),
  decode: () => (raw_decode),
  encode: () => (raw_encode),
  name: () => (raw_name)
});

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/codecs/json.js
var json_namespaceObject = {};
__webpack_require__.r(json_namespaceObject);
__webpack_require__.d(json_namespaceObject, {
  code: () => (json_code),
  decode: () => (json_decode),
  encode: () => (json_encode),
  name: () => (json_name)
});

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(24434);
var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);
;// ./node_modules/detect-browser/es/index.js
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var BrowserInfo = /** @class */ (function () {
    function BrowserInfo(name, version, os) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.type = 'browser';
    }
    return BrowserInfo;
}());

var NodeInfo = /** @class */ (function () {
    function NodeInfo(version) {
        this.version = version;
        this.type = 'node';
        this.name = 'node';
        this.os = process.platform;
    }
    return NodeInfo;
}());

var SearchBotDeviceInfo = /** @class */ (function () {
    function SearchBotDeviceInfo(name, version, os, bot) {
        this.name = name;
        this.version = version;
        this.os = os;
        this.bot = bot;
        this.type = 'bot-device';
    }
    return SearchBotDeviceInfo;
}());

var BotInfo = /** @class */ (function () {
    function BotInfo() {
        this.type = 'bot';
        this.bot = true; // NOTE: deprecated test name instead
        this.name = 'bot';
        this.version = null;
        this.os = null;
    }
    return BotInfo;
}());

var ReactNativeInfo = /** @class */ (function () {
    function ReactNativeInfo() {
        this.type = 'react-native';
        this.name = 'react-native';
        this.version = null;
        this.os = null;
    }
    return ReactNativeInfo;
}());

// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    [
        'chromium-webview',
        /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    ['pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FB[AS]V\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['curl', /^curl\/([0-9\.]+)$/],
    ['searchbot', SEARCHBOX_UA_REGEX],
];
var operatingSystemRules = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
];
function detect(userAgent) {
    if (!!userAgent) {
        return parseUserAgent(userAgent);
    }
    if (typeof document === 'undefined' &&
        typeof navigator !== 'undefined' &&
        navigator.product === 'ReactNative') {
        return new ReactNativeInfo();
    }
    if (typeof navigator !== 'undefined') {
        return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
}
function matchUserAgent(ua) {
    // opted for using reduce here rather than Array#first with a regex.test call
    // this is primarily because using the reduce we only perform the regex
    // execution once rather than once for the test and for the exec again below
    // probably something that needs to be benchmarked though
    return (ua !== '' &&
        userAgentRules.reduce(function (matched, _a) {
            var browser = _a[0], regex = _a[1];
            if (matched) {
                return matched;
            }
            var uaMatch = regex.exec(ua);
            return !!uaMatch && [browser, uaMatch];
        }, false));
}
function browserName(ua) {
    var data = matchUserAgent(ua);
    return data ? data[0] : null;
}
function parseUserAgent(ua) {
    var matchedRule = matchUserAgent(ua);
    if (!matchedRule) {
        return null;
    }
    var name = matchedRule[0], match = matchedRule[1];
    if (name === 'searchbot') {
        return new BotInfo();
    }
    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)
    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);
    if (versionParts) {
        if (versionParts.length < REQUIRED_VERSION_PARTS) {
            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
        }
    }
    else {
        versionParts = [];
    }
    var version = versionParts.join('.');
    var os = detectOS(ua);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);
    if (searchBotMatch && searchBotMatch[1]) {
        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
    }
    return new BrowserInfo(name, version, os);
}
function detectOS(ua) {
    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];
        var match = regex.exec(ua);
        if (match) {
            return os;
        }
    }
    return null;
}
function getNodeVersion() {
    var isNode = typeof process !== 'undefined' && process.version;
    return isNode ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
    var output = [];
    for (var ii = 0; ii < count; ii++) {
        output.push('0');
    }
    return output;
}

// EXTERNAL MODULE: ./node_modules/@walletconnect/time/dist/cjs/index.js
var cjs = __webpack_require__(388900);
// EXTERNAL MODULE: ./node_modules/@walletconnect/window-getters/dist/cjs/index.js
var dist_cjs = __webpack_require__(838196);
// EXTERNAL MODULE: ./node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var window_metadata_dist_cjs = __webpack_require__(842063);
// EXTERNAL MODULE: ./node_modules/@ethersproject/transactions/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(722677);
;// ./node_modules/@walletconnect/safe-json/dist/esm/index.js
const JSONStringify = data => JSON.stringify(data, (_, value) => typeof value === "bigint" ? value.toString() + "n" : value);
const JSONParse = json => {
    const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
    const serializedData = json.replace(numbersBiggerThanMaxInt, "$1\"$2n\"$3");
    return JSON.parse(serializedData, (_, value) => {
        const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
        if (isCustomFormatBigInt)
            return BigInt(value.substring(0, value.length - 1));
        return value;
    });
};
function safeJsonParse(value) {
    if (typeof value !== "string") {
        throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    }
    try {
        return JSONParse(value);
    }
    catch (_a) {
        return value;
    }
}
function safeJsonStringify(value) {
    return typeof value === "string" ? value : JSONStringify(value) || "";
}
//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/relay-auth/dist/index.es.js
function En(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function fe(t,...e){if(!En(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function De(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function gn(t,e){fe(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}const it=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _t=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);function yn(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function de(t){return typeof t=="string"&&(t=yn(t)),fe(t),t}class xn{clone(){return this._cloneInto()}}function Bn(t){const e=r=>t().update(de(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function he(t=32){if(it&&typeof it.getRandomValues=="function")return it.getRandomValues(new Uint8Array(t));if(it&&typeof it.randomBytes=="function")return it.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}function Cn(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const o=BigInt(32),s=BigInt(4294967295),a=Number(n>>o&s),u=Number(n&s),i=r?4:0,D=r?0:4;t.setUint32(e+i,a,r),t.setUint32(e+D,u,r)}class An extends xn{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=_t(this.buffer)}update(e){De(this);const{view:n,buffer:r,blockLen:o}=this;e=de(e);const s=e.length;for(let a=0;a<s;){const u=Math.min(o-this.pos,s-a);if(u===o){const i=_t(e);for(;o<=s-a;a+=o)this.process(i,a);continue}r.set(e.subarray(a,a+u),this.pos),this.pos+=u,a+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){De(this),gn(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:a}=this;n[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>o-a&&(this.process(r,0),a=0);for(let l=a;l<o;l++)n[l]=0;Cn(r,o-8,BigInt(this.length*8),s),this.process(r,0);const u=_t(e),i=this.outputLen;if(i%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const D=i/4,c=this.get();if(D>c.length)throw new Error("_sha2: outputLen bigger than state");for(let l=0;l<D;l++)u.setUint32(4*l,c[l],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:a,pos:u}=this;return e.length=o,e.pos=u,e.finished=s,e.destroyed=a,o%n&&e.buffer.set(r),e}}const wt=BigInt(2**32-1),St=BigInt(32);function le(t,e=!1){return e?{h:Number(t&wt),l:Number(t>>St&wt)}:{h:Number(t>>St&wt)|0,l:Number(t&wt)|0}}function mn(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:s,l:a}=le(t[o],e);[n[o],r[o]]=[s,a]}return[n,r]}const _n=(t,e)=>BigInt(t>>>0)<<St|BigInt(e>>>0),Sn=(t,e,n)=>t>>>n,vn=(t,e,n)=>t<<32-n|e>>>n,In=(t,e,n)=>t>>>n|e<<32-n,Un=(t,e,n)=>t<<32-n|e>>>n,Tn=(t,e,n)=>t<<64-n|e>>>n-32,Fn=(t,e,n)=>t>>>n-32|e<<64-n,Nn=(t,e)=>e,Ln=(t,e)=>t,On=(t,e,n)=>t<<n|e>>>32-n,Hn=(t,e,n)=>e<<n|t>>>32-n,zn=(t,e,n)=>e<<n-32|t>>>64-n,Mn=(t,e,n)=>t<<n-32|e>>>64-n;function qn(t,e,n,r){const o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const $n=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),kn=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Rn=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),jn=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,Zn=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Gn=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,x={fromBig:le,split:mn,toBig:_n,shrSH:Sn,shrSL:vn,rotrSH:In,rotrSL:Un,rotrBH:Tn,rotrBL:Fn,rotr32H:Nn,rotr32L:Ln,rotlSH:On,rotlSL:Hn,rotlBH:zn,rotlBL:Mn,add:qn,add3L:$n,add3H:kn,add4L:Rn,add4H:jn,add5H:Gn,add5L:Zn},[Vn,Yn]=(()=>x.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))))(),P=new Uint32Array(80),Q=new Uint32Array(80);class Jn extends An{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:a,Dh:u,Dl:i,Eh:D,El:c,Fh:l,Fl:p,Gh:w,Gl:h,Hh:g,Hl:S}=this;return[e,n,r,o,s,a,u,i,D,c,l,p,w,h,g,S]}set(e,n,r,o,s,a,u,i,D,c,l,p,w,h,g,S){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=a|0,this.Dh=u|0,this.Dl=i|0,this.Eh=D|0,this.El=c|0,this.Fh=l|0,this.Fl=p|0,this.Gh=w|0,this.Gl=h|0,this.Hh=g|0,this.Hl=S|0}process(e,n){for(let d=0;d<16;d++,n+=4)P[d]=e.getUint32(n),Q[d]=e.getUint32(n+=4);for(let d=16;d<80;d++){const m=P[d-15]|0,F=Q[d-15]|0,q=x.rotrSH(m,F,1)^x.rotrSH(m,F,8)^x.shrSH(m,F,7),z=x.rotrSL(m,F,1)^x.rotrSL(m,F,8)^x.shrSL(m,F,7),I=P[d-2]|0,O=Q[d-2]|0,ot=x.rotrSH(I,O,19)^x.rotrBH(I,O,61)^x.shrSH(I,O,6),tt=x.rotrSL(I,O,19)^x.rotrBL(I,O,61)^x.shrSL(I,O,6),st=x.add4L(z,tt,Q[d-7],Q[d-16]),at=x.add4H(st,q,ot,P[d-7],P[d-16]);P[d]=at|0,Q[d]=st|0}let{Ah:r,Al:o,Bh:s,Bl:a,Ch:u,Cl:i,Dh:D,Dl:c,Eh:l,El:p,Fh:w,Fl:h,Gh:g,Gl:S,Hh:v,Hl:L}=this;for(let d=0;d<80;d++){const m=x.rotrSH(l,p,14)^x.rotrSH(l,p,18)^x.rotrBH(l,p,41),F=x.rotrSL(l,p,14)^x.rotrSL(l,p,18)^x.rotrBL(l,p,41),q=l&w^~l&g,z=p&h^~p&S,I=x.add5L(L,F,z,Yn[d],Q[d]),O=x.add5H(I,v,m,q,Vn[d],P[d]),ot=I|0,tt=x.rotrSH(r,o,28)^x.rotrBH(r,o,34)^x.rotrBH(r,o,39),st=x.rotrSL(r,o,28)^x.rotrBL(r,o,34)^x.rotrBL(r,o,39),at=r&s^r&u^s&u,Ct=o&a^o&i^a&i;v=g|0,L=S|0,g=w|0,S=h|0,w=l|0,h=p|0,{h:l,l:p}=x.add(D|0,c|0,O|0,ot|0),D=u|0,c=i|0,u=s|0,i=a|0,s=r|0,a=o|0;const At=x.add3L(ot,st,Ct);r=x.add3H(At,O,tt,at),o=At|0}({h:r,l:o}=x.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:a}=x.add(this.Bh|0,this.Bl|0,s|0,a|0),{h:u,l:i}=x.add(this.Ch|0,this.Cl|0,u|0,i|0),{h:D,l:c}=x.add(this.Dh|0,this.Dl|0,D|0,c|0),{h:l,l:p}=x.add(this.Eh|0,this.El|0,l|0,p|0),{h:w,l:h}=x.add(this.Fh|0,this.Fl|0,w|0,h|0),{h:g,l:S}=x.add(this.Gh|0,this.Gl|0,g|0,S|0),{h:v,l:L}=x.add(this.Hh|0,this.Hl|0,v|0,L|0),this.set(r,o,s,a,u,i,D,c,l,p,w,h,g,S,v,L)}roundClean(){P.fill(0),Q.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const Kn=Bn(()=>new Jn);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vt=BigInt(0),be=BigInt(1),Wn=BigInt(2);function It(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Ut(t){if(!It(t))throw new Error("Uint8Array expected")}function Tt(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const Xn=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Ft(t){Ut(t);let e="";for(let n=0;n<t.length;n++)e+=Xn[t[n]];return e}function pe(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?vt:BigInt("0x"+t)}const K={_0:48,_9:57,A:65,F:70,a:97,f:102};function we(t){if(t>=K._0&&t<=K._9)return t-K._0;if(t>=K.A&&t<=K.F)return t-(K.A-10);if(t>=K.a&&t<=K.f)return t-(K.a-10)}function Ee(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(n);for(let o=0,s=0;o<n;o++,s+=2){const a=we(t.charCodeAt(s)),u=we(t.charCodeAt(s+1));if(a===void 0||u===void 0){const i=t[s]+t[s+1];throw new Error('hex string expected, got non-hex character "'+i+'" at index '+s)}r[o]=a*16+u}return r}function Pn(t){return pe(Ft(t))}function Et(t){return Ut(t),pe(Ft(Uint8Array.from(t).reverse()))}function ge(t,e){return Ee(t.toString(16).padStart(e*2,"0"))}function Nt(t,e){return ge(t,e).reverse()}function W(t,e,n){let r;if(typeof e=="string")try{r=Ee(e)}catch(s){throw new Error(t+" must be hex string or Uint8Array, cause: "+s)}else if(It(e))r=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const o=r.length;if(typeof n=="number"&&o!==n)throw new Error(t+" of length "+n+" expected, got "+o);return r}function ye(...t){let e=0;for(let r=0;r<t.length;r++){const o=t[r];Ut(o),e+=o.length}const n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){const s=t[r];n.set(s,o),o+=s.length}return n}const Lt=t=>typeof t=="bigint"&&vt<=t;function Qn(t,e,n){return Lt(t)&&Lt(e)&&Lt(n)&&e<=t&&t<n}function ft(t,e,n,r){if(!Qn(e,n,r))throw new Error("expected valid "+t+": "+n+" <= n < "+r+", got "+e)}function tr(t){let e;for(e=0;t>vt;t>>=be,e+=1);return e}const er=t=>(Wn<<BigInt(t-1))-be,nr={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||It(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function Ot(t,e,n={}){const r=(o,s,a)=>{const u=nr[s];if(typeof u!="function")throw new Error("invalid validator function");const i=t[o];if(!(a&&i===void 0)&&!u(i,t))throw new Error("param "+String(o)+" is invalid. Expected "+s+", got "+i)};for(const[o,s]of Object.entries(e))r(o,s,!1);for(const[o,s]of Object.entries(n))r(o,s,!0);return t}function xe(t){const e=new WeakMap;return(n,...r)=>{const o=e.get(n);if(o!==void 0)return o;const s=t(n,...r);return e.set(n,s),s}}const M=BigInt(0),N=BigInt(1),nt=BigInt(2),rr=BigInt(3),Ht=BigInt(4),Be=BigInt(5),Ce=BigInt(8);function H(t,e){const n=t%e;return n>=M?n:e+n}function or(t,e,n){if(e<M)throw new Error("invalid exponent, negatives unsupported");if(n<=M)throw new Error("invalid modulus");if(n===N)return M;let r=N;for(;e>M;)e&N&&(r=r*t%n),t=t*t%n,e>>=N;return r}function J(t,e,n){let r=t;for(;e-- >M;)r*=r,r%=n;return r}function Ae(t,e){if(t===M)throw new Error("invert: expected non-zero number");if(e<=M)throw new Error("invert: expected positive modulus, got "+e);let n=H(t,e),r=e,o=M,s=N;for(;n!==M;){const u=r/n,i=r%n,D=o-s*u;r=n,n=i,o=s,s=D}if(r!==N)throw new Error("invert: does not exist");return H(o,e)}function sr(t){const e=(t-N)/nt;let n,r,o;for(n=t-N,r=0;n%nt===M;n/=nt,r++);for(o=nt;o<t&&or(o,e,t)!==t-N;o++)if(o>1e3)throw new Error("Cannot find square root: likely non-prime P");if(r===1){const a=(t+N)/Ht;return function(i,D){const c=i.pow(D,a);if(!i.eql(i.sqr(c),D))throw new Error("Cannot find square root");return c}}const s=(n+N)/nt;return function(u,i){if(u.pow(i,e)===u.neg(u.ONE))throw new Error("Cannot find square root");let D=r,c=u.pow(u.mul(u.ONE,o),n),l=u.pow(i,s),p=u.pow(i,n);for(;!u.eql(p,u.ONE);){if(u.eql(p,u.ZERO))return u.ZERO;let w=1;for(let g=u.sqr(p);w<D&&!u.eql(g,u.ONE);w++)g=u.sqr(g);const h=u.pow(c,N<<BigInt(D-w-1));c=u.sqr(h),l=u.mul(l,h),p=u.mul(p,c),D=w}return l}}function ir(t){if(t%Ht===rr){const e=(t+N)/Ht;return function(r,o){const s=r.pow(o,e);if(!r.eql(r.sqr(s),o))throw new Error("Cannot find square root");return s}}if(t%Ce===Be){const e=(t-Be)/Ce;return function(r,o){const s=r.mul(o,nt),a=r.pow(s,e),u=r.mul(o,a),i=r.mul(r.mul(u,nt),a),D=r.mul(u,r.sub(i,r.ONE));if(!r.eql(r.sqr(D),o))throw new Error("Cannot find square root");return D}}return sr(t)}const ur=(t,e)=>(H(t,e)&N)===N,cr=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ar(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=cr.reduce((r,o)=>(r[o]="function",r),e);return Ot(t,n)}function fr(t,e,n){if(n<M)throw new Error("invalid exponent, negatives unsupported");if(n===M)return t.ONE;if(n===N)return e;let r=t.ONE,o=e;for(;n>M;)n&N&&(r=t.mul(r,o)),o=t.sqr(o),n>>=N;return r}function Dr(t,e){const n=new Array(e.length),r=e.reduce((s,a,u)=>t.is0(a)?s:(n[u]=s,t.mul(s,a)),t.ONE),o=t.inv(r);return e.reduceRight((s,a,u)=>t.is0(a)?s:(n[u]=t.mul(s,n[u]),t.mul(s,a)),o),n}function me(t,e){const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function _e(t,e,n=!1,r={}){if(t<=M)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:o,nByteLength:s}=me(t,e);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let a;const u=Object.freeze({ORDER:t,isLE:n,BITS:o,BYTES:s,MASK:er(o),ZERO:M,ONE:N,create:i=>H(i,t),isValid:i=>{if(typeof i!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof i);return M<=i&&i<t},is0:i=>i===M,isOdd:i=>(i&N)===N,neg:i=>H(-i,t),eql:(i,D)=>i===D,sqr:i=>H(i*i,t),add:(i,D)=>H(i+D,t),sub:(i,D)=>H(i-D,t),mul:(i,D)=>H(i*D,t),pow:(i,D)=>fr(u,i,D),div:(i,D)=>H(i*Ae(D,t),t),sqrN:i=>i*i,addN:(i,D)=>i+D,subN:(i,D)=>i-D,mulN:(i,D)=>i*D,inv:i=>Ae(i,t),sqrt:r.sqrt||(i=>(a||(a=ir(t)),a(u,i))),invertBatch:i=>Dr(u,i),cmov:(i,D,c)=>c?D:i,toBytes:i=>n?Nt(i,s):ge(i,s),fromBytes:i=>{if(i.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+i.length);return n?Et(i):Pn(i)}});return Object.freeze(u)}const Se=BigInt(0),gt=BigInt(1);function zt(t,e){const n=e.negate();return t?n:e}function ve(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Mt(t,e){ve(t,e);const n=Math.ceil(e/t)+1,r=2**(t-1);return{windows:n,windowSize:r}}function dr(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,r)=>{if(!(n instanceof e))throw new Error("invalid point at index "+r)})}function hr(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,r)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+r)})}const qt=new WeakMap,Ie=new WeakMap;function $t(t){return Ie.get(t)||1}function lr(t,e){return{constTimeNegate:zt,hasPrecomputes(n){return $t(n)!==1},unsafeLadder(n,r,o=t.ZERO){let s=n;for(;r>Se;)r&gt&&(o=o.add(s)),s=s.double(),r>>=gt;return o},precomputeWindow(n,r){const{windows:o,windowSize:s}=Mt(r,e),a=[];let u=n,i=u;for(let D=0;D<o;D++){i=u,a.push(i);for(let c=1;c<s;c++)i=i.add(u),a.push(i);u=i.double()}return a},wNAF(n,r,o){const{windows:s,windowSize:a}=Mt(n,e);let u=t.ZERO,i=t.BASE;const D=BigInt(2**n-1),c=2**n,l=BigInt(n);for(let p=0;p<s;p++){const w=p*a;let h=Number(o&D);o>>=l,h>a&&(h-=c,o+=gt);const g=w,S=w+Math.abs(h)-1,v=p%2!==0,L=h<0;h===0?i=i.add(zt(v,r[g])):u=u.add(zt(L,r[S]))}return{p:u,f:i}},wNAFUnsafe(n,r,o,s=t.ZERO){const{windows:a,windowSize:u}=Mt(n,e),i=BigInt(2**n-1),D=2**n,c=BigInt(n);for(let l=0;l<a;l++){const p=l*u;if(o===Se)break;let w=Number(o&i);if(o>>=c,w>u&&(w-=D,o+=gt),w===0)continue;let h=r[p+Math.abs(w)-1];w<0&&(h=h.negate()),s=s.add(h)}return s},getPrecomputes(n,r,o){let s=qt.get(r);return s||(s=this.precomputeWindow(r,n),n!==1&&qt.set(r,o(s))),s},wNAFCached(n,r,o){const s=$t(n);return this.wNAF(s,this.getPrecomputes(s,n,o),r)},wNAFCachedUnsafe(n,r,o,s){const a=$t(n);return a===1?this.unsafeLadder(n,r,s):this.wNAFUnsafe(a,this.getPrecomputes(a,n,o),r,s)},setWindowSize(n,r){ve(r,e),Ie.set(n,r),qt.delete(n)}}}function br(t,e,n,r){if(dr(n,t),hr(r,e),n.length!==r.length)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,s=tr(BigInt(n.length)),a=s>12?s-3:s>4?s-2:s?2:1,u=(1<<a)-1,i=new Array(u+1).fill(o),D=Math.floor((e.BITS-1)/a)*a;let c=o;for(let l=D;l>=0;l-=a){i.fill(o);for(let w=0;w<r.length;w++){const h=r[w],g=Number(h>>BigInt(l)&BigInt(u));i[g]=i[g].add(n[w])}let p=o;for(let w=i.length-1,h=o;w>0;w--)h=h.add(i[w]),p=p.add(h);if(c=c.add(p),l!==0)for(let w=0;w<a;w++)c=c.double()}return c}function pr(t){return ar(t.Fp),Ot(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...me(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}const G=BigInt(0),j=BigInt(1),yt=BigInt(2),wr=BigInt(8),Er={zip215:!0};function gr(t){const e=pr(t);return Ot(t,{hash:"function",a:"bigint",d:"bigint",randomBytes:"function"},{adjustScalarBytes:"function",domain:"function",uvRatio:"function",mapToCurve:"function"}),Object.freeze({...e})}function yr(t){const e=gr(t),{Fp:n,n:r,prehash:o,hash:s,randomBytes:a,nByteLength:u,h:i}=e,D=yt<<BigInt(u*8)-j,c=n.create,l=_e(e.n,e.nBitLength),p=e.uvRatio||((y,f)=>{try{return{isValid:!0,value:n.sqrt(y*n.inv(f))}}catch{return{isValid:!1,value:G}}}),w=e.adjustScalarBytes||(y=>y),h=e.domain||((y,f,b)=>{if(Tt("phflag",b),f.length||b)throw new Error("Contexts/pre-hash are not supported");return y});function g(y,f){ft("coordinate "+y,f,G,D)}function S(y){if(!(y instanceof d))throw new Error("ExtendedPoint expected")}const v=xe((y,f)=>{const{ex:b,ey:E,ez:B}=y,C=y.is0();f==null&&(f=C?wr:n.inv(B));const A=c(b*f),U=c(E*f),_=c(B*f);if(C)return{x:G,y:j};if(_!==j)throw new Error("invZ was invalid");return{x:A,y:U}}),L=xe(y=>{const{a:f,d:b}=e;if(y.is0())throw new Error("bad point: ZERO");const{ex:E,ey:B,ez:C,et:A}=y,U=c(E*E),_=c(B*B),T=c(C*C),$=c(T*T),R=c(U*f),V=c(T*c(R+_)),Y=c($+c(b*c(U*_)));if(V!==Y)throw new Error("bad point: equation left != right (1)");const Z=c(E*B),X=c(C*A);if(Z!==X)throw new Error("bad point: equation left != right (2)");return!0});class d{constructor(f,b,E,B){this.ex=f,this.ey=b,this.ez=E,this.et=B,g("x",f),g("y",b),g("z",E),g("t",B),Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static fromAffine(f){if(f instanceof d)throw new Error("extended point not allowed");const{x:b,y:E}=f||{};return g("x",b),g("y",E),new d(b,E,j,c(b*E))}static normalizeZ(f){const b=n.invertBatch(f.map(E=>E.ez));return f.map((E,B)=>E.toAffine(b[B])).map(d.fromAffine)}static msm(f,b){return br(d,l,f,b)}_setWindowSize(f){q.setWindowSize(this,f)}assertValidity(){L(this)}equals(f){S(f);const{ex:b,ey:E,ez:B}=this,{ex:C,ey:A,ez:U}=f,_=c(b*U),T=c(C*B),$=c(E*U),R=c(A*B);return _===T&&$===R}is0(){return this.equals(d.ZERO)}negate(){return new d(c(-this.ex),this.ey,this.ez,c(-this.et))}double(){const{a:f}=e,{ex:b,ey:E,ez:B}=this,C=c(b*b),A=c(E*E),U=c(yt*c(B*B)),_=c(f*C),T=b+E,$=c(c(T*T)-C-A),R=_+A,V=R-U,Y=_-A,Z=c($*V),X=c(R*Y),et=c($*Y),pt=c(V*R);return new d(Z,X,pt,et)}add(f){S(f);const{a:b,d:E}=e,{ex:B,ey:C,ez:A,et:U}=this,{ex:_,ey:T,ez:$,et:R}=f;if(b===BigInt(-1)){const re=c((C-B)*(T+_)),oe=c((C+B)*(T-_)),mt=c(oe-re);if(mt===G)return this.double();const se=c(A*yt*R),ie=c(U*yt*$),ue=ie+se,ce=oe+re,ae=ie-se,Dn=c(ue*mt),dn=c(ce*ae),hn=c(ue*ae),ln=c(mt*ce);return new d(Dn,dn,ln,hn)}const V=c(B*_),Y=c(C*T),Z=c(U*E*R),X=c(A*$),et=c((B+C)*(_+T)-V-Y),pt=X-Z,ee=X+Z,ne=c(Y-b*V),un=c(et*pt),cn=c(ee*ne),an=c(et*ne),fn=c(pt*ee);return new d(un,cn,fn,an)}subtract(f){return this.add(f.negate())}wNAF(f){return q.wNAFCached(this,f,d.normalizeZ)}multiply(f){const b=f;ft("scalar",b,j,r);const{p:E,f:B}=this.wNAF(b);return d.normalizeZ([E,B])[0]}multiplyUnsafe(f,b=d.ZERO){const E=f;return ft("scalar",E,G,r),E===G?F:this.is0()||E===j?this:q.wNAFCachedUnsafe(this,E,d.normalizeZ,b)}isSmallOrder(){return this.multiplyUnsafe(i).is0()}isTorsionFree(){return q.unsafeLadder(this,r).is0()}toAffine(f){return v(this,f)}clearCofactor(){const{h:f}=e;return f===j?this:this.multiplyUnsafe(f)}static fromHex(f,b=!1){const{d:E,a:B}=e,C=n.BYTES;f=W("pointHex",f,C),Tt("zip215",b);const A=f.slice(),U=f[C-1];A[C-1]=U&-129;const _=Et(A),T=b?D:n.ORDER;ft("pointHex.y",_,G,T);const $=c(_*_),R=c($-j),V=c(E*$-B);let{isValid:Y,value:Z}=p(R,V);if(!Y)throw new Error("Point.fromHex: invalid y coordinate");const X=(Z&j)===j,et=(U&128)!==0;if(!b&&Z===G&&et)throw new Error("Point.fromHex: x=0 and x_0=1");return et!==X&&(Z=c(-Z)),d.fromAffine({x:Z,y:_})}static fromPrivateKey(f){return O(f).point}toRawBytes(){const{x:f,y:b}=this.toAffine(),E=Nt(b,n.BYTES);return E[E.length-1]|=f&j?128:0,E}toHex(){return Ft(this.toRawBytes())}}d.BASE=new d(e.Gx,e.Gy,j,c(e.Gx*e.Gy)),d.ZERO=new d(G,j,j,G);const{BASE:m,ZERO:F}=d,q=lr(d,u*8);function z(y){return H(y,r)}function I(y){return z(Et(y))}function O(y){const f=n.BYTES;y=W("private key",y,f);const b=W("hashed private key",s(y),2*f),E=w(b.slice(0,f)),B=b.slice(f,2*f),C=I(E),A=m.multiply(C),U=A.toRawBytes();return{head:E,prefix:B,scalar:C,point:A,pointBytes:U}}function ot(y){return O(y).pointBytes}function tt(y=new Uint8Array,...f){const b=ye(...f);return I(s(h(b,W("context",y),!!o)))}function st(y,f,b={}){y=W("message",y),o&&(y=o(y));const{prefix:E,scalar:B,pointBytes:C}=O(f),A=tt(b.context,E,y),U=m.multiply(A).toRawBytes(),_=tt(b.context,U,C,y),T=z(A+_*B);ft("signature.s",T,G,r);const $=ye(U,Nt(T,n.BYTES));return W("result",$,n.BYTES*2)}const at=Er;function Ct(y,f,b,E=at){const{context:B,zip215:C}=E,A=n.BYTES;y=W("signature",y,2*A),f=W("message",f),b=W("publicKey",b,A),C!==void 0&&Tt("zip215",C),o&&(f=o(f));const U=Et(y.slice(A,2*A));let _,T,$;try{_=d.fromHex(b,C),T=d.fromHex(y.slice(0,A),C),$=m.multiplyUnsafe(U)}catch{return!1}if(!C&&_.isSmallOrder())return!1;const R=tt(B,T.toRawBytes(),_.toRawBytes(),f);return T.add(_.multiplyUnsafe(R)).subtract($).clearCofactor().equals(d.ZERO)}return m._setWindowSize(8),{CURVE:e,getPublicKey:ot,sign:st,verify:Ct,ExtendedPoint:d,utils:{getExtendedPublicKey:O,randomPrivateKey:()=>a(n.BYTES),precompute(y=8,f=d.BASE){return f._setWindowSize(y),f.multiply(BigInt(3)),f}}}}BigInt(0),BigInt(1);const index_es_kt=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),Ue=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");BigInt(0);const xr=BigInt(1),Te=BigInt(2);BigInt(3);const Br=BigInt(5),Cr=BigInt(8);function Ar(t){const e=BigInt(10),n=BigInt(20),r=BigInt(40),o=BigInt(80),s=index_es_kt,u=t*t%s*t%s,i=J(u,Te,s)*u%s,D=J(i,xr,s)*t%s,c=J(D,Br,s)*D%s,l=J(c,e,s)*c%s,p=J(l,n,s)*l%s,w=J(p,r,s)*p%s,h=J(w,o,s)*w%s,g=J(h,o,s)*w%s,S=J(g,e,s)*c%s;return{pow_p_5_8:J(S,Te,s)*t%s,b2:u}}function mr(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}function _r(t,e){const n=index_es_kt,r=H(e*e*e,n),o=H(r*r*e,n),s=Ar(t*o).pow_p_5_8;let a=H(t*r*s,n);const u=H(e*a*a,n),i=a,D=H(a*Ue,n),c=u===t,l=u===H(-t,n),p=u===H(-t*Ue,n);return c&&(a=i),(l||p)&&(a=D),ur(a,n)&&(a=H(-a,n)),{isValid:c||l,value:a}}const Sr=(()=>_e(index_es_kt,void 0,!0))(),vr=(()=>({a:BigInt(-1),d:BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),Fp:Sr,n:BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),h:Cr,Gx:BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),Gy:BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),hash:Kn,randomBytes:he,adjustScalarBytes:mr,uvRatio:_r}))(),Rt=(()=>yr(vr))(),jt="EdDSA",Zt="JWT",ut=".",Dt="base64url",Gt="utf8",xt="utf8",Vt=":",Yt="did",Jt="key",dt="base58btc",Kt="z",Wt="K36",Fe=32,Ne=32;function Xt(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function Le(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Xt(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function Oe(t,e){e||(e=t.reduce((o,s)=>o+s.length,0));const n=Le(e);let r=0;for(const o of t)n.set(o,r),r+=o.length;return Xt(n)}function Ir(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var o=0;o<t.length;o++){var s=t.charAt(o),a=s.charCodeAt(0);if(n[a]!==255)throw new TypeError(s+" is ambiguous");n[a]=o}var u=t.length,i=t.charAt(0),D=Math.log(u)/Math.log(256),c=Math.log(256)/Math.log(u);function l(h){if(h instanceof Uint8Array||(ArrayBuffer.isView(h)?h=new Uint8Array(h.buffer,h.byteOffset,h.byteLength):Array.isArray(h)&&(h=Uint8Array.from(h))),!(h instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(h.length===0)return"";for(var g=0,S=0,v=0,L=h.length;v!==L&&h[v]===0;)v++,g++;for(var d=(L-v)*c+1>>>0,m=new Uint8Array(d);v!==L;){for(var F=h[v],q=0,z=d-1;(F!==0||q<S)&&z!==-1;z--,q++)F+=256*m[z]>>>0,m[z]=F%u>>>0,F=F/u>>>0;if(F!==0)throw new Error("Non-zero carry");S=q,v++}for(var I=d-S;I!==d&&m[I]===0;)I++;for(var O=i.repeat(g);I<d;++I)O+=t.charAt(m[I]);return O}function p(h){if(typeof h!="string")throw new TypeError("Expected String");if(h.length===0)return new Uint8Array;var g=0;if(h[g]!==" "){for(var S=0,v=0;h[g]===i;)S++,g++;for(var L=(h.length-g)*D+1>>>0,d=new Uint8Array(L);h[g];){var m=n[h.charCodeAt(g)];if(m===255)return;for(var F=0,q=L-1;(m!==0||F<v)&&q!==-1;q--,F++)m+=u*d[q]>>>0,d[q]=m%256>>>0,m=m/256>>>0;if(m!==0)throw new Error("Non-zero carry");v=F,g++}if(h[g]!==" "){for(var z=L-v;z!==L&&d[z]===0;)z++;for(var I=new Uint8Array(S+(L-z)),O=S;z!==L;)I[O++]=d[z++];return I}}}function w(h){var g=p(h);if(g)return g;throw new Error(`Non-${e} character`)}return{encode:l,decodeUnsafe:p,decode:w}}var Ur=Ir,Tr=Ur;const He=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},Fr=t=>new TextEncoder().encode(t),Nr=t=>new TextDecoder().decode(t);class Lr{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Or{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return ze(this,e)}}class Hr{constructor(e){this.decoders=e}or(e){return ze(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const ze=(t,e)=>new Hr({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class zr{constructor(e,n,r,o){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=o,this.encoder=new Lr(e,n,r),this.decoder=new Or(e,n,o)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Bt=({name:t,prefix:e,encode:n,decode:r})=>new zr(t,e,n,r),ht=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:o}=Tr(n,e);return Bt({prefix:t,name:e,encode:r,decode:s=>He(o(s))})},Mr=(t,e,n,r)=>{const o={};for(let c=0;c<e.length;++c)o[e[c]]=c;let s=t.length;for(;t[s-1]==="=";)--s;const a=new Uint8Array(s*n/8|0);let u=0,i=0,D=0;for(let c=0;c<s;++c){const l=o[t[c]];if(l===void 0)throw new SyntaxError(`Non-${r} character`);i=i<<n|l,u+=n,u>=8&&(u-=8,a[D++]=255&i>>u)}if(u>=n||255&i<<8-u)throw new SyntaxError("Unexpected end of data");return a},qr=(t,e,n)=>{const r=e[e.length-1]==="=",o=(1<<n)-1;let s="",a=0,u=0;for(let i=0;i<t.length;++i)for(u=u<<8|t[i],a+=8;a>n;)a-=n,s+=e[o&u>>a];if(a&&(s+=e[o&u<<n-a]),r)for(;s.length*n&7;)s+="=";return s},k=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>Bt({prefix:e,name:t,encode(o){return qr(o,r,n)},decode(o){return Mr(o,r,n,t)}}),$r=Bt({prefix:"\0",name:"identity",encode:t=>Nr(t),decode:t=>Fr(t)});var kr=Object.freeze({__proto__:null,identity:$r});const Rr=k({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var jr=Object.freeze({__proto__:null,base2:Rr});const Zr=k({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var Gr=Object.freeze({__proto__:null,base8:Zr});const Vr=ht({prefix:"9",name:"base10",alphabet:"0123456789"});var Yr=Object.freeze({__proto__:null,base10:Vr});const Jr=k({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),Kr=k({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var Wr=Object.freeze({__proto__:null,base16:Jr,base16upper:Kr});const Xr=k({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Pr=k({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Qr=k({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),to=k({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),eo=k({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),no=k({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ro=k({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),oo=k({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),so=k({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var io=Object.freeze({__proto__:null,base32:Xr,base32upper:Pr,base32pad:Qr,base32padupper:to,base32hex:eo,base32hexupper:no,base32hexpad:ro,base32hexpadupper:oo,base32z:so});const uo=ht({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),co=ht({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var ao=Object.freeze({__proto__:null,base36:uo,base36upper:co});const fo=ht({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Do=ht({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var ho=Object.freeze({__proto__:null,base58btc:fo,base58flickr:Do});const lo=k({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),bo=k({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),po=k({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),wo=k({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var Eo=Object.freeze({__proto__:null,base64:lo,base64pad:bo,base64url:po,base64urlpad:wo});const Me=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),go=Me.reduce((t,e,n)=>(t[n]=e,t),[]),yo=Me.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function xo(t){return t.reduce((e,n)=>(e+=go[n],e),"")}function Bo(t){const e=[];for(const n of t){const r=yo[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const Co=Bt({prefix:"\u{1F680}",name:"base256emoji",encode:xo,decode:Bo});var Ao=Object.freeze({__proto__:null,base256emoji:Co}),mo=$e,qe=128,_o=127,So=~_o,vo=Math.pow(2,31);function $e(t,e,n){e=e||[],n=n||0;for(var r=n;t>=vo;)e[n++]=t&255|qe,t/=128;for(;t&So;)e[n++]=t&255|qe,t>>>=7;return e[n]=t|0,$e.bytes=n-r+1,e}var Io=Pt,Uo=128,ke=127;function Pt(t,r){var n=0,r=r||0,o=0,s=r,a,u=t.length;do{if(s>=u)throw Pt.bytes=0,new RangeError("Could not decode varint");a=t[s++],n+=o<28?(a&ke)<<o:(a&ke)*Math.pow(2,o),o+=7}while(a>=Uo);return Pt.bytes=s-r,n}var To=Math.pow(2,7),Fo=Math.pow(2,14),No=Math.pow(2,21),Lo=Math.pow(2,28),Oo=Math.pow(2,35),Ho=Math.pow(2,42),zo=Math.pow(2,49),Mo=Math.pow(2,56),qo=Math.pow(2,63),$o=function(t){return t<To?1:t<Fo?2:t<No?3:t<Lo?4:t<Oo?5:t<Ho?6:t<zo?7:t<Mo?8:t<qo?9:10},ko={encode:mo,decode:Io,encodingLength:$o},Re=ko;const je=(t,e,n=0)=>(Re.encode(t,e,n),e),Ze=t=>Re.encodingLength(t),Qt=(t,e)=>{const n=e.byteLength,r=Ze(t),o=r+Ze(n),s=new Uint8Array(o+n);return je(t,s,0),je(n,s,r),s.set(e,o),new Ro(t,n,e,s)};class Ro{constructor(e,n,r,o){this.code=e,this.size=n,this.digest=r,this.bytes=o}}const Ge=({name:t,code:e,encode:n})=>new jo(t,e,n);class jo{constructor(e,n,r){this.name=e,this.code=n,this.encode=r}digest(e){if(e instanceof Uint8Array){const n=this.encode(e);return n instanceof Uint8Array?Qt(this.code,n):n.then(r=>Qt(this.code,r))}else throw Error("Unknown type, must be binary type")}}const Ve=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),Zo=Ge({name:"sha2-256",code:18,encode:Ve("SHA-256")}),Go=Ge({name:"sha2-512",code:19,encode:Ve("SHA-512")});var Vo=Object.freeze({__proto__:null,sha256:Zo,sha512:Go});const Ye=0,Yo="identity",Je=He,Jo=t=>Qt(Ye,Je(t)),Ko={code:Ye,name:Yo,encode:Je,digest:Jo};var Wo=Object.freeze({__proto__:null,identity:Ko});new TextEncoder,new TextDecoder;const Ke={...kr,...jr,...Gr,...Yr,...Wr,...io,...ao,...ho,...Eo,...Ao};({...Vo,...Wo});function We(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const Xe=We("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),te=We("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=Le(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),Pe={utf8:Xe,"utf-8":Xe,hex:Ke.base16,latin1:te,ascii:te,binary:te,...Ke};function ct(t,e="utf8"){const n=Pe[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}function rt(t,e="utf8"){const n=Pe[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Xt(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function lt(t){return safeJsonParse(ct(rt(t,Dt),Gt))}function bt(t){return ct(rt(safeJsonStringify(t),Gt),Dt)}function Qe(t){const e=rt(Wt,dt),n=Kt+ct(Oe([e,t]),dt);return[Yt,Jt,n].join(Vt)}function tn(t){const[e,n,r]=t.split(Vt);if(e!==Yt||n!==Jt)throw new Error('Issuer must be a DID with method "key"');if(r.slice(0,1)!==Kt)throw new Error("Issuer must be a key in mulicodec format");const o=rt(r.slice(1),dt);if(ct(o.slice(0,2),dt)!==Wt)throw new Error('Issuer must be a public key with type "Ed25519"');const s=o.slice(2);if(s.length!==Fe)throw new Error("Issuer must be a public key with length 32 bytes");return s}function en(t){return ct(t,Dt)}function nn(t){return rt(t,Dt)}function rn(t){return rt([bt(t.header),bt(t.payload)].join(ut),xt)}function Xo(t){const e=ct(t,xt).split(ut),n=lt(e[0]),r=lt(e[1]);return{header:n,payload:r}}function on(t){return[bt(t.header),bt(t.payload),en(t.signature)].join(ut)}function sn(t){const e=t.split(ut),n=lt(e[0]),r=lt(e[1]),o=nn(e[2]),s=rt(e.slice(0,2).join(ut),xt);return{header:n,payload:r,signature:o,data:s}}function Po(t=he(Ne)){const e=Rt.getPublicKey(t);return{secretKey:Oe([t,e]),publicKey:e}}async function Qo(t,e,n,r,o=(0,cjs.fromMiliseconds)(Date.now())){const s={alg:jt,typ:Zt},a=Qe(r.publicKey),u=o+n,i={iss:a,sub:t,aud:e,iat:o,exp:u},D=rn({header:s,payload:i}),c=Rt.sign(D,r.secretKey.slice(0,32));return on({header:s,payload:i,signature:c})}async function ts(t){const{header:e,payload:n,data:r,signature:o}=sn(t);if(e.alg!==jt||e.typ!==Zt)throw new Error("JWT must use EdDSA algorithm");const s=tn(n.iss);return Rt.verify(o,r,s)}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/uint8arrays/esm/src/alloc.js
function alloc(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
    return globalThis.Buffer.alloc(size);
  }
  return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}
;// ./node_modules/uint8arrays/esm/src/concat.js

function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bases/base.js + 1 modules
var base = __webpack_require__(552071);
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bytes.js
var bytes = __webpack_require__(192081);
;// ./node_modules/multiformats/esm/src/bases/identity.js


const identity = (0,base/* from */.HT)({
  prefix: '\0',
  name: 'identity',
  encode: buf => (0,bytes/* toString */.dI)(buf),
  decode: str => (0,bytes/* fromString */.sH)(str)
});
;// ./node_modules/multiformats/esm/src/bases/base2.js

const base2 = (0,base/* rfc4648 */.yE)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});
;// ./node_modules/multiformats/esm/src/bases/base8.js

const base8 = (0,base/* rfc4648 */.yE)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});
;// ./node_modules/multiformats/esm/src/bases/base10.js

const base10 = (0,base/* baseX */._Q)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});
;// ./node_modules/multiformats/esm/src/bases/base16.js

const base16 = (0,base/* rfc4648 */.yE)({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = (0,base/* rfc4648 */.yE)({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bases/base32.js
var base32 = __webpack_require__(633431);
;// ./node_modules/multiformats/esm/src/bases/base36.js

const base36 = (0,base/* baseX */._Q)({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = (0,base/* baseX */._Q)({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/bases/base58.js
var base58 = __webpack_require__(852807);
;// ./node_modules/multiformats/esm/src/bases/base64.js

const base64 = (0,base/* rfc4648 */.yE)({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = (0,base/* rfc4648 */.yE)({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = (0,base/* rfc4648 */.yE)({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = (0,base/* rfc4648 */.yE)({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});
;// ./node_modules/multiformats/esm/src/bases/base256emoji.js

const alphabet = Array.from('\uD83D\uDE80\uD83E\uDE90\u2604\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09\u2600\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02\u2764\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09\u263A\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E\u270C\u2728\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D\u2763\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33\u270B\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13\u2B50\u2705\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6\u2714\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90\u2639\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20\u261D\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B\u26BD\uD83E\uDD19\u2615\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81\u26A1\uD83C\uDF1E\uD83C\uDF88\u274C\u270A\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C\u2708\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74\u25B6\u27A1\u2753\uD83D\uDC8E\uD83D\uDCB8\u2B07\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A\u26A0\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37\u260E\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51\u2744\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42');
const alphabetBytesToChars = alphabet.reduce((p, c, i) => {
  p[i] = c;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
  p[c.codePointAt(0)] = i;
  return p;
}, []);
function encode(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, '');
}
function decode(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === undefined) {
      throw new Error(`Non-base256emoji character: ${ char }`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = (0,base/* from */.HT)({
  prefix: '\uD83D\uDE80',
  name: 'base256emoji',
  encode,
  decode
});
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(776982);
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/hashes/digest.js
var hashes_digest = __webpack_require__(814403);
;// ./node_modules/multiformats/esm/src/hashes/hasher.js

const from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? hashes_digest/* create */.vt(this.code, result) : result.then(digest => hashes_digest/* create */.vt(this.code, digest));
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
;// ./node_modules/multiformats/esm/src/hashes/sha2.js



const sha256 = from({
  name: 'sha2-256',
  code: 18,
  encode: input => (0,bytes/* coerce */.au)(external_crypto_.createHash('sha256').update(input).digest())
});
const sha512 = from({
  name: 'sha2-512',
  code: 19,
  encode: input => (0,bytes/* coerce */.au)(external_crypto_.createHash('sha512').update(input).digest())
});
;// ./node_modules/multiformats/esm/src/hashes/identity.js


const code = 0;
const identity_name = 'identity';
const identity_encode = bytes/* coerce */.au;
const digest = input => hashes_digest/* create */.vt(code, identity_encode(input));
const identity_identity = {
  code,
  name: identity_name,
  encode: identity_encode,
  digest
};
;// ./node_modules/multiformats/esm/src/codecs/raw.js

const raw_name = 'raw';
const raw_code = 85;
const raw_encode = node => (0,bytes/* coerce */.au)(node);
const raw_decode = data => (0,bytes/* coerce */.au)(data);
;// ./node_modules/multiformats/esm/src/codecs/json.js
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const json_name = 'json';
const json_code = 512;
const json_encode = node => textEncoder.encode(JSON.stringify(node));
const json_decode = data => JSON.parse(textDecoder.decode(data));
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/cid.js
var cid = __webpack_require__(754070);
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/varint.js + 1 modules
var varint = __webpack_require__(674973);
;// ./node_modules/multiformats/esm/src/index.js






;// ./node_modules/multiformats/esm/src/basics.js















const bases = {
  ...identity_namespaceObject,
  ...base2_namespaceObject,
  ...base8_namespaceObject,
  ...base10_namespaceObject,
  ...base16_namespaceObject,
  ...base32,
  ...base36_namespaceObject,
  ...base58,
  ...base64_namespaceObject,
  ...base256emoji_namespaceObject
};
const hashes = {
  ...sha2_namespaceObject,
  ...hashes_identity_namespaceObject
};
const codecs = {
  raw: raw_namespaceObject,
  json: json_namespaceObject
};

;// ./node_modules/uint8arrays/esm/src/util/bases.js


function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...bases
};
/* harmony default export */ const util_bases = (BASES);
;// ./node_modules/uint8arrays/esm/src/from-string.js

function fromString(string, encoding = 'utf8') {
  const base = util_bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string, 'utf8');
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}
;// ./node_modules/uint8arrays/esm/src/to-string.js

function to_string_toString(array, encoding = 'utf8') {
  const base = util_bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
  }
  return base.encoder.encode(array).substring(1);
}
;// ./node_modules/uint8arrays/esm/src/index.js







// EXTERNAL MODULE: ./node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(86729);
;// ./node_modules/@walletconnect/relay-api/dist/index.es.js
function e(s,r,i="string"){if(!s[r]||typeof s[r]!==i)throw new Error(`Missing or invalid "${r}" param`)}function l(s,r){let i=!0;return r.forEach(t=>{t in s||(i=!1)}),i}function f(s,r){return Array.isArray(s)?s.length===r:Object.keys(s).length===r}function w(s,r){return Array.isArray(s)?s.length>=r:Object.keys(s).length>=r}function u(s,r,i){return(i.length?w(s,r.length):f(s,r.length))?l(s,r):!1}function n(s,r,i="_"){const t=s.split(i);return t[t.length-1].trim().toLowerCase()===r.trim().toLowerCase()}function R(s){return b(s.method)&&a(s.params)}function b(s){return n(s,"subscribe")}function a(s){return u(s,["topic"],[])}function index_es_P(s){return c(s.method)&&h(s.params)}function c(s){return n(s,"publish")}function h(s){return u(s,["message","topic","ttl"],["prompt","tag"])}function _(s){return o(s.method)&&p(s.params)}function o(s){return n(s,"unsubscribe")}function p(s){return u(s,["id","topic"],[])}function S(s){return m(s.method)&&d(s.params)}function m(s){return n(s,"subscription")}function d(s){return u(s,["id","data"],[])}function g(s){if(!b(s.method))throw new Error("JSON-RPC Request has invalid subscribe method");if(!a(s.params))throw new Error("JSON-RPC Request has invalid subscribe params");const r=s.params;return e(r,"topic"),r}function q(s){if(!c(s.method))throw new Error("JSON-RPC Request has invalid publish method");if(!h(s.params))throw new Error("JSON-RPC Request has invalid publish params");const r=s.params;return e(r,"topic"),e(r,"message"),e(r,"ttl","number"),r}function E(s){if(!o(s.method))throw new Error("JSON-RPC Request has invalid unsubscribe method");if(!p(s.params))throw new Error("JSON-RPC Request has invalid unsubscribe params");const r=s.params;return e(r,"id"),r}function index_es_k(s){if(!m(s.method))throw new Error("JSON-RPC Request has invalid subscription method");if(!d(s.params))throw new Error("JSON-RPC Request has invalid subscription params");const r=s.params;return e(r,"id"),e(r,"data"),r}const C={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/utils/dist/index.es.js
const index_es_Pe=":";function index_es_Ye(e){const[t,n]=e.split(index_es_Pe);return{namespace:t,reference:n}}function index_es_Dt(e){const{namespace:t,reference:n}=e;return[t,n].join(index_es_Pe)}function index_es_Xe(e){const[t,n,r]=e.split(index_es_Pe);return{namespace:t,reference:n,address:r}}function index_es_Mt(e){const{namespace:t,reference:n,address:r}=e;return[t,n,r].join(index_es_Pe)}function index_es_Ze(e,t){const n=[];return e.forEach(r=>{const o=t(r);n.includes(o)||n.push(o)}),n}function index_es_Vt(e){const{address:t}=index_es_Xe(e);return t}function index_es_Ht(e){const{namespace:t,reference:n}=index_es_Xe(e);return index_es_Dt({namespace:t,reference:n})}function index_es_Mr(e,t){const{namespace:n,reference:r}=index_es_Ye(t);return index_es_Mt({namespace:n,reference:r,address:e})}function index_es_Vr(e){return index_es_Ze(e,index_es_Vt)}function index_es_Kt(e){return index_es_Ze(e,index_es_Ht)}function index_es_Hr(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const o=e[r];n.push(...o.accounts)}),n}function index_es_Kr(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const o=e[r];n.push(...index_es_Kt(o.accounts))}),n}function index_es_Fr(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const o=e[r];n.push(...index_es_Le(r,o))}),n}function index_es_Le(e,t){return e.includes(":")?[e]:t.chains||[]}const index_es_Ft="ReactNative",index_es_H={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},index_es_Be=" ",index_es_qr=":",index_es_qt="/",index_es_Qe=2,index_es_Gr=1e3,index_es_Gt="js";function et(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function ne(){return!(0,dist_cjs.getDocument)()&&!!(0,dist_cjs.getNavigator)()&&navigator.product===index_es_Ft}function index_es_Wr(){return ne()&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"&&(global==null?void 0:global.Platform.OS)==="android"}function index_es_zr(){return ne()&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"&&(global==null?void 0:global.Platform.OS)==="ios"}function index_es_Ae(){return!et()&&!!(0,dist_cjs.getNavigator)()&&!!(0,dist_cjs.getDocument)()}function ue(){return ne()?index_es_H.reactNative:et()?index_es_H.node:index_es_Ae()?index_es_H.browser:index_es_H.unknown}function index_es_Jr(){var e;try{return ne()&&typeof global<"u"&&typeof(global==null?void 0:global.Application)<"u"?(e=global.Application)==null?void 0:e.applicationId:void 0}catch{return}}function index_es_Wt(e,t){const n=new URLSearchParams(e);for(const r of Object.keys(t).sort())if(t.hasOwnProperty(r)){const o=t[r];o!==void 0&&n.set(r,o)}return n.toString()}function index_es_Yr(){return (0,window_metadata_dist_cjs/* getWindowMetadata */.g)()||{name:"",description:"",url:"",icons:[""]}}function index_es_Xr(e,t){var n;const r=ue(),o={protocol:e,version:t,env:r};return r==="browser"&&(o.host=((n=kt())==null?void 0:n.host)||"unknown"),o}function index_es_zt(){if(ue()===index_es_H.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const e=detect();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function index_es_Jt(){var e;const t=ue();return t===index_es_H.browser?[t,((e=(0,dist_cjs.getLocation)())==null?void 0:e.host)||"unknown"].join(":"):t}function index_es_Yt(e,t,n){const r=index_es_zt(),o=index_es_Jt();return[[e,t].join("-"),[index_es_Gt,n].join("-"),r,o].join("/")}function index_es_Zr({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:o,projectId:s,useOnCloseEvent:i,bundleId:c,packageName:u}){const a=n.split("?"),l=index_es_Yt(e,t,r),f={auth:o,ua:l,projectId:s,useOnCloseEvent:i||void 0,packageName:u||void 0,bundleId:c||void 0},d=index_es_Wt(a[1]||"",f);return a[0]+"?"+d}function index_es_Qr(e){let t=(e.match(/^[^:]+(?=:\/\/)/gi)||[])[0];const n=typeof t<"u"?e.split("://")[1]:e;return t=t==="wss"?"https":"http",[t,n].join("://")}function index_es_eo(e,t,n){if(!e[t]||typeof e[t]!==n)throw new Error(`Missing or invalid "${t}" param`)}function index_es_Xt(e,t=index_es_Qe){return index_es_Zt(e.split(index_es_qt),t)}function index_es_to(e){return index_es_Xt(e).join(index_es_Be)}function re(e,t){return e.filter(n=>t.includes(n)).length===e.length}function index_es_Zt(e,t=index_es_Qe){return e.slice(Math.max(e.length-t,0))}function index_es_no(e){return Object.fromEntries(e.entries())}function index_es_ro(e){return new Map(Object.entries(e))}function index_es_oo(e,t){const n={};return Object.keys(e).forEach(r=>{n[r]=t(e[r])}),n}const index_es_so=e=>e;function index_es_Qt(e){return e.trim().replace(/^\w/,t=>t.toUpperCase())}function index_es_io(e){return e.split(index_es_Be).map(t=>index_es_Qt(t)).join(index_es_Be)}function index_es_co(e=cjs.FIVE_MINUTES,t){const n=(0,cjs.toMiliseconds)(e||cjs.FIVE_MINUTES);let r,o,s,i;return{resolve:c=>{s&&r&&(clearTimeout(s),r(c),i=Promise.resolve(c))},reject:c=>{s&&o&&(clearTimeout(s),o(c))},done:()=>new Promise((c,u)=>{if(i)return c(i);s=setTimeout(()=>{const a=new Error(t);i=Promise.reject(a),u(a)},n),r=c,o=u})}}function index_es_ao(e,t,n){return new Promise(async(r,o)=>{const s=setTimeout(()=>o(new Error(n)),t);try{const i=await e;r(i)}catch(i){o(i)}clearTimeout(s)})}function tt(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function index_es_uo(e){return tt("topic",e)}function index_es_fo(e){return tt("id",e)}function index_es_lo(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if(t==="topic"&&typeof n=="string")r.topic=n;else if(t==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);return r}function index_es_ho(e,t){return (0,cjs.fromMiliseconds)((t||Date.now())+(0,cjs.toMiliseconds)(e))}function index_es_po(e){return Date.now()>=(0,cjs.toMiliseconds)(e)}function index_es_go(e,t){return`${e}${t?`:${t}`:""}`}function index_es_Q(e=[],t=[]){return[...new Set([...e,...t])]}async function index_es_yo({id:e,topic:t,wcDeepLink:n}){var r;try{if(!n)return;const o=typeof n=="string"?JSON.parse(n):n,s=o?.href;if(typeof s!="string")return;const i=index_es_en(s,e,t),c=ue();if(c===index_es_H.browser){if(!((r=(0,dist_cjs.getDocument)())!=null&&r.hasFocus())){console.warn("Document does not have focus, skipping deeplink.");return}index_es_tn(i)}else c===index_es_H.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(i)}catch(o){console.error(o)}}function index_es_en(e,t,n){const r=`requestId=${t}&sessionTopic=${n}`;e.endsWith("/")&&(e=e.slice(0,-1));let o=`${e}`;if(e.startsWith("https://t.me")){const s=e.includes("?")?"&startapp=":"?startapp=";o=`${o}${s}${index_es_on(r,!0)}`}else o=`${o}/wc?${r}`;return o}function index_es_tn(e){let t="_self";index_es_rn()?t="_top":(index_es_nn()||e.startsWith("https://")||e.startsWith("http://"))&&(t="_blank"),window.open(e,t,"noreferrer noopener")}async function index_es_mo(e,t){let n="";try{if(index_es_Ae()&&(n=localStorage.getItem(t),n))return n;n=await e.getItem(t)}catch(r){console.error(r)}return n}function index_es_nt(e,t){return e.filter(n=>t.includes(n))}function index_es_bo(e,t){if(!e.includes(t))return null;const n=e.split(/([&,?,=])/),r=n.indexOf(t);return n[r+2]}function index_es_wo(){return typeof crypto<"u"&&crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}function index_es_Eo(){return typeof process<"u"&&process.env.IS_VITEST==="true"}function index_es_nn(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)}function index_es_rn(){try{return window.self!==window.top}catch{return!1}}function index_es_on(e,t=!1){const n=Buffer.from(e).toString("base64");return t?n.replace(/[=]/g,""):n}function index_es_rt(e){return Buffer.from(e,"base64").toString("utf-8")}function index_es_vo(e){return new Promise(t=>setTimeout(t,e))}function index_es_Ne(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, got "+e)}function index_es_xo(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function index_es_je(e,...t){if(!index_es_xo(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function ot(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");index_es_Ne(e.outputLen),index_es_Ne(e.blockLen)}function index_es_me(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function index_es_sn(e,t){index_es_je(e);const n=t.outputLen;if(e.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}const index_es_Ce=BigInt(2**32-1),cn=BigInt(32);function index_es_Oo(e,t=!1){return t?{h:Number(e&index_es_Ce),l:Number(e>>cn&index_es_Ce)}:{h:Number(e>>cn&index_es_Ce)|0,l:Number(e&index_es_Ce)|0}}function index_es_Io(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let o=0;o<e.length;o++){const{h:s,l:i}=index_es_Oo(e[o],t);[n[o],r[o]]=[s,i]}return[n,r]}const index_es_Ao=(e,t,n)=>e<<n|t>>>32-n,index_es_No=(e,t,n)=>t<<n|e>>>32-n,index_es_So=(e,t,n)=>t<<n-32|e>>>64-n,index_es_Uo=(e,t,n)=>e<<n-32|t>>>64-n,index_es_be=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function index_es_o(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function st(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function index_es_J(e,t){return e<<32-t|e>>>t}const an=(()=>new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68)();function index_es_To(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}function un(e){for(let t=0;t<e.length;t++)e[t]=index_es_To(e[t])}function index_es_$o(e){if(typeof e!="string")throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array(new TextEncoder().encode(e))}function index_es_we(e){return typeof e=="string"&&(e=index_es_$o(e)),index_es_je(e),e}class index_es_it{clone(){return this._cloneInto()}}function fn(e){const t=r=>e().update(index_es_we(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function index_es_Se(e=32){if(index_es_be&&typeof index_es_be.getRandomValues=="function")return index_es_be.getRandomValues(new Uint8Array(e));if(index_es_be&&typeof index_es_be.randomBytes=="function")return index_es_be.randomBytes(e);throw new Error("crypto.getRandomValues must be defined")}const ln=[],dn=[],hn=[],index_es_Ro=BigInt(0),index_es_Ue=BigInt(1),index_es_Po=BigInt(2),index_es_Lo=BigInt(7),index_es_Bo=BigInt(256),index_es_jo=BigInt(113);for(let e=0,t=index_es_Ue,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],ln.push(2*(5*r+n)),dn.push((e+1)*(e+2)/2%64);let o=index_es_Ro;for(let s=0;s<7;s++)t=(t<<index_es_Ue^(t>>index_es_Lo)*index_es_jo)%index_es_Bo,t&index_es_Po&&(o^=index_es_Ue<<(index_es_Ue<<BigInt(s))-index_es_Ue);hn.push(o)}const[index_es_Co,index_es_ko]=index_es_Io(hn,!0),pn=(e,t,n)=>n>32?index_es_So(e,t,n):index_es_Ao(e,t,n),index_es_gn=(e,t,n)=>n>32?index_es_Uo(e,t,n):index_es_No(e,t,n);function index_es_Do(e,t=24){const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let i=0;i<10;i++)n[i]=e[i]^e[i+10]^e[i+20]^e[i+30]^e[i+40];for(let i=0;i<10;i+=2){const c=(i+8)%10,u=(i+2)%10,a=n[u],l=n[u+1],f=pn(a,l,1)^n[c],d=index_es_gn(a,l,1)^n[c+1];for(let g=0;g<50;g+=10)e[i+g]^=f,e[i+g+1]^=d}let o=e[2],s=e[3];for(let i=0;i<24;i++){const c=dn[i],u=pn(o,s,c),a=index_es_gn(o,s,c),l=ln[i];o=e[l],s=e[l+1],e[l]=u,e[l+1]=a}for(let i=0;i<50;i+=10){for(let c=0;c<10;c++)n[c]=e[i+c];for(let c=0;c<10;c++)e[i+c]^=~n[(c+2)%10]&n[(c+4)%10]}e[0]^=index_es_Co[r],e[1]^=index_es_ko[r]}n.fill(0)}class index_es_Bt extends index_es_it{constructor(t,n,r,o=!1,s=24){if(super(),this.blockLen=t,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,index_es_Ne(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=index_es_o(this.state)}keccak(){an||un(this.state32),index_es_Do(this.state32,this.rounds),an||un(this.state32),this.posOut=0,this.pos=0}update(t){index_es_me(this);const{blockLen:n,state:r}=this;t=index_es_we(t);const o=t.length;for(let s=0;s<o;){const i=Math.min(n-this.pos,o-s);for(let c=0;c<i;c++)r[this.pos++]^=t[s++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:n,pos:r,blockLen:o}=this;t[r]^=n,n&128&&r===o-1&&this.keccak(),t[o-1]^=128,this.keccak()}writeInto(t){index_es_me(this,!1),index_es_je(t),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,s=t.length;o<s;){this.posOut>=r&&this.keccak();const i=Math.min(r-this.posOut,s-o);t.set(n.subarray(this.posOut,this.posOut+i),o),this.posOut+=i,o+=i}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return index_es_Ne(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(index_es_sn(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:n,suffix:r,outputLen:o,rounds:s,enableXOF:i}=this;return t||(t=new index_es_Bt(n,r,o,i,s)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=s,t.suffix=r,t.outputLen=o,t.enableXOF=i,t.destroyed=this.destroyed,t}}const index_es_Mo=(e,t,n)=>fn(()=>new index_es_Bt(t,e,n)),index_es_Vo=index_es_Mo(1,136,256/8),index_es_Ho="https://rpc.walletconnect.org/v1";function index_es_ct(e){const t=`Ethereum Signed Message:
${e.length}`,n=new TextEncoder().encode(t+e);return"0x"+Buffer.from(index_es_Vo(n)).toString("hex")}async function index_es_yn(e,t,n,r,o,s){switch(n.t){case"eip191":return index_es_mn(e,t,n.s);case"eip1271":return await bn(e,t,n.s,r,o,s);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`)}}function index_es_mn(e,t,n){return (0,lib_esm/* recoverAddress */.x_)(index_es_ct(t),n).toLowerCase()===e.toLowerCase()}async function bn(e,t,n,r,o,s){const i=index_es_Ye(r);if(!i.namespace||!i.reference)throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);try{const c="0x1626ba7e",u="0000000000000000000000000000000000000000000000000000000000000040",a="0000000000000000000000000000000000000000000000000000000000000041",l=n.substring(2),f=index_es_ct(t).substring(2),d=c+f+u+a+l,g=await fetch(`${s||index_es_Ho}/?chainId=${r}&projectId=${o}`,{method:"POST",body:JSON.stringify({id:index_es_Ko(),jsonrpc:"2.0",method:"eth_call",params:[{to:e,data:d},"latest"]})}),{result:y}=await g.json();return y?y.slice(0,c.length).toLowerCase()===c.toLowerCase():!1}catch(c){return console.error("isValidEip1271Signature: ",c),!1}}function index_es_Ko(){return Date.now()+Math.floor(Math.random()*1e3)}var index_es_Fo=Object.defineProperty,index_es_qo=Object.defineProperties,index_es_Go=Object.getOwnPropertyDescriptors,wn=Object.getOwnPropertySymbols,index_es_Wo=Object.prototype.hasOwnProperty,index_es_zo=Object.prototype.propertyIsEnumerable,index_es_En=(e,t,n)=>t in e?index_es_Fo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,at=(e,t)=>{for(var n in t||(t={}))index_es_Wo.call(t,n)&&index_es_En(e,n,t[n]);if(wn)for(var n of wn(t))index_es_zo.call(t,n)&&index_es_En(e,n,t[n]);return e},index_es_vn=(e,t)=>index_es_qo(e,index_es_Go(t));const index_es_Jo="did:pkh:",index_es_ke=e=>e?.split(":"),index_es_xn=e=>{const t=e&&index_es_ke(e);if(t)return e.includes(index_es_Jo)?t[3]:t[1]},index_es_On=e=>{const t=e&&index_es_ke(e);if(t)return t[2]+":"+t[3]},index_es_ut=e=>{const t=e&&index_es_ke(e);if(t)return t.pop()};async function index_es_Yo(e){const{cacao:t,projectId:n}=e,{s:r,p:o}=t,s=index_es_In(o,o.iss),i=index_es_ut(o.iss);return await index_es_yn(i,s,r,index_es_On(o.iss),n)}const index_es_In=(e,t)=>{const n=`${e.domain} wants you to sign in with your Ethereum account:`,r=index_es_ut(t);if(!e.aud&&!e.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let o=e.statement||void 0;const s=`URI: ${e.aud||e.uri}`,i=`Version: ${e.version}`,c=`Chain ID: ${index_es_xn(t)}`,u=`Nonce: ${e.nonce}`,a=`Issued At: ${e.iat}`,l=e.exp?`Expiration Time: ${e.exp}`:void 0,f=e.nbf?`Not Before: ${e.nbf}`:void 0,d=e.requestId?`Request ID: ${e.requestId}`:void 0,g=e.resources?`Resources:${e.resources.map(h=>`
- ${h}`).join("")}`:void 0,y=index_es_Me(e.resources);if(y){const h=oe(y);o=index_es_dt(o,h)}return[n,r,"",o,"",s,i,c,u,a,l,f,d,g].filter(h=>h!=null).join(`
`)};function index_es_Xo(e,t,n){return n.includes("did:pkh:")||(n=`did:pkh:${n}`),{h:{t:"caip122"},p:{iss:n,domain:e.domain,aud:e.aud,version:e.version,nonce:e.nonce,iat:e.iat,statement:e.statement,requestId:e.requestId,resources:e.resources,nbf:e.nbf,exp:e.exp},s:t}}function index_es_Zo(e){var t;const{authPayload:n,chains:r,methods:o}=e,s=n.statement||"";if(!(r!=null&&r.length))return n;const i=n.chains,c=index_es_nt(i,r);if(!(c!=null&&c.length))throw new Error("No supported chains");const u=index_es_An(n.resources);if(!u)return n;Y(u);const a=index_es_Nn(u,"eip155");let l=n?.resources||[];if(a!=null&&a.length){const f=index_es_Sn(a),d=index_es_nt(f,o);if(!(d!=null&&d.length))throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(f)}, supported: ${JSON.stringify(o)}`);const g=index_es_ft("request",d,{chains:c}),y=index_es_$n(u,"eip155",g);l=((t=n?.resources)==null?void 0:t.slice(0,-1))||[],l.push(index_es_De(y))}return index_es_vn(at({},n),{statement:index_es_Pn(s,index_es_Me(l)),chains:c,resources:n!=null&&n.resources||l.length>0?l:void 0})}function index_es_An(e){const t=index_es_Me(e);if(t&&index_es_lt(t))return oe(t)}function index_es_Qo(e,t){var n;return(n=e?.att)==null?void 0:n.hasOwnProperty(t)}function index_es_Nn(e,t){var n,r;return(n=e?.att)!=null&&n[t]?Object.keys((r=e?.att)==null?void 0:r[t]):[]}function es(e){return e?.map(t=>Object.keys(t))||[]}function index_es_Sn(e){return e?.map(t=>{var n;return(n=t.split("/"))==null?void 0:n[1]})||[]}function index_es_Un(e){return Buffer.from(JSON.stringify(e)).toString("base64")}function index_es_n(e){return JSON.parse(Buffer.from(e,"base64").toString("utf-8"))}function Y(e){if(!e)throw new Error("No recap provided, value is undefined");if(!e.att)throw new Error("No `att` property found");const t=Object.keys(e.att);if(!(t!=null&&t.length))throw new Error("No resources found in `att` property");t.forEach(n=>{const r=e.att[n];if(Array.isArray(r))throw new Error(`Resource must be an object: ${n}`);if(typeof r!="object")throw new Error(`Resource must be an object: ${n}`);if(!Object.keys(r).length)throw new Error(`Resource object is empty: ${n}`);Object.keys(r).forEach(o=>{const s=r[o];if(!Array.isArray(s))throw new Error(`Ability limits ${o} must be an array of objects, found: ${s}`);if(!s.length)throw new Error(`Value of ${o} is empty array, must be an array with objects`);s.forEach(i=>{if(typeof i!="object")throw new Error(`Ability limits (${o}) must be an array of objects, found: ${i}`)})})})}function index_es_Tn(e,t,n,r={}){return n?.sort((o,s)=>o.localeCompare(s)),{att:{[e]:index_es_ft(t,n,r)}}}function index_es_$n(e,t,n){var r;return e.att[t]=at({},n),((r=Object.keys(e.att))==null?void 0:r.sort((o,s)=>o.localeCompare(s))).reduce((o,s)=>(o.att[s]=e.att[s],o),{att:{}})}function index_es_ft(e,t,n={}){t=t?.sort((o,s)=>o.localeCompare(s));const r=t.map(o=>({[`${e}/${o}`]:[n]}));return Object.assign({},...r)}function index_es_De(e){return Y(e),`urn:recap:${index_es_Un(e).replace(/=/g,"")}`}function oe(e){const t=index_es_n(e.replace("urn:recap:",""));return Y(t),t}function index_es_ts(e,t,n){const r=index_es_Tn(e,t,n);return index_es_De(r)}function index_es_lt(e){return e&&e.includes("urn:recap:")}function ns(e,t){const n=oe(e),r=oe(t),o=index_es_Rn(n,r);return index_es_De(o)}function index_es_Rn(e,t){Y(e),Y(t);const n=Object.keys(e.att).concat(Object.keys(t.att)).sort((o,s)=>o.localeCompare(s)),r={att:{}};return n.forEach(o=>{var s,i;Object.keys(((s=e.att)==null?void 0:s[o])||{}).concat(Object.keys(((i=t.att)==null?void 0:i[o])||{})).sort((c,u)=>c.localeCompare(u)).forEach(c=>{var u,a;r.att[o]=index_es_vn(at({},r.att[o]),{[c]:((u=e.att[o])==null?void 0:u[c])||((a=t.att[o])==null?void 0:a[c])})})}),r}function index_es_dt(e="",t){Y(t);const n="I further authorize the stated URI to perform the following actions on my behalf: ";if(e.includes(n))return e;const r=[];let o=0;Object.keys(t.att).forEach(c=>{const u=Object.keys(t.att[c]).map(f=>({ability:f.split("/")[0],action:f.split("/")[1]}));u.sort((f,d)=>f.action.localeCompare(d.action));const a={};u.forEach(f=>{a[f.ability]||(a[f.ability]=[]),a[f.ability].push(f.action)});const l=Object.keys(a).map(f=>(o++,`(${o}) '${f}': '${a[f].join("', '")}' for '${c}'.`));r.push(l.join(", ").replace(".,","."))});const s=r.join(" "),i=`${n}${s}`;return`${e?e+" ":""}${i}`}function rs(e){var t;const n=oe(e);Y(n);const r=(t=n.att)==null?void 0:t.eip155;return r?Object.keys(r).map(o=>o.split("/")[1]):[]}function os(e){const t=oe(e);Y(t);const n=[];return Object.values(t.att).forEach(r=>{Object.values(r).forEach(o=>{var s;(s=o?.[0])!=null&&s.chains&&n.push(o[0].chains)})}),[...new Set(n.flat())]}function index_es_Pn(e,t){if(!t)return e;const n=oe(t);return Y(n),index_es_dt(e,n)}function index_es_Me(e){if(!e)return;const t=e?.[e.length-1];return index_es_lt(t)?t:void 0}function index_es_ht(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, got "+e)}function index_es_Ln(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function F(e,...t){if(!index_es_Ln(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function index_es_Bn(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function ss(e,t){F(e);const n=t.outputLen;if(e.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function index_es_jn(e){if(typeof e!="boolean")throw new Error(`boolean expected, not ${e}`)}const se=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),is=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),cs=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!cs)throw new Error("Non little-endian hardware is not supported");function as(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}function pt(e){if(typeof e=="string")e=as(e);else if(index_es_Ln(e))e=index_es_gt(e);else throw new Error("Uint8Array expected, got "+typeof e);return e}function us(e,t){if(t==null||typeof t!="object")throw new Error("options must be defined");return Object.assign(e,t)}function fs(e,t){if(e.length!==t.length)return!1;let n=0;for(let r=0;r<e.length;r++)n|=e[r]^t[r];return n===0}const ls=(e,t)=>{function n(r,...o){if(F(r),e.nonceLength!==void 0){const l=o[0];if(!l)throw new Error("nonce / iv required");e.varSizeNonce?F(l):F(l,e.nonceLength)}const s=e.tagLength;s&&o[1]!==void 0&&F(o[1]);const i=t(r,...o),c=(l,f)=>{if(f!==void 0){if(l!==2)throw new Error("cipher output not supported");F(f)}};let u=!1;return{encrypt(l,f){if(u)throw new Error("cannot encrypt() twice with same key + nonce");return u=!0,F(l),c(i.encrypt.length,f),i.encrypt(l,f)},decrypt(l,f){if(F(l),s&&l.length<s)throw new Error("invalid ciphertext length: smaller than tagLength="+s);return c(i.decrypt.length,f),i.decrypt(l,f)}}}return Object.assign(n,e),n};function index_es_Cn(e,t,n=!0){if(t===void 0)return new Uint8Array(e);if(t.length!==e)throw new Error("invalid output length, expected "+e+", got: "+t.length);if(n&&!ds(t))throw new Error("invalid output, must be aligned");return t}function index_es_kn(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),c=Number(n&s),u=r?4:0,a=r?0:4;e.setUint32(t+u,i,r),e.setUint32(t+a,c,r)}function ds(e){return e.byteOffset%4===0}function index_es_gt(e){return Uint8Array.from(e)}function index_es_Ee(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}const Dn=e=>Uint8Array.from(e.split("").map(t=>t.charCodeAt(0))),hs=Dn("expand 16-byte k"),ps=Dn("expand 32-byte k"),gs=se(hs),ys=se(ps);function index_es_x(e,t){return e<<t|e>>>32-t}function index_es_yt(e){return e.byteOffset%4===0}const index_es_Ve=64,ms=16,index_es_Mn=2**32-1,index_es_Vn=new Uint32Array;function bs(e,t,n,r,o,s,i,c){const u=o.length,a=new Uint8Array(index_es_Ve),l=se(a),f=index_es_yt(o)&&index_es_yt(s),d=f?se(o):index_es_Vn,g=f?se(s):index_es_Vn;for(let y=0;y<u;i++){if(e(t,n,r,l,i,c),i>=index_es_Mn)throw new Error("arx: counter overflow");const h=Math.min(index_es_Ve,u-y);if(f&&h===index_es_Ve){const m=y/4;if(y%4!==0)throw new Error("arx: invalid block position");for(let B=0,b;B<ms;B++)b=m+B,g[b]=d[b]^l[B];y+=index_es_Ve;continue}for(let m=0,B;m<h;m++)B=y+m,s[B]=o[B]^a[m];y+=h}}function ws(e,t){const{allowShortKeys:n,extendNonceFn:r,counterLength:o,counterRight:s,rounds:i}=us({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},t);if(typeof e!="function")throw new Error("core must be a function");return index_es_ht(o),index_es_ht(i),index_es_jn(s),index_es_jn(n),(c,u,a,l,f=0)=>{F(c),F(u),F(a);const d=a.length;if(l===void 0&&(l=new Uint8Array(d)),F(l),index_es_ht(f),f<0||f>=index_es_Mn)throw new Error("arx: counter overflow");if(l.length<d)throw new Error(`arx: output (${l.length}) is shorter than data (${d})`);const g=[];let y=c.length,h,m;if(y===32)g.push(h=index_es_gt(c)),m=ys;else if(y===16&&n)h=new Uint8Array(32),h.set(c),h.set(c,16),m=gs,g.push(h);else throw new Error(`arx: invalid 32-byte key, got length=${y}`);index_es_yt(u)||g.push(u=index_es_gt(u));const B=se(h);if(r){if(u.length!==24)throw new Error("arx: extended nonce must be 24 bytes");r(m,B,se(u.subarray(0,16)),B),u=u.subarray(16)}const b=16-o;if(b!==u.length)throw new Error(`arx: nonce must be ${b} or 16 bytes`);if(b!==12){const I=new Uint8Array(12);I.set(u,s?0:12-u.length),u=I,g.push(u)}const _=se(u);return bs(e,m,B,_,a,l,f,i),index_es_Ee(...g),l}}const index_es_M=(e,t)=>e[t++]&255|(e[t++]&255)<<8;class Es{constructor(t){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,t=pt(t),F(t,32);const n=index_es_M(t,0),r=index_es_M(t,2),o=index_es_M(t,4),s=index_es_M(t,6),i=index_es_M(t,8),c=index_es_M(t,10),u=index_es_M(t,12),a=index_es_M(t,14);this.r[0]=n&8191,this.r[1]=(n>>>13|r<<3)&8191,this.r[2]=(r>>>10|o<<6)&7939,this.r[3]=(o>>>7|s<<9)&8191,this.r[4]=(s>>>4|i<<12)&255,this.r[5]=i>>>1&8190,this.r[6]=(i>>>14|c<<2)&8191,this.r[7]=(c>>>11|u<<5)&8065,this.r[8]=(u>>>8|a<<8)&8191,this.r[9]=a>>>5&127;for(let l=0;l<8;l++)this.pad[l]=index_es_M(t,16+2*l)}process(t,n,r=!1){const o=r?0:2048,{h:s,r:i}=this,c=i[0],u=i[1],a=i[2],l=i[3],f=i[4],d=i[5],g=i[6],y=i[7],h=i[8],m=i[9],B=index_es_M(t,n+0),b=index_es_M(t,n+2),_=index_es_M(t,n+4),I=index_es_M(t,n+6),k=index_es_M(t,n+8),E=index_es_M(t,n+10),L=index_es_M(t,n+12),j=index_es_M(t,n+14);let v=s[0]+(B&8191),O=s[1]+((B>>>13|b<<3)&8191),w=s[2]+((b>>>10|_<<6)&8191),R=s[3]+((_>>>7|I<<9)&8191),A=s[4]+((I>>>4|k<<12)&8191),T=s[5]+(k>>>1&8191),N=s[6]+((k>>>14|E<<2)&8191),S=s[7]+((E>>>11|L<<5)&8191),U=s[8]+((L>>>8|j<<8)&8191),$=s[9]+(j>>>5|o),p=0,C=p+v*c+O*(5*m)+w*(5*h)+R*(5*y)+A*(5*g);p=C>>>13,C&=8191,C+=T*(5*d)+N*(5*f)+S*(5*l)+U*(5*a)+$*(5*u),p+=C>>>13,C&=8191;let D=p+v*u+O*c+w*(5*m)+R*(5*h)+A*(5*y);p=D>>>13,D&=8191,D+=T*(5*g)+N*(5*d)+S*(5*f)+U*(5*l)+$*(5*a),p+=D>>>13,D&=8191;let P=p+v*a+O*u+w*c+R*(5*m)+A*(5*h);p=P>>>13,P&=8191,P+=T*(5*y)+N*(5*g)+S*(5*d)+U*(5*f)+$*(5*l),p+=P>>>13,P&=8191;let G=p+v*l+O*a+w*u+R*c+A*(5*m);p=G>>>13,G&=8191,G+=T*(5*h)+N*(5*y)+S*(5*g)+U*(5*d)+$*(5*f),p+=G>>>13,G&=8191;let X=p+v*f+O*l+w*a+R*u+A*c;p=X>>>13,X&=8191,X+=T*(5*m)+N*(5*h)+S*(5*y)+U*(5*g)+$*(5*d),p+=X>>>13,X&=8191;let Z=p+v*d+O*f+w*l+R*a+A*u;p=Z>>>13,Z&=8191,Z+=T*c+N*(5*m)+S*(5*h)+U*(5*y)+$*(5*g),p+=Z>>>13,Z&=8191;let he=p+v*g+O*d+w*f+R*l+A*a;p=he>>>13,he&=8191,he+=T*u+N*c+S*(5*m)+U*(5*h)+$*(5*y),p+=he>>>13,he&=8191;let pe=p+v*y+O*g+w*d+R*f+A*l;p=pe>>>13,pe&=8191,pe+=T*a+N*u+S*c+U*(5*m)+$*(5*h),p+=pe>>>13,pe&=8191;let ge=p+v*h+O*y+w*g+R*d+A*f;p=ge>>>13,ge&=8191,ge+=T*l+N*a+S*u+U*c+$*(5*m),p+=ge>>>13,ge&=8191;let ye=p+v*m+O*h+w*y+R*g+A*d;p=ye>>>13,ye&=8191,ye+=T*f+N*l+S*a+U*u+$*c,p+=ye>>>13,ye&=8191,p=(p<<2)+p|0,p=p+C|0,C=p&8191,p=p>>>13,D+=p,s[0]=C,s[1]=D,s[2]=P,s[3]=G,s[4]=X,s[5]=Z,s[6]=he,s[7]=pe,s[8]=ge,s[9]=ye}finalize(){const{h:t,pad:n}=this,r=new Uint16Array(10);let o=t[1]>>>13;t[1]&=8191;for(let c=2;c<10;c++)t[c]+=o,o=t[c]>>>13,t[c]&=8191;t[0]+=o*5,o=t[0]>>>13,t[0]&=8191,t[1]+=o,o=t[1]>>>13,t[1]&=8191,t[2]+=o,r[0]=t[0]+5,o=r[0]>>>13,r[0]&=8191;for(let c=1;c<10;c++)r[c]=t[c]+o,o=r[c]>>>13,r[c]&=8191;r[9]-=8192;let s=(o^1)-1;for(let c=0;c<10;c++)r[c]&=s;s=~s;for(let c=0;c<10;c++)t[c]=t[c]&s|r[c];t[0]=(t[0]|t[1]<<13)&65535,t[1]=(t[1]>>>3|t[2]<<10)&65535,t[2]=(t[2]>>>6|t[3]<<7)&65535,t[3]=(t[3]>>>9|t[4]<<4)&65535,t[4]=(t[4]>>>12|t[5]<<1|t[6]<<14)&65535,t[5]=(t[6]>>>2|t[7]<<11)&65535,t[6]=(t[7]>>>5|t[8]<<8)&65535,t[7]=(t[8]>>>8|t[9]<<5)&65535;let i=t[0]+n[0];t[0]=i&65535;for(let c=1;c<8;c++)i=(t[c]+n[c]|0)+(i>>>16)|0,t[c]=i&65535;index_es_Ee(r)}update(t){index_es_Bn(this);const{buffer:n,blockLen:r}=this;t=pt(t);const o=t.length;for(let s=0;s<o;){const i=Math.min(r-this.pos,o-s);if(i===r){for(;r<=o-s;s+=r)this.process(t,s);continue}n.set(t.subarray(s,s+i),this.pos),this.pos+=i,s+=i,this.pos===r&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){index_es_Ee(this.h,this.r,this.buffer,this.pad)}digestInto(t){index_es_Bn(this),ss(t,this),this.finished=!0;const{buffer:n,h:r}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let s=0;for(let i=0;i<8;i++)t[s++]=r[i]>>>0,t[s++]=r[i]>>>8;return t}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}}function vs(e){const t=(r,o)=>e(o).update(pt(r)).digest(),n=e(new Uint8Array(32));return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=r=>e(r),t}const xs=vs(e=>new Es(e));function Os(e,t,n,r,o,s=20){let i=e[0],c=e[1],u=e[2],a=e[3],l=t[0],f=t[1],d=t[2],g=t[3],y=t[4],h=t[5],m=t[6],B=t[7],b=o,_=n[0],I=n[1],k=n[2],E=i,L=c,j=u,v=a,O=l,w=f,R=d,A=g,T=y,N=h,S=m,U=B,$=b,p=_,C=I,D=k;for(let G=0;G<s;G+=2)E=E+O|0,$=index_es_x($^E,16),T=T+$|0,O=index_es_x(O^T,12),E=E+O|0,$=index_es_x($^E,8),T=T+$|0,O=index_es_x(O^T,7),L=L+w|0,p=index_es_x(p^L,16),N=N+p|0,w=index_es_x(w^N,12),L=L+w|0,p=index_es_x(p^L,8),N=N+p|0,w=index_es_x(w^N,7),j=j+R|0,C=index_es_x(C^j,16),S=S+C|0,R=index_es_x(R^S,12),j=j+R|0,C=index_es_x(C^j,8),S=S+C|0,R=index_es_x(R^S,7),v=v+A|0,D=index_es_x(D^v,16),U=U+D|0,A=index_es_x(A^U,12),v=v+A|0,D=index_es_x(D^v,8),U=U+D|0,A=index_es_x(A^U,7),E=E+w|0,D=index_es_x(D^E,16),S=S+D|0,w=index_es_x(w^S,12),E=E+w|0,D=index_es_x(D^E,8),S=S+D|0,w=index_es_x(w^S,7),L=L+R|0,$=index_es_x($^L,16),U=U+$|0,R=index_es_x(R^U,12),L=L+R|0,$=index_es_x($^L,8),U=U+$|0,R=index_es_x(R^U,7),j=j+A|0,p=index_es_x(p^j,16),T=T+p|0,A=index_es_x(A^T,12),j=j+A|0,p=index_es_x(p^j,8),T=T+p|0,A=index_es_x(A^T,7),v=v+O|0,C=index_es_x(C^v,16),N=N+C|0,O=index_es_x(O^N,12),v=v+O|0,C=index_es_x(C^v,8),N=N+C|0,O=index_es_x(O^N,7);let P=0;r[P++]=i+E|0,r[P++]=c+L|0,r[P++]=u+j|0,r[P++]=a+v|0,r[P++]=l+O|0,r[P++]=f+w|0,r[P++]=d+R|0,r[P++]=g+A|0,r[P++]=y+T|0,r[P++]=h+N|0,r[P++]=m+S|0,r[P++]=B+U|0,r[P++]=b+$|0,r[P++]=_+p|0,r[P++]=I+C|0,r[P++]=k+D|0}const Is=ws(Os,{counterRight:!1,counterLength:4,allowShortKeys:!1}),As=new Uint8Array(16),index_es_Hn=(e,t)=>{e.update(t);const n=t.length%16;n&&e.update(As.subarray(n))},Ns=new Uint8Array(32);function index_es_Kn(e,t,n,r,o){const s=e(t,n,Ns),i=xs.create(s);o&&index_es_Hn(i,o),index_es_Hn(i,r);const c=new Uint8Array(16),u=is(c);index_es_kn(u,0,BigInt(o?o.length:0),!0),index_es_kn(u,8,BigInt(r.length),!0),i.update(c);const a=i.digest();return index_es_Ee(s,c),a}const Ss=e=>(t,n,r)=>({encrypt(s,i){const c=s.length;i=index_es_Cn(c+16,i,!1),i.set(s);const u=i.subarray(0,-16);e(t,n,u,u,1);const a=index_es_Kn(e,t,n,u,r);return i.set(a,c),index_es_Ee(a),i},decrypt(s,i){i=index_es_Cn(s.length-16,i,!1);const c=s.subarray(0,-16),u=s.subarray(-16),a=index_es_Kn(e,t,n,c,r);if(!fs(u,a))throw new Error("invalid tag");return i.set(s.subarray(0,-16)),e(t,n,i,i,1),index_es_Ee(a),i}}),index_es_Fn=ls({blockSize:64,nonceLength:12,tagLength:16},Ss(Is));class index_es_qn extends index_es_it{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,ot(t);const r=index_es_we(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?t.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=t.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(t){return index_es_me(this),this.iHash.update(t),this}digestInto(t){index_es_me(this),index_es_je(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:c}=this;return t=t,t.finished=o,t.destroyed=s,t.blockLen=i,t.outputLen=c,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const mt=(e,t,n)=>new index_es_qn(e,t).update(n).digest();mt.create=(e,t)=>new index_es_qn(e,t);function Us(e,t,n){return ot(e),n===void 0&&(n=new Uint8Array(e.outputLen)),mt(e,index_es_we(n),index_es_we(t))}const index_es_bt=new Uint8Array([0]),index_es_Gn=new Uint8Array;function _s(e,t,n,r=32){if(ot(e),index_es_Ne(r),r>255*e.outputLen)throw new Error("Length should be <= 255*HashLen");const o=Math.ceil(r/e.outputLen);n===void 0&&(n=index_es_Gn);const s=new Uint8Array(o*e.outputLen),i=mt.create(e,t),c=i._cloneInto(),u=new Uint8Array(i.outputLen);for(let a=0;a<o;a++)index_es_bt[0]=a+1,c.update(a===0?index_es_Gn:u).update(n).update(index_es_bt).digestInto(u),s.set(u,e.outputLen*a),i._cloneInto(c);return i.destroy(),c.destroy(),u.fill(0),index_es_bt.fill(0),s.slice(0,r)}const Ts=(e,t,n,r,o)=>_s(e,Us(e,t,n),r,o);function $s(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),c=Number(n&s),u=r?4:0,a=r?0:4;e.setUint32(t+u,i,r),e.setUint32(t+a,c,r)}function Rs(e,t,n){return e&t^~e&n}function Ps(e,t,n){return e&t^e&n^t&n}class Ls extends index_es_it{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=st(this.buffer)}update(t){index_es_me(this);const{view:n,buffer:r,blockLen:o}=this;t=index_es_we(t);const s=t.length;for(let i=0;i<s;){const c=Math.min(o-this.pos,s-i);if(c===o){const u=st(t);for(;o<=s-i;i+=o)this.process(u,i);continue}r.set(t.subarray(i,i+c),this.pos),this.pos+=c,i+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){index_es_me(this),index_es_sn(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let f=i;f<o;f++)n[f]=0;$s(r,o-8,BigInt(this.length*8),s),this.process(r,0);const c=st(t),u=this.outputLen;if(u%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const a=u/4,l=this.get();if(a>l.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<a;f++)c.setUint32(4*f,l[f],s)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:c}=this;return t.length=o,t.pos=c,t.finished=s,t.destroyed=i,o%n&&t.buffer.set(r),t}}const Bs=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ie=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ce=new Uint32Array(64);class js extends Ls{constructor(){super(64,32,8,!1),this.A=ie[0]|0,this.B=ie[1]|0,this.C=ie[2]|0,this.D=ie[3]|0,this.E=ie[4]|0,this.F=ie[5]|0,this.G=ie[6]|0,this.H=ie[7]|0}get(){const{A:t,B:n,C:r,D:o,E:s,F:i,G:c,H:u}=this;return[t,n,r,o,s,i,c,u]}set(t,n,r,o,s,i,c,u){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=c|0,this.H=u|0}process(t,n){for(let f=0;f<16;f++,n+=4)ce[f]=t.getUint32(n,!1);for(let f=16;f<64;f++){const d=ce[f-15],g=ce[f-2],y=index_es_J(d,7)^index_es_J(d,18)^d>>>3,h=index_es_J(g,17)^index_es_J(g,19)^g>>>10;ce[f]=h+ce[f-7]+y+ce[f-16]|0}let{A:r,B:o,C:s,D:i,E:c,F:u,G:a,H:l}=this;for(let f=0;f<64;f++){const d=index_es_J(c,6)^index_es_J(c,11)^index_es_J(c,25),g=l+d+Rs(c,u,a)+Bs[f]+ce[f]|0,h=(index_es_J(r,2)^index_es_J(r,13)^index_es_J(r,22))+Ps(r,o,s)|0;l=a,a=u,u=c,c=i+g|0,i=s,s=o,o=r,r=g+h|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,c=c+this.E|0,u=u+this.F|0,a=a+this.G|0,l=l+this.H|0,this.set(r,o,s,i,c,u,a,l)}roundClean(){ce.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const index_es_He=fn(()=>new js);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const index_es_Wn=BigInt(0);function index_es_wt(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function index_es_zn(e){if(!index_es_wt(e))throw new Error("Uint8Array expected")}const Cs=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ks(e){index_es_zn(e);let t="";for(let n=0;n<e.length;n++)t+=Cs[e[n]];return t}function Ds(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return e===""?index_es_Wn:BigInt("0x"+e)}const ee={_0:48,_9:57,A:65,F:70,a:97,f:102};function index_es_Jn(e){if(e>=ee._0&&e<=ee._9)return e-ee._0;if(e>=ee.A&&e<=ee.F)return e-(ee.A-10);if(e>=ee.a&&e<=ee.f)return e-(ee.a-10)}function index_es_Yn(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length,n=t/2;if(t%2)throw new Error("hex string expected, got unpadded hex of length "+t);const r=new Uint8Array(n);for(let o=0,s=0;o<n;o++,s+=2){const i=index_es_Jn(e.charCodeAt(s)),c=index_es_Jn(e.charCodeAt(s+1));if(i===void 0||c===void 0){const u=e[s]+e[s+1];throw new Error('hex string expected, got non-hex character "'+u+'" at index '+s)}r[o]=i*16+c}return r}function index_es_Xn(e){return index_es_zn(e),Ds(ks(Uint8Array.from(e).reverse()))}function Ms(e,t){return index_es_Yn(e.toString(16).padStart(t*2,"0"))}function Vs(e,t){return Ms(e,t).reverse()}function index_es_Zn(e,t,n){let r;if(typeof t=="string")try{r=index_es_Yn(t)}catch(s){throw new Error(e+" must be hex string or Uint8Array, cause: "+s)}else if(index_es_wt(t))r=Uint8Array.from(t);else throw new Error(e+" must be hex string or Uint8Array");const o=r.length;if(typeof n=="number"&&o!==n)throw new Error(e+" of length "+n+" expected, got "+o);return r}const index_es_Et=e=>typeof e=="bigint"&&index_es_Wn<=e;function Hs(e,t,n){return index_es_Et(e)&&index_es_Et(t)&&index_es_Et(n)&&t<=e&&e<n}function index_es_Qn(e,t,n,r){if(!Hs(t,n,r))throw new Error("expected valid "+e+": "+n+" <= n < "+r+", got "+t)}const Ks={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",stringOrUint8Array:e=>typeof e=="string"||index_es_wt(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function Fs(e,t,n={}){const r=(o,s,i)=>{const c=Ks[s];if(typeof c!="function")throw new Error("invalid validator function");const u=e[o];if(!(i&&u===void 0)&&!c(u,e))throw new Error("param "+String(o)+" is invalid. Expected "+s+", got "+u)};for(const[o,s]of Object.entries(t))r(o,s,!1);for(const[o,s]of Object.entries(n))r(o,s,!0);return e}const index_es_ve=BigInt(0),index_es_Ke=BigInt(1);function index_es_er(e,t){const n=e%t;return n>=index_es_ve?n:t+n}function qs(e,t,n){if(t<index_es_ve)throw new Error("invalid exponent, negatives unsupported");if(n<=index_es_ve)throw new Error("invalid modulus");if(n===index_es_Ke)return index_es_ve;let r=index_es_Ke;for(;t>index_es_ve;)t&index_es_Ke&&(r=r*e%n),e=e*e%n,t>>=index_es_Ke;return r}function z(e,t,n){let r=e;for(;t-- >index_es_ve;)r*=r,r%=n;return r}BigInt(0),BigInt(1),BigInt(0),BigInt(1),BigInt(2),BigInt(8);const index_es_xe=BigInt(0),index_es_vt=BigInt(1);function Gs(e){return Fs(e,{a:"bigint"},{montgomeryBits:"isSafeInteger",nByteLength:"isSafeInteger",adjustScalarBytes:"function",domain:"function",powPminus2:"function",Gu:"bigint"}),Object.freeze({...e})}function Ws(e){const t=Gs(e),{P:n}=t,r=b=>index_es_er(b,n),o=t.montgomeryBits,s=Math.ceil(o/8),i=t.nByteLength,c=t.adjustScalarBytes||(b=>b),u=t.powPminus2||(b=>qs(b,n-BigInt(2),n));function a(b,_,I){const k=r(b*(_-I));return _=r(_-k),I=r(I+k),[_,I]}const l=(t.a-BigInt(2))/BigInt(4);function f(b,_){index_es_Qn("u",b,index_es_xe,n),index_es_Qn("scalar",_,index_es_xe,n);const I=_,k=b;let E=index_es_vt,L=index_es_xe,j=b,v=index_es_vt,O=index_es_xe,w;for(let A=BigInt(o-1);A>=index_es_xe;A--){const T=I>>A&index_es_vt;O^=T,w=a(O,E,j),E=w[0],j=w[1],w=a(O,L,v),L=w[0],v=w[1],O=T;const N=E+L,S=r(N*N),U=E-L,$=r(U*U),p=S-$,C=j+v,D=j-v,P=r(D*N),G=r(C*U),X=P+G,Z=P-G;j=r(X*X),v=r(k*r(Z*Z)),E=r(S*$),L=r(p*(S+r(l*p)))}w=a(O,E,j),E=w[0],j=w[1],w=a(O,L,v),L=w[0],v=w[1];const R=u(L);return r(E*R)}function d(b){return Vs(r(b),s)}function g(b){const _=index_es_Zn("u coordinate",b,s);return i===32&&(_[31]&=127),index_es_Xn(_)}function y(b){const _=index_es_Zn("scalar",b),I=_.length;if(I!==s&&I!==i){let k=""+s+" or "+i;throw new Error("invalid scalar, expected "+k+" bytes, got "+I)}return index_es_Xn(c(_))}function h(b,_){const I=g(_),k=y(b),E=f(I,k);if(E===index_es_xe)throw new Error("invalid private or public key received");return d(E)}const m=d(t.Gu);function B(b){return h(b,m)}return{scalarMult:h,scalarMultBase:B,getSharedSecret:(b,_)=>h(b,_),getPublicKey:b=>B(b),utils:{randomPrivateKey:()=>t.randomBytes(t.nByteLength)},GuBytes:m}}const index_es_xt=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");BigInt(0);const zs=BigInt(1),index_es_tr=BigInt(2),Js=BigInt(3),Ys=BigInt(5);BigInt(8);function Xs(e){const t=BigInt(10),n=BigInt(20),r=BigInt(40),o=BigInt(80),s=index_es_xt,c=e*e%s*e%s,u=z(c,index_es_tr,s)*c%s,a=z(u,zs,s)*e%s,l=z(a,Ys,s)*a%s,f=z(l,t,s)*l%s,d=z(f,n,s)*f%s,g=z(d,r,s)*d%s,y=z(g,o,s)*g%s,h=z(y,o,s)*g%s,m=z(h,t,s)*l%s;return{pow_p_5_8:z(m,index_es_tr,s)*e%s,b2:c}}function Zs(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}const index_es_Ot=(()=>Ws({P:index_es_xt,a:BigInt(486662),montgomeryBits:255,nByteLength:32,Gu:BigInt(9),powPminus2:e=>{const t=index_es_xt,{pow_p_5_8:n,b2:r}=Xs(e);return index_es_er(z(n,Js,t)*r,t)},adjustScalarBytes:Zs,randomBytes:index_es_Se}))(),index_es_It="base10",V="base16",At="base64pad",Qs="base64url",index_es_Oe="utf8",index_es_Nt=0,index_es_Ie=1,index_es_e=2,ei=0,index_es_nr=1,index_es_Te=12,index_es_St=32;function ti(){const e=index_es_Ot.utils.randomPrivateKey(),t=index_es_Ot.getPublicKey(e);return{privateKey:to_string_toString(e,V),publicKey:to_string_toString(t,V)}}function ni(){const e=index_es_Se(index_es_St);return to_string_toString(e,V)}function ri(e,t){const n=index_es_Ot.getSharedSecret(fromString(e,V),fromString(t,V)),r=Ts(index_es_He,n,void 0,void 0,index_es_St);return to_string_toString(r,V)}function oi(e){const t=index_es_He(fromString(e,V));return to_string_toString(t,V)}function si(e){const t=index_es_He(fromString(e,index_es_Oe));return to_string_toString(t,V)}function index_es_Ut(e){return fromString(`${e}`,index_es_It)}function index_es_fe(e){return Number(to_string_toString(e,index_es_It))}function ii(e){const t=index_es_Ut(typeof e.type<"u"?e.type:index_es_Nt);if(index_es_fe(t)===index_es_Ie&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?fromString(e.senderPublicKey,V):void 0,r=typeof e.iv<"u"?fromString(e.iv,V):index_es_Se(index_es_Te),o=fromString(e.symKey,V),s=index_es_Fn(o,r).encrypt(fromString(e.message,index_es_Oe));return index_es_t({type:t,sealed:s,iv:r,senderPublicKey:n,encoding:e.encoding})}function ci(e){const t=fromString(e.symKey,V),{sealed:n,iv:r}=index_es_Fe(e),o=index_es_Fn(t,r).decrypt(n);if(o===null)throw new Error("Failed to decrypt");return to_string_toString(o,index_es_Oe)}function ai(e,t){const n=index_es_Ut(index_es_e),r=index_es_Se(index_es_Te),o=fromString(e,index_es_Oe);return index_es_t({type:n,sealed:o,iv:r,encoding:t})}function ui(e,t){const{sealed:n}=index_es_Fe({encoded:e,encoding:t});return to_string_toString(n,index_es_Oe)}function index_es_t(e){const{encoding:t=At}=e;if(index_es_fe(e.type)===index_es_e)return to_string_toString(concat([e.type,e.sealed]),t);if(index_es_fe(e.type)===index_es_Ie){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return to_string_toString(concat([e.type,e.senderPublicKey,e.iv,e.sealed]),t)}return to_string_toString(concat([e.type,e.iv,e.sealed]),t)}function index_es_Fe(e){const{encoded:t,encoding:n=At}=e,r=fromString(t,n),o=r.slice(ei,index_es_nr),s=index_es_nr;if(index_es_fe(o)===index_es_Ie){const a=s+index_es_St,l=a+index_es_Te,f=r.slice(s,a),d=r.slice(a,l),g=r.slice(l);return{type:o,sealed:g,iv:d,senderPublicKey:f}}if(index_es_fe(o)===index_es_e){const a=r.slice(s),l=index_es_Se(index_es_Te);return{type:o,sealed:a,iv:l}}const i=s+index_es_Te,c=r.slice(s,i),u=r.slice(i);return{type:o,sealed:u,iv:c}}function fi(e,t){const n=index_es_Fe({encoded:e,encoding:t?.encoding});return index_es_rr({type:index_es_fe(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?to_string_toString(n.senderPublicKey,V):void 0,receiverPublicKey:t?.receiverPublicKey})}function index_es_rr(e){const t=e?.type||index_es_Nt;if(t===index_es_Ie){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function li(e){return e.type===index_es_Ie&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}function di(e){return e.type===index_es_e}function index_es_or(e){return new elliptic.ec("p256").keyFromPublic({x:Buffer.from(e.x,"base64").toString("hex"),y:Buffer.from(e.y,"base64").toString("hex")},"hex")}function hi(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");const n=t.length%4;return n>0&&(t+="=".repeat(4-n)),t}function pi(e){return Buffer.from(hi(e),"base64")}function index_es_gi(e,t){const[n,r,o]=e.split("."),s=pi(o);if(s.length!==64)throw new Error("Invalid signature length");const i=s.slice(0,32).toString("hex"),c=s.slice(32,64).toString("hex"),u=`${n}.${r}`,a=index_es_He(u),l=index_es_or(t),f=to_string_toString(a,V);if(!l.verify(f,{r:i,s:c}))throw new Error("Invalid signature");return sn(e).payload}const index_es_sr="irn";function yi(e){return e?.relay||{protocol:index_es_sr}}function mi(e){const t=C[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}function index_es_ir(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach(o=>{if(o.startsWith(r)){const s=o.replace(r,""),i=e[o];n[s]=i}}),n}function bi(e){if(!e.includes("wc:")){const a=index_es_rt(e);a!=null&&a.includes("wc:")&&(e=a)}e=e.includes("wc://")?e.replace("wc://",""):e,e=e.includes("wc:")?e.replace("wc:",""):e;const t=e.indexOf(":"),n=e.indexOf("?")!==-1?e.indexOf("?"):void 0,r=e.substring(0,t),o=e.substring(t+1,n).split("@"),s=typeof n<"u"?e.substring(n):"",i=new URLSearchParams(s),c={};i.forEach((a,l)=>{c[l]=a});const u=typeof c.methods=="string"?c.methods.split(","):void 0;return{protocol:r,topic:index_es_cr(o[0]),version:parseInt(o[1],10),symKey:c.symKey,relay:index_es_ir(c),methods:u,expiryTimestamp:c.expiryTimestamp?parseInt(c.expiryTimestamp,10):void 0}}function index_es_cr(e){return e.startsWith("//")?e.substring(2):e}function index_es_ar(e,t="-"){const n="relay",r={};return Object.keys(e).forEach(o=>{const s=n+t+o;e[o]&&(r[s]=e[o])}),r}function wi(e){const t=new URLSearchParams,n=index_es_ar(e.relay);Object.keys(n).sort().forEach(o=>{t.set(o,n[o])}),t.set("symKey",e.symKey),e.expiryTimestamp&&t.set("expiryTimestamp",e.expiryTimestamp.toString()),e.methods&&t.set("methods",e.methods.join(","));const r=t.toString();return`${e.protocol}:${e.topic}@${e.version}?${r}`}function Ei(e,t,n){return`${e}?wc_ev=${n}&topic=${t}`}var vi=Object.defineProperty,xi=Object.defineProperties,Oi=Object.getOwnPropertyDescriptors,index_es_ur=Object.getOwnPropertySymbols,Ii=Object.prototype.hasOwnProperty,Ai=Object.prototype.propertyIsEnumerable,index_es_fr=(e,t,n)=>t in e?vi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ni=(e,t)=>{for(var n in t||(t={}))Ii.call(t,n)&&index_es_fr(e,n,t[n]);if(index_es_ur)for(var n of index_es_ur(t))Ai.call(t,n)&&index_es_fr(e,n,t[n]);return e},Si=(e,t)=>xi(e,Oi(t));function index_es_le(e){const t=[];return e.forEach(n=>{const[r,o]=n.split(":");t.push(`${r}:${o}`)}),t}function index_es_lr(e){const t=[];return Object.values(e).forEach(n=>{t.push(...index_es_le(n.accounts))}),t}function index_es_dr(e,t){const n=[];return Object.values(e).forEach(r=>{index_es_le(r.accounts).includes(t)&&n.push(...r.methods)}),n}function index_es_hr(e,t){const n=[];return Object.values(e).forEach(r=>{index_es_le(r.accounts).includes(t)&&n.push(...r.events)}),n}function Ui(e,t){const n=index_es_Ir(e,t);if(n)throw new Error(n.message);const r={};for(const[o,s]of Object.entries(e))r[o]={methods:s.methods,events:s.events,chains:s.accounts.map(i=>`${i.split(":")[0]}:${i.split(":")[1]}`)};return r}function _i(e){const{proposal:{requiredNamespaces:t,optionalNamespaces:n={}},supportedNamespaces:r}=e,o=index_es_$t(t),s=index_es_$t(n),i={};Object.keys(r).forEach(a=>{const l=r[a].chains,f=r[a].methods,d=r[a].events,g=r[a].accounts;l.forEach(y=>{if(!g.some(h=>h.includes(y)))throw new Error(`No accounts provided for chain ${y} in namespace ${a}`)}),i[a]={chains:l,methods:f,events:d,accounts:g}});const c=index_es_Nr(t,i,"approve()");if(c)throw new Error(c.message);const u={};return!Object.keys(t).length&&!Object.keys(n).length?i:(Object.keys(o).forEach(a=>{const l=r[a].chains.filter(y=>{var h,m;return(m=(h=o[a])==null?void 0:h.chains)==null?void 0:m.includes(y)}),f=r[a].methods.filter(y=>{var h,m;return(m=(h=o[a])==null?void 0:h.methods)==null?void 0:m.includes(y)}),d=r[a].events.filter(y=>{var h,m;return(m=(h=o[a])==null?void 0:h.events)==null?void 0:m.includes(y)}),g=l.map(y=>r[a].accounts.filter(h=>h.includes(`${y}:`))).flat();u[a]={chains:l,methods:f,events:d,accounts:g}}),Object.keys(s).forEach(a=>{var l,f,d,g,y,h;if(!r[a])return;const m=(f=(l=s[a])==null?void 0:l.chains)==null?void 0:f.filter(I=>r[a].chains.includes(I)),B=r[a].methods.filter(I=>{var k,E;return(E=(k=s[a])==null?void 0:k.methods)==null?void 0:E.includes(I)}),b=r[a].events.filter(I=>{var k,E;return(E=(k=s[a])==null?void 0:k.events)==null?void 0:E.includes(I)}),_=m?.map(I=>r[a].accounts.filter(k=>k.includes(`${I}:`))).flat();u[a]={chains:index_es_Q((d=u[a])==null?void 0:d.chains,m),methods:index_es_Q((g=u[a])==null?void 0:g.methods,B),events:index_es_Q((y=u[a])==null?void 0:y.events,b),accounts:index_es_Q((h=u[a])==null?void 0:h.accounts,_)}}),u)}function index_es_Tt(e){return e.includes(":")}function index_es_pr(e){return index_es_Tt(e)?e.split(":")[0]:e}function index_es_$t(e){var t,n,r;const o={};if(!index_es_qe(e))return o;for(const[s,i]of Object.entries(e)){const c=index_es_Tt(s)?[s]:i.chains,u=i.methods||[],a=i.events||[],l=index_es_pr(s);o[l]=Si(Ni({},o[l]),{chains:index_es_Q(c,(t=o[l])==null?void 0:t.chains),methods:index_es_Q(u,(n=o[l])==null?void 0:n.methods),events:index_es_Q(a,(r=o[l])==null?void 0:r.events)})}return o}function index_es_gr(e){const t={};return e?.forEach(n=>{const[r,o]=n.split(":");t[r]||(t[r]={accounts:[],chains:[],events:[]}),t[r].accounts.push(n),t[r].chains.push(`${r}:${o}`)}),t}function Ti(e,t){t=t.map(r=>r.replace("did:pkh:",""));const n=index_es_gr(t);for(const[r,o]of Object.entries(n))o.methods?o.methods=index_es_Q(o.methods,e):o.methods=e,o.events=["chainChanged","accountsChanged"];return n}const index_es_yr={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},index_es_mr={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function index_es_te(e,t){const{message:n,code:r}=index_es_mr[e];return{message:t?`${n} ${t}`:n,code:r}}function index_es_de(e,t){const{message:n,code:r}=index_es_yr[e];return{message:t?`${n} ${t}`:n,code:r}}function index_es_$e(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function index_es_qe(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function index_es_ae(e){return typeof e>"u"}function index_es_q(e,t){return t&&index_es_ae(e)?!0:typeof e=="string"&&!!e.trim().length}function index_es_Ge(e,t){return t&&index_es_ae(e)?!0:typeof e=="number"&&!isNaN(e)}function $i(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),o=Object.keys(n);let s=!0;return re(o,r)?(r.forEach(i=>{const{accounts:c,methods:u,events:a}=e.namespaces[i],l=index_es_le(c),f=n[i];(!re(index_es_Le(i,f),l)||!re(f.methods,u)||!re(f.events,a))&&(s=!1)}),s):!1}function index_es_Re(e){return index_es_q(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function index_es_br(e){if(index_es_q(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const n=t[0]+":"+t[1];return!!t[2]&&index_es_Re(n)}}return!1}function Ri(e){function t(n){try{return typeof new URL(n)<"u"}catch{return!1}}try{if(index_es_q(e,!1)){if(t(e))return!0;const n=index_es_rt(e);return t(n)}}catch{}return!1}function Pi(e){var t;return(t=e?.proposer)==null?void 0:t.publicKey}function Li(e){return e?.topic}function Bi(e,t){let n=null;return index_es_q(e?.publicKey,!1)||(n=index_es_te("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function index_es_Rt(e){let t=!0;return index_es_$e(e)?e.length&&(t=e.every(n=>index_es_q(n,!1))):t=!1,t}function index_es_wr(e,t,n){let r=null;return index_es_$e(t)&&t.length?t.forEach(o=>{r||index_es_Re(o)||(r=index_es_de("UNSUPPORTED_CHAINS",`${n}, chain ${o} should be a string and conform to "namespace:chainId" format`))}):index_es_Re(e)||(r=index_es_de("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function index_es_Er(e,t,n){let r=null;return Object.entries(e).forEach(([o,s])=>{if(r)return;const i=index_es_wr(o,index_es_Le(o,s),`${t} ${n}`);i&&(r=i)}),r}function index_es_vr(e,t){let n=null;return index_es_$e(e)?e.forEach(r=>{n||index_es_br(r)||(n=index_es_de("UNSUPPORTED_ACCOUNTS",`${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=index_es_de("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function index_es_xr(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const o=index_es_vr(r?.accounts,`${t} namespace`);o&&(n=o)}),n}function index_es_Or(e,t){let n=null;return index_es_Rt(e?.methods)?index_es_Rt(e?.events)||(n=index_es_de("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=index_es_de("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}function index_es_Pt(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const o=index_es_Or(r,`${t}, namespace`);o&&(n=o)}),n}function ji(e,t,n){let r=null;if(e&&index_es_qe(e)){const o=index_es_Pt(e,t);o&&(r=o);const s=index_es_Er(e,t,n);s&&(r=s)}else r=index_es_te("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function index_es_Ir(e,t){let n=null;if(e&&index_es_qe(e)){const r=index_es_Pt(e,t);r&&(n=r);const o=index_es_xr(e,t);o&&(n=o)}else n=index_es_te("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function index_es_Ar(e){return index_es_q(e.protocol,!0)}function Ci(e,t){let n=!1;return t&&!e?n=!0:e&&index_es_$e(e)&&e.length&&e.forEach(r=>{n=index_es_Ar(r)}),n}function ki(e){return typeof e=="number"}function Di(e){return typeof e<"u"&&typeof e!==null}function Mi(e){return!(!e||typeof e!="object"||!e.code||!index_es_Ge(e.code,!1)||!e.message||!index_es_q(e.message,!1))}function Vi(e){return!(index_es_ae(e)||!index_es_q(e.method,!1))}function Hi(e){return!(index_es_ae(e)||index_es_ae(e.result)&&index_es_ae(e.error)||!index_es_Ge(e.id,!1)||!index_es_q(e.jsonrpc,!1))}function Ki(e){return!(index_es_ae(e)||!index_es_q(e.name,!1))}function Fi(e,t){return!(!index_es_Re(t)||!index_es_lr(e).includes(t))}function qi(e,t,n){return index_es_q(n,!1)?index_es_dr(e,t).includes(n):!1}function Gi(e,t,n){return index_es_q(n,!1)?index_es_hr(e,t).includes(n):!1}function index_es_Nr(e,t,n){let r=null;const o=Wi(e),s=zi(t),i=Object.keys(o),c=Object.keys(s),u=index_es_Sr(Object.keys(e)),a=index_es_Sr(Object.keys(t)),l=u.filter(f=>!a.includes(f));return l.length&&(r=index_es_te("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`)),re(i,c)||(r=index_es_te("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${i.toString()}
      Approved: ${c.toString()}`)),Object.keys(t).forEach(f=>{if(!f.includes(":")||r)return;const d=index_es_le(t[f].accounts);d.includes(f)||(r=index_es_te("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${d.toString()}`))}),i.forEach(f=>{r||(re(o[f].methods,s[f].methods)?re(o[f].events,s[f].events)||(r=index_es_te("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${f}`)):r=index_es_te("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${f}`))}),r}function Wi(e){const t={};return Object.keys(e).forEach(n=>{var r;n.includes(":")?t[n]=e[n]:(r=e[n].chains)==null||r.forEach(o=>{t[o]={methods:e[n].methods,events:e[n].events}})}),t}function index_es_Sr(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function zi(e){const t={};return Object.keys(e).forEach(n=>{if(n.includes(":"))t[n]=e[n];else{const r=index_es_le(e[n].accounts);r?.forEach(o=>{t[o]={accounts:e[n].accounts.filter(s=>s.includes(`${o}:`)),methods:e[n].methods,events:e[n].events}})}}),t}function Ji(e,t){return index_es_Ge(e,!1)&&e<=t.max&&e>=t.min}function Yi(){const e=ue();return new Promise(t=>{switch(e){case index_es_H.browser:t(index_es_Ur());break;case index_es_H.reactNative:t(index_es_r());break;case index_es_H.node:t(index_es_Tr());break;default:t(!0)}})}function index_es_Ur(){return index_es_Ae()&&navigator?.onLine}async function index_es_r(){if(ne()&&typeof global<"u"&&global!=null&&global.NetInfo){const e=await(global==null?void 0:global.NetInfo.fetch());return e?.isConnected}return!0}function index_es_Tr(){return!0}function Xi(e){switch(ue()){case index_es_H.browser:index_es_$r(e);break;case index_es_H.reactNative:index_es_Rr(e);break;case index_es_H.node:break}}function index_es_$r(e){!ne()&&index_es_Ae()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function index_es_Rr(e){ne()&&typeof global<"u"&&global!=null&&global.NetInfo&&global?.NetInfo.addEventListener(t=>e(t?.isConnected))}const index_es_Lt={};class Zi{static get(t){return index_es_Lt[t]}static set(t,n){index_es_Lt[t]=n}static delete(t){delete index_es_Lt[t]}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/events/dist/esm/events.js
class IEvents {
}
//# sourceMappingURL=events.js.map
;// ./node_modules/@walletconnect/heartbeat/dist/index.es.js
class dist_index_es_n extends IEvents{constructor(e){super()}}const s=cjs.FIVE_SECONDS,r={pulse:"heartbeat_pulse"};class index_es_i extends dist_index_es_n{constructor(e){super(e),this.events=new external_events_.EventEmitter,this.interval=s,this.interval=e?.interval||s}static async init(e){const t=new index_es_i(e);return await t.init(),t}async init(){await this.initialize()}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async initialize(){this.intervalRef=setInterval(()=>this.pulse(),(0,cjs.toMiliseconds)(this.interval))}pulse(){this.events.emit(r.pulse)}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/destr/dist/index.mjs
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
function safeDestr(value, options = {}) {
  return destr(value, { ...options, strict: true });
}



;// ./node_modules/unstorage/dist/shared/unstorage.BqzpVTXx.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = (/* unused pure expression or super */ null && ([
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
]));
function prefixStorage(storage, base) {
  base = unstorage_BqzpVTXx_normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function unstorage_BqzpVTXx_normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}



;// ./node_modules/unstorage/dist/index.mjs




function defineDriver(factory) {
  return factory;
}

const DRIVER_NAME = "memory";
const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = unstorage_BqzpVTXx_normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter(
        (key) => key.startsWith(base) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base, opts = {}) {
      base = unstorage_BqzpVTXx_normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = unstorage_BqzpVTXx_normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = unstorage_BqzpVTXx_normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
async function snapshot(storage, base) {
  base = normalizeBaseKey(base);
  const keys = await storage.getKeys(base);
  const snapshot2 = {};
  await Promise.all(
    keys.map(async (key) => {
      snapshot2[key.slice(base.length)] = await storage.getItem(key);
    })
  );
  return snapshot2;
}
async function restoreSnapshot(driver, snapshot2, base = "") {
  base = normalizeBaseKey(base);
  await Promise.all(
    Object.entries(snapshot2).map((e) => driver.setItem(base + e[0], e[1]))
  );
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const builtinDrivers = {
  "azure-app-configuration": "unstorage/drivers/azure-app-configuration",
  "azureAppConfiguration": "unstorage/drivers/azure-app-configuration",
  "azure-cosmos": "unstorage/drivers/azure-cosmos",
  "azureCosmos": "unstorage/drivers/azure-cosmos",
  "azure-key-vault": "unstorage/drivers/azure-key-vault",
  "azureKeyVault": "unstorage/drivers/azure-key-vault",
  "azure-storage-blob": "unstorage/drivers/azure-storage-blob",
  "azureStorageBlob": "unstorage/drivers/azure-storage-blob",
  "azure-storage-table": "unstorage/drivers/azure-storage-table",
  "azureStorageTable": "unstorage/drivers/azure-storage-table",
  "capacitor-preferences": "unstorage/drivers/capacitor-preferences",
  "capacitorPreferences": "unstorage/drivers/capacitor-preferences",
  "cloudflare-kv-binding": "unstorage/drivers/cloudflare-kv-binding",
  "cloudflareKVBinding": "unstorage/drivers/cloudflare-kv-binding",
  "cloudflare-kv-http": "unstorage/drivers/cloudflare-kv-http",
  "cloudflareKVHttp": "unstorage/drivers/cloudflare-kv-http",
  "cloudflare-r2-binding": "unstorage/drivers/cloudflare-r2-binding",
  "cloudflareR2Binding": "unstorage/drivers/cloudflare-r2-binding",
  "db0": "unstorage/drivers/db0",
  "deno-kv-node": "unstorage/drivers/deno-kv-node",
  "denoKVNode": "unstorage/drivers/deno-kv-node",
  "deno-kv": "unstorage/drivers/deno-kv",
  "denoKV": "unstorage/drivers/deno-kv",
  "fs-lite": "unstorage/drivers/fs-lite",
  "fsLite": "unstorage/drivers/fs-lite",
  "fs": "unstorage/drivers/fs",
  "github": "unstorage/drivers/github",
  "http": "unstorage/drivers/http",
  "indexedb": "unstorage/drivers/indexedb",
  "localstorage": "unstorage/drivers/localstorage",
  "lru-cache": "unstorage/drivers/lru-cache",
  "lruCache": "unstorage/drivers/lru-cache",
  "memory": "unstorage/drivers/memory",
  "mongodb": "unstorage/drivers/mongodb",
  "netlify-blobs": "unstorage/drivers/netlify-blobs",
  "netlifyBlobs": "unstorage/drivers/netlify-blobs",
  "null": "unstorage/drivers/null",
  "overlay": "unstorage/drivers/overlay",
  "planetscale": "unstorage/drivers/planetscale",
  "redis": "unstorage/drivers/redis",
  "s3": "unstorage/drivers/s3",
  "session-storage": "unstorage/drivers/session-storage",
  "sessionStorage": "unstorage/drivers/session-storage",
  "uploadthing": "unstorage/drivers/uploadthing",
  "upstash": "unstorage/drivers/upstash",
  "vercel-blob": "unstorage/drivers/vercel-blob",
  "vercelBlob": "unstorage/drivers/vercel-blob",
  "vercel-kv": "unstorage/drivers/vercel-kv",
  "vercelKV": "unstorage/drivers/vercel-kv"
};



;// ./node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}



;// ./node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
function index_es_C(i){return i}const dist_index_es_x="idb-keyval";var index_es_z=(i={})=>{const t=i.base&&i.base.length>0?`${i.base}:`:"",e=s=>t+s;let n;return i.dbName&&i.storeName&&(n=createStore(i.dbName,i.storeName)),{name:dist_index_es_x,options:i,async hasItem(s){return!(typeof await get(e(s),n)>"u")},async getItem(s){return await get(e(s),n)??null},setItem(s,a){return set(e(s),a,n)},removeItem(s){return del(e(s),n)},getKeys(){return keys(n)},clear(){return clear(n)}}};const D="WALLET_CONNECT_V2_INDEXED_DB",index_es_E="keyvaluestorage";class index_es_{constructor(){this.indexedDb=createStorage({driver:index_es_z({dbName:D,storeName:index_es_E})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key,t.value])}async getItem(t){const e=await this.indexedDb.getItem(t);if(e!==null)return e}async setItem(t,e){await this.indexedDb.setItem(t,safeJsonStringify(e))}async removeItem(t){await this.indexedDb.removeItem(t)}}var index_es_l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},index_es_c={exports:{}};(function(){let i;function t(){}i=t,i.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},i.prototype.setItem=function(e,n){this[e]=String(n)},i.prototype.removeItem=function(e){delete this[e]},i.prototype.clear=function(){const e=this;Object.keys(e).forEach(function(n){e[n]=void 0,delete e[n]})},i.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},i.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof index_es_l<"u"&&index_es_l.localStorage?index_es_c.exports=index_es_l.localStorage:typeof window<"u"&&window.localStorage?index_es_c.exports=window.localStorage:index_es_c.exports=new t})();function dist_index_es_k(i){var t;return[i[0],safeJsonParse((t=i[1])!=null?t:"")]}class index_es_K{constructor(){this.localStorage=index_es_c.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(dist_index_es_k)}async getItem(t){const e=this.localStorage.getItem(t);if(e!==null)return safeJsonParse(e)}async setItem(t,e){this.localStorage.setItem(t,safeJsonStringify(e))}async removeItem(t){this.localStorage.removeItem(t)}}const index_es_N="wc_storage_version",y=1,O=async(i,t,e)=>{const n=index_es_N,s=await t.getItem(n);if(s&&s>=y){e(t);return}const a=await i.getKeys();if(!a.length){e(t);return}const m=[];for(;a.length;){const r=a.shift();if(!r)continue;const o=r.toLowerCase();if(o.includes("wc@")||o.includes("walletconnect")||o.includes("wc_")||o.includes("wallet_connect")){const f=await i.getItem(r);await t.setItem(r,f),m.push(r)}}await t.setItem(n,y),e(t),index_es_j(i,m)},index_es_j=async(i,t)=>{t.length&&t.forEach(async e=>{await i.removeItem(e)})};class index_es_h{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const t=new index_es_K;this.storage=t;try{const e=new index_es_;O(t,e,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(t){return await this.initialize(),this.storage.getItem(t)}async setItem(t,e){return await this.initialize(),this.storage.setItem(t,e)}async removeItem(t){return await this.initialize(),this.storage.removeItem(t)}async initialize(){this.initialized||await new Promise(t=>{const e=setInterval(()=>{this.initialized&&(clearInterval(e),t())},20)})}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/pino/pino.js
var pino = __webpack_require__(894308);
var pino_default = /*#__PURE__*/__webpack_require__.n(pino);
;// ./node_modules/@walletconnect/logger/dist/index.es.js
const dist_index_es_c={level:"info"},logger_dist_index_es_n="custom_context",dist_index_es_l=1e3*1024;class index_es_O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class index_es_d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const t=new index_es_O(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const t=e.value;return e=e.next,{done:!1,value:t}}}}}class L{constructor(e,t=dist_index_es_l){this.level=e??"error",this.levelValue=pino.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new index_es_d(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,t){t===pino.levels.values.error?console.error(e):t===pino.levels.values.warn?console.warn(e):t===pino.levels.values.debug?console.debug(e):t===pino.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(safeJsonStringify({timestamp:new Date().toISOString(),log:e}));const t=typeof e=="string"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new index_es_d(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push(safeJsonStringify({extraMetadata:e})),new Blob(t,{type:"application/json"})}}class index_es_m{constructor(e,t=dist_index_es_l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}}class index_es_B{constructor(e,t=dist_index_es_l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var logger_dist_index_es_x=Object.defineProperty,index_es_S=Object.defineProperties,dist_index_es_=Object.getOwnPropertyDescriptors,index_es_p=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,dist_index_es_z=Object.prototype.propertyIsEnumerable,index_es_f=(r,e,t)=>e in r?logger_dist_index_es_x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&index_es_f(r,t,e[t]);if(index_es_p)for(var t of index_es_p(e))dist_index_es_z.call(e,t)&&index_es_f(r,t,e[t]);return r},index_es_g=(r,e)=>index_es_S(r,dist_index_es_(e));function logger_dist_index_es_k(r){return index_es_g(i({},r),{level:r?.level||dist_index_es_c.level})}function v(r,e=logger_dist_index_es_n){return r[e]||""}function index_es_b(r,e,t=logger_dist_index_es_n){return r[t]=e,r}function index_es_y(r,e=logger_dist_index_es_n){let t="";return typeof r.bindings>"u"?t=v(r,e):t=r.bindings().context||"",t}function index_es_w(r,e,t=logger_dist_index_es_n){const o=index_es_y(r,t);return o.trim()?`${o}/${e}`:e}function dist_index_es_E(r,e,t=logger_dist_index_es_n){const o=index_es_w(r,e,t),a=r.child({context:o});return index_es_b(a,o,t)}function dist_index_es_C(r){var e,t;const o=new index_es_m((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino_default()(index_es_g(i({},r.opts),{level:"trace",browser:index_es_g(i({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I(r){var e;const t=new index_es_B((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino_default()(index_es_g(i({},r.opts),{level:"trace"}),t),chunkLoggerController:t}}function A(r){return typeof r.loggerOverride<"u"&&typeof r.loggerOverride!="string"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<"u"?dist_index_es_C(r):I(r)}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/types/dist/index.es.js
class types_dist_index_es_n extends IEvents{constructor(s){super(),this.opts=s,this.protocol="wc",this.version=2}}class types_dist_index_es_l{constructor(s,t,e){this.core=s,this.logger=t}}class dist_index_es_h extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t,this.records=new Map}}class index_es_a{constructor(s,t){this.logger=s,this.core=t}}class dist_index_es_g extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t}}class index_es_u extends IEvents{constructor(s){super()}}class dist_index_es_p{constructor(s,t,e,f){this.core=s,this.logger=t,this.name=e}}class index_es_I{constructor(){this.map=new Map}}class dist_index_es_d extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t}}class types_dist_index_es_E{constructor(s,t){this.core=s,this.logger=t}}class types_dist_index_es_x extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t}}class dist_index_es_m{constructor(s,t){this.logger=s,this.core=t}}class dist_index_es_y{constructor(s,t,e){this.core=s,this.logger=t,this.store=e}}class index_es_v{constructor(s,t){this.projectId=s,this.logger=t}}class types_dist_index_es_C{constructor(s,t,e){this.core=s,this.logger=t,this.telemetryEnabled=e}}class dist_index_es_b extends (external_events_default()){constructor(){super()}}class dist_index_es_S{constructor(s){this.opts=s,this.protocol="wc",this.version=2}}class dist_index_es_w extends external_events_.EventEmitter{constructor(){super()}}class dist_index_es_M{constructor(s){this.client=s}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const constants_SERVER_ERROR_CODE_RANGE = (/* unused pure expression or super */ null && ([-32000, -32099]));
const constants_STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: { code: -32700, message: "Parse error" },
    [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
    [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
    [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
    [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
    [SERVER_ERROR]: { code: -32000, message: "Server error" },
};
const constants_DEFAULT_ERROR = SERVER_ERROR;
//# sourceMappingURL=constants.js.map
;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js

function isServerErrorCode(code) {
    return code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code) {
    return RESERVED_ERROR_CODES.includes(code);
}
function isValidErrorCode(code) {
    return typeof code === "number";
}
function getError(type) {
    if (!Object.keys(constants_STANDARD_ERROR_MAP).includes(type)) {
        return constants_STANDARD_ERROR_MAP[constants_DEFAULT_ERROR];
    }
    return constants_STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
    const match = Object.values(constants_STANDARD_ERROR_MAP).find(e => e.code === code);
    if (!match) {
        return constants_STANDARD_ERROR_MAP[constants_DEFAULT_ERROR];
    }
    return match;
}
function validateJsonRpcError(response) {
    if (typeof response.error.code === "undefined") {
        return { valid: false, error: "Missing code for JSON-RPC error" };
    }
    if (typeof response.error.message === "undefined") {
        return { valid: false, error: "Missing message for JSON-RPC error" };
    }
    if (!isValidErrorCode(response.error.code)) {
        return {
            valid: false,
            error: `Invalid error code type for JSON-RPC: ${response.error.code}`,
        };
    }
    if (isReservedErrorCode(response.error.code)) {
        const error = getErrorByCode(response.error.code);
        if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message &&
            response.error.message === error.message) {
            return {
                valid: false,
                error: `Invalid error code message for JSON-RPC: ${response.error.code}`,
            };
        }
    }
    return { valid: true };
}
function parseConnectionError(e, url, type) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED")
        ? new Error(`Unavailable ${type} RPC url at ${url}`)
        : e;
}
//# sourceMappingURL=error.js.map
// EXTERNAL MODULE: ./node_modules/@walletconnect/environment/dist/cjs/index.js
var environment_dist_cjs = __webpack_require__(525682);
;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js

const isNodeJs = (/* unused pure expression or super */ null && (isNode));

//# sourceMappingURL=env.js.map
;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js


function payloadId(entropy = 3) {
    const date = Date.now() * Math.pow(10, entropy);
    const extra = Math.floor(Math.random() * Math.pow(10, entropy));
    return date + extra;
}
function getBigIntRpcId(entropy = 6) {
    return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
    return {
        id: id || payloadId(),
        jsonrpc: "2.0",
        method,
        params,
    };
}
function formatJsonRpcResult(id, result) {
    return {
        id,
        jsonrpc: "2.0",
        result,
    };
}
function formatJsonRpcError(id, error, data) {
    return {
        id,
        jsonrpc: "2.0",
        error: formatErrorMessage(error, data),
    };
}
function formatErrorMessage(error, data) {
    if (typeof error === "undefined") {
        return getError(INTERNAL_ERROR);
    }
    if (typeof error === "string") {
        error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
    }
    if (typeof data !== "undefined") {
        error.data = data;
    }
    if (isReservedErrorCode(error.code)) {
        error = getErrorByCode(error.code);
    }
    return error;
}
//# sourceMappingURL=format.js.map
;// ./node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
class dist_index_es_e{}class dist_index_es_o extends dist_index_es_e{constructor(c){super()}}class jsonrpc_types_dist_index_es_n extends dist_index_es_e{constructor(){super()}}class dist_index_es_r extends jsonrpc_types_dist_index_es_n{constructor(c){super()}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js

//# sourceMappingURL=types.js.map
;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
    const matches = url.match(new RegExp(/^\w+:/, "gi"));
    if (!matches || !matches.length)
        return;
    return matches[0];
}
function matchRegexProtocol(url, regex) {
    const protocol = getUrlProtocol(url);
    if (typeof protocol === "undefined")
        return false;
    return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
    return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
    return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}
//# sourceMappingURL=url.js.map
;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
function isJsonRpcPayload(payload) {
    return (typeof payload === "object" &&
        "id" in payload &&
        "jsonrpc" in payload &&
        payload.jsonrpc === "2.0");
}
function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
    return "result" in payload;
}
function isJsonRpcError(payload) {
    return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
}
//# sourceMappingURL=validators.js.map
;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js








//# sourceMappingURL=index.js.map
;// ./node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
class jsonrpc_provider_dist_index_es_o extends dist_index_es_r{constructor(t){super(t),this.events=new external_events_.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict(formatJsonRpcRequest(t.method,t.params||[],t.id||getBigIntRpcId().toString()),e)}async requestStrict(t,e){return new Promise(async(i,s)=>{if(!this.connection.connected)try{await this.open()}catch(n){s(n)}this.events.on(`${t.id}`,n=>{isJsonRpcError(n)?s(n.error):i(n.result)});try{await this.connection.send(t,e)}catch(n){s(n)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),isJsonRpcResponse(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect")}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0)}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
const dist_index_es_v=()=>typeof WebSocket<"u"?WebSocket:typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:__webpack_require__(792784),jsonrpc_ws_connection_dist_index_es_w=()=>typeof WebSocket<"u"||typeof global<"u"&&typeof global.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",jsonrpc_ws_connection_dist_index_es_d=r=>r.split("?")[0],jsonrpc_ws_connection_dist_index_es_h=10,jsonrpc_ws_connection_dist_index_es_b=dist_index_es_v();class dist_index_es_f{constructor(e){if(this.url=e,this.events=new external_events_.EventEmitter,this.registering=!1,!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,t)=>{if(typeof this.socket>"u"){t(new Error("Connection already closed"));return}this.socket.onclose=n=>{this.onClose(n),e()},this.socket.close()})}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send(safeJsonStringify(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=t||this.events.listenerCount("open")>=t)&&this.events.setMaxListeners(t+1),new Promise((n,s)=>{this.events.once("register_error",o=>{this.resetMaxListeners(),s(o)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return s(new Error("WebSocket connection is missing or invalid"));n(this.socket)})})}return this.url=e,this.registering=!0,new Promise((t,n)=>{const s=(0,environment_dist_cjs.isReactNative)()?void 0:{rejectUnauthorized:!isLocalhostUrl(e)},o=new jsonrpc_ws_connection_dist_index_es_b(e,[],s);jsonrpc_ws_connection_dist_index_es_w()?o.onerror=i=>{const a=i;n(this.emitError(a.error))}:o.on("error",i=>{n(this.emitError(i))}),o.onopen=()=>{this.onOpen(o),t(o)}})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t=typeof e.data=="string"?safeJsonParse(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const n=this.parseError(t),s=n.message||n.toString(),o=formatJsonRpcError(e,s);this.events.emit("payload",o)}parseError(e,t=this.url){return parseConnectionError(e,jsonrpc_ws_connection_dist_index_es_d(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>jsonrpc_ws_connection_dist_index_es_h&&this.events.setMaxListeners(jsonrpc_ws_connection_dist_index_es_h)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${jsonrpc_ws_connection_dist_index_es_d(this.url)}`));return this.events.emit("register_error",t),t}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(908142);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);
;// ./node_modules/@walletconnect/core/dist/index.es.js
const index_es_ye="wc",dist_index_es_De=2,dist_index_es_J="core",index_es_A=`${index_es_ye}@2:${dist_index_es_J}:`,dist_index_es_Xe={name:dist_index_es_J,logger:"error"},index_es_We={database:":memory:"},dist_index_es_Ze="crypto",dist_index_es_me="client_ed25519_seed",dist_index_es_Qe=cjs.ONE_DAY,index_es_et="keychain",index_es_tt="0.3",dist_index_es_it="messages",index_es_st="0.3",dist_index_es_be=cjs.SIX_HOURS,dist_index_es_rt="publisher",dist_index_es_nt="irn",index_es_ot="error",dist_index_es_fe="wss://relay.walletconnect.org",index_es_at="relayer",core_dist_index_es_v={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},dist_index_es_ct="_subscription",core_dist_index_es_C={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},dist_index_es_ht=.1,index_es_ws={database:":memory:"},index_es_re="2.18.0",index_es_Is=1e4,core_dist_index_es_M={link_mode:"link_mode",relay:"relay"},dist_index_es_lt="0.3",dist_index_es_ut="WALLETCONNECT_CLIENT_ID",dist_index_es_ve="WALLETCONNECT_LINK_MODE_APPS",index_es_T={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},index_es_Ts=(/* unused pure expression or super */ null && (ae)),dist_index_es_dt="subscription",index_es_pt="0.3",dist_index_es_gt=cjs.FIVE_SECONDS*1e3,dist_index_es_yt="pairing",dist_index_es_Dt="0.3",index_es_Cs=(/* unused pure expression or super */ null && (ae)),index_es_V={wc_pairingDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:0},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:0}}},dist_index_es_j={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},index_es_R={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},index_es_mt="history",dist_index_es_bt="0.3",dist_index_es_ft="expirer",core_dist_index_es_x={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},dist_index_es_vt="0.3",index_es_Ps=(/* unused pure expression or super */ null && (B)),dist_index_es_t="verify-api",index_es_Ss="https://verify.walletconnect.com",dist_index_es_Et="https://verify.walletconnect.org",X=dist_index_es_Et,dist_index_es_wt=`${X}/v3`,dist_index_es_It=[index_es_Ss,dist_index_es_Et],dist_index_es_Tt="echo",index_es_Ct="https://echo.walletconnect.com",index_es_Rs="event-client",core_dist_index_es_z={pairing_started:"pairing_started",pairing_uri_validation_success:"pairing_uri_validation_success",pairing_uri_not_expired:"pairing_uri_not_expired",store_new_pairing:"store_new_pairing",subscribing_pairing_topic:"subscribing_pairing_topic",subscribe_pairing_topic_success:"subscribe_pairing_topic_success",existing_pairing:"existing_pairing",pairing_not_expired:"pairing_not_expired",emit_inactive_pairing:"emit_inactive_pairing",emit_session_proposal:"emit_session_proposal",subscribing_to_pairing_topic:"subscribing_to_pairing_topic"},$={no_wss_connection:"no_wss_connection",no_internet_connection:"no_internet_connection",malformed_pairing_uri:"malformed_pairing_uri",active_pairing_already_exists:"active_pairing_already_exists",subscribe_pairing_topic_failure:"subscribe_pairing_topic_failure",pairing_expired:"pairing_expired",proposal_expired:"proposal_expired",proposal_listener_not_found:"proposal_listener_not_found"},index_es_xs={session_approve_started:"session_approve_started",proposal_not_expired:"proposal_not_expired",session_namespaces_validation_success:"session_namespaces_validation_success",create_session_topic:"create_session_topic",subscribing_session_topic:"subscribing_session_topic",subscribe_session_topic_success:"subscribe_session_topic_success",publishing_session_approve:"publishing_session_approve",session_approve_publish_success:"session_approve_publish_success",store_session:"store_session",publishing_session_settle:"publishing_session_settle",session_settle_publish_success:"session_settle_publish_success"},index_es_Os={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",proposal_expired:"proposal_expired",subscribe_session_topic_failure:"subscribe_session_topic_failure",session_approve_publish_failure:"session_approve_publish_failure",session_settle_publish_failure:"session_settle_publish_failure",session_approve_namespace_validation_failure:"session_approve_namespace_validation_failure",proposal_not_found:"proposal_not_found"},index_es_As={authenticated_session_approve_started:"authenticated_session_approve_started",authenticated_session_not_expired:"authenticated_session_not_expired",chains_caip2_compliant:"chains_caip2_compliant",chains_evm_compliant:"chains_evm_compliant",create_authenticated_session_topic:"create_authenticated_session_topic",cacaos_verified:"cacaos_verified",store_authenticated_session:"store_authenticated_session",subscribing_authenticated_session_topic:"subscribing_authenticated_session_topic",subscribe_authenticated_session_topic_success:"subscribe_authenticated_session_topic_success",publishing_authenticated_session_approve:"publishing_authenticated_session_approve",authenticated_session_approve_publish_success:"authenticated_session_approve_publish_success"},index_es_Ns={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",missing_session_authenticate_request:"missing_session_authenticate_request",session_authenticate_request_expired:"session_authenticate_request_expired",chains_caip2_compliant_failure:"chains_caip2_compliant_failure",chains_evm_compliant_failure:"chains_evm_compliant_failure",invalid_cacao:"invalid_cacao",subscribe_authenticated_session_topic_failure:"subscribe_authenticated_session_topic_failure",authenticated_session_approve_publish_failure:"authenticated_session_approve_publish_failure",authenticated_session_pending_request_not_found:"authenticated_session_pending_request_not_found"},dist_index_es_Pt=.1,dist_index_es_St="event-client",dist_index_es_Rt=86400,dist_index_es_xt="https://pulse.walletconnect.org/batch";function index_es_zs(o,e){if(o.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),s=0;s<t.length;s++)t[s]=255;for(var i=0;i<o.length;i++){var r=o.charAt(i),n=r.charCodeAt(0);if(t[n]!==255)throw new TypeError(r+" is ambiguous");t[n]=i}var a=o.length,c=o.charAt(0),h=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";for(var g=0,w=0,b=0,D=l.length;b!==D&&l[b]===0;)b++,g++;for(var P=(D-b)*u+1>>>0,f=new Uint8Array(P);b!==D;){for(var N=l[b],k=0,O=P-1;(N!==0||k<w)&&O!==-1;O--,k++)N+=256*f[O]>>>0,f[O]=N%a>>>0,N=N/a>>>0;if(N!==0)throw new Error("Non-zero carry");w=k,b++}for(var L=P-w;L!==P&&f[L]===0;)L++;for(var ee=c.repeat(g);L<P;++L)ee+=o.charAt(f[L]);return ee}function y(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;var g=0;if(l[g]!==" "){for(var w=0,b=0;l[g]===c;)w++,g++;for(var D=(l.length-g)*h+1>>>0,P=new Uint8Array(D);l[g];){var f=t[l.charCodeAt(g)];if(f===255)return;for(var N=0,k=D-1;(f!==0||N<b)&&k!==-1;k--,N++)f+=a*P[k]>>>0,P[k]=f%256>>>0,f=f/256>>>0;if(f!==0)throw new Error("Non-zero carry");b=N,g++}if(l[g]!==" "){for(var O=D-b;O!==D&&P[O]===0;)O++;for(var L=new Uint8Array(w+(D-O)),ee=w;O!==D;)L[ee++]=P[O++];return L}}}function m(l){var g=y(l);if(g)return g;throw new Error(`Non-${e} character`)}return{encode:d,decodeUnsafe:y,decode:m}}var index_es_Ls=index_es_zs,index_es_$s=index_es_Ls;const dist_index_es_Ot=o=>{if(o instanceof Uint8Array&&o.constructor.name==="Uint8Array")return o;if(o instanceof ArrayBuffer)return new Uint8Array(o);if(ArrayBuffer.isView(o))return new Uint8Array(o.buffer,o.byteOffset,o.byteLength);throw new Error("Unknown type, must be binary type")},index_es_ks=o=>new TextEncoder().encode(o),index_es_Us=o=>new TextDecoder().decode(o);class index_es_Fs{constructor(e,t,s){this.name=e,this.prefix=t,this.baseEncode=s}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class index_es_Ms{constructor(e,t,s){if(this.name=e,this.prefix=t,t.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=s}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return index_es_At(this,e)}}class index_es_Ks{constructor(e){this.decoders=e}or(e){return index_es_At(this,e)}decode(e){const t=e[0],s=this.decoders[t];if(s)return s.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const index_es_At=(o,e)=>new index_es_Ks({...o.decoders||{[o.prefix]:o},...e.decoders||{[e.prefix]:e}});class index_es_Bs{constructor(e,t,s,i){this.name=e,this.prefix=t,this.baseEncode=s,this.baseDecode=i,this.encoder=new index_es_Fs(e,t,s),this.decoder=new index_es_Ms(e,t,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const index_es_ne=({name:o,prefix:e,encode:t,decode:s})=>new index_es_Bs(o,e,t,s),index_es_W=({prefix:o,name:e,alphabet:t})=>{const{encode:s,decode:i}=index_es_$s(t,e);return index_es_ne({prefix:o,name:e,encode:s,decode:r=>dist_index_es_Ot(i(r))})},index_es_Vs=(o,e,t,s)=>{const i={};for(let u=0;u<e.length;++u)i[e[u]]=u;let r=o.length;for(;o[r-1]==="=";)--r;const n=new Uint8Array(r*t/8|0);let a=0,c=0,h=0;for(let u=0;u<r;++u){const d=i[o[u]];if(d===void 0)throw new SyntaxError(`Non-${s} character`);c=c<<t|d,a+=t,a>=8&&(a-=8,n[h++]=255&c>>a)}if(a>=t||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return n},index_es_js=(o,e,t)=>{const s=e[e.length-1]==="=",i=(1<<t)-1;let r="",n=0,a=0;for(let c=0;c<o.length;++c)for(a=a<<8|o[c],n+=8;n>t;)n-=t,r+=e[i&a>>n];if(n&&(r+=e[i&a<<t-n]),s)for(;r.length*t&7;)r+="=";return r},core_dist_index_es_=({name:o,prefix:e,bitsPerChar:t,alphabet:s})=>index_es_ne({prefix:e,name:o,encode(i){return index_es_js(i,s,t)},decode(i){return index_es_Vs(i,s,t,o)}}),index_es_qs=index_es_ne({prefix:"\0",name:"identity",encode:o=>index_es_Us(o),decode:o=>index_es_ks(o)});var index_es_Gs=Object.freeze({__proto__:null,identity:index_es_qs});const index_es_Hs=core_dist_index_es_({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var index_es_Ys=Object.freeze({__proto__:null,base2:index_es_Hs});const index_es_Js=core_dist_index_es_({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var index_es_Xs=Object.freeze({__proto__:null,base8:index_es_Js});const index_es_Ws=index_es_W({prefix:"9",name:"base10",alphabet:"0123456789"});var index_es_Zs=Object.freeze({__proto__:null,base10:index_es_Ws});const index_es_Qs=core_dist_index_es_({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),dist_index_es_er=core_dist_index_es_({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var dist_index_es_tr=Object.freeze({__proto__:null,base16:index_es_Qs,base16upper:dist_index_es_er});const dist_index_es_ir=core_dist_index_es_({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),dist_index_es_sr=core_dist_index_es_({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),dist_index_es_rr=core_dist_index_es_({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),dist_index_es_nr=core_dist_index_es_({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),dist_index_es_or=core_dist_index_es_({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),dist_index_es_ar=core_dist_index_es_({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),dist_index_es_cr=core_dist_index_es_({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),dist_index_es_hr=core_dist_index_es_({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),dist_index_es_lr=core_dist_index_es_({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var dist_index_es_ur=Object.freeze({__proto__:null,base32:dist_index_es_ir,base32upper:dist_index_es_sr,base32pad:dist_index_es_rr,base32padupper:dist_index_es_nr,base32hex:dist_index_es_or,base32hexupper:dist_index_es_ar,base32hexpad:dist_index_es_cr,base32hexpadupper:dist_index_es_hr,base32z:dist_index_es_lr});const dist_index_es_dr=index_es_W({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),dist_index_es_pr=index_es_W({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var dist_index_es_gr=Object.freeze({__proto__:null,base36:dist_index_es_dr,base36upper:dist_index_es_pr});const dist_index_es_yr=index_es_W({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),index_es_Dr=index_es_W({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var dist_index_es_mr=Object.freeze({__proto__:null,base58btc:dist_index_es_yr,base58flickr:index_es_Dr});const dist_index_es_br=core_dist_index_es_({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),dist_index_es_fr=core_dist_index_es_({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),dist_index_es_vr=core_dist_index_es_({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),core_dist_index_es_r=core_dist_index_es_({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var dist_index_es_Er=Object.freeze({__proto__:null,base64:dist_index_es_br,base64pad:dist_index_es_fr,base64url:dist_index_es_vr,base64urlpad:core_dist_index_es_r});const dist_index_es_Nt=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),dist_index_es_wr=dist_index_es_Nt.reduce((o,e,t)=>(o[t]=e,o),[]),dist_index_es_Ir=dist_index_es_Nt.reduce((o,e,t)=>(o[e.codePointAt(0)]=t,o),[]);function dist_index_es_Tr(o){return o.reduce((e,t)=>(e+=dist_index_es_wr[t],e),"")}function index_es_Cr(o){const e=[];for(const t of o){const s=dist_index_es_Ir[t.codePointAt(0)];if(s===void 0)throw new Error(`Non-base256emoji character: ${t}`);e.push(s)}return new Uint8Array(e)}const index_es_Pr=index_es_ne({prefix:"\u{1F680}",name:"base256emoji",encode:dist_index_es_Tr,decode:index_es_Cr});var dist_index_es_Sr=Object.freeze({__proto__:null,base256emoji:index_es_Pr}),dist_index_es_Rr=dist_index_es_Lt,dist_index_es_zt=128,dist_index_es_xr=127,dist_index_es_Or=~dist_index_es_xr,dist_index_es_Ar=Math.pow(2,31);function dist_index_es_Lt(o,e,t){e=e||[],t=t||0;for(var s=t;o>=dist_index_es_Ar;)e[t++]=o&255|dist_index_es_zt,o/=128;for(;o&dist_index_es_Or;)e[t++]=o&255|dist_index_es_zt,o>>>=7;return e[t]=o|0,dist_index_es_Lt.bytes=t-s+1,e}var dist_index_es_Nr=core_dist_index_es_e,dist_index_es_zr=128,dist_index_es_$t=127;function core_dist_index_es_e(o,s){var t=0,s=s||0,i=0,r=s,n,a=o.length;do{if(r>=a)throw core_dist_index_es_e.bytes=0,new RangeError("Could not decode varint");n=o[r++],t+=i<28?(n&dist_index_es_$t)<<i:(n&dist_index_es_$t)*Math.pow(2,i),i+=7}while(n>=dist_index_es_zr);return core_dist_index_es_e.bytes=r-s,t}var index_es_Lr=Math.pow(2,7),dist_index_es_$r=Math.pow(2,14),index_es_kr=Math.pow(2,21),dist_index_es_Ur=Math.pow(2,28),dist_index_es_Fr=Math.pow(2,35),dist_index_es_Mr=Math.pow(2,42),dist_index_es_Kr=Math.pow(2,49),index_es_Br=Math.pow(2,56),dist_index_es_Vr=Math.pow(2,63),index_es_jr=function(o){return o<index_es_Lr?1:o<dist_index_es_$r?2:o<index_es_kr?3:o<dist_index_es_Ur?4:o<dist_index_es_Fr?5:o<dist_index_es_Mr?6:o<dist_index_es_Kr?7:o<index_es_Br?8:o<dist_index_es_Vr?9:10},dist_index_es_qr={encode:dist_index_es_Rr,decode:dist_index_es_Nr,encodingLength:index_es_jr},dist_index_es_kt=dist_index_es_qr;const dist_index_es_Ut=(o,e,t=0)=>(dist_index_es_kt.encode(o,e,t),e),dist_index_es_Ft=o=>dist_index_es_kt.encodingLength(o),dist_index_es_Ee=(o,e)=>{const t=e.byteLength,s=dist_index_es_Ft(o),i=s+dist_index_es_Ft(t),r=new Uint8Array(i+t);return dist_index_es_Ut(o,r,0),dist_index_es_Ut(t,r,s),r.set(e,i),new dist_index_es_Gr(o,t,e,r)};class dist_index_es_Gr{constructor(e,t,s,i){this.code=e,this.size=t,this.digest=s,this.bytes=i}}const dist_index_es_Mt=({name:o,code:e,encode:t})=>new dist_index_es_Hr(o,e,t);class dist_index_es_Hr{constructor(e,t,s){this.name=e,this.code=t,this.encode=s}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?dist_index_es_Ee(this.code,t):t.then(s=>dist_index_es_Ee(this.code,s))}else throw Error("Unknown type, must be binary type")}}const dist_index_es_Kt=o=>async e=>new Uint8Array(await crypto.subtle.digest(o,e)),dist_index_es_Yr=dist_index_es_Mt({name:"sha2-256",code:18,encode:dist_index_es_Kt("SHA-256")}),dist_index_es_Jr=dist_index_es_Mt({name:"sha2-512",code:19,encode:dist_index_es_Kt("SHA-512")});var dist_index_es_Xr=Object.freeze({__proto__:null,sha256:dist_index_es_Yr,sha512:dist_index_es_Jr});const dist_index_es_Bt=0,dist_index_es_Wr="identity",dist_index_es_Vt=dist_index_es_Ot,dist_index_es_Zr=o=>dist_index_es_Ee(dist_index_es_Bt,dist_index_es_Vt(o)),dist_index_es_Qr={code:dist_index_es_Bt,name:dist_index_es_Wr,encode:dist_index_es_Vt,digest:dist_index_es_Zr};var dist_index_es_en=Object.freeze({__proto__:null,identity:dist_index_es_Qr});new TextEncoder,new TextDecoder;const index_es_jt={...index_es_Gs,...index_es_Ys,...index_es_Xs,...index_es_Zs,...dist_index_es_tr,...dist_index_es_ur,...dist_index_es_gr,...dist_index_es_mr,...dist_index_es_Er,...dist_index_es_Sr};({...dist_index_es_Xr,...dist_index_es_en});function dist_index_es_tn(o=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(o):new Uint8Array(o)}function dist_index_es_qt(o,e,t,s){return{name:o,prefix:e,encoder:{name:o,prefix:e,encode:t},decoder:{decode:s}}}const dist_index_es_Gt=dist_index_es_qt("utf8","u",o=>"u"+new TextDecoder("utf8").decode(o),o=>new TextEncoder().encode(o.substring(1))),dist_index_es_we=dist_index_es_qt("ascii","a",o=>{let e="a";for(let t=0;t<o.length;t++)e+=String.fromCharCode(o[t]);return e},o=>{o=o.substring(1);const e=dist_index_es_tn(o.length);for(let t=0;t<o.length;t++)e[t]=o.charCodeAt(t);return e}),dist_index_es_sn={utf8:dist_index_es_Gt,"utf-8":dist_index_es_Gt,hex:index_es_jt.base16,latin1:dist_index_es_we,ascii:dist_index_es_we,binary:dist_index_es_we,...index_es_jt};function dist_index_es_rn(o,e="utf8"){const t=dist_index_es_sn[e];if(!t)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(o,"utf8"):t.decoder.decode(`${t.prefix}${o}`)}class dist_index_es_Ht{constructor(e,t){this.core=e,this.logger=t,this.keychain=new Map,this.name=index_es_et,this.version=index_es_tt,this.initialized=!1,this.storagePrefix=index_es_A,this.init=async()=>{if(!this.initialized){const s=await this.getKeyChain();typeof s<"u"&&(this.keychain=s),this.initialized=!0}},this.has=s=>(this.isInitialized(),this.keychain.has(s)),this.set=async(s,i)=>{this.isInitialized(),this.keychain.set(s,i),await this.persist()},this.get=s=>{this.isInitialized();const i=this.keychain.get(s);if(typeof i>"u"){const{message:r}=index_es_te("NO_MATCHING_KEY",`${this.name}: ${s}`);throw new Error(r)}return i},this.del=async s=>{this.isInitialized(),this.keychain.delete(s),await this.persist()},this.core=e,this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,index_es_no(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?index_es_ro(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}}class dist_index_es_Yt{constructor(e,t,s){this.core=e,this.logger=t,this.name=dist_index_es_Ze,this.randomSessionIdentifier=ni(),this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)},this.hasKeys=i=>(this.isInitialized(),this.keychain.has(i)),this.getClientId=async()=>{this.isInitialized();const i=await this.getClientSeed(),r=Po(i);return Qe(r.publicKey)},this.generateKeyPair=()=>{this.isInitialized();const i=ti();return this.setPrivateKey(i.publicKey,i.privateKey)},this.signJWT=async i=>{this.isInitialized();const r=await this.getClientSeed(),n=Po(r),a=this.randomSessionIdentifier,c=dist_index_es_Qe;return await Qo(a,i,c,n)},this.generateSharedKey=(i,r,n)=>{this.isInitialized();const a=this.getPrivateKey(i),c=ri(a,r);return this.setSymKey(c,n)},this.setSymKey=async(i,r)=>{this.isInitialized();const n=r||oi(i);return await this.keychain.set(n,i),n},this.deleteKeyPair=async i=>{this.isInitialized(),await this.keychain.del(i)},this.deleteSymKey=async i=>{this.isInitialized(),await this.keychain.del(i)},this.encode=async(i,r,n)=>{this.isInitialized();const a=index_es_rr(n),c=safeJsonStringify(r);if(di(a))return ai(c,n?.encoding);if(li(a)){const y=a.senderPublicKey,m=a.receiverPublicKey;i=await this.generateSharedKey(y,m)}const h=this.getSymKey(i),{type:u,senderPublicKey:d}=a;return ii({type:u,symKey:h,message:c,senderPublicKey:d,encoding:n?.encoding})},this.decode=async(i,r,n)=>{this.isInitialized();const a=fi(r,n);if(di(a)){const c=ui(r,n?.encoding);return safeJsonParse(c)}if(li(a)){const c=a.receiverPublicKey,h=a.senderPublicKey;i=await this.generateSharedKey(c,h)}try{const c=this.getSymKey(i),h=ci({symKey:c,encoded:r,encoding:n?.encoding});return safeJsonParse(h)}catch(c){this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`),this.logger.error(c)}},this.getPayloadType=(i,r=At)=>{const n=index_es_Fe({encoded:i,encoding:r});return index_es_fe(n.type)},this.getPayloadSenderPublicKey=(i,r=At)=>{const n=index_es_Fe({encoded:i,encoding:r});return n.senderPublicKey?to_string_toString(n.senderPublicKey,V):void 0},this.core=e,this.logger=dist_index_es_E(t,this.name),this.keychain=s||new dist_index_es_Ht(this.core,this.logger)}get context(){return index_es_y(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(dist_index_es_me)}catch{e=ni(),await this.keychain.set(dist_index_es_me,e)}return dist_index_es_rn(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}}class dist_index_es_Jt extends index_es_a{constructor(e,t){super(e,t),this.logger=e,this.core=t,this.messages=new Map,this.name=dist_index_es_it,this.version=index_es_st,this.initialized=!1,this.storagePrefix=index_es_A,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const s=await this.getRelayerMessages();typeof s<"u"&&(this.messages=s),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(s){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(s)}finally{this.initialized=!0}}},this.set=async(s,i)=>{this.isInitialized();const r=si(i);let n=this.messages.get(s);return typeof n>"u"&&(n={}),typeof n[r]<"u"||(n[r]=i,this.messages.set(s,n),await this.persist()),r},this.get=s=>{this.isInitialized();let i=this.messages.get(s);return typeof i>"u"&&(i={}),i},this.has=(s,i)=>{this.isInitialized();const r=this.get(s),n=si(i);return typeof r[n]<"u"},this.del=async s=>{this.isInitialized(),this.messages.delete(s),await this.persist()},this.logger=dist_index_es_E(e,this.name),this.core=t}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,index_es_no(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?index_es_ro(e):void 0}async persist(){await this.setRelayerMessages(this.messages)}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}}var dist_index_es_nn=Object.defineProperty,dist_index_es_on=Object.defineProperties,index_es_an=Object.getOwnPropertyDescriptors,dist_index_es_Xt=Object.getOwnPropertySymbols,index_es_cn=Object.prototype.hasOwnProperty,index_es_hn=Object.prototype.propertyIsEnumerable,dist_index_es_Wt=(o,e,t)=>e in o?dist_index_es_nn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,dist_index_es_Zt=(o,e)=>{for(var t in e||(e={}))index_es_cn.call(e,t)&&dist_index_es_Wt(o,t,e[t]);if(dist_index_es_Xt)for(var t of dist_index_es_Xt(e))index_es_hn.call(e,t)&&dist_index_es_Wt(o,t,e[t]);return o},dist_index_es_Qt=(o,e)=>dist_index_es_on(o,index_es_an(e));class index_es_ln extends dist_index_es_g{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.events=new external_events_.EventEmitter,this.name=dist_index_es_rt,this.queue=new Map,this.publishTimeout=(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),this.initialPublishTimeout=(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15),this.needsTransportRestart=!1,this.publish=async(s,i,r)=>{var n;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:s,message:i,opts:r}});const a=r?.ttl||dist_index_es_be,c=yi(r),h=r?.prompt||!1,u=r?.tag||0,d=r?.id||getBigIntRpcId().toString(),y={topic:s,message:i,opts:{ttl:a,relay:c,prompt:h,tag:u,id:d,attestation:r?.attestation}},m=`Failed to publish payload, please try again. id:${d} tag:${u}`;try{const l=new Promise(async g=>{const w=({id:D})=>{y.opts.id===D&&(this.removeRequestFromQueue(D),this.relayer.events.removeListener(core_dist_index_es_v.publish,w),g(y))};this.relayer.events.on(core_dist_index_es_v.publish,w);const b=index_es_ao(new Promise((D,P)=>{this.rpcPublish({topic:s,message:i,ttl:a,prompt:h,tag:u,id:d,attestation:r?.attestation}).then(D).catch(f=>{this.logger.warn(f,f?.message),P(f)})}),this.initialPublishTimeout,`Failed initial publish, retrying.... id:${d} tag:${u}`);try{await b,this.events.removeListener(core_dist_index_es_v.publish,w)}catch(D){this.queue.set(d,dist_index_es_Qt(dist_index_es_Zt({},y),{attempt:1})),this.logger.warn(D,D?.message)}});this.logger.trace({type:"method",method:"publish",params:{id:d,topic:s,message:i,opts:r}}),await index_es_ao(l,this.publishTimeout,m)}catch(l){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(l),(n=r?.internal)!=null&&n.throwOnFailedPublish)throw l}finally{this.queue.delete(d)}},this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.relayer=e,this.logger=dist_index_es_E(t,this.name),this.registerEventListeners()}get context(){return index_es_y(this.logger)}async rpcPublish(e){var t,s,i,r;const{topic:n,message:a,ttl:c=dist_index_es_be,prompt:h,tag:u,id:d,attestation:y}=e,m={method:mi(yi().protocol).publish,params:{topic:n,message:a,ttl:c,prompt:h,tag:u,attestation:y},id:d};index_es_ae((t=m.params)==null?void 0:t.prompt)&&((s=m.params)==null||delete s.prompt),index_es_ae((i=m.params)==null?void 0:i.tag)&&((r=m.params)==null||delete r.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:m});const l=await this.relayer.request(m);return this.relayer.events.emit(core_dist_index_es_v.publish,e),this.logger.debug("Successfully Published Payload"),l}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach(async(e,t)=>{const s=e.attempt+1;this.queue.set(t,dist_index_es_Qt(dist_index_es_Zt({},e),{attempt:s}));const{topic:i,message:r,opts:n,attestation:a}=e;this.logger.warn({},`Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${s}`),await this.rpcPublish({topic:i,message:r,ttl:n.ttl,prompt:n.prompt,tag:n.tag,id:n.id,attestation:a}),this.logger.warn({},`Publisher: queue->published: ${e.opts.id}`)})}registerEventListeners(){this.relayer.core.heartbeat.on(r.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(core_dist_index_es_v.connection_stalled);return}this.checkQueue()}),this.relayer.on(core_dist_index_es_v.message_ack,e=>{this.removeRequestFromQueue(e.id.toString())})}}class index_es_un{constructor(){this.map=new Map,this.set=(e,t)=>{const s=this.get(e);this.exists(e,t)||this.map.set(e,[...s,t])},this.get=e=>this.map.get(e)||[],this.exists=(e,t)=>this.get(e).includes(t),this.delete=(e,t)=>{if(typeof t>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const s=this.get(e);if(!this.exists(e,t))return;const i=s.filter(r=>r!==t);if(!i.length){this.map.delete(e);return}this.map.set(e,i)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var index_es_dn=Object.defineProperty,index_es_pn=Object.defineProperties,dist_index_es_gn=Object.getOwnPropertyDescriptors,index_es_ei=Object.getOwnPropertySymbols,dist_index_es_yn=Object.prototype.hasOwnProperty,index_es_Dn=Object.prototype.propertyIsEnumerable,index_es_ti=(o,e,t)=>e in o?index_es_dn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,Z=(o,e)=>{for(var t in e||(e={}))dist_index_es_yn.call(e,t)&&index_es_ti(o,t,e[t]);if(index_es_ei)for(var t of index_es_ei(e))index_es_Dn.call(e,t)&&index_es_ti(o,t,e[t]);return o},dist_index_es_Ie=(o,e)=>index_es_pn(o,dist_index_es_gn(e));class index_es_ii extends dist_index_es_d{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.subscriptions=new Map,this.topicMap=new index_es_un,this.events=new external_events_.EventEmitter,this.name=dist_index_es_dt,this.version=index_es_pt,this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=index_es_A,this.subscribeTimeout=(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),this.initialSubscribeTimeout=(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15),this.batchSubscribeTopicsLimit=500,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),this.clientId=await this.relayer.core.crypto.getClientId(),await this.restore()),this.initialized=!0},this.subscribe=async(s,i)=>{this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:s,opts:i}});try{const r=yi(i),n={topic:s,relay:r,transportType:i?.transportType};this.pending.set(s,n);const a=await this.rpcSubscribe(s,r,i);return typeof a=="string"&&(this.onSubscribe(a,n),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:s,opts:i}})),a}catch(r){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(r),r}},this.unsubscribe=async(s,i)=>{await this.restartToComplete(),this.isInitialized(),typeof i?.id<"u"?await this.unsubscribeById(s,i.id,i):await this.unsubscribeByTopic(s,i)},this.isSubscribed=async s=>{if(this.topics.includes(s))return!0;const i=`${this.pendingSubscriptionWatchLabel}_${s}`;return await new Promise((r,n)=>{const a=new cjs.Watch;a.start(i);const c=setInterval(()=>{(!this.pending.has(s)&&this.topics.includes(s)||this.cached.some(h=>h.topic===s))&&(clearInterval(c),a.stop(i),r(!0)),a.elapsed(i)>=dist_index_es_gt&&(clearInterval(c),a.stop(i),n(new Error("Subscription resolution timeout")))},this.pollingInterval)}).catch(()=>!1)},this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.start=async()=>{await this.onConnect()},this.stop=async()=>{await this.onDisconnect()},this.restart=async()=>{await this.restore(),await this.onRestart()},this.checkPending=async()=>{if(this.pending.size===0&&(!this.initialized||!this.relayer.connected))return;const s=[];this.pending.forEach(i=>{s.push(i)}),await this.batchSubscribe(s)},this.registerEventListeners=()=>{this.relayer.core.heartbeat.on(r.pulse,async()=>{await this.checkPending()}),this.events.on(index_es_T.created,async s=>{const i=index_es_T.created;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,data:s}),await this.persist()}),this.events.on(index_es_T.deleted,async s=>{const i=index_es_T.deleted;this.logger.info(`Emitting ${i}`),this.logger.debug({type:"event",event:i,data:s}),await this.persist()})},this.relayer=e,this.logger=dist_index_es_E(t,this.name),this.clientId=""}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(e,t){let s=!1;try{s=this.getSubscription(e).topic===t}catch{}return s}reset(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const s=this.topicMap.get(e);await Promise.all(s.map(async i=>await this.unsubscribeById(e,i,t)))}async unsubscribeById(e,t,s){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:s}});try{const i=yi(s);await this.rpcUnsubscribe(e,t,i);const r=index_es_de("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,r),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:s}})}catch(i){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(i),i}}async rpcSubscribe(e,t,s){var i;s?.transportType===core_dist_index_es_M.relay&&await this.restartToComplete();const r={method:mi(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:r});const n=(i=s?.internal)==null?void 0:i.throwOnFailedPublish;try{const a=this.getSubscriptionId(e);if(s?.transportType===core_dist_index_es_M.link_mode)return setTimeout(()=>{(this.relayer.connected||this.relayer.connecting)&&this.relayer.request(r).catch(u=>this.logger.warn(u))},(0,cjs.toMiliseconds)(cjs.ONE_SECOND)),a;const c=new Promise(async u=>{const d=y=>{y.topic===e&&(this.events.removeListener(index_es_T.created,d),u(y.id))};this.events.on(index_es_T.created,d);try{const y=await index_es_ao(new Promise((m,l)=>{this.relayer.request(r).catch(g=>{this.logger.warn(g,g?.message),l(g)}).then(m)}),this.initialSubscribeTimeout,`Subscribing to ${e} failed, please try again`);this.events.removeListener(index_es_T.created,d),u(y)}catch{}}),h=await index_es_ao(c,this.subscribeTimeout,`Subscribing to ${e} failed, please try again`);if(!h&&n)throw new Error(`Subscribing to ${e} failed, please try again`);return h?a:null}catch(a){if(this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(core_dist_index_es_v.connection_stalled),n)throw a}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t=e[0].relay,s={method:mi(t.protocol).batchSubscribe,params:{topics:e.map(i=>i.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s});try{await await index_es_ao(new Promise(i=>{this.relayer.request(s).catch(r=>this.logger.warn(r)).then(i)}),this.subscribeTimeout,"rpcBatchSubscribe failed, please try again")}catch{this.relayer.events.emit(core_dist_index_es_v.connection_stalled)}}async rpcBatchFetchMessages(e){if(!e.length)return;const t=e[0].relay,s={method:mi(t.protocol).batchFetchMessages,params:{topics:e.map(r=>r.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s});let i;try{i=await await index_es_ao(new Promise((r,n)=>{this.relayer.request(s).catch(a=>{this.logger.warn(a),n(a)}).then(r)}),this.subscribeTimeout,"rpcBatchFetchMessages failed, please try again")}catch{this.relayer.events.emit(core_dist_index_es_v.connection_stalled)}return i}rpcUnsubscribe(e,t,s){const i={method:mi(s.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i}),this.relayer.request(i)}onSubscribe(e,t){this.setSubscription(e,dist_index_es_Ie(Z({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach(t=>{this.setSubscription(t.id,Z({},t)),this.pending.delete(t.topic)})}async onUnsubscribe(e,t,s){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,s),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t)}addSubscription(e,t){this.subscriptions.set(e,Z({},t)),this.topicMap.set(t.topic,e),this.events.emit(index_es_T.created,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:s}=index_es_te("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(s)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const s=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(s.topic,e),this.events.emit(index_es_T.deleted,dist_index_es_Ie(Z({},s),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(index_es_T.sync)}async onRestart(){if(this.cached.length){const e=[...this.cached],t=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let s=0;s<t;s++){const i=e.splice(0,this.batchSubscribeTopicsLimit);await this.batchSubscribe(i)}}this.events.emit(index_es_T.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:t}=index_es_te("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){e.length&&(await this.rpcBatchSubscribe(e),this.onBatchSubscribe(e.map(t=>dist_index_es_Ie(Z({},t),{id:this.getSubscriptionId(t.topic)}))))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(await index_es_vo((0,cjs.toMiliseconds)(cjs.ONE_SECOND)),await this.relayer.handleBatchMessageEvents(t.messages))}async onConnect(){await this.restart(),this.reset()}onDisconnect(){this.onDisable()}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(){!this.relayer.connected&&!this.relayer.connecting&&await this.relayer.transportOpen()}getSubscriptionId(e){return si(e+this.clientId)}}var dist_index_es_mn=Object.defineProperty,index_es_si=Object.getOwnPropertySymbols,index_es_bn=Object.prototype.hasOwnProperty,index_es_fn=Object.prototype.propertyIsEnumerable,index_es_ri=(o,e,t)=>e in o?dist_index_es_mn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_ni=(o,e)=>{for(var t in e||(e={}))index_es_bn.call(e,t)&&index_es_ri(o,t,e[t]);if(index_es_si)for(var t of index_es_si(e))index_es_fn.call(e,t)&&index_es_ri(o,t,e[t]);return o};class index_es_oi extends index_es_u{constructor(e){super(e),this.protocol="wc",this.version=2,this.events=new external_events_.EventEmitter,this.name=index_es_at,this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.hasExperiencedNetworkDisruption=!1,this.heartBeatTimeout=(0,cjs.toMiliseconds)(cjs.THIRTY_SECONDS+cjs.FIVE_SECONDS),this.requestsInFlight=[],this.connectTimeout=(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15),this.request=async t=>{var s,i;this.logger.debug("Publishing Request Payload");const r=t.id||getBigIntRpcId().toString();await this.toEstablishConnection();try{this.logger.trace({id:r,method:t.method,topic:(s=t.params)==null?void 0:s.topic},"relayer.request - publishing...");const n=`${r}:${((i=t.params)==null?void 0:i.tag)||""}`;this.requestsInFlight.push(n);const a=await this.provider.request(t);return this.requestsInFlight=this.requestsInFlight.filter(c=>c!==n),a}catch(n){throw this.logger.debug(`Failed to Publish Request: ${r}`),n}},this.resetPingTimeout=()=>{if(et())try{clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var t,s,i;this.logger.debug({},"pingTimeout: Connection stalled, terminating..."),(i=(s=(t=this.provider)==null?void 0:t.connection)==null?void 0:s.socket)==null||i.terminate()},this.heartBeatTimeout)}catch(t){this.logger.warn(t,t?.message)}},this.onPayloadHandler=t=>{this.onProviderPayload(t),this.resetPingTimeout()},this.onConnectHandler=()=>{this.logger.warn({},"Relayer connected \u{1F6DC}"),this.startPingTimeout(),this.events.emit(core_dist_index_es_v.connect)},this.onDisconnectHandler=()=>{this.logger.warn({},"Relayer disconnected \u{1F6D1}"),this.requestsInFlight=[],this.onProviderDisconnect()},this.onProviderErrorHandler=t=>{this.logger.fatal(t,`Fatal socket error: ${t?.message}`),this.events.emit(core_dist_index_es_v.error,t),this.logger.fatal("Fatal socket error received, closing transport"),this.transportClose()},this.registerProviderListeners=()=>{this.provider.on(core_dist_index_es_C.payload,this.onPayloadHandler),this.provider.on(core_dist_index_es_C.connect,this.onConnectHandler),this.provider.on(core_dist_index_es_C.disconnect,this.onDisconnectHandler),this.provider.on(core_dist_index_es_C.error,this.onProviderErrorHandler)},this.core=e.core,this.logger=typeof e.logger<"u"&&typeof e.logger!="string"?dist_index_es_E(e.logger,this.name):pino_default()(logger_dist_index_es_k({level:e.logger||index_es_ot})),this.messages=new dist_index_es_Jt(this.logger,e.core),this.subscriber=new index_es_ii(this,this.logger),this.publisher=new index_es_ln(this,this.logger),this.relayUrl=e?.relayUrl||dist_index_es_fe,this.projectId=e.projectId,index_es_Wr()?this.packageName=index_es_Jr():index_es_zr()&&(this.bundleId=index_es_Jr()),this.provider={}}async init(){if(this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),this.initialized=!0,this.subscriber.cached.length>0)try{await this.transportOpen()}catch(e){this.logger.warn(e,e?.message)}}get context(){return index_es_y(this.logger)}get connected(){var e,t,s;return((s=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:s.readyState)===1}get connecting(){var e,t,s;return((s=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:s.readyState)===0}async publish(e,t,s){this.isInitialized(),await this.publisher.publish(e,t,s),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now(),transportType:core_dist_index_es_M.relay})}async subscribe(e,t){var s,i,r;this.isInitialized(),(!(t!=null&&t.transportType)||t?.transportType==="relay")&&await this.toEstablishConnection();const n=typeof((s=t?.internal)==null?void 0:s.throwOnFailedPublish)>"u"?!0:(i=t?.internal)==null?void 0:i.throwOnFailedPublish;let a=((r=this.subscriber.topicMap.get(e))==null?void 0:r[0])||"",c;const h=u=>{u.topic===e&&(this.subscriber.off(index_es_T.created,h),c())};return await Promise.all([new Promise(u=>{c=u,this.subscriber.on(index_es_T.created,h)}),new Promise(async(u,d)=>{a=await this.subscriber.subscribe(e,index_es_ni({internal:{throwOnFailedPublish:n}},t)).catch(y=>{n&&d(y)})||a,u()})]),a}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportDisconnect(){this.provider.disconnect&&(this.hasExperiencedNetworkDisruption||this.connected)?await index_es_ao(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){if(this.connectPromise?(this.logger.debug({},"Waiting for existing connection attempt to resolve..."),await this.connectPromise,this.logger.debug({},"Existing connection attempt resolved")):(this.connectPromise=new Promise(async(t,s)=>{await this.connect(e).then(t).catch(s).finally(()=>{this.connectPromise=void 0})}),await this.connectPromise),!this.connected)throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)}async restartTransport(e){this.logger.debug({},"Restarting transport..."),!this.connectionAttemptInProgress&&(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await Yi())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(e?.length===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const t=e.sort((s,i)=>s.publishedAt-i.publishedAt);this.logger.debug(`Batch of ${t.length} message events sorted`);for(const s of t)try{await this.onMessageEvent(s)}catch(i){this.logger.warn(i,"Error while processing batch message event: "+i?.message)}this.logger.trace(`Batch of ${t.length} message events processed`)}async onLinkMessageEvent(e,t){const{topic:s}=e;if(!t.sessionExists){const i=index_es_ho(cjs.FIVE_MINUTES),r={topic:s,expiry:i,relay:{protocol:"irn"},active:!1};await this.core.pairing.pairings.set(s,r)}this.events.emit(core_dist_index_es_v.message,e),await this.recordMessageEvent(e)}async connect(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;let t=1;for(;t<6;){try{this.logger.debug({},`Connecting to ${this.relayUrl}, attempt: ${t}...`),await this.createProvider(),await new Promise(async(s,i)=>{const r=()=>{i(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(core_dist_index_es_C.disconnect,r),await index_es_ao(new Promise((n,a)=>{this.provider.connect().then(n).catch(a)}),this.connectTimeout,`Socket stalled when trying to connect to ${this.relayUrl}`).catch(n=>{i(n)}).finally(()=>{this.provider.off(core_dist_index_es_C.disconnect,r),clearTimeout(this.reconnectTimeout),this.reconnectTimeout=void 0}),await new Promise(async(n,a)=>{const c=()=>{a(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(core_dist_index_es_C.disconnect,c),await this.subscriber.start().then(n).catch(a).finally(()=>{this.provider.off(core_dist_index_es_C.disconnect,c)})}),this.hasExperiencedNetworkDisruption=!1,s()})}catch(s){await this.subscriber.stop();const i=s;this.logger.warn({},i.message),this.hasExperiencedNetworkDisruption=!0}finally{this.connectionAttemptInProgress=!1}if(this.connected){this.logger.debug({},`Connected to ${this.relayUrl} successfully on attempt: ${t}`);break}await new Promise(s=>setTimeout(s,(0,cjs.toMiliseconds)(t*1))),t++}}startPingTimeout(){var e,t,s,i,r;if(et())try{(t=(e=this.provider)==null?void 0:e.connection)!=null&&t.socket&&((r=(i=(s=this.provider)==null?void 0:s.connection)==null?void 0:i.socket)==null||r.on("ping",()=>{this.resetPingTimeout()})),this.resetPingTimeout()}catch(n){this.logger.warn(n,n?.message)}}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new jsonrpc_provider_dist_index_es_o(new dist_index_es_f(index_es_Zr({sdkVersion:index_es_re,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId,packageName:this.packageName}))),this.registerProviderListeners()}async recordMessageEvent(e){const{topic:t,message:s}=e;await this.messages.set(t,s)}async shouldIgnoreMessageEvent(e){const{topic:t,message:s}=e;if(!s||s.length===0)return this.logger.warn(`Ignoring invalid/empty message: ${s}`),!0;if(!await this.subscriber.isSubscribed(t))return this.logger.warn(`Ignoring message for non-subscribed topic ${t}`),!0;const i=this.messages.has(t,s);return i&&this.logger.warn(`Ignoring duplicate message: ${s}`),i}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),isJsonRpcRequest(e)){if(!e.method.endsWith(dist_index_es_ct))return;const t=e.params,{topic:s,message:i,publishedAt:r,attestation:n}=t.data,a={topic:s,message:i,publishedAt:r,transportType:core_dist_index_es_M.relay,attestation:n};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(index_es_ni({type:"event",event:t.id},a)),this.events.emit(t.id,a),await this.acknowledgePayload(e),await this.onMessageEvent(a)}else isJsonRpcResponse(e)&&this.events.emit(core_dist_index_es_v.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(this.events.emit(core_dist_index_es_v.message,e),await this.recordMessageEvent(e))}async acknowledgePayload(e){const t=formatJsonRpcResult(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(core_dist_index_es_C.payload,this.onPayloadHandler),this.provider.off(core_dist_index_es_C.connect,this.onConnectHandler),this.provider.off(core_dist_index_es_C.disconnect,this.onDisconnectHandler),this.provider.off(core_dist_index_es_C.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await Yi();Xi(async t=>{e!==t&&(e=t,t?await this.transportOpen().catch(s=>this.logger.error(s,s?.message)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))})}async onProviderDisconnect(){await this.subscriber.stop(),clearTimeout(this.pingTimeout),this.events.emit(core_dist_index_es_v.disconnect),this.connectionAttemptInProgress=!1,!this.transportExplicitlyClosed&&(this.reconnectTimeout||this.connectPromise||(this.reconnectTimeout=setTimeout(async()=>{clearTimeout(this.reconnectTimeout),await this.transportOpen().catch(e=>this.logger.error(e,e?.message))},(0,cjs.toMiliseconds)(dist_index_es_ht))))}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){await this.confirmOnlineStateOrThrow(),!this.connected&&await this.transportOpen()}}var dist_index_es_vn=Object.defineProperty,index_es_ai=Object.getOwnPropertySymbols,core_dist_index_es_n=Object.prototype.hasOwnProperty,dist_index_es_En=Object.prototype.propertyIsEnumerable,index_es_ci=(o,e,t)=>e in o?dist_index_es_vn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_hi=(o,e)=>{for(var t in e||(e={}))core_dist_index_es_n.call(e,t)&&index_es_ci(o,t,e[t]);if(index_es_ai)for(var t of index_es_ai(e))dist_index_es_En.call(e,t)&&index_es_ci(o,t,e[t]);return o};class index_es_li extends dist_index_es_p{constructor(e,t,s,i=index_es_A,r=void 0){super(e,t,s,i),this.core=e,this.logger=t,this.name=s,this.map=new Map,this.version=dist_index_es_lt,this.cached=[],this.initialized=!1,this.storagePrefix=index_es_A,this.recentlyDeleted=[],this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(n=>{this.getKey&&n!==null&&!index_es_ae(n)?this.map.set(this.getKey(n),n):Pi(n)?this.map.set(n.id,n):Li(n)&&this.map.set(n.topic,n)}),this.cached=[],this.initialized=!0)},this.set=async(n,a)=>{this.isInitialized(),this.map.has(n)?await this.update(n,a):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:n,value:a}),this.map.set(n,a),await this.persist())},this.get=n=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:n}),this.getData(n)),this.getAll=n=>(this.isInitialized(),n?this.values.filter(a=>Object.keys(n).every(c=>lodash_isequal_default()(a[c],n[c]))):this.values),this.update=async(n,a)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:n,update:a});const c=index_es_hi(index_es_hi({},this.getData(n)),a);this.map.set(n,c),await this.persist()},this.delete=async(n,a)=>{this.isInitialized(),this.map.has(n)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:n,reason:a}),this.map.delete(n),this.addToRecentlyDeleted(n),await this.persist())},this.logger=dist_index_es_E(t,this.name),this.storagePrefix=i,this.getKey=r}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:i}=index_es_te("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(i),new Error(i)}const{message:s}=index_es_te("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:t}=index_es_te("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_ui{constructor(e,t){this.core=e,this.logger=t,this.name=dist_index_es_yt,this.version=dist_index_es_Dt,this.events=new (external_events_default()),this.initialized=!1,this.storagePrefix=index_es_A,this.ignoredPayloadTypes=[index_es_Ie],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))},this.register=({methods:s})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...s])]},this.create=async s=>{this.isInitialized();const i=ni(),r=await this.core.crypto.setSymKey(i),n=index_es_ho(cjs.FIVE_MINUTES),a={protocol:dist_index_es_nt},c={topic:r,expiry:n,relay:a,active:!1,methods:s?.methods},h=wi({protocol:this.core.protocol,version:this.core.version,topic:r,symKey:i,relay:a,expiryTimestamp:n,methods:s?.methods});return this.events.emit(dist_index_es_j.create,c),this.core.expirer.set(r,n),await this.pairings.set(r,c),await this.core.relayer.subscribe(r,{transportType:s?.transportType}),{topic:r,uri:h}},this.pair=async s=>{this.isInitialized();const i=this.core.eventClient.createEvent({properties:{topic:s?.uri,trace:[core_dist_index_es_z.pairing_started]}});this.isValidPair(s,i);const{topic:r,symKey:n,relay:a,expiryTimestamp:c,methods:h}=bi(s.uri);i.props.properties.topic=r,i.addTrace(core_dist_index_es_z.pairing_uri_validation_success),i.addTrace(core_dist_index_es_z.pairing_uri_not_expired);let u;if(this.pairings.keys.includes(r)){if(u=this.pairings.get(r),i.addTrace(core_dist_index_es_z.existing_pairing),u.active)throw i.setError($.active_pairing_already_exists),new Error(`Pairing already exists: ${r}. Please try again with a new connection URI.`);i.addTrace(core_dist_index_es_z.pairing_not_expired)}const d=c||index_es_ho(cjs.FIVE_MINUTES),y={topic:r,relay:a,expiry:d,active:!1,methods:h};this.core.expirer.set(r,d),await this.pairings.set(r,y),i.addTrace(core_dist_index_es_z.store_new_pairing),s.activatePairing&&await this.activate({topic:r}),this.events.emit(dist_index_es_j.create,y),i.addTrace(core_dist_index_es_z.emit_inactive_pairing),this.core.crypto.keychain.has(r)||await this.core.crypto.setSymKey(n,r),i.addTrace(core_dist_index_es_z.subscribing_pairing_topic);try{await this.core.relayer.confirmOnlineStateOrThrow()}catch{i.setError($.no_internet_connection)}try{await this.core.relayer.subscribe(r,{relay:a})}catch(m){throw i.setError($.subscribe_pairing_topic_failure),m}return i.addTrace(core_dist_index_es_z.subscribe_pairing_topic_success),y},this.activate=async({topic:s})=>{this.isInitialized();const i=index_es_ho(cjs.FIVE_MINUTES);this.core.expirer.set(s,i),await this.pairings.update(s,{active:!0,expiry:i})},this.ping=async s=>{this.isInitialized(),await this.isValidPing(s),this.logger.warn("ping() is deprecated and will be removed in the next major release.");const{topic:i}=s;if(this.pairings.keys.includes(i)){const r=await this.sendRequest(i,"wc_pairingPing",{}),{done:n,resolve:a,reject:c}=index_es_co();this.events.once(index_es_go("pairing_ping",r),({error:h})=>{h?c(h):a()}),await n()}},this.updateExpiry=async({topic:s,expiry:i})=>{this.isInitialized(),await this.pairings.update(s,{expiry:i})},this.updateMetadata=async({topic:s,metadata:i})=>{this.isInitialized(),await this.pairings.update(s,{peerMetadata:i})},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async s=>{this.isInitialized(),await this.isValidDisconnect(s);const{topic:i}=s;this.pairings.keys.includes(i)&&(await this.sendRequest(i,"wc_pairingDelete",index_es_de("USER_DISCONNECTED")),await this.deletePairing(i))},this.formatUriFromPairing=s=>{this.isInitialized();const{topic:i,relay:r,expiry:n,methods:a}=s,c=this.core.crypto.keychain.get(i);return wi({protocol:this.core.protocol,version:this.core.version,topic:i,symKey:c,relay:r,expiryTimestamp:n,methods:a})},this.sendRequest=async(s,i,r)=>{const n=formatJsonRpcRequest(i,r),a=await this.core.crypto.encode(s,n),c=index_es_V[i].req;return this.core.history.set(s,n),this.core.relayer.publish(s,a,c),n.id},this.sendResult=async(s,i,r)=>{const n=formatJsonRpcResult(s,r),a=await this.core.crypto.encode(i,n),c=await this.core.history.get(i,s),h=index_es_V[c.request.method].res;await this.core.relayer.publish(i,a,h),await this.core.history.resolve(n)},this.sendError=async(s,i,r)=>{const n=formatJsonRpcError(s,r),a=await this.core.crypto.encode(i,n),c=await this.core.history.get(i,s),h=index_es_V[c.request.method]?index_es_V[c.request.method].res:index_es_V.unregistered_method.res;await this.core.relayer.publish(i,a,h),await this.core.history.resolve(n)},this.deletePairing=async(s,i)=>{await this.core.relayer.unsubscribe(s),await Promise.all([this.pairings.delete(s,index_es_de("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(s),i?Promise.resolve():this.core.expirer.del(s)])},this.cleanup=async()=>{const s=this.pairings.getAll().filter(i=>index_es_po(i.expiry));await Promise.all(s.map(i=>this.deletePairing(i.topic)))},this.onRelayEventRequest=s=>{const{topic:i,payload:r}=s;switch(r.method){case"wc_pairingPing":return this.onPairingPingRequest(i,r);case"wc_pairingDelete":return this.onPairingDeleteRequest(i,r);default:return this.onUnknownRpcMethodRequest(i,r)}},this.onRelayEventResponse=async s=>{const{topic:i,payload:r}=s,n=(await this.core.history.get(i,r.id)).request.method;switch(n){case"wc_pairingPing":return this.onPairingPingResponse(i,r);default:return this.onUnknownRpcMethodResponse(n)}},this.onPairingPingRequest=async(s,i)=>{const{id:r}=i;try{this.isValidPing({topic:s}),await this.sendResult(r,s,!0),this.events.emit(dist_index_es_j.ping,{id:r,topic:s})}catch(n){await this.sendError(r,s,n),this.logger.error(n)}},this.onPairingPingResponse=(s,i)=>{const{id:r}=i;setTimeout(()=>{isJsonRpcResult(i)?this.events.emit(index_es_go("pairing_ping",r),{}):isJsonRpcError(i)&&this.events.emit(index_es_go("pairing_ping",r),{error:i.error})},500)},this.onPairingDeleteRequest=async(s,i)=>{const{id:r}=i;try{this.isValidDisconnect({topic:s}),await this.deletePairing(s),this.events.emit(dist_index_es_j.delete,{id:r,topic:s})}catch(n){await this.sendError(r,s,n),this.logger.error(n)}},this.onUnknownRpcMethodRequest=async(s,i)=>{const{id:r,method:n}=i;try{if(this.registeredMethods.includes(n))return;const a=index_es_de("WC_METHOD_UNSUPPORTED",n);await this.sendError(r,s,a),this.logger.error(a)}catch(a){await this.sendError(r,s,a),this.logger.error(a)}},this.onUnknownRpcMethodResponse=s=>{this.registeredMethods.includes(s)||this.logger.error(index_es_de("WC_METHOD_UNSUPPORTED",s))},this.isValidPair=(s,i)=>{var r;if(!Di(s)){const{message:a}=index_es_te("MISSING_OR_INVALID",`pair() params: ${s}`);throw i.setError($.malformed_pairing_uri),new Error(a)}if(!Ri(s.uri)){const{message:a}=index_es_te("MISSING_OR_INVALID",`pair() uri: ${s.uri}`);throw i.setError($.malformed_pairing_uri),new Error(a)}const n=bi(s?.uri);if(!((r=n?.relay)!=null&&r.protocol)){const{message:a}=index_es_te("MISSING_OR_INVALID","pair() uri#relay-protocol");throw i.setError($.malformed_pairing_uri),new Error(a)}if(!(n!=null&&n.symKey)){const{message:a}=index_es_te("MISSING_OR_INVALID","pair() uri#symKey");throw i.setError($.malformed_pairing_uri),new Error(a)}if(n!=null&&n.expiryTimestamp&&(0,cjs.toMiliseconds)(n?.expiryTimestamp)<Date.now()){i.setError($.pairing_expired);const{message:a}=index_es_te("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(a)}},this.isValidPing=async s=>{if(!Di(s)){const{message:r}=index_es_te("MISSING_OR_INVALID",`ping() params: ${s}`);throw new Error(r)}const{topic:i}=s;await this.isValidPairingTopic(i)},this.isValidDisconnect=async s=>{if(!Di(s)){const{message:r}=index_es_te("MISSING_OR_INVALID",`disconnect() params: ${s}`);throw new Error(r)}const{topic:i}=s;await this.isValidPairingTopic(i)},this.isValidPairingTopic=async s=>{if(!index_es_q(s,!1)){const{message:i}=index_es_te("MISSING_OR_INVALID",`pairing topic should be a string: ${s}`);throw new Error(i)}if(!this.pairings.keys.includes(s)){const{message:i}=index_es_te("NO_MATCHING_KEY",`pairing topic doesn't exist: ${s}`);throw new Error(i)}if(index_es_po(this.pairings.get(s).expiry)){await this.deletePairing(s);const{message:i}=index_es_te("EXPIRED",`pairing topic: ${s}`);throw new Error(i)}},this.core=e,this.logger=dist_index_es_E(t,this.name),this.pairings=new index_es_li(this.core,this.logger,this.name,this.storagePrefix)}get context(){return index_es_y(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(core_dist_index_es_v.message,async e=>{const{topic:t,message:s,transportType:i}=e;if(!this.pairings.keys.includes(t)||i===core_dist_index_es_M.link_mode||this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))return;const r=await this.core.crypto.decode(t,s);try{isJsonRpcRequest(r)?(this.core.history.set(t,r),this.onRelayEventRequest({topic:t,payload:r})):isJsonRpcResponse(r)&&(await this.core.history.resolve(r),await this.onRelayEventResponse({topic:t,payload:r}),this.core.history.delete(t,r.id))}catch(n){this.logger.error(n)}})}registerExpirerEvents(){this.core.expirer.on(core_dist_index_es_x.expired,async e=>{const{topic:t}=index_es_lo(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(dist_index_es_j.expire,{topic:t}))})}}class index_es_di extends dist_index_es_h{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.records=new Map,this.events=new external_events_.EventEmitter,this.name=index_es_mt,this.version=dist_index_es_bt,this.cached=[],this.initialized=!1,this.storagePrefix=index_es_A,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(s=>this.records.set(s.id,s)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.set=(s,i,r)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:s,request:i,chainId:r}),this.records.has(i.id))return;const n={id:i.id,topic:s,request:{method:i.method,params:i.params||null},chainId:r,expiry:index_es_ho(cjs.THIRTY_DAYS)};this.records.set(n.id,n),this.persist(),this.events.emit(index_es_R.created,n)},this.resolve=async s=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:s}),!this.records.has(s.id))return;const i=await this.getRecord(s.id);typeof i.response>"u"&&(i.response=isJsonRpcError(s)?{error:s.error}:{result:s.result},this.records.set(i.id,i),this.persist(),this.events.emit(index_es_R.updated,i))},this.get=async(s,i)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:s,id:i}),await this.getRecord(i)),this.delete=(s,i)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:i}),this.values.forEach(r=>{if(r.topic===s){if(typeof i<"u"&&r.id!==i)return;this.records.delete(r.id),this.events.emit(index_es_R.deleted,r)}}),this.persist()},this.exists=async(s,i)=>(this.isInitialized(),this.records.has(i)?(await this.getRecord(i)).topic===s:!1),this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(t=>{if(typeof t.response<"u")return;const s={topic:t.topic,request:formatJsonRpcRequest(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(s)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:s}=index_es_te("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(s)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(index_es_R.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:t}=index_es_te("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(index_es_R.created,e=>{const t=index_es_R.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(index_es_R.updated,e=>{const t=index_es_R.updated;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(index_es_R.deleted,e=>{const t=index_es_R.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.core.heartbeat.on(r.pulse,()=>{this.cleanup()})}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(t=>{(0,cjs.toMiliseconds)(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(index_es_R.deleted,t,!1),e=!0)}),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_pi extends types_dist_index_es_x{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.expirations=new Map,this.events=new external_events_.EventEmitter,this.name=dist_index_es_ft,this.version=dist_index_es_vt,this.cached=[],this.initialized=!1,this.storagePrefix=index_es_A,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(s=>this.expirations.set(s.target,s)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.has=s=>{try{const i=this.formatTarget(s);return typeof this.getExpiration(i)<"u"}catch{return!1}},this.set=(s,i)=>{this.isInitialized();const r=this.formatTarget(s),n={target:r,expiry:i};this.expirations.set(r,n),this.checkExpiry(r,n),this.events.emit(core_dist_index_es_x.created,{target:r,expiration:n})},this.get=s=>{this.isInitialized();const i=this.formatTarget(s);return this.getExpiration(i)},this.del=s=>{if(this.isInitialized(),this.has(s)){const i=this.formatTarget(s),r=this.getExpiration(i);this.expirations.delete(i),this.events.emit(core_dist_index_es_x.deleted,{target:i,expiration:r})}},this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return index_es_uo(e);if(typeof e=="number")return index_es_fo(e);const{message:t}=index_es_te("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(core_dist_index_es_x.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:t}=index_es_te("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:s}=index_es_te("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(s),new Error(s)}return t}checkExpiry(e,t){const{expiry:s}=t;(0,cjs.toMiliseconds)(s)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(core_dist_index_es_x.expired,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,t)=>this.checkExpiry(t,e))}registerEventListeners(){this.core.heartbeat.on(r.pulse,()=>this.checkExpirations()),this.events.on(core_dist_index_es_x.created,e=>{const t=core_dist_index_es_x.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(core_dist_index_es_x.expired,e=>{const t=core_dist_index_es_x.expired;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(core_dist_index_es_x.deleted,e=>{const t=core_dist_index_es_x.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(e)}}}class gi extends dist_index_es_y{constructor(e,t,s){super(e,t,s),this.core=e,this.logger=t,this.store=s,this.name=dist_index_es_t,this.verifyUrlV3=dist_index_es_wt,this.storagePrefix=index_es_A,this.version=dist_index_es_De,this.init=async()=>{var i;this.isDevEnv||(this.publicKey=await this.store.getItem(this.storeKey),this.publicKey&&(0,cjs.toMiliseconds)((i=this.publicKey)==null?void 0:i.expiresAt)<Date.now()&&(this.logger.debug("verify v2 public key expired"),await this.removePublicKey()))},this.register=async i=>{if(!index_es_Ae()||this.isDevEnv)return;const r=window.location.origin,{id:n,decryptedId:a}=i,c=`${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r}&id=${n}&decryptedId=${a}`;try{const h=(0,dist_cjs.getDocument)(),u=this.startAbortTimer(cjs.ONE_SECOND*5),d=await new Promise((y,m)=>{const l=()=>{window.removeEventListener("message",w),h.body.removeChild(g),m("attestation aborted")};this.abortController.signal.addEventListener("abort",l);const g=h.createElement("iframe");g.src=c,g.style.display="none",g.addEventListener("error",l,{signal:this.abortController.signal});const w=b=>{if(b.data&&typeof b.data=="string")try{const D=JSON.parse(b.data);if(D.type==="verify_attestation"){if(sn(D.attestation).payload.id!==n)return;clearInterval(u),h.body.removeChild(g),this.abortController.signal.removeEventListener("abort",l),window.removeEventListener("message",w),y(D.attestation===null?"":D.attestation)}}catch(D){this.logger.warn(D)}};h.body.appendChild(g),window.addEventListener("message",w,{signal:this.abortController.signal})});return this.logger.debug("jwt attestation",d),d}catch(h){this.logger.warn(h)}return""},this.resolve=async i=>{if(this.isDevEnv)return"";const{attestationId:r,hash:n,encryptedId:a}=i;if(r===""){this.logger.debug("resolve: attestationId is empty, skipping");return}if(r){if(sn(r).payload.id!==a)return;const h=await this.isValidJwtAttestation(r);if(h){if(!h.isVerified){this.logger.warn("resolve: jwt attestation: origin url not verified");return}return h}}if(!n)return;const c=this.getVerifyUrl(i?.verifyUrl);return this.fetchAttestation(n,c)},this.fetchAttestation=async(i,r)=>{this.logger.debug(`resolving attestation: ${i} from url: ${r}`);const n=this.startAbortTimer(cjs.ONE_SECOND*5),a=await fetch(`${r}/attestation/${i}?v2Supported=true`,{signal:this.abortController.signal});return clearTimeout(n),a.status===200?await a.json():void 0},this.getVerifyUrl=i=>{let r=i||X;return dist_index_es_It.includes(r)||(this.logger.info(`verify url: ${r}, not included in trusted list, assigning default: ${X}`),r=X),r},this.fetchPublicKey=async()=>{try{this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);const i=this.startAbortTimer(cjs.FIVE_SECONDS),r=await fetch(`${this.verifyUrlV3}/public-key`,{signal:this.abortController.signal});return clearTimeout(i),await r.json()}catch(i){this.logger.warn(i)}},this.persistPublicKey=async i=>{this.logger.debug("persisting public key to local storage",i),await this.store.setItem(this.storeKey,i),this.publicKey=i},this.removePublicKey=async()=>{this.logger.debug("removing verify v2 public key from storage"),await this.store.removeItem(this.storeKey),this.publicKey=void 0},this.isValidJwtAttestation=async i=>{const r=await this.getPublicKey();try{if(r)return this.validateAttestation(i,r)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}const n=await this.fetchAndPersistPublicKey();try{if(n)return this.validateAttestation(i,n)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}},this.getPublicKey=async()=>this.publicKey?this.publicKey:await this.fetchAndPersistPublicKey(),this.fetchAndPersistPublicKey=async()=>{if(this.fetchPromise)return await this.fetchPromise,this.publicKey;this.fetchPromise=new Promise(async r=>{const n=await this.fetchPublicKey();n&&(await this.persistPublicKey(n),r(n))});const i=await this.fetchPromise;return this.fetchPromise=void 0,i},this.validateAttestation=(i,r)=>{const n=index_es_gi(i,r.publicKey),a={hasExpired:(0,cjs.toMiliseconds)(n.exp)<Date.now(),payload:n};if(a.hasExpired)throw this.logger.warn("resolve: jwt attestation expired"),new Error("JWT attestation expired");return{origin:a.payload.origin,isScam:a.payload.isScam,isVerified:a.payload.isVerified}},this.logger=dist_index_es_E(t,this.name),this.abortController=new AbortController,this.isDevEnv=index_es_Eo(),this.init()}get storeKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//verify:public:key"}get context(){return index_es_y(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),(0,cjs.toMiliseconds)(e))}}class index_es_yi extends index_es_v{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.context=dist_index_es_Tt,this.registerDeviceToken=async s=>{const{clientId:i,token:r,notificationType:n,enableEncrypted:a=!1}=s,c=`${index_es_Ct}/${this.projectId}/clients`;await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:i,type:n,token:r,always_raw:a})})},this.logger=dist_index_es_E(t,this.context)}}var index_es_wn=Object.defineProperty,index_es_Di=Object.getOwnPropertySymbols,dist_index_es_In=Object.prototype.hasOwnProperty,dist_index_es_Tn=Object.prototype.propertyIsEnumerable,index_es_mi=(o,e,t)=>e in o?index_es_wn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,dist_index_es_Q=(o,e)=>{for(var t in e||(e={}))dist_index_es_In.call(e,t)&&index_es_mi(o,t,e[t]);if(index_es_Di)for(var t of index_es_Di(e))dist_index_es_Tn.call(e,t)&&index_es_mi(o,t,e[t]);return o};class index_es_bi extends types_dist_index_es_C{constructor(e,t,s=!0){super(e,t,s),this.core=e,this.logger=t,this.context=dist_index_es_St,this.storagePrefix=index_es_A,this.storageVersion=dist_index_es_Pt,this.events=new Map,this.shouldPersist=!1,this.init=async()=>{if(!index_es_Eo())try{const i={eventId:index_es_wo(),timestamp:Date.now(),domain:this.getAppDomain(),props:{event:"INIT",type:"",properties:{client_id:await this.core.crypto.getClientId(),user_agent:index_es_Yt(this.core.relayer.protocol,this.core.relayer.version,index_es_re)}}};await this.sendEvent([i])}catch(i){this.logger.warn(i)}},this.createEvent=i=>{const{event:r="ERROR",type:n="",properties:{topic:a,trace:c}}=i,h=index_es_wo(),u=this.core.projectId||"",d=Date.now(),y=dist_index_es_Q({eventId:h,timestamp:d,props:{event:r,type:n,properties:{topic:a,trace:c}},bundleId:u,domain:this.getAppDomain()},this.setMethods(h));return this.telemetryEnabled&&(this.events.set(h,y),this.shouldPersist=!0),y},this.getEvent=i=>{const{eventId:r,topic:n}=i;if(r)return this.events.get(r);const a=Array.from(this.events.values()).find(c=>c.props.properties.topic===n);if(a)return dist_index_es_Q(dist_index_es_Q({},a),this.setMethods(a.eventId))},this.deleteEvent=i=>{const{eventId:r}=i;this.events.delete(r),this.shouldPersist=!0},this.setEventListeners=()=>{this.core.heartbeat.on(r.pulse,async()=>{this.shouldPersist&&await this.persist(),this.events.forEach(i=>{(0,cjs.fromMiliseconds)(Date.now())-(0,cjs.fromMiliseconds)(i.timestamp)>dist_index_es_Rt&&(this.events.delete(i.eventId),this.shouldPersist=!0)})})},this.setMethods=i=>({addTrace:r=>this.addTrace(i,r),setError:r=>this.setError(i,r)}),this.addTrace=(i,r)=>{const n=this.events.get(i);n&&(n.props.properties.trace.push(r),this.events.set(i,n),this.shouldPersist=!0)},this.setError=(i,r)=>{const n=this.events.get(i);n&&(n.props.type=r,n.timestamp=Date.now(),this.events.set(i,n),this.shouldPersist=!0)},this.persist=async()=>{await this.core.storage.setItem(this.storageKey,Array.from(this.events.values())),this.shouldPersist=!1},this.restore=async()=>{try{const i=await this.core.storage.getItem(this.storageKey)||[];if(!i.length)return;i.forEach(r=>{this.events.set(r.eventId,dist_index_es_Q(dist_index_es_Q({},r),this.setMethods(r.eventId)))})}catch(i){this.logger.warn(i)}},this.submit=async()=>{if(!this.telemetryEnabled||this.events.size===0)return;const i=[];for(const[r,n]of this.events)n.props.type&&i.push(n);if(i.length!==0)try{if((await this.sendEvent(i)).ok)for(const r of i)this.events.delete(r.eventId),this.shouldPersist=!0}catch(r){this.logger.warn(r)}},this.sendEvent=async i=>{const r=this.getAppDomain()?"":"&sp=desktop";return await fetch(`${dist_index_es_xt}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${index_es_re}${r}`,{method:"POST",body:JSON.stringify(i)})},this.getAppDomain=()=>index_es_Yr().url,this.logger=dist_index_es_E(t,this.context),this.telemetryEnabled=s,s?this.restore().then(async()=>{await this.submit(),this.setEventListeners()}):this.persist()}get storageKey(){return this.storagePrefix+this.storageVersion+this.core.customStoragePrefix+"//"+this.context}}var dist_index_es_Cn=Object.defineProperty,index_es_fi=Object.getOwnPropertySymbols,dist_index_es_Pn=Object.prototype.hasOwnProperty,dist_index_es_Sn=Object.prototype.propertyIsEnumerable,index_es_vi=(o,e,t)=>e in o?dist_index_es_Cn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,dist_index_es_i=(o,e)=>{for(var t in e||(e={}))dist_index_es_Pn.call(e,t)&&index_es_vi(o,t,e[t]);if(index_es_fi)for(var t of index_es_fi(e))dist_index_es_Sn.call(e,t)&&index_es_vi(o,t,e[t]);return o};class index_es_oe extends types_dist_index_es_n{constructor(e){var t;super(e),this.protocol=index_es_ye,this.version=dist_index_es_De,this.name=dist_index_es_J,this.events=new external_events_.EventEmitter,this.initialized=!1,this.on=(n,a)=>this.events.on(n,a),this.once=(n,a)=>this.events.once(n,a),this.off=(n,a)=>this.events.off(n,a),this.removeListener=(n,a)=>this.events.removeListener(n,a),this.dispatchEnvelope=({topic:n,message:a,sessionExists:c})=>{if(!n||!a)return;const h={topic:n,message:a,publishedAt:Date.now(),transportType:core_dist_index_es_M.link_mode};this.relayer.onLinkMessageEvent(h,{sessionExists:c})},this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||dist_index_es_fe,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const s=logger_dist_index_es_k({level:typeof e?.logger=="string"&&e.logger?e.logger:dist_index_es_Xe.logger,name:dist_index_es_J}),{logger:i,chunkLoggerController:r}=A({opts:s,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=r,(t=this.logChunkController)!=null&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var n,a;(n=this.logChunkController)!=null&&n.downloadLogsBlobInBrowser&&((a=this.logChunkController)==null||a.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=dist_index_es_E(i,this.name),this.heartbeat=new index_es_i,this.crypto=new dist_index_es_Yt(this,this.logger,e?.keychain),this.history=new index_es_di(this,this.logger),this.expirer=new index_es_pi(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new index_es_h(dist_index_es_i(dist_index_es_i({},index_es_We),e?.storageOptions)),this.relayer=new index_es_oi({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new index_es_ui(this,this.logger),this.verify=new gi(this,this.logger,this.storage),this.echoClient=new index_es_yi(this.projectId||"",this.logger),this.linkModeSupportedApps=[],this.eventClient=new index_es_bi(this,this.logger,e?.telemetryEnabled)}static async init(e){const t=new index_es_oe(e);await t.initialize();const s=await t.crypto.getClientId();return await t.storage.setItem(dist_index_es_ut,s),t}get context(){return index_es_y(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return(e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async addLinkModeSupportedApp(e){this.linkModeSupportedApps.includes(e)||(this.linkModeSupportedApps.push(e),await this.storage.setItem(dist_index_es_ve,this.linkModeSupportedApps))}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.linkModeSupportedApps=await this.storage.getItem(dist_index_es_ve)||[],this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}}const dist_index_es_Rn=index_es_oe;
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/sign-client/dist/index.es.js
const dist_index_es_Ce="wc",dist_index_es_xe=2,dist_index_es_Le="client",dist_index_es_ye=`${dist_index_es_Ce}@${dist_index_es_xe}:${dist_index_es_Le}:`,sign_client_dist_index_es_we={name:dist_index_es_Le,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.org"},index_es_cs={session_proposal:"session_proposal",session_update:"session_update",session_extend:"session_extend",session_ping:"session_ping",session_delete:"session_delete",session_expire:"session_expire",session_request:"session_request",session_request_sent:"session_request_sent",session_event:"session_event",proposal_expire:"proposal_expire",session_authenticate:"session_authenticate",session_request_expire:"session_request_expire"},index_es_ls={database:":memory:"},sign_client_dist_index_es_De="WALLETCONNECT_DEEPLINK_CHOICE",index_es_ps={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},index_es_hs="history",index_es_ds="0.3",sign_client_dist_index_es_it="proposal",index_es_us=(/* unused pure expression or super */ null && (Ct)),sign_client_dist_index_es_rt="Proposal expired",sign_client_dist_index_es_nt="session",dist_index_es_H=cjs.SEVEN_DAYS,dist_index_es_ot="engine",sign_client_dist_index_es_v={wc_sessionPropose:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1104},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1106},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1112},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1114},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:cjs.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:cjs.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1119}}},sign_client_dist_index_es_me={min:cjs.FIVE_MINUTES,max:cjs.SEVEN_DAYS},index_es_L={idle:"IDLE",active:"ACTIVE"},dist_index_es_at="request",sign_client_dist_index_es_ct=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],sign_client_dist_index_es_lt="wc",index_es_gs=1.5,dist_index_es_pt="auth",sign_client_dist_index_es_ht="authKeys",sign_client_dist_index_es_dt="pairingTopics",sign_client_dist_index_es_ut="requests",dist_index_es_oe=`${sign_client_dist_index_es_lt}@${1.5}:${dist_index_es_pt}:`,dist_index_es_ae=`${dist_index_es_oe}:PUB_KEY`;var index_es_ys=Object.defineProperty,dist_index_es_ws=Object.defineProperties,index_es_ms=Object.getOwnPropertyDescriptors,sign_client_dist_index_es_gt=Object.getOwnPropertySymbols,index_es_s=Object.prototype.hasOwnProperty,index_es_Es=Object.prototype.propertyIsEnumerable,sign_client_dist_index_es_yt=(q,o,e)=>o in q?index_es_ys(q,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):q[o]=e,dist_index_es_I=(q,o)=>{for(var e in o||(o={}))index_es_s.call(o,e)&&sign_client_dist_index_es_yt(q,e,o[e]);if(sign_client_dist_index_es_gt)for(var e of sign_client_dist_index_es_gt(o))index_es_Es.call(o,e)&&sign_client_dist_index_es_yt(q,e,o[e]);return q},index_es_D=(q,o)=>dist_index_es_ws(q,index_es_ms(o));class dist_index_es_Rs extends dist_index_es_M{constructor(o){super(o),this.name=dist_index_es_ot,this.events=new (external_events_default()),this.initialized=!1,this.requestQueue={state:index_es_L.idle,queue:[]},this.sessionRequestQueue={state:index_es_L.idle,queue:[]},this.requestQueueDelay=cjs.ONE_SECOND,this.expectedPairingMethodMap=new Map,this.recentlyDeletedMap=new Map,this.recentlyDeletedLimit=200,this.relayMessageCache=[],this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(sign_client_dist_index_es_v)}),this.initialized=!0,setTimeout(()=>{this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay)))},this.connect=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const t=index_es_D(dist_index_es_I({},e),{requiredNamespaces:e.requiredNamespaces||{},optionalNamespaces:e.optionalNamespaces||{}});await this.isValidConnect(t);const{pairingTopic:s,requiredNamespaces:i,optionalNamespaces:r,sessionProperties:n,relays:a}=t;let c=s,h,p=!1;try{if(c){const E=this.client.core.pairing.pairings.get(c);this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),p=E.active}}catch(E){throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`),E}if(!c||!p){const{topic:E,uri:S}=await this.client.core.pairing.create();c=E,h=S}if(!c){const{message:E}=index_es_te("NO_MATCHING_KEY",`connect() pairing topic: ${c}`);throw new Error(E)}const d=await this.client.core.crypto.generateKeyPair(),l=sign_client_dist_index_es_v.wc_sessionPropose.req.ttl||cjs.FIVE_MINUTES,w=index_es_ho(l),m=dist_index_es_I({requiredNamespaces:i,optionalNamespaces:r,relays:a??[{protocol:dist_index_es_nt}],proposer:{publicKey:d,metadata:this.client.metadata},expiryTimestamp:w,pairingTopic:c},n&&{sessionProperties:n}),{reject:y,resolve:_,done:R}=index_es_co(l,sign_client_dist_index_es_rt);this.events.once(index_es_go("session_connect"),async({error:E,session:S})=>{if(E)y(E);else if(S){S.self.publicKey=d;const M=index_es_D(dist_index_es_I({},S),{pairingTopic:m.pairingTopic,requiredNamespaces:m.requiredNamespaces,optionalNamespaces:m.optionalNamespaces,transportType:core_dist_index_es_M.relay});await this.client.session.set(S.topic,M),await this.setExpiry(S.topic,S.expiry),c&&await this.client.core.pairing.updateMetadata({topic:c,metadata:S.peer.metadata}),this.cleanupDuplicatePairings(M),_(M)}});const V=await this.sendRequest({topic:c,method:"wc_sessionPropose",params:m,throwOnFailedPublish:!0});return await this.setProposal(V,dist_index_es_I({id:V},m)),{uri:h,approval:R}},this.pair=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(e)}catch(t){throw this.client.logger.error("pair() failed"),t}},this.approve=async e=>{var t,s,i;const r=this.client.core.eventClient.createEvent({properties:{topic:(t=e?.id)==null?void 0:t.toString(),trace:[index_es_xs.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(N){throw r.setError(index_es_Os.no_internet_connection),N}try{await this.isValidProposalId(e?.id)}catch(N){throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),r.setError(index_es_Os.proposal_not_found),N}try{await this.isValidApprove(e)}catch(N){throw this.client.logger.error("approve() -> isValidApprove() failed"),r.setError(index_es_Os.session_approve_namespace_validation_failure),N}const{id:n,relayProtocol:a,namespaces:c,sessionProperties:h,sessionConfig:p}=e,d=this.client.proposal.get(n);this.client.core.eventClient.deleteEvent({eventId:r.eventId});const{pairingTopic:l,proposer:w,requiredNamespaces:m,optionalNamespaces:y}=d;let _=(s=this.client.core.eventClient)==null?void 0:s.getEvent({topic:l});_||(_=(i=this.client.core.eventClient)==null?void 0:i.createEvent({type:index_es_xs.session_approve_started,properties:{topic:l,trace:[index_es_xs.session_approve_started,index_es_xs.session_namespaces_validation_success]}}));const R=await this.client.core.crypto.generateKeyPair(),V=w.publicKey,E=await this.client.core.crypto.generateSharedKey(R,V),S=dist_index_es_I(dist_index_es_I({relay:{protocol:a??"irn"},namespaces:c,controller:{publicKey:R,metadata:this.client.metadata},expiry:index_es_ho(dist_index_es_H)},h&&{sessionProperties:h}),p&&{sessionConfig:p}),M=core_dist_index_es_M.relay;_.addTrace(index_es_xs.subscribing_session_topic);try{await this.client.core.relayer.subscribe(E,{transportType:M})}catch(N){throw _.setError(index_es_Os.subscribe_session_topic_failure),N}_.addTrace(index_es_xs.subscribe_session_topic_success);const W=index_es_D(dist_index_es_I({},S),{topic:E,requiredNamespaces:m,optionalNamespaces:y,pairingTopic:l,acknowledged:!1,self:S.controller,peer:{publicKey:w.publicKey,metadata:w.metadata},controller:R,transportType:core_dist_index_es_M.relay});await this.client.session.set(E,W),_.addTrace(index_es_xs.store_session);try{_.addTrace(index_es_xs.publishing_session_settle),await this.sendRequest({topic:E,method:"wc_sessionSettle",params:S,throwOnFailedPublish:!0}).catch(N=>{throw _?.setError(index_es_Os.session_settle_publish_failure),N}),_.addTrace(index_es_xs.session_settle_publish_success),_.addTrace(index_es_xs.publishing_session_approve),await this.sendResult({id:n,topic:l,result:{relay:{protocol:a??"irn"},responderPublicKey:R},throwOnFailedPublish:!0}).catch(N=>{throw _?.setError(index_es_Os.session_approve_publish_failure),N}),_.addTrace(index_es_xs.session_approve_publish_success)}catch(N){throw this.client.logger.error(N),this.client.session.delete(E,index_es_de("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(E),N}return this.client.core.eventClient.deleteEvent({eventId:_.eventId}),await this.client.core.pairing.updateMetadata({topic:l,metadata:w.metadata}),await this.client.proposal.delete(n,index_es_de("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:l}),await this.setExpiry(E,index_es_ho(dist_index_es_H)),{topic:E,acknowledged:()=>Promise.resolve(this.client.session.get(E))}},this.reject=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(e)}catch(r){throw this.client.logger.error("reject() -> isValidReject() failed"),r}const{id:t,reason:s}=e;let i;try{i=this.client.proposal.get(t).pairingTopic}catch(r){throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`),r}i&&(await this.sendError({id:t,topic:i,error:s,rpcOpts:sign_client_dist_index_es_v.wc_sessionPropose.reject}),await this.client.proposal.delete(t,index_es_de("USER_DISCONNECTED")))},this.update=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(e)}catch(p){throw this.client.logger.error("update() -> isValidUpdate() failed"),p}const{topic:t,namespaces:s}=e,{done:i,resolve:r,reject:n}=index_es_co(),a=payloadId(),c=getBigIntRpcId().toString(),h=this.client.session.get(t).namespaces;return this.events.once(index_es_go("session_update",a),({error:p})=>{p?n(p):r()}),await this.client.session.update(t,{namespaces:s}),await this.sendRequest({topic:t,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:a,relayRpcId:c}).catch(p=>{this.client.logger.error(p),this.client.session.update(t,{namespaces:h}),n(p)}),{acknowledged:i}},this.extend=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(e)}catch(a){throw this.client.logger.error("extend() -> isValidExtend() failed"),a}const{topic:t}=e,s=payloadId(),{done:i,resolve:r,reject:n}=index_es_co();return this.events.once(index_es_go("session_extend",s),({error:a})=>{a?n(a):r()}),await this.setExpiry(t,index_es_ho(dist_index_es_H)),this.sendRequest({topic:t,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(a=>{n(a)}),{acknowledged:i}},this.request=async e=>{this.isInitialized();try{await this.isValidRequest(e)}catch(w){throw this.client.logger.error("request() -> isValidRequest() failed"),w}const{chainId:t,request:s,topic:i,expiry:r=sign_client_dist_index_es_v.wc_sessionRequest.req.ttl}=e,n=this.client.session.get(i);n?.transportType===core_dist_index_es_M.relay&&await this.confirmOnlineStateOrThrow();const a=payloadId(),c=getBigIntRpcId().toString(),{done:h,resolve:p,reject:d}=index_es_co(r,"Request expired. Please try again.");this.events.once(index_es_go("session_request",a),({error:w,result:m})=>{w?d(w):p(m)});const l=this.getAppLinkIfEnabled(n.peer.metadata,n.transportType);return l?(await this.sendRequest({clientRpcId:a,relayRpcId:c,topic:i,method:"wc_sessionRequest",params:{request:index_es_D(dist_index_es_I({},s),{expiryTimestamp:index_es_ho(r)}),chainId:t},expiry:r,throwOnFailedPublish:!0,appLink:l}).catch(w=>d(w)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:t,id:a}),await h()):await Promise.all([new Promise(async w=>{await this.sendRequest({clientRpcId:a,relayRpcId:c,topic:i,method:"wc_sessionRequest",params:{request:index_es_D(dist_index_es_I({},s),{expiryTimestamp:index_es_ho(r)}),chainId:t},expiry:r,throwOnFailedPublish:!0}).catch(m=>d(m)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:t,id:a}),w()}),new Promise(async w=>{var m;if(!((m=n.sessionConfig)!=null&&m.disableDeepLink)){const y=await index_es_mo(this.client.core.storage,sign_client_dist_index_es_De);await index_es_yo({id:a,topic:i,wcDeepLink:y})}w()}),h()]).then(w=>w[2])},this.respond=async e=>{this.isInitialized(),await this.isValidRespond(e);const{topic:t,response:s}=e,{id:i}=s,r=this.client.session.get(t);r.transportType===core_dist_index_es_M.relay&&await this.confirmOnlineStateOrThrow();const n=this.getAppLinkIfEnabled(r.peer.metadata,r.transportType);isJsonRpcResult(s)?await this.sendResult({id:i,topic:t,result:s.result,throwOnFailedPublish:!0,appLink:n}):isJsonRpcError(s)&&await this.sendError({id:i,topic:t,error:s.error,appLink:n}),this.cleanupAfterResponse(e)},this.ping=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(e)}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:t}=e;if(this.client.session.keys.includes(t)){const s=payloadId(),i=getBigIntRpcId().toString(),{done:r,resolve:n,reject:a}=index_es_co();this.events.once(index_es_go("session_ping",s),({error:c})=>{c?a(c):n()}),await Promise.all([this.sendRequest({topic:t,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:i}),r()])}else this.client.core.pairing.pairings.keys.includes(t)&&(this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),await this.client.core.pairing.ping({topic:t}))},this.emit=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(e);const{topic:t,event:s,chainId:i}=e,r=getBigIntRpcId().toString(),n=payloadId();await this.sendRequest({topic:t,method:"wc_sessionEvent",params:{event:s,chainId:i},throwOnFailedPublish:!0,relayRpcId:r,clientRpcId:n})},this.disconnect=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(e);const{topic:t}=e;if(this.client.session.keys.includes(t))await this.sendRequest({topic:t,method:"wc_sessionDelete",params:index_es_de("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:t,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(t))await this.client.core.pairing.disconnect({topic:t});else{const{message:s}=index_es_te("MISMATCHED_TOPIC",`Session or pairing topic not found: ${t}`);throw new Error(s)}},this.find=e=>(this.isInitialized(),this.client.session.getAll().filter(t=>$i(t,e))),this.getPendingSessionRequests=()=>this.client.pendingRequest.getAll(),this.authenticate=async(e,t)=>{var s;this.isInitialized(),this.isValidAuthenticate(e);const i=t&&this.client.core.linkModeSupportedApps.includes(t)&&((s=this.client.metadata.redirect)==null?void 0:s.linkMode),r=i?core_dist_index_es_M.link_mode:core_dist_index_es_M.relay;r===core_dist_index_es_M.relay&&await this.confirmOnlineStateOrThrow();const{chains:n,statement:a="",uri:c,domain:h,nonce:p,type:d,exp:l,nbf:w,methods:m=[],expiry:y}=e,_=[...e.resources||[]],{topic:R,uri:V}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:r});this.client.logger.info({message:"Generated new pairing",pairing:{topic:R,uri:V}});const E=await this.client.core.crypto.generateKeyPair(),S=oi(E);if(await Promise.all([this.client.auth.authKeys.set(dist_index_es_ae,{responseTopic:S,publicKey:E}),this.client.auth.pairingTopics.set(S,{topic:S,pairingTopic:R})]),await this.client.core.relayer.subscribe(S,{transportType:r}),this.client.logger.info(`sending request to new pairing topic: ${R}`),m.length>0){const{namespace:O}=index_es_Ye(n[0]);let T=index_es_ts(O,"request",m);index_es_Me(_)&&(T=ns(T,_.pop())),_.push(T)}const M=y&&y>sign_client_dist_index_es_v.wc_sessionAuthenticate.req.ttl?y:sign_client_dist_index_es_v.wc_sessionAuthenticate.req.ttl,W={authPayload:{type:d??"caip122",chains:n,statement:a,aud:c,domain:h,version:"1",nonce:p,iat:new Date().toISOString(),exp:l,nbf:w,resources:_},requester:{publicKey:E,metadata:this.client.metadata},expiryTimestamp:index_es_ho(M)},N={eip155:{chains:n,methods:[...new Set(["personal_sign",...m])],events:["chainChanged","accountsChanged"]}},Ve={requiredNamespaces:{},optionalNamespaces:N,relays:[{protocol:"irn"}],pairingTopic:R,proposer:{publicKey:E,metadata:this.client.metadata},expiryTimestamp:index_es_ho(sign_client_dist_index_es_v.wc_sessionPropose.req.ttl)},{done:mt,resolve:Me,reject:Ee}=index_es_co(M,"Request expired"),ce=async({error:O,session:T})=>{if(this.events.off(index_es_go("session_request",G),Re),O)Ee(O);else if(T){T.self.publicKey=E,await this.client.session.set(T.topic,T),await this.setExpiry(T.topic,T.expiry),R&&await this.client.core.pairing.updateMetadata({topic:R,metadata:T.peer.metadata});const le=this.client.session.get(T.topic);await this.deleteProposal(Z),Me({session:le})}},Re=async O=>{var T,le,ke;if(await this.deletePendingAuthRequest(G,{message:"fulfilled",code:0}),O.error){const te=index_es_de("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return O.error.code===te.code?void 0:(this.events.off(index_es_go("session_connect"),ce),Ee(O.error.message))}await this.deleteProposal(Z),this.events.off(index_es_go("session_connect"),ce);const{cacaos:$e,responder:j}=O.result,Ie=[],Ke=[];for(const te of $e){await index_es_Yo({cacao:te,projectId:this.client.core.projectId})||(this.client.logger.error(te,"Signature verification failed"),Ee(index_es_de("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:fe}=te,ve=index_es_Me(fe.resources),Ue=[index_es_On(fe.iss)],_t=index_es_ut(fe.iss);if(ve){const qe=rs(ve),Et=os(ve);Ie.push(...qe),Ue.push(...Et)}for(const qe of Ue)Ke.push(`${qe}:${_t}`)}const ee=await this.client.core.crypto.generateSharedKey(E,j.publicKey);let pe;Ie.length>0&&(pe={topic:ee,acknowledged:!0,self:{publicKey:E,metadata:this.client.metadata},peer:j,controller:j.publicKey,expiry:index_es_ho(dist_index_es_H),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:R,namespaces:Ti([...new Set(Ie)],[...new Set(Ke)]),transportType:r},await this.client.core.relayer.subscribe(ee,{transportType:r}),await this.client.session.set(ee,pe),R&&await this.client.core.pairing.updateMetadata({topic:R,metadata:j.metadata}),pe=this.client.session.get(ee)),(T=this.client.metadata.redirect)!=null&&T.linkMode&&(le=j.metadata.redirect)!=null&&le.linkMode&&(ke=j.metadata.redirect)!=null&&ke.universal&&t&&(this.client.core.addLinkModeSupportedApp(j.metadata.redirect.universal),this.client.session.update(ee,{transportType:core_dist_index_es_M.link_mode})),Me({auths:$e,session:pe})},G=payloadId(),Z=payloadId();this.events.once(index_es_go("session_connect"),ce),this.events.once(index_es_go("session_request",G),Re);let Se;try{if(i){const O=formatJsonRpcRequest("wc_sessionAuthenticate",W,G);this.client.core.history.set(R,O);const T=await this.client.core.crypto.encode("",O,{type:index_es_e,encoding:Qs});Se=Ei(t,R,T)}else await Promise.all([this.sendRequest({topic:R,method:"wc_sessionAuthenticate",params:W,expiry:e.expiry,throwOnFailedPublish:!0,clientRpcId:G}),this.sendRequest({topic:R,method:"wc_sessionPropose",params:Ve,expiry:sign_client_dist_index_es_v.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:Z})])}catch(O){throw this.events.off(index_es_go("session_connect"),ce),this.events.off(index_es_go("session_request",G),Re),O}return await this.setProposal(Z,dist_index_es_I({id:Z},Ve)),await this.setAuthRequest(G,{request:index_es_D(dist_index_es_I({},W),{verifyContext:{}}),pairingTopic:R,transportType:r}),{uri:Se??V,response:mt}},this.approveSessionAuthenticate=async e=>{const{id:t,auths:s}=e,i=this.client.core.eventClient.createEvent({properties:{topic:t.toString(),trace:[index_es_As.authenticated_session_approve_started]}});try{this.isInitialized()}catch(y){throw i.setError(index_es_Ns.no_internet_connection),y}const r=this.getPendingAuthRequest(t);if(!r)throw i.setError(index_es_Ns.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${t}`);const n=r.transportType||core_dist_index_es_M.relay;n===core_dist_index_es_M.relay&&await this.confirmOnlineStateOrThrow();const a=r.requester.publicKey,c=await this.client.core.crypto.generateKeyPair(),h=oi(a),p={type:index_es_Ie,receiverPublicKey:a,senderPublicKey:c},d=[],l=[];for(const y of s){if(!await index_es_Yo({cacao:y,projectId:this.client.core.projectId})){i.setError(index_es_Ns.invalid_cacao);const S=index_es_de("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:t,topic:h,error:S,encodeOpts:p}),new Error(S.message)}i.addTrace(index_es_As.cacaos_verified);const{p:_}=y,R=index_es_Me(_.resources),V=[index_es_On(_.iss)],E=index_es_ut(_.iss);if(R){const S=rs(R),M=os(R);d.push(...S),V.push(...M)}for(const S of V)l.push(`${S}:${E}`)}const w=await this.client.core.crypto.generateSharedKey(c,a);i.addTrace(index_es_As.create_authenticated_session_topic);let m;if(d?.length>0){m={topic:w,acknowledged:!0,self:{publicKey:c,metadata:this.client.metadata},peer:{publicKey:a,metadata:r.requester.metadata},controller:a,expiry:index_es_ho(dist_index_es_H),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:r.pairingTopic,namespaces:Ti([...new Set(d)],[...new Set(l)]),transportType:n},i.addTrace(index_es_As.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(w,{transportType:n})}catch(y){throw i.setError(index_es_Ns.subscribe_authenticated_session_topic_failure),y}i.addTrace(index_es_As.subscribe_authenticated_session_topic_success),await this.client.session.set(w,m),i.addTrace(index_es_As.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:r.pairingTopic,metadata:r.requester.metadata})}i.addTrace(index_es_As.publishing_authenticated_session_approve);try{await this.sendResult({topic:h,id:t,result:{cacaos:s,responder:{publicKey:c,metadata:this.client.metadata}},encodeOpts:p,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(r.requester.metadata,n)})}catch(y){throw i.setError(index_es_Ns.authenticated_session_approve_publish_failure),y}return await this.client.auth.requests.delete(t,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:r.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:i.eventId}),{session:m}},this.rejectSessionAuthenticate=async e=>{this.isInitialized();const{id:t,reason:s}=e,i=this.getPendingAuthRequest(t);if(!i)throw new Error(`Could not find pending auth request with id ${t}`);i.transportType===core_dist_index_es_M.relay&&await this.confirmOnlineStateOrThrow();const r=i.requester.publicKey,n=await this.client.core.crypto.generateKeyPair(),a=oi(r),c={type:index_es_Ie,receiverPublicKey:r,senderPublicKey:n};await this.sendError({id:t,topic:a,error:s,encodeOpts:c,rpcOpts:sign_client_dist_index_es_v.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(i.requester.metadata,i.transportType)}),await this.client.auth.requests.delete(t,{message:"rejected",code:0}),await this.client.proposal.delete(t,index_es_de("USER_DISCONNECTED"))},this.formatAuthMessage=e=>{this.isInitialized();const{request:t,iss:s}=e;return index_es_In(t,s)},this.processRelayMessageCache=()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const e=this.relayMessageCache.shift();e&&await this.onRelayMessage(e)}catch(e){this.client.logger.error(e)}},50)},this.cleanupDuplicatePairings=async e=>{if(e.pairingTopic)try{const t=this.client.core.pairing.pairings.get(e.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(i=>{var r,n;return((r=i.peerMetadata)==null?void 0:r.url)&&((n=i.peerMetadata)==null?void 0:n.url)===e.peer.metadata.url&&i.topic&&i.topic!==t.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(i=>this.client.core.pairing.disconnect({topic:i.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(t){this.client.logger.error(t)}},this.deleteSession=async e=>{var t;const{topic:s,expirerHasDeleted:i=!1,emitEvent:r=!0,id:n=0}=e,{self:a}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,index_es_de("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(a.publicKey)&&await this.client.core.crypto.deleteKeyPair(a.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),i||this.client.core.expirer.del(s),this.client.core.storage.removeItem(sign_client_dist_index_es_De).catch(c=>this.client.logger.warn(c)),this.getPendingSessionRequests().forEach(c=>{c.topic===s&&this.deletePendingSessionRequest(c.id,index_es_de("USER_DISCONNECTED"))}),s===((t=this.sessionRequestQueue.queue[0])==null?void 0:t.topic)&&(this.sessionRequestQueue.state=index_es_L.idle),r&&this.client.events.emit("session_delete",{id:n,topic:s})},this.deleteProposal=async(e,t)=>{if(t)try{const s=this.client.proposal.get(e),i=this.client.core.eventClient.getEvent({topic:s.pairingTopic});i?.setError(index_es_Os.proposal_expired)}catch{}await Promise.all([this.client.proposal.delete(e,index_es_de("USER_DISCONNECTED")),t?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"proposal")},this.deletePendingSessionRequest=async(e,t,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(e,t),s?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(i=>i.id!==e),s&&(this.sessionRequestQueue.state=index_es_L.idle,this.client.events.emit("session_request_expire",{id:e}))},this.deletePendingAuthRequest=async(e,t,s=!1)=>{await Promise.all([this.client.auth.requests.delete(e,t),s?Promise.resolve():this.client.core.expirer.del(e)])},this.setExpiry=async(e,t)=>{this.client.session.keys.includes(e)&&(this.client.core.expirer.set(e,t),await this.client.session.update(e,{expiry:t}))},this.setProposal=async(e,t)=>{this.client.core.expirer.set(e,index_es_ho(sign_client_dist_index_es_v.wc_sessionPropose.req.ttl)),await this.client.proposal.set(e,t)},this.setAuthRequest=async(e,t)=>{const{request:s,pairingTopic:i,transportType:r=core_dist_index_es_M.relay}=t;this.client.core.expirer.set(e,s.expiryTimestamp),await this.client.auth.requests.set(e,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:e,pairingTopic:i,verifyContext:s.verifyContext,transportType:r})},this.setPendingSessionRequest=async e=>{const{id:t,topic:s,params:i,verifyContext:r}=e,n=i.request.expiryTimestamp||index_es_ho(sign_client_dist_index_es_v.wc_sessionRequest.req.ttl);this.client.core.expirer.set(t,n),await this.client.pendingRequest.set(t,{id:t,topic:s,params:i,verifyContext:r})},this.sendRequest=async e=>{const{topic:t,method:s,params:i,expiry:r,relayRpcId:n,clientRpcId:a,throwOnFailedPublish:c,appLink:h}=e,p=formatJsonRpcRequest(s,i,a);let d;const l=!!h;try{const y=l?Qs:At;d=await this.client.core.crypto.encode(t,p,{encoding:y})}catch(y){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`),y}let w;if(sign_client_dist_index_es_ct.includes(s)){const y=si(JSON.stringify(p)),_=si(d);w=await this.client.core.verify.register({id:_,decryptedId:y})}const m=sign_client_dist_index_es_v[s].req;if(m.attestation=w,r&&(m.ttl=r),n&&(m.id=n),this.client.core.history.set(t,p),l){const y=Ei(h,t,d);await global.Linking.openURL(y,this.client.name)}else{const y=sign_client_dist_index_es_v[s].req;r&&(y.ttl=r),n&&(y.id=n),c?(y.internal=index_es_D(dist_index_es_I({},y.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(t,d,y)):this.client.core.relayer.publish(t,d,y).catch(_=>this.client.logger.error(_))}return p.id},this.sendResult=async e=>{const{id:t,topic:s,result:i,throwOnFailedPublish:r,encodeOpts:n,appLink:a}=e,c=formatJsonRpcResult(t,i);let h;const p=a&&typeof(global==null?void 0:global.Linking)<"u";try{const l=p?Qs:At;h=await this.client.core.crypto.encode(s,c,index_es_D(dist_index_es_I({},n||{}),{encoding:l}))}catch(l){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),l}let d;try{d=await this.client.core.history.get(s,t)}catch(l){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`),l}if(p){const l=Ei(a,s,h);await global.Linking.openURL(l,this.client.name)}else{const l=sign_client_dist_index_es_v[d.request.method].res;r?(l.internal=index_es_D(dist_index_es_I({},l.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,h,l)):this.client.core.relayer.publish(s,h,l).catch(w=>this.client.logger.error(w))}await this.client.core.history.resolve(c)},this.sendError=async e=>{const{id:t,topic:s,error:i,encodeOpts:r,rpcOpts:n,appLink:a}=e,c=formatJsonRpcError(t,i);let h;const p=a&&typeof(global==null?void 0:global.Linking)<"u";try{const l=p?Qs:At;h=await this.client.core.crypto.encode(s,c,index_es_D(dist_index_es_I({},r||{}),{encoding:l}))}catch(l){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),l}let d;try{d=await this.client.core.history.get(s,t)}catch(l){throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`),l}if(p){const l=Ei(a,s,h);await global.Linking.openURL(l,this.client.name)}else{const l=n||sign_client_dist_index_es_v[d.request.method].res;this.client.core.relayer.publish(s,h,l)}await this.client.core.history.resolve(c)},this.cleanup=async()=>{const e=[],t=[];this.client.session.getAll().forEach(s=>{let i=!1;index_es_po(s.expiry)&&(i=!0),this.client.core.crypto.keychain.has(s.topic)||(i=!0),i&&e.push(s.topic)}),this.client.proposal.getAll().forEach(s=>{index_es_po(s.expiryTimestamp)&&t.push(s.id)}),await Promise.all([...e.map(s=>this.deleteSession({topic:s})),...t.map(s=>this.deleteProposal(s))])},this.onRelayEventRequest=async e=>{this.requestQueue.queue.push(e),await this.processRequestsQueue()},this.processRequestsQueue=async()=>{if(this.requestQueue.state===index_es_L.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=index_es_L.active;const e=this.requestQueue.queue.shift();if(e)try{await this.processRequest(e)}catch(t){this.client.logger.warn(t)}}this.requestQueue.state=index_es_L.idle},this.processRequest=async e=>{const{topic:t,payload:s,attestation:i,transportType:r,encryptedId:n}=e,a=s.method;if(!this.shouldIgnorePairingRequest({topic:t,requestMethod:a}))switch(a){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:t,payload:s,attestation:i,encryptedId:n});case"wc_sessionSettle":return await this.onSessionSettleRequest(t,s);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(t,s);case"wc_sessionExtend":return await this.onSessionExtendRequest(t,s);case"wc_sessionPing":return await this.onSessionPingRequest(t,s);case"wc_sessionDelete":return await this.onSessionDeleteRequest(t,s);case"wc_sessionRequest":return await this.onSessionRequest({topic:t,payload:s,attestation:i,encryptedId:n,transportType:r});case"wc_sessionEvent":return await this.onSessionEventRequest(t,s);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:t,payload:s,attestation:i,encryptedId:n,transportType:r});default:return this.client.logger.info(`Unsupported request method ${a}`)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:s,transportType:i}=e,r=(await this.client.core.history.get(t,s.id)).request.method;switch(r){case"wc_sessionPropose":return this.onSessionProposeResponse(t,s,i);case"wc_sessionSettle":return this.onSessionSettleResponse(t,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(t,s);case"wc_sessionExtend":return this.onSessionExtendResponse(t,s);case"wc_sessionPing":return this.onSessionPingResponse(t,s);case"wc_sessionRequest":return this.onSessionRequestResponse(t,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(t,s);default:return this.client.logger.info(`Unsupported response method ${r}`)}},this.onRelayEventUnknownPayload=e=>{const{topic:t}=e,{message:s}=index_es_te("MISSING_OR_INVALID",`Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)},this.shouldIgnorePairingRequest=e=>{const{topic:t,requestMethod:s}=e,i=this.expectedPairingMethodMap.get(t);return!i||i.includes(s)?!1:!!(i.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)},this.onSessionProposeRequest=async e=>{const{topic:t,payload:s,attestation:i,encryptedId:r}=e,{params:n,id:a}=s;try{const c=this.client.core.eventClient.getEvent({topic:t});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),c?.setError($.proposal_listener_not_found)),this.isValidConnect(dist_index_es_I({},s.params));const h=n.expiryTimestamp||index_es_ho(sign_client_dist_index_es_v.wc_sessionPropose.req.ttl),p=dist_index_es_I({id:a,pairingTopic:t,expiryTimestamp:h},n);await this.setProposal(a,p);const d=await this.getVerifyContext({attestationId:i,hash:si(JSON.stringify(s)),encryptedId:r,metadata:p.proposer.metadata});c?.addTrace(core_dist_index_es_z.emit_session_proposal),this.client.events.emit("session_proposal",{id:a,params:p,verifyContext:d})}catch(c){await this.sendError({id:a,topic:t,error:c,rpcOpts:sign_client_dist_index_es_v.wc_sessionPropose.autoReject}),this.client.logger.error(c)}},this.onSessionProposeResponse=async(e,t,s)=>{const{id:i}=t;if(isJsonRpcResult(t)){const{result:r}=t;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:r});const n=this.client.proposal.get(i);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:n});const a=n.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:a});const c=r.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:c});const h=await this.client.core.crypto.generateSharedKey(a,c);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:h});const p=await this.client.core.relayer.subscribe(h,{transportType:s});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:p}),await this.client.core.pairing.activate({topic:e})}else if(isJsonRpcError(t)){await this.client.proposal.delete(i,index_es_de("USER_DISCONNECTED"));const r=index_es_go("session_connect");if(this.events.listenerCount(r)===0)throw new Error(`emitting ${r} without any listeners, 954`);this.events.emit(index_es_go("session_connect"),{error:t.error})}},this.onSessionSettleRequest=async(e,t)=>{const{id:s,params:i}=t;try{this.isValidSessionSettleRequest(i);const{relay:r,controller:n,expiry:a,namespaces:c,sessionProperties:h,sessionConfig:p}=t.params,d=index_es_D(dist_index_es_I(dist_index_es_I({topic:e,relay:r,expiry:a,namespaces:c,acknowledged:!0,pairingTopic:"",requiredNamespaces:{},optionalNamespaces:{},controller:n.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:n.publicKey,metadata:n.metadata}},h&&{sessionProperties:h}),p&&{sessionConfig:p}),{transportType:core_dist_index_es_M.relay}),l=index_es_go("session_connect");if(this.events.listenerCount(l)===0)throw new Error(`emitting ${l} without any listeners 997`);this.events.emit(index_es_go("session_connect"),{session:d}),await this.sendResult({id:t.id,topic:e,result:!0,throwOnFailedPublish:!0})}catch(r){await this.sendError({id:s,topic:e,error:r}),this.client.logger.error(r)}},this.onSessionSettleResponse=async(e,t)=>{const{id:s}=t;isJsonRpcResult(t)?(await this.client.session.update(e,{acknowledged:!0}),this.events.emit(index_es_go("session_approve",s),{})):isJsonRpcError(t)&&(await this.client.session.delete(e,index_es_de("USER_DISCONNECTED")),this.events.emit(index_es_go("session_approve",s),{error:t.error}))},this.onSessionUpdateRequest=async(e,t)=>{const{params:s,id:i}=t;try{const r=`${e}_session_update`,n=Zi.get(r);if(n&&this.isRequestOutOfSync(n,i)){this.client.logger.warn(`Discarding out of sync request - ${i}`),this.sendError({id:i,topic:e,error:index_es_de("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(dist_index_es_I({topic:e},s));try{Zi.set(r,i),await this.client.session.update(e,{namespaces:s.namespaces}),await this.sendResult({id:i,topic:e,result:!0,throwOnFailedPublish:!0})}catch(a){throw Zi.delete(r),a}this.client.events.emit("session_update",{id:i,topic:e,params:s})}catch(r){await this.sendError({id:i,topic:e,error:r}),this.client.logger.error(r)}},this.isRequestOutOfSync=(e,t)=>t.toString().slice(0,-3)<e.toString().slice(0,-3),this.onSessionUpdateResponse=(e,t)=>{const{id:s}=t,i=index_es_go("session_update",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(t)?this.events.emit(index_es_go("session_update",s),{}):isJsonRpcError(t)&&this.events.emit(index_es_go("session_update",s),{error:t.error})},this.onSessionExtendRequest=async(e,t)=>{const{id:s}=t;try{this.isValidExtend({topic:e}),await this.setExpiry(e,index_es_ho(dist_index_es_H)),await this.sendResult({id:s,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:s,topic:e})}catch(i){await this.sendError({id:s,topic:e,error:i}),this.client.logger.error(i)}},this.onSessionExtendResponse=(e,t)=>{const{id:s}=t,i=index_es_go("session_extend",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(t)?this.events.emit(index_es_go("session_extend",s),{}):isJsonRpcError(t)&&this.events.emit(index_es_go("session_extend",s),{error:t.error})},this.onSessionPingRequest=async(e,t)=>{const{id:s}=t;try{this.isValidPing({topic:e}),await this.sendResult({id:s,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:e})}catch(i){await this.sendError({id:s,topic:e,error:i}),this.client.logger.error(i)}},this.onSessionPingResponse=(e,t)=>{const{id:s}=t,i=index_es_go("session_ping",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);setTimeout(()=>{isJsonRpcResult(t)?this.events.emit(index_es_go("session_ping",s),{}):isJsonRpcError(t)&&this.events.emit(index_es_go("session_ping",s),{error:t.error})},500)},this.onSessionDeleteRequest=async(e,t)=>{const{id:s}=t;try{this.isValidDisconnect({topic:e,reason:t.params}),Promise.all([new Promise(i=>{this.client.core.relayer.once(core_dist_index_es_v.publish,async()=>{i(await this.deleteSession({topic:e,id:s}))})}),this.sendResult({id:s,topic:e,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:e,error:index_es_de("USER_DISCONNECTED")})]).catch(i=>this.client.logger.error(i))}catch(i){this.client.logger.error(i)}},this.onSessionRequest=async e=>{var t,s,i;const{topic:r,payload:n,attestation:a,encryptedId:c,transportType:h}=e,{id:p,params:d}=n;try{await this.isValidRequest(dist_index_es_I({topic:r},d));const l=this.client.session.get(r),w=await this.getVerifyContext({attestationId:a,hash:si(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest",d,p))),encryptedId:c,metadata:l.peer.metadata,transportType:h}),m={id:p,topic:r,params:d,verifyContext:w};await this.setPendingSessionRequest(m),h===core_dist_index_es_M.link_mode&&(t=l.peer.metadata.redirect)!=null&&t.universal&&this.client.core.addLinkModeSupportedApp((s=l.peer.metadata.redirect)==null?void 0:s.universal),(i=this.client.signConfig)!=null&&i.disableRequestQueue?this.emitSessionRequest(m):(this.addSessionRequestToSessionRequestQueue(m),this.processSessionRequestQueue())}catch(l){await this.sendError({id:p,topic:r,error:l}),this.client.logger.error(l)}},this.onSessionRequestResponse=(e,t)=>{const{id:s}=t,i=index_es_go("session_request",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(t)?this.events.emit(index_es_go("session_request",s),{result:t.result}):isJsonRpcError(t)&&this.events.emit(index_es_go("session_request",s),{error:t.error})},this.onSessionEventRequest=async(e,t)=>{const{id:s,params:i}=t;try{const r=`${e}_session_event_${i.event.name}`,n=Zi.get(r);if(n&&this.isRequestOutOfSync(n,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(dist_index_es_I({topic:e},i)),this.client.events.emit("session_event",{id:s,topic:e,params:i}),Zi.set(r,s)}catch(r){await this.sendError({id:s,topic:e,error:r}),this.client.logger.error(r)}},this.onSessionAuthenticateResponse=(e,t)=>{const{id:s}=t;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:e,payload:t}),isJsonRpcResult(t)?this.events.emit(index_es_go("session_request",s),{result:t.result}):isJsonRpcError(t)&&this.events.emit(index_es_go("session_request",s),{error:t.error})},this.onSessionAuthenticateRequest=async e=>{var t;const{topic:s,payload:i,attestation:r,encryptedId:n,transportType:a}=e;try{const{requester:c,authPayload:h,expiryTimestamp:p}=i.params,d=await this.getVerifyContext({attestationId:r,hash:si(JSON.stringify(i)),encryptedId:n,metadata:c.metadata,transportType:a}),l={requester:c,pairingTopic:s,id:i.id,authPayload:h,verifyContext:d,expiryTimestamp:p};await this.setAuthRequest(i.id,{request:l,pairingTopic:s,transportType:a}),a===core_dist_index_es_M.link_mode&&(t=c.metadata.redirect)!=null&&t.universal&&this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:s,params:i.params,id:i.id,verifyContext:d})}catch(c){this.client.logger.error(c);const h=i.params.requester.publicKey,p=await this.client.core.crypto.generateKeyPair(),d=this.getAppLinkIfEnabled(i.params.requester.metadata,a),l={type:index_es_Ie,receiverPublicKey:h,senderPublicKey:p};await this.sendError({id:i.id,topic:s,error:c,encodeOpts:l,rpcOpts:sign_client_dist_index_es_v.wc_sessionAuthenticate.autoReject,appLink:d})}},this.addSessionRequestToSessionRequestQueue=e=>{this.sessionRequestQueue.queue.push(e)},this.cleanupAfterResponse=e=>{this.deletePendingSessionRequest(e.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=index_es_L.idle,this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay))},this.cleanupPendingSentRequestsForTopic=({topic:e,error:t})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(i=>i.topic===e&&i.request.method==="wc_sessionRequest").forEach(i=>{const r=i.request.id,n=index_es_go("session_request",r);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);this.events.emit(index_es_go("session_request",i.request.id),{error:t})})},this.processSessionRequestQueue=()=>{if(this.sessionRequestQueue.state===index_es_L.active){this.client.logger.info("session request queue is already active.");return}const e=this.sessionRequestQueue.queue[0];if(!e){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=index_es_L.active,this.emitSessionRequest(e)}catch(t){this.client.logger.error(t)}},this.emitSessionRequest=e=>{this.client.events.emit("session_request",e)},this.onPairingCreated=e=>{if(e.methods&&this.expectedPairingMethodMap.set(e.topic,e.methods),e.active)return;const t=this.client.proposal.getAll().find(s=>s.pairingTopic===e.topic);t&&this.onSessionProposeRequest({topic:e.topic,payload:formatJsonRpcRequest("wc_sessionPropose",{requiredNamespaces:t.requiredNamespaces,optionalNamespaces:t.optionalNamespaces,relays:t.relays,proposer:t.proposer,sessionProperties:t.sessionProperties},t.id)})},this.isValidConnect=async e=>{if(!Di(e)){const{message:a}=index_es_te("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(e)}`);throw new Error(a)}const{pairingTopic:t,requiredNamespaces:s,optionalNamespaces:i,sessionProperties:r,relays:n}=e;if(index_es_ae(t)||await this.isValidPairingTopic(t),!Ci(n,!0)){const{message:a}=index_es_te("MISSING_OR_INVALID",`connect() relays: ${n}`);throw new Error(a)}!index_es_ae(s)&&index_es_qe(s)!==0&&this.validateNamespaces(s,"requiredNamespaces"),!index_es_ae(i)&&index_es_qe(i)!==0&&this.validateNamespaces(i,"optionalNamespaces"),index_es_ae(r)||this.validateSessionProps(r,"sessionProperties")},this.validateNamespaces=(e,t)=>{const s=ji(e,"connect()",t);if(s)throw new Error(s.message)},this.isValidApprove=async e=>{if(!Di(e))throw new Error(index_es_te("MISSING_OR_INVALID",`approve() params: ${e}`).message);const{id:t,namespaces:s,relayProtocol:i,sessionProperties:r}=e;this.checkRecentlyDeleted(t),await this.isValidProposalId(t);const n=this.client.proposal.get(t),a=index_es_Ir(s,"approve()");if(a)throw new Error(a.message);const c=index_es_Nr(n.requiredNamespaces,s,"approve()");if(c)throw new Error(c.message);if(!index_es_q(i,!0)){const{message:h}=index_es_te("MISSING_OR_INVALID",`approve() relayProtocol: ${i}`);throw new Error(h)}index_es_ae(r)||this.validateSessionProps(r,"sessionProperties")},this.isValidReject=async e=>{if(!Di(e)){const{message:i}=index_es_te("MISSING_OR_INVALID",`reject() params: ${e}`);throw new Error(i)}const{id:t,reason:s}=e;if(this.checkRecentlyDeleted(t),await this.isValidProposalId(t),!Mi(s)){const{message:i}=index_es_te("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(i)}},this.isValidSessionSettleRequest=e=>{if(!Di(e)){const{message:c}=index_es_te("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${e}`);throw new Error(c)}const{relay:t,controller:s,namespaces:i,expiry:r}=e;if(!index_es_Ar(t)){const{message:c}=index_es_te("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(c)}const n=Bi(s,"onSessionSettleRequest()");if(n)throw new Error(n.message);const a=index_es_Ir(i,"onSessionSettleRequest()");if(a)throw new Error(a.message);if(index_es_po(r)){const{message:c}=index_es_te("EXPIRED","onSessionSettleRequest()");throw new Error(c)}},this.isValidUpdate=async e=>{if(!Di(e)){const{message:a}=index_es_te("MISSING_OR_INVALID",`update() params: ${e}`);throw new Error(a)}const{topic:t,namespaces:s}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const i=this.client.session.get(t),r=index_es_Ir(s,"update()");if(r)throw new Error(r.message);const n=index_es_Nr(i.requiredNamespaces,s,"update()");if(n)throw new Error(n.message)},this.isValidExtend=async e=>{if(!Di(e)){const{message:s}=index_es_te("MISSING_OR_INVALID",`extend() params: ${e}`);throw new Error(s)}const{topic:t}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t)},this.isValidRequest=async e=>{if(!Di(e)){const{message:a}=index_es_te("MISSING_OR_INVALID",`request() params: ${e}`);throw new Error(a)}const{topic:t,request:s,chainId:i,expiry:r}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const{namespaces:n}=this.client.session.get(t);if(!Fi(n,i)){const{message:a}=index_es_te("MISSING_OR_INVALID",`request() chainId: ${i}`);throw new Error(a)}if(!Vi(s)){const{message:a}=index_es_te("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(a)}if(!qi(n,i,s.method)){const{message:a}=index_es_te("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(a)}if(r&&!Ji(r,sign_client_dist_index_es_me)){const{message:a}=index_es_te("MISSING_OR_INVALID",`request() expiry: ${r}. Expiry must be a number (in seconds) between ${sign_client_dist_index_es_me.min} and ${sign_client_dist_index_es_me.max}`);throw new Error(a)}},this.isValidRespond=async e=>{var t;if(!Di(e)){const{message:r}=index_es_te("MISSING_OR_INVALID",`respond() params: ${e}`);throw new Error(r)}const{topic:s,response:i}=e;try{await this.isValidSessionTopic(s)}catch(r){throw(t=e?.response)!=null&&t.id&&this.cleanupAfterResponse(e),r}if(!Hi(i)){const{message:r}=index_es_te("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(r)}},this.isValidPing=async e=>{if(!Di(e)){const{message:s}=index_es_te("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(s)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidEmit=async e=>{if(!Di(e)){const{message:n}=index_es_te("MISSING_OR_INVALID",`emit() params: ${e}`);throw new Error(n)}const{topic:t,event:s,chainId:i}=e;await this.isValidSessionTopic(t);const{namespaces:r}=this.client.session.get(t);if(!Fi(r,i)){const{message:n}=index_es_te("MISSING_OR_INVALID",`emit() chainId: ${i}`);throw new Error(n)}if(!Ki(s)){const{message:n}=index_es_te("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}if(!Gi(r,i,s.name)){const{message:n}=index_es_te("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}},this.isValidDisconnect=async e=>{if(!Di(e)){const{message:s}=index_es_te("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(s)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidAuthenticate=e=>{const{chains:t,uri:s,domain:i,nonce:r}=e;if(!Array.isArray(t)||t.length===0)throw new Error("chains is required and must be a non-empty array");if(!index_es_q(s,!1))throw new Error("uri is required parameter");if(!index_es_q(i,!1))throw new Error("domain is required parameter");if(!index_es_q(r,!1))throw new Error("nonce is required parameter");if([...new Set(t.map(a=>index_es_Ye(a).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:n}=index_es_Ye(t[0]);if(n!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")},this.getVerifyContext=async e=>{const{attestationId:t,hash:s,encryptedId:i,metadata:r,transportType:n}=e,a={verified:{verifyUrl:r.verifyUrl||X,validation:"UNKNOWN",origin:r.url||""}};try{if(n===core_dist_index_es_M.link_mode){const h=this.getAppLinkIfEnabled(r,n);return a.verified.validation=h&&new URL(h).origin===new URL(r.url).origin?"VALID":"INVALID",a}const c=await this.client.core.verify.resolve({attestationId:t,hash:s,encryptedId:i,verifyUrl:r.verifyUrl});c&&(a.verified.origin=c.origin,a.verified.isScam=c.isScam,a.verified.validation=c.origin===new URL(r.url).origin?"VALID":"INVALID")}catch(c){this.client.logger.warn(c)}return this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`),a},this.validateSessionProps=(e,t)=>{Object.values(e).forEach(s=>{if(!index_es_q(s,!1)){const{message:i}=index_es_te("MISSING_OR_INVALID",`${t} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);throw new Error(i)}})},this.getPendingAuthRequest=e=>{const t=this.client.auth.requests.get(e);return typeof t=="object"?t:void 0},this.addToRecentlyDeleted=(e,t)=>{if(this.recentlyDeletedMap.set(e,t),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const i=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(s++>=i)break;this.recentlyDeletedMap.delete(r)}}},this.checkRecentlyDeleted=e=>{const t=this.recentlyDeletedMap.get(e);if(t){const{message:s}=index_es_te("MISSING_OR_INVALID",`Record was recently deleted - ${t}: ${e}`);throw new Error(s)}},this.isLinkModeEnabled=(e,t)=>{var s,i,r,n,a,c,h,p,d;return!e||t!==core_dist_index_es_M.link_mode?!1:((i=(s=this.client.metadata)==null?void 0:s.redirect)==null?void 0:i.linkMode)===!0&&((n=(r=this.client.metadata)==null?void 0:r.redirect)==null?void 0:n.universal)!==void 0&&((c=(a=this.client.metadata)==null?void 0:a.redirect)==null?void 0:c.universal)!==""&&((h=e?.redirect)==null?void 0:h.universal)!==void 0&&((p=e?.redirect)==null?void 0:p.universal)!==""&&((d=e?.redirect)==null?void 0:d.linkMode)===!0&&this.client.core.linkModeSupportedApps.includes(e.redirect.universal)&&typeof(global==null?void 0:global.Linking)<"u"},this.getAppLinkIfEnabled=(e,t)=>{var s;return this.isLinkModeEnabled(e,t)?(s=e?.redirect)==null?void 0:s.universal:void 0},this.handleLinkModeMessage=({url:e})=>{if(!e||!e.includes("wc_ev")||!e.includes("topic"))return;const t=index_es_bo(e,"topic")||"",s=decodeURIComponent(index_es_bo(e,"wc_ev")||""),i=this.client.session.keys.includes(t);i&&this.client.session.update(t,{transportType:core_dist_index_es_M.link_mode}),this.client.core.dispatchEnvelope({topic:t,message:s,sessionExists:i})},this.registerLinkModeListeners=async()=>{var e;if(index_es_Eo()||ne()&&(e=this.client.metadata.redirect)!=null&&e.linkMode){const t=global==null?void 0:global.Linking;if(typeof t<"u"){t.addEventListener("url",this.handleLinkModeMessage,this.client.name);const s=await t.getInitialURL();s&&setTimeout(()=>{this.handleLinkModeMessage({url:s})},50)}}}}isInitialized(){if(!this.initialized){const{message:o}=index_es_te("NOT_INITIALIZED",this.name);throw new Error(o)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(core_dist_index_es_v.message,o=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(o):this.onRelayMessage(o)})}async onRelayMessage(o){const{topic:e,message:t,attestation:s,transportType:i}=o,{publicKey:r}=this.client.auth.authKeys.keys.includes(dist_index_es_ae)?this.client.auth.authKeys.get(dist_index_es_ae):{responseTopic:void 0,publicKey:void 0},n=await this.client.core.crypto.decode(e,t,{receiverPublicKey:r,encoding:i===core_dist_index_es_M.link_mode?Qs:At});try{isJsonRpcRequest(n)?(this.client.core.history.set(e,n),this.onRelayEventRequest({topic:e,payload:n,attestation:s,transportType:i,encryptedId:si(t)})):isJsonRpcResponse(n)?(await this.client.core.history.resolve(n),await this.onRelayEventResponse({topic:e,payload:n,transportType:i}),this.client.core.history.delete(e,n.id)):this.onRelayEventUnknownPayload({topic:e,payload:n,transportType:i})}catch(a){this.client.logger.error(a)}}registerExpirerEvents(){this.client.core.expirer.on(core_dist_index_es_x.expired,async o=>{const{topic:e,id:t}=index_es_lo(o.target);if(t&&this.client.pendingRequest.keys.includes(t))return await this.deletePendingSessionRequest(t,index_es_te("EXPIRED"),!0);if(t&&this.client.auth.requests.keys.includes(t))return await this.deletePendingAuthRequest(t,index_es_te("EXPIRED"),!0);e?this.client.session.keys.includes(e)&&(await this.deleteSession({topic:e,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:e})):t&&(await this.deleteProposal(t,!0),this.client.events.emit("proposal_expire",{id:t}))})}registerPairingEvents(){this.client.core.pairing.events.on(dist_index_es_j.create,o=>this.onPairingCreated(o)),this.client.core.pairing.events.on(dist_index_es_j.delete,o=>{this.addToRecentlyDeleted(o.topic,"pairing")})}isValidPairingTopic(o){if(!index_es_q(o,!1)){const{message:e}=index_es_te("MISSING_OR_INVALID",`pairing topic should be a string: ${o}`);throw new Error(e)}if(!this.client.core.pairing.pairings.keys.includes(o)){const{message:e}=index_es_te("NO_MATCHING_KEY",`pairing topic doesn't exist: ${o}`);throw new Error(e)}if(index_es_po(this.client.core.pairing.pairings.get(o).expiry)){const{message:e}=index_es_te("EXPIRED",`pairing topic: ${o}`);throw new Error(e)}}async isValidSessionTopic(o){if(!index_es_q(o,!1)){const{message:e}=index_es_te("MISSING_OR_INVALID",`session topic should be a string: ${o}`);throw new Error(e)}if(this.checkRecentlyDeleted(o),!this.client.session.keys.includes(o)){const{message:e}=index_es_te("NO_MATCHING_KEY",`session topic doesn't exist: ${o}`);throw new Error(e)}if(index_es_po(this.client.session.get(o).expiry)){await this.deleteSession({topic:o});const{message:e}=index_es_te("EXPIRED",`session topic: ${o}`);throw new Error(e)}if(!this.client.core.crypto.keychain.has(o)){const{message:e}=index_es_te("MISSING_OR_INVALID",`session topic does not exist in keychain: ${o}`);throw await this.deleteSession({topic:o}),new Error(e)}}async isValidSessionOrPairingTopic(o){if(this.checkRecentlyDeleted(o),this.client.session.keys.includes(o))await this.isValidSessionTopic(o);else if(this.client.core.pairing.pairings.keys.includes(o))this.isValidPairingTopic(o);else if(index_es_q(o,!1)){const{message:e}=index_es_te("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${o}`);throw new Error(e)}else{const{message:e}=index_es_te("MISSING_OR_INVALID",`session or pairing topic should be a string: ${o}`);throw new Error(e)}}async isValidProposalId(o){if(!ki(o)){const{message:e}=index_es_te("MISSING_OR_INVALID",`proposal id should be a number: ${o}`);throw new Error(e)}if(!this.client.proposal.keys.includes(o)){const{message:e}=index_es_te("NO_MATCHING_KEY",`proposal id doesn't exist: ${o}`);throw new Error(e)}if(index_es_po(this.client.proposal.get(o).expiryTimestamp)){await this.deleteProposal(o);const{message:e}=index_es_te("EXPIRED",`proposal id: ${o}`);throw new Error(e)}}}class dist_index_es_Ss extends index_es_li{constructor(o,e){super(o,e,sign_client_dist_index_es_it,dist_index_es_ye),this.core=o,this.logger=e}}class sign_client_dist_index_es_wt extends index_es_li{constructor(o,e){super(o,e,sign_client_dist_index_es_nt,dist_index_es_ye),this.core=o,this.logger=e}}class dist_index_es_Is extends index_es_li{constructor(o,e){super(o,e,dist_index_es_at,dist_index_es_ye,t=>t.id),this.core=o,this.logger=e}}class index_es_fs extends index_es_li{constructor(o,e){super(o,e,sign_client_dist_index_es_ht,dist_index_es_oe,()=>dist_index_es_ae),this.core=o,this.logger=e}}class index_es_vs extends index_es_li{constructor(o,e){super(o,e,sign_client_dist_index_es_dt,dist_index_es_oe),this.core=o,this.logger=e}}class dist_index_es_qs extends index_es_li{constructor(o,e){super(o,e,sign_client_dist_index_es_ut,dist_index_es_oe,t=>t.id),this.core=o,this.logger=e}}class dist_index_es_Ts{constructor(o,e){this.core=o,this.logger=e,this.authKeys=new index_es_fs(this.core,this.logger),this.pairingTopics=new index_es_vs(this.core,this.logger),this.requests=new dist_index_es_qs(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}class sign_client_dist_index_es_e extends dist_index_es_S{constructor(o){super(o),this.protocol=dist_index_es_Ce,this.version=dist_index_es_xe,this.name=sign_client_dist_index_es_we.name,this.events=new external_events_.EventEmitter,this.on=(t,s)=>this.events.on(t,s),this.once=(t,s)=>this.events.once(t,s),this.off=(t,s)=>this.events.off(t,s),this.removeListener=(t,s)=>this.events.removeListener(t,s),this.removeAllListeners=t=>this.events.removeAllListeners(t),this.connect=async t=>{try{return await this.engine.connect(t)}catch(s){throw this.logger.error(s.message),s}},this.pair=async t=>{try{return await this.engine.pair(t)}catch(s){throw this.logger.error(s.message),s}},this.approve=async t=>{try{return await this.engine.approve(t)}catch(s){throw this.logger.error(s.message),s}},this.reject=async t=>{try{return await this.engine.reject(t)}catch(s){throw this.logger.error(s.message),s}},this.update=async t=>{try{return await this.engine.update(t)}catch(s){throw this.logger.error(s.message),s}},this.extend=async t=>{try{return await this.engine.extend(t)}catch(s){throw this.logger.error(s.message),s}},this.request=async t=>{try{return await this.engine.request(t)}catch(s){throw this.logger.error(s.message),s}},this.respond=async t=>{try{return await this.engine.respond(t)}catch(s){throw this.logger.error(s.message),s}},this.ping=async t=>{try{return await this.engine.ping(t)}catch(s){throw this.logger.error(s.message),s}},this.emit=async t=>{try{return await this.engine.emit(t)}catch(s){throw this.logger.error(s.message),s}},this.disconnect=async t=>{try{return await this.engine.disconnect(t)}catch(s){throw this.logger.error(s.message),s}},this.find=t=>{try{return this.engine.find(t)}catch(s){throw this.logger.error(s.message),s}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(t){throw this.logger.error(t.message),t}},this.authenticate=async(t,s)=>{try{return await this.engine.authenticate(t,s)}catch(i){throw this.logger.error(i.message),i}},this.formatAuthMessage=t=>{try{return this.engine.formatAuthMessage(t)}catch(s){throw this.logger.error(s.message),s}},this.approveSessionAuthenticate=async t=>{try{return await this.engine.approveSessionAuthenticate(t)}catch(s){throw this.logger.error(s.message),s}},this.rejectSessionAuthenticate=async t=>{try{return await this.engine.rejectSessionAuthenticate(t)}catch(s){throw this.logger.error(s.message),s}},this.name=o?.name||sign_client_dist_index_es_we.name,this.metadata=o?.metadata||index_es_Yr(),this.signConfig=o?.signConfig;const e=typeof o?.logger<"u"&&typeof o?.logger!="string"?o.logger:pino_default()(logger_dist_index_es_k({level:o?.logger||sign_client_dist_index_es_we.logger}));this.core=o?.core||new dist_index_es_Rn(o),this.logger=dist_index_es_E(e,this.name),this.session=new sign_client_dist_index_es_wt(this.core,this.logger),this.proposal=new dist_index_es_Ss(this.core,this.logger),this.pendingRequest=new dist_index_es_Is(this.core,this.logger),this.engine=new dist_index_es_Rs(this),this.auth=new dist_index_es_Ts(this.core,this.logger)}static async init(o){const e=new sign_client_dist_index_es_e(o);return await e.initialize(),e}get context(){return index_es_y(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success"),setTimeout(()=>{this.engine.processRelayMessageCache()},(0,cjs.toMiliseconds)(cjs.ONE_SECOND))}catch(o){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(o.message),o}}}const dist_index_es_Ns=(/* unused pure expression or super */ null && (sign_client_dist_index_es_wt)),dist_index_es_Ps=(/* unused pure expression or super */ null && (sign_client_dist_index_es_e));
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/cross-fetch/dist/node-ponyfill.js
var node_ponyfill = __webpack_require__(515221);
var node_ponyfill_default = /*#__PURE__*/__webpack_require__.n(node_ponyfill);
;// ./node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var dist_index_es_P=Object.defineProperty,jsonrpc_http_connection_dist_index_es_w=Object.defineProperties,jsonrpc_http_connection_dist_index_es_E=Object.getOwnPropertyDescriptors,jsonrpc_http_connection_dist_index_es_c=Object.getOwnPropertySymbols,dist_index_es_L=Object.prototype.hasOwnProperty,dist_index_es_O=Object.prototype.propertyIsEnumerable,jsonrpc_http_connection_dist_index_es_l=(r,t,e)=>t in r?dist_index_es_P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,jsonrpc_http_connection_dist_index_es_p=(r,t)=>{for(var e in t||(t={}))dist_index_es_L.call(t,e)&&jsonrpc_http_connection_dist_index_es_l(r,e,t[e]);if(jsonrpc_http_connection_dist_index_es_c)for(var e of jsonrpc_http_connection_dist_index_es_c(t))dist_index_es_O.call(t,e)&&jsonrpc_http_connection_dist_index_es_l(r,e,t[e]);return r},jsonrpc_http_connection_dist_index_es_v=(r,t)=>jsonrpc_http_connection_dist_index_es_w(r,jsonrpc_http_connection_dist_index_es_E(t));const jsonrpc_http_connection_dist_index_es_j={Accept:"application/json","Content-Type":"application/json"},dist_index_es_T="POST",jsonrpc_http_connection_dist_index_es_d={headers:jsonrpc_http_connection_dist_index_es_j,method:dist_index_es_T},jsonrpc_http_connection_dist_index_es_g=10;class jsonrpc_http_connection_dist_index_es_f{constructor(t,e=!1){if(this.url=t,this.disableProviderPing=e,this.events=new external_events_.EventEmitter,this.isAvailable=!1,this.registering=!1,!isHttpUrl(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t,this.disableProviderPing=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t){this.isAvailable||await this.register();try{const e=safeJsonStringify(t),s=await(await node_ponyfill_default()(this.url,jsonrpc_http_connection_dist_index_es_v(jsonrpc_http_connection_dist_index_es_p({},jsonrpc_http_connection_dist_index_es_d),{body:e}))).json();this.onPayload({data:s})}catch(e){this.onError(t.id,e)}}async register(t=this.url){if(!isHttpUrl(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise((s,i)=>{this.events.once("register_error",n=>{this.resetMaxListeners(),i(n)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return i(new Error("HTTP connection is missing or invalid"));s()})})}this.url=t,this.registering=!0;try{if(!this.disableProviderPing){const e=safeJsonStringify({id:1,jsonrpc:"2.0",method:"test",params:[]});await node_ponyfill_default()(t,jsonrpc_http_connection_dist_index_es_v(jsonrpc_http_connection_dist_index_es_p({},jsonrpc_http_connection_dist_index_es_d),{body:e}))}this.onOpen()}catch(e){const s=this.parseError(e);throw this.events.emit("register_error",s),this.onClose(),s}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(typeof t.data>"u")return;const e=typeof t.data=="string"?safeJsonParse(t.data):t.data;this.events.emit("payload",e)}onError(t,e){const s=this.parseError(e),i=s.message||s.toString(),n=formatJsonRpcError(t,i);this.events.emit("payload",n)}parseError(t,e=this.url){return parseConnectionError(t,e,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>jsonrpc_http_connection_dist_index_es_g&&this.events.setMaxListeners(jsonrpc_http_connection_dist_index_es_g)}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/universal-provider/dist/index.es.js
const dist_index_es_ne="error",universal_provider_dist_index_es_dt="wss://relay.walletconnect.org",universal_provider_dist_index_es_lt="wc",universal_provider_dist_index_es_vt="universal_provider",universal_provider_dist_index_es_ae=`${universal_provider_dist_index_es_lt}@2:${universal_provider_dist_index_es_vt}:`,universal_provider_dist_index_es_oe="https://rpc.walletconnect.org/v1/",universal_provider_dist_index_es_w="generic",universal_provider_dist_index_es_ft=`${universal_provider_dist_index_es_oe}bundler`,universal_provider_dist_index_es_f={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};var universal_provider_dist_index_es_j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dist_index_es_mt(){this.__data__=[],this.size=0}var universal_provider_dist_index_es_gt=dist_index_es_mt;function universal_provider_dist_index_es_Pt(r,e){return r===e||r!==r&&e!==e}var universal_provider_dist_index_es_S=universal_provider_dist_index_es_Pt,universal_provider_dist_index_es_$t=universal_provider_dist_index_es_S;function universal_provider_dist_index_es_bt(r,e){for(var t=r.length;t--;)if(universal_provider_dist_index_es_$t(r[t][0],e))return t;return-1}var dist_index_es_N=universal_provider_dist_index_es_bt,universal_provider_dist_index_es_wt=dist_index_es_N,universal_provider_dist_index_es_t=Array.prototype,dist_index_es_Ct=universal_provider_dist_index_es_t.splice;function universal_provider_dist_index_es_yt(r){var e=this.__data__,t=universal_provider_dist_index_es_wt(e,r);if(t<0)return!1;var s=e.length-1;return t==s?e.pop():dist_index_es_Ct.call(e,t,1),--this.size,!0}var universal_provider_dist_index_es_It=universal_provider_dist_index_es_yt,universal_provider_dist_index_es_Ot=dist_index_es_N;function dist_index_es_At(r){var e=this.__data__,t=universal_provider_dist_index_es_Ot(e,r);return t<0?void 0:e[t][1]}var universal_provider_dist_index_es_Ht=dist_index_es_At,universal_provider_dist_index_es_Et=dist_index_es_N;function dist_index_es_jt(r){return universal_provider_dist_index_es_Et(this.__data__,r)>-1}var universal_provider_dist_index_es_St=dist_index_es_jt,universal_provider_dist_index_es_Nt=dist_index_es_N;function universal_provider_dist_index_es_Tt(r,e){var t=this.__data__,s=universal_provider_dist_index_es_Nt(t,r);return s<0?(++this.size,t.push([r,e])):t[s][1]=e,this}var universal_provider_dist_index_es_Dt=universal_provider_dist_index_es_Tt,universal_provider_dist_index_es_qt=universal_provider_dist_index_es_gt,universal_provider_dist_index_es_Rt=universal_provider_dist_index_es_It,universal_provider_dist_index_es_xt=universal_provider_dist_index_es_Ht,universal_provider_dist_index_es_Lt=universal_provider_dist_index_es_St,universal_provider_dist_index_es_Ut=universal_provider_dist_index_es_Dt;function universal_provider_dist_index_es_(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var s=r[e];this.set(s[0],s[1])}}universal_provider_dist_index_es_.prototype.clear=universal_provider_dist_index_es_qt,universal_provider_dist_index_es_.prototype.delete=universal_provider_dist_index_es_Rt,universal_provider_dist_index_es_.prototype.get=universal_provider_dist_index_es_xt,universal_provider_dist_index_es_.prototype.has=universal_provider_dist_index_es_Lt,universal_provider_dist_index_es_.prototype.set=universal_provider_dist_index_es_Ut;var universal_provider_dist_index_es_T=universal_provider_dist_index_es_,universal_provider_dist_index_es_Mt=universal_provider_dist_index_es_T;function universal_provider_dist_index_es_Ft(){this.__data__=new universal_provider_dist_index_es_Mt,this.size=0}var universal_provider_dist_index_es_Gt=universal_provider_dist_index_es_Ft;function universal_provider_dist_index_es_zt(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}var universal_provider_dist_index_es_kt=universal_provider_dist_index_es_zt;function universal_provider_dist_index_es_Bt(r){return this.__data__.get(r)}var universal_provider_dist_index_es_Vt=universal_provider_dist_index_es_Bt;function universal_provider_dist_index_es_Jt(r){return this.__data__.has(r)}var universal_provider_dist_index_es_Kt=universal_provider_dist_index_es_Jt,universal_provider_dist_index_es_Xt=typeof universal_provider_dist_index_es_j=="object"&&universal_provider_dist_index_es_j&&universal_provider_dist_index_es_j.Object===Object&&universal_provider_dist_index_es_j,index_es_ce=universal_provider_dist_index_es_Xt,universal_provider_dist_index_es_Wt=index_es_ce,universal_provider_dist_index_es_Yt=typeof self=="object"&&self&&self.Object===Object&&self,universal_provider_dist_index_es_Zt=universal_provider_dist_index_es_Wt||universal_provider_dist_index_es_Yt||Function("return this")(),universal_provider_dist_index_es_C=universal_provider_dist_index_es_Zt,universal_provider_dist_index_es_Qt=universal_provider_dist_index_es_C,universal_provider_dist_index_es_er=universal_provider_dist_index_es_Qt.Symbol,index_es_he=universal_provider_dist_index_es_er,index_es_pe=index_es_he,index_es_ue=Object.prototype,universal_provider_dist_index_es_tr=index_es_ue.hasOwnProperty,universal_provider_dist_index_es_rr=index_es_ue.toString,universal_provider_dist_index_es_H=index_es_pe?index_es_pe.toStringTag:void 0;function universal_provider_dist_index_es_sr(r){var e=universal_provider_dist_index_es_tr.call(r,universal_provider_dist_index_es_H),t=r[universal_provider_dist_index_es_H];try{r[universal_provider_dist_index_es_H]=void 0;var s=!0}catch{}var i=universal_provider_dist_index_es_rr.call(r);return s&&(e?r[universal_provider_dist_index_es_H]=t:delete r[universal_provider_dist_index_es_H]),i}var universal_provider_dist_index_es_ir=universal_provider_dist_index_es_sr,universal_provider_dist_index_es_nr=Object.prototype,universal_provider_dist_index_es_ar=universal_provider_dist_index_es_nr.toString;function universal_provider_dist_index_es_or(r){return universal_provider_dist_index_es_ar.call(r)}var universal_provider_dist_index_es_cr=universal_provider_dist_index_es_or,dist_index_es_de=index_es_he,universal_provider_dist_index_es_hr=universal_provider_dist_index_es_ir,universal_provider_dist_index_es_pr=universal_provider_dist_index_es_cr,universal_provider_dist_index_es_ur="[object Null]",universal_provider_dist_index_es_dr="[object Undefined]",dist_index_es_le=dist_index_es_de?dist_index_es_de.toStringTag:void 0;function universal_provider_dist_index_es_lr(r){return r==null?r===void 0?universal_provider_dist_index_es_dr:universal_provider_dist_index_es_ur:dist_index_es_le&&dist_index_es_le in Object(r)?universal_provider_dist_index_es_hr(r):universal_provider_dist_index_es_pr(r)}var dist_index_es_D=universal_provider_dist_index_es_lr;function universal_provider_dist_index_es_vr(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var index_es_$=universal_provider_dist_index_es_vr,universal_provider_dist_index_es_fr=dist_index_es_D,universal_provider_dist_index_es_mr=index_es_$,universal_provider_dist_index_es_gr="[object AsyncFunction]",dist_index_es_Pr="[object Function]",universal_provider_dist_index_es_$r="[object GeneratorFunction]",universal_provider_dist_index_es_br="[object Proxy]";function universal_provider_dist_index_es_wr(r){if(!universal_provider_dist_index_es_mr(r))return!1;var e=universal_provider_dist_index_es_fr(r);return e==dist_index_es_Pr||e==universal_provider_dist_index_es_$r||e==universal_provider_dist_index_es_gr||e==universal_provider_dist_index_es_br}var universal_provider_dist_index_es_z=universal_provider_dist_index_es_wr,universal_provider_dist_index_es_r=universal_provider_dist_index_es_C,dist_index_es_Cr=universal_provider_dist_index_es_r["__core-js_shared__"],universal_provider_dist_index_es_yr=dist_index_es_Cr,universal_provider_dist_index_es_k=universal_provider_dist_index_es_yr,universal_provider_dist_index_es_ve=function(){var r=/[^.]+$/.exec(universal_provider_dist_index_es_k&&universal_provider_dist_index_es_k.keys&&universal_provider_dist_index_es_k.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function universal_provider_dist_index_es_Ir(r){return!!universal_provider_dist_index_es_ve&&universal_provider_dist_index_es_ve in r}var universal_provider_dist_index_es_Or=universal_provider_dist_index_es_Ir,universal_provider_dist_index_es_Ar=Function.prototype,universal_provider_dist_index_es_Hr=universal_provider_dist_index_es_Ar.toString;function universal_provider_dist_index_es_Er(r){if(r!=null){try{return universal_provider_dist_index_es_Hr.call(r)}catch{}try{return r+""}catch{}}return""}var dist_index_es_jr=universal_provider_dist_index_es_Er,universal_provider_dist_index_es_Sr=universal_provider_dist_index_es_z,universal_provider_dist_index_es_Nr=universal_provider_dist_index_es_Or,universal_provider_dist_index_es_Tr=index_es_$,dist_index_es_Dr=dist_index_es_jr,universal_provider_dist_index_es_qr=/[\\^$.*+?()[\]{}|]/g,universal_provider_dist_index_es_Rr=/^\[object .+?Constructor\]$/,universal_provider_dist_index_es_xr=Function.prototype,dist_index_es_Lr=Object.prototype,universal_provider_dist_index_es_Ur=universal_provider_dist_index_es_xr.toString,universal_provider_dist_index_es_Mr=dist_index_es_Lr.hasOwnProperty,universal_provider_dist_index_es_Fr=RegExp("^"+universal_provider_dist_index_es_Ur.call(universal_provider_dist_index_es_Mr).replace(universal_provider_dist_index_es_qr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function universal_provider_dist_index_es_Gr(r){if(!universal_provider_dist_index_es_Tr(r)||universal_provider_dist_index_es_Nr(r))return!1;var e=universal_provider_dist_index_es_Sr(r)?universal_provider_dist_index_es_Fr:universal_provider_dist_index_es_Rr;return e.test(dist_index_es_Dr(r))}var universal_provider_dist_index_es_zr=universal_provider_dist_index_es_Gr;function dist_index_es_kr(r,e){return r?.[e]}var dist_index_es_Br=dist_index_es_kr,universal_provider_dist_index_es_Vr=universal_provider_dist_index_es_zr,universal_provider_dist_index_es_Jr=dist_index_es_Br;function universal_provider_dist_index_es_Kr(r,e){var t=universal_provider_dist_index_es_Jr(r,e);return universal_provider_dist_index_es_Vr(t)?t:void 0}var dist_index_es_B=universal_provider_dist_index_es_Kr,universal_provider_dist_index_es_Xr=dist_index_es_B,universal_provider_dist_index_es_Wr=universal_provider_dist_index_es_C,universal_provider_dist_index_es_Yr=universal_provider_dist_index_es_Xr(universal_provider_dist_index_es_Wr,"Map"),universal_provider_dist_index_es_fe=universal_provider_dist_index_es_Yr,universal_provider_dist_index_es_Zr=dist_index_es_B,universal_provider_dist_index_es_Qr=universal_provider_dist_index_es_Zr(Object,"create"),dist_index_es_q=universal_provider_dist_index_es_Qr,universal_provider_dist_index_es_me=dist_index_es_q;function index_es_es(){this.__data__=universal_provider_dist_index_es_me?universal_provider_dist_index_es_me(null):{},this.size=0}var dist_index_es_ts=index_es_es;function index_es_rs(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var index_es_ss=index_es_rs,index_es_is=dist_index_es_q,index_es_ns="__lodash_hash_undefined__",index_es_as=Object.prototype,index_es_os=index_es_as.hasOwnProperty;function dist_index_es_cs(r){var e=this.__data__;if(index_es_is){var t=e[r];return t===index_es_ns?void 0:t}return index_es_os.call(e,r)?e[r]:void 0}var dist_index_es_hs=dist_index_es_cs,dist_index_es_ps=dist_index_es_q,dist_index_es_us=Object.prototype,dist_index_es_ds=dist_index_es_us.hasOwnProperty;function dist_index_es_ls(r){var e=this.__data__;return dist_index_es_ps?e[r]!==void 0:dist_index_es_ds.call(e,r)}var dist_index_es_vs=dist_index_es_ls,dist_index_es_fs=dist_index_es_q,dist_index_es_ms="__lodash_hash_undefined__";function dist_index_es_gs(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=dist_index_es_fs&&e===void 0?dist_index_es_ms:e,this}var universal_provider_dist_index_es_Ps=dist_index_es_gs,dist_index_es_$s=dist_index_es_ts,index_es_bs=index_es_ss,universal_provider_dist_index_es_ws=dist_index_es_hs,dist_index_es_s=dist_index_es_vs,dist_index_es_Cs=universal_provider_dist_index_es_Ps;function universal_provider_dist_index_es_y(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var s=r[e];this.set(s[0],s[1])}}universal_provider_dist_index_es_y.prototype.clear=dist_index_es_$s,universal_provider_dist_index_es_y.prototype.delete=index_es_bs,universal_provider_dist_index_es_y.prototype.get=universal_provider_dist_index_es_ws,universal_provider_dist_index_es_y.prototype.has=dist_index_es_s,universal_provider_dist_index_es_y.prototype.set=dist_index_es_Cs;var dist_index_es_ys=universal_provider_dist_index_es_y,index_es_ge=dist_index_es_ys,universal_provider_dist_index_es_Is=universal_provider_dist_index_es_T,dist_index_es_Os=universal_provider_dist_index_es_fe;function dist_index_es_As(){this.size=0,this.__data__={hash:new index_es_ge,map:new(dist_index_es_Os||universal_provider_dist_index_es_Is),string:new index_es_ge}}var dist_index_es_Hs=dist_index_es_As;function dist_index_es_Es(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}var dist_index_es_js=dist_index_es_Es,universal_provider_dist_index_es_Ss=dist_index_es_js;function universal_provider_dist_index_es_Ns(r,e){var t=r.__data__;return universal_provider_dist_index_es_Ss(e)?t[typeof e=="string"?"string":"hash"]:t.map}var dist_index_es_R=universal_provider_dist_index_es_Ns,universal_provider_dist_index_es_Ts=dist_index_es_R;function index_es_Ds(r){var e=universal_provider_dist_index_es_Ts(this,r).delete(r);return this.size-=e?1:0,e}var universal_provider_dist_index_es_qs=index_es_Ds,universal_provider_dist_index_es_Rs=dist_index_es_R;function dist_index_es_xs(r){return universal_provider_dist_index_es_Rs(this,r).get(r)}var dist_index_es_Ls=dist_index_es_xs,dist_index_es_Us=dist_index_es_R;function dist_index_es_Ms(r){return dist_index_es_Us(this,r).has(r)}var dist_index_es_Fs=dist_index_es_Ms,dist_index_es_Gs=dist_index_es_R;function dist_index_es_zs(r,e){var t=dist_index_es_Gs(this,r),s=t.size;return t.set(r,e),this.size+=t.size==s?0:1,this}var dist_index_es_ks=dist_index_es_zs,dist_index_es_Bs=dist_index_es_Hs,dist_index_es_Vs=universal_provider_dist_index_es_qs,dist_index_es_Js=dist_index_es_Ls,dist_index_es_Ks=dist_index_es_Fs,dist_index_es_Xs=dist_index_es_ks;function universal_provider_dist_index_es_I(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var s=r[e];this.set(s[0],s[1])}}universal_provider_dist_index_es_I.prototype.clear=dist_index_es_Bs,universal_provider_dist_index_es_I.prototype.delete=dist_index_es_Vs,universal_provider_dist_index_es_I.prototype.get=dist_index_es_Js,universal_provider_dist_index_es_I.prototype.has=dist_index_es_Ks,universal_provider_dist_index_es_I.prototype.set=dist_index_es_Xs;var dist_index_es_Ws=universal_provider_dist_index_es_I,dist_index_es_Ys=universal_provider_dist_index_es_T,dist_index_es_Zs=universal_provider_dist_index_es_fe,dist_index_es_Qs=dist_index_es_Ws,dist_index_es_ei=200;function dist_index_es_ti(r,e){var t=this.__data__;if(t instanceof dist_index_es_Ys){var s=t.__data__;if(!dist_index_es_Zs||s.length<dist_index_es_ei-1)return s.push([r,e]),this.size=++t.size,this;t=this.__data__=new dist_index_es_Qs(s)}return t.set(r,e),this.size=t.size,this}var dist_index_es_ri=dist_index_es_ti,dist_index_es_si=universal_provider_dist_index_es_T,dist_index_es_ii=universal_provider_dist_index_es_Gt,dist_index_es_ni=universal_provider_dist_index_es_kt,dist_index_es_ai=universal_provider_dist_index_es_Vt,dist_index_es_oi=universal_provider_dist_index_es_Kt,dist_index_es_ci=dist_index_es_ri;function universal_provider_dist_index_es_O(r){var e=this.__data__=new dist_index_es_si(r);this.size=e.size}universal_provider_dist_index_es_O.prototype.clear=dist_index_es_ii,universal_provider_dist_index_es_O.prototype.delete=dist_index_es_ni,universal_provider_dist_index_es_O.prototype.get=dist_index_es_ai,universal_provider_dist_index_es_O.prototype.has=dist_index_es_oi,universal_provider_dist_index_es_O.prototype.set=dist_index_es_ci;var dist_index_es_hi=universal_provider_dist_index_es_O,dist_index_es_pi=dist_index_es_B,dist_index_es_ui=function(){try{var r=dist_index_es_pi(Object,"defineProperty");return r({},"",{}),r}catch{}}(),dist_index_es_Pe=dist_index_es_ui,dist_index_es_$e=dist_index_es_Pe;function dist_index_es_di(r,e,t){e=="__proto__"&&dist_index_es_$e?dist_index_es_$e(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var dist_index_es_V=dist_index_es_di,dist_index_es_li=dist_index_es_V,dist_index_es_vi=universal_provider_dist_index_es_S;function dist_index_es_fi(r,e,t){(t!==void 0&&!dist_index_es_vi(r[e],t)||t===void 0&&!(e in r))&&dist_index_es_li(r,e,t)}var universal_provider_dist_index_es_be=dist_index_es_fi;function dist_index_es_mi(r){return function(e,t,s){for(var i=-1,n=Object(e),a=s(e),o=a.length;o--;){var c=a[r?o:++i];if(t(n[c],c,n)===!1)break}return e}}var dist_index_es_gi=dist_index_es_mi,index_es_Pi=dist_index_es_gi,index_es_$i=index_es_Pi(),dist_index_es_bi=index_es_$i,universal_provider_dist_index_es_J={exports:{}};(function(r,e){var t=universal_provider_dist_index_es_C,s=e&&!e.nodeType&&e,i=s&&!0&&r&&!r.nodeType&&r,n=i&&i.exports===s,a=n?t.Buffer:void 0,o=a?a.allocUnsafe:void 0;function c(u,d){if(d)return u.slice();var g=u.length,l=o?o(g):new u.constructor(g);return u.copy(l),l}r.exports=c})(universal_provider_dist_index_es_J,universal_provider_dist_index_es_J.exports);var index_es_wi=universal_provider_dist_index_es_C,universal_provider_dist_index_es_i=index_es_wi.Uint8Array,index_es_Ci=universal_provider_dist_index_es_i,universal_provider_dist_index_es_we=index_es_Ci;function dist_index_es_yi(r){var e=new r.constructor(r.byteLength);return new universal_provider_dist_index_es_we(e).set(new universal_provider_dist_index_es_we(r)),e}var index_es_Ii=dist_index_es_yi,index_es_Oi=index_es_Ii;function index_es_Ai(r,e){var t=e?index_es_Oi(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var index_es_Hi=index_es_Ai;function index_es_Ei(r,e){var t=-1,s=r.length;for(e||(e=Array(s));++t<s;)e[t]=r[t];return e}var index_es_ji=index_es_Ei,index_es_Si=index_es_$,universal_provider_dist_index_es_e=Object.create,index_es_Ni=function(){function r(){}return function(e){if(!index_es_Si(e))return{};if(universal_provider_dist_index_es_e)return universal_provider_dist_index_es_e(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),index_es_Ti=index_es_Ni;function dist_index_es_Di(r,e){return function(t){return r(e(t))}}var index_es_qi=dist_index_es_Di,index_es_Ri=index_es_qi,index_es_xi=index_es_Ri(Object.getPrototypeOf,Object),universal_provider_dist_index_es_Ce=index_es_xi,index_es_Li=Object.prototype;function index_es_Ui(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||index_es_Li;return r===t}var universal_provider_dist_index_es_ye=index_es_Ui,index_es_Mi=index_es_Ti,index_es_Fi=universal_provider_dist_index_es_Ce,index_es_Gi=universal_provider_dist_index_es_ye;function index_es_zi(r){return typeof r.constructor=="function"&&!index_es_Gi(r)?index_es_Mi(index_es_Fi(r)):{}}var index_es_ki=index_es_zi;function index_es_Bi(r){return r!=null&&typeof r=="object"}var universal_provider_dist_index_es_E=index_es_Bi,index_es_Vi=dist_index_es_D,index_es_Ji=universal_provider_dist_index_es_E,index_es_Ki="[object Arguments]";function index_es_Xi(r){return index_es_Ji(r)&&index_es_Vi(r)==index_es_Ki}var index_es_Wi=index_es_Xi,universal_provider_dist_index_es_Ie=index_es_Wi,index_es_Yi=universal_provider_dist_index_es_E,dist_index_es_Oe=Object.prototype,index_es_Zi=dist_index_es_Oe.hasOwnProperty,Qi=dist_index_es_Oe.propertyIsEnumerable,universal_provider_dist_index_es_en=universal_provider_dist_index_es_Ie(function(){return arguments}())?universal_provider_dist_index_es_Ie:function(r){return index_es_Yi(r)&&index_es_Zi.call(r,"callee")&&!Qi.call(r,"callee")},dist_index_es_Ae=universal_provider_dist_index_es_en,universal_provider_dist_index_es_tn=Array.isArray,dist_index_es_He=universal_provider_dist_index_es_tn,universal_provider_dist_index_es_rn=9007199254740991;function universal_provider_dist_index_es_sn(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=universal_provider_dist_index_es_rn}var universal_provider_dist_index_es_Ee=universal_provider_dist_index_es_sn,universal_provider_dist_index_es_nn=universal_provider_dist_index_es_z,dist_index_es_an=universal_provider_dist_index_es_Ee;function universal_provider_dist_index_es_on(r){return r!=null&&dist_index_es_an(r.length)&&!universal_provider_dist_index_es_nn(r)}var dist_index_es_K=universal_provider_dist_index_es_on,dist_index_es_cn=dist_index_es_K,dist_index_es_hn=universal_provider_dist_index_es_E;function dist_index_es_pn(r){return dist_index_es_hn(r)&&dist_index_es_cn(r)}var dist_index_es_un=dist_index_es_pn,universal_provider_dist_index_es_x={exports:{}};function dist_index_es_dn(){return!1}var dist_index_es_ln=dist_index_es_dn;(function(r,e){var t=universal_provider_dist_index_es_C,s=dist_index_es_ln,i=e&&!e.nodeType&&e,n=i&&!0&&r&&!r.nodeType&&r,a=n&&n.exports===i,o=a?t.Buffer:void 0,c=o?o.isBuffer:void 0,u=c||s;r.exports=u})(universal_provider_dist_index_es_x,universal_provider_dist_index_es_x.exports);var universal_provider_dist_index_es_vn=dist_index_es_D,dist_index_es_fn=universal_provider_dist_index_es_Ce,universal_provider_dist_index_es_mn=universal_provider_dist_index_es_E,universal_provider_dist_index_es_gn="[object Object]",universal_provider_dist_index_es_Pn=Function.prototype,dist_index_es_$n=Object.prototype,dist_index_es_je=universal_provider_dist_index_es_Pn.toString,dist_index_es_bn=dist_index_es_$n.hasOwnProperty,dist_index_es_wn=dist_index_es_je.call(Object);function universal_provider_dist_index_es_n(r){if(!universal_provider_dist_index_es_mn(r)||universal_provider_dist_index_es_vn(r)!=universal_provider_dist_index_es_gn)return!1;var e=dist_index_es_fn(r);if(e===null)return!0;var t=dist_index_es_bn.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&dist_index_es_je.call(t)==dist_index_es_wn}var universal_provider_dist_index_es_Cn=universal_provider_dist_index_es_n,universal_provider_dist_index_es_yn=dist_index_es_D,universal_provider_dist_index_es_In=universal_provider_dist_index_es_Ee,dist_index_es_On=universal_provider_dist_index_es_E,dist_index_es_An="[object Arguments]",dist_index_es_Hn="[object Array]",universal_provider_dist_index_es_En="[object Boolean]",dist_index_es_jn="[object Date]",universal_provider_dist_index_es_Sn="[object Error]",dist_index_es_Nn="[object Function]",universal_provider_dist_index_es_Tn="[object Map]",dist_index_es_Dn="[object Number]",dist_index_es_qn="[object Object]",universal_provider_dist_index_es_Rn="[object RegExp]",dist_index_es_xn="[object Set]",dist_index_es_Ln="[object String]",dist_index_es_Un="[object WeakMap]",dist_index_es_Mn="[object ArrayBuffer]",dist_index_es_Fn="[object DataView]",dist_index_es_Gn="[object Float32Array]",dist_index_es_zn="[object Float64Array]",dist_index_es_kn="[object Int8Array]",dist_index_es_Bn="[object Int16Array]",dist_index_es_Vn="[object Int32Array]",dist_index_es_Jn="[object Uint8Array]",dist_index_es_Kn="[object Uint8ClampedArray]",dist_index_es_Xn="[object Uint16Array]",dist_index_es_Wn="[object Uint32Array]",universal_provider_dist_index_es_p={};universal_provider_dist_index_es_p[dist_index_es_Gn]=universal_provider_dist_index_es_p[dist_index_es_zn]=universal_provider_dist_index_es_p[dist_index_es_kn]=universal_provider_dist_index_es_p[dist_index_es_Bn]=universal_provider_dist_index_es_p[dist_index_es_Vn]=universal_provider_dist_index_es_p[dist_index_es_Jn]=universal_provider_dist_index_es_p[dist_index_es_Kn]=universal_provider_dist_index_es_p[dist_index_es_Xn]=universal_provider_dist_index_es_p[dist_index_es_Wn]=!0,universal_provider_dist_index_es_p[dist_index_es_An]=universal_provider_dist_index_es_p[dist_index_es_Hn]=universal_provider_dist_index_es_p[dist_index_es_Mn]=universal_provider_dist_index_es_p[universal_provider_dist_index_es_En]=universal_provider_dist_index_es_p[dist_index_es_Fn]=universal_provider_dist_index_es_p[dist_index_es_jn]=universal_provider_dist_index_es_p[universal_provider_dist_index_es_Sn]=universal_provider_dist_index_es_p[dist_index_es_Nn]=universal_provider_dist_index_es_p[universal_provider_dist_index_es_Tn]=universal_provider_dist_index_es_p[dist_index_es_Dn]=universal_provider_dist_index_es_p[dist_index_es_qn]=universal_provider_dist_index_es_p[universal_provider_dist_index_es_Rn]=universal_provider_dist_index_es_p[dist_index_es_xn]=universal_provider_dist_index_es_p[dist_index_es_Ln]=universal_provider_dist_index_es_p[dist_index_es_Un]=!1;function dist_index_es_Yn(r){return dist_index_es_On(r)&&universal_provider_dist_index_es_In(r.length)&&!!universal_provider_dist_index_es_p[universal_provider_dist_index_es_yn(r)]}var dist_index_es_Zn=dist_index_es_Yn;function dist_index_es_Qn(r){return function(e){return r(e)}}var ea=dist_index_es_Qn,index_es_X={exports:{}};(function(r,e){var t=index_es_ce,s=e&&!e.nodeType&&e,i=s&&!0&&r&&!r.nodeType&&r,n=i&&i.exports===s,a=n&&t.process,o=function(){try{var c=i&&i.require&&i.require("util").types;return c||a&&a.binding&&a.binding("util")}catch{}}();r.exports=o})(index_es_X,index_es_X.exports);var ta=dist_index_es_Zn,ra=ea,dist_index_es_Se=index_es_X.exports,dist_index_es_Ne=dist_index_es_Se&&dist_index_es_Se.isTypedArray,sa=dist_index_es_Ne?ra(dist_index_es_Ne):ta,dist_index_es_Te=sa;function ia(r,e){if(!(e==="constructor"&&typeof r[e]=="function")&&e!="__proto__")return r[e]}var universal_provider_dist_index_es_De=ia,na=dist_index_es_V,aa=universal_provider_dist_index_es_S,oa=Object.prototype,ca=oa.hasOwnProperty;function ha(r,e,t){var s=r[e];(!(ca.call(r,e)&&aa(s,t))||t===void 0&&!(e in r))&&na(r,e,t)}var pa=ha,ua=pa,da=dist_index_es_V;function la(r,e,t,s){var i=!t;t||(t={});for(var n=-1,a=e.length;++n<a;){var o=e[n],c=s?s(t[o],r[o],o,t,r):void 0;c===void 0&&(c=r[o]),i?da(t,o,c):ua(t,o,c)}return t}var va=la;function fa(r,e){for(var t=-1,s=Array(r);++t<r;)s[t]=e(t);return s}var ma=fa,ga=9007199254740991,Pa=/^(?:0|[1-9]\d*)$/;function $a(r,e){var t=typeof r;return e=e??ga,!!e&&(t=="number"||t!="symbol"&&Pa.test(r))&&r>-1&&r%1==0&&r<e}var dist_index_es_qe=$a,ba=ma,wa=dist_index_es_Ae,_a=dist_index_es_He,Ca=universal_provider_dist_index_es_x.exports,ya=dist_index_es_qe,Ia=dist_index_es_Te,Oa=Object.prototype,Aa=Oa.hasOwnProperty;function Ha(r,e){var t=_a(r),s=!t&&wa(r),i=!t&&!s&&Ca(r),n=!t&&!s&&!i&&Ia(r),a=t||s||i||n,o=a?ba(r.length,String):[],c=o.length;for(var u in r)(e||Aa.call(r,u))&&!(a&&(u=="length"||i&&(u=="offset"||u=="parent")||n&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ya(u,c)))&&o.push(u);return o}var Ea=Ha;function ja(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Sa=ja,Na=index_es_$,Ta=universal_provider_dist_index_es_ye,Da=Sa,qa=Object.prototype,Ra=qa.hasOwnProperty;function xa(r){if(!Na(r))return Da(r);var e=Ta(r),t=[];for(var s in r)s=="constructor"&&(e||!Ra.call(r,s))||t.push(s);return t}var La=xa,Ua=Ea,Ma=La,Fa=dist_index_es_K;function Ga(r){return Fa(r)?Ua(r,!0):Ma(r)}var dist_index_es_Re=Ga,za=va,ka=dist_index_es_Re;function Ba(r){return za(r,ka(r))}var Va=Ba,universal_provider_dist_index_es_xe=universal_provider_dist_index_es_be,Ja=universal_provider_dist_index_es_J.exports,Ka=index_es_Hi,Xa=index_es_ji,Wa=index_es_ki,universal_provider_dist_index_es_Le=dist_index_es_Ae,dist_index_es_Ue=dist_index_es_He,Ya=dist_index_es_un,Za=universal_provider_dist_index_es_x.exports,Qa=universal_provider_dist_index_es_z,dist_index_es_eo=index_es_$,dist_index_es_to=universal_provider_dist_index_es_Cn,dist_index_es_ro=dist_index_es_Te,dist_index_es_Me=universal_provider_dist_index_es_De,dist_index_es_so=Va;function dist_index_es_io(r,e,t,s,i,n,a){var o=dist_index_es_Me(r,t),c=dist_index_es_Me(e,t),u=a.get(c);if(u){universal_provider_dist_index_es_xe(r,t,u);return}var d=n?n(o,c,t+"",r,e,a):void 0,g=d===void 0;if(g){var l=dist_index_es_Ue(c),F=!l&&Za(c),ee=!l&&!F&&dist_index_es_ro(c);d=c,l||F||ee?dist_index_es_Ue(o)?d=o:Ya(o)?d=Xa(o):F?(g=!1,d=Ja(c,!0)):ee?(g=!1,d=Ka(c,!0)):d=[]:dist_index_es_to(c)||universal_provider_dist_index_es_Le(c)?(d=o,universal_provider_dist_index_es_Le(o)?d=dist_index_es_so(o):(!dist_index_es_eo(o)||Qa(o))&&(d=Wa(c))):g=!1}g&&(a.set(c,d),i(d,c,s,n,a),a.delete(c)),universal_provider_dist_index_es_xe(r,t,d)}var dist_index_es_no=dist_index_es_io,dist_index_es_ao=dist_index_es_hi,dist_index_es_oo=universal_provider_dist_index_es_be,dist_index_es_co=dist_index_es_bi,dist_index_es_ho=dist_index_es_no,dist_index_es_po=index_es_$,dist_index_es_uo=dist_index_es_Re,dist_index_es_lo=universal_provider_dist_index_es_De;function dist_index_es_Fe(r,e,t,s,i){r!==e&&dist_index_es_co(e,function(n,a){if(i||(i=new dist_index_es_ao),dist_index_es_po(n))dist_index_es_ho(r,e,a,t,dist_index_es_Fe,s,i);else{var o=s?s(dist_index_es_lo(r,a),n,a+"",r,e,i):void 0;o===void 0&&(o=n),dist_index_es_oo(r,a,o)}},dist_index_es_uo)}var dist_index_es_vo=dist_index_es_Fe;function dist_index_es_fo(r){return r}var dist_index_es_Ge=dist_index_es_fo;function dist_index_es_mo(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}var dist_index_es_go=dist_index_es_mo,dist_index_es_Po=dist_index_es_go,index_es_ze=Math.max;function dist_index_es_$o(r,e,t){return e=index_es_ze(e===void 0?r.length-1:e,0),function(){for(var s=arguments,i=-1,n=index_es_ze(s.length-e,0),a=Array(n);++i<n;)a[i]=s[e+i];i=-1;for(var o=Array(e+1);++i<e;)o[i]=s[i];return o[e]=t(a),dist_index_es_Po(r,this,o)}}var dist_index_es_bo=dist_index_es_$o;function dist_index_es_wo(r){return function(){return r}}var universal_provider_dist_index_es_o=dist_index_es_wo,dist_index_es_Co=universal_provider_dist_index_es_o,dist_index_es_ke=dist_index_es_Pe,dist_index_es_yo=dist_index_es_Ge,dist_index_es_Io=dist_index_es_ke?function(r,e){return dist_index_es_ke(r,"toString",{configurable:!0,enumerable:!1,value:dist_index_es_Co(e),writable:!0})}:dist_index_es_yo,dist_index_es_Oo=dist_index_es_Io,dist_index_es_Ao=800,dist_index_es_Ho=16,dist_index_es_Eo=Date.now;function dist_index_es_jo(r){var e=0,t=0;return function(){var s=dist_index_es_Eo(),i=dist_index_es_Ho-(s-t);if(t=s,i>0){if(++e>=dist_index_es_Ao)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}var dist_index_es_So=dist_index_es_jo,dist_index_es_No=dist_index_es_Oo,dist_index_es_To=dist_index_es_So,dist_index_es_Do=dist_index_es_To(dist_index_es_No),dist_index_es_qo=dist_index_es_Do,dist_index_es_Ro=dist_index_es_Ge,dist_index_es_xo=dist_index_es_bo,dist_index_es_Lo=dist_index_es_qo;function dist_index_es_Uo(r,e){return dist_index_es_Lo(dist_index_es_xo(r,e,dist_index_es_Ro),r+"")}var dist_index_es_Mo=dist_index_es_Uo,dist_index_es_Fo=universal_provider_dist_index_es_S,dist_index_es_Go=dist_index_es_K,dist_index_es_zo=dist_index_es_qe,dist_index_es_ko=index_es_$;function dist_index_es_Bo(r,e,t){if(!dist_index_es_ko(t))return!1;var s=typeof e;return(s=="number"?dist_index_es_Go(t)&&dist_index_es_zo(e,t.length):s=="string"&&e in t)?dist_index_es_Fo(t[e],r):!1}var dist_index_es_Vo=dist_index_es_Bo,dist_index_es_Jo=dist_index_es_Mo,dist_index_es_Ko=dist_index_es_Vo;function dist_index_es_Xo(r){return dist_index_es_Jo(function(e,t){var s=-1,i=t.length,n=i>1?t[i-1]:void 0,a=i>2?t[2]:void 0;for(n=r.length>3&&typeof n=="function"?(i--,n):void 0,a&&dist_index_es_Ko(t[0],t[1],a)&&(n=i<3?void 0:n,i=1),e=Object(e);++s<i;){var o=t[s];o&&r(e,o,s,n)}return e})}var dist_index_es_Wo=dist_index_es_Xo,dist_index_es_Yo=dist_index_es_vo,dist_index_es_Zo=dist_index_es_Wo,dist_index_es_Qo=dist_index_es_Zo(function(r,e,t){dist_index_es_Yo(r,e,t)}),ec=dist_index_es_Qo,tc=Object.defineProperty,rc=Object.defineProperties,sc=Object.getOwnPropertyDescriptors,dist_index_es_Be=Object.getOwnPropertySymbols,ic=Object.prototype.hasOwnProperty,nc=Object.prototype.propertyIsEnumerable,dist_index_es_Ve=(r,e,t)=>e in r?tc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,universal_provider_dist_index_es_L=(r,e)=>{for(var t in e||(e={}))ic.call(e,t)&&dist_index_es_Ve(r,t,e[t]);if(dist_index_es_Be)for(var t of dist_index_es_Be(e))nc.call(e,t)&&dist_index_es_Ve(r,t,e[t]);return r},ac=(r,e)=>rc(r,sc(e));function universal_provider_dist_index_es_v(r,e,t){var s;const i=index_es_Ye(r);return((s=e.rpcMap)==null?void 0:s[i.reference])||`${universal_provider_dist_index_es_oe}?chainId=${i.namespace}:${i.reference}&projectId=${t}`}function universal_provider_dist_index_es_b(r){return r.includes(":")?r.split(":")[1]:r}function index_es_Je(r){return r.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)}function oc(r,e){const t=Object.keys(e.namespaces).filter(i=>i.includes(r));if(!t.length)return[];const s=[];return t.forEach(i=>{const n=e.namespaces[i].accounts;s.push(...n)}),s}function dist_index_es_W(r={},e={}){const t=dist_index_es_Ke(r),s=dist_index_es_Ke(e);return ec(t,s)}function dist_index_es_Ke(r){var e,t,s,i;const n={};if(!index_es_qe(r))return n;for(const[a,o]of Object.entries(r)){const c=index_es_Tt(a)?[a]:o.chains,u=o.methods||[],d=o.events||[],g=o.rpcMap||{},l=index_es_pr(a);n[l]=ac(universal_provider_dist_index_es_L(universal_provider_dist_index_es_L({},n[l]),o),{chains:index_es_Q(c,(e=n[l])==null?void 0:e.chains),methods:index_es_Q(u,(t=n[l])==null?void 0:t.methods),events:index_es_Q(d,(s=n[l])==null?void 0:s.events),rpcMap:universal_provider_dist_index_es_L(universal_provider_dist_index_es_L({},g),(i=n[l])==null?void 0:i.rpcMap)})}return n}function cc(r){return r.includes(":")?r.split(":")[2]:r}function universal_provider_dist_index_es_Xe(r){const e={};for(const[t,s]of Object.entries(r)){const i=s.methods||[],n=s.events||[],a=s.accounts||[],o=index_es_Tt(t)?[t]:s.chains?s.chains:index_es_Je(s.accounts);e[t]={chains:o,methods:i,events:n,accounts:a}}return e}function index_es_Y(r){return typeof r=="number"?r:r.includes("0x")?parseInt(r,16):(r=r.includes(":")?r.split(":")[1]:r,isNaN(Number(r))?r:Number(r))}const dist_index_es_We={},universal_provider_dist_index_es_h=r=>dist_index_es_We[r],index_es_Z=(r,e)=>{dist_index_es_We[r]=e};class hc{constructor(e){this.name="polkadot",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;const i=universal_provider_dist_index_es_b(t);e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}var pc=Object.defineProperty,uc=Object.defineProperties,dc=Object.getOwnPropertyDescriptors,dist_index_es_Ye=Object.getOwnPropertySymbols,lc=Object.prototype.hasOwnProperty,vc=Object.prototype.propertyIsEnumerable,universal_provider_dist_index_es_Ze=(r,e,t)=>e in r?pc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,universal_provider_dist_index_es_Qe=(r,e)=>{for(var t in e||(e={}))lc.call(e,t)&&universal_provider_dist_index_es_Ze(r,t,e[t]);if(dist_index_es_Ye)for(var t of dist_index_es_Ye(e))vc.call(e,t)&&universal_provider_dist_index_es_Ze(r,t,e[t]);return r},dist_index_es_et=(r,e)=>uc(r,dc(e));class fc{constructor(e){this.name="eip155",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(e);case"wallet_getCallsStatus":return await this.getCallStatus(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(parseInt(e),t),this.chainId=parseInt(e),this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;const i=parseInt(universal_provider_dist_index_es_b(t));e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}getHttpProvider(){const e=this.chainId,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}async handleSwitchChain(e){var t,s;let i=e.request.params?(t=e.request.params[0])==null?void 0:t.chainId:"0x0";i=i.startsWith("0x")?i:`0x${i}`;const n=parseInt(i,16);if(this.isChainApproved(n))this.setDefaultChain(`${n}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:i}]},chainId:(s=this.namespace.chains)==null?void 0:s[0]}),this.setDefaultChain(`${n}`);else throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var t,s,i;const n=(s=(t=e.request)==null?void 0:t.params)==null?void 0:s[0];if(!n)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const a=this.client.session.get(e.topic),o=((i=a?.sessionProperties)==null?void 0:i.capabilities)||{};if(o!=null&&o[n])return o?.[n];const c=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:dist_index_es_et(universal_provider_dist_index_es_Qe({},a.sessionProperties||{}),{capabilities:dist_index_es_et(universal_provider_dist_index_es_Qe({},o||{}),{[n]:c})})})}catch(u){console.warn("Failed to update session with capabilities",u)}return c}async getCallStatus(e){var t,s;const i=this.client.session.get(e.topic),n=(t=i.sessionProperties)==null?void 0:t.bundler_name;if(n){const o=this.getBundlerUrl(e.chainId,n);try{return await this.getUserOperationReceipt(o,e)}catch(c){console.warn("Failed to fetch call status from bundler",c,o)}}const a=(s=i.sessionProperties)==null?void 0:s.bundler_url;if(a)try{return await this.getUserOperationReceipt(a,e)}catch(o){console.warn("Failed to fetch call status from custom bundler",o,a)}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,t){var s;const i=new URL(e),n=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt",[(s=t.request.params)==null?void 0:s[0]]))});if(!n.ok)throw new Error(`Failed to fetch user operation receipt - ${n.status}`);return await n.json()}getBundlerUrl(e,t){return`${universal_provider_dist_index_es_ft}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`}}class mc{constructor(e){this.name="solana",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;const i=universal_provider_dist_index_es_b(t);e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}class gc{constructor(e){this.name="cosmos",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;const i=universal_provider_dist_index_es_b(t);e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}class Pc{constructor(e){this.name="algorand",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){if(!this.httpProviders[e]){const s=t||universal_provider_dist_index_es_v(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,s)}this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;e[t]=this.createHttpProvider(t,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace,this.client.core.projectId);return typeof s>"u"?void 0:new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}class $c{constructor(e){this.name="cip34",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{const s=this.getCardanoRPCUrl(t),i=universal_provider_dist_index_es_b(t);e[i]=this.createHttpProvider(i,s)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}getCardanoRPCUrl(e){const t=this.namespace.rpcMap;if(t)return t[e]}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||this.getCardanoRPCUrl(e);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}class bc{constructor(e){this.name="elrond",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;const i=universal_provider_dist_index_es_b(t);e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}class wc{constructor(e){this.name="multiversx",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;const i=universal_provider_dist_index_es_b(t);e[i]=this.createHttpProvider(i,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}class _c{constructor(e){this.name="near",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){if(this.chainId=e,!this.httpProviders[e]){const s=t||universal_provider_dist_index_es_v(`${this.name}:${e}`,this.namespace);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,s)}this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{var s;e[t]=this.createHttpProvider(t,(s=this.namespace.rpcMap)==null?void 0:s[t])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace);return typeof s>"u"?void 0:new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}class Cc{constructor(e){this.name="tezos",this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,t){if(this.chainId=e,!this.httpProviders[e]){const s=t||universal_provider_dist_index_es_v(`${this.name}:${e}`,this.namespace);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,s)}this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(t=>{e[t]=this.createHttpProvider(t)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace);return typeof s>"u"?void 0:new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s))}}class yc{constructor(e){this.name=universal_provider_dist_index_es_w,this.namespace=e.namespace,this.events=universal_provider_dist_index_es_h("events"),this.client=universal_provider_dist_index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,t){this.httpProviders[e]||this.setHttpProvider(e,t),this.chainId=e,this.events.emit(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(t=>t.split(":")[1]===this.chainId.toString()).map(t=>t.split(":")[2]))]:[]}createHttpProviders(){var e,t;const s={};return(t=(e=this.namespace)==null?void 0:e.accounts)==null||t.forEach(i=>{const n=index_es_Ye(i);s[`${n.namespace}:${n.reference}`]=this.createHttpProvider(i)}),s}getHttpProvider(e){const t=this.httpProviders[e];if(typeof t>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return t}setHttpProvider(e,t){const s=this.createHttpProvider(e,t);s&&(this.httpProviders[e]=s)}createHttpProvider(e,t){const s=t||universal_provider_dist_index_es_v(e,this.namespace,this.client.core.projectId);if(!s)throw new Error(`No RPC url provided for chainId: ${e}`);return new jsonrpc_provider_dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(s,universal_provider_dist_index_es_h("disableProviderPing")))}}var Ic=Object.defineProperty,Oc=Object.defineProperties,Ac=Object.getOwnPropertyDescriptors,dist_index_es_tt=Object.getOwnPropertySymbols,Hc=Object.prototype.hasOwnProperty,Ec=Object.prototype.propertyIsEnumerable,universal_provider_dist_index_es_rt=(r,e,t)=>e in r?Ic(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,U=(r,e)=>{for(var t in e||(e={}))Hc.call(e,t)&&universal_provider_dist_index_es_rt(r,t,e[t]);if(dist_index_es_tt)for(var t of dist_index_es_tt(e))Ec.call(e,t)&&universal_provider_dist_index_es_rt(r,t,e[t]);return r},universal_provider_dist_index_es_Q=(r,e)=>Oc(r,Ac(e));class universal_provider_dist_index_es_M{constructor(e){this.events=new (external_events_default()),this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=e,this.logger=typeof e?.logger<"u"&&typeof e?.logger!="string"?e.logger:pino_default()(logger_dist_index_es_k({level:e?.logger||dist_index_es_ne})),this.disableProviderPing=e?.disableProviderPing||!1}static async init(e){const t=new universal_provider_dist_index_es_M(e);return await t.initialize(),t}async request(e,t,s){const[i,n]=this.validateChain(t);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(i).request({request:U({},e),chainId:`${i}:${n}`,topic:this.session.topic,expiry:s})}sendAsync(e,t,s,i){const n=new Date().getTime();this.request(e,s,i).then(a=>t(null,formatJsonRpcResult(n,a))).catch(a=>t(a,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(e=this.session)==null?void 0:e.topic,reason:index_es_de("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,t){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:s,response:i}=await this.client.authenticate(e,t);s&&(this.uri=s,this.events.emit("display_uri",s));const n=await i();if(this.session=n.session,this.session){const a=universal_provider_dist_index_es_Xe(this.session.namespaces);this.namespaces=dist_index_es_W(this.namespaces,a),this.persist("namespaces",this.namespaces),this.onConnect()}return n}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}removeListener(e,t){this.events.removeListener(e,t)}off(e,t){this.events.off(e,t)}get isWalletConnect(){return!0}async pair(e){this.shouldAbortPairingAttempt=!1;let t=0;do{if(this.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(t>=this.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:s,approval:i}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties});s&&(this.uri=s,this.events.emit("display_uri",s)),await i().then(n=>{this.session=n;const a=universal_provider_dist_index_es_Xe(n.namespaces);this.namespaces=dist_index_es_W(this.namespaces,a),this.persist("namespaces",this.namespaces)}).catch(n=>{if(n.message!==sign_client_dist_index_es_rt)throw n;t++})}while(!this.session);return this.onConnect(),this.session}setDefaultChain(e,t){try{if(!this.session)return;const[s,i]=this.validateChain(e),n=this.getProvider(s);n.name===universal_provider_dist_index_es_w?n.setDefaultChain(`${s}:${i}`,t):n.setDefaultChain(i,t)}catch(s){if(!/Please call connect/.test(s.message))throw s}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const t=this.client.pairing.getAll();if(index_es_$e(t)){for(const s of t)e.deletePairings?this.client.core.expirer.set(s.topic,0):await this.client.core.relayer.subscriber.unsubscribe(s.topic);this.logger.info(`Inactive pairings cleared: ${t.length}`)}}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}async checkStorage(){if(this.namespaces=await this.getFromStore("namespaces"),this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.client.session.length){const e=this.client.session.keys.length-1;this.session=this.client.session.get(this.client.session.keys[e]),this.createProviders()}}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){this.client=this.providerOpts.client||await sign_client_dist_index_es_e.init({core:this.providerOpts.core,logger:this.providerOpts.logger||dist_index_es_ne,relayUrl:this.providerOpts.relayUrl||universal_provider_dist_index_es_dt,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map(t=>index_es_pr(t)))];index_es_Z("client",this.client),index_es_Z("events",this.events),index_es_Z("disableProviderPing",this.disableProviderPing),e.forEach(t=>{if(!this.session)return;const s=oc(t,this.session),i=index_es_Je(s),n=dist_index_es_W(this.namespaces,this.optionalNamespaces),a=universal_provider_dist_index_es_Q(U({},n[t]),{accounts:s,chains:i});switch(t){case"eip155":this.rpcProviders[t]=new fc({namespace:a});break;case"algorand":this.rpcProviders[t]=new Pc({namespace:a});break;case"solana":this.rpcProviders[t]=new mc({namespace:a});break;case"cosmos":this.rpcProviders[t]=new gc({namespace:a});break;case"polkadot":this.rpcProviders[t]=new hc({namespace:a});break;case"cip34":this.rpcProviders[t]=new $c({namespace:a});break;case"elrond":this.rpcProviders[t]=new bc({namespace:a});break;case"multiversx":this.rpcProviders[t]=new wc({namespace:a});break;case"near":this.rpcProviders[t]=new _c({namespace:a});break;case"tezos":this.rpcProviders[t]=new Cc({namespace:a});break;default:this.rpcProviders[universal_provider_dist_index_es_w]?this.rpcProviders[universal_provider_dist_index_es_w].updateNamespace(a):this.rpcProviders[universal_provider_dist_index_es_w]=new yc({namespace:a})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",e=>{this.events.emit("session_ping",e)}),this.client.on("session_event",e=>{const{params:t}=e,{event:s}=t;if(s.name==="accountsChanged"){const i=s.data;i&&index_es_$e(i)&&this.events.emit("accountsChanged",i.map(cc))}else if(s.name==="chainChanged"){const i=t.chainId,n=t.event.data,a=index_es_pr(i),o=index_es_Y(i)!==index_es_Y(n)?`${a}:${index_es_Y(n)}`:i;this.onChainChanged(o)}else this.events.emit(s.name,s.data);this.events.emit("session_event",e)}),this.client.on("session_update",({topic:e,params:t})=>{var s;const{namespaces:i}=t,n=(s=this.client)==null?void 0:s.session.get(e);this.session=universal_provider_dist_index_es_Q(U({},n),{namespaces:i}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:t})}),this.client.on("session_delete",async e=>{await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",universal_provider_dist_index_es_Q(U({},index_es_de("USER_DISCONNECTED")),{data:e.topic}))}),this.on(universal_provider_dist_index_es_f.DEFAULT_CHAIN_CHANGED,e=>{this.onChainChanged(e,!0)})}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[universal_provider_dist_index_es_w]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(e=>{var t;this.getProvider(e).updateNamespace((t=this.session)==null?void 0:t.namespaces[e])})}setNamespaces(e){const{namespaces:t,optionalNamespaces:s,sessionProperties:i}=e;t&&Object.keys(t).length&&(this.namespaces=t),s&&Object.keys(s).length&&(this.optionalNamespaces=s),this.sessionProperties=i,this.persist("namespaces",t),this.persist("optionalNamespaces",s)}validateChain(e){const[t,s]=e?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[t,s];if(t&&!Object.keys(this.namespaces||{}).map(a=>index_es_pr(a)).includes(t))throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);if(t&&s)return[t,s];const i=index_es_pr(Object.keys(this.namespaces)[0]),n=this.rpcProviders[i].getDefaultChain();return[i,n]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}onChainChanged(e,t=!1){if(!this.namespaces)return;const[s,i]=this.validateChain(e);i&&(t||this.getProvider(s).setDefaultChain(i),this.namespaces[s]?this.namespaces[s].defaultChain=i:this.namespaces[`${s}:${i}`]?this.namespaces[`${s}:${i}`].defaultChain=i:this.namespaces[`${s}:${i}`]={defaultChain:i},this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",i))}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.session=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,this.persist("namespaces",void 0),this.persist("optionalNamespaces",void 0),this.persist("sessionProperties",void 0),await this.cleanupPendingPairings({deletePairings:!0})}persist(e,t){this.client.core.storage.setItem(`${universal_provider_dist_index_es_ae}/${e}`,t)}async getFromStore(e){return await this.client.core.storage.getItem(`${universal_provider_dist_index_es_ae}/${e}`)}}const jc=universal_provider_dist_index_es_M;
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/ethereum-provider/dist/index.es.js
const ethereum_provider_dist_index_es_R="wc",ethereum_provider_dist_index_es_T="ethereum_provider",dist_index_es_$=`${ethereum_provider_dist_index_es_R}@2:${ethereum_provider_dist_index_es_T}:`,ethereum_provider_dist_index_es_j="https://rpc.walletconnect.org/v1/",ethereum_provider_dist_index_es_g=["eth_sendTransaction","personal_sign"],ethereum_provider_dist_index_es_y=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],dist_index_es_u=["chainChanged","accountsChanged"],ethereum_provider_dist_index_es_b=["chainChanged","accountsChanged","message","disconnect","connect"];var ethereum_provider_dist_index_es_q=Object.defineProperty,ethereum_provider_dist_index_es_N=Object.defineProperties,ethereum_provider_dist_index_es_D=Object.getOwnPropertyDescriptors,ethereum_provider_dist_index_es_M=Object.getOwnPropertySymbols,index_es_U=Object.prototype.hasOwnProperty,ethereum_provider_dist_index_es_Q=Object.prototype.propertyIsEnumerable,ethereum_provider_dist_index_es_O=(r,t,s)=>t in r?ethereum_provider_dist_index_es_q(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,ethereum_provider_dist_index_es_p=(r,t)=>{for(var s in t||(t={}))index_es_U.call(t,s)&&ethereum_provider_dist_index_es_O(r,s,t[s]);if(ethereum_provider_dist_index_es_M)for(var s of ethereum_provider_dist_index_es_M(t))ethereum_provider_dist_index_es_Q.call(t,s)&&ethereum_provider_dist_index_es_O(r,s,t[s]);return r},ethereum_provider_dist_index_es_E=(r,t)=>ethereum_provider_dist_index_es_N(r,ethereum_provider_dist_index_es_D(t));function ethereum_provider_dist_index_es_m(r){return Number(r[0].split(":")[1])}function ethereum_provider_dist_index_es_v(r){return`0x${r.toString(16)}`}function ethereum_provider_dist_index_es_L(r){const{chains:t,optionalChains:s,methods:i,optionalMethods:e,events:n,optionalEvents:o,rpcMap:c}=r;if(!index_es_$e(t))throw new Error("Invalid chains");const a={chains:t,methods:i||ethereum_provider_dist_index_es_g,events:n||dist_index_es_u,rpcMap:ethereum_provider_dist_index_es_p({},t.length?{[ethereum_provider_dist_index_es_m(t)]:c[ethereum_provider_dist_index_es_m(t)]}:{})},h=n?.filter(l=>!dist_index_es_u.includes(l)),d=i?.filter(l=>!ethereum_provider_dist_index_es_g.includes(l));if(!s&&!o&&!e&&!(h!=null&&h.length)&&!(d!=null&&d.length))return{required:t.length?a:void 0};const w=h?.length&&d?.length||!s,I={chains:[...new Set(w?a.chains.concat(s||[]):s)],methods:[...new Set(a.methods.concat(e!=null&&e.length?e:ethereum_provider_dist_index_es_y))],events:[...new Set(a.events.concat(o!=null&&o.length?o:ethereum_provider_dist_index_es_b))],rpcMap:c};return{required:t.length?a:void 0,optional:s.length?I:void 0}}class ethereum_provider_dist_index_es_C{constructor(){this.events=new external_events_.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY=dist_index_es_$,this.on=(t,s)=>(this.events.on(t,s),this),this.once=(t,s)=>(this.events.once(t,s),this),this.removeListener=(t,s)=>(this.events.removeListener(t,s),this),this.off=(t,s)=>(this.events.off(t,s),this),this.parseAccount=t=>this.isCompatibleChainId(t)?this.parseAccountId(t).address:t,this.signer={},this.rpc={}}static async init(t){const s=new ethereum_provider_dist_index_es_C;return await s.initialize(t),s}async request(t,s){return await this.signer.request(t,this.formatChainId(this.chainId),s)}sendAsync(t,s,i){this.signer.sendAsync(t,s,this.formatChainId(this.chainId),i)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(t){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(t);const{required:s,optional:i}=ethereum_provider_dist_index_es_L(this.rpc);try{const e=await new Promise(async(o,c)=>{var a;this.rpc.showQrModal&&((a=this.modal)==null||a.subscribeModal(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))})),await this.signer.connect(ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({namespaces:ethereum_provider_dist_index_es_p({},s&&{[this.namespace]:s})},i&&{optionalNamespaces:{[this.namespace]:i}}),{pairingTopic:t?.pairingTopic})).then(h=>{o(h)}).catch(h=>{c(new Error(h.message))})});if(!e)return;const n=index_es_Hr(e.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:n),this.setAccounts(n),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_v(this.chainId)})}catch(e){throw this.signer.logger.error(e),e}finally{this.modal&&this.modal.closeModal()}}async authenticate(t,s){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:t?.chains});try{const i=await new Promise(async(n,o)=>{var c;this.rpc.showQrModal&&((c=this.modal)==null||c.subscribeModal(a=>{!a.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),o(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({},t),{chains:this.rpc.chains}),s).then(a=>{n(a)}).catch(a=>{o(new Error(a.message))})}),e=i.session;if(e){const n=index_es_Hr(e.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:n),this.setAccounts(n),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_v(this.chainId)})}return i}catch(i){throw this.signer.logger.error(i),i}finally{this.modal&&this.modal.closeModal()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",t=>{const{params:s}=t,{event:i}=s;i.name==="accountsChanged"?(this.accounts=this.parseAccounts(i.data),this.events.emit("accountsChanged",this.accounts)):i.name==="chainChanged"?this.setChainId(this.formatChainId(i.data)):this.events.emit(i.name,i.data),this.events.emit("session_event",t)}),this.signer.on("chainChanged",t=>{const s=parseInt(t);this.chainId=s,this.events.emit("chainChanged",ethereum_provider_dist_index_es_v(this.chainId)),this.persist()}),this.signer.on("session_update",t=>{this.events.emit("session_update",t)}),this.signer.on("session_delete",t=>{this.reset(),this.events.emit("session_delete",t),this.events.emit("disconnect",ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({},index_es_de("USER_DISCONNECTED")),{data:t.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",t=>{var s,i;this.rpc.showQrModal&&((s=this.modal)==null||s.closeModal(),(i=this.modal)==null||i.openModal({uri:t})),this.events.emit("display_uri",t)})}switchEthereumChain(t){this.request({method:"wallet_switchEthereumChain",params:[{chainId:t.toString(16)}]})}isCompatibleChainId(t){return typeof t=="string"?t.startsWith(`${this.namespace}:`):!1}formatChainId(t){return`${this.namespace}:${t}`}parseChainId(t){return Number(t.split(":")[1])}setChainIds(t){const s=t.filter(i=>this.isCompatibleChainId(i)).map(i=>this.parseChainId(i));s.length&&(this.chainId=s[0],this.events.emit("chainChanged",ethereum_provider_dist_index_es_v(this.chainId)),this.persist())}setChainId(t){if(this.isCompatibleChainId(t)){const s=this.parseChainId(t);this.chainId=s,this.switchEthereumChain(s)}}parseAccountId(t){const[s,i,e]=t.split(":");return{chainId:`${s}:${i}`,address:e}}setAccounts(t){this.accounts=t.filter(s=>this.parseChainId(this.parseAccountId(s).chainId)===this.chainId).map(s=>this.parseAccountId(s).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(t){var s,i;const e=(s=t?.chains)!=null?s:[],n=(i=t?.optionalChains)!=null?i:[],o=e.concat(n);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const c=e.length?t?.methods||ethereum_provider_dist_index_es_g:[],a=e.length?t?.events||dist_index_es_u:[],h=t?.optionalMethods||[],d=t?.optionalEvents||[],w=t?.rpcMap||this.buildRpcMap(o,t.projectId),I=t?.qrModalOptions||void 0;return{chains:e?.map(l=>this.formatChainId(l)),optionalChains:n.map(l=>this.formatChainId(l)),methods:c,events:a,optionalMethods:h,optionalEvents:d,rpcMap:w,showQrModal:!!(t!=null&&t.showQrModal),qrModalOptions:I,projectId:t.projectId,metadata:t.metadata}}buildRpcMap(t,s){const i={};return t.forEach(e=>{i[e]=this.getRpcUrl(e,s)}),i}async initialize(t){if(this.rpc=this.getRpcConfig(t),this.chainId=this.rpc.chains.length?ethereum_provider_dist_index_es_m(this.rpc.chains):ethereum_provider_dist_index_es_m(this.rpc.optionalChains),this.signer=await jc.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:t.disableProviderPing,relayUrl:t.relayUrl,storageOptions:t.storageOptions,customStoragePrefix:t.customStoragePrefix,telemetryEnabled:t.telemetryEnabled,logger:t.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let s;try{const{WalletConnectModal:i}=await __webpack_require__.e(/* import() */ 940).then(__webpack_require__.bind(__webpack_require__, 380940));s=i}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(s)try{this.modal=new s(ethereum_provider_dist_index_es_p({projectId:this.rpc.projectId},this.rpc.qrModalOptions))}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(t){if(!t)return;const{chains:s,optionalChains:i,rpcMap:e}=t;s&&index_es_$e(s)&&(this.rpc.chains=s.map(n=>this.formatChainId(n)),s.forEach(n=>{this.rpc.rpcMap[n]=e?.[n]||this.getRpcUrl(n)})),i&&index_es_$e(i)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=i?.map(n=>this.formatChainId(n)),i.forEach(n=>{this.rpc.rpcMap[n]=e?.[n]||this.getRpcUrl(n)}))}getRpcUrl(t,s){var i;return((i=this.rpc.rpcMap)==null?void 0:i[t])||`${ethereum_provider_dist_index_es_j}?chainId=eip155:${t}&projectId=${s||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const t=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),s=this.session.namespaces[`${this.namespace}:${t}`]?this.session.namespaces[`${this.namespace}:${t}`]:this.session.namespaces[this.namespace];this.setChainIds(t?[this.formatChainId(t)]:s?.accounts),this.setAccounts(s?.accounts)}catch(t){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(t),await this.disconnect().catch(s=>this.signer.logger.warn(s))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(t){return typeof t=="string"||t instanceof String?[this.parseAccount(t)]:t.map(s=>this.parseAccount(s))}}const ethereum_provider_dist_index_es_x=(/* unused pure expression or super */ null && (ethereum_provider_dist_index_es_C));
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 792784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const WebSocket = __webpack_require__(400315);

WebSocket.createWebSocketStream = __webpack_require__(774722);
WebSocket.Server = __webpack_require__(510463);
WebSocket.Receiver = __webpack_require__(79195);
WebSocket.Sender = __webpack_require__(582055);

module.exports = WebSocket;


/***/ }),

/***/ 699405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { EMPTY_BUFFER } = __webpack_require__(243713);

/**
 * Merges an array of buffers into a new buffer.
 *
 * @param {Buffer[]} list The array of buffers to concat
 * @param {Number} totalLength The total length of buffers in the list
 * @return {Buffer} The resulting buffer
 * @public
 */
function concat(list, totalLength) {
  if (list.length === 0) return EMPTY_BUFFER;
  if (list.length === 1) return list[0];

  const target = Buffer.allocUnsafe(totalLength);
  let offset = 0;

  for (let i = 0; i < list.length; i++) {
    const buf = list[i];
    target.set(buf, offset);
    offset += buf.length;
  }

  if (offset < totalLength) return target.slice(0, offset);

  return target;
}

/**
 * Masks a buffer using the given mask.
 *
 * @param {Buffer} source The buffer to mask
 * @param {Buffer} mask The mask to use
 * @param {Buffer} output The buffer where to store the result
 * @param {Number} offset The offset at which to start writing
 * @param {Number} length The number of bytes to mask.
 * @public
 */
function _mask(source, mask, output, offset, length) {
  for (let i = 0; i < length; i++) {
    output[offset + i] = source[i] ^ mask[i & 3];
  }
}

/**
 * Unmasks a buffer using the given mask.
 *
 * @param {Buffer} buffer The buffer to unmask
 * @param {Buffer} mask The mask to use
 * @public
 */
function _unmask(buffer, mask) {
  // Required until https://github.com/nodejs/node/issues/9006 is resolved.
  const length = buffer.length;
  for (let i = 0; i < length; i++) {
    buffer[i] ^= mask[i & 3];
  }
}

/**
 * Converts a buffer to an `ArrayBuffer`.
 *
 * @param {Buffer} buf The buffer to convert
 * @return {ArrayBuffer} Converted buffer
 * @public
 */
function toArrayBuffer(buf) {
  if (buf.byteLength === buf.buffer.byteLength) {
    return buf.buffer;
  }

  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

/**
 * Converts `data` to a `Buffer`.
 *
 * @param {*} data The data to convert
 * @return {Buffer} The buffer
 * @throws {TypeError}
 * @public
 */
function toBuffer(data) {
  toBuffer.readOnly = true;

  if (Buffer.isBuffer(data)) return data;

  let buf;

  if (data instanceof ArrayBuffer) {
    buf = Buffer.from(data);
  } else if (ArrayBuffer.isView(data)) {
    buf = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
  } else {
    buf = Buffer.from(data);
    toBuffer.readOnly = false;
  }

  return buf;
}

try {
  const bufferUtil = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bufferutil'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  const bu = bufferUtil.BufferUtil || bufferUtil;

  module.exports = {
    concat,
    mask(source, mask, output, offset, length) {
      if (length < 48) _mask(source, mask, output, offset, length);
      else bu.mask(source, mask, output, offset, length);
    },
    toArrayBuffer,
    toBuffer,
    unmask(buffer, mask) {
      if (buffer.length < 32) _unmask(buffer, mask);
      else bu.unmask(buffer, mask);
    }
  };
} catch (e) /* istanbul ignore next */ {
  module.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer,
    unmask: _unmask
  };
}


/***/ }),

/***/ 243713:
/***/ ((module) => {

"use strict";


module.exports = {
  BINARY_TYPES: ['nodebuffer', 'arraybuffer', 'fragments'],
  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
  kStatusCode: Symbol('status-code'),
  kWebSocket: Symbol('websocket'),
  EMPTY_BUFFER: Buffer.alloc(0),
  NOOP: () => {}
};


/***/ }),

/***/ 59360:
/***/ ((module) => {

"use strict";


/**
 * Class representing an event.
 *
 * @private
 */
class Event {
  /**
   * Create a new `Event`.
   *
   * @param {String} type The name of the event
   * @param {Object} target A reference to the target to which the event was
   *     dispatched
   */
  constructor(type, target) {
    this.target = target;
    this.type = type;
  }
}

/**
 * Class representing a message event.
 *
 * @extends Event
 * @private
 */
class MessageEvent extends Event {
  /**
   * Create a new `MessageEvent`.
   *
   * @param {(String|Buffer|ArrayBuffer|Buffer[])} data The received data
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */
  constructor(data, target) {
    super('message', target);

    this.data = data;
  }
}

/**
 * Class representing a close event.
 *
 * @extends Event
 * @private
 */
class CloseEvent extends Event {
  /**
   * Create a new `CloseEvent`.
   *
   * @param {Number} code The status code explaining why the connection is being
   *     closed
   * @param {String} reason A human-readable string explaining why the
   *     connection is closing
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */
  constructor(code, reason, target) {
    super('close', target);

    this.wasClean = target._closeFrameReceived && target._closeFrameSent;
    this.reason = reason;
    this.code = code;
  }
}

/**
 * Class representing an open event.
 *
 * @extends Event
 * @private
 */
class OpenEvent extends Event {
  /**
   * Create a new `OpenEvent`.
   *
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */
  constructor(target) {
    super('open', target);
  }
}

/**
 * Class representing an error event.
 *
 * @extends Event
 * @private
 */
class ErrorEvent extends Event {
  /**
   * Create a new `ErrorEvent`.
   *
   * @param {Object} error The error that generated this event
   * @param {WebSocket} target A reference to the target to which the event was
   *     dispatched
   */
  constructor(error, target) {
    super('error', target);

    this.message = error.message;
    this.error = error;
  }
}

/**
 * This provides methods for emulating the `EventTarget` interface. It's not
 * meant to be used directly.
 *
 * @mixin
 */
const EventTarget = {
  /**
   * Register an event listener.
   *
   * @param {String} type A string representing the event type to listen for
   * @param {Function} listener The listener to add
   * @param {Object} [options] An options object specifies characteristics about
   *     the event listener
   * @param {Boolean} [options.once=false] A `Boolean`` indicating that the
   *     listener should be invoked at most once after being added. If `true`,
   *     the listener would be automatically removed when invoked.
   * @public
   */
  addEventListener(type, listener, options) {
    if (typeof listener !== 'function') return;

    function onMessage(data) {
      listener.call(this, new MessageEvent(data, this));
    }

    function onClose(code, message) {
      listener.call(this, new CloseEvent(code, message, this));
    }

    function onError(error) {
      listener.call(this, new ErrorEvent(error, this));
    }

    function onOpen() {
      listener.call(this, new OpenEvent(this));
    }

    const method = options && options.once ? 'once' : 'on';

    if (type === 'message') {
      onMessage._listener = listener;
      this[method](type, onMessage);
    } else if (type === 'close') {
      onClose._listener = listener;
      this[method](type, onClose);
    } else if (type === 'error') {
      onError._listener = listener;
      this[method](type, onError);
    } else if (type === 'open') {
      onOpen._listener = listener;
      this[method](type, onOpen);
    } else {
      this[method](type, listener);
    }
  },

  /**
   * Remove an event listener.
   *
   * @param {String} type A string representing the event type to remove
   * @param {Function} listener The listener to remove
   * @public
   */
  removeEventListener(type, listener) {
    const listeners = this.listeners(type);

    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i] === listener || listeners[i]._listener === listener) {
        this.removeListener(type, listeners[i]);
      }
    }
  }
};

module.exports = EventTarget;


/***/ }),

/***/ 101177:
/***/ ((module) => {

"use strict";


//
// Allowed token characters:
//
// '!', '#', '$', '%', '&', ''', '*', '+', '-',
// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
//
// tokenChars[32] === 0 // ' '
// tokenChars[33] === 1 // '!'
// tokenChars[34] === 0 // '"'
// ...
//
// prettier-ignore
const tokenChars = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
];

/**
 * Adds an offer to the map of extension offers or a parameter to the map of
 * parameters.
 *
 * @param {Object} dest The map of extension offers or parameters
 * @param {String} name The extension or parameter name
 * @param {(Object|Boolean|String)} elem The extension parameters or the
 *     parameter value
 * @private
 */
function push(dest, name, elem) {
  if (dest[name] === undefined) dest[name] = [elem];
  else dest[name].push(elem);
}

/**
 * Parses the `Sec-WebSocket-Extensions` header into an object.
 *
 * @param {String} header The field value of the header
 * @return {Object} The parsed object
 * @public
 */
function parse(header) {
  const offers = Object.create(null);

  if (header === undefined || header === '') return offers;

  let params = Object.create(null);
  let mustUnescape = false;
  let isEscaping = false;
  let inQuotes = false;
  let extensionName;
  let paramName;
  let start = -1;
  let end = -1;
  let i = 0;

  for (; i < header.length; i++) {
    const code = header.charCodeAt(i);

    if (extensionName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (code === 0x20 /* ' ' */ || code === 0x09 /* '\t' */) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        const name = header.slice(start, end);
        if (code === 0x2c) {
          push(offers, name, params);
          params = Object.create(null);
        } else {
          extensionName = name;
        }

        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else if (paramName === undefined) {
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (code === 0x20 || code === 0x09) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        push(params, header.slice(start, end), true);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        start = end = -1;
      } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
        paramName = header.slice(start, i);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    } else {
      //
      // The value of a quoted-string after unescaping must conform to the
      // token ABNF, so only token characters are valid.
      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
      //
      if (isEscaping) {
        if (tokenChars[code] !== 1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (start === -1) start = i;
        else if (!mustUnescape) mustUnescape = true;
        isEscaping = false;
      } else if (inQuotes) {
        if (tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 0x22 /* '"' */ && start !== -1) {
          inQuotes = false;
          end = i;
        } else if (code === 0x5c /* '\' */) {
          isEscaping = true;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
        inQuotes = true;
      } else if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
        if (end === -1) end = i;
      } else if (code === 0x3b || code === 0x2c) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }

        if (end === -1) end = i;
        let value = header.slice(start, end);
        if (mustUnescape) {
          value = value.replace(/\\/g, '');
          mustUnescape = false;
        }
        push(params, paramName, value);
        if (code === 0x2c) {
          push(offers, extensionName, params);
          params = Object.create(null);
          extensionName = undefined;
        }

        paramName = undefined;
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
  }

  if (start === -1 || inQuotes) {
    throw new SyntaxError('Unexpected end of input');
  }

  if (end === -1) end = i;
  const token = header.slice(start, end);
  if (extensionName === undefined) {
    push(offers, token, params);
  } else {
    if (paramName === undefined) {
      push(params, token, true);
    } else if (mustUnescape) {
      push(params, paramName, token.replace(/\\/g, ''));
    } else {
      push(params, paramName, token);
    }
    push(offers, extensionName, params);
  }

  return offers;
}

/**
 * Builds the `Sec-WebSocket-Extensions` header field value.
 *
 * @param {Object} extensions The map of extensions and parameters to format
 * @return {String} A string representing the given object
 * @public
 */
function format(extensions) {
  return Object.keys(extensions)
    .map((extension) => {
      let configurations = extensions[extension];
      if (!Array.isArray(configurations)) configurations = [configurations];
      return configurations
        .map((params) => {
          return [extension]
            .concat(
              Object.keys(params).map((k) => {
                let values = params[k];
                if (!Array.isArray(values)) values = [values];
                return values
                  .map((v) => (v === true ? k : `${k}=${v}`))
                  .join('; ');
              })
            )
            .join('; ');
        })
        .join(', ');
    })
    .join(', ');
}

module.exports = { format, parse };


/***/ }),

/***/ 496596:
/***/ ((module) => {

"use strict";


const kDone = Symbol('kDone');
const kRun = Symbol('kRun');

/**
 * A very simple job queue with adjustable concurrency. Adapted from
 * https://github.com/STRML/async-limiter
 */
class Limiter {
  /**
   * Creates a new `Limiter`.
   *
   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
   *     to run concurrently
   */
  constructor(concurrency) {
    this[kDone] = () => {
      this.pending--;
      this[kRun]();
    };
    this.concurrency = concurrency || Infinity;
    this.jobs = [];
    this.pending = 0;
  }

  /**
   * Adds a job to the queue.
   *
   * @param {Function} job The job to run
   * @public
   */
  add(job) {
    this.jobs.push(job);
    this[kRun]();
  }

  /**
   * Removes a job from the queue and runs it if possible.
   *
   * @private
   */
  [kRun]() {
    if (this.pending === this.concurrency) return;

    if (this.jobs.length) {
      const job = this.jobs.shift();

      this.pending++;
      job(this[kDone]);
    }
  }
}

module.exports = Limiter;


/***/ }),

/***/ 776994:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const zlib = __webpack_require__(443106);

const bufferUtil = __webpack_require__(699405);
const Limiter = __webpack_require__(496596);
const { kStatusCode, NOOP } = __webpack_require__(243713);

const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
const kPerMessageDeflate = Symbol('permessage-deflate');
const kTotalLength = Symbol('total-length');
const kCallback = Symbol('callback');
const kBuffers = Symbol('buffers');
const kError = Symbol('error');

//
// We limit zlib concurrency, which prevents severe memory fragmentation
// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
// and https://github.com/websockets/ws/issues/1202
//
// Intentionally global; it's the global thread pool that's an issue.
//
let zlibLimiter;

/**
 * permessage-deflate implementation.
 */
class PerMessageDeflate {
  /**
   * Creates a PerMessageDeflate instance.
   *
   * @param {Object} [options] Configuration options
   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
   *     disabling of server context takeover
   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
   *     acknowledge disabling of client context takeover
   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
   *     use of a custom server window size
   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
   *     for, or request, a custom client window size
   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
   *     deflate
   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
   *     inflate
   * @param {Number} [options.threshold=1024] Size (in bytes) below which
   *     messages should not be compressed
   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
   *     calls to zlib
   * @param {Boolean} [isServer=false] Create the instance in either server or
   *     client mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  constructor(options, isServer, maxPayload) {
    this._maxPayload = maxPayload | 0;
    this._options = options || {};
    this._threshold =
      this._options.threshold !== undefined ? this._options.threshold : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;

    this.params = null;

    if (!zlibLimiter) {
      const concurrency =
        this._options.concurrencyLimit !== undefined
          ? this._options.concurrencyLimit
          : 10;
      zlibLimiter = new Limiter(concurrency);
    }
  }

  /**
   * @type {String}
   */
  static get extensionName() {
    return 'permessage-deflate';
  }

  /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */
  offer() {
    const params = {};

    if (this._options.serverNoContextTakeover) {
      params.server_no_context_takeover = true;
    }
    if (this._options.clientNoContextTakeover) {
      params.client_no_context_takeover = true;
    }
    if (this._options.serverMaxWindowBits) {
      params.server_max_window_bits = this._options.serverMaxWindowBits;
    }
    if (this._options.clientMaxWindowBits) {
      params.client_max_window_bits = this._options.clientMaxWindowBits;
    } else if (this._options.clientMaxWindowBits == null) {
      params.client_max_window_bits = true;
    }

    return params;
  }

  /**
   * Accept an extension negotiation offer/response.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Object} Accepted configuration
   * @public
   */
  accept(configurations) {
    configurations = this.normalizeParams(configurations);

    this.params = this._isServer
      ? this.acceptAsServer(configurations)
      : this.acceptAsClient(configurations);

    return this.params;
  }

  /**
   * Releases all resources used by the extension.
   *
   * @public
   */
  cleanup() {
    if (this._inflate) {
      this._inflate.close();
      this._inflate = null;
    }

    if (this._deflate) {
      const callback = this._deflate[kCallback];

      this._deflate.close();
      this._deflate = null;

      if (callback) {
        callback(
          new Error(
            'The deflate stream was closed while data was being processed'
          )
        );
      }
    }
  }

  /**
   *  Accept an extension negotiation offer.
   *
   * @param {Array} offers The extension negotiation offers
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsServer(offers) {
    const opts = this._options;
    const accepted = offers.find((params) => {
      if (
        (opts.serverNoContextTakeover === false &&
          params.server_no_context_takeover) ||
        (params.server_max_window_bits &&
          (opts.serverMaxWindowBits === false ||
            (typeof opts.serverMaxWindowBits === 'number' &&
              opts.serverMaxWindowBits > params.server_max_window_bits))) ||
        (typeof opts.clientMaxWindowBits === 'number' &&
          !params.client_max_window_bits)
      ) {
        return false;
      }

      return true;
    });

    if (!accepted) {
      throw new Error('None of the extension offers can be accepted');
    }

    if (opts.serverNoContextTakeover) {
      accepted.server_no_context_takeover = true;
    }
    if (opts.clientNoContextTakeover) {
      accepted.client_no_context_takeover = true;
    }
    if (typeof opts.serverMaxWindowBits === 'number') {
      accepted.server_max_window_bits = opts.serverMaxWindowBits;
    }
    if (typeof opts.clientMaxWindowBits === 'number') {
      accepted.client_max_window_bits = opts.clientMaxWindowBits;
    } else if (
      accepted.client_max_window_bits === true ||
      opts.clientMaxWindowBits === false
    ) {
      delete accepted.client_max_window_bits;
    }

    return accepted;
  }

  /**
   * Accept the extension negotiation response.
   *
   * @param {Array} response The extension negotiation response
   * @return {Object} Accepted configuration
   * @private
   */
  acceptAsClient(response) {
    const params = response[0];

    if (
      this._options.clientNoContextTakeover === false &&
      params.client_no_context_takeover
    ) {
      throw new Error('Unexpected parameter "client_no_context_takeover"');
    }

    if (!params.client_max_window_bits) {
      if (typeof this._options.clientMaxWindowBits === 'number') {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      }
    } else if (
      this._options.clientMaxWindowBits === false ||
      (typeof this._options.clientMaxWindowBits === 'number' &&
        params.client_max_window_bits > this._options.clientMaxWindowBits)
    ) {
      throw new Error(
        'Unexpected or invalid parameter "client_max_window_bits"'
      );
    }

    return params;
  }

  /**
   * Normalize parameters.
   *
   * @param {Array} configurations The extension negotiation offers/reponse
   * @return {Array} The offers/response with normalized parameters
   * @private
   */
  normalizeParams(configurations) {
    configurations.forEach((params) => {
      Object.keys(params).forEach((key) => {
        let value = params[key];

        if (value.length > 1) {
          throw new Error(`Parameter "${key}" must have only a single value`);
        }

        value = value[0];

        if (key === 'client_max_window_bits') {
          if (value !== true) {
            const num = +value;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value}`
              );
            }
            value = num;
          } else if (!this._isServer) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else if (key === 'server_max_window_bits') {
          const num = +value;
          if (!Number.isInteger(num) || num < 8 || num > 15) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
          value = num;
        } else if (
          key === 'client_no_context_takeover' ||
          key === 'server_no_context_takeover'
        ) {
          if (value !== true) {
            throw new TypeError(
              `Invalid value for parameter "${key}": ${value}`
            );
          }
        } else {
          throw new Error(`Unknown parameter "${key}"`);
        }

        params[key] = value;
      });
    });

    return configurations;
  }

  /**
   * Decompress data. Concurrency limited.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  decompress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._decompress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Compress data. Concurrency limited.
   *
   * @param {Buffer} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  compress(data, fin, callback) {
    zlibLimiter.add((done) => {
      this._compress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Decompress data.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _decompress(data, fin, callback) {
    const endpoint = this._isServer ? 'client' : 'server';

    if (!this._inflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._inflate = zlib.createInflateRaw({
        ...this._options.zlibInflateOptions,
        windowBits
      });
      this._inflate[kPerMessageDeflate] = this;
      this._inflate[kTotalLength] = 0;
      this._inflate[kBuffers] = [];
      this._inflate.on('error', inflateOnError);
      this._inflate.on('data', inflateOnData);
    }

    this._inflate[kCallback] = callback;

    this._inflate.write(data);
    if (fin) this._inflate.write(TRAILER);

    this._inflate.flush(() => {
      const err = this._inflate[kError];

      if (err) {
        this._inflate.close();
        this._inflate = null;
        callback(err);
        return;
      }

      const data = bufferUtil.concat(
        this._inflate[kBuffers],
        this._inflate[kTotalLength]
      );

      if (this._inflate._readableState.endEmitted) {
        this._inflate.close();
        this._inflate = null;
      } else {
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];

        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._inflate.reset();
        }
      }

      callback(null, data);
    });
  }

  /**
   * Compress data.
   *
   * @param {Buffer} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _compress(data, fin, callback) {
    const endpoint = this._isServer ? 'server' : 'client';

    if (!this._deflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits =
        typeof this.params[key] !== 'number'
          ? zlib.Z_DEFAULT_WINDOWBITS
          : this.params[key];

      this._deflate = zlib.createDeflateRaw({
        ...this._options.zlibDeflateOptions,
        windowBits
      });

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      //
      // An `'error'` event is emitted, only on Node.js < 10.0.0, if the
      // `zlib.DeflateRaw` instance is closed while data is being processed.
      // This can happen if `PerMessageDeflate#cleanup()` is called at the wrong
      // time due to an abnormal WebSocket closure.
      //
      this._deflate.on('error', NOOP);
      this._deflate.on('data', deflateOnData);
    }

    this._deflate[kCallback] = callback;

    this._deflate.write(data);
    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
      if (!this._deflate) {
        //
        // The deflate stream was closed while data was being processed.
        //
        return;
      }

      let data = bufferUtil.concat(
        this._deflate[kBuffers],
        this._deflate[kTotalLength]
      );

      if (fin) data = data.slice(0, data.length - 4);

      //
      // Ensure that the callback will not be called again in
      // `PerMessageDeflate#cleanup()`.
      //
      this._deflate[kCallback] = null;

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
        this._deflate.reset();
      }

      callback(null, data);
    });
  }
}

module.exports = PerMessageDeflate;

/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function deflateOnData(chunk) {
  this[kBuffers].push(chunk);
  this[kTotalLength] += chunk.length;
}

/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function inflateOnData(chunk) {
  this[kTotalLength] += chunk.length;

  if (
    this[kPerMessageDeflate]._maxPayload < 1 ||
    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
  ) {
    this[kBuffers].push(chunk);
    return;
  }

  this[kError] = new RangeError('Max payload size exceeded');
  this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
  this[kError][kStatusCode] = 1009;
  this.removeListener('data', inflateOnData);
  this.reset();
}

/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */
function inflateOnError(err) {
  //
  // There is no need to call `Zlib#close()` as the handle is automatically
  // closed when an error is emitted.
  //
  this[kPerMessageDeflate]._inflate = null;
  err[kStatusCode] = 1007;
  this[kCallback](err);
}


/***/ }),

/***/ 79195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Writable } = __webpack_require__(302203);

const PerMessageDeflate = __webpack_require__(776994);
const {
  BINARY_TYPES,
  EMPTY_BUFFER,
  kStatusCode,
  kWebSocket
} = __webpack_require__(243713);
const { concat, toArrayBuffer, unmask } = __webpack_require__(699405);
const { isValidStatusCode, isValidUTF8 } = __webpack_require__(265177);

const GET_INFO = 0;
const GET_PAYLOAD_LENGTH_16 = 1;
const GET_PAYLOAD_LENGTH_64 = 2;
const GET_MASK = 3;
const GET_DATA = 4;
const INFLATING = 5;

/**
 * HyBi Receiver implementation.
 *
 * @extends Writable
 */
class Receiver extends Writable {
  /**
   * Creates a Receiver instance.
   *
   * @param {String} [binaryType=nodebuffer] The type for binary data
   * @param {Object} [extensions] An object containing the negotiated extensions
   * @param {Boolean} [isServer=false] Specifies whether to operate in client or
   *     server mode
   * @param {Number} [maxPayload=0] The maximum allowed message length
   */
  constructor(binaryType, extensions, isServer, maxPayload) {
    super();

    this._binaryType = binaryType || BINARY_TYPES[0];
    this[kWebSocket] = undefined;
    this._extensions = extensions || {};
    this._isServer = !!isServer;
    this._maxPayload = maxPayload | 0;

    this._bufferedBytes = 0;
    this._buffers = [];

    this._compressed = false;
    this._payloadLength = 0;
    this._mask = undefined;
    this._fragmented = 0;
    this._masked = false;
    this._fin = false;
    this._opcode = 0;

    this._totalPayloadLength = 0;
    this._messageLength = 0;
    this._fragments = [];

    this._state = GET_INFO;
    this._loop = false;
  }

  /**
   * Implements `Writable.prototype._write()`.
   *
   * @param {Buffer} chunk The chunk of data to write
   * @param {String} encoding The character encoding of `chunk`
   * @param {Function} cb Callback
   * @private
   */
  _write(chunk, encoding, cb) {
    if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

    this._bufferedBytes += chunk.length;
    this._buffers.push(chunk);
    this.startLoop(cb);
  }

  /**
   * Consumes `n` bytes from the buffered data.
   *
   * @param {Number} n The number of bytes to consume
   * @return {Buffer} The consumed bytes
   * @private
   */
  consume(n) {
    this._bufferedBytes -= n;

    if (n === this._buffers[0].length) return this._buffers.shift();

    if (n < this._buffers[0].length) {
      const buf = this._buffers[0];
      this._buffers[0] = buf.slice(n);
      return buf.slice(0, n);
    }

    const dst = Buffer.allocUnsafe(n);

    do {
      const buf = this._buffers[0];
      const offset = dst.length - n;

      if (n >= buf.length) {
        dst.set(this._buffers.shift(), offset);
      } else {
        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
        this._buffers[0] = buf.slice(n);
      }

      n -= buf.length;
    } while (n > 0);

    return dst;
  }

  /**
   * Starts the parsing loop.
   *
   * @param {Function} cb Callback
   * @private
   */
  startLoop(cb) {
    let err;
    this._loop = true;

    do {
      switch (this._state) {
        case GET_INFO:
          err = this.getInfo();
          break;
        case GET_PAYLOAD_LENGTH_16:
          err = this.getPayloadLength16();
          break;
        case GET_PAYLOAD_LENGTH_64:
          err = this.getPayloadLength64();
          break;
        case GET_MASK:
          this.getMask();
          break;
        case GET_DATA:
          err = this.getData(cb);
          break;
        default:
          // `INFLATING`
          this._loop = false;
          return;
      }
    } while (this._loop);

    cb(err);
  }

  /**
   * Reads the first two bytes of a frame.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getInfo() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    const buf = this.consume(2);

    if ((buf[0] & 0x30) !== 0x00) {
      this._loop = false;
      return error(
        RangeError,
        'RSV2 and RSV3 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_2_3'
      );
    }

    const compressed = (buf[0] & 0x40) === 0x40;

    if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
      this._loop = false;
      return error(
        RangeError,
        'RSV1 must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_RSV_1'
      );
    }

    this._fin = (buf[0] & 0x80) === 0x80;
    this._opcode = buf[0] & 0x0f;
    this._payloadLength = buf[1] & 0x7f;

    if (this._opcode === 0x00) {
      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (!this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          'invalid opcode 0',
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._opcode = this._fragmented;
    } else if (this._opcode === 0x01 || this._opcode === 0x02) {
      if (this._fragmented) {
        this._loop = false;
        return error(
          RangeError,
          `invalid opcode ${this._opcode}`,
          true,
          1002,
          'WS_ERR_INVALID_OPCODE'
        );
      }

      this._compressed = compressed;
    } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
      if (!this._fin) {
        this._loop = false;
        return error(
          RangeError,
          'FIN must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_FIN'
        );
      }

      if (compressed) {
        this._loop = false;
        return error(
          RangeError,
          'RSV1 must be clear',
          true,
          1002,
          'WS_ERR_UNEXPECTED_RSV_1'
        );
      }

      if (this._payloadLength > 0x7d) {
        this._loop = false;
        return error(
          RangeError,
          `invalid payload length ${this._payloadLength}`,
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      }
    } else {
      this._loop = false;
      return error(
        RangeError,
        `invalid opcode ${this._opcode}`,
        true,
        1002,
        'WS_ERR_INVALID_OPCODE'
      );
    }

    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
    this._masked = (buf[1] & 0x80) === 0x80;

    if (this._isServer) {
      if (!this._masked) {
        this._loop = false;
        return error(
          RangeError,
          'MASK must be set',
          true,
          1002,
          'WS_ERR_EXPECTED_MASK'
        );
      }
    } else if (this._masked) {
      this._loop = false;
      return error(
        RangeError,
        'MASK must be clear',
        true,
        1002,
        'WS_ERR_UNEXPECTED_MASK'
      );
    }

    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
    else return this.haveLength();
  }

  /**
   * Gets extended payload length (7+16).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength16() {
    if (this._bufferedBytes < 2) {
      this._loop = false;
      return;
    }

    this._payloadLength = this.consume(2).readUInt16BE(0);
    return this.haveLength();
  }

  /**
   * Gets extended payload length (7+64).
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  getPayloadLength64() {
    if (this._bufferedBytes < 8) {
      this._loop = false;
      return;
    }

    const buf = this.consume(8);
    const num = buf.readUInt32BE(0);

    //
    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
    // if payload length is greater than this number.
    //
    if (num > Math.pow(2, 53 - 32) - 1) {
      this._loop = false;
      return error(
        RangeError,
        'Unsupported WebSocket frame: payload length > 2^53 - 1',
        false,
        1009,
        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
      );
    }

    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
    return this.haveLength();
  }

  /**
   * Payload length has been read.
   *
   * @return {(RangeError|undefined)} A possible error
   * @private
   */
  haveLength() {
    if (this._payloadLength && this._opcode < 0x08) {
      this._totalPayloadLength += this._payloadLength;
      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
        this._loop = false;
        return error(
          RangeError,
          'Max payload size exceeded',
          false,
          1009,
          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
        );
      }
    }

    if (this._masked) this._state = GET_MASK;
    else this._state = GET_DATA;
  }

  /**
   * Reads mask bytes.
   *
   * @private
   */
  getMask() {
    if (this._bufferedBytes < 4) {
      this._loop = false;
      return;
    }

    this._mask = this.consume(4);
    this._state = GET_DATA;
  }

  /**
   * Reads data bytes.
   *
   * @param {Function} cb Callback
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  getData(cb) {
    let data = EMPTY_BUFFER;

    if (this._payloadLength) {
      if (this._bufferedBytes < this._payloadLength) {
        this._loop = false;
        return;
      }

      data = this.consume(this._payloadLength);
      if (this._masked) unmask(data, this._mask);
    }

    if (this._opcode > 0x07) return this.controlMessage(data);

    if (this._compressed) {
      this._state = INFLATING;
      this.decompress(data, cb);
      return;
    }

    if (data.length) {
      //
      // This message is not compressed so its lenght is the sum of the payload
      // length of all fragments.
      //
      this._messageLength = this._totalPayloadLength;
      this._fragments.push(data);
    }

    return this.dataMessage();
  }

  /**
   * Decompresses data.
   *
   * @param {Buffer} data Compressed data
   * @param {Function} cb Callback
   * @private
   */
  decompress(data, cb) {
    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
      if (err) return cb(err);

      if (buf.length) {
        this._messageLength += buf.length;
        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
          return cb(
            error(
              RangeError,
              'Max payload size exceeded',
              false,
              1009,
              'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
            )
          );
        }

        this._fragments.push(buf);
      }

      const er = this.dataMessage();
      if (er) return cb(er);

      this.startLoop(cb);
    });
  }

  /**
   * Handles a data message.
   *
   * @return {(Error|undefined)} A possible error
   * @private
   */
  dataMessage() {
    if (this._fin) {
      const messageLength = this._messageLength;
      const fragments = this._fragments;

      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragmented = 0;
      this._fragments = [];

      if (this._opcode === 2) {
        let data;

        if (this._binaryType === 'nodebuffer') {
          data = concat(fragments, messageLength);
        } else if (this._binaryType === 'arraybuffer') {
          data = toArrayBuffer(concat(fragments, messageLength));
        } else {
          data = fragments;
        }

        this.emit('message', data);
      } else {
        const buf = concat(fragments, messageLength);

        if (!isValidUTF8(buf)) {
          this._loop = false;
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('message', buf.toString());
      }
    }

    this._state = GET_INFO;
  }

  /**
   * Handles a control message.
   *
   * @param {Buffer} data Data to handle
   * @return {(Error|RangeError|undefined)} A possible error
   * @private
   */
  controlMessage(data) {
    if (this._opcode === 0x08) {
      this._loop = false;

      if (data.length === 0) {
        this.emit('conclude', 1005, '');
        this.end();
      } else if (data.length === 1) {
        return error(
          RangeError,
          'invalid payload length 1',
          true,
          1002,
          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
        );
      } else {
        const code = data.readUInt16BE(0);

        if (!isValidStatusCode(code)) {
          return error(
            RangeError,
            `invalid status code ${code}`,
            true,
            1002,
            'WS_ERR_INVALID_CLOSE_CODE'
          );
        }

        const buf = data.slice(2);

        if (!isValidUTF8(buf)) {
          return error(
            Error,
            'invalid UTF-8 sequence',
            true,
            1007,
            'WS_ERR_INVALID_UTF8'
          );
        }

        this.emit('conclude', code, buf.toString());
        this.end();
      }
    } else if (this._opcode === 0x09) {
      this.emit('ping', data);
    } else {
      this.emit('pong', data);
    }

    this._state = GET_INFO;
  }
}

module.exports = Receiver;

/**
 * Builds an error object.
 *
 * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
 * @param {String} message The error message
 * @param {Boolean} prefix Specifies whether or not to add a default prefix to
 *     `message`
 * @param {Number} statusCode The status code
 * @param {String} errorCode The exposed error code
 * @return {(Error|RangeError)} The error
 * @private
 */
function error(ErrorCtor, message, prefix, statusCode, errorCode) {
  const err = new ErrorCtor(
    prefix ? `Invalid WebSocket frame: ${message}` : message
  );

  Error.captureStackTrace(err, error);
  err.code = errorCode;
  err[kStatusCode] = statusCode;
  return err;
}


/***/ }),

/***/ 582055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls$" }] */



const net = __webpack_require__(969278);
const tls = __webpack_require__(564756);
const { randomFillSync } = __webpack_require__(776982);

const PerMessageDeflate = __webpack_require__(776994);
const { EMPTY_BUFFER } = __webpack_require__(243713);
const { isValidStatusCode } = __webpack_require__(265177);
const { mask: applyMask, toBuffer } = __webpack_require__(699405);

const mask = Buffer.alloc(4);

/**
 * HyBi Sender implementation.
 */
class Sender {
  /**
   * Creates a Sender instance.
   *
   * @param {(net.Socket|tls.Socket)} socket The connection socket
   * @param {Object} [extensions] An object containing the negotiated extensions
   */
  constructor(socket, extensions) {
    this._extensions = extensions || {};
    this._socket = socket;

    this._firstFragment = true;
    this._compress = false;

    this._bufferedBytes = 0;
    this._deflating = false;
    this._queue = [];
  }

  /**
   * Frames a piece of data according to the HyBi WebSocket protocol.
   *
   * @param {Buffer} data The data to frame
   * @param {Object} options Options object
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @return {Buffer[]} The framed data as a list of `Buffer` instances
   * @public
   */
  static frame(data, options) {
    const merge = options.mask && options.readOnly;
    let offset = options.mask ? 6 : 2;
    let payloadLength = data.length;

    if (data.length >= 65536) {
      offset += 8;
      payloadLength = 127;
    } else if (data.length > 125) {
      offset += 2;
      payloadLength = 126;
    }

    const target = Buffer.allocUnsafe(merge ? data.length + offset : offset);

    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
    if (options.rsv1) target[0] |= 0x40;

    target[1] = payloadLength;

    if (payloadLength === 126) {
      target.writeUInt16BE(data.length, 2);
    } else if (payloadLength === 127) {
      target.writeUInt32BE(0, 2);
      target.writeUInt32BE(data.length, 6);
    }

    if (!options.mask) return [target, data];

    randomFillSync(mask, 0, 4);

    target[1] |= 0x80;
    target[offset - 4] = mask[0];
    target[offset - 3] = mask[1];
    target[offset - 2] = mask[2];
    target[offset - 1] = mask[3];

    if (merge) {
      applyMask(data, mask, target, offset, data.length);
      return [target];
    }

    applyMask(data, mask, data, 0, data.length);
    return [target, data];
  }

  /**
   * Sends a close message to the other peer.
   *
   * @param {Number} [code] The status code component of the body
   * @param {String} [data] The message component of the body
   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
   * @param {Function} [cb] Callback
   * @public
   */
  close(code, data, mask, cb) {
    let buf;

    if (code === undefined) {
      buf = EMPTY_BUFFER;
    } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
      throw new TypeError('First argument must be a valid error code number');
    } else if (data === undefined || data === '') {
      buf = Buffer.allocUnsafe(2);
      buf.writeUInt16BE(code, 0);
    } else {
      const length = Buffer.byteLength(data);

      if (length > 123) {
        throw new RangeError('The message must not be greater than 123 bytes');
      }

      buf = Buffer.allocUnsafe(2 + length);
      buf.writeUInt16BE(code, 0);
      buf.write(data, 2);
    }

    if (this._deflating) {
      this.enqueue([this.doClose, buf, mask, cb]);
    } else {
      this.doClose(buf, mask, cb);
    }
  }

  /**
   * Frames and sends a close message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @private
   */
  doClose(data, mask, cb) {
    this.sendFrame(
      Sender.frame(data, {
        fin: true,
        rsv1: false,
        opcode: 0x08,
        mask,
        readOnly: false
      }),
      cb
    );
  }

  /**
   * Sends a ping message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  ping(data, mask, cb) {
    const buf = toBuffer(data);

    if (buf.length > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    if (this._deflating) {
      this.enqueue([this.doPing, buf, mask, toBuffer.readOnly, cb]);
    } else {
      this.doPing(buf, mask, toBuffer.readOnly, cb);
    }
  }

  /**
   * Frames and sends a ping message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
   * @param {Function} [cb] Callback
   * @private
   */
  doPing(data, mask, readOnly, cb) {
    this.sendFrame(
      Sender.frame(data, {
        fin: true,
        rsv1: false,
        opcode: 0x09,
        mask,
        readOnly
      }),
      cb
    );
  }

  /**
   * Sends a pong message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback
   * @public
   */
  pong(data, mask, cb) {
    const buf = toBuffer(data);

    if (buf.length > 125) {
      throw new RangeError('The data size must not be greater than 125 bytes');
    }

    if (this._deflating) {
      this.enqueue([this.doPong, buf, mask, toBuffer.readOnly, cb]);
    } else {
      this.doPong(buf, mask, toBuffer.readOnly, cb);
    }
  }

  /**
   * Frames and sends a pong message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
   * @param {Boolean} [readOnly=false] Specifies whether `data` can be modified
   * @param {Function} [cb] Callback
   * @private
   */
  doPong(data, mask, readOnly, cb) {
    this.sendFrame(
      Sender.frame(data, {
        fin: true,
        rsv1: false,
        opcode: 0x0a,
        mask,
        readOnly
      }),
      cb
    );
  }

  /**
   * Sends a data message to the other peer.
   *
   * @param {*} data The message to send
   * @param {Object} options Options object
   * @param {Boolean} [options.compress=false] Specifies whether or not to
   *     compress `data`
   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
   *     or text
   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Function} [cb] Callback
   * @public
   */
  send(data, options, cb) {
    const buf = toBuffer(data);
    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
    let opcode = options.binary ? 2 : 1;
    let rsv1 = options.compress;

    if (this._firstFragment) {
      this._firstFragment = false;
      if (rsv1 && perMessageDeflate) {
        rsv1 = buf.length >= perMessageDeflate._threshold;
      }
      this._compress = rsv1;
    } else {
      rsv1 = false;
      opcode = 0;
    }

    if (options.fin) this._firstFragment = true;

    if (perMessageDeflate) {
      const opts = {
        fin: options.fin,
        rsv1,
        opcode,
        mask: options.mask,
        readOnly: toBuffer.readOnly
      };

      if (this._deflating) {
        this.enqueue([this.dispatch, buf, this._compress, opts, cb]);
      } else {
        this.dispatch(buf, this._compress, opts, cb);
      }
    } else {
      this.sendFrame(
        Sender.frame(buf, {
          fin: options.fin,
          rsv1: false,
          opcode,
          mask: options.mask,
          readOnly: toBuffer.readOnly
        }),
        cb
      );
    }
  }

  /**
   * Dispatches a data message.
   *
   * @param {Buffer} data The message to send
   * @param {Boolean} [compress=false] Specifies whether or not to compress
   *     `data`
   * @param {Object} options Options object
   * @param {Number} options.opcode The opcode
   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
   *     modified
   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
   *     FIN bit
   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
   *     `data`
   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
   *     RSV1 bit
   * @param {Function} [cb] Callback
   * @private
   */
  dispatch(data, compress, options, cb) {
    if (!compress) {
      this.sendFrame(Sender.frame(data, options), cb);
      return;
    }

    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

    this._bufferedBytes += data.length;
    this._deflating = true;
    perMessageDeflate.compress(data, options.fin, (_, buf) => {
      if (this._socket.destroyed) {
        const err = new Error(
          'The socket was closed while data was being compressed'
        );

        if (typeof cb === 'function') cb(err);

        for (let i = 0; i < this._queue.length; i++) {
          const callback = this._queue[i][4];

          if (typeof callback === 'function') callback(err);
        }

        return;
      }

      this._bufferedBytes -= data.length;
      this._deflating = false;
      options.readOnly = false;
      this.sendFrame(Sender.frame(buf, options), cb);
      this.dequeue();
    });
  }

  /**
   * Executes queued send operations.
   *
   * @private
   */
  dequeue() {
    while (!this._deflating && this._queue.length) {
      const params = this._queue.shift();

      this._bufferedBytes -= params[1].length;
      Reflect.apply(params[0], this, params.slice(1));
    }
  }

  /**
   * Enqueues a send operation.
   *
   * @param {Array} params Send operation parameters.
   * @private
   */
  enqueue(params) {
    this._bufferedBytes += params[1].length;
    this._queue.push(params);
  }

  /**
   * Sends a frame.
   *
   * @param {Buffer[]} list The frame to send
   * @param {Function} [cb] Callback
   * @private
   */
  sendFrame(list, cb) {
    if (list.length === 2) {
      this._socket.cork();
      this._socket.write(list[0]);
      this._socket.write(list[1], cb);
      this._socket.uncork();
    } else {
      this._socket.write(list[0], cb);
    }
  }
}

module.exports = Sender;


/***/ }),

/***/ 774722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Duplex } = __webpack_require__(302203);

/**
 * Emits the `'close'` event on a stream.
 *
 * @param {Duplex} stream The stream.
 * @private
 */
function emitClose(stream) {
  stream.emit('close');
}

/**
 * The listener of the `'end'` event.
 *
 * @private
 */
function duplexOnEnd() {
  if (!this.destroyed && this._writableState.finished) {
    this.destroy();
  }
}

/**
 * The listener of the `'error'` event.
 *
 * @param {Error} err The error
 * @private
 */
function duplexOnError(err) {
  this.removeListener('error', duplexOnError);
  this.destroy();
  if (this.listenerCount('error') === 0) {
    // Do not suppress the throwing behavior.
    this.emit('error', err);
  }
}

/**
 * Wraps a `WebSocket` in a duplex stream.
 *
 * @param {WebSocket} ws The `WebSocket` to wrap
 * @param {Object} [options] The options for the `Duplex` constructor
 * @return {Duplex} The duplex stream
 * @public
 */
function createWebSocketStream(ws, options) {
  let resumeOnReceiverDrain = true;
  let terminateOnDestroy = true;

  function receiverOnDrain() {
    if (resumeOnReceiverDrain) ws._socket.resume();
  }

  if (ws.readyState === ws.CONNECTING) {
    ws.once('open', function open() {
      ws._receiver.removeAllListeners('drain');
      ws._receiver.on('drain', receiverOnDrain);
    });
  } else {
    ws._receiver.removeAllListeners('drain');
    ws._receiver.on('drain', receiverOnDrain);
  }

  const duplex = new Duplex({
    ...options,
    autoDestroy: false,
    emitClose: false,
    objectMode: false,
    writableObjectMode: false
  });

  ws.on('message', function message(msg) {
    if (!duplex.push(msg)) {
      resumeOnReceiverDrain = false;
      ws._socket.pause();
    }
  });

  ws.once('error', function error(err) {
    if (duplex.destroyed) return;

    // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
    //
    // - If the `'error'` event is emitted before the `'open'` event, then
    //   `ws.terminate()` is a noop as no socket is assigned.
    // - Otherwise, the error is re-emitted by the listener of the `'error'`
    //   event of the `Receiver` object. The listener already closes the
    //   connection by calling `ws.close()`. This allows a close frame to be
    //   sent to the other peer. If `ws.terminate()` is called right after this,
    //   then the close frame might not be sent.
    terminateOnDestroy = false;
    duplex.destroy(err);
  });

  ws.once('close', function close() {
    if (duplex.destroyed) return;

    duplex.push(null);
  });

  duplex._destroy = function (err, callback) {
    if (ws.readyState === ws.CLOSED) {
      callback(err);
      process.nextTick(emitClose, duplex);
      return;
    }

    let called = false;

    ws.once('error', function error(err) {
      called = true;
      callback(err);
    });

    ws.once('close', function close() {
      if (!called) callback(err);
      process.nextTick(emitClose, duplex);
    });

    if (terminateOnDestroy) ws.terminate();
  };

  duplex._final = function (callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._final(callback);
      });
      return;
    }

    // If the value of the `_socket` property is `null` it means that `ws` is a
    // client websocket and the handshake failed. In fact, when this happens, a
    // socket is never assigned to the websocket. Wait for the `'error'` event
    // that will be emitted by the websocket.
    if (ws._socket === null) return;

    if (ws._socket._writableState.finished) {
      callback();
      if (duplex._readableState.endEmitted) duplex.destroy();
    } else {
      ws._socket.once('finish', function finish() {
        // `duplex` is not destroyed here because the `'end'` event will be
        // emitted on `duplex` after this `'finish'` event. The EOF signaling
        // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
        callback();
      });
      ws.close();
    }
  };

  duplex._read = function () {
    if (
      (ws.readyState === ws.OPEN || ws.readyState === ws.CLOSING) &&
      !resumeOnReceiverDrain
    ) {
      resumeOnReceiverDrain = true;
      if (!ws._receiver._writableState.needDrain) ws._socket.resume();
    }
  };

  duplex._write = function (chunk, encoding, callback) {
    if (ws.readyState === ws.CONNECTING) {
      ws.once('open', function open() {
        duplex._write(chunk, encoding, callback);
      });
      return;
    }

    ws.send(chunk, callback);
  };

  duplex.on('end', duplexOnEnd);
  duplex.on('error', duplexOnError);
  return duplex;
}

module.exports = createWebSocketStream;


/***/ }),

/***/ 265177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * Checks if a status code is allowed in a close frame.
 *
 * @param {Number} code The status code
 * @return {Boolean} `true` if the status code is valid, else `false`
 * @public
 */
function isValidStatusCode(code) {
  return (
    (code >= 1000 &&
      code <= 1014 &&
      code !== 1004 &&
      code !== 1005 &&
      code !== 1006) ||
    (code >= 3000 && code <= 4999)
  );
}

/**
 * Checks if a given buffer contains only correct UTF-8.
 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
 * Markus Kuhn.
 *
 * @param {Buffer} buf The buffer to check
 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
 * @public
 */
function _isValidUTF8(buf) {
  const len = buf.length;
  let i = 0;

  while (i < len) {
    if ((buf[i] & 0x80) === 0) {
      // 0xxxxxxx
      i++;
    } else if ((buf[i] & 0xe0) === 0xc0) {
      // 110xxxxx 10xxxxxx
      if (
        i + 1 === len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i] & 0xfe) === 0xc0 // Overlong
      ) {
        return false;
      }

      i += 2;
    } else if ((buf[i] & 0xf0) === 0xe0) {
      // 1110xxxx 10xxxxxx 10xxxxxx
      if (
        i + 2 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
        (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
      ) {
        return false;
      }

      i += 3;
    } else if ((buf[i] & 0xf8) === 0xf0) {
      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      if (
        i + 3 >= len ||
        (buf[i + 1] & 0xc0) !== 0x80 ||
        (buf[i + 2] & 0xc0) !== 0x80 ||
        (buf[i + 3] & 0xc0) !== 0x80 ||
        (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
        (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
        buf[i] > 0xf4 // > U+10FFFF
      ) {
        return false;
      }

      i += 4;
    } else {
      return false;
    }
  }

  return true;
}

try {
  let isValidUTF8 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'utf-8-validate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  /* istanbul ignore if */
  if (typeof isValidUTF8 === 'object') {
    isValidUTF8 = isValidUTF8.Validation.isValidUTF8; // utf-8-validate@<3.0.0
  }

  module.exports = {
    isValidStatusCode,
    isValidUTF8(buf) {
      return buf.length < 150 ? _isValidUTF8(buf) : isValidUTF8(buf);
    }
  };
} catch (e) /* istanbul ignore next */ {
  module.exports = {
    isValidStatusCode,
    isValidUTF8: _isValidUTF8
  };
}


/***/ }),

/***/ 510463:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^net|tls|https$" }] */



const EventEmitter = __webpack_require__(24434);
const http = __webpack_require__(958611);
const https = __webpack_require__(665692);
const net = __webpack_require__(969278);
const tls = __webpack_require__(564756);
const { createHash } = __webpack_require__(776982);

const PerMessageDeflate = __webpack_require__(776994);
const WebSocket = __webpack_require__(400315);
const { format, parse } = __webpack_require__(101177);
const { GUID, kWebSocket } = __webpack_require__(243713);

const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

const RUNNING = 0;
const CLOSING = 1;
const CLOSED = 2;

/**
 * Class representing a WebSocket server.
 *
 * @extends EventEmitter
 */
class WebSocketServer extends EventEmitter {
  /**
   * Create a `WebSocketServer` instance.
   *
   * @param {Object} options Configuration options
   * @param {Number} [options.backlog=511] The maximum length of the queue of
   *     pending connections
   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
   *     track clients
   * @param {Function} [options.handleProtocols] A hook to handle protocols
   * @param {String} [options.host] The hostname where to bind the server
   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
   *     size
   * @param {Boolean} [options.noServer=false] Enable no server mode
   * @param {String} [options.path] Accept only connections matching this path
   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
   *     permessage-deflate
   * @param {Number} [options.port] The port where to bind the server
   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
   *     server to use
   * @param {Function} [options.verifyClient] A hook to reject connections
   * @param {Function} [callback] A listener for the `listening` event
   */
  constructor(options, callback) {
    super();

    options = {
      maxPayload: 100 * 1024 * 1024,
      perMessageDeflate: false,
      handleProtocols: null,
      clientTracking: true,
      verifyClient: null,
      noServer: false,
      backlog: null, // use default (511 as implemented in net.js)
      server: null,
      host: null,
      path: null,
      port: null,
      ...options
    };

    if (
      (options.port == null && !options.server && !options.noServer) ||
      (options.port != null && (options.server || options.noServer)) ||
      (options.server && options.noServer)
    ) {
      throw new TypeError(
        'One and only one of the "port", "server", or "noServer" options ' +
          'must be specified'
      );
    }

    if (options.port != null) {
      this._server = http.createServer((req, res) => {
        const body = http.STATUS_CODES[426];

        res.writeHead(426, {
          'Content-Length': body.length,
          'Content-Type': 'text/plain'
        });
        res.end(body);
      });
      this._server.listen(
        options.port,
        options.host,
        options.backlog,
        callback
      );
    } else if (options.server) {
      this._server = options.server;
    }

    if (this._server) {
      const emitConnection = this.emit.bind(this, 'connection');

      this._removeListeners = addListeners(this._server, {
        listening: this.emit.bind(this, 'listening'),
        error: this.emit.bind(this, 'error'),
        upgrade: (req, socket, head) => {
          this.handleUpgrade(req, socket, head, emitConnection);
        }
      });
    }

    if (options.perMessageDeflate === true) options.perMessageDeflate = {};
    if (options.clientTracking) this.clients = new Set();
    this.options = options;
    this._state = RUNNING;
  }

  /**
   * Returns the bound address, the address family name, and port of the server
   * as reported by the operating system if listening on an IP socket.
   * If the server is listening on a pipe or UNIX domain socket, the name is
   * returned as a string.
   *
   * @return {(Object|String|null)} The address of the server
   * @public
   */
  address() {
    if (this.options.noServer) {
      throw new Error('The server is operating in "noServer" mode');
    }

    if (!this._server) return null;
    return this._server.address();
  }

  /**
   * Close the server.
   *
   * @param {Function} [cb] Callback
   * @public
   */
  close(cb) {
    if (cb) this.once('close', cb);

    if (this._state === CLOSED) {
      process.nextTick(emitClose, this);
      return;
    }

    if (this._state === CLOSING) return;
    this._state = CLOSING;

    //
    // Terminate all associated clients.
    //
    if (this.clients) {
      for (const client of this.clients) client.terminate();
    }

    const server = this._server;

    if (server) {
      this._removeListeners();
      this._removeListeners = this._server = null;

      //
      // Close the http server if it was internally created.
      //
      if (this.options.port != null) {
        server.close(emitClose.bind(undefined, this));
        return;
      }
    }

    process.nextTick(emitClose, this);
  }

  /**
   * See if a given request should be handled by this server instance.
   *
   * @param {http.IncomingMessage} req Request object to inspect
   * @return {Boolean} `true` if the request is valid, else `false`
   * @public
   */
  shouldHandle(req) {
    if (this.options.path) {
      const index = req.url.indexOf('?');
      const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

      if (pathname !== this.options.path) return false;
    }

    return true;
  }

  /**
   * Handle a HTTP Upgrade request.
   *
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @public
   */
  handleUpgrade(req, socket, head, cb) {
    socket.on('error', socketOnError);

    const key =
      req.headers['sec-websocket-key'] !== undefined
        ? req.headers['sec-websocket-key'].trim()
        : false;
    const upgrade = req.headers.upgrade;
    const version = +req.headers['sec-websocket-version'];
    const extensions = {};

    if (
      req.method !== 'GET' ||
      upgrade === undefined ||
      upgrade.toLowerCase() !== 'websocket' ||
      !key ||
      !keyRegex.test(key) ||
      (version !== 8 && version !== 13) ||
      !this.shouldHandle(req)
    ) {
      return abortHandshake(socket, 400);
    }

    if (this.options.perMessageDeflate) {
      const perMessageDeflate = new PerMessageDeflate(
        this.options.perMessageDeflate,
        true,
        this.options.maxPayload
      );

      try {
        const offers = parse(req.headers['sec-websocket-extensions']);

        if (offers[PerMessageDeflate.extensionName]) {
          perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
          extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
      } catch (err) {
        return abortHandshake(socket, 400);
      }
    }

    //
    // Optionally call external client verification handler.
    //
    if (this.options.verifyClient) {
      const info = {
        origin:
          req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
        secure: !!(req.socket.authorized || req.socket.encrypted),
        req
      };

      if (this.options.verifyClient.length === 2) {
        this.options.verifyClient(info, (verified, code, message, headers) => {
          if (!verified) {
            return abortHandshake(socket, code || 401, message, headers);
          }

          this.completeUpgrade(key, extensions, req, socket, head, cb);
        });
        return;
      }

      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
    }

    this.completeUpgrade(key, extensions, req, socket, head, cb);
  }

  /**
   * Upgrade the connection to WebSocket.
   *
   * @param {String} key The value of the `Sec-WebSocket-Key` header
   * @param {Object} extensions The accepted extensions
   * @param {http.IncomingMessage} req The request object
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Function} cb Callback
   * @throws {Error} If called more than once with the same socket
   * @private
   */
  completeUpgrade(key, extensions, req, socket, head, cb) {
    //
    // Destroy the socket if the client has already sent a FIN packet.
    //
    if (!socket.readable || !socket.writable) return socket.destroy();

    if (socket[kWebSocket]) {
      throw new Error(
        'server.handleUpgrade() was called more than once with the same ' +
          'socket, possibly due to a misconfiguration'
      );
    }

    if (this._state > RUNNING) return abortHandshake(socket, 503);

    const digest = createHash('sha1')
      .update(key + GUID)
      .digest('base64');

    const headers = [
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      `Sec-WebSocket-Accept: ${digest}`
    ];

    const ws = new WebSocket(null);
    let protocol = req.headers['sec-websocket-protocol'];

    if (protocol) {
      protocol = protocol.split(',').map(trim);

      //
      // Optionally call external protocol selection handler.
      //
      if (this.options.handleProtocols) {
        protocol = this.options.handleProtocols(protocol, req);
      } else {
        protocol = protocol[0];
      }

      if (protocol) {
        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
        ws._protocol = protocol;
      }
    }

    if (extensions[PerMessageDeflate.extensionName]) {
      const params = extensions[PerMessageDeflate.extensionName].params;
      const value = format({
        [PerMessageDeflate.extensionName]: [params]
      });
      headers.push(`Sec-WebSocket-Extensions: ${value}`);
      ws._extensions = extensions;
    }

    //
    // Allow external modification/inspection of handshake headers.
    //
    this.emit('headers', headers, req);

    socket.write(headers.concat('\r\n').join('\r\n'));
    socket.removeListener('error', socketOnError);

    ws.setSocket(socket, head, this.options.maxPayload);

    if (this.clients) {
      this.clients.add(ws);
      ws.on('close', () => this.clients.delete(ws));
    }

    cb(ws, req);
  }
}

module.exports = WebSocketServer;

/**
 * Add event listeners on an `EventEmitter` using a map of <event, listener>
 * pairs.
 *
 * @param {EventEmitter} server The event emitter
 * @param {Object.<String, Function>} map The listeners to add
 * @return {Function} A function that will remove the added listeners when
 *     called
 * @private
 */
function addListeners(server, map) {
  for (const event of Object.keys(map)) server.on(event, map[event]);

  return function removeListeners() {
    for (const event of Object.keys(map)) {
      server.removeListener(event, map[event]);
    }
  };
}

/**
 * Emit a `'close'` event on an `EventEmitter`.
 *
 * @param {EventEmitter} server The event emitter
 * @private
 */
function emitClose(server) {
  server._state = CLOSED;
  server.emit('close');
}

/**
 * Handle premature socket errors.
 *
 * @private
 */
function socketOnError() {
  this.destroy();
}

/**
 * Close the connection when preconditions are not fulfilled.
 *
 * @param {(net.Socket|tls.Socket)} socket The socket of the upgrade request
 * @param {Number} code The HTTP response status code
 * @param {String} [message] The HTTP response body
 * @param {Object} [headers] Additional HTTP response headers
 * @private
 */
function abortHandshake(socket, code, message, headers) {
  if (socket.writable) {
    message = message || http.STATUS_CODES[code];
    headers = {
      Connection: 'close',
      'Content-Type': 'text/html',
      'Content-Length': Buffer.byteLength(message),
      ...headers
    };

    socket.write(
      `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` +
        Object.keys(headers)
          .map((h) => `${h}: ${headers[h]}`)
          .join('\r\n') +
        '\r\n\r\n' +
        message
    );
  }

  socket.removeListener('error', socketOnError);
  socket.destroy();
}

/**
 * Remove whitespace characters from both ends of a string.
 *
 * @param {String} str The string
 * @return {String} A new string representing `str` stripped of whitespace
 *     characters from both its beginning and end
 * @private
 */
function trim(str) {
  return str.trim();
}


/***/ }),

/***/ 400315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Readable$" }] */



const EventEmitter = __webpack_require__(24434);
const https = __webpack_require__(665692);
const http = __webpack_require__(958611);
const net = __webpack_require__(969278);
const tls = __webpack_require__(564756);
const { randomBytes, createHash } = __webpack_require__(776982);
const { Readable } = __webpack_require__(302203);
const { URL } = __webpack_require__(187016);

const PerMessageDeflate = __webpack_require__(776994);
const Receiver = __webpack_require__(79195);
const Sender = __webpack_require__(582055);
const {
  BINARY_TYPES,
  EMPTY_BUFFER,
  GUID,
  kStatusCode,
  kWebSocket,
  NOOP
} = __webpack_require__(243713);
const { addEventListener, removeEventListener } = __webpack_require__(59360);
const { format, parse } = __webpack_require__(101177);
const { toBuffer } = __webpack_require__(699405);

const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
const protocolVersions = [8, 13];
const closeTimeout = 30 * 1000;

/**
 * Class representing a WebSocket.
 *
 * @extends EventEmitter
 */
class WebSocket extends EventEmitter {
  /**
   * Create a new `WebSocket`.
   *
   * @param {(String|URL)} address The URL to which to connect
   * @param {(String|String[])} [protocols] The subprotocols
   * @param {Object} [options] Connection options
   */
  constructor(address, protocols, options) {
    super();

    this._binaryType = BINARY_TYPES[0];
    this._closeCode = 1006;
    this._closeFrameReceived = false;
    this._closeFrameSent = false;
    this._closeMessage = '';
    this._closeTimer = null;
    this._extensions = {};
    this._protocol = '';
    this._readyState = WebSocket.CONNECTING;
    this._receiver = null;
    this._sender = null;
    this._socket = null;

    if (address !== null) {
      this._bufferedAmount = 0;
      this._isServer = false;
      this._redirects = 0;

      if (Array.isArray(protocols)) {
        protocols = protocols.join(', ');
      } else if (typeof protocols === 'object' && protocols !== null) {
        options = protocols;
        protocols = undefined;
      }

      initAsClient(this, address, protocols, options);
    } else {
      this._isServer = true;
    }
  }

  /**
   * This deviates from the WHATWG interface since ws doesn't support the
   * required default "blob" type (instead we define a custom "nodebuffer"
   * type).
   *
   * @type {String}
   */
  get binaryType() {
    return this._binaryType;
  }

  set binaryType(type) {
    if (!BINARY_TYPES.includes(type)) return;

    this._binaryType = type;

    //
    // Allow to change `binaryType` on the fly.
    //
    if (this._receiver) this._receiver._binaryType = type;
  }

  /**
   * @type {Number}
   */
  get bufferedAmount() {
    if (!this._socket) return this._bufferedAmount;

    return this._socket._writableState.length + this._sender._bufferedBytes;
  }

  /**
   * @type {String}
   */
  get extensions() {
    return Object.keys(this._extensions).join();
  }

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onclose() {
    return undefined;
  }

  /* istanbul ignore next */
  set onclose(listener) {}

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onerror() {
    return undefined;
  }

  /* istanbul ignore next */
  set onerror(listener) {}

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onopen() {
    return undefined;
  }

  /* istanbul ignore next */
  set onopen(listener) {}

  /**
   * @type {Function}
   */
  /* istanbul ignore next */
  get onmessage() {
    return undefined;
  }

  /* istanbul ignore next */
  set onmessage(listener) {}

  /**
   * @type {String}
   */
  get protocol() {
    return this._protocol;
  }

  /**
   * @type {Number}
   */
  get readyState() {
    return this._readyState;
  }

  /**
   * @type {String}
   */
  get url() {
    return this._url;
  }

  /**
   * Set up the socket and the internal resources.
   *
   * @param {(net.Socket|tls.Socket)} socket The network socket between the
   *     server and client
   * @param {Buffer} head The first packet of the upgraded stream
   * @param {Number} [maxPayload=0] The maximum allowed message size
   * @private
   */
  setSocket(socket, head, maxPayload) {
    const receiver = new Receiver(
      this.binaryType,
      this._extensions,
      this._isServer,
      maxPayload
    );

    this._sender = new Sender(socket, this._extensions);
    this._receiver = receiver;
    this._socket = socket;

    receiver[kWebSocket] = this;
    socket[kWebSocket] = this;

    receiver.on('conclude', receiverOnConclude);
    receiver.on('drain', receiverOnDrain);
    receiver.on('error', receiverOnError);
    receiver.on('message', receiverOnMessage);
    receiver.on('ping', receiverOnPing);
    receiver.on('pong', receiverOnPong);

    socket.setTimeout(0);
    socket.setNoDelay();

    if (head.length > 0) socket.unshift(head);

    socket.on('close', socketOnClose);
    socket.on('data', socketOnData);
    socket.on('end', socketOnEnd);
    socket.on('error', socketOnError);

    this._readyState = WebSocket.OPEN;
    this.emit('open');
  }

  /**
   * Emit the `'close'` event.
   *
   * @private
   */
  emitClose() {
    if (!this._socket) {
      this._readyState = WebSocket.CLOSED;
      this.emit('close', this._closeCode, this._closeMessage);
      return;
    }

    if (this._extensions[PerMessageDeflate.extensionName]) {
      this._extensions[PerMessageDeflate.extensionName].cleanup();
    }

    this._receiver.removeAllListeners();
    this._readyState = WebSocket.CLOSED;
    this.emit('close', this._closeCode, this._closeMessage);
  }

  /**
   * Start a closing handshake.
   *
   *          +----------+   +-----------+   +----------+
   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
   *    |     +----------+   +-----------+   +----------+     |
   *          +----------+   +-----------+         |
   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
   *          +----------+   +-----------+   |
   *    |           |                        |   +---+        |
   *                +------------------------+-->|fin| - - - -
   *    |         +---+                      |   +---+
   *     - - - - -|fin|<---------------------+
   *              +---+
   *
   * @param {Number} [code] Status code explaining why the connection is closing
   * @param {String} [data] A string explaining why the connection is closing
   * @public
   */
  close(code, data) {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake(this, this._req, msg);
    }

    if (this.readyState === WebSocket.CLOSING) {
      if (
        this._closeFrameSent &&
        (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
      ) {
        this._socket.end();
      }

      return;
    }

    this._readyState = WebSocket.CLOSING;
    this._sender.close(code, data, !this._isServer, (err) => {
      //
      // This error is handled by the `'error'` listener on the socket. We only
      // want to know if the close frame has been sent here.
      //
      if (err) return;

      this._closeFrameSent = true;

      if (
        this._closeFrameReceived ||
        this._receiver._writableState.errorEmitted
      ) {
        this._socket.end();
      }
    });

    //
    // Specify a timeout for the closing handshake to complete.
    //
    this._closeTimer = setTimeout(
      this._socket.destroy.bind(this._socket),
      closeTimeout
    );
  }

  /**
   * Send a ping.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the ping is sent
   * @public
   */
  ping(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Send a pong.
   *
   * @param {*} [data] The data to send
   * @param {Boolean} [mask] Indicates whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when the pong is sent
   * @public
   */
  pong(data, mask, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof data === 'function') {
      cb = data;
      data = mask = undefined;
    } else if (typeof mask === 'function') {
      cb = mask;
      mask = undefined;
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    if (mask === undefined) mask = !this._isServer;
    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
  }

  /**
   * Send a data message.
   *
   * @param {*} data The message to send
   * @param {Object} [options] Options object
   * @param {Boolean} [options.compress] Specifies whether or not to compress
   *     `data`
   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
   *     text
   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
   *     last one
   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
   * @param {Function} [cb] Callback which is executed when data is written out
   * @public
   */
  send(data, options, cb) {
    if (this.readyState === WebSocket.CONNECTING) {
      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
    }

    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    if (typeof data === 'number') data = data.toString();

    if (this.readyState !== WebSocket.OPEN) {
      sendAfterClose(this, data, cb);
      return;
    }

    const opts = {
      binary: typeof data !== 'string',
      mask: !this._isServer,
      compress: true,
      fin: true,
      ...options
    };

    if (!this._extensions[PerMessageDeflate.extensionName]) {
      opts.compress = false;
    }

    this._sender.send(data || EMPTY_BUFFER, opts, cb);
  }

  /**
   * Forcibly close the connection.
   *
   * @public
   */
  terminate() {
    if (this.readyState === WebSocket.CLOSED) return;
    if (this.readyState === WebSocket.CONNECTING) {
      const msg = 'WebSocket was closed before the connection was established';
      return abortHandshake(this, this._req, msg);
    }

    if (this._socket) {
      this._readyState = WebSocket.CLOSING;
      this._socket.destroy();
    }
  }
}

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} CONNECTING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
  enumerable: true,
  value: readyStates.indexOf('CONNECTING')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} OPEN
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'OPEN', {
  enumerable: true,
  value: readyStates.indexOf('OPEN')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSING
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CLOSING', {
  enumerable: true,
  value: readyStates.indexOf('CLOSING')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket
 */
Object.defineProperty(WebSocket, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

/**
 * @constant {Number} CLOSED
 * @memberof WebSocket.prototype
 */
Object.defineProperty(WebSocket.prototype, 'CLOSED', {
  enumerable: true,
  value: readyStates.indexOf('CLOSED')
});

[
  'binaryType',
  'bufferedAmount',
  'extensions',
  'protocol',
  'readyState',
  'url'
].forEach((property) => {
  Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
});

//
// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
//
['open', 'error', 'close', 'message'].forEach((method) => {
  Object.defineProperty(WebSocket.prototype, `on${method}`, {
    enumerable: true,
    get() {
      const listeners = this.listeners(method);
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i]._listener) return listeners[i]._listener;
      }

      return undefined;
    },
    set(listener) {
      const listeners = this.listeners(method);
      for (let i = 0; i < listeners.length; i++) {
        //
        // Remove only the listeners added via `addEventListener`.
        //
        if (listeners[i]._listener) this.removeListener(method, listeners[i]);
      }
      this.addEventListener(method, listener);
    }
  });
});

WebSocket.prototype.addEventListener = addEventListener;
WebSocket.prototype.removeEventListener = removeEventListener;

module.exports = WebSocket;

/**
 * Initialize a WebSocket client.
 *
 * @param {WebSocket} websocket The client to initialize
 * @param {(String|URL)} address The URL to which to connect
 * @param {String} [protocols] The subprotocols
 * @param {Object} [options] Connection options
 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
 *     permessage-deflate
 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
 *     handshake request
 * @param {Number} [options.protocolVersion=13] Value of the
 *     `Sec-WebSocket-Version` header
 * @param {String} [options.origin] Value of the `Origin` or
 *     `Sec-WebSocket-Origin` header
 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
 *     size
 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
 *     redirects
 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
 *     allowed
 * @private
 */
function initAsClient(websocket, address, protocols, options) {
  const opts = {
    protocolVersion: protocolVersions[1],
    maxPayload: 100 * 1024 * 1024,
    perMessageDeflate: true,
    followRedirects: false,
    maxRedirects: 10,
    ...options,
    createConnection: undefined,
    socketPath: undefined,
    hostname: undefined,
    protocol: undefined,
    timeout: undefined,
    method: undefined,
    host: undefined,
    path: undefined,
    port: undefined
  };

  if (!protocolVersions.includes(opts.protocolVersion)) {
    throw new RangeError(
      `Unsupported protocol version: ${opts.protocolVersion} ` +
        `(supported versions: ${protocolVersions.join(', ')})`
    );
  }

  let parsedUrl;

  if (address instanceof URL) {
    parsedUrl = address;
    websocket._url = address.href;
  } else {
    parsedUrl = new URL(address);
    websocket._url = address;
  }

  const isUnixSocket = parsedUrl.protocol === 'ws+unix:';

  if (!parsedUrl.host && (!isUnixSocket || !parsedUrl.pathname)) {
    const err = new Error(`Invalid URL: ${websocket.url}`);

    if (websocket._redirects === 0) {
      throw err;
    } else {
      emitErrorAndClose(websocket, err);
      return;
    }
  }

  const isSecure =
    parsedUrl.protocol === 'wss:' || parsedUrl.protocol === 'https:';
  const defaultPort = isSecure ? 443 : 80;
  const key = randomBytes(16).toString('base64');
  const get = isSecure ? https.get : http.get;
  let perMessageDeflate;

  opts.createConnection = isSecure ? tlsConnect : netConnect;
  opts.defaultPort = opts.defaultPort || defaultPort;
  opts.port = parsedUrl.port || defaultPort;
  opts.host = parsedUrl.hostname.startsWith('[')
    ? parsedUrl.hostname.slice(1, -1)
    : parsedUrl.hostname;
  opts.headers = {
    'Sec-WebSocket-Version': opts.protocolVersion,
    'Sec-WebSocket-Key': key,
    Connection: 'Upgrade',
    Upgrade: 'websocket',
    ...opts.headers
  };
  opts.path = parsedUrl.pathname + parsedUrl.search;
  opts.timeout = opts.handshakeTimeout;

  if (opts.perMessageDeflate) {
    perMessageDeflate = new PerMessageDeflate(
      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
      false,
      opts.maxPayload
    );
    opts.headers['Sec-WebSocket-Extensions'] = format({
      [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
    });
  }
  if (protocols) {
    opts.headers['Sec-WebSocket-Protocol'] = protocols;
  }
  if (opts.origin) {
    if (opts.protocolVersion < 13) {
      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
    } else {
      opts.headers.Origin = opts.origin;
    }
  }
  if (parsedUrl.username || parsedUrl.password) {
    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
  }

  if (isUnixSocket) {
    const parts = opts.path.split(':');

    opts.socketPath = parts[0];
    opts.path = parts[1];
  }

  if (opts.followRedirects) {
    if (websocket._redirects === 0) {
      websocket._originalUnixSocket = isUnixSocket;
      websocket._originalSecure = isSecure;
      websocket._originalHostOrSocketPath = isUnixSocket
        ? opts.socketPath
        : parsedUrl.host;

      const headers = options && options.headers;

      //
      // Shallow copy the user provided options so that headers can be changed
      // without mutating the original object.
      //
      options = { ...options, headers: {} };

      if (headers) {
        for (const [key, value] of Object.entries(headers)) {
          options.headers[key.toLowerCase()] = value;
        }
      }
    } else {
      const isSameHost = isUnixSocket
        ? websocket._originalUnixSocket
          ? opts.socketPath === websocket._originalHostOrSocketPath
          : false
        : websocket._originalUnixSocket
        ? false
        : parsedUrl.host === websocket._originalHostOrSocketPath;

      if (!isSameHost || (websocket._originalSecure && !isSecure)) {
        //
        // Match curl 7.77.0 behavior and drop the following headers. These
        // headers are also dropped when following a redirect to a subdomain.
        //
        delete opts.headers.authorization;
        delete opts.headers.cookie;

        if (!isSameHost) delete opts.headers.host;

        opts.auth = undefined;
      }
    }

    //
    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
    // If the `Authorization` header is set, then there is nothing to do as it
    // will take precedence.
    //
    if (opts.auth && !options.headers.authorization) {
      options.headers.authorization =
        'Basic ' + Buffer.from(opts.auth).toString('base64');
    }
  }

  let req = (websocket._req = get(opts));

  if (opts.timeout) {
    req.on('timeout', () => {
      abortHandshake(websocket, req, 'Opening handshake has timed out');
    });
  }

  req.on('error', (err) => {
    if (req === null || req.aborted) return;

    req = websocket._req = null;
    emitErrorAndClose(websocket, err);
  });

  req.on('response', (res) => {
    const location = res.headers.location;
    const statusCode = res.statusCode;

    if (
      location &&
      opts.followRedirects &&
      statusCode >= 300 &&
      statusCode < 400
    ) {
      if (++websocket._redirects > opts.maxRedirects) {
        abortHandshake(websocket, req, 'Maximum redirects exceeded');
        return;
      }

      req.abort();

      let addr;

      try {
        addr = new URL(location, address);
      } catch (err) {
        emitErrorAndClose(websocket, err);
        return;
      }

      initAsClient(websocket, addr, protocols, options);
    } else if (!websocket.emit('unexpected-response', req, res)) {
      abortHandshake(
        websocket,
        req,
        `Unexpected server response: ${res.statusCode}`
      );
    }
  });

  req.on('upgrade', (res, socket, head) => {
    websocket.emit('upgrade', res);

    //
    // The user may have closed the connection from a listener of the `upgrade`
    // event.
    //
    if (websocket.readyState !== WebSocket.CONNECTING) return;

    req = websocket._req = null;

    const upgrade = res.headers.upgrade;

    if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
      abortHandshake(websocket, socket, 'Invalid Upgrade header');
      return;
    }

    const digest = createHash('sha1')
      .update(key + GUID)
      .digest('base64');

    if (res.headers['sec-websocket-accept'] !== digest) {
      abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
      return;
    }

    const serverProt = res.headers['sec-websocket-protocol'];
    const protList = (protocols || '').split(/, */);
    let protError;

    if (!protocols && serverProt) {
      protError = 'Server sent a subprotocol but none was requested';
    } else if (protocols && !serverProt) {
      protError = 'Server sent no subprotocol';
    } else if (serverProt && !protList.includes(serverProt)) {
      protError = 'Server sent an invalid subprotocol';
    }

    if (protError) {
      abortHandshake(websocket, socket, protError);
      return;
    }

    if (serverProt) websocket._protocol = serverProt;

    const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

    if (secWebSocketExtensions !== undefined) {
      if (!perMessageDeflate) {
        const message =
          'Server sent a Sec-WebSocket-Extensions header but no extension ' +
          'was requested';
        abortHandshake(websocket, socket, message);
        return;
      }

      let extensions;

      try {
        extensions = parse(secWebSocketExtensions);
      } catch (err) {
        const message = 'Invalid Sec-WebSocket-Extensions header';
        abortHandshake(websocket, socket, message);
        return;
      }

      const extensionNames = Object.keys(extensions);

      if (extensionNames.length) {
        if (
          extensionNames.length !== 1 ||
          extensionNames[0] !== PerMessageDeflate.extensionName
        ) {
          const message =
            'Server indicated an extension that was not requested';
          abortHandshake(websocket, socket, message);
          return;
        }

        try {
          perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
        } catch (err) {
          const message = 'Invalid Sec-WebSocket-Extensions header';
          abortHandshake(websocket, socket, message);
          return;
        }

        websocket._extensions[PerMessageDeflate.extensionName] =
          perMessageDeflate;
      }
    }

    websocket.setSocket(socket, head, opts.maxPayload);
  });
}

/**
 * Emit the `'error'` and `'close'` event.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {Error} The error to emit
 * @private
 */
function emitErrorAndClose(websocket, err) {
  websocket._readyState = WebSocket.CLOSING;
  websocket.emit('error', err);
  websocket.emitClose();
}

/**
 * Create a `net.Socket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {net.Socket} The newly created socket used to start the connection
 * @private
 */
function netConnect(options) {
  options.path = options.socketPath;
  return net.connect(options);
}

/**
 * Create a `tls.TLSSocket` and initiate a connection.
 *
 * @param {Object} options Connection options
 * @return {tls.TLSSocket} The newly created socket used to start the connection
 * @private
 */
function tlsConnect(options) {
  options.path = undefined;

  if (!options.servername && options.servername !== '') {
    options.servername = net.isIP(options.host) ? '' : options.host;
  }

  return tls.connect(options);
}

/**
 * Abort the handshake and emit an error.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
 *     abort or the socket to destroy
 * @param {String} message The error message
 * @private
 */
function abortHandshake(websocket, stream, message) {
  websocket._readyState = WebSocket.CLOSING;

  const err = new Error(message);
  Error.captureStackTrace(err, abortHandshake);

  if (stream.setHeader) {
    stream.abort();

    if (stream.socket && !stream.socket.destroyed) {
      //
      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
      // called after the request completed. See
      // https://github.com/websockets/ws/issues/1869.
      //
      stream.socket.destroy();
    }

    stream.once('abort', websocket.emitClose.bind(websocket));
    websocket.emit('error', err);
  } else {
    stream.destroy(err);
    stream.once('error', websocket.emit.bind(websocket, 'error'));
    stream.once('close', websocket.emitClose.bind(websocket));
  }
}

/**
 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
 *
 * @param {WebSocket} websocket The WebSocket instance
 * @param {*} [data] The data to send
 * @param {Function} [cb] Callback
 * @private
 */
function sendAfterClose(websocket, data, cb) {
  if (data) {
    const length = toBuffer(data).length;

    //
    // The `_bufferedAmount` property is used only when the peer is a client and
    // the opening handshake fails. Under these circumstances, in fact, the
    // `setSocket()` method is not called, so the `_socket` and `_sender`
    // properties are set to `null`.
    //
    if (websocket._socket) websocket._sender._bufferedBytes += length;
    else websocket._bufferedAmount += length;
  }

  if (cb) {
    const err = new Error(
      `WebSocket is not open: readyState ${websocket.readyState} ` +
        `(${readyStates[websocket.readyState]})`
    );
    cb(err);
  }
}

/**
 * The listener of the `Receiver` `'conclude'` event.
 *
 * @param {Number} code The status code
 * @param {String} reason The reason for closing
 * @private
 */
function receiverOnConclude(code, reason) {
  const websocket = this[kWebSocket];

  websocket._closeFrameReceived = true;
  websocket._closeMessage = reason;
  websocket._closeCode = code;

  if (websocket._socket[kWebSocket] === undefined) return;

  websocket._socket.removeListener('data', socketOnData);
  process.nextTick(resume, websocket._socket);

  if (code === 1005) websocket.close();
  else websocket.close(code, reason);
}

/**
 * The listener of the `Receiver` `'drain'` event.
 *
 * @private
 */
function receiverOnDrain() {
  this[kWebSocket]._socket.resume();
}

/**
 * The listener of the `Receiver` `'error'` event.
 *
 * @param {(RangeError|Error)} err The emitted error
 * @private
 */
function receiverOnError(err) {
  const websocket = this[kWebSocket];

  if (websocket._socket[kWebSocket] !== undefined) {
    websocket._socket.removeListener('data', socketOnData);

    //
    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
    // https://github.com/websockets/ws/issues/1940.
    //
    process.nextTick(resume, websocket._socket);

    websocket.close(err[kStatusCode]);
  }

  websocket.emit('error', err);
}

/**
 * The listener of the `Receiver` `'finish'` event.
 *
 * @private
 */
function receiverOnFinish() {
  this[kWebSocket].emitClose();
}

/**
 * The listener of the `Receiver` `'message'` event.
 *
 * @param {(String|Buffer|ArrayBuffer|Buffer[])} data The message
 * @private
 */
function receiverOnMessage(data) {
  this[kWebSocket].emit('message', data);
}

/**
 * The listener of the `Receiver` `'ping'` event.
 *
 * @param {Buffer} data The data included in the ping frame
 * @private
 */
function receiverOnPing(data) {
  const websocket = this[kWebSocket];

  websocket.pong(data, !websocket._isServer, NOOP);
  websocket.emit('ping', data);
}

/**
 * The listener of the `Receiver` `'pong'` event.
 *
 * @param {Buffer} data The data included in the pong frame
 * @private
 */
function receiverOnPong(data) {
  this[kWebSocket].emit('pong', data);
}

/**
 * Resume a readable stream
 *
 * @param {Readable} stream The readable stream
 * @private
 */
function resume(stream) {
  stream.resume();
}

/**
 * The listener of the `net.Socket` `'close'` event.
 *
 * @private
 */
function socketOnClose() {
  const websocket = this[kWebSocket];

  this.removeListener('close', socketOnClose);
  this.removeListener('data', socketOnData);
  this.removeListener('end', socketOnEnd);

  websocket._readyState = WebSocket.CLOSING;

  let chunk;

  //
  // The close frame might not have been received or the `'end'` event emitted,
  // for example, if the socket was destroyed due to an error. Ensure that the
  // `receiver` stream is closed after writing any remaining buffered data to
  // it. If the readable side of the socket is in flowing mode then there is no
  // buffered data as everything has been already written and `readable.read()`
  // will return `null`. If instead, the socket is paused, any possible buffered
  // data will be read as a single chunk.
  //
  if (
    !this._readableState.endEmitted &&
    !websocket._closeFrameReceived &&
    !websocket._receiver._writableState.errorEmitted &&
    (chunk = websocket._socket.read()) !== null
  ) {
    websocket._receiver.write(chunk);
  }

  websocket._receiver.end();

  this[kWebSocket] = undefined;

  clearTimeout(websocket._closeTimer);

  if (
    websocket._receiver._writableState.finished ||
    websocket._receiver._writableState.errorEmitted
  ) {
    websocket.emitClose();
  } else {
    websocket._receiver.on('error', receiverOnFinish);
    websocket._receiver.on('finish', receiverOnFinish);
  }
}

/**
 * The listener of the `net.Socket` `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function socketOnData(chunk) {
  if (!this[kWebSocket]._receiver.write(chunk)) {
    this.pause();
  }
}

/**
 * The listener of the `net.Socket` `'end'` event.
 *
 * @private
 */
function socketOnEnd() {
  const websocket = this[kWebSocket];

  websocket._readyState = WebSocket.CLOSING;
  websocket._receiver.end();
  this.end();
}

/**
 * The listener of the `net.Socket` `'error'` event.
 *
 * @private
 */
function socketOnError() {
  const websocket = this[kWebSocket];

  this.removeListener('error', socketOnError);
  this.on('error', NOOP);

  if (websocket) {
    websocket._readyState = WebSocket.CLOSING;
    this.destroy();
  }
}


/***/ }),

/***/ 149026:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(979244), exports);
tslib_1.__exportStar(__webpack_require__(331861), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 979244:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
exports.ONE_HUNDRED = 100;
exports.ONE_THOUSAND = 1000;
//# sourceMappingURL=misc.js.map

/***/ }),

/***/ 331861:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
exports.ONE_SECOND = 1;
exports.FIVE_SECONDS = 5;
exports.TEN_SECONDS = 10;
exports.THIRTY_SECONDS = 30;
exports.SIXTY_SECONDS = 60;
exports.ONE_MINUTE = exports.SIXTY_SECONDS;
exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
exports.ONE_HOUR = exports.SIXTY_MINUTES;
exports.THREE_HOURS = exports.ONE_HOUR * 3;
exports.SIX_HOURS = exports.ONE_HOUR * 6;
exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
exports.THREE_DAYS = exports.ONE_DAY * 3;
exports.FIVE_DAYS = exports.ONE_DAY * 5;
exports.SEVEN_DAYS = exports.ONE_DAY * 7;
exports.THIRTY_DAYS = exports.ONE_DAY * 30;
exports.ONE_WEEK = exports.SEVEN_DAYS;
exports.TWO_WEEKS = exports.ONE_WEEK * 2;
exports.THREE_WEEKS = exports.ONE_WEEK * 3;
exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
exports.ONE_YEAR = exports.ONE_DAY * 365;
//# sourceMappingURL=time.js.map

/***/ }),

/***/ 388900:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(599606), exports);
tslib_1.__exportStar(__webpack_require__(789883), exports);
tslib_1.__exportStar(__webpack_require__(662010), exports);
tslib_1.__exportStar(__webpack_require__(149026), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 662010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(163093), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 163093:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IWatch = void 0;
class IWatch {
}
exports.IWatch = IWatch;
//# sourceMappingURL=watch.js.map

/***/ }),

/***/ 160221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromMiliseconds = exports.toMiliseconds = void 0;
const constants_1 = __webpack_require__(149026);
function toMiliseconds(seconds) {
    return seconds * constants_1.ONE_THOUSAND;
}
exports.toMiliseconds = toMiliseconds;
function fromMiliseconds(miliseconds) {
    return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
}
exports.fromMiliseconds = fromMiliseconds;
//# sourceMappingURL=convert.js.map

/***/ }),

/***/ 602985:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delay = void 0;
function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, timeout);
    });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ 599606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(602985), exports);
tslib_1.__exportStar(__webpack_require__(160221), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 789883:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Watch = void 0;
class Watch {
    constructor() {
        this.timestamps = new Map();
    }
    start(label) {
        if (this.timestamps.has(label)) {
            throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
    }
    stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
            throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
    }
    get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
            throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
    }
    elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
    }
}
exports.Watch = Watch;
exports["default"] = Watch;
//# sourceMappingURL=watch.js.map

/***/ }),

/***/ 880584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 838196:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
        res = window[name];
    }
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
exports.getLocalStorage = getLocalStorage;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 842063:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.g = void 0;
const window_getters_1 = __webpack_require__(838196);
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    }
    catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 &&
                            href.toLowerCase().indexOf("http:") === -1 &&
                            href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) {
                                absoluteHref += href;
                            }
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        }
                        else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        }
                        else {
                            icons.push(href);
                        }
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i = 0; i < metaTags.length; i++) {
            const tag = metaTags[i];
            const attributes = ["itemprop", "property", "name"]
                .map((target) => tag.getAttribute(target))
                .filter((attr) => {
                if (attr) {
                    return args.includes(attr);
                }
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) {
                    return content;
                }
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) {
            name = doc.title;
        }
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name,
    };
    return meta;
}
exports.g = getWindowMetadata;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 57814:
/***/ ((module) => {

"use strict";


/* global SharedArrayBuffer, Atomics */

if (typeof SharedArrayBuffer !== 'undefined' && typeof Atomics !== 'undefined') {
  const nil = new Int32Array(new SharedArrayBuffer(4))

  function sleep (ms) {
    // also filters out NaN, non-number types, including empty strings, but allows bigints
    const valid = ms > 0 && ms < Infinity 
    if (valid === false) {
      if (typeof ms !== 'number' && typeof ms !== 'bigint') {
        throw TypeError('sleep: ms must be a number')
      }
      throw RangeError('sleep: ms must be a number that is greater than 0 but less than Infinity')
    }

    Atomics.wait(nil, 0, 0, Number(ms))
  }
  module.exports = sleep
} else {

  function sleep (ms) {
    // also filters out NaN, non-number types, including empty strings, but allows bigints
    const valid = ms > 0 && ms < Infinity 
    if (valid === false) {
      if (typeof ms !== 'number' && typeof ms !== 'bigint') {
        throw TypeError('sleep: ms must be a number')
      }
      throw RangeError('sleep: ms must be a number that is greater than 0 but less than Infinity')
    }
    const target = Date.now() + Number(ms)
    while (target > Date.now()){}
  }

  module.exports = sleep

}


/***/ }),

/***/ 981423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const validator = __webpack_require__(233925)
const parse = __webpack_require__(303288)
const redactor = __webpack_require__(278103)
const restorer = __webpack_require__(302187)
const { groupRedact, nestedRedact } = __webpack_require__(197157)
const state = __webpack_require__(386754)
const rx = __webpack_require__(841753)
const validate = validator()
const noop = (o) => o
noop.restore = noop

const DEFAULT_CENSOR = '[REDACTED]'
fastRedact.rx = rx
fastRedact.validator = validator

module.exports = fastRedact

function fastRedact (opts = {}) {
  const paths = Array.from(new Set(opts.paths || []))
  const serialize = 'serialize' in opts ? (
    opts.serialize === false ? opts.serialize
      : (typeof opts.serialize === 'function' ? opts.serialize : JSON.stringify)
  ) : JSON.stringify
  const remove = opts.remove
  if (remove === true && serialize !== JSON.stringify) {
    throw Error('fast-redact – remove option may only be set when serializer is JSON.stringify')
  }
  const censor = remove === true
    ? undefined
    : 'censor' in opts ? opts.censor : DEFAULT_CENSOR

  const isCensorFct = typeof censor === 'function'
  const censorFctTakesPath = isCensorFct && censor.length > 1

  if (paths.length === 0) return serialize || noop

  validate({ paths, serialize, censor })

  const { wildcards, wcLen, secret } = parse({ paths, censor })

  const compileRestore = restorer()
  const strict = 'strict' in opts ? opts.strict : true

  return redactor({ secret, wcLen, serialize, strict, isCensorFct, censorFctTakesPath }, state({
    secret,
    censor,
    compileRestore,
    serialize,
    groupRedact,
    nestedRedact,
    wildcards,
    wcLen
  }))
}


/***/ }),

/***/ 197157:
/***/ ((module) => {

"use strict";


module.exports = {
  groupRedact,
  groupRestore,
  nestedRedact,
  nestedRestore
}

function groupRestore ({ keys, values, target }) {
  if (target == null || typeof target === 'string') return
  const length = keys.length
  for (var i = 0; i < length; i++) {
    const k = keys[i]
    target[k] = values[i]
  }
}

function groupRedact (o, path, censor, isCensorFct, censorFctTakesPath) {
  const target = get(o, path)
  if (target == null || typeof target === 'string') return { keys: null, values: null, target, flat: true }
  const keys = Object.keys(target)
  const keysLength = keys.length
  const pathLength = path.length
  const pathWithKey = censorFctTakesPath ? [...path] : undefined
  const values = new Array(keysLength)

  for (var i = 0; i < keysLength; i++) {
    const key = keys[i]
    values[i] = target[key]

    if (censorFctTakesPath) {
      pathWithKey[pathLength] = key
      target[key] = censor(target[key], pathWithKey)
    } else if (isCensorFct) {
      target[key] = censor(target[key])
    } else {
      target[key] = censor
    }
  }
  return { keys, values, target, flat: true }
}

/**
 * @param {RestoreInstruction[]} instructions a set of instructions for restoring values to objects
 */
function nestedRestore (instructions) {
  for (let i = 0; i < instructions.length; i++) {
    const { target, path, value } = instructions[i]
    let current = target
    for (let i = path.length - 1; i > 0; i--) {
      current = current[path[i]]
    }
    current[path[0]] = value
  }
}

function nestedRedact (store, o, path, ns, censor, isCensorFct, censorFctTakesPath) {
  const target = get(o, path)
  if (target == null) return
  const keys = Object.keys(target)
  const keysLength = keys.length
  for (var i = 0; i < keysLength; i++) {
    const key = keys[i]
    specialSet(store, target, key, path, ns, censor, isCensorFct, censorFctTakesPath)
  }
  return store
}

function has (obj, prop) {
  return obj !== undefined && obj !== null
    ? ('hasOwn' in Object ? Object.hasOwn(obj, prop) : Object.prototype.hasOwnProperty.call(obj, prop))
    : false
}

function specialSet (store, o, k, path, afterPath, censor, isCensorFct, censorFctTakesPath) {
  const afterPathLen = afterPath.length
  const lastPathIndex = afterPathLen - 1
  const originalKey = k
  var i = -1
  var n
  var nv
  var ov
  var oov = null
  var wc = null
  var kIsWc
  var wcov
  var consecutive = false
  var level = 0
  // need to track depth of the `redactPath` tree
  var depth = 0
  var redactPathCurrent = tree()
  ov = n = o[k]
  if (typeof n !== 'object') return
  while (n != null && ++i < afterPathLen) {
    depth += 1
    k = afterPath[i]
    oov = ov
    if (k !== '*' && !wc && !(typeof n === 'object' && k in n)) {
      break
    }
    if (k === '*') {
      if (wc === '*') {
        consecutive = true
      }
      wc = k
      if (i !== lastPathIndex) {
        continue
      }
    }
    if (wc) {
      const wcKeys = Object.keys(n)
      for (var j = 0; j < wcKeys.length; j++) {
        const wck = wcKeys[j]
        wcov = n[wck]
        kIsWc = k === '*'
        if (consecutive) {
          redactPathCurrent = node(redactPathCurrent, wck, depth)
          level = i
          ov = iterateNthLevel(wcov, level - 1, k, path, afterPath, censor, isCensorFct, censorFctTakesPath, originalKey, n, nv, ov, kIsWc, wck, i, lastPathIndex, redactPathCurrent, store, o[originalKey], depth + 1)
        } else {
          if (kIsWc || (typeof wcov === 'object' && wcov !== null && k in wcov)) {
            if (kIsWc) {
              ov = wcov
            } else {
              ov = wcov[k]
            }
            nv = (i !== lastPathIndex)
              ? ov
              : (isCensorFct
                ? (censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov))
                : censor)
            if (kIsWc) {
              const rv = restoreInstr(node(redactPathCurrent, wck, depth), ov, o[originalKey])
              store.push(rv)
              n[wck] = nv
            } else {
              if (wcov[k] === nv) {
                // pass
              } else if ((nv === undefined && censor !== undefined) || (has(wcov, k) && nv === ov)) {
                redactPathCurrent = node(redactPathCurrent, wck, depth)
              } else {
                redactPathCurrent = node(redactPathCurrent, wck, depth)
                const rv = restoreInstr(node(redactPathCurrent, k, depth + 1), ov, o[originalKey])
                store.push(rv)
                wcov[k] = nv
              }
            }
          }
        }
      }
      wc = null
    } else {
      ov = n[k]
      redactPathCurrent = node(redactPathCurrent, k, depth)
      nv = (i !== lastPathIndex)
        ? ov
        : (isCensorFct
          ? (censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov))
          : censor)
      if ((has(n, k) && nv === ov) || (nv === undefined && censor !== undefined)) {
        // pass
      } else {
        const rv = restoreInstr(redactPathCurrent, ov, o[originalKey])
        store.push(rv)
        n[k] = nv
      }
      n = n[k]
    }
    if (typeof n !== 'object') break
    // prevent circular structure, see https://github.com/pinojs/pino/issues/1513
    if (ov === oov || typeof ov === 'undefined') {
      // pass
    }
  }
}

function get (o, p) {
  var i = -1
  var l = p.length
  var n = o
  while (n != null && ++i < l) {
    n = n[p[i]]
  }
  return n
}

function iterateNthLevel (wcov, level, k, path, afterPath, censor, isCensorFct, censorFctTakesPath, originalKey, n, nv, ov, kIsWc, wck, i, lastPathIndex, redactPathCurrent, store, parent, depth) {
  if (level === 0) {
    if (kIsWc || (typeof wcov === 'object' && wcov !== null && k in wcov)) {
      if (kIsWc) {
        ov = wcov
      } else {
        ov = wcov[k]
      }
      nv = (i !== lastPathIndex)
        ? ov
        : (isCensorFct
          ? (censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov))
          : censor)
      if (kIsWc) {
        const rv = restoreInstr(redactPathCurrent, ov, parent)
        store.push(rv)
        n[wck] = nv
      } else {
        if (wcov[k] === nv) {
          // pass
        } else if ((nv === undefined && censor !== undefined) || (has(wcov, k) && nv === ov)) {
          // pass
        } else {
          const rv = restoreInstr(node(redactPathCurrent, k, depth + 1), ov, parent)
          store.push(rv)
          wcov[k] = nv
        }
      }
    }
  }
  for (const key in wcov) {
    if (typeof wcov[key] === 'object') {
      redactPathCurrent = node(redactPathCurrent, key, depth)
      iterateNthLevel(wcov[key], level - 1, k, path, afterPath, censor, isCensorFct, censorFctTakesPath, originalKey, n, nv, ov, kIsWc, wck, i, lastPathIndex, redactPathCurrent, store, parent, depth + 1)
    }
  }
}

/**
 * @typedef {object} TreeNode
 * @prop {TreeNode} [parent] reference to the parent of this node in the tree, or `null` if there is no parent
 * @prop {string} key the key that this node represents (key here being part of the path being redacted
 * @prop {TreeNode[]} children the child nodes of this node
 * @prop {number} depth the depth of this node in the tree
 */

/**
 * instantiate a new, empty tree
 * @returns {TreeNode}
 */
function tree () {
  return { parent: null, key: null, children: [], depth: 0 }
}

/**
 * creates a new node in the tree, attaching it as a child of the provided parent node
 * if the specified depth matches the parent depth, adds the new node as a _sibling_ of the parent instead
  * @param {TreeNode} parent the parent node to add a new node to (if the parent depth matches the provided `depth` value, will instead add as a sibling of this
  * @param {string} key the key that the new node represents (key here being part of the path being redacted)
  * @param {number} depth the depth of the new node in the tree - used to determing whether to add the new node as a child or sibling of the provided `parent` node
  * @returns {TreeNode} a reference to the newly created node in the tree
 */
function node (parent, key, depth) {
  if (parent.depth === depth) {
    return node(parent.parent, key, depth)
  }

  var child = {
    parent,
    key,
    depth,
    children: []
  }

  parent.children.push(child)

  return child
}

/**
 * @typedef {object} RestoreInstruction
 * @prop {string[]} path a reverse-order path that can be used to find the correct insertion point to restore a `value` for the given `parent` object
 * @prop {*} value the value to restore
 * @prop {object} target the object to restore the `value` in
 */

/**
 * create a restore instruction for the given redactPath node
 * generates a path in reverse order by walking up the redactPath tree
 * @param {TreeNode} node a tree node that should be at the bottom of the redact path (i.e. have no children) - this will be used to walk up the redact path tree to construct the path needed to restore
 * @param {*} value the value to restore
 * @param {object} target a reference to the parent object to apply the restore instruction to
 * @returns {RestoreInstruction} an instruction used to restore a nested value for a specific object
 */
function restoreInstr (node, value, target) {
  let current = node
  const path = []
  do {
    path.push(current.key)
    current = current.parent
  } while (current.parent != null)

  return { path, value, target }
}


/***/ }),

/***/ 303288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const rx = __webpack_require__(841753)

module.exports = parse

function parse ({ paths }) {
  const wildcards = []
  var wcLen = 0
  const secret = paths.reduce(function (o, strPath, ix) {
    var path = strPath.match(rx).map((p) => p.replace(/'|"|`/g, ''))
    const leadingBracket = strPath[0] === '['
    path = path.map((p) => {
      if (p[0] === '[') return p.substr(1, p.length - 2)
      else return p
    })
    const star = path.indexOf('*')
    if (star > -1) {
      const before = path.slice(0, star)
      const beforeStr = before.join('.')
      const after = path.slice(star + 1, path.length)
      const nested = after.length > 0
      wcLen++
      wildcards.push({
        before,
        beforeStr,
        after,
        nested
      })
    } else {
      o[strPath] = {
        path: path,
        val: undefined,
        precensored: false,
        circle: '',
        escPath: JSON.stringify(strPath),
        leadingBracket: leadingBracket
      }
    }
    return o
  }, {})

  return { wildcards, wcLen, secret }
}


/***/ }),

/***/ 278103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const rx = __webpack_require__(841753)

module.exports = redactor

function redactor ({ secret, serialize, wcLen, strict, isCensorFct, censorFctTakesPath }, state) {
  /* eslint-disable-next-line */
  const redact = Function('o', `
    if (typeof o !== 'object' || o == null) {
      ${strictImpl(strict, serialize)}
    }
    const { censor, secret } = this
    const originalSecret = {}
    const secretKeys = Object.keys(secret)
    for (var i = 0; i < secretKeys.length; i++) {
      originalSecret[secretKeys[i]] = secret[secretKeys[i]]
    }

    ${redactTmpl(secret, isCensorFct, censorFctTakesPath)}
    this.compileRestore()
    ${dynamicRedactTmpl(wcLen > 0, isCensorFct, censorFctTakesPath)}
    this.secret = originalSecret
    ${resultTmpl(serialize)}
  `).bind(state)

  redact.state = state

  if (serialize === false) {
    redact.restore = (o) => state.restore(o)
  }

  return redact
}

function redactTmpl (secret, isCensorFct, censorFctTakesPath) {
  return Object.keys(secret).map((path) => {
    const { escPath, leadingBracket, path: arrPath } = secret[path]
    const skip = leadingBracket ? 1 : 0
    const delim = leadingBracket ? '' : '.'
    const hops = []
    var match
    while ((match = rx.exec(path)) !== null) {
      const [ , ix ] = match
      const { index, input } = match
      if (index > skip) hops.push(input.substring(0, index - (ix ? 0 : 1)))
    }
    var existence = hops.map((p) => `o${delim}${p}`).join(' && ')
    if (existence.length === 0) existence += `o${delim}${path} != null`
    else existence += ` && o${delim}${path} != null`

    const circularDetection = `
      switch (true) {
        ${hops.reverse().map((p) => `
          case o${delim}${p} === censor:
            secret[${escPath}].circle = ${JSON.stringify(p)}
            break
        `).join('\n')}
      }
    `

    const censorArgs = censorFctTakesPath
      ? `val, ${JSON.stringify(arrPath)}`
      : `val`

    return `
      if (${existence}) {
        const val = o${delim}${path}
        if (val === censor) {
          secret[${escPath}].precensored = true
        } else {
          secret[${escPath}].val = val
          o${delim}${path} = ${isCensorFct ? `censor(${censorArgs})` : 'censor'}
          ${circularDetection}
        }
      }
    `
  }).join('\n')
}

function dynamicRedactTmpl (hasWildcards, isCensorFct, censorFctTakesPath) {
  return hasWildcards === true ? `
    {
      const { wildcards, wcLen, groupRedact, nestedRedact } = this
      for (var i = 0; i < wcLen; i++) {
        const { before, beforeStr, after, nested } = wildcards[i]
        if (nested === true) {
          secret[beforeStr] = secret[beforeStr] || []
          nestedRedact(secret[beforeStr], o, before, after, censor, ${isCensorFct}, ${censorFctTakesPath})
        } else secret[beforeStr] = groupRedact(o, before, censor, ${isCensorFct}, ${censorFctTakesPath})
      }
    }
  ` : ''
}

function resultTmpl (serialize) {
  return serialize === false ? `return o` : `
    var s = this.serialize(o)
    this.restore(o)
    return s
  `
}

function strictImpl (strict, serialize) {
  return strict === true
    ? `throw Error('fast-redact: primitives cannot be redacted')`
    : serialize === false ? `return o` : `return this.serialize(o)`
}


/***/ }),

/***/ 302187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { groupRestore, nestedRestore } = __webpack_require__(197157)

module.exports = restorer

function restorer () {
  return function compileRestore () {
    if (this.restore) {
      this.restore.state.secret = this.secret
      return
    }
    const { secret, wcLen } = this
    const paths = Object.keys(secret)
    const resetters = resetTmpl(secret, paths)
    const hasWildcards = wcLen > 0
    const state = hasWildcards ? { secret, groupRestore, nestedRestore } : { secret }
    /* eslint-disable-next-line */
    this.restore = Function(
      'o',
      restoreTmpl(resetters, paths, hasWildcards)
    ).bind(state)
    this.restore.state = state
  }
}

/**
 * Mutates the original object to be censored by restoring its original values
 * prior to censoring.
 *
 * @param {object} secret Compiled object describing which target fields should
 * be censored and the field states.
 * @param {string[]} paths The list of paths to censor as provided at
 * initialization time.
 *
 * @returns {string} String of JavaScript to be used by `Function()`. The
 * string compiles to the function that does the work in the description.
 */
function resetTmpl (secret, paths) {
  return paths.map((path) => {
    const { circle, escPath, leadingBracket } = secret[path]
    const delim = leadingBracket ? '' : '.'
    const reset = circle
      ? `o.${circle} = secret[${escPath}].val`
      : `o${delim}${path} = secret[${escPath}].val`
    const clear = `secret[${escPath}].val = undefined`
    return `
      if (secret[${escPath}].val !== undefined) {
        try { ${reset} } catch (e) {}
        ${clear}
      }
    `
  }).join('')
}

/**
 * Creates the body of the restore function
 *
 * Restoration of the redacted object happens
 * backwards, in reverse order of redactions,
 * so that repeated redactions on the same object
 * property can be eventually rolled back to the
 * original value.
 *
 * This way dynamic redactions are restored first,
 * starting from the last one working backwards and
 * followed by the static ones.
 *
 * @returns {string} the body of the restore function
 */
function restoreTmpl (resetters, paths, hasWildcards) {
  const dynamicReset = hasWildcards === true ? `
    const keys = Object.keys(secret)
    const len = keys.length
    for (var i = len - 1; i >= ${paths.length}; i--) {
      const k = keys[i]
      const o = secret[k]
      if (o) {
        if (o.flat === true) this.groupRestore(o)
        else this.nestedRestore(o)
        secret[k] = null
      }
    }
  ` : ''

  return `
    const secret = this.secret
    ${dynamicReset}
    ${resetters}
    return o
  `
}


/***/ }),

/***/ 841753:
/***/ ((module) => {

"use strict";


module.exports = /[^.[\]]+|\[((?:.)*?)\]/g

/*
Regular expression explanation:

Alt 1: /[^.[\]]+/ - Match one or more characters that are *not* a dot (.)
                    opening square bracket ([) or closing square bracket (])

Alt 2: /\[((?:.)*?)\]/ - If the char IS dot or square bracket, then create a capture
                         group (which will be capture group $1) that matches anything
                         within square brackets. Expansion is lazy so it will
                         stop matching as soon as the first closing bracket is met `]`
                         (rather than continuing to match until the final closing bracket).
*/


/***/ }),

/***/ 386754:
/***/ ((module) => {

"use strict";


module.exports = state

function state (o) {
  const {
    secret,
    censor,
    compileRestore,
    serialize,
    groupRedact,
    nestedRedact,
    wildcards,
    wcLen
  } = o
  const builder = [{ secret, censor, compileRestore }]
  if (serialize !== false) builder.push({ serialize })
  if (wcLen > 0) builder.push({ groupRedact, nestedRedact, wildcards, wcLen })
  return Object.assign(...builder)
}


/***/ }),

/***/ 233925:
/***/ ((module) => {

"use strict";


module.exports = validator

function validator (opts = {}) {
  const {
    ERR_PATHS_MUST_BE_STRINGS = () => 'fast-redact - Paths must be (non-empty) strings',
    ERR_INVALID_PATH = (s) => `fast-redact – Invalid path (${s})`
  } = opts

  return function validate ({ paths }) {
    paths.forEach((s) => {
      if (typeof s !== 'string') {
        throw Error(ERR_PATHS_MUST_BE_STRINGS())
      }
      try {
        if (/〇/.test(s)) throw Error()
        const expr = (s[0] === '[' ? '' : '.') + s.replace(/^\*/, '〇').replace(/\.\*/g, '.〇').replace(/\[\*\]/g, '[〇]')
        if (/\n|\r|;/.test(expr)) throw Error()
        if (/\/\*/.test(expr)) throw Error()
        /* eslint-disable-next-line */
        Function(`
            'use strict'
            const o = new Proxy({}, { get: () => o, set: () => { throw Error() } });
            const 〇 = null;
            o${expr}
            if ([o${expr}].length !== 1) throw Error()`)()
      } catch (e) {
        throw Error(ERR_INVALID_PATH(s))
      }
    })
  }
}


/***/ }),

/***/ 908142:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;


/***/ }),

/***/ 846270:
/***/ ((module) => {

"use strict";


function genWrap (wraps, ref, fn, event) {
  function wrap () {
    const obj = ref.deref()
    // This should alway happen, however GC is
    // undeterministic so it might happen.
    /* istanbul ignore else */
    if (obj !== undefined) {
      fn(obj, event)
    }
  }

  wraps[event] = wrap
  process.once(event, wrap)
}

const registry = new FinalizationRegistry(clear)
const map = new WeakMap()

function clear (wraps) {
  process.removeListener('exit', wraps.exit)
  process.removeListener('beforeExit', wraps.beforeExit)
}

function register (obj, fn) {
  if (obj === undefined) {
    throw new Error('the object can\'t be undefined')
  }
  const ref = new WeakRef(obj)

  const wraps = {}
  map.set(obj, wraps)
  registry.register(obj, wraps)

  genWrap(wraps, ref, fn, 'exit')
  genWrap(wraps, ref, fn, 'beforeExit')
}

function unregister (obj) {
  const wraps = map.get(obj)
  map.delete(obj)
  if (wraps) {
    clear(wraps)
  }
  registry.unregister(obj)
}

module.exports = {
  register,
  unregister
}


/***/ }),

/***/ 728568:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { format } = __webpack_require__(539023)

function build () {
  const codes = {}
  const emitted = new Map()

  function create (name, code, message) {
    if (!name) throw new Error('Warning name must not be empty')
    if (!code) throw new Error('Warning code must not be empty')
    if (!message) throw new Error('Warning message must not be empty')

    code = code.toUpperCase()

    if (codes[code] !== undefined) {
      throw new Error(`The code '${code}' already exist`)
    }

    function buildWarnOpts (a, b, c) {
      // more performant than spread (...) operator
      let formatted
      if (a && b && c) {
        formatted = format(message, a, b, c)
      } else if (a && b) {
        formatted = format(message, a, b)
      } else if (a) {
        formatted = format(message, a)
      } else {
        formatted = message
      }

      return {
        code,
        name,
        message: formatted
      }
    }

    emitted.set(code, false)
    codes[code] = buildWarnOpts

    return codes[code]
  }

  function emit (code, a, b, c) {
    if (codes[code] === undefined) throw new Error(`The code '${code}' does not exist`)
    if (emitted.get(code) === true) return
    emitted.set(code, true)

    const warning = codes[code](a, b, c)
    process.emitWarning(warning.message, warning.name, warning.code)
  }

  return {
    create,
    emit,
    emitted
  }
}

module.exports = build


/***/ }),

/***/ 40793:
/***/ ((module) => {

"use strict";

function tryStringify (o) {
  try { return JSON.stringify(o) } catch(e) { return '"[Circular]"' }
}

module.exports = format

function format(f, args, opts) {
  var ss = (opts && opts.stringify) || tryStringify
  var offset = 1
  if (typeof f === 'object' && f !== null) {
    var len = args.length + offset
    if (len === 1) return f
    var objects = new Array(len)
    objects[0] = ss(f)
    for (var index = 1; index < len; index++) {
      objects[index] = ss(args[index])
    }
    return objects.join(' ')
  }
  if (typeof f !== 'string') {
    return f
  }
  var argLen = args.length
  if (argLen === 0) return f
  var str = ''
  var a = 1 - offset
  var lastPos = -1
  var flen = (f && f.length) || 0
  for (var i = 0; i < flen;) {
    if (f.charCodeAt(i) === 37 && i + 1 < flen) {
      lastPos = lastPos > -1 ? lastPos : 0
      switch (f.charCodeAt(i + 1)) {
        case 100: // 'd'
        case 102: // 'f'
          if (a >= argLen)
            break
          if (args[a] == null)  break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += Number(args[a])
          lastPos = i + 2
          i++
          break
        case 105: // 'i'
          if (a >= argLen)
            break
          if (args[a] == null)  break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += Math.floor(Number(args[a]))
          lastPos = i + 2
          i++
          break
        case 79: // 'O'
        case 111: // 'o'
        case 106: // 'j'
          if (a >= argLen)
            break
          if (args[a] === undefined) break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          var type = typeof args[a]
          if (type === 'string') {
            str += '\'' + args[a] + '\''
            lastPos = i + 2
            i++
            break
          }
          if (type === 'function') {
            str += args[a].name || '<anonymous>'
            lastPos = i + 2
            i++
            break
          }
          str += ss(args[a])
          lastPos = i + 2
          i++
          break
        case 115: // 's'
          if (a >= argLen)
            break
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += String(args[a])
          lastPos = i + 2
          i++
          break
        case 37: // '%'
          if (lastPos < i)
            str += f.slice(lastPos, i)
          str += '%'
          lastPos = i + 2
          i++
          a--
          break
      }
      ++a
    }
    ++i
  }
  if (lastPos === -1)
    return f
  else if (lastPos < flen) {
    str += f.slice(lastPos)
  }

  return str
}


/***/ }),

/***/ 512068:
/***/ ((module, exports) => {

"use strict";


const { hasOwnProperty } = Object.prototype

const stringify = configure()

// @ts-expect-error
stringify.configure = configure
// @ts-expect-error
stringify.stringify = stringify

// @ts-expect-error
stringify.default = stringify

// @ts-expect-error used for named export
exports.stringify = stringify
// @ts-expect-error used for named export
exports.configure = configure

module.exports = stringify

// eslint-disable-next-line no-control-regex
const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/

// Escape C0 control characters, double quotes, the backslash and every code
// unit with a numeric value in the inclusive range 0xD800 to 0xDFFF.
function strEscape (str) {
  // Some magic numbers that worked out fine while benchmarking with v8 8.0
  if (str.length < 5000 && !strEscapeSequencesRegExp.test(str)) {
    return `"${str}"`
  }
  return JSON.stringify(str)
}

function sort (array, comparator) {
  // Insertion sort is very efficient for small input sizes, but it has a bad
  // worst case complexity. Thus, use native array sort for bigger values.
  if (array.length > 2e2 || comparator) {
    return array.sort(comparator)
  }
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i]
    let position = i
    while (position !== 0 && array[position - 1] > currentValue) {
      array[position] = array[position - 1]
      position--
    }
    array[position] = currentValue
  }
  return array
}

const typedArrayPrototypeGetSymbolToStringTag =
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(
      Object.getPrototypeOf(
        new Int8Array()
      )
    ),
    Symbol.toStringTag
  ).get

function isTypedArrayWithEntries (value) {
  return typedArrayPrototypeGetSymbolToStringTag.call(value) !== undefined && value.length !== 0
}

function stringifyTypedArray (array, separator, maximumBreadth) {
  if (array.length < maximumBreadth) {
    maximumBreadth = array.length
  }
  const whitespace = separator === ',' ? '' : ' '
  let res = `"0":${whitespace}${array[0]}`
  for (let i = 1; i < maximumBreadth; i++) {
    res += `${separator}"${i}":${whitespace}${array[i]}`
  }
  return res
}

function getCircularValueOption (options) {
  if (hasOwnProperty.call(options, 'circularValue')) {
    const circularValue = options.circularValue
    if (typeof circularValue === 'string') {
      return `"${circularValue}"`
    }
    if (circularValue == null) {
      return circularValue
    }
    if (circularValue === Error || circularValue === TypeError) {
      return {
        toString () {
          throw new TypeError('Converting circular structure to JSON')
        }
      }
    }
    throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined')
  }
  return '"[Circular]"'
}

function getDeterministicOption (options) {
  let value
  if (hasOwnProperty.call(options, 'deterministic')) {
    value = options.deterministic
    if (typeof value !== 'boolean' && typeof value !== 'function') {
      throw new TypeError('The "deterministic" argument must be of type boolean or comparator function')
    }
  }
  return value === undefined ? true : value
}

function getBooleanOption (options, key) {
  let value
  if (hasOwnProperty.call(options, key)) {
    value = options[key]
    if (typeof value !== 'boolean') {
      throw new TypeError(`The "${key}" argument must be of type boolean`)
    }
  }
  return value === undefined ? true : value
}

function getPositiveIntegerOption (options, key) {
  let value
  if (hasOwnProperty.call(options, key)) {
    value = options[key]
    if (typeof value !== 'number') {
      throw new TypeError(`The "${key}" argument must be of type number`)
    }
    if (!Number.isInteger(value)) {
      throw new TypeError(`The "${key}" argument must be an integer`)
    }
    if (value < 1) {
      throw new RangeError(`The "${key}" argument must be >= 1`)
    }
  }
  return value === undefined ? Infinity : value
}

function getItemCount (number) {
  if (number === 1) {
    return '1 item'
  }
  return `${number} items`
}

function getUniqueReplacerSet (replacerArray) {
  const replacerSet = new Set()
  for (const value of replacerArray) {
    if (typeof value === 'string' || typeof value === 'number') {
      replacerSet.add(String(value))
    }
  }
  return replacerSet
}

function getStrictOption (options) {
  if (hasOwnProperty.call(options, 'strict')) {
    const value = options.strict
    if (typeof value !== 'boolean') {
      throw new TypeError('The "strict" argument must be of type boolean')
    }
    if (value) {
      return (value) => {
        let message = `Object can not safely be stringified. Received type ${typeof value}`
        if (typeof value !== 'function') message += ` (${value.toString()})`
        throw new Error(message)
      }
    }
  }
}

function configure (options) {
  options = { ...options }
  const fail = getStrictOption(options)
  if (fail) {
    if (options.bigint === undefined) {
      options.bigint = false
    }
    if (!('circularValue' in options)) {
      options.circularValue = Error
    }
  }
  const circularValue = getCircularValueOption(options)
  const bigint = getBooleanOption(options, 'bigint')
  const deterministic = getDeterministicOption(options)
  const comparator = typeof deterministic === 'function' ? deterministic : undefined
  const maximumDepth = getPositiveIntegerOption(options, 'maximumDepth')
  const maximumBreadth = getPositiveIntegerOption(options, 'maximumBreadth')

  function stringifyFnReplacer (key, parent, stack, replacer, spacer, indentation) {
    let value = parent[key]

    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
      value = value.toJSON(key)
    }
    value = replacer.call(parent, key, value)

    switch (typeof value) {
      case 'string':
        return strEscape(value)
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }

        let res = ''
        let join = ','
        const originalIndentation = indentation

        if (Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          if (spacer !== '') {
            indentation += spacer
            res += `\n${indentation}`
            join = `,\n${indentation}`
          }
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation)
            res += tmp !== undefined ? tmp : 'null'
            res += join
          }
          const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`
          }
          if (spacer !== '') {
            res += `\n${originalIndentation}`
          }
          stack.pop()
          return `[${res}]`
        }

        let keys = Object.keys(value)
        const keyLength = keys.length
        if (keyLength === 0) {
          return '{}'
        }
        if (maximumDepth < stack.length + 1) {
          return '"[Object]"'
        }
        let whitespace = ''
        let separator = ''
        if (spacer !== '') {
          indentation += spacer
          join = `,\n${indentation}`
          whitespace = ' '
        }
        const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth)
        if (deterministic && !isTypedArrayWithEntries(value)) {
          keys = sort(keys, comparator)
        }
        stack.push(value)
        for (let i = 0; i < maximumPropertiesToStringify; i++) {
          const key = keys[i]
          const tmp = stringifyFnReplacer(key, value, stack, replacer, spacer, indentation)
          if (tmp !== undefined) {
            res += `${separator}${strEscape(key)}:${whitespace}${tmp}`
            separator = join
          }
        }
        if (keyLength > maximumBreadth) {
          const removedKeys = keyLength - maximumBreadth
          res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`
          separator = join
        }
        if (spacer !== '' && separator.length > 1) {
          res = `\n${indentation}${res}\n${originalIndentation}`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'undefined':
        return undefined
      case 'bigint':
        if (bigint) {
          return String(value)
        }
        // fallthrough
      default:
        return fail ? fail(value) : undefined
    }
  }

  function stringifyArrayReplacer (key, value, stack, replacer, spacer, indentation) {
    if (typeof value === 'object' && value !== null && typeof value.toJSON === 'function') {
      value = value.toJSON(key)
    }

    switch (typeof value) {
      case 'string':
        return strEscape(value)
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }

        const originalIndentation = indentation
        let res = ''
        let join = ','

        if (Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          if (spacer !== '') {
            indentation += spacer
            res += `\n${indentation}`
            join = `,\n${indentation}`
          }
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation)
            res += tmp !== undefined ? tmp : 'null'
            res += join
          }
          const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`
          }
          if (spacer !== '') {
            res += `\n${originalIndentation}`
          }
          stack.pop()
          return `[${res}]`
        }
        stack.push(value)
        let whitespace = ''
        if (spacer !== '') {
          indentation += spacer
          join = `,\n${indentation}`
          whitespace = ' '
        }
        let separator = ''
        for (const key of replacer) {
          const tmp = stringifyArrayReplacer(key, value[key], stack, replacer, spacer, indentation)
          if (tmp !== undefined) {
            res += `${separator}${strEscape(key)}:${whitespace}${tmp}`
            separator = join
          }
        }
        if (spacer !== '' && separator.length > 1) {
          res = `\n${indentation}${res}\n${originalIndentation}`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'undefined':
        return undefined
      case 'bigint':
        if (bigint) {
          return String(value)
        }
        // fallthrough
      default:
        return fail ? fail(value) : undefined
    }
  }

  function stringifyIndent (key, value, stack, spacer, indentation) {
    switch (typeof value) {
      case 'string':
        return strEscape(value)
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (typeof value.toJSON === 'function') {
          value = value.toJSON(key)
          // Prevent calling `toJSON` again.
          if (typeof value !== 'object') {
            return stringifyIndent(key, value, stack, spacer, indentation)
          }
          if (value === null) {
            return 'null'
          }
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }
        const originalIndentation = indentation

        if (Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          indentation += spacer
          let res = `\n${indentation}`
          const join = `,\n${indentation}`
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation)
            res += tmp !== undefined ? tmp : 'null'
            res += join
          }
          const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `${join}"... ${getItemCount(removedKeys)} not stringified"`
          }
          res += `\n${originalIndentation}`
          stack.pop()
          return `[${res}]`
        }

        let keys = Object.keys(value)
        const keyLength = keys.length
        if (keyLength === 0) {
          return '{}'
        }
        if (maximumDepth < stack.length + 1) {
          return '"[Object]"'
        }
        indentation += spacer
        const join = `,\n${indentation}`
        let res = ''
        let separator = ''
        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth)
        if (isTypedArrayWithEntries(value)) {
          res += stringifyTypedArray(value, join, maximumBreadth)
          keys = keys.slice(value.length)
          maximumPropertiesToStringify -= value.length
          separator = join
        }
        if (deterministic) {
          keys = sort(keys, comparator)
        }
        stack.push(value)
        for (let i = 0; i < maximumPropertiesToStringify; i++) {
          const key = keys[i]
          const tmp = stringifyIndent(key, value[key], stack, spacer, indentation)
          if (tmp !== undefined) {
            res += `${separator}${strEscape(key)}: ${tmp}`
            separator = join
          }
        }
        if (keyLength > maximumBreadth) {
          const removedKeys = keyLength - maximumBreadth
          res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`
          separator = join
        }
        if (separator !== '') {
          res = `\n${indentation}${res}\n${originalIndentation}`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'undefined':
        return undefined
      case 'bigint':
        if (bigint) {
          return String(value)
        }
        // fallthrough
      default:
        return fail ? fail(value) : undefined
    }
  }

  function stringifySimple (key, value, stack) {
    switch (typeof value) {
      case 'string':
        return strEscape(value)
      case 'object': {
        if (value === null) {
          return 'null'
        }
        if (typeof value.toJSON === 'function') {
          value = value.toJSON(key)
          // Prevent calling `toJSON` again
          if (typeof value !== 'object') {
            return stringifySimple(key, value, stack)
          }
          if (value === null) {
            return 'null'
          }
        }
        if (stack.indexOf(value) !== -1) {
          return circularValue
        }

        let res = ''

        const hasLength = value.length !== undefined
        if (hasLength && Array.isArray(value)) {
          if (value.length === 0) {
            return '[]'
          }
          if (maximumDepth < stack.length + 1) {
            return '"[Array]"'
          }
          stack.push(value)
          const maximumValuesToStringify = Math.min(value.length, maximumBreadth)
          let i = 0
          for (; i < maximumValuesToStringify - 1; i++) {
            const tmp = stringifySimple(String(i), value[i], stack)
            res += tmp !== undefined ? tmp : 'null'
            res += ','
          }
          const tmp = stringifySimple(String(i), value[i], stack)
          res += tmp !== undefined ? tmp : 'null'
          if (value.length - 1 > maximumBreadth) {
            const removedKeys = value.length - maximumBreadth - 1
            res += `,"... ${getItemCount(removedKeys)} not stringified"`
          }
          stack.pop()
          return `[${res}]`
        }

        let keys = Object.keys(value)
        const keyLength = keys.length
        if (keyLength === 0) {
          return '{}'
        }
        if (maximumDepth < stack.length + 1) {
          return '"[Object]"'
        }
        let separator = ''
        let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth)
        if (hasLength && isTypedArrayWithEntries(value)) {
          res += stringifyTypedArray(value, ',', maximumBreadth)
          keys = keys.slice(value.length)
          maximumPropertiesToStringify -= value.length
          separator = ','
        }
        if (deterministic) {
          keys = sort(keys, comparator)
        }
        stack.push(value)
        for (let i = 0; i < maximumPropertiesToStringify; i++) {
          const key = keys[i]
          const tmp = stringifySimple(key, value[key], stack)
          if (tmp !== undefined) {
            res += `${separator}${strEscape(key)}:${tmp}`
            separator = ','
          }
        }
        if (keyLength > maximumBreadth) {
          const removedKeys = keyLength - maximumBreadth
          res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`
        }
        stack.pop()
        return `{${res}}`
      }
      case 'number':
        return isFinite(value) ? String(value) : fail ? fail(value) : 'null'
      case 'boolean':
        return value === true ? 'true' : 'false'
      case 'undefined':
        return undefined
      case 'bigint':
        if (bigint) {
          return String(value)
        }
        // fallthrough
      default:
        return fail ? fail(value) : undefined
    }
  }

  function stringify (value, replacer, space) {
    if (arguments.length > 1) {
      let spacer = ''
      if (typeof space === 'number') {
        spacer = ' '.repeat(Math.min(space, 10))
      } else if (typeof space === 'string') {
        spacer = space.slice(0, 10)
      }
      if (replacer != null) {
        if (typeof replacer === 'function') {
          return stringifyFnReplacer('', { '': value }, [], replacer, spacer, '')
        }
        if (Array.isArray(replacer)) {
          return stringifyArrayReplacer('', value, [], getUniqueReplacerSet(replacer), spacer, '')
        }
      }
      if (spacer.length !== 0) {
        return stringifyIndent('', value, [], spacer, '')
      }
    }
    return stringifySimple('', value, [])
  }

  return stringify
}


/***/ }),

/***/ 359348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { EventEmitter } = __webpack_require__(24434)
const { Worker } = __webpack_require__(728167)
const { join } = __webpack_require__(16928)
const { pathToFileURL } = __webpack_require__(187016)
const { wait } = __webpack_require__(448143)
const {
  WRITE_INDEX,
  READ_INDEX
} = __webpack_require__(757784)
const buffer = __webpack_require__(320181)
const assert = __webpack_require__(442613)

const kImpl = Symbol('kImpl')

// V8 limit for string size
const MAX_STRING = buffer.constants.MAX_STRING_LENGTH

class FakeWeakRef {
  constructor (value) {
    this._value = value
  }

  deref () {
    return this._value
  }
}

const FinalizationRegistry = global.FinalizationRegistry || class FakeFinalizationRegistry {
  register () {}
  unregister () {}
}

const WeakRef = global.WeakRef || FakeWeakRef

const registry = new FinalizationRegistry((worker) => {
  if (worker.exited) {
    return
  }
  worker.terminate()
})

function createWorker (stream, opts) {
  const { filename, workerData } = opts

  const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {}
  const toExecute = bundlerOverrides['thread-stream-worker'] || join(__dirname, 'lib', 'worker.js')

  const worker = new Worker(toExecute, {
    ...opts.workerOpts,
    workerData: {
      filename: filename.indexOf('file://') === 0
        ? filename
        : pathToFileURL(filename).href,
      dataBuf: stream[kImpl].dataBuf,
      stateBuf: stream[kImpl].stateBuf,
      workerData
    }
  })

  // We keep a strong reference for now,
  // we need to start writing first
  worker.stream = new FakeWeakRef(stream)

  worker.on('message', onWorkerMessage)
  worker.on('exit', onWorkerExit)
  registry.register(stream, worker)

  return worker
}

function drain (stream) {
  assert(!stream[kImpl].sync)
  if (stream[kImpl].needDrain) {
    stream[kImpl].needDrain = false
    stream.emit('drain')
  }
}

function nextFlush (stream) {
  const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX)
  let leftover = stream[kImpl].data.length - writeIndex

  if (leftover > 0) {
    if (stream[kImpl].buf.length === 0) {
      stream[kImpl].flushing = false

      if (stream[kImpl].ending) {
        end(stream)
      } else if (stream[kImpl].needDrain) {
        process.nextTick(drain, stream)
      }

      return
    }

    let toWrite = stream[kImpl].buf.slice(0, leftover)
    let toWriteBytes = Buffer.byteLength(toWrite)
    if (toWriteBytes <= leftover) {
      stream[kImpl].buf = stream[kImpl].buf.slice(leftover)
      // process._rawDebug('writing ' + toWrite.length)
      write(stream, toWrite, nextFlush.bind(null, stream))
    } else {
      // multi-byte utf-8
      stream.flush(() => {
        // err is already handled in flush()
        if (stream.destroyed) {
          return
        }

        Atomics.store(stream[kImpl].state, READ_INDEX, 0)
        Atomics.store(stream[kImpl].state, WRITE_INDEX, 0)

        // Find a toWrite length that fits the buffer
        // it must exists as the buffer is at least 4 bytes length
        // and the max utf-8 length for a char is 4 bytes.
        while (toWriteBytes > stream[kImpl].data.length) {
          leftover = leftover / 2
          toWrite = stream[kImpl].buf.slice(0, leftover)
          toWriteBytes = Buffer.byteLength(toWrite)
        }
        stream[kImpl].buf = stream[kImpl].buf.slice(leftover)
        write(stream, toWrite, nextFlush.bind(null, stream))
      })
    }
  } else if (leftover === 0) {
    if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
      // we had a flushSync in the meanwhile
      return
    }
    stream.flush(() => {
      Atomics.store(stream[kImpl].state, READ_INDEX, 0)
      Atomics.store(stream[kImpl].state, WRITE_INDEX, 0)
      nextFlush(stream)
    })
  } else {
    // This should never happen
    throw new Error('overwritten')
  }
}

function onWorkerMessage (msg) {
  const stream = this.stream.deref()
  if (stream === undefined) {
    this.exited = true
    // Terminate the worker.
    this.terminate()
    return
  }

  switch (msg.code) {
    case 'READY':
      // Replace the FakeWeakRef with a
      // proper one.
      this.stream = new WeakRef(stream)

      stream.flush(() => {
        stream[kImpl].ready = true
        stream.emit('ready')
      })
      break
    case 'ERROR':
      destroy(stream, msg.err)
      break
    default:
      throw new Error('this should not happen: ' + msg.code)
  }
}

function onWorkerExit (code) {
  const stream = this.stream.deref()
  if (stream === undefined) {
    // Nothing to do, the worker already exit
    return
  }
  registry.unregister(stream)
  stream.worker.exited = true
  stream.worker.off('exit', onWorkerExit)
  destroy(stream, code !== 0 ? new Error('The worker thread exited') : null)
}

class ThreadStream extends EventEmitter {
  constructor (opts = {}) {
    super()

    if (opts.bufferSize < 4) {
      throw new Error('bufferSize must at least fit a 4-byte utf-8 char')
    }

    this[kImpl] = {}
    this[kImpl].stateBuf = new SharedArrayBuffer(128)
    this[kImpl].state = new Int32Array(this[kImpl].stateBuf)
    this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024)
    this[kImpl].data = Buffer.from(this[kImpl].dataBuf)
    this[kImpl].sync = opts.sync || false
    this[kImpl].ending = false
    this[kImpl].ended = false
    this[kImpl].needDrain = false
    this[kImpl].destroyed = false
    this[kImpl].flushing = false
    this[kImpl].ready = false
    this[kImpl].finished = false
    this[kImpl].errored = null
    this[kImpl].closed = false
    this[kImpl].buf = ''

    // TODO (fix): Make private?
    this.worker = createWorker(this, opts) // TODO (fix): make private
  }

  write (data) {
    if (this[kImpl].destroyed) {
      throw new Error('the worker has exited')
    }

    if (this[kImpl].ending) {
      throw new Error('the worker is ending')
    }

    if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
      try {
        writeSync(this)
        this[kImpl].flushing = true
      } catch (err) {
        destroy(this, err)
        return false
      }
    }

    this[kImpl].buf += data

    if (this[kImpl].sync) {
      try {
        writeSync(this)
        return true
      } catch (err) {
        destroy(this, err)
        return false
      }
    }

    if (!this[kImpl].flushing) {
      this[kImpl].flushing = true
      setImmediate(nextFlush, this)
    }

    this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0
    return !this[kImpl].needDrain
  }

  end () {
    if (this[kImpl].destroyed) {
      return
    }

    this[kImpl].ending = true
    end(this)
  }

  flush (cb) {
    if (this[kImpl].destroyed) {
      if (typeof cb === 'function') {
        process.nextTick(cb, new Error('the worker has exited'))
      }
      return
    }

    // TODO write all .buf
    const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX)
    // process._rawDebug(`(flush) readIndex (${Atomics.load(this.state, READ_INDEX)}) writeIndex (${Atomics.load(this.state, WRITE_INDEX)})`)
    wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res) => {
      if (err) {
        destroy(this, err)
        process.nextTick(cb, err)
        return
      }
      if (res === 'not-equal') {
        // TODO handle deadlock
        this.flush(cb)
        return
      }
      process.nextTick(cb)
    })
  }

  flushSync () {
    if (this[kImpl].destroyed) {
      return
    }

    writeSync(this)
    flushSync(this)
  }

  unref () {
    this.worker.unref()
  }

  ref () {
    this.worker.ref()
  }

  get ready () {
    return this[kImpl].ready
  }

  get destroyed () {
    return this[kImpl].destroyed
  }

  get closed () {
    return this[kImpl].closed
  }

  get writable () {
    return !this[kImpl].destroyed && !this[kImpl].ending
  }

  get writableEnded () {
    return this[kImpl].ending
  }

  get writableFinished () {
    return this[kImpl].finished
  }

  get writableNeedDrain () {
    return this[kImpl].needDrain
  }

  get writableObjectMode () {
    return false
  }

  get writableErrored () {
    return this[kImpl].errored
  }
}

function destroy (stream, err) {
  if (stream[kImpl].destroyed) {
    return
  }
  stream[kImpl].destroyed = true

  if (err) {
    stream[kImpl].errored = err
    stream.emit('error', err)
  }

  if (!stream.worker.exited) {
    stream.worker.terminate()
      .catch(() => {})
      .then(() => {
        stream[kImpl].closed = true
        stream.emit('close')
      })
  } else {
    setImmediate(() => {
      stream[kImpl].closed = true
      stream.emit('close')
    })
  }
}

function write (stream, data, cb) {
  // data is smaller than the shared buffer length
  const current = Atomics.load(stream[kImpl].state, WRITE_INDEX)
  const length = Buffer.byteLength(data)
  stream[kImpl].data.write(data, current)
  Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length)
  Atomics.notify(stream[kImpl].state, WRITE_INDEX)
  cb()
  return true
}

function end (stream) {
  if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
    return
  }
  stream[kImpl].ended = true

  try {
    stream.flushSync()

    let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX)

    // process._rawDebug('writing index')
    Atomics.store(stream[kImpl].state, WRITE_INDEX, -1)
    // process._rawDebug(`(end) readIndex (${Atomics.load(stream.state, READ_INDEX)}) writeIndex (${Atomics.load(stream.state, WRITE_INDEX)})`)
    Atomics.notify(stream[kImpl].state, WRITE_INDEX)

    // Wait for the process to complete
    let spins = 0
    while (readIndex !== -1) {
      // process._rawDebug(`read = ${read}`)
      Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000)
      readIndex = Atomics.load(stream[kImpl].state, READ_INDEX)

      if (readIndex === -2) {
        throw new Error('end() failed')
      }

      if (++spins === 10) {
        throw new Error('end() took too long (10s)')
      }
    }

    process.nextTick(() => {
      stream[kImpl].finished = true
      stream.emit('finish')
    })
  } catch (err) {
    destroy(stream, err)
  }
  // process._rawDebug('end finished...')
}

function writeSync (stream) {
  const cb = () => {
    if (stream[kImpl].ending) {
      end(stream)
    } else if (stream[kImpl].needDrain) {
      process.nextTick(drain, stream)
    }
  }
  stream[kImpl].flushing = false

  while (stream[kImpl].buf.length !== 0) {
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX)
    let leftover = stream[kImpl].data.length - writeIndex
    if (leftover === 0) {
      flushSync(stream)
      Atomics.store(stream[kImpl].state, READ_INDEX, 0)
      Atomics.store(stream[kImpl].state, WRITE_INDEX, 0)
      continue
    } else if (leftover < 0) {
      // stream should never happen
      throw new Error('overwritten')
    }

    let toWrite = stream[kImpl].buf.slice(0, leftover)
    let toWriteBytes = Buffer.byteLength(toWrite)
    if (toWriteBytes <= leftover) {
      stream[kImpl].buf = stream[kImpl].buf.slice(leftover)
      // process._rawDebug('writing ' + toWrite.length)
      write(stream, toWrite, cb)
    } else {
      // multi-byte utf-8
      flushSync(stream)
      Atomics.store(stream[kImpl].state, READ_INDEX, 0)
      Atomics.store(stream[kImpl].state, WRITE_INDEX, 0)

      // Find a toWrite length that fits the buffer
      // it must exists as the buffer is at least 4 bytes length
      // and the max utf-8 length for a char is 4 bytes.
      while (toWriteBytes > stream[kImpl].buf.length) {
        leftover = leftover / 2
        toWrite = stream[kImpl].buf.slice(0, leftover)
        toWriteBytes = Buffer.byteLength(toWrite)
      }
      stream[kImpl].buf = stream[kImpl].buf.slice(leftover)
      write(stream, toWrite, cb)
    }
  }
}

function flushSync (stream) {
  if (stream[kImpl].flushing) {
    throw new Error('unable to flush while flushing')
  }

  // process._rawDebug('flushSync started')

  const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX)

  let spins = 0

  // TODO handle deadlock
  while (true) {
    const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX)

    if (readIndex === -2) {
      throw new Error('_flushSync failed')
    }

    // process._rawDebug(`(flushSync) readIndex (${readIndex}) writeIndex (${writeIndex})`)
    if (readIndex !== writeIndex) {
      // TODO stream timeouts for some reason.
      Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000)
    } else {
      break
    }

    if (++spins === 10) {
      throw new Error('_flushSync took too long (10s)')
    }
  }
  // process._rawDebug('flushSync finished')
}

module.exports = ThreadStream


/***/ }),

/***/ 757784:
/***/ ((module) => {

"use strict";


const WRITE_INDEX = 4
const READ_INDEX = 8

module.exports = {
  WRITE_INDEX,
  READ_INDEX
}


/***/ }),

/***/ 448143:
/***/ ((module) => {

"use strict";


const MAX_TIMEOUT = 1000

function wait (state, index, expected, timeout, done) {
  const max = Date.now() + timeout
  let current = Atomics.load(state, index)
  if (current === expected) {
    done(null, 'ok')
    return
  }
  let prior = current
  const check = (backoff) => {
    if (Date.now() > max) {
      done(null, 'timed-out')
    } else {
      setTimeout(() => {
        prior = current
        current = Atomics.load(state, index)
        if (current === prior) {
          check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2)
        } else {
          if (current === expected) done(null, 'ok')
          else done(null, 'not-equal')
        }
      }, backoff)
    }
  }
  check(1)
}

// let waitDiffCount = 0
function waitDiff (state, index, expected, timeout, done) {
  // const id = waitDiffCount++
  // process._rawDebug(`>>> waitDiff ${id}`)
  const max = Date.now() + timeout
  let current = Atomics.load(state, index)
  if (current !== expected) {
    done(null, 'ok')
    return
  }
  const check = (backoff) => {
    // process._rawDebug(`${id} ${index} current ${current} expected ${expected}`)
    // process._rawDebug('' + backoff)
    if (Date.now() > max) {
      done(null, 'timed-out')
    } else {
      setTimeout(() => {
        current = Atomics.load(state, index)
        if (current !== expected) {
          done(null, 'ok')
        } else {
          check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2)
        }
      }, backoff)
    }
  }
  check(1)
}

module.exports = { wait, waitDiff }


/***/ }),

/***/ 237214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const errSerializer = __webpack_require__(143985)
const reqSerializers = __webpack_require__(972802)
const resSerializers = __webpack_require__(884344)

module.exports = {
  err: errSerializer,
  mapHttpRequest: reqSerializers.mapHttpRequest,
  mapHttpResponse: resSerializers.mapHttpResponse,
  req: reqSerializers.reqSerializer,
  res: resSerializers.resSerializer,

  wrapErrorSerializer: function wrapErrorSerializer (customSerializer) {
    if (customSerializer === errSerializer) return customSerializer
    return function wrapErrSerializer (err) {
      return customSerializer(errSerializer(err))
    }
  },

  wrapRequestSerializer: function wrapRequestSerializer (customSerializer) {
    if (customSerializer === reqSerializers.reqSerializer) return customSerializer
    return function wrappedReqSerializer (req) {
      return customSerializer(reqSerializers.reqSerializer(req))
    }
  },

  wrapResponseSerializer: function wrapResponseSerializer (customSerializer) {
    if (customSerializer === resSerializers.resSerializer) return customSerializer
    return function wrappedResSerializer (res) {
      return customSerializer(resSerializers.resSerializer(res))
    }
  }
}


/***/ }),

/***/ 143985:
/***/ ((module) => {

"use strict";


module.exports = errSerializer

const { toString } = Object.prototype
const seen = Symbol('circular-ref-tag')
const rawSymbol = Symbol('pino-raw-err-ref')
const pinoErrProto = Object.create({}, {
  type: {
    enumerable: true,
    writable: true,
    value: undefined
  },
  message: {
    enumerable: true,
    writable: true,
    value: undefined
  },
  stack: {
    enumerable: true,
    writable: true,
    value: undefined
  },
  raw: {
    enumerable: false,
    get: function () {
      return this[rawSymbol]
    },
    set: function (val) {
      this[rawSymbol] = val
    }
  }
})
Object.defineProperty(pinoErrProto, rawSymbol, {
  writable: true,
  value: {}
})

function errSerializer (err) {
  if (!(err instanceof Error)) {
    return err
  }

  err[seen] = undefined // tag to prevent re-looking at this
  const _err = Object.create(pinoErrProto)
  _err.type = toString.call(err.constructor) === '[object Function]'
    ? err.constructor.name
    : err.name
  _err.message = err.message
  _err.stack = err.stack
  for (const key in err) {
    if (_err[key] === undefined) {
      const val = err[key]
      if (val instanceof Error) {
        /* eslint-disable no-prototype-builtins */
        if (!val.hasOwnProperty(seen)) {
          _err[key] = errSerializer(val)
        }
      } else {
        _err[key] = val
      }
    }
  }

  delete err[seen] // clean up tag in case err is serialized again later
  _err.raw = err
  return _err
}


/***/ }),

/***/ 972802:
/***/ ((module) => {

"use strict";


module.exports = {
  mapHttpRequest,
  reqSerializer
}

const rawSymbol = Symbol('pino-raw-req-ref')
const pinoReqProto = Object.create({}, {
  id: {
    enumerable: true,
    writable: true,
    value: ''
  },
  method: {
    enumerable: true,
    writable: true,
    value: ''
  },
  url: {
    enumerable: true,
    writable: true,
    value: ''
  },
  query: {
    enumerable: true,
    writable: true,
    value: ''
  },
  params: {
    enumerable: true,
    writable: true,
    value: ''
  },
  headers: {
    enumerable: true,
    writable: true,
    value: {}
  },
  remoteAddress: {
    enumerable: true,
    writable: true,
    value: ''
  },
  remotePort: {
    enumerable: true,
    writable: true,
    value: ''
  },
  raw: {
    enumerable: false,
    get: function () {
      return this[rawSymbol]
    },
    set: function (val) {
      this[rawSymbol] = val
    }
  }
})
Object.defineProperty(pinoReqProto, rawSymbol, {
  writable: true,
  value: {}
})

function reqSerializer (req) {
  // req.info is for hapi compat.
  const connection = req.info || req.socket
  const _req = Object.create(pinoReqProto)
  _req.id = (typeof req.id === 'function' ? req.id() : (req.id || (req.info ? req.info.id : undefined)))
  _req.method = req.method
  // req.originalUrl is for expressjs compat.
  if (req.originalUrl) {
    _req.url = req.originalUrl
    _req.query = req.query
    _req.params = req.params
  } else {
    // req.url.path is  for hapi compat.
    _req.url = req.path || (req.url ? (req.url.path || req.url) : undefined)
  }
  _req.headers = req.headers
  _req.remoteAddress = connection && connection.remoteAddress
  _req.remotePort = connection && connection.remotePort
  // req.raw is  for hapi compat/equivalence
  _req.raw = req.raw || req
  return _req
}

function mapHttpRequest (req) {
  return {
    req: reqSerializer(req)
  }
}


/***/ }),

/***/ 884344:
/***/ ((module) => {

"use strict";


module.exports = {
  mapHttpResponse,
  resSerializer
}

const rawSymbol = Symbol('pino-raw-res-ref')
const pinoResProto = Object.create({}, {
  statusCode: {
    enumerable: true,
    writable: true,
    value: 0
  },
  headers: {
    enumerable: true,
    writable: true,
    value: ''
  },
  raw: {
    enumerable: false,
    get: function () {
      return this[rawSymbol]
    },
    set: function (val) {
      this[rawSymbol] = val
    }
  }
})
Object.defineProperty(pinoResProto, rawSymbol, {
  writable: true,
  value: {}
})

function resSerializer (res) {
  const _res = Object.create(pinoResProto)
  _res.statusCode = res.statusCode
  _res.headers = res.getHeaders ? res.getHeaders() : res._headers
  _res.raw = res
  return _res
}

function mapHttpResponse (res) {
  return {
    res: resSerializer(res)
  }
}


/***/ }),

/***/ 954811:
/***/ ((module) => {

"use strict";


function noOpPrepareStackTrace (_, stack) {
  return stack
}

module.exports = function getCallers () {
  const originalPrepare = Error.prepareStackTrace
  Error.prepareStackTrace = noOpPrepareStackTrace
  const stack = new Error().stack
  Error.prepareStackTrace = originalPrepare

  if (!Array.isArray(stack)) {
    return undefined
  }

  const entries = stack.slice(2)

  const fileNames = []

  for (const entry of entries) {
    if (!entry) {
      continue
    }

    fileNames.push(entry.getFileName())
  }

  return fileNames
}


/***/ }),

/***/ 952071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const warning = __webpack_require__(728568)()
module.exports = warning

const warnName = 'PinoWarning'

warning.create(warnName, 'PINODEP008', 'prettyPrint is deprecated, look at https://github.com/pinojs/pino-pretty for alternatives.')

warning.create(warnName, 'PINODEP009', 'The use of pino.final is discouraged in Node.js v14+ and not required. It will be removed in the next major version')


/***/ }),

/***/ 495787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint no-prototype-builtins: 0 */
const {
  lsCacheSym,
  levelValSym,
  useOnlyCustomLevelsSym,
  streamSym,
  formattersSym,
  hooksSym
} = __webpack_require__(865835)
const { noop, genLog } = __webpack_require__(316761)

const levels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
}
const levelMethods = {
  fatal: (hook) => {
    const logFatal = genLog(levels.fatal, hook)
    return function (...args) {
      const stream = this[streamSym]
      logFatal.call(this, ...args)
      if (typeof stream.flushSync === 'function') {
        try {
          stream.flushSync()
        } catch (e) {
          // https://github.com/pinojs/pino/pull/740#discussion_r346788313
        }
      }
    }
  },
  error: (hook) => genLog(levels.error, hook),
  warn: (hook) => genLog(levels.warn, hook),
  info: (hook) => genLog(levels.info, hook),
  debug: (hook) => genLog(levels.debug, hook),
  trace: (hook) => genLog(levels.trace, hook)
}

const nums = Object.keys(levels).reduce((o, k) => {
  o[levels[k]] = k
  return o
}, {})

const initialLsCache = Object.keys(nums).reduce((o, k) => {
  o[k] = '{"level":' + Number(k)
  return o
}, {})

function genLsCache (instance) {
  const formatter = instance[formattersSym].level
  const { labels } = instance.levels
  const cache = {}
  for (const label in labels) {
    const level = formatter(labels[label], Number(label))
    cache[label] = JSON.stringify(level).slice(0, -1)
  }
  instance[lsCacheSym] = cache
  return instance
}

function isStandardLevel (level, useOnlyCustomLevels) {
  if (useOnlyCustomLevels) {
    return false
  }

  switch (level) {
    case 'fatal':
    case 'error':
    case 'warn':
    case 'info':
    case 'debug':
    case 'trace':
      return true
    default:
      return false
  }
}

function setLevel (level) {
  const { labels, values } = this.levels
  if (typeof level === 'number') {
    if (labels[level] === undefined) throw Error('unknown level value' + level)
    level = labels[level]
  }
  if (values[level] === undefined) throw Error('unknown level ' + level)
  const preLevelVal = this[levelValSym]
  const levelVal = this[levelValSym] = values[level]
  const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym]
  const hook = this[hooksSym].logMethod

  for (const key in values) {
    if (levelVal > values[key]) {
      this[key] = noop
      continue
    }
    this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook)
  }

  this.emit(
    'level-change',
    level,
    levelVal,
    labels[preLevelVal],
    preLevelVal
  )
}

function getLevel (level) {
  const { levels, levelVal } = this
  // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
  return (levels && levels.labels) ? levels.labels[levelVal] : ''
}

function isLevelEnabled (logLevel) {
  const { values } = this.levels
  const logLevelVal = values[logLevel]
  return logLevelVal !== undefined && (logLevelVal >= this[levelValSym])
}

function mappings (customLevels = null, useOnlyCustomLevels = false) {
  const customNums = customLevels
    /* eslint-disable */
    ? Object.keys(customLevels).reduce((o, k) => {
        o[customLevels[k]] = k
        return o
      }, {})
    : null
    /* eslint-enable */

  const labels = Object.assign(
    Object.create(Object.prototype, { Infinity: { value: 'silent' } }),
    useOnlyCustomLevels ? null : nums,
    customNums
  )
  const values = Object.assign(
    Object.create(Object.prototype, { silent: { value: Infinity } }),
    useOnlyCustomLevels ? null : levels,
    customLevels
  )
  return { labels, values }
}

function assertDefaultLevelFound (defaultLevel, customLevels, useOnlyCustomLevels) {
  if (typeof defaultLevel === 'number') {
    const values = [].concat(
      Object.keys(customLevels || {}).map(key => customLevels[key]),
      useOnlyCustomLevels ? [] : Object.keys(nums).map(level => +level),
      Infinity
    )
    if (!values.includes(defaultLevel)) {
      throw Error(`default level:${defaultLevel} must be included in custom levels`)
    }
    return
  }

  const labels = Object.assign(
    Object.create(Object.prototype, { silent: { value: Infinity } }),
    useOnlyCustomLevels ? null : levels,
    customLevels
  )
  if (!(defaultLevel in labels)) {
    throw Error(`default level:${defaultLevel} must be included in custom levels`)
  }
}

function assertNoLevelCollisions (levels, customLevels) {
  const { labels, values } = levels
  for (const k in customLevels) {
    if (k in values) {
      throw Error('levels cannot be overridden')
    }
    if (customLevels[k] in labels) {
      throw Error('pre-existing level values cannot be used for new levels')
    }
  }
}

module.exports = {
  initialLsCache,
  genLsCache,
  levelMethods,
  getLevel,
  setLevel,
  isLevelEnabled,
  mappings,
  levels,
  assertNoLevelCollisions,
  assertDefaultLevelFound
}


/***/ }),

/***/ 789234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { version } = __webpack_require__(553550)

module.exports = { version }


/***/ }),

/***/ 840351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const metadata = Symbol.for('pino.metadata')
const { levels } = __webpack_require__(495787)

const defaultLevels = Object.create(levels)
defaultLevels.silent = Infinity

const DEFAULT_INFO_LEVEL = levels.info

function multistream (streamsArray, opts) {
  let counter = 0
  streamsArray = streamsArray || []
  opts = opts || { dedupe: false }

  let levels = defaultLevels
  if (opts.levels && typeof opts.levels === 'object') {
    levels = opts.levels
  }

  const res = {
    write,
    add,
    flushSync,
    end,
    minLevel: 0,
    streams: [],
    clone,
    [metadata]: true
  }

  if (Array.isArray(streamsArray)) {
    streamsArray.forEach(add, res)
  } else {
    add.call(res, streamsArray)
  }

  // clean this object up
  // or it will stay allocated forever
  // as it is closed on the following closures
  streamsArray = null

  return res

  // we can exit early because the streams are ordered by level
  function write (data) {
    let dest
    const level = this.lastLevel
    const { streams } = this
    let stream
    for (let i = 0; i < streams.length; i++) {
      dest = streams[i]
      if (dest.level <= level) {
        stream = dest.stream
        if (stream[metadata]) {
          const { lastTime, lastMsg, lastObj, lastLogger } = this
          stream.lastLevel = level
          stream.lastTime = lastTime
          stream.lastMsg = lastMsg
          stream.lastObj = lastObj
          stream.lastLogger = lastLogger
        }
        if (!opts.dedupe || dest.level === level) {
          stream.write(data)
        }
      } else {
        break
      }
    }
  }

  function flushSync () {
    for (const { stream } of this.streams) {
      if (typeof stream.flushSync === 'function') {
        stream.flushSync()
      }
    }
  }

  function add (dest) {
    if (!dest) {
      return res
    }

    // Check that dest implements either StreamEntry or DestinationStream
    const isStream = typeof dest.write === 'function' || dest.stream
    const stream_ = dest.write ? dest : dest.stream
    // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
    if (!isStream) {
      throw Error('stream object needs to implement either StreamEntry or DestinationStream interface')
    }

    const { streams } = this

    let level
    if (typeof dest.levelVal === 'number') {
      level = dest.levelVal
    } else if (typeof dest.level === 'string') {
      level = levels[dest.level]
    } else if (typeof dest.level === 'number') {
      level = dest.level
    } else {
      level = DEFAULT_INFO_LEVEL
    }

    const dest_ = {
      stream: stream_,
      level,
      levelVal: undefined,
      id: counter++
    }

    streams.unshift(dest_)
    streams.sort(compareByLevel)

    this.minLevel = streams[0].level

    return res
  }

  function end () {
    for (const { stream } of this.streams) {
      if (typeof stream.flushSync === 'function') {
        stream.flushSync()
      }
      stream.end()
    }
  }

  function clone (level) {
    const streams = new Array(this.streams.length)

    for (let i = 0; i < streams.length; i++) {
      streams[i] = {
        level: level,
        stream: this.streams[i].stream
      }
    }

    return {
      write,
      add,
      minLevel: level,
      streams,
      clone,
      flushSync,
      [metadata]: true
    }
  }
}

function compareByLevel (a, b) {
  return a.level - b.level
}

module.exports = multistream


/***/ }),

/***/ 570824:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint no-prototype-builtins: 0 */

const { EventEmitter } = __webpack_require__(24434)
const {
  lsCacheSym,
  levelValSym,
  setLevelSym,
  getLevelSym,
  chindingsSym,
  parsedChindingsSym,
  mixinSym,
  asJsonSym,
  writeSym,
  mixinMergeStrategySym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  serializersSym,
  formattersSym,
  useOnlyCustomLevelsSym,
  needsMetadataGsym,
  redactFmtSym,
  stringifySym,
  formatOptsSym,
  stringifiersSym
} = __webpack_require__(865835)
const {
  getLevel,
  setLevel,
  isLevelEnabled,
  mappings,
  initialLsCache,
  genLsCache,
  assertNoLevelCollisions
} = __webpack_require__(495787)
const {
  asChindings,
  asJson,
  buildFormatters,
  stringify
} = __webpack_require__(316761)
const {
  version
} = __webpack_require__(789234)
const redaction = __webpack_require__(904123)

// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {}
const prototype = {
  constructor,
  child,
  bindings,
  setBindings,
  flush,
  isLevelEnabled,
  version,
  get level () { return this[getLevelSym]() },
  set level (lvl) { this[setLevelSym](lvl) },
  get levelVal () { return this[levelValSym] },
  set levelVal (n) { throw Error('levelVal is read-only') },
  [lsCacheSym]: initialLsCache,
  [writeSym]: write,
  [asJsonSym]: asJson,
  [getLevelSym]: getLevel,
  [setLevelSym]: setLevel
}

Object.setPrototypeOf(prototype, EventEmitter.prototype)

// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function () {
  return Object.create(prototype)
}

const resetChildingsFormatter = bindings => bindings
function child (bindings, options) {
  if (!bindings) {
    throw Error('missing bindings for child Pino')
  }
  options = options || {} // default options to empty object
  const serializers = this[serializersSym]
  const formatters = this[formattersSym]
  const instance = Object.create(this)

  if (options.hasOwnProperty('serializers') === true) {
    instance[serializersSym] = Object.create(null)

    for (const k in serializers) {
      instance[serializersSym][k] = serializers[k]
    }
    const parentSymbols = Object.getOwnPropertySymbols(serializers)
    /* eslint no-var: off */
    for (var i = 0; i < parentSymbols.length; i++) {
      const ks = parentSymbols[i]
      instance[serializersSym][ks] = serializers[ks]
    }

    for (const bk in options.serializers) {
      instance[serializersSym][bk] = options.serializers[bk]
    }
    const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers)
    for (var bi = 0; bi < bindingsSymbols.length; bi++) {
      const bks = bindingsSymbols[bi]
      instance[serializersSym][bks] = options.serializers[bks]
    }
  } else instance[serializersSym] = serializers
  if (options.hasOwnProperty('formatters')) {
    const { level, bindings: chindings, log } = options.formatters
    instance[formattersSym] = buildFormatters(
      level || formatters.level,
      chindings || resetChildingsFormatter,
      log || formatters.log
    )
  } else {
    instance[formattersSym] = buildFormatters(
      formatters.level,
      resetChildingsFormatter,
      formatters.log
    )
  }
  if (options.hasOwnProperty('customLevels') === true) {
    assertNoLevelCollisions(this.levels, options.customLevels)
    instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym])
    genLsCache(instance)
  }

  // redact must place before asChindings and only replace if exist
  if ((typeof options.redact === 'object' && options.redact !== null) || Array.isArray(options.redact)) {
    instance.redact = options.redact // replace redact directly
    const stringifiers = redaction(instance.redact, stringify)
    const formatOpts = { stringify: stringifiers[redactFmtSym] }
    instance[stringifySym] = stringify
    instance[stringifiersSym] = stringifiers
    instance[formatOptsSym] = formatOpts
  }

  instance[chindingsSym] = asChindings(instance, bindings)
  const childLevel = options.level || this.level
  instance[setLevelSym](childLevel)

  return instance
}

function bindings () {
  const chindings = this[chindingsSym]
  const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
  const bindingsFromJson = JSON.parse(chindingsJson)
  delete bindingsFromJson.pid
  delete bindingsFromJson.hostname
  return bindingsFromJson
}

function setBindings (newBindings) {
  const chindings = asChindings(this, newBindings)
  this[chindingsSym] = chindings
  delete this[parsedChindingsSym]
}

/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */
function defaultMixinMergeStrategy (mergeObject, mixinObject) {
  return Object.assign(mixinObject, mergeObject)
}

function write (_obj, msg, num) {
  const t = this[timeSym]()
  const mixin = this[mixinSym]
  const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy
  let obj

  if (_obj === undefined || _obj === null) {
    obj = {}
  } else if (_obj instanceof Error) {
    obj = { err: _obj }
    if (msg === undefined) {
      msg = _obj.message
    }
  } else {
    obj = _obj
    if (msg === undefined && _obj.err) {
      msg = _obj.err.message
    }
  }

  if (mixin) {
    obj = mixinMergeStrategy(obj, mixin(obj, num))
  }

  const s = this[asJsonSym](obj, msg, num, t)

  const stream = this[streamSym]
  if (stream[needsMetadataGsym] === true) {
    stream.lastLevel = num
    stream.lastObj = obj
    stream.lastMsg = msg
    stream.lastTime = t.slice(this[timeSliceIndexSym])
    stream.lastLogger = this // for child loggers
  }
  stream.write(s)
}

function noop () {}

function flush () {
  const stream = this[streamSym]
  if ('flush' in stream) stream.flush(noop)
}


/***/ }),

/***/ 904123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fastRedact = __webpack_require__(981423)
const { redactFmtSym, wildcardFirstSym } = __webpack_require__(865835)
const { rx, validator } = fastRedact

const validate = validator({
  ERR_PATHS_MUST_BE_STRINGS: () => 'pino – redacted paths must be strings',
  ERR_INVALID_PATH: (s) => `pino – redact paths array contains an invalid path (${s})`
})

const CENSOR = '[Redacted]'
const strict = false // TODO should this be configurable?

function redaction (opts, serialize) {
  const { paths, censor } = handle(opts)

  const shape = paths.reduce((o, str) => {
    rx.lastIndex = 0
    const first = rx.exec(str)
    const next = rx.exec(str)

    // ns is the top-level path segment, brackets + quoting removed.
    let ns = first[1] !== undefined
      ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, '$1')
      : first[0]

    if (ns === '*') {
      ns = wildcardFirstSym
    }

    // top level key:
    if (next === null) {
      o[ns] = null
      return o
    }

    // path with at least two segments:
    // if ns is already redacted at the top level, ignore lower level redactions
    if (o[ns] === null) {
      return o
    }

    const { index } = next
    const nextPath = `${str.substr(index, str.length - 1)}`

    o[ns] = o[ns] || []

    // shape is a mix of paths beginning with literal values and wildcard
    // paths [ "a.b.c", "*.b.z" ] should reduce to a shape of
    // { "a": [ "b.c", "b.z" ], *: [ "b.z" ] }
    // note: "b.z" is in both "a" and * arrays because "a" matches the wildcard.
    // (* entry has wildcardFirstSym as key)
    if (ns !== wildcardFirstSym && o[ns].length === 0) {
      // first time ns's get all '*' redactions so far
      o[ns].push(...(o[wildcardFirstSym] || []))
    }

    if (ns === wildcardFirstSym) {
      // new * path gets added to all previously registered literal ns's.
      Object.keys(o).forEach(function (k) {
        if (o[k]) {
          o[k].push(nextPath)
        }
      })
    }

    o[ns].push(nextPath)
    return o
  }, {})

  // the redactor assigned to the format symbol key
  // provides top level redaction for instances where
  // an object is interpolated into the msg string
  const result = {
    [redactFmtSym]: fastRedact({ paths, censor, serialize, strict })
  }

  const topCensor = (...args) => {
    return typeof censor === 'function' ? serialize(censor(...args)) : serialize(censor)
  }

  return [...Object.keys(shape), ...Object.getOwnPropertySymbols(shape)].reduce((o, k) => {
    // top level key:
    if (shape[k] === null) {
      o[k] = (value) => topCensor(value, [k])
    } else {
      const wrappedCensor = typeof censor === 'function'
        ? (value, path) => {
            return censor(value, [k, ...path])
          }
        : censor
      o[k] = fastRedact({
        paths: shape[k],
        censor: wrappedCensor,
        serialize,
        strict
      })
    }
    return o
  }, result)
}

function handle (opts) {
  if (Array.isArray(opts)) {
    opts = { paths: opts, censor: CENSOR }
    validate(opts)
    return opts
  }
  let { paths, censor = CENSOR, remove } = opts
  if (Array.isArray(paths) === false) { throw Error('pino – redact must contain an array of strings') }
  if (remove === true) censor = undefined
  validate({ paths, censor })

  return { paths, censor }
}

module.exports = redaction


/***/ }),

/***/ 865835:
/***/ ((module) => {

"use strict";


const setLevelSym = Symbol('pino.setLevel')
const getLevelSym = Symbol('pino.getLevel')
const levelValSym = Symbol('pino.levelVal')
const useLevelLabelsSym = Symbol('pino.useLevelLabels')
const useOnlyCustomLevelsSym = Symbol('pino.useOnlyCustomLevels')
const mixinSym = Symbol('pino.mixin')

const lsCacheSym = Symbol('pino.lsCache')
const chindingsSym = Symbol('pino.chindings')
const parsedChindingsSym = Symbol('pino.parsedChindings')

const asJsonSym = Symbol('pino.asJson')
const writeSym = Symbol('pino.write')
const redactFmtSym = Symbol('pino.redactFmt')

const timeSym = Symbol('pino.time')
const timeSliceIndexSym = Symbol('pino.timeSliceIndex')
const streamSym = Symbol('pino.stream')
const stringifySym = Symbol('pino.stringify')
const stringifySafeSym = Symbol('pino.stringifySafe')
const stringifiersSym = Symbol('pino.stringifiers')
const endSym = Symbol('pino.end')
const formatOptsSym = Symbol('pino.formatOpts')
const messageKeySym = Symbol('pino.messageKey')
const nestedKeySym = Symbol('pino.nestedKey')
const nestedKeyStrSym = Symbol('pino.nestedKeyStr')
const mixinMergeStrategySym = Symbol('pino.mixinMergeStrategy')

const wildcardFirstSym = Symbol('pino.wildcardFirst')

// public symbols, no need to use the same pino
// version for these
const serializersSym = Symbol.for('pino.serializers')
const formattersSym = Symbol.for('pino.formatters')
const hooksSym = Symbol.for('pino.hooks')
const needsMetadataGsym = Symbol.for('pino.metadata')

module.exports = {
  setLevelSym,
  getLevelSym,
  levelValSym,
  useLevelLabelsSym,
  mixinSym,
  lsCacheSym,
  chindingsSym,
  parsedChindingsSym,
  asJsonSym,
  writeSym,
  serializersSym,
  redactFmtSym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  stringifySym,
  stringifySafeSym,
  stringifiersSym,
  endSym,
  formatOptsSym,
  messageKeySym,
  nestedKeySym,
  wildcardFirstSym,
  needsMetadataGsym,
  useOnlyCustomLevelsSym,
  formattersSym,
  hooksSym,
  nestedKeyStrSym,
  mixinMergeStrategySym
}


/***/ }),

/***/ 98329:
/***/ ((module) => {

"use strict";


const nullTime = () => ''

const epochTime = () => `,"time":${Date.now()}`

const unixTime = () => `,"time":${Math.round(Date.now() / 1000.0)}`

const isoTime = () => `,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability

module.exports = { nullTime, epochTime, unixTime, isoTime }


/***/ }),

/***/ 316761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint no-prototype-builtins: 0 */

const format = __webpack_require__(40793)
const { mapHttpRequest, mapHttpResponse } = __webpack_require__(237214)
const SonicBoom = __webpack_require__(125146)
const warning = __webpack_require__(952071)
const {
  lsCacheSym,
  chindingsSym,
  parsedChindingsSym,
  writeSym,
  serializersSym,
  formatOptsSym,
  endSym,
  stringifiersSym,
  stringifySym,
  stringifySafeSym,
  wildcardFirstSym,
  needsMetadataGsym,
  redactFmtSym,
  streamSym,
  nestedKeySym,
  formattersSym,
  messageKeySym,
  nestedKeyStrSym
} = __webpack_require__(865835)
const { isMainThread } = __webpack_require__(728167)
const transport = __webpack_require__(482563)

function noop () {}

function genLog (level, hook) {
  if (!hook) return LOG

  return function hookWrappedLog (...args) {
    hook.call(this, args, LOG, level)
  }

  function LOG (o, ...n) {
    if (typeof o === 'object') {
      let msg = o
      if (o !== null) {
        if (o.method && o.headers && o.socket) {
          o = mapHttpRequest(o)
        } else if (typeof o.setHeader === 'function') {
          o = mapHttpResponse(o)
        }
      }
      let formatParams
      if (msg === null && n.length === 0) {
        formatParams = [null]
      } else {
        msg = n.shift()
        formatParams = n
      }
      this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level)
    } else {
      this[writeSym](null, format(o, n, this[formatOptsSym]), level)
    }
  }
}

// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function asString (str) {
  let result = ''
  let last = 0
  let found = false
  let point = 255
  const l = str.length
  if (l > 100) {
    return JSON.stringify(str)
  }
  for (var i = 0; i < l && point >= 32; i++) {
    point = str.charCodeAt(i)
    if (point === 34 || point === 92) {
      result += str.slice(last, i) + '\\'
      last = i
      found = true
    }
  }
  if (!found) {
    result = str
  } else {
    result += str.slice(last)
  }
  return point < 32 ? JSON.stringify(str) : '"' + result + '"'
}

function asJson (obj, msg, num, time) {
  const stringify = this[stringifySym]
  const stringifySafe = this[stringifySafeSym]
  const stringifiers = this[stringifiersSym]
  const end = this[endSym]
  const chindings = this[chindingsSym]
  const serializers = this[serializersSym]
  const formatters = this[formattersSym]
  const messageKey = this[messageKeySym]
  let data = this[lsCacheSym][num] + time

  // we need the child bindings added to the output first so instance logged
  // objects can take precedence when JSON.parse-ing the resulting log line
  data = data + chindings

  let value
  if (formatters.log) {
    obj = formatters.log(obj)
  }
  const wildcardStringifier = stringifiers[wildcardFirstSym]
  let propStr = ''
  for (const key in obj) {
    value = obj[key]
    if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
      value = serializers[key] ? serializers[key](value) : value

      const stringifier = stringifiers[key] || wildcardStringifier

      switch (typeof value) {
        case 'undefined':
        case 'function':
          continue
        case 'number':
          /* eslint no-fallthrough: "off" */
          if (Number.isFinite(value) === false) {
            value = null
          }
        // this case explicitly falls through to the next one
        case 'boolean':
          if (stringifier) value = stringifier(value)
          break
        case 'string':
          value = (stringifier || asString)(value)
          break
        default:
          value = (stringifier || stringify)(value, stringifySafe)
      }
      if (value === undefined) continue
      propStr += ',"' + key + '":' + value
    }
  }

  let msgStr = ''
  if (msg !== undefined) {
    value = serializers[messageKey] ? serializers[messageKey](msg) : msg
    const stringifier = stringifiers[messageKey] || wildcardStringifier

    switch (typeof value) {
      case 'function':
        break
      case 'number':
        /* eslint no-fallthrough: "off" */
        if (Number.isFinite(value) === false) {
          value = null
        }
      // this case explicitly falls through to the next one
      case 'boolean':
        if (stringifier) value = stringifier(value)
        msgStr = ',"' + messageKey + '":' + value
        break
      case 'string':
        value = (stringifier || asString)(value)
        msgStr = ',"' + messageKey + '":' + value
        break
      default:
        value = (stringifier || stringify)(value, stringifySafe)
        msgStr = ',"' + messageKey + '":' + value
    }
  }

  if (this[nestedKeySym] && propStr) {
    // place all the obj properties under the specified key
    // the nested key is already formatted from the constructor
    return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end
  } else {
    return data + propStr + msgStr + end
  }
}

function asChindings (instance, bindings) {
  let value
  let data = instance[chindingsSym]
  const stringify = instance[stringifySym]
  const stringifySafe = instance[stringifySafeSym]
  const stringifiers = instance[stringifiersSym]
  const wildcardStringifier = stringifiers[wildcardFirstSym]
  const serializers = instance[serializersSym]
  const formatter = instance[formattersSym].bindings
  bindings = formatter(bindings)

  for (const key in bindings) {
    value = bindings[key]
    const valid = key !== 'level' &&
      key !== 'serializers' &&
      key !== 'formatters' &&
      key !== 'customLevels' &&
      bindings.hasOwnProperty(key) &&
      value !== undefined
    if (valid === true) {
      value = serializers[key] ? serializers[key](value) : value
      value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe)
      if (value === undefined) continue
      data += ',"' + key + '":' + value
    }
  }
  return data
}

function getPrettyStream (opts, prettifier, dest, instance) {
  if (prettifier && typeof prettifier === 'function') {
    prettifier = prettifier.bind(instance)
    return prettifierMetaWrapper(prettifier(opts), dest, opts)
  }
  try {
    const prettyFactory = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'pino-pretty'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    prettyFactory.asMetaWrapper = prettifierMetaWrapper
    return prettifierMetaWrapper(prettyFactory(opts), dest, opts)
  } catch (e) {
    if (e.message.startsWith("Cannot find module 'pino-pretty'")) {
      throw Error('Missing `pino-pretty` module: `pino-pretty` must be installed separately')
    };
    throw e
  }
}

function prettifierMetaWrapper (pretty, dest, opts) {
  opts = Object.assign({ suppressFlushSyncWarning: false }, opts)
  let warned = false
  return {
    [needsMetadataGsym]: true,
    lastLevel: 0,
    lastMsg: null,
    lastObj: null,
    lastLogger: null,
    flushSync () {
      if (opts.suppressFlushSyncWarning || warned) {
        return
      }
      warned = true
      setMetadataProps(dest, this)
      dest.write(pretty(Object.assign({
        level: 40, // warn
        msg: 'pino.final with prettyPrint does not support flushing',
        time: Date.now()
      }, this.chindings())))
    },
    chindings () {
      const lastLogger = this.lastLogger
      let chindings = null

      // protection against flushSync being called before logging
      // anything
      if (!lastLogger) {
        return null
      }

      if (lastLogger.hasOwnProperty(parsedChindingsSym)) {
        chindings = lastLogger[parsedChindingsSym]
      } else {
        chindings = JSON.parse('{' + lastLogger[chindingsSym].substr(1) + '}')
        lastLogger[parsedChindingsSym] = chindings
      }

      return chindings
    },
    write (chunk) {
      const lastLogger = this.lastLogger
      const chindings = this.chindings()

      let time = this.lastTime

      /* istanbul ignore next */
      if (typeof time === 'number') {
        // do nothing!
      } else if (time.match(/^\d+/)) {
        time = parseInt(time)
      } else {
        time = time.slice(1, -1)
      }

      const lastObj = this.lastObj
      const lastMsg = this.lastMsg
      const errorProps = null

      const formatters = lastLogger[formattersSym]
      const formattedObj = formatters.log ? formatters.log(lastObj) : lastObj

      const messageKey = lastLogger[messageKeySym]
      if (lastMsg && formattedObj && !Object.prototype.hasOwnProperty.call(formattedObj, messageKey)) {
        formattedObj[messageKey] = lastMsg
      }

      const obj = Object.assign({
        level: this.lastLevel,
        time
      }, formattedObj, errorProps)

      const serializers = lastLogger[serializersSym]
      const keys = Object.keys(serializers)

      for (var i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (obj[key] !== undefined) {
          obj[key] = serializers[key](obj[key])
        }
      }

      for (const key in chindings) {
        if (!obj.hasOwnProperty(key)) {
          obj[key] = chindings[key]
        }
      }

      const stringifiers = lastLogger[stringifiersSym]
      const redact = stringifiers[redactFmtSym]

      const formatted = pretty(typeof redact === 'function' ? redact(obj) : obj)
      if (formatted === undefined) return

      setMetadataProps(dest, this)
      dest.write(formatted)
    }
  }
}

function hasBeenTampered (stream) {
  return stream.write !== stream.constructor.prototype.write
}

function buildSafeSonicBoom (opts) {
  const stream = new SonicBoom(opts)
  stream.on('error', filterBrokenPipe)
  // if we are sync: false, we must flush on exit
  if (!opts.sync && isMainThread) {
    setupOnExit(stream)
  }
  return stream

  function filterBrokenPipe (err) {
    // TODO verify on Windows
    if (err.code === 'EPIPE') {
      // If we get EPIPE, we should stop logging here
      // however we have no control to the consumer of
      // SonicBoom, so we just overwrite the write method
      stream.write = noop
      stream.end = noop
      stream.flushSync = noop
      stream.destroy = noop
      return
    }
    stream.removeListener('error', filterBrokenPipe)
    stream.emit('error', err)
  }
}

function setupOnExit (stream) {
  /* istanbul ignore next */
  if (global.WeakRef && global.WeakMap && global.FinalizationRegistry) {
    // This is leak free, it does not leave event handlers
    const onExit = __webpack_require__(846270)

    onExit.register(stream, autoEnd)

    stream.on('close', function () {
      onExit.unregister(stream)
    })
  }
}

function autoEnd (stream, eventName) {
  // This check is needed only on some platforms
  /* istanbul ignore next */
  if (stream.destroyed) {
    return
  }

  if (eventName === 'beforeExit') {
    // We still have an event loop, let's use it
    stream.flush()
    stream.on('drain', function () {
      stream.end()
    })
  } else {
    // We do not have an event loop, so flush synchronously
    stream.flushSync()
  }
}

function createArgsNormalizer (defaultOptions) {
  return function normalizeArgs (instance, caller, opts = {}, stream) {
    // support stream as a string
    if (typeof opts === 'string') {
      stream = buildSafeSonicBoom({ dest: opts, sync: true })
      opts = {}
    } else if (typeof stream === 'string') {
      if (opts && opts.transport) {
        throw Error('only one of option.transport or stream can be specified')
      }
      stream = buildSafeSonicBoom({ dest: stream, sync: true })
    } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
      stream = opts
      opts = {}
    } else if (opts.transport) {
      if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
        throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)')
      }
      if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
        throw Error('option.transport.targets do not allow custom level formatters')
      }

      let customLevels
      if (opts.customLevels) {
        customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels)
      }
      stream = transport({ caller, ...opts.transport, levels: customLevels })
    }
    opts = Object.assign({}, defaultOptions, opts)
    opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers)
    opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters)

    if ('onTerminated' in opts) {
      throw Error('The onTerminated option has been removed, use pino.final instead')
    }
    if ('changeLevelName' in opts) {
      process.emitWarning(
        'The changeLevelName option is deprecated and will be removed in v7. Use levelKey instead.',
        { code: 'changeLevelName_deprecation' }
      )
      opts.levelKey = opts.changeLevelName
      delete opts.changeLevelName
    }
    const { enabled, prettyPrint, prettifier, messageKey } = opts
    if (enabled === false) opts.level = 'silent'
    stream = stream || process.stdout
    if (stream === process.stdout && stream.fd >= 0 && !hasBeenTampered(stream)) {
      stream = buildSafeSonicBoom({ fd: stream.fd, sync: true })
    }
    if (prettyPrint) {
      warning.emit('PINODEP008')
      const prettyOpts = Object.assign({ messageKey }, prettyPrint)
      stream = getPrettyStream(prettyOpts, prettifier, stream, instance)
    }
    return { opts, stream }
  }
}

function final (logger, handler) {
  const major = Number(process.versions.node.split('.')[0])
  if (major >= 14) warning.emit('PINODEP009')

  if (typeof logger === 'undefined' || typeof logger.child !== 'function') {
    throw Error('expected a pino logger instance')
  }
  const hasHandler = (typeof handler !== 'undefined')
  if (hasHandler && typeof handler !== 'function') {
    throw Error('if supplied, the handler parameter should be a function')
  }
  const stream = logger[streamSym]
  if (typeof stream.flushSync !== 'function') {
    throw Error('final requires a stream that has a flushSync method, such as pino.destination')
  }

  const finalLogger = new Proxy(logger, {
    get: (logger, key) => {
      if (key in logger.levels.values) {
        return (...args) => {
          logger[key](...args)
          stream.flushSync()
        }
      }
      return logger[key]
    }
  })

  if (!hasHandler) {
    try {
      stream.flushSync()
    } catch {
      // it's too late to wait for the stream to be ready
      // because this is a final tick scenario.
      // in practice there shouldn't be a situation where it isn't
      // however, swallow the error just in case (and for easier testing)
    }
    return finalLogger
  }

  return (err = null, ...args) => {
    try {
      stream.flushSync()
    } catch (e) {
      // it's too late to wait for the stream to be ready
      // because this is a final tick scenario.
      // in practice there shouldn't be a situation where it isn't
      // however, swallow the error just in case (and for easier testing)
    }
    return handler(err, finalLogger, ...args)
  }
}

function stringify (obj, stringifySafeFn) {
  try {
    return JSON.stringify(obj)
  } catch (_) {
    try {
      const stringify = stringifySafeFn || this[stringifySafeSym]
      return stringify(obj)
    } catch (_) {
      return '"[unable to serialize, circular reference is too complex to analyze]"'
    }
  }
}

function buildFormatters (level, bindings, log) {
  return {
    level,
    bindings,
    log
  }
}

function setMetadataProps (dest, that) {
  if (dest[needsMetadataGsym] === true) {
    dest.lastLevel = that.lastLevel
    dest.lastMsg = that.lastMsg
    dest.lastObj = that.lastObj
    dest.lastTime = that.lastTime
    dest.lastLogger = that.lastLogger
  }
}

/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */
function normalizeDestFileDescriptor (destination) {
  const fd = Number(destination)
  if (typeof destination === 'string' && Number.isFinite(fd)) {
    return fd
  }
  return destination
}

module.exports = {
  noop,
  buildSafeSonicBoom,
  getPrettyStream,
  asChindings,
  asJson,
  genLog,
  createArgsNormalizer,
  final,
  stringify,
  buildFormatters,
  normalizeDestFileDescriptor
}


/***/ }),

/***/ 482563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { createRequire } = __webpack_require__(273339)
const getCallers = __webpack_require__(954811)
const { join, isAbsolute } = __webpack_require__(16928)
const sleep = __webpack_require__(57814)

let onExit

if (global.WeakRef && global.WeakMap && global.FinalizationRegistry) {
  // This require MUST be top level otherwise the transport would
  // not work from within Jest as it hijacks require.
  onExit = __webpack_require__(846270)
}

const ThreadStream = __webpack_require__(359348)

function setupOnExit (stream) {
  /* istanbul ignore next */
  if (onExit) {
    // This is leak free, it does not leave event handlers
    onExit.register(stream, autoEnd)

    stream.on('close', function () {
      onExit.unregister(stream)
    })
  } else {
    const fn = autoEnd.bind(null, stream)
    process.once('beforeExit', fn)
    process.once('exit', fn)

    stream.on('close', function () {
      process.removeListener('beforeExit', fn)
      process.removeListener('exit', fn)
    })
  }
}

function buildStream (filename, workerData, workerOpts) {
  const stream = new ThreadStream({
    filename,
    workerData,
    workerOpts
  })

  stream.on('ready', onReady)
  stream.on('close', function () {
    process.removeListener('exit', onExit)
  })

  process.on('exit', onExit)

  function onReady () {
    process.removeListener('exit', onExit)
    stream.unref()

    if (workerOpts.autoEnd !== false) {
      setupOnExit(stream)
    }
  }

  function onExit () {
    if (stream.closed) {
      return
    }
    stream.flushSync()
    // Apparently there is a very sporadic race condition
    // that in certain OS would prevent the messages to be flushed
    // because the thread might not have been created still.
    // Unfortunately we need to sleep(100) in this case.
    sleep(100)
    stream.end()
  }

  return stream
}

function autoEnd (stream) {
  stream.ref()
  stream.flushSync()
  stream.end()
  stream.once('close', function () {
    stream.unref()
  })
}

function transport (fullOptions) {
  const { pipeline, targets, levels, options = {}, worker = {}, caller = getCallers() } = fullOptions

  // Backwards compatibility
  const callers = typeof caller === 'string' ? [caller] : caller

  // This will be eventually modified by bundlers
  const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {}

  let target = fullOptions.target

  if (target && targets) {
    throw new Error('only one of target or targets can be specified')
  }

  if (targets) {
    target = bundlerOverrides['pino-worker'] || join(__dirname, 'worker.js')
    options.targets = targets.map((dest) => {
      return {
        ...dest,
        target: fixTarget(dest.target)
      }
    })
  } else if (pipeline) {
    target = bundlerOverrides['pino-pipeline-worker'] || join(__dirname, 'worker-pipeline.js')
    options.targets = pipeline.map((dest) => {
      return {
        ...dest,
        target: fixTarget(dest.target)
      }
    })
  }

  if (levels) {
    options.levels = levels
  }

  return buildStream(fixTarget(target), options, worker)

  function fixTarget (origin) {
    origin = bundlerOverrides[origin] || origin

    if (isAbsolute(origin) || origin.indexOf('file://') === 0) {
      return origin
    }

    if (origin === 'pino/file') {
      return join(__dirname, '..', 'file.js')
    }

    let fixTarget

    for (const filePath of callers) {
      try {
        fixTarget = createRequire(filePath).resolve(origin)
        break
      } catch (err) {
        // Silent catch
        continue
      }
    }

    if (!fixTarget) {
      throw new Error(`unable to determine transport target for "${origin}"`)
    }

    return fixTarget
  }
}

module.exports = transport


/***/ }),

/***/ 894308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint no-prototype-builtins: 0 */
const os = __webpack_require__(370857)
const stdSerializers = __webpack_require__(237214)
const caller = __webpack_require__(954811)
const redaction = __webpack_require__(904123)
const time = __webpack_require__(98329)
const proto = __webpack_require__(570824)
const symbols = __webpack_require__(865835)
const { configure } = __webpack_require__(512068)
const { assertDefaultLevelFound, mappings, genLsCache, levels } = __webpack_require__(495787)
const {
  createArgsNormalizer,
  asChindings,
  final,
  buildSafeSonicBoom,
  buildFormatters,
  stringify,
  normalizeDestFileDescriptor,
  noop
} = __webpack_require__(316761)
const { version } = __webpack_require__(789234)
const {
  chindingsSym,
  redactFmtSym,
  serializersSym,
  timeSym,
  timeSliceIndexSym,
  streamSym,
  stringifySym,
  stringifySafeSym,
  stringifiersSym,
  setLevelSym,
  endSym,
  formatOptsSym,
  messageKeySym,
  nestedKeySym,
  mixinSym,
  useOnlyCustomLevelsSym,
  formattersSym,
  hooksSym,
  nestedKeyStrSym,
  mixinMergeStrategySym
} = symbols
const { epochTime, nullTime } = time
const { pid } = process
const hostname = os.hostname()
const defaultErrorSerializer = stdSerializers.err
const defaultOptions = {
  level: 'info',
  levels,
  messageKey: 'msg',
  nestedKey: null,
  enabled: true,
  prettyPrint: false,
  base: { pid, hostname },
  serializers: Object.assign(Object.create(null), {
    err: defaultErrorSerializer
  }),
  formatters: Object.assign(Object.create(null), {
    bindings (bindings) {
      return bindings
    },
    level (label, number) {
      return { level: number }
    }
  }),
  hooks: {
    logMethod: undefined
  },
  timestamp: epochTime,
  name: undefined,
  redact: null,
  customLevels: null,
  useOnlyCustomLevels: false,
  depthLimit: 5,
  edgeLimit: 100
}

const normalize = createArgsNormalizer(defaultOptions)

const serializers = Object.assign(Object.create(null), stdSerializers)

function pino (...args) {
  const instance = {}
  const { opts, stream } = normalize(instance, caller(), ...args)
  const {
    redact,
    crlf,
    serializers,
    timestamp,
    messageKey,
    nestedKey,
    base,
    name,
    level,
    customLevels,
    mixin,
    mixinMergeStrategy,
    useOnlyCustomLevels,
    formatters,
    hooks,
    depthLimit,
    edgeLimit
  } = opts

  const stringifySafe = configure({
    maximumDepth: depthLimit,
    maximumBreadth: edgeLimit
  })

  const allFormatters = buildFormatters(
    formatters.level,
    formatters.bindings,
    formatters.log
  )

  const stringifiers = redact ? redaction(redact, stringify) : {}
  const stringifyFn = stringify.bind({
    [stringifySafeSym]: stringifySafe
  })
  const formatOpts = redact
    ? { stringify: stringifiers[redactFmtSym] }
    : { stringify: stringifyFn }
  const end = '}' + (crlf ? '\r\n' : '\n')
  const coreChindings = asChindings.bind(null, {
    [chindingsSym]: '',
    [serializersSym]: serializers,
    [stringifiersSym]: stringifiers,
    [stringifySym]: stringify,
    [stringifySafeSym]: stringifySafe,
    [formattersSym]: allFormatters
  })

  let chindings = ''
  if (base !== null) {
    if (name === undefined) {
      chindings = coreChindings(base)
    } else {
      chindings = coreChindings(Object.assign({}, base, { name }))
    }
  }

  const time = (timestamp instanceof Function)
    ? timestamp
    : (timestamp ? epochTime : nullTime)
  const timeSliceIndex = time().indexOf(':') + 1

  if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true')
  if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`)

  assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels)
  const levels = mappings(customLevels, useOnlyCustomLevels)

  Object.assign(instance, {
    levels,
    [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
    [streamSym]: stream,
    [timeSym]: time,
    [timeSliceIndexSym]: timeSliceIndex,
    [stringifySym]: stringify,
    [stringifySafeSym]: stringifySafe,
    [stringifiersSym]: stringifiers,
    [endSym]: end,
    [formatOptsSym]: formatOpts,
    [messageKeySym]: messageKey,
    [nestedKeySym]: nestedKey,
    // protect against injection
    [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
    [serializersSym]: serializers,
    [mixinSym]: mixin,
    [mixinMergeStrategySym]: mixinMergeStrategy,
    [chindingsSym]: chindings,
    [formattersSym]: allFormatters,
    [hooksSym]: hooks,
    silent: noop
  })

  Object.setPrototypeOf(instance, proto())

  genLsCache(instance)

  instance[setLevelSym](level)

  return instance
}

module.exports = pino

module.exports.destination = (dest = process.stdout.fd) => {
  if (typeof dest === 'object') {
    dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd)
    return buildSafeSonicBoom(dest)
  } else {
    return buildSafeSonicBoom({ dest: normalizeDestFileDescriptor(dest), minLength: 0, sync: true })
  }
}

module.exports.transport = __webpack_require__(482563)
module.exports.multistream = __webpack_require__(840351)

module.exports.final = final
module.exports.levels = mappings()
module.exports.stdSerializers = serializers
module.exports.stdTimeFunctions = Object.assign({}, time)
module.exports.symbols = symbols
module.exports.version = version

// Enables default and name export with TypeScript and Babel
module.exports["default"] = pino
module.exports.pino = pino


/***/ }),

/***/ 125146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(179896)
const EventEmitter = __webpack_require__(24434)
const inherits = (__webpack_require__(539023).inherits)
const path = __webpack_require__(16928)
const sleep = __webpack_require__(57814)

const BUSY_WRITE_TIMEOUT = 100

// 16 KB. Don't write more than docker buffer size.
// https://github.com/moby/moby/blob/513ec73831269947d38a644c278ce3cac36783b2/daemon/logger/copier.go#L13
const MAX_WRITE = 16 * 1024

function openFile (file, sonic) {
  sonic._opening = true
  sonic._writing = true
  sonic._asyncDrainScheduled = false

  // NOTE: 'error' and 'ready' events emitted below only relevant when sonic.sync===false
  // for sync mode, there is no way to add a listener that will receive these

  function fileOpened (err, fd) {
    if (err) {
      sonic._reopening = false
      sonic._writing = false
      sonic._opening = false

      if (sonic.sync) {
        process.nextTick(() => {
          if (sonic.listenerCount('error') > 0) {
            sonic.emit('error', err)
          }
        })
      } else {
        sonic.emit('error', err)
      }
      return
    }

    sonic.fd = fd
    sonic.file = file
    sonic._reopening = false
    sonic._opening = false
    sonic._writing = false

    if (sonic.sync) {
      process.nextTick(() => sonic.emit('ready'))
    } else {
      sonic.emit('ready')
    }

    if (sonic._reopening) {
      return
    }

    // start
    if (!sonic._writing && sonic._len > sonic.minLength && !sonic.destroyed) {
      actualWrite(sonic)
    }
  }

  const flags = sonic.append ? 'a' : 'w'
  const mode = sonic.mode

  if (sonic.sync) {
    try {
      if (sonic.mkdir) fs.mkdirSync(path.dirname(file), { recursive: true })
      const fd = fs.openSync(file, flags, mode)
      fileOpened(null, fd)
    } catch (err) {
      fileOpened(err)
      throw err
    }
  } else if (sonic.mkdir) {
    fs.mkdir(path.dirname(file), { recursive: true }, (err) => {
      if (err) return fileOpened(err)
      fs.open(file, flags, mode, fileOpened)
    })
  } else {
    fs.open(file, flags, mode, fileOpened)
  }
}

function SonicBoom (opts) {
  if (!(this instanceof SonicBoom)) {
    return new SonicBoom(opts)
  }

  let { fd, dest, minLength, maxLength, maxWrite, sync, append = true, mode, mkdir, retryEAGAIN } = opts || {}

  fd = fd || dest

  this._bufs = []
  this._len = 0
  this.fd = -1
  this._writing = false
  this._writingBuf = ''
  this._ending = false
  this._reopening = false
  this._asyncDrainScheduled = false
  this._hwm = Math.max(minLength || 0, 16387)
  this.file = null
  this.destroyed = false
  this.minLength = minLength || 0
  this.maxLength = maxLength || 0
  this.maxWrite = maxWrite || MAX_WRITE
  this.sync = sync || false
  this.append = append || false
  this.mode = mode
  this.retryEAGAIN = retryEAGAIN || (() => true)
  this.mkdir = mkdir || false

  if (typeof fd === 'number') {
    this.fd = fd
    process.nextTick(() => this.emit('ready'))
  } else if (typeof fd === 'string') {
    openFile(fd, this)
  } else {
    throw new Error('SonicBoom supports only file descriptors and files')
  }
  if (this.minLength >= this.maxWrite) {
    throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`)
  }

  this.release = (err, n) => {
    if (err) {
      if (err.code === 'EAGAIN' && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
        if (this.sync) {
          // This error code should not happen in sync mode, because it is
          // not using the underlining operating system asynchronous functions.
          // However it happens, and so we handle it.
          // Ref: https://github.com/pinojs/pino/issues/783
          try {
            sleep(BUSY_WRITE_TIMEOUT)
            this.release(undefined, 0)
          } catch (err) {
            this.release(err)
          }
        } else {
          // Let's give the destination some time to process the chunk.
          setTimeout(() => {
            fs.write(this.fd, this._writingBuf, 'utf8', this.release)
          }, BUSY_WRITE_TIMEOUT)
        }
      } else {
        this._writing = false

        this.emit('error', err)
      }
      return
    }
    this.emit('write', n)

    this._len -= n
    this._writingBuf = this._writingBuf.slice(n)

    if (this._writingBuf.length) {
      if (!this.sync) {
        fs.write(this.fd, this._writingBuf, 'utf8', this.release)
        return
      }

      try {
        do {
          const n = fs.writeSync(this.fd, this._writingBuf, 'utf8')
          this._len -= n
          this._writingBuf = this._writingBuf.slice(n)
        } while (this._writingBuf)
      } catch (err) {
        this.release(err)
        return
      }
    }

    const len = this._len
    if (this._reopening) {
      this._writing = false
      this._reopening = false
      this.reopen()
    } else if (len > this.minLength) {
      actualWrite(this)
    } else if (this._ending) {
      if (len > 0) {
        actualWrite(this)
      } else {
        this._writing = false
        actualClose(this)
      }
    } else {
      this._writing = false
      if (this.sync) {
        if (!this._asyncDrainScheduled) {
          this._asyncDrainScheduled = true
          process.nextTick(emitDrain, this)
        }
      } else {
        this.emit('drain')
      }
    }
  }

  this.on('newListener', function (name) {
    if (name === 'drain') {
      this._asyncDrainScheduled = false
    }
  })
}

function emitDrain (sonic) {
  const hasListeners = sonic.listenerCount('drain') > 0
  if (!hasListeners) return
  sonic._asyncDrainScheduled = false
  sonic.emit('drain')
}

inherits(SonicBoom, EventEmitter)

SonicBoom.prototype.write = function (data) {
  if (this.destroyed) {
    throw new Error('SonicBoom destroyed')
  }

  const len = this._len + data.length
  const bufs = this._bufs

  if (this.maxLength && len > this.maxLength) {
    this.emit('drop', data)
    return this._len < this._hwm
  }

  if (
    bufs.length === 0 ||
    bufs[bufs.length - 1].length + data.length > this.maxWrite
  ) {
    bufs.push('' + data)
  } else {
    bufs[bufs.length - 1] += data
  }

  this._len = len

  if (!this._writing && this._len >= this.minLength) {
    actualWrite(this)
  }

  return this._len < this._hwm
}

SonicBoom.prototype.flush = function () {
  if (this.destroyed) {
    throw new Error('SonicBoom destroyed')
  }

  if (this._writing || this.minLength <= 0) {
    return
  }

  if (this._bufs.length === 0) {
    this._bufs.push('')
  }

  actualWrite(this)
}

SonicBoom.prototype.reopen = function (file) {
  if (this.destroyed) {
    throw new Error('SonicBoom destroyed')
  }

  if (this._opening) {
    this.once('ready', () => {
      this.reopen(file)
    })
    return
  }

  if (this._ending) {
    return
  }

  if (!this.file) {
    throw new Error('Unable to reopen a file descriptor, you must pass a file to SonicBoom')
  }

  this._reopening = true

  if (this._writing) {
    return
  }

  const fd = this.fd
  this.once('ready', () => {
    if (fd !== this.fd) {
      fs.close(fd, (err) => {
        if (err) {
          return this.emit('error', err)
        }
      })
    }
  })

  openFile(file || this.file, this)
}

SonicBoom.prototype.end = function () {
  if (this.destroyed) {
    throw new Error('SonicBoom destroyed')
  }

  if (this._opening) {
    this.once('ready', () => {
      this.end()
    })
    return
  }

  if (this._ending) {
    return
  }

  this._ending = true

  if (this._writing) {
    return
  }

  if (this._len > 0 && this.fd >= 0) {
    actualWrite(this)
  } else {
    actualClose(this)
  }
}

SonicBoom.prototype.flushSync = function () {
  if (this.destroyed) {
    throw new Error('SonicBoom destroyed')
  }

  if (this.fd < 0) {
    throw new Error('sonic boom is not ready yet')
  }

  if (!this._writing && this._writingBuf.length > 0) {
    this._bufs.unshift(this._writingBuf)
    this._writingBuf = ''
  }

  while (this._bufs.length) {
    const buf = this._bufs[0]
    try {
      this._len -= fs.writeSync(this.fd, buf, 'utf8')
      this._bufs.shift()
    } catch (err) {
      if (err.code !== 'EAGAIN' || !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
        throw err
      }

      sleep(BUSY_WRITE_TIMEOUT)
    }
  }
}

SonicBoom.prototype.destroy = function () {
  if (this.destroyed) {
    return
  }
  actualClose(this)
}

function actualWrite (sonic) {
  const release = sonic.release
  sonic._writing = true
  sonic._writingBuf = sonic._writingBuf || sonic._bufs.shift() || ''

  if (sonic.sync) {
    try {
      const written = fs.writeSync(sonic.fd, sonic._writingBuf, 'utf8')
      release(null, written)
    } catch (err) {
      release(err)
    }
  } else {
    fs.write(sonic.fd, sonic._writingBuf, 'utf8', release)
  }
}

function actualClose (sonic) {
  if (sonic.fd === -1) {
    sonic.once('ready', actualClose.bind(null, sonic))
    return
  }

  sonic.destroyed = true
  sonic._bufs = []

  if (sonic.fd !== 1 && sonic.fd !== 2) {
    fs.close(sonic.fd, done)
  } else {
    setImmediate(done)
  }

  function done (err) {
    if (err) {
      sonic.emit('error', err)
      return
    }

    if (sonic._ending && !sonic._writing) {
      sonic.emit('finish')
    }
    sonic.emit('close')
  }
}

/**
 * These export configurations enable JS and TS developers
 * to consumer SonicBoom in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const SonicBoom = require('SonicBoom')`
 * - `const { SonicBoom } = require('SonicBoom')`
 * - `import * as SonicBoom from 'SonicBoom'`
 * - `import { SonicBoom } from 'SonicBoom'`
 * - `import SonicBoom from 'SonicBoom'`
 */
SonicBoom.SonicBoom = SonicBoom
SonicBoom.default = SonicBoom
module.exports = SonicBoom


/***/ }),

/***/ 553550:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"pino","version":"7.11.0","description":"super fast, all natural json logger","main":"pino.js","type":"commonjs","types":"pino.d.ts","browser":"./browser.js","files":["pino.js","file.js","pino.d.ts","bin.js","browser.js","pretty.js","usage.txt","test","docs","example.js","lib"],"scripts":{"docs":"docsify serve","browser-test":"airtap --local 8080 test/browser*test.js","lint":"eslint .","test":"npm run lint && npm run transpile && tap --ts && jest test/jest && npm run test-types","test-ci":"npm run lint && npm run transpile && tap --ts --no-check-coverage --coverage-report=lcovonly && npm run test-types","test-ci-pnpm":"pnpm run lint && npm run transpile && tap --ts --no-coverage --no-check-coverage && pnpm run test-types","test-ci-yarn-pnp":"yarn run lint && npm run transpile && tap --ts --no-check-coverage --coverage-report=lcovonly","test-types":"tsc && tsd && ts-node test/types/pino.ts","transpile":"node ./test/fixtures/ts/transpile.cjs","cov-ui":"tap --ts --coverage-report=html","bench":"node benchmarks/utils/runbench all","bench-basic":"node benchmarks/utils/runbench basic","bench-object":"node benchmarks/utils/runbench object","bench-deep-object":"node benchmarks/utils/runbench deep-object","bench-multi-arg":"node benchmarks/utils/runbench multi-arg","bench-longs-tring":"node benchmarks/utils/runbench long-string","bench-child":"node benchmarks/utils/runbench child","bench-child-child":"node benchmarks/utils/runbench child-child","bench-child-creation":"node benchmarks/utils/runbench child-creation","bench-formatters":"node benchmarks/utils/runbench formatters","update-bench-doc":"node benchmarks/utils/generate-benchmark-doc > docs/benchmarks.md"},"bin":{"pino":"./bin.js"},"precommit":"test","repository":{"type":"git","url":"git+https://github.com/pinojs/pino.git"},"keywords":["fast","logger","stream","json"],"author":"Matteo Collina <hello@matteocollina.com>","contributors":["David Mark Clements <huperekchuno@googlemail.com>","James Sumners <james.sumners@gmail.com>","Thomas Watson Steen <w@tson.dk> (https://twitter.com/wa7son)"],"license":"MIT","bugs":{"url":"https://github.com/pinojs/pino/issues"},"homepage":"http://getpino.io","devDependencies":{"@types/flush-write-stream":"^1.0.0","@types/node":"^17.0.0","@types/tap":"^15.0.6","airtap":"4.0.4","benchmark":"^2.1.4","bole":"^4.0.0","bunyan":"^1.8.14","docsify-cli":"^4.4.1","eslint":"^7.17.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.22.1","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.0","execa":"^5.0.0","fastbench":"^1.0.1","flush-write-stream":"^2.0.0","import-fresh":"^3.2.1","jest":"^27.3.1","log":"^6.0.0","loglevel":"^1.6.7","pino-pretty":"^v7.6.0","pre-commit":"^1.2.2","proxyquire":"^2.1.3","pump":"^3.0.0","rimraf":"^3.0.2","semver":"^7.0.0","split2":"^4.0.0","steed":"^1.1.3","strip-ansi":"^6.0.0","tap":"^16.0.0","tape":"^5.0.0","through2":"^4.0.0","ts-node":"^10.7.0","tsd":"^0.20.0","typescript":"^4.4.4","winston":"^3.3.3"},"dependencies":{"atomic-sleep":"^1.0.0","fast-redact":"^3.0.0","on-exit-leak-free":"^0.2.0","pino-abstract-transport":"v0.5.0","pino-std-serializers":"^4.0.0","process-warning":"^1.0.0","quick-format-unescaped":"^4.0.3","real-require":"^0.1.0","safe-stable-stringify":"^2.1.0","sonic-boom":"^2.2.1","thread-stream":"^0.15.1"},"tsd":{"directory":"test/types"}}');

/***/ })

};
;