exports.id = 6972;
exports.ids = [6972];
exports.modules = {

/***/ 176532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable */
//prettier-ignore

const util = __webpack_require__(994548)
const abi = __webpack_require__(762978)

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

/***/ 456972:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dist)
});

// UNUSED EXPORTS: CoinbaseWalletSDK, createCoinbaseWalletSDK

;// ./node_modules/@coinbase/wallet-sdk/dist/assets/wallet-logo.js
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
//# sourceMappingURL=wallet-logo.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/storage/ScopedLocalStorage.js
// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>
// TODO: clean up, or possibly deprecate Storage class
class ScopedLocalStorage {
    constructor(scope, module) {
        this.scope = scope;
        this.module = module;
    }
    storeObject(key, item) {
        this.setItem(key, JSON.stringify(item));
    }
    loadObject(key) {
        const item = this.getItem(key);
        return item ? JSON.parse(item) : undefined;
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
//# sourceMappingURL=ScopedLocalStorage.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/error/constants.js
const standardErrorCodes = {
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
const errorValues = {
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
//# sourceMappingURL=constants.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/error/utils.js

const FALLBACK_MESSAGE = 'Unspecified error message.';
const JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (code && Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(errorValues, codeString)) {
            return errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
            return JSON_RPC_SERVER_ERROR_MESSAGE;
        }
    }
    return fallbackMessage;
}
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */
function isValidCode(code) {
    if (!Number.isInteger(code)) {
        return false;
    }
    const codeString = code.toString();
    if (errorValues[codeString]) {
        return true;
    }
    if (isJsonRpcServerError(code)) {
        return true;
    }
    return false;
}
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
        serialized.code = standardErrorCodes.rpc.internal;
        serialized.message = hasStringProperty(error, 'message') ? error.message : FALLBACK_MESSAGE;
        serialized.data = { originalError: assignOriginalError(error) };
    }
    if (shouldIncludeStack) {
        serialized.stack = hasStringProperty(error, 'stack') ? error.stack : undefined;
    }
    return serialized;
}
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
//# sourceMappingURL=utils.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/error/errors.js


const errors_standardErrors = {
    rpc: {
        parse: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.parse, arg),
        invalidRequest: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidRequest, arg),
        invalidParams: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidParams, arg),
        methodNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotFound, arg),
        internal: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.internal, arg),
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
        invalidInput: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.invalidInput, arg),
        resourceNotFound: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceNotFound, arg),
        resourceUnavailable: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.resourceUnavailable, arg),
        transactionRejected: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.transactionRejected, arg),
        methodNotSupported: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.methodNotSupported, arg),
        limitExceeded: (arg) => getEthJsonRpcError(standardErrorCodes.rpc.limitExceeded, arg),
    },
    provider: {
        userRejectedRequest: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.userRejectedRequest, arg);
        },
        unauthorized: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.unauthorized, arg);
        },
        unsupportedMethod: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.unsupportedMethod, arg);
        },
        disconnected: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.disconnected, arg);
        },
        chainDisconnected: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.chainDisconnected, arg);
        },
        unsupportedChain: (arg) => {
            return getEthProviderError(standardErrorCodes.provider.unsupportedChain, arg);
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
    return new EthereumRpcError(code, message || getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new EthereumProviderError(code, message || getMessageFromCode(code), data);
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
//# sourceMappingURL=errors.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/type/index.js
function OpaqueType() {
    return (value) => value;
}
const HexString = OpaqueType();
const AddressString = OpaqueType();
const BigIntString = OpaqueType();
function type_IntNumber(num) {
    return Math.floor(num);
}
const type_RegExpString = OpaqueType();
//# sourceMappingURL=index.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/type/util.js
/* eslint-disable @typescript-eslint/no-explicit-any */
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>


const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
/**
 * @param length number of bytes
 */
function randomBytesHex(length) {
    return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
function uint8ArrayToHex(value) {
    return [...value].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function hexStringToUint8Array(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16)));
}
function hexStringFromBuffer(buf, includePrefix = false) {
    const hex = buf.toString('hex');
    return HexString(includePrefix ? `0x${hex}` : hex);
}
function encodeToHexString(str) {
    return hexStringFromBuffer(ensureBuffer(str), true);
}
function bigIntStringFromBigInt(bi) {
    return BigIntString(bi.toString(10));
}
function intNumberFromHexString(hex) {
    return IntNumber(Number(BigInt(ensureEvenLengthHexString(hex, true))));
}
function hexStringFromNumber(num) {
    return HexString(`0x${BigInt(num).toString(16)}`);
}
function has0xPrefix(str) {
    return str.startsWith('0x') || str.startsWith('0X');
}
function strip0x(hex) {
    if (has0xPrefix(hex)) {
        return hex.slice(2);
    }
    return hex;
}
function prepend0x(hex) {
    if (has0xPrefix(hex)) {
        return `0x${hex.slice(2)}`;
    }
    return `0x${hex}`;
}
function isHexString(hex) {
    if (typeof hex !== 'string') {
        return false;
    }
    const s = strip0x(hex).toLowerCase();
    return HEXADECIMAL_STRING_REGEX.test(s);
}
function ensureHexString(hex, includePrefix = false) {
    if (typeof hex === 'string') {
        const s = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s)) {
            return HexString(includePrefix ? `0x${s}` : s);
        }
    }
    throw errors_standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
}
function ensureEvenLengthHexString(hex, includePrefix = false) {
    let h = ensureHexString(hex, false);
    if (h.length % 2 === 1) {
        h = HexString(`0${h}`);
    }
    return includePrefix ? HexString(`0x${h}`) : h;
}
function ensureAddressString(str) {
    if (typeof str === 'string') {
        const s = strip0x(str).toLowerCase();
        if (isHexString(s) && s.length === 40) {
            return AddressString(prepend0x(s));
        }
    }
    throw errors_standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
}
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
    throw errors_standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
}
function ensureIntNumber(num) {
    if (typeof num === 'number' && Number.isInteger(num)) {
        return type_IntNumber(num);
    }
    if (typeof num === 'string') {
        if (INT_STRING_REGEX.test(num)) {
            return type_IntNumber(Number(num));
        }
        if (isHexString(num)) {
            return type_IntNumber(Number(BigInt(ensureEvenLengthHexString(num, true))));
        }
    }
    throw errors_standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
}
function ensureRegExpString(regExp) {
    if (regExp instanceof RegExp) {
        return RegExpString(regExp.toString());
    }
    throw standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
}
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
    throw errors_standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
}
function ensureParsedJSONObject(val) {
    if (typeof val === 'string') {
        return JSON.parse(val);
    }
    if (typeof val === 'object') {
        return val;
    }
    throw errors_standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
}
function isBigNumber(val) {
    if (val == null || typeof val.constructor !== 'function') {
        return false;
    }
    const { constructor } = val;
    return typeof constructor.config === 'function' && typeof constructor.EUCLID === 'number';
}
function range(start, stop) {
    return Array.from({ length: stop - start }, (_, i) => start + i);
}
function getFavicon() {
    const el = document.querySelector('link[sizes="192x192"]') ||
        document.querySelector('link[sizes="180x180"]') ||
        document.querySelector('link[rel="icon"]') ||
        document.querySelector('link[rel="shortcut icon"]');
    const { protocol, host } = document.location;
    const href = el ? el.getAttribute('href') : null;
    if (!href || href.startsWith('javascript:') || href.startsWith('vbscript:')) {
        return `${protocol}//${host}/favicon.ico`; // fallback
    }
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('data:')) {
        return href;
    }
    if (href.startsWith('//')) {
        return protocol + href;
    }
    return `${protocol}//${host}${href}`;
}
function areAddressArraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}
//# sourceMappingURL=util.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/util/cipher.js

