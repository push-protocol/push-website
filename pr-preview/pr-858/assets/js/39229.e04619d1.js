(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[39229],{

/***/ 573325:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoinbaseWalletProvider = void 0;
const eventemitter3_1 = __importDefault(__webpack_require__(641075));
const error_1 = __webpack_require__(627884);
const serialize_1 = __webpack_require__(945126);
const type_1 = __webpack_require__(940830);
const util_1 = __webpack_require__(11376);
const util_2 = __webpack_require__(362015);
const provider_1 = __webpack_require__(805305);
const Communicator_1 = __webpack_require__(722002);
const method_1 = __webpack_require__(504610);
const ScopedLocalStorage_1 = __webpack_require__(508572);
class CoinbaseWalletProvider extends eventemitter3_1.default {
    constructor(_a) {
        var _b, _c;
        var { metadata } = _a, _d = _a.preference, { keysUrl } = _d, preference = __rest(_d, ["keysUrl"]);
        super();
        this.accounts = [];
        this.handlers = {
            // eth_requestAccounts
            handshake: async (_) => {
                try {
                    if (this.connected) {
                        this.emit('connect', { chainId: (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id)) });
                        return this.accounts;
                    }
                    const signerType = await this.requestSignerSelection();
                    const signer = this.initSigner(signerType);
                    const accounts = await signer.handshake();
                    this.signer = signer;
                    (0, util_2.storeSignerType)(signerType);
                    this.emit('connect', { chainId: (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id)) });
                    return accounts;
                }
                catch (error) {
                    this.handleUnauthorizedError(error);
                    throw error;
                }
            },
            sign: async (request) => {
                if (!this.connected || !this.signer) {
                    throw error_1.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
                }
                try {
                    return await this.signer.request(request);
                }
                catch (error) {
                    this.handleUnauthorizedError(error);
                    throw error;
                }
            },
            fetch: (request) => (0, provider_1.fetchRPCRequest)(request, this.chain),
            state: (request) => {
                const getConnectedAccounts = () => {
                    if (this.connected)
                        return this.accounts;
                    throw error_1.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
                };
                switch (request.method) {
                    case 'eth_chainId':
                        return (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id));
                    case 'net_version':
                        return this.chain.id;
                    case 'eth_accounts':
                        return getConnectedAccounts();
                    case 'eth_coinbase':
                        return getConnectedAccounts()[0];
                    default:
                        return this.handlers.unsupported(request);
                }
            },
            deprecated: ({ method }) => {
                throw error_1.standardErrors.rpc.methodNotSupported(`Method ${method} is deprecated.`);
            },
            unsupported: ({ method }) => {
                throw error_1.standardErrors.rpc.methodNotSupported(`Method ${method} is not supported.`);
            },
        };
        this.isCoinbaseWallet = true;
        this.updateListener = {
            onAccountsUpdate: ({ accounts, source }) => {
                if ((0, util_1.areAddressArraysEqual)(this.accounts, accounts))
                    return;
                this.accounts = accounts;
                if (source === 'storage')
                    return;
                this.emit('accountsChanged', this.accounts);
            },
            onChainUpdate: ({ chain, source }) => {
                if (chain.id === this.chain.id && chain.rpcUrl === this.chain.rpcUrl)
                    return;
                this.chain = chain;
                if (source === 'storage')
                    return;
                this.emit('chainChanged', (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(chain.id)));
            },
        };
        this.metadata = metadata;
        this.preference = preference;
        this.communicator = new Communicator_1.Communicator(keysUrl);
        this.chain = {
            id: (_c = (_b = metadata.appChainIds) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 1,
        };
        // Load states from storage
        const signerType = (0, util_2.loadSignerType)();
        this.signer = signerType ? this.initSigner(signerType) : null;
    }
    get connected() {
        return this.accounts.length > 0;
    }
    async request(args) {
        var _a;
        try {
            const invalidArgsError = (0, provider_1.checkErrorForInvalidRequestArgs)(args);
            if (invalidArgsError)
                throw invalidArgsError;
            // unrecognized methods are treated as fetch requests
            const category = (_a = (0, method_1.determineMethodCategory)(args.method)) !== null && _a !== void 0 ? _a : 'fetch';
            return this.handlers[category](args);
        }
        catch (error) {
            return Promise.reject((0, serialize_1.serializeError)(error, args.method));
        }
    }
    handleUnauthorizedError(error) {
        const e = error;
        if (e.code === error_1.standardErrorCodes.provider.unauthorized)
            this.disconnect();
    }
    /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
    async enable() {
        console.warn(`.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.`);
        return await this.request({
            method: 'eth_requestAccounts',
        });
    }
    async disconnect() {
        this.accounts = [];
        this.chain = { id: 1 };
        ScopedLocalStorage_1.ScopedLocalStorage.clearAll();
        this.emit('disconnect', error_1.standardErrors.provider.disconnected('User initiated disconnection'));
    }
    requestSignerSelection() {
        return (0, util_2.fetchSignerType)({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
        });
    }
    initSigner(signerType) {
        return (0, util_2.createSigner)({
            signerType,
            metadata: this.metadata,
            communicator: this.communicator,
            updateListener: this.updateListener,
        });
    }
}
exports.CoinbaseWalletProvider = CoinbaseWalletProvider;


/***/ }),

/***/ 270526:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoinbaseWalletSDK = void 0;
const wallet_logo_1 = __webpack_require__(102280);
const CoinbaseWalletProvider_1 = __webpack_require__(573325);
const ScopedLocalStorage_1 = __webpack_require__(508572);
const version_1 = __webpack_require__(471797);
const util_1 = __webpack_require__(11376);
const provider_1 = __webpack_require__(805305);
class CoinbaseWalletSDK {
    constructor(metadata) {
        this.metadata = {
            appName: metadata.appName || 'Dapp',
            appLogoUrl: metadata.appLogoUrl || (0, util_1.getFavicon)(),
            appChainIds: metadata.appChainIds || [],
        };
        this.storeLatestVersion();
    }
    makeWeb3Provider(preference = { options: 'all' }) {
        var _a;
        const params = { metadata: this.metadata, preference };
        return (_a = (0, provider_1.getCoinbaseInjectedProvider)(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider_1.CoinbaseWalletProvider(params);
    }
    /**
     * Official Coinbase Wallet logo for developers to use on their frontend
     * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
     * @param width Width of the logo (Optional)
     * @returns SVG Data URI
     */
    getCoinbaseWalletLogo(type, width = 240) {
        return (0, wallet_logo_1.walletLogo)(type, width);
    }
    storeLatestVersion() {
        const versionStorage = new ScopedLocalStorage_1.ScopedLocalStorage('CBWSDK');
        versionStorage.setItem('VERSION', version_1.LIB_VERSION);
    }
}
exports.CoinbaseWalletSDK = CoinbaseWalletSDK;


/***/ }),

/***/ 102280:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.walletLogo = void 0;
const walletLogo = (type, width) => {
    let height;
    switch (type) {
        case 'standard':
            height = width;
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
        case 'circle':
            height = width;
            return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
        case 'text':
            height = (0.1 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case 'textWithLogo':
            height = (0.25 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        case 'textLight':
            height = (0.1 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case 'textWithLogoLight':
            height = (0.25 * width).toFixed(2);
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        default:
            height = width;
            return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    }
};
exports.walletLogo = walletLogo;


/***/ }),

/***/ 722002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Communicator = void 0;
const version_1 = __webpack_require__(471797);
const util_1 = __webpack_require__(973545);
const constants_1 = __webpack_require__(311864);
const error_1 = __webpack_require__(627884);
/**
 * Communicates with a popup window for Coinbase keys.coinbase.com (or another url)
 * to send and receive messages.
 *
 * This class is responsible for opening a popup window, posting messages to it,
 * and listening for responses.
 *
 * It also handles cleanup of event listeners and the popup window itself when necessary.
 */
class Communicator {
    constructor(url = constants_1.CB_KEYS_URL) {
        this.popup = null;
        this.listeners = new Map();
        /**
         * Posts a message to the popup window
         */
        this.postMessage = async (message) => {
            const popup = await this.waitForPopupLoaded();
            popup.postMessage(message, this.url.origin);
        };
        /**
         * Posts a request to the popup window and waits for a response
         */
        this.postRequestAndWaitForResponse = async (request) => {
            const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
            this.postMessage(request);
            return await responsePromise;
        };
        /**
         * Listens for messages from the popup window that match a given predicate.
         */
        this.onMessage = async (predicate) => {
            return new Promise((resolve, reject) => {
                const listener = (event) => {
                    if (event.origin !== this.url.origin)
                        return; // origin validation
                    const message = event.data;
                    if (predicate(message)) {
                        resolve(message);
                        window.removeEventListener('message', listener);
                        this.listeners.delete(listener);
                    }
                };
                window.addEventListener('message', listener);
                this.listeners.set(listener, { reject });
            });
        };
        /**
         * Closes the popup, rejects all requests and clears the listeners
         */
        this.disconnect = () => {
            (0, util_1.closePopup)(this.popup);
            this.popup = null;
            this.listeners.forEach(({ reject }, listener) => {
                reject(error_1.standardErrors.provider.userRejectedRequest('Request rejected'));
                window.removeEventListener('message', listener);
            });
            this.listeners.clear();
        };
        /**
         * Waits for the popup window to fully load and then sends a version message.
         */
        this.waitForPopupLoaded = async () => {
            if (this.popup && !this.popup.closed)
                return this.popup;
            this.popup = (0, util_1.openPopup)(this.url);
            this.onMessage(({ event }) => event === 'PopupUnload')
                .then(this.disconnect)
                .catch(() => { });
            return this.onMessage(({ event }) => event === 'PopupLoaded')
                .then((message) => {
                this.postMessage({
                    requestId: message.id,
                    data: { version: version_1.LIB_VERSION },
                });
            })
                .then(() => {
                if (!this.popup)
                    throw error_1.standardErrors.rpc.internal();
                return this.popup;
            });
        };
        this.url = new URL(url);
    }
}
exports.Communicator = Communicator;


/***/ }),

