exports.id = 2760;
exports.ids = [2760];
exports.modules = {

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

/***/ 74156:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Blake2B in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

const util = __webpack_require__(120829)

// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA (v, a, b) {
  const o0 = v[a] + v[b]
  let o1 = v[a + 1] + v[b + 1]
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC (v, a, b0, b1) {
  let o0 = v[a] + b0
  if (b0 < 0) {
    o0 += 0x100000000
  }
  let o1 = v[a + 1] + b1
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// Little-endian byte access
function B2B_GET32 (arr, i) {
  return arr[i] ^ (arr[i + 1] << 8) ^ (arr[i + 2] << 16) ^ (arr[i + 3] << 24)
}

// G Mixing function
// The ROTRs are inlined for speed
function B2B_G (a, b, c, d, ix, iy) {
  const x0 = m[ix]
  const x1 = m[ix + 1]
  const y0 = m[iy]
  const y1 = m[iy + 1]

  ADD64AA(v, a, b) // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
  ADD64AC(v, a, x0, x1) // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
  let xor0 = v[d] ^ v[a]
  let xor1 = v[d + 1] ^ v[a + 1]
  v[d] = xor1
  v[d + 1] = xor0

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor0 >>> 24) ^ (xor1 << 8)
  v[b + 1] = (xor1 >>> 24) ^ (xor0 << 8)

  ADD64AA(v, a, b)
  ADD64AC(v, a, y0, y1)

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
  xor0 = v[d] ^ v[a]
  xor1 = v[d + 1] ^ v[a + 1]
  v[d] = (xor0 >>> 16) ^ (xor1 << 16)
  v[d + 1] = (xor1 >>> 16) ^ (xor0 << 16)

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor1 >>> 31) ^ (xor0 << 1)
  v[b + 1] = (xor0 >>> 31) ^ (xor1 << 1)
}

// Initialization Vector
const BLAKE2B_IV32 = new Uint32Array([
  0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b, 0x3c6ef372,
  0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f, 0x2b3e6c1f, 0x9b05688c,
  0xfb41bd6b, 0x1f83d9ab, 0x137e2179, 0x5be0cd19
])

const SIGMA8 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13,
  6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1,
  9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4,
  10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5,
  15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7,
  14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2,
  13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6,
  1, 12, 0, 2, 11, 7, 5, 3
]

// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
const SIGMA82 = new Uint8Array(
  SIGMA8.map(function (x) {
    return x * 2
  })
)

// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
const v = new Uint32Array(32)
const m = new Uint32Array(32)
function blake2bCompress (ctx, last) {
  let i = 0

  // init work variables
  for (i = 0; i < 16; i++) {
    v[i] = ctx.h[i]
    v[i + 16] = BLAKE2B_IV32[i]
  }

  // low 64 bits of offset
  v[24] = v[24] ^ ctx.t
  v[25] = v[25] ^ (ctx.t / 0x100000000)
  // high 64 bits not supported, offset may not be higher than 2**53-1

  // last block flag set ?
  if (last) {
    v[28] = ~v[28]
    v[29] = ~v[29]
  }

  // get little-endian words
  for (i = 0; i < 32; i++) {
    m[i] = B2B_GET32(ctx.b, 4 * i)
  }

  // twelve rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 64)
  for (i = 0; i < 12; i++) {
    // util.debugPrint('   (i=' + (i < 10 ? ' ' : '') + i + ') v[16]', v, 64)
    B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1])
    B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3])
    B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5])
    B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7])
    B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9])
    B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11])
    B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13])
    B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15])
  }
  // util.debugPrint('   (i=12) v[16]', v, 64)

  for (i = 0; i < 16; i++) {
    ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16]
  }
  // util.debugPrint('h[8]', ctx.h, 64)
}

// reusable parameterBlock
const parameterBlock = new Uint8Array([
  0,
  0,
  0,
  0, //  0: outlen, keylen, fanout, depth
  0,
  0,
  0,
  0, //  4: leaf length, sequential mode
  0,
  0,
  0,
  0, //  8: node offset
  0,
  0,
  0,
  0, // 12: node offset
  0,
  0,
  0,
  0, // 16: node depth, inner length, rfu
  0,
  0,
  0,
  0, // 20: rfu
  0,
  0,
  0,
  0, // 24: rfu
  0,
  0,
  0,
  0, // 28: rfu
  0,
  0,
  0,
  0, // 32: salt
  0,
  0,
  0,
  0, // 36: salt
  0,
  0,
  0,
  0, // 40: salt
  0,
  0,
  0,
  0, // 44: salt
  0,
  0,
  0,
  0, // 48: personal
  0,
  0,
  0,
  0, // 52: personal
  0,
  0,
  0,
  0, // 56: personal
  0,
  0,
  0,
  0 // 60: personal
])

// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
// Takes an optinal Uint8Array salt
// Takes an optinal Uint8Array personal
function blake2bInit (outlen, key, salt, personal) {
  if (outlen === 0 || outlen > 64) {
    throw new Error('Illegal output length, expected 0 < length <= 64')
  }
  if (key && key.length > 64) {
    throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64')
  }
  if (salt && salt.length !== 16) {
    throw new Error('Illegal salt, expected Uint8Array with length is 16')
  }
  if (personal && personal.length !== 16) {
    throw new Error('Illegal personal, expected Uint8Array with length is 16')
  }

  // state, 'param block'
  const ctx = {
    b: new Uint8Array(128),
    h: new Uint32Array(16),
    t: 0, // input count
    c: 0, // pointer within buffer
    outlen: outlen // output length in bytes
  }

  // initialize parameterBlock before usage
  parameterBlock.fill(0)
  parameterBlock[0] = outlen
  if (key) parameterBlock[1] = key.length
  parameterBlock[2] = 1 // fanout
  parameterBlock[3] = 1 // depth
  if (salt) parameterBlock.set(salt, 32)
  if (personal) parameterBlock.set(personal, 48)

  // initialize hash state
  for (let i = 0; i < 16; i++) {
    ctx.h[i] = BLAKE2B_IV32[i] ^ B2B_GET32(parameterBlock, i * 4)
  }

  // key the hash, if applicable
  if (key) {
    blake2bUpdate(ctx, key)
    // at the end
    ctx.c = 128
  }

  return ctx
}

// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate (ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 128) {
      // buffer full ?
      ctx.t += ctx.c // add counters
      blake2bCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal (ctx) {
  ctx.t += ctx.c // mark last block offset

  while (ctx.c < 128) {
    // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2bCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  const out = new Uint8Array(ctx.outlen)
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = ctx.h[i >> 2] >> (8 * (i & 3))
  }
  return out
}

// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
// - salt - optional salt bytes, string, Buffer or Uint8Array
// - personal - optional personal bytes, string, Buffer or Uint8Array
function blake2b (input, key, outlen, salt, personal) {
  // preprocess inputs
  outlen = outlen || 64
  input = util.normalizeInput(input)
  if (salt) {
    salt = util.normalizeInput(salt)
  }
  if (personal) {
    personal = util.normalizeInput(personal)
  }

  // do the math
  const ctx = blake2bInit(outlen, key, salt, personal)
  blake2bUpdate(ctx, input)
  return blake2bFinal(ctx)
}

// Computes the BLAKE2B hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
// - salt - optional salt bytes, string, Buffer or Uint8Array
// - personal - optional personal bytes, string, Buffer or Uint8Array
function blake2bHex (input, key, outlen, salt, personal) {
  const output = blake2b(input, key, outlen, salt, personal)
  return util.toHex(output)
}

module.exports = {
  blake2b: blake2b,
  blake2bHex: blake2bHex,
  blake2bInit: blake2bInit,
  blake2bUpdate: blake2bUpdate,
  blake2bFinal: blake2bFinal
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

/***/ 98329:
/***/ ((module) => {

"use strict";


const nullTime = () => ''

const epochTime = () => `,"time":${Date.now()}`

const unixTime = () => `,"time":${Math.round(Date.now() / 1000.0)}`

const isoTime = () => `,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability

module.exports = { nullTime, epochTime, unixTime, isoTime }


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

/***/ 120829:
/***/ ((module) => {

const ERROR_MSG_INPUT = 'Input must be an string, Buffer or Uint8Array'

// For convenience, let people hash a string, not just a Uint8Array
function normalizeInput (input) {
  let ret
  if (input instanceof Uint8Array) {
    ret = input
  } else if (typeof input === 'string') {
    const encoder = new TextEncoder()
    ret = encoder.encode(input)
  } else {
    throw new Error(ERROR_MSG_INPUT)
  }
  return ret
}

// Converts a Uint8Array to a hexadecimal string
// For example, toHex([255, 0, 255]) returns "ff00ff"
function toHex (bytes) {
  return Array.prototype.map
    .call(bytes, function (n) {
      return (n < 16 ? '0' : '') + n.toString(16)
    })
    .join('')
}

// Converts any value in [0...2^32-1] to an 8-character hex string
function uint32ToHex (val) {
  return (0x100000000 + val).toString(16).substring(1)
}

// For debugging: prints out hash state in the same format as the RFC
// sample computation exactly, so that you can diff
function debugPrint (label, arr, size) {
  let msg = '\n' + label + ' = '
  for (let i = 0; i < arr.length; i += 2) {
    if (size === 32) {
      msg += uint32ToHex(arr[i]).toUpperCase()
      msg += ' '
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
    } else if (size === 64) {
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
      msg += uint32ToHex(arr[i]).toUpperCase()
    } else throw new Error('Invalid size ' + size)
    if (i % 6 === 4) {
      msg += '\n' + new Array(label.length + 4).join(' ')
    } else if (i < arr.length - 2) {
      msg += ' '
    }
  }
  console.log(msg)
}

// For performance testing: generates N bytes of input, hashes M times
// Measures and prints MB/second hash performance each time
function testSpeed (hashFn, N, M) {
  let startMs = new Date().getTime()

  const input = new Uint8Array(N)
  for (let i = 0; i < N; i++) {
    input[i] = i % 256
  }
  const genMs = new Date().getTime()
  console.log('Generated random input in ' + (genMs - startMs) + 'ms')
  startMs = genMs

  for (let i = 0; i < M; i++) {
    const hashHex = hashFn(input)
    const hashMs = new Date().getTime()
    const ms = hashMs - startMs
    startMs = hashMs
    console.log('Hashed in ' + ms + 'ms: ' + hashHex.substring(0, 20) + '...')
    console.log(
      Math.round((N / (1 << 20) / (ms / 1000)) * 100) / 100 + ' MB PER SECOND'
    )
  }
}

module.exports = {
  normalizeInput: normalizeInput,
  toHex: toHex,
  debugPrint: debugPrint,
  testSpeed: testSpeed
}


/***/ }),

/***/ 125146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);


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

/***/ 148450:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ src_esm)
});

;// ./node_modules/bs58/node_modules/base-x/src/esm/index.js
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  const BASE_MAP = new Uint8Array(256)
  for (let j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (let i = 0; i < ALPHABET.length; i++) {
    const x = ALPHABET.charAt(i)
    const xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  const BASE = ALPHABET.length
  const LEADER = ALPHABET.charAt(0)
  const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    // eslint-disable-next-line no-empty
    if (source instanceof Uint8Array) { } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source)
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
    // Skip & count leading zeroes.
    let zeroes = 0
    let length = 0
    let pbegin = 0
    const pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
    // Allocate enough space in big-endian base58 representation.
    const size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    const b58 = new Uint8Array(size)
    // Process the bytes.
    while (pbegin !== pend) {
      let carry = source[pbegin]
      // Apply "b58 = b58 * 256 + ch".
      let i = 0
      for (let it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
    // Skip leading zeroes in base58 result.
    let it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
    // Translate the result into a string.
    let str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    let psz = 0
    // Skip and count leading '1's.
    let zeroes = 0
    let length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
    // Allocate enough space in big-endian base256 representation.
    const size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    const b256 = new Uint8Array(size)
    // Process the characters.
    while (psz < source.length) {
      // Find code of next character
      const charCode = source.charCodeAt(psz)
      // Base map can not be indexed using char code
      if (charCode > 255) { return }
      // Decode character
      let carry = BASE_MAP[charCode]
      // Invalid character
      if (carry === 255) { return }
      let i = 0
      for (let it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
    // Skip leading zeroes in b256.
    let it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    const vch = new Uint8Array(zeroes + (size - it4))
    let j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    const buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode,
    decodeUnsafe,
    decode
  }
}
/* harmony default export */ const esm = (base);

;// ./node_modules/bs58/src/esm/index.js

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
/* harmony default export */ const src_esm = (esm(ALPHABET));


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

/***/ 174452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const warning = __webpack_require__(506187)()
module.exports = warning

const warnName = 'PinoWarning'

warning.create(warnName, 'PINODEP008', 'prettyPrint is deprecated, look at https://github.com/pinojs/pino-pretty for alternatives.')

warning.create(warnName, 'PINODEP009', 'The use of pino.final is discouraged in Node.js v14+ and not required. It will be removed in the next major version')


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

/***/ 204556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ IEvents)
/* harmony export */ });
class IEvents {
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 213554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ safeJsonStringify),
/* harmony export */   j: () => (/* binding */ safeJsonParse)
/* harmony export */ });
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

/***/ 236647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ f),
/* harmony export */   V: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24434);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144484);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(213554);
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(739031);
var P=Object.defineProperty,w=Object.defineProperties,E=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,l=(r,t,e)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))L.call(t,e)&&l(r,e,t[e]);if(c)for(var e of c(t))O.call(t,e)&&l(r,e,t[e]);return r},v=(r,t)=>w(r,E(t));const j={Accept:"application/json","Content-Type":"application/json"},T="POST",d={headers:j,method:T},g=10;class f{constructor(t,e=!1){if(this.url=t,this.disableProviderPing=e,this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.isAvailable=!1,this.registering=!1,!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t,this.disableProviderPing=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t){this.isAvailable||await this.register();try{const e=(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__/* .safeJsonStringify */ .h)(t),s=await(await cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(this.url,v(p({},d),{body:e}))).json();this.onPayload({data:s})}catch(e){this.onError(t.id,e)}}async register(t=this.url){if(!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering){const e=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=e||this.events.listenerCount("open")>=e)&&this.events.setMaxListeners(e+1),new Promise((s,i)=>{this.events.once("register_error",n=>{this.resetMaxListeners(),i(n)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return i(new Error("HTTP connection is missing or invalid"));s()})})}this.url=t,this.registering=!0;try{if(!this.disableProviderPing){const e=(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__/* .safeJsonStringify */ .h)({id:1,jsonrpc:"2.0",method:"test",params:[]});await cross_fetch__WEBPACK_IMPORTED_MODULE_1___default()(t,v(p({},d),{body:e}))}this.onOpen()}catch(e){const s=this.parseError(e);throw this.events.emit("register_error",s),this.onClose(),s}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if(typeof t.data>"u")return;const e=typeof t.data=="string"?(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_3__/* .safeJsonParse */ .j)(t.data):t.data;this.events.emit("payload",e)}onError(t,e){const s=this.parseError(e),i=s.message||s.toString(),n=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError)(t,i);this.events.emit("payload",n)}parseError(t,e=this.url){return (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_2__.parseConnectionError)(t,e,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>g&&this.events.setMaxListeners(g)}}
//# sourceMappingURL=index.es.js.map


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

/***/ 248468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o0: () => (/* binding */ detect)
/* harmony export */ });
/* unused harmony exports BrowserInfo, NodeInfo, SearchBotDeviceInfo, BotInfo, ReactNativeInfo, browserName, parseUserAgent, detectOS, getNodeVersion */
/* provided dependency */ var process = __webpack_require__(365606);
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
  let isValidUTF8 = __webpack_require__(53148);

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

/***/ 316761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);


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

/***/ 338236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cq: () => (/* binding */ sn),
/* harmony export */   FA: () => (/* binding */ Qo),
/* harmony export */   TZ: () => (/* binding */ Po),
/* harmony export */   UF: () => (/* binding */ Qe)
/* harmony export */ });
/* unused harmony exports DATA_ENCODING, DID_DELIMITER, DID_METHOD, DID_PREFIX, JSON_ENCODING, JWT_DELIMITER, JWT_ENCODING, JWT_IRIDIUM_ALG, JWT_IRIDIUM_TYP, KEY_PAIR_SEED_LENGTH, MULTICODEC_ED25519_BASE, MULTICODEC_ED25519_ENCODING, MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_LENGTH, decodeData, decodeIss, decodeJSON, decodeSig, encodeData, encodeJSON, encodeJWT, encodeSig, verifyJWT */
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388900);
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_time__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(213554);
function En(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function fe(t,...e){if(!En(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function De(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function gn(t,e){fe(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}const it=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _t=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);function yn(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function de(t){return typeof t=="string"&&(t=yn(t)),fe(t),t}class xn{clone(){return this._cloneInto()}}function Bn(t){const e=r=>t().update(de(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function he(t=32){if(it&&typeof it.getRandomValues=="function")return it.getRandomValues(new Uint8Array(t));if(it&&typeof it.randomBytes=="function")return it.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}function Cn(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const o=BigInt(32),s=BigInt(4294967295),a=Number(n>>o&s),u=Number(n&s),i=r?4:0,D=r?0:4;t.setUint32(e+i,a,r),t.setUint32(e+D,u,r)}class An extends xn{constructor(e,n,r,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=_t(this.buffer)}update(e){De(this);const{view:n,buffer:r,blockLen:o}=this;e=de(e);const s=e.length;for(let a=0;a<s;){const u=Math.min(o-this.pos,s-a);if(u===o){const i=_t(e);for(;o<=s-a;a+=o)this.process(i,a);continue}r.set(e.subarray(a,a+u),this.pos),this.pos+=u,a+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){De(this),gn(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:a}=this;n[a++]=128,this.buffer.subarray(a).fill(0),this.padOffset>o-a&&(this.process(r,0),a=0);for(let l=a;l<o;l++)n[l]=0;Cn(r,o-8,BigInt(this.length*8),s),this.process(r,0);const u=_t(e),i=this.outputLen;if(i%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const D=i/4,c=this.get();if(D>c.length)throw new Error("_sha2: outputLen bigger than state");for(let l=0;l<D;l++)u.setUint32(4*l,c[l],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:a,pos:u}=this;return e.length=o,e.pos=u,e.finished=s,e.destroyed=a,o%n&&e.buffer.set(r),e}}const wt=BigInt(2**32-1),St=BigInt(32);function le(t,e=!1){return e?{h:Number(t&wt),l:Number(t>>St&wt)}:{h:Number(t>>St&wt)|0,l:Number(t&wt)|0}}function mn(t,e=!1){let n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:s,l:a}=le(t[o],e);[n[o],r[o]]=[s,a]}return[n,r]}const _n=(t,e)=>BigInt(t>>>0)<<St|BigInt(e>>>0),Sn=(t,e,n)=>t>>>n,vn=(t,e,n)=>t<<32-n|e>>>n,In=(t,e,n)=>t>>>n|e<<32-n,Un=(t,e,n)=>t<<32-n|e>>>n,Tn=(t,e,n)=>t<<64-n|e>>>n-32,Fn=(t,e,n)=>t>>>n-32|e<<64-n,Nn=(t,e)=>e,Ln=(t,e)=>t,On=(t,e,n)=>t<<n|e>>>32-n,Hn=(t,e,n)=>e<<n|t>>>32-n,zn=(t,e,n)=>e<<n-32|t>>>64-n,Mn=(t,e,n)=>t<<n-32|e>>>64-n;function qn(t,e,n,r){const o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const $n=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),kn=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Rn=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),jn=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,Zn=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Gn=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,x={fromBig:le,split:mn,toBig:_n,shrSH:Sn,shrSL:vn,rotrSH:In,rotrSL:Un,rotrBH:Tn,rotrBL:Fn,rotr32H:Nn,rotr32L:Ln,rotlSH:On,rotlSL:Hn,rotlBH:zn,rotlBL:Mn,add:qn,add3L:$n,add3H:kn,add4L:Rn,add4H:jn,add5H:Gn,add5L:Zn},[Vn,Yn]=(()=>x.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))))(),P=new Uint32Array(80),Q=new Uint32Array(80);class Jn extends An{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:a,Dh:u,Dl:i,Eh:D,El:c,Fh:l,Fl:p,Gh:w,Gl:h,Hh:g,Hl:S}=this;return[e,n,r,o,s,a,u,i,D,c,l,p,w,h,g,S]}set(e,n,r,o,s,a,u,i,D,c,l,p,w,h,g,S){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=a|0,this.Dh=u|0,this.Dl=i|0,this.Eh=D|0,this.El=c|0,this.Fh=l|0,this.Fl=p|0,this.Gh=w|0,this.Gl=h|0,this.Hh=g|0,this.Hl=S|0}process(e,n){for(let d=0;d<16;d++,n+=4)P[d]=e.getUint32(n),Q[d]=e.getUint32(n+=4);for(let d=16;d<80;d++){const m=P[d-15]|0,F=Q[d-15]|0,q=x.rotrSH(m,F,1)^x.rotrSH(m,F,8)^x.shrSH(m,F,7),z=x.rotrSL(m,F,1)^x.rotrSL(m,F,8)^x.shrSL(m,F,7),I=P[d-2]|0,O=Q[d-2]|0,ot=x.rotrSH(I,O,19)^x.rotrBH(I,O,61)^x.shrSH(I,O,6),tt=x.rotrSL(I,O,19)^x.rotrBL(I,O,61)^x.shrSL(I,O,6),st=x.add4L(z,tt,Q[d-7],Q[d-16]),at=x.add4H(st,q,ot,P[d-7],P[d-16]);P[d]=at|0,Q[d]=st|0}let{Ah:r,Al:o,Bh:s,Bl:a,Ch:u,Cl:i,Dh:D,Dl:c,Eh:l,El:p,Fh:w,Fl:h,Gh:g,Gl:S,Hh:v,Hl:L}=this;for(let d=0;d<80;d++){const m=x.rotrSH(l,p,14)^x.rotrSH(l,p,18)^x.rotrBH(l,p,41),F=x.rotrSL(l,p,14)^x.rotrSL(l,p,18)^x.rotrBL(l,p,41),q=l&w^~l&g,z=p&h^~p&S,I=x.add5L(L,F,z,Yn[d],Q[d]),O=x.add5H(I,v,m,q,Vn[d],P[d]),ot=I|0,tt=x.rotrSH(r,o,28)^x.rotrBH(r,o,34)^x.rotrBH(r,o,39),st=x.rotrSL(r,o,28)^x.rotrBL(r,o,34)^x.rotrBL(r,o,39),at=r&s^r&u^s&u,Ct=o&a^o&i^a&i;v=g|0,L=S|0,g=w|0,S=h|0,w=l|0,h=p|0,{h:l,l:p}=x.add(D|0,c|0,O|0,ot|0),D=u|0,c=i|0,u=s|0,i=a|0,s=r|0,a=o|0;const At=x.add3L(ot,st,Ct);r=x.add3H(At,O,tt,at),o=At|0}({h:r,l:o}=x.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:a}=x.add(this.Bh|0,this.Bl|0,s|0,a|0),{h:u,l:i}=x.add(this.Ch|0,this.Cl|0,u|0,i|0),{h:D,l:c}=x.add(this.Dh|0,this.Dl|0,D|0,c|0),{h:l,l:p}=x.add(this.Eh|0,this.El|0,l|0,p|0),{h:w,l:h}=x.add(this.Fh|0,this.Fl|0,w|0,h|0),{h:g,l:S}=x.add(this.Gh|0,this.Gl|0,g|0,S|0),{h:v,l:L}=x.add(this.Hh|0,this.Hl|0,v|0,L|0),this.set(r,o,s,a,u,i,D,c,l,p,w,h,g,S,v,L)}roundClean(){P.fill(0),Q.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const Kn=Bn(()=>new Jn);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vt=BigInt(0),be=BigInt(1),Wn=BigInt(2);function It(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Ut(t){if(!It(t))throw new Error("Uint8Array expected")}function Tt(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const Xn=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Ft(t){Ut(t);let e="";for(let n=0;n<t.length;n++)e+=Xn[t[n]];return e}function pe(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?vt:BigInt("0x"+t)}const K={_0:48,_9:57,A:65,F:70,a:97,f:102};function we(t){if(t>=K._0&&t<=K._9)return t-K._0;if(t>=K.A&&t<=K.F)return t-(K.A-10);if(t>=K.a&&t<=K.f)return t-(K.a-10)}function Ee(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(n);for(let o=0,s=0;o<n;o++,s+=2){const a=we(t.charCodeAt(s)),u=we(t.charCodeAt(s+1));if(a===void 0||u===void 0){const i=t[s]+t[s+1];throw new Error('hex string expected, got non-hex character "'+i+'" at index '+s)}r[o]=a*16+u}return r}function Pn(t){return pe(Ft(t))}function Et(t){return Ut(t),pe(Ft(Uint8Array.from(t).reverse()))}function ge(t,e){return Ee(t.toString(16).padStart(e*2,"0"))}function Nt(t,e){return ge(t,e).reverse()}function W(t,e,n){let r;if(typeof e=="string")try{r=Ee(e)}catch(s){throw new Error(t+" must be hex string or Uint8Array, cause: "+s)}else if(It(e))r=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const o=r.length;if(typeof n=="number"&&o!==n)throw new Error(t+" of length "+n+" expected, got "+o);return r}function ye(...t){let e=0;for(let r=0;r<t.length;r++){const o=t[r];Ut(o),e+=o.length}const n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){const s=t[r];n.set(s,o),o+=s.length}return n}const Lt=t=>typeof t=="bigint"&&vt<=t;function Qn(t,e,n){return Lt(t)&&Lt(e)&&Lt(n)&&e<=t&&t<n}function ft(t,e,n,r){if(!Qn(e,n,r))throw new Error("expected valid "+t+": "+n+" <= n < "+r+", got "+e)}function tr(t){let e;for(e=0;t>vt;t>>=be,e+=1);return e}const er=t=>(Wn<<BigInt(t-1))-be,nr={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||It(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function Ot(t,e,n={}){const r=(o,s,a)=>{const u=nr[s];if(typeof u!="function")throw new Error("invalid validator function");const i=t[o];if(!(a&&i===void 0)&&!u(i,t))throw new Error("param "+String(o)+" is invalid. Expected "+s+", got "+i)};for(const[o,s]of Object.entries(e))r(o,s,!1);for(const[o,s]of Object.entries(n))r(o,s,!0);return t}function xe(t){const e=new WeakMap;return(n,...r)=>{const o=e.get(n);if(o!==void 0)return o;const s=t(n,...r);return e.set(n,s),s}}const M=BigInt(0),N=BigInt(1),nt=BigInt(2),rr=BigInt(3),Ht=BigInt(4),Be=BigInt(5),Ce=BigInt(8);function H(t,e){const n=t%e;return n>=M?n:e+n}function or(t,e,n){if(e<M)throw new Error("invalid exponent, negatives unsupported");if(n<=M)throw new Error("invalid modulus");if(n===N)return M;let r=N;for(;e>M;)e&N&&(r=r*t%n),t=t*t%n,e>>=N;return r}function J(t,e,n){let r=t;for(;e-- >M;)r*=r,r%=n;return r}function Ae(t,e){if(t===M)throw new Error("invert: expected non-zero number");if(e<=M)throw new Error("invert: expected positive modulus, got "+e);let n=H(t,e),r=e,o=M,s=N;for(;n!==M;){const u=r/n,i=r%n,D=o-s*u;r=n,n=i,o=s,s=D}if(r!==N)throw new Error("invert: does not exist");return H(o,e)}function sr(t){const e=(t-N)/nt;let n,r,o;for(n=t-N,r=0;n%nt===M;n/=nt,r++);for(o=nt;o<t&&or(o,e,t)!==t-N;o++)if(o>1e3)throw new Error("Cannot find square root: likely non-prime P");if(r===1){const a=(t+N)/Ht;return function(i,D){const c=i.pow(D,a);if(!i.eql(i.sqr(c),D))throw new Error("Cannot find square root");return c}}const s=(n+N)/nt;return function(u,i){if(u.pow(i,e)===u.neg(u.ONE))throw new Error("Cannot find square root");let D=r,c=u.pow(u.mul(u.ONE,o),n),l=u.pow(i,s),p=u.pow(i,n);for(;!u.eql(p,u.ONE);){if(u.eql(p,u.ZERO))return u.ZERO;let w=1;for(let g=u.sqr(p);w<D&&!u.eql(g,u.ONE);w++)g=u.sqr(g);const h=u.pow(c,N<<BigInt(D-w-1));c=u.sqr(h),l=u.mul(l,h),p=u.mul(p,c),D=w}return l}}function ir(t){if(t%Ht===rr){const e=(t+N)/Ht;return function(r,o){const s=r.pow(o,e);if(!r.eql(r.sqr(s),o))throw new Error("Cannot find square root");return s}}if(t%Ce===Be){const e=(t-Be)/Ce;return function(r,o){const s=r.mul(o,nt),a=r.pow(s,e),u=r.mul(o,a),i=r.mul(r.mul(u,nt),a),D=r.mul(u,r.sub(i,r.ONE));if(!r.eql(r.sqr(D),o))throw new Error("Cannot find square root");return D}}return sr(t)}const ur=(t,e)=>(H(t,e)&N)===N,cr=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ar(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=cr.reduce((r,o)=>(r[o]="function",r),e);return Ot(t,n)}function fr(t,e,n){if(n<M)throw new Error("invalid exponent, negatives unsupported");if(n===M)return t.ONE;if(n===N)return e;let r=t.ONE,o=e;for(;n>M;)n&N&&(r=t.mul(r,o)),o=t.sqr(o),n>>=N;return r}function Dr(t,e){const n=new Array(e.length),r=e.reduce((s,a,u)=>t.is0(a)?s:(n[u]=s,t.mul(s,a)),t.ONE),o=t.inv(r);return e.reduceRight((s,a,u)=>t.is0(a)?s:(n[u]=t.mul(s,n[u]),t.mul(s,a)),o),n}function me(t,e){const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function _e(t,e,n=!1,r={}){if(t<=M)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:o,nByteLength:s}=me(t,e);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let a;const u=Object.freeze({ORDER:t,isLE:n,BITS:o,BYTES:s,MASK:er(o),ZERO:M,ONE:N,create:i=>H(i,t),isValid:i=>{if(typeof i!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof i);return M<=i&&i<t},is0:i=>i===M,isOdd:i=>(i&N)===N,neg:i=>H(-i,t),eql:(i,D)=>i===D,sqr:i=>H(i*i,t),add:(i,D)=>H(i+D,t),sub:(i,D)=>H(i-D,t),mul:(i,D)=>H(i*D,t),pow:(i,D)=>fr(u,i,D),div:(i,D)=>H(i*Ae(D,t),t),sqrN:i=>i*i,addN:(i,D)=>i+D,subN:(i,D)=>i-D,mulN:(i,D)=>i*D,inv:i=>Ae(i,t),sqrt:r.sqrt||(i=>(a||(a=ir(t)),a(u,i))),invertBatch:i=>Dr(u,i),cmov:(i,D,c)=>c?D:i,toBytes:i=>n?Nt(i,s):ge(i,s),fromBytes:i=>{if(i.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+i.length);return n?Et(i):Pn(i)}});return Object.freeze(u)}const Se=BigInt(0),gt=BigInt(1);function zt(t,e){const n=e.negate();return t?n:e}function ve(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Mt(t,e){ve(t,e);const n=Math.ceil(e/t)+1,r=2**(t-1);return{windows:n,windowSize:r}}function dr(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,r)=>{if(!(n instanceof e))throw new Error("invalid point at index "+r)})}function hr(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,r)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+r)})}const qt=new WeakMap,Ie=new WeakMap;function $t(t){return Ie.get(t)||1}function lr(t,e){return{constTimeNegate:zt,hasPrecomputes(n){return $t(n)!==1},unsafeLadder(n,r,o=t.ZERO){let s=n;for(;r>Se;)r&gt&&(o=o.add(s)),s=s.double(),r>>=gt;return o},precomputeWindow(n,r){const{windows:o,windowSize:s}=Mt(r,e),a=[];let u=n,i=u;for(let D=0;D<o;D++){i=u,a.push(i);for(let c=1;c<s;c++)i=i.add(u),a.push(i);u=i.double()}return a},wNAF(n,r,o){const{windows:s,windowSize:a}=Mt(n,e);let u=t.ZERO,i=t.BASE;const D=BigInt(2**n-1),c=2**n,l=BigInt(n);for(let p=0;p<s;p++){const w=p*a;let h=Number(o&D);o>>=l,h>a&&(h-=c,o+=gt);const g=w,S=w+Math.abs(h)-1,v=p%2!==0,L=h<0;h===0?i=i.add(zt(v,r[g])):u=u.add(zt(L,r[S]))}return{p:u,f:i}},wNAFUnsafe(n,r,o,s=t.ZERO){const{windows:a,windowSize:u}=Mt(n,e),i=BigInt(2**n-1),D=2**n,c=BigInt(n);for(let l=0;l<a;l++){const p=l*u;if(o===Se)break;let w=Number(o&i);if(o>>=c,w>u&&(w-=D,o+=gt),w===0)continue;let h=r[p+Math.abs(w)-1];w<0&&(h=h.negate()),s=s.add(h)}return s},getPrecomputes(n,r,o){let s=qt.get(r);return s||(s=this.precomputeWindow(r,n),n!==1&&qt.set(r,o(s))),s},wNAFCached(n,r,o){const s=$t(n);return this.wNAF(s,this.getPrecomputes(s,n,o),r)},wNAFCachedUnsafe(n,r,o,s){const a=$t(n);return a===1?this.unsafeLadder(n,r,s):this.wNAFUnsafe(a,this.getPrecomputes(a,n,o),r,s)},setWindowSize(n,r){ve(r,e),Ie.set(n,r),qt.delete(n)}}}function br(t,e,n,r){if(dr(n,t),hr(r,e),n.length!==r.length)throw new Error("arrays of points and scalars must have equal length");const o=t.ZERO,s=tr(BigInt(n.length)),a=s>12?s-3:s>4?s-2:s?2:1,u=(1<<a)-1,i=new Array(u+1).fill(o),D=Math.floor((e.BITS-1)/a)*a;let c=o;for(let l=D;l>=0;l-=a){i.fill(o);for(let w=0;w<r.length;w++){const h=r[w],g=Number(h>>BigInt(l)&BigInt(u));i[g]=i[g].add(n[w])}let p=o;for(let w=i.length-1,h=o;w>0;w--)h=h.add(i[w]),p=p.add(h);if(c=c.add(p),l!==0)for(let w=0;w<a;w++)c=c.double()}return c}function pr(t){return ar(t.Fp),Ot(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...me(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}const G=BigInt(0),j=BigInt(1),yt=BigInt(2),wr=BigInt(8),Er={zip215:!0};function gr(t){const e=pr(t);return Ot(t,{hash:"function",a:"bigint",d:"bigint",randomBytes:"function"},{adjustScalarBytes:"function",domain:"function",uvRatio:"function",mapToCurve:"function"}),Object.freeze({...e})}function yr(t){const e=gr(t),{Fp:n,n:r,prehash:o,hash:s,randomBytes:a,nByteLength:u,h:i}=e,D=yt<<BigInt(u*8)-j,c=n.create,l=_e(e.n,e.nBitLength),p=e.uvRatio||((y,f)=>{try{return{isValid:!0,value:n.sqrt(y*n.inv(f))}}catch{return{isValid:!1,value:G}}}),w=e.adjustScalarBytes||(y=>y),h=e.domain||((y,f,b)=>{if(Tt("phflag",b),f.length||b)throw new Error("Contexts/pre-hash are not supported");return y});function g(y,f){ft("coordinate "+y,f,G,D)}function S(y){if(!(y instanceof d))throw new Error("ExtendedPoint expected")}const v=xe((y,f)=>{const{ex:b,ey:E,ez:B}=y,C=y.is0();f==null&&(f=C?wr:n.inv(B));const A=c(b*f),U=c(E*f),_=c(B*f);if(C)return{x:G,y:j};if(_!==j)throw new Error("invZ was invalid");return{x:A,y:U}}),L=xe(y=>{const{a:f,d:b}=e;if(y.is0())throw new Error("bad point: ZERO");const{ex:E,ey:B,ez:C,et:A}=y,U=c(E*E),_=c(B*B),T=c(C*C),$=c(T*T),R=c(U*f),V=c(T*c(R+_)),Y=c($+c(b*c(U*_)));if(V!==Y)throw new Error("bad point: equation left != right (1)");const Z=c(E*B),X=c(C*A);if(Z!==X)throw new Error("bad point: equation left != right (2)");return!0});class d{constructor(f,b,E,B){this.ex=f,this.ey=b,this.ez=E,this.et=B,g("x",f),g("y",b),g("z",E),g("t",B),Object.freeze(this)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static fromAffine(f){if(f instanceof d)throw new Error("extended point not allowed");const{x:b,y:E}=f||{};return g("x",b),g("y",E),new d(b,E,j,c(b*E))}static normalizeZ(f){const b=n.invertBatch(f.map(E=>E.ez));return f.map((E,B)=>E.toAffine(b[B])).map(d.fromAffine)}static msm(f,b){return br(d,l,f,b)}_setWindowSize(f){q.setWindowSize(this,f)}assertValidity(){L(this)}equals(f){S(f);const{ex:b,ey:E,ez:B}=this,{ex:C,ey:A,ez:U}=f,_=c(b*U),T=c(C*B),$=c(E*U),R=c(A*B);return _===T&&$===R}is0(){return this.equals(d.ZERO)}negate(){return new d(c(-this.ex),this.ey,this.ez,c(-this.et))}double(){const{a:f}=e,{ex:b,ey:E,ez:B}=this,C=c(b*b),A=c(E*E),U=c(yt*c(B*B)),_=c(f*C),T=b+E,$=c(c(T*T)-C-A),R=_+A,V=R-U,Y=_-A,Z=c($*V),X=c(R*Y),et=c($*Y),pt=c(V*R);return new d(Z,X,pt,et)}add(f){S(f);const{a:b,d:E}=e,{ex:B,ey:C,ez:A,et:U}=this,{ex:_,ey:T,ez:$,et:R}=f;if(b===BigInt(-1)){const re=c((C-B)*(T+_)),oe=c((C+B)*(T-_)),mt=c(oe-re);if(mt===G)return this.double();const se=c(A*yt*R),ie=c(U*yt*$),ue=ie+se,ce=oe+re,ae=ie-se,Dn=c(ue*mt),dn=c(ce*ae),hn=c(ue*ae),ln=c(mt*ce);return new d(Dn,dn,ln,hn)}const V=c(B*_),Y=c(C*T),Z=c(U*E*R),X=c(A*$),et=c((B+C)*(_+T)-V-Y),pt=X-Z,ee=X+Z,ne=c(Y-b*V),un=c(et*pt),cn=c(ee*ne),an=c(et*ne),fn=c(pt*ee);return new d(un,cn,fn,an)}subtract(f){return this.add(f.negate())}wNAF(f){return q.wNAFCached(this,f,d.normalizeZ)}multiply(f){const b=f;ft("scalar",b,j,r);const{p:E,f:B}=this.wNAF(b);return d.normalizeZ([E,B])[0]}multiplyUnsafe(f,b=d.ZERO){const E=f;return ft("scalar",E,G,r),E===G?F:this.is0()||E===j?this:q.wNAFCachedUnsafe(this,E,d.normalizeZ,b)}isSmallOrder(){return this.multiplyUnsafe(i).is0()}isTorsionFree(){return q.unsafeLadder(this,r).is0()}toAffine(f){return v(this,f)}clearCofactor(){const{h:f}=e;return f===j?this:this.multiplyUnsafe(f)}static fromHex(f,b=!1){const{d:E,a:B}=e,C=n.BYTES;f=W("pointHex",f,C),Tt("zip215",b);const A=f.slice(),U=f[C-1];A[C-1]=U&-129;const _=Et(A),T=b?D:n.ORDER;ft("pointHex.y",_,G,T);const $=c(_*_),R=c($-j),V=c(E*$-B);let{isValid:Y,value:Z}=p(R,V);if(!Y)throw new Error("Point.fromHex: invalid y coordinate");const X=(Z&j)===j,et=(U&128)!==0;if(!b&&Z===G&&et)throw new Error("Point.fromHex: x=0 and x_0=1");return et!==X&&(Z=c(-Z)),d.fromAffine({x:Z,y:_})}static fromPrivateKey(f){return O(f).point}toRawBytes(){const{x:f,y:b}=this.toAffine(),E=Nt(b,n.BYTES);return E[E.length-1]|=f&j?128:0,E}toHex(){return Ft(this.toRawBytes())}}d.BASE=new d(e.Gx,e.Gy,j,c(e.Gx*e.Gy)),d.ZERO=new d(G,j,j,G);const{BASE:m,ZERO:F}=d,q=lr(d,u*8);function z(y){return H(y,r)}function I(y){return z(Et(y))}function O(y){const f=n.BYTES;y=W("private key",y,f);const b=W("hashed private key",s(y),2*f),E=w(b.slice(0,f)),B=b.slice(f,2*f),C=I(E),A=m.multiply(C),U=A.toRawBytes();return{head:E,prefix:B,scalar:C,point:A,pointBytes:U}}function ot(y){return O(y).pointBytes}function tt(y=new Uint8Array,...f){const b=ye(...f);return I(s(h(b,W("context",y),!!o)))}function st(y,f,b={}){y=W("message",y),o&&(y=o(y));const{prefix:E,scalar:B,pointBytes:C}=O(f),A=tt(b.context,E,y),U=m.multiply(A).toRawBytes(),_=tt(b.context,U,C,y),T=z(A+_*B);ft("signature.s",T,G,r);const $=ye(U,Nt(T,n.BYTES));return W("result",$,n.BYTES*2)}const at=Er;function Ct(y,f,b,E=at){const{context:B,zip215:C}=E,A=n.BYTES;y=W("signature",y,2*A),f=W("message",f),b=W("publicKey",b,A),C!==void 0&&Tt("zip215",C),o&&(f=o(f));const U=Et(y.slice(A,2*A));let _,T,$;try{_=d.fromHex(b,C),T=d.fromHex(y.slice(0,A),C),$=m.multiplyUnsafe(U)}catch{return!1}if(!C&&_.isSmallOrder())return!1;const R=tt(B,T.toRawBytes(),_.toRawBytes(),f);return T.add(_.multiplyUnsafe(R)).subtract($).clearCofactor().equals(d.ZERO)}return m._setWindowSize(8),{CURVE:e,getPublicKey:ot,sign:st,verify:Ct,ExtendedPoint:d,utils:{getExtendedPublicKey:O,randomPrivateKey:()=>a(n.BYTES),precompute(y=8,f=d.BASE){return f._setWindowSize(y),f.multiply(BigInt(3)),f}}}}BigInt(0),BigInt(1);const kt=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),Ue=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");BigInt(0);const xr=BigInt(1),Te=BigInt(2);BigInt(3);const Br=BigInt(5),Cr=BigInt(8);function Ar(t){const e=BigInt(10),n=BigInt(20),r=BigInt(40),o=BigInt(80),s=kt,u=t*t%s*t%s,i=J(u,Te,s)*u%s,D=J(i,xr,s)*t%s,c=J(D,Br,s)*D%s,l=J(c,e,s)*c%s,p=J(l,n,s)*l%s,w=J(p,r,s)*p%s,h=J(w,o,s)*w%s,g=J(h,o,s)*w%s,S=J(g,e,s)*c%s;return{pow_p_5_8:J(S,Te,s)*t%s,b2:u}}function mr(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}function _r(t,e){const n=kt,r=H(e*e*e,n),o=H(r*r*e,n),s=Ar(t*o).pow_p_5_8;let a=H(t*r*s,n);const u=H(e*a*a,n),i=a,D=H(a*Ue,n),c=u===t,l=u===H(-t,n),p=u===H(-t*Ue,n);return c&&(a=i),(l||p)&&(a=D),ur(a,n)&&(a=H(-a,n)),{isValid:c||l,value:a}}const Sr=(()=>_e(kt,void 0,!0))(),vr=(()=>({a:BigInt(-1),d:BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),Fp:Sr,n:BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),h:Cr,Gx:BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),Gy:BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),hash:Kn,randomBytes:he,adjustScalarBytes:mr,uvRatio:_r}))(),Rt=(()=>yr(vr))(),jt="EdDSA",Zt="JWT",ut=".",Dt="base64url",Gt="utf8",xt="utf8",Vt=":",Yt="did",Jt="key",dt="base58btc",Kt="z",Wt="K36",Fe=32,Ne=32;function Xt(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function Le(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Xt(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function Oe(t,e){e||(e=t.reduce((o,s)=>o+s.length,0));const n=Le(e);let r=0;for(const o of t)n.set(o,r),r+=o.length;return Xt(n)}function Ir(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var o=0;o<t.length;o++){var s=t.charAt(o),a=s.charCodeAt(0);if(n[a]!==255)throw new TypeError(s+" is ambiguous");n[a]=o}var u=t.length,i=t.charAt(0),D=Math.log(u)/Math.log(256),c=Math.log(256)/Math.log(u);function l(h){if(h instanceof Uint8Array||(ArrayBuffer.isView(h)?h=new Uint8Array(h.buffer,h.byteOffset,h.byteLength):Array.isArray(h)&&(h=Uint8Array.from(h))),!(h instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(h.length===0)return"";for(var g=0,S=0,v=0,L=h.length;v!==L&&h[v]===0;)v++,g++;for(var d=(L-v)*c+1>>>0,m=new Uint8Array(d);v!==L;){for(var F=h[v],q=0,z=d-1;(F!==0||q<S)&&z!==-1;z--,q++)F+=256*m[z]>>>0,m[z]=F%u>>>0,F=F/u>>>0;if(F!==0)throw new Error("Non-zero carry");S=q,v++}for(var I=d-S;I!==d&&m[I]===0;)I++;for(var O=i.repeat(g);I<d;++I)O+=t.charAt(m[I]);return O}function p(h){if(typeof h!="string")throw new TypeError("Expected String");if(h.length===0)return new Uint8Array;var g=0;if(h[g]!==" "){for(var S=0,v=0;h[g]===i;)S++,g++;for(var L=(h.length-g)*D+1>>>0,d=new Uint8Array(L);h[g];){var m=n[h.charCodeAt(g)];if(m===255)return;for(var F=0,q=L-1;(m!==0||F<v)&&q!==-1;q--,F++)m+=u*d[q]>>>0,d[q]=m%256>>>0,m=m/256>>>0;if(m!==0)throw new Error("Non-zero carry");v=F,g++}if(h[g]!==" "){for(var z=L-v;z!==L&&d[z]===0;)z++;for(var I=new Uint8Array(S+(L-z)),O=S;z!==L;)I[O++]=d[z++];return I}}}function w(h){var g=p(h);if(g)return g;throw new Error(`Non-${e} character`)}return{encode:l,decodeUnsafe:p,decode:w}}var Ur=Ir,Tr=Ur;const He=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},Fr=t=>new TextEncoder().encode(t),Nr=t=>new TextDecoder().decode(t);class Lr{constructor(e,n,r){this.name=e,this.prefix=n,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Or{constructor(e,n,r){if(this.name=e,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return ze(this,e)}}class Hr{constructor(e){this.decoders=e}or(e){return ze(this,e)}decode(e){const n=e[0],r=this.decoders[n];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const ze=(t,e)=>new Hr({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class zr{constructor(e,n,r,o){this.name=e,this.prefix=n,this.baseEncode=r,this.baseDecode=o,this.encoder=new Lr(e,n,r),this.decoder=new Or(e,n,o)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Bt=({name:t,prefix:e,encode:n,decode:r})=>new zr(t,e,n,r),ht=({prefix:t,name:e,alphabet:n})=>{const{encode:r,decode:o}=Tr(n,e);return Bt({prefix:t,name:e,encode:r,decode:s=>He(o(s))})},Mr=(t,e,n,r)=>{const o={};for(let c=0;c<e.length;++c)o[e[c]]=c;let s=t.length;for(;t[s-1]==="=";)--s;const a=new Uint8Array(s*n/8|0);let u=0,i=0,D=0;for(let c=0;c<s;++c){const l=o[t[c]];if(l===void 0)throw new SyntaxError(`Non-${r} character`);i=i<<n|l,u+=n,u>=8&&(u-=8,a[D++]=255&i>>u)}if(u>=n||255&i<<8-u)throw new SyntaxError("Unexpected end of data");return a},qr=(t,e,n)=>{const r=e[e.length-1]==="=",o=(1<<n)-1;let s="",a=0,u=0;for(let i=0;i<t.length;++i)for(u=u<<8|t[i],a+=8;a>n;)a-=n,s+=e[o&u>>a];if(a&&(s+=e[o&u<<n-a]),r)for(;s.length*n&7;)s+="=";return s},k=({name:t,prefix:e,bitsPerChar:n,alphabet:r})=>Bt({prefix:e,name:t,encode(o){return qr(o,r,n)},decode(o){return Mr(o,r,n,t)}}),$r=Bt({prefix:"\0",name:"identity",encode:t=>Nr(t),decode:t=>Fr(t)});var kr=Object.freeze({__proto__:null,identity:$r});const Rr=k({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var jr=Object.freeze({__proto__:null,base2:Rr});const Zr=k({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var Gr=Object.freeze({__proto__:null,base8:Zr});const Vr=ht({prefix:"9",name:"base10",alphabet:"0123456789"});var Yr=Object.freeze({__proto__:null,base10:Vr});const Jr=k({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),Kr=k({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var Wr=Object.freeze({__proto__:null,base16:Jr,base16upper:Kr});const Xr=k({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Pr=k({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Qr=k({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),to=k({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),eo=k({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),no=k({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ro=k({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),oo=k({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),so=k({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var io=Object.freeze({__proto__:null,base32:Xr,base32upper:Pr,base32pad:Qr,base32padupper:to,base32hex:eo,base32hexupper:no,base32hexpad:ro,base32hexpadupper:oo,base32z:so});const uo=ht({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),co=ht({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var ao=Object.freeze({__proto__:null,base36:uo,base36upper:co});const fo=ht({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Do=ht({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var ho=Object.freeze({__proto__:null,base58btc:fo,base58flickr:Do});const lo=k({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),bo=k({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),po=k({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),wo=k({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var Eo=Object.freeze({__proto__:null,base64:lo,base64pad:bo,base64url:po,base64urlpad:wo});const Me=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),go=Me.reduce((t,e,n)=>(t[n]=e,t),[]),yo=Me.reduce((t,e,n)=>(t[e.codePointAt(0)]=n,t),[]);function xo(t){return t.reduce((e,n)=>(e+=go[n],e),"")}function Bo(t){const e=[];for(const n of t){const r=yo[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);e.push(r)}return new Uint8Array(e)}const Co=Bt({prefix:"\u{1F680}",name:"base256emoji",encode:xo,decode:Bo});var Ao=Object.freeze({__proto__:null,base256emoji:Co}),mo=$e,qe=128,_o=127,So=~_o,vo=Math.pow(2,31);function $e(t,e,n){e=e||[],n=n||0;for(var r=n;t>=vo;)e[n++]=t&255|qe,t/=128;for(;t&So;)e[n++]=t&255|qe,t>>>=7;return e[n]=t|0,$e.bytes=n-r+1,e}var Io=Pt,Uo=128,ke=127;function Pt(t,r){var n=0,r=r||0,o=0,s=r,a,u=t.length;do{if(s>=u)throw Pt.bytes=0,new RangeError("Could not decode varint");a=t[s++],n+=o<28?(a&ke)<<o:(a&ke)*Math.pow(2,o),o+=7}while(a>=Uo);return Pt.bytes=s-r,n}var To=Math.pow(2,7),Fo=Math.pow(2,14),No=Math.pow(2,21),Lo=Math.pow(2,28),Oo=Math.pow(2,35),Ho=Math.pow(2,42),zo=Math.pow(2,49),Mo=Math.pow(2,56),qo=Math.pow(2,63),$o=function(t){return t<To?1:t<Fo?2:t<No?3:t<Lo?4:t<Oo?5:t<Ho?6:t<zo?7:t<Mo?8:t<qo?9:10},ko={encode:mo,decode:Io,encodingLength:$o},Re=ko;const je=(t,e,n=0)=>(Re.encode(t,e,n),e),Ze=t=>Re.encodingLength(t),Qt=(t,e)=>{const n=e.byteLength,r=Ze(t),o=r+Ze(n),s=new Uint8Array(o+n);return je(t,s,0),je(n,s,r),s.set(e,o),new Ro(t,n,e,s)};class Ro{constructor(e,n,r,o){this.code=e,this.size=n,this.digest=r,this.bytes=o}}const Ge=({name:t,code:e,encode:n})=>new jo(t,e,n);class jo{constructor(e,n,r){this.name=e,this.code=n,this.encode=r}digest(e){if(e instanceof Uint8Array){const n=this.encode(e);return n instanceof Uint8Array?Qt(this.code,n):n.then(r=>Qt(this.code,r))}else throw Error("Unknown type, must be binary type")}}const Ve=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),Zo=Ge({name:"sha2-256",code:18,encode:Ve("SHA-256")}),Go=Ge({name:"sha2-512",code:19,encode:Ve("SHA-512")});var Vo=Object.freeze({__proto__:null,sha256:Zo,sha512:Go});const Ye=0,Yo="identity",Je=He,Jo=t=>Qt(Ye,Je(t)),Ko={code:Ye,name:Yo,encode:Je,digest:Jo};var Wo=Object.freeze({__proto__:null,identity:Ko});new TextEncoder,new TextDecoder;const Ke={...kr,...jr,...Gr,...Yr,...Wr,...io,...ao,...ho,...Eo,...Ao};({...Vo,...Wo});function We(t,e,n,r){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:n},decoder:{decode:r}}}const Xe=We("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),te=We("ascii","a",t=>{let e="a";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e},t=>{t=t.substring(1);const e=Le(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}),Pe={utf8:Xe,"utf-8":Xe,hex:Ke.base16,latin1:te,ascii:te,binary:te,...Ke};function ct(t,e="utf8"){const n=Pe[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):n.encoder.encode(t).substring(1)}function rt(t,e="utf8"){const n=Pe[e];if(!n)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Xt(globalThis.Buffer.from(t,"utf-8")):n.decoder.decode(`${n.prefix}${t}`)}function lt(t){return (0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonParse */ .j)(ct(rt(t,Dt),Gt))}function bt(t){return ct(rt((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonStringify */ .h)(t),Gt),Dt)}function Qe(t){const e=rt(Wt,dt),n=Kt+ct(Oe([e,t]),dt);return[Yt,Jt,n].join(Vt)}function tn(t){const[e,n,r]=t.split(Vt);if(e!==Yt||n!==Jt)throw new Error('Issuer must be a DID with method "key"');if(r.slice(0,1)!==Kt)throw new Error("Issuer must be a key in mulicodec format");const o=rt(r.slice(1),dt);if(ct(o.slice(0,2),dt)!==Wt)throw new Error('Issuer must be a public key with type "Ed25519"');const s=o.slice(2);if(s.length!==Fe)throw new Error("Issuer must be a public key with length 32 bytes");return s}function en(t){return ct(t,Dt)}function nn(t){return rt(t,Dt)}function rn(t){return rt([bt(t.header),bt(t.payload)].join(ut),xt)}function Xo(t){const e=ct(t,xt).split(ut),n=lt(e[0]),r=lt(e[1]);return{header:n,payload:r}}function on(t){return[bt(t.header),bt(t.payload),en(t.signature)].join(ut)}function sn(t){const e=t.split(ut),n=lt(e[0]),r=lt(e[1]),o=nn(e[2]),s=rt(e.slice(0,2).join(ut),xt);return{header:n,payload:r,signature:o,data:s}}function Po(t=he(Ne)){const e=Rt.getPublicKey(t);return{secretKey:Oe([t,e]),publicKey:e}}async function Qo(t,e,n,r,o=(0,_walletconnect_time__WEBPACK_IMPORTED_MODULE_0__.fromMiliseconds)(Date.now())){const s={alg:jt,typ:Zt},a=Qe(r.publicKey),u=o+n,i={iss:a,sub:t,aud:e,iat:o,exp:u},D=rn({header:s,payload:i}),c=Rt.sign(D,r.secretKey.slice(0,32));return on({header:s,payload:i,signature:c})}async function ts(t){const{header:e,payload:n,data:r,signature:o}=sn(t);if(e.alg!==jt||e.typ!==Zt)throw new Error("JWT must use EdDSA algorithm");const s=tn(n.iss);return Rt.verify(o,r,s)}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 359348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);


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

/***/ 384365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export WsConnection */
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24434);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(213554);
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(739031);
const v=()=>typeof WebSocket<"u"?WebSocket:typeof global<"u"&&typeof global.WebSocket<"u"?global.WebSocket:typeof window<"u"&&typeof window.WebSocket<"u"?window.WebSocket:typeof self<"u"&&typeof self.WebSocket<"u"?self.WebSocket:__webpack_require__(792784),w=()=>typeof WebSocket<"u"||typeof global<"u"&&typeof global.WebSocket<"u"||typeof window<"u"&&typeof window.WebSocket<"u"||typeof self<"u"&&typeof self.WebSocket<"u",d=r=>r.split("?")[0],h=10,b=v();class f{constructor(e){if(this.url=e,this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.registering=!1,!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isWsUrl)(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);this.url=e}get connected(){return typeof this.socket<"u"}get connecting(){return this.registering}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async open(e=this.url){await this.register(e)}async close(){return new Promise((e,t)=>{if(typeof this.socket>"u"){t(new Error("Connection already closed"));return}this.socket.onclose=n=>{this.onClose(n),e()},this.socket.close()})}async send(e){typeof this.socket>"u"&&(this.socket=await this.register());try{this.socket.send((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__/* .safeJsonStringify */ .h)(e))}catch(t){this.onError(e.id,t)}}register(e=this.url){if(!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isWsUrl)(e))throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);if(this.registering){const t=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=t||this.events.listenerCount("open")>=t)&&this.events.setMaxListeners(t+1),new Promise((n,s)=>{this.events.once("register_error",o=>{this.resetMaxListeners(),s(o)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.socket>"u")return s(new Error("WebSocket connection is missing or invalid"));n(this.socket)})})}return this.url=e,this.registering=!0,new Promise((t,n)=>{const s=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isReactNative)()?void 0:{rejectUnauthorized:!(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isLocalhostUrl)(e)},o=new b(e,[],s);w()?o.onerror=i=>{const a=i;n(this.emitError(a.error))}:o.on("error",i=>{n(this.emitError(i))}),o.onopen=()=>{this.onOpen(o),t(o)}})}onOpen(e){e.onmessage=t=>this.onPayload(t),e.onclose=t=>this.onClose(t),this.socket=e,this.registering=!1,this.events.emit("open")}onClose(e){this.socket=void 0,this.registering=!1,this.events.emit("close",e)}onPayload(e){if(typeof e.data>"u")return;const t=typeof e.data=="string"?(0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_2__/* .safeJsonParse */ .j)(e.data):e.data;this.events.emit("payload",t)}onError(e,t){const n=this.parseError(t),s=n.message||n.toString(),o=(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcError)(e,s);this.events.emit("payload",o)}parseError(e,t=this.url){return (0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.parseConnectionError)(e,d(t),"WS")}resetMaxListeners(){this.events.getMaxListeners()>h&&this.events.setMaxListeners(h)}emitError(e){const t=this.parseError(new Error(e?.message||`WebSocket connection failed for host: ${d(this.url)}`));return this.events.emit("register_error",t),t}}
//# sourceMappingURL=index.es.js.map


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

/***/ 391089:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);

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

/***/ 393284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ h)
});

// UNUSED EXPORTS: KeyValueStorage

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
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
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



;// ./node_modules/unstorage/dist/shared/unstorage.CoCt7NXC.mjs
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
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
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
  base = unstorage_CoCt7NXC_normalizeBaseKey(base);
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
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
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
function unstorage_CoCt7NXC_normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
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
      base = unstorage_CoCt7NXC_normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
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
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = unstorage_CoCt7NXC_normalizeBaseKey(base);
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
      base = unstorage_CoCt7NXC_normalizeBaseKey(base);
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
      base = unstorage_CoCt7NXC_normalizeBaseKey(base);
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
    let dbp;
    const getDB = () => {
        if (dbp)
            return dbp;
        const request = indexedDB.open(dbName);
        request.onupgradeneeded = () => request.result.createObjectStore(storeName);
        dbp = promisifyRequest(request);
        dbp.then((db) => {
            // It seems like Safari sometimes likes to just close the connection.
            // It's supposed to fire this event when that happens. Let's hope it does!
            db.onclose = () => (dbp = undefined);
        }, () => { });
        return dbp;
    };
    return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
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



// EXTERNAL MODULE: ./node_modules/@walletconnect/safe-json/dist/esm/index.js
var esm = __webpack_require__(213554);
;// ./node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
function C(i){return i}const x="idb-keyval";var z=(i={})=>{const t=i.base&&i.base.length>0?`${i.base}:`:"",e=s=>t+s;let n;return i.dbName&&i.storeName&&(n=createStore(i.dbName,i.storeName)),{name:x,options:i,async hasItem(s){return!(typeof await get(e(s),n)>"u")},async getItem(s){return await get(e(s),n)??null},setItem(s,a){return set(e(s),a,n)},removeItem(s){return del(e(s),n)},getKeys(){return keys(n)},clear(){return clear(n)}}};const D="WALLET_CONNECT_V2_INDEXED_DB",E="keyvaluestorage";class _{constructor(){this.indexedDb=createStorage({driver:z({dbName:D,storeName:E})})}async getKeys(){return this.indexedDb.getKeys()}async getEntries(){return(await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t=>[t.key,t.value])}async getItem(t){const e=await this.indexedDb.getItem(t);if(e!==null)return e}async setItem(t,e){await this.indexedDb.setItem(t,(0,esm/* safeJsonStringify */.h)(e))}async removeItem(t){await this.indexedDb.removeItem(t)}}var l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},c={exports:{}};(function(){let i;function t(){}i=t,i.prototype.getItem=function(e){return this.hasOwnProperty(e)?String(this[e]):null},i.prototype.setItem=function(e,n){this[e]=String(n)},i.prototype.removeItem=function(e){delete this[e]},i.prototype.clear=function(){const e=this;Object.keys(e).forEach(function(n){e[n]=void 0,delete e[n]})},i.prototype.key=function(e){return e=e||0,Object.keys(this)[e]},i.prototype.__defineGetter__("length",function(){return Object.keys(this).length}),typeof l<"u"&&l.localStorage?c.exports=l.localStorage:typeof window<"u"&&window.localStorage?c.exports=window.localStorage:c.exports=new t})();function k(i){var t;return[i[0],(0,esm/* safeJsonParse */.j)((t=i[1])!=null?t:"")]}class K{constructor(){this.localStorage=c.exports}async getKeys(){return Object.keys(this.localStorage)}async getEntries(){return Object.entries(this.localStorage).map(k)}async getItem(t){const e=this.localStorage.getItem(t);if(e!==null)return (0,esm/* safeJsonParse */.j)(e)}async setItem(t,e){this.localStorage.setItem(t,(0,esm/* safeJsonStringify */.h)(e))}async removeItem(t){this.localStorage.removeItem(t)}}const N="wc_storage_version",y=1,O=async(i,t,e)=>{const n=N,s=await t.getItem(n);if(s&&s>=y){e(t);return}const a=await i.getKeys();if(!a.length){e(t);return}const m=[];for(;a.length;){const r=a.shift();if(!r)continue;const o=r.toLowerCase();if(o.includes("wc@")||o.includes("walletconnect")||o.includes("wc_")||o.includes("wallet_connect")){const f=await i.getItem(r);await t.setItem(r,f),m.push(r)}}await t.setItem(n,y),e(t),j(i,m)},j=async(i,t)=>{t.length&&t.forEach(async e=>{await i.removeItem(e)})};class h{constructor(){this.initialized=!1,this.setInitialized=e=>{this.storage=e,this.initialized=!0};const t=new K;this.storage=t;try{const e=new _;O(t,e,this.setInitialized)}catch{this.initialized=!0}}async getKeys(){return await this.initialize(),this.storage.getKeys()}async getEntries(){return await this.initialize(),this.storage.getEntries()}async getItem(t){return await this.initialize(),this.storage.getItem(t)}async setItem(t,e){return await this.initialize(),this.storage.setItem(t,e)}async removeItem(t){return await this.initialize(),this.storage.removeItem(t)}async initialize(){this.initialized||await new Promise(t=>{const e=setInterval(()=>{this.initialized&&(clearInterval(e),t())},20)})}}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 396705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kF: () => (/* reexport */ r)
});

// UNUSED EXPORTS: IBaseJsonRpcProvider, IEvents, IJsonRpcConnection

;// ./node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
class e{}class o extends e{constructor(c){super()}}class n extends e{constructor(){super()}}class r extends n{constructor(c){super()}}
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js

//# sourceMappingURL=types.js.map

/***/ }),

/***/ 400315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);
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

/***/ 443228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: () => (/* binding */ C)
/* harmony export */ });
/* unused harmony exports isPublishMethod, isPublishParams, isPublishRequest, isSubscribeMethod, isSubscribeParams, isSubscribeRequest, isSubscriptionMethod, isSubscriptionParams, isSubscriptionRequest, isUnsubscribeMethod, isUnsubscribeParams, isUnsubscribeRequest, parsePublishRequest, parseSubscribeRequest, parseSubscriptionRequest, parseUnsubscribeRequest */
function e(s,r,i="string"){if(!s[r]||typeof s[r]!==i)throw new Error(`Missing or invalid "${r}" param`)}function l(s,r){let i=!0;return r.forEach(t=>{t in s||(i=!1)}),i}function f(s,r){return Array.isArray(s)?s.length===r:Object.keys(s).length===r}function w(s,r){return Array.isArray(s)?s.length>=r:Object.keys(s).length>=r}function u(s,r,i){return(i.length?w(s,r.length):f(s,r.length))?l(s,r):!1}function n(s,r,i="_"){const t=s.split(i);return t[t.length-1].trim().toLowerCase()===r.trim().toLowerCase()}function R(s){return b(s.method)&&a(s.params)}function b(s){return n(s,"subscribe")}function a(s){return u(s,["topic"],[])}function P(s){return c(s.method)&&h(s.params)}function c(s){return n(s,"publish")}function h(s){return u(s,["message","topic","ttl"],["prompt","tag"])}function _(s){return o(s.method)&&p(s.params)}function o(s){return n(s,"unsubscribe")}function p(s){return u(s,["id","topic"],[])}function S(s){return m(s.method)&&d(s.params)}function m(s){return n(s,"subscription")}function d(s){return u(s,["id","data"],[])}function g(s){if(!b(s.method))throw new Error("JSON-RPC Request has invalid subscribe method");if(!a(s.params))throw new Error("JSON-RPC Request has invalid subscribe params");const r=s.params;return e(r,"topic"),r}function q(s){if(!c(s.method))throw new Error("JSON-RPC Request has invalid publish method");if(!h(s.params))throw new Error("JSON-RPC Request has invalid publish params");const r=s.params;return e(r,"topic"),e(r,"message"),e(r,"ttl","number"),r}function E(s){if(!o(s.method))throw new Error("JSON-RPC Request has invalid unsubscribe method");if(!p(s.params))throw new Error("JSON-RPC Request has invalid unsubscribe params");const r=s.params;return e(r,"id"),r}function k(s){if(!m(s.method))throw new Error("JSON-RPC Request has invalid subscription method");if(!d(s.params))throw new Error("JSON-RPC Request has invalid subscription params");const r=s.params;return e(r,"id"),e(r,"data"),r}const C={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};
//# sourceMappingURL=index.es.js.map


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

/***/ 459872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export isNodeJs */
/* harmony import */ var _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(525682);
/* harmony import */ var _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "IJsonRpcProvider")) __webpack_require__.d(__webpack_exports__, { IJsonRpcProvider: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.IJsonRpcProvider; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "formatJsonRpcError")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcError: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.formatJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "formatJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcRequest: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.formatJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "formatJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcResult: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.formatJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "getBigIntRpcId")) __webpack_require__.d(__webpack_exports__, { getBigIntRpcId: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.getBigIntRpcId; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isHttpUrl")) __webpack_require__.d(__webpack_exports__, { isHttpUrl: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isHttpUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcError")) __webpack_require__.d(__webpack_exports__, { isJsonRpcError: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { isJsonRpcRequest: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcResponse")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResponse: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcResponse; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResult: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isLocalhostUrl")) __webpack_require__.d(__webpack_exports__, { isLocalhostUrl: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isLocalhostUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isReactNative")) __webpack_require__.d(__webpack_exports__, { isReactNative: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isReactNative; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "isWsUrl")) __webpack_require__.d(__webpack_exports__, { isWsUrl: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.isWsUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__, "payloadId")) __webpack_require__.d(__webpack_exports__, { payloadId: function() { return _walletconnect_environment__WEBPACK_IMPORTED_MODULE_0__.payloadId; } });

const isNodeJs = (/* unused pure expression or super */ null && (isNode));

//# sourceMappingURL=env.js.map

/***/ }),

/***/ 482563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);


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

/***/ 486668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ER: () => (/* binding */ payloadId),
/* harmony export */   Im: () => (/* binding */ formatJsonRpcResult),
/* harmony export */   dZ: () => (/* binding */ formatJsonRpcError),
/* harmony export */   eX: () => (/* binding */ getBigIntRpcId),
/* harmony export */   e_: () => (/* binding */ formatJsonRpcRequest)
/* harmony export */ });
/* unused harmony export formatErrorMessage */
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(775845);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(844410);


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
        return (0,_error__WEBPACK_IMPORTED_MODULE_0__/* .getError */ .vG)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .INTERNAL_ERROR */ .zR);
    }
    if (typeof error === "string") {
        error = Object.assign(Object.assign({}, (0,_error__WEBPACK_IMPORTED_MODULE_0__/* .getError */ .vG)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SERVER_ERROR */ .fO)), { message: error });
    }
    if (typeof data !== "undefined") {
        error.data = data;
    }
    if ((0,_error__WEBPACK_IMPORTED_MODULE_0__/* .isReservedErrorCode */ .mE)(error.code)) {
        error = (0,_error__WEBPACK_IMPORTED_MODULE_0__/* .getErrorByCode */ .rI)(error.code);
    }
    return error;
}
//# sourceMappingURL=format.js.map

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

/***/ 506187:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);


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

/***/ 510463:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);
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

/***/ 525682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(498186);
tslib_1.__exportStar(__webpack_require__(277173), exports);
tslib_1.__exportStar(__webpack_require__(391089), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 551843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// BLAKE2s hash function in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

const util = __webpack_require__(120829)

// Little-endian byte access.
// Expects a Uint8Array and an index
// Returns the little-endian uint32 at v[i..i+3]
function B2S_GET32 (v, i) {
  return v[i] ^ (v[i + 1] << 8) ^ (v[i + 2] << 16) ^ (v[i + 3] << 24)
}

// Mixing function G.
function B2S_G (a, b, c, d, x, y) {
  v[a] = v[a] + v[b] + x
  v[d] = ROTR32(v[d] ^ v[a], 16)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 12)
  v[a] = v[a] + v[b] + y
  v[d] = ROTR32(v[d] ^ v[a], 8)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 7)
}

// 32-bit right rotation
// x should be a uint32
// y must be between 1 and 31, inclusive
function ROTR32 (x, y) {
  return (x >>> y) ^ (x << (32 - y))
}

// Initialization Vector.
const BLAKE2S_IV = new Uint32Array([
  0x6a09e667,
  0xbb67ae85,
  0x3c6ef372,
  0xa54ff53a,
  0x510e527f,
  0x9b05688c,
  0x1f83d9ab,
  0x5be0cd19
])

const SIGMA = new Uint8Array([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0
])

// Compression function. "last" flag indicates last block
const v = new Uint32Array(16)
const m = new Uint32Array(16)
function blake2sCompress (ctx, last) {
  let i = 0
  for (i = 0; i < 8; i++) {
    // init work variables
    v[i] = ctx.h[i]
    v[i + 8] = BLAKE2S_IV[i]
  }

  v[12] ^= ctx.t // low 32 bits of offset
  v[13] ^= ctx.t / 0x100000000 // high 32 bits
  if (last) {
    // last block flag set ?
    v[14] = ~v[14]
  }

  for (i = 0; i < 16; i++) {
    // get little-endian words
    m[i] = B2S_GET32(ctx.b, 4 * i)
  }

  // ten rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 32)
  for (i = 0; i < 10; i++) {
    // util.debugPrint('   (i=' + i + ')  v[16]', v, 32)
    B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]])
    B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]])
    B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]])
    B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]])
    B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]])
    B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]])
    B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]])
    B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]])
  }
  // util.debugPrint('   (i=10) v[16]', v, 32)

  for (i = 0; i < 8; i++) {
    ctx.h[i] ^= v[i] ^ v[i + 8]
  }
  // util.debugPrint('h[8]', ctx.h, 32)
}

// Creates a BLAKE2s hashing context
// Requires an output length between 1 and 32 bytes
// Takes an optional Uint8Array key
function blake2sInit (outlen, key) {
  if (!(outlen > 0 && outlen <= 32)) {
    throw new Error('Incorrect output length, should be in [1, 32]')
  }
  const keylen = key ? key.length : 0
  if (key && !(keylen > 0 && keylen <= 32)) {
    throw new Error('Incorrect key length, should be in [1, 32]')
  }

  const ctx = {
    h: new Uint32Array(BLAKE2S_IV), // hash state
    b: new Uint8Array(64), // input block
    c: 0, // pointer within block
    t: 0, // input count
    outlen: outlen // output length in bytes
  }
  ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen

  if (keylen > 0) {
    blake2sUpdate(ctx, key)
    ctx.c = 64 // at the end
  }

  return ctx
}

// Updates a BLAKE2s streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2sUpdate (ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 64) {
      // buffer full ?
      ctx.t += ctx.c // add counters
      blake2sCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2s streaming hash
// Returns a Uint8Array containing the message digest
function blake2sFinal (ctx) {
  ctx.t += ctx.c // mark last block offset
  while (ctx.c < 64) {
    // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2sCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  const out = new Uint8Array(ctx.outlen)
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = (ctx.h[i >> 2] >> (8 * (i & 3))) & 0xff
  }
  return out
}

// Computes the BLAKE2S hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2s (input, key, outlen) {
  // preprocess inputs
  outlen = outlen || 32
  input = util.normalizeInput(input)

  // do the math
  const ctx = blake2sInit(outlen, key)
  blake2sUpdate(ctx, input)
  return blake2sFinal(ctx)
}

// Computes the BLAKE2S hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2sHex (input, key, outlen) {
  const output = blake2s(input, key, outlen)
  return util.toHex(output)
}

module.exports = {
  blake2s: blake2s,
  blake2sHex: blake2sHex,
  blake2sInit: blake2sInit,
  blake2sUpdate: blake2sUpdate,
  blake2sFinal: blake2sFinal
}


/***/ }),

/***/ 553550:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"pino","version":"7.11.0","description":"super fast, all natural json logger","main":"pino.js","type":"commonjs","types":"pino.d.ts","browser":"./browser.js","files":["pino.js","file.js","pino.d.ts","bin.js","browser.js","pretty.js","usage.txt","test","docs","example.js","lib"],"scripts":{"docs":"docsify serve","browser-test":"airtap --local 8080 test/browser*test.js","lint":"eslint .","test":"npm run lint && npm run transpile && tap --ts && jest test/jest && npm run test-types","test-ci":"npm run lint && npm run transpile && tap --ts --no-check-coverage --coverage-report=lcovonly && npm run test-types","test-ci-pnpm":"pnpm run lint && npm run transpile && tap --ts --no-coverage --no-check-coverage && pnpm run test-types","test-ci-yarn-pnp":"yarn run lint && npm run transpile && tap --ts --no-check-coverage --coverage-report=lcovonly","test-types":"tsc && tsd && ts-node test/types/pino.ts","transpile":"node ./test/fixtures/ts/transpile.cjs","cov-ui":"tap --ts --coverage-report=html","bench":"node benchmarks/utils/runbench all","bench-basic":"node benchmarks/utils/runbench basic","bench-object":"node benchmarks/utils/runbench object","bench-deep-object":"node benchmarks/utils/runbench deep-object","bench-multi-arg":"node benchmarks/utils/runbench multi-arg","bench-longs-tring":"node benchmarks/utils/runbench long-string","bench-child":"node benchmarks/utils/runbench child","bench-child-child":"node benchmarks/utils/runbench child-child","bench-child-creation":"node benchmarks/utils/runbench child-creation","bench-formatters":"node benchmarks/utils/runbench formatters","update-bench-doc":"node benchmarks/utils/generate-benchmark-doc > docs/benchmarks.md"},"bin":{"pino":"./bin.js"},"precommit":"test","repository":{"type":"git","url":"git+https://github.com/pinojs/pino.git"},"keywords":["fast","logger","stream","json"],"author":"Matteo Collina <hello@matteocollina.com>","contributors":["David Mark Clements <huperekchuno@googlemail.com>","James Sumners <james.sumners@gmail.com>","Thomas Watson Steen <w@tson.dk> (https://twitter.com/wa7son)"],"license":"MIT","bugs":{"url":"https://github.com/pinojs/pino/issues"},"homepage":"http://getpino.io","devDependencies":{"@types/flush-write-stream":"^1.0.0","@types/node":"^17.0.0","@types/tap":"^15.0.6","airtap":"4.0.4","benchmark":"^2.1.4","bole":"^4.0.0","bunyan":"^1.8.14","docsify-cli":"^4.4.1","eslint":"^7.17.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.22.1","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.0","execa":"^5.0.0","fastbench":"^1.0.1","flush-write-stream":"^2.0.0","import-fresh":"^3.2.1","jest":"^27.3.1","log":"^6.0.0","loglevel":"^1.6.7","pino-pretty":"^v7.6.0","pre-commit":"^1.2.2","proxyquire":"^2.1.3","pump":"^3.0.0","rimraf":"^3.0.2","semver":"^7.0.0","split2":"^4.0.0","steed":"^1.1.3","strip-ansi":"^6.0.0","tap":"^16.0.0","tape":"^5.0.0","through2":"^4.0.0","ts-node":"^10.7.0","tsd":"^0.20.0","typescript":"^4.4.4","winston":"^3.3.3"},"dependencies":{"atomic-sleep":"^1.0.0","fast-redact":"^3.0.0","on-exit-leak-free":"^0.2.0","pino-abstract-transport":"v0.5.0","pino-std-serializers":"^4.0.0","process-warning":"^1.0.0","quick-format-unescaped":"^4.0.3","real-require":"^0.1.0","safe-stable-stringify":"^2.1.0","sonic-boom":"^2.2.1","thread-stream":"^0.15.1"},"tsd":{"directory":"test/types"}}');

/***/ }),

/***/ 566853:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { version } = __webpack_require__(553550)

module.exports = { version }


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

/***/ 599606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(602985), exports);
tslib_1.__exportStar(__webpack_require__(160221), exports);
//# sourceMappingURL=index.js.map

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

/***/ 662010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(880584);
tslib_1.__exportStar(__webpack_require__(163093), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 672760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  REQUIRED_METHODS: () => (/* binding */ ethereum_provider_dist_index_es_f),
  "default": () => (/* binding */ dist_index_es_b)
});

// UNUSED EXPORTS: EthereumProvider, OPTIONAL_EVENTS, OPTIONAL_METHODS, REQUIRED_EVENTS

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(24434);
var external_events_default = /*#__PURE__*/__webpack_require__.n(external_events_);
// EXTERNAL MODULE: ./node_modules/detect-browser/es/index.js
var es = __webpack_require__(248468);
// EXTERNAL MODULE: ./node_modules/@walletconnect/time/dist/cjs/index.js
var cjs = __webpack_require__(388900);
// EXTERNAL MODULE: ./node_modules/@walletconnect/window-getters/dist/cjs/index.js
var dist_cjs = __webpack_require__(838196);
// EXTERNAL MODULE: ./node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var window_metadata_dist_cjs = __webpack_require__(842063);
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/version.js
const version = '2.30.6';
//# sourceMappingURL=version.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/base.js

let errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = '', docsSlug, }) => docsPath
        ? `${docsBaseUrl ?? 'https://viem.sh'}${docsPath}${docsSlug ? `#${docsSlug}` : ''}`
        : undefined,
    version: `viem@${version}`,
};
function setErrorConfig(config) {
    errorConfig = config;
}
class BaseError extends Error {
    constructor(shortMessage, args = {}) {
        const details = (() => {
            if (args.cause instanceof BaseError)
                return args.cause.details;
            if (args.cause?.message)
                return args.cause.message;
            return args.details;
        })();
        const docsPath = (() => {
            if (args.cause instanceof BaseError)
                return args.cause.docsPath || args.docsPath;
            return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...(args.metaMessages ? [...args.metaMessages, ''] : []),
            ...(docsUrl ? [`Docs: ${docsUrl}`] : []),
            ...(details ? [`Details: ${details}`] : []),
            ...(errorConfig.version ? [`Version: ${errorConfig.version}`] : []),
        ].join('\n');
        super(message, args.cause ? { cause: args.cause } : undefined);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'BaseError'
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err &&
        typeof err === 'object' &&
        'cause' in err &&
        err.cause !== undefined)
        return walk(err.cause, fn);
    return fn ? null : err;
}
//# sourceMappingURL=base.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
    if (!value)
        return false;
    if (typeof value !== 'string')
        return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
}
//# sourceMappingURL=isHex.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/data.js

class SliceOffsetOutOfBoundsError extends BaseError {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`, { name: 'SliceOffsetOutOfBoundsError' });
    }
}
class SizeExceedsPaddingSizeError extends BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, { name: 'SizeExceedsPaddingSizeError' });
    }
}
class InvalidBytesLengthError extends BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`, { name: 'InvalidBytesLengthError' });
    }
}
//# sourceMappingURL=data.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/pad.js

function pad(hexOrBytes, { dir, size = 32 } = {}) {
    if (typeof hexOrBytes === 'string')
        return padHex(hexOrBytes, { dir, size });
    return padBytes(hexOrBytes, { dir, size });
}
function padHex(hex_, { dir, size = 32 } = {}) {
    if (size === null)
        return hex_;
    const hex = hex_.replace('0x', '');
    if (hex.length > size * 2)
        throw new SizeExceedsPaddingSizeError({
            size: Math.ceil(hex.length / 2),
            targetSize: size,
            type: 'hex',
        });
    return `0x${hex[dir === 'right' ? 'padEnd' : 'padStart'](size * 2, '0')}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
    if (size === null)
        return bytes;
    if (bytes.length > size)
        throw new SizeExceedsPaddingSizeError({
            size: bytes.length,
            targetSize: size,
            type: 'bytes',
        });
    const paddedBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        const padEnd = dir === 'right';
        paddedBytes[padEnd ? i : size - i - 1] =
            bytes[padEnd ? i : bytes.length - i - 1];
    }
    return paddedBytes;
}
//# sourceMappingURL=pad.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/encoding.js

class IntegerOutOfRangeError extends BaseError {
    constructor({ max, min, signed, size, value, }) {
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: 'IntegerOutOfRangeError' });
    }
}
class InvalidBytesBooleanError extends BaseError {
    constructor(bytes) {
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: 'InvalidBytesBooleanError',
        });
    }
}
class encoding_InvalidHexBooleanError extends BaseError {
    constructor(hex) {
        super(`Hex value "${hex}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: 'InvalidHexBooleanError' });
    }
}
class InvalidHexValueError extends BaseError {
    constructor(value) {
        super(`Hex value "${value}" is an odd length (${value.length}). It must be an even length.`, { name: 'InvalidHexValueError' });
    }
}
class SizeOverflowError extends BaseError {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: 'SizeOverflowError' });
    }
}
//# sourceMappingURL=encoding.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/size.js

/**
 * @description Retrieves the size of the value (in bytes).
 *
 * @param value The value (hex or byte array) to retrieve the size of.
 * @returns The size of the value (in bytes).
 */
function size_size(value) {
    if (isHex(value, { strict: false }))
        return Math.ceil((value.length - 2) / 2);
    return value.length;
}
//# sourceMappingURL=size.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/fromHex.js




function assertSize(hexOrBytes, { size }) {
    if (size_size(hexOrBytes) > size)
        throw new SizeOverflowError({
            givenSize: size_size(hexOrBytes),
            maxSize: size,
        });
}
/**
 * Decodes a hex string into a string, number, bigint, boolean, or byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex
 * - Example: https://viem.sh/docs/utilities/fromHex#usage
 *
 * @param hex Hex string to decode.
 * @param toOrOpts Type to convert to or options.
 * @returns Decoded value.
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x1a4', 'number')
 * // 420
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c6421', 'string')
 * // 'Hello world'
 *
 * @example
 * import { fromHex } from 'viem'
 * const data = fromHex('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *   size: 32,
 *   to: 'string'
 * })
 * // 'Hello world'
 */
function fromHex(hex, toOrOpts) {
    const opts = typeof toOrOpts === 'string' ? { to: toOrOpts } : toOrOpts;
    const to = opts.to;
    if (to === 'number')
        return hexToNumber(hex, opts);
    if (to === 'bigint')
        return hexToBigInt(hex, opts);
    if (to === 'string')
        return hexToString(hex, opts);
    if (to === 'boolean')
        return hexToBool(hex, opts);
    return hexToBytes(hex, opts);
}
/**
 * Decodes a hex value into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextobigint
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x1a4', { signed: true })
 * // 420n
 *
 * @example
 * import { hexToBigInt } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420n
 */
function hexToBigInt(hex, opts = {}) {
    const { signed } = opts;
    if (opts.size)
        assertSize(hex, { size: opts.size });
    const value = BigInt(hex);
    if (!signed)
        return value;
    const size = (hex.length - 2) / 2;
    const max = (1n << (BigInt(size) * 8n - 1n)) - 1n;
    if (value <= max)
        return value;
    return value - BigInt(`0x${'f'.padStart(size * 2, 'f')}`) - 1n;
}
/**
 * Decodes a hex value into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextobool
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x01')
 * // true
 *
 * @example
 * import { hexToBool } from 'viem'
 * const data = hexToBool('0x0000000000000000000000000000000000000000000000000000000000000001', { size: 32 })
 * // true
 */
function hexToBool(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, { size: opts.size });
        hex = trim(hex);
    }
    if (trim(hex) === '0x00')
        return false;
    if (trim(hex) === '0x01')
        return true;
    throw new InvalidHexBooleanError(hex);
}
/**
 * Decodes a hex string into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextonumber
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToNumber('0x1a4')
 * // 420
 *
 * @example
 * import { hexToNumber } from 'viem'
 * const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
 * // 420
 */
function hexToNumber(hex, opts = {}) {
    return Number(hexToBigInt(hex, opts));
}
/**
 * Decodes a hex value into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromHex#hextostring
 *
 * @param hex Hex value to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c6421')
 * // 'Hello world!'
 *
 * @example
 * import { hexToString } from 'viem'
 * const data = hexToString('0x48656c6c6f20576f726c64210000000000000000000000000000000000000000', {
 *  size: 32,
 * })
 * // 'Hello world'
 */
function hexToString(hex, opts = {}) {
    let bytes = hexToBytes(hex);
    if (opts.size) {
        assertSize(bytes, { size: opts.size });
        bytes = trim(bytes, { dir: 'right' });
    }
    return new TextDecoder().decode(bytes);
}
//# sourceMappingURL=fromHex.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toHex.js



const hexes = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, '0'));
/**
 * Encodes a string, number, bigint, or ByteArray into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex
 * - Example: https://viem.sh/docs/utilities/toHex#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world')
 * // '0x48656c6c6f20776f726c6421'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex(420)
 * // '0x1a4'
 *
 * @example
 * import { toHex } from 'viem'
 * const data = toHex('Hello world', { size: 32 })
 * // '0x48656c6c6f20776f726c64210000000000000000000000000000000000000000'
 */
function toHex(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToHex(value, opts);
    if (typeof value === 'string') {
        return stringToHex(value, opts);
    }
    if (typeof value === 'boolean')
        return boolToHex(value, opts);
    return bytesToHex(value, opts);
}
/**
 * Encodes a boolean into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#booltohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true)
 * // '0x1'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(false)
 * // '0x0'
 *
 * @example
 * import { boolToHex } from 'viem'
 * const data = boolToHex(true, { size: 32 })
 * // '0x0000000000000000000000000000000000000000000000000000000000000001'
 */
function boolToHex(value, opts = {}) {
    const hex = `0x${Number(value)}`;
    if (typeof opts.size === 'number') {
        assertSize(hex, { size: opts.size });
        return pad(hex, { size: opts.size });
    }
    return hex;
}
/**
 * Encodes a bytes array into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#bytestohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { bytesToHex } from 'viem'
 * const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]), { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function bytesToHex(value, opts = {}) {
    let string = '';
    for (let i = 0; i < value.length; i++) {
        string += hexes[value[i]];
    }
    const hex = `0x${string}`;
    if (typeof opts.size === 'number') {
        assertSize(hex, { size: opts.size });
        return pad(hex, { dir: 'right', size: opts.size });
    }
    return hex;
}
/**
 * Encodes a number or bigint into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#numbertohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420)
 * // '0x1a4'
 *
 * @example
 * import { numberToHex } from 'viem'
 * const data = numberToHex(420, { size: 32 })
 * // '0x00000000000000000000000000000000000000000000000000000000000001a4'
 */
function numberToHex(value_, opts = {}) {
    const { signed, size } = opts;
    const value = BigInt(value_);
    let maxValue;
    if (size) {
        if (signed)
            maxValue = (1n << (BigInt(size) * 8n - 1n)) - 1n;
        else
            maxValue = 2n ** (BigInt(size) * 8n) - 1n;
    }
    else if (typeof value_ === 'number') {
        maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === 'bigint' && signed ? -maxValue - 1n : 0;
    if ((maxValue && value > maxValue) || value < minValue) {
        const suffix = typeof value_ === 'bigint' ? 'n' : '';
        throw new IntegerOutOfRangeError({
            max: maxValue ? `${maxValue}${suffix}` : undefined,
            min: `${minValue}${suffix}`,
            signed,
            size,
            value: `${value_}${suffix}`,
        });
    }
    const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
    if (size)
        return pad(hex, { size });
    return hex;
}
const encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string into a hex string
 *
 * - Docs: https://viem.sh/docs/utilities/toHex#stringtohex
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Hex value.
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!')
 * // '0x48656c6c6f20576f726c6421'
 *
 * @example
 * import { stringToHex } from 'viem'
 * const data = stringToHex('Hello World!', { size: 32 })
 * // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
 */
function stringToHex(value_, opts = {}) {
    const value = encoder.encode(value_);
    return bytesToHex(value, opts);
}
//# sourceMappingURL=toHex.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toBytes.js





const toBytes_encoder = /*#__PURE__*/ new TextEncoder();
/**
 * Encodes a UTF-8 string, hex value, bigint, number or boolean to a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes
 * - Example: https://viem.sh/docs/utilities/toBytes#usage
 *
 * @param value Value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes('Hello world')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { toBytes } from 'viem'
 * const data = toBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function toBytes(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToBytes(value, opts);
    if (typeof value === 'boolean')
        return boolToBytes(value, opts);
    if (isHex(value))
        return toBytes_hexToBytes(value, opts);
    return stringToBytes(value, opts);
}
/**
 * Encodes a boolean into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#booltobytes
 *
 * @param value Boolean value to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true)
 * // Uint8Array([1])
 *
 * @example
 * import { boolToBytes } from 'viem'
 * const data = boolToBytes(true, { size: 32 })
 * // Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
 */
function boolToBytes(value, opts = {}) {
    const bytes = new Uint8Array(1);
    bytes[0] = Number(value);
    if (typeof opts.size === 'number') {
        assertSize(bytes, { size: opts.size });
        return pad(bytes, { size: opts.size });
    }
    return bytes;
}
// We use very optimized technique to convert hex string to byte array
const charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102,
};
function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
        return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
        return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
        return char - (charCodeMap.a - 10);
    return undefined;
}
/**
 * Encodes a hex string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#hextobytes
 *
 * @param hex Hex string to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
 *
 * @example
 * import { hexToBytes } from 'viem'
 * const data = hexToBytes('0x48656c6c6f20776f726c6421', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function toBytes_hexToBytes(hex_, opts = {}) {
    let hex = hex_;
    if (opts.size) {
        assertSize(hex, { size: opts.size });
        hex = pad(hex, { dir: 'right', size: opts.size });
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
        hexString = `0${hexString}`;
    const length = hexString.length / 2;
    const bytes = new Uint8Array(length);
    for (let index = 0, j = 0; index < length; index++) {
        const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
        const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
        if (nibbleLeft === undefined || nibbleRight === undefined) {
            throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
        }
        bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
}
/**
 * Encodes a number into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#numbertobytes
 *
 * @param value Number to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420)
 * // Uint8Array([1, 164])
 *
 * @example
 * import { numberToBytes } from 'viem'
 * const data = numberToBytes(420, { size: 4 })
 * // Uint8Array([0, 0, 1, 164])
 */
function numberToBytes(value, opts) {
    const hex = numberToHex(value, opts);
    return toBytes_hexToBytes(hex);
}
/**
 * Encodes a UTF-8 string into a byte array.
 *
 * - Docs: https://viem.sh/docs/utilities/toBytes#stringtobytes
 *
 * @param value String to encode.
 * @param opts Options.
 * @returns Byte array value.
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!')
 * // Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
 *
 * @example
 * import { stringToBytes } from 'viem'
 * const data = stringToBytes('Hello world!', { size: 32 })
 * // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 */
function stringToBytes(value, opts = {}) {
    const bytes = toBytes_encoder.encode(value);
    if (typeof opts.size === 'number') {
        assertSize(bytes, { size: opts.size });
        return pad(bytes, { dir: 'right', size: opts.size });
    }
    return bytes;
}
//# sourceMappingURL=toBytes.js.map
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha3.js
var sha3 = __webpack_require__(977238);
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/hash/keccak256.js




function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = (0,sha3/* keccak_256 */.lY)(isHex(value, { strict: false }) ? toBytes(value) : value);
    if (to === 'bytes')
        return bytes;
    return toHex(bytes);
}
//# sourceMappingURL=keccak256.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/lru.js
/**
 * Map with a LRU (Least recently used) policy.
 *
 * @link https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */
class LruMap extends Map {
    constructor(size) {
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey)
                this.delete(firstKey);
        }
        return this;
    }
}
//# sourceMappingURL=lru.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/address/getAddress.js





const checksumAddressCache = /*#__PURE__*/ new LruMap(8192);
function checksumAddress(address_, 
/**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */
chainId) {
    if (checksumAddressCache.has(`${address_}.${chainId}`))
        return checksumAddressCache.get(`${address_}.${chainId}`);
    const hexAddress = chainId
        ? `${chainId}${address_.toLowerCase()}`
        : address_.substring(2).toLowerCase();
    const hash = keccak256(stringToBytes(hexAddress), 'bytes');
    const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split('');
    for (let i = 0; i < 40; i += 2) {
        if (hash[i >> 1] >> 4 >= 8 && address[i]) {
            address[i] = address[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && address[i + 1]) {
            address[i + 1] = address[i + 1].toUpperCase();
        }
    }
    const result = `0x${address.join('')}`;
    checksumAddressCache.set(`${address_}.${chainId}`, result);
    return result;
}
function getAddress(address, 
/**
 * Warning: EIP-1191 checksum addresses are generally not backwards compatible with the
 * wider Ethereum ecosystem, meaning it will break when validated against an application/tool
 * that relies on EIP-55 checksum encoding (checksum without chainId).
 *
 * It is highly recommended to not use this feature unless you
 * know what you are doing.
 *
 * See more: https://github.com/ethereum/EIPs/issues/1121
 */
chainId) {
    if (!isAddress(address, { strict: false }))
        throw new InvalidAddressError({ address });
    return checksumAddress(address, chainId);
}
//# sourceMappingURL=getAddress.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js


/**
 * @description Converts an ECDSA public key to an address.
 *
 * @param publicKey The public key to convert.
 *
 * @returns The address.
 */
function publicKeyToAddress(publicKey) {
    const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
    return checksumAddress(`0x${address}`);
}
//# sourceMappingURL=publicKeyToAddress.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverPublicKey.js




async function recoverPublicKey({ hash, signature, }) {
    const hashHex = isHex(hash) ? hash : toHex(hash);
    const { secp256k1 } = await __webpack_require__.e(/* import() */ 6982).then(__webpack_require__.bind(__webpack_require__, 896982));
    const signature_ = (() => {
        // typeof signature: `Signature`
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) {
            const { r, s, v, yParity } = signature;
            const yParityOrV = Number(yParity ?? v);
            const recoveryBit = toRecoveryBit(yParityOrV);
            return new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit);
        }
        // typeof signature: `Hex | ByteArray`
        const signatureHex = isHex(signature) ? signature : toHex(signature);
        if (size_size(signatureHex) !== 65)
            throw new Error('invalid signature length');
        const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
        const recoveryBit = toRecoveryBit(yParityOrV);
        return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
    })();
    const publicKey = signature_
        .recoverPublicKey(hashHex.substring(2))
        .toHex(false);
    return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
    if (yParityOrV === 0 || yParityOrV === 1)
        return yParityOrV;
    if (yParityOrV === 27)
        return 0;
    if (yParityOrV === 28)
        return 1;
    throw new Error('Invalid yParityOrV value');
}
//# sourceMappingURL=recoverPublicKey.js.map
;// ./node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverAddress.js


async function recoverAddress({ hash, signature, }) {
    return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}
//# sourceMappingURL=recoverAddress.js.map
// EXTERNAL MODULE: ./node_modules/bs58/src/esm/index.js + 1 modules
var esm = __webpack_require__(148450);
;// ./node_modules/@msgpack/msgpack/dist.esm/utils/prettyByte.mjs
function prettyByte(byte) {
    return `${byte < 0 ? "-" : ""}0x${Math.abs(byte).toString(16).padStart(2, "0")}`;
}
//# sourceMappingURL=prettyByte.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/ExtData.mjs
/**
 * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
 */
class ExtData {
    constructor(type, data) {
        this.type = type;
        this.data = data;
    }
}
//# sourceMappingURL=ExtData.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/DecodeError.mjs
class DecodeError extends Error {
    constructor(message) {
        super(message);
        // fix the prototype chain in a cross-platform way
        const proto = Object.create(DecodeError.prototype);
        Object.setPrototypeOf(this, proto);
        Object.defineProperty(this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError.name,
        });
    }
}
//# sourceMappingURL=DecodeError.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/utils/int.mjs
// Integer Utility
const UINT32_MAX = 4294967295;
// DataView extension to handle int64 / uint64,
// where the actual range is 53-bits integer (a.k.a. safe integer)
function setUint64(view, offset, value) {
    const high = value / 4294967296;
    const low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
    const high = Math.floor(value / 4294967296);
    const low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
    const high = view.getInt32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
function getUint64(view, offset) {
    const high = view.getUint32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
//# sourceMappingURL=int.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/timestamp.mjs
// https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type


const EXT_TIMESTAMP = -1;
const TIMESTAMP32_MAX_SEC = 0x100000000 - 1; // 32-bit unsigned int
const TIMESTAMP64_MAX_SEC = 0x400000000 - 1; // 34-bit unsigned int
function encodeTimeSpecToTimestamp({ sec, nsec }) {
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        // Here sec >= 0 && nsec >= 0
        if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            const rv = new Uint8Array(4);
            const view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
        }
        else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            const secHigh = sec / 0x100000000;
            const secLow = sec & 0xffffffff;
            const rv = new Uint8Array(8);
            const view = new DataView(rv.buffer);
            // nsec30 | secHigh2
            view.setUint32(0, (nsec << 2) | (secHigh & 0x3));
            // secLow32
            view.setUint32(4, secLow);
            return rv;
        }
    }
    else {
        // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
        const rv = new Uint8Array(12);
        const view = new DataView(rv.buffer);
        view.setUint32(0, nsec);
        setInt64(view, 4, sec);
        return rv;
    }
}
function encodeDateToTimeSpec(date) {
    const msec = date.getTime();
    const sec = Math.floor(msec / 1e3);
    const nsec = (msec - sec * 1e3) * 1e6;
    // Normalizes { sec, nsec } to ensure nsec is unsigned.
    const nsecInSec = Math.floor(nsec / 1e9);
    return {
        sec: sec + nsecInSec,
        nsec: nsec - nsecInSec * 1e9,
    };
}
function encodeTimestampExtension(object) {
    if (object instanceof Date) {
        const timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
    }
    else {
        return null;
    }
}
function decodeTimestampToTimeSpec(data) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // data may be 32, 64, or 96 bits
    switch (data.byteLength) {
        case 4: {
            // timestamp 32 = { sec32 }
            const sec = view.getUint32(0);
            const nsec = 0;
            return { sec, nsec };
        }
        case 8: {
            // timestamp 64 = { nsec30, sec34 }
            const nsec30AndSecHigh2 = view.getUint32(0);
            const secLow32 = view.getUint32(4);
            const sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
            const nsec = nsec30AndSecHigh2 >>> 2;
            return { sec, nsec };
        }
        case 12: {
            // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
            const sec = getInt64(view, 4);
            const nsec = view.getUint32(0);
            return { sec, nsec };
        }
        default:
            throw new DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${data.length}`);
    }
}
function decodeTimestampExtension(data) {
    const timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
const timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension,
};
//# sourceMappingURL=timestamp.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs
// ExtensionCodec to handle MessagePack extensions


class ExtensionCodec {
    constructor() {
        // built-in extensions
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        // custom extensions
        this.encoders = [];
        this.decoders = [];
        this.register(timestampExtension);
    }
    register({ type, encode, decode, }) {
        if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
        }
        else {
            // built-in extensions
            const index = -1 - type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
        }
    }
    tryToEncode(object, context) {
        // built-in extensions
        for (let i = 0; i < this.builtInEncoders.length; i++) {
            const encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
                const data = encodeExt(object, context);
                if (data != null) {
                    const type = -1 - i;
                    return new ExtData(type, data);
                }
            }
        }
        // custom extensions
        for (let i = 0; i < this.encoders.length; i++) {
            const encodeExt = this.encoders[i];
            if (encodeExt != null) {
                const data = encodeExt(object, context);
                if (data != null) {
                    const type = i;
                    return new ExtData(type, data);
                }
            }
        }
        if (object instanceof ExtData) {
            // to keep ExtData as is
            return object;
        }
        return null;
    }
    decode(data, type, context) {
        const decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) {
            return decodeExt(data, type, context);
        }
        else {
            // decode() does not fail, returns ExtData instead.
            return new ExtData(type, data);
        }
    }
}
ExtensionCodec.defaultCodec = new ExtensionCodec();
//# sourceMappingURL=ExtensionCodec.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/utils/utf8.mjs
function utf8Count(str) {
    const strLength = str.length;
    let byteLength = 0;
    let pos = 0;
    while (pos < strLength) {
        let value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            byteLength++;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            byteLength += 2;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                byteLength += 3;
            }
            else {
                // 4-byte
                byteLength += 4;
            }
        }
    }
    return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
    const strLength = str.length;
    let offset = outputOffset;
    let pos = 0;
    while (pos < strLength) {
        let value = str.charCodeAt(pos++);
        if ((value & 0xffffff80) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        }
        else if ((value & 0xfffff800) === 0) {
            // 2-bytes
            output[offset++] = ((value >> 6) & 0x1f) | 0xc0;
        }
        else {
            // handle surrogate pair
            if (value >= 0xd800 && value <= 0xdbff) {
                // high surrogate
                if (pos < strLength) {
                    const extra = str.charCodeAt(pos);
                    if ((extra & 0xfc00) === 0xdc00) {
                        ++pos;
                        value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                    }
                }
            }
            if ((value & 0xffff0000) === 0) {
                // 3-byte
                output[offset++] = ((value >> 12) & 0x0f) | 0xe0;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
            else {
                // 4-byte
                output[offset++] = ((value >> 18) & 0x07) | 0xf0;
                output[offset++] = ((value >> 12) & 0x3f) | 0x80;
                output[offset++] = ((value >> 6) & 0x3f) | 0x80;
            }
        }
        output[offset++] = (value & 0x3f) | 0x80;
    }
}
// TextEncoder and TextDecoder are standardized in whatwg encoding:
// https://encoding.spec.whatwg.org/
// and available in all the modern browsers:
// https://caniuse.com/textencoder
// They are available in Node.js since v12 LTS as well:
// https://nodejs.org/api/globals.html#textencoder
const sharedTextEncoder = new TextEncoder();
// This threshold should be determined by benchmarking, which might vary in engines and input data.
// Run `npx ts-node benchmark/encode-string.ts` for details.
const TEXT_ENCODER_THRESHOLD = 50;
function utf8EncodeTE(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
function utf8Encode(str, output, outputOffset) {
    if (str.length > TEXT_ENCODER_THRESHOLD) {
        utf8EncodeTE(str, output, outputOffset);
    }
    else {
        utf8EncodeJs(str, output, outputOffset);
    }
}
const CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    let offset = inputOffset;
    const end = offset + byteLength;
    const units = [];
    let result = "";
    while (offset < end) {
        const byte1 = bytes[offset++];
        if ((byte1 & 0x80) === 0) {
            // 1 byte
            units.push(byte1);
        }
        else if ((byte1 & 0xe0) === 0xc0) {
            // 2 bytes
            const byte2 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 6) | byte2);
        }
        else if ((byte1 & 0xf0) === 0xe0) {
            // 3 bytes
            const byte2 = bytes[offset++] & 0x3f;
            const byte3 = bytes[offset++] & 0x3f;
            units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
        }
        else if ((byte1 & 0xf8) === 0xf0) {
            // 4 bytes
            const byte2 = bytes[offset++] & 0x3f;
            const byte3 = bytes[offset++] & 0x3f;
            const byte4 = bytes[offset++] & 0x3f;
            let unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
            if (unit > 0xffff) {
                unit -= 0x10000;
                units.push(((unit >>> 10) & 0x3ff) | 0xd800);
                unit = 0xdc00 | (unit & 0x3ff);
            }
            units.push(unit);
        }
        else {
            units.push(byte1);
        }
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode(...units);
            units.length = 0;
        }
    }
    if (units.length > 0) {
        result += String.fromCharCode(...units);
    }
    return result;
}
const sharedTextDecoder = new TextDecoder();
// This threshold should be determined by benchmarking, which might vary in engines and input data.
// Run `npx ts-node benchmark/decode-string.ts` for details.
const TEXT_DECODER_THRESHOLD = 200;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
}
function utf8Decode(bytes, inputOffset, byteLength) {
    if (byteLength > TEXT_DECODER_THRESHOLD) {
        return utf8DecodeTD(bytes, inputOffset, byteLength);
    }
    else {
        return utf8DecodeJs(bytes, inputOffset, byteLength);
    }
}
//# sourceMappingURL=utf8.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/utils/typedArrays.mjs
function isArrayBufferLike(buffer) {
    return (buffer instanceof ArrayBuffer || (typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer));
}
function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
        return buffer;
    }
    else if (ArrayBuffer.isView(buffer)) {
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    else if (isArrayBufferLike(buffer)) {
        return new Uint8Array(buffer);
    }
    else {
        // ArrayLike<number>
        return Uint8Array.from(buffer);
    }
}
//# sourceMappingURL=typedArrays.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/CachedKeyDecoder.mjs

const DEFAULT_MAX_KEY_LENGTH = 16;
const DEFAULT_MAX_LENGTH_PER_KEY = 16;
class CachedKeyDecoder {
    constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY) {
        this.hit = 0;
        this.miss = 0;
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        // avoid `new Array(N)`, which makes a sparse array,
        // because a sparse array is typically slower than a non-sparse array.
        this.caches = [];
        for (let i = 0; i < this.maxKeyLength; i++) {
            this.caches.push([]);
        }
    }
    canBeCached(byteLength) {
        return byteLength > 0 && byteLength <= this.maxKeyLength;
    }
    find(bytes, inputOffset, byteLength) {
        const records = this.caches[byteLength - 1];
        FIND_CHUNK: for (const record of records) {
            const recordBytes = record.bytes;
            for (let j = 0; j < byteLength; j++) {
                if (recordBytes[j] !== bytes[inputOffset + j]) {
                    continue FIND_CHUNK;
                }
            }
            return record.str;
        }
        return null;
    }
    store(bytes, value) {
        const records = this.caches[bytes.length - 1];
        const record = { bytes, str: value };
        if (records.length >= this.maxLengthPerKey) {
            // `records` are full!
            // Set `record` to an arbitrary position.
            records[(Math.random() * records.length) | 0] = record;
        }
        else {
            records.push(record);
        }
    }
    decode(bytes, inputOffset, byteLength) {
        const cachedValue = this.find(bytes, inputOffset, byteLength);
        if (cachedValue != null) {
            this.hit++;
            return cachedValue;
        }
        this.miss++;
        const str = utf8DecodeJs(bytes, inputOffset, byteLength);
        // Ensure to copy a slice of bytes because the bytes may be a NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
        const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
        this.store(slicedCopyOfBytes, str);
        return str;
    }
}
//# sourceMappingURL=CachedKeyDecoder.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/Decoder.mjs







const STATE_ARRAY = "array";
const STATE_MAP_KEY = "map_key";
const STATE_MAP_VALUE = "map_value";
const mapKeyConverter = (key) => {
    if (typeof key === "string" || typeof key === "number") {
        return key;
    }
    throw new DecodeError("The type of key must be string or number but " + typeof key);
};
class StackPool {
    constructor() {
        this.stack = [];
        this.stackHeadPosition = -1;
    }
    get length() {
        return this.stackHeadPosition + 1;
    }
    top() {
        return this.stack[this.stackHeadPosition];
    }
    pushArrayState(size) {
        const state = this.getUninitializedStateFromPool();
        state.type = STATE_ARRAY;
        state.position = 0;
        state.size = size;
        state.array = new Array(size);
    }
    pushMapState(size) {
        const state = this.getUninitializedStateFromPool();
        state.type = STATE_MAP_KEY;
        state.readCount = 0;
        state.size = size;
        state.map = {};
    }
    getUninitializedStateFromPool() {
        this.stackHeadPosition++;
        if (this.stackHeadPosition === this.stack.length) {
            const partialState = {
                type: undefined,
                size: 0,
                array: undefined,
                position: 0,
                readCount: 0,
                map: undefined,
                key: null,
            };
            this.stack.push(partialState);
        }
        return this.stack[this.stackHeadPosition];
    }
    release(state) {
        const topStackState = this.stack[this.stackHeadPosition];
        if (topStackState !== state) {
            throw new Error("Invalid stack state. Released state is not on top of the stack.");
        }
        if (state.type === STATE_ARRAY) {
            const partialState = state;
            partialState.size = 0;
            partialState.array = undefined;
            partialState.position = 0;
            partialState.type = undefined;
        }
        if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
            const partialState = state;
            partialState.size = 0;
            partialState.map = undefined;
            partialState.readCount = 0;
            partialState.type = undefined;
        }
        this.stackHeadPosition--;
    }
    reset() {
        this.stack.length = 0;
        this.stackHeadPosition = -1;
    }
}
const HEAD_BYTE_REQUIRED = -1;
const EMPTY_VIEW = new DataView(new ArrayBuffer(0));
const EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
try {
    // IE11: The spec says it should throw RangeError,
    // IE11: but in IE11 it throws TypeError.
    EMPTY_VIEW.getInt8(0);
}
catch (e) {
    if (!(e instanceof RangeError)) {
        throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
    }
}
const MORE_DATA = new RangeError("Insufficient data");
const sharedCachedKeyDecoder = new CachedKeyDecoder();
class Decoder_Decoder {
    constructor(options) {
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = new StackPool();
        this.entered = false;
        this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
        this.context = options?.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined
        this.useBigInt64 = options?.useBigInt64 ?? false;
        this.rawStrings = options?.rawStrings ?? false;
        this.maxStrLength = options?.maxStrLength ?? UINT32_MAX;
        this.maxBinLength = options?.maxBinLength ?? UINT32_MAX;
        this.maxArrayLength = options?.maxArrayLength ?? UINT32_MAX;
        this.maxMapLength = options?.maxMapLength ?? UINT32_MAX;
        this.maxExtLength = options?.maxExtLength ?? UINT32_MAX;
        this.keyDecoder = options?.keyDecoder !== undefined ? options.keyDecoder : sharedCachedKeyDecoder;
        this.mapKeyConverter = options?.mapKeyConverter ?? mapKeyConverter;
    }
    clone() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return new Decoder_Decoder({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            rawStrings: this.rawStrings,
            maxStrLength: this.maxStrLength,
            maxBinLength: this.maxBinLength,
            maxArrayLength: this.maxArrayLength,
            maxMapLength: this.maxMapLength,
            maxExtLength: this.maxExtLength,
            keyDecoder: this.keyDecoder,
        });
    }
    reinitializeState() {
        this.totalPos = 0;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack.reset();
        // view, bytes, and pos will be re-initialized in setBuffer()
    }
    setBuffer(buffer) {
        const bytes = ensureUint8Array(buffer);
        this.bytes = bytes;
        this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        this.pos = 0;
    }
    appendBuffer(buffer) {
        if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
            this.setBuffer(buffer);
        }
        else {
            const remainingData = this.bytes.subarray(this.pos);
            const newData = ensureUint8Array(buffer);
            // concat remainingData + newData
            const newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
        }
    }
    hasRemaining(size) {
        return this.view.byteLength - this.pos >= size;
    }
    createExtraByteError(posToShow) {
        const { view, pos } = this;
        return new RangeError(`Extra ${view.byteLength - pos} of ${view.byteLength} byte(s) found at buffer[${posToShow}]`);
    }
    /**
     * @throws {@link DecodeError}
     * @throws {@link RangeError}
     */
    decode(buffer) {
        if (this.entered) {
            const instance = this.clone();
            return instance.decode(buffer);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.setBuffer(buffer);
            const object = this.doDecodeSync();
            if (this.hasRemaining(1)) {
                throw this.createExtraByteError(this.pos);
            }
            return object;
        }
        finally {
            this.entered = false;
        }
    }
    *decodeMulti(buffer) {
        if (this.entered) {
            const instance = this.clone();
            yield* instance.decodeMulti(buffer);
            return;
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.setBuffer(buffer);
            while (this.hasRemaining(1)) {
                yield this.doDecodeSync();
            }
        }
        finally {
            this.entered = false;
        }
    }
    async decodeAsync(stream) {
        if (this.entered) {
            const instance = this.clone();
            return instance.decodeAsync(stream);
        }
        try {
            this.entered = true;
            let decoded = false;
            let object;
            for await (const buffer of stream) {
                if (decoded) {
                    this.entered = false;
                    throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(buffer);
                try {
                    object = this.doDecodeSync();
                    decoded = true;
                }
                catch (e) {
                    if (!(e instanceof RangeError)) {
                        throw e; // rethrow
                    }
                    // fallthrough
                }
                this.totalPos += this.pos;
            }
            if (decoded) {
                if (this.hasRemaining(1)) {
                    throw this.createExtraByteError(this.totalPos);
                }
                return object;
            }
            const { headByte, pos, totalPos } = this;
            throw new RangeError(`Insufficient data in parsing ${prettyByte(headByte)} at ${totalPos} (${pos} in the current buffer)`);
        }
        finally {
            this.entered = false;
        }
    }
    decodeArrayStream(stream) {
        return this.decodeMultiAsync(stream, true);
    }
    decodeStream(stream) {
        return this.decodeMultiAsync(stream, false);
    }
    async *decodeMultiAsync(stream, isArray) {
        if (this.entered) {
            const instance = this.clone();
            yield* instance.decodeMultiAsync(stream, isArray);
            return;
        }
        try {
            this.entered = true;
            let isArrayHeaderRequired = isArray;
            let arrayItemsLeft = -1;
            for await (const buffer of stream) {
                if (isArray && arrayItemsLeft === 0) {
                    throw this.createExtraByteError(this.totalPos);
                }
                this.appendBuffer(buffer);
                if (isArrayHeaderRequired) {
                    arrayItemsLeft = this.readArraySize();
                    isArrayHeaderRequired = false;
                    this.complete();
                }
                try {
                    while (true) {
                        yield this.doDecodeSync();
                        if (--arrayItemsLeft === 0) {
                            break;
                        }
                    }
                }
                catch (e) {
                    if (!(e instanceof RangeError)) {
                        throw e; // rethrow
                    }
                    // fallthrough
                }
                this.totalPos += this.pos;
            }
        }
        finally {
            this.entered = false;
        }
    }
    doDecodeSync() {
        DECODE: while (true) {
            const headByte = this.readHeadByte();
            let object;
            if (headByte >= 0xe0) {
                // negative fixint (111x xxxx) 0xe0 - 0xff
                object = headByte - 0x100;
            }
            else if (headByte < 0xc0) {
                if (headByte < 0x80) {
                    // positive fixint (0xxx xxxx) 0x00 - 0x7f
                    object = headByte;
                }
                else if (headByte < 0x90) {
                    // fixmap (1000 xxxx) 0x80 - 0x8f
                    const size = headByte - 0x80;
                    if (size !== 0) {
                        this.pushMapState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = {};
                    }
                }
                else if (headByte < 0xa0) {
                    // fixarray (1001 xxxx) 0x90 - 0x9f
                    const size = headByte - 0x90;
                    if (size !== 0) {
                        this.pushArrayState(size);
                        this.complete();
                        continue DECODE;
                    }
                    else {
                        object = [];
                    }
                }
                else {
                    // fixstr (101x xxxx) 0xa0 - 0xbf
                    const byteLength = headByte - 0xa0;
                    object = this.decodeString(byteLength, 0);
                }
            }
            else if (headByte === 0xc0) {
                // nil
                object = null;
            }
            else if (headByte === 0xc2) {
                // false
                object = false;
            }
            else if (headByte === 0xc3) {
                // true
                object = true;
            }
            else if (headByte === 0xca) {
                // float 32
                object = this.readF32();
            }
            else if (headByte === 0xcb) {
                // float 64
                object = this.readF64();
            }
            else if (headByte === 0xcc) {
                // uint 8
                object = this.readU8();
            }
            else if (headByte === 0xcd) {
                // uint 16
                object = this.readU16();
            }
            else if (headByte === 0xce) {
                // uint 32
                object = this.readU32();
            }
            else if (headByte === 0xcf) {
                // uint 64
                if (this.useBigInt64) {
                    object = this.readU64AsBigInt();
                }
                else {
                    object = this.readU64();
                }
            }
            else if (headByte === 0xd0) {
                // int 8
                object = this.readI8();
            }
            else if (headByte === 0xd1) {
                // int 16
                object = this.readI16();
            }
            else if (headByte === 0xd2) {
                // int 32
                object = this.readI32();
            }
            else if (headByte === 0xd3) {
                // int 64
                if (this.useBigInt64) {
                    object = this.readI64AsBigInt();
                }
                else {
                    object = this.readI64();
                }
            }
            else if (headByte === 0xd9) {
                // str 8
                const byteLength = this.lookU8();
                object = this.decodeString(byteLength, 1);
            }
            else if (headByte === 0xda) {
                // str 16
                const byteLength = this.lookU16();
                object = this.decodeString(byteLength, 2);
            }
            else if (headByte === 0xdb) {
                // str 32
                const byteLength = this.lookU32();
                object = this.decodeString(byteLength, 4);
            }
            else if (headByte === 0xdc) {
                // array 16
                const size = this.readU16();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xdd) {
                // array 32
                const size = this.readU32();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = [];
                }
            }
            else if (headByte === 0xde) {
                // map 16
                const size = this.readU16();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xdf) {
                // map 32
                const size = this.readU32();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                }
                else {
                    object = {};
                }
            }
            else if (headByte === 0xc4) {
                // bin 8
                const size = this.lookU8();
                object = this.decodeBinary(size, 1);
            }
            else if (headByte === 0xc5) {
                // bin 16
                const size = this.lookU16();
                object = this.decodeBinary(size, 2);
            }
            else if (headByte === 0xc6) {
                // bin 32
                const size = this.lookU32();
                object = this.decodeBinary(size, 4);
            }
            else if (headByte === 0xd4) {
                // fixext 1
                object = this.decodeExtension(1, 0);
            }
            else if (headByte === 0xd5) {
                // fixext 2
                object = this.decodeExtension(2, 0);
            }
            else if (headByte === 0xd6) {
                // fixext 4
                object = this.decodeExtension(4, 0);
            }
            else if (headByte === 0xd7) {
                // fixext 8
                object = this.decodeExtension(8, 0);
            }
            else if (headByte === 0xd8) {
                // fixext 16
                object = this.decodeExtension(16, 0);
            }
            else if (headByte === 0xc7) {
                // ext 8
                const size = this.lookU8();
                object = this.decodeExtension(size, 1);
            }
            else if (headByte === 0xc8) {
                // ext 16
                const size = this.lookU16();
                object = this.decodeExtension(size, 2);
            }
            else if (headByte === 0xc9) {
                // ext 32
                const size = this.lookU32();
                object = this.decodeExtension(size, 4);
            }
            else {
                throw new DecodeError(`Unrecognized type byte: ${prettyByte(headByte)}`);
            }
            this.complete();
            const stack = this.stack;
            while (stack.length > 0) {
                // arrays and maps
                const state = stack.top();
                if (state.type === STATE_ARRAY) {
                    state.array[state.position] = object;
                    state.position++;
                    if (state.position === state.size) {
                        object = state.array;
                        stack.release(state);
                    }
                    else {
                        continue DECODE;
                    }
                }
                else if (state.type === STATE_MAP_KEY) {
                    if (object === "__proto__") {
                        throw new DecodeError("The key __proto__ is not allowed");
                    }
                    state.key = this.mapKeyConverter(object);
                    state.type = STATE_MAP_VALUE;
                    continue DECODE;
                }
                else {
                    // it must be `state.type === State.MAP_VALUE` here
                    state.map[state.key] = object;
                    state.readCount++;
                    if (state.readCount === state.size) {
                        object = state.map;
                        stack.release(state);
                    }
                    else {
                        state.key = null;
                        state.type = STATE_MAP_KEY;
                        continue DECODE;
                    }
                }
            }
            return object;
        }
    }
    readHeadByte() {
        if (this.headByte === HEAD_BYTE_REQUIRED) {
            this.headByte = this.readU8();
            // console.log("headByte", prettyByte(this.headByte));
        }
        return this.headByte;
    }
    complete() {
        this.headByte = HEAD_BYTE_REQUIRED;
    }
    readArraySize() {
        const headByte = this.readHeadByte();
        switch (headByte) {
            case 0xdc:
                return this.readU16();
            case 0xdd:
                return this.readU32();
            default: {
                if (headByte < 0xa0) {
                    return headByte - 0x90;
                }
                else {
                    throw new DecodeError(`Unrecognized array type byte: ${prettyByte(headByte)}`);
                }
            }
        }
    }
    pushMapState(size) {
        if (size > this.maxMapLength) {
            throw new DecodeError(`Max length exceeded: map length (${size}) > maxMapLengthLength (${this.maxMapLength})`);
        }
        this.stack.pushMapState(size);
    }
    pushArrayState(size) {
        if (size > this.maxArrayLength) {
            throw new DecodeError(`Max length exceeded: array length (${size}) > maxArrayLength (${this.maxArrayLength})`);
        }
        this.stack.pushArrayState(size);
    }
    decodeString(byteLength, headerOffset) {
        if (!this.rawStrings || this.stateIsMapKey()) {
            return this.decodeUtf8String(byteLength, headerOffset);
        }
        return this.decodeBinary(byteLength, headerOffset);
    }
    /**
     * @throws {@link RangeError}
     */
    decodeUtf8String(byteLength, headerOffset) {
        if (byteLength > this.maxStrLength) {
            throw new DecodeError(`Max length exceeded: UTF-8 byte length (${byteLength}) > maxStrLength (${this.maxStrLength})`);
        }
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
            throw MORE_DATA;
        }
        const offset = this.pos + headerOffset;
        let object;
        if (this.stateIsMapKey() && this.keyDecoder?.canBeCached(byteLength)) {
            object = this.keyDecoder.decode(this.bytes, offset, byteLength);
        }
        else {
            object = utf8Decode(this.bytes, offset, byteLength);
        }
        this.pos += headerOffset + byteLength;
        return object;
    }
    stateIsMapKey() {
        if (this.stack.length > 0) {
            const state = this.stack.top();
            return state.type === STATE_MAP_KEY;
        }
        return false;
    }
    /**
     * @throws {@link RangeError}
     */
    decodeBinary(byteLength, headOffset) {
        if (byteLength > this.maxBinLength) {
            throw new DecodeError(`Max length exceeded: bin length (${byteLength}) > maxBinLength (${this.maxBinLength})`);
        }
        if (!this.hasRemaining(byteLength + headOffset)) {
            throw MORE_DATA;
        }
        const offset = this.pos + headOffset;
        const object = this.bytes.subarray(offset, offset + byteLength);
        this.pos += headOffset + byteLength;
        return object;
    }
    decodeExtension(size, headOffset) {
        if (size > this.maxExtLength) {
            throw new DecodeError(`Max length exceeded: ext length (${size}) > maxExtLength (${this.maxExtLength})`);
        }
        const extType = this.view.getInt8(this.pos + headOffset);
        const data = this.decodeBinary(size, headOffset + 1 /* extType */);
        return this.extensionCodec.decode(data, extType, this.context);
    }
    lookU8() {
        return this.view.getUint8(this.pos);
    }
    lookU16() {
        return this.view.getUint16(this.pos);
    }
    lookU32() {
        return this.view.getUint32(this.pos);
    }
    readU8() {
        const value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
    }
    readI8() {
        const value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
    }
    readU16() {
        const value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
    }
    readI16() {
        const value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
    }
    readU32() {
        const value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
    }
    readI32() {
        const value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
    }
    readU64() {
        const value = getUint64(this.view, this.pos);
        this.pos += 8;
        return value;
    }
    readI64() {
        const value = getInt64(this.view, this.pos);
        this.pos += 8;
        return value;
    }
    readU64AsBigInt() {
        const value = this.view.getBigUint64(this.pos);
        this.pos += 8;
        return value;
    }
    readI64AsBigInt() {
        const value = this.view.getBigInt64(this.pos);
        this.pos += 8;
        return value;
    }
    readF32() {
        const value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
    }
    readF64() {
        const value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
    }
}
//# sourceMappingURL=Decoder.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/decode.mjs

/**
 * It decodes a single MessagePack object in a buffer.
 *
 * This is a synchronous decoding function.
 * See other variants for asynchronous decoding: {@link decodeAsync}, {@link decodeMultiStream}, or {@link decodeArrayStream}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */
function decode(buffer, options) {
    const decoder = new Decoder_Decoder(options);
    return decoder.decode(buffer);
}
/**
 * It decodes multiple MessagePack objects in a buffer.
 * This is corresponding to {@link decodeMultiStream}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */
function decodeMulti(buffer, options) {
    const decoder = new Decoder(options);
    return decoder.decodeMulti(buffer);
}
//# sourceMappingURL=decode.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/Encoder.mjs




const DEFAULT_MAX_DEPTH = 100;
const DEFAULT_INITIAL_BUFFER_SIZE = 2048;
class Encoder {
    constructor(options) {
        this.entered = false;
        this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
        this.context = options?.context; // needs a type assertion because EncoderOptions has no context property when ContextType is undefined
        this.useBigInt64 = options?.useBigInt64 ?? false;
        this.maxDepth = options?.maxDepth ?? DEFAULT_MAX_DEPTH;
        this.initialBufferSize = options?.initialBufferSize ?? DEFAULT_INITIAL_BUFFER_SIZE;
        this.sortKeys = options?.sortKeys ?? false;
        this.forceFloat32 = options?.forceFloat32 ?? false;
        this.ignoreUndefined = options?.ignoreUndefined ?? false;
        this.forceIntegerToFloat = options?.forceIntegerToFloat ?? false;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
        // Because of slightly special argument `context`,
        // type assertion is needed.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return new Encoder({
            extensionCodec: this.extensionCodec,
            context: this.context,
            useBigInt64: this.useBigInt64,
            maxDepth: this.maxDepth,
            initialBufferSize: this.initialBufferSize,
            sortKeys: this.sortKeys,
            forceFloat32: this.forceFloat32,
            ignoreUndefined: this.ignoreUndefined,
            forceIntegerToFloat: this.forceIntegerToFloat,
        });
    }
    reinitializeState() {
        this.pos = 0;
    }
    /**
     * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
     *
     * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
     */
    encodeSharedRef(object) {
        if (this.entered) {
            const instance = this.clone();
            return instance.encodeSharedRef(object);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.subarray(0, this.pos);
        }
        finally {
            this.entered = false;
        }
    }
    /**
     * @returns Encodes the object and returns a copy of the encoder's internal buffer.
     */
    encode(object) {
        if (this.entered) {
            const instance = this.clone();
            return instance.encode(object);
        }
        try {
            this.entered = true;
            this.reinitializeState();
            this.doEncode(object, 1);
            return this.bytes.slice(0, this.pos);
        }
        finally {
            this.entered = false;
        }
    }
    doEncode(object, depth) {
        if (depth > this.maxDepth) {
            throw new Error(`Too deep objects in depth ${depth}`);
        }
        if (object == null) {
            this.encodeNil();
        }
        else if (typeof object === "boolean") {
            this.encodeBoolean(object);
        }
        else if (typeof object === "number") {
            if (!this.forceIntegerToFloat) {
                this.encodeNumber(object);
            }
            else {
                this.encodeNumberAsFloat(object);
            }
        }
        else if (typeof object === "string") {
            this.encodeString(object);
        }
        else if (this.useBigInt64 && typeof object === "bigint") {
            this.encodeBigInt64(object);
        }
        else {
            this.encodeObject(object, depth);
        }
    }
    ensureBufferSizeToWrite(sizeToWrite) {
        const requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) {
            this.resizeBuffer(requiredSize * 2);
        }
    }
    resizeBuffer(newSize) {
        const newBuffer = new ArrayBuffer(newSize);
        const newBytes = new Uint8Array(newBuffer);
        const newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
    }
    encodeNil() {
        this.writeU8(0xc0);
    }
    encodeBoolean(object) {
        if (object === false) {
            this.writeU8(0xc2);
        }
        else {
            this.writeU8(0xc3);
        }
    }
    encodeNumber(object) {
        if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
            if (object >= 0) {
                if (object < 0x80) {
                    // positive fixint
                    this.writeU8(object);
                }
                else if (object < 0x100) {
                    // uint 8
                    this.writeU8(0xcc);
                    this.writeU8(object);
                }
                else if (object < 0x10000) {
                    // uint 16
                    this.writeU8(0xcd);
                    this.writeU16(object);
                }
                else if (object < 0x100000000) {
                    // uint 32
                    this.writeU8(0xce);
                    this.writeU32(object);
                }
                else if (!this.useBigInt64) {
                    // uint 64
                    this.writeU8(0xcf);
                    this.writeU64(object);
                }
                else {
                    this.encodeNumberAsFloat(object);
                }
            }
            else {
                if (object >= -0x20) {
                    // negative fixint
                    this.writeU8(0xe0 | (object + 0x20));
                }
                else if (object >= -0x80) {
                    // int 8
                    this.writeU8(0xd0);
                    this.writeI8(object);
                }
                else if (object >= -0x8000) {
                    // int 16
                    this.writeU8(0xd1);
                    this.writeI16(object);
                }
                else if (object >= -0x80000000) {
                    // int 32
                    this.writeU8(0xd2);
                    this.writeI32(object);
                }
                else if (!this.useBigInt64) {
                    // int 64
                    this.writeU8(0xd3);
                    this.writeI64(object);
                }
                else {
                    this.encodeNumberAsFloat(object);
                }
            }
        }
        else {
            this.encodeNumberAsFloat(object);
        }
    }
    encodeNumberAsFloat(object) {
        if (this.forceFloat32) {
            // float 32
            this.writeU8(0xca);
            this.writeF32(object);
        }
        else {
            // float 64
            this.writeU8(0xcb);
            this.writeF64(object);
        }
    }
    encodeBigInt64(object) {
        if (object >= BigInt(0)) {
            // uint 64
            this.writeU8(0xcf);
            this.writeBigUint64(object);
        }
        else {
            // int 64
            this.writeU8(0xd3);
            this.writeBigInt64(object);
        }
    }
    writeStringHeader(byteLength) {
        if (byteLength < 32) {
            // fixstr
            this.writeU8(0xa0 + byteLength);
        }
        else if (byteLength < 0x100) {
            // str 8
            this.writeU8(0xd9);
            this.writeU8(byteLength);
        }
        else if (byteLength < 0x10000) {
            // str 16
            this.writeU8(0xda);
            this.writeU16(byteLength);
        }
        else if (byteLength < 0x100000000) {
            // str 32
            this.writeU8(0xdb);
            this.writeU32(byteLength);
        }
        else {
            throw new Error(`Too long string: ${byteLength} bytes in UTF-8`);
        }
    }
    encodeString(object) {
        const maxHeaderSize = 1 + 4;
        const byteLength = utf8Count(object);
        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
        this.writeStringHeader(byteLength);
        utf8Encode(object, this.bytes, this.pos);
        this.pos += byteLength;
    }
    encodeObject(object, depth) {
        // try to encode objects with custom codec first of non-primitives
        const ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) {
            this.encodeExtension(ext);
        }
        else if (Array.isArray(object)) {
            this.encodeArray(object, depth);
        }
        else if (ArrayBuffer.isView(object)) {
            this.encodeBinary(object);
        }
        else if (typeof object === "object") {
            this.encodeMap(object, depth);
        }
        else {
            // symbol, function and other special object come here unless extensionCodec handles them.
            throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(object)}`);
        }
    }
    encodeBinary(object) {
        const size = object.byteLength;
        if (size < 0x100) {
            // bin 8
            this.writeU8(0xc4);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // bin 16
            this.writeU8(0xc5);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // bin 32
            this.writeU8(0xc6);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large binary: ${size}`);
        }
        const bytes = ensureUint8Array(object);
        this.writeU8a(bytes);
    }
    encodeArray(object, depth) {
        const size = object.length;
        if (size < 16) {
            // fixarray
            this.writeU8(0x90 + size);
        }
        else if (size < 0x10000) {
            // array 16
            this.writeU8(0xdc);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // array 32
            this.writeU8(0xdd);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large array: ${size}`);
        }
        for (const item of object) {
            this.doEncode(item, depth + 1);
        }
    }
    countWithoutUndefined(object, keys) {
        let count = 0;
        for (const key of keys) {
            if (object[key] !== undefined) {
                count++;
            }
        }
        return count;
    }
    encodeMap(object, depth) {
        const keys = Object.keys(object);
        if (this.sortKeys) {
            keys.sort();
        }
        const size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
        if (size < 16) {
            // fixmap
            this.writeU8(0x80 + size);
        }
        else if (size < 0x10000) {
            // map 16
            this.writeU8(0xde);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // map 32
            this.writeU8(0xdf);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large map object: ${size}`);
        }
        for (const key of keys) {
            const value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
                this.encodeString(key);
                this.doEncode(value, depth + 1);
            }
        }
    }
    encodeExtension(ext) {
        if (typeof ext.data === "function") {
            const data = ext.data(this.pos + 6);
            const size = data.length;
            if (size >= 0x100000000) {
                throw new Error(`Too large extension object: ${size}`);
            }
            this.writeU8(0xc9);
            this.writeU32(size);
            this.writeI8(ext.type);
            this.writeU8a(data);
            return;
        }
        const size = ext.data.length;
        if (size === 1) {
            // fixext 1
            this.writeU8(0xd4);
        }
        else if (size === 2) {
            // fixext 2
            this.writeU8(0xd5);
        }
        else if (size === 4) {
            // fixext 4
            this.writeU8(0xd6);
        }
        else if (size === 8) {
            // fixext 8
            this.writeU8(0xd7);
        }
        else if (size === 16) {
            // fixext 16
            this.writeU8(0xd8);
        }
        else if (size < 0x100) {
            // ext 8
            this.writeU8(0xc7);
            this.writeU8(size);
        }
        else if (size < 0x10000) {
            // ext 16
            this.writeU8(0xc8);
            this.writeU16(size);
        }
        else if (size < 0x100000000) {
            // ext 32
            this.writeU8(0xc9);
            this.writeU32(size);
        }
        else {
            throw new Error(`Too large extension object: ${size}`);
        }
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
    }
    writeU8(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
    }
    writeU8a(values) {
        const size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
    }
    writeI8(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
    }
    writeU16(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
    }
    writeI16(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
    }
    writeU32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
    }
    writeI32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
    }
    writeF32(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
    }
    writeF64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
    }
    writeU64(value) {
        this.ensureBufferSizeToWrite(8);
        setUint64(this.view, this.pos, value);
        this.pos += 8;
    }
    writeI64(value) {
        this.ensureBufferSizeToWrite(8);
        setInt64(this.view, this.pos, value);
        this.pos += 8;
    }
    writeBigUint64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigUint64(this.pos, value);
        this.pos += 8;
    }
    writeBigInt64(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setBigInt64(this.pos, value);
        this.pos += 8;
    }
}
//# sourceMappingURL=Encoder.mjs.map
;// ./node_modules/@msgpack/msgpack/dist.esm/encode.mjs

/**
 * It encodes `value` in the MessagePack format and
 * returns a byte buffer.
 *
 * The returned buffer is a slice of a larger `ArrayBuffer`, so you have to use its `#byteOffset` and `#byteLength` in order to convert it to another typed arrays including NodeJS `Buffer`.
 */
function encode(value, options) {
    const encoder = new Encoder(options);
    return encoder.encodeSharedRef(value);
}
//# sourceMappingURL=encode.mjs.map
;// ./node_modules/@scure/base/lib/esm/index.js
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function isBytes(a) {
    return a instanceof Uint8Array || (ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array');
}
/** Asserts something is Uint8Array. */
function abytes(b, ...lengths) {
    if (!isBytes(b))
        throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
function isArrayOf(isString, arr) {
    if (!Array.isArray(arr))
        return false;
    if (arr.length === 0)
        return true;
    if (isString) {
        return arr.every((item) => typeof item === 'string');
    }
    else {
        return arr.every((item) => Number.isSafeInteger(item));
    }
}
// no abytes: seems to have 10% slowdown. Why?!
function afn(input) {
    if (typeof input !== 'function')
        throw new Error('function expected');
    return true;
}
function astr(label, input) {
    if (typeof input !== 'string')
        throw new Error(`${label}: string expected`);
    return true;
}
function anumber(n) {
    if (!Number.isSafeInteger(n))
        throw new Error(`invalid integer: ${n}`);
}
function aArr(input) {
    if (!Array.isArray(input))
        throw new Error('array expected');
}
function astrArr(label, input) {
    if (!isArrayOf(true, input))
        throw new Error(`${label}: array of strings expected`);
}
function anumArr(label, input) {
    if (!isArrayOf(false, input))
        throw new Error(`${label}: array of numbers expected`);
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function chain(...args) {
    const id = (a) => a;
    // Wrap call in closure so JIT can inline calls
    const wrap = (a, b) => (c) => a(b(c));
    // Construct chain of args[-1].encode(args[-2].encode([...]))
    const encode = args.map((x) => x.encode).reduceRight(wrap, id);
    // Construct chain of args[0].decode(args[1].decode(...))
    const decode = args.map((x) => x.decode).reduce(wrap, id);
    return { encode, decode };
}
/**
 * Encodes integer radix representation to array of strings using alphabet and back.
 * Could also be array of strings.
 * @__NO_SIDE_EFFECTS__
 */
function alphabet(letters) {
    // mapping 1 to "b"
    const lettersA = typeof letters === 'string' ? letters.split('') : letters;
    const len = lettersA.length;
    astrArr('alphabet', lettersA);
    // mapping "b" to 1
    const indexes = new Map(lettersA.map((l, i) => [l, i]));
    return {
        encode: (digits) => {
            aArr(digits);
            return digits.map((i) => {
                if (!Number.isSafeInteger(i) || i < 0 || i >= len)
                    throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
                return lettersA[i];
            });
        },
        decode: (input) => {
            aArr(input);
            return input.map((letter) => {
                astr('alphabet.decode', letter);
                const i = indexes.get(letter);
                if (i === undefined)
                    throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
                return i;
            });
        },
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function join(separator = '') {
    astr('join', separator);
    return {
        encode: (from) => {
            astrArr('join.decode', from);
            return from.join(separator);
        },
        decode: (to) => {
            astr('join.decode', to);
            return to.split(separator);
        },
    };
}
/**
 * Pad strings array so it has integer number of bits
 * @__NO_SIDE_EFFECTS__
 */
function padding(bits, chr = '=') {
    anumber(bits);
    astr('padding', chr);
    return {
        encode(data) {
            astrArr('padding.encode', data);
            while ((data.length * bits) % 8)
                data.push(chr);
            return data;
        },
        decode(input) {
            astrArr('padding.decode', input);
            let end = input.length;
            if ((end * bits) % 8)
                throw new Error('padding: invalid, string should have whole number of bytes');
            for (; end > 0 && input[end - 1] === chr; end--) {
                const last = end - 1;
                const byte = last * bits;
                if (byte % 8 === 0)
                    throw new Error('padding: invalid, string has too much padding');
            }
            return input.slice(0, end);
        },
    };
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function normalize(fn) {
    afn(fn);
    return { encode: (from) => from, decode: (to) => fn(to) };
}
/**
 * Slow: O(n^2) time complexity
 */
function convertRadix(data, from, to) {
    // base 1 is impossible
    if (from < 2)
        throw new Error(`convertRadix: invalid from=${from}, base cannot be less than 2`);
    if (to < 2)
        throw new Error(`convertRadix: invalid to=${to}, base cannot be less than 2`);
    aArr(data);
    if (!data.length)
        return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data, (d) => {
        anumber(d);
        if (d < 0 || d >= from)
            throw new Error(`invalid integer: ${d}`);
        return d;
    });
    const dlen = digits.length;
    while (true) {
        let carry = 0;
        let done = true;
        for (let i = pos; i < dlen; i++) {
            const digit = digits[i];
            const fromCarry = from * carry;
            const digitBase = fromCarry + digit;
            if (!Number.isSafeInteger(digitBase) ||
                fromCarry / from !== carry ||
                digitBase - digit !== fromCarry) {
                throw new Error('convertRadix: carry overflow');
            }
            const div = digitBase / to;
            carry = digitBase % to;
            const rounded = Math.floor(div);
            digits[i] = rounded;
            if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
                throw new Error('convertRadix: carry overflow');
            if (!done)
                continue;
            else if (!rounded)
                pos = i;
            else
                done = false;
        }
        res.push(carry);
        if (done)
            break;
    }
    for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
        res.push(0);
    return res.reverse();
}
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from, to) => from + (to - gcd(from, to));
const powers = /* @__PURE__ */ (() => {
    let res = [];
    for (let i = 0; i < 40; i++)
        res.push(2 ** i);
    return res;
})();
/**
 * Implemented with numbers, because BigInt is 5x slower
 */
function convertRadix2(data, from, to, padding) {
    aArr(data);
    if (from <= 0 || from > 32)
        throw new Error(`convertRadix2: wrong from=${from}`);
    if (to <= 0 || to > 32)
        throw new Error(`convertRadix2: wrong to=${to}`);
    if (radix2carry(from, to) > 32) {
        throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
    }
    let carry = 0;
    let pos = 0; // bitwise position in current element
    const max = powers[from];
    const mask = powers[to] - 1;
    const res = [];
    for (const n of data) {
        anumber(n);
        if (n >= max)
            throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = (carry << from) | n;
        if (pos + from > 32)
            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for (; pos >= to; pos -= to)
            res.push(((carry >> (pos - to)) & mask) >>> 0);
        const pow = powers[pos];
        if (pow === undefined)
            throw new Error('invalid carry');
        carry &= pow - 1; // clean carry, otherwise it will cause overflow
    }
    carry = (carry << (to - pos)) & mask;
    if (!padding && pos >= from)
        throw new Error('Excess padding');
    if (!padding && carry > 0)
        throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0)
        res.push(carry >>> 0);
    return res;
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function radix(num) {
    anumber(num);
    const _256 = 2 ** 8;
    return {
        encode: (bytes) => {
            if (!isBytes(bytes))
                throw new Error('radix.encode input should be Uint8Array');
            return convertRadix(Array.from(bytes), _256, num);
        },
        decode: (digits) => {
            anumArr('radix.decode', digits);
            return Uint8Array.from(convertRadix(digits, num, _256));
        },
    };
}
/**
 * If both bases are power of same number (like `2**8 <-> 2**64`),
 * there is a linear algorithm. For now we have implementation for power-of-two bases only.
 * @__NO_SIDE_EFFECTS__
 */
function radix2(bits, revPadding = false) {
    anumber(bits);
    if (bits <= 0 || bits > 32)
        throw new Error('radix2: bits should be in (0..32]');
    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
        throw new Error('radix2: carry overflow');
    return {
        encode: (bytes) => {
            if (!isBytes(bytes))
                throw new Error('radix2.encode input should be Uint8Array');
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits) => {
            anumArr('radix2.decode', digits);
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        },
    };
}
function unsafeWrapper(fn) {
    afn(fn);
    return function (...args) {
        try {
            return fn.apply(null, args);
        }
        catch (e) { }
    };
}
function checksum(len, fn) {
    anumber(len);
    afn(fn);
    return {
        encode(data) {
            if (!isBytes(data))
                throw new Error('checksum.encode: input should be Uint8Array');
            const sum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(sum, data.length);
            return res;
        },
        decode(data) {
            if (!isBytes(data))
                throw new Error('checksum.decode: input should be Uint8Array');
            const payload = data.slice(0, -len);
            const oldChecksum = data.slice(-len);
            const newChecksum = fn(payload).slice(0, len);
            for (let i = 0; i < len; i++)
                if (newChecksum[i] !== oldChecksum[i])
                    throw new Error('Invalid checksum');
            return payload;
        },
    };
}
// prettier-ignore
const utils = {
    alphabet, chain, checksum, convertRadix, convertRadix2, radix, radix2, join, padding,
};
// RFC 4648 aka RFC 3548
// ---------------------
/**
 * base16 encoding from RFC 4648.
 * @example
 * ```js
 * base16.encode(Uint8Array.from([0x12, 0xab]));
 * // => '12AB'
 * ```
 */
const base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
/**
 * base32 encoding from RFC 4648. Has padding.
 * Use `base32nopad` for unpadded version.
 * Also check out `base32hex`, `base32hexnopad`, `base32crockford`.
 * @example
 * ```js
 * base32.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'CKVQ===='
 * base32.decode('CKVQ====');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
/**
 * base32 encoding from RFC 4648. No padding.
 * Use `base32` for padded version.
 * Also check out `base32hex`, `base32hexnopad`, `base32crockford`.
 * @example
 * ```js
 * base32nopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'CKVQ'
 * base32nopad.decode('CKVQ');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32nopad = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), join(''));
/**
 * base32 encoding from RFC 4648. Padded. Compared to ordinary `base32`, slightly different alphabet.
 * Use `base32hexnopad` for unpadded version.
 * @example
 * ```js
 * base32hex.encode(Uint8Array.from([0x12, 0xab]));
 * // => '2ALG===='
 * base32hex.decode('2ALG====');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32hex = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
/**
 * base32 encoding from RFC 4648. No padding. Compared to ordinary `base32`, slightly different alphabet.
 * Use `base32hex` for padded version.
 * @example
 * ```js
 * base32hexnopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => '2ALG'
 * base32hexnopad.decode('2ALG');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32hexnopad = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), join(''));
/**
 * base32 encoding from RFC 4648. Doug Crockford's version.
 * https://www.crockford.com/base32.html
 * @example
 * ```js
 * base32crockford.encode(Uint8Array.from([0x12, 0xab]));
 * // => '2ANG'
 * base32crockford.decode('2ANG');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base32crockford = chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
// Built-in base64 conversion https://caniuse.com/mdn-javascript_builtins_uint8array_frombase64
// prettier-ignore
const hasBase64Builtin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toBase64 === 'function' &&
    typeof Uint8Array.fromBase64 === 'function')();
const decodeBase64Builtin = (s, isUrl) => {
    astr('base64', s);
    const re = isUrl ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/;
    const alphabet = isUrl ? 'base64url' : 'base64';
    if (s.length > 0 && !re.test(s))
        throw new Error('invalid base64');
    return Uint8Array.fromBase64(s, { alphabet, lastChunkHandling: 'strict' });
};
/**
 * base64 from RFC 4648. Padded.
 * Use `base64nopad` for unpadded version.
 * Also check out `base64url`, `base64urlnopad`.
 * Falls back to built-in function, when available.
 * @example
 * ```js
 * base64.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs='
 * base64.decode('Eqs=');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
// prettier-ignore
const base64 = hasBase64Builtin ? {
    encode(b) { abytes(b); return b.toBase64(); },
    decode(s) { return decodeBase64Builtin(s, false); },
} : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
/**
 * base64 from RFC 4648. No padding.
 * Use `base64` for padded version.
 * @example
 * ```js
 * base64nopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs'
 * base64nopad.decode('Eqs');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base64nopad = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), join(''));
/**
 * base64 from RFC 4648, using URL-safe alphabet. Padded.
 * Use `base64urlnopad` for unpadded version.
 * Falls back to built-in function, when available.
 * @example
 * ```js
 * base64url.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs='
 * base64url.decode('Eqs=');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
// prettier-ignore
const base64url = hasBase64Builtin ? {
    encode(b) { abytes(b); return b.toBase64({ alphabet: 'base64url' }); },
    decode(s) { return decodeBase64Builtin(s, true); },
} : chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
/**
 * base64 from RFC 4648, using URL-safe alphabet. No padding.
 * Use `base64url` for padded version.
 * @example
 * ```js
 * base64urlnopad.encode(Uint8Array.from([0x12, 0xab]));
 * // => 'Eqs'
 * base64urlnopad.decode('Eqs');
 * // => Uint8Array.from([0x12, 0xab])
 * ```
 */
const base64urlnopad = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), join(''));
// base58 code
// -----------
const genBase58 = /* @__NO_SIDE_EFFECTS__ */ (abc) => chain(radix(58), alphabet(abc), join(''));
/**
 * base58: base64 without ambigous characters +, /, 0, O, I, l.
 * Quadratic (O(n^2)) - so, can't be used on large inputs.
 * @example
 * ```js
 * base58.decode('01abcdef');
 * // => '3UhJW'
 * ```
 */
const base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
/**
 * base58: flickr version. Check out `base58`.
 */
const base58flickr = genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
/**
 * base58: XRP version. Check out `base58`.
 */
const base58xrp = genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
// Data len (index) -> encoded block len
const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
/**
 * base58: XMR version. Check out `base58`.
 * Done in 8-byte blocks (which equals 11 chars in decoding). Last (non-full) block padded with '1' to size in XMR_BLOCK_LEN.
 * Block encoding significantly reduces quadratic complexity of base58.
 */
const base58xmr = {
    encode(data) {
        let res = '';
        for (let i = 0; i < data.length; i += 8) {
            const block = data.subarray(i, i + 8);
            res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
        }
        return res;
    },
    decode(str) {
        let res = [];
        for (let i = 0; i < str.length; i += 11) {
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = base58.decode(slice);
            for (let j = 0; j < block.length - blockLen; j++) {
                if (block[j] !== 0)
                    throw new Error('base58xmr: wrong padding');
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    },
};
/**
 * Method, which creates base58check encoder.
 * Requires function, calculating sha256.
 */
const createBase58check = (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), base58);
/**
 * Use `createBase58check` instead.
 * @deprecated
 */
const base58check = (/* unused pure expression or super */ null && (createBase58check));
const BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
const POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
        if (((b >> i) & 1) === 1)
            chk ^= POLYMOD_GENERATORS[i];
    }
    return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for (let i = 0; i < len; i++) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
            throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ (c >> 5);
    }
    chk = bech32Polymod(chk);
    for (let i = 0; i < len; i++)
        chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i) & 0x1f);
    for (let v of words)
        chk = bech32Polymod(chk) ^ v;
    for (let i = 0; i < 6; i++)
        chk = bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
}
/**
 * @__NO_SIDE_EFFECTS__
 */
function genBech32(encoding) {
    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
    const _words = radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        astr('bech32.encode prefix', prefix);
        if (isBytes(words))
            words = Array.from(words);
        anumArr('bech32.encode', words);
        const plen = prefix.length;
        if (plen === 0)
            throw new TypeError(`Invalid prefix length ${plen}`);
        const actualLength = plen + 7 + words.length;
        if (limit !== false && actualLength > limit)
            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        const lowered = prefix.toLowerCase();
        const sum = bechChecksum(lowered, words, ENCODING_CONST);
        return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
    }
    function decode(str, limit = 90) {
        astr('bech32.decode input', str);
        const slen = str.length;
        if (slen < 8 || (limit !== false && slen > limit))
            throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
        // don't allow mixed case
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase())
            throw new Error(`String must be lowercase or uppercase`);
        const sepIndex = lowered.lastIndexOf('1');
        if (sepIndex === 0 || sepIndex === -1)
            throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = lowered.slice(0, sepIndex);
        const data = lowered.slice(sepIndex + 1);
        if (data.length < 6)
            throw new Error('Data must be at least 6 characters long');
        const words = BECH_ALPHABET.decode(data).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!data.endsWith(sum))
            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return { prefix, words };
    }
    const decodeUnsafe = unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix, words } = decode(str, false);
        return { prefix, words, bytes: fromWords(words) };
    }
    function encodeFromBytes(prefix, bytes) {
        return encode(prefix, toWords(bytes));
    }
    return {
        encode,
        decode,
        encodeFromBytes,
        decodeToBytes,
        decodeUnsafe,
        fromWords,
        fromWordsUnsafe,
        toWords,
    };
}
/**
 * bech32 from BIP 173. Operates on words.
 * For high-level, check out scure-btc-signer:
 * https://github.com/paulmillr/scure-btc-signer.
 */
const bech32 = genBech32('bech32');
/**
 * bech32m from BIP 350. Operates on words.
 * It was to mitigate `bech32` weaknesses.
 * For high-level, check out scure-btc-signer:
 * https://github.com/paulmillr/scure-btc-signer.
 */
const bech32m = genBech32('bech32m');
/**
 * UTF-8-to-byte decoder. Uses built-in TextDecoder / TextEncoder.
 * @example
 * ```js
 * const b = utf8.decode("hey"); // => new Uint8Array([ 104, 101, 121 ])
 * const str = utf8.encode(b); // "hey"
 * ```
 */
const utf8 = {
    encode: (data) => new TextDecoder().decode(data),
    decode: (str) => new TextEncoder().encode(str),
};
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
// prettier-ignore
const hasHexBuiltin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === 'function' &&
    typeof Uint8Array.fromHex === 'function')();
// prettier-ignore
const hexBuiltin = {
    encode(data) { abytes(data); return data.toHex(); },
    decode(s) { astr('hex', s); return Uint8Array.fromHex(s); },
};
/**
 * hex string decoder. Uses built-in function, when available.
 * @example
 * ```js
 * const b = hex.decode("0102ff"); // => new Uint8Array([ 1, 2, 255 ])
 * const str = hex.encode(b); // "0102ff"
 * ```
 */
const hex = hasHexBuiltin
    ? hexBuiltin
    : chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize((s) => {
        if (typeof s !== 'string' || s.length % 2 !== 0)
            throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
        return s.toLowerCase();
    }));
// prettier-ignore
const CODERS = {
    utf8, hex, base16, base32, base64, base64url, base58, base58xmr
};
const coderTypeError = 'Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr';
/** @deprecated */
const bytesToString = (type, bytes) => {
    if (typeof type !== 'string' || !CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (!isBytes(bytes))
        throw new TypeError('bytesToString() expects Uint8Array');
    return CODERS[type].encode(bytes);
};
/** @deprecated */
const str = (/* unused pure expression or super */ null && (bytesToString)); // as in python, but for bytes only
/** @deprecated */
const esm_stringToBytes = (type, str) => {
    if (!CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (typeof str !== 'string')
        throw new TypeError('stringToBytes() expects string');
    return CODERS[type].decode(str);
};
/** @deprecated */
const bytes = (/* unused pure expression or super */ null && (esm_stringToBytes));
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@walletconnect/relay-auth/dist/index.es.js
var index_es = __webpack_require__(338236);
;// ./node_modules/uint8arrays/esm/src/util/as-uint8array.js
function as_uint8array_asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}
;// ./node_modules/uint8arrays/esm/src/alloc.js

function alloc(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
    return asUint8Array(globalThis.Buffer.alloc(size));
  }
  return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return as_uint8array_asUint8Array(globalThis.Buffer.allocUnsafe(size));
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
  return as_uint8array_asUint8Array(output);
}
// EXTERNAL MODULE: ./node_modules/multiformats/esm/src/basics.js + 14 modules
var basics = __webpack_require__(988163);
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
  hex: basics/* bases */.Fo.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...basics/* bases */.Fo
};
/* harmony default export */ const bases = (BASES);
;// ./node_modules/uint8arrays/esm/src/from-string.js


function fromString(string, encoding = 'utf8') {
  const base = bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return as_uint8array_asUint8Array(globalThis.Buffer.from(string, 'utf-8'));
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}
;// ./node_modules/uint8arrays/esm/src/to-string.js

function to_string_toString(array, encoding = 'utf8') {
  const base = bases[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
  }
  return base.encoder.encode(array).substring(1);
}
;// ./node_modules/uint8arrays/esm/src/index.js







// EXTERNAL MODULE: ./node_modules/@walletconnect/relay-api/dist/index.es.js
var dist_index_es = __webpack_require__(443228);
// EXTERNAL MODULE: ./node_modules/blakejs/index.js
var blakejs = __webpack_require__(992493);
;// ./node_modules/@walletconnect/utils/dist/index.es.js
/* provided dependency */ var process = __webpack_require__(365606);
const Ie=":";function We(t){const[e,n]=t.split(Ie);return{namespace:e,reference:n}}function nr(t){const{namespace:e,reference:n}=t;return[e,n].join(Ie)}function Ye(t){const[e,n,r]=t.split(Ie);return{namespace:e,reference:n,address:r}}function rr(t){const{namespace:e,reference:n,address:r}=t;return[e,n,r].join(Ie)}function Xe(t,e){const n=[];return t.forEach(r=>{const o=e(r);n.includes(o)||n.push(o)}),n}function or(t){const{address:e}=Ye(t);return e}function sr(t){const{namespace:e,reference:n}=Ye(t);return nr({namespace:e,reference:n})}function Cs(t,e){const{namespace:n,reference:r}=We(e);return rr({namespace:n,reference:r,address:t})}function js(t){return Xe(t,or)}function ir(t){return Xe(t,sr)}function ks(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const o=t[r];n.push(...o.accounts)}),n}function Ps(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const o=t[r];n.push(...ir(o.accounts))}),n}function Hs(t,e=[]){const n=[];return Object.keys(t).forEach(r=>{if(e.length&&!e.includes(r))return;const o=t[r];n.push(...Se(r,o))}),n}function Se(t,e){return t.includes(":")?[t]:e.chains||[]}var Ds=Object.defineProperty,Ms=Object.defineProperties,Vs=Object.getOwnPropertyDescriptors,cr=Object.getOwnPropertySymbols,qs=Object.prototype.hasOwnProperty,Ks=Object.prototype.propertyIsEnumerable,fr=(t,e,n)=>e in t?Ds(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ar=(t,e)=>{for(var n in e||(e={}))qs.call(e,n)&&fr(t,n,e[n]);if(cr)for(var n of cr(e))Ks.call(e,n)&&fr(t,n,e[n]);return t},Fs=(t,e)=>Ms(t,Vs(e));const ur="ReactNative",Q={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},Oe=" ",zs=":",lr="/",Je=2,Gs=1e3,dr="js";function Qe(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function At(){return!(0,dist_cjs.getDocument)()&&!!(0,dist_cjs.getNavigator)()&&navigator.product===ur}function Zs(){return At()&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"&&(global==null?void 0:global.Platform.OS)==="android"}function Ws(){return At()&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"&&(global==null?void 0:global.Platform.OS)==="ios"}function Wt(){return!Qe()&&!!(0,dist_cjs.getNavigator)()&&!!(0,dist_cjs.getDocument)()}function Mt(){return At()?Q.reactNative:Qe()?Q.node:Wt()?Q.browser:Q.unknown}function Ys(){var t;try{return At()&&typeof global<"u"&&typeof(global==null?void 0:global.Application)<"u"?(t=global.Application)==null?void 0:t.applicationId:void 0}catch{return}}function hr(t,e){const n=new URLSearchParams(t);for(const r of Object.keys(e).sort())if(e.hasOwnProperty(r)){const o=e[r];o!==void 0&&n.set(r,o)}return n.toString()}function Xs(t){var e,n;const r=pr();try{return t!=null&&t.url&&r.url&&new URL(t.url).host!==new URL(r.url).host&&(console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`),t.url=r.url),(e=t?.icons)!=null&&e.length&&t.icons.length>0&&(t.icons=t.icons.filter(o=>o!=="")),Fs(ar(ar({},r),t),{url:t?.url||r.url,name:t?.name||r.name,description:t?.description||r.description,icons:(n=t?.icons)!=null&&n.length&&t.icons.length>0?t.icons:r.icons})}catch(o){return console.warn("Error populating app metadata",o),t||r}}function pr(){return (0,window_metadata_dist_cjs/* getWindowMetadata */.g)()||{name:"",description:"",url:"",icons:[""]}}function Js(t,e){var n;const r=Mt(),o={protocol:t,version:e,env:r};return r==="browser"&&(o.host=((n=er())==null?void 0:n.host)||"unknown"),o}function gr(){if(Mt()===Q.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const t=(0,es/* detect */.o0)();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function br(){var t;const e=Mt();return e===Q.browser?[e,((t=(0,dist_cjs.getLocation)())==null?void 0:t.host)||"unknown"].join(":"):e}function yr(t,e,n){const r=gr(),o=br();return[[t,e].join("-"),[dr,n].join("-"),r,o].join("/")}function Qs({protocol:t,version:e,relayUrl:n,sdkVersion:r,auth:o,projectId:s,useOnCloseEvent:i,bundleId:c,packageName:f}){const a=n.split("?"),l=yr(t,e,r),u={auth:o,ua:l,projectId:s,useOnCloseEvent:i||void 0,packageName:f||void 0,bundleId:c||void 0},h=hr(a[1]||"",u);return a[0]+"?"+h}function ti(t){let e=(t.match(/^[^:]+(?=:\/\/)/gi)||[])[0];const n=typeof e<"u"?t.split("://")[1]:t;return e=e==="wss"?"https":"http",[e,n].join("://")}function ei(t,e,n){if(!t[e]||typeof t[e]!==n)throw new Error(`Missing or invalid "${e}" param`)}function mr(t,e=Je){return wr(t.split(lr),e)}function ni(t){return mr(t).join(Oe)}function Bt(t,e){return t.filter(n=>e.includes(n)).length===t.length}function wr(t,e=Je){return t.slice(Math.max(t.length-e,0))}function ri(t){return Object.fromEntries(t.entries())}function oi(t){return new Map(Object.entries(t))}function si(t,e){const n={};return Object.keys(t).forEach(r=>{n[r]=e(t[r])}),n}const ii=t=>t;function xr(t){return t.trim().replace(/^\w/,e=>e.toUpperCase())}function ci(t){return t.split(Oe).map(e=>xr(e)).join(Oe)}function fi(t=cjs.FIVE_MINUTES,e){const n=(0,cjs.toMiliseconds)(t||cjs.FIVE_MINUTES);let r,o,s,i;return{resolve:c=>{s&&r&&(clearTimeout(s),r(c),i=Promise.resolve(c))},reject:c=>{s&&o&&(clearTimeout(s),o(c))},done:()=>new Promise((c,f)=>{if(i)return c(i);s=setTimeout(()=>{const a=new Error(e);i=Promise.reject(a),f(a)},n),r=c,o=f})}}function ai(t,e,n){return new Promise(async(r,o)=>{const s=setTimeout(()=>o(new Error(n)),e);try{const i=await t;r(i)}catch(i){o(i)}clearTimeout(s)})}function tn(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function ui(t){return tn("topic",t)}function li(t){return tn("id",t)}function di(t){const[e,n]=t.split(":"),r={id:void 0,topic:void 0};if(e==="topic"&&typeof n=="string")r.topic=n;else if(e==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);return r}function hi(t,e){return (0,cjs.fromMiliseconds)((e||Date.now())+(0,cjs.toMiliseconds)(t))}function pi(t){return Date.now()>=(0,cjs.toMiliseconds)(t)}function gi(t,e){return`${t}${e?`:${e}`:""}`}function ut(t=[],e=[]){return[...new Set([...t,...e])]}async function bi({id:t,topic:e,wcDeepLink:n}){var r;try{if(!n)return;const o=typeof n=="string"?JSON.parse(n):n,s=o?.href;if(typeof s!="string")return;const i=vr(s,t,e),c=Mt();if(c===Q.browser){if(!((r=(0,dist_cjs.getDocument)())!=null&&r.hasFocus())){console.warn("Document does not have focus, skipping deeplink.");return}Er(i)}else c===Q.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(i)}catch(o){console.error(o)}}function vr(t,e,n){const r=`requestId=${e}&sessionTopic=${n}`;t.endsWith("/")&&(t=t.slice(0,-1));let o=`${t}`;if(t.startsWith("https://t.me")){const s=t.includes("?")?"&startapp=":"?startapp=";o=`${o}${s}${Ir(r,!0)}`}else o=`${o}/wc?${r}`;return o}function Er(t){let e="_self";Br()?e="_top":(Ar()||t.startsWith("https://")||t.startsWith("http://"))&&(e="_blank"),window.open(t,e,"noreferrer noopener")}async function yi(t,e){let n="";try{if(Wt()&&(n=localStorage.getItem(e),n))return n;n=await t.getItem(e)}catch(r){console.error(r)}return n}function en(t,e){return t.filter(n=>e.includes(n))}function mi(t,e){if(!t.includes(e))return null;const n=t.split(/([&,?,=])/),r=n.indexOf(e);return n[r+2]}function wi(){return typeof crypto<"u"&&crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function xi(){return typeof process<"u"&&process.env.IS_VITEST==="true"}function Ar(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)}function Br(){try{return window.self!==window.top}catch{return!1}}function Ir(t,e=!1){const n=Buffer.from(t).toString("base64");return e?n.replace(/[=]/g,""):n}function nn(t){return Buffer.from(t,"base64").toString("utf-8")}function vi(t){return new Promise(e=>setTimeout(e,t))}const Ne=BigInt(2**32-1),Sr=BigInt(32);function Or(t,e=!1){return e?{h:Number(t&Ne),l:Number(t>>Sr&Ne)}:{h:Number(t>>Sr&Ne)|0,l:Number(t&Ne)|0}}function Nr(t,e=!1){const n=t.length;let r=new Uint32Array(n),o=new Uint32Array(n);for(let s=0;s<n;s++){const{h:i,l:c}=Or(t[s],e);[r[s],o[s]]=[i,c]}return[r,o]}const Ur=(t,e,n)=>t>>>n,_r=(t,e,n)=>t<<32-n|e>>>n,It=(t,e,n)=>t>>>n|e<<32-n,St=(t,e,n)=>t<<32-n|e>>>n,fe=(t,e,n)=>t<<64-n|e>>>n-32,ae=(t,e,n)=>t>>>n-32|e<<64-n,Ei=(t,e)=>e,Ai=(t,e)=>t,Bi=(t,e,n)=>t<<n|e>>>32-n,Ii=(t,e,n)=>e<<n|t>>>32-n,Si=(t,e,n)=>e<<n-32|t>>>64-n,Oi=(t,e,n)=>t<<n-32|e>>>64-n;function dt(t,e,n,r){const o=(e>>>0)+(r>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const rn=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),on=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Ni=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Ui=(t,e,n,r,o)=>e+n+r+o+(t/2**32|0)|0,_i=(t,e,n,r,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Ti=(t,e,n,r,o,s)=>e+n+r+o+s+(t/2**32|0)|0,Yt=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function Ri(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function yt(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function Ot(t,...e){if(!Ri(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function sn(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");yt(t.outputLen),yt(t.blockLen)}function Nt(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function cn(t,e){Ot(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function ue(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function lt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function fn(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function gt(t,e){return t<<32-e|t>>>e}const Tr=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Rr(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}const mt=Tr?t=>t:t=>Rr(t);function $i(t){for(let e=0;e<t.length;e++)t[e]=Rr(t[e]);return t}const index_es_Ut=Tr?t=>t:$i;function Li(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function ht(t){return typeof t=="string"&&(t=Li(t)),Ot(t),t}function Ci(...t){let e=0;for(let r=0;r<t.length;r++){const o=t[r];Ot(o),e+=o.length}const n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){const s=t[r];n.set(s,o),o+=s.length}return n}class Ue{}function le(t){const e=r=>t().update(ht(r)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function ji(t){const e=(r,o)=>t(o).update(ht(r)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}function Xt(t=32){if(Yt&&typeof Yt.getRandomValues=="function")return Yt.getRandomValues(new Uint8Array(t));if(Yt&&typeof Yt.randomBytes=="function")return Uint8Array.from(Yt.randomBytes(t));throw new Error("crypto.getRandomValues must be defined")}const ki=BigInt(0),de=BigInt(1),Pi=BigInt(2),Hi=BigInt(7),Di=BigInt(256),Mi=BigInt(113),$r=[],Lr=[],Cr=[];for(let t=0,e=de,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],$r.push(2*(5*r+n)),Lr.push((t+1)*(t+2)/2%64);let o=ki;for(let s=0;s<7;s++)e=(e<<de^(e>>Hi)*Mi)%Di,e&Pi&&(o^=de<<(de<<BigInt(s))-de);Cr.push(o)}const jr=Nr(Cr,!0),Vi=jr[0],qi=jr[1],kr=(t,e,n)=>n>32?Si(t,e,n):Bi(t,e,n),Pr=(t,e,n)=>n>32?Oi(t,e,n):Ii(t,e,n);function Ki(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let i=0;i<10;i++)n[i]=t[i]^t[i+10]^t[i+20]^t[i+30]^t[i+40];for(let i=0;i<10;i+=2){const c=(i+8)%10,f=(i+2)%10,a=n[f],l=n[f+1],u=kr(a,l,1)^n[c],h=Pr(a,l,1)^n[c+1];for(let m=0;m<50;m+=10)t[i+m]^=u,t[i+m+1]^=h}let o=t[2],s=t[3];for(let i=0;i<24;i++){const c=Lr[i],f=kr(o,s,c),a=Pr(o,s,c),l=$r[i];o=t[l],s=t[l+1],t[l]=f,t[l+1]=a}for(let i=0;i<50;i+=10){for(let c=0;c<10;c++)n[c]=t[i+c];for(let c=0;c<10;c++)t[i+c]^=~n[(c+2)%10]&n[(c+4)%10]}t[0]^=Vi[r],t[1]^=qi[r]}lt(n)}class Xn extends Ue{constructor(e,n,r,o=!1,s=24){if(super(),this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,this.enableXOF=!1,this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=s,yt(r),!(0<e&&e<200))throw new Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=ue(this.state)}clone(){return this._cloneInto()}keccak(){index_es_Ut(this.state32),Ki(this.state32,this.rounds),index_es_Ut(this.state32),this.posOut=0,this.pos=0}update(e){Nt(this),e=ht(e),Ot(e);const{blockLen:n,state:r}=this,o=e.length;for(let s=0;s<o;){const i=Math.min(n-this.pos,o-s);for(let c=0;c<i;c++)r[this.pos++]^=e[s++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:o}=this;e[r]^=n,(n&128)!==0&&r===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){Nt(this,!1),Ot(e),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,s=e.length;o<s;){this.posOut>=r&&this.keccak();const i=Math.min(r-this.posOut,s-o);e.set(n.subarray(this.posOut,this.posOut+i),o),this.posOut+=i,o+=i}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return yt(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(cn(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,lt(this.state)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:o,rounds:s,enableXOF:i}=this;return e||(e=new Xn(n,r,o,i,s)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=s,e.suffix=r,e.outputLen=o,e.enableXOF=i,e.destroyed=this.destroyed,e}}const Fi=(t,e,n)=>le(()=>new Xn(e,t,n)),zi=Fi(1,136,256/8);function Gi(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),c=Number(n&s),f=r?4:0,a=r?0:4;t.setUint32(e+f,i,r),t.setUint32(e+a,c,r)}function Zi(t,e,n){return t&e^~t&n}function Wi(t,e,n){return t&e^t&n^e&n}class Hr extends Ue{constructor(e,n,r,o){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=o,this.buffer=new Uint8Array(e),this.view=fn(this.buffer)}update(e){Nt(this),e=ht(e),Ot(e);const{view:n,buffer:r,blockLen:o}=this,s=e.length;for(let i=0;i<s;){const c=Math.min(o-this.pos,s-i);if(c===o){const f=fn(e);for(;o<=s-i;i+=o)this.process(f,i);continue}r.set(e.subarray(i,i+c),this.pos),this.pos+=c,i+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){Nt(this),cn(e,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,lt(this.buffer.subarray(i)),this.padOffset>o-i&&(this.process(r,0),i=0);for(let u=i;u<o;u++)n[u]=0;Gi(r,o-8,BigInt(this.length*8),s),this.process(r,0);const c=fn(e),f=this.outputLen;if(f%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const a=f/4,l=this.get();if(a>l.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<a;u++)c.setUint32(4*u,l[u],s)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:c}=this;return e.destroyed=i,e.finished=s,e.length=o,e.pos=c,o%n&&e.buffer.set(r),e}clone(){return this._cloneInto()}}const _t=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Y=Uint32Array.from([3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]),X=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Yi=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Tt=new Uint32Array(64);class Xi extends Hr{constructor(e=32){super(64,e,8,!1),this.A=_t[0]|0,this.B=_t[1]|0,this.C=_t[2]|0,this.D=_t[3]|0,this.E=_t[4]|0,this.F=_t[5]|0,this.G=_t[6]|0,this.H=_t[7]|0}get(){const{A:e,B:n,C:r,D:o,E:s,F:i,G:c,H:f}=this;return[e,n,r,o,s,i,c,f]}set(e,n,r,o,s,i,c,f){this.A=e|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=c|0,this.H=f|0}process(e,n){for(let u=0;u<16;u++,n+=4)Tt[u]=e.getUint32(n,!1);for(let u=16;u<64;u++){const h=Tt[u-15],m=Tt[u-2],p=gt(h,7)^gt(h,18)^h>>>3,d=gt(m,17)^gt(m,19)^m>>>10;Tt[u]=d+Tt[u-7]+p+Tt[u-16]|0}let{A:r,B:o,C:s,D:i,E:c,F:f,G:a,H:l}=this;for(let u=0;u<64;u++){const h=gt(c,6)^gt(c,11)^gt(c,25),m=l+h+Zi(c,f,a)+Yi[u]+Tt[u]|0,d=(gt(r,2)^gt(r,13)^gt(r,22))+Wi(r,o,s)|0;l=a,a=f,f=c,c=i+m|0,i=s,s=o,o=r,r=m+d|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,c=c+this.E|0,f=f+this.F|0,a=a+this.G|0,l=l+this.H|0,this.set(r,o,s,i,c,f,a,l)}roundClean(){lt(Tt)}destroy(){this.set(0,0,0,0,0,0,0,0),lt(this.buffer)}}const Dr=Nr(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Ji=Dr[0],Qi=Dr[1],Rt=new Uint32Array(80),$t=new Uint32Array(80);class an extends Hr{constructor(e=64){super(128,e,16,!1),this.Ah=X[0]|0,this.Al=X[1]|0,this.Bh=X[2]|0,this.Bl=X[3]|0,this.Ch=X[4]|0,this.Cl=X[5]|0,this.Dh=X[6]|0,this.Dl=X[7]|0,this.Eh=X[8]|0,this.El=X[9]|0,this.Fh=X[10]|0,this.Fl=X[11]|0,this.Gh=X[12]|0,this.Gl=X[13]|0,this.Hh=X[14]|0,this.Hl=X[15]|0}get(){const{Ah:e,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:c,Dl:f,Eh:a,El:l,Fh:u,Fl:h,Gh:m,Gl:p,Hh:d,Hl:I}=this;return[e,n,r,o,s,i,c,f,a,l,u,h,m,p,d,I]}set(e,n,r,o,s,i,c,f,a,l,u,h,m,p,d,I){this.Ah=e|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=c|0,this.Dl=f|0,this.Eh=a|0,this.El=l|0,this.Fh=u|0,this.Fl=h|0,this.Gh=m|0,this.Gl=p|0,this.Hh=d|0,this.Hl=I|0}process(e,n){for(let S=0;S<16;S++,n+=4)Rt[S]=e.getUint32(n),$t[S]=e.getUint32(n+=4);for(let S=16;S<80;S++){const g=Rt[S-15]|0,x=$t[S-15]|0,_=It(g,x,1)^It(g,x,8)^Ur(g,x,7),v=St(g,x,1)^St(g,x,8)^_r(g,x,7),O=Rt[S-2]|0,T=$t[S-2]|0,R=It(O,T,19)^fe(O,T,61)^Ur(O,T,6),E=St(O,T,19)^ae(O,T,61)^_r(O,T,6),N=Ni(v,E,$t[S-7],$t[S-16]),B=Ui(N,_,R,Rt[S-7],Rt[S-16]);Rt[S]=B|0,$t[S]=N|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:c,Cl:f,Dh:a,Dl:l,Eh:u,El:h,Fh:m,Fl:p,Gh:d,Gl:I,Hh:k,Hl:H}=this;for(let S=0;S<80;S++){const g=It(u,h,14)^It(u,h,18)^fe(u,h,41),x=St(u,h,14)^St(u,h,18)^ae(u,h,41),_=u&m^~u&d,v=h&p^~h&I,O=_i(H,x,v,Qi[S],$t[S]),T=Ti(O,k,g,_,Ji[S],Rt[S]),R=O|0,E=It(r,o,28)^fe(r,o,34)^fe(r,o,39),N=St(r,o,28)^ae(r,o,34)^ae(r,o,39),B=r&s^r&c^s&c,C=o&i^o&f^i&f;k=d|0,H=I|0,d=m|0,I=p|0,m=u|0,p=h|0,{h:u,l:h}=dt(a|0,l|0,T|0,R|0),a=c|0,l=f|0,c=s|0,f=i|0,s=r|0,i=o|0;const b=rn(R,N,C);r=on(b,T,E,B),o=b|0}({h:r,l:o}=dt(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=dt(this.Bh|0,this.Bl|0,s|0,i|0),{h:c,l:f}=dt(this.Ch|0,this.Cl|0,c|0,f|0),{h:a,l}=dt(this.Dh|0,this.Dl|0,a|0,l|0),{h:u,l:h}=dt(this.Eh|0,this.El|0,u|0,h|0),{h:m,l:p}=dt(this.Fh|0,this.Fl|0,m|0,p|0),{h:d,l:I}=dt(this.Gh|0,this.Gl|0,d|0,I|0),{h:k,l:H}=dt(this.Hh|0,this.Hl|0,k|0,H|0),this.set(r,o,s,i,c,f,a,l,u,h,m,p,d,I,k,H)}roundClean(){lt(Rt,$t)}destroy(){lt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class tc extends an{constructor(){super(48),this.Ah=Y[0]|0,this.Al=Y[1]|0,this.Bh=Y[2]|0,this.Bl=Y[3]|0,this.Ch=Y[4]|0,this.Cl=Y[5]|0,this.Dh=Y[6]|0,this.Dl=Y[7]|0,this.Eh=Y[8]|0,this.El=Y[9]|0,this.Fh=Y[10]|0,this.Fl=Y[11]|0,this.Gh=Y[12]|0,this.Gl=Y[13]|0,this.Hh=Y[14]|0,this.Hl=Y[15]|0}}const J=Uint32Array.from([573645204,4230739756,2673172387,3360449730,596883563,1867755857,2520282905,1497426621,2519219938,2827943907,3193839141,1401305490,721525244,746961066,246885852,2177182882]);class ec extends an{constructor(){super(32),this.Ah=J[0]|0,this.Al=J[1]|0,this.Bh=J[2]|0,this.Bl=J[3]|0,this.Ch=J[4]|0,this.Cl=J[5]|0,this.Dh=J[6]|0,this.Dl=J[7]|0,this.Eh=J[8]|0,this.El=J[9]|0,this.Fh=J[10]|0,this.Fl=J[11]|0,this.Gh=J[12]|0,this.Gl=J[13]|0,this.Hh=J[14]|0,this.Hl=J[15]|0}}const _e=le(()=>new Xi),nc=le(()=>new an),rc=le(()=>new tc),oc=le(()=>new ec),sc=Uint8Array.from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9]),K=Uint32Array.from([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),U=new Uint32Array(32);function Lt(t,e,n,r,o,s){const i=o[s],c=o[s+1];let f=U[2*t],a=U[2*t+1],l=U[2*e],u=U[2*e+1],h=U[2*n],m=U[2*n+1],p=U[2*r],d=U[2*r+1],I=rn(f,l,i);a=on(I,a,u,c),f=I|0,{Dh:d,Dl:p}={Dh:d^a,Dl:p^f},{Dh:d,Dl:p}={Dh:Ei(d,p),Dl:Ai(d)},{h:m,l:h}=dt(m,h,d,p),{Bh:u,Bl:l}={Bh:u^m,Bl:l^h},{Bh:u,Bl:l}={Bh:It(u,l,24),Bl:St(u,l,24)},U[2*t]=f,U[2*t+1]=a,U[2*e]=l,U[2*e+1]=u,U[2*n]=h,U[2*n+1]=m,U[2*r]=p,U[2*r+1]=d}function Ct(t,e,n,r,o,s){const i=o[s],c=o[s+1];let f=U[2*t],a=U[2*t+1],l=U[2*e],u=U[2*e+1],h=U[2*n],m=U[2*n+1],p=U[2*r],d=U[2*r+1],I=rn(f,l,i);a=on(I,a,u,c),f=I|0,{Dh:d,Dl:p}={Dh:d^a,Dl:p^f},{Dh:d,Dl:p}={Dh:It(d,p,16),Dl:St(d,p,16)},{h:m,l:h}=dt(m,h,d,p),{Bh:u,Bl:l}={Bh:u^m,Bl:l^h},{Bh:u,Bl:l}={Bh:fe(u,l,63),Bl:ae(u,l,63)},U[2*t]=f,U[2*t+1]=a,U[2*e]=l,U[2*e+1]=u,U[2*n]=h,U[2*n+1]=m,U[2*r]=p,U[2*r+1]=d}function ic(t,e={},n,r,o){if(yt(n),t<0||t>n)throw new Error("outputLen bigger than keyLen");const{key:s,salt:i,personalization:c}=e;if(s!==void 0&&(s.length<1||s.length>n))throw new Error("key length must be undefined or 1.."+n);if(i!==void 0&&i.length!==r)throw new Error("salt must be undefined or "+r);if(c!==void 0&&c.length!==o)throw new Error("personalization must be undefined or "+o)}class cc extends Ue{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,this.length=0,this.pos=0,yt(e),yt(n),this.blockLen=e,this.outputLen=n,this.buffer=new Uint8Array(e),this.buffer32=ue(this.buffer)}update(e){Nt(this),e=ht(e),Ot(e);const{blockLen:n,buffer:r,buffer32:o}=this,s=e.length,i=e.byteOffset,c=e.buffer;for(let f=0;f<s;){this.pos===n&&(index_es_Ut(o),this.compress(o,0,!1),index_es_Ut(o),this.pos=0);const a=Math.min(n-this.pos,s-f),l=i+f;if(a===n&&!(l%4)&&f+a<s){const u=new Uint32Array(c,l,Math.floor((s-f)/4));index_es_Ut(u);for(let h=0;f+n<s;h+=o.length,f+=n)this.length+=n,this.compress(u,h,!1);index_es_Ut(u);continue}r.set(e.subarray(f,f+a),this.pos),this.pos+=a,this.length+=a,f+=a}return this}digestInto(e){Nt(this),cn(e,this);const{pos:n,buffer32:r}=this;this.finished=!0,lt(this.buffer.subarray(n)),index_es_Ut(r),this.compress(r,0,!0),index_es_Ut(r);const o=ue(e);this.get().forEach((s,i)=>o[i]=mt(s))}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}_cloneInto(e){const{buffer:n,length:r,finished:o,destroyed:s,outputLen:i,pos:c}=this;return e||(e=new this.constructor({dkLen:i})),e.set(...this.get()),e.buffer.set(n),e.destroyed=s,e.finished=o,e.length=r,e.pos=c,e.outputLen=i,e}clone(){return this._cloneInto()}}class fc extends cc{constructor(e={}){const n=e.dkLen===void 0?64:e.dkLen;super(128,n),this.v0l=K[0]|0,this.v0h=K[1]|0,this.v1l=K[2]|0,this.v1h=K[3]|0,this.v2l=K[4]|0,this.v2h=K[5]|0,this.v3l=K[6]|0,this.v3h=K[7]|0,this.v4l=K[8]|0,this.v4h=K[9]|0,this.v5l=K[10]|0,this.v5h=K[11]|0,this.v6l=K[12]|0,this.v6h=K[13]|0,this.v7l=K[14]|0,this.v7h=K[15]|0,ic(n,e,64,16,16);let{key:r,personalization:o,salt:s}=e,i=0;if(r!==void 0&&(r=ht(r),i=r.length),this.v0l^=this.outputLen|i<<8|65536|1<<24,s!==void 0){s=ht(s);const c=ue(s);this.v4l^=mt(c[0]),this.v4h^=mt(c[1]),this.v5l^=mt(c[2]),this.v5h^=mt(c[3])}if(o!==void 0){o=ht(o);const c=ue(o);this.v6l^=mt(c[0]),this.v6h^=mt(c[1]),this.v7l^=mt(c[2]),this.v7h^=mt(c[3])}if(r!==void 0){const c=new Uint8Array(this.blockLen);c.set(r),this.update(c)}}get(){let{v0l:e,v0h:n,v1l:r,v1h:o,v2l:s,v2h:i,v3l:c,v3h:f,v4l:a,v4h:l,v5l:u,v5h:h,v6l:m,v6h:p,v7l:d,v7h:I}=this;return[e,n,r,o,s,i,c,f,a,l,u,h,m,p,d,I]}set(e,n,r,o,s,i,c,f,a,l,u,h,m,p,d,I){this.v0l=e|0,this.v0h=n|0,this.v1l=r|0,this.v1h=o|0,this.v2l=s|0,this.v2h=i|0,this.v3l=c|0,this.v3h=f|0,this.v4l=a|0,this.v4h=l|0,this.v5l=u|0,this.v5h=h|0,this.v6l=m|0,this.v6h=p|0,this.v7l=d|0,this.v7h=I|0}compress(e,n,r){this.get().forEach((f,a)=>U[a]=f),U.set(K,16);let{h:o,l:s}=Or(BigInt(this.length));U[24]=K[8]^s,U[25]=K[9]^o,r&&(U[28]=~U[28],U[29]=~U[29]);let i=0;const c=sc;for(let f=0;f<12;f++)Lt(0,4,8,12,e,n+2*c[i++]),Ct(0,4,8,12,e,n+2*c[i++]),Lt(1,5,9,13,e,n+2*c[i++]),Ct(1,5,9,13,e,n+2*c[i++]),Lt(2,6,10,14,e,n+2*c[i++]),Ct(2,6,10,14,e,n+2*c[i++]),Lt(3,7,11,15,e,n+2*c[i++]),Ct(3,7,11,15,e,n+2*c[i++]),Lt(0,5,10,15,e,n+2*c[i++]),Ct(0,5,10,15,e,n+2*c[i++]),Lt(1,6,11,12,e,n+2*c[i++]),Ct(1,6,11,12,e,n+2*c[i++]),Lt(2,7,8,13,e,n+2*c[i++]),Ct(2,7,8,13,e,n+2*c[i++]),Lt(3,4,9,14,e,n+2*c[i++]),Ct(3,4,9,14,e,n+2*c[i++]);this.v0l^=U[0]^U[16],this.v0h^=U[1]^U[17],this.v1l^=U[2]^U[18],this.v1h^=U[3]^U[19],this.v2l^=U[4]^U[20],this.v2h^=U[5]^U[21],this.v3l^=U[6]^U[22],this.v3h^=U[7]^U[23],this.v4l^=U[8]^U[24],this.v4h^=U[9]^U[25],this.v5l^=U[10]^U[26],this.v5h^=U[11]^U[27],this.v6l^=U[12]^U[28],this.v6h^=U[13]^U[29],this.v7l^=U[14]^U[30],this.v7h^=U[15]^U[31],lt(U)}destroy(){this.destroyed=!0,lt(this.buffer32),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const ac=ji(t=>new fc(t)),uc="https://rpc.walletconnect.org/v1";function un(t){const e=`Ethereum Signed Message:
${t.length}`,n=new TextEncoder().encode(e+t);return"0x"+Buffer.from(zi(n)).toString("hex")}async function Mr(t,e,n,r,o,s){switch(n.t){case"eip191":return await Vr(t,e,n.s);case"eip1271":return await qr(t,e,n.s,r,o,s);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`)}}async function Vr(t,e,n){return(await recoverAddress({hash:un(e),signature:n})).toLowerCase()===t.toLowerCase()}async function qr(t,e,n,r,o,s){const i=We(r);if(!i.namespace||!i.reference)throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);try{const c="0x1626ba7e",f="0000000000000000000000000000000000000000000000000000000000000040",a="0000000000000000000000000000000000000000000000000000000000000041",l=n.substring(2),u=un(e).substring(2),h=c+u+f+a+l,m=await fetch(`${s||uc}/?chainId=${r}&projectId=${o}`,{method:"POST",body:JSON.stringify({id:lc(),jsonrpc:"2.0",method:"eth_call",params:[{to:t,data:h},"latest"]})}),{result:p}=await m.json();return p?p.slice(0,c.length).toLowerCase()===c.toLowerCase():!1}catch(c){return console.error("isValidEip1271Signature: ",c),!1}}function lc(){return Date.now()+Math.floor(Math.random()*1e3)}function dc(t){const e=atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);const r=n[0];if(r===0)throw new Error("No signatures found");const o=1+r*64;if(n.length<o)throw new Error("Transaction data too short for claimed signature count");if(n.length<100)throw new Error("Transaction too short");const s=Buffer.from(t,"base64").slice(1,65);return esm/* default */.A.encode(s)}function hc(t){const e=new Uint8Array(Buffer.from(t,"base64")),n=Array.from("TransactionData::").map(s=>s.charCodeAt(0)),r=new Uint8Array(n.length+e.length);r.set(n),r.set(e,n.length);const o=ac(r,{dkLen:32});return esm/* default */.A.encode(o)}function pc(t){const e=new Uint8Array(_e(Kr(t)));return esm/* default */.A.encode(e)}function Kr(t){if(t instanceof Uint8Array)return t;if(Array.isArray(t))return new Uint8Array(t);if(typeof t=="object"&&t!=null&&t.data)return new Uint8Array(Object.values(t.data));if(typeof t=="object"&&t)return new Uint8Array(Object.values(t));throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array")}function gc(t){const e=Buffer.from(t,"base64"),n=decode(e).txn;if(!n)throw new Error("Invalid signed transaction: missing 'txn' field");const r=encode(n),o=Buffer.from("TX"),s=Buffer.concat([o,Buffer.from(r)]),i=oc(s);return base32.encode(i).replace(/=+$/,"")}function ln(t){const e=[];let n=BigInt(t);for(;n>=BigInt(128);)e.push(Number(n&BigInt(127)|BigInt(128))),n>>=BigInt(7);return e.push(Number(n)),Buffer.from(e)}function bc(t){const e=Buffer.from(t.signed.bodyBytes,"base64"),n=Buffer.from(t.signed.authInfoBytes,"base64"),r=Buffer.from(t.signature.signature,"base64"),o=[];o.push(Buffer.from([10])),o.push(ln(e.length)),o.push(e),o.push(Buffer.from([18])),o.push(ln(n.length)),o.push(n),o.push(Buffer.from([26])),o.push(ln(r.length)),o.push(r);const s=Buffer.concat(o),i=_e(s);return Buffer.from(i).toString("hex").toUpperCase()}var yc=Object.defineProperty,mc=Object.defineProperties,wc=Object.getOwnPropertyDescriptors,Fr=Object.getOwnPropertySymbols,xc=Object.prototype.hasOwnProperty,vc=Object.prototype.propertyIsEnumerable,zr=(t,e,n)=>e in t?yc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,dn=(t,e)=>{for(var n in e||(e={}))xc.call(e,n)&&zr(t,n,e[n]);if(Fr)for(var n of Fr(e))vc.call(e,n)&&zr(t,n,e[n]);return t},Gr=(t,e)=>mc(t,wc(e));const Ec="did:pkh:",Te=t=>t?.split(":"),Zr=t=>{const e=t&&Te(t);if(e)return t.includes(Ec)?e[3]:e[1]},Wr=t=>{const e=t&&Te(t);if(e)return e[2]+":"+e[3]},hn=t=>{const e=t&&Te(t);if(e)return e.pop()};async function Ac(t){const{cacao:e,projectId:n}=t,{s:r,p:o}=e,s=Yr(o,o.iss),i=hn(o.iss);return await Mr(i,s,r,Wr(o.iss),n)}const Yr=(t,e)=>{const n=`${t.domain} wants you to sign in with your Ethereum account:`,r=hn(e);if(!t.aud&&!t.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let o=t.statement||void 0;const s=`URI: ${t.aud||t.uri}`,i=`Version: ${t.version}`,c=`Chain ID: ${Zr(e)}`,f=`Nonce: ${t.nonce}`,a=`Issued At: ${t.iat}`,l=t.exp?`Expiration Time: ${t.exp}`:void 0,u=t.nbf?`Not Before: ${t.nbf}`:void 0,h=t.requestId?`Request ID: ${t.requestId}`:void 0,m=t.resources?`Resources:${t.resources.map(d=>`
- ${d}`).join("")}`:void 0,p=$e(t.resources);if(p){const d=jt(p);o=bn(o,d)}return[n,r,"",o,"",s,i,c,f,a,l,u,h,m].filter(d=>d!=null).join(`
`)};function Bc(t,e,n){return n.includes("did:pkh:")||(n=`did:pkh:${n}`),{h:{t:"caip122"},p:{iss:n,domain:t.domain,aud:t.aud,version:t.version,nonce:t.nonce,iat:t.iat,statement:t.statement,requestId:t.requestId,resources:t.resources,nbf:t.nbf,exp:t.exp},s:e}}function Ic(t){var e;const{authPayload:n,chains:r,methods:o}=t,s=n.statement||"";if(!(r!=null&&r.length))return n;const i=n.chains,c=en(i,r);if(!(c!=null&&c.length))throw new Error("No supported chains");const f=Xr(n.resources);if(!f)return n;bt(f);const a=Jr(f,"eip155");let l=n?.resources||[];if(a!=null&&a.length){const u=Qr(a),h=en(u,o);if(!(h!=null&&h.length))throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(u)}, supported: ${JSON.stringify(o)}`);const m=pn("request",h,{chains:c}),p=ro(f,"eip155",m);l=((e=n?.resources)==null?void 0:e.slice(0,-1))||[],l.push(Re(p))}return Gr(dn({},n),{statement:so(s,$e(l)),chains:c,resources:n!=null&&n.resources||l.length>0?l:void 0})}function Xr(t){const e=$e(t);if(e&&gn(e))return jt(e)}function Sc(t,e){var n;return(n=t?.att)==null?void 0:n.hasOwnProperty(e)}function Jr(t,e){var n,r;return(n=t?.att)!=null&&n[e]?Object.keys((r=t?.att)==null?void 0:r[e]):[]}function Oc(t){return t?.map(e=>Object.keys(e))||[]}function Qr(t){return t?.map(e=>{var n;return(n=e.split("/"))==null?void 0:n[1]})||[]}function to(t){return Buffer.from(JSON.stringify(t)).toString("base64")}function eo(t){return JSON.parse(Buffer.from(t,"base64").toString("utf-8"))}function bt(t){if(!t)throw new Error("No recap provided, value is undefined");if(!t.att)throw new Error("No `att` property found");const e=Object.keys(t.att);if(!(e!=null&&e.length))throw new Error("No resources found in `att` property");e.forEach(n=>{const r=t.att[n];if(Array.isArray(r))throw new Error(`Resource must be an object: ${n}`);if(typeof r!="object")throw new Error(`Resource must be an object: ${n}`);if(!Object.keys(r).length)throw new Error(`Resource object is empty: ${n}`);Object.keys(r).forEach(o=>{const s=r[o];if(!Array.isArray(s))throw new Error(`Ability limits ${o} must be an array of objects, found: ${s}`);if(!s.length)throw new Error(`Value of ${o} is empty array, must be an array with objects`);s.forEach(i=>{if(typeof i!="object")throw new Error(`Ability limits (${o}) must be an array of objects, found: ${i}`)})})})}function no(t,e,n,r={}){return n?.sort((o,s)=>o.localeCompare(s)),{att:{[t]:pn(e,n,r)}}}function ro(t,e,n){var r;t.att[e]=dn({},n);const o=(r=Object.keys(t.att))==null?void 0:r.sort((i,c)=>i.localeCompare(c)),s={att:{}};return o.reduce((i,c)=>(i.att[c]=t.att[c],i),s)}function pn(t,e,n={}){e=e?.sort((o,s)=>o.localeCompare(s));const r=e.map(o=>({[`${t}/${o}`]:[n]}));return Object.assign({},...r)}function Re(t){return bt(t),`urn:recap:${to(t).replace(/=/g,"")}`}function jt(t){const e=eo(t.replace("urn:recap:",""));return bt(e),e}function Nc(t,e,n){const r=no(t,e,n);return Re(r)}function gn(t){return t&&t.includes("urn:recap:")}function Uc(t,e){const n=jt(t),r=jt(e),o=oo(n,r);return Re(o)}function oo(t,e){bt(t),bt(e);const n=Object.keys(t.att).concat(Object.keys(e.att)).sort((o,s)=>o.localeCompare(s)),r={att:{}};return n.forEach(o=>{var s,i;Object.keys(((s=t.att)==null?void 0:s[o])||{}).concat(Object.keys(((i=e.att)==null?void 0:i[o])||{})).sort((c,f)=>c.localeCompare(f)).forEach(c=>{var f,a;r.att[o]=Gr(dn({},r.att[o]),{[c]:((f=t.att[o])==null?void 0:f[c])||((a=e.att[o])==null?void 0:a[c])})})}),r}function bn(t="",e){bt(e);const n="I further authorize the stated URI to perform the following actions on my behalf: ";if(t.includes(n))return t;const r=[];let o=0;Object.keys(e.att).forEach(c=>{const f=Object.keys(e.att[c]).map(u=>({ability:u.split("/")[0],action:u.split("/")[1]}));f.sort((u,h)=>u.action.localeCompare(h.action));const a={};f.forEach(u=>{a[u.ability]||(a[u.ability]=[]),a[u.ability].push(u.action)});const l=Object.keys(a).map(u=>(o++,`(${o}) '${u}': '${a[u].join("', '")}' for '${c}'.`));r.push(l.join(", ").replace(".,","."))});const s=r.join(" "),i=`${n}${s}`;return`${t?t+" ":""}${i}`}function _c(t){var e;const n=jt(t);bt(n);const r=(e=n.att)==null?void 0:e.eip155;return r?Object.keys(r).map(o=>o.split("/")[1]):[]}function Tc(t){const e=jt(t);bt(e);const n=[];return Object.values(e.att).forEach(r=>{Object.values(r).forEach(o=>{var s;(s=o?.[0])!=null&&s.chains&&n.push(o[0].chains)})}),[...new Set(n.flat())]}function so(t,e){if(!e)return t;const n=jt(e);return bt(n),bn(t,n)}function $e(t){if(!t)return;const e=t?.[t.length-1];return gn(e)?e:void 0}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */function io(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function yn(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}function mn(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function nt(t,...e){if(!io(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function co(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Rc(t,e){nt(t);const n=e.outputLen;if(t.length<n)throw new Error("digestInto() expects output buffer of length at least "+n)}function kt(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Jt(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function $c(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}const Lc=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Cc(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function wn(t){if(typeof t=="string")t=Cc(t);else if(io(t))t=xn(t);else throw new Error("Uint8Array expected, got "+typeof t);return t}function jc(t,e){if(e==null||typeof e!="object")throw new Error("options must be defined");return Object.assign(t,e)}function kc(t,e){if(t.length!==e.length)return!1;let n=0;for(let r=0;r<t.length;r++)n|=t[r]^e[r];return n===0}const Pc=(t,e)=>{function n(r,...o){if(nt(r),!Lc)throw new Error("Non little-endian hardware is not yet supported");if(t.nonceLength!==void 0){const l=o[0];if(!l)throw new Error("nonce / iv required");t.varSizeNonce?nt(l):nt(l,t.nonceLength)}const s=t.tagLength;s&&o[1]!==void 0&&nt(o[1]);const i=e(r,...o),c=(l,u)=>{if(u!==void 0){if(l!==2)throw new Error("cipher output not supported");nt(u)}};let f=!1;return{encrypt(l,u){if(f)throw new Error("cannot encrypt() twice with same key + nonce");return f=!0,nt(l),c(i.encrypt.length,u),i.encrypt(l,u)},decrypt(l,u){if(nt(l),s&&l.length<s)throw new Error("invalid ciphertext length: smaller than tagLength="+s);return c(i.decrypt.length,u),i.decrypt(l,u)}}}return Object.assign(n,t),n};function fo(t,e,n=!0){if(e===void 0)return new Uint8Array(t);if(e.length!==t)throw new Error("invalid output length, expected "+t+", got: "+e.length);if(n&&!Dc(e))throw new Error("invalid output, must be aligned");return e}function ao(t,e,n,r){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),c=Number(n&s),f=r?4:0,a=r?0:4;t.setUint32(e+f,i,r),t.setUint32(e+a,c,r)}function Hc(t,e,n){yn(n);const r=new Uint8Array(16),o=$c(r);return ao(o,0,BigInt(e),n),ao(o,8,BigInt(t),n),r}function Dc(t){return t.byteOffset%4===0}function xn(t){return Uint8Array.from(t)}const uo=t=>Uint8Array.from(t.split("").map(e=>e.charCodeAt(0))),Mc=uo("expand 16-byte k"),Vc=uo("expand 32-byte k"),qc=kt(Mc),Kc=kt(Vc);function D(t,e){return t<<e|t>>>32-e}function vn(t){return t.byteOffset%4===0}const Le=64,Fc=16,lo=2**32-1,ho=new Uint32Array;function zc(t,e,n,r,o,s,i,c){const f=o.length,a=new Uint8Array(Le),l=kt(a),u=vn(o)&&vn(s),h=u?kt(o):ho,m=u?kt(s):ho;for(let p=0;p<f;i++){if(t(e,n,r,l,i,c),i>=lo)throw new Error("arx: counter overflow");const d=Math.min(Le,f-p);if(u&&d===Le){const I=p/4;if(p%4!==0)throw new Error("arx: invalid block position");for(let k=0,H;k<Fc;k++)H=I+k,m[H]=h[H]^l[k];p+=Le;continue}for(let I=0,k;I<d;I++)k=p+I,s[k]=o[k]^a[I];p+=d}}function Gc(t,e){const{allowShortKeys:n,extendNonceFn:r,counterLength:o,counterRight:s,rounds:i}=jc({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},e);if(typeof t!="function")throw new Error("core must be a function");return mn(o),mn(i),yn(s),yn(n),(c,f,a,l,u=0)=>{nt(c),nt(f),nt(a);const h=a.length;if(l===void 0&&(l=new Uint8Array(h)),nt(l),mn(u),u<0||u>=lo)throw new Error("arx: counter overflow");if(l.length<h)throw new Error(`arx: output (${l.length}) is shorter than data (${h})`);const m=[];let p=c.length,d,I;if(p===32)m.push(d=xn(c)),I=Kc;else if(p===16&&n)d=new Uint8Array(32),d.set(c),d.set(c,16),I=qc,m.push(d);else throw new Error(`arx: invalid 32-byte key, got length=${p}`);vn(f)||m.push(f=xn(f));const k=kt(d);if(r){if(f.length!==24)throw new Error("arx: extended nonce must be 24 bytes");r(I,k,kt(f.subarray(0,16)),k),f=f.subarray(16)}const H=16-o;if(H!==f.length)throw new Error(`arx: nonce must be ${H} or 16 bytes`);if(H!==12){const g=new Uint8Array(12);g.set(f,s?0:12-f.length),f=g,m.push(f)}const S=kt(f);return zc(t,I,k,S,a,l,u,i),Jt(...m),l}}const Z=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class Zc{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=wn(e),nt(e,32);const n=Z(e,0),r=Z(e,2),o=Z(e,4),s=Z(e,6),i=Z(e,8),c=Z(e,10),f=Z(e,12),a=Z(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|r<<3)&8191,this.r[2]=(r>>>10|o<<6)&7939,this.r[3]=(o>>>7|s<<9)&8191,this.r[4]=(s>>>4|i<<12)&255,this.r[5]=i>>>1&8190,this.r[6]=(i>>>14|c<<2)&8191,this.r[7]=(c>>>11|f<<5)&8065,this.r[8]=(f>>>8|a<<8)&8191,this.r[9]=a>>>5&127;for(let l=0;l<8;l++)this.pad[l]=Z(e,16+2*l)}process(e,n,r=!1){const o=r?0:2048,{h:s,r:i}=this,c=i[0],f=i[1],a=i[2],l=i[3],u=i[4],h=i[5],m=i[6],p=i[7],d=i[8],I=i[9],k=Z(e,n+0),H=Z(e,n+2),S=Z(e,n+4),g=Z(e,n+6),x=Z(e,n+8),_=Z(e,n+10),v=Z(e,n+12),O=Z(e,n+14);let T=s[0]+(k&8191),R=s[1]+((k>>>13|H<<3)&8191),E=s[2]+((H>>>10|S<<6)&8191),N=s[3]+((S>>>7|g<<9)&8191),B=s[4]+((g>>>4|x<<12)&8191),C=s[5]+(x>>>1&8191),b=s[6]+((x>>>14|_<<2)&8191),y=s[7]+((_>>>11|v<<5)&8191),A=s[8]+((v>>>8|O<<8)&8191),$=s[9]+(O>>>5|o),w=0,L=w+T*c+R*(5*I)+E*(5*d)+N*(5*p)+B*(5*m);w=L>>>13,L&=8191,L+=C*(5*h)+b*(5*u)+y*(5*l)+A*(5*a)+$*(5*f),w+=L>>>13,L&=8191;let j=w+T*f+R*c+E*(5*I)+N*(5*d)+B*(5*p);w=j>>>13,j&=8191,j+=C*(5*m)+b*(5*h)+y*(5*u)+A*(5*l)+$*(5*a),w+=j>>>13,j&=8191;let P=w+T*a+R*f+E*c+N*(5*I)+B*(5*d);w=P>>>13,P&=8191,P+=C*(5*p)+b*(5*m)+y*(5*h)+A*(5*u)+$*(5*l),w+=P>>>13,P&=8191;let V=w+T*l+R*a+E*f+N*c+B*(5*I);w=V>>>13,V&=8191,V+=C*(5*d)+b*(5*p)+y*(5*m)+A*(5*h)+$*(5*u),w+=V>>>13,V&=8191;let q=w+T*u+R*l+E*a+N*f+B*c;w=q>>>13,q&=8191,q+=C*(5*I)+b*(5*d)+y*(5*p)+A*(5*m)+$*(5*h),w+=q>>>13,q&=8191;let M=w+T*h+R*u+E*l+N*a+B*f;w=M>>>13,M&=8191,M+=C*c+b*(5*I)+y*(5*d)+A*(5*p)+$*(5*m),w+=M>>>13,M&=8191;let W=w+T*m+R*h+E*u+N*l+B*a;w=W>>>13,W&=8191,W+=C*f+b*c+y*(5*I)+A*(5*d)+$*(5*p),w+=W>>>13,W&=8191;let F=w+T*p+R*m+E*h+N*u+B*l;w=F>>>13,F&=8191,F+=C*a+b*f+y*c+A*(5*I)+$*(5*d),w+=F>>>13,F&=8191;let it=w+T*d+R*p+E*m+N*h+B*u;w=it>>>13,it&=8191,it+=C*l+b*a+y*f+A*c+$*(5*I),w+=it>>>13,it&=8191;let G=w+T*I+R*d+E*p+N*m+B*h;w=G>>>13,G&=8191,G+=C*u+b*l+y*a+A*f+$*c,w+=G>>>13,G&=8191,w=(w<<2)+w|0,w=w+L|0,L=w&8191,w=w>>>13,j+=w,s[0]=L,s[1]=j,s[2]=P,s[3]=V,s[4]=q,s[5]=M,s[6]=W,s[7]=F,s[8]=it,s[9]=G}finalize(){const{h:e,pad:n}=this,r=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let c=2;c<10;c++)e[c]+=o,o=e[c]>>>13,e[c]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,r[0]=e[0]+5,o=r[0]>>>13,r[0]&=8191;for(let c=1;c<10;c++)r[c]=e[c]+o,o=r[c]>>>13,r[c]&=8191;r[9]-=8192;let s=(o^1)-1;for(let c=0;c<10;c++)r[c]&=s;s=~s;for(let c=0;c<10;c++)e[c]=e[c]&s|r[c];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let i=e[0]+n[0];e[0]=i&65535;for(let c=1;c<8;c++)i=(e[c]+n[c]|0)+(i>>>16)|0,e[c]=i&65535;Jt(r)}update(e){co(this),e=wn(e),nt(e);const{buffer:n,blockLen:r}=this,o=e.length;for(let s=0;s<o;){const i=Math.min(r-this.pos,o-s);if(i===r){for(;r<=o-s;s+=r)this.process(e,s);continue}n.set(e.subarray(s,s+i),this.pos),this.pos+=i,s+=i,this.pos===r&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){Jt(this.h,this.r,this.buffer,this.pad)}digestInto(e){co(this),Rc(e,this),this.finished=!0;const{buffer:n,h:r}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let s=0;for(let i=0;i<8;i++)e[s++]=r[i]>>>0,e[s++]=r[i]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const r=e.slice(0,n);return this.destroy(),r}}function Wc(t){const e=(r,o)=>t(o).update(wn(r)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=r=>t(r),e}const Yc=Wc(t=>new Zc(t));function Xc(t,e,n,r,o,s=20){let i=t[0],c=t[1],f=t[2],a=t[3],l=e[0],u=e[1],h=e[2],m=e[3],p=e[4],d=e[5],I=e[6],k=e[7],H=o,S=n[0],g=n[1],x=n[2],_=i,v=c,O=f,T=a,R=l,E=u,N=h,B=m,C=p,b=d,y=I,A=k,$=H,w=S,L=g,j=x;for(let V=0;V<s;V+=2)_=_+R|0,$=D($^_,16),C=C+$|0,R=D(R^C,12),_=_+R|0,$=D($^_,8),C=C+$|0,R=D(R^C,7),v=v+E|0,w=D(w^v,16),b=b+w|0,E=D(E^b,12),v=v+E|0,w=D(w^v,8),b=b+w|0,E=D(E^b,7),O=O+N|0,L=D(L^O,16),y=y+L|0,N=D(N^y,12),O=O+N|0,L=D(L^O,8),y=y+L|0,N=D(N^y,7),T=T+B|0,j=D(j^T,16),A=A+j|0,B=D(B^A,12),T=T+B|0,j=D(j^T,8),A=A+j|0,B=D(B^A,7),_=_+E|0,j=D(j^_,16),y=y+j|0,E=D(E^y,12),_=_+E|0,j=D(j^_,8),y=y+j|0,E=D(E^y,7),v=v+N|0,$=D($^v,16),A=A+$|0,N=D(N^A,12),v=v+N|0,$=D($^v,8),A=A+$|0,N=D(N^A,7),O=O+B|0,w=D(w^O,16),C=C+w|0,B=D(B^C,12),O=O+B|0,w=D(w^O,8),C=C+w|0,B=D(B^C,7),T=T+R|0,L=D(L^T,16),b=b+L|0,R=D(R^b,12),T=T+R|0,L=D(L^T,8),b=b+L|0,R=D(R^b,7);let P=0;r[P++]=i+_|0,r[P++]=c+v|0,r[P++]=f+O|0,r[P++]=a+T|0,r[P++]=l+R|0,r[P++]=u+E|0,r[P++]=h+N|0,r[P++]=m+B|0,r[P++]=p+C|0,r[P++]=d+b|0,r[P++]=I+y|0,r[P++]=k+A|0,r[P++]=H+$|0,r[P++]=S+w|0,r[P++]=g+L|0,r[P++]=x+j|0}const Jc=Gc(Xc,{counterRight:!1,counterLength:4,allowShortKeys:!1}),Qc=new Uint8Array(16),po=(t,e)=>{t.update(e);const n=e.length%16;n&&t.update(Qc.subarray(n))},tf=new Uint8Array(32);function go(t,e,n,r,o){const s=t(e,n,tf),i=Yc.create(s);o&&po(i,o),po(i,r);const c=Hc(r.length,o?o.length:0,!0);i.update(c);const f=i.digest();return Jt(s,c),f}const ef=t=>(e,n,r)=>({encrypt(s,i){const c=s.length;i=fo(c+16,i,!1),i.set(s);const f=i.subarray(0,-16);t(e,n,f,f,1);const a=go(t,e,n,f,r);return i.set(a,c),Jt(a),i},decrypt(s,i){i=fo(s.length-16,i,!1);const c=s.subarray(0,-16),f=s.subarray(-16),a=go(t,e,n,c,r);if(!kc(f,a))throw new Error("invalid tag");return i.set(s.subarray(0,-16)),t(e,n,i,i,1),Jt(a),i}}),bo=Pc({blockSize:64,nonceLength:12,tagLength:16},ef(Jc));class yo extends Ue{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,sn(e);const r=ht(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?e.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=e.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),lt(s)}update(e){return Nt(this),this.iHash.update(e),this}digestInto(e){Nt(this),Ot(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:c}=this;return e=e,e.finished=o,e.destroyed=s,e.blockLen=i,e.outputLen=c,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const index_es_Ce=(t,e,n)=>new yo(t,e).update(n).digest();index_es_Ce.create=(t,e)=>new yo(t,e);function nf(t,e,n){return sn(t),n===void 0&&(n=new Uint8Array(t.outputLen)),index_es_Ce(t,ht(n),ht(e))}const En=Uint8Array.from([0]),mo=Uint8Array.of();function rf(t,e,n,r=32){sn(t),yt(r);const o=t.outputLen;if(r>255*o)throw new Error("Length should be <= 255*HashLen");const s=Math.ceil(r/o);n===void 0&&(n=mo);const i=new Uint8Array(s*o),c=index_es_Ce.create(t,e),f=c._cloneInto(),a=new Uint8Array(c.outputLen);for(let l=0;l<s;l++)En[0]=l+1,f.update(l===0?mo:a).update(n).update(En).digestInto(a),i.set(a,o*l),c._cloneInto(f);return c.destroy(),f.destroy(),lt(a,En),i.slice(0,r)}const of=(t,e,n,r,o)=>rf(t,nf(t,e,n),r,o),je=_e;/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const An=BigInt(0),Bn=BigInt(1);function he(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function In(t){if(!he(t))throw new Error("Uint8Array expected")}function pe(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}function ke(t){const e=t.toString(16);return e.length&1?"0"+e:e}function wo(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?An:BigInt("0x"+t)}const xo=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",sf=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ge(t){if(In(t),xo)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=sf[t[n]];return e}const wt={_0:48,_9:57,A:65,F:70,a:97,f:102};function vo(t){if(t>=wt._0&&t<=wt._9)return t-wt._0;if(t>=wt.A&&t<=wt.F)return t-(wt.A-10);if(t>=wt.a&&t<=wt.f)return t-(wt.a-10)}function Pe(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);if(xo)return Uint8Array.fromHex(t);const e=t.length,n=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(n);for(let o=0,s=0;o<n;o++,s+=2){const i=vo(t.charCodeAt(s)),c=vo(t.charCodeAt(s+1));if(i===void 0||c===void 0){const f=t[s]+t[s+1];throw new Error('hex string expected, got non-hex character "'+f+'" at index '+s)}r[o]=i*16+c}return r}function Vt(t){return wo(ge(t))}function He(t){return In(t),wo(ge(Uint8Array.from(t).reverse()))}function be(t,e){return Pe(t.toString(16).padStart(e*2,"0"))}function Sn(t,e){return be(t,e).reverse()}function rt(t,e,n){let r;if(typeof e=="string")try{r=Pe(e)}catch(s){throw new Error(t+" must be hex string or Uint8Array, cause: "+s)}else if(he(e))r=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const o=r.length;if(typeof n=="number"&&o!==n)throw new Error(t+" of length "+n+" expected, got "+o);return r}function De(...t){let e=0;for(let r=0;r<t.length;r++){const o=t[r];In(o),e+=o.length}const n=new Uint8Array(e);for(let r=0,o=0;r<t.length;r++){const s=t[r];n.set(s,o),o+=s.length}return n}const On=t=>typeof t=="bigint"&&An<=t;function Nn(t,e,n){return On(t)&&On(e)&&On(n)&&e<=t&&t<n}function Pt(t,e,n,r){if(!Nn(e,n,r))throw new Error("expected valid "+t+": "+n+" <= n < "+r+", got "+e)}function cf(t){let e;for(e=0;t>An;t>>=Bn,e+=1);return e}const Me=t=>(Bn<<BigInt(t))-Bn,Un=t=>new Uint8Array(t),Eo=t=>Uint8Array.from(t);function ff(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let r=Un(t),o=Un(t),s=0;const i=()=>{r.fill(1),o.fill(0),s=0},c=(...u)=>n(o,r,...u),f=(u=Un(0))=>{o=c(Eo([0]),u),r=c(),u.length!==0&&(o=c(Eo([1]),u),r=c())},a=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const h=[];for(;u<e;){r=c();const m=r.slice();h.push(m),u+=r.length}return De(...h)};return(u,h)=>{i(),f(u);let m;for(;!(m=h(a()));)f();return i(),m}}const af={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||he(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function ye(t,e,n={}){const r=(o,s,i)=>{const c=af[s];if(typeof c!="function")throw new Error("invalid validator function");const f=t[o];if(!(i&&f===void 0)&&!c(f,t))throw new Error("param "+String(o)+" is invalid. Expected "+s+", got "+f)};for(const[o,s]of Object.entries(e))r(o,s,!1);for(const[o,s]of Object.entries(n))r(o,s,!0);return t}function Ao(t){const e=new WeakMap;return(n,...r)=>{const o=e.get(n);if(o!==void 0)return o;const s=t(n,...r);return e.set(n,s),s}}const ot=BigInt(0),tt=BigInt(1),qt=BigInt(2),uf=BigInt(3),Bo=BigInt(4),Io=BigInt(5),So=BigInt(8);function st(t,e){const n=t%e;return n>=ot?n:e+n}function pt(t,e,n){let r=t;for(;e-- >ot;)r*=r,r%=n;return r}function _n(t,e){if(t===ot)throw new Error("invert: expected non-zero number");if(e<=ot)throw new Error("invert: expected positive modulus, got "+e);let n=st(t,e),r=e,o=ot,s=tt;for(;n!==ot;){const c=r/n,f=r%n,a=o-s*c;r=n,n=f,o=s,s=a}if(r!==tt)throw new Error("invert: does not exist");return st(o,e)}function Oo(t,e){const n=(t.ORDER+tt)/Bo,r=t.pow(e,n);if(!t.eql(t.sqr(r),e))throw new Error("Cannot find square root");return r}function lf(t,e){const n=(t.ORDER-Io)/So,r=t.mul(e,qt),o=t.pow(r,n),s=t.mul(e,o),i=t.mul(t.mul(s,qt),o),c=t.mul(s,t.sub(i,t.ONE));if(!t.eql(t.sqr(c),e))throw new Error("Cannot find square root");return c}function df(t){if(t<BigInt(3))throw new Error("sqrt is not defined for small field");let e=t-tt,n=0;for(;e%qt===ot;)e/=qt,n++;let r=qt;const o=me(t);for(;Uo(o,r)===1;)if(r++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return Oo;let s=o.pow(r,e);const i=(e+tt)/qt;return function(f,a){if(f.is0(a))return a;if(Uo(f,a)!==1)throw new Error("Cannot find square root");let l=n,u=f.mul(f.ONE,s),h=f.pow(a,e),m=f.pow(a,i);for(;!f.eql(h,f.ONE);){if(f.is0(h))return f.ZERO;let p=1,d=f.sqr(h);for(;!f.eql(d,f.ONE);)if(p++,d=f.sqr(d),p===l)throw new Error("Cannot find square root");const I=tt<<BigInt(l-p-1),k=f.pow(u,I);l=p,u=f.sqr(k),h=f.mul(h,u),m=f.mul(m,k)}return m}}function hf(t){return t%Bo===uf?Oo:t%So===Io?lf:df(t)}const pf=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function gf(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=pf.reduce((r,o)=>(r[o]="function",r),e);return ye(t,n)}function bf(t,e,n){if(n<ot)throw new Error("invalid exponent, negatives unsupported");if(n===ot)return t.ONE;if(n===tt)return e;let r=t.ONE,o=e;for(;n>ot;)n&tt&&(r=t.mul(r,o)),o=t.sqr(o),n>>=tt;return r}function No(t,e,n=!1){const r=new Array(e.length).fill(n?t.ZERO:void 0),o=e.reduce((i,c,f)=>t.is0(c)?i:(r[f]=i,t.mul(i,c)),t.ONE),s=t.inv(o);return e.reduceRight((i,c,f)=>t.is0(c)?i:(r[f]=t.mul(i,r[f]),t.mul(i,c)),s),r}function Uo(t,e){const n=(t.ORDER-tt)/qt,r=t.pow(e,n),o=t.eql(r,t.ONE),s=t.eql(r,t.ZERO),i=t.eql(r,t.neg(t.ONE));if(!o&&!s&&!i)throw new Error("invalid Legendre symbol result");return o?1:s?0:-1}function _o(t,e){e!==void 0&&yt(e);const n=e!==void 0?e:t.toString(2).length,r=Math.ceil(n/8);return{nBitLength:n,nByteLength:r}}function me(t,e,n=!1,r={}){if(t<=ot)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:o,nByteLength:s}=_o(t,e);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let i;const c=Object.freeze({ORDER:t,isLE:n,BITS:o,BYTES:s,MASK:Me(o),ZERO:ot,ONE:tt,create:f=>st(f,t),isValid:f=>{if(typeof f!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof f);return ot<=f&&f<t},is0:f=>f===ot,isOdd:f=>(f&tt)===tt,neg:f=>st(-f,t),eql:(f,a)=>f===a,sqr:f=>st(f*f,t),add:(f,a)=>st(f+a,t),sub:(f,a)=>st(f-a,t),mul:(f,a)=>st(f*a,t),pow:(f,a)=>bf(c,f,a),div:(f,a)=>st(f*_n(a,t),t),sqrN:f=>f*f,addN:(f,a)=>f+a,subN:(f,a)=>f-a,mulN:(f,a)=>f*a,inv:f=>_n(f,t),sqrt:r.sqrt||(f=>(i||(i=hf(t)),i(c,f))),toBytes:f=>n?Sn(f,s):be(f,s),fromBytes:f=>{if(f.length!==s)throw new Error("Field.fromBytes: expected "+s+" bytes, got "+f.length);return n?He(f):Vt(f)},invertBatch:f=>No(c,f),cmov:(f,a,l)=>l?a:f});return Object.freeze(c)}function To(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function Ro(t){const e=To(t);return e+Math.ceil(e/2)}function yf(t,e,n=!1){const r=t.length,o=To(e),s=Ro(e);if(r<16||r<s||r>1024)throw new Error("expected "+s+"-1024 bytes of input, got "+r);const i=n?He(t):Vt(t),c=st(i,e-tt)+tt;return n?Sn(c,o):be(c,o)}const $o=BigInt(0),Tn=BigInt(1);function Rn(t,e){const n=e.negate();return t?n:e}function Lo(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function $n(t,e){Lo(t,e);const n=Math.ceil(e/t)+1,r=2**(t-1),o=2**t,s=Me(t),i=BigInt(t);return{windows:n,windowSize:r,mask:s,maxNumber:o,shiftBy:i}}function Co(t,e,n){const{windowSize:r,mask:o,maxNumber:s,shiftBy:i}=n;let c=Number(t&o),f=t>>i;c>r&&(c-=s,f+=Tn);const a=e*r,l=a+Math.abs(c)-1,u=c===0,h=c<0,m=e%2!==0;return{nextN:f,offset:l,isZero:u,isNeg:h,isNegF:m,offsetF:a}}function mf(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((n,r)=>{if(!(n instanceof e))throw new Error("invalid point at index "+r)})}function wf(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((n,r)=>{if(!e.isValid(n))throw new Error("invalid scalar at index "+r)})}const Ln=new WeakMap,jo=new WeakMap;function Cn(t){return jo.get(t)||1}function xf(t,e){return{constTimeNegate:Rn,hasPrecomputes(n){return Cn(n)!==1},unsafeLadder(n,r,o=t.ZERO){let s=n;for(;r>$o;)r&Tn&&(o=o.add(s)),s=s.double(),r>>=Tn;return o},precomputeWindow(n,r){const{windows:o,windowSize:s}=$n(r,e),i=[];let c=n,f=c;for(let a=0;a<o;a++){f=c,i.push(f);for(let l=1;l<s;l++)f=f.add(c),i.push(f);c=f.double()}return i},wNAF(n,r,o){let s=t.ZERO,i=t.BASE;const c=$n(n,e);for(let f=0;f<c.windows;f++){const{nextN:a,offset:l,isZero:u,isNeg:h,isNegF:m,offsetF:p}=Co(o,f,c);o=a,u?i=i.add(Rn(m,r[p])):s=s.add(Rn(h,r[l]))}return{p:s,f:i}},wNAFUnsafe(n,r,o,s=t.ZERO){const i=$n(n,e);for(let c=0;c<i.windows&&o!==$o;c++){const{nextN:f,offset:a,isZero:l,isNeg:u}=Co(o,c,i);if(o=f,!l){const h=r[a];s=s.add(u?h.negate():h)}}return s},getPrecomputes(n,r,o){let s=Ln.get(r);return s||(s=this.precomputeWindow(r,n),n!==1&&Ln.set(r,o(s))),s},wNAFCached(n,r,o){const s=Cn(n);return this.wNAF(s,this.getPrecomputes(s,n,o),r)},wNAFCachedUnsafe(n,r,o,s){const i=Cn(n);return i===1?this.unsafeLadder(n,r,s):this.wNAFUnsafe(i,this.getPrecomputes(i,n,o),r,s)},setWindowSize(n,r){Lo(r,e),jo.set(n,r),Ln.delete(n)}}}function vf(t,e,n,r){mf(n,t),wf(r,e);const o=n.length,s=r.length;if(o!==s)throw new Error("arrays of points and scalars must have equal length");const i=t.ZERO,c=cf(BigInt(o));let f=1;c>12?f=c-3:c>4?f=c-2:c>0&&(f=2);const a=Me(f),l=new Array(Number(a)+1).fill(i),u=Math.floor((e.BITS-1)/f)*f;let h=i;for(let m=u;m>=0;m-=f){l.fill(i);for(let d=0;d<s;d++){const I=r[d],k=Number(I>>BigInt(m)&a);l[k]=l[k].add(n[d])}let p=i;for(let d=l.length-1,I=i;d>0;d--)I=I.add(l[d]),p=p.add(I);if(h=h.add(p),m!==0)for(let d=0;d<f;d++)h=h.double()}return h}function ko(t){return gf(t.Fp),ye(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({..._o(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}BigInt(0),BigInt(1),BigInt(2),BigInt(8);const we=BigInt(0),Qt=BigInt(1),Ve=BigInt(2);function Ef(t){return ye(t,{adjustScalarBytes:"function",powPminus2:"function"}),Object.freeze({...t})}function Af(t){const e=Ef(t),{P:n,type:r,adjustScalarBytes:o,powPminus2:s}=e,i=r==="x25519";if(!i&&r!=="x448")throw new Error("invalid type");const c=i?255:448,f=i?32:56,a=BigInt(i?9:5),l=BigInt(i?121665:39081),u=i?Ve**BigInt(254):Ve**BigInt(447),h=i?BigInt(8)*Ve**BigInt(251)-Qt:BigInt(4)*Ve**BigInt(445)-Qt,m=u+h+Qt,p=v=>st(v,n),d=I(a);function I(v){return Sn(p(v),f)}function k(v){const O=rt("u coordinate",v,f);return i&&(O[31]&=127),p(He(O))}function H(v){return He(o(rt("scalar",v,f)))}function S(v,O){const T=_(k(O),H(v));if(T===we)throw new Error("invalid private or public key received");return I(T)}function g(v){return S(v,d)}function x(v,O,T){const R=p(v*(O-T));return O=p(O-R),T=p(T+R),{x_2:O,x_3:T}}function _(v,O){Pt("u",v,we,n),Pt("scalar",O,u,m);const T=O,R=v;let E=Qt,N=we,B=v,C=Qt,b=we;for(let A=BigInt(c-1);A>=we;A--){const $=T>>A&Qt;b^=$,{x_2:E,x_3:B}=x(b,E,B),{x_2:N,x_3:C}=x(b,N,C),b=$;const w=E+N,L=p(w*w),j=E-N,P=p(j*j),V=L-P,q=B+C,M=B-C,W=p(M*w),F=p(q*j),it=W+F,G=W-F;B=p(it*it),C=p(R*p(G*G)),E=p(L*P),N=p(V*(L+p(l*V)))}({x_2:E,x_3:B}=x(b,E,B)),{x_2:N,x_3:C}=x(b,N,C);const y=s(N);return p(E*y)}return{scalarMult:S,scalarMultBase:g,getSharedSecret:(v,O)=>S(v,O),getPublicKey:v=>g(v),utils:{randomPrivateKey:()=>e.randomBytes(f)},GuBytes:d.slice()}}const jn=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");BigInt(0);const Bf=BigInt(1),Po=BigInt(2),If=BigInt(3),Sf=BigInt(5);BigInt(8);function Of(t){const e=BigInt(10),n=BigInt(20),r=BigInt(40),o=BigInt(80),s=jn,c=t*t%s*t%s,f=pt(c,Po,s)*c%s,a=pt(f,Bf,s)*t%s,l=pt(a,Sf,s)*a%s,u=pt(l,e,s)*l%s,h=pt(u,n,s)*u%s,m=pt(h,r,s)*h%s,p=pt(m,o,s)*m%s,d=pt(p,o,s)*m%s,I=pt(d,e,s)*l%s;return{pow_p_5_8:pt(I,Po,s)*t%s,b2:c}}function Nf(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const kn=Af({P:jn,type:"x25519",powPminus2:t=>{const e=jn,{pow_p_5_8:n,b2:r}=Of(t);return st(pt(n,If,e)*r,e)},adjustScalarBytes:Nf,randomBytes:Xt});function Ho(t){t.lowS!==void 0&&pe("lowS",t.lowS),t.prehash!==void 0&&pe("prehash",t.prehash)}function Uf(t){const e=ko(t);ye(e,{a:"field",b:"field"},{allowInfinityPoint:"boolean",allowedPrivateKeyLengths:"array",clearCofactor:"function",fromBytes:"function",isTorsionFree:"function",toBytes:"function",wrapPrivateKey:"boolean"});const{endo:n,Fp:r,a:o}=e;if(n){if(!r.eql(o,r.ZERO))throw new Error("invalid endo: CURVE.a must be 0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function')}return Object.freeze({...e})}class _f extends Error{constructor(e=""){super(e)}}const xt={Err:_f,_tlv:{encode:(t,e)=>{const{Err:n}=xt;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length&1)throw new n("tlv.encode: unpadded data");const r=e.length/2,o=ke(r);if(o.length/2&128)throw new n("tlv.encode: long form length too big");const s=r>127?ke(o.length/2|128):"";return ke(t)+s+o+e},decode(t,e){const{Err:n}=xt;let r=0;if(t<0||t>256)throw new n("tlv.encode: wrong tag");if(e.length<2||e[r++]!==t)throw new n("tlv.decode: wrong tlv");const o=e[r++],s=!!(o&128);let i=0;if(!s)i=o;else{const f=o&127;if(!f)throw new n("tlv.decode(long): indefinite length not supported");if(f>4)throw new n("tlv.decode(long): byte length is too big");const a=e.subarray(r,r+f);if(a.length!==f)throw new n("tlv.decode: length bytes not complete");if(a[0]===0)throw new n("tlv.decode(long): zero leftmost byte");for(const l of a)i=i<<8|l;if(r+=f,i<128)throw new n("tlv.decode(long): not minimal encoding")}const c=e.subarray(r,r+i);if(c.length!==i)throw new n("tlv.decode: wrong value length");return{v:c,l:e.subarray(r+i)}}},_int:{encode(t){const{Err:e}=xt;if(t<vt)throw new e("integer: negative integers are not allowed");let n=ke(t);if(Number.parseInt(n[0],16)&8&&(n="00"+n),n.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return n},decode(t){const{Err:e}=xt;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return Vt(t)}},toSig(t){const{Err:e,_int:n,_tlv:r}=xt,o=rt("signature",t),{v:s,l:i}=r.decode(48,o);if(i.length)throw new e("invalid signature: left bytes after parsing");const{v:c,l:f}=r.decode(2,s),{v:a,l}=r.decode(2,f);if(l.length)throw new e("invalid signature: left bytes after parsing");return{r:n.decode(c),s:n.decode(a)}},hexFromSig(t){const{_tlv:e,_int:n}=xt,r=e.encode(2,n.encode(t.r)),o=e.encode(2,n.encode(t.s)),s=r+o;return e.encode(48,s)}};function Pn(t,e){return ge(be(t,e))}const vt=BigInt(0),z=BigInt(1);BigInt(2);const Hn=BigInt(3),Tf=BigInt(4);function Rf(t){const e=Uf(t),{Fp:n}=e,r=me(e.n,e.nBitLength),o=e.toBytes||((S,g,x)=>{const _=g.toAffine();return De(Uint8Array.from([4]),n.toBytes(_.x),n.toBytes(_.y))}),s=e.fromBytes||(S=>{const g=S.subarray(1),x=n.fromBytes(g.subarray(0,n.BYTES)),_=n.fromBytes(g.subarray(n.BYTES,2*n.BYTES));return{x,y:_}});function i(S){const{a:g,b:x}=e,_=n.sqr(S),v=n.mul(_,S);return n.add(n.add(v,n.mul(S,g)),x)}function c(S,g){const x=n.sqr(g),_=i(S);return n.eql(x,_)}if(!c(e.Gx,e.Gy))throw new Error("bad curve params: generator point");const f=n.mul(n.pow(e.a,Hn),Tf),a=n.mul(n.sqr(e.b),BigInt(27));if(n.is0(n.add(f,a)))throw new Error("bad curve params: a or b");function l(S){return Nn(S,z,e.n)}function u(S){const{allowedPrivateKeyLengths:g,nByteLength:x,wrapPrivateKey:_,n:v}=e;if(g&&typeof S!="bigint"){if(he(S)&&(S=ge(S)),typeof S!="string"||!g.includes(S.length))throw new Error("invalid private key");S=S.padStart(x*2,"0")}let O;try{O=typeof S=="bigint"?S:Vt(rt("private key",S,x))}catch{throw new Error("invalid private key, expected hex or "+x+" bytes, got "+typeof S)}return _&&(O=st(O,v)),Pt("private key",O,z,v),O}function h(S){if(!(S instanceof d))throw new Error("ProjectivePoint expected")}const m=Ao((S,g)=>{const{px:x,py:_,pz:v}=S;if(n.eql(v,n.ONE))return{x,y:_};const O=S.is0();g==null&&(g=O?n.ONE:n.inv(v));const T=n.mul(x,g),R=n.mul(_,g),E=n.mul(v,g);if(O)return{x:n.ZERO,y:n.ZERO};if(!n.eql(E,n.ONE))throw new Error("invZ was invalid");return{x:T,y:R}}),p=Ao(S=>{if(S.is0()){if(e.allowInfinityPoint&&!n.is0(S.py))return;throw new Error("bad point: ZERO")}const{x:g,y:x}=S.toAffine();if(!n.isValid(g)||!n.isValid(x))throw new Error("bad point: x or y not FE");if(!c(g,x))throw new Error("bad point: equation left != right");if(!S.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class d{constructor(g,x,_){if(g==null||!n.isValid(g))throw new Error("x required");if(x==null||!n.isValid(x)||n.is0(x))throw new Error("y required");if(_==null||!n.isValid(_))throw new Error("z required");this.px=g,this.py=x,this.pz=_,Object.freeze(this)}static fromAffine(g){const{x,y:_}=g||{};if(!g||!n.isValid(x)||!n.isValid(_))throw new Error("invalid affine point");if(g instanceof d)throw new Error("projective point not allowed");const v=O=>n.eql(O,n.ZERO);return v(x)&&v(_)?d.ZERO:new d(x,_,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(g){const x=No(n,g.map(_=>_.pz));return g.map((_,v)=>_.toAffine(x[v])).map(d.fromAffine)}static fromHex(g){const x=d.fromAffine(s(rt("pointHex",g)));return x.assertValidity(),x}static fromPrivateKey(g){return d.BASE.multiply(u(g))}static msm(g,x){return vf(d,r,g,x)}_setWindowSize(g){H.setWindowSize(this,g)}assertValidity(){p(this)}hasEvenY(){const{y:g}=this.toAffine();if(n.isOdd)return!n.isOdd(g);throw new Error("Field doesn't support isOdd")}equals(g){h(g);const{px:x,py:_,pz:v}=this,{px:O,py:T,pz:R}=g,E=n.eql(n.mul(x,R),n.mul(O,v)),N=n.eql(n.mul(_,R),n.mul(T,v));return E&&N}negate(){return new d(this.px,n.neg(this.py),this.pz)}double(){const{a:g,b:x}=e,_=n.mul(x,Hn),{px:v,py:O,pz:T}=this;let R=n.ZERO,E=n.ZERO,N=n.ZERO,B=n.mul(v,v),C=n.mul(O,O),b=n.mul(T,T),y=n.mul(v,O);return y=n.add(y,y),N=n.mul(v,T),N=n.add(N,N),R=n.mul(g,N),E=n.mul(_,b),E=n.add(R,E),R=n.sub(C,E),E=n.add(C,E),E=n.mul(R,E),R=n.mul(y,R),N=n.mul(_,N),b=n.mul(g,b),y=n.sub(B,b),y=n.mul(g,y),y=n.add(y,N),N=n.add(B,B),B=n.add(N,B),B=n.add(B,b),B=n.mul(B,y),E=n.add(E,B),b=n.mul(O,T),b=n.add(b,b),B=n.mul(b,y),R=n.sub(R,B),N=n.mul(b,C),N=n.add(N,N),N=n.add(N,N),new d(R,E,N)}add(g){h(g);const{px:x,py:_,pz:v}=this,{px:O,py:T,pz:R}=g;let E=n.ZERO,N=n.ZERO,B=n.ZERO;const C=e.a,b=n.mul(e.b,Hn);let y=n.mul(x,O),A=n.mul(_,T),$=n.mul(v,R),w=n.add(x,_),L=n.add(O,T);w=n.mul(w,L),L=n.add(y,A),w=n.sub(w,L),L=n.add(x,v);let j=n.add(O,R);return L=n.mul(L,j),j=n.add(y,$),L=n.sub(L,j),j=n.add(_,v),E=n.add(T,R),j=n.mul(j,E),E=n.add(A,$),j=n.sub(j,E),B=n.mul(C,L),E=n.mul(b,$),B=n.add(E,B),E=n.sub(A,B),B=n.add(A,B),N=n.mul(E,B),A=n.add(y,y),A=n.add(A,y),$=n.mul(C,$),L=n.mul(b,L),A=n.add(A,$),$=n.sub(y,$),$=n.mul(C,$),L=n.add(L,$),y=n.mul(A,L),N=n.add(N,y),y=n.mul(j,L),E=n.mul(w,E),E=n.sub(E,y),y=n.mul(w,A),B=n.mul(j,B),B=n.add(B,y),new d(E,N,B)}subtract(g){return this.add(g.negate())}is0(){return this.equals(d.ZERO)}wNAF(g){return H.wNAFCached(this,g,d.normalizeZ)}multiplyUnsafe(g){const{endo:x,n:_}=e;Pt("scalar",g,vt,_);const v=d.ZERO;if(g===vt)return v;if(this.is0()||g===z)return this;if(!x||H.hasPrecomputes(this))return H.wNAFCachedUnsafe(this,g,d.normalizeZ);let{k1neg:O,k1:T,k2neg:R,k2:E}=x.splitScalar(g),N=v,B=v,C=this;for(;T>vt||E>vt;)T&z&&(N=N.add(C)),E&z&&(B=B.add(C)),C=C.double(),T>>=z,E>>=z;return O&&(N=N.negate()),R&&(B=B.negate()),B=new d(n.mul(B.px,x.beta),B.py,B.pz),N.add(B)}multiply(g){const{endo:x,n:_}=e;Pt("scalar",g,z,_);let v,O;if(x){const{k1neg:T,k1:R,k2neg:E,k2:N}=x.splitScalar(g);let{p:B,f:C}=this.wNAF(R),{p:b,f:y}=this.wNAF(N);B=H.constTimeNegate(T,B),b=H.constTimeNegate(E,b),b=new d(n.mul(b.px,x.beta),b.py,b.pz),v=B.add(b),O=C.add(y)}else{const{p:T,f:R}=this.wNAF(g);v=T,O=R}return d.normalizeZ([v,O])[0]}multiplyAndAddUnsafe(g,x,_){const v=d.BASE,O=(R,E)=>E===vt||E===z||!R.equals(v)?R.multiplyUnsafe(E):R.multiply(E),T=O(this,x).add(O(g,_));return T.is0()?void 0:T}toAffine(g){return m(this,g)}isTorsionFree(){const{h:g,isTorsionFree:x}=e;if(g===z)return!0;if(x)return x(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:g,clearCofactor:x}=e;return g===z?this:x?x(d,this):this.multiplyUnsafe(e.h)}toRawBytes(g=!0){return pe("isCompressed",g),this.assertValidity(),o(d,this,g)}toHex(g=!0){return pe("isCompressed",g),ge(this.toRawBytes(g))}}d.BASE=new d(e.Gx,e.Gy,n.ONE),d.ZERO=new d(n.ZERO,n.ONE,n.ZERO);const{endo:I,nBitLength:k}=e,H=xf(d,I?Math.ceil(k/2):k);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:u,weierstrassEquation:i,isWithinCurveOrder:l}}function $f(t){const e=ko(t);return ye(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Lf(t){const e=$f(t),{Fp:n,n:r,nByteLength:o,nBitLength:s}=e,i=n.BYTES+1,c=2*n.BYTES+1;function f(b){return st(b,r)}function a(b){return _n(b,r)}const{ProjectivePoint:l,normPrivateKeyToScalar:u,weierstrassEquation:h,isWithinCurveOrder:m}=Rf({...e,toBytes(b,y,A){const $=y.toAffine(),w=n.toBytes($.x),L=De;return pe("isCompressed",A),A?L(Uint8Array.from([y.hasEvenY()?2:3]),w):L(Uint8Array.from([4]),w,n.toBytes($.y))},fromBytes(b){const y=b.length,A=b[0],$=b.subarray(1);if(y===i&&(A===2||A===3)){const w=Vt($);if(!Nn(w,z,n.ORDER))throw new Error("Point is not on curve");const L=h(w);let j;try{j=n.sqrt(L)}catch(q){const M=q instanceof Error?": "+q.message:"";throw new Error("Point is not on curve"+M)}const P=(j&z)===z;return(A&1)===1!==P&&(j=n.neg(j)),{x:w,y:j}}else if(y===c&&A===4){const w=n.fromBytes($.subarray(0,n.BYTES)),L=n.fromBytes($.subarray(n.BYTES,2*n.BYTES));return{x:w,y:L}}else{const w=i,L=c;throw new Error("invalid Point, expected length of "+w+", or uncompressed "+L+", got "+y)}}});function p(b){const y=r>>z;return b>y}function d(b){return p(b)?f(-b):b}const I=(b,y,A)=>Vt(b.slice(y,A));class k{constructor(y,A,$){Pt("r",y,z,r),Pt("s",A,z,r),this.r=y,this.s=A,$!=null&&(this.recovery=$),Object.freeze(this)}static fromCompact(y){const A=o;return y=rt("compactSignature",y,A*2),new k(I(y,0,A),I(y,A,2*A))}static fromDER(y){const{r:A,s:$}=xt.toSig(rt("DER",y));return new k(A,$)}assertValidity(){}addRecoveryBit(y){return new k(this.r,this.s,y)}recoverPublicKey(y){const{r:A,s:$,recovery:w}=this,L=v(rt("msgHash",y));if(w==null||![0,1,2,3].includes(w))throw new Error("recovery id invalid");const j=w===2||w===3?A+e.n:A;if(j>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const P=(w&1)===0?"02":"03",V=l.fromHex(P+Pn(j,n.BYTES)),q=a(j),M=f(-L*q),W=f($*q),F=l.BASE.multiplyAndAddUnsafe(V,M,W);if(!F)throw new Error("point at infinify");return F.assertValidity(),F}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new k(this.r,f(-this.s),this.recovery):this}toDERRawBytes(){return Pe(this.toDERHex())}toDERHex(){return xt.hexFromSig(this)}toCompactRawBytes(){return Pe(this.toCompactHex())}toCompactHex(){const y=o;return Pn(this.r,y)+Pn(this.s,y)}}const H={isValidPrivateKey(b){try{return u(b),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const b=Ro(e.n);return yf(e.randomBytes(b),e.n)},precompute(b=8,y=l.BASE){return y._setWindowSize(b),y.multiply(BigInt(3)),y}};function S(b,y=!0){return l.fromPrivateKey(b).toRawBytes(y)}function g(b){if(typeof b=="bigint")return!1;if(b instanceof l)return!0;const A=rt("key",b).length,$=n.BYTES,w=$+1,L=2*$+1;if(!(e.allowedPrivateKeyLengths||o===w))return A===w||A===L}function x(b,y,A=!0){if(g(b)===!0)throw new Error("first arg must be private key");if(g(y)===!1)throw new Error("second arg must be public key");return l.fromHex(y).multiply(u(b)).toRawBytes(A)}const _=e.bits2int||function(b){if(b.length>8192)throw new Error("input is too large");const y=Vt(b),A=b.length*8-s;return A>0?y>>BigInt(A):y},v=e.bits2int_modN||function(b){return f(_(b))},O=Me(s);function T(b){return Pt("num < 2^"+s,b,vt,O),be(b,o)}function R(b,y,A=E){if(["recovered","canonical"].some(G=>G in A))throw new Error("sign() legacy options not supported");const{hash:$,randomBytes:w}=e;let{lowS:L,prehash:j,extraEntropy:P}=A;L==null&&(L=!0),b=rt("msgHash",b),Ho(A),j&&(b=rt("prehashed msgHash",$(b)));const V=v(b),q=u(y),M=[T(q),T(V)];if(P!=null&&P!==!1){const G=P===!0?w(n.BYTES):P;M.push(rt("extraEntropy",G))}const W=De(...M),F=V;function it(G){const Gt=_(G);if(!m(Gt))return;const Ge=a(Gt),re=l.BASE.multiply(Gt).toAffine(),Dt=f(re.x);if(Dt===vt)return;const oe=f(Ge*f(F+Dt*q));if(oe===vt)return;let Zt=(re.x===Dt?0:2)|Number(re.y&z),Jn=oe;return L&&p(oe)&&(Jn=d(oe),Zt^=1),new k(Dt,Jn,Zt)}return{seed:W,k2sig:it}}const E={lowS:e.lowS,prehash:!1},N={lowS:e.lowS,prehash:!1};function B(b,y,A=E){const{seed:$,k2sig:w}=R(b,y,A),L=e;return ff(L.hash.outputLen,L.nByteLength,L.hmac)($,w)}l.BASE._setWindowSize(8);function C(b,y,A,$=N){const w=b;y=rt("msgHash",y),A=rt("publicKey",A);const{lowS:L,prehash:j,format:P}=$;if(Ho($),"strict"in $)throw new Error("options.strict was renamed to lowS");if(P!==void 0&&P!=="compact"&&P!=="der")throw new Error("format must be compact or der");const V=typeof w=="string"||he(w),q=!V&&!P&&typeof w=="object"&&w!==null&&typeof w.r=="bigint"&&typeof w.s=="bigint";if(!V&&!q)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let M,W;try{if(q&&(M=new k(w.r,w.s)),V){try{P!=="compact"&&(M=k.fromDER(w))}catch(Zt){if(!(Zt instanceof xt.Err))throw Zt}!M&&P!=="der"&&(M=k.fromCompact(w))}W=l.fromHex(A)}catch{return!1}if(!M||L&&M.hasHighS())return!1;j&&(y=e.hash(y));const{r:F,s:it}=M,G=v(y),Gt=a(it),Ge=f(G*Gt),re=f(F*Gt),Dt=l.BASE.multiplyAndAddUnsafe(W,Ge,re)?.toAffine();return Dt?f(Dt.x)===F:!1}return{CURVE:e,getPublicKey:S,getSharedSecret:x,sign:B,verify:C,ProjectivePoint:l,Signature:k,utils:H}}function Cf(t){return{hash:t,hmac:(e,...n)=>index_es_Ce(t,e,Ci(...n)),randomBytes:Xt}}function Dn(t,e){const n=r=>Lf({...t,...Cf(r)});return{...n(e),create:n}}const Do=me(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")),jf=Do.create(BigInt("-3")),kf=BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),Pf=Dn({a:jf,b:kf,Fp:Do,n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),h:BigInt(1),lowS:!1},_e),Mo=me(BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff")),Hf=Mo.create(BigInt("-3")),Df=BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef");Dn({a:Hf,b:Df,Fp:Mo,n:BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"),Gx:BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"),Gy:BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"),h:BigInt(1),lowS:!1},rc);const Vo=me(BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")),Mf=Vo.create(BigInt("-3")),Vf=BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00");Dn({a:Mf,b:Vf,Fp:Vo,n:BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"),Gx:BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"),Gy:BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"),h:BigInt(1),lowS:!1,allowedPrivateKeyLengths:[130,131,132]},nc);const qf=Pf,Mn="base10",et="base16",te="base64pad",qe="base64url",ee="utf8",Vn=0,ne=1,xe=2,Kf=0,qo=1,ve=12,qn=32;function Ff(){const t=kn.utils.randomPrivateKey(),e=kn.getPublicKey(t);return{privateKey:to_string_toString(t,et),publicKey:to_string_toString(e,et)}}function zf(){const t=Xt(qn);return to_string_toString(t,et)}function Gf(t,e){const n=kn.getSharedSecret(fromString(t,et),fromString(e,et)),r=of(je,n,void 0,void 0,qn);return to_string_toString(r,et)}function Zf(t){const e=je(fromString(t,et));return to_string_toString(e,et)}function Wf(t){const e=je(fromString(t,ee));return to_string_toString(e,et)}function Kn(t){return fromString(`${t}`,Mn)}function Kt(t){return Number(to_string_toString(t,Mn))}function Ko(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Fo(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4;return e+"=".repeat(n)}function Yf(t){const e=Kn(typeof t.type<"u"?t.type:Vn);if(Kt(e)===ne&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof t.senderPublicKey<"u"?fromString(t.senderPublicKey,et):void 0,r=typeof t.iv<"u"?fromString(t.iv,et):Xt(ve),o=fromString(t.symKey,et),s=bo(o,r).encrypt(fromString(t.message,ee)),i=Fn({type:e,sealed:s,iv:r,senderPublicKey:n});return t.encoding===qe?Ko(i):i}function Xf(t){const e=fromString(t.symKey,et),{sealed:n,iv:r}=Ke({encoded:t.encoded,encoding:t.encoding}),o=bo(e,r).decrypt(n);if(o===null)throw new Error("Failed to decrypt");return to_string_toString(o,ee)}function Jf(t,e){const n=Kn(xe),r=Xt(ve),o=fromString(t,ee),s=Fn({type:n,sealed:o,iv:r});return e===qe?Ko(s):s}function Qf(t,e){const{sealed:n}=Ke({encoded:t,encoding:e});return to_string_toString(n,ee)}function Fn(t){if(Kt(t.type)===xe)return to_string_toString(concat([t.type,t.sealed]),te);if(Kt(t.type)===ne){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return to_string_toString(concat([t.type,t.senderPublicKey,t.iv,t.sealed]),te)}return to_string_toString(concat([t.type,t.iv,t.sealed]),te)}function Ke(t){const e=(t.encoding||te)===qe?Fo(t.encoded):t.encoded,n=fromString(e,te),r=n.slice(Kf,qo),o=qo;if(Kt(r)===ne){const f=o+qn,a=f+ve,l=n.slice(o,f),u=n.slice(f,a),h=n.slice(a);return{type:r,sealed:h,iv:u,senderPublicKey:l}}if(Kt(r)===xe){const f=n.slice(o),a=Xt(ve);return{type:r,sealed:f,iv:a}}const s=o+ve,i=n.slice(o,s),c=n.slice(s);return{type:r,sealed:c,iv:i}}function ta(t,e){const n=Ke({encoded:t,encoding:e?.encoding});return zo({type:Kt(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?to_string_toString(n.senderPublicKey,et):void 0,receiverPublicKey:e?.receiverPublicKey})}function zo(t){const e=t?.type||Vn;if(e===ne){if(typeof t?.senderPublicKey>"u")throw new Error("missing sender public key");if(typeof t?.receiverPublicKey>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t?.senderPublicKey,receiverPublicKey:t?.receiverPublicKey}}function ea(t){return t.type===ne&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}function na(t){return t.type===xe}function Go(t){const e=Buffer.from(t.x,"base64"),n=Buffer.from(t.y,"base64");return concat([new Uint8Array([4]),e,n])}function ra(t,e){const[n,r,o]=t.split("."),s=Buffer.from(Fo(o),"base64");if(s.length!==64)throw new Error("Invalid signature length");const i=s.slice(0,32),c=s.slice(32,64),f=`${n}.${r}`,a=je(f),l=Go(e);if(!qf.verify(concat([i,c]),a,l))throw new Error("Invalid signature");return (0,index_es/* decodeJWT */.Cq)(t).payload}const Zo="irn";function oa(t){return t?.relay||{protocol:Zo}}function sa(t){const e=dist_index_es/* RELAY_JSONRPC */.CG[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}function Wo(t,e="-"){const n={},r="relay"+e;return Object.keys(t).forEach(o=>{if(o.startsWith(r)){const s=o.replace(r,""),i=t[o];n[s]=i}}),n}function ia(t){if(!t.includes("wc:")){const a=nn(t);a!=null&&a.includes("wc:")&&(t=a)}t=t.includes("wc://")?t.replace("wc://",""):t,t=t.includes("wc:")?t.replace("wc:",""):t;const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n).split("@"),s=typeof n<"u"?t.substring(n):"",i=new URLSearchParams(s),c={};i.forEach((a,l)=>{c[l]=a});const f=typeof c.methods=="string"?c.methods.split(","):void 0;return{protocol:r,topic:Yo(o[0]),version:parseInt(o[1],10),symKey:c.symKey,relay:Wo(c),methods:f,expiryTimestamp:c.expiryTimestamp?parseInt(c.expiryTimestamp,10):void 0}}function Yo(t){return t.startsWith("//")?t.substring(2):t}function Xo(t,e="-"){const n="relay",r={};return Object.keys(t).forEach(o=>{const s=o,i=n+e+s;t[s]&&(r[i]=t[s])}),r}function ca(t){const e=new URLSearchParams,n=Xo(t.relay);Object.keys(n).sort().forEach(o=>{e.set(o,n[o])}),e.set("symKey",t.symKey),t.expiryTimestamp&&e.set("expiryTimestamp",t.expiryTimestamp.toString()),t.methods&&e.set("methods",t.methods.join(","));const r=e.toString();return`${t.protocol}:${t.topic}@${t.version}?${r}`}function fa(t,e,n){return`${t}?wc_ev=${n}&topic=${e}`}var aa=Object.defineProperty,ua=Object.defineProperties,la=Object.getOwnPropertyDescriptors,Jo=Object.getOwnPropertySymbols,da=Object.prototype.hasOwnProperty,ha=Object.prototype.propertyIsEnumerable,Qo=(t,e,n)=>e in t?aa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,pa=(t,e)=>{for(var n in e||(e={}))da.call(e,n)&&Qo(t,n,e[n]);if(Jo)for(var n of Jo(e))ha.call(e,n)&&Qo(t,n,e[n]);return t},ga=(t,e)=>ua(t,la(e));function Ft(t){const e=[];return t.forEach(n=>{const[r,o]=n.split(":");e.push(`${r}:${o}`)}),e}function ts(t){const e=[];return Object.values(t).forEach(n=>{e.push(...Ft(n.accounts))}),e}function index_es_es(t,e){const n=[];return Object.values(t).forEach(r=>{Ft(r.accounts).includes(e)&&n.push(...r.methods)}),n}function ns(t,e){const n=[];return Object.values(t).forEach(r=>{Ft(r.accounts).includes(e)&&n.push(...r.events)}),n}function ba(t,e){const n=hs(t,e);if(n)throw new Error(n.message);const r={};for(const[o,s]of Object.entries(t))r[o]={methods:s.methods,events:s.events,chains:s.accounts.map(i=>`${i.split(":")[0]}:${i.split(":")[1]}`)};return r}function ya(t){const{proposal:{requiredNamespaces:e,optionalNamespaces:n={}},supportedNamespaces:r}=t,o=Ee(e),s=Ee(n),i={};Object.keys(r).forEach(a=>{const l=r[a].chains,u=r[a].methods,h=r[a].events,m=r[a].accounts;l.forEach(p=>{if(!m.some(d=>d.includes(p)))throw new Error(`No accounts provided for chain ${p} in namespace ${a}`)}),i[a]={chains:l,methods:u,events:h,accounts:m}});const c=gs(e,i,"approve()");if(c)throw new Error(c.message);const f={};return!Object.keys(e).length&&!Object.keys(n).length?i:(Object.keys(o).forEach(a=>{const l=r[a].chains.filter(p=>{var d,I;return(I=(d=o[a])==null?void 0:d.chains)==null?void 0:I.includes(p)}),u=r[a].methods.filter(p=>{var d,I;return(I=(d=o[a])==null?void 0:d.methods)==null?void 0:I.includes(p)}),h=r[a].events.filter(p=>{var d,I;return(I=(d=o[a])==null?void 0:d.events)==null?void 0:I.includes(p)}),m=l.map(p=>r[a].accounts.filter(d=>d.includes(`${p}:`))).flat();f[a]={chains:l,methods:u,events:h,accounts:m}}),Object.keys(s).forEach(a=>{var l,u,h,m,p,d;if(!r[a])return;const I=(u=(l=s[a])==null?void 0:l.chains)==null?void 0:u.filter(g=>r[a].chains.includes(g)),k=r[a].methods.filter(g=>{var x,_;return(_=(x=s[a])==null?void 0:x.methods)==null?void 0:_.includes(g)}),H=r[a].events.filter(g=>{var x,_;return(_=(x=s[a])==null?void 0:x.events)==null?void 0:_.includes(g)}),S=I?.map(g=>r[a].accounts.filter(x=>x.includes(`${g}:`))).flat();f[a]={chains:ut((h=f[a])==null?void 0:h.chains,I),methods:ut((m=f[a])==null?void 0:m.methods,k),events:ut((p=f[a])==null?void 0:p.events,H),accounts:ut((d=f[a])==null?void 0:d.accounts,S)}}),f)}function zn(t){return t.includes(":")}function rs(t){return zn(t)?t.split(":")[0]:t}function Ee(t){var e,n,r;const o={};if(!Fe(t))return o;for(const[s,i]of Object.entries(t)){const c=zn(s)?[s]:i.chains,f=i.methods||[],a=i.events||[],l=rs(s);o[l]=ga(pa({},o[l]),{chains:ut(c,(e=o[l])==null?void 0:e.chains),methods:ut(f,(n=o[l])==null?void 0:n.methods),events:ut(a,(r=o[l])==null?void 0:r.events)})}return o}function os(t){const e={};return t?.forEach(n=>{var r;const[o,s]=n.split(":");e[o]||(e[o]={accounts:[],chains:[],events:[],methods:[]}),e[o].accounts.push(n),(r=e[o].chains)==null||r.push(`${o}:${s}`)}),e}function ma(t,e){e=e.map(r=>r.replace("did:pkh:",""));const n=os(e);for(const[r,o]of Object.entries(n))o.methods?o.methods=ut(o.methods,t):o.methods=t,o.events=["chainChanged","accountsChanged"];return n}function wa(t,e){var n,r,o,s,i,c;const f=Ee(t),a=Ee(e),l={},u=Object.keys(f).concat(Object.keys(a));for(const h of u)l[h]={chains:ut((n=f[h])==null?void 0:n.chains,(r=a[h])==null?void 0:r.chains),methods:ut((o=f[h])==null?void 0:o.methods,(s=a[h])==null?void 0:s.methods),events:ut((i=f[h])==null?void 0:i.events,(c=a[h])==null?void 0:c.events)};return l}const ss={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},is={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Et(t,e){const{message:n,code:r}=is[t];return{message:e?`${n} ${e}`:n,code:r}}function zt(t,e){const{message:n,code:r}=ss[t];return{message:e?`${n} ${e}`:n,code:r}}function Ae(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function Fe(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function Ht(t){return typeof t>"u"}function ft(t,e){return e&&Ht(t)?!0:typeof t=="string"&&!!t.trim().length}function ze(t,e){return e&&Ht(t)?!0:typeof t=="number"&&!isNaN(t)}function xa(t,e){const{requiredNamespaces:n}=e,r=Object.keys(t.namespaces),o=Object.keys(n);let s=!0;return Bt(o,r)?(r.forEach(i=>{const{accounts:c,methods:f,events:a}=t.namespaces[i],l=Ft(c),u=n[i];(!Bt(Se(i,u),l)||!Bt(u.methods,f)||!Bt(u.events,a))&&(s=!1)}),s):!1}function Be(t){return ft(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function cs(t){if(ft(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const n=e[0]+":"+e[1];return!!e[2]&&Be(n)}}return!1}function va(t){function e(n){try{return typeof new URL(n)<"u"}catch{return!1}}try{if(ft(t,!1)){if(e(t))return!0;const n=nn(t);return e(n)}}catch{}return!1}function Ea(t){var e;return(e=t?.proposer)==null?void 0:e.publicKey}function Aa(t){return t?.topic}function Ba(t,e){let n=null;return ft(t?.publicKey,!1)||(n=Et("MISSING_OR_INVALID",`${e} controller public key should be a string`)),n}function Gn(t){let e=!0;return Ae(t)?t.length&&(e=t.every(n=>ft(n,!1))):e=!1,e}function fs(t,e,n){let r=null;return Ae(e)&&e.length?e.forEach(o=>{r||Be(o)||(r=zt("UNSUPPORTED_CHAINS",`${n}, chain ${o} should be a string and conform to "namespace:chainId" format`))}):Be(t)||(r=zt("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function as(t,e,n){let r=null;return Object.entries(t).forEach(([o,s])=>{if(r)return;const i=fs(o,Se(o,s),`${e} ${n}`);i&&(r=i)}),r}function us(t,e){let n=null;return Ae(t)?t.forEach(r=>{n||cs(r)||(n=zt("UNSUPPORTED_ACCOUNTS",`${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=zt("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function ls(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const o=us(r?.accounts,`${e} namespace`);o&&(n=o)}),n}function ds(t,e){let n=null;return Gn(t?.methods)?Gn(t?.events)||(n=zt("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):n=zt("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),n}function Zn(t,e){let n=null;return Object.values(t).forEach(r=>{if(n)return;const o=ds(r,`${e}, namespace`);o&&(n=o)}),n}function Ia(t,e,n){let r=null;if(t&&Fe(t)){const o=Zn(t,e);o&&(r=o);const s=as(t,e,n);s&&(r=s)}else r=Et("MISSING_OR_INVALID",`${e}, ${n} should be an object with data`);return r}function hs(t,e){let n=null;if(t&&Fe(t)){const r=Zn(t,e);r&&(n=r);const o=ls(t,e);o&&(n=o)}else n=Et("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return n}function ps(t){return ft(t.protocol,!0)}function Sa(t,e){let n=!1;return e&&!t?n=!0:t&&Ae(t)&&t.length&&t.forEach(r=>{n=ps(r)}),n}function Oa(t){return typeof t=="number"}function Na(t){return typeof t<"u"&&typeof t!==null}function Ua(t){return!(!t||typeof t!="object"||!t.code||!ze(t.code,!1)||!t.message||!ft(t.message,!1))}function _a(t){return!(Ht(t)||!ft(t.method,!1))}function Ta(t){return!(Ht(t)||Ht(t.result)&&Ht(t.error)||!ze(t.id,!1)||!ft(t.jsonrpc,!1))}function Ra(t){return!(Ht(t)||!ft(t.name,!1))}function $a(t,e){return!(!Be(e)||!ts(t).includes(e))}function La(t,e,n){return ft(n,!1)?index_es_es(t,e).includes(n):!1}function Ca(t,e,n){return ft(n,!1)?ns(t,e).includes(n):!1}function gs(t,e,n){let r=null;const o=ja(t),s=ka(e),i=Object.keys(o),c=Object.keys(s),f=bs(Object.keys(t)),a=bs(Object.keys(e)),l=f.filter(u=>!a.includes(u));return l.length&&(r=Et("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(e).toString()}`)),Bt(i,c)||(r=Et("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${i.toString()}
      Approved: ${c.toString()}`)),Object.keys(e).forEach(u=>{if(!u.includes(":")||r)return;const h=Ft(e[u].accounts);h.includes(u)||(r=Et("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${h.toString()}`))}),i.forEach(u=>{r||(Bt(o[u].methods,s[u].methods)?Bt(o[u].events,s[u].events)||(r=Et("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${u}`)):r=Et("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${u}`))}),r}function ja(t){const e={};return Object.keys(t).forEach(n=>{var r;n.includes(":")?e[n]=t[n]:(r=t[n].chains)==null||r.forEach(o=>{e[o]={methods:t[n].methods,events:t[n].events}})}),e}function bs(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function ka(t){const e={};return Object.keys(t).forEach(n=>{if(n.includes(":"))e[n]=t[n];else{const r=Ft(t[n].accounts);r?.forEach(o=>{e[o]={accounts:t[n].accounts.filter(s=>s.includes(`${o}:`)),methods:t[n].methods,events:t[n].events}})}}),e}function Pa(t,e){return ze(t,!1)&&t<=e.max&&t>=e.min}function Ha(){const t=Mt();return new Promise(e=>{switch(t){case Q.browser:e(ys());break;case Q.reactNative:e(ms());break;case Q.node:e(ws());break;default:e(!0)}})}function ys(){return Wt()&&navigator?.onLine}async function ms(){if(At()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t?.isConnected}return!0}function ws(){return!0}function Da(t){switch(Mt()){case Q.browser:xs(t);break;case Q.reactNative:vs(t);break;case Q.node:break}}function xs(t){!At()&&Wt()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function vs(t){At()&&typeof global<"u"&&global!=null&&global.NetInfo&&global?.NetInfo.addEventListener(e=>t(e?.isConnected))}function Ma(){var t;return Wt()&&(0,dist_cjs.getDocument)()?((t=(0,dist_cjs.getDocument)())==null?void 0:t.visibilityState)==="visible":!0}const Wn={};class Va{static get(e){return Wn[e]}static set(e,n){Wn[e]=n}static delete(e){delete Wn[e]}}function Es(t){const e=esm/* default */.A.decode(t);if(e.length<33)throw new Error("Too short to contain a public key");return e.slice(1,33)}function As({publicKey:t,signature:e,payload:n}){var r;const o=Yn(n.method),s=128|parseInt(((r=n.version)==null?void 0:r.toString())||"4"),i=Ka(n.address),c=n.era==="00"?new Uint8Array([0]):Yn(n.era);if(c.length!==1&&c.length!==2)throw new Error("Invalid era length");const f=parseInt(n.nonce,16),a=new Uint8Array([f&255,f>>8&255]),l=BigInt(`0x${qa(n.tip)}`),u=za(l),h=new Uint8Array([0,...t,i,...e,...c,...a,...u,...o]),m=Fa(h.length+1);return new Uint8Array([...m,s,...h])}function Bs(t){const e=Yn(t),n=(0,blakejs.blake2b)(e,void 0,32);return"0x"+Buffer.from(n).toString("hex")}function Yn(t){return new Uint8Array(t.replace(/^0x/,"").match(/.{1,2}/g).map(e=>parseInt(e,16)))}function qa(t){return t.startsWith("0x")?t.slice(2):t}function Ka(t){const e=esm/* default */.A.decode(t)[0];return e===42?0:e===60?2:1}function Fa(t){if(t<64)return new Uint8Array([t<<2]);if(t<16384){const e=t<<2|1;return new Uint8Array([e&255,e>>8&255])}else if(t<1<<30){const e=t<<2|2;return new Uint8Array([e&255,e>>8&255,e>>16&255,e>>24&255])}else throw new Error("Compact encoding > 2^30 not supported")}function za(t){if(t<BigInt(1)<<BigInt(6))return new Uint8Array([Number(t<<BigInt(2))]);if(t<BigInt(1)<<BigInt(14)){const e=t<<BigInt(2)|BigInt(1);return new Uint8Array([Number(e&BigInt(255)),Number(e>>BigInt(8)&BigInt(255))])}else if(t<BigInt(1)<<BigInt(30)){const e=t<<BigInt(2)|BigInt(2);return new Uint8Array([Number(e&BigInt(255)),Number(e>>BigInt(8)&BigInt(255)),Number(e>>BigInt(16)&BigInt(255)),Number(e>>BigInt(24)&BigInt(255))])}else throw new Error("BigInt compact encoding not supported > 2^30")}function Ga(t){const e=Uint8Array.from(Buffer.from(t.signature,"hex")),n=Es(t.transaction.address),r=As({publicKey:n,signature:e,payload:t.transaction}),o=Buffer.from(r).toString("hex");return Bs(o)}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/heartbeat/dist/index.es.js
var heartbeat_dist_index_es = __webpack_require__(893532);
// EXTERNAL MODULE: ./node_modules/@walletconnect/keyvaluestorage/dist/index.es.js + 4 modules
var keyvaluestorage_dist_index_es = __webpack_require__(393284);
// EXTERNAL MODULE: ./node_modules/@walletconnect/logger/dist/index.es.js
var logger_dist_index_es = __webpack_require__(729838);
// EXTERNAL MODULE: ./node_modules/@walletconnect/events/dist/esm/events.js
var events = __webpack_require__(204556);
;// ./node_modules/@walletconnect/sign-client/node_modules/@walletconnect/types/dist/index.es.js
var a=Object.defineProperty,u=(e,s,r)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,c=(e,s,r)=>u(e,typeof s!="symbol"?s+"":s,r);class h extends events/* IEvents */.H{constructor(s){super(),this.opts=s,c(this,"protocol","wc"),c(this,"version",2)}}class g{constructor(s,r,t){this.core=s,this.logger=r}}var p=Object.defineProperty,b=(e,s,r)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,v=(e,s,r)=>b(e,typeof s!="symbol"?s+"":s,r);class I extends events/* IEvents */.H{constructor(s,r){super(),this.core=s,this.logger=r,v(this,"records",new Map)}}class y{constructor(s,r){this.logger=s,this.core=r}}class m extends events/* IEvents */.H{constructor(s,r){super(),this.relayer=s,this.logger=r}}class d extends events/* IEvents */.H{constructor(s){super()}}class f{constructor(s,r,t,q){this.core=s,this.logger=r,this.name=t}}var E=Object.defineProperty,x=(e,s,r)=>s in e?E(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,w=(e,s,r)=>x(e,typeof s!="symbol"?s+"":s,r);class C{constructor(){w(this,"map",new Map)}}class P extends events/* IEvents */.H{constructor(s,r){super(),this.relayer=s,this.logger=r}}class j{constructor(s,r){this.core=s,this.logger=r}}class S extends events/* IEvents */.H{constructor(s,r){super(),this.core=s,this.logger=r}}class ${constructor(s,r){this.logger=s,this.core=r}}class M{constructor(s,r,t){this.core=s,this.logger=r,this.store=t}}class O{constructor(s,r){this.projectId=s,this.logger=r}}class R{constructor(s,r,t){this.core=s,this.logger=r,this.telemetryEnabled=t}}var T=Object.defineProperty,k=(e,s,r)=>s in e?T(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,i=(e,s,r)=>k(e,typeof s!="symbol"?s+"":s,r);class H extends (external_events_default()){constructor(){super()}}class index_es_J{constructor(s){this.opts=s,i(this,"protocol","wc"),i(this,"version",2)}}class index_es_K extends external_events_.EventEmitter{constructor(){super()}}class V{constructor(s){this.client=s}}
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/safe-json/dist/esm/index.js
var dist_esm = __webpack_require__(213554);
// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var jsonrpc_provider_dist_index_es = __webpack_require__(827907);
// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var jsonrpc_utils_dist_esm = __webpack_require__(739031);
// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var jsonrpc_ws_connection_dist_index_es = __webpack_require__(384365);
;// ./node_modules/@walletconnect/sign-client/node_modules/@walletconnect/core/dist/index.es.js
/* provided dependency */ var index_es_process = __webpack_require__(365606);
const index_es_ze="wc",index_es_Le=2,index_es_he="core",B=`${index_es_ze}@2:${index_es_he}:`,index_es_Et={name:index_es_he,logger:"error"},index_es_It={database:":memory:"},index_es_Tt="crypto",index_es_ke="client_ed25519_seed",index_es_Ct=cjs.ONE_DAY,index_es_Pt="keychain",index_es_St="0.3",index_es_Ot="messages",index_es_Rt="0.3",index_es_je=cjs.SIX_HOURS,index_es_At="publisher",index_es_xt="irn",index_es_Nt="error",index_es_Ue="wss://relay.walletconnect.org",index_es_$t="relayer",index_es_C={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},index_es_zt="_subscription",L={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},index_es_Lt=.1,index_es_Ws={database:":memory:"},index_es_e="2.21.2",index_es_Hs=1e4,index_es_Q={link_mode:"link_mode",relay:"relay"},index_es_le={inbound:"inbound",outbound:"outbound"},index_es_kt="0.3",index_es_jt="WALLETCONNECT_CLIENT_ID",index_es_Fe="WALLETCONNECT_LINK_MODE_APPS",index_es_$={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},index_es_Ys=(/* unused pure expression or super */ null && (Ce)),dist_index_es_Ut="subscription",index_es_Ft="0.3",index_es_Js=cjs.FIVE_SECONDS*1e3,index_es_Mt="pairing",index_es_Kt="0.3",index_es_Xs=(/* unused pure expression or super */ null && (Ce)),se={wc_pairingDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:cjs.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:0},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:0}}},re={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},F={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},index_es_Bt="history",index_es_Vt="0.3",index_es_qt="expirer",index_es_M={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},Gt="0.3",index_es_Zs=(/* unused pure expression or super */ null && (ie)),index_es_Wt="verify-api",index_es_Qs="https://verify.walletconnect.com",index_es_Ht="https://verify.walletconnect.org",index_es_ue=index_es_Ht,index_es_Yt=`${index_es_ue}/v3`,index_es_Jt=[index_es_Qs,index_es_Ht],index_es_Xt="echo",Zt="https://echo.walletconnect.com",index_es_er="event-client",G={pairing_started:"pairing_started",pairing_uri_validation_success:"pairing_uri_validation_success",pairing_uri_not_expired:"pairing_uri_not_expired",store_new_pairing:"store_new_pairing",subscribing_pairing_topic:"subscribing_pairing_topic",subscribe_pairing_topic_success:"subscribe_pairing_topic_success",existing_pairing:"existing_pairing",pairing_not_expired:"pairing_not_expired",emit_inactive_pairing:"emit_inactive_pairing",emit_session_proposal:"emit_session_proposal",subscribing_to_pairing_topic:"subscribing_to_pairing_topic"},index_es_Y={no_wss_connection:"no_wss_connection",no_internet_connection:"no_internet_connection",malformed_pairing_uri:"malformed_pairing_uri",active_pairing_already_exists:"active_pairing_already_exists",subscribe_pairing_topic_failure:"subscribe_pairing_topic_failure",pairing_expired:"pairing_expired",proposal_expired:"proposal_expired",proposal_listener_not_found:"proposal_listener_not_found"},tr={session_approve_started:"session_approve_started",proposal_not_expired:"proposal_not_expired",session_namespaces_validation_success:"session_namespaces_validation_success",create_session_topic:"create_session_topic",subscribing_session_topic:"subscribing_session_topic",subscribe_session_topic_success:"subscribe_session_topic_success",publishing_session_approve:"publishing_session_approve",session_approve_publish_success:"session_approve_publish_success",store_session:"store_session",publishing_session_settle:"publishing_session_settle",session_settle_publish_success:"session_settle_publish_success"},index_es_ir={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",proposal_expired:"proposal_expired",subscribe_session_topic_failure:"subscribe_session_topic_failure",session_approve_publish_failure:"session_approve_publish_failure",session_settle_publish_failure:"session_settle_publish_failure",session_approve_namespace_validation_failure:"session_approve_namespace_validation_failure",proposal_not_found:"proposal_not_found"},index_es_sr={authenticated_session_approve_started:"authenticated_session_approve_started",authenticated_session_not_expired:"authenticated_session_not_expired",chains_caip2_compliant:"chains_caip2_compliant",chains_evm_compliant:"chains_evm_compliant",create_authenticated_session_topic:"create_authenticated_session_topic",cacaos_verified:"cacaos_verified",store_authenticated_session:"store_authenticated_session",subscribing_authenticated_session_topic:"subscribing_authenticated_session_topic",subscribe_authenticated_session_topic_success:"subscribe_authenticated_session_topic_success",publishing_authenticated_session_approve:"publishing_authenticated_session_approve",authenticated_session_approve_publish_success:"authenticated_session_approve_publish_success"},index_es_rr={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",missing_session_authenticate_request:"missing_session_authenticate_request",session_authenticate_request_expired:"session_authenticate_request_expired",chains_caip2_compliant_failure:"chains_caip2_compliant_failure",chains_evm_compliant_failure:"chains_evm_compliant_failure",invalid_cacao:"invalid_cacao",subscribe_authenticated_session_topic_failure:"subscribe_authenticated_session_topic_failure",authenticated_session_approve_publish_failure:"authenticated_session_approve_publish_failure",authenticated_session_pending_request_not_found:"authenticated_session_pending_request_not_found"},index_es_Qt=.1,index_es_ei="event-client",index_es_ti=86400,index_es_ii="https://pulse.walletconnect.org/batch";function index_es_nr(r,e){if(r.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),i=0;i<t.length;i++)t[i]=255;for(var s=0;s<r.length;s++){var n=r.charAt(s),o=n.charCodeAt(0);if(t[o]!==255)throw new TypeError(n+" is ambiguous");t[o]=s}var a=r.length,c=r.charAt(0),h=Math.log(a)/Math.log(256),l=Math.log(256)/Math.log(a);function d(u){if(u instanceof Uint8Array||(ArrayBuffer.isView(u)?u=new Uint8Array(u.buffer,u.byteOffset,u.byteLength):Array.isArray(u)&&(u=Uint8Array.from(u))),!(u instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(u.length===0)return"";for(var b=0,x=0,I=0,D=u.length;I!==D&&u[I]===0;)I++,b++;for(var j=(D-I)*l+1>>>0,T=new Uint8Array(j);I!==D;){for(var q=u[I],J=0,K=j-1;(q!==0||J<x)&&K!==-1;K--,J++)q+=256*T[K]>>>0,T[K]=q%a>>>0,q=q/a>>>0;if(q!==0)throw new Error("Non-zero carry");x=J,I++}for(var H=j-x;H!==j&&T[H]===0;)H++;for(var me=c.repeat(b);H<j;++H)me+=r.charAt(T[H]);return me}function g(u){if(typeof u!="string")throw new TypeError("Expected String");if(u.length===0)return new Uint8Array;var b=0;if(u[b]!==" "){for(var x=0,I=0;u[b]===c;)x++,b++;for(var D=(u.length-b)*h+1>>>0,j=new Uint8Array(D);u[b];){var T=t[u.charCodeAt(b)];if(T===255)return;for(var q=0,J=D-1;(T!==0||q<I)&&J!==-1;J--,q++)T+=a*j[J]>>>0,j[J]=T%256>>>0,T=T/256>>>0;if(T!==0)throw new Error("Non-zero carry");I=q,b++}if(u[b]!==" "){for(var K=D-I;K!==D&&j[K]===0;)K++;for(var H=new Uint8Array(x+(D-K)),me=x;K!==D;)H[me++]=j[K++];return H}}}function _(u){var b=g(u);if(b)return b;throw new Error(`Non-${e} character`)}return{encode:d,decodeUnsafe:g,decode:_}}var index_es_or=index_es_nr,index_es_ar=index_es_or;const index_es_si=r=>{if(r instanceof Uint8Array&&r.constructor.name==="Uint8Array")return r;if(r instanceof ArrayBuffer)return new Uint8Array(r);if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength);throw new Error("Unknown type, must be binary type")},index_es_cr=r=>new TextEncoder().encode(r),index_es_hr=r=>new TextDecoder().decode(r);class index_es_lr{constructor(e,t,i){this.name=e,this.prefix=t,this.baseEncode=i}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class index_es_ur{constructor(e,t,i){if(this.name=e,this.prefix=t,t.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=i}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return index_es_ri(this,e)}}class index_es_dr{constructor(e){this.decoders=e}or(e){return index_es_ri(this,e)}decode(e){const t=e[0],i=this.decoders[t];if(i)return i.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const index_es_ri=(r,e)=>new index_es_dr({...r.decoders||{[r.prefix]:r},...e.decoders||{[e.prefix]:e}});class index_es_gr{constructor(e,t,i,s){this.name=e,this.prefix=t,this.baseEncode=i,this.baseDecode=s,this.encoder=new index_es_lr(e,t,i),this.decoder=new index_es_ur(e,t,s)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const index_es_Ee=({name:r,prefix:e,encode:t,decode:i})=>new index_es_gr(r,e,t,i),index_es_de=({prefix:r,name:e,alphabet:t})=>{const{encode:i,decode:s}=index_es_ar(t,e);return index_es_Ee({prefix:r,name:e,encode:i,decode:n=>index_es_si(s(n))})},index_es_pr=(r,e,t,i)=>{const s={};for(let l=0;l<e.length;++l)s[e[l]]=l;let n=r.length;for(;r[n-1]==="=";)--n;const o=new Uint8Array(n*t/8|0);let a=0,c=0,h=0;for(let l=0;l<n;++l){const d=s[r[l]];if(d===void 0)throw new SyntaxError(`Non-${i} character`);c=c<<t|d,a+=t,a>=8&&(a-=8,o[h++]=255&c>>a)}if(a>=t||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return o},index_es_yr=(r,e,t)=>{const i=e[e.length-1]==="=",s=(1<<t)-1;let n="",o=0,a=0;for(let c=0;c<r.length;++c)for(a=a<<8|r[c],o+=8;o>t;)o-=t,n+=e[s&a>>o];if(o&&(n+=e[s&a<<t-o]),i)for(;n.length*t&7;)n+="=";return n},index_es_P=({name:r,prefix:e,bitsPerChar:t,alphabet:i})=>index_es_Ee({prefix:e,name:r,encode(s){return index_es_yr(s,i,t)},decode(s){return index_es_pr(s,i,t,r)}}),index_es_br=index_es_Ee({prefix:"\0",name:"identity",encode:r=>index_es_hr(r),decode:r=>index_es_cr(r)});var index_es_mr=Object.freeze({__proto__:null,identity:index_es_br});const index_es_fr=index_es_P({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var index_es_Dr=Object.freeze({__proto__:null,base2:index_es_fr});const index_es_vr=index_es_P({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var index_es_wr=Object.freeze({__proto__:null,base8:index_es_vr});const index_es_r=index_es_de({prefix:"9",name:"base10",alphabet:"0123456789"});var index_es_Er=Object.freeze({__proto__:null,base10:index_es_r});const index_es_Ir=index_es_P({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),index_es_Tr=index_es_P({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var index_es_Cr=Object.freeze({__proto__:null,base16:index_es_Ir,base16upper:index_es_Tr});const index_es_Pr=index_es_P({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),index_es_Sr=index_es_P({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),index_es_Or=index_es_P({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),index_es_Rr=index_es_P({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),index_es_Ar=index_es_P({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),index_es_xr=index_es_P({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),index_es_Nr=index_es_P({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),index_es_$r=index_es_P({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),index_es_zr=index_es_P({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var index_es_Lr=Object.freeze({__proto__:null,base32:index_es_Pr,base32upper:index_es_Sr,base32pad:index_es_Or,base32padupper:index_es_Rr,base32hex:index_es_Ar,base32hexupper:index_es_xr,base32hexpad:index_es_Nr,base32hexpadupper:index_es_$r,base32z:index_es_zr});const index_es_kr=index_es_de({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),index_es_jr=index_es_de({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var index_es_Ur=Object.freeze({__proto__:null,base36:index_es_kr,base36upper:index_es_jr});const index_es_Fr=index_es_de({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),index_es_Mr=index_es_de({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var index_es_Kr=Object.freeze({__proto__:null,base58btc:index_es_Fr,base58flickr:index_es_Mr});const index_es_Br=index_es_P({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),index_es_Vr=index_es_P({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),index_es_qr=index_es_P({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),index_es_Gr=index_es_P({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var index_es_Wr=Object.freeze({__proto__:null,base64:index_es_Br,base64pad:index_es_Vr,base64url:index_es_qr,base64urlpad:index_es_Gr});const index_es_ni=Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"),index_es_Hr=index_es_ni.reduce((r,e,t)=>(r[t]=e,r),[]),index_es_Yr=index_es_ni.reduce((r,e,t)=>(r[e.codePointAt(0)]=t,r),[]);function index_es_Jr(r){return r.reduce((e,t)=>(e+=index_es_Hr[t],e),"")}function index_es_Xr(r){const e=[];for(const t of r){const i=index_es_Yr[t.codePointAt(0)];if(i===void 0)throw new Error(`Non-base256emoji character: ${t}`);e.push(i)}return new Uint8Array(e)}const index_es_Zr=index_es_Ee({prefix:"\u{1F680}",name:"base256emoji",encode:index_es_Jr,decode:index_es_Xr});var index_es_Qr=Object.freeze({__proto__:null,base256emoji:index_es_Zr}),index_es_en=index_es_ai,index_es_oi=128,index_es_tn=127,index_es_sn=~index_es_tn,index_es_rn=Math.pow(2,31);function index_es_ai(r,e,t){e=e||[],t=t||0;for(var i=t;r>=index_es_rn;)e[t++]=r&255|index_es_oi,r/=128;for(;r&index_es_sn;)e[t++]=r&255|index_es_oi,r>>>=7;return e[t]=r|0,index_es_ai.bytes=t-i+1,e}var index_es_nn=index_es_Me,index_es_on=128,index_es_ci=127;function index_es_Me(r,i){var t=0,i=i||0,s=0,n=i,o,a=r.length;do{if(n>=a)throw index_es_Me.bytes=0,new RangeError("Could not decode varint");o=r[n++],t+=s<28?(o&index_es_ci)<<s:(o&index_es_ci)*Math.pow(2,s),s+=7}while(o>=index_es_on);return index_es_Me.bytes=n-i,t}var index_es_an=Math.pow(2,7),index_es_cn=Math.pow(2,14),index_es_hn=Math.pow(2,21),index_es_ln=Math.pow(2,28),index_es_un=Math.pow(2,35),index_es_dn=Math.pow(2,42),index_es_gn=Math.pow(2,49),index_es_pn=Math.pow(2,56),index_es_yn=Math.pow(2,63),index_es_bn=function(r){return r<index_es_an?1:r<index_es_cn?2:r<index_es_hn?3:r<index_es_ln?4:r<index_es_un?5:r<index_es_dn?6:r<index_es_gn?7:r<index_es_pn?8:r<index_es_yn?9:10},index_es_mn={encode:index_es_en,decode:index_es_nn,encodingLength:index_es_bn},index_es_hi=index_es_mn;const index_es_li=(r,e,t=0)=>(index_es_hi.encode(r,e,t),e),index_es_ui=r=>index_es_hi.encodingLength(r),index_es_Ke=(r,e)=>{const t=e.byteLength,i=index_es_ui(r),s=i+index_es_ui(t),n=new Uint8Array(s+t);return index_es_li(r,n,0),index_es_li(t,n,i),n.set(e,s),new index_es_fn(r,t,e,n)};class index_es_fn{constructor(e,t,i,s){this.code=e,this.size=t,this.digest=i,this.bytes=s}}const index_es_di=({name:r,code:e,encode:t})=>new index_es_Dn(r,e,t);class index_es_Dn{constructor(e,t,i){this.name=e,this.code=t,this.encode=i}digest(e){if(e instanceof Uint8Array){const t=this.encode(e);return t instanceof Uint8Array?index_es_Ke(this.code,t):t.then(i=>index_es_Ke(this.code,i))}else throw Error("Unknown type, must be binary type")}}const index_es_gi=r=>async e=>new Uint8Array(await crypto.subtle.digest(r,e)),index_es_vn=index_es_di({name:"sha2-256",code:18,encode:index_es_gi("SHA-256")}),index_es_wn=index_es_di({name:"sha2-512",code:19,encode:index_es_gi("SHA-512")});var index_es_n=Object.freeze({__proto__:null,sha256:index_es_vn,sha512:index_es_wn});const index_es_pi=0,index_es_En="identity",index_es_yi=index_es_si,index_es_In=r=>index_es_Ke(index_es_pi,index_es_yi(r)),index_es_Tn={code:index_es_pi,name:index_es_En,encode:index_es_yi,digest:index_es_In};var index_es_Cn=Object.freeze({__proto__:null,identity:index_es_Tn});new TextEncoder,new TextDecoder;const index_es_bi={...index_es_mr,...index_es_Dr,...index_es_wr,...index_es_Er,...index_es_Cr,...index_es_Lr,...index_es_Ur,...index_es_Kr,...index_es_Wr,...index_es_Qr};({...index_es_n,...index_es_Cn});function index_es_mi(r){return globalThis.Buffer!=null?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):r}function index_es_Pn(r=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?index_es_mi(globalThis.Buffer.allocUnsafe(r)):new Uint8Array(r)}function index_es_fi(r,e,t,i){return{name:r,prefix:e,encoder:{name:r,prefix:e,encode:t},decoder:{decode:i}}}const index_es_Di=index_es_fi("utf8","u",r=>"u"+new TextDecoder("utf8").decode(r),r=>new TextEncoder().encode(r.substring(1))),index_es_Be=index_es_fi("ascii","a",r=>{let e="a";for(let t=0;t<r.length;t++)e+=String.fromCharCode(r[t]);return e},r=>{r=r.substring(1);const e=index_es_Pn(r.length);for(let t=0;t<r.length;t++)e[t]=r.charCodeAt(t);return e}),index_es_Sn={utf8:index_es_Di,"utf-8":index_es_Di,hex:index_es_bi.base16,latin1:index_es_Be,ascii:index_es_Be,binary:index_es_Be,...index_es_bi};function index_es_On(r,e="utf8"){const t=index_es_Sn[e];if(!t)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?index_es_mi(globalThis.Buffer.from(r,"utf-8")):t.decoder.decode(`${t.prefix}${r}`)}var index_es_Rn=Object.defineProperty,index_es_An=(r,e,t)=>e in r?index_es_Rn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,W=(r,e,t)=>index_es_An(r,typeof e!="symbol"?e+"":e,t);class index_es_vi{constructor(e,t){this.core=e,this.logger=t,W(this,"keychain",new Map),W(this,"name",index_es_Pt),W(this,"version",index_es_St),W(this,"initialized",!1),W(this,"storagePrefix",B),W(this,"init",async()=>{if(!this.initialized){const i=await this.getKeyChain();typeof i<"u"&&(this.keychain=i),this.initialized=!0}}),W(this,"has",i=>(this.isInitialized(),this.keychain.has(i))),W(this,"set",async(i,s)=>{this.isInitialized(),this.keychain.set(i,s),await this.persist()}),W(this,"get",i=>{this.isInitialized();const s=this.keychain.get(i);if(typeof s>"u"){const{message:n}=Et("NO_MATCHING_KEY",`${this.name}: ${i}`);throw new Error(n)}return s}),W(this,"del",async i=>{this.isInitialized(),this.keychain.delete(i),await this.persist()}),this.core=e,this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name)}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,ri(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?oi(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}}var index_es_xn=Object.defineProperty,index_es_Nn=(r,e,t)=>e in r?index_es_xn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_S=(r,e,t)=>index_es_Nn(r,typeof e!="symbol"?e+"":e,t);class index_es_wi{constructor(e,t,i){this.core=e,this.logger=t,index_es_S(this,"name",index_es_Tt),index_es_S(this,"keychain"),index_es_S(this,"randomSessionIdentifier",zf()),index_es_S(this,"initialized",!1),index_es_S(this,"init",async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)}),index_es_S(this,"hasKeys",s=>(this.isInitialized(),this.keychain.has(s))),index_es_S(this,"getClientId",async()=>{this.isInitialized();const s=await this.getClientSeed(),n=index_es/* generateKeyPair */.TZ(s);return index_es/* encodeIss */.UF(n.publicKey)}),index_es_S(this,"generateKeyPair",()=>{this.isInitialized();const s=Ff();return this.setPrivateKey(s.publicKey,s.privateKey)}),index_es_S(this,"signJWT",async s=>{this.isInitialized();const n=await this.getClientSeed(),o=index_es/* generateKeyPair */.TZ(n),a=this.randomSessionIdentifier,c=index_es_Ct;return await index_es/* signJWT */.FA(a,s,c,o)}),index_es_S(this,"generateSharedKey",(s,n,o)=>{this.isInitialized();const a=this.getPrivateKey(s),c=Gf(a,n);return this.setSymKey(c,o)}),index_es_S(this,"setSymKey",async(s,n)=>{this.isInitialized();const o=n||Zf(s);return await this.keychain.set(o,s),o}),index_es_S(this,"deleteKeyPair",async s=>{this.isInitialized(),await this.keychain.del(s)}),index_es_S(this,"deleteSymKey",async s=>{this.isInitialized(),await this.keychain.del(s)}),index_es_S(this,"encode",async(s,n,o)=>{this.isInitialized();const a=zo(o),c=(0,dist_esm/* safeJsonStringify */.h)(n);if(na(a))return Jf(c,o?.encoding);if(ea(a)){const g=a.senderPublicKey,_=a.receiverPublicKey;s=await this.generateSharedKey(g,_)}const h=this.getSymKey(s),{type:l,senderPublicKey:d}=a;return Yf({type:l,symKey:h,message:c,senderPublicKey:d,encoding:o?.encoding})}),index_es_S(this,"decode",async(s,n,o)=>{this.isInitialized();const a=ta(n,o);if(na(a)){const c=Qf(n,o?.encoding);return (0,dist_esm/* safeJsonParse */.j)(c)}if(ea(a)){const c=a.receiverPublicKey,h=a.senderPublicKey;s=await this.generateSharedKey(c,h)}try{const c=this.getSymKey(s),h=Xf({symKey:c,encoded:n,encoding:o?.encoding});return (0,dist_esm/* safeJsonParse */.j)(h)}catch(c){this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`),this.logger.error(c)}}),index_es_S(this,"getPayloadType",(s,n=te)=>{const o=Ke({encoded:s,encoding:n});return Kt(o.type)}),index_es_S(this,"getPayloadSenderPublicKey",(s,n=te)=>{const o=Ke({encoded:s,encoding:n});return o.senderPublicKey?to_string_toString(o.senderPublicKey,et):void 0}),this.core=e,this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name),this.keychain=i||new index_es_vi(this.core,this.logger)}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}async setPrivateKey(e,t){return await this.keychain.set(e,t),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(index_es_ke)}catch{e=zf(),await this.keychain.set(index_es_ke,e)}return index_es_On(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}}var index_es_$n=Object.defineProperty,index_es_zn=Object.defineProperties,index_es_Ln=Object.getOwnPropertyDescriptors,index_es_i=Object.getOwnPropertySymbols,index_es_kn=Object.prototype.hasOwnProperty,index_es_jn=Object.prototype.propertyIsEnumerable,index_es_Ve=(r,e,t)=>e in r?index_es_$n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_Un=(r,e)=>{for(var t in e||(e={}))index_es_kn.call(e,t)&&index_es_Ve(r,t,e[t]);if(index_es_i)for(var t of index_es_i(e))index_es_jn.call(e,t)&&index_es_Ve(r,t,e[t]);return r},index_es_Fn=(r,e)=>index_es_zn(r,index_es_Ln(e)),index_es_k=(r,e,t)=>index_es_Ve(r,typeof e!="symbol"?e+"":e,t);class index_es_Ei extends y{constructor(e,t){super(e,t),this.logger=e,this.core=t,index_es_k(this,"messages",new Map),index_es_k(this,"messagesWithoutClientAck",new Map),index_es_k(this,"name",index_es_Ot),index_es_k(this,"version",index_es_Rt),index_es_k(this,"initialized",!1),index_es_k(this,"storagePrefix",B),index_es_k(this,"init",async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const i=await this.getRelayerMessages();typeof i<"u"&&(this.messages=i);const s=await this.getRelayerMessagesWithoutClientAck();typeof s<"u"&&(this.messagesWithoutClientAck=s),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(i){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(i)}finally{this.initialized=!0}}}),index_es_k(this,"set",async(i,s,n)=>{this.isInitialized();const o=Wf(s);let a=this.messages.get(i);if(typeof a>"u"&&(a={}),typeof a[o]<"u")return o;if(a[o]=s,this.messages.set(i,a),n===index_es_le.inbound){const c=this.messagesWithoutClientAck.get(i)||{};this.messagesWithoutClientAck.set(i,index_es_Fn(index_es_Un({},c),{[o]:s}))}return await this.persist(),o}),index_es_k(this,"get",i=>{this.isInitialized();let s=this.messages.get(i);return typeof s>"u"&&(s={}),s}),index_es_k(this,"getWithoutAck",i=>{this.isInitialized();const s={};for(const n of i){const o=this.messagesWithoutClientAck.get(n)||{};s[n]=Object.values(o)}return s}),index_es_k(this,"has",(i,s)=>{this.isInitialized();const n=this.get(i),o=Wf(s);return typeof n[o]<"u"}),index_es_k(this,"ack",async(i,s)=>{this.isInitialized();const n=this.messagesWithoutClientAck.get(i);if(typeof n>"u")return;const o=Wf(s);delete n[o],Object.keys(n).length===0?this.messagesWithoutClientAck.delete(i):this.messagesWithoutClientAck.set(i,n),await this.persist()}),index_es_k(this,"del",async i=>{this.isInitialized(),this.messages.delete(i),this.messagesWithoutClientAck.delete(i),await this.persist()}),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(e,this.name),this.core=t}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get storageKeyWithoutClientAck(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name+"_withoutClientAck"}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,ri(e))}async setRelayerMessagesWithoutClientAck(e){await this.core.storage.setItem(this.storageKeyWithoutClientAck,ri(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?oi(e):void 0}async getRelayerMessagesWithoutClientAck(){const e=await this.core.storage.getItem(this.storageKeyWithoutClientAck);return typeof e<"u"?oi(e):void 0}async persist(){await this.setRelayerMessages(this.messages),await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}}var index_es_Mn=Object.defineProperty,index_es_Kn=Object.defineProperties,index_es_Bn=Object.getOwnPropertyDescriptors,index_es_Ii=Object.getOwnPropertySymbols,index_es_Vn=Object.prototype.hasOwnProperty,index_es_qn=Object.prototype.propertyIsEnumerable,index_es_qe=(r,e,t)=>e in r?index_es_Mn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_Ie=(r,e)=>{for(var t in e||(e={}))index_es_Vn.call(e,t)&&index_es_qe(r,t,e[t]);if(index_es_Ii)for(var t of index_es_Ii(e))index_es_qn.call(e,t)&&index_es_qe(r,t,e[t]);return r},Ge=(r,e)=>index_es_Kn(r,index_es_Bn(e)),index_es_V=(r,e,t)=>index_es_qe(r,typeof e!="symbol"?e+"":e,t);class index_es_Gn extends m{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,index_es_V(this,"events",new external_events_.EventEmitter),index_es_V(this,"name",index_es_At),index_es_V(this,"queue",new Map),index_es_V(this,"publishTimeout",(0,cjs.toMiliseconds)(cjs.ONE_MINUTE)),index_es_V(this,"initialPublishTimeout",(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15)),index_es_V(this,"needsTransportRestart",!1),index_es_V(this,"publish",async(i,s,n)=>{var o;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:i,message:s,opts:n}});const a=n?.ttl||index_es_je,c=oa(n),h=n?.prompt||!1,l=n?.tag||0,d=n?.id||(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),g={topic:i,message:s,opts:{ttl:a,relay:c,prompt:h,tag:l,id:d,attestation:n?.attestation,tvf:n?.tvf}},_=`Failed to publish payload, please try again. id:${d} tag:${l}`;try{const u=new Promise(async b=>{const x=({id:D})=>{g.opts.id===D&&(this.removeRequestFromQueue(D),this.relayer.events.removeListener(index_es_C.publish,x),b(g))};this.relayer.events.on(index_es_C.publish,x);const I=ai(new Promise((D,j)=>{this.rpcPublish({topic:i,message:s,ttl:a,prompt:h,tag:l,id:d,attestation:n?.attestation,tvf:n?.tvf}).then(D).catch(T=>{this.logger.warn(T,T?.message),j(T)})}),this.initialPublishTimeout,`Failed initial publish, retrying.... id:${d} tag:${l}`);try{await I,this.events.removeListener(index_es_C.publish,x)}catch(D){this.queue.set(d,Ge(index_es_Ie({},g),{attempt:1})),this.logger.warn(D,D?.message)}});this.logger.trace({type:"method",method:"publish",params:{id:d,topic:i,message:s,opts:n}}),await ai(u,this.publishTimeout,_)}catch(u){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(u),(o=n?.internal)!=null&&o.throwOnFailedPublish)throw u}finally{this.queue.delete(d)}}),index_es_V(this,"on",(i,s)=>{this.events.on(i,s)}),index_es_V(this,"once",(i,s)=>{this.events.once(i,s)}),index_es_V(this,"off",(i,s)=>{this.events.off(i,s)}),index_es_V(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.relayer=e,this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name),this.registerEventListeners()}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}async rpcPublish(e){var t,i,s,n;const{topic:o,message:a,ttl:c=index_es_je,prompt:h,tag:l,id:d,attestation:g,tvf:_}=e,u={method:sa(oa().protocol).publish,params:index_es_Ie({topic:o,message:a,ttl:c,prompt:h,tag:l,attestation:g},_),id:d};Ht((t=u.params)==null?void 0:t.prompt)&&((i=u.params)==null||delete i.prompt),Ht((s=u.params)==null?void 0:s.tag)&&((n=u.params)==null||delete n.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:u});const b=await this.relayer.request(u);return this.relayer.events.emit(index_es_C.publish,e),this.logger.debug("Successfully Published Payload"),b}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach(async(e,t)=>{const i=e.attempt+1;this.queue.set(t,Ge(index_es_Ie({},e),{attempt:i}));const{topic:s,message:n,opts:o,attestation:a}=e;this.logger.warn({},`Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`),await this.rpcPublish(Ge(index_es_Ie({},e),{topic:s,message:n,ttl:o.ttl,prompt:o.prompt,tag:o.tag,id:o.id,attestation:a,tvf:o.tvf})),this.logger.warn({},`Publisher: queue->published: ${e.opts.id}`)})}registerEventListeners(){this.relayer.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(index_es_C.connection_stalled);return}this.checkQueue()}),this.relayer.on(index_es_C.message_ack,e=>{this.removeRequestFromQueue(e.id.toString())})}}var index_es_Wn=Object.defineProperty,index_es_Hn=(r,e,t)=>e in r?index_es_Wn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_ne=(r,e,t)=>index_es_Hn(r,typeof e!="symbol"?e+"":e,t);class index_es_Yn{constructor(){index_es_ne(this,"map",new Map),index_es_ne(this,"set",(e,t)=>{const i=this.get(e);this.exists(e,t)||this.map.set(e,[...i,t])}),index_es_ne(this,"get",e=>this.map.get(e)||[]),index_es_ne(this,"exists",(e,t)=>this.get(e).includes(t)),index_es_ne(this,"delete",(e,t)=>{if(typeof t>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const i=this.get(e);if(!this.exists(e,t))return;const s=i.filter(n=>n!==t);if(!s.length){this.map.delete(e);return}this.map.set(e,s)}),index_es_ne(this,"clear",()=>{this.map.clear()})}get topics(){return Array.from(this.map.keys())}}var Jn=Object.defineProperty,index_es_Xn=Object.defineProperties,index_es_Zn=Object.getOwnPropertyDescriptors,index_es_Ti=Object.getOwnPropertySymbols,Qn=Object.prototype.hasOwnProperty,index_es_eo=Object.prototype.propertyIsEnumerable,index_es_We=(r,e,t)=>e in r?Jn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_ge=(r,e)=>{for(var t in e||(e={}))Qn.call(e,t)&&index_es_We(r,t,e[t]);if(index_es_Ti)for(var t of index_es_Ti(e))index_es_eo.call(e,t)&&index_es_We(r,t,e[t]);return r},index_es_He=(r,e)=>index_es_Xn(r,index_es_Zn(e)),index_es_f=(r,e,t)=>index_es_We(r,typeof e!="symbol"?e+"":e,t);class index_es_Ci extends P{constructor(e,t){super(e,t),this.relayer=e,this.logger=t,index_es_f(this,"subscriptions",new Map),index_es_f(this,"topicMap",new index_es_Yn),index_es_f(this,"events",new external_events_.EventEmitter),index_es_f(this,"name",dist_index_es_Ut),index_es_f(this,"version",index_es_Ft),index_es_f(this,"pending",new Map),index_es_f(this,"cached",[]),index_es_f(this,"initialized",!1),index_es_f(this,"storagePrefix",B),index_es_f(this,"subscribeTimeout",(0,cjs.toMiliseconds)(cjs.ONE_MINUTE)),index_es_f(this,"initialSubscribeTimeout",(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15)),index_es_f(this,"clientId"),index_es_f(this,"batchSubscribeTopicsLimit",500),index_es_f(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),await this.restore()),this.initialized=!0}),index_es_f(this,"subscribe",async(i,s)=>{this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}});try{const n=oa(s),o={topic:i,relay:n,transportType:s?.transportType};this.pending.set(i,o);const a=await this.rpcSubscribe(i,n,s);return typeof a=="string"&&(this.onSubscribe(a,o),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}})),a}catch(n){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(n),n}}),index_es_f(this,"unsubscribe",async(i,s)=>{this.isInitialized(),typeof s?.id<"u"?await this.unsubscribeById(i,s.id,s):await this.unsubscribeByTopic(i,s)}),index_es_f(this,"isSubscribed",i=>new Promise(s=>{s(this.topicMap.topics.includes(i))})),index_es_f(this,"isKnownTopic",i=>new Promise(s=>{s(this.topicMap.topics.includes(i)||this.pending.has(i)||this.cached.some(n=>n.topic===i))})),index_es_f(this,"on",(i,s)=>{this.events.on(i,s)}),index_es_f(this,"once",(i,s)=>{this.events.once(i,s)}),index_es_f(this,"off",(i,s)=>{this.events.off(i,s)}),index_es_f(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),index_es_f(this,"start",async()=>{await this.onConnect()}),index_es_f(this,"stop",async()=>{await this.onDisconnect()}),index_es_f(this,"restart",async()=>{await this.restore(),await this.onRestart()}),index_es_f(this,"checkPending",async()=>{if(this.pending.size===0&&(!this.initialized||!this.relayer.connected))return;const i=[];this.pending.forEach(s=>{i.push(s)}),await this.batchSubscribe(i)}),index_es_f(this,"registerEventListeners",()=>{this.relayer.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,async()=>{await this.checkPending()}),this.events.on(index_es_$.created,async i=>{const s=index_es_$.created;this.logger.info(`Emitting ${s}`),this.logger.debug({type:"event",event:s,data:i}),await this.persist()}),this.events.on(index_es_$.deleted,async i=>{const s=index_es_$.deleted;this.logger.info(`Emitting ${s}`),this.logger.debug({type:"event",event:s,data:i}),await this.persist()})}),this.relayer=e,this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name),this.clientId=""}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}get hasAnyTopics(){return this.topicMap.topics.length>0||this.pending.size>0||this.cached.length>0||this.subscriptions.size>0}hasSubscription(e,t){let i=!1;try{i=this.getSubscription(e).topic===t}catch{}return i}reset(){this.cached=[],this.initialized=!0}onDisable(){this.values.length>0&&(this.cached=this.values),this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,t){const i=this.topicMap.get(e);await Promise.all(i.map(async s=>await this.unsubscribeById(e,s,t)))}async unsubscribeById(e,t,i){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}});try{const s=oa(i);await this.restartToComplete({topic:e,id:t,relay:s}),await this.rpcUnsubscribe(e,t,s);const n=zt("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,t,n),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:t,opts:i}})}catch(s){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(s),s}}async rpcSubscribe(e,t,i){var s;(!i||i?.transportType===index_es_Q.relay)&&await this.restartToComplete({topic:e,id:e,relay:t});const n={method:sa(t.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:n});const o=(s=i?.internal)==null?void 0:s.throwOnFailedPublish;try{const a=await this.getSubscriptionId(e);if(i?.transportType===index_es_Q.link_mode)return setTimeout(()=>{(this.relayer.connected||this.relayer.connecting)&&this.relayer.request(n).catch(l=>this.logger.warn(l))},(0,cjs.toMiliseconds)(cjs.ONE_SECOND)),a;const c=new Promise(async l=>{const d=g=>{g.topic===e&&(this.events.removeListener(index_es_$.created,d),l(g.id))};this.events.on(index_es_$.created,d);try{const g=await ai(new Promise((_,u)=>{this.relayer.request(n).catch(b=>{this.logger.warn(b,b?.message),u(b)}).then(_)}),this.initialSubscribeTimeout,`Subscribing to ${e} failed, please try again`);this.events.removeListener(index_es_$.created,d),l(g)}catch{}}),h=await ai(c,this.subscribeTimeout,`Subscribing to ${e} failed, please try again`);if(!h&&o)throw new Error(`Subscribing to ${e} failed, please try again`);return h?a:null}catch(a){if(this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(index_es_C.connection_stalled),o)throw a}return null}async rpcBatchSubscribe(e){if(!e.length)return;const t=e[0].relay,i={method:sa(t.protocol).batchSubscribe,params:{topics:e.map(s=>s.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{await await ai(new Promise(s=>{this.relayer.request(i).catch(n=>this.logger.warn(n)).then(s)}),this.subscribeTimeout,"rpcBatchSubscribe failed, please try again")}catch{this.relayer.events.emit(index_es_C.connection_stalled)}}async rpcBatchFetchMessages(e){if(!e.length)return;const t=e[0].relay,i={method:sa(t.protocol).batchFetchMessages,params:{topics:e.map(n=>n.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});let s;try{s=await await ai(new Promise((n,o)=>{this.relayer.request(i).catch(a=>{this.logger.warn(a),o(a)}).then(n)}),this.subscribeTimeout,"rpcBatchFetchMessages failed, please try again")}catch{this.relayer.events.emit(index_es_C.connection_stalled)}return s}rpcUnsubscribe(e,t,i){const s={method:sa(i.protocol).unsubscribe,params:{topic:e,id:t}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s}),this.relayer.request(s)}onSubscribe(e,t){this.setSubscription(e,index_es_He(index_es_ge({},t),{id:e})),this.pending.delete(t.topic)}onBatchSubscribe(e){e.length&&e.forEach(t=>{this.setSubscription(t.id,index_es_ge({},t)),this.pending.delete(t.topic)})}async onUnsubscribe(e,t,i){this.events.removeAllListeners(t),this.hasSubscription(t,e)&&this.deleteSubscription(t,i),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,t){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:t}),this.addSubscription(e,t)}addSubscription(e,t){this.subscriptions.set(e,index_es_ge({},t)),this.topicMap.set(t.topic,e),this.events.emit(index_es_$.created,t)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const t=this.subscriptions.get(e);if(!t){const{message:i}=Et("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}deleteSubscription(e,t){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:t});const i=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(i.topic,e),this.events.emit(index_es_$.deleted,index_es_He(index_es_ge({},i),{reason:t}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(index_es_$.sync)}async onRestart(){if(this.cached.length){const e=[...this.cached],t=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let i=0;i<t;i++){const s=e.splice(0,this.batchSubscribeTopicsLimit);await this.batchSubscribe(s)}}this.events.emit(index_es_$.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:t}=Et("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){e.length&&(await this.rpcBatchSubscribe(e),this.onBatchSubscribe(await Promise.all(e.map(async t=>index_es_He(index_es_ge({},t),{id:await this.getSubscriptionId(t.topic)})))))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const t=await this.rpcBatchFetchMessages(e);t&&t.messages&&(await vi((0,cjs.toMiliseconds)(cjs.ONE_SECOND)),await this.relayer.handleBatchMessageEvents(t.messages))}async onConnect(){await this.restart(),this.reset()}onDisconnect(){this.onDisable()}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(e){!this.relayer.connected&&!this.relayer.connecting&&(this.cached.push(e),await this.relayer.transportOpen())}async getClientId(){return this.clientId||(this.clientId=await this.relayer.core.crypto.getClientId()),this.clientId}async getSubscriptionId(e){return Wf(e+await this.getClientId())}}var index_es_to=Object.defineProperty,index_es_Pi=Object.getOwnPropertySymbols,index_es_io=Object.prototype.hasOwnProperty,index_es_so=Object.prototype.propertyIsEnumerable,index_es_Ye=(r,e,t)=>e in r?index_es_to(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_Si=(r,e)=>{for(var t in e||(e={}))index_es_io.call(e,t)&&index_es_Ye(r,t,e[t]);if(index_es_Pi)for(var t of index_es_Pi(e))index_es_so.call(e,t)&&index_es_Ye(r,t,e[t]);return r},index_es_y=(r,e,t)=>index_es_Ye(r,typeof e!="symbol"?e+"":e,t);class index_es_Oi extends d{constructor(e){super(e),index_es_y(this,"protocol","wc"),index_es_y(this,"version",2),index_es_y(this,"core"),index_es_y(this,"logger"),index_es_y(this,"events",new external_events_.EventEmitter),index_es_y(this,"provider"),index_es_y(this,"messages"),index_es_y(this,"subscriber"),index_es_y(this,"publisher"),index_es_y(this,"name",index_es_$t),index_es_y(this,"transportExplicitlyClosed",!1),index_es_y(this,"initialized",!1),index_es_y(this,"connectionAttemptInProgress",!1),index_es_y(this,"relayUrl"),index_es_y(this,"projectId"),index_es_y(this,"packageName"),index_es_y(this,"bundleId"),index_es_y(this,"hasExperiencedNetworkDisruption",!1),index_es_y(this,"pingTimeout"),index_es_y(this,"heartBeatTimeout",(0,cjs.toMiliseconds)(cjs.THIRTY_SECONDS+cjs.FIVE_SECONDS)),index_es_y(this,"reconnectTimeout"),index_es_y(this,"connectPromise"),index_es_y(this,"reconnectInProgress",!1),index_es_y(this,"requestsInFlight",[]),index_es_y(this,"connectTimeout",(0,cjs.toMiliseconds)(cjs.ONE_SECOND*15)),index_es_y(this,"request",async t=>{var i,s;this.logger.debug("Publishing Request Payload");const n=t.id||(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString();await this.toEstablishConnection();try{this.logger.trace({id:n,method:t.method,topic:(i=t.params)==null?void 0:i.topic},"relayer.request - publishing...");const o=`${n}:${((s=t.params)==null?void 0:s.tag)||""}`;this.requestsInFlight.push(o);const a=await this.provider.request(t);return this.requestsInFlight=this.requestsInFlight.filter(c=>c!==o),a}catch(o){throw this.logger.debug(`Failed to Publish Request: ${n}`),o}}),index_es_y(this,"resetPingTimeout",()=>{Qe()&&(clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var t,i,s,n;try{this.logger.debug({},"pingTimeout: Connection stalled, terminating..."),(n=(s=(i=(t=this.provider)==null?void 0:t.connection)==null?void 0:i.socket)==null?void 0:s.terminate)==null||n.call(s)}catch(o){this.logger.warn(o,o?.message)}},this.heartBeatTimeout))}),index_es_y(this,"onPayloadHandler",t=>{this.onProviderPayload(t),this.resetPingTimeout()}),index_es_y(this,"onConnectHandler",()=>{this.logger.warn({},"Relayer connected \u{1F6DC}"),this.startPingTimeout(),this.events.emit(index_es_C.connect)}),index_es_y(this,"onDisconnectHandler",()=>{this.logger.warn({},"Relayer disconnected \u{1F6D1}"),this.requestsInFlight=[],this.onProviderDisconnect()}),index_es_y(this,"onProviderErrorHandler",t=>{this.logger.fatal(`Fatal socket error: ${t.message}`),this.events.emit(index_es_C.error,t),this.logger.fatal("Fatal socket error received, closing transport"),this.transportClose()}),index_es_y(this,"registerProviderListeners",()=>{this.provider.on(L.payload,this.onPayloadHandler),this.provider.on(L.connect,this.onConnectHandler),this.provider.on(L.disconnect,this.onDisconnectHandler),this.provider.on(L.error,this.onProviderErrorHandler)}),this.core=e.core,this.logger=typeof e.logger<"u"&&typeof e.logger!="string"?(0,logger_dist_index_es/* generateChildLogger */.U5)(e.logger,this.name):(0,logger_dist_index_es/* pino */.h6)((0,logger_dist_index_es/* getDefaultLoggerOptions */.iP)({level:e.logger||index_es_Nt})),this.messages=new index_es_Ei(this.logger,e.core),this.subscriber=new index_es_Ci(this,this.logger),this.publisher=new index_es_Gn(this,this.logger),this.relayUrl=e?.relayUrl||index_es_Ue,this.projectId=e.projectId,Zs()?this.packageName=Ys():Ws()&&(this.bundleId=Ys()),this.provider={}}async init(){if(this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),this.initialized=!0,this.subscriber.hasAnyTopics)try{await this.transportOpen()}catch(e){this.logger.warn(e,e?.message)}}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get connected(){var e,t,i;return((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===1||!1}get connecting(){var e,t,i;return((i=(t=(e=this.provider)==null?void 0:e.connection)==null?void 0:t.socket)==null?void 0:i.readyState)===0||this.connectPromise!==void 0||!1}async publish(e,t,i){this.isInitialized(),await this.publisher.publish(e,t,i),await this.recordMessageEvent({topic:e,message:t,publishedAt:Date.now(),transportType:index_es_Q.relay},index_es_le.outbound)}async subscribe(e,t){var i,s,n;this.isInitialized(),(!(t!=null&&t.transportType)||t?.transportType==="relay")&&await this.toEstablishConnection();const o=typeof((i=t?.internal)==null?void 0:i.throwOnFailedPublish)>"u"?!0:(s=t?.internal)==null?void 0:s.throwOnFailedPublish;let a=((n=this.subscriber.topicMap.get(e))==null?void 0:n[0])||"",c;const h=l=>{l.topic===e&&(this.subscriber.off(index_es_$.created,h),c())};return await Promise.all([new Promise(l=>{c=l,this.subscriber.on(index_es_$.created,h)}),new Promise(async(l,d)=>{a=await this.subscriber.subscribe(e,index_es_Si({internal:{throwOnFailedPublish:o}},t)).catch(g=>{o&&d(g)})||a,l()})]),a}async unsubscribe(e,t){this.isInitialized(),await this.subscriber.unsubscribe(e,t)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async transportDisconnect(){this.provider.disconnect&&(this.hasExperiencedNetworkDisruption||this.connected)?await ai(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){if(!this.subscriber.hasAnyTopics){this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");return}if(this.connectPromise?(this.logger.debug({},"Waiting for existing connection attempt to resolve..."),await this.connectPromise,this.logger.debug({},"Existing connection attempt resolved")):(this.connectPromise=new Promise(async(t,i)=>{await this.connect(e).then(t).catch(i).finally(()=>{this.connectPromise=void 0})}),await this.connectPromise),!this.connected)throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)}async restartTransport(e){this.logger.debug({},"Restarting transport..."),!this.connectionAttemptInProgress&&(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await Ha())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if(e?.length===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const t=e.sort((i,s)=>i.publishedAt-s.publishedAt);this.logger.debug(`Batch of ${t.length} message events sorted`);for(const i of t)try{await this.onMessageEvent(i)}catch(s){this.logger.warn(s,"Error while processing batch message event: "+s?.message)}this.logger.trace(`Batch of ${t.length} message events processed`)}async onLinkMessageEvent(e,t){const{topic:i}=e;if(!t.sessionExists){const s=hi(cjs.FIVE_MINUTES),n={topic:i,expiry:s,relay:{protocol:"irn"},active:!1};await this.core.pairing.pairings.set(i,n)}this.events.emit(index_es_C.message,e),await this.recordMessageEvent(e,index_es_le.inbound)}async connect(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;let t=1;for(;t<6;){try{if(this.transportExplicitlyClosed)break;this.logger.debug({},`Connecting to ${this.relayUrl}, attempt: ${t}...`),await this.createProvider(),await new Promise(async(i,s)=>{const n=()=>{s(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(L.disconnect,n),await ai(new Promise((o,a)=>{this.provider.connect().then(o).catch(a)}),this.connectTimeout,`Socket stalled when trying to connect to ${this.relayUrl}`).catch(o=>{s(o)}).finally(()=>{this.provider.off(L.disconnect,n),clearTimeout(this.reconnectTimeout)}),await new Promise(async(o,a)=>{const c=()=>{a(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(L.disconnect,c),await this.subscriber.start().then(o).catch(a).finally(()=>{this.provider.off(L.disconnect,c)})}),this.hasExperiencedNetworkDisruption=!1,i()})}catch(i){await this.subscriber.stop();const s=i;this.logger.warn({},s.message),this.hasExperiencedNetworkDisruption=!0}finally{this.connectionAttemptInProgress=!1}if(this.connected){this.logger.debug({},`Connected to ${this.relayUrl} successfully on attempt: ${t}`);break}await new Promise(i=>setTimeout(i,(0,cjs.toMiliseconds)(t*1))),t++}}startPingTimeout(){var e,t,i,s,n;if(Qe())try{(t=(e=this.provider)==null?void 0:e.connection)!=null&&t.socket&&((n=(s=(i=this.provider)==null?void 0:i.connection)==null?void 0:s.socket)==null||n.on("ping",()=>{this.resetPingTimeout()})),this.resetPingTimeout()}catch(o){this.logger.warn(o,o?.message)}}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_ws_connection_dist_index_es/* default */.A(Qs({sdkVersion:index_es_e,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId,packageName:this.packageName}))),this.registerProviderListeners()}async recordMessageEvent(e,t){const{topic:i,message:s}=e;await this.messages.set(i,s,t)}async shouldIgnoreMessageEvent(e){const{topic:t,message:i}=e;if(!i||i.length===0)return this.logger.warn(`Ignoring invalid/empty message: ${i}`),!0;if(!await this.subscriber.isKnownTopic(t))return this.logger.warn(`Ignoring message for unknown topic ${t}`),!0;const s=this.messages.has(t,i);return s&&this.logger.warn(`Ignoring duplicate message: ${i}`),s}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),(0,jsonrpc_utils_dist_esm.isJsonRpcRequest)(e)){if(!e.method.endsWith(index_es_zt))return;const t=e.params,{topic:i,message:s,publishedAt:n,attestation:o}=t.data,a={topic:i,message:s,publishedAt:n,transportType:index_es_Q.relay,attestation:o};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(index_es_Si({type:"event",event:t.id},a)),this.events.emit(t.id,a),await this.acknowledgePayload(e),await this.onMessageEvent(a)}else (0,jsonrpc_utils_dist_esm.isJsonRpcResponse)(e)&&this.events.emit(index_es_C.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(await this.recordMessageEvent(e,index_es_le.inbound),this.events.emit(index_es_C.message,e))}async acknowledgePayload(e){const t=(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(e.id,!0);await this.provider.connection.send(t)}unregisterProviderListeners(){this.provider.off(L.payload,this.onPayloadHandler),this.provider.off(L.connect,this.onConnectHandler),this.provider.off(L.disconnect,this.onDisconnectHandler),this.provider.off(L.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await Ha();Da(async t=>{e!==t&&(e=t,t?await this.transportOpen().catch(i=>this.logger.error(i,i?.message)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))}),this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,async()=>{if(!this.transportExplicitlyClosed&&!this.connected&&Ma())try{await this.confirmOnlineStateOrThrow(),await this.transportOpen()}catch(t){this.logger.warn(t,t?.message)}})}async onProviderDisconnect(){clearTimeout(this.pingTimeout),this.events.emit(index_es_C.disconnect),this.connectionAttemptInProgress=!1,!this.reconnectInProgress&&(this.reconnectInProgress=!0,await this.subscriber.stop(),this.subscriber.hasAnyTopics&&(this.transportExplicitlyClosed||(this.reconnectTimeout=setTimeout(async()=>{await this.transportOpen().catch(e=>this.logger.error(e,e?.message)),this.reconnectTimeout=void 0,this.reconnectInProgress=!1},(0,cjs.toMiliseconds)(index_es_Lt)))))}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){if(await this.confirmOnlineStateOrThrow(),!this.connected){if(this.connectPromise){await this.connectPromise;return}await this.connect()}}}function index_es_ro(r,e){return r===e||Number.isNaN(r)&&Number.isNaN(e)}function index_es_Ri(r){return Object.getOwnPropertySymbols(r).filter(e=>Object.prototype.propertyIsEnumerable.call(r,e))}function index_es_Ai(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}const index_es_no="[object RegExp]",index_es_oo="[object String]",index_es_ao="[object Number]",index_es_co="[object Boolean]",index_es_xi="[object Arguments]",index_es_ho="[object Symbol]",index_es_lo="[object Date]",index_es_uo="[object Map]",index_es_go="[object Set]",index_es_po="[object Array]",index_es_yo="[object Function]",index_es_bo="[object ArrayBuffer]",index_es_Je="[object Object]",index_es_mo="[object Error]",index_es_fo="[object DataView]",index_es_Do="[object Uint8Array]",index_es_vo="[object Uint8ClampedArray]",index_es_wo="[object Uint16Array]",index_es_o="[object Uint32Array]",index_es_Eo="[object BigUint64Array]",index_es_Io="[object Int8Array]",index_es_To="[object Int16Array]",index_es_Co="[object Int32Array]",index_es_Po="[object BigInt64Array]",index_es_So="[object Float32Array]",index_es_Oo="[object Float64Array]";function index_es_Ni(r){if(!r||typeof r!="object")return!1;const e=Object.getPrototypeOf(r);return e===null||e===Object.prototype||Object.getPrototypeOf(e)===null?Object.prototype.toString.call(r)==="[object Object]":!1}function index_es_Ro(r,e,t){return index_es_pe(r,e,void 0,void 0,void 0,void 0,t)}function index_es_pe(r,e,t,i,s,n,o){const a=o(r,e,t,i,s,n);if(a!==void 0)return a;if(typeof r==typeof e)switch(typeof r){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return r===e;case"number":return r===e||Object.is(r,e);case"function":return r===e;case"object":return index_es_ye(r,e,n,o)}return index_es_ye(r,e,n,o)}function index_es_ye(r,e,t,i){if(Object.is(r,e))return!0;let s=index_es_Ai(r),n=index_es_Ai(e);if(s===index_es_xi&&(s=index_es_Je),n===index_es_xi&&(n=index_es_Je),s!==n)return!1;switch(s){case index_es_oo:return r.toString()===e.toString();case index_es_ao:{const c=r.valueOf(),h=e.valueOf();return index_es_ro(c,h)}case index_es_co:case index_es_lo:case index_es_ho:return Object.is(r.valueOf(),e.valueOf());case index_es_no:return r.source===e.source&&r.flags===e.flags;case index_es_yo:return r===e}t=t??new Map;const o=t.get(r),a=t.get(e);if(o!=null&&a!=null)return o===e;t.set(r,e),t.set(e,r);try{switch(s){case index_es_uo:{if(r.size!==e.size)return!1;for(const[c,h]of r.entries())if(!e.has(c)||!index_es_pe(h,e.get(c),c,r,e,t,i))return!1;return!0}case index_es_go:{if(r.size!==e.size)return!1;const c=Array.from(r.values()),h=Array.from(e.values());for(let l=0;l<c.length;l++){const d=c[l],g=h.findIndex(_=>index_es_pe(d,_,void 0,r,e,t,i));if(g===-1)return!1;h.splice(g,1)}return!0}case index_es_po:case index_es_Do:case index_es_vo:case index_es_wo:case index_es_o:case index_es_Eo:case index_es_Io:case index_es_To:case index_es_Co:case index_es_Po:case index_es_So:case index_es_Oo:{if(typeof Buffer<"u"&&Buffer.isBuffer(r)!==Buffer.isBuffer(e)||r.length!==e.length)return!1;for(let c=0;c<r.length;c++)if(!index_es_pe(r[c],e[c],c,r,e,t,i))return!1;return!0}case index_es_bo:return r.byteLength!==e.byteLength?!1:index_es_ye(new Uint8Array(r),new Uint8Array(e),t,i);case index_es_fo:return r.byteLength!==e.byteLength||r.byteOffset!==e.byteOffset?!1:index_es_ye(new Uint8Array(r),new Uint8Array(e),t,i);case index_es_mo:return r.name===e.name&&r.message===e.message;case index_es_Je:{if(!(index_es_ye(r.constructor,e.constructor,t,i)||index_es_Ni(r)&&index_es_Ni(e)))return!1;const h=[...Object.keys(r),...index_es_Ri(r)],l=[...Object.keys(e),...index_es_Ri(e)];if(h.length!==l.length)return!1;for(let d=0;d<h.length;d++){const g=h[d],_=r[g];if(!Object.hasOwn(e,g))return!1;const u=e[g];if(!index_es_pe(_,u,g,r,e,t,i))return!1}return!0}default:return!1}}finally{t.delete(r),t.delete(e)}}function index_es_Ao(){}function index_es_xo(r,e){return index_es_Ro(r,e,index_es_Ao)}var index_es_No=Object.defineProperty,index_es_$i=Object.getOwnPropertySymbols,index_es_$o=Object.prototype.hasOwnProperty,index_es_zo=Object.prototype.propertyIsEnumerable,index_es_Xe=(r,e,t)=>e in r?index_es_No(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_zi=(r,e)=>{for(var t in e||(e={}))index_es_$o.call(e,t)&&index_es_Xe(r,t,e[t]);if(index_es_$i)for(var t of index_es_$i(e))index_es_zo.call(e,t)&&index_es_Xe(r,t,e[t]);return r},index_es_z=(r,e,t)=>index_es_Xe(r,typeof e!="symbol"?e+"":e,t);class index_es_Li extends f{constructor(e,t,i,s=B,n=void 0){super(e,t,i,s),this.core=e,this.logger=t,this.name=i,index_es_z(this,"map",new Map),index_es_z(this,"version",index_es_kt),index_es_z(this,"cached",[]),index_es_z(this,"initialized",!1),index_es_z(this,"getKey"),index_es_z(this,"storagePrefix",B),index_es_z(this,"recentlyDeleted",[]),index_es_z(this,"recentlyDeletedLimit",200),index_es_z(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(o=>{this.getKey&&o!==null&&!Ht(o)?this.map.set(this.getKey(o),o):Ea(o)?this.map.set(o.id,o):Aa(o)&&this.map.set(o.topic,o)}),this.cached=[],this.initialized=!0)}),index_es_z(this,"set",async(o,a)=>{this.isInitialized(),this.map.has(o)?await this.update(o,a):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:o,value:a}),this.map.set(o,a),await this.persist())}),index_es_z(this,"get",o=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:o}),this.getData(o))),index_es_z(this,"getAll",o=>(this.isInitialized(),o?this.values.filter(a=>Object.keys(o).every(c=>index_es_xo(a[c],o[c]))):this.values)),index_es_z(this,"update",async(o,a)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:o,update:a});const c=index_es_zi(index_es_zi({},this.getData(o)),a);this.map.set(o,c),await this.persist()}),index_es_z(this,"delete",async(o,a)=>{this.isInitialized(),this.map.has(o)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:o,reason:a}),this.map.delete(o),this.addToRecentlyDeleted(o),await this.persist())}),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name),this.storagePrefix=s,this.getKey=n}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const t=this.map.get(e);if(!t){if(this.recentlyDeleted.includes(e)){const{message:s}=Et("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}const{message:i}=Et("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(i),new Error(i)}return t}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:t}=Et("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}}var index_es_Lo=Object.defineProperty,index_es_ko=(r,e,t)=>e in r?index_es_Lo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_p=(r,e,t)=>index_es_ko(r,typeof e!="symbol"?e+"":e,t);class index_es_ki{constructor(e,t){this.core=e,this.logger=t,index_es_p(this,"name",index_es_Mt),index_es_p(this,"version",index_es_Kt),index_es_p(this,"events",new (external_events_default())),index_es_p(this,"pairings"),index_es_p(this,"initialized",!1),index_es_p(this,"storagePrefix",B),index_es_p(this,"ignoredPayloadTypes",[ne]),index_es_p(this,"registeredMethods",[]),index_es_p(this,"init",async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))}),index_es_p(this,"register",({methods:i})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...i])]}),index_es_p(this,"create",async i=>{this.isInitialized();const s=zf(),n=await this.core.crypto.setSymKey(s),o=hi(cjs.FIVE_MINUTES),a={protocol:index_es_xt},c={topic:n,expiry:o,relay:a,active:!1,methods:i?.methods},h=ca({protocol:this.core.protocol,version:this.core.version,topic:n,symKey:s,relay:a,expiryTimestamp:o,methods:i?.methods});return this.events.emit(re.create,c),this.core.expirer.set(n,o),await this.pairings.set(n,c),await this.core.relayer.subscribe(n,{transportType:i?.transportType}),{topic:n,uri:h}}),index_es_p(this,"pair",async i=>{this.isInitialized();const s=this.core.eventClient.createEvent({properties:{topic:i?.uri,trace:[G.pairing_started]}});this.isValidPair(i,s);const{topic:n,symKey:o,relay:a,expiryTimestamp:c,methods:h}=ia(i.uri);s.props.properties.topic=n,s.addTrace(G.pairing_uri_validation_success),s.addTrace(G.pairing_uri_not_expired);let l;if(this.pairings.keys.includes(n)){if(l=this.pairings.get(n),s.addTrace(G.existing_pairing),l.active)throw s.setError(index_es_Y.active_pairing_already_exists),new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);s.addTrace(G.pairing_not_expired)}const d=c||hi(cjs.FIVE_MINUTES),g={topic:n,relay:a,expiry:d,active:!1,methods:h};this.core.expirer.set(n,d),await this.pairings.set(n,g),s.addTrace(G.store_new_pairing),i.activatePairing&&await this.activate({topic:n}),this.events.emit(re.create,g),s.addTrace(G.emit_inactive_pairing),this.core.crypto.keychain.has(n)||await this.core.crypto.setSymKey(o,n),s.addTrace(G.subscribing_pairing_topic);try{await this.core.relayer.confirmOnlineStateOrThrow()}catch{s.setError(index_es_Y.no_internet_connection)}try{await this.core.relayer.subscribe(n,{relay:a})}catch(_){throw s.setError(index_es_Y.subscribe_pairing_topic_failure),_}return s.addTrace(G.subscribe_pairing_topic_success),g}),index_es_p(this,"activate",async({topic:i})=>{this.isInitialized();const s=hi(cjs.FIVE_MINUTES);this.core.expirer.set(i,s),await this.pairings.update(i,{active:!0,expiry:s})}),index_es_p(this,"ping",async i=>{this.isInitialized(),await this.isValidPing(i),this.logger.warn("ping() is deprecated and will be removed in the next major release.");const{topic:s}=i;if(this.pairings.keys.includes(s)){const n=await this.sendRequest(s,"wc_pairingPing",{}),{done:o,resolve:a,reject:c}=fi();this.events.once(gi("pairing_ping",n),({error:h})=>{h?c(h):a()}),await o()}}),index_es_p(this,"updateExpiry",async({topic:i,expiry:s})=>{this.isInitialized(),await this.pairings.update(i,{expiry:s})}),index_es_p(this,"updateMetadata",async({topic:i,metadata:s})=>{this.isInitialized(),await this.pairings.update(i,{peerMetadata:s})}),index_es_p(this,"getPairings",()=>(this.isInitialized(),this.pairings.values)),index_es_p(this,"disconnect",async i=>{this.isInitialized(),await this.isValidDisconnect(i);const{topic:s}=i;this.pairings.keys.includes(s)&&(await this.sendRequest(s,"wc_pairingDelete",zt("USER_DISCONNECTED")),await this.deletePairing(s))}),index_es_p(this,"formatUriFromPairing",i=>{this.isInitialized();const{topic:s,relay:n,expiry:o,methods:a}=i,c=this.core.crypto.keychain.get(s);return ca({protocol:this.core.protocol,version:this.core.version,topic:s,symKey:c,relay:n,expiryTimestamp:o,methods:a})}),index_es_p(this,"sendRequest",async(i,s,n)=>{const o=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)(s,n),a=await this.core.crypto.encode(i,o),c=se[s].req;return this.core.history.set(i,o),this.core.relayer.publish(i,a,c),o.id}),index_es_p(this,"sendResult",async(i,s,n)=>{const o=(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(i,n),a=await this.core.crypto.encode(s,o),c=(await this.core.history.get(s,i)).request.method,h=se[c].res;await this.core.relayer.publish(s,a,h),await this.core.history.resolve(o)}),index_es_p(this,"sendError",async(i,s,n)=>{const o=(0,jsonrpc_utils_dist_esm.formatJsonRpcError)(i,n),a=await this.core.crypto.encode(s,o),c=(await this.core.history.get(s,i)).request.method,h=se[c]?se[c].res:se.unregistered_method.res;await this.core.relayer.publish(s,a,h),await this.core.history.resolve(o)}),index_es_p(this,"deletePairing",async(i,s)=>{await this.core.relayer.unsubscribe(i),await Promise.all([this.pairings.delete(i,zt("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(i),s?Promise.resolve():this.core.expirer.del(i)])}),index_es_p(this,"cleanup",async()=>{const i=this.pairings.getAll().filter(s=>pi(s.expiry));await Promise.all(i.map(s=>this.deletePairing(s.topic)))}),index_es_p(this,"onRelayEventRequest",async i=>{const{topic:s,payload:n}=i;switch(n.method){case"wc_pairingPing":return await this.onPairingPingRequest(s,n);case"wc_pairingDelete":return await this.onPairingDeleteRequest(s,n);default:return await this.onUnknownRpcMethodRequest(s,n)}}),index_es_p(this,"onRelayEventResponse",async i=>{const{topic:s,payload:n}=i,o=(await this.core.history.get(s,n.id)).request.method;switch(o){case"wc_pairingPing":return this.onPairingPingResponse(s,n);default:return this.onUnknownRpcMethodResponse(o)}}),index_es_p(this,"onPairingPingRequest",async(i,s)=>{const{id:n}=s;try{this.isValidPing({topic:i}),await this.sendResult(n,i,!0),this.events.emit(re.ping,{id:n,topic:i})}catch(o){await this.sendError(n,i,o),this.logger.error(o)}}),index_es_p(this,"onPairingPingResponse",(i,s)=>{const{id:n}=s;setTimeout(()=>{(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(s)?this.events.emit(gi("pairing_ping",n),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(s)&&this.events.emit(gi("pairing_ping",n),{error:s.error})},500)}),index_es_p(this,"onPairingDeleteRequest",async(i,s)=>{const{id:n}=s;try{this.isValidDisconnect({topic:i}),await this.deletePairing(i),this.events.emit(re.delete,{id:n,topic:i})}catch(o){await this.sendError(n,i,o),this.logger.error(o)}}),index_es_p(this,"onUnknownRpcMethodRequest",async(i,s)=>{const{id:n,method:o}=s;try{if(this.registeredMethods.includes(o))return;const a=zt("WC_METHOD_UNSUPPORTED",o);await this.sendError(n,i,a),this.logger.error(a)}catch(a){await this.sendError(n,i,a),this.logger.error(a)}}),index_es_p(this,"onUnknownRpcMethodResponse",i=>{this.registeredMethods.includes(i)||this.logger.error(zt("WC_METHOD_UNSUPPORTED",i))}),index_es_p(this,"isValidPair",(i,s)=>{var n;if(!Na(i)){const{message:a}=Et("MISSING_OR_INVALID",`pair() params: ${i}`);throw s.setError(index_es_Y.malformed_pairing_uri),new Error(a)}if(!va(i.uri)){const{message:a}=Et("MISSING_OR_INVALID",`pair() uri: ${i.uri}`);throw s.setError(index_es_Y.malformed_pairing_uri),new Error(a)}const o=ia(i?.uri);if(!((n=o?.relay)!=null&&n.protocol)){const{message:a}=Et("MISSING_OR_INVALID","pair() uri#relay-protocol");throw s.setError(index_es_Y.malformed_pairing_uri),new Error(a)}if(!(o!=null&&o.symKey)){const{message:a}=Et("MISSING_OR_INVALID","pair() uri#symKey");throw s.setError(index_es_Y.malformed_pairing_uri),new Error(a)}if(o!=null&&o.expiryTimestamp&&(0,cjs.toMiliseconds)(o?.expiryTimestamp)<Date.now()){s.setError(index_es_Y.pairing_expired);const{message:a}=Et("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(a)}}),index_es_p(this,"isValidPing",async i=>{if(!Na(i)){const{message:n}=Et("MISSING_OR_INVALID",`ping() params: ${i}`);throw new Error(n)}const{topic:s}=i;await this.isValidPairingTopic(s)}),index_es_p(this,"isValidDisconnect",async i=>{if(!Na(i)){const{message:n}=Et("MISSING_OR_INVALID",`disconnect() params: ${i}`);throw new Error(n)}const{topic:s}=i;await this.isValidPairingTopic(s)}),index_es_p(this,"isValidPairingTopic",async i=>{if(!ft(i,!1)){const{message:s}=Et("MISSING_OR_INVALID",`pairing topic should be a string: ${i}`);throw new Error(s)}if(!this.pairings.keys.includes(i)){const{message:s}=Et("NO_MATCHING_KEY",`pairing topic doesn't exist: ${i}`);throw new Error(s)}if(pi(this.pairings.get(i).expiry)){await this.deletePairing(i);const{message:s}=Et("EXPIRED",`pairing topic: ${i}`);throw new Error(s)}}),this.core=e,this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name),this.pairings=new index_es_Li(this.core,this.logger,this.name,this.storagePrefix)}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(index_es_C.message,async e=>{const{topic:t,message:i,transportType:s}=e;if(this.pairings.keys.includes(t)&&s!==index_es_Q.link_mode&&!this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))try{const n=await this.core.crypto.decode(t,i);(0,jsonrpc_utils_dist_esm.isJsonRpcRequest)(n)?(this.core.history.set(t,n),await this.onRelayEventRequest({topic:t,payload:n})):(0,jsonrpc_utils_dist_esm.isJsonRpcResponse)(n)&&(await this.core.history.resolve(n),await this.onRelayEventResponse({topic:t,payload:n}),this.core.history.delete(t,n.id)),await this.core.relayer.messages.ack(t,i)}catch(n){this.logger.error(n)}})}registerExpirerEvents(){this.core.expirer.on(index_es_M.expired,async e=>{const{topic:t}=di(e.target);t&&this.pairings.keys.includes(t)&&(await this.deletePairing(t,!0),this.events.emit(re.expire,{topic:t}))})}}var index_es_jo=Object.defineProperty,index_es_Uo=(r,e,t)=>e in r?index_es_jo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_O=(r,e,t)=>index_es_Uo(r,typeof e!="symbol"?e+"":e,t);class index_es_ji extends I{constructor(e,t){super(e,t),this.core=e,this.logger=t,index_es_O(this,"records",new Map),index_es_O(this,"events",new external_events_.EventEmitter),index_es_O(this,"name",index_es_Bt),index_es_O(this,"version",index_es_Vt),index_es_O(this,"cached",[]),index_es_O(this,"initialized",!1),index_es_O(this,"storagePrefix",B),index_es_O(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.records.set(i.id,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),index_es_O(this,"set",(i,s,n)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:i,request:s,chainId:n}),this.records.has(s.id))return;const o={id:s.id,topic:i,request:{method:s.method,params:s.params||null},chainId:n,expiry:hi(cjs.THIRTY_DAYS)};this.records.set(o.id,o),this.persist(),this.events.emit(F.created,o)}),index_es_O(this,"resolve",async i=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:i}),!this.records.has(i.id))return;const s=await this.getRecord(i.id);typeof s.response>"u"&&(s.response=(0,jsonrpc_utils_dist_esm.isJsonRpcError)(i)?{error:i.error}:{result:i.result},this.records.set(s.id,s),this.persist(),this.events.emit(F.updated,s))}),index_es_O(this,"get",async(i,s)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:i,id:s}),await this.getRecord(s))),index_es_O(this,"delete",(i,s)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:s}),this.values.forEach(n=>{if(n.topic===i){if(typeof s<"u"&&n.id!==s)return;this.records.delete(n.id),this.events.emit(F.deleted,n)}}),this.persist()}),index_es_O(this,"exists",async(i,s)=>(this.isInitialized(),this.records.has(s)?(await this.getRecord(s)).topic===i:!1)),index_es_O(this,"on",(i,s)=>{this.events.on(i,s)}),index_es_O(this,"once",(i,s)=>{this.events.once(i,s)}),index_es_O(this,"off",(i,s)=>{this.events.off(i,s)}),index_es_O(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name)}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(t=>{if(typeof t.response<"u")return;const i={topic:t.topic,request:(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)(t.request.method,t.request.params,t.id),chainId:t.chainId};return e.push(i)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const t=this.records.get(e);if(!t){const{message:i}=Et("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return t}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(F.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:t}=Et("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(F.created,e=>{const t=F.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(F.updated,e=>{const t=F.updated;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.events.on(F.deleted,e=>{const t=F.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,record:e})}),this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,()=>{this.cleanup()})}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(t=>{(0,cjs.toMiliseconds)(t.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${t.id}`),this.records.delete(t.id),this.events.emit(F.deleted,t,!1),e=!0)}),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}}var index_es_Fo=Object.defineProperty,index_es_Mo=(r,e,t)=>e in r?index_es_Fo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,A=(r,e,t)=>index_es_Mo(r,typeof e!="symbol"?e+"":e,t);class index_es_Ui extends S{constructor(e,t){super(e,t),this.core=e,this.logger=t,A(this,"expirations",new Map),A(this,"events",new external_events_.EventEmitter),A(this,"name",index_es_qt),A(this,"version",Gt),A(this,"cached",[]),A(this,"initialized",!1),A(this,"storagePrefix",B),A(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.expirations.set(i.target,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),A(this,"has",i=>{try{const s=this.formatTarget(i);return typeof this.getExpiration(s)<"u"}catch{return!1}}),A(this,"set",(i,s)=>{this.isInitialized();const n=this.formatTarget(i),o={target:n,expiry:s};this.expirations.set(n,o),this.checkExpiry(n,o),this.events.emit(index_es_M.created,{target:n,expiration:o})}),A(this,"get",i=>{this.isInitialized();const s=this.formatTarget(i);return this.getExpiration(s)}),A(this,"del",i=>{if(this.isInitialized(),this.has(i)){const s=this.formatTarget(i),n=this.getExpiration(s);this.expirations.delete(s),this.events.emit(index_es_M.deleted,{target:s,expiration:n})}}),A(this,"on",(i,s)=>{this.events.on(i,s)}),A(this,"once",(i,s)=>{this.events.once(i,s)}),A(this,"off",(i,s)=>{this.events.off(i,s)}),A(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name)}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return ui(e);if(typeof e=="number")return li(e);const{message:t}=Et("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(t)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(index_es_M.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:t}=Et("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(t),new Error(t)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const t=this.expirations.get(e);if(!t){const{message:i}=Et("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(i),new Error(i)}return t}checkExpiry(e,t){const{expiry:i}=t;(0,cjs.toMiliseconds)(i)-Date.now()<=0&&this.expire(e,t)}expire(e,t){this.expirations.delete(e),this.events.emit(index_es_M.expired,{target:e,expiration:t})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,t)=>this.checkExpiry(t,e))}registerEventListeners(){this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,()=>this.checkExpirations()),this.events.on(index_es_M.created,e=>{const t=index_es_M.created;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(index_es_M.expired,e=>{const t=index_es_M.expired;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()}),this.events.on(index_es_M.deleted,e=>{const t=index_es_M.deleted;this.logger.info(`Emitting ${t}`),this.logger.debug({type:"event",event:t,data:e}),this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=Et("NOT_INITIALIZED",this.name);throw new Error(e)}}}var index_es_Ko=Object.defineProperty,index_es_Bo=(r,e,t)=>e in r?index_es_Ko(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_w=(r,e,t)=>index_es_Bo(r,typeof e!="symbol"?e+"":e,t);class index_es_Fi extends M{constructor(e,t,i){super(e,t,i),this.core=e,this.logger=t,this.store=i,index_es_w(this,"name",index_es_Wt),index_es_w(this,"abortController"),index_es_w(this,"isDevEnv"),index_es_w(this,"verifyUrlV3",index_es_Yt),index_es_w(this,"storagePrefix",B),index_es_w(this,"version",index_es_Le),index_es_w(this,"publicKey"),index_es_w(this,"fetchPromise"),index_es_w(this,"init",async()=>{var s;this.isDevEnv||(this.publicKey=await this.store.getItem(this.storeKey),this.publicKey&&(0,cjs.toMiliseconds)((s=this.publicKey)==null?void 0:s.expiresAt)<Date.now()&&(this.logger.debug("verify v2 public key expired"),await this.removePublicKey()))}),index_es_w(this,"register",async s=>{if(!Wt()||this.isDevEnv)return;const n=window.location.origin,{id:o,decryptedId:a}=s,c=`${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;try{const h=(0,dist_cjs.getDocument)(),l=this.startAbortTimer(cjs.ONE_SECOND*5),d=await new Promise((g,_)=>{const u=()=>{window.removeEventListener("message",x),h.body.removeChild(b),_("attestation aborted")};this.abortController.signal.addEventListener("abort",u);const b=h.createElement("iframe");b.src=c,b.style.display="none",b.addEventListener("error",u,{signal:this.abortController.signal});const x=I=>{if(I.data&&typeof I.data=="string")try{const D=JSON.parse(I.data);if(D.type==="verify_attestation"){if((0,index_es/* decodeJWT */.Cq)(D.attestation).payload.id!==o)return;clearInterval(l),h.body.removeChild(b),this.abortController.signal.removeEventListener("abort",u),window.removeEventListener("message",x),g(D.attestation===null?"":D.attestation)}}catch(D){this.logger.warn(D)}};h.body.appendChild(b),window.addEventListener("message",x,{signal:this.abortController.signal})});return this.logger.debug("jwt attestation",d),d}catch(h){this.logger.warn(h)}return""}),index_es_w(this,"resolve",async s=>{if(this.isDevEnv)return"";const{attestationId:n,hash:o,encryptedId:a}=s;if(n===""){this.logger.debug("resolve: attestationId is empty, skipping");return}if(n){if((0,index_es/* decodeJWT */.Cq)(n).payload.id!==a)return;const h=await this.isValidJwtAttestation(n);if(h){if(!h.isVerified){this.logger.warn("resolve: jwt attestation: origin url not verified");return}return h}}if(!o)return;const c=this.getVerifyUrl(s?.verifyUrl);return this.fetchAttestation(o,c)}),index_es_w(this,"fetchAttestation",async(s,n)=>{this.logger.debug(`resolving attestation: ${s} from url: ${n}`);const o=this.startAbortTimer(cjs.ONE_SECOND*5),a=await fetch(`${n}/attestation/${s}?v2Supported=true`,{signal:this.abortController.signal});return clearTimeout(o),a.status===200?await a.json():void 0}),index_es_w(this,"getVerifyUrl",s=>{let n=s||index_es_ue;return index_es_Jt.includes(n)||(this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${index_es_ue}`),n=index_es_ue),n}),index_es_w(this,"fetchPublicKey",async()=>{try{this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);const s=this.startAbortTimer(cjs.FIVE_SECONDS),n=await fetch(`${this.verifyUrlV3}/public-key`,{signal:this.abortController.signal});return clearTimeout(s),await n.json()}catch(s){this.logger.warn(s)}}),index_es_w(this,"persistPublicKey",async s=>{this.logger.debug("persisting public key to local storage",s),await this.store.setItem(this.storeKey,s),this.publicKey=s}),index_es_w(this,"removePublicKey",async()=>{this.logger.debug("removing verify v2 public key from storage"),await this.store.removeItem(this.storeKey),this.publicKey=void 0}),index_es_w(this,"isValidJwtAttestation",async s=>{const n=await this.getPublicKey();try{if(n)return this.validateAttestation(s,n)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}const o=await this.fetchAndPersistPublicKey();try{if(o)return this.validateAttestation(s,o)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}}),index_es_w(this,"getPublicKey",async()=>this.publicKey?this.publicKey:await this.fetchAndPersistPublicKey()),index_es_w(this,"fetchAndPersistPublicKey",async()=>{if(this.fetchPromise)return await this.fetchPromise,this.publicKey;this.fetchPromise=new Promise(async n=>{const o=await this.fetchPublicKey();o&&(await this.persistPublicKey(o),n(o))});const s=await this.fetchPromise;return this.fetchPromise=void 0,s}),index_es_w(this,"validateAttestation",(s,n)=>{const o=ra(s,n.publicKey),a={hasExpired:(0,cjs.toMiliseconds)(o.exp)<Date.now(),payload:o};if(a.hasExpired)throw this.logger.warn("resolve: jwt attestation expired"),new Error("JWT attestation expired");return{origin:a.payload.origin,isScam:a.payload.isScam,isVerified:a.payload.isVerified}}),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name),this.abortController=new AbortController,this.isDevEnv=xi(),this.init()}get storeKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//verify:public:key"}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),(0,cjs.toMiliseconds)(e))}}var index_es_Vo=Object.defineProperty,index_es_qo=(r,e,t)=>e in r?index_es_Vo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_Mi=(r,e,t)=>index_es_qo(r,typeof e!="symbol"?e+"":e,t);class index_es_Ki extends O{constructor(e,t){super(e,t),this.projectId=e,this.logger=t,index_es_Mi(this,"context",index_es_Xt),index_es_Mi(this,"registerDeviceToken",async i=>{const{clientId:s,token:n,notificationType:o,enableEncrypted:a=!1}=i,c=`${Zt}/${this.projectId}/clients`;await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:s,type:o,token:n,always_raw:a})})}),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.context)}}var index_es_Go=Object.defineProperty,index_es_Bi=Object.getOwnPropertySymbols,index_es_Wo=Object.prototype.hasOwnProperty,index_es_Ho=Object.prototype.propertyIsEnumerable,Ze=(r,e,t)=>e in r?index_es_Go(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_be=(r,e)=>{for(var t in e||(e={}))index_es_Wo.call(e,t)&&Ze(r,t,e[t]);if(index_es_Bi)for(var t of index_es_Bi(e))index_es_Ho.call(e,t)&&Ze(r,t,e[t]);return r},index_es_E=(r,e,t)=>Ze(r,typeof e!="symbol"?e+"":e,t);class index_es_Vi extends R{constructor(e,t,i=!0){super(e,t,i),this.core=e,this.logger=t,index_es_E(this,"context",index_es_ei),index_es_E(this,"storagePrefix",B),index_es_E(this,"storageVersion",index_es_Qt),index_es_E(this,"events",new Map),index_es_E(this,"shouldPersist",!1),index_es_E(this,"init",async()=>{if(!xi())try{const s={eventId:wi(),timestamp:Date.now(),domain:this.getAppDomain(),props:{event:"INIT",type:"",properties:{client_id:await this.core.crypto.getClientId(),user_agent:yr(this.core.relayer.protocol,this.core.relayer.version,index_es_e)}}};await this.sendEvent([s])}catch(s){this.logger.warn(s)}}),index_es_E(this,"createEvent",s=>{const{event:n="ERROR",type:o="",properties:{topic:a,trace:c}}=s,h=wi(),l=this.core.projectId||"",d=Date.now(),g=index_es_be({eventId:h,timestamp:d,props:{event:n,type:o,properties:{topic:a,trace:c}},bundleId:l,domain:this.getAppDomain()},this.setMethods(h));return this.telemetryEnabled&&(this.events.set(h,g),this.shouldPersist=!0),g}),index_es_E(this,"getEvent",s=>{const{eventId:n,topic:o}=s;if(n)return this.events.get(n);const a=Array.from(this.events.values()).find(c=>c.props.properties.topic===o);if(a)return index_es_be(index_es_be({},a),this.setMethods(a.eventId))}),index_es_E(this,"deleteEvent",s=>{const{eventId:n}=s;this.events.delete(n),this.shouldPersist=!0}),index_es_E(this,"setEventListeners",()=>{this.core.heartbeat.on(heartbeat_dist_index_es/* HEARTBEAT_EVENTS */.li.pulse,async()=>{this.shouldPersist&&await this.persist(),this.events.forEach(s=>{(0,cjs.fromMiliseconds)(Date.now())-(0,cjs.fromMiliseconds)(s.timestamp)>index_es_ti&&(this.events.delete(s.eventId),this.shouldPersist=!0)})})}),index_es_E(this,"setMethods",s=>({addTrace:n=>this.addTrace(s,n),setError:n=>this.setError(s,n)})),index_es_E(this,"addTrace",(s,n)=>{const o=this.events.get(s);o&&(o.props.properties.trace.push(n),this.events.set(s,o),this.shouldPersist=!0)}),index_es_E(this,"setError",(s,n)=>{const o=this.events.get(s);o&&(o.props.type=n,o.timestamp=Date.now(),this.events.set(s,o),this.shouldPersist=!0)}),index_es_E(this,"persist",async()=>{await this.core.storage.setItem(this.storageKey,Array.from(this.events.values())),this.shouldPersist=!1}),index_es_E(this,"restore",async()=>{try{const s=await this.core.storage.getItem(this.storageKey)||[];if(!s.length)return;s.forEach(n=>{this.events.set(n.eventId,index_es_be(index_es_be({},n),this.setMethods(n.eventId)))})}catch(s){this.logger.warn(s)}}),index_es_E(this,"submit",async()=>{if(!this.telemetryEnabled||this.events.size===0)return;const s=[];for(const[n,o]of this.events)o.props.type&&s.push(o);if(s.length!==0)try{if((await this.sendEvent(s)).ok)for(const n of s)this.events.delete(n.eventId),this.shouldPersist=!0}catch(n){this.logger.warn(n)}}),index_es_E(this,"sendEvent",async s=>{const n=this.getAppDomain()?"":"&sp=desktop";return await fetch(`${index_es_ii}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${index_es_e}${n}`,{method:"POST",body:JSON.stringify(s)})}),index_es_E(this,"getAppDomain",()=>pr().url),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.context),this.telemetryEnabled=i,i?this.restore().then(async()=>{await this.submit(),this.setEventListeners()}):this.persist()}get storageKey(){return this.storagePrefix+this.storageVersion+this.core.customStoragePrefix+"//"+this.context}}var index_es_Yo=Object.defineProperty,index_es_qi=Object.getOwnPropertySymbols,index_es_Jo=Object.prototype.hasOwnProperty,index_es_Xo=Object.prototype.propertyIsEnumerable,index_es_Qe=(r,e,t)=>e in r?index_es_Yo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,index_es_Gi=(r,e)=>{for(var t in e||(e={}))index_es_Jo.call(e,t)&&index_es_Qe(r,t,e[t]);if(index_es_qi)for(var t of index_es_qi(e))index_es_Xo.call(e,t)&&index_es_Qe(r,t,e[t]);return r},index_es_v=(r,e,t)=>index_es_Qe(r,typeof e!="symbol"?e+"":e,t);class index_es_Te extends h{constructor(e){var t;super(e),index_es_v(this,"protocol",index_es_ze),index_es_v(this,"version",index_es_Le),index_es_v(this,"name",index_es_he),index_es_v(this,"relayUrl"),index_es_v(this,"projectId"),index_es_v(this,"customStoragePrefix"),index_es_v(this,"events",new external_events_.EventEmitter),index_es_v(this,"logger"),index_es_v(this,"heartbeat"),index_es_v(this,"relayer"),index_es_v(this,"crypto"),index_es_v(this,"storage"),index_es_v(this,"history"),index_es_v(this,"expirer"),index_es_v(this,"pairing"),index_es_v(this,"verify"),index_es_v(this,"echoClient"),index_es_v(this,"linkModeSupportedApps"),index_es_v(this,"eventClient"),index_es_v(this,"initialized",!1),index_es_v(this,"logChunkController"),index_es_v(this,"on",(a,c)=>this.events.on(a,c)),index_es_v(this,"once",(a,c)=>this.events.once(a,c)),index_es_v(this,"off",(a,c)=>this.events.off(a,c)),index_es_v(this,"removeListener",(a,c)=>this.events.removeListener(a,c)),index_es_v(this,"dispatchEnvelope",({topic:a,message:c,sessionExists:h})=>{if(!a||!c)return;const l={topic:a,message:c,publishedAt:Date.now(),transportType:index_es_Q.link_mode};this.relayer.onLinkMessageEvent(l,{sessionExists:h})});const i=this.getGlobalCore(e?.customStoragePrefix);if(i)try{return this.customStoragePrefix=i.customStoragePrefix,this.logger=i.logger,this.heartbeat=i.heartbeat,this.crypto=i.crypto,this.history=i.history,this.expirer=i.expirer,this.storage=i.storage,this.relayer=i.relayer,this.pairing=i.pairing,this.verify=i.verify,this.echoClient=i.echoClient,this.linkModeSupportedApps=i.linkModeSupportedApps,this.eventClient=i.eventClient,this.initialized=i.initialized,this.logChunkController=i.logChunkController,i}catch(a){console.warn("Failed to copy global core",a)}this.projectId=e?.projectId,this.relayUrl=e?.relayUrl||index_es_Ue,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const s=(0,logger_dist_index_es/* getDefaultLoggerOptions */.iP)({level:typeof e?.logger=="string"&&e.logger?e.logger:index_es_Et.logger,name:index_es_he}),{logger:n,chunkLoggerController:o}=(0,logger_dist_index_es/* generatePlatformLogger */.D5)({opts:s,maxSizeInBytes:e?.maxLogBlobSizeInBytes,loggerOverride:e?.logger});this.logChunkController=o,(t=this.logChunkController)!=null&&t.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var a,c;(a=this.logChunkController)!=null&&a.downloadLogsBlobInBrowser&&((c=this.logChunkController)==null||c.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(n,this.name),this.heartbeat=new heartbeat_dist_index_es/* HeartBeat */.VH,this.crypto=new index_es_wi(this,this.logger,e?.keychain),this.history=new index_es_ji(this,this.logger),this.expirer=new index_es_Ui(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new keyvaluestorage_dist_index_es/* default */.A(index_es_Gi(index_es_Gi({},index_es_It),e?.storageOptions)),this.relayer=new index_es_Oi({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new index_es_ki(this,this.logger),this.verify=new index_es_Fi(this,this.logger,this.storage),this.echoClient=new index_es_Ki(this.projectId||"",this.logger),this.linkModeSupportedApps=[],this.eventClient=new index_es_Vi(this,this.logger,e?.telemetryEnabled),this.setGlobalCore(this)}static async init(e){const t=new index_es_Te(e);await t.initialize();const i=await t.crypto.getClientId();return await t.storage.setItem(index_es_jt,i),t}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return(e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async addLinkModeSupportedApp(e){this.linkModeSupportedApps.includes(e)||(this.linkModeSupportedApps.push(e),await this.storage.setItem(index_es_Fe,this.linkModeSupportedApps))}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.linkModeSupportedApps=await this.storage.getItem(index_es_Fe)||[],this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}getGlobalCore(e=""){try{if(this.isGlobalCoreDisabled())return;const t=`_walletConnectCore_${e}`,i=`${t}_count`;return globalThis[i]=(globalThis[i]||0)+1,globalThis[i]>1&&console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`),globalThis[t]}catch(t){console.warn("Failed to get global WalletConnect core",t);return}}setGlobalCore(e){var t;try{if(this.isGlobalCoreDisabled())return;const i=`_walletConnectCore_${((t=e.opts)==null?void 0:t.customStoragePrefix)||""}`;globalThis[i]=e}catch(i){console.warn("Failed to set global WalletConnect core",i)}}isGlobalCoreDisabled(){try{return typeof index_es_process<"u"&&index_es_process.env.DISABLE_GLOBAL_CORE==="true"}catch{return!0}}}const index_es_Zo=index_es_Te;
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/sign-client/dist/index.es.js
const index_es_De="wc",dist_index_es_ke=2,dist_index_es_Le="client",index_es_me=`${index_es_De}@${dist_index_es_ke}:${dist_index_es_Le}:`,index_es_we={name:dist_index_es_Le,logger:"error",controller:!1,relayUrl:"wss://relay.walletconnect.org"},Ss={session_proposal:"session_proposal",session_update:"session_update",session_extend:"session_extend",session_ping:"session_ping",session_delete:"session_delete",session_expire:"session_expire",session_request:"session_request",session_request_sent:"session_request_sent",session_event:"session_event",proposal_expire:"proposal_expire",session_authenticate:"session_authenticate",session_request_expire:"session_request_expire",session_connect:"session_connect"},Rs={database:":memory:"},dist_index_es_Me="WALLETCONNECT_DEEPLINK_CHOICE",index_es_vs={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},Is="history",Ts="0.3",index_es_dt="proposal",index_es_qs=(/* unused pure expression or super */ null && (Ut)),index_es_$e="Proposal expired",index_es_ut="session",dist_index_es_J=cjs.SEVEN_DAYS,index_es_gt="engine",N={wc_sessionPropose:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1104},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1106},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:cjs.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1112},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:cjs.ONE_DAY,prompt:!1,tag:1114},res:{ttl:cjs.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:cjs.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:cjs.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:cjs.FIVE_MINUTES,prompt:!1,tag:1119}}},dist_index_es_e={min:cjs.FIVE_MINUTES,max:cjs.SEVEN_DAYS},dist_index_es_$={idle:"IDLE",active:"ACTIVE"},index_es_yt={eth_sendTransaction:{key:""},eth_sendRawTransaction:{key:""},wallet_sendCalls:{key:""},solana_signTransaction:{key:"signature"},solana_signAllTransactions:{key:"transactions"},solana_signAndSendTransaction:{key:"signature"},sui_signAndExecuteTransaction:{key:"digest"},sui_signTransaction:{key:""},hedera_signAndExecuteTransaction:{key:"transactionId"},hedera_executeTransaction:{key:"transactionId"},near_signTransaction:{key:""},near_signTransactions:{key:""},tron_signTransaction:{key:"txID"},xrpl_signTransaction:{key:""},xrpl_signTransactionFor:{key:""},algo_signTxn:{key:""},sendTransfer:{key:"txid"},stacks_stxTransfer:{key:"txId"},polkadot_signTransaction:{key:""},cosmos_signDirect:{key:""}},index_es_mt="request",index_es_wt=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],index_es_t="wc",index_es_Ps=1.5,dist_index_es_Et="auth",index_es_ft="authKeys",dist_index_es_St="pairingTopics",dist_index_es_Rt="requests",index_es_ae=`${index_es_t}@${1.5}:${dist_index_es_Et}:`,ce=`${index_es_ae}:PUB_KEY`;var Ns=Object.defineProperty,Os=Object.defineProperties,index_es_bs=Object.getOwnPropertyDescriptors,index_es_vt=Object.getOwnPropertySymbols,index_es_As=Object.prototype.hasOwnProperty,index_es_xs=Object.prototype.propertyIsEnumerable,dist_index_es_Ue=(S,o,t)=>o in S?Ns(S,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):S[o]=t,index_es_I=(S,o)=>{for(var t in o||(o={}))index_es_As.call(o,t)&&dist_index_es_Ue(S,t,o[t]);if(index_es_vt)for(var t of index_es_vt(o))index_es_xs.call(o,t)&&dist_index_es_Ue(S,t,o[t]);return S},dist_index_es_C=(S,o)=>Os(S,index_es_bs(o)),index_es_c=(S,o,t)=>dist_index_es_Ue(S,typeof o!="symbol"?o+"":o,t);class index_es_Cs extends V{constructor(o){super(o),index_es_c(this,"name",index_es_gt),index_es_c(this,"events",new (external_events_default())),index_es_c(this,"initialized",!1),index_es_c(this,"requestQueue",{state:dist_index_es_$.idle,queue:[]}),index_es_c(this,"sessionRequestQueue",{state:dist_index_es_$.idle,queue:[]}),index_es_c(this,"requestQueueDelay",cjs.ONE_SECOND),index_es_c(this,"expectedPairingMethodMap",new Map),index_es_c(this,"recentlyDeletedMap",new Map),index_es_c(this,"recentlyDeletedLimit",200),index_es_c(this,"relayMessageCache",[]),index_es_c(this,"pendingSessions",new Map),index_es_c(this,"init",async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(N)}),this.initialized=!0,setTimeout(async()=>{await this.processPendingMessageEvents(),this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay)))}),index_es_c(this,"connect",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const e=dist_index_es_C(index_es_I({},t),{requiredNamespaces:t.requiredNamespaces||{},optionalNamespaces:t.optionalNamespaces||{}});await this.isValidConnect(e),e.optionalNamespaces=wa(e.requiredNamespaces,e.optionalNamespaces),e.requiredNamespaces={};const{pairingTopic:s,requiredNamespaces:i,optionalNamespaces:r,sessionProperties:n,scopedProperties:a,relays:l}=e;let p=s,h,u=!1;try{if(p){const T=this.client.core.pairing.pairings.get(p);this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),u=T.active}}catch(T){throw this.client.logger.error(`connect() -> pairing.get(${p}) failed`),T}if(!p||!u){const{topic:T,uri:U}=await this.client.core.pairing.create();p=T,h=U}if(!p){const{message:T}=Et("NO_MATCHING_KEY",`connect() pairing topic: ${p}`);throw new Error(T)}const d=await this.client.core.crypto.generateKeyPair(),w=N.wc_sessionPropose.req.ttl||cjs.FIVE_MINUTES,m=hi(w),y=dist_index_es_C(index_es_I(index_es_I({requiredNamespaces:i,optionalNamespaces:r,relays:l??[{protocol:index_es_xt}],proposer:{publicKey:d,metadata:this.client.metadata},expiryTimestamp:m,pairingTopic:p},n&&{sessionProperties:n}),a&&{scopedProperties:a}),{id:(0,jsonrpc_utils_dist_esm.payloadId)()}),E=gi("session_connect",y.id),{reject:_,resolve:V,done:D}=fi(w,index_es_$e),v=({id:T})=>{T===y.id&&(this.client.events.off("proposal_expire",v),this.pendingSessions.delete(y.id),this.events.emit(E,{error:{message:index_es_$e,code:0}}))};return this.client.events.on("proposal_expire",v),this.events.once(E,({error:T,session:U})=>{this.client.events.off("proposal_expire",v),T?_(T):U&&V(U)}),await this.sendRequest({topic:p,method:"wc_sessionPropose",params:y,throwOnFailedPublish:!0,clientRpcId:y.id}),await this.setProposal(y.id,y),{uri:h,approval:D}}),index_es_c(this,"pair",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(t)}catch(e){throw this.client.logger.error("pair() failed"),e}}),index_es_c(this,"approve",async t=>{var e,s,i;const r=this.client.core.eventClient.createEvent({properties:{topic:(e=t?.id)==null?void 0:e.toString(),trace:[tr.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(q){throw r.setError(index_es_ir.no_internet_connection),q}try{await this.isValidProposalId(t?.id)}catch(q){throw this.client.logger.error(`approve() -> proposal.get(${t?.id}) failed`),r.setError(index_es_ir.proposal_not_found),q}try{await this.isValidApprove(t)}catch(q){throw this.client.logger.error("approve() -> isValidApprove() failed"),r.setError(index_es_ir.session_approve_namespace_validation_failure),q}const{id:n,relayProtocol:a,namespaces:l,sessionProperties:p,scopedProperties:h,sessionConfig:u}=t,d=this.client.proposal.get(n);this.client.core.eventClient.deleteEvent({eventId:r.eventId});const{pairingTopic:w,proposer:m,requiredNamespaces:y,optionalNamespaces:E}=d;let _=(s=this.client.core.eventClient)==null?void 0:s.getEvent({topic:w});_||(_=(i=this.client.core.eventClient)==null?void 0:i.createEvent({type:tr.session_approve_started,properties:{topic:w,trace:[tr.session_approve_started,tr.session_namespaces_validation_success]}}));const V=await this.client.core.crypto.generateKeyPair(),D=m.publicKey,v=await this.client.core.crypto.generateSharedKey(V,D),T=index_es_I(index_es_I(index_es_I({relay:{protocol:a??"irn"},namespaces:l,controller:{publicKey:V,metadata:this.client.metadata},expiry:hi(dist_index_es_J)},p&&{sessionProperties:p}),h&&{scopedProperties:h}),u&&{sessionConfig:u}),U=index_es_Q.relay;_.addTrace(tr.subscribing_session_topic);try{await this.client.core.relayer.subscribe(v,{transportType:U})}catch(q){throw _.setError(index_es_ir.subscribe_session_topic_failure),q}_.addTrace(tr.subscribe_session_topic_success);const fe=dist_index_es_C(index_es_I({},T),{topic:v,requiredNamespaces:y,optionalNamespaces:E,pairingTopic:w,acknowledged:!1,self:T.controller,peer:{publicKey:m.publicKey,metadata:m.metadata},controller:V,transportType:index_es_Q.relay});await this.client.session.set(v,fe),_.addTrace(tr.store_session);try{_.addTrace(tr.publishing_session_settle),await this.sendRequest({topic:v,method:"wc_sessionSettle",params:T,throwOnFailedPublish:!0}).catch(q=>{throw _?.setError(index_es_ir.session_settle_publish_failure),q}),_.addTrace(tr.session_settle_publish_success),_.addTrace(tr.publishing_session_approve),await this.sendResult({id:n,topic:w,result:{relay:{protocol:a??"irn"},responderPublicKey:V},throwOnFailedPublish:!0}).catch(q=>{throw _?.setError(index_es_ir.session_approve_publish_failure),q}),_.addTrace(tr.session_approve_publish_success)}catch(q){throw this.client.logger.error(q),this.client.session.delete(v,zt("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe(v),q}return this.client.core.eventClient.deleteEvent({eventId:_.eventId}),await this.client.core.pairing.updateMetadata({topic:w,metadata:m.metadata}),await this.client.proposal.delete(n,zt("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:w}),await this.setExpiry(v,hi(dist_index_es_J)),{topic:v,acknowledged:()=>Promise.resolve(this.client.session.get(v))}}),index_es_c(this,"reject",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(t)}catch(r){throw this.client.logger.error("reject() -> isValidReject() failed"),r}const{id:e,reason:s}=t;let i;try{i=this.client.proposal.get(e).pairingTopic}catch(r){throw this.client.logger.error(`reject() -> proposal.get(${e}) failed`),r}i&&(await this.sendError({id:e,topic:i,error:s,rpcOpts:N.wc_sessionPropose.reject}),await this.client.proposal.delete(e,zt("USER_DISCONNECTED")))}),index_es_c(this,"update",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(t)}catch(h){throw this.client.logger.error("update() -> isValidUpdate() failed"),h}const{topic:e,namespaces:s}=t,{done:i,resolve:r,reject:n}=fi(),a=(0,jsonrpc_utils_dist_esm.payloadId)(),l=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),p=this.client.session.get(e).namespaces;return this.events.once(gi("session_update",a),({error:h})=>{h?n(h):r()}),await this.client.session.update(e,{namespaces:s}),await this.sendRequest({topic:e,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:a,relayRpcId:l}).catch(h=>{this.client.logger.error(h),this.client.session.update(e,{namespaces:p}),n(h)}),{acknowledged:i}}),index_es_c(this,"extend",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(t)}catch(a){throw this.client.logger.error("extend() -> isValidExtend() failed"),a}const{topic:e}=t,s=(0,jsonrpc_utils_dist_esm.payloadId)(),{done:i,resolve:r,reject:n}=fi();return this.events.once(gi("session_extend",s),({error:a})=>{a?n(a):r()}),await this.setExpiry(e,hi(dist_index_es_J)),this.sendRequest({topic:e,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(a=>{n(a)}),{acknowledged:i}}),index_es_c(this,"request",async t=>{this.isInitialized();try{await this.isValidRequest(t)}catch(y){throw this.client.logger.error("request() -> isValidRequest() failed"),y}const{chainId:e,request:s,topic:i,expiry:r=N.wc_sessionRequest.req.ttl}=t,n=this.client.session.get(i);n?.transportType===index_es_Q.relay&&await this.confirmOnlineStateOrThrow();const a=(0,jsonrpc_utils_dist_esm.payloadId)(),l=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),{done:p,resolve:h,reject:u}=fi(r,"Request expired. Please try again.");this.events.once(gi("session_request",a),({error:y,result:E})=>{y?u(y):h(E)});const d="wc_sessionRequest",w=this.getAppLinkIfEnabled(n.peer.metadata,n.transportType);if(w)return await this.sendRequest({clientRpcId:a,relayRpcId:l,topic:i,method:d,params:{request:dist_index_es_C(index_es_I({},s),{expiryTimestamp:hi(r)}),chainId:e},expiry:r,throwOnFailedPublish:!0,appLink:w}).catch(y=>u(y)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:e,id:a}),await p();const m={request:dist_index_es_C(index_es_I({},s),{expiryTimestamp:hi(r)}),chainId:e};return await Promise.all([new Promise(async y=>{await this.sendRequest({clientRpcId:a,relayRpcId:l,topic:i,method:d,params:m,expiry:r,throwOnFailedPublish:!0,tvf:this.getTVFParams(a,m)}).catch(E=>u(E)),this.client.events.emit("session_request_sent",{topic:i,request:s,chainId:e,id:a}),y()}),new Promise(async y=>{var E;if(!((E=n.sessionConfig)!=null&&E.disableDeepLink)){const _=await yi(this.client.core.storage,dist_index_es_Me);await bi({id:a,topic:i,wcDeepLink:_})}y()}),p()]).then(y=>y[2])}),index_es_c(this,"respond",async t=>{this.isInitialized(),await this.isValidRespond(t);const{topic:e,response:s}=t,{id:i}=s,r=this.client.session.get(e);r.transportType===index_es_Q.relay&&await this.confirmOnlineStateOrThrow();const n=this.getAppLinkIfEnabled(r.peer.metadata,r.transportType);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(s)?await this.sendResult({id:i,topic:e,result:s.result,throwOnFailedPublish:!0,appLink:n}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(s)&&await this.sendError({id:i,topic:e,error:s.error,appLink:n}),this.cleanupAfterResponse(t)}),index_es_c(this,"ping",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(t)}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:e}=t;if(this.client.session.keys.includes(e)){const s=(0,jsonrpc_utils_dist_esm.payloadId)(),i=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),{done:r,resolve:n,reject:a}=fi();this.events.once(gi("session_ping",s),({error:l})=>{l?a(l):n()}),await Promise.all([this.sendRequest({topic:e,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:i}),r()])}else this.client.core.pairing.pairings.keys.includes(e)&&(this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),await this.client.core.pairing.ping({topic:e}))}),index_es_c(this,"emit",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(t);const{topic:e,event:s,chainId:i}=t,r=(0,jsonrpc_utils_dist_esm.getBigIntRpcId)().toString(),n=(0,jsonrpc_utils_dist_esm.payloadId)();await this.sendRequest({topic:e,method:"wc_sessionEvent",params:{event:s,chainId:i},throwOnFailedPublish:!0,relayRpcId:r,clientRpcId:n})}),index_es_c(this,"disconnect",async t=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(t);const{topic:e}=t;if(this.client.session.keys.includes(e))await this.sendRequest({topic:e,method:"wc_sessionDelete",params:zt("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:e,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(e))await this.client.core.pairing.disconnect({topic:e});else{const{message:s}=Et("MISMATCHED_TOPIC",`Session or pairing topic not found: ${e}`);throw new Error(s)}}),index_es_c(this,"find",t=>(this.isInitialized(),this.client.session.getAll().filter(e=>xa(e,t)))),index_es_c(this,"getPendingSessionRequests",()=>this.client.pendingRequest.getAll()),index_es_c(this,"authenticate",async(t,e)=>{var s;this.isInitialized(),this.isValidAuthenticate(t);const i=e&&this.client.core.linkModeSupportedApps.includes(e)&&((s=this.client.metadata.redirect)==null?void 0:s.linkMode),r=i?index_es_Q.link_mode:index_es_Q.relay;r===index_es_Q.relay&&await this.confirmOnlineStateOrThrow();const{chains:n,statement:a="",uri:l,domain:p,nonce:h,type:u,exp:d,nbf:w,methods:m=[],expiry:y}=t,E=[...t.resources||[]],{topic:_,uri:V}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:r});this.client.logger.info({message:"Generated new pairing",pairing:{topic:_,uri:V}});const D=await this.client.core.crypto.generateKeyPair(),v=Zf(D);if(await Promise.all([this.client.auth.authKeys.set(ce,{responseTopic:v,publicKey:D}),this.client.auth.pairingTopics.set(v,{topic:v,pairingTopic:_})]),await this.client.core.relayer.subscribe(v,{transportType:r}),this.client.logger.info(`sending request to new pairing topic: ${_}`),m.length>0){const{namespace:b}=We(n[0]);let k=Nc(b,"request",m);$e(E)&&(k=Uc(k,E.pop())),E.push(k)}const T=y&&y>N.wc_sessionAuthenticate.req.ttl?y:N.wc_sessionAuthenticate.req.ttl,U={authPayload:{type:u??"caip122",chains:n,statement:a,aud:l,domain:p,version:"1",nonce:h,iat:new Date().toISOString(),exp:d,nbf:w,resources:E},requester:{publicKey:D,metadata:this.client.metadata},expiryTimestamp:hi(T)},fe={eip155:{chains:n,methods:[...new Set(["personal_sign",...m])],events:["chainChanged","accountsChanged"]}},q={requiredNamespaces:{},optionalNamespaces:fe,relays:[{protocol:"irn"}],pairingTopic:_,proposer:{publicKey:D,metadata:this.client.metadata},expiryTimestamp:hi(N.wc_sessionPropose.req.ttl),id:(0,jsonrpc_utils_dist_esm.payloadId)()},{done:Tt,resolve:Ge,reject:Se}=fi(T,"Request expired"),te=(0,jsonrpc_utils_dist_esm.payloadId)(),le=gi("session_connect",q.id),Re=gi("session_request",te),pe=async({error:b,session:k})=>{this.events.off(Re,ve),b?Se(b):k&&Ge({session:k})},ve=async b=>{var k,je,Fe;if(await this.deletePendingAuthRequest(te,{message:"fulfilled",code:0}),b.error){const ie=zt("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return b.error.code===ie.code?void 0:(this.events.off(le,pe),Se(b.error.message))}await this.deleteProposal(q.id),this.events.off(le,pe);const{cacaos:Qe,responder:Q}=b.result,Te=[],He=[];for(const ie of Qe){await Ac({cacao:ie,projectId:this.client.core.projectId})||(this.client.logger.error(ie,"Signature verification failed"),Se(zt("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:qe}=ie,Pe=$e(qe.resources),ze=[Wr(qe.iss)],qt=hn(qe.iss);if(Pe){const Ne=_c(Pe),Pt=Tc(Pe);Te.push(...Ne),ze.push(...Pt)}for(const Ne of ze)He.push(`${Ne}:${qt}`)}const se=await this.client.core.crypto.generateSharedKey(D,Q.publicKey);let he;Te.length>0&&(he={topic:se,acknowledged:!0,self:{publicKey:D,metadata:this.client.metadata},peer:Q,controller:Q.publicKey,expiry:hi(dist_index_es_J),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:_,namespaces:ma([...new Set(Te)],[...new Set(He)]),transportType:r},await this.client.core.relayer.subscribe(se,{transportType:r}),await this.client.session.set(se,he),_&&await this.client.core.pairing.updateMetadata({topic:_,metadata:Q.metadata}),he=this.client.session.get(se)),(k=this.client.metadata.redirect)!=null&&k.linkMode&&(je=Q.metadata.redirect)!=null&&je.linkMode&&(Fe=Q.metadata.redirect)!=null&&Fe.universal&&e&&(this.client.core.addLinkModeSupportedApp(Q.metadata.redirect.universal),this.client.session.update(se,{transportType:index_es_Q.link_mode})),Ge({auths:Qe,session:he})};this.events.once(le,pe),this.events.once(Re,ve);let Ie;try{if(i){const b=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionAuthenticate",U,te);this.client.core.history.set(_,b);const k=await this.client.core.crypto.encode("",b,{type:xe,encoding:qe});Ie=fa(e,_,k)}else await Promise.all([this.sendRequest({topic:_,method:"wc_sessionAuthenticate",params:U,expiry:t.expiry,throwOnFailedPublish:!0,clientRpcId:te}),this.sendRequest({topic:_,method:"wc_sessionPropose",params:q,expiry:N.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:q.id})])}catch(b){throw this.events.off(le,pe),this.events.off(Re,ve),b}return await this.setProposal(q.id,q),await this.setAuthRequest(te,{request:dist_index_es_C(index_es_I({},U),{verifyContext:{}}),pairingTopic:_,transportType:r}),{uri:Ie??V,response:Tt}}),index_es_c(this,"approveSessionAuthenticate",async t=>{const{id:e,auths:s}=t,i=this.client.core.eventClient.createEvent({properties:{topic:e.toString(),trace:[index_es_sr.authenticated_session_approve_started]}});try{this.isInitialized()}catch(y){throw i.setError(index_es_rr.no_internet_connection),y}const r=this.getPendingAuthRequest(e);if(!r)throw i.setError(index_es_rr.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${e}`);const n=r.transportType||index_es_Q.relay;n===index_es_Q.relay&&await this.confirmOnlineStateOrThrow();const a=r.requester.publicKey,l=await this.client.core.crypto.generateKeyPair(),p=Zf(a),h={type:ne,receiverPublicKey:a,senderPublicKey:l},u=[],d=[];for(const y of s){if(!await Ac({cacao:y,projectId:this.client.core.projectId})){i.setError(index_es_rr.invalid_cacao);const v=zt("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:e,topic:p,error:v,encodeOpts:h}),new Error(v.message)}i.addTrace(index_es_sr.cacaos_verified);const{p:E}=y,_=$e(E.resources),V=[Wr(E.iss)],D=hn(E.iss);if(_){const v=_c(_),T=Tc(_);u.push(...v),V.push(...T)}for(const v of V)d.push(`${v}:${D}`)}const w=await this.client.core.crypto.generateSharedKey(l,a);i.addTrace(index_es_sr.create_authenticated_session_topic);let m;if(u?.length>0){m={topic:w,acknowledged:!0,self:{publicKey:l,metadata:this.client.metadata},peer:{publicKey:a,metadata:r.requester.metadata},controller:a,expiry:hi(dist_index_es_J),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:r.pairingTopic,namespaces:ma([...new Set(u)],[...new Set(d)]),transportType:n},i.addTrace(index_es_sr.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(w,{transportType:n})}catch(y){throw i.setError(index_es_rr.subscribe_authenticated_session_topic_failure),y}i.addTrace(index_es_sr.subscribe_authenticated_session_topic_success),await this.client.session.set(w,m),i.addTrace(index_es_sr.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:r.pairingTopic,metadata:r.requester.metadata})}i.addTrace(index_es_sr.publishing_authenticated_session_approve);try{await this.sendResult({topic:p,id:e,result:{cacaos:s,responder:{publicKey:l,metadata:this.client.metadata}},encodeOpts:h,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(r.requester.metadata,n)})}catch(y){throw i.setError(index_es_rr.authenticated_session_approve_publish_failure),y}return await this.client.auth.requests.delete(e,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:r.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:i.eventId}),{session:m}}),index_es_c(this,"rejectSessionAuthenticate",async t=>{this.isInitialized();const{id:e,reason:s}=t,i=this.getPendingAuthRequest(e);if(!i)throw new Error(`Could not find pending auth request with id ${e}`);i.transportType===index_es_Q.relay&&await this.confirmOnlineStateOrThrow();const r=i.requester.publicKey,n=await this.client.core.crypto.generateKeyPair(),a=Zf(r),l={type:ne,receiverPublicKey:r,senderPublicKey:n};await this.sendError({id:e,topic:a,error:s,encodeOpts:l,rpcOpts:N.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(i.requester.metadata,i.transportType)}),await this.client.auth.requests.delete(e,{message:"rejected",code:0}),await this.client.proposal.delete(e,zt("USER_DISCONNECTED"))}),index_es_c(this,"formatAuthMessage",t=>{this.isInitialized();const{request:e,iss:s}=t;return Yr(e,s)}),index_es_c(this,"processRelayMessageCache",()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const t=this.relayMessageCache.shift();t&&await this.onRelayMessage(t)}catch(t){this.client.logger.error(t)}},50)}),index_es_c(this,"cleanupDuplicatePairings",async t=>{if(t.pairingTopic)try{const e=this.client.core.pairing.pairings.get(t.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(i=>{var r,n;return((r=i.peerMetadata)==null?void 0:r.url)&&((n=i.peerMetadata)==null?void 0:n.url)===t.peer.metadata.url&&i.topic&&i.topic!==e.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(i=>this.client.core.pairing.disconnect({topic:i.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(e){this.client.logger.error(e)}}),index_es_c(this,"deleteSession",async t=>{var e;const{topic:s,expirerHasDeleted:i=!1,emitEvent:r=!0,id:n=0}=t,{self:a}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,zt("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(a.publicKey)&&await this.client.core.crypto.deleteKeyPair(a.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),i||this.client.core.expirer.del(s),this.client.core.storage.removeItem(dist_index_es_Me).catch(l=>this.client.logger.warn(l)),this.getPendingSessionRequests().forEach(l=>{l.topic===s&&this.deletePendingSessionRequest(l.id,zt("USER_DISCONNECTED"))}),s===((e=this.sessionRequestQueue.queue[0])==null?void 0:e.topic)&&(this.sessionRequestQueue.state=dist_index_es_$.idle),r&&this.client.events.emit("session_delete",{id:n,topic:s})}),index_es_c(this,"deleteProposal",async(t,e)=>{if(e)try{const s=this.client.proposal.get(t),i=this.client.core.eventClient.getEvent({topic:s.pairingTopic});i?.setError(index_es_ir.proposal_expired)}catch{}await Promise.all([this.client.proposal.delete(t,zt("USER_DISCONNECTED")),e?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"proposal")}),index_es_c(this,"deletePendingSessionRequest",async(t,e,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)]),this.addToRecentlyDeleted(t,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(i=>i.id!==t),s&&(this.sessionRequestQueue.state=dist_index_es_$.idle,this.client.events.emit("session_request_expire",{id:t}))}),index_es_c(this,"deletePendingAuthRequest",async(t,e,s=!1)=>{await Promise.all([this.client.auth.requests.delete(t,e),s?Promise.resolve():this.client.core.expirer.del(t)])}),index_es_c(this,"setExpiry",async(t,e)=>{this.client.session.keys.includes(t)&&(this.client.core.expirer.set(t,e),await this.client.session.update(t,{expiry:e}))}),index_es_c(this,"setProposal",async(t,e)=>{this.client.core.expirer.set(t,hi(N.wc_sessionPropose.req.ttl)),await this.client.proposal.set(t,e)}),index_es_c(this,"setAuthRequest",async(t,e)=>{const{request:s,pairingTopic:i,transportType:r=index_es_Q.relay}=e;this.client.core.expirer.set(t,s.expiryTimestamp),await this.client.auth.requests.set(t,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:t,pairingTopic:i,verifyContext:s.verifyContext,transportType:r})}),index_es_c(this,"setPendingSessionRequest",async t=>{const{id:e,topic:s,params:i,verifyContext:r}=t,n=i.request.expiryTimestamp||hi(N.wc_sessionRequest.req.ttl);this.client.core.expirer.set(e,n),await this.client.pendingRequest.set(e,{id:e,topic:s,params:i,verifyContext:r})}),index_es_c(this,"sendRequest",async t=>{const{topic:e,method:s,params:i,expiry:r,relayRpcId:n,clientRpcId:a,throwOnFailedPublish:l,appLink:p,tvf:h}=t,u=(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)(s,i,a);let d;const w=!!p;try{const E=w?qe:te;d=await this.client.core.crypto.encode(e,u,{encoding:E})}catch(E){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e} failed`),E}let m;if(index_es_wt.includes(s)){const E=Wf(JSON.stringify(u)),_=Wf(d);m=await this.client.core.verify.register({id:_,decryptedId:E})}const y=N[s].req;if(y.attestation=m,r&&(y.ttl=r),n&&(y.id=n),this.client.core.history.set(e,u),w){const E=fa(p,e,d);await global.Linking.openURL(E,this.client.name)}else{const E=N[s].req;r&&(E.ttl=r),n&&(E.id=n),E.tvf=dist_index_es_C(index_es_I({},h),{correlationId:u.id}),l?(E.internal=dist_index_es_C(index_es_I({},E.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(e,d,E)):this.client.core.relayer.publish(e,d,E).catch(_=>this.client.logger.error(_))}return u.id}),index_es_c(this,"sendResult",async t=>{const{id:e,topic:s,result:i,throwOnFailedPublish:r,encodeOpts:n,appLink:a}=t,l=(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(e,i);let p;const h=a&&typeof(global==null?void 0:global.Linking)<"u";try{const w=h?qe:te;p=await this.client.core.crypto.encode(s,l,dist_index_es_C(index_es_I({},n||{}),{encoding:w}))}catch(w){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),w}let u,d;try{u=await this.client.core.history.get(s,e);const w=u.request;try{d=this.getTVFParams(e,w.params,i)}catch(m){this.client.logger.warn("sendResult() -> getTVFParams() failed",m)}}catch(w){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${e}) failed`),w}if(h){const w=fa(a,s,p);await global.Linking.openURL(w,this.client.name)}else{const w=u.request.method,m=N[w].res;m.tvf=dist_index_es_C(index_es_I({},d),{correlationId:e}),r?(m.internal=dist_index_es_C(index_es_I({},m.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,p,m)):this.client.core.relayer.publish(s,p,m).catch(y=>this.client.logger.error(y))}await this.client.core.history.resolve(l)}),index_es_c(this,"sendError",async t=>{const{id:e,topic:s,error:i,encodeOpts:r,rpcOpts:n,appLink:a}=t,l=(0,jsonrpc_utils_dist_esm.formatJsonRpcError)(e,i);let p;const h=a&&typeof(global==null?void 0:global.Linking)<"u";try{const d=h?qe:te;p=await this.client.core.crypto.encode(s,l,dist_index_es_C(index_es_I({},r||{}),{encoding:d}))}catch(d){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),d}let u;try{u=await this.client.core.history.get(s,e)}catch(d){throw this.client.logger.error(`sendError() -> history.get(${s}, ${e}) failed`),d}if(h){const d=fa(a,s,p);await global.Linking.openURL(d,this.client.name)}else{const d=u.request.method,w=n||N[d].res;this.client.core.relayer.publish(s,p,w)}await this.client.core.history.resolve(l)}),index_es_c(this,"cleanup",async()=>{const t=[],e=[];this.client.session.getAll().forEach(s=>{let i=!1;pi(s.expiry)&&(i=!0),this.client.core.crypto.keychain.has(s.topic)||(i=!0),i&&t.push(s.topic)}),this.client.proposal.getAll().forEach(s=>{pi(s.expiryTimestamp)&&e.push(s.id)}),await Promise.all([...t.map(s=>this.deleteSession({topic:s})),...e.map(s=>this.deleteProposal(s))])}),index_es_c(this,"onProviderMessageEvent",async t=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(t):await this.onRelayMessage(t)}),index_es_c(this,"onRelayEventRequest",async t=>{this.requestQueue.queue.push(t),await this.processRequestsQueue()}),index_es_c(this,"processRequestsQueue",async()=>{if(this.requestQueue.state===dist_index_es_$.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=dist_index_es_$.active;const t=this.requestQueue.queue.shift();if(t)try{await this.processRequest(t)}catch(e){this.client.logger.warn(e)}}this.requestQueue.state=dist_index_es_$.idle}),index_es_c(this,"processRequest",async t=>{const{topic:e,payload:s,attestation:i,transportType:r,encryptedId:n}=t,a=s.method;if(!this.shouldIgnorePairingRequest({topic:e,requestMethod:a}))switch(a){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:e,payload:s,attestation:i,encryptedId:n});case"wc_sessionSettle":return await this.onSessionSettleRequest(e,s);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(e,s);case"wc_sessionExtend":return await this.onSessionExtendRequest(e,s);case"wc_sessionPing":return await this.onSessionPingRequest(e,s);case"wc_sessionDelete":return await this.onSessionDeleteRequest(e,s);case"wc_sessionRequest":return await this.onSessionRequest({topic:e,payload:s,attestation:i,encryptedId:n,transportType:r});case"wc_sessionEvent":return await this.onSessionEventRequest(e,s);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:e,payload:s,attestation:i,encryptedId:n,transportType:r});default:return this.client.logger.info(`Unsupported request method ${a}`)}}),index_es_c(this,"onRelayEventResponse",async t=>{const{topic:e,payload:s,transportType:i}=t,r=(await this.client.core.history.get(e,s.id)).request.method;switch(r){case"wc_sessionPropose":return this.onSessionProposeResponse(e,s,i);case"wc_sessionSettle":return this.onSessionSettleResponse(e,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(e,s);case"wc_sessionExtend":return this.onSessionExtendResponse(e,s);case"wc_sessionPing":return this.onSessionPingResponse(e,s);case"wc_sessionRequest":return this.onSessionRequestResponse(e,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(e,s);default:return this.client.logger.info(`Unsupported response method ${r}`)}}),index_es_c(this,"onRelayEventUnknownPayload",t=>{const{topic:e}=t,{message:s}=Et("MISSING_OR_INVALID",`Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)}),index_es_c(this,"shouldIgnorePairingRequest",t=>{const{topic:e,requestMethod:s}=t,i=this.expectedPairingMethodMap.get(e);return!i||i.includes(s)?!1:!!(i.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)}),index_es_c(this,"onSessionProposeRequest",async t=>{const{topic:e,payload:s,attestation:i,encryptedId:r}=t,{params:n,id:a}=s;try{const l=this.client.core.eventClient.getEvent({topic:e});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),l?.setError(index_es_Y.proposal_listener_not_found)),this.isValidConnect(index_es_I({},s.params));const p=n.expiryTimestamp||hi(N.wc_sessionPropose.req.ttl),h=index_es_I({id:a,pairingTopic:e,expiryTimestamp:p},n);await this.setProposal(a,h);const u=await this.getVerifyContext({attestationId:i,hash:Wf(JSON.stringify(s)),encryptedId:r,metadata:h.proposer.metadata});l?.addTrace(G.emit_session_proposal),this.client.events.emit("session_proposal",{id:a,params:h,verifyContext:u})}catch(l){await this.sendError({id:a,topic:e,error:l,rpcOpts:N.wc_sessionPropose.autoReject}),this.client.logger.error(l)}}),index_es_c(this,"onSessionProposeResponse",async(t,e,s)=>{const{id:i}=e;if((0,jsonrpc_utils_dist_esm.isJsonRpcResult)(e)){const{result:r}=e;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:r});const n=this.client.proposal.get(i);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:n});const a=n.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:a});const l=r.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:l});const p=await this.client.core.crypto.generateSharedKey(a,l);this.pendingSessions.set(i,{sessionTopic:p,pairingTopic:t,proposalId:i,publicKey:a});const h=await this.client.core.relayer.subscribe(p,{transportType:s});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:h}),await this.client.core.pairing.activate({topic:t})}else if((0,jsonrpc_utils_dist_esm.isJsonRpcError)(e)){await this.client.proposal.delete(i,zt("USER_DISCONNECTED"));const r=gi("session_connect",i);if(this.events.listenerCount(r)===0)throw new Error(`emitting ${r} without any listeners, 954`);this.events.emit(r,{error:e.error})}}),index_es_c(this,"onSessionSettleRequest",async(t,e)=>{const{id:s,params:i}=e;try{this.isValidSessionSettleRequest(i);const{relay:r,controller:n,expiry:a,namespaces:l,sessionProperties:p,scopedProperties:h,sessionConfig:u}=e.params,d=[...this.pendingSessions.values()].find(y=>y.sessionTopic===t);if(!d)return this.client.logger.error(`Pending session not found for topic ${t}`);const w=this.client.proposal.get(d.proposalId),m=dist_index_es_C(index_es_I(index_es_I(index_es_I({topic:t,relay:r,expiry:a,namespaces:l,acknowledged:!0,pairingTopic:d.pairingTopic,requiredNamespaces:w.requiredNamespaces,optionalNamespaces:w.optionalNamespaces,controller:n.publicKey,self:{publicKey:d.publicKey,metadata:this.client.metadata},peer:{publicKey:n.publicKey,metadata:n.metadata}},p&&{sessionProperties:p}),h&&{scopedProperties:h}),u&&{sessionConfig:u}),{transportType:index_es_Q.relay});await this.client.session.set(m.topic,m),await this.setExpiry(m.topic,m.expiry),await this.client.core.pairing.updateMetadata({topic:d.pairingTopic,metadata:m.peer.metadata}),this.client.events.emit("session_connect",{session:m}),this.events.emit(gi("session_connect",d.proposalId),{session:m}),this.pendingSessions.delete(d.proposalId),this.deleteProposal(d.proposalId,!1),this.cleanupDuplicatePairings(m),await this.sendResult({id:e.id,topic:t,result:!0,throwOnFailedPublish:!0})}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r)}}),index_es_c(this,"onSessionSettleResponse",async(t,e)=>{const{id:s}=e;(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(e)?(await this.client.session.update(t,{acknowledged:!0}),this.events.emit(gi("session_approve",s),{})):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(e)&&(await this.client.session.delete(t,zt("USER_DISCONNECTED")),this.events.emit(gi("session_approve",s),{error:e.error}))}),index_es_c(this,"onSessionUpdateRequest",async(t,e)=>{const{params:s,id:i}=e;try{const r=`${t}_session_update`,n=Va.get(r);if(n&&this.isRequestOutOfSync(n,i)){this.client.logger.warn(`Discarding out of sync request - ${i}`),this.sendError({id:i,topic:t,error:zt("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(index_es_I({topic:t},s));try{Va.set(r,i),await this.client.session.update(t,{namespaces:s.namespaces}),await this.sendResult({id:i,topic:t,result:!0,throwOnFailedPublish:!0})}catch(a){throw Va.delete(r),a}this.client.events.emit("session_update",{id:i,topic:t,params:s})}catch(r){await this.sendError({id:i,topic:t,error:r}),this.client.logger.error(r)}}),index_es_c(this,"isRequestOutOfSync",(t,e)=>e.toString().slice(0,-3)<t.toString().slice(0,-3)),index_es_c(this,"onSessionUpdateResponse",(t,e)=>{const{id:s}=e,i=gi("session_update",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(e)?this.events.emit(gi("session_update",s),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(e)&&this.events.emit(gi("session_update",s),{error:e.error})}),index_es_c(this,"onSessionExtendRequest",async(t,e)=>{const{id:s}=e;try{this.isValidExtend({topic:t}),await this.setExpiry(t,hi(dist_index_es_J)),await this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:s,topic:t})}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i)}}),index_es_c(this,"onSessionExtendResponse",(t,e)=>{const{id:s}=e,i=gi("session_extend",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(e)?this.events.emit(gi("session_extend",s),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(e)&&this.events.emit(gi("session_extend",s),{error:e.error})}),index_es_c(this,"onSessionPingRequest",async(t,e)=>{const{id:s}=e;try{this.isValidPing({topic:t}),await this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:t})}catch(i){await this.sendError({id:s,topic:t,error:i}),this.client.logger.error(i)}}),index_es_c(this,"onSessionPingResponse",(t,e)=>{const{id:s}=e,i=gi("session_ping",s);setTimeout(()=>{if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners 2176`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(e)?this.events.emit(gi("session_ping",s),{}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(e)&&this.events.emit(gi("session_ping",s),{error:e.error})},500)}),index_es_c(this,"onSessionDeleteRequest",async(t,e)=>{const{id:s}=e;try{this.isValidDisconnect({topic:t,reason:e.params}),Promise.all([new Promise(i=>{this.client.core.relayer.once(index_es_C.publish,async()=>{i(await this.deleteSession({topic:t,id:s}))})}),this.sendResult({id:s,topic:t,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:t,error:zt("USER_DISCONNECTED")})]).catch(i=>this.client.logger.error(i))}catch(i){this.client.logger.error(i)}}),index_es_c(this,"onSessionRequest",async t=>{var e,s,i;const{topic:r,payload:n,attestation:a,encryptedId:l,transportType:p}=t,{id:h,params:u}=n;try{await this.isValidRequest(index_es_I({topic:r},u));const d=this.client.session.get(r),w=await this.getVerifyContext({attestationId:a,hash:Wf(JSON.stringify((0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionRequest",u,h))),encryptedId:l,metadata:d.peer.metadata,transportType:p}),m={id:h,topic:r,params:u,verifyContext:w};await this.setPendingSessionRequest(m),p===index_es_Q.link_mode&&(e=d.peer.metadata.redirect)!=null&&e.universal&&this.client.core.addLinkModeSupportedApp((s=d.peer.metadata.redirect)==null?void 0:s.universal),(i=this.client.signConfig)!=null&&i.disableRequestQueue?this.emitSessionRequest(m):(this.addSessionRequestToSessionRequestQueue(m),this.processSessionRequestQueue())}catch(d){await this.sendError({id:h,topic:r,error:d}),this.client.logger.error(d)}}),index_es_c(this,"onSessionRequestResponse",(t,e)=>{const{id:s}=e,i=gi("session_request",s);if(this.events.listenerCount(i)===0)throw new Error(`emitting ${i} without any listeners`);(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(e)?this.events.emit(gi("session_request",s),{result:e.result}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(e)&&this.events.emit(gi("session_request",s),{error:e.error})}),index_es_c(this,"onSessionEventRequest",async(t,e)=>{const{id:s,params:i}=e;try{const r=`${t}_session_event_${i.event.name}`,n=Va.get(r);if(n&&this.isRequestOutOfSync(n,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(index_es_I({topic:t},i)),this.client.events.emit("session_event",{id:s,topic:t,params:i}),Va.set(r,s)}catch(r){await this.sendError({id:s,topic:t,error:r}),this.client.logger.error(r)}}),index_es_c(this,"onSessionAuthenticateResponse",(t,e)=>{const{id:s}=e;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:t,payload:e}),(0,jsonrpc_utils_dist_esm.isJsonRpcResult)(e)?this.events.emit(gi("session_request",s),{result:e.result}):(0,jsonrpc_utils_dist_esm.isJsonRpcError)(e)&&this.events.emit(gi("session_request",s),{error:e.error})}),index_es_c(this,"onSessionAuthenticateRequest",async t=>{var e;const{topic:s,payload:i,attestation:r,encryptedId:n,transportType:a}=t;try{const{requester:l,authPayload:p,expiryTimestamp:h}=i.params,u=await this.getVerifyContext({attestationId:r,hash:Wf(JSON.stringify(i)),encryptedId:n,metadata:l.metadata,transportType:a}),d={requester:l,pairingTopic:s,id:i.id,authPayload:p,verifyContext:u,expiryTimestamp:h};await this.setAuthRequest(i.id,{request:d,pairingTopic:s,transportType:a}),a===index_es_Q.link_mode&&(e=l.metadata.redirect)!=null&&e.universal&&this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:s,params:i.params,id:i.id,verifyContext:u})}catch(l){this.client.logger.error(l);const p=i.params.requester.publicKey,h=await this.client.core.crypto.generateKeyPair(),u=this.getAppLinkIfEnabled(i.params.requester.metadata,a),d={type:ne,receiverPublicKey:p,senderPublicKey:h};await this.sendError({id:i.id,topic:s,error:l,encodeOpts:d,rpcOpts:N.wc_sessionAuthenticate.autoReject,appLink:u})}}),index_es_c(this,"addSessionRequestToSessionRequestQueue",t=>{this.sessionRequestQueue.queue.push(t)}),index_es_c(this,"cleanupAfterResponse",t=>{this.deletePendingSessionRequest(t.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=dist_index_es_$.idle,this.processSessionRequestQueue()},(0,cjs.toMiliseconds)(this.requestQueueDelay))}),index_es_c(this,"cleanupPendingSentRequestsForTopic",({topic:t,error:e})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(i=>i.topic===t&&i.request.method==="wc_sessionRequest").forEach(i=>{const r=i.request.id,n=gi("session_request",r);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);this.events.emit(gi("session_request",i.request.id),{error:e})})}),index_es_c(this,"processSessionRequestQueue",()=>{if(this.sessionRequestQueue.state===dist_index_es_$.active){this.client.logger.info("session request queue is already active.");return}const t=this.sessionRequestQueue.queue[0];if(!t){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=dist_index_es_$.active,this.emitSessionRequest(t)}catch(e){this.client.logger.error(e)}}),index_es_c(this,"emitSessionRequest",t=>{this.client.events.emit("session_request",t)}),index_es_c(this,"onPairingCreated",t=>{if(t.methods&&this.expectedPairingMethodMap.set(t.topic,t.methods),t.active)return;const e=this.client.proposal.getAll().find(s=>s.pairingTopic===t.topic);e&&this.onSessionProposeRequest({topic:t.topic,payload:(0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("wc_sessionPropose",dist_index_es_C(index_es_I({},e),{requiredNamespaces:e.requiredNamespaces,optionalNamespaces:e.optionalNamespaces,relays:e.relays,proposer:e.proposer,sessionProperties:e.sessionProperties,scopedProperties:e.scopedProperties}),e.id)})}),index_es_c(this,"isValidConnect",async t=>{if(!Na(t)){const{message:l}=Et("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(t)}`);throw new Error(l)}const{pairingTopic:e,requiredNamespaces:s,optionalNamespaces:i,sessionProperties:r,scopedProperties:n,relays:a}=t;if(Ht(e)||await this.isValidPairingTopic(e),!Sa(a,!0)){const{message:l}=Et("MISSING_OR_INVALID",`connect() relays: ${a}`);throw new Error(l)}if(!Ht(s)&&Fe(s)!==0){const l="requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";["fatal","error","silent"].includes(this.client.logger.level)?console.warn(l):this.client.logger.warn(l),this.validateNamespaces(s,"requiredNamespaces")}if(!Ht(i)&&Fe(i)!==0&&this.validateNamespaces(i,"optionalNamespaces"),Ht(r)||this.validateSessionProps(r,"sessionProperties"),!Ht(n)){this.validateSessionProps(n,"scopedProperties");const l=Object.keys(s||{}).concat(Object.keys(i||{}));if(!Object.keys(n).every(p=>l.includes(p)))throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n)}, required/optional namespaces: ${JSON.stringify(l)}`)}}),index_es_c(this,"validateNamespaces",(t,e)=>{const s=Ia(t,"connect()",e);if(s)throw new Error(s.message)}),index_es_c(this,"isValidApprove",async t=>{if(!Na(t))throw new Error(Et("MISSING_OR_INVALID",`approve() params: ${t}`).message);const{id:e,namespaces:s,relayProtocol:i,sessionProperties:r,scopedProperties:n}=t;this.checkRecentlyDeleted(e),await this.isValidProposalId(e);const a=this.client.proposal.get(e),l=hs(s,"approve()");if(l)throw new Error(l.message);const p=gs(a.requiredNamespaces,s,"approve()");if(p)throw new Error(p.message);if(!ft(i,!0)){const{message:h}=Et("MISSING_OR_INVALID",`approve() relayProtocol: ${i}`);throw new Error(h)}if(Ht(r)||this.validateSessionProps(r,"sessionProperties"),!Ht(n)){this.validateSessionProps(n,"scopedProperties");const h=new Set(Object.keys(s));if(!Object.keys(n).every(u=>h.has(u)))throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n)}, approved namespaces: ${Array.from(h).join(", ")}`)}}),index_es_c(this,"isValidReject",async t=>{if(!Na(t)){const{message:i}=Et("MISSING_OR_INVALID",`reject() params: ${t}`);throw new Error(i)}const{id:e,reason:s}=t;if(this.checkRecentlyDeleted(e),await this.isValidProposalId(e),!Ua(s)){const{message:i}=Et("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(i)}}),index_es_c(this,"isValidSessionSettleRequest",t=>{if(!Na(t)){const{message:l}=Et("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${t}`);throw new Error(l)}const{relay:e,controller:s,namespaces:i,expiry:r}=t;if(!ps(e)){const{message:l}=Et("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(l)}const n=Ba(s,"onSessionSettleRequest()");if(n)throw new Error(n.message);const a=hs(i,"onSessionSettleRequest()");if(a)throw new Error(a.message);if(pi(r)){const{message:l}=Et("EXPIRED","onSessionSettleRequest()");throw new Error(l)}}),index_es_c(this,"isValidUpdate",async t=>{if(!Na(t)){const{message:a}=Et("MISSING_OR_INVALID",`update() params: ${t}`);throw new Error(a)}const{topic:e,namespaces:s}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const i=this.client.session.get(e),r=hs(s,"update()");if(r)throw new Error(r.message);const n=gs(i.requiredNamespaces,s,"update()");if(n)throw new Error(n.message)}),index_es_c(this,"isValidExtend",async t=>{if(!Na(t)){const{message:s}=Et("MISSING_OR_INVALID",`extend() params: ${t}`);throw new Error(s)}const{topic:e}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e)}),index_es_c(this,"isValidRequest",async t=>{if(!Na(t)){const{message:a}=Et("MISSING_OR_INVALID",`request() params: ${t}`);throw new Error(a)}const{topic:e,request:s,chainId:i,expiry:r}=t;this.checkRecentlyDeleted(e),await this.isValidSessionTopic(e);const{namespaces:n}=this.client.session.get(e);if(!$a(n,i)){const{message:a}=Et("MISSING_OR_INVALID",`request() chainId: ${i}`);throw new Error(a)}if(!_a(s)){const{message:a}=Et("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(a)}if(!La(n,i,s.method)){const{message:a}=Et("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(a)}if(r&&!Pa(r,dist_index_es_e)){const{message:a}=Et("MISSING_OR_INVALID",`request() expiry: ${r}. Expiry must be a number (in seconds) between ${dist_index_es_e.min} and ${dist_index_es_e.max}`);throw new Error(a)}}),index_es_c(this,"isValidRespond",async t=>{var e;if(!Na(t)){const{message:r}=Et("MISSING_OR_INVALID",`respond() params: ${t}`);throw new Error(r)}const{topic:s,response:i}=t;try{await this.isValidSessionTopic(s)}catch(r){throw(e=t?.response)!=null&&e.id&&this.cleanupAfterResponse(t),r}if(!Ta(i)){const{message:r}=Et("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(i)}`);throw new Error(r)}}),index_es_c(this,"isValidPing",async t=>{if(!Na(t)){const{message:s}=Et("MISSING_OR_INVALID",`ping() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e)}),index_es_c(this,"isValidEmit",async t=>{if(!Na(t)){const{message:n}=Et("MISSING_OR_INVALID",`emit() params: ${t}`);throw new Error(n)}const{topic:e,event:s,chainId:i}=t;await this.isValidSessionTopic(e);const{namespaces:r}=this.client.session.get(e);if(!$a(r,i)){const{message:n}=Et("MISSING_OR_INVALID",`emit() chainId: ${i}`);throw new Error(n)}if(!Ra(s)){const{message:n}=Et("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}if(!Ca(r,i,s.name)){const{message:n}=Et("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(n)}}),index_es_c(this,"isValidDisconnect",async t=>{if(!Na(t)){const{message:s}=Et("MISSING_OR_INVALID",`disconnect() params: ${t}`);throw new Error(s)}const{topic:e}=t;await this.isValidSessionOrPairingTopic(e)}),index_es_c(this,"isValidAuthenticate",t=>{const{chains:e,uri:s,domain:i,nonce:r}=t;if(!Array.isArray(e)||e.length===0)throw new Error("chains is required and must be a non-empty array");if(!ft(s,!1))throw new Error("uri is required parameter");if(!ft(i,!1))throw new Error("domain is required parameter");if(!ft(r,!1))throw new Error("nonce is required parameter");if([...new Set(e.map(a=>We(a).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:n}=We(e[0]);if(n!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")}),index_es_c(this,"getVerifyContext",async t=>{const{attestationId:e,hash:s,encryptedId:i,metadata:r,transportType:n}=t,a={verified:{verifyUrl:r.verifyUrl||index_es_ue,validation:"UNKNOWN",origin:r.url||""}};try{if(n===index_es_Q.link_mode){const p=this.getAppLinkIfEnabled(r,n);return a.verified.validation=p&&new URL(p).origin===new URL(r.url).origin?"VALID":"INVALID",a}const l=await this.client.core.verify.resolve({attestationId:e,hash:s,encryptedId:i,verifyUrl:r.verifyUrl});l&&(a.verified.origin=l.origin,a.verified.isScam=l.isScam,a.verified.validation=l.origin===new URL(r.url).origin?"VALID":"INVALID")}catch(l){this.client.logger.warn(l)}return this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`),a}),index_es_c(this,"validateSessionProps",(t,e)=>{Object.values(t).forEach((s,i)=>{if(s==null){const{message:r}=Et("MISSING_OR_INVALID",`${e} must contain an existing value for each key. Received: ${s} for key ${Object.keys(t)[i]}`);throw new Error(r)}})}),index_es_c(this,"getPendingAuthRequest",t=>{const e=this.client.auth.requests.get(t);return typeof e=="object"?e:void 0}),index_es_c(this,"addToRecentlyDeleted",(t,e)=>{if(this.recentlyDeletedMap.set(t,e),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const i=this.recentlyDeletedLimit/2;for(const r of this.recentlyDeletedMap.keys()){if(s++>=i)break;this.recentlyDeletedMap.delete(r)}}}),index_es_c(this,"checkRecentlyDeleted",t=>{const e=this.recentlyDeletedMap.get(t);if(e){const{message:s}=Et("MISSING_OR_INVALID",`Record was recently deleted - ${e}: ${t}`);throw new Error(s)}}),index_es_c(this,"isLinkModeEnabled",(t,e)=>{var s,i,r,n,a,l,p,h,u;return!t||e!==index_es_Q.link_mode?!1:((i=(s=this.client.metadata)==null?void 0:s.redirect)==null?void 0:i.linkMode)===!0&&((n=(r=this.client.metadata)==null?void 0:r.redirect)==null?void 0:n.universal)!==void 0&&((l=(a=this.client.metadata)==null?void 0:a.redirect)==null?void 0:l.universal)!==""&&((p=t?.redirect)==null?void 0:p.universal)!==void 0&&((h=t?.redirect)==null?void 0:h.universal)!==""&&((u=t?.redirect)==null?void 0:u.linkMode)===!0&&this.client.core.linkModeSupportedApps.includes(t.redirect.universal)&&typeof(global==null?void 0:global.Linking)<"u"}),index_es_c(this,"getAppLinkIfEnabled",(t,e)=>{var s;return this.isLinkModeEnabled(t,e)?(s=t?.redirect)==null?void 0:s.universal:void 0}),index_es_c(this,"handleLinkModeMessage",({url:t})=>{if(!t||!t.includes("wc_ev")||!t.includes("topic"))return;const e=mi(t,"topic")||"",s=decodeURIComponent(mi(t,"wc_ev")||""),i=this.client.session.keys.includes(e);i&&this.client.session.update(e,{transportType:index_es_Q.link_mode}),this.client.core.dispatchEnvelope({topic:e,message:s,sessionExists:i})}),index_es_c(this,"registerLinkModeListeners",async()=>{var t;if(xi()||At()&&(t=this.client.metadata.redirect)!=null&&t.linkMode){const e=global==null?void 0:global.Linking;if(typeof e<"u"){e.addEventListener("url",this.handleLinkModeMessage,this.client.name);const s=await e.getInitialURL();s&&setTimeout(()=>{this.handleLinkModeMessage({url:s})},50)}}}),index_es_c(this,"getTVFParams",(t,e,s)=>{var i,r;const n={correlationId:t,rpcMethods:[e.request.method],chainId:e.chainId};try{const a=this.extractTxHashesFromResult(e.request,s);n.txHashes=a,n.contractAddresses=this.isValidContractData(e.request.params)?[(r=(i=e.request.params)==null?void 0:i[0])==null?void 0:r.to]:[]}catch(a){this.client.logger.warn("Error getting TVF params",a)}return n}),index_es_c(this,"isValidContractData",t=>{var e;if(!t)return!1;try{const s=t?.data||((e=t?.[0])==null?void 0:e.data);if(!s.startsWith("0x"))return!1;const i=s.slice(2);return/^[0-9a-fA-F]*$/.test(i)?i.length%2===0:!1}catch{}return!1}),index_es_c(this,"extractTxHashesFromResult",(t,e)=>{var s;try{if(!e)return[];const i=t.method,r=index_es_yt[i];if(i==="sui_signTransaction")return[hc(e.transactionBytes)];if(i==="near_signTransaction")return[pc(e)];if(i==="near_signTransactions")return e.map(a=>pc(a));if(i==="xrpl_signTransactionFor"||i==="xrpl_signTransaction")return[(s=e.tx_json)==null?void 0:s.hash];if(i==="polkadot_signTransaction")return[Ga({transaction:t.params.transactionPayload,signature:e.signature})];if(i==="algo_signTxn")return Ae(e)?e.map(a=>gc(a)):[gc(e)];if(i==="cosmos_signDirect")return[bc(e)];if(typeof e=="string")return[e];const n=e[r.key];if(Ae(n))return i==="solana_signAllTransactions"?n.map(a=>dc(a)):n;if(typeof n=="string")return[n]}catch(i){this.client.logger.warn("Error extracting tx hashes from result",i)}return[]})}async processPendingMessageEvents(){try{const o=this.client.session.keys,t=this.client.core.relayer.messages.getWithoutAck(o);for(const[e,s]of Object.entries(t))for(const i of s)try{await this.onProviderMessageEvent({topic:e,message:i,publishedAt:Date.now()})}catch{this.client.logger.warn(`Error processing pending message event for topic: ${e}, message: ${i}`)}}catch(o){this.client.logger.warn("processPendingMessageEvents failed",o)}}isInitialized(){if(!this.initialized){const{message:o}=Et("NOT_INITIALIZED",this.name);throw new Error(o)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(index_es_C.message,o=>{this.onProviderMessageEvent(o)})}async onRelayMessage(o){const{topic:t,message:e,attestation:s,transportType:i}=o,{publicKey:r}=this.client.auth.authKeys.keys.includes(ce)?this.client.auth.authKeys.get(ce):{responseTopic:void 0,publicKey:void 0};try{const n=await this.client.core.crypto.decode(t,e,{receiverPublicKey:r,encoding:i===index_es_Q.link_mode?qe:te});(0,jsonrpc_utils_dist_esm.isJsonRpcRequest)(n)?(this.client.core.history.set(t,n),await this.onRelayEventRequest({topic:t,payload:n,attestation:s,transportType:i,encryptedId:Wf(e)})):(0,jsonrpc_utils_dist_esm.isJsonRpcResponse)(n)?(await this.client.core.history.resolve(n),await this.onRelayEventResponse({topic:t,payload:n,transportType:i}),this.client.core.history.delete(t,n.id)):await this.onRelayEventUnknownPayload({topic:t,payload:n,transportType:i}),await this.client.core.relayer.messages.ack(t,e)}catch(n){this.client.logger.error(n)}}registerExpirerEvents(){this.client.core.expirer.on(index_es_M.expired,async o=>{const{topic:t,id:e}=di(o.target);if(e&&this.client.pendingRequest.keys.includes(e))return await this.deletePendingSessionRequest(e,Et("EXPIRED"),!0);if(e&&this.client.auth.requests.keys.includes(e))return await this.deletePendingAuthRequest(e,Et("EXPIRED"),!0);t?this.client.session.keys.includes(t)&&(await this.deleteSession({topic:t,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:t})):e&&(await this.deleteProposal(e,!0),this.client.events.emit("proposal_expire",{id:e}))})}registerPairingEvents(){this.client.core.pairing.events.on(re.create,o=>this.onPairingCreated(o)),this.client.core.pairing.events.on(re.delete,o=>{this.addToRecentlyDeleted(o.topic,"pairing")})}isValidPairingTopic(o){if(!ft(o,!1)){const{message:t}=Et("MISSING_OR_INVALID",`pairing topic should be a string: ${o}`);throw new Error(t)}if(!this.client.core.pairing.pairings.keys.includes(o)){const{message:t}=Et("NO_MATCHING_KEY",`pairing topic doesn't exist: ${o}`);throw new Error(t)}if(pi(this.client.core.pairing.pairings.get(o).expiry)){const{message:t}=Et("EXPIRED",`pairing topic: ${o}`);throw new Error(t)}}async isValidSessionTopic(o){if(!ft(o,!1)){const{message:t}=Et("MISSING_OR_INVALID",`session topic should be a string: ${o}`);throw new Error(t)}if(this.checkRecentlyDeleted(o),!this.client.session.keys.includes(o)){const{message:t}=Et("NO_MATCHING_KEY",`session topic doesn't exist: ${o}`);throw new Error(t)}if(pi(this.client.session.get(o).expiry)){await this.deleteSession({topic:o});const{message:t}=Et("EXPIRED",`session topic: ${o}`);throw new Error(t)}if(!this.client.core.crypto.keychain.has(o)){const{message:t}=Et("MISSING_OR_INVALID",`session topic does not exist in keychain: ${o}`);throw await this.deleteSession({topic:o}),new Error(t)}}async isValidSessionOrPairingTopic(o){if(this.checkRecentlyDeleted(o),this.client.session.keys.includes(o))await this.isValidSessionTopic(o);else if(this.client.core.pairing.pairings.keys.includes(o))this.isValidPairingTopic(o);else if(ft(o,!1)){const{message:t}=Et("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${o}`);throw new Error(t)}else{const{message:t}=Et("MISSING_OR_INVALID",`session or pairing topic should be a string: ${o}`);throw new Error(t)}}async isValidProposalId(o){if(!Oa(o)){const{message:t}=Et("MISSING_OR_INVALID",`proposal id should be a number: ${o}`);throw new Error(t)}if(!this.client.proposal.keys.includes(o)){const{message:t}=Et("NO_MATCHING_KEY",`proposal id doesn't exist: ${o}`);throw new Error(t)}if(pi(this.client.proposal.get(o).expiryTimestamp)){await this.deleteProposal(o);const{message:t}=Et("EXPIRED",`proposal id: ${o}`);throw new Error(t)}}}class index_es_Vs extends index_es_Li{constructor(o,t){super(o,t,index_es_dt,index_es_me),this.core=o,this.logger=t}}class dist_index_es_It extends index_es_Li{constructor(o,t){super(o,t,index_es_ut,index_es_me),this.core=o,this.logger=t}}class index_es_Ds extends index_es_Li{constructor(o,t){super(o,t,index_es_mt,index_es_me,e=>e.id),this.core=o,this.logger=t}}class index_es_ks extends index_es_Li{constructor(o,t){super(o,t,index_es_ft,index_es_ae,()=>ce),this.core=o,this.logger=t}}class Ls extends index_es_Li{constructor(o,t){super(o,t,dist_index_es_St,index_es_ae),this.core=o,this.logger=t}}class index_es_Ms extends index_es_Li{constructor(o,t){super(o,t,dist_index_es_Rt,index_es_ae,e=>e.id),this.core=o,this.logger=t}}var $s=Object.defineProperty,Us=(S,o,t)=>o in S?$s(S,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):S[o]=t,dist_index_es_Ke=(S,o,t)=>Us(S,typeof o!="symbol"?o+"":o,t);class index_es_Ks{constructor(o,t){this.core=o,this.logger=t,dist_index_es_Ke(this,"authKeys"),dist_index_es_Ke(this,"pairingTopics"),dist_index_es_Ke(this,"requests"),this.authKeys=new index_es_ks(this.core,this.logger),this.pairingTopics=new Ls(this.core,this.logger),this.requests=new index_es_Ms(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}}var index_es_Gs=Object.defineProperty,index_es_js=(S,o,t)=>o in S?index_es_Gs(S,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):S[o]=t,dist_index_es_f=(S,o,t)=>index_es_js(S,typeof o!="symbol"?o+"":o,t);class dist_index_es_Ee extends index_es_J{constructor(o){super(o),dist_index_es_f(this,"protocol",index_es_De),dist_index_es_f(this,"version",dist_index_es_ke),dist_index_es_f(this,"name",index_es_we.name),dist_index_es_f(this,"metadata"),dist_index_es_f(this,"core"),dist_index_es_f(this,"logger"),dist_index_es_f(this,"events",new external_events_.EventEmitter),dist_index_es_f(this,"engine"),dist_index_es_f(this,"session"),dist_index_es_f(this,"proposal"),dist_index_es_f(this,"pendingRequest"),dist_index_es_f(this,"auth"),dist_index_es_f(this,"signConfig"),dist_index_es_f(this,"on",(e,s)=>this.events.on(e,s)),dist_index_es_f(this,"once",(e,s)=>this.events.once(e,s)),dist_index_es_f(this,"off",(e,s)=>this.events.off(e,s)),dist_index_es_f(this,"removeListener",(e,s)=>this.events.removeListener(e,s)),dist_index_es_f(this,"removeAllListeners",e=>this.events.removeAllListeners(e)),dist_index_es_f(this,"connect",async e=>{try{return await this.engine.connect(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"pair",async e=>{try{return await this.engine.pair(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"approve",async e=>{try{return await this.engine.approve(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"reject",async e=>{try{return await this.engine.reject(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"update",async e=>{try{return await this.engine.update(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"extend",async e=>{try{return await this.engine.extend(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"request",async e=>{try{return await this.engine.request(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"respond",async e=>{try{return await this.engine.respond(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"ping",async e=>{try{return await this.engine.ping(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"emit",async e=>{try{return await this.engine.emit(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"disconnect",async e=>{try{return await this.engine.disconnect(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"find",e=>{try{return this.engine.find(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"getPendingSessionRequests",()=>{try{return this.engine.getPendingSessionRequests()}catch(e){throw this.logger.error(e.message),e}}),dist_index_es_f(this,"authenticate",async(e,s)=>{try{return await this.engine.authenticate(e,s)}catch(i){throw this.logger.error(i.message),i}}),dist_index_es_f(this,"formatAuthMessage",e=>{try{return this.engine.formatAuthMessage(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"approveSessionAuthenticate",async e=>{try{return await this.engine.approveSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}}),dist_index_es_f(this,"rejectSessionAuthenticate",async e=>{try{return await this.engine.rejectSessionAuthenticate(e)}catch(s){throw this.logger.error(s.message),s}}),this.name=o?.name||index_es_we.name,this.metadata=Xs(o?.metadata),this.signConfig=o?.signConfig;const t=typeof o?.logger<"u"&&typeof o?.logger!="string"?o.logger:(0,logger_dist_index_es/* pino */.h6)((0,logger_dist_index_es/* getDefaultLoggerOptions */.iP)({level:o?.logger||index_es_we.logger}));this.core=o?.core||new index_es_Zo(o),this.logger=(0,logger_dist_index_es/* generateChildLogger */.U5)(t,this.name),this.session=new dist_index_es_It(this.core,this.logger),this.proposal=new index_es_Vs(this.core,this.logger),this.pendingRequest=new index_es_Ds(this.core,this.logger),this.engine=new index_es_Cs(this),this.auth=new index_es_Ks(this.core,this.logger)}static async init(o){const t=new dist_index_es_Ee(o);return await t.initialize(),t}get context(){return (0,logger_dist_index_es/* getLoggerContext */.oI)(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success"),setTimeout(()=>{this.engine.processRelayMessageCache()},(0,cjs.toMiliseconds)(cjs.ONE_SECOND))}catch(o){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(o.message),o}}}const index_es_Fs=(/* unused pure expression or super */ null && (dist_index_es_It)),dist_index_es_Qs=(/* unused pure expression or super */ null && (dist_index_es_Ee));
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var jsonrpc_http_connection_dist_index_es = __webpack_require__(236647);
;// ./node_modules/@walletconnect/ethereum-provider/node_modules/@walletconnect/universal-provider/dist/index.es.js
const index_es_et="error",universal_provider_dist_index_es_St="wss://relay.walletconnect.org",Dt="wc",dist_index_es_qt="universal_provider",index_es_U=`${Dt}@2:${dist_index_es_qt}:`,index_es_st="https://rpc.walletconnect.org/v1/",dist_index_es_I="generic",dist_index_es_jt=`${index_es_st}bundler`,index_es_u={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};function it(s){return typeof s=="object"&&s!==null}function dist_index_es_k(s){return s==null||typeof s!="object"&&typeof s!="function"}function index_es_rt(s){return Object.getOwnPropertySymbols(s).filter(t=>Object.prototype.propertyIsEnumerable.call(s,t))}function index_es_nt(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const universal_provider_dist_index_es_Rt="[object RegExp]",at="[object String]",ct="[object Number]",index_es_ot="[object Boolean]",index_es_ht="[object Arguments]",dist_index_es_t="[object Symbol]",universal_provider_dist_index_es_Ut="[object Date]",dist_index_es_Ft="[object Map]",dist_index_es_Lt="[object Set]",dist_index_es_Mt="[object Array]",dist_index_es_xt="[object ArrayBuffer]",dist_index_es_Bt="[object Object]",index_es_Gt="[object DataView]",dist_index_es_Jt="[object Uint8Array]",dist_index_es_zt="[object Uint8ClampedArray]",dist_index_es_kt="[object Uint16Array]",dist_index_es_Wt="[object Uint32Array]",dist_index_es_Kt="[object Int8Array]",dist_index_es_Vt="[object Int16Array]",dist_index_es_Xt="[object Int32Array]",dist_index_es_Yt="[object Float32Array]",dist_index_es_Qt="[object Float64Array]";function index_es_W(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function index_es_Zt(s,t){return universal_provider_dist_index_es_$(s,void 0,s,new Map,t)}function universal_provider_dist_index_es_$(s,t,e,i=new Map,n=void 0){const a=n?.(s,t,e,i);if(a!=null)return a;if(dist_index_es_k(s))return s;if(i.has(s))return i.get(s);if(Array.isArray(s)){const r=new Array(s.length);i.set(s,r);for(let c=0;c<s.length;c++)r[c]=universal_provider_dist_index_es_$(s[c],c,e,i,n);return Object.hasOwn(s,"index")&&(r.index=s.index),Object.hasOwn(s,"input")&&(r.input=s.input),r}if(s instanceof Date)return new Date(s.getTime());if(s instanceof RegExp){const r=new RegExp(s.source,s.flags);return r.lastIndex=s.lastIndex,r}if(s instanceof Map){const r=new Map;i.set(s,r);for(const[c,o]of s)r.set(c,universal_provider_dist_index_es_$(o,c,e,i,n));return r}if(s instanceof Set){const r=new Set;i.set(s,r);for(const c of s)r.add(universal_provider_dist_index_es_$(c,void 0,e,i,n));return r}if(typeof Buffer<"u"&&Buffer.isBuffer(s))return s.subarray();if(index_es_W(s)){const r=new(Object.getPrototypeOf(s)).constructor(s.length);i.set(s,r);for(let c=0;c<s.length;c++)r[c]=universal_provider_dist_index_es_$(s[c],c,e,i,n);return r}if(s instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&s instanceof SharedArrayBuffer)return s.slice(0);if(s instanceof DataView){const r=new DataView(s.buffer.slice(0),s.byteOffset,s.byteLength);return i.set(s,r),dist_index_es_y(r,s,e,i,n),r}if(typeof File<"u"&&s instanceof File){const r=new File([s],s.name,{type:s.type});return i.set(s,r),dist_index_es_y(r,s,e,i,n),r}if(s instanceof Blob){const r=new Blob([s],{type:s.type});return i.set(s,r),dist_index_es_y(r,s,e,i,n),r}if(s instanceof Error){const r=new s.constructor;return i.set(s,r),r.message=s.message,r.name=s.name,r.stack=s.stack,r.cause=s.cause,dist_index_es_y(r,s,e,i,n),r}if(typeof s=="object"&&dist_index_es_Tt(s)){const r=Object.create(Object.getPrototypeOf(s));return i.set(s,r),dist_index_es_y(r,s,e,i,n),r}return s}function dist_index_es_y(s,t,e=s,i,n){const a=[...Object.keys(t),...index_es_rt(t)];for(let r=0;r<a.length;r++){const c=a[r],o=Object.getOwnPropertyDescriptor(s,c);(o==null||o.writable)&&(s[c]=universal_provider_dist_index_es_$(t[c],c,e,i,n))}}function dist_index_es_Tt(s){switch(index_es_nt(s)){case index_es_ht:case dist_index_es_Mt:case dist_index_es_xt:case index_es_Gt:case index_es_ot:case universal_provider_dist_index_es_Ut:case dist_index_es_Yt:case dist_index_es_Qt:case dist_index_es_Kt:case dist_index_es_Vt:case dist_index_es_Xt:case dist_index_es_Ft:case ct:case dist_index_es_Bt:case universal_provider_dist_index_es_Rt:case dist_index_es_Lt:case at:case dist_index_es_t:case dist_index_es_Jt:case dist_index_es_zt:case dist_index_es_kt:case dist_index_es_Wt:return!0;default:return!1}}function index_es_te(s,t){return index_es_Zt(s,(e,i,n,a)=>{const r=t?.(e,i,n,a);if(r!=null)return r;if(typeof s=="object")switch(Object.prototype.toString.call(s)){case ct:case at:case index_es_ot:{const c=new s.constructor(s?.valueOf());return dist_index_es_y(c,s),c}case index_es_ht:{const c={};return dist_index_es_y(c,s),c.length=s.length,c[Symbol.iterator]=s[Symbol.iterator],c}default:return}})}function index_es_pt(s){return index_es_te(s)}function dist_index_es_dt(s){return s!==null&&typeof s=="object"&&index_es_nt(s)==="[object Arguments]"}function index_es_ee(s){return index_es_W(s)}function index_es_se(){}function index_es_ie(s){if(dist_index_es_k(s))return s;if(Array.isArray(s)||index_es_W(s)||s instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&s instanceof SharedArrayBuffer)return s.slice(0);const t=Object.getPrototypeOf(s),e=t.constructor;if(s instanceof Date||s instanceof Map||s instanceof Set)return new e(s);if(s instanceof RegExp){const i=new e(s);return i.lastIndex=s.lastIndex,i}if(s instanceof DataView)return new e(s.buffer.slice(0));if(s instanceof Error){const i=new e(s.message);return i.stack=s.stack,i.name=s.name,i.cause=s.cause,i}if(typeof File<"u"&&s instanceof File)return new e([s],s.name,{type:s.type,lastModified:s.lastModified});if(typeof s=="object"){const i=Object.create(t);return Object.assign(i,s)}return s}function index_es_re(s){if(typeof s!="object"||s==null)return!1;if(Object.getPrototypeOf(s)===null)return!0;if(Object.prototype.toString.call(s)!=="[object Object]"){const e=s[Symbol.toStringTag];return e==null||!Object.getOwnPropertyDescriptor(s,Symbol.toStringTag)?.writable?!1:s.toString()===`[object ${e}]`}let t=s;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(s)===t}function dist_index_es_ne(s,...t){const e=t.slice(0,-1),i=t[t.length-1];let n=s;for(let a=0;a<e.length;a++){const r=e[a];n=index_es_F(n,r,i,new Map)}return n}function index_es_F(s,t,e,i){if(dist_index_es_k(s)&&(s=Object(s)),t==null||typeof t!="object")return s;if(i.has(t))return index_es_ie(i.get(t));if(i.set(t,s),Array.isArray(t)){t=t.slice();for(let a=0;a<t.length;a++)t[a]=t[a]??void 0}const n=[...Object.keys(t),...index_es_rt(t)];for(let a=0;a<n.length;a++){const r=n[a];let c=t[r],o=s[r];if(dist_index_es_dt(c)&&(c={...c}),dist_index_es_dt(o)&&(o={...o}),typeof Buffer<"u"&&Buffer.isBuffer(c)&&(c=index_es_pt(c)),Array.isArray(c))if(typeof o=="object"&&o!=null){const w=[],v=Reflect.ownKeys(o);for(let P=0;P<v.length;P++){const p=v[P];w[p]=o[p]}o=w}else o=[];const m=e(o,c,r,s,t,i);m!=null?s[r]=m:Array.isArray(c)||it(o)&&it(c)?s[r]=index_es_F(o,c,e,i):o==null&&index_es_re(c)?s[r]=index_es_F({},c,e,i):o==null&&index_es_ee(c)?s[r]=index_es_pt(c):(o===void 0||c!==void 0)&&(s[r]=c)}return s}function dist_index_es_ae(s,...t){return dist_index_es_ne(s,...t,index_es_se)}var index_es_ce=Object.defineProperty,oe=Object.defineProperties,dist_index_es_he=Object.getOwnPropertyDescriptors,dist_index_es_ut=Object.getOwnPropertySymbols,dist_index_es_pe=Object.prototype.hasOwnProperty,dist_index_es_de=Object.prototype.propertyIsEnumerable,index_es_lt=(s,t,e)=>t in s?index_es_ce(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,index_es_L=(s,t)=>{for(var e in t||(t={}))dist_index_es_pe.call(t,e)&&index_es_lt(s,e,t[e]);if(dist_index_es_ut)for(var e of dist_index_es_ut(t))dist_index_es_de.call(t,e)&&index_es_lt(s,e,t[e]);return s},dist_index_es_ue=(s,t)=>oe(s,dist_index_es_he(t));function index_es_d(s,t,e){var i;const n=We(s);return((i=t.rpcMap)==null?void 0:i[n.reference])||`${index_es_st}?chainId=${n.namespace}:${n.reference}&projectId=${e}`}function index_es_b(s){return s.includes(":")?s.split(":")[1]:s}function dist_index_es_ft(s){return s.map(t=>`${t.split(":")[0]}:${t.split(":")[1]}`)}function dist_index_es_le(s,t){const e=Object.keys(t.namespaces).filter(n=>n.includes(s));if(!e.length)return[];const i=[];return e.forEach(n=>{const a=t.namespaces[n].accounts;i.push(...a)}),i}function dist_index_es_M(s={},t={}){const e=dist_index_es_mt(s),i=dist_index_es_mt(t);return dist_index_es_ae(e,i)}function dist_index_es_mt(s){var t,e,i,n,a;const r={};if(!Fe(s))return r;for(const[c,o]of Object.entries(s)){const m=zn(c)?[c]:o.chains,w=o.methods||[],v=o.events||[],P=o.rpcMap||{},p=rs(c);r[p]=dist_index_es_ue(index_es_L(index_es_L({},r[p]),o),{chains:ut(m,(t=r[p])==null?void 0:t.chains),methods:ut(w,(e=r[p])==null?void 0:e.methods),events:ut(v,(i=r[p])==null?void 0:i.events)}),(Fe(P)||Fe(((n=r[p])==null?void 0:n.rpcMap)||{}))&&(r[p].rpcMap=index_es_L(index_es_L({},P),(a=r[p])==null?void 0:a.rpcMap))}return r}function dist_index_es_vt(s){return s.includes(":")?s.split(":")[2]:s}function dist_index_es_gt(s){const t={};for(const[e,i]of Object.entries(s)){const n=i.methods||[],a=i.events||[],r=i.accounts||[],c=zn(e)?[e]:i.chains?i.chains:dist_index_es_ft(i.accounts);t[e]={chains:c,methods:n,events:a,accounts:r}}return t}function dist_index_es_K(s){return typeof s=="number"?s:s.includes("0x")?parseInt(s,16):(s=s.includes(":")?s.split(":")[1]:s,isNaN(Number(s))?s:Number(s))}const dist_index_es_Pt={},index_es_h=s=>dist_index_es_Pt[s],dist_index_es_V=(s,t)=>{dist_index_es_Pt[s]=t};var index_es_fe=Object.defineProperty,dist_index_es_me=(s,t,e)=>t in s?index_es_fe(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,dist_index_es_O=(s,t,e)=>dist_index_es_me(s,typeof t!="symbol"?t+"":t,e);class index_es_ve{constructor(t){dist_index_es_O(this,"name","polkadot"),dist_index_es_O(this,"client"),dist_index_es_O(this,"httpProviders"),dist_index_es_O(this,"events"),dist_index_es_O(this,"namespace"),dist_index_es_O(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(t,e),this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${t}`)}getAccounts(){const t=this.namespace.accounts;return t?t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2])||[]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;const n=index_es_b(e);t[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var dist_index_es_ge=Object.defineProperty,index_es_Pe=Object.defineProperties,dist_index_es_we=Object.getOwnPropertyDescriptors,dist_index_es_wt=Object.getOwnPropertySymbols,dist_index_es_ye=Object.prototype.hasOwnProperty,dist_index_es_be=Object.prototype.propertyIsEnumerable,index_es_X=(s,t,e)=>t in s?dist_index_es_ge(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,dist_index_es_yt=(s,t)=>{for(var e in t||(t={}))dist_index_es_ye.call(t,e)&&index_es_X(s,e,t[e]);if(dist_index_es_wt)for(var e of dist_index_es_wt(t))dist_index_es_be.call(t,e)&&index_es_X(s,e,t[e]);return s},index_es_bt=(s,t)=>index_es_Pe(s,dist_index_es_we(t)),index_es_A=(s,t,e)=>index_es_X(s,typeof t!="symbol"?t+"":t,e);class dist_index_es_Ie{constructor(t){index_es_A(this,"name","eip155"),index_es_A(this,"client"),index_es_A(this,"chainId"),index_es_A(this,"namespace"),index_es_A(this,"httpProviders"),index_es_A(this,"events"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(t){switch(t.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(t);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(t);case"wallet_getCallsStatus":return await this.getCallStatus(t)}return this.namespace.methods.includes(t.request.method)?await this.client.request(t):this.getHttpProvider().request(t.request)}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(parseInt(t),e),this.chainId=parseInt(t),this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${t}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}createHttpProvider(t,e){const i=e||index_es_d(`${this.name}:${t}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* HttpConnection */.V(i,index_es_h("disableProviderPing")))}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;const n=parseInt(index_es_b(e));t[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}getHttpProvider(){const t=this.chainId,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}async handleSwitchChain(t){var e,i;let n=t.request.params?(e=t.request.params[0])==null?void 0:e.chainId:"0x0";n=n.startsWith("0x")?n:`0x${n}`;const a=parseInt(n,16);if(this.isChainApproved(a))this.setDefaultChain(`${a}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:t.topic,request:{method:t.request.method,params:[{chainId:n}]},chainId:(i=this.namespace.chains)==null?void 0:i[0]}),this.setDefaultChain(`${a}`);else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(t){return this.namespace.chains.includes(`${this.name}:${t}`)}async getCapabilities(t){var e,i,n,a,r;const c=(i=(e=t.request)==null?void 0:e.params)==null?void 0:i[0],o=((a=(n=t.request)==null?void 0:n.params)==null?void 0:a[1])||[],m=`${c}${o.join(",")}`;if(!c)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const w=this.client.session.get(t.topic),v=((r=w?.sessionProperties)==null?void 0:r.capabilities)||{};if(v!=null&&v[m])return v?.[m];const P=await this.client.request(t);try{await this.client.session.update(t.topic,{sessionProperties:index_es_bt(dist_index_es_yt({},w.sessionProperties||{}),{capabilities:index_es_bt(dist_index_es_yt({},v||{}),{[m]:P})})})}catch(p){console.warn("Failed to update session with capabilities",p)}return P}async getCallStatus(t){var e,i;const n=this.client.session.get(t.topic),a=(e=n.sessionProperties)==null?void 0:e.bundler_name;if(a){const c=this.getBundlerUrl(t.chainId,a);try{return await this.getUserOperationReceipt(c,t)}catch(o){console.warn("Failed to fetch call status from bundler",o,c)}}const r=(i=n.sessionProperties)==null?void 0:i.bundler_url;if(r)try{return await this.getUserOperationReceipt(r,t)}catch(c){console.warn("Failed to fetch call status from custom bundler",c,r)}if(this.namespace.methods.includes(t.request.method))return await this.client.request(t);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(t,e){var i;const n=new URL(t),a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,jsonrpc_utils_dist_esm.formatJsonRpcRequest)("eth_getUserOperationReceipt",[(i=e.request.params)==null?void 0:i[0]]))});if(!a.ok)throw new Error(`Failed to fetch user operation receipt - ${a.status}`);return await a.json()}getBundlerUrl(t,e){return`${dist_index_es_jt}?projectId=${this.client.core.projectId}&chainId=${t}&bundler=${e}`}}var dist_index_es_$e=Object.defineProperty,index_es_Oe=(s,t,e)=>t in s?dist_index_es_$e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,universal_provider_dist_index_es_C=(s,t,e)=>index_es_Oe(s,typeof t!="symbol"?t+"":t,e);class index_es_Ae{constructor(t){universal_provider_dist_index_es_C(this,"name","solana"),universal_provider_dist_index_es_C(this,"client"),universal_provider_dist_index_es_C(this,"httpProviders"),universal_provider_dist_index_es_C(this,"events"),universal_provider_dist_index_es_C(this,"namespace"),universal_provider_dist_index_es_C(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(t,e),this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${t}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;const n=index_es_b(e);t[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var dist_index_es_Ce=Object.defineProperty,dist_index_es_He=(s,t,e)=>t in s?dist_index_es_Ce(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,index_es_H=(s,t,e)=>dist_index_es_He(s,typeof t!="symbol"?t+"":t,e);class universal_provider_dist_index_es_Ee{constructor(t){index_es_H(this,"name","cosmos"),index_es_H(this,"client"),index_es_H(this,"httpProviders"),index_es_H(this,"events"),index_es_H(this,"namespace"),index_es_H(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(t,e),this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;const n=index_es_b(e);t[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var index_es_Ne=Object.defineProperty,index_es_Se=(s,t,e)=>t in s?index_es_Ne(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,dist_index_es_E=(s,t,e)=>index_es_Se(s,typeof t!="symbol"?t+"":t,e);class dist_index_es_De{constructor(t){dist_index_es_E(this,"name","algorand"),dist_index_es_E(this,"client"),dist_index_es_E(this,"httpProviders"),dist_index_es_E(this,"events"),dist_index_es_E(this,"namespace"),dist_index_es_E(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){if(!this.httpProviders[t]){const i=e||index_es_d(`${this.name}:${t}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);this.setHttpProvider(t,i)}this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;t[e]=this.createHttpProvider(e,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace,this.client.core.projectId);return typeof i>"u"?void 0:new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var dist_index_es_qe=Object.defineProperty,dist_index_es_je=(s,t,e)=>t in s?dist_index_es_qe(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,index_es_N=(s,t,e)=>dist_index_es_je(s,typeof t!="symbol"?t+"":t,e);class index_es_Re{constructor(t){index_es_N(this,"name","cip34"),index_es_N(this,"client"),index_es_N(this,"httpProviders"),index_es_N(this,"events"),index_es_N(this,"namespace"),index_es_N(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(t,e),this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{const i=this.getCardanoRPCUrl(e),n=index_es_b(e);t[n]=this.createHttpProvider(n,i)}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}getCardanoRPCUrl(t){const e=this.namespace.rpcMap;if(e)return e[t]}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||this.getCardanoRPCUrl(t);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var universal_provider_dist_index_es_e=Object.defineProperty,universal_provider_dist_index_es_Ue=(s,t,e)=>t in s?universal_provider_dist_index_es_e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,dist_index_es_S=(s,t,e)=>universal_provider_dist_index_es_Ue(s,typeof t!="symbol"?t+"":t,e);class dist_index_es_Fe{constructor(t){dist_index_es_S(this,"name","elrond"),dist_index_es_S(this,"client"),dist_index_es_S(this,"httpProviders"),dist_index_es_S(this,"events"),dist_index_es_S(this,"namespace"),dist_index_es_S(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(t,e),this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${t}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;const n=index_es_b(e);t[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var universal_provider_dist_index_es_Le=Object.defineProperty,universal_provider_dist_index_es_Me=(s,t,e)=>t in s?universal_provider_dist_index_es_Le(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,index_es_D=(s,t,e)=>universal_provider_dist_index_es_Me(s,typeof t!="symbol"?t+"":t,e);class index_es_xe{constructor(t){index_es_D(this,"name","multiversx"),index_es_D(this,"client"),index_es_D(this,"httpProviders"),index_es_D(this,"events"),index_es_D(this,"namespace"),index_es_D(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(t,e),this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${t}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;const n=index_es_b(e);t[n]=this.createHttpProvider(n,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var dist_index_es_Be=Object.defineProperty,index_es_Ge=(s,t,e)=>t in s?dist_index_es_Be(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,q=(s,t,e)=>index_es_Ge(s,typeof t!="symbol"?t+"":t,e);class dist_index_es_Je{constructor(t){q(this,"name","near"),q(this,"client"),q(this,"httpProviders"),q(this,"events"),q(this,"namespace"),q(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){if(this.chainId=t,!this.httpProviders[t]){const i=e||index_es_d(`${this.name}:${t}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);this.setHttpProvider(t,i)}this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const t=this.namespace.accounts;return t?t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2])||[]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{var i;t[e]=this.createHttpProvider(e,(i=this.namespace.rpcMap)==null?void 0:i[e])}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace);return typeof i>"u"?void 0:new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var dist_index_es_ze=Object.defineProperty,universal_provider_dist_index_es_ke=(s,t,e)=>t in s?dist_index_es_ze(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,index_es_j=(s,t,e)=>universal_provider_dist_index_es_ke(s,typeof t!="symbol"?t+"":t,e);class dist_index_es_We{constructor(t){index_es_j(this,"name","tezos"),index_es_j(this,"client"),index_es_j(this,"httpProviders"),index_es_j(this,"events"),index_es_j(this,"namespace"),index_es_j(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace=Object.assign(this.namespace,t)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider().request(t.request)}setDefaultChain(t,e){if(this.chainId=t,!this.httpProviders[t]){const i=e||index_es_d(`${this.name}:${t}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);this.setHttpProvider(t,i)}this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const t=this.namespace.accounts;return t?t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2])||[]:[]}createHttpProviders(){const t={};return this.namespace.chains.forEach(e=>{t[e]=this.createHttpProvider(e)}),t}getHttpProvider(){const t=`${this.name}:${this.chainId}`,e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace);return typeof i>"u"?void 0:new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i))}}var universal_provider_dist_index_es_Ke=Object.defineProperty,dist_index_es_Ve=(s,t,e)=>t in s?universal_provider_dist_index_es_Ke(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,index_es_R=(s,t,e)=>dist_index_es_Ve(s,typeof t!="symbol"?t+"":t,e);class dist_index_es_Xe{constructor(t){index_es_R(this,"name",dist_index_es_I),index_es_R(this,"client"),index_es_R(this,"httpProviders"),index_es_R(this,"events"),index_es_R(this,"namespace"),index_es_R(this,"chainId"),this.namespace=t.namespace,this.events=index_es_h("events"),this.client=index_es_h("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(t){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(t.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(t.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(t.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(t.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(t){return this.namespace.methods.includes(t.request.method)?this.client.request(t):this.getHttpProvider(t.chainId).request(t.request)}setDefaultChain(t,e){this.httpProviders[t]||this.setHttpProvider(t,e),this.chainId=t,this.events.emit(index_es_u.DEFAULT_CHAIN_CHANGED,`${this.name}:${t}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const t=this.namespace.chains[0];if(!t)throw new Error("ChainId not found");return t.split(":")[1]}getAccounts(){const t=this.namespace.accounts;return t?[...new Set(t.filter(e=>e.split(":")[1]===this.chainId.toString()).map(e=>e.split(":")[2]))]:[]}createHttpProviders(){var t,e;const i={};return(e=(t=this.namespace)==null?void 0:t.accounts)==null||e.forEach(n=>{const a=We(n);i[`${a.namespace}:${a.reference}`]=this.createHttpProvider(n)}),i}getHttpProvider(t){const e=this.httpProviders[t];if(typeof e>"u")throw new Error(`JSON-RPC provider for ${t} not found`);return e}setHttpProvider(t,e){const i=this.createHttpProvider(t,e);i&&(this.httpProviders[t]=i)}createHttpProvider(t,e){const i=e||index_es_d(t,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${t}`);return new jsonrpc_provider_dist_index_es/* JsonRpcProvider */.F(new jsonrpc_http_connection_dist_index_es/* default */.A(i,index_es_h("disableProviderPing")))}}var dist_index_es_Ye=Object.defineProperty,dist_index_es_Qe=Object.defineProperties,index_es_Ze=Object.getOwnPropertyDescriptors,universal_provider_dist_index_es_It=Object.getOwnPropertySymbols,dist_index_es_Te=Object.prototype.hasOwnProperty,index_es_ts=Object.prototype.propertyIsEnumerable,dist_index_es_Y=(s,t,e)=>t in s?dist_index_es_Ye(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,index_es_x=(s,t)=>{for(var e in t||(t={}))dist_index_es_Te.call(t,e)&&dist_index_es_Y(s,e,t[e]);if(universal_provider_dist_index_es_It)for(var e of universal_provider_dist_index_es_It(t))index_es_ts.call(t,e)&&dist_index_es_Y(s,e,t[e]);return s},dist_index_es_Q=(s,t)=>dist_index_es_Qe(s,index_es_Ze(t)),l=(s,t,e)=>dist_index_es_Y(s,typeof t!="symbol"?t+"":t,e);class index_es_B{constructor(t){l(this,"client"),l(this,"namespaces"),l(this,"optionalNamespaces"),l(this,"sessionProperties"),l(this,"scopedProperties"),l(this,"events",new (external_events_default())),l(this,"rpcProviders",{}),l(this,"session"),l(this,"providerOpts"),l(this,"logger"),l(this,"uri"),l(this,"disableProviderPing",!1),this.providerOpts=t,this.logger=typeof t?.logger<"u"&&typeof t?.logger!="string"?t.logger:(0,logger_dist_index_es/* pino */.h6)((0,logger_dist_index_es/* getDefaultLoggerOptions */.iP)({level:t?.logger||index_es_et})),this.disableProviderPing=t?.disableProviderPing||!1}static async init(t){const e=new index_es_B(t);return await e.initialize(),e}async request(t,e,i){const[n,a]=this.validateChain(e);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(n).request({request:index_es_x({},t),chainId:`${n}:${a}`,topic:this.session.topic,expiry:i})}sendAsync(t,e,i,n){const a=new Date().getTime();this.request(t,i,n).then(r=>e(null,(0,jsonrpc_utils_dist_esm.formatJsonRpcResult)(a,r))).catch(r=>e(r,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties}),await this.requestAccounts()}async disconnect(){var t;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(t=this.session)==null?void 0:t.topic,reason:zt("USER_DISCONNECTED")}),await this.cleanup()}async connect(t){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(t),await this.cleanupPendingPairings(),!t.skipPairing)return await this.pair(t.pairingTopic)}async authenticate(t,e){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(t),await this.cleanupPendingPairings();const{uri:i,response:n}=await this.client.authenticate(t,e);i&&(this.uri=i,this.events.emit("display_uri",i));const a=await n();if(this.session=a.session,this.session){const r=dist_index_es_gt(this.session.namespaces);this.namespaces=dist_index_es_M(this.namespaces,r),await this.persist("namespaces",this.namespaces),this.onConnect()}return a}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}removeListener(t,e){this.events.removeListener(t,e)}off(t,e){this.events.off(t,e)}get isWalletConnect(){return!0}async pair(t){const{uri:e,approval:i}=await this.client.connect({pairingTopic:t,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties});e&&(this.uri=e,this.events.emit("display_uri",e));const n=await i();this.session=n;const a=dist_index_es_gt(n.namespaces);return this.namespaces=dist_index_es_M(this.namespaces,a),await this.persist("namespaces",this.namespaces),await this.persist("optionalNamespaces",this.optionalNamespaces),this.onConnect(),this.session}setDefaultChain(t,e){try{if(!this.session)return;const[i,n]=this.validateChain(t),a=this.getProvider(i);a.name===dist_index_es_I?a.setDefaultChain(`${i}:${n}`,e):a.setDefaultChain(n,e)}catch(i){if(!/Please call connect/.test(i.message))throw i}}async cleanupPendingPairings(t={}){this.logger.info("Cleaning up inactive pairings...");const e=this.client.pairing.getAll();if(Ae(e)){for(const i of e)t.deletePairings?this.client.core.expirer.set(i.topic,0):await this.client.core.relayer.subscriber.unsubscribe(i.topic);this.logger.info(`Inactive pairings cleared: ${e.length}`)}}abortPairingAttempt(){this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")}async checkStorage(){this.namespaces=await this.getFromStore("namespaces")||{},this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.session&&this.createProviders()}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){var t,e;if(this.client=this.providerOpts.client||await dist_index_es_Ee.init({core:this.providerOpts.core,logger:this.providerOpts.logger||index_es_et,relayUrl:this.providerOpts.relayUrl||universal_provider_dist_index_es_St,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.providerOpts.session)try{this.session=this.client.session.get(this.providerOpts.session.topic)}catch(i){throw this.logger.error("Failed to get session",i),new Error(`The provided session: ${(e=(t=this.providerOpts)==null?void 0:t.session)==null?void 0:e.topic} doesn't exist in the Sign client`)}else{const i=this.client.session.getAll();this.session=i[0]}this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const t=[...new Set(Object.keys(this.session.namespaces).map(e=>rs(e)))];dist_index_es_V("client",this.client),dist_index_es_V("events",this.events),dist_index_es_V("disableProviderPing",this.disableProviderPing),t.forEach(e=>{if(!this.session)return;const i=dist_index_es_le(e,this.session),n=dist_index_es_ft(i),a=dist_index_es_M(this.namespaces,this.optionalNamespaces),r=dist_index_es_Q(index_es_x({},a[e]),{accounts:i,chains:n});switch(e){case"eip155":this.rpcProviders[e]=new dist_index_es_Ie({namespace:r});break;case"algorand":this.rpcProviders[e]=new dist_index_es_De({namespace:r});break;case"solana":this.rpcProviders[e]=new index_es_Ae({namespace:r});break;case"cosmos":this.rpcProviders[e]=new universal_provider_dist_index_es_Ee({namespace:r});break;case"polkadot":this.rpcProviders[e]=new index_es_ve({namespace:r});break;case"cip34":this.rpcProviders[e]=new index_es_Re({namespace:r});break;case"elrond":this.rpcProviders[e]=new dist_index_es_Fe({namespace:r});break;case"multiversx":this.rpcProviders[e]=new index_es_xe({namespace:r});break;case"near":this.rpcProviders[e]=new dist_index_es_Je({namespace:r});break;case"tezos":this.rpcProviders[e]=new dist_index_es_We({namespace:r});break;default:this.rpcProviders[dist_index_es_I]?this.rpcProviders[dist_index_es_I].updateNamespace(r):this.rpcProviders[dist_index_es_I]=new dist_index_es_Xe({namespace:r})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",t=>{var e;const{topic:i}=t;i===((e=this.session)==null?void 0:e.topic)&&this.events.emit("session_ping",t)}),this.client.on("session_event",t=>{var e;const{params:i,topic:n}=t;if(n!==((e=this.session)==null?void 0:e.topic))return;const{event:a}=i;if(a.name==="accountsChanged"){const r=a.data;r&&Ae(r)&&this.events.emit("accountsChanged",r.map(dist_index_es_vt))}else if(a.name==="chainChanged"){const r=i.chainId,c=i.event.data,o=rs(r),m=dist_index_es_K(r)!==dist_index_es_K(c)?`${o}:${dist_index_es_K(c)}`:r;this.onChainChanged(m)}else this.events.emit(a.name,a.data);this.events.emit("session_event",t)}),this.client.on("session_update",({topic:t,params:e})=>{var i,n;if(t!==((i=this.session)==null?void 0:i.topic))return;const{namespaces:a}=e,r=(n=this.client)==null?void 0:n.session.get(t);this.session=dist_index_es_Q(index_es_x({},r),{namespaces:a}),this.onSessionUpdate(),this.events.emit("session_update",{topic:t,params:e})}),this.client.on("session_delete",async t=>{var e;t.topic===((e=this.session)==null?void 0:e.topic)&&(await this.cleanup(),this.events.emit("session_delete",t),this.events.emit("disconnect",dist_index_es_Q(index_es_x({},zt("USER_DISCONNECTED")),{data:t.topic})))}),this.on(index_es_u.DEFAULT_CHAIN_CHANGED,t=>{this.onChainChanged(t,!0)})}getProvider(t){return this.rpcProviders[t]||this.rpcProviders[dist_index_es_I]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(t=>{var e;this.getProvider(t).updateNamespace((e=this.session)==null?void 0:e.namespaces[t])})}setNamespaces(t){const{namespaces:e={},optionalNamespaces:i={},sessionProperties:n,scopedProperties:a}=t;this.optionalNamespaces=dist_index_es_M(e,i),this.sessionProperties=n,this.scopedProperties=a}validateChain(t){const[e,i]=t?.split(":")||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[e,i];if(e&&!Object.keys(this.namespaces||{}).map(r=>rs(r)).includes(e))throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);if(e&&i)return[e,i];const n=rs(Object.keys(this.namespaces)[0]),a=this.rpcProviders[n].getDefaultChain();return[n,a]}async requestAccounts(){const[t]=this.validateChain();return await this.getProvider(t).requestAccounts()}async onChainChanged(t,e=!1){if(!this.namespaces)return;const[i,n]=this.validateChain(t);if(!n)return;this.updateNamespaceChain(i,n),this.events.emit("chainChanged",n);const a=this.getProvider(i).getDefaultChain();e||this.getProvider(i).setDefaultChain(n),this.emitAccountsChangedOnChainChange({namespace:i,previousChainId:a,newChainId:t}),await this.persist("namespaces",this.namespaces)}emitAccountsChangedOnChainChange({namespace:t,previousChainId:e,newChainId:i}){var n,a;try{if(e===i)return;const r=(a=(n=this.session)==null?void 0:n.namespaces[t])==null?void 0:a.accounts;if(!r)return;const c=r.filter(o=>o.includes(`${i}:`)).map(dist_index_es_vt);if(!Ae(c))return;this.events.emit("accountsChanged",c)}catch(r){this.logger.warn("Failed to emit accountsChanged on chain change",r)}}updateNamespaceChain(t,e){if(!this.namespaces)return;const i=this.namespaces[t]?t:`${t}:${e}`,n={chains:[],methods:[],events:[],defaultChain:e};this.namespaces[i]?this.namespaces[i]&&(this.namespaces[i].defaultChain=e):this.namespaces[i]=n}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,await this.deleteFromStore("namespaces"),await this.deleteFromStore("optionalNamespaces"),await this.deleteFromStore("sessionProperties"),this.session=void 0,await this.cleanupPendingPairings({deletePairings:!0}),await this.cleanupStorage()}async persist(t,e){var i;const n=((i=this.session)==null?void 0:i.topic)||"";await this.client.core.storage.setItem(`${index_es_U}/${t}${n}`,e)}async getFromStore(t){var e;const i=((e=this.session)==null?void 0:e.topic)||"";return await this.client.core.storage.getItem(`${index_es_U}/${t}${i}`)}async deleteFromStore(t){var e;const i=((e=this.session)==null?void 0:e.topic)||"";await this.client.core.storage.removeItem(`${index_es_U}/${t}${i}`)}async cleanupStorage(){var t;try{if(((t=this.client)==null?void 0:t.session.length)>0)return;const e=await this.client.core.storage.getKeys();for(const i of e)i.startsWith(index_es_U)&&await this.client.core.storage.removeItem(i)}catch(e){this.logger.warn("Failed to cleanup storage",e)}}}const dist_index_es_es=index_es_B;
//# sourceMappingURL=index.es.js.map

;// ./node_modules/@walletconnect/ethereum-provider/dist/index.es.js
const ethereum_provider_dist_index_es_$="wc",ethereum_provider_dist_index_es_k="ethereum_provider",index_es_q=`${ethereum_provider_dist_index_es_$}@2:${ethereum_provider_dist_index_es_k}:`,dist_index_es_U="https://rpc.walletconnect.org/v1/",ethereum_provider_dist_index_es_f=["eth_sendTransaction","personal_sign"],dist_index_es_A=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],ethereum_provider_dist_index_es_C=["chainChanged","accountsChanged"],dist_index_es_P=["chainChanged","accountsChanged","message","disconnect","connect"],dist_index_es_D=async()=>{const{createAppKit:s}=await __webpack_require__.e(/* import() */ 3895).then(__webpack_require__.bind(__webpack_require__, 853895));return s};var dist_index_es_z=Object.defineProperty,dist_index_es_L=Object.defineProperties,ethereum_provider_dist_index_es_K=Object.getOwnPropertyDescriptors,ethereum_provider_dist_index_es_M=Object.getOwnPropertySymbols,ethereum_provider_dist_index_es_Q=Object.prototype.hasOwnProperty,ethereum_provider_dist_index_es_V=Object.prototype.propertyIsEnumerable,_=(s,t,e)=>t in s?dist_index_es_z(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,dist_index_es_v=(s,t)=>{for(var e in t||(t={}))ethereum_provider_dist_index_es_Q.call(t,e)&&_(s,e,t[e]);if(ethereum_provider_dist_index_es_M)for(var e of ethereum_provider_dist_index_es_M(t))ethereum_provider_dist_index_es_V.call(t,e)&&_(s,e,t[e]);return s},dist_index_es_w=(s,t)=>dist_index_es_L(s,ethereum_provider_dist_index_es_K(t)),dist_index_es_p=(s,t,e)=>_(s,typeof t!="symbol"?t+"":t,e);function ethereum_provider_dist_index_es_I(s){return Number(s[0].split(":")[1])}function ethereum_provider_dist_index_es_E(s){return`0x${s.toString(16)}`}function index_es_G(s){const{chains:t,optionalChains:e,methods:n,optionalMethods:i,events:a,optionalEvents:o,rpcMap:u}=s;if(!Ae(t))throw new Error("Invalid chains");const c={chains:t,methods:n||ethereum_provider_dist_index_es_f,events:a||ethereum_provider_dist_index_es_C,rpcMap:dist_index_es_v({},t.length?{[ethereum_provider_dist_index_es_I(t)]:u[ethereum_provider_dist_index_es_I(t)]}:{})},l=a?.filter(d=>!ethereum_provider_dist_index_es_C.includes(d)),r=n?.filter(d=>!ethereum_provider_dist_index_es_f.includes(d));if(!e&&!o&&!i&&!(l!=null&&l.length)&&!(r!=null&&r.length))return{required:t.length?c:void 0};const m=l?.length&&r?.length||!e,h={chains:[...new Set(m?c.chains.concat(e||[]):e)],methods:[...new Set(c.methods.concat(i!=null&&i.length?i:dist_index_es_A))],events:[...new Set(c.events.concat(o!=null&&o.length?o:dist_index_es_P))],rpcMap:u};return{required:t.length?c:void 0,optional:e.length?h:void 0}}class dist_index_es_b{constructor(){dist_index_es_p(this,"events",new external_events_.EventEmitter),dist_index_es_p(this,"namespace","eip155"),dist_index_es_p(this,"accounts",[]),dist_index_es_p(this,"signer"),dist_index_es_p(this,"chainId",1),dist_index_es_p(this,"modal"),dist_index_es_p(this,"rpc"),dist_index_es_p(this,"STORAGE_KEY",index_es_q),dist_index_es_p(this,"on",(t,e)=>(this.events.on(t,e),this)),dist_index_es_p(this,"once",(t,e)=>(this.events.once(t,e),this)),dist_index_es_p(this,"removeListener",(t,e)=>(this.events.removeListener(t,e),this)),dist_index_es_p(this,"off",(t,e)=>(this.events.off(t,e),this)),dist_index_es_p(this,"parseAccount",t=>this.isCompatibleChainId(t)?this.parseAccountId(t).address:t),this.signer={},this.rpc={}}static async init(t){const e=new dist_index_es_b;return await e.initialize(t),e}async request(t,e){return await this.signer.request(t,this.formatChainId(this.chainId),e)}sendAsync(t,e,n){this.signer.sendAsync(t,e,this.formatChainId(this.chainId),n)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(t){var e;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(t);const{required:n,optional:i}=index_es_G(this.rpc);try{const a=await new Promise(async(u,c)=>{var l,r;this.rpc.showQrModal&&((l=this.modal)==null||l.open(),(r=this.modal)==null||r.subscribeState(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))}));const m=t!=null&&t.scopedProperties?{[this.namespace]:t.scopedProperties}:void 0;await this.signer.connect(dist_index_es_w(dist_index_es_v({namespaces:dist_index_es_v({},n&&{[this.namespace]:n})},i&&{optionalNamespaces:{[this.namespace]:i}}),{pairingTopic:t?.pairingTopic,scopedProperties:m})).then(h=>{u(h)}).catch(h=>{var d;(d=this.modal)==null||d.showErrorMessage("Unable to connect"),c(new Error(h.message))})});if(!a)return;const o=ks(a.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_E(this.chainId)})}catch(a){throw this.signer.logger.error(a),a}finally{(e=this.modal)==null||e.close()}}async authenticate(t,e){var n;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:t?.chains});try{const i=await new Promise(async(o,u)=>{var c,l;this.rpc.showQrModal&&((c=this.modal)==null||c.open(),(l=this.modal)==null||l.subscribeState(r=>{!r.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),u(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(dist_index_es_w(dist_index_es_v({},t),{chains:this.rpc.chains}),e).then(r=>{o(r)}).catch(r=>{var m;(m=this.modal)==null||m.showErrorMessage("Unable to connect"),u(new Error(r.message))})}),a=i.session;if(a){const o=ks(a.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:ethereum_provider_dist_index_es_E(this.chainId)})}return i}catch(i){throw this.signer.logger.error(i),i}finally{(n=this.modal)==null||n.close()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",t=>{const{params:e}=t,{event:n}=e;n.name==="accountsChanged"?(this.accounts=this.parseAccounts(n.data),this.events.emit("accountsChanged",this.accounts)):n.name==="chainChanged"?this.setChainId(this.formatChainId(n.data)):this.events.emit(n.name,n.data),this.events.emit("session_event",t)}),this.signer.on("accountsChanged",t=>{this.accounts=this.parseAccounts(t),this.events.emit("accountsChanged",this.accounts)}),this.signer.on("chainChanged",t=>{const e=parseInt(t);this.chainId=e,this.events.emit("chainChanged",ethereum_provider_dist_index_es_E(this.chainId)),this.persist()}),this.signer.on("session_update",t=>{this.events.emit("session_update",t)}),this.signer.on("session_delete",t=>{this.reset(),this.events.emit("session_delete",t),this.events.emit("disconnect",dist_index_es_w(dist_index_es_v({},zt("USER_DISCONNECTED")),{data:t.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",t=>{this.events.emit("display_uri",t)})}switchEthereumChain(t){this.request({method:"wallet_switchEthereumChain",params:[{chainId:t.toString(16)}]})}isCompatibleChainId(t){return typeof t=="string"?t.startsWith(`${this.namespace}:`):!1}formatChainId(t){return`${this.namespace}:${t}`}parseChainId(t){return Number(t.split(":")[1])}setChainIds(t){const e=t.filter(n=>this.isCompatibleChainId(n)).map(n=>this.parseChainId(n));e.length&&(this.chainId=e[0],this.events.emit("chainChanged",ethereum_provider_dist_index_es_E(this.chainId)),this.persist())}setChainId(t){if(this.isCompatibleChainId(t)){const e=this.parseChainId(t);this.chainId=e,this.switchEthereumChain(e)}}parseAccountId(t){const[e,n,i]=t.split(":");return{chainId:`${e}:${n}`,address:i}}setAccounts(t){this.accounts=t.filter(e=>this.parseChainId(this.parseAccountId(e).chainId)===this.chainId).map(e=>this.parseAccountId(e).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(t){var e,n;const i=(e=t?.chains)!=null?e:[],a=(n=t?.optionalChains)!=null?n:[],o=i.concat(a);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const u=i.length?t?.methods||ethereum_provider_dist_index_es_f:[],c=i.length?t?.events||ethereum_provider_dist_index_es_C:[],l=t?.optionalMethods||[],r=t?.optionalEvents||[],m=t?.rpcMap||this.buildRpcMap(o,t.projectId),h=t?.qrModalOptions||void 0;return{chains:i?.map(d=>this.formatChainId(d)),optionalChains:a.map(d=>this.formatChainId(d)),methods:u,events:c,optionalMethods:l,optionalEvents:r,rpcMap:m,showQrModal:!!(t!=null&&t.showQrModal),qrModalOptions:h,projectId:t.projectId,metadata:t.metadata}}buildRpcMap(t,e){const n={};return t.forEach(i=>{n[i]=this.getRpcUrl(i,e)}),n}async initialize(t){if(this.rpc=this.getRpcConfig(t),this.chainId=this.rpc.chains.length?ethereum_provider_dist_index_es_I(this.rpc.chains):ethereum_provider_dist_index_es_I(this.rpc.optionalChains),this.signer=await dist_index_es_es.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:t.disableProviderPing,relayUrl:t.relayUrl,storage:t.storage,storageOptions:t.storageOptions,customStoragePrefix:t.customStoragePrefix,telemetryEnabled:t.telemetryEnabled,logger:t.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let e;try{const n=await dist_index_es_D(),{convertWCMToAppKitOptions:i}=await Promise.resolve().then(function(){return dist_index_es_nt}),a=i(dist_index_es_w(dist_index_es_v({},this.rpc.qrModalOptions),{chains:[...new Set([...this.rpc.chains,...this.rpc.optionalChains])],metadata:this.rpc.metadata,projectId:this.rpc.projectId}));if(!a.networks.length)throw new Error("No networks found for WalletConnect\xB7");e=n(dist_index_es_w(dist_index_es_v({},a),{universalProvider:this.signer,manualWCControl:!0}))}catch(n){throw console.warn(n),new Error("To use QR modal, please install @reown/appkit package")}if(e)try{this.modal=e}catch(n){throw this.signer.logger.error(n),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(t){if(!t)return;const{chains:e,optionalChains:n,rpcMap:i}=t;e&&Ae(e)&&(this.rpc.chains=e.map(a=>this.formatChainId(a)),e.forEach(a=>{this.rpc.rpcMap[a]=i?.[a]||this.getRpcUrl(a)})),n&&Ae(n)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=n?.map(a=>this.formatChainId(a)),n.forEach(a=>{this.rpc.rpcMap[a]=i?.[a]||this.getRpcUrl(a)}))}getRpcUrl(t,e){var n;return((n=this.rpc.rpcMap)==null?void 0:n[t])||`${dist_index_es_U}?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const t=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),e=this.session.namespaces[`${this.namespace}:${t}`]?this.session.namespaces[`${this.namespace}:${t}`]:this.session.namespaces[this.namespace];this.setChainIds(t?[this.formatChainId(t)]:e?.accounts),this.setAccounts(e?.accounts)}catch(t){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(t),await this.disconnect().catch(e=>this.signer.logger.warn(e))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(t){return typeof t=="string"||t instanceof String?[this.parseAccount(t)]:t.map(e=>this.parseAccount(e))}}const ethereum_provider_dist_index_es_Y=(/* unused pure expression or super */ null && (dist_index_es_b));var dist_index_es_H=Object.defineProperty,dist_index_es_B=Object.defineProperties,dist_index_es_F=Object.getOwnPropertyDescriptors,ethereum_provider_dist_index_es_S=Object.getOwnPropertySymbols,dist_index_es_X=Object.prototype.hasOwnProperty,ethereum_provider_dist_index_es_J=Object.prototype.propertyIsEnumerable,index_es_T=(s,t,e)=>t in s?dist_index_es_H(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,dist_index_es_R=(s,t)=>{for(var e in t||(t={}))dist_index_es_X.call(t,e)&&index_es_T(s,e,t[e]);if(ethereum_provider_dist_index_es_S)for(var e of ethereum_provider_dist_index_es_S(t))ethereum_provider_dist_index_es_J.call(t,e)&&index_es_T(s,e,t[e]);return s},index_es_Z=(s,t)=>dist_index_es_B(s,dist_index_es_F(t));function index_es_tt(s){if(s)return{"--w3m-font-family":s["--wcm-font-family"],"--w3m-accent":s["--wcm-accent-color"],"--w3m-color-mix":s["--wcm-background-color"],"--w3m-z-index":s["--wcm-z-index"]?Number(s["--wcm-z-index"]):void 0,"--w3m-qr-color":s["--wcm-accent-color"],"--w3m-font-size-master":s["--wcm-text-medium-regular-size"],"--w3m-border-radius-master":s["--wcm-container-border-radius"],"--w3m-color-mix-strength":0}}const dist_index_es_et=s=>{const[t,e]=s.split(":");return dist_index_es_W({id:e,caipNetworkId:s,chainNamespace:t,name:"",nativeCurrency:{name:"",symbol:"",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}})};function dist_index_es_st(s){var t,e,n,i,a,o,u;const c=(t=s.chains)==null?void 0:t.map(dist_index_es_et).filter(Boolean);if(c.length===0)throw new Error("At least one chain must be specified");const l=c.find(m=>{var h;return m.id===((h=s.defaultChain)==null?void 0:h.id)}),r={projectId:s.projectId,networks:c,themeMode:s.themeMode,themeVariables:index_es_tt(s.themeVariables),chainImages:s.chainImages,connectorImages:s.walletImages,defaultNetwork:l,metadata:index_es_Z(dist_index_es_R({},s.metadata),{name:((e=s.metadata)==null?void 0:e.name)||"WalletConnect",description:((n=s.metadata)==null?void 0:n.description)||"Connect to WalletConnect-compatible wallets",url:((i=s.metadata)==null?void 0:i.url)||"https://walletconnect.org",icons:((a=s.metadata)==null?void 0:a.icons)||["https://walletconnect.org/walletconnect-logo.png"]}),showWallets:!0,featuredWalletIds:s.explorerRecommendedWalletIds==="NONE"?[]:Array.isArray(s.explorerRecommendedWalletIds)?s.explorerRecommendedWalletIds:[],excludeWalletIds:s.explorerExcludedWalletIds==="ALL"?[]:Array.isArray(s.explorerExcludedWalletIds)?s.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((o=s.mobileWallets)!=null&&o.length||(u=s.desktopWallets)!=null&&u.length){const m=[...(s.mobileWallets||[]).map(g=>({id:g.id,name:g.name,links:g.links})),...(s.desktopWallets||[]).map(g=>({id:g.id,name:g.name,links:{native:g.links.native,universal:g.links.universal}}))],h=[...r.featuredWalletIds||[],...r.excludeWalletIds||[]],d=m.filter(g=>!h.includes(g.id));d.length&&(r.customWallets=d)}return r}function dist_index_es_W(s){return dist_index_es_R({formatters:void 0,fees:void 0,serializers:void 0},s)}var dist_index_es_nt=Object.freeze({__proto__:null,convertWCMToAppKitOptions:dist_index_es_st,defineChain:dist_index_es_W});
//# sourceMappingURL=index.es.js.map


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
  const bufferUtil = __webpack_require__(712627);
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

/***/ 729838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D5: () => (/* binding */ A),
/* harmony export */   U5: () => (/* binding */ E),
/* harmony export */   h6: () => (/* reexport default from dynamic */ pino__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   iP: () => (/* binding */ k),
/* harmony export */   oI: () => (/* binding */ y)
/* harmony export */ });
/* unused harmony exports MAX_LOG_SIZE_IN_BYTES_DEFAULT, PINO_CUSTOM_CONTEXT_KEY, PINO_LOGGER_DEFAULTS, formatChildLoggerContext, generateClientLogger, generateServerLogger, getBrowserLoggerContext, setBrowserLoggerContext */
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(894308);
/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(213554);
const c={level:"info"},n="custom_context",l=1e3*1024;class O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const t=new O(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const t=e.value;return e=e.next,{done:!1,value:t}}}}}class L{constructor(e,t=l){this.level=e??"error",this.levelValue=pino__WEBPACK_IMPORTED_MODULE_0__.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new d(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,t){t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.error?console.error(e):t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.warn?console.warn(e):t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.debug?console.debug(e):t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonStringify */ .h)({timestamp:new Date().toISOString(),log:e}));const t=typeof e=="string"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new d(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__/* .safeJsonStringify */ .h)({extraMetadata:e})),new Blob(t,{type:"application/json"})}}class m{constructor(e,t=l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement("a");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}}class B{constructor(e,t=l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var x=Object.defineProperty,S=Object.defineProperties,_=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,f=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&f(r,t,e[t]);if(p)for(var t of p(e))z.call(e,t)&&f(r,t,e[t]);return r},g=(r,e)=>S(r,_(e));function k(r){return g(i({},r),{level:r?.level||c.level})}function v(r,e=n){return r[e]||""}function b(r,e,t=n){return r[t]=e,r}function y(r,e=n){let t="";return typeof r.bindings>"u"?t=v(r,e):t=r.bindings().context||"",t}function w(r,e,t=n){const o=y(r,t);return o.trim()?`${o}/${e}`:e}function E(r,e,t=n){const o=w(r,e,t),a=r.child({context:o});return b(a,o,t)}function C(r){var e,t;const o=new m((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino__WEBPACK_IMPORTED_MODULE_0___default()(g(i({},r.opts),{level:"trace",browser:g(i({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I(r){var e;const t=new B((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino__WEBPACK_IMPORTED_MODULE_0___default()(g(i({},r.opts),{level:"trace"}),t),chunkLoggerController:t}}function A(r){return typeof r.loggerOverride<"u"&&typeof r.loggerOverride!="string"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<"u"?C(r):I(r)}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 739031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IJsonRpcProvider: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.kF),
/* harmony export */   formatJsonRpcError: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.dZ),
/* harmony export */   formatJsonRpcRequest: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.e_),
/* harmony export */   formatJsonRpcResult: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.Im),
/* harmony export */   getBigIntRpcId: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.eX),
/* harmony export */   isHttpUrl: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_5__.q$),
/* harmony export */   isJsonRpcError: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.U$),
/* harmony export */   isJsonRpcRequest: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.p3),
/* harmony export */   isJsonRpcResponse: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.tq),
/* harmony export */   isJsonRpcResult: () => (/* reexport safe */ _validators__WEBPACK_IMPORTED_MODULE_6__.xT),
/* harmony export */   isLocalhostUrl: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_5__.z),
/* harmony export */   isWsUrl: () => (/* reexport safe */ _url__WEBPACK_IMPORTED_MODULE_5__.A1),
/* harmony export */   parseConnectionError: () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_1__.eF),
/* harmony export */   payloadId: () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.ER)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844410);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775845);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(459872);
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "IJsonRpcProvider")) __webpack_require__.d(__webpack_exports__, { IJsonRpcProvider: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.IJsonRpcProvider; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "formatJsonRpcError")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcError: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "formatJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcRequest: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "formatJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { formatJsonRpcResult: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.formatJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "getBigIntRpcId")) __webpack_require__.d(__webpack_exports__, { getBigIntRpcId: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.getBigIntRpcId; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isHttpUrl")) __webpack_require__.d(__webpack_exports__, { isHttpUrl: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isHttpUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcError")) __webpack_require__.d(__webpack_exports__, { isJsonRpcError: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcError; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcRequest")) __webpack_require__.d(__webpack_exports__, { isJsonRpcRequest: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcRequest; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcResponse")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResponse: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcResponse; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isJsonRpcResult")) __webpack_require__.d(__webpack_exports__, { isJsonRpcResult: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isJsonRpcResult; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isLocalhostUrl")) __webpack_require__.d(__webpack_exports__, { isLocalhostUrl: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isLocalhostUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isReactNative")) __webpack_require__.d(__webpack_exports__, { isReactNative: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isReactNative; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "isWsUrl")) __webpack_require__.d(__webpack_exports__, { isWsUrl: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.isWsUrl; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_env__WEBPACK_IMPORTED_MODULE_2__, "payloadId")) __webpack_require__.d(__webpack_exports__, { payloadId: function() { return _env__WEBPACK_IMPORTED_MODULE_2__.payloadId; } });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(486668);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(396705);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(917182);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(899784);








//# sourceMappingURL=index.js.map

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

/***/ 774722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);


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

/***/ 775845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eF: () => (/* binding */ parseConnectionError),
/* harmony export */   mE: () => (/* binding */ isReservedErrorCode),
/* harmony export */   rI: () => (/* binding */ getErrorByCode),
/* harmony export */   vG: () => (/* binding */ getError)
/* harmony export */ });
/* unused harmony exports isServerErrorCode, isValidErrorCode, validateJsonRpcError */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844410);

function isServerErrorCode(code) {
    return code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .RESERVED_ERROR_CODES */ .jf.includes(code);
}
function isValidErrorCode(code) {
    return typeof code === "number";
}
function getError(type) {
    if (!Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf).includes(type)) {
        return _constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf[_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_ERROR */ .XW];
    }
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf[type];
}
function getErrorByCode(code) {
    const match = Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf).find(e => e.code === code);
    if (!match) {
        return _constants__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_ERROR_MAP */ .Uf[_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_ERROR */ .XW];
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

/***/ 827907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24434);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(739031);
class o extends _walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.IJsonRpcProvider{constructor(t){super(t),this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict((0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.formatJsonRpcRequest)(t.method,t.params||[],t.id||(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.getBigIntRpcId)().toString()),e)}async requestStrict(t,e){return new Promise(async(i,s)=>{if(!this.connection.connected)try{await this.open()}catch(n){s(n)}this.events.on(`${t.id}`,n=>{(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcError)(n)?s(n.error):i(n.result)});try{await this.connection.send(t,e)}catch(n){s(n)}})}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),(0,_walletconnect_jsonrpc_utils__WEBPACK_IMPORTED_MODULE_1__.isJsonRpcResponse)(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}onClose(t){t&&t.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)),this.events.emit("disconnect")}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),typeof t=="string"&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",t=>this.onPayload(t)),this.connection.on("close",t=>this.onClose(t)),this.connection.on("error",t=>this.events.emit("error",t)),this.connection.on("register_error",t=>this.onClose()),this.hasRegisteredEventListeners=!0)}}
//# sourceMappingURL=index.es.js.map


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

/***/ 844410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uf: () => (/* binding */ STANDARD_ERROR_MAP),
/* harmony export */   XW: () => (/* binding */ DEFAULT_ERROR),
/* harmony export */   fO: () => (/* binding */ SERVER_ERROR),
/* harmony export */   jf: () => (/* binding */ RESERVED_ERROR_CODES),
/* harmony export */   zR: () => (/* binding */ INTERNAL_ERROR)
/* harmony export */ });
/* unused harmony exports PARSE_ERROR, INVALID_REQUEST, METHOD_NOT_FOUND, INVALID_PARAMS, SERVER_ERROR_CODE_RANGE */
const PARSE_ERROR = "PARSE_ERROR";
const INVALID_REQUEST = "INVALID_REQUEST";
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
const INVALID_PARAMS = "INVALID_PARAMS";
const INTERNAL_ERROR = "INTERNAL_ERROR";
const SERVER_ERROR = "SERVER_ERROR";
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
const SERVER_ERROR_CODE_RANGE = (/* unused pure expression or super */ null && ([-32000, -32099]));
const STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: { code: -32700, message: "Parse error" },
    [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
    [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
    [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
    [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
    [SERVER_ERROR]: { code: -32000, message: "Server error" },
};
const DEFAULT_ERROR = SERVER_ERROR;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 846270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);


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

/***/ 893532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VH: () => (/* binding */ i),
/* harmony export */   li: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports HEARTBEAT_INTERVAL, IHeartBeat */
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24434);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388900);
/* harmony import */ var _walletconnect_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_time__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walletconnect_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(204556);
class n extends _walletconnect_events__WEBPACK_IMPORTED_MODULE_2__/* .IEvents */ .H{constructor(e){super()}}const s=_walletconnect_time__WEBPACK_IMPORTED_MODULE_1__.FIVE_SECONDS,r={pulse:"heartbeat_pulse"};class i extends n{constructor(e){super(e),this.events=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.interval=s,this.interval=e?.interval||s}static async init(e){const t=new i(e);return await t.init(),t}async init(){await this.initialize()}stop(){clearInterval(this.intervalRef)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}off(e,t){this.events.off(e,t)}removeListener(e,t){this.events.removeListener(e,t)}async initialize(){this.intervalRef=setInterval(()=>this.pulse(),(0,_walletconnect_time__WEBPACK_IMPORTED_MODULE_1__.toMiliseconds)(this.interval))}pulse(){this.events.emit(r.pulse)}}
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ 894308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(365606);

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

/***/ 899784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U$: () => (/* binding */ isJsonRpcError),
/* harmony export */   p3: () => (/* binding */ isJsonRpcRequest),
/* harmony export */   tq: () => (/* binding */ isJsonRpcResponse),
/* harmony export */   xT: () => (/* binding */ isJsonRpcResult)
/* harmony export */ });
/* unused harmony exports isJsonRpcPayload, isJsonRpcValidationInvalid */
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

/***/ 917182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A1: () => (/* binding */ isWsUrl),
/* harmony export */   q$: () => (/* binding */ isHttpUrl),
/* harmony export */   z: () => (/* binding */ isLocalhostUrl)
/* harmony export */ });
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

/***/ 979244:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
exports.ONE_HUNDRED = 100;
exports.ONE_THOUSAND = 1000;
//# sourceMappingURL=misc.js.map

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

/***/ 988163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Fo: () => (/* binding */ bases)
});

// UNUSED EXPORTS: CID, bytes, codecs, digest, hasher, hashes, varint

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


/***/ }),

/***/ 992493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const b2b = __webpack_require__(74156)
const b2s = __webpack_require__(551843)

module.exports = {
  blake2b: b2b.blake2b,
  blake2bHex: b2b.blake2bHex,
  blake2bInit: b2b.blake2bInit,
  blake2bUpdate: b2b.blake2bUpdate,
  blake2bFinal: b2b.blake2bFinal,
  blake2s: b2s.blake2s,
  blake2sHex: b2s.blake2sHex,
  blake2sInit: b2s.blake2sInit,
  blake2sUpdate: b2s.blake2sUpdate,
  blake2sFinal: b2s.blake2sFinal
}


/***/ })

};
;