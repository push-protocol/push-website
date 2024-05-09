exports.id = 3832;
exports.ids = [3832];
exports.modules = {

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
            const nodeCrypto = __webpack_require__(776982);
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

/***/ 863832:
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

// NAMESPACE OBJECT: ./node_modules/multiformats/esm/src/hashes/sha2.js
var sha2_namespaceObject = {};
__webpack_require__.r(sha2_namespaceObject);
__webpack_require__.d(sha2_namespaceObject, {
  sha256: () => (sha2_sha256),
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
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(776982);
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
;// CONCATENATED MODULE: ./node_modules/multiformats/esm/src/hashes/sha2.js



const sha2_sha256 = from({
  name: 'sha2-256',
  code: 18,
  encode: input => (0,bytes/* coerce */.au)(external_crypto_.createHash('sha256').update(input).digest())
});
const sha512 = from({
  name: 'sha2-512',
  code: 19,
  encode: input => (0,bytes/* coerce */.au)(external_crypto_.createHash('sha512').update(input).digest())
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
  ...sha2_namespaceObject,
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







;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-api/dist/index.es.js
function e(s,r,i="string"){if(!s[r]||typeof s[r]!==i)throw new Error(`Missing or invalid "${r}" param`)}function l(s,r){let i=!0;return r.forEach(t=>{t in s||(i=!1)}),i}function f(s,r){return Array.isArray(s)?s.length===r:Object.keys(s).length===r}function w(s,r){return Array.isArray(s)?s.length>=r:Object.keys(s).length>=r}function u(s,r,i){return(i.length?w(s,r.length):f(s,r.length))?l(s,r):!1}function n(s,r,i="_"){const t=s.split(i);return t[t.length-1].trim().toLowerCase()===r.trim().toLowerCase()}function R(s){return b(s.method)&&a(s.params)}function b(s){return n(s,"subscribe")}function a(s){return u(s,["topic"],[])}function P(s){return c(s.method)&&h(s.params)}function c(s){return n(s,"publish")}function h(s){return u(s,["message","topic","ttl"],["prompt","tag"])}function _(s){return o(s.method)&&p(s.params)}function o(s){return n(s,"unsubscribe")}function p(s){return u(s,["id","topic"],[])}function S(s){return m(s.method)&&d(s.params)}function m(s){return n(s,"subscription")}function d(s){return u(s,["id","data"],[])}function g(s){if(!b(s.method))throw new Error("JSON-RPC Request has invalid subscribe method");if(!a(s.params))throw new Error("JSON-RPC Request has invalid subscribe params");const r=s.params;return e(r,"topic"),r}function q(s){if(!c(s.method))throw new Error("JSON-RPC Request has invalid publish method");if(!h(s.params))throw new Error("JSON-RPC Request has invalid publish params");const r=s.params;return e(r,"topic"),e(r,"message"),e(r,"ttl","number"),r}function E(s){if(!o(s.method))throw new Error("JSON-RPC Request has invalid unsubscribe method");if(!p(s.params))throw new Error("JSON-RPC Request has invalid unsubscribe params");const r=s.params;return e(r,"id"),r}function k(s){if(!m(s.method))throw new Error("JSON-RPC Request has invalid subscription method");if(!d(s.params))throw new Error("JSON-RPC Request has invalid subscription params");const r=s.params;return e(r,"id"),e(r,"data"),r}const C={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/utils/dist/index.es.js
const Ir=":";function dn(e){const[t,r]=e.split(Ir);return{namespace:t,reference:r}}function pn(e){const{namespace:t,reference:r}=e;return[t,r].join(Ir)}function ci(e){const[t,r,i]=e.split(Ir);return{namespace:t,reference:r,address:i}}function vn(e){const{namespace:t,reference:r,address:i}=e;return[t,r,i].join(Ir)}function li(e,t){const r=[];return e.forEach(i=>{const n=t(i);r.includes(n)||r.push(n)}),r}function mn(e){const{address:t}=ci(e);return t}function gn(e){const{namespace:t,reference:r}=ci(e);return pn({namespace:t,reference:r})}function Ko(e,t){const{namespace:r,reference:i}=dn(t);return vn({namespace:r,reference:i,address:e})}function Ho(e){return li(e,mn)}function An(e){return li(e,gn)}function zo(e,t=[]){const r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;const n=e[i];r.push(...n.accounts)}),r}function Lo(e,t=[]){const r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;const n=e[i];r.push(...An(n.accounts))}),r}function jo(e,t=[]){const r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;const n=e[i];r.push(..._r(i,n))}),r}function _r(e,t){return e.includes(":")?[e]:t.chains||[]}var Qo=Object.defineProperty,bn=Object.getOwnPropertySymbols,Jo=Object.prototype.hasOwnProperty,Go=Object.prototype.propertyIsEnumerable,yn=(e,t,r)=>t in e?Qo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wn=(e,t)=>{for(var r in t||(t={}))Jo.call(t,r)&&yn(e,r,t[r]);if(bn)for(var r of bn(t))Go.call(t,r)&&yn(e,r,t[r]);return e};const xn="ReactNative",qt={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},Br=" ",Yo=":",Mn="/",di=2,Vo=1e3,En="js";function pi(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function er(){return!(0,dist_cjs.getDocument)()&&!!(0,dist_cjs.getNavigator)()&&navigator.product===xn}function pr(){return!pi()&&!!(0,dist_cjs.getNavigator)()&&!!(0,dist_cjs.getDocument)()}function We(){return er()?qt.reactNative:pi()?qt.node:pr()?qt.browser:qt.unknown}function Wo(){var e;try{return er()&&typeof global<"u"&&typeof(global==null?void 0:global.Application)<"u"?(e=global.Application)==null?void 0:e.applicationId:void 0}catch{return}}function Sn(e,t){let r=query_string.parse(e);return r=wn(wn({},r),t),e=query_string.stringify(r),e}function Xo(){return (0,window_metadata_dist_cjs/* getWindowMetadata */.g)()||{name:"",description:"",url:"",icons:[""]}}function Zo(e,t){var r;const i=We(),n={protocol:e,version:t,env:i};return i==="browser"&&(n.host=((r=sn())==null?void 0:r.host)||"unknown"),n}function Nn(){if(We()===qt.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:r,Version:i}=global.Platform;return[r,i].join("-")}const e=detect();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function In(){var e;const t=We();return t===qt.browser?[t,((e=(0,dist_cjs.getLocation)())==null?void 0:e.host)||"unknown"].join(":"):t}function _n(e,t,r){const i=Nn(),n=In();return[[e,t].join("-"),[En,r].join("-"),i,n].join("/")}function $o({protocol:e,version:t,relayUrl:r,sdkVersion:i,auth:n,projectId:o,useOnCloseEvent:h,bundleId:p}){const b=r.split("?"),m=_n(e,t,i),w={auth:n,ua:m,projectId:o,useOnCloseEvent:h||void 0,origin:p||void 0},y=Sn(b[1]||"",w);return b[0]+"?"+y}function t0(e){let t=(e.match(/^[^:]+(?=:\/\/)/gi)||[])[0];const r=typeof t<"u"?e.split("://")[1]:e;return t=t==="wss"?"https":"http",[t,r].join("://")}function e0(e,t,r){if(!e[t]||typeof e[t]!==r)throw new Error(`Missing or invalid "${t}" param`)}function Bn(e,t=di){return Cn(e.split(Mn),t)}function r0(e){return Bn(e).join(Br)}function _e(e,t){return e.filter(r=>t.includes(r)).length===e.length}function Cn(e,t=di){return e.slice(Math.max(e.length-t,0))}function i0(e){return Object.fromEntries(e.entries())}function n0(e){return new Map(Object.entries(e))}function f0(e,t){const r={};return Object.keys(e).forEach(i=>{r[i]=t(e[i])}),r}const o0=e=>e;function Rn(e){return e.trim().replace(/^\w/,t=>t.toUpperCase())}function s0(e){return e.split(Br).map(t=>Rn(t)).join(Br)}function a0(e=cjs.FIVE_MINUTES,t){const r=(0,cjs.toMiliseconds)(e||cjs.FIVE_MINUTES);let i,n,o;return{resolve:h=>{o&&i&&(clearTimeout(o),i(h))},reject:h=>{o&&n&&(clearTimeout(o),n(h))},done:()=>new Promise((h,p)=>{o=setTimeout(()=>{p(new Error(t))},r),i=h,n=p})}}function u0(e,t,r){return new Promise(async(i,n)=>{const o=setTimeout(()=>n(new Error(r)),t);try{const h=await e;i(h)}catch(h){n(h)}clearTimeout(o)})}function vi(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function h0(e){return vi("topic",e)}function c0(e){return vi("id",e)}function l0(e){const[t,r]=e.split(":"),i={id:void 0,topic:void 0};if(t==="topic"&&typeof r=="string")i.topic=r;else if(t==="id"&&Number.isInteger(Number(r)))i.id=Number(r);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return i}function d0(e,t){return (0,cjs.fromMiliseconds)((t||Date.now())+(0,cjs.toMiliseconds)(e))}function p0(e){return Date.now()>=(0,cjs.toMiliseconds)(e)}function v0(e,t){return`${e}${t?`:${t}`:""}`}function ge(e=[],t=[]){return[...new Set([...e,...t])]}async function m0({id:e,topic:t,wcDeepLink:r}){try{if(!r)return;const i=typeof r=="string"?JSON.parse(r):r;let n=i?.href;if(typeof n!="string")return;n.endsWith("/")&&(n=n.slice(0,-1));const o=`${n}/wc?requestId=${e}&sessionTopic=${t}`,h=We();h===qt.browser?o.startsWith("https://")||o.startsWith("http://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):h===qt.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(i){console.error(i)}}async function g0(e,t){try{return await e.getItem(t)||(pr()?localStorage.getItem(t):void 0)}catch(r){console.error(r)}}function mi(e,t){return e.filter(r=>t.includes(r))}var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A0(e){var t=e.default;if(typeof t=="function"){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}),r}var Pn={exports:{}};/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */(function(e){(function(){var t="input is invalid type",r="finalize already called",i=typeof window=="object",n=i?window:{};n.JS_SHA3_NO_WINDOW&&(i=!1);var o=!i&&typeof self=="object",h=!n.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;h?n=On:o&&(n=self);var p=!n.JS_SHA3_NO_COMMON_JS&&!0&&e.exports,b=!n.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",m="0123456789abcdef".split(""),w=[31,7936,2031616,520093696],y=[4,1024,262144,67108864],S=[1,256,65536,16777216],I=[6,1536,393216,100663296],N=[0,8,16,24],C=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],F=[224,256,384,512],U=[128,256],J=["hex","buffer","arrayBuffer","array","digest"],Bt={128:168,256:136};(n.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(u){return Object.prototype.toString.call(u)==="[object Array]"}),b&&(n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(u){return typeof u=="object"&&u.buffer&&u.buffer.constructor===ArrayBuffer});for(var G=function(u,E,_){return function(B){return new s(u,E,u).update(B)[_]()}},H=function(u,E,_){return function(B,R){return new s(u,E,R).update(B)[_]()}},z=function(u,E,_){return function(B,R,T,P){return f["cshake"+u].update(B,R,T,P)[_]()}},Pt=function(u,E,_){return function(B,R,T,P){return f["kmac"+u].update(B,R,T,P)[_]()}},W=function(u,E,_,B){for(var R=0;R<J.length;++R){var T=J[R];u[T]=E(_,B,T)}return u},Rt=function(u,E){var _=G(u,E,"hex");return _.create=function(){return new s(u,E,u)},_.update=function(B){return _.create().update(B)},W(_,G,u,E)},Yt=function(u,E){var _=H(u,E,"hex");return _.create=function(B){return new s(u,E,B)},_.update=function(B,R){return _.create(R).update(B)},W(_,H,u,E)},Y=function(u,E){var _=Bt[u],B=z(u,E,"hex");return B.create=function(R,T,P){return!T&&!P?f["shake"+u].create(R):new s(u,E,R).bytepad([T,P],_)},B.update=function(R,T,P,O){return B.create(T,P,O).update(R)},W(B,z,u,E)},Vt=function(u,E){var _=Bt[u],B=Pt(u,E,"hex");return B.create=function(R,T,P){return new v(u,E,T).bytepad(["KMAC",P],_).bytepad([R],_)},B.update=function(R,T,P,O){return B.create(R,P,O).update(T)},W(B,Pt,u,E)},A=[{name:"keccak",padding:S,bits:F,createMethod:Rt},{name:"sha3",padding:I,bits:F,createMethod:Rt},{name:"shake",padding:w,bits:U,createMethod:Yt},{name:"cshake",padding:y,bits:U,createMethod:Y},{name:"kmac",padding:y,bits:U,createMethod:Vt}],f={},a=[],c=0;c<A.length;++c)for(var d=A[c],g=d.bits,x=0;x<g.length;++x){var M=d.name+"_"+g[x];if(a.push(M),f[M]=d.createMethod(g[x],d.padding),d.name!=="sha3"){var l=d.name+g[x];a.push(l),f[l]=f[M]}}function s(u,E,_){this.blocks=[],this.s=[],this.padding=E,this.outputBits=_,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(u<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=_>>5,this.extraBytes=(_&31)>>3;for(var B=0;B<50;++B)this.s[B]=0}s.prototype.update=function(u){if(this.finalized)throw new Error(r);var E,_=typeof u;if(_!=="string"){if(_==="object"){if(u===null)throw new Error(t);if(b&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!b||!ArrayBuffer.isView(u)))throw new Error(t)}else throw new Error(t);E=!0}for(var B=this.blocks,R=this.byteCount,T=u.length,P=this.blockCount,O=0,Ct=this.s,D,q;O<T;){if(this.reset)for(this.reset=!1,B[0]=this.block,D=1;D<P+1;++D)B[D]=0;if(E)for(D=this.start;O<T&&D<R;++O)B[D>>2]|=u[O]<<N[D++&3];else for(D=this.start;O<T&&D<R;++O)q=u.charCodeAt(O),q<128?B[D>>2]|=q<<N[D++&3]:q<2048?(B[D>>2]|=(192|q>>6)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]):q<55296||q>=57344?(B[D>>2]|=(224|q>>12)<<N[D++&3],B[D>>2]|=(128|q>>6&63)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]):(q=65536+((q&1023)<<10|u.charCodeAt(++O)&1023),B[D>>2]|=(240|q>>18)<<N[D++&3],B[D>>2]|=(128|q>>12&63)<<N[D++&3],B[D>>2]|=(128|q>>6&63)<<N[D++&3],B[D>>2]|=(128|q&63)<<N[D++&3]);if(this.lastByteIndex=D,D>=R){for(this.start=D-R,this.block=B[P],D=0;D<P;++D)Ct[D]^=B[D];k(Ct),this.reset=!0}else this.start=D}return this},s.prototype.encode=function(u,E){var _=u&255,B=1,R=[_];for(u=u>>8,_=u&255;_>0;)R.unshift(_),u=u>>8,_=u&255,++B;return E?R.push(B):R.unshift(B),this.update(R),R.length},s.prototype.encodeString=function(u){var E,_=typeof u;if(_!=="string"){if(_==="object"){if(u===null)throw new Error(t);if(b&&u.constructor===ArrayBuffer)u=new Uint8Array(u);else if(!Array.isArray(u)&&(!b||!ArrayBuffer.isView(u)))throw new Error(t)}else throw new Error(t);E=!0}var B=0,R=u.length;if(E)B=R;else for(var T=0;T<u.length;++T){var P=u.charCodeAt(T);P<128?B+=1:P<2048?B+=2:P<55296||P>=57344?B+=3:(P=65536+((P&1023)<<10|u.charCodeAt(++T)&1023),B+=4)}return B+=this.encode(B*8),this.update(u),B},s.prototype.bytepad=function(u,E){for(var _=this.encode(E),B=0;B<u.length;++B)_+=this.encodeString(u[B]);var R=E-_%E,T=[];return T.length=R,this.update(T),this},s.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var u=this.blocks,E=this.lastByteIndex,_=this.blockCount,B=this.s;if(u[E>>2]|=this.padding[E&3],this.lastByteIndex===this.byteCount)for(u[0]=u[_],E=1;E<_+1;++E)u[E]=0;for(u[_-1]|=2147483648,E=0;E<_;++E)B[E]^=u[E];k(B)}},s.prototype.toString=s.prototype.hex=function(){this.finalize();for(var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P="",O;T<_;){for(R=0;R<u&&T<_;++R,++T)O=E[R],P+=m[O>>4&15]+m[O&15]+m[O>>12&15]+m[O>>8&15]+m[O>>20&15]+m[O>>16&15]+m[O>>28&15]+m[O>>24&15];T%u===0&&(k(E),R=0)}return B&&(O=E[R],P+=m[O>>4&15]+m[O&15],B>1&&(P+=m[O>>12&15]+m[O>>8&15]),B>2&&(P+=m[O>>20&15]+m[O>>16&15])),P},s.prototype.arrayBuffer=function(){this.finalize();var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P=this.outputBits>>3,O;B?O=new ArrayBuffer(_+1<<2):O=new ArrayBuffer(P);for(var Ct=new Uint32Array(O);T<_;){for(R=0;R<u&&T<_;++R,++T)Ct[T]=E[R];T%u===0&&k(E)}return B&&(Ct[R]=E[R],O=O.slice(0,P)),O},s.prototype.buffer=s.prototype.arrayBuffer,s.prototype.digest=s.prototype.array=function(){this.finalize();for(var u=this.blockCount,E=this.s,_=this.outputBlocks,B=this.extraBytes,R=0,T=0,P=[],O,Ct;T<_;){for(R=0;R<u&&T<_;++R,++T)O=T<<2,Ct=E[R],P[O]=Ct&255,P[O+1]=Ct>>8&255,P[O+2]=Ct>>16&255,P[O+3]=Ct>>24&255;T%u===0&&k(E)}return B&&(O=T<<2,Ct=E[R],P[O]=Ct&255,B>1&&(P[O+1]=Ct>>8&255),B>2&&(P[O+2]=Ct>>16&255)),P};function v(u,E,_){s.call(this,u,E,_)}v.prototype=new s,v.prototype.finalize=function(){return this.encode(this.outputBits,!0),s.prototype.finalize.call(this)};var k=function(u){var E,_,B,R,T,P,O,Ct,D,q,De,X,Z,Fe,$,tt,Te,et,rt,Ue,it,nt,ke,ft,ot,qe,st,at,Ke,ut,ht,He,ct,lt,ze,dt,pt,Le,vt,mt,je,gt,At,Qe,bt,yt,Je,wt,xt,Ge,Mt,Et,Ye,St,Nt,Ve,It,_t,Me,Ee,Se,Ne,Ie;for(B=0;B<48;B+=2)R=u[0]^u[10]^u[20]^u[30]^u[40],T=u[1]^u[11]^u[21]^u[31]^u[41],P=u[2]^u[12]^u[22]^u[32]^u[42],O=u[3]^u[13]^u[23]^u[33]^u[43],Ct=u[4]^u[14]^u[24]^u[34]^u[44],D=u[5]^u[15]^u[25]^u[35]^u[45],q=u[6]^u[16]^u[26]^u[36]^u[46],De=u[7]^u[17]^u[27]^u[37]^u[47],X=u[8]^u[18]^u[28]^u[38]^u[48],Z=u[9]^u[19]^u[29]^u[39]^u[49],E=X^(P<<1|O>>>31),_=Z^(O<<1|P>>>31),u[0]^=E,u[1]^=_,u[10]^=E,u[11]^=_,u[20]^=E,u[21]^=_,u[30]^=E,u[31]^=_,u[40]^=E,u[41]^=_,E=R^(Ct<<1|D>>>31),_=T^(D<<1|Ct>>>31),u[2]^=E,u[3]^=_,u[12]^=E,u[13]^=_,u[22]^=E,u[23]^=_,u[32]^=E,u[33]^=_,u[42]^=E,u[43]^=_,E=P^(q<<1|De>>>31),_=O^(De<<1|q>>>31),u[4]^=E,u[5]^=_,u[14]^=E,u[15]^=_,u[24]^=E,u[25]^=_,u[34]^=E,u[35]^=_,u[44]^=E,u[45]^=_,E=Ct^(X<<1|Z>>>31),_=D^(Z<<1|X>>>31),u[6]^=E,u[7]^=_,u[16]^=E,u[17]^=_,u[26]^=E,u[27]^=_,u[36]^=E,u[37]^=_,u[46]^=E,u[47]^=_,E=q^(R<<1|T>>>31),_=De^(T<<1|R>>>31),u[8]^=E,u[9]^=_,u[18]^=E,u[19]^=_,u[28]^=E,u[29]^=_,u[38]^=E,u[39]^=_,u[48]^=E,u[49]^=_,Fe=u[0],$=u[1],yt=u[11]<<4|u[10]>>>28,Je=u[10]<<4|u[11]>>>28,at=u[20]<<3|u[21]>>>29,Ke=u[21]<<3|u[20]>>>29,Ee=u[31]<<9|u[30]>>>23,Se=u[30]<<9|u[31]>>>23,gt=u[40]<<18|u[41]>>>14,At=u[41]<<18|u[40]>>>14,lt=u[2]<<1|u[3]>>>31,ze=u[3]<<1|u[2]>>>31,tt=u[13]<<12|u[12]>>>20,Te=u[12]<<12|u[13]>>>20,wt=u[22]<<10|u[23]>>>22,xt=u[23]<<10|u[22]>>>22,ut=u[33]<<13|u[32]>>>19,ht=u[32]<<13|u[33]>>>19,Ne=u[42]<<2|u[43]>>>30,Ie=u[43]<<2|u[42]>>>30,St=u[5]<<30|u[4]>>>2,Nt=u[4]<<30|u[5]>>>2,dt=u[14]<<6|u[15]>>>26,pt=u[15]<<6|u[14]>>>26,et=u[25]<<11|u[24]>>>21,rt=u[24]<<11|u[25]>>>21,Ge=u[34]<<15|u[35]>>>17,Mt=u[35]<<15|u[34]>>>17,He=u[45]<<29|u[44]>>>3,ct=u[44]<<29|u[45]>>>3,ft=u[6]<<28|u[7]>>>4,ot=u[7]<<28|u[6]>>>4,Ve=u[17]<<23|u[16]>>>9,It=u[16]<<23|u[17]>>>9,Le=u[26]<<25|u[27]>>>7,vt=u[27]<<25|u[26]>>>7,Ue=u[36]<<21|u[37]>>>11,it=u[37]<<21|u[36]>>>11,Et=u[47]<<24|u[46]>>>8,Ye=u[46]<<24|u[47]>>>8,Qe=u[8]<<27|u[9]>>>5,bt=u[9]<<27|u[8]>>>5,qe=u[18]<<20|u[19]>>>12,st=u[19]<<20|u[18]>>>12,_t=u[29]<<7|u[28]>>>25,Me=u[28]<<7|u[29]>>>25,mt=u[38]<<8|u[39]>>>24,je=u[39]<<8|u[38]>>>24,nt=u[48]<<14|u[49]>>>18,ke=u[49]<<14|u[48]>>>18,u[0]=Fe^~tt&et,u[1]=$^~Te&rt,u[10]=ft^~qe&at,u[11]=ot^~st&Ke,u[20]=lt^~dt&Le,u[21]=ze^~pt&vt,u[30]=Qe^~yt&wt,u[31]=bt^~Je&xt,u[40]=St^~Ve&_t,u[41]=Nt^~It&Me,u[2]=tt^~et&Ue,u[3]=Te^~rt&it,u[12]=qe^~at&ut,u[13]=st^~Ke&ht,u[22]=dt^~Le&mt,u[23]=pt^~vt&je,u[32]=yt^~wt&Ge,u[33]=Je^~xt&Mt,u[42]=Ve^~_t&Ee,u[43]=It^~Me&Se,u[4]=et^~Ue&nt,u[5]=rt^~it&ke,u[14]=at^~ut&He,u[15]=Ke^~ht&ct,u[24]=Le^~mt&gt,u[25]=vt^~je&At,u[34]=wt^~Ge&Et,u[35]=xt^~Mt&Ye,u[44]=_t^~Ee&Ne,u[45]=Me^~Se&Ie,u[6]=Ue^~nt&Fe,u[7]=it^~ke&$,u[16]=ut^~He&ft,u[17]=ht^~ct&ot,u[26]=mt^~gt&lt,u[27]=je^~At&ze,u[36]=Ge^~Et&Qe,u[37]=Mt^~Ye&bt,u[46]=Ee^~Ne&St,u[47]=Se^~Ie&Nt,u[8]=nt^~Fe&tt,u[9]=ke^~$&Te,u[18]=He^~ft&qe,u[19]=ct^~ot&st,u[28]=gt^~lt&dt,u[29]=At^~ze&pt,u[38]=Et^~Qe&yt,u[39]=Ye^~bt&Je,u[48]=Ne^~St&Ve,u[49]=Ie^~Nt&It,u[0]^=C[B],u[1]^=C[B+1]};if(p)e.exports=f;else for(c=0;c<a.length;++c)n[a[c]]=f[a[c]]})()})(Pn);var b0=Pn.exports;const y0="logger/5.7.0";let Dn=!1,Fn=!1;const Cr={debug:1,default:2,info:2,warning:3,error:4,off:5};let Tn=Cr.default,gi=null;function w0(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach(t=>{try{if("test".normalize(t)!=="test")throw new Error("bad normalize")}catch{e.push(t)}}),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}const Un=w0();var Ai;(function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"})(Ai||(Ai={}));var re;(function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"})(re||(re={}));const kn="0123456789abcdef";class L{constructor(t){Object.defineProperty(this,"version",{enumerable:!0,value:t,writable:!1})}_log(t,r){const i=t.toLowerCase();Cr[i]==null&&this.throwArgumentError("invalid log level name","logLevel",t),!(Tn>Cr[i])&&console.log.apply(console,r)}debug(...t){this._log(L.levels.DEBUG,t)}info(...t){this._log(L.levels.INFO,t)}warn(...t){this._log(L.levels.WARNING,t)}makeError(t,r,i){if(Fn)return this.makeError("censored error",r,{});r||(r=L.errors.UNKNOWN_ERROR),i||(i={});const n=[];Object.keys(i).forEach(b=>{const m=i[b];try{if(m instanceof Uint8Array){let w="";for(let y=0;y<m.length;y++)w+=kn[m[y]>>4],w+=kn[m[y]&15];n.push(b+"=Uint8Array(0x"+w+")")}else n.push(b+"="+JSON.stringify(m))}catch{n.push(b+"="+JSON.stringify(i[b].toString()))}}),n.push(`code=${r}`),n.push(`version=${this.version}`);const o=t;let h="";switch(r){case re.NUMERIC_FAULT:{h="NUMERIC_FAULT";const b=t;switch(b){case"overflow":case"underflow":case"division-by-zero":h+="-"+b;break;case"negative-power":case"negative-width":h+="-unsupported";break;case"unbound-bitwise-result":h+="-unbound-result";break}break}case re.CALL_EXCEPTION:case re.INSUFFICIENT_FUNDS:case re.MISSING_NEW:case re.NONCE_EXPIRED:case re.REPLACEMENT_UNDERPRICED:case re.TRANSACTION_REPLACED:case re.UNPREDICTABLE_GAS_LIMIT:h=r;break}h&&(t+=" [ See: https://links.ethers.org/v5-errors-"+h+" ]"),n.length&&(t+=" ("+n.join(", ")+")");const p=new Error(t);return p.reason=o,p.code=r,Object.keys(i).forEach(function(b){p[b]=i[b]}),p}throwError(t,r,i){throw this.makeError(t,r,i)}throwArgumentError(t,r,i){return this.throwError(t,L.errors.INVALID_ARGUMENT,{argument:r,value:i})}assert(t,r,i,n){t||this.throwError(r,i,n)}assertArgument(t,r,i,n){t||this.throwArgumentError(r,i,n)}checkNormalize(t){Un&&this.throwError("platform missing String.prototype.normalize",L.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:Un})}checkSafeUint53(t,r){typeof t=="number"&&(r==null&&(r="value not safe"),(t<0||t>=9007199254740991)&&this.throwError(r,L.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:t}),t%1&&this.throwError(r,L.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:t}))}checkArgumentCount(t,r,i){i?i=": "+i:i="",t<r&&this.throwError("missing argument"+i,L.errors.MISSING_ARGUMENT,{count:t,expectedCount:r}),t>r&&this.throwError("too many arguments"+i,L.errors.UNEXPECTED_ARGUMENT,{count:t,expectedCount:r})}checkNew(t,r){(t===Object||t==null)&&this.throwError("missing new",L.errors.MISSING_NEW,{name:r.name})}checkAbstract(t,r){t===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",L.errors.UNSUPPORTED_OPERATION,{name:t.name,operation:"new"}):(t===Object||t==null)&&this.throwError("missing new",L.errors.MISSING_NEW,{name:r.name})}static globalLogger(){return gi||(gi=new L(y0)),gi}static setCensorship(t,r){if(!t&&r&&this.globalLogger().throwError("cannot permanently disable censorship",L.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),Dn){if(!t)return;this.globalLogger().throwError("error censorship permanent",L.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}Fn=!!t,Dn=!!r}static setLogLevel(t){const r=Cr[t.toLowerCase()];if(r==null){L.globalLogger().warn("invalid log level - "+t);return}Tn=r}static from(t){return new L(t)}}L.errors=re,L.levels=Ai;const x0="bytes/5.7.0",Dt=new L(x0);function qn(e){return!!e.toHexString}function rr(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return rr(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function M0(e){return Qt(e)&&!(e.length%2)||ir(e)}function Kn(e){return typeof e=="number"&&e==e&&e%1===0}function ir(e){if(e==null)return!1;if(e.constructor===Uint8Array)return!0;if(typeof e=="string"||!Kn(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(!Kn(r)||r<0||r>=256)return!1}return!0}function Ot(e,t){if(t||(t={}),typeof e=="number"){Dt.checkSafeUint53(e,"invalid arrayify value");const r=[];for(;e;)r.unshift(e&255),e=parseInt(String(e/256));return r.length===0&&r.push(0),rr(new Uint8Array(r))}if(t.allowMissingPrefix&&typeof e=="string"&&e.substring(0,2)!=="0x"&&(e="0x"+e),qn(e)&&(e=e.toHexString()),Qt(e)){let r=e.substring(2);r.length%2&&(t.hexPad==="left"?r="0"+r:t.hexPad==="right"?r+="0":Dt.throwArgumentError("hex data is odd-length","value",e));const i=[];for(let n=0;n<r.length;n+=2)i.push(parseInt(r.substring(n,n+2),16));return rr(new Uint8Array(i))}return ir(e)?rr(new Uint8Array(e)):Dt.throwArgumentError("invalid arrayify value","value",e)}function E0(e){const t=e.map(n=>Ot(n)),r=t.reduce((n,o)=>n+o.length,0),i=new Uint8Array(r);return t.reduce((n,o)=>(i.set(o,n),n+o.length),0),rr(i)}function S0(e,t){e=Ot(e),e.length>t&&Dt.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(t);return r.set(e,t-e.length),rr(r)}function Qt(e,t){return!(typeof e!="string"||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}const bi="0123456789abcdef";function Kt(e,t){if(t||(t={}),typeof e=="number"){Dt.checkSafeUint53(e,"invalid hexlify value");let r="";for(;e;)r=bi[e&15]+r,e=Math.floor(e/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if(typeof e=="bigint")return e=e.toString(16),e.length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&typeof e=="string"&&e.substring(0,2)!=="0x"&&(e="0x"+e),qn(e))return e.toHexString();if(Qt(e))return e.length%2&&(t.hexPad==="left"?e="0x0"+e.substring(2):t.hexPad==="right"?e+="0":Dt.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(ir(e)){let r="0x";for(let i=0;i<e.length;i++){let n=e[i];r+=bi[(n&240)>>4]+bi[n&15]}return r}return Dt.throwArgumentError("invalid hexlify value","value",e)}function N0(e){if(typeof e!="string")e=Kt(e);else if(!Qt(e)||e.length%2)return null;return(e.length-2)/2}function Hn(e,t,r){return typeof e!="string"?e=Kt(e):(!Qt(e)||e.length%2)&&Dt.throwArgumentError("invalid hexData","value",e),t=2+2*t,r!=null?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)}function oe(e,t){for(typeof e!="string"?e=Kt(e):Qt(e)||Dt.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&Dt.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function zn(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(M0(e)){let r=Ot(e);r.length===64?(t.v=27+(r[32]>>7),r[32]&=127,t.r=Kt(r.slice(0,32)),t.s=Kt(r.slice(32,64))):r.length===65?(t.r=Kt(r.slice(0,32)),t.s=Kt(r.slice(32,64)),t.v=r[64]):Dt.throwArgumentError("invalid signature string","signature",e),t.v<27&&(t.v===0||t.v===1?t.v+=27:Dt.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(r[32]|=128),t._vs=Kt(r.slice(32,64))}else{if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,t._vs!=null){const n=S0(Ot(t._vs),32);t._vs=Kt(n);const o=n[0]>=128?1:0;t.recoveryParam==null?t.recoveryParam=o:t.recoveryParam!==o&&Dt.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),n[0]&=127;const h=Kt(n);t.s==null?t.s=h:t.s!==h&&Dt.throwArgumentError("signature v mismatch _vs","signature",e)}if(t.recoveryParam==null)t.v==null?Dt.throwArgumentError("signature missing v and recoveryParam","signature",e):t.v===0||t.v===1?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(t.v==null)t.v=27+t.recoveryParam;else{const n=t.v===0||t.v===1?t.v:1-t.v%2;t.recoveryParam!==n&&Dt.throwArgumentError("signature recoveryParam mismatch v","signature",e)}t.r==null||!Qt(t.r)?Dt.throwArgumentError("signature missing or invalid r","signature",e):t.r=oe(t.r,32),t.s==null||!Qt(t.s)?Dt.throwArgumentError("signature missing or invalid s","signature",e):t.s=oe(t.s,32);const r=Ot(t.s);r[0]>=128&&Dt.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(r[0]|=128);const i=Kt(r);t._vs&&(Qt(t._vs)||Dt.throwArgumentError("signature invalid _vs","signature",e),t._vs=oe(t._vs,32)),t._vs==null?t._vs=i:t._vs!==i&&Dt.throwArgumentError("signature _vs mismatch v and s","signature",e)}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}function yi(e){return"0x"+b0.keccak_256(Ot(e))}var Ln={exports:{}},I0={},_0=Object.freeze({__proto__:null,default:I0}),B0=A0(_0);(function(e){(function(t,r){function i(A,f){if(!A)throw new Error(f||"Assertion failed")}function n(A,f){A.super_=f;var a=function(){};a.prototype=f.prototype,A.prototype=new a,A.prototype.constructor=A}function o(A,f,a){if(o.isBN(A))return A;this.negative=0,this.words=null,this.length=0,this.red=null,A!==null&&((f==="le"||f==="be")&&(a=f,f=10),this._init(A||0,f||10,a||"be"))}typeof t=="object"?t.exports=o:r.BN=o,o.BN=o,o.wordSize=26;var h;try{typeof window<"u"&&typeof window.Buffer<"u"?h=window.Buffer:h=B0.Buffer}catch{}o.isBN=function(f){return f instanceof o?!0:f!==null&&typeof f=="object"&&f.constructor.wordSize===o.wordSize&&Array.isArray(f.words)},o.max=function(f,a){return f.cmp(a)>0?f:a},o.min=function(f,a){return f.cmp(a)<0?f:a},o.prototype._init=function(f,a,c){if(typeof f=="number")return this._initNumber(f,a,c);if(typeof f=="object")return this._initArray(f,a,c);a==="hex"&&(a=16),i(a===(a|0)&&a>=2&&a<=36),f=f.toString().replace(/\s+/g,"");var d=0;f[0]==="-"&&(d++,this.negative=1),d<f.length&&(a===16?this._parseHex(f,d,c):(this._parseBase(f,a,d),c==="le"&&this._initArray(this.toArray(),a,c)))},o.prototype._initNumber=function(f,a,c){f<0&&(this.negative=1,f=-f),f<67108864?(this.words=[f&67108863],this.length=1):f<4503599627370496?(this.words=[f&67108863,f/67108864&67108863],this.length=2):(i(f<9007199254740992),this.words=[f&67108863,f/67108864&67108863,1],this.length=3),c==="le"&&this._initArray(this.toArray(),a,c)},o.prototype._initArray=function(f,a,c){if(i(typeof f.length=="number"),f.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(f.length/3),this.words=new Array(this.length);for(var d=0;d<this.length;d++)this.words[d]=0;var g,x,M=0;if(c==="be")for(d=f.length-1,g=0;d>=0;d-=3)x=f[d]|f[d-1]<<8|f[d-2]<<16,this.words[g]|=x<<M&67108863,this.words[g+1]=x>>>26-M&67108863,M+=24,M>=26&&(M-=26,g++);else if(c==="le")for(d=0,g=0;d<f.length;d+=3)x=f[d]|f[d+1]<<8|f[d+2]<<16,this.words[g]|=x<<M&67108863,this.words[g+1]=x>>>26-M&67108863,M+=24,M>=26&&(M-=26,g++);return this._strip()};function p(A,f){var a=A.charCodeAt(f);if(a>=48&&a<=57)return a-48;if(a>=65&&a<=70)return a-55;if(a>=97&&a<=102)return a-87;i(!1,"Invalid character in "+A)}function b(A,f,a){var c=p(A,a);return a-1>=f&&(c|=p(A,a-1)<<4),c}o.prototype._parseHex=function(f,a,c){this.length=Math.ceil((f.length-a)/6),this.words=new Array(this.length);for(var d=0;d<this.length;d++)this.words[d]=0;var g=0,x=0,M;if(c==="be")for(d=f.length-1;d>=a;d-=2)M=b(f,a,d)<<g,this.words[x]|=M&67108863,g>=18?(g-=18,x+=1,this.words[x]|=M>>>26):g+=8;else{var l=f.length-a;for(d=l%2===0?a+1:a;d<f.length;d+=2)M=b(f,a,d)<<g,this.words[x]|=M&67108863,g>=18?(g-=18,x+=1,this.words[x]|=M>>>26):g+=8}this._strip()};function m(A,f,a,c){for(var d=0,g=0,x=Math.min(A.length,a),M=f;M<x;M++){var l=A.charCodeAt(M)-48;d*=c,l>=49?g=l-49+10:l>=17?g=l-17+10:g=l,i(l>=0&&g<c,"Invalid character"),d+=g}return d}o.prototype._parseBase=function(f,a,c){this.words=[0],this.length=1;for(var d=0,g=1;g<=67108863;g*=a)d++;d--,g=g/a|0;for(var x=f.length-c,M=x%d,l=Math.min(x,x-M)+c,s=0,v=c;v<l;v+=d)s=m(f,v,v+d,a),this.imuln(g),this.words[0]+s<67108864?this.words[0]+=s:this._iaddn(s);if(M!==0){var k=1;for(s=m(f,v,f.length,a),v=0;v<M;v++)k*=a;this.imuln(k),this.words[0]+s<67108864?this.words[0]+=s:this._iaddn(s)}this._strip()},o.prototype.copy=function(f){f.words=new Array(this.length);for(var a=0;a<this.length;a++)f.words[a]=this.words[a];f.length=this.length,f.negative=this.negative,f.red=this.red};function w(A,f){A.words=f.words,A.length=f.length,A.negative=f.negative,A.red=f.red}if(o.prototype._move=function(f){w(f,this)},o.prototype.clone=function(){var f=new o(null);return this.copy(f),f},o.prototype._expand=function(f){for(;this.length<f;)this.words[this.length++]=0;return this},o.prototype._strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},o.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},typeof Symbol<"u"&&typeof Symbol.for=="function")try{o.prototype[Symbol.for("nodejs.util.inspect.custom")]=y}catch{o.prototype.inspect=y}else o.prototype.inspect=y;function y(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var S=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],I=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],N=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(f,a){f=f||10,a=a|0||1;var c;if(f===16||f==="hex"){c="";for(var d=0,g=0,x=0;x<this.length;x++){var M=this.words[x],l=((M<<d|g)&16777215).toString(16);g=M>>>24-d&16777215,d+=2,d>=26&&(d-=26,x--),g!==0||x!==this.length-1?c=S[6-l.length]+l+c:c=l+c}for(g!==0&&(c=g.toString(16)+c);c.length%a!==0;)c="0"+c;return this.negative!==0&&(c="-"+c),c}if(f===(f|0)&&f>=2&&f<=36){var s=I[f],v=N[f];c="";var k=this.clone();for(k.negative=0;!k.isZero();){var u=k.modrn(v).toString(f);k=k.idivn(v),k.isZero()?c=u+c:c=S[s-u.length]+u+c}for(this.isZero()&&(c="0"+c);c.length%a!==0;)c="0"+c;return this.negative!==0&&(c="-"+c),c}i(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var f=this.words[0];return this.length===2?f+=this.words[1]*67108864:this.length===3&&this.words[2]===1?f+=4503599627370496+this.words[1]*67108864:this.length>2&&i(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-f:f},o.prototype.toJSON=function(){return this.toString(16,2)},h&&(o.prototype.toBuffer=function(f,a){return this.toArrayLike(h,f,a)}),o.prototype.toArray=function(f,a){return this.toArrayLike(Array,f,a)};var C=function(f,a){return f.allocUnsafe?f.allocUnsafe(a):new f(a)};o.prototype.toArrayLike=function(f,a,c){this._strip();var d=this.byteLength(),g=c||Math.max(1,d);i(d<=g,"byte array longer than desired length"),i(g>0,"Requested array length <= 0");var x=C(f,g),M=a==="le"?"LE":"BE";return this["_toArrayLike"+M](x,d),x},o.prototype._toArrayLikeLE=function(f,a){for(var c=0,d=0,g=0,x=0;g<this.length;g++){var M=this.words[g]<<x|d;f[c++]=M&255,c<f.length&&(f[c++]=M>>8&255),c<f.length&&(f[c++]=M>>16&255),x===6?(c<f.length&&(f[c++]=M>>24&255),d=0,x=0):(d=M>>>24,x+=2)}if(c<f.length)for(f[c++]=d;c<f.length;)f[c++]=0},o.prototype._toArrayLikeBE=function(f,a){for(var c=f.length-1,d=0,g=0,x=0;g<this.length;g++){var M=this.words[g]<<x|d;f[c--]=M&255,c>=0&&(f[c--]=M>>8&255),c>=0&&(f[c--]=M>>16&255),x===6?(c>=0&&(f[c--]=M>>24&255),d=0,x=0):(d=M>>>24,x+=2)}if(c>=0)for(f[c--]=d;c>=0;)f[c--]=0},Math.clz32?o.prototype._countBits=function(f){return 32-Math.clz32(f)}:o.prototype._countBits=function(f){var a=f,c=0;return a>=4096&&(c+=13,a>>>=13),a>=64&&(c+=7,a>>>=7),a>=8&&(c+=4,a>>>=4),a>=2&&(c+=2,a>>>=2),c+a},o.prototype._zeroBits=function(f){if(f===0)return 26;var a=f,c=0;return a&8191||(c+=13,a>>>=13),a&127||(c+=7,a>>>=7),a&15||(c+=4,a>>>=4),a&3||(c+=2,a>>>=2),a&1||c++,c},o.prototype.bitLength=function(){var f=this.words[this.length-1],a=this._countBits(f);return(this.length-1)*26+a};function F(A){for(var f=new Array(A.bitLength()),a=0;a<f.length;a++){var c=a/26|0,d=a%26;f[a]=A.words[c]>>>d&1}return f}o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var f=0,a=0;a<this.length;a++){var c=this._zeroBits(this.words[a]);if(f+=c,c!==26)break}return f},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(f){return this.negative!==0?this.abs().inotn(f).iaddn(1):this.clone()},o.prototype.fromTwos=function(f){return this.testn(f-1)?this.notn(f).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return this.negative!==0},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(f){for(;this.length<f.length;)this.words[this.length++]=0;for(var a=0;a<f.length;a++)this.words[a]=this.words[a]|f.words[a];return this._strip()},o.prototype.ior=function(f){return i((this.negative|f.negative)===0),this.iuor(f)},o.prototype.or=function(f){return this.length>f.length?this.clone().ior(f):f.clone().ior(this)},o.prototype.uor=function(f){return this.length>f.length?this.clone().iuor(f):f.clone().iuor(this)},o.prototype.iuand=function(f){var a;this.length>f.length?a=f:a=this;for(var c=0;c<a.length;c++)this.words[c]=this.words[c]&f.words[c];return this.length=a.length,this._strip()},o.prototype.iand=function(f){return i((this.negative|f.negative)===0),this.iuand(f)},o.prototype.and=function(f){return this.length>f.length?this.clone().iand(f):f.clone().iand(this)},o.prototype.uand=function(f){return this.length>f.length?this.clone().iuand(f):f.clone().iuand(this)},o.prototype.iuxor=function(f){var a,c;this.length>f.length?(a=this,c=f):(a=f,c=this);for(var d=0;d<c.length;d++)this.words[d]=a.words[d]^c.words[d];if(this!==a)for(;d<a.length;d++)this.words[d]=a.words[d];return this.length=a.length,this._strip()},o.prototype.ixor=function(f){return i((this.negative|f.negative)===0),this.iuxor(f)},o.prototype.xor=function(f){return this.length>f.length?this.clone().ixor(f):f.clone().ixor(this)},o.prototype.uxor=function(f){return this.length>f.length?this.clone().iuxor(f):f.clone().iuxor(this)},o.prototype.inotn=function(f){i(typeof f=="number"&&f>=0);var a=Math.ceil(f/26)|0,c=f%26;this._expand(a),c>0&&a--;for(var d=0;d<a;d++)this.words[d]=~this.words[d]&67108863;return c>0&&(this.words[d]=~this.words[d]&67108863>>26-c),this._strip()},o.prototype.notn=function(f){return this.clone().inotn(f)},o.prototype.setn=function(f,a){i(typeof f=="number"&&f>=0);var c=f/26|0,d=f%26;return this._expand(c+1),a?this.words[c]=this.words[c]|1<<d:this.words[c]=this.words[c]&~(1<<d),this._strip()},o.prototype.iadd=function(f){var a;if(this.negative!==0&&f.negative===0)return this.negative=0,a=this.isub(f),this.negative^=1,this._normSign();if(this.negative===0&&f.negative!==0)return f.negative=0,a=this.isub(f),f.negative=1,a._normSign();var c,d;this.length>f.length?(c=this,d=f):(c=f,d=this);for(var g=0,x=0;x<d.length;x++)a=(c.words[x]|0)+(d.words[x]|0)+g,this.words[x]=a&67108863,g=a>>>26;for(;g!==0&&x<c.length;x++)a=(c.words[x]|0)+g,this.words[x]=a&67108863,g=a>>>26;if(this.length=c.length,g!==0)this.words[this.length]=g,this.length++;else if(c!==this)for(;x<c.length;x++)this.words[x]=c.words[x];return this},o.prototype.add=function(f){var a;return f.negative!==0&&this.negative===0?(f.negative=0,a=this.sub(f),f.negative^=1,a):f.negative===0&&this.negative!==0?(this.negative=0,a=f.sub(this),this.negative=1,a):this.length>f.length?this.clone().iadd(f):f.clone().iadd(this)},o.prototype.isub=function(f){if(f.negative!==0){f.negative=0;var a=this.iadd(f);return f.negative=1,a._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(f),this.negative=1,this._normSign();var c=this.cmp(f);if(c===0)return this.negative=0,this.length=1,this.words[0]=0,this;var d,g;c>0?(d=this,g=f):(d=f,g=this);for(var x=0,M=0;M<g.length;M++)a=(d.words[M]|0)-(g.words[M]|0)+x,x=a>>26,this.words[M]=a&67108863;for(;x!==0&&M<d.length;M++)a=(d.words[M]|0)+x,x=a>>26,this.words[M]=a&67108863;if(x===0&&M<d.length&&d!==this)for(;M<d.length;M++)this.words[M]=d.words[M];return this.length=Math.max(this.length,M),d!==this&&(this.negative=1),this._strip()},o.prototype.sub=function(f){return this.clone().isub(f)};function U(A,f,a){a.negative=f.negative^A.negative;var c=A.length+f.length|0;a.length=c,c=c-1|0;var d=A.words[0]|0,g=f.words[0]|0,x=d*g,M=x&67108863,l=x/67108864|0;a.words[0]=M;for(var s=1;s<c;s++){for(var v=l>>>26,k=l&67108863,u=Math.min(s,f.length-1),E=Math.max(0,s-A.length+1);E<=u;E++){var _=s-E|0;d=A.words[_]|0,g=f.words[E]|0,x=d*g+k,v+=x/67108864|0,k=x&67108863}a.words[s]=k|0,l=v|0}return l!==0?a.words[s]=l|0:a.length--,a._strip()}var J=function(f,a,c){var d=f.words,g=a.words,x=c.words,M=0,l,s,v,k=d[0]|0,u=k&8191,E=k>>>13,_=d[1]|0,B=_&8191,R=_>>>13,T=d[2]|0,P=T&8191,O=T>>>13,Ct=d[3]|0,D=Ct&8191,q=Ct>>>13,De=d[4]|0,X=De&8191,Z=De>>>13,Fe=d[5]|0,$=Fe&8191,tt=Fe>>>13,Te=d[6]|0,et=Te&8191,rt=Te>>>13,Ue=d[7]|0,it=Ue&8191,nt=Ue>>>13,ke=d[8]|0,ft=ke&8191,ot=ke>>>13,qe=d[9]|0,st=qe&8191,at=qe>>>13,Ke=g[0]|0,ut=Ke&8191,ht=Ke>>>13,He=g[1]|0,ct=He&8191,lt=He>>>13,ze=g[2]|0,dt=ze&8191,pt=ze>>>13,Le=g[3]|0,vt=Le&8191,mt=Le>>>13,je=g[4]|0,gt=je&8191,At=je>>>13,Qe=g[5]|0,bt=Qe&8191,yt=Qe>>>13,Je=g[6]|0,wt=Je&8191,xt=Je>>>13,Ge=g[7]|0,Mt=Ge&8191,Et=Ge>>>13,Ye=g[8]|0,St=Ye&8191,Nt=Ye>>>13,Ve=g[9]|0,It=Ve&8191,_t=Ve>>>13;c.negative=f.negative^a.negative,c.length=19,l=Math.imul(u,ut),s=Math.imul(u,ht),s=s+Math.imul(E,ut)|0,v=Math.imul(E,ht);var Me=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Me>>>26)|0,Me&=67108863,l=Math.imul(B,ut),s=Math.imul(B,ht),s=s+Math.imul(R,ut)|0,v=Math.imul(R,ht),l=l+Math.imul(u,ct)|0,s=s+Math.imul(u,lt)|0,s=s+Math.imul(E,ct)|0,v=v+Math.imul(E,lt)|0;var Ee=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,l=Math.imul(P,ut),s=Math.imul(P,ht),s=s+Math.imul(O,ut)|0,v=Math.imul(O,ht),l=l+Math.imul(B,ct)|0,s=s+Math.imul(B,lt)|0,s=s+Math.imul(R,ct)|0,v=v+Math.imul(R,lt)|0,l=l+Math.imul(u,dt)|0,s=s+Math.imul(u,pt)|0,s=s+Math.imul(E,dt)|0,v=v+Math.imul(E,pt)|0;var Se=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Se>>>26)|0,Se&=67108863,l=Math.imul(D,ut),s=Math.imul(D,ht),s=s+Math.imul(q,ut)|0,v=Math.imul(q,ht),l=l+Math.imul(P,ct)|0,s=s+Math.imul(P,lt)|0,s=s+Math.imul(O,ct)|0,v=v+Math.imul(O,lt)|0,l=l+Math.imul(B,dt)|0,s=s+Math.imul(B,pt)|0,s=s+Math.imul(R,dt)|0,v=v+Math.imul(R,pt)|0,l=l+Math.imul(u,vt)|0,s=s+Math.imul(u,mt)|0,s=s+Math.imul(E,vt)|0,v=v+Math.imul(E,mt)|0;var Ne=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,l=Math.imul(X,ut),s=Math.imul(X,ht),s=s+Math.imul(Z,ut)|0,v=Math.imul(Z,ht),l=l+Math.imul(D,ct)|0,s=s+Math.imul(D,lt)|0,s=s+Math.imul(q,ct)|0,v=v+Math.imul(q,lt)|0,l=l+Math.imul(P,dt)|0,s=s+Math.imul(P,pt)|0,s=s+Math.imul(O,dt)|0,v=v+Math.imul(O,pt)|0,l=l+Math.imul(B,vt)|0,s=s+Math.imul(B,mt)|0,s=s+Math.imul(R,vt)|0,v=v+Math.imul(R,mt)|0,l=l+Math.imul(u,gt)|0,s=s+Math.imul(u,At)|0,s=s+Math.imul(E,gt)|0,v=v+Math.imul(E,At)|0;var Ie=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,l=Math.imul($,ut),s=Math.imul($,ht),s=s+Math.imul(tt,ut)|0,v=Math.imul(tt,ht),l=l+Math.imul(X,ct)|0,s=s+Math.imul(X,lt)|0,s=s+Math.imul(Z,ct)|0,v=v+Math.imul(Z,lt)|0,l=l+Math.imul(D,dt)|0,s=s+Math.imul(D,pt)|0,s=s+Math.imul(q,dt)|0,v=v+Math.imul(q,pt)|0,l=l+Math.imul(P,vt)|0,s=s+Math.imul(P,mt)|0,s=s+Math.imul(O,vt)|0,v=v+Math.imul(O,mt)|0,l=l+Math.imul(B,gt)|0,s=s+Math.imul(B,At)|0,s=s+Math.imul(R,gt)|0,v=v+Math.imul(R,At)|0,l=l+Math.imul(u,bt)|0,s=s+Math.imul(u,yt)|0,s=s+Math.imul(E,bt)|0,v=v+Math.imul(E,yt)|0;var Wr=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Wr>>>26)|0,Wr&=67108863,l=Math.imul(et,ut),s=Math.imul(et,ht),s=s+Math.imul(rt,ut)|0,v=Math.imul(rt,ht),l=l+Math.imul($,ct)|0,s=s+Math.imul($,lt)|0,s=s+Math.imul(tt,ct)|0,v=v+Math.imul(tt,lt)|0,l=l+Math.imul(X,dt)|0,s=s+Math.imul(X,pt)|0,s=s+Math.imul(Z,dt)|0,v=v+Math.imul(Z,pt)|0,l=l+Math.imul(D,vt)|0,s=s+Math.imul(D,mt)|0,s=s+Math.imul(q,vt)|0,v=v+Math.imul(q,mt)|0,l=l+Math.imul(P,gt)|0,s=s+Math.imul(P,At)|0,s=s+Math.imul(O,gt)|0,v=v+Math.imul(O,At)|0,l=l+Math.imul(B,bt)|0,s=s+Math.imul(B,yt)|0,s=s+Math.imul(R,bt)|0,v=v+Math.imul(R,yt)|0,l=l+Math.imul(u,wt)|0,s=s+Math.imul(u,xt)|0,s=s+Math.imul(E,wt)|0,v=v+Math.imul(E,xt)|0;var Xr=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Xr>>>26)|0,Xr&=67108863,l=Math.imul(it,ut),s=Math.imul(it,ht),s=s+Math.imul(nt,ut)|0,v=Math.imul(nt,ht),l=l+Math.imul(et,ct)|0,s=s+Math.imul(et,lt)|0,s=s+Math.imul(rt,ct)|0,v=v+Math.imul(rt,lt)|0,l=l+Math.imul($,dt)|0,s=s+Math.imul($,pt)|0,s=s+Math.imul(tt,dt)|0,v=v+Math.imul(tt,pt)|0,l=l+Math.imul(X,vt)|0,s=s+Math.imul(X,mt)|0,s=s+Math.imul(Z,vt)|0,v=v+Math.imul(Z,mt)|0,l=l+Math.imul(D,gt)|0,s=s+Math.imul(D,At)|0,s=s+Math.imul(q,gt)|0,v=v+Math.imul(q,At)|0,l=l+Math.imul(P,bt)|0,s=s+Math.imul(P,yt)|0,s=s+Math.imul(O,bt)|0,v=v+Math.imul(O,yt)|0,l=l+Math.imul(B,wt)|0,s=s+Math.imul(B,xt)|0,s=s+Math.imul(R,wt)|0,v=v+Math.imul(R,xt)|0,l=l+Math.imul(u,Mt)|0,s=s+Math.imul(u,Et)|0,s=s+Math.imul(E,Mt)|0,v=v+Math.imul(E,Et)|0;var Zr=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(Zr>>>26)|0,Zr&=67108863,l=Math.imul(ft,ut),s=Math.imul(ft,ht),s=s+Math.imul(ot,ut)|0,v=Math.imul(ot,ht),l=l+Math.imul(it,ct)|0,s=s+Math.imul(it,lt)|0,s=s+Math.imul(nt,ct)|0,v=v+Math.imul(nt,lt)|0,l=l+Math.imul(et,dt)|0,s=s+Math.imul(et,pt)|0,s=s+Math.imul(rt,dt)|0,v=v+Math.imul(rt,pt)|0,l=l+Math.imul($,vt)|0,s=s+Math.imul($,mt)|0,s=s+Math.imul(tt,vt)|0,v=v+Math.imul(tt,mt)|0,l=l+Math.imul(X,gt)|0,s=s+Math.imul(X,At)|0,s=s+Math.imul(Z,gt)|0,v=v+Math.imul(Z,At)|0,l=l+Math.imul(D,bt)|0,s=s+Math.imul(D,yt)|0,s=s+Math.imul(q,bt)|0,v=v+Math.imul(q,yt)|0,l=l+Math.imul(P,wt)|0,s=s+Math.imul(P,xt)|0,s=s+Math.imul(O,wt)|0,v=v+Math.imul(O,xt)|0,l=l+Math.imul(B,Mt)|0,s=s+Math.imul(B,Et)|0,s=s+Math.imul(R,Mt)|0,v=v+Math.imul(R,Et)|0,l=l+Math.imul(u,St)|0,s=s+Math.imul(u,Nt)|0,s=s+Math.imul(E,St)|0,v=v+Math.imul(E,Nt)|0;var $r=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+($r>>>26)|0,$r&=67108863,l=Math.imul(st,ut),s=Math.imul(st,ht),s=s+Math.imul(at,ut)|0,v=Math.imul(at,ht),l=l+Math.imul(ft,ct)|0,s=s+Math.imul(ft,lt)|0,s=s+Math.imul(ot,ct)|0,v=v+Math.imul(ot,lt)|0,l=l+Math.imul(it,dt)|0,s=s+Math.imul(it,pt)|0,s=s+Math.imul(nt,dt)|0,v=v+Math.imul(nt,pt)|0,l=l+Math.imul(et,vt)|0,s=s+Math.imul(et,mt)|0,s=s+Math.imul(rt,vt)|0,v=v+Math.imul(rt,mt)|0,l=l+Math.imul($,gt)|0,s=s+Math.imul($,At)|0,s=s+Math.imul(tt,gt)|0,v=v+Math.imul(tt,At)|0,l=l+Math.imul(X,bt)|0,s=s+Math.imul(X,yt)|0,s=s+Math.imul(Z,bt)|0,v=v+Math.imul(Z,yt)|0,l=l+Math.imul(D,wt)|0,s=s+Math.imul(D,xt)|0,s=s+Math.imul(q,wt)|0,v=v+Math.imul(q,xt)|0,l=l+Math.imul(P,Mt)|0,s=s+Math.imul(P,Et)|0,s=s+Math.imul(O,Mt)|0,v=v+Math.imul(O,Et)|0,l=l+Math.imul(B,St)|0,s=s+Math.imul(B,Nt)|0,s=s+Math.imul(R,St)|0,v=v+Math.imul(R,Nt)|0,l=l+Math.imul(u,It)|0,s=s+Math.imul(u,_t)|0,s=s+Math.imul(E,It)|0,v=v+Math.imul(E,_t)|0;var ti=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ti>>>26)|0,ti&=67108863,l=Math.imul(st,ct),s=Math.imul(st,lt),s=s+Math.imul(at,ct)|0,v=Math.imul(at,lt),l=l+Math.imul(ft,dt)|0,s=s+Math.imul(ft,pt)|0,s=s+Math.imul(ot,dt)|0,v=v+Math.imul(ot,pt)|0,l=l+Math.imul(it,vt)|0,s=s+Math.imul(it,mt)|0,s=s+Math.imul(nt,vt)|0,v=v+Math.imul(nt,mt)|0,l=l+Math.imul(et,gt)|0,s=s+Math.imul(et,At)|0,s=s+Math.imul(rt,gt)|0,v=v+Math.imul(rt,At)|0,l=l+Math.imul($,bt)|0,s=s+Math.imul($,yt)|0,s=s+Math.imul(tt,bt)|0,v=v+Math.imul(tt,yt)|0,l=l+Math.imul(X,wt)|0,s=s+Math.imul(X,xt)|0,s=s+Math.imul(Z,wt)|0,v=v+Math.imul(Z,xt)|0,l=l+Math.imul(D,Mt)|0,s=s+Math.imul(D,Et)|0,s=s+Math.imul(q,Mt)|0,v=v+Math.imul(q,Et)|0,l=l+Math.imul(P,St)|0,s=s+Math.imul(P,Nt)|0,s=s+Math.imul(O,St)|0,v=v+Math.imul(O,Nt)|0,l=l+Math.imul(B,It)|0,s=s+Math.imul(B,_t)|0,s=s+Math.imul(R,It)|0,v=v+Math.imul(R,_t)|0;var ei=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ei>>>26)|0,ei&=67108863,l=Math.imul(st,dt),s=Math.imul(st,pt),s=s+Math.imul(at,dt)|0,v=Math.imul(at,pt),l=l+Math.imul(ft,vt)|0,s=s+Math.imul(ft,mt)|0,s=s+Math.imul(ot,vt)|0,v=v+Math.imul(ot,mt)|0,l=l+Math.imul(it,gt)|0,s=s+Math.imul(it,At)|0,s=s+Math.imul(nt,gt)|0,v=v+Math.imul(nt,At)|0,l=l+Math.imul(et,bt)|0,s=s+Math.imul(et,yt)|0,s=s+Math.imul(rt,bt)|0,v=v+Math.imul(rt,yt)|0,l=l+Math.imul($,wt)|0,s=s+Math.imul($,xt)|0,s=s+Math.imul(tt,wt)|0,v=v+Math.imul(tt,xt)|0,l=l+Math.imul(X,Mt)|0,s=s+Math.imul(X,Et)|0,s=s+Math.imul(Z,Mt)|0,v=v+Math.imul(Z,Et)|0,l=l+Math.imul(D,St)|0,s=s+Math.imul(D,Nt)|0,s=s+Math.imul(q,St)|0,v=v+Math.imul(q,Nt)|0,l=l+Math.imul(P,It)|0,s=s+Math.imul(P,_t)|0,s=s+Math.imul(O,It)|0,v=v+Math.imul(O,_t)|0;var ri=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ri>>>26)|0,ri&=67108863,l=Math.imul(st,vt),s=Math.imul(st,mt),s=s+Math.imul(at,vt)|0,v=Math.imul(at,mt),l=l+Math.imul(ft,gt)|0,s=s+Math.imul(ft,At)|0,s=s+Math.imul(ot,gt)|0,v=v+Math.imul(ot,At)|0,l=l+Math.imul(it,bt)|0,s=s+Math.imul(it,yt)|0,s=s+Math.imul(nt,bt)|0,v=v+Math.imul(nt,yt)|0,l=l+Math.imul(et,wt)|0,s=s+Math.imul(et,xt)|0,s=s+Math.imul(rt,wt)|0,v=v+Math.imul(rt,xt)|0,l=l+Math.imul($,Mt)|0,s=s+Math.imul($,Et)|0,s=s+Math.imul(tt,Mt)|0,v=v+Math.imul(tt,Et)|0,l=l+Math.imul(X,St)|0,s=s+Math.imul(X,Nt)|0,s=s+Math.imul(Z,St)|0,v=v+Math.imul(Z,Nt)|0,l=l+Math.imul(D,It)|0,s=s+Math.imul(D,_t)|0,s=s+Math.imul(q,It)|0,v=v+Math.imul(q,_t)|0;var ii=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ii>>>26)|0,ii&=67108863,l=Math.imul(st,gt),s=Math.imul(st,At),s=s+Math.imul(at,gt)|0,v=Math.imul(at,At),l=l+Math.imul(ft,bt)|0,s=s+Math.imul(ft,yt)|0,s=s+Math.imul(ot,bt)|0,v=v+Math.imul(ot,yt)|0,l=l+Math.imul(it,wt)|0,s=s+Math.imul(it,xt)|0,s=s+Math.imul(nt,wt)|0,v=v+Math.imul(nt,xt)|0,l=l+Math.imul(et,Mt)|0,s=s+Math.imul(et,Et)|0,s=s+Math.imul(rt,Mt)|0,v=v+Math.imul(rt,Et)|0,l=l+Math.imul($,St)|0,s=s+Math.imul($,Nt)|0,s=s+Math.imul(tt,St)|0,v=v+Math.imul(tt,Nt)|0,l=l+Math.imul(X,It)|0,s=s+Math.imul(X,_t)|0,s=s+Math.imul(Z,It)|0,v=v+Math.imul(Z,_t)|0;var ni=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ni>>>26)|0,ni&=67108863,l=Math.imul(st,bt),s=Math.imul(st,yt),s=s+Math.imul(at,bt)|0,v=Math.imul(at,yt),l=l+Math.imul(ft,wt)|0,s=s+Math.imul(ft,xt)|0,s=s+Math.imul(ot,wt)|0,v=v+Math.imul(ot,xt)|0,l=l+Math.imul(it,Mt)|0,s=s+Math.imul(it,Et)|0,s=s+Math.imul(nt,Mt)|0,v=v+Math.imul(nt,Et)|0,l=l+Math.imul(et,St)|0,s=s+Math.imul(et,Nt)|0,s=s+Math.imul(rt,St)|0,v=v+Math.imul(rt,Nt)|0,l=l+Math.imul($,It)|0,s=s+Math.imul($,_t)|0,s=s+Math.imul(tt,It)|0,v=v+Math.imul(tt,_t)|0;var fi=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(fi>>>26)|0,fi&=67108863,l=Math.imul(st,wt),s=Math.imul(st,xt),s=s+Math.imul(at,wt)|0,v=Math.imul(at,xt),l=l+Math.imul(ft,Mt)|0,s=s+Math.imul(ft,Et)|0,s=s+Math.imul(ot,Mt)|0,v=v+Math.imul(ot,Et)|0,l=l+Math.imul(it,St)|0,s=s+Math.imul(it,Nt)|0,s=s+Math.imul(nt,St)|0,v=v+Math.imul(nt,Nt)|0,l=l+Math.imul(et,It)|0,s=s+Math.imul(et,_t)|0,s=s+Math.imul(rt,It)|0,v=v+Math.imul(rt,_t)|0;var oi=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(oi>>>26)|0,oi&=67108863,l=Math.imul(st,Mt),s=Math.imul(st,Et),s=s+Math.imul(at,Mt)|0,v=Math.imul(at,Et),l=l+Math.imul(ft,St)|0,s=s+Math.imul(ft,Nt)|0,s=s+Math.imul(ot,St)|0,v=v+Math.imul(ot,Nt)|0,l=l+Math.imul(it,It)|0,s=s+Math.imul(it,_t)|0,s=s+Math.imul(nt,It)|0,v=v+Math.imul(nt,_t)|0;var si=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(si>>>26)|0,si&=67108863,l=Math.imul(st,St),s=Math.imul(st,Nt),s=s+Math.imul(at,St)|0,v=Math.imul(at,Nt),l=l+Math.imul(ft,It)|0,s=s+Math.imul(ft,_t)|0,s=s+Math.imul(ot,It)|0,v=v+Math.imul(ot,_t)|0;var ai=(M+l|0)+((s&8191)<<13)|0;M=(v+(s>>>13)|0)+(ai>>>26)|0,ai&=67108863,l=Math.imul(st,It),s=Math.imul(st,_t),s=s+Math.imul(at,It)|0,v=Math.imul(at,_t);var ui=(M+l|0)+((s&8191)<<13)|0;return M=(v+(s>>>13)|0)+(ui>>>26)|0,ui&=67108863,x[0]=Me,x[1]=Ee,x[2]=Se,x[3]=Ne,x[4]=Ie,x[5]=Wr,x[6]=Xr,x[7]=Zr,x[8]=$r,x[9]=ti,x[10]=ei,x[11]=ri,x[12]=ii,x[13]=ni,x[14]=fi,x[15]=oi,x[16]=si,x[17]=ai,x[18]=ui,M!==0&&(x[19]=M,c.length++),c};Math.imul||(J=U);function Bt(A,f,a){a.negative=f.negative^A.negative,a.length=A.length+f.length;for(var c=0,d=0,g=0;g<a.length-1;g++){var x=d;d=0;for(var M=c&67108863,l=Math.min(g,f.length-1),s=Math.max(0,g-A.length+1);s<=l;s++){var v=g-s,k=A.words[v]|0,u=f.words[s]|0,E=k*u,_=E&67108863;x=x+(E/67108864|0)|0,_=_+M|0,M=_&67108863,x=x+(_>>>26)|0,d+=x>>>26,x&=67108863}a.words[g]=M,c=x,x=d}return c!==0?a.words[g]=c:a.length--,a._strip()}function G(A,f,a){return Bt(A,f,a)}o.prototype.mulTo=function(f,a){var c,d=this.length+f.length;return this.length===10&&f.length===10?c=J(this,f,a):d<63?c=U(this,f,a):d<1024?c=Bt(this,f,a):c=G(this,f,a),c},o.prototype.mul=function(f){var a=new o(null);return a.words=new Array(this.length+f.length),this.mulTo(f,a)},o.prototype.mulf=function(f){var a=new o(null);return a.words=new Array(this.length+f.length),G(this,f,a)},o.prototype.imul=function(f){return this.clone().mulTo(f,this)},o.prototype.imuln=function(f){var a=f<0;a&&(f=-f),i(typeof f=="number"),i(f<67108864);for(var c=0,d=0;d<this.length;d++){var g=(this.words[d]|0)*f,x=(g&67108863)+(c&67108863);c>>=26,c+=g/67108864|0,c+=x>>>26,this.words[d]=x&67108863}return c!==0&&(this.words[d]=c,this.length++),a?this.ineg():this},o.prototype.muln=function(f){return this.clone().imuln(f)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(f){var a=F(f);if(a.length===0)return new o(1);for(var c=this,d=0;d<a.length&&a[d]===0;d++,c=c.sqr());if(++d<a.length)for(var g=c.sqr();d<a.length;d++,g=g.sqr())a[d]!==0&&(c=c.mul(g));return c},o.prototype.iushln=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26,d=67108863>>>26-a<<26-a,g;if(a!==0){var x=0;for(g=0;g<this.length;g++){var M=this.words[g]&d,l=(this.words[g]|0)-M<<a;this.words[g]=l|x,x=M>>>26-a}x&&(this.words[g]=x,this.length++)}if(c!==0){for(g=this.length-1;g>=0;g--)this.words[g+c]=this.words[g];for(g=0;g<c;g++)this.words[g]=0;this.length+=c}return this._strip()},o.prototype.ishln=function(f){return i(this.negative===0),this.iushln(f)},o.prototype.iushrn=function(f,a,c){i(typeof f=="number"&&f>=0);var d;a?d=(a-a%26)/26:d=0;var g=f%26,x=Math.min((f-g)/26,this.length),M=67108863^67108863>>>g<<g,l=c;if(d-=x,d=Math.max(0,d),l){for(var s=0;s<x;s++)l.words[s]=this.words[s];l.length=x}if(x!==0)if(this.length>x)for(this.length-=x,s=0;s<this.length;s++)this.words[s]=this.words[s+x];else this.words[0]=0,this.length=1;var v=0;for(s=this.length-1;s>=0&&(v!==0||s>=d);s--){var k=this.words[s]|0;this.words[s]=v<<26-g|k>>>g,v=k&M}return l&&v!==0&&(l.words[l.length++]=v),this.length===0&&(this.words[0]=0,this.length=1),this._strip()},o.prototype.ishrn=function(f,a,c){return i(this.negative===0),this.iushrn(f,a,c)},o.prototype.shln=function(f){return this.clone().ishln(f)},o.prototype.ushln=function(f){return this.clone().iushln(f)},o.prototype.shrn=function(f){return this.clone().ishrn(f)},o.prototype.ushrn=function(f){return this.clone().iushrn(f)},o.prototype.testn=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26,d=1<<a;if(this.length<=c)return!1;var g=this.words[c];return!!(g&d)},o.prototype.imaskn=function(f){i(typeof f=="number"&&f>=0);var a=f%26,c=(f-a)/26;if(i(this.negative===0,"imaskn works only with positive numbers"),this.length<=c)return this;if(a!==0&&c++,this.length=Math.min(c,this.length),a!==0){var d=67108863^67108863>>>a<<a;this.words[this.length-1]&=d}return this._strip()},o.prototype.maskn=function(f){return this.clone().imaskn(f)},o.prototype.iaddn=function(f){return i(typeof f=="number"),i(f<67108864),f<0?this.isubn(-f):this.negative!==0?this.length===1&&(this.words[0]|0)<=f?(this.words[0]=f-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(f),this.negative=1,this):this._iaddn(f)},o.prototype._iaddn=function(f){this.words[0]+=f;for(var a=0;a<this.length&&this.words[a]>=67108864;a++)this.words[a]-=67108864,a===this.length-1?this.words[a+1]=1:this.words[a+1]++;return this.length=Math.max(this.length,a+1),this},o.prototype.isubn=function(f){if(i(typeof f=="number"),i(f<67108864),f<0)return this.iaddn(-f);if(this.negative!==0)return this.negative=0,this.iaddn(f),this.negative=1,this;if(this.words[0]-=f,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var a=0;a<this.length&&this.words[a]<0;a++)this.words[a]+=67108864,this.words[a+1]-=1;return this._strip()},o.prototype.addn=function(f){return this.clone().iaddn(f)},o.prototype.subn=function(f){return this.clone().isubn(f)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(f,a,c){var d=f.length+c,g;this._expand(d);var x,M=0;for(g=0;g<f.length;g++){x=(this.words[g+c]|0)+M;var l=(f.words[g]|0)*a;x-=l&67108863,M=(x>>26)-(l/67108864|0),this.words[g+c]=x&67108863}for(;g<this.length-c;g++)x=(this.words[g+c]|0)+M,M=x>>26,this.words[g+c]=x&67108863;if(M===0)return this._strip();for(i(M===-1),M=0,g=0;g<this.length;g++)x=-(this.words[g]|0)+M,M=x>>26,this.words[g]=x&67108863;return this.negative=1,this._strip()},o.prototype._wordDiv=function(f,a){var c=this.length-f.length,d=this.clone(),g=f,x=g.words[g.length-1]|0,M=this._countBits(x);c=26-M,c!==0&&(g=g.ushln(c),d.iushln(c),x=g.words[g.length-1]|0);var l=d.length-g.length,s;if(a!=="mod"){s=new o(null),s.length=l+1,s.words=new Array(s.length);for(var v=0;v<s.length;v++)s.words[v]=0}var k=d.clone()._ishlnsubmul(g,1,l);k.negative===0&&(d=k,s&&(s.words[l]=1));for(var u=l-1;u>=0;u--){var E=(d.words[g.length+u]|0)*67108864+(d.words[g.length+u-1]|0);for(E=Math.min(E/x|0,67108863),d._ishlnsubmul(g,E,u);d.negative!==0;)E--,d.negative=0,d._ishlnsubmul(g,1,u),d.isZero()||(d.negative^=1);s&&(s.words[u]=E)}return s&&s._strip(),d._strip(),a!=="div"&&c!==0&&d.iushrn(c),{div:s||null,mod:d}},o.prototype.divmod=function(f,a,c){if(i(!f.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var d,g,x;return this.negative!==0&&f.negative===0?(x=this.neg().divmod(f,a),a!=="mod"&&(d=x.div.neg()),a!=="div"&&(g=x.mod.neg(),c&&g.negative!==0&&g.iadd(f)),{div:d,mod:g}):this.negative===0&&f.negative!==0?(x=this.divmod(f.neg(),a),a!=="mod"&&(d=x.div.neg()),{div:d,mod:x.mod}):this.negative&f.negative?(x=this.neg().divmod(f.neg(),a),a!=="div"&&(g=x.mod.neg(),c&&g.negative!==0&&g.isub(f)),{div:x.div,mod:g}):f.length>this.length||this.cmp(f)<0?{div:new o(0),mod:this}:f.length===1?a==="div"?{div:this.divn(f.words[0]),mod:null}:a==="mod"?{div:null,mod:new o(this.modrn(f.words[0]))}:{div:this.divn(f.words[0]),mod:new o(this.modrn(f.words[0]))}:this._wordDiv(f,a)},o.prototype.div=function(f){return this.divmod(f,"div",!1).div},o.prototype.mod=function(f){return this.divmod(f,"mod",!1).mod},o.prototype.umod=function(f){return this.divmod(f,"mod",!0).mod},o.prototype.divRound=function(f){var a=this.divmod(f);if(a.mod.isZero())return a.div;var c=a.div.negative!==0?a.mod.isub(f):a.mod,d=f.ushrn(1),g=f.andln(1),x=c.cmp(d);return x<0||g===1&&x===0?a.div:a.div.negative!==0?a.div.isubn(1):a.div.iaddn(1)},o.prototype.modrn=function(f){var a=f<0;a&&(f=-f),i(f<=67108863);for(var c=(1<<26)%f,d=0,g=this.length-1;g>=0;g--)d=(c*d+(this.words[g]|0))%f;return a?-d:d},o.prototype.modn=function(f){return this.modrn(f)},o.prototype.idivn=function(f){var a=f<0;a&&(f=-f),i(f<=67108863);for(var c=0,d=this.length-1;d>=0;d--){var g=(this.words[d]|0)+c*67108864;this.words[d]=g/f|0,c=g%f}return this._strip(),a?this.ineg():this},o.prototype.divn=function(f){return this.clone().idivn(f)},o.prototype.egcd=function(f){i(f.negative===0),i(!f.isZero());var a=this,c=f.clone();a.negative!==0?a=a.umod(f):a=a.clone();for(var d=new o(1),g=new o(0),x=new o(0),M=new o(1),l=0;a.isEven()&&c.isEven();)a.iushrn(1),c.iushrn(1),++l;for(var s=c.clone(),v=a.clone();!a.isZero();){for(var k=0,u=1;!(a.words[0]&u)&&k<26;++k,u<<=1);if(k>0)for(a.iushrn(k);k-- >0;)(d.isOdd()||g.isOdd())&&(d.iadd(s),g.isub(v)),d.iushrn(1),g.iushrn(1);for(var E=0,_=1;!(c.words[0]&_)&&E<26;++E,_<<=1);if(E>0)for(c.iushrn(E);E-- >0;)(x.isOdd()||M.isOdd())&&(x.iadd(s),M.isub(v)),x.iushrn(1),M.iushrn(1);a.cmp(c)>=0?(a.isub(c),d.isub(x),g.isub(M)):(c.isub(a),x.isub(d),M.isub(g))}return{a:x,b:M,gcd:c.iushln(l)}},o.prototype._invmp=function(f){i(f.negative===0),i(!f.isZero());var a=this,c=f.clone();a.negative!==0?a=a.umod(f):a=a.clone();for(var d=new o(1),g=new o(0),x=c.clone();a.cmpn(1)>0&&c.cmpn(1)>0;){for(var M=0,l=1;!(a.words[0]&l)&&M<26;++M,l<<=1);if(M>0)for(a.iushrn(M);M-- >0;)d.isOdd()&&d.iadd(x),d.iushrn(1);for(var s=0,v=1;!(c.words[0]&v)&&s<26;++s,v<<=1);if(s>0)for(c.iushrn(s);s-- >0;)g.isOdd()&&g.iadd(x),g.iushrn(1);a.cmp(c)>=0?(a.isub(c),d.isub(g)):(c.isub(a),g.isub(d))}var k;return a.cmpn(1)===0?k=d:k=g,k.cmpn(0)<0&&k.iadd(f),k},o.prototype.gcd=function(f){if(this.isZero())return f.abs();if(f.isZero())return this.abs();var a=this.clone(),c=f.clone();a.negative=0,c.negative=0;for(var d=0;a.isEven()&&c.isEven();d++)a.iushrn(1),c.iushrn(1);do{for(;a.isEven();)a.iushrn(1);for(;c.isEven();)c.iushrn(1);var g=a.cmp(c);if(g<0){var x=a;a=c,c=x}else if(g===0||c.cmpn(1)===0)break;a.isub(c)}while(!0);return c.iushln(d)},o.prototype.invm=function(f){return this.egcd(f).a.umod(f)},o.prototype.isEven=function(){return(this.words[0]&1)===0},o.prototype.isOdd=function(){return(this.words[0]&1)===1},o.prototype.andln=function(f){return this.words[0]&f},o.prototype.bincn=function(f){i(typeof f=="number");var a=f%26,c=(f-a)/26,d=1<<a;if(this.length<=c)return this._expand(c+1),this.words[c]|=d,this;for(var g=d,x=c;g!==0&&x<this.length;x++){var M=this.words[x]|0;M+=g,g=M>>>26,M&=67108863,this.words[x]=M}return g!==0&&(this.words[x]=g,this.length++),this},o.prototype.isZero=function(){return this.length===1&&this.words[0]===0},o.prototype.cmpn=function(f){var a=f<0;if(this.negative!==0&&!a)return-1;if(this.negative===0&&a)return 1;this._strip();var c;if(this.length>1)c=1;else{a&&(f=-f),i(f<=67108863,"Number is too big");var d=this.words[0]|0;c=d===f?0:d<f?-1:1}return this.negative!==0?-c|0:c},o.prototype.cmp=function(f){if(this.negative!==0&&f.negative===0)return-1;if(this.negative===0&&f.negative!==0)return 1;var a=this.ucmp(f);return this.negative!==0?-a|0:a},o.prototype.ucmp=function(f){if(this.length>f.length)return 1;if(this.length<f.length)return-1;for(var a=0,c=this.length-1;c>=0;c--){var d=this.words[c]|0,g=f.words[c]|0;if(d!==g){d<g?a=-1:d>g&&(a=1);break}}return a},o.prototype.gtn=function(f){return this.cmpn(f)===1},o.prototype.gt=function(f){return this.cmp(f)===1},o.prototype.gten=function(f){return this.cmpn(f)>=0},o.prototype.gte=function(f){return this.cmp(f)>=0},o.prototype.ltn=function(f){return this.cmpn(f)===-1},o.prototype.lt=function(f){return this.cmp(f)===-1},o.prototype.lten=function(f){return this.cmpn(f)<=0},o.prototype.lte=function(f){return this.cmp(f)<=0},o.prototype.eqn=function(f){return this.cmpn(f)===0},o.prototype.eq=function(f){return this.cmp(f)===0},o.red=function(f){return new Y(f)},o.prototype.toRed=function(f){return i(!this.red,"Already a number in reduction context"),i(this.negative===0,"red works only with positives"),f.convertTo(this)._forceRed(f)},o.prototype.fromRed=function(){return i(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(f){return this.red=f,this},o.prototype.forceRed=function(f){return i(!this.red,"Already a number in reduction context"),this._forceRed(f)},o.prototype.redAdd=function(f){return i(this.red,"redAdd works only with red numbers"),this.red.add(this,f)},o.prototype.redIAdd=function(f){return i(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,f)},o.prototype.redSub=function(f){return i(this.red,"redSub works only with red numbers"),this.red.sub(this,f)},o.prototype.redISub=function(f){return i(this.red,"redISub works only with red numbers"),this.red.isub(this,f)},o.prototype.redShl=function(f){return i(this.red,"redShl works only with red numbers"),this.red.shl(this,f)},o.prototype.redMul=function(f){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,f),this.red.mul(this,f)},o.prototype.redIMul=function(f){return i(this.red,"redMul works only with red numbers"),this.red._verify2(this,f),this.red.imul(this,f)},o.prototype.redSqr=function(){return i(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return i(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return i(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return i(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return i(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(f){return i(this.red&&!f.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,f)};var H={k256:null,p224:null,p192:null,p25519:null};function z(A,f){this.name=A,this.p=new o(f,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}z.prototype._tmp=function(){var f=new o(null);return f.words=new Array(Math.ceil(this.n/13)),f},z.prototype.ireduce=function(f){var a=f,c;do this.split(a,this.tmp),a=this.imulK(a),a=a.iadd(this.tmp),c=a.bitLength();while(c>this.n);var d=c<this.n?-1:a.ucmp(this.p);return d===0?(a.words[0]=0,a.length=1):d>0?a.isub(this.p):a.strip!==void 0?a.strip():a._strip(),a},z.prototype.split=function(f,a){f.iushrn(this.n,0,a)},z.prototype.imulK=function(f){return f.imul(this.k)};function Pt(){z.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}n(Pt,z),Pt.prototype.split=function(f,a){for(var c=4194303,d=Math.min(f.length,9),g=0;g<d;g++)a.words[g]=f.words[g];if(a.length=d,f.length<=9){f.words[0]=0,f.length=1;return}var x=f.words[9];for(a.words[a.length++]=x&c,g=10;g<f.length;g++){var M=f.words[g]|0;f.words[g-10]=(M&c)<<4|x>>>22,x=M}x>>>=22,f.words[g-10]=x,x===0&&f.length>10?f.length-=10:f.length-=9},Pt.prototype.imulK=function(f){f.words[f.length]=0,f.words[f.length+1]=0,f.length+=2;for(var a=0,c=0;c<f.length;c++){var d=f.words[c]|0;a+=d*977,f.words[c]=a&67108863,a=d*64+(a/67108864|0)}return f.words[f.length-1]===0&&(f.length--,f.words[f.length-1]===0&&f.length--),f};function W(){z.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}n(W,z);function Rt(){z.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}n(Rt,z);function Yt(){z.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}n(Yt,z),Yt.prototype.imulK=function(f){for(var a=0,c=0;c<f.length;c++){var d=(f.words[c]|0)*19+a,g=d&67108863;d>>>=26,f.words[c]=g,a=d}return a!==0&&(f.words[f.length++]=a),f},o._prime=function(f){if(H[f])return H[f];var a;if(f==="k256")a=new Pt;else if(f==="p224")a=new W;else if(f==="p192")a=new Rt;else if(f==="p25519")a=new Yt;else throw new Error("Unknown prime "+f);return H[f]=a,a};function Y(A){if(typeof A=="string"){var f=o._prime(A);this.m=f.p,this.prime=f}else i(A.gtn(1),"modulus must be greater than 1"),this.m=A,this.prime=null}Y.prototype._verify1=function(f){i(f.negative===0,"red works only with positives"),i(f.red,"red works only with red numbers")},Y.prototype._verify2=function(f,a){i((f.negative|a.negative)===0,"red works only with positives"),i(f.red&&f.red===a.red,"red works only with red numbers")},Y.prototype.imod=function(f){return this.prime?this.prime.ireduce(f)._forceRed(this):(w(f,f.umod(this.m)._forceRed(this)),f)},Y.prototype.neg=function(f){return f.isZero()?f.clone():this.m.sub(f)._forceRed(this)},Y.prototype.add=function(f,a){this._verify2(f,a);var c=f.add(a);return c.cmp(this.m)>=0&&c.isub(this.m),c._forceRed(this)},Y.prototype.iadd=function(f,a){this._verify2(f,a);var c=f.iadd(a);return c.cmp(this.m)>=0&&c.isub(this.m),c},Y.prototype.sub=function(f,a){this._verify2(f,a);var c=f.sub(a);return c.cmpn(0)<0&&c.iadd(this.m),c._forceRed(this)},Y.prototype.isub=function(f,a){this._verify2(f,a);var c=f.isub(a);return c.cmpn(0)<0&&c.iadd(this.m),c},Y.prototype.shl=function(f,a){return this._verify1(f),this.imod(f.ushln(a))},Y.prototype.imul=function(f,a){return this._verify2(f,a),this.imod(f.imul(a))},Y.prototype.mul=function(f,a){return this._verify2(f,a),this.imod(f.mul(a))},Y.prototype.isqr=function(f){return this.imul(f,f.clone())},Y.prototype.sqr=function(f){return this.mul(f,f)},Y.prototype.sqrt=function(f){if(f.isZero())return f.clone();var a=this.m.andln(3);if(i(a%2===1),a===3){var c=this.m.add(new o(1)).iushrn(2);return this.pow(f,c)}for(var d=this.m.subn(1),g=0;!d.isZero()&&d.andln(1)===0;)g++,d.iushrn(1);i(!d.isZero());var x=new o(1).toRed(this),M=x.redNeg(),l=this.m.subn(1).iushrn(1),s=this.m.bitLength();for(s=new o(2*s*s).toRed(this);this.pow(s,l).cmp(M)!==0;)s.redIAdd(M);for(var v=this.pow(s,d),k=this.pow(f,d.addn(1).iushrn(1)),u=this.pow(f,d),E=g;u.cmp(x)!==0;){for(var _=u,B=0;_.cmp(x)!==0;B++)_=_.redSqr();i(B<E);var R=this.pow(v,new o(1).iushln(E-B-1));k=k.redMul(R),v=R.redSqr(),u=u.redMul(v),E=B}return k},Y.prototype.invm=function(f){var a=f._invmp(this.m);return a.negative!==0?(a.negative=0,this.imod(a).redNeg()):this.imod(a)},Y.prototype.pow=function(f,a){if(a.isZero())return new o(1).toRed(this);if(a.cmpn(1)===0)return f.clone();var c=4,d=new Array(1<<c);d[0]=new o(1).toRed(this),d[1]=f;for(var g=2;g<d.length;g++)d[g]=this.mul(d[g-1],f);var x=d[0],M=0,l=0,s=a.bitLength()%26;for(s===0&&(s=26),g=a.length-1;g>=0;g--){for(var v=a.words[g],k=s-1;k>=0;k--){var u=v>>k&1;if(x!==d[0]&&(x=this.sqr(x)),u===0&&M===0){l=0;continue}M<<=1,M|=u,l++,!(l!==c&&(g!==0||k!==0))&&(x=this.mul(x,d[M]),l=0,M=0)}s=26}return x},Y.prototype.convertTo=function(f){var a=f.umod(this.m);return a===f?a.clone():a},Y.prototype.convertFrom=function(f){var a=f.clone();return a.red=null,a},o.mont=function(f){return new Vt(f)};function Vt(A){Y.call(this,A),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}n(Vt,Y),Vt.prototype.convertTo=function(f){return this.imod(f.ushln(this.shift))},Vt.prototype.convertFrom=function(f){var a=this.imod(f.mul(this.rinv));return a.red=null,a},Vt.prototype.imul=function(f,a){if(f.isZero()||a.isZero())return f.words[0]=0,f.length=1,f;var c=f.imul(a),d=c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),g=c.isub(d).iushrn(this.shift),x=g;return g.cmp(this.m)>=0?x=g.isub(this.m):g.cmpn(0)<0&&(x=g.iadd(this.m)),x._forceRed(this)},Vt.prototype.mul=function(f,a){if(f.isZero()||a.isZero())return new o(0)._forceRed(this);var c=f.mul(a),d=c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),g=c.isub(d).iushrn(this.shift),x=g;return g.cmp(this.m)>=0?x=g.isub(this.m):g.cmpn(0)<0&&(x=g.iadd(this.m)),x._forceRed(this)},Vt.prototype.invm=function(f){var a=this.imod(f._invmp(this.m).mul(this.r2));return a._forceRed(this)}})(e,On)})(Ln);var K=Ln.exports;const jn="bignumber/5.7.0";var Rr=K.BN;const Ae=new L(jn),wi={},Qn=9007199254740991;function C0(e){return e!=null&&(V.isBigNumber(e)||typeof e=="number"&&e%1===0||typeof e=="string"&&!!e.match(/^-?[0-9]+$/)||Qt(e)||typeof e=="bigint"||ir(e))}let Jn=!1;class V{constructor(t,r){t!==wi&&Ae.throwError("cannot call constructor directly; use BigNumber.from",L.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=r,this._isBigNumber=!0,Object.freeze(this)}fromTwos(t){return Lt(j(this).fromTwos(t))}toTwos(t){return Lt(j(this).toTwos(t))}abs(){return this._hex[0]==="-"?V.from(this._hex.substring(1)):this}add(t){return Lt(j(this).add(j(t)))}sub(t){return Lt(j(this).sub(j(t)))}div(t){return V.from(t).isZero()&&Wt("division-by-zero","div"),Lt(j(this).div(j(t)))}mul(t){return Lt(j(this).mul(j(t)))}mod(t){const r=j(t);return r.isNeg()&&Wt("division-by-zero","mod"),Lt(j(this).umod(r))}pow(t){const r=j(t);return r.isNeg()&&Wt("negative-power","pow"),Lt(j(this).pow(r))}and(t){const r=j(t);return(this.isNegative()||r.isNeg())&&Wt("unbound-bitwise-result","and"),Lt(j(this).and(r))}or(t){const r=j(t);return(this.isNegative()||r.isNeg())&&Wt("unbound-bitwise-result","or"),Lt(j(this).or(r))}xor(t){const r=j(t);return(this.isNegative()||r.isNeg())&&Wt("unbound-bitwise-result","xor"),Lt(j(this).xor(r))}mask(t){return(this.isNegative()||t<0)&&Wt("negative-width","mask"),Lt(j(this).maskn(t))}shl(t){return(this.isNegative()||t<0)&&Wt("negative-width","shl"),Lt(j(this).shln(t))}shr(t){return(this.isNegative()||t<0)&&Wt("negative-width","shr"),Lt(j(this).shrn(t))}eq(t){return j(this).eq(j(t))}lt(t){return j(this).lt(j(t))}lte(t){return j(this).lte(j(t))}gt(t){return j(this).gt(j(t))}gte(t){return j(this).gte(j(t))}isNegative(){return this._hex[0]==="-"}isZero(){return j(this).isZero()}toNumber(){try{return j(this).toNumber()}catch{Wt("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return Ae.throwError("this platform does not support BigInt",L.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?Jn||(Jn=!0,Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):arguments[0]===16?Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",L.errors.UNEXPECTED_ARGUMENT,{}):Ae.throwError("BigNumber.toString does not accept parameters",L.errors.UNEXPECTED_ARGUMENT,{})),j(this).toString(10)}toHexString(){return this._hex}toJSON(t){return{type:"BigNumber",hex:this.toHexString()}}static from(t){if(t instanceof V)return t;if(typeof t=="string")return t.match(/^-?0x[0-9a-f]+$/i)?new V(wi,vr(t)):t.match(/^-?[0-9]+$/)?new V(wi,vr(new Rr(t))):Ae.throwArgumentError("invalid BigNumber string","value",t);if(typeof t=="number")return t%1&&Wt("underflow","BigNumber.from",t),(t>=Qn||t<=-Qn)&&Wt("overflow","BigNumber.from",t),V.from(String(t));const r=t;if(typeof r=="bigint")return V.from(r.toString());if(ir(r))return V.from(Kt(r));if(r)if(r.toHexString){const i=r.toHexString();if(typeof i=="string")return V.from(i)}else{let i=r._hex;if(i==null&&r.type==="BigNumber"&&(i=r.hex),typeof i=="string"&&(Qt(i)||i[0]==="-"&&Qt(i.substring(1))))return V.from(i)}return Ae.throwArgumentError("invalid BigNumber value","value",t)}static isBigNumber(t){return!!(t&&t._isBigNumber)}}function vr(e){if(typeof e!="string")return vr(e.toString(16));if(e[0]==="-")return e=e.substring(1),e[0]==="-"&&Ae.throwArgumentError("invalid hex","value",e),e=vr(e),e==="0x00"?e:"-"+e;if(e.substring(0,2)!=="0x"&&(e="0x"+e),e==="0x")return"0x00";for(e.length%2&&(e="0x0"+e.substring(2));e.length>4&&e.substring(0,4)==="0x00";)e="0x"+e.substring(4);return e}function Lt(e){return V.from(vr(e))}function j(e){const t=V.from(e).toHexString();return t[0]==="-"?new Rr("-"+t.substring(3),16):new Rr(t.substring(2),16)}function Wt(e,t,r){const i={fault:e,operation:t};return r!=null&&(i.value=r),Ae.throwError(e,L.errors.NUMERIC_FAULT,i)}function R0(e){return new Rr(e,36).toString(16)}const Ht=new L(jn),mr={},Gn=V.from(0),Yn=V.from(-1);function Vn(e,t,r,i){const n={fault:t,operation:r};return i!==void 0&&(n.value=i),Ht.throwError(e,L.errors.NUMERIC_FAULT,n)}let gr="0";for(;gr.length<256;)gr+=gr;function xi(e){if(typeof e!="number")try{e=V.from(e).toNumber()}catch{}return typeof e=="number"&&e>=0&&e<=256&&!(e%1)?"1"+gr.substring(0,e):Ht.throwArgumentError("invalid decimal size","decimals",e)}function Mi(e,t){t==null&&(t=0);const r=xi(t);e=V.from(e);const i=e.lt(Gn);i&&(e=e.mul(Yn));let n=e.mod(r).toString();for(;n.length<r.length-1;)n="0"+n;n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(r).toString();return r.length===1?e=o:e=o+"."+n,i&&(e="-"+e),e}function be(e,t){t==null&&(t=0);const r=xi(t);(typeof e!="string"||!e.match(/^-?[0-9.]+$/))&&Ht.throwArgumentError("invalid decimal value","value",e);const i=e.substring(0,1)==="-";i&&(e=e.substring(1)),e==="."&&Ht.throwArgumentError("missing value","value",e);const n=e.split(".");n.length>2&&Ht.throwArgumentError("too many decimal points","value",e);let o=n[0],h=n[1];for(o||(o="0"),h||(h="0");h[h.length-1]==="0";)h=h.substring(0,h.length-1);for(h.length>r.length-1&&Vn("fractional component exceeds decimals","underflow","parseFixed"),h===""&&(h="0");h.length<r.length-1;)h+="0";const p=V.from(o),b=V.from(h);let m=p.mul(r).add(b);return i&&(m=m.mul(Yn)),m}class dr{constructor(t,r,i,n){t!==mr&&Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from",L.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=i,this.decimals=n,this.name=(r?"":"u")+"fixed"+String(i)+"x"+String(n),this._multiplier=xi(n),Object.freeze(this)}static from(t){if(t instanceof dr)return t;typeof t=="number"&&(t=`fixed128x${t}`);let r=!0,i=128,n=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")r=!1;else{const o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||Ht.throwArgumentError("invalid fixed format","format",t),r=o[1]!=="u",i=parseInt(o[2]),n=parseInt(o[3])}}else if(t){const o=(h,p,b)=>t[h]==null?b:(typeof t[h]!==p&&Ht.throwArgumentError("invalid fixed format ("+h+" not "+p+")","format."+h,t[h]),t[h]);r=o("signed","boolean",r),i=o("width","number",i),n=o("decimals","number",n)}return i%8&&Ht.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",i),n>80&&Ht.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new dr(mr,r,i,n)}}class Ut{constructor(t,r,i,n){t!==mr&&Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from",L.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=r,this._value=i,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.add(i),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.sub(i),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.mul(i).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const r=be(this._value,this.format.decimals),i=be(t._value,t.format.decimals);return Ut.fromValue(r.mul(this.format._multiplier).div(i),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=Ut.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return this.isNegative()&&i&&(r=r.subUnsafe(Wn.toFormat(r.format))),r}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let r=Ut.from(t[0],this.format);const i=!t[1].match(/^(0*)$/);return!this.isNegative()&&i&&(r=r.addUnsafe(Wn.toFormat(r.format))),r}round(t){t==null&&(t=0);const r=this.toString().split(".");if(r.length===1&&r.push("0"),(t<0||t>80||t%1)&&Ht.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const i=Ut.from("1"+gr.substring(0,t),this.format),n=O0.toFormat(this.format);return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&Ht.throwArgumentError("invalid byte width","width",t);const r=V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return oe(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return Ut.fromString(this._value,t)}static fromValue(t,r,i){return i==null&&r!=null&&!C0(r)&&(i=r,r=null),r==null&&(r=0),i==null&&(i="fixed"),Ut.fromString(Mi(t,r),dr.from(i))}static fromString(t,r){r==null&&(r="fixed");const i=dr.from(r),n=be(t,i.decimals);!i.signed&&n.lt(Gn)&&Vn("unsigned value cannot be negative","overflow","value",t);let o=null;i.signed?o=n.toTwos(i.width).toHexString():(o=n.toHexString(),o=oe(o,i.width/8));const h=Mi(n,i.decimals);return new Ut(mr,o,h,i)}static fromBytes(t,r){r==null&&(r="fixed");const i=dr.from(r);if(Ot(t).length>i.width/8)throw new Error("overflow");let n=V.from(t);i.signed&&(n=n.fromTwos(i.width));const o=n.toTwos((i.signed?0:1)+i.width).toHexString(),h=Mi(n,i.decimals);return new Ut(mr,o,h,i)}static from(t,r){if(typeof t=="string")return Ut.fromString(t,r);if(ir(t))return Ut.fromBytes(t,r);try{return Ut.fromValue(t,0,r)}catch(i){if(i.code!==L.errors.INVALID_ARGUMENT)throw i}return Ht.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}const Wn=Ut.from(1),O0=Ut.from("0.5"),P0="strings/5.7.0",Xn=new L(P0);var Or;(function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD"})(Or||(Or={}));var nr;(function(e){e.UNEXPECTED_CONTINUE="unexpected continuation byte",e.BAD_PREFIX="bad codepoint prefix",e.OVERRUN="string overrun",e.MISSING_CONTINUE="missing continuation byte",e.OUT_OF_RANGE="out of UTF-8 range",e.UTF16_SURROGATE="UTF-16 surrogate",e.OVERLONG="overlong representation"})(nr||(nr={}));function D0(e,t,r,i,n){return Xn.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`,"bytes",r)}function Zn(e,t,r,i,n){if(e===nr.BAD_PREFIX||e===nr.UNEXPECTED_CONTINUE){let o=0;for(let h=t+1;h<r.length&&r[h]>>6===2;h++)o++;return o}return e===nr.OVERRUN?r.length-t-1:0}function F0(e,t,r,i,n){return e===nr.OVERLONG?(i.push(n),0):(i.push(65533),Zn(e,t,r))}Object.freeze({error:D0,ignore:Zn,replace:F0});function Ei(e,t=Or.current){t!=Or.current&&(Xn.checkNormalize(),e=e.normalize(t));let r=[];for(let i=0;i<e.length;i++){const n=e.charCodeAt(i);if(n<128)r.push(n);else if(n<2048)r.push(n>>6|192),r.push(n&63|128);else if((n&64512)==55296){i++;const o=e.charCodeAt(i);if(i>=e.length||(o&64512)!==56320)throw new Error("invalid utf-8 string");const h=65536+((n&1023)<<10)+(o&1023);r.push(h>>18|240),r.push(h>>12&63|128),r.push(h>>6&63|128),r.push(h&63|128)}else r.push(n>>12|224),r.push(n>>6&63|128),r.push(n&63|128)}return Ot(r)}function T0(e){if(e.length%4!==0)throw new Error("bad data");let t=[];for(let r=0;r<e.length;r+=4)t.push(parseInt(e.substring(r,r+4),16));return t}function Si(e,t){t||(t=function(n){return[parseInt(n,16)]});let r=0,i={};return e.split(",").forEach(n=>{let o=n.split(":");r+=parseInt(o[0],16),i[r]=t(o[1])}),i}function $n(e){let t=0;return e.split(",").map(r=>{let i=r.split("-");i.length===1?i[1]="0":i[1]===""&&(i[1]="1");let n=t+parseInt(i[0],16);return t=parseInt(i[1],16),{l:n,h:t}})}$n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(e=>parseInt(e,16)),Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",T0),$n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");const tf="hash/5.7.0";function U0(e){e=atob(e);const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return Ot(t)}function ef(e,t){t==null&&(t=1);const r=[],i=r.forEach,n=function(o,h){i.call(o,function(p){h>0&&Array.isArray(p)?n(p,h-1):r.push(p)})};return n(e,t),r}function k0(e){const t={};for(let r=0;r<e.length;r++){const i=e[r];t[i[0]]=i[1]}return t}function q0(e){let t=0;function r(){return e[t++]<<8|e[t++]}let i=r(),n=1,o=[0,1];for(let H=1;H<i;H++)o.push(n+=r());let h=r(),p=t;t+=h;let b=0,m=0;function w(){return b==0&&(m=m<<8|e[t++],b=8),m>>--b&1}const y=31,S=Math.pow(2,y),I=S>>>1,N=I>>1,C=S-1;let F=0;for(let H=0;H<y;H++)F=F<<1|w();let U=[],J=0,Bt=S;for(;;){let H=Math.floor(((F-J+1)*n-1)/Bt),z=0,Pt=i;for(;Pt-z>1;){let Yt=z+Pt>>>1;H<o[Yt]?Pt=Yt:z=Yt}if(z==0)break;U.push(z);let W=J+Math.floor(Bt*o[z]/n),Rt=J+Math.floor(Bt*o[z+1]/n)-1;for(;!((W^Rt)&I);)F=F<<1&C|w(),W=W<<1&C,Rt=Rt<<1&C|1;for(;W&~Rt&N;)F=F&I|F<<1&C>>>1|w(),W=W<<1^I,Rt=(Rt^I)<<1|I|1;J=W,Bt=1+Rt-W}let G=i-4;return U.map(H=>{switch(H-G){case 3:return G+65792+(e[p++]<<16|e[p++]<<8|e[p++]);case 2:return G+256+(e[p++]<<8|e[p++]);case 1:return G+e[p++];default:return H-1}})}function K0(e){let t=0;return()=>e[t++]}function H0(e){return K0(q0(e))}function z0(e){return e&1?~e>>1:e>>1}function L0(e,t){let r=Array(e);for(let i=0;i<e;i++)r[i]=1+t();return r}function rf(e,t){let r=Array(e);for(let i=0,n=-1;i<e;i++)r[i]=n+=1+t();return r}function j0(e,t){let r=Array(e);for(let i=0,n=0;i<e;i++)r[i]=n+=z0(t());return r}function Pr(e,t){let r=rf(e(),e),i=e(),n=rf(i,e),o=L0(i,e);for(let h=0;h<i;h++)for(let p=0;p<o[h];p++)r.push(n[h]+p);return t?r.map(h=>t[h]):r}function Q0(e){let t=[];for(;;){let r=e();if(r==0)break;t.push(G0(r,e))}for(;;){let r=e()-1;if(r<0)break;t.push(Y0(r,e))}return k0(ef(t))}function J0(e){let t=[];for(;;){let r=e();if(r==0)break;t.push(r)}return t}function nf(e,t,r){let i=Array(e).fill(void 0).map(()=>[]);for(let n=0;n<t;n++)j0(e,r).forEach((o,h)=>i[h].push(o));return i}function G0(e,t){let r=1+t(),i=t(),n=J0(t),o=nf(n.length,1+e,t);return ef(o.map((h,p)=>{const b=h[0],m=h.slice(1);return Array(n[p]).fill(void 0).map((w,y)=>{let S=y*i;return[b+y*r,m.map(I=>I+S)]})}))}function Y0(e,t){let r=1+t();return nf(r,1+e,t).map(n=>[n[0],n.slice(1)])}function V0(e){let t=Pr(e).sort((i,n)=>i-n);return r();function r(){let i=[];for(;;){let m=Pr(e,t);if(m.length==0)break;i.push({set:new Set(m),node:r()})}i.sort((m,w)=>w.set.size-m.set.size);let n=e(),o=n%3;n=n/3|0;let h=!!(n&1);n>>=1;let p=n==1,b=n==2;return{branches:i,valid:o,fe0f:h,save:p,check:b}}}function W0(){return H0(U0("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))}const Dr=W0();new Set(Pr(Dr)),new Set(Pr(Dr)),Q0(Dr),V0(Dr),new L(tf);const X0=new Uint8Array(32);X0.fill(0);const Z0=`Ethereum Signed Message:
`;function ff(e){return typeof e=="string"&&(e=Ei(e)),yi(E0([Ei(Z0),Ei(String(e.length)),e]))}const $0="rlp/5.7.0";new L($0);const ts="address/5.7.0",Ar=new L(ts);function of(e){Qt(e,20)||Ar.throwArgumentError("invalid address","address",e),e=e.toLowerCase();const t=e.substring(2).split(""),r=new Uint8Array(40);for(let n=0;n<40;n++)r[n]=t[n].charCodeAt(0);const i=Ot(yi(r));for(let n=0;n<40;n+=2)i[n>>1]>>4>=8&&(t[n]=t[n].toUpperCase()),(i[n>>1]&15)>=8&&(t[n+1]=t[n+1].toUpperCase());return"0x"+t.join("")}const es=9007199254740991;function rs(e){return Math.log10?Math.log10(e):Math.log(e)/Math.LN10}const Ni={};for(let e=0;e<10;e++)Ni[String(e)]=String(e);for(let e=0;e<26;e++)Ni[String.fromCharCode(65+e)]=String(10+e);const sf=Math.floor(rs(es));function is(e){e=e.toUpperCase(),e=e.substring(4)+e.substring(0,2)+"00";let t=e.split("").map(i=>Ni[i]).join("");for(;t.length>=sf;){let i=t.substring(0,sf);t=parseInt(i,10)%97+t.substring(i.length)}let r=String(98-parseInt(t,10)%97);for(;r.length<2;)r="0"+r;return r}function ns(e){let t=null;if(typeof e!="string"&&Ar.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))e.substring(0,2)!=="0x"&&(e="0x"+e),t=of(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&Ar.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==is(e)&&Ar.throwArgumentError("bad icap checksum","address",e),t=R0(e.substring(4));t.length<40;)t="0"+t;t=of("0x"+t)}else Ar.throwArgumentError("invalid address","address",e);return t}const fs="properties/5.7.0";new L(fs);function br(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1})}new L(tf);const os=new Uint8Array(32);os.fill(0),V.from(-1);const ss=V.from(0),as=V.from(1);V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),oe(as.toHexString(),32),oe(ss.toHexString(),32);var se={},Q={},yr=af;function af(e,t){if(!e)throw new Error(t||"Assertion failed")}af.equal=function(t,r,i){if(t!=r)throw new Error(i||"Assertion failed: "+t+" != "+r)};var Ii={exports:{}};typeof Object.create=="function"?Ii.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:Ii.exports=function(t,r){if(r){t.super_=r;var i=function(){};i.prototype=r.prototype,t.prototype=new i,t.prototype.constructor=t}};var us=yr,hs=Ii.exports;Q.inherits=hs;function cs(e,t){return(e.charCodeAt(t)&64512)!==55296||t<0||t+1>=e.length?!1:(e.charCodeAt(t+1)&64512)===56320}function ls(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if(typeof e=="string")if(t){if(t==="hex")for(e=e.replace(/[^a-z0-9]+/ig,""),e.length%2!==0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var i=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?r[i++]=o:o<2048?(r[i++]=o>>6|192,r[i++]=o&63|128):cs(e,n)?(o=65536+((o&1023)<<10)+(e.charCodeAt(++n)&1023),r[i++]=o>>18|240,r[i++]=o>>12&63|128,r[i++]=o>>6&63|128,r[i++]=o&63|128):(r[i++]=o>>12|224,r[i++]=o>>6&63|128,r[i++]=o&63|128)}else for(n=0;n<e.length;n++)r[n]=e[n]|0;return r}Q.toArray=ls;function ds(e){for(var t="",r=0;r<e.length;r++)t+=hf(e[r].toString(16));return t}Q.toHex=ds;function uf(e){var t=e>>>24|e>>>8&65280|e<<8&16711680|(e&255)<<24;return t>>>0}Q.htonl=uf;function ps(e,t){for(var r="",i=0;i<e.length;i++){var n=e[i];t==="little"&&(n=uf(n)),r+=cf(n.toString(16))}return r}Q.toHex32=ps;function hf(e){return e.length===1?"0"+e:e}Q.zero2=hf;function cf(e){return e.length===7?"0"+e:e.length===6?"00"+e:e.length===5?"000"+e:e.length===4?"0000"+e:e.length===3?"00000"+e:e.length===2?"000000"+e:e.length===1?"0000000"+e:e}Q.zero8=cf;function vs(e,t,r,i){var n=r-t;us(n%4===0);for(var o=new Array(n/4),h=0,p=t;h<o.length;h++,p+=4){var b;i==="big"?b=e[p]<<24|e[p+1]<<16|e[p+2]<<8|e[p+3]:b=e[p+3]<<24|e[p+2]<<16|e[p+1]<<8|e[p],o[h]=b>>>0}return o}Q.join32=vs;function ms(e,t){for(var r=new Array(e.length*4),i=0,n=0;i<e.length;i++,n+=4){var o=e[i];t==="big"?(r[n]=o>>>24,r[n+1]=o>>>16&255,r[n+2]=o>>>8&255,r[n+3]=o&255):(r[n+3]=o>>>24,r[n+2]=o>>>16&255,r[n+1]=o>>>8&255,r[n]=o&255)}return r}Q.split32=ms;function gs(e,t){return e>>>t|e<<32-t}Q.rotr32=gs;function As(e,t){return e<<t|e>>>32-t}Q.rotl32=As;function bs(e,t){return e+t>>>0}Q.sum32=bs;function ys(e,t,r){return e+t+r>>>0}Q.sum32_3=ys;function ws(e,t,r,i){return e+t+r+i>>>0}Q.sum32_4=ws;function xs(e,t,r,i,n){return e+t+r+i+n>>>0}Q.sum32_5=xs;function Ms(e,t,r,i){var n=e[t],o=e[t+1],h=i+o>>>0,p=(h<i?1:0)+r+n;e[t]=p>>>0,e[t+1]=h}Q.sum64=Ms;function Es(e,t,r,i){var n=t+i>>>0,o=(n<t?1:0)+e+r;return o>>>0}Q.sum64_hi=Es;function Ss(e,t,r,i){var n=t+i;return n>>>0}Q.sum64_lo=Ss;function Ns(e,t,r,i,n,o,h,p){var b=0,m=t;m=m+i>>>0,b+=m<t?1:0,m=m+o>>>0,b+=m<o?1:0,m=m+p>>>0,b+=m<p?1:0;var w=e+r+n+h+b;return w>>>0}Q.sum64_4_hi=Ns;function Is(e,t,r,i,n,o,h,p){var b=t+i+o+p;return b>>>0}Q.sum64_4_lo=Is;function _s(e,t,r,i,n,o,h,p,b,m){var w=0,y=t;y=y+i>>>0,w+=y<t?1:0,y=y+o>>>0,w+=y<o?1:0,y=y+p>>>0,w+=y<p?1:0,y=y+m>>>0,w+=y<m?1:0;var S=e+r+n+h+b+w;return S>>>0}Q.sum64_5_hi=_s;function Bs(e,t,r,i,n,o,h,p,b,m){var w=t+i+o+p+m;return w>>>0}Q.sum64_5_lo=Bs;function Cs(e,t,r){var i=t<<32-r|e>>>r;return i>>>0}Q.rotr64_hi=Cs;function Rs(e,t,r){var i=e<<32-r|t>>>r;return i>>>0}Q.rotr64_lo=Rs;function Os(e,t,r){return e>>>r}Q.shr64_hi=Os;function Ps(e,t,r){var i=e<<32-r|t>>>r;return i>>>0}Q.shr64_lo=Ps;var fr={},lf=Q,Ds=yr;function Fr(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}fr.BlockHash=Fr,Fr.prototype.update=function(t,r){if(t=lf.toArray(t,r),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){t=this.pending;var i=t.length%this._delta8;this.pending=t.slice(t.length-i,t.length),this.pending.length===0&&(this.pending=null),t=lf.join32(t,0,t.length-i,this.endian);for(var n=0;n<t.length;n+=this._delta32)this._update(t,n,n+this._delta32)}return this},Fr.prototype.digest=function(t){return this.update(this._pad()),Ds(this.pending===null),this._digest(t)},Fr.prototype._pad=function(){var t=this.pendingTotal,r=this._delta8,i=r-(t+this.padLength)%r,n=new Array(i+this.padLength);n[0]=128;for(var o=1;o<i;o++)n[o]=0;if(t<<=3,this.endian==="big"){for(var h=8;h<this.padLength;h++)n[o++]=0;n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=t>>>24&255,n[o++]=t>>>16&255,n[o++]=t>>>8&255,n[o++]=t&255}else for(n[o++]=t&255,n[o++]=t>>>8&255,n[o++]=t>>>16&255,n[o++]=t>>>24&255,n[o++]=0,n[o++]=0,n[o++]=0,n[o++]=0,h=8;h<this.padLength;h++)n[o++]=0;return n};var or={},ae={},Fs=Q,ue=Fs.rotr32;function Ts(e,t,r,i){if(e===0)return df(t,r,i);if(e===1||e===3)return vf(t,r,i);if(e===2)return pf(t,r,i)}ae.ft_1=Ts;function df(e,t,r){return e&t^~e&r}ae.ch32=df;function pf(e,t,r){return e&t^e&r^t&r}ae.maj32=pf;function vf(e,t,r){return e^t^r}ae.p32=vf;function Us(e){return ue(e,2)^ue(e,13)^ue(e,22)}ae.s0_256=Us;function ks(e){return ue(e,6)^ue(e,11)^ue(e,25)}ae.s1_256=ks;function qs(e){return ue(e,7)^ue(e,18)^e>>>3}ae.g0_256=qs;function Ks(e){return ue(e,17)^ue(e,19)^e>>>10}ae.g1_256=Ks;var sr=Q,Hs=fr,zs=ae,_i=sr.rotl32,wr=sr.sum32,Ls=sr.sum32_5,js=zs.ft_1,mf=Hs.BlockHash,Qs=[1518500249,1859775393,2400959708,3395469782];function he(){if(!(this instanceof he))return new he;mf.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}sr.inherits(he,mf);var Js=he;he.blockSize=512,he.outSize=160,he.hmacStrength=80,he.padLength=64,he.prototype._update=function(t,r){for(var i=this.W,n=0;n<16;n++)i[n]=t[r+n];for(;n<i.length;n++)i[n]=_i(i[n-3]^i[n-8]^i[n-14]^i[n-16],1);var o=this.h[0],h=this.h[1],p=this.h[2],b=this.h[3],m=this.h[4];for(n=0;n<i.length;n++){var w=~~(n/20),y=Ls(_i(o,5),js(w,h,p,b),m,i[n],Qs[w]);m=b,b=p,p=_i(h,30),h=o,o=y}this.h[0]=wr(this.h[0],o),this.h[1]=wr(this.h[1],h),this.h[2]=wr(this.h[2],p),this.h[3]=wr(this.h[3],b),this.h[4]=wr(this.h[4],m)},he.prototype._digest=function(t){return t==="hex"?sr.toHex32(this.h,"big"):sr.split32(this.h,"big")};var ar=Q,Gs=fr,ur=ae,Ys=yr,ie=ar.sum32,Vs=ar.sum32_4,Ws=ar.sum32_5,Xs=ur.ch32,Zs=ur.maj32,$s=ur.s0_256,ta=ur.s1_256,ea=ur.g0_256,ra=ur.g1_256,gf=Gs.BlockHash,ia=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ce(){if(!(this instanceof ce))return new ce;gf.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=ia,this.W=new Array(64)}ar.inherits(ce,gf);var Af=ce;ce.blockSize=512,ce.outSize=256,ce.hmacStrength=192,ce.padLength=64,ce.prototype._update=function(t,r){for(var i=this.W,n=0;n<16;n++)i[n]=t[r+n];for(;n<i.length;n++)i[n]=Vs(ra(i[n-2]),i[n-7],ea(i[n-15]),i[n-16]);var o=this.h[0],h=this.h[1],p=this.h[2],b=this.h[3],m=this.h[4],w=this.h[5],y=this.h[6],S=this.h[7];for(Ys(this.k.length===i.length),n=0;n<i.length;n++){var I=Ws(S,ta(m),Xs(m,w,y),this.k[n],i[n]),N=ie($s(o),Zs(o,h,p));S=y,y=w,w=m,m=ie(b,I),b=p,p=h,h=o,o=ie(I,N)}this.h[0]=ie(this.h[0],o),this.h[1]=ie(this.h[1],h),this.h[2]=ie(this.h[2],p),this.h[3]=ie(this.h[3],b),this.h[4]=ie(this.h[4],m),this.h[5]=ie(this.h[5],w),this.h[6]=ie(this.h[6],y),this.h[7]=ie(this.h[7],S)},ce.prototype._digest=function(t){return t==="hex"?ar.toHex32(this.h,"big"):ar.split32(this.h,"big")};var Bi=Q,bf=Af;function ye(){if(!(this instanceof ye))return new ye;bf.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}Bi.inherits(ye,bf);var na=ye;ye.blockSize=512,ye.outSize=224,ye.hmacStrength=192,ye.padLength=64,ye.prototype._digest=function(t){return t==="hex"?Bi.toHex32(this.h.slice(0,7),"big"):Bi.split32(this.h.slice(0,7),"big")};var jt=Q,fa=fr,oa=yr,le=jt.rotr64_hi,de=jt.rotr64_lo,yf=jt.shr64_hi,wf=jt.shr64_lo,Be=jt.sum64,Ci=jt.sum64_hi,Ri=jt.sum64_lo,sa=jt.sum64_4_hi,aa=jt.sum64_4_lo,ua=jt.sum64_5_hi,ha=jt.sum64_5_lo,xf=fa.BlockHash,ca=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function ne(){if(!(this instanceof ne))return new ne;xf.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=ca,this.W=new Array(160)}jt.inherits(ne,xf);var Mf=ne;ne.blockSize=1024,ne.outSize=512,ne.hmacStrength=192,ne.padLength=128,ne.prototype._prepareBlock=function(t,r){for(var i=this.W,n=0;n<32;n++)i[n]=t[r+n];for(;n<i.length;n+=2){var o=xa(i[n-4],i[n-3]),h=Ma(i[n-4],i[n-3]),p=i[n-14],b=i[n-13],m=ya(i[n-30],i[n-29]),w=wa(i[n-30],i[n-29]),y=i[n-32],S=i[n-31];i[n]=sa(o,h,p,b,m,w,y,S),i[n+1]=aa(o,h,p,b,m,w,y,S)}},ne.prototype._update=function(t,r){this._prepareBlock(t,r);var i=this.W,n=this.h[0],o=this.h[1],h=this.h[2],p=this.h[3],b=this.h[4],m=this.h[5],w=this.h[6],y=this.h[7],S=this.h[8],I=this.h[9],N=this.h[10],C=this.h[11],F=this.h[12],U=this.h[13],J=this.h[14],Bt=this.h[15];oa(this.k.length===i.length);for(var G=0;G<i.length;G+=2){var H=J,z=Bt,Pt=Aa(S,I),W=ba(S,I),Rt=la(S,I,N,C,F),Yt=da(S,I,N,C,F,U),Y=this.k[G],Vt=this.k[G+1],A=i[G],f=i[G+1],a=ua(H,z,Pt,W,Rt,Yt,Y,Vt,A,f),c=ha(H,z,Pt,W,Rt,Yt,Y,Vt,A,f);H=ma(n,o),z=ga(n,o),Pt=pa(n,o,h,p,b),W=va(n,o,h,p,b,m);var d=Ci(H,z,Pt,W),g=Ri(H,z,Pt,W);J=F,Bt=U,F=N,U=C,N=S,C=I,S=Ci(w,y,a,c),I=Ri(y,y,a,c),w=b,y=m,b=h,m=p,h=n,p=o,n=Ci(a,c,d,g),o=Ri(a,c,d,g)}Be(this.h,0,n,o),Be(this.h,2,h,p),Be(this.h,4,b,m),Be(this.h,6,w,y),Be(this.h,8,S,I),Be(this.h,10,N,C),Be(this.h,12,F,U),Be(this.h,14,J,Bt)},ne.prototype._digest=function(t){return t==="hex"?jt.toHex32(this.h,"big"):jt.split32(this.h,"big")};function la(e,t,r,i,n){var o=e&r^~e&n;return o<0&&(o+=4294967296),o}function da(e,t,r,i,n,o){var h=t&i^~t&o;return h<0&&(h+=4294967296),h}function pa(e,t,r,i,n){var o=e&r^e&n^r&n;return o<0&&(o+=4294967296),o}function va(e,t,r,i,n,o){var h=t&i^t&o^i&o;return h<0&&(h+=4294967296),h}function ma(e,t){var r=le(e,t,28),i=le(t,e,2),n=le(t,e,7),o=r^i^n;return o<0&&(o+=4294967296),o}function ga(e,t){var r=de(e,t,28),i=de(t,e,2),n=de(t,e,7),o=r^i^n;return o<0&&(o+=4294967296),o}function Aa(e,t){var r=le(e,t,14),i=le(e,t,18),n=le(t,e,9),o=r^i^n;return o<0&&(o+=4294967296),o}function ba(e,t){var r=de(e,t,14),i=de(e,t,18),n=de(t,e,9),o=r^i^n;return o<0&&(o+=4294967296),o}function ya(e,t){var r=le(e,t,1),i=le(e,t,8),n=yf(e,t,7),o=r^i^n;return o<0&&(o+=4294967296),o}function wa(e,t){var r=de(e,t,1),i=de(e,t,8),n=wf(e,t,7),o=r^i^n;return o<0&&(o+=4294967296),o}function xa(e,t){var r=le(e,t,19),i=le(t,e,29),n=yf(e,t,6),o=r^i^n;return o<0&&(o+=4294967296),o}function Ma(e,t){var r=de(e,t,19),i=de(t,e,29),n=wf(e,t,6),o=r^i^n;return o<0&&(o+=4294967296),o}var Oi=Q,Ef=Mf;function we(){if(!(this instanceof we))return new we;Ef.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}Oi.inherits(we,Ef);var Ea=we;we.blockSize=1024,we.outSize=384,we.hmacStrength=192,we.padLength=128,we.prototype._digest=function(t){return t==="hex"?Oi.toHex32(this.h.slice(0,12),"big"):Oi.split32(this.h.slice(0,12),"big")},or.sha1=Js,or.sha224=na,or.sha256=Af,or.sha384=Ea,or.sha512=Mf;var Sf={},Xe=Q,Sa=fr,Tr=Xe.rotl32,Nf=Xe.sum32,xr=Xe.sum32_3,If=Xe.sum32_4,_f=Sa.BlockHash;function pe(){if(!(this instanceof pe))return new pe;_f.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}Xe.inherits(pe,_f),Sf.ripemd160=pe,pe.blockSize=512,pe.outSize=160,pe.hmacStrength=192,pe.padLength=64,pe.prototype._update=function(t,r){for(var i=this.h[0],n=this.h[1],o=this.h[2],h=this.h[3],p=this.h[4],b=i,m=n,w=o,y=h,S=p,I=0;I<80;I++){var N=Nf(Tr(If(i,Bf(I,n,o,h),t[_a[I]+r],Na(I)),Ca[I]),p);i=p,p=h,h=Tr(o,10),o=n,n=N,N=Nf(Tr(If(b,Bf(79-I,m,w,y),t[Ba[I]+r],Ia(I)),Ra[I]),S),b=S,S=y,y=Tr(w,10),w=m,m=N}N=xr(this.h[1],o,y),this.h[1]=xr(this.h[2],h,S),this.h[2]=xr(this.h[3],p,b),this.h[3]=xr(this.h[4],i,m),this.h[4]=xr(this.h[0],n,w),this.h[0]=N},pe.prototype._digest=function(t){return t==="hex"?Xe.toHex32(this.h,"little"):Xe.split32(this.h,"little")};function Bf(e,t,r,i){return e<=15?t^r^i:e<=31?t&r|~t&i:e<=47?(t|~r)^i:e<=63?t&i|r&~i:t^(r|~i)}function Na(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function Ia(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var _a=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],Ba=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],Ca=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],Ra=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],Oa=Q,Pa=yr;function hr(e,t,r){if(!(this instanceof hr))return new hr(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(Oa.toArray(t,r))}var Da=hr;hr.prototype._init=function(t){t.length>this.blockSize&&(t=new this.Hash().update(t).digest()),Pa(t.length<=this.blockSize);for(var r=t.length;r<this.blockSize;r++)t.push(0);for(r=0;r<t.length;r++)t[r]^=54;for(this.inner=new this.Hash().update(t),r=0;r<t.length;r++)t[r]^=106;this.outer=new this.Hash().update(t)},hr.prototype.update=function(t,r){return this.inner.update(t,r),this},hr.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)},function(e){var t=e;t.utils=Q,t.common=fr,t.sha=or,t.ripemd=Sf,t.hmac=Da,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}(se);function cr(e,t,r){return r={path:t,exports:{},require:function(i,n){return Fa(i,n??r.path)}},e(r,r.exports),r.exports}function Fa(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Pi=Cf;function Cf(e,t){if(!e)throw new Error(t||"Assertion failed")}Cf.equal=function(t,r,i){if(t!=r)throw new Error(i||"Assertion failed: "+t+" != "+r)};var fe=cr(function(e,t){var r=t;function i(h,p){if(Array.isArray(h))return h.slice();if(!h)return[];var b=[];if(typeof h!="string"){for(var m=0;m<h.length;m++)b[m]=h[m]|0;return b}if(p==="hex"){h=h.replace(/[^a-z0-9]+/ig,""),h.length%2!==0&&(h="0"+h);for(var m=0;m<h.length;m+=2)b.push(parseInt(h[m]+h[m+1],16))}else for(var m=0;m<h.length;m++){var w=h.charCodeAt(m),y=w>>8,S=w&255;y?b.push(y,S):b.push(S)}return b}r.toArray=i;function n(h){return h.length===1?"0"+h:h}r.zero2=n;function o(h){for(var p="",b=0;b<h.length;b++)p+=n(h[b].toString(16));return p}r.toHex=o,r.encode=function(p,b){return b==="hex"?o(p):p}}),Jt=cr(function(e,t){var r=t;r.assert=Pi,r.toArray=fe.toArray,r.zero2=fe.zero2,r.toHex=fe.toHex,r.encode=fe.encode;function i(b,m,w){var y=new Array(Math.max(b.bitLength(),w)+1);y.fill(0);for(var S=1<<m+1,I=b.clone(),N=0;N<y.length;N++){var C,F=I.andln(S-1);I.isOdd()?(F>(S>>1)-1?C=(S>>1)-F:C=F,I.isubn(C)):C=0,y[N]=C,I.iushrn(1)}return y}r.getNAF=i;function n(b,m){var w=[[],[]];b=b.clone(),m=m.clone();for(var y=0,S=0,I;b.cmpn(-y)>0||m.cmpn(-S)>0;){var N=b.andln(3)+y&3,C=m.andln(3)+S&3;N===3&&(N=-1),C===3&&(C=-1);var F;N&1?(I=b.andln(7)+y&7,(I===3||I===5)&&C===2?F=-N:F=N):F=0,w[0].push(F);var U;C&1?(I=m.andln(7)+S&7,(I===3||I===5)&&N===2?U=-C:U=C):U=0,w[1].push(U),2*y===F+1&&(y=1-y),2*S===U+1&&(S=1-S),b.iushrn(1),m.iushrn(1)}return w}r.getJSF=n;function o(b,m,w){var y="_"+m;b.prototype[m]=function(){return this[y]!==void 0?this[y]:this[y]=w.call(this)}}r.cachedProperty=o;function h(b){return typeof b=="string"?r.toArray(b,"hex"):b}r.parseBytes=h;function p(b){return new K(b,"hex","le")}r.intFromLE=p}),Ur=Jt.getNAF,Ta=Jt.getJSF,kr=Jt.assert;function Ce(e,t){this.type=e,this.p=new K(t.p,16),this.red=t.prime?K.red(t.prime):K.mont(this.p),this.zero=new K(0).toRed(this.red),this.one=new K(1).toRed(this.red),this.two=new K(2).toRed(this.red),this.n=t.n&&new K(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var Ze=Ce;Ce.prototype.point=function(){throw new Error("Not implemented")},Ce.prototype.validate=function(){throw new Error("Not implemented")},Ce.prototype._fixedNafMul=function(t,r){kr(t.precomputed);var i=t._getDoubles(),n=Ur(r,1,this._bitLength),o=(1<<i.step+1)-(i.step%2===0?2:1);o/=3;var h=[],p,b;for(p=0;p<n.length;p+=i.step){b=0;for(var m=p+i.step-1;m>=p;m--)b=(b<<1)+n[m];h.push(b)}for(var w=this.jpoint(null,null,null),y=this.jpoint(null,null,null),S=o;S>0;S--){for(p=0;p<h.length;p++)b=h[p],b===S?y=y.mixedAdd(i.points[p]):b===-S&&(y=y.mixedAdd(i.points[p].neg()));w=w.add(y)}return w.toP()},Ce.prototype._wnafMul=function(t,r){var i=4,n=t._getNAFPoints(i);i=n.wnd;for(var o=n.points,h=Ur(r,i,this._bitLength),p=this.jpoint(null,null,null),b=h.length-1;b>=0;b--){for(var m=0;b>=0&&h[b]===0;b--)m++;if(b>=0&&m++,p=p.dblp(m),b<0)break;var w=h[b];kr(w!==0),t.type==="affine"?w>0?p=p.mixedAdd(o[w-1>>1]):p=p.mixedAdd(o[-w-1>>1].neg()):w>0?p=p.add(o[w-1>>1]):p=p.add(o[-w-1>>1].neg())}return t.type==="affine"?p.toP():p},Ce.prototype._wnafMulAdd=function(t,r,i,n,o){var h=this._wnafT1,p=this._wnafT2,b=this._wnafT3,m=0,w,y,S;for(w=0;w<n;w++){S=r[w];var I=S._getNAFPoints(t);h[w]=I.wnd,p[w]=I.points}for(w=n-1;w>=1;w-=2){var N=w-1,C=w;if(h[N]!==1||h[C]!==1){b[N]=Ur(i[N],h[N],this._bitLength),b[C]=Ur(i[C],h[C],this._bitLength),m=Math.max(b[N].length,m),m=Math.max(b[C].length,m);continue}var F=[r[N],null,null,r[C]];r[N].y.cmp(r[C].y)===0?(F[1]=r[N].add(r[C]),F[2]=r[N].toJ().mixedAdd(r[C].neg())):r[N].y.cmp(r[C].y.redNeg())===0?(F[1]=r[N].toJ().mixedAdd(r[C]),F[2]=r[N].add(r[C].neg())):(F[1]=r[N].toJ().mixedAdd(r[C]),F[2]=r[N].toJ().mixedAdd(r[C].neg()));var U=[-3,-1,-5,-7,0,7,5,1,3],J=Ta(i[N],i[C]);for(m=Math.max(J[0].length,m),b[N]=new Array(m),b[C]=new Array(m),y=0;y<m;y++){var Bt=J[0][y]|0,G=J[1][y]|0;b[N][y]=U[(Bt+1)*3+(G+1)],b[C][y]=0,p[N]=F}}var H=this.jpoint(null,null,null),z=this._wnafT4;for(w=m;w>=0;w--){for(var Pt=0;w>=0;){var W=!0;for(y=0;y<n;y++)z[y]=b[y][w]|0,z[y]!==0&&(W=!1);if(!W)break;Pt++,w--}if(w>=0&&Pt++,H=H.dblp(Pt),w<0)break;for(y=0;y<n;y++){var Rt=z[y];Rt!==0&&(Rt>0?S=p[y][Rt-1>>1]:Rt<0&&(S=p[y][-Rt-1>>1].neg()),S.type==="affine"?H=H.mixedAdd(S):H=H.add(S))}}for(w=0;w<n;w++)p[w]=null;return o?H:H.toP()};function Xt(e,t){this.curve=e,this.type=t,this.precomputed=null}Ce.BasePoint=Xt,Xt.prototype.eq=function(){throw new Error("Not implemented")},Xt.prototype.validate=function(){return this.curve.validate(this)},Ce.prototype.decodePoint=function(t,r){t=Jt.toArray(t,r);var i=this.p.byteLength();if((t[0]===4||t[0]===6||t[0]===7)&&t.length-1===2*i){t[0]===6?kr(t[t.length-1]%2===0):t[0]===7&&kr(t[t.length-1]%2===1);var n=this.point(t.slice(1,1+i),t.slice(1+i,1+2*i));return n}else if((t[0]===2||t[0]===3)&&t.length-1===i)return this.pointFromX(t.slice(1,1+i),t[0]===3);throw new Error("Unknown point format")},Xt.prototype.encodeCompressed=function(t){return this.encode(t,!0)},Xt.prototype._encode=function(t){var r=this.curve.p.byteLength(),i=this.getX().toArray("be",r);return t?[this.getY().isEven()?2:3].concat(i):[4].concat(i,this.getY().toArray("be",r))},Xt.prototype.encode=function(t,r){return Jt.encode(this._encode(r),t)},Xt.prototype.precompute=function(t){if(this.precomputed)return this;var r={doubles:null,naf:null,beta:null};return r.naf=this._getNAFPoints(8),r.doubles=this._getDoubles(4,t),r.beta=this._getBeta(),this.precomputed=r,this},Xt.prototype._hasDoubles=function(t){if(!this.precomputed)return!1;var r=this.precomputed.doubles;return r?r.points.length>=Math.ceil((t.bitLength()+1)/r.step):!1},Xt.prototype._getDoubles=function(t,r){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var i=[this],n=this,o=0;o<r;o+=t){for(var h=0;h<t;h++)n=n.dbl();i.push(n)}return{step:t,points:i}},Xt.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var r=[this],i=(1<<t)-1,n=i===1?null:this.dbl(),o=1;o<i;o++)r[o]=r[o-1].add(n);return{wnd:t,points:r}},Xt.prototype._getBeta=function(){return null},Xt.prototype.dblp=function(t){for(var r=this,i=0;i<t;i++)r=r.dbl();return r};var Di=cr(function(e){typeof Object.create=="function"?e.exports=function(r,i){i&&(r.super_=i,r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(r,i){if(i){r.super_=i;var n=function(){};n.prototype=i.prototype,r.prototype=new n,r.prototype.constructor=r}}}),Ua=Jt.assert;function Zt(e){Ze.call(this,"short",e),this.a=new K(e.a,16).toRed(this.red),this.b=new K(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}Di(Zt,Ze);var ka=Zt;Zt.prototype._getEndomorphism=function(t){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var r,i;if(t.beta)r=new K(t.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);r=n[0].cmp(n[1])<0?n[0]:n[1],r=r.toRed(this.red)}if(t.lambda)i=new K(t.lambda,16);else{var o=this._getEndoRoots(this.n);this.g.mul(o[0]).x.cmp(this.g.x.redMul(r))===0?i=o[0]:(i=o[1],Ua(this.g.mul(i).x.cmp(this.g.x.redMul(r))===0))}var h;return t.basis?h=t.basis.map(function(p){return{a:new K(p.a,16),b:new K(p.b,16)}}):h=this._getEndoBasis(i),{beta:r,lambda:i,basis:h}}},Zt.prototype._getEndoRoots=function(t){var r=t===this.p?this.red:K.mont(t),i=new K(2).toRed(r).redInvm(),n=i.redNeg(),o=new K(3).toRed(r).redNeg().redSqrt().redMul(i),h=n.redAdd(o).fromRed(),p=n.redSub(o).fromRed();return[h,p]},Zt.prototype._getEndoBasis=function(t){for(var r=this.n.ushrn(Math.floor(this.n.bitLength()/2)),i=t,n=this.n.clone(),o=new K(1),h=new K(0),p=new K(0),b=new K(1),m,w,y,S,I,N,C,F=0,U,J;i.cmpn(0)!==0;){var Bt=n.div(i);U=n.sub(Bt.mul(i)),J=p.sub(Bt.mul(o));var G=b.sub(Bt.mul(h));if(!y&&U.cmp(r)<0)m=C.neg(),w=o,y=U.neg(),S=J;else if(y&&++F===2)break;C=U,n=i,i=U,p=o,o=J,b=h,h=G}I=U.neg(),N=J;var H=y.sqr().add(S.sqr()),z=I.sqr().add(N.sqr());return z.cmp(H)>=0&&(I=m,N=w),y.negative&&(y=y.neg(),S=S.neg()),I.negative&&(I=I.neg(),N=N.neg()),[{a:y,b:S},{a:I,b:N}]},Zt.prototype._endoSplit=function(t){var r=this.endo.basis,i=r[0],n=r[1],o=n.b.mul(t).divRound(this.n),h=i.b.neg().mul(t).divRound(this.n),p=o.mul(i.a),b=h.mul(n.a),m=o.mul(i.b),w=h.mul(n.b),y=t.sub(p).sub(b),S=m.add(w).neg();return{k1:y,k2:S}},Zt.prototype.pointFromX=function(t,r){t=new K(t,16),t.red||(t=t.toRed(this.red));var i=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),n=i.redSqrt();if(n.redSqr().redSub(i).cmp(this.zero)!==0)throw new Error("invalid point");var o=n.fromRed().isOdd();return(r&&!o||!r&&o)&&(n=n.redNeg()),this.point(t,n)},Zt.prototype.validate=function(t){if(t.inf)return!0;var r=t.x,i=t.y,n=this.a.redMul(r),o=r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);return i.redSqr().redISub(o).cmpn(0)===0},Zt.prototype._endoWnafMulAdd=function(t,r,i){for(var n=this._endoWnafT1,o=this._endoWnafT2,h=0;h<t.length;h++){var p=this._endoSplit(r[h]),b=t[h],m=b._getBeta();p.k1.negative&&(p.k1.ineg(),b=b.neg(!0)),p.k2.negative&&(p.k2.ineg(),m=m.neg(!0)),n[h*2]=b,n[h*2+1]=m,o[h*2]=p.k1,o[h*2+1]=p.k2}for(var w=this._wnafMulAdd(1,n,o,h*2,i),y=0;y<h*2;y++)n[y]=null,o[y]=null;return w};function Ft(e,t,r,i){Ze.BasePoint.call(this,e,"affine"),t===null&&r===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new K(t,16),this.y=new K(r,16),i&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}Di(Ft,Ze.BasePoint),Zt.prototype.point=function(t,r,i){return new Ft(this,t,r,i)},Zt.prototype.pointFromJSON=function(t,r){return Ft.fromJSON(this,t,r)},Ft.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed;if(t&&t.beta)return t.beta;var r=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(t){var i=this.curve,n=function(o){return i.point(o.x.redMul(i.endo.beta),o.y)};t.beta=r,r.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(n)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(n)}}}return r}},Ft.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},Ft.fromJSON=function(t,r,i){typeof r=="string"&&(r=JSON.parse(r));var n=t.point(r[0],r[1],i);if(!r[2])return n;function o(p){return t.point(p[0],p[1],i)}var h=r[2];return n.precomputed={beta:null,doubles:h.doubles&&{step:h.doubles.step,points:[n].concat(h.doubles.points.map(o))},naf:h.naf&&{wnd:h.naf.wnd,points:[n].concat(h.naf.points.map(o))}},n},Ft.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},Ft.prototype.isInfinity=function(){return this.inf},Ft.prototype.add=function(t){if(this.inf)return t;if(t.inf)return this;if(this.eq(t))return this.dbl();if(this.neg().eq(t))return this.curve.point(null,null);if(this.x.cmp(t.x)===0)return this.curve.point(null,null);var r=this.y.redSub(t.y);r.cmpn(0)!==0&&(r=r.redMul(this.x.redSub(t.x).redInvm()));var i=r.redSqr().redISub(this.x).redISub(t.x),n=r.redMul(this.x.redSub(i)).redISub(this.y);return this.curve.point(i,n)},Ft.prototype.dbl=function(){if(this.inf)return this;var t=this.y.redAdd(this.y);if(t.cmpn(0)===0)return this.curve.point(null,null);var r=this.curve.a,i=this.x.redSqr(),n=t.redInvm(),o=i.redAdd(i).redIAdd(i).redIAdd(r).redMul(n),h=o.redSqr().redISub(this.x.redAdd(this.x)),p=o.redMul(this.x.redSub(h)).redISub(this.y);return this.curve.point(h,p)},Ft.prototype.getX=function(){return this.x.fromRed()},Ft.prototype.getY=function(){return this.y.fromRed()},Ft.prototype.mul=function(t){return t=new K(t,16),this.isInfinity()?this:this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},Ft.prototype.mulAdd=function(t,r,i){var n=[this,r],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(n,o):this.curve._wnafMulAdd(1,n,o,2)},Ft.prototype.jmulAdd=function(t,r,i){var n=[this,r],o=[t,i];return this.curve.endo?this.curve._endoWnafMulAdd(n,o,!0):this.curve._wnafMulAdd(1,n,o,2,!0)},Ft.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||this.x.cmp(t.x)===0&&this.y.cmp(t.y)===0)},Ft.prototype.neg=function(t){if(this.inf)return this;var r=this.curve.point(this.x,this.y.redNeg());if(t&&this.precomputed){var i=this.precomputed,n=function(o){return o.neg()};r.precomputed={naf:i.naf&&{wnd:i.naf.wnd,points:i.naf.points.map(n)},doubles:i.doubles&&{step:i.doubles.step,points:i.doubles.points.map(n)}}}return r},Ft.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var t=this.curve.jpoint(this.x,this.y,this.curve.one);return t};function Tt(e,t,r,i){Ze.BasePoint.call(this,e,"jacobian"),t===null&&r===null&&i===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new K(0)):(this.x=new K(t,16),this.y=new K(r,16),this.z=new K(i,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}Di(Tt,Ze.BasePoint),Zt.prototype.jpoint=function(t,r,i){return new Tt(this,t,r,i)},Tt.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var t=this.z.redInvm(),r=t.redSqr(),i=this.x.redMul(r),n=this.y.redMul(r).redMul(t);return this.curve.point(i,n)},Tt.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},Tt.prototype.add=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var r=t.z.redSqr(),i=this.z.redSqr(),n=this.x.redMul(r),o=t.x.redMul(i),h=this.y.redMul(r.redMul(t.z)),p=t.y.redMul(i.redMul(this.z)),b=n.redSub(o),m=h.redSub(p);if(b.cmpn(0)===0)return m.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var w=b.redSqr(),y=w.redMul(b),S=n.redMul(w),I=m.redSqr().redIAdd(y).redISub(S).redISub(S),N=m.redMul(S.redISub(I)).redISub(h.redMul(y)),C=this.z.redMul(t.z).redMul(b);return this.curve.jpoint(I,N,C)},Tt.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ();if(t.isInfinity())return this;var r=this.z.redSqr(),i=this.x,n=t.x.redMul(r),o=this.y,h=t.y.redMul(r).redMul(this.z),p=i.redSub(n),b=o.redSub(h);if(p.cmpn(0)===0)return b.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var m=p.redSqr(),w=m.redMul(p),y=i.redMul(m),S=b.redSqr().redIAdd(w).redISub(y).redISub(y),I=b.redMul(y.redISub(S)).redISub(o.redMul(w)),N=this.z.redMul(p);return this.curve.jpoint(S,I,N)},Tt.prototype.dblp=function(t){if(t===0)return this;if(this.isInfinity())return this;if(!t)return this.dbl();var r;if(this.curve.zeroA||this.curve.threeA){var i=this;for(r=0;r<t;r++)i=i.dbl();return i}var n=this.curve.a,o=this.curve.tinv,h=this.x,p=this.y,b=this.z,m=b.redSqr().redSqr(),w=p.redAdd(p);for(r=0;r<t;r++){var y=h.redSqr(),S=w.redSqr(),I=S.redSqr(),N=y.redAdd(y).redIAdd(y).redIAdd(n.redMul(m)),C=h.redMul(S),F=N.redSqr().redISub(C.redAdd(C)),U=C.redISub(F),J=N.redMul(U);J=J.redIAdd(J).redISub(I);var Bt=w.redMul(b);r+1<t&&(m=m.redMul(I)),h=F,b=Bt,w=J}return this.curve.jpoint(h,w.redMul(o),b)},Tt.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},Tt.prototype._zeroDbl=function(){var t,r,i;if(this.zOne){var n=this.x.redSqr(),o=this.y.redSqr(),h=o.redSqr(),p=this.x.redAdd(o).redSqr().redISub(n).redISub(h);p=p.redIAdd(p);var b=n.redAdd(n).redIAdd(n),m=b.redSqr().redISub(p).redISub(p),w=h.redIAdd(h);w=w.redIAdd(w),w=w.redIAdd(w),t=m,r=b.redMul(p.redISub(m)).redISub(w),i=this.y.redAdd(this.y)}else{var y=this.x.redSqr(),S=this.y.redSqr(),I=S.redSqr(),N=this.x.redAdd(S).redSqr().redISub(y).redISub(I);N=N.redIAdd(N);var C=y.redAdd(y).redIAdd(y),F=C.redSqr(),U=I.redIAdd(I);U=U.redIAdd(U),U=U.redIAdd(U),t=F.redISub(N).redISub(N),r=C.redMul(N.redISub(t)).redISub(U),i=this.y.redMul(this.z),i=i.redIAdd(i)}return this.curve.jpoint(t,r,i)},Tt.prototype._threeDbl=function(){var t,r,i;if(this.zOne){var n=this.x.redSqr(),o=this.y.redSqr(),h=o.redSqr(),p=this.x.redAdd(o).redSqr().redISub(n).redISub(h);p=p.redIAdd(p);var b=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),m=b.redSqr().redISub(p).redISub(p);t=m;var w=h.redIAdd(h);w=w.redIAdd(w),w=w.redIAdd(w),r=b.redMul(p.redISub(m)).redISub(w),i=this.y.redAdd(this.y)}else{var y=this.z.redSqr(),S=this.y.redSqr(),I=this.x.redMul(S),N=this.x.redSub(y).redMul(this.x.redAdd(y));N=N.redAdd(N).redIAdd(N);var C=I.redIAdd(I);C=C.redIAdd(C);var F=C.redAdd(C);t=N.redSqr().redISub(F),i=this.y.redAdd(this.z).redSqr().redISub(S).redISub(y);var U=S.redSqr();U=U.redIAdd(U),U=U.redIAdd(U),U=U.redIAdd(U),r=N.redMul(C.redISub(t)).redISub(U)}return this.curve.jpoint(t,r,i)},Tt.prototype._dbl=function(){var t=this.curve.a,r=this.x,i=this.y,n=this.z,o=n.redSqr().redSqr(),h=r.redSqr(),p=i.redSqr(),b=h.redAdd(h).redIAdd(h).redIAdd(t.redMul(o)),m=r.redAdd(r);m=m.redIAdd(m);var w=m.redMul(p),y=b.redSqr().redISub(w.redAdd(w)),S=w.redISub(y),I=p.redSqr();I=I.redIAdd(I),I=I.redIAdd(I),I=I.redIAdd(I);var N=b.redMul(S).redISub(I),C=i.redAdd(i).redMul(n);return this.curve.jpoint(y,N,C)},Tt.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var t=this.x.redSqr(),r=this.y.redSqr(),i=this.z.redSqr(),n=r.redSqr(),o=t.redAdd(t).redIAdd(t),h=o.redSqr(),p=this.x.redAdd(r).redSqr().redISub(t).redISub(n);p=p.redIAdd(p),p=p.redAdd(p).redIAdd(p),p=p.redISub(h);var b=p.redSqr(),m=n.redIAdd(n);m=m.redIAdd(m),m=m.redIAdd(m),m=m.redIAdd(m);var w=o.redIAdd(p).redSqr().redISub(h).redISub(b).redISub(m),y=r.redMul(w);y=y.redIAdd(y),y=y.redIAdd(y);var S=this.x.redMul(b).redISub(y);S=S.redIAdd(S),S=S.redIAdd(S);var I=this.y.redMul(w.redMul(m.redISub(w)).redISub(p.redMul(b)));I=I.redIAdd(I),I=I.redIAdd(I),I=I.redIAdd(I);var N=this.z.redAdd(p).redSqr().redISub(i).redISub(b);return this.curve.jpoint(S,I,N)},Tt.prototype.mul=function(t,r){return t=new K(t,r),this.curve._wnafMul(this,t)},Tt.prototype.eq=function(t){if(t.type==="affine")return this.eq(t.toJ());if(this===t)return!0;var r=this.z.redSqr(),i=t.z.redSqr();if(this.x.redMul(i).redISub(t.x.redMul(r)).cmpn(0)!==0)return!1;var n=r.redMul(this.z),o=i.redMul(t.z);return this.y.redMul(o).redISub(t.y.redMul(n)).cmpn(0)===0},Tt.prototype.eqXToP=function(t){var r=this.z.redSqr(),i=t.toRed(this.curve.red).redMul(r);if(this.x.cmp(i)===0)return!0;for(var n=t.clone(),o=this.curve.redN.redMul(r);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(i.redIAdd(o),this.x.cmp(i)===0)return!0}},Tt.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},Tt.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var qr=cr(function(e,t){var r=t;r.base=Ze,r.short=ka,r.mont=null,r.edwards=null}),Kr=cr(function(e,t){var r=t,i=Jt.assert;function n(p){p.type==="short"?this.curve=new qr.short(p):p.type==="edwards"?this.curve=new qr.edwards(p):this.curve=new qr.mont(p),this.g=this.curve.g,this.n=this.curve.n,this.hash=p.hash,i(this.g.validate(),"Invalid curve"),i(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}r.PresetCurve=n;function o(p,b){Object.defineProperty(r,p,{configurable:!0,enumerable:!0,get:function(){var m=new n(b);return Object.defineProperty(r,p,{configurable:!0,enumerable:!0,value:m}),m}})}o("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:se.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),o("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:se.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),o("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:se.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),o("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:se.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),o("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:se.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),o("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:se.sha256,gRed:!1,g:["9"]}),o("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:se.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var h;try{h=null.crash()}catch{h=void 0}o("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:se.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",h]})});function Re(e){if(!(this instanceof Re))return new Re(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=fe.toArray(e.entropy,e.entropyEnc||"hex"),r=fe.toArray(e.nonce,e.nonceEnc||"hex"),i=fe.toArray(e.pers,e.persEnc||"hex");Pi(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}var Rf=Re;Re.prototype._init=function(t,r,i){var n=t.concat(r).concat(i);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var o=0;o<this.V.length;o++)this.K[o]=0,this.V[o]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},Re.prototype._hmac=function(){return new se.hmac(this.hash,this.K)},Re.prototype._update=function(t){var r=this._hmac().update(this.V).update([0]);t&&(r=r.update(t)),this.K=r.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},Re.prototype.reseed=function(t,r,i,n){typeof r!="string"&&(n=i,i=r,r=null),t=fe.toArray(t,r),i=fe.toArray(i,n),Pi(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(i||[])),this._reseed=1},Re.prototype.generate=function(t,r,i,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof r!="string"&&(n=i,i=r,r=null),i&&(i=fe.toArray(i,n||"hex"),this._update(i));for(var o=[];o.length<t;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var h=o.slice(0,t);return this._update(i),this._reseed++,fe.encode(h,r)};var Fi=Jt.assert;function kt(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var Ti=kt;kt.fromPublic=function(t,r,i){return r instanceof kt?r:new kt(t,{pub:r,pubEnc:i})},kt.fromPrivate=function(t,r,i){return r instanceof kt?r:new kt(t,{priv:r,privEnc:i})},kt.prototype.validate=function(){var t=this.getPublic();return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},kt.prototype.getPublic=function(t,r){return typeof t=="string"&&(r=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),r?this.pub.encode(r,t):this.pub},kt.prototype.getPrivate=function(t){return t==="hex"?this.priv.toString(16,2):this.priv},kt.prototype._importPrivate=function(t,r){this.priv=new K(t,r||16),this.priv=this.priv.umod(this.ec.curve.n)},kt.prototype._importPublic=function(t,r){if(t.x||t.y){this.ec.curve.type==="mont"?Fi(t.x,"Need x coordinate"):(this.ec.curve.type==="short"||this.ec.curve.type==="edwards")&&Fi(t.x&&t.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(t.x,t.y);return}this.pub=this.ec.curve.decodePoint(t,r)},kt.prototype.derive=function(t){return t.validate()||Fi(t.validate(),"public point not validated"),t.mul(this.priv).getX()},kt.prototype.sign=function(t,r,i){return this.ec.sign(t,this,r,i)},kt.prototype.verify=function(t,r){return this.ec.verify(t,r,this)},kt.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var qa=Jt.assert;function Hr(e,t){if(e instanceof Hr)return e;this._importDER(e,t)||(qa(e.r&&e.s,"Signature without r or s"),this.r=new K(e.r,16),this.s=new K(e.s,16),e.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var zr=Hr;function Ka(){this.place=0}function Ui(e,t){var r=e[t.place++];if(!(r&128))return r;var i=r&15;if(i===0||i>4)return!1;for(var n=0,o=0,h=t.place;o<i;o++,h++)n<<=8,n|=e[h],n>>>=0;return n<=127?!1:(t.place=h,n)}function Of(e){for(var t=0,r=e.length-1;!e[t]&&!(e[t+1]&128)&&t<r;)t++;return t===0?e:e.slice(t)}Hr.prototype._importDER=function(t,r){t=Jt.toArray(t,r);var i=new Ka;if(t[i.place++]!==48)return!1;var n=Ui(t,i);if(n===!1||n+i.place!==t.length||t[i.place++]!==2)return!1;var o=Ui(t,i);if(o===!1)return!1;var h=t.slice(i.place,o+i.place);if(i.place+=o,t[i.place++]!==2)return!1;var p=Ui(t,i);if(p===!1||t.length!==p+i.place)return!1;var b=t.slice(i.place,p+i.place);if(h[0]===0)if(h[1]&128)h=h.slice(1);else return!1;if(b[0]===0)if(b[1]&128)b=b.slice(1);else return!1;return this.r=new K(h),this.s=new K(b),this.recoveryParam=null,!0};function ki(e,t){if(t<128){e.push(t);return}var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(r|128);--r;)e.push(t>>>(r<<3)&255);e.push(t)}Hr.prototype.toDER=function(t){var r=this.r.toArray(),i=this.s.toArray();for(r[0]&128&&(r=[0].concat(r)),i[0]&128&&(i=[0].concat(i)),r=Of(r),i=Of(i);!i[0]&&!(i[1]&128);)i=i.slice(1);var n=[2];ki(n,r.length),n=n.concat(r),n.push(2),ki(n,i.length);var o=n.concat(i),h=[48];return ki(h,o.length),h=h.concat(o),Jt.encode(h,t)};var Ha=function(){throw new Error("unsupported")},Pf=Jt.assert;function $t(e){if(!(this instanceof $t))return new $t(e);typeof e=="string"&&(Pf(Object.prototype.hasOwnProperty.call(Kr,e),"Unknown curve "+e),e=Kr[e]),e instanceof Kr.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var za=$t;$t.prototype.keyPair=function(t){return new Ti(this,t)},$t.prototype.keyFromPrivate=function(t,r){return Ti.fromPrivate(this,t,r)},$t.prototype.keyFromPublic=function(t,r){return Ti.fromPublic(this,t,r)},$t.prototype.genKeyPair=function(t){t||(t={});for(var r=new Rf({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||Ha(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),i=this.n.byteLength(),n=this.n.sub(new K(2));;){var o=new K(r.generate(i));if(!(o.cmp(n)>0))return o.iaddn(1),this.keyFromPrivate(o)}},$t.prototype._truncateToN=function(t,r){var i=t.byteLength()*8-this.n.bitLength();return i>0&&(t=t.ushrn(i)),!r&&t.cmp(this.n)>=0?t.sub(this.n):t},$t.prototype.sign=function(t,r,i,n){typeof i=="object"&&(n=i,i=null),n||(n={}),r=this.keyFromPrivate(r,i),t=this._truncateToN(new K(t,16));for(var o=this.n.byteLength(),h=r.getPrivate().toArray("be",o),p=t.toArray("be",o),b=new Rf({hash:this.hash,entropy:h,nonce:p,pers:n.pers,persEnc:n.persEnc||"utf8"}),m=this.n.sub(new K(1)),w=0;;w++){var y=n.k?n.k(w):new K(b.generate(this.n.byteLength()));if(y=this._truncateToN(y,!0),!(y.cmpn(1)<=0||y.cmp(m)>=0)){var S=this.g.mul(y);if(!S.isInfinity()){var I=S.getX(),N=I.umod(this.n);if(N.cmpn(0)!==0){var C=y.invm(this.n).mul(N.mul(r.getPrivate()).iadd(t));if(C=C.umod(this.n),C.cmpn(0)!==0){var F=(S.getY().isOdd()?1:0)|(I.cmp(N)!==0?2:0);return n.canonical&&C.cmp(this.nh)>0&&(C=this.n.sub(C),F^=1),new zr({r:N,s:C,recoveryParam:F})}}}}}},$t.prototype.verify=function(t,r,i,n){t=this._truncateToN(new K(t,16)),i=this.keyFromPublic(i,n),r=new zr(r,"hex");var o=r.r,h=r.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0||h.cmpn(1)<0||h.cmp(this.n)>=0)return!1;var p=h.invm(this.n),b=p.mul(t).umod(this.n),m=p.mul(o).umod(this.n),w;return this.curve._maxwellTrick?(w=this.g.jmulAdd(b,i.getPublic(),m),w.isInfinity()?!1:w.eqXToP(o)):(w=this.g.mulAdd(b,i.getPublic(),m),w.isInfinity()?!1:w.getX().umod(this.n).cmp(o)===0)},$t.prototype.recoverPubKey=function(e,t,r,i){Pf((3&r)===r,"The recovery param is more than two bits"),t=new zr(t,i);var n=this.n,o=new K(e),h=t.r,p=t.s,b=r&1,m=r>>1;if(h.cmp(this.curve.p.umod(this.curve.n))>=0&&m)throw new Error("Unable to find sencond key candinate");m?h=this.curve.pointFromX(h.add(this.curve.n),b):h=this.curve.pointFromX(h,b);var w=t.r.invm(n),y=n.sub(o).mul(w).umod(n),S=p.mul(w).umod(n);return this.g.mulAdd(y,h,S)},$t.prototype.getKeyRecoveryParam=function(e,t,r,i){if(t=new zr(t,i),t.recoveryParam!==null)return t.recoveryParam;for(var n=0;n<4;n++){var o;try{o=this.recoverPubKey(e,t,n)}catch{continue}if(o.eq(r))return n}throw new Error("Unable to find valid recovery factor")};var La=cr(function(e,t){var r=t;r.version="6.5.4",r.utils=Jt,r.rand=function(){throw new Error("unsupported")},r.curve=qr,r.curves=Kr,r.ec=za,r.eddsa=null}),ja=La.ec;const Qa="signing-key/5.7.0",qi=new L(Qa);let Ki=null;function ve(){return Ki||(Ki=new ja("secp256k1")),Ki}class Ja{constructor(t){br(this,"curve","secp256k1"),br(this,"privateKey",Kt(t)),N0(this.privateKey)!==32&&qi.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const r=ve().keyFromPrivate(Ot(this.privateKey));br(this,"publicKey","0x"+r.getPublic(!1,"hex")),br(this,"compressedPublicKey","0x"+r.getPublic(!0,"hex")),br(this,"_isSigningKey",!0)}_addPoint(t){const r=ve().keyFromPublic(Ot(this.publicKey)),i=ve().keyFromPublic(Ot(t));return"0x"+r.pub.add(i.pub).encodeCompressed("hex")}signDigest(t){const r=ve().keyFromPrivate(Ot(this.privateKey)),i=Ot(t);i.length!==32&&qi.throwArgumentError("bad digest length","digest",t);const n=r.sign(i,{canonical:!0});return zn({recoveryParam:n.recoveryParam,r:oe("0x"+n.r.toString(16),32),s:oe("0x"+n.s.toString(16),32)})}computeSharedSecret(t){const r=ve().keyFromPrivate(Ot(this.privateKey)),i=ve().keyFromPublic(Ot(Df(t)));return oe("0x"+r.derive(i.getPublic()).toString(16),32)}static isSigningKey(t){return!!(t&&t._isSigningKey)}}function Ga(e,t){const r=zn(t),i={r:Ot(r.r),s:Ot(r.s)};return"0x"+ve().recoverPubKey(Ot(e),i,r.recoveryParam).encode("hex",!1)}function Df(e,t){const r=Ot(e);if(r.length===32){const i=new Ja(r);return t?"0x"+ve().keyFromPrivate(r).getPublic(!0,"hex"):i.publicKey}else{if(r.length===33)return t?Kt(r):"0x"+ve().keyFromPublic(r).getPublic(!1,"hex");if(r.length===65)return t?"0x"+ve().keyFromPublic(r).getPublic(!0,"hex"):Kt(r)}return qi.throwArgumentError("invalid public or private key","key","[REDACTED]")}const Ya="transactions/5.7.0";new L(Ya);var Ff;(function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559"})(Ff||(Ff={}));function Va(e){const t=Df(e);return ns(Hn(yi(Hn(t,1)),12))}function Wa(e,t){return Va(Ga(Ot(e),t))}const Xa="https://rpc.walletconnect.com/v1";async function Tf(e,t,r,i,n,o){switch(r.t){case"eip191":return Uf(e,t,r.s);case"eip1271":return await kf(e,t,r.s,i,n,o);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)}}function Uf(e,t,r){return Wa(ff(t),r).toLowerCase()===e.toLowerCase()}async function kf(e,t,r,i,n,o){try{const h="0x1626ba7e",p="0000000000000000000000000000000000000000000000000000000000000040",b="0000000000000000000000000000000000000000000000000000000000000041",m=r.substring(2),w=ff(t).substring(2),y=h+w+p+b+m,S=await fetch(`${o||Xa}/?chainId=${i}&projectId=${n}`,{method:"POST",body:JSON.stringify({id:Za(),jsonrpc:"2.0",method:"eth_call",params:[{to:e,data:y},"latest"]})}),{result:I}=await S.json();return I?I.slice(0,h.length).toLowerCase()===h.toLowerCase():!1}catch(h){return console.error("isValidEip1271Signature: ",h),!1}}function Za(){return Date.now()+Math.floor(Math.random()*1e3)}var $a=Object.defineProperty,tu=Object.defineProperties,eu=Object.getOwnPropertyDescriptors,qf=Object.getOwnPropertySymbols,ru=Object.prototype.hasOwnProperty,iu=Object.prototype.propertyIsEnumerable,Kf=(e,t,r)=>t in e?$a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Hi=(e,t)=>{for(var r in t||(t={}))ru.call(t,r)&&Kf(e,r,t[r]);if(qf)for(var r of qf(t))iu.call(t,r)&&Kf(e,r,t[r]);return e},Hf=(e,t)=>tu(e,eu(t));const nu="did:pkh:",Lr=e=>e?.split(":"),zi=e=>{const t=e&&Lr(e);if(t)return e.includes(nu)?t[3]:t[1]},fu=e=>{const t=e&&Lr(e);if(t)return t[2]+":"+t[3]},Li=e=>{const t=e&&Lr(e);if(t)return t.pop()};async function ou(e){const{cacao:t,projectId:r}=e,{s:i,p:n}=t,o=zf(n,n.iss),h=Li(n.iss);return await Tf(h,o,i,zi(n.iss),r)}const zf=(e,t)=>{const r=`${e.domain} wants you to sign in with your Ethereum account:`,i=Li(t);if(!e.aud&&!e.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let n=e.statement||void 0;const o=`URI: ${e.aud||e.uri}`,h=`Version: ${e.version}`,p=`Chain ID: ${zi(t)}`,b=`Nonce: ${e.nonce}`,m=`Issued At: ${e.iat}`,w=e.resources?`Resources:${e.resources.map(S=>`
- ${S}`).join("")}`:void 0,y=Qr(e.resources);if(y){const S=Oe(y);n=Ji(n,S)}return[r,i,"",n,"",o,h,p,b,m,w].filter(S=>S!=null).join(`
`)};function su(e,t,r){return r.includes("did:pkh:")||(r=`did:pkh:${r}`),{h:{t:"caip122"},p:{iss:r,domain:e.domain,aud:e.aud,version:e.version,nonce:e.nonce,iat:e.iat,statement:e.statement,requestId:e.requestId,resources:e.resources,nbf:e.nbf,exp:e.exp},s:t}}function au(e){var t;const{authPayload:r,chains:i,methods:n}=e,o=r.statement||"";if(!(i!=null&&i.length))return r;const h=r.chains,p=mi(h,i);if(!(p!=null&&p.length))throw new Error("No supported chains");const b=Lf(r.resources);if(!b)return r;me(b);const m=jf(b,"eip155");let w=r?.resources||[];if(m!=null&&m.length){const y=Qf(m),S=mi(y,n);if(!(S!=null&&S.length))throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(y)}, supported: ${JSON.stringify(n)}`);const I=ji("request",S,{chains:p}),N=Vf(b,"eip155",I);w=((t=r?.resources)==null?void 0:t.slice(0,-1))||[],w.push(jr(N))}return Hf(Hi({},r),{statement:Xf(o,Qr(w)),chains:p,resources:r!=null&&r.resources||w.length>0?w:void 0})}function Lf(e){const t=Qr(e);if(t&&Qi(t))return Oe(t)}function uu(e,t){var r;return(r=e?.att)==null?void 0:r.hasOwnProperty(t)}function jf(e,t){var r,i;return(r=e?.att)!=null&&r[t]?Object.keys((i=e?.att)==null?void 0:i[t]):[]}function hu(e){return e?.map(t=>Object.keys(t))||[]}function Qf(e){return e?.map(t=>{var r;return(r=t.split("/"))==null?void 0:r[1]})||[]}function Jf(e){return Buffer.from(JSON.stringify(e)).toString("base64")}function Gf(e){return JSON.parse(Buffer.from(e,"base64").toString("utf-8"))}function me(e){if(!e)throw new Error("No recap provided, value is undefined");if(!e.att)throw new Error("No `att` property found");const t=Object.keys(e.att);if(!(t!=null&&t.length))throw new Error("No resources found in `att` property");t.forEach(r=>{const i=e.att[r];if(Array.isArray(i))throw new Error(`Resource must be an object: ${r}`);if(typeof i!="object")throw new Error(`Resource must be an object: ${r}`);if(!Object.keys(i).length)throw new Error(`Resource object is empty: ${r}`);Object.keys(i).forEach(n=>{const o=i[n];if(!Array.isArray(o))throw new Error(`Ability limits ${n} must be an array of objects, found: ${o}`);if(!o.length)throw new Error(`Value of ${n} is empty array, must be an array with objects`);o.forEach(h=>{if(typeof h!="object")throw new Error(`Ability limits (${n}) must be an array of objects, found: ${h}`)})})})}function Yf(e,t,r,i={}){return r?.sort((n,o)=>n.localeCompare(o)),{att:{[e]:ji(t,r,i)}}}function Vf(e,t,r){var i;return e.att[t]=Hi({},r),((i=Object.keys(e.att))==null?void 0:i.sort((n,o)=>n.localeCompare(o))).reduce((n,o)=>(n.att[o]=e.att[o],n),{att:{}})}function ji(e,t,r={}){t=t?.sort((n,o)=>n.localeCompare(o));const i=t.map(n=>({[`${e}/${n}`]:[r]}));return Object.assign({},...i)}function jr(e){return me(e),`urn:recap:${Jf(e).replace(/=/g,"")}`}function Oe(e){const t=Gf(e.replace("urn:recap:",""));return me(t),t}function cu(e,t,r){const i=Yf(e,t,r);return jr(i)}function Qi(e){return e&&e.includes("urn:recap:")}function lu(e,t){const r=Oe(e),i=Oe(t),n=Wf(r,i);return jr(n)}function Wf(e,t){me(e),me(t);const r=Object.keys(e.att).concat(Object.keys(t.att)).sort((n,o)=>n.localeCompare(o)),i={att:{}};return r.forEach(n=>{var o,h;Object.keys(((o=e.att)==null?void 0:o[n])||{}).concat(Object.keys(((h=t.att)==null?void 0:h[n])||{})).sort((p,b)=>p.localeCompare(b)).forEach(p=>{var b,m;i.att[n]=Hf(Hi({},i.att[n]),{[p]:((b=e.att[n])==null?void 0:b[p])||((m=t.att[n])==null?void 0:m[p])})})}),i}function Ji(e="",t){me(t);const r="I further authorize the stated URI to perform the following actions on my behalf: ";if(e.includes(r))return e;const i=[];let n=0;Object.keys(t.att).forEach(p=>{const b=Object.keys(t.att[p]).map(y=>({ability:y.split("/")[0],action:y.split("/")[1]}));b.sort((y,S)=>y.action.localeCompare(S.action));const m={};b.forEach(y=>{m[y.ability]||(m[y.ability]=[]),m[y.ability].push(y.action)});const w=Object.keys(m).map(y=>(n++,`(${n}) '${y}': '${m[y].join("', '")}' for '${p}'.`));i.push(w.join(", ").replace(".,","."))});const o=i.join(" "),h=`${r}${o}`;return`${e?e+" ":""}${h}`}function du(e){var t;const r=Oe(e);me(r);const i=(t=r.att)==null?void 0:t.eip155;return i?Object.keys(i).map(n=>n.split("/")[1]):[]}function pu(e){const t=Oe(e);me(t);const r=[];return Object.values(t.att).forEach(i=>{Object.values(i).forEach(n=>{var o;(o=n?.[0])!=null&&o.chains&&r.push(n[0].chains)})}),[...new Set(r.flat())]}function Xf(e,t){if(!t)return e;const r=Oe(t);return me(r),Ji(e,r)}function Qr(e){if(!e)return;const t=e?.[e.length-1];return Qi(t)?t:void 0}const Gi="base10",zt="base16",Jr="base64pad",Gr="utf8",Yi=0,lr=1,vu=0,Zf=1,Vi=12,Wi=32;function mu(){const e=x25519/* generateKeyPair */.TZ();return{privateKey:to_string_toString(e.secretKey,zt),publicKey:to_string_toString(e.publicKey,zt)}}function gu(){const e=(0,random.randomBytes)(Wi);return to_string_toString(e,zt)}function Au(e,t){const r=x25519/* sharedKey */.Tc(from_string_fromString(e,zt),from_string_fromString(t,zt),!0),i=new hkdf/* HKDF */.i(sha256/* SHA256 */.aD,r).expand(Wi);return to_string_toString(i,zt)}function bu(e){const t=(0,sha256/* hash */.tW)(from_string_fromString(e,zt));return to_string_toString(t,zt)}function yu(e){const t=(0,sha256/* hash */.tW)(from_string_fromString(e,Gr));return to_string_toString(t,zt)}function $f(e){return from_string_fromString(`${e}`,Gi)}function Mr(e){return Number(to_string_toString(e,Gi))}function wu(e){const t=$f(typeof e.type<"u"?e.type:Yi);if(Mr(t)===lr&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof e.senderPublicKey<"u"?from_string_fromString(e.senderPublicKey,zt):void 0,i=typeof e.iv<"u"?from_string_fromString(e.iv,zt):(0,random.randomBytes)(Vi),n=new chacha20poly1305/* ChaCha20Poly1305 */.g6(from_string_fromString(e.symKey,zt)).seal(i,from_string_fromString(e.message,Gr));return to({type:t,sealed:n,iv:i,senderPublicKey:r})}function xu(e){const t=new chacha20poly1305/* ChaCha20Poly1305 */.g6(from_string_fromString(e.symKey,zt)),{sealed:r,iv:i}=Xi(e.encoded),n=t.open(i,r);if(n===null)throw new Error("Failed to decrypt");return to_string_toString(n,Gr)}function to(e){if(Mr(e.type)===lr){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return to_string_toString(concat([e.type,e.senderPublicKey,e.iv,e.sealed]),Jr)}return to_string_toString(concat([e.type,e.iv,e.sealed]),Jr)}function Xi(e){const t=from_string_fromString(e,Jr),r=t.slice(vu,Zf),i=Zf;if(Mr(r)===lr){const p=i+Wi,b=p+Vi,m=t.slice(i,p),w=t.slice(p,b),y=t.slice(b);return{type:r,sealed:y,iv:w,senderPublicKey:m}}const n=i+Vi,o=t.slice(i,n),h=t.slice(n);return{type:r,sealed:h,iv:o}}function Mu(e,t){const r=Xi(e);return eo({type:Mr(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?to_string_toString(r.senderPublicKey,zt):void 0,receiverPublicKey:t?.receiverPublicKey})}function eo(e){const t=e?.type||Yi;if(t===lr){if(typeof e?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function Eu(e){return e.type===lr&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}const ro="irn";function Su(e){return e?.relay||{protocol:ro}}function Nu(e){const t=C[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var Iu=Object.defineProperty,_u=Object.defineProperties,Bu=Object.getOwnPropertyDescriptors,io=Object.getOwnPropertySymbols,Cu=Object.prototype.hasOwnProperty,Ru=Object.prototype.propertyIsEnumerable,no=(e,t,r)=>t in e?Iu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fo=(e,t)=>{for(var r in t||(t={}))Cu.call(t,r)&&no(e,r,t[r]);if(io)for(var r of io(t))Ru.call(t,r)&&no(e,r,t[r]);return e},Ou=(e,t)=>_u(e,Bu(t));function oo(e,t="-"){const r={},i="relay"+t;return Object.keys(e).forEach(n=>{if(n.startsWith(i)){const o=n.replace(i,""),h=e[n];r[o]=h}}),r}function Pu(e){e=e.includes("wc://")?e.replace("wc://",""):e,e=e.includes("wc:")?e.replace("wc:",""):e;const t=e.indexOf(":"),r=e.indexOf("?")!==-1?e.indexOf("?"):void 0,i=e.substring(0,t),n=e.substring(t+1,r).split("@"),o=typeof r<"u"?e.substring(r):"",h=query_string.parse(o),p=typeof h.methods=="string"?h.methods.split(","):void 0;return{protocol:i,topic:so(n[0]),version:parseInt(n[1],10),symKey:h.symKey,relay:oo(h),methods:p,expiryTimestamp:h.expiryTimestamp?parseInt(h.expiryTimestamp,10):void 0}}function so(e){return e.startsWith("//")?e.substring(2):e}function ao(e,t="-"){const r="relay",i={};return Object.keys(e).forEach(n=>{const o=r+t+n;e[n]&&(i[o]=e[n])}),i}function Du(e){return`${e.protocol}:${e.topic}@${e.version}?`+query_string.stringify(fo(Ou(fo({symKey:e.symKey},ao(e.relay)),{expiryTimestamp:e.expiryTimestamp}),e.methods?{methods:e.methods.join(",")}:{}))}var Fu=Object.defineProperty,Tu=Object.defineProperties,Uu=Object.getOwnPropertyDescriptors,uo=Object.getOwnPropertySymbols,ku=Object.prototype.hasOwnProperty,qu=Object.prototype.propertyIsEnumerable,ho=(e,t,r)=>t in e?Fu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ku=(e,t)=>{for(var r in t||(t={}))ku.call(t,r)&&ho(e,r,t[r]);if(uo)for(var r of uo(t))qu.call(t,r)&&ho(e,r,t[r]);return e},Hu=(e,t)=>Tu(e,Uu(t));function $e(e){const t=[];return e.forEach(r=>{const[i,n]=r.split(":");t.push(`${i}:${n}`)}),t}function co(e){const t=[];return Object.values(e).forEach(r=>{t.push(...$e(r.accounts))}),t}function lo(e,t){const r=[];return Object.values(e).forEach(i=>{$e(i.accounts).includes(t)&&r.push(...i.methods)}),r}function po(e,t){const r=[];return Object.values(e).forEach(i=>{$e(i.accounts).includes(t)&&r.push(...i.events)}),r}function zu(e,t){const r=So(e,t);if(r)throw new Error(r.message);const i={};for(const[n,o]of Object.entries(e))i[n]={methods:o.methods,events:o.events,chains:o.accounts.map(h=>`${h.split(":")[0]}:${h.split(":")[1]}`)};return i}function Lu(e){const{proposal:{requiredNamespaces:t,optionalNamespaces:r={}},supportedNamespaces:i}=e,n=$i(t),o=$i(r),h={};Object.keys(i).forEach(m=>{const w=i[m].chains,y=i[m].methods,S=i[m].events,I=i[m].accounts;w.forEach(N=>{if(!I.some(C=>C.includes(N)))throw new Error(`No accounts provided for chain ${N} in namespace ${m}`)}),h[m]={chains:w,methods:y,events:S,accounts:I}});const p=Io(t,h,"approve()");if(p)throw new Error(p.message);const b={};return!Object.keys(t).length&&!Object.keys(r).length?h:(Object.keys(n).forEach(m=>{const w=i[m].chains.filter(N=>{var C,F;return(F=(C=n[m])==null?void 0:C.chains)==null?void 0:F.includes(N)}),y=i[m].methods.filter(N=>{var C,F;return(F=(C=n[m])==null?void 0:C.methods)==null?void 0:F.includes(N)}),S=i[m].events.filter(N=>{var C,F;return(F=(C=n[m])==null?void 0:C.events)==null?void 0:F.includes(N)}),I=w.map(N=>i[m].accounts.filter(C=>C.includes(`${N}:`))).flat();b[m]={chains:w,methods:y,events:S,accounts:I}}),Object.keys(o).forEach(m=>{var w,y,S,I,N,C;if(!i[m])return;const F=(y=(w=o[m])==null?void 0:w.chains)==null?void 0:y.filter(G=>i[m].chains.includes(G)),U=i[m].methods.filter(G=>{var H,z;return(z=(H=o[m])==null?void 0:H.methods)==null?void 0:z.includes(G)}),J=i[m].events.filter(G=>{var H,z;return(z=(H=o[m])==null?void 0:H.events)==null?void 0:z.includes(G)}),Bt=F?.map(G=>i[m].accounts.filter(H=>H.includes(`${G}:`))).flat();b[m]={chains:ge((S=b[m])==null?void 0:S.chains,F),methods:ge((I=b[m])==null?void 0:I.methods,U),events:ge((N=b[m])==null?void 0:N.events,J),accounts:ge((C=b[m])==null?void 0:C.accounts,Bt)}}),b)}function Zi(e){return e.includes(":")}function vo(e){return Zi(e)?e.split(":")[0]:e}function $i(e){var t,r,i;const n={};if(!Yr(e))return n;for(const[o,h]of Object.entries(e)){const p=Zi(o)?[o]:h.chains,b=h.methods||[],m=h.events||[],w=vo(o);n[w]=Hu(Ku({},n[w]),{chains:ge(p,(t=n[w])==null?void 0:t.chains),methods:ge(b,(r=n[w])==null?void 0:r.methods),events:ge(m,(i=n[w])==null?void 0:i.events)})}return n}function mo(e){const t={};return e?.forEach(r=>{const[i,n]=r.split(":");t[i]||(t[i]={accounts:[],chains:[],events:[]}),t[i].accounts.push(r),t[i].chains.push(`${i}:${n}`)}),t}function ju(e,t){t=t.map(i=>i.replace("did:pkh:",""));const r=mo(t);for(const[i,n]of Object.entries(r))n.methods?n.methods=ge(n.methods,e):n.methods=e,n.events=["chainChanged","accountsChanged"];return r}const go={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},Ao={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function xe(e,t){const{message:r,code:i}=Ao[e];return{message:t?`${r} ${t}`:r,code:i}}function tr(e,t){const{message:r,code:i}=go[e];return{message:t?`${r} ${t}`:r,code:i}}function Er(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function Yr(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function Pe(e){return typeof e>"u"}function Gt(e,t){return t&&Pe(e)?!0:typeof e=="string"&&!!e.trim().length}function Vr(e,t){return t&&Pe(e)?!0:typeof e=="number"&&!isNaN(e)}function Qu(e,t){const{requiredNamespaces:r}=t,i=Object.keys(e.namespaces),n=Object.keys(r);let o=!0;return _e(n,i)?(i.forEach(h=>{const{accounts:p,methods:b,events:m}=e.namespaces[h],w=$e(p),y=r[h];(!_e(_r(h,y),w)||!_e(y.methods,b)||!_e(y.events,m))&&(o=!1)}),o):!1}function Sr(e){return Gt(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function bo(e){if(Gt(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const r=t[0]+":"+t[1];return!!t[2]&&Sr(r)}}return!1}function Ju(e){if(Gt(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function Gu(e){var t;return(t=e?.proposer)==null?void 0:t.publicKey}function Yu(e){return e?.topic}function Vu(e,t){let r=null;return Gt(e?.publicKey,!1)||(r=xe("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function tn(e){let t=!0;return Er(e)?e.length&&(t=e.every(r=>Gt(r,!1))):t=!1,t}function yo(e,t,r){let i=null;return Er(t)&&t.length?t.forEach(n=>{i||Sr(n)||(i=tr("UNSUPPORTED_CHAINS",`${r}, chain ${n} should be a string and conform to "namespace:chainId" format`))}):Sr(e)||(i=tr("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),i}function wo(e,t,r){let i=null;return Object.entries(e).forEach(([n,o])=>{if(i)return;const h=yo(n,_r(n,o),`${t} ${r}`);h&&(i=h)}),i}function xo(e,t){let r=null;return Er(e)?e.forEach(i=>{r||bo(i)||(r=tr("UNSUPPORTED_ACCOUNTS",`${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`))}):r=tr("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}function Mo(e,t){let r=null;return Object.values(e).forEach(i=>{if(r)return;const n=xo(i?.accounts,`${t} namespace`);n&&(r=n)}),r}function Eo(e,t){let r=null;return tn(e?.methods)?tn(e?.events)||(r=tr("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):r=tr("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),r}function en(e,t){let r=null;return Object.values(e).forEach(i=>{if(r)return;const n=Eo(i,`${t}, namespace`);n&&(r=n)}),r}function Wu(e,t,r){let i=null;if(e&&Yr(e)){const n=en(e,t);n&&(i=n);const o=wo(e,t,r);o&&(i=o)}else i=xe("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return i}function So(e,t){let r=null;if(e&&Yr(e)){const i=en(e,t);i&&(r=i);const n=Mo(e,t);n&&(r=n)}else r=xe("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function No(e){return Gt(e.protocol,!0)}function Xu(e,t){let r=!1;return t&&!e?r=!0:e&&Er(e)&&e.length&&e.forEach(i=>{r=No(i)}),r}function Zu(e){return typeof e=="number"}function $u(e){return typeof e<"u"&&typeof e!==null}function th(e){return!(!e||typeof e!="object"||!e.code||!Vr(e.code,!1)||!e.message||!Gt(e.message,!1))}function eh(e){return!(Pe(e)||!Gt(e.method,!1))}function rh(e){return!(Pe(e)||Pe(e.result)&&Pe(e.error)||!Vr(e.id,!1)||!Gt(e.jsonrpc,!1))}function ih(e){return!(Pe(e)||!Gt(e.name,!1))}function nh(e,t){return!(!Sr(t)||!co(e).includes(t))}function fh(e,t,r){return Gt(r,!1)?lo(e,t).includes(r):!1}function oh(e,t,r){return Gt(r,!1)?po(e,t).includes(r):!1}function Io(e,t,r){let i=null;const n=sh(e),o=ah(t),h=Object.keys(n),p=Object.keys(o),b=_o(Object.keys(e)),m=_o(Object.keys(t)),w=b.filter(y=>!m.includes(y));return w.length&&(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w.toString()}
      Received: ${Object.keys(t).toString()}`)),_e(h,p)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${p.toString()}`)),Object.keys(t).forEach(y=>{if(!y.includes(":")||i)return;const S=$e(t[y].accounts);S.includes(y)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${S.toString()}`))}),h.forEach(y=>{i||(_e(n[y].methods,o[y].methods)?_e(n[y].events,o[y].events)||(i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${y}`)):i=xe("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${y}`))}),i}function sh(e){const t={};return Object.keys(e).forEach(r=>{var i;r.includes(":")?t[r]=e[r]:(i=e[r].chains)==null||i.forEach(n=>{t[n]={methods:e[r].methods,events:e[r].events}})}),t}function _o(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function ah(e){const t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else{const i=$e(e[r].accounts);i?.forEach(n=>{t[n]={accounts:e[r].accounts.filter(o=>o.includes(`${n}:`)),methods:e[r].methods,events:e[r].events}})}}),t}function uh(e,t){return Vr(e,!1)&&e<=t.max&&e>=t.min}function hh(){const e=We();return new Promise(t=>{switch(e){case qt.browser:t(Bo());break;case qt.reactNative:t(Co());break;case qt.node:t(Ro());break;default:t(!0)}})}function Bo(){return pr()&&navigator?.onLine}async function Co(){if(er()&&typeof global<"u"&&global!=null&&global.NetInfo){const e=await(global==null?void 0:global.NetInfo.fetch());return e?.isConnected}return!0}function Ro(){return!0}function ch(e){switch(We()){case qt.browser:Oo(e);break;case qt.reactNative:Po(e);break;case qt.node:break}}function Oo(e){!er()&&pr()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function Po(e){er()&&typeof global<"u"&&global!=null&&global.NetInfo&&global?.NetInfo.addEventListener(t=>e(t?.isConnected))}const rn={};class lh{static get(t){return rn[t]}static set(t,r){rn[t]=r}static delete(t){delete rn[t]}}
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



;// CONCATENATED MODULE: ./node_modules/unstorage/dist/shared/unstorage.8581f561.mjs
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
  if (typeof Buffer === void 0) {
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
  base = unstorage_8581f561_normalizeBaseKey(base);
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
function unstorage_8581f561_normalizeBaseKey(base) {
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
    options: {},
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
      return Array.from(data.keys());
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
      base = unstorage_8581f561_normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = unstorage_8581f561_normalizeBaseKey(base);
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
      base = unstorage_8581f561_normalizeBaseKey(base);
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
      base = unstorage_8581f561_normalizeBaseKey(base);
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
    }
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
function esm_safeJsonParse(value) {
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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
function index_es_C(i){return i}const x="idb-keyval";var z=(i={})=>{const t=i.base&&i.base.length>0?`${i.base}:`:"",e=s=>t+s;let n;return i.dbName&&i.storeName&&(n=createStore(i.dbName,i.storeName)),{name:x,options:i,async hasItem(s){return!(typeof await get(e(s),n)>"u")},async getItem(s){return await get(e(s),n)??null},setItem(s,a){return set(e(s),a,n)},removeItem(s){return del(e(s),n)},getKeys(){return keys(n)},clear(){return clear(n)}}};const D="WALLET_CONNECT_V2_INDEXED_DB",index_es_E="keyvaluestorage";class index_es_{constructor(){this.indexedDb=createStorage({driver:z({dbName:D,storeName:index_es_E})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key,t.value])}async getItem(t){const e=await this.indexedDb.getItem(t);if(e!==null)return e}async setItem(t,e){await this.indexedDb.setItem(t,safeJsonStringify(e))}async removeItem(t){await this.indexedDb.removeItem(t)}}var index_es_l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},index_es_c={exports:{}};(function(){let i;function t(){}i=t,i.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},i.prototype.setItem=function(e,n){this[e]=String(n)},i.prototype.removeItem=function(e){delete this[e]},i.prototype.clear=function(){const e=this;Object.keys(e).forEach(function(n){e[n]=void 0,delete e[n]})},i.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},i.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof index_es_l<"u"&&index_es_l.localStorage?index_es_c.exports=index_es_l.localStorage:typeof window<"u"&&window.localStorage?index_es_c.exports=window.localStorage:index_es_c.exports=new t})();function index_es_k(i){var t;return[i[0],esm_safeJsonParse((t=i[1])!=null?t:"")]}class index_es_K{constructor(){this.localStorage=index_es_c.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(index_es_k)}async getItem(t){const e=this.localStorage.getItem(t);if(e!==null)return esm_safeJsonParse(e)}async setItem(t,e){this.localStorage.setItem(t,safeJsonStringify(e))}async removeItem(t){this.localStorage.removeItem(t)}}const N="wc_storage_version",y=1,O=async(i,t,e)=>{const n=N,s=await t.getItem(n);if(s&&s>=y){e(t);return}const a=await i.getKeys();if(!a.length){e(t);return}const m=[];for(;a.length;){const r=a.shift();if(!r)continue;const o=r.toLowerCase();if(o.includes("wc@")||o.includes("walletconnect")||o.includes("wc_")||o.includes("wallet_connect")){const f=await i.getItem(r);await t.setItem(r,f),m.push(r)}}await t.setItem(n,y),e(t),index_es_j(i,m)},index_es_j=async(i,t)=>{t.length&&t.forEach(async e=>{await i.removeItem(e)})};class index_es_h{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const t=new index_es_K;this.storage=t;try{const e=new index_es_;O(t,e,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(t){return await this.initialize(),this.storage.getItem(t)}async setItem(t,e){return await this.initialize(),this.storage.setItem(t,e)}async removeItem(t){return await this.initialize(),this.storage.removeItem(t)}async initialize(){this.initialized||await new Promise(t=>{const e=setInterval(()=>{this.initialized&&(clearInterval(e),t())},20)})}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/events/dist/esm/events.js
class IEvents {
}
//# sourceMappingURL=events.js.map
;// CONCATENATED MODULE: ./node_modules/@walletconnect/heartbeat/dist/index.es.js
class index_es_n extends IEvents{constructor(e){super()}}const s=cjs.FIVE_SECONDS,r={pulse:"heartbeat_pulse"};class index_es_i extends index_es_n{constructor(e){super(e),this.events=new external_events_.EventEmitter,this.interval=s,this.interval=e?.interval||s}static async init(e){const t=new index_es_i(e);return await t.init(),t}async init(){await this.initialize()}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async initialize(){this.intervalRef=setInterval(()=>this.pulse(),(0,cjs.toMiliseconds)(this.interval))}pulse(){this.events.emit(r.pulse)}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/pino/pino.js
var pino = __webpack_require__(894308);
var pino_default = /*#__PURE__*/__webpack_require__.n(pino);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/logger/dist/index.es.js
const dist_index_es_c={level:"info"},dist_index_es_n="custom_context",dist_index_es_l=1e3*1024;class index_es_O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class index_es_d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const t=new index_es_O(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const t=e.value;return e=e.next,{done:!1,value:t}}}}}class index_es_L{constructor(e,t=dist_index_es_l){this.level=e??"error",this.levelValue=pino.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new index_es_d(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,t){t===pino.levels.values.error?console.error(e):t===pino.levels.values.warn?console.warn(e):t===pino.levels.values.debug?console.debug(e):t===pino.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(safeJsonStringify({timestamp:new Date().toISOString(),log:e}));const t=typeof e=="string"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new index_es_d(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push(safeJsonStringify({extraMetadata:e})),new Blob(t,{type:"application/json"})}}class index_es_m{constructor(e,t=dist_index_es_l){this.baseChunkLogger=new index_es_L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}}class B{constructor(e,t=dist_index_es_l){this.baseChunkLogger=new index_es_L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var index_es_x=Object.defineProperty,index_es_S=Object.defineProperties,dist_index_es_=Object.getOwnPropertyDescriptors,index_es_p=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,index_es_z=Object.prototype.propertyIsEnumerable,index_es_f=(r,e,t)=>e in r?index_es_x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&index_es_f(r,t,e[t]);if(index_es_p)for(var t of index_es_p(e))index_es_z.call(e,t)&&index_es_f(r,t,e[t]);return r},index_es_g=(r,e)=>index_es_S(r,dist_index_es_(e));function dist_index_es_k(r){return index_es_g(i({},r),{level:r?.level||dist_index_es_c.level})}function v(r,e=dist_index_es_n){return r[e]||""}function index_es_b(r,e,t=dist_index_es_n){return r[t]=e,r}function index_es_y(r,e=dist_index_es_n){let t="";return typeof r.bindings>"u"?t=v(r,e):t=r.bindings().context||"",t}function index_es_w(r,e,t=dist_index_es_n){const o=index_es_y(r,t);return o.trim()?`${o}/${e}`:e}function dist_index_es_E(r,e,t=dist_index_es_n){const o=index_es_w(r,e,t),a=r.child({context:o});return index_es_b(a,o,t)}function dist_index_es_C(r){var e,t;const o=new index_es_m((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino_default()(index_es_g(i({},r.opts),{level:"trace",browser:index_es_g(i({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I(r){var e;const t=new B((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino_default()(index_es_g(i({},r.opts),{level:"trace"}),t),chunkLoggerController:t}}function A(r){return typeof r.loggerOverride<"u"&&typeof r.loggerOverride!="string"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<"u"?dist_index_es_C(r):I(r)}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/types/dist/index.es.js
class types_dist_index_es_n extends IEvents{constructor(s){super(),this.opts=s,this.protocol="wc",this.version=2}}class types_dist_index_es_l{constructor(s,t,o){this.core=s,this.logger=t}}class dist_index_es_h extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t,this.records=new Map}}class index_es_a{constructor(s,t){this.logger=s,this.core=t}}class index_es_u extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t}}class dist_index_es_g extends IEvents{constructor(s){super()}}class dist_index_es_p{constructor(s,t,o,M){this.core=s,this.logger=t,this.name=o}}class index_es_I{constructor(){this.map=new Map}}class dist_index_es_d extends IEvents{constructor(s,t){super(),this.relayer=s,this.logger=t}}class dist_index_es_x{constructor(s,t){this.core=s,this.logger=t}}class types_dist_index_es_E extends IEvents{constructor(s,t){super(),this.core=s,this.logger=t}}class dist_index_es_m{constructor(s,t){this.logger=s,this.core=t}}class dist_index_es_y{constructor(s,t){this.projectId=s,this.logger=t}}class index_es_v{constructor(s,t){this.projectId=s,this.logger=t}}class types_dist_index_es_C extends (external_events_default()){constructor(){super()}}class dist_index_es_b{constructor(s){this.opts=s,this.protocol="wc",this.version=2}}class dist_index_es_S extends external_events_.EventEmitter{constructor(){super()}}class dist_index_es_w{constructor(s){this.client=s}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/@stablelib/ed25519/lib/ed25519.js
var lib_ed25519 = __webpack_require__(934904);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/dist/esm/constants.js
const constants_JWT_IRIDIUM_ALG = "EdDSA";
const constants_JWT_IRIDIUM_TYP = "JWT";
const constants_JWT_DELIMITER = ".";
const constants_JWT_ENCODING = "base64url";
const constants_JSON_ENCODING = "utf8";
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
;// CONCATENATED MODULE: ./node_modules/@walletconnect/relay-auth/dist/esm/utils.js





function decodeJSON(str) {
    return safeJsonParse(toString(fromString(str, JWT_ENCODING), JSON_ENCODING));
}
function encodeJSON(val) {
    return src_to_string_toString(src_from_string_fromString(safeJsonStringify(val), constants_JSON_ENCODING), constants_JWT_ENCODING);
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
    return src_to_string_toString(bytes, constants_JWT_ENCODING);
}
function decodeSig(encoded) {
    return fromString(encoded, JWT_ENCODING);
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
    const params = jwt.split(JWT_DELIMITER);
    const header = decodeJSON(params[0]);
    const payload = decodeJSON(params[1]);
    const signature = decodeSig(params[2]);
    const data = fromString(params.slice(0, 2).join(JWT_DELIMITER), DATA_ENCODING);
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
class dist_index_es_o extends index_es_r{constructor(t){super(t),this.events=new external_events_.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict(formatJsonRpcRequest(t.method,t.params||[],t.id||getBigIntRpcId().toString()),e)}async requestStrict(t,e){return new Promise(async(i,s)=>{if(!this.connection.connected)try{await this.open()}catch(n){s(n)}this.events.on(`${t.id}`,n=>{isJsonRpcError(n)?s(n.error):i(n.result)});try{await this.connection.send(t,e)}catch(n){s(n)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),isJsonRpcResponse(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect")}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0)}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
const jsonrpc_ws_connection_dist_index_es_w=()=>typeof WebSocket<"u"?WebSocket:typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:__webpack_require__(792784),jsonrpc_ws_connection_dist_index_es_b=()=>typeof WebSocket<"u"||typeof global<"u"&&typeof global.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",dist_index_es_a=c=>c.split("?")[0],jsonrpc_ws_connection_dist_index_es_h=10,jsonrpc_ws_connection_dist_index_es_S=jsonrpc_ws_connection_dist_index_es_w();class dist_index_es_f{constructor(e){if(this.url=e,this.events=new external_events_.EventEmitter,this.registering=!1,!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,t)=>{if(typeof this.socket>"u"){t(new Error("Connection already closed"));return}this.socket.onclose=n=>{this.onClose(n),e()},this.socket.close()})}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send(safeJsonStringify(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!isWsUrl(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=t||this.events.listenerCount("open")>=t)&&this.events.setMaxListeners(t+1),new Promise((n,o)=>{this.events.once("register_error",s=>{this.resetMaxListeners(),o(s)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return o(new Error("WebSocket connection is missing or invalid"));n(this.socket)})})}return this.url=e,this.registering=!0,new Promise((t,n)=>{const o=new URLSearchParams(e).get("origin"),s=(0,environment_dist_cjs.isReactNative)()?{headers:{origin:o}}:{rejectUnauthorized:!isLocalhostUrl(e)},i=new jsonrpc_ws_connection_dist_index_es_S(e,[],s);jsonrpc_ws_connection_dist_index_es_b()?i.onerror=r=>{const l=r;n(this.emitError(l.error))}:i.on("error",r=>{n(this.emitError(r))}),i.onopen=()=>{this.onOpen(i),t(i)}})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t=typeof e.data=="string"?esm_safeJsonParse(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const n=this.parseError(t),o=n.message||n.toString(),s=formatJsonRpcError(e,o);this.events.emit("payload",s)}parseError(e,t=this.url){return parseConnectionError(e,dist_index_es_a(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>jsonrpc_ws_connection_dist_index_es_h&&this.events.setMaxListeners(jsonrpc_ws_connection_dist_index_es_h)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${dist_index_es_a(this.url)}`));return this.events.emit("register_error",t),t}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(908142);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);
// EXTERNAL MODULE: ./node_modules/isomorphic-unfetch/index.js
var isomorphic_unfetch = __webpack_require__(735016);
var isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/core/dist/index.es.js
function index_es_Hi(o,e){if(o.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),i=0;i<t.length;i++)t[i]=255;for(var s=0;s<o.length;s++){var r=o.charAt(s),n=r.charCodeAt(0);if(t[n]!==255)throw new TypeError(r+" is ambiguous");t[n]=s}var a=o.length,h=o.charAt(0),l=Math.log(a)/Math.log(256),d=Math.log(256)/Math.log(a);function g(u){if(u instanceof Uint8Array||(ArrayBuffer.isView(u)?u=new Uint8Array(u.buffer,u.byteOffset,u.byteLength):Array.isArray(u)&&(u=Uint8Array.from(u))),!(u instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(u.length===0)return"";for(var p=0,T=0,D=0,P=u.length;D!==P&&u[D]===0;)D++,p++;for(var x=(P-D)*d+1>>>0,w=new Uint8Array(x);D!==P;){for(var O=u[D],N=0,_=x-1;(O!==0||N<T)&&_!==-1;_--,N++)O+=256*w[_]>>>0,w[_]=O%a>>>0,O=O/a>>>0;if(O!==0)throw new Error("Non-zero carry");T=N,D++}for(var A=x-T;A!==x&&w[A]===0;)A++;for(var G=h.repeat(p);A<x;++A)G+=o.charAt(w[A]);return G}function m(u){if(typeof u!="string")throw new TypeError("Expected String");if(u.length===0)return new Uint8Array;var p=0;if(u[p]!==" "){for(var T=0,D=0;u[p]===h;)T++,p++;for(var P=(u.length-p)*l+1>>>0,x=new Uint8Array(P);u[p];){var w=t[u.charCodeAt(p)];if(w===255)return;for(var O=0,N=P-1;(w!==0||O<D)&&N!==-1;N--,O++)w+=a*x[N]>>>0,x[N]=w%256>>>0,w=w/256>>>0;if(w!==0)throw new Error("Non-zero carry");D=O,p++}if(u[p]!==" "){for(var _=P-D;_!==P&&x[_]===0;)_++;for(var A=new Uint8Array(T+(P-_)),G=T;_!==P;)A[G++]=x[_++];return A}}}function L(u){var p=m(u);if(p)return p;throw new Error(`Non-${e} character`)}return{encode:g,decodeUnsafe:m,decode:L}}var index_es_Ji=index_es_Hi,index_es_Xi=index_es_Ji;const Ue=o=>{if(o instanceof Uint8Array&&o.constructor.name==="Uint8Array")return o;if(o instanceof ArrayBuffer)return new Uint8Array(o);if(ArrayBuffer.isView(o))return new Uint8Array(o.buffer,o.byteOffset,o.byteLength);throw new Error("Unknown type, must be binary type")},index_es_Wi=o=>new TextEncoder().encode(o),index_es_Qi=o=>new TextDecoder().decode(o);class index_es_Zi{constructor(e,t,i){this.name=e,this.prefix=t,this.baseEncode=i}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class index_es_es{constructor(e,t,i){if(this.name=e,this.prefix=t,t.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=i}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return Fe(this,e)}}class index_es_ts{constructor(e){this.decoders=e}or(e){return Fe(this,e)}decode(e){const t=e[0],i=this.decoders[t];if(i)return i.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const Fe=(o,e)=>new index_es_ts({...o.decoders||{[o.prefix]:o},...e.decoders||{[e.prefix]:e}});class index_es_is{constructor(e,t,i,s){this.name=e,this.prefix=t,this.baseEncode=i,this.baseDecode=s,this.encoder=new index_es_Zi(e,t,i),this.decoder=new index_es_es(e,t,s)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const index_es_Q=({name:o,prefix:e,encode:t,decode:i})=>new index_es_is(o,e,t,i),index_es_V=({prefix:o,name:e,alphabet:t})=>{const{encode:i,decode:s}=index_es_Xi(t,e);return index_es_Q({prefix:o,name:e,encode:i,decode:r=>Ue(s(r))})},index_es_ss=(o,e,t,i)=>{const s={};for(let d=0;d<e.length;++d)s[e[d]]=d;let r=o.length;for(;o[r-1]==="=";)--r;const n=new Uint8Array(r*t/8|0);let a=0,h=0,l=0;for(let d=0;d<r;++d){const g=s[o[d]];if(g===void 0)throw new SyntaxError(`Non-${i} character`);h=h<<t|g,a+=t,a>=8&&(a-=8,n[l++]=255&h>>a)}if(a>=t||255&h<<8-a)throw new SyntaxError("Unexpected end of data");return n},index_es_rs=(o,e,t)=>{const i=e[e.length-1]==="=",s=(1<<t)-1;let r="",n=0,a=0;for(let h=0;h<o.length;++h)for(a=a<<8|o[h],n+=8;n>t;)n-=t,r+=e[s&a>>n];if(n&&(r+=e[s&a<<t-n]),i)for(;r.length*t&7;)r+="=";return r},core_dist_index_es_y=({name:o,prefix:e,bitsPerChar:t,alphabet:i})=>index_es_Q({prefix:e,name:o,encode(s){return index_es_rs(s,i,t)},decode(s){return index_es_ss(s,i,t,o)}}),index_es_ns=index_es_Q({prefix:"\0",name:"identity",encode:o=>index_es_Qi(o),decode:o=>index_es_Wi(o)});var index_es_os=Object.freeze({__proto__:null,identity:index_es_ns});const index_es_as=core_dist_index_es_y({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var index_es_hs=Object.freeze({__proto__:null,base2:index_es_as});const index_es_cs=core_dist_index_es_y({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var index_es_ls=Object.freeze({__proto__:null,base8:index_es_cs});const index_es_us=index_es_V({prefix:"9",name:"base10",alphabet:"0123456789"});var index_es_ds=Object.freeze({__proto__:null,base10:index_es_us});const index_es_gs=core_dist_index_es_y({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),index_es_ps=core_dist_index_es_y({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var index_es_Ds=Object.freeze({__proto__:null,base16:index_es_gs,base16upper:index_es_ps});const index_es_ys=core_dist_index_es_y({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),index_es_ms=core_dist_index_es_y({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),index_es_bs=core_dist_index_es_y({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),index_es_fs=core_dist_index_es_y({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),index_es_Es=core_dist_index_es_y({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),index_es_ws=core_dist_index_es_y({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),index_es_vs=core_dist_index_es_y({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),index_es_Is=core_dist_index_es_y({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),index_es_Cs=core_dist_index_es_y({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var index_es_Ts=Object.freeze({__proto__:null,base32:index_es_ys,base32upper:index_es_ms,base32pad:index_es_bs,base32padupper:index_es_fs,base32hex:index_es_Es,base32hexupper:index_es_ws,base32hexpad:index_es_vs,base32hexpadupper:index_es_Is,base32z:index_es_Cs});const index_es_s=index_es_V({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),index_es_Rs=index_es_V({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var index_es_Ss=Object.freeze({__proto__:null,base36:index_es_s,base36upper:index_es_Rs});const index_es_Ps=index_es_V({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),index_es_xs=index_es_V({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var index_es_Os=Object.freeze({__proto__:null,base58btc:index_es_Ps,base58flickr:index_es_xs});const index_es_As=core_dist_index_es_y({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),index_es_zs=core_dist_index_es_y({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),index_es_Ns=core_dist_index_es_y({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),index_es_Ls=core_dist_index_es_y({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var index_es_Us=Object.freeze({__proto__:null,base64:index_es_As,base64pad:index_es_zs,base64url:index_es_Ns,base64urlpad:index_es_Ls});const index_es_$e=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),index_es_Fs=index_es_$e.reduce((o,e,t)=>(o[t]=e,o),[]),index_es_$s=index_es_$e.reduce((o,e,t)=>(o[e.codePointAt(0)]=t,o),[]);function index_es_Bs(o){return o.reduce((e,t)=>(e+=index_es_Fs[t],e),"")}function index_es_Ms(o){const e=[];for(const t of o){const i=index_es_$s[t.codePointAt(0)];if(i===void 0)throw new Error(`Non-base256emoji character: ${t}`);e.push(i)}return new Uint8Array(e)}const index_es_ks=index_es_Q({prefix:"\u{1F680}",name:"base256emoji",encode:index_es_Bs,decode:index_es_Ms});var index_es_Ks=Object.freeze({__proto__:null,base256emoji:index_es_ks}),index_es_Vs=Me,index_es_Be=128,index_es_qs=127,index_es_js=~index_es_qs,index_es_Gs=Math.pow(2,31);function Me(o,e,t){e=e||[],t=t||0;for(var i=t;o>=index_es_Gs;)e[t++]=o&255|index_es_Be,o/=128;for(;o&index_es_js;)e[t++]=o&255|index_es_Be,o>>>=7;return e[t]=o|0,Me.bytes=t-i+1,e}var index_es_Ys=index_es_de,index_es_Hs=128,ke=127;function index_es_de(o,i){var t=0,i=i||0,s=0,r=i,n,a=o.length;do{if(r>=a)throw index_es_de.bytes=0,new RangeError("Could not decode varint");n=o[r++],t+=s<28?(n&ke)<<s:(n&ke)*Math.pow(2,s),s+=7}while(n>=index_es_Hs);return index_es_de.bytes=r-i,t}var index_es_Js=Math.pow(2,7),index_es_Xs=Math.pow(2,14),index_es_Ws=Math.pow(2,21),index_es_Qs=Math.pow(2,28),index_es_Zs=Math.pow(2,35),index_es_er=Math.pow(2,42),index_es_tr=Math.pow(2,49),index_es_ir=Math.pow(2,56),index_es_sr=Math.pow(2,63),index_es_rr=function(o){return o<index_es_Js?1:o<index_es_Xs?2:o<index_es_Ws?3:o<index_es_Qs?4:o<index_es_Zs?5:o<index_es_er?6:o<index_es_tr?7:o<index_es_ir?8:o<index_es_sr?9:10},index_es_nr={encode:index_es_Vs,decode:index_es_Ys,encodingLength:index_es_rr},Ke=index_es_nr;const Ve=(o,e,t=0)=>(Ke.encode(o,e,t),e),qe=o=>Ke.encodingLength(o),index_es_ge=(o,e)=>{const t=e.byteLength,i=qe(o),s=i+qe(t),r=new Uint8Array(s+t);return Ve(o,r,0),Ve(t,r,i),r.set(e,s),new index_es_or(o,t,e,r)};class index_es_or{constructor(e,t,i,s){this.code=e,this.size=t,this.digest=i,this.bytes=s}}const je=({name:o,code:e,encode:t})=>new index_es_ar(o,e,t);class index_es_ar{constructor(e,t,i){this.name=e,this.code=t,this.encode=i}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?index_es_ge(this.code,t):t.then(i=>index_es_ge(this.code,i))}else throw Error("Unknown type, must be binary type")}}const Ge=o=>async e=>new Uint8Array(await crypto.subtle.digest(o,e)),index_es_hr=je({name:"sha2-256",code:18,encode:Ge("SHA-256")}),index_es_cr=je({name:"sha2-512",code:19,encode:Ge("SHA-512")});var index_es_lr=Object.freeze({__proto__:null,sha256:index_es_hr,sha512:index_es_cr});const Ye=0,index_es_ur="identity",He=Ue,index_es_dr=o=>index_es_ge(Ye,He(o)),index_es_gr={code:Ye,name:index_es_ur,encode:He,digest:index_es_dr};var index_es_pr=Object.freeze({__proto__:null,identity:index_es_gr});new TextEncoder,new TextDecoder;const Je={...index_es_os,...index_es_hs,...index_es_ls,...index_es_ds,...index_es_Ds,...index_es_Ts,...index_es_Ss,...index_es_Os,...index_es_Us,...index_es_Ks};({...index_es_lr,...index_es_pr});function index_es_Dr(o=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(o):new Uint8Array(o)}function index_es_Xe(o,e,t,i){return{name:o,prefix:e,encoder:{name:o,prefix:e,encode:t},decoder:{decode:i}}}const index_es_We=index_es_Xe("utf8","u",o=>"u"+new TextDecoder("utf8").decode(o),o=>new TextEncoder().encode(o.substring(1))),index_es_pe=index_es_Xe("ascii","a",o=>{let e="a";for(let t=0;t<o.length;t++)e+=String.fromCharCode(o[t]);return e},o=>{o=o.substring(1);const e=index_es_Dr(o.length);for(let t=0;t<o.length;t++)e[t]=o.charCodeAt(t);return e}),index_es_yr={utf8:index_es_We,"utf-8":index_es_We,hex:Je.base16,latin1:index_es_pe,ascii:index_es_pe,binary:index_es_pe,...Je};function index_es_mr(o,e="utf8"){const t=index_es_yr[e];if(!t)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(o,"utf8"):t.decoder.decode(`${t.prefix}${o}`)}const De="wc",Qe=2,Z="core",dist_index_es_z=`${De}@2:${Z}:`,index_es_Ze={name:Z,logger:"error"},et={database:":memory:"},tt="crypto",index_es_ye="client_ed25519_seed",it=cjs.ONE_DAY,st="keychain",rt="0.3",nt="messages",ot="0.3",at=cjs.SIX_HOURS,ht="publisher",ct="irn",lt="error",index_es_me="wss://relay.walletconnect.com",index_es_be="wss://relay.walletconnect.org",ut="relayer",core_dist_index_es_f={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},dt="_subscription",core_dist_index_es_E={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},gt=cjs.ONE_SECOND,index_es_br={database:":memory:"},pt="2.13.0",index_es_Dt=1e4,yt="0.3",mt="WALLETCONNECT_CLIENT_ID",core_dist_index_es_S={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},index_es_fr=(/* unused pure expression or super */ null && (W)),index_es_bt="subscription",ft="0.3",Et=cjs.FIVE_SECONDS*1e3,wt="pairing",vt="0.3",index_es_Er=(/* unused pure expression or super */ null && (W)),index_es_B={wc_pairingDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:0},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:0}}},index_es_q={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},dist_index_es_I={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},It="history",Ct="0.3",index_es_Tt="expirer",core_dist_index_es_C={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},_t="0.3",index_es_wr=(/* unused pure expression or super */ null && ($)),ee="verify-api",M="https://verify.walletconnect.com",te="https://verify.walletconnect.org",Rt=[M,te],St="echo",Pt="https://echo.walletconnect.com";class xt{constructor(e,t){this.core=e,this.logger=t,this.keychain=new Map,this.name=st,this.version=rt,this.initialized=!1,this.storagePrefix=dist_index_es_z,this.init=async()=>{if(!this.initialized){const i=await this.getKeyChain();typeof i<"u"&&(this.keychain=i),this.initialized=!0}},this.has=i=>(this.isInitialized(),this.keychain.has(i)),this.set=async(i,s)=>{this.isInitialized(),this.keychain.set(i,s),await this.persist()},this.get=i=>{this.isInitialized();const s=this.keychain.get(i);if(typeof s>"u"){const{message:r}=xe("NO_MATCHING_KEY",`${this.name}: ${i}`);throw new Error(r)}return s},this.del=async i=>{this.isInitialized(),this.keychain.delete(i),await this.persist()},this.core=e,this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,i0(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?n0(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_Ot{constructor(e,t,i){this.core=e,this.logger=t,this.name=tt,this.initialized=!1,this.init=async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)},this.hasKeys=s=>(this.isInitialized(),this.keychain.has(s)),this.getClientId=async()=>{this.isInitialized();const s=await this.getClientSeed(),r=generateKeyPair(s);return encodeIss(r.publicKey)},this.generateKeyPair=()=>{this.isInitialized();const s=mu();return this.setPrivateKey(s.publicKey,s.privateKey)},this.signJWT=async s=>{this.isInitialized();const r=await this.getClientSeed(),n=generateKeyPair(r),a=gu(),h=it;return await signJWT(a,s,h,n)},this.generateSharedKey=(s,r,n)=>{this.isInitialized();const a=this.getPrivateKey(s),h=Au(a,r);return this.setSymKey(h,n)},this.setSymKey=async(s,r)=>{this.isInitialized();const n=r||bu(s);return await this.keychain.set(n,s),n},this.deleteKeyPair=async s=>{this.isInitialized(),await this.keychain.del(s)},this.deleteSymKey=async s=>{this.isInitialized(),await this.keychain.del(s)},this.encode=async(s,r,n)=>{this.isInitialized();const a=eo(n),h=safeJsonStringify(r);if(Eu(a)){const m=a.senderPublicKey,L=a.receiverPublicKey;s=await this.generateSharedKey(m,L)}const l=this.getSymKey(s),{type:d,senderPublicKey:g}=a;return wu({type:d,symKey:l,message:h,senderPublicKey:g})},this.decode=async(s,r,n)=>{this.isInitialized();const a=Mu(r,n);if(Eu(a)){const h=a.receiverPublicKey,l=a.senderPublicKey;s=await this.generateSharedKey(h,l)}try{const h=this.getSymKey(s),l=xu({symKey:h,encoded:r});return esm_safeJsonParse(l)}catch(h){this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`),this.logger.error(h)}},this.getPayloadType=s=>{const r=Xi(s);return Mr(r.type)},this.getPayloadSenderPublicKey=s=>{const r=Xi(s);return r.senderPublicKey?to_string_toString(r.senderPublicKey,zt):void 0},this.core=e,this.logger=dist_index_es_E(t,this.name),this.keychain=i||new xt(this.core,this.logger)}get context(){return index_es_y(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(index_es_ye)}catch{e=gu(),await this.keychain.set(index_es_ye,e)}return index_es_mr(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class At extends index_es_a{constructor(e,t){super(e,t),this.logger=e,this.core=t,this.messages=new Map,this.name=nt,this.version=ot,this.initialized=!1,this.storagePrefix=dist_index_es_z,this.init=async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const i=await this.getRelayerMessages();typeof i<"u"&&(this.messages=i),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(i){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(i)}finally{this.initialized=!0}}},this.set=async(i,s)=>{this.isInitialized();const r=yu(s);let n=this.messages.get(i);return typeof n>"u"&&(n={}),typeof n[r]<"u"||(n[r]=s,this.messages.set(i,n),await this.persist()),r},this.get=i=>{this.isInitialized();let s=this.messages.get(i);return typeof s>"u"&&(s={}),s},this.has=(i,s)=>{this.isInitialized();const r=this.get(i),n=yu(s);return typeof r[n]<"u"},this.del=async i=>{this.isInitialized(),this.messages.delete(i),await this.persist()},this.logger=dist_index_es_E(e,this.name),this.core=t}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,i0(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?n0(e):void 0}async persist(){await this.setRelayerMessages(this.messages)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_vr extends index_es_u{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.events=new external_events_.EventEmitter,this.name=ht,this.queue=new Map,this.publishTimeout=(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),this.failedPublishTimeout=(0,cjs.toMiliseconds)(cjs.ONE_SECOND),this.needsTransportRestart=!1,this.publish=async(i,s,r)=>{var n;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:i,message:s,opts:r}});const a=r?.ttl||at,h=Su(r),l=r?.prompt||!1,d=r?.tag||0,g=r?.id||getBigIntRpcId().toString(),m={topic:i,message:s,opts:{ttl:a,relay:h,prompt:l,tag:d,id:g}},L=`Failed to publish payload, please try again. id:${g} tag:${d}`,u=Date.now();let p,T=1;try{for(;p===void 0;){if(Date.now()-u>this.publishTimeout)throw new Error(L);this.logger.trace({id:g,attempts:T},`publisher.publish - attempt ${T}`),p=await await u0(this.rpcPublish(i,s,a,h,l,d,g).catch(D=>this.logger.warn(D)),this.publishTimeout,L),T++,p||await new Promise(D=>setTimeout(D,this.failedPublishTimeout))}this.relayer.events.emit(core_dist_index_es_f.publish,m),this.logger.debug("Successfully Published Payload"),this.logger.trace({type:"method",method:"publish",params:{id:g,topic:i,message:s,opts:r}})}catch(D){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(D),(n=r?.internal)!=null&&n.throwOnFailedPublish)throw D;this.queue.set(g,m)}},this.on=(i,s)=>{this.events.on(i,s)},this.once=(i,s)=>{this.events.once(i,s)},this.off=(i,s)=>{this.events.off(i,s)},this.removeListener=(i,s)=>{this.events.removeListener(i,s)},this.relayer=e,this.logger=dist_index_es_E(t,this.name),this.registerEventListeners()}get context(){return index_es_y(this.logger)}rpcPublish(e,t,i,s,r,n,a){var h,l,d,g;const m={method:Nu(s.protocol).publish,params:{topic:e,message:t,ttl:i,prompt:r,tag:n},id:a};return Pe((h=m.params)==null?void 0:h.prompt)&&((l=m.params)==null||delete l.prompt),Pe((d=m.params)==null?void 0:d.tag)&&((g=m.params)==null||delete g.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:m}),this.relayer.request(m)}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach(async e=>{const{topic:t,message:i,opts:s}=e;await this.publish(t,i,s)})}registerEventListeners(){this.relayer.core.heartbeat.on(r.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(core_dist_index_es_f.connection_stalled);return}this.checkQueue()}),this.relayer.on(core_dist_index_es_f.message_ack,e=>{this.removeRequestFromQueue(e.id.toString())})}}class index_es_Ir{constructor(){this.map=new Map,this.set=(e,t)=>{const i=this.get(e);this.exists(e,t)||this.map.set(e,[...i,t])},this.get=e=>this.map.get(e)||[],this.exists=(e,t)=>this.get(e).includes(t),this.delete=(e,t)=>{if(typeof t>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const i=this.get(e);if(!this.exists(e,t))return;const s=i.filter(r=>r!==t);if(!s.length){this.map.delete(e);return}this.map.set(e,s)},this.clear=()=>{this.map.clear()}}get topics(){return Array.from(this.map.keys())}}var index_es_Cr=Object.defineProperty,index_es_Tr=Object.defineProperties,dist_index_es_r=Object.getOwnPropertyDescriptors,index_es_zt=Object.getOwnPropertySymbols,index_es_Rr=Object.prototype.hasOwnProperty,index_es_Sr=Object.prototype.propertyIsEnumerable,Nt=(o,e,t)=>e in o?index_es_Cr(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,dist_index_es_j=(o,e)=>{for(var t in e||(e={}))index_es_Rr.call(e,t)&&Nt(o,t,e[t]);if(index_es_zt)for(var t of index_es_zt(e))index_es_Sr.call(e,t)&&Nt(o,t,e[t]);return o},index_es_fe=(o,e)=>index_es_Tr(o,dist_index_es_r(e));class index_es_Lt extends dist_index_es_d{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,this.subscriptions=new Map,this.topicMap=new index_es_Ir,this.events=new external_events_.EventEmitter,this.name=index_es_bt,this.version=ft,this.pending=new Map,this.cached=[],this.initialized=!1,this.pendingSubscriptionWatchLabel="pending_sub_watch_label",this.pollingInterval=20,this.storagePrefix=dist_index_es_z,this.subscribeTimeout=(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),this.restartInProgress=!1,this.batchSubscribeTopicsLimit=500,this.pendingBatchMessages=[],this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),this.clientId=await this.relayer.core.crypto.getClientId())},this.subscribe=async(i,s)=>{await this.restartToComplete(),this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}});try{const r=Su(s),n={topic:i,relay:r};this.pending.set(i,n);const a=await this.rpcSubscribe(i,r);return typeof a=="string"&&(this.onSubscribe(a,n),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}})),a}catch(r){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(r),r}},this.unsubscribe=async(i,s)=>{await this.restartToComplete(),this.isInitialized(),typeof s?.id<"u"?await this.unsubscribeById(i,s.id,s):await this.unsubscribeByTopic(i,s)},this.isSubscribed=async i=>{if(this.topics.includes(i))return!0;const s=`${this.pendingSubscriptionWatchLabel}_${i}`;return await new Promise((r,n)=>{const a=new cjs.Watch;a.start(s);const h=setInterval(()=>{!this.pending.has(i)&&this.topics.includes(i)&&(clearInterval(h),a.stop(s),r(!0)),a.elapsed(s)>=Et&&(clearInterval(h),a.stop(s),n(new Error("Subscription resolution timeout")))},this.pollingInterval)}).catch(()=>!1)},this.on=(i,s)=>{this.events.on(i,s)},this.once=(i,s)=>{this.events.once(i,s)},this.off=(i,s)=>{this.events.off(i,s)},this.removeListener=(i,s)=>{this.events.removeListener(i,s)},this.start=async()=>{await this.onConnect()},this.stop=async()=>{await this.onDisconnect()},this.restart=async()=>{this.restartInProgress=!0,await this.restore(),await this.reset(),this.restartInProgress=!1},this.relayer=e,this.logger=dist_index_es_E(t,this.name),this.clientId=""}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}hasSubscription(e,t){let i=!1;try{i=this.getSubscription(e).topic===t}catch{}return i}onEnable(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const i=this.topicMap.get(e);await Promise.all(i.map(async s=>await this.unsubscribeById(e,s,t)))}async unsubscribeById(e,t,i){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}});try{const s=Su(i);await this.rpcUnsubscribe(e,t,s);const r=tr("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,r),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}})}catch(s){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(s),s}}async rpcSubscribe(e,t){const i={method:Nu(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{return await await u0(this.relayer.request(i).catch(s=>this.logger.warn(s)),this.subscribeTimeout)?yu(e+this.clientId):null}catch{this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(core_dist_index_es_f.connection_stalled)}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t=e[0].relay,i={method:Nu(t.protocol).batchSubscribe,params:{topics:e.map(s=>s.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{return await await u0(this.relayer.request(i).catch(s=>this.logger.warn(s)),this.subscribeTimeout)}catch{this.relayer.events.emit(core_dist_index_es_f.connection_stalled)}}async rpcBatchFetchMessages(e){if(!e.length)return;const t=e[0].relay,i={method:Nu(t.protocol).batchFetchMessages,params:{topics:e.map(r=>r.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});let s;try{s=await await u0(this.relayer.request(i).catch(r=>this.logger.warn(r)),this.subscribeTimeout)}catch{this.relayer.events.emit(core_dist_index_es_f.connection_stalled)}return s}rpcUnsubscribe(e,t,i){const s={method:Nu(i.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s}),this.relayer.request(s)}onSubscribe(e,t){this.setSubscription(e,index_es_fe(dist_index_es_j({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach(t=>{this.setSubscription(t.id,dist_index_es_j({},t)),this.pending.delete(t.topic)})}async onUnsubscribe(e,t,i){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,i),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t)}addSubscription(e,t){this.subscriptions.set(e,dist_index_es_j({},t)),this.topicMap.set(t.topic,e),this.events.emit(core_dist_index_es_S.created,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const i=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(i.topic,e),this.events.emit(core_dist_index_es_S.deleted,index_es_fe(dist_index_es_j({},i),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(core_dist_index_es_S.sync)}async reset(){if(this.cached.length){const e=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let t=0;t<e;t++){const i=this.cached.splice(0,this.batchSubscribeTopicsLimit);await this.batchFetchMessages(i),await this.batchSubscribe(i)}}this.events.emit(core_dist_index_es_S.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){if(!e.length)return;const t=await this.rpcBatchSubscribe(e);Er(t)&&this.onBatchSubscribe(t.map((i,s)=>index_es_fe(dist_index_es_j({},e[s]),{id:i})))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(this.pendingBatchMessages=this.pendingBatchMessages.concat(t.messages))}async onConnect(){await this.restart(),this.onEnable()}onDisconnect(){this.onDisable()}async checkPending(){if(!this.initialized||!this.relayer.connected)return;const e=[];this.pending.forEach(t=>{e.push(t)}),await this.batchSubscribe(e),this.pendingBatchMessages.length&&(await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages),this.pendingBatchMessages=[])}registerEventListeners(){this.relayer.core.heartbeat.on(r.pulse,async()=>{await this.checkPending()}),this.events.on(core_dist_index_es_S.created,async e=>{const t=core_dist_index_es_S.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()}),this.events.on(core_dist_index_es_S.deleted,async e=>{const t=core_dist_index_es_S.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),await this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(){this.restartInProgress&&await new Promise(e=>{const t=setInterval(()=>{this.restartInProgress||(clearInterval(t),e())},this.pollingInterval)})}}var index_es_Pr=Object.defineProperty,index_es_Ut=Object.getOwnPropertySymbols,index_es_xr=Object.prototype.hasOwnProperty,index_es_Or=Object.prototype.propertyIsEnumerable,index_es_Ft=(o,e,t)=>e in o?index_es_Pr(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_Ar=(o,e)=>{for(var t in e||(e={}))index_es_xr.call(e,t)&&index_es_Ft(o,t,e[t]);if(index_es_Ut)for(var t of index_es_Ut(e))index_es_Or.call(e,t)&&index_es_Ft(o,t,e[t]);return o};class index_es_$t extends dist_index_es_g{constructor(e){super(e),this.protocol="wc",this.version=2,this.events=new external_events_.EventEmitter,this.name=ut,this.transportExplicitlyClosed=!1,this.initialized=!1,this.connectionAttemptInProgress=!1,this.connectionStatusPollingInterval=20,this.staleConnectionErrors=["socket hang up","stalled","interrupted"],this.hasExperiencedNetworkDisruption=!1,this.requestsInFlight=new Map,this.heartBeatTimeout=(0,cjs.toMiliseconds)(cjs.THIRTY_SECONDS+cjs.ONE_SECOND),this.request=async t=>{var i,s;this.logger.debug("Publishing Request Payload");const r=t.id||getBigIntRpcId().toString();await this.toEstablishConnection();try{const n=this.provider.request(t);this.requestsInFlight.set(r,{promise:n,request:t}),this.logger.trace({id:r,method:t.method,topic:(i=t.params)==null?void 0:i.topic},"relayer.request - attempt to publish...");const a=await new Promise(async(h,l)=>{const d=()=>{l(new Error(`relayer.request - publish interrupted, id: ${r}`))};this.provider.on(core_dist_index_es_E.disconnect,d);const g=await n;this.provider.off(core_dist_index_es_E.disconnect,d),h(g)});return this.logger.trace({id:r,method:t.method,topic:(s=t.params)==null?void 0:s.topic},"relayer.request - published"),a}catch(n){throw this.logger.debug(`Failed to Publish Request: ${r}`),n}finally{this.requestsInFlight.delete(r)}},this.resetPingTimeout=()=>{if(pi())try{clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var t,i,s;(s=(i=(t=this.provider)==null?void 0:t.connection)==null?void 0:i.socket)==null||s.terminate()},this.heartBeatTimeout)}catch(t){this.logger.warn(t)}},this.onPayloadHandler=t=>{this.onProviderPayload(t),this.resetPingTimeout()},this.onConnectHandler=()=>{this.startPingTimeout(),this.events.emit(core_dist_index_es_f.connect)},this.onDisconnectHandler=()=>{this.onProviderDisconnect()},this.onProviderErrorHandler=t=>{this.logger.error(t),this.events.emit(core_dist_index_es_f.error,t),this.logger.info("Fatal socket error received, closing transport"),this.transportClose()},this.registerProviderListeners=()=>{this.provider.on(core_dist_index_es_E.payload,this.onPayloadHandler),this.provider.on(core_dist_index_es_E.connect,this.onConnectHandler),this.provider.on(core_dist_index_es_E.disconnect,this.onDisconnectHandler),this.provider.on(core_dist_index_es_E.error,this.onProviderErrorHandler)},this.core=e.core,this.logger=typeof e.logger<"u"&&typeof e.logger!="string"?dist_index_es_E(e.logger,this.name):pino_default()(dist_index_es_k({level:e.logger||lt})),this.messages=new At(this.logger,e.core),this.subscriber=new index_es_Lt(this,this.logger),this.publisher=new index_es_vr(this,this.logger),this.relayUrl=e?.relayUrl||index_es_me,this.projectId=e.projectId,this.bundleId=Wo(),this.provider={}}async init(){this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]);try{await this.transportOpen()}catch{this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${index_es_be}...`),await this.restartTransport(index_es_be)}this.initialized=!0,setTimeout(async()=>{this.subscriber.topics.length===0&&this.subscriber.pending.size===0&&(this.logger.info("No topics subscribed to after init, closing transport"),await this.transportClose(),this.transportExplicitlyClosed=!1)},index_es_Dt)}get context(){return index_es_y(this.logger)}get connected(){var e,t,i;return((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===1}get connecting(){var e,t,i;return((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===0}async publish(e,t,i){this.isInitialized(),await this.publisher.publish(e,t,i),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now()})}async subscribe(e,t){var i;this.isInitialized();let s=((i=this.subscriber.topicMap.get(e))==null?void 0:i[0])||"",r;const n=a=>{a.topic===e&&(this.subscriber.off(core_dist_index_es_S.created,n),r())};return await Promise.all([new Promise(a=>{r=a,this.subscriber.on(core_dist_index_es_S.created,n)}),new Promise(async a=>{s=await this.subscriber.subscribe(e,t)||s,a()})]),s}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportDisconnect(){if(!this.hasExperiencedNetworkDisruption&&this.connected&&this.requestsInFlight.size>0)try{await Promise.all(Array.from(this.requestsInFlight.values()).map(e=>e.promise))}catch(e){this.logger.warn(e)}this.hasExperiencedNetworkDisruption||this.connected?await u0(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),await this.createProvider(),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;try{await new Promise(async(t,i)=>{const s=()=>{this.provider.off(core_dist_index_es_E.disconnect,s),i(new Error("Connection interrupted while trying to subscribe"))};this.provider.on(core_dist_index_es_E.disconnect,s),await u0(this.provider.connect(),(0,cjs.toMiliseconds)(cjs.ONE_MINUTE),`Socket stalled when trying to connect to ${this.relayUrl}`).catch(r=>{i(r)}),await this.subscriber.start(),this.hasExperiencedNetworkDisruption=!1,t()})}catch(t){this.logger.error(t);const i=t;if(this.hasExperiencedNetworkDisruption=!0,!this.isConnectionStalled(i.message))throw t}finally{this.connectionAttemptInProgress=!1}}async restartTransport(e){this.connectionAttemptInProgress||(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await hh())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(e?.length===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const t=e.sort((i,s)=>i.publishedAt-s.publishedAt);this.logger.trace(`Batch of ${t.length} message events sorted`);for(const i of t)try{await this.onMessageEvent(i)}catch(s){this.logger.warn(s)}this.logger.trace(`Batch of ${t.length} message events processed`)}startPingTimeout(){var e,t,i,s,r;if(pi())try{(t=(e=this.provider)==null?void 0:e.connection)!=null&&t.socket&&((r=(s=(i=this.provider)==null?void 0:i.connection)==null?void 0:s.socket)==null||r.once("ping",()=>{this.resetPingTimeout()})),this.resetPingTimeout()}catch(n){this.logger.warn(n)}}isConnectionStalled(e){return this.staleConnectionErrors.some(t=>e.includes(t))}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new dist_index_es_o(new dist_index_es_f($o({sdkVersion:pt,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId}))),this.registerProviderListeners()}async recordMessageEvent(e){const{topic:t,message:i}=e;await this.messages.set(t,i)}async shouldIgnoreMessageEvent(e){const{topic:t,message:i}=e;if(!i||i.length===0)return this.logger.debug(`Ignoring invalid/empty message: ${i}`),!0;if(!await this.subscriber.isSubscribed(t))return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),!0;const s=this.messages.has(t,i);return s&&this.logger.debug(`Ignoring duplicate message: ${i}`),s}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),isJsonRpcRequest(e)){if(!e.method.endsWith(dt))return;const t=e.params,{topic:i,message:s,publishedAt:r}=t.data,n={topic:i,message:s,publishedAt:r};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(index_es_Ar({type:"event",event:t.id},n)),this.events.emit(t.id,n),await this.acknowledgePayload(e),await this.onMessageEvent(n)}else isJsonRpcResponse(e)&&this.events.emit(core_dist_index_es_f.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(this.events.emit(core_dist_index_es_f.message,e),await this.recordMessageEvent(e))}async acknowledgePayload(e){const t=formatJsonRpcResult(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(core_dist_index_es_E.payload,this.onPayloadHandler),this.provider.off(core_dist_index_es_E.connect,this.onConnectHandler),this.provider.off(core_dist_index_es_E.disconnect,this.onDisconnectHandler),this.provider.off(core_dist_index_es_E.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await hh();ch(async t=>{e!==t&&(e=t,t?await this.restartTransport().catch(i=>this.logger.error(i)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))})}async onProviderDisconnect(){await this.subscriber.stop(),this.requestsInFlight.clear(),clearTimeout(this.pingTimeout),this.events.emit(core_dist_index_es_f.disconnect),this.connectionAttemptInProgress=!1,!this.transportExplicitlyClosed&&setTimeout(async()=>{await this.transportOpen().catch(e=>this.logger.error(e))},(0,cjs.toMiliseconds)(gt))}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){await this.confirmOnlineStateOrThrow(),!this.connected&&(this.connectionAttemptInProgress&&await new Promise(e=>{const t=setInterval(()=>{this.connected&&(clearInterval(t),e())},this.connectionStatusPollingInterval)}),await this.transportOpen())}}var index_es_zr=Object.defineProperty,Bt=Object.getOwnPropertySymbols,Nr=Object.prototype.hasOwnProperty,index_es_Lr=Object.prototype.propertyIsEnumerable,Mt=(o,e,t)=>e in o?index_es_zr(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_kt=(o,e)=>{for(var t in e||(e={}))Nr.call(e,t)&&Mt(o,t,e[t]);if(Bt)for(var t of Bt(e))index_es_Lr.call(e,t)&&Mt(o,t,e[t]);return o};class index_es_Kt extends dist_index_es_p{constructor(e,t,i,s=dist_index_es_z,r=void 0){super(e,t,i,s),this.core=e,this.logger=t,this.name=i,this.map=new Map,this.version=yt,this.cached=[],this.initialized=!1,this.storagePrefix=dist_index_es_z,this.recentlyDeleted=[],this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(n=>{this.getKey&&n!==null&&!Pe(n)?this.map.set(this.getKey(n),n):Gu(n)?this.map.set(n.id,n):Yu(n)&&this.map.set(n.topic,n)}),this.cached=[],this.initialized=!0)},this.set=async(n,a)=>{this.isInitialized(),this.map.has(n)?await this.update(n,a):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:n,value:a}),this.map.set(n,a),await this.persist())},this.get=n=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:n}),this.getData(n)),this.getAll=n=>(this.isInitialized(),n?this.values.filter(a=>Object.keys(n).every(h=>lodash_isequal_default()(a[h],n[h]))):this.values),this.update=async(n,a)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:n,update:a});const h=index_es_kt(index_es_kt({},this.getData(n)),a);this.map.set(n,h),await this.persist()},this.delete=async(n,a)=>{this.isInitialized(),this.map.has(n)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:n,reason:a}),this.map.delete(n),this.addToRecentlyDeleted(n),await this.persist())},this.logger=dist_index_es_E(t,this.name),this.storagePrefix=s,this.getKey=r}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:s}=xe("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(i),new Error(i)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class Vt{constructor(e,t){this.core=e,this.logger=t,this.name=wt,this.version=vt,this.events=new (external_events_default()),this.initialized=!1,this.storagePrefix=dist_index_es_z,this.ignoredPayloadTypes=[lr],this.registeredMethods=[],this.init=async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))},this.register=({methods:i})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...i])]},this.create=async i=>{this.isInitialized();const s=gu(),r=await this.core.crypto.setSymKey(s),n=d0(cjs.FIVE_MINUTES),a={protocol:ct},h={topic:r,expiry:n,relay:a,active:!1},l=Du({protocol:this.core.protocol,version:this.core.version,topic:r,symKey:s,relay:a,expiryTimestamp:n,methods:i?.methods});return this.core.expirer.set(r,n),await this.pairings.set(r,h),await this.core.relayer.subscribe(r),{topic:r,uri:l}},this.pair=async i=>{this.isInitialized(),this.isValidPair(i);const{topic:s,symKey:r,relay:n,expiryTimestamp:a,methods:h}=Pu(i.uri);let l;if(this.pairings.keys.includes(s)&&(l=this.pairings.get(s),l.active))throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);const d=a||d0(cjs.FIVE_MINUTES),g={topic:s,relay:n,expiry:d,active:!1,methods:h};return this.core.expirer.set(s,d),await this.pairings.set(s,g),i.activatePairing&&await this.activate({topic:s}),this.events.emit(index_es_q.create,g),this.core.crypto.keychain.has(s)||await this.core.crypto.setSymKey(r,s),await this.core.relayer.subscribe(s,{relay:n}),g},this.activate=async({topic:i})=>{this.isInitialized();const s=d0(cjs.THIRTY_DAYS);this.core.expirer.set(i,s),await this.pairings.update(i,{active:!0,expiry:s})},this.ping=async i=>{this.isInitialized(),await this.isValidPing(i);const{topic:s}=i;if(this.pairings.keys.includes(s)){const r=await this.sendRequest(s,"wc_pairingPing",{}),{done:n,resolve:a,reject:h}=a0();this.events.once(v0("pairing_ping",r),({error:l})=>{l?h(l):a()}),await n()}},this.updateExpiry=async({topic:i,expiry:s})=>{this.isInitialized(),await this.pairings.update(i,{expiry:s})},this.updateMetadata=async({topic:i,metadata:s})=>{this.isInitialized(),await this.pairings.update(i,{peerMetadata:s})},this.getPairings=()=>(this.isInitialized(),this.pairings.values),this.disconnect=async i=>{this.isInitialized(),await this.isValidDisconnect(i);const{topic:s}=i;this.pairings.keys.includes(s)&&(await this.sendRequest(s,"wc_pairingDelete",tr("USER_DISCONNECTED")),await this.deletePairing(s))},this.sendRequest=async(i,s,r)=>{const n=formatJsonRpcRequest(s,r),a=await this.core.crypto.encode(i,n),h=index_es_B[s].req;return this.core.history.set(i,n),this.core.relayer.publish(i,a,h),n.id},this.sendResult=async(i,s,r)=>{const n=formatJsonRpcResult(i,r),a=await this.core.crypto.encode(s,n),h=await this.core.history.get(s,i),l=index_es_B[h.request.method].res;await this.core.relayer.publish(s,a,l),await this.core.history.resolve(n)},this.sendError=async(i,s,r)=>{const n=formatJsonRpcError(i,r),a=await this.core.crypto.encode(s,n),h=await this.core.history.get(s,i),l=index_es_B[h.request.method]?index_es_B[h.request.method].res:index_es_B.unregistered_method.res;await this.core.relayer.publish(s,a,l),await this.core.history.resolve(n)},this.deletePairing=async(i,s)=>{await this.core.relayer.unsubscribe(i),await Promise.all([this.pairings.delete(i,tr("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(i),s?Promise.resolve():this.core.expirer.del(i)])},this.cleanup=async()=>{const i=this.pairings.getAll().filter(s=>p0(s.expiry));await Promise.all(i.map(s=>this.deletePairing(s.topic)))},this.onRelayEventRequest=i=>{const{topic:s,payload:r}=i;switch(r.method){case"wc_pairingPing":return this.onPairingPingRequest(s,r);case"wc_pairingDelete":return this.onPairingDeleteRequest(s,r);default:return this.onUnknownRpcMethodRequest(s,r)}},this.onRelayEventResponse=async i=>{const{topic:s,payload:r}=i,n=(await this.core.history.get(s,r.id)).request.method;switch(n){case"wc_pairingPing":return this.onPairingPingResponse(s,r);default:return this.onUnknownRpcMethodResponse(n)}},this.onPairingPingRequest=async(i,s)=>{const{id:r}=s;try{this.isValidPing({topic:i}),await this.sendResult(r,i,!0),this.events.emit(index_es_q.ping,{id:r,topic:i})}catch(n){await this.sendError(r,i,n),this.logger.error(n)}},this.onPairingPingResponse=(i,s)=>{const{id:r}=s;setTimeout(()=>{isJsonRpcResult(s)?this.events.emit(v0("pairing_ping",r),{}):isJsonRpcError(s)&&this.events.emit(v0("pairing_ping",r),{error:s.error})},500)},this.onPairingDeleteRequest=async(i,s)=>{const{id:r}=s;try{this.isValidDisconnect({topic:i}),await this.deletePairing(i),this.events.emit(index_es_q.delete,{id:r,topic:i})}catch(n){await this.sendError(r,i,n),this.logger.error(n)}},this.onUnknownRpcMethodRequest=async(i,s)=>{const{id:r,method:n}=s;try{if(this.registeredMethods.includes(n))return;const a=tr("WC_METHOD_UNSUPPORTED",n);await this.sendError(r,i,a),this.logger.error(a)}catch(a){await this.sendError(r,i,a),this.logger.error(a)}},this.onUnknownRpcMethodResponse=i=>{this.registeredMethods.includes(i)||this.logger.error(tr("WC_METHOD_UNSUPPORTED",i))},this.isValidPair=i=>{var s;if(!$u(i)){const{message:n}=xe("MISSING_OR_INVALID",`pair() params: ${i}`);throw new Error(n)}if(!Ju(i.uri)){const{message:n}=xe("MISSING_OR_INVALID",`pair() uri: ${i.uri}`);throw new Error(n)}const r=Pu(i.uri);if(!((s=r?.relay)!=null&&s.protocol)){const{message:n}=xe("MISSING_OR_INVALID","pair() uri#relay-protocol");throw new Error(n)}if(!(r!=null&&r.symKey)){const{message:n}=xe("MISSING_OR_INVALID","pair() uri#symKey");throw new Error(n)}if(r!=null&&r.expiryTimestamp&&(0,cjs.toMiliseconds)(r?.expiryTimestamp)<Date.now()){const{message:n}=xe("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(n)}},this.isValidPing=async i=>{if(!$u(i)){const{message:r}=xe("MISSING_OR_INVALID",`ping() params: ${i}`);throw new Error(r)}const{topic:s}=i;await this.isValidPairingTopic(s)},this.isValidDisconnect=async i=>{if(!$u(i)){const{message:r}=xe("MISSING_OR_INVALID",`disconnect() params: ${i}`);throw new Error(r)}const{topic:s}=i;await this.isValidPairingTopic(s)},this.isValidPairingTopic=async i=>{if(!Gt(i,!1)){const{message:s}=xe("MISSING_OR_INVALID",`pairing topic should be a string: ${i}`);throw new Error(s)}if(!this.pairings.keys.includes(i)){const{message:s}=xe("NO_MATCHING_KEY",`pairing topic doesn't exist: ${i}`);throw new Error(s)}if(p0(this.pairings.get(i).expiry)){await this.deletePairing(i);const{message:s}=xe("EXPIRED",`pairing topic: ${i}`);throw new Error(s)}},this.core=e,this.logger=dist_index_es_E(t,this.name),this.pairings=new index_es_Kt(this.core,this.logger,this.name,this.storagePrefix)}get context(){return index_es_y(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(core_dist_index_es_f.message,async e=>{const{topic:t,message:i}=e;if(!this.pairings.keys.includes(t)||this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))return;const s=await this.core.crypto.decode(t,i);try{isJsonRpcRequest(s)?(this.core.history.set(t,s),this.onRelayEventRequest({topic:t,payload:s})):isJsonRpcResponse(s)&&(await this.core.history.resolve(s),await this.onRelayEventResponse({topic:t,payload:s}),this.core.history.delete(t,s.id))}catch(r){this.logger.error(r)}})}registerExpirerEvents(){this.core.expirer.on(core_dist_index_es_C.expired,async e=>{const{topic:t}=l0(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(index_es_q.expire,{topic:t}))})}}class index_es_qt extends dist_index_es_h{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.records=new Map,this.events=new external_events_.EventEmitter,this.name=It,this.version=Ct,this.cached=[],this.initialized=!1,this.storagePrefix=dist_index_es_z,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.records.set(i.id,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.set=(i,s,r)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:i,request:s,chainId:r}),this.records.has(s.id))return;const n={id:s.id,topic:i,request:{method:s.method,params:s.params||null},chainId:r,expiry:d0(cjs.THIRTY_DAYS)};this.records.set(n.id,n),this.persist(),this.events.emit(dist_index_es_I.created,n)},this.resolve=async i=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:i}),!this.records.has(i.id))return;const s=await this.getRecord(i.id);typeof s.response>"u"&&(s.response=isJsonRpcError(i)?{error:i.error}:{result:i.result},this.records.set(s.id,s),this.persist(),this.events.emit(dist_index_es_I.updated,s))},this.get=async(i,s)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:i,id:s}),await this.getRecord(s)),this.delete=(i,s)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:s}),this.values.forEach(r=>{if(r.topic===i){if(typeof s<"u"&&r.id!==s)return;this.records.delete(r.id),this.events.emit(dist_index_es_I.deleted,r)}}),this.persist()},this.exists=async(i,s)=>(this.isInitialized(),this.records.has(s)?(await this.getRecord(s)).topic===i:!1),this.on=(i,s)=>{this.events.on(i,s)},this.once=(i,s)=>{this.events.once(i,s)},this.off=(i,s)=>{this.events.off(i,s)},this.removeListener=(i,s)=>{this.events.removeListener(i,s)},this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(t=>{if(typeof t.response<"u")return;const i={topic:t.topic,request:formatJsonRpcRequest(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(i)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(dist_index_es_I.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(dist_index_es_I.created,e=>{const t=dist_index_es_I.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(dist_index_es_I.updated,e=>{const t=dist_index_es_I.updated;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(dist_index_es_I.deleted,e=>{const t=dist_index_es_I.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.core.heartbeat.on(r.pulse,()=>{this.cleanup()})}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(t=>{(0,cjs.toMiliseconds)(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(dist_index_es_I.deleted,t,!1),e=!0)}),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_jt extends types_dist_index_es_E{constructor(e,t){super(e,t),this.core=e,this.logger=t,this.expirations=new Map,this.events=new external_events_.EventEmitter,this.name=index_es_Tt,this.version=_t,this.cached=[],this.initialized=!1,this.storagePrefix=dist_index_es_z,this.init=async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.expirations.set(i.target,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)},this.has=i=>{try{const s=this.formatTarget(i);return typeof this.getExpiration(s)<"u"}catch{return!1}},this.set=(i,s)=>{this.isInitialized();const r=this.formatTarget(i),n={target:r,expiry:s};this.expirations.set(r,n),this.checkExpiry(r,n),this.events.emit(core_dist_index_es_C.created,{target:r,expiration:n})},this.get=i=>{this.isInitialized();const s=this.formatTarget(i);return this.getExpiration(s)},this.del=i=>{if(this.isInitialized(),this.has(i)){const s=this.formatTarget(i),r=this.getExpiration(s);this.expirations.delete(s),this.events.emit(core_dist_index_es_C.deleted,{target:s,expiration:r})}},this.on=(i,s)=>{this.events.on(i,s)},this.once=(i,s)=>{this.events.once(i,s)},this.off=(i,s)=>{this.events.off(i,s)},this.removeListener=(i,s)=>{this.events.removeListener(i,s)},this.logger=dist_index_es_E(t,this.name)}get context(){return index_es_y(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return h0(e);if(typeof e=="number")return c0(e);const{message:t}=xe("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(core_dist_index_es_C.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:t}=xe("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:i}=xe("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(i),new Error(i)}return t}checkExpiry(e,t){const{expiry:i}=t;(0,cjs.toMiliseconds)(i)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(core_dist_index_es_C.expired,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,t)=>this.checkExpiry(t,e))}registerEventListeners(){this.core.heartbeat.on(r.pulse,()=>this.checkExpirations()),this.events.on(core_dist_index_es_C.created,e=>{const t=core_dist_index_es_C.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(core_dist_index_es_C.expired,e=>{const t=core_dist_index_es_C.expired;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(core_dist_index_es_C.deleted,e=>{const t=core_dist_index_es_C.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=xe("NOT_INITIALIZED",this.name);throw new Error(e)}}}class index_es_Gt extends dist_index_es_y{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.name=ee,this.initialized=!1,this.queue=[],this.verifyDisabled=!1,this.init=async i=>{if(this.verifyDisabled||er()||!pr())return;const s=this.getVerifyUrl(i?.verifyUrl);this.verifyUrl!==s&&this.removeIframe(),this.verifyUrl=s;try{await this.createIframe()}catch(r){this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),this.logger.info(r)}if(!this.initialized){this.removeIframe(),this.verifyUrl=te;try{await this.createIframe()}catch(r){this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),this.logger.info(r),this.verifyDisabled=!0}}},this.register=async i=>{this.initialized?this.sendPost(i.attestationId):(this.addToQueue(i.attestationId),await this.init())},this.resolve=async i=>{if(this.isDevEnv)return"";const s=this.getVerifyUrl(i?.verifyUrl);let r;try{r=await this.fetchAttestation(i.attestationId,s)}catch(n){this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${s}`),this.logger.info(n),r=await this.fetchAttestation(i.attestationId,te)}return r},this.fetchAttestation=async(i,s)=>{this.logger.info(`resolving attestation: ${i} from url: ${s}`);const r=this.startAbortTimer(cjs.ONE_SECOND*2),n=await fetch(`${s}/attestation/${i}`,{signal:this.abortController.signal});return clearTimeout(r),n.status===200?await n.json():void 0},this.addToQueue=i=>{this.queue.push(i)},this.processQueue=()=>{this.queue.length!==0&&(this.queue.forEach(i=>this.sendPost(i)),this.queue=[])},this.sendPost=i=>{var s;try{if(!this.iframe)return;(s=this.iframe.contentWindow)==null||s.postMessage(i,"*"),this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`)}catch{}},this.createIframe=async()=>{let i;const s=r=>{r.data==="verify_ready"&&(this.onInit(),window.removeEventListener("message",s),i())};await Promise.race([new Promise(r=>{const n=document.getElementById(ee);if(n)return this.iframe=n,this.onInit(),r();window.addEventListener("message",s);const a=document.createElement("iframe");a.id=ee,a.src=`${this.verifyUrl}/${this.projectId}`,a.style.display="none",document.body.append(a),this.iframe=a,i=r}),new Promise((r,n)=>setTimeout(()=>{window.removeEventListener("message",s),n("verify iframe load timeout")},(0,cjs.toMiliseconds)(cjs.FIVE_SECONDS)))])},this.onInit=()=>{this.initialized=!0,this.processQueue()},this.removeIframe=()=>{this.iframe&&(this.iframe.remove(),this.iframe=void 0,this.initialized=!1)},this.getVerifyUrl=i=>{let s=i||M;return Rt.includes(s)||(this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${M}`),s=M),s},this.logger=dist_index_es_E(t,this.name),this.verifyUrl=M,this.abortController=new AbortController,this.isDevEnv=pi()&&process.env.IS_VITEST}get context(){return index_es_y(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),(0,cjs.toMiliseconds)(e))}}class Yt extends index_es_v{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,this.context=St,this.registerDeviceToken=async i=>{const{clientId:s,token:r,notificationType:n,enableEncrypted:a=!1}=i,h=`${Pt}/${this.projectId}/clients`;await isomorphic_unfetch_default()(h,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:s,type:n,token:r,always_raw:a})})},this.logger=dist_index_es_E(t,this.context)}}var index_es_Ur=Object.defineProperty,index_es_Ht=Object.getOwnPropertySymbols,index_es_Fr=Object.prototype.hasOwnProperty,$r=Object.prototype.propertyIsEnumerable,index_es_Jt=(o,e,t)=>e in o?index_es_Ur(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,index_es_Xt=(o,e)=>{for(var t in e||(e={}))index_es_Fr.call(e,t)&&index_es_Jt(o,t,e[t]);if(index_es_Ht)for(var t of index_es_Ht(e))$r.call(e,t)&&index_es_Jt(o,t,e[t]);return o};class index_es_ie extends types_dist_index_es_n{constructor(e){var t;super(e),this.protocol=De,this.version=Qe,this.name=Z,this.events=new external_events_.EventEmitter,this.initialized=!1,this.on=(n,a)=>this.events.on(n,a),this.once=(n,a)=>this.events.once(n,a),this.off=(n,a)=>this.events.off(n,a),this.removeListener=(n,a)=>this.events.removeListener(n,a),this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||index_es_me,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const i=dist_index_es_k({level:typeof e?.logger=="string"&&e.logger?e.logger:index_es_Ze.logger}),{logger:s,chunkLoggerController:r}=A({opts:i,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=r,(t=this.logChunkController)!=null&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var n,a;(n=this.logChunkController)!=null&&n.downloadLogsBlobInBrowser&&((a=this.logChunkController)==null||a.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=dist_index_es_E(s,this.name),this.heartbeat=new index_es_i,this.crypto=new index_es_Ot(this,this.logger,e?.keychain),this.history=new index_es_qt(this,this.logger),this.expirer=new index_es_jt(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new index_es_h(index_es_Xt(index_es_Xt({},et),e?.storageOptions)),this.relayer=new index_es_$t({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new Vt(this,this.logger),this.verify=new index_es_Gt(this.projectId||"",this.logger),this.echoClient=new Yt(this.projectId||"",this.logger)}static async init(e){const t=new index_es_ie(e);await t.initialize();const i=await t.crypto.getClientId();return await t.storage.setItem(mt,i),t}get context(){return index_es_y(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return(e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}}const index_es_Br=index_es_ie;
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/sign-client/dist/index.es.js
const index_es_Re="wc",Ee=2,Se="client",dist_index_es_ie=`${index_es_Re}@${Ee}:${Se}:`,index_es_re={name:Se,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.com"},dist_index_es_Gt={session_proposal:"session_proposal",session_update:"session_update",session_extend:"session_extend",session_ping:"session_ping",session_delete:"session_delete",session_expire:"session_expire",session_request:"session_request",session_request_sent:"session_request_sent",session_event:"session_event",proposal_expire:"proposal_expire",session_authenticate:"session_authenticate",session_request_expire:"session_request_expire"},dist_index_es_kt={database:":memory:"},dist_index_es_e="WALLETCONNECT_DEEPLINK_CHOICE",dist_index_es_Ft={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},index_es_Qt="history",dist_index_es_jt="0.3",index_es_Ue="proposal",dist_index_es_zt=(/* unused pure expression or super */ null && (bt)),index_es_Ge="Proposal expired",index_es_ke="session",dist_index_es_L=cjs.SEVEN_DAYS,index_es_Fe="engine",sign_client_dist_index_es_f={wc_sessionPropose:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1101}},wc_sessionSettle:{req:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1104},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1106},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1112},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1114},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:cjs.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:cjs.ONE_HOUR,prompt:!1,tag:1117}}},index_es_ne={min:cjs.FIVE_MINUTES,max:cjs.SEVEN_DAYS},index_es_D={idle:"IDLE",active:"ACTIVE"},index_es_Qe="request",index_es_je=["wc_sessionPropose","wc_sessionRequest","wc_authRequest"],ze="wc",dist_index_es_Ht=1.5,index_es_He="auth",index_es_Ye="authKeys",dist_index_es_Xe="pairingTopics",index_es_Je="requests",X=`${ze}@${1.5}:${index_es_He}:`,J=`${X}:PUB_KEY`;var index_es_Yt=Object.defineProperty,dist_index_es_Xt=Object.defineProperties,dist_index_es_Jt=Object.getOwnPropertyDescriptors,dist_index_es_Be=Object.getOwnPropertySymbols,index_es_Bt=Object.prototype.hasOwnProperty,index_es_Wt=Object.prototype.propertyIsEnumerable,dist_index_es_We=(R,n,t)=>n in R?index_es_Yt(R,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):R[n]=t,sign_client_dist_index_es_y=(R,n)=>{for(var t in n||(n={}))index_es_Bt.call(n,t)&&dist_index_es_We(R,t,n[t]);if(dist_index_es_Be)for(var t of dist_index_es_Be(n))index_es_Wt.call(n,t)&&dist_index_es_We(R,t,n[t]);return R},index_es_M=(R,n)=>dist_index_es_Xt(R,dist_index_es_Jt(n));class index_es_Zt extends dist_index_es_w{constructor(n){super(n),this.name=index_es_Fe,this.events=new (external_events_default()),this.initialized=!1,this.requestQueue={state:index_es_D.idle,queue:[]},this.sessionRequestQueue={state:index_es_D.idle,queue:[]},this.requestQueueDelay=cjs.ONE_SECOND,this.expectedPairingMethodMap=new Map,this.recentlyDeletedMap=new Map,this.recentlyDeletedLimit=200,this.init=async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),this.client.core.pairing.register({methods:Object.keys(sign_client_dist_index_es_f)}),this.initialized=!0,setTimeout(()=>{this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay)))},this.connect=async t=>{await this.isInitialized();const e=index_es_M(sign_client_dist_index_es_y({},t),{requiredNamespaces:t.requiredNamespaces||{},optionalNamespaces:t.optionalNamespaces||{}});await this.isValidConnect(e);const{pairingTopic:s,requiredNamespaces:i,optionalNamespaces:r,sessionProperties:o,relays:a}=e;let c=s,h,p=!1;try{c&&(p=this.client.core.pairing.pairings.get(c).active)}catch(P){throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`),P}if(!c||!p){const{topic:P,uri:v}=await this.client.core.pairing.create();c=P,h=v}if(!c){const{message:P}=xe("NO_MATCHING_KEY",`connect() pairing topic: ${c}`);throw new Error(P)}const g=await this.client.core.crypto.generateKeyPair(),d=sign_client_dist_index_es_f.wc_sessionPropose.req.ttl||cjs.FIVE_MINUTES,w=d0(d),m=sign_client_dist_index_es_y({requiredNamespaces:i,optionalNamespaces:r,relays:a??[{protocol:ct}],proposer:{publicKey:g,metadata:this.client.metadata},expiryTimestamp:w},o&&{sessionProperties:o}),{reject:E,resolve:O,done:S}=a0(d,index_es_Ge);this.events.once(v0("session_connect"),async({error:P,session:v})=>{if(P)E(P);else if(v){v.self.publicKey=g;const B=index_es_M(sign_client_dist_index_es_y({},v),{requiredNamespaces:m.requiredNamespaces,optionalNamespaces:m.optionalNamespaces});await this.client.session.set(v.topic,B),await this.setExpiry(v.topic,v.expiry),c&&await this.client.core.pairing.updateMetadata({topic:c,metadata:v.peer.metadata}),O(B)}});const N=await this.sendRequest({topic:c,method:"wc_sessionPropose",params:m,throwOnFailedPublish:!0});return await this.setProposal(N,sign_client_dist_index_es_y({id:N},m)),{uri:h,approval:S}},this.pair=async t=>{await this.isInitialized();try{return await this.client.core.pairing.pair(t)}catch(e){throw this.client.logger.error("pair() failed"),e}},this.approve=async t=>{await this.isInitialized();try{await this.isValidApprove(t)}catch(S){throw this.client.logger.error("approve() -> isValidApprove() failed"),S}const{id:e,relayProtocol:s,namespaces:i,sessionProperties:r,sessionConfig:o}=t;let a;try{a=this.client.proposal.get(e)}catch(S){throw this.client.logger.error(`approve() -> proposal.get(${e}) failed`),S}let{pairingTopic:c,proposer:h,requiredNamespaces:p,optionalNamespaces:g}=a;c=c||"";const d=await this.client.core.crypto.generateKeyPair(),w=h.publicKey,m=await this.client.core.crypto.generateSharedKey(d,w),E=sign_client_dist_index_es_y(sign_client_dist_index_es_y({relay:{protocol:s??"irn"},namespaces:i,pairingTopic:c,controller:{publicKey:d,metadata:this.client.metadata},expiry:d0(dist_index_es_L)},r&&{sessionProperties:r}),o&&{sessionConfig:o});await this.client.core.relayer.subscribe(m);const O=index_es_M(sign_client_dist_index_es_y({},E),{topic:m,requiredNamespaces:p,optionalNamespaces:g,pairingTopic:c,acknowledged:!1,self:E.controller,peer:{publicKey:h.publicKey,metadata:h.metadata},controller:d});await this.client.session.set(m,O);try{await this.sendResult({id:e,topic:c,result:{relay:{protocol:s??"irn"},responderPublicKey:d},throwOnFailedPublish:!0}),await this.sendRequest({topic:m,method:"wc_sessionSettle",params:E,throwOnFailedPublish:!0})}catch(S){throw this.client.logger.error(S),this.client.session.delete(m,tr("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(m),S}return await this.client.core.pairing.updateMetadata({topic:c,metadata:h.metadata}),await this.client.proposal.delete(e,tr("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:c}),await this.setExpiry(m,d0(dist_index_es_L)),{topic:m,acknowledged:()=>new Promise(S=>setTimeout(()=>S(this.client.session.get(m)),500))}},this.reject=async t=>{await this.isInitialized();try{await this.isValidReject(t)}catch(r){throw this.client.logger.error("reject() -> isValidReject() failed"),r}const{id:e,reason:s}=t;let i;try{i=this.client.proposal.get(e).pairingTopic}catch(r){throw this.client.logger.error(`reject() -> proposal.get(${e}) failed`),r}i&&(await this.sendError({id:e,topic:i,error:s}),await this.client.proposal.delete(e,tr("USER_DISCONNECTED")))},this.update=async t=>{await this.isInitialized();try{await this.isValidUpdate(t)}catch(p){throw this.client.logger.error("update() -> isValidUpdate() failed"),p}const{topic:e,namespaces:s}=t,{done:i,resolve:r,reject:o}=a0(),a=payloadId(),c=getBigIntRpcId().toString(),h=this.client.session.get(e).namespaces;return this.events.once(v0("session_update",a),({error:p})=>{p?o(p):r()}),await this.client.session.update(e,{namespaces:s}),await this.sendRequest({topic:e,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:a,relayRpcId:c}).catch(p=>{this.client.logger.error(p),this.client.session.update(e,{namespaces:h}),o(p)}),{acknowledged:i}},this.extend=async t=>{await this.isInitialized();try{await this.isValidExtend(t)}catch(a){throw this.client.logger.error("extend() -> isValidExtend() failed"),a}const{topic:e}=t,s=payloadId(),{done:i,resolve:r,reject:o}=a0();return this.events.once(v0("session_extend",s),({error:a})=>{a?o(a):r()}),await this.setExpiry(e,d0(dist_index_es_L)),this.sendRequest({topic:e,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(a=>{o(a)}),{acknowledged:i}},this.request=async t=>{await this.isInitialized();try{await this.isValidRequest(t)}catch(d){throw this.client.logger.error("request() -> isValidRequest() failed"),d}const{chainId:e,request:s,topic:i,expiry:r=sign_client_dist_index_es_f.wc_sessionRequest.req.ttl}=t,o=this.client.session.get(i),a=payloadId(),c=getBigIntRpcId().toString(),{done:h,resolve:p,reject:g}=a0(r,"Request expired. Please try again.");return this.events.once(v0("session_request",a),({error:d,result:w})=>{d?g(d):p(w)}),await Promise.all([new Promise(async d=>{await this.sendRequest({clientRpcId:a,relayRpcId:c,topic:i,method:"wc_sessionRequest",params:{request:index_es_M(sign_client_dist_index_es_y({},s),{expiryTimestamp:d0(r)}),chainId:e},expiry:r,throwOnFailedPublish:!0}).catch(w=>g(w)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:e,id:a}),d()}),new Promise(async d=>{var w;if(!((w=o.sessionConfig)!=null&&w.disableDeepLink)){const m=await g0(this.client.core.storage,dist_index_es_e);m0({id:a,topic:i,wcDeepLink:m})}d()}),h()]).then(d=>d[2])},this.respond=async t=>{await this.isInitialized(),await this.isValidRespond(t);const{topic:e,response:s}=t,{id:i}=s;isJsonRpcResult(s)?await this.sendResult({id:i,topic:e,result:s.result,throwOnFailedPublish:!0}):isJsonRpcError(s)&&await this.sendError({id:i,topic:e,error:s.error}),this.cleanupAfterResponse(t)},this.ping=async t=>{await this.isInitialized();try{await this.isValidPing(t)}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:e}=t;if(this.client.session.keys.includes(e)){const s=payloadId(),i=getBigIntRpcId().toString(),{done:r,resolve:o,reject:a}=a0();this.events.once(v0("session_ping",s),({error:c})=>{c?a(c):o()}),await Promise.all([this.sendRequest({topic:e,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:i}),r()])}else this.client.core.pairing.pairings.keys.includes(e)&&await this.client.core.pairing.ping({topic:e})},this.emit=async t=>{await this.isInitialized(),await this.isValidEmit(t);const{topic:e,event:s,chainId:i}=t,r=getBigIntRpcId().toString();await this.sendRequest({topic:e,method:"wc_sessionEvent",params:{event:s,chainId:i},throwOnFailedPublish:!0,relayRpcId:r})},this.disconnect=async t=>{await this.isInitialized(),await this.isValidDisconnect(t);const{topic:e}=t;if(this.client.session.keys.includes(e))await this.sendRequest({topic:e,method:"wc_sessionDelete",params:tr("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:e,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(e))await this.client.core.pairing.disconnect({topic:e});else{const{message:s}=xe("MISMATCHED_TOPIC",`Session or pairing topic not found: ${e}`);throw new Error(s)}},this.find=t=>(this.isInitialized(),this.client.session.getAll().filter(e=>Qu(e,t))),this.getPendingSessionRequests=()=>this.client.pendingRequest.getAll(),this.authenticate=async t=>{this.isInitialized(),this.isValidAuthenticate(t);const{chains:e,statement:s="",uri:i,domain:r,nonce:o,type:a,exp:c,nbf:h,methods:p=[],expiry:g}=t,d=[...t.resources||[]],{topic:w,uri:m}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"]});this.client.logger.info({message:"Generated new pairing",pairing:{topic:w,uri:m}});const E=await this.client.core.crypto.generateKeyPair(),O=bu(E);if(await Promise.all([this.client.auth.authKeys.set(J,{responseTopic:O,publicKey:E}),this.client.auth.pairingTopics.set(O,{topic:O,pairingTopic:w})]),await this.client.core.relayer.subscribe(O),this.client.logger.info(`sending request to new pairing topic: ${w}`),p.length>0){const{namespace:T}=dn(e[0]);let _=cu(T,"request",p);Qr(d)&&(_=lu(_,d.pop())),d.push(_)}const S=g&&g>sign_client_dist_index_es_f.wc_sessionAuthenticate.req.ttl?g:sign_client_dist_index_es_f.wc_sessionAuthenticate.req.ttl,N={authPayload:{type:a??"caip122",chains:e,statement:s,aud:i,domain:r,version:"1",nonce:o,iat:new Date().toISOString(),exp:c,nbf:h,resources:d},requester:{publicKey:E,metadata:this.client.metadata},expiryTimestamp:d0(S)},P={eip155:{chains:e,methods:[...new Set(["personal_sign",...p])],events:["chainChanged","accountsChanged"]}},v={requiredNamespaces:{},optionalNamespaces:P,relays:[{protocol:"irn"}],proposer:{publicKey:E,metadata:this.client.metadata},expiryTimestamp:d0(sign_client_dist_index_es_f.wc_sessionPropose.req.ttl)},{done:B,resolve:Ie,reject:ae}=a0(S,"Request expired"),W=async({error:T,session:_})=>{if(this.events.off(v0("session_request",K),ce),T)ae(T);else if(_){_.self.publicKey=E,await this.client.session.set(_.topic,_),await this.setExpiry(_.topic,_.expiry),w&&await this.client.core.pairing.updateMetadata({topic:w,metadata:_.peer.metadata});const j=this.client.session.get(_.topic);await this.deleteProposal(Q),Ie({session:j})}},ce=async T=>{if(await this.deletePendingAuthRequest(K,{message:"fulfilled",code:0}),T.error){const z=tr("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return T.error.code===z.code?void 0:(this.events.off(v0("session_connect"),W),ae(T.error.message))}await this.deleteProposal(Q),this.events.off(v0("session_connect"),W);const{cacaos:_,responder:j}=T.result,le=[],fe=[];for(const z of _){await ou({cacao:z,projectId:this.client.core.projectId})||(this.client.logger.error(z,"Signature verification failed"),ae(tr("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:he}=z,pe=Qr(he.resources),qe=[fu(he.iss)],et=Li(he.iss);if(pe){const de=du(pe),tt=pu(pe);le.push(...de),qe.push(...tt)}for(const de of qe)fe.push(`${de}:${et}`)}const Z=await this.client.core.crypto.generateSharedKey(E,j.publicKey);let ee;le.length>0&&(ee={topic:Z,acknowledged:!0,self:{publicKey:E,metadata:this.client.metadata},peer:j,controller:j.publicKey,expiry:d0(dist_index_es_L),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:w,namespaces:ju([...new Set(le)],[...new Set(fe)])},await this.client.core.relayer.subscribe(Z),await this.client.session.set(Z,ee),ee=this.client.session.get(Z)),Ie({auths:_,session:ee})},K=payloadId(),Q=payloadId();this.events.once(v0("session_connect"),W),this.events.once(v0("session_request",K),ce);try{await Promise.all([this.sendRequest({topic:w,method:"wc_sessionAuthenticate",params:N,expiry:t.expiry,throwOnFailedPublish:!0,clientRpcId:K}),this.sendRequest({topic:w,method:"wc_sessionPropose",params:v,expiry:sign_client_dist_index_es_f.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:Q})])}catch(T){throw this.events.off(v0("session_connect"),W),this.events.off(v0("session_request",K),ce),T}return await this.setProposal(Q,sign_client_dist_index_es_y({id:Q},v)),await this.setAuthRequest(K,{request:index_es_M(sign_client_dist_index_es_y({},N),{verifyContext:{}}),pairingTopic:w}),{uri:m,response:B}},this.approveSessionAuthenticate=async t=>{this.isInitialized();const{id:e,auths:s}=t,i=this.getPendingAuthRequest(e);if(!i)throw new Error(`Could not find pending auth request with id ${e}`);const r=i.requester.publicKey,o=await this.client.core.crypto.generateKeyPair(),a=bu(r),c={type:lr,receiverPublicKey:r,senderPublicKey:o},h=[],p=[];for(const w of s){if(!await ou({cacao:w,projectId:this.client.core.projectId})){const N=tr("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:e,topic:a,error:N,encodeOpts:c}),new Error(N.message)}const{p:m}=w,E=Qr(m.resources),O=[fu(m.iss)],S=Li(m.iss);if(E){const N=du(E),P=pu(E);h.push(...N),O.push(...P)}for(const N of O)p.push(`${N}:${S}`)}const g=await this.client.core.crypto.generateSharedKey(o,r);let d;return h?.length>0&&(d={topic:g,acknowledged:!0,self:{publicKey:o,metadata:this.client.metadata},peer:{publicKey:r,metadata:i.requester.metadata},controller:r,expiry:d0(dist_index_es_L),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:"",namespaces:ju([...new Set(h)],[...new Set(p)])},await this.client.core.relayer.subscribe(g),await this.client.session.set(g,d)),await this.sendResult({topic:a,id:e,result:{cacaos:s,responder:{publicKey:o,metadata:this.client.metadata}},encodeOpts:c,throwOnFailedPublish:!0}),await this.client.auth.requests.delete(e,{message:"fullfilled",code:0}),await this.client.core.pairing.activate({topic:i.pairingTopic}),{session:d}},this.rejectSessionAuthenticate=async t=>{await this.isInitialized();const{id:e,reason:s}=t,i=this.getPendingAuthRequest(e);if(!i)throw new Error(`Could not find pending auth request with id ${e}`);const r=i.requester.publicKey,o=await this.client.core.crypto.generateKeyPair(),a=bu(r),c={type:lr,receiverPublicKey:r,senderPublicKey:o};await this.sendError({id:e,topic:a,error:s,encodeOpts:c}),await this.client.auth.requests.delete(e,{message:"rejected",code:0}),await this.client.proposal.delete(e,tr("USER_DISCONNECTED"))},this.formatAuthMessage=t=>{this.isInitialized();const{request:e,iss:s}=t;return zf(e,s)},this.cleanupDuplicatePairings=async t=>{if(t.pairingTopic)try{const e=this.client.core.pairing.pairings.get(t.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(i=>{var r,o;return((r=i.peerMetadata)==null?void 0:r.url)&&((o=i.peerMetadata)==null?void 0:o.url)===t.peer.metadata.url&&i.topic&&i.topic!==e.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(i=>this.client.core.pairing.disconnect({topic:i.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(e){this.client.logger.error(e)}},this.deleteSession=async t=>{const{topic:e,expirerHasDeleted:s=!1,emitEvent:i=!0,id:r=0}=t,{self:o}=this.client.session.get(e);await this.client.core.relayer.unsubscribe(e),await this.client.session.delete(e,tr("USER_DISCONNECTED")),this.addToRecentlyDeleted(e,"session"),this.client.core.crypto.keychain.has(o.publicKey)&&await this.client.core.crypto.deleteKeyPair(o.publicKey),this.client.core.crypto.keychain.has(e)&&await this.client.core.crypto.deleteSymKey(e),s||this.client.core.expirer.del(e),this.client.core.storage.removeItem(dist_index_es_e).catch(a=>this.client.logger.warn(a)),this.getPendingSessionRequests().forEach(a=>{a.topic===e&&this.deletePendingSessionRequest(a.id,tr("USER_DISCONNECTED"))}),i&&this.client.events.emit("session_delete",{id:r,topic:e})},this.deleteProposal=async(t,e)=>{await Promise.all([this.client.proposal.delete(t,tr("USER_DISCONNECTED")),e?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"proposal")},this.deletePendingSessionRequest=async(t,e,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(i=>i.id!==t),s&&(this.sessionRequestQueue.state=index_es_D.idle,this.client.events.emit("session_request_expire",{id:t}))},this.deletePendingAuthRequest=async(t,e,s=!1)=>{await Promise.all([this.client.auth.requests.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)])},this.setExpiry=async(t,e)=>{this.client.session.keys.includes(t)&&(this.client.core.expirer.set(t,e),await this.client.session.update(t,{expiry:e}))},this.setProposal=async(t,e)=>{this.client.core.expirer.set(t,d0(sign_client_dist_index_es_f.wc_sessionPropose.req.ttl)),await this.client.proposal.set(t,e)},this.setAuthRequest=async(t,e)=>{const{request:s,pairingTopic:i}=e;this.client.core.expirer.set(t,s.expiryTimestamp),await this.client.auth.requests.set(t,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:t,pairingTopic:i,verifyContext:s.verifyContext})},this.setPendingSessionRequest=async t=>{const{id:e,topic:s,params:i,verifyContext:r}=t,o=i.request.expiryTimestamp||d0(sign_client_dist_index_es_f.wc_sessionRequest.req.ttl);this.client.core.expirer.set(e,o),await this.client.pendingRequest.set(e,{id:e,topic:s,params:i,verifyContext:r})},this.sendRequest=async t=>{const{topic:e,method:s,params:i,expiry:r,relayRpcId:o,clientRpcId:a,throwOnFailedPublish:c}=t,h=formatJsonRpcRequest(s,i,a);if(pr()&&index_es_je.includes(s)){const d=yu(JSON.stringify(h));this.client.core.verify.register({attestationId:d})}let p;try{p=await this.client.core.crypto.encode(e,h)}catch(d){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e} failed`),d}const g=sign_client_dist_index_es_f[s].req;return r&&(g.ttl=r),o&&(g.id=o),this.client.core.history.set(e,h),c?(g.internal=index_es_M(sign_client_dist_index_es_y({},g.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(e,p,g)):this.client.core.relayer.publish(e,p,g).catch(d=>this.client.logger.error(d)),h.id},this.sendResult=async t=>{const{id:e,topic:s,result:i,throwOnFailedPublish:r,encodeOpts:o}=t,a=formatJsonRpcResult(e,i);let c;try{c=await this.client.core.crypto.encode(s,a,o)}catch(g){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),g}let h;try{h=await this.client.core.history.get(s,e)}catch(g){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${e}) failed`),g}const p=sign_client_dist_index_es_f[h.request.method].res;r?(p.internal=index_es_M(sign_client_dist_index_es_y({},p.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,c,p)):this.client.core.relayer.publish(s,c,p).catch(g=>this.client.logger.error(g)),await this.client.core.history.resolve(a)},this.sendError=async t=>{const{id:e,topic:s,error:i,encodeOpts:r}=t,o=formatJsonRpcError(e,i);let a;try{a=await this.client.core.crypto.encode(s,o,r)}catch(p){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),p}let c;try{c=await this.client.core.history.get(s,e)}catch(p){throw this.client.logger.error(`sendError() -> history.get(${s}, ${e}) failed`),p}const h=sign_client_dist_index_es_f[c.request.method].res;this.client.core.relayer.publish(s,a,h),await this.client.core.history.resolve(o)},this.cleanup=async()=>{const t=[],e=[];this.client.session.getAll().forEach(s=>{let i=!1;p0(s.expiry)&&(i=!0),this.client.core.crypto.keychain.has(s.topic)||(i=!0),i&&t.push(s.topic)}),this.client.proposal.getAll().forEach(s=>{p0(s.expiryTimestamp)&&e.push(s.id)}),await Promise.all([...t.map(s=>this.deleteSession({topic:s})),...e.map(s=>this.deleteProposal(s))])},this.onRelayEventRequest=async t=>{this.requestQueue.queue.push(t),await this.processRequestsQueue()},this.processRequestsQueue=async()=>{if(this.requestQueue.state===index_es_D.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=index_es_D.active;const t=this.requestQueue.queue.shift();if(t)try{this.processRequest(t),await new Promise(e=>setTimeout(e,300))}catch(e){this.client.logger.warn(e)}}this.requestQueue.state=index_es_D.idle},this.processRequest=t=>{const{topic:e,payload:s}=t,i=s.method;if(!this.shouldIgnorePairingRequest({topic:e,requestMethod:i}))switch(i){case"wc_sessionPropose":return this.onSessionProposeRequest(e,s);case"wc_sessionSettle":return this.onSessionSettleRequest(e,s);case"wc_sessionUpdate":return this.onSessionUpdateRequest(e,s);case"wc_sessionExtend":return this.onSessionExtendRequest(e,s);case"wc_sessionPing":return this.onSessionPingRequest(e,s);case"wc_sessionDelete":return this.onSessionDeleteRequest(e,s);case"wc_sessionRequest":return this.onSessionRequest(e,s);case"wc_sessionEvent":return this.onSessionEventRequest(e,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateRequest(e,s);default:return this.client.logger.info(`Unsupported request method ${i}`)}},this.onRelayEventResponse=async t=>{const{topic:e,payload:s}=t,i=(await this.client.core.history.get(e,s.id)).request.method;switch(i){case"wc_sessionPropose":return this.onSessionProposeResponse(e,s);case"wc_sessionSettle":return this.onSessionSettleResponse(e,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(e,s);case"wc_sessionExtend":return this.onSessionExtendResponse(e,s);case"wc_sessionPing":return this.onSessionPingResponse(e,s);case"wc_sessionRequest":return this.onSessionRequestResponse(e,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(e,s);default:return this.client.logger.info(`Unsupported response method ${i}`)}},this.onRelayEventUnknownPayload=t=>{const{topic:e}=t,{message:s}=xe("MISSING_OR_INVALID",`Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)},this.shouldIgnorePairingRequest=t=>{const{topic:e,requestMethod:s}=t,i=this.expectedPairingMethodMap.get(e);return!i||i.includes(s)?!1:!!(i.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)},this.onSessionProposeRequest=async(t,e)=>{const{params:s,id:i}=e;try{this.isValidConnect(sign_client_dist_index_es_y({},e.params));const r=s.expiryTimestamp||d0(sign_client_dist_index_es_f.wc_sessionPropose.req.ttl),o=sign_client_dist_index_es_y({id:i,pairingTopic:t,expiryTimestamp:r},s);await this.setProposal(i,o);const a=yu(JSON.stringify(e)),c=await this.getVerifyContext(a,o.proposer.metadata);this.client.events.emit("session_proposal",{id:i,params:o,verifyContext:c})}catch(r){await this.sendError({id:i,topic:t,error:r}),this.client.logger.error(r)}},this.onSessionProposeResponse=async(t,e)=>{const{id:s}=e;if(isJsonRpcResult(e)){const{result:i}=e;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:i});const r=this.client.proposal.get(s);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:r});const o=r.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:o});const a=i.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:a});const c=await this.client.core.crypto.generateSharedKey(o,a);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",sessionTopic:c});const h=await this.client.core.relayer.subscribe(c);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:h}),await this.client.core.pairing.activate({topic:t})}else if(isJsonRpcError(e)){await this.client.proposal.delete(s,tr("USER_DISCONNECTED"));const i=v0("session_connect");if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners, 954`);this.events.emit(v0("session_connect"),{error:e.error})}},this.onSessionSettleRequest=async(t,e)=>{const{id:s,params:i}=e;try{this.isValidSessionSettleRequest(i);const{relay:r,controller:o,expiry:a,namespaces:c,sessionProperties:h,pairingTopic:p,sessionConfig:g}=e.params,d=sign_client_dist_index_es_y(sign_client_dist_index_es_y({topic:t,relay:r,expiry:a,namespaces:c,acknowledged:!0,pairingTopic:p,requiredNamespaces:{},optionalNamespaces:{},controller:o.publicKey,self:{publicKey:"",metadata:this.client.metadata},peer:{publicKey:o.publicKey,metadata:o.metadata}},h&&{sessionProperties:h}),g&&{sessionConfig:g});await this.sendResult({id:e.id,topic:t,result:!0,throwOnFailedPublish:!0});const w=v0("session_connect");if(this.events.listenerCount(w)===0)throw new Error(`emitting ${w} without any listeners 997`);this.events.emit(v0("session_connect"),{session:d}),this.cleanupDuplicatePairings(d)}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r)}},this.onSessionSettleResponse=async(t,e)=>{const{id:s}=e;isJsonRpcResult(e)?(await this.client.session.update(t,{acknowledged:!0}),this.events.emit(v0("session_approve",s),{})):isJsonRpcError(e)&&(await this.client.session.delete(t,tr("USER_DISCONNECTED")),this.events.emit(v0("session_approve",s),{error:e.error}))},this.onSessionUpdateRequest=async(t,e)=>{const{params:s,id:i}=e;try{const r=`${t}_session_update`,o=lh.get(r);if(o&&this.isRequestOutOfSync(o,i)){this.client.logger.info(`Discarding out of sync request - ${i}`),this.sendError({id:i,topic:t,error:tr("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(sign_client_dist_index_es_y({topic:t},s));try{lh.set(r,i),await this.client.session.update(t,{namespaces:s.namespaces}),await this.sendResult({id:i,topic:t,result:!0,throwOnFailedPublish:!0})}catch(a){throw lh.delete(r),a}this.client.events.emit("session_update",{id:i,topic:t,params:s})}catch(r){await this.sendError({id:i,topic:t,error:r}),this.client.logger.error(r)}},this.isRequestOutOfSync=(t,e)=>parseInt(e.toString().slice(0,-3))<=parseInt(t.toString().slice(0,-3)),this.onSessionUpdateResponse=(t,e)=>{const{id:s}=e,i=v0("session_update",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(v0("session_update",s),{}):isJsonRpcError(e)&&this.events.emit(v0("session_update",s),{error:e.error})},this.onSessionExtendRequest=async(t,e)=>{const{id:s}=e;try{this.isValidExtend({topic:t}),await this.setExpiry(t,d0(dist_index_es_L)),await this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:s,topic:t})}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i)}},this.onSessionExtendResponse=(t,e)=>{const{id:s}=e,i=v0("session_extend",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(v0("session_extend",s),{}):isJsonRpcError(e)&&this.events.emit(v0("session_extend",s),{error:e.error})},this.onSessionPingRequest=async(t,e)=>{const{id:s}=e;try{this.isValidPing({topic:t}),await this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:t})}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i)}},this.onSessionPingResponse=(t,e)=>{const{id:s}=e,i=v0("session_ping",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);setTimeout(()=>{isJsonRpcResult(e)?this.events.emit(v0("session_ping",s),{}):isJsonRpcError(e)&&this.events.emit(v0("session_ping",s),{error:e.error})},500)},this.onSessionDeleteRequest=async(t,e)=>{const{id:s}=e;try{this.isValidDisconnect({topic:t,reason:e.params}),await Promise.all([new Promise(i=>{this.client.core.relayer.once(core_dist_index_es_f.publish,async()=>{i(await this.deleteSession({topic:t,id:s}))})}),this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:t,error:tr("USER_DISCONNECTED")})])}catch(i){this.client.logger.error(i)}},this.onSessionRequest=async(t,e)=>{var s;const{id:i,params:r}=e;try{await this.isValidRequest(sign_client_dist_index_es_y({topic:t},r));const o=yu(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest",r,i))),a=this.client.session.get(t),c=await this.getVerifyContext(o,a.peer.metadata),h={id:i,topic:t,params:r,verifyContext:c};await this.setPendingSessionRequest(h),(s=this.client.signConfig)!=null&&s.disableRequestQueue?this.emitSessionRequest(h):(this.addSessionRequestToSessionRequestQueue(h),this.processSessionRequestQueue())}catch(o){await this.sendError({id:i,topic:t,error:o}),this.client.logger.error(o)}},this.onSessionRequestResponse=(t,e)=>{const{id:s}=e,i=v0("session_request",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);isJsonRpcResult(e)?this.events.emit(v0("session_request",s),{result:e.result}):isJsonRpcError(e)&&this.events.emit(v0("session_request",s),{error:e.error})},this.onSessionEventRequest=async(t,e)=>{const{id:s,params:i}=e;try{const r=`${t}_session_event_${i.event.name}`,o=lh.get(r);if(o&&this.isRequestOutOfSync(o,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(sign_client_dist_index_es_y({topic:t},i)),this.client.events.emit("session_event",{id:s,topic:t,params:i}),lh.set(r,s)}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r)}},this.onSessionAuthenticateResponse=(t,e)=>{const{id:s}=e;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:t,payload:e}),isJsonRpcResult(e)?this.events.emit(v0("session_request",s),{result:e.result}):isJsonRpcError(e)&&this.events.emit(v0("session_request",s),{error:e.error})},this.onSessionAuthenticateRequest=async(t,e)=>{const{requester:s,authPayload:i,expiryTimestamp:r}=e.params,o=yu(JSON.stringify(e)),a=await this.getVerifyContext(o,this.client.metadata),c={requester:s,pairingTopic:t,id:e.id,authPayload:i,verifyContext:a,expiryTimestamp:r};await this.setAuthRequest(e.id,{request:c,pairingTopic:t}),this.client.events.emit("session_authenticate",{topic:t,params:e.params,id:e.id})},this.addSessionRequestToSessionRequestQueue=t=>{this.sessionRequestQueue.queue.push(t)},this.cleanupAfterResponse=t=>{this.deletePendingSessionRequest(t.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=index_es_D.idle,this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay))},this.cleanupPendingSentRequestsForTopic=({topic:t,error:e})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(i=>i.topic===t&&i.request.method==="wc_sessionRequest").forEach(i=>{const r=i.request.id,o=v0("session_request",r);if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners`);this.events.emit(v0("session_request",i.request.id),{error:e})})},this.processSessionRequestQueue=()=>{if(this.sessionRequestQueue.state===index_es_D.active){this.client.logger.info("session request queue is already active.");return}const t=this.sessionRequestQueue.queue[0];if(!t){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=index_es_D.active,this.emitSessionRequest(t)}catch(e){this.client.logger.error(e)}},this.emitSessionRequest=t=>{this.client.events.emit("session_request",t)},this.onPairingCreated=t=>{if(t.methods&&this.expectedPairingMethodMap.set(t.topic,t.methods),t.active)return;const e=this.client.proposal.getAll().find(s=>s.pairingTopic===t.topic);e&&this.onSessionProposeRequest(t.topic,formatJsonRpcRequest("wc_sessionPropose",{requiredNamespaces:e.requiredNamespaces,optionalNamespaces:e.optionalNamespaces,relays:e.relays,proposer:e.proposer,sessionProperties:e.sessionProperties},e.id))},this.isValidConnect=async t=>{if(!$u(t)){const{message:a}=xe("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(t)}`);throw new Error(a)}const{pairingTopic:e,requiredNamespaces:s,optionalNamespaces:i,sessionProperties:r,relays:o}=t;if(Pe(e)||await this.isValidPairingTopic(e),!Xu(o,!0)){const{message:a}=xe("MISSING_OR_INVALID",`connect() relays: ${o}`);throw new Error(a)}!Pe(s)&&Yr(s)!==0&&this.validateNamespaces(s,"requiredNamespaces"),!Pe(i)&&Yr(i)!==0&&this.validateNamespaces(i,"optionalNamespaces"),Pe(r)||this.validateSessionProps(r,"sessionProperties")},this.validateNamespaces=(t,e)=>{const s=Wu(t,"connect()",e);if(s)throw new Error(s.message)},this.isValidApprove=async t=>{if(!$u(t))throw new Error(xe("MISSING_OR_INVALID",`approve() params: ${t}`).message);const{id:e,namespaces:s,relayProtocol:i,sessionProperties:r}=t;this.checkRecentlyDeleted(e),await this.isValidProposalId(e);const o=this.client.proposal.get(e),a=So(s,"approve()");if(a)throw new Error(a.message);const c=Io(o.requiredNamespaces,s,"approve()");if(c)throw new Error(c.message);if(!Gt(i,!0)){const{message:h}=xe("MISSING_OR_INVALID",`approve() relayProtocol: ${i}`);throw new Error(h)}Pe(r)||this.validateSessionProps(r,"sessionProperties")},this.isValidReject=async t=>{if(!$u(t)){const{message:i}=xe("MISSING_OR_INVALID",`reject() params: ${t}`);throw new Error(i)}const{id:e,reason:s}=t;if(this.checkRecentlyDeleted(e),await this.isValidProposalId(e),!th(s)){const{message:i}=xe("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(i)}},this.isValidSessionSettleRequest=t=>{if(!$u(t)){const{message:c}=xe("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${t}`);throw new Error(c)}const{relay:e,controller:s,namespaces:i,expiry:r}=t;if(!No(e)){const{message:c}=xe("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(c)}const o=Vu(s,"onSessionSettleRequest()");if(o)throw new Error(o.message);const a=So(i,"onSessionSettleRequest()");if(a)throw new Error(a.message);if(p0(r)){const{message:c}=xe("EXPIRED","onSessionSettleRequest()");throw new Error(c)}},this.isValidUpdate=async t=>{if(!$u(t)){const{message:a}=xe("MISSING_OR_INVALID",`update() params: ${t}`);throw new Error(a)}const{topic:e,namespaces:s}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const i=this.client.session.get(e),r=So(s,"update()");if(r)throw new Error(r.message);const o=Io(i.requiredNamespaces,s,"update()");if(o)throw new Error(o.message)},this.isValidExtend=async t=>{if(!$u(t)){const{message:s}=xe("MISSING_OR_INVALID",`extend() params: ${t}`);throw new Error(s)}const{topic:e}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e)},this.isValidRequest=async t=>{if(!$u(t)){const{message:a}=xe("MISSING_OR_INVALID",`request() params: ${t}`);throw new Error(a)}const{topic:e,request:s,chainId:i,expiry:r}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const{namespaces:o}=this.client.session.get(e);if(!nh(o,i)){const{message:a}=xe("MISSING_OR_INVALID",`request() chainId: ${i}`);throw new Error(a)}if(!eh(s)){const{message:a}=xe("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(a)}if(!fh(o,i,s.method)){const{message:a}=xe("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(a)}if(r&&!uh(r,index_es_ne)){const{message:a}=xe("MISSING_OR_INVALID",`request() expiry: ${r}. Expiry must be a number (in seconds) between ${index_es_ne.min} and ${index_es_ne.max}`);throw new Error(a)}},this.isValidRespond=async t=>{var e;if(!$u(t)){const{message:r}=xe("MISSING_OR_INVALID",`respond() params: ${t}`);throw new Error(r)}const{topic:s,response:i}=t;try{await this.isValidSessionTopic(s)}catch(r){throw(e=t?.response)!=null&&e.id&&this.cleanupAfterResponse(t),r}if(!rh(i)){const{message:r}=xe("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(r)}},this.isValidPing=async t=>{if(!$u(t)){const{message:s}=xe("MISSING_OR_INVALID",`ping() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e)},this.isValidEmit=async t=>{if(!$u(t)){const{message:o}=xe("MISSING_OR_INVALID",`emit() params: ${t}`);throw new Error(o)}const{topic:e,event:s,chainId:i}=t;await this.isValidSessionTopic(e);const{namespaces:r}=this.client.session.get(e);if(!nh(r,i)){const{message:o}=xe("MISSING_OR_INVALID",`emit() chainId: ${i}`);throw new Error(o)}if(!ih(s)){const{message:o}=xe("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(o)}if(!oh(r,i,s.name)){const{message:o}=xe("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(o)}},this.isValidDisconnect=async t=>{if(!$u(t)){const{message:s}=xe("MISSING_OR_INVALID",`disconnect() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e)},this.isValidAuthenticate=t=>{const{chains:e,uri:s,domain:i,nonce:r}=t;if(!Array.isArray(e)||e.length===0)throw new Error("chains is required and must be a non-empty array");if(!Gt(s,!1))throw new Error("uri is required parameter");if(!Gt(i,!1))throw new Error("domain is required parameter");if(!Gt(r,!1))throw new Error("nonce is required parameter");if([...new Set(e.map(a=>dn(a).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:o}=dn(e[0]);if(o!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")},this.getVerifyContext=async(t,e)=>{const s={verified:{verifyUrl:e.verifyUrl||M,validation:"UNKNOWN",origin:e.url||""}};try{const i=await this.client.core.verify.resolve({attestationId:t,verifyUrl:e.verifyUrl});i&&(s.verified.origin=i.origin,s.verified.isScam=i.isScam,s.verified.validation=i.origin===new URL(e.url).origin?"VALID":"INVALID")}catch(i){this.client.logger.info(i)}return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`),s},this.validateSessionProps=(t,e)=>{Object.values(t).forEach(s=>{if(!Gt(s,!1)){const{message:i}=xe("MISSING_OR_INVALID",`${e} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);throw new Error(i)}})},this.getPendingAuthRequest=t=>{const e=this.client.auth.requests.get(t);return typeof e=="object"?e:void 0},this.addToRecentlyDeleted=(t,e)=>{if(this.recentlyDeletedMap.set(t,e),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const i=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(s++>=i)break;this.recentlyDeletedMap.delete(r)}}},this.checkRecentlyDeleted=t=>{const e=this.recentlyDeletedMap.get(t);if(e){const{message:s}=xe("MISSING_OR_INVALID",`Record was recently deleted - ${e}: ${t}`);throw new Error(s)}}}async isInitialized(){if(!this.initialized){const{message:n}=xe("NOT_INITIALIZED",this.name);throw new Error(n)}await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(core_dist_index_es_f.message,async n=>{const{topic:t,message:e}=n,{publicKey:s}=this.client.auth.authKeys.keys.includes(J)?this.client.auth.authKeys.get(J):{responseTopic:void 0,publicKey:void 0},i=await this.client.core.crypto.decode(t,e,{receiverPublicKey:s});try{isJsonRpcRequest(i)?(this.client.core.history.set(t,i),this.onRelayEventRequest({topic:t,payload:i})):isJsonRpcResponse(i)?(await this.client.core.history.resolve(i),await this.onRelayEventResponse({topic:t,payload:i}),this.client.core.history.delete(t,i.id)):this.onRelayEventUnknownPayload({topic:t,payload:i})}catch(r){this.client.logger.error(r)}})}registerExpirerEvents(){this.client.core.expirer.on(core_dist_index_es_C.expired,async n=>{const{topic:t,id:e}=l0(n.target);if(e&&this.client.pendingRequest.keys.includes(e))return await this.deletePendingSessionRequest(e,xe("EXPIRED"),!0);if(e&&this.client.auth.requests.keys.includes(e))return await this.deletePendingAuthRequest(e,xe("EXPIRED"),!0);t?this.client.session.keys.includes(t)&&(await this.deleteSession({topic:t,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:t})):e&&(await this.deleteProposal(e,!0),this.client.events.emit("proposal_expire",{id:e}))})}registerPairingEvents(){this.client.core.pairing.events.on(index_es_q.create,n=>this.onPairingCreated(n)),this.client.core.pairing.events.on(index_es_q.delete,n=>{this.addToRecentlyDeleted(n.topic,"pairing")})}isValidPairingTopic(n){if(!Gt(n,!1)){const{message:t}=xe("MISSING_OR_INVALID",`pairing topic should be a string: ${n}`);throw new Error(t)}if(!this.client.core.pairing.pairings.keys.includes(n)){const{message:t}=xe("NO_MATCHING_KEY",`pairing topic doesn't exist: ${n}`);throw new Error(t)}if(p0(this.client.core.pairing.pairings.get(n).expiry)){const{message:t}=xe("EXPIRED",`pairing topic: ${n}`);throw new Error(t)}}async isValidSessionTopic(n){if(!Gt(n,!1)){const{message:t}=xe("MISSING_OR_INVALID",`session topic should be a string: ${n}`);throw new Error(t)}if(this.checkRecentlyDeleted(n),!this.client.session.keys.includes(n)){const{message:t}=xe("NO_MATCHING_KEY",`session topic doesn't exist: ${n}`);throw new Error(t)}if(p0(this.client.session.get(n).expiry)){await this.deleteSession({topic:n});const{message:t}=xe("EXPIRED",`session topic: ${n}`);throw new Error(t)}if(!this.client.core.crypto.keychain.has(n)){const{message:t}=xe("MISSING_OR_INVALID",`session topic does not exist in keychain: ${n}`);throw await this.deleteSession({topic:n}),new Error(t)}}async isValidSessionOrPairingTopic(n){if(this.checkRecentlyDeleted(n),this.client.session.keys.includes(n))await this.isValidSessionTopic(n);else if(this.client.core.pairing.pairings.keys.includes(n))this.isValidPairingTopic(n);else if(Gt(n,!1)){const{message:t}=xe("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${n}`);throw new Error(t)}else{const{message:t}=xe("MISSING_OR_INVALID",`session or pairing topic should be a string: ${n}`);throw new Error(t)}}async isValidProposalId(n){if(!Zu(n)){const{message:t}=xe("MISSING_OR_INVALID",`proposal id should be a number: ${n}`);throw new Error(t)}if(!this.client.proposal.keys.includes(n)){const{message:t}=xe("NO_MATCHING_KEY",`proposal id doesn't exist: ${n}`);throw new Error(t)}if(p0(this.client.proposal.get(n).expiryTimestamp)){await this.deleteProposal(n);const{message:t}=xe("EXPIRED",`proposal id: ${n}`);throw new Error(t)}}}class dist_index_es_es extends index_es_Kt{constructor(n,t){super(n,t,index_es_Ue,dist_index_es_ie),this.core=n,this.logger=t}}class dist_index_es_Ze extends index_es_Kt{constructor(n,t){super(n,t,index_es_ke,dist_index_es_ie),this.core=n,this.logger=t}}class dist_index_es_ts extends index_es_Kt{constructor(n,t){super(n,t,index_es_Qe,dist_index_es_ie,e=>e.id),this.core=n,this.logger=t}}class dist_index_es_ss extends index_es_Kt{constructor(n,t){super(n,t,index_es_Ye,X,()=>J),this.core=n,this.logger=t}}class dist_index_es_is extends index_es_Kt{constructor(n,t){super(n,t,dist_index_es_Xe,X),this.core=n,this.logger=t}}class dist_index_es_rs extends index_es_Kt{constructor(n,t){super(n,t,index_es_Je,X,e=>e.id),this.core=n,this.logger=t}}class dist_index_es_ns{constructor(n,t){this.core=n,this.logger=t,this.authKeys=new dist_index_es_ss(this.core,this.logger),this.pairingTopics=new dist_index_es_is(this.core,this.logger),this.requests=new dist_index_es_rs(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}class index_es_oe extends dist_index_es_b{constructor(n){super(n),this.protocol=index_es_Re,this.version=Ee,this.name=index_es_re.name,this.events=new external_events_.EventEmitter,this.on=(e,s)=>this.events.on(e,s),this.once=(e,s)=>this.events.once(e,s),this.off=(e,s)=>this.events.off(e,s),this.removeListener=(e,s)=>this.events.removeListener(e,s),this.removeAllListeners=e=>this.events.removeAllListeners(e),this.connect=async e=>{try{return await this.engine.connect(e)}catch(s){throw this.logger.error(s.message),s}},this.pair=async e=>{try{return await this.engine.pair(e)}catch(s){throw this.logger.error(s.message),s}},this.approve=async e=>{try{return await this.engine.approve(e)}catch(s){throw this.logger.error(s.message),s}},this.reject=async e=>{try{return await this.engine.reject(e)}catch(s){throw this.logger.error(s.message),s}},this.update=async e=>{try{return await this.engine.update(e)}catch(s){throw this.logger.error(s.message),s}},this.extend=async e=>{try{return await this.engine.extend(e)}catch(s){throw this.logger.error(s.message),s}},this.request=async e=>{try{return await this.engine.request(e)}catch(s){throw this.logger.error(s.message),s}},this.respond=async e=>{try{return await this.engine.respond(e)}catch(s){throw this.logger.error(s.message),s}},this.ping=async e=>{try{return await this.engine.ping(e)}catch(s){throw this.logger.error(s.message),s}},this.emit=async e=>{try{return await this.engine.emit(e)}catch(s){throw this.logger.error(s.message),s}},this.disconnect=async e=>{try{return await this.engine.disconnect(e)}catch(s){throw this.logger.error(s.message),s}},this.find=e=>{try{return this.engine.find(e)}catch(s){throw this.logger.error(s.message),s}},this.getPendingSessionRequests=()=>{try{return this.engine.getPendingSessionRequests()}catch(e){throw this.logger.error(e.message),e}},this.authenticate=async e=>{try{return await this.engine.authenticate(e)}catch(s){throw this.logger.error(s.message),s}},this.formatAuthMessage=e=>{try{return this.engine.formatAuthMessage(e)}catch(s){throw this.logger.error(s.message),s}},this.approveSessionAuthenticate=async e=>{try{return await this.engine.approveSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}},this.rejectSessionAuthenticate=async e=>{try{return await this.engine.rejectSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}},this.name=n?.name||index_es_re.name,this.metadata=n?.metadata||Xo(),this.signConfig=n?.signConfig;const t=typeof n?.logger<"u"&&typeof n?.logger!="string"?n.logger:pino_default()(dist_index_es_k({level:n?.logger||index_es_re.logger}));this.core=n?.core||new index_es_Br(n),this.logger=dist_index_es_E(t,this.name),this.session=new dist_index_es_Ze(this.core,this.logger),this.proposal=new dist_index_es_es(this.core,this.logger),this.pendingRequest=new dist_index_es_ts(this.core,this.logger),this.engine=new index_es_Zt(this),this.auth=new dist_index_es_ns(this.core,this.logger)}static async init(n){const t=new index_es_oe(n);return await t.initialize(),t}get context(){return index_es_y(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.engine.init(),await this.auth.init(),this.core.verify.init({verifyUrl:this.metadata.verifyUrl}),this.logger.info("SignClient Initialization Success")}catch(n){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(n.message),n}}}const dist_index_es_os=(/* unused pure expression or super */ null && (dist_index_es_Ze)),dist_index_es_as=(/* unused pure expression or super */ null && (index_es_oe));
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/node-ponyfill.js
var node_ponyfill = __webpack_require__(144484);
var node_ponyfill_default = /*#__PURE__*/__webpack_require__.n(node_ponyfill);
;// CONCATENATED MODULE: ./node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var index_es_P=Object.defineProperty,jsonrpc_http_connection_dist_index_es_w=Object.defineProperties,jsonrpc_http_connection_dist_index_es_E=Object.getOwnPropertyDescriptors,jsonrpc_http_connection_dist_index_es_c=Object.getOwnPropertySymbols,jsonrpc_http_connection_dist_index_es_L=Object.prototype.hasOwnProperty,dist_index_es_O=Object.prototype.propertyIsEnumerable,jsonrpc_http_connection_dist_index_es_l=(r,t,e)=>t in r?index_es_P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,jsonrpc_http_connection_dist_index_es_p=(r,t)=>{for(var e in t||(t={}))jsonrpc_http_connection_dist_index_es_L.call(t,e)&&jsonrpc_http_connection_dist_index_es_l(r,e,t[e]);if(jsonrpc_http_connection_dist_index_es_c)for(var e of jsonrpc_http_connection_dist_index_es_c(t))dist_index_es_O.call(t,e)&&jsonrpc_http_connection_dist_index_es_l(r,e,t[e]);return r},dist_index_es_v=(r,t)=>jsonrpc_http_connection_dist_index_es_w(r,jsonrpc_http_connection_dist_index_es_E(t));const jsonrpc_http_connection_dist_index_es_j={Accept:"application/json","Content-Type":"application/json"},index_es_T="POST",jsonrpc_http_connection_dist_index_es_d={headers:jsonrpc_http_connection_dist_index_es_j,method:index_es_T},jsonrpc_http_connection_dist_index_es_g=10;class jsonrpc_http_connection_dist_index_es_f{constructor(t,e=!1){if(this.url=t,this.disableProviderPing=e,this.events=new external_events_.EventEmitter,this.isAvailable=!1,this.registering=!1,!isHttpUrl(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t,this.disableProviderPing=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t){this.isAvailable||await this.register();try{const e=safeJsonStringify(t),s=await(await node_ponyfill_default()(this.url,dist_index_es_v(jsonrpc_http_connection_dist_index_es_p({},jsonrpc_http_connection_dist_index_es_d),{body:e}))).json();this.onPayload({data:s})}catch(e){this.onError(t.id,e)}}async register(t=this.url){if(!isHttpUrl(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise((s,i)=>{this.events.once("register_error",n=>{this.resetMaxListeners(),i(n)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return i(new Error("HTTP connection is missing or invalid"));s()})})}this.url=t,this.registering=!0;try{if(!this.disableProviderPing){const e=safeJsonStringify({id:1,jsonrpc:"2.0",method:"test",params:[]});await node_ponyfill_default()(t,dist_index_es_v(jsonrpc_http_connection_dist_index_es_p({},jsonrpc_http_connection_dist_index_es_d),{body:e}))}this.onOpen()}catch(e){const s=this.parseError(e);throw this.events.emit("register_error",s),this.onClose(),s}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(typeof t.data>"u")return;const e=typeof t.data=="string"?esm_safeJsonParse(t.data):t.data;this.events.emit("payload",e)}onError(t,e){const s=this.parseError(e),i=s.message||s.toString(),n=formatJsonRpcError(t,i);this.events.emit("payload",n)}parseError(t,e=this.url){return parseConnectionError(t,e,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>jsonrpc_http_connection_dist_index_es_g&&this.events.setMaxListeners(jsonrpc_http_connection_dist_index_es_g)}}
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/universal-provider/dist/index.es.js
const index_es_xa="error",Mg="wss://relay.walletconnect.com",qg="wc",Bg="universal_provider",index_es_Ea=`${qg}@2:${Bg}:`,Gg="https://rpc.walletconnect.com/v1/",index_es_Vn={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};var dist_index_es_ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},index_es_Ui={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(A,u){(function(){var i,p="4.17.21",w=200,b="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",D="Expected a function",En="Invalid `variable` option passed into `_.template`",zt="__lodash_hash_undefined__",pr=500,It="__lodash_placeholder__",Ln=1,Fn=2,xt=4,Et=1,ve=2,vn=1,ct=2,Bi=4,Dn=8,yt=16,Nn=32,St=64,Mn=128,Kt=256,dr=512,Na=30,Ha="...",$a=800,Ua=16,Gi=1,Wa=2,Fa=3,ht=1/0,kn=9007199254740991,Ma=17976931348623157e292,_e=0/0,Hn=4294967295,qa=Hn-1,Ba=Hn>>>1,Ga=[["ary",Mn],["bind",vn],["bindKey",ct],["curry",Dn],["curryRight",yt],["flip",dr],["partial",Nn],["partialRight",St],["rearg",Kt]],Ot="[object Arguments]",me="[object Array]",za="[object AsyncFunction]",Yt="[object Boolean]",Zt="[object Date]",Ka="[object DOMException]",we="[object Error]",Pe="[object Function]",zi="[object GeneratorFunction]",yn="[object Map]",Jt="[object Number]",Ya="[object Null]",qn="[object Object]",Ki="[object Promise]",Za="[object Proxy]",Xt="[object RegExp]",Sn="[object Set]",Qt="[object String]",Ae="[object Symbol]",Ja="[object Undefined]",Vt="[object WeakMap]",Xa="[object WeakSet]",kt="[object ArrayBuffer]",Rt="[object DataView]",gr="[object Float32Array]",vr="[object Float64Array]",_r="[object Int8Array]",mr="[object Int16Array]",wr="[object Int32Array]",Pr="[object Uint8Array]",Ar="[object Uint8ClampedArray]",Cr="[object Uint16Array]",Ir="[object Uint32Array]",Qa=/\b__p \+= '';/g,Va=/\b(__p \+=) '' \+/g,ka=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yi=/&(?:amp|lt|gt|quot|#39);/g,Zi=/[&<>"']/g,ja=RegExp(Yi.source),no=RegExp(Zi.source),to=/<%-([\s\S]+?)%>/g,eo=/<%([\s\S]+?)%>/g,Ji=/<%=([\s\S]+?)%>/g,ro=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,io=/^\w*$/,so=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xr=/[\\^$.*+?()[\]{}|]/g,uo=RegExp(xr.source),Er=/^\s+/,ao=/\s/,oo=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,fo=/\{\n\/\* \[wrapped with (.+)\] \*/,co=/,? & /,ho=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lo=/[()=,{}\[\]\/\s]/,po=/\\(\\)?/g,go=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Xi=/\w*$/,vo=/^[-+]0x[0-9a-f]+$/i,_o=/^0b[01]+$/i,mo=/^\[object .+?Constructor\]$/,wo=/^0o[0-7]+$/i,Po=/^(?:0|[1-9]\d*)$/,Ao=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ce=/($^)/,Co=/['\n\r\u2028\u2029\\]/g,Ie="\\ud800-\\udfff",Io="\\u0300-\\u036f",xo="\\ufe20-\\ufe2f",Eo="\\u20d0-\\u20ff",Qi=Io+xo+Eo,Vi="\\u2700-\\u27bf",ki="a-z\\xdf-\\xf6\\xf8-\\xff",yo="\\xac\\xb1\\xd7\\xf7",So="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Oo="\\u2000-\\u206f",Ro=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ji="A-Z\\xc0-\\xd6\\xd8-\\xde",ns="\\ufe0e\\ufe0f",ts=yo+So+Oo+Ro,yr="['\u2019]",bo="["+Ie+"]",es="["+ts+"]",xe="["+Qi+"]",rs="\\d+",To="["+Vi+"]",is="["+ki+"]",ss="[^"+Ie+ts+rs+Vi+ki+ji+"]",Sr="\\ud83c[\\udffb-\\udfff]",Lo="(?:"+xe+"|"+Sr+")",us="[^"+Ie+"]",Or="(?:\\ud83c[\\udde6-\\uddff]){2}",Rr="[\\ud800-\\udbff][\\udc00-\\udfff]",bt="["+ji+"]",as="\\u200d",os="(?:"+is+"|"+ss+")",Do="(?:"+bt+"|"+ss+")",fs="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",cs="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",hs=Lo+"?",ls="["+ns+"]?",No="(?:"+as+"(?:"+[us,Or,Rr].join("|")+")"+ls+hs+")*",Ho="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$o="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ps=ls+hs+No,Uo="(?:"+[To,Or,Rr].join("|")+")"+ps,Wo="(?:"+[us+xe+"?",xe,Or,Rr,bo].join("|")+")",Fo=RegExp(yr,"g"),Mo=RegExp(xe,"g"),br=RegExp(Sr+"(?="+Sr+")|"+Wo+ps,"g"),qo=RegExp([bt+"?"+is+"+"+fs+"(?="+[es,bt,"$"].join("|")+")",Do+"+"+cs+"(?="+[es,bt+os,"$"].join("|")+")",bt+"?"+os+"+"+fs,bt+"+"+cs,$o,Ho,rs,Uo].join("|"),"g"),Bo=RegExp("["+as+Ie+Qi+ns+"]"),Go=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,zo=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ko=-1,B={};B[gr]=B[vr]=B[_r]=B[mr]=B[wr]=B[Pr]=B[Ar]=B[Cr]=B[Ir]=!0,B[Ot]=B[me]=B[kt]=B[Yt]=B[Rt]=B[Zt]=B[we]=B[Pe]=B[yn]=B[Jt]=B[qn]=B[Xt]=B[Sn]=B[Qt]=B[Vt]=!1;var q={};q[Ot]=q[me]=q[kt]=q[Rt]=q[Yt]=q[Zt]=q[gr]=q[vr]=q[_r]=q[mr]=q[wr]=q[yn]=q[Jt]=q[qn]=q[Xt]=q[Sn]=q[Qt]=q[Ae]=q[Pr]=q[Ar]=q[Cr]=q[Ir]=!0,q[we]=q[Pe]=q[Vt]=!1;var Yo={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Zo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jo={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Xo={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qo=parseFloat,Vo=parseInt,ds=typeof dist_index_es_ge=="object"&&dist_index_es_ge&&dist_index_es_ge.Object===Object&&dist_index_es_ge,ko=typeof self=="object"&&self&&self.Object===Object&&self,k=ds||ko||Function("return this")(),Tr=u&&!u.nodeType&&u,lt=Tr&&!0&&A&&!A.nodeType&&A,gs=lt&&lt.exports===Tr,Lr=gs&&ds.process,_n=function(){try{var h=lt&&lt.require&&lt.require("util").types;return h||Lr&&Lr.binding&&Lr.binding("util")}catch{}}(),vs=_n&&_n.isArrayBuffer,_s=_n&&_n.isDate,ms=_n&&_n.isMap,ws=_n&&_n.isRegExp,Ps=_n&&_n.isSet,As=_n&&_n.isTypedArray;function cn(h,g,d){switch(d.length){case 0:return h.call(g);case 1:return h.call(g,d[0]);case 2:return h.call(g,d[0],d[1]);case 3:return h.call(g,d[0],d[1],d[2])}return h.apply(g,d)}function jo(h,g,d,C){for(var S=-1,U=h==null?0:h.length;++S<U;){var X=h[S];g(C,X,d(X),h)}return C}function mn(h,g){for(var d=-1,C=h==null?0:h.length;++d<C&&g(h[d],d,h)!==!1;);return h}function nf(h,g){for(var d=h==null?0:h.length;d--&&g(h[d],d,h)!==!1;);return h}function Cs(h,g){for(var d=-1,C=h==null?0:h.length;++d<C;)if(!g(h[d],d,h))return!1;return!0}function jn(h,g){for(var d=-1,C=h==null?0:h.length,S=0,U=[];++d<C;){var X=h[d];g(X,d,h)&&(U[S++]=X)}return U}function Ee(h,g){var d=h==null?0:h.length;return!!d&&Tt(h,g,0)>-1}function Dr(h,g,d){for(var C=-1,S=h==null?0:h.length;++C<S;)if(d(g,h[C]))return!0;return!1}function G(h,g){for(var d=-1,C=h==null?0:h.length,S=Array(C);++d<C;)S[d]=g(h[d],d,h);return S}function nt(h,g){for(var d=-1,C=g.length,S=h.length;++d<C;)h[S+d]=g[d];return h}function Nr(h,g,d,C){var S=-1,U=h==null?0:h.length;for(C&&U&&(d=h[++S]);++S<U;)d=g(d,h[S],S,h);return d}function tf(h,g,d,C){var S=h==null?0:h.length;for(C&&S&&(d=h[--S]);S--;)d=g(d,h[S],S,h);return d}function Hr(h,g){for(var d=-1,C=h==null?0:h.length;++d<C;)if(g(h[d],d,h))return!0;return!1}var ef=$r("length");function rf(h){return h.split("")}function sf(h){return h.match(ho)||[]}function Is(h,g,d){var C;return d(h,function(S,U,X){if(g(S,U,X))return C=U,!1}),C}function ye(h,g,d,C){for(var S=h.length,U=d+(C?1:-1);C?U--:++U<S;)if(g(h[U],U,h))return U;return-1}function Tt(h,g,d){return g===g?_f(h,g,d):ye(h,xs,d)}function uf(h,g,d,C){for(var S=d-1,U=h.length;++S<U;)if(C(h[S],g))return S;return-1}function xs(h){return h!==h}function Es(h,g){var d=h==null?0:h.length;return d?Wr(h,g)/d:_e}function $r(h){return function(g){return g==null?i:g[h]}}function Ur(h){return function(g){return h==null?i:h[g]}}function ys(h,g,d,C,S){return S(h,function(U,X,M){d=C?(C=!1,U):g(d,U,X,M)}),d}function af(h,g){var d=h.length;for(h.sort(g);d--;)h[d]=h[d].value;return h}function Wr(h,g){for(var d,C=-1,S=h.length;++C<S;){var U=g(h[C]);U!==i&&(d=d===i?U:d+U)}return d}function Fr(h,g){for(var d=-1,C=Array(h);++d<h;)C[d]=g(d);return C}function of(h,g){return G(g,function(d){return[d,h[d]]})}function Ss(h){return h&&h.slice(0,Ts(h)+1).replace(Er,"")}function hn(h){return function(g){return h(g)}}function Mr(h,g){return G(g,function(d){return h[d]})}function jt(h,g){return h.has(g)}function Os(h,g){for(var d=-1,C=h.length;++d<C&&Tt(g,h[d],0)>-1;);return d}function Rs(h,g){for(var d=h.length;d--&&Tt(g,h[d],0)>-1;);return d}function ff(h,g){for(var d=h.length,C=0;d--;)h[d]===g&&++C;return C}var cf=Ur(Yo),hf=Ur(Zo);function lf(h){return"\\"+Xo[h]}function pf(h,g){return h==null?i:h[g]}function Lt(h){return Bo.test(h)}function df(h){return Go.test(h)}function gf(h){for(var g,d=[];!(g=h.next()).done;)d.push(g.value);return d}function qr(h){var g=-1,d=Array(h.size);return h.forEach(function(C,S){d[++g]=[S,C]}),d}function bs(h,g){return function(d){return h(g(d))}}function tt(h,g){for(var d=-1,C=h.length,S=0,U=[];++d<C;){var X=h[d];(X===g||X===It)&&(h[d]=It,U[S++]=d)}return U}function Se(h){var g=-1,d=Array(h.size);return h.forEach(function(C){d[++g]=C}),d}function vf(h){var g=-1,d=Array(h.size);return h.forEach(function(C){d[++g]=[C,C]}),d}function _f(h,g,d){for(var C=d-1,S=h.length;++C<S;)if(h[C]===g)return C;return-1}function mf(h,g,d){for(var C=d+1;C--;)if(h[C]===g)return C;return C}function Dt(h){return Lt(h)?Pf(h):ef(h)}function On(h){return Lt(h)?Af(h):rf(h)}function Ts(h){for(var g=h.length;g--&&ao.test(h.charAt(g)););return g}var wf=Ur(Jo);function Pf(h){for(var g=br.lastIndex=0;br.test(h);)++g;return g}function Af(h){return h.match(br)||[]}function Cf(h){return h.match(qo)||[]}var If=function h(g){g=g==null?k:Nt.defaults(k.Object(),g,Nt.pick(k,zo));var d=g.Array,C=g.Date,S=g.Error,U=g.Function,X=g.Math,M=g.Object,Br=g.RegExp,xf=g.String,wn=g.TypeError,Oe=d.prototype,Ef=U.prototype,Ht=M.prototype,Re=g["__core-js_shared__"],be=Ef.toString,F=Ht.hasOwnProperty,yf=0,Ls=function(){var n=/[^.]+$/.exec(Re&&Re.keys&&Re.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Te=Ht.toString,Sf=be.call(M),Of=k._,Rf=Br("^"+be.call(F).replace(xr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Le=gs?g.Buffer:i,et=g.Symbol,De=g.Uint8Array,Ds=Le?Le.allocUnsafe:i,Ne=bs(M.getPrototypeOf,M),Ns=M.create,Hs=Ht.propertyIsEnumerable,He=Oe.splice,$s=et?et.isConcatSpreadable:i,ne=et?et.iterator:i,pt=et?et.toStringTag:i,$e=function(){try{var n=mt(M,"defineProperty");return n({},"",{}),n}catch{}}(),bf=g.clearTimeout!==k.clearTimeout&&g.clearTimeout,Tf=C&&C.now!==k.Date.now&&C.now,Lf=g.setTimeout!==k.setTimeout&&g.setTimeout,Ue=X.ceil,We=X.floor,Gr=M.getOwnPropertySymbols,Df=Le?Le.isBuffer:i,Us=g.isFinite,Nf=Oe.join,Hf=bs(M.keys,M),Q=X.max,nn=X.min,$f=C.now,Uf=g.parseInt,Ws=X.random,Wf=Oe.reverse,zr=mt(g,"DataView"),te=mt(g,"Map"),Kr=mt(g,"Promise"),$t=mt(g,"Set"),ee=mt(g,"WeakMap"),re=mt(M,"create"),Fe=ee&&new ee,Ut={},Ff=wt(zr),Mf=wt(te),qf=wt(Kr),Bf=wt($t),Gf=wt(ee),Me=et?et.prototype:i,ie=Me?Me.valueOf:i,Fs=Me?Me.toString:i;function a(n){if(Y(n)&&!O(n)&&!(n instanceof H)){if(n instanceof Pn)return n;if(F.call(n,"__wrapped__"))return Mu(n)}return new Pn(n)}var Wt=function(){function n(){}return function(t){if(!K(t))return{};if(Ns)return Ns(t);n.prototype=t;var e=new n;return n.prototype=i,e}}();function qe(){}function Pn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}a.templateSettings={escape:to,evaluate:eo,interpolate:Ji,variable:"",imports:{_:a}},a.prototype=qe.prototype,a.prototype.constructor=a,Pn.prototype=Wt(qe.prototype),Pn.prototype.constructor=Pn;function H(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Hn,this.__views__=[]}function zf(){var n=new H(this.__wrapped__);return n.__actions__=un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=un(this.__views__),n}function Kf(){if(this.__filtered__){var n=new H(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Yf(){var n=this.__wrapped__.value(),t=this.__dir__,e=O(n),r=t<0,s=e?n.length:0,o=ih(0,s,this.__views__),f=o.start,c=o.end,l=c-f,v=r?c:f-1,_=this.__iteratees__,m=_.length,P=0,I=nn(l,this.__takeCount__);if(!e||!r&&s==l&&I==l)return fu(n,this.__actions__);var E=[];n:for(;l--&&P<I;){v+=t;for(var T=-1,y=n[v];++T<m;){var N=_[T],$=N.iteratee,dn=N.type,sn=$(y);if(dn==Wa)y=sn;else if(!sn){if(dn==Gi)continue n;break n}}E[P++]=y}return E}H.prototype=Wt(qe.prototype),H.prototype.constructor=H;function dt(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function Zf(){this.__data__=re?re(null):{},this.size=0}function Jf(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function Xf(n){var t=this.__data__;if(re){var e=t[n];return e===zt?i:e}return F.call(t,n)?t[n]:i}function Qf(n){var t=this.__data__;return re?t[n]!==i:F.call(t,n)}function Vf(n,t){var e=this.__data__;return this.size+=this.has(n)?0:1,e[n]=re&&t===i?zt:t,this}dt.prototype.clear=Zf,dt.prototype.delete=Jf,dt.prototype.get=Xf,dt.prototype.has=Qf,dt.prototype.set=Vf;function Bn(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function kf(){this.__data__=[],this.size=0}function jf(n){var t=this.__data__,e=Be(t,n);if(e<0)return!1;var r=t.length-1;return e==r?t.pop():He.call(t,e,1),--this.size,!0}function nc(n){var t=this.__data__,e=Be(t,n);return e<0?i:t[e][1]}function tc(n){return Be(this.__data__,n)>-1}function ec(n,t){var e=this.__data__,r=Be(e,n);return r<0?(++this.size,e.push([n,t])):e[r][1]=t,this}Bn.prototype.clear=kf,Bn.prototype.delete=jf,Bn.prototype.get=nc,Bn.prototype.has=tc,Bn.prototype.set=ec;function Gn(n){var t=-1,e=n==null?0:n.length;for(this.clear();++t<e;){var r=n[t];this.set(r[0],r[1])}}function rc(){this.size=0,this.__data__={hash:new dt,map:new(te||Bn),string:new dt}}function ic(n){var t=nr(this,n).delete(n);return this.size-=t?1:0,t}function sc(n){return nr(this,n).get(n)}function uc(n){return nr(this,n).has(n)}function ac(n,t){var e=nr(this,n),r=e.size;return e.set(n,t),this.size+=e.size==r?0:1,this}Gn.prototype.clear=rc,Gn.prototype.delete=ic,Gn.prototype.get=sc,Gn.prototype.has=uc,Gn.prototype.set=ac;function gt(n){var t=-1,e=n==null?0:n.length;for(this.__data__=new Gn;++t<e;)this.add(n[t])}function oc(n){return this.__data__.set(n,zt),this}function fc(n){return this.__data__.has(n)}gt.prototype.add=gt.prototype.push=oc,gt.prototype.has=fc;function Rn(n){var t=this.__data__=new Bn(n);this.size=t.size}function cc(){this.__data__=new Bn,this.size=0}function hc(n){var t=this.__data__,e=t.delete(n);return this.size=t.size,e}function lc(n){return this.__data__.get(n)}function pc(n){return this.__data__.has(n)}function dc(n,t){var e=this.__data__;if(e instanceof Bn){var r=e.__data__;if(!te||r.length<w-1)return r.push([n,t]),this.size=++e.size,this;e=this.__data__=new Gn(r)}return e.set(n,t),this.size=e.size,this}Rn.prototype.clear=cc,Rn.prototype.delete=hc,Rn.prototype.get=lc,Rn.prototype.has=pc,Rn.prototype.set=dc;function Ms(n,t){var e=O(n),r=!e&&Pt(n),s=!e&&!r&&at(n),o=!e&&!r&&!s&&Bt(n),f=e||r||s||o,c=f?Fr(n.length,xf):[],l=c.length;for(var v in n)(t||F.call(n,v))&&!(f&&(v=="length"||s&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Zn(v,l)))&&c.push(v);return c}function qs(n){var t=n.length;return t?n[ei(0,t-1)]:i}function gc(n,t){return tr(un(n),vt(t,0,n.length))}function vc(n){return tr(un(n))}function Yr(n,t,e){(e!==i&&!bn(n[t],e)||e===i&&!(t in n))&&zn(n,t,e)}function se(n,t,e){var r=n[t];(!(F.call(n,t)&&bn(r,e))||e===i&&!(t in n))&&zn(n,t,e)}function Be(n,t){for(var e=n.length;e--;)if(bn(n[e][0],t))return e;return-1}function _c(n,t,e,r){return rt(n,function(s,o,f){t(r,s,e(s),f)}),r}function Bs(n,t){return n&&Un(t,V(t),n)}function mc(n,t){return n&&Un(t,on(t),n)}function zn(n,t,e){t=="__proto__"&&$e?$e(n,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[t]=e}function Zr(n,t){for(var e=-1,r=t.length,s=d(r),o=n==null;++e<r;)s[e]=o?i:Si(n,t[e]);return s}function vt(n,t,e){return n===n&&(e!==i&&(n=n<=e?n:e),t!==i&&(n=n>=t?n:t)),n}function An(n,t,e,r,s,o){var f,c=t&Ln,l=t&Fn,v=t&xt;if(e&&(f=s?e(n,r,s,o):e(n)),f!==i)return f;if(!K(n))return n;var _=O(n);if(_){if(f=uh(n),!c)return un(n,f)}else{var m=tn(n),P=m==Pe||m==zi;if(at(n))return lu(n,c);if(m==qn||m==Ot||P&&!s){if(f=l||P?{}:Tu(n),!c)return l?Xc(n,mc(f,n)):Jc(n,Bs(f,n))}else{if(!q[m])return s?n:{};f=ah(n,m,c)}}o||(o=new Rn);var I=o.get(n);if(I)return I;o.set(n,f),ua(n)?n.forEach(function(y){f.add(An(y,t,e,y,n,o))}):ia(n)&&n.forEach(function(y,N){f.set(N,An(y,t,e,N,n,o))});var E=v?l?pi:li:l?on:V,T=_?i:E(n);return mn(T||n,function(y,N){T&&(N=y,y=n[N]),se(f,N,An(y,t,e,N,n,o))}),f}function wc(n){var t=V(n);return function(e){return Gs(e,n,t)}}function Gs(n,t,e){var r=e.length;if(n==null)return!r;for(n=M(n);r--;){var s=e[r],o=t[s],f=n[s];if(f===i&&!(s in n)||!o(f))return!1}return!0}function zs(n,t,e){if(typeof n!="function")throw new wn(D);return le(function(){n.apply(i,e)},t)}function ue(n,t,e,r){var s=-1,o=Ee,f=!0,c=n.length,l=[],v=t.length;if(!c)return l;e&&(t=G(t,hn(e))),r?(o=Dr,f=!1):t.length>=w&&(o=jt,f=!1,t=new gt(t));n:for(;++s<c;){var _=n[s],m=e==null?_:e(_);if(_=r||_!==0?_:0,f&&m===m){for(var P=v;P--;)if(t[P]===m)continue n;l.push(_)}else o(t,m,r)||l.push(_)}return l}var rt=_u($n),Ks=_u(Xr,!0);function Pc(n,t){var e=!0;return rt(n,function(r,s,o){return e=!!t(r,s,o),e}),e}function Ge(n,t,e){for(var r=-1,s=n.length;++r<s;){var o=n[r],f=t(o);if(f!=null&&(c===i?f===f&&!pn(f):e(f,c)))var c=f,l=o}return l}function Ac(n,t,e,r){var s=n.length;for(e=R(e),e<0&&(e=-e>s?0:s+e),r=r===i||r>s?s:R(r),r<0&&(r+=s),r=e>r?0:oa(r);e<r;)n[e++]=t;return n}function Ys(n,t){var e=[];return rt(n,function(r,s,o){t(r,s,o)&&e.push(r)}),e}function j(n,t,e,r,s){var o=-1,f=n.length;for(e||(e=fh),s||(s=[]);++o<f;){var c=n[o];t>0&&e(c)?t>1?j(c,t-1,e,r,s):nt(s,c):r||(s[s.length]=c)}return s}var Jr=mu(),Zs=mu(!0);function $n(n,t){return n&&Jr(n,t,V)}function Xr(n,t){return n&&Zs(n,t,V)}function ze(n,t){return jn(t,function(e){return Jn(n[e])})}function _t(n,t){t=st(t,n);for(var e=0,r=t.length;n!=null&&e<r;)n=n[Wn(t[e++])];return e&&e==r?n:i}function Js(n,t,e){var r=t(n);return O(n)?r:nt(r,e(n))}function en(n){return n==null?n===i?Ja:Ya:pt&&pt in M(n)?rh(n):vh(n)}function Qr(n,t){return n>t}function Cc(n,t){return n!=null&&F.call(n,t)}function Ic(n,t){return n!=null&&t in M(n)}function xc(n,t,e){return n>=nn(t,e)&&n<Q(t,e)}function Vr(n,t,e){for(var r=e?Dr:Ee,s=n[0].length,o=n.length,f=o,c=d(o),l=1/0,v=[];f--;){var _=n[f];f&&t&&(_=G(_,hn(t))),l=nn(_.length,l),c[f]=!e&&(t||s>=120&&_.length>=120)?new gt(f&&_):i}_=n[0];var m=-1,P=c[0];n:for(;++m<s&&v.length<l;){var I=_[m],E=t?t(I):I;if(I=e||I!==0?I:0,!(P?jt(P,E):r(v,E,e))){for(f=o;--f;){var T=c[f];if(!(T?jt(T,E):r(n[f],E,e)))continue n}P&&P.push(E),v.push(I)}}return v}function Ec(n,t,e,r){return $n(n,function(s,o,f){t(r,e(s),o,f)}),r}function ae(n,t,e){t=st(t,n),n=Hu(n,t);var r=n==null?n:n[Wn(In(t))];return r==null?i:cn(r,n,e)}function Xs(n){return Y(n)&&en(n)==Ot}function yc(n){return Y(n)&&en(n)==kt}function Sc(n){return Y(n)&&en(n)==Zt}function oe(n,t,e,r,s){return n===t?!0:n==null||t==null||!Y(n)&&!Y(t)?n!==n&&t!==t:Oc(n,t,e,r,oe,s)}function Oc(n,t,e,r,s,o){var f=O(n),c=O(t),l=f?me:tn(n),v=c?me:tn(t);l=l==Ot?qn:l,v=v==Ot?qn:v;var _=l==qn,m=v==qn,P=l==v;if(P&&at(n)){if(!at(t))return!1;f=!0,_=!1}if(P&&!_)return o||(o=new Rn),f||Bt(n)?Ou(n,t,e,r,s,o):th(n,t,l,e,r,s,o);if(!(e&Et)){var I=_&&F.call(n,"__wrapped__"),E=m&&F.call(t,"__wrapped__");if(I||E){var T=I?n.value():n,y=E?t.value():t;return o||(o=new Rn),s(T,y,e,r,o)}}return P?(o||(o=new Rn),eh(n,t,e,r,s,o)):!1}function Rc(n){return Y(n)&&tn(n)==yn}function kr(n,t,e,r){var s=e.length,o=s,f=!r;if(n==null)return!o;for(n=M(n);s--;){var c=e[s];if(f&&c[2]?c[1]!==n[c[0]]:!(c[0]in n))return!1}for(;++s<o;){c=e[s];var l=c[0],v=n[l],_=c[1];if(f&&c[2]){if(v===i&&!(l in n))return!1}else{var m=new Rn;if(r)var P=r(v,_,l,n,t,m);if(!(P===i?oe(_,v,Et|ve,r,m):P))return!1}}return!0}function Qs(n){if(!K(n)||hh(n))return!1;var t=Jn(n)?Rf:mo;return t.test(wt(n))}function bc(n){return Y(n)&&en(n)==Xt}function Tc(n){return Y(n)&&tn(n)==Sn}function Lc(n){return Y(n)&&ar(n.length)&&!!B[en(n)]}function Vs(n){return typeof n=="function"?n:n==null?fn:typeof n=="object"?O(n)?nu(n[0],n[1]):js(n):wa(n)}function jr(n){if(!he(n))return Hf(n);var t=[];for(var e in M(n))F.call(n,e)&&e!="constructor"&&t.push(e);return t}function Dc(n){if(!K(n))return gh(n);var t=he(n),e=[];for(var r in n)r=="constructor"&&(t||!F.call(n,r))||e.push(r);return e}function ni(n,t){return n<t}function ks(n,t){var e=-1,r=an(n)?d(n.length):[];return rt(n,function(s,o,f){r[++e]=t(s,o,f)}),r}function js(n){var t=gi(n);return t.length==1&&t[0][2]?Du(t[0][0],t[0][1]):function(e){return e===n||kr(e,n,t)}}function nu(n,t){return _i(n)&&Lu(t)?Du(Wn(n),t):function(e){var r=Si(e,n);return r===i&&r===t?Oi(e,n):oe(t,r,Et|ve)}}function Ke(n,t,e,r,s){n!==t&&Jr(t,function(o,f){if(s||(s=new Rn),K(o))Nc(n,t,f,e,Ke,r,s);else{var c=r?r(wi(n,f),o,f+"",n,t,s):i;c===i&&(c=o),Yr(n,f,c)}},on)}function Nc(n,t,e,r,s,o,f){var c=wi(n,e),l=wi(t,e),v=f.get(l);if(v){Yr(n,e,v);return}var _=o?o(c,l,e+"",n,t,f):i,m=_===i;if(m){var P=O(l),I=!P&&at(l),E=!P&&!I&&Bt(l);_=l,P||I||E?O(c)?_=c:Z(c)?_=un(c):I?(m=!1,_=lu(l,!0)):E?(m=!1,_=pu(l,!0)):_=[]:pe(l)||Pt(l)?(_=c,Pt(c)?_=fa(c):(!K(c)||Jn(c))&&(_=Tu(l))):m=!1}m&&(f.set(l,_),s(_,l,r,o,f),f.delete(l)),Yr(n,e,_)}function tu(n,t){var e=n.length;if(e)return t+=t<0?e:0,Zn(t,e)?n[t]:i}function eu(n,t,e){t.length?t=G(t,function(o){return O(o)?function(f){return _t(f,o.length===1?o[0]:o)}:o}):t=[fn];var r=-1;t=G(t,hn(x()));var s=ks(n,function(o,f,c){var l=G(t,function(v){return v(o)});return{criteria:l,index:++r,value:o}});return af(s,function(o,f){return Zc(o,f,e)})}function Hc(n,t){return ru(n,t,function(e,r){return Oi(n,r)})}function ru(n,t,e){for(var r=-1,s=t.length,o={};++r<s;){var f=t[r],c=_t(n,f);e(c,f)&&fe(o,st(f,n),c)}return o}function $c(n){return function(t){return _t(t,n)}}function ti(n,t,e,r){var s=r?uf:Tt,o=-1,f=t.length,c=n;for(n===t&&(t=un(t)),e&&(c=G(n,hn(e)));++o<f;)for(var l=0,v=t[o],_=e?e(v):v;(l=s(c,_,l,r))>-1;)c!==n&&He.call(c,l,1),He.call(n,l,1);return n}function iu(n,t){for(var e=n?t.length:0,r=e-1;e--;){var s=t[e];if(e==r||s!==o){var o=s;Zn(s)?He.call(n,s,1):si(n,s)}}return n}function ei(n,t){return n+We(Ws()*(t-n+1))}function Uc(n,t,e,r){for(var s=-1,o=Q(Ue((t-n)/(e||1)),0),f=d(o);o--;)f[r?o:++s]=n,n+=e;return f}function ri(n,t){var e="";if(!n||t<1||t>kn)return e;do t%2&&(e+=n),t=We(t/2),t&&(n+=n);while(t);return e}function L(n,t){return Pi(Nu(n,t,fn),n+"")}function Wc(n){return qs(Gt(n))}function Fc(n,t){var e=Gt(n);return tr(e,vt(t,0,e.length))}function fe(n,t,e,r){if(!K(n))return n;t=st(t,n);for(var s=-1,o=t.length,f=o-1,c=n;c!=null&&++s<o;){var l=Wn(t[s]),v=e;if(l==="__proto__"||l==="constructor"||l==="prototype")return n;if(s!=f){var _=c[l];v=r?r(_,l,c):i,v===i&&(v=K(_)?_:Zn(t[s+1])?[]:{})}se(c,l,v),c=c[l]}return n}var su=Fe?function(n,t){return Fe.set(n,t),n}:fn,Mc=$e?function(n,t){return $e(n,"toString",{configurable:!0,enumerable:!1,value:bi(t),writable:!0})}:fn;function qc(n){return tr(Gt(n))}function Cn(n,t,e){var r=-1,s=n.length;t<0&&(t=-t>s?0:s+t),e=e>s?s:e,e<0&&(e+=s),s=t>e?0:e-t>>>0,t>>>=0;for(var o=d(s);++r<s;)o[r]=n[r+t];return o}function Bc(n,t){var e;return rt(n,function(r,s,o){return e=t(r,s,o),!e}),!!e}function Ye(n,t,e){var r=0,s=n==null?r:n.length;if(typeof t=="number"&&t===t&&s<=Ba){for(;r<s;){var o=r+s>>>1,f=n[o];f!==null&&!pn(f)&&(e?f<=t:f<t)?r=o+1:s=o}return s}return ii(n,t,fn,e)}function ii(n,t,e,r){var s=0,o=n==null?0:n.length;if(o===0)return 0;t=e(t);for(var f=t!==t,c=t===null,l=pn(t),v=t===i;s<o;){var _=We((s+o)/2),m=e(n[_]),P=m!==i,I=m===null,E=m===m,T=pn(m);if(f)var y=r||E;else v?y=E&&(r||P):c?y=E&&P&&(r||!I):l?y=E&&P&&!I&&(r||!T):I||T?y=!1:y=r?m<=t:m<t;y?s=_+1:o=_}return nn(o,qa)}function uu(n,t){for(var e=-1,r=n.length,s=0,o=[];++e<r;){var f=n[e],c=t?t(f):f;if(!e||!bn(c,l)){var l=c;o[s++]=f===0?0:f}}return o}function au(n){return typeof n=="number"?n:pn(n)?_e:+n}function ln(n){if(typeof n=="string")return n;if(O(n))return G(n,ln)+"";if(pn(n))return Fs?Fs.call(n):"";var t=n+"";return t=="0"&&1/n==-ht?"-0":t}function it(n,t,e){var r=-1,s=Ee,o=n.length,f=!0,c=[],l=c;if(e)f=!1,s=Dr;else if(o>=w){var v=t?null:jc(n);if(v)return Se(v);f=!1,s=jt,l=new gt}else l=t?[]:c;n:for(;++r<o;){var _=n[r],m=t?t(_):_;if(_=e||_!==0?_:0,f&&m===m){for(var P=l.length;P--;)if(l[P]===m)continue n;t&&l.push(m),c.push(_)}else s(l,m,e)||(l!==c&&l.push(m),c.push(_))}return c}function si(n,t){return t=st(t,n),n=Hu(n,t),n==null||delete n[Wn(In(t))]}function ou(n,t,e,r){return fe(n,t,e(_t(n,t)),r)}function Ze(n,t,e,r){for(var s=n.length,o=r?s:-1;(r?o--:++o<s)&&t(n[o],o,n););return e?Cn(n,r?0:o,r?o+1:s):Cn(n,r?o+1:0,r?s:o)}function fu(n,t){var e=n;return e instanceof H&&(e=e.value()),Nr(t,function(r,s){return s.func.apply(s.thisArg,nt([r],s.args))},e)}function ui(n,t,e){var r=n.length;if(r<2)return r?it(n[0]):[];for(var s=-1,o=d(r);++s<r;)for(var f=n[s],c=-1;++c<r;)c!=s&&(o[s]=ue(o[s]||f,n[c],t,e));return it(j(o,1),t,e)}function cu(n,t,e){for(var r=-1,s=n.length,o=t.length,f={};++r<s;){var c=r<o?t[r]:i;e(f,n[r],c)}return f}function ai(n){return Z(n)?n:[]}function oi(n){return typeof n=="function"?n:fn}function st(n,t){return O(n)?n:_i(n,t)?[n]:Fu(W(n))}var Gc=L;function ut(n,t,e){var r=n.length;return e=e===i?r:e,!t&&e>=r?n:Cn(n,t,e)}var hu=bf||function(n){return k.clearTimeout(n)};function lu(n,t){if(t)return n.slice();var e=n.length,r=Ds?Ds(e):new n.constructor(e);return n.copy(r),r}function fi(n){var t=new n.constructor(n.byteLength);return new De(t).set(new De(n)),t}function zc(n,t){var e=t?fi(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)}function Kc(n){var t=new n.constructor(n.source,Xi.exec(n));return t.lastIndex=n.lastIndex,t}function Yc(n){return ie?M(ie.call(n)):{}}function pu(n,t){var e=t?fi(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}function du(n,t){if(n!==t){var e=n!==i,r=n===null,s=n===n,o=pn(n),f=t!==i,c=t===null,l=t===t,v=pn(t);if(!c&&!v&&!o&&n>t||o&&f&&l&&!c&&!v||r&&f&&l||!e&&l||!s)return 1;if(!r&&!o&&!v&&n<t||v&&e&&s&&!r&&!o||c&&e&&s||!f&&s||!l)return-1}return 0}function Zc(n,t,e){for(var r=-1,s=n.criteria,o=t.criteria,f=s.length,c=e.length;++r<f;){var l=du(s[r],o[r]);if(l){if(r>=c)return l;var v=e[r];return l*(v=="desc"?-1:1)}}return n.index-t.index}function gu(n,t,e,r){for(var s=-1,o=n.length,f=e.length,c=-1,l=t.length,v=Q(o-f,0),_=d(l+v),m=!r;++c<l;)_[c]=t[c];for(;++s<f;)(m||s<o)&&(_[e[s]]=n[s]);for(;v--;)_[c++]=n[s++];return _}function vu(n,t,e,r){for(var s=-1,o=n.length,f=-1,c=e.length,l=-1,v=t.length,_=Q(o-c,0),m=d(_+v),P=!r;++s<_;)m[s]=n[s];for(var I=s;++l<v;)m[I+l]=t[l];for(;++f<c;)(P||s<o)&&(m[I+e[f]]=n[s++]);return m}function un(n,t){var e=-1,r=n.length;for(t||(t=d(r));++e<r;)t[e]=n[e];return t}function Un(n,t,e,r){var s=!e;e||(e={});for(var o=-1,f=t.length;++o<f;){var c=t[o],l=r?r(e[c],n[c],c,e,n):i;l===i&&(l=n[c]),s?zn(e,c,l):se(e,c,l)}return e}function Jc(n,t){return Un(n,vi(n),t)}function Xc(n,t){return Un(n,Ru(n),t)}function Je(n,t){return function(e,r){var s=O(e)?jo:_c,o=t?t():{};return s(e,n,x(r,2),o)}}function Ft(n){return L(function(t,e){var r=-1,s=e.length,o=s>1?e[s-1]:i,f=s>2?e[2]:i;for(o=n.length>3&&typeof o=="function"?(s--,o):i,f&&rn(e[0],e[1],f)&&(o=s<3?i:o,s=1),t=M(t);++r<s;){var c=e[r];c&&n(t,c,r,o)}return t})}function _u(n,t){return function(e,r){if(e==null)return e;if(!an(e))return n(e,r);for(var s=e.length,o=t?s:-1,f=M(e);(t?o--:++o<s)&&r(f[o],o,f)!==!1;);return e}}function mu(n){return function(t,e,r){for(var s=-1,o=M(t),f=r(t),c=f.length;c--;){var l=f[n?c:++s];if(e(o[l],l,o)===!1)break}return t}}function Qc(n,t,e){var r=t&vn,s=ce(n);function o(){var f=this&&this!==k&&this instanceof o?s:n;return f.apply(r?e:this,arguments)}return o}function wu(n){return function(t){t=W(t);var e=Lt(t)?On(t):i,r=e?e[0]:t.charAt(0),s=e?ut(e,1).join(""):t.slice(1);return r[n]()+s}}function Mt(n){return function(t){return Nr(_a(va(t).replace(Fo,"")),n,"")}}function ce(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var e=Wt(n.prototype),r=n.apply(e,t);return K(r)?r:e}}function Vc(n,t,e){var r=ce(n);function s(){for(var o=arguments.length,f=d(o),c=o,l=qt(s);c--;)f[c]=arguments[c];var v=o<3&&f[0]!==l&&f[o-1]!==l?[]:tt(f,l);if(o-=v.length,o<e)return xu(n,t,Xe,s.placeholder,i,f,v,i,i,e-o);var _=this&&this!==k&&this instanceof s?r:n;return cn(_,this,f)}return s}function Pu(n){return function(t,e,r){var s=M(t);if(!an(t)){var o=x(e,3);t=V(t),e=function(c){return o(s[c],c,s)}}var f=n(t,e,r);return f>-1?s[o?t[f]:f]:i}}function Au(n){return Yn(function(t){var e=t.length,r=e,s=Pn.prototype.thru;for(n&&t.reverse();r--;){var o=t[r];if(typeof o!="function")throw new wn(D);if(s&&!f&&je(o)=="wrapper")var f=new Pn([],!0)}for(r=f?r:e;++r<e;){o=t[r];var c=je(o),l=c=="wrapper"?di(o):i;l&&mi(l[0])&&l[1]==(Mn|Dn|Nn|Kt)&&!l[4].length&&l[9]==1?f=f[je(l[0])].apply(f,l[3]):f=o.length==1&&mi(o)?f[c]():f.thru(o)}return function(){var v=arguments,_=v[0];if(f&&v.length==1&&O(_))return f.plant(_).value();for(var m=0,P=e?t[m].apply(this,v):_;++m<e;)P=t[m].call(this,P);return P}})}function Xe(n,t,e,r,s,o,f,c,l,v){var _=t&Mn,m=t&vn,P=t&ct,I=t&(Dn|yt),E=t&dr,T=P?i:ce(n);function y(){for(var N=arguments.length,$=d(N),dn=N;dn--;)$[dn]=arguments[dn];if(I)var sn=qt(y),gn=ff($,sn);if(r&&($=gu($,r,s,I)),o&&($=vu($,o,f,I)),N-=gn,I&&N<v){var J=tt($,sn);return xu(n,t,Xe,y.placeholder,e,$,J,c,l,v-N)}var Tn=m?e:this,Qn=P?Tn[n]:n;return N=$.length,c?$=_h($,c):E&&N>1&&$.reverse(),_&&l<N&&($.length=l),this&&this!==k&&this instanceof y&&(Qn=T||ce(Qn)),Qn.apply(Tn,$)}return y}function Cu(n,t){return function(e,r){return Ec(e,n,t(r),{})}}function Qe(n,t){return function(e,r){var s;if(e===i&&r===i)return t;if(e!==i&&(s=e),r!==i){if(s===i)return r;typeof e=="string"||typeof r=="string"?(e=ln(e),r=ln(r)):(e=au(e),r=au(r)),s=n(e,r)}return s}}function ci(n){return Yn(function(t){return t=G(t,hn(x())),L(function(e){var r=this;return n(t,function(s){return cn(s,r,e)})})})}function Ve(n,t){t=t===i?" ":ln(t);var e=t.length;if(e<2)return e?ri(t,n):t;var r=ri(t,Ue(n/Dt(t)));return Lt(t)?ut(On(r),0,n).join(""):r.slice(0,n)}function kc(n,t,e,r){var s=t&vn,o=ce(n);function f(){for(var c=-1,l=arguments.length,v=-1,_=r.length,m=d(_+l),P=this&&this!==k&&this instanceof f?o:n;++v<_;)m[v]=r[v];for(;l--;)m[v++]=arguments[++c];return cn(P,s?e:this,m)}return f}function Iu(n){return function(t,e,r){return r&&typeof r!="number"&&rn(t,e,r)&&(e=r=i),t=Xn(t),e===i?(e=t,t=0):e=Xn(e),r=r===i?t<e?1:-1:Xn(r),Uc(t,e,r,n)}}function ke(n){return function(t,e){return typeof t=="string"&&typeof e=="string"||(t=xn(t),e=xn(e)),n(t,e)}}function xu(n,t,e,r,s,o,f,c,l,v){var _=t&Dn,m=_?f:i,P=_?i:f,I=_?o:i,E=_?i:o;t|=_?Nn:St,t&=~(_?St:Nn),t&Bi||(t&=~(vn|ct));var T=[n,t,s,I,m,E,P,c,l,v],y=e.apply(i,T);return mi(n)&&$u(y,T),y.placeholder=r,Uu(y,n,t)}function hi(n){var t=X[n];return function(e,r){if(e=xn(e),r=r==null?0:nn(R(r),292),r&&Us(e)){var s=(W(e)+"e").split("e"),o=t(s[0]+"e"+(+s[1]+r));return s=(W(o)+"e").split("e"),+(s[0]+"e"+(+s[1]-r))}return t(e)}}var jc=$t&&1/Se(new $t([,-0]))[1]==ht?function(n){return new $t(n)}:Di;function Eu(n){return function(t){var e=tn(t);return e==yn?qr(t):e==Sn?vf(t):of(t,n(t))}}function Kn(n,t,e,r,s,o,f,c){var l=t&ct;if(!l&&typeof n!="function")throw new wn(D);var v=r?r.length:0;if(v||(t&=~(Nn|St),r=s=i),f=f===i?f:Q(R(f),0),c=c===i?c:R(c),v-=s?s.length:0,t&St){var _=r,m=s;r=s=i}var P=l?i:di(n),I=[n,t,e,r,s,_,m,o,f,c];if(P&&dh(I,P),n=I[0],t=I[1],e=I[2],r=I[3],s=I[4],c=I[9]=I[9]===i?l?0:n.length:Q(I[9]-v,0),!c&&t&(Dn|yt)&&(t&=~(Dn|yt)),!t||t==vn)var E=Qc(n,t,e);else t==Dn||t==yt?E=Vc(n,t,c):(t==Nn||t==(vn|Nn))&&!s.length?E=kc(n,t,e,r):E=Xe.apply(i,I);var T=P?su:$u;return Uu(T(E,I),n,t)}function yu(n,t,e,r){return n===i||bn(n,Ht[e])&&!F.call(r,e)?t:n}function Su(n,t,e,r,s,o){return K(n)&&K(t)&&(o.set(t,n),Ke(n,t,i,Su,o),o.delete(t)),n}function nh(n){return pe(n)?i:n}function Ou(n,t,e,r,s,o){var f=e&Et,c=n.length,l=t.length;if(c!=l&&!(f&&l>c))return!1;var v=o.get(n),_=o.get(t);if(v&&_)return v==t&&_==n;var m=-1,P=!0,I=e&ve?new gt:i;for(o.set(n,t),o.set(t,n);++m<c;){var E=n[m],T=t[m];if(r)var y=f?r(T,E,m,t,n,o):r(E,T,m,n,t,o);if(y!==i){if(y)continue;P=!1;break}if(I){if(!Hr(t,function(N,$){if(!jt(I,$)&&(E===N||s(E,N,e,r,o)))return I.push($)})){P=!1;break}}else if(!(E===T||s(E,T,e,r,o))){P=!1;break}}return o.delete(n),o.delete(t),P}function th(n,t,e,r,s,o,f){switch(e){case Rt:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case kt:return!(n.byteLength!=t.byteLength||!o(new De(n),new De(t)));case Yt:case Zt:case Jt:return bn(+n,+t);case we:return n.name==t.name&&n.message==t.message;case Xt:case Qt:return n==t+"";case yn:var c=qr;case Sn:var l=r&Et;if(c||(c=Se),n.size!=t.size&&!l)return!1;var v=f.get(n);if(v)return v==t;r|=ve,f.set(n,t);var _=Ou(c(n),c(t),r,s,o,f);return f.delete(n),_;case Ae:if(ie)return ie.call(n)==ie.call(t)}return!1}function eh(n,t,e,r,s,o){var f=e&Et,c=li(n),l=c.length,v=li(t),_=v.length;if(l!=_&&!f)return!1;for(var m=l;m--;){var P=c[m];if(!(f?P in t:F.call(t,P)))return!1}var I=o.get(n),E=o.get(t);if(I&&E)return I==t&&E==n;var T=!0;o.set(n,t),o.set(t,n);for(var y=f;++m<l;){P=c[m];var N=n[P],$=t[P];if(r)var dn=f?r($,N,P,t,n,o):r(N,$,P,n,t,o);if(!(dn===i?N===$||s(N,$,e,r,o):dn)){T=!1;break}y||(y=P=="constructor")}if(T&&!y){var sn=n.constructor,gn=t.constructor;sn!=gn&&"constructor"in n&&"constructor"in t&&!(typeof sn=="function"&&sn instanceof sn&&typeof gn=="function"&&gn instanceof gn)&&(T=!1)}return o.delete(n),o.delete(t),T}function Yn(n){return Pi(Nu(n,i,Gu),n+"")}function li(n){return Js(n,V,vi)}function pi(n){return Js(n,on,Ru)}var di=Fe?function(n){return Fe.get(n)}:Di;function je(n){for(var t=n.name+"",e=Ut[t],r=F.call(Ut,t)?e.length:0;r--;){var s=e[r],o=s.func;if(o==null||o==n)return s.name}return t}function qt(n){var t=F.call(a,"placeholder")?a:n;return t.placeholder}function x(){var n=a.iteratee||Ti;return n=n===Ti?Vs:n,arguments.length?n(arguments[0],arguments[1]):n}function nr(n,t){var e=n.__data__;return ch(t)?e[typeof t=="string"?"string":"hash"]:e.map}function gi(n){for(var t=V(n),e=t.length;e--;){var r=t[e],s=n[r];t[e]=[r,s,Lu(s)]}return t}function mt(n,t){var e=pf(n,t);return Qs(e)?e:i}function rh(n){var t=F.call(n,pt),e=n[pt];try{n[pt]=i;var r=!0}catch{}var s=Te.call(n);return r&&(t?n[pt]=e:delete n[pt]),s}var vi=Gr?function(n){return n==null?[]:(n=M(n),jn(Gr(n),function(t){return Hs.call(n,t)}))}:Ni,Ru=Gr?function(n){for(var t=[];n;)nt(t,vi(n)),n=Ne(n);return t}:Ni,tn=en;(zr&&tn(new zr(new ArrayBuffer(1)))!=Rt||te&&tn(new te)!=yn||Kr&&tn(Kr.resolve())!=Ki||$t&&tn(new $t)!=Sn||ee&&tn(new ee)!=Vt)&&(tn=function(n){var t=en(n),e=t==qn?n.constructor:i,r=e?wt(e):"";if(r)switch(r){case Ff:return Rt;case Mf:return yn;case qf:return Ki;case Bf:return Sn;case Gf:return Vt}return t});function ih(n,t,e){for(var r=-1,s=e.length;++r<s;){var o=e[r],f=o.size;switch(o.type){case"drop":n+=f;break;case"dropRight":t-=f;break;case"take":t=nn(t,n+f);break;case"takeRight":n=Q(n,t-f);break}}return{start:n,end:t}}function sh(n){var t=n.match(fo);return t?t[1].split(co):[]}function bu(n,t,e){t=st(t,n);for(var r=-1,s=t.length,o=!1;++r<s;){var f=Wn(t[r]);if(!(o=n!=null&&e(n,f)))break;n=n[f]}return o||++r!=s?o:(s=n==null?0:n.length,!!s&&ar(s)&&Zn(f,s)&&(O(n)||Pt(n)))}function uh(n){var t=n.length,e=new n.constructor(t);return t&&typeof n[0]=="string"&&F.call(n,"index")&&(e.index=n.index,e.input=n.input),e}function Tu(n){return typeof n.constructor=="function"&&!he(n)?Wt(Ne(n)):{}}function ah(n,t,e){var r=n.constructor;switch(t){case kt:return fi(n);case Yt:case Zt:return new r(+n);case Rt:return zc(n,e);case gr:case vr:case _r:case mr:case wr:case Pr:case Ar:case Cr:case Ir:return pu(n,e);case yn:return new r;case Jt:case Qt:return new r(n);case Xt:return Kc(n);case Sn:return new r;case Ae:return Yc(n)}}function oh(n,t){var e=t.length;if(!e)return n;var r=e-1;return t[r]=(e>1?"& ":"")+t[r],t=t.join(e>2?", ":" "),n.replace(oo,`{
/* [wrapped with `+t+`] */
`)}function fh(n){return O(n)||Pt(n)||!!($s&&n&&n[$s])}function Zn(n,t){var e=typeof n;return t=t??kn,!!t&&(e=="number"||e!="symbol"&&Po.test(n))&&n>-1&&n%1==0&&n<t}function rn(n,t,e){if(!K(e))return!1;var r=typeof t;return(r=="number"?an(e)&&Zn(t,e.length):r=="string"&&t in e)?bn(e[t],n):!1}function _i(n,t){if(O(n))return!1;var e=typeof n;return e=="number"||e=="symbol"||e=="boolean"||n==null||pn(n)?!0:io.test(n)||!ro.test(n)||t!=null&&n in M(t)}function ch(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function mi(n){var t=je(n),e=a[t];if(typeof e!="function"||!(t in H.prototype))return!1;if(n===e)return!0;var r=di(e);return!!r&&n===r[0]}function hh(n){return!!Ls&&Ls in n}var lh=Re?Jn:Hi;function he(n){var t=n&&n.constructor,e=typeof t=="function"&&t.prototype||Ht;return n===e}function Lu(n){return n===n&&!K(n)}function Du(n,t){return function(e){return e==null?!1:e[n]===t&&(t!==i||n in M(e))}}function ph(n){var t=sr(n,function(r){return e.size===pr&&e.clear(),r}),e=t.cache;return t}function dh(n,t){var e=n[1],r=t[1],s=e|r,o=s<(vn|ct|Mn),f=r==Mn&&e==Dn||r==Mn&&e==Kt&&n[7].length<=t[8]||r==(Mn|Kt)&&t[7].length<=t[8]&&e==Dn;if(!(o||f))return n;r&vn&&(n[2]=t[2],s|=e&vn?0:Bi);var c=t[3];if(c){var l=n[3];n[3]=l?gu(l,c,t[4]):c,n[4]=l?tt(n[3],It):t[4]}return c=t[5],c&&(l=n[5],n[5]=l?vu(l,c,t[6]):c,n[6]=l?tt(n[5],It):t[6]),c=t[7],c&&(n[7]=c),r&Mn&&(n[8]=n[8]==null?t[8]:nn(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=s,n}function gh(n){var t=[];if(n!=null)for(var e in M(n))t.push(e);return t}function vh(n){return Te.call(n)}function Nu(n,t,e){return t=Q(t===i?n.length-1:t,0),function(){for(var r=arguments,s=-1,o=Q(r.length-t,0),f=d(o);++s<o;)f[s]=r[t+s];s=-1;for(var c=d(t+1);++s<t;)c[s]=r[s];return c[t]=e(f),cn(n,this,c)}}function Hu(n,t){return t.length<2?n:_t(n,Cn(t,0,-1))}function _h(n,t){for(var e=n.length,r=nn(t.length,e),s=un(n);r--;){var o=t[r];n[r]=Zn(o,e)?s[o]:i}return n}function wi(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var $u=Wu(su),le=Lf||function(n,t){return k.setTimeout(n,t)},Pi=Wu(Mc);function Uu(n,t,e){var r=t+"";return Pi(n,oh(r,mh(sh(r),e)))}function Wu(n){var t=0,e=0;return function(){var r=$f(),s=Ua-(r-e);if(e=r,s>0){if(++t>=$a)return arguments[0]}else t=0;return n.apply(i,arguments)}}function tr(n,t){var e=-1,r=n.length,s=r-1;for(t=t===i?r:t;++e<t;){var o=ei(e,s),f=n[o];n[o]=n[e],n[e]=f}return n.length=t,n}var Fu=ph(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(so,function(e,r,s,o){t.push(s?o.replace(po,"$1"):r||e)}),t});function Wn(n){if(typeof n=="string"||pn(n))return n;var t=n+"";return t=="0"&&1/n==-ht?"-0":t}function wt(n){if(n!=null){try{return be.call(n)}catch{}try{return n+""}catch{}}return""}function mh(n,t){return mn(Ga,function(e){var r="_."+e[0];t&e[1]&&!Ee(n,r)&&n.push(r)}),n.sort()}function Mu(n){if(n instanceof H)return n.clone();var t=new Pn(n.__wrapped__,n.__chain__);return t.__actions__=un(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function wh(n,t,e){(e?rn(n,t,e):t===i)?t=1:t=Q(R(t),0);var r=n==null?0:n.length;if(!r||t<1)return[];for(var s=0,o=0,f=d(Ue(r/t));s<r;)f[o++]=Cn(n,s,s+=t);return f}function Ph(n){for(var t=-1,e=n==null?0:n.length,r=0,s=[];++t<e;){var o=n[t];o&&(s[r++]=o)}return s}function Ah(){var n=arguments.length;if(!n)return[];for(var t=d(n-1),e=arguments[0],r=n;r--;)t[r-1]=arguments[r];return nt(O(e)?un(e):[e],j(t,1))}var Ch=L(function(n,t){return Z(n)?ue(n,j(t,1,Z,!0)):[]}),Ih=L(function(n,t){var e=In(t);return Z(e)&&(e=i),Z(n)?ue(n,j(t,1,Z,!0),x(e,2)):[]}),xh=L(function(n,t){var e=In(t);return Z(e)&&(e=i),Z(n)?ue(n,j(t,1,Z,!0),i,e):[]});function Eh(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===i?1:R(t),Cn(n,t<0?0:t,r)):[]}function yh(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===i?1:R(t),t=r-t,Cn(n,0,t<0?0:t)):[]}function Sh(n,t){return n&&n.length?Ze(n,x(t,3),!0,!0):[]}function Oh(n,t){return n&&n.length?Ze(n,x(t,3),!0):[]}function Rh(n,t,e,r){var s=n==null?0:n.length;return s?(e&&typeof e!="number"&&rn(n,t,e)&&(e=0,r=s),Ac(n,t,e,r)):[]}function qu(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=e==null?0:R(e);return s<0&&(s=Q(r+s,0)),ye(n,x(t,3),s)}function Bu(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=r-1;return e!==i&&(s=R(e),s=e<0?Q(r+s,0):nn(s,r-1)),ye(n,x(t,3),s,!0)}function Gu(n){var t=n==null?0:n.length;return t?j(n,1):[]}function bh(n){var t=n==null?0:n.length;return t?j(n,ht):[]}function Th(n,t){var e=n==null?0:n.length;return e?(t=t===i?1:R(t),j(n,t)):[]}function Lh(n){for(var t=-1,e=n==null?0:n.length,r={};++t<e;){var s=n[t];r[s[0]]=s[1]}return r}function zu(n){return n&&n.length?n[0]:i}function Dh(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=e==null?0:R(e);return s<0&&(s=Q(r+s,0)),Tt(n,t,s)}function Nh(n){var t=n==null?0:n.length;return t?Cn(n,0,-1):[]}var Hh=L(function(n){var t=G(n,ai);return t.length&&t[0]===n[0]?Vr(t):[]}),$h=L(function(n){var t=In(n),e=G(n,ai);return t===In(e)?t=i:e.pop(),e.length&&e[0]===n[0]?Vr(e,x(t,2)):[]}),Uh=L(function(n){var t=In(n),e=G(n,ai);return t=typeof t=="function"?t:i,t&&e.pop(),e.length&&e[0]===n[0]?Vr(e,i,t):[]});function Wh(n,t){return n==null?"":Nf.call(n,t)}function In(n){var t=n==null?0:n.length;return t?n[t-1]:i}function Fh(n,t,e){var r=n==null?0:n.length;if(!r)return-1;var s=r;return e!==i&&(s=R(e),s=s<0?Q(r+s,0):nn(s,r-1)),t===t?mf(n,t,s):ye(n,xs,s,!0)}function Mh(n,t){return n&&n.length?tu(n,R(t)):i}var qh=L(Ku);function Ku(n,t){return n&&n.length&&t&&t.length?ti(n,t):n}function Bh(n,t,e){return n&&n.length&&t&&t.length?ti(n,t,x(e,2)):n}function Gh(n,t,e){return n&&n.length&&t&&t.length?ti(n,t,i,e):n}var zh=Yn(function(n,t){var e=n==null?0:n.length,r=Zr(n,t);return iu(n,G(t,function(s){return Zn(s,e)?+s:s}).sort(du)),r});function Kh(n,t){var e=[];if(!(n&&n.length))return e;var r=-1,s=[],o=n.length;for(t=x(t,3);++r<o;){var f=n[r];t(f,r,n)&&(e.push(f),s.push(r))}return iu(n,s),e}function Ai(n){return n==null?n:Wf.call(n)}function Yh(n,t,e){var r=n==null?0:n.length;return r?(e&&typeof e!="number"&&rn(n,t,e)?(t=0,e=r):(t=t==null?0:R(t),e=e===i?r:R(e)),Cn(n,t,e)):[]}function Zh(n,t){return Ye(n,t)}function Jh(n,t,e){return ii(n,t,x(e,2))}function Xh(n,t){var e=n==null?0:n.length;if(e){var r=Ye(n,t);if(r<e&&bn(n[r],t))return r}return-1}function Qh(n,t){return Ye(n,t,!0)}function Vh(n,t,e){return ii(n,t,x(e,2),!0)}function kh(n,t){var e=n==null?0:n.length;if(e){var r=Ye(n,t,!0)-1;if(bn(n[r],t))return r}return-1}function jh(n){return n&&n.length?uu(n):[]}function nl(n,t){return n&&n.length?uu(n,x(t,2)):[]}function tl(n){var t=n==null?0:n.length;return t?Cn(n,1,t):[]}function el(n,t,e){return n&&n.length?(t=e||t===i?1:R(t),Cn(n,0,t<0?0:t)):[]}function rl(n,t,e){var r=n==null?0:n.length;return r?(t=e||t===i?1:R(t),t=r-t,Cn(n,t<0?0:t,r)):[]}function il(n,t){return n&&n.length?Ze(n,x(t,3),!1,!0):[]}function sl(n,t){return n&&n.length?Ze(n,x(t,3)):[]}var ul=L(function(n){return it(j(n,1,Z,!0))}),al=L(function(n){var t=In(n);return Z(t)&&(t=i),it(j(n,1,Z,!0),x(t,2))}),ol=L(function(n){var t=In(n);return t=typeof t=="function"?t:i,it(j(n,1,Z,!0),i,t)});function fl(n){return n&&n.length?it(n):[]}function cl(n,t){return n&&n.length?it(n,x(t,2)):[]}function hl(n,t){return t=typeof t=="function"?t:i,n&&n.length?it(n,i,t):[]}function Ci(n){if(!(n&&n.length))return[];var t=0;return n=jn(n,function(e){if(Z(e))return t=Q(e.length,t),!0}),Fr(t,function(e){return G(n,$r(e))})}function Yu(n,t){if(!(n&&n.length))return[];var e=Ci(n);return t==null?e:G(e,function(r){return cn(t,i,r)})}var ll=L(function(n,t){return Z(n)?ue(n,t):[]}),pl=L(function(n){return ui(jn(n,Z))}),dl=L(function(n){var t=In(n);return Z(t)&&(t=i),ui(jn(n,Z),x(t,2))}),gl=L(function(n){var t=In(n);return t=typeof t=="function"?t:i,ui(jn(n,Z),i,t)}),vl=L(Ci);function _l(n,t){return cu(n||[],t||[],se)}function ml(n,t){return cu(n||[],t||[],fe)}var wl=L(function(n){var t=n.length,e=t>1?n[t-1]:i;return e=typeof e=="function"?(n.pop(),e):i,Yu(n,e)});function Zu(n){var t=a(n);return t.__chain__=!0,t}function Pl(n,t){return t(n),n}function er(n,t){return t(n)}var Al=Yn(function(n){var t=n.length,e=t?n[0]:0,r=this.__wrapped__,s=function(o){return Zr(o,n)};return t>1||this.__actions__.length||!(r instanceof H)||!Zn(e)?this.thru(s):(r=r.slice(e,+e+(t?1:0)),r.__actions__.push({func:er,args:[s],thisArg:i}),new Pn(r,this.__chain__).thru(function(o){return t&&!o.length&&o.push(i),o}))});function Cl(){return Zu(this)}function Il(){return new Pn(this.value(),this.__chain__)}function xl(){this.__values__===i&&(this.__values__=aa(this.value()));var n=this.__index__>=this.__values__.length,t=n?i:this.__values__[this.__index__++];return{done:n,value:t}}function El(){return this}function yl(n){for(var t,e=this;e instanceof qe;){var r=Mu(e);r.__index__=0,r.__values__=i,t?s.__wrapped__=r:t=r;var s=r;e=e.__wrapped__}return s.__wrapped__=n,t}function Sl(){var n=this.__wrapped__;if(n instanceof H){var t=n;return this.__actions__.length&&(t=new H(this)),t=t.reverse(),t.__actions__.push({func:er,args:[Ai],thisArg:i}),new Pn(t,this.__chain__)}return this.thru(Ai)}function Ol(){return fu(this.__wrapped__,this.__actions__)}var Rl=Je(function(n,t,e){F.call(n,e)?++n[e]:zn(n,e,1)});function bl(n,t,e){var r=O(n)?Cs:Pc;return e&&rn(n,t,e)&&(t=i),r(n,x(t,3))}function Tl(n,t){var e=O(n)?jn:Ys;return e(n,x(t,3))}var Ll=Pu(qu),Dl=Pu(Bu);function Nl(n,t){return j(rr(n,t),1)}function Hl(n,t){return j(rr(n,t),ht)}function $l(n,t,e){return e=e===i?1:R(e),j(rr(n,t),e)}function Ju(n,t){var e=O(n)?mn:rt;return e(n,x(t,3))}function Xu(n,t){var e=O(n)?nf:Ks;return e(n,x(t,3))}var Ul=Je(function(n,t,e){F.call(n,e)?n[e].push(t):zn(n,e,[t])});function Wl(n,t,e,r){n=an(n)?n:Gt(n),e=e&&!r?R(e):0;var s=n.length;return e<0&&(e=Q(s+e,0)),or(n)?e<=s&&n.indexOf(t,e)>-1:!!s&&Tt(n,t,e)>-1}var Fl=L(function(n,t,e){var r=-1,s=typeof t=="function",o=an(n)?d(n.length):[];return rt(n,function(f){o[++r]=s?cn(t,f,e):ae(f,t,e)}),o}),Ml=Je(function(n,t,e){zn(n,e,t)});function rr(n,t){var e=O(n)?G:ks;return e(n,x(t,3))}function ql(n,t,e,r){return n==null?[]:(O(t)||(t=t==null?[]:[t]),e=r?i:e,O(e)||(e=e==null?[]:[e]),eu(n,t,e))}var Bl=Je(function(n,t,e){n[e?0:1].push(t)},function(){return[[],[]]});function Gl(n,t,e){var r=O(n)?Nr:ys,s=arguments.length<3;return r(n,x(t,4),e,s,rt)}function zl(n,t,e){var r=O(n)?tf:ys,s=arguments.length<3;return r(n,x(t,4),e,s,Ks)}function Kl(n,t){var e=O(n)?jn:Ys;return e(n,ur(x(t,3)))}function Yl(n){var t=O(n)?qs:Wc;return t(n)}function Zl(n,t,e){(e?rn(n,t,e):t===i)?t=1:t=R(t);var r=O(n)?gc:Fc;return r(n,t)}function Jl(n){var t=O(n)?vc:qc;return t(n)}function Xl(n){if(n==null)return 0;if(an(n))return or(n)?Dt(n):n.length;var t=tn(n);return t==yn||t==Sn?n.size:jr(n).length}function Ql(n,t,e){var r=O(n)?Hr:Bc;return e&&rn(n,t,e)&&(t=i),r(n,x(t,3))}var Vl=L(function(n,t){if(n==null)return[];var e=t.length;return e>1&&rn(n,t[0],t[1])?t=[]:e>2&&rn(t[0],t[1],t[2])&&(t=[t[0]]),eu(n,j(t,1),[])}),ir=Tf||function(){return k.Date.now()};function kl(n,t){if(typeof t!="function")throw new wn(D);return n=R(n),function(){if(--n<1)return t.apply(this,arguments)}}function Qu(n,t,e){return t=e?i:t,t=n&&t==null?n.length:t,Kn(n,Mn,i,i,i,i,t)}function Vu(n,t){var e;if(typeof t!="function")throw new wn(D);return n=R(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=i),e}}var Ii=L(function(n,t,e){var r=vn;if(e.length){var s=tt(e,qt(Ii));r|=Nn}return Kn(n,r,t,e,s)}),ku=L(function(n,t,e){var r=vn|ct;if(e.length){var s=tt(e,qt(ku));r|=Nn}return Kn(t,r,n,e,s)});function ju(n,t,e){t=e?i:t;var r=Kn(n,Dn,i,i,i,i,i,t);return r.placeholder=ju.placeholder,r}function na(n,t,e){t=e?i:t;var r=Kn(n,yt,i,i,i,i,i,t);return r.placeholder=na.placeholder,r}function ta(n,t,e){var r,s,o,f,c,l,v=0,_=!1,m=!1,P=!0;if(typeof n!="function")throw new wn(D);t=xn(t)||0,K(e)&&(_=!!e.leading,m="maxWait"in e,o=m?Q(xn(e.maxWait)||0,t):o,P="trailing"in e?!!e.trailing:P);function I(J){var Tn=r,Qn=s;return r=s=i,v=J,f=n.apply(Qn,Tn),f}function E(J){return v=J,c=le(N,t),_?I(J):f}function T(J){var Tn=J-l,Qn=J-v,Pa=t-Tn;return m?nn(Pa,o-Qn):Pa}function y(J){var Tn=J-l,Qn=J-v;return l===i||Tn>=t||Tn<0||m&&Qn>=o}function N(){var J=ir();if(y(J))return $(J);c=le(N,T(J))}function $(J){return c=i,P&&r?I(J):(r=s=i,f)}function dn(){c!==i&&hu(c),v=0,r=l=s=c=i}function sn(){return c===i?f:$(ir())}function gn(){var J=ir(),Tn=y(J);if(r=arguments,s=this,l=J,Tn){if(c===i)return E(l);if(m)return hu(c),c=le(N,t),I(l)}return c===i&&(c=le(N,t)),f}return gn.cancel=dn,gn.flush=sn,gn}var jl=L(function(n,t){return zs(n,1,t)}),np=L(function(n,t,e){return zs(n,xn(t)||0,e)});function tp(n){return Kn(n,dr)}function sr(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new wn(D);var e=function(){var r=arguments,s=t?t.apply(this,r):r[0],o=e.cache;if(o.has(s))return o.get(s);var f=n.apply(this,r);return e.cache=o.set(s,f)||o,f};return e.cache=new(sr.Cache||Gn),e}sr.Cache=Gn;function ur(n){if(typeof n!="function")throw new wn(D);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function ep(n){return Vu(2,n)}var rp=Gc(function(n,t){t=t.length==1&&O(t[0])?G(t[0],hn(x())):G(j(t,1),hn(x()));var e=t.length;return L(function(r){for(var s=-1,o=nn(r.length,e);++s<o;)r[s]=t[s].call(this,r[s]);return cn(n,this,r)})}),xi=L(function(n,t){var e=tt(t,qt(xi));return Kn(n,Nn,i,t,e)}),ea=L(function(n,t){var e=tt(t,qt(ea));return Kn(n,St,i,t,e)}),ip=Yn(function(n,t){return Kn(n,Kt,i,i,i,t)});function sp(n,t){if(typeof n!="function")throw new wn(D);return t=t===i?t:R(t),L(n,t)}function up(n,t){if(typeof n!="function")throw new wn(D);return t=t==null?0:Q(R(t),0),L(function(e){var r=e[t],s=ut(e,0,t);return r&&nt(s,r),cn(n,this,s)})}function ap(n,t,e){var r=!0,s=!0;if(typeof n!="function")throw new wn(D);return K(e)&&(r="leading"in e?!!e.leading:r,s="trailing"in e?!!e.trailing:s),ta(n,t,{leading:r,maxWait:t,trailing:s})}function op(n){return Qu(n,1)}function fp(n,t){return xi(oi(t),n)}function cp(){if(!arguments.length)return[];var n=arguments[0];return O(n)?n:[n]}function hp(n){return An(n,xt)}function lp(n,t){return t=typeof t=="function"?t:i,An(n,xt,t)}function pp(n){return An(n,Ln|xt)}function dp(n,t){return t=typeof t=="function"?t:i,An(n,Ln|xt,t)}function gp(n,t){return t==null||Gs(n,t,V(t))}function bn(n,t){return n===t||n!==n&&t!==t}var vp=ke(Qr),_p=ke(function(n,t){return n>=t}),Pt=Xs(function(){return arguments}())?Xs:function(n){return Y(n)&&F.call(n,"callee")&&!Hs.call(n,"callee")},O=d.isArray,mp=vs?hn(vs):yc;function an(n){return n!=null&&ar(n.length)&&!Jn(n)}function Z(n){return Y(n)&&an(n)}function wp(n){return n===!0||n===!1||Y(n)&&en(n)==Yt}var at=Df||Hi,Pp=_s?hn(_s):Sc;function Ap(n){return Y(n)&&n.nodeType===1&&!pe(n)}function Cp(n){if(n==null)return!0;if(an(n)&&(O(n)||typeof n=="string"||typeof n.splice=="function"||at(n)||Bt(n)||Pt(n)))return!n.length;var t=tn(n);if(t==yn||t==Sn)return!n.size;if(he(n))return!jr(n).length;for(var e in n)if(F.call(n,e))return!1;return!0}function Ip(n,t){return oe(n,t)}function xp(n,t,e){e=typeof e=="function"?e:i;var r=e?e(n,t):i;return r===i?oe(n,t,i,e):!!r}function Ei(n){if(!Y(n))return!1;var t=en(n);return t==we||t==Ka||typeof n.message=="string"&&typeof n.name=="string"&&!pe(n)}function Ep(n){return typeof n=="number"&&Us(n)}function Jn(n){if(!K(n))return!1;var t=en(n);return t==Pe||t==zi||t==za||t==Za}function ra(n){return typeof n=="number"&&n==R(n)}function ar(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=kn}function K(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function Y(n){return n!=null&&typeof n=="object"}var ia=ms?hn(ms):Rc;function yp(n,t){return n===t||kr(n,t,gi(t))}function Sp(n,t,e){return e=typeof e=="function"?e:i,kr(n,t,gi(t),e)}function Op(n){return sa(n)&&n!=+n}function Rp(n){if(lh(n))throw new S(b);return Qs(n)}function bp(n){return n===null}function Tp(n){return n==null}function sa(n){return typeof n=="number"||Y(n)&&en(n)==Jt}function pe(n){if(!Y(n)||en(n)!=qn)return!1;var t=Ne(n);if(t===null)return!0;var e=F.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&be.call(e)==Sf}var yi=ws?hn(ws):bc;function Lp(n){return ra(n)&&n>=-kn&&n<=kn}var ua=Ps?hn(Ps):Tc;function or(n){return typeof n=="string"||!O(n)&&Y(n)&&en(n)==Qt}function pn(n){return typeof n=="symbol"||Y(n)&&en(n)==Ae}var Bt=As?hn(As):Lc;function Dp(n){return n===i}function Np(n){return Y(n)&&tn(n)==Vt}function Hp(n){return Y(n)&&en(n)==Xa}var $p=ke(ni),Up=ke(function(n,t){return n<=t});function aa(n){if(!n)return[];if(an(n))return or(n)?On(n):un(n);if(ne&&n[ne])return gf(n[ne]());var t=tn(n),e=t==yn?qr:t==Sn?Se:Gt;return e(n)}function Xn(n){if(!n)return n===0?n:0;if(n=xn(n),n===ht||n===-ht){var t=n<0?-1:1;return t*Ma}return n===n?n:0}function R(n){var t=Xn(n),e=t%1;return t===t?e?t-e:t:0}function oa(n){return n?vt(R(n),0,Hn):0}function xn(n){if(typeof n=="number")return n;if(pn(n))return _e;if(K(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=K(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Ss(n);var e=_o.test(n);return e||wo.test(n)?Vo(n.slice(2),e?2:8):vo.test(n)?_e:+n}function fa(n){return Un(n,on(n))}function Wp(n){return n?vt(R(n),-kn,kn):n===0?n:0}function W(n){return n==null?"":ln(n)}var Fp=Ft(function(n,t){if(he(t)||an(t)){Un(t,V(t),n);return}for(var e in t)F.call(t,e)&&se(n,e,t[e])}),ca=Ft(function(n,t){Un(t,on(t),n)}),fr=Ft(function(n,t,e,r){Un(t,on(t),n,r)}),Mp=Ft(function(n,t,e,r){Un(t,V(t),n,r)}),qp=Yn(Zr);function Bp(n,t){var e=Wt(n);return t==null?e:Bs(e,t)}var Gp=L(function(n,t){n=M(n);var e=-1,r=t.length,s=r>2?t[2]:i;for(s&&rn(t[0],t[1],s)&&(r=1);++e<r;)for(var o=t[e],f=on(o),c=-1,l=f.length;++c<l;){var v=f[c],_=n[v];(_===i||bn(_,Ht[v])&&!F.call(n,v))&&(n[v]=o[v])}return n}),zp=L(function(n){return n.push(i,Su),cn(ha,i,n)});function Kp(n,t){return Is(n,x(t,3),$n)}function Yp(n,t){return Is(n,x(t,3),Xr)}function Zp(n,t){return n==null?n:Jr(n,x(t,3),on)}function Jp(n,t){return n==null?n:Zs(n,x(t,3),on)}function Xp(n,t){return n&&$n(n,x(t,3))}function Qp(n,t){return n&&Xr(n,x(t,3))}function Vp(n){return n==null?[]:ze(n,V(n))}function kp(n){return n==null?[]:ze(n,on(n))}function Si(n,t,e){var r=n==null?i:_t(n,t);return r===i?e:r}function jp(n,t){return n!=null&&bu(n,t,Cc)}function Oi(n,t){return n!=null&&bu(n,t,Ic)}var nd=Cu(function(n,t,e){t!=null&&typeof t.toString!="function"&&(t=Te.call(t)),n[t]=e},bi(fn)),td=Cu(function(n,t,e){t!=null&&typeof t.toString!="function"&&(t=Te.call(t)),F.call(n,t)?n[t].push(e):n[t]=[e]},x),ed=L(ae);function V(n){return an(n)?Ms(n):jr(n)}function on(n){return an(n)?Ms(n,!0):Dc(n)}function rd(n,t){var e={};return t=x(t,3),$n(n,function(r,s,o){zn(e,t(r,s,o),r)}),e}function id(n,t){var e={};return t=x(t,3),$n(n,function(r,s,o){zn(e,s,t(r,s,o))}),e}var sd=Ft(function(n,t,e){Ke(n,t,e)}),ha=Ft(function(n,t,e,r){Ke(n,t,e,r)}),ud=Yn(function(n,t){var e={};if(n==null)return e;var r=!1;t=G(t,function(o){return o=st(o,n),r||(r=o.length>1),o}),Un(n,pi(n),e),r&&(e=An(e,Ln|Fn|xt,nh));for(var s=t.length;s--;)si(e,t[s]);return e});function ad(n,t){return la(n,ur(x(t)))}var od=Yn(function(n,t){return n==null?{}:Hc(n,t)});function la(n,t){if(n==null)return{};var e=G(pi(n),function(r){return[r]});return t=x(t),ru(n,e,function(r,s){return t(r,s[0])})}function fd(n,t,e){t=st(t,n);var r=-1,s=t.length;for(s||(s=1,n=i);++r<s;){var o=n==null?i:n[Wn(t[r])];o===i&&(r=s,o=e),n=Jn(o)?o.call(n):o}return n}function cd(n,t,e){return n==null?n:fe(n,t,e)}function hd(n,t,e,r){return r=typeof r=="function"?r:i,n==null?n:fe(n,t,e,r)}var pa=Eu(V),da=Eu(on);function ld(n,t,e){var r=O(n),s=r||at(n)||Bt(n);if(t=x(t,4),e==null){var o=n&&n.constructor;s?e=r?new o:[]:K(n)?e=Jn(o)?Wt(Ne(n)):{}:e={}}return(s?mn:$n)(n,function(f,c,l){return t(e,f,c,l)}),e}function pd(n,t){return n==null?!0:si(n,t)}function dd(n,t,e){return n==null?n:ou(n,t,oi(e))}function gd(n,t,e,r){return r=typeof r=="function"?r:i,n==null?n:ou(n,t,oi(e),r)}function Gt(n){return n==null?[]:Mr(n,V(n))}function vd(n){return n==null?[]:Mr(n,on(n))}function _d(n,t,e){return e===i&&(e=t,t=i),e!==i&&(e=xn(e),e=e===e?e:0),t!==i&&(t=xn(t),t=t===t?t:0),vt(xn(n),t,e)}function md(n,t,e){return t=Xn(t),e===i?(e=t,t=0):e=Xn(e),n=xn(n),xc(n,t,e)}function wd(n,t,e){if(e&&typeof e!="boolean"&&rn(n,t,e)&&(t=e=i),e===i&&(typeof t=="boolean"?(e=t,t=i):typeof n=="boolean"&&(e=n,n=i)),n===i&&t===i?(n=0,t=1):(n=Xn(n),t===i?(t=n,n=0):t=Xn(t)),n>t){var r=n;n=t,t=r}if(e||n%1||t%1){var s=Ws();return nn(n+s*(t-n+Qo("1e-"+((s+"").length-1))),t)}return ei(n,t)}var Pd=Mt(function(n,t,e){return t=t.toLowerCase(),n+(e?ga(t):t)});function ga(n){return Ri(W(n).toLowerCase())}function va(n){return n=W(n),n&&n.replace(Ao,cf).replace(Mo,"")}function Ad(n,t,e){n=W(n),t=ln(t);var r=n.length;e=e===i?r:vt(R(e),0,r);var s=e;return e-=t.length,e>=0&&n.slice(e,s)==t}function Cd(n){return n=W(n),n&&no.test(n)?n.replace(Zi,hf):n}function Id(n){return n=W(n),n&&uo.test(n)?n.replace(xr,"\\$&"):n}var xd=Mt(function(n,t,e){return n+(e?"-":"")+t.toLowerCase()}),Ed=Mt(function(n,t,e){return n+(e?" ":"")+t.toLowerCase()}),yd=wu("toLowerCase");function Sd(n,t,e){n=W(n),t=R(t);var r=t?Dt(n):0;if(!t||r>=t)return n;var s=(t-r)/2;return Ve(We(s),e)+n+Ve(Ue(s),e)}function Od(n,t,e){n=W(n),t=R(t);var r=t?Dt(n):0;return t&&r<t?n+Ve(t-r,e):n}function Rd(n,t,e){n=W(n),t=R(t);var r=t?Dt(n):0;return t&&r<t?Ve(t-r,e)+n:n}function bd(n,t,e){return e||t==null?t=0:t&&(t=+t),Uf(W(n).replace(Er,""),t||0)}function Td(n,t,e){return(e?rn(n,t,e):t===i)?t=1:t=R(t),ri(W(n),t)}function Ld(){var n=arguments,t=W(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var Dd=Mt(function(n,t,e){return n+(e?"_":"")+t.toLowerCase()});function Nd(n,t,e){return e&&typeof e!="number"&&rn(n,t,e)&&(t=e=i),e=e===i?Hn:e>>>0,e?(n=W(n),n&&(typeof t=="string"||t!=null&&!yi(t))&&(t=ln(t),!t&&Lt(n))?ut(On(n),0,e):n.split(t,e)):[]}var Hd=Mt(function(n,t,e){return n+(e?" ":"")+Ri(t)});function $d(n,t,e){return n=W(n),e=e==null?0:vt(R(e),0,n.length),t=ln(t),n.slice(e,e+t.length)==t}function Ud(n,t,e){var r=a.templateSettings;e&&rn(n,t,e)&&(t=i),n=W(n),t=fr({},t,r,yu);var s=fr({},t.imports,r.imports,yu),o=V(s),f=Mr(s,o),c,l,v=0,_=t.interpolate||Ce,m="__p += '",P=Br((t.escape||Ce).source+"|"+_.source+"|"+(_===Ji?go:Ce).source+"|"+(t.evaluate||Ce).source+"|$","g"),I="//# sourceURL="+(F.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ko+"]")+`
`;n.replace(P,function(y,N,$,dn,sn,gn){return $||($=dn),m+=n.slice(v,gn).replace(Co,lf),N&&(c=!0,m+=`' +
__e(`+N+`) +
'`),sn&&(l=!0,m+=`';
`+sn+`;
__p += '`),$&&(m+=`' +
((__t = (`+$+`)) == null ? '' : __t) +
'`),v=gn+y.length,y}),m+=`';
`;var E=F.call(t,"variable")&&t.variable;if(!E)m=`with (obj) {
`+m+`
}
`;else if(lo.test(E))throw new S(En);m=(l?m.replace(Qa,""):m).replace(Va,"$1").replace(ka,"$1;"),m="function("+(E||"obj")+`) {
`+(E?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(c?", __e = _.escape":"")+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+m+`return __p
}`;var T=ma(function(){return U(o,I+"return "+m).apply(i,f)});if(T.source=m,Ei(T))throw T;return T}function Wd(n){return W(n).toLowerCase()}function Fd(n){return W(n).toUpperCase()}function Md(n,t,e){if(n=W(n),n&&(e||t===i))return Ss(n);if(!n||!(t=ln(t)))return n;var r=On(n),s=On(t),o=Os(r,s),f=Rs(r,s)+1;return ut(r,o,f).join("")}function qd(n,t,e){if(n=W(n),n&&(e||t===i))return n.slice(0,Ts(n)+1);if(!n||!(t=ln(t)))return n;var r=On(n),s=Rs(r,On(t))+1;return ut(r,0,s).join("")}function Bd(n,t,e){if(n=W(n),n&&(e||t===i))return n.replace(Er,"");if(!n||!(t=ln(t)))return n;var r=On(n),s=Os(r,On(t));return ut(r,s).join("")}function Gd(n,t){var e=Na,r=Ha;if(K(t)){var s="separator"in t?t.separator:s;e="length"in t?R(t.length):e,r="omission"in t?ln(t.omission):r}n=W(n);var o=n.length;if(Lt(n)){var f=On(n);o=f.length}if(e>=o)return n;var c=e-Dt(r);if(c<1)return r;var l=f?ut(f,0,c).join(""):n.slice(0,c);if(s===i)return l+r;if(f&&(c+=l.length-c),yi(s)){if(n.slice(c).search(s)){var v,_=l;for(s.global||(s=Br(s.source,W(Xi.exec(s))+"g")),s.lastIndex=0;v=s.exec(_);)var m=v.index;l=l.slice(0,m===i?c:m)}}else if(n.indexOf(ln(s),c)!=c){var P=l.lastIndexOf(s);P>-1&&(l=l.slice(0,P))}return l+r}function zd(n){return n=W(n),n&&ja.test(n)?n.replace(Yi,wf):n}var Kd=Mt(function(n,t,e){return n+(e?" ":"")+t.toUpperCase()}),Ri=wu("toUpperCase");function _a(n,t,e){return n=W(n),t=e?i:t,t===i?df(n)?Cf(n):sf(n):n.match(t)||[]}var ma=L(function(n,t){try{return cn(n,i,t)}catch(e){return Ei(e)?e:new S(e)}}),Yd=Yn(function(n,t){return mn(t,function(e){e=Wn(e),zn(n,e,Ii(n[e],n))}),n});function Zd(n){var t=n==null?0:n.length,e=x();return n=t?G(n,function(r){if(typeof r[1]!="function")throw new wn(D);return[e(r[0]),r[1]]}):[],L(function(r){for(var s=-1;++s<t;){var o=n[s];if(cn(o[0],this,r))return cn(o[1],this,r)}})}function Jd(n){return wc(An(n,Ln))}function bi(n){return function(){return n}}function Xd(n,t){return n==null||n!==n?t:n}var Qd=Au(),Vd=Au(!0);function fn(n){return n}function Ti(n){return Vs(typeof n=="function"?n:An(n,Ln))}function kd(n){return js(An(n,Ln))}function jd(n,t){return nu(n,An(t,Ln))}var ng=L(function(n,t){return function(e){return ae(e,n,t)}}),tg=L(function(n,t){return function(e){return ae(n,e,t)}});function Li(n,t,e){var r=V(t),s=ze(t,r);e==null&&!(K(t)&&(s.length||!r.length))&&(e=t,t=n,n=this,s=ze(t,V(t)));var o=!(K(e)&&"chain"in e)||!!e.chain,f=Jn(n);return mn(s,function(c){var l=t[c];n[c]=l,f&&(n.prototype[c]=function(){var v=this.__chain__;if(o||v){var _=n(this.__wrapped__),m=_.__actions__=un(this.__actions__);return m.push({func:l,args:arguments,thisArg:n}),_.__chain__=v,_}return l.apply(n,nt([this.value()],arguments))})}),n}function eg(){return k._===this&&(k._=Of),this}function Di(){}function rg(n){return n=R(n),L(function(t){return tu(t,n)})}var ig=ci(G),sg=ci(Cs),ug=ci(Hr);function wa(n){return _i(n)?$r(Wn(n)):$c(n)}function ag(n){return function(t){return n==null?i:_t(n,t)}}var og=Iu(),fg=Iu(!0);function Ni(){return[]}function Hi(){return!1}function cg(){return{}}function hg(){return""}function lg(){return!0}function pg(n,t){if(n=R(n),n<1||n>kn)return[];var e=Hn,r=nn(n,Hn);t=x(t),n-=Hn;for(var s=Fr(r,t);++e<n;)t(e);return s}function dg(n){return O(n)?G(n,Wn):pn(n)?[n]:un(Fu(W(n)))}function gg(n){var t=++yf;return W(n)+t}var vg=Qe(function(n,t){return n+t},0),_g=hi("ceil"),mg=Qe(function(n,t){return n/t},1),wg=hi("floor");function Pg(n){return n&&n.length?Ge(n,fn,Qr):i}function Ag(n,t){return n&&n.length?Ge(n,x(t,2),Qr):i}function Cg(n){return Es(n,fn)}function Ig(n,t){return Es(n,x(t,2))}function xg(n){return n&&n.length?Ge(n,fn,ni):i}function Eg(n,t){return n&&n.length?Ge(n,x(t,2),ni):i}var yg=Qe(function(n,t){return n*t},1),Sg=hi("round"),Og=Qe(function(n,t){return n-t},0);function Rg(n){return n&&n.length?Wr(n,fn):0}function bg(n,t){return n&&n.length?Wr(n,x(t,2)):0}return a.after=kl,a.ary=Qu,a.assign=Fp,a.assignIn=ca,a.assignInWith=fr,a.assignWith=Mp,a.at=qp,a.before=Vu,a.bind=Ii,a.bindAll=Yd,a.bindKey=ku,a.castArray=cp,a.chain=Zu,a.chunk=wh,a.compact=Ph,a.concat=Ah,a.cond=Zd,a.conforms=Jd,a.constant=bi,a.countBy=Rl,a.create=Bp,a.curry=ju,a.curryRight=na,a.debounce=ta,a.defaults=Gp,a.defaultsDeep=zp,a.defer=jl,a.delay=np,a.difference=Ch,a.differenceBy=Ih,a.differenceWith=xh,a.drop=Eh,a.dropRight=yh,a.dropRightWhile=Sh,a.dropWhile=Oh,a.fill=Rh,a.filter=Tl,a.flatMap=Nl,a.flatMapDeep=Hl,a.flatMapDepth=$l,a.flatten=Gu,a.flattenDeep=bh,a.flattenDepth=Th,a.flip=tp,a.flow=Qd,a.flowRight=Vd,a.fromPairs=Lh,a.functions=Vp,a.functionsIn=kp,a.groupBy=Ul,a.initial=Nh,a.intersection=Hh,a.intersectionBy=$h,a.intersectionWith=Uh,a.invert=nd,a.invertBy=td,a.invokeMap=Fl,a.iteratee=Ti,a.keyBy=Ml,a.keys=V,a.keysIn=on,a.map=rr,a.mapKeys=rd,a.mapValues=id,a.matches=kd,a.matchesProperty=jd,a.memoize=sr,a.merge=sd,a.mergeWith=ha,a.method=ng,a.methodOf=tg,a.mixin=Li,a.negate=ur,a.nthArg=rg,a.omit=ud,a.omitBy=ad,a.once=ep,a.orderBy=ql,a.over=ig,a.overArgs=rp,a.overEvery=sg,a.overSome=ug,a.partial=xi,a.partialRight=ea,a.partition=Bl,a.pick=od,a.pickBy=la,a.property=wa,a.propertyOf=ag,a.pull=qh,a.pullAll=Ku,a.pullAllBy=Bh,a.pullAllWith=Gh,a.pullAt=zh,a.range=og,a.rangeRight=fg,a.rearg=ip,a.reject=Kl,a.remove=Kh,a.rest=sp,a.reverse=Ai,a.sampleSize=Zl,a.set=cd,a.setWith=hd,a.shuffle=Jl,a.slice=Yh,a.sortBy=Vl,a.sortedUniq=jh,a.sortedUniqBy=nl,a.split=Nd,a.spread=up,a.tail=tl,a.take=el,a.takeRight=rl,a.takeRightWhile=il,a.takeWhile=sl,a.tap=Pl,a.throttle=ap,a.thru=er,a.toArray=aa,a.toPairs=pa,a.toPairsIn=da,a.toPath=dg,a.toPlainObject=fa,a.transform=ld,a.unary=op,a.union=ul,a.unionBy=al,a.unionWith=ol,a.uniq=fl,a.uniqBy=cl,a.uniqWith=hl,a.unset=pd,a.unzip=Ci,a.unzipWith=Yu,a.update=dd,a.updateWith=gd,a.values=Gt,a.valuesIn=vd,a.without=ll,a.words=_a,a.wrap=fp,a.xor=pl,a.xorBy=dl,a.xorWith=gl,a.zip=vl,a.zipObject=_l,a.zipObjectDeep=ml,a.zipWith=wl,a.entries=pa,a.entriesIn=da,a.extend=ca,a.extendWith=fr,Li(a,a),a.add=vg,a.attempt=ma,a.camelCase=Pd,a.capitalize=ga,a.ceil=_g,a.clamp=_d,a.clone=hp,a.cloneDeep=pp,a.cloneDeepWith=dp,a.cloneWith=lp,a.conformsTo=gp,a.deburr=va,a.defaultTo=Xd,a.divide=mg,a.endsWith=Ad,a.eq=bn,a.escape=Cd,a.escapeRegExp=Id,a.every=bl,a.find=Ll,a.findIndex=qu,a.findKey=Kp,a.findLast=Dl,a.findLastIndex=Bu,a.findLastKey=Yp,a.floor=wg,a.forEach=Ju,a.forEachRight=Xu,a.forIn=Zp,a.forInRight=Jp,a.forOwn=Xp,a.forOwnRight=Qp,a.get=Si,a.gt=vp,a.gte=_p,a.has=jp,a.hasIn=Oi,a.head=zu,a.identity=fn,a.includes=Wl,a.indexOf=Dh,a.inRange=md,a.invoke=ed,a.isArguments=Pt,a.isArray=O,a.isArrayBuffer=mp,a.isArrayLike=an,a.isArrayLikeObject=Z,a.isBoolean=wp,a.isBuffer=at,a.isDate=Pp,a.isElement=Ap,a.isEmpty=Cp,a.isEqual=Ip,a.isEqualWith=xp,a.isError=Ei,a.isFinite=Ep,a.isFunction=Jn,a.isInteger=ra,a.isLength=ar,a.isMap=ia,a.isMatch=yp,a.isMatchWith=Sp,a.isNaN=Op,a.isNative=Rp,a.isNil=Tp,a.isNull=bp,a.isNumber=sa,a.isObject=K,a.isObjectLike=Y,a.isPlainObject=pe,a.isRegExp=yi,a.isSafeInteger=Lp,a.isSet=ua,a.isString=or,a.isSymbol=pn,a.isTypedArray=Bt,a.isUndefined=Dp,a.isWeakMap=Np,a.isWeakSet=Hp,a.join=Wh,a.kebabCase=xd,a.last=In,a.lastIndexOf=Fh,a.lowerCase=Ed,a.lowerFirst=yd,a.lt=$p,a.lte=Up,a.max=Pg,a.maxBy=Ag,a.mean=Cg,a.meanBy=Ig,a.min=xg,a.minBy=Eg,a.stubArray=Ni,a.stubFalse=Hi,a.stubObject=cg,a.stubString=hg,a.stubTrue=lg,a.multiply=yg,a.nth=Mh,a.noConflict=eg,a.noop=Di,a.now=ir,a.pad=Sd,a.padEnd=Od,a.padStart=Rd,a.parseInt=bd,a.random=wd,a.reduce=Gl,a.reduceRight=zl,a.repeat=Td,a.replace=Ld,a.result=fd,a.round=Sg,a.runInContext=h,a.sample=Yl,a.size=Xl,a.snakeCase=Dd,a.some=Ql,a.sortedIndex=Zh,a.sortedIndexBy=Jh,a.sortedIndexOf=Xh,a.sortedLastIndex=Qh,a.sortedLastIndexBy=Vh,a.sortedLastIndexOf=kh,a.startCase=Hd,a.startsWith=$d,a.subtract=Og,a.sum=Rg,a.sumBy=bg,a.template=Ud,a.times=pg,a.toFinite=Xn,a.toInteger=R,a.toLength=oa,a.toLower=Wd,a.toNumber=xn,a.toSafeInteger=Wp,a.toString=W,a.toUpper=Fd,a.trim=Md,a.trimEnd=qd,a.trimStart=Bd,a.truncate=Gd,a.unescape=zd,a.uniqueId=gg,a.upperCase=Kd,a.upperFirst=Ri,a.each=Ju,a.eachRight=Xu,a.first=zu,Li(a,function(){var n={};return $n(a,function(t,e){F.call(a.prototype,e)||(n[e]=t)}),n}(),{chain:!1}),a.VERSION=p,mn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){a[n].placeholder=a}),mn(["drop","take"],function(n,t){H.prototype[n]=function(e){e=e===i?1:Q(R(e),0);var r=this.__filtered__&&!t?new H(this):this.clone();return r.__filtered__?r.__takeCount__=nn(e,r.__takeCount__):r.__views__.push({size:nn(e,Hn),type:n+(r.__dir__<0?"Right":"")}),r},H.prototype[n+"Right"]=function(e){return this.reverse()[n](e).reverse()}}),mn(["filter","map","takeWhile"],function(n,t){var e=t+1,r=e==Gi||e==Fa;H.prototype[n]=function(s){var o=this.clone();return o.__iteratees__.push({iteratee:x(s,3),type:e}),o.__filtered__=o.__filtered__||r,o}}),mn(["head","last"],function(n,t){var e="take"+(t?"Right":"");H.prototype[n]=function(){return this[e](1).value()[0]}}),mn(["initial","tail"],function(n,t){var e="drop"+(t?"":"Right");H.prototype[n]=function(){return this.__filtered__?new H(this):this[e](1)}}),H.prototype.compact=function(){return this.filter(fn)},H.prototype.find=function(n){return this.filter(n).head()},H.prototype.findLast=function(n){return this.reverse().find(n)},H.prototype.invokeMap=L(function(n,t){return typeof n=="function"?new H(this):this.map(function(e){return ae(e,n,t)})}),H.prototype.reject=function(n){return this.filter(ur(x(n)))},H.prototype.slice=function(n,t){n=R(n);var e=this;return e.__filtered__&&(n>0||t<0)?new H(e):(n<0?e=e.takeRight(-n):n&&(e=e.drop(n)),t!==i&&(t=R(t),e=t<0?e.dropRight(-t):e.take(t-n)),e)},H.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},H.prototype.toArray=function(){return this.take(Hn)},$n(H.prototype,function(n,t){var e=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),s=a[r?"take"+(t=="last"?"Right":""):t],o=r||/^find/.test(t);s&&(a.prototype[t]=function(){var f=this.__wrapped__,c=r?[1]:arguments,l=f instanceof H,v=c[0],_=l||O(f),m=function(N){var $=s.apply(a,nt([N],c));return r&&P?$[0]:$};_&&e&&typeof v=="function"&&v.length!=1&&(l=_=!1);var P=this.__chain__,I=!!this.__actions__.length,E=o&&!P,T=l&&!I;if(!o&&_){f=T?f:new H(this);var y=n.apply(f,c);return y.__actions__.push({func:er,args:[m],thisArg:i}),new Pn(y,P)}return E&&T?n.apply(this,c):(y=this.thru(m),E?r?y.value()[0]:y.value():y)})}),mn(["pop","push","shift","sort","splice","unshift"],function(n){var t=Oe[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",r=/^(?:pop|shift)$/.test(n);a.prototype[n]=function(){var s=arguments;if(r&&!this.__chain__){var o=this.value();return t.apply(O(o)?o:[],s)}return this[e](function(f){return t.apply(O(f)?f:[],s)})}}),$n(H.prototype,function(n,t){var e=a[t];if(e){var r=e.name+"";F.call(Ut,r)||(Ut[r]=[]),Ut[r].push({name:t,func:e})}}),Ut[Xe(i,ct).name]=[{name:"wrapper",func:i}],H.prototype.clone=zf,H.prototype.reverse=Kf,H.prototype.value=Yf,a.prototype.at=Al,a.prototype.chain=Cl,a.prototype.commit=Il,a.prototype.next=xl,a.prototype.plant=yl,a.prototype.reverse=Sl,a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=Ol,a.prototype.first=a.prototype.head,ne&&(a.prototype[ne]=El),a},Nt=If();lt?((lt.exports=Nt)._=Nt,Tr._=Nt):k._=Nt}).call(dist_index_es_ge)})(index_es_Ui,index_es_Ui.exports);var zg=Object.defineProperty,Kg=Object.defineProperties,Yg=Object.getOwnPropertyDescriptors,index_es_ya=Object.getOwnPropertySymbols,Zg=Object.prototype.hasOwnProperty,Jg=Object.prototype.propertyIsEnumerable,index_es_Sa=(A,u,i)=>u in A?zg(A,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):A[u]=i,dist_index_es_cr=(A,u)=>{for(var i in u||(u={}))Zg.call(u,i)&&index_es_Sa(A,i,u[i]);if(index_es_ya)for(var i of index_es_ya(u))Jg.call(u,i)&&index_es_Sa(A,i,u[i]);return A},Xg=(A,u)=>Kg(A,Yg(u));function index_es_ft(A,u,i){var p;const w=dn(A);return((p=u.rpcMap)==null?void 0:p[w.reference])||`${Gg}?chainId=${w.namespace}:${w.reference}&projectId=${i}`}function index_es_Ct(A){return A.includes(":")?A.split(":")[1]:A}function index_es_Oa(A){return A.map(u=>`${u.split(":")[0]}:${u.split(":")[1]}`)}function Qg(A,u){const i=Object.keys(u.namespaces).filter(w=>w.includes(A));if(!i.length)return[];const p=[];return i.forEach(w=>{const b=u.namespaces[w].accounts;p.push(...b)}),p}function dist_index_es_Wi(A={},u={}){const i=index_es_Ra(A),p=index_es_Ra(u);return index_es_Ui.exports.merge(i,p)}function index_es_Ra(A){var u,i,p,w;const b={};if(!Yr(A))return b;for(const[D,En]of Object.entries(A)){const zt=Zi(D)?[D]:En.chains,pr=En.methods||[],It=En.events||[],Ln=En.rpcMap||{},Fn=vo(D);b[Fn]=Xg(dist_index_es_cr(dist_index_es_cr({},b[Fn]),En),{chains:ge(zt,(u=b[Fn])==null?void 0:u.chains),methods:ge(pr,(i=b[Fn])==null?void 0:i.methods),events:ge(It,(p=b[Fn])==null?void 0:p.events),rpcMap:dist_index_es_cr(dist_index_es_cr({},Ln),(w=b[Fn])==null?void 0:w.rpcMap)})}return b}function Vg(A){return A.includes(":")?A.split(":")[2]:A}function index_es_ba(A){const u={};for(const[i,p]of Object.entries(A)){const w=p.methods||[],b=p.events||[],D=p.accounts||[],En=Zi(i)?[i]:p.chains?p.chains:index_es_Oa(p.accounts);u[i]={chains:En,methods:w,events:b,accounts:D}}return u}function index_es_Fi(A){return typeof A=="number"?A:A.includes("0x")?parseInt(A,16):(A=A.includes(":")?A.split(":")[1]:A,isNaN(Number(A))?A:Number(A))}const index_es_Ta={},universal_provider_dist_index_es_z=A=>index_es_Ta[A],index_es_Mi=(A,u)=>{index_es_Ta[A]=u};class kg{constructor(u){this.name="polkadot",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getAccounts(){const u=this.namespace.accounts;return u?u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2])||[]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{var p;const w=index_es_Ct(i);u[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProvider(u,i){const p=i||index_es_ft(u,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}}class jg{constructor(u){this.name="eip155",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(u){switch(u.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(u);case"eth_chainId":return parseInt(this.getDefaultChain())}return this.namespace.methods.includes(u.request.method)?await this.client.request(u):this.getHttpProvider().request(u.request)}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(parseInt(u),i),this.chainId=parseInt(u),this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}createHttpProvider(u,i){const p=i||index_es_ft(`${this.name}:${u}`,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{var p;const w=parseInt(index_es_Ct(i));u[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),u}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}getHttpProvider(){const u=this.chainId,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}async handleSwitchChain(u){var i,p;let w=u.request.params?(i=u.request.params[0])==null?void 0:i.chainId:"0x0";w=w.startsWith("0x")?w:`0x${w}`;const b=parseInt(w,16);if(this.isChainApproved(b))this.setDefaultChain(`${b}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:u.topic,request:{method:u.request.method,params:[{chainId:w}]},chainId:(p=this.namespace.chains)==null?void 0:p[0]}),this.setDefaultChain(`${b}`);else throw new Error(`Failed to switch to chain 'eip155:${b}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(u){return this.namespace.chains.includes(`${this.name}:${u}`)}}class nv{constructor(u){this.name="solana",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{var p;const w=index_es_Ct(i);u[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProvider(u,i){const p=i||index_es_ft(u,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}}class tv{constructor(u){this.name="cosmos",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{var p;const w=index_es_Ct(i);u[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProvider(u,i){const p=i||index_es_ft(u,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}}class ev{constructor(u){this.name="cip34",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{const p=this.getCardanoRPCUrl(i),w=index_es_Ct(i);u[w]=this.createHttpProvider(w,p)}),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}getCardanoRPCUrl(u){const i=this.namespace.rpcMap;if(i)return i[u]}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProvider(u,i){const p=i||this.getCardanoRPCUrl(u);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}}class rv{constructor(u){this.name="elrond",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{var p;const w=index_es_Ct(i);u[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProvider(u,i){const p=i||index_es_ft(u,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}}class iv{constructor(u){this.name="multiversx",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){this.httpProviders[u]||this.setHttpProvider(u,i),this.chainId=u,this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${u}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}getAccounts(){const u=this.namespace.accounts;return u?[...new Set(u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2]))]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{var p;const w=index_es_Ct(i);u[w]=this.createHttpProvider(w,(p=this.namespace.rpcMap)==null?void 0:p[i])}),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProvider(u,i){const p=i||index_es_ft(u,this.namespace,this.client.core.projectId);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);return new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}}class sv{constructor(u){this.name="near",this.namespace=u.namespace,this.events=universal_provider_dist_index_es_z("events"),this.client=universal_provider_dist_index_es_z("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(u){this.namespace=Object.assign(this.namespace,u)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const u=this.namespace.chains[0];if(!u)throw new Error("ChainId not found");return u.split(":")[1]}request(u){return this.namespace.methods.includes(u.request.method)?this.client.request(u):this.getHttpProvider().request(u.request)}setDefaultChain(u,i){if(this.chainId=u,!this.httpProviders[u]){const p=i||index_es_ft(`${this.name}:${u}`,this.namespace);if(!p)throw new Error(`No RPC url provided for chainId: ${u}`);this.setHttpProvider(u,p)}this.events.emit(index_es_Vn.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const u=this.namespace.accounts;return u?u.filter(i=>i.split(":")[1]===this.chainId.toString()).map(i=>i.split(":")[2])||[]:[]}createHttpProviders(){const u={};return this.namespace.chains.forEach(i=>{var p;u[i]=this.createHttpProvider(i,(p=this.namespace.rpcMap)==null?void 0:p[i])}),u}getHttpProvider(){const u=`${this.name}:${this.chainId}`,i=this.httpProviders[u];if(typeof i>"u")throw new Error(`JSON-RPC provider for ${u} not found`);return i}setHttpProvider(u,i){const p=this.createHttpProvider(u,i);p&&(this.httpProviders[u]=p)}createHttpProvider(u,i){const p=i||index_es_ft(u,this.namespace);return typeof p>"u"?void 0:new dist_index_es_o(new jsonrpc_http_connection_dist_index_es_f(p,universal_provider_dist_index_es_z("disableProviderPing")))}}var uv=Object.defineProperty,av=Object.defineProperties,ov=Object.getOwnPropertyDescriptors,index_es_La=Object.getOwnPropertySymbols,fv=Object.prototype.hasOwnProperty,cv=Object.prototype.propertyIsEnumerable,index_es_Da=(A,u,i)=>u in A?uv(A,u,{enumerable:!0,configurable:!0,writable:!0,value:i}):A[u]=i,dist_index_es_hr=(A,u)=>{for(var i in u||(u={}))fv.call(u,i)&&index_es_Da(A,i,u[i]);if(index_es_La)for(var i of index_es_La(u))cv.call(u,i)&&index_es_Da(A,i,u[i]);return A},index_es_qi=(A,u)=>av(A,ov(u));class dist_index_es_lr{constructor(u){this.events=new (external_events_default()),this.rpcProviders={},this.shouldAbortPairingAttempt=!1,this.maxPairingAttempts=10,this.disableProviderPing=!1,this.providerOpts=u,this.logger=typeof u?.logger<"u"&&typeof u?.logger!="string"?u.logger:pino_default()(dist_index_es_k({level:u?.logger||index_es_xa})),this.disableProviderPing=u?.disableProviderPing||!1}static async init(u){const i=new dist_index_es_lr(u);return await i.initialize(),i}async request(u,i,p){const[w,b]=this.validateChain(i);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(w).request({request:dist_index_es_hr({},u),chainId:`${w}:${b}`,topic:this.session.topic,expiry:p})}sendAsync(u,i,p,w){const b=new Date().getTime();this.request(u,p,w).then(D=>i(null,formatJsonRpcResult(b,D))).catch(D=>i(D,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties}),await this.requestAccounts()}async disconnect(){var u;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(u=this.session)==null?void 0:u.topic,reason:tr("USER_DISCONNECTED")}),await this.cleanup()}async connect(u){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(u),await this.cleanupPendingPairings(),!u.skipPairing)return await this.pair(u.pairingTopic)}async authenticate(u){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(u),await this.cleanupPendingPairings();const{uri:i,response:p}=await this.client.authenticate(u);i&&(this.uri=i,this.events.emit("display_uri",i));const w=await p();if(this.session=w.session,this.session){const b=index_es_ba(this.session.namespaces);this.namespaces=dist_index_es_Wi(this.namespaces,b),this.persist("namespaces",this.namespaces),this.onConnect()}return w}on(u,i){this.events.on(u,i)}once(u,i){this.events.once(u,i)}removeListener(u,i){this.events.removeListener(u,i)}off(u,i){this.events.off(u,i)}get isWalletConnect(){return!0}async pair(u){this.shouldAbortPairingAttempt=!1;let i=0;do{if(this.shouldAbortPairingAttempt)throw new Error("Pairing aborted");if(i>=this.maxPairingAttempts)throw new Error("Max auto pairing attempts reached");const{uri:p,approval:w}=await this.client.connect({pairingTopic:u,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties});p&&(this.uri=p,this.events.emit("display_uri",p)),await w().then(b=>{this.session=b;const D=index_es_ba(b.namespaces);this.namespaces=dist_index_es_Wi(this.namespaces,D),this.persist("namespaces",this.namespaces)}).catch(b=>{if(b.message!==index_es_Ge)throw b;i++})}while(!this.session);return this.onConnect(),this.session}setDefaultChain(u,i){try{if(!this.session)return;const[p,w]=this.validateChain(u);this.getProvider(p).setDefaultChain(w,i)}catch(p){if(!/Please call connect/.test(p.message))throw p}}async cleanupPendingPairings(u={}){this.logger.info("Cleaning up inactive pairings...");const i=this.client.pairing.getAll();if(Er(i)){for(const p of i)u.deletePairings?this.client.core.expirer.set(p.topic,0):await this.client.core.relayer.subscriber.unsubscribe(p.topic);this.logger.info(`Inactive pairings cleared: ${i.length}`)}}abortPairingAttempt(){this.shouldAbortPairingAttempt=!0}async checkStorage(){if(this.namespaces=await this.getFromStore("namespaces"),this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.client.session.length){const u=this.client.session.keys.length-1;this.session=this.client.session.get(this.client.session.keys[u]),this.createProviders()}}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){this.client=this.providerOpts.client||await index_es_oe.init({logger:this.providerOpts.logger||index_es_xa,relayUrl:this.providerOpts.relayUrl||Mg,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name}),this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const u=[...new Set(Object.keys(this.session.namespaces).map(i=>vo(i)))];index_es_Mi("client",this.client),index_es_Mi("events",this.events),index_es_Mi("disableProviderPing",this.disableProviderPing),u.forEach(i=>{if(!this.session)return;const p=Qg(i,this.session),w=index_es_Oa(p),b=dist_index_es_Wi(this.namespaces,this.optionalNamespaces),D=index_es_qi(dist_index_es_hr({},b[i]),{accounts:p,chains:w});switch(i){case"eip155":this.rpcProviders[i]=new jg({namespace:D});break;case"solana":this.rpcProviders[i]=new nv({namespace:D});break;case"cosmos":this.rpcProviders[i]=new tv({namespace:D});break;case"polkadot":this.rpcProviders[i]=new kg({namespace:D});break;case"cip34":this.rpcProviders[i]=new ev({namespace:D});break;case"elrond":this.rpcProviders[i]=new rv({namespace:D});break;case"multiversx":this.rpcProviders[i]=new iv({namespace:D});break;case"near":this.rpcProviders[i]=new sv({namespace:D});break}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",u=>{this.events.emit("session_ping",u)}),this.client.on("session_event",u=>{const{params:i}=u,{event:p}=i;if(p.name==="accountsChanged"){const w=p.data;w&&Er(w)&&this.events.emit("accountsChanged",w.map(Vg))}else if(p.name==="chainChanged"){const w=i.chainId,b=i.event.data,D=vo(w),En=index_es_Fi(w)!==index_es_Fi(b)?`${D}:${index_es_Fi(b)}`:w;this.onChainChanged(En)}else this.events.emit(p.name,p.data);this.events.emit("session_event",u)}),this.client.on("session_update",({topic:u,params:i})=>{var p;const{namespaces:w}=i,b=(p=this.client)==null?void 0:p.session.get(u);this.session=index_es_qi(dist_index_es_hr({},b),{namespaces:w}),this.onSessionUpdate(),this.events.emit("session_update",{topic:u,params:i})}),this.client.on("session_delete",async u=>{await this.cleanup(),this.events.emit("session_delete",u),this.events.emit("disconnect",index_es_qi(dist_index_es_hr({},tr("USER_DISCONNECTED")),{data:u.topic}))}),this.on(index_es_Vn.DEFAULT_CHAIN_CHANGED,u=>{this.onChainChanged(u,!0)})}getProvider(u){if(!this.rpcProviders[u])throw new Error(`Provider not found: ${u}`);return this.rpcProviders[u]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(u=>{var i;this.getProvider(u).updateNamespace((i=this.session)==null?void 0:i.namespaces[u])})}setNamespaces(u){const{namespaces:i,optionalNamespaces:p,sessionProperties:w}=u;i&&Object.keys(i).length&&(this.namespaces=i),p&&Object.keys(p).length&&(this.optionalNamespaces=p),this.sessionProperties=w,this.persist("namespaces",i),this.persist("optionalNamespaces",p)}validateChain(u){const[i,p]=u?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[i,p];if(i&&!Object.keys(this.namespaces||{}).map(D=>vo(D)).includes(i))throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);if(i&&p)return[i,p];const w=vo(Object.keys(this.namespaces)[0]),b=this.rpcProviders[w].getDefaultChain();return[w,b]}async requestAccounts(){const[u]=this.validateChain();return await this.getProvider(u).requestAccounts()}onChainChanged(u,i=!1){if(!this.namespaces)return;const[p,w]=this.validateChain(u);w&&(i||this.getProvider(p).setDefaultChain(w),this.namespaces[p]?this.namespaces[p].defaultChain=w:this.namespaces[`${p}:${w}`]?this.namespaces[`${p}:${w}`].defaultChain=w:this.namespaces[`${p}:${w}`]={defaultChain:w},this.persist("namespaces",this.namespaces),this.events.emit("chainChanged",w))}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.session=void 0,this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,this.persist("namespaces",void 0),this.persist("optionalNamespaces",void 0),this.persist("sessionProperties",void 0),await this.cleanupPendingPairings({deletePairings:!0})}persist(u,i){this.client.core.storage.setItem(`${index_es_Ea}/${u}`,i)}async getFromStore(u){return await this.client.core.storage.getItem(`${index_es_Ea}/${u}`)}}const hv=dist_index_es_lr;
//# sourceMappingURL=index.es.js.map

;// CONCATENATED MODULE: ./node_modules/@walletconnect/ethereum-provider/dist/index.es.js
const dist_index_es_T="wc",ethereum_provider_dist_index_es_S="ethereum_provider",index_es_$=`${dist_index_es_T}@2:${ethereum_provider_dist_index_es_S}:`,ethereum_provider_dist_index_es_j="https://rpc.walletconnect.com/v1/",dist_index_es_u=["eth_sendTransaction","personal_sign"],ethereum_provider_dist_index_es_y=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],ethereum_provider_dist_index_es_g=["chainChanged","accountsChanged"],dist_index_es_M=["chainChanged","accountsChanged","message","disconnect","connect"];var dist_index_es_q=Object.defineProperty,index_es_N=Object.defineProperties,dist_index_es_D=Object.getOwnPropertyDescriptors,ethereum_provider_dist_index_es_O=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,dist_index_es_Q=Object.prototype.propertyIsEnumerable,ethereum_provider_dist_index_es_b=(a,t,s)=>t in a?dist_index_es_q(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,ethereum_provider_dist_index_es_p=(a,t)=>{for(var s in t||(t={}))U.call(t,s)&&ethereum_provider_dist_index_es_b(a,s,t[s]);if(ethereum_provider_dist_index_es_O)for(var s of ethereum_provider_dist_index_es_O(t))dist_index_es_Q.call(t,s)&&ethereum_provider_dist_index_es_b(a,s,t[s]);return a},ethereum_provider_dist_index_es_E=(a,t)=>index_es_N(a,dist_index_es_D(t));function ethereum_provider_dist_index_es_m(a){return Number(a[0].split(":")[1])}function ethereum_provider_dist_index_es_v(a){return`0x${a.toString(16)}`}function ethereum_provider_dist_index_es_L(a){const{chains:t,optionalChains:s,methods:i,optionalMethods:e,events:n,optionalEvents:o,rpcMap:r}=a;if(!Er(t))throw new Error("Invalid chains");const c={chains:t,methods:i||dist_index_es_u,events:n||ethereum_provider_dist_index_es_g,rpcMap:ethereum_provider_dist_index_es_p({},t.length?{[ethereum_provider_dist_index_es_m(t)]:r[ethereum_provider_dist_index_es_m(t)]}:{})},h=n?.filter(l=>!ethereum_provider_dist_index_es_g.includes(l)),d=i?.filter(l=>!dist_index_es_u.includes(l));if(!s&&!o&&!e&&!(h!=null&&h.length)&&!(d!=null&&d.length))return{required:t.length?c:void 0};const w=h?.length&&d?.length||!s,I={chains:[...new Set(w?c.chains.concat(s||[]):s)],methods:[...new Set(c.methods.concat(e!=null&&e.length?e:ethereum_provider_dist_index_es_y))],events:[...new Set(c.events.concat(o!=null&&o.length?o:dist_index_es_M))],rpcMap:r};return{required:t.length?c:void 0,optional:s.length?I:void 0}}class ethereum_provider_dist_index_es_C{constructor(){this.events=new external_events_.EventEmitter,this.namespace="eip155",this.accounts=[],this.chainId=1,this.STORAGE_KEY=index_es_$,this.on=(t,s)=>(this.events.on(t,s),this),this.once=(t,s)=>(this.events.once(t,s),this),this.removeListener=(t,s)=>(this.events.removeListener(t,s),this),this.off=(t,s)=>(this.events.off(t,s),this),this.parseAccount=t=>this.isCompatibleChainId(t)?this.parseAccountId(t).address:t,this.signer={},this.rpc={}}static async init(t){const s=new ethereum_provider_dist_index_es_C;return await s.initialize(t),s}async request(t,s){return await this.signer.request(t,this.formatChainId(this.chainId),s)}sendAsync(t,s,i){this.signer.sendAsync(t,s,this.formatChainId(this.chainId),i)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(t){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(t);const{required:s,optional:i}=ethereum_provider_dist_index_es_L(this.rpc);try{const e=await new Promise(async(o,r)=>{var c;this.rpc.showQrModal&&((c=this.modal)==null||c.subscribeModal(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),r(new Error("Connection request reset. Please try again.")))})),await this.signer.connect(ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({namespaces:ethereum_provider_dist_index_es_p({},s&&{[this.namespace]:s})},i&&{optionalNamespaces:{[this.namespace]:i}}),{pairingTopic:t?.pairingTopic})).then(h=>{o(h)}).catch(h=>{r(new Error(h.message))})});if(!e)return;const n=zo(e.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:n),this.setAccounts(n),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_v(this.chainId)})}catch(e){throw this.signer.logger.error(e),e}finally{this.modal&&this.modal.closeModal()}}async authenticate(t){if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:t?.chains});try{const s=await new Promise(async(e,n)=>{var o;this.rpc.showQrModal&&((o=this.modal)==null||o.subscribeModal(r=>{!r.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),n(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({},t),{chains:this.rpc.chains})).then(r=>{e(r)}).catch(r=>{n(new Error(r.message))})}),i=s.session;if(i){const e=zo(i.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:e),this.setAccounts(e),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_v(this.chainId)})}return s}catch(s){throw this.signer.logger.error(s),s}finally{this.modal&&this.modal.closeModal()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",t=>{const{params:s}=t,{event:i}=s;i.name==="accountsChanged"?(this.accounts=this.parseAccounts(i.data),this.events.emit("accountsChanged",this.accounts)):i.name==="chainChanged"?this.setChainId(this.formatChainId(i.data)):this.events.emit(i.name,i.data),this.events.emit("session_event",t)}),this.signer.on("chainChanged",t=>{const s=parseInt(t);this.chainId=s,this.events.emit("chainChanged",ethereum_provider_dist_index_es_v(this.chainId)),this.persist()}),this.signer.on("session_update",t=>{this.events.emit("session_update",t)}),this.signer.on("session_delete",t=>{this.reset(),this.events.emit("session_delete",t),this.events.emit("disconnect",ethereum_provider_dist_index_es_E(ethereum_provider_dist_index_es_p({},tr("USER_DISCONNECTED")),{data:t.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",t=>{var s,i;this.rpc.showQrModal&&((s=this.modal)==null||s.closeModal(),(i=this.modal)==null||i.openModal({uri:t})),this.events.emit("display_uri",t)})}switchEthereumChain(t){this.request({method:"wallet_switchEthereumChain",params:[{chainId:t.toString(16)}]})}isCompatibleChainId(t){return typeof t=="string"?t.startsWith(`${this.namespace}:`):!1}formatChainId(t){return`${this.namespace}:${t}`}parseChainId(t){return Number(t.split(":")[1])}setChainIds(t){const s=t.filter(i=>this.isCompatibleChainId(i)).map(i=>this.parseChainId(i));s.length&&(this.chainId=s[0],this.events.emit("chainChanged",ethereum_provider_dist_index_es_v(this.chainId)),this.persist())}setChainId(t){if(this.isCompatibleChainId(t)){const s=this.parseChainId(t);this.chainId=s,this.switchEthereumChain(s)}}parseAccountId(t){const[s,i,e]=t.split(":");return{chainId:`${s}:${i}`,address:e}}setAccounts(t){this.accounts=t.filter(s=>this.parseChainId(this.parseAccountId(s).chainId)===this.chainId).map(s=>this.parseAccountId(s).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(t){var s,i;const e=(s=t?.chains)!=null?s:[],n=(i=t?.optionalChains)!=null?i:[],o=e.concat(n);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const r=e.length?t?.methods||dist_index_es_u:[],c=e.length?t?.events||ethereum_provider_dist_index_es_g:[],h=t?.optionalMethods||[],d=t?.optionalEvents||[],w=t?.rpcMap||this.buildRpcMap(o,t.projectId),I=t?.qrModalOptions||void 0;return{chains:e?.map(l=>this.formatChainId(l)),optionalChains:n.map(l=>this.formatChainId(l)),methods:r,events:c,optionalMethods:h,optionalEvents:d,rpcMap:w,showQrModal:!!(t!=null&&t.showQrModal),qrModalOptions:I,projectId:t.projectId,metadata:t.metadata}}buildRpcMap(t,s){const i={};return t.forEach(e=>{i[e]=this.getRpcUrl(e,s)}),i}async initialize(t){if(this.rpc=this.getRpcConfig(t),this.chainId=this.rpc.chains.length?ethereum_provider_dist_index_es_m(this.rpc.chains):ethereum_provider_dist_index_es_m(this.rpc.optionalChains),this.signer=await hv.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:t.disableProviderPing,relayUrl:t.relayUrl,storageOptions:t.storageOptions}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let s;try{const{WalletConnectModal:i}=await __webpack_require__.e(/* import() */ 940).then(__webpack_require__.bind(__webpack_require__, 380940));s=i}catch{throw new Error("To use QR modal, please install @walletconnect/modal package")}if(s)try{this.modal=new s(ethereum_provider_dist_index_es_p({projectId:this.rpc.projectId},this.rpc.qrModalOptions))}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(t){if(!t)return;const{chains:s,optionalChains:i,rpcMap:e}=t;s&&Er(s)&&(this.rpc.chains=s.map(n=>this.formatChainId(n)),s.forEach(n=>{this.rpc.rpcMap[n]=e?.[n]||this.getRpcUrl(n)})),i&&Er(i)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=i?.map(n=>this.formatChainId(n)),i.forEach(n=>{this.rpc.rpcMap[n]=e?.[n]||this.getRpcUrl(n)}))}getRpcUrl(t,s){var i;return((i=this.rpc.rpcMap)==null?void 0:i[t])||`${ethereum_provider_dist_index_es_j}?chainId=eip155:${t}&projectId=${s||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const t=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),s=this.session.namespaces[`${this.namespace}:${t}`]?this.session.namespaces[`${this.namespace}:${t}`]:this.session.namespaces[this.namespace];this.setChainIds(t?[this.formatChainId(t)]:s?.accounts),this.setAccounts(s?.accounts)}catch(t){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(t),await this.disconnect().catch(s=>this.signer.logger.warn(s))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(t){return typeof t=="string"||t instanceof String?[this.parseAccount(t)]:t.map(s=>this.parseAccount(s))}}const ethereum_provider_dist_index_es_z=(/* unused pure expression or super */ null && (ethereum_provider_dist_index_es_C));
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 144484:
/***/ ((module, exports, __webpack_require__) => {

const nodeFetch = __webpack_require__(778540)
const realFetch = nodeFetch.default || nodeFetch

const fetch = function (url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url
  }
  return realFetch.call(this, url, options)
}

fetch.ponyfill = true

module.exports = exports = fetch
exports.fetch = fetch
exports.Headers = nodeFetch.Headers
exports.Request = nodeFetch.Request
exports.Response = nodeFetch.Response

// Needed for TypeScript consumers without esModuleInterop.
exports["default"] = fetch


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
    const version = +req.headers['sec-websocket-version'];
    const extensions = {};

    if (
      req.method !== 'GET' ||
      req.headers.upgrade.toLowerCase() !== 'websocket' ||
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

    if (res.headers.upgrade.toLowerCase() !== 'websocket') {
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

/***/ 735016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function r(m){return m && m.default || m;}
module.exports = global.fetch = global.fetch || (
	typeof process=='undefined' ? r(__webpack_require__(976782)) : (function(url, opts) {
		return r(__webpack_require__(778540))(String(url).replace(/^\/\//g,'https://'), opts);
	})
);


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

/***/ 506187:
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
const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/

// Escape C0 control characters, double quotes, the backslash and every code
// unit with a numeric value in the inclusive range 0xD800 to 0xDFFF.
function strEscape (str) {
  // Some magic numbers that worked out fine while benchmarking with v8 8.0
  if (str.length < 5000 && !strEscapeSequencesRegExp.test(str)) {
    return `"${str}"`
  }
  return JSON.stringify(str)
}

function insertSort (array) {
  // Insertion sort is very efficient for small input sizes but it has a bad
  // worst case complexity. Thus, use native array sort for bigger values.
  if (array.length > 2e2) {
    return array.sort()
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
  const deterministic = getBooleanOption(options, 'deterministic')
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
          keys = insertSort(keys)
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
          keys = insertSort(keys)
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

        if (Array.isArray(value)) {
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
        if (isTypedArrayWithEntries(value)) {
          res += stringifyTypedArray(value, ',', maximumBreadth)
          keys = keys.slice(value.length)
          maximumPropertiesToStringify -= value.length
          separator = ','
        }
        if (deterministic) {
          keys = insertSort(keys)
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

/***/ 976782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})}
//# sourceMappingURL=unfetch.module.js.map


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

/***/ 174452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const warning = __webpack_require__(506187)()
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

/***/ 566853:
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
} = __webpack_require__(566853)
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
const warning = __webpack_require__(174452)
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
const { version } = __webpack_require__(566853)
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