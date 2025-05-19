"use strict";
exports.id = 7642;
exports.ids = [7642];
exports.modules = {

/***/ 407642:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ HttpRequestError),
/* harmony export */   c: () => (/* binding */ call),
/* harmony export */   d: () => (/* binding */ decodeErrorResult),
/* harmony export */   e: () => (/* binding */ encodeAbiParameters),
/* harmony export */   i: () => (/* binding */ index),
/* harmony export */   s: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(873216);


/**
 * Converts numerical wei to a string representation of ether.
 *
 * - Docs: https://viem.sh/docs/utilities/formatEther
 *
 * @example
 * import { formatEther } from 'viem'
 *
 * formatEther(1000000000000000000n)
 * // '1'
 */
function formatEther(wei, unit = 'wei') {
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.A)(wei, _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.C[unit]);
}

// created 2023-09-12T22:05:14.211Z
// compressed base64-encoded blob for include-ens data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: 0565ed049b9cf1614bb9e11ba7d8ac6a6fb96c893253d890f7e2b2884b9ded32
var COMPRESSED$1 = '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';
const FENCED = new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);
const NSM_MAX = 4;

function decode_arithmetic(bytes) {
	let pos = 0;
	function u16() { return (bytes[pos++] << 8) | bytes[pos++]; }
	
	// decode the frequency table
	let symbol_count = u16();
	let total = 1;
	let acc = [0, 1]; // first symbol has frequency 1
	for (let i = 1; i < symbol_count; i++) {
		acc.push(total += u16());
	}

	// skip the sized-payload that the last 3 symbols index into
	let skip = u16();
	let pos_payload = pos;
	pos += skip;

	let read_width = 0;
	let read_buffer = 0; 
	function read_bit() {
		if (read_width == 0) {
			// this will read beyond end of buffer
			// but (undefined|0) => zero pad
			read_buffer = (read_buffer << 8) | bytes[pos++];
			read_width = 8;
		}
		return (read_buffer >> --read_width) & 1;
	}

	const N = 31;
	const FULL = 2**N;
	const HALF = FULL >>> 1;
	const QRTR = HALF >> 1;
	const MASK = FULL - 1;

	// fill register
	let register = 0;
	for (let i = 0; i < N; i++) register = (register << 1) | read_bit();

	let symbols = [];
	let low = 0;
	let range = FULL; // treat like a float
	while (true) {
		let value = Math.floor((((register - low + 1) * total) - 1) / range);
		let start = 0;
		let end = symbol_count;
		while (end - start > 1) { // binary search
			let mid = (start + end) >>> 1;
			if (value < acc[mid]) {
				end = mid;
			} else {
				start = mid;
			}
		}
		if (start == 0) break; // first symbol is end mark
		symbols.push(start);
		let a = low + Math.floor(range * acc[start]   / total);
		let b = low + Math.floor(range * acc[start+1] / total) - 1;
		while (((a ^ b) & HALF) == 0) {
			register = (register << 1) & MASK | read_bit();
			a = (a << 1) & MASK;
			b = (b << 1) & MASK | 1;
		}
		while (a & ~b & QRTR) {
			register = (register & HALF) | ((register << 1) & (MASK >>> 1)) | read_bit();
			a = (a << 1) ^ HALF;
			b = ((b ^ HALF) << 1) | HALF | 1;
		}
		low = a;
		range = 1 + b - a;
	}
	let offset = symbol_count - 4;
	return symbols.map(x => { // index into payload
		switch (x - offset) {
			case 3: return offset + 0x10100 + ((bytes[pos_payload++] << 16) | (bytes[pos_payload++] << 8) | bytes[pos_payload++]);
			case 2: return offset + 0x100 + ((bytes[pos_payload++] << 8) | bytes[pos_payload++]);
			case 1: return offset + bytes[pos_payload++];
			default: return x - 1;
		}
	});
}	

// returns an iterator which returns the next symbol
function read_payload(v) {
	let pos = 0;
	return () => v[pos++];
}
function read_compressed_payload(s) {
	return read_payload(decode_arithmetic(unsafe_atob(s)));
}

// unsafe in the sense:
// expected well-formed Base64 w/o padding 
// 20220922: added for https://github.com/adraffy/ens-normalize.js/issues/4
function unsafe_atob(s) {
	let lookup = [];
	[...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'].forEach((c, i) => lookup[c.charCodeAt(0)] = i);
	let n = s.length;
	let ret = new Uint8Array((6 * n) >> 3);
	for (let i = 0, pos = 0, width = 0, carry = 0; i < n; i++) {
		carry = (carry << 6) | lookup[s.charCodeAt(i)];
		width += 6;
		if (width >= 8) {
			ret[pos++] = (carry >> (width -= 8));
		}
	}
	return ret;
}

// eg. [0,1,2,3...] => [0,-1,1,-2,...]
function signed(i) { 
	return (i & 1) ? (~i >> 1) : (i >> 1);
}

function read_deltas(n, next) {
	let v = Array(n);
	for (let i = 0, x = 0; i < n; i++) v[i] = x += signed(next());
	return v;
}

// [123][5] => [0 3] [1 1] [0 0]
function read_sorted(next, prev = 0) {
	let ret = [];
	while (true) {
		let x = next();
		let n = next();
		if (!n) break;
		prev += x;
		for (let i = 0; i < n; i++) {
			ret.push(prev + i);
		}
		prev += n + 1;
	}
	return ret;
}

function read_sorted_arrays(next) {
	return read_array_while(() => { 
		let v = read_sorted(next);
		if (v.length) return v;
	});
}

// returns map of x => ys
function read_mapped(next) {
	let ret = [];
	while (true) {
		let w = next();
		if (w == 0) break;
		ret.push(read_linear_table(w, next));
	}
	while (true) {
		let w = next() - 1;
		if (w < 0) break;
		ret.push(read_replacement_table(w, next));
	}
	return ret.flat();
}

// read until next is falsy
// return array of read values
function read_array_while(next) {
	let v = [];
	while (true) {
		let x = next(v.length);
		if (!x) break;
		v.push(x);
	}
	return v;
}

// read w columns of length n
// return as n rows of length w
function read_transposed(n, w, next) {
	let m = Array(n).fill().map(() => []);
	for (let i = 0; i < w; i++) {
		read_deltas(n, next).forEach((x, j) => m[j].push(x));
	}
	return m;
}
 
// returns [[x, ys], [x+dx, ys+dy], [x+2*dx, ys+2*dy], ...]
// where dx/dy = steps, n = run size, w = length of y
function read_linear_table(w, next) {
	let dx = 1 + next();
	let dy = next();
	let vN = read_array_while(next);
	let m = read_transposed(vN.length, 1+w, next);
	return m.flatMap((v, i) => {
		let [x, ...ys] = v;
		return Array(vN[i]).fill().map((_, j) => {
			let j_dy = j * dy;
			return [x + j * dx, ys.map(y => y + j_dy)];
		});
	});
}

// return [[x, ys...], ...]
// where w = length of y
function read_replacement_table(w, next) { 
	let n = 1 + next();
	let m = read_transposed(n, 1+w, next);
	return m.map(v => [v[0], v.slice(1)]);
}


function read_trie(next) {
	let ret = [];
	let sorted = read_sorted(next); 
	expand(decode([]), []);
	return ret; // not sorted
	function decode(Q) { // characters that lead into this node
		let S = next(); // state: valid, save, check
		let B = read_array_while(() => { // buckets leading to new nodes
			let cps = read_sorted(next).map(i => sorted[i]);
			if (cps.length) return decode(cps);
		});
		return {S, B, Q};
	}
	function expand({S, B}, cps, saved) {
		if (S & 4 && saved === cps[cps.length-1]) return;
		if (S & 2) saved = cps[cps.length-1];
		if (S & 1) ret.push(cps); 
		for (let br of B) {
			for (let cp of br.Q) {
				expand(br, [...cps, cp], saved);
			}
		}
	}
}

function hex_cp(cp) {
	return cp.toString(16).toUpperCase().padStart(2, '0');
}

function quote_cp(cp) {
	return `{${hex_cp(cp)}}`; // raffy convention: like "\u{X}" w/o the "\u"
}

/*
export function explode_cp(s) {
	return [...s].map(c => c.codePointAt(0));
}
*/
function explode_cp(s) { // this is about 2x faster
	let cps = [];
	for (let pos = 0, len = s.length; pos < len; ) {
		let cp = s.codePointAt(pos);
		pos += cp < 0x10000 ? 1 : 2;
		cps.push(cp);
	}
	return cps;
}

function str_from_cps(cps) {
	const chunk = 4096;
	let len = cps.length;
	if (len < chunk) return String.fromCodePoint(...cps);
	let buf = [];
	for (let i = 0; i < len; ) {
		buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
	}
	return buf.join('');
}

function compare_arrays(a, b) {
	let n = a.length;
	let c = n - b.length;
	for (let i = 0; c == 0 && i < n; i++) c = a[i] - b[i];
	return c;
}

// created 2023-09-12T22:05:14.211Z
// compressed base64-encoded blob for include-nf data
// source: https://github.com/adraffy/ens-normalize.js/blob/main/src/make.js
// see: https://github.com/adraffy/ens-normalize.js#security
// SHA-256: a974b6f8541fc29d919bc85118af0a44015851fab5343f8679cb31be2bdb209e
var COMPRESSED = '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';

// https://unicode.org/reports/tr15/
// for reference implementation
// see: /derive/nf.js


// algorithmic hangul
// https://www.unicode.org/versions/Unicode15.0.0/ch03.pdf (page 144)
const S0 = 0xAC00;
const L0 = 0x1100;
const V0 = 0x1161;
const T0 = 0x11A7;
const L_COUNT = 19;
const V_COUNT = 21;
const T_COUNT = 28;
const N_COUNT = V_COUNT * T_COUNT;
const S_COUNT = L_COUNT * N_COUNT;
const S1 = S0 + S_COUNT;
const L1 = L0 + L_COUNT;
const V1 = V0 + V_COUNT;
const T1 = T0 + T_COUNT;

function unpack_cc(packed) {
	return (packed >> 24) & 0xFF;
}
function unpack_cp(packed) {
	return packed & 0xFFFFFF;
}

let SHIFTED_RANK, EXCLUSIONS, DECOMP, RECOMP;

function init$1() {
	//console.time('nf');
	let r = read_compressed_payload(COMPRESSED);
	SHIFTED_RANK = new Map(read_sorted_arrays(r).flatMap((v, i) => v.map(x => [x, (i+1) << 24]))); // pre-shifted
	EXCLUSIONS = new Set(read_sorted(r));
	DECOMP = new Map();
	RECOMP = new Map();
	for (let [cp, cps] of read_mapped(r)) {
		if (!EXCLUSIONS.has(cp) && cps.length == 2) {
			let [a, b] = cps;
			let bucket = RECOMP.get(a);
			if (!bucket) {
				bucket = new Map();
				RECOMP.set(a, bucket);
			}
			bucket.set(b, cp);
		}
		DECOMP.set(cp, cps.reverse()); // stored reversed
	}
	//console.timeEnd('nf');
	// 20230905: 11ms
}

function is_hangul(cp) {
	return cp >= S0 && cp < S1;
}

function compose_pair(a, b) {
	if (a >= L0 && a < L1 && b >= V0 && b < V1) {
		return S0 + (a - L0) * N_COUNT + (b - V0) * T_COUNT;
	} else if (is_hangul(a) && b > T0 && b < T1 && (a - S0) % T_COUNT == 0) {
		return a + (b - T0);
	} else {
		let recomp = RECOMP.get(a);
		if (recomp) {
			recomp = recomp.get(b);
			if (recomp) {
				return recomp;
			}
		}
		return -1;
	}
}

function decomposed(cps) {
	if (!SHIFTED_RANK) init$1();
	let ret = [];
	let buf = [];
	let check_order = false;
	function add(cp) {
		let cc = SHIFTED_RANK.get(cp);
		if (cc) {
			check_order = true;
			cp |= cc;
		}
		ret.push(cp);
	}
	for (let cp of cps) {
		while (true) {
			if (cp < 0x80) {
				ret.push(cp);
			} else if (is_hangul(cp)) {
				let s_index = cp - S0;
				let l_index = s_index / N_COUNT | 0;
				let v_index = (s_index % N_COUNT) / T_COUNT | 0;
				let t_index = s_index % T_COUNT;
				add(L0 + l_index);
				add(V0 + v_index);
				if (t_index > 0) add(T0 + t_index);
			} else {
				let mapped = DECOMP.get(cp);
				if (mapped) {
					buf.push(...mapped);
				} else {
					add(cp);
				}
			}
			if (!buf.length) break;
			cp = buf.pop();
		}
	}
	if (check_order && ret.length > 1) {
		let prev_cc = unpack_cc(ret[0]);
		for (let i = 1; i < ret.length; i++) {
			let cc = unpack_cc(ret[i]);
			if (cc == 0 || prev_cc <= cc) {
				prev_cc = cc;
				continue;
			}
			let j = i-1;
			while (true) {
				let tmp = ret[j+1];
				ret[j+1] = ret[j];
				ret[j] = tmp;
				if (!j) break;
				prev_cc = unpack_cc(ret[--j]);
				if (prev_cc <= cc) break;
			}
			prev_cc = unpack_cc(ret[i]);
		}
	}
	return ret;
}

function composed_from_decomposed(v) {
	let ret = [];
	let stack = [];
	let prev_cp = -1;
	let prev_cc = 0;
	for (let packed of v) {
		let cc = unpack_cc(packed);
		let cp = unpack_cp(packed);
		if (prev_cp == -1) {
			if (cc == 0) {
				prev_cp = cp;
			} else {
				ret.push(cp);
			}
		} else if (prev_cc > 0 && prev_cc >= cc) {
			if (cc == 0) {
				ret.push(prev_cp, ...stack);
				stack.length = 0;
				prev_cp = cp;
			} else {
				stack.push(cp);
			}
			prev_cc = cc;
		} else {
			let composed = compose_pair(prev_cp, cp);
			if (composed >= 0) {
				prev_cp = composed;
			} else if (prev_cc == 0 && cc == 0) {
				ret.push(prev_cp);
				prev_cp = cp;
			} else {
				stack.push(cp);
				prev_cc = cc;
			}
		}
	}
	if (prev_cp >= 0) {
		ret.push(prev_cp, ...stack);	
	}
	return ret;
}

// note: cps can be iterable
function nfd(cps) {
	return decomposed(cps).map(unpack_cp);
}
function nfc(cps) {
	return composed_from_decomposed(decomposed(cps));
}

const HYPHEN = 0x2D;
const STOP_CH = '.';
const FE0F = 0xFE0F;
const UNIQUE_PH = 1;

// 20230913: replace [...v] with Array_from(v) to avoid large spreads
const Array_from = x => Array.from(x); // Array.from.bind(Array);

function group_has_cp(g, cp) {
	// 20230913: keep primary and secondary distinct instead of creating valid union
	return g.P.has(cp) || g.Q.has(cp);
}

class Emoji extends Array {
	get is_emoji() { return true; } // free tagging system
}

let MAPPED, IGNORED, CM, NSM, ESCAPE, GROUPS, WHOLE_VALID, WHOLE_MAP, VALID, EMOJI_LIST, EMOJI_ROOT;

function init() {
	if (MAPPED) return;
	
	let r = read_compressed_payload(COMPRESSED$1);
	const read_sorted_array = () => read_sorted(r);
	const read_sorted_set = () => new Set(read_sorted_array());

	MAPPED = new Map(read_mapped(r)); 
	IGNORED = read_sorted_set(); // ignored characters are not valid, so just read raw codepoints

	/*
	// direct include from payload is smaller than the decompression code
	const FENCED = new Map(read_array_while(() => {
		let cp = r();
		if (cp) return [cp, read_str(r())];
	}));
	*/
	// 20230217: we still need all CM for proper error formatting
	// but norm only needs NSM subset that are potentially-valid
	CM = read_sorted_array();
	NSM = new Set(read_sorted_array().map(i => CM[i]));
	CM = new Set(CM);
	
	ESCAPE = read_sorted_set(); // characters that should not be printed
	read_sorted_set(); // only needed to illustrate ens_tokenize() transformations

	let chunks = read_sorted_arrays(r);
	let unrestricted = r();
	const read_chunked = () => new Set(read_sorted_array().flatMap(i => chunks[i]).concat(read_sorted_array()));
	GROUPS = read_array_while(i => {
		// minifier property mangling seems unsafe
		// so these are manually renamed to single chars
		let N = read_array_while(r).map(x => x+0x60);
		if (N.length) {
			let R = i >= unrestricted; // first arent restricted
			N[0] -= 32; // capitalize
			N = str_from_cps(N);
			if (R) N=`Restricted[${N}]`;
			let P = read_chunked(); // primary
			let Q = read_chunked(); // secondary
			let M = !r(); // not-whitelisted, check for NSM
			// *** this code currently isn't needed ***
			/*
			let V = [...P, ...Q].sort((a, b) => a-b); // derive: sorted valid
			let M = r()-1; // number of combining mark
			if (M < 0) { // whitelisted
				M = new Map(read_array_while(() => {
					let i = r();
					if (i) return [V[i-1], read_array_while(() => {
						let v = read_array_while(r);
						if (v.length) return v.map(x => x-1);
					})];
				}));
			}*/
			return {N, P, Q, M, R};
		}
	});

	// decode compressed wholes
	WHOLE_VALID = read_sorted_set();
	WHOLE_MAP = new Map();
	let wholes = read_sorted_array().concat(Array_from(WHOLE_VALID)).sort((a, b) => a-b); // must be sorted
	wholes.forEach((cp, i) => {
		let d = r(); 
		let w = wholes[i] = d ? wholes[i-d] : {V: [], M: new Map()};
		w.V.push(cp); // add to member set
		if (!WHOLE_VALID.has(cp)) {
			WHOLE_MAP.set(cp, w);  // register with whole map
		}
	});

	// compute confusable-extent complements
	for (let {V, M} of new Set(WHOLE_MAP.values())) {
		// connect all groups that have each whole character
		let recs = [];
		for (let cp of V) {
			let gs = GROUPS.filter(g => group_has_cp(g, cp));
			let rec = recs.find(({G}) => gs.some(g => G.has(g)));
			if (!rec) {
				rec = {G: new Set(), V: []};
				recs.push(rec);
			}
			rec.V.push(cp);
			gs.forEach(g => rec.G.add(g));
		}
		// per character cache groups which are not a member of the extent
		let union = recs.flatMap(x => Array_from(x.G));
		for (let {G, V} of recs) {
			let complement = new Set(union.filter(g => !G.has(g)));
			for (let cp of V) {
				M.set(cp, complement);
			}
		}
	}

	// compute valid set
	let union = new Set(); // exists in 1+ groups
	let multi = new Set(); // exists in 2+ groups
	const add_to_union = cp => union.has(cp) ? multi.add(cp) : union.add(cp);
	for (let g of GROUPS) {
		for (let cp of g.P) add_to_union(cp);
		for (let cp of g.Q) add_to_union(cp);
	}
	// dual purpose WHOLE_MAP: return placeholder if unique non-confusable
	for (let cp of union) {
		if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
			WHOLE_MAP.set(cp, UNIQUE_PH);
		}
	}
	VALID = new Set(Array_from(union).concat(Array_from(nfd(union)))); // possibly valid

	// decode emoji
	// 20230719: emoji are now fully-expanded to avoid quirk logic 
	EMOJI_LIST = read_trie(r).map(v => Emoji.from(v)).sort(compare_arrays);
	EMOJI_ROOT = new Map(); // this has approx 7K nodes (2+ per emoji)
	for (let cps of EMOJI_LIST) {
		// 20230719: change to *slightly* stricter algorithm which disallows 
		// insertion of misplaced FE0F in emoji sequences (matching ENSIP-15)
		// example: beautified [A B] (eg. flag emoji) 
		//  before: allow: [A FE0F B], error: [A FE0F FE0F B] 
		//   after: error: both
		// note: this code now matches ENSNormalize.{cs,java} logic
		let prev = [EMOJI_ROOT];
		for (let cp of cps) {
			let next = prev.map(node => {
				let child = node.get(cp);
				if (!child) {
					// should this be object? 
					// (most have 1-2 items, few have many)
					// 20230719: no, v8 default map is 4?
					child = new Map();
					node.set(cp, child);
				}
				return child;
			});
			if (cp === FE0F) {
				prev.push(...next); // less than 20 elements
			} else {
				prev = next;
			}
		}
		for (let x of prev) {
			x.V = cps;
		}
	}
}

