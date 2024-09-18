"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[76868],{

/***/ 76868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainnet: () => (/* binding */ mainnet),
/* harmony export */   sepolia: () => (/* binding */ sepolia)
/* harmony export */ });
/* unused harmony exports acala, ancient8, ancient8Sepolia, anvil, apexTestnet, arbitrum, arbitrumGoerli, arbitrumNova, arbitrumSepolia, areonNetwork, areonNetworkTestnet, astar, astarZkEVM, astarZkyoto, aurora, auroraTestnet, auroria, avalanche, avalancheFuji, bahamut, base, baseGoerli, baseSepolia, beam, beamTestnet, bearNetworkChainMainnet, bearNetworkChainTestnet, berachainTestnet, bevmMainnet, bitTorrent, bitTorrentTestnet, blast, blastSepolia, bob, boba, bronos, bronosTestnet, bsc, bscGreenfield, bscTestnet, btr, btrTestnet, bxn, bxnTestnet, canto, celo, celoAlfajores, chiliz, classic, confluxESpace, confluxESpaceTestnet, coreDao, cronos, cronosTestnet, crossbell, cyber, cyberTestnet, darwinia, defichainEvm, defichainEvmTestnet, degen, dfk, dodochainTestnet, dogechain, dreyerxMainnet, edgeless, edgelessTestnet, edgeware, edgewareTestnet, ekta, ektaTestnet, eon, eos, eosTestnet, etherlinkTestnet, evmos, evmosTestnet, fantom, fantomSonicTestnet, fantomTestnet, fibo, filecoin, filecoinCalibration, filecoinHyperspace, flare, flareTestnet, flowMainnet, flowPreviewnet, flowTestnet, foundry, fraxtal, fraxtalTestnet, funkiSepolia, fuse, fuseSparknet, gnosis, gnosisChiado, gobi, goerli, haqqMainnet, haqqTestedge2, hardhat, harmonyOne, hedera, hederaPreviewnet, hederaTestnet, holesky, immutableZkEvm, immutableZkEvmTestnet, inEVM, iotex, iotexTestnet, jbc, jbcTestnet, kakarotSepolia, karura, kava, kavaTestnet, kcc, klaytn, klaytnBaobab, kroma, kromaSepolia, l3x, l3xTestnet, lightlinkPegasus, lightlinkPhoenix, linea, lineaGoerli, lineaSepolia, lineaTestnet, lisk, liskSepolia, localhost, lukso, luksoTestnet, mandala, manta, mantaSepoliaTestnet, mantaTestnet, mantle, mantleSepoliaTestnet, mantleTestnet, merlin, metachain, metachainIstanbul, metalL2, meter, meterTestnet, metis, metisGoerli, mev, mevTestnet, mintSepoliaTestnet, mode, modeTestnet, moonbaseAlpha, moonbeam, moonbeamDev, moonriver, morphSepolia, nautilus, neonDevnet, neonMainnet, nexi, nexilix, oasisTestnet, oasys, okc, oortMainnetDev, opBNB, opBNBTestnet, optimism, optimismGoerli, optimismSepolia, otimDevnet, palm, palmTestnet, pgn, pgnTestnet, phoenix, playfiAlbireo, plinga, plumeTestnet, polygon, polygonAmoy, polygonMumbai, polygonZkEvm, polygonZkEvmCardona, polygonZkEvmTestnet, pulsechain, pulsechainV4, qMainnet, qTestnet, reyaNetwork, rollux, rolluxTestnet, ronin, rootstock, rootstockTestnet, rss3, rss3Sepolia, saigon, sapphire, sapphireTestnet, scroll, scrollSepolia, scrollTestnet, seiDevnet, shardeumSphinx, shibarium, shimmer, shimmerTestnet, skaleBlockBrawlers, skaleCalypso, skaleCalypsoTestnet, skaleCryptoBlades, skaleCryptoColosseum, skaleEuropa, skaleEuropaTestnet, skaleExorde, skaleHumanProtocol, skaleNebula, skaleNebulaTestnet, skaleRazor, skaleTitan, skaleTitanTestnet, songbird, songbirdTestnet, spicy, stratis, syscoin, syscoinTestnet, taikoHekla, taikoJolnir, taikoKatla, taikoTestnetSepolia, taraxa, taraxaTestnet, telcoinTestnet, telos, telosTestnet, tenet, thaiChain, thunderTestnet, vechain, wanchain, wanchainTestnet, wemix, wemixTestnet, x1Testnet, xLayer, xLayerTestnet, xdc, xdcTestnet, yooldoVerse, yooldoVerseTestnet, zetachain, zetachainAthensTestnet, zhejiang, zilliqa, zilliqaTestnet, zkFair, zkFairTestnet, zkSync, zkSyncInMemoryNode, zkSyncLocalNode, zkSyncSepoliaTestnet, zkSyncTestnet, zora, zoraSepolia, zoraTestnet */
/* harmony import */ var _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(611031);


function defineChain(chain) {
    return {
        formatters: undefined,
        fees: undefined,
        serializers: undefined,
        ...chain,
    };
}

const acala = /*#__PURE__*/ defineChain({
    id: 787,
    name: 'Acala',
    network: 'acala',
    nativeCurrency: {
        name: 'Acala',
        symbol: 'ACA',
        decimals: 18,
    },
    rpcUrls: {
        public: {
            http: ['https://eth-rpc-acala.aca-api.network'],
            webSocket: ['wss://eth-rpc-acala.aca-api.network'],
        },
        default: {
            http: ['https://eth-rpc-acala.aca-api.network'],
            webSocket: ['wss://eth-rpc-acala.aca-api.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Acala Blockscout',
            url: 'https://blockscout.acala.network',
            apiUrl: 'https://blockscout.acala.network/api',
        },
    },
    testnet: false,
});

/**
 * Predeploy contracts for OP Stack.
 * @see https://github.com/ethereum-optimism/optimism/blob/develop/specs/predeploys.md
 */
const contracts = {
    gasPriceOracle: { address: '0x420000000000000000000000000000000000000F' },
    l1Block: { address: '0x4200000000000000000000000000000000000015' },
    l2CrossDomainMessenger: {
        address: '0x4200000000000000000000000000000000000007',
    },
    l2Erc721Bridge: { address: '0x4200000000000000000000000000000000000014' },
    l2StandardBridge: { address: '0x4200000000000000000000000000000000000010' },
    l2ToL1MessagePasser: {
        address: '0x4200000000000000000000000000000000000016',
    },
};

const transactionType = {
    '0x0': 'legacy',
    '0x1': 'eip2930',
    '0x2': 'eip1559',
    '0x3': 'eip4844',
};
function formatTransaction(transaction) {
    const transaction_ = {
        ...transaction,
        blockHash: transaction.blockHash ? transaction.blockHash : null,
        blockNumber: transaction.blockNumber
            ? BigInt(transaction.blockNumber)
            : null,
        chainId: transaction.chainId ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.h)(transaction.chainId) : undefined,
        gas: transaction.gas ? BigInt(transaction.gas) : undefined,
        gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
        maxFeePerBlobGas: transaction.maxFeePerBlobGas
            ? BigInt(transaction.maxFeePerBlobGas)
            : undefined,
        maxFeePerGas: transaction.maxFeePerGas
            ? BigInt(transaction.maxFeePerGas)
            : undefined,
        maxPriorityFeePerGas: transaction.maxPriorityFeePerGas
            ? BigInt(transaction.maxPriorityFeePerGas)
            : undefined,
        nonce: transaction.nonce ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.h)(transaction.nonce) : undefined,
        to: transaction.to ? transaction.to : null,
        transactionIndex: transaction.transactionIndex
            ? Number(transaction.transactionIndex)
            : null,
        type: transaction.type
            ? transactionType[transaction.type]
            : undefined,
        typeHex: transaction.type ? transaction.type : undefined,
        value: transaction.value ? BigInt(transaction.value) : undefined,
        v: transaction.v ? BigInt(transaction.v) : undefined,
    };
    transaction_.yParity = (() => {
        // If `yParity` is provided, we will use it.
        if (transaction.yParity)
            return Number(transaction.yParity);
        // If no `yParity` provided, try derive from `v`.
        if (typeof transaction_.v === 'bigint') {
            if (transaction_.v === 0n || transaction_.v === 27n)
                return 0;
            if (transaction_.v === 1n || transaction_.v === 28n)
                return 1;
            if (transaction_.v >= 35n)
                return transaction_.v % 2n === 0n ? 1 : 0;
        }
        return undefined;
    })();
    if (transaction_.type === 'legacy') {
        delete transaction_.accessList;
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
        delete transaction_.yParity;
    }
    if (transaction_.type === 'eip2930') {
        delete transaction_.maxFeePerBlobGas;
        delete transaction_.maxFeePerGas;
        delete transaction_.maxPriorityFeePerGas;
    }
    if (transaction_.type === 'eip1559') {
        delete transaction_.maxFeePerBlobGas;
    }
    return transaction_;
}
const defineTransaction = /*#__PURE__*/ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.d)('transaction', formatTransaction);

function formatBlock(block) {
    const transactions = block.transactions?.map((transaction) => {
        if (typeof transaction === 'string')
            return transaction;
        return formatTransaction(transaction);
    });
    return {
        ...block,
        baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
        blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : undefined,
        difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
        excessBlobGas: block.excessBlobGas
            ? BigInt(block.excessBlobGas)
            : undefined,
        gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
        gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
        hash: block.hash ? block.hash : null,
        logsBloom: block.logsBloom ? block.logsBloom : null,
        nonce: block.nonce ? block.nonce : null,
        number: block.number ? BigInt(block.number) : null,
        size: block.size ? BigInt(block.size) : undefined,
        timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
        transactions,
        totalDifficulty: block.totalDifficulty
            ? BigInt(block.totalDifficulty)
            : null,
    };
}
const defineBlock = /*#__PURE__*/ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.d)('block', formatBlock);

function formatLog(log, { args, eventName, } = {}) {
    return {
        ...log,
        blockHash: log.blockHash ? log.blockHash : null,
        blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
        logIndex: log.logIndex ? Number(log.logIndex) : null,
        transactionHash: log.transactionHash ? log.transactionHash : null,
        transactionIndex: log.transactionIndex
            ? Number(log.transactionIndex)
            : null,
        ...(eventName ? { args, eventName } : {}),
    };
}

const receiptStatuses = {
    '0x0': 'reverted',
    '0x1': 'success',
};
function formatTransactionReceipt(transactionReceipt) {
    const receipt = {
        ...transactionReceipt,
        blockNumber: transactionReceipt.blockNumber
            ? BigInt(transactionReceipt.blockNumber)
            : null,
        contractAddress: transactionReceipt.contractAddress
            ? transactionReceipt.contractAddress
            : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed
            ? BigInt(transactionReceipt.cumulativeGasUsed)
            : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice
            ? BigInt(transactionReceipt.effectiveGasPrice)
            : null,
        gasUsed: transactionReceipt.gasUsed
            ? BigInt(transactionReceipt.gasUsed)
            : null,
        logs: transactionReceipt.logs
            ? transactionReceipt.logs.map((log) => formatLog(log))
            : null,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex
            ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.h)(transactionReceipt.transactionIndex)
            : null,
        status: transactionReceipt.status
            ? receiptStatuses[transactionReceipt.status]
            : null,
        type: transactionReceipt.type
            ? transactionType[transactionReceipt.type] || transactionReceipt.type
            : null,
    };
    if (transactionReceipt.blobGasPrice)
        receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
    if (transactionReceipt.blobGasUsed)
        receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
    return receipt;
}
const defineTransactionReceipt = /*#__PURE__*/ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.d)('transactionReceipt', formatTransactionReceipt);

const formatters$2 = {
    block: /*#__PURE__*/ defineBlock({
        format(args) {
            const transactions = args.transactions?.map((transaction) => {
                if (typeof transaction === 'string')
                    return transaction;
                const formatted = formatTransaction(transaction);
                if (formatted.typeHex === '0x7e') {
                    formatted.isSystemTx = transaction.isSystemTx;
                    formatted.mint = transaction.mint
                        ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(transaction.mint)
                        : undefined;
                    formatted.sourceHash = transaction.sourceHash;
                    formatted.type = 'deposit';
                }
                return formatted;
            });
            return {
                transactions,
                stateRoot: args.stateRoot,
            };
        },
    }),
    transaction: /*#__PURE__*/ defineTransaction({
        format(args) {
            const transaction = {};
            if (args.type === '0x7e') {
                transaction.isSystemTx = args.isSystemTx;
                transaction.mint = args.mint ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.mint) : undefined;
                transaction.sourceHash = args.sourceHash;
                transaction.type = 'deposit';
            }
            return transaction;
        },
    }),
    transactionReceipt: /*#__PURE__*/ defineTransactionReceipt({
        format(args) {
            return {
                l1GasPrice: args.l1GasPrice ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1GasPrice) : null,
                l1GasUsed: args.l1GasUsed ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1GasUsed) : null,
                l1Fee: args.l1Fee ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1Fee) : null,
                l1FeeScalar: args.l1FeeScalar ? Number(args.l1FeeScalar) : null,
            };
        },
    }),
};

function toRlp(bytes, to = 'hex') {
    const encodable = getEncodable(bytes);
    const cursor = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.c)(new Uint8Array(encodable.length));
    encodable.encode(cursor);
    if (to === 'hex')
        return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(cursor.bytes);
    return cursor.bytes;
}
function getEncodable(bytes) {
    if (Array.isArray(bytes))
        return getEncodableList(bytes.map((x) => getEncodable(x)));
    return getEncodableBytes(bytes);
}
function getEncodableList(list) {
    const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
    const sizeOfBodyLength = getSizeOfLength(bodyLength);
    const length = (() => {
        if (bodyLength <= 55)
            return 1 + bodyLength;
        return 1 + sizeOfBodyLength + bodyLength;
    })();
    return {
        length,
        encode(cursor) {
            if (bodyLength <= 55) {
                cursor.pushByte(0xc0 + bodyLength);
            }
            else {
                cursor.pushByte(0xc0 + 55 + sizeOfBodyLength);
                if (sizeOfBodyLength === 1)
                    cursor.pushUint8(bodyLength);
                else if (sizeOfBodyLength === 2)
                    cursor.pushUint16(bodyLength);
                else if (sizeOfBodyLength === 3)
                    cursor.pushUint24(bodyLength);
                else
                    cursor.pushUint32(bodyLength);
            }
            for (const { encode } of list) {
                encode(cursor);
            }
        },
    };
}
function getEncodableBytes(bytesOrHex) {
    const bytes = typeof bytesOrHex === 'string' ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(bytesOrHex) : bytesOrHex;
    const sizeOfBytesLength = getSizeOfLength(bytes.length);
    const length = (() => {
        if (bytes.length === 1 && bytes[0] < 0x80)
            return 1;
        if (bytes.length <= 55)
            return 1 + bytes.length;
        return 1 + sizeOfBytesLength + bytes.length;
    })();
    return {
        length,
        encode(cursor) {
            if (bytes.length === 1 && bytes[0] < 0x80) {
                cursor.pushBytes(bytes);
            }
            else if (bytes.length <= 55) {
                cursor.pushByte(0x80 + bytes.length);
                cursor.pushBytes(bytes);
            }
            else {
                cursor.pushByte(0x80 + 55 + sizeOfBytesLength);
                if (sizeOfBytesLength === 1)
                    cursor.pushUint8(bytes.length);
                else if (sizeOfBytesLength === 2)
                    cursor.pushUint16(bytes.length);
                else if (sizeOfBytesLength === 3)
                    cursor.pushUint24(bytes.length);
                else
                    cursor.pushUint32(bytes.length);
                cursor.pushBytes(bytes);
            }
        },
    };
}
function getSizeOfLength(length) {
    if (length < 2 ** 8)
        return 1;
    if (length < 2 ** 16)
        return 2;
    if (length < 2 ** 24)
        return 3;
    if (length < 2 ** 32)
        return 4;
    throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('Length is too large.');
}

/**
 * Compute commitments from a list of blobs.
 *
 * @example
 * ```ts
 * import { blobsToCommitments, toBlobs } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * ```
 */
function blobsToCommitments(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = (typeof parameters.blobs[0] === 'string'
        ? parameters.blobs.map((x) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(x))
        : parameters.blobs);
    const commitments = [];
    for (const blob of blobs)
        commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
    return (to === 'bytes'
        ? commitments
        : commitments.map((x) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(x)));
}

/**
 * Compute the proofs for a list of blobs and their commitments.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const proofs = blobsToProofs({ blobs, commitments, kzg })
 * ```
 */
function blobsToProofs(parameters) {
    const { kzg } = parameters;
    const to = parameters.to ?? (typeof parameters.blobs[0] === 'string' ? 'hex' : 'bytes');
    const blobs = (typeof parameters.blobs[0] === 'string'
        ? parameters.blobs.map((x) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(x))
        : parameters.blobs);
    const commitments = (typeof parameters.commitments[0] === 'string'
        ? parameters.commitments.map((x) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(x))
        : parameters.commitments);
    const proofs = [];
    for (let i = 0; i < blobs.length; i++) {
        const blob = blobs[i];
        const commitment = commitments[i];
        proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
    }
    return (to === 'bytes'
        ? proofs
        : proofs.map((x) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(x)));
}

// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function')
        return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number((value >> _32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.H {
    constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.buffer);
    }
    update(data) {
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
        const { view, buffer, blockLen } = this;
        data = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.t)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.f)(data);
                for (; blockLen <= len - pos; pos += blockLen)
                    this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this);
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.o)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.f)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
            throw new Error('_sha2: outputLen bigger than state');
        for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
            to.buffer.set(buffer);
        return to;
    }
}

// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Choice: a ? b : c
const Chi = (a, b, c) => (a & b) ^ (~a & c);
// Majority function, true if any two inpust is true
const Maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends SHA2 {
    constructor() {
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(W15, 7) ^ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(W15, 18) ^ (W15 >>> 3);
            const s1 = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(W2, 17) ^ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(W2, 19) ^ (W2 >>> 10);
            SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
            const sigma1 = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(E, 6) ^ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(E, 11) ^ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(E, 25);
            const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const sigma0 = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(A, 2) ^ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(A, 13) ^ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.r)(A, 22);
            const T2 = (sigma0 + Maj(A, B, C)) | 0;
            H = G;
            G = F;
            F = E;
            E = (D + T1) | 0;
            D = C;
            C = B;
            B = A;
            A = (T1 + T2) | 0;
        }
        // Add the compressed chunk to the current hash value
        A = (A + this.A) | 0;
        B = (B + this.B) | 0;
        C = (C + this.C) | 0;
        D = (D + this.D) | 0;
        E = (E + this.E) | 0;
        F = (F + this.F) | 0;
        G = (G + this.G) | 0;
        H = (H + this.H) | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */
const sha256$1 = /* @__PURE__ */ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => new SHA256());

function sha256(value, to_) {
    const to = to_ || 'hex';
    const bytes = sha256$1((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.i)(value, { strict: false }) ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.j)(value) : value);
    if (to === 'bytes')
        return bytes;
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(bytes);
}

/**
 * Transform a commitment to it's versioned hash.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   commitmentToVersionedHash,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const [commitment] = blobsToCommitments({ blobs, kzg })
 * const versionedHash = commitmentToVersionedHash({ commitment })
 * ```
 */