/***/ 973545:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.closePopup = exports.openPopup = void 0;
const error_1 = __webpack_require__(627884);
const POPUP_WIDTH = 420;
const POPUP_HEIGHT = 540;
// Window Management
function openPopup(url) {
    const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
    const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
    const popup = window.open(url, 'Smart Wallet', `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
    popup === null || popup === void 0 ? void 0 : popup.focus();
    if (!popup) {
        throw error_1.standardErrors.rpc.internal('Pop up window failed to open');
    }
    return popup;
}
exports.openPopup = openPopup;
function closePopup(popup) {
    if (popup && !popup.closed) {
        popup.close();
    }
}
exports.closePopup = closePopup;


/***/ }),

/***/ 311864:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CBW_MOBILE_DEEPLINK_URL = exports.WALLETLINK_URL = exports.CB_KEYS_URL = void 0;
exports.CB_KEYS_URL = 'https://keys.coinbase.com/connect';
exports.WALLETLINK_URL = 'https://www.walletlink.org';
exports.CBW_MOBILE_DEEPLINK_URL = 'https://go.cb-w.com/walletlink';


/***/ }),

/***/ 539921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorValues = exports.standardErrorCodes = void 0;
exports.standardErrorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603,
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902,
    },
};
exports.errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.',
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.',
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).',
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.',
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.',
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.',
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.',
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.',
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.',
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.',
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.',
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.',
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.',
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.',
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.',
    },
    '4902': {
        standard: 'EIP-3085',
        message: 'Unrecognized chain ID.',
    },
};


/***/ }),

/***/ 188957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.standardErrors = void 0;
const constants_1 = __webpack_require__(539921);
const utils_1 = __webpack_require__(485253);
exports.standardErrors = {
    rpc: {
        parse: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.parse, arg),
        invalidRequest: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidRequest, arg),
        invalidParams: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidParams, arg),
        methodNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotFound, arg),
        internal: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.internal, arg),
        server: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum RPC Server errors must provide single object argument.');
            }
            const { code } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) {
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            }
            return getEthJsonRpcError(code, opts);
        },
        invalidInput: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidInput, arg),
        resourceNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceNotFound, arg),
        resourceUnavailable: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceUnavailable, arg),
        transactionRejected: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.transactionRejected, arg),
        methodNotSupported: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotSupported, arg),
        limitExceeded: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.limitExceeded, arg),
    },
    provider: {
        userRejectedRequest: (arg) => {
            return getEthProviderError(constants_1.standardErrorCodes.provider.userRejectedRequest, arg);
        },
        unauthorized: (arg) => {
            return getEthProviderError(constants_1.standardErrorCodes.provider.unauthorized, arg);
        },
        unsupportedMethod: (arg) => {
            return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedMethod, arg);
        },
        disconnected: (arg) => {
            return getEthProviderError(constants_1.standardErrorCodes.provider.disconnected, arg);
        },
        chainDisconnected: (arg) => {
            return getEthProviderError(constants_1.standardErrorCodes.provider.chainDisconnected, arg);
        },
        unsupportedChain: (arg) => {
            return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedChain, arg);
        },
        custom: (opts) => {
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
                throw new Error('Ethereum Provider custom errors must provide single object argument.');
            }
            const { code, message, data } = opts;
            if (!message || typeof message !== 'string') {
                throw new Error('"message" must be a nonempty string');
            }
            return new EthereumProviderError(code, message, data);
        },
    },
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new EthereumRpcError(code, message || (0, utils_1.getMessageFromCode)(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new EthereumProviderError(code, message || (0, utils_1.getMessageFromCode)(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') {
            return [arg];
        }
        else if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message, data } = arg;
            if (message && typeof message !== 'string') {
                throw new Error('Must specify string message.');
            }
            return [message || undefined, data];
        }
    }
    return [];
}
class EthereumRpcError extends Error {
    constructor(code, message, data) {
        if (!Number.isInteger(code)) {
            throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== 'string') {
            throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== undefined) {
            this.data = data;
        }
    }
}
class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */
    constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
    }
}
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}


/***/ }),

/***/ 627884:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.standardErrors = exports.standardErrorCodes = void 0;
var constants_1 = __webpack_require__(539921);
Object.defineProperty(exports, "standardErrorCodes", ({ enumerable: true, get: function () { return constants_1.standardErrorCodes; } }));
var errors_1 = __webpack_require__(188957);
Object.defineProperty(exports, "standardErrors", ({ enumerable: true, get: function () { return errors_1.standardErrors; } }));


/***/ }),

/***/ 945126:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeError = void 0;
// TODO: error should not depend on walletlink. revisit this.
const Web3Response_1 = __webpack_require__(204362);
const version_1 = __webpack_require__(471797);
const constants_1 = __webpack_require__(539921);
const utils_1 = __webpack_require__(485253);
/**
 * Serializes an error to a format that is compatible with the Ethereum JSON RPC error format.
 * See https://docs.cloud.coinbase.com/wallet-sdk/docs/errors
 * for more information.
 */
function serializeError(error, requestOrMethod) {
    const serialized = (0, utils_1.serialize)(getErrorObject(error), {
        shouldIncludeStack: true,
    });
    const docUrl = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors');
    docUrl.searchParams.set('version', version_1.LIB_VERSION);
    docUrl.searchParams.set('code', serialized.code.toString());
    const method = getMethod(serialized.data, requestOrMethod);
    if (method) {
        docUrl.searchParams.set('method', method);
    }
    docUrl.searchParams.set('message', serialized.message);
    return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
}
exports.serializeError = serializeError;
/**
 * Converts an error to a serializable object.
 */
function getErrorObject(error) {
    if (typeof error === 'string') {
        return {
            message: error,
            code: constants_1.standardErrorCodes.rpc.internal,
        };
    }
    else if ((0, Web3Response_1.isErrorResponse)(error)) {
        return Object.assign(Object.assign({}, error), { message: error.errorMessage, code: error.errorCode, data: { method: error.method } });
    }
    return error;
}
/**
 * Gets the method name from the serialized data or the request.
 */
function getMethod(serializedData, request) {
    const methodInData = serializedData === null || serializedData === void 0 ? void 0 : serializedData.method;
    if (methodInData) {
        return methodInData;
    }
    if (request === undefined) {
        return undefined;
    }
    else if (typeof request === 'string') {
        return request;
    }
    else if (!Array.isArray(request)) {
        return request.method;
    }
    else if (request.length > 0) {
        return request[0].method;
    }
    return undefined;
}


/***/ }),

/***/ 485253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serialize = exports.getErrorCode = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
const constants_1 = __webpack_require__(539921);
const FALLBACK_MESSAGE = 'Unspecified error message.';
exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (code && Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(constants_1.errorValues, codeString)) {
            return constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
            return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
    }
    return fallbackMessage;
}
exports.getMessageFromCode = getMessageFromCode;
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */
function isValidCode(code) {
    if (!Number.isInteger(code)) {
        return false;
    }
    const codeString = code.toString();
    if (constants_1.errorValues[codeString]) {
        return true;
    }
    if (isJsonRpcServerError(code)) {
        return true;
    }
    return false;
}
exports.isValidCode = isValidCode;
/**
 * Returns the error code from an error object.
 */
function getErrorCode(error) {
    var _a;
    if (typeof error === 'number') {
        return error;
    }
    else if (isErrorWithCode(error)) {
        return (_a = error.code) !== null && _a !== void 0 ? _a : error.errorCode;
    }
    return undefined;
}
exports.getErrorCode = getErrorCode;
function isErrorWithCode(error) {
    return (typeof error === 'object' &&
        error !== null &&
        (typeof error.code === 'number' ||
            typeof error.errorCode === 'number'));
}
function serialize(error, { shouldIncludeStack = false } = {}) {
    const serialized = {};
    if (error &&
        typeof error === 'object' &&
        !Array.isArray(error) &&
        hasKey(error, 'code') &&
        isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === 'string') {
            serialized.message = _error.message;
            if (hasKey(_error, 'data')) {
                serialized.data = _error.data;
            }
        }
        else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = { originalError: assignOriginalError(error) };
        }
    }
    else {
        serialized.code = constants_1.standardErrorCodes.rpc.internal;
        serialized.message = hasStringProperty(error, 'message') ? error.message : FALLBACK_MESSAGE;
        serialized.data = { originalError: assignOriginalError(error) };
    }
    if (shouldIncludeStack) {
        serialized.stack = hasStringProperty(error, 'stack') ? error.stack : undefined;
    }
    return serialized;
}
exports.serialize = serialize;
// Internal
function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
    if (error && typeof error === 'object' && !Array.isArray(error)) {
        return Object.assign({}, error);
    }
    return error;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasStringProperty(obj, prop) {
    return (typeof obj === 'object' && obj !== null && prop in obj && typeof obj[prop] === 'string');
}


/***/ }),

/***/ 504610:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.determineMethodCategory = void 0;
const mapping = {
    handshake: ['eth_requestAccounts'],
    sign: [
        'eth_ecRecover',
        'personal_sign',
        'personal_ecRecover',
        'eth_signTransaction',
        'eth_sendTransaction',
        'eth_signTypedData_v1',
        'eth_signTypedData_v3',
        'eth_signTypedData_v4',
        'eth_signTypedData',
        'wallet_addEthereumChain',
        'wallet_switchEthereumChain',
        'wallet_watchAsset',
        'wallet_getCapabilities',
        'wallet_sendCalls',
        'wallet_showCallsStatus',
    ],
    state: [
        // internal state
        'eth_chainId',
        'eth_accounts',
        'eth_coinbase',
        'net_version',
    ],
    deprecated: ['eth_sign', 'eth_signTypedData_v2'],
    unsupported: ['eth_subscribe', 'eth_unsubscribe'],
    fetch: [],
};
function determineMethodCategory(method) {
    for (const c in mapping) {
        const category = c;
        if (mapping[category].includes(method)) {
            return category;
        }
    }
    return undefined;
}
exports.determineMethodCategory = determineMethodCategory;


/***/ }),

/***/ 940830:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegExpString = exports.IntNumber = exports.BigIntString = exports.AddressString = exports.HexString = exports.OpaqueType = void 0;
function OpaqueType() {
    return (value) => value;
}
exports.OpaqueType = OpaqueType;
exports.HexString = OpaqueType();
exports.AddressString = OpaqueType();
exports.BigIntString = OpaqueType();
function IntNumber(num) {
    return Math.floor(num);
}
exports.IntNumber = IntNumber;
exports.RegExpString = OpaqueType();


/***/ }),

/***/ 11376:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.areAddressArraysEqual = exports.getFavicon = exports.range = exports.isBigNumber = exports.ensureParsedJSONObject = exports.ensureBigInt = exports.ensureRegExpString = exports.ensureIntNumber = exports.ensureBuffer = exports.ensureAddressString = exports.ensureEvenLengthHexString = exports.ensureHexString = exports.isHexString = exports.prepend0x = exports.strip0x = exports.has0xPrefix = exports.hexStringFromIntNumber = exports.intNumberFromHexString = exports.bigIntStringFromBigInt = exports.hexStringFromBuffer = exports.hexStringToUint8Array = exports.uint8ArrayToHex = exports.randomBytesHex = void 0;
const error_1 = __webpack_require__(627884);
const _1 = __webpack_require__(940830);
const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
/**
 * @param length number of bytes
 */
function randomBytesHex(length) {
    return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
exports.randomBytesHex = randomBytesHex;
function uint8ArrayToHex(value) {
    return [...value].map((b) => b.toString(16).padStart(2, '0')).join('');
}
exports.uint8ArrayToHex = uint8ArrayToHex;
function hexStringToUint8Array(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
}
exports.hexStringToUint8Array = hexStringToUint8Array;
function hexStringFromBuffer(buf, includePrefix = false) {
    const hex = buf.toString('hex');
    return (0, _1.HexString)(includePrefix ? `0x${hex}` : hex);
}
exports.hexStringFromBuffer = hexStringFromBuffer;
function bigIntStringFromBigInt(bi) {
    return (0, _1.BigIntString)(bi.toString(10));
}
exports.bigIntStringFromBigInt = bigIntStringFromBigInt;
function intNumberFromHexString(hex) {
    return (0, _1.IntNumber)(Number(BigInt(ensureEvenLengthHexString(hex, true))));
}
exports.intNumberFromHexString = intNumberFromHexString;
function hexStringFromIntNumber(num) {
    return (0, _1.HexString)(`0x${BigInt(num).toString(16)}`);
}
exports.hexStringFromIntNumber = hexStringFromIntNumber;
function has0xPrefix(str) {
    return str.startsWith('0x') || str.startsWith('0X');
}
exports.has0xPrefix = has0xPrefix;
function strip0x(hex) {
    if (has0xPrefix(hex)) {
        return hex.slice(2);
    }
    return hex;
}
exports.strip0x = strip0x;
function prepend0x(hex) {
    if (has0xPrefix(hex)) {
        return `0x${hex.slice(2)}`;
    }
    return `0x${hex}`;
}
exports.prepend0x = prepend0x;
function isHexString(hex) {
    if (typeof hex !== 'string') {
        return false;
    }
    const s = strip0x(hex).toLowerCase();
    return HEXADECIMAL_STRING_REGEX.test(s);
}
exports.isHexString = isHexString;
function ensureHexString(hex, includePrefix = false) {
    if (typeof hex === 'string') {
        const s = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s)) {
            return (0, _1.HexString)(includePrefix ? `0x${s}` : s);
        }
    }
    throw error_1.standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
exports.ensureHexString = ensureHexString;
function ensureEvenLengthHexString(hex, includePrefix = false) {
    let h = ensureHexString(hex, false);
    if (h.length % 2 === 1) {
        h = (0, _1.HexString)(`0${h}`);
    }
    return includePrefix ? (0, _1.HexString)(`0x${h}`) : h;
}
exports.ensureEvenLengthHexString = ensureEvenLengthHexString;
function ensureAddressString(str) {
    if (typeof str === 'string') {
        const s = strip0x(str).toLowerCase();
        if (isHexString(s) && s.length === 40) {
            return (0, _1.AddressString)(prepend0x(s));
        }
    }
    throw error_1.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
exports.ensureAddressString = ensureAddressString;
function ensureBuffer(str) {
    if (Buffer.isBuffer(str)) {
        return str;
    }
    if (typeof str === 'string') {
        if (isHexString(str)) {
            const s = ensureEvenLengthHexString(str, false);
            return Buffer.from(s, 'hex');
        }
        return Buffer.from(str, 'utf8');
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
exports.ensureBuffer = ensureBuffer;
function ensureIntNumber(num) {
    if (typeof num === 'number' && Number.isInteger(num)) {
        return (0, _1.IntNumber)(num);
    }
    if (typeof num === 'string') {
        if (INT_STRING_REGEX.test(num)) {
            return (0, _1.IntNumber)(Number(num));
        }
        if (isHexString(num)) {
            return (0, _1.IntNumber)(Number(BigInt(ensureEvenLengthHexString(num, true))));
        }
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
exports.ensureIntNumber = ensureIntNumber;
function ensureRegExpString(regExp) {
    if (regExp instanceof RegExp) {
        return (0, _1.RegExpString)(regExp.toString());
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
}
exports.ensureRegExpString = ensureRegExpString;
function ensureBigInt(val) {
    if (val !== null && (typeof val === 'bigint' || isBigNumber(val))) {
        return BigInt(val.toString(10));
    }
    if (typeof val === 'number') {
        return BigInt(ensureIntNumber(val));
    }
    if (typeof val === 'string') {
        if (INT_STRING_REGEX.test(val)) {
            return BigInt(val);
        }
        if (isHexString(val)) {
            return BigInt(ensureEvenLengthHexString(val, true));
        }
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
exports.ensureBigInt = ensureBigInt;
function ensureParsedJSONObject(val) {
    if (typeof val === 'string') {
        return JSON.parse(val);
    }
    if (typeof val === 'object') {
        return val;
    }
    throw error_1.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
exports.ensureParsedJSONObject = ensureParsedJSONObject;
function isBigNumber(val) {
    if (val == null || typeof val.constructor !== 'function') {
        return false;
    }
    const { constructor } = val;
    return typeof constructor.config === 'function' && typeof constructor.EUCLID === 'number';
}
exports.isBigNumber = isBigNumber;
function range(start, stop) {
    return Array.from({ length: stop - start }, (_, i) => start + i);
}
exports.range = range;
function getFavicon() {
    const el = document.querySelector('link[sizes="192x192"]') ||
        document.querySelector('link[sizes="180x180"]') ||
        document.querySelector('link[rel="icon"]') ||
        document.querySelector('link[rel="shortcut icon"]');
    const { protocol, host } = document.location;
    const href = el ? el.getAttribute('href') : null;
    if (!href || href.startsWith('javascript:') || href.startsWith('vbscript:')) {
        return null;
    }
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('data:')) {
        return href;
    }
    if (href.startsWith('//')) {
        return protocol + href;
    }
    return `${protocol}//${host}${href}`;
}
exports.getFavicon = getFavicon;
function areAddressArraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
exports.areAddressArraysEqual = areAddressArraysEqual;


/***/ }),

/***/ 939229:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoinbaseWalletSDK = void 0;
// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>
const CoinbaseWalletSDK_1 = __webpack_require__(270526);
exports["default"] = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
var CoinbaseWalletSDK_2 = __webpack_require__(270526);
Object.defineProperty(exports, "CoinbaseWalletSDK", ({ enumerable: true, get: function () { return CoinbaseWalletSDK_2.CoinbaseWalletSDK; } }));


/***/ }),

/***/ 477738:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SCWKeyManager = void 0;
const cipher_1 = __webpack_require__(220251);
const ScopedLocalStorage_1 = __webpack_require__(508572);
const OWN_PRIVATE_KEY = {
    storageKey: 'ownPrivateKey',
    keyType: 'private',
};
const OWN_PUBLIC_KEY = {
    storageKey: 'ownPublicKey',
    keyType: 'public',
};
const PEER_PUBLIC_KEY = {
    storageKey: 'peerPublicKey',
    keyType: 'public',
};
class SCWKeyManager {
    constructor() {
        this.storage = new ScopedLocalStorage_1.ScopedLocalStorage('CBWSDK', 'SCWKeyManager');
        this.ownPrivateKey = null;
        this.ownPublicKey = null;
        this.peerPublicKey = null;
        this.sharedSecret = null;
    }
    async getOwnPublicKey() {
        await this.loadKeysIfNeeded();
        return this.ownPublicKey;
    }
    // returns null if the shared secret is not yet derived
    async getSharedSecret() {
        await this.loadKeysIfNeeded();
        return this.sharedSecret;
    }
    async setPeerPublicKey(key) {
        this.sharedSecret = null;
        this.peerPublicKey = key;
        await this.storeKey(PEER_PUBLIC_KEY, key);
        await this.loadKeysIfNeeded();
    }
    async clear() {
        this.ownPrivateKey = null;
        this.ownPublicKey = null;
        this.peerPublicKey = null;
        this.sharedSecret = null;
        this.storage.removeItem(OWN_PUBLIC_KEY.storageKey);
        this.storage.removeItem(OWN_PRIVATE_KEY.storageKey);
        this.storage.removeItem(PEER_PUBLIC_KEY.storageKey);
    }
    async generateKeyPair() {
        const newKeyPair = await (0, cipher_1.generateKeyPair)();
        this.ownPrivateKey = newKeyPair.privateKey;
        this.ownPublicKey = newKeyPair.publicKey;
        await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
        await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
    }
    async loadKeysIfNeeded() {
        if (this.ownPrivateKey === null) {
            this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
        }
        if (this.ownPublicKey === null) {
            this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
        }
        if (this.ownPrivateKey === null || this.ownPublicKey === null) {
            await this.generateKeyPair();
        }
        if (this.peerPublicKey === null) {
            this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
        }
        if (this.sharedSecret === null) {
            if (this.ownPrivateKey === null || this.peerPublicKey === null)
                return;
            this.sharedSecret = await (0, cipher_1.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey);
        }
    }
    // storage methods
    async loadKey(item) {
        const key = this.storage.getItem(item.storageKey);
        if (!key)
            return null;
        return (0, cipher_1.importKeyFromHexString)(item.keyType, key);
    }
    async storeKey(item, key) {
        const hexString = await (0, cipher_1.exportKeyToHexString)(item.keyType, key);
        this.storage.setItem(item.storageKey, hexString);
    }
}
exports.SCWKeyManager = SCWKeyManager;


/***/ }),

/***/ 345298:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SCWSigner = void 0;
const SCWKeyManager_1 = __webpack_require__(477738);
const SCWStateManager_1 = __webpack_require__(332944);
const error_1 = __webpack_require__(627884);
const util_1 = __webpack_require__(11376);
const cipher_1 = __webpack_require__(220251);
class SCWSigner {
    constructor(params) {
        this.metadata = params.metadata;
        this.communicator = params.communicator;
        this.keyManager = new SCWKeyManager_1.SCWKeyManager();
        this.stateManager = new SCWStateManager_1.SCWStateManager({
            appChainIds: this.metadata.appChainIds,
            updateListener: params.updateListener,
        });
        this.handshake = this.handshake.bind(this);
        this.request = this.request.bind(this);
        this.createRequestMessage = this.createRequestMessage.bind(this);
        this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
    }
    async handshake() {
        const handshakeMessage = await this.createRequestMessage({
            handshake: {
                method: 'eth_requestAccounts',
                params: this.metadata,
            },
        });
        const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
        // store peer's public key
        if ('failure' in response.content)
            throw response.content.failure;
        const peerPublicKey = await (0, cipher_1.importKeyFromHexString)('public', response.sender);
        await this.keyManager.setPeerPublicKey(peerPublicKey);
        const decrypted = await this.decryptResponseMessage(response);
        this.updateInternalState({ method: 'eth_requestAccounts' }, decrypted);
        const result = decrypted.result;
        if ('error' in result)
            throw result.error;
        return this.stateManager.accounts;
    }
    async request(request) {
        const localResult = this.tryLocalHandling(request);
        if (localResult !== undefined) {
            if (localResult instanceof Error)
                throw localResult;
            return localResult;
        }
        // Open the popup before constructing the request message.
        // This is to ensure that the popup is not blocked by some browsers (i.e. Safari)
        await this.communicator.waitForPopupLoaded();
        const response = await this.sendEncryptedRequest(request);
        const decrypted = await this.decryptResponseMessage(response);
        this.updateInternalState(request, decrypted);
        const result = decrypted.result;
        if ('error' in result)
            throw result.error;
        return result.value;
    }
    async disconnect() {
        this.stateManager.clear();
        await this.keyManager.clear();
    }
    tryLocalHandling(request) {
        var _a;
        switch (request.method) {
            case 'wallet_switchEthereumChain': {
                const params = request.params;
                if (!params || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId)) {
                    throw error_1.standardErrors.rpc.invalidParams();
                }
                const chainId = (0, util_1.ensureIntNumber)(params[0].chainId);
                const switched = this.stateManager.switchChain(chainId);
                // "return null if the request was successful"
                // https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
                return switched ? null : undefined;
            }
            case 'wallet_getCapabilities': {
                const walletCapabilities = this.stateManager.walletCapabilities;
                if (!walletCapabilities) {
                    // This should never be the case for scw connections as capabilities are set during handshake
                    throw error_1.standardErrors.provider.unauthorized('No wallet capabilities found, please disconnect and reconnect');
                }
                return walletCapabilities;
            }
            default:
                return undefined;
        }
    }
    async sendEncryptedRequest(request) {
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
            throw error_1.standardErrors.provider.unauthorized('No valid session found, try requestAccounts before other methods');
        }
        const encrypted = await (0, cipher_1.encryptContent)({
            action: request,
            chainId: this.stateManager.activeChain.id,
        }, sharedSecret);
        const message = await this.createRequestMessage({ encrypted });
        return this.communicator.postRequestAndWaitForResponse(message);
    }
    async createRequestMessage(content) {
        const publicKey = await (0, cipher_1.exportKeyToHexString)('public', await this.keyManager.getOwnPublicKey());
        return {
            id: crypto.randomUUID(),
            sender: publicKey,
            content,
            timestamp: new Date(),
        };
    }
    async decryptResponseMessage(message) {
        const content = message.content;
        // throw protocol level error
        if ('failure' in content) {
            throw content.failure;
        }
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
            throw error_1.standardErrors.provider.unauthorized('Invalid session');
        }
        return (0, cipher_1.decryptContent)(content.encrypted, sharedSecret);
    }
    updateInternalState(request, response) {
        var _a, _b;
        const availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
        if (availableChains) {
            this.stateManager.updateAvailableChains(availableChains);
        }
        const walletCapabilities = (_b = response.data) === null || _b === void 0 ? void 0 : _b.capabilities;
        if (walletCapabilities) {
            this.stateManager.updateWalletCapabilities(walletCapabilities);
        }
        const result = response.result;
        if ('error' in result)
            return;
        switch (request.method) {
            case 'eth_requestAccounts': {
                const accounts = result.value;
                this.stateManager.updateAccounts(accounts);
                break;
            }
            case 'wallet_switchEthereumChain': {
                // "return null if the request was successful"
                // https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
                if (result.value !== null)
                    return;
                const params = request.params;
                const chainId = (0, util_1.ensureIntNumber)(params[0].chainId);
                this.stateManager.switchChain(chainId);
                break;
            }
            default:
                break;
        }
    }
}
exports.SCWSigner = SCWSigner;


/***/ }),