// if escaped: {HEX}
//       else: "x" {HEX}
function quoted_cp(cp) {
	return (should_escape(cp) ? '' : `${bidi_qq(safe_str_from_cps([cp]))} `) + quote_cp(cp);
}

// 20230211: some messages can be mixed-directional and result in spillover
// use 200E after a quoted string to force the remainder of a string from 
// acquring the direction of the quote
// https://www.w3.org/International/questions/qa-bidi-unicode-controls#exceptions
function bidi_qq(s) {
	return `"${s}"\u200E`; // strong LTR
}

function check_label_extension(cps) {
	if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
		throw new Error(`invalid label extension: "${str_from_cps(cps.slice(0, 4))}"`);
	}
}
function check_leading_underscore(cps) {
	const UNDERSCORE = 0x5F;
	for (let i = cps.lastIndexOf(UNDERSCORE); i > 0; ) {
		if (cps[--i] !== UNDERSCORE) {
			throw new Error('underscore allowed only at start');
		}
	}
}
// check that a fenced cp is not leading, trailing, or touching another fenced cp
function check_fenced(cps) {
	let cp = cps[0];
	let prev = FENCED.get(cp);
	if (prev) throw error_placement(`leading ${prev}`);
	let n = cps.length;
	let last = -1; // prevents trailing from throwing
	for (let i = 1; i < n; i++) {
		cp = cps[i];
		let match = FENCED.get(cp);
		if (match) {
			// since cps[0] isn't fenced, cps[1] cannot throw
			if (last == i) throw error_placement(`${prev} + ${match}`);
			last = i + 1;
			prev = match;
		}
	}
	if (last == n) throw error_placement(`trailing ${prev}`);
}

// create a safe to print string 
// invisibles are escaped
// leading cm uses placeholder
// quoter(cp) => string, eg. 3000 => "{3000}"
// note: in html, you'd call this function then replace [<>&] with entities
function safe_str_from_cps(cps, quoter = quote_cp) {
	//if (Number.isInteger(cps)) cps = [cps];
	//if (!Array.isArray(cps)) throw new TypeError(`expected codepoints`);
	let buf = [];
	if (is_combining_mark(cps[0])) buf.push('◌');
	let prev = 0;
	let n = cps.length;
	for (let i = 0; i < n; i++) {
		let cp = cps[i];
		if (should_escape(cp)) {
			buf.push(str_from_cps(cps.slice(prev, i)));
			buf.push(quoter(cp));
			prev = i + 1;
		}
	}
	buf.push(str_from_cps(cps.slice(prev, n)));
	return buf.join('');
}

// note: set(s) cannot be exposed because they can be modified
// note: Object.freeze() doesn't work
function is_combining_mark(cp) {
	init();
	return CM.has(cp);
}
function should_escape(cp) {
	init();
	return ESCAPE.has(cp);
}

function ens_normalize(name) {
	return flatten(split(name, nfc, filter_fe0f));
}

function split(name, nf, ef) {
	if (!name) return []; // 20230719: empty name allowance
	init();
	let offset = 0;
	// https://unicode.org/reports/tr46/#Validity_Criteria
	// 4.) "The label must not contain a U+002E ( . ) FULL STOP."
	return name.split(STOP_CH).map(label => {
		let input = explode_cp(label);
		let info = {
			input,
			offset, // codepoint, not substring!
		};
		offset += input.length + 1; // + stop
		try {
			// 1.) "The label must be in Unicode Normalization Form NFC"
			let tokens = info.tokens = tokens_from_str(input, nf, ef);
			let token_count = tokens.length;
			let type;
			if (!token_count) { // the label was effectively empty (could of had ignored characters)
				//norm = [];
				//type = 'None'; // use this instead of next match, "ASCII"
				// 20230120: change to strict
				// https://discuss.ens.domains/t/ens-name-normalization-2nd/14564/59
				throw new Error(`empty label`);
			} 
			let norm = info.output = tokens.flat();
			check_leading_underscore(norm);
			let emoji = info.emoji = token_count > 1 || tokens[0].is_emoji; // same as: tokens.some(x => x.is_emoji);
			if (!emoji && norm.every(cp => cp < 0x80)) { // special case for ascii
				// 20230123: matches matches WHATWG, see note 3.3
				check_label_extension(norm); // only needed for ascii
				// cant have fenced
				// cant have cm
				// cant have wholes
				// see derive: "Fastpath ASCII"
				type = 'ASCII';
			} else {
				let chars = tokens.flatMap(x => x.is_emoji ? [] : x); // all of the nfc tokens concat together
				if (!chars.length) { // theres no text, just emoji
					type = 'Emoji';
				} else {
					// 5.) "The label must not begin with a combining mark, that is: General_Category=Mark."
					if (CM.has(norm[0])) throw error_placement('leading combining mark');
					for (let i = 1; i < token_count; i++) { // we've already checked the first token
						let cps = tokens[i];
						if (!cps.is_emoji && CM.has(cps[0])) { // every text token has emoji neighbors, eg. EtEEEtEt...
							// bidi_qq() not needed since emoji is LTR and cps is a CM
							throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i-1])} + ${safe_str_from_cps([cps[0]])}"`); 
						}
					}
					check_fenced(norm);
					let unique = Array_from(new Set(chars));
					let [g] = determine_group(unique); // take the first match
					// see derive: "Matching Groups have Same CM Style"
					// alternative: could form a hybrid type: Latin/Japanese/...	
					check_group(g, chars); // need text in order
					check_whole(g, unique); // only need unique text (order would be required for multiple-char confusables)
					type = g.N;
					// 20230121: consider exposing restricted flag
					// it's simpler to just check for 'Restricted'
					// or even better: type.endsWith(']')
					//if (g.R) info.restricted = true;
				}
			}
			info.type = type;
		} catch (err) {
			info.error = err; // use full error object
		}
		return info;
	});
}

function check_whole(group, unique) {
	let maker;
	let shared = [];
	for (let cp of unique) {
		let whole = WHOLE_MAP.get(cp);
		if (whole === UNIQUE_PH) return; // unique, non-confusable
		if (whole) {
			let set = whole.M.get(cp); // groups which have a character that look-like this character
			maker = maker ? maker.filter(g => set.has(g)) : Array_from(set);
			if (!maker.length) return; // confusable intersection is empty
		} else {
			shared.push(cp); 
		}
	}
	if (maker) {
		// we have 1+ confusable
		// check if any of the remaining groups
		// contain the shared characters too
		for (let g of maker) {
			if (shared.every(cp => group_has_cp(g, cp))) {
				throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
			}
		}
	}
}

// assumption: unique.size > 0
// returns list of matching groups
function determine_group(unique) {
	let groups = GROUPS;
	for (let cp of unique) {
		// note: we need to dodge CM that are whitelisted
		// but that code isn't currently necessary
		let gs = groups.filter(g => group_has_cp(g, cp));
		if (!gs.length) {
			if (!GROUPS.some(g => group_has_cp(g, cp))) { 
				// the character was composed of valid parts
				// but it's NFC form is invalid
				// 20230716: change to more exact statement, see: ENSNormalize.{cs,java}
				// note: this doesn't have to be a composition
				// 20230720: change to full check
				throw error_disallowed(cp); // this should be rare
			} else {
				// there is no group that contains all these characters
				// throw using the highest priority group that matched
				// https://www.unicode.org/reports/tr39/#mixed_script_confusables
				throw error_group_member(groups[0], cp);
			}
		}
		groups = gs;
		if (gs.length == 1) break; // there is only one group left
	}
	// there are at least 1 group(s) with all of these characters
	return groups;
}

// throw on first error
function flatten(split) {
	return split.map(({input, error, output}) => {
		if (error) {
			// don't print label again if just a single label
			let msg = error.message;
			// bidi_qq() only necessary if msg is digits
			throw new Error(split.length == 1 ? msg : `Invalid label ${bidi_qq(safe_str_from_cps(input))}: ${msg}`); 
		}
		return str_from_cps(output);
	}).join(STOP_CH);
}

function error_disallowed(cp) {
	// TODO: add cp to error?
	return new Error(`disallowed character: ${quoted_cp(cp)}`); 
}
function error_group_member(g, cp) {
	let quoted = quoted_cp(cp);
	let gg = GROUPS.find(g => g.P.has(cp)); // only check primary
	if (gg) {
		quoted = `${gg.N} ${quoted}`;
	}
	return new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
	return new Error(`illegal placement: ${where}`);
}

// assumption: cps.length > 0
// assumption: cps[0] isn't a CM
// assumption: the previous character isn't an emoji
function check_group(g, cps) {
	for (let cp of cps) {
		if (!group_has_cp(g, cp)) {
			// for whitelisted scripts, this will throw illegal mixture on invalid cm, eg. "e{300}{300}"
			// at the moment, it's unnecessary to introduce an extra error type
			// until there exists a whitelisted multi-character
			//   eg. if (M < 0 && is_combining_mark(cp)) { ... }
			// there are 3 cases:
			//   1. illegal cm for wrong group => mixture error
			//   2. illegal cm for same group => cm error
			//       requires set of whitelist cm per group: 
			//        eg. new Set([...g.P, ...g.Q].flatMap(nfc).filter(cp => CM.has(cp)))
			//   3. wrong group => mixture error
			throw error_group_member(g, cp);
		}
	}
	//if (M >= 0) { // we have a known fixed cm count
	if (g.M) { // we need to check for NSM
		let decomposed = nfd(cps);
		for (let i = 1, e = decomposed.length; i < e; i++) { // see: assumption
			// 20230210: bugfix: using cps instead of decomposed h/t Carbon225
			/*
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: ${g.N} ${bidi_qq(str_from_cps(decomposed.slice(i-1, j)))} (${j-i}/${M})`);
				}
				i = j;
			}
			*/
			// 20230217: switch to NSM counting
			// https://www.unicode.org/reports/tr39/#Optional_Detection
			if (NSM.has(decomposed[i])) {
				let j = i + 1;
				for (let cp; j < e && NSM.has(cp = decomposed[j]); j++) {
					// a. Forbid sequences of the same nonspacing mark.
					for (let k = i; k < j; k++) { // O(n^2) but n < 100
						if (decomposed[k] == cp) {
							throw new Error(`duplicate non-spacing marks: ${quoted_cp(cp)}`);
						}
					}
				}
				// parse to end so we have full nsm count
				// b. Forbid sequences of more than 4 nonspacing marks (gc=Mn or gc=Me).
				if (j - i > NSM_MAX) {
					// note: this slice starts with a base char or spacing-mark cm
					throw new Error(`excessive non-spacing marks: ${bidi_qq(safe_str_from_cps(decomposed.slice(i-1, j)))} (${j-i}/${NSM_MAX})`);
				}
				i = j;
			}
		}
	}
	// *** this code currently isn't needed ***
	/*
	let cm_whitelist = M instanceof Map;
	for (let i = 0, e = cps.length; i < e; ) {
		let cp = cps[i++];
		let seqs = cm_whitelist && M.get(cp);
		if (seqs) { 
			// list of codepoints that can follow
			// if this exists, this will always be 1+
			let j = i;
			while (j < e && CM.has(cps[j])) j++;
			let cms = cps.slice(i, j);
			let match = seqs.find(seq => !compare_arrays(seq, cms));
			if (!match) throw new Error(`disallowed combining mark sequence: "${safe_str_from_cps([cp, ...cms])}"`);
			i = j;
		} else if (!V.has(cp)) {
			// https://www.unicode.org/reports/tr39/#mixed_script_confusables
			let quoted = quoted_cp(cp);
			for (let cp of cps) {
				let u = UNIQUE.get(cp);
				if (u && u !== g) {
					// if both scripts are restricted this error is confusing
					// because we don't differentiate RestrictedA from RestrictedB 
					if (!u.R) quoted = `${quoted} is ${u.N}`;
					break;
				}
			}
			throw new Error(`disallowed ${g.N} character: ${quoted}`);
			//throw new Error(`disallowed character: ${quoted} (expected ${g.N})`);
			//throw new Error(`${g.N} does not allow: ${quoted}`);
		}
	}
	if (!cm_whitelist) {
		let decomposed = nfd(cps);
		for (let i = 1, e = decomposed.length; i < e; i++) { // we know it can't be cm leading
			if (CM.has(decomposed[i])) {
				let j = i + 1;
				while (j < e && CM.has(decomposed[j])) j++;
				if (j - i > M) {
					throw new Error(`too many combining marks: "${str_from_cps(decomposed.slice(i-1, j))}" (${j-i}/${M})`);
				}
				i = j;
			}
		}
	}
	*/
}