function commitmentToVersionedHash(parameters) {
    const { commitment, version = 1 } = parameters;
    const to = parameters.to ?? (typeof commitment === 'string' ? 'hex' : 'bytes');
    const versionedHash = sha256(commitment, 'bytes');
    versionedHash.set([version], 0);
    return (to === 'bytes' ? versionedHash : (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(versionedHash));
}

/**
 * Transform a list of commitments to their versioned hashes.
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   commitmentsToVersionedHashes,
 *   toBlobs
 * } from 'viem'
 * import { kzg } from './kzg'
 *
 * const blobs = toBlobs({ data: '0x1234' })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const versionedHashes = commitmentsToVersionedHashes({ commitments })
 * ```
 */
function commitmentsToVersionedHashes(parameters) {
    const { commitments, version } = parameters;
    const to = parameters.to ?? (typeof commitments[0] === 'string' ? 'hex' : 'bytes');
    const hashes = [];
    for (const commitment of commitments) {
        hashes.push(commitmentToVersionedHash({
            commitment,
            to,
            version,
        }));
    }
    return hashes;
}

// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
/** Blob limit per transaction. */
const blobsPerTransaction = 6;
/** The number of bytes in a BLS scalar field element. */
const bytesPerFieldElement = 32;
/** The number of field elements in a blob. */
const fieldElementsPerBlob = 4096;
/** The number of bytes in a blob. */
const bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
/** Blob bytes limit per transaction. */
const maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction -
    // terminator byte (0x80).
    1 -
    // zero byte (0x00) appended to each field element.
    1 * fieldElementsPerBlob * blobsPerTransaction;

// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
const versionedHashVersionKzg = 1;

class BlobSizeTooLargeError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ maxSize, size }) {
        super('Blob size is too large.', {
            metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size} bytes`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BlobSizeTooLargeError'
        });
    }
}
class EmptyBlobError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super('Blob data must not be empty.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EmptyBlobError'
        });
    }
}
class InvalidVersionedHashSizeError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ hash, size, }) {
        super(`Versioned hash "${hash}" size is invalid.`, {
            metaMessages: ['Expected: 32', `Received: ${size}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidVersionedHashSizeError'
        });
    }
}
class InvalidVersionedHashVersionError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ hash, version, }) {
        super(`Versioned hash "${hash}" version is invalid.`, {
            metaMessages: [
                `Expected: ${versionedHashVersionKzg}`,
                `Received: ${version}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidVersionedHashVersionError'
        });
    }
}

/**
 * Transforms arbitrary data to blobs.
 *
 * @example
 * ```ts
 * import { toBlobs, stringToHex } from 'viem'
 *
 * const blobs = toBlobs({ data: stringToHex('hello world') })
 * ```
 */
function toBlobs(parameters) {
    const to = parameters.to ?? (typeof parameters.data === 'string' ? 'hex' : 'bytes');
    const data = (typeof parameters.data === 'string'
        ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(parameters.data)
        : parameters.data);
    const size_ = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(data);
    if (!size_)
        throw new EmptyBlobError();
    if (size_ > maxBytesPerTransaction)
        throw new BlobSizeTooLargeError({
            maxSize: maxBytesPerTransaction,
            size: size_,
        });
    const blobs = [];
    let active = true;
    let position = 0;
    while (active) {
        const blob = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.c)(new Uint8Array(bytesPerBlob));
        let size = 0;
        while (size < fieldElementsPerBlob) {
            const bytes = data.slice(position, position + (bytesPerFieldElement - 1));
            // Push a zero byte so the field element doesn't overflow the BLS modulus.
            blob.pushByte(0x00);
            // Push the current segment of data bytes.
            blob.pushBytes(bytes);
            // If we detect that the current segment of data bytes is less than 31 bytes,
            // we can stop processing and push a terminator byte to indicate the end of the blob.
            if (bytes.length < 31) {
                blob.pushByte(0x80);
                active = false;
                break;
            }
            size++;
            position += 31;
        }
        blobs.push(blob);
    }
    return (to === 'bytes'
        ? blobs.map((x) => x.bytes)
        : blobs.map((x) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(x.bytes)));
}

/**
 * Transforms arbitrary data (or blobs, commitments, & proofs) into a sidecar array.
 *
 * @example
 * ```ts
 * import { toBlobSidecars, stringToHex } from 'viem'
 *
 * const sidecars = toBlobSidecars({ data: stringToHex('hello world') })
 * ```
 *
 * @example
 * ```ts
 * import {
 *   blobsToCommitments,
 *   toBlobs,
 *   blobsToProofs,
 *   toBlobSidecars,
 *   stringToHex
 * } from 'viem'
 *
 * const blobs = toBlobs({ data: stringToHex('hello world') })
 * const commitments = blobsToCommitments({ blobs, kzg })
 * const proofs = blobsToProofs({ blobs, commitments, kzg })
 *
 * const sidecars = toBlobSidecars({ blobs, commitments, proofs })
 * ```
 */
function toBlobSidecars(parameters) {
    const { data, kzg, to } = parameters;
    const blobs = parameters.blobs ?? toBlobs({ data: data, to });
    const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg: kzg, to });
    const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg: kzg, to });
    const sidecars = [];
    for (let i = 0; i < blobs.length; i++)
        sidecars.push({
            blob: blobs[i],
            commitment: commitments[i],
            proof: proofs[i],
        });
    return sidecars;
}

function assertTransactionEIP4844(transaction) {
    const { blobVersionedHashes } = transaction;
    if (blobVersionedHashes) {
        if (blobVersionedHashes.length === 0)
            throw new EmptyBlobError();
        for (const hash of blobVersionedHashes) {
            const size_ = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(hash);
            const version = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.h)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.l)(hash, 0, 1));
            if (size_ !== 32)
                throw new InvalidVersionedHashSizeError({ hash, size: size_ });
            if (version !== versionedHashVersionKzg)
                throw new InvalidVersionedHashVersionError({
                    hash,
                    version,
                });
        }
    }
    assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
    const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
    if (chainId <= 0)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.I({ chainId });
    if (to && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(to))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: to });
    if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.F({ maxFeePerGas });
    if (maxPriorityFeePerGas &&
        maxFeePerGas &&
        maxPriorityFeePerGas > maxFeePerGas)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.T({ maxFeePerGas, maxPriorityFeePerGas });
}
function assertTransactionEIP2930(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
    if (chainId <= 0)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.I({ chainId });
    if (to && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(to))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: to });
    if (maxPriorityFeePerGas || maxFeePerGas)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.');
    if (gasPrice && gasPrice > 2n ** 256n - 1n)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.F({ maxFeePerGas: gasPrice });
}
function assertTransactionLegacy(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, accessList, } = transaction;
    if (to && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(to))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: to });
    if (typeof chainId !== 'undefined' && chainId <= 0)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.I({ chainId });
    if (maxPriorityFeePerGas || maxFeePerGas)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.');
    if (gasPrice && gasPrice > 2n ** 256n - 1n)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.F({ maxFeePerGas: gasPrice });
    if (accessList)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`accessList` is not a valid Legacy Transaction attribute.');
}

function getTransactionType(transaction) {
    if (transaction.type)
        return transaction.type;
    if (typeof transaction.blobs !== 'undefined' ||
        typeof transaction.blobVersionedHashes !== 'undefined' ||
        typeof transaction.maxFeePerBlobGas !== 'undefined' ||
        typeof transaction.sidecars !== 'undefined')
        return 'eip4844';
    if (typeof transaction.maxFeePerGas !== 'undefined' ||
        typeof transaction.maxPriorityFeePerGas !== 'undefined') {
        return 'eip1559';
    }
    if (typeof transaction.gasPrice !== 'undefined') {
        if (typeof transaction.accessList !== 'undefined')
            return 'eip2930';
        return 'legacy';
    }
    throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.p({ transaction });
}

/*
 * Serialize an  EIP-2930 access list
 * @remarks
 * Use to create a transaction serializer with support for EIP-2930 access lists
 *
 * @param accessList - Array of objects of address and arrays of Storage Keys
 * @throws InvalidAddressError, InvalidStorageKeySizeError
 * @returns Array of hex strings
 */
function serializeAccessList(accessList) {
    if (!accessList || accessList.length === 0)
        return [];
    const serializedAccessList = [];
    for (let i = 0; i < accessList.length; i++) {
        const { address, storageKeys } = accessList[i];
        for (let j = 0; j < storageKeys.length; j++) {
            if (storageKeys[j].length - 2 !== 64) {
                throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.q({ storageKey: storageKeys[j] });
            }
        }
        if (!(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(address, { strict: false })) {
            throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address });
        }
        serializedAccessList.push([address, storageKeys]);
    }
    return serializedAccessList;
}

function serializeTransaction$3(transaction, signature) {
    const type = getTransactionType(transaction);
    if (type === 'eip1559')
        return serializeTransactionEIP1559(transaction, signature);
    if (type === 'eip2930')
        return serializeTransactionEIP2930(transaction, signature);
    if (type === 'eip4844')
        return serializeTransactionEIP4844(transaction, signature);
    return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP4844(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data, } = transaction;
    assertTransactionEIP4844(transaction);
    let blobVersionedHashes = transaction.blobVersionedHashes;
    let sidecars = transaction.sidecars;
    // If `blobs` are passed, we will need to compute the KZG commitments & proofs.
    if (transaction.blobs &&
        (typeof blobVersionedHashes === 'undefined' ||
            typeof sidecars === 'undefined')) {
        const blobs = (typeof transaction.blobs[0] === 'string'
            ? transaction.blobs
            : transaction.blobs.map((x) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(x)));
        const kzg = transaction.kzg;
        const commitments = blobsToCommitments({
            blobs,
            kzg,
        });
        if (typeof blobVersionedHashes === 'undefined')
            blobVersionedHashes = commitmentsToVersionedHashes({
                commitments,
            });
        if (typeof sidecars === 'undefined') {
            const proofs = blobsToProofs({ blobs, commitments, kzg });
            sidecars = toBlobSidecars({ blobs, commitments, proofs });
        }
    }
    const serializedAccessList = serializeAccessList(accessList);
    const serializedTransaction = [
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(chainId),
        nonce ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(nonce) : '0x',
        maxPriorityFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxFeePerGas) : '0x',
        gas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gas) : '0x',
        to ?? '0x',
        value ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        maxFeePerBlobGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxFeePerBlobGas) : '0x',
        blobVersionedHashes ?? [],
        ...toYParitySignatureArray(transaction, signature),
    ];
    const blobs = [];
    const commitments = [];
    const proofs = [];
    if (sidecars)
        for (let i = 0; i < sidecars.length; i++) {
            const { blob, commitment, proof } = sidecars[i];
            blobs.push(blob);
            commitments.push(commitment);
            proofs.push(proof);
        }
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.u)([
        '0x03',
        sidecars
            ? // If sidecars are enabled, envelope turns into a "wrapper":
                toRlp([serializedTransaction, blobs, commitments, proofs])
            : // If sidecars are disabled, standard envelope is used:
                toRlp(serializedTransaction),
    ]);
}
function serializeTransactionEIP1559(transaction, signature) {
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data, } = transaction;
    assertTransactionEIP1559(transaction);
    const serializedAccessList = serializeAccessList(accessList);
    const serializedTransaction = [
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(chainId),
        nonce ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(nonce) : '0x',
        maxPriorityFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxFeePerGas) : '0x',
        gas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gas) : '0x',
        to ?? '0x',
        value ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature),
    ];
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.u)([
        '0x02',
        toRlp(serializedTransaction),
    ]);
}
function serializeTransactionEIP2930(transaction, signature) {
    const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
    assertTransactionEIP2930(transaction);
    const serializedAccessList = serializeAccessList(accessList);
    const serializedTransaction = [
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(chainId),
        nonce ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(nonce) : '0x',
        gasPrice ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gasPrice) : '0x',
        gas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gas) : '0x',
        to ?? '0x',
        value ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) : '0x',
        data ?? '0x',
        serializedAccessList,
        ...toYParitySignatureArray(transaction, signature),
    ];
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.u)([
        '0x01',
        toRlp(serializedTransaction),
    ]);
}
function serializeTransactionLegacy(transaction, signature) {
    const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
    assertTransactionLegacy(transaction);
    let serializedTransaction = [
        nonce ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(nonce) : '0x',
        gasPrice ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gasPrice) : '0x',
        gas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gas) : '0x',
        to ?? '0x',
        value ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) : '0x',
        data ?? '0x',
    ];
    if (signature) {
        const v = (() => {
            // EIP-155 (inferred chainId)
            if (signature.v >= 35n) {
                const inferredChainId = (signature.v - 35n) / 2n;
                if (inferredChainId > 0)
                    return signature.v;
                return 27n + (signature.v === 35n ? 0n : 1n);
            }
            // EIP-155 (explicit chainId)
            if (chainId > 0)
                return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
            // Pre-EIP-155 (no chainId)
            const v = 27n + (signature.v === 27n ? 0n : 1n);
            if (signature.v !== v)
                throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.v({ v: signature.v });
            return v;
        })();
        serializedTransaction = [
            ...serializedTransaction,
            (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(v),
            signature.r,
            signature.s,
        ];
    }
    else if (chainId > 0) {
        serializedTransaction = [
            ...serializedTransaction,
            (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(chainId),
            '0x',
            '0x',
        ];
    }
    return toRlp(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature) {
    const { r, s, v, yParity } = signature ?? transaction;
    if (typeof r === 'undefined')
        return [];
    if (typeof s === 'undefined')
        return [];
    if (typeof v === 'undefined' && typeof yParity === 'undefined')
        return [];
    const yParity_ = (() => {
        if (typeof yParity === 'number')
            return yParity ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(1) : '0x';
        if (v === 0n)
            return '0x';
        if (v === 1n)
            return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(1);
        return v === 27n ? '0x' : (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(1);
    })();
    return [yParity_, (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(r), (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(s)];
}

function serializeTransaction$2(transaction, signature) {
    if (isDeposit(transaction))
        return serializeTransactionDeposit(transaction);
    return serializeTransaction$3(transaction, signature);
}
const serializers$2 = {
    transaction: serializeTransaction$2,
};
function serializeTransactionDeposit(transaction) {
    assertTransactionDeposit(transaction);
    const { sourceHash, data, from, gas, isSystemTx, mint, to, value } = transaction;
    const serializedTransaction = [
        sourceHash,
        from,
        to ?? '0x',
        mint ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(mint) : '0x',
        value ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) : '0x',
        gas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gas) : '0x',
        isSystemTx ? '0x1' : '0x',
        data ?? '0x',
    ];
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.u)([
        '0x7e',
        toRlp(serializedTransaction),
    ]);
}
function isDeposit(transaction) {
    if (transaction.type === 'deposit')
        return true;
    if (typeof transaction.sourceHash !== 'undefined')
        return true;
    return false;
}
function assertTransactionDeposit(transaction) {
    const { from, to } = transaction;
    if (from && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(from))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: from });
    if (to && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(to))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: to });
}

const chainConfig$2 = {
    contracts,
    formatters: formatters$2,
    serializers: serializers$2,
};

const sourceId$o = 1; // mainnet
const ancient8 = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 888888888,
    name: 'Ancient8',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.ancient8.gg'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ancient8 explorer',
            url: 'https://scan.ancient8.gg',
            apiUrl: 'https://scan.ancient8.gg/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$o]: {
                address: '0xB09DC08428C8b4EFB4ff9C0827386CDF34277996',
            },
        },
        portal: {
            [sourceId$o]: {
                address: '0x639F2AECE398Aa76b07e59eF6abe2cFe32bacb68',
                blockCreated: 19070571,
            },
        },
        l1StandardBridge: {
            [sourceId$o]: {
                address: '0xd5e3eDf5b68135D559D572E26bF863FBC1950033',
                blockCreated: 19070571,
            },
        },
    },
    sourceId: sourceId$o,
});

const sourceId$n = 11_155_111; // sepolia
const ancient8Sepolia = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 28122024,
    name: 'Ancient8 Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpcv2-testnet.ancient8.gg'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ancient8 Celestia Testnet explorer',
            url: 'https://scanv2-testnet.ancient8.gg',
            apiUrl: 'https://scanv2-testnet.ancient8.gg/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$n]: {
                address: '0x942fD5017c0F60575930D8574Eaca13BEcD6e1bB',
            },
        },
        portal: {
            [sourceId$n]: {
                address: '0xfa1d9E26A6aCD7b22115D27572c1221B9803c960',
                blockCreated: 4972908,
            },
        },
        l1StandardBridge: {
            [sourceId$n]: {
                address: '0xF6Bc0146d3c74D48306e79Ae134A260E418C9335',
                blockCreated: 4972908,
            },
        },
    },
    sourceId: sourceId$n,
});

const anvil = /*#__PURE__*/ defineChain({
    id: 31_337,
    name: 'Anvil',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['http://127.0.0.1:8545'],
            webSocket: ['ws://127.0.0.1:8545'],
        },
    },
});

const apexTestnet = /*#__PURE__*/ defineChain({
    id: 3993,
    name: 'APEX Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-testnet.apexlayer.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp-testnet.apexlayer.xyz',
            apiUrl: 'https://exp-testnet.apexlayer.xyz/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xf7642be33a6b18D16a995657adb5a68CD0438aE2',
            blockCreated: 283775,
        },
    },
    testnet: true,
});

const arbitrum = /*#__PURE__*/ defineChain({
    id: 42_161,
    name: 'Arbitrum One',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://arb1.arbitrum.io/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://arbiscan.io',
            apiUrl: 'https://api.arbiscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7654707,
        },
    },
});

const arbitrumGoerli = /*#__PURE__*/ defineChain({
    id: 421_613,
    name: 'Arbitrum Goerli',
    nativeCurrency: {
        name: 'Arbitrum Goerli Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://goerli-rollup.arbitrum.io/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://goerli.arbiscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 88114,
        },
    },
    testnet: true,
});

const arbitrumNova = /*#__PURE__*/ defineChain({
    id: 42_170,
    name: 'Arbitrum Nova',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://nova.arbitrum.io/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://nova.arbiscan.io',
            apiUrl: 'https://api-nova.arbiscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1746963,
        },
    },
});

const astar = /*#__PURE__*/ defineChain({
    id: 592,
    name: 'Astar',
    network: 'astar-mainnet',
    nativeCurrency: {
        name: 'Astar',
        symbol: 'ASTR',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://astar.api.onfinality.io/public'] },
    },
    blockExplorers: {
        default: {
            name: 'Astar Subscan',
            url: 'https://astar.subscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 761794,
        },
    },
    testnet: false,
});

const astarZkEVM = /*#__PURE__*/ defineChain({
    id: 3_776,
    name: 'Astar zkEVM',
    network: 'AstarZkEVM',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.startale.com/astar-zkevm'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Astar zkEVM Explorer',
            url: 'https://astar-zkevm.explorer.startale.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 93528,
        },
    },
    testnet: false,
});

const astarZkyoto = /*#__PURE__*/ defineChain({
    id: 6_038_361,
    name: 'Astar zkEVM Testnet zKyoto',
    network: 'zKyoto',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.startale.com/zkyoto'],
        },
    },
    blockExplorers: {
        default: {
            name: 'zKyoto Explorer',
            url: 'https://zkyoto.explorer.startale.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 196153,
        },
    },
    testnet: true,
});

const arbitrumSepolia = /*#__PURE__*/ defineChain({
    id: 421_614,
    name: 'Arbitrum Sepolia',
    nativeCurrency: {
        name: 'Arbitrum Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://sepolia-rollup.arbitrum.io/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Arbiscan',
            url: 'https://sepolia.arbiscan.io',
            apiUrl: 'https://api-sepolia.arbiscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 81930,
        },
    },
    testnet: true,
});

const areonNetwork = /*#__PURE__*/ defineChain({
    id: 463,
    name: 'Areon Network',
    nativeCurrency: { decimals: 18, name: 'AREA', symbol: 'AREA' },
    rpcUrls: {
        default: {
            http: ['https://mainnet-rpc.areon.network'],
            webSocket: ['wss://mainnet-ws.areon.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Areonscan',
            url: 'https://areonscan.com',
        },
    },
    testnet: false,
});

const areonNetworkTestnet = /*#__PURE__*/ defineChain({
    id: 462,
    name: 'Areon Network Testnet',
    nativeCurrency: { decimals: 18, name: 'TAREA', symbol: 'TAREA' },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.areon.network'],
            webSocket: ['wss://testnet-ws.areon.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Areonscan',
            url: 'https://areonscan.com',
        },
    },
    testnet: true,
});

const aurora = /*#__PURE__*/ defineChain({
    id: 1313161554,
    name: 'Aurora',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://mainnet.aurora.dev'] },
    },
    blockExplorers: {
        default: {
            name: 'Aurorascan',
            url: 'https://aurorascan.dev',
            apiUrl: 'https://aurorascan.dev/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 62907816,
        },
    },
});

const auroraTestnet = /*#__PURE__*/ defineChain({
    id: 1313161555,
    name: 'Aurora Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://testnet.aurora.dev'] },
    },
    blockExplorers: {
        default: {
            name: 'Aurorascan',
            url: 'https://testnet.aurorascan.dev',
            apiUrl: 'https://testnet.aurorascan.dev/api',
        },
    },
    testnet: true,
});

const auroria = /*#__PURE__*/ defineChain({
    id: 205205,
    name: 'Auroria Testnet',
    network: 'auroria',
    nativeCurrency: {
        name: 'Auroria Stratis',
        symbol: 'tSTRAX',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://auroria.rpc.stratisevm.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Auroria Testnet Explorer',
            url: 'https://auroria.explorer.stratisevm.com',
        },
    },
    testnet: true,
});

const avalanche = /*#__PURE__*/ defineChain({
    id: 43_114,
    name: 'Avalanche',
    nativeCurrency: {
        decimals: 18,
        name: 'Avalanche',
        symbol: 'AVAX',
    },
    rpcUrls: {
        default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'SnowScan',
            url: 'https://snowscan.xyz',
            apiUrl: 'https://api.snowscan.xyz/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 11907934,
        },
    },
});

const avalancheFuji = /*#__PURE__*/ defineChain({
    id: 43_113,
    name: 'Avalanche Fuji',
    nativeCurrency: {
        decimals: 18,
        name: 'Avalanche Fuji',
        symbol: 'AVAX',
    },
    rpcUrls: {
        default: { http: ['https://api.avax-test.network/ext/bc/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'SnowScan',
            url: 'https://testnet.snowscan.xyz',
            apiUrl: 'https://api-testnet.snowscan.xyz',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7096959,
        },
    },
    testnet: true,
});

const bahamut = /*#__PURE__*/ defineChain({
    id: 5165,
    network: 'bahamut',
    name: 'Bahamut',
    nativeCurrency: { name: 'Fasttoken', symbol: 'FTN', decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                'https://rpc1.bahamut.io',
                'https://bahamut-rpc.publicnode.com',
                'https://rpc2.bahamut.io',
            ],
            webSocket: [
                'wss://ws1.sahara.bahamutchain.com',
                'wss://bahamut-rpc.publicnode.com',
                'wss://ws2.sahara.bahamutchain.com',
            ],
        },
        public: {
            http: [
                'https://rpc1.bahamut.io',
                'https://bahamut-rpc.publicnode.com',
                'https://rpc2.bahamut.io',
            ],
            webSocket: [
                'wss://ws1.sahara.bahamutchain.com',
                'wss://bahamut-rpc.publicnode.com',
                'wss://ws2.sahara.bahamutchain.com',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ftnscan',
            url: 'https://www.ftnscan.com',
            apiUrl: 'https://www.ftnscan.com/api',
        },
    },
});

const sourceId$m = 1; // mainnet
const base = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 8453,
    name: 'Base',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.base.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Basescan',
            url: 'https://basescan.org',
            apiUrl: 'https://api.basescan.org/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$m]: {
                address: '0x56315b90c40730925ec5485cf004d835058518A0',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 5022,
        },
        portal: {
            [sourceId$m]: {
                address: '0x49048044D57e1C92A77f79988d21Fa8fAF74E97e',
                blockCreated: 17482143,
            },
        },
        l1StandardBridge: {
            [sourceId$m]: {
                address: '0x3154Cf16ccdb4C6d922629664174b904d80F2C35',
                blockCreated: 17482143,
            },
        },
    },
    sourceId: sourceId$m,
});

const sourceId$l = 5; // goerli
const baseGoerli = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 84531,
    name: 'Base Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://goerli.base.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Basescan',
            url: 'https://goerli.basescan.org',
            apiUrl: 'https://goerli.basescan.org/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$l]: {
                address: '0x2A35891ff30313CcFa6CE88dcf3858bb075A2298',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1376988,
        },
        portal: {
            [sourceId$l]: {
                address: '0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA',
            },
        },
        l1StandardBridge: {
            [sourceId$l]: {
                address: '0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a',
            },
        },
    },
    testnet: true,
    sourceId: sourceId$l,
});

const sourceId$k = 11_155_111; // sepolia
const baseSepolia = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 84532,
    network: 'base-sepolia',
    name: 'Base Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia.base.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Basescan',
            url: 'https://sepolia.basescan.org',
            apiUrl: 'https://api-sepolia.basescan.org/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$k]: {
                address: '0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254',
            },
        },
        portal: {
            [sourceId$k]: {
                address: '0x49f53e41452c74589e85ca1677426ba426459e85',
                blockCreated: 4446677,
            },
        },
        l1StandardBridge: {
            [sourceId$k]: {
                address: '0xfd0Bf71F60660E2f608ed56e1659C450eB113120',
                blockCreated: 4446677,
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1059647,
        },
    },
    testnet: true,
    sourceId: sourceId$k,
});

const beam = /*#__PURE__*/ defineChain({
    id: 4337,
    name: 'Beam',
    network: 'beam',
    nativeCurrency: {
        decimals: 18,
        name: 'Beam',
        symbol: 'BEAM',
    },
    rpcUrls: {
        public: {
            http: ['https://build.onbeam.com/rpc'],
            webSocket: ['wss://build.onbeam.com/ws'],
        },
        default: {
            http: ['https://build.onbeam.com/rpc'],
            webSocket: ['wss://build.onbeam.com/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Beam Explorer',
            url: 'https://subnets.avax.network/beam',
        },
    },
    contracts: {
        multicall3: {
            address: '0x4956f15efdc3dc16645e90cc356eafa65ffc65ec',
            blockCreated: 1,
        },
    },
});

const beamTestnet = /*#__PURE__*/ defineChain({
    id: 13337,
    name: 'Beam Testnet',
    network: 'beam',
    nativeCurrency: {
        decimals: 18,
        name: 'Beam',
        symbol: 'BEAM',
    },
    rpcUrls: {
        public: {
            http: ['https://build.onbeam.com/rpc/testnet'],
            webSocket: ['wss://build.onbeam.com/ws/testnet'],
        },
        default: {
            http: ['https://build.onbeam.com/rpc/testnet'],
            webSocket: ['wss://build.onbeam.com/ws/testnet'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Beam Explorer',
            url: 'https://subnets-test.avax.network/beam',
        },
    },
    contracts: {
        multicall3: {
            address: '0x9bf49b704ee2a095b95c1f2d4eb9010510c41c9e',
            blockCreated: 3,
        },
    },
    testnet: true,
});

const bearNetworkChainMainnet = /*#__PURE__*/ defineChain({
    id: 641230,
    name: 'Bear Network Chain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BearNetworkChain',
        symbol: 'BRNKC',
    },
    rpcUrls: {
        default: { http: ['https://brnkc-mainnet.bearnetwork.net'] },
    },
    blockExplorers: {
        default: {
            name: 'BrnkScan',
            url: 'https://brnkscan.bearnetwork.net',
            apiUrl: 'https://brnkscan.bearnetwork.net/api',
        },
    },
});

const bearNetworkChainTestnet = /*#__PURE__*/ defineChain({
    id: 751230,
    name: 'Bear Network Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tBRNKC',
        symbol: 'tBRNKC',
    },
    rpcUrls: {
        default: { http: ['https://brnkc-test.bearnetwork.net'] },
    },
    blockExplorers: {
        default: {
            name: 'BrnkTestScan',
            url: 'https://brnktest-scan.bearnetwork.net',
            apiUrl: 'https://brnktest-scan.bearnetwork.net/api',
        },
    },
    testnet: true,
});

const berachainTestnet = /*#__PURE__*/ defineChain({
    id: 80085,
    name: 'Berachain Artio',
    nativeCurrency: {
        decimals: 18,
        name: 'BERA Token',
        symbol: 'BERA',
    },
    rpcUrls: {
        default: { http: ['https://artio.rpc.berachain.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Berachain',
            url: 'https://artio.beratrail.io',
        },
    },
    testnet: true,
});

const bevmMainnet = /*#__PURE__*/ defineChain({
    id: 11501,
    name: 'BEVM Mainnet',
    nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc-mainnet-1.bevm.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Bevmscan',
            url: 'https://scan-mainnet.bevm.io',
            apiUrl: 'https://scan-mainnet-api.bevm.io/api',
        },
    },
});

const bitTorrent = /*#__PURE__*/ defineChain({
    id: 199,
    name: 'BitTorrent',
    network: 'bittorrent-chain-mainnet',
    nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.bittorrentchain.io'] },
        public: { http: ['https://rpc.bittorrentchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Bttcscan',
            url: 'https://bttcscan.com',
            apiUrl: 'https://api.bttcscan.com/api',
        },
    },
});

const bitTorrentTestnet = /*#__PURE__*/ defineChain({
    id: 1028,
    name: 'BitTorrent Chain Testnet',
    network: 'bittorrent-chain-testnet',
    nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://testrpc.bittorrentchain.io'] },
        public: { http: ['https://testrpc.bittorrentchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Bttcscan',
            url: 'https://testnet.bttcscan.com',
            apiUrl: 'https://testnet.bttcscan.com/api',
        },
    },
    testnet: true,
});

const sourceId$j = 1; // mainnet
const blast = /*#__PURE__*/ defineChain({
    id: 81457,
    name: 'Blast',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://rpc.blast.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Blastscan',
            url: 'https://blastscan.io',
            apiUrl: 'https://api.blastscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 212929,
        },
    },
    sourceId: sourceId$j,
});

const sourceId$i = 11_155_111; // sepolia
const blastSepolia = /*#__PURE__*/ defineChain({
    id: 168_587_773,
    name: 'Blast Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://sepolia.blast.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blastscan',
            url: 'https://sepolia.blastscan.io',
            apiUrl: 'https://api-sepolia.blastscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 756690,
        },
    },
    testnet: true,
    sourceId: sourceId$i,
});

const bob = defineChain({
    id: 60808,
    name: 'BOB',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.gobob.xyz'],
            webSocket: ['wss://rpc.gobob.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.gobob.xyz',
        },
    },
    contracts: {
        multicall3: {
            address: '0x63f8279bccDb75c0F38e0CD6B6A0c72a0a760FF9',
            blockCreated: 457045,
        },
    },
    testnet: false,
});

const boba = /*#__PURE__*/ defineChain({
    id: 288,
    name: 'Boba Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://mainnet.boba.network'] },
    },
    blockExplorers: {
        default: {
            name: 'BOBAScan',
            url: 'https://bobascan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 446859,
        },
    },
});

const bronos = /*#__PURE__*/ defineChain({
    id: 1039,
    name: 'Bronos',
    nativeCurrency: {
        decimals: 18,
        name: 'BRO',
        symbol: 'BRO',
    },
    rpcUrls: {
        default: { http: ['https://evm.bronos.org'] },
    },
    blockExplorers: {
        default: {
            name: 'BronoScan',
            url: 'https://broscan.bronos.org',
        },
    },
});

const bronosTestnet = /*#__PURE__*/ defineChain({
    id: 1038,
    name: 'Bronos Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Bronos Coin',
        symbol: 'tBRO',
    },
    rpcUrls: {
        default: { http: ['https://evm-testnet.bronos.org'] },
    },
    blockExplorers: {
        default: {
            name: 'BronoScan',
            url: 'https://tbroscan.bronos.org',
        },
    },
    testnet: true,
});

const bsc = /*#__PURE__*/ defineChain({
    id: 56,
    name: 'BNB Smart Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB',
    },
    rpcUrls: {
        default: { http: ['https://rpc.ankr.com/bsc'] },
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://bscscan.com',
            apiUrl: 'https://api.bscscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452,
        },
    },
});

const bscTestnet = /*#__PURE__*/ defineChain({
    id: 97,
    name: 'Binance Smart Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: { http: ['https://data-seed-prebsc-1-s1.bnbchain.org:8545'] },
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://testnet.bscscan.com',
            apiUrl: 'https://testnet.bscscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483,
        },
    },
    testnet: true,
});

const bscGreenfield = /*#__PURE__*/ defineChain({
    id: 1017,
    name: 'BNB Greenfield Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB',
    },
    rpcUrls: {
        default: { http: ['https://greenfield-chain.bnbchain.org'] },
    },
    blockExplorers: {
        default: {
            name: 'BNB Greenfield Mainnet Scan',
            url: 'https://greenfieldscan.com',
        },
    },
    testnet: false,
});

const btr = /*#__PURE__*/ defineChain({
    id: 200901,
    name: 'Bitlayer',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.bitlayer.org',
                'https://rpc.bitlayer-rpc.com',
                'https://rpc.ankr.com/bitlayer',
            ],
            webSocket: ['wss://ws.bitlayer.org', 'wss://ws.bitlayer-rpc.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'btrscan',
            url: 'https://www.btrscan.com',
            apiUrl: 'https://www.btrscan.com/apis',
        },
    },
});

const btrTestnet = /*#__PURE__*/ defineChain({
    id: 200810,
    name: 'Bitlayer Testnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.bitlayer.org'],
            webSocket: [
                'wss://testnet-ws.bitlayer.org',
                'wss://testnet-ws.bitlayer-rpc.com',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'btrscan',
            url: 'https://testnet-scan.bitlayer.org',
            apiUrl: 'https://testnet-scan.bitlayer.org/apis',
        },
    },
});

const bxn = /*#__PURE__*/ defineChain({
    id: 4999,
    name: 'BlackFort Exchange Network',
    nativeCurrency: { name: 'BlackFort Token', symbol: 'BXN', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.blackfort.network/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.blackfort.network',
            apiUrl: 'https://explorer.blackfort.network/api',
        },
    },
});

const bxnTestnet = /*#__PURE__*/ defineChain({
    id: 4777,
    name: 'BlackFort Exchange Network Testnet',
    nativeCurrency: {
        name: 'BlackFort Testnet Token',
        symbol: 'TBXN',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.blackfort.network/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet-explorer.blackfort.network',
            apiUrl: 'https://testnet-explorer.blackfort.network/api',
        },
    },
    testnet: true,
});

const canto = /*#__PURE__*/ defineChain({
    id: 7_700,
    name: 'Canto',
    nativeCurrency: {
        decimals: 18,
        name: 'Canto',
        symbol: 'CANTO',
    },
    rpcUrls: {
        default: { http: ['https://canto.gravitychain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Tuber.Build (Blockscout)',
            url: 'https://tuber.build',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2905789,
        },
    },
});

const fees = {
    /*
     * Estimates the fees per gas for a transaction.
  
     * If the transaction is to be paid in a token (feeCurrency is present) then the fees
     * are estimated in the value of the token. Otherwise falls back to the default
     * estimation by returning null.
     *
     * @param params fee estimation function parameters
     */
    estimateFeesPerGas: async (params) => {
        if (!params.request?.feeCurrency)
            return null;
        const [maxFeePerGas, maxPriorityFeePerGas] = await Promise.all([
            estimateFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
            estimateMaxPriorityFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
        ]);
        return {
            maxFeePerGas,
            maxPriorityFeePerGas,
        };
    },
};
/*
 * Estimate the fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */
async function estimateFeePerGasInFeeCurrency(client, feeCurrency) {
    const fee = await client.request({
        method: 'eth_gasPrice',
        params: [feeCurrency],
    });
    return BigInt(fee);
}
/*
 * Estimate the max priority fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */
async function estimateMaxPriorityFeePerGasInFeeCurrency(client, feeCurrency) {
    const feesPerGas = await client.request({
        method: 'eth_maxPriorityFeePerGas',
        params: [feeCurrency],
    });
    return BigInt(feesPerGas);
}

function isEmpty(value) {
    return (value === 0 ||
        value === 0n ||
        value === undefined ||
        value === null ||
        value === '0' ||
        value === '' ||
        (typeof value === 'string' &&
            ((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(value).toLowerCase() === '0x' ||
                (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(value).toLowerCase() === '0x00')));
}
function isPresent(value) {
    return !isEmpty(value);
}
function isEIP1559(transaction) {
    return (typeof transaction.maxFeePerGas !== 'undefined' &&
        typeof transaction.maxPriorityFeePerGas !== 'undefined');
}
function isCIP64(transaction) {
    /*
     * Enable end user to force the tx to be considered as a CIP-64.
     *
     * The preliminary type will be determined as "eip1559" by src/utils/transaction/getTransactionType.ts
     * and so we need the logic below to check for the specific value instead of checking if just any
     * transaction type is provided. If that's anything else than "cip64" then we need to reevaluate the
     * type based on the transaction fields.
     *
     * Modify with caution and according to https://github.com/celo-org/celo-proposals/blob/master/CIPs/cip-0064.md
     */
    if (transaction.type === 'cip64') {
        return true;
    }
    return isEIP1559(transaction) && isPresent(transaction.feeCurrency);
}

const formatters$1 = {
    block: /*#__PURE__*/ defineBlock({
        exclude: ['difficulty', 'gasLimit', 'mixHash', 'nonce', 'uncles'],
        format(args) {
            const transactions = args.transactions?.map((transaction) => {
                if (typeof transaction === 'string')
                    return transaction;
                return {
                    ...formatTransaction(transaction),
                    feeCurrency: transaction.feeCurrency,
                    ...(transaction.type !== '0x7b'
                        ? {
                            gatewayFee: transaction.gatewayFee
                                ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(transaction.gatewayFee)
                                : null,
                            gatewayFeeRecipient: transaction.gatewayFeeRecipient || null,
                        }
                        : {}),
                };
            });
            return {
                randomness: args.randomness,
                transactions,
            };
        },
    }),
    transaction: /*#__PURE__*/ defineTransaction({
        format(args) {
            const transaction = { feeCurrency: args.feeCurrency };
            if (args.type === '0x7b')
                transaction.type = 'cip64';
            else {
                if (args.type === '0x7c')
                    transaction.type = 'cip42';
                transaction.gatewayFee = args.gatewayFee
                    ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.gatewayFee)
                    : null;
                transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
            }
            return transaction;
        },
    }),
    transactionRequest: /*#__PURE__*/ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.y)({
        format(args) {
            const request = {
                feeCurrency: args.feeCurrency,
            };
            if (isCIP64(args)) {
                request.type = '0x7b';
            }
            return request;
        },
    }),
};

function serializeTransaction$1(transaction, signature) {
    if (isCIP64(transaction))
        return serializeTransactionCIP64(transaction, signature);
    return serializeTransaction$3(transaction, signature);
}
const serializers$1 = {
    transaction: serializeTransaction$1,
};
function serializeTransactionCIP64(transaction, signature) {
    assertTransactionCIP64(transaction);
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data, } = transaction;
    const serializedTransaction = [
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(chainId),
        nonce ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(nonce) : '0x',
        maxPriorityFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxFeePerGas) : '0x',
        gas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gas) : '0x',
        to ?? '0x',
        value ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) : '0x',
        data ?? '0x',
        serializeAccessList(accessList),
        feeCurrency,
        ...toYParitySignatureArray(transaction, signature),
    ];
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.u)([
        '0x7b',
        toRlp(serializedTransaction),
    ]);
}
// maxFeePerGas must be less than 2^256 - 1
const MAX_MAX_FEE_PER_GAS = 2n ** 256n - 1n;
function assertTransactionCIP64(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency, } = transaction;
    if (chainId <= 0)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.I({ chainId });
    if (to && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(to))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: to });
    if (gasPrice)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`gasPrice` is not a valid CIP-64 Transaction attribute.');
    if (isPresent(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.F({ maxFeePerGas });
    if (isPresent(maxPriorityFeePerGas) &&
        isPresent(maxFeePerGas) &&
        maxPriorityFeePerGas > maxFeePerGas)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.T({ maxFeePerGas, maxPriorityFeePerGas });
    if (isPresent(feeCurrency) && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(feeCurrency)) {
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`feeCurrency` MUST be a token address for CIP-64 transactions.');
    }
    if (isEmpty(feeCurrency)) {
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`feeCurrency` must be provided for CIP-64 transactions.');
    }
}

const chainConfig$1 = {
    formatters: formatters$1,
    serializers: serializers$1,
    fees,
};

const celo = /*#__PURE__*/ defineChain({
    ...chainConfig$1,
    id: 42_220,
    name: 'Celo',
    nativeCurrency: {
        decimals: 18,
        name: 'CELO',
        symbol: 'CELO',
    },
    rpcUrls: {
        default: { http: ['https://forno.celo.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Celo Explorer',
            url: 'https://celoscan.io',
            apiUrl: 'https://api.celoscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 13112599,
        },
    },
    testnet: false,
});

const celoAlfajores = /*#__PURE__*/ defineChain({
    ...chainConfig$1,
    id: 44_787,
    name: 'Alfajores',
    nativeCurrency: {
        decimals: 18,
        name: 'CELO',
        symbol: 'A-CELO',
    },
    rpcUrls: {
        default: {
            http: ['https://alfajores-forno.celo-testnet.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Celo Explorer',
            url: 'https://explorer.celo.org/alfajores',
            apiUrl: 'https://explorer.celo.org/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 14569001,
        },
    },
    testnet: true,
});

const chiliz = /*#__PURE__*/ defineChain({
    id: 88_888,
    name: 'Chiliz Chain',
    network: 'chiliz-chain',
    nativeCurrency: {
        decimals: 18,
        name: 'CHZ',
        symbol: 'CHZ',
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.ankr.com/chiliz',
                'https://chiliz-rpc.publicnode.com',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Chiliz Explorer',
            url: 'https://scan.chiliz.com',
            apiUrl: 'https://scan.chiliz.com/api',
        },
    },
});

const classic = /*#__PURE__*/ defineChain({
    id: 61,
    name: 'Ethereum Classic',
    nativeCurrency: {
        decimals: 18,
        name: 'ETC',
        symbol: 'ETC',
    },
    rpcUrls: {
        default: { http: ['https://etc.rivet.link'] },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.com/etc/mainnet',
        },
    },
});

const confluxESpace = /*#__PURE__*/ defineChain({
    id: 1_030,
    name: 'Conflux eSpace',
    nativeCurrency: { name: 'Conflux', symbol: 'CFX', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://evm.confluxrpc.org'],
            webSocket: ['wss://evm.confluxrpc.org/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'ConfluxScan',
            url: 'https://evm.confluxscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xEFf0078910f638cd81996cc117bccD3eDf2B072F',
            blockCreated: 68602935,
        },
    },
});

const confluxESpaceTestnet = /*#__PURE__*/ defineChain({
    id: 71,
    name: 'Conflux eSpace Testnet',
    network: 'cfx-espace-testnet',
    testnet: true,
    nativeCurrency: { name: 'Conflux', symbol: 'CFX', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://evmtestnet.confluxrpc.org'],
            webSocket: ['wss://evmtestnet.confluxrpc.org/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'ConfluxScan',
            url: 'https://evmtestnet.confluxscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xEFf0078910f638cd81996cc117bccD3eDf2B072F',
            blockCreated: 117499050,
        },
    },
});

const coreDao = /*#__PURE__*/ defineChain({
    id: 1116,
    name: 'Core Dao',
    nativeCurrency: {
        decimals: 18,
        name: 'Core',
        symbol: 'CORE',
    },
    rpcUrls: {
        default: { http: ['https://rpc.coredao.org'] },
    },
    blockExplorers: {
        default: {
            name: 'CoreDao',
            url: 'https://scan.coredao.org',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 11_907_934,
        },
    },
    testnet: false,
});

const cronos = /*#__PURE__*/ defineChain({
    id: 25,
    name: 'Cronos Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Cronos',
        symbol: 'CRO',
    },
    rpcUrls: {
        default: { http: ['https://evm.cronos.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Cronos Explorer',
            url: 'https://explorer.cronos.org',
            apiUrl: 'https://explorer-api.cronos.org/mainnet/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1963112,
        },
    },
});

const cronosTestnet = /*#__PURE__*/ defineChain({
    id: 338,
    name: 'Cronos Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'CRO',
        symbol: 'tCRO',
    },
    rpcUrls: {
        default: { http: ['https://evm-t3.cronos.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Cronos Explorer',
            url: 'https://cronos.org/explorer/testnet3',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 10191251,
        },
    },
    testnet: true,
});

const crossbell = /*#__PURE__*/ defineChain({
    id: 3_737,
    name: 'Crossbell',
    nativeCurrency: {
        decimals: 18,
        name: 'CSB',
        symbol: 'CSB',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.crossbell.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'CrossScan',
            url: 'https://scan.crossbell.io',
            apiUrl: 'https://scan.crossbell.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 38_246_031,
        },
    },
});

const cyber = /*#__PURE__*/ defineChain({
    id: 7_560,
    name: 'Cyber',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://cyber.alt.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://cyberscan.co',
            apiUrl: 'https://cyberscan.co/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0,
        },
    },
});

const cyberTestnet = /*#__PURE__*/ defineChain({
    id: 111_557_560,
    name: 'Cyber Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://cyber-testnet.alt.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet.cyberscan.co',
            apiUrl: 'https://testnet.cyberscan.co/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xffc391F0018269d4758AEA1a144772E8FB99545E',
            blockCreated: 304545,
        },
    },
    testnet: true,
});

const darwinia = /*#__PURE__*/ defineChain({
    id: 46,
    name: 'Darwinia Network',
    nativeCurrency: {
        decimals: 18,
        name: 'RING',
        symbol: 'RING',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.darwinia.network'],
            webSocket: ['wss://rpc.darwinia.network'],
        },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://darwinia.subscan.io' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 69420,
        },
    },
});

const defichainEvm = /*#__PURE__*/ defineChain({
    id: 1130,
    network: 'defichain-evm',
    name: 'DeFiChain EVM Mainnet',
    nativeCurrency: {
        name: 'DeFiChain',
        symbol: 'DFI',
        decimals: 8,
    },
    rpcUrls: {
        default: {
            http: ['https://eth.mainnet.ocean.jellyfishsdk.com'],
        },
        public: {
            http: ['https://eth.mainnet.ocean.jellyfishsdk.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DeFiScan',
            url: 'https://meta.defiscan.live',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 137852,
        },
    },
});

const defichainEvmTestnet = /*#__PURE__*/ defineChain({
    id: 1131,
    network: 'defichain-evm-testnet',
    name: 'DeFiChain EVM Testnet',
    nativeCurrency: {
        name: 'DeFiChain',
        symbol: 'DFI',
        decimals: 8,
    },
    rpcUrls: {
        default: {
            http: ['https://eth.testnet.ocean.jellyfishsdk.com'],
        },
        public: {
            http: ['https://eth.testnet.ocean.jellyfishsdk.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DeFiScan',
            url: 'https://meta.defiscan.live/?network=TestNet',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 156462,
        },
    },
    testnet: true,
});

const degen = /*#__PURE__*/ defineChain({
    id: 666666666,
    name: 'Degen',
    nativeCurrency: {
        decimals: 18,
        name: 'Degen',
        symbol: 'DEGEN',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.degen.tips'],
            webSocket: ['wss://rpc.degen.tips'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Degen Chain Explorer',
            url: 'https://explorer.degen.tips',
            apiUrl: 'https://explorer.degen.tips/api/v2',
        },
    },
});

const dfk = /*#__PURE__*/ defineChain({
    id: 53_935,
    name: 'DFK Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Jewel',
        symbol: 'JEWEL',
    },
    rpcUrls: {
        default: {
            http: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DFKSubnetScan',
            url: 'https://subnets.avax.network/defi-kingdoms',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14790551,
        },
    },
});

const dodochainTestnet = defineChain({
    id: 53457,
    name: 'DODOchain Testnet',
    nativeCurrency: { decimals: 18, name: 'DODO', symbol: 'DODO' },
    rpcUrls: {
        default: {
            http: ['https://dodochain-testnet.alt.technology'],
            webSocket: ['wss://dodochain-testnet.alt.technology/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DODOchain Testnet (Sepolia) Explorer',
            url: 'https://testnet-scan.dodochain.com',
        },
    },
    testnet: true,
});

const dogechain = /*#__PURE__*/ defineChain({
    id: 2_000,
    name: 'Dogechain',
    nativeCurrency: {
        decimals: 18,
        name: 'Dogechain',
        symbol: 'DC',
    },
    rpcUrls: {
        default: { http: ['https://rpc.dogechain.dog'] },
    },
    blockExplorers: {
        default: {
            name: 'DogeChainExplorer',
            url: 'https://explorer.dogechain.dog',
            apiUrl: 'https://explorer.dogechain.dog/api',
        },
    },
});

const dreyerxMainnet = /*#__PURE__*/ defineChain({
    id: 23451,
    name: 'DreyerX Mainnet',
    nativeCurrency: {
        name: 'DreyerX',
        symbol: 'DRX',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.dreyerx.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DreyerX Scan',
            url: 'https://scan.dreyerx.com',
        },
    },
});

const edgeless = /*#__PURE__*/ defineChain({
    id: 2_026,
    name: 'Edgeless Network',
    nativeCurrency: {
        name: 'Edgeless Wrapped ETH',
        symbol: 'EwETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.edgeless.network/http'],
            webSocket: ['wss://rpc.edgeless.network/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Edgeless Explorer',
            url: 'https://explorer.edgeless.network',
        },
    },
});

const edgelessTestnet = /*#__PURE__*/ defineChain({
    id: 202,
    name: 'Edgeless Testnet',
    nativeCurrency: {
        name: 'Edgeless Wrapped ETH',
        symbol: 'EwETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://edgeless-testnet.rpc.caldera.xyz/http'],
            webSocket: ['wss://edgeless-testnet.rpc.caldera.xyz/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Edgeless Testnet Explorer',
            url: 'https://testnet.explorer.edgeless.network',
        },
    },
});

const edgeware = /*#__PURE__*/ defineChain({
    id: 2021,
    name: 'Edgeware EdgeEVM Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Edgeware',
        symbol: 'EDG',
    },
    rpcUrls: {
        default: { http: ['https://edgeware-evm.jelliedowl.net'] },
    },
    blockExplorers: {
        default: {
            name: 'Edgscan by Bharathcoorg',
            url: 'https://edgscan.live',
            apiUrl: 'https://edgscan.live/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 18117872,
        },
    },
});

const edgewareTestnet = /*#__PURE__*/ defineChain({
    id: 2022,
    name: 'Beresheet BereEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Testnet EDG',
        symbol: 'tEDG',
    },
    rpcUrls: {
        default: { http: ['https://beresheet-evm.jelliedowl.net'] },
    },
    blockExplorers: {
        default: {
            name: 'Edgscan by Bharathcoorg',
            url: 'https://testnet.edgscan.live',
            apiUrl: 'https://testnet.edgscan.live/api',
        },
    },
});

const eon = /*#__PURE__*/ defineChain({
    id: 7_332,
    name: 'Horizen EON',
    nativeCurrency: {
        decimals: 18,
        name: 'ZEN',
        symbol: 'ZEN',
    },
    rpcUrls: {
        default: { http: ['https://eon-rpc.horizenlabs.io/ethv1'] },
    },
    blockExplorers: {
        default: {
            name: 'EON Explorer',
            url: 'https://eon-explorer.horizenlabs.io',
        },
    },
    contracts: {},
});

const eos = /*#__PURE__*/ defineChain({
    id: 17777,
    name: 'EOS EVM',
    nativeCurrency: {
        decimals: 18,
        name: 'EOS',
        symbol: 'EOS',
    },
    rpcUrls: {
        default: { http: ['https://api.evm.eosnetwork.com'] },
    },
    blockExplorers: {
        default: {
            name: 'EOS EVM Explorer',
            url: 'https://explorer.evm.eosnetwork.com',
            apiUrl: 'https://explorer.evm.eosnetwork.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7943933,
        },
    },
});

const eosTestnet = /*#__PURE__*/ defineChain({
    id: 15557,
    name: 'EOS EVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'EOS',
        symbol: 'EOS',
    },
    rpcUrls: {
        default: { http: ['https://api.testnet.evm.eosnetwork.com'] },
    },
    blockExplorers: {
        default: {
            name: 'EOS EVM Testnet Explorer',
            url: 'https://explorer.testnet.evm.eosnetwork.com',
            apiUrl: 'https://explorer.testnet.evm.eosnetwork.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 9067940,
        },
    },
    testnet: true,
});

const etherlinkTestnet = /*#__PURE__*/ defineChain({
    id: 128123,
    name: 'Etherlink Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Tez',
        symbol: 'XTZ',
    },
    rpcUrls: {
        default: { http: ['https://node.ghostnet.etherlink.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Etherlink Testnet',
            url: 'https://testnet-explorer.etherlink.com',
        },
    },
    testnet: true,
});

const evmos = /*#__PURE__*/ defineChain({
    id: 9_001,
    name: 'Evmos',
    nativeCurrency: {
        decimals: 18,
        name: 'Evmos',
        symbol: 'EVMOS',
    },
    rpcUrls: {
        default: { http: ['https://eth.bd.evmos.org:8545'] },
    },
    blockExplorers: {
        default: {
            name: 'Evmos Block Explorer',
            url: 'https://escan.live',
        },
    },
});

const evmosTestnet = /*#__PURE__*/ defineChain({
    id: 9_000,
    name: 'Evmos Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Evmos',
        symbol: 'EVMOS',
    },
    rpcUrls: {
        default: { http: ['https://eth.bd.evmos.dev:8545'] },
    },
    blockExplorers: {
        default: {
            name: 'Evmos Testnet Block Explorer',
            url: 'https://evm.evmos.dev/',
        },
    },
});

const ekta = /*#__PURE__*/ defineChain({
    id: 1994,
    name: 'Ekta',
    nativeCurrency: {
        decimals: 18,
        name: 'EKTA',
        symbol: 'EKTA',
    },
    rpcUrls: {
        default: { http: ['https://main.ekta.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Ektascan',
            url: 'https://ektascan.io',
            apiUrl: 'https://ektascan.io/api',
        },
    },
});

const ektaTestnet = /*#__PURE__*/ defineChain({
    id: 1004,
    name: 'Ekta Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'EKTA',
        symbol: 'EKTA',
    },
    rpcUrls: {
        default: { http: ['https://test.ekta.io:8545'] },
    },
    blockExplorers: {
        default: {
            name: 'Test Ektascan',
            url: 'https://test.ektascan.io',
            apiUrl: 'https://test.ektascan.io/api',
        },
    },
    testnet: true,
});

const fantom = /*#__PURE__*/ defineChain({
    id: 250,
    name: 'Fantom',
    nativeCurrency: {
        decimals: 18,
        name: 'Fantom',
        symbol: 'FTM',
    },
    rpcUrls: {
        default: { http: ['https://rpc.ankr.com/fantom'] },
    },
    blockExplorers: {
        default: {
            name: 'FTMScan',
            url: 'https://ftmscan.com',
            apiUrl: 'https://api.ftmscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 33001987,
        },
    },
});

const fantomSonicTestnet = /*#__PURE__*/ defineChain({
    id: 64_240,
    name: 'Fantom Sonic Open Testnet',
    network: 'fantom-sonic-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Fantom',
        symbol: 'FTM',
    },
    rpcUrls: {
        default: { http: ['https://rpcapi.sonic.fantom.network'] },
    },
    blockExplorers: {
        default: {
            name: 'Fantom Sonic Open Testnet Explorer',
            url: 'https://public-sonic.fantom.network',
        },
    },
    testnet: true,
});

const fantomTestnet = /*#__PURE__*/ defineChain({
    id: 4_002,
    name: 'Fantom Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Fantom',
        symbol: 'FTM',
    },
    rpcUrls: {
        default: { http: ['https://rpc.testnet.fantom.network'] },
    },
    blockExplorers: {
        default: {
            name: 'FTMScan',
            url: 'https://testnet.ftmscan.com',
            apiUrl: 'https://testnet.ftmscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 8328688,
        },
    },
});

const fibo = /*#__PURE__*/ defineChain({
    id: 12306,
    name: 'Fibo Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'fibo',
        symbol: 'FIBO',
    },
    rpcUrls: {
        default: { http: ['https://network.hzroc.art'] },
    },
    blockExplorers: {
        default: {
            name: 'FiboScan',
            url: 'https://scan.fibochain.org',
        },
    },
});

const filecoin = /*#__PURE__*/ defineChain({
    id: 314,
    name: 'Filecoin Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'filecoin',
        symbol: 'FIL',
    },
    rpcUrls: {
        default: { http: ['https://api.node.glif.io/rpc/v1'] },
    },
    blockExplorers: {
        default: {
            name: 'Filfox',
            url: 'https://filfox.info/en',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3328594,
        },
    },
});

const filecoinCalibration = /*#__PURE__*/ defineChain({
    id: 314_159,
    name: 'Filecoin Calibration',
    nativeCurrency: {
        decimals: 18,
        name: 'testnet filecoin',
        symbol: 'tFIL',
    },
    rpcUrls: {
        default: { http: ['https://api.calibration.node.glif.io/rpc/v1'] },
    },
    blockExplorers: {
        default: {
            name: 'Filscan',
            url: 'https://calibration.filscan.io',
        },
    },
    testnet: true,
});

const filecoinHyperspace = /*#__PURE__*/ defineChain({
    id: 314_1,
    name: 'Filecoin Hyperspace',
    nativeCurrency: {
        decimals: 18,
        name: 'testnet filecoin',
        symbol: 'tFIL',
    },
    rpcUrls: {
        default: { http: ['https://api.hyperspace.node.glif.io/rpc/v1'] },
    },
    blockExplorers: {
        default: {
            name: 'Filfox',
            url: 'https://hyperspace.filfox.info/en',
        },
    },
    testnet: true,
});

const flare = /*#__PURE__*/ defineChain({
    id: 14,
    name: 'Flare Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'flare',
        symbol: 'FLR',
    },
    rpcUrls: {
        default: { http: ['https://flare-api.flare.network/ext/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Flare Explorer',
            url: 'https://flare-explorer.flare.network',
            apiUrl: 'https://flare-explorer.flare.network/api',
        },
    },
});

const flareTestnet = /*#__PURE__*/ defineChain({
    id: 114,
    name: 'Coston2',
    nativeCurrency: {
        decimals: 18,
        name: 'coston2flare',
        symbol: 'C2FLR',
    },
    rpcUrls: {
        default: { http: ['https://coston2-api.flare.network/ext/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Coston2 Explorer',
            url: 'https://coston2-explorer.flare.network',
            apiUrl: 'https://coston2-explorer.flare.network/api',
        },
    },
    testnet: true,
});

const flowPreviewnet = /*#__PURE__*/ defineChain({
    id: 646,
    name: 'FlowEVM Previewnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flow',
        symbol: 'FLOW',
    },
    rpcUrls: {
        default: {
            http: ['https://previewnet.evm.nodes.onflow.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Previewnet Explorer',
            url: 'https://previewnet.flowdiver.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6205,
        },
    },
});

const flowMainnet = /*#__PURE__*/ defineChain({
    id: 747,
    name: 'FlowEVM Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flow',
        symbol: 'FLOW',
    },
    rpcUrls: {
        default: {
            http: ['https://mainnet.evm.nodes.onflow.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Mainnet Explorer',
            url: 'https://flowdiver.io',
        },
    },
});

const flowTestnet = /*#__PURE__*/ defineChain({
    id: 545,
    name: 'FlowEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flow',
        symbol: 'FLOW',
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.evm.nodes.onflow.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Flow Diver',
            url: 'https://testnet.flowdiver.io',
        },
    },
});

const foundry = /*#__PURE__*/ defineChain({
    id: 31_337,
    name: 'Foundry',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['http://127.0.0.1:8545'],
            webSocket: ['ws://127.0.0.1:8545'],
        },
    },
});

const sourceId$h = 1; // mainnet
const fraxtal = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 252,
    name: 'Fraxtal',
    nativeCurrency: { name: 'Frax Ether', symbol: 'frxETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.frax.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'fraxscan',
            url: 'https://fraxscan.com',
            apiUrl: 'https://api.fraxscan.com/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$h]: {
                address: '0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
        },
        portal: {
            [sourceId$h]: {
                address: '0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D',
                blockCreated: 19135323,
            },
        },
        l1StandardBridge: {
            [sourceId$h]: {
                address: '0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2',
                blockCreated: 19135323,
            },
        },
    },
    sourceId: sourceId$h,
});

const sourceId$g = 17000; // holesky
const fraxtalTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 2522,
    name: 'Fraxtal Testnet',
    nativeCurrency: { name: 'Frax Ether', symbol: 'frxETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.frax.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'fraxscan testnet',
            url: 'https://holesky.fraxscan.com',
            apiUrl: 'https://api-holesky.fraxscan.com/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$g]: {
                address: '0x715EA64DA13F4d0831ece4Ad3E8c1aa013167F32',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
        },
        portal: {
            [sourceId$g]: {
                address: '0xB9c64BfA498d5b9a8398Ed6f46eb76d90dE5505d',
                blockCreated: 318416,
            },
        },
        l1StandardBridge: {
            [sourceId$g]: {
                address: '0x0BaafC217162f64930909aD9f2B27125121d6332',
                blockCreated: 318416,
            },
        },
    },
    sourceId: sourceId$g,
});

const sourceId$f = 11_155_111; // sepolia
const funkiSepolia = defineChain({
    ...chainConfig$2,
    id: 3397901,
    network: 'funkiSepolia',
    name: 'Funki Sepolia Sandbox',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://funki-testnet.alt.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Funki Sepolia Sandbox Explorer',
            url: 'https://sepolia-sandbox.funkichain.com/',
        },
    },
    testnet: true,
    contracts: {
        ...chainConfig$2.contracts,
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1620204,
        },
    },
    sourceId: sourceId$f,
});

const fuse = /*#__PURE__*/ defineChain({
    id: 122,
    name: 'Fuse',
    nativeCurrency: { name: 'Fuse', symbol: 'FUSE', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fuse.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Fuse Explorer',
            url: 'https://explorer.fuse.io',
            apiUrl: 'https://explorer.fuse.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 16146628,
        },
    },
});

const fuseSparknet = /*#__PURE__*/ defineChain({
    id: 123,
    name: 'Fuse Sparknet',
    nativeCurrency: { name: 'Spark', symbol: 'SPARK', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fusespark.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Sparkent Explorer',
            url: 'https://explorer.fusespark.io',
            apiUrl: 'https://explorer.fusespark.io/api',
        },
    },
});

const iotex = /*#__PURE__*/ defineChain({
    id: 4_689,
    name: 'IoTeX',
    nativeCurrency: {
        decimals: 18,
        name: 'IoTeX',
        symbol: 'IOTX',
    },
    rpcUrls: {
        default: {
            http: ['https://babel-api.mainnet.iotex.io'],
            webSocket: ['wss://babel-api.mainnet.iotex.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'IoTeXScan',
            url: 'https://iotexscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 22163670,
        },
    },
});

const iotexTestnet = /*#__PURE__*/ defineChain({
    id: 4_690,
    name: 'IoTeX Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'IoTeX',
        symbol: 'IOTX',
    },
    rpcUrls: {
        default: {
            http: ['https://babel-api.testnet.iotex.io'],
            webSocket: ['wss://babel-api.testnet.iotex.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'IoTeXScan',
            url: 'https://testnet.iotexscan.io',
        },
    },
    testnet: true,
});

const jbc = /*#__PURE__*/ defineChain({
    id: 8899,
    name: 'JIBCHAIN L1',
    network: 'jbc',
    nativeCurrency: { name: 'JBC', symbol: 'JBC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-l1.jibchain.net'],
        },
        public: {
            http: ['https://rpc-l1.jibchain.net'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp-l1.jibchain.net',
            apiUrl: 'https://exp-l1.jibchain.net/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC',
            blockCreated: 2299048,
        },
    },
    testnet: false,
});

const jbcTestnet = /*#__PURE__*/ defineChain({
    id: 88991,
    name: 'Jibchain Testnet',
    nativeCurrency: { name: 'tJBC', symbol: 'tJBC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.jibchain.net'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp.testnet.jibchain.net',
            apiUrl: 'https://exp.testnet.jibchain.net/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xa1a858ad9041B4741e620355a3F96B3c78e70ecE',
            blockCreated: 32848,
        },
    },
    testnet: true,
});

const karura = /*#__PURE__*/ defineChain({
    id: 686,
    name: 'Karura',
    network: 'karura',
    nativeCurrency: {
        name: 'Karura',
        symbol: 'KAR',
        decimals: 18,
    },
    rpcUrls: {
        public: {
            http: ['https://eth-rpc-karura.aca-api.network'],
            webSocket: ['wss://eth-rpc-karura.aca-api.network'],
        },
        default: {
            http: ['https://eth-rpc-karura.aca-api.network'],
            webSocket: ['wss://eth-rpc-karura.aca-api.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Karura Blockscout',
            url: 'https://blockscout.karura.network',
            apiUrl: 'https://blockscout.karura.network/api',
        },
    },
    testnet: false,
});

const gobi = /*#__PURE__*/ defineChain({
    id: 1_663,
    name: 'Horizen Gobi Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Test ZEN',
        symbol: 'tZEN',
    },
    rpcUrls: {
        default: { http: ['https://gobi-testnet.horizenlabs.io/ethv1'] },
    },
    blockExplorers: {
        default: {
            name: 'Gobi Explorer',
            url: 'https://gobi-explorer.horizen.io',
        },
    },
    contracts: {},
    testnet: true,
});

const goerli = /*#__PURE__*/ defineChain({
    id: 5,
    name: 'Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/eth_goerli'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli.etherscan.io',
            apiUrl: 'https://api-goerli.etherscan.io/api',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1',
            blockCreated: 10_339_206,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6507670,
        },
    },
    testnet: true,
});

const gnosis = /*#__PURE__*/ defineChain({
    id: 100,
    name: 'Gnosis',
    nativeCurrency: {
        decimals: 18,
        name: 'Gnosis',
        symbol: 'xDAI',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.gnosischain.com'],
            webSocket: ['wss://rpc.gnosischain.com/wss'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Gnosisscan',
            url: 'https://gnosisscan.io',
            apiUrl: 'https://api.gnosisscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 21022491,
        },
    },
});

const gnosisChiado = /*#__PURE__*/ defineChain({
    id: 10_200,
    name: 'Gnosis Chiado',
    nativeCurrency: {
        decimals: 18,
        name: 'Gnosis',
        symbol: 'xDAI',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.chiadochain.net'],
            webSocket: ['wss://rpc.chiadochain.net/wss'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.chiadochain.net',
            apiUrl: 'https://blockscout.chiadochain.net/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 4967313,
        },
    },
    testnet: true,
});

const hardhat = /*#__PURE__*/ defineChain({
    id: 31_337,
    name: 'Hardhat',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['http://127.0.0.1:8545'] },
    },
});

const harmonyOne = /*#__PURE__*/ defineChain({
    id: 1_666_600_000,
    name: 'Harmony One',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://rpc.ankr.com/harmony'] },
    },
    blockExplorers: {
        default: {
            name: 'Harmony Explorer',
            url: 'https://explorer.harmony.one',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 24185753,
        },
    },
});

const haqqMainnet = /*#__PURE__*/ defineChain({
    id: 11235,
    name: 'HAQQ Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Islamic Coin',
        symbol: 'ISLM',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.eth.haqq.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'HAQQ Explorer',
            url: 'https://explorer.haqq.network',
            apiUrl: 'https://explorer.haqq.network/api',
        },
    },
});

const haqqTestedge2 = /*#__PURE__*/ defineChain({
    id: 54211,
    name: 'HAQQ Testedge 2',
    nativeCurrency: {
        decimals: 18,
        name: 'Islamic Coin',
        symbol: 'ISLMT',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.eth.testedge2.haqq.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'HAQQ Explorer',
            url: 'https://explorer.testedge2.haqq.network',
            apiUrl: 'https://explorer.testedge2.haqq.network/api',
        },
    },
});

const hedera = /*#__PURE__*/ defineChain({
    id: 295,
    name: 'Hedera Mainnet',
    network: 'hedera-mainnet',
    nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://mainnet.hashio.io/api'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Hashscan',
            url: 'https://hashscan.io/mainnet',
        },
    },
    testnet: false,
});

const hederaTestnet = /*#__PURE__*/ defineChain({
    id: 296,
    name: 'Hedera Testnet',
    network: 'hedera-testnet',
    nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.hashio.io/api'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Hashscan',
            url: 'https://hashscan.io/testnet',
        },
    },
    testnet: true,
});

const hederaPreviewnet = /*#__PURE__*/ defineChain({
    id: 297,
    name: 'Hedera Previewnet',
    network: 'hedera-previewnet',
    nativeCurrency: {
        symbol: 'HBAR',
        name: 'HBAR',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://previewnet.hashio.io/api'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Hashscan',
            url: 'https://hashscan.io/previewnet',
        },
    },
    testnet: true,
});

const holesky = /*#__PURE__*/ defineChain({
    id: 17000,
    name: 'Holesky',
    nativeCurrency: { name: 'Holesky Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://ethereum-holesky-rpc.publicnode.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://holesky.etherscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 77,
        },
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            blockCreated: 801613,
        },
        ensUniversalResolver: {
            address: '0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b',
            blockCreated: 973484,
        },
    },
    testnet: true,
});

const immutableZkEvm = /*#__PURE__*/ defineChain({
    id: 13371,
    name: 'Immutable zkEVM',
    nativeCurrency: {
        decimals: 18,
        name: 'Immutable Coin',
        symbol: 'IMX',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.immutable.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Immutable Explorer',
            url: 'https://explorer.immutable.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0x236bdA4589e44e6850f5aC6a74BfCa398a86c6c0',
            blockCreated: 4335972,
        },
    },
});

const immutableZkEvmTestnet = /*#__PURE__*/ defineChain({
    id: 13473,
    name: 'Immutable zkEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Immutable Coin',
        symbol: 'IMX',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.immutable.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Immutable Testnet Explorer',
            url: 'https://explorer.testnet.immutable.com/',
        },
    },
    contracts: {
        multicall3: {
            address: '0x2CC787Ed364600B0222361C4188308Fa8E68bA60',
            blockCreated: 5977391,
        },
    },
    testnet: true,
});

const inEVM = /*#__PURE__*/ defineChain({
    id: 2525,
    name: 'inEVM Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Injective',
        symbol: 'INJ',
    },
    rpcUrls: {
        default: { http: ['https://mainnet.rpc.inevm.com/http'] },
    },
    blockExplorers: {
        default: {
            name: 'inEVM Explorer',
            url: 'https://inevm.calderaexplorer.xyz',
            apiUrl: 'https://inevm.calderaexplorer.xyz/api/v2',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 118606,
        },
    },
});

const kakarotSepolia = /*#__PURE__*/ defineChain({
    id: 107107114116,
    name: 'Kakarot Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://sepolia-rpc.kakarot.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Kakarot Scan',
            url: 'https://sepolia.kakarotscan.org',
        },
    },
    testnet: true,
});

const kava = /*#__PURE__*/ defineChain({
    id: 2222,
    name: 'Kava EVM',
    network: 'kava-mainnet',
    nativeCurrency: {
        name: 'Kava',
        symbol: 'KAVA',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://evm.kava.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Kava EVM Explorer',
            url: 'https://kavascan.com',
            apiUrl: 'https://kavascan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3661165,
        },
    },
    testnet: false,
});

const kavaTestnet = /*#__PURE__*/ defineChain({
    id: 2221,
    name: 'Kava EVM Testnet',
    network: 'kava-testnet',
    nativeCurrency: {
        name: 'Kava',
        symbol: 'KAVA',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://evm.testnet.kava.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Kava EVM Testnet Explorer',
            url: 'https://testnet.kavascan.com/',
            apiUrl: 'https://testnet.kavascan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6',
            blockCreated: 7242179,
        },
    },
    testnet: true,
});

const kcc = /*#__PURE__*/ defineChain({
    id: 321,
    name: 'KCC Mainnet',
    network: 'KCC Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'KCS',
        symbol: 'KCS',
    },
    rpcUrls: {
        default: {
            http: ['https://kcc-rpc.com'],
        },
        public: {
            http: ['https://kcc-rpc.com'],
        },
    },
    blockExplorers: {
        default: { name: 'KCC Explorer', url: 'https://explorer.kcc.io' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 11760430,
        },
    },
    testnet: false,
});

const klaytn = /*#__PURE__*/ defineChain({
    id: 8_217,
    name: 'Klaytn',
    nativeCurrency: {
        decimals: 18,
        name: 'Klaytn',
        symbol: 'KLAY',
    },
    rpcUrls: {
        default: { http: ['https://public-en-cypress.klaytn.net'] },
    },
    blockExplorers: {
        default: {
            name: 'KlaytnScope',
            url: 'https://scope.klaytn.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 96002415,
        },
    },
});

const klaytnBaobab = /*#__PURE__*/ defineChain({
    id: 1_001,
    name: 'Klaytn Baobab Testnet',
    network: 'klaytn-baobab',
    nativeCurrency: {
        decimals: 18,
        name: 'Baobab Klaytn',
        symbol: 'KLAY',
    },
    rpcUrls: {
        default: { http: ['https://public-en-baobab.klaytn.net'] },
    },
    blockExplorers: {
        default: {
            name: 'KlaytnScope',
            url: 'https://baobab.klaytnscope.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 123390593,
        },
    },
    testnet: true,
});

const kroma = /*#__PURE__*/ defineChain({
    id: 255,
    name: 'Kroma',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://api.kroma.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Kroma Explorer',
            url: 'https://blockscout.kroma.network',
            apiUrl: 'https://blockscout.kroma.network/api',
        },
    },
    testnet: false,
});

const kromaSepolia = /*#__PURE__*/ defineChain({
    id: 2358,
    name: 'Kroma Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://api.sepolia.kroma.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Kroma Sepolia Explorer',
            url: 'https://blockscout.sepolia.kroma.network',
            apiUrl: 'https://blockscout.sepolia.kroma.network/api',
        },
    },
    testnet: true,
});

const l3x = /*#__PURE__*/ defineChain({
    id: 12324,
    name: 'L3X Protocol',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-mainnet.l3x.com'],
            webSocket: ['wss://rpc-mainnet.l3x.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'L3X Mainnet Explorer',
            url: 'https://explorer.l3x.com',
            apiUrl: 'https://explorer.l3x.com/api/v2',
        },
    },
    testnet: false,
});

const l3xTestnet = /*#__PURE__*/ defineChain({
    id: 12325,
    name: 'L3X Protocol Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-testnet.l3x.com'],
            webSocket: ['wss://rpc-testnet.l3x.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'L3X Testnet Explorer',
            url: 'https://explorer-testnet.l3x.com',
            apiUrl: 'https://explorer-testnet.l3x.com/api/v2',
        },
    },
    testnet: true,
});

const lightlinkPegasus = /*#__PURE__*/ defineChain({
    id: 1_891,
    name: 'LightLink Pegasus Testnet',
    network: 'lightlink-pegasus',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://replicator.pegasus.lightlink.io/rpc/v1'],
        },
    },
    blockExplorers: {
        default: {
            name: 'LightLink Pegasus Explorer',
            url: 'https://pegasus.lightlink.io',
        },
    },
    testnet: true,
});

const lightlinkPhoenix = /*#__PURE__*/ defineChain({
    id: 1_890,
    name: 'LightLink Phoenix Mainnet',
    network: 'lightlink-phoenix',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://replicator.phoenix.lightlink.io/rpc/v1'],
        },
    },
    blockExplorers: {
        default: {
            name: 'LightLink Phoenix Explorer',
            url: 'https://phoenix.lightlink.io',
        },
    },
    testnet: false,
});

const linea = /*#__PURE__*/ defineChain({
    id: 59_144,
    name: 'Linea Mainnet',
    nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.linea.build'],
            webSocket: ['wss://rpc.linea.build'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://lineascan.build',
            apiUrl: 'https://api.lineascan.build/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 42,
        },
    },
    testnet: false,
});

const lineaGoerli = /*#__PURE__*/ defineChain({
    id: 59_140,
    name: 'Linea Goerli Testnet',
    nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.goerli.linea.build'],
            webSocket: ['wss://rpc.goerli.linea.build'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli.lineascan.build',
            apiUrl: 'https://api-goerli.lineascan.build/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 498623,
        },
    },
    testnet: true,
});

const lineaSepolia = /*#__PURE__*/ defineChain({
    id: 59_141,
    name: 'Linea Sepolia Testnet',
    nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.sepolia.linea.build'],
            webSocket: ['wss://rpc.sepolia.linea.build'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia.lineascan.build',
            apiUrl: 'https://api-sepolia.lineascan.build/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 227427,
        },
    },
    testnet: true,
});

const lineaTestnet = /*#__PURE__*/ defineChain({
    id: 59_140,
    name: 'Linea Goerli Testnet',
    nativeCurrency: { name: 'Linea Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.goerli.linea.build'],
            webSocket: ['wss://rpc.goerli.linea.build'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli.lineascan.build',
            apiUrl: 'https://goerli.lineascan.build/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 498623,
        },
    },
    testnet: true,
});

const maxUint16 = 2n ** 16n - 1n;

const gasPerPubdataDefault = 50000n;
const maxBytecodeSize = maxUint16 * 32n;

const formatters = {
    block: /*#__PURE__*/ defineBlock({
        format(args) {
            const transactions = args.transactions?.map((transaction) => {
                if (typeof transaction === 'string')
                    return transaction;
                const formatted = formatters.transaction?.format(transaction);
                if (formatted.typeHex === '0x71')
                    formatted.type = 'eip712';
                else if (formatted.typeHex === '0xff')
                    formatted.type = 'priority';
                return formatted;
            });
            return {
                l1BatchNumber: args.l1BatchNumber
                    ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1BatchNumber)
                    : null,
                l1BatchTimestamp: args.l1BatchTimestamp
                    ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1BatchTimestamp)
                    : null,
                transactions,
            };
        },
    }),
    transaction: /*#__PURE__*/ defineTransaction({
        format(args) {
            const transaction = {};
            if (args.type === '0x71')
                transaction.type = 'eip712';
            else if (args.type === '0xff')
                transaction.type = 'priority';
            return {
                ...transaction,
                l1BatchNumber: args.l1BatchNumber
                    ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1BatchNumber)
                    : null,
                l1BatchTxIndex: args.l1BatchTxIndex
                    ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1BatchTxIndex)
                    : null,
            };
        },
    }),
    transactionReceipt: /*#__PURE__*/ defineTransactionReceipt({
        format(args) {
            return {
                l1BatchNumber: args.l1BatchNumber
                    ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1BatchNumber)
                    : null,
                l1BatchTxIndex: args.l1BatchTxIndex
                    ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(args.l1BatchTxIndex)
                    : null,
                logs: args.logs.map((log) => {
                    return {
                        ...formatLog(log),
                        l1BatchNumber: log.l1BatchNumber
                            ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(log.l1BatchNumber)
                            : null,
                        transactionLogIndex: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.h)(log.transactionLogIndex),
                        logType: log.logType,
                    };
                }),
                l2ToL1Logs: args.l2ToL1Logs.map((l2ToL1Log) => {
                    return {
                        blockNumber: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(l2ToL1Log.blockHash),
                        blockHash: l2ToL1Log.blockHash,
                        l1BatchNumber: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(l2ToL1Log.l1BatchNumber),
                        transactionIndex: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(l2ToL1Log.transactionIndex),
                        shardId: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(l2ToL1Log.shardId),
                        isService: l2ToL1Log.isService,
                        sender: l2ToL1Log.sender,
                        key: l2ToL1Log.key,
                        value: l2ToL1Log.value,
                        transactionHash: l2ToL1Log.transactionHash,
                        logIndex: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(l2ToL1Log.logIndex),
                    };
                }),
            };
        },
    }),
    transactionRequest: /*#__PURE__*/ (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.y)({
        exclude: [
            'customSignature',
            'factoryDeps',
            'gasPerPubdata',
            'paymaster',
            'paymasterInput',
        ],
        format(args) {
            if (args.gasPerPubdata ||
                (args.paymaster && args.paymasterInput) ||
                args.factoryDeps ||
                args.customSignature)
                return {
                    eip712Meta: {
                        ...(args.gasPerPubdata
                            ? { gasPerPubdata: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(args.gasPerPubdata) }
                            : { gasPerPubdata: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gasPerPubdataDefault) }),
                        ...(args.paymaster && args.paymasterInput
                            ? {
                                paymasterParams: {
                                    paymaster: args.paymaster,
                                    paymasterInput: Array.from((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(args.paymasterInput)),
                                },
                            }
                            : {}),
                        ...(args.factoryDeps
                            ? {
                                factoryDeps: args.factoryDeps.map((dep) => Array.from((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(dep))),
                            }
                            : {}),
                        ...(args.customSignature
                            ? {
                                customSignature: Array.from((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(args.customSignature)),
                            }
                            : {}),
                    },
                    type: '0x71',
                };
            return {};
        },
    }),
};

class InvalidEip712TransactionError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super([
            'Transaction is not an EIP712 transaction.',
            '',
            'Transaction must:',
            '  - include `type: "eip712"`',
            '  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`',
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidEip712TransactionError'
        });
    }
}