/***/ 332944:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SCWStateManager = void 0;
const ScopedLocalStorage_1 = __webpack_require__(508572);
const ACCOUNTS_KEY = 'accounts';
const ACTIVE_CHAIN_STORAGE_KEY = 'activeChain';
const AVAILABLE_CHAINS_STORAGE_KEY = 'availableChains';
const WALLET_CAPABILITIES_STORAGE_KEY = 'walletCapabilities';
class SCWStateManager {
    get accounts() {
        return this._accounts;
    }
    get activeChain() {
        return this._activeChain;
    }
    get walletCapabilities() {
        return this._walletCapabilities;
    }
    constructor(params) {
        var _a, _b;
        this.storage = new ScopedLocalStorage_1.ScopedLocalStorage('CBWSDK', 'SCWStateManager');
        this.updateListener = params.updateListener;
        this.availableChains = this.loadItemFromStorage(AVAILABLE_CHAINS_STORAGE_KEY);
        this._walletCapabilities = this.loadItemFromStorage(WALLET_CAPABILITIES_STORAGE_KEY);
        const accounts = this.loadItemFromStorage(ACCOUNTS_KEY);
        const chain = this.loadItemFromStorage(ACTIVE_CHAIN_STORAGE_KEY);
        if (accounts) {
            this.updateListener.onAccountsUpdate({
                accounts,
                source: 'storage',
            });
        }
        if (chain) {
            this.updateListener.onChainUpdate({
                chain,
                source: 'storage',
            });
        }
        this._accounts = accounts || [];
        this._activeChain = chain || { id: (_b = (_a = params.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1 };
    }
    updateAccounts(accounts) {
        this._accounts = accounts;
        this.storeItemToStorage(ACCOUNTS_KEY, accounts);
        this.updateListener.onAccountsUpdate({
            accounts,
            source: 'wallet',
        });
    }
    switchChain(chainId) {
        var _a;
        const chain = (_a = this.availableChains) === null || _a === void 0 ? void 0 : _a.find((chain) => chain.id === chainId);
        if (!chain)
            return false;
        if (chain === this._activeChain)
            return true;
        this._activeChain = chain;
        this.storeItemToStorage(ACTIVE_CHAIN_STORAGE_KEY, chain);
        this.updateListener.onChainUpdate({
            chain,
            source: 'wallet',
        });
        return true;
    }
    updateAvailableChains(rawChains) {
        if (!rawChains || Object.keys(rawChains).length === 0)
            return;
        const chains = Object.entries(rawChains).map(([id, rpcUrl]) => ({ id: Number(id), rpcUrl }));
        this.availableChains = chains;
        this.storeItemToStorage(AVAILABLE_CHAINS_STORAGE_KEY, chains);
        this.switchChain(this._activeChain.id);
    }
    updateWalletCapabilities(capabilities) {
        this._walletCapabilities = capabilities;
        this.storeItemToStorage(WALLET_CAPABILITIES_STORAGE_KEY, capabilities);
    }
    storeItemToStorage(key, item) {
        this.storage.setItem(key, JSON.stringify(item));
    }
    loadItemFromStorage(key) {
        const item = this.storage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    }
    clear() {
        this.storage.clear();
    }
}
exports.SCWStateManager = SCWStateManager;


/***/ }),

/***/ 362015:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSigner = exports.fetchSignerType = exports.storeSignerType = exports.loadSignerType = void 0;
const SCWSigner_1 = __webpack_require__(345298);
const WalletLinkSigner_1 = __webpack_require__(380394);
const error_1 = __webpack_require__(627884);
const provider_1 = __webpack_require__(805305);
const ScopedLocalStorage_1 = __webpack_require__(508572);
const SIGNER_TYPE_KEY = 'SignerType';
const storage = new ScopedLocalStorage_1.ScopedLocalStorage('CBWSDK', 'SignerConfigurator');
function loadSignerType() {
    return storage.getItem(SIGNER_TYPE_KEY);
}
exports.loadSignerType = loadSignerType;
function storeSignerType(signerType) {
    storage.setItem(SIGNER_TYPE_KEY, signerType);
}
exports.storeSignerType = storeSignerType;
async function fetchSignerType(params) {
    const { communicator, metadata } = params;
    listenForWalletLinkSessionRequest(communicator, metadata).catch(() => { });
    const request = {
        id: crypto.randomUUID(),
        event: 'selectSignerType',
        data: params.preference,
    };
    const { data } = await communicator.postRequestAndWaitForResponse(request);
    return data;
}
exports.fetchSignerType = fetchSignerType;
function createSigner(params) {
    const { signerType, metadata, communicator, updateListener } = params;
    switch (signerType) {
        case 'scw':
            return new SCWSigner_1.SCWSigner({
                metadata,
                updateListener,
                communicator,
            });
        case 'walletlink':
            return new WalletLinkSigner_1.WalletLinkSigner({
                metadata,
                updateListener,
            });
        case 'extension': {
            const injectedSigner = (0, provider_1.getCoinbaseInjectedSigner)();
            if (!injectedSigner) {
                throw error_1.standardErrors.rpc.internal('injected signer not found');
            }
            return injectedSigner;
        }
    }
}
exports.createSigner = createSigner;
async function listenForWalletLinkSessionRequest(communicator, metadata) {
    await communicator.onMessage(({ event }) => event === 'WalletLinkSessionRequest');
    // temporary walletlink signer instance to handle WalletLinkSessionRequest
    // will revisit this when refactoring the walletlink signer
    const walletlink = new WalletLinkSigner_1.WalletLinkSigner({
        metadata,
    });
    // send wallet link session to popup
    communicator.postMessage({
        event: 'WalletLinkUpdate',
        data: { session: walletlink.getSession() },
    });
    // wait for handshake to complete
    await walletlink.handshake();
    // send connected status to popup
    communicator.postMessage({
        event: 'WalletLinkUpdate',
        data: { connected: true },
    });
}


/***/ }),

/***/ 380394:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkSigner = void 0;
// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>
const eth_eip712_util_1 = __importDefault(__webpack_require__(818878));
const constants_1 = __webpack_require__(131022);
const RelayEventManager_1 = __webpack_require__(252957);
const Web3Response_1 = __webpack_require__(204362);
const WalletLinkRelay_1 = __webpack_require__(512849);
const constants_2 = __webpack_require__(311864);
const error_1 = __webpack_require__(627884);
const util_1 = __webpack_require__(11376);
const ScopedLocalStorage_1 = __webpack_require__(508572);
const DEFAULT_CHAIN_ID_KEY = 'DefaultChainId';
const DEFAULT_JSON_RPC_URL = 'DefaultJsonRpcUrl';
// original source: https://github.com/coinbase/coinbase-wallet-sdk/blob/v3.7.1/packages/wallet-sdk/src/provider/CoinbaseWalletProvider.ts
class WalletLinkSigner {
    constructor(options) {
        var _a, _b;
        this._relay = null;
        this._addresses = [];
        this.hasMadeFirstChainChangedEmission = false;
        const { appName, appLogoUrl } = options.metadata;
        this._appName = appName;
        this._appLogoUrl = appLogoUrl;
        this._storage = new ScopedLocalStorage_1.ScopedLocalStorage('walletlink', constants_2.WALLETLINK_URL);
        this.updateListener = options.updateListener;
        this._relayEventManager = new RelayEventManager_1.RelayEventManager();
        this._jsonRpcUrlFromOpts = '';
        const cachedAddresses = this._storage.getItem(constants_1.LOCAL_STORAGE_ADDRESSES_KEY);
        if (cachedAddresses) {
            const addresses = cachedAddresses.split(' ');
            if (addresses[0] !== '') {
                this._addresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
                (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onAccountsUpdate({
                    accounts: this._addresses,
                    source: 'storage',
                });
            }
        }
        const cachedChainId = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
        if (cachedChainId) {
            (_b = this.updateListener) === null || _b === void 0 ? void 0 : _b.onChainUpdate({
                chain: {
                    id: this.getChainId(),
                    rpcUrl: this.jsonRpcUrl,
                },
                source: 'storage',
            });
            this.hasMadeFirstChainChangedEmission = true;
        }
        this.initializeRelay();
    }
    getSession() {
        const relay = this.initializeRelay();
        const { id, secret } = relay.getWalletLinkSession();
        return { id, secret };
    }
    async handshake() {
        const ethAddresses = await this.request({ method: 'eth_requestAccounts' });
        return ethAddresses;
    }
    get selectedAddress() {
        return this._addresses[0] || undefined;
    }
    get jsonRpcUrl() {
        var _a;
        return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts;
    }
    set jsonRpcUrl(value) {
        this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
    }
    updateProviderInfo(jsonRpcUrl, chainId) {
        var _a;
        this.jsonRpcUrl = jsonRpcUrl;
        // emit chainChanged event if necessary
        const originalChainId = this.getChainId();
        this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
        const chainChanged = (0, util_1.ensureIntNumber)(chainId) !== originalChainId;
        if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
            (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onChainUpdate({
                chain: { id: chainId, rpcUrl: jsonRpcUrl },
                source: 'wallet',
            });
            this.hasMadeFirstChainChangedEmission = true;
        }
    }
    async watchAsset(type, address, symbol, decimals, image, chainId) {
        const relay = this.initializeRelay();
        const result = await relay.watchAsset(type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
        if ((0, Web3Response_1.isErrorResponse)(result))
            return false;
        return !!result.result;
    }
    async addEthereumChain(chainId, rpcUrls, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
        var _a, _b;
        if ((0, util_1.ensureIntNumber)(chainId) === this.getChainId()) {
            return false;
        }
        const relay = this.initializeRelay();
        if (!this._isAuthorized()) {
            await relay.requestEthereumAccounts();
        }
        const res = await relay.addEthereumChain(chainId.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
        if ((0, Web3Response_1.isErrorResponse)(res))
            return false;
        if (((_a = res.result) === null || _a === void 0 ? void 0 : _a.isApproved) === true) {
            this.updateProviderInfo(rpcUrls[0], chainId);
        }
        return ((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true;
    }
    async switchEthereumChain(chainId) {
        const relay = this.initializeRelay();
        const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || undefined);
        // backward compatibility
        if ((0, Web3Response_1.isErrorResponse)(res)) {
            if (!res.errorCode)
                return;
            if (res.errorCode === error_1.standardErrorCodes.provider.unsupportedChain) {
                throw error_1.standardErrors.provider.unsupportedChain();
            }
            else {
                throw error_1.standardErrors.provider.custom({
                    message: res.errorMessage,
                    code: res.errorCode,
                });
            }
        }
        const switchResponse = res.result;
        if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
            this.updateProviderInfo(switchResponse.rpcUrl, chainId);
        }
    }
    async disconnect() {
        if (this._relay) {
            this._relay.resetAndReload();
        }
        this._storage.clear();
    }
    async request(args) {
        try {
            return this._request(args).catch((error) => {
                throw error;
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async _request(args) {
        if (!args || typeof args !== 'object' || Array.isArray(args)) {
            throw error_1.standardErrors.rpc.invalidRequest({
                message: 'Expected a single, non-array, object argument.',
                data: args,
            });
        }
        const { method, params } = args;
        if (typeof method !== 'string' || method.length === 0) {
            throw error_1.standardErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: args,
            });
        }
        if (params !== undefined &&
            !Array.isArray(params) &&
            (typeof params !== 'object' || params === null)) {
            throw error_1.standardErrors.rpc.invalidRequest({
                message: "'args.params' must be an object or array if provided.",
                data: args,
            });
        }
        const newParams = params === undefined ? [] : params;
        // Coinbase Wallet Requests
        const id = this._relayEventManager.makeRequestId();
        const result = await this._sendRequestAsync({
            method,
            params: newParams,
            jsonrpc: '2.0',
            id,
        });
        return result.result;
    }
    _setAddresses(addresses, _) {
        var _a;
        if (!Array.isArray(addresses)) {
            throw new Error('addresses is not an array');
        }
        const newAddresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
        if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
            return;
        }
        this._addresses = newAddresses;
        (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onAccountsUpdate({
            accounts: newAddresses,
            source: 'wallet',
        });
        this._storage.setItem(constants_1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(' '));
    }
    _sendRequestAsync(request) {
        return new Promise((resolve, reject) => {
            try {
                const syncResult = this._handleSynchronousMethods(request);
                if (syncResult !== undefined) {
                    return resolve({
                        jsonrpc: '2.0',
                        id: request.id,
                        result: syncResult,
                    });
                }
            }
            catch (err) {
                return reject(err);
            }
            this._handleAsynchronousMethods(request)
                .then((res) => res && resolve(Object.assign(Object.assign({}, res), { id: request.id })))
                .catch((err) => reject(err));
        });
    }
    _handleSynchronousMethods(request) {
        const { method } = request;
        switch (method) {
            case 'eth_accounts':
                return this._eth_accounts();
            case 'eth_coinbase':
                return this._eth_coinbase();
            case 'net_version':
                return this._net_version();
            case 'eth_chainId':
                return this._eth_chainId();
            default:
                return undefined;
        }
    }
    async _handleAsynchronousMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
            case 'eth_requestAccounts':
                return this._eth_requestAccounts();
            case 'eth_sign':
                return this._eth_sign(params);
            case 'eth_ecRecover':
                return this._eth_ecRecover(params);
            case 'personal_sign':
                return this._personal_sign(params);
            case 'personal_ecRecover':
                return this._personal_ecRecover(params);
            case 'eth_signTransaction':
                return this._eth_signTransaction(params);
            case 'eth_sendRawTransaction':
                return this._eth_sendRawTransaction(params);
            case 'eth_sendTransaction':
                return this._eth_sendTransaction(params);
            case 'eth_signTypedData_v1':
                return this._eth_signTypedData_v1(params);
            case 'eth_signTypedData_v2':
                return this._throwUnsupportedMethodError();
            case 'eth_signTypedData_v3':
                return this._eth_signTypedData_v3(params);
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
                return this._eth_signTypedData_v4(params);
            case 'wallet_addEthereumChain':
                return this._wallet_addEthereumChain(params);
            case 'wallet_switchEthereumChain':
                return this._wallet_switchEthereumChain(params);
            case 'wallet_watchAsset':
                return this._wallet_watchAsset(params);
            default:
                return this._throwUnsupportedMethodError();
        }
    }
    _isKnownAddress(addressString) {
        try {
            const addressStr = (0, util_1.ensureAddressString)(addressString);
            const lowercaseAddresses = this._addresses.map((address) => (0, util_1.ensureAddressString)(address));
            return lowercaseAddresses.includes(addressStr);
        }
        catch (_a) {
            // noop
        }
        return false;
    }
    _ensureKnownAddress(addressString) {
        if (!this._isKnownAddress(addressString)) {
            throw new Error('Unknown Ethereum address');
        }
    }
    _prepareTransactionParams(tx) {
        const fromAddress = tx.from ? (0, util_1.ensureAddressString)(tx.from) : this.selectedAddress;
        if (!fromAddress) {
            throw new Error('Ethereum address is unavailable');
        }
        this._ensureKnownAddress(fromAddress);
        const toAddress = tx.to ? (0, util_1.ensureAddressString)(tx.to) : null;
        const weiValue = tx.value != null ? (0, util_1.ensureBigInt)(tx.value) : BigInt(0);
        const data = tx.data ? (0, util_1.ensureBuffer)(tx.data) : Buffer.alloc(0);
        const nonce = tx.nonce != null ? (0, util_1.ensureIntNumber)(tx.nonce) : null;
        const gasPriceInWei = tx.gasPrice != null ? (0, util_1.ensureBigInt)(tx.gasPrice) : null;
        const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1.ensureBigInt)(tx.maxFeePerGas) : null;
        const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? (0, util_1.ensureBigInt)(tx.maxPriorityFeePerGas) : null;
        const gasLimit = tx.gas != null ? (0, util_1.ensureBigInt)(tx.gas) : null;
        const chainId = tx.chainId ? (0, util_1.ensureIntNumber)(tx.chainId) : this.getChainId();
        return {
            fromAddress,
            toAddress,
            weiValue,
            data,
            nonce,
            gasPriceInWei,
            maxFeePerGas,
            maxPriorityFeePerGas,
            gasLimit,
            chainId,
        };
    }
    _isAuthorized() {
        return this._addresses.length > 0;
    }
    _requireAuthorization() {
        if (!this._isAuthorized()) {
            throw error_1.standardErrors.provider.unauthorized({});
        }
    }
    _throwUnsupportedMethodError() {
        throw error_1.standardErrors.provider.unsupportedMethod({});
    }
    async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
        this._ensureKnownAddress(address);
        try {
            const relay = this.initializeRelay();
            const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson);
            if ((0, Web3Response_1.isErrorResponse)(res)) {
                throw new Error(res.errorMessage);
            }
            return { jsonrpc: '2.0', id: 0, result: res.result };
        }
        catch (err) {
            if (typeof err.message === 'string' && err.message.match(/(denied|rejected)/i)) {
                throw error_1.standardErrors.provider.userRejectedRequest('User denied message signature');
            }
            throw err;
        }
    }
    async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        const relay = this.initializeRelay();
        const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix);
        if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
        }
        return { jsonrpc: '2.0', id: 0, result: res.result };
    }
    _eth_accounts() {
        return [...this._addresses];
    }
    _eth_coinbase() {
        return this.selectedAddress || null;
    }
    _net_version() {
        return this.getChainId().toString(10);
    }
    _eth_chainId() {
        return (0, util_1.hexStringFromIntNumber)(this.getChainId());
    }
    getChainId() {
        const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
        if (!chainIdStr) {
            return (0, util_1.ensureIntNumber)(1); // default to mainnet
        }
        const chainId = parseInt(chainIdStr, 10);
        return (0, util_1.ensureIntNumber)(chainId);
    }
    async _eth_requestAccounts() {
        if (this._isAuthorized()) {
            return Promise.resolve({
                jsonrpc: '2.0',
                id: 0,
                result: this._addresses,
            });
        }
        let res;
        try {
            const relay = this.initializeRelay();
            res = await relay.requestEthereumAccounts();
            if ((0, Web3Response_1.isErrorResponse)(res)) {
                throw new Error(res.errorMessage);
            }
        }
        catch (err) {
            if (typeof err.message === 'string' && err.message.match(/(denied|rejected)/i)) {
                throw error_1.standardErrors.provider.userRejectedRequest('User denied account authorization');
            }
            throw err;
        }
        if (!res.result) {
            throw new Error('accounts received is empty');
        }
        this._setAddresses(res.result);
        return { jsonrpc: '2.0', id: 0, result: this._addresses };
    }
    _eth_sign(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const message = (0, util_1.ensureBuffer)(params[1]);
        return this._signEthereumMessage(message, address, false);
    }
    _eth_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, false);
    }
    _personal_sign(params) {
        this._requireAuthorization();
        const message = (0, util_1.ensureBuffer)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        return this._signEthereumMessage(message, address, true);
    }
    _personal_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, true);
    }
    async _eth_signTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
            const relay = this.initializeRelay();
            const res = await relay.signEthereumTransaction(tx);
            if ((0, Web3Response_1.isErrorResponse)(res)) {
                throw new Error(res.errorMessage);
            }
            return { jsonrpc: '2.0', id: 0, result: res.result };
        }
        catch (err) {
            if (typeof err.message === 'string' && err.message.match(/(denied|rejected)/i)) {
                throw error_1.standardErrors.provider.userRejectedRequest('User denied transaction signature');
            }
            throw err;
        }
    }
    async _eth_sendRawTransaction(params) {
        const signedTransaction = (0, util_1.ensureBuffer)(params[0]);
        const relay = this.initializeRelay();
        const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId());
        if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
        }
        return { jsonrpc: '2.0', id: 0, result: res.result };
    }
    async _eth_sendTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
            const relay = this.initializeRelay();
            const res = await relay.signAndSubmitEthereumTransaction(tx);
            if ((0, Web3Response_1.isErrorResponse)(res)) {
                throw new Error(res.errorMessage);
            }
            return { jsonrpc: '2.0', id: 0, result: res.result };
        }
        catch (err) {
            if (typeof err.message === 'string' && err.message.match(/(denied|rejected)/i)) {
                throw error_1.standardErrors.provider.userRejectedRequest('User denied transaction signature');
            }
            throw err;
        }
    }
    async _eth_signTypedData_v1(params) {
        this._requireAuthorization();
        const typedData = (0, util_1.ensureParsedJSONObject)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v3(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v3({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v4(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v4({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _wallet_addEthereumChain(params) {
        var _a, _b, _c, _d;
        const request = params[0];
        if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return {
                jsonrpc: '2.0',
                id: 0,
                error: { code: 2, message: `please pass in at least 1 rpcUrl` },
            };
        }
        if (!request.chainName || request.chainName.trim() === '') {
            throw error_1.standardErrors.rpc.invalidParams('chainName is a required field');
        }
        if (!request.nativeCurrency) {
            throw error_1.standardErrors.rpc.invalidParams('nativeCurrency is a required field');
        }
        const chainIdNumber = parseInt(request.chainId, 16);
        const success = await this.addEthereumChain(chainIdNumber, (_b = request.rpcUrls) !== null && _b !== void 0 ? _b : [], (_c = request.blockExplorerUrls) !== null && _c !== void 0 ? _c : [], request.chainName, (_d = request.iconUrls) !== null && _d !== void 0 ? _d : [], request.nativeCurrency);
        if (success) {
            return { jsonrpc: '2.0', id: 0, result: null };
        }
        return {
            jsonrpc: '2.0',
            id: 0,
            error: { code: 2, message: `unable to add ethereum chain` },
        };
    }
    async _wallet_switchEthereumChain(params) {
        const request = params[0];
        await this.switchEthereumChain(parseInt(request.chainId, 16));
        return { jsonrpc: '2.0', id: 0, result: null };
    }
    async _wallet_watchAsset(params) {
        const request = (Array.isArray(params) ? params[0] : params);
        if (!request.type) {
            throw error_1.standardErrors.rpc.invalidParams('Type is required');
        }
        if ((request === null || request === void 0 ? void 0 : request.type) !== 'ERC20') {
            throw error_1.standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
        }
        if (!(request === null || request === void 0 ? void 0 : request.options)) {
            throw error_1.standardErrors.rpc.invalidParams('Options are required');
        }
        if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
            throw error_1.standardErrors.rpc.invalidParams('Address is required');
        }
        const chainId = this.getChainId();
        const { address, symbol, image, decimals } = request.options;
        const res = await this.watchAsset(request.type, address, symbol, decimals, image, chainId);
        return { jsonrpc: '2.0', id: 0, result: res };
    }
    initializeRelay() {
        if (!this._relay) {
            const relay = new WalletLinkRelay_1.WalletLinkRelay({
                linkAPIUrl: constants_2.WALLETLINK_URL,
                storage: this._storage,
            });
            relay.setAppInfo(this._appName, this._appLogoUrl);
            relay.attachUI();
            relay.setAccountsCallback((accounts, isDisconnect) => this._setAddresses(accounts, isDisconnect));
            relay.setChainCallback((chainId, jsonRpcUrl) => {
                this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10));
            });
            this._relay = relay;
        }
        return this._relay;
    }
}
exports.WalletLinkSigner = WalletLinkSigner;


/***/ }),