// given a list of codepoints
// returns a list of lists, where emoji are a fully-qualified (as Array subclass)
// eg. explode_cp("abc💩d") => [[61, 62, 63], Emoji[1F4A9, FE0F], [64]]
// 20230818: rename for 'process' name collision h/t Javarome
// https://github.com/adraffy/ens-normalize.js/issues/23
function tokens_from_str(input, nf, ef) {
	let ret = [];
	let chars = [];
	input = input.slice().reverse(); // flip so we can pop
	while (input.length) {
		let emoji = consume_emoji_reversed(input);
		if (emoji) {
			if (chars.length) {
				ret.push(nf(chars));
				chars = [];
			}
			ret.push(ef(emoji));
		} else {
			let cp = input.pop();
			if (VALID.has(cp)) {
				chars.push(cp);
			} else {
				let cps = MAPPED.get(cp);
				if (cps) {
					chars.push(...cps); // less than 10 elements
				} else if (!IGNORED.has(cp)) {
					// 20230912: unicode 15.1 changed the order of processing such that
					// disallowed parts are only rejected after NFC
					// https://unicode.org/reports/tr46/#Validity_Criteria
					// this doesn't impact normalization as of today
					// technically, this error can be removed as the group logic will apply similar logic
					// however the error type might be less clear
					throw error_disallowed(cp);
				}
			}
		}
	}
	if (chars.length) {
		ret.push(nf(chars));
	}
	return ret;
}

function filter_fe0f(cps) {
	return cps.filter(cp => cp != FE0F);
}

// given array of codepoints
// returns the longest valid emoji sequence (or undefined if no match)
// *MUTATES* the supplied array
// disallows interleaved ignored characters
// fills (optional) eaten array with matched codepoints
function consume_emoji_reversed(cps, eaten) {
	let node = EMOJI_ROOT;
	let emoji;
	let pos = cps.length;
	while (pos) {
		node = node.get(cps[--pos]);
		if (!node) break;
		let {V} = node;
		if (V) { // this is a valid emoji (so far)
			emoji = V;
			if (eaten) eaten.push(...cps.slice(pos).reverse()); // (optional) copy input, used for ens_tokenize()
			cps.length = pos; // truncate
		}
	}
	return emoji;
}

/**
 * @description Normalizes ENS name according to ENSIP-15.
 *
 * @example
 * normalize('wevm.eth')
 * 'wevm.eth'
 *
 * @see https://docs.ens.domains/contract-api-reference/name-processing#normalising-names
 * @see https://github.com/ensdomains/docs/blob/9edf9443de4333a0ea7ec658a870672d5d180d53/ens-improvement-proposals/ensip-15-normalization-standard.md
 */
function normalize(name) {
    return ens_normalize(name);
}

/* [Multicall3](https://github.com/mds1/multicall) */
const multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'allowFailure',
                        type: 'bool',
                    },
                    {
                        name: 'callData',
                        type: 'bytes',
                    },
                ],
                name: 'calls',
                type: 'tuple[]',
            },
        ],
        name: 'aggregate3',
        outputs: [
            {
                components: [
                    {
                        name: 'success',
                        type: 'bool',
                    },
                    {
                        name: 'returnData',
                        type: 'bytes',
                    },
                ],
                name: 'returnData',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
const universalResolverErrors = [
    {
        inputs: [],
        name: 'ResolverNotFound',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ResolverWildcardNotSupported',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ResolverNotContract',
        type: 'error',
    },
    {
        inputs: [
            {
                name: 'returnData',
                type: 'bytes',
            },
        ],
        name: 'ResolverError',
        type: 'error',
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'status',
                        type: 'uint16',
                    },
                    {
                        name: 'message',
                        type: 'string',
                    },
                ],
                name: 'errors',
                type: 'tuple[]',
            },
        ],
        name: 'HttpError',
        type: 'error',
    },
];
const universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes' },
            { name: 'data', type: 'bytes' },
        ],
        outputs: [
            { name: '', type: 'bytes' },
            { name: 'address', type: 'address' },
        ],
    },
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes' },
            { name: 'data', type: 'bytes' },
            { name: 'gateways', type: 'string[]' },
        ],
        outputs: [
            { name: '', type: 'bytes' },
            { name: 'address', type: 'address' },
        ],
    },
];
const universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ type: 'bytes', name: 'reverseName' }],
        outputs: [
            { type: 'string', name: 'resolvedName' },
            { type: 'address', name: 'resolvedAddress' },
            { type: 'address', name: 'reverseResolver' },
            { type: 'address', name: 'resolver' },
        ],
    },
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { type: 'bytes', name: 'reverseName' },
            { type: 'string[]', name: 'gateways' },
        ],
        outputs: [
            { type: 'string', name: 'resolvedName' },
            { type: 'address', name: 'resolvedAddress' },
            { type: 'address', name: 'reverseResolver' },
            { type: 'address', name: 'resolver' },
        ],
    },
];
const textResolverAbi = [
    {
        name: 'text',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes32' },
            { name: 'key', type: 'string' },
        ],
        outputs: [{ name: '', type: 'string' }],
    },
];
const addressResolverAbi = [
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ name: 'name', type: 'bytes32' }],
        outputs: [{ name: '', type: 'address' }],
    },
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            { name: 'name', type: 'bytes32' },
            { name: 'coinType', type: 'uint256' },
        ],
        outputs: [{ name: '', type: 'bytes' }],
    },
];

function formatAbiItem$1(abiItem, { includeName = false } = {}) {
    if (abiItem.type !== 'function' &&
        abiItem.type !== 'event' &&
        abiItem.type !== 'error')
        throw new InvalidDefinitionTypeError(abiItem.type);
    return `${abiItem.name}(${formatAbiParams(abiItem.inputs, { includeName })})`;
}
function formatAbiParams(params, { includeName = false } = {}) {
    if (!params)
        return '';
    return params
        .map((param) => formatAbiParam(param, { includeName }))
        .join(includeName ? ', ' : ',');
}
function formatAbiParam(param, { includeName }) {
    if (param.type.startsWith('tuple')) {
        return `(${formatAbiParams(param.components, { includeName })})${param.type.slice('tuple'.length)}`;
    }
    return param.type + (includeName && param.name ? ` ${param.name}` : '');
}

class AbiDecodingDataSizeTooSmallError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ data, params, size, }) {
        super([`Data size of ${size} bytes is too small for given parameters.`].join('\n'), {
            metaMessages: [
                `Params: (${formatAbiParams(params, { includeName: true })})`,
                `Data:   ${data} (${size} bytes)`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingDataSizeTooSmallError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
        this.params = params;
        this.size = size;
    }
}
class AbiDecodingZeroDataError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiDecodingZeroDataError'
        });
    }
}
class AbiEncodingArrayLengthMismatchError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ expectedLength, givenLength, type, }) {
        super([
            `ABI encoding array length mismatch for type ${type}.`,
            `Expected length: ${expectedLength}`,
            `Given length: ${givenLength}`,
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingArrayLengthMismatchError'
        });
    }
}
class AbiEncodingBytesSizeMismatchError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ expectedSize, value }) {
        super(`Size of bytes "${value}" (bytes${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingBytesSizeMismatchError'
        });
    }
}
class AbiEncodingLengthMismatchError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ expectedLength, givenLength, }) {
        super([
            'ABI encoding params/values length mismatch.',
            `Expected length (params): ${expectedLength}`,
            `Given length (values): ${givenLength}`,
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiEncodingLengthMismatchError'
        });
    }
}
class AbiErrorSignatureNotFoundError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(signature, { docsPath }) {
        super([
            `Encoded error signature "${signature}" not found on ABI.`,
            'Make sure you are using the correct ABI and that the error exists on it.',
            `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiErrorSignatureNotFoundError'
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.signature = signature;
    }
}
class AbiFunctionNotFoundError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(functionName, { docsPath } = {}) {
        super([
            `Function ${functionName ? `"${functionName}" ` : ''}not found on ABI.`,
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionNotFoundError'
        });
    }
}
class AbiFunctionOutputsNotFoundError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(functionName, { docsPath }) {
        super([
            `Function "${functionName}" does not contain any \`outputs\` on ABI.`,
            'Cannot decode function result without knowing what the parameter types are.',
            'Make sure you are using the correct ABI and that the function exists on it.',
        ].join('\n'), {
            docsPath,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiFunctionOutputsNotFoundError'
        });
    }
}
class AbiItemAmbiguityError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(x, y) {
        super('Found ambiguous types in overloaded ABI items.', {
            metaMessages: [
                `\`${x.type}\` in \`${formatAbiItem$1(x.abiItem)}\`, and`,
                `\`${y.type}\` in \`${formatAbiItem$1(y.abiItem)}\``,
                '',
                'These types encode differently and cannot be distinguished at runtime.',
                'Remove one of the ambiguous items in the ABI.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiItemAmbiguityError'
        });
    }
}
class InvalidAbiEncodingTypeError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid encoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiEncodingType'
        });
    }
}
class InvalidAbiDecodingTypeError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(type, { docsPath }) {
        super([
            `Type "${type}" is not a valid decoding type.`,
            'Please provide a valid ABI type.',
        ].join('\n'), { docsPath });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiDecodingType'
        });
    }
}
class InvalidArrayError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(value) {
        super([`Value "${value}" is not a valid array.`].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidArrayError'
        });
    }
}
class InvalidDefinitionTypeError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(type) {
        super([
            `"${type}" is not a valid definition type.`,
            'Valid types: "function", "event", "error"',
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidDefinitionTypeError'
        });
    }
}

/**
 * Decodes a byte array into a bigint.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobigint
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns BigInt value.
 *
 * @example
 * import { bytesToBigInt } from 'viem'
 * const data = bytesToBigInt(new Uint8Array([1, 164]))
 * // 420n
 */
function bytesToBigInt(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined')
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.D)(bytes, { size: opts.size });
    const hex = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(bytes, opts);
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a)(hex, opts);
}
/**
 * Decodes a byte array into a boolean.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestobool
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Boolean value.
 *
 * @example
 * import { bytesToBool } from 'viem'
 * const data = bytesToBool(new Uint8Array([1]))
 * // true
 */
function bytesToBool(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.D)(bytes, { size: opts.size });
        bytes = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(bytes);
    }
    if (bytes.length > 1 || bytes[0] > 1)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.E(bytes);
    return Boolean(bytes[0]);
}
/**
 * Decodes a byte array into a number.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestonumber
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns Number value.
 *
 * @example
 * import { bytesToNumber } from 'viem'
 * const data = bytesToNumber(new Uint8Array([1, 164]))
 * // 420
 */
function bytesToNumber(bytes, opts = {}) {
    if (typeof opts.size !== 'undefined')
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.D)(bytes, { size: opts.size });
    const hex = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(bytes, opts);
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.h)(hex, opts);
}
/**
 * Decodes a byte array into a UTF-8 string.
 *
 * - Docs: https://viem.sh/docs/utilities/fromBytes#bytestostring
 *
 * @param bytes Byte array to decode.
 * @param opts Options.
 * @returns String value.
 *
 * @example
 * import { bytesToString } from 'viem'
 * const data = bytesToString(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
 * // 'Hello world'
 */
function bytesToString(bytes_, opts = {}) {
    let bytes = bytes_;
    if (typeof opts.size !== 'undefined') {
        (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.D)(bytes, { size: opts.size });
        bytes = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(bytes, { dir: 'right' });
    }
    return new TextDecoder().decode(bytes);
}

/**
 * @description Encodes a list of primitive values into an ABI-encoded hex value.
 *
 * - Docs: https://viem.sh/docs/abi/encodeAbiParameters#encodeabiparameters
 *
 *   Generates ABI encoded data using the [ABI specification](https://docs.soliditylang.org/en/latest/abi-spec), given a set of ABI parameters (inputs/outputs) and their corresponding values.
 *
 * @param params - a set of ABI Parameters (params), that can be in the shape of the inputs or outputs attribute of an ABI Item.
 * @param values - a set of values (values) that correspond to the given params.
 * @example
 * ```typescript
 * import { encodeAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   [
 *     { name: 'x', type: 'string' },
 *     { name: 'y', type: 'uint' },
 *     { name: 'z', type: 'bool' }
 *   ],
 *   ['wagmi', 420n, true]
 * )
 * ```
 *
 * You can also pass in Human Readable parameters with the parseAbiParameters utility.
 *
 * @example
 * ```typescript
 * import { encodeAbiParameters, parseAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   parseAbiParameters('string x, uint y, bool z'),
 *   ['wagmi', 420n, true]
 * )
 * ```
 */