function isEIP712Transaction(transaction) {
    if (transaction.type === 'eip712')
        return true;
    if (('customSignature' in transaction && transaction.customSignature) ||
        ('paymaster' in transaction && transaction.paymaster) ||
        ('paymasterInput' in transaction && transaction.paymasterInput) ||
        ('gasPerPubdata' in transaction &&
            typeof transaction.gasPerPubdata === 'bigint') ||
        ('factoryDeps' in transaction && transaction.factoryDeps))
        return true;
    return false;
}

function assertEip712Transaction(transaction) {
    const { chainId, to, from, paymaster, paymasterInput } = transaction;
    if (!isEIP712Transaction(transaction))
        throw new InvalidEip712TransactionError();
    if (!chainId || chainId <= 0)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.I({ chainId });
    if (to && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(to))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: to });
    if (from && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(from))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: from });
    if (paymaster && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(paymaster))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: paymaster });
    if (paymaster && !paymasterInput) {
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`paymasterInput` must be provided when `paymaster` is defined');
    }
    if (!paymaster && paymasterInput) {
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('`paymaster` must be provided when `paymasterInput` is defined');
    }
}

function serializeTransaction(transaction, signature) {
    if (isEIP712Transaction(transaction))
        return serializeTransactionEIP712(transaction);
    return serializeTransaction$3(transaction, signature);
}
const serializers = {
    transaction: serializeTransaction,
};
function serializeTransactionEIP712(transaction) {
    const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data, } = transaction;
    assertEip712Transaction(transaction);
    const serializedTransaction = [
        nonce ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(nonce) : '0x',
        maxPriorityFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxFeePerGas) : '0x',
        gas ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gas) : '0x',
        to ?? '0x',
        value ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) : '0x',
        data ?? '0x0',
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(chainId),
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(''),
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(''),
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(chainId),
        from ?? '0x',
        gasPerPubdata ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gasPerPubdata) : (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(gasPerPubdataDefault),
        factoryDeps ?? [],
        customSignature ?? '0x', // EIP712 signature
        paymaster && paymasterInput ? [paymaster, paymasterInput] : [],
    ];
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.u)([
        '0x71',
        toRlp(serializedTransaction),
    ]);
}