/***/ 252957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RelayEventManager = void 0;
const util_1 = __webpack_require__(11376);
class RelayEventManager {
    constructor() {
        this._nextRequestId = 0;
        this.callbacks = new Map();
    }
    makeRequestId() {
        // max nextId == max int32 for compatibility with mobile
        this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
        const id = this._nextRequestId;
        const idStr = (0, util_1.prepend0x)(id.toString(16));
        // unlikely that this will ever be an issue, but just to be safe
        const callback = this.callbacks.get(idStr);
        if (callback) {
            this.callbacks.delete(idStr);
        }
        return id;
    }
}
exports.RelayEventManager = RelayEventManager;


/***/ }),

/***/ 512849:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkRelay = void 0;
const WalletLinkConnection_1 = __webpack_require__(126355);
const constants_1 = __webpack_require__(131022);
const RelayEventManager_1 = __webpack_require__(252957);
const WalletLinkSession_1 = __webpack_require__(62999);
const Web3Response_1 = __webpack_require__(204362);
const util_1 = __webpack_require__(484999);
const WalletLinkRelayUI_1 = __webpack_require__(592634);
const WLMobileRelayUI_1 = __webpack_require__(36270);
const error_1 = __webpack_require__(627884);
const util_2 = __webpack_require__(11376);
const ScopedLocalStorage_1 = __webpack_require__(508572);
class WalletLinkRelay {
    constructor(options) {
        this.accountsCallback = null;
        this.chainCallbackParams = { chainId: '', jsonRpcUrl: '' }; // to implement distinctUntilChanged
        this.chainCallback = null;
        this.dappDefaultChain = 1;
        this.isMobileWeb = (0, util_1.isMobileWeb)();
        this.appName = '';
        this.appLogoUrl = null;
        this.linkedUpdated = (linked) => {
            this.isLinked = linked;
            const cachedAddresses = this.storage.getItem(constants_1.LOCAL_STORAGE_ADDRESSES_KEY);
            if (linked) {
                // Only set linked session variable one way
                this._session.linked = linked;
            }
            this.isUnlinkedErrorState = false;
            if (cachedAddresses) {
                const addresses = cachedAddresses.split(' ');
                const wasConnectedViaStandalone = this.storage.getItem('IsStandaloneSigning') === 'true';
                if (addresses[0] !== '' && !linked && this._session.linked && !wasConnectedViaStandalone) {
                    this.isUnlinkedErrorState = true;
                }
            }
        };
        this.metadataUpdated = (key, value) => {
            this.storage.setItem(key, value);
        };
        this.chainUpdated = (chainId, jsonRpcUrl) => {
            if (this.chainCallbackParams.chainId === chainId &&
                this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
                return;
            }
            this.chainCallbackParams = {
                chainId,
                jsonRpcUrl,
            };
            if (this.chainCallback) {
                this.chainCallback(chainId, jsonRpcUrl);
            }
        };
        this.accountUpdated = (selectedAddress) => {
            if (this.accountsCallback) {
                this.accountsCallback([selectedAddress]);
            }
            if (WalletLinkRelay.accountRequestCallbackIds.size > 0) {
                // We get the ethereum address from the metadata.  If for whatever
                // reason we don't get a response via an explicit web3 message
                // we can still fulfill the eip1102 request.
                Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id) => {
                    const message = {
                        type: 'WEB3_RESPONSE',
                        id,
                        response: {
                            method: 'requestEthereumAccounts',
                            result: [selectedAddress],
                        },
                    };
                    this.invokeCallback(Object.assign(Object.assign({}, message), { id }));
                });
                WalletLinkRelay.accountRequestCallbackIds.clear();
            }
        };
        this.resetAndReload = this.resetAndReload.bind(this);
        this.linkAPIUrl = options.linkAPIUrl;
        this.storage = options.storage;
        const { session, ui, connection } = this.subscribe();
        this._session = session;
        this.connection = connection;
        this.relayEventManager = new RelayEventManager_1.RelayEventManager();
        this.ui = ui;
    }
    subscribe() {
        const session = WalletLinkSession_1.WalletLinkSession.load(this.storage) || new WalletLinkSession_1.WalletLinkSession(this.storage).save();
        const { linkAPIUrl } = this;
        const connection = new WalletLinkConnection_1.WalletLinkConnection({
            session,
            linkAPIUrl,
            listener: this,
        });
        const ui = this.isMobileWeb ? new WLMobileRelayUI_1.WLMobileRelayUI() : new WalletLinkRelayUI_1.WalletLinkRelayUI();
        connection.connect();
        return { session, ui, connection };
    }
    attachUI() {
        this.ui.attach();
    }
    resetAndReload() {
        Promise.race([
            this.connection.setSessionMetadata('__destroyed', '1'),
            new Promise((resolve) => setTimeout(() => resolve(null), 1000)),
        ])
            .then(() => {
            this.connection.destroy();
            /**
             * Only clear storage if the session id we have in memory matches the one on disk
             * Otherwise, in the case where we have 2 tabs, another tab might have cleared
             * storage already.  In that case if we clear storage again, the user will be in
             * a state where the first tab allows the user to connect but the session that
             * was used isn't persisted.  This leaves the user in a state where they aren't
             * connected to the mobile app.
             */
            const storedSession = WalletLinkSession_1.WalletLinkSession.load(this.storage);
            if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
                ScopedLocalStorage_1.ScopedLocalStorage.clearAll();
            }
            document.location.reload();
        })
            .catch((_) => { });
    }
    setAppInfo(appName, appLogoUrl) {
        this.appName = appName;
        this.appLogoUrl = appLogoUrl;
    }
    getStorageItem(key) {
        return this.storage.getItem(key);
    }
    setStorageItem(key, value) {
        this.storage.setItem(key, value);
    }
    signEthereumMessage(message, address, addPrefix, typedDataJson) {
        return this.sendRequest({
            method: 'signEthereumMessage',
            params: {
                message: (0, util_2.hexStringFromBuffer)(message, true),
                address,
                addPrefix,
                typedDataJson: typedDataJson || null,
            },
        });
    }
    ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        return this.sendRequest({
            method: 'ethereumAddressFromSignedMessage',
            params: {
                message: (0, util_2.hexStringFromBuffer)(message, true),
                signature: (0, util_2.hexStringFromBuffer)(signature, true),
                addPrefix,
            },
        });
    }
    signEthereumTransaction(params) {
        return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: (0, util_2.bigIntStringFromBigInt)(params.weiValue),
                data: (0, util_2.hexStringFromBuffer)(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
                maxFeePerGas: params.gasPriceInWei ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
                maxPriorityFeePerGas: params.gasPriceInWei
                    ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei)
                    : null,
                gasLimit: params.gasLimit ? (0, util_2.bigIntStringFromBigInt)(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: false,
            },
        });
    }
    signAndSubmitEthereumTransaction(params) {
        return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: (0, util_2.bigIntStringFromBigInt)(params.weiValue),
                data: (0, util_2.hexStringFromBuffer)(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
                maxFeePerGas: params.maxFeePerGas ? (0, util_2.bigIntStringFromBigInt)(params.maxFeePerGas) : null,
                maxPriorityFeePerGas: params.maxPriorityFeePerGas
                    ? (0, util_2.bigIntStringFromBigInt)(params.maxPriorityFeePerGas)
                    : null,
                gasLimit: params.gasLimit ? (0, util_2.bigIntStringFromBigInt)(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: true,
            },
        });
    }
    submitEthereumTransaction(signedTransaction, chainId) {
        return this.sendRequest({
            method: 'submitEthereumTransaction',
            params: {
                signedTransaction: (0, util_2.hexStringFromBuffer)(signedTransaction, true),
                chainId,
            },
        });
    }
    scanQRCode(regExp) {
        return this.sendRequest({
            method: 'scanQRCode',
            params: {
                regExp,
            },
        });
    }
    getWalletLinkSession() {
        return this._session;
    }
    genericRequest(data, action) {
        return this.sendRequest({
            method: 'generic',
            params: {
                action,
                data,
            },
        });
    }
    sendGenericMessage(request) {
        return this.sendRequest(request);
    }
    sendRequest(request) {
        let hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        return new Promise((resolve, reject) => {
            {
                hideSnackbarItem = this.ui.showConnecting({
                    isUnlinkedErrorState: this.isUnlinkedErrorState,
                    onCancel: cancel,
                    onResetConnection: this.resetAndReload, // eslint-disable-line @typescript-eslint/unbound-method
                });
            }
            this.relayEventManager.callbacks.set(id, (response) => {
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if ((0, Web3Response_1.isErrorResponse)(response)) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            this.publishWeb3RequestEvent(id, request);
        });
    }
    setAccountsCallback(accountsCallback) {
        this.accountsCallback = accountsCallback;
    }
    setChainCallback(chainCallback) {
        this.chainCallback = chainCallback;
    }
    setDappDefaultChainCallback(chainId) {
        this.dappDefaultChain = chainId;
    }
    publishWeb3RequestEvent(id, request) {
        const message = { type: 'WEB3_REQUEST', id, request };
        this.publishEvent('Web3Request', message, true)
            .then((_) => { })
            .catch((err) => {
            this.handleWeb3ResponseMessage({
                type: 'WEB3_RESPONSE',
                id: message.id,
                response: {
                    method: request.method,
                    errorMessage: err.message,
                },
            });
        });
        if (this.isMobileWeb) {
            this.openCoinbaseWalletDeeplink(request.method);
        }
    }
    // copied from MobileRelay
    openCoinbaseWalletDeeplink(method) {
        if (!(this.ui instanceof WLMobileRelayUI_1.WLMobileRelayUI))
            return;
        // For mobile relay requests, open the Coinbase Wallet app
        switch (method) {
            case 'requestEthereumAccounts': // requestEthereumAccounts is handled via popup
            case 'switchEthereumChain': // switchEthereumChain doesn't need to open the app
                return;
            default:
                window.addEventListener('blur', () => {
                    window.addEventListener('focus', () => {
                        this.connection.checkUnseenEvents();
                    }, { once: true });
                }, { once: true });
                this.ui.openCoinbaseWalletDeeplink();
                break;
        }
    }
    publishWeb3RequestCanceledEvent(id) {
        const message = {
            type: 'WEB3_REQUEST_CANCELED',
            id,
        };
        this.publishEvent('Web3RequestCanceled', message, false).then();
    }
    publishEvent(event, message, callWebhook) {
        return this.connection.publishEvent(event, message, callWebhook);
    }
    handleWeb3ResponseMessage(message) {
        const { response } = message;
        if (response.method === 'requestEthereumAccounts') {
            WalletLinkRelay.accountRequestCallbackIds.forEach((id) => this.invokeCallback(Object.assign(Object.assign({}, message), { id })));
            WalletLinkRelay.accountRequestCallbackIds.clear();
            return;
        }
        this.invokeCallback(message);
    }
    handleErrorResponse(id, method, error) {
        var _a;
        const errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Unspecified error message.';
        this.handleWeb3ResponseMessage({
            type: 'WEB3_RESPONSE',
            id,
            response: {
                method,
                errorMessage,
            },
        });
    }
    invokeCallback(message) {
        const callback = this.relayEventManager.callbacks.get(message.id);
        if (callback) {
            callback(message.response);
            this.relayEventManager.callbacks.delete(message.id);
        }
    }
    requestEthereumAccounts() {
        const request = {
            method: 'requestEthereumAccounts',
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null,
            },
        };
        const hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        return new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, (response) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if ((0, Web3Response_1.isErrorResponse)(response)) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            WalletLinkRelay.accountRequestCallbackIds.add(id);
            this.publishWeb3RequestEvent(id, request);
        });
    }
    watchAsset(type, address, symbol, decimals, image, chainId) {
        const request = {
            method: 'watchAsset',
            params: {
                type,
                options: {
                    address,
                    symbol,
                    decimals,
                    image,
                },
                chainId,
            },
        };
        let hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        {
            hideSnackbarItem = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: cancel,
                onResetConnection: this.resetAndReload, // eslint-disable-line @typescript-eslint/unbound-method
            });
        }
        return new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, (response) => {
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if ((0, Web3Response_1.isErrorResponse)(response)) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            this.publishWeb3RequestEvent(id, request);
        });
    }
    addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
        const request = {
            method: 'addEthereumChain',
            params: {
                chainId,
                rpcUrls,
                blockExplorerUrls,
                chainName,
                iconUrls,
                nativeCurrency,
            },
        };
        let hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        const cancel = (error) => {
            this.publishWeb3RequestCanceledEvent(id);
            this.handleErrorResponse(id, request.method, error);
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        {
            hideSnackbarItem = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: cancel,
                onResetConnection: this.resetAndReload, // eslint-disable-line @typescript-eslint/unbound-method
            });
        }
        return new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, (response) => {
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if ((0, Web3Response_1.isErrorResponse)(response)) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            this.publishWeb3RequestEvent(id, request);
        });
    }
    switchEthereumChain(chainId, address) {
        const request = {
            method: 'switchEthereumChain',
            params: Object.assign({ chainId }, { address }),
        };
        const id = (0, util_2.randomBytesHex)(8);
        return new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, (response) => {
                if ((0, Web3Response_1.isErrorResponse)(response) && response.errorCode) {
                    return reject(error_1.standardErrors.provider.custom({
                        code: response.errorCode,
                        message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`,
                    }));
                }
                else if ((0, Web3Response_1.isErrorResponse)(response)) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            this.publishWeb3RequestEvent(id, request);
        });
    }
}
exports.WalletLinkRelay = WalletLinkRelay;
WalletLinkRelay.accountRequestCallbackIds = new Set();


/***/ }),

/***/ 276696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkCipher = void 0;
const util_1 = __webpack_require__(11376);
class WalletLinkCipher {
    // @param secret hex representation of 32-byte secret
    constructor(secret) {
        this.secret = secret;
    }
    /**
     *
     * @param plainText string to be encrypted
     * returns hex string representation of bytes in the order: initialization vector (iv),
     * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
     * encrypted plainText.
     */
    async encrypt(plainText) {
        const secret = this.secret;
        if (secret.length !== 64)
            throw Error(`secret must be 256 bits`);
        const ivBytes = crypto.getRandomValues(new Uint8Array(12));
        const secretKey = await crypto.subtle.importKey('raw', (0, util_1.hexStringToUint8Array)(secret), { name: 'aes-gcm' }, false, ['encrypt', 'decrypt']);
        const enc = new TextEncoder();
        // Will return encrypted plainText with auth tag (ie MAC or checksum) appended at the end
        const encryptedResult = await window.crypto.subtle.encrypt({
            name: 'AES-GCM',
            iv: ivBytes,
        }, secretKey, enc.encode(plainText));
        const tagLength = 16;
        const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
        const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
        const authTagBytes = new Uint8Array(authTag);
        const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
        const concatted = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
        return (0, util_1.uint8ArrayToHex)(concatted);
    }
    /**
     *
     * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
     * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
     */
    async decrypt(cipherText) {
        const secret = this.secret;
        if (secret.length !== 64)
            throw Error(`secret must be 256 bits`);
        return new Promise((resolve, reject) => {
            void (async function () {
                const secretKey = await crypto.subtle.importKey('raw', (0, util_1.hexStringToUint8Array)(secret), { name: 'aes-gcm' }, false, ['encrypt', 'decrypt']);
                const encrypted = (0, util_1.hexStringToUint8Array)(cipherText);
                const ivBytes = encrypted.slice(0, 12);
                const authTagBytes = encrypted.slice(12, 28);
                const encryptedPlaintextBytes = encrypted.slice(28);
                const concattedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
                const algo = {
                    name: 'AES-GCM',
                    iv: new Uint8Array(ivBytes),
                };
                try {
                    const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
                    const decoder = new TextDecoder();
                    resolve(decoder.decode(decrypted));
                }
                catch (err) {
                    reject(err);
                }
            })();
        });
    }
}
exports.WalletLinkCipher = WalletLinkCipher;


/***/ }),

/***/ 126355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkConnection = void 0;
const constants_1 = __webpack_require__(131022);
const WalletLinkCipher_1 = __webpack_require__(276696);
const WalletLinkHTTP_1 = __webpack_require__(900475);
const WalletLinkWebSocket_1 = __webpack_require__(779424);
const type_1 = __webpack_require__(940830);
const HEARTBEAT_INTERVAL = 10000;
const REQUEST_TIMEOUT = 60000;
/**
 * Coinbase Wallet Connection
 */
class WalletLinkConnection {
    /**
     * Constructor
     * @param session Session
     * @param linkAPIUrl Coinbase Wallet link server URL
     * @param listener WalletLinkConnectionUpdateListener
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor({ session, linkAPIUrl, listener, WebSocketClass = WebSocket, }) {
        this.destroyed = false;
        this.lastHeartbeatResponse = 0;
        this.nextReqId = (0, type_1.IntNumber)(1);
        /**
         * true if connected and authenticated, else false
         * runs listener when connected status changes
         */
        this._connected = false;
        /**
         * true if linked (a guest has joined before)
         * runs listener when linked status changes
         */
        this._linked = false;
        this.shouldFetchUnseenEventsOnConnect = false;
        this.requestResolutions = new Map();
        this.handleSessionMetadataUpdated = (metadata) => {
            if (!metadata)
                return;
            // Map of metadata key to handler function
            const handlers = new Map([
                ['__destroyed', this.handleDestroyed],
                ['EthereumAddress', this.handleAccountUpdated],
                ['WalletUsername', this.handleWalletUsernameUpdated],
                ['AppVersion', this.handleAppVersionUpdated],
                [
                    'ChainId',
                    (v) => metadata.JsonRpcUrl && this.handleChainUpdated(v, metadata.JsonRpcUrl),
                ],
            ]);
            // call handler for each metadata key if value is defined
            handlers.forEach((handler, key) => {
                const value = metadata[key];
                if (value === undefined)
                    return;
                handler(value);
            });
        };
        this.handleDestroyed = (__destroyed) => {
            var _a;
            if (__destroyed !== '1')
                return;
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
        };
        this.handleAccountUpdated = async (encryptedEthereumAddress) => {
            var _a;
            {
                const address = await this.cipher.decrypt(encryptedEthereumAddress);
                (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
            }
        };
        this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
            var _a;
            {
                const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
                (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
            }
        };
        this.handleWalletUsernameUpdated = async (walletUsername) => {
            this.handleMetadataUpdated(constants_1.WALLET_USER_NAME_KEY, walletUsername);
        };
        this.handleAppVersionUpdated = async (appVersion) => {
            this.handleMetadataUpdated(constants_1.APP_VERSION_KEY, appVersion);
        };
        this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
            var _a;
            {
                const chainId = await this.cipher.decrypt(encryptedChainId);
                const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
                (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
            }
        };
        this.session = session;
        this.cipher = new WalletLinkCipher_1.WalletLinkCipher(session.secret);
        this.listener = listener;
        const ws = new WalletLinkWebSocket_1.WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocketClass);
        ws.setConnectionStateListener(async (state) => {
            // attempt to reconnect every 5 seconds when disconnected
            let connected = false;
            switch (state) {
                case WalletLinkWebSocket_1.ConnectionState.DISCONNECTED:
                    // if DISCONNECTED and not destroyed
                    if (!this.destroyed) {
                        const connect = async () => {
                            // wait 5 seconds
                            await new Promise((resolve) => setTimeout(resolve, 5000));
                            // check whether it's destroyed again
                            if (!this.destroyed) {
                                // reconnect
                                ws.connect().catch(() => {
                                    connect();
                                });
                            }
                        };
                        connect();
                    }
                    break;
                case WalletLinkWebSocket_1.ConnectionState.CONNECTED:
                    // perform authentication upon connection
                    try {
                        // if CONNECTED, authenticate, and then check link status
                        await this.authenticate();
                        this.sendIsLinked();
                        this.sendGetSessionConfig();
                        connected = true;
                    }
                    catch (_a) {
                        /* empty */
                    }
                    // send heartbeat every n seconds while connected
                    // if CONNECTED, start the heartbeat timer
                    // first timer event updates lastHeartbeat timestamp
                    // subsequent calls send heartbeat message
                    this.updateLastHeartbeat();
                    setInterval(() => {
                        this.heartbeat();
                    }, HEARTBEAT_INTERVAL);
                    // check for unseen events
                    if (this.shouldFetchUnseenEventsOnConnect) {
                        this.fetchUnseenEventsAPI();
                    }
                    break;
                case WalletLinkWebSocket_1.ConnectionState.CONNECTING:
                    break;
            }
            // distinctUntilChanged
            if (this.connected !== connected) {
                this.connected = connected;
            }
        });
        ws.setIncomingDataListener((m) => {
            var _a;
            switch (m.type) {
                // handle server's heartbeat responses
                case 'Heartbeat':
                    this.updateLastHeartbeat();
                    return;
                // handle link status updates
                case 'IsLinkedOK':
                case 'Linked': {
                    const linked = m.type === 'IsLinkedOK' ? m.linked : undefined;
                    this.linked = linked || m.onlineGuests > 0;
                    break;
                }
                // handle session config updates
                case 'GetSessionConfigOK':
                case 'SessionConfigUpdated': {
                    this.handleSessionMetadataUpdated(m.metadata);
                    break;
                }
                case 'Event': {
                    this.handleIncomingEvent(m);
                    break;
                }
            }
            // resolve request promises
            if (m.id !== undefined) {
                (_a = this.requestResolutions.get(m.id)) === null || _a === void 0 ? void 0 : _a(m);
            }
        });
        this.ws = ws;
        this.http = new WalletLinkHTTP_1.WalletLinkHTTP(linkAPIUrl, session.id, session.key);
    }
    /**
     * Make a connection to the server
     */
    connect() {
        if (this.destroyed) {
            throw new Error('instance is destroyed');
        }
        this.ws.connect();
    }
    /**
     * Terminate connection, and mark as destroyed. To reconnect, create a new
     * instance of WalletSDKConnection
     */
    destroy() {
        this.destroyed = true;
        this.ws.disconnect();
        this.listener = undefined;
    }
    get isDestroyed() {
        return this.destroyed;
    }
    get connected() {
        return this._connected;
    }
    set connected(connected) {
        var _a;
        this._connected = connected;
        if (connected)
            (_a = this.onceConnected) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    setOnceConnected(callback) {
        return new Promise((resolve) => {
            if (this.connected) {
                callback().then(resolve);
            }
            else {
                this.onceConnected = () => {
                    callback().then(resolve);
                    this.onceConnected = undefined;
                };
            }
        });
    }
    get linked() {
        return this._linked;
    }
    set linked(linked) {
        var _a, _b;
        this._linked = linked;
        if (linked)
            (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
    }
    setOnceLinked(callback) {
        return new Promise((resolve) => {
            if (this.linked) {
                callback().then(resolve);
            }
            else {
                this.onceLinked = () => {
                    callback().then(resolve);
                    this.onceLinked = undefined;
                };
            }
        });
    }
    async handleIncomingEvent(m) {
        var _a;
        if (m.type !== 'Event' || m.event !== 'Web3Response') {
            return;
        }
        {
            const decryptedData = await this.cipher.decrypt(m.data);
            const message = JSON.parse(decryptedData);
            if (message.type !== 'WEB3_RESPONSE')
                return;
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(message);
        }
    }
    async checkUnseenEvents() {
        if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = true;
            return;
        }
        await new Promise((resolve) => setTimeout(resolve, 250));
        try {
            await this.fetchUnseenEventsAPI();
        }
        catch (e) {
            console.error('Unable to check for unseen events', e);
        }
    }
    async fetchUnseenEventsAPI() {
        this.shouldFetchUnseenEventsOnConnect = false;
        const responseEvents = await this.http.fetchUnseenEvents();
        responseEvents.forEach((e) => this.handleIncomingEvent(e));
    }
    /**
     * Set session metadata in SessionConfig object
     * @param key
     * @param value
     * @returns a Promise that completes when successful
     */
    async setSessionMetadata(key, value) {
        const message = {
            type: 'SetSessionConfig',
            id: (0, type_1.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            metadata: { [key]: value },
        };
        return this.setOnceConnected(async () => {
            const res = await this.makeRequest(message);
            if (res.type === 'Fail') {
                throw new Error(res.error || 'failed to set session metadata');
            }
        });
    }
    /**
     * Publish an event and emit event ID when successful
     * @param event event name
     * @param unencryptedData unencrypted event data
     * @param callWebhook whether the webhook should be invoked
     * @returns a Promise that emits event ID when successful
     */
    async publishEvent(event, unencryptedData, callWebhook = false) {
        const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, relaySource: 'coinbaseWalletExtension' in window && window.coinbaseWalletExtension
                ? 'injected_sdk'
                : 'sdk' })));
        const message = {
            type: 'PublishEvent',
            id: (0, type_1.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            event,
            data,
            callWebhook,
        };
        return this.setOnceLinked(async () => {
            const res = await this.makeRequest(message);
            if (res.type === 'Fail') {
                throw new Error(res.error || 'failed to publish event');
            }
            return res.eventId;
        });
    }
    sendData(message) {
        this.ws.sendData(JSON.stringify(message));
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now();
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
            this.ws.disconnect();
            return;
        }
        try {
            this.ws.sendData('h');
        }
        catch (_a) {
            // noop
        }
    }
    async makeRequest(message, timeout = REQUEST_TIMEOUT) {
        const reqId = message.id;
        this.sendData(message);
        // await server message with corresponding id
        let timeoutId;
        return Promise.race([
            new Promise((_, reject) => {
                timeoutId = window.setTimeout(() => {
                    reject(new Error(`request ${reqId} timed out`));
                }, timeout);
            }),
            new Promise((resolve) => {
                this.requestResolutions.set(reqId, (m) => {
                    clearTimeout(timeoutId); // clear the timeout
                    resolve(m);
                    this.requestResolutions.delete(reqId);
                });
            }),
        ]);
    }
    async authenticate() {
        const m = {
            type: 'HostSession',
            id: (0, type_1.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
            sessionKey: this.session.key,
        };
        const res = await this.makeRequest(m);
        if (res.type === 'Fail') {
            throw new Error(res.error || 'failed to authenticate');
        }
    }
    sendIsLinked() {
        const m = {
            type: 'IsLinked',
            id: (0, type_1.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
        };
        this.sendData(m);
    }
    sendGetSessionConfig() {
        const m = {
            type: 'GetSessionConfig',
            id: (0, type_1.IntNumber)(this.nextReqId++),
            sessionId: this.session.id,
        };
        this.sendData(m);
    }
}
exports.WalletLinkConnection = WalletLinkConnection;


/***/ }),

/***/ 900475:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkHTTP = void 0;
class WalletLinkHTTP {
    constructor(linkAPIUrl, sessionId, sessionKey) {
        this.linkAPIUrl = linkAPIUrl;
        this.sessionId = sessionId;
        const credentials = `${sessionId}:${sessionKey}`;
        this.auth = `Basic ${btoa(credentials)}`;
    }
    // mark unseen events as seen
    async markUnseenEventsAsSeen(events) {
        return Promise.all(events.map((e) => fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
            method: 'POST',
            headers: {
                Authorization: this.auth,
            },
        }))).catch((error) => console.error('Unabled to mark event as failed:', error));
    }
    async fetchUnseenEvents() {
        var _a;
        const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: {
                Authorization: this.auth,
            },
        });
        if (response.ok) {
            const { events, error } = (await response.json());
            if (error) {
                throw new Error(`Check unseen events failed: ${error}`);
            }
            const responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter((e) => e.event === 'Web3Response').map((e) => ({
                type: 'Event',
                sessionId: this.sessionId,
                eventId: e.id,
                event: e.event,
                data: e.data,
            }))) !== null && _a !== void 0 ? _a : [];
            this.markUnseenEventsAsSeen(responseEvents);
            return responseEvents;
        }
        throw new Error(`Check unseen events failed: ${response.status}`);
    }
}
exports.WalletLinkHTTP = WalletLinkHTTP;


/***/ }),

/***/ 779424:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkWebSocket = exports.ConnectionState = void 0;
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["DISCONNECTED"] = 0] = "DISCONNECTED";
    ConnectionState[ConnectionState["CONNECTING"] = 1] = "CONNECTING";
    ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState || (exports.ConnectionState = ConnectionState = {}));
class WalletLinkWebSocket {
    setConnectionStateListener(listener) {
        this.connectionStateListener = listener;
    }
    setIncomingDataListener(listener) {
        this.incomingDataListener = listener;
    }
    /**
     * Constructor
     * @param url WebSocket server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor(url, WebSocketClass = WebSocket) {
        this.WebSocketClass = WebSocketClass;
        this.webSocket = null;
        this.pendingData = [];
        this.url = url.replace(/^http/, 'ws');
    }
    /**
     * Make a websocket connection
     * @returns a Promise that resolves when connected
     */
    async connect() {
        if (this.webSocket) {
            throw new Error('webSocket object is not null');
        }
        return new Promise((resolve, reject) => {
            var _a;
            let webSocket;
            try {
                this.webSocket = webSocket = new this.WebSocketClass(this.url);
            }
            catch (err) {
                reject(err);
                return;
            }
            (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTING);
            webSocket.onclose = (evt) => {
                var _a;
                this.clearWebSocket();
                reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
                (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
            };
            webSocket.onopen = (_) => {
                var _a;
                resolve();
                (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTED);
                if (this.pendingData.length > 0) {
                    const pending = [...this.pendingData];
                    pending.forEach((data) => this.sendData(data));
                    this.pendingData = [];
                }
            };
            webSocket.onmessage = (evt) => {
                var _a, _b;
                if (evt.data === 'h') {
                    (_a = this.incomingDataListener) === null || _a === void 0 ? void 0 : _a.call(this, {
                        type: 'Heartbeat',
                    });
                }
                else {
                    try {
                        const message = JSON.parse(evt.data);
                        (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
                    }
                    catch (_c) {
                        /* empty */
                    }
                }
            };
        });
    }
    /**
     * Disconnect from server
     */
    disconnect() {
        var _a;
        const { webSocket } = this;
        if (!webSocket) {
            return;
        }
        this.clearWebSocket();
        (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
        this.connectionStateListener = undefined;
        this.incomingDataListener = undefined;
        try {
            webSocket.close();
        }
        catch (_b) {
            // noop
        }
    }
    /**
     * Send data to server
     * @param data text to send
     */
    sendData(data) {
        const { webSocket } = this;
        if (!webSocket) {
            this.pendingData.push(data);
            this.connect();
            return;
        }
        webSocket.send(data);
    }
    clearWebSocket() {
        const { webSocket } = this;
        if (!webSocket) {
            return;
        }
        this.webSocket = null;
        webSocket.onclose = null;
        webSocket.onerror = null;
        webSocket.onmessage = null;
        webSocket.onopen = null;
    }
}
exports.WalletLinkWebSocket = WalletLinkWebSocket;


/***/ }),

/***/ 131022:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APP_VERSION_KEY = exports.LOCAL_STORAGE_ADDRESSES_KEY = exports.WALLET_USER_NAME_KEY = void 0;
exports.WALLET_USER_NAME_KEY = 'walletUsername';
exports.LOCAL_STORAGE_ADDRESSES_KEY = 'Addresses';
exports.APP_VERSION_KEY = 'AppVersion';


/***/ }),

/***/ 62999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkSession = void 0;
const sha_js_1 = __webpack_require__(662802);
const util_1 = __webpack_require__(11376);
const STORAGE_KEY_SESSION_ID = 'session:id';
const STORAGE_KEY_SESSION_SECRET = 'session:secret';
const STORAGE_KEY_SESSION_LINKED = 'session:linked';
class WalletLinkSession {
    constructor(storage, id, secret, linked) {
        this._storage = storage;
        this._id = id || (0, util_1.randomBytesHex)(16);
        this._secret = secret || (0, util_1.randomBytesHex)(32);
        this._key = new sha_js_1.sha256()
            .update(`${this._id}, ${this._secret} WalletLink`) // ensure old sessions stay connected
            .digest('hex');
        this._linked = !!linked;
    }
    static load(storage) {
        const id = storage.getItem(STORAGE_KEY_SESSION_ID);
        const linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
        const secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
        if (id && secret) {
            return new WalletLinkSession(storage, id, secret, linked === '1');
        }
        return null;
    }
    get id() {
        return this._id;
    }
    get secret() {
        return this._secret;
    }
    get key() {
        return this._key;
    }
    get linked() {
        return this._linked;
    }
    set linked(val) {
        this._linked = val;
        this.persistLinked();
    }
    save() {
        this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
        this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
        this.persistLinked();
        return this;
    }
    persistLinked() {
        this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? '1' : '0');
    }
}
exports.WalletLinkSession = WalletLinkSession;


/***/ }),

/***/ 204362:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isErrorResponse = void 0;
function isErrorResponse(response) {
    return response.errorMessage !== undefined;
}
exports.isErrorResponse = isErrorResponse;


/***/ }),

/***/ 36270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WLMobileRelayUI = void 0;
const RedirectDialog_1 = __webpack_require__(995002);
const util_1 = __webpack_require__(484999);
const constants_1 = __webpack_require__(311864);
class WLMobileRelayUI {
    constructor() {
        this.attached = false;
        this.redirectDialog = new RedirectDialog_1.RedirectDialog();
    }
    attach() {
        if (this.attached) {
            throw new Error('Coinbase Wallet SDK UI is already attached');
        }
        this.redirectDialog.attach();
        this.attached = true;
    }
    redirectToCoinbaseWallet(walletLinkUrl) {
        const url = new URL(constants_1.CBW_MOBILE_DEEPLINK_URL);
        url.searchParams.append('redirect_url', (0, util_1.getLocation)().href);
        if (walletLinkUrl) {
            url.searchParams.append('wl_url', walletLinkUrl);
        }
        const anchorTag = document.createElement('a');
        anchorTag.target = 'cbw-opener';
        anchorTag.href = url.href;
        anchorTag.rel = 'noreferrer noopener';
        anchorTag.click();
    }
    openCoinbaseWalletDeeplink(walletLinkUrl) {
        this.redirectDialog.present({
            title: 'Redirecting to Coinbase Wallet...',
            buttonText: 'Open',
            onButtonClick: () => {
                this.redirectToCoinbaseWallet(walletLinkUrl);
            },
        });
        setTimeout(() => {
            this.redirectToCoinbaseWallet(walletLinkUrl);
        }, 99);
    }
    showConnecting(_options) {
        // it uses the return callback to clear the dialog
        return () => {
            this.redirectDialog.clear();
        };
    }
}
exports.WLMobileRelayUI = WLMobileRelayUI;


/***/ }),

/***/ 592634:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletLinkRelayUI = void 0;
const cssReset_1 = __webpack_require__(357206);
const Snackbar_1 = __webpack_require__(713184);
class WalletLinkRelayUI {
    constructor() {
        this.attached = false;
        this.snackbar = new Snackbar_1.Snackbar();
    }
    attach() {
        if (this.attached) {
            throw new Error('Coinbase Wallet SDK UI is already attached');
        }
        const el = document.documentElement;
        const container = document.createElement('div');
        container.className = '-cbwsdk-css-reset';
        el.appendChild(container);
        this.snackbar.attach(container);
        this.attached = true;
        (0, cssReset_1.injectCssReset)();
    }
    showConnecting(options) {
        let snackbarProps;
        if (options.isUnlinkedErrorState) {
            snackbarProps = {
                autoExpand: true,
                message: 'Connection lost',
                menuItems: [
                    {
                        isRed: false,
                        info: 'Reset connection',
                        svgWidth: '10',
                        svgHeight: '11',
                        path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                        defaultFillRule: 'evenodd',
                        defaultClipRule: 'evenodd',
                        onClick: options.onResetConnection,
                    },
                ],
            };
        }
        else {
            snackbarProps = {
                message: 'Confirm on phone',
                menuItems: [
                    {
                        isRed: true,
                        info: 'Cancel transaction',
                        svgWidth: '11',
                        svgHeight: '11',
                        path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
                        defaultFillRule: 'inherit',
                        defaultClipRule: 'inherit',
                        onClick: options.onCancel,
                    },
                    {
                        isRed: false,
                        info: 'Reset connection',
                        svgWidth: '10',
                        svgHeight: '11',
                        path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
                        defaultFillRule: 'evenodd',
                        defaultClipRule: 'evenodd',
                        onClick: options.onResetConnection,
                    },
                ],
            };
        }
        return this.snackbar.presentItem(snackbarProps);
    }
}
exports.WalletLinkRelayUI = WalletLinkRelayUI;


/***/ }),

/***/ 917728:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();


/***/ }),

/***/ 995002:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedirectDialog = void 0;
const clsx_1 = __importDefault(__webpack_require__(320053));
const preact_1 = __webpack_require__(950172);
const cssReset_1 = __webpack_require__(357206);
const Snackbar_1 = __webpack_require__(713184);
const util_1 = __webpack_require__(484999);
const RedirectDialog_css_1 = __importDefault(__webpack_require__(917728));
class RedirectDialog {
    constructor() {
        this.root = null;
        this.darkMode = (0, util_1.isDarkMode)();
    }
    attach() {
        const el = document.documentElement;
        this.root = document.createElement('div');
        this.root.className = '-cbwsdk-css-reset';
        el.appendChild(this.root);
        (0, cssReset_1.injectCssReset)();
    }
    present(props) {
        this.render(props);
    }
    clear() {
        this.render(null);
    }
    render(props) {
        if (!this.root)
            return;
        (0, preact_1.render)(null, this.root);
        if (!props)
            return;
        (0, preact_1.render)((0, preact_1.h)(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
                this.clear();
            }, darkMode: this.darkMode })), this.root);
    }
}
exports.RedirectDialog = RedirectDialog;
const RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
    const theme = darkMode ? 'dark' : 'light';
    return ((0, preact_1.h)(Snackbar_1.SnackbarContainer, { darkMode: darkMode },
        (0, preact_1.h)("div", { class: "-cbwsdk-redirect-dialog" },
            (0, preact_1.h)("style", null, RedirectDialog_css_1.default),
            (0, preact_1.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
            (0, preact_1.h)("div", { class: (0, clsx_1.default)('-cbwsdk-redirect-dialog-box', theme) },
                (0, preact_1.h)("p", null, title),
                (0, preact_1.h)("button", { onClick: onButtonClick }, buttonText)))));
};


/***/ }),

/***/ 728730:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();


/***/ }),

/***/ 713184:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnackbarInstance = exports.SnackbarContainer = exports.Snackbar = void 0;
const clsx_1 = __importDefault(__webpack_require__(320053));
const preact_1 = __webpack_require__(950172);
const hooks_1 = __webpack_require__(45994);
const util_1 = __webpack_require__(484999);
const Snackbar_css_1 = __importDefault(__webpack_require__(728730));
const cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
class Snackbar {
    constructor() {
        this.items = new Map();
        this.nextItemKey = 0;
        this.root = null;
        this.darkMode = (0, util_1.isDarkMode)();
    }
    attach(el) {
        this.root = document.createElement('div');
        this.root.className = '-cbwsdk-snackbar-root';
        el.appendChild(this.root);
        this.render();
    }
    presentItem(itemProps) {
        const key = this.nextItemKey++;
        this.items.set(key, itemProps);
        this.render();
        return () => {
            this.items.delete(key);
            this.render();
        };
    }
    clear() {
        this.items.clear();
        this.render();
    }
    render() {
        if (!this.root) {
            return;
        }
        (0, preact_1.render)((0, preact_1.h)("div", null,
            (0, preact_1.h)(exports.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => ((0, preact_1.h)(exports.SnackbarInstance, Object.assign({}, itemProps, { key: key })))))), this.root);
    }
}
exports.Snackbar = Snackbar;
const SnackbarContainer = (props) => ((0, preact_1.h)("div", { class: (0, clsx_1.default)('-cbwsdk-snackbar-container') },
    (0, preact_1.h)("style", null, Snackbar_css_1.default),
    (0, preact_1.h)("div", { class: "-cbwsdk-snackbar" }, props.children)));
exports.SnackbarContainer = SnackbarContainer;
const SnackbarInstance = ({ autoExpand, message, menuItems, }) => {
    const [hidden, setHidden] = (0, hooks_1.useState)(true);
    const [expanded, setExpanded] = (0, hooks_1.useState)(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
    (0, hooks_1.useEffect)(() => {
        const timers = [
            window.setTimeout(() => {
                setHidden(false);
            }, 1),
            window.setTimeout(() => {
                setExpanded(true);
            }, 10000),
        ];
        return () => {
            timers.forEach(window.clearTimeout);
        };
    });
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return ((0, preact_1.h)("div", { class: (0, clsx_1.default)('-cbwsdk-snackbar-instance', hidden && '-cbwsdk-snackbar-instance-hidden', expanded && '-cbwsdk-snackbar-instance-expanded') },
        (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
            (0, preact_1.h)("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
            ' ',
            (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
            (0, preact_1.h)("div", { class: "-gear-container" },
                !expanded && ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    (0, preact_1.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" }))),
                (0, preact_1.h)("img", { src: gearIcon, class: "-gear-icon", title: "Expand" }))),
        menuItems && menuItems.length > 0 && ((0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i) => ((0, preact_1.h)("div", { class: (0, clsx_1.default)('-cbwsdk-snackbar-instance-menu-item', action.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'), onClick: action.onClick, key: i },
            (0, preact_1.h)("svg", { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                (0, preact_1.h)("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })),
            (0, preact_1.h)("span", { class: (0, clsx_1.default)('-cbwsdk-snackbar-instance-menu-item-info', action.isRed && '-cbwsdk-snackbar-instance-menu-item-info-is-red') }, action.info))))))));
};
exports.SnackbarInstance = SnackbarInstance;


/***/ }),

/***/ 770036:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();


/***/ }),

/***/ 357206:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectCssReset = void 0;
const cssReset_css_1 = __importDefault(__webpack_require__(770036));
function injectCssReset() {
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
    document.documentElement.appendChild(styleEl);
}
exports.injectCssReset = injectCssReset;


/***/ }),

/***/ 484999:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDarkMode = exports.isMobileWeb = exports.getLocation = exports.createQrUrl = void 0;
function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version, chainId) {
    const sessionIdKey = isParentConnection ? 'parent-id' : 'id';
    const query = new URLSearchParams({
        [sessionIdKey]: sessionId,
        secret: sessionSecret,
        server: serverUrl,
        v: version,
        chainId: chainId.toString(),
    }).toString();
    const qrUrl = `${serverUrl}/#/link?${query}`;
    return qrUrl;
}
exports.createQrUrl = createQrUrl;
function isInIFrame() {
    try {
        return window.frameElement !== null;
    }
    catch (e) {
        return false;
    }
}
function getLocation() {
    try {
        if (isInIFrame() && window.top) {
            return window.top.location;
        }
        return window.location;
    }
    catch (e) {
        return window.location;
    }
}
exports.getLocation = getLocation;
function isMobileWeb() {
    var _a;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
}
exports.isMobileWeb = isMobileWeb;
function isDarkMode() {
    var _a, _b;
    return (_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)').matches) !== null && _b !== void 0 ? _b : false;
}
exports.isDarkMode = isDarkMode;


/***/ }),

/***/ 508572:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScopedLocalStorage = void 0;
class ScopedLocalStorage {
    constructor(scope, module) {
        this.scope = scope;
        this.module = module;
    }
    setItem(key, value) {
        localStorage.setItem(this.scopedKey(key), value);
    }
    getItem(key) {
        return localStorage.getItem(this.scopedKey(key));
    }
    removeItem(key) {
        localStorage.removeItem(this.scopedKey(key));
    }
    clear() {
        const prefix = this.scopedKey('');
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (typeof key === 'string' && key.startsWith(prefix)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach((key) => localStorage.removeItem(key));
    }
    scopedKey(key) {
        return `-${this.scope}${this.module ? `:${this.module}` : ''}:${key}`;
    }
    static clearAll() {
        new ScopedLocalStorage('CBWSDK').clear();
        new ScopedLocalStorage('walletlink').clear();
    }
}
exports.ScopedLocalStorage = ScopedLocalStorage;


/***/ }),

/***/ 220251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decryptContent = exports.encryptContent = exports.importKeyFromHexString = exports.exportKeyToHexString = exports.decrypt = exports.encrypt = exports.deriveSharedSecret = exports.generateKeyPair = void 0;
const util_1 = __webpack_require__(11376);
async function generateKeyPair() {
    return crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: 'P-256',
    }, true, ['deriveKey']);
}
exports.generateKeyPair = generateKeyPair;
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
    return crypto.subtle.deriveKey({
        name: 'ECDH',
        public: peerPublicKey,
    }, ownPrivateKey, {
        name: 'AES-GCM',
        length: 256,
    }, false, ['encrypt', 'decrypt']);
}
exports.deriveSharedSecret = deriveSharedSecret;
async function encrypt(sharedSecret, plainText) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const cipherText = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv,
    }, sharedSecret, new TextEncoder().encode(plainText));
    return { iv, cipherText };
}
exports.encrypt = encrypt;
async function decrypt(sharedSecret, { iv, cipherText }) {
    const plainText = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv,
    }, sharedSecret, cipherText);
    return new TextDecoder().decode(plainText);
}
exports.decrypt = decrypt;
function getFormat(keyType) {
    switch (keyType) {
        case 'public':
            return 'spki';
        case 'private':
            return 'pkcs8';
    }
}
async function exportKeyToHexString(type, key) {
    const format = getFormat(type);
    const exported = await crypto.subtle.exportKey(format, key);
    return (0, util_1.uint8ArrayToHex)(new Uint8Array(exported));
}
exports.exportKeyToHexString = exportKeyToHexString;
async function importKeyFromHexString(type, hexString) {
    const format = getFormat(type);
    const arrayBuffer = (0, util_1.hexStringToUint8Array)(hexString).buffer;
    return await crypto.subtle.importKey(format, arrayBuffer, {
        name: 'ECDH',
        namedCurve: 'P-256',
    }, true, type === 'private' ? ['deriveKey'] : []);
}
exports.importKeyFromHexString = importKeyFromHexString;
async function encryptContent(content, sharedSecret) {
    const serialized = JSON.stringify(content, (_, value) => {
        if (!(value instanceof Error))
            return value;
        const error = value;
        return Object.assign(Object.assign({}, (error.code ? { code: error.code } : {})), { message: error.message });
    });
    return encrypt(sharedSecret, serialized);
}
exports.encryptContent = encryptContent;
async function decryptContent(encryptedData, sharedSecret) {
    return JSON.parse(await decrypt(sharedSecret, encryptedData));
}
exports.decryptContent = decryptContent;