function encodeAbiParameters(params, values) {
    if (params.length !== values.length)
        throw new AbiEncodingLengthMismatchError({
            expectedLength: params.length,
            givenLength: values.length,
        });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParams = prepareParams({
        params: params,
        values: values,
    });
    const data = encodeParams(preparedParams);
    if (data.length === 0)
        return '0x';
    return data;
}
function prepareParams({ params, values, }) {
    const preparedParams = [];
    for (let i = 0; i < params.length; i++) {
        preparedParams.push(prepareParam({ param: params[i], value: values[i] }));
    }
    return preparedParams;
}
function prepareParam({ param, value, }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, { length, param: { ...param, type } });
    }
    if (param.type === 'tuple') {
        return encodeTuple(value, {
            param: param,
        });
    }
    if (param.type === 'address') {
        return encodeAddress(value);
    }
    if (param.type === 'bool') {
        return encodeBool(value);
    }
    if (param.type.startsWith('uint') || param.type.startsWith('int')) {
        const signed = param.type.startsWith('int');
        return encodeNumber(value, { signed });
    }
    if (param.type.startsWith('bytes')) {
        return encodeBytes(value, { param });
    }
    if (param.type === 'string') {
        return encodeString(value);
    }
    throw new InvalidAbiEncodingTypeError(param.type, {
        docsPath: '/docs/contract/encodeAbiParameters',
    });
}
function encodeParams(preparedParams) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic)
            staticSize += 32;
        else
            staticSize += (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParams = [];
    const dynamicParams = [];
    let dynamicSize = 0;
    for (let i = 0; i < preparedParams.length; i++) {
        const { dynamic, encoded } = preparedParams[i];
        if (dynamic) {
            staticParams.push((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(staticSize + dynamicSize, { size: 32 }));
            dynamicParams.push(encoded);
            dynamicSize += (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(encoded);
        }
        else {
            staticParams.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.J)([...staticParams, ...dynamicParams]);
}
function encodeAddress(value) {
    if (!(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(value))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: value });
    return { dynamic: false, encoded: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.K)(value.toLowerCase()) };
}
function encodeArray(value, { length, param, }) {
    const dynamic = length === null;
    if (!Array.isArray(value))
        throw new InvalidArrayError(value);
    if (!dynamic && value.length !== length)
        throw new AbiEncodingArrayLengthMismatchError({
            expectedLength: length,
            givenLength: value.length,
            type: `${param.type}[${length}]`,
        });
    let dynamicChild = false;
    const preparedParams = [];
    for (let i = 0; i < value.length; i++) {
        const preparedParam = prepareParam({ param, value: value[i] });
        if (preparedParam.dynamic)
            dynamicChild = true;
        preparedParams.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encodeParams(preparedParams);
        if (dynamic) {
            const length = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(preparedParams.length, { size: 32 });
            return {
                dynamic: true,
                encoded: preparedParams.length > 0 ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.J)([length, data]) : length,
            };
        }
        if (dynamicChild)
            return { dynamic: true, encoded: data };
    }
    return {
        dynamic: false,
        encoded: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.J)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function encodeBytes(value, { param }) {
    const [, paramSize] = param.type.split('bytes');
    const bytesSize = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(value);
    if (!paramSize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0)
            value_ = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.K)(value_, {
                dir: 'right',
                size: Math.ceil((value.length - 2) / 2 / 32) * 32,
            });
        return {
            dynamic: true,
            encoded: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.J)([(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.K)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(bytesSize, { size: 32 })), value_]),
        };
    }
    if (bytesSize !== Number.parseInt(paramSize))
        throw new AbiEncodingBytesSizeMismatchError({
            expectedSize: Number.parseInt(paramSize),
            value,
        });
    return { dynamic: false, encoded: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.K)(value, { dir: 'right' }) };
}
function encodeBool(value) {
    if (typeof value !== 'boolean')
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return { dynamic: false, encoded: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.K)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.L)(value)) };
}
function encodeNumber(value, { signed }) {
    return {
        dynamic: false,
        encoded: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(value, {
            size: 32,
            signed,
        }),
    };
}
function encodeString(value) {
    const hexValue = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.M)(value);
    const partsLength = Math.ceil((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(hexValue) / 32);
    const parts = [];
    for (let i = 0; i < partsLength; i++) {
        parts.push((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.K)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.l)(hexValue, i * 32, (i + 1) * 32), {
            dir: 'right',
        }));
    }
    return {
        dynamic: true,
        encoded: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.J)([
            (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.K)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(hexValue), { size: 32 })),
            ...parts,
        ]),
    };
}
function encodeTuple(value, { param }) {
    let dynamic = false;
    const preparedParams = [];
    for (let i = 0; i < param.components.length; i++) {
        const param_ = param.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParam({
            param: param_,
            value: value[index],
        });
        preparedParams.push(preparedParam);
        if (preparedParam.dynamic)
            dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic
            ? encodeParams(preparedParams)
            : (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.J)(preparedParams.map(({ encoded }) => encoded)),
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches
        ? // Return `null` if the array is dynamic.
            [matches[2] ? Number(matches[2]) : null, matches[1]]
        : undefined;
}

function decodeAbiParameters(params, data) {
    const bytes = typeof data === 'string' ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.e)(data) : data;
    const cursor = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.c)(bytes);
    if ((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(bytes) === 0 && params.length > 0)
        throw new AbiDecodingZeroDataError();
    if ((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(data) && (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(data) < 32)
        throw new AbiDecodingDataSizeTooSmallError({
            data: typeof data === 'string' ? data : (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(data),
            params: params,
            size: (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.s)(data),
        });
    let consumed = 0;
    const values = [];
    for (let i = 0; i < params.length; ++i) {
        const param = params[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: 0,
        });
        consumed += consumed_;
        values.push(data);
    }
    return values;
}
function decodeParameter(cursor, param, { staticPosition }) {
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, { ...param, type }, { length, staticPosition });
    }
    if (param.type === 'tuple')
        return decodeTuple(cursor, param, { staticPosition });
    if (param.type === 'address')
        return decodeAddress(cursor);
    if (param.type === 'bool')
        return decodeBool(cursor);
    if (param.type.startsWith('bytes'))
        return decodeBytes(cursor, param, { staticPosition });
    if (param.type.startsWith('uint') || param.type.startsWith('int'))
        return decodeNumber(cursor, param);
    if (param.type === 'string')
        return decodeString(cursor, { staticPosition });
    throw new InvalidAbiDecodingTypeError(param.type, {
        docsPath: '/docs/contract/decodeAbiParameters',
    });
}
////////////////////////////////////////////////////////////////////
// Type Decoders
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor) {
    const value = cursor.readBytes(32);
    return [(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.N)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.O)(value, -20))), 32];
}
function decodeArray(cursor, param, { length, staticPosition }) {
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = bytesToNumber(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                staticPosition: startOfData,
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for (let i = 0; i < length; ++i) {
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                staticPosition: start,
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for (let i = 0; i < length; ++i) {
        const [data, consumed_] = decodeParameter(cursor, param, {
            staticPosition: staticPosition + consumed,
        });
        consumed += consumed_;
        value.push(data);
    }
    return [value, consumed];
}
function decodeBool(cursor) {
    return [bytesToBool(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = bytesToNumber(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = bytesToNumber(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return ['0x', 32];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(data), 32];
    }
    const value = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(cursor.readBytes(Number.parseInt(size), 32));
    return [value, 32];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256');
    const value = cursor.readBytes(32);
    return [
        size > 48
            ? bytesToBigInt(value, { signed })
            : bytesToNumber(value, { signed }),
        32,
    ];
}
function decodeTuple(cursor, param, { staticPosition }) {
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = bytesToNumber(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for (let i = 0; i < param.components.length; ++i) {
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                staticPosition: start,
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [value, 32];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for (let i = 0; i < param.components.length; ++i) {
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            staticPosition,
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = bytesToNumber(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = bytesToNumber(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return ['', 32];
    }
    const data = cursor.readBytes(length, 32);
    const value = bytesToString((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string')
        return true;
    if (type === 'bytes')
        return true;
    if (type.endsWith('[]'))
        return true;
    if (type === 'tuple')
        return param.components?.some(hasDynamicChild);
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents &&
        hasDynamicChild({ ...param, type: arrayComponents[1] }))
        return true;
    return false;
}

const hash = (value) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.P)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.j)(value));
function hashSignature(sig) {
    return hash(sig);
}

// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}

// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
/**
 * Formats {@link AbiParameter} to human-readable ABI parameter.
 *
 * @param abiParameter - ABI parameter
 * @returns Human-readable ABI parameter
 *
 * @example
 * const result = formatAbiParameter({ type: 'address', name: 'from' })
 * //    ^? const result: 'address from'
 */
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for (let i = 0; i < length; i++) {
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1)
                type += ', ';
        }
        const result = execTyped(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type,
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed)
        type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name)
        return `${type} ${abiParameter.name}`;
    return type;
}

/**
 * Formats {@link AbiParameter}s to human-readable ABI parameters.
 *
 * @param abiParameters - ABI parameters
 * @returns Human-readable ABI parameters
 *
 * @example
 * const result = formatAbiParameters([
 *   //  ^? const result: 'address from, uint256 tokenId'
 *   { type: 'address', name: 'from' },
 *   { type: 'uint256', name: 'tokenId' },
 * ])
 */
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for (let i = 0; i < length; i++) {
        const abiParameter = abiParameters[i];
        params += formatAbiParameter(abiParameter);
        if (i !== length - 1)
            params += ', ';
    }
    return params;
}

/**
 * Formats ABI item (e.g. error, event, function) into human-readable ABI item
 *
 * @param abiItem - ABI item
 * @returns Human-readable ABI item
 */
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function')
        return `function ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable'
            ? ` ${abiItem.stateMutability}`
            : ''}${abiItem.outputs.length
            ? ` returns (${formatAbiParameters(abiItem.outputs)})`
            : ''}`;
    else if (abiItem.type === 'event')
        return `event ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
    else if (abiItem.type === 'error')
        return `error ${abiItem.name}(${formatAbiParameters(abiItem.inputs)})`;
    else if (abiItem.type === 'constructor')
        return `constructor(${formatAbiParameters(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    else if (abiItem.type === 'fallback')
        return 'fallback()';
    return 'receive() external payable';
}

function normalizeSignature(signature) {
    let active = true;
    let current = '';
    let level = 0;
    let result = '';
    let valid = false;
    for (let i = 0; i < signature.length; i++) {
        const char = signature[i];
        // If the character is a separator, we want to reactivate.
        if (['(', ')', ','].includes(char))
            active = true;
        // If the character is a "level" token, we want to increment/decrement.
        if (char === '(')
            level++;
        if (char === ')')
            level--;
        // If we aren't active, we don't want to mutate the result.
        if (!active)
            continue;
        // If level === 0, we are at the definition level.
        if (level === 0) {
            if (char === ' ' && ['event', 'function', ''].includes(result))
                result = '';
            else {
                result += char;
                // If we are at the end of the definition, we must be finished.
                if (char === ')') {
                    valid = true;
                    break;
                }
            }
            continue;
        }
        // Ignore spaces
        if (char === ' ') {
            // If the previous character is a separator, and the current section isn't empty, we want to deactivate.
            if (signature[i - 1] !== ',' && current !== ',' && current !== ',(') {
                current = '';
                active = false;
            }
            continue;
        }
        result += char;
        current += char;
    }
    if (!valid)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B('Unable to normalize signature.');
    return result;
}

/**
 * Returns the signature for a given function or event definition.
 *
 * @example
 * const signature = toSignature('function ownerOf(uint256 tokenId)')
 * // 'ownerOf(uint256)'
 *
 * @example
 * const signature_3 = toSignature({
 *   name: 'ownerOf',
 *   type: 'function',
 *   inputs: [{ name: 'tokenId', type: 'uint256' }],
 *   outputs: [],
 *   stateMutability: 'view',
 * })
 * // 'ownerOf(uint256)'
 */
const toSignature = (def) => {
    const def_ = (() => {
        if (typeof def === 'string')
            return def;
        return formatAbiItem(def);
    })();
    return normalizeSignature(def_);
};

/**
 * Returns the hash (of the function/event signature) for a given event or function definition.
 */
function toSignatureHash(fn) {
    return hashSignature(toSignature(fn));
}

/**
 * Returns the event selector for a given event definition.
 *
 * @example
 * const selector = toEventSelector('Transfer(address indexed from, address indexed to, uint256 amount)')
 * // 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
 */
const toEventSelector = toSignatureHash;

/**
 * Returns the function selector for a given function definition.
 *
 * @example
 * const selector = toFunctionSelector('function ownerOf(uint256 tokenId)')
 * // 0x6352211e
 */
const toFunctionSelector = (fn) => (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.l)(toSignatureHash(fn), 0, 4);

function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.i)(name, { strict: false });
    const abiItems = abi.filter((abiItem) => {
        if (isSelector) {
            if (abiItem.type === 'function')
                return toFunctionSelector(abiItem) === name;
            if (abiItem.type === 'event')
                return toEventSelector(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0)
        return undefined;
    if (abiItems.length === 1)
        return abiItems[0];
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems) {
        if (!('inputs' in abiItem))
            continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0)
                return abiItem;
            continue;
        }
        if (!abiItem.inputs)
            continue;
        if (abiItem.inputs.length === 0)
            continue;
        if (abiItem.inputs.length !== args.length)
            continue;
        const matched = args.every((arg, index) => {
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter)
                return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem &&
                'inputs' in matchedAbiItem &&
                matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes)
                    throw new AbiItemAmbiguityError({
                        abiItem,
                        type: ambiguousTypes[0],
                    }, {
                        abiItem: matchedAbiItem,
                        type: ambiguousTypes[1],
                    });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem)
        return matchedAbiItem;
    return abiItems[0];
}
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch (abiParameterType) {
        case 'address':
            return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(arg, { strict: false });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default: {
            if (abiParameterType === 'tuple' && 'components' in abiParameter)
                return Object.values(abiParameter.components).every((component, index) => {
                    return isArgOfType(Object.values(arg)[index], component);
                });
            // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
            // https://regexr.com/6v8hp
            if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
                return argType === 'number' || argType === 'bigint';
            // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
            // https://regexr.com/6va55
            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
                return argType === 'string' || arg instanceof Uint8Array;
            // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
            // https://regexr.com/6va6i
            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                return (Array.isArray(arg) &&
                    arg.every((x) => isArgOfType(x, {
                        ...abiParameter,
                        // Pop off `[]` or `[M]` from end of type
                        type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, ''),
                    })));
            }
            return false;
        }
    }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for (const parameterIndex in sourceParameters) {
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' &&
            targetParameter.type === 'tuple' &&
            'components' in sourceParameter &&
            'components' in targetParameter)
            return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [sourceParameter.type, targetParameter.type];
        const ambiguous = (() => {
            if (types.includes('address') && types.includes('bytes20'))
                return true;
            if (types.includes('address') && types.includes('string'))
                return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(args[parameterIndex], { strict: false });
            if (types.includes('address') && types.includes('bytes'))
                return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(args[parameterIndex], { strict: false });
            return false;
        })();
        if (ambiguous)
            return types;
    }
    return;
}

const docsPath$1 = '/docs/contract/decodeFunctionResult';
function decodeFunctionResult(parameters) {
    const { abi, args, functionName, data } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = getAbiItem({ abi, args, name: functionName });
        if (!item)
            throw new AbiFunctionNotFoundError(functionName, { docsPath: docsPath$1 });
        abiItem = item;
    }
    if (abiItem.type !== 'function')
        throw new AbiFunctionNotFoundError(undefined, { docsPath: docsPath$1 });
    if (!abiItem.outputs)
        throw new AbiFunctionOutputsNotFoundError(abiItem.name, { docsPath: docsPath$1 });
    const values = decodeAbiParameters(abiItem.outputs, data);
    if (values && values.length > 1)
        return values;
    if (values && values.length === 1)
        return values[0];
    return undefined;
}

const docsPath = '/docs/contract/encodeFunctionData';
function prepareEncodeFunctionData(parameters) {
    const { abi, args, functionName } = parameters;
    let abiItem = abi[0];
    if (functionName) {
        const item = getAbiItem({
            abi,
            args,
            name: functionName,
        });
        if (!item)
            throw new AbiFunctionNotFoundError(functionName, { docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'function')
        throw new AbiFunctionNotFoundError(undefined, { docsPath });
    return {
        abi: [abiItem],
        functionName: toFunctionSelector(formatAbiItem$1(abiItem)),
    };
}

function encodeFunctionData(parameters) {
    const { args } = parameters;
    const { abi, functionName } = (() => {
        if (parameters.abi.length === 1 &&
            parameters.functionName?.startsWith('0x'))
            return parameters;
        return prepareEncodeFunctionData(parameters);
    })();
    const abiItem = abi[0];
    const signature = functionName;
    const data = 'inputs' in abiItem && abiItem.inputs
        ? encodeAbiParameters(abiItem.inputs, args ?? [])
        : undefined;
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.u)([signature, data ?? '0x']);
}

function getChainContractAddress({ blockNumber, chain, contract: name, }) {
    const contract = chain?.contracts?.[name];
    if (!contract)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.Q({
            chain,
            contract: { name },
        });
    if (blockNumber &&
        contract.blockCreated &&
        contract.blockCreated > blockNumber)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.Q({
            blockNumber,
            chain,
            contract: {
                name,
                blockCreated: contract.blockCreated,
            },
        });
    return contract.address;
}

// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#panic-via-assert-and-error-via-require
const panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.',
};
const solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string',
        },
    ],
    name: 'Error',
    type: 'error',
};
const solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256',
        },
    ],
    name: 'Panic',
    type: 'error',
};

function parseAccount(account) {
    if (typeof account === 'string')
        return { address: account, type: 'json-rpc' };
    return account;
}

function decodeErrorResult(parameters) {
    const { abi, data } = parameters;
    const signature = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.l)(data, 0, 4);
    if (signature === '0x')
        throw new AbiDecodingZeroDataError();
    const abi_ = [...(abi || []), solidityError, solidityPanic];
    const abiItem = abi_.find((x) => x.type === 'error' && signature === toFunctionSelector(formatAbiItem$1(x)));
    if (!abiItem)
        throw new AbiErrorSignatureNotFoundError(signature, {
            docsPath: '/docs/contract/decodeErrorResult',
        });
    return {
        abiItem,
        args: 'inputs' in abiItem && abiItem.inputs && abiItem.inputs.length > 0
            ? decodeAbiParameters(abiItem.inputs, (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.l)(data, 4))
            : undefined,
        errorName: abiItem.name,
    };
}

const stringify = (value, replacer, space) => JSON.stringify(value, (key, value_) => {
    const value = typeof value_ === 'bigint' ? value_.toString() : value_;
    return typeof replacer === 'function' ? replacer(key, value) : value;
}, space);

