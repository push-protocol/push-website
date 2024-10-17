"use strict";
exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 71995:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mb: () => (/* binding */ ConfigCtrl),
  Ao: () => (/* binding */ CoreUtil),
  vZ: () => (/* binding */ EventsCtrl),
  pV: () => (/* binding */ ExplorerCtrl),
  D8: () => (/* binding */ ModalCtrl),
  IN: () => (/* binding */ OptionsCtrl),
  jL: () => (/* binding */ RouterCtrl),
  lH: () => (/* binding */ ThemeCtrl),
  dC: () => (/* binding */ ToastCtrl)
});

;// ./node_modules/proxy-compare/dist/index.modern.js
const e=Symbol(),t=Symbol(),r="a",n="w";let o=(e,t)=>new Proxy(e,t);const s=Object.getPrototypeOf,c=new WeakMap,l=e=>e&&(c.has(e)?c.get(e):s(e)===Object.prototype||s(e)===Array.prototype),f=e=>"object"==typeof e&&null!==e,i=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(s(e),t)},u=e=>e[t]||e,a=(s,c,f,p)=>{if(!l(s))return s;let g=p&&p.get(s);if(!g){const e=u(s);g=(e=>Object.values(Object.getOwnPropertyDescriptors(e)).some(e=>!e.configurable&&!e.writable))(e)?[e,i(e)]:[e],null==p||p.set(s,g)}const[y,h]=g;let w=f&&f.get(y);return w&&w[1].f===!!h||(w=((o,s)=>{const c={f:s};let l=!1;const f=(e,t)=>{if(!l){let s=c[r].get(o);if(s||(s={},c[r].set(o,s)),e===n)s[n]=!0;else{let r=s[e];r||(r=new Set,s[e]=r),r.add(t)}}},i={get:(e,n)=>n===t?o:(f("k",n),a(Reflect.get(e,n),c[r],c.c,c.t)),has:(t,n)=>n===e?(l=!0,c[r].delete(o),!0):(f("h",n),Reflect.has(t,n)),getOwnPropertyDescriptor:(e,t)=>(f("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(f(n),Reflect.ownKeys(e))};return s&&(i.set=i.deleteProperty=()=>!1),[i,c]})(y,!!h),w[1].p=o(h||y,w[0]),f&&f.set(y,w)),w[1][r]=c,w[1].c=f,w[1].t=p,w[1].p},p=(e,t,r,o)=>{if(Object.is(e,t))return!1;if(!f(e)||!f(t))return!0;const s=r.get(u(e));if(!s)return!0;if(o){const r=o.get(e);if(r&&r.n===t)return r.g;o.set(e,{n:t,g:!1})}let c=null;try{for(const r of s.h||[])if(c=Reflect.has(e,r)!==Reflect.has(t,r),c)return c;if(!0===s[n]){if(c=((e,t)=>{const r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t),c)return c}else for(const r of s.o||[])if(c=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r),c)return c;for(const n of s.k||[])if(c=p(e[n],t[n],r,o),c)return c;return null===c&&(c=!0),c}finally{o&&o.set(e,{n:t,g:c})}},g=t=>!!l(t)&&e in t,y=e=>l(e)&&e[t]||null,h=(e,t=!0)=>{c.set(e,t)},w=(e,t,r)=>{const o=[],s=new WeakSet,c=(e,l)=>{if(s.has(e))return;f(e)&&s.add(e);const i=f(e)&&t.get(u(e));if(i){var a,p;if(null==(a=i.h)||a.forEach(e=>{const t=`:has(${String(e)})`;o.push(l?[...l,t]:[t])}),!0===i[n]){const e=":ownKeys";o.push(l?[...l,e]:[e])}else{var g;null==(g=i.o)||g.forEach(e=>{const t=`:hasOwn(${String(e)})`;o.push(l?[...l,t]:[t])})}null==(p=i.k)||p.forEach(t=>{r&&!("value"in(Object.getOwnPropertyDescriptor(e,t)||{}))||c(e[t],l?[...l,t]:[t])})}else l&&o.push(l)};return c(e),o},O=e=>{o=e};
//# sourceMappingURL=index.modern.mjs.map

;// ./node_modules/valtio/esm/vanilla.mjs


const isObject = (x) => typeof x === "object" && x !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
  switch (promise.status) {
    case "fulfilled":
      return promise.value;
    case "rejected":
      throw promise.reason;
    default:
      throw promise;
  }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  h(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const desc = {
      value,
      enumerable: true,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      h(value, false);
    } else if (value instanceof Promise) {
      delete desc.value;
      desc.get = () => handlePromise(value);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshot(
        target2,
        ensureVersion(),
        handlePromise
      );
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propProxyState) => {
    if (( false ? 0 : void 0) !== "production" && propProxyStates.has(prop)) {
      throw new Error("prop listener already exists");
    }
    if (listeners.size) {
      const remove = propProxyState[3](createPropListener(prop));
      propProxyStates.set(prop, [propProxyState, remove]);
    } else {
      propProxyStates.set(prop, [propProxyState]);
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if (( false ? 0 : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    set(target, prop, value, receiver) {
      const hasPrevValue = Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = y(value) || value;
      }
      let nextValue = value;
      if (value instanceof Promise) {
        value.then((v) => {
          value.status = "fulfilled";
          value.value = v;
          notifyUpdate(["resolve", [prop], v]);
        }).catch((e) => {
          value.status = "rejected";
          value.reason = e;
          notifyUpdate(["reject", [prop], e]);
        });
      } else {
        if (!proxyStateMap.has(value) && canProxy(value)) {
          nextValue = proxyFunction(value);
        }
        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
        if (childProxyState) {
          addPropListener(prop, childProxyState);
        }
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  const proxyState = [
    baseObject,
    ensureVersion,
    createSnapshot,
    addListener
  ];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      initialObject,
      key
    );
    if ("value" in desc) {
      proxyObject[key] = initialObject[key];
      delete desc.value;
      delete desc.writable;
    }
    Object.defineProperty(baseObject, key, desc);
  });
  return proxyObject;
}) => [
  // public functions
  proxyFunction,
  // shared state
  proxyStateMap,
  refSet,
  // internal things
  objectIs,
  newProxy,
  canProxy,
  defaultHandlePromise,
  snapCache,
  createSnapshot,
  proxyCache,
  versionHolder
];
const [defaultProxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
  return defaultProxyFunction(initialObject);
}
function getVersion(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if (( false ? 0 : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[3];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject, handlePromise) {
  const proxyState = proxyStateMap.get(proxyObject);
  if (( false ? 0 : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion, createSnapshot] = proxyState;
  return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
const unstable_buildProxyFunction = (/* unused pure expression or super */ null && (buildProxyFunction));



;// ./node_modules/@walletconnect/modal-core/dist/index.js


const state$7 = proxy({
  history: ["ConnectWallet"],
  view: "ConnectWallet",
  data: void 0
});
const RouterCtrl = {
  state: state$7,
  subscribe(callback) {
    return subscribe(state$7, () => callback(state$7));
  },
  push(view, data) {
    if (view !== state$7.view) {
      state$7.view = view;
      if (data) {
        state$7.data = data;
      }
      state$7.history.push(view);
    }
  },
  reset(view) {
    state$7.view = view;
    state$7.history = [view];
  },
  replace(view) {
    if (state$7.history.length > 1) {
      state$7.history[state$7.history.length - 1] = view;
      state$7.view = view;
    }
  },
  goBack() {
    if (state$7.history.length > 1) {
      state$7.history.pop();
      const [last] = state$7.history.slice(-1);
      state$7.view = last;
    }
  },
  setData(data) {
    state$7.data = data;
  }
};

const CoreUtil = {
  WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
  WCM_VERSION: "WCM_VERSION",
  RECOMMENDED_WALLET_AMOUNT: 9,
  isMobile() {
    if (typeof window !== "undefined") {
      return Boolean(
        window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
      );
    }
    return false;
  },
  isAndroid() {
    return CoreUtil.isMobile() && navigator.userAgent.toLowerCase().includes("android");
  },
  isIos() {
    const ua = navigator.userAgent.toLowerCase();
    return CoreUtil.isMobile() && (ua.includes("iphone") || ua.includes("ipad"));
  },
  isHttpUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  },
  isArray(data) {
    return Array.isArray(data) && data.length > 0;
  },
  isTelegram() {
    return typeof window !== "undefined" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Boolean(window.TelegramWebviewProxy) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.Telegram) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Boolean(window.TelegramWebviewProxyProto));
  },
  formatNativeUrl(appUrl, wcUri, name) {
    if (CoreUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri, name);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.includes("://")) {
      safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      safeAppUrl = `${safeAppUrl}://`;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    this.setWalletConnectDeepLink(safeAppUrl, name);
    const encodedWcUrl = encodeURIComponent(wcUri);
    return `${safeAppUrl}wc?uri=${encodedWcUrl}`;
  },
  formatUniversalUrl(appUrl, wcUri, name) {
    if (!CoreUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri, name);
    }
    let safeAppUrl = appUrl;
    if (safeAppUrl.startsWith("https://t.me")) {
      const formattedUri = Buffer.from(wcUri).toString("base64").replace(/[=]/g, "");
      if (safeAppUrl.endsWith("/")) {
        safeAppUrl = safeAppUrl.slice(0, -1);
      }
      this.setWalletConnectDeepLink(safeAppUrl, name);
      const url = new URL(safeAppUrl);
      url.searchParams.set("startapp", formattedUri);
      const link = url.toString();
      return link;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    this.setWalletConnectDeepLink(safeAppUrl, name);
    const encodedWcUrl = encodeURIComponent(wcUri);
    return `${safeAppUrl}wc?uri=${encodedWcUrl}`;
  },
  async wait(miliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, miliseconds);
    });
  },
  openHref(href, target) {
    const adjustedTarget = this.isTelegram() ? "_blank" : target;
    window.open(href, adjustedTarget, "noreferrer noopener");
  },
  setWalletConnectDeepLink(href, name) {
    try {
      localStorage.setItem(CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href, name }));
    } catch (e) {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  setWalletConnectAndroidDeepLink(wcUri) {
    try {
      const [href] = wcUri.split("?");
      localStorage.setItem(
        CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE,
        JSON.stringify({ href, name: "Android" })
      );
    } catch (e) {
      console.info("Unable to set WalletConnect android deep link");
    }
  },
  removeWalletConnectDeepLink() {
    try {
      localStorage.removeItem(CoreUtil.WALLETCONNECT_DEEPLINK_CHOICE);
    } catch (e) {
      console.info("Unable to remove WalletConnect deep link");
    }
  },
  setModalVersionInStorage() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(CoreUtil.WCM_VERSION, "2.7.0");
      }
    } catch (e) {
      console.info("Unable to set Web3Modal version in storage");
    }
  },
  getWalletRouterData() {
    var _a;
    const routerData = (_a = RouterCtrl.state.data) == null ? void 0 : _a.Wallet;
    if (!routerData) {
      throw new Error('Missing "Wallet" view data');
    }
    return routerData;
  }
};

const isEnabled = typeof location !== "undefined" && (location.hostname.includes("localhost") || location.protocol.includes("https"));
const state$6 = proxy({
  enabled: isEnabled,
  userSessionId: "",
  events: [],
  connectedWalletId: void 0
});
const EventsCtrl = {
  state: state$6,
  subscribe(callback) {
    return subscribe(state$6.events, () => callback(snapshot(state$6.events[state$6.events.length - 1])));
  },
  initialize() {
    if (state$6.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) !== "undefined") {
      state$6.userSessionId = crypto.randomUUID();
    }
  },
  setConnectedWalletId(connectedWalletId) {
    state$6.connectedWalletId = connectedWalletId;
  },
  click(data) {
    if (state$6.enabled) {
      const event = {
        type: "CLICK",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  },
  track(data) {
    if (state$6.enabled) {
      const event = {
        type: "TRACK",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  },
  view(data) {
    if (state$6.enabled) {
      const event = {
        type: "VIEW",
        name: data.name,
        userSessionId: state$6.userSessionId,
        timestamp: Date.now(),
        data
      };
      state$6.events.push(event);
    }
  }
};

const state$5 = proxy({
  chains: void 0,
  walletConnectUri: void 0,
  isAuth: false,
  isCustomDesktop: false,
  isCustomMobile: false,
  isDataLoaded: false,
  isUiLoaded: false
});
const OptionsCtrl = {
  state: state$5,
  subscribe(callback) {
    return subscribe(state$5, () => callback(state$5));
  },
  setChains(chains) {
    state$5.chains = chains;
  },
  setWalletConnectUri(walletConnectUri) {
    state$5.walletConnectUri = walletConnectUri;
  },
  setIsCustomDesktop(isCustomDesktop) {
    state$5.isCustomDesktop = isCustomDesktop;
  },
  setIsCustomMobile(isCustomMobile) {
    state$5.isCustomMobile = isCustomMobile;
  },
  setIsDataLoaded(isDataLoaded) {
    state$5.isDataLoaded = isDataLoaded;
  },
  setIsUiLoaded(isUiLoaded) {
    state$5.isUiLoaded = isUiLoaded;
  },
  setIsAuth(isAuth) {
    state$5.isAuth = isAuth;
  }
};

const state$4 = proxy({
  projectId: "",
  mobileWallets: void 0,
  desktopWallets: void 0,
  walletImages: void 0,
  chains: void 0,
  enableAuthMode: false,
  enableExplorer: true,
  explorerExcludedWalletIds: void 0,
  explorerRecommendedWalletIds: void 0,
  termsOfServiceUrl: void 0,
  privacyPolicyUrl: void 0
});
const ConfigCtrl = {
  state: state$4,
  subscribe(callback) {
    return subscribe(state$4, () => callback(state$4));
  },
  setConfig(config) {
    var _a, _b;
    EventsCtrl.initialize();
    OptionsCtrl.setChains(config.chains);
    OptionsCtrl.setIsAuth(Boolean(config.enableAuthMode));
    OptionsCtrl.setIsCustomMobile(Boolean((_a = config.mobileWallets) == null ? void 0 : _a.length));
    OptionsCtrl.setIsCustomDesktop(Boolean((_b = config.desktopWallets) == null ? void 0 : _b.length));
    CoreUtil.setModalVersionInStorage();
    Object.assign(state$4, config);
  }
};

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
const W3M_API = "https://explorer-api.walletconnect.com";
const SDK_TYPE = "wcm";
const SDK_VERSION = `js-${"2.7.0"}`;
async function fetchListings(endpoint, params) {
  const allParams = __spreadValues$2({ sdkType: SDK_TYPE, sdkVersion: SDK_VERSION }, params);
  const url = new URL(endpoint, W3M_API);
  url.searchParams.append("projectId", ConfigCtrl.state.projectId);
  Object.entries(allParams).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, String(value));
    }
  });
  const request = await fetch(url);
  return request.json();
}
const ExplorerUtil = {
  async getDesktopListings(params) {
    return fetchListings("/w3m/v1/getDesktopListings", params);
  },
  async getMobileListings(params) {
    return fetchListings("/w3m/v1/getMobileListings", params);
  },
  async getInjectedListings(params) {
    return fetchListings("/w3m/v1/getInjectedListings", params);
  },
  async getAllListings(params) {
    return fetchListings("/w3m/v1/getAllListings", params);
  },
  getWalletImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getWalletImage/${imageId}?projectId=${ConfigCtrl.state.projectId}&sdkType=${SDK_TYPE}&sdkVersion=${SDK_VERSION}`;
  },
  getAssetImageUrl(imageId) {
    return `${W3M_API}/w3m/v1/getAssetImage/${imageId}?projectId=${ConfigCtrl.state.projectId}&sdkType=${SDK_TYPE}&sdkVersion=${SDK_VERSION}`;
  }
};

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
const isMobile = CoreUtil.isMobile();
const state$3 = proxy({
  wallets: { listings: [], total: 0, page: 1 },
  search: { listings: [], total: 0, page: 1 },
  recomendedWallets: []
});
const ExplorerCtrl = {
  state: state$3,
  async getRecomendedWallets() {
    const { explorerRecommendedWalletIds, explorerExcludedWalletIds } = ConfigCtrl.state;
    if (explorerRecommendedWalletIds === "NONE" || explorerExcludedWalletIds === "ALL" && !explorerRecommendedWalletIds) {
      return state$3.recomendedWallets;
    }
    if (CoreUtil.isArray(explorerRecommendedWalletIds)) {
      const recommendedIds = explorerRecommendedWalletIds.join(",");
      const params = { recommendedIds };
      const { listings } = await ExplorerUtil.getAllListings(params);
      const listingsArr = Object.values(listings);
      listingsArr.sort((a, b) => {
        const aIndex = explorerRecommendedWalletIds.indexOf(a.id);
        const bIndex = explorerRecommendedWalletIds.indexOf(b.id);
        return aIndex - bIndex;
      });
      state$3.recomendedWallets = listingsArr;
    } else {
      const { chains, isAuth } = OptionsCtrl.state;
      const chainsFilter = chains == null ? void 0 : chains.join(",");
      const isExcluded = CoreUtil.isArray(explorerExcludedWalletIds);
      const params = {
        page: 1,
        sdks: isAuth ? "auth_v1" : void 0,
        entries: CoreUtil.RECOMMENDED_WALLET_AMOUNT,
        chains: chainsFilter,
        version: 2,
        excludedIds: isExcluded ? explorerExcludedWalletIds.join(",") : void 0
      };
      const { listings } = isMobile ? await ExplorerUtil.getMobileListings(params) : await ExplorerUtil.getDesktopListings(params);
      state$3.recomendedWallets = Object.values(listings);
    }
    return state$3.recomendedWallets;
  },
  async getWallets(params) {
    const extendedParams = __spreadValues$1({}, params);
    const { explorerRecommendedWalletIds, explorerExcludedWalletIds } = ConfigCtrl.state;
    const { recomendedWallets } = state$3;
    if (explorerExcludedWalletIds === "ALL") {
      return state$3.wallets;
    }
    if (recomendedWallets.length) {
      extendedParams.excludedIds = recomendedWallets.map((wallet) => wallet.id).join(",");
    } else if (CoreUtil.isArray(explorerRecommendedWalletIds)) {
      extendedParams.excludedIds = explorerRecommendedWalletIds.join(",");
    }
    if (CoreUtil.isArray(explorerExcludedWalletIds)) {
      extendedParams.excludedIds = [extendedParams.excludedIds, explorerExcludedWalletIds].filter(Boolean).join(",");
    }
    if (OptionsCtrl.state.isAuth) {
      extendedParams.sdks = "auth_v1";
    }
    const { page, search } = params;
    const { listings: listingsObj, total } = isMobile ? await ExplorerUtil.getMobileListings(extendedParams) : await ExplorerUtil.getDesktopListings(extendedParams);
    const listings = Object.values(listingsObj);
    const type = search ? "search" : "wallets";
    state$3[type] = {
      listings: [...state$3[type].listings, ...listings],
      total,
      page: page != null ? page : 1
    };
    return { listings, total };
  },
  getWalletImageUrl(imageId) {
    return ExplorerUtil.getWalletImageUrl(imageId);
  },
  getAssetImageUrl(imageId) {
    return ExplorerUtil.getAssetImageUrl(imageId);
  },
  resetSearch() {
    state$3.search = { listings: [], total: 0, page: 1 };
  }
};

const state$2 = proxy({
  open: false
});
const ModalCtrl = {
  state: state$2,
  subscribe(callback) {
    return subscribe(state$2, () => callback(state$2));
  },
  async open(options) {
    return new Promise((resolve) => {
      const { isUiLoaded, isDataLoaded } = OptionsCtrl.state;
      CoreUtil.removeWalletConnectDeepLink();
      OptionsCtrl.setWalletConnectUri(options == null ? void 0 : options.uri);
      OptionsCtrl.setChains(options == null ? void 0 : options.chains);
      RouterCtrl.reset("ConnectWallet");
      if (isUiLoaded && isDataLoaded) {
        state$2.open = true;
        resolve();
      } else {
        const interval = setInterval(() => {
          const opts = OptionsCtrl.state;
          if (opts.isUiLoaded && opts.isDataLoaded) {
            clearInterval(interval);
            state$2.open = true;
            resolve();
          }
        }, 200);
      }
    });
  },
  close() {
    state$2.open = false;
  }
};

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function isDarkMode() {
  return typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const state$1 = proxy({
  themeMode: isDarkMode() ? "dark" : "light"
});
const ThemeCtrl = {
  state: state$1,
  subscribe(callback) {
    return subscribe(state$1, () => callback(state$1));
  },
  setThemeConfig(theme) {
    const { themeMode, themeVariables } = theme;
    if (themeMode) {
      state$1.themeMode = themeMode;
    }
    if (themeVariables) {
      state$1.themeVariables = __spreadValues({}, themeVariables);
    }
  }
};

const state = proxy({
  open: false,
  message: "",
  variant: "success"
});
const ToastCtrl = {
  state,
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  openToast(message, variant) {
    state.open = true;
    state.message = message;
    state.variant = variant;
  },
  closeToast() {
    state.open = false;
  }
};


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 380940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletConnectModal: () => (/* binding */ WalletConnectModal)
/* harmony export */ });
/* harmony import */ var _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71995);


class WalletConnectModal {
  constructor(config) {
    this.openModal = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl */ .D8.open;
    this.closeModal = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl */ .D8.close;
    this.subscribeModal = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl */ .D8.subscribe;
    this.setTheme = _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ThemeCtrl */ .lH.setThemeConfig;
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ThemeCtrl */ .lH.setThemeConfig(config);
    _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ConfigCtrl */ .mb.setConfig(config);
    this.initUi();
  }
  async initUi() {
    if (typeof window !== "undefined") {
      await __webpack_require__.e(/* import() */ 7487).then(__webpack_require__.bind(__webpack_require__, 67487));
      const modal = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", modal);
      _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__/* .OptionsCtrl */ .IN.setIsUiLoaded(true);
    }
  }
}


//# sourceMappingURL=index.js.map


/***/ })

};
;