/***/ }),

/***/ 805305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkErrorForInvalidRequestArgs = exports.getCoinbaseInjectedProvider = exports.getCoinbaseInjectedSigner = exports.fetchRPCRequest = void 0;
const version_1 = __webpack_require__(471797);
const error_1 = __webpack_require__(627884);
async function fetchRPCRequest(request, chain) {
    if (!chain.rpcUrl)
        throw error_1.standardErrors.rpc.internal('No RPC URL set for chain');
    const requestBody = Object.assign(Object.assign({}, request), { jsonrpc: '2.0', id: crypto.randomUUID() });
    const res = await window.fetch(chain.rpcUrl, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json', 'X-Cbw-Sdk-Version': version_1.LIB_VERSION },
    });
    const response = await res.json();
    return response.result;
}
exports.fetchRPCRequest = fetchRPCRequest;
function getCoinbaseInjectedSigner() {
    const window = globalThis;
    return window.coinbaseWalletSigner;
}
exports.getCoinbaseInjectedSigner = getCoinbaseInjectedSigner;
function getCoinbaseInjectedProvider({ metadata, preference, }) {
    var _a, _b, _c;
    const window = globalThis;
    if (preference.options !== 'smartWalletOnly') {
        const signer = getCoinbaseInjectedSigner();
        if (signer)
            return undefined; // use signer instead
        const extension = window.coinbaseWalletExtension;
        if (extension) {
            const { appName, appLogoUrl, appChainIds } = metadata;
            (_a = extension.setAppInfo) === null || _a === void 0 ? void 0 : _a.call(extension, appName, appLogoUrl, appChainIds);
            return extension;
        }
    }
    const ethereum = (_b = window.ethereum) !== null && _b !== void 0 ? _b : (_c = window.top) === null || _c === void 0 ? void 0 : _c.ethereum;
    if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
        return ethereum;
    }
    return undefined;
}
exports.getCoinbaseInjectedProvider = getCoinbaseInjectedProvider;
/**
 * Validates the arguments for an invalid request and returns an error if any validation fails.
 * Valid request args are defined here: https://eips.ethereum.org/EIPS/eip-1193#request
 * @param args The request arguments to validate.
 * @returns An error object if the arguments are invalid, otherwise undefined.
 */