function formatAbiItemWithArgs({ abiItem, args, includeFunctionName = true, includeName = false, }) {
    if (!('name' in abiItem))
        return;
    if (!('inputs' in abiItem))
        return;
    if (!abiItem.inputs)
        return;
    return `${includeFunctionName ? abiItem.name : ''}(${abiItem.inputs
        .map((input, i) => `${includeName && input.name ? `${input.name}: ` : ''}${typeof args[i] === 'object' ? stringify(args[i]) : args[i]}`)
        .join(', ')})`;
}

class AccountStateConflictError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ address }) {
        super(`State for account "${address}" is set multiple times.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AccountStateConflictError'
        });
    }
}
class StateAssignmentConflictError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor() {
        super('state and stateDiff are set on the same account.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'StateAssignmentConflictError'
        });
    }
}
function prettyStateMapping(stateMapping) {
    return stateMapping.reduce((pretty, { slot, value }) => {
        return `${pretty}        ${slot}: ${value}\n`;
    }, '');
}
function prettyStateOverride(stateOverride) {
    return stateOverride
        .reduce((pretty, { address, ...state }) => {
        let val = `${pretty}    ${address}:\n`;
        if (state.nonce)
            val += `      nonce: ${state.nonce}\n`;
        if (state.balance)
            val += `      balance: ${state.balance}\n`;
        if (state.code)
            val += `      code: ${state.code}\n`;
        if (state.state) {
            val += '      state:\n';
            val += prettyStateMapping(state.state);
        }
        if (state.stateDiff) {
            val += '      stateDiff:\n';
            val += prettyStateMapping(state.stateDiff);
        }
        return val;
    }, '  State Override:\n')
        .slice(0, -1);
}

class CallExecutionError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, }) {
        const account = account_ ? parseAccount(account_) : undefined;
        let prettyArgs = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.R)({
            from: account?.address,
            to,
            value: typeof value !== 'undefined' &&
                `${formatEther(value)} ${chain?.nativeCurrency?.symbol || 'ETH'}`,
            data,
            gas,
            gasPrice: typeof gasPrice !== 'undefined' && `${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.U)(gasPrice)} gwei`,
            maxFeePerGas: typeof maxFeePerGas !== 'undefined' &&
                `${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.U)(maxFeePerGas)} gwei`,
            maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== 'undefined' &&
                `${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.U)(maxPriorityFeePerGas)} gwei`,
            nonce,
        });
        if (stateOverride) {
            prettyArgs += `\n${prettyStateOverride(stateOverride)}`;
        }
        super(cause.shortMessage, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Raw Call Arguments:',
                prettyArgs,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CallExecutionError'
        });
        this.cause = cause;
    }
}
class ContractFunctionExecutionError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(cause, { abi, args, contractAddress, docsPath, functionName, sender, }) {
        const abiItem = getAbiItem({ abi, args, name: functionName });
        const formattedArgs = abiItem
            ? formatAbiItemWithArgs({
                abiItem,
                args,
                includeFunctionName: false,
                includeName: false,
            })
            : undefined;
        const functionWithParams = abiItem
            ? formatAbiItem$1(abiItem, { includeName: true })
            : undefined;
        const prettyArgs = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.R)({
            address: contractAddress && (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.S)(contractAddress),
            function: functionWithParams,
            args: formattedArgs &&
                formattedArgs !== '()' &&
                `${[...Array(functionName?.length ?? 0).keys()]
                    .map(() => ' ')
                    .join('')}${formattedArgs}`,
            sender,
        });
        super(cause.shortMessage ||
            `An unknown error occurred while executing the contract function "${functionName}".`, {
            cause,
            docsPath,
            metaMessages: [
                ...(cause.metaMessages ? [...cause.metaMessages, ' '] : []),
                'Contract Call:',
                prettyArgs,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "abi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cause", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "formattedArgs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionExecutionError'
        });
        this.abi = abi;
        this.args = args;
        this.cause = cause;
        this.contractAddress = contractAddress;
        this.functionName = functionName;
        this.sender = sender;
    }
}
class ContractFunctionRevertedError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ abi, data, functionName, message, }) {
        let cause;
        let decodedData = undefined;
        let metaMessages;
        let reason;
        if (data && data !== '0x') {
            try {
                decodedData = decodeErrorResult({ abi, data });
                const { abiItem, errorName, args: errorArgs } = decodedData;
                if (errorName === 'Error') {
                    reason = errorArgs[0];
                }
                else if (errorName === 'Panic') {
                    const [firstArg] = errorArgs;
                    reason = panicReasons[firstArg];
                }
                else {
                    const errorWithParams = abiItem
                        ? formatAbiItem$1(abiItem, { includeName: true })
                        : undefined;
                    const formattedArgs = abiItem && errorArgs
                        ? formatAbiItemWithArgs({
                            abiItem,
                            args: errorArgs,
                            includeFunctionName: false,
                            includeName: false,
                        })
                        : undefined;
                    metaMessages = [
                        errorWithParams ? `Error: ${errorWithParams}` : '',
                        formattedArgs && formattedArgs !== '()'
                            ? `       ${[...Array(errorName?.length ?? 0).keys()]
                                .map(() => ' ')
                                .join('')}${formattedArgs}`
                            : '',
                    ];
                }
            }
            catch (err) {
                cause = err;
            }
        }
        else if (message)
            reason = message;
        let signature;
        if (cause instanceof AbiErrorSignatureNotFoundError) {
            signature = cause.signature;
            metaMessages = [
                `Unable to decode signature "${signature}" as it was not found on the provided ABI.`,
                'Make sure you are using the correct ABI and that the error exists on it.',
                `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${signature}.`,
            ];
        }
        super((reason && reason !== 'execution reverted') || signature
            ? [
                `The contract function "${functionName}" reverted with the following ${signature ? 'signature' : 'reason'}:`,
                reason || signature,
            ].join('\n')
            : `The contract function "${functionName}" reverted.`, {
            cause,
            metaMessages,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionRevertedError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = decodedData;
        this.reason = reason;
        this.signature = signature;
    }
}
class ContractFunctionZeroDataError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ functionName }) {
        super(`The contract function "${functionName}" returned no data ("0x").`, {
            metaMessages: [
                'This could be due to any of the following:',
                `  - The contract does not have the function "${functionName}",`,
                '  - The parameters passed to the contract function may be invalid, or',
                '  - The address is not a contract.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ContractFunctionZeroDataError'
        });
    }
}
class RawContractError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ data, message, }) {
        super(message || '');
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RawContractError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}

/*
 * @description Checks if error is a valid null result UniversalResolver error
 */
function isNullUniversalResolverError(err, callType) {
    if (!(err instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B))
        return false;
    const cause = err.walk((e) => e instanceof ContractFunctionRevertedError);
    if (!(cause instanceof ContractFunctionRevertedError))
        return false;
    if (cause.data?.errorName === 'ResolverNotFound')
        return true;
    if (cause.data?.errorName === 'ResolverWildcardNotSupported')
        return true;
    if (cause.data?.errorName === 'ResolverNotContract')
        return true;
    if (cause.data?.errorName === 'ResolverError')
        return true;
    if (cause.data?.errorName === 'HttpError')
        return true;
    // Backwards compatibility for older UniversalResolver contracts
    if (cause.reason?.includes('Wildcard on non-extended resolvers is not supported'))
        return true;
    // No primary name set for address.
    if (callType === 'reverse' && cause.reason === panicReasons[50])
        return true;
    return false;
}

function encodedLabelToLabelhash(label) {
    if (label.length !== 66)
        return null;
    if (label.indexOf('[') !== 0)
        return null;
    if (label.indexOf(']') !== 65)
        return null;
    const hash = `0x${label.slice(1, 65)}`;
    if (!(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.i)(hash))
        return null;
    return hash;
}

/**
 * @description Hashes ENS name
 *
 * - Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `namehash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @example
 * namehash('wevm.eth')
 * '0xf246651c1b9a6b141d19c2604e9a58f567973833990f830d882534a747801359'
 *
 * @link https://eips.ethereum.org/EIPS/eip-137
 */
function namehash(name) {
    let result = new Uint8Array(32).fill(0);
    if (!name)
        return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(result);
    const labels = name.split('.');
    // Iterate in reverse order building up hash
    for (let i = labels.length - 1; i >= 0; i -= 1) {
        const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i]);
        const hashed = hashFromEncodedLabel
            ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.j)(hashFromEncodedLabel)
            : (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.P)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.V)(labels[i]), 'bytes');
        result = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.P)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.J)([result, hashed]), 'bytes');
    }
    return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(result);
}

function encodeLabelhash(hash) {
    return `[${hash.slice(2)}]`;
}

/**
 * @description Hashes ENS label
 *
 * - Since ENS labels prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS labels](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `labelhash`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @example
 * labelhash('eth')
 * '0x4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0'
 */
function labelhash(label) {
    const result = new Uint8Array(32).fill(0);
    if (!label)
        return (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.b)(result);
    return encodedLabelToLabelhash(label) || (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.P)((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.V)(label));
}

/*
 * @description Encodes a DNS packet into a ByteArray containing a UDP payload.
 *
 * @example
 * packetToBytes('awkweb.eth')
 * '0x0661776b7765620365746800'
 *
 * @see https://docs.ens.domains/resolution/names#dns
 *
 */
function packetToBytes(packet) {
    // strip leading and trailing `.`
    const value = packet.replace(/^\.|\.$/gm, '');
    if (value.length === 0)
        return new Uint8Array(1);
    const bytes = new Uint8Array((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.V)(value).byteLength + 2);
    let offset = 0;
    const list = value.split('.');
    for (let i = 0; i < list.length; i++) {
        let encoded = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.V)(list[i]);
        // if the length is > 255, make the encoded label value a labelhash
        // this is compatible with the universal resolver
        if (encoded.byteLength > 255)
            encoded = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.V)(encodeLabelhash(labelhash(list[i])));
        bytes[offset] = encoded.length;
        bytes.set(encoded, offset + 1);
        offset += encoded.length + 1;
    }
    if (bytes.byteLength !== offset + 1)
        return bytes.slice(0, offset + 1);
    return bytes;
}

/**
 * Retrieves and returns an action from the client (if exists), and falls
 * back to the tree-shakable action.
 *
 * Useful for extracting overridden actions from a client (ie. if a consumer
 * wants to override the `sendTransaction` implementation).
 */
function getAction(client, action, 
// Some minifiers drop `Function.prototype.name` or can change function
// names so that getting the name by reflection through `action.name` will
// not work.
name) {
    return (params) => client[action.name]?.(params) ??
        client[name]?.(params) ??
        action(client, params);
}

class HttpRequestError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ body, details, headers, status, url, }) {
        super('HTTP request failed.', {
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.W)(url)}`,
                body && `Request body: ${stringify(body)}`,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'HttpRequestError'
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
class RpcRequestError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ body, error, url, }) {
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [`URL: ${(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.W)(url)}`, `Request body: ${stringify(body)}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcRequestError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
    }
}

const unknownErrorCode = -1;
class RpcError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor(cause, { code, docsPath, metaMessages, shortMessage }) {
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = cause.name;
        this.code = (cause instanceof RpcRequestError ? cause.code : code ?? unknownErrorCode);
    }
}
class InternalRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InternalRpcError.code,
            shortMessage: 'An internal error was received.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InternalRpcError'
        });
    }
}
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});

const EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi, address, args, docsPath, functionName, sender, }) {
    const { code, data, message, shortMessage } = (err instanceof RawContractError
        ? err
        : err instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B
            ? err.walk((err) => 'data' in err) || err.walk()
            : {});
    const cause = (() => {
        if (err instanceof AbiDecodingZeroDataError)
            return new ContractFunctionZeroDataError({ functionName });
        if ([EXECUTION_REVERTED_ERROR_CODE, InternalRpcError.code].includes(code) &&
            (data || message || shortMessage)) {
            return new ContractFunctionRevertedError({
                abi,
                data: typeof data === 'object' ? data.data : data,
                functionName,
                message: shortMessage ?? message,
            });
        }
        return err;
    })();
    return new ContractFunctionExecutionError(cause, {
        abi,
        args,
        contractAddress: address,
        docsPath,
        functionName,
        sender,
    });
}

const aggregate3Signature = '0x82ad56cb';

function getNodeError(err, args) {
    const message = (err.details || '').toLowerCase();
    const executionRevertedError = err instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B
        ? err.walk((e) => e.code === _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.X.code)
        : err;
    if (executionRevertedError instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B) {
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.X({
            cause: err,
            message: executionRevertedError.details,
        });
    }
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.X.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.X({
            cause: err,
            message: err.details,
        });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.F.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.F({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.Y.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.Y({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
        });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.Z.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.Z({ cause: err, nonce: args?.nonce });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__._.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__._({ cause: err, nonce: args?.nonce });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.$.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.$({ cause: err, nonce: args?.nonce });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a0.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a0({ cause: err });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a1.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a1({ cause: err, gas: args?.gas });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a2.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a2({ cause: err, gas: args?.gas });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a3.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a3({ cause: err });
    if (_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.T.nodeMessage.test(message))
        return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.T({
            cause: err,
            maxFeePerGas: args?.maxFeePerGas,
            maxPriorityFeePerGas: args?.maxPriorityFeePerGas,
        });
    return new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a4({
        cause: err,
    });
}

function getCallError(err, { docsPath, ...args }) {
    const cause = (() => {
        const cause = getNodeError(err, args);
        if (cause instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a4)
            return err;
        return cause;
    })();
    return new CallExecutionError(cause, {
        docsPath,
        ...args,
    });
}

/**
 * @description Picks out the keys from `value` that exist in the formatter..
 */
function extract(value_, { format }) {
    if (!format)
        return {};
    const value = {};
    function extract_(formatted) {
        const keys = Object.keys(formatted);
        for (const key of keys) {
            if (key in value_)
                value[key] = value_[key];
            if (formatted[key] &&
                typeof formatted[key] === 'object' &&
                !Array.isArray(formatted[key]))
                extract_(formatted[key]);
        }
    }
    const formatted = format(value_ || {});
    extract_(formatted);
    return value;
}

const schedulerCache = /*#__PURE__*/ new Map();
function createBatchScheduler({ fn, id, shouldSplitBatch, wait = 0, sort, }) {
    const exec = async () => {
        const scheduler = getScheduler();
        flush();
        const args = scheduler.map(({ args }) => args);
        if (args.length === 0)
            return;
        fn(args)
            .then((data) => {
            if (sort && Array.isArray(data))
                data.sort(sort);
            for (let i = 0; i < scheduler.length; i++) {
                const { pendingPromise } = scheduler[i];
                pendingPromise.resolve?.([data[i], data]);
            }
        })
            .catch((err) => {
            for (let i = 0; i < scheduler.length; i++) {
                const { pendingPromise } = scheduler[i];
                pendingPromise.reject?.(err);
            }
        });
    };
    const flush = () => schedulerCache.delete(id);
    const getBatchedArgs = () => getScheduler().map(({ args }) => args);
    const getScheduler = () => schedulerCache.get(id) || [];
    const setScheduler = (item) => schedulerCache.set(id, [...getScheduler(), item]);
    return {
        flush,
        async schedule(args) {
            const pendingPromise = {};
            const promise = new Promise((resolve, reject) => {
                pendingPromise.resolve = resolve;
                pendingPromise.reject = reject;
            });
            const split = shouldSplitBatch?.([...getBatchedArgs(), args]);
            if (split)
                exec();
            const hasActiveScheduler = getScheduler().length > 0;
            if (hasActiveScheduler) {
                setScheduler({ args, pendingPromise });
                return promise;
            }
            setScheduler({ args, pendingPromise });
            setTimeout(exec, wait);
            return promise;
        },
    };
}

function serializeStateMapping(stateMapping) {
    if (!stateMapping || stateMapping.length === 0)
        return undefined;
    return stateMapping.reduce((acc, { slot, value }) => {
        if (slot.length !== 66)
            throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a5({
                size: slot.length,
                targetSize: 66,
                type: 'hex',
            });
        if (value.length !== 66)
            throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a5({
                size: value.length,
                targetSize: 66,
                type: 'hex',
            });
        acc[slot] = value;
        return acc;
    }, {});
}
function serializeAccountStateOverride(parameters) {
    const { balance, nonce, state, stateDiff, code } = parameters;
    const rpcAccountStateOverride = {};
    if (code !== undefined)
        rpcAccountStateOverride.code = code;
    if (balance !== undefined)
        rpcAccountStateOverride.balance = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(balance);
    if (nonce !== undefined)
        rpcAccountStateOverride.nonce = (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(nonce);
    if (state !== undefined)
        rpcAccountStateOverride.state = serializeStateMapping(state);
    if (stateDiff !== undefined) {
        if (rpcAccountStateOverride.state)
            throw new StateAssignmentConflictError();
        rpcAccountStateOverride.stateDiff = serializeStateMapping(stateDiff);
    }
    return rpcAccountStateOverride;
}
function serializeStateOverride(parameters) {
    if (!parameters)
        return undefined;
    const rpcStateOverride = {};
    for (const { address, ...accountState } of parameters) {
        if (!(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(address, { strict: false }))
            throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address });
        if (rpcStateOverride[address])
            throw new AccountStateConflictError({ address: address });
        rpcStateOverride[address] = serializeAccountStateOverride(accountState);
    }
    return rpcStateOverride;
}

function assertRequest(args) {
    const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to, } = args;
    const account = account_ ? parseAccount(account_) : undefined;
    if (account && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(account.address))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: account.address });
    if (to && !(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.m)(to))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.n({ address: to });
    if (typeof gasPrice !== 'undefined' &&
        (typeof maxFeePerGas !== 'undefined' ||
            typeof maxPriorityFeePerGas !== 'undefined'))
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a6();
    if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.F({ maxFeePerGas });
    if (maxPriorityFeePerGas &&
        maxFeePerGas &&
        maxPriorityFeePerGas > maxFeePerGas)
        throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.T({ maxFeePerGas, maxPriorityFeePerGas });
}

