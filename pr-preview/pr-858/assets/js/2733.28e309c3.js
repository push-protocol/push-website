exports.id = 2733;
exports.ids = [2733];
exports.modules = {

/***/ 67495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ esm)
});

// EXTERNAL MODULE: ./node_modules/sturdy-websocket/dist/index.js
var dist = __webpack_require__(688117);
;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/core.js
/* eslint-disable no-use-before-define */

/**
 * Base class for inheritance.
 */
class Base {
  /**
   * Extends this object and runs the init method.
   * Arguments to create() will be passed to init().
   *
   * @return {Object} The new object.
   *
   * @static
   *
   * @example
   *
   *     var instance = MyType.create();
   */
  static create(...args) {
    return new this(...args);
  }

  /**
   * Copies properties into this object.
   *
   * @param {Object} properties The properties to mix in.
   *
   * @example
   *
   *     MyType.mixIn({
   *         field: 'value'
   *     });
   */
  mixIn(properties) {
    return Object.assign(this, properties);
  }

  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = instance.clone();
   */
  clone() {
    const clone = new this.constructor();
    Object.assign(clone, this);
    return clone;
  }
}

/**
 * An array of 32-bit words.
 *
 * @property {Array} words The array of 32-bit words.
 * @property {number} sigBytes The number of significant bytes in this word array.
 */
class WordArray extends Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of 32-bit words.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.create();
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
   */
  constructor(words = [], sigBytes = words.length * 4) {
    super();

    let typedArray = words;
    // Convert buffers to uint8
    if (typedArray instanceof ArrayBuffer) {
      typedArray = new Uint8Array(typedArray);
    }

    // Convert other array views to uint8
    if (
      typedArray instanceof Int8Array
      || typedArray instanceof Uint8ClampedArray
      || typedArray instanceof Int16Array
      || typedArray instanceof Uint16Array
      || typedArray instanceof Int32Array
      || typedArray instanceof Uint32Array
      || typedArray instanceof Float32Array
      || typedArray instanceof Float64Array
    ) {
      typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    }

    // Handle Uint8Array
    if (typedArray instanceof Uint8Array) {
      // Shortcut
      const typedArrayByteLength = typedArray.byteLength;

      // Extract bytes
      const _words = [];
      for (let i = 0; i < typedArrayByteLength; i += 1) {
        _words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
      }

      // Initialize this word array
      this.words = _words;
      this.sigBytes = typedArrayByteLength;
    } else {
      // Else call normal init
      this.words = words;
      this.sigBytes = sigBytes;
    }
  }

  /**
   * Creates a word array filled with random bytes.
   *
   * @param {number} nBytes The number of random bytes to generate.
   *
   * @return {WordArray} The random word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.random(16);
   */
  static random(nBytes) {
    const words = [];

    const r = (m_w) => {
      let _m_w = m_w;
      let _m_z = 0x3ade68b1;
      const mask = 0xffffffff;

      return () => {
        _m_z = (0x9069 * (_m_z & 0xFFFF) + (_m_z >> 0x10)) & mask;
        _m_w = (0x4650 * (_m_w & 0xFFFF) + (_m_w >> 0x10)) & mask;
        let result = ((_m_z << 0x10) + _m_w) & mask;
        result /= 0x100000000;
        result += 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    };

    for (let i = 0, rcache; i < nBytes; i += 4) {
      const _r = r((rcache || Math.random()) * 0x100000000);

      rcache = _r() * 0x3ade67b7;
      words.push((_r() * 0x100000000) | 0);
    }

    return new WordArray(words, nBytes);
  }

  /**
   * Converts this word array to a string.
   *
   * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
   *
   * @return {string} The stringified word array.
   *
   * @example
   *
   *     var string = wordArray + '';
   *     var string = wordArray.toString();
   *     var string = wordArray.toString(CryptoJS.enc.Utf8);
   */
  toString(encoder = Hex) {
    return encoder.stringify(this);
  }

  /**
   * Concatenates a word array to this word array.
   *
   * @param {WordArray} wordArray The word array to append.
   *
   * @return {WordArray} This word array.
   *
   * @example
   *
   *     wordArray1.concat(wordArray2);
   */
  concat(wordArray) {
    // Shortcuts
    const thisWords = this.words;
    const thatWords = wordArray.words;
    const thisSigBytes = this.sigBytes;
    const thatSigBytes = wordArray.sigBytes;

    // Clamp excess bits
    this.clamp();

    // Concat
    if (thisSigBytes % 4) {
      // Copy one byte at a time
      for (let i = 0; i < thatSigBytes; i += 1) {
        const thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
      }
    } else {
      // Copy one word at a time
      for (let i = 0; i < thatSigBytes; i += 4) {
        thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
      }
    }
    this.sigBytes += thatSigBytes;

    // Chainable
    return this;
  }

  /**
   * Removes insignificant bits.
   *
   * @example
   *
   *     wordArray.clamp();
   */
  clamp() {
    // Shortcuts
    const { words, sigBytes } = this;

    // Clamp
    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    words.length = Math.ceil(sigBytes / 4);
  }

  /**
   * Creates a copy of this word array.
   *
   * @return {WordArray} The clone.
   *
   * @example
   *
   *     var clone = wordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone.words = this.words.slice(0);

    return clone;
  }
}

/**
 * Hex encoding strategy.
 */
const Hex = {
  /**
   * Converts a word array to a hex string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The hex string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const hexChars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      hexChars.push((bite >>> 4).toString(16));
      hexChars.push((bite & 0x0f).toString(16));
    }

    return hexChars.join('');
  },

  /**
   * Converts a hex string to a word array.
   *
   * @param {string} hexStr The hex string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
   */
  parse(hexStr) {
    // Shortcut
    const hexStrLength = hexStr.length;

    // Convert
    const words = [];
    for (let i = 0; i < hexStrLength; i += 2) {
      words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
    }

    return new WordArray(words, hexStrLength / 2);
  },
};

/**
 * Latin1 encoding strategy.
 */
const Latin1 = {
  /**
   * Converts a word array to a Latin1 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Latin1 string.
   *
   * @static
   *
   * @example
   *
   *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const latin1Chars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      latin1Chars.push(String.fromCharCode(bite));
    }

    return latin1Chars.join('');
  },

  /**
   * Converts a Latin1 string to a word array.
   *
   * @param {string} latin1Str The Latin1 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
   */
  parse(latin1Str) {
    // Shortcut
    const latin1StrLength = latin1Str.length;

    // Convert
    const words = [];
    for (let i = 0; i < latin1StrLength; i += 1) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
    }

    return new WordArray(words, latin1StrLength);
  },
};

/**
 * UTF-8 encoding strategy.
 */
const Utf8 = {
  /**
   * Converts a word array to a UTF-8 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-8 string.
   *
   * @static
   *
   * @example
   *
   *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
   */
  stringify(wordArray) {
    try {
      return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    } catch (e) {
      throw new Error('Malformed UTF-8 data');
    }
  },

  /**
   * Converts a UTF-8 string to a word array.
   *
   * @param {string} utf8Str The UTF-8 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
   */
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  },
};

/**
 * Abstract buffered block algorithm template.
 *
 * The property blockSize must be implemented in a concrete subtype.
 *
 * @property {number} _minBufferSize
 *
 *     The number of blocks that should be kept unprocessed in the buffer. Default: 0
 */
class BufferedBlockAlgorithm extends Base {
  constructor() {
    super();
    this._minBufferSize = 0;
  }

  /**
   * Resets this block algorithm's data buffer to its initial state.
   *
   * @example
   *
   *     bufferedBlockAlgorithm.reset();
   */
  reset() {
    // Initial values
    this._data = new WordArray();
    this._nDataBytes = 0;
  }

  /**
   * Adds new data to this block algorithm's buffer.
   *
   * @param {WordArray|string} data
   *
   *     The data to append. Strings are converted to a WordArray using UTF-8.
   *
   * @example
   *
   *     bufferedBlockAlgorithm._append('data');
   *     bufferedBlockAlgorithm._append(wordArray);
   */
  _append(data) {
    let m_data = data;

    // Convert string to WordArray, else assume WordArray already
    if (typeof m_data === 'string') {
      m_data = Utf8.parse(m_data);
    }

    // Append
    this._data.concat(m_data);
    this._nDataBytes += m_data.sigBytes;
  }

  /**
   * Processes available data blocks.
   *
   * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
   *
   * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
   *
   * @return {WordArray} The processed data.
   *
   * @example
   *
   *     var processedData = bufferedBlockAlgorithm._process();
   *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
   */
  _process(doFlush) {
    let processedWords;

    // Shortcuts
    const { _data: data, blockSize } = this;
    const dataWords = data.words;
    const dataSigBytes = data.sigBytes;
    const blockSizeBytes = blockSize * 4;

    // Count blocks ready
    let nBlocksReady = dataSigBytes / blockSizeBytes;
    if (doFlush) {
      // Round up to include partial blocks
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      // Round down to include only full blocks,
      // less the number of blocks that must remain in the buffer
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }

    // Count words ready
    const nWordsReady = nBlocksReady * blockSize;

    // Count bytes ready
    const nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

    // Process blocks
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += blockSize) {
        // Perform concrete-algorithm logic
        this._doProcessBlock(dataWords, offset);
      }

      // Remove processed words
      processedWords = dataWords.splice(0, nWordsReady);
      data.sigBytes -= nBytesReady;
    }

    // Return processed words
    return new WordArray(processedWords, nBytesReady);
  }

  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = bufferedBlockAlgorithm.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone._data = this._data.clone();

    return clone;
  }
}

/**
 * Abstract hasher template.
 *
 * @property {number} blockSize
 *
 *     The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
 */
class Hasher extends BufferedBlockAlgorithm {
  constructor(cfg) {
    super();

    this.blockSize = 512 / 32;

    /**
     * Configuration options.
     */
    this.cfg = Object.assign(new Base(), cfg);

    // Set initial values
    this.reset();
  }

  /**
   * Creates a shortcut function to a hasher's object interface.
   *
   * @param {Hasher} SubHasher The hasher to create a helper for.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
   */
  static _createHelper(SubHasher) {
    return (message, cfg) => new SubHasher(cfg).finalize(message);
  }

  /**
   * Creates a shortcut function to the HMAC's object interface.
   *
   * @param {Hasher} SubHasher The hasher to use in this HMAC helper.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
   */
  static _createHmacHelper(SubHasher) {
    return (message, key) => new HMAC(SubHasher, key).finalize(message);
  }

  /**
   * Resets this hasher to its initial state.
   *
   * @example
   *
   *     hasher.reset();
   */
  reset() {
    // Reset data buffer
    super.reset.call(this);

    // Perform concrete-hasher logic
    this._doReset();
  }

  /**
   * Updates this hasher with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {Hasher} This hasher.
   *
   * @example
   *
   *     hasher.update('message');
   *     hasher.update(wordArray);
   */
  update(messageUpdate) {
    // Append
    this._append(messageUpdate);

    // Update the hash
    this._process();

    // Chainable
    return this;
  }

  /**
   * Finalizes the hash computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The hash.
   *
   * @example
   *
   *     var hash = hasher.finalize();
   *     var hash = hasher.finalize('message');
   *     var hash = hasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    // Final message update
    if (messageUpdate) {
      this._append(messageUpdate);
    }

    // Perform concrete-hasher logic
    const hash = this._doFinalize();

    return hash;
  }
}

/**
 * HMAC algorithm.
 */
class HMAC extends Base {
  /**
   * Initializes a newly created HMAC.
   *
   * @param {Hasher} SubHasher The hash algorithm to use.
   * @param {WordArray|string} key The secret key.
   *
   * @example
   *
   *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
   */
  constructor(SubHasher, key) {
    super();

    const hasher = new SubHasher();
    this._hasher = hasher;

    // Convert string to WordArray, else assume WordArray already
    let _key = key;
    if (typeof _key === 'string') {
      _key = Utf8.parse(_key);
    }

    // Shortcuts
    const hasherBlockSize = hasher.blockSize;
    const hasherBlockSizeBytes = hasherBlockSize * 4;

    // Allow arbitrary length keys
    if (_key.sigBytes > hasherBlockSizeBytes) {
      _key = hasher.finalize(key);
    }

    // Clamp excess bits
    _key.clamp();

    // Clone key for inner and outer pads
    const oKey = _key.clone();
    this._oKey = oKey;
    const iKey = _key.clone();
    this._iKey = iKey;

    // Shortcuts
    const oKeyWords = oKey.words;
    const iKeyWords = iKey.words;

    // XOR keys with pad constants
    for (let i = 0; i < hasherBlockSize; i += 1) {
      oKeyWords[i] ^= 0x5c5c5c5c;
      iKeyWords[i] ^= 0x36363636;
    }
    oKey.sigBytes = hasherBlockSizeBytes;
    iKey.sigBytes = hasherBlockSizeBytes;

    // Set initial values
    this.reset();
  }

  /**
   * Resets this HMAC to its initial state.
   *
   * @example
   *
   *     hmacHasher.reset();
   */
  reset() {
    // Shortcut
    const hasher = this._hasher;

    // Reset
    hasher.reset();
    hasher.update(this._iKey);
  }

  /**
   * Updates this HMAC with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {HMAC} This HMAC instance.
   *
   * @example
   *
   *     hmacHasher.update('message');
   *     hmacHasher.update(wordArray);
   */
  update(messageUpdate) {
    this._hasher.update(messageUpdate);

    // Chainable
    return this;
  }

  /**
   * Finalizes the HMAC computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The HMAC.
   *
   * @example
   *
   *     var hmac = hmacHasher.finalize();
   *     var hmac = hmacHasher.finalize('message');
   *     var hmac = hmacHasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    // Shortcut
    const hasher = this._hasher;

    // Compute HMAC
    const innerHash = hasher.finalize(messageUpdate);
    hasher.reset();
    const hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

    return hmac;
  }
}

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/x64-core.js


const X32WordArray = WordArray;

/**
 * A 64-bit word.
 */
class X64Word extends Base {
  /**
   * Initializes a newly created 64-bit word.
   *
   * @param {number} high The high 32 bits.
   * @param {number} low The low 32 bits.
   *
   * @example
   *
   *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
   */
  constructor(high, low) {
    super();

    this.high = high;
    this.low = low;
  }
}

/**
 * An array of 64-bit words.
 *
 * @property {Array} words The array of CryptoJS.x64.Word objects.
 * @property {number} sigBytes The number of significant bytes in this word array.
 */
class X64WordArray extends Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.x64.WordArray.create();
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ]);
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ], 10);
   */
  constructor(words = [], sigBytes = words.length * 8) {
    super();

    this.words = words;
    this.sigBytes = sigBytes;
  }

  /**
   * Converts this 64-bit word array to a 32-bit word array.
   *
   * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
   *
   * @example
   *
   *     var x32WordArray = x64WordArray.toX32();
   */
  toX32() {
    // Shortcuts
    const x64Words = this.words;
    const x64WordsLength = x64Words.length;

    // Convert
    const x32Words = [];
    for (let i = 0; i < x64WordsLength; i += 1) {
      const x64Word = x64Words[i];
      x32Words.push(x64Word.high);
      x32Words.push(x64Word.low);
    }

    return X32WordArray.create(x32Words, this.sigBytes);
  }

  /**
   * Creates a copy of this word array.
   *
   * @return {X64WordArray} The clone.
   *
   * @example
   *
   *     var clone = x64WordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);

    // Clone "words" array
    clone.words = this.words.slice(0);
    const { words } = clone;

    // Clone each X64Word object
    const wordsLength = words.length;
    for (let i = 0; i < wordsLength; i += 1) {
      words[i] = words[i].clone();
    }

    return clone;
  }
}

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/enc-base64.js


const parseLoop = (base64Str, base64StrLength, reverseMap) => {
  const words = [];
  let nBytes = 0;
  for (let i = 0; i < base64StrLength; i += 1) {
    if (i % 4) {
      const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
      const bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
      const bitsCombined = bits1 | bits2;
      words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
      nBytes += 1;
    }
  }
  return WordArray.create(words, nBytes);
};

/**
 * Base64 encoding strategy.
 */
const Base64 = {
  /**
   * Converts a word array to a Base64 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Base64 string.
   *
   * @static
   *
   * @example
   *
   *     const base64String = CryptoJS.enc.Base64.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;
    const map = this._map;

    // Clamp excess bits
    wordArray.clamp();

    // Convert
    const base64Chars = [];
    for (let i = 0; i < sigBytes; i += 3) {
      const byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      const byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
      const byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

      const triplet = (byte1 << 16) | (byte2 << 8) | byte3;

      for (let j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j += 1) {
        base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
      }
    }

    // Add padding
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      while (base64Chars.length % 4) {
        base64Chars.push(paddingChar);
      }
    }

    return base64Chars.join('');
  },

  /**
   * Converts a Base64 string to a word array.
   *
   * @param {string} base64Str The Base64 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Base64.parse(base64String);
   */
  parse(base64Str) {
    // Shortcuts
    let base64StrLength = base64Str.length;
    const map = this._map;
    let reverseMap = this._reverseMap;

    if (!reverseMap) {
      this._reverseMap = [];
      reverseMap = this._reverseMap;
      for (let j = 0; j < map.length; j += 1) {
        reverseMap[map.charCodeAt(j)] = j;
      }
    }

    // Ignore padding
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      const paddingIndex = base64Str.indexOf(paddingChar);
      if (paddingIndex !== -1) {
        base64StrLength = paddingIndex;
      }
    }

    // Convert
    return parseLoop(base64Str, base64StrLength, reverseMap);
  },

  _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/md5.js


// Constants table
const T = [];

// Compute constants
for (let i = 0; i < 64; i += 1) {
  T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
}

