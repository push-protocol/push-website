"use strict";
exports.id = 2754;
exports.ids = [2754];
exports.modules = {

/***/ 252754:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   offchainLookup: () => (/* binding */ offchainLookup),
/* harmony export */   offchainLookupSignature: () => (/* binding */ offchainLookupSignature)
/* harmony export */ });
/* unused harmony exports ccipRequest, offchainLookupAbiItem */
/* harmony import */ var _index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(407642);
/* harmony import */ var _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(873216);



class OffchainLookupError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.B {
    constructor({ callbackSelector, cause, data, extraData, sender, urls, }) {
        super(cause.shortMessage ||
            'An error occurred while fetching for an offchain result.', {
            cause,
            metaMessages: [
                ...(cause.metaMessages || []),
                cause.metaMessages?.length ? '' : [],
                'Offchain Gateway Call:',
                urls && [
                    '  Gateway URL(s):',
                    ...urls.map((url) => `    ${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.W)(url)}`),
                ],
                `  Sender: ${sender}`,
                `  Data: ${data}`,
                `  Callback selector: ${callbackSelector}`,
                `  Extra data: ${extraData}`,
            ].flat(),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupError'
        });
    }
}
class OffchainLookupResponseMalformedError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.B {
    constructor({ result, url }) {
        super('Offchain gateway response is malformed. Response data must be a hex value.', {
            metaMessages: [
                `Gateway URL: ${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.W)(url)}`,
                `Response: ${(0,_index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__.s)(result)}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupResponseMalformedError'
        });
    }
}
class OffchainLookupSenderMismatchError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.B {
    constructor({ sender, to }) {
        super('Reverted sender address does not match target contract address (`to`).', {
            metaMessages: [
                `Contract address: ${to}`,
                `OffchainLookup sender address: ${sender}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'OffchainLookupSenderMismatchError'
        });
    }
}

function isAddressEqual(a, b) {
    if (!(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.m)(a, { strict: false }))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.n({ address: a });
    if (!(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.m)(b, { strict: false }))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.n({ address: b });
    return a.toLowerCase() === b.toLowerCase();
}

const offchainLookupSignature = '0x556f1830';
const offchainLookupAbiItem = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
        {
            name: 'sender',
            type: 'address',
        },
        {
            name: 'urls',
            type: 'string[]',
        },
        {
            name: 'callData',
            type: 'bytes',
        },
        {
            name: 'callbackFunction',
            type: 'bytes4',
        },
        {
            name: 'extraData',
            type: 'bytes',
        },
    ],
};
async function offchainLookup(client, { blockNumber, blockTag, data, to, }) {
    const { args } = (0,_index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__.d)({
        data,
        abi: [offchainLookupAbiItem],
    });
    const [sender, urls, callData, callbackSelector, extraData] = args;
    const { ccipRead } = client;
    const ccipRequest_ = ccipRead && typeof ccipRead?.request === 'function'
        ? ccipRead.request
        : ccipRequest;
    try {
        if (!isAddressEqual(to, sender))
            throw new OffchainLookupSenderMismatchError({ sender, to });
        const result = await ccipRequest_({ data: callData, sender, urls });
        const { data: data_ } = await (0,_index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__.c)(client, {
            blockNumber,
            blockTag,
            data: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.J)([
                callbackSelector,
                (0,_index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__.e)([{ type: 'bytes' }, { type: 'bytes' }], [result, extraData]),
            ]),
            to,
        });
        return data_;
    }
    catch (err) {
        throw new OffchainLookupError({
            callbackSelector,
            cause: err,
            data,
            extraData,
            sender,
            urls,
        });
    }
}
async function ccipRequest({ data, sender, urls, }) {
    let error = new Error('An unknown error occurred.');
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const method = url.includes('{data}') ? 'GET' : 'POST';
        const body = method === 'POST' ? { data, sender } : undefined;
        try {
            const response = await fetch(url.replace('{sender}', sender).replace('{data}', data), {
                body: JSON.stringify(body),
                method,
            });
            let result;
            if (response.headers.get('Content-Type')?.startsWith('application/json')) {
                result = (await response.json()).data;
            }
            else {
                result = (await response.text());
            }
            if (!response.ok) {
                error = new _index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__.H({
                    body,
                    details: result?.error
                        ? (0,_index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__.s)(result.error)
                        : response.statusText,
                    headers: response.headers,
                    status: response.status,
                    url,
                });
                continue;
            }
            if (!(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_1__.i)(result)) {
                error = new OffchainLookupResponseMalformedError({
                    result,
                    url,
                });
                continue;
            }
            return result;
        }
        catch (err) {
            error = new _index_021f6a62_js__WEBPACK_IMPORTED_MODULE_0__.H({
                body,
                details: err.message,
                url,
            });
        }
    }
    throw error;
}


//# sourceMappingURL=ccip-c78d2f16.js.map


/***/ })

};
;