/**
 * Executes a new message call immediately without submitting a transaction to the network.
 *
 * - Docs: https://viem.sh/docs/actions/public/call
 * - JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)
 *
 * @param client - Client to use
 * @param parameters - {@link CallParameters}
 * @returns The call data. {@link CallReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { call } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const data = await call(client, {
 *   account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 *   data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 *   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 * })
 */
async function call(client, args) {
    const { account: account_ = client.account, batch = Boolean(client.batch?.multicall), blockNumber, blockTag = 'latest', accessList, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride, ...rest } = args;
    const account = account_ ? parseAccount(account_) : undefined;
    try {
        assertRequest(args);
        const blockNumberHex = blockNumber ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(blockNumber) : undefined;
        const block = blockNumberHex || blockTag;
        const rpcStateOverride = serializeStateOverride(stateOverride);
        const chainFormat = client.chain?.formatters?.transactionRequest?.format;
        const format = chainFormat || _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a7;
        const request = format({
            // Pick out extra data that might exist on the chain's transaction request type.
            ...extract(rest, { format: chainFormat }),
            from: account?.address,
            accessList,
            blobs,
            data,
            gas,
            gasPrice,
            maxFeePerBlobGas,
            maxFeePerGas,
            maxPriorityFeePerGas,
            nonce,
            to,
            value,
        });
        if (batch && shouldPerformMulticall({ request }) && !rpcStateOverride) {
            try {
                return await scheduleMulticall(client, {
                    ...request,
                    blockNumber,
                    blockTag,
                });
            }
            catch (err) {
                if (!(err instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a8) &&
                    !(err instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.Q))
                    throw err;
            }
        }
        const response = await client.request({
            method: 'eth_call',
            params: rpcStateOverride
                ? [
                    request,
                    block,
                    rpcStateOverride,
                ]
                : [request, block],
        });
        if (response === '0x')
            return { data: undefined };
        return { data: response };
    }
    catch (err) {
        const data = getRevertErrorData(err);
        const { offchainLookup, offchainLookupSignature } = await __webpack_require__.e(/* import() */ 2754).then(__webpack_require__.bind(__webpack_require__, 252754));
        if (client.ccipRead !== false &&
            data?.slice(0, 10) === offchainLookupSignature &&
            to)
            return { data: await offchainLookup(client, { data, to }) };
        throw getCallError(err, {
            ...args,
            account,
            chain: client.chain,
        });
    }
}
// We only want to perform a scheduled multicall if:
// - The request has calldata,
// - The request has a target address,
// - The target address is not already the aggregate3 signature,
// - The request has no other properties (`nonce`, `gas`, etc cannot be sent with a multicall).
function shouldPerformMulticall({ request }) {
    const { data, to, ...request_ } = request;
    if (!data)
        return false;
    if (data.startsWith(aggregate3Signature))
        return false;
    if (!to)
        return false;
    if (Object.values(request_).filter((x) => typeof x !== 'undefined').length > 0)
        return false;
    return true;
}
async function scheduleMulticall(client, args) {
    const { batchSize = 1024, wait = 0 } = typeof client.batch?.multicall === 'object' ? client.batch.multicall : {};
    const { blockNumber, blockTag = 'latest', data, multicallAddress: multicallAddress_, to, } = args;
    let multicallAddress = multicallAddress_;
    if (!multicallAddress) {
        if (!client.chain)
            throw new _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.a8();
        multicallAddress = getChainContractAddress({
            blockNumber,
            chain: client.chain,
            contract: 'multicall3',
        });
    }
    const blockNumberHex = blockNumber ? (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.G)(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    const { schedule } = createBatchScheduler({
        id: `${client.uid}.${block}`,
        wait,
        shouldSplitBatch(args) {
            const size = args.reduce((size, { data }) => size + (data.length - 2), 0);
            return size > batchSize * 2;
        },
        fn: async (requests) => {
            const calls = requests.map((request) => ({
                allowFailure: true,
                callData: request.data,
                target: request.to,
            }));
            const calldata = encodeFunctionData({
                abi: multicall3Abi,
                args: [calls],
                functionName: 'aggregate3',
            });
            const data = await client.request({
                method: 'eth_call',
                params: [
                    {
                        data: calldata,
                        to: multicallAddress,
                    },
                    block,
                ],
            });
            return decodeFunctionResult({
                abi: multicall3Abi,
                args: [calls],
                functionName: 'aggregate3',
                data: data || '0x',
            });
        },
    });
    const [{ returnData, success }] = await schedule({ data, to });
    if (!success)
        throw new RawContractError({ data: returnData });
    if (returnData === '0x')
        return { data: undefined };
    return { data: returnData };
}
function getRevertErrorData(err) {
    if (!(err instanceof _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B))
        return undefined;
    const error = err.walk();
    return typeof error?.data === 'object' ? error.data?.data : error.data;
}

/**
 * Calls a read-only function on a contract, and returns the response.
 *
 * - Docs: https://viem.sh/docs/contract/readContract
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/reading-contracts
 *
 * A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.
 *
 * Internally, uses a [Public Client](https://viem.sh/docs/clients/public) to call the [`call` action](https://viem.sh/docs/actions/public/call) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).
 *
 * @param client - Client to use
 * @param parameters - {@link ReadContractParameters}
 * @returns The response from the contract. Type is inferred. {@link ReadContractReturnType}
 *
 * @example
 * import { createPublicClient, http, parseAbi } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { readContract } from 'viem/contract'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const result = await readContract(client, {
 *   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 *   abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
 *   functionName: 'balanceOf',
 *   args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
 * })
 * // 424122n
 */
async function readContract(client, parameters) {
    const { abi, address, args, functionName, ...rest } = parameters;
    const calldata = encodeFunctionData({
        abi,
        args,
        functionName,
    });
    try {
        const { data } = await getAction(client, call, 'call')({
            ...rest,
            data: calldata,
            to: address,
        });
        return decodeFunctionResult({
            abi,
            args,
            functionName,
            data: data || '0x',
        });
    }
    catch (error) {
        throw getContractError(error, {
            abi,
            address,
            args,
            docsPath: '/docs/contract/readContract',
            functionName,
        });
    }
}

/**
 * Gets address for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAddress
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAddressParameters}
 * @returns Address for ENS name or `null` if not found. {@link GetEnsAddressReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAddress, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAddress = await getEnsAddress(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // '0xd2135CfB216b74109775236E36d4b433F1DF507B'
 */
async function getEnsAddress(client, { blockNumber, blockTag, coinType, name, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = getChainContractAddress({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    try {
        const functionData = encodeFunctionData({
            abi: addressResolverAbi,
            functionName: 'addr',
            ...(coinType != null
                ? { args: [namehash(name), BigInt(coinType)] }
                : { args: [namehash(name)] }),
        });
        const readContractParameters = {
            address: universalResolverAddress,
            abi: universalResolverResolveAbi,
            functionName: 'resolve',
            args: [(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(packetToBytes(name)), functionData],
            blockNumber,
            blockTag,
        };
        const readContractAction = getAction(client, readContract, 'readContract');
        const res = gatewayUrls
            ? await readContractAction({
                ...readContractParameters,
                args: [...readContractParameters.args, gatewayUrls],
            })
            : await readContractAction(readContractParameters);
        if (res[0] === '0x')
            return null;
        const address = decodeFunctionResult({
            abi: addressResolverAbi,
            args: coinType != null ? [namehash(name), BigInt(coinType)] : undefined,
            functionName: 'addr',
            data: res[0],
        });
        if (address === '0x')
            return null;
        if ((0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.x)(address) === '0x00')
            return null;
        return address;
    }
    catch (err) {
        if (strict)
            throw err;
        if (isNullUniversalResolverError(err, 'resolve'))
            return null;
        throw err;
    }
}

class EnsAvatarInvalidMetadataError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ data }) {
        super('Unable to extract image from metadata. The metadata may be malformed or invalid.', {
            metaMessages: [
                '- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.',
                '',
                `Provided data: ${JSON.stringify(data)}`,
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarInvalidMetadataError'
        });
    }
}
class EnsAvatarInvalidNftUriError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ reason }) {
        super(`ENS NFT avatar URI is invalid. ${reason}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarInvalidNftUriError'
        });
    }
}
class EnsAvatarUriResolutionError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ uri }) {
        super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarUriResolutionError'
        });
    }
}
class EnsAvatarUnsupportedNamespaceError extends _transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.B {
    constructor({ namespace }) {
        super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'EnsAvatarUnsupportedNamespaceError'
        });
    }
}

const networkRegex = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
const ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
const base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
const dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
    try {
        const res = await fetch(uri, { method: 'HEAD' });
        // retrieve content type header to check if content is image
        if (res.status === 200) {
            const contentType = res.headers.get('content-type');
            return contentType?.startsWith('image/');
        }
        return false;
    }
    catch (error) {
        // if error is not cors related then fail
        if (typeof error === 'object' && typeof error.response !== 'undefined') {
            return false;
        }
        // fail in NodeJS, since the error is not cors but any other network issue
        // biome-ignore lint/suspicious/noPrototypeBuiltins:
        if (!globalThis.hasOwnProperty('Image'))
            return false;
        // in case of cors, use image api to validate if given url is an actual image
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve(true);
            };
            img.onerror = () => {
                resolve(false);
            };
            img.src = uri;
        });
    }
}
function getGateway(custom, defaultGateway) {
    if (!custom)
        return defaultGateway;
    if (custom.endsWith('/'))
        return custom.slice(0, -1);
    return custom;
}
function resolveAvatarUri({ uri, gatewayUrls, }) {
    const isEncoded = base64Regex.test(uri);
    if (isEncoded)
        return { uri, isOnChain: true, isEncoded };
    const ipfsGateway = getGateway(gatewayUrls?.ipfs, 'https://ipfs.io');
    const arweaveGateway = getGateway(gatewayUrls?.arweave, 'https://arweave.net');
    const networkRegexMatch = uri.match(networkRegex);
    const { protocol, subpath, target, subtarget = '', } = networkRegexMatch?.groups || {};
    const isIPNS = protocol === 'ipns:/' || subpath === 'ipns/';
    const isIPFS = protocol === 'ipfs:/' || subpath === 'ipfs/' || ipfsHashRegex.test(uri);
    if (uri.startsWith('http') && !isIPNS && !isIPFS) {
        let replacedUri = uri;
        if (gatewayUrls?.arweave)
            replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls?.arweave);
        return { uri: replacedUri, isOnChain: false, isEncoded: false };
    }
    if ((isIPNS || isIPFS) && target) {
        return {
            uri: `${ipfsGateway}/${isIPNS ? 'ipns' : 'ipfs'}/${target}${subtarget}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    if (protocol === 'ar:/' && target) {
        return {
            uri: `${arweaveGateway}/${target}${subtarget || ''}`,
            isOnChain: false,
            isEncoded: false,
        };
    }
    let parsedUri = uri.replace(dataURIRegex, '');
    if (parsedUri.startsWith('<svg')) {
        // if svg, base64 encode
        parsedUri = `data:image/svg+xml;base64,${btoa(parsedUri)}`;
    }
    if (parsedUri.startsWith('data:') || parsedUri.startsWith('{')) {
        return {
            uri: parsedUri,
            isOnChain: true,
            isEncoded: false,
        };
    }
    throw new EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
    // validation check for json data, must include one of theses properties
    if (typeof data !== 'object' ||
        (!('image' in data) && !('image_url' in data) && !('image_data' in data))) {
        throw new EnsAvatarInvalidMetadataError({ data });
    }
    return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri, }) {
    try {
        const res = await fetch(uri).then((res) => res.json());
        const image = await parseAvatarUri({
            gatewayUrls,
            uri: getJsonImage(res),
        });
        return image;
    }
    catch {
        throw new EnsAvatarUriResolutionError({ uri });
    }
}
async function parseAvatarUri({ gatewayUrls, uri, }) {
    const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri, gatewayUrls });
    if (isOnChain)
        return resolvedURI;
    // check if resolvedURI is an image, if it is return the url
    const isImage = await isImageUri(resolvedURI);
    if (isImage)
        return resolvedURI;
    throw new EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
    let uri = uri_;
    // parse valid nft spec (CAIP-22/CAIP-29)
    // @see: https://github.com/ChainAgnostic/CAIPs/tree/master/CAIPs
    if (uri.startsWith('did:nft:')) {
        // convert DID to CAIP
        uri = uri.replace('did:nft:', '').replace(/_/g, '/');
    }
    const [reference, asset_namespace, tokenID] = uri.split('/');
    const [eip_namespace, chainID] = reference.split(':');
    const [erc_namespace, contractAddress] = asset_namespace.split(':');
    if (!eip_namespace || eip_namespace.toLowerCase() !== 'eip155')
        throw new EnsAvatarInvalidNftUriError({ reason: 'Only EIP-155 supported' });
    if (!chainID)
        throw new EnsAvatarInvalidNftUriError({ reason: 'Chain ID not found' });
    if (!contractAddress)
        throw new EnsAvatarInvalidNftUriError({
            reason: 'Contract address not found',
        });
    if (!tokenID)
        throw new EnsAvatarInvalidNftUriError({ reason: 'Token ID not found' });
    if (!erc_namespace)
        throw new EnsAvatarInvalidNftUriError({ reason: 'ERC namespace not found' });
    return {
        chainID: Number.parseInt(chainID),
        namespace: erc_namespace.toLowerCase(),
        contractAddress: contractAddress,
        tokenID,
    };
}
async function getNftTokenUri(client, { nft }) {
    if (nft.namespace === 'erc721') {
        return readContract(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'tokenURI',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: 'tokenId', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'tokenURI',
            args: [BigInt(nft.tokenID)],
        });
    }
    if (nft.namespace === 'erc1155') {
        return readContract(client, {
            address: nft.contractAddress,
            abi: [
                {
                    name: 'uri',
                    type: 'function',
                    stateMutability: 'view',
                    inputs: [{ name: '_id', type: 'uint256' }],
                    outputs: [{ name: '', type: 'string' }],
                },
            ],
            functionName: 'uri',
            args: [BigInt(nft.tokenID)],
        });
    }
    throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}

