(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[14485],{

/***/ 230972:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package binary provides functions for encoding and decoding numbers in byte arrays.
 */
var int_1 = __webpack_require__(974512);
// TODO(dchest): add asserts for correct value ranges and array offsets.
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * signed 16-bit integer and returns it.
 */
function readInt16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 0] << 8) | array[offset + 1]) << 16) >> 16;
}
exports.readInt16BE = readInt16BE;
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 0] << 8) | array[offset + 1]) >>> 0;
}
exports.readUint16BE = readUint16BE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * signed 16-bit integer and returns it.
 */
function readInt16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 1] << 8) | array[offset]) << 16) >> 16;
}
exports.readInt16LE = readInt16LE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 1] << 8) | array[offset]) >>> 0;
}
exports.readUint16LE = readUint16LE;
/**
 * Writes 2-byte big-endian representation of 16-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 8;
    out[offset + 1] = value >>> 0;
    return out;
}
exports.writeUint16BE = writeUint16BE;
exports.writeInt16BE = writeUint16BE;
/**
 * Writes 2-byte little-endian representation of 16-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    return out;
}
exports.writeUint16LE = writeUint16LE;
exports.writeInt16LE = writeUint16LE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * signed 32-bit integer and returns it.
 */
function readInt32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3];
}
exports.readInt32BE = readInt32BE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3]) >>> 0;
}
exports.readUint32BE = readUint32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * signed 32-bit integer and returns it.
 */
function readInt32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset];
}
exports.readInt32LE = readInt32LE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset]) >>> 0;
}
exports.readUint32LE = readUint32LE;
/**
 * Writes 4-byte big-endian representation of 32-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 24;
    out[offset + 1] = value >>> 16;
    out[offset + 2] = value >>> 8;
    out[offset + 3] = value >>> 0;
    return out;
}
exports.writeUint32BE = writeUint32BE;
exports.writeInt32BE = writeUint32BE;
/**
 * Writes 4-byte little-endian representation of 32-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    out[offset + 2] = value >>> 16;
    out[offset + 3] = value >>> 24;
    return out;
}
exports.writeUint32LE = writeUint32LE;
exports.writeInt32LE = writeUint32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readInt32BE(array, offset);
    var lo = readInt32BE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
exports.readInt64BE = readInt64BE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readUint32BE(array, offset);
    var lo = readUint32BE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64BE = readUint64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readInt32LE(array, offset);
    var hi = readInt32LE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
exports.readInt64LE = readInt64LE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readUint32LE(array, offset);
    var hi = readUint32LE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64LE = readUint64LE;
/**
 * Writes 8-byte big-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32BE(value / 0x100000000 >>> 0, out, offset);
    writeUint32BE(value >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64BE = writeUint64BE;
exports.writeInt64BE = writeUint64BE;
/**
 * Writes 8-byte little-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32LE(value >>> 0, out, offset);
    writeUint32LE(value / 0x100000000 >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64LE = writeUint64LE;
exports.writeInt64LE = writeUint64LE;
/**
 * Reads bytes from array starting at offset as big-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintBE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintBE = readUintBE;
/**
 * Reads bytes from array starting at offset as little-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintLE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintLE = readUintLE;
/**
 * Writes a big-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintBE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
    }
    var div = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintBE = writeUintBE;
/**
 * Writes a little-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintLE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
    }
    var div = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintLE = writeUintLE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset);
}
exports.readFloat32BE = readFloat32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset, true);
}
exports.readFloat32LE = readFloat32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset);
}
exports.readFloat64BE = readFloat64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset, true);
}
exports.readFloat64LE = readFloat64LE;
/**
 * Writes 4-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value);
    return out;
}
exports.writeFloat32BE = writeFloat32BE;
/**
 * Writes 4-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value, true);
    return out;
}
exports.writeFloat32LE = writeFloat32LE;
/**
 * Writes 8-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value);
    return out;
}
exports.writeFloat64BE = writeFloat64BE;
/**
 * Writes 8-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value, true);
    return out;
}
exports.writeFloat64LE = writeFloat64LE;
//# sourceMappingURL=binary.js.map

/***/ }),

/***/ 929918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package chacha implements ChaCha stream cipher.
 */
var binary_1 = __webpack_require__(230972);
var wipe_1 = __webpack_require__(276228);
// Number of ChaCha rounds (ChaCha20).
var ROUNDS = 20;
// Applies the ChaCha core function to 16-byte input,
// 32-byte key key, and puts the result into 64-byte array out.
function core(out, input, key) {
    var j0 = 0x61707865; // "expa"  -- ChaCha's "sigma" constant
    var j1 = 0x3320646E; // "nd 3"     for 32-byte keys
    var j2 = 0x79622D32; // "2-by"
    var j3 = 0x6B206574; // "te k"
    var j4 = (key[3] << 24) | (key[2] << 16) | (key[1] << 8) | key[0];
    var j5 = (key[7] << 24) | (key[6] << 16) | (key[5] << 8) | key[4];
    var j6 = (key[11] << 24) | (key[10] << 16) | (key[9] << 8) | key[8];
    var j7 = (key[15] << 24) | (key[14] << 16) | (key[13] << 8) | key[12];
    var j8 = (key[19] << 24) | (key[18] << 16) | (key[17] << 8) | key[16];
    var j9 = (key[23] << 24) | (key[22] << 16) | (key[21] << 8) | key[20];
    var j10 = (key[27] << 24) | (key[26] << 16) | (key[25] << 8) | key[24];
    var j11 = (key[31] << 24) | (key[30] << 16) | (key[29] << 8) | key[28];
    var j12 = (input[3] << 24) | (input[2] << 16) | (input[1] << 8) | input[0];
    var j13 = (input[7] << 24) | (input[6] << 16) | (input[5] << 8) | input[4];
    var j14 = (input[11] << 24) | (input[10] << 16) | (input[9] << 8) | input[8];
    var j15 = (input[15] << 24) | (input[14] << 16) | (input[13] << 8) | input[12];
    var x0 = j0;
    var x1 = j1;
    var x2 = j2;
    var x3 = j3;
    var x4 = j4;
    var x5 = j5;
    var x6 = j6;
    var x7 = j7;
    var x8 = j8;
    var x9 = j9;
    var x10 = j10;
    var x11 = j11;
    var x12 = j12;
    var x13 = j13;
    var x14 = j14;
    var x15 = j15;
    for (var i = 0; i < ROUNDS; i += 2) {
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 7) | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 7) | x5 << 7;
    }
    binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
    binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
    binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
    binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
    binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
    binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
    binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
    binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
    binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
    binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
    binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
    binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
    binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
    binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
    binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
    binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
/**
 * Encrypt src with ChaCha20 stream generated for the given 32-byte key and
 * 8-byte (as in original implementation) or 12-byte (as in RFC7539) nonce and
 * write the result into dst and return it.
 *
 * dst and src may be the same, but otherwise must not overlap.
 *
 * If nonce is 12 bytes, users should not encrypt more than 256 GiB with the
 * same key and nonce, otherwise the stream will repeat. The function will
 * throw error if counter overflows to prevent this.
 *
 * If nonce is 8 bytes, the output is practically unlimited (2^70 bytes, which
 * is more than a million petabytes). However, it is not recommended to
 * generate 8-byte nonces randomly, as the chance of collision is high.
 *
 * Never use the same key and nonce to encrypt more than one message.
 *
 * If nonceInplaceCounterLength is not 0, the nonce is assumed to be a 16-byte
 * array with stream counter in first nonceInplaceCounterLength bytes and nonce
 * in the last remaining bytes. The counter will be incremented inplace for
 * each ChaCha block. This is useful if you need to encrypt one stream of data
 * in chunks.
 */
function streamXOR(key, nonce, src, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    // We only support 256-bit keys.
    if (key.length !== 32) {
        throw new Error("ChaCha: key size must be 32 bytes");
    }
    if (dst.length < src.length) {
        throw new Error("ChaCha: destination is shorter than source");
    }
    var nc;
    var counterLength;
    if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) {
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
        }
        nc = new Uint8Array(16);
        // First counterLength bytes of nc are counter, starting with zero.
        counterLength = nc.length - nonce.length;
        // Last bytes of nc after counterLength are nonce, set them.
        nc.set(nonce, counterLength);
    }
    else {
        if (nonce.length !== 16) {
            throw new Error("ChaCha nonce with counter must be 16 bytes");
        }
        // This will update passed nonce with counter inplace.
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
    }
    // Allocate temporary space for ChaCha block.
    var block = new Uint8Array(64);
    for (var i = 0; i < src.length; i += 64) {
        // Generate a block.
        core(block, nc, key);
        // XOR block bytes with src into dst.
        for (var j = i; j < i + 64 && j < src.length; j++) {
            dst[j] = src[j] ^ block[j - i];
        }
        // Increment counter.
        incrementCounter(nc, 0, counterLength);
    }
    // Cleanup temporary space.
    wipe_1.wipe(block);
    if (nonceInplaceCounterLength === 0) {
        // Cleanup counter.
        wipe_1.wipe(nc);
    }
    return dst;
}
exports.streamXOR = streamXOR;
/**
 * Generate ChaCha20 stream for the given 32-byte key and 8-byte or 12-byte
 * nonce and write it into dst and return it.
 *
 * Never use the same key and nonce to generate more than one stream.
 *
 * If nonceInplaceCounterLength is not 0, it behaves the same with respect to
 * the nonce as described in the streamXOR documentation.
 *
 * stream is like streamXOR with all-zero src.
 */
function stream(key, nonce, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    wipe_1.wipe(dst);
    return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
exports.stream = stream;
function incrementCounter(counter, pos, len) {
    var carry = 1;
    while (len--) {
        carry = carry + (counter[pos] & 0xff) | 0;
        counter[pos] = carry & 0xff;
        carry >>>= 8;
        pos++;
    }
    if (carry > 0) {
        throw new Error("ChaCha: counter overflow");
    }
}
//# sourceMappingURL=chacha.js.map

/***/ }),

/***/ 851612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
__webpack_unused_export__ = ({ value: true });
var chacha_1 = __webpack_require__(929918);
var poly1305_1 = __webpack_require__(777360);
var wipe_1 = __webpack_require__(276228);
var binary_1 = __webpack_require__(230972);
var constant_time_1 = __webpack_require__(926452);
exports.J4 = 32;
exports.PX = 12;
exports.iW = 16;
var ZEROS = new Uint8Array(16);
/**
 * ChaCha20-Poly1305 Authenticated Encryption with Associated Data.
 *
 * Defined in RFC7539.
 */
var ChaCha20Poly1305 = /** @class */ (function () {
    /**
     * Creates a new instance with the given 32-byte key.
     */
    function ChaCha20Poly1305(key) {
        this.nonceLength = exports.PX;
        this.tagLength = exports.iW;
        if (key.length !== exports.J4) {
            throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        // Copy key.
        this._key = new Uint8Array(key);
    }
    /**
     * Encrypts and authenticates plaintext, authenticates associated data,
     * and returns sealed ciphertext, which includes authentication tag.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If dst is given (it must be the size of plaintext + the size of tag
     * length) the result will be put into it. Dst and plaintext must not
     * overlap.
     */
    ChaCha20Poly1305.prototype.seal = function (nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        // We pass full counter, which has 12-byte nonce and 4-byte block counter,
        // and it will get incremented after generating the block, which is
        // exactly what we need: we only use the first 32 bytes of 64-byte
        // ChaCha block and discard the next 32 bytes.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Allocate space for sealed ciphertext.
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) {
                throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
        }
        else {
            result = new Uint8Array(resultLength);
        }
        // Encrypt plaintext.
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        // Authenticate.
        // XXX: can "simplify" here: pass full result (which is already padded
        // due to zeroes prepared for tag), and ciphertext length instead of
        // subarray of result.
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    /**
     * Authenticates sealed ciphertext (which includes authentication tag) and
     * associated data, decrypts ciphertext and returns decrypted plaintext.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If authentication fails, it returns null.
     *
     * If dst is given (it must be of ciphertext length minus tag length),
     * the result will be put into it. Dst and plaintext must not overlap.
     */
    ChaCha20Poly1305.prototype.open = function (nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        // Sealed ciphertext should at least contain tag.
        if (sealed.length < this.tagLength) {
            // TODO(dchest): should we throw here instead?
            return null;
        }
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Authenticate.
        // XXX: can simplify and avoid allocation: since authenticate()
        // already allocates tag (from Poly1305.digest(), it can return)
        // it instead of copying to calculatedTag. But then in seal()
        // we'll need to copy it.
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        // Constant-time compare tags and return null if they differ.
        if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
            return null;
        }
        // Allocate space for decrypted plaintext.
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) {
                throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
        }
        else {
            result = new Uint8Array(resultLength);
        }
        // Decrypt.
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    ChaCha20Poly1305.prototype.clean = function () {
        wipe_1.wipe(this._key);
        return this;
    };
    ChaCha20Poly1305.prototype._authenticate = function (tagOut, authKey, ciphertext, associatedData) {
        // Initialize Poly1305 with authKey.
        var h = new poly1305_1.Poly1305(authKey);
        // Authenticate padded associated data.
        if (associatedData) {
            h.update(associatedData);
            if (associatedData.length % 16 > 0) {
                h.update(ZEROS.subarray(associatedData.length % 16));
            }
        }
        // Authenticate padded ciphertext.
        h.update(ciphertext);
        if (ciphertext.length % 16 > 0) {
            h.update(ZEROS.subarray(ciphertext.length % 16));
        }
        // Authenticate length of associated data.
        // XXX: can avoid allocation here?
        var length = new Uint8Array(8);
        if (associatedData) {
            binary_1.writeUint64LE(associatedData.length, length);
        }
        h.update(length);
        // Authenticate length of ciphertext.
        binary_1.writeUint64LE(ciphertext.length, length);
        h.update(length);
        // Get tag and copy it into tagOut.
        var tag = h.digest();
        for (var i = 0; i < tag.length; i++) {
            tagOut[i] = tag[i];
        }
        // Cleanup.
        h.clean();
        wipe_1.wipe(tag);
        wipe_1.wipe(length);
    };
    return ChaCha20Poly1305;
}());
exports.g6 = ChaCha20Poly1305;
//# sourceMappingURL=chacha20poly1305.js.map

/***/ }),

/***/ 926452:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package constant-time provides functions for performing algorithmically constant-time operations.
 */
/**
 * NOTE! Due to the inability to guarantee real constant time evaluation of
 * anything in JavaScript VM, this is module is the best effort.
 */
/**
 * Returns resultIfOne if subject is 1, or resultIfZero if subject is 0.
 *
 * Supports only 32-bit integers, so resultIfOne or resultIfZero are not
 * integers, they'll be converted to them with bitwise operations.
 */
function select(subject, resultIfOne, resultIfZero) {
    return (~(subject - 1) & resultIfOne) | ((subject - 1) & resultIfZero);
}
exports.select = select;
/**
 * Returns 1 if a <= b, or 0 if not.
 * Arguments must be positive 32-bit integers less than or equal to 2^31 - 1.
 */
function lessOrEqual(a, b) {
    return (((a | 0) - (b | 0) - 1) >>> 31) & 1;
}
exports.lessOrEqual = lessOrEqual;
/**
 * Returns 1 if a and b are of equal length and their contents
 * are equal, or 0 otherwise.
 *
 * Note that unlike in equal(), zero-length inputs are considered
 * the same, so this function will return 1.
 */
function compare(a, b) {
    if (a.length !== b.length) {
        return 0;
    }
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result |= a[i] ^ b[i];
    }
    return (1 & ((result - 1) >>> 8));
}
exports.compare = compare;
/**
 * Returns true if a and b are of equal non-zero length,
 * and their contents are equal, or false otherwise.
 *
 * Note that unlike in compare() zero-length inputs are considered
 * _not_ equal, so this function will return false.
 */
function equal(a, b) {
    if (a.length === 0 || b.length === 0) {
        return false;
    }
    return compare(a, b) !== 0;
}
exports.equal = equal;
//# sourceMappingURL=constant-time.js.map

/***/ }),

/***/ 934904:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports._S = __webpack_unused_export__ = __webpack_unused_export__ = exports.K = exports.TP = exports.wE = __webpack_unused_export__ = exports.Ee = void 0;
/**
 * Package ed25519 implements Ed25519 public-key signature algorithm.
 */
const random_1 = __webpack_require__(337052);
const sha512_1 = __webpack_require__(864974);
const wipe_1 = __webpack_require__(276228);
exports.Ee = 64;
__webpack_unused_export__ = 32;
exports.wE = 64;
exports.TP = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function gf(init) {
    const r = new Float64Array(16);
    if (init) {
        for (let i = 0; i < init.length; i++) {
            r[i] = init[i];
        }
    }
    return r;
}
// Base point.
const _9 = new Uint8Array(32);
_9[0] = 9;
const gf0 = gf();
const gf1 = gf([1]);
const D = gf([
    0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070,
    0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203
]);
const D2 = gf([
    0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0,
    0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406
]);
const X = gf([
    0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c,
    0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169
]);
const Y = gf([
    0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666,
    0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666
]);
const I = gf([
    0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43,
    0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83
]);
function set25519(r, a) {
    for (let i = 0; i < 16; i++) {
        r[i] = a[i] | 0;
    }
}
function car25519(o) {
    let c = 1;
    for (let i = 0; i < 16; i++) {
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
    const c = ~(b - 1);
    for (let i = 0; i < 16; i++) {
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function pack25519(o, n) {
    const m = gf();
    const t = gf();
    for (let i = 0; i < 16; i++) {
        t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j = 0; j < 2; j++) {
        m[0] = t[0] - 0xffed;
        for (let i = 1; i < 15; i++) {
            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
        const b = (m[15] >> 16) & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for (let i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function verify32(x, y) {
    let d = 0;
    for (let i = 0; i < 32; i++) {
        d |= x[i] ^ y[i];
    }
    return (1 & ((d - 1) >>> 8)) - 1;
}
function neq25519(a, b) {
    const c = new Uint8Array(32);
    const d = new Uint8Array(32);
    pack25519(c, a);
    pack25519(d, b);
    return verify32(c, d);
}
function par25519(a) {
    const d = new Uint8Array(32);
    pack25519(d, a);
    return d[0] & 1;
}
function unpack25519(o, n) {
    for (let i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 0x7fff;
}
function add(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
    }
}
function sub(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
    }
}
function mul(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function square(o, a) {
    mul(o, a, a);
}
function inv25519(o, i) {
    const c = gf();
    let a;
    for (a = 0; a < 16; a++) {
        c[a] = i[a];
    }
    for (a = 253; a >= 0; a--) {
        square(c, c);
        if (a !== 2 && a !== 4) {
            mul(c, c, i);
        }
    }
    for (a = 0; a < 16; a++) {
        o[a] = c[a];
    }
}
function pow2523(o, i) {
    const c = gf();
    let a;
    for (a = 0; a < 16; a++) {
        c[a] = i[a];
    }
    for (a = 250; a >= 0; a--) {
        square(c, c);
        if (a !== 1) {
            mul(c, c, i);
        }
    }
    for (a = 0; a < 16; a++) {
        o[a] = c[a];
    }
}
function edadd(p, q) {
    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
    sub(a, p[1], p[0]);
    sub(t, q[1], q[0]);
    mul(a, a, t);
    add(b, p[0], p[1]);
    add(t, q[0], q[1]);
    mul(b, b, t);
    mul(c, p[3], q[3]);
    mul(c, c, D2);
    mul(d, p[2], q[2]);
    add(d, d, d);
    sub(e, b, a);
    sub(f, d, c);
    add(g, d, c);
    add(h, b, a);
    mul(p[0], e, f);
    mul(p[1], h, g);
    mul(p[2], g, f);
    mul(p[3], e, h);
}
function cswap(p, q, b) {
    for (let i = 0; i < 4; i++) {
        sel25519(p[i], q[i], b);
    }
}
function pack(r, p) {
    const tx = gf(), ty = gf(), zi = gf();
    inv25519(zi, p[2]);
    mul(tx, p[0], zi);
    mul(ty, p[1], zi);
    pack25519(r, ty);
    r[31] ^= par25519(tx) << 7;
}
function scalarmult(p, q, s) {
    set25519(p[0], gf0);
    set25519(p[1], gf1);
    set25519(p[2], gf1);
    set25519(p[3], gf0);
    for (let i = 255; i >= 0; --i) {
        const b = (s[(i / 8) | 0] >> (i & 7)) & 1;
        cswap(p, q, b);
        edadd(q, p);
        edadd(p, p);
        cswap(p, q, b);
    }
}
function scalarbase(p, s) {
    const q = [gf(), gf(), gf(), gf()];
    set25519(q[0], X);
    set25519(q[1], Y);
    set25519(q[2], gf1);
    mul(q[3], X, Y);
    scalarmult(p, q, s);
}
// Generates key pair from secret 32-byte seed.
function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.TP) {
        throw new Error(`ed25519: seed must be ${exports.TP} bytes`);
    }
    const d = (0, sha512_1.hash)(seed);
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const publicKey = new Uint8Array(32);
    const p = [gf(), gf(), gf(), gf()];
    scalarbase(p, d);
    pack(publicKey, p);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
        publicKey,
        secretKey
    };
}
exports.K = generateKeyPairFromSeed;
function generateKeyPair(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_1.wipe)(seed);
    return result;
}
__webpack_unused_export__ = generateKeyPair;
function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports.wE) {
        throw new Error(`ed25519: secret key must be ${exports.wE} bytes`);
    }
    return new Uint8Array(secretKey.subarray(32));
}
__webpack_unused_export__ = extractPublicKeyFromSecretKey;
const L = new Float64Array([
    0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2,
    0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10
]);
function modL(r, x) {
    let carry;
    let i;
    let j;
    let k;
    for (i = 63; i >= 32; --i) {
        carry = 0;
        for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
        }
        x[j] += carry;
        x[i] = 0;
    }
    carry = 0;
    for (j = 0; j < 32; j++) {
        x[j] += carry - (x[31] >> 4) * L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
    }
    for (j = 0; j < 32; j++) {
        x[j] -= carry * L[j];
    }
    for (i = 0; i < 32; i++) {
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
    }
}
function reduce(r) {
    const x = new Float64Array(64);
    for (let i = 0; i < 64; i++) {
        x[i] = r[i];
    }
    for (let i = 0; i < 64; i++) {
        r[i] = 0;
    }
    modL(r, x);
}
// Returns 64-byte signature of the message under the 64-byte secret key.
function sign(secretKey, message) {
    const x = new Float64Array(64);
    const p = [gf(), gf(), gf(), gf()];
    const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const signature = new Uint8Array(64);
    signature.set(d.subarray(32), 32);
    const hs = new sha512_1.SHA512();
    hs.update(signature.subarray(32));
    hs.update(message);
    const r = hs.digest();
    hs.clean();
    reduce(r);
    scalarbase(p, r);
    pack(signature, p);
    hs.reset();
    hs.update(signature.subarray(0, 32));
    hs.update(secretKey.subarray(32));
    hs.update(message);
    const h = hs.digest();
    reduce(h);
    for (let i = 0; i < 32; i++) {
        x[i] = r[i];
    }
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
            x[i + j] += h[i] * d[j];
        }
    }
    modL(signature.subarray(32), x);
    return signature;
}
exports._S = sign;
function unpackneg(r, p) {
    const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
    set25519(r[2], gf1);
    unpack25519(r[1], p);
    square(num, r[1]);
    mul(den, num, D);
    sub(num, num, r[2]);
    add(den, r[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t, den6, num);
    mul(t, t, den);
    pow2523(t, t);
    mul(t, t, num);
    mul(t, t, den);
    mul(t, t, den);
    mul(r[0], t, den);
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
        mul(r[0], r[0], I);
    }
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
        return -1;
    }
    if (par25519(r[0]) === (p[31] >> 7)) {
        sub(r[0], gf0, r[0]);
    }
    mul(r[3], r[0], r[1]);
    return 0;
}
function verify(publicKey, message, signature) {
    const t = new Uint8Array(32);
    const p = [gf(), gf(), gf(), gf()];
    const q = [gf(), gf(), gf(), gf()];
    if (signature.length !== exports.Ee) {
        throw new Error(`ed25519: signature must be ${exports.Ee} bytes`);
    }
    if (unpackneg(q, publicKey)) {
        return false;
    }
    const hs = new sha512_1.SHA512();
    hs.update(signature.subarray(0, 32));
    hs.update(publicKey);
    hs.update(message);
    const h = hs.digest();
    reduce(h);
    scalarmult(p, q, h);
    scalarbase(q, signature.subarray(32));
    edadd(p, q);
    pack(t, p);
    if (verify32(signature, t)) {
        return false;
    }
    return true;
}
__webpack_unused_export__ = verify;
/**
 * Convert Ed25519 public key to X25519 public key.
 *
 * Throws if given an invalid public key.
 */
function convertPublicKeyToX25519(publicKey) {
    let q = [gf(), gf(), gf(), gf()];
    if (unpackneg(q, publicKey)) {
        throw new Error("Ed25519: invalid public key");
    }
    // Formula: montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
    let a = gf();
    let b = gf();
    let y = q[1];
    add(a, gf1, y);
    sub(b, gf1, y);
    inv25519(b, b);
    mul(a, a, b);
    let z = new Uint8Array(32);
    pack25519(z, a);
    return z;
}
__webpack_unused_export__ = convertPublicKeyToX25519;
/**
 *  Convert Ed25519 secret (private) key to X25519 secret key.
 */
function convertSecretKeyToX25519(secretKey) {
    const d = (0, sha512_1.hash)(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    const o = new Uint8Array(d.subarray(0, 32));
    (0, wipe_1.wipe)(d);
    return o;
}
__webpack_unused_export__ = convertSecretKeyToX25519;
//# sourceMappingURL=ed25519.js.map

/***/ }),

/***/ 252670:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
function isSerializableHash(h) {
    return (typeof h.saveState !== "undefined" &&
        typeof h.restoreState !== "undefined" &&
        typeof h.cleanSavedState !== "undefined");
}
exports.isSerializableHash = isSerializableHash;
// TODO(dchest): figure out the standardized interface for XOF such as
// SHAKE and BLAKE2X.
//# sourceMappingURL=hash.js.map

/***/ }),

/***/ 616804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
__webpack_unused_export__ = ({ value: true });
var hmac_1 = __webpack_require__(422412);
var wipe_1 = __webpack_require__(276228);
/**
 * HMAC-based Extract-and-Expand Key Derivation Function.
 *
 * Implements HKDF from RFC5869.
 *
 * Expands the given master key with salt and info into
 * a limited stream of key material.
 */
var HKDF = /** @class */ (function () {
    /**
     * Create a new HKDF instance for the given hash function
     * with the master key, optional salt, and info.
     *
     * - Master key is a high-entropy secret key (not a password).
     * - Salt is a non-secret random value.
     * - Info is application- and/or context-specific information.
     */
    function HKDF(hash, key, salt, info) {
        if (salt === void 0) { salt = new Uint8Array(0); }
        this._counter = new Uint8Array(1); // starts with zero
        this._hash = hash;
        this._info = info;
        // HKDF-Extract uses salt as HMAC key, and key as data.
        var okm = hmac_1.hmac(this._hash, salt, key);
        // Initialize HMAC for expanding with extracted key.
        this._hmac = new hmac_1.HMAC(hash, okm);
        // Allocate buffer.
        this._buffer = new Uint8Array(this._hmac.digestLength);
        this._bufpos = this._buffer.length;
    }
    // Fill buffer with new block of HKDF-Extract output.
    HKDF.prototype._fillBuffer = function () {
        // Increment counter.
        this._counter[0]++;
        var ctr = this._counter[0];
        // Check if counter overflowed.
        if (ctr === 0) {
            throw new Error("hkdf: cannot expand more");
        }
        // Prepare HMAC instance for new data with old key.
        this._hmac.reset();
        // Hash in previous output if it was generated
        // (i.e. counter is greater than 1).
        if (ctr > 1) {
            this._hmac.update(this._buffer);
        }
        // Hash in info if it exists.
        if (this._info) {
            this._hmac.update(this._info);
        }
        // Hash in the counter.
        this._hmac.update(this._counter);
        // Output result to buffer and clean HMAC instance.
        this._hmac.finish(this._buffer);
        // Reset buffer position.
        this._bufpos = 0;
    };
    /**
     * Expand returns next key material of the given length.
     *
     * It throws if expansion limit is reached (which is
     * 254 digests of the underlying HMAC function).
     */
    HKDF.prototype.expand = function (length) {
        var out = new Uint8Array(length);
        for (var i = 0; i < out.length; i++) {
            if (this._bufpos === this._buffer.length) {
                this._fillBuffer();
            }
            out[i] = this._buffer[this._bufpos++];
        }
        return out;
    };
    HKDF.prototype.clean = function () {
        this._hmac.clean();
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._counter);
        this._bufpos = 0;
    };
    return HKDF;
}());
exports.i = HKDF;
// TODO(dchest): maybe implement deriveKey?
//# sourceMappingURL=hkdf.js.map

/***/ }),

/***/ 422412:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package hmac implements HMAC algorithm.
 */
var hash_1 = __webpack_require__(252670);
var constant_time_1 = __webpack_require__(926452);
var wipe_1 = __webpack_require__(276228);
/**
 *  HMAC implements hash-based message authentication algorithm.
 */
var HMAC = /** @class */ (function () {
    /**
     * Constructs a new HMAC with the given Hash and secret key.
     */
    function HMAC(hash, key) {
        this._finished = false; // true if HMAC was finalized
        // Initialize inner and outer hashes.
        this._inner = new hash();
        this._outer = new hash();
        // Set block and digest sizes for this HMAC
        // instance to values from the hash.
        this.blockSize = this._outer.blockSize;
        this.digestLength = this._outer.digestLength;
        // Pad temporary stores a key (or its hash) padded with zeroes.
        var pad = new Uint8Array(this.blockSize);
        if (key.length > this.blockSize) {
            // If key is bigger than hash block size, it must be
            // hashed and this hash is used as a key instead.
            this._inner.update(key).finish(pad).clean();
        }
        else {
            // Otherwise, copy the key into pad.
            pad.set(key);
        }
        // Now two different keys are derived from padded key
        // by xoring a different byte value to each.
        // To make inner hash key, xor byte 0x36 into pad.
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36;
        }
        // Update inner hash with the result.
        this._inner.update(pad);
        // To make outer hash key, xor byte 0x5c into pad.
        // But since we already xored 0x36 there, we must
        // first undo this by xoring it again.
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36 ^ 0x5c;
        }
        // Update outer hash with the result.
        this._outer.update(pad);
        // Save states of both hashes, so that we can quickly restore
        // them later in reset() without the need to remember the actual
        // key and perform this initialization again.
        if (hash_1.isSerializableHash(this._inner) && hash_1.isSerializableHash(this._outer)) {
            this._innerKeyedState = this._inner.saveState();
            this._outerKeyedState = this._outer.saveState();
        }
        // Clean pad.
        wipe_1.wipe(pad);
    }
    /**
     * Returns HMAC state to the state initialized with key
     * to make it possible to run HMAC over the other data with the same
     * key without creating a new instance.
     */
    HMAC.prototype.reset = function () {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        }
        // Restore keyed states of inner and outer hashes.
        this._inner.restoreState(this._innerKeyedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    /**
     * Cleans HMAC state.
     */
    HMAC.prototype.clean = function () {
        if (hash_1.isSerializableHash(this._inner)) {
            this._inner.cleanSavedState(this._innerKeyedState);
        }
        if (hash_1.isSerializableHash(this._outer)) {
            this._outer.cleanSavedState(this._outerKeyedState);
        }
        this._inner.clean();
        this._outer.clean();
    };
    /**
     * Updates state with provided data.
     */
    HMAC.prototype.update = function (data) {
        this._inner.update(data);
        return this;
    };
    /**
     * Finalizes HMAC and puts the result in out.
     */
    HMAC.prototype.finish = function (out) {
        if (this._finished) {
            // If HMAC was finalized, outer hash is also finalized,
            // so it produces the same digest it produced when it
            // was finalized.
            this._outer.finish(out);
            return this;
        }
        // Finalize inner hash and store the result temporarily.
        this._inner.finish(out);
        // Update outer hash with digest of inner hash and and finalize it.
        this._outer.update(out.subarray(0, this.digestLength)).finish(out);
        this._finished = true;
        return this;
    };
    /**
     * Returns the computed message authentication code.
     */
    HMAC.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Saves HMAC state.
     * This function is needed for PBKDF2 optimization.
     */
    HMAC.prototype.saveState = function () {
        if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't saveState() because hash doesn't implement it");
        }
        return this._inner.saveState();
    };
    HMAC.prototype.restoreState = function (savedState) {
        if (!hash_1.isSerializableHash(this._inner) || !hash_1.isSerializableHash(this._outer)) {
            throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        }
        this._inner.restoreState(savedState);
        this._outer.restoreState(this._outerKeyedState);
        this._finished = false;
        return this;
    };
    HMAC.prototype.cleanSavedState = function (savedState) {
        if (!hash_1.isSerializableHash(this._inner)) {
            throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        }
        this._inner.cleanSavedState(savedState);
    };
    return HMAC;
}());
exports.HMAC = HMAC;
/**
 * Returns HMAC using the given hash constructor for the key over data.
 */
function hmac(hash, key, data) {
    var h = new HMAC(hash, key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hmac = hmac;
/**
 * Returns true if two HMAC digests are equal.
 * Uses constant-time comparison to avoid leaking timing information.
 *
 * Example:
 *
 *    const receivedDigest = ...
 *    const realDigest = hmac(SHA256, key, data);
 *    if (!equal(receivedDigest, realDigest)) {
 *        throw new Error("Authentication error");
 *    }
 */
exports.equal = constant_time_1.equal;
//# sourceMappingURL=hmac.js.map

/***/ }),

/***/ 974512:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package int provides helper functions for integerss.
 */
// Shim using 16-bit pieces.
function imulShim(a, b) {
    var ah = (a >>> 16) & 0xffff, al = a & 0xffff;
    var bh = (b >>> 16) & 0xffff, bl = b & 0xffff;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
}
/** 32-bit integer multiplication.  */
// Use system Math.imul if available, otherwise use our shim.
exports.mul = Math.imul || imulShim;
/** 32-bit integer addition.  */
function add(a, b) {
    return (a + b) | 0;
}
exports.add = add;
/**  32-bit integer subtraction.  */
function sub(a, b) {
    return (a - b) | 0;
}
exports.sub = sub;
/** 32-bit integer left rotation */
function rotl(x, n) {
    return x << n | x >>> (32 - n);
}
exports.rotl = rotl;
/** 32-bit integer left rotation */
function rotr(x, n) {
    return x << (32 - n) | x >>> n;
}
exports.rotr = rotr;
function isIntegerShim(n) {
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
}
/**
 * Returns true if the argument is an integer number.
 *
 * In ES2015, Number.isInteger.
 */
exports.isInteger = Number.isInteger || isIntegerShim;
/**
 *  Math.pow(2, 53) - 1
 *
 *  In ES2015 Number.MAX_SAFE_INTEGER.
 */
exports.MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Returns true if the argument is a safe integer number
 * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)
 *
 * In ES2015, Number.isSafeInteger.
 */
exports.isSafeInteger = function (n) {
    return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);
};
//# sourceMappingURL=int.js.map

/***/ }),

/***/ 777360:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package poly1305 implements Poly1305 one-time message authentication algorithm.
 */
var constant_time_1 = __webpack_require__(926452);
var wipe_1 = __webpack_require__(276228);
exports.DIGEST_LENGTH = 16;
// Port of Andrew Moon's Poly1305-donna-16. Public domain.
// https://github.com/floodyberry/poly1305-donna
/**
 * Poly1305 computes 16-byte authenticator of message using
 * a one-time 32-byte key.
 *
 * Important: key should be used for only one message,
 * it should never repeat.
 */
var Poly1305 = /** @class */ (function () {
    function Poly1305(key) {
        this.digestLength = exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = (t0) & 0x1fff;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = ((t1 >>> 10) | (t2 << 6)) & 0x1f03;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = ((t3 >>> 4) | (t4 << 12)) & 0x00ff;
        this._r[5] = ((t4 >>> 1)) & 0x1ffe;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = ((t5 >>> 11) | (t6 << 5)) & 0x1f81;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
        this._r[9] = ((t7 >>> 5)) & 0x007f;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
    }
    Poly1305.prototype._blocks = function (m, mpos, bytes) {
        var hibit = this._fin ? 0 : 1 << 11;
        var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while (bytes >= 16) {
            var t0 = m[mpos + 0] | m[mpos + 1] << 8;
            h0 += (t0) & 0x1fff;
            var t1 = m[mpos + 2] | m[mpos + 3] << 8;
            h1 += ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
            var t2 = m[mpos + 4] | m[mpos + 5] << 8;
            h2 += ((t1 >>> 10) | (t2 << 6)) & 0x1fff;
            var t3 = m[mpos + 6] | m[mpos + 7] << 8;
            h3 += ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
            var t4 = m[mpos + 8] | m[mpos + 9] << 8;
            h4 += ((t3 >>> 4) | (t4 << 12)) & 0x1fff;
            h5 += ((t4 >>> 1)) & 0x1fff;
            var t5 = m[mpos + 10] | m[mpos + 11] << 8;
            h6 += ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
            var t6 = m[mpos + 12] | m[mpos + 13] << 8;
            h7 += ((t5 >>> 11) | (t6 << 5)) & 0x1fff;
            var t7 = m[mpos + 14] | m[mpos + 15] << 8;
            h8 += ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
            h9 += ((t7 >>> 5)) | hibit;
            var c = 0;
            var d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = (d0 >>> 13);
            d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += (d0 >>> 13);
            d0 &= 0x1fff;
            var d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = (d1 >>> 13);
            d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += (d1 >>> 13);
            d1 &= 0x1fff;
            var d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = (d2 >>> 13);
            d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += (d2 >>> 13);
            d2 &= 0x1fff;
            var d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = (d3 >>> 13);
            d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += (d3 >>> 13);
            d3 &= 0x1fff;
            var d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = (d4 >>> 13);
            d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += (d4 >>> 13);
            d4 &= 0x1fff;
            var d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = (d5 >>> 13);
            d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += (d5 >>> 13);
            d5 &= 0x1fff;
            var d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = (d6 >>> 13);
            d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += (d6 >>> 13);
            d6 &= 0x1fff;
            var d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = (d7 >>> 13);
            d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += (d7 >>> 13);
            d7 &= 0x1fff;
            var d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = (d8 >>> 13);
            d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += (d8 >>> 13);
            d8 &= 0x1fff;
            var d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = (d9 >>> 13);
            d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += (d9 >>> 13);
            d9 &= 0x1fff;
            c = (((c << 2) + c)) | 0;
            c = (c + d0) | 0;
            d0 = c & 0x1fff;
            c = (c >>> 13);
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h2;
        this._h[3] = h3;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
    };
    Poly1305.prototype.finish = function (mac, macpos) {
        if (macpos === void 0) { macpos = 0; }
        var g = new Uint16Array(10);
        var c;
        var mask;
        var f;
        var i;
        if (this._leftover) {
            i = this._leftover;
            this._buffer[i++] = 1;
            for (; i < 16; i++) {
                this._buffer[i] = 0;
            }
            this._fin = 1;
            this._blocks(this._buffer, 0, 16);
        }
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        for (i = 2; i < 10; i++) {
            this._h[i] += c;
            c = this._h[i] >>> 13;
            this._h[i] &= 0x1fff;
        }
        this._h[0] += (c * 5);
        c = this._h[0] >>> 13;
        this._h[0] &= 0x1fff;
        this._h[1] += c;
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        this._h[2] += c;
        g[0] = this._h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for (i = 1; i < 10; i++) {
            g[i] = this._h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= (1 << 13);
        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++) {
            g[i] &= mask;
        }
        mask = ~mask;
        for (i = 0; i < 10; i++) {
            this._h[i] = (this._h[i] & mask) | g[i];
        }
        this._h[0] = ((this._h[0]) | (this._h[1] << 13)) & 0xffff;
        this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 0xffff;
        this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 0xffff;
        this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 0xffff;
        this._h[4] = ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) & 0xffff;
        this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 0xffff;
        this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 0xffff;
        this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 0xffff;
        f = this._h[0] + this._pad[0];
        this._h[0] = f & 0xffff;
        for (i = 1; i < 8; i++) {
            f = (((this._h[i] + this._pad[i]) | 0) + (f >>> 16)) | 0;
            this._h[i] = f & 0xffff;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
    };
    Poly1305.prototype.update = function (m) {
        var mpos = 0;
        var bytes = m.length;
        var want;
        if (this._leftover) {
            want = (16 - this._leftover);
            if (want > bytes) {
                want = bytes;
            }
            for (var i = 0; i < want; i++) {
                this._buffer[this._leftover + i] = m[mpos + i];
            }
            bytes -= want;
            mpos += want;
            this._leftover += want;
            if (this._leftover < 16) {
                return this;
            }
            this._blocks(this._buffer, 0, 16);
            this._leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - (bytes % 16);
            this._blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for (var i = 0; i < bytes; i++) {
                this._buffer[this._leftover + i] = m[mpos + i];
            }
            this._leftover += bytes;
        }
        return this;
    };
    Poly1305.prototype.digest = function () {
        // TODO(dchest): it behaves differently than other hashes/HMAC,
        // because it throws when finished — others just return saved result.
        if (this._finished) {
            throw new Error("Poly1305 was finished");
        }
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
    };
    Poly1305.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._r);
        wipe_1.wipe(this._h);
        wipe_1.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true; // mark as finished even if not
        return this;
    };
    return Poly1305;
}());
exports.Poly1305 = Poly1305;
/**
 * Returns 16-byte authenticator of data using a one-time 32-byte key.
 *
 * Important: key should be used for only one message, it should never repeat.
 */
function oneTimeAuth(key, data) {
    var h = new Poly1305(key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.oneTimeAuth = oneTimeAuth;
/**
 * Returns true if two authenticators are 16-byte long and equal.
 * Uses contant-time comparison to avoid leaking timing information.
 */
function equal(a, b) {
    if (a.length !== exports.DIGEST_LENGTH || b.length !== exports.DIGEST_LENGTH) {
        return false;
    }
    return constant_time_1.equal(a, b);
}
exports.equal = equal;
//# sourceMappingURL=poly1305.js.map

/***/ }),

/***/ 337052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomStringForEntropy = exports.randomString = exports.randomUint32 = exports.randomBytes = exports.defaultRandomSource = void 0;
const system_1 = __webpack_require__(115492);
const binary_1 = __webpack_require__(230972);
const wipe_1 = __webpack_require__(276228);
exports.defaultRandomSource = new system_1.SystemRandomSource();
function randomBytes(length, prng = exports.defaultRandomSource) {
    return prng.randomBytes(length);
}
exports.randomBytes = randomBytes;
/**
 * Returns a uniformly random unsigned 32-bit integer.
 */
function randomUint32(prng = exports.defaultRandomSource) {
    // Generate 4-byte random buffer.
    const buf = randomBytes(4, prng);
    // Convert bytes from buffer into a 32-bit integer.
    // It's not important which byte order to use, since
    // the result is random.
    const result = (0, binary_1.readUint32LE)(buf);
    // Clean the buffer.
    (0, wipe_1.wipe)(buf);
    return result;
}
exports.randomUint32 = randomUint32;
/** 62 alphanumeric characters for default charset of randomString() */
const ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/**
 * Returns a uniform random string of the given length
 * with characters from the given charset.
 *
 * Charset must not have more than 256 characters.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */
function randomString(length, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    if (charset.length < 2) {
        throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
        throw new Error("randomString charset is too long");
    }
    let out = '';
    const charsLen = charset.length;
    const maxByte = 256 - (256 % charsLen);
    while (length > 0) {
        const buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
        for (let i = 0; i < buf.length && length > 0; i++) {
            const randomByte = buf[i];
            if (randomByte < maxByte) {
                out += charset.charAt(randomByte % charsLen);
                length--;
            }
        }
        (0, wipe_1.wipe)(buf);
    }
    return out;
}
exports.randomString = randomString;
/**
 * Returns uniform random string containing at least the given
 * number of bits of entropy.
 *
 * For example, randomStringForEntropy(128) will return a 22-character
 * alphanumeric string, while randomStringForEntropy(128, "0123456789")
 * will return a 39-character numeric string, both will contain at
 * least 128 bits of entropy.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */
function randomStringForEntropy(bits, charset = ALPHANUMERIC, prng = exports.defaultRandomSource) {
    const length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
}
exports.randomStringForEntropy = randomStringForEntropy;
//# sourceMappingURL=random.js.map

/***/ }),

/***/ 787029:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrowserRandomSource = void 0;
const QUOTA = 65536;
class BrowserRandomSource {
    constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        const browserCrypto = typeof self !== 'undefined'
            ? (self.crypto || self.msCrypto) // IE11 has msCrypto
            : null;
        if (browserCrypto && browserCrypto.getRandomValues !== undefined) {
            this._crypto = browserCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Browser random byte generator is not available.");
        }
        const out = new Uint8Array(length);
        for (let i = 0; i < out.length; i += QUOTA) {
            this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
        }
        return out;
    }
}
exports.BrowserRandomSource = BrowserRandomSource;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 835821:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeRandomSource = void 0;
const wipe_1 = __webpack_require__(276228);
class NodeRandomSource {
    constructor() {
        this.isAvailable = false;
        this.isInstantiated = false;
        if (true) {
            const nodeCrypto = __webpack_require__(99432);
            if (nodeCrypto && nodeCrypto.randomBytes) {
                this._crypto = nodeCrypto;
                this.isAvailable = true;
                this.isInstantiated = true;
            }
        }
    }
    randomBytes(length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Node.js random byte generator is not available.");
        }
        // Get random bytes (result is Buffer).
        let buffer = this._crypto.randomBytes(length);
        // Make sure we got the length that we requested.
        if (buffer.length !== length) {
            throw new Error("NodeRandomSource: got fewer bytes than requested");
        }
        // Allocate output array.
        const out = new Uint8Array(length);
        // Copy bytes from buffer to output.
        for (let i = 0; i < out.length; i++) {
            out[i] = buffer[i];
        }
        // Cleanup.
        (0, wipe_1.wipe)(buffer);
        return out;
    }
}
exports.NodeRandomSource = NodeRandomSource;
//# sourceMappingURL=node.js.map

/***/ }),

/***/ 115492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemRandomSource = void 0;
const browser_1 = __webpack_require__(787029);
const node_1 = __webpack_require__(835821);
class SystemRandomSource {
    constructor() {
        this.isAvailable = false;
        this.name = "";
        // Try browser.
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Browser";
            return;
        }
        // If no browser source, try Node.
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Node";
            return;
        }
        // No sources, we're out of options.
    }
    randomBytes(length) {
        if (!this.isAvailable) {
            throw new Error("System random byte generator is not available.");
        }
        return this._source.randomBytes(length);
    }
}
exports.SystemRandomSource = SystemRandomSource;
//# sourceMappingURL=system.js.map

/***/ }),

/***/ 950204:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
__webpack_unused_export__ = ({ value: true });
var binary_1 = __webpack_require__(230972);
var wipe_1 = __webpack_require__(276228);
exports.On = 32;
exports.cS = 64;
/**
 * SHA2-256 cryptographic hash algorithm.
 */
var SHA256 = /** @class */ (function () {
    function SHA256() {
        /** Length of hash output */
        this.digestLength = exports.On;
        /** Block size */
        this.blockSize = exports.cS;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._state = new Int32Array(8); // hash state
        this._temp = new Int32Array(64); // temporary state
        this._buffer = new Uint8Array(128); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA256.prototype._initState = function () {
        this._state[0] = 0x6a09e667;
        this._state[1] = 0xbb67ae85;
        this._state[2] = 0x3c6ef372;
        this._state[3] = 0xa54ff53a;
        this._state[4] = 0x510e527f;
        this._state[5] = 0x9b05688c;
        this._state[6] = 0x1f83d9ab;
        this._state[7] = 0x5be0cd19;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */
    SHA256.prototype.reset = function () {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */
    SHA256.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._temp);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */
    SHA256.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) { dataLength = data.length; }
        if (this._finished) {
            throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while (this._bufferLength < this.blockSize && dataLength > 0) {
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */
    SHA256.prototype.finish = function (out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = (bytesHashed / 0x20000000) | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = (bytesHashed % 64 < 56) ? 64 : 128;
            this._buffer[left] = 0x80;
            for (var i = left + 1; i < padLength - 8; i++) {
                this._buffer[i] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
            this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 4; i++) {
            binary_1.writeUint32BE(this._state[i], out, i * 4);
        }
        return this;
    };
    /**
     * Returns the final hash digest.
     */
    SHA256.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Returns hash state to be used with restoreState().
     * Only chain value is saved, not buffers or other
     * state variables.
     */
    SHA256.prototype.saveState = function () {
        if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
        }
        return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Restores state saved by saveState() and sets bytesHashed
     * to the given value.
     */
    SHA256.prototype.restoreState = function (savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */
    SHA256.prototype.cleanSavedState = function (savedState) {
        wipe_1.wipe(savedState.state);
        if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA256;
}());
exports.aD = SHA256;
// Constants
var K = new Int32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
    0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
    0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
    0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
    0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
    0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
    0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
    0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
function hashBlocks(w, v, p, pos, len) {
    while (len >= 64) {
        var a = v[0];
        var b = v[1];
        var c = v[2];
        var d = v[3];
        var e = v[4];
        var f = v[5];
        var g = v[6];
        var h = v[7];
        for (var i = 0; i < 16; i++) {
            var j = pos + i * 4;
            w[i] = binary_1.readUint32BE(p, j);
        }
        for (var i = 16; i < 64; i++) {
            var u = w[i - 2];
            var t1 = (u >>> 17 | u << (32 - 17)) ^ (u >>> 19 | u << (32 - 19)) ^ (u >>> 10);
            u = w[i - 15];
            var t2 = (u >>> 7 | u << (32 - 7)) ^ (u >>> 18 | u << (32 - 18)) ^ (u >>> 3);
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
        }
        for (var i = 0; i < 64; i++) {
            var t1 = (((((e >>> 6 | e << (32 - 6)) ^ (e >>> 11 | e << (32 - 11)) ^
                (e >>> 25 | e << (32 - 25))) + ((e & f) ^ (~e & g))) | 0) +
                ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;
            var t2 = (((a >>> 2 | a << (32 - 2)) ^ (a >>> 13 | a << (32 - 13)) ^
                (a >>> 22 | a << (32 - 22))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        v[0] += a;
        v[1] += b;
        v[2] += c;
        v[3] += d;
        v[4] += e;
        v[5] += f;
        v[6] += g;
        v[7] += h;
        pos += 64;
        len -= 64;
    }
    return pos;
}
function hash(data) {
    var h = new SHA256();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.tW = hash;
//# sourceMappingURL=sha256.js.map

/***/ }),

/***/ 864974:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var binary_1 = __webpack_require__(230972);
var wipe_1 = __webpack_require__(276228);
exports.DIGEST_LENGTH = 64;
exports.BLOCK_SIZE = 128;
/**
 * SHA-2-512 cryptographic hash algorithm.
 */
var SHA512 = /** @class */ (function () {
    function SHA512() {
        /** Length of hash output */
        this.digestLength = exports.DIGEST_LENGTH;
        /** Block size */
        this.blockSize = exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._stateHi = new Int32Array(8); // hash state, high bytes
        this._stateLo = new Int32Array(8); // hash state, low bytes
        this._tempHi = new Int32Array(16); // temporary state, high bytes
        this._tempLo = new Int32Array(16); // temporary state, low bytes
        this._buffer = new Uint8Array(256); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA512.prototype._initState = function () {
        this._stateHi[0] = 0x6a09e667;
        this._stateHi[1] = 0xbb67ae85;
        this._stateHi[2] = 0x3c6ef372;
        this._stateHi[3] = 0xa54ff53a;
        this._stateHi[4] = 0x510e527f;
        this._stateHi[5] = 0x9b05688c;
        this._stateHi[6] = 0x1f83d9ab;
        this._stateHi[7] = 0x5be0cd19;
        this._stateLo[0] = 0xf3bcc908;
        this._stateLo[1] = 0x84caa73b;
        this._stateLo[2] = 0xfe94f82b;
        this._stateLo[3] = 0x5f1d36f1;
        this._stateLo[4] = 0xade682d1;
        this._stateLo[5] = 0x2b3e6c1f;
        this._stateLo[6] = 0xfb41bd6b;
        this._stateLo[7] = 0x137e2179;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */
    SHA512.prototype.reset = function () {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */
    SHA512.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._tempHi);
        wipe_1.wipe(this._tempLo);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */
    SHA512.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) { dataLength = data.length; }
        if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */
    SHA512.prototype.finish = function (out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = (bytesHashed / 0x20000000) | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = (bytesHashed % 128 < 112) ? 128 : 256;
            this._buffer[left] = 0x80;
            for (var i = left + 1; i < padLength - 8; i++) {
                this._buffer[i] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 8; i++) {
            binary_1.writeUint32BE(this._stateHi[i], out, i * 8);
            binary_1.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
        }
        return this;
    };
    /**
     * Returns the final hash digest.
     */
    SHA512.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Returns hash state to be
     * used with restoreState(). Only chain value is saved, not buffers or
     * other state variables.
     */
    SHA512.prototype.saveState = function () {
        if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
        }
        return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Restores state saved by
     * saveState() and sets bytesHashed to the given value.
     */
    SHA512.prototype.restoreState = function (savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */
    SHA512.prototype.cleanSavedState = function (savedState) {
        wipe_1.wipe(savedState.stateHi);
        wipe_1.wipe(savedState.stateLo);
        if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA512;
}());
exports.SHA512 = SHA512;
// Constants
var K = new Int32Array([
    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]);
function hashBlocks(wh, wl, hh, hl, m, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h, l;
    var th, tl;
    var a, b, c, d;
    while (len >= 128) {
        for (var i = 0; i < 16; i++) {
            var j = 8 * i + pos;
            wh[i] = binary_1.readUint32BE(m, j);
            wl[i] = binary_1.readUint32BE(m, j + 4);
        }
        for (var i = 0; i < 80; i++) {
            var bh0 = ah0;
            var bh1 = ah1;
            var bh2 = ah2;
            var bh3 = ah3;
            var bh4 = ah4;
            var bh5 = ah5;
            var bh6 = ah6;
            var bh7 = ah7;
            var bl0 = al0;
            var bl1 = al1;
            var bl2 = al2;
            var bl3 = al3;
            var bl4 = al4;
            var bl5 = al5;
            var bl6 = al6;
            var bl7 = al7;
            // add
            h = ah7;
            l = al7;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma1
            h = ((ah4 >>> 14) | (al4 << (32 - 14))) ^ ((ah4 >>> 18) |
                (al4 << (32 - 18))) ^ ((al4 >>> (41 - 32)) | (ah4 << (32 - (41 - 32))));
            l = ((al4 >>> 14) | (ah4 << (32 - 14))) ^ ((al4 >>> 18) |
                (ah4 << (32 - 18))) ^ ((ah4 >>> (41 - 32)) | (al4 << (32 - (41 - 32))));
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Ch
            h = (ah4 & ah5) ^ (~ah4 & ah6);
            l = (al4 & al5) ^ (~al4 & al6);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // K
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // w
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 0xffff | d << 16;
            tl = a & 0xffff | b << 16;
            // add
            h = th;
            l = tl;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma0
            h = ((ah0 >>> 28) | (al0 << (32 - 28))) ^ ((al0 >>> (34 - 32)) |
                (ah0 << (32 - (34 - 32)))) ^ ((al0 >>> (39 - 32)) | (ah0 << (32 - (39 - 32))));
            l = ((al0 >>> 28) | (ah0 << (32 - 28))) ^ ((ah0 >>> (34 - 32)) |
                (al0 << (32 - (34 - 32)))) ^ ((ah0 >>> (39 - 32)) | (al0 << (32 - (39 - 32))));
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Maj
            h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
            l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = (c & 0xffff) | (d << 16);
            bl7 = (a & 0xffff) | (b << 16);
            // add
            h = bh3;
            l = bl3;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = (c & 0xffff) | (d << 16);
            bl3 = (a & 0xffff) | (b << 16);
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
                for (var j = 0; j < 16; j++) {
                    // add
                    h = wh[j];
                    l = wl[j];
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16;
                    h = wh[(j + 9) % 16];
                    l = wl[(j + 9) % 16];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma0
                    th = wh[(j + 1) % 16];
                    tl = wl[(j + 1) % 16];
                    h = ((th >>> 1) | (tl << (32 - 1))) ^ ((th >>> 8) |
                        (tl << (32 - 8))) ^ (th >>> 7);
                    l = ((tl >>> 1) | (th << (32 - 1))) ^ ((tl >>> 8) |
                        (th << (32 - 8))) ^ ((tl >>> 7) | (th << (32 - 7)));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma1
                    th = wh[(j + 14) % 16];
                    tl = wl[(j + 14) % 16];
                    h = ((th >>> 19) | (tl << (32 - 19))) ^ ((tl >>> (61 - 32)) |
                        (th << (32 - (61 - 32)))) ^ (th >>> 6);
                    l = ((tl >>> 19) | (th << (32 - 19))) ^ ((th >>> (61 - 32)) |
                        (tl << (32 - (61 - 32)))) ^ ((tl >>> 6) | (th << (32 - 6)));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    wh[j] = (c & 0xffff) | (d << 16);
                    wl[j] = (a & 0xffff) | (b << 16);
                }
            }
        }
        // add
        h = ah0;
        l = al0;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[0];
        l = hl[0];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[0] = ah0 = (c & 0xffff) | (d << 16);
        hl[0] = al0 = (a & 0xffff) | (b << 16);
        h = ah1;
        l = al1;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[1];
        l = hl[1];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[1] = ah1 = (c & 0xffff) | (d << 16);
        hl[1] = al1 = (a & 0xffff) | (b << 16);
        h = ah2;
        l = al2;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[2];
        l = hl[2];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[2] = ah2 = (c & 0xffff) | (d << 16);
        hl[2] = al2 = (a & 0xffff) | (b << 16);
        h = ah3;
        l = al3;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[3];
        l = hl[3];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[3] = ah3 = (c & 0xffff) | (d << 16);
        hl[3] = al3 = (a & 0xffff) | (b << 16);
        h = ah4;
        l = al4;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[4];
        l = hl[4];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[4] = ah4 = (c & 0xffff) | (d << 16);
        hl[4] = al4 = (a & 0xffff) | (b << 16);
        h = ah5;
        l = al5;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[5];
        l = hl[5];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[5] = ah5 = (c & 0xffff) | (d << 16);
        hl[5] = al5 = (a & 0xffff) | (b << 16);
        h = ah6;
        l = al6;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[6];
        l = hl[6];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[6] = ah6 = (c & 0xffff) | (d << 16);
        hl[6] = al6 = (a & 0xffff) | (b << 16);
        h = ah7;
        l = al7;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[7];
        l = hl[7];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[7] = ah7 = (c & 0xffff) | (d << 16);
        hl[7] = al7 = (a & 0xffff) | (b << 16);
        pos += 128;
        len -= 128;
    }
    return pos;
}
function hash(data) {
    var h = new SHA512();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hash = hash;
//# sourceMappingURL=sha512.js.map

/***/ }),

/***/ 276228:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sets all values in the given array to zero and returns it.
 *
 * The fact that it sets bytes to zero can be relied on.
 *
 * There is no guarantee that this function makes data disappear from memory,
 * as runtime implementation can, for example, have copying garbage collector
 * that will make copies of sensitive data before we wipe it. Or that an
 * operating system will write our data to swap or sleep image. Another thing
 * is that an optimizing compiler can remove calls to this function or make it
 * no-op. There's nothing we can do with it, so we just do our best and hope
 * that everything will be okay and good will triumph over evil.
 */
function wipe(array) {
    // Right now it's similar to array.fill(0). If it turns
    // out that runtimes optimize this call away, maybe
    // we can try something else.
    for (var i = 0; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
}
exports.wipe = wipe;
//# sourceMappingURL=wipe.js.map

/***/ }),

/***/ 400774:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
__webpack_unused_export__ = ({ value: true });
exports.Tc = exports.TZ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.wE = exports.Xx = void 0;
/**
 * Package x25519 implements X25519 key agreement.
 */
const random_1 = __webpack_require__(337052);
const wipe_1 = __webpack_require__(276228);
exports.Xx = 32;
exports.wE = 32;
__webpack_unused_export__ = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function gf(init) {
    const r = new Float64Array(16);
    if (init) {
        for (let i = 0; i < init.length; i++) {
            r[i] = init[i];
        }
    }
    return r;
}
// Base point.
const _9 = new Uint8Array(32);
_9[0] = 9;
const _121665 = gf([0xdb41, 1]);
function car25519(o) {
    let c = 1;
    for (let i = 0; i < 16; i++) {
        let v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
    const c = ~(b - 1);
    for (let i = 0; i < 16; i++) {
        const t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function pack25519(o, n) {
    const m = gf();
    const t = gf();
    for (let i = 0; i < 16; i++) {
        t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (let j = 0; j < 2; j++) {
        m[0] = t[0] - 0xffed;
        for (let i = 1; i < 15; i++) {
            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
        const b = (m[15] >> 16) & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for (let i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function unpack25519(o, n) {
    for (let i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 0x7fff;
}
function add(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
    }
}
function sub(o, a, b) {
    for (let i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
    }
}
function mul(o, a, b) {
    let v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function square(o, a) {
    mul(o, a, a);
}
function inv25519(o, inp) {
    const c = gf();
    for (let i = 0; i < 16; i++) {
        c[i] = inp[i];
    }
    for (let i = 253; i >= 0; i--) {
        square(c, c);
        if (i !== 2 && i !== 4) {
            mul(c, c, inp);
        }
    }
    for (let i = 0; i < 16; i++) {
        o[i] = c[i];
    }
}
function scalarMult(n, p) {
    const z = new Uint8Array(32);
    const x = new Float64Array(80);
    const a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
    for (let i = 0; i < 31; i++) {
        z[i] = n[i];
    }
    z[31] = (n[31] & 127) | 64;
    z[0] &= 248;
    unpack25519(x, p);
    for (let i = 0; i < 16; i++) {
        b[i] = x[i];
    }
    a[0] = d[0] = 1;
    for (let i = 254; i >= 0; --i) {
        const r = (z[i >>> 3] >>> (i & 7)) & 1;
        sel25519(a, b, r);
        sel25519(c, d, r);
        add(e, a, c);
        sub(a, a, c);
        add(c, b, d);
        sub(b, b, d);
        square(d, e);
        square(f, a);
        mul(a, c, a);
        mul(c, b, e);
        add(e, a, c);
        sub(a, a, c);
        square(b, a);
        sub(c, d, f);
        mul(a, c, _121665);
        add(a, a, d);
        mul(c, c, a);
        mul(a, d, f);
        mul(d, b, x);
        square(b, e);
        sel25519(a, b, r);
        sel25519(c, d, r);
    }
    for (let i = 0; i < 16; i++) {
        x[i + 16] = a[i];
        x[i + 32] = c[i];
        x[i + 48] = b[i];
        x[i + 64] = d[i];
    }
    const x32 = x.subarray(32);
    const x16 = x.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    const q = new Uint8Array(32);
    pack25519(q, x16);
    return q;
}
__webpack_unused_export__ = scalarMult;
function scalarMultBase(n) {
    return scalarMult(n, _9);
}
__webpack_unused_export__ = scalarMultBase;
function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.wE) {
        throw new Error(`x25519: seed must be ${exports.wE} bytes`);
    }
    const secretKey = new Uint8Array(seed);
    const publicKey = scalarMultBase(secretKey);
    return {
        publicKey,
        secretKey
    };
}
__webpack_unused_export__ = generateKeyPairFromSeed;
function generateKeyPair(prng) {
    const seed = (0, random_1.randomBytes)(32, prng);
    const result = generateKeyPairFromSeed(seed);
    (0, wipe_1.wipe)(seed);
    return result;
}
exports.TZ = generateKeyPair;
/**
 * Returns a shared key between our secret key and a peer's public key.
 *
 * Throws an error if the given keys are of wrong length.
 *
 * If rejectZero is true throws if the calculated shared key is all-zero.
 * From RFC 7748:
 *
 * > Protocol designers using Diffie-Hellman over the curves defined in
 * > this document must not assume "contributory behavior".  Specially,
 * > contributory behavior means that both parties' private keys
 * > contribute to the resulting shared key.  Since curve25519 and
 * > curve448 have cofactors of 8 and 4 (respectively), an input point of
 * > small order will eliminate any contribution from the other party's
 * > private key.  This situation can be detected by checking for the all-
 * > zero output, which implementations MAY do, as specified in Section 6.
 * > However, a large number of existing implementations do not do this.
 *
 * IMPORTANT: the returned key is a raw result of scalar multiplication.
 * To use it as a key material, hash it with a cryptographic hash function.
 */
function sharedKey(mySecretKey, theirPublicKey, rejectZero = false) {
    if (mySecretKey.length !== exports.Xx) {
        throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports.Xx) {
        throw new Error("X25519: incorrect public key length");
    }
    const result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
        let zeros = 0;
        for (let i = 0; i < result.length; i++) {
            zeros |= result[i];
        }
        if (zeros === 0) {
            throw new Error("X25519: invalid shared key");
        }
    }
    return result;
}
exports.Tc = sharedKey;
//# sourceMappingURL=x25519.js.map

/***/ }),

/***/ 277173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.crypto) || (__webpack_require__.g === null || __webpack_require__.g === void 0 ? void 0 : __webpack_require__.g.msCrypto) || {};
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

/***/ 314485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  REQUIRED_METHODS: () => (/* binding */ dist_index_es_u),
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

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_namespaceObject = {};
__webpack_require__.r(sha2_browser_namespaceObject);
__webpack_require__.d(sha2_browser_namespaceObject, {
  sha256: () => (sha2_browser_sha256),
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

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(137007);
var events_default = /*#__PURE__*/__webpack_require__.n(events);
;// CONCATENATED MODULE: ./node_modules/detect-browser/es/index.js
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
// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(686663);
// EXTERNAL MODULE: ./node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js
var chacha20poly1305 = __webpack_require__(851612);
// EXTERNAL MODULE: ./node_modules/@stablelib/hkdf/lib/hkdf.js
var hkdf = __webpack_require__(616804);
// EXTERNAL MODULE: ./node_modules/@stablelib/random/lib/random.js
var random = __webpack_require__(337052);
// EXTERNAL MODULE: ./node_modules/@stablelib/sha256/lib/sha256.js
var sha256 = __webpack_require__(950204);
// EXTERNAL MODULE: ./node_modules/@stablelib/x25519/lib/x25519.js
var x25519 = __webpack_require__(400774);
;// CONCATENATED MODULE: ./node_modules/uint8arrays/esm/src/alloc.js
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
;// CONCATENATED MODULE: ./node_modules/uint8arrays/esm/src/concat.js

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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/identity.js


const identity = (0,base/* from */.HT)({
  prefix: '\0',
  name: 'identity',
  encode: buf => (0,bytes/* toString */.dI)(buf),
  decode: str => (0,bytes/* fromString */.sH)(str)
});
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/base2.js

const base2 = (0,base/* rfc4648 */.yE)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/base8.js

const base8 = (0,base/* rfc4648 */.yE)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/base10.js

const base10 = (0,base/* baseX */._Q)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/base16.js

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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/base36.js

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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/base64.js

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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/bases/base256emoji.js

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
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/hashes/digest.js
var hashes_digest = __webpack_require__(814403);
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/hashes/hasher.js

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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/hashes/sha2-browser.js

const sha = name => async data => new Uint8Array(await crypto.subtle.digest(name, data));
const sha2_browser_sha256 = from({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = from({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/hashes/identity.js


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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/codecs/raw.js

const raw_name = 'raw';
const raw_code = 85;
const raw_encode = node => (0,bytes/* coerce */.au)(node);
const raw_decode = data => (0,bytes/* coerce */.au)(data);
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/codecs/json.js
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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/index.js






;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/basics.js















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
  ...sha2_browser_namespaceObject,
  ...hashes_identity_namespaceObject
};
const codecs = {
  raw: raw_namespaceObject,
  json: json_namespaceObject
};

;// CONCATENATED MODULE: ./node_modules/uint8arrays/esm/src/util/bases.js


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
;// CONCATENATED MODULE: ./node_modules/uint8arrays/esm/src/from-string.js

function from_string_fromString(string, encoding = 'utf8') {
  const base = util_bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string, 'utf8');
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}
;// CONCATENATED MODULE: ./node_modules/uint8arrays/esm/src/to-string.js

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
;// CONCATENATED MODULE: ./node_modules/uint8arrays/esm/src/index.js







// EXTERNAL MODULE: ./node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(86729);
// EXTERNAL MODULE: ./node_modules/@stablelib/ed25519/lib/ed25519.js
var lib_ed25519 = __webpack_require__(934904);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/dist/esm/constants.js
const constants_JWT_IRIDIUM_ALG = "EdDSA";
const constants_JWT_IRIDIUM_TYP = "JWT";
const constants_JWT_DELIMITER = ".";
const JWT_ENCODING = "base64url";
const JSON_ENCODING = "utf8";
const constants_DATA_ENCODING = "utf8";
const constants_DID_DELIMITER = ":";
const constants_DID_PREFIX = "did";
const constants_DID_METHOD = "key";
const constants_MULTICODEC_ED25519_ENCODING = "base58btc";
const constants_MULTICODEC_ED25519_BASE = "z";
const constants_MULTICODEC_ED25519_HEADER = "K36";
const constants_MULTICODEC_ED25519_LENGTH = 32;
const KEY_PAIR_SEED_LENGTH = 32;
//# sourceMappingURL=constants.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/node_modules/uint8arrays/esm/src/util/as-uint8array.js
function as_uint8array_asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/node_modules/uint8arrays/esm/src/alloc.js

function alloc_alloc(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
    return asUint8Array(globalThis.Buffer.alloc(size));
  }
  return new Uint8Array(size);
}
function alloc_allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return as_uint8array_asUint8Array(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/node_modules/uint8arrays/esm/src/concat.js


function concat_concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = alloc_allocUnsafe(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return as_uint8array_asUint8Array(output);
}
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/node_modules/uint8arrays/esm/src/util/bases.js


function bases_createCodec(name, prefix, encode, decode) {
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
const bases_string = bases_createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const bases_ascii = bases_createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = alloc_allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const bases_BASES = {
  utf8: bases_string,
  'utf-8': bases_string,
  hex: bases.base16,
  latin1: bases_ascii,
  ascii: bases_ascii,
  binary: bases_ascii,
  ...bases
};
/* harmony default export */ const src_util_bases = (bases_BASES);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/node_modules/uint8arrays/esm/src/to-string.js

function src_to_string_toString(array, encoding = 'utf8') {
  const base = src_util_bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
  }
  return base.encoder.encode(array).substring(1);
}
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/node_modules/uint8arrays/esm/src/from-string.js


function src_from_string_fromString(string, encoding = 'utf8') {
  const base = src_util_bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return as_uint8array_asUint8Array(globalThis.Buffer.from(string, 'utf-8'));
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}
;// CONCATENATED MODULE: ./node_modules/@walletconnect/safe-json/dist/esm/index.js
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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/dist/esm/utils.js





function decodeJSON(str) {
    return safeJsonParse(src_to_string_toString(src_from_string_fromString(str, JWT_ENCODING), JSON_ENCODING));
}
function encodeJSON(val) {
    return src_to_string_toString(src_from_string_fromString(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
    const header = src_from_string_fromString(constants_MULTICODEC_ED25519_HEADER, constants_MULTICODEC_ED25519_ENCODING);
    const multicodec = constants_MULTICODEC_ED25519_BASE +
        src_to_string_toString(concat_concat([header, publicKey]), constants_MULTICODEC_ED25519_ENCODING);
    return [constants_DID_PREFIX, constants_DID_METHOD, multicodec].join(constants_DID_DELIMITER);
}
function utils_decodeIss(issuer) {
    const [prefix, method, multicodec] = issuer.split(DID_DELIMITER);
    if (prefix !== DID_PREFIX || method !== DID_METHOD) {
        throw new Error(`Issuer must be a DID with method "key"`);
    }
    const base = multicodec.slice(0, 1);
    if (base !== MULTICODEC_ED25519_BASE) {
        throw new Error(`Issuer must be a key in mulicodec format`);
    }
    const bytes = fromString(multicodec.slice(1), MULTICODEC_ED25519_ENCODING);
    const type = toString(bytes.slice(0, 2), MULTICODEC_ED25519_ENCODING);
    if (type !== MULTICODEC_ED25519_HEADER) {
        throw new Error(`Issuer must be a public key with type "Ed25519"`);
    }
    const publicKey = bytes.slice(2);
    if (publicKey.length !== MULTICODEC_ED25519_LENGTH) {
        throw new Error(`Issuer must be a public key with length 32 bytes`);
    }
    return publicKey;
}
function encodeSig(bytes) {
    return src_to_string_toString(bytes, JWT_ENCODING);
}
function decodeSig(encoded) {
    return src_from_string_fromString(encoded, JWT_ENCODING);
}
function encodeData(params) {
    return src_from_string_fromString([encodeJSON(params.header), encodeJSON(params.payload)].join(constants_JWT_DELIMITER), constants_DATA_ENCODING);
}
function decodeData(data) {
    const params = toString(data, DATA_ENCODING).split(JWT_DELIMITER);
    const header = decodeJSON(params[0]);
    const payload = decodeJSON(params[1]);
    return { header, payload };
}
function encodeJWT(params) {
    return [
        encodeJSON(params.header),
        encodeJSON(params.payload),
        encodeSig(params.signature),
    ].join(constants_JWT_DELIMITER);
}
function utils_decodeJWT(jwt) {
    const params = jwt.split(constants_JWT_DELIMITER);
    const header = decodeJSON(params[0]);
    const payload = decodeJSON(params[1]);
    const signature = decodeSig(params[2]);
    const data = src_from_string_fromString(params.slice(0, 2).join(constants_JWT_DELIMITER), constants_DATA_ENCODING);
    return { header, payload, signature, data };
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/dist/esm/api.js





function generateKeyPair(seed = (0,random.randomBytes)(KEY_PAIR_SEED_LENGTH)) {
    return lib_ed25519/* generateKeyPairFromSeed */.K(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = (0,cjs.fromMiliseconds)(Date.now())) {
    const header = { alg: constants_JWT_IRIDIUM_ALG, typ: constants_JWT_IRIDIUM_TYP };
    const iss = encodeIss(keyPair.publicKey);
    const exp = iat + ttl;
    const payload = { iss, sub, aud, iat, exp };
    const data = encodeData({ header, payload });
    const signature = lib_ed25519/* sign */._S(keyPair.secretKey, data);
    return encodeJWT({ header, payload, signature });
}
async function verifyJWT(jwt) {
    const { header, payload, data, signature } = decodeJWT(jwt);
    if (header.alg !== JWT_IRIDIUM_ALG || header.typ !== JWT_IRIDIUM_TYP) {
        throw new Error("JWT must use EdDSA algorithm");
    }
    const publicKey = decodeIss(payload.iss);
    return ed25519.verify(publicKey, data, signature);
}
//# sourceMappingURL=api.js.map
// EXTERNAL MODULE: ./node_modules/@walletconnect/relay-auth/dist/esm/types.js
var types = __webpack_require__(755665);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/dist/esm/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-api/dist/index.es.js
function e(s,r,i="string"){if(!s[r]||typeof s[r]!==i)throw new Error(`Missing or invalid "${r}" param`)}function l(s,r){let i=!0;return r.forEach(t=>{t in s||(i=!1)}),i}function f(s,r){return Array.isArray(s)?s.length===r:Object.keys(s).length===r}function w(s,r){return Array.isArray(s)?s.length>=r:Object.keys(s).length>=r}function u(s,r,i){return(i.length?w(s,r.length):f(s,r.length))?l(s,r):!1}function n(s,r,i="_"){const t=s.split(i);return t[t.length-1].trim().toLowerCase()===r.trim().toLowerCase()}function R(s){return b(s.method)&&a(s.params)}function b(s){return n(s,"subscribe")}function a(s){return u(s,["topic"],[])}function P(s){return c(s.method)&&h(s.params)}function c(s){return n(s,"publish")}function h(s){return u(s,["message","topic","ttl"],["prompt","tag"])}function _(s){return o(s.method)&&p(s.params)}function o(s){return n(s,"unsubscribe")}function p(s){return u(s,["id","topic"],[])}function S(s){return m(s.method)&&d(s.params)}function m(s){return n(s,"subscription")}function d(s){return u(s,["id","data"],[])}function g(s){if(!b(s.method))throw new Error("JSON-RPC Request has invalid subscribe method");if(!a(s.params))throw new Error("JSON-RPC Request has invalid subscribe params");const r=s.params;return e(r,"topic"),r}function q(s){if(!c(s.method))throw new Error("JSON-RPC Request has invalid publish method");if(!h(s.params))throw new Error("JSON-RPC Request has invalid publish params");const r=s.params;return e(r,"topic"),e(r,"message"),e(r,"ttl","number"),r}function E(s){if(!o(s.method))throw new Error("JSON-RPC Request has invalid unsubscribe method");if(!p(s.params))throw new Error("JSON-RPC Request has invalid unsubscribe params");const r=s.params;return e(r,"id"),r}function k(s){if(!m(s.method))throw new Error("JSON-RPC Request has invalid subscription method");if(!d(s.params))throw new Error("JSON-RPC Request has invalid subscription params");const r=s.params;return e(r,"id"),e(r,"data"),r}const C={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/utils/dist/index.es.js
const Rr=":";function mn(e){const[t,r]=e.split(Rr);return{namespace:t,reference:r}}function An(e){const{namespace:t,reference:r}=e;return[t,r].join(Rr)}function gi(e){const[t,r,i]=e.split(Rr);return{namespace:t,reference:r,address:i}}function bn(e){const{namespace:t,reference:r,address:i}=e;return[t,r,i].join(Rr)}function mi(e,t){const r=[];return e.forEach(i=>{const n=t(i);r.includes(n)||r.push(n)}),r}function yn(e){const{address:t}=gi(e);return t}function wn(e){const{namespace:t,reference:r}=gi(e);return An({namespace:t,reference:r})}function jo(e,t){const{namespace:r,reference:i}=mn(t);return bn({namespace:r,reference:i,address:e})}function Qo(e){return mi(e,yn)}function xn(e){return mi(e,wn)}function Jo(e,t=[]){const r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;const n=e[i];r.push(...n.accounts)}),r}function Go(e,t=[]){const r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;const n=e[i];r.push(...xn(n.accounts))}),r}function Yo(e,t=[]){const r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;const n=e[i];r.push(...Or(i,n))}),r}function Or(e,t){return e.includes(":")?[e]:t.chains||[]}var Vo=Object.defineProperty,Mn=Object.getOwnPropertySymbols,Wo=Object.prototype.hasOwnProperty,Xo=Object.prototype.propertyIsEnumerable,En=(e,t,r)=>t in e?Vo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Sn=(e,t)=>{for(var r in t||(t={}))Wo.call(t,r)&&En(e,r,t[r]);if(Mn)for(var r of Mn(t))Xo.call(t,r)&&En(e,r,t[r]);return e};const Nn="ReactNative",qt={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},Pr=" ",Zo=":",In="/",Ai=2,$o=1e3,_n="js";function bi(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function rr(){return!(0,dist_cjs.getDocument)()&&!!(0,dist_cjs.getNavigator)()&&navigator.product===Nn}function gr(){return!bi()&&!!(0,dist_cjs.getNavigator)()&&!!(0,dist_cjs.getDocument)()}function We(){return rr()?qt.reactNative:bi()?qt.node:gr()?qt.browser:qt.unknown}function index_es_ts(){var e;try{return rr()&&typeof __webpack_require__.g<"u"&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Application)<"u"?(e=__webpack_require__.g.Application)==null?void 0:e.applicationId:void 0}catch{return}}function Bn(e,t){let r=query_string.parse(e);return r=Sn(Sn({},r),t),e=query_string.stringify(r),e}function es(){return (0,window_metadata_dist_cjs/* getWindowMetadata */.g)()||{name:"",description:"",url:"",icons:[""]}}function rs(e,t){var r;const i=We(),n={protocol:e,version:t,env:i};return i==="browser"&&(n.host=((r=ln())==null?void 0:r.host)||"unknown"),n}function Cn(){if(We()===qt.reactNative&&typeof __webpack_require__.g<"u"&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Platform)<"u"){const{OS:r,Version:i}=__webpack_require__.g.Platform;return[r,i].join("-")}const e=detect();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function Rn(){var e;const t=We();return t===qt.browser?[t,((e=(0,dist_cjs.getLocation)())==null?void 0:e.host)||"unknown"].join(":"):t}function On(e,t,r){const i=Cn(),n=Rn();return[[e,t].join("-"),[_n,r].join("-"),i,n].join("/")}function is({protocol:e,version:t,relayUrl:r,sdkVersion:i,auth:n,projectId:o,useOnCloseEvent:h,bundleId:p}){const A=r.split("?"),v=On(e,t,i),w={auth:n,ua:v,projectId:o,useOnCloseEvent:h||void 0,origin:p||void 0},y=Bn(A[1]||"",w);return A[0]+"?"+y}function ns(e){let t=(e.match(/^[^:]+(?=:\/\/)/gi)||[])[0];const r=typeof t<"u"?e.split("://")[1]:e;return t=t==="wss"?"https":"http",[t,r].join("://")}function fs(e,t,r){if(!e[t]||typeof e[t]!==r)throw new Error(`Missing or invalid "${t}" param`)}function Pn(e,t=Ai){return Dn(e.split(In),t)}function os(e){return Pn(e).join(Pr)}function _e(e,t){return e.filter(r=>t.includes(r)).length===e.length}function Dn(e,t=Ai){return e.slice(Math.max(e.length-t,0))}function ss(e){return Object.fromEntries(e.entries())}function as(e){return new Map(Object.entries(e))}function us(e,t){const r={};return Object.keys(e).forEach(i=>{r[i]=t(e[i])}),r}const hs=e=>e;function Fn(e){return e.trim().replace(/^\w/,t=>t.toUpperCase())}function cs(e){return e.split(Pr).map(t=>Fn(t)).join(Pr)}function ls(e=cjs.FIVE_MINUTES,t){const r=(0,cjs.toMiliseconds)(e||cjs.FIVE_MINUTES);let i,n,o;return{resolve:h=>{o&&i&&(clearTimeout(o),i(h))},reject:h=>{o&&n&&(clearTimeout(o),n(h))},done:()=>new Promise((h,p)=>{o=setTimeout(()=>{p(new Error(t))},r),i=h,n=p})}}function ds(e,t,r){return new Promise(async(i,n)=>{const o=setTimeout(()=>n(new Error(r)),t);try{const h=await e;i(h)}catch(h){n(h)}clearTimeout(o)})}function yi(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function ps(e){return yi("topic",e)}function vs(e){return yi("id",e)}function gs(e){const[t,r]=e.split(":"),i={id:void 0,topic:void 0};if(t==="topic"&&typeof r=="string")i.topic=r;else if(t==="id"&&Number.isInteger(Number(r)))i.id=Number(r);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return i}function ms(e,t){return (0,cjs.fromMiliseconds)((t||Date.now())+(0,cjs.toMiliseconds)(e))}function As(e){return Date.now()>=(0,cjs.toMiliseconds)(e)}function bs(e,t){return`${e}${t?`:${t}`:""}`}function me(e=[],t=[]){return[...new Set([...e,...t])]}async function ys({id:e,topic:t,wcDeepLink:r}){var i;try{if(!r)return;const n=typeof r=="string"?JSON.parse(r):r;let o=n?.href;if(typeof o!="string")return;o.endsWith("/")&&(o=o.slice(0,-1));const h=`${o}/wc?requestId=${e}&sessionTopic=${t}`,p=We();if(p===qt.browser){if(!((i=(0,dist_cjs.getDocument)())!=null&&i.hasFocus())){console.warn("Document does not have focus, skipping deeplink.");return}h.startsWith("https://")||h.startsWith("http://")?window.open(h,"_blank","noreferrer noopener"):window.open(h,"_self","noreferrer noopener")}else p===qt.reactNative&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u"&&await __webpack_require__.g.Linking.openURL(h)}catch(n){console.error(n)}}async function ws(e,t){try{return await e.getItem(t)||(gr()?localStorage.getItem(t):void 0)}catch(r){console.error(r)}}function wi(e,t){return e.filter(r=>t.includes(r))}function xs(e,t){if(!e.includes(t))return null;const r=e.split(/([&,?,=])/),i=r.indexOf(t);return r[i+2]}function Ms(){return typeof crypto<"u"&&crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}var Tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof __webpack_require__.g<"u"?__webpack_require__.g:typeof self<"u"?self:{};function Es(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}),r}var Un={exports:{}};/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */(function(e){(function(){var t="input is invalid type",r="finalize already called",i=typeof window=="object",n=i?window:{};n.JS_SHA3_NO_WINDOW&&(i=!1);var o=!i&&typeof self=="object",h=!n.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;h?n=Tn:o&&(n=self);var p=!n.JS_SHA3_NO_COMMON_JS&&!0&&e.exports,A=!n.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",v="0123456789abcdef".split(""),w=[31,7936,2031616,520093696],y=[4,1024,262144,67108864],S=[1,256,65536,16777216],I=[6,1536,393216,100663296],N=[0,8,16,24],C=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],F=[224,256,384,512],U=[128,256],J=["hex","buffer","arrayBuffer","array","digest"],Bt={128:168,256:136};(n.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(u){return Object.prototype.toString.call(u)==="[object Array]"}),A&&(n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(u){return typeof u=="object"&&u.buffer&&u.buffer.constructor===ArrayBuffer});for(var G=function(u,E,_){return function(B){return new s(u,E,u).update(B)[_]()}},H=function(u,E,_){return function(B,R){return new s(u,E,R).update(B)[_]()}},L=function(u,E,_){return function(B,R,T,P){return f["cshake"+u].update(B,R,T,P)[_]()}},Pt=function(u,E,_){return function(B,R,T,P){return f["kmac"+u].update(B,R,T,P)[_]()}},W=function(u,E,_,B){for(var R=0;R<J.length;++R){var T=J[R];u[T]=E(_,B,T)}return u},Rt=function(u,E){var _=G(u,E,"hex");return _.create=function(){return new s(u,E,u)},_.update=function(B){return _.create().update(B)},W(_,G,u,E)},Vt=function(u,E){var _=H(u,E,"hex");return _.create=function(B){return new s(u,E,B)},_.update=function(B,R){return _.create(R).update(B)},W(_,H,u,E)},Y=function(u,E){var _=Bt[u],B=L(u,E,"hex");return B.create=function(R,T,P){return!T&&!P?f["shake"+u].create(R):new s(u,E,R).bytepad([T,P],_)},B.update=function(R,T,P,O){return B.create(T,P,O).update(R)},W(B,L,u,E)},Wt=function(u,E){var _=Bt[u],B=Pt(u,E,"hex");return B.create=function(R,T,P){return new g(u,E,T).bytepad(["KMAC",P],_).bytepad([R],_)},B.update=function(R,T,P,O){return B.create(R,P,O).update(T)},W(B,Pt,u,E)},b=[{name:"keccak",padding:S,bits:F,createMethod:Rt},{name:"sha3",padding:I,bits:F,createMethod:Rt},{name:"shake",padding:w,bits:U,createMethod:Vt},{name:"cshake",padding:y,bits:U,createMethod:Y},{name:"kmac",padding:y,bits:U,createMethod:Wt}],f={},a=[],c=0;c<b.length;++c)for(var d=b[c],m=d.bits,x=0;x<m.length;++x){var M=d.name+"_"+m[x];if(a.push(M),f[M]=d.createMethod(m[x],d.padding),d.name!=="sha3"){var l=d.name+m[x];a.push(l),f[l]=f[M]}}function s(u,E,_){this.blocks=[],this.s=[],this.padding=E,this.outputBits=_,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(u<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=_>>5,this.extraBytes=(_&31)>>3;for(var B=0;B<50;++B)this.s[B]=0}s.prototype.update=function(u){if(this.finalized)throw new Error(r);var E,_=typeof u;if(_!=="string"){if(_==="object"){if(u===null)throw new Error(t);if(A&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!A||!ArrayBuffer.isView(u)))throw new Error(t)}else throw new Error(t);E=!0}for(var B=this.blocks,R=this.byteCount,T=u.length,P=this.blockCount,O=0,Ct=this.s,D,q;O<T;){if(this.reset)for(this.reset=!1,B[0]=this.block,D=1;D<P+1;++D)B[D]=0;if(E)for(D=this.start;O<T&&D<R;++O)B[D>>2]|=u[O]<<N[D++&3];else for(D=this.start;O<T&&D<R;++O)q=u.charCodeAt(O),q<128?B[D>>2]|=q<<N[D++&3]:q<2048?(B[D>>2]|=(192|q>>6)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]):q<55296||q>=57344?(B[D>>2]|=(224|q>>12)<<N[D++&3],B[D>>2]|=(128|q>>6&63)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]):(q=65536+((q&1023)<<10|u.charCodeAt(++O)&1023),B[D>>2]|=(240|q>>18)<<N[D++&3],B[D>>2]|=(128|q>>12&63)<<N[D++&3],B[D>>2]|=(128|q>>6&63)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]);if(this.lastByteIndex=D,D>=R){for(this.start=D-R,this.block=B[P],D=0;D<P;++D)Ct[D]^=B[D];k(Ct),this.reset=!0}else this.start=D}return this},s.prototype.encode=function(u,E){var _=u&255,B=1,R=[_];for(u=u>>8,_=u&255;_>0;)R.unshift(_),u=u>>8,_=u&255,++B;return E?R.push(B):R.unshift(B),this.update(R),R.length},s.prototype.encodeString=function(u){var E,_=typeof u;if(_!=="string"){if(_==="object"){if(u===null)throw new Error(t);if(A&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!A||!ArrayBuffer.isView(u)))throw new Error(t)}else throw new Error(t);E=!0}var B=0,R=u.length;if(E)B=R;else for(var T=0;T<u.length;++T){var P=u.charCodeAt(T);P<128?B+=1:P<2048?B+=2:P<55296||P>=57344?B+=3:(P=65536+((P&1023)<<10|u.charCodeAt(++T)&1023),B+=4)}return B+=this.encode(B*8),this.update(u),B},s.prototype.bytepad=function(u,E){for(var _=this.encode(E),B=0;B<u.length;++B)_+=this.encodeString(u[B]);var R=E-_%E,T=[];return T.length=R,this.update(T),this},s.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var u=this.blocks,E=this.lastByteIndex,_=this.blockCount,B=this.s;if(u[E>>2]|=this.padding[E&3],this.lastByteIndex===this.byteCount)for(u[0]=u[_],E=1;E<_+1;++E)u[E]=0;for(u[_-1]|=2147483648,E=0;E<_;++E)B[E]^=u[E];k(B)}},s.prototype.toString=s.prototype.hex=function(){this.finalize();for(var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P="",O;T<_;){for(R=0;R<u&&T<_;++R,++T)O=E[R],P+=v[O>>4&15]+v[O&15]+v[O>>12&15]+v[O>>8&15]+v[O>>20&15]+v[O>>16&15]+v[O>>28&15]+v[O>>24&15];T%u===0&&(k(E),R=0)}return B&&(O=E[R],P+=v[O>>4&15]+v[O&15],B>1&&(P+=v[O>>12&15]+v[O>>8&15]),B>2&&(P+=v[O>>20&15]+v[O>>16&15])),P},s.prototype.arrayBuffer=function(){this.finalize();var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P=this.outputBits>>3,O;B?O=new ArrayBuffer(_+1<<2):O=new ArrayBuffer(P);for(var Ct=new Uint32Array(O);T<_;){for(R=0;R<u&&T<_;++R,++T)Ct[T]=E[R];T%u===0&&k(E)}return B&&(Ct[R]=E[R],O=O.slice(0,P)),O},s.prototype.buffer=s.prototype.arrayBuffer,s.prototype.digest=s.prototype.array=function(){this.finalize();for(var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P=[],O,Ct;T<_;){for(R=0;R<u&&T<_;++R,++T)O=T<<2,Ct=E[R],P[O]=Ct&255,P[O+1]=Ct>>8&255,P[O+2]=Ct>>16&255,P[O+3]=Ct>>24&255;T%u===0&&k(E)}return B&&(O=T<<2,Ct=E[R],P[O]=Ct&255,B>1&&(P[O+1]=Ct>>8&255),B>2&&(P[O+2]=Ct>>16&255)),P};function g(u,E,_){s.call(this,u,E,_)}g.prototype=new s,g.prototype.finalize=function(){return this.encode(this.outputBits,!0),s.prototype.finalize.call(this)};var k=function(u){var E,_,B,R,T,P,O,Ct,D,q,De,X,Z,Fe,$,tt,Te,et,rt,Ue,it,nt,ke,ft,ot,qe,st,at,Ke,ut,ht,He,ct,lt,Le,dt,pt,ze,vt,gt,je,mt,At,Qe,bt,yt,Je,wt,xt,Ge,Mt,Et,Ye,St,Nt,Ve,It,_t,Me,Ee,Se,Ne,Ie;for(B=0;B<48;B+=2)R=u[0]^u[10]^u[20]^u[30]^u[40],T=u[1]^u[11]^u[21]^u[31]^u[41],P=u[2]^u[12]^u[22]^u[32]^u[42],O=u[3]^u[13]^u[23]^u[33]^u[43],Ct=u[4]^u[14]^u[24]^u[34]^u[44],D=u[5]^u[15]^u[25]^u[35]^u[45],q=u[6]^u[16]^u[26]^u[36]^u[46],De=u[7]^u[17]^u[27]^u[37]^u[47],X=u[8]^u[18]^u[28]^u[38]^u[48],Z=u[9]^u[19]^u[29]^u[39]^u[49],E=X^(P<<1|O>>>31),_=Z^(O<<1|P>>>31),u[0]^=E,u[1]^=_,u[10]^=E,u[11]^=_,u[20]^=E,u[21]^=_,u[30]^=E,u[31]^=_,u[40]^=E,u[41]^=_,E=R^(Ct<<1|D>>>31),_=T^(D<<1|Ct>>>31),u[2]^=E,u[3]^=_,u[12]^=E,u[13]^=_,u[22]^=E,u[23]^=_,u[32]^=E,u[33]^=_,u[42]^=E,u[43]^=_,E=P^(q<<1|De>>>31),_=O^(De<<1|q>>>31),u[4]^=E,u[5]^=_,u[14]^=E,u[15]^=_,u[24]^=E,u[25]^=_,u[34]^=E,u[35]^=_,u[44]^=E,u[45]^=_,E=Ct^(X<<1|Z>>>31),_=D^(Z<<1|X>>>31),u[6]^=E,u[7]^=_,u[16]^=E,u[17]^=_,u[26]^=E,u[27]^=_,u[36]^=E,u[37]^=_,u[46]^=E,u[47]^=_,E=q^(R<<1|T>>>31),_=De^(T<<1|R>>>31),u[8]^=E,u[9]^=_,u[18]^=E,u[19]^=_,u[28]^=E,u[29]^=_,u[38]^=E,u[39]^=_,u[48]^=E,u[49]^=_,Fe=u[0],$=u[1],yt=u[11]<<4|u[10]>>>28,Je=u[10]<<4|u[11]>>>28,at=u[20]<<3|u[21]>>>29,Ke=u[21]<<3|u[20]>>>29,Ee=u[31]<<9|u[30]>>>23,Se=u[30]<<9|u[31]>>>23,mt=u[40]<<18|u[41]>>>14,At=u[41]<<18|u[40]>>>14,lt=u[2]<<1|u[3]>>>31,Le=u[3]<<1|u[2]>>>31,tt=u[13]<<12|u[12]>>>20,Te=u[12]<<12|u[13]>>>20,wt=u[22]<<10|u[23]>>>22,xt=u[23]<<10|u[22]>>>22,ut=u[33]<<13|u[32]>>>19,ht=u[32]<<13|u[33]>>>19,Ne=u[42]<<2|u[43]>>>30,Ie=u[43]<<2|u[42]>>>30,St=u[5]<<30|u[4]>>>2,Nt=u[4]<<30|u[5]>>>2,dt=u[14]<<6|u[15]>>>26,pt=u[15]<<6|u[14]>>>26,et=u[25]<<11|u[24]>>>21,rt=u[24]<<11|u[25]>>>21,Ge=u[34]<<15|u[35]>>>17,Mt=u[35]<<15|u[34]>>>17,He=u[45]<<29|u[44]>>>3,ct=u[44]<<29|u[45]>>>3,ft=u[6]<<28|u[7]>>>4,ot=u[7]<<28|u[6]>>>4,Ve=u[17]<<23|u[16]>>>9,It=u[16]<<23|u[17]>>>9,ze=u[26]<<25|u[27]>>>7,vt=u[27]<<25|u[26]>>>7,Ue=u[36]<<21|u[37]>>>11,it=u[37]<<21|u[36]>>>11,Et=u[47]<<24|u[46]>>>8,Ye=u[46]<<24|u[47]>>>8,Qe=u[8]<<27|u[9]>>>5,bt=u[9]<<27|u[8]>>>5,qe=u[18]<<20|u[19]>>>12,st=u[19]<<20|u[18]>>>12,_t=u[29]<<7|u[28]>>>25,Me=u[28]<<7|u[29]>>>25,gt=u[38]<<8|u[39]>>>24,je=u[39]<<8|u[38]>>>24,nt=u[48]<<14|u[49]>>>18,ke=u[49]<<14|u[48]>>>18,u[0]=Fe^~tt&et,u[1]=$^~Te&rt,u[10]=ft^~qe&at,u[11]=ot^~st&Ke,u[20]=lt^~dt&ze,u[21]=Le^~pt&vt,u[30]=Qe^~yt&wt,u[31]=bt^~Je&xt,u[40]=St^~Ve&_t,u[41]=Nt^~It&Me,u[2]=tt^~et&Ue,u[3]=Te^~rt&it,u[12]=qe^~at&ut,u[13]=st^~Ke&ht,u[22]=dt^~ze&gt,u[23]=pt^~vt&je,u[32]=yt^~wt&Ge,u[33]=Je^~xt&Mt,u[42]=Ve^~_t&Ee,u[43]=It^~Me&Se,u[4]=et^~Ue&nt,u[5]=rt^~it&ke,u[14]=at^~ut&He,u[15]=Ke^~ht&ct,u[24]=ze^~gt&mt,u[25]=vt^~je&At,u[34]=wt^~Ge&Et,u[35]=xt^~Mt&Ye,u[44]=_t^~Ee&Ne,u[45]=Me^~Se&Ie,u[6]=Ue^~nt&Fe,u[7]=it^~ke&$,u[16]=ut^~He&ft,u[17]=ht^~ct&ot,u[26]=gt^~mt&lt,u[27]=je^~At&Le,u[36]=Ge^~Et&Qe,u[37]=Mt^~Ye&bt,u[46]=Ee^~Ne&St,u[47]=Se^~Ie&Nt,u[8]=nt^~Fe&tt,u[9]=ke^~$&Te,u[18]=He^~ft&qe,u[19]=ct^~ot&st,u[28]=mt^~lt&dt,u[29]=At^~Le&pt,u[38]=Et^~Qe&yt,u[39]=Ye^~bt&Je,u[48]=Ne^~St&Ve,u[49]=Ie^~Nt&It,u[0]^=C[B],u[1]^=C[B+1]};if(p)e.exports=f;else for(c=0;c<a.length;++c)n[a[c]]=f[a[c]]})()})(Un);var Ss=Un.exports;const Ns="logger/5.7.0";let kn=!1,qn=!1;const Dr={debug:1,default:2,info:2,warning:3,error:4,off:5};let Kn=Dr.default,xi=null;function Is(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach(t=>{try{if("test".normalize(t)!=="test")throw new Error("bad normalize")}catch{e.push(t)}}),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}const Hn=Is();var Mi;(function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"})(Mi||(Mi={}));var index_es_re;(function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"})(index_es_re||(index_es_re={}));const Ln="0123456789abcdef";class z{constructor(t){Object.defineProperty(this,"version",{enumerable:!0,value:t,writable:!1})}_log(t,r){const i=t.toLowerCase();Dr[i]==null&&this.throwArgumentError("invalid log level name","logLevel",t),!(Kn>Dr[i])&&console.log.apply(console,r)}debug(...t){this._log(z.levels.DEBUG,t)}info(...t){this._log(z.levels.INFO,t)}warn(...t){this._log(z.levels.WARNING,t)}makeError(t,r,i){if(qn)return this.makeError("censored error",r,{});r||(r=z.errors.UNKNOWN_ERROR),i||(i={});const n=[];Object.keys(i).forEach(A=>{const v=i[A];try{if(v instanceof Uint8Array){let w="";for(let y=0;y<v.length;y++)w+=Ln[v[y]>>4],w+=Ln[v[y]&15];n.push(A+"=Uint8Array(0x"+w+")")}else n.push(A+"="+JSON.stringify(v))}catch{n.push(A+"="+JSON.stringify(i[A].toString()))}}),n.push(`code=${r}`),n.push(`version=${this.version}`);const o=t;let h="";switch(r){case index_es_re.NUMERIC_FAULT:{h="NUMERIC_FAULT";const A=t;switch(A){case"overflow":case"underflow":case"division-by-zero":h+="-"+A;break;case"negative-power":case"negative-width":h+="-unsupported";break;case"unbound-bitwise-result":h+="-unbound-result";break}break}case index_es_re.CALL_EXCEPTION:case index_es_re.INSUFFICIENT_FUNDS:case index_es_re.MISSING_NEW:case index_es_re.NONCE_EXPIRED:case index_es_re.REPLACEMENT_UNDERPRICED:case index_es_re.TRANSACTION_REPLACED:case index_es_re.UNPREDICTABLE_GAS_LIMIT:h=r;break}h&&(t+=" [ See: https://links.ethers.org/v5-errors-"+h+" ]"),n.length&&(t+=" ("+n.join(", ")+")");const p=new Error(t);return p.reason=o,p.code=r,Object.keys(i).forEach(function(A){p[A]=i[A]}),p}throwError(t,r,i){throw this.makeError(t,r,i)}throwArgumentError(t,r,i){return this.throwError(t,z.errors.INVALID_ARGUMENT,{argument:r,value:i})}assert(t,r,i,n){t||this.throwError(r,i,n)}assertArgument(t,r,i,n){t||this.throwArgumentError(r,i,n)}checkNormalize(t){Hn&&this.throwError("platform missing String.prototype.normalize",z.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:Hn})}checkSafeUint53(t,r){typeof t=="number"&&(r==null&&(r="value not safe"),(t<0||t>=9007199254740991)&&this.throwError(r,z.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:t}),t%1&&this.throwError(r,z.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:t}))}checkArgumentCount(t,r,i){i?i=": "+i:i="",t<r&&this.throwError("missing argument"+i,z.errors.MISSING_ARGUMENT,{count:t,expectedCount:r}),t>r&&this.throwError("too many arguments"+i,z.errors.UNEXPECTED_ARGUMENT,{count:t,expectedCount:r})}checkNew(t,r){(t===Object||t==null)&&this.throwError("missing new",z.errors.MISSING_NEW,{name:r.name})}checkAbstract(t,r){t===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",z.errors.UNSUPPORTED_OPERATION,{name:t.name,operation:"new"}):(t===Object||t==null)&&this.throwError("missing new",z.errors.MISSING_NEW,{name:r.name})}static globalLogger(){return xi||(xi=new z(Ns)),xi}static setCensorship(t,r){if(!t&&r&&this.globalLogger().throwError("cannot permanently disable censorship",z.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),kn){if(!t)return;this.globalLogger().throwError("error censorship permanent",z.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}qn=!!t,kn=!!r}static setLogLevel(t){const r=Dr[t.toLowerCase()];if(r==null){z.globalLogger().warn("invalid log level - "+t);return}Kn=r}static from(t){return new z(t)}}z.errors=index_es_re,z.levels=Mi;const _s="bytes/5.7.0",Dt=new z(_s);function zn(e){return!!e.toHexString}function ir(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return ir(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function Bs(e){return Jt(e)&&!(e.length%2)||nr(e)}function jn(e){return typeof e=="number"&&e==e&&e%1===0}function nr(e){if(e==null)return!1;if(e.constructor===Uint8Array)return!0;if(typeof e=="string"||!jn(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(!jn(r)||r<0||r>=256)return!1}return!0}function Ot(e,t){if(t||(t={}),typeof e=="number"){Dt.checkSafeUint53(e,"invalid arrayify value");const r=[];for(;e;)r.unshift(e&255),e=parseInt(String(e/256));return r.length===0&&r.push(0),ir(new Uint8Array(r))}if(t.allowMissingPrefix&&typeof e=="string"&&e.substring(0,2)!=="0x"&&(e="0x"+e),zn(e)&&(e=e.toHexString()),Jt(e)){let r=e.substring(2);r.length%2&&(t.hexPad==="left"?r="0"+r:t.hexPad==="right"?r+="0":Dt.throwArgumentError("hex data is odd-length","value",e));const i=[];for(let n=0;n<r.length;n+=2)i.push(parseInt(r.substring(n,n+2),16));return ir(new Uint8Array(i))}return nr(e)?ir(new Uint8Array(e)):Dt.throwArgumentError("invalid arrayify value","value",e)}function Cs(e){const t=e.map(n=>Ot(n)),r=t.reduce((n,o)=>n+o.length,0),i=new Uint8Array(r);return t.reduce((n,o)=>(i.set(o,n),n+o.length),0),ir(i)}function Rs(e,t){e=Ot(e),e.length>t&&Dt.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(t);return r.set(e,t-e.length),ir(r)}function Jt(e,t){return!(typeof e!="string"||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}const Ei="0123456789abcdef";function Kt(e,t){if(t||(t={}),typeof e=="number"){Dt.checkSafeUint53(e,"invalid hexlify value");let r="";for(;e;)r=Ei[e&15]+r,e=Math.floor(e/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if(typeof e=="bigint")return e=e.toString(16),e.length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&typeof e=="string"&&e.substring(0,2)!=="0x"&&(e="0x"+e),zn(e))return e.toHexString();if(Jt(e))return e.length%2&&(t.hexPad==="left"?e="0x0"+e.substring(2):t.hexPad==="right"?e+="0":Dt.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(nr(e)){let r="0x";for(let i=0;i<e.length;i++){let n=e[i];r+=Ei[(n&240)>>4]+Ei[n&15]}return r}return Dt.throwArgumentError("invalid hexlify value","value",e)}function Os(e){if(typeof e!="string")e=Kt(e);else if(!Jt(e)||e.length%2)return null;return(e.length-2)/2}function Qn(e,t,r){return typeof e!="string"?e=Kt(e):(!Jt(e)||e.length%2)&&Dt.throwArgumentError("invalid hexData","value",e),t=2+2*t,r!=null?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)}function oe(e,t){for(typeof e!="string"?e=Kt(e):Jt(e)||Dt.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&Dt.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function Jn(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(Bs(e)){let r=Ot(e);r.length===64?(t.v=27+(r[32]>>7),r[32]&=127,t.r=Kt(r.slice(0,32)),t.s=Kt(r.slice(32,64))):r.length===65?(t.r=Kt(r.slice(0,32)),t.s=Kt(r.slice(32,64)),t.v=r[64]):Dt.throwArgumentError("invalid signature string","signature",e),t.v<27&&(t.v===0||t.v===1?t.v+=27:Dt.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(r[32]|=128),t._vs=Kt(r.slice(32,64))}else{if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,t._vs!=null){const n=Rs(Ot(t._vs),32);t._vs=Kt(n);const o=n[0]>=128?1:0;t.recoveryParam==null?t.recoveryParam=o:t.recoveryParam!==o&&Dt.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),n[0]&=127;const h=Kt(n);t.s==null?t.s=h:t.s!==h&&Dt.throwArgumentError("signature v mismatch _vs","signature",e)}if(t.recoveryParam==null)t.v==null?Dt.throwArgumentError("signature missing v and recoveryParam","signature",e):t.v===0||t.v===1?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(t.v==null)t.v=27+t.recoveryParam;else{const n=t.v===0||t.v===1?t.v:1-t.v%2;t.recoveryParam!==n&&Dt.throwArgumentError("signature recoveryParam mismatch v","signature",e)}t.r==null||!Jt(t.r)?Dt.throwArgumentError("signature missing or invalid r","signature",e):t.r=oe(t.r,32),t.s==null||!Jt(t.s)?Dt.throwArgumentError("signature missing or invalid s","signature",e):t.s=oe(t.s,32);const r=Ot(t.s);r[0]>=128&&Dt.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(r[0]|=128);const i=Kt(r);t._vs&&(Jt(t._vs)||Dt.throwArgumentError("signature invalid _vs","signature",e),t._vs=oe(t._vs,32)),t._vs==null?t._vs=i:t._vs!==i&&Dt.throwArgumentError("signature _vs mismatch v and s","signature",e)}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}function Si(e){return"0x"+Ss.keccak_256(Ot(e))}var Gn={exports:{}},Ps={},Ds=Object.freeze({__proto__:null,default:Ps}),Fs=Es(Ds);(function(e){(function(t,r){function i(b,f){if(!b)throw new Error(f||"Assertion failed")}function n(b,f){b.super_=f;var a=function(){};a.prototype=f.prototype,b.prototype=new a,b.prototype.constructor=b}function o(b,f,a){if(o.isBN(b))return b;this.negative=0,this.words=null,this.length=0,this.red=null,b!==null&&((f==="le"||f==="be")&&(a=f,f=10),this._init(b||0,f||10,a||"be"))}typeof t=="object"?t.exports=o:r.BN=o,o.BN=o,o.wordSize=26;var h;try{typeof window<"u"&&typeof window.Buffer<"u"?h=window.Buffer:h=Fs.Buffer}catch{}o.isBN=function(f){return f instanceof o?!0:f!==null&&typeof f=="object"&&f.constructor.wordSize===o.wordSize&&Array.isArray(f.words)},o.max=function(f,a){return f.cmp(a)>0?f:a},o.min=function(f,a){return f.cmp(a)<0?f:a},o.prototype._init=function(f,a,c){if(typeof f=="number")return this._initNumber(f,a,c);if(typeof f=="object")return this._initArray(f,a,c);a==="hex"&&(a=16),i(a===(a|0)&&a>=2&&a<=36),f=f.toString().replace(/\s+/g,"");var d=0;f[0]==="-"&&(d++,this.negative=1),d<f.length&&(a===16?this._parseHex(f,d,c):(this._parseBase(f,a,d),c==="le"&&this._initArray(this.toArray(),a,c)))},o.prototype._initNumber=function(f,a,c){f<0&&(this.negative=1,f=-f),f<67108864?(this.words=[f&67108863],this.length=1):f<4503599627370496?(this.words=[f&67108863,f/67108864&67108863],this.length=2):(i(f<9007199254740992),this.words=[f&67108863,f/67108864&67108863,1],this.length=3),c==="le"&&this._initArray(this.toArray(),a,c)},o.prototype._initArray=function(f,a,c){if(i(typeof f.length=="number"),f.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(f.length/3),this.words=new Array(this.length);for(var d=0;d<this.length;d++)this.words[d]=0;var m,x,M=0;if(c==="be")for(d=f.length-1,m=0;d>=0;d-=3)x=f[d]|f[d-1]<<8|f[d-2]<<16,this.words[m]|=x<<M&67108863,this.words[m+1]=x>>>26-M&67108863,M+=24,M>=26&&(M-=26,m++);else if(c==="le")for(d=0,m=0;d<f.length;d+=3)x=f[d]|f[d+1]<<8|f[d+2]<<16,this.words[m]|=x<<M&67108863,this.words[m+1]=x>>>26-M&67108863,M+=24,M>=26&&(M-=26,m++);return this._strip()};function p(b,f){var a=b.charCodeAt(f);if(a>=48&&a<=57)return a-48;if(a>=65&&a<=70)return a-55;if(a>=97&&a<=102)return a-87;i(!1,"Invalid character in "+b)}function A(b,f,a){var c=p(b,a);return a-1>=f&&(c|=p(b,a-1)<<4),c}o.prototype._parseHex=function(f,a,c){this.length=Math.ceil((f.length-a)/6),this.words=new Array(this.length);for(var d=0;d<this.length;d++)this.words[d]=0;var m=0,x=0,M;if(c==="be")for(d=f.length-1;d>=a;d-=2)M=A(f,a,d)<<m,this.words[x]|=M&67108863,m>=18?(m-=18,x+=1,this.words[x]|=M>>>26):m+=8;else{var l=f.length-a;for(d=l%2===0?a+1:a;d<f.length;d+=2)M=A(f,a,d)<<m,this.words[x]|=M&67108863,m>=18?(m-=18,x+=1,this.words[x]|=M>>>26):m+=8}this._strip()};function v(b,f,a,c){for(var d=0,m=0,x=Math.min(b.length,a),M=f;M<x;M++){var l=b.charCodeAt(M)-48;d*=c,l>=49?m=l-49+10:l>=17?m=l-17+10:m=l,i(l>=0&&m<c,"Invalid character"),d+=m}return d}o.prototype._parseBase=function(f,a,c){this.words=[0],this.length=1;for(var d=0,m=1;m<=67108863;m*=a)d++;d--,m=m/a|0;for(var x=f.length-c,M=x%d,l=Math.min(x,x-M)+c,s=0,g=c;g<l;g+=d)s=v(f,g,g+d,a),this.imuln(m),this.words[0]+s<67108864?this.words[0]+=s:this._iaddn(s);if(M!==0){var k=1;for(s=v(f,g,f.length,a),g=0;g<M;g++)k*=a;this.imuln(k),this.words[0]+s<67108864?this.words[0]+=s:this._iaddn(s)}this._strip()},o.prototype.copy=function(f){f.words=new Array(this.length);for(var a=0;a<this.length;a++)f.words[a]=this.words[a];f.length=this.length,f.negative=this.negative,f.red=this.red};function w(b,f){b.words=f.words,b.length=f.length,b.negative=f.negative,b.red=f.red}if(o.prototype._move=function(f){w(f,this)},o.prototype.clone=function(){var f=new o(null);return this.copy(f),f},o.prototype._expand=function(f){for(;this.length<f;)this.words[this.length++]=0;return this},o.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},o.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=y}catch{o.prototype.inspect=y}else o.prototype.inspect=y;function y(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var S=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],I=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],N=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(f,a){f=f||10,a=a|0||1;var c;if(f===16||f==="hex"){c="";for(var d=0,m=0,x=0;x<this.length;x++){var M=this.words[x],l=((M<<d|m)&16777215).toString(16);m=M>>>24-d&16777215,d+=2,d>=26&&(d-=26,x--),m!==0||x!==this.length-1?c=S[6-l.length]+l+c:c=l+c}for(m!==0&&(c=m.toString(16)+c);c.length%a!==0;)c="0"+c;return this.negative!==0&&(c="-"+c),c}if(f===(f|0)&&f>=2&&f<=36){var s=I[f],g=N[f];c="";var k=this.clone();for(k.negative=0;!k.isZero();){var u=k.modrn(g).toString(f);k=k.idivn(g),k.isZero()?c=u+c:c=S[s-u.length]+u+c}for(this.isZero()&&(c="0"+c);c.length%a!==0;)c="0"+c;return this.negative!==0&&(c="-"+c),c}i(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var f=this.words[0];return this.length===2?f+=this.words[1]*67108864:this.length===3&&this.words[2]===1?f+=4503599627370496+this.words[1]*67108864:this.length>2&&i(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-f:f},o.prototype.toJSON=function(){return this.toString(16,2)},h&&(o.prototype.toBuffer=function(f,a){return this.toArrayLike(h,f,a)}),o.prototype.toArray=function(f,a){return this.toArrayLike(Array,f,a)};var C=function(f,a){return f.allocUnsafe?f.allocUnsafe(a):new f(a)};o.prototype.toArrayLike=function(f,a,c){this._strip();var d=this.byteLength(),m=c||Math.max(1,d);i(d<=m,"byte array longer than desired length"),i(m>0,"Requested array length <= 0");var x=C(f,m),M=a==="le"?"LE":"BE";return this["_toArrayLike"+M](x,d),x},o.prototype._toArrayLikeLE=function(f,a){for(var c=0,d=0,m=0,x=0;m<this.length;m++){var M=this.words[m]<<x|d;f[c++]=M&255,c<f.length&&(f[c++]=M>>8&255),c<f.length&&(f[c++]=M>>16&255),x===6?(c<f.length&&(f[c++]=M>>24&255),d=0,x=0):(d=M>>>24,x+=2)}if(c<f.length)for(f[c++]=d;c<f.length;)f[c++]=0},o.prototype._toArrayLikeBE=function(f,a){for(var c=f.length-1,d=0,m=0,x=0;m<this.length;m++){var M=this.words[m]<<x|d;f[c--]=M&255,c>=0&&(f[c--]=M>>8&255),c>=0&&(f[c--]=M>>16&255),x===6?(c>=0&&(f[c--]=M>>24&255),d=0,x=0):(d=M>>>24,x+=2)}if(c>=0)for(f[c--]=d;c>=0;)f[c--]=0},Math.clz32?o.prototype._countBits=function(f){return 32-Math.clz32(f)}:o.prototype._countBits=function(f){var a=f,c=0;return a>=4096&&(c+=13,a>>>=13),a>=64&&(c+=7,a>>>=7),a>=8&&(c+=4,a>>>=4),a>=2&&(c+=2,a>>>=2),c+a},o.prototype._zeroBits=function(f){if(f===0)return 26;var a=f,c=0;return a&8191||(c+=13,a>>>=13),a&127||(c+=7,a>>>=7),a&15||(c+=4,a>>>=4),a&3||(c+=2,a>>>=2),a&1||c++,c},o.prototype.bitLength=function(){var f=this.words[this.length-1],a=this._countBits(f);return(this.length-1)*26+a};function F(b){for(var f=new Array(b.bitLength()),a=0;a<f.length;a++){var c=a/26|0,d=a%26;f[a]=b.words[c]>>>d&1}return f}o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var f=0,a=0;a<this.length;a++){var c=this._zeroBits(this.words[a]);if(f+=c,c!==26)break}return f},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(f){return this.negative!==0?this.abs().inotn(f).iaddn(1):this.clone()},o.prototype.fromTwos=function(f){return this.testn(f-1)?this.notn(f).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return this.negative!==0},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(f){for(;this.length<f.length;)this.words[this.length++]=0;for(var a=0;a<f.length;a++)this.words[a]=this.words[a]|f.words[a];return this._strip()},o.prototype.ior=function(f){return i((this.negative|f.negative)===0),this.iuor(f)},o.prototype.or=function(f){return this.length>f.length?this.clone().ior(f):f.clone().ior(this)},o.prototype.uor=function(f){return this.length>f.length?this.clone().iuor(f):f.clone().iuor(this)},o.prototype.iuand=function(f){var a;this.length>f.length?a=f:a=this;for(var c=0;c<a.length;c++)this.words[c]=this.words[c]&f.words[c];return this.length=a.length,this._strip()},o.prototype.iand=function(f){return i((this.negative|f.negative)===0),this.iuand(f)},o.prototype.and=function(f){return this.length>f.length?this.clone().iand(f):f.clone().iand(this)},o.prototype.uand=function(f){return this.length>f.length?this.clone().iuand(f):f.clone().iuand(this)},o.prototype.iuxor=function(f){var a,c;this.length>f.length?(a=this,c=f):(a=f,c=this);for(var d=0;d<c.length;d++)this.words[d]=a.words[d]^c.words[d];if(this!==a)for(;d<a.length;d++)this.words[d]=a.words[d];return this.length=a.length,this._strip()},o.prototype.ixor=function(f){return i((this.negative|f.negative)===0),this.iuxor(f)},o.prototype.xor=function(f){return this.length>f.length?this.clone().ixor(f):f.clone().ixor(this)},o.prototype.uxor=function(f){return this.length>f.length?this.clone().iuxor(f):f.clone().iuxor(this)},o.prototype.inotn=function(f){i(typeof f=="number"&&f>=0);var a=Math.ceil(f/26)|0,c=f%26;this._expand(a),c>0&&a--;for(var d=0;d<a;d++)this.words[d]=~this.words[d]&67108863;return c>0&&(this.words[d]=~this.words[d]&67108863>>26-c),this._strip()},o.prototype.notn=function(f){return this.clone().inotn(f)},o.prototype.setn=function(f,a){i(typeof f=="number"&&f>=0);var c=f/26|0,d=f%26;return this._expand(c+1),a?this.words[c]=this.words[c]|1<<d:this.words[c]=this.words[c]&~(1<<d),this._strip()},o.prototype.iadd=function(f){var a;if(this.negative!==0&&f.negative===0)return this.negative=0,a=this.isub(f),this.negative^=1,this._normSign();if(this.negative===0&&f.negative!==0)return f.negative=0,a=this.isub(f),f.negative=1,a._normSign();var c,d;this.length>f.length?(c=this,d=f):(c=f,d=this);for(var m=0,x=0;x<d.length;x++)a=(c.words[x]|0)+(d.words[x]|0)+m,this.words[x]=a&67108863,m=a>>>26;for(;m!==0&&x<c.length;x++)a=(c.words[x]|0)+m,this.words[x]=a&67108863,m=a>>>26;if(this.length=c.length,m!==0)this.words[this.length]=m,this.length++;else if(c!==this)for(;x<c.length;x++)this.words[x]=c.words[x];return this},o.prototype.add=function(f){var a;return f.negative!==0&&this.negative===0?(f.negative=0,a=this.sub(f),f.negative^=1,a):f.negative===0&&this.negative!==0?(this.negative=0,a=f.sub(this),this.negative=1,a):this.length>f.length?this.clone().iadd(f):f.clone().iadd(this)},o.prototype.isub=function(f){if(f.negative!==0){f.negative=0;var a=this.iadd(f);return f.negative=1,a._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(f),this.negative=1,this._normSign();var c=this.cmp(f);if(c===0)return this.negative=0,this.length=1,this.words[0]=0,this;var d,m;c>0?(d=this,m=f):(d=f,m=this);for(var x=0,M=0;M<m.length;M++)a=(d.words[M]|0)-(m.words[M]|0)+x,x=a>>26,this.words[M]=a&67108863;for(;x!==0&&M<d.length;M++)a=(d.words[M]|0)+x,x=a>>26,this.words[M]=a&67108863;if(x===0&&M<d.length&&d!==this)for(;M<d.length;M++)this.words[M]=d.words[M];return this.length=Math.max(this.length,M),d!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(f){return this.clone().isub(f)};function U(b,f,a){a.negative=f.negative^b.negative;var c=b.length+f.length|0;a.length=c,c=c-1|0;var d=b.words[0]|0,m=f.words[0]|0,x=d*m,M=x&67108863,l=x/67108864|0;a.words[0]=M;for(var s=1;s<c;s++){for(var g=l>>>26,k=l&67108863,u=Math.min(s,f.length-1),E=Math.max(0,s-b.length+1);E<=u;E++){var _=s-E|0;d=b.words[_]|0,m=f.words[E]|0,x=d*m+k,g+=x/67108864|0,k=x&67108863}a.words[s]=k|0,l=g|0}return l!==0?a.words[s]=l|0:a.length--,a._strip()}var J=function(f,a,c){var d=f.words,m=a.words,x=c.words,M=0,l,s,g,k=d[0]|0,u=k&8191,E=k>>>13,_=d[1]|0,B=_&8191,R=_>>>13,T=d[2]|0,P=T&8191,O=T>>>13,Ct=d[3]|0,D=Ct&8191,q=Ct>>>13,De=d[4]|0,X=De&8191,Z=De>>>13,Fe=d[5]|0,$=Fe&8191,tt=Fe>>>13,Te=d[6]|0,et=Te&8191,rt=Te>>>13,Ue=d[7]|0,it=Ue&8191,nt=Ue>>>13,ke=d[8]|0,ft=ke&8191,ot=ke>>>13,qe=d[9]|0,st=qe&8191,at=qe>>>13,Ke=m[0]|0,ut=Ke&8191,ht=Ke>>>13,He=m[1]|0,ct=He&8191,lt=He>>>13,Le=m[2]|0,dt=Le&8191,pt=Le>>>13,ze=m[3]|0,vt=ze&8191,gt=ze>>>13,je=m[4]|0,mt=je&8191,At=je>>>13,Qe=m[5]|0,bt=Qe&8191,yt=Qe>>>13,Je=m[6]|0,wt=Je&8191,xt=Je>>>13,Ge=m[7]|0,Mt=Ge&8191,Et=Ge>>>13,Ye=m[8]|0,St=Ye&8191,Nt=Ye>>>13,Ve=m[9]|0,It=Ve&8191,_t=Ve>>>13;c.negative=f.negative^a.negative,c.length=19,l=Math.imul(u,ut),s=Math.imul(u,ht),s=s+Math.imul(E,ut)|0,g=Math.imul(E,ht);var Me=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(Me>>>26)|0,Me&=67108863,l=Math.imul(B,ut),s=Math.imul(B,ht),s=s+Math.imul(R,ut)|0,g=Math.imul(R,ht),l=l+Math.imul(u,ct)|0,s=s+Math.imul(u,lt)|0,s=s+Math.imul(E,ct)|0,g=g+Math.imul(E,lt)|0;var Ee=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,l=Math.imul(P,ut),s=Math.imul(P,ht),s=s+Math.imul(O,ut)|0,g=Math.imul(O,ht),l=l+Math.imul(B,ct)|0,s=s+Math.imul(B,lt)|0,s=s+Math.imul(R,ct)|0,g=g+Math.imul(R,lt)|0,l=l+Math.imul(u,dt)|0,s=s+Math.imul(u,pt)|0,s=s+Math.imul(E,dt)|0,g=g+Math.imul(E,pt)|0;var Se=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(Se>>>26)|0,Se&=67108863,l=Math.imul(D,ut),s=Math.imul(D,ht),s=s+Math.imul(q,ut)|0,g=Math.imul(q,ht),l=l+Math.imul(P,ct)|0,s=s+Math.imul(P,lt)|0,s=s+Math.imul(O,ct)|0,g=g+Math.imul(O,lt)|0,l=l+Math.imul(B,dt)|0,s=s+Math.imul(B,pt)|0,s=s+Math.imul(R,dt)|0,g=g+Math.imul(R,pt)|0,l=l+Math.imul(u,vt)|0,s=s+Math.imul(u,gt)|0,s=s+Math.imul(E,vt)|0,g=g+Math.imul(E,gt)|0;var Ne=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,l=Math.imul(X,ut),s=Math.imul(X,ht),s=s+Math.imul(Z,ut)|0,g=Math.imul(Z,ht),l=l+Math.imul(D,ct)|0,s=s+Math.imul(D,lt)|0,s=s+Math.imul(q,ct)|0,g=g+Math.imul(q,lt)|0,l=l+Math.imul(P,dt)|0,s=s+Math.imul(P,pt)|0,s=s+Math.imul(O,dt)|0,g=g+Math.imul(O,pt)|0,l=l+Math.imul(B,vt)|0,s=s+Math.imul(B,gt)|0,s=s+Math.imul(R,vt)|0,g=g+Math.imul(R,gt)|0,l=l+Math.imul(u,mt)|0,s=s+Math.imul(u,At)|0,s=s+Math.imul(E,mt)|0,g=g+Math.imul(E,At)|0;var Ie=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,l=Math.imul($,ut),s=Math.imul($,ht),s=s+Math.imul(tt,ut)|0,g=Math.imul(tt,ht),l=l+Math.imul(X,ct)|0,s=s+Math.imul(X,lt)|0,s=s+Math.imul(Z,ct)|0,g=g+Math.imul(Z,lt)|0,l=l+Math.imul(D,dt)|0,s=s+Math.imul(D,pt)|0,s=s+Math.imul(q,dt)|0,g=g+Math.imul(q,pt)|0,l=l+Math.imul(P,vt)|0,s=s+Math.imul(P,gt)|0,s=s+Math.imul(O,vt)|0,g=g+Math.imul(O,gt)|0,l=l+Math.imul(B,mt)|0,s=s+Math.imul(B,At)|0,s=s+Math.imul(R,mt)|0,g=g+Math.imul(R,At)|0,l=l+Math.imul(u,bt)|0,s=s+Math.imul(u,yt)|0,s=s+Math.imul(E,bt)|0,g=g+Math.imul(E,yt)|0;var $r=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+($r>>>26)|0,$r&=67108863,l=Math.imul(et,ut),s=Math.imul(et,ht),s=s+Math.imul(rt,ut)|0,g=Math.imul(rt,ht),l=l+Math.imul($,ct)|0,s=s+Math.imul($,lt)|0,s=s+Math.imul(tt,ct)|0,g=g+Math.imul(tt,lt)|0,l=l+Math.imul(X,dt)|0,s=s+Math.imul(X,pt)|0,s=s+Math.imul(Z,dt)|0,g=g+Math.imul(Z,pt)|0,l=l+Math.imul(D,vt)|0,s=s+Math.imul(D,gt)|0,s=s+Math.imul(q,vt)|0,g=g+Math.imul(q,gt)|0,l=l+Math.imul(P,mt)|0,s=s+Math.imul(P,At)|0,s=s+Math.imul(O,mt)|0,g=g+Math.imul(O,At)|0,l=l+Math.imul(B,bt)|0,s=s+Math.imul(B,yt)|0,s=s+Math.imul(R,bt)|0,g=g+Math.imul(R,yt)|0,l=l+Math.imul(u,wt)|0,s=s+Math.imul(u,xt)|0,s=s+Math.imul(E,wt)|0,g=g+Math.imul(E,xt)|0;var ti=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ti>>>26)|0,ti&=67108863,l=Math.imul(it,ut),s=Math.imul(it,ht),s=s+Math.imul(nt,ut)|0,g=Math.imul(nt,ht),l=l+Math.imul(et,ct)|0,s=s+Math.imul(et,lt)|0,s=s+Math.imul(rt,ct)|0,g=g+Math.imul(rt,lt)|0,l=l+Math.imul($,dt)|0,s=s+Math.imul($,pt)|0,s=s+Math.imul(tt,dt)|0,g=g+Math.imul(tt,pt)|0,l=l+Math.imul(X,vt)|0,s=s+Math.imul(X,gt)|0,s=s+Math.imul(Z,vt)|0,g=g+Math.imul(Z,gt)|0,l=l+Math.imul(D,mt)|0,s=s+Math.imul(D,At)|0,s=s+Math.imul(q,mt)|0,g=g+Math.imul(q,At)|0,l=l+Math.imul(P,bt)|0,s=s+Math.imul(P,yt)|0,s=s+Math.imul(O,bt)|0,g=g+Math.imul(O,yt)|0,l=l+Math.imul(B,wt)|0,s=s+Math.imul(B,xt)|0,s=s+Math.imul(R,wt)|0,g=g+Math.imul(R,xt)|0,l=l+Math.imul(u,Mt)|0,s=s+Math.imul(u,Et)|0,s=s+Math.imul(E,Mt)|0,g=g+Math.imul(E,Et)|0;var ei=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ei>>>26)|0,ei&=67108863,l=Math.imul(ft,ut),s=Math.imul(ft,ht),s=s+Math.imul(ot,ut)|0,g=Math.imul(ot,ht),l=l+Math.imul(it,ct)|0,s=s+Math.imul(it,lt)|0,s=s+Math.imul(nt,ct)|0,g=g+Math.imul(nt,lt)|0,l=l+Math.imul(et,dt)|0,s=s+Math.imul(et,pt)|0,s=s+Math.imul(rt,dt)|0,g=g+Math.imul(rt,pt)|0,l=l+Math.imul($,vt)|0,s=s+Math.imul($,gt)|0,s=s+Math.imul(tt,vt)|0,g=g+Math.imul(tt,gt)|0,l=l+Math.imul(X,mt)|0,s=s+Math.imul(X,At)|0,s=s+Math.imul(Z,mt)|0,g=g+Math.imul(Z,At)|0,l=l+Math.imul(D,bt)|0,s=s+Math.imul(D,yt)|0,s=s+Math.imul(q,bt)|0,g=g+Math.imul(q,yt)|0,l=l+Math.imul(P,wt)|0,s=s+Math.imul(P,xt)|0,s=s+Math.imul(O,wt)|0,g=g+Math.imul(O,xt)|0,l=l+Math.imul(B,Mt)|0,s=s+Math.imul(B,Et)|0,s=s+Math.imul(R,Mt)|0,g=g+Math.imul(R,Et)|0,l=l+Math.imul(u,St)|0,s=s+Math.imul(u,Nt)|0,s=s+Math.imul(E,St)|0,g=g+Math.imul(E,Nt)|0;var ri=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ri>>>26)|0,ri&=67108863,l=Math.imul(st,ut),s=Math.imul(st,ht),s=s+Math.imul(at,ut)|0,g=Math.imul(at,ht),l=l+Math.imul(ft,ct)|0,s=s+Math.imul(ft,lt)|0,s=s+Math.imul(ot,ct)|0,g=g+Math.imul(ot,lt)|0,l=l+Math.imul(it,dt)|0,s=s+Math.imul(it,pt)|0,s=s+Math.imul(nt,dt)|0,g=g+Math.imul(nt,pt)|0,l=l+Math.imul(et,vt)|0,s=s+Math.imul(et,gt)|0,s=s+Math.imul(rt,vt)|0,g=g+Math.imul(rt,gt)|0,l=l+Math.imul($,mt)|0,s=s+Math.imul($,At)|0,s=s+Math.imul(tt,mt)|0,g=g+Math.imul(tt,At)|0,l=l+Math.imul(X,bt)|0,s=s+Math.imul(X,yt)|0,s=s+Math.imul(Z,bt)|0,g=g+Math.imul(Z,yt)|0,l=l+Math.imul(D,wt)|0,s=s+Math.imul(D,xt)|0,s=s+Math.imul(q,wt)|0,g=g+Math.imul(q,xt)|0,l=l+Math.imul(P,Mt)|0,s=s+Math.imul(P,Et)|0,s=s+Math.imul(O,Mt)|0,g=g+Math.imul(O,Et)|0,l=l+Math.imul(B,St)|0,s=s+Math.imul(B,Nt)|0,s=s+Math.imul(R,St)|0,g=g+Math.imul(R,Nt)|0,l=l+Math.imul(u,It)|0,s=s+Math.imul(u,_t)|0,s=s+Math.imul(E,It)|0,g=g+Math.imul(E,_t)|0;var ii=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ii>>>26)|0,ii&=67108863,l=Math.imul(st,ct),s=Math.imul(st,lt),s=s+Math.imul(at,ct)|0,g=Math.imul(at,lt),l=l+Math.imul(ft,dt)|0,s=s+Math.imul(ft,pt)|0,s=s+Math.imul(ot,dt)|0,g=g+Math.imul(ot,pt)|0,l=l+Math.imul(it,vt)|0,s=s+Math.imul(it,gt)|0,s=s+Math.imul(nt,vt)|0,g=g+Math.imul(nt,gt)|0,l=l+Math.imul(et,mt)|0,s=s+Math.imul(et,At)|0,s=s+Math.imul(rt,mt)|0,g=g+Math.imul(rt,At)|0,l=l+Math.imul($,bt)|0,s=s+Math.imul($,yt)|0,s=s+Math.imul(tt,bt)|0,g=g+Math.imul(tt,yt)|0,l=l+Math.imul(X,wt)|0,s=s+Math.imul(X,xt)|0,s=s+Math.imul(Z,wt)|0,g=g+Math.imul(Z,xt)|0,l=l+Math.imul(D,Mt)|0,s=s+Math.imul(D,Et)|0,s=s+Math.imul(q,Mt)|0,g=g+Math.imul(q,Et)|0,l=l+Math.imul(P,St)|0,s=s+Math.imul(P,Nt)|0,s=s+Math.imul(O,St)|0,g=g+Math.imul(O,Nt)|0,l=l+Math.imul(B,It)|0,s=s+Math.imul(B,_t)|0,s=s+Math.imul(R,It)|0,g=g+Math.imul(R,_t)|0;var ni=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ni>>>26)|0,ni&=67108863,l=Math.imul(st,dt),s=Math.imul(st,pt),s=s+Math.imul(at,dt)|0,g=Math.imul(at,pt),l=l+Math.imul(ft,vt)|0,s=s+Math.imul(ft,gt)|0,s=s+Math.imul(ot,vt)|0,g=g+Math.imul(ot,gt)|0,l=l+Math.imul(it,mt)|0,s=s+Math.imul(it,At)|0,s=s+Math.imul(nt,mt)|0,g=g+Math.imul(nt,At)|0,l=l+Math.imul(et,bt)|0,s=s+Math.imul(et,yt)|0,s=s+Math.imul(rt,bt)|0,g=g+Math.imul(rt,yt)|0,l=l+Math.imul($,wt)|0,s=s+Math.imul($,xt)|0,s=s+Math.imul(tt,wt)|0,g=g+Math.imul(tt,xt)|0,l=l+Math.imul(X,Mt)|0,s=s+Math.imul(X,Et)|0,s=s+Math.imul(Z,Mt)|0,g=g+Math.imul(Z,Et)|0,l=l+Math.imul(D,St)|0,s=s+Math.imul(D,Nt)|0,s=s+Math.imul(q,St)|0,g=g+Math.imul(q,Nt)|0,l=l+Math.imul(P,It)|0,s=s+Math.imul(P,_t)|0,s=s+Math.imul(O,It)|0,g=g+Math.imul(O,_t)|0;var fi=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(fi>>>26)|0,fi&=67108863,l=Math.imul(st,vt),s=Math.imul(st,gt),s=s+Math.imul(at,vt)|0,g=Math.imul(at,gt),l=l+Math.imul(ft,mt)|0,s=s+Math.imul(ft,At)|0,s=s+Math.imul(ot,mt)|0,g=g+Math.imul(ot,At)|0,l=l+Math.imul(it,bt)|0,s=s+Math.imul(it,yt)|0,s=s+Math.imul(nt,bt)|0,g=g+Math.imul(nt,yt)|0,l=l+Math.imul(et,wt)|0,s=s+Math.imul(et,xt)|0,s=s+Math.imul(rt,wt)|0,g=g+Math.imul(rt,xt)|0,l=l+Math.imul($,Mt)|0,s=s+Math.imul($,Et)|0,s=s+Math.imul(tt,Mt)|0,g=g+Math.imul(tt,Et)|0,l=l+Math.imul(X,St)|0,s=s+Math.imul(X,Nt)|0,s=s+Math.imul(Z,St)|0,g=g+Math.imul(Z,Nt)|0,l=l+Math.imul(D,It)|0,s=s+Math.imul(D,_t)|0,s=s+Math.imul(q,It)|0,g=g+Math.imul(q,_t)|0;var oi=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(oi>>>26)|0,oi&=67108863,l=Math.imul(st,mt),s=Math.imul(st,At),s=s+Math.imul(at,mt)|0,g=Math.imul(at,At),l=l+Math.imul(ft,bt)|0,s=s+Math.imul(ft,yt)|0,s=s+Math.imul(ot,bt)|0,g=g+Math.imul(ot,yt)|0,l=l+Math.imul(it,wt)|0,s=s+Math.imul(it,xt)|0,s=s+Math.imul(nt,wt)|0,g=g+Math.imul(nt,xt)|0,l=l+Math.imul(et,Mt)|0,s=s+Math.imul(et,Et)|0,s=s+Math.imul(rt,Mt)|0,g=g+Math.imul(rt,Et)|0,l=l+Math.imul($,St)|0,s=s+Math.imul($,Nt)|0,s=s+Math.imul(tt,St)|0,g=g+Math.imul(tt,Nt)|0,l=l+Math.imul(X,It)|0,s=s+Math.imul(X,_t)|0,s=s+Math.imul(Z,It)|0,g=g+Math.imul(Z,_t)|0;var si=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(si>>>26)|0,si&=67108863,l=Math.imul(st,bt),s=Math.imul(st,yt),s=s+Math.imul(at,bt)|0,g=Math.imul(at,yt),l=l+Math.imul(ft,wt)|0,s=s+Math.imul(ft,xt)|0,s=s+Math.imul(ot,wt)|0,g=g+Math.imul(ot,xt)|0,l=l+Math.imul(it,Mt)|0,s=s+Math.imul(it,Et)|0,s=s+Math.imul(nt,Mt)|0,g=g+Math.imul(nt,Et)|0,l=l+Math.imul(et,St)|0,s=s+Math.imul(et,Nt)|0,s=s+Math.imul(rt,St)|0,g=g+Math.imul(rt,Nt)|0,l=l+Math.imul($,It)|0,s=s+Math.imul($,_t)|0,s=s+Math.imul(tt,It)|0,g=g+Math.imul(tt,_t)|0;var ai=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ai>>>26)|0,ai&=67108863,l=Math.imul(st,wt),s=Math.imul(st,xt),s=s+Math.imul(at,wt)|0,g=Math.imul(at,xt),l=l+Math.imul(ft,Mt)|0,s=s+Math.imul(ft,Et)|0,s=s+Math.imul(ot,Mt)|0,g=g+Math.imul(ot,Et)|0,l=l+Math.imul(it,St)|0,s=s+Math.imul(it,Nt)|0,s=s+Math.imul(nt,St)|0,g=g+Math.imul(nt,Nt)|0,l=l+Math.imul(et,It)|0,s=s+Math.imul(et,_t)|0,s=s+Math.imul(rt,It)|0,g=g+Math.imul(rt,_t)|0;var ui=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ui>>>26)|0,ui&=67108863,l=Math.imul(st,Mt),s=Math.imul(st,Et),s=s+Math.imul(at,Mt)|0,g=Math.imul(at,Et),l=l+Math.imul(ft,St)|0,s=s+Math.imul(ft,Nt)|0,s=s+Math.imul(ot,St)|0,g=g+Math.imul(ot,Nt)|0,l=l+Math.imul(it,It)|0,s=s+Math.imul(it,_t)|0,s=s+Math.imul(nt,It)|0,g=g+Math.imul(nt,_t)|0;var hi=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(hi>>>26)|0,hi&=67108863,l=Math.imul(st,St),s=Math.imul(st,Nt),s=s+Math.imul(at,St)|0,g=Math.imul(at,Nt),l=l+Math.imul(ft,It)|0,s=s+Math.imul(ft,_t)|0,s=s+Math.imul(ot,It)|0,g=g+Math.imul(ot,_t)|0;var ci=(M+l|0)+((s&8191)<<13)|0;M=(g+(s>>>13)|0)+(ci>>>26)|0,ci&=67108863,l=Math.imul(st,It),s=Math.imul(st,_t),s=s+Math.imul(at,It)|0,g=Math.imul(at,_t);var li=(M+l|0)+((s&8191)<<13)|0;return M=(g+(s>>>13)|0)+(li>>>26)|0,li&=67108863,x[0]=Me,x[1]=Ee,x[2]=Se,x[3]=Ne,x[4]=Ie,x[5]=$r,x[6]=ti,x[7]=ei,x[8]=ri,x[9]=ii,x[10]=ni,x[11]=fi,x[12]=oi,x[13]=si,x[14]=ai,x[15]=ui,x[16]=hi,x[17]=ci,x[18]=li,M!==0&&(x[19]=M,c.length++),c};Math.imul||(J=U);function Bt(b,f,a){a.negative=f.negative^b.negative,a.length=b.length+f.length;for(var c=0,d=0,m=0;m<a.length-1;m++){var x=d;d=0;for(var M=c&67108863,l=Math.min(m,f.length-1),s=Math.max(0,m-b.length+1);s<=l;s++){var g=m-s,k=b.words[g]|0,u=f.words[s]|0,E=k*u,_=E&67108863;x=x+(E/67108864|0)|0,_=_+M|0,M=_&67108863,x=x+(_>>>26)|0,d+=x>>>26,x&=67108863}a.words[m]=M,c=x,x=d}return c!==0?a.words[m]=c:a.length--,a._strip()}function G(b,f,a){return Bt(b,f,a)}o.prototype.mulTo=function(f,a){var c,d=this.length+f.length;return this.length===10&&f.length===10?c=J(this,f,a):d<63?c=U(this,f,a):d<1024?c=Bt(this,f,a):c=G(this,f,a),c},o.prototype.mul=function(f){var a=new o(null);return a.words=new Array(this.length+f.length),this.mulTo(f,a)},o.prototype.mulf=function(f){var a=new o(null);return a.words=new Array(this.length+f.length),G(this,f,a)},o.prototype.imul=function(f){return this.clone().mulTo(f,this)},o.prototype.imuln=function(f){var a=f<0;a&&(f=-f),i(typeof f=="number"),i(f<67108864);for(var c=0,d=0;d<this.length;d++){var m=(this.words[d]|0)*f,x=(m&67108863)+(c&67108863);c>>=26,c+=m/67108864|0,c+=x>>>26,this.words[d]=x&67108863}return c!==0&&(this.words[d]=c,this.length++),a?this.ineg():this},o.prototype.muln=function(f){return this.clone().imuln(f)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(f){var a=F(f);if(a.length===0)return new o(1);for(var c=this,d=0;d<a.length&&a[d]===0;d++,c=c.sqr());if(++d<a.length)for(var m=c.sqr();d<a.length;d++,m=m.sqr())a[d]!==0&&(c=c.mul(m));return c},o.prototype.iushln=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26,d=67108863>>>26-a<<26-a,m;if(a!==0){var x=0;for(m=0;m<this.length;m++){var M=this.words[m]&d,l=(this.words[m]|0)-M<<a;this.words[m]=l|x,x=M>>>26-a}x&&(this.words[m]=x,this.length++)}if(c!==0){for(m=this.length-1;m>=0;m--)this.words[m+c]=this.words[m];for(m=0;m<c;m++)this.words[m]=0;this.length+=c}return this._strip()},o.prototype.ishln=function(f){return i(this.negative===0),this.iushln(f)},o.prototype.iushrn=function(f,a,c){i(typeof f=="number"&&f>=0);var d;a?d=(a-a%26)/26:d=0;var m=f%26,x=Math.min((f-m)/26,this.length),M=67108863^67108863>>>m<<m,l=c;if(d-=x,d=Math.max(0,d),l){for(var s=0;s<x;s++)l.words[s]=this.words[s];l.length=x}if(x!==0)if(this.length>x)for(this.length-=x,s=0;s<this.length;s++)this.words[s]=this.words[s+x];else this.words[0]=0,this.length=1;var g=0;for(s=this.length-1;s>=0&&(g!==0||s>=d);s--){var k=this.words[s]|0;this.words[s]=g<<26-m|k>>>m,g=k&M}return l&&g!==0&&(l.words[l.length++]=g),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(f,a,c){return i(this.negative===0),this.iushrn(f,a,c)},o.prototype.shln=function(f){return this.clone().ishln(f)},o.prototype.ushln=function(f){return this.clone().iushln(f)},o.prototype.shrn=function(f){return this.clone().ishrn(f)},o.prototype.ushrn=function(f){return this.clone().iushrn(f)},o.prototype.testn=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26,d=1<<a;if(this.length<=c)return!1;var m=this.words[c];return!!(m&d)},o.prototype.imaskn=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26;if(i(this.negative===0,"imaskn works only with positive numbers"),this.length<=c)return this;if(a!==0&&c++,this.length=Math.min(c,this.length),a!==0){var d=67108863^67108863>>>a<<a;this.words[this.length-1]&=d}return this._strip()},o.prototype.maskn=function(f){return this.clone().imaskn(f)},o.prototype.iaddn=function(f){return i(typeof f=="number"),i(f<67108864),f<0?this.isubn(-f):this.negative!==0?this.length===1&&(this.words[0]|0)<=f?(this.words[0]=f-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(f),this.negative=1,this):this._iaddn(f)},o.prototype._iaddn=function(f){this.words[0]+=f;for(var a=0;a<this.length&&this.words[a]>=67108864;a++)this.words[a]-=67108864,a===this.length-1?this.words[a+1]=1:this.words[a+1]++;return this.length=Math.max(this.length,a+1),this},o.prototype.isubn=function(f){if(i(typeof f=="number"),i(f<67108864),f<0)return this.iaddn(-f);if(this.negative!==0)return this.negative=0,this.iaddn(f),this.negative=1,this;if(this.words[0]-=f,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var a=0;a<this.length&&this.words[a]<0;a++)this.words[a]+=67108864,this.words[a+1]-=1;return this._strip()},o.prototype.addn=function(f){return this.clone().iaddn(f)},o.prototype.subn=function(f){return this.clone().isubn(f)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(f,a,c){var d=f.length+c,m;this._expand(d);var x,M=0;for(m=0;m<f.length;m++){x=(this.words[m+c]|0)+M;var l=(f.words[m]|0)*a;x-=l&67108863,M=(x>>26)-(l/67108864|0),this.words[m+c]=x&67108863}for(;m<this.length-c;m++)x=(this.words[m+c]|0)+M,M=x>>26,this.words[m+c]=x&67108863;if(M===0)return this._strip();for(i(M===-1),M=0,m=0;m<this.length;m++)x=-(this.words[m]|0)+M,M=x>>26,this.words[m]=x&67108863;return this.negative=1,this._strip()},o.prototype._wordDiv=function(f,a){var c=this.length-f.length,d=this.clone(),m=f,x=m.words[m.length-1]|0,M=this._countBits(x);c=26-M,c!==0&&(m=m.ushln(c),d.iushln(c),x=m.words[m.length-1]|0);var l=d.length-m.length,s;if(a!=="mod"){s=new o(null),s.length=l+1,s.words=new Array(s.length);for(var g=0;g<s.length;g++)s.words[g]=0}var k=d.clone()._ishlnsubmul(m,1,l);k.negative===0&&(d=k,s&&(s.words[l]=1));for(var u=l-1;u>=0;u--){var E=(d.words[m.length+u]|0)*67108864+(d.words[m.length+u-1]|0);for(E=Math.min(E/x|0,67108863),d._ishlnsubmul(m,E,u);d.negative!==0;)E--,d.negative=0,d._ishlnsubmul(m,1,u),d.isZero()||(d.negative^=1);s&&(s.words[u]=E)}return s&&s._strip(),d._strip(),a!=="div"&&c!==0&&d.iushrn(c),{div:s||null,mod:d}},o.prototype.divmod=function(f,a,c){if(i(!f.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var d,m,x;return this.negative!==0&&f.negative===0?(x=this.neg().divmod(f,a),a!=="mod"&&(d=x.div.neg()),a!=="div"&&(m=x.mod.neg(),c&&m.negative!==0&&m.iadd(f)),{div:d,mod:m}):this.negative===0&&f.negative!==0?(x=this.divmod(f.neg(),a),a!=="mod"&&(d=x.div.neg()),{div:d,mod:x.mod}):this.negative&f.negative?(x=this.neg().divmod(f.neg(),a),a!=="div"&&(m=x.mod.neg(),c&&m.negative!==0&&m.isub(f)),{div:x.div,mod:m}):f.length>this.length||this.cmp(f)<0?{div:new o(0),mod:this}:f.length===1?a==="div"?{div:this.divn(f.words[0]),mod:null}:a==="mod"?{div:null,mod:new o(this.modrn(f.words[0]))}:{div:this.divn(f.words[0]),mod:new o(this.modrn(f.words[0]))}:this._wordDiv(f,a)},o.prototype.div=function(f){return this.divmod(f,"div",!1).div},o.prototype.mod=function(f){return this.divmod(f,"mod",!1).mod},o.prototype.umod=function(f){return this.divmod(f,"mod",!0).mod},o.prototype.divRound=function(f){var a=this.divmod(f);if(a.mod.isZero())return a.div;var c=a.div.negative!==0?a.mod.isub(f):a.mod,d=f.ushrn(1),m=f.andln(1),x=c.cmp(d);return x<0||m===1&&x===0?a.div:a.div.negative!==0?a.div.isubn(1):a.div.iaddn(1)},o.prototype.modrn=function(f){var a=f<0;a&&(f=-f),i(f<=67108863);for(var c=(1<<26)%f,d=0,m=this.length-1;m>=0;m--)d=(c*d+(this.words[m]|0))%f;return a?-d:d},o.prototype.modn=function(f){return this.modrn(f)},o.prototype.idivn=function(f){var a=f<0;a&&(f=-f),i(f<=67108863);for(var c=0,d=this.length-1;d>=0;d--){var m=(this.words[d]|0)+c*67108864;this.words[d]=m/f|0,c=m%f}return this._strip(),a?this.ineg():this},o.prototype.divn=function(f){return this.clone().idivn(f)},o.prototype.egcd=function(f){i(f.negative===0),i(!f.isZero());var a=this,c=f.clone();a.negative!==0?a=a.umod(f):a=a.clone();for(var d=new o(1),m=new o(0),x=new o(0),M=new o(1),l=0;a.isEven()&&c.isEven();)a.iushrn(1),c.iushrn(1),++l;for(var s=c.clone(),g=a.clone();!a.isZero();){for(var k=0,u=1;!(a.words[0]&u)&&k<26;++k,u<<=1);if(k>0)for(a.iushrn(k);k-- >0;)(d.isOdd()||m.isOdd())&&(d.iadd(s),m.isub(g)),d.iushrn(1),m.iushrn(1);for(var E=0,_=1;!(c.words[0]&_)&&E<26;++E,_<<=1);if(E>0)for(c.iushrn(E);E-- >0;)(x.isOdd()||M.isOdd())&&(x.iadd(s),M.isub(g)),x.iushrn(1),M.iushrn(1);a.cmp(c)>=0?(a.isub(c),d.isub(x),m.isub(M)):(c.isub(a),x.isub(d),M.isub(m))}return{a:x,b:M,gcd:c.iushln(l)}},o.prototype._invmp=function(f){i(f.negative===0),i(!f.isZero());var a=this,c=f.clone();a.negative!==0?a=a.umod(f):a=a.clone();for(var d=new o(1),m=new o(0),x=c.clone();a.cmpn(1)>0&&c.cmpn(1)>0;){for(var M=0,l=1;!(a.words[0]&l)&&M<26;++M,l<<=1);if(M>0)for(a.iushrn(M);M-- >0;)d.isOdd()&&d.iadd(x),d.iushrn(1);for(var s=0,g=1;!(c.words[0]&g)&&s<26;++s,g<<=1);if(s>0)for(c.iushrn(s);s-- >0;)m.isOdd()&&m.iadd(x),m.iushrn(1);a.cmp(c)>=0?(a.isub(c),d.isub(m)):(c.isub(a),m.isub(d))}var k;return a.cmpn(1)===0?k=d:k=m,k.cmpn(0)<0&&k.iadd(f),k},o.prototype.gcd=function(f){if(this.isZero())return f.abs();if(f.isZero())return this.abs();var a=this.clone(),c=f.clone();a.negative=0,c.negative=0;for(var d=0;a.isEven()&&c.isEven();d++)a.iushrn(1),c.iushrn(1);do{for(;a.isEven();)a.iushrn(1);for(;c.isEven();)c.iushrn(1);var m=a.cmp(c);if(m<0){var x=a;a=c,c=x}else if(m===0||c.cmpn(1)===0)break;a.isub(c)}while(!0);return c.iushln(d)},o.prototype.invm=function(f){return this.egcd(f).a.umod(f)},o.prototype.isEven=function(){return(this.words[0]&1)===0},o.prototype.isOdd=function(){return(this.words[0]&1)===1},o.prototype.andln=function(f){return this.words[0]&f},o.prototype.bincn=function(f){i(typeof f=="number");var a=f%26,c=(f-a)/26,d=1<<a;if(this.length<=c)return this._expand(c+1),this.words[c]|=d,this;for(var m=d,x=c;m!==0&&x<this.length;x++){var M=this.words[x]|0;M+=m,m=M>>>26,M&=67108863,this.words[x]=M}return m!==0&&(this.words[x]=m,this.length++),this},o.prototype.isZero=function(){return this.length===1&&this.words[0]===0},o.prototype.cmpn=function(f){var a=f<0;if(this.negative!==0&&!a)return-1;if(this.negative===0&&a)return 1;this._strip();var c;if(this.length>1)c=1;else{a&&(f=-f),i(f<=67108863,"Number is too big");var d=this.words[0]|0;c=d===f?0:d<f?-1:1}return this.negative!==0?-c|0:c},o.prototype.cmp=function(f){if(this.negative!==0&&f.negative===0)return-1;if(this.negative===0&&f.negative!==0)return 1;var a=this.ucmp(f);return this.negative!==0?-a|0:a},o.prototype.ucmp=function(f){if(this.length>f.length)return 1;if(this.length<f.length)return-1;for(var a=0,c=this.length-1;c>=0;c--){var d=this.words[c]|0,m=f.words[c]|0;if(d!==m){d<m?a=-1:d>m&&(a=1);break}}return a},o.prototype.gtn=function(f){return this.cmpn(f)===1},o.prototype.gt=function(f){return this.cmp(f)===1},o.prototype.gten=function(f){return this.cmpn(f)>=0},o.prototype.gte=function(f){return this.cmp(f)>=0},o.prototype.ltn=function(f){return this.cmpn(f)===-1},o.prototype.lt=function(f){return this.cmp(f)===-1},o.prototype.lten=function(f){return this.cmpn(f)<=0},o.prototype.lte=function(f){return this.cmp(f)<=0},o.prototype.eqn=function(f){return this.cmpn(f)===0},o.prototype.eq=function(f){return this.cmp(f)===0},o.red=function(f){return new Y(f)},o.prototype.toRed=function(f){return i(!this.red,"Already a number in reduction context"),i(this.negative===0,"red works only with positives"),f.convertTo(this)._forceRed(f)},o.prototype.fromRed=function(){return i(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(f){return this.red=f,this},o.prototype.forceRed=function(f){return i(!this.red,"Already a number in reduction context"),this._forceRed(f)},o.prototype.redAdd=function(f){return i(this.red,"redAdd works only with red numbers"),this.red.add(this,f)},o.prototype.redIAdd=function(f){return i(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,f)},o.prototype.redSub=function(f){return i(this.red,"redSub works only with red numbers"),this.red.sub(this,f)},o.prototype.redISub=function(f){return i(this.red,"redISub works only with red numbers"),this.red.isub(this,f)},o.prototype.redShl=function(f){return i(this.red,"redShl works only with red numbers"),this.red.shl(this,f)},o.prototype.redMul=function(f){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,f),this.red.mul(this,f)},o.prototype.redIMul=function(f){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,f),this.red.imul(this,f)},o.prototype.redSqr=function(){return i(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return i(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return i(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return i(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return i(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(f){return i(this.red&&!f.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,f)};var H={k256:null,p224:null,p192:null,p25519:null};function L(b,f){this.name=b,this.p=new o(f,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}L.prototype._tmp=function(){var f=new o(null);return f.words=new Array(Math.ceil(this.n/13)),f},L.prototype.ireduce=function(f){var a=f,c;do this.split(a,this.tmp),a=this.imulK(a),a=a.iadd(this.tmp),c=a.bitLength();while(c>this.n);var d=c<this.n?-1:a.ucmp(this.p);return d===0?(a.words[0]=0,a.length=1):d>0?a.isub(this.p):a.strip!==void 0?a.strip():a._strip(),a},L.prototype.split=function(f,a){f.iushrn(this.n,0,a)},L.prototype.imulK=function(f){return f.imul(this.k)};function Pt(){L.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}n(Pt,L),Pt.prototype.split=function(f,a){for(var c=4194303,d=Math.min(f.length,9),m=0;m<d;m++)a.words[m]=f.words[m];if(a.length=d,f.length<=9){f.words[0]=0,f.length=1;return}var x=f.words[9];for(a.words[a.length++]=x&c,m=10;m<f.length;m++){var M=f.words[m]|0;f.words[m-10]=(M&c)<<4|x>>>22,x=M}x>>>=22,f.words[m-10]=x,x===0&&f.length>10?f.length-=10:f.length-=9},Pt.prototype.imulK=function(f){f.words[f.length]=0,f.words[f.length+1]=0,f.length+=2;for(var a=0,c=0;c<f.length;c++){var d=f.words[c]|0;a+=d*977,f.words[c]=a&67108863,a=d*64+(a/67108864|0)}return f.words[f.length-1]===0&&(f.length--,f.words[f.length-1]===0&&f.length--),f};function W(){L.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}n(W,L);function Rt(){L.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}n(Rt,L);function Vt(){L.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}n(Vt,L),Vt.prototype.imulK=function(f){for(var a=0,c=0;c<f.length;c++){var d=(f.words[c]|0)*19+a,m=d&67108863;d>>>=26,f.words[c]=m,a=d}return a!==0&&(f.words[f.length++]=a),f},o._prime=function(f){if(H[f])return H[f];var a;if(f==="k256")a=new Pt;else if(f==="p224")a=new W;else if(f==="p192")a=new Rt;else if(f==="p25519")a=new Vt;else throw new Error("Unknown prime "+f);return H[f]=a,a};function Y(b){if(typeof b=="string"){var f=o._prime(b);this.m=f.p,this.prime=f}else i(b.gtn(1),"modulus must be greater than 1"),this.m=b,this.prime=null}Y.prototype._verify1=function(f){i(f.negative===0,"red works only with positives"),i(f.red,"red works only with red numbers")},Y.prototype._verify2=function(f,a){i((f.negative|a.negative)===0,"red works only with positives"),i(f.red&&f.red===a.red,"red works only with red numbers")},Y.prototype.imod=function(f){return this.prime?this.prime.ireduce(f)._forceRed(this):(w(f,f.umod(this.m)._forceRed(this)),f)},Y.prototype.neg=function(f){return f.isZero()?f.clone():this.m.sub(f)._forceRed(this)},Y.prototype.add=function(f,a){this._verify2(f,a);var c=f.add(a);return c.cmp(this.m)>=0&&c.isub(this.m),c._forceRed(this)},Y.prototype.iadd=function(f,a){this._verify2(f,a);var c=f.iadd(a);return c.cmp(this.m)>=0&&c.isub(this.m),c},Y.prototype.sub=function(f,a){this._verify2(f,a);var c=f.sub(a);return c.cmpn(0)<0&&c.iadd(this.m),c._forceRed(this)},Y.prototype.isub=function(f,a){this._verify2(f,a);var c=f.isub(a);return c.cmpn(0)<0&&c.iadd(this.m),c},Y.prototype.shl=function(f,a){return this._verify1(f),this.imod(f.ushln(a))},Y.prototype.imul=function(f,a){return this._verify2(f,a),this.imod(f.imul(a))},Y.prototype.mul=function(f,a){return this._verify2(f,a),this.imod(f.mul(a))},Y.prototype.isqr=function(f){return this.imul(f,f.clone())},Y.prototype.sqr=function(f){return this.mul(f,f)},Y.prototype.sqrt=function(f){if(f.isZero())return f.clone();var a=this.m.andln(3);if(i(a%2===1),a===3){var c=this.m.add(new o(1)).iushrn(2);return this.pow(f,c)}for(var d=this.m.subn(1),m=0;!d.isZero()&&d.andln(1)===0;)m++,d.iushrn(1);i(!d.isZero());var x=new o(1).toRed(this),M=x.redNeg(),l=this.m.subn(1).iushrn(1),s=this.m.bitLength();for(s=new o(2*s*s).toRed(this);this.pow(s,l).cmp(M)!==0;)s.redIAdd(M);for(var g=this.pow(s,d),k=this.pow(f,d.addn(1).iushrn(1)),u=this.pow(f,d),E=m;u.cmp(x)!==0;){for(var _=u,B=0;_.cmp(x)!==0;B++)_=_.redSqr();i(B<E);var R=this.pow(g,new o(1).iushln(E-B-1));k=k.redMul(R),g=R.redSqr(),u=u.redMul(g),E=B}return k},Y.prototype.invm=function(f){var a=f._invmp(this.m);return a.negative!==0?(a.negative=0,this.imod(a).redNeg()):this.imod(a)},Y.prototype.pow=function(f,a){if(a.isZero())return new o(1).toRed(this);if(a.cmpn(1)===0)return f.clone();var c=4,d=new Array(1<<c);d[0]=new o(1).toRed(this),d[1]=f;for(var m=2;m<d.length;m++)d[m]=this.mul(d[m-1],f);var x=d[0],M=0,l=0,s=a.bitLength()%26;for(s===0&&(s=26),m=a.length-1;m>=0;m--){for(var g=a.words[m],k=s-1;k>=0;k--){var u=g>>k&1;if(x!==d[0]&&(x=this.sqr(x)),u===0&&M===0){l=0;continue}M<<=1,M|=u,l++,!(l!==c&&(m!==0||k!==0))&&(x=this.mul(x,d[M]),l=0,M=0)}s=26}return x},Y.prototype.convertTo=function(f){var a=f.umod(this.m);return a===f?a.clone():a},Y.prototype.convertFrom=function(f){var a=f.clone();return a.red=null,a},o.mont=function(f){return new Wt(f)};function Wt(b){Y.call(this,b),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}n(Wt,Y),Wt.prototype.convertTo=function(f){return this.imod(f.ushln(this.shift))},Wt.prototype.convertFrom=function(f){var a=this.imod(f.mul(this.rinv));return a.red=null,a},Wt.prototype.imul=function(f,a){if(f.isZero()||a.isZero())return f.words[0]=0,f.length=1,f;var c=f.imul(a),d=c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),m=c.isub(d).iushrn(this.shift),x=m;return m.cmp(this.m)>=0?x=m.isub(this.m):m.cmpn(0)<0&&(x=m.iadd(this.m)),x._forceRed(this)},Wt.prototype.mul=function(f,a){if(f.isZero()||a.isZero())return new o(0)._forceRed(this);var c=f.mul(a),d=c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),m=c.isub(d).iushrn(this.shift),x=m;return m.cmp(this.m)>=0?x=m.isub(this.m):m.cmpn(0)<0&&(x=m.iadd(this.m)),x._forceRed(this)},Wt.prototype.invm=function(f){var a=this.imod(f._invmp(this.m).mul(this.r2));return a._forceRed(this)}})(e,Tn)})(Gn);var K=Gn.exports;const Yn="bignumber/5.7.0";var Fr=K.BN;const Ae=new z(Yn),Ni={},Vn=9007199254740991;function Ts(e){return e!=null&&(index_es_V.isBigNumber(e)||typeof e=="number"&&e%1===0||typeof e=="string"&&!!e.match(/^-?[0-9]+$/)||Jt(e)||typeof e=="bigint"||nr(e))}let Wn=!1;class index_es_V{constructor(t,r){t!==Ni&&Ae.throwError("cannot call constructor directly; use BigNumber.from",z.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=r,this._isBigNumber=!0,Object.freeze(this)}fromTwos(t){return zt(j(this).fromTwos(t))}toTwos(t){return zt(j(this).toTwos(t))}abs(){return this._hex[0]==="-"?index_es_V.from(this._hex.substring(1)):this}add(t){return zt(j(this).add(j(t)))}sub(t){return zt(j(this).sub(j(t)))}div(t){return index_es_V.from(t).isZero()&&Zt("division-by-zero","div"),zt(j(this).div(j(t)))}mul(t){return zt(j(this).mul(j(t)))}mod(t){const r=j(t);return r.isNeg()&&Zt("division-by-zero","mod"),zt(j(this).umod(r))}pow(t){const r=j(t);return r.isNeg()&&Zt("negative-power","pow"),zt(j(this).pow(r))}and(t){const r=j(t);return(this.isNegative()||r.isNeg())&&Zt("unbound-bitwise-result","and"),zt(j(this).and(r))}or(t){const r=j(t);return(this.isNegative()||r.isNeg())&&Zt("unbound-bitwise-result","or"),zt(j(this).or(r))}xor(t){const r=j(t);return(this.isNegative()||r.isNeg())&&Zt("unbound-bitwise-result","xor"),zt(j(this).xor(r))}mask(t){return(this.isNegative()||t<0)&&Zt("negative-width","mask"),zt(j(this).maskn(t))}shl(t){return(this.isNegative()||t<0)&&Zt("negative-width","shl"),zt(j(this).shln(t))}shr(t){return(this.isNegative()||t<0)&&Zt("negative-width","shr"),zt(j(this).shrn(t))}eq(t){return j(this).eq(j(t))}lt(t){return j(this).lt(j(t))}lte(t){return j(this).lte(j(t))}gt(t){return j(this).gt(j(t))}gte(t){return j(this).gte(j(t))}isNegative(){return this._hex[0]==="-"}isZero(){return j(this).isZero()}toNumber(){try{return j(this).toNumber()}catch{Zt("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return Ae.throwError("this platform does not support BigInt",z.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?Wn||(Wn=!0,Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):arguments[0]===16?Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",z.errors.UNEXPECTED_ARGUMENT,{}):Ae.throwError("BigNumber.toString does not accept parameters",z.errors.UNEXPECTED_ARGUMENT,{})),j(this).toString(10)}toHexString(){return this._hex}toJSON(t){return{type:"BigNumber",hex:this.toHexString()}}static from(t){if(t instanceof index_es_V)return t;if(typeof t=="string")return t.match(/^-?0x[0-9a-f]+$/i)?new index_es_V(Ni,mr(t)):t.match(/^-?[0-9]+$/)?new index_es_V(Ni,mr(new Fr(t))):Ae.throwArgumentError("invalid BigNumber string","value",t);if(typeof t=="number")return t%1&&Zt("underflow","BigNumber.from",t),(t>=Vn||t<=-Vn)&&Zt("overflow","BigNumber.from",t),index_es_V.from(String(t));const r=t;if(typeof r=="bigint")return index_es_V.from(r.toString());if(nr(r))return index_es_V.from(Kt(r));if(r)if(r.toHexString){const i=r.toHexString();if(typeof i=="string")return index_es_V.from(i)}else{let i=r._hex;if(i==null&&r.type==="BigNumber"&&(i=r.hex),typeof i=="string"&&(Jt(i)||i[0]==="-"&&Jt(i.substring(1))))return index_es_V.from(i)}return Ae.throwArgumentError("invalid BigNumber value","value",t)}static isBigNumber(t){return!!(t&&t._isBigNumber)}}function mr(e){if(typeof e!="string")return mr(e.toString(16));if(e[0]==="-")return e=e.substring(1),e[0]==="-"&&Ae.throwArgumentError("invalid hex","value",e),e=mr(e),e==="0x00"?e:"-"+e;if(e.substring(0,2)!=="0x"&&(e="0x"+e),e==="0x")return"0x00";for(e.length%2&&(e="0x0"+e.substring(2));e.length>4&&e.substring(0,4)==="0x00";)e="0x"+e.substring(4);return e}function zt(e){return index_es_V.from(mr(e))}function j(e){const t=index_es_V.from(e).toHexString();return t[0]==="-"?new Fr("-"+t.substring(3),16):new Fr(t.substring(2),16)}function Zt(e,t,r){const i={fault:e,operation:t};return r!=null&&(i.value=r),Ae.throwError(e,z.errors.NUMERIC_FAULT,i)}function Us(e){return new Fr(e,36).toString(16)}const Ht=new z(Yn),Ar={},Xn=index_es_V.from(0),Zn=index_es_V.from(-1);function $n(e,t,r,i){const n={fault:t,operation:r};return i!==void 0&&(n.value=i),Ht.throwError(e,z.errors.NUMERIC_FAULT,n)}let br="0";for(;br.length<256;)br+=br;function Ii(e){if(typeof e!="number")try{e=index_es_V.from(e).toNumber()}catch{}return typeof e=="number"&&e>=0&&e<=256&&!(e%1)?"1"+br.substring(0,e):Ht.throwArgumentError("invalid decimal size","decimals",e)}function _i(e,t){t==null&&(t=0);const r=Ii(t);e=index_es_V.from(e);const i=e.lt(Xn);i&&(e=e.mul(Zn));let n=e.mod(r).toString();for(;n.length<r.length-1;)n="0"+n;n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(r).toString();return r.length===1?e=o:e=o+"."+n,i&&(e="-"+e),e}function be(e,t){t==null&&(t=0);const r=Ii(t);(typeof e!="string"||!e.match(/^-?[0-9.]+$/))&&Ht.throwArgumentError("invalid decimal value","value",e);const i=e.substring(0,1)==="-";i&&(e=e.substring(1)),e==="."&&Ht.throwArgumentError("missing value","value",e);const n=e.split(".");n.length>2&&Ht.throwArgumentError("too many decimal points","value",e);let o=n[0],h=n[1];for(o||(o="0"),h||(h="0");h[h.length-1]==="0";)h=h.substring(0,h.length-1);for(h.length>r.length-1&&$n("fractional component exceeds decimals","underflow","parseFixed"),h===""&&(h="0");h.length<r.length-1;)h+="0";const p=index_es_V.from(o),A=index_es_V.from(h);let v=p.mul(r).add(A);return i&&(v=v.mul(Zn)),v}class vr{constructor(t,r,i,n){t!==Ar&&Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from",z.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=i,this.decimals=n,this.name=(r?"":"u")+"fixed"+String(i)+"x"+String(n),this._multiplier=Ii(n),Object.freeze(this)}static from(t){if(t instanceof vr)return t;typeof t=="number"&&(t=`fixed128x${t}`);let r=!0,i=128,n=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")r=!1;else{const o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||Ht.throwArgumentError("invalid fixed format","format",t),r=o[1]!=="u",i=parseInt(o[2]),n=parseInt(o[3])}}else if(t){const o=(h,p,A)=>t[h]==null?A:(typeof t[h]!==p&&Ht.throwArgumentError("invalid fixed format ("+h+" not "+p+")","format."+h,t[h]),t[h]);r=o("signed","boolean",r),i=o("width","number",i),n=o("decimals","number",n)}return i%8&&Ht.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",i),n>80&&Ht.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new vr(Ar,r,i,n)}}class Ut{constructor(t,r,i,n){t!==Ar&&Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from",z.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=r,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.add(i),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.sub(i),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.mul(i).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.mul(this.format._multiplier).div(i),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=Ut.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return this.isNegative()&&i&&(r=r.subUnsafe(tf.toFormat(r.format))),r}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=Ut.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return!this.isNegative()&&i&&(r=r.addUnsafe(tf.toFormat(r.format))),r}round(t){t==null&&(t=0);const r=this.toString().split(".");if(r.length===1&&r.push("0"),(t<0||t>80||t%1)&&Ht.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const i=Ut.from("1"+br.substring(0,t),this.format),n=ks.toFormat(this.format);return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&Ht.throwArgumentError("invalid byte width","width",t);const r=index_es_V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return oe(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return Ut.fromString(this._value,t)}static fromValue(t,r,i){return i==null&&r!=null&&!Ts(r)&&(i=r,r=null),r==null&&(r=0),i==null&&(i="fixed"),Ut.fromString(_i(t,r),vr.from(i))}static fromString(t,r){r==null&&(r="fixed");const i=vr.from(r),n=be(t,i.decimals);!i.signed&&n.lt(Xn)&&$n("unsigned value cannot be negative","overflow","value",t);let o=null;i.signed?o=n.toTwos(i.width).toHexString():(o=n.toHexString(),o=oe(o,i.width/8));const h=_i(n,i.decimals);return new Ut(Ar,o,h,i)}static fromBytes(t,r){r==null&&(r="fixed");const i=vr.from(r);if(Ot(t).length>i.width/8)throw new Error("overflow");let n=index_es_V.from(t);i.signed&&(n=n.fromTwos(i.width));const o=n.toTwos((i.signed?0:1)+i.width).toHexString(),h=_i(n,i.decimals);return new Ut(Ar,o,h,i)}static from(t,r){if(typeof t=="string")return Ut.fromString(t,r);if(nr(t))return Ut.fromBytes(t,r);try{return Ut.fromValue(t,0,r)}catch(i){if(i.code!==z.errors.INVALID_ARGUMENT)throw i}return Ht.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}const tf=Ut.from(1),ks=Ut.from("0.5"),qs="strings/5.7.0",ef=new z(qs);var Tr;(function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD"})(Tr||(Tr={}));var fr;(function(e){e.UNEXPECTED_CONTINUE="unexpected continuation byte",e.BAD_PREFIX="bad codepoint prefix",e.OVERRUN="string overrun",e.MISSING_CONTINUE="missing continuation byte",e.OUT_OF_RANGE="out of UTF-8 range",e.UTF16_SURROGATE="UTF-16 surrogate",e.OVERLONG="overlong representation"})(fr||(fr={}));function Ks(e,t,r,i,n){return ef.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`,"bytes",r)}function rf(e,t,r,i,n){if(e===fr.BAD_PREFIX||e===fr.UNEXPECTED_CONTINUE){let o=0;for(let h=t+1;h<r.length&&r[h]>>6===2;h++)o++;return o}return e===fr.OVERRUN?r.length-t-1:0}function Hs(e,t,r,i,n){return e===fr.OVERLONG?(i.push(n),0):(i.push(65533),rf(e,t,r))}Object.freeze({error:Ks,ignore:rf,replace:Hs});function Bi(e,t=Tr.current){t!=Tr.current&&(ef.checkNormalize(),e=e.normalize(t));let r=[];for(let i=0;i<e.length;i++){const n=e.charCodeAt(i);if(n<128)r.push(n);else if(n<2048)r.push(n>>6|192),r.push(n&63|128);else if((n&64512)==55296){i++;const o=e.charCodeAt(i);if(i>=e.length||(o&64512)!==56320)throw new Error("invalid utf-8 string");const h=65536+((n&1023)<<10)+(o&1023);r.push(h>>18|240),r.push(h>>12&63|128),r.push(h>>6&63|128),r.push(h&63|128)}else r.push(n>>12|224),r.push(n>>6&63|128),r.push(n&63|128)}return Ot(r)}function Ls(e){if(e.length%4!==0)throw new Error("bad data");let t=[];for(let r=0;r<e.length;r+=4)t.push(parseInt(e.substring(r,r+4),16));return t}function Ci(e,t){t||(t=function(n){return[parseInt(n,16)]});let r=0,i={};return e.split(",").forEach(n=>{let o=n.split(":");r+=parseInt(o[0],16),i[r]=t(o[1])}),i}function nf(e){let t=0;return e.split(",").map(r=>{let i=r.split("-");i.length===1?i[1]="0":i[1]===""&&(i[1]="1");let n=t+parseInt(i[0],16);return t=parseInt(i[1],16),{l:n,h:t}})}nf("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(e=>parseInt(e,16)),Ci("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),Ci("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),Ci("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",Ls),nf("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");const ff="hash/5.7.0";function zs(e){e=atob(e);const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return Ot(t)}function of(e,t){t==null&&(t=1);const r=[],i=r.forEach,n=function(o,h){i.call(o,function(p){h>0&&Array.isArray(p)?n(p,h-1):r.push(p)})};return n(e,t),r}function js(e){const t={};for(let r=0;r<e.length;r++){const i=e[r];t[i[0]]=i[1]}return t}function Qs(e){let t=0;function r(){return e[t++]<<8|e[t++]}let i=r(),n=1,o=[0,1];for(let H=1;H<i;H++)o.push(n+=r());let h=r(),p=t;t+=h;let A=0,v=0;function w(){return A==0&&(v=v<<8|e[t++],A=8),v>>--A&1}const y=31,S=Math.pow(2,y),I=S>>>1,N=I>>1,C=S-1;let F=0;for(let H=0;H<y;H++)F=F<<1|w();let U=[],J=0,Bt=S;for(;;){let H=Math.floor(((F-J+1)*n-1)/Bt),L=0,Pt=i;for(;Pt-L>1;){let Vt=L+Pt>>>1;H<o[Vt]?Pt=Vt:L=Vt}if(L==0)break;U.push(L);let W=J+Math.floor(Bt*o[L]/n),Rt=J+Math.floor(Bt*o[L+1]/n)-1;for(;!((W^Rt)&I);)F=F<<1&C|w(),W=W<<1&C,Rt=Rt<<1&C|1;for(;W&~Rt&N;)F=F&I|F<<1&C>>>1|w(),W=W<<1^I,Rt=(Rt^I)<<1|I|1;J=W,Bt=1+Rt-W}let G=i-4;return U.map(H=>{switch(H-G){case 3:return G+65792+(e[p++]<<16|e[p++]<<8|e[p++]);case 2:return G+256+(e[p++]<<8|e[p++]);case 1:return G+e[p++];default:return H-1}})}function Js(e){let t=0;return()=>e[t++]}function Gs(e){return Js(Qs(e))}function Ys(e){return e&1?~e>>1:e>>1}function Vs(e,t){let r=Array(e);for(let i=0;i<e;i++)r[i]=1+t();return r}function sf(e,t){let r=Array(e);for(let i=0,n=-1;i<e;i++)r[i]=n+=1+t();return r}function Ws(e,t){let r=Array(e);for(let i=0,n=0;i<e;i++)r[i]=n+=Ys(t());return r}function Ur(e,t){let r=sf(e(),e),i=e(),n=sf(i,e),o=Vs(i,e);for(let h=0;h<i;h++)for(let p=0;p<o[h];p++)r.push(n[h]+p);return t?r.map(h=>t[h]):r}function Xs(e){let t=[];for(;;){let r=e();if(r==0)break;t.push($s(r,e))}for(;;){let r=e()-1;if(r<0)break;t.push(t0(r,e))}return js(of(t))}function Zs(e){let t=[];for(;;){let r=e();if(r==0)break;t.push(r)}return t}function af(e,t,r){let i=Array(e).fill(void 0).map(()=>[]);for(let n=0;n<t;n++)Ws(e,r).forEach((o,h)=>i[h].push(o));return i}function $s(e,t){let r=1+t(),i=t(),n=Zs(t),o=af(n.length,1+e,t);return of(o.map((h,p)=>{const A=h[0],v=h.slice(1);return Array(n[p]).fill(void 0).map((w,y)=>{let S=y*i;return[A+y*r,v.map(I=>I+S)]})}))}function t0(e,t){let r=1+t();return af(r,1+e,t).map(n=>[n[0],n.slice(1)])}function e0(e){let t=Ur(e).sort((i,n)=>i-n);return r();function r(){let i=[];for(;;){let v=Ur(e,t);if(v.length==0)break;i.push({set:new Set(v),node:r()})}i.sort((v,w)=>w.set.size-v.set.size);let n=e(),o=n%3;n=n/3|0;let h=!!(n&1);n>>=1;let p=n==1,A=n==2;return{branches:i,valid:o,fe0f:h,save:p,check:A}}}function r0(){return Gs(zs("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))}const kr=r0();new Set(Ur(kr)),new Set(Ur(kr)),Xs(kr),e0(kr),new z(ff);const i0=new Uint8Array(32);i0.fill(0);const n0=`Ethereum Signed Message:
`;function uf(e){return typeof e=="string"&&(e=Bi(e)),Si(Cs([Bi(n0),Bi(String(e.length)),e]))}const f0="rlp/5.7.0";new z(f0);const o0="address/5.7.0",yr=new z(o0);function hf(e){Jt(e,20)||yr.throwArgumentError("invalid address","address",e),e=e.toLowerCase();const t=e.substring(2).split(""),r=new Uint8Array(40);for(let n=0;n<40;n++)r[n]=t[n].charCodeAt(0);const i=Ot(Si(r));for(let n=0;n<40;n+=2)i[n>>1]>>4>=8&&(t[n]=t[n].toUpperCase()),(i[n>>1]&15)>=8&&(t[n+1]=t[n+1].toUpperCase());return"0x"+t.join("")}const s0=9007199254740991;function a0(e){return Math.log10?Math.log10(e):Math.log(e)/Math.LN10}const Ri={};for(let e=0;e<10;e++)Ri[String(e)]=String(e);for(let e=0;e<26;e++)Ri[String.fromCharCode(65+e)]=String(10+e);const cf=Math.floor(a0(s0));function u0(e){e=e.toUpperCase(),e=e.substring(4)+e.substring(0,2)+"00";let t=e.split("").map(i=>Ri[i]).join("");for(;t.length>=cf;){let i=t.substring(0,cf);t=parseInt(i,10)%97+t.substring(i.length)}let r=String(98-parseInt(t,10)%97);for(;r.length<2;)r="0"+r;return r}function h0(e){let t=null;if(typeof e!="string"&&yr.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))e.substring(0,2)!=="0x"&&(e="0x"+e),t=hf(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&yr.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==u0(e)&&yr.throwArgumentError("bad icap checksum","address",e),t=Us(e.substring(4));t.length<40;)t="0"+t;t=hf("0x"+t)}else yr.throwArgumentError("invalid address","address",e);return t}const c0="properties/5.7.0";new z(c0);function wr(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1})}new z(ff);const l0=new Uint8Array(32);l0.fill(0),index_es_V.from(-1);const d0=index_es_V.from(0),p0=index_es_V.from(1);index_es_V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),oe(p0.toHexString(),32),oe(d0.toHexString(),32);var se={},Q={},xr=lf;function lf(e,t){if(!e)throw new Error(t||"Assertion failed")}lf.equal=function(t,r,i){if(t!=r)throw new Error(i||"Assertion failed: "+t+" != "+r)};var Oi={exports:{}};typeof Object.create=="function"?Oi.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:Oi.exports=function(t,r){if(r){t.super_=r;var i=function(){};i.prototype=r.prototype,t.prototype=new i,t.prototype.constructor=t}};var v0=xr,g0=Oi.exports;Q.inherits=g0;function m0(e,t){return(e.charCodeAt(t)&64512)!==55296||t<0||t+1>=e.length?!1:(e.charCodeAt(t+1)&64512)===56320}function A0(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if(typeof e=="string")if(t){if(t==="hex")for(e=e.replace(/[^a-z0-9]+/ig,""),e.length%2!==0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var i=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?r[i++]=o:o<2048?(r[i++]=o>>6|192,r[i++]=o&63|128):m0(e,n)?(o=65536+((o&1023)<<10)+(e.charCodeAt(++n)&1023),r[i++]=o>>18|240,r[i++]=o>>12&63|128,r[i++]=o>>6&63|128,r[i++]=o&63|128):(r[i++]=o>>12|224,r[i++]=o>>6&63|128,r[i++]=o&63|128)}else for(n=0;n<e.length;n++)r[n]=e[n]|0;return r}Q.toArray=A0;function b0(e){for(var t="",r=0;r<e.length;r++)t+=pf(e[r].toString(16));return t}Q.toHex=b0;function df(e){var t=e>>>24|e>>>8&65280|e<<8&16711680|(e&255)<<24;return t>>>0}Q.htonl=df;function y0(e,t){for(var r="",i=0;i<e.length;i++){var n=e[i];t==="little"&&(n=df(n)),r+=vf(n.toString(16))}return r}Q.toHex32=y0;function pf(e){return e.length===1?"0"+e:e}Q.zero2=pf;function vf(e){return e.length===7?"0"+e:e.length===6?"00"+e:e.length===5?"000"+e:e.length===4?"0000"+e:e.length===3?"00000"+e:e.length===2?"000000"+e:e.length===1?"0000000"+e:e}Q.zero8=vf;function w0(e,t,r,i){var n=r-t;v0(n%4===0);for(var o=new Array(n/4),h=0,p=t;h<o.length;h++,p+=4){var A;i==="big"?A=e[p]<<24|e[p+1]<<16|e[p+2]<<8|e[p+3]:A=e[p+3]<<24|e[p+2]<<16|e[p+1]<<8|e[p],o[h]=A>>>0}return o}Q.join32=w0;function x0(e,t){for(var r=new Array(e.length*4),i=0,n=0;i<e.length;i++,n+=4){var o=e[i];t==="big"?(r[n]=o>>>24,r[n+1]=o>>>16&255,r[n+2]=o>>>8&255,r[n+3]=o&255):(r[n+3]=o>>>24,r[n+2]=o>>>16&255,r[n+1]=o>>>8&255,r[n]=o&255)}return r}Q.split32=x0;function M0(e,t){return e>>>t|e<<32-t}Q.rotr32=M0;function E0(e,t){return e<<t|e>>>32-t}Q.rotl32=E0;function S0(e,t){return e+t>>>0}Q.sum32=S0;function N0(e,t,r){return e+t+r>>>0}Q.sum32_3=N0;function I0(e,t,r,i){return e+t+r+i>>>0}Q.sum32_4=I0;function _0(e,t,r,i,n){return e+t+r+i+n>>>0}Q.sum32_5=_0;function B0(e,t,r,i){var n=e[t],o=e[t+1],h=i+o>>>0,p=(h<i?1:0)+r+n;e[t]=p>>>0,e[t+1]=h}Q.sum64=B0;function C0(e,t,r,i){var n=t+i>>>0,o=(n<t?1:0)+e+r;return o>>>0}Q.sum64_hi=C0;function R0(e,t,r,i){var n=t+i;return n>>>0}Q.sum64_lo=R0;function O0(e,t,r,i,n,o,h,p){var A=0,v=t;v=v+i>>>0,A+=v<t?1:0,v=v+o>>>0,A+=v<o?1:0,v=v+p>>>0,A+=v<p?1:0;var w=e+r+n+h+A;return w>>>0}Q.sum64_4_hi=O0;function P0(e,t,r,i,n,o,h,p){var A=t+i+o+p;return A>>>0}Q.sum64_4_lo=P0;function D0(e,t,r,i,n,o,h,p,A,v){var w=0,y=t;y=y+i>>>0,w+=y<t?1:0,y=y+o>>>0,w+=y<o?1:0,y=y+p>>>0,w+=y<p?1:0,y=y+v>>>0,w+=y<v?1:0;var S=e+r+n+h+A+w;return S>>>0}Q.sum64_5_hi=D0;function F0(e,t,r,i,n,o,h,p,A,v){var w=t+i+o+p+v;return w>>>0}Q.sum64_5_lo=F0;function T0(e,t,r){var i=t<<32-r|e>>>r;return i>>>0}Q.rotr64_hi=T0;function U0(e,t,r){var i=e<<32-r|t>>>r;return i>>>0}Q.rotr64_lo=U0;function k0(e,t,r){return e>>>r}Q.shr64_hi=k0;function q0(e,t,r){var i=e<<32-r|t>>>r;return i>>>0}Q.shr64_lo=q0;var or={},gf=Q,K0=xr;function qr(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}or.BlockHash=qr,qr.prototype.update=function(t,r){if(t=gf.toArray(t,r),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){t=this.pending;var i=t.length%this._delta8;this.pending=t.slice(t.length-i,t.length),this.pending.length===0&&(this.pending=null),t=gf.join32(t,0,t.length-i,this.endian);for(var n=0;n<t.length;n+=this._delta32)this._update(t,n,n+this._delta32)}return this},qr.prototype.digest=function(t){return this.update(this._pad()),K0(this.pending===null),this._digest(t)},qr.prototype._pad=function(){var t=this.pendingTotal,r=this._delta8,i=r-(t+this.padLength)%r,n=new Array(i+this.padLength);n[0]=128;for(var o=1;o<i;o++)n[o]=0;if(t<<=3,this.endian==="big"){for(var h=8;h<this.padLength;h++)n[o++]=0;n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=t>>>24&255,n[o++]=t>>>16&255,n[o++]=t>>>8&255,n[o++]=t&255}else for(n[o++]=t&255,n[o++]=t>>>8&255,n[o++]=t>>>16&255,n[o++]=t>>>24&255,n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=0,h=8;h<this.padLength;h++)n[o++]=0;return n};var sr={},ae={},H0=Q,ue=H0.rotr32;function L0(e,t,r,i){if(e===0)return mf(t,r,i);if(e===1||e===3)return bf(t,r,i);if(e===2)return Af(t,r,i)}ae.ft_1=L0;function mf(e,t,r){return e&t^~e&r}ae.ch32=mf;function Af(e,t,r){return e&t^e&r^t&r}ae.maj32=Af;function bf(e,t,r){return e^t^r}ae.p32=bf;function z0(e){return ue(e,2)^ue(e,13)^ue(e,22)}ae.s0_256=z0;function j0(e){return ue(e,6)^ue(e,11)^ue(e,25)}ae.s1_256=j0;function Q0(e){return ue(e,7)^ue(e,18)^e>>>3}ae.g0_256=Q0;function J0(e){return ue(e,17)^ue(e,19)^e>>>10}ae.g1_256=J0;var ar=Q,G0=or,Y0=ae,Pi=ar.rotl32,Mr=ar.sum32,V0=ar.sum32_5,W0=Y0.ft_1,yf=G0.BlockHash,X0=[1518500249,1859775393,2400959708,3395469782];function he(){if(!(this instanceof he))return new he;yf.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}ar.inherits(he,yf);var Z0=he;he.blockSize=512,he.outSize=160,he.hmacStrength=80,he.padLength=64,he.prototype._update=function(t,r){for(var i=this.W,n=0;n<16;n++)i[n]=t[r+n];for(;n<i.length;n++)i[n]=Pi(i[n-3]^i[n-8]^i[n-14]^i[n-16],1);var o=this.h[0],h=this.h[1],p=this.h[2],A=this.h[3],v=this.h[4];for(n=0;n<i.length;n++){var w=~~(n/20),y=V0(Pi(o,5),W0(w,h,p,A),v,i[n],X0[w]);v=A,A=p,p=Pi(h,30),h=o,o=y}this.h[0]=Mr(this.h[0],o),this.h[1]=Mr(this.h[1],h),this.h[2]=Mr(this.h[2],p),this.h[3]=Mr(this.h[3],A),this.h[4]=Mr(this.h[4],v)},he.prototype._digest=function(t){return t==="hex"?ar.toHex32(this.h,"big"):ar.split32(this.h,"big")};var ur=Q,$0=or,hr=ae,ta=xr,ie=ur.sum32,ea=ur.sum32_4,ra=ur.sum32_5,ia=hr.ch32,na=hr.maj32,fa=hr.s0_256,oa=hr.s1_256,sa=hr.g0_256,aa=hr.g1_256,wf=$0.BlockHash,ua=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ce(){if(!(this instanceof ce))return new ce;wf.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=ua,this.W=new Array(64)}ur.inherits(ce,wf);var xf=ce;ce.blockSize=512,ce.outSize=256,ce.hmacStrength=192,ce.padLength=64,ce.prototype._update=function(t,r){for(var i=this.W,n=0;n<16;n++)i[n]=t[r+n];for(;n<i.length;n++)i[n]=ea(aa(i[n-2]),i[n-7],sa(i[n-15]),i[n-16]);var o=this.h[0],h=this.h[1],p=this.h[2],A=this.h[3],v=this.h[4],w=this.h[5],y=this.h[6],S=this.h[7];for(ta(this.k.length===i.length),n=0;n<i.length;n++){var I=ra(S,oa(v),ia(v,w,y),this.k[n],i[n]),N=ie(fa(o),na(o,h,p));S=y,y=w,w=v,v=ie(A,I),A=p,p=h,h=o,o=ie(I,N)}this.h[0]=ie(this.h[0],o),this.h[1]=ie(this.h[1],h),this.h[2]=ie(this.h[2],p),this.h[3]=ie(this.h[3],A),this.h[4]=ie(this.h[4],v),this.h[5]=ie(this.h[5],w),this.h[6]=ie(this.h[6],y),this.h[7]=ie(this.h[7],S)},ce.prototype._digest=function(t){return t==="hex"?ur.toHex32(this.h,"big"):ur.split32(this.h,"big")};var Di=Q,Mf=xf;function ye(){if(!(this instanceof ye))return new ye;Mf.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}Di.inherits(ye,Mf);var ha=ye;ye.blockSize=512,ye.outSize=224,ye.hmacStrength=192,ye.padLength=64,ye.prototype._digest=function(t){return t==="hex"?Di.toHex32(this.h.slice(0,7),"big"):Di.split32(this.h.slice(0,7),"big")};var jt=Q,ca=or,la=xr,le=jt.rotr64_hi,de=jt.rotr64_lo,Ef=jt.shr64_hi,Sf=jt.shr64_lo,Be=jt.sum64,Fi=jt.sum64_hi,Ti=jt.sum64_lo,da=jt.sum64_4_hi,pa=jt.sum64_4_lo,va=jt.sum64_5_hi,ga=jt.sum64_5_lo,Nf=ca.BlockHash,ma=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function ne(){if(!(this instanceof ne))return new ne;Nf.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=ma,this.W=new Array(160)}jt.inherits(ne,Nf);var If=ne;ne.blockSize=1024,ne.outSize=512,ne.hmacStrength=192,ne.padLength=128,ne.prototype._prepareBlock=function(t,r){for(var i=this.W,n=0;n<32;n++)i[n]=t[r+n];for(;n<i.length;n+=2){var o=_a(i[n-4],i[n-3]),h=Ba(i[n-4],i[n-3]),p=i[n-14],A=i[n-13],v=Na(i[n-30],i[n-29]),w=Ia(i[n-30],i[n-29]),y=i[n-32],S=i[n-31];i[n]=da(o,h,p,A,v,w,y,S),i[n+1]=pa(o,h,p,A,v,w,y,S)}},ne.prototype._update=function(t,r){this._prepareBlock(t,r);var i=this.W,n=this.h[0],o=this.h[1],h=this.h[2],p=this.h[3],A=this.h[4],v=this.h[5],w=this.h[6],y=this.h[7],S=this.h[8],I=this.h[9],N=this.h[10],C=this.h[11],F=this.h[12],U=this.h[13],J=this.h[14],Bt=this.h[15];la(this.k.length===i.length);for(var G=0;G<i.length;G+=2){var H=J,L=Bt,Pt=Ea(S,I),W=Sa(S,I),Rt=Aa(S,I,N,C,F),Vt=ba(S,I,N,C,F,U),Y=this.k[G],Wt=this.k[G+1],b=i[G],f=i[G+1],a=va(H,L,Pt,W,Rt,Vt,Y,Wt,b,f),c=ga(H,L,Pt,W,Rt,Vt,Y,Wt,b,f);H=xa(n,o),L=Ma(n,o),Pt=ya(n,o,h,p,A),W=wa(n,o,h,p,A,v);var d=Fi(H,L,Pt,W),m=Ti(H,L,Pt,W);J=F,Bt=U,F=N,U=C,N=S,C=I,S=Fi(w,y,a,c),I=Ti(y,y,a,c),w=A,y=v,A=h,v=p,h=n,p=o,n=Fi(a,c,d,m),o=Ti(a,c,d,m)}Be(this.h,0,n,o),Be(this.h,2,h,p),Be(this.h,4,A,v),Be(this.h,6,w,y),Be(this.h,8,S,I),Be(this.h,10,N,C),Be(this.h,12,F,U),Be(this.h,14,J,Bt)},ne.prototype._digest=function(t){return t==="hex"?jt.toHex32(this.h,"big"):jt.split32(this.h,"big")};function Aa(e,t,r,i,n){var o=e&r^~e&n;return o<0&&(o+=4294967296),o}function ba(e,t,r,i,n,o){var h=t&i^~t&o;return h<0&&(h+=4294967296),h}function ya(e,t,r,i,n){var o=e&r^e&n^r&n;return o<0&&(o+=4294967296),o}function wa(e,t,r,i,n,o){var h=t&i^t&o^i&o;return h<0&&(h+=4294967296),h}function xa(e,t){var r=le(e,t,28),i=le(t,e,2),n=le(t,e,7),o=r^i^n;return o<0&&(o+=4294967296),o}function Ma(e,t){var r=de(e,t,28),i=de(t,e,2),n=de(t,e,7),o=r^i^n;return o<0&&(o+=4294967296),o}function Ea(e,t){var r=le(e,t,14),i=le(e,t,18),n=le(t,e,9),o=r^i^n;return o<0&&(o+=4294967296),o}function Sa(e,t){var r=de(e,t,14),i=de(e,t,18),n=de(t,e,9),o=r^i^n;return o<0&&(o+=4294967296),o}function Na(e,t){var r=le(e,t,1),i=le(e,t,8),n=Ef(e,t,7),o=r^i^n;return o<0&&(o+=4294967296),o}function Ia(e,t){var r=de(e,t,1),i=de(e,t,8),n=Sf(e,t,7),o=r^i^n;return o<0&&(o+=4294967296),o}function _a(e,t){var r=le(e,t,19),i=le(t,e,29),n=Ef(e,t,6),o=r^i^n;return o<0&&(o+=4294967296),o}function Ba(e,t){var r=de(e,t,19),i=de(t,e,29),n=Sf(e,t,6),o=r^i^n;return o<0&&(o+=4294967296),o}var Ui=Q,_f=If;function we(){if(!(this instanceof we))return new we;_f.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}Ui.inherits(we,_f);var Ca=we;we.blockSize=1024,we.outSize=384,we.hmacStrength=192,we.padLength=128,we.prototype._digest=function(t){return t==="hex"?Ui.toHex32(this.h.slice(0,12),"big"):Ui.split32(this.h.slice(0,12),"big")},sr.sha1=Z0,sr.sha224=ha,sr.sha256=xf,sr.sha384=Ca,sr.sha512=If;var Bf={},Xe=Q,Ra=or,Kr=Xe.rotl32,Cf=Xe.sum32,Er=Xe.sum32_3,Rf=Xe.sum32_4,Of=Ra.BlockHash;function pe(){if(!(this instanceof pe))return new pe;Of.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}Xe.inherits(pe,Of),Bf.ripemd160=pe,pe.blockSize=512,pe.outSize=160,pe.hmacStrength=192,pe.padLength=64,pe.prototype._update=function(t,r){for(var i=this.h[0],n=this.h[1],o=this.h[2],h=this.h[3],p=this.h[4],A=i,v=n,w=o,y=h,S=p,I=0;I<80;I++){var N=Cf(Kr(Rf(i,Pf(I,n,o,h),t[Da[I]+r],Oa(I)),Ta[I]),p);i=p,p=h,h=Kr(o,10),o=n,n=N,N=Cf(Kr(Rf(A,Pf(79-I,v,w,y),t[Fa[I]+r],Pa(I)),Ua[I]),S),A=S,S=y,y=Kr(w,10),w=v,v=N}N=Er(this.h[1],o,y),this.h[1]=Er(this.h[2],h,S),this.h[2]=Er(this.h[3],p,A),this.h[3]=Er(this.h[4],i,v),this.h[4]=Er(this.h[0],n,w),this.h[0]=N},pe.prototype._digest=function(t){return t==="hex"?Xe.toHex32(this.h,"little"):Xe.split32(this.h,"little")};function Pf(e,t,r,i){return e<=15?t^r^i:e<=31?t&r|~t&i:e<=47?(t|~r)^i:e<=63?t&i|r&~i:t^(r|~i)}function Oa(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function Pa(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var Da=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],Fa=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],Ta=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],Ua=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],ka=Q,qa=xr;function cr(e,t,r){if(!(this instanceof cr))return new cr(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(ka.toArray(t,r))}var Ka=cr;cr.prototype._init=function(t){t.length>this.blockSize&&(t=new this.Hash().update(t).digest()),qa(t.length<=this.blockSize);for(var r=t.length;r<this.blockSize;r++)t.push(0);for(r=0;r<t.length;r++)t[r]^=54;for(this.inner=new this.Hash().update(t),r=0;r<t.length;r++)t[r]^=106;this.outer=new this.Hash().update(t)},cr.prototype.update=function(t,r){return this.inner.update(t,r),this},cr.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)},function(e){var t=e;t.utils=Q,t.common=or,t.sha=sr,t.ripemd=Bf,t.hmac=Ka,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}(se);function lr(e,t,r){return r={path:t,exports:{},require:function(i,n){return Ha(i,n??r.path)}},e(r,r.exports),r.exports}function Ha(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var ki=Df;function Df(e,t){if(!e)throw new Error(t||"Assertion failed")}Df.equal=function(t,r,i){if(t!=r)throw new Error(i||"Assertion failed: "+t+" != "+r)};var fe=lr(function(e,t){var r=t;function i(h,p){if(Array.isArray(h))return h.slice();if(!h)return[];var A=[];if(typeof h!="string"){for(var v=0;v<h.length;v++)A[v]=h[v]|0;return A}if(p==="hex"){h=h.replace(/[^a-z0-9]+/ig,""),h.length%2!==0&&(h="0"+h);for(var v=0;v<h.length;v+=2)A.push(parseInt(h[v]+h[v+1],16))}else for(var v=0;v<h.length;v++){var w=h.charCodeAt(v),y=w>>8,S=w&255;y?A.push(y,S):A.push(S)}return A}r.toArray=i;function n(h){return h.length===1?"0"+h:h}r.zero2=n;function o(h){for(var p="",A=0;A<h.length;A++)p+=n(h[A].toString(16));return p}r.toHex=o,r.encode=function(p,A){return A==="hex"?o(p):p}}),Gt=lr(function(e,t){var r=t;r.assert=ki,r.toArray=fe.toArray,r.zero2=fe.zero2,r.toHex=fe.toHex,r.encode=fe.encode;function i(A,v,w){var y=new Array(Math.max(A.bitLength(),w)+1);y.fill(0);for(var S=1<<v+1,I=A.clone(),N=0;N<y.length;N++){var C,F=I.andln(S-1);I.isOdd()?(F>(S>>1)-1?C=(S>>1)-F:C=F,I.isubn(C)):C=0,y[N]=C,I.iushrn(1)}return y}r.getNAF=i;function n(A,v){var w=[[],[]];A=A.clone(),v=v.clone();for(var y=0,S=0,I;A.cmpn(-y)>0||v.cmpn(-S)>0;){var N=A.andln(3)+y&3,C=v.andln(3)+S&3;N===3&&(N=-1),C===3&&(C=-1);var F;N&1?(I=A.andln(7)+y&7,(I===3||I===5)&&C===2?F=-N:F=N):F=0,w[0].push(F);var U;C&1?(I=v.andln(7)+S&7,(I===3||I===5)&&N===2?U=-C:U=C):U=0,w[1].push(U),2*y===F+1&&(y=1-y),2*S===U+1&&(S=1-S),A.iushrn(1),v.iushrn(1)}return w}r.getJSF=n;function o(A,v,w){var y="_"+v;A.prototype[v]=function(){return this[y]!==void 0?this[y]:this[y]=w.call(this)}}r.cachedProperty=o;function h(A){return typeof A=="string"?r.toArray(A,"hex"):A}r.parseBytes=h;function p(A){return new K(A,"hex","le")}r.intFromLE=p}),Hr=Gt.getNAF,La=Gt.getJSF,Lr=Gt.assert;function Ce(e,t){this.type=e,this.p=new K(t.p,16),this.red=t.prime?K.red(t.prime):K.mont(this.p),this.zero=new K(0).toRed(this.red),this.one=new K(1).toRed(this.red),this.two=new K(2).toRed(this.red),this.n=t.n&&new K(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var Ze=Ce;Ce.prototype.point=function(){throw new Error("Not implemented")},Ce.prototype.validate=function(){throw new Error("Not implemented")},Ce.prototype._fixedNafMul=function(t,r){Lr(t.precomputed);var i=t._getDoubles(),n=Hr(r,1,this._bitLength),o=(1<<i.step+1)-(i.step%2===0?2:1);o/=3;var h=[],p,A;for(p=0;p<n.length;p+=i.step){A=0;for(var v=p+i.step-1;v>=p;v--)A=(A<<1)+n[v];h.push(A)}for(var w=this.jpoint(null,null,null),y=this.jpoint(null,null,null),S=o;S>0;S--){for(p=0;p<h.length;p++)A=h[p],A===S?y=y.mixedAdd(i.points[p]):A===-S&&(y=y.mixedAdd(i.points[p].neg()));w=w.add(y)}return w.toP()},Ce.prototype._wnafMul=function(t,r){var i=4,n=t._getNAFPoints(i);i=n.wnd;for(var o=n.points,h=Hr(r,i,this._bitLength),p=this.jpoint(null,null,null),A=h.length-1;A>=0;A--){for(var v=0;A>=0&&h[A]===0;A--)v++;if(A>=0&&v++,p=p.dblp(v),A<0)break;var w=h[A];Lr(w!==0),t.type==="affine"?w>0?p=p.mixedAdd(o[w-1>>1]):p=p.mixedAdd(o[-w-1>>1].neg()):w>0?p=p.add(o[w-1>>1]):p=p.add(o[-w-1>>1].neg())}return t.type==="affine"?p.toP():p},Ce.prototype._wnafMulAdd=function(t,r,i,n,o){var h=this._wnafT1,p=this._wnafT2,A=this._wnafT3,v=0,w,y,S;for(w=0;w<n;w++){S=r[w];var I=S._getNAFPoints(t);h[w]=I.wnd,p[w]=I.points}for(w=n-1;w>=1;w-=2){var N=w-1,C=w;if(h[N]!==1||h[C]!==1){A[N]=Hr(i[N],h[N],this._bitLength),A[C]=Hr(i[C],h[C],this._bitLength),v=Math.max(A[N].length,v),v=Math.max(A[C].length,v);continue}var F=[r[N],null,null,r[C]];r[N].y.cmp(r[C].y)===0?(F[1]=r[N].add(r[C]),F[2]=r[N].toJ().mixedAdd(r[C].neg())):r[N].y.cmp(r[C].y.redNeg())===0?(F[1]=r[N].toJ().mixedAdd(r[C]),F[2]=r[N].add(r[C].neg())):(F[1]=r[N].toJ().mixedAdd(r[C]),F[2]=r[N].toJ().mixedAdd(r[C].neg()));var U=[-3,-1,-5,-7,0,7,5,1,3],J=La(i[N],i[C]);for(v=Math.max(J[0].length,v),A[N]=new Array(v),A[C]=new Array(v),y=0;y<v;y++){var Bt=J[0][y]|0,G=J[1][y]|0;A[N][y]=U[(Bt+1)*3+(G+1)],A[C][y]=0,p[N]=F}}var H=this.jpoint(null,null,null),L=this._wnafT4;for(w=v;w>=0;w--){for(var Pt=0;w>=0;){var W=!0;for(y=0;y<n;y++)L[y]=A[y][w]|0,L[y]!==0&&(W=!1);if(!W)break;Pt++,w--}if(w>=0&&Pt++,H=H.dblp(Pt),w<0)break;for(y=0;y<n;y++){var Rt=L[y];Rt!==0&&(Rt>0?S=p[y][Rt-1>>1]:Rt<0&&(S=p[y][-Rt-1>>1].neg()),S.type==="affine"?H=H.mixedAdd(S):H=H.add(S))}}for(w=0;w<n;w++)p[w]=null;return o?H:H.toP()};function $t(e,t){this.curve=e,this.type=t,this.precomputed=null}Ce.BasePoint=$t,$t.prototype.eq=function(){throw new Error("Not implemented")},$t.prototype.validate=function(){return this.curve.validate(this)},Ce.prototype.decodePoint=function(t,r){t=Gt.toArray(t,r);var i=this.p.byteLength();if((t[0]===4||t[0]===6||t[0]===7)&&t.length-1===2*i){t[0]===6?Lr(t[t.length-1]%2===0):t[0]===7&&Lr(t[t.length-1]%2===1);var n=this.point(t.slice(1,1+i),t.slice(1+i,1+2*i));return n}else if((t[0]===2||t[0]===3)&&t.length-1===i)return this.pointFromX(t.slice(1,1+i),t[0]===3);throw new Error("Unknown point format")},$t.prototype.encodeCompressed=function(t){return this.encode(t,!0)},$t.prototype._encode=function(t){var r=this.curve.p.byteLength(),i=this.getX().toArray("be",r);return t?[this.getY().isEven()?2:3].concat(i):[4].concat(i,this.getY().toArray("be",r))},$t.prototype.encode=function(t,r){return Gt.encode(this._encode(r),t)},$t.prototype.precompute=function(t){if(this.precomputed)return this;var r={doubles:null,naf:null,beta:null};return r.naf=this._getNAFPoints(8),r.doubles=this._getDoubles(4,t),r.beta=this._getBeta(),this.precomputed=r,this},$t.prototype._hasDoubles=function(t){if(!this.precomputed)return!1;var r=this.precomputed.doubles;return r?r.points.length>=Math.ceil((t.bitLength()+1)/r.step):!1},$t.prototype._getDoubles=function(t,r){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var i=[this],n=this,o=0;o<r;o+=t){for(var h=0;h<t;h++)n=n.dbl();i.push(n)}return{step:t,points:i}},$t.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var r=[this],i=(1<<t)-1,n=i===1?null:this.dbl(),o=1;o<i;o++)r[o]=r[o-1].add(n);return{wnd:t,points:r}},$t.prototype._getBeta=function(){return null},$t.prototype.dblp=function(t){for(var r=this,i=0;i<t;i++)r=r.dbl();return r};var qi=lr(function(e){typeof Object.create=="function"?e.exports=function(r,i){i&&(r.super_=i,r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(r,i){if(i){r.super_=i;var n=function(){};n.prototype=i.prototype,r.prototype=new n,r.prototype.constructor=r}}}),za=Gt.assert;function te(e){Ze.call(this,"short",e),this.a=new K(e.a,16).toRed(this.red),this.b=new K(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}qi(te,Ze);var ja=te;te.prototype._getEndomorphism=function(t){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var r,i;if(t.beta)r=new K(t.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);r=n[0].cmp(n[1])<0?n[0]:n[1],r=r.toRed(this.red)}if(t.lambda)i=new K(t.lambda,16);else{var o=this._getEndoRoots(this.n);this.g.mul(o[0]).x.cmp(this.g.x.redMul(r))===0?i=o[0]:(i=o[1],za(this.g.mul(i).x.cmp(this.g.x.redMul(r))===0))}var h;return t.basis?h=t.basis.map(function(p){return{a:new K(p.a,16),b:new K(p.b,16)}}):h=this._getEndoBasis(i),{beta:r,lambda:i,basis:h}}},te.prototype._getEndoRoots=function(t){var r=t===this.p?this.red:K.mont(t),i=new K(2).toRed(r).redInvm(),n=i.redNeg(),o=new K(3).toRed(r).redNeg().redSqrt().redMul(i),h=n.redAdd(o).fromRed(),p=n.redSub(o).fromRed();return[h,p]},te.prototype._getEndoBasis=function(t){for(var r=this.n.ushrn(Math.floor(this.n.bitLength()/2)),i=t,n=this.n.clone(),o=new K(1),h=new K(0),p=new K(0),A=new K(1),v,w,y,S,I,N,C,F=0,U,J;i.cmpn(0)!==0;){var Bt=n.div(i);U=n.sub(Bt.mul(i)),J=p.sub(Bt.mul(o));var G=A.sub(Bt.mul(h));if(!y&&U.cmp(r)<0)v=C.neg(),w=o,y=U.neg(),S=J;else if(y&&++F===2)break;C=U,n=i,i=U,p=o,o=J,A=h,h=G}I=U.neg(),N=J;var H=y.sqr().add(S.sqr()),L=I.sqr().add(N.sqr());return L.cmp(H)>=0&&(I=v,N=w),y.negative&&(y=y.neg(),S=S.neg()),I.negative&&(I=I.neg(),N=N.neg()),[{a:y,b:S},{a:I,b:N}]},te.prototype._endoSplit=function(t){var r=this.endo.basis,i=r[0],n=r[1],o=n.b.mul(t).divRound(this.n),h=i.b.neg().mul(t).divRound(this.n),p=o.mul(i.a),A=h.mul(n.a),v=o.mul(i.b),w=h.mul(n.b),y=t.sub(p).sub(A),S=v.add(w).neg();return{k1:y,k2:S}},te.prototype.pointFromX=function(t,r){t=new K(t,16),t.red||(t=t.toRed(this.red));var i=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),n=i.redSqrt();if(n.redSqr().redSub(i).cmp(this.zero)!==0)throw new Error("invalid point");var o=n.fromRed().isOdd();return(r&&!o||!r&&o)&&(n=n.redNeg()),this.point(t,n)},te.prototype.validate=function(t){if(t.inf)return!0;var r=t.x,i=t.y,n=this.a.redMul(r),o=r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);return i.redSqr().redISub(o).cmpn(0)===0},te.prototype._endoWnafMulAdd=function(t,r,i){for(var n=this._endoWnafT1,o=this._endoWnafT2,h=0;h<t.length;h++){var p=this._endoSplit(r[h]),A=t[h],v=A._getBeta();p.k1.negative&&(p.k1.ineg(),A=A.neg(!0)),p.k2.negative&&(p.k2.ineg(),v=v.neg(!0)),n[h*2]=A,n[h*2+1]=v,o[h*2]=p.k1,o[h*2+1]=p.k2}for(var w=this._wnafMulAdd(1,n,o,h*2,i),y=0;y<h*2;y++)n[y]=null,o[y]=null;return w};function Ft(e,t,r,i){Ze.BasePoint.call(this,e,"affine"),t===null&&r===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new K(t,16),this.y=new K(r,16),i&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}qi(Ft,Ze.BasePoint),te.prototype.point=function(t,r,i){return new Ft(this,t,r,i)},te.prototype.pointFromJSON=function(t,r){return Ft.fromJSON(this,t,r)},Ft.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed;if(t&&t.beta)return t.beta;var r=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(t){var i=this.curve,n=function(o){return i.point(o.x.redMul(i.endo.beta),o.y)};t.beta=r,r.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(n)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(n)}}}return r}},Ft.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},Ft.fromJSON=function(t,r,i){typeof r=="string"&&(r=JSON.parse(r));var n=t.point(r[0],r[1],i);if(!r[2])return n;function o(p){return t.point(p[0],p[1],i)}var h=r[2];return n.precomputed={beta:null,doubles:h.doubles&&{step:h.doubles.step,points:[n].concat(h.doubles.points.map(o))},naf:h.naf&&{wnd:h.naf.wnd,points:[n].concat(h.naf.points.map(o))}},n},Ft.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},Ft.prototype.isInfinity=function(){return this.inf},Ft.prototype.add=function(t){if(this.inf)return t;if(t.inf)return this;if(this.eq(t))return this.dbl();if(this.neg().eq(t))return this.curve.point(null,null);if(this.x.cmp(t.x)===0)return this.curve.point(null,null);var r=this.y.redSub(t.y);r.cmpn(0)!==0&&(r=r.redMul(this.x.redSub(t.x).redInvm()));var i=r.redSqr().redISub(this.x).redISub(t.x),n=r.redMul(this.x.redSub(i)).redISub(this.y);return this.curve.point(i,n)},Ft.prototype.dbl=function(){if(this.inf)return this;var t=this.y.redAdd(this.y);if(t.cmpn(0)===0)return this.curve.point(null,null);var r=this.curve.a,i=this.x.redSqr(),n=t.redInvm(),o=i.redAdd(i).redIAdd(i).redIAdd(r).redMul(n),h=o.redSqr().redISub(this.x.redAdd(this.x)),p=o.redMul(this.x.redSub(h)).redISub(this.y);return this.curve.point(h,p)},Ft.prototype.getX=function(){return this.x.fromRed()},Ft.prototype.getY=function(){return this.y.fromRed()},Ft.prototype.mul=function(t){return t=new K(t,16),this.isInfinity()?this:this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},Ft.prototype.mulAdd=function(t,r,i){var n=[this,r],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(n,o):this.curve._wnafMulAdd(1,n,o,2)},Ft.prototype.jmulAdd=function(t,r,i){var n=[this,r],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(n,o,!0):this.curve._wnafMulAdd(1,n,o,2,!0)},Ft.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||this.x.cmp(t.x)===0&&this.y.cmp(t.y)===0)},Ft.prototype.neg=function(t){if(this.inf)return this;var r=this.curve.point(this.x,this.y.redNeg());if(t&&this.precomputed){var i=this.precomputed,n=function(o){return o.neg()};r.precomputed={naf:i.naf&&{wnd:i.naf.wnd,points:i.naf.points.map(n)},doubles:i.doubles&&{step:i.doubles.step,points:i.doubles.points.map(n)}}}return r},Ft.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var t=this.curve.jpoint(this.x,this.y,this.curve.one);return t};function Tt(e,t,r,i){Ze.BasePoint.call(this,e,"jacobian"),t===null&&r===null&&i===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new K(0)):(this.x=new K(t,16),this.y=new K(r,16),this.z=new K(i,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}qi(Tt,Ze.BasePoint),te.prototype.jpoint=function(t,r,i){return new Tt(this,t,r,i)},Tt.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var t=this.z.redInvm(),r=t.redSqr(),i=this.x.redMul(r),n=this.y.redMul(r).redMul(t);return this.curve.point(i,n)},Tt.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},Tt.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var r=t.z.redSqr(),i=this.z.redSqr(),n=this.x.redMul(r),o=t.x.redMul(i),h=this.y.redMul(r.redMul(t.z)),p=t.y.redMul(i.redMul(this.z)),A=n.redSub(o),v=h.redSub(p);if(A.cmpn(0)===0)return v.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var w=A.redSqr(),y=w.redMul(A),S=n.redMul(w),I=v.redSqr().redIAdd(y).redISub(S).redISub(S),N=v.redMul(S.redISub(I)).redISub(h.redMul(y)),C=this.z.redMul(t.z).redMul(A);return this.curve.jpoint(I,N,C)},Tt.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ();if(t.isInfinity())return this;var r=this.z.redSqr(),i=this.x,n=t.x.redMul(r),o=this.y,h=t.y.redMul(r).redMul(this.z),p=i.redSub(n),A=o.redSub(h);if(p.cmpn(0)===0)return A.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var v=p.redSqr(),w=v.redMul(p),y=i.redMul(v),S=A.redSqr().redIAdd(w).redISub(y).redISub(y),I=A.redMul(y.redISub(S)).redISub(o.redMul(w)),N=this.z.redMul(p);return this.curve.jpoint(S,I,N)},Tt.prototype.dblp=function(t){if(t===0)return this;if(this.isInfinity())return this;if(!t)return this.dbl();var r;if(this.curve.zeroA||this.curve.threeA){var i=this;for(r=0;r<t;r++)i=i.dbl();return i}var n=this.curve.a,o=this.curve.tinv,h=this.x,p=this.y,A=this.z,v=A.redSqr().redSqr(),w=p.redAdd(p);for(r=0;r<t;r++){var y=h.redSqr(),S=w.redSqr(),I=S.redSqr(),N=y.redAdd(y).redIAdd(y).redIAdd(n.redMul(v)),C=h.redMul(S),F=N.redSqr().redISub(C.redAdd(C)),U=C.redISub(F),J=N.redMul(U);J=J.redIAdd(J).redISub(I);var Bt=w.redMul(A);r+1<t&&(v=v.redMul(I)),h=F,A=Bt,w=J}return this.curve.jpoint(h,w.redMul(o),A)},Tt.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},Tt.prototype._zeroDbl=function(){var t,r,i;if(this.zOne){var n=this.x.redSqr(),o=this.y.redSqr(),h=o.redSqr(),p=this.x.redAdd(o).redSqr().redISub(n).redISub(h);p=p.redIAdd(p);var A=n.redAdd(n).redIAdd(n),v=A.redSqr().redISub(p).redISub(p),w=h.redIAdd(h);w=w.redIAdd(w),w=w.redIAdd(w),t=v,r=A.redMul(p.redISub(v)).redISub(w),i=this.y.redAdd(this.y)}else{var y=this.x.redSqr(),S=this.y.redSqr(),I=S.redSqr(),N=this.x.redAdd(S).redSqr().redISub(y).redISub(I);N=N.redIAdd(N);var C=y.redAdd(y).redIAdd(y),F=C.redSqr(),U=I.redIAdd(I);U=U.redIAdd(U),U=U.redIAdd(U),t=F.redISub(N).redISub(N),r=C.redMul(N.redISub(t)).redISub(U),i=this.y.redMul(this.z),i=i.redIAdd(i)}return this.curve.jpoint(t,r,i)},Tt.prototype._threeDbl=function(){var t,r,i;if(this.zOne){var n=this.x.redSqr(),o=this.y.redSqr(),h=o.redSqr(),p=this.x.redAdd(o).redSqr().redISub(n).redISub(h);p=p.redIAdd(p);var A=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),v=A.redSqr().redISub(p).redISub(p);t=v;var w=h.redIAdd(h);w=w.redIAdd(w),w=w.redIAdd(w),r=A.redMul(p.redISub(v)).redISub(w),i=this.y.redAdd(this.y)}else{var y=this.z.redSqr(),S=this.y.redSqr(),I=this.x.redMul(S),N=this.x.redSub(y).redMul(this.x.redAdd(y));N=N.redAdd(N).redIAdd(N);var C=I.redIAdd(I);C=C.redIAdd(C);var F=C.redAdd(C);t=N.redSqr().redISub(F),i=this.y.redAdd(this.z).redSqr().redISub(S).redISub(y);var U=S.redSqr();U=U.redIAdd(U),U=U.redIAdd(U),U=U.redIAdd(U),r=N.redMul(C.redISub(t)).redISub(U)}return this.curve.jpoint(t,r,i)},Tt.prototype._dbl=function(){var t=this.curve.a,r=this.x,i=this.y,n=this.z,o=n.redSqr().redSqr(),h=r.redSqr(),p=i.redSqr(),A=h.redAdd(h).redIAdd(h).redIAdd(t.redMul(o)),v=r.redAdd(r);v=v.redIAdd(v);var w=v.redMul(p),y=A.redSqr().redISub(w.redAdd(w)),S=w.redISub(y),I=p.redSqr();I=I.redIAdd(I),I=I.redIAdd(I),I=I.redIAdd(I);var N=A.redMul(S).redISub(I),C=i.redAdd(i).redMul(n);return this.curve.jpoint(y,N,C)},Tt.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var t=this.x.redSqr(),r=this.y.redSqr(),i=this.z.redSqr(),n=r.redSqr(),o=t.redAdd(t).redIAdd(t),h=o.redSqr(),p=this.x.redAdd(r).redSqr().redISub(t).redISub(n);p=p.redIAdd(p),p=p.redAdd(p).redIAdd(p),p=p.redISub(h);var A=p.redSqr(),v=n.redIAdd(n);v=v.redIAdd(v),v=v.redIAdd(v),v=v.redIAdd(v);var w=o.redIAdd(p).redSqr().redISub(h).redISub(A).redISub(v),y=r.redMul(w);y=y.redIAdd(y),y=y.redIAdd(y);var S=this.x.redMul(A).redISub(y);S=S.redIAdd(S),S=S.redIAdd(S);var I=this.y.redMul(w.redMul(v.redISub(w)).redISub(p.redMul(A)));I=I.redIAdd(I),I=I.redIAdd(I),I=I.redIAdd(I);var N=this.z.redAdd(p).redSqr().redISub(i).redISub(A);return this.curve.jpoint(S,I,N)},Tt.prototype.mul=function(t,r){return t=new K(t,r),this.curve._wnafMul(this,t)},Tt.prototype.eq=function(t){if(t.type==="affine")return this.eq(t.toJ());if(this===t)return!0;var r=this.z.redSqr(),i=t.z.redSqr();if(this.x.redMul(i).redISub(t.x.redMul(r)).cmpn(0)!==0)return!1;var n=r.redMul(this.z),o=i.redMul(t.z);return this.y.redMul(o).redISub(t.y.redMul(n)).cmpn(0)===0},Tt.prototype.eqXToP=function(t){var r=this.z.redSqr(),i=t.toRed(this.curve.red).redMul(r);if(this.x.cmp(i)===0)return!0;for(var n=t.clone(),o=this.curve.redN.redMul(r);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(i.redIAdd(o),this.x.cmp(i)===0)return!0}},Tt.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},Tt.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var zr=lr(function(e,t){var r=t;r.base=Ze,r.short=ja,r.mont=null,r.edwards=null}),jr=lr(function(e,t){var r=t,i=Gt.assert;function n(p){p.type==="short"?this.curve=new zr.short(p):p.type==="edwards"?this.curve=new zr.edwards(p):this.curve=new zr.mont(p),this.g=this.curve.g,this.n=this.curve.n,this.hash=p.hash,i(this.g.validate(),"Invalid curve"),i(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}r.PresetCurve=n;function o(p,A){Object.defineProperty(r,p,{configurable:!0,enumerable:!0,get:function(){var v=new n(A);return Object.defineProperty(r,p,{configurable:!0,enumerable:!0,value:v}),v}})}o("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:se.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),o("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:se.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),o("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:se.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),o("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:se.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),o("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:se.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),o("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:se.sha256,gRed:!1,g:["9"]}),o("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:se.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var h;try{h=null.crash()}catch{h=void 0}o("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:se.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",h]})});function Re(e){if(!(this instanceof Re))return new Re(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=fe.toArray(e.entropy,e.entropyEnc||"hex"),r=fe.toArray(e.nonce,e.nonceEnc||"hex"),i=fe.toArray(e.pers,e.persEnc||"hex");ki(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}var Ff=Re;Re.prototype._init=function(t,r,i){var n=t.concat(r).concat(i);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var o=0;o<this.V.length;o++)this.K[o]=0,this.V[o]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},Re.prototype._hmac=function(){return new se.hmac(this.hash,this.K)},Re.prototype._update=function(t){var r=this._hmac().update(this.V).update([0]);t&&(r=r.update(t)),this.K=r.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},Re.prototype.reseed=function(t,r,i,n){typeof r!="string"&&(n=i,i=r,r=null),t=fe.toArray(t,r),i=fe.toArray(i,n),ki(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(i||[])),this._reseed=1},Re.prototype.generate=function(t,r,i,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof r!="string"&&(n=i,i=r,r=null),i&&(i=fe.toArray(i,n||"hex"),this._update(i));for(var o=[];o.length<t;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var h=o.slice(0,t);return this._update(i),this._reseed++,fe.encode(h,r)};var Ki=Gt.assert;function kt(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var Hi=kt;kt.fromPublic=function(t,r,i){return r instanceof kt?r:new kt(t,{pub:r,pubEnc:i})},kt.fromPrivate=function(t,r,i){return r instanceof kt?r:new kt(t,{priv:r,privEnc:i})},kt.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},kt.prototype.getPublic=function(t,r){return typeof t=="string"&&(r=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),r?this.pub.encode(r,t):this.pub},kt.prototype.getPrivate=function(t){return t==="hex"?this.priv.toString(16,2):this.priv},kt.prototype._importPrivate=function(t,r){this.priv=new K(t,r||16),this.priv=this.priv.umod(this.ec.curve.n)},kt.prototype._importPublic=function(t,r){if(t.x||t.y){this.ec.curve.type==="mont"?Ki(t.x,"Need x coordinate"):(this.ec.curve.type==="short"||this.ec.curve.type==="edwards")&&Ki(t.x&&t.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(t.x,t.y);return}this.pub=this.ec.curve.decodePoint(t,r)},kt.prototype.derive=function(t){return t.validate()||Ki(t.validate(),"public point not validated"),t.mul(this.priv).getX()},kt.prototype.sign=function(t,r,i){return this.ec.sign(t,this,r,i)},kt.prototype.verify=function(t,r){return this.ec.verify(t,r,this)},kt.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var Qa=Gt.assert;function Qr(e,t){if(e instanceof Qr)return e;this._importDER(e,t)||(Qa(e.r&&e.s,"Signature without r or s"),this.r=new K(e.r,16),this.s=new K(e.s,16),e.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var Jr=Qr;function Ja(){this.place=0}function Li(e,t){var r=e[t.place++];if(!(r&128))return r;var i=r&15;if(i===0||i>4)return!1;for(var n=0,o=0,h=t.place;o<i;o++,h++)n<<=8,n|=e[h],n>>>=0;return n<=127?!1:(t.place=h,n)}function Tf(e){for(var t=0,r=e.length-1;!e[t]&&!(e[t+1]&128)&&t<r;)t++;return t===0?e:e.slice(t)}Qr.prototype._importDER=function(t,r){t=Gt.toArray(t,r);var i=new Ja;if(t[i.place++]!==48)return!1;var n=Li(t,i);if(n===!1||n+i.place!==t.length||t[i.place++]!==2)return!1;var o=Li(t,i);if(o===!1)return!1;var h=t.slice(i.place,o+i.place);if(i.place+=o,t[i.place++]!==2)return!1;var p=Li(t,i);if(p===!1||t.length!==p+i.place)return!1;var A=t.slice(i.place,p+i.place);if(h[0]===0)if(h[1]&128)h=h.slice(1);else return!1;if(A[0]===0)if(A[1]&128)A=A.slice(1);else return!1;return this.r=new K(h),this.s=new K(A),this.recoveryParam=null,!0};function zi(e,t){if(t<128){e.push(t);return}var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(r|128);--r;)e.push(t>>>(r<<3)&255);e.push(t)}Qr.prototype.toDER=function(t){var r=this.r.toArray(),i=this.s.toArray();for(r[0]&128&&(r=[0].concat(r)),i[0]&128&&(i=[0].concat(i)),r=Tf(r),i=Tf(i);!i[0]&&!(i[1]&128);)i=i.slice(1);var n=[2];zi(n,r.length),n=n.concat(r),n.push(2),zi(n,i.length);var o=n.concat(i),h=[48];return zi(h,o.length),h=h.concat(o),Gt.encode(h,t)};var Ga=function(){throw new Error("unsupported")},Uf=Gt.assert;function ee(e){if(!(this instanceof ee))return new ee(e);typeof e=="string"&&(Uf(Object.prototype.hasOwnProperty.call(jr,e),"Unknown curve "+e),e=jr[e]),e instanceof jr.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var Ya=ee;ee.prototype.keyPair=function(t){return new Hi(this,t)},ee.prototype.keyFromPrivate=function(t,r){return Hi.fromPrivate(this,t,r)},ee.prototype.keyFromPublic=function(t,r){return Hi.fromPublic(this,t,r)},ee.prototype.genKeyPair=function(t){t||(t={});for(var r=new Ff({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||Ga(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),i=this.n.byteLength(),n=this.n.sub(new K(2));;){var o=new K(r.generate(i));if(!(o.cmp(n)>0))return o.iaddn(1),this.keyFromPrivate(o)}},ee.prototype._truncateToN=function(t,r){var i=t.byteLength()*8-this.n.bitLength();return i>0&&(t=t.ushrn(i)),!r&&t.cmp(this.n)>=0?t.sub(this.n):t},ee.prototype.sign=function(t,r,i,n){typeof i=="object"&&(n=i,i=null),n||(n={}),r=this.keyFromPrivate(r,i),t=this._truncateToN(new K(t,16));for(var o=this.n.byteLength(),h=r.getPrivate().toArray("be",o),p=t.toArray("be",o),A=new Ff({hash:this.hash,entropy:h,nonce:p,pers:n.pers,persEnc:n.persEnc||"utf8"}),v=this.n.sub(new K(1)),w=0;;w++){var y=n.k?n.k(w):new K(A.generate(this.n.byteLength()));if(y=this._truncateToN(y,!0),!(y.cmpn(1)<=0||y.cmp(v)>=0)){var S=this.g.mul(y);if(!S.isInfinity()){var I=S.getX(),N=I.umod(this.n);if(N.cmpn(0)!==0){var C=y.invm(this.n).mul(N.mul(r.getPrivate()).iadd(t));if(C=C.umod(this.n),C.cmpn(0)!==0){var F=(S.getY().isOdd()?1:0)|(I.cmp(N)!==0?2:0);return n.canonical&&C.cmp(this.nh)>0&&(C=this.n.sub(C),F^=1),new Jr({r:N,s:C,recoveryParam:F})}}}}}},ee.prototype.verify=function(t,r,i,n){t=this._truncateToN(new K(t,16)),i=this.keyFromPublic(i,n),r=new Jr(r,"hex");var o=r.r,h=r.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0||h.cmpn(1)<0||h.cmp(this.n)>=0)return!1;var p=h.invm(this.n),A=p.mul(t).umod(this.n),v=p.mul(o).umod(this.n),w;return this.curve._maxwellTrick?(w=this.g.jmulAdd(A,i.getPublic(),v),w.isInfinity()?!1:w.eqXToP(o)):(w=this.g.mulAdd(A,i.getPublic(),v),w.isInfinity()?!1:w.getX().umod(this.n).cmp(o)===0)},ee.prototype.recoverPubKey=function(e,t,r,i){Uf((3&r)===r,"The recovery param is more than two bits"),t=new Jr(t,i);var n=this.n,o=new K(e),h=t.r,p=t.s,A=r&1,v=r>>1;if(h.cmp(this.curve.p.umod(this.curve.n))>=0&&v)throw new Error("Unable to find sencond key candinate");v?h=this.curve.pointFromX(h.add(this.curve.n),A):h=this.curve.pointFromX(h,A);var w=t.r.invm(n),y=n.sub(o).mul(w).umod(n),S=p.mul(w).umod(n);return this.g.mulAdd(y,h,S)},ee.prototype.getKeyRecoveryParam=function(e,t,r,i){if(t=new Jr(t,i),t.recoveryParam!==null)return t.recoveryParam;for(var n=0;n<4;n++){var o;try{o=this.recoverPubKey(e,t,n)}catch{continue}if(o.eq(r))return n}throw new Error("Unable to find valid recovery factor")};var Va=lr(function(e,t){var r=t;r.version="6.5.4",r.utils=Gt,r.rand=function(){throw new Error("unsupported")},r.curve=zr,r.curves=jr,r.ec=Ya,r.eddsa=null}),Wa=Va.ec;const Xa="signing-key/5.7.0",ji=new z(Xa);let Qi=null;function ve(){return Qi||(Qi=new Wa("secp256k1")),Qi}class Za{constructor(t){wr(this,"curve","secp256k1"),wr(this,"privateKey",Kt(t)),Os(this.privateKey)!==32&&ji.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const r=ve().keyFromPrivate(Ot(this.privateKey));wr(this,"publicKey","0x"+r.getPublic(!1,"hex")),wr(this,"compressedPublicKey","0x"+r.getPublic(!0,"hex")),wr(this,"_isSigningKey",!0)}_addPoint(t){const r=ve().keyFromPublic(Ot(this.publicKey)),i=ve().keyFromPublic(Ot(t));return"0x"+r.pub.add(i.pub).encodeCompressed("hex")}signDigest(t){const r=ve().keyFromPrivate(Ot(this.privateKey)),i=Ot(t);i.length!==32&&ji.throwArgumentError("bad digest length","digest",t);const n=r.sign(i,{canonical:!0});return Jn({recoveryParam:n.recoveryParam,r:oe("0x"+n.r.toString(16),32),s:oe("0x"+n.s.toString(16),32)})}computeSharedSecret(t){const r=ve().keyFromPrivate(Ot(this.privateKey)),i=ve().keyFromPublic(Ot(kf(t)));return oe("0x"+r.derive(i.getPublic()).toString(16),32)}static isSigningKey(t){return!!(t&&t._isSigningKey)}}function $a(e,t){const r=Jn(t),i={r:Ot(r.r),s:Ot(r.s)};return"0x"+ve().recoverPubKey(Ot(e),i,r.recoveryParam).encode("hex",!1)}function kf(e,t){const r=Ot(e);if(r.length===32){const i=new Za(r);return t?"0x"+ve().keyFromPrivate(r).getPublic(!0,"hex"):i.publicKey}else{if(r.length===33)return t?Kt(r):"0x"+ve().keyFromPublic(r).getPublic(!1,"hex");if(r.length===65)return t?"0x"+ve().keyFromPublic(r).getPublic(!0,"hex"):Kt(r)}return ji.throwArgumentError("invalid public or private key","key","[REDACTED]")}const tu="transactions/5.7.0";new z(tu);var qf;(function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559"})(qf||(qf={}));function eu(e){const t=kf(e);return h0(Qn(Si(Qn(t,1)),12))}function ru(e,t){return eu($a(Ot(e),t))}const iu="https://rpc.walletconnect.com/v1";async function Kf(e,t,r,i,n,o){switch(r.t){case"eip191":return Hf(e,t,r.s);case"eip1271":return await Lf(e,t,r.s,i,n,o);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)}}function Hf(e,t,r){return ru(uf(t),r).toLowerCase()===e.toLowerCase()}async function Lf(e,t,r,i,n,o){try{const h="0x1626ba7e",p="0000000000000000000000000000000000000000000000000000000000000040",A="0000000000000000000000000000000000000000000000000000000000000041",v=r.substring(2),w=uf(t).substring(2),y=h+w+p+A+v,S=await fetch(`${o||iu}/?chainId=${i}&projectId=${n}`,{method:"POST",body:JSON.stringify({id:nu(),jsonrpc:"2.0",method:"eth_call",params:[{to:e,data:y},"latest"]})}),{result:I}=await S.json();return I?I.slice(0,h.length).toLowerCase()===h.toLowerCase():!1}catch(h){return console.error("isValidEip1271Signature: ",h),!1}}function nu(){return Date.now()+Math.floor(Math.random()*1e3)}var fu=Object.defineProperty,ou=Object.defineProperties,su=Object.getOwnPropertyDescriptors,zf=Object.getOwnPropertySymbols,au=Object.prototype.hasOwnProperty,uu=Object.prototype.propertyIsEnumerable,jf=(e,t,r)=>t in e?fu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ji=(e,t)=>{for(var r in t||(t={}))au.call(t,r)&&jf(e,r,t[r]);if(zf)for(var r of zf(t))uu.call(t,r)&&jf(e,r,t[r]);return e},Qf=(e,t)=>ou(e,su(t));const hu="did:pkh:",Gr=e=>e?.split(":"),Gi=e=>{const t=e&&Gr(e);if(t)return e.includes(hu)?t[3]:t[1]},cu=e=>{const t=e&&Gr(e);if(t)return t[2]+":"+t[3]},Yi=e=>{const t=e&&Gr(e);if(t)return t.pop()};async function lu(e){const{cacao:t,projectId:r}=e,{s:i,p:n}=t,o=Jf(n,n.iss),h=Yi(n.iss);return await Kf(h,o,i,Gi(n.iss),r)}const Jf=(e,t)=>{const r=`${e.domain} wants you to sign in with your Ethereum account:`,i=Yi(t);if(!e.aud&&!e.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let n=e.statement||void 0;const o=`URI: ${e.aud||e.uri}`,h=`Version: ${e.version}`,p=`Chain ID: ${Gi(t)}`,A=`Nonce: ${e.nonce}`,v=`Issued At: ${e.iat}`,w=e.exp?`Expiration Time: ${e.exp}`:void 0,y=e.nbf?`Not Before: ${e.nbf}`:void 0,S=e.requestId?`Request ID: ${e.requestId}`:void 0,I=e.resources?`Resources:${e.resources.map(C=>`
- ${C}`).join("")}`:void 0,N=Vr(e.resources);if(N){const C=Oe(N);n=Xi(n,C)}return[r,i,"",n,"",o,h,p,A,v,w,y,S,I].filter(C=>C!=null).join(`
`)};function du(e,t,r){return r.includes("did:pkh:")||(r=`did:pkh:${r}`),{h:{t:"caip122"},p:{iss:r,domain:e.domain,aud:e.aud,version:e.version,nonce:e.nonce,iat:e.iat,statement:e.statement,requestId:e.requestId,resources:e.resources,nbf:e.nbf,exp:e.exp},s:t}}function pu(e){var t;const{authPayload:r,chains:i,methods:n}=e,o=r.statement||"";if(!(i!=null&&i.length))return r;const h=r.chains,p=wi(h,i);if(!(p!=null&&p.length))throw new Error("No supported chains");const A=Gf(r.resources);if(!A)return r;ge(A);const v=Yf(A,"eip155");let w=r?.resources||[];if(v!=null&&v.length){const y=Vf(v),S=wi(y,n);if(!(S!=null&&S.length))throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(y)}, supported: ${JSON.stringify(n)}`);const I=Vi("request",S,{chains:p}),N=$f(A,"eip155",I);w=((t=r?.resources)==null?void 0:t.slice(0,-1))||[],w.push(Yr(N))}return Qf(Ji({},r),{statement:eo(o,Vr(w)),chains:p,resources:r!=null&&r.resources||w.length>0?w:void 0})}function Gf(e){const t=Vr(e);if(t&&Wi(t))return Oe(t)}function vu(e,t){var r;return(r=e?.att)==null?void 0:r.hasOwnProperty(t)}function Yf(e,t){var r,i;return(r=e?.att)!=null&&r[t]?Object.keys((i=e?.att)==null?void 0:i[t]):[]}function gu(e){return e?.map(t=>Object.keys(t))||[]}function Vf(e){return e?.map(t=>{var r;return(r=t.split("/"))==null?void 0:r[1]})||[]}function Wf(e){return Buffer.from(JSON.stringify(e)).toString("base64")}function Xf(e){return JSON.parse(Buffer.from(e,"base64").toString("utf-8"))}function ge(e){if(!e)throw new Error("No recap provided, value is undefined");if(!e.att)throw new Error("No `att` property found");const t=Object.keys(e.att);if(!(t!=null&&t.length))throw new Error("No resources found in `att` property");t.forEach(r=>{const i=e.att[r];if(Array.isArray(i))throw new Error(`Resource must be an object: ${r}`);if(typeof i!="object")throw new Error(`Resource must be an object: ${r}`);if(!Object.keys(i).length)throw new Error(`Resource object is empty: ${r}`);Object.keys(i).forEach(n=>{const o=i[n];if(!Array.isArray(o))throw new Error(`Ability limits ${n} must be an array of objects, found: ${o}`);if(!o.length)throw new Error(`Value of ${n} is empty array, must be an array with objects`);o.forEach(h=>{if(typeof h!="object")throw new Error(`Ability limits (${n}) must be an array of objects, found: ${h}`)})})})}function Zf(e,t,r,i={}){return r?.sort((n,o)=>n.localeCompare(o)),{att:{[e]:Vi(t,r,i)}}}function $f(e,t,r){var i;return e.att[t]=Ji({},r),((i=Object.keys(e.att))==null?void 0:i.sort((n,o)=>n.localeCompare(o))).reduce((n,o)=>(n.att[o]=e.att[o],n),{att:{}})}function Vi(e,t,r={}){t=t?.sort((n,o)=>n.localeCompare(o));const i=t.map(n=>({[`${e}/${n}`]:[r]}));return Object.assign({},...i)}function Yr(e){return ge(e),`urn:recap:${Wf(e).replace(/=/g,"")}`}function Oe(e){const t=Xf(e.replace("urn:recap:",""));return ge(t),t}function mu(e,t,r){const i=Zf(e,t,r);return Yr(i)}function Wi(e){return e&&e.includes("urn:recap:")}function Au(e,t){const r=Oe(e),i=Oe(t),n=to(r,i);return Yr(n)}function to(e,t){ge(e),ge(t);const r=Object.keys(e.att).concat(Object.keys(t.att)).sort((n,o)=>n.localeCompare(o)),i={att:{}};return r.forEach(n=>{var o,h;Object.keys(((o=e.att)==null?void 0:o[n])||{}).concat(Object.keys(((h=t.att)==null?void 0:h[n])||{})).sort((p,A)=>p.localeCompare(A)).forEach(p=>{var A,v;i.att[n]=Qf(Ji({},i.att[n]),{[p]:((A=e.att[n])==null?void 0:A[p])||((v=t.att[n])==null?void 0:v[p])})})}),i}function Xi(e="",t){ge(t);const r="I further authorize the stated URI to perform the following actions on my behalf: ";if(e.includes(r))return e;const i=[];let n=0;Object.keys(t.att).forEach(p=>{const A=Object.keys(t.att[p]).map(y=>({ability:y.split("/")[0],action:y.split("/")[1]}));A.sort((y,S)=>y.action.localeCompare(S.action));const v={};A.forEach(y=>{v[y.ability]||(v[y.ability]=[]),v[y.ability].push(y.action)});const w=Object.keys(v).map(y=>(n++,`(${n}) '${y}': '${v[y].join("', '")}' for '${p}'.`));i.push(w.join(", ").replace(".,","."))});const o=i.join(" "),h=`${r}${o}`;return`${e?e+" ":""}${h}`}function bu(e){var t;const r=Oe(e);ge(r);const i=(t=r.att)==null?void 0:t.eip155;return i?Object.keys(i).map(n=>n.split("/")[1]):[]}function yu(e){const t=Oe(e);ge(t);const r=[];return Object.values(t.att).forEach(i=>{Object.values(i).forEach(n=>{var o;(o=n?.[0])!=null&&o.chains&&r.push(n[0].chains)})}),[...new Set(r.flat())]}function eo(e,t){if(!t)return e;const r=Oe(t);return ge(r),Xi(e,r)}function Vr(e){if(!e)return;const t=e?.[e.length-1];return Wi(t)?t:void 0}const Zi="base10",Lt="base16",$i="base64pad",wu="base64url",dr="utf8",tn=0,pr=1,Sr=2,xu=0,ro=1,Nr=12,en=32;function Mu(){const e=x25519/* generateKeyPair */.TZ();return{privateKey:to_string_toString(e.secretKey,Lt),publicKey:to_string_toString(e.publicKey,Lt)}}function Eu(){const e=(0,random.randomBytes)(en);return to_string_toString(e,Lt)}function Su(e,t){const r=x25519/* sharedKey */.Tc(from_string_fromString(e,Lt),from_string_fromString(t,Lt),!0),i=new hkdf/* HKDF */.i(sha256/* SHA256 */.aD,r).expand(en);return to_string_toString(i,Lt)}function Nu(e){const t=(0,sha256/* hash */.tW)(from_string_fromString(e,Lt));return to_string_toString(t,Lt)}function Iu(e){const t=(0,sha256/* hash */.tW)(from_string_fromString(e,dr));return to_string_toString(t,Lt)}function rn(e){return from_string_fromString(`${e}`,Zi)}function $e(e){return Number(to_string_toString(e,Zi))}function _u(e){const t=rn(typeof e.type<"u"?e.type:tn);if($e(t)===pr&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof e.senderPublicKey<"u"?from_string_fromString(e.senderPublicKey,Lt):void 0,i=typeof e.iv<"u"?from_string_fromString(e.iv,Lt):(0,random.randomBytes)(Nr),n=new chacha20poly1305/* ChaCha20Poly1305 */.g6(from_string_fromString(e.symKey,Lt)).seal(i,from_string_fromString(e.message,dr));return nn({type:t,sealed:n,iv:i,senderPublicKey:r,encoding:e.encoding})}function Bu(e,t){const r=rn(Sr),i=(0,random.randomBytes)(Nr),n=from_string_fromString(e,dr);return nn({type:r,sealed:n,iv:i,encoding:t})}function Cu(e){const t=new chacha20poly1305/* ChaCha20Poly1305 */.g6(from_string_fromString(e.symKey,Lt)),{sealed:r,iv:i}=Wr({encoded:e.encoded,encoding:e?.encoding}),n=t.open(i,r);if(n===null)throw new Error("Failed to decrypt");return to_string_toString(n,dr)}function Ru(e,t){const{sealed:r}=Wr({encoded:e,encoding:t});return to_string_toString(r,dr)}function nn(e){const{encoding:t=$i}=e;if($e(e.type)===Sr)return to_string_toString(concat([e.type,e.sealed]),t);if($e(e.type)===pr){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return to_string_toString(concat([e.type,e.senderPublicKey,e.iv,e.sealed]),t)}return to_string_toString(concat([e.type,e.iv,e.sealed]),t)}function Wr(e){const{encoded:t,encoding:r=$i}=e,i=from_string_fromString(t,r),n=i.slice(xu,ro),o=ro;if($e(n)===pr){const v=o+en,w=v+Nr,y=i.slice(o,v),S=i.slice(v,w),I=i.slice(w);return{type:n,sealed:I,iv:S,senderPublicKey:y}}if($e(n)===Sr){const v=i.slice(o),w=(0,random.randomBytes)(Nr);return{type:n,sealed:v,iv:w}}const h=o+Nr,p=i.slice(o,h),A=i.slice(h);return{type:n,sealed:A,iv:p}}function Ou(e,t){const r=Wr({encoded:e,encoding:t?.encoding});return io({type:$e(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?to_string_toString(r.senderPublicKey,Lt):void 0,receiverPublicKey:t?.receiverPublicKey})}function io(e){const t=e?.type||tn;if(t===pr){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function Pu(e){return e.type===pr&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}function Du(e){return e.type===Sr}function no(e){return new elliptic.ec("p256").keyFromPublic({x:Buffer.from(e.x,"base64").toString("hex"),y:Buffer.from(e.y,"base64").toString("hex")},"hex")}function Fu(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");const r=t.length%4;return r>0&&(t+="=".repeat(4-r)),t}function Tu(e){return Buffer.from(Fu(e),"base64")}function Uu(e,t){const[r,i,n]=e.split("."),o=Tu(n);if(o.length!==64)throw new Error("Invalid signature length");const h=o.slice(0,32).toString("hex"),p=o.slice(32,64).toString("hex"),A=`${r}.${i}`,v=new sha256/* SHA256 */.aD().update(Buffer.from(A)).digest(),w=no(t),y=Buffer.from(v).toString("hex");if(!w.verify(y,{r:h,s:p}))throw new Error("Invalid signature");return utils_decodeJWT(e).payload}const fo="irn";function ku(e){return e?.relay||{protocol:fo}}function qu(e){const t=C[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var Ku=Object.defineProperty,Hu=Object.defineProperties,Lu=Object.getOwnPropertyDescriptors,oo=Object.getOwnPropertySymbols,zu=Object.prototype.hasOwnProperty,ju=Object.prototype.propertyIsEnumerable,so=(e,t,r)=>t in e?Ku(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ao=(e,t)=>{for(var r in t||(t={}))zu.call(t,r)&&so(e,r,t[r]);if(oo)for(var r of oo(t))ju.call(t,r)&&so(e,r,t[r]);return e},Qu=(e,t)=>Hu(e,Lu(t));function uo(e,t="-"){const r={},i="relay"+t;return Object.keys(e).forEach(n=>{if(n.startsWith(i)){const o=n.replace(i,""),h=e[n];r[o]=h}}),r}function Ju(e){e=e.includes("wc://")?e.replace("wc://",""):e,e=e.includes("wc:")?e.replace("wc:",""):e;const t=e.indexOf(":"),r=e.indexOf("?")!==-1?e.indexOf("?"):void 0,i=e.substring(0,t),n=e.substring(t+1,r).split("@"),o=typeof r<"u"?e.substring(r):"",h=query_string.parse(o),p=typeof h.methods=="string"?h.methods.split(","):void 0;return{protocol:i,topic:ho(n[0]),version:parseInt(n[1],10),symKey:h.symKey,relay:uo(h),methods:p,expiryTimestamp:h.expiryTimestamp?parseInt(h.expiryTimestamp,10):void 0}}function ho(e){return e.startsWith("//")?e.substring(2):e}function co(e,t="-"){const r="relay",i={};return Object.keys(e).forEach(n=>{const o=r+t+n;e[n]&&(i[o]=e[n])}),i}function Gu(e){return`${e.protocol}:${e.topic}@${e.version}?`+query_string.stringify(ao(Qu(ao({symKey:e.symKey},co(e.relay)),{expiryTimestamp:e.expiryTimestamp}),e.methods?{methods:e.methods.join(",")}:{}))}function Yu(e,t,r){return`${e}?wc_ev=${r}&topic=${t}`}var Vu=Object.defineProperty,Wu=Object.defineProperties,Xu=Object.getOwnPropertyDescriptors,lo=Object.getOwnPropertySymbols,Zu=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable,po=(e,t,r)=>t in e?Vu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,th=(e,t)=>{for(var r in t||(t={}))Zu.call(t,r)&&po(e,r,t[r]);if(lo)for(var r of lo(t))$u.call(t,r)&&po(e,r,t[r]);return e},eh=(e,t)=>Wu(e,Xu(t));function tr(e){const t=[];return e.forEach(r=>{const[i,n]=r.split(":");t.push(`${i}:${n}`)}),t}function vo(e){const t=[];return Object.values(e).forEach(r=>{t.push(...tr(r.accounts))}),t}function go(e,t){const r=[];return Object.values(e).forEach(i=>{tr(i.accounts).includes(t)&&r.push(...i.methods)}),r}function mo(e,t){const r=[];return Object.values(e).forEach(i=>{tr(i.accounts).includes(t)&&r.push(...i.events)}),r}function rh(e,t){const r=_o(e,t);if(r)throw new Error(r.message);const i={};for(const[n,o]of Object.entries(e))i[n]={methods:o.methods,events:o.events,chains:o.accounts.map(h=>`${h.split(":")[0]}:${h.split(":")[1]}`)};return i}function ih(e){const{proposal:{requiredNamespaces:t,optionalNamespaces:r={}},supportedNamespaces:i}=e,n=on(t),o=on(r),h={};Object.keys(i).forEach(v=>{const w=i[v].chains,y=i[v].methods,S=i[v].events,I=i[v].accounts;w.forEach(N=>{if(!I.some(C=>C.includes(N)))throw new Error(`No accounts provided for chain ${N} in namespace ${v}`)}),h[v]={chains:w,methods:y,events:S,accounts:I}});const p=Co(t,h,"approve()");if(p)throw new Error(p.message);const A={};return!Object.keys(t).length&&!Object.keys(r).length?h:(Object.keys(n).forEach(v=>{const w=i[v].chains.filter(N=>{var C,F;return(F=(C=n[v])==null?void 0:C.chains)==null?void 0:F.includes(N)}),y=i[v].methods.filter(N=>{var C,F;return(F=(C=n[v])==null?void 0:C.methods)==null?void 0:F.includes(N)}),S=i[v].events.filter(N=>{var C,F;return(F=(C=n[v])==null?void 0:C.events)==null?void 0:F.includes(N)}),I=w.map(N=>i[v].accounts.filter(C=>C.includes(`${N}:`))).flat();A[v]={chains:w,methods:y,events:S,accounts:I}}),Object.keys(o).forEach(v=>{var w,y,S,I,N,C;if(!i[v])return;const F=(y=(w=o[v])==null?void 0:w.chains)==null?void 0:y.filter(G=>i[v].chains.includes(G)),U=i[v].methods.filter(G=>{var H,L;return(L=(H=o[v])==null?void 0:H.methods)==null?void 0:L.includes(G)}),J=i[v].events.filter(G=>{var H,L;return(L=(H=o[v])==null?void 0:H.events)==null?void 0:L.includes(G)}),Bt=F?.map(G=>i[v].accounts.filter(H=>H.includes(`${G}:`))).flat();A[v]={chains:me((S=A[v])==null?void 0:S.chains,F),methods:me((I=A[v])==null?void 0:I.methods,U),events:me((N=A[v])==null?void 0:N.events,J),accounts:me((C=A[v])==null?void 0:C.accounts,Bt)}}),A)}function fn(e){return e.includes(":")}function Ao(e){return fn(e)?e.split(":")[0]:e}function on(e){var t,r,i;const n={};if(!Xr(e))return n;for(const[o,h]of Object.entries(e)){const p=fn(o)?[o]:h.chains,A=h.methods||[],v=h.events||[],w=Ao(o);n[w]=eh(th({},n[w]),{chains:me(p,(t=n[w])==null?void 0:t.chains),methods:me(A,(r=n[w])==null?void 0:r.methods),events:me(v,(i=n[w])==null?void 0:i.events)})}return n}function bo(e){const t={};return e?.forEach(r=>{const[i,n]=r.split(":");t[i]||(t[i]={accounts:[],chains:[],events:[]}),t[i].accounts.push(r),t[i].chains.push(`${i}:${n}`)}),t}function nh(e,t){t=t.map(i=>i.replace("did:pkh:",""));const r=bo(t);for(const[i,n]of Object.entries(r))n.methods?n.methods=me(n.methods,e):n.methods=e,n.events=["chainChanged","accountsChanged"];return r}const yo={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},wo={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function xe(e,t){const{message:r,code:i}=wo[e];return{message:t?`${r} ${t}`:r,code:i}}function er(e,t){const{message:r,code:i}=yo[e];return{message:t?`${r} ${t}`:r,code:i}}function Ir(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function Xr(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function Pe(e){return typeof e>"u"}function Yt(e,t){return t&&Pe(e)?!0:typeof e=="string"&&!!e.trim().length}function Zr(e,t){return t&&Pe(e)?!0:typeof e=="number"&&!isNaN(e)}function fh(e,t){const{requiredNamespaces:r}=t,i=Object.keys(e.namespaces),n=Object.keys(r);let o=!0;return _e(n,i)?(i.forEach(h=>{const{accounts:p,methods:A,events:v}=e.namespaces[h],w=tr(p),y=r[h];(!_e(Or(h,y),w)||!_e(y.methods,A)||!_e(y.events,v))&&(o=!1)}),o):!1}function _r(e){return Yt(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function xo(e){if(Yt(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const r=t[0]+":"+t[1];return!!t[2]&&_r(r)}}return!1}function oh(e){if(Yt(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function sh(e){var t;return(t=e?.proposer)==null?void 0:t.publicKey}function ah(e){return e?.topic}function uh(e,t){let r=null;return Yt(e?.publicKey,!1)||(r=xe("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function sn(e){let t=!0;return Ir(e)?e.length&&(t=e.every(r=>Yt(r,!1))):t=!1,t}function Mo(e,t,r){let i=null;return Ir(t)&&t.length?t.forEach(n=>{i||_r(n)||(i=er("UNSUPPORTED_CHAINS",`${r}, chain ${n} should be a string and conform to "namespace:chainId" format`))}):_r(e)||(i=er("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),i}function Eo(e,t,r){let i=null;return Object.entries(e).forEach(([n,o])=>{if(i)return;const h=Mo(n,Or(n,o),`${t} ${r}`);h&&(i=h)}),i}function So(e,t){let r=null;return Ir(e)?e.forEach(i=>{r||xo(i)||(r=er("UNSUPPORTED_ACCOUNTS",`${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`))}):r=er("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}function No(e,t){let r=null;return Object.values(e).forEach(i=>{if(r)return;const n=So(i?.accounts,`${t} namespace`);n&&(r=n)}),r}function Io(e,t){let r=null;return sn(e?.methods)?sn(e?.events)||(r=er("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):r=er("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),r}function an(e,t){let r=null;return Object.values(e).forEach(i=>{if(r)return;const n=Io(i,`${t}, namespace`);n&&(r=n)}),r}function hh(e,t,r){let i=null;if(e&&Xr(e)){const n=an(e,t);n&&(i=n);const o=Eo(e,t,r);o&&(i=o)}else i=xe("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return i}function _o(e,t){let r=null;if(e&&Xr(e)){const i=an(e,t);i&&(r=i);const n=No(e,t);n&&(r=n)}else r=xe("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function Bo(e){return Yt(e.protocol,!0)}function ch(e,t){let r=!1;return t&&!e?r=!0:e&&Ir(e)&&e.length&&e.forEach(i=>{r=Bo(i)}),r}function lh(e){return typeof e=="number"}function dh(e){return typeof e<"u"&&typeof e!==null}function ph(e){return!(!e||typeof e!="object"||!e.code||!Zr(e.code,!1)||!e.message||!Yt(e.message,!1))}function vh(e){return!(Pe(e)||!Yt(e.method,!1))}function gh(e){return!(Pe(e)||Pe(e.result)&&Pe(e.error)||!Zr(e.id,!1)||!Yt(e.jsonrpc,!1))}function mh(e){return!(Pe(e)||!Yt(e.name,!1))}function Ah(e,t){return!(!_r(t)||!vo(e).includes(t))}function bh(e,t,r){return Yt(r,!1)?go(e,t).includes(r):!1}function yh(e,t,r){return Yt(r,!1)?mo(e,t).includes(r):!1}function Co(e,t,r){let i=null;const n=wh(e),o=xh(t),h=Object.keys(n),p=Object.keys(o),A=Ro(Object.keys(e)),v=Ro(Object.keys(t)),w=A.filter(y=>!v.includes(y));return w.length&&(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w.toString()}
      Received: ${Object.keys(t).toString()}`)),_e(h,p)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${p.toString()}`)),Object.keys(t).forEach(y=>{if(!y.includes(":")||i)return;const S=tr(t[y].accounts);S.includes(y)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${S.toString()}`))}),h.forEach(y=>{i||(_e(n[y].methods,o[y].methods)?_e(n[y].events,o[y].events)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${y}`)):i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${y}`))}),i}function wh(e){const t={};return Object.keys(e).forEach(r=>{var i;r.includes(":")?t[r]=e[r]:(i=e[r].chains)==null||i.forEach(n=>{t[n]={methods:e[r].methods,events:e[r].events}})}),t}function Ro(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function xh(e){const t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else{const i=tr(e[r].accounts);i?.forEach(n=>{t[n]={accounts:e[r].accounts.filter(o=>o.includes(`${n}:`)),methods:e[r].methods,events:e[r].events}})}}),t}function Mh(e,t){return Zr(e,!1)&&e<=t.max&&e>=t.min}function Eh(){const e=We();return new Promise(t=>{switch(e){case qt.browser:t(Oo());break;case qt.reactNative:t(Po());break;case qt.node:t(Do());break;default:t(!0)}})}function Oo(){return gr()&&navigator?.onLine}async function Po(){if(rr()&&typeof __webpack_require__.g<"u"&&__webpack_require__.g!=null&&__webpack_require__.g.NetInfo){const e=await(__webpack_require__.g==null?void 0:__webpack_require__.g.NetInfo.fetch());return e?.isConnected}return!0}function Do(){return!0}function Sh(e){switch(We()){case qt.browser:Fo(e);break;case qt.reactNative:To(e);break;case qt.node:break}}function Fo(e){!rr()&&gr()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function To(e){rr()&&typeof __webpack_require__.g<"u"&&__webpack_require__.g!=null&&__webpack_require__.g.NetInfo&&__webpack_require__.g?.NetInfo.addEventListener(t=>e(t?.isConnected))}const un={};class Nh{static get(t){return un[t]}static set(t,r){un[t]=r}static delete(t){delete un[t]}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/destr/dist/index.mjs
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



;// CONCATENATED MODULE: ./node_modules/unstorage/dist/shared/unstorage.d569726e.mjs
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
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
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
  base = unstorage_d569726e_normalizeBaseKey(base);
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
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function unstorage_d569726e_normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}



;// CONCATENATED MODULE: ./node_modules/unstorage/dist/index.mjs




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
    getItems(items, commonOptions) {
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
      base = unstorage_d569726e_normalizeBaseKey(base);
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
      base = unstorage_d569726e_normalizeBaseKey(base);
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
      base = unstorage_d569726e_normalizeBaseKey(base);
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
      base = unstorage_d569726e_normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
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
  azureAppConfiguration: "unstorage/drivers/azure-app-configuration",
  azureCosmos: "unstorage/drivers/azure-cosmos",
  azureKeyVault: "unstorage/drivers/azure-key-vault",
  azureStorageBlob: "unstorage/drivers/azure-storage-blob",
  azureStorageTable: "unstorage/drivers/azure-storage-table",
  cloudflareKVBinding: "unstorage/drivers/cloudflare-kv-binding",
  cloudflareKVHTTP: "unstorage/drivers/cloudflare-kv-http",
  cloudflareR2Binding: "unstorage/drivers/cloudflare-r2-binding",
  fs: "unstorage/drivers/fs",
  fsLite: "unstorage/drivers/fs-lite",
  github: "unstorage/drivers/github",
  http: "unstorage/drivers/http",
  indexedb: "unstorage/drivers/indexedb",
  localStorage: "unstorage/drivers/localstorage",
  lruCache: "unstorage/drivers/lru-cache",
  memory: "unstorage/drivers/memory",
  mongodb: "unstorage/drivers/mongodb",
  netlifyBlobs: "unstorage/drivers/netlify-blobs",
  overlay: "unstorage/drivers/overlay",
  planetscale: "unstorage/drivers/planetscale",
  redis: "unstorage/drivers/redis",
  sessionStorage: "unstorage/drivers/session-storage",
  vercelKV: "unstorage/drivers/vercel-kv",
  /** @deprecated */
  "cloudflare-kv-binding": "unstorage/drivers/cloudflare-kv-binding",
  /** @deprecated */
  "cloudflare-kv-http": "unstorage/drivers/cloudflare-kv-http"
};



;// CONCATENATED MODULE: ./node_modules/idb-keyval/dist/index.js
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



;// CONCATENATED MODULE: ./node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
function index_es_C(i){return i}const x="idb-keyval";var index_es_z=(i={})=>{const t=i.base&&i.base.length>0?`${i.base}:`:"",e=s=>t+s;let n;return i.dbName&&i.storeName&&(n=createStore(i.dbName,i.storeName)),{name:x,options:i,async hasItem(s){return!(typeof await get(e(s),n)>"u")},async getItem(s){return await get(e(s),n)??null},setItem(s,a){return set(e(s),a,n)},removeItem(s){return del(e(s),n)},getKeys(){return keys(n)},clear(){return clear(n)}}};const D="WALLET_CONNECT_V2_INDEXED_DB",index_es_E="keyvaluestorage";class index_es_{constructor(){this.indexedDb=createStorage({driver:index_es_z({dbName:D,storeName:index_es_E})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key,t.value])}async getItem(t){const e=await this.indexedDb.getItem(t);if(e!==null)return e}async setItem(t,e){await this.indexedDb.setItem(t,safeJsonStringify(e))}async removeItem(t){await this.indexedDb.removeItem(t)}}var index_es_l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof __webpack_require__.g<"u"?__webpack_require__.g:typeof self<"u"?self:{},index_es_c={exports:{}};(function(){let i;function t(){}i=t,i.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},i.prototype.setItem=function(e,n){this[e]=String(n)},i.prototype.removeItem=function(e){delete this[e]},i.prototype.clear=function(){const e=this;Object.keys(e).forEach(function(n){e[n]=void 0,delete e[n]})},i.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},i.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof index_es_l<"u"&&index_es_l.localStorage?index_es_c.exports=index_es_l.localStorage:typeof window<"u"&&window.localStorage?index_es_c.exports=window.localStorage:index_es_c.exports=new t})();function index_es_k(i){var t;return[i[0],safeJsonParse((t=i[1])!=null?t:"")]}class index_es_K{constructor(){this.localStorage=index_es_c.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(index_es_k)}async getItem(t){const e=this.localStorage.getItem(t);if(e!==null)return safeJsonParse(e)}async setItem(t,e){this.localStorage.setItem(t,safeJsonStringify(e))}async removeItem(t){this.localStorage.removeItem(t)}}const N="wc_storage_version",y=1,O=async(i,t,e)=>{const n=N,s=await t.getItem(n);if(s&&s>=y){e(t);return}const a=await i.getKeys();if(!a.length){e(t);return}const m=[];for(;a.length;){const r=a.shift();if(!r)continue;const o=r.toLowerCase();if(o.includes("wc@")||o.includes("walletconnect")||o.includes("wc_")||o.includes("wallet_connect")){const f=await i.getItem(r);await t.setItem(r,f),m.push(r)}}await t.setItem(n,y),e(t),index_es_j(i,m)},index_es_j=async(i,t)=>{t.length&&t.forEach(async e=>{await i.removeItem(e)})};class index_es_h{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const t=new index_es_K;this.storage=t;try{const e=new index_es_;O(t,e,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(t){return await this.initialize(),this.storage.getItem(t)}async setItem(t,e){return await this.initialize(),this.storage.setItem(t,e)}async removeItem(t){return await this.initialize(),this.storage.removeItem(t)}async initialize(){this.initialized||await new Promise(t=>{const e=setInterval(()=>{this.initialized&&(clearInterval(e),t())},20)})}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/events/dist/esm/events.js
class IEvents {
}
//# sourceMappingURL=events.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/heartbeat/dist/index.es.js
class index_es_n extends IEvents{constructor(e){super()}}const s=cjs.FIVE_SECONDS,r={pulse:"heartbeat_pulse"};class index_es_i extends index_es_n{constructor(e){super(e),this.events=new events.EventEmitter,this.interval=s,this.interval=e?.interval||s}static async init(e){const t=new index_es_i(e);return await t.init(),t}async init(){await this.initialize()}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async initialize(){this.intervalRef=setInterval(()=>this.pulse(),(0,cjs.toMiliseconds)(this.interval))}pulse(){this.events.emit(r.pulse)}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/pino/browser.js
var browser = __webpack_require__(44874);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/logger/dist/index.es.js
const dist_index_es_c={level:"info"},dist_index_es_n="custom_context",dist_index_es_l=1e3*1024;class index_es_O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class index_es_d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const t=new index_es_O(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const t=e.value;return e=e.next,{done:!1,value:t}}}}}class L{constructor(e,t=dist_index_es_l){this.level=e??"error",this.levelValue=browser.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new index_es_d(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,t){t===browser.levels.values.error?console.error(e):t===browser.levels.values.warn?console.warn(e):t===browser.levels.values.debug?console.debug(e):t===browser.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(safeJsonStringify({timestamp:new Date().toISOString(),log:e}));const t=typeof e=="string"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new index_es_d(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push(safeJsonStringify({extraMetadata:e})),new Blob(t,{type:"application/json"})}}class index_es_m{constructor(e,t=dist_index_es_l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}}class B{constructor(e,t=dist_index_es_l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var index_es_x=Object.defineProperty,index_es_S=Object.defineProperties,dist_index_es_=Object.getOwnPropertyDescriptors,index_es_p=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,dist_index_es_z=Object.prototype.propertyIsEnumerable,index_es_f=(r,e,t)=>e in r?index_es_x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&index_es_f(r,t,e[t]);if(index_es_p)for(var t of index_es_p(e))dist_index_es_z.call(e,t)&&index_es_f(r,t,e[t]);return r},index_es_g=(r,e)=>index_es_S(r,dist_index_es_(e));function dist_index_es_k(r){return index_es_g(i({},r),{level:r?.level||dist_index_es_c.level})}function v(r,e=dist_index_es_n){return r[e]||""}function index_es_b(r,e,t=dist_index_es_n){return r[t]=e,r}function index_es_y(r,e=dist_index_es_n){let t="";return typeof r.bindings>"u"?t=v(r,e):t=r.bindings().context||"",t}function index_es_w(r,e,t=dist_index_es_n){const o=index_es_y(r,t);return o.trim()?`${o}/${e}`:e}function dist_index_es_E(r,e,t=dist_index_es_n){const o=index_es_w(r,e,t),a=r.child({context:o});return index_es_b(a,o,t)}function dist_index_es_C(r){var e,t;const o=new index_es_m((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:browser_default()(index_es_g(i({},r.opts),{level:"trace",browser:index_es_g(i({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I(r){var e;const t=new B((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:browser_default()(index_es_g(i({},r.opts),{level:"trace"}),t),chunkLoggerController:t}}function A(r){return typeof r.loggerOverride<"u"&&typeof r.loggerOverride!="string"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<"u"?dist_index_es_C(r):I(r)}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/types/dist/index.es.js
class types_dist_index_es_n extends IEvents{constructor(s){super(),this.opts=s,this.protocol="wc",this.version=2}}class types_dist_index_es_l{constructor(s,t,e){this.core=s,this.logger=t}}class dist_index_es_h extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t,this.records=new Map}}class index_es_a{constructor(s,t){this.logger=s,this.core=t}}class dist_index_es_g extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t}}class index_es_u extends IEvents{constructor(s){super()}}class dist_index_es_p{constructor(s,t,e,f){this.core=s,this.logger=t,this.name=e}}class index_es_I{constructor(){this.map=new Map}}class dist_index_es_d extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t}}class types_dist_index_es_E{constructor(s,t){this.core=s,this.logger=t}}class dist_index_es_x extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t}}class dist_index_es_m{constructor(s,t){this.logger=s,this.core=t}}class dist_index_es_y{constructor(s,t,e){this.core=s,this.logger=t,this.store=e}}class index_es_v{constructor(s,t){this.projectId=s,this.logger=t}}class types_dist_index_es_C{constructor(s,t,e){this.core=s,this.logger=t,this.telemetryEnabled=e}}class dist_index_es_b extends (events_default()){constructor(){super()}}class dist_index_es_S{constructor(s){this.opts=s,this.protocol="wc",this.version=2}}class dist_index_es_w extends events.EventEmitter{constructor(){super()}}class M{constructor(s){this.client=s}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js

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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js

const isNodeJs = (/* unused pure expression or super */ null && (isNode));

//# sourceMappingURL=env.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js


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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
class index_es_e{}class index_es_o extends index_es_e{constructor(c){super()}}class jsonrpc_types_dist_index_es_n extends index_es_e{constructor(){super()}}class index_es_r extends jsonrpc_types_dist_index_es_n{constructor(c){super()}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js

//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js








//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
class dist_index_es_o extends index_es_r{constructor(t){super(t),this.events=new events.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict(formatJsonRpcRequest(t.method,t.params||[],t.id||getBigIntRpcId().toString()),e)}async requestStrict(t,e){return new Promise(async(i,s)=>{if(!this.connection.connected)try{await this.open()}catch(n){s(n)}this.events.on(`${t.id}`,n=>{isJsonRpcError(n)?s(n.error):i(n.result)});try{await this.connection.send(t,e)}catch(n){s(n)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),isJsonRpcResponse(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect")}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0)}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
const jsonrpc_ws_connection_dist_index_es_w=()=>typeof WebSocket<"u"?WebSocket:typeof __webpack_require__.g<"u"&&typeof __webpack_require__.g.WebSocket<"u"?__webpack_require__.g.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:__webpack_require__(490796),jsonrpc_ws_connection_dist_index_es_b=()=>typeof WebSocket<"u"||typeof __webpack_require__.g<"u"&&typeof __webpack_require__.g.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",dist_index_es_a=c=>c.split("?")[0],jsonrpc_ws_connection_dist_index_es_h=10,jsonrpc_ws_connection_dist_index_es_S=jsonrpc_ws_connection_dist_index_es_w();class dist_index_es_f{constructor(e){if(this.url=e,this.events=new events.EventEmitter,this.registering=!1,!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,t)=>{if(typeof this.socket>"u"){t(new Error("Connection already closed"));return}this.socket.onclose=n=>{this.onClose(n),e()},this.socket.close()})}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send(safeJsonStringify(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=t||this.events.listenerCount("open")>=t)&&this.events.setMaxListeners(t+1),new Promise((n,o)=>{this.events.once("register_error",s=>{this.resetMaxListeners(),o(s)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return o(new Error("WebSocket connection is missing or invalid"));n(this.socket)})})}return this.url=e,this.registering=!0,new Promise((t,n)=>{const o=new URLSearchParams(e).get("origin"),s=(0,environment_dist_cjs.isReactNative)()?{headers:{origin:o}}:{rejectUnauthorized:!isLocalhostUrl(e)},i=new jsonrpc_ws_connection_dist_index_es_S(e,[],s);jsonrpc_ws_connection_dist_index_es_b()?i.onerror=r=>{const l=r;n(this.emitError(l.error))}:i.on("error",r=>{n(this.emitError(r))}),i.onopen=()=>{this.onOpen(i),t(i)}})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t=typeof e.data=="string"?safeJsonParse(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const n=this.parseError(t),o=n.message||n.toString(),s=formatJsonRpcError(e,o);this.events.emit("payload",s)}parseError(e,t=this.url){return parseConnectionError(e,dist_index_es_a(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>jsonrpc_ws_connection_dist_index_es_h&&this.events.setMaxListeners(jsonrpc_ws_connection_dist_index_es_h)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${dist_index_es_a(this.url)}`));return this.events.emit("register_error",t),t}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(908142);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/core/dist/index.es.js
function index_es_Ds(o,e){if(o.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),s=0;s<t.length;s++)t[s]=255;for(var i=0;i<o.length;i++){var r=o.charAt(i),n=r.charCodeAt(0);if(t[n]!==255)throw new TypeError(r+" is ambiguous");t[n]=i}var a=o.length,c=o.charAt(0),h=Math.log(a)/Math.log(256),d=Math.log(256)/Math.log(a);function g(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";for(var p=0,_=0,D=0,E=l.length;D!==E&&l[D]===0;)D++,p++;for(var N=(E-D)*d+1>>>0,C=new Uint8Array(N);D!==E;){for(var L=l[D],k=0,x=N-1;(L!==0||k<_)&&x!==-1;x--,k++)L+=256*C[x]>>>0,C[x]=L%a>>>0,L=L/a>>>0;if(L!==0)throw new Error("Non-zero carry");_=k,D++}for(var M=N-_;M!==N&&C[M]===0;)M++;for(var ie=c.repeat(p);M<N;++M)ie+=o.charAt(C[M]);return ie}function m(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;var p=0;if(l[p]!==" "){for(var _=0,D=0;l[p]===c;)_++,p++;for(var E=(l.length-p)*h+1>>>0,N=new Uint8Array(E);l[p];){var C=t[l.charCodeAt(p)];if(C===255)return;for(var L=0,k=E-1;(C!==0||L<D)&&k!==-1;k--,L++)C+=a*N[k]>>>0,N[k]=C%256>>>0,C=C/256>>>0;if(C!==0)throw new Error("Non-zero carry");D=L,p++}if(l[p]!==" "){for(var x=E-D;x!==E&&N[x]===0;)x++;for(var M=new Uint8Array(_+(E-x)),ie=_;x!==E;)M[ie++]=N[x++];return M}}}function b(l){var p=m(l);if(p)return p;throw new Error(`Non-${e} character`)}return{encode:g,decodeUnsafe:m,decode:b}}var index_es_ms=index_es_Ds,index_es_bs=index_es_ms;const Ye=o=>{if(o instanceof Uint8Array&&o.constructor.name==="Uint8Array")return o;if(o instanceof ArrayBuffer)return new Uint8Array(o);if(ArrayBuffer.isView(o))return new Uint8Array(o.buffer,o.byteOffset,o.byteLength);throw new Error("Unknown type, must be binary type")},index_es_fs=o=>new TextEncoder().encode(o),index_es_s=o=>new TextDecoder().decode(o);class index_es_Es{constructor(e,t,s){this.name=e,this.prefix=t,this.baseEncode=s}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class index_es_vs{constructor(e,t,s){if(this.name=e,this.prefix=t,t.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=s}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return Je(this,e)}}class index_es_ws{constructor(e){this.decoders=e}or(e){return Je(this,e)}decode(e){const t=e[0],s=this.decoders[t];if(s)return s.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Je=(o,e)=>new index_es_ws({...o.decoders||{[o.prefix]:o},...e.decoders||{[e.prefix]:e}});class index_es_Is{constructor(e,t,s,i){this.name=e,this.prefix=t,this.baseEncode=s,this.baseDecode=i,this.encoder=new index_es_Es(e,t,s),this.decoder=new index_es_vs(e,t,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const index_es_ne=({name:o,prefix:e,encode:t,decode:s})=>new index_es_Is(o,e,t,s),X=({prefix:o,name:e,alphabet:t})=>{const{encode:s,decode:i}=index_es_bs(t,e);return index_es_ne({prefix:o,name:e,encode:s,decode:r=>Ye(i(r))})},index_es_Ts=(o,e,t,s)=>{const i={};for(let d=0;d<e.length;++d)i[e[d]]=d;let r=o.length;for(;o[r-1]==="=";)--r;const n=new Uint8Array(r*t/8|0);let a=0,c=0,h=0;for(let d=0;d<r;++d){const g=i[o[d]];if(g===void 0)throw new SyntaxError(`Non-${s} character`);c=c<<t|g,a+=t,a>=8&&(a-=8,n[h++]=255&c>>a)}if(a>=t||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return n},index_es_Cs=(o,e,t)=>{const s=e[e.length-1]==="=",i=(1<<t)-1;let r="",n=0,a=0;for(let c=0;c<o.length;++c)for(a=a<<8|o[c],n+=8;n>t;)n-=t,r+=e[i&a>>n];if(n&&(r+=e[i&a<<t-n]),s)for(;r.length*t&7;)r+="=";return r},core_dist_index_es_f=({name:o,prefix:e,bitsPerChar:t,alphabet:s})=>index_es_ne({prefix:e,name:o,encode(i){return index_es_Cs(i,s,t)},decode(i){return index_es_Ts(i,s,t,o)}}),index_es_Ss=index_es_ne({prefix:"\0",name:"identity",encode:o=>index_es_s(o),decode:o=>index_es_fs(o)});var index_es_Ps=Object.freeze({__proto__:null,identity:index_es_Ss});const index_es_Rs=core_dist_index_es_f({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var index_es_xs=Object.freeze({__proto__:null,base2:index_es_Rs});const index_es_Os=core_dist_index_es_f({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var index_es_As=Object.freeze({__proto__:null,base8:index_es_Os});const index_es_Ns=X({prefix:"9",name:"base10",alphabet:"0123456789"});var index_es_Ls=Object.freeze({__proto__:null,base10:index_es_Ns});const index_es_zs=core_dist_index_es_f({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),index_es_Ms=core_dist_index_es_f({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var index_es_$s=Object.freeze({__proto__:null,base16:index_es_zs,base16upper:index_es_Ms});const index_es_ks=core_dist_index_es_f({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),index_es_Fs=core_dist_index_es_f({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),index_es_Us=core_dist_index_es_f({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),index_es_Ks=core_dist_index_es_f({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),index_es_Bs=core_dist_index_es_f({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),index_es_Vs=core_dist_index_es_f({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),index_es_js=core_dist_index_es_f({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),index_es_qs=core_dist_index_es_f({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),index_es_Gs=core_dist_index_es_f({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var index_es_Hs=Object.freeze({__proto__:null,base32:index_es_ks,base32upper:index_es_Fs,base32pad:index_es_Us,base32padupper:index_es_Ks,base32hex:index_es_Bs,base32hexupper:index_es_Vs,base32hexpad:index_es_js,base32hexpadupper:index_es_qs,base32z:index_es_Gs});const index_es_Ys=X({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),index_es_Js=X({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var index_es_Ws=Object.freeze({__proto__:null,base36:index_es_Ys,base36upper:index_es_Js});const index_es_Xs=X({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),index_es_Zs=X({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var index_es_Qs=Object.freeze({__proto__:null,base58btc:index_es_Xs,base58flickr:index_es_Zs});const index_es_er=core_dist_index_es_f({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),index_es_tr=core_dist_index_es_f({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),index_es_ir=core_dist_index_es_f({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),index_es_sr=core_dist_index_es_f({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var index_es_rr=Object.freeze({__proto__:null,base64:index_es_er,base64pad:index_es_tr,base64url:index_es_ir,base64urlpad:index_es_sr});const index_es_We=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),index_es_nr=index_es_We.reduce((o,e,t)=>(o[t]=e,o),[]),index_es_or=index_es_We.reduce((o,e,t)=>(o[e.codePointAt(0)]=t,o),[]);function index_es_ar(o){return o.reduce((e,t)=>(e+=index_es_nr[t],e),"")}function index_es_cr(o){const e=[];for(const t of o){const s=index_es_or[t.codePointAt(0)];if(s===void 0)throw new Error(`Non-base256emoji character: ${t}`);e.push(s)}return new Uint8Array(e)}const index_es_hr=index_es_ne({prefix:"\u{1F680}",name:"base256emoji",encode:index_es_ar,decode:index_es_cr});var index_es_lr=Object.freeze({__proto__:null,base256emoji:index_es_hr}),index_es_ur=index_es_Ze,index_es_Xe=128,index_es_dr=127,index_es_gr=~index_es_dr,index_es_pr=Math.pow(2,31);function index_es_Ze(o,e,t){e=e||[],t=t||0;for(var s=t;o>=index_es_pr;)e[t++]=o&255|index_es_Xe,o/=128;for(;o&index_es_gr;)e[t++]=o&255|index_es_Xe,o>>>=7;return e[t]=o|0,index_es_Ze.bytes=t-s+1,e}var index_es_yr=index_es_be,index_es_Dr=128,Qe=127;function index_es_be(o,s){var t=0,s=s||0,i=0,r=s,n,a=o.length;do{if(r>=a)throw index_es_be.bytes=0,new RangeError("Could not decode varint");n=o[r++],t+=i<28?(n&Qe)<<i:(n&Qe)*Math.pow(2,i),i+=7}while(n>=index_es_Dr);return index_es_be.bytes=r-s,t}var index_es_mr=Math.pow(2,7),index_es_br=Math.pow(2,14),index_es_fr=Math.pow(2,21),dist_index_es_r=Math.pow(2,28),index_es_Er=Math.pow(2,35),index_es_vr=Math.pow(2,42),index_es_wr=Math.pow(2,49),index_es_Ir=Math.pow(2,56),index_es_Tr=Math.pow(2,63),Cr=function(o){return o<index_es_mr?1:o<index_es_br?2:o<index_es_fr?3:o<dist_index_es_r?4:o<index_es_Er?5:o<index_es_vr?6:o<index_es_wr?7:o<index_es_Ir?8:o<index_es_Tr?9:10},index_es_Sr={encode:index_es_ur,decode:index_es_yr,encodingLength:Cr},et=index_es_Sr;const tt=(o,e,t=0)=>(et.encode(o,e,t),e),it=o=>et.encodingLength(o),index_es_fe=(o,e)=>{const t=e.byteLength,s=it(o),i=s+it(t),r=new Uint8Array(i+t);return tt(o,r,0),tt(t,r,s),r.set(e,i),new index_es_Pr(o,t,e,r)};class index_es_Pr{constructor(e,t,s,i){this.code=e,this.size=t,this.digest=s,this.bytes=i}}const st=({name:o,code:e,encode:t})=>new index_es_Rr(o,e,t);class index_es_Rr{constructor(e,t,s){this.name=e,this.code=t,this.encode=s}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?index_es_fe(this.code,t):t.then(s=>index_es_fe(this.code,s))}else throw Error("Unknown type, must be binary type")}}const rt=o=>async e=>new Uint8Array(await crypto.subtle.digest(o,e)),index_es_xr=st({name:"sha2-256",code:18,encode:rt("SHA-256")}),index_es_Or=st({name:"sha2-512",code:19,encode:rt("SHA-512")});var index_es_Ar=Object.freeze({__proto__:null,sha256:index_es_xr,sha512:index_es_Or});const nt=0,index_es_Nr="identity",ot=Ye,index_es_Lr=o=>index_es_fe(nt,ot(o)),index_es_zr={code:nt,name:index_es_Nr,encode:ot,digest:index_es_Lr};var index_es_Mr=Object.freeze({__proto__:null,identity:index_es_zr});new TextEncoder,new TextDecoder;const at={...index_es_Ps,...index_es_xs,...index_es_As,...index_es_Ls,...index_es_$s,...index_es_Hs,...index_es_Ws,...index_es_Qs,...index_es_rr,...index_es_lr};({...index_es_Ar,...index_es_Mr});function $r(o=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(o):new Uint8Array(o)}function ct(o,e,t,s){return{name:o,prefix:e,encoder:{name:o,prefix:e,encode:t},decoder:{decode:s}}}const ht=ct("utf8","u",o=>"u"+new TextDecoder("utf8").decode(o),o=>new TextEncoder().encode(o.substring(1))),dist_index_es_e=ct("ascii","a",o=>{let e="a";for(let t=0;t<o.length;t++)e+=String.fromCharCode(o[t]);return e},o=>{o=o.substring(1);const e=$r(o.length);for(let t=0;t<o.length;t++)e[t]=o.charCodeAt(t);return e}),index_es_kr={utf8:ht,"utf-8":ht,hex:at.base16,latin1:dist_index_es_e,ascii:dist_index_es_e,binary:dist_index_es_e,...at};function index_es_Fr(o,e="utf8"){const t=index_es_kr[e];if(!t)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(o,"utf8"):t.decoder.decode(`${t.prefix}${o}`)}const Ee="wc",index_es_ve=2,index_es_oe="core",dist_index_es_O=`${Ee}@2:${index_es_oe}:`,lt={name:index_es_oe,logger:"error"},ut={database:":memory:"},dt="crypto",index_es_we="client_ed25519_seed",gt=cjs.ONE_DAY,pt="keychain",yt="0.3",index_es_Dt="messages",mt="0.3",bt=cjs.SIX_HOURS,ft="publisher",_t="irn",Et="error",Ie="wss://relay.walletconnect.org",vt="relayer",core_dist_index_es_w={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},wt="_subscription",index_es_T={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},It=.1,index_es_Ur={database:":memory:"},Te="2.16.1",index_es_Kr=1e4,F={link_mode:"link_mode",relay:"relay"},index_es_Tt="0.3",Ct="WALLETCONNECT_CLIENT_ID",index_es_Ce="WALLETCONNECT_LINK_MODE_APPS",index_es_A={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},Br=(/* unused pure expression or super */ null && (re)),St="subscription",Pt="0.3",Rt=cjs.FIVE_SECONDS*1e3,xt="pairing",index_es_Ot="0.3",index_es_Vr=(/* unused pure expression or super */ null && (re)),dist_index_es_j={wc_pairingDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:0},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:0}}},Z={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},index_es_P={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},At="history",Nt="0.3",index_es_Lt="expirer",index_es_R={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},index_es_zt="0.3",index_es_jr=(/* unused pure expression or super */ null && (V)),Mt="verify-api",index_es_qr="https://verify.walletconnect.com",index_es_$t="https://verify.walletconnect.org",index_es_Q=index_es_$t,index_es_kt=`${index_es_Q}/v3`,index_es_Ft=[index_es_qr,index_es_$t],index_es_Ut="echo",index_es_Kt="https://echo.walletconnect.com",index_es_Gr="event-client",core_dist_index_es_z={pairing_started:"pairing_started",pairing_uri_validation_success:"pairing_uri_validation_success",pairing_uri_not_expired:"pairing_uri_not_expired",store_new_pairing:"store_new_pairing",subscribing_pairing_topic:"subscribing_pairing_topic",subscribe_pairing_topic_success:"subscribe_pairing_topic_success",existing_pairing:"existing_pairing",pairing_not_expired:"pairing_not_expired",emit_inactive_pairing:"emit_inactive_pairing",emit_session_proposal:"emit_session_proposal",subscribing_to_pairing_topic:"subscribing_to_pairing_topic"},$={no_wss_connection:"no_wss_connection",no_internet_connection:"no_internet_connection",malformed_pairing_uri:"malformed_pairing_uri",active_pairing_already_exists:"active_pairing_already_exists",subscribe_pairing_topic_failure:"subscribe_pairing_topic_failure",pairing_expired:"pairing_expired",proposal_expired:"proposal_expired",proposal_listener_not_found:"proposal_listener_not_found"},index_es_Hr={session_approve_started:"session_approve_started",proposal_not_expired:"proposal_not_expired",session_namespaces_validation_success:"session_namespaces_validation_success",create_session_topic:"create_session_topic",subscribing_session_topic:"subscribing_session_topic",subscribe_session_topic_success:"subscribe_session_topic_success",publishing_session_approve:"publishing_session_approve",session_approve_publish_success:"session_approve_publish_success",store_session:"store_session",publishing_session_settle:"publishing_session_settle",session_settle_publish_success:"session_settle_publish_success"},index_es_Yr={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",proposal_expired:"proposal_expired",subscribe_session_topic_failure:"subscribe_session_topic_failure",session_approve_publish_failure:"session_approve_publish_failure",session_settle_publish_failure:"session_settle_publish_failure",session_approve_namespace_validation_failure:"session_approve_namespace_validation_failure",proposal_not_found:"proposal_not_found"},index_es_Jr={authenticated_session_approve_started:"authenticated_session_approve_started",authenticated_session_not_expired:"authenticated_session_not_expired",chains_caip2_compliant:"chains_caip2_compliant",chains_evm_compliant:"chains_evm_compliant",create_authenticated_session_topic:"create_authenticated_session_topic",cacaos_verified:"cacaos_verified",store_authenticated_session:"store_authenticated_session",subscribing_authenticated_session_topic:"subscribing_authenticated_session_topic",subscribe_authenticated_session_topic_success:"subscribe_authenticated_session_topic_success",publishing_authenticated_session_approve:"publishing_authenticated_session_approve",authenticated_session_approve_publish_success:"authenticated_session_approve_publish_success"},index_es_Wr={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",missing_session_authenticate_request:"missing_session_authenticate_request",session_authenticate_request_expired:"session_authenticate_request_expired",chains_caip2_compliant_failure:"chains_caip2_compliant_failure",chains_evm_compliant_failure:"chains_evm_compliant_failure",invalid_cacao:"invalid_cacao",subscribe_authenticated_session_topic_failure:"subscribe_authenticated_session_topic_failure",authenticated_session_approve_publish_failure:"authenticated_session_approve_publish_failure",authenticated_session_pending_request_not_found:"authenticated_session_pending_request_not_found"},Bt=.1,Vt="event-client",index_es_jt=86400,index_es_qt="https://pulse.walletconnect.com/batch";class index_es_Gt{constructor(e,t){this.core=e,this.logger=t,this.keychain=new Map,this.name=pt,this.version=yt,this.initialized=!1,this.storagePrefix=dist_index_es_O,this.init=async()=>{if(!this.initialized){const s=await this.getKeyChain();typeof s<"u"&&(this.keychain=s),this.initialized=!0}},this.has=s=>(this.isInitialized(),this.keychain.has(s)),this.set=async(s,i)=>{this.isInitialized(),this.keychain.set(s,i),await this.persist()},this.get=s=>{this.isInitialized();const i=this.keychain.get(s);if(typeof i>"u"){const{message:r}=xe("NO_MATCHING_KEY",`${this.name}: ${s}`);throw new Error(r)}return i},this.del=async s=>{this.isInitialized(),this.keychain.delete(s),await this.persist()},this.core=e,this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,ss(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?as(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_Ht{constructor(e,t,s){this.core=e,this.logger=t,this.name=dt,this.randomSessionIdentifier=Eu(),this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)},this.hasKeys=i=>(this.isInitialized(),this.keychain.has(i)),this.getClientId=async()=>{this.isInitialized();const i=await this.getClientSeed(),r=generateKeyPair(i);return encodeIss(r.publicKey)},this.generateKeyPair=()=>{this.isInitialized();const i=Mu();return this.setPrivateKey(i.publicKey,i.privateKey)},this.signJWT=async i=>{this.isInitialized();const r=await this.getClientSeed(),n=generateKeyPair(r),a=this.randomSessionIdentifier,c=gt;return await signJWT(a,i,c,n)},this.generateSharedKey=(i,r,n)=>{this.isInitialized();const a=this.getPrivateKey(i),c=Su(a,r);return this.setSymKey(c,n)},this.setSymKey=async(i,r)=>{this.isInitialized();const n=r||Nu(i);return await this.keychain.set(n,i),n},this.deleteKeyPair=async i=>{this.isInitialized(),await this.keychain.del(i)},this.deleteSymKey=async i=>{this.isInitialized(),await this.keychain.del(i)},this.encode=async(i,r,n)=>{this.isInitialized();const a=io(n),c=safeJsonStringify(r);if(Du(a))return Bu(c,n?.encoding);if(Pu(a)){const m=a.senderPublicKey,b=a.receiverPublicKey;i=await this.generateSharedKey(m,b)}const h=this.getSymKey(i),{type:d,senderPublicKey:g}=a;return _u({type:d,symKey:h,message:c,senderPublicKey:g,encoding:n?.encoding})},this.decode=async(i,r,n)=>{this.isInitialized();const a=Ou(r,n);if(Du(a)){const c=Ru(r,n?.encoding);return safeJsonParse(c)}if(Pu(a)){const c=a.receiverPublicKey,h=a.senderPublicKey;i=await this.generateSharedKey(c,h)}try{const c=this.getSymKey(i),h=Cu({symKey:c,encoded:r,encoding:n?.encoding});return safeJsonParse(h)}catch(c){this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`),this.logger.error(c)}},this.getPayloadType=(i,r=$i)=>{const n=Wr({encoded:i,encoding:r});return $e(n.type)},this.getPayloadSenderPublicKey=(i,r=$i)=>{const n=Wr({encoded:i,encoding:r});return n.senderPublicKey?to_string_toString(n.senderPublicKey,Lt):void 0},this.core=e,this.logger=dist_index_es_E(t,this.name),this.keychain=s||new index_es_Gt(this.core,this.logger)}get context(){return index_es_y(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(index_es_we)}catch{e=Eu(),await this.keychain.set(index_es_we,e)}return index_es_Fr(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_Yt extends index_es_a{constructor(e,t){super(e,t),this.logger=e,this.core=t,this.messages=new Map,this.name=index_es_Dt,this.version=mt,this.initialized=!1,this.storagePrefix=dist_index_es_O,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const s=await this.getRelayerMessages();typeof s<"u"&&(this.messages=s),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(s){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(s)}finally{this.initialized=!0}}},this.set=async(s,i)=>{this.isInitialized();const r=Iu(i);let n=this.messages.get(s);return typeof n>"u"&&(n={}),typeof n[r]<"u"||(n[r]=i,this.messages.set(s,n),await this.persist()),r},this.get=s=>{this.isInitialized();let i=this.messages.get(s);return typeof i>"u"&&(i={}),i},this.has=(s,i)=>{this.isInitialized();const r=this.get(s),n=Iu(i);return typeof r[n]<"u"},this.del=async s=>{this.isInitialized(),this.messages.delete(s),await this.persist()},this.logger=dist_index_es_E(e,this.name),this.core=t}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,ss(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?as(e):void 0}async persist(){await this.setRelayerMessages(this.messages)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_Xr extends dist_index_es_g{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.events=new events.EventEmitter,this.name=ft,this.queue=new Map,this.publishTimeout=(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),this.failedPublishTimeout=(0,cjs.toMiliseconds)(cjs.ONE_SECOND),this.needsTransportRestart=!1,this.publish=async(s,i,r)=>{var n;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:s,message:i,opts:r}});const a=r?.ttl||bt,c=ku(r),h=r?.prompt||!1,d=r?.tag||0,g=r?.id||getBigIntRpcId().toString(),m={topic:s,message:i,opts:{ttl:a,relay:c,prompt:h,tag:d,id:g,attestation:r?.attestation}},b=`Failed to publish payload, please try again. id:${g} tag:${d}`,l=Date.now();let p,_=1;try{for(;p===void 0;){if(Date.now()-l>this.publishTimeout)throw new Error(b);this.logger.trace({id:g,attempts:_},`publisher.publish - attempt ${_}`),p=await await ds(this.rpcPublish(s,i,a,c,h,d,g,r?.attestation).catch(D=>this.logger.warn(D)),this.publishTimeout,b),_++,p||await new Promise(D=>setTimeout(D,this.failedPublishTimeout))}this.relayer.events.emit(core_dist_index_es_w.publish,m),this.logger.debug("Successfully Published Payload"),this.logger.trace({type:"method",method:"publish",params:{id:g,topic:s,message:i,opts:r}})}catch(D){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(D),(n=r?.internal)!=null&&n.throwOnFailedPublish)throw D;this.queue.set(g,m)}},this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.relayer=e,this.logger=dist_index_es_E(t,this.name),this.registerEventListeners()}get context(){return index_es_y(this.logger)}rpcPublish(e,t,s,i,r,n,a,c){var h,d,g,m;const b={method:qu(i.protocol).publish,params:{topic:e,message:t,ttl:s,prompt:r,tag:n,attestation:c},id:a};return Pe((h=b.params)==null?void 0:h.prompt)&&((d=b.params)==null||delete d.prompt),Pe((g=b.params)==null?void 0:g.tag)&&((m=b.params)==null||delete m.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:b}),this.relayer.request(b)}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach(async e=>{const{topic:t,message:s,opts:i}=e;await this.publish(t,s,i)})}registerEventListeners(){this.relayer.core.heartbeat.on(r.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(core_dist_index_es_w.connection_stalled);return}this.checkQueue()}),this.relayer.on(core_dist_index_es_w.message_ack,e=>{this.removeRequestFromQueue(e.id.toString())})}}class index_es_Zr{constructor(){this.map=new Map,this.set=(e,t)=>{const s=this.get(e);this.exists(e,t)||this.map.set(e,[...s,t])},this.get=e=>this.map.get(e)||[],this.exists=(e,t)=>this.get(e).includes(t),this.delete=(e,t)=>{if(typeof t>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const s=this.get(e);if(!this.exists(e,t))return;const i=s.filter(r=>r!==t);if(!i.length){this.map.delete(e);return}this.map.set(e,i)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var index_es_Qr=Object.defineProperty,index_es_en=Object.defineProperties,index_es_tn=Object.getOwnPropertyDescriptors,index_es_Jt=Object.getOwnPropertySymbols,index_es_sn=Object.prototype.hasOwnProperty,index_es_rn=Object.prototype.propertyIsEnumerable,Wt=(o,e,t)=>e in o?index_es_Qr(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_ee=(o,e)=>{for(var t in e||(e={}))index_es_sn.call(e,t)&&Wt(o,t,e[t]);if(index_es_Jt)for(var t of index_es_Jt(e))index_es_rn.call(e,t)&&Wt(o,t,e[t]);return o},Se=(o,e)=>index_es_en(o,index_es_tn(e));class Xt extends dist_index_es_d{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.subscriptions=new Map,this.topicMap=new index_es_Zr,this.events=new events.EventEmitter,this.name=St,this.version=Pt,this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=dist_index_es_O,this.subscribeTimeout=(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),this.restartInProgress=!1,this.batchSubscribeTopicsLimit=500,this.pendingBatchMessages=[],this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),this.clientId=await this.relayer.core.crypto.getClientId(),await this.restore()),this.initialized=!0},this.subscribe=async(s,i)=>{this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:s,opts:i}});try{const r=ku(i),n={topic:s,relay:r,transportType:i?.transportType};this.pending.set(s,n);const a=await this.rpcSubscribe(s,r,i?.transportType);return typeof a=="string"&&(this.onSubscribe(a,n),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:s,opts:i}})),a}catch(r){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(r),r}},this.unsubscribe=async(s,i)=>{await this.restartToComplete(),this.isInitialized(),typeof i?.id<"u"?await this.unsubscribeById(s,i.id,i):await this.unsubscribeByTopic(s,i)},this.isSubscribed=async s=>{if(this.topics.includes(s))return!0;const i=`${this.pendingSubscriptionWatchLabel}_${s}`;return await new Promise((r,n)=>{const a=new cjs.Watch;a.start(i);const c=setInterval(()=>{!this.pending.has(s)&&this.topics.includes(s)&&(clearInterval(c),a.stop(i),r(!0)),a.elapsed(i)>=Rt&&(clearInterval(c),a.stop(i),n(new Error("Subscription resolution timeout")))},this.pollingInterval)}).catch(()=>!1)},this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.start=async()=>{await this.onConnect()},this.stop=async()=>{await this.onDisconnect()},this.restart=async()=>{this.restartInProgress=!0,await this.restore(),await this.reset(),this.restartInProgress=!1},this.relayer=e,this.logger=dist_index_es_E(t,this.name),this.clientId=""}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(e,t){let s=!1;try{s=this.getSubscription(e).topic===t}catch{}return s}onEnable(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const s=this.topicMap.get(e);await Promise.all(s.map(async i=>await this.unsubscribeById(e,i,t)))}async unsubscribeById(e,t,s){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:s}});try{const i=ku(s);await this.rpcUnsubscribe(e,t,i);const r=er("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,r),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:s}})}catch(i){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(i),i}}async rpcSubscribe(e,t,s=F.relay){s===F.relay&&await this.restartToComplete();const i={method:qu(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{const r=Iu(e+this.clientId);return s===F.link_mode?(setTimeout(()=>{(this.relayer.connected||this.relayer.connecting)&&this.relayer.request(i).catch(n=>this.logger.warn(n))},(0,cjs.toMiliseconds)(cjs.ONE_SECOND)),r):await await ds(this.relayer.request(i).catch(n=>this.logger.warn(n)),this.subscribeTimeout)?r:null}catch{this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(core_dist_index_es_w.connection_stalled)}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t=e[0].relay,s={method:qu(t.protocol).batchSubscribe,params:{topics:e.map(i=>i.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s});try{return await await ds(this.relayer.request(s).catch(i=>this.logger.warn(i)),this.subscribeTimeout)}catch{this.relayer.events.emit(core_dist_index_es_w.connection_stalled)}}async rpcBatchFetchMessages(e){if(!e.length)return;const t=e[0].relay,s={method:qu(t.protocol).batchFetchMessages,params:{topics:e.map(r=>r.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s});let i;try{i=await await ds(this.relayer.request(s).catch(r=>this.logger.warn(r)),this.subscribeTimeout)}catch{this.relayer.events.emit(core_dist_index_es_w.connection_stalled)}return i}rpcUnsubscribe(e,t,s){const i={method:qu(s.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i}),this.relayer.request(i)}onSubscribe(e,t){this.setSubscription(e,Se(index_es_ee({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach(t=>{this.setSubscription(t.id,index_es_ee({},t)),this.pending.delete(t.topic)})}async onUnsubscribe(e,t,s){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,s),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t)}addSubscription(e,t){this.subscriptions.set(e,index_es_ee({},t)),this.topicMap.set(t.topic,e),this.events.emit(index_es_A.created,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:s}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(s)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const s=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(s.topic,e),this.events.emit(index_es_A.deleted,Se(index_es_ee({},s),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(index_es_A.sync)}async reset(){if(this.cached.length){const e=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let t=0;t<e;t++){const s=this.cached.splice(0,this.batchSubscribeTopicsLimit);await this.batchFetchMessages(s),await this.batchSubscribe(s)}}this.events.emit(index_es_A.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){if(!e.length)return;const t=await this.rpcBatchSubscribe(e);Ir(t)&&this.onBatchSubscribe(t.map((s,i)=>Se(index_es_ee({},e[i]),{id:s})))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(this.pendingBatchMessages=this.pendingBatchMessages.concat(t.messages))}async onConnect(){await this.restart(),this.onEnable()}onDisconnect(){this.onDisable()}async checkPending(){if(!this.initialized||!this.relayer.connected)return;const e=[];this.pending.forEach(t=>{e.push(t)}),await this.batchSubscribe(e),this.pendingBatchMessages.length&&(await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages),this.pendingBatchMessages=[])}registerEventListeners(){this.relayer.core.heartbeat.on(r.pulse,async()=>{await this.checkPending()}),this.events.on(index_es_A.created,async e=>{const t=index_es_A.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()}),this.events.on(index_es_A.deleted,async e=>{const t=index_es_A.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(){!this.relayer.connected&&!this.relayer.connecting&&await this.relayer.transportOpen(),this.restartInProgress&&await new Promise(e=>{const t=setInterval(()=>{this.restartInProgress||(clearInterval(t),e())},this.pollingInterval)})}}var index_es_nn=Object.defineProperty,index_es_Zt=Object.getOwnPropertySymbols,index_es_on=Object.prototype.hasOwnProperty,index_es_an=Object.prototype.propertyIsEnumerable,Qt=(o,e,t)=>e in o?index_es_nn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,cn=(o,e)=>{for(var t in e||(e={}))index_es_on.call(e,t)&&Qt(o,t,e[t]);if(index_es_Zt)for(var t of index_es_Zt(e))index_es_an.call(e,t)&&Qt(o,t,e[t]);return o};class ei extends index_es_u{constructor(e){super(e),this.protocol="wc",this.version=2,this.events=new events.EventEmitter,this.name=vt,this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.connectionStatusPollingInterval=20,this.staleConnectionErrors=["socket hang up","stalled","interrupted"],this.hasExperiencedNetworkDisruption=!1,this.requestsInFlight=new Map,this.heartBeatTimeout=(0,cjs.toMiliseconds)(cjs.THIRTY_SECONDS+cjs.ONE_SECOND),this.request=async t=>{var s,i;this.logger.debug("Publishing Request Payload");const r=t.id||getBigIntRpcId().toString();await this.toEstablishConnection();try{const n=this.provider.request(t);this.requestsInFlight.set(r,{promise:n,request:t}),this.logger.trace({id:r,method:t.method,topic:(s=t.params)==null?void 0:s.topic},"relayer.request - attempt to publish...");const a=await new Promise(async(c,h)=>{const d=()=>{h(new Error(`relayer.request - publish interrupted, id: ${r}`))};this.provider.on(index_es_T.disconnect,d);const g=await n;this.provider.off(index_es_T.disconnect,d),c(g)});return this.logger.trace({id:r,method:t.method,topic:(i=t.params)==null?void 0:i.topic},"relayer.request - published"),a}catch(n){throw this.logger.debug(`Failed to Publish Request: ${r}`),n}finally{this.requestsInFlight.delete(r)}},this.resetPingTimeout=()=>{if(bi())try{clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var t,s,i;(i=(s=(t=this.provider)==null?void 0:t.connection)==null?void 0:s.socket)==null||i.terminate()},this.heartBeatTimeout)}catch(t){this.logger.warn(t)}},this.onPayloadHandler=t=>{this.onProviderPayload(t),this.resetPingTimeout()},this.onConnectHandler=()=>{this.logger.trace("relayer connected"),this.startPingTimeout(),this.events.emit(core_dist_index_es_w.connect)},this.onDisconnectHandler=()=>{this.logger.trace("relayer disconnected"),this.onProviderDisconnect()},this.onProviderErrorHandler=t=>{this.logger.error(t),this.events.emit(core_dist_index_es_w.error,t),this.logger.info("Fatal socket error received, closing transport"),this.transportClose()},this.registerProviderListeners=()=>{this.provider.on(index_es_T.payload,this.onPayloadHandler),this.provider.on(index_es_T.connect,this.onConnectHandler),this.provider.on(index_es_T.disconnect,this.onDisconnectHandler),this.provider.on(index_es_T.error,this.onProviderErrorHandler)},this.core=e.core,this.logger=typeof e.logger<"u"&&typeof e.logger!="string"?dist_index_es_E(e.logger,this.name):browser_default()(dist_index_es_k({level:e.logger||Et})),this.messages=new index_es_Yt(this.logger,e.core),this.subscriber=new Xt(this,this.logger),this.publisher=new index_es_Xr(this,this.logger),this.relayUrl=e?.relayUrl||Ie,this.projectId=e.projectId,this.bundleId=index_es_ts(),this.provider={}}async init(){if(this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),this.initialized=!0,this.subscriber.cached.length>0)try{await this.transportOpen()}catch(e){this.logger.warn(e)}}get context(){return index_es_y(this.logger)}get connected(){var e,t,s;return((s=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:s.readyState)===1}get connecting(){var e,t,s;return((s=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:s.readyState)===0}async publish(e,t,s){this.isInitialized(),await this.publisher.publish(e,t,s),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now(),transportType:F.relay})}async subscribe(e,t){var s;this.isInitialized(),t?.transportType==="relay"&&await this.toEstablishConnection();let i=((s=this.subscriber.topicMap.get(e))==null?void 0:s[0])||"",r;const n=a=>{a.topic===e&&(this.subscriber.off(index_es_A.created,n),r())};return await Promise.all([new Promise(a=>{r=a,this.subscriber.on(index_es_A.created,n)}),new Promise(async a=>{i=await this.subscriber.subscribe(e,t)||i,a()})]),i}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportDisconnect(){if(!this.hasExperiencedNetworkDisruption&&this.connected&&this.requestsInFlight.size>0)try{await Promise.all(Array.from(this.requestsInFlight.values()).map(e=>e.promise))}catch(e){this.logger.warn(e)}this.hasExperiencedNetworkDisruption||this.connected?await ds(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),await this.createProvider(),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;try{await new Promise(async(t,s)=>{const i=()=>{this.provider.off(index_es_T.disconnect,i),s(new Error("Connection interrupted while trying to subscribe"))};this.provider.on(index_es_T.disconnect,i),await ds(this.provider.connect(),(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),`Socket stalled when trying to connect to ${this.relayUrl}`).catch(r=>{s(r)}).finally(()=>{clearTimeout(this.reconnectTimeout),this.reconnectTimeout=void 0}),this.subscriber.start().catch(r=>{this.logger.error(r),this.onDisconnectHandler()}),this.hasExperiencedNetworkDisruption=!1,t()})}catch(t){this.logger.error(t);const s=t;if(this.hasExperiencedNetworkDisruption=!0,!this.isConnectionStalled(s.message))throw t}finally{this.connectionAttemptInProgress=!1}}async restartTransport(e){this.connectionAttemptInProgress||(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await Eh())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(e?.length===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const t=e.sort((s,i)=>s.publishedAt-i.publishedAt);this.logger.trace(`Batch of ${t.length} message events sorted`);for(const s of t)try{await this.onMessageEvent(s)}catch(i){this.logger.warn(i)}this.logger.trace(`Batch of ${t.length} message events processed`)}async onLinkMessageEvent(e,t){const{topic:s}=e;if(!t.sessionExists){const i=ms(cjs.FIVE_MINUTES),r={topic:s,expiry:i,relay:{protocol:"irn"},active:!1};await this.core.pairing.pairings.set(s,r)}this.events.emit(core_dist_index_es_w.message,e),await this.recordMessageEvent(e)}startPingTimeout(){var e,t,s,i,r;if(bi())try{(t=(e=this.provider)==null?void 0:e.connection)!=null&&t.socket&&((r=(i=(s=this.provider)==null?void 0:s.connection)==null?void 0:i.socket)==null||r.once("ping",()=>{this.resetPingTimeout()})),this.resetPingTimeout()}catch(n){this.logger.warn(n)}}isConnectionStalled(e){return this.staleConnectionErrors.some(t=>e.includes(t))}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new dist_index_es_o(new dist_index_es_f(is({sdkVersion:Te,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId}))),this.registerProviderListeners()}async recordMessageEvent(e){const{topic:t,message:s}=e;await this.messages.set(t,s)}async shouldIgnoreMessageEvent(e){const{topic:t,message:s}=e;if(!s||s.length===0)return this.logger.debug(`Ignoring invalid/empty message: ${s}`),!0;if(!await this.subscriber.isSubscribed(t))return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),!0;const i=this.messages.has(t,s);return i&&this.logger.debug(`Ignoring duplicate message: ${s}`),i}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),isJsonRpcRequest(e)){if(!e.method.endsWith(wt))return;const t=e.params,{topic:s,message:i,publishedAt:r,attestation:n}=t.data,a={topic:s,message:i,publishedAt:r,transportType:F.relay,attestation:n};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(cn({type:"event",event:t.id},a)),this.events.emit(t.id,a),await this.acknowledgePayload(e),await this.onMessageEvent(a)}else isJsonRpcResponse(e)&&this.events.emit(core_dist_index_es_w.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(this.events.emit(core_dist_index_es_w.message,e),await this.recordMessageEvent(e))}async acknowledgePayload(e){const t=formatJsonRpcResult(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(index_es_T.payload,this.onPayloadHandler),this.provider.off(index_es_T.connect,this.onConnectHandler),this.provider.off(index_es_T.disconnect,this.onDisconnectHandler),this.provider.off(index_es_T.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await Eh();Sh(async t=>{e!==t&&(e=t,t?await this.restartTransport().catch(s=>this.logger.error(s)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))})}async onProviderDisconnect(){await this.subscriber.stop(),this.requestsInFlight.clear(),clearTimeout(this.pingTimeout),this.events.emit(core_dist_index_es_w.disconnect),this.connectionAttemptInProgress=!1,!this.transportExplicitlyClosed&&(this.reconnectTimeout||(this.reconnectTimeout=setTimeout(async()=>{await this.transportOpen().catch(e=>this.logger.error(e))},(0,cjs.toMiliseconds)(It))))}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){await this.confirmOnlineStateOrThrow(),!this.connected&&(this.connectionAttemptInProgress&&await new Promise(e=>{const t=setInterval(()=>{this.connected&&(clearInterval(t),e())},this.connectionStatusPollingInterval)}),await this.transportOpen())}}var hn=Object.defineProperty,ti=Object.getOwnPropertySymbols,index_es_ln=Object.prototype.hasOwnProperty,index_es_un=Object.prototype.propertyIsEnumerable,ii=(o,e,t)=>e in o?hn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,si=(o,e)=>{for(var t in e||(e={}))index_es_ln.call(e,t)&&ii(o,t,e[t]);if(ti)for(var t of ti(e))index_es_un.call(e,t)&&ii(o,t,e[t]);return o};class ri extends dist_index_es_p{constructor(e,t,s,i=dist_index_es_O,r=void 0){super(e,t,s,i),this.core=e,this.logger=t,this.name=s,this.map=new Map,this.version=index_es_Tt,this.cached=[],this.initialized=!1,this.storagePrefix=dist_index_es_O,this.recentlyDeleted=[],this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(n=>{this.getKey&&n!==null&&!Pe(n)?this.map.set(this.getKey(n),n):sh(n)?this.map.set(n.id,n):ah(n)&&this.map.set(n.topic,n)}),this.cached=[],this.initialized=!0)},this.set=async(n,a)=>{this.isInitialized(),this.map.has(n)?await this.update(n,a):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:n,value:a}),this.map.set(n,a),await this.persist())},this.get=n=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:n}),this.getData(n)),this.getAll=n=>(this.isInitialized(),n?this.values.filter(a=>Object.keys(n).every(c=>lodash_isequal_default()(a[c],n[c]))):this.values),this.update=async(n,a)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:n,update:a});const c=si(si({},this.getData(n)),a);this.map.set(n,c),await this.persist()},this.delete=async(n,a)=>{this.isInitialized(),this.map.has(n)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:n,reason:a}),this.map.delete(n),this.addToRecentlyDeleted(n),await this.persist())},this.logger=dist_index_es_E(t,this.name),this.storagePrefix=i,this.getKey=r}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:i}=xe("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(i),new Error(i)}const{message:s}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class ni{constructor(e,t){this.core=e,this.logger=t,this.name=xt,this.version=index_es_Ot,this.events=new (events_default()),this.initialized=!1,this.storagePrefix=dist_index_es_O,this.ignoredPayloadTypes=[pr],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))},this.register=({methods:s})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...s])]},this.create=async s=>{this.isInitialized();const i=Eu(),r=await this.core.crypto.setSymKey(i),n=ms(cjs.FIVE_MINUTES),a={protocol:_t},c={topic:r,expiry:n,relay:a,active:!1},h=Gu({protocol:this.core.protocol,version:this.core.version,topic:r,symKey:i,relay:a,expiryTimestamp:n,methods:s?.methods});return this.core.expirer.set(r,n),await this.pairings.set(r,c),await this.core.relayer.subscribe(r,{transportType:s?.transportType}),{topic:r,uri:h}},this.pair=async s=>{this.isInitialized();const i=this.core.eventClient.createEvent({properties:{topic:s?.uri,trace:[core_dist_index_es_z.pairing_started]}});this.isValidPair(s,i);const{topic:r,symKey:n,relay:a,expiryTimestamp:c,methods:h}=Ju(s.uri);i.props.properties.topic=r,i.addTrace(core_dist_index_es_z.pairing_uri_validation_success),i.addTrace(core_dist_index_es_z.pairing_uri_not_expired);let d;if(this.pairings.keys.includes(r)){if(d=this.pairings.get(r),i.addTrace(core_dist_index_es_z.existing_pairing),d.active)throw i.setError($.active_pairing_already_exists),new Error(`Pairing already exists: ${r}. Please try again with a new connection URI.`);i.addTrace(core_dist_index_es_z.pairing_not_expired)}const g=c||ms(cjs.FIVE_MINUTES),m={topic:r,relay:a,expiry:g,active:!1,methods:h};this.core.expirer.set(r,g),await this.pairings.set(r,m),i.addTrace(core_dist_index_es_z.store_new_pairing),s.activatePairing&&await this.activate({topic:r}),this.events.emit(Z.create,m),i.addTrace(core_dist_index_es_z.emit_inactive_pairing),this.core.crypto.keychain.has(r)||await this.core.crypto.setSymKey(n,r),i.addTrace(core_dist_index_es_z.subscribing_pairing_topic);try{await this.core.relayer.confirmOnlineStateOrThrow()}catch{i.setError($.no_internet_connection)}try{await this.core.relayer.subscribe(r,{relay:a})}catch(b){throw i.setError($.subscribe_pairing_topic_failure),b}return i.addTrace(core_dist_index_es_z.subscribe_pairing_topic_success),m},this.activate=async({topic:s})=>{this.isInitialized();const i=ms(cjs.THIRTY_DAYS);this.core.expirer.set(s,i),await this.pairings.update(s,{active:!0,expiry:i})},this.ping=async s=>{this.isInitialized(),await this.isValidPing(s);const{topic:i}=s;if(this.pairings.keys.includes(i)){const r=await this.sendRequest(i,"wc_pairingPing",{}),{done:n,resolve:a,reject:c}=ls();this.events.once(bs("pairing_ping",r),({error:h})=>{h?c(h):a()}),await n()}},this.updateExpiry=async({topic:s,expiry:i})=>{this.isInitialized(),await this.pairings.update(s,{expiry:i})},this.updateMetadata=async({topic:s,metadata:i})=>{this.isInitialized(),await this.pairings.update(s,{peerMetadata:i})},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async s=>{this.isInitialized(),await this.isValidDisconnect(s);const{topic:i}=s;this.pairings.keys.includes(i)&&(await this.sendRequest(i,"wc_pairingDelete",er("USER_DISCONNECTED")),await this.deletePairing(i))},this.sendRequest=async(s,i,r)=>{const n=formatJsonRpcRequest(i,r),a=await this.core.crypto.encode(s,n),c=dist_index_es_j[i].req;return this.core.history.set(s,n),this.core.relayer.publish(s,a,c),n.id},this.sendResult=async(s,i,r)=>{const n=formatJsonRpcResult(s,r),a=await this.core.crypto.encode(i,n),c=await this.core.history.get(i,s),h=dist_index_es_j[c.request.method].res;await this.core.relayer.publish(i,a,h),await this.core.history.resolve(n)},this.sendError=async(s,i,r)=>{const n=formatJsonRpcError(s,r),a=await this.core.crypto.encode(i,n),c=await this.core.history.get(i,s),h=dist_index_es_j[c.request.method]?dist_index_es_j[c.request.method].res:dist_index_es_j.unregistered_method.res;await this.core.relayer.publish(i,a,h),await this.core.history.resolve(n)},this.deletePairing=async(s,i)=>{await this.core.relayer.unsubscribe(s),await Promise.all([this.pairings.delete(s,er("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(s),i?Promise.resolve():this.core.expirer.del(s)])},this.cleanup=async()=>{const s=this.pairings.getAll().filter(i=>As(i.expiry));await Promise.all(s.map(i=>this.deletePairing(i.topic)))},this.onRelayEventRequest=s=>{const{topic:i,payload:r}=s;switch(r.method){case"wc_pairingPing":return this.onPairingPingRequest(i,r);case"wc_pairingDelete":return this.onPairingDeleteRequest(i,r);default:return this.onUnknownRpcMethodRequest(i,r)}},this.onRelayEventResponse=async s=>{const{topic:i,payload:r}=s,n=(await this.core.history.get(i,r.id)).request.method;switch(n){case"wc_pairingPing":return this.onPairingPingResponse(i,r);default:return this.onUnknownRpcMethodResponse(n)}},this.onPairingPingRequest=async(s,i)=>{const{id:r}=i;try{this.isValidPing({topic:s}),await this.sendResult(r,s,!0),this.events.emit(Z.ping,{id:r,topic:s})}catch(n){await this.sendError(r,s,n),this.logger.error(n)}},this.onPairingPingResponse=(s,i)=>{const{id:r}=i;setTimeout(()=>{isJsonRpcResult(i)?this.events.emit(bs("pairing_ping",r),{}):isJsonRpcError(i)&&this.events.emit(bs("pairing_ping",r),{error:i.error})},500)},this.onPairingDeleteRequest=async(s,i)=>{const{id:r}=i;try{this.isValidDisconnect({topic:s}),await this.deletePairing(s),this.events.emit(Z.delete,{id:r,topic:s})}catch(n){await this.sendError(r,s,n),this.logger.error(n)}},this.onUnknownRpcMethodRequest=async(s,i)=>{const{id:r,method:n}=i;try{if(this.registeredMethods.includes(n))return;const a=er("WC_METHOD_UNSUPPORTED",n);await this.sendError(r,s,a),this.logger.error(a)}catch(a){await this.sendError(r,s,a),this.logger.error(a)}},this.onUnknownRpcMethodResponse=s=>{this.registeredMethods.includes(s)||this.logger.error(er("WC_METHOD_UNSUPPORTED",s))},this.isValidPair=(s,i)=>{var r;if(!dh(s)){const{message:a}=xe("MISSING_OR_INVALID",`pair() params: ${s}`);throw i.setError($.malformed_pairing_uri),new Error(a)}if(!oh(s.uri)){const{message:a}=xe("MISSING_OR_INVALID",`pair() uri: ${s.uri}`);throw i.setError($.malformed_pairing_uri),new Error(a)}const n=Ju(s?.uri);if(!((r=n?.relay)!=null&&r.protocol)){const{message:a}=xe("MISSING_OR_INVALID","pair() uri#relay-protocol");throw i.setError($.malformed_pairing_uri),new Error(a)}if(!(n!=null&&n.symKey)){const{message:a}=xe("MISSING_OR_INVALID","pair() uri#symKey");throw i.setError($.malformed_pairing_uri),new Error(a)}if(n!=null&&n.expiryTimestamp&&(0,cjs.toMiliseconds)(n?.expiryTimestamp)<Date.now()){i.setError($.pairing_expired);const{message:a}=xe("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(a)}},this.isValidPing=async s=>{if(!dh(s)){const{message:r}=xe("MISSING_OR_INVALID",`ping() params: ${s}`);throw new Error(r)}const{topic:i}=s;await this.isValidPairingTopic(i)},this.isValidDisconnect=async s=>{if(!dh(s)){const{message:r}=xe("MISSING_OR_INVALID",`disconnect() params: ${s}`);throw new Error(r)}const{topic:i}=s;await this.isValidPairingTopic(i)},this.isValidPairingTopic=async s=>{if(!Yt(s,!1)){const{message:i}=xe("MISSING_OR_INVALID",`pairing topic should be a string: ${s}`);throw new Error(i)}if(!this.pairings.keys.includes(s)){const{message:i}=xe("NO_MATCHING_KEY",`pairing topic doesn't exist: ${s}`);throw new Error(i)}if(As(this.pairings.get(s).expiry)){await this.deletePairing(s);const{message:i}=xe("EXPIRED",`pairing topic: ${s}`);throw new Error(i)}},this.core=e,this.logger=dist_index_es_E(t,this.name),this.pairings=new ri(this.core,this.logger,this.name,this.storagePrefix)}get context(){return index_es_y(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(core_dist_index_es_w.message,async e=>{const{topic:t,message:s,transportType:i}=e;if(!this.pairings.keys.includes(t)||i===F.link_mode||this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s)))return;const r=await this.core.crypto.decode(t,s);try{isJsonRpcRequest(r)?(this.core.history.set(t,r),this.onRelayEventRequest({topic:t,payload:r})):isJsonRpcResponse(r)&&(await this.core.history.resolve(r),await this.onRelayEventResponse({topic:t,payload:r}),this.core.history.delete(t,r.id))}catch(n){this.logger.error(n)}})}registerExpirerEvents(){this.core.expirer.on(index_es_R.expired,async e=>{const{topic:t}=gs(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(Z.expire,{topic:t}))})}}class oi extends dist_index_es_h{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.records=new Map,this.events=new events.EventEmitter,this.name=At,this.version=Nt,this.cached=[],this.initialized=!1,this.storagePrefix=dist_index_es_O,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(s=>this.records.set(s.id,s)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.set=(s,i,r)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:s,request:i,chainId:r}),this.records.has(i.id))return;const n={id:i.id,topic:s,request:{method:i.method,params:i.params||null},chainId:r,expiry:ms(cjs.THIRTY_DAYS)};this.records.set(n.id,n),this.persist(),this.events.emit(index_es_P.created,n)},this.resolve=async s=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:s}),!this.records.has(s.id))return;const i=await this.getRecord(s.id);typeof i.response>"u"&&(i.response=isJsonRpcError(s)?{error:s.error}:{result:s.result},this.records.set(i.id,i),this.persist(),this.events.emit(index_es_P.updated,i))},this.get=async(s,i)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:s,id:i}),await this.getRecord(i)),this.delete=(s,i)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:i}),this.values.forEach(r=>{if(r.topic===s){if(typeof i<"u"&&r.id!==i)return;this.records.delete(r.id),this.events.emit(index_es_P.deleted,r)}}),this.persist()},this.exists=async(s,i)=>(this.isInitialized(),this.records.has(i)?(await this.getRecord(i)).topic===s:!1),this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(t=>{if(typeof t.response<"u")return;const s={topic:t.topic,request:formatJsonRpcRequest(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(s)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:s}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(s)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(index_es_P.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(index_es_P.created,e=>{const t=index_es_P.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(index_es_P.updated,e=>{const t=index_es_P.updated;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(index_es_P.deleted,e=>{const t=index_es_P.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.core.heartbeat.on(r.pulse,()=>{this.cleanup()})}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(t=>{(0,cjs.toMiliseconds)(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(index_es_P.deleted,t,!1),e=!0)}),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class ai extends dist_index_es_x{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.expirations=new Map,this.events=new events.EventEmitter,this.name=index_es_Lt,this.version=index_es_zt,this.cached=[],this.initialized=!1,this.storagePrefix=dist_index_es_O,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(s=>this.expirations.set(s.target,s)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.has=s=>{try{const i=this.formatTarget(s);return typeof this.getExpiration(i)<"u"}catch{return!1}},this.set=(s,i)=>{this.isInitialized();const r=this.formatTarget(s),n={target:r,expiry:i};this.expirations.set(r,n),this.checkExpiry(r,n),this.events.emit(index_es_R.created,{target:r,expiration:n})},this.get=s=>{this.isInitialized();const i=this.formatTarget(s);return this.getExpiration(i)},this.del=s=>{if(this.isInitialized(),this.has(s)){const i=this.formatTarget(s),r=this.getExpiration(i);this.expirations.delete(i),this.events.emit(index_es_R.deleted,{target:i,expiration:r})}},this.on=(s,i)=>{this.events.on(s,i)},this.once=(s,i)=>{this.events.once(s,i)},this.off=(s,i)=>{this.events.off(s,i)},this.removeListener=(s,i)=>{this.events.removeListener(s,i)},this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return ps(e);if(typeof e=="number")return vs(e);const{message:t}=xe("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(index_es_R.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:s}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(s),new Error(s)}return t}checkExpiry(e,t){const{expiry:s}=t;(0,cjs.toMiliseconds)(s)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(index_es_R.expired,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,t)=>this.checkExpiry(t,e))}registerEventListeners(){this.core.heartbeat.on(r.pulse,()=>this.checkExpirations()),this.events.on(index_es_R.created,e=>{const t=index_es_R.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(index_es_R.expired,e=>{const t=index_es_R.expired;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(index_es_R.deleted,e=>{const t=index_es_R.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}var core_dist_index_es_y={};Object.defineProperty(core_dist_index_es_y,"__esModule",{value:!0}),core_dist_index_es_y.getLocalStorage=core_dist_index_es_y.getLocalStorageOrThrow=core_dist_index_es_y.getCrypto=core_dist_index_es_y.getCryptoOrThrow=core_dist_index_es_y.getLocation=core_dist_index_es_y.getLocationOrThrow=core_dist_index_es_y.getNavigator=core_dist_index_es_y.getNavigatorOrThrow=ci=core_dist_index_es_y.getDocument=core_dist_index_es_y.getDocumentOrThrow=core_dist_index_es_y.getFromWindowOrThrow=core_dist_index_es_y.getFromWindow=void 0;function U(o){let e;return typeof window<"u"&&typeof window[o]<"u"&&(e=window[o]),e}core_dist_index_es_y.getFromWindow=U;function index_es_q(o){const e=U(o);if(!e)throw new Error(`${o} is not defined in Window`);return e}core_dist_index_es_y.getFromWindowOrThrow=index_es_q;function dn(){return index_es_q("document")}core_dist_index_es_y.getDocumentOrThrow=dn;function gn(){return U("document")}var ci=core_dist_index_es_y.getDocument=gn;function pn(){return index_es_q("navigator")}core_dist_index_es_y.getNavigatorOrThrow=pn;function index_es_yn(){return U("navigator")}core_dist_index_es_y.getNavigator=index_es_yn;function index_es_Dn(){return index_es_q("location")}core_dist_index_es_y.getLocationOrThrow=index_es_Dn;function index_es_mn(){return U("location")}core_dist_index_es_y.getLocation=index_es_mn;function index_es_bn(){return index_es_q("crypto")}core_dist_index_es_y.getCryptoOrThrow=index_es_bn;function index_es_fn(){return U("crypto")}core_dist_index_es_y.getCrypto=index_es_fn;function core_dist_index_es_n(){return index_es_q("localStorage")}core_dist_index_es_y.getLocalStorageOrThrow=core_dist_index_es_n;function index_es_En(){return U("localStorage")}core_dist_index_es_y.getLocalStorage=index_es_En;class hi extends dist_index_es_y{constructor(e,t,s){super(e,t,s),this.core=e,this.logger=t,this.store=s,this.name=Mt,this.verifyUrlV3=index_es_kt,this.storagePrefix=dist_index_es_O,this.version=index_es_ve,this.init=async()=>{var i;this.isDevEnv||(this.publicKey=await this.store.getItem(this.storeKey),this.publicKey&&(0,cjs.toMiliseconds)((i=this.publicKey)==null?void 0:i.expiresAt)<Date.now()&&(this.logger.debug("verify v2 public key expired"),await this.removePublicKey()))},this.register=async i=>{if(!gr()||this.isDevEnv)return;const r=window.location.origin,{id:n,decryptedId:a}=i,c=`${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r}&id=${n}&decryptedId=${a}`;try{const h=ci(),d=this.startAbortTimer(cjs.ONE_SECOND*5),g=await new Promise((m,b)=>{const l=()=>{window.removeEventListener("message",_),h.body.removeChild(p),b("attestation aborted")};this.abortController.signal.addEventListener("abort",l);const p=h.createElement("iframe");p.src=c,p.style.display="none",p.addEventListener("error",l,{signal:this.abortController.signal});const _=D=>{if(!D.data)return;const E=JSON.parse(D.data);if(E.type==="verify_attestation"){if(utils_decodeJWT(E.attestation).payload.id!==n)return;clearInterval(d),h.body.removeChild(p),this.abortController.signal.removeEventListener("abort",l),window.removeEventListener("message",_),m(E.attestation===null?"":E.attestation)}};h.body.appendChild(p),window.addEventListener("message",_,{signal:this.abortController.signal})});return this.logger.debug("jwt attestation",g),g}catch(h){this.logger.warn(h)}return""},this.resolve=async i=>{if(this.isDevEnv)return"";const{attestationId:r,hash:n,encryptedId:a}=i;if(r===""){this.logger.debug("resolve: attestationId is empty, skipping");return}if(r){if(utils_decodeJWT(r).payload.id!==a)return;const h=await this.isValidJwtAttestation(r);if(h){if(!h.isVerified){this.logger.warn("resolve: jwt attestation: origin url not verified");return}return h}}if(!n)return;const c=this.getVerifyUrl(i?.verifyUrl);return this.fetchAttestation(n,c)},this.fetchAttestation=async(i,r)=>{this.logger.debug(`resolving attestation: ${i} from url: ${r}`);const n=this.startAbortTimer(cjs.ONE_SECOND*5),a=await fetch(`${r}/attestation/${i}?v2Supported=true`,{signal:this.abortController.signal});return clearTimeout(n),a.status===200?await a.json():void 0},this.getVerifyUrl=i=>{let r=i||index_es_Q;return index_es_Ft.includes(r)||(this.logger.info(`verify url: ${r}, not included in trusted list, assigning default: ${index_es_Q}`),r=index_es_Q),r},this.fetchPublicKey=async()=>{try{this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);const i=this.startAbortTimer(cjs.FIVE_SECONDS),r=await fetch(`${this.verifyUrlV3}/public-key`,{signal:this.abortController.signal});return clearTimeout(i),await r.json()}catch(i){this.logger.warn(i)}},this.persistPublicKey=async i=>{this.logger.debug("persisting public key to local storage",i),await this.store.setItem(this.storeKey,i),this.publicKey=i},this.removePublicKey=async()=>{this.logger.debug("removing verify v2 public key from storage"),await this.store.removeItem(this.storeKey),this.publicKey=void 0},this.isValidJwtAttestation=async i=>{const r=await this.getPublicKey();try{if(r)return this.validateAttestation(i,r)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}const n=await this.fetchAndPersistPublicKey();try{if(n)return this.validateAttestation(i,n)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}},this.getPublicKey=async()=>this.publicKey?this.publicKey:await this.fetchAndPersistPublicKey(),this.fetchAndPersistPublicKey=async()=>{if(this.fetchPromise)return await this.fetchPromise,this.publicKey;this.fetchPromise=new Promise(async r=>{const n=await this.fetchPublicKey();n&&(await this.persistPublicKey(n),r(n))});const i=await this.fetchPromise;return this.fetchPromise=void 0,i},this.validateAttestation=(i,r)=>{const n=Uu(i,r.publicKey),a={hasExpired:(0,cjs.toMiliseconds)(n.exp)<Date.now(),payload:n};if(a.hasExpired)throw this.logger.warn("resolve: jwt attestation expired"),new Error("JWT attestation expired");return{origin:a.payload.origin,isScam:a.payload.isScam,isVerified:a.payload.isVerified}},this.logger=dist_index_es_E(t,this.name),this.abortController=new AbortController,this.isDevEnv=bi()&&process.env.IS_VITEST,this.init()}get storeKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//verify:public:key"}get context(){return index_es_y(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),(0,cjs.toMiliseconds)(e))}}class li extends index_es_v{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.context=index_es_Ut,this.registerDeviceToken=async s=>{const{clientId:i,token:r,notificationType:n,enableEncrypted:a=!1}=s,c=`${index_es_Kt}/${this.projectId}/clients`;await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:i,type:n,token:r,always_raw:a})})},this.logger=dist_index_es_E(t,this.context)}}var vn=Object.defineProperty,ui=Object.getOwnPropertySymbols,index_es_wn=Object.prototype.hasOwnProperty,index_es_In=Object.prototype.propertyIsEnumerable,di=(o,e,t)=>e in o?vn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_te=(o,e)=>{for(var t in e||(e={}))index_es_wn.call(e,t)&&di(o,t,e[t]);if(ui)for(var t of ui(e))index_es_In.call(e,t)&&di(o,t,e[t]);return o};class index_es_gi extends types_dist_index_es_C{constructor(e,t,s=!0){super(e,t,s),this.core=e,this.logger=t,this.context=Vt,this.storagePrefix=dist_index_es_O,this.storageVersion=Bt,this.events=new Map,this.shouldPersist=!1,this.createEvent=i=>{const{event:r="ERROR",type:n="",properties:{topic:a,trace:c}}=i,h=Ms(),d=this.core.projectId||"",g=Date.now(),m=index_es_te({eventId:h,bundleId:d,timestamp:g,props:{event:r,type:n,properties:{topic:a,trace:c}}},this.setMethods(h));return this.telemetryEnabled&&(this.events.set(h,m),this.shouldPersist=!0),m},this.getEvent=i=>{const{eventId:r,topic:n}=i;if(r)return this.events.get(r);const a=Array.from(this.events.values()).find(c=>c.props.properties.topic===n);if(a)return index_es_te(index_es_te({},a),this.setMethods(a.eventId))},this.deleteEvent=i=>{const{eventId:r}=i;this.events.delete(r),this.shouldPersist=!0},this.setEventListeners=()=>{this.core.heartbeat.on(r.pulse,async()=>{this.shouldPersist&&await this.persist(),this.events.forEach(i=>{(0,cjs.fromMiliseconds)(Date.now())-(0,cjs.fromMiliseconds)(i.timestamp)>index_es_jt&&(this.events.delete(i.eventId),this.shouldPersist=!0)})})},this.setMethods=i=>({addTrace:r=>this.addTrace(i,r),setError:r=>this.setError(i,r)}),this.addTrace=(i,r)=>{const n=this.events.get(i);n&&(n.props.properties.trace.push(r),this.events.set(i,n),this.shouldPersist=!0)},this.setError=(i,r)=>{const n=this.events.get(i);n&&(n.props.type=r,n.timestamp=Date.now(),this.events.set(i,n),this.shouldPersist=!0)},this.persist=async()=>{await this.core.storage.setItem(this.storageKey,Array.from(this.events.values())),this.shouldPersist=!1},this.restore=async()=>{try{const i=await this.core.storage.getItem(this.storageKey)||[];if(!i.length)return;i.forEach(r=>{this.events.set(r.eventId,index_es_te(index_es_te({},r),this.setMethods(r.eventId)))})}catch(i){this.logger.warn(i)}},this.submit=async()=>{if(!this.telemetryEnabled||this.events.size===0)return;const i=[];for(const[r,n]of this.events)n.props.type&&i.push(n);if(i.length!==0)try{if((await fetch(`${index_es_qt}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Te}`,{method:"POST",body:JSON.stringify(i)})).ok)for(const r of i)this.events.delete(r.eventId),this.shouldPersist=!0}catch(r){this.logger.warn(r)}},this.logger=dist_index_es_E(t,this.context),s?this.restore().then(async()=>{await this.submit(),this.setEventListeners()}):this.persist()}get storageKey(){return this.storagePrefix+this.storageVersion+this.core.customStoragePrefix+"//"+this.context}}var index_es_Tn=Object.defineProperty,pi=Object.getOwnPropertySymbols,index_es_Cn=Object.prototype.hasOwnProperty,index_es_Sn=Object.prototype.propertyIsEnumerable,index_es_yi=(o,e,t)=>e in o?index_es_Tn(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_Di=(o,e)=>{for(var t in e||(e={}))index_es_Cn.call(e,t)&&index_es_yi(o,t,e[t]);if(pi)for(var t of pi(e))index_es_Sn.call(e,t)&&index_es_yi(o,t,e[t]);return o};class index_es_ae extends types_dist_index_es_n{constructor(e){var t;super(e),this.protocol=Ee,this.version=index_es_ve,this.name=index_es_oe,this.events=new events.EventEmitter,this.initialized=!1,this.on=(n,a)=>this.events.on(n,a),this.once=(n,a)=>this.events.once(n,a),this.off=(n,a)=>this.events.off(n,a),this.removeListener=(n,a)=>this.events.removeListener(n,a),this.dispatchEnvelope=({topic:n,message:a,sessionExists:c})=>{if(!n||!a)return;const h={topic:n,message:a,publishedAt:Date.now(),transportType:F.link_mode};this.relayer.onLinkMessageEvent(h,{sessionExists:c})},this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||Ie,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const s=dist_index_es_k({level:typeof e?.logger=="string"&&e.logger?e.logger:lt.logger}),{logger:i,chunkLoggerController:r}=A({opts:s,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=r,(t=this.logChunkController)!=null&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var n,a;(n=this.logChunkController)!=null&&n.downloadLogsBlobInBrowser&&((a=this.logChunkController)==null||a.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=dist_index_es_E(i,this.name),this.heartbeat=new index_es_i,this.crypto=new index_es_Ht(this,this.logger,e?.keychain),this.history=new oi(this,this.logger),this.expirer=new ai(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new index_es_h(index_es_Di(index_es_Di({},ut),e?.storageOptions)),this.relayer=new ei({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new ni(this,this.logger),this.verify=new hi(this,this.logger,this.storage),this.echoClient=new li(this.projectId||"",this.logger),this.linkModeSupportedApps=[],this.eventClient=new index_es_gi(this,this.logger,e?.telemetryEnabled)}static async init(e){const t=new index_es_ae(e);await t.initialize();const s=await t.crypto.getClientId();return await t.storage.setItem(Ct,s),t}get context(){return index_es_y(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return(e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async addLinkModeSupportedApp(e){this.linkModeSupportedApps.includes(e)||(this.linkModeSupportedApps.push(e),await this.storage.setItem(index_es_Ce,this.linkModeSupportedApps))}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.linkModeSupportedApps=await this.storage.getItem(index_es_Ce)||[],this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}}const index_es_Pn=index_es_ae;
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/sign-client/dist/index.es.js
const dist_index_es_be="wc",dist_index_es_Ce=2,De="client",index_es_ye=`${dist_index_es_be}@${dist_index_es_Ce}:${De}:`,dist_index_es_we={name:De,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.com"},index_es_as={session_proposal:"session_proposal",session_update:"session_update",session_extend:"session_extend",session_ping:"session_ping",session_delete:"session_delete",session_expire:"session_expire",session_request:"session_request",session_request_sent:"session_request_sent",session_event:"session_event",proposal_expire:"proposal_expire",session_authenticate:"session_authenticate",session_request_expire:"session_request_expire"},index_es_cs={database:":memory:"},Le="WALLETCONNECT_DEEPLINK_CHOICE",index_es_ls={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},index_es_ps="history",index_es_hs="0.3",index_es_st="proposal",index_es_ds=(/* unused pure expression or super */ null && (ts)),index_es_it="Proposal expired",index_es_rt="session",sign_client_dist_index_es_z=cjs.SEVEN_DAYS,index_es_nt="engine",dist_index_es_v={wc_sessionPropose:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1104},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1106},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1112},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1114},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:cjs.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:cjs.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1119}}},index_es_me={min:cjs.FIVE_MINUTES,max:cjs.SEVEN_DAYS},index_es_L={idle:"IDLE",active:"ACTIVE"},index_es_ot="request",index_es_at=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],index_es_ct="wc",index_es_us=1.5,index_es_lt="auth",index_es_pt="authKeys",index_es_ht="pairingTopics",index_es_dt="requests",dist_index_es_oe=`${index_es_ct}@${1.5}:${index_es_lt}:`,dist_index_es_ae=`${dist_index_es_oe}:PUB_KEY`;var index_es_gs=Object.defineProperty,index_es_ys=Object.defineProperties,dist_index_es_ws=Object.getOwnPropertyDescriptors,index_es_ut=Object.getOwnPropertySymbols,dist_index_es_ms=Object.prototype.hasOwnProperty,dist_index_es_s=Object.prototype.propertyIsEnumerable,index_es_gt=(q,o,e)=>o in q?index_es_gs(q,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):q[o]=e,dist_index_es_I=(q,o)=>{for(var e in o||(o={}))dist_index_es_ms.call(o,e)&&index_es_gt(q,e,o[e]);if(index_es_ut)for(var e of index_es_ut(o))dist_index_es_s.call(o,e)&&index_es_gt(q,e,o[e]);return q},dist_index_es_V=(q,o)=>index_es_ys(q,dist_index_es_ws(o));class dist_index_es_Es extends M{constructor(o){super(o),this.name=index_es_nt,this.events=new (events_default()),this.initialized=!1,this.requestQueue={state:index_es_L.idle,queue:[]},this.sessionRequestQueue={state:index_es_L.idle,queue:[]},this.requestQueueDelay=cjs.ONE_SECOND,this.expectedPairingMethodMap=new Map,this.recentlyDeletedMap=new Map,this.recentlyDeletedLimit=200,this.relayMessageCache=[],this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(dist_index_es_v)}),this.initialized=!0,setTimeout(()=>{this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay)))},this.connect=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const t=dist_index_es_V(dist_index_es_I({},e),{requiredNamespaces:e.requiredNamespaces||{},optionalNamespaces:e.optionalNamespaces||{}});await this.isValidConnect(t);const{pairingTopic:s,requiredNamespaces:i,optionalNamespaces:r,sessionProperties:n,relays:a}=t;let c=s,h,p=!1;try{c&&(p=this.client.core.pairing.pairings.get(c).active)}catch(E){throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`),E}if(!c||!p){const{topic:E,uri:S}=await this.client.core.pairing.create();c=E,h=S}if(!c){const{message:E}=xe("NO_MATCHING_KEY",`connect() pairing topic: ${c}`);throw new Error(E)}const d=await this.client.core.crypto.generateKeyPair(),l=dist_index_es_v.wc_sessionPropose.req.ttl||cjs.FIVE_MINUTES,w=ms(l),m=dist_index_es_I({requiredNamespaces:i,optionalNamespaces:r,relays:a??[{protocol:_t}],proposer:{publicKey:d,metadata:this.client.metadata},expiryTimestamp:w,pairingTopic:c},n&&{sessionProperties:n}),{reject:y,resolve:_,done:R}=ls(l,index_es_it);this.events.once(bs("session_connect"),async({error:E,session:S})=>{if(E)y(E);else if(S){S.self.publicKey=d;const M=dist_index_es_V(dist_index_es_I({},S),{pairingTopic:m.pairingTopic,requiredNamespaces:m.requiredNamespaces,optionalNamespaces:m.optionalNamespaces,transportType:F.relay});await this.client.session.set(S.topic,M),await this.setExpiry(S.topic,S.expiry),c&&await this.client.core.pairing.updateMetadata({topic:c,metadata:S.peer.metadata}),this.cleanupDuplicatePairings(M),_(M)}});const x=await this.sendRequest({topic:c,method:"wc_sessionPropose",params:m,throwOnFailedPublish:!0});return await this.setProposal(x,dist_index_es_I({id:x},m)),{uri:h,approval:R}},this.pair=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(e)}catch(t){throw this.client.logger.error("pair() failed"),t}},this.approve=async e=>{var t,s,i;const r=this.client.core.eventClient.createEvent({properties:{topic:(t=e?.id)==null?void 0:t.toString(),trace:[index_es_Hr.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(N){throw r.setError(index_es_Yr.no_internet_connection),N}try{await this.isValidProposalId(e?.id)}catch(N){throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`),r.setError(index_es_Yr.proposal_not_found),N}try{await this.isValidApprove(e)}catch(N){throw this.client.logger.error("approve() -> isValidApprove() failed"),r.setError(index_es_Yr.session_approve_namespace_validation_failure),N}const{id:n,relayProtocol:a,namespaces:c,sessionProperties:h,sessionConfig:p}=e,d=this.client.proposal.get(n);this.client.core.eventClient.deleteEvent({eventId:r.eventId});const{pairingTopic:l,proposer:w,requiredNamespaces:m,optionalNamespaces:y}=d;let _=(s=this.client.core.eventClient)==null?void 0:s.getEvent({topic:l});_||(_=(i=this.client.core.eventClient)==null?void 0:i.createEvent({type:index_es_Hr.session_approve_started,properties:{topic:l,trace:[index_es_Hr.session_approve_started,index_es_Hr.session_namespaces_validation_success]}}));const R=await this.client.core.crypto.generateKeyPair(),x=w.publicKey,E=await this.client.core.crypto.generateSharedKey(R,x),S=dist_index_es_I(dist_index_es_I({relay:{protocol:a??"irn"},namespaces:c,controller:{publicKey:R,metadata:this.client.metadata},expiry:ms(sign_client_dist_index_es_z)},h&&{sessionProperties:h}),p&&{sessionConfig:p}),M=F.relay;_.addTrace(index_es_Hr.subscribing_session_topic);try{await this.client.core.relayer.subscribe(E,{transportType:M})}catch(N){throw _.setError(index_es_Yr.subscribe_session_topic_failure),N}_.addTrace(index_es_Hr.subscribe_session_topic_success);const W=dist_index_es_V(dist_index_es_I({},S),{topic:E,requiredNamespaces:m,optionalNamespaces:y,pairingTopic:l,acknowledged:!1,self:S.controller,peer:{publicKey:w.publicKey,metadata:w.metadata},controller:R,transportType:F.relay});await this.client.session.set(E,W),_.addTrace(index_es_Hr.store_session);try{_.addTrace(index_es_Hr.publishing_session_settle),await this.sendRequest({topic:E,method:"wc_sessionSettle",params:S,throwOnFailedPublish:!0}).catch(N=>{throw _?.setError(index_es_Yr.session_settle_publish_failure),N}),_.addTrace(index_es_Hr.session_settle_publish_success),_.addTrace(index_es_Hr.publishing_session_approve),await this.sendResult({id:n,topic:l,result:{relay:{protocol:a??"irn"},responderPublicKey:R},throwOnFailedPublish:!0}).catch(N=>{throw _?.setError(index_es_Yr.session_approve_publish_failure),N}),_.addTrace(index_es_Hr.session_approve_publish_success)}catch(N){throw this.client.logger.error(N),this.client.session.delete(E,er("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(E),N}return this.client.core.eventClient.deleteEvent({eventId:_.eventId}),await this.client.core.pairing.updateMetadata({topic:l,metadata:w.metadata}),await this.client.proposal.delete(n,er("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:l}),await this.setExpiry(E,ms(sign_client_dist_index_es_z)),{topic:E,acknowledged:()=>Promise.resolve(this.client.session.get(E))}},this.reject=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(e)}catch(r){throw this.client.logger.error("reject() -> isValidReject() failed"),r}const{id:t,reason:s}=e;let i;try{i=this.client.proposal.get(t).pairingTopic}catch(r){throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`),r}i&&(await this.sendError({id:t,topic:i,error:s,rpcOpts:dist_index_es_v.wc_sessionPropose.reject}),await this.client.proposal.delete(t,er("USER_DISCONNECTED")))},this.update=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(e)}catch(p){throw this.client.logger.error("update() -> isValidUpdate() failed"),p}const{topic:t,namespaces:s}=e,{done:i,resolve:r,reject:n}=ls(),a=payloadId(),c=getBigIntRpcId().toString(),h=this.client.session.get(t).namespaces;return this.events.once(bs("session_update",a),({error:p})=>{p?n(p):r()}),await this.client.session.update(t,{namespaces:s}),await this.sendRequest({topic:t,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:a,relayRpcId:c}).catch(p=>{this.client.logger.error(p),this.client.session.update(t,{namespaces:h}),n(p)}),{acknowledged:i}},this.extend=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(e)}catch(a){throw this.client.logger.error("extend() -> isValidExtend() failed"),a}const{topic:t}=e,s=payloadId(),{done:i,resolve:r,reject:n}=ls();return this.events.once(bs("session_extend",s),({error:a})=>{a?n(a):r()}),await this.setExpiry(t,ms(sign_client_dist_index_es_z)),this.sendRequest({topic:t,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(a=>{n(a)}),{acknowledged:i}},this.request=async e=>{this.isInitialized();try{await this.isValidRequest(e)}catch(w){throw this.client.logger.error("request() -> isValidRequest() failed"),w}const{chainId:t,request:s,topic:i,expiry:r=dist_index_es_v.wc_sessionRequest.req.ttl}=e,n=this.client.session.get(i);n?.transportType===F.relay&&await this.confirmOnlineStateOrThrow();const a=payloadId(),c=getBigIntRpcId().toString(),{done:h,resolve:p,reject:d}=ls(r,"Request expired. Please try again.");this.events.once(bs("session_request",a),({error:w,result:m})=>{w?d(w):p(m)});const l=this.getAppLinkIfEnabled(n.peer.metadata,n.transportType);return l?(await this.sendRequest({clientRpcId:a,relayRpcId:c,topic:i,method:"wc_sessionRequest",params:{request:dist_index_es_V(dist_index_es_I({},s),{expiryTimestamp:ms(r)}),chainId:t},expiry:r,throwOnFailedPublish:!0,appLink:l}).catch(w=>d(w)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:t,id:a}),await h()):await Promise.all([new Promise(async w=>{await this.sendRequest({clientRpcId:a,relayRpcId:c,topic:i,method:"wc_sessionRequest",params:{request:dist_index_es_V(dist_index_es_I({},s),{expiryTimestamp:ms(r)}),chainId:t},expiry:r,throwOnFailedPublish:!0}).catch(m=>d(m)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:t,id:a}),w()}),new Promise(async w=>{var m;if(!((m=n.sessionConfig)!=null&&m.disableDeepLink)){const y=await ws(this.client.core.storage,Le);ys({id:a,topic:i,wcDeepLink:y})}w()}),h()]).then(w=>w[2])},this.respond=async e=>{this.isInitialized(),await this.isValidRespond(e);const{topic:t,response:s}=e,{id:i}=s,r=this.client.session.get(t);r.transportType===F.relay&&await this.confirmOnlineStateOrThrow();const n=this.getAppLinkIfEnabled(r.peer.metadata,r.transportType);isJsonRpcResult(s)?await this.sendResult({id:i,topic:t,result:s.result,throwOnFailedPublish:!0,appLink:n}):isJsonRpcError(s)&&await this.sendError({id:i,topic:t,error:s.error,appLink:n}),this.cleanupAfterResponse(e)},this.ping=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(e)}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:t}=e;if(this.client.session.keys.includes(t)){const s=payloadId(),i=getBigIntRpcId().toString(),{done:r,resolve:n,reject:a}=ls();this.events.once(bs("session_ping",s),({error:c})=>{c?a(c):n()}),await Promise.all([this.sendRequest({topic:t,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:i}),r()])}else this.client.core.pairing.pairings.keys.includes(t)&&await this.client.core.pairing.ping({topic:t})},this.emit=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(e);const{topic:t,event:s,chainId:i}=e,r=getBigIntRpcId().toString();await this.sendRequest({topic:t,method:"wc_sessionEvent",params:{event:s,chainId:i},throwOnFailedPublish:!0,relayRpcId:r})},this.disconnect=async e=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(e);const{topic:t}=e;if(this.client.session.keys.includes(t))await this.sendRequest({topic:t,method:"wc_sessionDelete",params:er("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:t,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(t))await this.client.core.pairing.disconnect({topic:t});else{const{message:s}=xe("MISMATCHED_TOPIC",`Session or pairing topic not found: ${t}`);throw new Error(s)}},this.find=e=>(this.isInitialized(),this.client.session.getAll().filter(t=>fh(t,e))),this.getPendingSessionRequests=()=>this.client.pendingRequest.getAll(),this.authenticate=async(e,t)=>{var s;this.isInitialized(),this.isValidAuthenticate(e);const i=t&&this.client.core.linkModeSupportedApps.includes(t)&&((s=this.client.metadata.redirect)==null?void 0:s.linkMode),r=i?F.link_mode:F.relay;r===F.relay&&await this.confirmOnlineStateOrThrow();const{chains:n,statement:a="",uri:c,domain:h,nonce:p,type:d,exp:l,nbf:w,methods:m=[],expiry:y}=e,_=[...e.resources||[]],{topic:R,uri:x}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:r});this.client.logger.info({message:"Generated new pairing",pairing:{topic:R,uri:x}});const E=await this.client.core.crypto.generateKeyPair(),S=Nu(E);if(await Promise.all([this.client.auth.authKeys.set(dist_index_es_ae,{responseTopic:S,publicKey:E}),this.client.auth.pairingTopics.set(S,{topic:S,pairingTopic:R})]),await this.client.core.relayer.subscribe(S,{transportType:r}),this.client.logger.info(`sending request to new pairing topic: ${R}`),m.length>0){const{namespace:O}=mn(n[0]);let T=mu(O,"request",m);Vr(_)&&(T=Au(T,_.pop())),_.push(T)}const M=y&&y>dist_index_es_v.wc_sessionAuthenticate.req.ttl?y:dist_index_es_v.wc_sessionAuthenticate.req.ttl,W={authPayload:{type:d??"caip122",chains:n,statement:a,aud:c,domain:h,version:"1",nonce:p,iat:new Date().toISOString(),exp:l,nbf:w,resources:_},requester:{publicKey:E,metadata:this.client.metadata},expiryTimestamp:ms(M)},N={eip155:{chains:n,methods:[...new Set(["personal_sign",...m])],events:["chainChanged","accountsChanged"]}},Ve={requiredNamespaces:{},optionalNamespaces:N,relays:[{protocol:"irn"}],pairingTopic:R,proposer:{publicKey:E,metadata:this.client.metadata},expiryTimestamp:ms(dist_index_es_v.wc_sessionPropose.req.ttl)},{done:wt,resolve:xe,reject:Ee}=ls(M,"Request expired"),ce=async({error:O,session:T})=>{if(this.events.off(bs("session_request",G),Re),O)Ee(O);else if(T){T.self.publicKey=E,await this.client.session.set(T.topic,T),await this.setExpiry(T.topic,T.expiry),R&&await this.client.core.pairing.updateMetadata({topic:R,metadata:T.peer.metadata});const le=this.client.session.get(T.topic);await this.deleteProposal(Z),xe({session:le})}},Re=async O=>{var T,le,Me;if(await this.deletePendingAuthRequest(G,{message:"fulfilled",code:0}),O.error){const te=er("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return O.error.code===te.code?void 0:(this.events.off(bs("session_connect"),ce),Ee(O.error.message))}await this.deleteProposal(Z),this.events.off(bs("session_connect"),ce);const{cacaos:ke,responder:j}=O.result,Ie=[],$e=[];for(const te of ke){await lu({cacao:te,projectId:this.client.core.projectId})||(this.client.logger.error(te,"Signature verification failed"),Ee(er("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:fe}=te,ve=Vr(fe.resources),Ke=[cu(fe.iss)],mt=Yi(fe.iss);if(ve){const qe=bu(ve),_t=yu(ve);Ie.push(...qe),Ke.push(..._t)}for(const qe of Ke)$e.push(`${qe}:${mt}`)}const ee=await this.client.core.crypto.generateSharedKey(E,j.publicKey);let pe;Ie.length>0&&(pe={topic:ee,acknowledged:!0,self:{publicKey:E,metadata:this.client.metadata},peer:j,controller:j.publicKey,expiry:ms(sign_client_dist_index_es_z),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:R,namespaces:nh([...new Set(Ie)],[...new Set($e)]),transportType:r},await this.client.core.relayer.subscribe(ee,{transportType:r}),await this.client.session.set(ee,pe),R&&await this.client.core.pairing.updateMetadata({topic:R,metadata:j.metadata}),pe=this.client.session.get(ee)),(T=this.client.metadata.redirect)!=null&&T.linkMode&&(le=j.metadata.redirect)!=null&&le.linkMode&&(Me=j.metadata.redirect)!=null&&Me.universal&&t&&(this.client.core.addLinkModeSupportedApp(j.metadata.redirect.universal),this.client.session.update(ee,{transportType:F.link_mode})),xe({auths:ke,session:pe})},G=payloadId(),Z=payloadId();this.events.once(bs("session_connect"),ce),this.events.once(bs("session_request",G),Re);let Se;try{if(i){const O=formatJsonRpcRequest("wc_sessionAuthenticate",W,G);this.client.core.history.set(R,O);const T=await this.client.core.crypto.encode("",O,{type:Sr,encoding:wu});Se=Yu(t,R,T)}else await Promise.all([this.sendRequest({topic:R,method:"wc_sessionAuthenticate",params:W,expiry:e.expiry,throwOnFailedPublish:!0,clientRpcId:G}),this.sendRequest({topic:R,method:"wc_sessionPropose",params:Ve,expiry:dist_index_es_v.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:Z})])}catch(O){throw this.events.off(bs("session_connect"),ce),this.events.off(bs("session_request",G),Re),O}return await this.setProposal(Z,dist_index_es_I({id:Z},Ve)),await this.setAuthRequest(G,{request:dist_index_es_V(dist_index_es_I({},W),{verifyContext:{}}),pairingTopic:R,transportType:r}),{uri:Se??x,response:wt}},this.approveSessionAuthenticate=async e=>{const{id:t,auths:s}=e,i=this.client.core.eventClient.createEvent({properties:{topic:t.toString(),trace:[index_es_Jr.authenticated_session_approve_started]}});try{this.isInitialized()}catch(y){throw i.setError(index_es_Wr.no_internet_connection),y}const r=this.getPendingAuthRequest(t);if(!r)throw i.setError(index_es_Wr.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${t}`);const n=r.transportType||F.relay;n===F.relay&&await this.confirmOnlineStateOrThrow();const a=r.requester.publicKey,c=await this.client.core.crypto.generateKeyPair(),h=Nu(a),p={type:pr,receiverPublicKey:a,senderPublicKey:c},d=[],l=[];for(const y of s){if(!await lu({cacao:y,projectId:this.client.core.projectId})){i.setError(index_es_Wr.invalid_cacao);const S=er("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:t,topic:h,error:S,encodeOpts:p}),new Error(S.message)}i.addTrace(index_es_Jr.cacaos_verified);const{p:_}=y,R=Vr(_.resources),x=[cu(_.iss)],E=Yi(_.iss);if(R){const S=bu(R),M=yu(R);d.push(...S),x.push(...M)}for(const S of x)l.push(`${S}:${E}`)}const w=await this.client.core.crypto.generateSharedKey(c,a);i.addTrace(index_es_Jr.create_authenticated_session_topic);let m;if(d?.length>0){m={topic:w,acknowledged:!0,self:{publicKey:c,metadata:this.client.metadata},peer:{publicKey:a,metadata:r.requester.metadata},controller:a,expiry:ms(sign_client_dist_index_es_z),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:r.pairingTopic,namespaces:nh([...new Set(d)],[...new Set(l)]),transportType:n},i.addTrace(index_es_Jr.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(w,{transportType:n})}catch(y){throw i.setError(index_es_Wr.subscribe_authenticated_session_topic_failure),y}i.addTrace(index_es_Jr.subscribe_authenticated_session_topic_success),await this.client.session.set(w,m),i.addTrace(index_es_Jr.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:r.pairingTopic,metadata:r.requester.metadata})}i.addTrace(index_es_Jr.publishing_authenticated_session_approve);try{await this.sendResult({topic:h,id:t,result:{cacaos:s,responder:{publicKey:c,metadata:this.client.metadata}},encodeOpts:p,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(r.requester.metadata,n)})}catch(y){throw i.setError(index_es_Wr.authenticated_session_approve_publish_failure),y}return await this.client.auth.requests.delete(t,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:r.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:i.eventId}),{session:m}},this.rejectSessionAuthenticate=async e=>{this.isInitialized();const{id:t,reason:s}=e,i=this.getPendingAuthRequest(t);if(!i)throw new Error(`Could not find pending auth request with id ${t}`);i.transportType===F.relay&&await this.confirmOnlineStateOrThrow();const r=i.requester.publicKey,n=await this.client.core.crypto.generateKeyPair(),a=Nu(r),c={type:pr,receiverPublicKey:r,senderPublicKey:n};await this.sendError({id:t,topic:a,error:s,encodeOpts:c,rpcOpts:dist_index_es_v.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(i.requester.metadata,i.transportType)}),await this.client.auth.requests.delete(t,{message:"rejected",code:0}),await this.client.proposal.delete(t,er("USER_DISCONNECTED"))},this.formatAuthMessage=e=>{this.isInitialized();const{request:t,iss:s}=e;return Jf(t,s)},this.processRelayMessageCache=()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const e=this.relayMessageCache.shift();e&&await this.onRelayMessage(e)}catch(e){this.client.logger.error(e)}},50)},this.cleanupDuplicatePairings=async e=>{if(e.pairingTopic)try{const t=this.client.core.pairing.pairings.get(e.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(i=>{var r,n;return((r=i.peerMetadata)==null?void 0:r.url)&&((n=i.peerMetadata)==null?void 0:n.url)===e.peer.metadata.url&&i.topic&&i.topic!==t.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(i=>this.client.core.pairing.disconnect({topic:i.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(t){this.client.logger.error(t)}},this.deleteSession=async e=>{var t;const{topic:s,expirerHasDeleted:i=!1,emitEvent:r=!0,id:n=0}=e,{self:a}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,er("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(a.publicKey)&&await this.client.core.crypto.deleteKeyPair(a.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),i||this.client.core.expirer.del(s),this.client.core.storage.removeItem(Le).catch(c=>this.client.logger.warn(c)),this.getPendingSessionRequests().forEach(c=>{c.topic===s&&this.deletePendingSessionRequest(c.id,er("USER_DISCONNECTED"))}),s===((t=this.sessionRequestQueue.queue[0])==null?void 0:t.topic)&&(this.sessionRequestQueue.state=index_es_L.idle),r&&this.client.events.emit("session_delete",{id:n,topic:s})},this.deleteProposal=async(e,t)=>{if(t)try{const s=this.client.proposal.get(e),i=this.client.core.eventClient.getEvent({topic:s.pairingTopic});i?.setError(index_es_Yr.proposal_expired)}catch{}await Promise.all([this.client.proposal.delete(e,er("USER_DISCONNECTED")),t?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"proposal")},this.deletePendingSessionRequest=async(e,t,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(e,t),s?Promise.resolve():this.client.core.expirer.del(e)]),this.addToRecentlyDeleted(e,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(i=>i.id!==e),s&&(this.sessionRequestQueue.state=index_es_L.idle,this.client.events.emit("session_request_expire",{id:e}))},this.deletePendingAuthRequest=async(e,t,s=!1)=>{await Promise.all([this.client.auth.requests.delete(e,t),s?Promise.resolve():this.client.core.expirer.del(e)])},this.setExpiry=async(e,t)=>{this.client.session.keys.includes(e)&&(this.client.core.expirer.set(e,t),await this.client.session.update(e,{expiry:t}))},this.setProposal=async(e,t)=>{this.client.core.expirer.set(e,ms(dist_index_es_v.wc_sessionPropose.req.ttl)),await this.client.proposal.set(e,t)},this.setAuthRequest=async(e,t)=>{const{request:s,pairingTopic:i,transportType:r=F.relay}=t;this.client.core.expirer.set(e,s.expiryTimestamp),await this.client.auth.requests.set(e,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:e,pairingTopic:i,verifyContext:s.verifyContext,transportType:r})},this.setPendingSessionRequest=async e=>{const{id:t,topic:s,params:i,verifyContext:r}=e,n=i.request.expiryTimestamp||ms(dist_index_es_v.wc_sessionRequest.req.ttl);this.client.core.expirer.set(t,n),await this.client.pendingRequest.set(t,{id:t,topic:s,params:i,verifyContext:r})},this.sendRequest=async e=>{const{topic:t,method:s,params:i,expiry:r,relayRpcId:n,clientRpcId:a,throwOnFailedPublish:c,appLink:h}=e,p=formatJsonRpcRequest(s,i,a);let d;const l=!!h;try{const y=l?wu:$i;d=await this.client.core.crypto.encode(t,p,{encoding:y})}catch(y){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`),y}let w;if(index_es_at.includes(s)){const y=Iu(JSON.stringify(p)),_=Iu(d);w=await this.client.core.verify.register({id:_,decryptedId:y})}const m=dist_index_es_v[s].req;if(m.attestation=w,r&&(m.ttl=r),n&&(m.id=n),this.client.core.history.set(t,p),l){const y=Yu(h,t,d);await __webpack_require__.g.Linking.openURL(y,this.client.name)}else{const y=dist_index_es_v[s].req;r&&(y.ttl=r),n&&(y.id=n),c?(y.internal=dist_index_es_V(dist_index_es_I({},y.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(t,d,y)):this.client.core.relayer.publish(t,d,y).catch(_=>this.client.logger.error(_))}return p.id},this.sendResult=async e=>{const{id:t,topic:s,result:i,throwOnFailedPublish:r,encodeOpts:n,appLink:a}=e,c=formatJsonRpcResult(t,i);let h;const p=a&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u";try{const l=p?wu:$i;h=await this.client.core.crypto.encode(s,c,dist_index_es_V(dist_index_es_I({},n||{}),{encoding:l}))}catch(l){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),l}let d;try{d=await this.client.core.history.get(s,t)}catch(l){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`),l}if(p){const l=Yu(a,s,h);await __webpack_require__.g.Linking.openURL(l,this.client.name)}else{const l=dist_index_es_v[d.request.method].res;r?(l.internal=dist_index_es_V(dist_index_es_I({},l.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,h,l)):this.client.core.relayer.publish(s,h,l).catch(w=>this.client.logger.error(w))}await this.client.core.history.resolve(c)},this.sendError=async e=>{const{id:t,topic:s,error:i,encodeOpts:r,rpcOpts:n,appLink:a}=e,c=formatJsonRpcError(t,i);let h;const p=a&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u";try{const l=p?wu:$i;h=await this.client.core.crypto.encode(s,c,dist_index_es_V(dist_index_es_I({},r||{}),{encoding:l}))}catch(l){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),l}let d;try{d=await this.client.core.history.get(s,t)}catch(l){throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`),l}if(p){const l=Yu(a,s,h);await __webpack_require__.g.Linking.openURL(l,this.client.name)}else{const l=n||dist_index_es_v[d.request.method].res;this.client.core.relayer.publish(s,h,l)}await this.client.core.history.resolve(c)},this.cleanup=async()=>{const e=[],t=[];this.client.session.getAll().forEach(s=>{let i=!1;As(s.expiry)&&(i=!0),this.client.core.crypto.keychain.has(s.topic)||(i=!0),i&&e.push(s.topic)}),this.client.proposal.getAll().forEach(s=>{As(s.expiryTimestamp)&&t.push(s.id)}),await Promise.all([...e.map(s=>this.deleteSession({topic:s})),...t.map(s=>this.deleteProposal(s))])},this.onRelayEventRequest=async e=>{this.requestQueue.queue.push(e),await this.processRequestsQueue()},this.processRequestsQueue=async()=>{if(this.requestQueue.state===index_es_L.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=index_es_L.active;const e=this.requestQueue.queue.shift();if(e)try{await this.processRequest(e)}catch(t){this.client.logger.warn(t)}}this.requestQueue.state=index_es_L.idle},this.processRequest=async e=>{const{topic:t,payload:s,attestation:i,transportType:r,encryptedId:n}=e,a=s.method;if(!this.shouldIgnorePairingRequest({topic:t,requestMethod:a}))switch(a){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:t,payload:s,attestation:i,encryptedId:n});case"wc_sessionSettle":return await this.onSessionSettleRequest(t,s);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(t,s);case"wc_sessionExtend":return await this.onSessionExtendRequest(t,s);case"wc_sessionPing":return await this.onSessionPingRequest(t,s);case"wc_sessionDelete":return await this.onSessionDeleteRequest(t,s);case"wc_sessionRequest":return await this.onSessionRequest({topic:t,payload:s,attestation:i,encryptedId:n,transportType:r});case"wc_sessionEvent":return await this.onSessionEventRequest(t,s);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:t,payload:s,attestation:i,encryptedId:n,transportType:r});default:return this.client.logger.info(`Unsupported request method ${a}`)}},this.onRelayEventResponse=async e=>{const{topic:t,payload:s,transportType:i}=e,r=(await this.client.core.history.get(t,s.id)).request.method;switch(r){case"wc_sessionPropose":return this.onSessionProposeResponse(t,s,i);case"wc_sessionSettle":return this.onSessionSettleResponse(t,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(t,s);case"wc_sessionExtend":return this.onSessionExtendResponse(t,s);case"wc_sessionPing":return this.onSessionPingResponse(t,s);case"wc_sessionRequest":return this.onSessionRequestResponse(t,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(t,s);default:return this.client.logger.info(`Unsupported response method ${r}`)}},this.onRelayEventUnknownPayload=e=>{const{topic:t}=e,{message:s}=xe("MISSING_OR_INVALID",`Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)},this.shouldIgnorePairingRequest=e=>{const{topic:t,requestMethod:s}=e,i=this.expectedPairingMethodMap.get(t);return!i||i.includes(s)?!1:!!(i.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)},this.onSessionProposeRequest=async e=>{const{topic:t,payload:s,attestation:i,encryptedId:r}=e,{params:n,id:a}=s;try{const c=this.client.core.eventClient.getEvent({topic:t});this.isValidConnect(dist_index_es_I({},s.params));const h=n.expiryTimestamp||ms(dist_index_es_v.wc_sessionPropose.req.ttl),p=dist_index_es_I({id:a,pairingTopic:t,expiryTimestamp:h},n);await this.setProposal(a,p);const d=await this.getVerifyContext({attestationId:i,hash:Iu(JSON.stringify(s)),encryptedId:r,metadata:p.proposer.metadata});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),c?.setError($.proposal_listener_not_found)),c?.addTrace(core_dist_index_es_z.emit_session_proposal),this.client.events.emit("session_proposal",{id:a,params:p,verifyContext:d})}catch(c){await this.sendError({id:a,topic:t,error:c,rpcOpts:dist_index_es_v.wc_sessionPropose.autoReject}),this.client.logger.error(c)}},this.onSessionProposeResponse=async(e,t,s)=>{const{id:i}=t;if(isJsonRpcResult(t)){const{result:r}=t;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:r});const n=this.client.proposal.get(i);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:n});const a=n.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:a});const c=r.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:c});const h=await this.client.core.crypto.generateSharedKey(a,c);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:h});const p=await this.client.core.relayer.subscribe(h,{transportType:s});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:p}),await this.client.core.pairing.activate({topic:e})}else if(isJsonRpcError(t)){await this.client.proposal.delete(i,er("USER_DISCONNECTED"));const r=bs("session_connect");if(this.events.listenerCount(r)===0)throw new Error(`emitting ${r} without any listeners, 954`);this.events.emit(bs("session_connect"),{error:t.error})}},this.onSessionSettleRequest=async(e,t)=>{const{id:s,params:i}=t;try{this.isValidSessionSettleRequest(i);const{relay:r,controller:n,expiry:a,namespaces:c,sessionProperties:h,sessionConfig:p}=t.params,d=dist_index_es_V(dist_index_es_I(dist_index_es_I({topic:e,relay:r,expiry:a,namespaces:c,acknowledged:!0,pairingTopic:"",requiredNamespaces:{},optionalNamespaces:{},controller:n.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:n.publicKey,metadata:n.metadata}},h&&{sessionProperties:h}),p&&{sessionConfig:p}),{transportType:F.relay}),l=bs("session_connect");if(this.events.listenerCount(l)===0)throw new Error(`emitting ${l} without any listeners 997`);this.events.emit(bs("session_connect"),{session:d}),await this.sendResult({id:t.id,topic:e,result:!0,throwOnFailedPublish:!0})}catch(r){await this.sendError({id:s,topic:e,error:r}),this.client.logger.error(r)}},this.onSessionSettleResponse=async(e,t)=>{const{id:s}=t;isJsonRpcResult(t)?(await this.client.session.update(e,{acknowledged:!0}),this.events.emit(bs("session_approve",s),{})):isJsonRpcError(t)&&(await this.client.session.delete(e,er("USER_DISCONNECTED")),this.events.emit(bs("session_approve",s),{error:t.error}))},this.onSessionUpdateRequest=async(e,t)=>{const{params:s,id:i}=t;try{const r=`${e}_session_update`,n=Nh.get(r);if(n&&this.isRequestOutOfSync(n,i)){this.client.logger.info(`Discarding out of sync request - ${i}`),this.sendError({id:i,topic:e,error:er("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(dist_index_es_I({topic:e},s));try{Nh.set(r,i),await this.client.session.update(e,{namespaces:s.namespaces}),await this.sendResult({id:i,topic:e,result:!0,throwOnFailedPublish:!0})}catch(a){throw Nh.delete(r),a}this.client.events.emit("session_update",{id:i,topic:e,params:s})}catch(r){await this.sendError({id:i,topic:e,error:r}),this.client.logger.error(r)}},this.isRequestOutOfSync=(e,t)=>parseInt(t.toString().slice(0,-3))<=parseInt(e.toString().slice(0,-3)),this.onSessionUpdateResponse=(e,t)=>{const{id:s}=t,i=bs("session_update",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(t)?this.events.emit(bs("session_update",s),{}):isJsonRpcError(t)&&this.events.emit(bs("session_update",s),{error:t.error})},this.onSessionExtendRequest=async(e,t)=>{const{id:s}=t;try{this.isValidExtend({topic:e}),await this.setExpiry(e,ms(sign_client_dist_index_es_z)),await this.sendResult({id:s,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:s,topic:e})}catch(i){await this.sendError({id:s,topic:e,error:i}),this.client.logger.error(i)}},this.onSessionExtendResponse=(e,t)=>{const{id:s}=t,i=bs("session_extend",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(t)?this.events.emit(bs("session_extend",s),{}):isJsonRpcError(t)&&this.events.emit(bs("session_extend",s),{error:t.error})},this.onSessionPingRequest=async(e,t)=>{const{id:s}=t;try{this.isValidPing({topic:e}),await this.sendResult({id:s,topic:e,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:e})}catch(i){await this.sendError({id:s,topic:e,error:i}),this.client.logger.error(i)}},this.onSessionPingResponse=(e,t)=>{const{id:s}=t,i=bs("session_ping",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);setTimeout(()=>{isJsonRpcResult(t)?this.events.emit(bs("session_ping",s),{}):isJsonRpcError(t)&&this.events.emit(bs("session_ping",s),{error:t.error})},500)},this.onSessionDeleteRequest=async(e,t)=>{const{id:s}=t;try{this.isValidDisconnect({topic:e,reason:t.params}),Promise.all([new Promise(i=>{this.client.core.relayer.once(core_dist_index_es_w.publish,async()=>{i(await this.deleteSession({topic:e,id:s}))})}),this.sendResult({id:s,topic:e,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:e,error:er("USER_DISCONNECTED")})]).catch(i=>this.client.logger.error(i))}catch(i){this.client.logger.error(i)}},this.onSessionRequest=async e=>{var t,s,i;const{topic:r,payload:n,attestation:a,encryptedId:c,transportType:h}=e,{id:p,params:d}=n;try{await this.isValidRequest(dist_index_es_I({topic:r},d));const l=this.client.session.get(r),w=await this.getVerifyContext({attestationId:a,hash:Iu(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest",d,p))),encryptedId:c,metadata:l.peer.metadata,transportType:h}),m={id:p,topic:r,params:d,verifyContext:w};await this.setPendingSessionRequest(m),h===F.link_mode&&(t=l.peer.metadata.redirect)!=null&&t.universal&&this.client.core.addLinkModeSupportedApp((s=l.peer.metadata.redirect)==null?void 0:s.universal),(i=this.client.signConfig)!=null&&i.disableRequestQueue?this.emitSessionRequest(m):(this.addSessionRequestToSessionRequestQueue(m),this.processSessionRequestQueue())}catch(l){await this.sendError({id:p,topic:r,error:l}),this.client.logger.error(l)}},this.onSessionRequestResponse=(e,t)=>{const{id:s}=t,i=bs("session_request",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(t)?this.events.emit(bs("session_request",s),{result:t.result}):isJsonRpcError(t)&&this.events.emit(bs("session_request",s),{error:t.error})},this.onSessionEventRequest=async(e,t)=>{const{id:s,params:i}=t;try{const r=`${e}_session_event_${i.event.name}`,n=Nh.get(r);if(n&&this.isRequestOutOfSync(n,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(dist_index_es_I({topic:e},i)),this.client.events.emit("session_event",{id:s,topic:e,params:i}),Nh.set(r,s)}catch(r){await this.sendError({id:s,topic:e,error:r}),this.client.logger.error(r)}},this.onSessionAuthenticateResponse=(e,t)=>{const{id:s}=t;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:e,payload:t}),isJsonRpcResult(t)?this.events.emit(bs("session_request",s),{result:t.result}):isJsonRpcError(t)&&this.events.emit(bs("session_request",s),{error:t.error})},this.onSessionAuthenticateRequest=async e=>{var t;const{topic:s,payload:i,attestation:r,encryptedId:n,transportType:a}=e;try{const{requester:c,authPayload:h,expiryTimestamp:p}=i.params,d=await this.getVerifyContext({attestationId:r,hash:Iu(JSON.stringify(i)),encryptedId:n,metadata:c.metadata,transportType:a}),l={requester:c,pairingTopic:s,id:i.id,authPayload:h,verifyContext:d,expiryTimestamp:p};await this.setAuthRequest(i.id,{request:l,pairingTopic:s,transportType:a}),a===F.link_mode&&(t=c.metadata.redirect)!=null&&t.universal&&this.client.core.addLinkModeSupportedApp(c.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:s,params:i.params,id:i.id,verifyContext:d})}catch(c){this.client.logger.error(c);const h=i.params.requester.publicKey,p=await this.client.core.crypto.generateKeyPair(),d=this.getAppLinkIfEnabled(i.params.requester.metadata,a),l={type:pr,receiverPublicKey:h,senderPublicKey:p};await this.sendError({id:i.id,topic:s,error:c,encodeOpts:l,rpcOpts:dist_index_es_v.wc_sessionAuthenticate.autoReject,appLink:d})}},this.addSessionRequestToSessionRequestQueue=e=>{this.sessionRequestQueue.queue.push(e)},this.cleanupAfterResponse=e=>{this.deletePendingSessionRequest(e.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=index_es_L.idle,this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay))},this.cleanupPendingSentRequestsForTopic=({topic:e,error:t})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(i=>i.topic===e&&i.request.method==="wc_sessionRequest").forEach(i=>{const r=i.request.id,n=bs("session_request",r);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);this.events.emit(bs("session_request",i.request.id),{error:t})})},this.processSessionRequestQueue=()=>{if(this.sessionRequestQueue.state===index_es_L.active){this.client.logger.info("session request queue is already active.");return}const e=this.sessionRequestQueue.queue[0];if(!e){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=index_es_L.active,this.emitSessionRequest(e)}catch(t){this.client.logger.error(t)}},this.emitSessionRequest=e=>{this.client.events.emit("session_request",e)},this.onPairingCreated=e=>{if(e.methods&&this.expectedPairingMethodMap.set(e.topic,e.methods),e.active)return;const t=this.client.proposal.getAll().find(s=>s.pairingTopic===e.topic);t&&this.onSessionProposeRequest({topic:e.topic,payload:formatJsonRpcRequest("wc_sessionPropose",{requiredNamespaces:t.requiredNamespaces,optionalNamespaces:t.optionalNamespaces,relays:t.relays,proposer:t.proposer,sessionProperties:t.sessionProperties},t.id)})},this.isValidConnect=async e=>{if(!dh(e)){const{message:a}=xe("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(e)}`);throw new Error(a)}const{pairingTopic:t,requiredNamespaces:s,optionalNamespaces:i,sessionProperties:r,relays:n}=e;if(Pe(t)||await this.isValidPairingTopic(t),!ch(n,!0)){const{message:a}=xe("MISSING_OR_INVALID",`connect() relays: ${n}`);throw new Error(a)}!Pe(s)&&Xr(s)!==0&&this.validateNamespaces(s,"requiredNamespaces"),!Pe(i)&&Xr(i)!==0&&this.validateNamespaces(i,"optionalNamespaces"),Pe(r)||this.validateSessionProps(r,"sessionProperties")},this.validateNamespaces=(e,t)=>{const s=hh(e,"connect()",t);if(s)throw new Error(s.message)},this.isValidApprove=async e=>{if(!dh(e))throw new Error(xe("MISSING_OR_INVALID",`approve() params: ${e}`).message);const{id:t,namespaces:s,relayProtocol:i,sessionProperties:r}=e;this.checkRecentlyDeleted(t),await this.isValidProposalId(t);const n=this.client.proposal.get(t),a=_o(s,"approve()");if(a)throw new Error(a.message);const c=Co(n.requiredNamespaces,s,"approve()");if(c)throw new Error(c.message);if(!Yt(i,!0)){const{message:h}=xe("MISSING_OR_INVALID",`approve() relayProtocol: ${i}`);throw new Error(h)}Pe(r)||this.validateSessionProps(r,"sessionProperties")},this.isValidReject=async e=>{if(!dh(e)){const{message:i}=xe("MISSING_OR_INVALID",`reject() params: ${e}`);throw new Error(i)}const{id:t,reason:s}=e;if(this.checkRecentlyDeleted(t),await this.isValidProposalId(t),!ph(s)){const{message:i}=xe("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(i)}},this.isValidSessionSettleRequest=e=>{if(!dh(e)){const{message:c}=xe("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${e}`);throw new Error(c)}const{relay:t,controller:s,namespaces:i,expiry:r}=e;if(!Bo(t)){const{message:c}=xe("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(c)}const n=uh(s,"onSessionSettleRequest()");if(n)throw new Error(n.message);const a=_o(i,"onSessionSettleRequest()");if(a)throw new Error(a.message);if(As(r)){const{message:c}=xe("EXPIRED","onSessionSettleRequest()");throw new Error(c)}},this.isValidUpdate=async e=>{if(!dh(e)){const{message:a}=xe("MISSING_OR_INVALID",`update() params: ${e}`);throw new Error(a)}const{topic:t,namespaces:s}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const i=this.client.session.get(t),r=_o(s,"update()");if(r)throw new Error(r.message);const n=Co(i.requiredNamespaces,s,"update()");if(n)throw new Error(n.message)},this.isValidExtend=async e=>{if(!dh(e)){const{message:s}=xe("MISSING_OR_INVALID",`extend() params: ${e}`);throw new Error(s)}const{topic:t}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t)},this.isValidRequest=async e=>{if(!dh(e)){const{message:a}=xe("MISSING_OR_INVALID",`request() params: ${e}`);throw new Error(a)}const{topic:t,request:s,chainId:i,expiry:r}=e;this.checkRecentlyDeleted(t),await this.isValidSessionTopic(t);const{namespaces:n}=this.client.session.get(t);if(!Ah(n,i)){const{message:a}=xe("MISSING_OR_INVALID",`request() chainId: ${i}`);throw new Error(a)}if(!vh(s)){const{message:a}=xe("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(a)}if(!bh(n,i,s.method)){const{message:a}=xe("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(a)}if(r&&!Mh(r,index_es_me)){const{message:a}=xe("MISSING_OR_INVALID",`request() expiry: ${r}. Expiry must be a number (in seconds) between ${index_es_me.min} and ${index_es_me.max}`);throw new Error(a)}},this.isValidRespond=async e=>{var t;if(!dh(e)){const{message:r}=xe("MISSING_OR_INVALID",`respond() params: ${e}`);throw new Error(r)}const{topic:s,response:i}=e;try{await this.isValidSessionTopic(s)}catch(r){throw(t=e?.response)!=null&&t.id&&this.cleanupAfterResponse(e),r}if(!gh(i)){const{message:r}=xe("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(r)}},this.isValidPing=async e=>{if(!dh(e)){const{message:s}=xe("MISSING_OR_INVALID",`ping() params: ${e}`);throw new Error(s)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidEmit=async e=>{if(!dh(e)){const{message:n}=xe("MISSING_OR_INVALID",`emit() params: ${e}`);throw new Error(n)}const{topic:t,event:s,chainId:i}=e;await this.isValidSessionTopic(t);const{namespaces:r}=this.client.session.get(t);if(!Ah(r,i)){const{message:n}=xe("MISSING_OR_INVALID",`emit() chainId: ${i}`);throw new Error(n)}if(!mh(s)){const{message:n}=xe("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}if(!yh(r,i,s.name)){const{message:n}=xe("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}},this.isValidDisconnect=async e=>{if(!dh(e)){const{message:s}=xe("MISSING_OR_INVALID",`disconnect() params: ${e}`);throw new Error(s)}const{topic:t}=e;await this.isValidSessionOrPairingTopic(t)},this.isValidAuthenticate=e=>{const{chains:t,uri:s,domain:i,nonce:r}=e;if(!Array.isArray(t)||t.length===0)throw new Error("chains is required and must be a non-empty array");if(!Yt(s,!1))throw new Error("uri is required parameter");if(!Yt(i,!1))throw new Error("domain is required parameter");if(!Yt(r,!1))throw new Error("nonce is required parameter");if([...new Set(t.map(a=>mn(a).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:n}=mn(t[0]);if(n!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")},this.getVerifyContext=async e=>{const{attestationId:t,hash:s,encryptedId:i,metadata:r,transportType:n}=e,a={verified:{verifyUrl:r.verifyUrl||index_es_Q,validation:"UNKNOWN",origin:r.url||""}};try{if(n===F.link_mode){const h=this.getAppLinkIfEnabled(r,n);return a.verified.validation=h&&new URL(h).origin===new URL(r.url).origin?"VALID":"INVALID",a}const c=await this.client.core.verify.resolve({attestationId:t,hash:s,encryptedId:i,verifyUrl:r.verifyUrl});c&&(a.verified.origin=c.origin,a.verified.isScam=c.isScam,a.verified.validation=c.origin===new URL(r.url).origin?"VALID":"INVALID")}catch(c){this.client.logger.warn(c)}return this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`),a},this.validateSessionProps=(e,t)=>{Object.values(e).forEach(s=>{if(!Yt(s,!1)){const{message:i}=xe("MISSING_OR_INVALID",`${t} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);throw new Error(i)}})},this.getPendingAuthRequest=e=>{const t=this.client.auth.requests.get(e);return typeof t=="object"?t:void 0},this.addToRecentlyDeleted=(e,t)=>{if(this.recentlyDeletedMap.set(e,t),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const i=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(s++>=i)break;this.recentlyDeletedMap.delete(r)}}},this.checkRecentlyDeleted=e=>{const t=this.recentlyDeletedMap.get(e);if(t){const{message:s}=xe("MISSING_OR_INVALID",`Record was recently deleted - ${t}: ${e}`);throw new Error(s)}},this.isLinkModeEnabled=(e,t)=>{var s,i,r,n,a,c,h,p,d;return!e||t!==F.link_mode?!1:((i=(s=this.client.metadata)==null?void 0:s.redirect)==null?void 0:i.linkMode)===!0&&((n=(r=this.client.metadata)==null?void 0:r.redirect)==null?void 0:n.universal)!==void 0&&((c=(a=this.client.metadata)==null?void 0:a.redirect)==null?void 0:c.universal)!==""&&((h=e?.redirect)==null?void 0:h.universal)!==void 0&&((p=e?.redirect)==null?void 0:p.universal)!==""&&((d=e?.redirect)==null?void 0:d.linkMode)===!0&&this.client.core.linkModeSupportedApps.includes(e.redirect.universal)&&typeof(__webpack_require__.g==null?void 0:__webpack_require__.g.Linking)<"u"},this.getAppLinkIfEnabled=(e,t)=>{var s;return this.isLinkModeEnabled(e,t)?(s=e?.redirect)==null?void 0:s.universal:void 0},this.handleLinkModeMessage=({url:e})=>{if(!e||!e.includes("wc_ev")||!e.includes("topic"))return;const t=xs(e,"topic")||"",s=decodeURIComponent(xs(e,"wc_ev")||""),i=this.client.session.keys.includes(t);i&&this.client.session.update(t,{transportType:F.link_mode}),this.client.core.dispatchEnvelope({topic:t,message:s,sessionExists:i})},this.registerLinkModeListeners=async()=>{var e;if(typeof process<"u"&&process.env.IS_VITEST||rr()&&(e=this.client.metadata.redirect)!=null&&e.linkMode){const t=__webpack_require__.g==null?void 0:__webpack_require__.g.Linking;if(typeof t<"u"){t.addEventListener("url",this.handleLinkModeMessage,this.client.name);const s=await t.getInitialURL();s&&setTimeout(()=>{this.handleLinkModeMessage({url:s})},50)}}}}isInitialized(){if(!this.initialized){const{message:o}=xe("NOT_INITIALIZED",this.name);throw new Error(o)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(core_dist_index_es_w.message,o=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(o):this.onRelayMessage(o)})}async onRelayMessage(o){const{topic:e,message:t,attestation:s,transportType:i}=o,{publicKey:r}=this.client.auth.authKeys.keys.includes(dist_index_es_ae)?this.client.auth.authKeys.get(dist_index_es_ae):{responseTopic:void 0,publicKey:void 0},n=await this.client.core.crypto.decode(e,t,{receiverPublicKey:r,encoding:i===F.link_mode?wu:$i});try{isJsonRpcRequest(n)?(this.client.core.history.set(e,n),this.onRelayEventRequest({topic:e,payload:n,attestation:s,transportType:i,encryptedId:Iu(t)})):isJsonRpcResponse(n)?(await this.client.core.history.resolve(n),await this.onRelayEventResponse({topic:e,payload:n,transportType:i}),this.client.core.history.delete(e,n.id)):this.onRelayEventUnknownPayload({topic:e,payload:n,transportType:i})}catch(a){this.client.logger.error(a)}}registerExpirerEvents(){this.client.core.expirer.on(index_es_R.expired,async o=>{const{topic:e,id:t}=gs(o.target);if(t&&this.client.pendingRequest.keys.includes(t))return await this.deletePendingSessionRequest(t,xe("EXPIRED"),!0);if(t&&this.client.auth.requests.keys.includes(t))return await this.deletePendingAuthRequest(t,xe("EXPIRED"),!0);e?this.client.session.keys.includes(e)&&(await this.deleteSession({topic:e,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:e})):t&&(await this.deleteProposal(t,!0),this.client.events.emit("proposal_expire",{id:t}))})}registerPairingEvents(){this.client.core.pairing.events.on(Z.create,o=>this.onPairingCreated(o)),this.client.core.pairing.events.on(Z.delete,o=>{this.addToRecentlyDeleted(o.topic,"pairing")})}isValidPairingTopic(o){if(!Yt(o,!1)){const{message:e}=xe("MISSING_OR_INVALID",`pairing topic should be a string: ${o}`);throw new Error(e)}if(!this.client.core.pairing.pairings.keys.includes(o)){const{message:e}=xe("NO_MATCHING_KEY",`pairing topic doesn't exist: ${o}`);throw new Error(e)}if(As(this.client.core.pairing.pairings.get(o).expiry)){const{message:e}=xe("EXPIRED",`pairing topic: ${o}`);throw new Error(e)}}async isValidSessionTopic(o){if(!Yt(o,!1)){const{message:e}=xe("MISSING_OR_INVALID",`session topic should be a string: ${o}`);throw new Error(e)}if(this.checkRecentlyDeleted(o),!this.client.session.keys.includes(o)){const{message:e}=xe("NO_MATCHING_KEY",`session topic doesn't exist: ${o}`);throw new Error(e)}if(As(this.client.session.get(o).expiry)){await this.deleteSession({topic:o});const{message:e}=xe("EXPIRED",`session topic: ${o}`);throw new Error(e)}if(!this.client.core.crypto.keychain.has(o)){const{message:e}=xe("MISSING_OR_INVALID",`session topic does not exist in keychain: ${o}`);throw await this.deleteSession({topic:o}),new Error(e)}}async isValidSessionOrPairingTopic(o){if(this.checkRecentlyDeleted(o),this.client.session.keys.includes(o))await this.isValidSessionTopic(o);else if(this.client.core.pairing.pairings.keys.includes(o))this.isValidPairingTopic(o);else if(Yt(o,!1)){const{message:e}=xe("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${o}`);throw new Error(e)}else{const{message:e}=xe("MISSING_OR_INVALID",`session or pairing topic should be a string: ${o}`);throw new Error(e)}}async isValidProposalId(o){if(!lh(o)){const{message:e}=xe("MISSING_OR_INVALID",`proposal id should be a number: ${o}`);throw new Error(e)}if(!this.client.proposal.keys.includes(o)){const{message:e}=xe("NO_MATCHING_KEY",`proposal id doesn't exist: ${o}`);throw new Error(e)}if(As(this.client.proposal.get(o).expiryTimestamp)){await this.deleteProposal(o);const{message:e}=xe("EXPIRED",`proposal id: ${o}`);throw new Error(e)}}}class dist_index_es_Rs extends ri{constructor(o,e){super(o,e,index_es_st,index_es_ye),this.core=o,this.logger=e}}class index_es_yt extends ri{constructor(o,e){super(o,e,index_es_rt,index_es_ye),this.core=o,this.logger=e}}class dist_index_es_Ss extends ri{constructor(o,e){super(o,e,index_es_ot,index_es_ye,t=>t.id),this.core=o,this.logger=e}}class dist_index_es_Is extends ri{constructor(o,e){super(o,e,index_es_pt,dist_index_es_oe,()=>dist_index_es_ae),this.core=o,this.logger=e}}class dist_index_es_fs extends ri{constructor(o,e){super(o,e,index_es_ht,dist_index_es_oe),this.core=o,this.logger=e}}class dist_index_es_vs extends ri{constructor(o,e){super(o,e,index_es_dt,dist_index_es_oe,t=>t.id),this.core=o,this.logger=e}}class dist_index_es_qs{constructor(o,e){this.core=o,this.logger=e,this.authKeys=new dist_index_es_Is(this.core,this.logger),this.pairingTopics=new dist_index_es_fs(this.core,this.logger),this.requests=new dist_index_es_vs(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}class sign_client_dist_index_es_e extends dist_index_es_S{constructor(o){super(o),this.protocol=dist_index_es_be,this.version=dist_index_es_Ce,this.name=dist_index_es_we.name,this.events=new events.EventEmitter,this.on=(t,s)=>this.events.on(t,s),this.once=(t,s)=>this.events.once(t,s),this.off=(t,s)=>this.events.off(t,s),this.removeListener=(t,s)=>this.events.removeListener(t,s),this.removeAllListeners=t=>this.events.removeAllListeners(t),this.connect=async t=>{try{return await this.engine.connect(t)}catch(s){throw this.logger.error(s.message),s}},this.pair=async t=>{try{return await this.engine.pair(t)}catch(s){throw this.logger.error(s.message),s}},this.approve=async t=>{try{return await this.engine.approve(t)}catch(s){throw this.logger.error(s.message),s}},this.reject=async t=>{try{return await this.engine.reject(t)}catch(s){throw this.logger.error(s.message),s}},this.update=async t=>{try{return await this.engine.update(t)}catch(s){throw this.logger.error(s.message),s}},this.extend=async t=>{try{return await this.engine.extend(t)}catch(s){throw this.logger.error(s.message),s}},this.request=async t=>{try{return await this.engine.request(t)}catch(s){throw this.logger.error(s.message),s}},this.respond=async t=>{try{return await this.engine.respond(t)}catch(s){throw this.logger.error(s.message),s}},this.ping=async t=>{try{return await this.engine.ping(t)}catch(s){throw this.logger.error(s.message),s}},this.emit=async t=>{try{return await this.engine.emit(t)}catch(s){throw this.logger.error(s.message),s}},this.disconnect=async t=>{try{return await this.engine.disconnect(t)}catch(s){throw this.logger.error(s.message),s}},this.find=t=>{try{return this.engine.find(t)}catch(s){throw this.logger.error(s.message),s}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(t){throw this.logger.error(t.message),t}},this.authenticate=async(t,s)=>{try{return await this.engine.authenticate(t,s)}catch(i){throw this.logger.error(i.message),i}},this.formatAuthMessage=t=>{try{return this.engine.formatAuthMessage(t)}catch(s){throw this.logger.error(s.message),s}},this.approveSessionAuthenticate=async t=>{try{return await this.engine.approveSessionAuthenticate(t)}catch(s){throw this.logger.error(s.message),s}},this.rejectSessionAuthenticate=async t=>{try{return await this.engine.rejectSessionAuthenticate(t)}catch(s){throw this.logger.error(s.message),s}},this.name=o?.name||dist_index_es_we.name,this.metadata=o?.metadata||es(),this.signConfig=o?.signConfig;const e=typeof o?.logger<"u"&&typeof o?.logger!="string"?o.logger:browser_default()(dist_index_es_k({level:o?.logger||dist_index_es_we.logger}));this.core=o?.core||new index_es_Pn(o),this.logger=dist_index_es_E(e,this.name),this.session=new index_es_yt(this.core,this.logger),this.proposal=new dist_index_es_Rs(this.core,this.logger),this.pendingRequest=new dist_index_es_Ss(this.core,this.logger),this.engine=new dist_index_es_Es(this),this.auth=new dist_index_es_qs(this.core,this.logger)}static async init(o){const e=new sign_client_dist_index_es_e(o);return await e.initialize(),e}get context(){return index_es_y(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success"),this.engine.processRelayMessageCache()}catch(o){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(o.message),o}}}const dist_index_es_Ts=(/* unused pure expression or super */ null && (index_es_yt)),dist_index_es_Ns=(/* unused pure expression or super */ null && (sign_client_dist_index_es_e));
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js
var browser_ponyfill = __webpack_require__(21222);
var browser_ponyfill_default = /*#__PURE__*/__webpack_require__.n(browser_ponyfill);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var dist_index_es_P=Object.defineProperty,jsonrpc_http_connection_dist_index_es_w=Object.defineProperties,jsonrpc_http_connection_dist_index_es_E=Object.getOwnPropertyDescriptors,jsonrpc_http_connection_dist_index_es_c=Object.getOwnPropertySymbols,dist_index_es_L=Object.prototype.hasOwnProperty,jsonrpc_http_connection_dist_index_es_O=Object.prototype.propertyIsEnumerable,jsonrpc_http_connection_dist_index_es_l=(r,t,e)=>t in r?dist_index_es_P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,jsonrpc_http_connection_dist_index_es_p=(r,t)=>{for(var e in t||(t={}))dist_index_es_L.call(t,e)&&jsonrpc_http_connection_dist_index_es_l(r,e,t[e]);if(jsonrpc_http_connection_dist_index_es_c)for(var e of jsonrpc_http_connection_dist_index_es_c(t))jsonrpc_http_connection_dist_index_es_O.call(t,e)&&jsonrpc_http_connection_dist_index_es_l(r,e,t[e]);return r},jsonrpc_http_connection_dist_index_es_v=(r,t)=>jsonrpc_http_connection_dist_index_es_w(r,jsonrpc_http_connection_dist_index_es_E(t));const jsonrpc_http_connection_dist_index_es_j={Accept:"application/json","Content-Type":"application/json"},dist_index_es_T="POST",jsonrpc_http_connection_dist_index_es_d={headers:jsonrpc_http_connection_dist_index_es_j,method:dist_index_es_T},jsonrpc_http_connection_dist_index_es_g=10;class jsonrpc_http_connection_dist_index_es_f{constructor(t,e=!1){if(this.url=t,this.disableProviderPing=e,this.events=new events.EventEmitter,this.isAvailable=!1,this.registering=!1,!isHttpUrl(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t,this.disableProviderPing=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t){this.isAvailable||await this.register();try{const e=safeJsonStringify(t),s=await(await browser_ponyfill_default()(this.url,jsonrpc_http_connection_dist_index_es_v(jsonrpc_http_connection_dist_index_es_p({},jsonrpc_http_connection_dist_index_es_d),{body:e}))).json();this.onPayload({data:s})}catch(e){this.onError(t.id,e)}}async register(t=this.url){if(!isHttpUrl(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise((s,i)=>{this.events.once("register_error",n=>{this.resetMaxListeners(),i(n)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return i(new Error("HTTP connection is missing or invalid"));s()})})}this.url=t,this.registering=!0;try{if(!this.disableProviderPing){const e=safeJsonStringify({id:1,jsonrpc:"2.0",method:"test",params:[]});await browser_ponyfill_default()(t,jsonrpc_http_connection_dist_index_es_v(jsonrpc_http_connection_dist_index_es_p({},jsonrpc_http_connection_dist_index_es_d),{body:e}))}this.onOpen()}catch(e){const s=this.parseError(e);throw this.events.emit("register_error",s),this.onClose(),s}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(typeof t.data>"u")return;const e=typeof t.data=="string"?safeJsonParse(t.data):t.data;this.events.emit("payload",e)}onError(t,e){const s=this.parseError(e),i=s.message||s.toString(),n=formatJsonRpcError(t,i);this.events.emit("payload",n)}parseError(t,e=this.url){return parseConnectionError(t,e,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>jsonrpc_http_connection_dist_index_es_g&&this.events.setMaxListeners(jsonrpc_http_connection_dist_index_es_g)}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/universal-provider/dist/index.es.js
const index_es_ya="error",Kg="wss://relay.walletconnect.com",Jg="wc",Yg="universal_provider",index_es_Sa=`${Jg}@2:${Yg}:`,Zg="https://rpc.walletconnect.com/v1/",index_es_Kn="generic",dist_index_es_Tt={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};var universal_provider_dist_index_es_e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof __webpack_require__.g<"u"?__webpack_require__.g:typeof self<"u"?self:{},index_es_Ui={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(P,s){(function(){var i,p="4.17.21",w=200,x="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",O="Expected a function",k="Invalid `variable` option passed into `_.template`",tn="__lodash_hash_undefined__",Jn=500,xn="__lodash_placeholder__",Ht=1,Mt=2,En=4,yn=1,me=2,vt=1,ln=2,Gi=4,Dt=8,Sn=16,Nt=32,On=64,Bt=128,Yn=256,gr=512,Wa=30,Ma="...",Ba=800,Ga=16,zi=1,za=2,Ka=3,pn=1/0,nn=9007199254740991,Ja=17976931348623157e292,we=0/0,$t=4294967295,Ya=$t-1,Za=$t>>>1,Xa=[["ary",Bt],["bind",vt],["bindKey",ln],["curry",Dt],["curryRight",Sn],["flip",gr],["partial",Nt],["partialRight",On],["rearg",Yn]],Rn="[object Arguments]",Pe="[object Array]",Qa="[object AsyncFunction]",Zn="[object Boolean]",Xn="[object Date]",Va="[object DOMException]",Ce="[object Error]",Ae="[object Function]",Ki="[object GeneratorFunction]",Et="[object Map]",Qn="[object Number]",ka="[object Null]",Gt="[object Object]",Ji="[object Promise]",ja="[object Proxy]",Vn="[object RegExp]",yt="[object Set]",kn="[object String]",Ie="[object Symbol]",to="[object Undefined]",jn="[object WeakMap]",no="[object WeakSet]",te="[object ArrayBuffer]",bn="[object DataView]",vr="[object Float32Array]",_r="[object Float64Array]",mr="[object Int8Array]",wr="[object Int16Array]",Pr="[object Int32Array]",Cr="[object Uint8Array]",Ar="[object Uint8ClampedArray]",Ir="[object Uint16Array]",xr="[object Uint32Array]",eo=/\b__p \+= '';/g,ro=/\b(__p \+=) '' \+/g,io=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yi=/&(?:amp|lt|gt|quot|#39);/g,Zi=/[&<>"']/g,so=RegExp(Yi.source),uo=RegExp(Zi.source),ao=/<%-([\s\S]+?)%>/g,oo=/<%([\s\S]+?)%>/g,Xi=/<%=([\s\S]+?)%>/g,fo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,co=/^\w*$/,ho=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Er=/[\\^$.*+?()[\]{}|]/g,lo=RegExp(Er.source),yr=/^\s+/,po=/\s/,go=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,vo=/\{\n\/\* \[wrapped with (.+)\] \*/,_o=/,? & /,mo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,wo=/[()=,{}\[\]\/\s]/,Po=/\\(\\)?/g,Co=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qi=/\w*$/,Ao=/^[-+]0x[0-9a-f]+$/i,Io=/^0b[01]+$/i,xo=/^\[object .+?Constructor\]$/,Eo=/^0o[0-7]+$/i,yo=/^(?:0|[1-9]\d*)$/,So=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,Oo=/['\n\r\u2028\u2029\\]/g,Ee="\\ud800-\\udfff",Ro="\\u0300-\\u036f",bo="\\ufe20-\\ufe2f",To="\\u20d0-\\u20ff",Vi=Ro+bo+To,ki="\\u2700-\\u27bf",ji="a-z\\xdf-\\xf6\\xf8-\\xff",Lo="\\xac\\xb1\\xd7\\xf7",Ho="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Do="\\u2000-\\u206f",No=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ts="A-Z\\xc0-\\xd6\\xd8-\\xde",ns="\\ufe0e\\ufe0f",es=Lo+Ho+Do+No,Sr="['\u2019]",$o="["+Ee+"]",rs="["+es+"]",ye="["+Vi+"]",is="\\d+",qo="["+ki+"]",ss="["+ji+"]",us="[^"+Ee+es+is+ki+ji+ts+"]",Or="\\ud83c[\\udffb-\\udfff]",Uo="(?:"+ye+"|"+Or+")",as="[^"+Ee+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",br="[\\ud800-\\udbff][\\udc00-\\udfff]",Tn="["+ts+"]",os="\\u200d",fs="(?:"+ss+"|"+us+")",Fo="(?:"+Tn+"|"+us+")",cs="(?:"+Sr+"(?:d|ll|m|re|s|t|ve))?",hs="(?:"+Sr+"(?:D|LL|M|RE|S|T|VE))?",ls=Uo+"?",ps="["+ns+"]?",Wo="(?:"+os+"(?:"+[as,Rr,br].join("|")+")"+ps+ls+")*",Mo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Bo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ds=ps+ls+Wo,Go="(?:"+[qo,Rr,br].join("|")+")"+ds,zo="(?:"+[as+ye+"?",ye,Rr,br,$o].join("|")+")",Ko=RegExp(Sr,"g"),Jo=RegExp(ye,"g"),Tr=RegExp(Or+"(?="+Or+")|"+zo+ds,"g"),Yo=RegExp([Tn+"?"+ss+"+"+cs+"(?="+[rs,Tn,"$"].join("|")+")",Fo+"+"+hs+"(?="+[rs,Tn+fs,"$"].join("|")+")",Tn+"?"+fs+"+"+cs,Tn+"+"+hs,Bo,Mo,is,Go].join("|"),"g"),Zo=RegExp("["+os+Ee+Vi+ns+"]"),Xo=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Qo=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Vo=-1,G={};G[vr]=G[_r]=G[mr]=G[wr]=G[Pr]=G[Cr]=G[Ar]=G[Ir]=G[xr]=!0,G[Rn]=G[Pe]=G[te]=G[Zn]=G[bn]=G[Xn]=G[Ce]=G[Ae]=G[Et]=G[Qn]=G[Gt]=G[Vn]=G[yt]=G[kn]=G[jn]=!1;var B={};B[Rn]=B[Pe]=B[te]=B[bn]=B[Zn]=B[Xn]=B[vr]=B[_r]=B[mr]=B[wr]=B[Pr]=B[Et]=B[Qn]=B[Gt]=B[Vn]=B[yt]=B[kn]=B[Ie]=B[Cr]=B[Ar]=B[Ir]=B[xr]=!0,B[Ce]=B[Ae]=B[jn]=!1;var ko={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},jo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tf={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},nf={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ef=parseFloat,rf=parseInt,gs=typeof universal_provider_dist_index_es_e=="object"&&universal_provider_dist_index_es_e&&universal_provider_dist_index_es_e.Object===Object&&universal_provider_dist_index_es_e,sf=typeof self=="object"&&self&&self.Object===Object&&self,j=gs||sf||Function("return this")(),Lr=s&&!s.nodeType&&s,dn=Lr&&!0&&P&&!P.nodeType&&P,vs=dn&&dn.exports===Lr,Hr=vs&&gs.process,_t=function(){try{var h=dn&&dn.require&&dn.require("util").types;return h||Hr&&Hr.binding&&Hr.binding("util")}catch{}}(),_s=_t&&_t.isArrayBuffer,ms=_t&&_t.isDate,ws=_t&&_t.isMap,Ps=_t&&_t.isRegExp,Cs=_t&&_t.isSet,As=_t&&_t.isTypedArray;function ct(h,g,d){switch(d.length){case 0:return h.call(g);case 1:return h.call(g,d[0]);case 2:return h.call(g,d[0],d[1]);case 3:return h.call(g,d[0],d[1],d[2])}return h.apply(g,d)}function uf(h,g,d,A){for(var R=-1,q=h==null?0:h.length;++R<q;){var X=h[R];g(A,X,d(X),h)}return A}function mt(h,g){for(var d=-1,A=h==null?0:h.length;++d<A&&g(h[d],d,h)!==!1;);return h}function af(h,g){for(var d=h==null?0:h.length;d--&&g(h[d],d,h)!==!1;);return h}function Is(h,g){for(var d=-1,A=h==null?0:h.length;++d<A;)if(!g(h[d],d,h))return!1;return!0}function en(h,g){for(var d=-1,A=h==null?0:h.length,R=0,q=[];++d<A;){var X=h[d];g(X,d,h)&&(q[R++]=X)}return q}function Se(h,g){var d=h==null?0:h.length;return!!d&&Ln(h,g,0)>-1}function Dr(h,g,d){for(var A=-1,R=h==null?0:h.length;++A<R;)if(d(g,h[A]))return!0;return!1}function z(h,g){for(var d=-1,A=h==null?0:h.length,R=Array(A);++d<A;)R[d]=g(h[d],d,h);return R}function rn(h,g){for(var d=-1,A=g.length,R=h.length;++d<A;)h[R+d]=g[d];return h}function Nr(h,g,d,A){var R=-1,q=h==null?0:h.length;for(A&&q&&(d=h[++R]);++R<q;)d=g(d,h[R],R,h);return d}function of(h,g,d,A){var R=h==null?0:h.length;for(A&&R&&(d=h[--R]);R--;)d=g(d,h[R],R,h);return d}function $r(h,g){for(var d=-1,A=h==null?0:h.length;++d<A;)if(g(h[d],d,h))return!0;return!1}var ff=qr("length");function cf(h){return h.split("")}function hf(h){return h.match(mo)||[]}function xs(h,g,d){var A;return d(h,function(R,q,X){if(g(R,q,X))return A=q,!1}),A}function Oe(h,g,d,A){for(var R=h.length,q=d+(A?1:-1);A?q--:++q<R;)if(g(h[q],q,h))return q;return-1}function Ln(h,g,d){return g===g?If(h,g,d):Oe(h,Es,d)}function lf(h,g,d,A){for(var R=d-1,q=h.length;++R<q;)if(A(h[R],g))return R;return-1}function Es(h){return h!==h}function ys(h,g){var d=h==null?0:h.length;return d?Fr(h,g)/d:we}function qr(h){return function(g){return g==null?i:g[h]}}function Ur(h){return function(g){return h==null?i:h[g]}}function Ss(h,g,d,A,R){return R(h,function(q,X,M){d=A?(A=!1,q):g(d,q,X,M)}),d}function pf(h,g){var d=h.length;for(h.sort(g);d--;)h[d]=h[d].value;return h}function Fr(h,g){for(var d,A=-1,R=h.length;++A<R;){var q=g(h[A]);q!==i&&(d=d===i?q:d+q)}return d}function Wr(h,g){for(var d=-1,A=Array(h);++d<h;)A[d]=g(d);return A}function df(h,g){return z(g,function(d){return[d,h[d]]})}function Os(h){return h&&h.slice(0,Ls(h)+1).replace(yr,"")}function ht(h){return function(g){return h(g)}}function Mr(h,g){return z(g,function(d){return h[d]})}function ne(h,g){return h.has(g)}function Rs(h,g){for(var d=-1,A=h.length;++d<A&&Ln(g,h[d],0)>-1;);return d}function bs(h,g){for(var d=h.length;d--&&Ln(g,h[d],0)>-1;);return d}function gf(h,g){for(var d=h.length,A=0;d--;)h[d]===g&&++A;return A}var vf=Ur(ko),_f=Ur(jo);function mf(h){return"\\"+nf[h]}function wf(h,g){return h==null?i:h[g]}function Hn(h){return Zo.test(h)}function Pf(h){return Xo.test(h)}function Cf(h){for(var g,d=[];!(g=h.next()).done;)d.push(g.value);return d}function Br(h){var g=-1,d=Array(h.size);return h.forEach(function(A,R){d[++g]=[R,A]}),d}function Ts(h,g){return function(d){return h(g(d))}}function sn(h,g){for(var d=-1,A=h.length,R=0,q=[];++d<A;){var X=h[d];(X===g||X===xn)&&(h[d]=xn,q[R++]=d)}return q}function Re(h){var g=-1,d=Array(h.size);return h.forEach(function(A){d[++g]=A}),d}function Af(h){var g=-1,d=Array(h.size);return h.forEach(function(A){d[++g]=[A,A]}),d}function If(h,g,d){for(var A=d-1,R=h.length;++A<R;)if(h[A]===g)return A;return-1}function xf(h,g,d){for(var A=d+1;A--;)if(h[A]===g)return A;return A}function Dn(h){return Hn(h)?yf(h):ff(h)}function St(h){return Hn(h)?Sf(h):cf(h)}function Ls(h){for(var g=h.length;g--&&po.test(h.charAt(g)););return g}var Ef=Ur(tf);function yf(h){for(var g=Tr.lastIndex=0;Tr.test(h);)++g;return g}function Sf(h){return h.match(Tr)||[]}function Of(h){return h.match(Yo)||[]}var Rf=function h(g){g=g==null?j:Nn.defaults(j.Object(),g,Nn.pick(j,Qo));var d=g.Array,A=g.Date,R=g.Error,q=g.Function,X=g.Math,M=g.Object,Gr=g.RegExp,bf=g.String,wt=g.TypeError,be=d.prototype,Tf=q.prototype,$n=M.prototype,Te=g["__core-js_shared__"],Le=Tf.toString,W=$n.hasOwnProperty,Lf=0,Hs=function(){var t=/[^.]+$/.exec(Te&&Te.keys&&Te.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),He=$n.toString,Hf=Le.call(M),Df=j._,Nf=Gr("^"+Le.call(W).replace(Er,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),De=vs?g.Buffer:i,un=g.Symbol,Ne=g.Uint8Array,Ds=De?De.allocUnsafe:i,$e=Ts(M.getPrototypeOf,M),Ns=M.create,$s=$n.propertyIsEnumerable,qe=be.splice,qs=un?un.isConcatSpreadable:i,ee=un?un.iterator:i,gn=un?un.toStringTag:i,Ue=function(){try{var t=Pn(M,"defineProperty");return t({},"",{}),t}catch{}}(),$f=g.clearTimeout!==j.clearTimeout&&g.clearTimeout,qf=A&&A.now!==j.Date.now&&A.now,Uf=g.setTimeout!==j.setTimeout&&g.setTimeout,Fe=X.ceil,We=X.floor,zr=M.getOwnPropertySymbols,Ff=De?De.isBuffer:i,Us=g.isFinite,Wf=be.join,Mf=Ts(M.keys,M),Q=X.max,nt=X.min,Bf=A.now,Gf=g.parseInt,Fs=X.random,zf=be.reverse,Kr=Pn(g,"DataView"),re=Pn(g,"Map"),Jr=Pn(g,"Promise"),qn=Pn(g,"Set"),ie=Pn(g,"WeakMap"),se=Pn(M,"create"),Me=ie&&new ie,Un={},Kf=Cn(Kr),Jf=Cn(re),Yf=Cn(Jr),Zf=Cn(qn),Xf=Cn(ie),Be=un?un.prototype:i,ue=Be?Be.valueOf:i,Ws=Be?Be.toString:i;function a(t){if(J(t)&&!b(t)&&!(t instanceof N)){if(t instanceof Pt)return t;if(W.call(t,"__wrapped__"))return Mu(t)}return new Pt(t)}var Fn=function(){function t(){}return function(n){if(!K(n))return{};if(Ns)return Ns(n);t.prototype=n;var e=new t;return t.prototype=i,e}}();function Ge(){}function Pt(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=i}a.templateSettings={escape:ao,evaluate:oo,interpolate:Xi,variable:"",imports:{_:a}},a.prototype=Ge.prototype,a.prototype.constructor=a,Pt.prototype=Fn(Ge.prototype),Pt.prototype.constructor=Pt;function N(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$t,this.__views__=[]}function Qf(){var t=new N(this.__wrapped__);return t.__actions__=ut(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ut(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ut(this.__views__),t}function Vf(){if(this.__filtered__){var t=new N(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function kf(){var t=this.__wrapped__.value(),n=this.__dir__,e=b(t),r=n<0,u=e?t.length:0,o=ch(0,u,this.__views__),f=o.start,c=o.end,l=c-f,v=r?c:f-1,_=this.__iteratees__,m=_.length,C=0,I=nt(l,this.__takeCount__);if(!e||!r&&u==l&&I==l)return cu(t,this.__actions__);var y=[];t:for(;l--&&C<I;){v+=n;for(var L=-1,S=t[v];++L<m;){var D=_[L],$=D.iteratee,dt=D.type,st=$(S);if(dt==za)S=st;else if(!st){if(dt==zi)continue t;break t}}y[C++]=S}return y}N.prototype=Fn(Ge.prototype),N.prototype.constructor=N;function vn(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function jf(){this.__data__=se?se(null):{},this.size=0}function tc(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function nc(t){var n=this.__data__;if(se){var e=n[t];return e===tn?i:e}return W.call(n,t)?n[t]:i}function ec(t){var n=this.__data__;return se?n[t]!==i:W.call(n,t)}function rc(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=se&&n===i?tn:n,this}vn.prototype.clear=jf,vn.prototype.delete=tc,vn.prototype.get=nc,vn.prototype.has=ec,vn.prototype.set=rc;function zt(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function ic(){this.__data__=[],this.size=0}function sc(t){var n=this.__data__,e=ze(n,t);if(e<0)return!1;var r=n.length-1;return e==r?n.pop():qe.call(n,e,1),--this.size,!0}function uc(t){var n=this.__data__,e=ze(n,t);return e<0?i:n[e][1]}function ac(t){return ze(this.__data__,t)>-1}function oc(t,n){var e=this.__data__,r=ze(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this}zt.prototype.clear=ic,zt.prototype.delete=sc,zt.prototype.get=uc,zt.prototype.has=ac,zt.prototype.set=oc;function Kt(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function fc(){this.size=0,this.__data__={hash:new vn,map:new(re||zt),string:new vn}}function cc(t){var n=er(this,t).delete(t);return this.size-=n?1:0,n}function hc(t){return er(this,t).get(t)}function lc(t){return er(this,t).has(t)}function pc(t,n){var e=er(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this}Kt.prototype.clear=fc,Kt.prototype.delete=cc,Kt.prototype.get=hc,Kt.prototype.has=lc,Kt.prototype.set=pc;function _n(t){var n=-1,e=t==null?0:t.length;for(this.__data__=new Kt;++n<e;)this.add(t[n])}function dc(t){return this.__data__.set(t,tn),this}function gc(t){return this.__data__.has(t)}_n.prototype.add=_n.prototype.push=dc,_n.prototype.has=gc;function Ot(t){var n=this.__data__=new zt(t);this.size=n.size}function vc(){this.__data__=new zt,this.size=0}function _c(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e}function mc(t){return this.__data__.get(t)}function wc(t){return this.__data__.has(t)}function Pc(t,n){var e=this.__data__;if(e instanceof zt){var r=e.__data__;if(!re||r.length<w-1)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new Kt(r)}return e.set(t,n),this.size=e.size,this}Ot.prototype.clear=vc,Ot.prototype.delete=_c,Ot.prototype.get=mc,Ot.prototype.has=wc,Ot.prototype.set=Pc;function Ms(t,n){var e=b(t),r=!e&&An(t),u=!e&&!r&&hn(t),o=!e&&!r&&!u&&Gn(t),f=e||r||u||o,c=f?Wr(t.length,bf):[],l=c.length;for(var v in t)(n||W.call(t,v))&&!(f&&(v=="length"||u&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Xt(v,l)))&&c.push(v);return c}function Bs(t){var n=t.length;return n?t[ri(0,n-1)]:i}function Cc(t,n){return rr(ut(t),mn(n,0,t.length))}function Ac(t){return rr(ut(t))}function Yr(t,n,e){(e!==i&&!Rt(t[n],e)||e===i&&!(n in t))&&Jt(t,n,e)}function ae(t,n,e){var r=t[n];(!(W.call(t,n)&&Rt(r,e))||e===i&&!(n in t))&&Jt(t,n,e)}function ze(t,n){for(var e=t.length;e--;)if(Rt(t[e][0],n))return e;return-1}function Ic(t,n,e,r){return an(t,function(u,o,f){n(r,u,e(u),f)}),r}function Gs(t,n){return t&&Ut(n,V(n),t)}function xc(t,n){return t&&Ut(n,ot(n),t)}function Jt(t,n,e){n=="__proto__"&&Ue?Ue(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}function Zr(t,n){for(var e=-1,r=n.length,u=d(r),o=t==null;++e<r;)u[e]=o?i:Oi(t,n[e]);return u}function mn(t,n,e){return t===t&&(e!==i&&(t=t<=e?t:e),n!==i&&(t=t>=n?t:n)),t}function Ct(t,n,e,r,u,o){var f,c=n&Ht,l=n&Mt,v=n&En;if(e&&(f=u?e(t,r,u,o):e(t)),f!==i)return f;if(!K(t))return t;var _=b(t);if(_){if(f=lh(t),!c)return ut(t,f)}else{var m=et(t),C=m==Ae||m==Ki;if(hn(t))return pu(t,c);if(m==Gt||m==Rn||C&&!u){if(f=l||C?{}:Lu(t),!c)return l?nh(t,xc(f,t)):th(t,Gs(f,t))}else{if(!B[m])return u?t:{};f=ph(t,m,c)}}o||(o=new Ot);var I=o.get(t);if(I)return I;o.set(t,f),aa(t)?t.forEach(function(S){f.add(Ct(S,n,e,S,t,o))}):sa(t)&&t.forEach(function(S,D){f.set(D,Ct(S,n,e,D,t,o))});var y=v?l?di:pi:l?ot:V,L=_?i:y(t);return mt(L||t,function(S,D){L&&(D=S,S=t[D]),ae(f,D,Ct(S,n,e,D,t,o))}),f}function Ec(t){var n=V(t);return function(e){return zs(e,t,n)}}function zs(t,n,e){var r=e.length;if(t==null)return!r;for(t=M(t);r--;){var u=e[r],o=n[u],f=t[u];if(f===i&&!(u in t)||!o(f))return!1}return!0}function Ks(t,n,e){if(typeof t!="function")throw new wt(O);return de(function(){t.apply(i,e)},n)}function oe(t,n,e,r){var u=-1,o=Se,f=!0,c=t.length,l=[],v=n.length;if(!c)return l;e&&(n=z(n,ht(e))),r?(o=Dr,f=!1):n.length>=w&&(o=ne,f=!1,n=new _n(n));t:for(;++u<c;){var _=t[u],m=e==null?_:e(_);if(_=r||_!==0?_:0,f&&m===m){for(var C=v;C--;)if(n[C]===m)continue t;l.push(_)}else o(n,m,r)||l.push(_)}return l}var an=mu(qt),Js=mu(Qr,!0);function yc(t,n){var e=!0;return an(t,function(r,u,o){return e=!!n(r,u,o),e}),e}function Ke(t,n,e){for(var r=-1,u=t.length;++r<u;){var o=t[r],f=n(o);if(f!=null&&(c===i?f===f&&!pt(f):e(f,c)))var c=f,l=o}return l}function Sc(t,n,e,r){var u=t.length;for(e=T(e),e<0&&(e=-e>u?0:u+e),r=r===i||r>u?u:T(r),r<0&&(r+=u),r=e>r?0:fa(r);e<r;)t[e++]=n;return t}function Ys(t,n){var e=[];return an(t,function(r,u,o){n(r,u,o)&&e.push(r)}),e}function tt(t,n,e,r,u){var o=-1,f=t.length;for(e||(e=gh),u||(u=[]);++o<f;){var c=t[o];n>0&&e(c)?n>1?tt(c,n-1,e,r,u):rn(u,c):r||(u[u.length]=c)}return u}var Xr=wu(),Zs=wu(!0);function qt(t,n){return t&&Xr(t,n,V)}function Qr(t,n){return t&&Zs(t,n,V)}function Je(t,n){return en(n,function(e){return Qt(t[e])})}function wn(t,n){n=fn(n,t);for(var e=0,r=n.length;t!=null&&e<r;)t=t[Ft(n[e++])];return e&&e==r?t:i}function Xs(t,n,e){var r=n(t);return b(t)?r:rn(r,e(t))}function rt(t){return t==null?t===i?to:ka:gn&&gn in M(t)?fh(t):Ah(t)}function Vr(t,n){return t>n}function Oc(t,n){return t!=null&&W.call(t,n)}function Rc(t,n){return t!=null&&n in M(t)}function bc(t,n,e){return t>=nt(n,e)&&t<Q(n,e)}function kr(t,n,e){for(var r=e?Dr:Se,u=t[0].length,o=t.length,f=o,c=d(o),l=1/0,v=[];f--;){var _=t[f];f&&n&&(_=z(_,ht(n))),l=nt(_.length,l),c[f]=!e&&(n||u>=120&&_.length>=120)?new _n(f&&_):i}_=t[0];var m=-1,C=c[0];t:for(;++m<u&&v.length<l;){var I=_[m],y=n?n(I):I;if(I=e||I!==0?I:0,!(C?ne(C,y):r(v,y,e))){for(f=o;--f;){var L=c[f];if(!(L?ne(L,y):r(t[f],y,e)))continue t}C&&C.push(y),v.push(I)}}return v}function Tc(t,n,e,r){return qt(t,function(u,o,f){n(r,e(u),o,f)}),r}function fe(t,n,e){n=fn(n,t),t=$u(t,n);var r=t==null?t:t[Ft(It(n))];return r==null?i:ct(r,t,e)}function Qs(t){return J(t)&&rt(t)==Rn}function Lc(t){return J(t)&&rt(t)==te}function Hc(t){return J(t)&&rt(t)==Xn}function ce(t,n,e,r,u){return t===n?!0:t==null||n==null||!J(t)&&!J(n)?t!==t&&n!==n:Dc(t,n,e,r,ce,u)}function Dc(t,n,e,r,u,o){var f=b(t),c=b(n),l=f?Pe:et(t),v=c?Pe:et(n);l=l==Rn?Gt:l,v=v==Rn?Gt:v;var _=l==Gt,m=v==Gt,C=l==v;if(C&&hn(t)){if(!hn(n))return!1;f=!0,_=!1}if(C&&!_)return o||(o=new Ot),f||Gn(t)?Ru(t,n,e,r,u,o):ah(t,n,l,e,r,u,o);if(!(e&yn)){var I=_&&W.call(t,"__wrapped__"),y=m&&W.call(n,"__wrapped__");if(I||y){var L=I?t.value():t,S=y?n.value():n;return o||(o=new Ot),u(L,S,e,r,o)}}return C?(o||(o=new Ot),oh(t,n,e,r,u,o)):!1}function Nc(t){return J(t)&&et(t)==Et}function jr(t,n,e,r){var u=e.length,o=u,f=!r;if(t==null)return!o;for(t=M(t);u--;){var c=e[u];if(f&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++u<o;){c=e[u];var l=c[0],v=t[l],_=c[1];if(f&&c[2]){if(v===i&&!(l in t))return!1}else{var m=new Ot;if(r)var C=r(v,_,l,t,n,m);if(!(C===i?ce(_,v,yn|me,r,m):C))return!1}}return!0}function Vs(t){if(!K(t)||_h(t))return!1;var n=Qt(t)?Nf:xo;return n.test(Cn(t))}function $c(t){return J(t)&&rt(t)==Vn}function qc(t){return J(t)&&et(t)==yt}function Uc(t){return J(t)&&fr(t.length)&&!!G[rt(t)]}function ks(t){return typeof t=="function"?t:t==null?ft:typeof t=="object"?b(t)?nu(t[0],t[1]):tu(t):Pa(t)}function ti(t){if(!pe(t))return Mf(t);var n=[];for(var e in M(t))W.call(t,e)&&e!="constructor"&&n.push(e);return n}function Fc(t){if(!K(t))return Ch(t);var n=pe(t),e=[];for(var r in t)r=="constructor"&&(n||!W.call(t,r))||e.push(r);return e}function ni(t,n){return t<n}function js(t,n){var e=-1,r=at(t)?d(t.length):[];return an(t,function(u,o,f){r[++e]=n(u,o,f)}),r}function tu(t){var n=vi(t);return n.length==1&&n[0][2]?Du(n[0][0],n[0][1]):function(e){return e===t||jr(e,t,n)}}function nu(t,n){return mi(t)&&Hu(n)?Du(Ft(t),n):function(e){var r=Oi(e,t);return r===i&&r===n?Ri(e,t):ce(n,r,yn|me)}}function Ye(t,n,e,r,u){t!==n&&Xr(n,function(o,f){if(u||(u=new Ot),K(o))Wc(t,n,f,e,Ye,r,u);else{var c=r?r(Pi(t,f),o,f+"",t,n,u):i;c===i&&(c=o),Yr(t,f,c)}},ot)}function Wc(t,n,e,r,u,o,f){var c=Pi(t,e),l=Pi(n,e),v=f.get(l);if(v){Yr(t,e,v);return}var _=o?o(c,l,e+"",t,n,f):i,m=_===i;if(m){var C=b(l),I=!C&&hn(l),y=!C&&!I&&Gn(l);_=l,C||I||y?b(c)?_=c:Y(c)?_=ut(c):I?(m=!1,_=pu(l,!0)):y?(m=!1,_=du(l,!0)):_=[]:ge(l)||An(l)?(_=c,An(c)?_=ca(c):(!K(c)||Qt(c))&&(_=Lu(l))):m=!1}m&&(f.set(l,_),u(_,l,r,o,f),f.delete(l)),Yr(t,e,_)}function eu(t,n){var e=t.length;if(e)return n+=n<0?e:0,Xt(n,e)?t[n]:i}function ru(t,n,e){n.length?n=z(n,function(o){return b(o)?function(f){return wn(f,o.length===1?o[0]:o)}:o}):n=[ft];var r=-1;n=z(n,ht(E()));var u=js(t,function(o,f,c){var l=z(n,function(v){return v(o)});return{criteria:l,index:++r,value:o}});return pf(u,function(o,f){return jc(o,f,e)})}function Mc(t,n){return iu(t,n,function(e,r){return Ri(t,r)})}function iu(t,n,e){for(var r=-1,u=n.length,o={};++r<u;){var f=n[r],c=wn(t,f);e(c,f)&&he(o,fn(f,t),c)}return o}function Bc(t){return function(n){return wn(n,t)}}function ei(t,n,e,r){var u=r?lf:Ln,o=-1,f=n.length,c=t;for(t===n&&(n=ut(n)),e&&(c=z(t,ht(e)));++o<f;)for(var l=0,v=n[o],_=e?e(v):v;(l=u(c,_,l,r))>-1;)c!==t&&qe.call(c,l,1),qe.call(t,l,1);return t}function su(t,n){for(var e=t?n.length:0,r=e-1;e--;){var u=n[e];if(e==r||u!==o){var o=u;Xt(u)?qe.call(t,u,1):ui(t,u)}}return t}function ri(t,n){return t+We(Fs()*(n-t+1))}function Gc(t,n,e,r){for(var u=-1,o=Q(Fe((n-t)/(e||1)),0),f=d(o);o--;)f[r?o:++u]=t,t+=e;return f}function ii(t,n){var e="";if(!t||n<1||n>nn)return e;do n%2&&(e+=t),n=We(n/2),n&&(t+=t);while(n);return e}function H(t,n){return Ci(Nu(t,n,ft),t+"")}function zc(t){return Bs(zn(t))}function Kc(t,n){var e=zn(t);return rr(e,mn(n,0,e.length))}function he(t,n,e,r){if(!K(t))return t;n=fn(n,t);for(var u=-1,o=n.length,f=o-1,c=t;c!=null&&++u<o;){var l=Ft(n[u]),v=e;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(u!=f){var _=c[l];v=r?r(_,l,c):i,v===i&&(v=K(_)?_:Xt(n[u+1])?[]:{})}ae(c,l,v),c=c[l]}return t}var uu=Me?function(t,n){return Me.set(t,n),t}:ft,Jc=Ue?function(t,n){return Ue(t,"toString",{configurable:!0,enumerable:!1,value:Ti(n),writable:!0})}:ft;function Yc(t){return rr(zn(t))}function At(t,n,e){var r=-1,u=t.length;n<0&&(n=-n>u?0:u+n),e=e>u?u:e,e<0&&(e+=u),u=n>e?0:e-n>>>0,n>>>=0;for(var o=d(u);++r<u;)o[r]=t[r+n];return o}function Zc(t,n){var e;return an(t,function(r,u,o){return e=n(r,u,o),!e}),!!e}function Ze(t,n,e){var r=0,u=t==null?r:t.length;if(typeof n=="number"&&n===n&&u<=Za){for(;r<u;){var o=r+u>>>1,f=t[o];f!==null&&!pt(f)&&(e?f<=n:f<n)?r=o+1:u=o}return u}return si(t,n,ft,e)}function si(t,n,e,r){var u=0,o=t==null?0:t.length;if(o===0)return 0;n=e(n);for(var f=n!==n,c=n===null,l=pt(n),v=n===i;u<o;){var _=We((u+o)/2),m=e(t[_]),C=m!==i,I=m===null,y=m===m,L=pt(m);if(f)var S=r||y;else v?S=y&&(r||C):c?S=y&&C&&(r||!I):l?S=y&&C&&!I&&(r||!L):I||L?S=!1:S=r?m<=n:m<n;S?u=_+1:o=_}return nt(o,Ya)}function au(t,n){for(var e=-1,r=t.length,u=0,o=[];++e<r;){var f=t[e],c=n?n(f):f;if(!e||!Rt(c,l)){var l=c;o[u++]=f===0?0:f}}return o}function ou(t){return typeof t=="number"?t:pt(t)?we:+t}function lt(t){if(typeof t=="string")return t;if(b(t))return z(t,lt)+"";if(pt(t))return Ws?Ws.call(t):"";var n=t+"";return n=="0"&&1/t==-pn?"-0":n}function on(t,n,e){var r=-1,u=Se,o=t.length,f=!0,c=[],l=c;if(e)f=!1,u=Dr;else if(o>=w){var v=n?null:sh(t);if(v)return Re(v);f=!1,u=ne,l=new _n}else l=n?[]:c;t:for(;++r<o;){var _=t[r],m=n?n(_):_;if(_=e||_!==0?_:0,f&&m===m){for(var C=l.length;C--;)if(l[C]===m)continue t;n&&l.push(m),c.push(_)}else u(l,m,e)||(l!==c&&l.push(m),c.push(_))}return c}function ui(t,n){return n=fn(n,t),t=$u(t,n),t==null||delete t[Ft(It(n))]}function fu(t,n,e,r){return he(t,n,e(wn(t,n)),r)}function Xe(t,n,e,r){for(var u=t.length,o=r?u:-1;(r?o--:++o<u)&&n(t[o],o,t););return e?At(t,r?0:o,r?o+1:u):At(t,r?o+1:0,r?u:o)}function cu(t,n){var e=t;return e instanceof N&&(e=e.value()),Nr(n,function(r,u){return u.func.apply(u.thisArg,rn([r],u.args))},e)}function ai(t,n,e){var r=t.length;if(r<2)return r?on(t[0]):[];for(var u=-1,o=d(r);++u<r;)for(var f=t[u],c=-1;++c<r;)c!=u&&(o[u]=oe(o[u]||f,t[c],n,e));return on(tt(o,1),n,e)}function hu(t,n,e){for(var r=-1,u=t.length,o=n.length,f={};++r<u;){var c=r<o?n[r]:i;e(f,t[r],c)}return f}function oi(t){return Y(t)?t:[]}function fi(t){return typeof t=="function"?t:ft}function fn(t,n){return b(t)?t:mi(t,n)?[t]:Wu(U(t))}var Xc=H;function cn(t,n,e){var r=t.length;return e=e===i?r:e,!n&&e>=r?t:At(t,n,e)}var lu=$f||function(t){return j.clearTimeout(t)};function pu(t,n){if(n)return t.slice();var e=t.length,r=Ds?Ds(e):new t.constructor(e);return t.copy(r),r}function ci(t){var n=new t.constructor(t.byteLength);return new Ne(n).set(new Ne(t)),n}function Qc(t,n){var e=n?ci(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}function Vc(t){var n=new t.constructor(t.source,Qi.exec(t));return n.lastIndex=t.lastIndex,n}function kc(t){return ue?M(ue.call(t)):{}}function du(t,n){var e=n?ci(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function gu(t,n){if(t!==n){var e=t!==i,r=t===null,u=t===t,o=pt(t),f=n!==i,c=n===null,l=n===n,v=pt(n);if(!c&&!v&&!o&&t>n||o&&f&&l&&!c&&!v||r&&f&&l||!e&&l||!u)return 1;if(!r&&!o&&!v&&t<n||v&&e&&u&&!r&&!o||c&&e&&u||!f&&u||!l)return-1}return 0}function jc(t,n,e){for(var r=-1,u=t.criteria,o=n.criteria,f=u.length,c=e.length;++r<f;){var l=gu(u[r],o[r]);if(l){if(r>=c)return l;var v=e[r];return l*(v=="desc"?-1:1)}}return t.index-n.index}function vu(t,n,e,r){for(var u=-1,o=t.length,f=e.length,c=-1,l=n.length,v=Q(o-f,0),_=d(l+v),m=!r;++c<l;)_[c]=n[c];for(;++u<f;)(m||u<o)&&(_[e[u]]=t[u]);for(;v--;)_[c++]=t[u++];return _}function _u(t,n,e,r){for(var u=-1,o=t.length,f=-1,c=e.length,l=-1,v=n.length,_=Q(o-c,0),m=d(_+v),C=!r;++u<_;)m[u]=t[u];for(var I=u;++l<v;)m[I+l]=n[l];for(;++f<c;)(C||u<o)&&(m[I+e[f]]=t[u++]);return m}function ut(t,n){var e=-1,r=t.length;for(n||(n=d(r));++e<r;)n[e]=t[e];return n}function Ut(t,n,e,r){var u=!e;e||(e={});for(var o=-1,f=n.length;++o<f;){var c=n[o],l=r?r(e[c],t[c],c,e,t):i;l===i&&(l=t[c]),u?Jt(e,c,l):ae(e,c,l)}return e}function th(t,n){return Ut(t,_i(t),n)}function nh(t,n){return Ut(t,bu(t),n)}function Qe(t,n){return function(e,r){var u=b(e)?uf:Ic,o=n?n():{};return u(e,t,E(r,2),o)}}function Wn(t){return H(function(n,e){var r=-1,u=e.length,o=u>1?e[u-1]:i,f=u>2?e[2]:i;for(o=t.length>3&&typeof o=="function"?(u--,o):i,f&&it(e[0],e[1],f)&&(o=u<3?i:o,u=1),n=M(n);++r<u;){var c=e[r];c&&t(n,c,r,o)}return n})}function mu(t,n){return function(e,r){if(e==null)return e;if(!at(e))return t(e,r);for(var u=e.length,o=n?u:-1,f=M(e);(n?o--:++o<u)&&r(f[o],o,f)!==!1;);return e}}function wu(t){return function(n,e,r){for(var u=-1,o=M(n),f=r(n),c=f.length;c--;){var l=f[t?c:++u];if(e(o[l],l,o)===!1)break}return n}}function eh(t,n,e){var r=n&vt,u=le(t);function o(){var f=this&&this!==j&&this instanceof o?u:t;return f.apply(r?e:this,arguments)}return o}function Pu(t){return function(n){n=U(n);var e=Hn(n)?St(n):i,r=e?e[0]:n.charAt(0),u=e?cn(e,1).join(""):n.slice(1);return r[t]()+u}}function Mn(t){return function(n){return Nr(ma(_a(n).replace(Ko,"")),t,"")}}function le(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var e=Fn(t.prototype),r=t.apply(e,n);return K(r)?r:e}}function rh(t,n,e){var r=le(t);function u(){for(var o=arguments.length,f=d(o),c=o,l=Bn(u);c--;)f[c]=arguments[c];var v=o<3&&f[0]!==l&&f[o-1]!==l?[]:sn(f,l);if(o-=v.length,o<e)return Eu(t,n,Ve,u.placeholder,i,f,v,i,i,e-o);var _=this&&this!==j&&this instanceof u?r:t;return ct(_,this,f)}return u}function Cu(t){return function(n,e,r){var u=M(n);if(!at(n)){var o=E(e,3);n=V(n),e=function(c){return o(u[c],c,u)}}var f=t(n,e,r);return f>-1?u[o?n[f]:f]:i}}function Au(t){return Zt(function(n){var e=n.length,r=e,u=Pt.prototype.thru;for(t&&n.reverse();r--;){var o=n[r];if(typeof o!="function")throw new wt(O);if(u&&!f&&nr(o)=="wrapper")var f=new Pt([],!0)}for(r=f?r:e;++r<e;){o=n[r];var c=nr(o),l=c=="wrapper"?gi(o):i;l&&wi(l[0])&&l[1]==(Bt|Dt|Nt|Yn)&&!l[4].length&&l[9]==1?f=f[nr(l[0])].apply(f,l[3]):f=o.length==1&&wi(o)?f[c]():f.thru(o)}return function(){var v=arguments,_=v[0];if(f&&v.length==1&&b(_))return f.plant(_).value();for(var m=0,C=e?n[m].apply(this,v):_;++m<e;)C=n[m].call(this,C);return C}})}function Ve(t,n,e,r,u,o,f,c,l,v){var _=n&Bt,m=n&vt,C=n&ln,I=n&(Dt|Sn),y=n&gr,L=C?i:le(t);function S(){for(var D=arguments.length,$=d(D),dt=D;dt--;)$[dt]=arguments[dt];if(I)var st=Bn(S),gt=gf($,st);if(r&&($=vu($,r,u,I)),o&&($=_u($,o,f,I)),D-=gt,I&&D<v){var Z=sn($,st);return Eu(t,n,Ve,S.placeholder,e,$,Z,c,l,v-D)}var bt=m?e:this,kt=C?bt[t]:t;return D=$.length,c?$=Ih($,c):y&&D>1&&$.reverse(),_&&l<D&&($.length=l),this&&this!==j&&this instanceof S&&(kt=L||le(kt)),kt.apply(bt,$)}return S}function Iu(t,n){return function(e,r){return Tc(e,t,n(r),{})}}function ke(t,n){return function(e,r){var u;if(e===i&&r===i)return n;if(e!==i&&(u=e),r!==i){if(u===i)return r;typeof e=="string"||typeof r=="string"?(e=lt(e),r=lt(r)):(e=ou(e),r=ou(r)),u=t(e,r)}return u}}function hi(t){return Zt(function(n){return n=z(n,ht(E())),H(function(e){var r=this;return t(n,function(u){return ct(u,r,e)})})})}function je(t,n){n=n===i?" ":lt(n);var e=n.length;if(e<2)return e?ii(n,t):n;var r=ii(n,Fe(t/Dn(n)));return Hn(n)?cn(St(r),0,t).join(""):r.slice(0,t)}function ih(t,n,e,r){var u=n&vt,o=le(t);function f(){for(var c=-1,l=arguments.length,v=-1,_=r.length,m=d(_+l),C=this&&this!==j&&this instanceof f?o:t;++v<_;)m[v]=r[v];for(;l--;)m[v++]=arguments[++c];return ct(C,u?e:this,m)}return f}function xu(t){return function(n,e,r){return r&&typeof r!="number"&&it(n,e,r)&&(e=r=i),n=Vt(n),e===i?(e=n,n=0):e=Vt(e),r=r===i?n<e?1:-1:Vt(r),Gc(n,e,r,t)}}function tr(t){return function(n,e){return typeof n=="string"&&typeof e=="string"||(n=xt(n),e=xt(e)),t(n,e)}}function Eu(t,n,e,r,u,o,f,c,l,v){var _=n&Dt,m=_?f:i,C=_?i:f,I=_?o:i,y=_?i:o;n|=_?Nt:On,n&=~(_?On:Nt),n&Gi||(n&=~(vt|ln));var L=[t,n,u,I,m,y,C,c,l,v],S=e.apply(i,L);return wi(t)&&qu(S,L),S.placeholder=r,Uu(S,t,n)}function li(t){var n=X[t];return function(e,r){if(e=xt(e),r=r==null?0:nt(T(r),292),r&&Us(e)){var u=(U(e)+"e").split("e"),o=n(u[0]+"e"+(+u[1]+r));return u=(U(o)+"e").split("e"),+(u[0]+"e"+(+u[1]-r))}return n(e)}}var sh=qn&&1/Re(new qn([,-0]))[1]==pn?function(t){return new qn(t)}:Di;function yu(t){return function(n){var e=et(n);return e==Et?Br(n):e==yt?Af(n):df(n,t(n))}}function Yt(t,n,e,r,u,o,f,c){var l=n&ln;if(!l&&typeof t!="function")throw new wt(O);var v=r?r.length:0;if(v||(n&=~(Nt|On),r=u=i),f=f===i?f:Q(T(f),0),c=c===i?c:T(c),v-=u?u.length:0,n&On){var _=r,m=u;r=u=i}var C=l?i:gi(t),I=[t,n,e,r,u,_,m,o,f,c];if(C&&Ph(I,C),t=I[0],n=I[1],e=I[2],r=I[3],u=I[4],c=I[9]=I[9]===i?l?0:t.length:Q(I[9]-v,0),!c&&n&(Dt|Sn)&&(n&=~(Dt|Sn)),!n||n==vt)var y=eh(t,n,e);else n==Dt||n==Sn?y=rh(t,n,c):(n==Nt||n==(vt|Nt))&&!u.length?y=ih(t,n,e,r):y=Ve.apply(i,I);var L=C?uu:qu;return Uu(L(y,I),t,n)}function Su(t,n,e,r){return t===i||Rt(t,$n[e])&&!W.call(r,e)?n:t}function Ou(t,n,e,r,u,o){return K(t)&&K(n)&&(o.set(n,t),Ye(t,n,i,Ou,o),o.delete(n)),t}function uh(t){return ge(t)?i:t}function Ru(t,n,e,r,u,o){var f=e&yn,c=t.length,l=n.length;if(c!=l&&!(f&&l>c))return!1;var v=o.get(t),_=o.get(n);if(v&&_)return v==n&&_==t;var m=-1,C=!0,I=e&me?new _n:i;for(o.set(t,n),o.set(n,t);++m<c;){var y=t[m],L=n[m];if(r)var S=f?r(L,y,m,n,t,o):r(y,L,m,t,n,o);if(S!==i){if(S)continue;C=!1;break}if(I){if(!$r(n,function(D,$){if(!ne(I,$)&&(y===D||u(y,D,e,r,o)))return I.push($)})){C=!1;break}}else if(!(y===L||u(y,L,e,r,o))){C=!1;break}}return o.delete(t),o.delete(n),C}function ah(t,n,e,r,u,o,f){switch(e){case bn:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case te:return!(t.byteLength!=n.byteLength||!o(new Ne(t),new Ne(n)));case Zn:case Xn:case Qn:return Rt(+t,+n);case Ce:return t.name==n.name&&t.message==n.message;case Vn:case kn:return t==n+"";case Et:var c=Br;case yt:var l=r&yn;if(c||(c=Re),t.size!=n.size&&!l)return!1;var v=f.get(t);if(v)return v==n;r|=me,f.set(t,n);var _=Ru(c(t),c(n),r,u,o,f);return f.delete(t),_;case Ie:if(ue)return ue.call(t)==ue.call(n)}return!1}function oh(t,n,e,r,u,o){var f=e&yn,c=pi(t),l=c.length,v=pi(n),_=v.length;if(l!=_&&!f)return!1;for(var m=l;m--;){var C=c[m];if(!(f?C in n:W.call(n,C)))return!1}var I=o.get(t),y=o.get(n);if(I&&y)return I==n&&y==t;var L=!0;o.set(t,n),o.set(n,t);for(var S=f;++m<l;){C=c[m];var D=t[C],$=n[C];if(r)var dt=f?r($,D,C,n,t,o):r(D,$,C,t,n,o);if(!(dt===i?D===$||u(D,$,e,r,o):dt)){L=!1;break}S||(S=C=="constructor")}if(L&&!S){var st=t.constructor,gt=n.constructor;st!=gt&&"constructor"in t&&"constructor"in n&&!(typeof st=="function"&&st instanceof st&&typeof gt=="function"&&gt instanceof gt)&&(L=!1)}return o.delete(t),o.delete(n),L}function Zt(t){return Ci(Nu(t,i,zu),t+"")}function pi(t){return Xs(t,V,_i)}function di(t){return Xs(t,ot,bu)}var gi=Me?function(t){return Me.get(t)}:Di;function nr(t){for(var n=t.name+"",e=Un[n],r=W.call(Un,n)?e.length:0;r--;){var u=e[r],o=u.func;if(o==null||o==t)return u.name}return n}function Bn(t){var n=W.call(a,"placeholder")?a:t;return n.placeholder}function E(){var t=a.iteratee||Li;return t=t===Li?ks:t,arguments.length?t(arguments[0],arguments[1]):t}function er(t,n){var e=t.__data__;return vh(n)?e[typeof n=="string"?"string":"hash"]:e.map}function vi(t){for(var n=V(t),e=n.length;e--;){var r=n[e],u=t[r];n[e]=[r,u,Hu(u)]}return n}function Pn(t,n){var e=wf(t,n);return Vs(e)?e:i}function fh(t){var n=W.call(t,gn),e=t[gn];try{t[gn]=i;var r=!0}catch{}var u=He.call(t);return r&&(n?t[gn]=e:delete t[gn]),u}var _i=zr?function(t){return t==null?[]:(t=M(t),en(zr(t),function(n){return $s.call(t,n)}))}:Ni,bu=zr?function(t){for(var n=[];t;)rn(n,_i(t)),t=$e(t);return n}:Ni,et=rt;(Kr&&et(new Kr(new ArrayBuffer(1)))!=bn||re&&et(new re)!=Et||Jr&&et(Jr.resolve())!=Ji||qn&&et(new qn)!=yt||ie&&et(new ie)!=jn)&&(et=function(t){var n=rt(t),e=n==Gt?t.constructor:i,r=e?Cn(e):"";if(r)switch(r){case Kf:return bn;case Jf:return Et;case Yf:return Ji;case Zf:return yt;case Xf:return jn}return n});function ch(t,n,e){for(var r=-1,u=e.length;++r<u;){var o=e[r],f=o.size;switch(o.type){case"drop":t+=f;break;case"dropRight":n-=f;break;case"take":n=nt(n,t+f);break;case"takeRight":t=Q(t,n-f);break}}return{start:t,end:n}}function hh(t){var n=t.match(vo);return n?n[1].split(_o):[]}function Tu(t,n,e){n=fn(n,t);for(var r=-1,u=n.length,o=!1;++r<u;){var f=Ft(n[r]);if(!(o=t!=null&&e(t,f)))break;t=t[f]}return o||++r!=u?o:(u=t==null?0:t.length,!!u&&fr(u)&&Xt(f,u)&&(b(t)||An(t)))}function lh(t){var n=t.length,e=new t.constructor(n);return n&&typeof t[0]=="string"&&W.call(t,"index")&&(e.index=t.index,e.input=t.input),e}function Lu(t){return typeof t.constructor=="function"&&!pe(t)?Fn($e(t)):{}}function ph(t,n,e){var r=t.constructor;switch(n){case te:return ci(t);case Zn:case Xn:return new r(+t);case bn:return Qc(t,e);case vr:case _r:case mr:case wr:case Pr:case Cr:case Ar:case Ir:case xr:return du(t,e);case Et:return new r;case Qn:case kn:return new r(t);case Vn:return Vc(t);case yt:return new r;case Ie:return kc(t)}}function dh(t,n){var e=n.length;if(!e)return t;var r=e-1;return n[r]=(e>1?"& ":"")+n[r],n=n.join(e>2?", ":" "),t.replace(go,`{
/* [wrapped with `+n+`] */
`)}function gh(t){return b(t)||An(t)||!!(qs&&t&&t[qs])}function Xt(t,n){var e=typeof t;return n=n??nn,!!n&&(e=="number"||e!="symbol"&&yo.test(t))&&t>-1&&t%1==0&&t<n}function it(t,n,e){if(!K(e))return!1;var r=typeof n;return(r=="number"?at(e)&&Xt(n,e.length):r=="string"&&n in e)?Rt(e[n],t):!1}function mi(t,n){if(b(t))return!1;var e=typeof t;return e=="number"||e=="symbol"||e=="boolean"||t==null||pt(t)?!0:co.test(t)||!fo.test(t)||n!=null&&t in M(n)}function vh(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function wi(t){var n=nr(t),e=a[n];if(typeof e!="function"||!(n in N.prototype))return!1;if(t===e)return!0;var r=gi(e);return!!r&&t===r[0]}function _h(t){return!!Hs&&Hs in t}var mh=Te?Qt:$i;function pe(t){var n=t&&t.constructor,e=typeof n=="function"&&n.prototype||$n;return t===e}function Hu(t){return t===t&&!K(t)}function Du(t,n){return function(e){return e==null?!1:e[t]===n&&(n!==i||t in M(e))}}function wh(t){var n=ar(t,function(r){return e.size===Jn&&e.clear(),r}),e=n.cache;return n}function Ph(t,n){var e=t[1],r=n[1],u=e|r,o=u<(vt|ln|Bt),f=r==Bt&&e==Dt||r==Bt&&e==Yn&&t[7].length<=n[8]||r==(Bt|Yn)&&n[7].length<=n[8]&&e==Dt;if(!(o||f))return t;r&vt&&(t[2]=n[2],u|=e&vt?0:Gi);var c=n[3];if(c){var l=t[3];t[3]=l?vu(l,c,n[4]):c,t[4]=l?sn(t[3],xn):n[4]}return c=n[5],c&&(l=t[5],t[5]=l?_u(l,c,n[6]):c,t[6]=l?sn(t[5],xn):n[6]),c=n[7],c&&(t[7]=c),r&Bt&&(t[8]=t[8]==null?n[8]:nt(t[8],n[8])),t[9]==null&&(t[9]=n[9]),t[0]=n[0],t[1]=u,t}function Ch(t){var n=[];if(t!=null)for(var e in M(t))n.push(e);return n}function Ah(t){return He.call(t)}function Nu(t,n,e){return n=Q(n===i?t.length-1:n,0),function(){for(var r=arguments,u=-1,o=Q(r.length-n,0),f=d(o);++u<o;)f[u]=r[n+u];u=-1;for(var c=d(n+1);++u<n;)c[u]=r[u];return c[n]=e(f),ct(t,this,c)}}function $u(t,n){return n.length<2?t:wn(t,At(n,0,-1))}function Ih(t,n){for(var e=t.length,r=nt(n.length,e),u=ut(t);r--;){var o=n[r];t[r]=Xt(o,e)?u[o]:i}return t}function Pi(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var qu=Fu(uu),de=Uf||function(t,n){return j.setTimeout(t,n)},Ci=Fu(Jc);function Uu(t,n,e){var r=n+"";return Ci(t,dh(r,xh(hh(r),e)))}function Fu(t){var n=0,e=0;return function(){var r=Bf(),u=Ga-(r-e);if(e=r,u>0){if(++n>=Ba)return arguments[0]}else n=0;return t.apply(i,arguments)}}function rr(t,n){var e=-1,r=t.length,u=r-1;for(n=n===i?r:n;++e<n;){var o=ri(e,u),f=t[o];t[o]=t[e],t[e]=f}return t.length=n,t}var Wu=wh(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(ho,function(e,r,u,o){n.push(u?o.replace(Po,"$1"):r||e)}),n});function Ft(t){if(typeof t=="string"||pt(t))return t;var n=t+"";return n=="0"&&1/t==-pn?"-0":n}function Cn(t){if(t!=null){try{return Le.call(t)}catch{}try{return t+""}catch{}}return""}function xh(t,n){return mt(Xa,function(e){var r="_."+e[0];n&e[1]&&!Se(t,r)&&t.push(r)}),t.sort()}function Mu(t){if(t instanceof N)return t.clone();var n=new Pt(t.__wrapped__,t.__chain__);return n.__actions__=ut(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function Eh(t,n,e){(e?it(t,n,e):n===i)?n=1:n=Q(T(n),0);var r=t==null?0:t.length;if(!r||n<1)return[];for(var u=0,o=0,f=d(Fe(r/n));u<r;)f[o++]=At(t,u,u+=n);return f}function yh(t){for(var n=-1,e=t==null?0:t.length,r=0,u=[];++n<e;){var o=t[n];o&&(u[r++]=o)}return u}function Sh(){var t=arguments.length;if(!t)return[];for(var n=d(t-1),e=arguments[0],r=t;r--;)n[r-1]=arguments[r];return rn(b(e)?ut(e):[e],tt(n,1))}var Oh=H(function(t,n){return Y(t)?oe(t,tt(n,1,Y,!0)):[]}),Rh=H(function(t,n){var e=It(n);return Y(e)&&(e=i),Y(t)?oe(t,tt(n,1,Y,!0),E(e,2)):[]}),bh=H(function(t,n){var e=It(n);return Y(e)&&(e=i),Y(t)?oe(t,tt(n,1,Y,!0),i,e):[]});function Th(t,n,e){var r=t==null?0:t.length;return r?(n=e||n===i?1:T(n),At(t,n<0?0:n,r)):[]}function Lh(t,n,e){var r=t==null?0:t.length;return r?(n=e||n===i?1:T(n),n=r-n,At(t,0,n<0?0:n)):[]}function Hh(t,n){return t&&t.length?Xe(t,E(n,3),!0,!0):[]}function Dh(t,n){return t&&t.length?Xe(t,E(n,3),!0):[]}function Nh(t,n,e,r){var u=t==null?0:t.length;return u?(e&&typeof e!="number"&&it(t,n,e)&&(e=0,r=u),Sc(t,n,e,r)):[]}function Bu(t,n,e){var r=t==null?0:t.length;if(!r)return-1;var u=e==null?0:T(e);return u<0&&(u=Q(r+u,0)),Oe(t,E(n,3),u)}function Gu(t,n,e){var r=t==null?0:t.length;if(!r)return-1;var u=r-1;return e!==i&&(u=T(e),u=e<0?Q(r+u,0):nt(u,r-1)),Oe(t,E(n,3),u,!0)}function zu(t){var n=t==null?0:t.length;return n?tt(t,1):[]}function $h(t){var n=t==null?0:t.length;return n?tt(t,pn):[]}function qh(t,n){var e=t==null?0:t.length;return e?(n=n===i?1:T(n),tt(t,n)):[]}function Uh(t){for(var n=-1,e=t==null?0:t.length,r={};++n<e;){var u=t[n];r[u[0]]=u[1]}return r}function Ku(t){return t&&t.length?t[0]:i}function Fh(t,n,e){var r=t==null?0:t.length;if(!r)return-1;var u=e==null?0:T(e);return u<0&&(u=Q(r+u,0)),Ln(t,n,u)}function Wh(t){var n=t==null?0:t.length;return n?At(t,0,-1):[]}var Mh=H(function(t){var n=z(t,oi);return n.length&&n[0]===t[0]?kr(n):[]}),Bh=H(function(t){var n=It(t),e=z(t,oi);return n===It(e)?n=i:e.pop(),e.length&&e[0]===t[0]?kr(e,E(n,2)):[]}),Gh=H(function(t){var n=It(t),e=z(t,oi);return n=typeof n=="function"?n:i,n&&e.pop(),e.length&&e[0]===t[0]?kr(e,i,n):[]});function zh(t,n){return t==null?"":Wf.call(t,n)}function It(t){var n=t==null?0:t.length;return n?t[n-1]:i}function Kh(t,n,e){var r=t==null?0:t.length;if(!r)return-1;var u=r;return e!==i&&(u=T(e),u=u<0?Q(r+u,0):nt(u,r-1)),n===n?xf(t,n,u):Oe(t,Es,u,!0)}function Jh(t,n){return t&&t.length?eu(t,T(n)):i}var Yh=H(Ju);function Ju(t,n){return t&&t.length&&n&&n.length?ei(t,n):t}function Zh(t,n,e){return t&&t.length&&n&&n.length?ei(t,n,E(e,2)):t}function Xh(t,n,e){return t&&t.length&&n&&n.length?ei(t,n,i,e):t}var Qh=Zt(function(t,n){var e=t==null?0:t.length,r=Zr(t,n);return su(t,z(n,function(u){return Xt(u,e)?+u:u}).sort(gu)),r});function Vh(t,n){var e=[];if(!(t&&t.length))return e;var r=-1,u=[],o=t.length;for(n=E(n,3);++r<o;){var f=t[r];n(f,r,t)&&(e.push(f),u.push(r))}return su(t,u),e}function Ai(t){return t==null?t:zf.call(t)}function kh(t,n,e){var r=t==null?0:t.length;return r?(e&&typeof e!="number"&&it(t,n,e)?(n=0,e=r):(n=n==null?0:T(n),e=e===i?r:T(e)),At(t,n,e)):[]}function jh(t,n){return Ze(t,n)}function tl(t,n,e){return si(t,n,E(e,2))}function nl(t,n){var e=t==null?0:t.length;if(e){var r=Ze(t,n);if(r<e&&Rt(t[r],n))return r}return-1}function el(t,n){return Ze(t,n,!0)}function rl(t,n,e){return si(t,n,E(e,2),!0)}function il(t,n){var e=t==null?0:t.length;if(e){var r=Ze(t,n,!0)-1;if(Rt(t[r],n))return r}return-1}function sl(t){return t&&t.length?au(t):[]}function ul(t,n){return t&&t.length?au(t,E(n,2)):[]}function al(t){var n=t==null?0:t.length;return n?At(t,1,n):[]}function ol(t,n,e){return t&&t.length?(n=e||n===i?1:T(n),At(t,0,n<0?0:n)):[]}function fl(t,n,e){var r=t==null?0:t.length;return r?(n=e||n===i?1:T(n),n=r-n,At(t,n<0?0:n,r)):[]}function cl(t,n){return t&&t.length?Xe(t,E(n,3),!1,!0):[]}function hl(t,n){return t&&t.length?Xe(t,E(n,3)):[]}var ll=H(function(t){return on(tt(t,1,Y,!0))}),pl=H(function(t){var n=It(t);return Y(n)&&(n=i),on(tt(t,1,Y,!0),E(n,2))}),dl=H(function(t){var n=It(t);return n=typeof n=="function"?n:i,on(tt(t,1,Y,!0),i,n)});function gl(t){return t&&t.length?on(t):[]}function vl(t,n){return t&&t.length?on(t,E(n,2)):[]}function _l(t,n){return n=typeof n=="function"?n:i,t&&t.length?on(t,i,n):[]}function Ii(t){if(!(t&&t.length))return[];var n=0;return t=en(t,function(e){if(Y(e))return n=Q(e.length,n),!0}),Wr(n,function(e){return z(t,qr(e))})}function Yu(t,n){if(!(t&&t.length))return[];var e=Ii(t);return n==null?e:z(e,function(r){return ct(n,i,r)})}var ml=H(function(t,n){return Y(t)?oe(t,n):[]}),wl=H(function(t){return ai(en(t,Y))}),Pl=H(function(t){var n=It(t);return Y(n)&&(n=i),ai(en(t,Y),E(n,2))}),Cl=H(function(t){var n=It(t);return n=typeof n=="function"?n:i,ai(en(t,Y),i,n)}),Al=H(Ii);function Il(t,n){return hu(t||[],n||[],ae)}function xl(t,n){return hu(t||[],n||[],he)}var El=H(function(t){var n=t.length,e=n>1?t[n-1]:i;return e=typeof e=="function"?(t.pop(),e):i,Yu(t,e)});function Zu(t){var n=a(t);return n.__chain__=!0,n}function yl(t,n){return n(t),t}function ir(t,n){return n(t)}var Sl=Zt(function(t){var n=t.length,e=n?t[0]:0,r=this.__wrapped__,u=function(o){return Zr(o,t)};return n>1||this.__actions__.length||!(r instanceof N)||!Xt(e)?this.thru(u):(r=r.slice(e,+e+(n?1:0)),r.__actions__.push({func:ir,args:[u],thisArg:i}),new Pt(r,this.__chain__).thru(function(o){return n&&!o.length&&o.push(i),o}))});function Ol(){return Zu(this)}function Rl(){return new Pt(this.value(),this.__chain__)}function bl(){this.__values__===i&&(this.__values__=oa(this.value()));var t=this.__index__>=this.__values__.length,n=t?i:this.__values__[this.__index__++];return{done:t,value:n}}function Tl(){return this}function Ll(t){for(var n,e=this;e instanceof Ge;){var r=Mu(e);r.__index__=0,r.__values__=i,n?u.__wrapped__=r:n=r;var u=r;e=e.__wrapped__}return u.__wrapped__=t,n}function Hl(){var t=this.__wrapped__;if(t instanceof N){var n=t;return this.__actions__.length&&(n=new N(this)),n=n.reverse(),n.__actions__.push({func:ir,args:[Ai],thisArg:i}),new Pt(n,this.__chain__)}return this.thru(Ai)}function Dl(){return cu(this.__wrapped__,this.__actions__)}var Nl=Qe(function(t,n,e){W.call(t,e)?++t[e]:Jt(t,e,1)});function $l(t,n,e){var r=b(t)?Is:yc;return e&&it(t,n,e)&&(n=i),r(t,E(n,3))}function ql(t,n){var e=b(t)?en:Ys;return e(t,E(n,3))}var Ul=Cu(Bu),Fl=Cu(Gu);function Wl(t,n){return tt(sr(t,n),1)}function Ml(t,n){return tt(sr(t,n),pn)}function Bl(t,n,e){return e=e===i?1:T(e),tt(sr(t,n),e)}function Xu(t,n){var e=b(t)?mt:an;return e(t,E(n,3))}function Qu(t,n){var e=b(t)?af:Js;return e(t,E(n,3))}var Gl=Qe(function(t,n,e){W.call(t,e)?t[e].push(n):Jt(t,e,[n])});function zl(t,n,e,r){t=at(t)?t:zn(t),e=e&&!r?T(e):0;var u=t.length;return e<0&&(e=Q(u+e,0)),cr(t)?e<=u&&t.indexOf(n,e)>-1:!!u&&Ln(t,n,e)>-1}var Kl=H(function(t,n,e){var r=-1,u=typeof n=="function",o=at(t)?d(t.length):[];return an(t,function(f){o[++r]=u?ct(n,f,e):fe(f,n,e)}),o}),Jl=Qe(function(t,n,e){Jt(t,e,n)});function sr(t,n){var e=b(t)?z:js;return e(t,E(n,3))}function Yl(t,n,e,r){return t==null?[]:(b(n)||(n=n==null?[]:[n]),e=r?i:e,b(e)||(e=e==null?[]:[e]),ru(t,n,e))}var Zl=Qe(function(t,n,e){t[e?0:1].push(n)},function(){return[[],[]]});function Xl(t,n,e){var r=b(t)?Nr:Ss,u=arguments.length<3;return r(t,E(n,4),e,u,an)}function Ql(t,n,e){var r=b(t)?of:Ss,u=arguments.length<3;return r(t,E(n,4),e,u,Js)}function Vl(t,n){var e=b(t)?en:Ys;return e(t,or(E(n,3)))}function kl(t){var n=b(t)?Bs:zc;return n(t)}function jl(t,n,e){(e?it(t,n,e):n===i)?n=1:n=T(n);var r=b(t)?Cc:Kc;return r(t,n)}function tp(t){var n=b(t)?Ac:Yc;return n(t)}function np(t){if(t==null)return 0;if(at(t))return cr(t)?Dn(t):t.length;var n=et(t);return n==Et||n==yt?t.size:ti(t).length}function ep(t,n,e){var r=b(t)?$r:Zc;return e&&it(t,n,e)&&(n=i),r(t,E(n,3))}var rp=H(function(t,n){if(t==null)return[];var e=n.length;return e>1&&it(t,n[0],n[1])?n=[]:e>2&&it(n[0],n[1],n[2])&&(n=[n[0]]),ru(t,tt(n,1),[])}),ur=qf||function(){return j.Date.now()};function ip(t,n){if(typeof n!="function")throw new wt(O);return t=T(t),function(){if(--t<1)return n.apply(this,arguments)}}function Vu(t,n,e){return n=e?i:n,n=t&&n==null?t.length:n,Yt(t,Bt,i,i,i,i,n)}function ku(t,n){var e;if(typeof n!="function")throw new wt(O);return t=T(t),function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=i),e}}var xi=H(function(t,n,e){var r=vt;if(e.length){var u=sn(e,Bn(xi));r|=Nt}return Yt(t,r,n,e,u)}),ju=H(function(t,n,e){var r=vt|ln;if(e.length){var u=sn(e,Bn(ju));r|=Nt}return Yt(n,r,t,e,u)});function ta(t,n,e){n=e?i:n;var r=Yt(t,Dt,i,i,i,i,i,n);return r.placeholder=ta.placeholder,r}function na(t,n,e){n=e?i:n;var r=Yt(t,Sn,i,i,i,i,i,n);return r.placeholder=na.placeholder,r}function ea(t,n,e){var r,u,o,f,c,l,v=0,_=!1,m=!1,C=!0;if(typeof t!="function")throw new wt(O);n=xt(n)||0,K(e)&&(_=!!e.leading,m="maxWait"in e,o=m?Q(xt(e.maxWait)||0,n):o,C="trailing"in e?!!e.trailing:C);function I(Z){var bt=r,kt=u;return r=u=i,v=Z,f=t.apply(kt,bt),f}function y(Z){return v=Z,c=de(D,n),_?I(Z):f}function L(Z){var bt=Z-l,kt=Z-v,Ca=n-bt;return m?nt(Ca,o-kt):Ca}function S(Z){var bt=Z-l,kt=Z-v;return l===i||bt>=n||bt<0||m&&kt>=o}function D(){var Z=ur();if(S(Z))return $(Z);c=de(D,L(Z))}function $(Z){return c=i,C&&r?I(Z):(r=u=i,f)}function dt(){c!==i&&lu(c),v=0,r=l=u=c=i}function st(){return c===i?f:$(ur())}function gt(){var Z=ur(),bt=S(Z);if(r=arguments,u=this,l=Z,bt){if(c===i)return y(l);if(m)return lu(c),c=de(D,n),I(l)}return c===i&&(c=de(D,n)),f}return gt.cancel=dt,gt.flush=st,gt}var sp=H(function(t,n){return Ks(t,1,n)}),up=H(function(t,n,e){return Ks(t,xt(n)||0,e)});function ap(t){return Yt(t,gr)}function ar(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new wt(O);var e=function(){var r=arguments,u=n?n.apply(this,r):r[0],o=e.cache;if(o.has(u))return o.get(u);var f=t.apply(this,r);return e.cache=o.set(u,f)||o,f};return e.cache=new(ar.Cache||Kt),e}ar.Cache=Kt;function or(t){if(typeof t!="function")throw new wt(O);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function op(t){return ku(2,t)}var fp=Xc(function(t,n){n=n.length==1&&b(n[0])?z(n[0],ht(E())):z(tt(n,1),ht(E()));var e=n.length;return H(function(r){for(var u=-1,o=nt(r.length,e);++u<o;)r[u]=n[u].call(this,r[u]);return ct(t,this,r)})}),Ei=H(function(t,n){var e=sn(n,Bn(Ei));return Yt(t,Nt,i,n,e)}),ra=H(function(t,n){var e=sn(n,Bn(ra));return Yt(t,On,i,n,e)}),cp=Zt(function(t,n){return Yt(t,Yn,i,i,i,n)});function hp(t,n){if(typeof t!="function")throw new wt(O);return n=n===i?n:T(n),H(t,n)}function lp(t,n){if(typeof t!="function")throw new wt(O);return n=n==null?0:Q(T(n),0),H(function(e){var r=e[n],u=cn(e,0,n);return r&&rn(u,r),ct(t,this,u)})}function pp(t,n,e){var r=!0,u=!0;if(typeof t!="function")throw new wt(O);return K(e)&&(r="leading"in e?!!e.leading:r,u="trailing"in e?!!e.trailing:u),ea(t,n,{leading:r,maxWait:n,trailing:u})}function dp(t){return Vu(t,1)}function gp(t,n){return Ei(fi(n),t)}function vp(){if(!arguments.length)return[];var t=arguments[0];return b(t)?t:[t]}function _p(t){return Ct(t,En)}function mp(t,n){return n=typeof n=="function"?n:i,Ct(t,En,n)}function wp(t){return Ct(t,Ht|En)}function Pp(t,n){return n=typeof n=="function"?n:i,Ct(t,Ht|En,n)}function Cp(t,n){return n==null||zs(t,n,V(n))}function Rt(t,n){return t===n||t!==t&&n!==n}var Ap=tr(Vr),Ip=tr(function(t,n){return t>=n}),An=Qs(function(){return arguments}())?Qs:function(t){return J(t)&&W.call(t,"callee")&&!$s.call(t,"callee")},b=d.isArray,xp=_s?ht(_s):Lc;function at(t){return t!=null&&fr(t.length)&&!Qt(t)}function Y(t){return J(t)&&at(t)}function Ep(t){return t===!0||t===!1||J(t)&&rt(t)==Zn}var hn=Ff||$i,yp=ms?ht(ms):Hc;function Sp(t){return J(t)&&t.nodeType===1&&!ge(t)}function Op(t){if(t==null)return!0;if(at(t)&&(b(t)||typeof t=="string"||typeof t.splice=="function"||hn(t)||Gn(t)||An(t)))return!t.length;var n=et(t);if(n==Et||n==yt)return!t.size;if(pe(t))return!ti(t).length;for(var e in t)if(W.call(t,e))return!1;return!0}function Rp(t,n){return ce(t,n)}function bp(t,n,e){e=typeof e=="function"?e:i;var r=e?e(t,n):i;return r===i?ce(t,n,i,e):!!r}function yi(t){if(!J(t))return!1;var n=rt(t);return n==Ce||n==Va||typeof t.message=="string"&&typeof t.name=="string"&&!ge(t)}function Tp(t){return typeof t=="number"&&Us(t)}function Qt(t){if(!K(t))return!1;var n=rt(t);return n==Ae||n==Ki||n==Qa||n==ja}function ia(t){return typeof t=="number"&&t==T(t)}function fr(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=nn}function K(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}function J(t){return t!=null&&typeof t=="object"}var sa=ws?ht(ws):Nc;function Lp(t,n){return t===n||jr(t,n,vi(n))}function Hp(t,n,e){return e=typeof e=="function"?e:i,jr(t,n,vi(n),e)}function Dp(t){return ua(t)&&t!=+t}function Np(t){if(mh(t))throw new R(x);return Vs(t)}function $p(t){return t===null}function qp(t){return t==null}function ua(t){return typeof t=="number"||J(t)&&rt(t)==Qn}function ge(t){if(!J(t)||rt(t)!=Gt)return!1;var n=$e(t);if(n===null)return!0;var e=W.call(n,"constructor")&&n.constructor;return typeof e=="function"&&e instanceof e&&Le.call(e)==Hf}var Si=Ps?ht(Ps):$c;function Up(t){return ia(t)&&t>=-nn&&t<=nn}var aa=Cs?ht(Cs):qc;function cr(t){return typeof t=="string"||!b(t)&&J(t)&&rt(t)==kn}function pt(t){return typeof t=="symbol"||J(t)&&rt(t)==Ie}var Gn=As?ht(As):Uc;function Fp(t){return t===i}function Wp(t){return J(t)&&et(t)==jn}function Mp(t){return J(t)&&rt(t)==no}var Bp=tr(ni),Gp=tr(function(t,n){return t<=n});function oa(t){if(!t)return[];if(at(t))return cr(t)?St(t):ut(t);if(ee&&t[ee])return Cf(t[ee]());var n=et(t),e=n==Et?Br:n==yt?Re:zn;return e(t)}function Vt(t){if(!t)return t===0?t:0;if(t=xt(t),t===pn||t===-pn){var n=t<0?-1:1;return n*Ja}return t===t?t:0}function T(t){var n=Vt(t),e=n%1;return n===n?e?n-e:n:0}function fa(t){return t?mn(T(t),0,$t):0}function xt(t){if(typeof t=="number")return t;if(pt(t))return we;if(K(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=K(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=Os(t);var e=Io.test(t);return e||Eo.test(t)?rf(t.slice(2),e?2:8):Ao.test(t)?we:+t}function ca(t){return Ut(t,ot(t))}function zp(t){return t?mn(T(t),-nn,nn):t===0?t:0}function U(t){return t==null?"":lt(t)}var Kp=Wn(function(t,n){if(pe(n)||at(n)){Ut(n,V(n),t);return}for(var e in n)W.call(n,e)&&ae(t,e,n[e])}),ha=Wn(function(t,n){Ut(n,ot(n),t)}),hr=Wn(function(t,n,e,r){Ut(n,ot(n),t,r)}),Jp=Wn(function(t,n,e,r){Ut(n,V(n),t,r)}),Yp=Zt(Zr);function Zp(t,n){var e=Fn(t);return n==null?e:Gs(e,n)}var Xp=H(function(t,n){t=M(t);var e=-1,r=n.length,u=r>2?n[2]:i;for(u&&it(n[0],n[1],u)&&(r=1);++e<r;)for(var o=n[e],f=ot(o),c=-1,l=f.length;++c<l;){var v=f[c],_=t[v];(_===i||Rt(_,$n[v])&&!W.call(t,v))&&(t[v]=o[v])}return t}),Qp=H(function(t){return t.push(i,Ou),ct(la,i,t)});function Vp(t,n){return xs(t,E(n,3),qt)}function kp(t,n){return xs(t,E(n,3),Qr)}function jp(t,n){return t==null?t:Xr(t,E(n,3),ot)}function td(t,n){return t==null?t:Zs(t,E(n,3),ot)}function nd(t,n){return t&&qt(t,E(n,3))}function ed(t,n){return t&&Qr(t,E(n,3))}function rd(t){return t==null?[]:Je(t,V(t))}function id(t){return t==null?[]:Je(t,ot(t))}function Oi(t,n,e){var r=t==null?i:wn(t,n);return r===i?e:r}function sd(t,n){return t!=null&&Tu(t,n,Oc)}function Ri(t,n){return t!=null&&Tu(t,n,Rc)}var ud=Iu(function(t,n,e){n!=null&&typeof n.toString!="function"&&(n=He.call(n)),t[n]=e},Ti(ft)),ad=Iu(function(t,n,e){n!=null&&typeof n.toString!="function"&&(n=He.call(n)),W.call(t,n)?t[n].push(e):t[n]=[e]},E),od=H(fe);function V(t){return at(t)?Ms(t):ti(t)}function ot(t){return at(t)?Ms(t,!0):Fc(t)}function fd(t,n){var e={};return n=E(n,3),qt(t,function(r,u,o){Jt(e,n(r,u,o),r)}),e}function cd(t,n){var e={};return n=E(n,3),qt(t,function(r,u,o){Jt(e,u,n(r,u,o))}),e}var hd=Wn(function(t,n,e){Ye(t,n,e)}),la=Wn(function(t,n,e,r){Ye(t,n,e,r)}),ld=Zt(function(t,n){var e={};if(t==null)return e;var r=!1;n=z(n,function(o){return o=fn(o,t),r||(r=o.length>1),o}),Ut(t,di(t),e),r&&(e=Ct(e,Ht|Mt|En,uh));for(var u=n.length;u--;)ui(e,n[u]);return e});function pd(t,n){return pa(t,or(E(n)))}var dd=Zt(function(t,n){return t==null?{}:Mc(t,n)});function pa(t,n){if(t==null)return{};var e=z(di(t),function(r){return[r]});return n=E(n),iu(t,e,function(r,u){return n(r,u[0])})}function gd(t,n,e){n=fn(n,t);var r=-1,u=n.length;for(u||(u=1,t=i);++r<u;){var o=t==null?i:t[Ft(n[r])];o===i&&(r=u,o=e),t=Qt(o)?o.call(t):o}return t}function vd(t,n,e){return t==null?t:he(t,n,e)}function _d(t,n,e,r){return r=typeof r=="function"?r:i,t==null?t:he(t,n,e,r)}var da=yu(V),ga=yu(ot);function md(t,n,e){var r=b(t),u=r||hn(t)||Gn(t);if(n=E(n,4),e==null){var o=t&&t.constructor;u?e=r?new o:[]:K(t)?e=Qt(o)?Fn($e(t)):{}:e={}}return(u?mt:qt)(t,function(f,c,l){return n(e,f,c,l)}),e}function wd(t,n){return t==null?!0:ui(t,n)}function Pd(t,n,e){return t==null?t:fu(t,n,fi(e))}function Cd(t,n,e,r){return r=typeof r=="function"?r:i,t==null?t:fu(t,n,fi(e),r)}function zn(t){return t==null?[]:Mr(t,V(t))}function Ad(t){return t==null?[]:Mr(t,ot(t))}function Id(t,n,e){return e===i&&(e=n,n=i),e!==i&&(e=xt(e),e=e===e?e:0),n!==i&&(n=xt(n),n=n===n?n:0),mn(xt(t),n,e)}function xd(t,n,e){return n=Vt(n),e===i?(e=n,n=0):e=Vt(e),t=xt(t),bc(t,n,e)}function Ed(t,n,e){if(e&&typeof e!="boolean"&&it(t,n,e)&&(n=e=i),e===i&&(typeof n=="boolean"?(e=n,n=i):typeof t=="boolean"&&(e=t,t=i)),t===i&&n===i?(t=0,n=1):(t=Vt(t),n===i?(n=t,t=0):n=Vt(n)),t>n){var r=t;t=n,n=r}if(e||t%1||n%1){var u=Fs();return nt(t+u*(n-t+ef("1e-"+((u+"").length-1))),n)}return ri(t,n)}var yd=Mn(function(t,n,e){return n=n.toLowerCase(),t+(e?va(n):n)});function va(t){return bi(U(t).toLowerCase())}function _a(t){return t=U(t),t&&t.replace(So,vf).replace(Jo,"")}function Sd(t,n,e){t=U(t),n=lt(n);var r=t.length;e=e===i?r:mn(T(e),0,r);var u=e;return e-=n.length,e>=0&&t.slice(e,u)==n}function Od(t){return t=U(t),t&&uo.test(t)?t.replace(Zi,_f):t}function Rd(t){return t=U(t),t&&lo.test(t)?t.replace(Er,"\\$&"):t}var bd=Mn(function(t,n,e){return t+(e?"-":"")+n.toLowerCase()}),Td=Mn(function(t,n,e){return t+(e?" ":"")+n.toLowerCase()}),Ld=Pu("toLowerCase");function Hd(t,n,e){t=U(t),n=T(n);var r=n?Dn(t):0;if(!n||r>=n)return t;var u=(n-r)/2;return je(We(u),e)+t+je(Fe(u),e)}function Dd(t,n,e){t=U(t),n=T(n);var r=n?Dn(t):0;return n&&r<n?t+je(n-r,e):t}function Nd(t,n,e){t=U(t),n=T(n);var r=n?Dn(t):0;return n&&r<n?je(n-r,e)+t:t}function $d(t,n,e){return e||n==null?n=0:n&&(n=+n),Gf(U(t).replace(yr,""),n||0)}function qd(t,n,e){return(e?it(t,n,e):n===i)?n=1:n=T(n),ii(U(t),n)}function Ud(){var t=arguments,n=U(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var Fd=Mn(function(t,n,e){return t+(e?"_":"")+n.toLowerCase()});function Wd(t,n,e){return e&&typeof e!="number"&&it(t,n,e)&&(n=e=i),e=e===i?$t:e>>>0,e?(t=U(t),t&&(typeof n=="string"||n!=null&&!Si(n))&&(n=lt(n),!n&&Hn(t))?cn(St(t),0,e):t.split(n,e)):[]}var Md=Mn(function(t,n,e){return t+(e?" ":"")+bi(n)});function Bd(t,n,e){return t=U(t),e=e==null?0:mn(T(e),0,t.length),n=lt(n),t.slice(e,e+n.length)==n}function Gd(t,n,e){var r=a.templateSettings;e&&it(t,n,e)&&(n=i),t=U(t),n=hr({},n,r,Su);var u=hr({},n.imports,r.imports,Su),o=V(u),f=Mr(u,o),c,l,v=0,_=n.interpolate||xe,m="__p += '",C=Gr((n.escape||xe).source+"|"+_.source+"|"+(_===Xi?Co:xe).source+"|"+(n.evaluate||xe).source+"|$","g"),I="//# sourceURL="+(W.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Vo+"]")+`
`;t.replace(C,function(S,D,$,dt,st,gt){return $||($=dt),m+=t.slice(v,gt).replace(Oo,mf),D&&(c=!0,m+=`' +
__e(`+D+`) +
'`),st&&(l=!0,m+=`';
`+st+`;
__p += '`),$&&(m+=`' +
((__t = (`+$+`)) == null ? '' : __t) +
'`),v=gt+S.length,S}),m+=`';
`;var y=W.call(n,"variable")&&n.variable;if(!y)m=`with (obj) {
`+m+`
}
`;else if(wo.test(y))throw new R(k);m=(l?m.replace(eo,""):m).replace(ro,"$1").replace(io,"$1;"),m="function("+(y||"obj")+`) {
`+(y?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(c?", __e = _.escape":"")+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+m+`return __p
}`;var L=wa(function(){return q(o,I+"return "+m).apply(i,f)});if(L.source=m,yi(L))throw L;return L}function zd(t){return U(t).toLowerCase()}function Kd(t){return U(t).toUpperCase()}function Jd(t,n,e){if(t=U(t),t&&(e||n===i))return Os(t);if(!t||!(n=lt(n)))return t;var r=St(t),u=St(n),o=Rs(r,u),f=bs(r,u)+1;return cn(r,o,f).join("")}function Yd(t,n,e){if(t=U(t),t&&(e||n===i))return t.slice(0,Ls(t)+1);if(!t||!(n=lt(n)))return t;var r=St(t),u=bs(r,St(n))+1;return cn(r,0,u).join("")}function Zd(t,n,e){if(t=U(t),t&&(e||n===i))return t.replace(yr,"");if(!t||!(n=lt(n)))return t;var r=St(t),u=Rs(r,St(n));return cn(r,u).join("")}function Xd(t,n){var e=Wa,r=Ma;if(K(n)){var u="separator"in n?n.separator:u;e="length"in n?T(n.length):e,r="omission"in n?lt(n.omission):r}t=U(t);var o=t.length;if(Hn(t)){var f=St(t);o=f.length}if(e>=o)return t;var c=e-Dn(r);if(c<1)return r;var l=f?cn(f,0,c).join(""):t.slice(0,c);if(u===i)return l+r;if(f&&(c+=l.length-c),Si(u)){if(t.slice(c).search(u)){var v,_=l;for(u.global||(u=Gr(u.source,U(Qi.exec(u))+"g")),u.lastIndex=0;v=u.exec(_);)var m=v.index;l=l.slice(0,m===i?c:m)}}else if(t.indexOf(lt(u),c)!=c){var C=l.lastIndexOf(u);C>-1&&(l=l.slice(0,C))}return l+r}function Qd(t){return t=U(t),t&&so.test(t)?t.replace(Yi,Ef):t}var Vd=Mn(function(t,n,e){return t+(e?" ":"")+n.toUpperCase()}),bi=Pu("toUpperCase");function ma(t,n,e){return t=U(t),n=e?i:n,n===i?Pf(t)?Of(t):hf(t):t.match(n)||[]}var wa=H(function(t,n){try{return ct(t,i,n)}catch(e){return yi(e)?e:new R(e)}}),kd=Zt(function(t,n){return mt(n,function(e){e=Ft(e),Jt(t,e,xi(t[e],t))}),t});function jd(t){var n=t==null?0:t.length,e=E();return t=n?z(t,function(r){if(typeof r[1]!="function")throw new wt(O);return[e(r[0]),r[1]]}):[],H(function(r){for(var u=-1;++u<n;){var o=t[u];if(ct(o[0],this,r))return ct(o[1],this,r)}})}function tg(t){return Ec(Ct(t,Ht))}function Ti(t){return function(){return t}}function ng(t,n){return t==null||t!==t?n:t}var eg=Au(),rg=Au(!0);function ft(t){return t}function Li(t){return ks(typeof t=="function"?t:Ct(t,Ht))}function ig(t){return tu(Ct(t,Ht))}function sg(t,n){return nu(t,Ct(n,Ht))}var ug=H(function(t,n){return function(e){return fe(e,t,n)}}),ag=H(function(t,n){return function(e){return fe(t,e,n)}});function Hi(t,n,e){var r=V(n),u=Je(n,r);e==null&&!(K(n)&&(u.length||!r.length))&&(e=n,n=t,t=this,u=Je(n,V(n)));var o=!(K(e)&&"chain"in e)||!!e.chain,f=Qt(t);return mt(u,function(c){var l=n[c];t[c]=l,f&&(t.prototype[c]=function(){var v=this.__chain__;if(o||v){var _=t(this.__wrapped__),m=_.__actions__=ut(this.__actions__);return m.push({func:l,args:arguments,thisArg:t}),_.__chain__=v,_}return l.apply(t,rn([this.value()],arguments))})}),t}function og(){return j._===this&&(j._=Df),this}function Di(){}function fg(t){return t=T(t),H(function(n){return eu(n,t)})}var cg=hi(z),hg=hi(Is),lg=hi($r);function Pa(t){return mi(t)?qr(Ft(t)):Bc(t)}function pg(t){return function(n){return t==null?i:wn(t,n)}}var dg=xu(),gg=xu(!0);function Ni(){return[]}function $i(){return!1}function vg(){return{}}function _g(){return""}function mg(){return!0}function wg(t,n){if(t=T(t),t<1||t>nn)return[];var e=$t,r=nt(t,$t);n=E(n),t-=$t;for(var u=Wr(r,n);++e<t;)n(e);return u}function Pg(t){return b(t)?z(t,Ft):pt(t)?[t]:ut(Wu(U(t)))}function Cg(t){var n=++Lf;return U(t)+n}var Ag=ke(function(t,n){return t+n},0),Ig=li("ceil"),xg=ke(function(t,n){return t/n},1),Eg=li("floor");function yg(t){return t&&t.length?Ke(t,ft,Vr):i}function Sg(t,n){return t&&t.length?Ke(t,E(n,2),Vr):i}function Og(t){return ys(t,ft)}function Rg(t,n){return ys(t,E(n,2))}function bg(t){return t&&t.length?Ke(t,ft,ni):i}function Tg(t,n){return t&&t.length?Ke(t,E(n,2),ni):i}var Lg=ke(function(t,n){return t*n},1),Hg=li("round"),Dg=ke(function(t,n){return t-n},0);function Ng(t){return t&&t.length?Fr(t,ft):0}function $g(t,n){return t&&t.length?Fr(t,E(n,2)):0}return a.after=ip,a.ary=Vu,a.assign=Kp,a.assignIn=ha,a.assignInWith=hr,a.assignWith=Jp,a.at=Yp,a.before=ku,a.bind=xi,a.bindAll=kd,a.bindKey=ju,a.castArray=vp,a.chain=Zu,a.chunk=Eh,a.compact=yh,a.concat=Sh,a.cond=jd,a.conforms=tg,a.constant=Ti,a.countBy=Nl,a.create=Zp,a.curry=ta,a.curryRight=na,a.debounce=ea,a.defaults=Xp,a.defaultsDeep=Qp,a.defer=sp,a.delay=up,a.difference=Oh,a.differenceBy=Rh,a.differenceWith=bh,a.drop=Th,a.dropRight=Lh,a.dropRightWhile=Hh,a.dropWhile=Dh,a.fill=Nh,a.filter=ql,a.flatMap=Wl,a.flatMapDeep=Ml,a.flatMapDepth=Bl,a.flatten=zu,a.flattenDeep=$h,a.flattenDepth=qh,a.flip=ap,a.flow=eg,a.flowRight=rg,a.fromPairs=Uh,a.functions=rd,a.functionsIn=id,a.groupBy=Gl,a.initial=Wh,a.intersection=Mh,a.intersectionBy=Bh,a.intersectionWith=Gh,a.invert=ud,a.invertBy=ad,a.invokeMap=Kl,a.iteratee=Li,a.keyBy=Jl,a.keys=V,a.keysIn=ot,a.map=sr,a.mapKeys=fd,a.mapValues=cd,a.matches=ig,a.matchesProperty=sg,a.memoize=ar,a.merge=hd,a.mergeWith=la,a.method=ug,a.methodOf=ag,a.mixin=Hi,a.negate=or,a.nthArg=fg,a.omit=ld,a.omitBy=pd,a.once=op,a.orderBy=Yl,a.over=cg,a.overArgs=fp,a.overEvery=hg,a.overSome=lg,a.partial=Ei,a.partialRight=ra,a.partition=Zl,a.pick=dd,a.pickBy=pa,a.property=Pa,a.propertyOf=pg,a.pull=Yh,a.pullAll=Ju,a.pullAllBy=Zh,a.pullAllWith=Xh,a.pullAt=Qh,a.range=dg,a.rangeRight=gg,a.rearg=cp,a.reject=Vl,a.remove=Vh,a.rest=hp,a.reverse=Ai,a.sampleSize=jl,a.set=vd,a.setWith=_d,a.shuffle=tp,a.slice=kh,a.sortBy=rp,a.sortedUniq=sl,a.sortedUniqBy=ul,a.split=Wd,a.spread=lp,a.tail=al,a.take=ol,a.takeRight=fl,a.takeRightWhile=cl,a.takeWhile=hl,a.tap=yl,a.throttle=pp,a.thru=ir,a.toArray=oa,a.toPairs=da,a.toPairsIn=ga,a.toPath=Pg,a.toPlainObject=ca,a.transform=md,a.unary=dp,a.union=ll,a.unionBy=pl,a.unionWith=dl,a.uniq=gl,a.uniqBy=vl,a.uniqWith=_l,a.unset=wd,a.unzip=Ii,a.unzipWith=Yu,a.update=Pd,a.updateWith=Cd,a.values=zn,a.valuesIn=Ad,a.without=ml,a.words=ma,a.wrap=gp,a.xor=wl,a.xorBy=Pl,a.xorWith=Cl,a.zip=Al,a.zipObject=Il,a.zipObjectDeep=xl,a.zipWith=El,a.entries=da,a.entriesIn=ga,a.extend=ha,a.extendWith=hr,Hi(a,a),a.add=Ag,a.attempt=wa,a.camelCase=yd,a.capitalize=va,a.ceil=Ig,a.clamp=Id,a.clone=_p,a.cloneDeep=wp,a.cloneDeepWith=Pp,a.cloneWith=mp,a.conformsTo=Cp,a.deburr=_a,a.defaultTo=ng,a.divide=xg,a.endsWith=Sd,a.eq=Rt,a.escape=Od,a.escapeRegExp=Rd,a.every=$l,a.find=Ul,a.findIndex=Bu,a.findKey=Vp,a.findLast=Fl,a.findLastIndex=Gu,a.findLastKey=kp,a.floor=Eg,a.forEach=Xu,a.forEachRight=Qu,a.forIn=jp,a.forInRight=td,a.forOwn=nd,a.forOwnRight=ed,a.get=Oi,a.gt=Ap,a.gte=Ip,a.has=sd,a.hasIn=Ri,a.head=Ku,a.identity=ft,a.includes=zl,a.indexOf=Fh,a.inRange=xd,a.invoke=od,a.isArguments=An,a.isArray=b,a.isArrayBuffer=xp,a.isArrayLike=at,a.isArrayLikeObject=Y,a.isBoolean=Ep,a.isBuffer=hn,a.isDate=yp,a.isElement=Sp,a.isEmpty=Op,a.isEqual=Rp,a.isEqualWith=bp,a.isError=yi,a.isFinite=Tp,a.isFunction=Qt,a.isInteger=ia,a.isLength=fr,a.isMap=sa,a.isMatch=Lp,a.isMatchWith=Hp,a.isNaN=Dp,a.isNative=Np,a.isNil=qp,a.isNull=$p,a.isNumber=ua,a.isObject=K,a.isObjectLike=J,a.isPlainObject=ge,a.isRegExp=Si,a.isSafeInteger=Up,a.isSet=aa,a.isString=cr,a.isSymbol=pt,a.isTypedArray=Gn,a.isUndefined=Fp,a.isWeakMap=Wp,a.isWeakSet=Mp,a.join=zh,a.kebabCase=bd,a.last=It,a.lastIndexOf=Kh,a.lowerCase=Td,a.lowerFirst=Ld,a.lt=Bp,a.lte=Gp,a.max=yg,a.maxBy=Sg,a.mean=Og,a.meanBy=Rg,a.min=bg,a.minBy=Tg,a.stubArray=Ni,a.stubFalse=$i,a.stubObject=vg,a.stubString=_g,a.stubTrue=mg,a.multiply=Lg,a.nth=Jh,a.noConflict=og,a.noop=Di,a.now=ur,a.pad=Hd,a.padEnd=Dd,a.padStart=Nd,a.parseInt=$d,a.random=Ed,a.reduce=Xl,a.reduceRight=Ql,a.repeat=qd,a.replace=Ud,a.result=gd,a.round=Hg,a.runInContext=h,a.sample=kl,a.size=np,a.snakeCase=Fd,a.some=ep,a.sortedIndex=jh,a.sortedIndexBy=tl,a.sortedIndexOf=nl,a.sortedLastIndex=el,a.sortedLastIndexBy=rl,a.sortedLastIndexOf=il,a.startCase=Md,a.startsWith=Bd,a.subtract=Dg,a.sum=Ng,a.sumBy=$g,a.template=Gd,a.times=wg,a.toFinite=Vt,a.toInteger=T,a.toLength=fa,a.toLower=zd,a.toNumber=xt,a.toSafeInteger=zp,a.toString=U,a.toUpper=Kd,a.trim=Jd,a.trimEnd=Yd,a.trimStart=Zd,a.truncate=Xd,a.unescape=Qd,a.uniqueId=Cg,a.upperCase=Vd,a.upperFirst=bi,a.each=Xu,a.eachRight=Qu,a.first=Ku,Hi(a,function(){var t={};return qt(a,function(n,e){W.call(a.prototype,e)||(t[e]=n)}),t}(),{chain:!1}),a.VERSION=p,mt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){a[t].placeholder=a}),mt(["drop","take"],function(t,n){N.prototype[t]=function(e){e=e===i?1:Q(T(e),0);var r=this.__filtered__&&!n?new N(this):this.clone();return r.__filtered__?r.__takeCount__=nt(e,r.__takeCount__):r.__views__.push({size:nt(e,$t),type:t+(r.__dir__<0?"Right":"")}),r},N.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),mt(["filter","map","takeWhile"],function(t,n){var e=n+1,r=e==zi||e==Ka;N.prototype[t]=function(u){var o=this.clone();return o.__iteratees__.push({iteratee:E(u,3),type:e}),o.__filtered__=o.__filtered__||r,o}}),mt(["head","last"],function(t,n){var e="take"+(n?"Right":"");N.prototype[t]=function(){return this[e](1).value()[0]}}),mt(["initial","tail"],function(t,n){var e="drop"+(n?"":"Right");N.prototype[t]=function(){return this.__filtered__?new N(this):this[e](1)}}),N.prototype.compact=function(){return this.filter(ft)},N.prototype.find=function(t){return this.filter(t).head()},N.prototype.findLast=function(t){return this.reverse().find(t)},N.prototype.invokeMap=H(function(t,n){return typeof t=="function"?new N(this):this.map(function(e){return fe(e,t,n)})}),N.prototype.reject=function(t){return this.filter(or(E(t)))},N.prototype.slice=function(t,n){t=T(t);var e=this;return e.__filtered__&&(t>0||n<0)?new N(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),n!==i&&(n=T(n),e=n<0?e.dropRight(-n):e.take(n-t)),e)},N.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},N.prototype.toArray=function(){return this.take($t)},qt(N.prototype,function(t,n){var e=/^(?:filter|find|map|reject)|While$/.test(n),r=/^(?:head|last)$/.test(n),u=a[r?"take"+(n=="last"?"Right":""):n],o=r||/^find/.test(n);u&&(a.prototype[n]=function(){var f=this.__wrapped__,c=r?[1]:arguments,l=f instanceof N,v=c[0],_=l||b(f),m=function(D){var $=u.apply(a,rn([D],c));return r&&C?$[0]:$};_&&e&&typeof v=="function"&&v.length!=1&&(l=_=!1);var C=this.__chain__,I=!!this.__actions__.length,y=o&&!C,L=l&&!I;if(!o&&_){f=L?f:new N(this);var S=t.apply(f,c);return S.__actions__.push({func:ir,args:[m],thisArg:i}),new Pt(S,C)}return y&&L?t.apply(this,c):(S=this.thru(m),y?r?S.value()[0]:S.value():S)})}),mt(["pop","push","shift","sort","splice","unshift"],function(t){var n=be[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);a.prototype[t]=function(){var u=arguments;if(r&&!this.__chain__){var o=this.value();return n.apply(b(o)?o:[],u)}return this[e](function(f){return n.apply(b(f)?f:[],u)})}}),qt(N.prototype,function(t,n){var e=a[n];if(e){var r=e.name+"";W.call(Un,r)||(Un[r]=[]),Un[r].push({name:n,func:e})}}),Un[Ve(i,ln).name]=[{name:"wrapper",func:i}],N.prototype.clone=Qf,N.prototype.reverse=Vf,N.prototype.value=kf,a.prototype.at=Sl,a.prototype.chain=Ol,a.prototype.commit=Rl,a.prototype.next=bl,a.prototype.plant=Ll,a.prototype.reverse=Hl,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Dl,a.prototype.first=a.prototype.head,ee&&(a.prototype[ee]=Tl),a},Nn=Rf();dn?((dn.exports=Nn)._=Nn,Lr._=Nn):j._=Nn}).call(universal_provider_dist_index_es_e)})(index_es_Ui,index_es_Ui.exports);var Xg=Object.defineProperty,Qg=Object.defineProperties,Vg=Object.getOwnPropertyDescriptors,index_es_Oa=Object.getOwnPropertySymbols,kg=Object.prototype.hasOwnProperty,jg=Object.prototype.propertyIsEnumerable,index_es_Ra=(P,s,i)=>s in P?Xg(P,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):P[s]=i,dist_index_es_lr=(P,s)=>{for(var i in s||(s={}))kg.call(s,i)&&index_es_Ra(P,i,s[i]);if(index_es_Oa)for(var i of index_es_Oa(s))jg.call(s,i)&&index_es_Ra(P,i,s[i]);return P},tv=(P,s)=>Qg(P,Vg(s));function dist_index_es_Lt(P,s,i){var p;const w=mn(P);return((p=s.rpcMap)==null?void 0:p[w.reference])||`${Zg}?chainId=${w.namespace}:${w.reference}&projectId=${i}`}function dist_index_es_In(P){return P.includes(":")?P.split(":")[1]:P}function index_es_ba(P){return P.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)}function nv(P,s){const i=Object.keys(s.namespaces).filter(w=>w.includes(P));if(!i.length)return[];const p=[];return i.forEach(w=>{const x=s.namespaces[w].accounts;p.push(...x)}),p}function index_es_Fi(P={},s={}){const i=index_es_Ta(P),p=index_es_Ta(s);return index_es_Ui.exports.merge(i,p)}function index_es_Ta(P){var s,i,p,w;const x={};if(!Xr(P))return x;for(const[O,k]of Object.entries(P)){const tn=fn(O)?[O]:k.chains,Jn=k.methods||[],xn=k.events||[],Ht=k.rpcMap||{},Mt=Ao(O);x[Mt]=tv(dist_index_es_lr(dist_index_es_lr({},x[Mt]),k),{chains:me(tn,(s=x[Mt])==null?void 0:s.chains),methods:me(Jn,(i=x[Mt])==null?void 0:i.methods),events:me(xn,(p=x[Mt])==null?void 0:p.events),rpcMap:dist_index_es_lr(dist_index_es_lr({},Ht),(w=x[Mt])==null?void 0:w.rpcMap)})}return x}function ev(P){return P.includes(":")?P.split(":")[2]:P}function index_es_La(P){const s={};for(const[i,p]of Object.entries(P)){const w=p.methods||[],x=p.events||[],O=p.accounts||[],k=fn(i)?[i]:p.chains?p.chains:index_es_ba(p.accounts);s[i]={chains:k,methods:w,events:x,accounts:O}}return s}function index_es_Wi(P){return typeof P=="number"?P:P.includes("0x")?parseInt(P,16):(P=P.includes(":")?P.split(":")[1]:P,isNaN(Number(P))?P:Number(P))}const index_es_Ha={},index_es_F=P=>index_es_Ha[P],index_es_Mi=(P,s)=>{index_es_Ha[P]=s};class rv{constructor(s){this.name="polkadot",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(s,i),this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${s}`)}getAccounts(){const s=this.namespace.accounts;return s?s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2])||[]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;const w=dist_index_es_In(i);s[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}var iv=Object.defineProperty,sv=Object.defineProperties,uv=Object.getOwnPropertyDescriptors,index_es_Da=Object.getOwnPropertySymbols,av=Object.prototype.hasOwnProperty,ov=Object.prototype.propertyIsEnumerable,index_es_Na=(P,s,i)=>s in P?iv(P,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):P[s]=i,index_es_$a=(P,s)=>{for(var i in s||(s={}))av.call(s,i)&&index_es_Na(P,i,s[i]);if(index_es_Da)for(var i of index_es_Da(s))ov.call(s,i)&&index_es_Na(P,i,s[i]);return P},index_es_qa=(P,s)=>sv(P,uv(s));class fv{constructor(s){this.name="eip155",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(s){switch(s.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(s);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(s)}return this.namespace.methods.includes(s.request.method)?await this.client.request(s):this.getHttpProvider().request(s.request)}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(parseInt(s),i),this.chainId=parseInt(s),this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${s}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}createHttpProvider(s,i){const p=i||dist_index_es_Lt(`${this.name}:${s}`,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;const w=parseInt(dist_index_es_In(i));s[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}getHttpProvider(){const s=this.chainId,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}async handleSwitchChain(s){var i,p;let w=s.request.params?(i=s.request.params[0])==null?void 0:i.chainId:"0x0";w=w.startsWith("0x")?w:`0x${w}`;const x=parseInt(w,16);if(this.isChainApproved(x))this.setDefaultChain(`${x}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:s.topic,request:{method:s.request.method,params:[{chainId:w}]},chainId:(p=this.namespace.chains)==null?void 0:p[0]}),this.setDefaultChain(`${x}`);else throw new Error(`Failed to switch to chain 'eip155:${x}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(s){return this.namespace.chains.includes(`${this.name}:${s}`)}async getCapabilities(s){var i,p,w;const x=(p=(i=s.request)==null?void 0:i.params)==null?void 0:p[0];if(!x)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const O=this.client.session.get(s.topic),k=((w=O?.sessionProperties)==null?void 0:w.capabilities)||{};if(k!=null&&k[x])return k?.[x];const tn=await this.client.request(s);try{await this.client.session.update(s.topic,{sessionProperties:index_es_qa(index_es_$a({},O.sessionProperties||{}),{capabilities:index_es_qa(index_es_$a({},k||{}),{[x]:tn})})})}catch(Jn){console.warn("Failed to update session with capabilities",Jn)}return tn}}class cv{constructor(s){this.name="solana",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(s,i),this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${s}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;const w=dist_index_es_In(i);s[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}class hv{constructor(s){this.name="cosmos",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(s,i),this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;const w=dist_index_es_In(i);s[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}class lv{constructor(s){this.name="algorand",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){if(!this.httpProviders[s]){const p=i||dist_index_es_Lt(`${this.name}:${s}`,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);this.setHttpProvider(s,p)}this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;s[i]=this.createHttpProvider(i,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace,this.client.core.projectId);return typeof p>"u"?void 0:new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}class pv{constructor(s){this.name="cip34",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(s,i),this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{const p=this.getCardanoRPCUrl(i),w=dist_index_es_In(i);s[w]=this.createHttpProvider(w,p)}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}getCardanoRPCUrl(s){const i=this.namespace.rpcMap;if(i)return i[s]}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||this.getCardanoRPCUrl(s);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}class dv{constructor(s){this.name="elrond",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(s,i),this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${s}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;const w=dist_index_es_In(i);s[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}class gv{constructor(s){this.name="multiversx",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(s,i),this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${s}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;const w=dist_index_es_In(i);s[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}class vv{constructor(s){this.name="near",this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace=Object.assign(this.namespace,s)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider().request(s.request)}setDefaultChain(s,i){if(this.chainId=s,!this.httpProviders[s]){const p=i||dist_index_es_Lt(`${this.name}:${s}`,this.namespace);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);this.setHttpProvider(s,p)}this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const s=this.namespace.accounts;return s?s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2])||[]:[]}createHttpProviders(){const s={};return this.namespace.chains.forEach(i=>{var p;s[i]=this.createHttpProvider(i,(p=this.namespace.rpcMap)==null?void 0:p[i])}),s}getHttpProvider(){const s=`${this.name}:${this.chainId}`,i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace);return typeof p>"u"?void 0:new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}class _v{constructor(s){this.name=index_es_Kn,this.namespace=s.namespace,this.events=index_es_F("events"),this.client=index_es_F("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(s){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(s.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(s.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(s.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(s.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(s){return this.namespace.methods.includes(s.request.method)?this.client.request(s):this.getHttpProvider(s.chainId).request(s.request)}setDefaultChain(s,i){this.httpProviders[s]||this.setHttpProvider(s,i),this.chainId=s,this.events.emit(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,`${this.name}:${s}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const s=this.namespace.chains[0];if(!s)throw new Error("ChainId not found");return s.split(":")[1]}getAccounts(){const s=this.namespace.accounts;return s?[...new Set(s.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){var s,i;const p={};return(i=(s=this.namespace)==null?void 0:s.accounts)==null||i.forEach(w=>{const x=mn(w);p[`${x.namespace}:${x.reference}`]=this.createHttpProvider(w)}),p}getHttpProvider(s){const i=this.httpProviders[s];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${s} not found`);return i}setHttpProvider(s,i){const p=this.createHttpProvider(s,i);p&&(this.httpProviders[s]=p)}createHttpProvider(s,i){const p=i||dist_index_es_Lt(s,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${s}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,index_es_F("disableProviderPing")))}}var mv=Object.defineProperty,wv=Object.defineProperties,Pv=Object.getOwnPropertyDescriptors,index_es_Ua=Object.getOwnPropertySymbols,Cv=Object.prototype.hasOwnProperty,Av=Object.prototype.propertyIsEnumerable,index_es_Fa=(P,s,i)=>s in P?mv(P,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):P[s]=i,dist_index_es_pr=(P,s)=>{for(var i in s||(s={}))Cv.call(s,i)&&index_es_Fa(P,i,s[i]);if(index_es_Ua)for(var i of index_es_Ua(s))Av.call(s,i)&&index_es_Fa(P,i,s[i]);return P},index_es_Bi=(P,s)=>wv(P,Pv(s));class dist_index_es_dr{constructor(s){this.events=new (events_default()),this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=s,this.logger=typeof s?.logger<"u"&&typeof s?.logger!="string"?s.logger:browser_default()(dist_index_es_k({level:s?.logger||index_es_ya})),this.disableProviderPing=s?.disableProviderPing||!1}static async init(s){const i=new dist_index_es_dr(s);return await i.initialize(),i}async request(s,i,p){const[w,x]=this.validateChain(i);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(w).request({request:dist_index_es_pr({},s),chainId:`${w}:${x}`,topic:this.session.topic,expiry:p})}sendAsync(s,i,p,w){const x=new Date().getTime();this.request(s,p,w).then(O=>i(null,formatJsonRpcResult(x,O))).catch(O=>i(O,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties}),await this.requestAccounts()}async disconnect(){var s;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(s=this.session)==null?void 0:s.topic,reason:er("USER_DISCONNECTED")}),await this.cleanup()}async connect(s){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(s),await this.cleanupPendingPairings(),!s.skipPairing)return await this.pair(s.pairingTopic)}async authenticate(s,i){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(s),await this.cleanupPendingPairings();const{uri:p,response:w}=await this.client.authenticate(s,i);p&&(this.uri=p,this.events.emit("display_uri",p));const x=await w();if(this.session=x.session,this.session){const O=index_es_La(this.session.namespaces);this.namespaces=index_es_Fi(this.namespaces,O),this.persist("namespaces",this.namespaces),this.onConnect()}return x}on(s,i){this.events.on(s,i)}once(s,i){this.events.once(s,i)}removeListener(s,i){this.events.removeListener(s,i)}off(s,i){this.events.off(s,i)}get isWalletConnect(){return!0}async pair(s){this.shouldAbortPairingAttempt=!1;let i=0;do{if(this.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(i>=this.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:p,approval:w}=await this.client.connect({pairingTopic:s,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties});p&&(this.uri=p,this.events.emit("display_uri",p)),await w().then(x=>{this.session=x;const O=index_es_La(x.namespaces);this.namespaces=index_es_Fi(this.namespaces,O),this.persist("namespaces",this.namespaces)}).catch(x=>{if(x.message!==index_es_it)throw x;i++})}while(!this.session);return this.onConnect(),this.session}setDefaultChain(s,i){try{if(!this.session)return;const[p,w]=this.validateChain(s),x=this.getProvider(p);x.name===index_es_Kn?x.setDefaultChain(`${p}:${w}`,i):x.setDefaultChain(w,i)}catch(p){if(!/Please call connect/.test(p.message))throw p}}async cleanupPendingPairings(s={}){this.logger.info("Cleaning up inactive pairings...");const i=this.client.pairing.getAll();if(Ir(i)){for(const p of i)s.deletePairings?this.client.core.expirer.set(p.topic,0):await this.client.core.relayer.subscriber.unsubscribe(p.topic);this.logger.info(`Inactive pairings cleared: ${i.length}`)}}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}async checkStorage(){if(this.namespaces=await this.getFromStore("namespaces"),this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.client.session.length){const s=this.client.session.keys.length-1;this.session=this.client.session.get(this.client.session.keys[s]),this.createProviders()}}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){this.client=this.providerOpts.client||await sign_client_dist_index_es_e.init({core:this.providerOpts.core,logger:this.providerOpts.logger||index_es_ya,relayUrl:this.providerOpts.relayUrl||Kg,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const s=[...new Set(Object.keys(this.session.namespaces).map(i=>Ao(i)))];index_es_Mi("client",this.client),index_es_Mi("events",this.events),index_es_Mi("disableProviderPing",this.disableProviderPing),s.forEach(i=>{if(!this.session)return;const p=nv(i,this.session),w=index_es_ba(p),x=index_es_Fi(this.namespaces,this.optionalNamespaces),O=index_es_Bi(dist_index_es_pr({},x[i]),{accounts:p,chains:w});switch(i){case"eip155":this.rpcProviders[i]=new fv({namespace:O});break;case"algorand":this.rpcProviders[i]=new lv({namespace:O});break;case"solana":this.rpcProviders[i]=new cv({namespace:O});break;case"cosmos":this.rpcProviders[i]=new hv({namespace:O});break;case"polkadot":this.rpcProviders[i]=new rv({namespace:O});break;case"cip34":this.rpcProviders[i]=new pv({namespace:O});break;case"elrond":this.rpcProviders[i]=new dv({namespace:O});break;case"multiversx":this.rpcProviders[i]=new gv({namespace:O});break;case"near":this.rpcProviders[i]=new vv({namespace:O});break;default:this.rpcProviders[index_es_Kn]?this.rpcProviders[index_es_Kn].updateNamespace(O):this.rpcProviders[index_es_Kn]=new _v({namespace:O})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",s=>{this.events.emit("session_ping",s)}),this.client.on("session_event",s=>{const{params:i}=s,{event:p}=i;if(p.name==="accountsChanged"){const w=p.data;w&&Ir(w)&&this.events.emit("accountsChanged",w.map(ev))}else if(p.name==="chainChanged"){const w=i.chainId,x=i.event.data,O=Ao(w),k=index_es_Wi(w)!==index_es_Wi(x)?`${O}:${index_es_Wi(x)}`:w;this.onChainChanged(k)}else this.events.emit(p.name,p.data);this.events.emit("session_event",s)}),this.client.on("session_update",({topic:s,params:i})=>{var p;const{namespaces:w}=i,x=(p=this.client)==null?void 0:p.session.get(s);this.session=index_es_Bi(dist_index_es_pr({},x),{namespaces:w}),this.onSessionUpdate(),this.events.emit("session_update",{topic:s,params:i})}),this.client.on("session_delete",async s=>{await this.cleanup(),this.events.emit("session_delete",s),this.events.emit("disconnect",index_es_Bi(dist_index_es_pr({},er("USER_DISCONNECTED")),{data:s.topic}))}),this.on(dist_index_es_Tt.DEFAULT_CHAIN_CHANGED,s=>{this.onChainChanged(s,!0)})}getProvider(s){return this.rpcProviders[s]||this.rpcProviders[index_es_Kn]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(s=>{var i;this.getProvider(s).updateNamespace((i=this.session)==null?void 0:i.namespaces[s])})}setNamespaces(s){const{namespaces:i,optionalNamespaces:p,sessionProperties:w}=s;i&&Object.keys(i).length&&(this.namespaces=i),p&&Object.keys(p).length&&(this.optionalNamespaces=p),this.sessionProperties=w,this.persist("namespaces",i),this.persist("optionalNamespaces",p)}validateChain(s){const[i,p]=s?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[i,p];if(i&&!Object.keys(this.namespaces||{}).map(O=>Ao(O)).includes(i))throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);if(i&&p)return[i,p];const w=Ao(Object.keys(this.namespaces)[0]),x=this.rpcProviders[w].getDefaultChain();return[w,x]}async requestAccounts(){const[s]=this.validateChain();return await this.getProvider(s).requestAccounts()}onChainChanged(s,i=!1){if(!this.namespaces)return;const[p,w]=this.validateChain(s);w&&(i||this.getProvider(p).setDefaultChain(w),this.namespaces[p]?this.namespaces[p].defaultChain=w:this.namespaces[`${p}:${w}`]?this.namespaces[`${p}:${w}`].defaultChain=w:this.namespaces[`${p}:${w}`]={defaultChain:w},this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",w))}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.session=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,this.persist("namespaces",void 0),this.persist("optionalNamespaces",void 0),this.persist("sessionProperties",void 0),await this.cleanupPendingPairings({deletePairings:!0})}persist(s,i){this.client.core.storage.setItem(`${index_es_Sa}/${s}`,i)}async getFromStore(s){return await this.client.core.storage.getItem(`${index_es_Sa}/${s}`)}}const Iv=dist_index_es_dr;
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/ethereum-provider/dist/index.es.js
const dist_index_es_R="wc",ethereum_provider_dist_index_es_T="ethereum_provider",index_es_$=`${dist_index_es_R}@2:${ethereum_provider_dist_index_es_T}:`,ethereum_provider_dist_index_es_j="https://rpc.walletconnect.com/v1/",dist_index_es_u=["eth_sendTransaction","personal_sign"],ethereum_provider_dist_index_es_y=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],ethereum_provider_dist_index_es_g=["chainChanged","accountsChanged"],ethereum_provider_dist_index_es_b=["chainChanged","accountsChanged","message","disconnect","connect"];var dist_index_es_q=Object.defineProperty,index_es_N=Object.defineProperties,index_es_D=Object.getOwnPropertyDescriptors,index_es_M=Object.getOwnPropertySymbols,index_es_U=Object.prototype.hasOwnProperty,dist_index_es_Q=Object.prototype.propertyIsEnumerable,ethereum_provider_dist_index_es_O=(r,t,s)=>t in r?dist_index_es_q(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,ethereum_provider_dist_index_es_p=(r,t)=>{for(var s in t||(t={}))index_es_U.call(t,s)&&ethereum_provider_dist_index_es_O(r,s,t[s]);if(index_es_M)for(var s of index_es_M(t))dist_index_es_Q.call(t,s)&&ethereum_provider_dist_index_es_O(r,s,t[s]);return r},ethereum_provider_dist_index_es_E=(r,t)=>index_es_N(r,index_es_D(t));function ethereum_provider_dist_index_es_m(r){return Number(r[0].split(":")[1])}function ethereum_provider_dist_index_es_v(r){return`0x${r.toString(16)}`}function ethereum_provider_dist_index_es_L(r){const{chains:t,optionalChains:s,methods:i,optionalMethods:e,events:n,optionalEvents:o,rpcMap:c}=r;if(!Ir(t))throw new Error("Invalid chains");const a={chains:t,methods:i||dist_index_es_u,events:n||ethereum_provider_dist_index_es_g,rpcMap:ethereum_provider_dist_index_es_p({},t.length?{[ethereum_provider_dist_index_es_m(t)]:c[ethereum_provider_dist_index_es_m(t)]}:{})},h=n?.filter(l=>!ethereum_provider_dist_index_es_g.includes(l)),d=i?.filter(l=>!dist_index_es_u.includes(l));if(!s&&!o&&!e&&!(h!=null&&h.length)&&!(d!=null&&d.length))return{required:t.length?a:void 0};const w=h?.length&&d?.length||!s,I={chains:[...new Set(w?a.chains.concat(s||[]):s)],methods:[...new Set(a.methods.concat(e!=null&&e.length?e:ethereum_provider_dist_index_es_y))],events:[...new Set(a.events.concat(o!=null&&o.length?o:ethereum_provider_dist_index_es_b))],rpcMap:c};return{required:t.length?a:void 0,optional:s.length?I:void 0}}class ethereum_provider_dist_index_es_C{constructor(){this.events=new events.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY=index_es_$,this.on=(t,s)=>(this.events.on(t,s),this),this.once=(t,s)=>(this.events.once(t,s),this),this.removeListener=(t,s)=>(this.events.removeListener(t,s),this),this.off=(t,s)=>(this.events.off(t,s),this),this.parseAccount=t=>this.isCompatibleChainId(t)?this.parseAccountId(t).address:t,this.signer={},this.rpc={}}static async init(t){const s=new ethereum_provider_dist_index_es_C;return await s.initialize(t),s}async request(t,s){return await this.signer.request(t,this.formatChainId(this.chainId),s)}sendAsync(t,s,i){this.signer.sendAsync(t,s,this.formatChainId(this.chainId),i)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(t){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(t);const{required:s,optional:i}=ethereum_provider_dist_index_es_L(this.rpc);try{const e=await new Promise(async(o,c)=>{var a;this.rpc.showQrModal&&((a=this.modal)==null||a.subscribeModal(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))})),await this.signer.connect(ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({namespaces:ethereum_provider_dist_index_es_p({},s&&{[this.namespace]:s})},i&&{optionalNamespaces:{[this.namespace]:i}}),{pairingTopic:t?.pairingTopic})).then(h=>{o(h)}).catch(h=>{c(new Error(h.message))})});if(!e)return;const n=Jo(e.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:n),this.setAccounts(n),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_v(this.chainId)})}catch(e){throw this.signer.logger.error(e),e}finally{this.modal&&this.modal.closeModal()}}async authenticate(t,s){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:t?.chains});try{const i=await new Promise(async(n,o)=>{var c;this.rpc.showQrModal&&((c=this.modal)==null||c.subscribeModal(a=>{!a.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),o(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({},t),{chains:this.rpc.chains}),s).then(a=>{n(a)}).catch(a=>{o(new Error(a.message))})}),e=i.session;if(e){const n=Jo(e.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:n),this.setAccounts(n),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_v(this.chainId)})}return i}catch(i){throw this.signer.logger.error(i),i}finally{this.modal&&this.modal.closeModal()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",t=>{const{params:s}=t,{event:i}=s;i.name==="accountsChanged"?(this.accounts=this.parseAccounts(i.data),this.events.emit("accountsChanged",this.accounts)):i.name==="chainChanged"?this.setChainId(this.formatChainId(i.data)):this.events.emit(i.name,i.data),this.events.emit("session_event",t)}),this.signer.on("chainChanged",t=>{const s=parseInt(t);this.chainId=s,this.events.emit("chainChanged",ethereum_provider_dist_index_es_v(this.chainId)),this.persist()}),this.signer.on("session_update",t=>{this.events.emit("session_update",t)}),this.signer.on("session_delete",t=>{this.reset(),this.events.emit("session_delete",t),this.events.emit("disconnect",ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({},er("USER_DISCONNECTED")),{data:t.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",t=>{var s,i;this.rpc.showQrModal&&((s=this.modal)==null||s.closeModal(),(i=this.modal)==null||i.openModal({uri:t})),this.events.emit("display_uri",t)})}switchEthereumChain(t){this.request({method:"wallet_switchEthereumChain",params:[{chainId:t.toString(16)}]})}isCompatibleChainId(t){return typeof t=="string"?t.startsWith(`${this.namespace}:`):!1}formatChainId(t){return`${this.namespace}:${t}`}parseChainId(t){return Number(t.split(":")[1])}setChainIds(t){const s=t.filter(i=>this.isCompatibleChainId(i)).map(i=>this.parseChainId(i));s.length&&(this.chainId=s[0],this.events.emit("chainChanged",ethereum_provider_dist_index_es_v(this.chainId)),this.persist())}setChainId(t){if(this.isCompatibleChainId(t)){const s=this.parseChainId(t);this.chainId=s,this.switchEthereumChain(s)}}parseAccountId(t){const[s,i,e]=t.split(":");return{chainId:`${s}:${i}`,address:e}}setAccounts(t){this.accounts=t.filter(s=>this.parseChainId(this.parseAccountId(s).chainId)===this.chainId).map(s=>this.parseAccountId(s).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(t){var s,i;const e=(s=t?.chains)!=null?s:[],n=(i=t?.optionalChains)!=null?i:[],o=e.concat(n);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const c=e.length?t?.methods||dist_index_es_u:[],a=e.length?t?.events||ethereum_provider_dist_index_es_g:[],h=t?.optionalMethods||[],d=t?.optionalEvents||[],w=t?.rpcMap||this.buildRpcMap(o,t.projectId),I=t?.qrModalOptions||void 0;return{chains:e?.map(l=>this.formatChainId(l)),optionalChains:n.map(l=>this.formatChainId(l)),methods:c,events:a,optionalMethods:h,optionalEvents:d,rpcMap:w,showQrModal:!!(t!=null&&t.showQrModal),qrModalOptions:I,projectId:t.projectId,metadata:t.metadata}}buildRpcMap(t,s){const i={};return t.forEach(e=>{i[e]=this.getRpcUrl(e,s)}),i}async initialize(t){if(this.rpc=this.getRpcConfig(t),this.chainId=this.rpc.chains.length?ethereum_provider_dist_index_es_m(this.rpc.chains):ethereum_provider_dist_index_es_m(this.rpc.optionalChains),this.signer=await Iv.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:t.disableProviderPing,relayUrl:t.relayUrl,storageOptions:t.storageOptions,customStoragePrefix:t.customStoragePrefix,telemetryEnabled:t.telemetryEnabled}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let s;try{const{WalletConnectModal:i}=await __webpack_require__.e(/* import() */ 80940).then(__webpack_require__.bind(__webpack_require__, 380940));s=i}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(s)try{this.modal=new s(ethereum_provider_dist_index_es_p({projectId:this.rpc.projectId},this.rpc.qrModalOptions))}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(t){if(!t)return;const{chains:s,optionalChains:i,rpcMap:e}=t;s&&Ir(s)&&(this.rpc.chains=s.map(n=>this.formatChainId(n)),s.forEach(n=>{this.rpc.rpcMap[n]=e?.[n]||this.getRpcUrl(n)})),i&&Ir(i)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=i?.map(n=>this.formatChainId(n)),i.forEach(n=>{this.rpc.rpcMap[n]=e?.[n]||this.getRpcUrl(n)}))}getRpcUrl(t,s){var i;return((i=this.rpc.rpcMap)==null?void 0:i[t])||`${ethereum_provider_dist_index_es_j}?chainId=eip155:${t}&projectId=${s||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const t=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),s=this.session.namespaces[`${this.namespace}:${t}`]?this.session.namespaces[`${this.namespace}:${t}`]:this.session.namespaces[this.namespace];this.setChainIds(t?[this.formatChainId(t)]:s?.accounts),this.setAccounts(s?.accounts)}catch(t){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(t),await this.disconnect().catch(s=>this.signer.logger.warn(s))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(t){return typeof t=="string"||t instanceof String?[this.parseAccount(t)]:t.map(s=>this.parseAccount(s))}}const ethereum_provider_dist_index_es_x=(/* unused pure expression or super */ null && (ethereum_provider_dist_index_es_C));
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 21222:
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ 490796:
/***/ ((module) => {

"use strict";


module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ 755665:
/***/ (() => {

//# sourceMappingURL=types.js.map

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

/***/ 530454:
/***/ ((module) => {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ 473055:
/***/ ((module) => {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


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
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

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

/***/ 686663:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const strictUriEncode = __webpack_require__(224280);
const decodeComponent = __webpack_require__(530454);
const splitOnFirst = __webpack_require__(300528);
const filterObject = __webpack_require__(473055);

const isNullOrUndefined = value => value === null || value === undefined;

const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'colon-list-separator':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), ':list='].join('')];
				}

				return [...result, [encode(key, options), ':list=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
		case 'bracket-separator': {
			const keyValueSep = options.arrayFormat === 'bracket-separator' ?
				'[]=' :
				'=';

			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				// Translate null to an empty string so that it doesn't serialize as 'null'
				value = value === null ? '' : value;

				if (result.length === 0) {
					return [[encode(key, options), keyValueSep, encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};
		}

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'colon-list-separator':
			return (key, value, accumulator) => {
				result = /(:list)$/.exec(key);
				key = key.replace(/:list$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		case 'bracket-separator':
			return (key, value, accumulator) => {
				const isArray = /(\[\])$/.test(key);
				key = key.replace(/\[\]$/, '');

				if (!isArray) {
					accumulator[key] = value ? decode(value, options) : value;
					return;
				}

				const arrayValue = value === null ?
					[] :
					value.split(options.arrayFormatSeparator).map(item => decode(item, options));

				if (accumulator[key] === undefined) {
					accumulator[key] = arrayValue;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], arrayValue);
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator', 'bracket-separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
				return encode(key, options) + '[]';
			}

			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true,
		[encodeFragmentIdentifier]: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${options[encodeFragmentIdentifier] ? encode(object.fragmentIdentifier, options) : object.fragmentIdentifier}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true,
		[encodeFragmentIdentifier]: false
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


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

/***/ 300528:
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 224280:
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 44874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const format = __webpack_require__(40793)

module.exports = pino

const _console = pfGlobalThisOrFallback().console || {}
const stdSerializers = {
  mapHttpRequest: mock,
  mapHttpResponse: mock,
  wrapRequestSerializer: passthrough,
  wrapResponseSerializer: passthrough,
  wrapErrorSerializer: passthrough,
  req: mock,
  res: mock,
  err: asErrValue
}

function shouldSerialize (serialize, serializers) {
  if (Array.isArray(serialize)) {
    const hasToFilter = serialize.filter(function (k) {
      return k !== '!stdSerializers.err'
    })
    return hasToFilter
  } else if (serialize === true) {
    return Object.keys(serializers)
  }

  return false
}

function pino (opts) {
  opts = opts || {}
  opts.browser = opts.browser || {}

  const transmit = opts.browser.transmit
  if (transmit && typeof transmit.send !== 'function') { throw Error('pino: transmit option must have a send function') }

  const proto = opts.browser.write || _console
  if (opts.browser.write) opts.browser.asObject = true
  const serializers = opts.serializers || {}
  const serialize = shouldSerialize(opts.browser.serialize, serializers)
  let stdErrSerialize = opts.browser.serialize

  if (
    Array.isArray(opts.browser.serialize) &&
    opts.browser.serialize.indexOf('!stdSerializers.err') > -1
  ) stdErrSerialize = false

  const levels = ['error', 'fatal', 'warn', 'info', 'debug', 'trace']

  if (typeof proto === 'function') {
    proto.error = proto.fatal = proto.warn =
    proto.info = proto.debug = proto.trace = proto
  }
  if (opts.enabled === false) opts.level = 'silent'
  const level = opts.level || 'info'
  const logger = Object.create(proto)
  if (!logger.log) logger.log = noop

  Object.defineProperty(logger, 'levelVal', {
    get: getLevelVal
  })
  Object.defineProperty(logger, 'level', {
    get: getLevel,
    set: setLevel
  })

  const setOpts = {
    transmit,
    serialize,
    asObject: opts.browser.asObject,
    levels,
    timestamp: getTimeFunction(opts)
  }
  logger.levels = pino.levels
  logger.level = level

  logger.setMaxListeners = logger.getMaxListeners =
  logger.emit = logger.addListener = logger.on =
  logger.prependListener = logger.once =
  logger.prependOnceListener = logger.removeListener =
  logger.removeAllListeners = logger.listeners =
  logger.listenerCount = logger.eventNames =
  logger.write = logger.flush = noop
  logger.serializers = serializers
  logger._serialize = serialize
  logger._stdErrSerialize = stdErrSerialize
  logger.child = child

  if (transmit) logger._logEvent = createLogEventShape()

  function getLevelVal () {
    return this.level === 'silent'
      ? Infinity
      : this.levels.values[this.level]
  }

  function getLevel () {
    return this._level
  }
  function setLevel (level) {
    if (level !== 'silent' && !this.levels.values[level]) {
      throw Error('unknown level ' + level)
    }
    this._level = level

    set(setOpts, logger, 'error', 'log') // <-- must stay first
    set(setOpts, logger, 'fatal', 'error')
    set(setOpts, logger, 'warn', 'error')
    set(setOpts, logger, 'info', 'log')
    set(setOpts, logger, 'debug', 'log')
    set(setOpts, logger, 'trace', 'log')
  }

  function child (bindings, childOptions) {
    if (!bindings) {
      throw new Error('missing bindings for child Pino')
    }
    childOptions = childOptions || {}
    if (serialize && bindings.serializers) {
      childOptions.serializers = bindings.serializers
    }
    const childOptionsSerializers = childOptions.serializers
    if (serialize && childOptionsSerializers) {
      var childSerializers = Object.assign({}, serializers, childOptionsSerializers)
      var childSerialize = opts.browser.serialize === true
        ? Object.keys(childSerializers)
        : serialize
      delete bindings.serializers
      applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize)
    }
    function Child (parent) {
      this._childLevel = (parent._childLevel | 0) + 1
      this.error = bind(parent, bindings, 'error')
      this.fatal = bind(parent, bindings, 'fatal')
      this.warn = bind(parent, bindings, 'warn')
      this.info = bind(parent, bindings, 'info')
      this.debug = bind(parent, bindings, 'debug')
      this.trace = bind(parent, bindings, 'trace')
      if (childSerializers) {
        this.serializers = childSerializers
        this._serialize = childSerialize
      }
      if (transmit) {
        this._logEvent = createLogEventShape(
          [].concat(parent._logEvent.bindings, bindings)
        )
      }
    }
    Child.prototype = this
    return new Child(this)
  }
  return logger
}

pino.levels = {
  values: {
    fatal: 60,
    error: 50,
    warn: 40,
    info: 30,
    debug: 20,
    trace: 10
  },
  labels: {
    10: 'trace',
    20: 'debug',
    30: 'info',
    40: 'warn',
    50: 'error',
    60: 'fatal'
  }
}

pino.stdSerializers = stdSerializers
pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime })

function set (opts, logger, level, fallback) {
  const proto = Object.getPrototypeOf(logger)
  logger[level] = logger.levelVal > logger.levels.values[level]
    ? noop
    : (proto[level] ? proto[level] : (_console[level] || _console[fallback] || noop))

  wrap(opts, logger, level)
}

function wrap (opts, logger, level) {
  if (!opts.transmit && logger[level] === noop) return

  logger[level] = (function (write) {
    return function LOG () {
      const ts = opts.timestamp()
      const args = new Array(arguments.length)
      const proto = (Object.getPrototypeOf && Object.getPrototypeOf(this) === _console) ? _console : this
      for (var i = 0; i < args.length; i++) args[i] = arguments[i]

      if (opts.serialize && !opts.asObject) {
        applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize)
      }
      if (opts.asObject) write.call(proto, asObject(this, level, args, ts))
      else write.apply(proto, args)

      if (opts.transmit) {
        const transmitLevel = opts.transmit.level || logger.level
        const transmitValue = pino.levels.values[transmitLevel]
        const methodValue = pino.levels.values[level]
        if (methodValue < transmitValue) return
        transmit(this, {
          ts,
          methodLevel: level,
          methodValue,
          transmitLevel,
          transmitValue: pino.levels.values[opts.transmit.level || logger.level],
          send: opts.transmit.send,
          val: logger.levelVal
        }, args)
      }
    }
  })(logger[level])
}

function asObject (logger, level, args, ts) {
  if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize)
  const argsCloned = args.slice()
  let msg = argsCloned[0]
  const o = {}
  if (ts) {
    o.time = ts
  }
  o.level = pino.levels.values[level]
  let lvl = (logger._childLevel | 0) + 1
  if (lvl < 1) lvl = 1
  // deliberate, catching objects, arrays
  if (msg !== null && typeof msg === 'object') {
    while (lvl-- && typeof argsCloned[0] === 'object') {
      Object.assign(o, argsCloned.shift())
    }
    msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined
  } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned)
  if (msg !== undefined) o.msg = msg
  return o
}

function applySerializers (args, serialize, serializers, stdErrSerialize) {
  for (const i in args) {
    if (stdErrSerialize && args[i] instanceof Error) {
      args[i] = pino.stdSerializers.err(args[i])
    } else if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
      for (const k in args[i]) {
        if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
          args[i][k] = serializers[k](args[i][k])
        }
      }
    }
  }
}

function bind (parent, bindings, level) {
  return function () {
    const args = new Array(1 + arguments.length)
    args[0] = bindings
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i - 1]
    }
    return parent[level].apply(this, args)
  }
}

function transmit (logger, opts, args) {
  const send = opts.send
  const ts = opts.ts
  const methodLevel = opts.methodLevel
  const methodValue = opts.methodValue
  const val = opts.val
  const bindings = logger._logEvent.bindings

  applySerializers(
    args,
    logger._serialize || Object.keys(logger.serializers),
    logger.serializers,
    logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize
  )
  logger._logEvent.ts = ts
  logger._logEvent.messages = args.filter(function (arg) {
    // bindings can only be objects, so reference equality check via indexOf is fine
    return bindings.indexOf(arg) === -1
  })

  logger._logEvent.level.label = methodLevel
  logger._logEvent.level.value = methodValue

  send(methodLevel, logger._logEvent, val)

  logger._logEvent = createLogEventShape(bindings)
}

function createLogEventShape (bindings) {
  return {
    ts: 0,
    messages: [],
    bindings: bindings || [],
    level: { label: '', value: 0 }
  }
}

function asErrValue (err) {
  const obj = {
    type: err.constructor.name,
    msg: err.message,
    stack: err.stack
  }
  for (const key in err) {
    if (obj[key] === undefined) {
      obj[key] = err[key]
    }
  }
  return obj
}

function getTimeFunction (opts) {
  if (typeof opts.timestamp === 'function') {
    return opts.timestamp
  }
  if (opts.timestamp === false) {
    return nullTime
  }
  return epochTime
}

function mock () { return {} }
function passthrough (a) { return a }
function noop () {}

function nullTime () { return false }
function epochTime () { return Date.now() }
function unixTime () { return Math.round(Date.now() / 1000.0) }
function isoTime () { return new Date(Date.now()).toISOString() } // using Date.now() for testability

/* eslint-disable */
/* istanbul ignore next */
function pfGlobalThisOrFallback () {
  function defd (o) { return typeof o !== 'undefined' && o }
  try {
    if (typeof globalThis !== 'undefined') return globalThis
    Object.defineProperty(Object.prototype, 'globalThis', {
      get: function () {
        delete Object.prototype.globalThis
        return (this.globalThis = this)
      },
      configurable: true
    })
    return globalThis
  } catch (e) {
    return defd(self) || defd(window) || defd(this) || {}
  }
}
/* eslint-enable */


/***/ })

}]);