async function generateKeyPair() {
    return crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: 'P-256',
    }, true, ['deriveKey']);
}
async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
    return crypto.subtle.deriveKey({
        name: 'ECDH',
        public: peerPublicKey,
    }, ownPrivateKey, {
        name: 'AES-GCM',
        length: 256,
    }, false, ['encrypt', 'decrypt']);
}
async function encrypt(sharedSecret, plainText) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const cipherText = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv,
    }, sharedSecret, new TextEncoder().encode(plainText));
    return { iv, cipherText };
}
async function decrypt(sharedSecret, { iv, cipherText }) {
    const plainText = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv,
    }, sharedSecret, cipherText);
    return new TextDecoder().decode(plainText);
}
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
    return uint8ArrayToHex(new Uint8Array(exported));
}
async function importKeyFromHexString(type, hexString) {
    const format = getFormat(type);
    const arrayBuffer = hexStringToUint8Array(hexString).buffer;
    return await crypto.subtle.importKey(format, new Uint8Array(arrayBuffer), {
        name: 'ECDH',
        namedCurve: 'P-256',
    }, true, type === 'private' ? ['deriveKey'] : []);
}
async function encryptContent(content, sharedSecret) {
    const serialized = JSON.stringify(content, (_, value) => {
        if (!(value instanceof Error))
            return value;
        const error = value;
        return Object.assign(Object.assign({}, (error.code ? { code: error.code } : {})), { message: error.message });
    });
    return encrypt(sharedSecret, serialized);
}
async function decryptContent(encryptedData, sharedSecret) {
    return JSON.parse(await decrypt(sharedSecret, encryptedData));
}
//# sourceMappingURL=cipher.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWKeyManager.js


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
        this.storage = new ScopedLocalStorage('CBWSDK', 'SCWKeyManager');
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
        const newKeyPair = await generateKeyPair();
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
            this.sharedSecret = await deriveSharedSecret(this.ownPrivateKey, this.peerPublicKey);
        }
    }
    // storage methods
    async loadKey(item) {
        const key = this.storage.getItem(item.storageKey);
        if (!key)
            return null;
        return importKeyFromHexString(item.keyType, key);
    }
    async storeKey(item, key) {
        const hexString = await exportKeyToHexString(item.keyType, key);
        this.storage.setItem(item.storageKey, hexString);
    }
}
//# sourceMappingURL=SCWKeyManager.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sdk-info.js
const VERSION = '4.3.0';
const NAME = '@coinbase/wallet-sdk';
//# sourceMappingURL=sdk-info.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/util/provider.js


async function fetchRPCRequest(request, rpcUrl) {
    const requestBody = Object.assign(Object.assign({}, request), { jsonrpc: '2.0', id: crypto.randomUUID() });
    const res = await window.fetch(rpcUrl, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-Cbw-Sdk-Version': VERSION,
            'X-Cbw-Sdk-Platform': NAME,
        },
    });
    const { result, error } = await res.json();
    if (error)
        throw error;
    return result;
}
function getCoinbaseInjectedLegacyProvider() {
    const window = globalThis;
    return window.coinbaseWalletExtension;
}
function getInjectedEthereum() {
    var _a, _b;
    try {
        const window = globalThis;
        return (_a = window.ethereum) !== null && _a !== void 0 ? _a : (_b = window.top) === null || _b === void 0 ? void 0 : _b.ethereum;
    }
    catch (_c) {
        return undefined;
    }
}
function getCoinbaseInjectedProvider({ metadata, preference, }) {
    var _a, _b;
    const { appName, appLogoUrl, appChainIds } = metadata;
    if (preference.options !== 'smartWalletOnly') {
        const extension = getCoinbaseInjectedLegacyProvider();
        if (extension) {
            (_a = extension.setAppInfo) === null || _a === void 0 ? void 0 : _a.call(extension, appName, appLogoUrl, appChainIds, preference);
            return extension;
        }
    }
    const ethereum = getInjectedEthereum();
    if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
        (_b = ethereum.setAppInfo) === null || _b === void 0 ? void 0 : _b.call(ethereum, appName, appLogoUrl, appChainIds, preference);
        return ethereum;
    }
    return undefined;
}
/**
 * Validates the arguments for an invalid request and returns an error if any validation fails.
 * Valid request args are defined here: https://eips.ethereum.org/EIPS/eip-1193#request
 * @param args The request arguments to validate.
 * @returns An error object if the arguments are invalid, otherwise undefined.
 */
function checkErrorForInvalidRequestArgs(args) {
    if (!args || typeof args !== 'object' || Array.isArray(args)) {
        throw errors_standardErrors.rpc.invalidParams({
            message: 'Expected a single, non-array, object argument.',
            data: args,
        });
    }
    const { method, params } = args;
    if (typeof method !== 'string' || method.length === 0) {
        throw errors_standardErrors.rpc.invalidParams({
            message: "'args.method' must be a non-empty string.",
            data: args,
        });
    }
    if (params !== undefined &&
        !Array.isArray(params) &&
        (typeof params !== 'object' || params === null)) {
        throw errors_standardErrors.rpc.invalidParams({
            message: "'args.params' must be an object or array if provided.",
            data: args,
        });
    }
    switch (method) {
        case 'eth_sign':
        case 'eth_signTypedData_v2':
        case 'eth_subscribe':
        case 'eth_unsubscribe':
            throw errors_standardErrors.provider.unsupportedMethod();
    }
}
//# sourceMappingURL=provider.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWSigner.js