/*
 * @description Parses an ENS avatar record.
 *
 * @example
 * parseAvatarRecord('eip155:1/erc1155:0xb32979486938aa9694bfc898f35dbed459f44424/10063')
 * 'https://ipfs.io/ipfs/QmSP4nq9fnN9dAiCj42ug9Wa79rqmQerZXZch82VqpiH7U/image.gif'
 *
 * @see https://docs.ens.domains/web/avatars
 *
 */
async function parseAvatarRecord(client, { gatewayUrls, record, }) {
    if (/eip155:/i.test(record))
        return parseNftAvatarUri(client, { gatewayUrls, record });
    return parseAvatarUri({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record, }) {
    // parse NFT URI into properties
    const nft = parseNftUri(record);
    // fetch tokenURI from the NFT contract
    const nftUri = await getNftTokenUri(client, { nft });
    // resolve the URI from the fetched tokenURI
    const { uri: resolvedNftUri, isOnChain, isEncoded, } = resolveAvatarUri({ uri: nftUri, gatewayUrls });
    // if the resolved URI is on chain, return the data
    if (isOnChain &&
        (resolvedNftUri.includes('data:application/json;base64,') ||
            resolvedNftUri.startsWith('{'))) {
        const encodedJson = isEncoded
            ? // if it is encoded, decode it
                atob(resolvedNftUri.replace('data:application/json;base64,', ''))
            : // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
                resolvedNftUri;
        const decoded = JSON.parse(encodedJson);
        return parseAvatarUri({ uri: getJsonImage(decoded), gatewayUrls });
    }
    let uriTokenId = nft.tokenID;
    if (nft.namespace === 'erc1155')
        uriTokenId = uriTokenId.replace('0x', '').padStart(64, '0');
    return getMetadataAvatarUri({
        gatewayUrls,
        uri: resolvedNftUri.replace(/(?:0x)?{id}/, uriTokenId),
    });
}

/**
 * Gets a text record for specified ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsTextParameters}
 * @returns Address for ENS resolver. {@link GetEnsTextReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsText, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const twitterRecord = await getEnsText(client, {
 *   name: normalize('wevm.eth'),
 *   key: 'com.twitter',
 * })
 * // 'wagmi_sh'
 */
async function getEnsText(client, { blockNumber, blockTag, name, key, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = getChainContractAddress({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: universalResolverResolveAbi,
            functionName: 'resolve',
            args: [
                (0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(packetToBytes(name)),
                encodeFunctionData({
                    abi: textResolverAbi,
                    functionName: 'text',
                    args: [namehash(name), key],
                }),
            ],
            blockNumber,
            blockTag,
        };
        const readContractAction = getAction(client, readContract, 'readContract');
        const res = gatewayUrls
            ? await readContractAction({
                ...readContractParameters,
                args: [...readContractParameters.args, gatewayUrls],
            })
            : await readContractAction(readContractParameters);
        if (res[0] === '0x')
            return null;
        const record = decodeFunctionResult({
            abi: textResolverAbi,
            functionName: 'text',
            data: res[0],
        });
        return record === '' ? null : record;
    }
    catch (err) {
        if (strict)
            throw err;
        if (isNullUniversalResolverError(err, 'resolve'))
            return null;
        throw err;
    }
}

/**
 * Gets the avatar of an ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsAvatar
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText) with `key` set to `'avatar'`.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsAvatarParameters}
 * @returns Avatar URI or `null` if not found. {@link GetEnsAvatarReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsAvatar, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensAvatar = await getEnsAvatar(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
 */
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress, }) {
    const record = await getAction(client, getEnsText, 'getEnsText')({
        blockNumber,
        blockTag,
        key: 'avatar',
        name,
        universalResolverAddress,
        gatewayUrls,
        strict,
    });
    if (!record)
        return null;
    try {
        return await parseAvatarRecord(client, {
            record,
            gatewayUrls: assetGatewayUrls,
        });
    }
    catch {
        return null;
    }
}

/**
 * Gets primary name for specified address.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsName
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsNameParameters}
 * @returns Name or `null` if not found. {@link GetEnsNameReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsName } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const ensName = await getEnsName(client, {
 *   address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 * })
 * // 'wevm.eth'
 */
async function getEnsName(client, { address, blockNumber, blockTag, gatewayUrls, strict, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = getChainContractAddress({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    try {
        const readContractParameters = {
            address: universalResolverAddress,
            abi: universalResolverReverseAbi,
            functionName: 'reverse',
            args: [(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(packetToBytes(reverseNode))],
            blockNumber,
            blockTag,
        };
        const readContractAction = getAction(client, readContract, 'readContract');
        const [name, resolvedAddress] = gatewayUrls
            ? await readContractAction({
                ...readContractParameters,
                args: [...readContractParameters.args, gatewayUrls],
            })
            : await readContractAction(readContractParameters);
        if (address.toLowerCase() !== resolvedAddress.toLowerCase())
            return null;
        return name;
    }
    catch (err) {
        if (strict)
            throw err;
        if (isNullUniversalResolverError(err, 'reverse'))
            return null;
        throw err;
    }
}

/**
 * Gets resolver for ENS name.
 *
 * - Docs: https://viem.sh/docs/ens/actions/getEnsResolver
 * - Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens
 *
 * Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.
 *
 * Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize) function for this.
 *
 * @param client - Client to use
 * @param parameters - {@link GetEnsResolverParameters}
 * @returns Address for ENS resolver. {@link GetEnsResolverReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { getEnsResolver, normalize } from 'viem/ens'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const resolverAddress = await getEnsResolver(client, {
 *   name: normalize('wevm.eth'),
 * })
 * // '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
 */
async function getEnsResolver(client, { blockNumber, blockTag, name, universalResolverAddress: universalResolverAddress_, }) {
    let universalResolverAddress = universalResolverAddress_;
    if (!universalResolverAddress) {
        if (!client.chain)
            throw new Error('client chain not configured. universalResolverAddress is required.');
        universalResolverAddress = getChainContractAddress({
            blockNumber,
            chain: client.chain,
            contract: 'ensUniversalResolver',
        });
    }
    const [resolverAddress] = await getAction(client, readContract, 'readContract')({
        address: universalResolverAddress,
        abi: [
            {
                inputs: [{ type: 'bytes' }],
                name: 'findResolver',
                outputs: [{ type: 'address' }, { type: 'bytes32' }],
                stateMutability: 'view',
                type: 'function',
            },
        ],
        functionName: 'findResolver',
        args: [(0,_transactionRequest_be6a8ea9_js__WEBPACK_IMPORTED_MODULE_0__.k)(packetToBytes(name))],
        blockNumber,
        blockTag,
    });
    return resolverAddress;
}

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    normalize: normalize,
    getEnsAddress: getEnsAddress,
    getEnsAvatar: getEnsAvatar,
    getEnsName: getEnsName,
    getEnsResolver: getEnsResolver,
    getEnsText: getEnsText,
    labelhash: labelhash,
    namehash: namehash,
    parseAvatarRecord: parseAvatarRecord,
    packetToBytes: packetToBytes
});


//# sourceMappingURL=index-021f6a62.js.map


/***/ }),

/***/ 873216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ NonceMaxValueError),
/* harmony export */   A: () => (/* binding */ formatUnits),
/* harmony export */   B: () => (/* binding */ BaseError),
/* harmony export */   C: () => (/* binding */ etherUnits),
/* harmony export */   D: () => (/* binding */ assertSize),
/* harmony export */   E: () => (/* binding */ InvalidBytesBooleanError),
/* harmony export */   F: () => (/* binding */ FeeCapTooHighError),
/* harmony export */   G: () => (/* binding */ numberToHex),
/* harmony export */   H: () => (/* binding */ Hash),
/* harmony export */   I: () => (/* binding */ InvalidChainIdError),
/* harmony export */   J: () => (/* binding */ concat),
/* harmony export */   K: () => (/* binding */ padHex),
/* harmony export */   L: () => (/* binding */ boolToHex),
/* harmony export */   M: () => (/* binding */ stringToHex),
/* harmony export */   N: () => (/* binding */ checksumAddress),
/* harmony export */   O: () => (/* binding */ sliceBytes),
/* harmony export */   P: () => (/* binding */ keccak256),
/* harmony export */   Q: () => (/* binding */ ChainDoesNotSupportContract),
/* harmony export */   R: () => (/* binding */ prettyPrint),
/* harmony export */   S: () => (/* binding */ getContractAddress),
/* harmony export */   T: () => (/* binding */ TipAboveFeeCapError),
/* harmony export */   U: () => (/* binding */ formatGwei),
/* harmony export */   V: () => (/* binding */ stringToBytes),
/* harmony export */   W: () => (/* binding */ getUrl),
/* harmony export */   X: () => (/* binding */ ExecutionRevertedError),
/* harmony export */   Y: () => (/* binding */ FeeCapTooLowError),
/* harmony export */   Z: () => (/* binding */ NonceTooHighError),
/* harmony export */   _: () => (/* binding */ NonceTooLowError),
/* harmony export */   a: () => (/* binding */ hexToBigInt),
/* harmony export */   a0: () => (/* binding */ InsufficientFundsError),
/* harmony export */   a1: () => (/* binding */ IntrinsicGasTooHighError),
/* harmony export */   a2: () => (/* binding */ IntrinsicGasTooLowError),
/* harmony export */   a3: () => (/* binding */ TransactionTypeNotSupportedError),
/* harmony export */   a4: () => (/* binding */ UnknownNodeError),
/* harmony export */   a5: () => (/* binding */ InvalidBytesLengthError),
/* harmony export */   a6: () => (/* binding */ FeeConflictError),
/* harmony export */   a7: () => (/* binding */ formatTransactionRequest),
/* harmony export */   a8: () => (/* binding */ ClientChainNotConfiguredError),
/* harmony export */   b: () => (/* binding */ bytesToHex),
/* harmony export */   c: () => (/* binding */ createCursor),
/* harmony export */   d: () => (/* binding */ defineFormatter),
/* harmony export */   e: () => (/* binding */ hexToBytes),
/* harmony export */   f: () => (/* binding */ createView),
/* harmony export */   g: () => (/* binding */ exists),
/* harmony export */   h: () => (/* binding */ hexToNumber),
/* harmony export */   i: () => (/* binding */ isHex),
/* harmony export */   j: () => (/* binding */ toBytes$1),
/* harmony export */   k: () => (/* binding */ toHex),
/* harmony export */   l: () => (/* binding */ slice),
/* harmony export */   m: () => (/* binding */ isAddress),
/* harmony export */   n: () => (/* binding */ InvalidAddressError),
/* harmony export */   o: () => (/* binding */ output),
/* harmony export */   p: () => (/* binding */ InvalidSerializableTransactionError),
/* harmony export */   q: () => (/* binding */ InvalidStorageKeySizeError),
/* harmony export */   r: () => (/* binding */ rotr),
/* harmony export */   s: () => (/* binding */ size),
/* harmony export */   t: () => (/* binding */ toBytes),
/* harmony export */   u: () => (/* binding */ concatHex),
/* harmony export */   v: () => (/* binding */ InvalidLegacyVError),
/* harmony export */   w: () => (/* binding */ wrapConstructor),
/* harmony export */   x: () => (/* binding */ trim),
/* harmony export */   y: () => (/* binding */ defineTransactionRequest),
/* harmony export */   z: () => (/* binding */ pad)
/* harmony export */ });
const version = '2.12.0';

const getContractAddress = (address) => address;
const getUrl = (url) => url;
const getVersion = () => `viem@${version}`;

class BaseError extends Error {
    constructor(shortMessage, args = {}) {
        super();
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
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ViemError'
        });
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: getVersion()
        });
        const details = args.cause instanceof BaseError
            ? args.cause.details
            : args.cause?.message
                ? args.cause.message
                : args.details;
        const docsPath = args.cause instanceof BaseError
            ? args.cause.docsPath || args.docsPath
            : args.docsPath;
        this.message = [
            shortMessage || 'An error occurred.',
            '',
            ...(args.metaMessages ? [...args.metaMessages, ''] : []),
            ...(docsPath
                ? [
                    `Docs: https://viem.sh${docsPath}${args.docsSlug ? `#${args.docsSlug}` : ''}`,
                ]
                : []),
            ...(details ? [`Details: ${details}`] : []),
            `Version: ${this.version}`,
        ].join('\n');
        if (args.cause)
            this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
    walk(fn) {
        return walk(this, fn);
    }
}
function walk(err, fn) {
    if (fn?.(err))
        return err;
    if (err && typeof err === 'object' && 'cause' in err)
        return walk(err.cause, fn);
    return fn ? null : err;
}

class IntegerOutOfRangeError extends BaseError {
    constructor({ max, min, signed, size, value, }) {
        super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? 'signed' : 'unsigned'} ` : ''}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntegerOutOfRangeError'
        });
    }
}
class InvalidBytesBooleanError extends BaseError {
    constructor(bytes) {
        super(`Bytes value "${bytes}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidBytesBooleanError'
        });
    }
}
class SizeOverflowError extends BaseError {
    constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SizeOverflowError'
        });
    }
}

function isHex(value, { strict = true } = {}) {
    if (!value)
        return false;
    if (typeof value !== 'string')
        return false;
    return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith('0x');
}

/**
 * @description Retrieves the size of the value (in bytes).
 *
 * @param value The value (hex or byte array) to retrieve the size of.
 * @returns The size of the value (in bytes).
 */
function size(value) {
    if (isHex(value, { strict: false }))
        return Math.ceil((value.length - 2) / 2);
    return value.length;
}

function trim(hexOrBytes, { dir = 'left' } = {}) {
    let data = typeof hexOrBytes === 'string' ? hexOrBytes.replace('0x', '') : hexOrBytes;
    let sliceLength = 0;
    for (let i = 0; i < data.length - 1; i++) {
        if (data[dir === 'left' ? i : data.length - i - 1].toString() === '0')
            sliceLength++;
        else
            break;
    }
    data =
        dir === 'left'
            ? data.slice(sliceLength)
            : data.slice(0, data.length - sliceLength);
    if (typeof hexOrBytes === 'string') {
        if (data.length === 1 && dir === 'right')
            data = `${data}0`;
        return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
    }
    return data;
}

class SliceOffsetOutOfBoundsError extends BaseError {
    constructor({ offset, position, size, }) {
        super(`Slice ${position === 'start' ? 'starting' : 'ending'} at offset "${offset}" is out-of-bounds (size: ${size}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SliceOffsetOutOfBoundsError'
        });
    }
}
class SizeExceedsPaddingSizeError extends BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SizeExceedsPaddingSizeError'
        });
    }
}
class InvalidBytesLengthError extends BaseError {
    constructor({ size, targetSize, type, }) {
        super(`${type.charAt(0).toUpperCase()}${type
            .slice(1)
            .toLowerCase()} is expected to be ${targetSize} ${type} long, but is ${size} ${type} long.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidBytesLengthError'
        });
    }
}

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
    const hex = `0x${(signed && value < 0
        ? (1n << BigInt(size * 8)) + BigInt(value)
        : value).toString(16)}`;
    if (size)
        return pad(hex, { size });
    return hex;
}
const encoder$1 = /*#__PURE__*/ new TextEncoder();
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
    const value = encoder$1.encode(value_);
    return bytesToHex(value, opts);
}

const encoder = /*#__PURE__*/ new TextEncoder();
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
function toBytes$1(value, opts = {}) {
    if (typeof value === 'number' || typeof value === 'bigint')
        return numberToBytes(value, opts);
    if (typeof value === 'boolean')
        return boolToBytes(value, opts);
    if (isHex(value))
        return hexToBytes(value, opts);
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
function hexToBytes(hex_, opts = {}) {
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
    return hexToBytes(hex);
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
    const bytes = encoder.encode(value);
    if (typeof opts.size === 'number') {
        assertSize(bytes, { size: opts.size });
        return pad(bytes, { dir: 'right', size: opts.size });
    }
    return bytes;
}

function assertSize(hexOrBytes, { size: size$1 }) {
    if (size(hexOrBytes) > size$1)
        throw new SizeOverflowError({
            givenSize: size(hexOrBytes),
            maxSize: size$1,
        });
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

function defineFormatter(type, format) {
    return ({ exclude, format: overrides, }) => {
        return {
            exclude,
            format: (args) => {
                const formatted = format(args);
                if (exclude) {
                    for (const key of exclude) {
                        delete formatted[key];
                    }
                }
                return {
                    ...formatted,
                    ...overrides(args),
                };
            },
            type,
        };
    };
}

class InvalidAddressError extends BaseError {
    constructor({ address }) {
        super(`Address "${address}" is invalid.`, {
            metaMessages: [
                '- Address must be a hex value of 20 bytes (40 hex characters).',
                '- Address must match its checksum counterpart.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAddressError'
        });
    }
}

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
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize)
            this.delete(this.keys().next().value);
        return this;
    }
}