function checkErrorForInvalidRequestArgs(args) {
    if (!args || typeof args !== 'object' || Array.isArray(args)) {
        return error_1.standardErrors.rpc.invalidParams({
            message: 'Expected a single, non-array, object argument.',
            data: args,
        });
    }
    const { method, params } = args;
    if (typeof method !== 'string' || method.length === 0) {
        return error_1.standardErrors.rpc.invalidParams({
            message: "'args.method' must be a non-empty string.",
            data: args,
        });
    }
    if (params !== undefined &&
        !Array.isArray(params) &&
        (typeof params !== 'object' || params === null)) {
        return error_1.standardErrors.rpc.invalidParams({
            message: "'args.params' must be an object or array if provided.",
            data: args,
        });
    }
    return undefined;
}
exports.checkErrorForInvalidRequestArgs = checkErrorForInvalidRequestArgs;


/***/ }),

/***/ 212872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Extracted from https://github.com/ethereumjs/ethereumjs-abi and stripped out irrelevant code
// Original code licensed under the MIT License - Copyright (c) 2015 Alex Beregszaszi

/* eslint-disable */
//prettier-ignore
const util = __webpack_require__(370640)

// Convert from short to canonical names
// FIXME: optimise or make this nicer?
function elementaryName (name) {
  if (name.startsWith('int[')) {
    return 'int256' + name.slice(3)
  } else if (name === 'int') {
    return 'int256'
  } else if (name.startsWith('uint[')) {
    return 'uint256' + name.slice(4)
  } else if (name === 'uint') {
    return 'uint256'
  } else if (name.startsWith('fixed[')) {
    return 'fixed128x128' + name.slice(5)
  } else if (name === 'fixed') {
    return 'fixed128x128'
  } else if (name.startsWith('ufixed[')) {
    return 'ufixed128x128' + name.slice(6)
  } else if (name === 'ufixed') {
    return 'ufixed128x128'
  }
  return name
}

// Parse N from type<N>
function parseTypeN (type) {
  return parseInt(/^\D+(\d+)$/.exec(type)[1], 10)
}

// Parse N,M from type<N>x<M>
function parseTypeNxM (type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type)
  return [ parseInt(tmp[1], 10), parseInt(tmp[2], 10) ]
}

// Parse N in type[<N>] where "type" can itself be an array type.
function parseTypeArray (type) {
  var tmp = type.match(/(.*)\[(.*?)\]$/)
  if (tmp) {
    return tmp[2] === '' ? 'dynamic' : parseInt(tmp[2], 10)
  }
  return null
}

function parseNumber (arg) {
  var type = typeof arg
  if (type === 'string' || type === 'number') {
    return BigInt(arg)
  } else if (type === 'bigint') {
    return arg
  } else {
    throw new Error('Argument is not a number')
  }
}