class BytecodeLengthExceedsMaxSizeError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ givenLength, maxBytecodeSize, }) {
        super(`Bytecode cannot be longer than ${maxBytecodeSize} bytes. Given length: ${givenLength}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BytecodeLengthExceedsMaxSizeError'
        });
    }
}
class BytecodeLengthInWordsMustBeOddError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ givenLengthInWords }) {
        super(`Bytecode length in 32-byte words must be odd. Given length in words: ${givenLengthInWords}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BytecodeLengthInWordsMustBeOddError'
        });
    }
}
class BytecodeLengthMustBeDivisibleBy32Error extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ givenLength }) {
        super(`The bytecode length in bytes must be divisible by 32. Given length: ${givenLength}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BytecodeLengthMustBeDivisibleBy32Error'
        });
    }
}

function hashBytecode(bytecode) {
    const bytecodeBytes = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.j)(bytecode);
    if (bytecodeBytes.length % 32 !== 0)
        throw new BytecodeLengthMustBeDivisibleBy32Error({
            givenLength: bytecodeBytes.length,
        });
    if (bytecodeBytes.length > maxBytecodeSize)
        throw new BytecodeLengthExceedsMaxSizeError({
            givenLength: bytecodeBytes.length,
            maxBytecodeSize,
        });
    const hashStr = sha256(bytecodeBytes);
    const hash = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.j)(hashStr);
    // Note that the length of the bytecode
    // should be provided in 32-byte words.
    const bytecodeLengthInWords = bytecodeBytes.length / 32;
    if (bytecodeLengthInWords % 2 === 0) {
        throw new BytecodeLengthInWordsMustBeOddError({
            givenLengthInWords: bytecodeLengthInWords,
        });
    }
    const bytecodeLength = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.j)(bytecodeLengthInWords);
    // The bytecode should always take the first 2 bytes of the bytecode hash,
    // so we pad it from the left in case the length is smaller than 2 bytes.
    const bytecodeLengthPadded = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.z)(bytecodeLength, { size: 2 });
    const codeHashVersion = new Uint8Array([1, 0]);
    hash.set(codeHashVersion, 0);
    hash.set(bytecodeLengthPadded, 2);
    return hash;
}

const getEip712Domain = (transaction) => {
    assertEip712Transaction(transaction);
    const message = transactionToMessage(transaction);
    return {
        domain: {
            name: 'zkSync',
            version: '2',
            chainId: transaction.chainId,
        },
        types: {
            Transaction: [
                { name: 'txType', type: 'uint256' },
                { name: 'from', type: 'uint256' },
                { name: 'to', type: 'uint256' },
                { name: 'gasLimit', type: 'uint256' },
                { name: 'gasPerPubdataByteLimit', type: 'uint256' },
                { name: 'maxFeePerGas', type: 'uint256' },
                { name: 'maxPriorityFeePerGas', type: 'uint256' },
                { name: 'paymaster', type: 'uint256' },
                { name: 'nonce', type: 'uint256' },
                { name: 'value', type: 'uint256' },
                { name: 'data', type: 'bytes' },
                { name: 'factoryDeps', type: 'bytes32[]' },
                { name: 'paymasterInput', type: 'bytes' },
            ],
        },
        primaryType: 'Transaction',
        message: message,
    };
};
//////////////////////////////////////////////////////////////////////////////
// Utilities
function transactionToMessage(transaction) {
    const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data, } = transaction;
    return {
        txType: 113n,
        from: BigInt(from),
        to: to ? BigInt(to) : 0n,
        gasLimit: gas ?? 0n,
        gasPerPubdataByteLimit: gasPerPubdata ?? gasPerPubdataDefault,
        maxFeePerGas: maxFeePerGas ?? 0n,
        maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
        paymaster: paymaster ? BigInt(paymaster) : 0n,
        nonce: nonce ? BigInt(nonce) : 0n,
        value: value ?? 0n,
        data: data ? data : '0x0',
        factoryDeps: factoryDeps?.map((dep) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(hashBytecode(dep))) ?? [],
        paymasterInput: paymasterInput ? paymasterInput : '0x',
    };
}

const chainConfig = {
    formatters,
    serializers,
    custom: {
        getEip712Domain,
    },
};

const lisk = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 1135,
    name: 'Lisk',
    network: 'lisk',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.api.lisk.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.lisk.com',
            apiUrl: 'https://blockscout.lisk.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0',
        },
    },
});

const sourceId$e = 11_155_111; // sepolia
const liskSepolia = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 4202,
    network: 'lisk-sepolia',
    name: 'Lisk Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.sepolia-api.lisk.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepolia-blockscout.lisk.com',
            apiUrl: 'https://sepolia-blockscout.lisk.com/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$e]: {
                address: '0xA0E35F56C318DE1bD5D9ca6A94Fe7e37C5663348',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
        },
        portal: {
            [sourceId$e]: {
                address: '0xe3d90F21490686Ec7eF37BE788E02dfC12787264',
            },
        },
        l1StandardBridge: {
            [sourceId$e]: {
                address: '0x1Fb30e446eA791cd1f011675E5F3f5311b70faF5',
            },
        },
    },
    testnet: true,
    sourceId: sourceId$e,
});

const localhost = /*#__PURE__*/ defineChain({
    id: 1_337,
    name: 'Localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['http://127.0.0.1:8545'] },
    },
});

const lukso = /*#__PURE__*/ defineChain({
    id: 42,
    network: 'lukso',
    name: 'LUKSO',
    nativeCurrency: {
        name: 'LUKSO',
        symbol: 'LYX',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.mainnet.lukso.network'],
            webSocket: ['wss://ws-rpc.mainnet.lukso.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'LUKSO Mainnet Explorer',
            url: 'https://explorer.execution.mainnet.lukso.network',
            apiUrl: 'https://api.explorer.execution.mainnet.lukso.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 468183,
        },
    },
});

const luksoTestnet = /*#__PURE__*/ defineChain({
    id: 4201,
    name: 'LUKSO Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'LUKSO Testnet',
        symbol: 'LYXt',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.lukso.network'],
            webSocket: ['wss://ws-rpc.testnet.lukso.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'LUKSO Testnet Explorer',
            url: 'https://explorer.execution.testnet.lukso.network',
            apiUrl: 'https://api.explorer.execution.testnet.lukso.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 605348,
        },
    },
    testnet: true,
});

const mainnet = /*#__PURE__*/ defineChain({
    id: 1,
    name: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://cloudflare-eth.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
            blockCreated: 19_258_213,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14_353_601,
        },
    },
});

const mandala = /*#__PURE__*/ defineChain({
    id: 595,
    name: 'Mandala TC9',
    network: 'mandala',
    nativeCurrency: {
        name: 'Mandala',
        symbol: 'mACA',
        decimals: 18,
    },
    rpcUrls: {
        public: {
            http: ['https://eth-rpc-tc9.aca-staging.network'],
            webSocket: ['wss://eth-rpc-tc9.aca-staging.network'],
        },
        default: {
            http: ['https://eth-rpc-tc9.aca-staging.network'],
            webSocket: ['wss://eth-rpc-tc9.aca-staging.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Mandala Blockscout',
            url: 'https://blockscout.mandala.aca-staging.network',
            apiUrl: 'https://blockscout.mandala.aca-staging.network/api',
        },
    },
    testnet: true,
});

const manta = /*#__PURE__*/ defineChain({
    id: 169,
    name: 'Manta Pacific Mainnet',
    network: 'manta',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://pacific-rpc.manta.network/http'] },
    },
    blockExplorers: {
        default: {
            name: 'Manta Explorer',
            url: 'https://pacific-explorer.manta.network',
            apiUrl: 'https://pacific-explorer.manta.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 332890,
        },
    },
});

const mantaSepoliaTestnet = /*#__PURE__*/ defineChain({
    id: 3_441_006,
    name: 'Manta Pacific Sepolia Testnet',
    network: 'manta-sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://pacific-rpc.sepolia-testnet.manta.network/http'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Manta Sepolia Testnet Explorer',
            url: 'https://pacific-explorer.sepolia-testnet.manta.network',
            apiUrl: 'https://pacific-explorer.sepolia-testnet.manta.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca54918f7B525C8df894668846506767412b53E3',
            blockCreated: 479584,
        },
    },
    testnet: true,
});

const mantaTestnet = /*#__PURE__*/ defineChain({
    id: 3_441_005,
    name: 'Manta Pacific Testnet',
    network: 'manta-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://manta-testnet.calderachain.xyz/http'] },
    },
    blockExplorers: {
        default: {
            name: 'Manta Testnet Explorer',
            url: 'https://pacific-explorer.testnet.manta.network',
            apiUrl: 'https://pacific-explorer.testnet.manta.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C',
            blockCreated: 419915,
        },
    },
    testnet: true,
});

const mantle = /*#__PURE__*/ defineChain({
    id: 5000,
    name: 'Mantle',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT',
    },
    rpcUrls: {
        default: { http: ['https://rpc.mantle.xyz'] },
    },
    blockExplorers: {
        default: {
            name: 'Mantle Explorer',
            url: 'https://mantlescan.xyz/',
            apiUrl: 'https://api.mantlescan.xyz/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 304717,
        },
    },
});

const mantleSepoliaTestnet = /*#__PURE__*/ defineChain({
    id: 5003,
    name: 'Mantle Sepolia Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT',
    },
    rpcUrls: {
        default: { http: ['https://rpc.sepolia.mantle.xyz'] },
    },
    blockExplorers: {
        default: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.sepolia.mantle.xyz/',
            apiUrl: 'https://explorer.sepolia.mantle.xyz/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 4584012,
        },
    },
    testnet: true,
});

const mantleTestnet = /*#__PURE__*/ defineChain({
    id: 5001,
    name: 'Mantle Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT',
    },
    rpcUrls: {
        default: { http: ['https://rpc.testnet.mantle.xyz'] },
    },
    blockExplorers: {
        default: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.testnet.mantle.xyz',
            apiUrl: 'https://explorer.testnet.mantle.xyz/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 561333,
        },
    },
    testnet: true,
});

const merlin = /*#__PURE__*/ defineChain({
    id: 4200,
    name: 'Merlin',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://rpc.merlinchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://scan.merlinchain.io',
            apiUrl: 'https://scan.merlinchain.io/api',
        },
    },
});

const metachain = /*#__PURE__*/ defineChain({
    id: 571,
    name: 'MetaChain Mainnet',
    nativeCurrency: { name: 'Metatime Coin', symbol: 'MTC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.metatime.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'MetaExplorer',
            url: 'https://explorer.metatime.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0x0000000000000000000000000000000000003001',
            blockCreated: 0,
        },
    },
});

const metachainIstanbul = /*#__PURE__*/ defineChain({
    id: 1_453,
    name: 'MetaChain Istanbul',
    nativeCurrency: { name: 'Metatime Coin', symbol: 'MTC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://istanbul-rpc.metachain.dev'],
        },
    },
    blockExplorers: {
        default: {
            name: 'MetaExplorer',
            url: 'https://istanbul-explorer.metachain.dev',
        },
    },
    contracts: {
        multicall3: {
            address: '0x0000000000000000000000000000000000003001',
            blockCreated: 0,
        },
    },
    testnet: true,
});

const sourceId$d = 1; // mainnet
const metalL2 = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 1750,
    name: 'Metal L2',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.metall2.com'],
            webSocket: ['wss://rpc.metall2.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.metall2.com',
            apiUrl: 'https://explorer.metall2.com/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$d]: {
                address: '0x3B1F7aDa0Fcc26B13515af752Dd07fB1CAc11426',
            },
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0,
        },
        portal: {
            [sourceId$d]: {
                address: '0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956',
            },
        },
        l1StandardBridge: {
            [sourceId$d]: {
                address: '0x6d0f65D59b55B0FEC5d2d15365154DcADC140BF3',
            },
        },
    },
    sourceId: sourceId$d,
});

const meter = /*#__PURE__*/ defineChain({
    id: 82,
    name: 'Meter',
    nativeCurrency: {
        decimals: 18,
        name: 'MTR',
        symbol: 'MTR',
    },
    rpcUrls: {
        default: { http: ['https://rpc.meter.io'] },
    },
    blockExplorers: {
        default: {
            name: 'MeterScan',
            url: 'https://scan.meter.io',
        },
    },
});

const meterTestnet = /*#__PURE__*/ defineChain({
    id: 83,
    name: 'Meter Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MTR',
        symbol: 'MTR',
    },
    rpcUrls: {
        default: { http: ['https://rpctest.meter.io'] },
    },
    blockExplorers: {
        default: {
            name: 'MeterTestnetScan',
            url: 'https://scan-warringstakes.meter.io',
        },
    },
});

const metis = /*#__PURE__*/ defineChain({
    id: 1_088,
    name: 'Metis',
    nativeCurrency: {
        decimals: 18,
        name: 'Metis',
        symbol: 'METIS',
    },
    rpcUrls: {
        default: { http: ['https://andromeda.metis.io/?owner=1088'] },
    },
    blockExplorers: {
        default: {
            name: 'Metis Explorer',
            url: 'https://explorer.metis.io',
            apiUrl: 'https://api.routescan.io/v2/network/mainnet/evm/43114/etherscan/api',
        },
        blockscout: {
            name: 'Andromeda Explorer',
            url: 'https://andromeda-explorer.metis.io',
            apiUrl: 'https://andromeda-explorer.metis.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2338552,
        },
    },
});

const metisGoerli = /*#__PURE__*/ defineChain({
    id: 599,
    name: 'Metis Goerli',
    nativeCurrency: {
        decimals: 18,
        name: 'Metis Goerli',
        symbol: 'METIS',
    },
    rpcUrls: {
        default: { http: ['https://goerli.gateway.metisdevops.link'] },
    },
    blockExplorers: {
        default: {
            name: 'Metis Goerli Explorer',
            url: 'https://goerli.explorer.metisdevops.link',
            apiUrl: 'https://goerli.explorer.metisdevops.link/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1006207,
        },
    },
});

const mev = /*#__PURE__*/ defineChain({
    id: 7518,
    name: 'MEVerse Chain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MEVerse',
        symbol: 'MEV',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.meversemainnet.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://www.meversescan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 86881340,
        },
    },
});

const mevTestnet = /*#__PURE__*/ defineChain({
    id: 4759,
    name: 'MEVerse Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MEVerse',
        symbol: 'MEV',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.meversetestnet.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://testnet.meversescan.io/',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 64371115,
        },
    },
    testnet: true,
});

const mintSepoliaTestnet = /*#__PURE__*/ defineChain({
    id: 1686,
    name: 'Mint Sepolia Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.mintchain.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Mintchain Testnet explorer',
            url: 'https://testnet-explorer.mintchain.io',
        },
    },
    testnet: true,
});

const sourceId$c = 1; // mainnet
const mode = /*#__PURE__*/ defineChain({
    id: 34443,
    name: 'Mode Mainnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.mode.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Modescan',
            url: 'https://modescan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 2465882,
        },
    },
    sourceId: sourceId$c,
});

const sourceId$b = 11_155_111; // sepolia
const modeTestnet = /*#__PURE__*/ defineChain({
    id: 919,
    name: 'Mode Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia.mode.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepolia.explorer.mode.network',
            apiUrl: 'https://sepolia.explorer.mode.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF',
            blockCreated: 3019007,
        },
    },
    testnet: true,
    sourceId: sourceId$b,
});

const moonbaseAlpha = /*#__PURE__*/ defineChain({
    id: 1287,
    name: 'Moonbase Alpha',
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: 'DEV',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.api.moonbase.moonbeam.network'],
            webSocket: ['wss://wss.api.moonbase.moonbeam.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Moonscan',
            url: 'https://moonbase.moonscan.io',
            apiUrl: 'https://moonbase.moonscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1850686,
        },
    },
    testnet: true,
});

const moonbeam = /*#__PURE__*/ defineChain({
    id: 1284,
    name: 'Moonbeam',
    nativeCurrency: {
        decimals: 18,
        name: 'GLMR',
        symbol: 'GLMR',
    },
    rpcUrls: {
        default: {
            http: ['https://moonbeam.public.blastapi.io'],
            webSocket: ['wss://moonbeam.public.blastapi.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Moonscan',
            url: 'https://moonscan.io',
            apiUrl: 'https://api-moonbeam.moonscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 609002,
        },
    },
    testnet: false,
});

const moonbeamDev = /*#__PURE__*/ defineChain({
    id: 1281,
    name: 'Moonbeam Development Node',
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: 'DEV',
    },
    rpcUrls: {
        default: {
            http: ['http://127.0.0.1:9944'],
            webSocket: ['wss://127.0.0.1:9944'],
        },
    },
});

const moonriver = /*#__PURE__*/ defineChain({
    id: 1285,
    name: 'Moonriver',
    nativeCurrency: {
        decimals: 18,
        name: 'MOVR',
        symbol: 'MOVR',
    },
    rpcUrls: {
        default: {
            http: ['https://moonriver.public.blastapi.io'],
            webSocket: ['wss://moonriver.public.blastapi.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Moonscan',
            url: 'https://moonriver.moonscan.io',
            apiUrl: 'https://api-moonriver.moonscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1597904,
        },
    },
    testnet: false,
});

const morphSepolia = /*#__PURE__*/ defineChain({
    id: 2710,
    name: 'Morph Sepolia',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-testnet.morphl2.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Morph Testnet Explorer',
            url: 'https://explorer-testnet.morphl2.io',
            apiUrl: 'https://explorer-api-testnet.morphl2.io/api',
        },
    },
    testnet: true,
});

const nautilus = /*#__PURE__*/ defineChain({
    id: 22222,
    name: 'Nautilus Mainnet',
    nativeCurrency: { name: 'ZBC', symbol: 'ZBC', decimals: 9 },
    rpcUrls: {
        default: {
            http: ['https://api.nautilus.nautchain.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'NautScan',
            url: 'https://nautscan.com',
        },
    },
});

const neonDevnet = /*#__PURE__*/ defineChain({
    id: 245_022_926,
    name: 'Neon EVM DevNet',
    nativeCurrency: { name: 'NEON', symbol: 'NEON', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://devnet.neonevm.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Neonscan',
            url: 'https://devnet.neonscan.org',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 205206112,
        },
    },
    testnet: true,
});

const neonMainnet = /*#__PURE__*/ defineChain({
    id: 245_022_934,
    network: 'neonMainnet',
    name: 'Neon EVM MainNet',
    nativeCurrency: { name: 'NEON', symbol: 'NEON', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://neon-proxy-mainnet.solana.p2p.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Neonscan',
            url: 'https://neonscan.org',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 206545524,
        },
    },
    testnet: false,
});

const nexi = /*#__PURE__*/ defineChain({
    id: 4242,
    name: 'Nexi',
    nativeCurrency: { name: 'Nexi', symbol: 'NEXI', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.chain.nexi.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'NexiScan',
            url: 'https://www.nexiscan.com',
            apiUrl: 'https://www.nexiscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E',
            blockCreated: 25770160,
        },
    },
});

const nexilix = /*#__PURE__*/ defineChain({
    id: 240,
    name: 'Nexilix Smart Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Nexilix',
        symbol: 'NEXILIX',
    },
    rpcUrls: {
        default: { http: ['https://rpcurl.pos.nexilix.com'] },
    },
    blockExplorers: {
        default: {
            name: 'NexilixScan',
            url: 'https://scan.nexilix.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244',
            blockCreated: 74448,
        },
    },
});

const oasys = /*#__PURE__*/ defineChain({
    id: 248,
    name: 'Oasys',
    nativeCurrency: { name: 'Oasys', symbol: 'OAS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.mainnet.oasys.games'],
        },
    },
    blockExplorers: {
        default: {
            name: 'OasysScan',
            url: 'https://scan.oasys.games',
            apiUrl: 'https://scan.oasys.games/api',
        },
    },
});

const oasisTestnet = /*#__PURE__*/ defineChain({
    id: 4090,
    network: 'oasis-testnet',
    name: 'Oasis Testnet',
    nativeCurrency: { name: 'Fasttoken', symbol: 'FTN', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc1.oasis.bahamutchain.com'] },
        public: { http: ['https://rpc1.oasis.bahamutchain.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Ftnscan',
            url: 'https://oasis.ftnscan.com',
            apiUrl: 'https://oasis.ftnscan.com/api',
        },
    },
    testnet: true,
});

const okc = /*#__PURE__*/ defineChain({
    id: 66,
    name: 'OKC',
    nativeCurrency: {
        decimals: 18,
        name: 'OKT',
        symbol: 'OKT',
    },
    rpcUrls: {
        default: { http: ['https://exchainrpc.okex.org'] },
    },
    blockExplorers: {
        default: {
            name: 'oklink',
            url: 'https://www.oklink.com/okc',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 10364792,
        },
    },
});

const sourceId$a = 1; // mainnet
const optimism = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 10,
    name: 'OP Mainnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.optimism.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Optimism Explorer',
            url: 'https://optimistic.etherscan.io',
            apiUrl: 'https://api-optimistic.etherscan.io/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$a]: {
                address: '0xdfe97868233d1aa22e815a266982f2cf17685a27',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263,
        },
        portal: {
            [sourceId$a]: {
                address: '0xbEb5Fc579115071764c7423A4f12eDde41f106Ed',
            },
        },
        l1StandardBridge: {
            [sourceId$a]: {
                address: '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1',
            },
        },
    },
    sourceId: sourceId$a,
});

const sourceId$9 = 5; // goerli
const optimismGoerli = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 420,
    name: 'Optimism Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://goerli.optimism.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://goerli-optimism.etherscan.io',
            apiUrl: 'https://goerli-optimism.etherscan.io/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$9]: {
                address: '0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 49461,
        },
        portal: {
            [sourceId$9]: {
                address: '0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383',
            },
        },
        l1StandardBridge: {
            [sourceId$9]: {
                address: '0x636Af16bf2f682dD3109e60102b8E1A089FedAa8',
            },
        },
    },
    testnet: true,
    sourceId: sourceId$9,
});

const sourceId$8 = 11_155_111; // sepolia
const optimismSepolia = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 11155420,
    name: 'OP Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia.optimism.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://optimism-sepolia.blockscout.com',
            apiUrl: 'https://optimism-sepolia.blockscout.com/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        disputeGameFactory: {
            [sourceId$8]: {
                address: '0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1',
            },
        },
        l2OutputOracle: {
            [sourceId$8]: {
                address: '0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1620204,
        },
        portal: {
            [sourceId$8]: {
                address: '0x16Fc5058F25648194471939df75CF27A2fdC48BC',
            },
        },
        l1StandardBridge: {
            [sourceId$8]: {
                address: '0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1',
            },
        },
    },
    testnet: true,
    sourceId: sourceId$8,
});

const opBNB = /*#__PURE__*/ defineChain({
    id: 204,
    name: 'opBNB',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://opbnb-mainnet-rpc.bnbchain.org'] },
    },
    blockExplorers: {
        default: {
            name: 'opbnbscan',
            url: 'https://mainnet.opbnbscan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 512881,
        },
    },
});

const opBNBTestnet = /*#__PURE__*/ defineChain({
    id: 5611,
    name: 'opBNB Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tBNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
    },
    blockExplorers: {
        default: {
            name: 'opbnbscan',
            url: 'https://testnet.opbnbscan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3705108,
        },
    },
    testnet: true,
});

const oortMainnetDev = /*#__PURE__*/ defineChain({
    id: 9700,
    name: 'OORT MainnetDev',
    nativeCurrency: {
        decimals: 18,
        name: 'OORT',
        symbol: 'OORT',
    },
    rpcUrls: {
        default: { http: ['https://dev-rpc.oortech.com'] },
    },
    blockExplorers: {
        oort: {
            name: 'OORT MainnetDev Explorer',
            url: 'https://dev-scan.oortech.com',
        },
        default: {
            name: 'OORT MainnetDev Explorer',
            url: 'https://dev-scan.oortech.com',
        },
    },
});

const otimDevnet = /*#__PURE__*/ defineChain({
    id: 41144114,
    name: 'Otim Devnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETH',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['http://devnet.otim.xyz'],
        },
    },
    contracts: {
        batchInvoker: {
            address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        },
    },
});

const palm = /*#__PURE__*/ defineChain({
    id: 11_297_108_109,
    name: 'Palm',
    nativeCurrency: {
        decimals: 18,
        name: 'PALM',
        symbol: 'PALM',
    },
    rpcUrls: {
        default: {
            http: ['https://palm-mainnet.public.blastapi.io'],
            webSocket: ['wss://palm-mainnet.public.blastapi.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Chainlens',
            url: 'https://palm.chainlens.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15429248,
        },
    },
});

const palmTestnet = /*#__PURE__*/ defineChain({
    id: 11_297_108_099,
    name: 'Palm Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'PALM',
        symbol: 'PALM',
    },
    rpcUrls: {
        default: {
            http: ['https://palm-mainnet.public.blastapi.io'],
            webSocket: ['wss://palm-mainnet.public.blastapi.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Chainlens',
            url: 'https://palm.chainlens.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15429248,
        },
    },
    testnet: true,
});

const playfiAlbireo = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 1_612_127,
    name: 'PlayFi Albireo Testnet',
    network: 'albireo',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://albireo-rpc.playfi.ai'],
            webSocket: ['wss://albireo-rpc-ws.playfi.ai/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PlayFi Albireo Explorer',
            url: 'https://albireo-explorer.playfi.ai',
        },
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
        },
    },
    testnet: true,
});

const sourceId$7 = 1; // mainnet
const pgn = /*#__PURE__*/ defineChain({
    id: 424,
    network: 'pgn',
    name: 'PGN',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.publicgoods.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PGN Explorer',
            url: 'https://explorer.publicgoods.network',
            apiUrl: 'https://explorer.publicgoods.network/api',
        },
        blocksout: {
            name: 'PGN Explorer',
            url: 'https://explorer.publicgoods.network',
            apiUrl: 'https://explorer.publicgoods.network/api',
        },
    },
    contracts: {
        l2OutputOracle: {
            [sourceId$7]: {
                address: '0x9E6204F750cD866b299594e2aC9eA824E2e5f95c',
            },
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3380209,
        },
        portal: {
            [sourceId$7]: {
                address: '0xb26Fd985c5959bBB382BAFdD0b879E149e48116c',
            },
        },
        l1StandardBridge: {
            [sourceId$7]: {
                address: '0xD0204B9527C1bA7bD765Fa5CCD9355d38338272b',
            },
        },
    },
    formatters: formatters$2,
    sourceId: sourceId$7,
});

const sourceId$6 = 11_155_111; // sepolia
const pgnTestnet = /*#__PURE__*/ defineChain({
    id: 58008,
    network: 'pgn-testnet',
    name: 'PGN ',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia.publicgoods.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PGN Testnet Explorer',
            url: 'https://explorer.sepolia.publicgoods.network',
            apiUrl: 'https://explorer.sepolia.publicgoods.network/api',
        },
        blocksout: {
            name: 'PGN Testnet Explorer',
            url: 'https://explorer.sepolia.publicgoods.network',
            apiUrl: 'https://explorer.sepolia.publicgoods.network/api',
        },
    },
    contracts: {
        l2OutputOracle: {
            [sourceId$6]: {
                address: '0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe',
            },
        },
        portal: {
            [sourceId$6]: {
                address: '0xF04BdD5353Bb0EFF6CA60CfcC78594278eBfE179',
            },
        },
        l1StandardBridge: {
            [sourceId$6]: {
                address: '0xFaE6abCAF30D23e233AC7faF747F2fC3a5a6Bfa3',
            },
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3754925,
        },
    },
    formatters: formatters$2,
    sourceId: sourceId$6,
    testnet: true,
});

// src/chains/definitions/phoenix.ts
const phoenix = /*#__PURE__*/ defineChain({
    id: 13381,
    name: 'Phoenix Blockchain',
    nativeCurrency: { name: 'Phoenix', symbol: 'PHX', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.phoenixplorer.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Phoenixplorer',
            url: 'https://phoenixplorer.com',
            apiUrl: 'https://phoenixplorer.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0x498cF757a575cFF2c2Ed9f532f56Efa797f86442',
            blockCreated: 5620192,
        },
    },
});

const plinga = /*#__PURE__*/ defineChain({
    id: 242,
    name: 'Plinga',
    nativeCurrency: { name: 'Plinga', symbol: 'PLINGA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpcurl.mainnet.plgchain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Plgscan',
            url: 'https://www.plgscan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0x0989576160f2e7092908BB9479631b901060b6e4',
            blockCreated: 204489,
        },
    },
});

const sourceId$5 = 11_155_111; // sepolia
const plumeTestnet = /*#__PURE__*/ defineChain({
    id: 161_221_135,
    name: 'Plume Testnet',
    nativeCurrency: {
        name: 'Plume Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.plumenetwork.xyz/http'],
            webSocket: ['wss://testnet-rpc.plumenetwork.xyz/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://testnet-explorer.plumenetwork.xyz',
            apiUrl: 'https://testnet-explorer.plumenetwork.xyz/api',
        },
    },
    testnet: true,
    sourceId: sourceId$5,
});

const polygon = /*#__PURE__*/ defineChain({
    id: 137,
    name: 'Polygon',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://polygon-rpc.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
            apiUrl: 'https://api.polygonscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
});

const polygonAmoy = /*#__PURE__*/ defineChain({
    id: 80_002,
    name: 'Polygon Amoy',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-amoy.polygon.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://amoy.polygonscan.com/',
            apiUrl: 'https://api-amoy.polygonscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3127388,
        },
    },
    testnet: true,
});

const polygonMumbai = /*#__PURE__*/ defineChain({
    id: 80_001,
    name: 'Polygon Mumbai',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/polygon_mumbai'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://mumbai.polygonscan.com',
            apiUrl: 'https://api-testnet.polygonscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
    testnet: true,
});

const polygonZkEvm = /*#__PURE__*/ defineChain({
    id: 1101,
    name: 'Polygon zkEVM',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://zkevm-rpc.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://zkevm.polygonscan.com',
            apiUrl: 'https://api-zkevm.polygonscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 57746,
        },
    },
});

const polygonZkEvmCardona = /*#__PURE__*/ defineChain({
    id: 2442,
    name: 'Polygon zkEVM Cardona',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.cardona.zkevm-rpc.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://cardona-zkevm.polygonscan.com',
            apiUrl: 'https://cardona-zkevm.polygonscan.com/api',
        },
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 114091,
        },
    },
});

const polygonZkEvmTestnet = /*#__PURE__*/ defineChain({
    id: 1442,
    name: 'Polygon zkEVM Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.public.zkevm-test.net'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://testnet-zkevm.polygonscan.com',
            apiUrl: 'https://testnet-zkevm.polygonscan.com/api',
        },
    },
    testnet: true,
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 525686,
        },
    },
});

const pulsechain = /*#__PURE__*/ defineChain({
    id: 369,
    name: 'PulseChain',
    nativeCurrency: { name: 'Pulse', symbol: 'PLS', decimals: 18 },
    testnet: false,
    rpcUrls: {
        default: {
            http: ['https://rpc.pulsechain.com'],
            webSocket: ['wss://ws.pulsechain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PulseScan',
            url: 'https://scan.pulsechain.com',
            apiUrl: 'https://api.scan.pulsechain.com/api',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
});

const pulsechainV4 = /*#__PURE__*/ defineChain({
    id: 943,
    name: 'PulseChain V4',
    testnet: true,
    nativeCurrency: { name: 'V4 Pulse', symbol: 'v4PLS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.v4.testnet.pulsechain.com'],
            webSocket: ['wss://ws.v4.testnet.pulsechain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PulseScan',
            url: 'https://scan.v4.testnet.pulsechain.com',
            apiUrl: 'https://scan.v4.testnet.pulsechain.com/api',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
});

const qMainnet = /*#__PURE__*/ defineChain({
    id: 35441,
    name: 'Q Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Q',
        symbol: 'Q',
    },
    rpcUrls: {
        default: { http: ['https://rpc.q.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Q Mainnet Explorer',
            url: 'https://explorer.q.org',
            apiUrl: 'https://explorer.q.org/api',
        },
    },
});

const qTestnet = /*#__PURE__*/ defineChain({
    id: 35443,
    name: 'Q Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Q',
        symbol: 'Q',
    },
    rpcUrls: {
        default: { http: ['https://rpc.qtestnet.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Q Testnet Explorer',
            url: 'https://explorer.qtestnet.org',
            apiUrl: 'https://explorer.qtestnet.org/api',
        },
    },
    testnet: true,
});

const reyaNetwork = /*#__PURE__*/ defineChain({
    id: 1729,
    name: 'Reya Network',
    nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
    rpcUrls: {
        default: {
            http: ['https://rpc.reya.network'],
            webSocket: ['wss://ws.reya.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Reya Network Explorer',
            url: 'https://explorer.reya.network',
        },
    },
    testnet: false,
});

const rollux = /*#__PURE__*/ defineChain({
    id: 570,
    name: 'Rollux Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.rollux.com'],
            webSocket: ['wss://rpc.rollux.com/wss'],
        },
    },
    blockExplorers: {
        default: {
            name: 'RolluxExplorer',
            url: 'https://explorer.rollux.com',
            apiUrl: 'https://explorer.rollux.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 119222,
        },
    },
});

const rolluxTestnet = /*#__PURE__*/ defineChain({
    id: 57000,
    name: 'Rollux Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc-tanenbaum.rollux.com/'],
            webSocket: ['wss://rpc-tanenbaum.rollux.com/wss'],
        },
    },
    blockExplorers: {
        default: {
            name: 'RolluxTestnetExplorer',
            url: 'https://rollux.tanenbaum.io',
            apiUrl: 'https://rollux.tanenbaum.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1813675,
        },
    },
});

const ronin = /*#__PURE__*/ defineChain({
    id: 2020,
    name: 'Ronin',
    nativeCurrency: { name: 'RON', symbol: 'RON', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://api.roninchain.com/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ronin Explorer',
            url: 'https://app.roninchain.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 26023535,
        },
    },
});

const rootstock = /*#__PURE__*/ defineChain({
    id: 30,
    name: 'Rootstock Mainnet',
    network: 'rootstock',
    nativeCurrency: {
        decimals: 18,
        name: 'Rootstock Bitcoin',
        symbol: 'RBTC',
    },
    rpcUrls: {
        default: { http: ['https://public-node.rsk.co'] },
    },
    blockExplorers: {
        default: {
            name: 'RSK Explorer',
            url: 'https://explorer.rsk.co',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 4249540,
        },
    },
});

const rootstockTestnet = /*#__PURE__*/ defineChain({
    id: 31,
    name: 'Rootstock Testnet',
    network: 'rootstock',
    nativeCurrency: {
        decimals: 18,
        name: 'Rootstock Bitcoin',
        symbol: 'tRBTC',
    },
    rpcUrls: {
        default: { http: ['https://public-node.testnet.rsk.co'] },
    },
    blockExplorers: {
        default: {
            name: 'RSK Explorer',
            url: 'https://explorer.testnet.rootstock.io',
        },
    },
});

const sourceId$4 = 1; // mainnet
const rss3 = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 12_553,
    name: 'RSS3 VSL Mainnet',
    nativeCurrency: { name: 'RSS3', symbol: 'RSS3', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.rss3.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'RSS3 VSL Mainnet Scan',
            url: 'https://scan.rss3.io',
            apiUrl: 'https://scan.rss3.io/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$4]: {
                address: '0xE6f24d2C32B3109B18ed33cF08eFb490b1e09C10',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14193,
        },
        portal: {
            [sourceId$4]: {
                address: '0x6A12432491bbbE8d3babf75F759766774C778Db4',
                blockCreated: 19387057,
            },
        },
        l1StandardBridge: {
            [sourceId$4]: {
                address: '0x4cbab69108Aa72151EDa5A3c164eA86845f18438',
            },
        },
    },
    sourceId: sourceId$4,
});

const sourceId$3 = 11_155_111; // sepolia
const rss3Sepolia = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 2_331,
    name: 'RSS3 VSL Sepolia Testnet',
    nativeCurrency: { name: 'RSS3', symbol: 'RSS3', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.rss3.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'RSS3 VSL Sepolia Testnet Scan',
            url: 'https://scan.testnet.rss3.io',
            apiUrl: 'https://scan.testnet.rss3.io/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$3]: {
                address: '0xDb5c46C3Eaa6Ed6aE8b2379785DF7dd029C0dC81',
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 55697,
        },
        portal: {
            [sourceId$3]: {
                address: '0xcBD77E8E1E7F06B25baDe67142cdE82652Da7b57',
                blockCreated: 5345035,
            },
        },
        l1StandardBridge: {
            [sourceId$3]: {
                address: '0xdDD29bb63B0839FB1cE0eE439Ff027738595D07B',
            },
        },
    },
    testnet: true,
    sourceId: sourceId$3,
});

const saigon = /*#__PURE__*/ defineChain({
    id: 2021,
    name: 'Saigon Testnet',
    nativeCurrency: { name: 'RON', symbol: 'RON', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://saigon-testnet.roninchain.com/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Saigon Explorer',
            url: 'https://saigon-app.roninchain.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 18736871,
        },
    },
    testnet: true,
});

const sapphire = /*#__PURE__*/ defineChain({
    id: 23294,
    name: 'Oasis Sapphire',
    network: 'sapphire',
    nativeCurrency: { name: 'Sapphire Rose', symbol: 'ROSE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sapphire.oasis.io'],
            webSocket: ['wss://sapphire.oasis.io/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Oasis Explorer',
            url: 'https://explorer.oasis.io/mainnet/sapphire',
        },
        blockscout: {
            name: 'Oasis Sapphire Explorer',
            url: 'https://old-explorer.sapphire.oasis.io',
            apiUrl: 'https://old-explorer.sapphire.oasis.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 734531,
        },
    },
});

const sapphireTestnet = /*#__PURE__*/ defineChain({
    id: 23295,
    name: 'Oasis Sapphire Testnet',
    network: 'sapphire-testnet',
    nativeCurrency: { name: 'Sapphire Test Rose', symbol: 'TEST', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.sapphire.oasis.dev'],
            webSocket: ['wss://testnet.sapphire.oasis.dev/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Oasis Explorer',
            url: 'https://explorer.oasis.io/testnet/sapphire',
        },
        blockscout: {
            name: 'Oasis Sapphire Testnet Explorer',
            url: 'https://testnet.old-explorer.sapphire.oasis.dev',
            apiUrl: 'https://testnet.old-explorer.sapphire.oasis.dev/api',
        },
    },
    testnet: true,
});

const scroll = /*#__PURE__*/ defineChain({
    id: 534_352,
    name: 'Scroll',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.scroll.io'],
            webSocket: ['wss://wss-rpc.scroll.io/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Scrollscan',
            url: 'https://scrollscan.com',
            apiUrl: 'https://api.scrollscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14,
        },
    },
    testnet: false,
});

const scrollSepolia = /*#__PURE__*/ defineChain({
    id: 534_351,
    name: 'Scroll Sepolia',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia-rpc.scroll.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://sepolia-blockscout.scroll.io',
            apiUrl: 'https://sepolia-blockscout.scroll.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 9473,
        },
    },
    testnet: true,
});

const scrollTestnet = /*#__PURE__*/ defineChain({
    id: 534_353,
    name: 'Scroll Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://alpha-rpc.scroll.io/l2'],
            webSocket: ['wss://alpha-rpc.scroll.io/l2/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.scroll.io',
            apiUrl: 'https://blockscout.scroll.io/api',
        },
    },
    testnet: true,
});

const seiDevnet = /*#__PURE__*/ defineChain({
    id: 713_715,
    name: 'Sei Devnet',
    nativeCurrency: { name: 'Sei', symbol: 'SEI', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://evm-rpc-arctic-1.sei-apis.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Seitrace',
            url: 'https://seitrace.com',
        },
    },
    testnet: true,
});

const sepolia = /*#__PURE__*/ defineChain({
    id: 11_155_111,
    name: 'Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.sepolia.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia.etherscan.io',
            apiUrl: 'https://api-sepolia.etherscan.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 751532,
        },
        ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
        ensUniversalResolver: {
            address: '0xc8Af999e38273D658BE1b921b88A9Ddf005769cC',
            blockCreated: 5_317_080,
        },
    },
    testnet: true,
});

const shimmer = /*#__PURE__*/ defineChain({
    id: 148,
    name: 'Shimmer',
    network: 'shimmer',
    nativeCurrency: {
        decimals: 18,
        name: 'Shimmer',
        symbol: 'SMR',
    },
    rpcUrls: {
        default: {
            http: ['https://json-rpc.evm.shimmer.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Shimmer Network Explorer',
            url: 'https://explorer.evm.shimmer.network',
            apiUrl: 'https://explorer.evm.shimmer.network/api',
        },
    },
});

const shimmerTestnet = /*#__PURE__*/ defineChain({
    id: 1073,
    name: 'Shimmer Testnet',
    network: 'shimmer-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Shimmer',
        symbol: 'SMR',
    },
    rpcUrls: {
        default: {
            http: ['https://json-rpc.evm.testnet.shimmer.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Shimmer Network Explorer',
            url: 'https://explorer.evm.testnet.shimmer.network',
            apiUrl: 'https://explorer.evm.testnet.shimmer.network/api',
        },
    },
    testnet: true,
});

const skaleBlockBrawlers = /*#__PURE__*/ defineChain({
    id: 391_845_894,
    name: 'SKALE | Block Brawlers',
    nativeCurrency: { name: 'BRAWL', symbol: 'BRAWL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/frayed-decent-antares'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://frayed-decent-antares.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});

const skaleCalypso = /*#__PURE__*/ defineChain({
    id: 1_564_830_818,
    name: 'SKALE | Calypso NFT Hub',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague'],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3107626,
        },
    },
});

const skaleCalypsoTestnet = /*#__PURE__*/ defineChain({
    id: 974_399_131,
    name: 'SKALE Calypso Testnet',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.skalenodes.com/v1/giant-half-dual-testnet'],
            webSocket: ['wss://testnet.skalenodes.com/v1/ws/giant-half-dual-testnet'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://giant-half-dual-testnet.explorer.testnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 103_220,
        },
    },
    testnet: true,
});

const skaleCryptoBlades = /*#__PURE__*/ defineChain({
    id: 1_026_062_157,
    name: 'SKALE | CryptoBlades',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux'],
            webSocket: [
                'wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});

const skaleCryptoColosseum = /*#__PURE__*/ defineChain({
    id: 1_032_942_172,
    name: 'SKALE | Crypto Colosseum',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/haunting-devoted-deneb'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});

const skaleEuropa = /*#__PURE__*/ defineChain({
    id: 2_046_399_126,
    name: 'SKALE | Europa Liquidity Hub',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/elated-tan-skat'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://elated-tan-skat.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3113495,
        },
    },
});

const skaleEuropaTestnet = /*#__PURE__*/ defineChain({
    id: 1_444_673_419,
    name: 'SKALE Europa Testnet',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.skalenodes.com/v1/juicy-low-small-testnet'],
            webSocket: ['wss://testnet.skalenodes.com/v1/ws/juicy-low-small-testnet'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://juicy-low-small-testnet.explorer.testnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 110_858,
        },
    },
    testnet: true,
});

const skaleExorde = /*#__PURE__*/ defineChain({
    id: 2_139_927_552,
    name: 'SKALE | Exorde',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/light-vast-diphda'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://light-vast-diphda.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});

const skaleHumanProtocol = /*#__PURE__*/ defineChain({
    id: 1_273_227_453,
    name: 'SKALE | Human Protocol',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/wan-red-ain'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/wan-red-ain'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://wan-red-ain.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});

const skaleNebula = /*#__PURE__*/ defineChain({
    id: 1_482_601_649,
    name: 'SKALE | Nebula Gaming Hub',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/green-giddy-denebola'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://green-giddy-denebola.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2372986,
        },
    },
});

const skaleNebulaTestnet = /*#__PURE__*/ defineChain({
    id: 37_084_624,
    name: 'SKALE Nebula Testnet',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet'],
            webSocket: ['wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 105_141,
        },
    },
    testnet: true,
});

const skaleRazor = /*#__PURE__*/ defineChain({
    id: 278_611_351,
    name: 'SKALE | Razor Network',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/turbulent-unique-scheat'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});

const skaleTitan = /*#__PURE__*/ defineChain({
    id: 1_350_216_234,
    name: 'SKALE | Titan Community Hub',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/parallel-stormy-spica'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://parallel-stormy-spica.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2076458,
        },
    },
});

const skaleTitanTestnet = /*#__PURE__*/ defineChain({
    id: 1_020_352_220,
    name: 'SKALE Titan Hub',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.skalenodes.com/v1/aware-fake-trim-testnet'],
            webSocket: ['wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 104_072,
        },
    },
    testnet: true,
});

const songbird = /*#__PURE__*/ defineChain({
    id: 19,
    name: 'Songbird Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'songbird',
        symbol: 'SGB',
    },
    rpcUrls: {
        default: { http: ['https://songbird-api.flare.network/ext/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Songbird Explorer',
            url: 'https://songbird-explorer.flare.network',
            apiUrl: 'https://songbird-explorer.flare.network/api',
        },
    },
});

const songbirdTestnet = /*#__PURE__*/ defineChain({
    id: 16,
    name: 'Coston',
    nativeCurrency: {
        decimals: 18,
        name: 'costonflare',
        symbol: 'CFLR',
    },
    rpcUrls: {
        default: { http: ['https://coston-api.flare.network/ext/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Coston Explorer',
            url: 'https://coston-explorer.flare.network',
            apiUrl: 'https://coston-explorer.flare.network/api',
        },
    },
    testnet: true,
});

const spicy = /*#__PURE__*/ defineChain({
    id: 88_882,
    name: 'Chiliz Spicy Testnet',
    network: 'chiliz-spicy-Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'CHZ',
        symbol: 'CHZ',
    },
    rpcUrls: {
        default: {
            http: [
                'https://spicy-rpc.chiliz.com',
                'https://chiliz-spicy-rpc.publicnode.com',
            ],
            webSocket: [
                'wss://spicy-rpc-ws.chiliz.com',
                'wss://chiliz-spicy-rpc.publicnode.com',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Chiliz Explorer',
            url: 'http://spicy-explorer.chiliz.com',
            apiUrl: 'http://spicy-explorer.chiliz.com/api',
        },
    },
    testnet: true,
});

const shardeumSphinx = /*#__PURE__*/ defineChain({
    id: 8082,
    name: 'Shardeum Sphinx',
    nativeCurrency: { name: 'SHARDEUM', symbol: 'SHM', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sphinx.shardeum.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Shardeum Explorer',
            url: 'https://explorer-sphinx.shardeum.org',
        },
    },
    testnet: true,
});

const shibarium = /*#__PURE__*/ defineChain({
    id: 109,
    name: 'Shibarium',
    network: 'shibarium',
    nativeCurrency: { name: 'Bone', symbol: 'BONE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.shibrpc.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://shibariumscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0x864Bf681ADD6052395188A89101A1B37d3B4C961',
            blockCreated: 265900,
        },
    },
});

const stratis = /*#__PURE__*/ defineChain({
    id: 105105,
    name: 'Stratis Mainnet',
    network: 'stratis',
    nativeCurrency: {
        name: 'Stratis',
        symbol: 'STRAX',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.stratisevm.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Stratis Explorer',
            url: 'https://explorer.stratisevm.com',
        },
    },
});

const syscoin = /*#__PURE__*/ defineChain({
    id: 57,
    name: 'Syscoin Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.syscoin.org'],
            webSocket: ['wss://rpc.syscoin.org/wss'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SyscoinExplorer',
            url: 'https://explorer.syscoin.org',
            apiUrl: 'https://explorer.syscoin.org/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 287139,
        },
    },
});

const syscoinTestnet = /*#__PURE__*/ defineChain({
    id: 5700,
    name: 'Syscoin Tanenbaum Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Syscoin',
        symbol: 'SYS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.tanenbaum.io'],
            webSocket: ['wss://rpc.tanenbaum.io/wss'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SyscoinTestnetExplorer',
            url: 'https://tanenbaum.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 271288,
        },
    },
});

const taraxa = /*#__PURE__*/ defineChain({
    id: 841,
    name: 'Taraxa Mainnet',
    nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.mainnet.taraxa.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Taraxa Explorer',
            url: 'https://explorer.mainnet.taraxa.io',
        },
    },
});

const taikoHekla = /*#__PURE__*/ defineChain({
    id: 167_009,
    name: 'Taiko Hekla L2',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.hekla.taiko.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Taikoscan',
            url: 'https://hekla.taikoscan.network',
        },
    },
});

const taikoJolnir = /*#__PURE__*/ defineChain({
    id: 167007,
    name: 'Taiko Jolnir (Alpha-5 Testnet)',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.jolnir.taiko.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.jolnir.taiko.xyz',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 732706,
        },
    },
    testnet: true,
});

const taikoKatla = /*#__PURE__*/ defineChain({
    id: 167008,
    name: 'Taiko Katla (Alpha-6 Testnet)',
    network: 'tko-katla',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.katla.taiko.xyz'],
        },
        public: {
            http: ['https://rpc.katla.taiko.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.katla.taiko.xyz',
        },
    },
});

const taikoTestnetSepolia = /*#__PURE__*/ defineChain({
    id: 167005,
    name: 'Taiko (Alpha-3 Testnet)',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.test.taiko.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.test.taiko.xyz',
        },
    },
});

const taraxaTestnet = /*#__PURE__*/ defineChain({
    id: 842,
    name: 'Taraxa Testnet',
    nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.taraxa.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Taraxa Explorer',
            url: 'https://explorer.testnet.taraxa.io',
        },
    },
    testnet: true,
});

const telcoinTestnet = /*#__PURE__*/ defineChain({
    id: 2017,
    name: 'Telcoin Adiri Testnet',
    nativeCurrency: { name: 'Telcoin', symbol: 'TEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.telcoin.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'telscan',
            url: 'https://telscan.io',
        },
    },
    testnet: true,
});

const telos = /*#__PURE__*/ defineChain({
    id: 40,
    name: 'Telos',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS',
    },
    rpcUrls: {
        default: { http: ['https://mainnet.telos.net/evm'] },
    },
    blockExplorers: {
        default: {
            name: 'Teloscan',
            url: 'https://www.teloscan.io/',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 246530709,
        },
    },
});

const telosTestnet = /*#__PURE__*/ defineChain({
    id: 41,
    name: 'Telos',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS',
    },
    rpcUrls: {
        default: { http: ['https://testnet.telos.net/evm'] },
    },
    blockExplorers: {
        default: {
            name: 'Teloscan (testnet)',
            url: 'https://testnet.teloscan.io/',
        },
    },
    testnet: true,
});

const tenet = /*#__PURE__*/ defineChain({
    id: 1559,
    name: 'Tenet',
    network: 'tenet-mainnet',
    nativeCurrency: {
        name: 'TENET',
        symbol: 'TENET',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://rpc.tenet.org'] },
    },
    blockExplorers: {
        default: {
            name: 'TenetScan Mainnet',
            url: 'https://tenetscan.io',
            apiUrl: 'https://tenetscan.io/api',
        },
    },
    testnet: false,
});

const thaiChain = /*#__PURE__*/ defineChain({
    id: 7,
    name: 'ThaiChain',
    nativeCurrency: { name: 'TCH', symbol: 'TCH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['hhttps://rpc.thaichain.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://exp.thaichain.org',
            apiUrl: 'https://exp.thaichain.org/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0x0DaD6130e832c21719C5CE3bae93454E16A84826',
            blockCreated: 4806386,
        },
    },
    testnet: false,
});

const thunderTestnet = /*#__PURE__*/ defineChain({
    id: 997,
    name: '5ireChain Thunder Testnet',
    nativeCurrency: { name: '5ire Token', symbol: '5IRE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-testnet.5ire.network'],
        },
    },
    blockExplorers: {
        default: {
            name: '5ireChain Explorer',
            url: 'https://explorer.5ire.network',
        },
    },
    testnet: true,
});

const vechain = /*#__PURE__*/ defineChain({
    id: 100009,
    name: 'Vechain',
    nativeCurrency: { name: 'VeChain', symbol: 'VET', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.vechain.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Vechain Explorer',
            url: 'https://explore.vechain.org',
        },
        vechainStats: {
            name: 'Vechain Stats',
            url: 'https://vechainstats.com',
        },
    },
});

const wanchain = /*#__PURE__*/ defineChain({
    id: 888,
    name: 'Wanchain',
    nativeCurrency: { name: 'WANCHAIN', symbol: 'WAN', decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                'https://gwan-ssl.wandevs.org:56891',
                'https://gwan2-ssl.wandevs.org',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'WanScan',
            url: 'https://wanscan.org',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB',
            blockCreated: 25312390,
        },
    },
});

const wanchainTestnet = /*#__PURE__*/ defineChain({
    id: 999,
    name: 'Wanchain Testnet',
    nativeCurrency: { name: 'WANCHAIN', symbol: 'WANt', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://gwan-ssl.wandevs.org:46891'],
        },
    },
    blockExplorers: {
        default: {
            name: 'WanScanTest',
            url: 'https://wanscan.org',
        },
    },
    contracts: {
        multicall3: {
            address: '0x11c89bF4496c39FB80535Ffb4c92715839CC5324',
            blockCreated: 24743448,
        },
    },
    testnet: true,
});

const wemix = /*#__PURE__*/ defineChain({
    id: 1111,
    name: 'WEMIX',
    network: 'wemix-mainnet',
    nativeCurrency: { name: 'WEMIX', symbol: 'WEMIX', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://api.wemix.com'] },
        public: { http: ['https://api.wemix.com'] },
    },
    blockExplorers: {
        default: {
            name: 'wemixExplorer',
            url: 'https://explorer.wemix.com',
        },
    },
});

const wemixTestnet = /*#__PURE__*/ defineChain({
    id: 1112,
    name: 'WEMIX Testnet',
    network: 'wemix-testnet',
    nativeCurrency: { name: 'WEMIX', symbol: 'tWEMIX', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://api.test.wemix.com'] },
        public: { http: ['https://api.test.wemix.com'] },
    },
    blockExplorers: {
        default: {
            name: 'wemixExplorer',
            url: 'https://testnet.wemixscan.com',
            apiUrl: 'https://testnet.wemixscan.com/api',
        },
    },
    testnet: true,
});

const xLayerTestnet = /*#__PURE__*/ defineChain({
    id: 195,
    name: 'X1 Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OKB',
        symbol: 'OKB',
    },
    rpcUrls: {
        default: { http: ['https://x1testrpc.okx.com'] },
    },
    blockExplorers: {
        default: {
            name: 'OKLink',
            url: 'https://www.oklink.com/x1-test',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 624344,
        },
    },
    testnet: true,
});

const xLayer = /*#__PURE__*/ defineChain({
    id: 196,
    name: 'X Layer Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OKB',
        symbol: 'OKB',
    },
    rpcUrls: {
        default: { http: ['https://rpc.xlayer.tech'] },
    },
    blockExplorers: {
        default: {
            name: 'OKLink',
            url: 'https://www.oklink.com/xlayer',
        },
    },
});

const xdc = /*#__PURE__*/ defineChain({
    id: 50,
    name: 'XinFin Network',
    nativeCurrency: {
        decimals: 18,
        name: 'XDC',
        symbol: 'XDC',
    },
    rpcUrls: {
        default: { http: ['https://rpc.xinfin.network'] },
    },
    blockExplorers: {
        xinfin: {
            name: 'XinFin',
            url: 'https://explorer.xinfin.network',
        },
        default: {
            name: 'Blocksscan',
            url: 'https://xdc.blocksscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 71542788,
        },
    },
});

const xdcTestnet = /*#__PURE__*/ defineChain({
    id: 51,
    name: 'Apothem Network',
    nativeCurrency: {
        decimals: 18,
        name: 'TXDC',
        symbol: 'TXDC',
    },
    rpcUrls: {
        default: { http: ['https://erpc.apothem.network'] },
    },
    blockExplorers: {
        default: {
            name: 'Blocksscan',
            url: 'https://apothem.blocksscan.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 59765389,
        },
    },
});

const yooldoVerse = /*#__PURE__*/ defineChain({
    id: 50_005,
    name: 'Yooldo Verse',
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.yooldo-verse.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Yooldo Verse Explorer',
            url: 'https://explorer.yooldo-verse.xyz',
        },
    },
});

const yooldoVerseTestnet = /*#__PURE__*/ defineChain({
    id: 50_006,
    name: 'Yooldo Verse Testnet',
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.yooldo-verse.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Yooldo Verse Testnet Explorer',
            url: 'https://explorer.testnet.yooldo-verse.xyz',
        },
    },
    testnet: true,
});

const zetachain = /*#__PURE__*/ defineChain({
    id: 7000,
    name: 'ZetaChain',
    nativeCurrency: {
        decimals: 18,
        name: 'Zeta',
        symbol: 'ZETA',
    },
    rpcUrls: {
        default: {
            http: ['https://zetachain-evm.blockpi.network/v1/rpc/public'],
        },
    },
    blockExplorers: {
        default: {
            name: 'ZetaScan',
            url: 'https://explorer.zetachain.com',
        },
    },
    testnet: false,
});

const zetachainAthensTestnet = /*#__PURE__*/ defineChain({
    id: 7001,
    name: 'ZetaChain Athens Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Zeta',
        symbol: 'aZETA',
    },
    rpcUrls: {
        default: {
            http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'],
        },
    },
    blockExplorers: {
        default: {
            name: 'ZetaScan',
            url: 'https://athens.explorer.zetachain.com',
        },
    },
    testnet: true,
});

const zhejiang = /*#__PURE__*/ defineChain({
    id: 1_337_803,
    name: 'Zhejiang',
    nativeCurrency: { name: 'Zhejiang Ether', symbol: 'ZhejETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.zhejiang.ethpandaops.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Beaconchain',
            url: 'https://zhejiang.beaconcha.in',
        },
    },
    testnet: true,
});

const zilliqa = /*#__PURE__*/ defineChain({
    id: 32769,
    name: 'Zilliqa',
    network: 'zilliqa',
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://api.zilliqa.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ethernal',
            url: 'https://evmx.zilliqa.com',
        },
    },
    testnet: false,
});

const zilliqaTestnet = /*#__PURE__*/ defineChain({
    id: 33101,
    name: 'Zilliqa Testnet',
    network: 'zilliqa-testnet',
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://dev-api.zilliqa.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ethernal',
            url: 'https://evmx.testnet.zilliqa.com',
        },
    },
    testnet: true,
});

const zkFair = /*#__PURE__*/ defineChain({
    id: 42766,
    name: 'ZKFair Mainnet',
    network: 'zkfair-mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'USD Coin',
        symbol: 'USDC',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.zkfair.io'],
        },
        public: {
            http: ['https://rpc.zkfair.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'zkFair Explorer',
            url: 'https://scan.zkfair.io',
            apiUrl: 'https://scan.zkfair.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6090959,
        },
    },
    testnet: false,
});

const zkFairTestnet = /*#__PURE__*/ defineChain({
    id: 43851,
    name: 'ZKFair Testnet',
    network: 'zkfair-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'USD Coin',
        symbol: 'USDC',
    },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.zkfair.io'],
        },
        public: {
            http: ['https://testnet-rpc.zkfair.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'zkFair Explorer',
            url: 'https://testnet-scan.zkfair.io',
        },
    },
    testnet: true,
});

const zkSync = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 324,
    name: 'zkSync Era',
    network: 'zksync-era',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://mainnet.era.zksync.io'],
            webSocket: ['wss://mainnet.era.zksync.io/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://era.zksync.network/',
            apiUrl: 'https://api-era.zksync.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
        },
    },
});

const zkSyncInMemoryNode = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 260,
    name: 'zkSync InMemory Node',
    network: 'zksync-in-memory-node',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['http://localhost:8011'],
        },
    },
    testnet: true,
});

const zkSyncLocalNode = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 270,
    name: 'zkSync CLI Local Node',
    network: 'zksync-cli-local-node',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['http://localhost:3050'],
        },
    },
    testnet: true,
});

const zkSyncSepoliaTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 300,
    name: 'zkSync Sepolia Testnet',
    network: 'zksync-sepolia-testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia.era.zksync.dev'],
            webSocket: ['wss://sepolia.era.zksync.dev/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'zkExplorer',
            url: 'https://sepolia.explorer.zksync.io/',
        },
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
        },
    },
    testnet: true,
});

/** @deprecated Use `zkSyncSepoliaTestnet` */
const zkSyncTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 280,
    name: 'zkSync Era Testnet',
    network: 'zksync-era-testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.era.zksync.dev'],
            webSocket: ['wss://testnet.era.zksync.dev/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'zkExplorer',
            url: 'https://goerli.explorer.zksync.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
        },
    },
    testnet: true,
});

const sourceId$2 = 1; // mainnet
const zora = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 7777777,
    name: 'Zora',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.zora.energy'],
            webSocket: ['wss://rpc.zora.energy'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://explorer.zora.energy',
            apiUrl: 'https://explorer.zora.energy/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$2]: {
                address: '0x9E6204F750cD866b299594e2aC9eA824E2e5f95c',
            },
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 5882,
        },
        portal: {
            [sourceId$2]: {
                address: '0x1a0ad011913A150f69f6A19DF447A0CfD9551054',
            },
        },
        l1StandardBridge: {
            [sourceId$2]: {
                address: '0x3e2Ea9B92B7E48A52296fD261dc26fd995284631',
            },
        },
    },
    sourceId: sourceId$2,
});

const sourceId$1 = 11_155_111; // sepolia
const zoraSepolia = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 999999999,
    name: 'Zora Sepolia',
    network: 'zora-sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Zora Sepolia',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://sepolia.rpc.zora.energy'],
            webSocket: ['wss://sepolia.rpc.zora.energy'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Zora Sepolia Explorer',
            url: 'https://sepolia.explorer.zora.energy/',
            apiUrl: 'https://sepolia.explorer.zora.energy/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        l2OutputOracle: {
            [sourceId$1]: {
                address: '0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9',
            },
        },
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 83160,
        },
        portal: {
            [sourceId$1]: {
                address: '0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f',
            },
        },
        l1StandardBridge: {
            [sourceId$1]: {
                address: '0x5376f1D543dcbB5BD416c56C189e4cB7399fCcCB',
            },
        },
    },
    sourceId: sourceId$1,
    testnet: true,
});

const sourceId = 5; // goerli
const zoraTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig$2,
    id: 999,
    name: 'Zora Goerli Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Zora Goerli',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.rpc.zora.energy'],
            webSocket: ['wss://testnet.rpc.zora.energy'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Explorer',
            url: 'https://testnet.explorer.zora.energy',
            apiUrl: 'https://testnet.explorer.zora.energy/api',
        },
    },
    contracts: {
        ...chainConfig$2.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 189123,
        },
        portal: {
            [sourceId]: {
                address: '0xDb9F51790365e7dc196e7D072728df39Be958ACe',
            },
        },
    },
    sourceId,
    testnet: true,
});


//# sourceMappingURL=index-40a497ea.js.map


/***/ })

}]);