function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
}
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array))
        throw new Error('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}

const U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
const _32n = /* @__PURE__ */ BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const u8a = (a) => a instanceof Uint8Array;
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
// Cast array to view
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
if (!isLE)
    throw new Error('Non little-endian hardware is not supported');
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function utf8ToBytes(str) {
    if (typeof str !== 'string')
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    if (!u8a(data))
        throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
function wrapConstructor(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
}

// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
const _0n = /* @__PURE__ */ BigInt(0);
const _1n = /* @__PURE__ */ BigInt(1);
const _2n = /* @__PURE__ */ BigInt(2);
const _7n = /* @__PURE__ */ BigInt(7);
const _256n = /* @__PURE__ */ BigInt(256);
const _0x71n = /* @__PURE__ */ BigInt(0x71);
for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
    // Pi
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((((round + 1) * (round + 2)) / 2) % 64);
    // Iota
    let t = _0n;
    for (let j = 0; j < 7; j++) {
        R = ((R << _1n) ^ ((R >> _7n) * _0x71n)) % _256n;
        if (R & _2n)
            t ^= _1n << ((_1n << /* @__PURE__ */ BigInt(j)) - _1n);
    }
    _SHA3_IOTA.push(t);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
// Left rotation (without 0, 32, 64)
const rotlH = (h, l, s) => (s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s));
const rotlL = (h, l, s) => (s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s));
// Same as keccakf1600, but allows to skip some rounds
function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for (let round = 24 - rounds; round < 24; round++) {
        // Theta θ
        for (let x = 0; x < 10; x++)
            B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for (let y = 0; y < 50; y += 10) {
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        for (let y = 0; y < 50; y += 10) {
            for (let x = 0; x < 10; x++)
                B[x] = s[y + x];
            for (let x = 0; x < 10; x++)
                s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    B.fill(0);
}
class Keccak extends Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        // Can be passed from user as dkLen
        number(outputLen);
        // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
        if (0 >= this.blockLen || this.blockLen >= 200)
            throw new Error('Sha3 supports only keccak-f1600 function');
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
    }
    keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        exists(this);
        const { blockLen, state } = this;
        data = toBytes(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            for (let i = 0; i < take; i++)
                state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen)
                this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished)
            return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // Do the padding
        state[pos] ^= suffix;
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1)
            this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        exists(this, false);
        bytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len;) {
            if (this.posOut >= blockLen)
                this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
        if (!this.enableXOF)
            throw new Error('XOF is not possible for this instance');
        return this.writeInto(out);
    }
    xof(bytes) {
        number(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        output(out, this);
        if (this.finished)
            throw new Error('digest() was already called');
        this.writeInto(out);
        this.destroy();
        return out;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = true;
        this.state.fill(0);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */
const keccak_256 = /* @__PURE__ */ gen(0x01, 136, 256 / 8);

function keccak256(value, to_) {
    const to = to_ || 'hex';
    const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes$1(value) : value);
    if (to === 'bytes')
        return bytes;
    return toHex(bytes);
}

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

const addressRegex = /^0x[a-fA-F0-9]{40}$/;
const isAddressCache = /*#__PURE__*/ new LruMap(8192);
function isAddress(address, options) {
    const { strict = true } = options ?? {};
    if (isAddressCache.has(address))
        return isAddressCache.get(address);
    const result = (() => {
        if (!addressRegex.test(address))
            return false;
        if (address.toLowerCase() === address)
            return true;
        if (strict)
            return checksumAddress(address) === address;
        return true;
    })();
    isAddressCache.set(address, result);
    return result;
}

function concat(values) {
    if (typeof values[0] === 'string')
        return concatHex(values);
    return concatBytes(values);
}
function concatBytes(values) {
    let length = 0;
    for (const arr of values) {
        length += arr.length;
    }
    const result = new Uint8Array(length);
    let offset = 0;
    for (const arr of values) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}
function concatHex(values) {
    return `0x${values.reduce((acc, x) => acc + x.replace('0x', ''), '')}`;
}

class NegativeOffsetError extends BaseError {
    constructor({ offset }) {
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NegativeOffsetError'
        });
    }
}
class PositionOutOfBoundsError extends BaseError {
    constructor({ length, position }) {
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PositionOutOfBoundsError'
        });
    }
}
class RecursiveReadLimitExceededError extends BaseError {
    constructor({ count, limit }) {
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RecursiveReadLimitExceededError'
        });
    }
}

const staticCursor = {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new RecursiveReadLimitExceededError({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit,
            });
    },
    assertPosition(position) {
        if (position < 0 || position > this.bytes.length - 1)
            throw new PositionOutOfBoundsError({
                length: this.bytes.length,
                position,
            });
    },
    decrementPosition(offset) {
        if (offset < 0)
            throw new NegativeOffsetError({ offset });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount(position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition(offset) {
        if (offset < 0)
            throw new NegativeOffsetError({ offset });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes(length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return ((this.dataView.getUint16(position) << 8) +
            this.dataView.getUint8(position + 2));
    },
    inspectUint32(position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte(byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes(bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8(value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16(value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24(value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32(value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes(length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32() {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining() {
        return this.bytes.length - this.position;
    },
    setPosition(position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return () => (this.position = oldPosition);
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
            return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0)
            this.recursiveReadCount++;
    },
};
function createCursor(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}

const etherUnits = {
    gwei: 9,
    wei: 18,
};
const gweiUnits = {
    ether: -9,
    wei: 9,
};

/**
 *  Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number..
 *
 * - Docs: https://viem.sh/docs/utilities/formatUnits
 *
 * @example
 * import { formatUnits } from 'viem'
 *
 * formatUnits(420000000000n, 9)
 * // '420'
 */
function formatUnits(value, decimals) {
    let display = value.toString();
    const negative = display.startsWith('-');
    if (negative)
        display = display.slice(1);
    display = display.padStart(decimals, '0');
    let [integer, fraction] = [
        display.slice(0, display.length - decimals),
        display.slice(display.length - decimals),
    ];
    fraction = fraction.replace(/(0+)$/, '');
    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;
}

/**
 * Converts numerical wei to a string representation of gwei.
 *
 * - Docs: https://viem.sh/docs/utilities/formatGwei
 *
 * @example
 * import { formatGwei } from 'viem'
 *
 * formatGwei(1000000000n)
 * // '1'
 */
function formatGwei(wei, unit = 'wei') {
    return formatUnits(wei, gweiUnits[unit]);
}

function prettyPrint(args) {
    const entries = Object.entries(args)
        .map(([key, value]) => {
        if (value === undefined || value === false)
            return null;
        return [key, value];
    })
        .filter(Boolean);
    const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
    return entries
        .map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`)
        .join('\n');
}
class FeeConflictError extends BaseError {
    constructor() {
        super([
            'Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.',
            'Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.',
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeConflictError'
        });
    }
}
class InvalidLegacyVError extends BaseError {
    constructor({ v }) {
        super(`Invalid \`v\` value "${v}". Expected 27 or 28.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidLegacyVError'
        });
    }
}
class InvalidSerializableTransactionError extends BaseError {
    constructor({ transaction }) {
        super('Cannot infer a transaction type from provided transaction.', {
            metaMessages: [
                'Provided Transaction:',
                '{',
                prettyPrint(transaction),
                '}',
                '',
                'To infer the type, either provide:',
                '- a `type` to the Transaction, or',
                '- an EIP-1559 Transaction with `maxFeePerGas`, or',
                '- an EIP-2930 Transaction with `gasPrice` & `accessList`, or',
                '- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or',
                '- a Legacy Transaction with `gasPrice`',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSerializableTransactionError'
        });
    }
}
class InvalidStorageKeySizeError extends BaseError {
    constructor({ storageKey }) {
        super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStorageKeySizeError'
        });
    }
}

class ChainDoesNotSupportContract extends BaseError {
    constructor({ blockNumber, chain, contract, }) {
        super(`Chain "${chain.name}" does not support contract "${contract.name}".`, {
            metaMessages: [
                'This could be due to any of the following:',
                ...(blockNumber &&
                    contract.blockCreated &&
                    contract.blockCreated > blockNumber
                    ? [
                        `- The contract "${contract.name}" was not deployed until block ${contract.blockCreated} (current block ${blockNumber}).`,
                    ]
                    : [
                        `- The chain does not have the contract "${contract.name}" configured.`,
                    ]),
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainDoesNotSupportContract'
        });
    }
}
class ClientChainNotConfiguredError extends BaseError {
    constructor() {
        super('No chain was provided to the Client.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ClientChainNotConfiguredError'
        });
    }
}
class InvalidChainIdError extends BaseError {
    constructor({ chainId }) {
        super(typeof chainId === 'number'
            ? `Chain ID "${chainId}" is invalid.`
            : 'Chain ID is invalid.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidChainIdError'
        });
    }
}

class ExecutionRevertedError extends BaseError {
    constructor({ cause, message, } = {}) {
        const reason = message
            ?.replace('execution reverted: ', '')
            ?.replace('execution reverted', '');
        super(`Execution reverted ${reason ? `with reason: ${reason}` : 'for an unknown reason'}.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ExecutionRevertedError'
        });
    }
}
Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
});
Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
});
class FeeCapTooHighError extends BaseError {
    constructor({ cause, maxFeePerGas, } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ''}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeCapTooHigh'
        });
    }
}
Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class FeeCapTooLowError extends BaseError {
    constructor({ cause, maxFeePerGas, } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)}` : ''} gwei) cannot be lower than the block base fee.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FeeCapTooLow'
        });
    }
}
Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class NonceTooHighError extends BaseError {
    constructor({ cause, nonce, } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is higher than the next one expected.`, { cause });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceTooHighError'
        });
    }
}
Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
});
class NonceTooLowError extends BaseError {
    constructor({ cause, nonce, } = {}) {
        super([
            `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}is lower than the current nonce of the account.`,
            'Try increasing the nonce or find the latest nonce with `getTransactionCount`.',
        ].join('\n'), { cause });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceTooLowError'
        });
    }
}
Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
});
class NonceMaxValueError extends BaseError {
    constructor({ cause, nonce, } = {}) {
        super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ''}exceeds the maximum allowed nonce.`, { cause });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'NonceMaxValueError'
        });
    }
}
Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
});
class InsufficientFundsError extends BaseError {
    constructor({ cause } = {}) {
        super([
            'The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.',
        ].join('\n'), {
            cause,
            metaMessages: [
                'This error could arise when the account does not have enough funds to:',
                ' - pay for the total gas fee,',
                ' - pay for the value to send.',
                ' ',
                'The cost of the transaction is calculated as `gas * gas fee + value`, where:',
                ' - `gas` is the amount of gas needed for transaction to execute,',
                ' - `gas fee` is the gas fee,',
                ' - `value` is the amount of ether to send to the recipient.',
            ],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InsufficientFundsError'
        });
    }
}
Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds/
});
class IntrinsicGasTooHighError extends BaseError {
    constructor({ cause, gas, } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction exceeds the limit allowed for the block.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntrinsicGasTooHighError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
});
class IntrinsicGasTooLowError extends BaseError {
    constructor({ cause, gas, } = {}) {
        super(`The amount of gas ${gas ? `(${gas}) ` : ''}provided for the transaction is too low.`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'IntrinsicGasTooLowError'
        });
    }
}
Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
});
class TransactionTypeNotSupportedError extends BaseError {
    constructor({ cause }) {
        super('The transaction type is not supported for this chain.', {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionTypeNotSupportedError'
        });
    }
}
Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
});
class TipAboveFeeCapError extends BaseError {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas, } = {}) {
        super([
            `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas
                ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei`
                : ''}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ''}).`,
        ].join('\n'), {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TipAboveFeeCapError'
        });
    }
}
Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class UnknownNodeError extends BaseError {
    constructor({ cause }) {
        super(`An error occurred while executing: ${cause?.shortMessage}`, {
            cause,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownNodeError'
        });
    }
}

/**
 * @description Returns a section of the hex or byte array given a start/end bytes offset.
 *
 * @param value The hex or byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function slice(value, start, end, { strict } = {}) {
    if (isHex(value, { strict: false }))
        return sliceHex(value, start, end, {
            strict,
        });
    return sliceBytes(value, start, end, {
        strict,
    });
}
function assertStartOffset(value, start) {
    if (typeof start === 'number' && start > 0 && start > size(value) - 1)
        throw new SliceOffsetOutOfBoundsError({
            offset: start,
            position: 'start',
            size: size(value),
        });
}
function assertEndOffset(value, start, end) {
    if (typeof start === 'number' &&
        typeof end === 'number' &&
        size(value) !== end - start) {
        throw new SliceOffsetOutOfBoundsError({
            offset: end,
            position: 'end',
            size: size(value),
        });
    }
}
/**
 * @description Returns a section of the byte array given a start/end bytes offset.
 *
 * @param value The byte array to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceBytes(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = value_.slice(start, end);
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}
/**
 * @description Returns a section of the hex value given a start/end bytes offset.
 *
 * @param value The hex value to slice.
 * @param start The start offset (in bytes).
 * @param end The end offset (in bytes).
 */
function sliceHex(value_, start, end, { strict } = {}) {
    assertStartOffset(value_, start);
    const value = `0x${value_
        .replace('0x', '')
        .slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
    if (strict)
        assertEndOffset(value, start, end);
    return value;
}

const rpcTransactionType = {
    legacy: '0x0',
    eip2930: '0x1',
    eip1559: '0x2',
    eip4844: '0x3',
};
function formatTransactionRequest(request) {
    const rpcRequest = {};
    if (typeof request.accessList !== 'undefined')
        rpcRequest.accessList = request.accessList;
    if (typeof request.blobVersionedHashes !== 'undefined')
        rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
    if (typeof request.blobs !== 'undefined') {
        if (typeof request.blobs[0] !== 'string')
            rpcRequest.blobs = request.blobs.map((x) => bytesToHex(x));
        else
            rpcRequest.blobs = request.blobs;
    }
    if (typeof request.data !== 'undefined')
        rpcRequest.data = request.data;
    if (typeof request.from !== 'undefined')
        rpcRequest.from = request.from;
    if (typeof request.gas !== 'undefined')
        rpcRequest.gas = numberToHex(request.gas);
    if (typeof request.gasPrice !== 'undefined')
        rpcRequest.gasPrice = numberToHex(request.gasPrice);
    if (typeof request.maxFeePerBlobGas !== 'undefined')
        rpcRequest.maxFeePerBlobGas = numberToHex(request.maxFeePerBlobGas);
    if (typeof request.maxFeePerGas !== 'undefined')
        rpcRequest.maxFeePerGas = numberToHex(request.maxFeePerGas);
    if (typeof request.maxPriorityFeePerGas !== 'undefined')
        rpcRequest.maxPriorityFeePerGas = numberToHex(request.maxPriorityFeePerGas);
    if (typeof request.nonce !== 'undefined')
        rpcRequest.nonce = numberToHex(request.nonce);
    if (typeof request.to !== 'undefined')
        rpcRequest.to = request.to;
    if (typeof request.type !== 'undefined')
        rpcRequest.type = rpcTransactionType[request.type];
    if (typeof request.value !== 'undefined')
        rpcRequest.value = numberToHex(request.value);
    return rpcRequest;
}
const defineTransactionRequest = /*#__PURE__*/ defineFormatter('transactionRequest', formatTransactionRequest);


//# sourceMappingURL=transactionRequest-be6a8ea9.js.map


/***/ })

};
;