const FF = (a, b, c, d, x, s, t) => {
  const n = a + ((b & c) | (~b & d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const GG = (a, b, c, d, x, s, t) => {
  const n = a + ((b & d) | (c & ~d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const HH = (a, b, c, d, x, s, t) => {
  const n = a + (b ^ c ^ d) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const II = (a, b, c, d, x, s, t) => {
  const n = a + (c ^ (b | ~d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

/**
 * MD5 hash algorithm.
 */
class MD5Algo extends Hasher {
  _doReset() {
    this._hash = new WordArray([
      0x67452301,
      0xefcdab89,
      0x98badcfe,
      0x10325476,
    ]);
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Swap endian
    for (let i = 0; i < 16; i += 1) {
      // Shortcuts
      const offset_i = offset + i;
      const M_offset_i = M[offset_i];

      _M[offset_i] = (
        (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
          | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
      );
    }

    // Shortcuts
    const H = this._hash.words;

    const M_offset_0 = _M[offset + 0];
    const M_offset_1 = _M[offset + 1];
    const M_offset_2 = _M[offset + 2];
    const M_offset_3 = _M[offset + 3];
    const M_offset_4 = _M[offset + 4];
    const M_offset_5 = _M[offset + 5];
    const M_offset_6 = _M[offset + 6];
    const M_offset_7 = _M[offset + 7];
    const M_offset_8 = _M[offset + 8];
    const M_offset_9 = _M[offset + 9];
    const M_offset_10 = _M[offset + 10];
    const M_offset_11 = _M[offset + 11];
    const M_offset_12 = _M[offset + 12];
    const M_offset_13 = _M[offset + 13];
    const M_offset_14 = _M[offset + 14];
    const M_offset_15 = _M[offset + 15];

    // Working varialbes
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];

    // Computation
    a = FF(a, b, c, d, M_offset_0, 7, T[0]);
    d = FF(d, a, b, c, M_offset_1, 12, T[1]);
    c = FF(c, d, a, b, M_offset_2, 17, T[2]);
    b = FF(b, c, d, a, M_offset_3, 22, T[3]);
    a = FF(a, b, c, d, M_offset_4, 7, T[4]);
    d = FF(d, a, b, c, M_offset_5, 12, T[5]);
    c = FF(c, d, a, b, M_offset_6, 17, T[6]);
    b = FF(b, c, d, a, M_offset_7, 22, T[7]);
    a = FF(a, b, c, d, M_offset_8, 7, T[8]);
    d = FF(d, a, b, c, M_offset_9, 12, T[9]);
    c = FF(c, d, a, b, M_offset_10, 17, T[10]);
    b = FF(b, c, d, a, M_offset_11, 22, T[11]);
    a = FF(a, b, c, d, M_offset_12, 7, T[12]);
    d = FF(d, a, b, c, M_offset_13, 12, T[13]);
    c = FF(c, d, a, b, M_offset_14, 17, T[14]);
    b = FF(b, c, d, a, M_offset_15, 22, T[15]);

    a = GG(a, b, c, d, M_offset_1, 5, T[16]);
    d = GG(d, a, b, c, M_offset_6, 9, T[17]);
    c = GG(c, d, a, b, M_offset_11, 14, T[18]);
    b = GG(b, c, d, a, M_offset_0, 20, T[19]);
    a = GG(a, b, c, d, M_offset_5, 5, T[20]);
    d = GG(d, a, b, c, M_offset_10, 9, T[21]);
    c = GG(c, d, a, b, M_offset_15, 14, T[22]);
    b = GG(b, c, d, a, M_offset_4, 20, T[23]);
    a = GG(a, b, c, d, M_offset_9, 5, T[24]);
    d = GG(d, a, b, c, M_offset_14, 9, T[25]);
    c = GG(c, d, a, b, M_offset_3, 14, T[26]);
    b = GG(b, c, d, a, M_offset_8, 20, T[27]);
    a = GG(a, b, c, d, M_offset_13, 5, T[28]);
    d = GG(d, a, b, c, M_offset_2, 9, T[29]);
    c = GG(c, d, a, b, M_offset_7, 14, T[30]);
    b = GG(b, c, d, a, M_offset_12, 20, T[31]);

    a = HH(a, b, c, d, M_offset_5, 4, T[32]);
    d = HH(d, a, b, c, M_offset_8, 11, T[33]);
    c = HH(c, d, a, b, M_offset_11, 16, T[34]);
    b = HH(b, c, d, a, M_offset_14, 23, T[35]);
    a = HH(a, b, c, d, M_offset_1, 4, T[36]);
    d = HH(d, a, b, c, M_offset_4, 11, T[37]);
    c = HH(c, d, a, b, M_offset_7, 16, T[38]);
    b = HH(b, c, d, a, M_offset_10, 23, T[39]);
    a = HH(a, b, c, d, M_offset_13, 4, T[40]);
    d = HH(d, a, b, c, M_offset_0, 11, T[41]);
    c = HH(c, d, a, b, M_offset_3, 16, T[42]);
    b = HH(b, c, d, a, M_offset_6, 23, T[43]);
    a = HH(a, b, c, d, M_offset_9, 4, T[44]);
    d = HH(d, a, b, c, M_offset_12, 11, T[45]);
    c = HH(c, d, a, b, M_offset_15, 16, T[46]);
    b = HH(b, c, d, a, M_offset_2, 23, T[47]);

    a = II(a, b, c, d, M_offset_0, 6, T[48]);
    d = II(d, a, b, c, M_offset_7, 10, T[49]);
    c = II(c, d, a, b, M_offset_14, 15, T[50]);
    b = II(b, c, d, a, M_offset_5, 21, T[51]);
    a = II(a, b, c, d, M_offset_12, 6, T[52]);
    d = II(d, a, b, c, M_offset_3, 10, T[53]);
    c = II(c, d, a, b, M_offset_10, 15, T[54]);
    b = II(b, c, d, a, M_offset_1, 21, T[55]);
    a = II(a, b, c, d, M_offset_8, 6, T[56]);
    d = II(d, a, b, c, M_offset_15, 10, T[57]);
    c = II(c, d, a, b, M_offset_6, 15, T[58]);
    b = II(b, c, d, a, M_offset_13, 21, T[59]);
    a = II(a, b, c, d, M_offset_4, 6, T[60]);
    d = II(d, a, b, c, M_offset_11, 10, T[61]);
    c = II(c, d, a, b, M_offset_2, 15, T[62]);
    b = II(b, c, d, a, M_offset_9, 21, T[63]);

    // Intermediate hash value
    H[0] = (H[0] + a) | 0;
    H[1] = (H[1] + b) | 0;
    H[2] = (H[2] + c) | 0;
    H[3] = (H[3] + d) | 0;
  }
  /* eslint-ensable no-param-reassign */

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));

    const nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
    const nBitsTotalL = nBitsTotal;
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
      (((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff)
        | (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00)
    );
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff)
        | (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00)
    );

    data.sigBytes = (dataWords.length + 1) * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const hash = this._hash;
    const H = hash.words;

    // Swap endian
    for (let i = 0; i < 4; i += 1) {
      // Shortcut
      const H_i = H[i];

      H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
        | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
    }

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.MD5('message');
 *     var hash = CryptoJS.MD5(wordArray);
 */
const MD5 = Hasher._createHelper(MD5Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacMD5(message, key);
 */
const HmacMD5 = Hasher._createHmacHelper(MD5Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/evpkdf.js



/**
 * This key derivation function is meant to conform with EVP_BytesToKey.
 * www.openssl.org/docs/crypto/EVP_BytesToKey.html
 */
class EvpKDFAlgo extends Base {
  /**
   * Initializes a newly created key derivation function.
   *
   * @param {Object} cfg (Optional) The configuration options to use for the derivation.
   *
   * @example
   *
   *     const kdf = CryptoJS.algo.EvpKDF.create();
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
   */
  constructor(cfg) {
    super();

    /**
     * Configuration options.
     *
     * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
     * @property {Hasher} hasher The hash algorithm to use. Default: MD5
     * @property {number} iterations The number of iterations to perform. Default: 1
     */
    this.cfg = Object.assign(
      new Base(),
      {
        keySize: 128 / 32,
        hasher: MD5Algo,
        iterations: 1,
      },
      cfg,
    );
  }

  /**
   * Derives a key from a password.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   *
   * @return {WordArray} The derived key.
   *
   * @example
   *
   *     const key = kdf.compute(password, salt);
   */
  compute(password, salt) {
    let block;

    // Shortcut
    const { cfg } = this;

    // Init hasher
    const hasher = cfg.hasher.create();

    // Initial values
    const derivedKey = WordArray.create();

    // Shortcuts
    const derivedKeyWords = derivedKey.words;
    const { keySize, iterations } = cfg;

    // Generate key
    while (derivedKeyWords.length < keySize) {
      if (block) {
        hasher.update(block);
      }
      block = hasher.update(password).finalize(salt);
      hasher.reset();

      // Iterations
      for (let i = 1; i < iterations; i += 1) {
        block = hasher.finalize(block);
        hasher.reset();
      }

      derivedKey.concat(block);
    }
    derivedKey.sigBytes = keySize * 4;

    return derivedKey;
  }
}

/**
 * Derives a key from a password.
 *
 * @param {WordArray|string} password The password.
 * @param {WordArray|string} salt A salt.
 * @param {Object} cfg (Optional) The configuration options to use for this computation.
 *
 * @return {WordArray} The derived key.
 *
 * @static
 *
 * @example
 *
 *     var key = CryptoJS.EvpKDF(password, salt);
 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
 */
const EvpKDF = (password, salt, cfg) => EvpKDFAlgo.create(cfg).compute(password, salt);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/cipher-core.js
/* eslint-disable no-use-before-define */





/**
 * Abstract base cipher template.
 *
 * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
 * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
 * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
 * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
 */
class Cipher extends BufferedBlockAlgorithm {
  /**
   * Initializes a newly created cipher.
   *
   * @param {number} xformMode Either the encryption or decryption transormation mode constant.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.create(
   *       CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
   *     );
   */
  constructor(xformMode, key, cfg) {
    super();

    /**
     * Configuration options.
     *
     * @property {WordArray} iv The IV to use for this operation.
     */
    this.cfg = Object.assign(new Base(), cfg);

    // Store transform mode and key
    this._xformMode = xformMode;
    this._key = key;

    // Set initial values
    this.reset();
  }

  /**
   * Creates this cipher in encryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
   */
  static createEncryptor(key, cfg) {
    return this.create(this._ENC_XFORM_MODE, key, cfg);
  }

  /**
   * Creates this cipher in decryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
   */
  static createDecryptor(key, cfg) {
    return this.create(this._DEC_XFORM_MODE, key, cfg);
  }

  /**
   * Creates shortcut functions to a cipher's object interface.
   *
   * @param {Cipher} cipher The cipher to create a helper for.
   *
   * @return {Object} An object with encrypt and decrypt shortcut functions.
   *
   * @static
   *
   * @example
   *
   *     const AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
   */
  static _createHelper(SubCipher) {
    const selectCipherStrategy = (key) => {
      if (typeof key === 'string') {
        return PasswordBasedCipher;
      }
      return SerializableCipher;
    };

    return {
      encrypt(message, key, cfg) {
        return selectCipherStrategy(key).encrypt(SubCipher, message, key, cfg);
      },

      decrypt(ciphertext, key, cfg) {
        return selectCipherStrategy(key).decrypt(SubCipher, ciphertext, key, cfg);
      },
    };
  }

  /**
   * Resets this cipher to its initial state.
   *
   * @example
   *
   *     cipher.reset();
   */
  reset() {
    // Reset data buffer
    super.reset.call(this);

    // Perform concrete-cipher logic
    this._doReset();
  }

  /**
   * Adds data to be encrypted or decrypted.
   *
   * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
   *
   * @return {WordArray} The data after processing.
   *
   * @example
   *
   *     const encrypted = cipher.process('data');
   *     const encrypted = cipher.process(wordArray);
   */
  process(dataUpdate) {
    // Append
    this._append(dataUpdate);

    // Process available blocks
    return this._process();
  }

  /**
   * Finalizes the encryption or decryption process.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
   *
   * @return {WordArray} The data after final processing.
   *
   * @example
   *
   *     const encrypted = cipher.finalize();
   *     const encrypted = cipher.finalize('data');
   *     const encrypted = cipher.finalize(wordArray);
   */
  finalize(dataUpdate) {
    // Final data update
    if (dataUpdate) {
      this._append(dataUpdate);
    }

    // Perform concrete-cipher logic
    const finalProcessedData = this._doFinalize();

    return finalProcessedData;
  }
}
Cipher._ENC_XFORM_MODE = 1;
Cipher._DEC_XFORM_MODE = 2;
Cipher.keySize = 128 / 32;
Cipher.ivSize = 128 / 32;

/**
 * Abstract base stream cipher template.
 *
 * @property {number} blockSize
 *
 *     The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
 */
class StreamCipher extends Cipher {
  constructor(...args) {
    super(...args);

    this.blockSize = 1;
  }

  _doFinalize() {
    // Process partial blocks
    const finalProcessedBlocks = this._process(!!'flush');

    return finalProcessedBlocks;
  }
}

/**
 * Abstract base block cipher mode template.
 */
class BlockCipherMode extends Base {
  /**
   * Initializes a newly created mode.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
   */
  constructor(cipher, iv) {
    super();

    this._cipher = cipher;
    this._iv = iv;
  }

  /**
   * Creates this mode for encryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
   */
  static createEncryptor(cipher, iv) {
    return this.Encryptor.create(cipher, iv);
  }

  /**
   * Creates this mode for decryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
   */
  static createDecryptor(cipher, iv) {
    return this.Decryptor.create(cipher, iv);
  }
}

function xorBlock(words, offset, blockSize) {
  const _words = words;
  let block;

  // Shortcut
  const iv = this._iv;

  // Choose mixing block
  if (iv) {
    block = iv;

    // Remove IV for subsequent blocks
    this._iv = undefined;
  } else {
    block = this._prevBlock;
  }

  // XOR blocks
  for (let i = 0; i < blockSize; i += 1) {
    _words[offset + i] ^= block[i];
  }
}

/**
 * Cipher Block Chaining mode.
 */

/**
 * Abstract base CBC mode.
 */
class CBC extends BlockCipherMode {
}
/**
 * CBC encryptor.
 */
CBC.Encryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    // XOR and encrypt
    xorBlock.call(this, words, offset, blockSize);
    cipher.encryptBlock(words, offset);

    // Remember this block to use with next block
    this._prevBlock = words.slice(offset, offset + blockSize);
  }
};
/**
 * CBC decryptor.
 */
CBC.Decryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    // Remember this block to use with next block
    const thisBlock = words.slice(offset, offset + blockSize);

    // Decrypt and XOR
    cipher.decryptBlock(words, offset);
    xorBlock.call(this, words, offset, blockSize);

    // This block becomes the previous block
    this._prevBlock = thisBlock;
  }
};

/**
 * PKCS #5/7 padding strategy.
 */
const Pkcs7 = {
  /**
   * Pads data using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
   */
  pad(data, blockSize) {
    // Shortcut
    const blockSizeBytes = blockSize * 4;

    // Count padding bytes
    const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);

    // Create padding word
    const paddingWord = (nPaddingBytes << 24)
      | (nPaddingBytes << 16)
      | (nPaddingBytes << 8)
      | nPaddingBytes;

    // Create padding
    const paddingWords = [];
    for (let i = 0; i < nPaddingBytes; i += 4) {
      paddingWords.push(paddingWord);
    }
    const padding = WordArray.create(paddingWords, nPaddingBytes);

    // Add padding
    data.concat(padding);
  },

  /**
   * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to unpad.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.unpad(wordArray);
   */
  unpad(data) {
    const _data = data;

    // Get number of padding bytes from last byte
    const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

    // Remove padding
    _data.sigBytes -= nPaddingBytes;
  },
};

/**
 * Abstract base block cipher template.
 *
 * @property {number} blockSize
 *
 *    The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
 */
class BlockCipher extends Cipher {
  constructor(xformMode, key, cfg) {
    /**
     * Configuration options.
     *
     * @property {Mode} mode The block mode to use. Default: CBC
     * @property {Padding} padding The padding strategy to use. Default: Pkcs7
     */
    super(xformMode, key, Object.assign(
      {
        mode: CBC,
        padding: Pkcs7,
      },
      cfg,
    ));

    this.blockSize = 128 / 32;
  }

  reset() {
    let modeCreator;

    // Reset cipher
    super.reset.call(this);

    // Shortcuts
    const { cfg } = this;
    const { iv, mode } = cfg;

    // Reset block mode
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      modeCreator = mode.createEncryptor;
    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
      modeCreator = mode.createDecryptor;
      // Keep at least one block in the buffer for unpadding
      this._minBufferSize = 1;
    }

    this._mode = modeCreator.call(mode, this, iv && iv.words);
    this._mode.__creator = modeCreator;
  }

  _doProcessBlock(words, offset) {
    this._mode.processBlock(words, offset);
  }

  _doFinalize() {
    let finalProcessedBlocks;

    // Shortcut
    const { padding } = this.cfg;

    // Finalize
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      // Pad data
      padding.pad(this._data, this.blockSize);

      // Process final blocks
      finalProcessedBlocks = this._process(!!'flush');
    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
      // Process final blocks
      finalProcessedBlocks = this._process(!!'flush');

      // Unpad data
      padding.unpad(finalProcessedBlocks);
    }

    return finalProcessedBlocks;
  }
}

/**
 * A collection of cipher parameters.
 *
 * @property {WordArray} ciphertext The raw ciphertext.
 * @property {WordArray} key The key to this ciphertext.
 * @property {WordArray} iv The IV used in the ciphering operation.
 * @property {WordArray} salt The salt used with a key derivation function.
 * @property {Cipher} algorithm The cipher algorithm.
 * @property {Mode} mode The block mode used in the ciphering operation.
 * @property {Padding} padding The padding scheme used in the ciphering operation.
 * @property {number} blockSize The block size of the cipher.
 * @property {Format} formatter
 *    The default formatting strategy to convert this cipher params object to a string.
 */
class CipherParams extends Base {
  /**
   * Initializes a newly created cipher params object.
   *
   * @param {Object} cipherParams An object with any of the possible cipher parameters.
   *
   * @example
   *
   *     var cipherParams = CryptoJS.lib.CipherParams.create({
   *         ciphertext: ciphertextWordArray,
   *         key: keyWordArray,
   *         iv: ivWordArray,
   *         salt: saltWordArray,
   *         algorithm: CryptoJS.algo.AES,
   *         mode: CryptoJS.mode.CBC,
   *         padding: CryptoJS.pad.PKCS7,
   *         blockSize: 4,
   *         formatter: CryptoJS.format.OpenSSL
   *     });
   */
  constructor(cipherParams) {
    super();

    this.mixIn(cipherParams);
  }

  /**
   * Converts this cipher params object to a string.
   *
   * @param {Format} formatter (Optional) The formatting strategy to use.
   *
   * @return {string} The stringified cipher params.
   *
   * @throws Error If neither the formatter nor the default formatter is set.
   *
   * @example
   *
   *     var string = cipherParams + '';
   *     var string = cipherParams.toString();
   *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
   */
  toString(formatter) {
    return (formatter || this.formatter).stringify(this);
  }
}

/**
 * OpenSSL formatting strategy.
 */
const OpenSSLFormatter = {
  /**
   * Converts a cipher params object to an OpenSSL-compatible string.
   *
   * @param {CipherParams} cipherParams The cipher params object.
   *
   * @return {string} The OpenSSL-compatible string.
   *
   * @static
   *
   * @example
   *
   *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
   */
  stringify(cipherParams) {
    let wordArray;

    // Shortcuts
    const { ciphertext, salt } = cipherParams;

    // Format
    if (salt) {
      wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
    } else {
      wordArray = ciphertext;
    }

    return wordArray.toString(Base64);
  },

  /**
   * Converts an OpenSSL-compatible string to a cipher params object.
   *
   * @param {string} openSSLStr The OpenSSL-compatible string.
   *
   * @return {CipherParams} The cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
   */
  parse(openSSLStr) {
    let salt;

    // Parse base64
    const ciphertext = Base64.parse(openSSLStr);

    // Shortcut
    const ciphertextWords = ciphertext.words;

    // Test for salt
    if (ciphertextWords[0] === 0x53616c74 && ciphertextWords[1] === 0x65645f5f) {
      // Extract salt
      salt = WordArray.create(ciphertextWords.slice(2, 4));

      // Remove salt from ciphertext
      ciphertextWords.splice(0, 4);
      ciphertext.sigBytes -= 16;
    }

    return CipherParams.create({ ciphertext, salt });
  },
};

/**
 * A cipher wrapper that returns ciphertext as a serializable cipher params object.
 */
class SerializableCipher extends Base {
  /**
   * Encrypts a message.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key);
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, key, cfg) {
    // Apply config defaults
    const _cfg = Object.assign(new Base(), this.cfg, cfg);

    // Encrypt
    const encryptor = cipher.createEncryptor(key, _cfg);
    const ciphertext = encryptor.finalize(message);

    // Shortcut
    const cipherCfg = encryptor.cfg;

    // Create and return serializable cipher params
    return CipherParams.create({
      ciphertext,
      key,
      iv: cipherCfg.iv,
      algorithm: cipher,
      mode: cipherCfg.mode,
      padding: cipherCfg.padding,
      blockSize: encryptor.blockSize,
      formatter: _cfg.format,
    });
  }

  /**
   * Decrypts serialized ciphertext.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, key, cfg) {
    let _ciphertext = ciphertext;

    // Apply config defaults
    const _cfg = Object.assign(new Base(), this.cfg, cfg);

    // Convert string to CipherParams
    _ciphertext = this._parse(_ciphertext, _cfg.format);

    // Decrypt
    const plaintext = cipher.createDecryptor(key, _cfg).finalize(_ciphertext.ciphertext);

    return plaintext;
  }

  /**
   * Converts serialized ciphertext to CipherParams,
   * else assumed CipherParams already and returns ciphertext unchanged.
   *
   * @param {CipherParams|string} ciphertext The ciphertext.
   * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
   *
   * @return {CipherParams} The unserialized ciphertext.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       ._parse(ciphertextStringOrParams, format);
   */
  static _parse(ciphertext, format) {
    if (typeof ciphertext === 'string') {
      return format.parse(ciphertext, this);
    }
    return ciphertext;
  }
}
/**
 * Configuration options.
 *
 * @property {Formatter} format
 *
 *    The formatting strategy to convert cipher param objects to and from a string.
 *    Default: OpenSSL
 */
SerializableCipher.cfg = Object.assign(
  new Base(),
  { format: OpenSSLFormatter },
);

/**
 * OpenSSL key derivation function.
 */
const OpenSSLKdf = {
  /**
   * Derives a key and IV from a password.
   *
   * @param {string} password The password to derive from.
   * @param {number} keySize The size in words of the key to generate.
   * @param {number} ivSize The size in words of the IV to generate.
   * @param {WordArray|string} salt
   *     (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
   *
   * @return {CipherParams} A cipher params object with the key, IV, and salt.
   *
   * @static
   *
   * @example
   *
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
   */
  execute(password, keySize, ivSize, salt) {
    let _salt = salt;

    // Generate random salt
    if (!_salt) {
      _salt = WordArray.random(64 / 8);
    }

    // Derive key and IV
    const key = EvpKDFAlgo.create({ keySize: keySize + ivSize }).compute(password, _salt);

    // Separate key and IV
    const iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
    key.sigBytes = keySize * 4;

    // Return params
    return CipherParams.create({ key, iv, salt: _salt });
  },
};

/**
 * A serializable cipher wrapper that derives the key from a password,
 * and returns ciphertext as a serializable cipher params object.
 */
class PasswordBasedCipher extends SerializableCipher {
  /**
   * Encrypts a message using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password');
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, password, cfg) {
    // Apply config defaults
    const _cfg = Object.assign(new Base(), this.cfg, cfg);

    // Derive key and other params
    const derivedParams = _cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

    // Add IV to config
    _cfg.iv = derivedParams.iv;

    // Encrypt
    const ciphertext = SerializableCipher.encrypt
      .call(this, cipher, message, derivedParams.key, _cfg);

    // Mix in derived params
    ciphertext.mixIn(derivedParams);

    return ciphertext;
  }

  /**
   * Decrypts serialized ciphertext using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, password, cfg) {
    let _ciphertext = ciphertext;

    // Apply config defaults
    const _cfg = Object.assign(new Base(), this.cfg, cfg);

    // Convert string to CipherParams
    _ciphertext = this._parse(_ciphertext, _cfg.format);

    // Derive key and other params
    const derivedParams = _cfg.kdf
      .execute(password, cipher.keySize, cipher.ivSize, _ciphertext.salt);

    // Add IV to config
    _cfg.iv = derivedParams.iv;

    // Decrypt
    const plaintext = SerializableCipher.decrypt
      .call(this, cipher, _ciphertext, derivedParams.key, _cfg);

    return plaintext;
  }
}
/**
 * Configuration options.
 *
 * @property {KDF} kdf
 *     The key derivation function to use to generate a key and IV from a password.
 *     Default: OpenSSL
 */
PasswordBasedCipher.cfg = Object.assign(SerializableCipher.cfg, { kdf: OpenSSLKdf });

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/enc-utf16.js


const swapEndian = word => ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);

/**
 * UTF-16 BE encoding strategy.
 */
const Utf16BE = {
  /**
   * Converts a word array to a UTF-16 BE string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-16 BE string.
   *
   * @static
   *
   * @example
   *
   *     const utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const utf16Chars = [];
    for (let i = 0; i < sigBytes; i += 2) {
      const codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
      utf16Chars.push(String.fromCharCode(codePoint));
    }

    return utf16Chars.join('');
  },

  /**
   * Converts a UTF-16 BE string to a word array.
   *
   * @param {string} utf16Str The UTF-16 BE string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Utf16.parse(utf16String);
   */
  parse(utf16Str) {
    // Shortcut
    const utf16StrLength = utf16Str.length;

    // Convert
    const words = [];
    for (let i = 0; i < utf16StrLength; i += 1) {
      words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
    }

    return WordArray.create(words, utf16StrLength * 2);
  },
};
const Utf16 = Utf16BE;

/**
 * UTF-16 LE encoding strategy.
 */
const Utf16LE = {
  /**
   * Converts a word array to a UTF-16 LE string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-16 LE string.
   *
   * @static
   *
   * @example
   *
   *     const utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const utf16Chars = [];
    for (let i = 0; i < sigBytes; i += 2) {
      const codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
      utf16Chars.push(String.fromCharCode(codePoint));
    }

    return utf16Chars.join('');
  },

  /**
   * Converts a UTF-16 LE string to a word array.
   *
   * @param {string} utf16Str The UTF-16 LE string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
   */
  parse(utf16Str) {
    // Shortcut
    const utf16StrLength = utf16Str.length;

    // Convert
    const words = [];
    for (let i = 0; i < utf16StrLength; i += 1) {
      words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
    }

    return WordArray.create(words, utf16StrLength * 2);
  },
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/hmac.js


;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/sha1.js


// Reusable object
const W = [];

/**
 * SHA-1 hash algorithm.
 */
class SHA1Algo extends Hasher {
  _doReset() {
    this._hash = new WordArray([
      0x67452301,
      0xefcdab89,
      0x98badcfe,
      0x10325476,
      0xc3d2e1f0,
    ]);
  }

  _doProcessBlock(M, offset) {
    // Shortcut
    const H = this._hash.words;

    // Working variables
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    // Computation
    for (let i = 0; i < 80; i += 1) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
        W[i] = (n << 1) | (n >>> 31);
      }

      let t = ((a << 5) | (a >>> 27)) + e + W[i];
      if (i < 20) {
        t += ((b & c) | (~b & d)) + 0x5a827999;
      } else if (i < 40) {
        t += (b ^ c ^ d) + 0x6ed9eba1;
      } else if (i < 60) {
        t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
      } else /* if (i < 80) */ {
        t += (b ^ c ^ d) - 0x359d3e2a;
      }

      e = d;
      d = c;
      c = (b << 30) | (b >>> 2);
      b = a;
      a = t;
    }

    // Intermediate hash value
    H[0] = (H[0] + a) | 0;
    H[1] = (H[1] + b) | 0;
    H[2] = (H[2] + c) | 0;
    H[3] = (H[3] + d) | 0;
    H[4] = (H[4] + e) | 0;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Return final computed hash
    return this._hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA1('message');
 *     var hash = CryptoJS.SHA1(wordArray);
 */
const SHA1 = Hasher._createHelper(SHA1Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA1(message, key);
 */
const HmacSHA1 = Hasher._createHmacHelper(SHA1Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/sha256.js


// Initialization and round constants tables
const H = [];
const K = [];

// Compute constants
const isPrime = (n) => {
  const sqrtN = Math.sqrt(n);
  for (let factor = 2; factor <= sqrtN; factor += 1) {
    if (!(n % factor)) {
      return false;
    }
  }

  return true;
};

const getFractionalBits = n => ((n - (n | 0)) * 0x100000000) | 0;

let n = 2;
let nPrime = 0;
while (nPrime < 64) {
  if (isPrime(n)) {
    if (nPrime < 8) {
      H[nPrime] = getFractionalBits(n ** (1 / 2));
    }
    K[nPrime] = getFractionalBits(n ** (1 / 3));

    nPrime += 1;
  }

  n += 1;
}

// Reusable object
const sha256_W = [];

/**
 * SHA-256 hash algorithm.
 */
class SHA256Algo extends Hasher {
  _doReset() {
    this._hash = new WordArray(H.slice(0));
  }

  _doProcessBlock(M, offset) {
    // Shortcut
    const _H = this._hash.words;

    // Working variables
    let a = _H[0];
    let b = _H[1];
    let c = _H[2];
    let d = _H[3];
    let e = _H[4];
    let f = _H[5];
    let g = _H[6];
    let h = _H[7];

    // Computation
    for (let i = 0; i < 64; i += 1) {
      if (i < 16) {
        sha256_W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = sha256_W[i - 15];
        const gamma0 = ((gamma0x << 25) | (gamma0x >>> 7))
          ^ ((gamma0x << 14) | (gamma0x >>> 18))
          ^ (gamma0x >>> 3);

        const gamma1x = sha256_W[i - 2];
        const gamma1 = ((gamma1x << 15) | (gamma1x >>> 17))
          ^ ((gamma1x << 13) | (gamma1x >>> 19))
          ^ (gamma1x >>> 10);

        sha256_W[i] = gamma0 + sha256_W[i - 7] + gamma1 + sha256_W[i - 16];
      }

      const ch = (e & f) ^ (~e & g);
      const maj = (a & b) ^ (a & c) ^ (b & c);

      const sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
      const sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));

      const t1 = h + sigma1 + ch + K[i] + sha256_W[i];
      const t2 = sigma0 + maj;

      h = g;
      g = f;
      f = e;
      e = (d + t1) | 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) | 0;
    }

    // Intermediate hash value
    _H[0] = (_H[0] + a) | 0;
    _H[1] = (_H[1] + b) | 0;
    _H[2] = (_H[2] + c) | 0;
    _H[3] = (_H[3] + d) | 0;
    _H[4] = (_H[4] + e) | 0;
    _H[5] = (_H[5] + f) | 0;
    _H[6] = (_H[6] + g) | 0;
    _H[7] = (_H[7] + h) | 0;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Return final computed hash
    return this._hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA256('message');
 *     var hash = CryptoJS.SHA256(wordArray);
 */
const SHA256 = Hasher._createHelper(SHA256Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA256(message, key);
 */
const HmacSHA256 = Hasher._createHmacHelper(SHA256Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/sha224.js



/**
 * SHA-224 hash algorithm.
 */
class SHA224Algo extends SHA256Algo {
  _doReset() {
    this._hash = new WordArray([
      0xc1059ed8,
      0x367cd507,
      0x3070dd17,
      0xf70e5939,
      0xffc00b31,
      0x68581511,
      0x64f98fa7,
      0xbefa4fa4,
    ]);
  }

  _doFinalize() {
    const hash = super._doFinalize.call(this);

    hash.sigBytes -= 4;

    return hash;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA224('message');
 *     var hash = CryptoJS.SHA224(wordArray);
 */
const SHA224 = SHA256Algo._createHelper(SHA224Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA224(message, key);
 */
const HmacSHA224 = SHA256Algo._createHmacHelper(SHA224Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/sha512.js



// Constants
const sha512_K = [
  new X64Word(0x428a2f98, 0xd728ae22),
  new X64Word(0x71374491, 0x23ef65cd),
  new X64Word(0xb5c0fbcf, 0xec4d3b2f),
  new X64Word(0xe9b5dba5, 0x8189dbbc),
  new X64Word(0x3956c25b, 0xf348b538),
  new X64Word(0x59f111f1, 0xb605d019),
  new X64Word(0x923f82a4, 0xaf194f9b),
  new X64Word(0xab1c5ed5, 0xda6d8118),
  new X64Word(0xd807aa98, 0xa3030242),
  new X64Word(0x12835b01, 0x45706fbe),
  new X64Word(0x243185be, 0x4ee4b28c),
  new X64Word(0x550c7dc3, 0xd5ffb4e2),
  new X64Word(0x72be5d74, 0xf27b896f),
  new X64Word(0x80deb1fe, 0x3b1696b1),
  new X64Word(0x9bdc06a7, 0x25c71235),
  new X64Word(0xc19bf174, 0xcf692694),
  new X64Word(0xe49b69c1, 0x9ef14ad2),
  new X64Word(0xefbe4786, 0x384f25e3),
  new X64Word(0x0fc19dc6, 0x8b8cd5b5),
  new X64Word(0x240ca1cc, 0x77ac9c65),
  new X64Word(0x2de92c6f, 0x592b0275),
  new X64Word(0x4a7484aa, 0x6ea6e483),
  new X64Word(0x5cb0a9dc, 0xbd41fbd4),
  new X64Word(0x76f988da, 0x831153b5),
  new X64Word(0x983e5152, 0xee66dfab),
  new X64Word(0xa831c66d, 0x2db43210),
  new X64Word(0xb00327c8, 0x98fb213f),
  new X64Word(0xbf597fc7, 0xbeef0ee4),
  new X64Word(0xc6e00bf3, 0x3da88fc2),
  new X64Word(0xd5a79147, 0x930aa725),
  new X64Word(0x06ca6351, 0xe003826f),
  new X64Word(0x14292967, 0x0a0e6e70),
  new X64Word(0x27b70a85, 0x46d22ffc),
  new X64Word(0x2e1b2138, 0x5c26c926),
  new X64Word(0x4d2c6dfc, 0x5ac42aed),
  new X64Word(0x53380d13, 0x9d95b3df),
  new X64Word(0x650a7354, 0x8baf63de),
  new X64Word(0x766a0abb, 0x3c77b2a8),
  new X64Word(0x81c2c92e, 0x47edaee6),
  new X64Word(0x92722c85, 0x1482353b),
  new X64Word(0xa2bfe8a1, 0x4cf10364),
  new X64Word(0xa81a664b, 0xbc423001),
  new X64Word(0xc24b8b70, 0xd0f89791),
  new X64Word(0xc76c51a3, 0x0654be30),
  new X64Word(0xd192e819, 0xd6ef5218),
  new X64Word(0xd6990624, 0x5565a910),
  new X64Word(0xf40e3585, 0x5771202a),
  new X64Word(0x106aa070, 0x32bbd1b8),
  new X64Word(0x19a4c116, 0xb8d2d0c8),
  new X64Word(0x1e376c08, 0x5141ab53),
  new X64Word(0x2748774c, 0xdf8eeb99),
  new X64Word(0x34b0bcb5, 0xe19b48a8),
  new X64Word(0x391c0cb3, 0xc5c95a63),
  new X64Word(0x4ed8aa4a, 0xe3418acb),
  new X64Word(0x5b9cca4f, 0x7763e373),
  new X64Word(0x682e6ff3, 0xd6b2b8a3),
  new X64Word(0x748f82ee, 0x5defb2fc),
  new X64Word(0x78a5636f, 0x43172f60),
  new X64Word(0x84c87814, 0xa1f0ab72),
  new X64Word(0x8cc70208, 0x1a6439ec),
  new X64Word(0x90befffa, 0x23631e28),
  new X64Word(0xa4506ceb, 0xde82bde9),
  new X64Word(0xbef9a3f7, 0xb2c67915),
  new X64Word(0xc67178f2, 0xe372532b),
  new X64Word(0xca273ece, 0xea26619c),
  new X64Word(0xd186b8c7, 0x21c0c207),
  new X64Word(0xeada7dd6, 0xcde0eb1e),
  new X64Word(0xf57d4f7f, 0xee6ed178),
  new X64Word(0x06f067aa, 0x72176fba),
  new X64Word(0x0a637dc5, 0xa2c898a6),
  new X64Word(0x113f9804, 0xbef90dae),
  new X64Word(0x1b710b35, 0x131c471b),
  new X64Word(0x28db77f5, 0x23047d84),
  new X64Word(0x32caab7b, 0x40c72493),
  new X64Word(0x3c9ebe0a, 0x15c9bebc),
  new X64Word(0x431d67c4, 0x9c100d4c),
  new X64Word(0x4cc5d4be, 0xcb3e42b6),
  new X64Word(0x597f299c, 0xfc657e2a),
  new X64Word(0x5fcb6fab, 0x3ad6faec),
  new X64Word(0x6c44198c, 0x4a475817),
];

// Reusable objects
const sha512_W = [];
for (let i = 0; i < 80; i += 1) {
  sha512_W[i] = new X64Word();
}

/**
 * SHA-512 hash algorithm.
 */
class SHA512Algo extends Hasher {
  constructor() {
    super();

    this.blockSize = 1024 / 32;
  }

  _doReset() {
    this._hash = new X64WordArray([
      new X64Word(0x6a09e667, 0xf3bcc908),
      new X64Word(0xbb67ae85, 0x84caa73b),
      new X64Word(0x3c6ef372, 0xfe94f82b),
      new X64Word(0xa54ff53a, 0x5f1d36f1),
      new X64Word(0x510e527f, 0xade682d1),
      new X64Word(0x9b05688c, 0x2b3e6c1f),
      new X64Word(0x1f83d9ab, 0xfb41bd6b),
      new X64Word(0x5be0cd19, 0x137e2179),
    ]);
  }

  _doProcessBlock(M, offset) {
    // Shortcuts
    const H = this._hash.words;

    const H0 = H[0];
    const H1 = H[1];
    const H2 = H[2];
    const H3 = H[3];
    const H4 = H[4];
    const H5 = H[5];
    const H6 = H[6];
    const H7 = H[7];

    const H0h = H0.high;
    let H0l = H0.low;
    const H1h = H1.high;
    let H1l = H1.low;
    const H2h = H2.high;
    let H2l = H2.low;
    const H3h = H3.high;
    let H3l = H3.low;
    const H4h = H4.high;
    let H4l = H4.low;
    const H5h = H5.high;
    let H5l = H5.low;
    const H6h = H6.high;
    let H6l = H6.low;
    const H7h = H7.high;
    let H7l = H7.low;

    // Working variables
    let ah = H0h;
    let al = H0l;
    let bh = H1h;
    let bl = H1l;
    let ch = H2h;
    let cl = H2l;
    let dh = H3h;
    let dl = H3l;
    let eh = H4h;
    let el = H4l;
    let fh = H5h;
    let fl = H5l;
    let gh = H6h;
    let gl = H6l;
    let hh = H7h;
    let hl = H7l;

    // Rounds
    for (let i = 0; i < 80; i += 1) {
      let Wil;
      let Wih;

      // Shortcut
      const Wi = sha512_W[i];

      // Extend message
      if (i < 16) {
        Wi.high = M[offset + i * 2] | 0;
        Wih = Wi.high;
        Wi.low = M[offset + i * 2 + 1] | 0;
        Wil = Wi.low;
      } else {
        // Gamma0
        const gamma0x = sha512_W[i - 15];
        const gamma0xh = gamma0x.high;
        const gamma0xl = gamma0x.low;
        const gamma0h = ((gamma0xh >>> 1) | (gamma0xl << 31))
          ^ ((gamma0xh >>> 8) | (gamma0xl << 24))
          ^ (gamma0xh >>> 7);
        const gamma0l = ((gamma0xl >>> 1) | (gamma0xh << 31))
          ^ ((gamma0xl >>> 8) | (gamma0xh << 24))
          ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

        // Gamma1
        const gamma1x = sha512_W[i - 2];
        const gamma1xh = gamma1x.high;
        const gamma1xl = gamma1x.low;
        const gamma1h = ((gamma1xh >>> 19) | (gamma1xl << 13))
          ^ ((gamma1xh << 3) | (gamma1xl >>> 29))
          ^ (gamma1xh >>> 6);
        const gamma1l = ((gamma1xl >>> 19) | (gamma1xh << 13))
          ^ ((gamma1xl << 3) | (gamma1xh >>> 29))
          ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
        const Wi7 = sha512_W[i - 7];
        const Wi7h = Wi7.high;
        const Wi7l = Wi7.low;

        const Wi16 = sha512_W[i - 16];
        const Wi16h = Wi16.high;
        const Wi16l = Wi16.low;

        Wil = gamma0l + Wi7l;
        Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
        Wil += gamma1l;
        Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
        Wil += Wi16l;
        Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

        Wi.high = Wih;
        Wi.low = Wil;
      }

      const chh = (eh & fh) ^ (~eh & gh);
      const chl = (el & fl) ^ (~el & gl);
      const majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
      const majl = (al & bl) ^ (al & cl) ^ (bl & cl);

      const sigma0h = ((ah >>> 28) | (al << 4))
        ^ ((ah << 30) | (al >>> 2))
        ^ ((ah << 25) | (al >>> 7));
      const sigma0l = ((al >>> 28) | (ah << 4))
        ^ ((al << 30) | (ah >>> 2))
        ^ ((al << 25) | (ah >>> 7));
      const sigma1h = ((eh >>> 14) | (el << 18))
        ^ ((eh >>> 18) | (el << 14))
        ^ ((eh << 23) | (el >>> 9));
      const sigma1l = ((el >>> 14) | (eh << 18))
        ^ ((el >>> 18) | (eh << 14))
        ^ ((el << 23) | (eh >>> 9));

      // t1 = h + sigma1 + ch + K[i] + W[i]
      const Ki = sha512_K[i];
      const Kih = Ki.high;
      const Kil = Ki.low;

      let t1l = hl + sigma1l;
      let t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
      t1l += chl;
      t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
      t1l += Kil;
      t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
      t1l += Wil;
      t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

      // t2 = sigma0 + maj
      const t2l = sigma0l + majl;
      const t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

      // Update working variables
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = (dl + t1l) | 0;
      eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = (t1l + t2l) | 0;
      ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
    }

    // Intermediate hash value
    H0.low = (H0l + al);
    H0l = H0.low;
    H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
    H1.low = (H1l + bl);
    H1l = H1.low;
    H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
    H2.low = (H2l + cl);
    H2l = H2.low;
    H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
    H3.low = (H3l + dl);
    H3l = H3.low;
    H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
    H4.low = (H4l + el);
    H4l = H4.low;
    H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
    H5.low = (H5l + fl);
    H5l = H5.low;
    H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
    H6.low = (H6l + gl);
    H6l = H6.low;
    H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
    H7.low = (H7l + hl);
    H7l = H7.low;
    H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Convert hash to 32-bit word array before returning
    const hash = this._hash.toX32();

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA512('message');
 *     var hash = CryptoJS.SHA512(wordArray);
 */
const SHA512 = Hasher._createHelper(SHA512Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA512(message, key);
 */
const HmacSHA512 = Hasher._createHmacHelper(SHA512Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/sha384.js



/**
 * SHA-384 hash algorithm.
 */
class SHA384Algo extends SHA512Algo {
  _doReset() {
    this._hash = new X64WordArray([
      new X64Word(0xcbbb9d5d, 0xc1059ed8),
      new X64Word(0x629a292a, 0x367cd507),
      new X64Word(0x9159015a, 0x3070dd17),
      new X64Word(0x152fecd8, 0xf70e5939),
      new X64Word(0x67332667, 0xffc00b31),
      new X64Word(0x8eb44a87, 0x68581511),
      new X64Word(0xdb0c2e0d, 0x64f98fa7),
      new X64Word(0x47b5481d, 0xbefa4fa4),
    ]);
  }

  _doFinalize() {
    const hash = super._doFinalize.call(this);

    hash.sigBytes -= 16;

    return hash;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA384('message');
 *     var hash = CryptoJS.SHA384(wordArray);
 */
const SHA384 = SHA512Algo._createHelper(SHA384Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA384(message, key);
 */
const HmacSHA384 = SHA512Algo._createHmacHelper(SHA384Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/sha3.js



// Constants tables
const RHO_OFFSETS = [];
const PI_INDEXES = [];
const ROUND_CONSTANTS = [];

// Compute Constants
// Compute rho offset constants
let _x = 1;
let _y = 0;
for (let t = 0; t < 24; t += 1) {
  RHO_OFFSETS[_x + 5 * _y] = ((t + 1) * (t + 2) / 2) % 64;

  const newX = _y % 5;
  const newY = (2 * _x + 3 * _y) % 5;
  _x = newX;
  _y = newY;
}

// Compute pi index constants
for (let x = 0; x < 5; x += 1) {
  for (let y = 0; y < 5; y += 1) {
    PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
  }
}

// Compute round constants
let LFSR = 0x01;
for (let i = 0; i < 24; i += 1) {
  let roundConstantMsw = 0;
  let roundConstantLsw = 0;

  for (let j = 0; j < 7; j += 1) {
    if (LFSR & 0x01) {
      const bitPosition = (1 << j) - 1;
      if (bitPosition < 32) {
        roundConstantLsw ^= 1 << bitPosition;
      } else /* if (bitPosition >= 32) */ {
        roundConstantMsw ^= 1 << (bitPosition - 32);
      }
    }

    // Compute next LFSR
    if (LFSR & 0x80) {
      // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
      LFSR = (LFSR << 1) ^ 0x71;
    } else {
      LFSR <<= 1;
    }
  }

  ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
}

// Reusable objects for temporary values
const sha3_T = [];
for (let i = 0; i < 25; i += 1) {
  sha3_T[i] = X64Word.create();
}

/**
 * SHA-3 hash algorithm.
 */
class SHA3Algo extends Hasher {
  constructor(cfg) {
    /**
     * Configuration options.
     *
     * @property {number} outputLength
     *   The desired number of bits in the output hash.
     *   Only values permitted are: 224, 256, 384, 512.
     *   Default: 512
     */
    super(Object.assign(
      { outputLength: 512 },
      cfg,
    ));
  }

  _doReset() {
    this._state = [];
    const state = this._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = new X64Word();
    }

    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
  }

  _doProcessBlock(M, offset) {
    // Shortcuts
    const state = this._state;
    const nBlockSizeLanes = this.blockSize / 2;

    // Absorb
    for (let i = 0; i < nBlockSizeLanes; i += 1) {
      // Shortcuts
      let M2i = M[offset + 2 * i];
      let M2i1 = M[offset + 2 * i + 1];

      // Swap endian
      M2i = (((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff)
        | (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00);
      M2i1 = (((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff)
        | (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00);

      // Absorb message into state
      const lane = state[i];
      lane.high ^= M2i1;
      lane.low ^= M2i;
    }

    // Rounds
    for (let round = 0; round < 24; round += 1) {
      // Theta
      for (let x = 0; x < 5; x += 1) {
        // Mix column lanes
        let tMsw = 0;
        let tLsw = 0;
        for (let y = 0; y < 5; y += 1) {
          const lane = state[x + 5 * y];
          tMsw ^= lane.high;
          tLsw ^= lane.low;
        }

        // Temporary values
        const Tx = sha3_T[x];
        Tx.high = tMsw;
        Tx.low = tLsw;
      }
      for (let x = 0; x < 5; x += 1) {
        // Shortcuts
        const Tx4 = sha3_T[(x + 4) % 5];
        const Tx1 = sha3_T[(x + 1) % 5];
        const Tx1Msw = Tx1.high;
        const Tx1Lsw = Tx1.low;

        // Mix surrounding columns
        const tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
        const tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
        for (let y = 0; y < 5; y += 1) {
          const lane = state[x + 5 * y];
          lane.high ^= tMsw;
          lane.low ^= tLsw;
        }
      }

      // Rho Pi
      for (let laneIndex = 1; laneIndex < 25; laneIndex += 1) {
        let tMsw;
        let tLsw;

        // Shortcuts
        const lane = state[laneIndex];
        const laneMsw = lane.high;
        const laneLsw = lane.low;
        const rhoOffset = RHO_OFFSETS[laneIndex];

        // Rotate lanes
        if (rhoOffset < 32) {
          tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
          tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
        } else /* if (rhoOffset >= 32) */ {
          tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
          tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
        }

        // Transpose lanes
        const TPiLane = sha3_T[PI_INDEXES[laneIndex]];
        TPiLane.high = tMsw;
        TPiLane.low = tLsw;
      }

      // Rho pi at x = y = 0
      const T0 = sha3_T[0];
      const state0 = state[0];
      T0.high = state0.high;
      T0.low = state0.low;

      // Chi
      for (let x = 0; x < 5; x += 1) {
        for (let y = 0; y < 5; y += 1) {
          // Shortcuts
          const laneIndex = x + 5 * y;
          const lane = state[laneIndex];
          const TLane = sha3_T[laneIndex];
          const Tx1Lane = sha3_T[((x + 1) % 5) + 5 * y];
          const Tx2Lane = sha3_T[((x + 2) % 5) + 5 * y];

          // Mix rows
          lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
          lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
        }
      }

      // Iota
      const lane = state[0];
      const roundConstant = ROUND_CONSTANTS[round];
      lane.high ^= roundConstant.high;
      lane.low ^= roundConstant.low;
    }
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;
    const nBitsLeft = data.sigBytes * 8;
    const blockSizeBits = this.blockSize * 32;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - (nBitsLeft % 32));
    dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const state = this._state;
    const outputLengthBytes = this.cfg.outputLength / 8;
    const outputLengthLanes = outputLengthBytes / 8;

    // Squeeze
    const hashWords = [];
    for (let i = 0; i < outputLengthLanes; i += 1) {
      // Shortcuts
      const lane = state[i];
      let laneMsw = lane.high;
      let laneLsw = lane.low;

      // Swap endian
      laneMsw = (((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff)
        | (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00);
      laneLsw = (((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff)
        | (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00);

      // Squeeze state to retrieve hash
      hashWords.push(laneLsw);
      hashWords.push(laneMsw);
    }

    // Return final computed hash
    return new WordArray(hashWords, outputLengthBytes);
  }

  clone() {
    const clone = super.clone.call(this);

    clone._state = this._state.slice(0);
    const state = clone._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = state[i].clone();
    }

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA3('message');
 *     var hash = CryptoJS.SHA3(wordArray);
 */
const SHA3 = Hasher._createHelper(SHA3Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA3(message, key);
 */
const HmacSHA3 = Hasher._createHmacHelper(SHA3Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/ripemd160.js
/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of
    conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list
    of conditions and the following disclaimer in the documentation and/or other materials
    provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/



// Constants table
const _zl = WordArray.create([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
const _zr = WordArray.create([
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
const _sl = WordArray.create([
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
const _sr = WordArray.create([
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

const _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
const _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

const f1 = (x, y, z) => (x) ^ (y) ^ (z);

const f2 = (x, y, z) => ((x) & (y)) | ((~x) & (z));

const f3 = (x, y, z) => ((x) | (~(y))) ^ (z);

const f4 = (x, y, z) => ((x) & (z)) | ((y) & (~(z)));

const f5 = (x, y, z) => (x) ^ ((y) | (~(z)));

const rotl = (x, n) => (x << n) | (x >>> (32 - n));

/**
 * RIPEMD160 hash algorithm.
 */
class RIPEMD160Algo extends Hasher {
  _doReset() {
    this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Swap endian
    for (let i = 0; i < 16; i += 1) {
      // Shortcuts
      const offset_i = offset + i;
      const M_offset_i = _M[offset_i];

      // Swap
      _M[offset_i] = (
        (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
          | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
      );
    }
    // Shortcut
    const H = this._hash.words;
    const hl = _hl.words;
    const hr = _hr.words;
    const zl = _zl.words;
    const zr = _zr.words;
    const sl = _sl.words;
    const sr = _sr.words;

    // Working variables
    let al = H[0];
    let bl = H[1];
    let cl = H[2];
    let dl = H[3];
    let el = H[4];
    let ar = H[0];
    let br = H[1];
    let cr = H[2];
    let dr = H[3];
    let er = H[4];

    // Computation
    let t;
    for (let i = 0; i < 80; i += 1) {
      t = (al + _M[offset + zl[i]]) | 0;
      if (i < 16) {
        t += f1(bl, cl, dl) + hl[0];
      } else if (i < 32) {
        t += f2(bl, cl, dl) + hl[1];
      } else if (i < 48) {
        t += f3(bl, cl, dl) + hl[2];
      } else if (i < 64) {
        t += f4(bl, cl, dl) + hl[3];
      } else { // if (i<80) {
        t += f5(bl, cl, dl) + hl[4];
      }
      t |= 0;
      t = rotl(t, sl[i]);
      t = (t + el) | 0;
      al = el;
      el = dl;
      dl = rotl(cl, 10);
      cl = bl;
      bl = t;

      t = (ar + _M[offset + zr[i]]) | 0;
      if (i < 16) {
        t += f5(br, cr, dr) + hr[0];
      } else if (i < 32) {
        t += f4(br, cr, dr) + hr[1];
      } else if (i < 48) {
        t += f3(br, cr, dr) + hr[2];
      } else if (i < 64) {
        t += f2(br, cr, dr) + hr[3];
      } else { // if (i<80) {
        t += f1(br, cr, dr) + hr[4];
      }
      t |= 0;
      t = rotl(t, sr[i]);
      t = (t + er) | 0;
      ar = er;
      er = dr;
      dr = rotl(cr, 10);
      cr = br;
      br = t;
    }
    // Intermediate hash value
    t = (H[1] + cl + dr) | 0;
    H[1] = (H[2] + dl + er) | 0;
    H[2] = (H[3] + el + ar) | 0;
    H[3] = (H[4] + al + br) | 0;
    H[4] = (H[0] + bl + cr) | 0;
    H[0] = t;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff)
        | (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00)
    );
    data.sigBytes = (dataWords.length + 1) * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const hash = this._hash;
    const H = hash.words;

    // Swap endian
    for (let i = 0; i < 5; i += 1) {
      // Shortcut
      const H_i = H[i];

      // Swap
      H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
        | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
    }

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.RIPEMD160('message');
 *     var hash = CryptoJS.RIPEMD160(wordArray);
 */
const RIPEMD160 = Hasher._createHelper(RIPEMD160Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
 */
const HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160Algo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/pbkdf2.js




/**
 * Password-Based Key Derivation Function 2 algorithm.
 */
class PBKDF2Algo extends Base {
  /**
   * Initializes a newly created key derivation function.
   *
   * @param {Object} cfg (Optional) The configuration options to use for the derivation.
   *
   * @example
   *
   *     const kdf = CryptoJS.algo.PBKDF2.create();
   *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
   *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
   */
  constructor(cfg) {
    super();

    /**
     * Configuration options.
     *
     * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
     * @property {Hasher} hasher The hasher to use. Default: SHA1
     * @property {number} iterations The number of iterations to perform. Default: 1
     */
    this.cfg = Object.assign(
      new Base(),
      {
        keySize: 128 / 32,
        hasher: SHA1Algo,
        iterations: 1,
      },
      cfg,
    );
  }

  /**
   * Computes the Password-Based Key Derivation Function 2.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   *
   * @return {WordArray} The derived key.
   *
   * @example
   *
   *     const key = kdf.compute(password, salt);
   */
  compute(password, salt) {
    // Shortcut
    const { cfg } = this;

    // Init HMAC
    const hmac = HMAC.create(cfg.hasher, password);

    // Initial values
    const derivedKey = WordArray.create();
    const blockIndex = WordArray.create([0x00000001]);

    // Shortcuts
    const derivedKeyWords = derivedKey.words;
    const blockIndexWords = blockIndex.words;
    const { keySize, iterations } = cfg;

    // Generate key
    while (derivedKeyWords.length < keySize) {
      const block = hmac.update(salt).finalize(blockIndex);
      hmac.reset();

      // Shortcuts
      const blockWords = block.words;
      const blockWordsLength = blockWords.length;

      // Iterations
      let intermediate = block;
      for (let i = 1; i < iterations; i += 1) {
        intermediate = hmac.finalize(intermediate);
        hmac.reset();

        // Shortcut
        const intermediateWords = intermediate.words;

        // XOR intermediate with block
        for (let j = 0; j < blockWordsLength; j += 1) {
          blockWords[j] ^= intermediateWords[j];
        }
      }

      derivedKey.concat(block);
      blockIndexWords[0] += 1;
    }
    derivedKey.sigBytes = keySize * 4;

    return derivedKey;
  }
}

/**
 * Computes the Password-Based Key Derivation Function 2.
 *
 * @param {WordArray|string} password The password.
 * @param {WordArray|string} salt A salt.
 * @param {Object} cfg (Optional) The configuration options to use for this computation.
 *
 * @return {WordArray} The derived key.
 *
 * @static
 *
 * @example
 *
 *     var key = CryptoJS.PBKDF2(password, salt);
 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
 */
const PBKDF2 = (password, salt, cfg) => PBKDF2Algo.create(cfg).compute(password, salt);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/aes.js


// Lookup tables
const _SBOX = [];
const INV_SBOX = [];
const _SUB_MIX_0 = [];
const _SUB_MIX_1 = [];
const _SUB_MIX_2 = [];
const _SUB_MIX_3 = [];
const INV_SUB_MIX_0 = [];
const INV_SUB_MIX_1 = [];
const INV_SUB_MIX_2 = [];
const INV_SUB_MIX_3 = [];

// Compute lookup tables

// Compute double table
const d = [];
for (let i = 0; i < 256; i += 1) {
  if (i < 128) {
    d[i] = i << 1;
  } else {
    d[i] = (i << 1) ^ 0x11b;
  }
}

// Walk GF(2^8)
let x = 0;
let xi = 0;
for (let i = 0; i < 256; i += 1) {
  // Compute sbox
  let sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
  sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
  _SBOX[x] = sx;
  INV_SBOX[sx] = x;

  // Compute multiplication
  const x2 = d[x];
  const x4 = d[x2];
  const x8 = d[x4];

  // Compute sub bytes, mix columns tables
  let t = (d[sx] * 0x101) ^ (sx * 0x1010100);
  _SUB_MIX_0[x] = (t << 24) | (t >>> 8);
  _SUB_MIX_1[x] = (t << 16) | (t >>> 16);
  _SUB_MIX_2[x] = (t << 8) | (t >>> 24);
  _SUB_MIX_3[x] = t;

  // Compute inv sub bytes, inv mix columns tables
  t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
  INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
  INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
  INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
  INV_SUB_MIX_3[sx] = t;

  // Compute next counter
  if (!x) {
    xi = 1;
    x = xi;
  } else {
    x = x2 ^ d[d[d[x8 ^ x2]]];
    xi ^= d[d[xi]];
  }
}

// Precomputed Rcon lookup
const RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

/**
 * AES block cipher algorithm.
 */
class AESAlgo extends BlockCipher {
  _doReset() {
    let t;

    // Skip reset of nRounds has been set before and key did not change
    if (this._nRounds && this._keyPriorReset === this._key) {
      return;
    }

    // Shortcuts
    this._keyPriorReset = this._key;
    const key = this._keyPriorReset;
    const keyWords = key.words;
    const keySize = key.sigBytes / 4;

    // Compute number of rounds
    this._nRounds = keySize + 6;
    const nRounds = this._nRounds;

    // Compute number of key schedule rows
    const ksRows = (nRounds + 1) * 4;

    // Compute key schedule
    this._keySchedule = [];
    const keySchedule = this._keySchedule;
    for (let ksRow = 0; ksRow < ksRows; ksRow += 1) {
      if (ksRow < keySize) {
        keySchedule[ksRow] = keyWords[ksRow];
      } else {
        t = keySchedule[ksRow - 1];

        if (!(ksRow % keySize)) {
          // Rot word
          t = (t << 8) | (t >>> 24);

          // Sub word
          t = (_SBOX[t >>> 24] << 24)
            | (_SBOX[(t >>> 16) & 0xff] << 16)
            | (_SBOX[(t >>> 8) & 0xff] << 8)
            | _SBOX[t & 0xff];

          // Mix Rcon
          t ^= RCON[(ksRow / keySize) | 0] << 24;
        } else if (keySize > 6 && ksRow % keySize === 4) {
          // Sub word
          t = (_SBOX[t >>> 24] << 24)
            | (_SBOX[(t >>> 16) & 0xff] << 16)
            | (_SBOX[(t >>> 8) & 0xff] << 8)
            | _SBOX[t & 0xff];
        }

        keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
      }
    }

    // Compute inv key schedule
    this._invKeySchedule = [];
    const invKeySchedule = this._invKeySchedule;
    for (let invKsRow = 0; invKsRow < ksRows; invKsRow += 1) {
      const ksRow = ksRows - invKsRow;

      if (invKsRow % 4) {
        t = keySchedule[ksRow];
      } else {
        t = keySchedule[ksRow - 4];
      }

      if (invKsRow < 4 || ksRow <= 4) {
        invKeySchedule[invKsRow] = t;
      } else {
        invKeySchedule[invKsRow] = INV_SUB_MIX_0[_SBOX[t >>> 24]]
          ^ INV_SUB_MIX_1[_SBOX[(t >>> 16) & 0xff]]
          ^ INV_SUB_MIX_2[_SBOX[(t >>> 8) & 0xff]]
          ^ INV_SUB_MIX_3[_SBOX[t & 0xff]];
      }
    }
  }

  encryptBlock(M, offset) {
    this._doCryptBlock(
      M, offset, this._keySchedule, _SUB_MIX_0, _SUB_MIX_1, _SUB_MIX_2, _SUB_MIX_3, _SBOX,
    );
  }

  decryptBlock(M, offset) {
    const _M = M;

    // Swap 2nd and 4th rows
    let t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;

    this._doCryptBlock(
      _M,
      offset,
      this._invKeySchedule,
      INV_SUB_MIX_0,
      INV_SUB_MIX_1,
      INV_SUB_MIX_2,
      INV_SUB_MIX_3,
      INV_SBOX,
    );

    // Inv swap 2nd and 4th rows
    t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;
  }

  _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    const _M = M;

    // Shortcut
    const nRounds = this._nRounds;

    // Get input, add round key
    let s0 = _M[offset] ^ keySchedule[0];
    let s1 = _M[offset + 1] ^ keySchedule[1];
    let s2 = _M[offset + 2] ^ keySchedule[2];
    let s3 = _M[offset + 3] ^ keySchedule[3];

    // Key schedule row counter
    let ksRow = 4;

    // Rounds
    for (let round = 1; round < nRounds; round += 1) {
      // Shift rows, sub bytes, mix columns, add round key
      const t0 = SUB_MIX_0[s0 >>> 24]
        ^ SUB_MIX_1[(s1 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s2 >>> 8) & 0xff]
        ^ SUB_MIX_3[s3 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;
      const t1 = SUB_MIX_0[s1 >>> 24]
        ^ SUB_MIX_1[(s2 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s3 >>> 8) & 0xff]
        ^ SUB_MIX_3[s0 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;
      const t2 = SUB_MIX_0[s2 >>> 24]
        ^ SUB_MIX_1[(s3 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s0 >>> 8) & 0xff]
        ^ SUB_MIX_3[s1 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;
      const t3 = SUB_MIX_0[s3 >>> 24]
        ^ SUB_MIX_1[(s0 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s1 >>> 8) & 0xff]
        ^ SUB_MIX_3[s2 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;

      // Update state
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }

    // Shift rows, sub bytes, add round key
    const t0 = (
      (SBOX[s0 >>> 24] << 24)
        | (SBOX[(s1 >>> 16) & 0xff] << 16)
        | (SBOX[(s2 >>> 8) & 0xff] << 8)
        | SBOX[s3 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;
    const t1 = (
      (SBOX[s1 >>> 24] << 24)
        | (SBOX[(s2 >>> 16) & 0xff] << 16)
        | (SBOX[(s3 >>> 8) & 0xff] << 8)
        | SBOX[s0 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;
    const t2 = (
      (SBOX[s2 >>> 24] << 24)
        | (SBOX[(s3 >>> 16) & 0xff] << 16)
        | (SBOX[(s0 >>> 8) & 0xff] << 8)
        | SBOX[s1 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;
    const t3 = (
      (SBOX[s3 >>> 24] << 24)
        | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;

    // Set output
    _M[offset] = t0;
    _M[offset + 1] = t1;
    _M[offset + 2] = t2;
    _M[offset + 3] = t3;
  }
}
AESAlgo.keySize = 256 / 32;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
 */
const AES = BlockCipher._createHelper(AESAlgo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/tripledes.js



// Permuted Choice 1 constants
const PC1 = [
  57, 49, 41, 33, 25, 17, 9, 1,
  58, 50, 42, 34, 26, 18, 10, 2,
  59, 51, 43, 35, 27, 19, 11, 3,
  60, 52, 44, 36, 63, 55, 47, 39,
  31, 23, 15, 7, 62, 54, 46, 38,
  30, 22, 14, 6, 61, 53, 45, 37,
  29, 21, 13, 5, 28, 20, 12, 4,
];

// Permuted Choice 2 constants
const PC2 = [
  14, 17, 11, 24, 1, 5,
  3, 28, 15, 6, 21, 10,
  23, 19, 12, 4, 26, 8,
  16, 7, 27, 20, 13, 2,
  41, 52, 31, 37, 47, 55,
  30, 40, 51, 45, 33, 48,
  44, 49, 39, 56, 34, 53,
  46, 42, 50, 36, 29, 32,
];

// Cumulative bit shift constants
const BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

// SBOXes and round permutation constants
const SBOX_P = [
  {
    0x0: 0x808200,
    0x10000000: 0x8000,
    0x20000000: 0x808002,
    0x30000000: 0x2,
    0x40000000: 0x200,
    0x50000000: 0x808202,
    0x60000000: 0x800202,
    0x70000000: 0x800000,
    0x80000000: 0x202,
    0x90000000: 0x800200,
    0xa0000000: 0x8200,
    0xb0000000: 0x808000,
    0xc0000000: 0x8002,
    0xd0000000: 0x800002,
    0xe0000000: 0x0,
    0xf0000000: 0x8202,
    0x8000000: 0x0,
    0x18000000: 0x808202,
    0x28000000: 0x8202,
    0x38000000: 0x8000,
    0x48000000: 0x808200,
    0x58000000: 0x200,
    0x68000000: 0x808002,
    0x78000000: 0x2,
    0x88000000: 0x800200,
    0x98000000: 0x8200,
    0xa8000000: 0x808000,
    0xb8000000: 0x800202,
    0xc8000000: 0x800002,
    0xd8000000: 0x8002,
    0xe8000000: 0x202,
    0xf8000000: 0x800000,
    0x1: 0x8000,
    0x10000001: 0x2,
    0x20000001: 0x808200,
    0x30000001: 0x800000,
    0x40000001: 0x808002,
    0x50000001: 0x8200,
    0x60000001: 0x200,
    0x70000001: 0x800202,
    0x80000001: 0x808202,
    0x90000001: 0x808000,
    0xa0000001: 0x800002,
    0xb0000001: 0x8202,
    0xc0000001: 0x202,
    0xd0000001: 0x800200,
    0xe0000001: 0x8002,
    0xf0000001: 0x0,
    0x8000001: 0x808202,
    0x18000001: 0x808000,
    0x28000001: 0x800000,
    0x38000001: 0x200,
    0x48000001: 0x8000,
    0x58000001: 0x800002,
    0x68000001: 0x2,
    0x78000001: 0x8202,
    0x88000001: 0x8002,
    0x98000001: 0x800202,
    0xa8000001: 0x202,
    0xb8000001: 0x808200,
    0xc8000001: 0x800200,
    0xd8000001: 0x0,
    0xe8000001: 0x8200,
    0xf8000001: 0x808002,
  },
  {
    0x0: 0x40084010,
    0x1000000: 0x4000,
    0x2000000: 0x80000,
    0x3000000: 0x40080010,
    0x4000000: 0x40000010,
    0x5000000: 0x40084000,
    0x6000000: 0x40004000,
    0x7000000: 0x10,
    0x8000000: 0x84000,
    0x9000000: 0x40004010,
    0xa000000: 0x40000000,
    0xb000000: 0x84010,
    0xc000000: 0x80010,
    0xd000000: 0x0,
    0xe000000: 0x4010,
    0xf000000: 0x40080000,
    0x800000: 0x40004000,
    0x1800000: 0x84010,
    0x2800000: 0x10,
    0x3800000: 0x40004010,
    0x4800000: 0x40084010,
    0x5800000: 0x40000000,
    0x6800000: 0x80000,
    0x7800000: 0x40080010,
    0x8800000: 0x80010,
    0x9800000: 0x0,
    0xa800000: 0x4000,
    0xb800000: 0x40080000,
    0xc800000: 0x40000010,
    0xd800000: 0x84000,
    0xe800000: 0x40084000,
    0xf800000: 0x4010,
    0x10000000: 0x0,
    0x11000000: 0x40080010,
    0x12000000: 0x40004010,
    0x13000000: 0x40084000,
    0x14000000: 0x40080000,
    0x15000000: 0x10,
    0x16000000: 0x84010,
    0x17000000: 0x4000,
    0x18000000: 0x4010,
    0x19000000: 0x80000,
    0x1a000000: 0x80010,
    0x1b000000: 0x40000010,
    0x1c000000: 0x84000,
    0x1d000000: 0x40004000,
    0x1e000000: 0x40000000,
    0x1f000000: 0x40084010,
    0x10800000: 0x84010,
    0x11800000: 0x80000,
    0x12800000: 0x40080000,
    0x13800000: 0x4000,
    0x14800000: 0x40004000,
    0x15800000: 0x40084010,
    0x16800000: 0x10,
    0x17800000: 0x40000000,
    0x18800000: 0x40084000,
    0x19800000: 0x40000010,
    0x1a800000: 0x40004010,
    0x1b800000: 0x80010,
    0x1c800000: 0x0,
    0x1d800000: 0x4010,
    0x1e800000: 0x40080010,
    0x1f800000: 0x84000,
  },
  {
    0x0: 0x104,
    0x100000: 0x0,
    0x200000: 0x4000100,
    0x300000: 0x10104,
    0x400000: 0x10004,
    0x500000: 0x4000004,
    0x600000: 0x4010104,
    0x700000: 0x4010000,
    0x800000: 0x4000000,
    0x900000: 0x4010100,
    0xa00000: 0x10100,
    0xb00000: 0x4010004,
    0xc00000: 0x4000104,
    0xd00000: 0x10000,
    0xe00000: 0x4,
    0xf00000: 0x100,
    0x80000: 0x4010100,
    0x180000: 0x4010004,
    0x280000: 0x0,
    0x380000: 0x4000100,
    0x480000: 0x4000004,
    0x580000: 0x10000,
    0x680000: 0x10004,
    0x780000: 0x104,
    0x880000: 0x4,
    0x980000: 0x100,
    0xa80000: 0x4010000,
    0xb80000: 0x10104,
    0xc80000: 0x10100,
    0xd80000: 0x4000104,
    0xe80000: 0x4010104,
    0xf80000: 0x4000000,
    0x1000000: 0x4010100,
    0x1100000: 0x10004,
    0x1200000: 0x10000,
    0x1300000: 0x4000100,
    0x1400000: 0x100,
    0x1500000: 0x4010104,
    0x1600000: 0x4000004,
    0x1700000: 0x0,
    0x1800000: 0x4000104,
    0x1900000: 0x4000000,
    0x1a00000: 0x4,
    0x1b00000: 0x10100,
    0x1c00000: 0x4010000,
    0x1d00000: 0x104,
    0x1e00000: 0x10104,
    0x1f00000: 0x4010004,
    0x1080000: 0x4000000,
    0x1180000: 0x104,
    0x1280000: 0x4010100,
    0x1380000: 0x0,
    0x1480000: 0x10004,
    0x1580000: 0x4000100,
    0x1680000: 0x100,
    0x1780000: 0x4010004,
    0x1880000: 0x10000,
    0x1980000: 0x4010104,
    0x1a80000: 0x10104,
    0x1b80000: 0x4000004,
    0x1c80000: 0x4000104,
    0x1d80000: 0x4010000,
    0x1e80000: 0x4,
    0x1f80000: 0x10100,
  },
  {
    0x0: 0x80401000,
    0x10000: 0x80001040,
    0x20000: 0x401040,
    0x30000: 0x80400000,
    0x40000: 0x0,
    0x50000: 0x401000,
    0x60000: 0x80000040,
    0x70000: 0x400040,
    0x80000: 0x80000000,
    0x90000: 0x400000,
    0xa0000: 0x40,
    0xb0000: 0x80001000,
    0xc0000: 0x80400040,
    0xd0000: 0x1040,
    0xe0000: 0x1000,
    0xf0000: 0x80401040,
    0x8000: 0x80001040,
    0x18000: 0x40,
    0x28000: 0x80400040,
    0x38000: 0x80001000,
    0x48000: 0x401000,
    0x58000: 0x80401040,
    0x68000: 0x0,
    0x78000: 0x80400000,
    0x88000: 0x1000,
    0x98000: 0x80401000,
    0xa8000: 0x400000,
    0xb8000: 0x1040,
    0xc8000: 0x80000000,
    0xd8000: 0x400040,
    0xe8000: 0x401040,
    0xf8000: 0x80000040,
    0x100000: 0x400040,
    0x110000: 0x401000,
    0x120000: 0x80000040,
    0x130000: 0x0,
    0x140000: 0x1040,
    0x150000: 0x80400040,
    0x160000: 0x80401000,
    0x170000: 0x80001040,
    0x180000: 0x80401040,
    0x190000: 0x80000000,
    0x1a0000: 0x80400000,
    0x1b0000: 0x401040,
    0x1c0000: 0x80001000,
    0x1d0000: 0x400000,
    0x1e0000: 0x40,
    0x1f0000: 0x1000,
    0x108000: 0x80400000,
    0x118000: 0x80401040,
    0x128000: 0x0,
    0x138000: 0x401000,
    0x148000: 0x400040,
    0x158000: 0x80000000,
    0x168000: 0x80001040,
    0x178000: 0x40,
    0x188000: 0x80000040,
    0x198000: 0x1000,
    0x1a8000: 0x80001000,
    0x1b8000: 0x80400040,
    0x1c8000: 0x1040,
    0x1d8000: 0x80401000,
    0x1e8000: 0x400000,
    0x1f8000: 0x401040,
  },
  {
    0x0: 0x80,
    0x1000: 0x1040000,
    0x2000: 0x40000,
    0x3000: 0x20000000,
    0x4000: 0x20040080,
    0x5000: 0x1000080,
    0x6000: 0x21000080,
    0x7000: 0x40080,
    0x8000: 0x1000000,
    0x9000: 0x20040000,
    0xa000: 0x20000080,
    0xb000: 0x21040080,
    0xc000: 0x21040000,
    0xd000: 0x0,
    0xe000: 0x1040080,
    0xf000: 0x21000000,
    0x800: 0x1040080,
    0x1800: 0x21000080,
    0x2800: 0x80,
    0x3800: 0x1040000,
    0x4800: 0x40000,
    0x5800: 0x20040080,
    0x6800: 0x21040000,
    0x7800: 0x20000000,
    0x8800: 0x20040000,
    0x9800: 0x0,
    0xa800: 0x21040080,
    0xb800: 0x1000080,
    0xc800: 0x20000080,
    0xd800: 0x21000000,
    0xe800: 0x1000000,
    0xf800: 0x40080,
    0x10000: 0x40000,
    0x11000: 0x80,
    0x12000: 0x20000000,
    0x13000: 0x21000080,
    0x14000: 0x1000080,
    0x15000: 0x21040000,
    0x16000: 0x20040080,
    0x17000: 0x1000000,
    0x18000: 0x21040080,
    0x19000: 0x21000000,
    0x1a000: 0x1040000,
    0x1b000: 0x20040000,
    0x1c000: 0x40080,
    0x1d000: 0x20000080,
    0x1e000: 0x0,
    0x1f000: 0x1040080,
    0x10800: 0x21000080,
    0x11800: 0x1000000,
    0x12800: 0x1040000,
    0x13800: 0x20040080,
    0x14800: 0x20000000,
    0x15800: 0x1040080,
    0x16800: 0x80,
    0x17800: 0x21040000,
    0x18800: 0x40080,
    0x19800: 0x21040080,
    0x1a800: 0x0,
    0x1b800: 0x21000000,
    0x1c800: 0x1000080,
    0x1d800: 0x40000,
    0x1e800: 0x20040000,
    0x1f800: 0x20000080,
  },
  {
    0x0: 0x10000008,
    0x100: 0x2000,
    0x200: 0x10200000,
    0x300: 0x10202008,
    0x400: 0x10002000,
    0x500: 0x200000,
    0x600: 0x200008,
    0x700: 0x10000000,
    0x800: 0x0,
    0x900: 0x10002008,
    0xa00: 0x202000,
    0xb00: 0x8,
    0xc00: 0x10200008,
    0xd00: 0x202008,
    0xe00: 0x2008,
    0xf00: 0x10202000,
    0x80: 0x10200000,
    0x180: 0x10202008,
    0x280: 0x8,
    0x380: 0x200000,
    0x480: 0x202008,
    0x580: 0x10000008,
    0x680: 0x10002000,
    0x780: 0x2008,
    0x880: 0x200008,
    0x980: 0x2000,
    0xa80: 0x10002008,
    0xb80: 0x10200008,
    0xc80: 0x0,
    0xd80: 0x10202000,
    0xe80: 0x202000,
    0xf80: 0x10000000,
    0x1000: 0x10002000,
    0x1100: 0x10200008,
    0x1200: 0x10202008,
    0x1300: 0x2008,
    0x1400: 0x200000,
    0x1500: 0x10000000,
    0x1600: 0x10000008,
    0x1700: 0x202000,
    0x1800: 0x202008,
    0x1900: 0x0,
    0x1a00: 0x8,
    0x1b00: 0x10200000,
    0x1c00: 0x2000,
    0x1d00: 0x10002008,
    0x1e00: 0x10202000,
    0x1f00: 0x200008,
    0x1080: 0x8,
    0x1180: 0x202000,
    0x1280: 0x200000,
    0x1380: 0x10000008,
    0x1480: 0x10002000,
    0x1580: 0x2008,
    0x1680: 0x10202008,
    0x1780: 0x10200000,
    0x1880: 0x10202000,
    0x1980: 0x10200008,
    0x1a80: 0x2000,
    0x1b80: 0x202008,
    0x1c80: 0x200008,
    0x1d80: 0x0,
    0x1e80: 0x10000000,
    0x1f80: 0x10002008,
  },
  {
    0x0: 0x100000,
    0x10: 0x2000401,
    0x20: 0x400,
    0x30: 0x100401,
    0x40: 0x2100401,
    0x50: 0x0,
    0x60: 0x1,
    0x70: 0x2100001,
    0x80: 0x2000400,
    0x90: 0x100001,
    0xa0: 0x2000001,
    0xb0: 0x2100400,
    0xc0: 0x2100000,
    0xd0: 0x401,
    0xe0: 0x100400,
    0xf0: 0x2000000,
    0x8: 0x2100001,
    0x18: 0x0,
    0x28: 0x2000401,
    0x38: 0x2100400,
    0x48: 0x100000,
    0x58: 0x2000001,
    0x68: 0x2000000,
    0x78: 0x401,
    0x88: 0x100401,
    0x98: 0x2000400,
    0xa8: 0x2100000,
    0xb8: 0x100001,
    0xc8: 0x400,
    0xd8: 0x2100401,
    0xe8: 0x1,
    0xf8: 0x100400,
    0x100: 0x2000000,
    0x110: 0x100000,
    0x120: 0x2000401,
    0x130: 0x2100001,
    0x140: 0x100001,
    0x150: 0x2000400,
    0x160: 0x2100400,
    0x170: 0x100401,
    0x180: 0x401,
    0x190: 0x2100401,
    0x1a0: 0x100400,
    0x1b0: 0x1,
    0x1c0: 0x0,
    0x1d0: 0x2100000,
    0x1e0: 0x2000001,
    0x1f0: 0x400,
    0x108: 0x100400,
    0x118: 0x2000401,
    0x128: 0x2100001,
    0x138: 0x1,
    0x148: 0x2000000,
    0x158: 0x100000,
    0x168: 0x401,
    0x178: 0x2100400,
    0x188: 0x2000001,
    0x198: 0x2100000,
    0x1a8: 0x0,
    0x1b8: 0x2100401,
    0x1c8: 0x100401,
    0x1d8: 0x400,
    0x1e8: 0x2000400,
    0x1f8: 0x100001,
  },
  {
    0x0: 0x8000820,
    0x1: 0x20000,
    0x2: 0x8000000,
    0x3: 0x20,
    0x4: 0x20020,
    0x5: 0x8020820,
    0x6: 0x8020800,
    0x7: 0x800,
    0x8: 0x8020000,
    0x9: 0x8000800,
    0xa: 0x20800,
    0xb: 0x8020020,
    0xc: 0x820,
    0xd: 0x0,
    0xe: 0x8000020,
    0xf: 0x20820,
    0x80000000: 0x800,
    0x80000001: 0x8020820,
    0x80000002: 0x8000820,
    0x80000003: 0x8000000,
    0x80000004: 0x8020000,
    0x80000005: 0x20800,
    0x80000006: 0x20820,
    0x80000007: 0x20,
    0x80000008: 0x8000020,
    0x80000009: 0x820,
    0x8000000a: 0x20020,
    0x8000000b: 0x8020800,
    0x8000000c: 0x0,
    0x8000000d: 0x8020020,
    0x8000000e: 0x8000800,
    0x8000000f: 0x20000,
    0x10: 0x20820,
    0x11: 0x8020800,
    0x12: 0x20,
    0x13: 0x800,
    0x14: 0x8000800,
    0x15: 0x8000020,
    0x16: 0x8020020,
    0x17: 0x20000,
    0x18: 0x0,
    0x19: 0x20020,
    0x1a: 0x8020000,
    0x1b: 0x8000820,
    0x1c: 0x8020820,
    0x1d: 0x20800,
    0x1e: 0x820,
    0x1f: 0x8000000,
    0x80000010: 0x20000,
    0x80000011: 0x800,
    0x80000012: 0x8020020,
    0x80000013: 0x20820,
    0x80000014: 0x20,
    0x80000015: 0x8020000,
    0x80000016: 0x8000000,
    0x80000017: 0x8000820,
    0x80000018: 0x8020820,
    0x80000019: 0x8000020,
    0x8000001a: 0x8000800,
    0x8000001b: 0x0,
    0x8000001c: 0x20800,
    0x8000001d: 0x820,
    0x8000001e: 0x20020,
    0x8000001f: 0x8020800,
  },
];

// Masks that select the SBOX input
const SBOX_MASK = [
  0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
  0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f,
];

// Swap bits across the left and right words
function exchangeLR(offset, mask) {
  const t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
  this._rBlock ^= t;
  this._lBlock ^= t << offset;
}

function exchangeRL(offset, mask) {
  const t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
  this._lBlock ^= t;
  this._rBlock ^= t << offset;
}

/**
 * DES block cipher algorithm.
 */
class DESAlgo extends BlockCipher {
  _doReset() {
    // Shortcuts
    const key = this._key;
    const keyWords = key.words;

    // Select 56 bits according to PC1
    const keyBits = [];
    for (let i = 0; i < 56; i += 1) {
      const keyBitPos = PC1[i] - 1;
      keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - (keyBitPos % 32))) & 1;
    }

    // Assemble 16 subkeys
    this._subKeys = [];
    const subKeys = this._subKeys;
    for (let nSubKey = 0; nSubKey < 16; nSubKey += 1) {
      // Create subkey
      subKeys[nSubKey] = [];
      const subKey = subKeys[nSubKey];

      // Shortcut
      const bitShift = BIT_SHIFTS[nSubKey];

      // Select 48 bits according to PC2
      for (let i = 0; i < 24; i += 1) {
        // Select from the left 28 key bits
        subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - (i % 6));

        // Select from the right 28 key bits
        subKey[4 + ((i / 6) | 0)]
          |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)]
          << (31 - (i % 6));
      }

      // Since each subkey is applied to an expanded 32-bit input,
      // the subkey can be broken into 8 values scaled to 32-bits,
      // which allows the key to be used without expansion
      subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
      for (let i = 1; i < 7; i += 1) {
        subKey[i] >>>= ((i - 1) * 4 + 3);
      }
      subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
    }

    // Compute inverse subkeys
    this._invSubKeys = [];
    const invSubKeys = this._invSubKeys;
    for (let i = 0; i < 16; i += 1) {
      invSubKeys[i] = subKeys[15 - i];
    }
  }

  encryptBlock(M, offset) {
    this._doCryptBlock(M, offset, this._subKeys);
  }

  decryptBlock(M, offset) {
    this._doCryptBlock(M, offset, this._invSubKeys);
  }

  _doCryptBlock(M, offset, subKeys) {
    const _M = M;

    // Get input
    this._lBlock = M[offset];
    this._rBlock = M[offset + 1];

    // Initial permutation
    exchangeLR.call(this, 4, 0x0f0f0f0f);
    exchangeLR.call(this, 16, 0x0000ffff);
    exchangeRL.call(this, 2, 0x33333333);
    exchangeRL.call(this, 8, 0x00ff00ff);
    exchangeLR.call(this, 1, 0x55555555);

    // Rounds
    for (let round = 0; round < 16; round += 1) {
      // Shortcuts
      const subKey = subKeys[round];
      const lBlock = this._lBlock;
      const rBlock = this._rBlock;

      // Feistel function
      let f = 0;
      for (let i = 0; i < 8; i += 1) {
        f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
      }
      this._lBlock = rBlock;
      this._rBlock = lBlock ^ f;
    }

    // Undo swap from last round
    const t = this._lBlock;
    this._lBlock = this._rBlock;
    this._rBlock = t;

    // Final permutation
    exchangeLR.call(this, 1, 0x55555555);
    exchangeRL.call(this, 8, 0x00ff00ff);
    exchangeRL.call(this, 2, 0x33333333);
    exchangeLR.call(this, 16, 0x0000ffff);
    exchangeLR.call(this, 4, 0x0f0f0f0f);

    // Set output
    _M[offset] = this._lBlock;
    _M[offset + 1] = this._rBlock;
  }
}
DESAlgo.keySize = 64 / 32;
DESAlgo.ivSize = 64 / 32;
DESAlgo.blockSize = 64 / 32;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
 */
const DES = BlockCipher._createHelper(DESAlgo);

/**
 * Triple-DES block cipher algorithm.
 */
class TripleDESAlgo extends BlockCipher {
  _doReset() {
    // Shortcuts
    const key = this._key;
    const keyWords = key.words;
    // Make sure the key length is valid (64, 128 or >= 192 bit)
    if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
      throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
    }

    // Extend the key according to the keying options defined in 3DES standard
    const key1 = keyWords.slice(0, 2);
    const key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
    const key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

    // Create DES instances
    this._des1 = DESAlgo.createEncryptor(WordArray.create(key1));
    this._des2 = DESAlgo.createEncryptor(WordArray.create(key2));
    this._des3 = DESAlgo.createEncryptor(WordArray.create(key3));
  }

  encryptBlock(M, offset) {
    this._des1.encryptBlock(M, offset);
    this._des2.decryptBlock(M, offset);
    this._des3.encryptBlock(M, offset);
  }

  decryptBlock(M, offset) {
    this._des3.decryptBlock(M, offset);
    this._des2.encryptBlock(M, offset);
    this._des1.decryptBlock(M, offset);
  }
}
TripleDESAlgo.keySize = 192 / 32;
TripleDESAlgo.ivSize = 64 / 32;
TripleDESAlgo.blockSize = 64 / 32;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
 */
const TripleDES = BlockCipher._createHelper(TripleDESAlgo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/rabbit.js


// Reusable objects
const S = [];
const C_ = [];
const G = [];

function nextState() {
  // Shortcuts
  const X = this._X;
  const C = this._C;

  // Save old counter values
  for (let i = 0; i < 8; i += 1) {
    C_[i] = C[i];
  }

  // Calculate new counter values
  C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
  C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
  C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
  C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
  C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
  C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
  C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
  C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
  this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

  // Calculate the g-values
  for (let i = 0; i < 8; i += 1) {
    const gx = X[i] + C[i];

    // Construct high and low argument for squaring
    const ga = gx & 0xffff;
    const gb = gx >>> 16;

    // Calculate high and low result of squaring
    const gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    const gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    // High XOR low
    G[i] = gh ^ gl;
  }

  // Calculate new state values
  X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
  X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
  X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
  X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
  X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
  X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
  X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
  X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
}

/**
 * Rabbit stream cipher algorithm
 */
class RabbitAlgo extends StreamCipher {
  constructor(...args) {
    super(...args);

    this.blockSize = 128 / 32;
    this.ivSize = 64 / 32;
  }

  _doReset() {
    // Shortcuts
    const K = this._key.words;
    const { iv } = this.cfg;

    // Swap endian
    for (let i = 0; i < 4; i += 1) {
      K[i] = (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff)
        | (((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
    }

    // Generate initial state values
    this._X = [
      K[0], (K[3] << 16) | (K[2] >>> 16),
      K[1], (K[0] << 16) | (K[3] >>> 16),
      K[2], (K[1] << 16) | (K[0] >>> 16),
      K[3], (K[2] << 16) | (K[1] >>> 16),
    ];
    const X = this._X;

    // Generate initial counter values
    this._C = [
      (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
      (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
      (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
      (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
    ];
    const C = this._C;

    // Carry bit
    this._b = 0;

    // Iterate the system four times
    for (let i = 0; i < 4; i += 1) {
      nextState.call(this);
    }

    // Modify the counters
    for (let i = 0; i < 8; i += 1) {
      C[i] ^= X[(i + 4) & 7];
    }

    // IV setup
    if (iv) {
      // Shortcuts
      const IV = iv.words;
      const IV_0 = IV[0];
      const IV_1 = IV[1];

      // Generate four subvectors
      const i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff)
        | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
      const i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff)
        | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
      const i1 = (i0 >>> 16) | (i2 & 0xffff0000);
      const i3 = (i2 << 16) | (i0 & 0x0000ffff);

      // Modify counter values
      C[0] ^= i0;
      C[1] ^= i1;
      C[2] ^= i2;
      C[3] ^= i3;
      C[4] ^= i0;
      C[5] ^= i1;
      C[6] ^= i2;
      C[7] ^= i3;

      // Iterate the system four times
      for (let i = 0; i < 4; i += 1) {
        nextState.call(this);
      }
    }
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Shortcut
    const X = this._X;

    // Iterate the system
    nextState.call(this);

    // Generate four keystream words
    S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    for (let i = 0; i < 4; i += 1) {
      // Swap endian
      S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff)
        | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);

      // Encrypt
      _M[offset + i] ^= S[i];
    }
  }
}

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
 */
const Rabbit = StreamCipher._createHelper(RabbitAlgo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/rabbit-legacy.js


// Reusable objects
const rabbit_legacy_S = [];
const rabbit_legacy_C_ = [];
const rabbit_legacy_G = [];

function rabbit_legacy_nextState() {
  // Shortcuts
  const X = this._X;
  const C = this._C;

  // Save old counter values
  for (let i = 0; i < 8; i += 1) {
    rabbit_legacy_C_[i] = C[i];
  }

  // Calculate new counter values
  C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
  C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (rabbit_legacy_C_[0] >>> 0) ? 1 : 0)) | 0;
  C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (rabbit_legacy_C_[1] >>> 0) ? 1 : 0)) | 0;
  C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (rabbit_legacy_C_[2] >>> 0) ? 1 : 0)) | 0;
  C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (rabbit_legacy_C_[3] >>> 0) ? 1 : 0)) | 0;
  C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (rabbit_legacy_C_[4] >>> 0) ? 1 : 0)) | 0;
  C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (rabbit_legacy_C_[5] >>> 0) ? 1 : 0)) | 0;
  C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (rabbit_legacy_C_[6] >>> 0) ? 1 : 0)) | 0;
  this._b = (C[7] >>> 0) < (rabbit_legacy_C_[7] >>> 0) ? 1 : 0;

  // Calculate the g-values
  for (let i = 0; i < 8; i += 1) {
    const gx = X[i] + C[i];

    // Construct high and low argument for squaring
    const ga = gx & 0xffff;
    const gb = gx >>> 16;

    // Calculate high and low result of squaring
    const gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    const gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    // High XOR low
    rabbit_legacy_G[i] = gh ^ gl;
  }

  // Calculate new state values
  X[0] = (rabbit_legacy_G[0] + ((rabbit_legacy_G[7] << 16) | (rabbit_legacy_G[7] >>> 16)) + ((rabbit_legacy_G[6] << 16) | (rabbit_legacy_G[6] >>> 16))) | 0;
  X[1] = (rabbit_legacy_G[1] + ((rabbit_legacy_G[0] << 8) | (rabbit_legacy_G[0] >>> 24)) + rabbit_legacy_G[7]) | 0;
  X[2] = (rabbit_legacy_G[2] + ((rabbit_legacy_G[1] << 16) | (rabbit_legacy_G[1] >>> 16)) + ((rabbit_legacy_G[0] << 16) | (rabbit_legacy_G[0] >>> 16))) | 0;
  X[3] = (rabbit_legacy_G[3] + ((rabbit_legacy_G[2] << 8) | (rabbit_legacy_G[2] >>> 24)) + rabbit_legacy_G[1]) | 0;
  X[4] = (rabbit_legacy_G[4] + ((rabbit_legacy_G[3] << 16) | (rabbit_legacy_G[3] >>> 16)) + ((rabbit_legacy_G[2] << 16) | (rabbit_legacy_G[2] >>> 16))) | 0;
  X[5] = (rabbit_legacy_G[5] + ((rabbit_legacy_G[4] << 8) | (rabbit_legacy_G[4] >>> 24)) + rabbit_legacy_G[3]) | 0;
  X[6] = (rabbit_legacy_G[6] + ((rabbit_legacy_G[5] << 16) | (rabbit_legacy_G[5] >>> 16)) + ((rabbit_legacy_G[4] << 16) | (rabbit_legacy_G[4] >>> 16))) | 0;
  X[7] = (rabbit_legacy_G[7] + ((rabbit_legacy_G[6] << 8) | (rabbit_legacy_G[6] >>> 24)) + rabbit_legacy_G[5]) | 0;
}

/**
 * Rabbit stream cipher algorithm.
 *
 * This is a legacy version that neglected to convert the key to little-endian.
 * This error doesn't affect the cipher's security,
 * but it does affect its compatibility with other implementations.
 */
class RabbitLegacyAlgo extends StreamCipher {
  constructor(...args) {
    super(...args);

    this.blockSize = 128 / 32;
    this.ivSize = 64 / 32;
  }

  _doReset() {
    // Shortcuts
    const K = this._key.words;
    const { iv } = this.cfg;

    // Generate initial state values
    this._X = [
      K[0], (K[3] << 16) | (K[2] >>> 16),
      K[1], (K[0] << 16) | (K[3] >>> 16),
      K[2], (K[1] << 16) | (K[0] >>> 16),
      K[3], (K[2] << 16) | (K[1] >>> 16),
    ];
    const X = this._X;

    // Generate initial counter values
    this._C = [
      (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
      (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
      (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
      (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
    ];
    const C = this._C;

    // Carry bit
    this._b = 0;

    // Iterate the system four times
    for (let i = 0; i < 4; i += 1) {
      rabbit_legacy_nextState.call(this);
    }

    // Modify the counters
    for (let i = 0; i < 8; i += 1) {
      C[i] ^= X[(i + 4) & 7];
    }

    // IV setup
    if (iv) {
      // Shortcuts
      const IV = iv.words;
      const IV_0 = IV[0];
      const IV_1 = IV[1];

      // Generate four subvectors
      const i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff)
        | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
      const i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff)
        | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
      const i1 = (i0 >>> 16) | (i2 & 0xffff0000);
      const i3 = (i2 << 16) | (i0 & 0x0000ffff);

      // Modify counter values
      C[0] ^= i0;
      C[1] ^= i1;
      C[2] ^= i2;
      C[3] ^= i3;
      C[4] ^= i0;
      C[5] ^= i1;
      C[6] ^= i2;
      C[7] ^= i3;

      // Iterate the system four times
      for (let i = 0; i < 4; i += 1) {
        rabbit_legacy_nextState.call(this);
      }
    }
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Shortcut
    const X = this._X;

    // Iterate the system
    rabbit_legacy_nextState.call(this);

    // Generate four keystream words
    rabbit_legacy_S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    rabbit_legacy_S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    rabbit_legacy_S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    rabbit_legacy_S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    for (let i = 0; i < 4; i += 1) {
      // Swap endian
      rabbit_legacy_S[i] = (((rabbit_legacy_S[i] << 8) | (rabbit_legacy_S[i] >>> 24)) & 0x00ff00ff)
        | (((rabbit_legacy_S[i] << 24) | (rabbit_legacy_S[i] >>> 8)) & 0xff00ff00);

      // Encrypt
      _M[offset + i] ^= rabbit_legacy_S[i];
    }
  }
}

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
 */
const RabbitLegacy = StreamCipher._createHelper(RabbitLegacyAlgo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/rc4.js


function generateKeystreamWord() {
  // Shortcuts
  const S = this._S;
  let i = this._i;
  let j = this._j;

  // Generate keystream word
  let keystreamWord = 0;
  for (let n = 0; n < 4; n += 1) {
    i = (i + 1) % 256;
    j = (j + S[i]) % 256;

    // Swap
    const t = S[i];
    S[i] = S[j];
    S[j] = t;

    keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
  }

  // Update counters
  this._i = i;
  this._j = j;

  return keystreamWord;
}

/**
 * RC4 stream cipher algorithm.
 */
class RC4Algo extends StreamCipher {
  _doReset() {
    // Shortcuts
    const key = this._key;
    const keyWords = key.words;
    const keySigBytes = key.sigBytes;

    // Init sbox
    this._S = [];
    const S = this._S;
    for (let i = 0; i < 256; i += 1) {
      S[i] = i;
    }

    // Key setup
    for (let i = 0, j = 0; i < 256; i += 1) {
      const keyByteIndex = i % keySigBytes;
      const keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

      j = (j + S[i] + keyByte) % 256;

      // Swap
      const t = S[i];
      S[i] = S[j];
      S[j] = t;
    }

    // Counters
    this._j = 0;
    this._i = this._j;
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    _M[offset] ^= generateKeystreamWord.call(this);
  }
}
RC4Algo.keySize = 256 / 32;
RC4Algo.ivSize = 0;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
 */
const RC4 = StreamCipher._createHelper(RC4Algo);

/**
 * Modified RC4 stream cipher algorithm.
 */
class RC4DropAlgo extends RC4Algo {
  constructor(...args) {
    super(...args);

    /**
     * Configuration options.
     *
     * @property {number} drop The number of keystream words to drop. Default 192
     */
    Object.assign(this.cfg, { drop: 192 });
  }

  _doReset() {
    super._doReset.call(this);

    // Drop
    for (let i = this.cfg.drop; i > 0; i -= 1) {
      generateKeystreamWord.call(this);
    }
  }
}

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
 */
const RC4Drop = StreamCipher._createHelper(RC4DropAlgo);

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/mode-cfb.js


function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
  const _words = words;
  let keystream;

  // Shortcut
  const iv = this._iv;

  // Generate keystream
  if (iv) {
    keystream = iv.slice(0);

    // Remove IV for subsequent blocks
    this._iv = undefined;
  } else {
    keystream = this._prevBlock;
  }
  cipher.encryptBlock(keystream, 0);

  // Encrypt
  for (let i = 0; i < blockSize; i += 1) {
    _words[offset + i] ^= keystream[i];
  }
}

/**
 * Cipher Feedback block mode.
 */
class CFB extends BlockCipherMode {
}
CFB.Encryptor = class extends CFB {
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    // Remember this block to use with next block
    this._prevBlock = words.slice(offset, offset + blockSize);
  }
};
CFB.Decryptor = class extends CFB {
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    // Remember this block to use with next block
    const thisBlock = words.slice(offset, offset + blockSize);

    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    // This block becomes the previous block
    this._prevBlock = thisBlock;
  }
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/mode-ctr.js
/**
 * Counter block mode.
 */


class CTR extends BlockCipherMode {
}
CTR.Encryptor = class extends CTR {
  processBlock(words, offset) {
    const _words = words;

    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let counter = this._counter;

    // Generate keystream
    if (iv) {
      this._counter = iv.slice(0);
      counter = this._counter;

      // Remove IV for subsequent blocks
      this._iv = undefined;
    }
    const keystream = counter.slice(0);
    cipher.encryptBlock(keystream, 0);

    // Increment counter
    counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

    // Encrypt
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
CTR.Decryptor = CTR.Encryptor;

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/mode-ctr-gladman.js


const incWord = (word) => {
  let _word = word;

  if (((word >> 24) & 0xff) === 0xff) { // overflow
    let b1 = (word >> 16) & 0xff;
    let b2 = (word >> 8) & 0xff;
    let b3 = word & 0xff;

    if (b1 === 0xff) { // overflow b1
      b1 = 0;
      if (b2 === 0xff) {
        b2 = 0;
        if (b3 === 0xff) {
          b3 = 0;
        } else {
          b3 += 1;
        }
      } else {
        b2 += 1;
      }
    } else {
      b1 += 1;
    }

    _word = 0;
    _word += (b1 << 16);
    _word += (b2 << 8);
    _word += b3;
  } else {
    _word += (0x01 << 24);
  }
  return _word;
};

const incCounter = (counter) => {
  const _counter = counter;
  _counter[0] = incWord(_counter[0]);

  if (_counter[0] === 0) {
    // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
    _counter[1] = incWord(_counter[1]);
  }
  return _counter;
};

/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
class CTRGladman extends BlockCipherMode {
}
CTRGladman.Encryptor = class extends CTRGladman {
  processBlock(words, offset) {
    const _words = words;

    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let counter = this._counter;

    // Generate keystream
    if (iv) {
      this._counter = iv.slice(0);
      counter = this._counter;

      // Remove IV for subsequent blocks
      this._iv = undefined;
    }

    incCounter(counter);

    const keystream = counter.slice(0);
    cipher.encryptBlock(keystream, 0);

    // Encrypt
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
CTRGladman.Decryptor = CTRGladman.Encryptor;

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/mode-ecb.js
/**
 * Electronic Codebook block mode.
 */


class ECB extends BlockCipherMode {
}
ECB.Encryptor = class extends ECB {
  processBlock(words, offset) {
    this._cipher.encryptBlock(words, offset);
  }
};
ECB.Decryptor = class extends ECB {
  processBlock(words, offset) {
    this._cipher.decryptBlock(words, offset);
  }
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/mode-ofb.js
/**
 * Output Feedback block mode.
 */


class OFB extends BlockCipherMode {
}
OFB.Encryptor = class extends OFB {
  processBlock(words, offset) {
    const _words = words;

    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let keystream = this._keystream;

    // Generate keystream
    if (iv) {
      this._keystream = iv.slice(0);
      keystream = this._keystream;

      // Remove IV for subsequent blocks
      this._iv = undefined;
    }
    cipher.encryptBlock(keystream, 0);

    // Encrypt
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
OFB.Decryptor = OFB.Encryptor;

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/pad-ansix923.js
/**
 * ANSI X.923 padding strategy.
 */
const AnsiX923 = {
  pad(data, blockSize) {
    const _data = data;

    // Shortcuts
    const dataSigBytes = _data.sigBytes;
    const blockSizeBytes = blockSize * 4;

    // Count padding bytes
    const nPaddingBytes = blockSizeBytes - (dataSigBytes % blockSizeBytes);

    // Compute last byte position
    const lastBytePos = dataSigBytes + nPaddingBytes - 1;

    // Pad
    _data.clamp();
    _data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
    _data.sigBytes += nPaddingBytes;
  },

  unpad(data) {
    const _data = data;

    // Get number of padding bytes from last byte
    const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

    // Remove padding
    _data.sigBytes -= nPaddingBytes;
  },
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/pad-iso10126.js


/**
 * ISO 10126 padding strategy.
 */
const Iso10126 = {
  pad(data, blockSize) {
    // Shortcut
    const blockSizeBytes = blockSize * 4;

    // Count padding bytes
    const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);

    // Pad
    data
      .concat(WordArray.random(nPaddingBytes - 1))
      .concat(WordArray.create([nPaddingBytes << 24], 1));
  },

  unpad(data) {
    const _data = data;
    // Get number of padding bytes from last byte
    const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

    // Remove padding
    _data.sigBytes -= nPaddingBytes;
  },
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/pad-zeropadding.js
/**
 * Zero padding strategy.
 */
const ZeroPadding = {
  pad(data, blockSize) {
    const _data = data;

    // Shortcut
    const blockSizeBytes = blockSize * 4;

    // Pad
    _data.clamp();
    _data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
  },

  unpad(data) {
    const _data = data;

    // Shortcut
    const dataWords = _data.words;

    // Unpad
    for (let i = _data.sigBytes - 1; i >= 0; i -= 1) {
      if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
        _data.sigBytes = i + 1;
        break;
      }
    }
  },
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/pad-iso97971.js



/**
 * ISO/IEC 9797-1 Padding Method 2.
 */
const Iso97971 = {
  pad(data, blockSize) {
    // Add 0x80 byte
    data.concat(WordArray.create([0x80000000], 1));

    // Zero pad the rest
    ZeroPadding.pad(data, blockSize);
  },

  unpad(data) {
    const _data = data;

    // Remove zero padding
    ZeroPadding.unpad(_data);

    // Remove one more byte -- the 0x80 byte
    _data.sigBytes -= 1;
  },
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/pad-nopadding.js
/**
 * A noop padding strategy.
 */
const NoPadding = {
  pad() {
  },

  unpad() {
  },
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/format-hex.js



const HexFormatter = {
  /**
   * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
   *
   * @param {CipherParams} cipherParams The cipher params object.
   *
   * @return {string} The hexadecimally encoded string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
   */
  stringify(cipherParams) {
    return cipherParams.ciphertext.toString(Hex);
  },

  /**
   * Converts a hexadecimally encoded ciphertext string to a cipher params object.
   *
   * @param {string} input The hexadecimally encoded string.
   *
   * @return {CipherParams} The cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
   */
  parse(input) {
    const ciphertext = Hex.parse(input);
    return CipherParams.create({ ciphertext });
  },
};

;// CONCATENATED MODULE: ./node_modules/crypto-es/lib/index.js


































/* harmony default export */ const lib = ({
  lib: {
    Base: Base,
    WordArray: WordArray,
    BufferedBlockAlgorithm: BufferedBlockAlgorithm,
    Hasher: Hasher,
    Cipher: Cipher,
    StreamCipher: StreamCipher,
    BlockCipherMode: BlockCipherMode,
    BlockCipher: BlockCipher,
    CipherParams: CipherParams,
    SerializableCipher: SerializableCipher,
    PasswordBasedCipher: PasswordBasedCipher,
  },

  x64: {
    Word: X64Word,
    WordArray: X64WordArray,
  },

  enc: {
    Hex: Hex,
    Latin1: Latin1,
    Utf8: Utf8,
    Utf16: Utf16,
    Utf16BE: Utf16BE,
    Utf16LE: Utf16LE,
    Base64: Base64,
  },

  algo: {
    HMAC: HMAC,
    MD5: MD5Algo,
    SHA1: SHA1Algo,
    SHA224: SHA224Algo,
    SHA256: SHA256Algo,
    SHA384: SHA384Algo,
    SHA512: SHA512Algo,
    SHA3: SHA3Algo,
    RIPEMD160: RIPEMD160Algo,

    PBKDF2: PBKDF2Algo,
    EvpKDF: EvpKDFAlgo,

    AES: AESAlgo,
    DES: DESAlgo,
    TripleDES: TripleDESAlgo,
    Rabbit: RabbitAlgo,
    RabbitLegacy: RabbitLegacyAlgo,
    RC4: RC4Algo,
    RC4Drop: RC4DropAlgo,
  },

  mode: {
    CBC: CBC,
    CFB: CFB,
    CTR: CTR,
    CTRGladman: CTRGladman,
    ECB: ECB,
    OFB: OFB,
  },

  pad: {
    Pkcs7: Pkcs7,
    AnsiX923: AnsiX923,
    Iso10126: Iso10126,
    Iso97971: Iso97971,
    NoPadding: NoPadding,
    ZeroPadding: ZeroPadding,
  },

  format: {
    OpenSSL: OpenSSLFormatter,
    Hex: HexFormatter,
  },

  kdf: {
    OpenSSL: OpenSSLKdf,
  },

  MD5: MD5,
  HmacMD5: HmacMD5,
  SHA1: SHA1,
  HmacSHA1: HmacSHA1,
  SHA224: SHA224,
  HmacSHA224: HmacSHA224,
  SHA256: SHA256,
  HmacSHA256: HmacSHA256,
  SHA384: SHA384,
  HmacSHA384: HmacSHA384,
  SHA512: SHA512,
  HmacSHA512: HmacSHA512,
  SHA3: SHA3,
  HmacSHA3: HmacSHA3,
  RIPEMD160: RIPEMD160,
  HmacRIPEMD160: HmacRIPEMD160,

  PBKDF2: PBKDF2,
  EvpKDF: EvpKDF,

  AES: AES,
  DES: DES,
  TripleDES: TripleDES,
  Rabbit: Rabbit,
  RabbitLegacy: RabbitLegacy,
  RC4: RC4,
  RC4Drop: RC4Drop,
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(776982);
;// CONCATENATED MODULE: ./node_modules/nanoid/url-alphabet/index.js
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


;// CONCATENATED MODULE: ./node_modules/nanoid/index.js


const POOL_SIZE_MULTIPLIER = 128
let pool, poolOffset
let fillPool = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)
    external_crypto_.randomFillSync(pool)
    poolOffset = 0
  } else if (poolOffset + bytes > pool.length) {
    external_crypto_.randomFillSync(pool)
    poolOffset = 0
  }
  poolOffset += bytes
}
let random = bytes => {
  fillPool((bytes -= 0))
  return pool.subarray(poolOffset - bytes, poolOffset)
}
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let i = step
      while (i--) {
        id += alphabet[bytes[i] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  fillPool((size -= 0))
  let id = ''
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63]
  }
  return id
}


;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/tslib/tslib.es6.js
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

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isFunction.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/config.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/hostReportError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
//# sourceMappingURL=hostReportError.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/Observer.js
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isObject.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/Subscription.js
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();
var $$rxSubscriber = (/* unused pure expression or super */ null && (rxSubscriber));
//# sourceMappingURL=rxSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/Subscriber.js
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber_Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber_Subscriber));

//# sourceMappingURL=Subscriber.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/canReportError.js
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/toSubscriber.js
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_Subscriber(empty);
    }
    return new Subscriber_Subscriber(nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/symbol/observable.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable_observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/identity.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/pipe.js
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/Observable.js
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/SubjectSubscription.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

//# sourceMappingURL=SubjectSubscription.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/Subject.js
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_Subscriber));

var Subject = /*@__PURE__*/ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/operators/map.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_Subscriber));
//# sourceMappingURL=map.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/observable/fromEvent.js
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var fromEvent_toString = /*@__PURE__*/ (/* unused pure expression or super */ null && ((function () { return Object.prototype.toString; })()));
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduler/Action.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduler/async.js
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var asyncScheduler = /*@__PURE__*/ new AsyncScheduler(AsyncAction);
var async_async = asyncScheduler;
//# sourceMappingURL=async.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isNumeric.js
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isScheduler.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/observable/timer.js
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler(scheduler)) {
        scheduler = async_async;
    }
    return new Observable(function (subscriber) {
        var due = isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};
//# sourceMappingURL=subscribeToArray.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, hostReportError);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/symbol/iterator.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = (/* unused pure expression or super */ null && (iterator_iterator));
//# sourceMappingURL=iterator.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[iterator_iterator]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            }
            catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[observable_observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isArrayLike.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isPromise.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/subscribeTo.js
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */









var subscribeTo = function (result) {
    if (!!result && typeof result[observable_observable] === 'function') {
        return subscribeToObservable(result);
    }
    else if (isArrayLike(result)) {
        return subscribeToArray(result);
    }
    else if (isPromise(result)) {
        return subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_iterator] === 'function') {
        return subscribeToIterable(result);
    }
    else {
        var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */



function scheduleObservable(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            var observable = input[observable_observable]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function schedulePromise(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        }));
        return sub;
    });
}
//# sourceMappingURL=schedulePromise.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleArray.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */



function scheduleIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var iterator;
        sub.add(function () {
            if (iterator && typeof iterator.return === 'function') {
                iterator.return();
            }
        });
        sub.add(scheduler.schedule(function () {
            iterator = input[iterator_iterator]();
            sub.add(scheduler.schedule(function () {
                if (subscriber.closed) {
                    return;
                }
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleIterable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isInteropObservable.js
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[observable_observable] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/util/isIterable.js
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[iterator_iterator] === 'function';
}
//# sourceMappingURL=isIterable.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/scheduled/scheduled.js
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */








function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        else if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        else if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        else if (isIterable(input) || typeof input === 'string') {
            return scheduleIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=scheduled.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/observable/from.js
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */



function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable) {
            return input;
        }
        return new Observable(subscribeTo(input));
    }
    else {
        return scheduled(input, scheduler);
    }
}
//# sourceMappingURL=from.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/innerSubscribe.js
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */




var SimpleInnerSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(Subscriber_Subscriber));

var ComplexInnerSubscriber = /*@__PURE__*/ ((/* unused pure expression or super */ null && (function (_super) {
    tslib_1.__extends(ComplexInnerSubscriber, _super);
    function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber;
}(Subscriber))));

var SimpleOuterSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function () {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(Subscriber_Subscriber));

var ComplexOuterSubscriber = /*@__PURE__*/ ((/* unused pure expression or super */ null && (function (_super) {
    tslib_1.__extends(ComplexOuterSubscriber, _super);
    function ComplexOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber.prototype.notifyNext = function (_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber.prototype.notifyError = function (error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber.prototype.notifyComplete = function (_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber;
}(Subscriber))));

function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    var subscription;
    try {
        subscription = subscribeTo(result)(innerSubscriber);
    }
    catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}
//# sourceMappingURL=innerSubscribe.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/operators/mergeMap.js
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */




function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from(project(a, i)).pipe(map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function () {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(SimpleOuterSubscriber));

var flatMap = (/* unused pure expression or super */ null && (mergeMap));
//# sourceMappingURL=mergeMap.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/operators/mergeAll.js
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/observable/fromArray.js
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToArray(input));
    }
    else {
        return scheduleArray(input, scheduler);
    }
}
//# sourceMappingURL=fromArray.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/node_modules/rxjs/_esm5/internal/observable/merge.js
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
        return observables[0];
    }
    return mergeAll(concurrent)(fromArray(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

;// CONCATENATED MODULE: ./node_modules/bnc-sdk/dist/esm/index.js




const networks = {
  ethereum: {
    '1': 'main',
    '11155111': 'sepolia',
    '100': 'xdai',
    '137': 'matic-main',
    '80002': 'matic-amoy'
  }
};
const DEPRECATED_NETWORK_IDS = [2, 3, 4, 42, 56, 250];
const DEFAULT_RATE_LIMIT_RULES = {
  points: 150,
  duration: 1
};
const QUEUE_LIMIT = 10000;

function validateType(options) {
  const {
    name,
    value,
    type,
    optional,
    customValidation
  } = options;

  if (!optional && typeof value === 'undefined') {
    throw new Error(`"${name}" is required`);
  }

  if (typeof value !== 'undefined' && (type === 'array' ? Array.isArray(type) : typeof value !== type)) {
    throw new Error(`"${name}" must be of type: ${type}, received type: ${typeof value} from value: ${value}`);
  }

  if (typeof value !== 'undefined' && customValidation && !customValidation(value)) {
    throw new Error(`"${value}" is not a valid "${name}"`);
  }
}

function validateOptions(options) {
  validateType({
    name: 'sdk options',
    value: options,
    type: 'object'
  });
  const {
    dappId,
    system,
    name,
    appVersion,
    networkId,
    transactionHandlers,
    apiUrl,
    ws,
    onopen,
    ondown,
    onreopen,
    onerror,
    onclose,
    ...otherParams
  } = options;
  invalidParams(otherParams, ['dappId', 'system', 'name', 'appVersion', 'networkId', 'transactionHandlers', 'apiUrl', 'ws', 'onopen', 'ondown', 'onreopen', 'onerror', 'onclose'], 'Initialization Options');
  validateType({
    name: 'dappId',
    value: dappId,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'system',
    value: system,
    type: 'string',
    optional: true,
    customValidation: validSystem
  });
  validateType({
    name: 'name',
    value: name,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'appVersion',
    value: appVersion,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'networkId',
    value: networkId,
    type: 'number'
  });

  if (DEPRECATED_NETWORK_IDS.includes(networkId)) {
    console.error(`Blocknative SDK: Network with ID: ${networkId} has been deprecated and you will no longer receive transaction events on this network.`);
  }

  validateType({
    name: 'transactionHandler',
    value: transactionHandlers,
    type: 'array',
    optional: true
  });

  if (transactionHandlers) {
    transactionHandlers.forEach(handler => validateType({
      name: 'transactionHandler',
      value: handler,
      type: 'function'
    }));
  }

  validateType({
    name: 'apiUrl',
    value: apiUrl,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'ws',
    value: ws,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onopen',
    value: onopen,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'ondown',
    value: ondown,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onreopen',
    value: onreopen,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onerror',
    value: onerror,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onclose',
    value: onclose,
    type: 'function',
    optional: true
  });
}

function validSystem(system) {
  return !!networks[system];
}

function invalidParams(params, validParams, functionName) {
  const invalid = Object.keys(params);

  if (invalid.length > 0) {
    throw new Error(`${invalid[0]} is not a valid parameter for ${functionName}, must be one of the following valid parameters: ${validParams.join(', ')}`);
  }
}

function createEmitter() {
  return {
    listeners: {},
    on: function (eventCode, listener) {
      // check if valid eventCode
      switch (eventCode) {
        case 'txSent':
        case 'txPool':
        case 'txConfirmed':
        case 'txSpeedUp':
        case 'txCancel':
        case 'txFailed':
        case 'txDropped':
        case 'txRequest':
        case 'nsfFail':
        case 'txRepeat':
        case 'txAwaitingApproval':
        case 'txConfirmReminder':
        case 'txSendFail':
        case 'txError':
        case 'txUnderPriced':
        case 'txPoolSimulation':
        case 'all':
          break;

        default:
          throw new Error(`${eventCode} is not a valid event code, for a list of valid event codes see: https://docs.blocknative.com/notify-sdk#event-codes`);
      } // check that listener is a function


      if (typeof listener !== 'function') {
        throw new Error('Listener must be a function');
      } // add listener for the eventCode


      this.listeners[eventCode] = listener;
    },
    off: function (eventCode) {
      delete this.listeners[eventCode];
    },
    emit: function (state) {
      if (this.listeners[state.eventCode]) {
        return this.listeners[state.eventCode](state);
      }

      if (this.listeners.all) {
        return this.listeners.all(state);
      }
    }
  };
}

function networkName(blockchain, id) {
  return networks[blockchain][id];
}

function serverEcho(eventCode) {
  switch (eventCode) {
    case 'txRequest':
    case 'nsfFail':
    case 'txRepeat':
    case 'txAwaitingApproval':
    case 'txConfirmReminder':
    case 'txSendFail':
    case 'txError':
    case 'txUnderPriced':
    case 'txSent':
      return true;

    default:
      return false;
  }
}

function last(arr) {
  return arr.reverse()[0];
} // isAddress and isTxid are not meant to perform real validation,
// just needs to work out if it is an address or a transaction id
// the server will do more thorough validation


function isAddress(blockchain, addressOrHash) {
  switch (blockchain) {
    case 'ethereum':
      return addressOrHash.length === 42;

    case 'bitcoin':
      return addressOrHash.length !== 64;

    default:
      return false;
  }
}

function isTxid(blockchain, addressOrHash) {
  switch (blockchain) {
    case 'ethereum':
      return addressOrHash.length === 66;

    case 'bitcoin':
      return addressOrHash.length === 64;

    default:
      return false;
  }
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

const jsonPreserveUndefined = (k, v) => v === undefined ? 'undefined' : v;
/**
 * Tests if LocalStorage may be used. Accounts for environments where
 * LocalStorage is not supported, as well as those where it is blocked.
 *
 * @returns `true` if LocalStorage is supported and accessible, `false` otherwise.
 */


function isLocalStorageAvailable() {
  const isSupported = typeof window !== 'undefined' && 'localStorage' in window;

  if (isSupported) {
    const testKey = '__testLocalStorage';

    try {
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (err) {
      return false;
    }
  }

  return false;
}

function transaction(hash, id) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.'); // create startTime for transaction

  const startTime = Date.now(); // create emitter for transaction

  const emitter = createEmitter(); // create eventCode for transaction

  const eventCode = 'txSent'; // put in queue

  this.watchedTransactions.push({
    hash,
    emitter
  });
  const transactionId = this._system === 'ethereum' ? {
    hash
  } : {
    txid: hash
  };
  const transaction = { ...transactionId,
    id: id || hash,
    startTime,
    status: 'sent'
  };
  const newState = { ...transaction,
    eventCode
  }; // logEvent to server

  this._sendMessage({
    eventCode,
    categoryCode: 'activeTransaction',
    transaction
  });

  const transactionObj = {
    details: newState,
    emitter
  };

  function emitState() {
    const emitterResult = emitter.emit(newState);

    this._transactionHandlers.forEach(handler => handler({
      transaction: newState,
      emitterResult
    }));
  } // emit after delay to allow for listener to be registered


  setTimeout(emitState.bind(this), 5);
  return transactionObj;
}

function account(address) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.'); // lowercase the address if Ethereum

  address = this._system === 'ethereum' ? address.toLowerCase() : address; // create emitter for transaction

  const emitter = createEmitter(); // create eventCode for transaction

  const eventCode = 'watch';
  const existingAddressWatcher = this.watchedAccounts.find(ac => ac.address === address);

  if (existingAddressWatcher) {
    // add to existing emitters array
    existingAddressWatcher.emitters.push(emitter);
  } else {
    // put in accounts queue
    this.watchedAccounts.push({
      address,
      emitters: [emitter]
    });
  } // logEvent to server


  this._sendMessage({
    eventCode,
    categoryCode: 'accountAddress',
    account: {
      address
    }
  });

  return {
    emitter,
    details: {
      address
    }
  };
}

function esm_event(eventObj) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.');

  this._sendMessage(eventObj);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */


var esm_extendStatics = function (d, b) {
  esm_extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return esm_extendStatics(d, b);
};

function esm_extends(d, b) {
  esm_extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


function esm_isFunction(x) {
  return typeof x === 'function';
}
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var esm_enable_super_gross_mode_that_will_cause_bad_things = false;
var esm_config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error = /*@__PURE__*/new Error();
      /*@__PURE__*/

      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    }

    esm_enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return esm_enable_super_gross_mode_that_will_cause_bad_things;
  }

};
/** PURE_IMPORTS_START  PURE_IMPORTS_END */

function esm_hostReportError(err) {
  setTimeout(function () {
    throw err;
  }, 0);
}
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var esm_empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (esm_config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      esm_hostReportError(err);
    }
  },
  complete: function () {}
};
/** PURE_IMPORTS_START  PURE_IMPORTS_END */

var esm_isArray = /*@__PURE__*/function () {
  return Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
}();
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


function esm_isObject(x) {
  return x !== null && typeof x === 'object';
}
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var esm_UnsubscriptionErrorImpl = /*@__PURE__*/function () {
  function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }

  UnsubscriptionErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return UnsubscriptionErrorImpl;
}();

var esm_UnsubscriptionError = esm_UnsubscriptionErrorImpl;
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */

var esm_Subscription = /*@__PURE__*/function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._ctorUnsubscribe = true;
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parentOrParents = _a._parentOrParents,
        _ctorUnsubscribe = _a._ctorUnsubscribe,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (var index = 0; index < _parentOrParents.length; ++index) {
        var parent_1 = _parentOrParents[index];
        parent_1.remove(this);
      }
    }

    if (esm_isFunction(_unsubscribe)) {
      if (_ctorUnsubscribe) {
        this._unsubscribe = undefined;
      }

      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof esm_UnsubscriptionError ? esm_flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if (esm_isArray(_subscriptions)) {
      var index = -1;
      var len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if (esm_isObject(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];

            if (e instanceof esm_UnsubscriptionError) {
              errors = errors.concat(esm_flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (errors) {
      throw new esm_UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    if (!teardown) {
      return Subscription.EMPTY;
    }

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    var _parentOrParents = subscription._parentOrParents;

    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }

      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }

    var subscriptions = this._subscriptions;

    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

function esm_flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof esm_UnsubscriptionError ? err.errors : err);
  }, []);
}
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var esm_rxSubscriber = /*@__PURE__*/function () {
  return typeof Symbol === 'function' ? /*@__PURE__*/Symbol('rxSubscriber') : '@@rxSubscriber_' + /*@__PURE__*/Math.random();
}();
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */


var esm_Subscriber = /*@__PURE__*/function (_super) {
  esm_extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = esm_empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = esm_empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new esm_SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new esm_SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[esm_rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _parentOrParents = this._parentOrParents;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  };

  return Subscriber;
}(esm_Subscription);

var esm_SafeSubscriber = /*@__PURE__*/function (_super) {
  esm_extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if (esm_isFunction(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== esm_empty) {
        context = Object.create(observerOrNext);

        if (esm_isFunction(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!esm_config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = esm_config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        esm_hostReportError(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          esm_hostReportError(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!esm_config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (esm_config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        esm_hostReportError(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!esm_config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (esm_config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        esm_hostReportError(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(esm_Subscriber);
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */


function esm_canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof esm_Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */


function esm_toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof esm_Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[esm_rxSubscriber]) {
      return nextOrObserver[esm_rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new esm_Subscriber(esm_empty);
  }

  return new esm_Subscriber(nextOrObserver, error, complete);
}
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var observable = /*@__PURE__*/function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


function esm_identity(x) {
  return x;
}
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */


function esm_pipeFromArray(fns) {
  if (fns.length === 0) {
    return esm_identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */


var esm_Observable = /*@__PURE__*/function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = esm_toSubscriber(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || esm_config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (esm_config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (esm_config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if (esm_canReportError(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = esm_getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return esm_pipeFromArray(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = esm_getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

function esm_getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var esm_subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    subscriber.complete();
  };
};
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */


var esm_subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, esm_hostReportError);
    return subscriber;
  };
};
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


function esm_getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

var iterator = /*@__PURE__*/esm_getSymbolIterator();
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var esm_subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator$1 = iterable[iterator]();

    do {
      var item = void 0;

      try {
        item = iterator$1.next();
      } catch (err) {
        subscriber.error(err);
        return subscriber;
      }

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator$1.return === 'function') {
      subscriber.add(function () {
        if (iterator$1.return) {
          iterator$1.return();
        }
      });
    }

    return subscriber;
  };
};
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */


var esm_subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[observable]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var esm_isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


function esm_isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */


var esm_subscribeTo = function (result) {
  if (!!result && typeof result[observable] === 'function') {
    return esm_subscribeToObservable(result);
  } else if (esm_isArrayLike(result)) {
    return esm_subscribeToArray(result);
  } else if (esm_isPromise(result)) {
    return esm_subscribeToPromise(result);
  } else if (!!result && typeof result[iterator] === 'function') {
    return esm_subscribeToIterable(result);
  } else {
    var value = esm_isObject(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */


var esm_SimpleInnerSubscriber = /*@__PURE__*/function (_super) {
  esm_extends(SimpleInnerSubscriber, _super);

  function SimpleInnerSubscriber(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    return _this;
  }

  SimpleInnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(value);
  };

  SimpleInnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error);
    this.unsubscribe();
  };

  SimpleInnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete();
    this.unsubscribe();
  };

  return SimpleInnerSubscriber;
}(esm_Subscriber);

var esm_SimpleOuterSubscriber = /*@__PURE__*/function (_super) {
  esm_extends(SimpleOuterSubscriber, _super);

  function SimpleOuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
    this.destination.next(innerValue);
  };

  SimpleOuterSubscriber.prototype.notifyError = function (err) {
    this.destination.error(err);
  };

  SimpleOuterSubscriber.prototype.notifyComplete = function () {
    this.destination.complete();
  };

  return SimpleOuterSubscriber;
}(esm_Subscriber);

function esm_innerSubscribe(result, innerSubscriber) {
  if (innerSubscriber.closed) {
    return undefined;
  }

  if (result instanceof esm_Observable) {
    return result.subscribe(innerSubscriber);
  }

  return esm_subscribeTo(result)(innerSubscriber);
}
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var esm_Action = /*@__PURE__*/function (_super) {
  esm_extends(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    return this;
  };

  return Action;
}(esm_Subscription);
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var esm_AsyncAction = /*@__PURE__*/function (_super) {
  esm_extends(AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype._unsubscribe = function () {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  };

  return AsyncAction;
}(esm_Action);

var esm_Scheduler = /*@__PURE__*/function () {
  function Scheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.SchedulerAction(this, work).schedule(state, delay);
  };

  Scheduler.now = function () {
    return Date.now();
  };

  return Scheduler;
}();
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var esm_AsyncScheduler = /*@__PURE__*/function (_super) {
  esm_extends(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = esm_Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    }) || this;

    _this.actions = [];
    _this.active = false;
    _this.scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return _super.prototype.schedule.call(this, work, delay, state);
    }
  };

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this.active) {
      actions.push(action);
      return;
    }

    var error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(esm_Scheduler);
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var esm_asyncScheduler = /*@__PURE__*/new esm_AsyncScheduler(esm_AsyncAction);
var esm_async = esm_asyncScheduler;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */

function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */


var EMPTY = /*@__PURE__*/new esm_Observable(function (subscriber) {
  return subscriber.complete();
});

function empty$1(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}

function emptyScheduled(scheduler) {
  return new esm_Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */


function throwError(error, scheduler) {
  if (!scheduler) {
    return new esm_Observable(function (subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new esm_Observable(function (subscriber) {
      return scheduler.schedule(esm_dispatch, 0, {
        error: error,
        subscriber: subscriber
      });
    });
  }
}

function esm_dispatch(_a) {
  var error = _a.error,
      subscriber = _a.subscriber;
  subscriber.error(error);
}
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/function () {
  function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
  }

  ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return ArgumentOutOfRangeErrorImpl;
}();

var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */

function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}

var FilterOperator = /*@__PURE__*/function () {
  function FilterOperator(predicate, thisArg) {
    this.predicate = predicate;
    this.thisArg = thisArg;
  }

  FilterOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  };

  return FilterOperator;
}();

var FilterSubscriber = /*@__PURE__*/function (_super) {
  esm_extends(FilterSubscriber, _super);

  function FilterSubscriber(destination, predicate, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.count = 0;
    return _this;
  }

  FilterSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.predicate.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.destination.next(value);
    }
  };

  return FilterSubscriber;
}(esm_Subscriber);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */


function take(count) {
  return function (source) {
    if (count === 0) {
      return empty$1();
    } else {
      return source.lift(new TakeOperator(count));
    }
  };
}

var TakeOperator = /*@__PURE__*/function () {
  function TakeOperator(total) {
    this.total = total;

    if (this.total < 0) {
      throw new ArgumentOutOfRangeError();
    }
  }

  TakeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  };

  return TakeOperator;
}();

var TakeSubscriber = /*@__PURE__*/function (_super) {
  esm_extends(TakeSubscriber, _super);

  function TakeSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.count = 0;
    return _this;
  }

  TakeSubscriber.prototype._next = function (value) {
    var total = this.total;
    var count = ++this.count;

    if (count <= total) {
      this.destination.next(value);

      if (count === total) {
        this.destination.complete();
        this.unsubscribe();
      }
    }
  };

  return TakeSubscriber;
}(esm_Subscriber);
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */


function finalize(callback) {
  return function (source) {
    return source.lift(new FinallyOperator(callback));
  };
}

var FinallyOperator = /*@__PURE__*/function () {
  function FinallyOperator(callback) {
    this.callback = callback;
  }

  FinallyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FinallySubscriber(subscriber, this.callback));
  };

  return FinallyOperator;
}();

var FinallySubscriber = /*@__PURE__*/function (_super) {
  esm_extends(FinallySubscriber, _super);

  function FinallySubscriber(destination, callback) {
    var _this = _super.call(this, destination) || this;

    _this.add(new esm_Subscription(callback));

    return _this;
  }

  return FinallySubscriber;
}(esm_Subscriber);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }

  return function (source) {
    return source.lift(new TakeWhileOperator(predicate, inclusive));
  };
}

var TakeWhileOperator = /*@__PURE__*/function () {
  function TakeWhileOperator(predicate, inclusive) {
    this.predicate = predicate;
    this.inclusive = inclusive;
  }

  TakeWhileOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
  };

  return TakeWhileOperator;
}();

var TakeWhileSubscriber = /*@__PURE__*/function (_super) {
  esm_extends(TakeWhileSubscriber, _super);

  function TakeWhileSubscriber(destination, predicate, inclusive) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.inclusive = inclusive;
    _this.index = 0;
    return _this;
  }

  TakeWhileSubscriber.prototype._next = function (value) {
    var destination = this.destination;
    var result;

    try {
      result = this.predicate(value, this.index++);
    } catch (err) {
      destination.error(err);
      return;
    }

    this.nextOrComplete(value, result);
  };

  TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
    var destination = this.destination;

    if (Boolean(predicateResult)) {
      destination.next(value);
    } else {
      if (this.inclusive) {
        destination.next(value);
      }

      destination.complete();
    }
  };

  return TakeWhileSubscriber;
}(esm_Subscriber);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */


var TimeoutErrorImpl = /*@__PURE__*/function () {
  function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
  }

  TimeoutErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
  return TimeoutErrorImpl;
}();

var TimeoutError = TimeoutErrorImpl;
/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_innerSubscribe PURE_IMPORTS_END */

function timeoutWith(due, withObservable, scheduler) {
  if (scheduler === void 0) {
    scheduler = esm_async;
  }

  return function (source) {
    var absoluteTimeout = isDate(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  };
}

var TimeoutWithOperator = /*@__PURE__*/function () {
  function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
    this.waitFor = waitFor;
    this.absoluteTimeout = absoluteTimeout;
    this.withObservable = withObservable;
    this.scheduler = scheduler;
  }

  TimeoutWithOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  };

  return TimeoutWithOperator;
}();

var TimeoutWithSubscriber = /*@__PURE__*/function (_super) {
  esm_extends(TimeoutWithSubscriber, _super);

  function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.absoluteTimeout = absoluteTimeout;
    _this.waitFor = waitFor;
    _this.withObservable = withObservable;
    _this.scheduler = scheduler;

    _this.scheduleTimeout();

    return _this;
  }

  TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
    var withObservable = subscriber.withObservable;

    subscriber._unsubscribeAndRecycle();

    subscriber.add(esm_innerSubscribe(withObservable, new esm_SimpleInnerSubscriber(subscriber)));
  };

  TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
    var action = this.action;

    if (action) {
      this.action = action.schedule(this, this.waitFor);
    } else {
      this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
    }
  };

  TimeoutWithSubscriber.prototype._next = function (value) {
    if (!this.absoluteTimeout) {
      this.scheduleTimeout();
    }

    _super.prototype._next.call(this, value);
  };

  TimeoutWithSubscriber.prototype._unsubscribe = function () {
    this.action = undefined;
    this.scheduler = null;
    this.withObservable = null;
  };

  return TimeoutWithSubscriber;
}(esm_SimpleOuterSubscriber);
/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */


function timeout(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = esm_async;
  }

  return timeoutWith(due, throwError(new TimeoutError()), scheduler);
}

const simulations$ = new Subject();

function simulate(system, network, transaction) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.');
  const id = nanoid(); // send payload to server

  this._sendMessage({
    categoryCode: 'simulate',
    eventCode: 'txSimulation',
    eventId: id,
    transaction: transaction
  });

  return new Promise((resolve, reject) => {
    simulations$.pipe(filter(({
      eventId
    }) => {
      return eventId === id;
    }), take(1)).subscribe({
      next: ({
        transaction
      }) => resolve(transaction),
      error: ({
        error
      }) => reject(error.message)
    });
  });
}

function multiSim(transactions) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.');
  const id = nanoid(); // send payload to server

  this._sendMessage({
    categoryCode: 'simulate',
    eventCode: 'txSimulation',
    eventId: id,
    transaction: transactions
  });

  return new Promise((resolve, reject) => {
    simulations$.pipe(filter(({
      eventId
    }) => {
      return eventId === id;
    }), take(1)).subscribe({
      next: ({
        transaction
      }) => resolve(transaction),
      error: ({
        error
      }) => reject(error.message)
    });
  });
}

function unsubscribe(addressOrHash) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.');
  const address = isAddress(this._system, addressOrHash);
  const txid = isTxid(this._system, addressOrHash); // check if it is an address or a hash

  if (address) {
    const normalizedAddress = this._system === 'ethereum' ? addressOrHash.toLowerCase() : addressOrHash; // remove address from accounts

    this.watchedAccounts = this.watchedAccounts.filter(ac => ac.address !== normalizedAddress); // remove configuration from memory

    this.configurations.delete(normalizedAddress); // logEvent to server

    this._sendMessage({
      categoryCode: 'accountAddress',
      eventCode: 'unwatch',
      account: {
        address: normalizedAddress
      }
    });
  } else if (txid) {
    // remove transaction from transactions
    this.watchedTransactions = this.watchedTransactions.filter(tx => tx.hash !== addressOrHash);
    const transactionId = this._system === 'ethereum' ? {
      hash: addressOrHash
    } : {
      txid: addressOrHash
    };
    const transaction = { ...transactionId,
      id: addressOrHash,
      status: 'unsubscribed'
    }; // logEvent to server

    this._sendMessage({
      categoryCode: 'activeTransaction',
      eventCode: 'unwatch',
      transaction
    });
  } else {
    throw new Error(`Error trying to unsubscribe ${addressOrHash}: not a valid address or transaction id/hash`);
  }
}

function configuration(config) {
  if (this._destroyed) {
    throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.');
  }

  const casedScope = this._system === 'ethereum' ? config.scope.toLowerCase() : config.scope; // resolve previous configuration if exists

  const previousConfiguration = this.configurations.get(casedScope);
  previousConfiguration && previousConfiguration.subscription && previousConfiguration.subscription.next();
  const subscription = new Subject(); // create emitter for transaction

  const emitter = config.watchAddress ? {
    emitter: createEmitter()
  } : {};
  this.configurations.set(casedScope, { ...config,
    ...emitter,
    subscription
  });

  this._sendMessage({
    categoryCode: 'configs',
    eventCode: 'put',
    config
  });

  return new Promise((resolve, reject) => {
    subscription.pipe(take(1), timeout(5000)).subscribe({
      next: () => resolve({ ...emitter,
        details: {
          config
        }
      }),
      error: error => {
        const message = error.message === 'Timeout has occurred' ? `Configuration with scope: ${config.scope} has been sent to the Blocknative server, but has not received a reply within 5 seconds.` : error.message;

        if (this._onerror) {
          this._onerror({
            message
          });

          resolve(`Error: ${message}`);
        } else {
          reject(message);
        }
      }
    });
  });
}

function subscribe(subscription) {
  const {
    id,
    chainId,
    type
  } = subscription;

  if (!networkName('ethereum', parseInt(chainId, 16))) {
    throw new Error(`chainId: ${chainId} is an unsupported network`);
  }

  if (!this.connections[chainId]) {
    this.connections[chainId] = new this.Blocknative({
      system: 'ethereum',
      networkId: parseInt(chainId, 16),
      dappId: this.apiKey,
      ws: this.ws,
      apiUrl: this.apiUrl,
      transactionHandlers: [({
        transaction
      }) => {
        this.onTransaction$.next(transaction);
      }],
      onerror: error => this.errors$.next(error)
    });
  }

  const sdk = this.connections[chainId];

  if (type === 'account') {
    const {
      filters = [],
      abi
    } = subscription;
    sdk.configuration({
      scope: id,
      filters,
      ...(abi ? {
        abi
      } : {}),
      watchAddress: true
    });
    return this.transactions$.pipe(filter(({
      watchedAddress
    }) => watchedAddress === id), finalize(() => {
      this.unsubscribe({
        id,
        chainId
      });
    }));
  } else {
    const {
      emitter
    } = sdk.transaction(id);
    return fromEvent( // eslint-disable-next-line
    // @ts-ignore - string does not match specific eventcode string
    emitter, 'all').pipe( // automatically complete stream on a finalized status
    takeWhile(({
      status
    }) => status !== 'confirmed' && status !== 'failed' && status !== 'dropped', true), // cleanup subscription and SDK on completion
    finalize(() => {
      this.unsubscribe({
        id,
        chainId
      });
    }));
  }
}

function unsubscribe$1(options) {
  const {
    id,
    chainId,
    timeout = 0
  } = options;
  const time$ = timer(timeout);
  const transactionEvent$ = this.transactions$.pipe(filter(({
    hash,
    watchedAddress
  }) => hash === id || watchedAddress === id));
  merge(transactionEvent$, time$).pipe(take(1)) // take just first event
  .subscribe(res => {
    // if number, then timeout with no transaction events, so go ahead and unsub
    if (typeof res === 'number') {
      const sdkConnections = Object.entries(this.connections).filter(([chainId, sdk]) => sdk !== null);
      sdkConnections.forEach(([connectionChainId, sdk]) => {
        // if chainId is passed and it doesn't match, then no unsub (return early)
        if (chainId && connectionChainId !== chainId) return;
        sdk.unsubscribe(id); // if no remaining subscriptions, destroy connection and set to null

        if (!sdk.watchedAccounts.length && !sdk.watchedTransactions.length && !sdk.configurations.size) {
          sdk.destroy();
          this.connections[connectionChainId] = null;
        }
      });
    } else {
      // otherwise a transaction event received, so call unsub again for another timeout
      this.unsubscribe(options);
    }
  });
} //**Experimental API that is not yet finalized and is in BETA*/


class MultiChain {
  constructor(options, Blocknative) {
    const {
      ws
    } = options;
    const {
      apiKey
    } = options;
    const {
      apiUrl
    } = options;
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
    this.ws = ws;
    this.connections = {};
    this.onTransaction$ = new Subject();
    this.transactions$ = this.onTransaction$.asObservable();
    this.errors$ = new Subject();
    this.Blocknative = Blocknative;
    this.subscribe = subscribe.bind(this);
    this.unsubscribe = unsubscribe$1.bind(this);
  }

}

var version = "4.6.9";

function sendMessage(msg) {
  if (this._queuedMessages.length > QUEUE_LIMIT) {
    throw new Error(`Queue limit of ${QUEUE_LIMIT} messages has been reached.`);
  }

  this._queuedMessages.push(createEventLog.bind(this)(msg));

  if (!this._processingQueue) {
    this._processQueue();
  }
}

async function processQueue() {
  this._processingQueue = true;

  if (!this._connected) {
    await waitForConnectionOpen.bind(this)();
  }

  while (this._queuedMessages.length > 0) {
    // small wait to allow response from server to take affect
    await wait(1);

    if (this._waitToRetry !== null) {
      // have been rate limited so wait
      await this._waitToRetry;
      this._waitToRetry = null;
    }

    const msg = this._queuedMessages.shift();

    const delay = this._limitRules.duration / this._limitRules.points * 1000;
    await wait(delay);

    this._socket.send(msg);
  }

  this._processingQueue = false;
  this._limitRules = DEFAULT_RATE_LIMIT_RULES;
}

function handleMessage(msg) {
  const {
    status,
    reason,
    event,
    connectionId,
    serverVersion,
    retryMs,
    limitRules,
    blockedMsg,
    dispatchTimestamp
  } = JSON.parse(msg.data);

  if (connectionId) {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(this._storageKey, connectionId);
    }

    this._connectionId = connectionId;
  } // handle any errors from the server


  if (status === 'error') {
    if (reason.includes('ratelimit') && !reason.match(/IP (PendingSimulation|Notification) ratelimit reached/)) {
      this._waitToRetry = wait(retryMs);
      this._limitRules = limitRules; // add blocked msg to the front of the queue

      blockedMsg && this._queuedMessages.unshift(blockedMsg);
      return;
    }

    if (reason.includes('upgrade your plan')) {
      if (this._onerror) {
        this._onerror({
          message: reason
        });

        return;
      } else {
        throw new Error(reason);
      }
    }

    if (reason.includes('not a valid API key')) {
      if (this._onerror) {
        this._onerror({
          message: reason
        });

        return;
      } else {
        throw new Error(reason);
      }
    }

    if (reason.includes('network not supported')) {
      if (this._onerror) {
        this._onerror({
          message: reason
        });

        return;
      } else {
        throw new Error(reason);
      }
    }

    if (reason.includes('maximum allowed amount')) {
      if (this._onerror) {
        this._onerror({
          message: reason
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle bitcoin txid error


    if (reason.includes('invalid txid')) {
      const reason = `${event.transaction.txid} is an invalid txid`;

      if (this._onerror) {
        this._onerror({
          message: reason,
          transaction: event.transaction.txid
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle ethereum transaction hash error


    if (reason.includes('invalid hash')) {
      const reason = `${event.transaction.hash} is an invalid transaction hash`;

      if (this._onerror) {
        this._onerror({
          message: reason,
          transaction: event.transaction.hash
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle general address error


    if (reason.includes('invalid address')) {
      const reason = `${event.account.address} is an invalid address`;

      if (this._onerror) {
        this._onerror({
          message: reason,
          account: event.account.address
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle bitcoin specific address error


    if (reason.includes('not a valid Bitcoin')) {
      if (this._onerror) {
        this._onerror({
          message: reason,
          account: event.account.address
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle ethereum specific address error


    if (reason.includes('not a valid Ethereum')) {
      if (this._onerror) {
        this._onerror({
          message: reason,
          account: event.account.address
        });

        return;
      } else {
        throw new Error(reason);
      }
    }

    if (event && event.categoryCode === 'simulate') {
      simulations$.error({
        eventId: event.eventId,
        error: {
          message: reason
        }
      });
      return;
    } // handle config error


    if (event && event.config) {
      const configuration = this.configurations.get(event.config.scope);

      if (configuration && configuration.subscription) {
        configuration.subscription.error({
          message: reason
        });
      }

      return;
    } // throw error that comes back from the server without formatting the message


    if (this._onerror) {
      this._onerror({
        message: reason
      });

      return;
    } else {
      throw new Error(reason);
    }
  }

  if (event && event.config) {
    const casedScope = this._system === 'ethereum' ? event.config.scope.toLowerCase() : event.config.scope;
    const configuration = this.configurations.get(casedScope);

    if (configuration && configuration.subscription) {
      configuration.subscription.next();
    }
  }

  if (event && event.transaction) {
    const {
      eventId,
      transaction,
      eventCode,
      contractCall,
      timeStamp,
      blockchain: {
        system,
        network
      }
    } = event; // flatten in to one object

    const newState = this._system === 'ethereum' ? { ...transaction,
      serverVersion,
      eventCode,
      timeStamp,
      dispatchTimestamp,
      system,
      network,
      contractCall
    } : { ...transaction,
      serverVersion,
      eventCode,
      timeStamp,
      dispatchTimestamp,
      system,
      network
    }; // ignore server echo and unsubscribe messages

    if (serverEcho(eventCode) || transaction.status === 'unsubscribed') {
      return;
    } // replace originalHash to match webhook API


    if (newState.originalHash) {
      newState.replaceHash = newState.hash;
      newState.hash = newState.originalHash;
      delete newState.originalHash;
    } // replace status to match webhook API


    if (eventCode === 'txSpeedUp' && newState.status !== 'speedup') {
      newState.status = 'speedup';
    } // replace status to match webhook API


    if (eventCode === 'txCancel' && newState.status !== 'cancel') {
      newState.status = 'cancel';
    } // handle change of hash in speedup and cancel events


    if (eventCode === 'txSpeedUp' || eventCode === 'txCancel') {
      this.watchedTransactions = this.watchedTransactions.map(tx => {
        if (tx.hash === newState.replaceHash) {
          // reassign hash parameter in transaction queue to new hash or txid
          tx.hash = transaction.hash || transaction.txid;
        }

        return tx;
      });
    }

    if (event && event.categoryCode === 'simulate') {
      newState.contractCall = event.transaction.contractCall;
      delete newState.dispatchTimestamp;
      simulations$.next({
        eventId,
        transaction: newState
      });
      return;
    }

    const watchedAddress = transaction.watchedAddress && this._system === 'ethereum' ? transaction.watchedAddress.toLowerCase() : transaction.watchedAddress;

    if (watchedAddress) {
      const accountObj = this.watchedAccounts.find(ac => ac.address === watchedAddress);
      const accountEmitterResult = accountObj ? last(accountObj.emitters.map(emitter => emitter.emit(newState))) : false;
      const configuration = this.configurations.get(watchedAddress);
      const emitterResult = configuration && configuration.emitter ? configuration.emitter.emit(newState) || accountEmitterResult : accountEmitterResult;

      this._transactionHandlers.forEach(handler => handler({
        transaction: newState,
        emitterResult
      }));
    } else {
      const transactionObj = this.watchedTransactions.find(tx => tx.hash === newState.hash || newState.txid);
      const emitterResult = transactionObj && transactionObj.emitter.emit(newState);

      this._transactionHandlers.forEach(handler => handler({
        transaction: newState,
        emitterResult
      })); // replace the emitter hash to the replace hash on replacement txs


      if (newState.status === 'speedup' || newState.status === 'cancel') {
        this.watchedTransactions = this.watchedTransactions.map(tx => {
          if (tx.hash === newState.hash || newState.txid) {
            return { ...tx,
              hash: newState.replaceHash
            };
          }

          return tx;
        });
      }
    }
  }
}

function createEventLog(msg) {
  return JSON.stringify({
    timeStamp: new Date().toISOString(),
    dappId: this._dappId,
    version,
    appName: this._appName,
    appVersion: this._appVersion,
    blockchain: {
      system: this._system,
      network: networkName(this._system, this._networkId) || 'local'
    },
    ...msg
  }, msg.categoryCode === 'configs' ? jsonPreserveUndefined : undefined);
}

function waitForConnectionOpen() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (this._connected) {
        setTimeout(resolve, 100);
        clearInterval(interval);
      }
    });
  });
}

const DEFAULT_APP_NAME = 'unknown';
const DEFAULT_APP_VERSION = 'unknown';
const DEFAULT_SYSTEM = 'ethereum';

class SDK {
  constructor(options) {
    validateOptions(options);
    const {
      system = DEFAULT_SYSTEM,
      name = DEFAULT_APP_NAME,
      appVersion = DEFAULT_APP_VERSION,
      networkId,
      transactionHandlers = [],
      ws,
      onopen,
      ondown,
      onreopen,
      onerror,
      onclose
    } = options;
    const {
      apiUrl
    } = options;
    const {
      dappId
    } = options; // override default timeout to allow for slow connections

    const timeout = {
      connectTimeout: 10000
    };
    const socket = new dist/* default */.A(apiUrl || 'wss://api.blocknative.com/v0', ws ? {
      wsConstructor: ws,
      ...timeout
    } : { ...timeout
    });
    socket.onopen = onOpen.bind(this, onopen);
    socket.ondown = onDown.bind(this, ondown);
    socket.onreopen = onReopen.bind(this, onreopen);
    socket.onmessage = handleMessage.bind(this);

    socket.onerror = error => onerror && onerror({
      message: 'There was a WebSocket error',
      error
    });

    socket.onclose = () => {
      this._pingTimeout && clearInterval(this._pingTimeout);
      onclose && onclose();
    };

    const storageKey = lib.SHA1(`${dappId} - ${name}`).toString();
    const storedConnectionId = isLocalStorageAvailable() && window.localStorage.getItem(storageKey);
    this._storageKey = storageKey;
    this._connectionId = storedConnectionId || undefined;
    this._dappId = dappId;
    this._system = system;
    this._networkId = networkId;
    this._appName = name;
    this._appVersion = appVersion;
    this._transactionHandlers = transactionHandlers;
    this._socket = socket;
    this._connected = false;
    this._sendMessage = sendMessage.bind(this);
    this._pingTimeout = undefined;
    this._destroyed = false;
    this._onerror = onerror;
    this._queuedMessages = [];
    this._limitRules = DEFAULT_RATE_LIMIT_RULES;
    this._waitToRetry = null;
    this._processingQueue = false;
    this._processQueue = processQueue.bind(this);

    if (this._socket.ws.on) {
      this._heartbeat = () => {
        this._pingTimeout && clearTimeout(this._pingTimeout);
        this._pingTimeout = setTimeout(() => {
          // terminate connection if we haven't heard the server ping after server timeout plus conservative latency delay
          // Sturdy Websocket will handle the new connection logic
          this._socket.ws.terminate();
        }, 30000 + 1000);
      };

      this._socket.ws.on('ping', () => {
        this._heartbeat && this._heartbeat();
      });
    } // public API


    this.watchedTransactions = [];
    this.watchedAccounts = [];
    this.configurations = new Map();
    this.transaction = transaction.bind(this);
    this.account = account.bind(this);
    this.event = esm_event.bind(this);
    this.simulate = simulate.bind(this);
    this.multiSim = multiSim.bind(this);
    this.unsubscribe = unsubscribe.bind(this);
    this.configuration = configuration.bind(this);

    this.destroy = () => {
      this._socket.close();

      this._destroyed = true; // call onclose manually here as SturdyWebSocket doesn't currently work as expected
      // https://github.com/dphilipson/sturdy-websocket/issues/5

      this._socket.onclose();
    };
  }

  static multichain(options) {
    return new MultiChain(options, this);
  }

}

function onOpen(handler) {
  this._connected = true;
  const msg = {
    categoryCode: 'initialize',
    eventCode: 'checkDappId',
    connectionId: this._connectionId
  }; // send this message directly rather than put in queue

  this._socket.send(createEventLog.bind(this)(msg));

  this._heartbeat && this._heartbeat();
  handler && handler();
}

function onDown(handler, closeEvent) {
  this._connected = false;

  if (handler) {
    handler(closeEvent);
  }

  this._pingTimeout && clearTimeout(this._pingTimeout);
}

async function onReopen(handler) {
  this._connected = true;
  const msg = {
    categoryCode: 'initialize',
    eventCode: 'checkDappId',
    connectionId: this._connectionId
  };

  this._socket.send(createEventLog.bind(this)(msg)); // re-register all configurations on re-connection


  const configurations = Array.from(this.configurations.values()); // register global config first and wait for it to complete

  const globalConfiguration = this.configurations.get('global');

  if (globalConfiguration) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        emitter,
        subscription,
        ...config
      } = globalConfiguration;
      await this.configuration(config);
    } catch (error) {
      console.warn('Error re-sending global configuration upon reconnection:', error);
    }
  }

  const addressConfigurations = configurations.filter(({
    scope
  }) => scope !== 'global');
  addressConfigurations.forEach(enhancedConfig => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      emitter,
      subscription,
      ...config
    } = enhancedConfig;

    this._sendMessage({
      categoryCode: 'configs',
      eventCode: 'put',
      config
    });
  }); // re-register all accounts to be watched by server upon
  // re-connection as they don't get transferred over automatically
  // to the new connection like tx hashes do

  this.watchedAccounts.forEach(account => {
    this._sendMessage({
      eventCode: 'accountAddress',
      categoryCode: 'watch',
      account: {
        address: account.address
      }
    });
  });

  if (handler) {
    handler();
  }

  if (this._socket.ws && this._socket.ws.on) {
    // need to re-register ping event since new connection
    this._socket.ws.on('ping', () => {
      this._heartbeat && this._heartbeat();
    });

    this._heartbeat();
  }
}

/* harmony default export */ const esm = (SDK);


/***/ }),

/***/ 771676:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
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

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
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
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
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
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
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
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

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
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
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
  return !!value && (type == 'object' || type == 'function');
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
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;


/***/ }),

/***/ 688117:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var defaults = __webpack_require__(771676);
var SHOULD_RECONNECT_FALSE_MESSAGE = "Provided shouldReconnect() returned false. Closing permanently.";
var SHOULD_RECONNECT_PROMISE_FALSE_MESSAGE = "Provided shouldReconnect() resolved to false. Closing permanently.";
var SturdyWebSocket = /** @class */ (function () {
    function SturdyWebSocket(url, protocolsOrOptions, options) {
        this.url = url;
        this.onclose = null;
        this.onerror = null;
        this.onmessage = null;
        this.onopen = null;
        this.ondown = null;
        this.onreopen = null;
        this.CONNECTING = SturdyWebSocket.CONNECTING;
        this.OPEN = SturdyWebSocket.OPEN;
        this.CLOSING = SturdyWebSocket.CLOSING;
        this.CLOSED = SturdyWebSocket.CLOSED;
        this.hasBeenOpened = false;
        this.isClosed = false;
        this.messageBuffer = [];
        this.nextRetryTime = 0;
        this.reconnectCount = 0;
        this.lastKnownExtensions = "";
        this.lastKnownProtocol = "";
        this.listeners = {};
        if (protocolsOrOptions == null ||
            typeof protocolsOrOptions === "string" ||
            Array.isArray(protocolsOrOptions)) {
            this.protocols = protocolsOrOptions;
        }
        else {
            options = protocolsOrOptions;
        }
        this.options = defaults({}, options, SturdyWebSocket.DEFAULT_OPTIONS);
        if (!this.options.wsConstructor) {
            if (typeof WebSocket !== "undefined") {
                this.options.wsConstructor = WebSocket;
            }
            else {
                throw new Error("WebSocket not present in global scope and no " +
                    "wsConstructor option was provided.");
            }
        }
        this.openNewWebSocket();
    }
    Object.defineProperty(SturdyWebSocket.prototype, "binaryType", {
        get: function () {
            return this.binaryTypeInternal || "blob";
        },
        set: function (binaryType) {
            this.binaryTypeInternal = binaryType;
            if (this.ws) {
                this.ws.binaryType = binaryType;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "bufferedAmount", {
        get: function () {
            var sum = this.ws ? this.ws.bufferedAmount : 0;
            var hasUnknownAmount = false;
            this.messageBuffer.forEach(function (data) {
                var byteLength = getDataByteLength(data);
                if (byteLength != null) {
                    sum += byteLength;
                }
                else {
                    hasUnknownAmount = true;
                }
            });
            if (hasUnknownAmount) {
                this.debugLog("Some buffered data had unknown length. bufferedAmount()" +
                    " return value may be below the correct amount.");
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "extensions", {
        get: function () {
            return this.ws ? this.ws.extensions : this.lastKnownExtensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "protocol", {
        get: function () {
            return this.ws ? this.ws.protocol : this.lastKnownProtocol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "readyState", {
        get: function () {
            return this.isClosed ? SturdyWebSocket.CLOSED : SturdyWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    SturdyWebSocket.prototype.close = function (code, reason) {
        if (this.ws) {
            this.ws.close(code, reason);
        }
        this.shutdown();
        this.debugLog("WebSocket permanently closed by client.");
    };
    SturdyWebSocket.prototype.send = function (data) {
        if (this.ws && this.ws.readyState === this.OPEN) {
            this.ws.send(data);
        }
        else {
            this.messageBuffer.push(data);
        }
    };
    SturdyWebSocket.prototype.addEventListener = function (type, listener) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(listener);
    };
    SturdyWebSocket.prototype.dispatchEvent = function (event) {
        return this.dispatchEventOfType(event.type, event);
    };
    SturdyWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this.listeners[type]) {
            this.listeners[type] = this.listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    SturdyWebSocket.prototype.openNewWebSocket = function () {
        var _this = this;
        if (this.isClosed) {
            return;
        }
        var _a = this.options, connectTimeout = _a.connectTimeout, wsConstructor = _a.wsConstructor;
        this.debugLog("Opening new WebSocket to " + this.url + ".");
        var ws = new wsConstructor(this.url, this.protocols);
        ws.onclose = function (event) { return _this.handleClose(event); };
        ws.onerror = function (event) { return _this.handleError(event); };
        ws.onmessage = function (event) { return _this.handleMessage(event); };
        ws.onopen = function (event) { return _this.handleOpen(event); };
        this.connectTimeoutId = setTimeout(function () {
            // If this is running, we still haven't opened the websocket.
            // Kill it so we can try again.
            _this.clearConnectTimeout();
            ws.close();
        }, connectTimeout);
        this.ws = ws;
    };
    SturdyWebSocket.prototype.handleOpen = function (event) {
        var _this = this;
        if (!this.ws || this.isClosed) {
            return;
        }
        var allClearResetTime = this.options.allClearResetTime;
        this.debugLog("WebSocket opened.");
        if (this.binaryTypeInternal != null) {
            this.ws.binaryType = this.binaryTypeInternal;
        }
        else {
            this.binaryTypeInternal = this.ws.binaryType;
        }
        this.clearConnectTimeout();
        if (this.hasBeenOpened) {
            this.dispatchEventOfType("reopen", event);
        }
        else {
            this.dispatchEventOfType("open", event);
            this.hasBeenOpened = true;
        }
        this.messageBuffer.forEach(function (message) { return _this.send(message); });
        this.messageBuffer = [];
        this.allClearTimeoutId = setTimeout(function () {
            _this.clearAllClearTimeout();
            _this.nextRetryTime = 0;
            _this.reconnectCount = 0;
            var openTime = (allClearResetTime / 1000) | 0;
            _this.debugLog("WebSocket remained open for " + openTime + " seconds. Resetting" +
                " retry time and count.");
        }, allClearResetTime);
    };
    SturdyWebSocket.prototype.handleMessage = function (event) {
        if (this.isClosed) {
            return;
        }
        this.dispatchEventOfType("message", event);
    };
    SturdyWebSocket.prototype.handleClose = function (event) {
        var _this = this;
        if (this.isClosed) {
            return;
        }
        var _a = this.options, maxReconnectAttempts = _a.maxReconnectAttempts, shouldReconnect = _a.shouldReconnect;
        this.clearConnectTimeout();
        this.clearAllClearTimeout();
        if (this.ws) {
            this.lastKnownExtensions = this.ws.extensions;
            this.lastKnownProtocol = this.ws.protocol;
            this.ws = undefined;
        }
        this.dispatchEventOfType("down", event);
        if (this.reconnectCount >= maxReconnectAttempts) {
            this.stopReconnecting(event, this.getTooManyFailedReconnectsMessage());
            return;
        }
        var willReconnect = shouldReconnect(event);
        if (typeof willReconnect === "boolean") {
            this.handleWillReconnect(willReconnect, event, SHOULD_RECONNECT_FALSE_MESSAGE);
        }
        else {
            willReconnect.then(function (willReconnectResolved) {
                if (_this.isClosed) {
                    return;
                }
                _this.handleWillReconnect(willReconnectResolved, event, SHOULD_RECONNECT_PROMISE_FALSE_MESSAGE);
            });
        }
    };
    SturdyWebSocket.prototype.handleError = function (event) {
        this.dispatchEventOfType("error", event);
        this.debugLog("WebSocket encountered an error.");
    };
    SturdyWebSocket.prototype.handleWillReconnect = function (willReconnect, event, denialReason) {
        if (willReconnect) {
            this.reconnect();
        }
        else {
            this.stopReconnecting(event, denialReason);
        }
    };
    SturdyWebSocket.prototype.reconnect = function () {
        var _this = this;
        var _a = this.options, minReconnectDelay = _a.minReconnectDelay, maxReconnectDelay = _a.maxReconnectDelay, reconnectBackoffFactor = _a.reconnectBackoffFactor;
        this.reconnectCount++;
        var retryTime = this.nextRetryTime;
        this.nextRetryTime = Math.max(minReconnectDelay, Math.min(this.nextRetryTime * reconnectBackoffFactor, maxReconnectDelay));
        setTimeout(function () { return _this.openNewWebSocket(); }, retryTime);
        var retryTimeSeconds = (retryTime / 1000) | 0;
        this.debugLog("WebSocket was closed. Re-opening in " + retryTimeSeconds + " seconds.");
    };
    SturdyWebSocket.prototype.stopReconnecting = function (event, debugReason) {
        this.debugLog(debugReason);
        this.shutdown();
        this.dispatchEventOfType("close", event);
    };
    SturdyWebSocket.prototype.shutdown = function () {
        this.isClosed = true;
        this.clearAllTimeouts();
        this.messageBuffer = [];
    };
    SturdyWebSocket.prototype.clearAllTimeouts = function () {
        this.clearConnectTimeout();
        this.clearAllClearTimeout();
    };
    SturdyWebSocket.prototype.clearConnectTimeout = function () {
        if (this.connectTimeoutId != null) {
            clearTimeout(this.connectTimeoutId);
            this.connectTimeoutId = undefined;
        }
    };
    SturdyWebSocket.prototype.clearAllClearTimeout = function () {
        if (this.allClearTimeoutId != null) {
            clearTimeout(this.allClearTimeoutId);
            this.allClearTimeoutId = undefined;
        }
    };
    SturdyWebSocket.prototype.dispatchEventOfType = function (type, event) {
        var _this = this;
        switch (type) {
            case "close":
                if (this.onclose) {
                    this.onclose(event);
                }
                break;
            case "error":
                if (this.onerror) {
                    this.onerror(event);
                }
                break;
            case "message":
                if (this.onmessage) {
                    this.onmessage(event);
                }
                break;
            case "open":
                if (this.onopen) {
                    this.onopen(event);
                }
                break;
            case "down":
                if (this.ondown) {
                    this.ondown(event);
                }
                break;
            case "reopen":
                if (this.onreopen) {
                    this.onreopen(event);
                }
                break;
        }
        if (type in this.listeners) {
            this.listeners[type]
                .slice()
                .forEach(function (listener) { return _this.callListener(listener, event); });
        }
        return !event || !event.defaultPrevented;
    };
    SturdyWebSocket.prototype.callListener = function (listener, event) {
        if (typeof listener === "function") {
            listener.call(this, event);
        }
        else {
            listener.handleEvent.call(this, event);
        }
    };
    SturdyWebSocket.prototype.debugLog = function (message) {
        if (this.options.debug) {
            // tslint:disable-next-line:no-console
            console.log(message);
        }
    };
    SturdyWebSocket.prototype.getTooManyFailedReconnectsMessage = function () {
        var maxReconnectAttempts = this.options.maxReconnectAttempts;
        return "Failed to reconnect after " + maxReconnectAttempts + " " + pluralize("attempt", maxReconnectAttempts) + ". Closing permanently.";
    };
    SturdyWebSocket.DEFAULT_OPTIONS = {
        allClearResetTime: 5000,
        connectTimeout: 5000,
        debug: false,
        minReconnectDelay: 1000,
        maxReconnectDelay: 30000,
        maxReconnectAttempts: Number.POSITIVE_INFINITY,
        reconnectBackoffFactor: 1.5,
        shouldReconnect: function () { return true; },
        wsConstructor: undefined,
    };
    SturdyWebSocket.CONNECTING = 0;
    SturdyWebSocket.OPEN = 1;
    SturdyWebSocket.CLOSING = 2;
    SturdyWebSocket.CLOSED = 3;
    return SturdyWebSocket;
}());
exports.A = SturdyWebSocket;
function getDataByteLength(data) {
    if (typeof data === "string") {
        // UTF-16 strings use two bytes per character.
        return 2 * data.length;
    }
    else if (data instanceof ArrayBuffer) {
        return data.byteLength;
    }
    else if (data instanceof Blob) {
        return data.size;
    }
    else {
        return undefined;
    }
}
function pluralize(s, n) {
    return n === 1 ? s : s + "s";
}
//# sourceMappingURL=index.js.map

/***/ })

};
;