const ACCOUNTS_KEY = 'accounts';
const ACTIVE_CHAIN_STORAGE_KEY = 'activeChain';
const AVAILABLE_CHAINS_STORAGE_KEY = 'availableChains';
const WALLET_CAPABILITIES_STORAGE_KEY = 'walletCapabilities';
class SCWSigner {
    constructor(params) {
        var _a, _b, _c;
        this.metadata = params.metadata;
        this.communicator = params.communicator;
        this.callback = params.callback;
        this.keyManager = new SCWKeyManager();
        this.storage = new ScopedLocalStorage('CBWSDK', 'SCWStateManager');
        this.accounts = (_a = this.storage.loadObject(ACCOUNTS_KEY)) !== null && _a !== void 0 ? _a : [];
        this.chain = this.storage.loadObject(ACTIVE_CHAIN_STORAGE_KEY) || {
            id: (_c = (_b = params.metadata.appChainIds) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 1,
        };
        this.handshake = this.handshake.bind(this);
        this.request = this.request.bind(this);
        this.createRequestMessage = this.createRequestMessage.bind(this);
        this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
    }
    async handshake(args) {
        var _a, _b, _c, _d;
        // Open the popup before constructing the request message.
        // This is to ensure that the popup is not blocked by some browsers (i.e. Safari)
        await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
        const handshakeMessage = await this.createRequestMessage({
            handshake: {
                method: args.method,
                params: Object.assign({}, this.metadata, (_c = args.params) !== null && _c !== void 0 ? _c : {}),
            },
        });
        const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
        // store peer's public key
        if ('failure' in response.content)
            throw response.content.failure;
        const peerPublicKey = await importKeyFromHexString('public', response.sender);
        await this.keyManager.setPeerPublicKey(peerPublicKey);
        const decrypted = await this.decryptResponseMessage(response);
        const result = decrypted.result;
        if ('error' in result)
            throw result.error;
        switch (args.method) {
            case 'eth_requestAccounts': {
                const accounts = result.value;
                this.accounts = accounts;
                this.storage.storeObject(ACCOUNTS_KEY, accounts);
                (_d = this.callback) === null || _d === void 0 ? void 0 : _d.call(this, 'accountsChanged', accounts);
                break;
            }
        }
    }
    async request(request) {
        var _a;
        if (this.accounts.length === 0) {
            switch (request.method) {
                case 'wallet_sendCalls':
                    return this.sendRequestToPopup(request);
                default:
                    throw errors_standardErrors.provider.unauthorized();
            }
        }
        switch (request.method) {
            case 'eth_requestAccounts':
                (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'connect', { chainId: hexStringFromNumber(this.chain.id) });
                return this.accounts;
            case 'eth_accounts':
                return this.accounts;
            case 'eth_coinbase':
                return this.accounts[0];
            case 'net_version':
                return this.chain.id;
            case 'eth_chainId':
                return hexStringFromNumber(this.chain.id);
            case 'wallet_getCapabilities':
                return this.storage.loadObject(WALLET_CAPABILITIES_STORAGE_KEY);
            case 'wallet_switchEthereumChain':
                return this.handleSwitchChainRequest(request);
            case 'eth_ecRecover':
            case 'personal_sign':
            case 'wallet_sign':
            case 'personal_ecRecover':
            case 'eth_signTransaction':
            case 'eth_sendTransaction':
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
            case 'wallet_addEthereumChain':
            case 'wallet_watchAsset':
            case 'wallet_sendCalls':
            case 'wallet_showCallsStatus':
            case 'wallet_grantPermissions':
                return this.sendRequestToPopup(request);
            default:
                if (!this.chain.rpcUrl)
                    throw errors_standardErrors.rpc.internal('No RPC URL set for chain');
                return fetchRPCRequest(request, this.chain.rpcUrl);
        }
    }
    async sendRequestToPopup(request) {
        var _a, _b;
        // Open the popup before constructing the request message.
        // This is to ensure that the popup is not blocked by some browsers (i.e. Safari)
        await ((_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a));
        const response = await this.sendEncryptedRequest(request);
        const decrypted = await this.decryptResponseMessage(response);
        const result = decrypted.result;
        if ('error' in result)
            throw result.error;
        return result.value;
    }
    async cleanup() {
        var _a, _b;
        this.storage.clear();
        await this.keyManager.clear();
        this.accounts = [];
        this.chain = {
            id: (_b = (_a = this.metadata.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1,
        };
    }
    /**
     * @returns `null` if the request was successful.
     * https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
     */
    async handleSwitchChainRequest(request) {
        var _a;
        const params = request.params;
        if (!params || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId)) {
            throw errors_standardErrors.rpc.invalidParams();
        }
        const chainId = ensureIntNumber(params[0].chainId);
        const localResult = this.updateChain(chainId);
        if (localResult)
            return null;
        const popupResult = await this.sendRequestToPopup(request);
        if (popupResult === null) {
            this.updateChain(chainId);
        }
        return popupResult;
    }
    async sendEncryptedRequest(request) {
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
            throw errors_standardErrors.provider.unauthorized('No valid session found, try requestAccounts before other methods');
        }
        const encrypted = await encryptContent({
            action: request,
            chainId: this.chain.id,
        }, sharedSecret);
        const message = await this.createRequestMessage({ encrypted });
        return this.communicator.postRequestAndWaitForResponse(message);
    }
    async createRequestMessage(content) {
        const publicKey = await exportKeyToHexString('public', await this.keyManager.getOwnPublicKey());
        return {
            id: crypto.randomUUID(),
            sender: publicKey,
            content,
            timestamp: new Date(),
        };
    }
    async decryptResponseMessage(message) {
        var _a, _b;
        const content = message.content;
        // throw protocol level error
        if ('failure' in content) {
            throw content.failure;
        }
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
            throw errors_standardErrors.provider.unauthorized('Invalid session');
        }
        const response = await decryptContent(content.encrypted, sharedSecret);
        const availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
        if (availableChains) {
            const chains = Object.entries(availableChains).map(([id, rpcUrl]) => ({
                id: Number(id),
                rpcUrl,
            }));
            this.storage.storeObject(AVAILABLE_CHAINS_STORAGE_KEY, chains);
            this.updateChain(this.chain.id, chains);
        }
        const walletCapabilities = (_b = response.data) === null || _b === void 0 ? void 0 : _b.capabilities;
        if (walletCapabilities) {
            this.storage.storeObject(WALLET_CAPABILITIES_STORAGE_KEY, walletCapabilities);
        }
        return response;
    }
    updateChain(chainId, newAvailableChains) {
        var _a;
        const chains = newAvailableChains !== null && newAvailableChains !== void 0 ? newAvailableChains : this.storage.loadObject(AVAILABLE_CHAINS_STORAGE_KEY);
        const chain = chains === null || chains === void 0 ? void 0 : chains.find((chain) => chain.id === chainId);
        if (!chain)
            return false;
        if (chain !== this.chain) {
            this.chain = chain;
            this.storage.storeObject(ACTIVE_CHAIN_STORAGE_KEY, chain);
            (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'chainChanged', hexStringFromNumber(chain.id));
        }
        return true;
    }
}
//# sourceMappingURL=SCWSigner.js.map
// EXTERNAL MODULE: ./node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.cjs
var eth_eip712_util = __webpack_require__(176532);
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/constants.js
const WALLET_USER_NAME_KEY = 'walletUsername';
const LOCAL_STORAGE_ADDRESSES_KEY = 'Addresses';
const APP_VERSION_KEY = 'AppVersion';
//# sourceMappingURL=constants.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/Web3Response.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
function isErrorResponse(response) {
    return response.errorMessage !== undefined;
}
//# sourceMappingURL=Web3Response.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkCipher.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>

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
        const secretKey = await crypto.subtle.importKey('raw', hexStringToUint8Array(secret), { name: 'aes-gcm' }, false, ['encrypt', 'decrypt']);
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
        return uint8ArrayToHex(concatted);
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
                const secretKey = await crypto.subtle.importKey('raw', hexStringToUint8Array(secret), { name: 'aes-gcm' }, false, ['encrypt', 'decrypt']);
                const encrypted = hexStringToUint8Array(cipherText);
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
//# sourceMappingURL=WalletLinkCipher.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkHTTP.js
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
//# sourceMappingURL=WalletLinkHTTP.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkWebSocket.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["DISCONNECTED"] = 0] = "DISCONNECTED";
    ConnectionState[ConnectionState["CONNECTING"] = 1] = "CONNECTING";
    ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState || (ConnectionState = {}));
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
//# sourceMappingURL=WalletLinkWebSocket.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkConnection.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>





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
    constructor({ session, linkAPIUrl, listener }) {
        this.destroyed = false;
        this.lastHeartbeatResponse = 0;
        this.nextReqId = type_IntNumber(1);
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
                    'ChainId', // ChainId and JsonRpcUrl are always updated together
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
            const address = await this.cipher.decrypt(encryptedEthereumAddress);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
        };
        this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
            var _a;
            const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
        };
        this.handleWalletUsernameUpdated = async (walletUsername) => {
            this.handleMetadataUpdated(WALLET_USER_NAME_KEY, walletUsername);
        };
        this.handleAppVersionUpdated = async (appVersion) => {
            this.handleMetadataUpdated(APP_VERSION_KEY, appVersion);
        };
        this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
            var _a;
            const chainId = await this.cipher.decrypt(encryptedChainId);
            const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
        };
        this.session = session;
        this.cipher = new WalletLinkCipher(session.secret);
        this.listener = listener;
        const ws = new WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocket);
        ws.setConnectionStateListener(async (state) => {
            // attempt to reconnect every 5 seconds when disconnected
            let connected = false;
            switch (state) {
                case ConnectionState.DISCONNECTED:
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
                case ConnectionState.CONNECTED:
                    // perform authentication upon connection
                    // if CONNECTED, authenticate, and then check link status
                    connected = await this.handleConnected();
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
                case ConnectionState.CONNECTING:
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
        this.http = new WalletLinkHTTP(linkAPIUrl, session.id, session.key);
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
    async destroy() {
        if (this.destroyed)
            return;
        await this.makeRequest({
            type: 'SetSessionConfig',
            id: type_IntNumber(this.nextReqId++),
            sessionId: this.session.id,
            metadata: { __destroyed: '1' },
        }, { timeout: 1000 });
        this.destroyed = true;
        this.ws.disconnect();
        this.listener = undefined;
    }
    get connected() {
        return this._connected;
    }
    set connected(connected) {
        this._connected = connected;
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
        const decryptedData = await this.cipher.decrypt(m.data);
        const message = JSON.parse(decryptedData);
        if (message.type !== 'WEB3_RESPONSE')
            return;
        const { id, response } = message;
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(id, response);
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
     * Publish an event and emit event ID when successful
     * @param event event name
     * @param unencryptedData unencrypted event data
     * @param callWebhook whether the webhook should be invoked
     * @returns a Promise that emits event ID when successful
     */
    async publishEvent(event, unencryptedData, callWebhook = false) {
        const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, location: location.href, relaySource: 'coinbaseWalletExtension' in window && window.coinbaseWalletExtension
                ? 'injected_sdk'
                : 'sdk' })));
        const message = {
            type: 'PublishEvent',
            id: type_IntNumber(this.nextReqId++),
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
    async makeRequest(message, options = { timeout: REQUEST_TIMEOUT }) {
        const reqId = message.id;
        this.sendData(message);
        // await server message with corresponding id
        let timeoutId;
        return Promise.race([
            new Promise((_, reject) => {
                timeoutId = window.setTimeout(() => {
                    reject(new Error(`request ${reqId} timed out`));
                }, options.timeout);
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
    async handleConnected() {
        const res = await this.makeRequest({
            type: 'HostSession',
            id: type_IntNumber(this.nextReqId++),
            sessionId: this.session.id,
            sessionKey: this.session.key,
        });
        if (res.type === 'Fail')
            return false;
        this.sendData({
            type: 'IsLinked',
            id: type_IntNumber(this.nextReqId++),
            sessionId: this.session.id,
        });
        this.sendData({
            type: 'GetSessionConfig',
            id: type_IntNumber(this.nextReqId++),
            sessionId: this.session.id,
        });
        return true;
    }
}
//# sourceMappingURL=WalletLinkConnection.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/RelayEventManager.js

class RelayEventManager {
    constructor() {
        this._nextRequestId = 0;
        this.callbacks = new Map();
    }
    makeRequestId() {
        // max nextId == max int32 for compatibility with mobile
        this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
        const id = this._nextRequestId;
        const idStr = prepend0x(id.toString(16));
        // unlikely that this will ever be an issue, but just to be safe
        const callback = this.callbacks.get(idStr);
        if (callback) {
            this.callbacks.delete(idStr);
        }
        return id;
    }
}
//# sourceMappingURL=RelayEventManager.js.map
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/sha256.js
var sha256 = __webpack_require__(778226);
// EXTERNAL MODULE: ./node_modules/@noble/hashes/esm/utils.js + 1 modules
var utils = __webpack_require__(628427);
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/WalletLinkSession.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>



const STORAGE_KEY_SESSION_ID = 'session:id';
const STORAGE_KEY_SESSION_SECRET = 'session:secret';
const STORAGE_KEY_SESSION_LINKED = 'session:linked';
class WalletLinkSession {
    constructor(storage, id, secret, linked = false) {
        this.storage = storage;
        this.id = id;
        this.secret = secret;
        this.key = (0,utils/* bytesToHex */.My)((0,sha256/* sha256 */.sc)(`${id}, ${secret} WalletLink`));
        this._linked = !!linked;
    }
    static create(storage) {
        const id = randomBytesHex(16);
        const secret = randomBytesHex(32);
        return new WalletLinkSession(storage, id, secret).save();
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
    get linked() {
        return this._linked;
    }
    set linked(val) {
        this._linked = val;
        this.persistLinked();
    }
    save() {
        this.storage.setItem(STORAGE_KEY_SESSION_ID, this.id);
        this.storage.setItem(STORAGE_KEY_SESSION_SECRET, this.secret);
        this.persistLinked();
        return this;
    }
    persistLinked() {
        this.storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? '1' : '0');
    }
}
//# sourceMappingURL=WalletLinkSession.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/util.js
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
function isMobileWeb() {
    var _a;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
}
function isDarkMode() {
    var _a, _b;
    return (_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)').matches) !== null && _b !== void 0 ? _b : false;
}
//# sourceMappingURL=util.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset-css.js
/* harmony default export */ const cssReset_css = ((() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)());
//# sourceMappingURL=cssReset-css.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>

function injectCssReset() {
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(cssReset_css));
    document.documentElement.appendChild(styleEl);
}
//# sourceMappingURL=cssReset.js.map
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(320053);
;// ./node_modules/preact/dist/preact.mjs
var n,l,u,t,i,r,o,e,f,c,s,a,h,p={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function _(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return m(l,e,i,r,null)}function m(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u:o,__i:-1,__u:0};return null==o&&null!=l.vnode&&l.vnode(e),e}function b(){return{current:null}}function k(n){return n.children}function x(n,l){this.props=n,this.context=l}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?S(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!$.__r++||r!=l.debounceRendering)&&((r=l.debounceRendering)||o)($)}function $(){for(var n,u,t,r,o,f,c,s=1;i.length;)i.length>s&&i.sort(e),n=i.shift(),s=i.length,n.__d&&(t=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(t),O(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,z(f,t,c),t.__e!=o&&C(t)));$.__r=0}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_=t&&t.__k||v,m=l.length;for(f=P(u,l,_,f,m),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p:_[y.__i]||p,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&q(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),4&y.__u||h.__k===y.__k?f=A(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m(null,o,null,null,null):w(o)?m(k,{children:o},null,null,null):null==o.constructor&&o.__b>0?m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),B(e,e));return t}function A(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=A(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=S(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8==l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(w(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i,r,o=n.key,e=n.type,f=l[u];if(null===f&&null==n.key||f&&o==f.key&&e==f.type&&0==(2&f.__u))return u;if(t>(null!=f&&0==(2&f.__u)?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e==f.type)return i;i--}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e==f.type)return r;r++}}return-1}function T(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y.test(l)?u:u+"px"}function j(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T(n.style,l,u[l])}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c,n.addEventListener(l,r?a:s,r)):n.removeEventListener(l,r?a:s,r);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x(b,M),h.constructor=j,h.render=D),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v==t.__v){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_)})}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k&&null==a.key&&(L=N(a.props.children)),f=I(n,w(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f}else for(T=o.length;T--;)g(o[T]);else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=V(t.__e,u,t,i,r,o,e,c,s);return(a=l.diffed)&&a(u),128&u.__u?void 0:f}function z(n,u,t){for(var i=0;i<t.length;i++)q(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(n){return"object"!=typeof n||null==n||n.__b&&n.__b>0?n:w(n)?n.map(N):d({},n)}function V(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l.__m&&l.__m(t,e),c=!1),e=null}if(null==x)b===k||c&&u.data==k||(u.data=k);else{if(e=e&&n.call(u.childNodes),b=i.props||p,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j(u,a,null,d,o)}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"==t.type?u.content:u,w(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j(u,a,m,b[a],o))}return u}function q(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function B(n,u,t){var i,r;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||q(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&B(i[r],u,t||"function"!=typeof n.type);t||g(n.__e),n.__c=n.__=n.__e=void 0}function D(n,l,u){return this.constructor(n,u)}function E(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l.__&&l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],O(t,u=(!r&&i||t).__k=_(k,null,[u]),o||p,p,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),z(e,u,f)}function G(n,l){E(n,l,G)}function J(l,u,t){var i,r,o,e,f=d({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&null!=e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),m(l.type,f,i||l.key,r||l.ref,null)}function K(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!=n.value&&u.forEach(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}return l.__c="__cC"+h++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}n=v.slice,l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},x.prototype.render=k,i=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f=/(PointerCapture)$|Capture$/i,c=0,s=F(!1),a=F(!0),h=0;
//# sourceMappingURL=preact.module.js.map

;// ./node_modules/preact/hooks/dist/hooks.mjs
var hooks_t,hooks_r,hooks_u,hooks_i,hooks_o=0,hooks_f=[],hooks_c=l,hooks_e=hooks_c.__b,hooks_a=hooks_c.__r,hooks_v=hooks_c.diffed,hooks_l=hooks_c.__c,hooks_m=hooks_c.unmount,hooks_s=hooks_c.__;function hooks_p(n,t){hooks_c.__h&&hooks_c.__h(hooks_r,n,hooks_o||t),hooks_o=0;var u=hooks_r.__H||(hooks_r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function hooks_d(n){return hooks_o=1,hooks_h(hooks_D,n)}function hooks_h(n,u,i){var o=hooks_p(hooks_t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):hooks_D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=hooks_r,!hooks_r.__f)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),c&&c.call(this,n,t,r)||i};hooks_r.__f=!0;var c=hooks_r.shouldComponentUpdate,e=hooks_r.componentWillUpdate;hooks_r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},hooks_r.shouldComponentUpdate=f}return o.__N||o.__}function hooks_y(n,u){var i=hooks_p(hooks_t++,3);!hooks_c.__s&&hooks_C(i.__H,u)&&(i.__=n,i.u=u,hooks_r.__H.__h.push(i))}function hooks_(n,u){var i=hooks_p(hooks_t++,4);!hooks_c.__s&&hooks_C(i.__H,u)&&(i.__=n,i.u=u,hooks_r.__h.push(i))}function hooks_A(n){return hooks_o=5,hooks_T(function(){return{current:n}},[])}function hooks_F(n,t,r){hooks_o=6,hooks_(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r()}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n))}function hooks_T(n,r){var u=hooks_p(hooks_t++,7);return hooks_C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function hooks_q(n,t){return hooks_o=8,hooks_T(function(){return n},t)}function hooks_x(n){var u=hooks_r.context[n.__c],i=hooks_p(hooks_t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(hooks_r)),u.props.value):n.__}function hooks_P(n,t){hooks_c.useDebugValue&&hooks_c.useDebugValue(t?t(n):n)}function hooks_b(n){var u=hooks_p(hooks_t++,10),i=hooks_d();return u.__=n,hooks_r.componentDidCatch||(hooks_r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function hooks_g(){var n=hooks_p(hooks_t++,11);if(!n.__){for(var u=hooks_r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function hooks_j(){for(var n;n=hooks_f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(hooks_z),n.__H.__h.forEach(hooks_B),n.__H.__h=[]}catch(t){n.__H.__h=[],hooks_c.__e(t,n.__v)}}hooks_c.__b=function(n){hooks_r=null,hooks_e&&hooks_e(n)},hooks_c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),hooks_s&&hooks_s(n,t)},hooks_c.__r=function(n){hooks_a&&hooks_a(n),hooks_t=0;var i=(hooks_r=n.__c).__H;i&&(hooks_u===hooks_r?(i.__h=[],hooks_r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(i.__h.forEach(hooks_z),i.__h.forEach(hooks_B),i.__h=[],hooks_t=0)),hooks_u=hooks_r},hooks_c.diffed=function(n){hooks_v&&hooks_v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==hooks_f.push(t)&&hooks_i===hooks_c.requestAnimationFrame||((hooks_i=hooks_c.requestAnimationFrame)||hooks_w)(hooks_j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),hooks_u=hooks_r=null},hooks_c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(hooks_z),n.__h=n.__h.filter(function(n){return!n.__||hooks_B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],hooks_c.__e(r,n.__v)}}),hooks_l&&hooks_l(n,t)},hooks_c.unmount=function(n){hooks_m&&hooks_m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{hooks_z(n)}catch(n){t=n}}),r.__H=void 0,t&&hooks_c.__e(t,r.__v))};var hooks_k="function"==typeof requestAnimationFrame;function hooks_w(n){var t,r=function(){clearTimeout(u),hooks_k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,35);hooks_k&&(t=requestAnimationFrame(r))}function hooks_z(n){var t=hooks_r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),hooks_r=t}function hooks_B(n){var t=hooks_r;n.__c=n.__(),hooks_r=t}function hooks_C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function hooks_D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map