// Encodes a single item (can be dynamic array)
// @returns: Buffer
function encodeSingle (type, arg) {
  var size, num, ret, i

  if (type === 'address') {
    return encodeSingle('uint160', parseNumber(arg))
  } else if (type === 'bool') {
    return encodeSingle('uint8', arg ? 1 : 0)
  } else if (type === 'string') {
    return encodeSingle('bytes', new Buffer(arg, 'utf8'))
  } else if (isArray(type)) {
    // this part handles fixed-length ([2]) and variable length ([]) arrays
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    if (typeof arg.length === 'undefined') {
      throw new Error('Not an array?')
    }
    size = parseTypeArray(type)
    if (size !== 'dynamic' && size !== 0 && arg.length > size) {
      throw new Error('Elements exceed array size: ' + size)
    }
    ret = []
    type = type.slice(0, type.lastIndexOf('['))
    if (typeof arg === 'string') {
      arg = JSON.parse(arg)
    }
    for (i in arg) {
      ret.push(encodeSingle(type, arg[i]))
    }
    if (size === 'dynamic') {
      var length = encodeSingle('uint256', arg.length)
      ret.unshift(length)
    }
    return Buffer.concat(ret)
  } else if (type === 'bytes') {
    arg = new Buffer(arg)

    ret = Buffer.concat([ encodeSingle('uint256', arg.length), arg ])

    if ((arg.length % 32) !== 0) {
      ret = Buffer.concat([ ret, util.zeros(32 - (arg.length % 32)) ])
    }

    return ret
  } else if (type.startsWith('bytes')) {
    size = parseTypeN(type)
    if (size < 1 || size > 32) {
      throw new Error('Invalid bytes<N> width: ' + size)
    }

    return util.setLengthRight(arg, 32)
  } else if (type.startsWith('uint')) {
    size = parseTypeN(type)
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid uint<N> width: ' + size)
    }

    num = parseNumber(arg)
    const bitLength = util.bitLengthFromBigInt(num)
    if (bitLength > size) {
      throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + bitLength)
    }

    if (num < 0) {
      throw new Error('Supplied uint is negative')
    }

    return util.bufferBEFromBigInt(num, 32);
  } else if (type.startsWith('int')) {
    size = parseTypeN(type)
    if ((size % 8) || (size < 8) || (size > 256)) {
      throw new Error('Invalid int<N> width: ' + size)
    }

    num = parseNumber(arg)
    const bitLength = util.bitLengthFromBigInt(num)
    if (bitLength > size) {
      throw new Error('Supplied int exceeds width: ' + size + ' vs ' + bitLength)
    }

    const twos = util.twosFromBigInt(num, 256);

    return util.bufferBEFromBigInt(twos, 32);
  } else if (type.startsWith('ufixed')) {
    size = parseTypeNxM(type)

    num = parseNumber(arg)

    if (num < 0) {
      throw new Error('Supplied ufixed is negative')
    }

    return encodeSingle('uint256', num * BigInt(2) ** BigInt(size[1]))
  } else if (type.startsWith('fixed')) {
    size = parseTypeNxM(type)

    return encodeSingle('int256', parseNumber(arg) * BigInt(2) ** BigInt(size[1]))
  }

  throw new Error('Unsupported or invalid type: ' + type)
}

// Is a type dynamic?
function isDynamic (type) {
  // FIXME: handle all types? I don't think anything is missing now
  return (type === 'string') || (type === 'bytes') || (parseTypeArray(type) === 'dynamic')
}

// Is a type an array?
function isArray (type) {
  return type.lastIndexOf(']') === type.length - 1
}

// Encode a method/event with arguments
// @types an array of string type names
// @args  an array of the appropriate values
function rawEncode (types, values) {
  var output = []
  var data = []

  var headLength = 32 * types.length

  for (var i in types) {
    var type = elementaryName(types[i])
    var value = values[i]
    var cur = encodeSingle(type, value)

    // Use the head/tail method for storing dynamic data
    if (isDynamic(type)) {
      output.push(encodeSingle('uint256', headLength))
      data.push(cur)
      headLength += cur.length
    } else {
      output.push(cur)
    }
  }

  return Buffer.concat(output.concat(data))
}

function solidityPack (types, values) {
  if (types.length !== values.length) {
    throw new Error('Number of types are not matching the values')
  }

  var size, num
  var ret = []

  for (var i = 0; i < types.length; i++) {
    var type = elementaryName(types[i])
    var value = values[i]

    if (type === 'bytes') {
      ret.push(value)
    } else if (type === 'string') {
      ret.push(new Buffer(value, 'utf8'))
    } else if (type === 'bool') {
      ret.push(new Buffer(value ? '01' : '00', 'hex'))
    } else if (type === 'address') {
      ret.push(util.setLength(value, 20))
    } else if (type.startsWith('bytes')) {
      size = parseTypeN(type)
      if (size < 1 || size > 32) {
        throw new Error('Invalid bytes<N> width: ' + size)
      }

      ret.push(util.setLengthRight(value, size))
    } else if (type.startsWith('uint')) {
      size = parseTypeN(type)
      if ((size % 8) || (size < 8) || (size > 256)) {
        throw new Error('Invalid uint<N> width: ' + size)
      }

      num = parseNumber(value)
      const bitLength = util.bitLengthFromBigInt(num)
      if (bitLength > size) {
        throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + bitLength)
      }

      ret.push(util.bufferBEFromBigInt(num, size / 8))
    } else if (type.startsWith('int')) {
      size = parseTypeN(type)
      if ((size % 8) || (size < 8) || (size > 256)) {
        throw new Error('Invalid int<N> width: ' + size)
      }

      num = parseNumber(value)
      const bitLength = util.bitLengthFromBigInt(num)
      if (bitLength > size) {
        throw new Error('Supplied int exceeds width: ' + size + ' vs ' + bitLength)
      }

      const twos = util.twosFromBigInt(num, size);
      ret.push(util.bufferBEFromBigInt(twos, size / 8))
    } else {
      // FIXME: support all other types
      throw new Error('Unsupported or invalid type: ' + type)
    }
  }

  return Buffer.concat(ret)
}

function soliditySHA3 (types, values) {
  return util.keccak(solidityPack(types, values))
}

module.exports = {
  rawEncode,
  solidityPack,
  soliditySHA3
}


/***/ }),

/***/ 818878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(370640)
const abi = __webpack_require__(212872)

const TYPED_MESSAGE_SCHEMA = {
  type: 'object',
  properties: {
    types: {
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {type: 'string'},
            type: {type: 'string'},
          },
          required: ['name', 'type'],
        },
      },
    },
    primaryType: {type: 'string'},
    domain: {type: 'object'},
    message: {type: 'object'},
  },
  required: ['types', 'primaryType', 'domain', 'message'],
}

/**
 * A collection of utility functions used for signing typed data
 */
const TypedDataUtils = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData (primaryType, data, types, useV4 = true) {
    const encodedTypes = ['bytes32']
    const encodedValues = [this.hashType(primaryType, types)]

    if(useV4) {
      const encodeField = (name, type, value) => {
        if (types[type] !== undefined) {
          return ['bytes32', value == null ?
            '0x0000000000000000000000000000000000000000000000000000000000000000' :
            util.keccak(this.encodeData(type, value, types, useV4))]
        }

        if(value === undefined)
          throw new Error(`missing value for field ${name} of type ${type}`)

        if (type === 'bytes') {
          return ['bytes32', util.keccak(value)]
        }

        if (type === 'string') {
          // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
          if (typeof value === 'string') {
            value = Buffer.from(value, 'utf8')
          }
          return ['bytes32', util.keccak(value)]
        }

        if (type.lastIndexOf(']') === type.length - 1) {
          const parsedType = type.slice(0, type.lastIndexOf('['))
          const typeValuePairs = value.map(item =>
            encodeField(name, parsedType, item))
          return ['bytes32', util.keccak(abi.rawEncode(
            typeValuePairs.map(([type]) => type),
            typeValuePairs.map(([, value]) => value),
          ))]
        }

        return [type, value]
      }

      for (const field of types[primaryType]) {
        const [type, value] = encodeField(field.name, field.type, data[field.name])
        encodedTypes.push(type)
        encodedValues.push(value)
      }
    } else {
      for (const field of types[primaryType]) {
        let value = data[field.name]
        if (value !== undefined) {
          if (field.type === 'bytes') {
            encodedTypes.push('bytes32')
            value = util.keccak(value)
            encodedValues.push(value)
          } else if (field.type === 'string') {
            encodedTypes.push('bytes32')
            // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
            if (typeof value === 'string') {
              value = Buffer.from(value, 'utf8')
            }
            value = util.keccak(value)
            encodedValues.push(value)
          } else if (types[field.type] !== undefined) {
            encodedTypes.push('bytes32')
            value = util.keccak(this.encodeData(field.type, value, types, useV4))
            encodedValues.push(value)
          } else if (field.type.lastIndexOf(']') === field.type.length - 1) {
            throw new Error('Arrays currently unimplemented in encodeData')
          } else {
            encodedTypes.push(field.type)
            encodedValues.push(value)
          }
        }
      }
    }

    return abi.rawEncode(encodedTypes, encodedValues)
  },

  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType (primaryType, types) {
    let result = ''
    let deps = this.findTypeDependencies(primaryType, types).filter(dep => dep !== primaryType)
    deps = [primaryType].concat(deps.sort())
    for (const type of deps) {
      const children = types[type]
      if (!children) {
        throw new Error('No type definition specified: ' + type)
      }
      result += type + '(' + types[type].map(({ name, type }) => type + ' ' + name).join(',') + ')'
    }
    return result
  },

  /**
   * Finds all types within a type definition object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies (primaryType, types, results = []) {
    primaryType = primaryType.match(/^\w*/)[0]
    if (results.includes(primaryType) || types[primaryType] === undefined) { return results }
    results.push(primaryType)
    for (const field of types[primaryType]) {
      for (const dep of this.findTypeDependencies(field.type, types, results)) {
        !results.includes(dep) && results.push(dep)
      }
    }
    return results
  },

  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct (primaryType, data, types, useV4 = true) {
    return util.keccak(this.encodeData(primaryType, data, types, useV4))
  },

  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType (primaryType, types) {
    return util.keccak(this.encodeType(primaryType, types))
  },

  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData (data) {
    const sanitizedData = {}
    for (const key in TYPED_MESSAGE_SCHEMA.properties) {
      data[key] && (sanitizedData[key] = data[key])
    }
    if (sanitizedData.types) {
      sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types)
    }
    return sanitizedData
  },

  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash (typedData, useV4 = true) {
    const sanitizedData = this.sanitizeData(typedData)
    const parts = [Buffer.from('1901', 'hex')]
    parts.push(this.hashStruct('EIP712Domain', sanitizedData.domain, sanitizedData.types, useV4))
    if (sanitizedData.primaryType !== 'EIP712Domain') {
      parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4))
    }
    return util.keccak(Buffer.concat(parts))
  },
}

module.exports = {
  TYPED_MESSAGE_SCHEMA,
  TypedDataUtils,

  hashForSignTypedDataLegacy: function (msgParams) {
    return typedSignatureHashLegacy(msgParams.data)
  },

  hashForSignTypedData_v3: function (msgParams) {
    return TypedDataUtils.hash(msgParams.data, false)
  },

  hashForSignTypedData_v4: function (msgParams) {
    return TypedDataUtils.hash(msgParams.data)
  },
}

/**
 * @param typedData - Array of data along with types, as per EIP712.
 * @returns Buffer
 */
function typedSignatureHashLegacy(typedData) {
  const error = new Error('Expect argument to be non-empty array')
  if (typeof typedData !== 'object' || !typedData.length) throw error

  const data = typedData.map(function (e) {
    return e.type === 'bytes' ? util.toBuffer(e.value) : e.value
  })
  const types = typedData.map(function (e) { return e.type })
  const schema = typedData.map(function (e) {
    if (!e.name) throw error
    return e.type + ' ' + e.name
  })

  return abi.soliditySHA3(
    ['bytes32', 'bytes32'],
    [
      abi.soliditySHA3(new Array(typedData.length).fill('string'), schema),
      abi.soliditySHA3(types, data)
    ]
  )
}


/***/ }),

/***/ 370640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Extracted from https://github.com/ethereumjs/ethereumjs-util and stripped out irrelevant code
// Original code licensed under the Mozilla Public License Version 2.0

/* eslint-disable */
//prettier-ignore
const createKeccakHash = __webpack_require__(895508)

/**
 * Returns a buffer filled with 0s
 * @method zeros
 * @param {Number} bytes  the number of bytes the buffer should be
 * @return {Buffer}
 */
function zeros (bytes) {
  return Buffer.allocUnsafe(bytes).fill(0)
}

function bitLengthFromBigInt (num) {
  return num.toString(2).length
}

function bufferBEFromBigInt(num, length) {
  let hex = num.toString(16);
  // Ensure the hex string length is even
  if (hex.length % 2 !== 0) hex = '0' + hex;
  // Convert hex string to a byte array
  const byteArray = hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16));
  // Ensure the byte array is of the specified length
  while (byteArray.length < length) {
    byteArray.unshift(0); // Prepend with zeroes if shorter than required length
  }

  return Buffer.from(byteArray);
}

function twosFromBigInt(value, width) {
  const isNegative = value < 0n;
  let result;
  if (isNegative) {
    // Prepare a mask for the specified width to perform NOT operation
    const mask = (1n << BigInt(width)) - 1n;
    // Invert bits (using NOT) and add one
    result = (~value & mask) + 1n;
  } else {
    result = value;
  }
  // Ensure the result fits in the specified width
  result &= (1n << BigInt(width)) - 1n;

  return result;
}

/**
 * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @method setLength
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @param {Boolean} [right=false] whether to start padding form the left or right
 * @return {Buffer|Array}
 */
function setLength (msg, length, right) {
  const buf = zeros(length)
  msg = toBuffer(msg)
  if (right) {
    if (msg.length < length) {
      msg.copy(buf)
      return buf
    }
    return msg.slice(0, length)
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length)
      return buf
    }
    return msg.slice(-length)
  }
}

/**
 * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @return {Buffer|Array}
 */
function setLengthRight (msg, length) {
  return setLength(msg, length, true)
}

/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BIgInt` and other objects with a `toArray()` method.
 * @param {*} v the value
 */
function toBuffer (v) {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v)
    } else if (typeof v === 'string') {
      if (isHexString(v)) {
        v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex')
      } else {
        v = Buffer.from(v)
      }
    } else if (typeof v === 'number') {
      v = intToBuffer(v)
    } else if (v === null || v === undefined) {
      v = Buffer.allocUnsafe(0)
    } else if (typeof v === 'bigint') {
      v = bufferBEFromBigInt(v)
    } else if (v.toArray) {
      // TODO: bigint should be handled above, may remove this duplicate
      // converts a BigInt to a Buffer
      v = Buffer.from(v.toArray())
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}

/**
 * Converts a `Buffer` into a hex `String`
 * @param {Buffer} buf
 * @return {String}
 */
function bufferToHex (buf) {
  buf = toBuffer(buf)
  return '0x' + buf.toString('hex')
}

/**
 * Creates Keccak hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */
function keccak (a, bits) {
  a = toBuffer(a)
  if (!bits) bits = 256

  return createKeccakHash('keccak' + bits).update(a).digest()
}

function padToEven (str) {
  return str.length % 2 ? '0' + str : str
}

function isHexString (str) {
  return typeof str === 'string' && str.match(/^0x[0-9A-Fa-f]*$/)
}

function stripHexPrefix (str) {
  if (typeof str === 'string' && str.startsWith('0x')) {
    return str.slice(2)
  }
  return str
}

module.exports = {
  zeros,
  setLength,
  setLengthRight,
  isHexString,
  stripHexPrefix,
  toBuffer,
  bufferToHex,
  keccak,
  bitLengthFromBigInt,
  bufferBEFromBigInt,
  twosFromBigInt
}


/***/ }),

/***/ 471797:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LIB_VERSION = void 0;
exports.LIB_VERSION = '4.0.3';


/***/ }),

/***/ 641075:
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 895508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(79792)(__webpack_require__(744817))


/***/ }),

/***/ 79792:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createKeccak = __webpack_require__(640212)
const createShake = __webpack_require__(914614)

module.exports = function (KeccakState) {
  const Keccak = createKeccak(KeccakState)
  const Shake = createShake(KeccakState)

  return function (algorithm, options) {
    const hash = typeof algorithm === 'string' ? algorithm.toLowerCase() : algorithm
    switch (hash) {
      case 'keccak224': return new Keccak(1152, 448, null, 224, options)
      case 'keccak256': return new Keccak(1088, 512, null, 256, options)
      case 'keccak384': return new Keccak(832, 768, null, 384, options)
      case 'keccak512': return new Keccak(576, 1024, null, 512, options)

      case 'sha3-224': return new Keccak(1152, 448, 0x06, 224, options)
      case 'sha3-256': return new Keccak(1088, 512, 0x06, 256, options)
      case 'sha3-384': return new Keccak(832, 768, 0x06, 384, options)
      case 'sha3-512': return new Keccak(576, 1024, 0x06, 512, options)

      case 'shake128': return new Shake(1344, 256, 0x1f, options)
      case 'shake256': return new Shake(1088, 512, 0x1f, options)

      default: throw new Error('Invald algorithm: ' + algorithm)
    }
  }
}


/***/ }),

/***/ 640212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Transform } = __webpack_require__(128399)

module.exports = (KeccakState) => class Keccak extends Transform {
  constructor (rate, capacity, delimitedSuffix, hashBitLength, options) {
    super(options)

    this._rate = rate
    this._capacity = capacity
    this._delimitedSuffix = delimitedSuffix
    this._hashBitLength = hashBitLength
    this._options = options

    this._state = new KeccakState()
    this._state.initialize(rate, capacity)
    this._finalized = false
  }

  _transform (chunk, encoding, callback) {
    let error = null
    try {
      this.update(chunk, encoding)
    } catch (err) {
      error = err
    }

    callback(error)
  }

  _flush (callback) {
    let error = null
    try {
      this.push(this.digest())
    } catch (err) {
      error = err
    }

    callback(error)
  }

  update (data, encoding) {
    if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer')
    if (this._finalized) throw new Error('Digest already called')
    if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding)

    this._state.absorb(data)

    return this
  }

  digest (encoding) {
    if (this._finalized) throw new Error('Digest already called')
    this._finalized = true

    if (this._delimitedSuffix) this._state.absorbLastFewBits(this._delimitedSuffix)
    let digest = this._state.squeeze(this._hashBitLength / 8)
    if (encoding !== undefined) digest = digest.toString(encoding)

    this._resetState()

    return digest
  }

  // remove result from memory
  _resetState () {
    this._state.initialize(this._rate, this._capacity)
    return this
  }

  // because sometimes we need hash right now and little later
  _clone () {
    const clone = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options)
    this._state.copy(clone._state)
    clone._finalized = this._finalized

    return clone
  }
}


/***/ }),

/***/ 914614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Transform } = __webpack_require__(128399)

module.exports = (KeccakState) => class Shake extends Transform {
  constructor (rate, capacity, delimitedSuffix, options) {
    super(options)

    this._rate = rate
    this._capacity = capacity
    this._delimitedSuffix = delimitedSuffix
    this._options = options

    this._state = new KeccakState()
    this._state.initialize(rate, capacity)
    this._finalized = false
  }

  _transform (chunk, encoding, callback) {
    let error = null
    try {
      this.update(chunk, encoding)
    } catch (err) {
      error = err
    }

    callback(error)
  }

  _flush () {}

  _read (size) {
    this.push(this.squeeze(size))
  }

  update (data, encoding) {
    if (!Buffer.isBuffer(data) && typeof data !== 'string') throw new TypeError('Data must be a string or a buffer')
    if (this._finalized) throw new Error('Squeeze already called')
    if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding)

    this._state.absorb(data)

    return this
  }

  squeeze (dataByteLength, encoding) {
    if (!this._finalized) {
      this._finalized = true
      this._state.absorbLastFewBits(this._delimitedSuffix)
    }

    let data = this._state.squeeze(dataByteLength)
    if (encoding !== undefined) data = data.toString(encoding)

    return data
  }

  _resetState () {
    this._state.initialize(this._rate, this._capacity)
    return this
  }

  _clone () {
    const clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options)
    this._state.copy(clone._state)
    clone._finalized = this._finalized

    return clone
  }
}


/***/ }),

/***/ 279078:
/***/ ((__unused_webpack_module, exports) => {

const P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]

exports.p1600 = function (s) {
  for (let round = 0; round < 24; ++round) {
    // theta
    const lo0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40]
    const hi0 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41]
    const lo1 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42]
    const hi1 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43]
    const lo2 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44]
    const hi2 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45]
    const lo3 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46]
    const hi3 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47]
    const lo4 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48]
    const hi4 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49]

    let lo = lo4 ^ (lo1 << 1 | hi1 >>> 31)
    let hi = hi4 ^ (hi1 << 1 | lo1 >>> 31)
    const t1slo0 = s[0] ^ lo
    const t1shi0 = s[1] ^ hi
    const t1slo5 = s[10] ^ lo
    const t1shi5 = s[11] ^ hi
    const t1slo10 = s[20] ^ lo
    const t1shi10 = s[21] ^ hi
    const t1slo15 = s[30] ^ lo
    const t1shi15 = s[31] ^ hi
    const t1slo20 = s[40] ^ lo
    const t1shi20 = s[41] ^ hi
    lo = lo0 ^ (lo2 << 1 | hi2 >>> 31)
    hi = hi0 ^ (hi2 << 1 | lo2 >>> 31)
    const t1slo1 = s[2] ^ lo
    const t1shi1 = s[3] ^ hi
    const t1slo6 = s[12] ^ lo
    const t1shi6 = s[13] ^ hi
    const t1slo11 = s[22] ^ lo
    const t1shi11 = s[23] ^ hi
    const t1slo16 = s[32] ^ lo
    const t1shi16 = s[33] ^ hi
    const t1slo21 = s[42] ^ lo
    const t1shi21 = s[43] ^ hi
    lo = lo1 ^ (lo3 << 1 | hi3 >>> 31)
    hi = hi1 ^ (hi3 << 1 | lo3 >>> 31)
    const t1slo2 = s[4] ^ lo
    const t1shi2 = s[5] ^ hi
    const t1slo7 = s[14] ^ lo
    const t1shi7 = s[15] ^ hi
    const t1slo12 = s[24] ^ lo
    const t1shi12 = s[25] ^ hi
    const t1slo17 = s[34] ^ lo
    const t1shi17 = s[35] ^ hi
    const t1slo22 = s[44] ^ lo
    const t1shi22 = s[45] ^ hi
    lo = lo2 ^ (lo4 << 1 | hi4 >>> 31)
    hi = hi2 ^ (hi4 << 1 | lo4 >>> 31)
    const t1slo3 = s[6] ^ lo
    const t1shi3 = s[7] ^ hi
    const t1slo8 = s[16] ^ lo
    const t1shi8 = s[17] ^ hi
    const t1slo13 = s[26] ^ lo
    const t1shi13 = s[27] ^ hi
    const t1slo18 = s[36] ^ lo
    const t1shi18 = s[37] ^ hi
    const t1slo23 = s[46] ^ lo
    const t1shi23 = s[47] ^ hi
    lo = lo3 ^ (lo0 << 1 | hi0 >>> 31)
    hi = hi3 ^ (hi0 << 1 | lo0 >>> 31)
    const t1slo4 = s[8] ^ lo
    const t1shi4 = s[9] ^ hi
    const t1slo9 = s[18] ^ lo
    const t1shi9 = s[19] ^ hi
    const t1slo14 = s[28] ^ lo
    const t1shi14 = s[29] ^ hi
    const t1slo19 = s[38] ^ lo
    const t1shi19 = s[39] ^ hi
    const t1slo24 = s[48] ^ lo
    const t1shi24 = s[49] ^ hi

    // rho & pi
    const t2slo0 = t1slo0
    const t2shi0 = t1shi0
    const t2slo16 = (t1shi5 << 4 | t1slo5 >>> 28)
    const t2shi16 = (t1slo5 << 4 | t1shi5 >>> 28)
    const t2slo7 = (t1slo10 << 3 | t1shi10 >>> 29)
    const t2shi7 = (t1shi10 << 3 | t1slo10 >>> 29)
    const t2slo23 = (t1shi15 << 9 | t1slo15 >>> 23)
    const t2shi23 = (t1slo15 << 9 | t1shi15 >>> 23)
    const t2slo14 = (t1slo20 << 18 | t1shi20 >>> 14)
    const t2shi14 = (t1shi20 << 18 | t1slo20 >>> 14)
    const t2slo10 = (t1slo1 << 1 | t1shi1 >>> 31)
    const t2shi10 = (t1shi1 << 1 | t1slo1 >>> 31)
    const t2slo1 = (t1shi6 << 12 | t1slo6 >>> 20)
    const t2shi1 = (t1slo6 << 12 | t1shi6 >>> 20)
    const t2slo17 = (t1slo11 << 10 | t1shi11 >>> 22)
    const t2shi17 = (t1shi11 << 10 | t1slo11 >>> 22)
    const t2slo8 = (t1shi16 << 13 | t1slo16 >>> 19)
    const t2shi8 = (t1slo16 << 13 | t1shi16 >>> 19)
    const t2slo24 = (t1slo21 << 2 | t1shi21 >>> 30)
    const t2shi24 = (t1shi21 << 2 | t1slo21 >>> 30)
    const t2slo20 = (t1shi2 << 30 | t1slo2 >>> 2)
    const t2shi20 = (t1slo2 << 30 | t1shi2 >>> 2)
    const t2slo11 = (t1slo7 << 6 | t1shi7 >>> 26)
    const t2shi11 = (t1shi7 << 6 | t1slo7 >>> 26)
    const t2slo2 = (t1shi12 << 11 | t1slo12 >>> 21)
    const t2shi2 = (t1slo12 << 11 | t1shi12 >>> 21)
    const t2slo18 = (t1slo17 << 15 | t1shi17 >>> 17)
    const t2shi18 = (t1shi17 << 15 | t1slo17 >>> 17)
    const t2slo9 = (t1shi22 << 29 | t1slo22 >>> 3)
    const t2shi9 = (t1slo22 << 29 | t1shi22 >>> 3)
    const t2slo5 = (t1slo3 << 28 | t1shi3 >>> 4)
    const t2shi5 = (t1shi3 << 28 | t1slo3 >>> 4)
    const t2slo21 = (t1shi8 << 23 | t1slo8 >>> 9)
    const t2shi21 = (t1slo8 << 23 | t1shi8 >>> 9)
    const t2slo12 = (t1slo13 << 25 | t1shi13 >>> 7)
    const t2shi12 = (t1shi13 << 25 | t1slo13 >>> 7)
    const t2slo3 = (t1slo18 << 21 | t1shi18 >>> 11)
    const t2shi3 = (t1shi18 << 21 | t1slo18 >>> 11)
    const t2slo19 = (t1shi23 << 24 | t1slo23 >>> 8)
    const t2shi19 = (t1slo23 << 24 | t1shi23 >>> 8)
    const t2slo15 = (t1slo4 << 27 | t1shi4 >>> 5)
    const t2shi15 = (t1shi4 << 27 | t1slo4 >>> 5)
    const t2slo6 = (t1slo9 << 20 | t1shi9 >>> 12)
    const t2shi6 = (t1shi9 << 20 | t1slo9 >>> 12)
    const t2slo22 = (t1shi14 << 7 | t1slo14 >>> 25)
    const t2shi22 = (t1slo14 << 7 | t1shi14 >>> 25)
    const t2slo13 = (t1slo19 << 8 | t1shi19 >>> 24)
    const t2shi13 = (t1shi19 << 8 | t1slo19 >>> 24)
    const t2slo4 = (t1slo24 << 14 | t1shi24 >>> 18)
    const t2shi4 = (t1shi24 << 14 | t1slo24 >>> 18)

    // chi
    s[0] = t2slo0 ^ (~t2slo1 & t2slo2)
    s[1] = t2shi0 ^ (~t2shi1 & t2shi2)
    s[10] = t2slo5 ^ (~t2slo6 & t2slo7)
    s[11] = t2shi5 ^ (~t2shi6 & t2shi7)
    s[20] = t2slo10 ^ (~t2slo11 & t2slo12)
    s[21] = t2shi10 ^ (~t2shi11 & t2shi12)
    s[30] = t2slo15 ^ (~t2slo16 & t2slo17)
    s[31] = t2shi15 ^ (~t2shi16 & t2shi17)
    s[40] = t2slo20 ^ (~t2slo21 & t2slo22)
    s[41] = t2shi20 ^ (~t2shi21 & t2shi22)
    s[2] = t2slo1 ^ (~t2slo2 & t2slo3)
    s[3] = t2shi1 ^ (~t2shi2 & t2shi3)
    s[12] = t2slo6 ^ (~t2slo7 & t2slo8)
    s[13] = t2shi6 ^ (~t2shi7 & t2shi8)
    s[22] = t2slo11 ^ (~t2slo12 & t2slo13)
    s[23] = t2shi11 ^ (~t2shi12 & t2shi13)
    s[32] = t2slo16 ^ (~t2slo17 & t2slo18)
    s[33] = t2shi16 ^ (~t2shi17 & t2shi18)
    s[42] = t2slo21 ^ (~t2slo22 & t2slo23)
    s[43] = t2shi21 ^ (~t2shi22 & t2shi23)
    s[4] = t2slo2 ^ (~t2slo3 & t2slo4)
    s[5] = t2shi2 ^ (~t2shi3 & t2shi4)
    s[14] = t2slo7 ^ (~t2slo8 & t2slo9)
    s[15] = t2shi7 ^ (~t2shi8 & t2shi9)
    s[24] = t2slo12 ^ (~t2slo13 & t2slo14)
    s[25] = t2shi12 ^ (~t2shi13 & t2shi14)
    s[34] = t2slo17 ^ (~t2slo18 & t2slo19)
    s[35] = t2shi17 ^ (~t2shi18 & t2shi19)
    s[44] = t2slo22 ^ (~t2slo23 & t2slo24)
    s[45] = t2shi22 ^ (~t2shi23 & t2shi24)
    s[6] = t2slo3 ^ (~t2slo4 & t2slo0)
    s[7] = t2shi3 ^ (~t2shi4 & t2shi0)
    s[16] = t2slo8 ^ (~t2slo9 & t2slo5)
    s[17] = t2shi8 ^ (~t2shi9 & t2shi5)
    s[26] = t2slo13 ^ (~t2slo14 & t2slo10)
    s[27] = t2shi13 ^ (~t2shi14 & t2shi10)
    s[36] = t2slo18 ^ (~t2slo19 & t2slo15)
    s[37] = t2shi18 ^ (~t2shi19 & t2shi15)
    s[46] = t2slo23 ^ (~t2slo24 & t2slo20)
    s[47] = t2shi23 ^ (~t2shi24 & t2shi20)
    s[8] = t2slo4 ^ (~t2slo0 & t2slo1)
    s[9] = t2shi4 ^ (~t2shi0 & t2shi1)
    s[18] = t2slo9 ^ (~t2slo5 & t2slo6)
    s[19] = t2shi9 ^ (~t2shi5 & t2shi6)
    s[28] = t2slo14 ^ (~t2slo10 & t2slo11)
    s[29] = t2shi14 ^ (~t2shi10 & t2shi11)
    s[38] = t2slo19 ^ (~t2slo15 & t2slo16)
    s[39] = t2shi19 ^ (~t2shi15 & t2shi16)
    s[48] = t2slo24 ^ (~t2slo20 & t2slo21)
    s[49] = t2shi24 ^ (~t2shi20 & t2shi21)

    // iota
    s[0] ^= P1600_ROUND_CONSTANTS[round * 2]
    s[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1]
  }
}


/***/ }),

/***/ 744817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const keccakState = __webpack_require__(279078)

function Keccak () {
  // much faster than `new Array(50)`
  this.state = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ]

  this.blockSize = null
  this.count = 0
  this.squeezing = false
}

Keccak.prototype.initialize = function (rate, capacity) {
  for (let i = 0; i < 50; ++i) this.state[i] = 0
  this.blockSize = rate / 8
  this.count = 0
  this.squeezing = false
}

Keccak.prototype.absorb = function (data) {
  for (let i = 0; i < data.length; ++i) {
    this.state[~~(this.count / 4)] ^= data[i] << (8 * (this.count % 4))
    this.count += 1
    if (this.count === this.blockSize) {
      keccakState.p1600(this.state)
      this.count = 0
    }
  }
}

Keccak.prototype.absorbLastFewBits = function (bits) {
  this.state[~~(this.count / 4)] ^= bits << (8 * (this.count % 4))
  if ((bits & 0x80) !== 0 && this.count === (this.blockSize - 1)) keccakState.p1600(this.state)
  this.state[~~((this.blockSize - 1) / 4)] ^= 0x80 << (8 * ((this.blockSize - 1) % 4))
  keccakState.p1600(this.state)
  this.count = 0
  this.squeezing = true
}

Keccak.prototype.squeeze = function (length) {
  if (!this.squeezing) this.absorbLastFewBits(0x01)

  const output = Buffer.alloc(length)
  for (let i = 0; i < length; ++i) {
    output[i] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 0xff
    this.count += 1
    if (this.count === this.blockSize) {
      keccakState.p1600(this.state)
      this.count = 0
    }
  }

  return output
}

Keccak.prototype.copy = function (dest) {
  for (let i = 0; i < 50; ++i) dest.state[i] = this.state[i]
  dest.blockSize = this.blockSize
  dest.count = this.count
  dest.squeezing = this.squeezing
}

module.exports = Keccak


/***/ }),

/***/ 950172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ b),
/* harmony export */   Fragment: () => (/* binding */ k),
/* harmony export */   cloneElement: () => (/* binding */ E),
/* harmony export */   createContext: () => (/* binding */ G),
/* harmony export */   createElement: () => (/* binding */ _),
/* harmony export */   createRef: () => (/* binding */ m),
/* harmony export */   h: () => (/* binding */ _),
/* harmony export */   hydrate: () => (/* binding */ D),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ B),
/* harmony export */   toChildArray: () => (/* binding */ H)
/* harmony export */ });
var n,l,u,t,i,o,r,f,e,c,s,a,h={},p=[],v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function w(n){var l=n.parentNode;l&&l.removeChild(n)}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(f),f}function m(){return{current:null}}function k(n){return n.children}function b(n,l){this.props=n,this.context=l}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?x(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!P.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(P)}function P(){var n,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(u=i.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j(c,o,s),o.__e!=e&&C(o)),i.length>u&&i.sort(f));P.__r=0}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h:_[y.__i]||h,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y(i)?g(k,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&(f==r-a?a-=f-r:a++),f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o))}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(y(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e,n.addEventListener(l,o?s:c,o)):n.removeEventListener(l,o?s:c,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b(m,M),h.constructor=T,h.render=q),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_)})}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y(L=null!=a&&a.type===k&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e}else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function j(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function z(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1}if(null===b)m===k||e&&l.data===k||(l.data=k);else{if(r=r&&n.call(l.childNodes),m=t.props||h,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A(l,s,null,d,o)}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A(l,s,g,m[s],o))}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function V(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(k,null,[u]),r||h,h,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j(f,u,e)}function D(n,l){B(n,l,D)}function E(l,u,t){var i,o,r,f,e=d({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=p.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},b.prototype.render=k,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e=0,c=F(!1),s=F(!0),a=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ 45994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ q),
/* harmony export */   useContext: () => (/* binding */ x),
/* harmony export */   useDebugValue: () => (/* binding */ P),
/* harmony export */   useEffect: () => (/* binding */ y),
/* harmony export */   useErrorBoundary: () => (/* binding */ b),
/* harmony export */   useId: () => (/* binding */ g),
/* harmony export */   useImperativeHandle: () => (/* binding */ F),
/* harmony export */   useLayoutEffect: () => (/* binding */ _),
/* harmony export */   useMemo: () => (/* binding */ T),
/* harmony export */   useReducer: () => (/* binding */ p),
/* harmony export */   useRef: () => (/* binding */ A),
/* harmony export */   useState: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(950172);
var t,r,u,i,o=0,f=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i))}function _(n,u){var i=d(t++,4);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__h.push(i))}function A(n){return o=5,T(function(){return{current:n}},[])}function F(n,t,r){o=6,_(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function x(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function P(n,t){c.useDebugValue&&c.useDebugValue(t?t(n):n)}function b(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function g(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[]}catch(t){n.__H.__h=[],c.__e(t,n.__v)}}c.__b=function(n){r=null,e&&e(n)},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t)},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),u=r=null},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return!n.__||B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],c.__e(r,n.__v)}}),l&&l(n,t)},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n)}catch(n){t=n}}),r.__H=void 0,t&&c.__e(t,r.__v))};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r))}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function B(n){var t=r;n.__c=n.__(),r=t}function C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ })

}]);