;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar-css.js
/* harmony default export */ const Snackbar_css = ((() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)());
//# sourceMappingURL=Snackbar-css.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>





const cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
class Snackbar {
    constructor() {
        this.items = new Map();
        this.nextItemKey = 0;
        this.root = null;
        this.darkMode = isDarkMode();
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
        E(_("div", null,
            _(SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => (_(SnackbarInstance, Object.assign({}, itemProps, { key: key })))))), this.root);
    }
}
const SnackbarContainer = (props) => (_("div", { class: (0,clsx_m/* clsx */.$)('-cbwsdk-snackbar-container') },
    _("style", null, Snackbar_css),
    _("div", { class: "-cbwsdk-snackbar" }, props.children)));
const SnackbarInstance = ({ autoExpand, message, menuItems, }) => {
    const [hidden, setHidden] = hooks_d(true);
    const [expanded, setExpanded] = hooks_d(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
    hooks_y(() => {
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
    return (_("div", { class: (0,clsx_m/* clsx */.$)('-cbwsdk-snackbar-instance', hidden && '-cbwsdk-snackbar-instance-hidden', expanded && '-cbwsdk-snackbar-instance-expanded') },
        _("div", { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
            _("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
            ' ',
            _("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
            _("div", { class: "-gear-container" },
                !expanded && (_("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    _("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" }))),
                _("img", { src: gearIcon, class: "-gear-icon", title: "Expand" }))),
        menuItems && menuItems.length > 0 && (_("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i) => (_("div", { class: (0,clsx_m/* clsx */.$)('-cbwsdk-snackbar-instance-menu-item', action.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'), onClick: action.onClick, key: i },
            _("svg", { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                _("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })),
            _("span", { class: (0,clsx_m/* clsx */.$)('-cbwsdk-snackbar-instance-menu-item-info', action.isRed && '-cbwsdk-snackbar-instance-menu-item-info-is-red') }, action.info))))))));
};
//# sourceMappingURL=Snackbar.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WalletLinkRelayUI.js


class WalletLinkRelayUI {
    constructor() {
        this.attached = false;
        this.snackbar = new Snackbar();
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
        injectCssReset();
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
//# sourceMappingURL=WalletLinkRelayUI.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog-css.js
/* harmony default export */ const RedirectDialog_css = ((() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)());
//# sourceMappingURL=RedirectDialog-css.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog.js






class RedirectDialog {
    constructor() {
        this.root = null;
        this.darkMode = isDarkMode();
    }
    attach() {
        const el = document.documentElement;
        this.root = document.createElement('div');
        this.root.className = '-cbwsdk-css-reset';
        el.appendChild(this.root);
        injectCssReset();
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
        E(null, this.root);
        if (!props)
            return;
        E(_(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
                this.clear();
            }, darkMode: this.darkMode })), this.root);
    }
}
const RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
    const theme = darkMode ? 'dark' : 'light';
    return (_(SnackbarContainer, { darkMode: darkMode },
        _("div", { class: "-cbwsdk-redirect-dialog" },
            _("style", null, RedirectDialog_css),
            _("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
            _("div", { class: (0,clsx_m/* clsx */.$)('-cbwsdk-redirect-dialog-box', theme) },
                _("p", null, title),
                _("button", { onClick: onButtonClick }, buttonText)))));
};
//# sourceMappingURL=RedirectDialog.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/constants.js
const CB_KEYS_URL = 'https://keys.coinbase.com/connect';
const CB_WALLET_RPC_URL = 'http://rpc.wallet.coinbase.com';
const WALLETLINK_URL = 'https://www.walletlink.org';
const CBW_MOBILE_DEEPLINK_URL = 'https://go.cb-w.com/walletlink';
//# sourceMappingURL=constants.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WLMobileRelayUI.js



class WLMobileRelayUI {
    constructor() {
        this.attached = false;
        this.redirectDialog = new RedirectDialog();
    }
    attach() {
        if (this.attached) {
            throw new Error('Coinbase Wallet SDK UI is already attached');
        }
        this.redirectDialog.attach();
        this.attached = true;
    }
    redirectToCoinbaseWallet(walletLinkUrl) {
        const url = new URL(CBW_MOBILE_DEEPLINK_URL);
        url.searchParams.append('redirect_url', getLocation().href);
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
//# sourceMappingURL=WLMobileRelayUI.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/WalletLinkRelay.js
// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>











class WalletLinkRelay {
    constructor(options) {
        this.chainCallbackParams = { chainId: '', jsonRpcUrl: '' }; // to implement distinctUntilChanged
        this.isMobileWeb = isMobileWeb();
        this.linkedUpdated = (linked) => {
            this.isLinked = linked;
            const cachedAddresses = this.storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
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
                this.chainCallback(jsonRpcUrl, Number.parseInt(chainId, 10));
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
                    this.invokeCallback(id, {
                        method: 'requestEthereumAccounts',
                        result: [selectedAddress],
                    });
                });
                WalletLinkRelay.accountRequestCallbackIds.clear();
            }
        };
        this.resetAndReload = this.resetAndReload.bind(this);
        this.linkAPIUrl = options.linkAPIUrl;
        this.storage = options.storage;
        this.metadata = options.metadata;
        this.accountsCallback = options.accountsCallback;
        this.chainCallback = options.chainCallback;
        const { session, ui, connection } = this.subscribe();
        this._session = session;
        this.connection = connection;
        this.relayEventManager = new RelayEventManager();
        this.ui = ui;
        this.ui.attach();
    }
    subscribe() {
        const session = WalletLinkSession.load(this.storage) || WalletLinkSession.create(this.storage);
        const { linkAPIUrl } = this;
        const connection = new WalletLinkConnection({
            session,
            linkAPIUrl,
            listener: this,
        });
        const ui = this.isMobileWeb ? new WLMobileRelayUI() : new WalletLinkRelayUI();
        connection.connect();
        return { session, ui, connection };
    }
    resetAndReload() {
        this.connection
            .destroy()
            .then(() => {
            /**
             * Only clear storage if the session id we have in memory matches the one on disk
             * Otherwise, in the case where we have 2 tabs, another tab might have cleared
             * storage already.  In that case if we clear storage again, the user will be in
             * a state where the first tab allows the user to connect but the session that
             * was used isn't persisted.  This leaves the user in a state where they aren't
             * connected to the mobile app.
             */
            const storedSession = WalletLinkSession.load(this.storage);
            if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
                ScopedLocalStorage.clearAll();
            }
            document.location.reload();
        })
            .catch((_) => { });
    }
    signEthereumTransaction(params) {
        return this.sendRequest({
            method: 'signEthereumTransaction',
            params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: bigIntStringFromBigInt(params.weiValue),
                data: hexStringFromBuffer(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
                maxFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
                maxPriorityFeePerGas: params.gasPriceInWei
                    ? bigIntStringFromBigInt(params.gasPriceInWei)
                    : null,
                gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
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
                weiValue: bigIntStringFromBigInt(params.weiValue),
                data: hexStringFromBuffer(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
                maxFeePerGas: params.maxFeePerGas ? bigIntStringFromBigInt(params.maxFeePerGas) : null,
                maxPriorityFeePerGas: params.maxPriorityFeePerGas
                    ? bigIntStringFromBigInt(params.maxPriorityFeePerGas)
                    : null,
                gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: true,
            },
        });
    }
    submitEthereumTransaction(signedTransaction, chainId) {
        return this.sendRequest({
            method: 'submitEthereumTransaction',
            params: {
                signedTransaction: hexStringFromBuffer(signedTransaction, true),
                chainId,
            },
        });
    }
    getWalletLinkSession() {
        return this._session;
    }
    sendRequest(request) {
        let hideSnackbarItem = null;
        const id = randomBytesHex(8);
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
                if (isErrorResponse(response)) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            this.publishWeb3RequestEvent(id, request);
        });
    }
    publishWeb3RequestEvent(id, request) {
        const message = { type: 'WEB3_REQUEST', id, request };
        this.publishEvent('Web3Request', message, true)
            .then((_) => { })
            .catch((err) => {
            this.handleWeb3ResponseMessage(message.id, {
                method: request.method,
                errorMessage: err.message,
            });
        });
        if (this.isMobileWeb) {
            this.openCoinbaseWalletDeeplink(request.method);
        }
    }
    // copied from MobileRelay
    openCoinbaseWalletDeeplink(method) {
        if (!(this.ui instanceof WLMobileRelayUI))
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
    handleWeb3ResponseMessage(id, response) {
        if (response.method === 'requestEthereumAccounts') {
            WalletLinkRelay.accountRequestCallbackIds.forEach((id) => this.invokeCallback(id, response));
            WalletLinkRelay.accountRequestCallbackIds.clear();
            return;
        }
        this.invokeCallback(id, response);
    }
    handleErrorResponse(id, method, error) {
        var _a;
        const errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Unspecified error message.';
        this.handleWeb3ResponseMessage(id, {
            method,
            errorMessage,
        });
    }
    invokeCallback(id, response) {
        const callback = this.relayEventManager.callbacks.get(id);
        if (callback) {
            callback(response);
            this.relayEventManager.callbacks.delete(id);
        }
    }
    requestEthereumAccounts() {
        const { appName, appLogoUrl } = this.metadata;
        const request = {
            method: 'requestEthereumAccounts',
            params: {
                appName,
                appLogoUrl,
            },
        };
        const hideSnackbarItem = null;
        const id = randomBytesHex(8);
        return new Promise((resolve, reject) => {
            this.relayEventManager.callbacks.set(id, (response) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
                if (isErrorResponse(response)) {
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
        const id = randomBytesHex(8);
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
                if (isErrorResponse(response)) {
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
        const id = randomBytesHex(8);
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
                if (isErrorResponse(response)) {
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
        let hideSnackbarItem = null;
        const id = randomBytesHex(8);
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
                if (isErrorResponse(response) && response.errorCode) {
                    return reject(errors_standardErrors.provider.custom({
                        code: response.errorCode,
                        message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`,
                    }));
                }
                else if (isErrorResponse(response)) {
                    return reject(new Error(response.errorMessage));
                }
                resolve(response);
            });
            this.publishWeb3RequestEvent(id, request);
        });
    }
}
WalletLinkRelay.accountRequestCallbackIds = new Set();
//# sourceMappingURL=WalletLinkRelay.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/WalletLinkSigner.js
// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck









const DEFAULT_CHAIN_ID_KEY = 'DefaultChainId';
const DEFAULT_JSON_RPC_URL = 'DefaultJsonRpcUrl';
// original source: https://github.com/coinbase/coinbase-wallet-sdk/blob/v3.7.1/packages/wallet-sdk/src/provider/CoinbaseWalletProvider.ts
class WalletLinkSigner {
    constructor(options) {
        this._relay = null;
        this._addresses = [];
        this.metadata = options.metadata;
        this._storage = new ScopedLocalStorage('walletlink', WALLETLINK_URL);
        this.callback = options.callback || null;
        const cachedAddresses = this._storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
        if (cachedAddresses) {
            const addresses = cachedAddresses.split(' ');
            if (addresses[0] !== '') {
                this._addresses = addresses.map((address) => ensureAddressString(address));
            }
        }
        this.initializeRelay();
    }
    getSession() {
        const relay = this.initializeRelay();
        const { id, secret } = relay.getWalletLinkSession();
        return { id, secret };
    }
    async handshake() {
        await this._eth_requestAccounts();
    }
    get selectedAddress() {
        return this._addresses[0] || undefined;
    }
    get jsonRpcUrl() {
        var _a;
        return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : undefined;
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
        const chainChanged = ensureIntNumber(chainId) !== originalChainId;
        if (chainChanged) {
            (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'chainChanged', hexStringFromNumber(chainId));
        }
    }
    async watchAsset(params) {
        const request = (Array.isArray(params) ? params[0] : params);
        if (!request.type) {
            throw errors_standardErrors.rpc.invalidParams('Type is required');
        }
        if ((request === null || request === void 0 ? void 0 : request.type) !== 'ERC20') {
            throw errors_standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
        }
        if (!(request === null || request === void 0 ? void 0 : request.options)) {
            throw errors_standardErrors.rpc.invalidParams('Options are required');
        }
        if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
            throw errors_standardErrors.rpc.invalidParams('Address is required');
        }
        const chainId = this.getChainId();
        const { address, symbol, image, decimals } = request.options;
        const relay = this.initializeRelay();
        const result = await relay.watchAsset(request.type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
        if (isErrorResponse(result))
            return false;
        return !!result.result;
    }
    async addEthereumChain(params) {
        var _a, _b;
        const request = params[0];
        if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            throw errors_standardErrors.rpc.invalidParams('please pass in at least 1 rpcUrl');
        }
        if (!request.chainName || request.chainName.trim() === '') {
            throw errors_standardErrors.rpc.invalidParams('chainName is a required field');
        }
        if (!request.nativeCurrency) {
            throw errors_standardErrors.rpc.invalidParams('nativeCurrency is a required field');
        }
        const chainIdNumber = Number.parseInt(request.chainId, 16);
        if (chainIdNumber === this.getChainId()) {
            return false;
        }
        const relay = this.initializeRelay();
        const { rpcUrls = [], blockExplorerUrls = [], chainName, iconUrls = [], nativeCurrency, } = request;
        const res = await relay.addEthereumChain(chainIdNumber.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
        if (isErrorResponse(res))
            return false;
        if (((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true) {
            this.updateProviderInfo(rpcUrls[0], chainIdNumber);
            return null;
        }
        throw errors_standardErrors.rpc.internal('unable to add ethereum chain');
    }
    async switchEthereumChain(params) {
        const request = params[0];
        const chainId = Number.parseInt(request.chainId, 16);
        const relay = this.initializeRelay();
        const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || undefined);
        if (isErrorResponse(res))
            throw res;
        const switchResponse = res.result;
        if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
            this.updateProviderInfo(switchResponse.rpcUrl, chainId);
        }
        return null;
    }
    async cleanup() {
        this.callback = null;
        if (this._relay) {
            this._relay.resetAndReload();
        }
        this._storage.clear();
    }
    _setAddresses(addresses, _) {
        var _a;
        if (!Array.isArray(addresses)) {
            throw new Error('addresses is not an array');
        }
        const newAddresses = addresses.map((address) => ensureAddressString(address));
        if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
            return;
        }
        this._addresses = newAddresses;
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'accountsChanged', newAddresses);
        this._storage.setItem(LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(' '));
    }
    async request(request) {
        const params = request.params || [];
        switch (request.method) {
            case 'eth_accounts':
                return [...this._addresses];
            case 'eth_coinbase':
                return this.selectedAddress || null;
            case 'net_version':
                return this.getChainId().toString(10);
            case 'eth_chainId':
                return hexStringFromNumber(this.getChainId());
            case 'eth_requestAccounts':
                return this._eth_requestAccounts();
            case 'eth_ecRecover':
            case 'personal_ecRecover':
                return this.ecRecover(request);
            case 'personal_sign':
                return this.personalSign(request);
            case 'eth_signTransaction':
                return this._eth_signTransaction(params);
            case 'eth_sendRawTransaction':
                return this._eth_sendRawTransaction(params);
            case 'eth_sendTransaction':
                return this._eth_sendTransaction(params);
            case 'eth_signTypedData_v1':
            case 'eth_signTypedData_v3':
            case 'eth_signTypedData_v4':
            case 'eth_signTypedData':
                return this.signTypedData(request);
            case 'wallet_addEthereumChain':
                return this.addEthereumChain(params);
            case 'wallet_switchEthereumChain':
                return this.switchEthereumChain(params);
            case 'wallet_watchAsset':
                return this.watchAsset(params);
            default:
                if (!this.jsonRpcUrl)
                    throw errors_standardErrors.rpc.internal('No RPC URL set for chain');
                return fetchRPCRequest(request, this.jsonRpcUrl);
        }
    }
    _ensureKnownAddress(addressString) {
        const addressStr = ensureAddressString(addressString);
        const lowercaseAddresses = this._addresses.map((address) => ensureAddressString(address));
        if (!lowercaseAddresses.includes(addressStr)) {
            throw new Error('Unknown Ethereum address');
        }
    }
    _prepareTransactionParams(tx) {
        const fromAddress = tx.from ? ensureAddressString(tx.from) : this.selectedAddress;
        if (!fromAddress) {
            throw new Error('Ethereum address is unavailable');
        }
        this._ensureKnownAddress(fromAddress);
        const toAddress = tx.to ? ensureAddressString(tx.to) : null;
        const weiValue = tx.value != null ? ensureBigInt(tx.value) : BigInt(0);
        const data = tx.data ? ensureBuffer(tx.data) : Buffer.alloc(0);
        const nonce = tx.nonce != null ? ensureIntNumber(tx.nonce) : null;
        const gasPriceInWei = tx.gasPrice != null ? ensureBigInt(tx.gasPrice) : null;
        const maxFeePerGas = tx.maxFeePerGas != null ? ensureBigInt(tx.maxFeePerGas) : null;
        const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? ensureBigInt(tx.maxPriorityFeePerGas) : null;
        const gasLimit = tx.gas != null ? ensureBigInt(tx.gas) : null;
        const chainId = tx.chainId ? ensureIntNumber(tx.chainId) : this.getChainId();
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
    async ecRecover(request) {
        const { method, params } = request;
        if (!Array.isArray(params))
            throw errors_standardErrors.rpc.invalidParams();
        const relay = this.initializeRelay();
        const res = await relay.sendRequest({
            method: 'ethereumAddressFromSignedMessage',
            params: {
                message: encodeToHexString(params[0]),
                signature: encodeToHexString(params[1]),
                addPrefix: method === 'personal_ecRecover',
            },
        });
        if (isErrorResponse(res))
            throw res;
        return res.result;
    }
    getChainId() {
        var _a;
        return Number.parseInt((_a = this._storage.getItem(DEFAULT_CHAIN_ID_KEY)) !== null && _a !== void 0 ? _a : '1', 10);
    }
    async _eth_requestAccounts() {
        var _a, _b;
        if (this._addresses.length > 0) {
            (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'connect', { chainId: hexStringFromNumber(this.getChainId()) });
            return this._addresses;
        }
        const relay = this.initializeRelay();
        const res = await relay.requestEthereumAccounts();
        if (isErrorResponse(res))
            throw res;
        if (!res.result) {
            throw new Error('accounts received is empty');
        }
        this._setAddresses(res.result);
        (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, 'connect', { chainId: hexStringFromNumber(this.getChainId()) });
        return this._addresses;
    }
    async personalSign({ params }) {
        if (!Array.isArray(params))
            throw errors_standardErrors.rpc.invalidParams();
        const address = params[1];
        const rawData = params[0];
        this._ensureKnownAddress(address);
        const relay = this.initializeRelay();
        const res = await relay.sendRequest({
            method: 'signEthereumMessage',
            params: {
                address: ensureAddressString(address),
                message: encodeToHexString(rawData),
                addPrefix: true,
                typedDataJson: null,
            },
        });
        if (isErrorResponse(res))
            throw res;
        return res.result;
    }
    async _eth_signTransaction(params) {
        const tx = this._prepareTransactionParams(params[0] || {});
        const relay = this.initializeRelay();
        const res = await relay.signEthereumTransaction(tx);
        if (isErrorResponse(res))
            throw res;
        return res.result;
    }
    async _eth_sendRawTransaction(params) {
        const signedTransaction = ensureBuffer(params[0]);
        const relay = this.initializeRelay();
        const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId());
        if (isErrorResponse(res))
            throw res;
        return res.result;
    }
    async _eth_sendTransaction(params) {
        const tx = this._prepareTransactionParams(params[0] || {});
        const relay = this.initializeRelay();
        const res = await relay.signAndSubmitEthereumTransaction(tx);
        if (isErrorResponse(res))
            throw res;
        return res.result;
    }
    async signTypedData(request) {
        const { method, params } = request;
        if (!Array.isArray(params))
            throw errors_standardErrors.rpc.invalidParams();
        const encode = (input) => {
            const hashFuncMap = {
                eth_signTypedData_v1: eth_eip712_util.hashForSignTypedDataLegacy,
                eth_signTypedData_v3: eth_eip712_util.hashForSignTypedData_v3,
                eth_signTypedData_v4: eth_eip712_util.hashForSignTypedData_v4,
                eth_signTypedData: eth_eip712_util.hashForSignTypedData_v4,
            };
            return hexStringFromBuffer(hashFuncMap[method]({
                data: ensureParsedJSONObject(input),
            }), true);
        };
        const address = params[method === 'eth_signTypedData_v1' ? 1 : 0];
        const rawData = params[method === 'eth_signTypedData_v1' ? 0 : 1];
        this._ensureKnownAddress(address);
        const relay = this.initializeRelay();
        const res = await relay.sendRequest({
            method: 'signEthereumMessage',
            params: {
                address: ensureAddressString(address),
                message: encode(rawData),
                typedDataJson: JSON.stringify(rawData, null, 2),
                addPrefix: false,
            },
        });
        if (isErrorResponse(res))
            throw res;
        return res.result;
    }
    initializeRelay() {
        if (!this._relay) {
            this._relay = new WalletLinkRelay({
                linkAPIUrl: WALLETLINK_URL,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
            });
        }
        return this._relay;
    }
}
//# sourceMappingURL=WalletLinkSigner.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/sign/util.js



const SIGNER_TYPE_KEY = 'SignerType';
const storage = new ScopedLocalStorage('CBWSDK', 'SignerConfigurator');
function loadSignerType() {
    return storage.getItem(SIGNER_TYPE_KEY);
}
function storeSignerType(signerType) {
    storage.setItem(SIGNER_TYPE_KEY, signerType);
}
async function fetchSignerType(params) {
    const { communicator, metadata, handshakeRequest, callback } = params;
    listenForWalletLinkSessionRequest(communicator, metadata, callback).catch(() => { });
    const request = {
        id: crypto.randomUUID(),
        event: 'selectSignerType',
        data: Object.assign(Object.assign({}, params.preference), { handshakeRequest }),
    };
    const { data } = await communicator.postRequestAndWaitForResponse(request);
    return data;
}
function createSigner(params) {
    const { signerType, metadata, communicator, callback } = params;
    switch (signerType) {
        case 'scw': {
            return new SCWSigner({
                metadata,
                callback,
                communicator,
            });
        }
        case 'walletlink': {
            return new WalletLinkSigner({
                metadata,
                callback,
            });
        }
    }
}
async function listenForWalletLinkSessionRequest(communicator, metadata, callback) {
    await communicator.onMessage(({ event }) => event === 'WalletLinkSessionRequest');
    // temporary walletlink signer instance to handle WalletLinkSessionRequest
    // will revisit this when refactoring the walletlink signer
    const walletlink = new WalletLinkSigner({
        metadata,
        callback,
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
//# sourceMappingURL=util.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/util/checkCrossOriginOpenerPolicy.js
const COOP_ERROR_MESSAGE = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`;
/**
 * Creates a checker for the Cross-Origin-Opener-Policy (COOP).
 *
 * @returns An object with methods to get and check the Cross-Origin-Opener-Policy.
 *
 * @method getCrossOriginOpenerPolicy
 * Retrieves current Cross-Origin-Opener-Policy.
 * @throws Will throw an error if the policy has not been checked yet.
 *
 * @method checkCrossOriginOpenerPolicy
 * Checks the Cross-Origin-Opener-Policy of the current environment.
 * If in a non-browser environment, sets the policy to 'non-browser-env'.
 * If in a browser environment, fetches the policy from the current origin.
 * Logs an error if the policy is 'same-origin'.
 */
const createCoopChecker = () => {
    let crossOriginOpenerPolicy;
    return {
        getCrossOriginOpenerPolicy: () => {
            if (crossOriginOpenerPolicy === undefined) {
                return 'undefined';
            }
            return crossOriginOpenerPolicy;
        },
        checkCrossOriginOpenerPolicy: async () => {
            if (typeof window === 'undefined') {
                // Non-browser environment
                crossOriginOpenerPolicy = 'non-browser-env';
                return;
            }
            try {
                const url = `${window.location.origin}${window.location.pathname}`;
                const response = await fetch(url, {
                    method: 'HEAD',
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = response.headers.get('Cross-Origin-Opener-Policy');
                crossOriginOpenerPolicy = result !== null && result !== void 0 ? result : 'null';
                if (crossOriginOpenerPolicy === 'same-origin') {
                    console.error(COOP_ERROR_MESSAGE);
                }
            }
            catch (error) {
                console.error('Error checking Cross-Origin-Opener-Policy:', error.message);
                crossOriginOpenerPolicy = 'error';
            }
        },
    };
};
const { checkCrossOriginOpenerPolicy, getCrossOriginOpenerPolicy } = createCoopChecker();
//# sourceMappingURL=checkCrossOriginOpenerPolicy.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/util/web.js



const POPUP_WIDTH = 420;
const POPUP_HEIGHT = 540;
// Window Management
function openPopup(url) {
    const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
    const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
    appendAppInfoQueryParams(url);
    const popupId = `wallet_${crypto.randomUUID()}`;
    const popup = window.open(url, popupId, `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
    popup === null || popup === void 0 ? void 0 : popup.focus();
    if (!popup) {
        throw errors_standardErrors.rpc.internal('Pop up window failed to open');
    }
    return popup;
}
function closePopup(popup) {
    if (popup && !popup.closed) {
        popup.close();
    }
}
function appendAppInfoQueryParams(url) {
    const params = {
        sdkName: NAME,
        sdkVersion: VERSION,
        origin: window.location.origin,
        coop: getCrossOriginOpenerPolicy(),
    };
    for (const [key, value] of Object.entries(params)) {
        url.searchParams.append(key, value.toString());
    }
}
//# sourceMappingURL=web.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/communicator/Communicator.js




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
    constructor({ url = CB_KEYS_URL, metadata, preference }) {
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
            // Note: keys popup handles closing itself. this is a fallback.
            closePopup(this.popup);
            this.popup = null;
            this.listeners.forEach(({ reject }, listener) => {
                reject(errors_standardErrors.provider.userRejectedRequest('Request rejected'));
                window.removeEventListener('message', listener);
            });
            this.listeners.clear();
        };
        /**
         * Waits for the popup window to fully load and then sends a version message.
         */
        this.waitForPopupLoaded = async () => {
            if (this.popup && !this.popup.closed) {
                // In case the user un-focused the popup between requests, focus it again
                this.popup.focus();
                return this.popup;
            }
            this.popup = openPopup(this.url);
            this.onMessage(({ event }) => event === 'PopupUnload')
                .then(this.disconnect)
                .catch(() => { });
            return this.onMessage(({ event }) => event === 'PopupLoaded')
                .then((message) => {
                this.postMessage({
                    requestId: message.id,
                    data: {
                        version: VERSION,
                        metadata: this.metadata,
                        preference: this.preference,
                        location: window.location.toString(),
                    },
                });
            })
                .then(() => {
                if (!this.popup)
                    throw errors_standardErrors.rpc.internal();
                return this.popup;
            });
        };
        this.url = new URL(url);
        this.metadata = metadata;
        this.preference = preference;
    }
}
//# sourceMappingURL=Communicator.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/core/error/serialize.js
// TODO: error should not depend on walletlink. revisit this.




/**
 * Serializes an error to a format that is compatible with the Ethereum JSON RPC error format.
 * See https://docs.cloud.coinbase.com/wallet-sdk/docs/errors
 * for more information.
 */
function serializeError(error) {
    const serialized = serialize(getErrorObject(error), {
        shouldIncludeStack: true,
    });
    const docUrl = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors');
    docUrl.searchParams.set('version', VERSION);
    docUrl.searchParams.set('code', serialized.code.toString());
    docUrl.searchParams.set('message', serialized.message);
    return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
}
/**
 * Converts an error to a serializable object.
 */
function getErrorObject(error) {
    var _a;
    if (typeof error === 'string') {
        return {
            message: error,
            code: standardErrorCodes.rpc.internal,
        };
    }
    else if (isErrorResponse(error)) {
        const message = error.errorMessage;
        const code = (_a = error.errorCode) !== null && _a !== void 0 ? _a : (message.match(/(denied|rejected)/i)
            ? standardErrorCodes.provider.userRejectedRequest
            : undefined);
        return Object.assign(Object.assign({}, error), { message,
            code, data: { method: error.method } });
    }
    return error;
}
//# sourceMappingURL=serialize.js.map
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.mjs
var eventemitter3 = __webpack_require__(974486);
;// ./node_modules/@coinbase/wallet-sdk/dist/core/provider/interface.js

class ProviderEventEmitter extends eventemitter3/* EventEmitter */.b {
}
//# sourceMappingURL=interface.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletProvider.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
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










class CoinbaseWalletProvider extends ProviderEventEmitter {
    constructor(_a) {
        var { metadata } = _a, _b = _a.preference, { keysUrl } = _b, preference = __rest(_b, ["keysUrl"]);
        super();
        this.signer = null;
        this.isCoinbaseWallet = true;
        this.metadata = metadata;
        this.preference = preference;
        this.communicator = new Communicator({
            url: keysUrl,
            metadata,
            preference,
        });
        const signerType = loadSignerType();
        if (signerType) {
            this.signer = this.initSigner(signerType);
        }
    }
    async request(args) {
        try {
            checkErrorForInvalidRequestArgs(args);
            if (!this.signer) {
                switch (args.method) {
                    case 'eth_requestAccounts': {
                        const signerType = await this.requestSignerSelection(args);
                        const signer = this.initSigner(signerType);
                        await signer.handshake(args);
                        this.signer = signer;
                        storeSignerType(signerType);
                        break;
                    }
                    case 'wallet_sendCalls': {
                        const ephemeralSigner = this.initSigner('scw');
                        await ephemeralSigner.handshake({ method: 'handshake' }); // exchange session keys
                        const result = await ephemeralSigner.request(args); // send diffie-hellman encrypted request
                        await ephemeralSigner.cleanup(); // clean up (rotate) the ephemeral session keys
                        return result;
                    }
                    case 'wallet_getCallsStatus':
                        return fetchRPCRequest(args, CB_WALLET_RPC_URL);
                    case 'net_version':
                        return 1; // default value
                    case 'eth_chainId':
                        return hexStringFromNumber(1); // default value
                    default: {
                        throw errors_standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
                    }
                }
            }
            return await this.signer.request(args);
        }
        catch (error) {
            const { code } = error;
            if (code === standardErrorCodes.provider.unauthorized)
                this.disconnect();
            return Promise.reject(serializeError(error));
        }
    }
    /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
    async enable() {
        console.warn(`.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.`);
        return await this.request({
            method: 'eth_requestAccounts',
        });
    }
    async disconnect() {
        var _a;
        await ((_a = this.signer) === null || _a === void 0 ? void 0 : _a.cleanup());
        this.signer = null;
        ScopedLocalStorage.clearAll();
        this.emit('disconnect', errors_standardErrors.provider.disconnected('User initiated disconnection'));
    }
    requestSignerSelection(handshakeRequest) {
        return fetchSignerType({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest,
            callback: this.emit.bind(this),
        });
    }
    initSigner(signerType) {
        return createSigner({
            signerType,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
        });
    }
}
//# sourceMappingURL=CoinbaseWalletProvider.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/util/validatePreferences.js
/**
 * Validates user supplied preferences. Throws if keys are not valid.
 * @param preference
 */
function validatePreferences(preference) {
    if (!preference) {
        return;
    }
    if (!['all', 'smartWalletOnly', 'eoaOnly'].includes(preference.options)) {
        throw new Error(`Invalid options: ${preference.options}`);
    }
    if (preference.attribution) {
        if (preference.attribution.auto !== undefined &&
            preference.attribution.dataSuffix !== undefined) {
            throw new Error(`Attribution cannot contain both auto and dataSuffix properties`);
        }
    }
}
//# sourceMappingURL=validatePreferences.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletSDK.js
// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>








/**
 * CoinbaseWalletSDK
 *
 * @deprecated CoinbaseWalletSDK is deprecated and will likely be removed in a future major version release.
 * It's recommended to use `createCoinbaseWalletSDK` instead.
 */
class CoinbaseWalletSDK {
    constructor(metadata) {
        this.metadata = {
            appName: metadata.appName || 'Dapp',
            appLogoUrl: metadata.appLogoUrl || getFavicon(),
            appChainIds: metadata.appChainIds || [],
        };
        this.storeLatestVersion();
        void checkCrossOriginOpenerPolicy();
    }
    makeWeb3Provider(preference = { options: 'all' }) {
        var _a;
        validatePreferences(preference);
        const params = { metadata: this.metadata, preference };
        return (_a = getCoinbaseInjectedProvider(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider(params);
    }
    /**
     * Official Coinbase Wallet logo for developers to use on their frontend
     * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
     * @param width Width of the logo (Optional)
     * @returns SVG Data URI
     */
    getCoinbaseWalletLogo(type, width = 240) {
        return walletLogo(type, width);
    }
    storeLatestVersion() {
        const versionStorage = new ScopedLocalStorage('CBWSDK');
        versionStorage.setItem('VERSION', VERSION);
    }
}
//# sourceMappingURL=CoinbaseWalletSDK.js.map
;// ./node_modules/@coinbase/wallet-sdk/dist/index.js
// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>

/* harmony default export */ const dist = (CoinbaseWalletSDK);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 762978:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Extracted from https://github.com/ethereumjs/ethereumjs-abi and stripped out irrelevant code
// Original code licensed under the MIT License - Copyright (c) 2015 Alex Beregszaszi

/* eslint-disable */
//prettier-ignore
const util = __webpack_require__(994548)

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
  return Number.parseInt(/^\D+(\d+)$/.exec(type)[1], 10)
}

// Parse N,M from type<N>x<M>
function parseTypeNxM (type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type)
  return [ Number.parseInt(tmp[1], 10), Number.parseInt(tmp[2], 10) ]
}

// Parse N in type[<N>] where "type" can itself be an array type.
function parseTypeArray (type) {
  var tmp = type.match(/(.*)\[(.*?)\]$/)
  if (tmp) {
    return tmp[2] === '' ? 'dynamic' : Number.parseInt(tmp[2], 10)
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

/***/ 994548:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Extracted from https://github.com/ethereumjs/ethereumjs-util and stripped out irrelevant code
// Original code licensed under the Mozilla Public License Version 2.0

/* eslint-disable */
//prettier-ignore
const { keccak_256 } = __webpack_require__(432955)

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
  if (bits !== 256) {
    throw new Error('unsupported')
  }
  return Buffer.from(keccak_256(new Uint8Array(a)))
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


/***/ })

};
;