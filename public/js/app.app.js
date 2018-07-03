(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["onix"] = factory();
	else
		root["onix"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_arrayMap.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayMap);


/***/ }),

/***/ "./node_modules/lodash-es/_asciiSize.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_asciiSize.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseProperty.js */ "./node_modules/lodash-es/_baseProperty.js");


/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = Object(_baseProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])('length');

/* harmony default export */ __webpack_exports__["default"] = (asciiSize);


/***/ }),

/***/ "./node_modules/lodash-es/_asciiToArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_asciiToArray.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/* harmony default export */ __webpack_exports__["default"] = (asciiToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_baseClamp.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClamp.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

/* harmony default export */ __webpack_exports__["default"] = (baseClamp);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

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
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseMean.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseMean.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSum.js */ "./node_modules/lodash-es/_baseSum.js");


/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * The base implementation of `_.mean` and `_.meanBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the mean.
 */
function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (Object(_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, iteratee) / length) : NAN;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMean);


/***/ }),

/***/ "./node_modules/lodash-es/_baseProperty.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseProperty.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseProperty);


/***/ }),

/***/ "./node_modules/lodash-es/_baseRepeat.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseRepeat.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(string, n) {
  var result = '';
  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
    return result;
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string;
    }
    n = nativeFloor(n / 2);
    if (n) {
      string += string;
    }
  } while (n);

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseRepeat);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSlice.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseSlice.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSlice);


/***/ }),

/***/ "./node_modules/lodash-es/_baseSum.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseSum.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSum);


/***/ }),

/***/ "./node_modules/lodash-es/_baseToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, baseToString) + '';
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseToString);


/***/ }),

/***/ "./node_modules/lodash-es/_castSlice.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_castSlice.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/lodash-es/_baseSlice.js");


/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, start, end);
}

/* harmony default export */ __webpack_exports__["default"] = (castSlice);


/***/ }),

/***/ "./node_modules/lodash-es/_createPadding.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_createPadding.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseRepeat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRepeat.js */ "./node_modules/lodash-es/_baseRepeat.js");
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");
/* harmony import */ var _castSlice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_castSlice.js */ "./node_modules/lodash-es/_castSlice.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _stringSize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stringSize.js */ "./node_modules/lodash-es/_stringSize.js");
/* harmony import */ var _stringToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stringToArray.js */ "./node_modules/lodash-es/_stringToArray.js");







/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? Object(_baseRepeat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chars, length) : chars;
  }
  var result = Object(_baseRepeat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(chars, nativeCeil(length / Object(_stringSize_js__WEBPACK_IMPORTED_MODULE_4__["default"])(chars)));
  return Object(_hasUnicode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(chars)
    ? Object(_castSlice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_stringToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(result), 0, length).join('')
    : result.slice(0, length);
}

/* harmony default export */ __webpack_exports__["default"] = (createPadding);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

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

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_hasUnicode.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hasUnicode.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/* harmony default export */ __webpack_exports__["default"] = (hasUnicode);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

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

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_stringSize.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stringSize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asciiSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asciiSize.js */ "./node_modules/lodash-es/_asciiSize.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _unicodeSize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unicodeSize.js */ "./node_modules/lodash-es/_unicodeSize.js");




/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return Object(_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
    ? Object(_unicodeSize_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string)
    : Object(_asciiSize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
}

/* harmony default export */ __webpack_exports__["default"] = (stringSize);


/***/ }),

/***/ "./node_modules/lodash-es/_stringToArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_stringToArray.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asciiToArray.js */ "./node_modules/lodash-es/_asciiToArray.js");
/* harmony import */ var _hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasUnicode.js */ "./node_modules/lodash-es/_hasUnicode.js");
/* harmony import */ var _unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_unicodeToArray.js */ "./node_modules/lodash-es/_unicodeToArray.js");




/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return Object(_hasUnicode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string)
    ? Object(_unicodeToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string)
    : Object(_asciiToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string);
}

/* harmony default export */ __webpack_exports__["default"] = (stringToArray);


/***/ }),

/***/ "./node_modules/lodash-es/_unicodeSize.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_unicodeSize.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (unicodeSize);


/***/ }),

/***/ "./node_modules/lodash-es/_unicodeToArray.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_unicodeToArray.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/* harmony default export */ __webpack_exports__["default"] = (unicodeToArray);


/***/ }),

/***/ "./node_modules/lodash-es/identity.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/identity.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ __webpack_exports__["default"] = (identity);


/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

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
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/mean.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/mean.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseMean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseMean.js */ "./node_modules/lodash-es/_baseMean.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/lodash-es/identity.js");



/**
 * Computes the mean of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the mean.
 * @example
 *
 * _.mean([4, 2, 8, 6]);
 * // => 5
 */
function mean(array) {
  return Object(_baseMean_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (mean);


/***/ }),

/***/ "./node_modules/lodash-es/padEnd.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/padEnd.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPadding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPadding.js */ "./node_modules/lodash-es/_createPadding.js");
/* harmony import */ var _stringSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringSize.js */ "./node_modules/lodash-es/_stringSize.js");
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toInteger.js */ "./node_modules/lodash-es/toInteger.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");





/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padEnd('abc', 6);
 * // => 'abc   '
 *
 * _.padEnd('abc', 6, '_-');
 * // => 'abc_-_'
 *
 * _.padEnd('abc', 3);
 * // => 'abc'
 */
function padEnd(string, length, chars) {
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string);
  length = Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_2__["default"])(length);

  var strLength = length ? Object(_stringSize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string) : 0;
  return (length && strLength < length)
    ? (string + Object(_createPadding_js__WEBPACK_IMPORTED_MODULE_0__["default"])(length - strLength, chars))
    : string;
}

/* harmony default export */ __webpack_exports__["default"] = (padEnd);


/***/ }),

/***/ "./node_modules/lodash-es/padStart.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/padStart.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPadding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createPadding.js */ "./node_modules/lodash-es/_createPadding.js");
/* harmony import */ var _stringSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stringSize.js */ "./node_modules/lodash-es/_stringSize.js");
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toInteger.js */ "./node_modules/lodash-es/toInteger.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");





/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padStart('abc', 6);
 * // => '   abc'
 *
 * _.padStart('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padStart('abc', 3);
 * // => 'abc'
 */
function padStart(string, length, chars) {
  string = Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(string);
  length = Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_2__["default"])(length);

  var strLength = length ? Object(_stringSize_js__WEBPACK_IMPORTED_MODULE_1__["default"])(string) : 0;
  return (length && strLength < length)
    ? (Object(_createPadding_js__WEBPACK_IMPORTED_MODULE_0__["default"])(length - strLength, chars) + string)
    : string;
}

/* harmony default export */ __webpack_exports__["default"] = (padStart);


/***/ }),

/***/ "./node_modules/lodash-es/toFinite.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toFinite.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (toFinite);


/***/ }),

/***/ "./node_modules/lodash-es/toInteger.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/toInteger.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite.js */ "./node_modules/lodash-es/toFinite.js");


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = Object(_toFinite_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (toInteger);


/***/ }),

/***/ "./node_modules/lodash-es/toNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return NAN;
  }
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["default"] = (toNumber);


/***/ }),

/***/ "./node_modules/lodash-es/toSafeInteger.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/toSafeInteger.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClamp.js */ "./node_modules/lodash-es/_baseClamp.js");
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toInteger.js */ "./node_modules/lodash-es/toInteger.js");



/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Converts `value` to a safe integer. A safe integer can be compared and
 * represented correctly.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toSafeInteger(3.2);
 * // => 3
 *
 * _.toSafeInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toSafeInteger(Infinity);
 * // => 9007199254740991
 *
 * _.toSafeInteger('3.2');
 * // => 3
 */
function toSafeInteger(value) {
  return value
    ? Object(_baseClamp_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
    : (value === 0 ? value : 0);
}

/* harmony default export */ __webpack_exports__["default"] = (toSafeInteger);


/***/ }),

/***/ "./node_modules/lodash-es/toString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (toString);


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Intl.ts":
/*!*********************!*\
  !*** ./src/Intl.ts ***!
  \*********************/
/*! exports provided: Intl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intl", function() { return Intl; });
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);

var defaultLocale = 'ru-ru';
var Intl = /** @class */ (function () {
    function Intl() {
    }
    Intl.currentLocale = defaultLocale;
    Intl.categories = {};
    Intl.intlInitialized = false;
    Intl.setLocale = function (value) {
        if (value == "en" || value == "en-us" || value == "en-uk") {
            Intl.currentLocale = 'en-us';
        }
        Intl.currentLocale = defaultLocale;
        return Intl.currentLocale;
    };
    Intl.safeT = function (category, locale, key) {
        var result = "";
        if (Intl.categories[category] && Intl.categories[category][locale]) {
            result = Intl.categories[category][locale][key];
        }
        return result;
    };
    Intl.safeTS = function (category, locale, key) {
        var result = [];
        if (Intl.categories[category] && Intl.categories[category][locale]) {
            result = Intl.categories[category][locale][key];
        }
        return result;
    };
    Intl.t = function (category, key) {
        var result = Intl.safeT(category, Intl.currentLocale, key);
        if (!result) {
            result = Intl.safeT(category, defaultLocale, key);
        }
        warning__WEBPACK_IMPORTED_MODULE_0__(result !== null, "Empty string for category " + category + " and key " + key + ".");
        return result;
    };
    Intl.ts = function (category, key) {
        var result = Intl.safeTS(category, Intl.currentLocale, key);
        if (!result) {
            result = Intl.safeTS(category, defaultLocale, key);
        }
        warning__WEBPACK_IMPORTED_MODULE_0__(result !== null, "Empty string for category " + category + " and key " + key + ".");
        return result;
    };
    Intl.registerStrings = function (category, strings) {
        if (!Intl.categories[category]) {
            Intl.categories[category] = strings;
        }
        else {
            for (var lang in strings) {
                if (!Intl.categories[category][lang]) {
                    Intl.categories[category][lang] = {};
                }
                var langCat = strings[lang];
                for (var key in langCat) {
                    Intl.categories[category][lang][key] = langCat[key];
                }
            }
        }
    };
    Intl.register = function () {
        if (!Intl.intlInitialized) {
            Intl.registerStrings('app', {
                'ru-ru': {
                    time_lessone: "менее 1",
                    time_empty: "---",
                    time_nolabel: ["", "", "", ""],
                    time_days: ["дн.", "день", "дня", "дней"],
                    time_hours: ["ч.", "час", "часа", "часов"],
                    time_minutes: ["мин.", "минута", "минуты", "минут"],
                    time_seconds: ["сек.", "секунда", "секунды", "секунд"]
                },
                'en-us': {
                    time_lessone: "less 1",
                    time_empty: "---",
                    time_nolabel: ["", "", "", ""],
                    time_days: ["d.", "day", "days", "days"],
                    time_hours: ["h.", "hour", "hours", "hours"],
                    time_minutes: ["m.", "minute", "minutes", "minutes"],
                    time_seconds: ["sec.", "second", "seconds", "seconds"]
                }
            });
            Intl.intlInitialized = true;
        }
    };
    return Intl;
}());

Intl.setLocale(window.navigator.language);


/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/*! exports provided: LoggerClass, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerClass", function() { return LoggerClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
var wnd = window;
var FALSE = false;
// some convenient shortcuts.
var aps = Array.prototype.slice;
var con = wnd.console;
var callback_func = null;
var callback_force = FALSE;
// Set default level
var log_level = 9;
// logging methods, in "priority order". Not all console implementations
// will utilize these, but they will be used in the callback passed to
// setCallback.
var log_methods = ["error", "warn", "info", "debug", "log"];
// pass these methods through to the console if they exist, otherwise just
// fail gracefully. These methods are provided for convenience.
var pass_methods = "assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" ");
// logs are stored here so that they can be recalled as necessary.
var logs = [];
// determine if the level is visible given the current log_level.
function is_level(level) {
    return log_level > 0
        ? log_level > level
        : log_methods.length + log_level <= level;
}
// execute the callback function if set.
function exec_callback(args) {
    if (callback_func && (callback_force || !con || !con.log)) {
        callback_func.apply(wnd, args);
    }
}
var LoggerClass = /** @class */ (function () {
    function LoggerClass() {
        var idx = pass_methods.length;
        while (--idx >= 0) {
            this.callPassThroughMethod(pass_methods[idx]);
        }
        idx = log_methods.length;
        while (--idx >= 0) {
            this.setLevelFunctions(idx, log_methods[idx]);
        }
    }
    LoggerClass.prototype.error = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.warn = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.info = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.debug = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.log = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.callPassThroughMethod = function (method) {
        // generate pass-through methods. These methods will be called, if they
        // exist, as long as the logging level is non-zero.
        this[method] = function () {
            if (log_level !== 0 && con && con[method]) {
                con[method].apply(con, arguments);
            }
        };
    };
    LoggerClass.prototype.setLevelFunctions = function (idx, level) {
        this[level] = function () {
            var args = aps.call(arguments);
            var log_arr = [level].concat(args);
            logs.push(log_arr);
            exec_callback(log_arr);
            if (!con || !is_level(idx)) {
                return;
            }
            var arg_norm = (args.length === 1) ? args[0] : args;
            con.firebug ? con[level].apply(wnd, arg_norm)
                : con[level] ? con[level](arg_norm)
                    : con.log(arg_norm);
        };
    };
    LoggerClass.prototype.setCallback = function () {
        var args = aps.call(arguments), max = logs.length, i = max;
        callback_func = args.shift() || null;
        callback_force = typeof args[0] === "boolean" ? args.shift() : FALSE;
        i -= typeof args[0] === "number" ? args.shift() : max;
        while (i < max) {
            exec_callback(logs[i++]);
        }
    };
    ;
    // priority levels:
    // log (1) < debug (2) < info (3) < warn (4) < error (5)
    LoggerClass.prototype.setLevel = function (level) {
        log_level = level;
    };
    return LoggerClass;
}());

var Logger = new LoggerClass();
if (false) {}


/***/ }),

/***/ "./src/events/Event.ts":
/*!*****************************!*\
  !*** ./src/events/Event.ts ***!
  \*****************************/
/*! exports provided: Event, Event1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event1", function() { return Event1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _EventArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventArgs */ "./src/events/EventArgs.ts");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandler */ "./src/events/EventHandler.ts");



var Event = /** @class */ (function () {
    /**
     * constructor
     */
    function Event() {
        this._type = "Event";
        this.OnHandlerAttached = function () { };
        this.OnHandlerAttachedContext = null;
        this.OnHandlerDettached = function () { };
        this.OnHandlerDettachedContext = null;
        this.handlers = [];
    }
    /**
     * Determines whether the specified handler is bound to the event.
     */
    Event.prototype.hasBinding = function (handler) {
        return this.handlers.indexOf(handler) > -1;
    };
    /**
     * Determines whether the Event has active bindings.
     */
    Event.prototype.hasBindings = function () {
        return this.handlers.length > 0;
    };
    /**
     * Associates the handler with the Event object.
     * @param handler Event handler.
     */
    Event.prototype.bind = function (handler) {
        if (!this.hasBinding(handler)) {
            this.handlers.push(handler);
            if (this.OnHandlerAttached !== null) {
                this.OnHandlerAttached.call(this.OnHandlerAttachedContext);
            }
        }
    };
    /**
     * Associates the event handler with the Event object to execute no more than the specified number of times.
     * After the specified number of times, the action is disconnected from the handler.
     * @param handler Event handler.
     * @param triggerCount Number of calls before the handler is disconnected.
     */
    Event.prototype.bindFor = function (handler, triggerCount) {
        var that = this;
        var triggers = 0;
        var wire = new _EventHandler__WEBPACK_IMPORTED_MODULE_2__["EventHandler"](function (args) {
            if (++triggers >= triggerCount) {
                that.unbind(wire);
            }
            handler.invoke(args);
        }, handler.Context);
        this.handlers.push(wire);
    };
    /**
     * Disconnects the specified handler from the Event.
     * @param handler Event handler.
     */
    Event.prototype.unbind = function (handler) {
        for (var i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === handler) {
                this.handlers.splice(i, 1);
                return;
            }
        }
    };
    /**
     * Executes all linked handlers.
     */
    Event.prototype.trigger = function (args) {
        var handlers;
        if (this.hasBindings()) {
            handlers = this.handlers.slice(0);
            for (var i = 0; i < handlers.length; i++) {
                handlers[i].invoke(args);
            }
        }
    };
    /**
     * Make arguments and execute
     * @param sender Event sender
     * @param data Event data
     */
    Event.prototype.fire = function (sender, data) {
        this.trigger(new _EventArgs__WEBPACK_IMPORTED_MODULE_1__["EventArgs"](sender));
    };
    /**
     * Deletes an event and deletes the binding of all related handlers.
     */
    Event.prototype.dispose = function () {
        this.handlers = [];
    };
    return Event;
}());

var Event1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Event1, _super);
    function Event1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = "Event1";
        /**
         * Event handlers
         */
        _this.Handlers = [];
        return _this;
    }
    /**
     * Associates the handler with the Event object.
     * @param handler Event handler.
     */
    Event1.prototype.bind = function (handler) {
        _super.prototype.bind.call(this, handler);
    };
    /**
     * Disconnects the specified handler from the Event.
     * @param handler Event handler.
     */
    Event1.prototype.unbind = function (handler) {
        _super.prototype.unbind.call(this, handler);
    };
    /**
     * Determines whether the specified handler is bound to the event.
     */
    Event1.prototype.hasBinding = function (handler) {
        return _super.prototype.hasBinding.call(this, handler);
    };
    /**
     * Executes all linked handlers.
     */
    Event1.prototype.trigger = function (args) {
        _super.prototype.trigger.call(this, args);
    };
    /**
     * Make arguments and execute
     * @param sender Event sender
     * @param data Event data
     */
    Event1.prototype.fire = function (sender, data) {
        this.trigger(new _EventArgs__WEBPACK_IMPORTED_MODULE_1__["EventArgs1"](sender, data));
    };
    return Event1;
}(Event));



/***/ }),

/***/ "./src/events/EventArgs.ts":
/*!*********************************!*\
  !*** ./src/events/EventArgs.ts ***!
  \*********************************/
/*! exports provided: EventArgs, EventArgs1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return EventArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventArgs1", function() { return EventArgs1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EventArgs = /** @class */ (function () {
    /**
     * constructor
     */
    function EventArgs(Sender) {
        this.Sender = Sender;
    }
    return EventArgs;
}());

var EventArgs1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EventArgs1, _super);
    /**
     * constructor
     */
    function EventArgs1(Sender, EventData) {
        var _this = _super.call(this, Sender) || this;
        _this.EventData = EventData;
        return _this;
    }
    return EventArgs1;
}(EventArgs));



/***/ }),

/***/ "./src/events/EventHandler.ts":
/*!************************************!*\
  !*** ./src/events/EventHandler.ts ***!
  \************************************/
/*! exports provided: EventHandler, EventHandler1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler1", function() { return EventHandler1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EventHandler = /** @class */ (function () {
    /**
     * constructor
     */
    function EventHandler(Callback, Context) {
        this.Callback = Callback;
        this.Context = Context;
    }
    /**
     * Calls the method for handling events in the context of the called object.
     */
    EventHandler.prototype.invoke = function (args) {
        this.Callback.call(this.Context, args);
    };
    return EventHandler;
}());

var EventHandler1 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EventHandler1, _super);
    /**
     * constructor
     */
    function EventHandler1(Callback, Context) {
        return _super.call(this, Callback, Context) || this;
    }
    /**
     * Calls the method for handling events in the context of the called object.
     */
    EventHandler1.prototype.invoke = function (args) {
        _super.prototype.invoke.call(this, args);
    };
    return EventHandler1;
}(EventHandler));



/***/ }),

/***/ "./src/events/index.ts":
/*!*****************************!*\
  !*** ./src/events/index.ts ***!
  \*****************************/
/*! exports provided: EventArgs, EventArgs1, EventHandler, EventHandler1, Event, Event1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventArgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventArgs */ "./src/events/EventArgs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return _EventArgs__WEBPACK_IMPORTED_MODULE_0__["EventArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventArgs1", function() { return _EventArgs__WEBPACK_IMPORTED_MODULE_0__["EventArgs1"]; });

/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandler */ "./src/events/EventHandler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler1", function() { return _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler1"]; });

/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event */ "./src/events/Event.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _Event__WEBPACK_IMPORTED_MODULE_2__["Event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event1", function() { return _Event__WEBPACK_IMPORTED_MODULE_2__["Event1"]; });






/***/ }),

/***/ "./src/fn/array/Grep.ts":
/*!******************************!*\
  !*** ./src/fn/array/Grep.ts ***!
  \******************************/
/*! exports provided: grep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grep", function() { return grep; });
var grep = function (elems, callback, invert) {
    var callbackInverse;
    var matches = [];
    var i = 0;
    var length = elems.length;
    var callbackExpect = !invert;
    // Go through the array, only saving the items
    // that pass the validator function
    for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
            matches.push(elems[i]);
        }
    }
    return matches;
};


/***/ }),

/***/ "./src/fn/array/Pushif.ts":
/*!********************************!*\
  !*** ./src/fn/array/Pushif.ts ***!
  \********************************/
/*! exports provided: pushif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushif", function() { return pushif; });
var pushif = function (a, cond, val) {
    if (cond) {
        a.push(val);
    }
};


/***/ }),

/***/ "./src/fn/array/index.ts":
/*!*******************************!*\
  !*** ./src/fn/array/index.ts ***!
  \*******************************/
/*! exports provided: grep, pushif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grep */ "./src/fn/array/Grep.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grep", function() { return _Grep__WEBPACK_IMPORTED_MODULE_0__["grep"]; });

/* harmony import */ var _Pushif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pushif */ "./src/fn/array/Pushif.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushif", function() { return _Pushif__WEBPACK_IMPORTED_MODULE_1__["pushif"]; });





/***/ }),

/***/ "./src/fn/date/DateToUTCString.ts":
/*!****************************************!*\
  !*** ./src/fn/date/DateToUTCString.ts ***!
  \****************************************/
/*! exports provided: dateToUTCString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToUTCString", function() { return dateToUTCString; });
var valueToTwoDigits = function (value) {
    return ((value < 10) ? '0' : '') + value;
};
// ===================== Date ========================
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dateToUTCString = function (date) {
    var time = valueToTwoDigits(date.getUTCHours()) + ':' + valueToTwoDigits(date.getUTCMinutes()) + ':' + valueToTwoDigits(date.getUTCSeconds());
    return days[date.getUTCDay()] + ', ' + valueToTwoDigits(date.getUTCDate()) + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear() + ' ' + time + ' GMT';
};


/***/ }),

/***/ "./src/fn/date/FormatTimestamp.ts":
/*!****************************************!*\
  !*** ./src/fn/date/FormatTimestamp.ts ***!
  \****************************************/
/*! exports provided: formatTimestamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimestamp", function() { return formatTimestamp; });
/* harmony import */ var _Intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Intl */ "./src/Intl.ts");

var secondsInDay = 86400;
/**
 * Format timestamp
 * @param timestamp timestamp as millisecinds
 */
var formatTimestamp = function (timestamp) {
    _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].register();
    if (isNaN(timestamp)) {
        return _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].t("app", "time_empty");
    }
    var pad = function (n, c) {
        if ((n = n + "").length < c) {
            return new Array(++c - n.length).join("0") + n;
        }
        else {
            return n;
        }
    };
    var numWithLabel = function (n, label, padlen, small, less, delimeter) {
        if (n > 0) {
            if (small) {
                return "" + pad(n, padlen) + delimeter + label[0];
            }
            if ((n > 10) && (n < 20)) {
                return "" + pad(n, padlen) + delimeter + label[3];
            }
            var d = n % 10;
            if (d == 1) {
                return "" + pad(n, padlen) + delimeter + label[1];
            }
            else if ((d < 5) && (d != 0)) {
                return "" + pad(n, padlen) + delimeter + label[2];
            }
            else {
                return "" + pad(n, padlen) + delimeter + label[3];
            }
        }
        else {
            if (less) {
                return _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].t("app", "time_lessone") + " " + label[2];
            }
            else {
                return _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].t("time", "time_empty");
                ;
            }
        }
    };
    var dayWithLabel = function (d, small, less) {
        return numWithLabel(d, _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].ts("app", "time_days"), 0, small, less, " ");
    };
    var hourWithLabel = function (d, small, less) {
        return numWithLabel(d, _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].ts("app", "time_hours"), 0, small, less, " ");
    };
    var minuteWithLabel = function (d, small, less) {
        return numWithLabel(d, _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].ts("app", "time_minutes"), 0, small, less, " ");
    };
    var secondWithLabel = function (d, small, less) {
        return numWithLabel(d, _Intl__WEBPACK_IMPORTED_MODULE_0__["Intl"].ts("app", "time_seconds"), 0, small, less, " ");
    };
    var timeval = Math.round(timestamp / 100);
    if (timeval < 0)
        timeval = 0;
    var dday = Math.floor(timeval / 86400);
    timeval -= dday * 86400;
    var dhour = Math.floor(timeval / 3600);
    timeval -= dhour * 3600;
    var dmin = Math.floor(timeval / 60);
    timeval -= dmin * 60;
    var dsec = timeval;
    var result = "";
    if ((dday == 0) && (dhour == 0) && (dmin == 0) && (dsec == 0)) {
        result = "-";
    }
    else {
        if (dday > 0) {
            result = dayWithLabel(dday, false, false);
            if (dhour > 0) {
                result += " " + hourWithLabel(dhour, false, false);
            }
        }
        else {
            result += pad(dhour, 2) + ":" + pad(dmin, 2) + ":" + pad(dsec, 2);
        }
    }
    return result;
};


/***/ }),

/***/ "./src/fn/date/ParseMicrosoftFormatOffset.ts":
/*!***************************************************!*\
  !*** ./src/fn/date/ParseMicrosoftFormatOffset.ts ***!
  \***************************************************/
/*! exports provided: parseMicrosoftFormatOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMicrosoftFormatOffset", function() { return parseMicrosoftFormatOffset; });
/* harmony import */ var lodash_es_toSafeInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/toSafeInteger */ "./node_modules/lodash-es/toSafeInteger.js");

var parseMicrosoftFormatOffset = function (offset) {
    var sign = offset.substr(0, 1) === "-" ? -1 : 1;
    offset = offset.substring(1);
    var result = (Object(lodash_es_toSafeInteger__WEBPACK_IMPORTED_MODULE_0__["default"])(offset.substr(0, 2)) * 60) + Object(lodash_es_toSafeInteger__WEBPACK_IMPORTED_MODULE_0__["default"])(offset.substring(2));
    return sign * result;
};


/***/ }),

/***/ "./src/fn/date/index.ts":
/*!******************************!*\
  !*** ./src/fn/date/index.ts ***!
  \******************************/
/*! exports provided: formatTimestamp, parseMicrosoftFormatOffset, dateToUTCString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormatTimestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatTimestamp */ "./src/fn/date/FormatTimestamp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTimestamp", function() { return _FormatTimestamp__WEBPACK_IMPORTED_MODULE_0__["formatTimestamp"]; });

/* harmony import */ var _ParseMicrosoftFormatOffset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParseMicrosoftFormatOffset */ "./src/fn/date/ParseMicrosoftFormatOffset.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseMicrosoftFormatOffset", function() { return _ParseMicrosoftFormatOffset__WEBPACK_IMPORTED_MODULE_1__["parseMicrosoftFormatOffset"]; });

/* harmony import */ var _DateToUTCString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateToUTCString */ "./src/fn/date/DateToUTCString.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateToUTCString", function() { return _DateToUTCString__WEBPACK_IMPORTED_MODULE_2__["dateToUTCString"]; });






/***/ }),

/***/ "./src/fn/number/StdDeviation.ts":
/*!***************************************!*\
  !*** ./src/fn/number/StdDeviation.ts ***!
  \***************************************/
/*! exports provided: stdDeviation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdDeviation", function() { return stdDeviation; });
/* harmony import */ var lodash_es_mean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/mean */ "./node_modules/lodash-es/mean.js");

var stdDeviation = function (arr) {
    var avg = Object(lodash_es_mean__WEBPACK_IMPORTED_MODULE_0__["default"])(arr), sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i] - avg, 2);
    }
    return Math.sqrt(sum / (arr.length - 1));
};


/***/ }),

/***/ "./src/fn/number/index.ts":
/*!********************************!*\
  !*** ./src/fn/number/index.ts ***!
  \********************************/
/*! exports provided: stdDeviation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StdDeviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StdDeviation */ "./src/fn/number/StdDeviation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdDeviation", function() { return _StdDeviation__WEBPACK_IMPORTED_MODULE_0__["stdDeviation"]; });

// use _.range export { isValueOutOfRange } from './IsValueOutOfRange';
// use _.clamp export { ensureValueInRange } from './EnsureValueInRange';



/***/ }),

/***/ "./src/fn/string/Justify.ts":
/*!**********************************!*\
  !*** ./src/fn/string/Justify.ts ***!
  \**********************************/
/*! exports provided: justify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justify", function() { return justify; });
/* harmony import */ var lodash_es_padEnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/padEnd */ "./node_modules/lodash-es/padEnd.js");
/* harmony import */ var lodash_es_padStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/padStart */ "./node_modules/lodash-es/padStart.js");


var justify = function (value, prefix, leftJustify, minWidth, zeroPad) {
    var diff = minWidth - value.length;
    if (diff > 0) {
        if (leftJustify || !zeroPad) {
            value = leftJustify ? Object(lodash_es_padStart__WEBPACK_IMPORTED_MODULE_1__["default"])(value, minWidth) : Object(lodash_es_padEnd__WEBPACK_IMPORTED_MODULE_0__["default"])(value, minWidth);
        }
        else {
            value = value.slice(0, prefix.length) + Object(lodash_es_padStart__WEBPACK_IMPORTED_MODULE_1__["default"])('', diff, '0') + value.slice(prefix.length);
        }
    }
    return value;
};


/***/ }),

/***/ "./src/fn/string/Pluralize.ts":
/*!************************************!*\
  !*** ./src/fn/string/Pluralize.ts ***!
  \************************************/
/*! exports provided: pluralize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return pluralize; });
var pluralize = function (num, strOne, strTwo, strFive) {
    strFive = strFive || strTwo;
    if ((strTwo === strFive) && (num > 1)) {
        return strTwo;
    }
    if ((num > 10) && (num < 20)) {
        return strFive;
    }
    var d = num % 10;
    if (d === 1) {
        return strOne;
    }
    else if ((d < 5) && (d !== 0)) {
        return strTwo;
    }
    else {
        return strFive;
    }
};


/***/ }),

/***/ "./src/fn/string/Sprintf.ts":
/*!**********************************!*\
  !*** ./src/fn/string/Sprintf.ts ***!
  \**********************************/
/*! exports provided: sprintf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sprintf", function() { return sprintf; });
/* harmony import */ var lodash_es_toSafeInteger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/toSafeInteger */ "./node_modules/lodash-es/toSafeInteger.js");
/* harmony import */ var lodash_es_padStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/padStart */ "./node_modules/lodash-es/padStart.js");
/* harmony import */ var lodash_es_padEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/padEnd */ "./node_modules/lodash-es/padEnd.js");
/* harmony import */ var _Justify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Justify */ "./src/fn/string/Justify.ts");




// formatBaseX()
var formatBaseX = function (value, base, prefixBaseX, leftJustify, minWidth, precision, zeroPad) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    var prefix = prefixBaseX && number && { '2': '0b', '8': '0', '10': '', '16': '0x' }[base] || '';
    var result = prefix + Object(lodash_es_padStart__WEBPACK_IMPORTED_MODULE_1__["default"])(number.toString(base), precision || 0, '0');
    return Object(_Justify__WEBPACK_IMPORTED_MODULE_3__["justify"])(result, prefix, leftJustify, minWidth, zeroPad);
};
// formatString()
var formatString = function (value, leftJustify, minWidth, precision, zeroPad) {
    if (precision != null) {
        value = value.slice(0, precision);
    }
    return Object(_Justify__WEBPACK_IMPORTED_MODULE_3__["justify"])(value, '', leftJustify, minWidth, zeroPad);
};
var sprintf = function (format) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    var regex = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    var i = 0;
    // finalFormat()
    var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
        if (substring == '%%')
            return '%';
        // parse flags
        var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false;
        for (var j = 0; flags && j < flags.length; j++)
            switch (flags.charAt(j)) {
                case ' ':
                    positivePrefix = ' ';
                    break;
                case '+':
                    positivePrefix = '+';
                    break;
                case '-':
                    leftJustify = true;
                    break;
                case '0':
                    zeroPad = true;
                    break;
                case '#':
                    prefixBaseX = true;
                    break;
            }
        // parameters may be null, undefined, empty-string or real valued
        // we want to ignore null, undefined and empty-string values
        if (!minWidth) {
            minWidth = 0;
        }
        else if (minWidth == '*') {
            minWidth = +a[i++];
        }
        else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        }
        else {
            minWidth = +minWidth;
        }
        // Note: undocumented perl feature:
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }
        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }
        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : void (0);
        }
        else if (precision == '*') {
            precision = +a[i++];
        }
        else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        }
        else {
            precision = +precision;
        }
        // grab value using valueIndex if required?
        var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
        switch (type) {
            case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad);
            case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd': {
                var number = Object(lodash_es_toSafeInteger__WEBPACK_IMPORTED_MODULE_0__["default"])(+value);
                var prefix = number < 0 ? '-' : positivePrefix;
                value = prefix + Object(lodash_es_padEnd__WEBPACK_IMPORTED_MODULE_2__["default"])(String(Math.abs(number)), precision, '0');
                return Object(_Justify__WEBPACK_IMPORTED_MODULE_3__["justify"])(value, prefix, leftJustify, minWidth, zeroPad);
            }
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                {
                    var number = +value;
                    var prefix = number < 0 ? '-' : positivePrefix;
                    var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                    var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                    value = prefix + Math.abs(number)[method](precision);
                    return Object(_Justify__WEBPACK_IMPORTED_MODULE_3__["justify"])(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                }
            default: return substring;
        }
    };
    return format.replace(regex, doFormat);
};


/***/ }),

/***/ "./src/fn/string/index.ts":
/*!********************************!*\
  !*** ./src/fn/string/index.ts ***!
  \********************************/
/*! exports provided: justify, pluralize, sprintf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Justify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Justify */ "./src/fn/string/Justify.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justify", function() { return _Justify__WEBPACK_IMPORTED_MODULE_0__["justify"]; });

/* harmony import */ var _Pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pluralize */ "./src/fn/string/Pluralize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return _Pluralize__WEBPACK_IMPORTED_MODULE_1__["pluralize"]; });

/* harmony import */ var _Sprintf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprintf */ "./src/fn/string/Sprintf.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sprintf", function() { return _Sprintf__WEBPACK_IMPORTED_MODULE_2__["sprintf"]; });






/***/ }),

/***/ "./src/fn/utils/CreateChainedFunction.ts":
/*!***********************************************!*\
  !*** ./src/fn/utils/CreateChainedFunction.ts ***!
  \***********************************************/
/*! exports provided: createChainedFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createChainedFunction", function() { return createChainedFunction; });
/* harmony import */ var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/isFunction */ "./node_modules/lodash-es/isFunction.js");

var createChainedFunction = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return funcs
        .filter(function (f) { return (Object(lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(f)); })
        .reduce(function (acc, f) {
        if (!Object(lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(f)) {
            throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }
        if (acc === null) {
            return f;
        }
        return function chainedFunction() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            acc.apply(this, args);
            f.apply(this, args);
        };
    }, null);
};


/***/ }),

/***/ "./src/fn/utils/index.ts":
/*!*******************************!*\
  !*** ./src/fn/utils/index.ts ***!
  \*******************************/
/*! exports provided: createChainedFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateChainedFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateChainedFunction */ "./src/fn/utils/CreateChainedFunction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChainedFunction", function() { return _CreateChainedFunction__WEBPACK_IMPORTED_MODULE_0__["createChainedFunction"]; });




/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Logger, Intl, grep, pushif, justify, pluralize, sprintf, stdDeviation, formatTimestamp, parseMicrosoftFormatOffset, dateToUTCString, createChainedFunction, EventArgs, EventArgs1, EventHandler, EventHandler1, Event, Event1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fn_array_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn/array/index */ "./src/fn/array/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grep", function() { return _fn_array_index__WEBPACK_IMPORTED_MODULE_0__["grep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushif", function() { return _fn_array_index__WEBPACK_IMPORTED_MODULE_0__["pushif"]; });

/* harmony import */ var _fn_string_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn/string/index */ "./src/fn/string/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "justify", function() { return _fn_string_index__WEBPACK_IMPORTED_MODULE_1__["justify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluralize", function() { return _fn_string_index__WEBPACK_IMPORTED_MODULE_1__["pluralize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sprintf", function() { return _fn_string_index__WEBPACK_IMPORTED_MODULE_1__["sprintf"]; });

/* harmony import */ var _fn_number_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fn/number/index */ "./src/fn/number/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stdDeviation", function() { return _fn_number_index__WEBPACK_IMPORTED_MODULE_2__["stdDeviation"]; });

/* harmony import */ var _fn_date_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fn/date/index */ "./src/fn/date/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTimestamp", function() { return _fn_date_index__WEBPACK_IMPORTED_MODULE_3__["formatTimestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseMicrosoftFormatOffset", function() { return _fn_date_index__WEBPACK_IMPORTED_MODULE_3__["parseMicrosoftFormatOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateToUTCString", function() { return _fn_date_index__WEBPACK_IMPORTED_MODULE_3__["dateToUTCString"]; });

/* harmony import */ var _fn_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fn/utils/index */ "./src/fn/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChainedFunction", function() { return _fn_utils_index__WEBPACK_IMPORTED_MODULE_4__["createChainedFunction"]; });

/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/index */ "./src/events/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventArgs", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["EventArgs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventArgs1", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["EventArgs1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["EventHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventHandler1", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["EventHandler1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["Event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Event1", function() { return _events_index__WEBPACK_IMPORTED_MODULE_5__["Event1"]; });

/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logger */ "./src/Logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _Logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]; });

/* harmony import */ var _Intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Intl */ "./src/Intl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intl", function() { return _Intl__WEBPACK_IMPORTED_MODULE_7__["Intl"]; });











/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbml4L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9vbml4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5TWFwLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc2NpaVNpemUuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FzY2lpVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUNsYW1wLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlTWVhbi5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlUmVwZWF0LmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlU2xpY2UuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VTdW0uanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2FzdFNsaWNlLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jcmVhdGVQYWRkaW5nLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc1VuaWNvZGUuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdHJpbmdTaXplLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdHJpbmdUb0FycmF5LmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL191bmljb2RlU2l6ZS5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fdW5pY29kZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0LmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tZWFuLmpzIiwid2VicGFjazovL29uaXgvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3BhZEVuZC5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9wYWRTdGFydC5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy90b0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy90b0ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vb25peC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9TYWZlSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly9vbml4Lyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL0ludGwudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9ldmVudHMvRXZlbnQudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9ldmVudHMvRXZlbnRBcmdzLnRzIiwid2VicGFjazovL29uaXgvLi9zcmMvZXZlbnRzL0V2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2V2ZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2ZuL2FycmF5L0dyZXAudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9mbi9hcnJheS9QdXNoaWYudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9mbi9hcnJheS9pbmRleC50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2ZuL2RhdGUvRGF0ZVRvVVRDU3RyaW5nLnRzIiwid2VicGFjazovL29uaXgvLi9zcmMvZm4vZGF0ZS9Gb3JtYXRUaW1lc3RhbXAudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9mbi9kYXRlL1BhcnNlTWljcm9zb2Z0Rm9ybWF0T2Zmc2V0LnRzIiwid2VicGFjazovL29uaXgvLi9zcmMvZm4vZGF0ZS9pbmRleC50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2ZuL251bWJlci9TdGREZXZpYXRpb24udHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9mbi9udW1iZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9mbi9zdHJpbmcvSnVzdGlmeS50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2ZuL3N0cmluZy9QbHVyYWxpemUudHMiLCJ3ZWJwYWNrOi8vb25peC8uL3NyYy9mbi9zdHJpbmcvU3ByaW50Zi50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2ZuL3N0cmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2ZuL3V0aWxzL0NyZWF0ZUNoYWluZWRGdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9vbml4Ly4vc3JjL2ZuL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL29uaXgvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O1NBQzVCLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLG9FQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2QsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELE9BQU87WUFBeUIsY0FBTztpQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO2dCQUFQLHlCQUFPOztZQUNuQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7SUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0I7QUFDQztBQUNBO0FBQ0Y7QUFFQztBQUlGO0FBR0c7QUFDSiIsImZpbGUiOiJhcHAuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wib25peFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvbml4XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5TWFwO1xuIiwiaW1wb3J0IGJhc2VQcm9wZXJ0eSBmcm9tICcuL19iYXNlUHJvcGVydHkuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYW4gQVNDSUkgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3RyaW5nIHNpemUuXG4gKi9cbnZhciBhc2NpaVNpemUgPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5leHBvcnQgZGVmYXVsdCBhc2NpaVNpemU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc2NpaVRvQXJyYXk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsYW1wYCB3aGljaCBkb2Vzbid0IGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgVGhlIG51bWJlciB0byBjbGFtcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbG93ZXJdIFRoZSBsb3dlciBib3VuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB1cHBlciBUaGUgdXBwZXIgYm91bmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjbGFtcGVkIG51bWJlci5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsYW1wKG51bWJlciwgbG93ZXIsIHVwcGVyKSB7XG4gIGlmIChudW1iZXIgPT09IG51bWJlcikge1xuICAgIGlmICh1cHBlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBudW1iZXIgPSBudW1iZXIgPD0gdXBwZXIgPyBudW1iZXIgOiB1cHBlcjtcbiAgICB9XG4gICAgaWYgKGxvd2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG51bWJlciA9IG51bWJlciA+PSBsb3dlciA/IG51bWJlciA6IGxvd2VyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQ2xhbXA7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcbiIsImltcG9ydCBiYXNlU3VtIGZyb20gJy4vX2Jhc2VTdW0uanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZWFuYCBhbmQgYF8ubWVhbkJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG1lYW4uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZWFuKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyAoYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIC8gbGVuZ3RoKSA6IE5BTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1lYW47XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlUHJvcGVydHk7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUZsb29yID0gTWF0aC5mbG9vcjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXBlYXRgIHdoaWNoIGRvZXNuJ3QgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHJlcGVhdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByZXBlYXRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXBlYXQoc3RyaW5nLCBuKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKCFzdHJpbmcgfHwgbiA8IDEgfHwgbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8vIExldmVyYWdlIHRoZSBleHBvbmVudGlhdGlvbiBieSBzcXVhcmluZyBhbGdvcml0aG0gZm9yIGEgZmFzdGVyIHJlcGVhdC5cbiAgLy8gU2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0V4cG9uZW50aWF0aW9uX2J5X3NxdWFyaW5nIGZvciBtb3JlIGRldGFpbHMuXG4gIGRvIHtcbiAgICBpZiAobiAlIDIpIHtcbiAgICAgIHJlc3VsdCArPSBzdHJpbmc7XG4gICAgfVxuICAgIG4gPSBuYXRpdmVGbG9vcihuIC8gMik7XG4gICAgaWYgKG4pIHtcbiAgICAgIHN0cmluZyArPSBzdHJpbmc7XG4gICAgfVxuICB9IHdoaWxlIChuKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlUmVwZWF0O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlU2xpY2U7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnN1bWAgYW5kIGBfLnN1bUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN1bS5cbiAqL1xuZnVuY3Rpb24gYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgY3VycmVudCA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSk7XG4gICAgaWYgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBjdXJyZW50IDogKHJlc3VsdCArIGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlU3VtO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vX2FycmF5TWFwLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VUb1N0cmluZztcbiIsImltcG9ydCBiYXNlU2xpY2UgZnJvbSAnLi9fYmFzZVNsaWNlLmpzJztcblxuLyoqXG4gKiBDYXN0cyBgYXJyYXlgIHRvIGEgc2xpY2UgaWYgaXQncyBuZWVkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBzbGljZS5cbiAqL1xuZnVuY3Rpb24gY2FzdFNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kO1xuICByZXR1cm4gKCFzdGFydCAmJiBlbmQgPj0gbGVuZ3RoKSA/IGFycmF5IDogYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FzdFNsaWNlO1xuIiwiaW1wb3J0IGJhc2VSZXBlYXQgZnJvbSAnLi9fYmFzZVJlcGVhdC5qcyc7XG5pbXBvcnQgYmFzZVRvU3RyaW5nIGZyb20gJy4vX2Jhc2VUb1N0cmluZy5qcyc7XG5pbXBvcnQgY2FzdFNsaWNlIGZyb20gJy4vX2Nhc3RTbGljZS5qcyc7XG5pbXBvcnQgaGFzVW5pY29kZSBmcm9tICcuL19oYXNVbmljb2RlLmpzJztcbmltcG9ydCBzdHJpbmdTaXplIGZyb20gJy4vX3N0cmluZ1NpemUuanMnO1xuaW1wb3J0IHN0cmluZ1RvQXJyYXkgZnJvbSAnLi9fc3RyaW5nVG9BcnJheS5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDZWlsID0gTWF0aC5jZWlsO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIHBhZGRpbmcgZm9yIGBzdHJpbmdgIGJhc2VkIG9uIGBsZW5ndGhgLiBUaGUgYGNoYXJzYCBzdHJpbmdcbiAqIGlzIHRydW5jYXRlZCBpZiB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgZXhjZWVkcyBgbGVuZ3RoYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgcGFkZGluZyBsZW5ndGguXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NoYXJzPScgJ10gVGhlIHN0cmluZyB1c2VkIGFzIHBhZGRpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBwYWRkaW5nIGZvciBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGFkZGluZyhsZW5ndGgsIGNoYXJzKSB7XG4gIGNoYXJzID0gY2hhcnMgPT09IHVuZGVmaW5lZCA/ICcgJyA6IGJhc2VUb1N0cmluZyhjaGFycyk7XG5cbiAgdmFyIGNoYXJzTGVuZ3RoID0gY2hhcnMubGVuZ3RoO1xuICBpZiAoY2hhcnNMZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNoYXJzTGVuZ3RoID8gYmFzZVJlcGVhdChjaGFycywgbGVuZ3RoKSA6IGNoYXJzO1xuICB9XG4gIHZhciByZXN1bHQgPSBiYXNlUmVwZWF0KGNoYXJzLCBuYXRpdmVDZWlsKGxlbmd0aCAvIHN0cmluZ1NpemUoY2hhcnMpKSk7XG4gIHJldHVybiBoYXNVbmljb2RlKGNoYXJzKVxuICAgID8gY2FzdFNsaWNlKHN0cmluZ1RvQXJyYXkocmVzdWx0KSwgMCwgbGVuZ3RoKS5qb2luKCcnKVxuICAgIDogcmVzdWx0LnNsaWNlKDAsIGxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZGRpbmc7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNVbmljb2RlO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCBhc2NpaVNpemUgZnJvbSAnLi9fYXNjaWlTaXplLmpzJztcbmltcG9ydCBoYXNVbmljb2RlIGZyb20gJy4vX2hhc1VuaWNvZGUuanMnO1xuaW1wb3J0IHVuaWNvZGVTaXplIGZyb20gJy4vX3VuaWNvZGVTaXplLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2Ygc3ltYm9scyBpbiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nU2l6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVNpemUoc3RyaW5nKVxuICAgIDogYXNjaWlTaXplKHN0cmluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ1NpemU7XG4iLCJpbXBvcnQgYXNjaWlUb0FycmF5IGZyb20gJy4vX2FzY2lpVG9BcnJheS5qcyc7XG5pbXBvcnQgaGFzVW5pY29kZSBmcm9tICcuL19oYXNVbmljb2RlLmpzJztcbmltcG9ydCB1bmljb2RlVG9BcnJheSBmcm9tICcuL191bmljb2RlVG9BcnJheS5qcyc7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdUb0FycmF5O1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBzaXplIG9mIGEgVW5pY29kZSBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVNpemUoc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSByZVVuaWNvZGUubGFzdEluZGV4ID0gMDtcbiAgd2hpbGUgKHJlVW5pY29kZS50ZXN0KHN0cmluZykpIHtcbiAgICArK3Jlc3VsdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1bmljb2RlU2l6ZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1bmljb2RlVG9BcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlkZW50aXR5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3ltYm9sO1xuIiwiaW1wb3J0IGJhc2VNZWFuIGZyb20gJy4vX2Jhc2VNZWFuLmpzJztcbmltcG9ydCBpZGVudGl0eSBmcm9tICcuL2lkZW50aXR5LmpzJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgbWVhbiBvZiB0aGUgdmFsdWVzIGluIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBtZWFuLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLm1lYW4oWzQsIDIsIDgsIDZdKTtcbiAqIC8vID0+IDVcbiAqL1xuZnVuY3Rpb24gbWVhbihhcnJheSkge1xuICByZXR1cm4gYmFzZU1lYW4oYXJyYXksIGlkZW50aXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVhbjtcbiIsImltcG9ydCBjcmVhdGVQYWRkaW5nIGZyb20gJy4vX2NyZWF0ZVBhZGRpbmcuanMnO1xuaW1wb3J0IHN0cmluZ1NpemUgZnJvbSAnLi9fc3RyaW5nU2l6ZS5qcyc7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4vdG9JbnRlZ2VyLmpzJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBQYWRzIGBzdHJpbmdgIG9uIHRoZSByaWdodCBzaWRlIGlmIGl0J3Mgc2hvcnRlciB0aGFuIGBsZW5ndGhgLiBQYWRkaW5nXG4gKiBjaGFyYWN0ZXJzIGFyZSB0cnVuY2F0ZWQgaWYgdGhleSBleGNlZWQgYGxlbmd0aGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gcGFkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9MF0gVGhlIHBhZGRpbmcgbGVuZ3RoLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjaGFycz0nICddIFRoZSBzdHJpbmcgdXNlZCBhcyBwYWRkaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcGFkZGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5wYWRFbmQoJ2FiYycsIDYpO1xuICogLy8gPT4gJ2FiYyAgICdcbiAqXG4gKiBfLnBhZEVuZCgnYWJjJywgNiwgJ18tJyk7XG4gKiAvLyA9PiAnYWJjXy1fJ1xuICpcbiAqIF8ucGFkRW5kKCdhYmMnLCAzKTtcbiAqIC8vID0+ICdhYmMnXG4gKi9cbmZ1bmN0aW9uIHBhZEVuZChzdHJpbmcsIGxlbmd0aCwgY2hhcnMpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgbGVuZ3RoID0gdG9JbnRlZ2VyKGxlbmd0aCk7XG5cbiAgdmFyIHN0ckxlbmd0aCA9IGxlbmd0aCA/IHN0cmluZ1NpemUoc3RyaW5nKSA6IDA7XG4gIHJldHVybiAobGVuZ3RoICYmIHN0ckxlbmd0aCA8IGxlbmd0aClcbiAgICA/IChzdHJpbmcgKyBjcmVhdGVQYWRkaW5nKGxlbmd0aCAtIHN0ckxlbmd0aCwgY2hhcnMpKVxuICAgIDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWRFbmQ7XG4iLCJpbXBvcnQgY3JlYXRlUGFkZGluZyBmcm9tICcuL19jcmVhdGVQYWRkaW5nLmpzJztcbmltcG9ydCBzdHJpbmdTaXplIGZyb20gJy4vX3N0cmluZ1NpemUuanMnO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tICcuL3RvSW50ZWdlci5qcyc7XG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnLi90b1N0cmluZy5qcyc7XG5cbi8qKlxuICogUGFkcyBgc3RyaW5nYCBvbiB0aGUgbGVmdCBzaWRlIGlmIGl0J3Mgc2hvcnRlciB0aGFuIGBsZW5ndGhgLiBQYWRkaW5nXG4gKiBjaGFyYWN0ZXJzIGFyZSB0cnVuY2F0ZWQgaWYgdGhleSBleGNlZWQgYGxlbmd0aGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gcGFkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9MF0gVGhlIHBhZGRpbmcgbGVuZ3RoLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjaGFycz0nICddIFRoZSBzdHJpbmcgdXNlZCBhcyBwYWRkaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcGFkZGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5wYWRTdGFydCgnYWJjJywgNik7XG4gKiAvLyA9PiAnICAgYWJjJ1xuICpcbiAqIF8ucGFkU3RhcnQoJ2FiYycsIDYsICdfLScpO1xuICogLy8gPT4gJ18tX2FiYydcbiAqXG4gKiBfLnBhZFN0YXJ0KCdhYmMnLCAzKTtcbiAqIC8vID0+ICdhYmMnXG4gKi9cbmZ1bmN0aW9uIHBhZFN0YXJ0KHN0cmluZywgbGVuZ3RoLCBjaGFycykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBsZW5ndGggPSB0b0ludGVnZXIobGVuZ3RoKTtcblxuICB2YXIgc3RyTGVuZ3RoID0gbGVuZ3RoID8gc3RyaW5nU2l6ZShzdHJpbmcpIDogMDtcbiAgcmV0dXJuIChsZW5ndGggJiYgc3RyTGVuZ3RoIDwgbGVuZ3RoKVxuICAgID8gKGNyZWF0ZVBhZGRpbmcobGVuZ3RoIC0gc3RyTGVuZ3RoLCBjaGFycykgKyBzdHJpbmcpXG4gICAgOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZFN0YXJ0O1xuIiwiaW1wb3J0IHRvTnVtYmVyIGZyb20gJy4vdG9OdW1iZXIuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDg7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9GaW5pdGU7XG4iLCJpbXBvcnQgdG9GaW5pdGUgZnJvbSAnLi90b0Zpbml0ZS5qcyc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSW50ZWdlcjtcbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b051bWJlcjtcbiIsImltcG9ydCBiYXNlQ2xhbXAgZnJvbSAnLi9fYmFzZUNsYW1wLmpzJztcbmltcG9ydCB0b0ludGVnZXIgZnJvbSAnLi90b0ludGVnZXIuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc2FmZSBpbnRlZ2VyLiBBIHNhZmUgaW50ZWdlciBjYW4gYmUgY29tcGFyZWQgYW5kXG4gKiByZXByZXNlbnRlZCBjb3JyZWN0bHkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1NhZmVJbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b1NhZmVJbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9TYWZlSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiA5MDA3MTk5MjU0NzQwOTkxXG4gKlxuICogXy50b1NhZmVJbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9TYWZlSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWVcbiAgICA/IGJhc2VDbGFtcCh0b0ludGVnZXIodmFsdWUpLCAtTUFYX1NBRkVfSU5URUdFUiwgTUFYX1NBRkVfSU5URUdFUilcbiAgICA6ICh2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvU2FmZUludGVnZXI7XG4iLCJpbXBvcnQgYmFzZVRvU3RyaW5nIGZyb20gJy4vX2Jhc2VUb1N0cmluZy5qcyc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9TdHJpbmc7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIHdhcm5pbmdcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAoX19ERVZfXykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkobnVsbCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgKiBhcyB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuXG5kZWNsYXJlIHR5cGUgTG9jYWxlcyA9ICdydS1ydScgfCAnZW4tdXMnO1xuZGVjbGFyZSB0eXBlIFN0cmluZ3NDYWxsYmFjayA9IChrZXk6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ3NNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ3NDYXRlZ29yeSB7XG4gICAgW2xhbmc6IHN0cmluZ106IFN0cmluZ3NNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyaW5ncyB7XG4gICAgW21vZHVsZTogc3RyaW5nXTogU3RyaW5nc0NhdGVnb3J5O1xufVxuXG5jb25zdCBkZWZhdWx0TG9jYWxlOiBMb2NhbGVzID0gJ3J1LXJ1JztcblxuZXhwb3J0IGNsYXNzIEludGwge1xuICAgIHByaXZhdGUgc3RhdGljIGN1cnJlbnRMb2NhbGU6IExvY2FsZXMgPSBkZWZhdWx0TG9jYWxlO1xuICAgIHByaXZhdGUgc3RhdGljIGNhdGVnb3JpZXM6IFN0cmluZ3MgPSB7fTtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnRsSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TG9jYWxlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlPT1cImVuXCIgfHwgdmFsdWU9PVwiZW4tdXNcIiB8fCB2YWx1ZT09XCJlbi11a1wiKSB7XG4gICAgICAgICAgICBJbnRsLmN1cnJlbnRMb2NhbGUgPSAnZW4tdXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgSW50bC5jdXJyZW50TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcblxuICAgICAgICByZXR1cm4gSW50bC5jdXJyZW50TG9jYWxlO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzYWZlVCA9IChjYXRlZ29yeTogc3RyaW5nLCBsb2NhbGU6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYgKEludGwuY2F0ZWdvcmllc1tjYXRlZ29yeV0gJiYgSW50bC5jYXRlZ29yaWVzW2NhdGVnb3J5XVtsb2NhbGVdKSB7XG4gICAgICAgICAgICByZXN1bHQgPSA8c3RyaW5nPkludGwuY2F0ZWdvcmllc1tjYXRlZ29yeV1bbG9jYWxlXVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzYWZlVFMgPSAoY2F0ZWdvcnk6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmIChJbnRsLmNhdGVnb3JpZXNbY2F0ZWdvcnldICYmIEludGwuY2F0ZWdvcmllc1tjYXRlZ29yeV1bbG9jYWxlXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gPHN0cmluZ1tdPkludGwuY2F0ZWdvcmllc1tjYXRlZ29yeV1bbG9jYWxlXVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIHQgPSAoY2F0ZWdvcnk6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IEludGwuc2FmZVQoY2F0ZWdvcnksIEludGwuY3VycmVudExvY2FsZSwga2V5KTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEludGwuc2FmZVQoY2F0ZWdvcnksIGRlZmF1bHRMb2NhbGUsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuaW5nKHJlc3VsdCAhPT0gbnVsbCxcbiAgICAgICAgICAgIGBFbXB0eSBzdHJpbmcgZm9yIGNhdGVnb3J5ICR7Y2F0ZWdvcnl9IGFuZCBrZXkgJHtrZXl9LmBcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIHRzID0gKGNhdGVnb3J5OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBJbnRsLnNhZmVUUyhjYXRlZ29yeSwgSW50bC5jdXJyZW50TG9jYWxlLCBrZXkpO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gSW50bC5zYWZlVFMoY2F0ZWdvcnksIGRlZmF1bHRMb2NhbGUsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXJuaW5nKHJlc3VsdCAhPT0gbnVsbCxcbiAgICAgICAgICAgIGBFbXB0eSBzdHJpbmcgZm9yIGNhdGVnb3J5ICR7Y2F0ZWdvcnl9IGFuZCBrZXkgJHtrZXl9LmBcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyU3RyaW5ncyA9IChjYXRlZ29yeTogc3RyaW5nLCBzdHJpbmdzOiBTdHJpbmdzQ2F0ZWdvcnkpID0+IHsgICAgXG4gICAgICAgIGlmICghSW50bC5jYXRlZ29yaWVzW2NhdGVnb3J5XSkge1xuICAgICAgICAgICAgSW50bC5jYXRlZ29yaWVzW2NhdGVnb3J5XSA9IHN0cmluZ3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxhbmcgaW4gc3RyaW5ncykge1xuICAgICAgICAgICAgICAgIGlmICghSW50bC5jYXRlZ29yaWVzW2NhdGVnb3J5XVtsYW5nXSkge1xuICAgICAgICAgICAgICAgICAgICBJbnRsLmNhdGVnb3JpZXNbY2F0ZWdvcnldW2xhbmddID0ge307XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbGFuZ0NhdCA9IHN0cmluZ3NbbGFuZ107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbGFuZ0NhdCkge1xuICAgICAgICAgICAgICAgICAgICBJbnRsLmNhdGVnb3JpZXNbY2F0ZWdvcnldW2xhbmddW2tleV0gPSBsYW5nQ2F0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghSW50bC5pbnRsSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIEludGwucmVnaXN0ZXJTdHJpbmdzKCdhcHAnLCB7XG4gICAgICAgICAgICAgICAgJ3J1LXJ1Jzoge1xuICAgICAgICAgICAgICAgICAgICB0aW1lX2xlc3NvbmU6IFwi0LzQtdC90LXQtSAxXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVfZW1wdHk6IFwiLS0tXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVfbm9sYWJlbDogW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX2RheXM6IFtcItC00L0uXCIsIFwi0LTQtdC90YxcIiwgXCLQtNC90Y9cIiwgXCLQtNC90LXQuVwiXSxcbiAgICAgICAgICAgICAgICAgICAgdGltZV9ob3VyczogW1wi0YcuXCIsIFwi0YfQsNGBXCIsIFwi0YfQsNGB0LBcIiwgXCLRh9Cw0YHQvtCyXCJdLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX21pbnV0ZXM6IFtcItC80LjQvS5cIiwgXCLQvNC40L3Rg9GC0LBcIiwgXCLQvNC40L3Rg9GC0YtcIiwgXCLQvNC40L3Rg9GCXCJdLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX3NlY29uZHM6IFtcItGB0LXQui5cIiwgXCLRgdC10LrRg9C90LTQsFwiLCBcItGB0LXQutGD0L3QtNGLXCIsIFwi0YHQtdC60YPQvdC0XCJdXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICdlbi11cyc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZV9sZXNzb25lOiBcImxlc3MgMVwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX2VtcHR5OiBcIi0tLVwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX25vbGFiZWw6IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgdGltZV9kYXlzOiBbXCJkLlwiLCBcImRheVwiLCBcImRheXNcIiwgXCJkYXlzXCJdLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX2hvdXJzOiBbXCJoLlwiLCBcImhvdXJcIiwgXCJob3Vyc1wiLCBcImhvdXJzXCJdLFxuICAgICAgICAgICAgICAgICAgICB0aW1lX21pbnV0ZXM6IFtcIm0uXCIsIFwibWludXRlXCIsIFwibWludXRlc1wiLCBcIm1pbnV0ZXNcIl0sXG4gICAgICAgICAgICAgICAgICAgIHRpbWVfc2Vjb25kczogW1wic2VjLlwiLCBcInNlY29uZFwiLCBcInNlY29uZHNcIiwgXCJzZWNvbmRzXCJdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEludGwuaW50bEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuSW50bC5zZXRMb2NhbGUod2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSk7IiwiY29uc3Qgd25kOiBXaW5kb3cgPSB3aW5kb3c7XG5jb25zdCBGQUxTRSA9IGZhbHNlO1xuXG4vLyBzb21lIGNvbnZlbmllbnQgc2hvcnRjdXRzLlxuY29uc3QgYXBzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuY29uc3QgY29uOiBDb25zb2xlID0gd25kLmNvbnNvbGU7XG5cbmxldCBjYWxsYmFja19mdW5jOiBhbnkgPSBudWxsO1xubGV0IGNhbGxiYWNrX2ZvcmNlID0gRkFMU0U7XG5cbi8vIFNldCBkZWZhdWx0IGxldmVsXG5sZXQgbG9nX2xldmVsID0gOTtcblxuLy8gbG9nZ2luZyBtZXRob2RzLCBpbiBcInByaW9yaXR5IG9yZGVyXCIuIE5vdCBhbGwgY29uc29sZSBpbXBsZW1lbnRhdGlvbnNcbi8vIHdpbGwgdXRpbGl6ZSB0aGVzZSwgYnV0IHRoZXkgd2lsbCBiZSB1c2VkIGluIHRoZSBjYWxsYmFjayBwYXNzZWQgdG9cbi8vIHNldENhbGxiYWNrLlxuY29uc3QgbG9nX21ldGhvZHMgPSBbXCJlcnJvclwiLCBcIndhcm5cIiwgXCJpbmZvXCIsIFwiZGVidWdcIiwgXCJsb2dcIl07XG5cbi8vIHBhc3MgdGhlc2UgbWV0aG9kcyB0aHJvdWdoIHRvIHRoZSBjb25zb2xlIGlmIHRoZXkgZXhpc3QsIG90aGVyd2lzZSBqdXN0XG4vLyBmYWlsIGdyYWNlZnVsbHkuIFRoZXNlIG1ldGhvZHMgYXJlIHByb3ZpZGVkIGZvciBjb252ZW5pZW5jZS5cbmNvbnN0IHBhc3NfbWV0aG9kczogc3RyaW5nW10gPVxuICAgIFwiYXNzZXJ0IGNsZWFyIGNvdW50IGRpciBkaXJ4bWwgZXhjZXB0aW9uIGdyb3VwIGdyb3VwQ29sbGFwc2VkIGdyb3VwRW5kIHByb2ZpbGUgcHJvZmlsZUVuZCB0YWJsZSB0aW1lIHRpbWVFbmQgdHJhY2VcIi5zcGxpdChcIiBcIik7XG5cbi8vIGxvZ3MgYXJlIHN0b3JlZCBoZXJlIHNvIHRoYXQgdGhleSBjYW4gYmUgcmVjYWxsZWQgYXMgbmVjZXNzYXJ5LlxubGV0IGxvZ3M6IGFueVtdID0gW107XG5cbi8vIGRldGVybWluZSBpZiB0aGUgbGV2ZWwgaXMgdmlzaWJsZSBnaXZlbiB0aGUgY3VycmVudCBsb2dfbGV2ZWwuXG5mdW5jdGlvbiBpc19sZXZlbChsZXZlbDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGxvZ19sZXZlbCA+IDBcbiAgICAgICAgPyBsb2dfbGV2ZWwgPiBsZXZlbFxuICAgICAgICA6IGxvZ19tZXRob2RzLmxlbmd0aCArIGxvZ19sZXZlbCA8PSBsZXZlbDtcbn1cblxuLy8gZXhlY3V0ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaWYgc2V0LlxuZnVuY3Rpb24gZXhlY19jYWxsYmFjayhhcmdzOiBhbnkpIHtcbiAgICBpZiAoY2FsbGJhY2tfZnVuYyAmJiAoY2FsbGJhY2tfZm9yY2UgfHwgIWNvbiB8fCAhY29uLmxvZykpIHtcbiAgICAgICAgY2FsbGJhY2tfZnVuYy5hcHBseSh3bmQsIGFyZ3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlckNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IGlkeCA9IHBhc3NfbWV0aG9kcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWlkeCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxQYXNzVGhyb3VnaE1ldGhvZChwYXNzX21ldGhvZHNbaWR4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZHggPSBsb2dfbWV0aG9kcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWlkeCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldExldmVsRnVuY3Rpb25zKGlkeCwgbG9nX21ldGhvZHNbaWR4XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobWVzc2FnZT86IGFueSwgLi4uYXJnczogYW55W10pIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2FybihtZXNzYWdlPzogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1lc3NhZ2U/OiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1lc3NhZ2U/OiBhbnksIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZyhtZXNzYWdlPzogYW55LCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsbFBhc3NUaHJvdWdoTWV0aG9kKG1ldGhvZDogc3RyaW5nKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIHBhc3MtdGhyb3VnaCBtZXRob2RzLiBUaGVzZSBtZXRob2RzIHdpbGwgYmUgY2FsbGVkLCBpZiB0aGV5XG4gICAgICAgIC8vIGV4aXN0LCBhcyBsb25nIGFzIHRoZSBsb2dnaW5nIGxldmVsIGlzIG5vbi16ZXJvLlxuICAgICAgICB0aGlzW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobG9nX2xldmVsICE9PSAwICYmIGNvbiAmJiBjb25bbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgIGNvblttZXRob2RdLmFwcGx5KGNvbiwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldExldmVsRnVuY3Rpb25zKGlkeDogbnVtYmVyLCBsZXZlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXNbbGV2ZWxdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFwcy5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBjb25zdCBsb2dfYXJyID0gW2xldmVsXS5jb25jYXQoYXJncyk7XG5cbiAgICAgICAgICAgIGxvZ3MucHVzaChsb2dfYXJyKTtcbiAgICAgICAgICAgIGV4ZWNfY2FsbGJhY2sobG9nX2Fycik7XG5cbiAgICAgICAgICAgIGlmICghY29uIHx8ICFpc19sZXZlbChpZHgpKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBjb25zdCBhcmdfbm9ybSA9IChhcmdzLmxlbmd0aCA9PT0gMSkgPyBhcmdzWzBdIDogYXJncztcblxuICAgICAgICAgICAgKDxhbnk+Y29uKS5maXJlYnVnID8gY29uW2xldmVsXS5hcHBseSh3bmQsIGFyZ19ub3JtKVxuICAgICAgICAgICAgICAgIDogY29uW2xldmVsXSA/IGNvbltsZXZlbF0oYXJnX25vcm0pXG4gICAgICAgICAgICAgICAgICAgIDogY29uLmxvZyhhcmdfbm9ybSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHNldENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgYXJncyA9IGFwcy5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICBtYXggPSBsb2dzLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSBtYXg7XG5cbiAgICAgICAgY2FsbGJhY2tfZnVuYyA9IGFyZ3Muc2hpZnQoKSB8fCBudWxsO1xuICAgICAgICBjYWxsYmFja19mb3JjZSA9IHR5cGVvZiBhcmdzWzBdID09PSBcImJvb2xlYW5cIiA/IGFyZ3Muc2hpZnQoKSA6IEZBTFNFO1xuXG4gICAgICAgIGkgLT0gdHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgPyBhcmdzLnNoaWZ0KCkgOiBtYXg7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBtYXgpIHtcbiAgICAgICAgICAgIGV4ZWNfY2FsbGJhY2sobG9nc1tpKytdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBwcmlvcml0eSBsZXZlbHM6XG4gICAgLy8gbG9nICgxKSA8IGRlYnVnICgyKSA8IGluZm8gKDMpIDwgd2FybiAoNCkgPCBlcnJvciAoNSlcbiAgICBwdWJsaWMgc2V0TGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgICAgICBsb2dfbGV2ZWwgPSBsZXZlbDtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgTG9nZ2VyOiBMb2dnZXJDbGFzcyA9IG5ldyBMb2dnZXJDbGFzcygpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBMb2dnZXIuc2V0TGV2ZWwoMSk7XG59IiwiaW1wb3J0IHsgSURpc3Bvc2FibGUsIElUeXBlZCB9IGZyb20gJy4uL1R5cGVzJztcbmltcG9ydCB7IElFdmVudEFyZ3MsIElFdmVudEFyZ3MxIH0gZnJvbSAnLi9JRXZlbnRBcmdzJztcbmltcG9ydCB7IElFdmVudEhhbmRsZXIsIElFdmVudEhhbmRsZXIxIH0gZnJvbSAnLi9JRXZlbnRIYW5kbGVyJztcbmltcG9ydCB7IElFdmVudCwgSUV2ZW50MSB9IGZyb20gJy4vSUV2ZW50JztcbmltcG9ydCB7IEV2ZW50QXJncywgRXZlbnRBcmdzMSB9IGZyb20gJy4vRXZlbnRBcmdzJztcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4vRXZlbnRIYW5kbGVyJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50IGltcGxlbWVudHMgSURpc3Bvc2FibGUsIElUeXBlZCwgSUV2ZW50IHtcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZyA9IFwiRXZlbnRcIjtcblxuICAgIHByaXZhdGUgaGFuZGxlcnM6IElFdmVudEhhbmRsZXJbXTtcblxuICAgIHB1YmxpYyBPbkhhbmRsZXJBdHRhY2hlZDogKCkgPT4gdm9pZCA9ICgpPT4geyB9O1xuXG4gICAgcHVibGljIE9uSGFuZGxlckF0dGFjaGVkQ29udGV4dDogYW55ID0gbnVsbDtcblxuICAgIHB1YmxpYyBPbkhhbmRsZXJEZXR0YWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgXG4gICAgcHVibGljIE9uSGFuZGxlckRldHRhY2hlZENvbnRleHQ6IGFueSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyBib3VuZCB0byB0aGUgZXZlbnQuXG4gICAgICovXG4gICAgcHVibGljIGhhc0JpbmRpbmcoaGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpID4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBFdmVudCBoYXMgYWN0aXZlIGJpbmRpbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyBoYXNCaW5kaW5ncygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NvY2lhdGVzIHRoZSBoYW5kbGVyIHdpdGggdGhlIEV2ZW50IG9iamVjdC5cbiAgICAgKiBAcGFyYW0gaGFuZGxlciBFdmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kKGhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0JpbmRpbmcoaGFuZGxlcikpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLk9uSGFuZGxlckF0dGFjaGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5PbkhhbmRsZXJBdHRhY2hlZC5jYWxsKHRoaXMuT25IYW5kbGVyQXR0YWNoZWRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzc29jaWF0ZXMgdGhlIGV2ZW50IGhhbmRsZXIgd2l0aCB0aGUgRXZlbnQgb2JqZWN0IHRvIGV4ZWN1dGUgbm8gbW9yZSB0aGFuIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzLlxuICAgICAqIEFmdGVyIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzLCB0aGUgYWN0aW9uIGlzIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSBoYW5kbGVyIEV2ZW50IGhhbmRsZXIuXG4gICAgICogQHBhcmFtIHRyaWdnZXJDb3VudCBOdW1iZXIgb2YgY2FsbHMgYmVmb3JlIHRoZSBoYW5kbGVyIGlzIGRpc2Nvbm5lY3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmluZEZvcihoYW5kbGVyOiBJRXZlbnRIYW5kbGVyLCB0cmlnZ2VyQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciB0cmlnZ2VyczogbnVtYmVyID0gMDtcbiAgICAgICAgdmFyIHdpcmU6IElFdmVudEhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKChhcmdzOiBJRXZlbnRBcmdzKSA9PiB7XG4gICAgICAgICAgICBpZiAoKyt0cmlnZ2VycyA+PSB0cmlnZ2VyQ291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGF0LnVuYmluZCh3aXJlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlci5pbnZva2UoYXJncyk7XG4gICAgICAgIH0sIGhhbmRsZXIuQ29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHdpcmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3RzIHRoZSBzcGVjaWZpZWQgaGFuZGxlciBmcm9tIHRoZSBFdmVudC5cbiAgICAgKiBAcGFyYW0gaGFuZGxlciBFdmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyB1bmJpbmQoaGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYWxsIGxpbmtlZCBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJpZ2dlcihhcmdzOiBJRXZlbnRBcmdzKTogdm9pZCB7XG4gICAgICAgIHZhciBoYW5kbGVyczogSUV2ZW50SGFuZGxlcltdO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0JpbmRpbmdzKCkpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVycy5zbGljZSgwKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2ldLmludm9rZShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgYXJndW1lbnRzIGFuZCBleGVjdXRlXG4gICAgICogQHBhcmFtIHNlbmRlciBFdmVudCBzZW5kZXJcbiAgICAgKiBAcGFyYW0gZGF0YSBFdmVudCBkYXRhXG4gICAgICovXG4gICAgcHVibGljIGZpcmUoc2VuZGVyOiBhbnksIGRhdGE/OiBhbnkpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKG5ldyBFdmVudEFyZ3Moc2VuZGVyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBldmVudCBhbmQgZGVsZXRlcyB0aGUgYmluZGluZyBvZiBhbGwgcmVsYXRlZCBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50MTxUPiBleHRlbmRzIEV2ZW50IGltcGxlbWVudHMgSUV2ZW50MTxUPiB7XG4gICAgcHVibGljIF90eXBlID0gXCJFdmVudDFcIjtcbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyc1xuICAgICAqL1xuICAgIEhhbmRsZXJzOiBJRXZlbnRIYW5kbGVyMTxUPltdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBc3NvY2lhdGVzIHRoZSBoYW5kbGVyIHdpdGggdGhlIEV2ZW50IG9iamVjdC5cbiAgICAgKiBAcGFyYW0gaGFuZGxlciBFdmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBiaW5kKGhhbmRsZXI6IElFdmVudEhhbmRsZXIxPFQ+KTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmJpbmQoaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzY29ubmVjdHMgdGhlIHNwZWNpZmllZCBoYW5kbGVyIGZyb20gdGhlIEV2ZW50LlxuICAgICAqIEBwYXJhbSBoYW5kbGVyIEV2ZW50IGhhbmRsZXIuXG4gICAgICovXG4gICAgcHVibGljIHVuYmluZChoYW5kbGVyOiBJRXZlbnRIYW5kbGVyMTxUPik6IHZvaWQge1xuICAgICAgICBzdXBlci51bmJpbmQoaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaGFuZGxlciBpcyBib3VuZCB0byB0aGUgZXZlbnQuXG4gICAgICovXG4gICAgcHVibGljIGhhc0JpbmRpbmcoaGFuZGxlcjogSUV2ZW50SGFuZGxlcjE8VD4pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc0JpbmRpbmcoaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYWxsIGxpbmtlZCBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJpZ2dlcihhcmdzOiBJRXZlbnRBcmdzMTxUPikge1xuICAgICAgICBzdXBlci50cmlnZ2VyKGFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgYXJndW1lbnRzIGFuZCBleGVjdXRlXG4gICAgICogQHBhcmFtIHNlbmRlciBFdmVudCBzZW5kZXJcbiAgICAgKiBAcGFyYW0gZGF0YSBFdmVudCBkYXRhXG4gICAgICovXG4gICAgcHVibGljIGZpcmUoc2VuZGVyOiBhbnksIGRhdGE6IFQpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKG5ldyBFdmVudEFyZ3MxPFQ+KHNlbmRlciwgZGF0YSkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJRXZlbnRBcmdzLCBJRXZlbnRBcmdzMSB9IGZyb20gJy4vSUV2ZW50QXJncyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRBcmdzIGltcGxlbWVudHMgSUV2ZW50QXJncyB7XHJcbiAgICAvKipcclxuICAgICAqIGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBTZW5kZXI6IGFueSkge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRBcmdzMTxUPiBleHRlbmRzIEV2ZW50QXJncyBpbXBsZW1lbnRzIElFdmVudEFyZ3MxPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoU2VuZGVyOiBhbnksIHB1YmxpYyBFdmVudERhdGE6IFQpIHtcclxuICAgICAgICBzdXBlcihTZW5kZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUV2ZW50QXJncywgSUV2ZW50QXJnczEgfSBmcm9tICcuL0lFdmVudEFyZ3MnO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciwgSUV2ZW50SGFuZGxlcjEgfSBmcm9tICcuL0lFdmVudEhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlciB7XG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgQ2FsbGJhY2s6IChhcmdzOiBJRXZlbnRBcmdzKSA9PiB2b2lkLCBwdWJsaWMgQ29udGV4dDogYW55KSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIG1ldGhvZCBmb3IgaGFuZGxpbmcgZXZlbnRzIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjYWxsZWQgb2JqZWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnZva2UoYXJnczogSUV2ZW50QXJncykge1xuICAgICAgICB0aGlzLkNhbGxiYWNrLmNhbGwodGhpcy5Db250ZXh0LCBhcmdzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXIxPFQ+IGV4dGVuZHMgRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjE8VD4ge1xuICAgIC8qKlxuICAgICAqIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoQ2FsbGJhY2s6IChhcmdzOiBJRXZlbnRBcmdzMTxUPikgPT4gdm9pZCwgQ29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKDxhbnk+Q2FsbGJhY2ssIENvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBtZXRob2QgZm9yIGhhbmRsaW5nIGV2ZW50cyBpbiB0aGUgY29udGV4dCBvZiB0aGUgY2FsbGVkIG9iamVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW52b2tlKGFyZ3M6IElFdmVudEFyZ3MxPFQ+KSB7XG4gICAgICAgIHN1cGVyLmludm9rZShhcmdzKTtcbiAgICB9XG59IiwiZXhwb3J0IHsgSUV2ZW50QXJncywgSUV2ZW50QXJnczEgfSBmcm9tICcuL0lFdmVudEFyZ3MnO1xyXG5leHBvcnQgeyBJRXZlbnRIYW5kbGVyLCBJRXZlbnRIYW5kbGVyMSB9IGZyb20gJy4vSUV2ZW50SGFuZGxlcic7XHJcbmV4cG9ydCB7IElFdmVudCwgSUV2ZW50MSB9IGZyb20gJy4vSUV2ZW50JztcclxuZXhwb3J0IHsgRXZlbnRBcmdzLCBFdmVudEFyZ3MxIH0gZnJvbSAnLi9FdmVudEFyZ3MnO1xyXG5leHBvcnQgeyBFdmVudEhhbmRsZXIsIEV2ZW50SGFuZGxlcjEgfSBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcbmV4cG9ydCB7IEV2ZW50LCBFdmVudDEgfSBmcm9tICcuL0V2ZW50JzsiLCJleHBvcnQgY29uc3QgZ3JlcCA9IChlbGVtczogYW55W10sIGNhbGxiYWNrOiBGdW5jdGlvbiwgaW52ZXJ0PzogYm9vbGVhbikgPT4ge1xuICAgIGxldCBjYWxsYmFja0ludmVyc2U6IGJvb2xlYW47XG4gICAgbGV0IG1hdGNoZXM6IGFueVtdID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICBjb25zdCBjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XG5cbiAgICAvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG4gICAgLy8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cbiAgICBmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgY2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKGVsZW1zWyBpIF0sIGkpO1xuICAgICAgICBpZiAoY2FsbGJhY2tJbnZlcnNlICE9PSBjYWxsYmFja0V4cGVjdCkge1xuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGVsZW1zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xufSIsImV4cG9ydCBjb25zdCBwdXNoaWYgPSAoYTogYW55W10sIGNvbmQ6IGJvb2xlYW4sIHZhbDogYW55KSA9PiB7XHJcbiAgICBpZiAoY29uZCkge1xyXG4gICAgICAgIGEucHVzaCh2YWwpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgZ3JlcCB9IGZyb20gJy4vR3JlcCc7XHJcbmV4cG9ydCB7IHB1c2hpZiB9IGZyb20gJy4vUHVzaGlmJzsiLCJjb25zdCB2YWx1ZVRvVHdvRGlnaXRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gKCh2YWx1ZSA8IDEwKSA/ICcwJyA6ICcnKSArIHZhbHVlO1xyXG59O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09IERhdGUgPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGRheXMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl07XHJcbmNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlVG9VVENTdHJpbmcgPSAoZGF0ZTogRGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgdGltZSA9IHZhbHVlVG9Ud29EaWdpdHMoZGF0ZS5nZXRVVENIb3VycygpKSArICc6JyArIHZhbHVlVG9Ud29EaWdpdHMoZGF0ZS5nZXRVVENNaW51dGVzKCkpICsgJzonICsgdmFsdWVUb1R3b0RpZ2l0cyhkYXRlLmdldFVUQ1NlY29uZHMoKSk7XHJcbiAgICByZXR1cm4gZGF5c1tkYXRlLmdldFVUQ0RheSgpXSArICcsICcgKyB2YWx1ZVRvVHdvRGlnaXRzKGRhdGUuZ2V0VVRDRGF0ZSgpKSArICcgJyArIG1vbnRoc1tkYXRlLmdldFVUQ01vbnRoKCldICsgJyAnICsgZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgJyAnICsgdGltZSArICcgR01UJztcclxufTsiLCJpbXBvcnQgeyBJbnRsIH0gZnJvbSAnLi4vLi4vSW50bCc7XG5cbmNvbnN0IHNlY29uZHNJbkRheSA9IDg2NDAwO1xuXG4vKipcbiAqIEZvcm1hdCB0aW1lc3RhbXBcbiAqIEBwYXJhbSB0aW1lc3RhbXAgdGltZXN0YW1wIGFzIG1pbGxpc2VjaW5kc1xuICovXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZXN0YW1wID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgIEludGwucmVnaXN0ZXIoKVxuXG4gICAgaWYgKGlzTmFOKHRpbWVzdGFtcCkpIHtcbiAgICAgICAgcmV0dXJuIEludGwudChcImFwcFwiLCBcInRpbWVfZW1wdHlcIik7XG4gICAgfVxuXG4gICAgdmFyIHBhZCA9IGZ1bmN0aW9uIChuLCBjKSB7XG4gICAgICAgIGlmICgobiA9IG4gKyBcIlwiKS5sZW5ndGggPCBjKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KCsrYyAtIG4ubGVuZ3RoKS5qb2luKFwiMFwiKSArIG47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbnVtV2l0aExhYmVsID0gZnVuY3Rpb24gKG46IG51bWJlciwgbGFiZWw6IHN0cmluZ1tdLCBwYWRsZW46IG51bWJlciwgc21hbGw6IGJvb2xlYW4sIGxlc3M6IGJvb2xlYW4sIGRlbGltZXRlcjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgaWYgKHNtYWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBwYWQobiwgcGFkbGVuKSArIGRlbGltZXRlciArIGxhYmVsWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoKG4gPiAxMCkgJiYgKG4gPCAyMCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIHBhZChuLCBwYWRsZW4pICsgZGVsaW1ldGVyICsgbGFiZWxbM107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkID0gbiAlIDEwO1xuICAgICAgICAgICAgaWYgKGQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgcGFkKG4sIHBhZGxlbikgKyBkZWxpbWV0ZXIgKyBsYWJlbFsxXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGQgPCA1KSAmJiAoZCAhPSAwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgcGFkKG4sIHBhZGxlbikgKyBkZWxpbWV0ZXIgKyBsYWJlbFsyXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBwYWQobiwgcGFkbGVuKSArIGRlbGltZXRlciArIGxhYmVsWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxlc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW50bC50KFwiYXBwXCIsIFwidGltZV9sZXNzb25lXCIpICsgXCIgXCIgKyBsYWJlbFsyXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEludGwudChcInRpbWVcIiwgXCJ0aW1lX2VtcHR5XCIpOztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZGF5V2l0aExhYmVsID0gZnVuY3Rpb24gKGQsIHNtYWxsLCBsZXNzKSB7XG4gICAgICAgIHJldHVybiBudW1XaXRoTGFiZWwoZCwgSW50bC50cyhcImFwcFwiLCBcInRpbWVfZGF5c1wiKSwgMCwgc21hbGwsIGxlc3MsIFwiIFwiKTtcbiAgICB9O1xuXG4gICAgdmFyIGhvdXJXaXRoTGFiZWwgPSBmdW5jdGlvbiAoZCwgc21hbGwsIGxlc3MpIHtcbiAgICAgICAgcmV0dXJuIG51bVdpdGhMYWJlbChkLCBJbnRsLnRzKFwiYXBwXCIsIFwidGltZV9ob3Vyc1wiKSwgMCwgc21hbGwsIGxlc3MsIFwiIFwiKTtcbiAgICB9O1xuXG4gICAgdmFyIG1pbnV0ZVdpdGhMYWJlbCA9IGZ1bmN0aW9uIChkLCBzbWFsbCwgbGVzcykge1xuICAgICAgICByZXR1cm4gbnVtV2l0aExhYmVsKGQsIEludGwudHMoXCJhcHBcIiwgXCJ0aW1lX21pbnV0ZXNcIiksIDAsIHNtYWxsLCBsZXNzLCBcIiBcIik7XG4gICAgfTtcblxuICAgIHZhciBzZWNvbmRXaXRoTGFiZWwgPSBmdW5jdGlvbiAoZCwgc21hbGwsIGxlc3MpIHtcbiAgICAgICAgcmV0dXJuIG51bVdpdGhMYWJlbChkLCBJbnRsLnRzKFwiYXBwXCIsIFwidGltZV9zZWNvbmRzXCIpLCAwLCBzbWFsbCwgbGVzcywgXCIgXCIpO1xuICAgIH07XG5cbiAgICBsZXQgdGltZXZhbCA9IE1hdGgucm91bmQodGltZXN0YW1wIC8gMTAwKTtcbiAgICBpZiAodGltZXZhbCA8IDApIHRpbWV2YWwgPSAwO1xuICAgIHZhciBkZGF5ID0gTWF0aC5mbG9vcih0aW1ldmFsIC8gODY0MDApOyB0aW1ldmFsIC09IGRkYXkgKiA4NjQwMDtcbiAgICB2YXIgZGhvdXIgPSBNYXRoLmZsb29yKHRpbWV2YWwgLyAzNjAwKTsgdGltZXZhbCAtPSBkaG91ciAqIDM2MDA7XG4gICAgdmFyIGRtaW4gPSBNYXRoLmZsb29yKHRpbWV2YWwgLyA2MCk7IHRpbWV2YWwgLT0gZG1pbiAqIDYwO1xuICAgIHZhciBkc2VjID0gdGltZXZhbDtcbiAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICBpZiAoKGRkYXkgPT0gMCkgJiYgKGRob3VyID09IDApICYmIChkbWluID09IDApICYmIChkc2VjID09IDApKSB7XG4gICAgICAgIHJlc3VsdCA9IFwiLVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkZGF5ID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGF5V2l0aExhYmVsKGRkYXksIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZGhvdXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiIFwiICsgaG91cldpdGhMYWJlbChkaG91ciwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBwYWQoZGhvdXIsIDIpICsgXCI6XCIgKyBwYWQoZG1pbiwgMikgKyBcIjpcIiArIHBhZChkc2VjLCAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHRvU2FmZUludGVnZXIgZnJvbSAnbG9kYXNoLWVzL3RvU2FmZUludGVnZXInO1xuXG5leHBvcnQgY29uc3QgcGFyc2VNaWNyb3NvZnRGb3JtYXRPZmZzZXQgPSAob2Zmc2V0OiBzdHJpbmcpID0+IHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldC5zdWJzdHIoMCwgMSkgPT09IFwiLVwiID8gLTEgOiAxO1xuXG4gICAgb2Zmc2V0ID0gb2Zmc2V0LnN1YnN0cmluZygxKTtcbiAgICBjb25zdCByZXN1bHQgPSAodG9TYWZlSW50ZWdlcihvZmZzZXQuc3Vic3RyKDAsIDIpKSAqIDYwKSArIHRvU2FmZUludGVnZXIob2Zmc2V0LnN1YnN0cmluZygyKSk7XG5cbiAgICByZXR1cm4gc2lnbiAqIHJlc3VsdDtcbn0iLCJleHBvcnQgeyBmb3JtYXRUaW1lc3RhbXAgfSBmcm9tICcuL0Zvcm1hdFRpbWVzdGFtcCc7XG5leHBvcnQgeyBwYXJzZU1pY3Jvc29mdEZvcm1hdE9mZnNldCB9IGZyb20gJy4vUGFyc2VNaWNyb3NvZnRGb3JtYXRPZmZzZXQnO1xuZXhwb3J0IHsgZGF0ZVRvVVRDU3RyaW5nIH0gZnJvbSAnLi9EYXRlVG9VVENTdHJpbmcnOyIsImltcG9ydCBtZWFuIGZyb20gJ2xvZGFzaC1lcy9tZWFuJztcblxuZXhwb3J0IGNvbnN0IHN0ZERldmlhdGlvbiA9IChhcnI6IG51bWJlcltdKSA9PiB7XG4gICAgdmFyIGF2ZyA9IG1lYW4oYXJyKSwgc3VtID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bSArPSBNYXRoLnBvdyhhcnJbaV0gLSBhdmcsIDIpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnNxcnQoc3VtIC8gKGFyci5sZW5ndGggLSAxKSk7XG59IiwiLy8gdXNlIF8ucmFuZ2UgZXhwb3J0IHsgaXNWYWx1ZU91dE9mUmFuZ2UgfSBmcm9tICcuL0lzVmFsdWVPdXRPZlJhbmdlJztcclxuLy8gdXNlIF8uY2xhbXAgZXhwb3J0IHsgZW5zdXJlVmFsdWVJblJhbmdlIH0gZnJvbSAnLi9FbnN1cmVWYWx1ZUluUmFuZ2UnO1xyXG5cclxuZXhwb3J0IHsgc3RkRGV2aWF0aW9uIH0gZnJvbSAnLi9TdGREZXZpYXRpb24nOyIsImltcG9ydCBwYWRFbmQgZnJvbSAnbG9kYXNoLWVzL3BhZEVuZCc7XG5pbXBvcnQgcGFkU3RhcnQgZnJvbSAnbG9kYXNoLWVzL3BhZFN0YXJ0JztcblxuZXhwb3J0IGNvbnN0IGp1c3RpZnkgPSAodmFsdWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcsIGxlZnRKdXN0aWZ5OiBib29sZWFuLCBtaW5XaWR0aDogbnVtYmVyLCB6ZXJvUGFkOiBib29sZWFuKSA9PiB7XG4gICAgdmFyIGRpZmYgPSBtaW5XaWR0aCAtIHZhbHVlLmxlbmd0aDtcbiAgICBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgaWYgKGxlZnRKdXN0aWZ5IHx8ICF6ZXJvUGFkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGxlZnRKdXN0aWZ5ID8gcGFkU3RhcnQodmFsdWUsIG1pbldpZHRoKSA6IHBhZEVuZCh2YWx1ZSwgbWluV2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSArIHBhZFN0YXJ0KCcnLCBkaWZmLCAnMCcpICsgdmFsdWUuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59IiwiZXhwb3J0IGNvbnN0IHBsdXJhbGl6ZSA9IChudW06IG51bWJlciwgc3RyT25lOiBzdHJpbmcsIHN0clR3bzogc3RyaW5nLCBzdHJGaXZlOiBzdHJpbmcpID0+IHtcclxuICAgIHN0ckZpdmUgPSBzdHJGaXZlIHx8IHN0clR3bztcclxuXHJcbiAgICBpZiAoKHN0clR3byA9PT0gc3RyRml2ZSkgJiYgKG51bSA+IDEpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clR3bztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKG51bSA+IDEwKSAmJiAobnVtIDwgMjApKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ckZpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGQgPSBudW0gJSAxMDtcclxuICAgIGlmIChkID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ck9uZTtcclxuICAgIH0gZWxzZSBpZiAoKGQgPCA1KSAmJiAoZCAhPT0gMCkpIHtcclxuICAgICAgICByZXR1cm4gc3RyVHdvO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RyRml2ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB0b1NhZmVJbnRlZ2VyIGZyb20gJ2xvZGFzaC1lcy90b1NhZmVJbnRlZ2VyJztcbmltcG9ydCBwYWRTdGFydCAgZnJvbSAgJ2xvZGFzaC1lcy9wYWRTdGFydCc7XG5pbXBvcnQgcGFkRW5kIGZyb20gJ2xvZGFzaC1lcy9wYWRFbmQnO1xuaW1wb3J0IHsganVzdGlmeSB9IGZyb20gJy4vSnVzdGlmeSc7XG5cbmV4cG9ydCB0eXBlIFJhZGl4VHlwZSA9IDIgfCA4IHwgMTAgfCAxNjtcblxuLy8gZm9ybWF0QmFzZVgoKVxuY29uc3QgZm9ybWF0QmFzZVggPSAodmFsdWU6IG51bWJlciwgYmFzZTogUmFkaXhUeXBlLCBwcmVmaXhCYXNlWDogYm9vbGVhbiwgbGVmdEp1c3RpZnk6IGJvb2xlYW4sIG1pbldpZHRoOiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyLCB6ZXJvUGFkOiBib29sZWFuKSA9PiB7XG4gICAgLy8gTm90ZTogY2FzdHMgbmVnYXRpdmUgbnVtYmVycyB0byBwb3NpdGl2ZSBvbmVzXG4gICAgY29uc3QgbnVtYmVyID0gdmFsdWUgPj4+IDA7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4QmFzZVggJiYgbnVtYmVyICYmIHsnMic6ICcwYicsICc4JzogJzAnLCAnMTAnOiAnJywgJzE2JzogJzB4J31bYmFzZV0gfHwgJyc7XG4gICAgY29uc3QgcmVzdWx0ID0gcHJlZml4ICsgcGFkU3RhcnQobnVtYmVyLnRvU3RyaW5nKGJhc2UpLCBwcmVjaXNpb24gfHwgMCwgJzAnKTtcbiAgICByZXR1cm4ganVzdGlmeShyZXN1bHQsIHByZWZpeCwgbGVmdEp1c3RpZnksIG1pbldpZHRoLCB6ZXJvUGFkKTtcbn1cblxuLy8gZm9ybWF0U3RyaW5nKClcbmNvbnN0IGZvcm1hdFN0cmluZyA9ICh2YWx1ZTogc3RyaW5nLCBsZWZ0SnVzdGlmeTogYm9vbGVhbiwgbWluV2lkdGg6IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIsIHplcm9QYWQ6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAocHJlY2lzaW9uICE9IG51bGwpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBwcmVjaXNpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBqdXN0aWZ5KHZhbHVlLCAnJywgbGVmdEp1c3RpZnksIG1pbldpZHRoLCB6ZXJvUGFkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNwcmludGYgPSAoZm9ybWF0OiBzdHJpbmcsIC4uLmEpID0+IHtcdC8vIFJldHVybiBhIGZvcm1hdHRlZCBzdHJpbmdcblx0Y29uc3QgcmVnZXggPSAvJSV8JShcXGQrXFwkKT8oWy0rIzAgXSopKFxcKlxcZCtcXCR8XFwqfFxcZCspPyhcXC4oXFwqXFxkK1xcJHxcXCp8XFxkKykpPyhbc2Nib3hYdWlkZmVnRUddKS9nO1xuXHRsZXQgaSA9IDA7XG5cblx0Ly8gZmluYWxGb3JtYXQoKVxuXHR2YXIgZG9Gb3JtYXQgPSBmdW5jdGlvbihzdWJzdHJpbmcsIHZhbHVlSW5kZXgsIGZsYWdzLCBtaW5XaWR0aCwgXywgcHJlY2lzaW9uLCB0eXBlKSB7XG5cdFx0aWYgKHN1YnN0cmluZyA9PSAnJSUnKSByZXR1cm4gJyUnO1xuXG5cdFx0Ly8gcGFyc2UgZmxhZ3Ncblx0XHR2YXIgbGVmdEp1c3RpZnkgPSBmYWxzZSwgcG9zaXRpdmVQcmVmaXggPSAnJywgemVyb1BhZCA9IGZhbHNlLCBwcmVmaXhCYXNlWCA9IGZhbHNlO1xuXHRcdGZvciAodmFyIGogPSAwOyBmbGFncyAmJiBqIDwgZmxhZ3MubGVuZ3RoOyBqKyspIHN3aXRjaCAoZmxhZ3MuY2hhckF0KGopKSB7XG5cdFx0XHRjYXNlICcgJzogcG9zaXRpdmVQcmVmaXggPSAnICc7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnKyc6IHBvc2l0aXZlUHJlZml4ID0gJysnOyBicmVhaztcblx0XHRcdGNhc2UgJy0nOiBsZWZ0SnVzdGlmeSA9IHRydWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnMCc6IHplcm9QYWQgPSB0cnVlOyBicmVhaztcblx0XHRcdGNhc2UgJyMnOiBwcmVmaXhCYXNlWCA9IHRydWU7IGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIHBhcmFtZXRlcnMgbWF5IGJlIG51bGwsIHVuZGVmaW5lZCwgZW1wdHktc3RyaW5nIG9yIHJlYWwgdmFsdWVkXG5cdFx0Ly8gd2Ugd2FudCB0byBpZ25vcmUgbnVsbCwgdW5kZWZpbmVkIGFuZCBlbXB0eS1zdHJpbmcgdmFsdWVzXG5cdFx0aWYgKCFtaW5XaWR0aCkge1xuXHRcdFx0bWluV2lkdGggPSAwO1xuXHRcdH0gZWxzZSBpZiAobWluV2lkdGggPT0gJyonKSB7XG5cdFx0XHRtaW5XaWR0aCA9ICthW2krK107XG5cdFx0fSBlbHNlIGlmIChtaW5XaWR0aC5jaGFyQXQoMCkgPT0gJyonKSB7XG5cdFx0XHRtaW5XaWR0aCA9ICthW21pbldpZHRoLnNsaWNlKDEsIC0xKV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1pbldpZHRoID0gK21pbldpZHRoO1xuXHRcdH1cblxuXHRcdC8vIE5vdGU6IHVuZG9jdW1lbnRlZCBwZXJsIGZlYXR1cmU6XG5cdFx0aWYgKG1pbldpZHRoIDwgMCkge1xuXHRcdFx0bWluV2lkdGggPSAtbWluV2lkdGg7XG5cdFx0XHRsZWZ0SnVzdGlmeSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCFpc0Zpbml0ZShtaW5XaWR0aCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignc3ByaW50ZjogKG1pbmltdW0tKXdpZHRoIG11c3QgYmUgZmluaXRlJyk7XG5cdFx0fVxuXG5cdFx0aWYgKCFwcmVjaXNpb24pIHtcblx0XHRcdHByZWNpc2lvbiA9ICdmRmVFJy5pbmRleE9mKHR5cGUpID4gLTEgPyA2IDogKHR5cGUgPT0gJ2QnKSA/IDAgOiB2b2lkKDApO1xuXHRcdH0gZWxzZSBpZiAocHJlY2lzaW9uID09ICcqJykge1xuXHRcdFx0cHJlY2lzaW9uID0gK2FbaSsrXTtcblx0XHR9IGVsc2UgaWYgKHByZWNpc2lvbi5jaGFyQXQoMCkgPT0gJyonKSB7XG5cdFx0XHRwcmVjaXNpb24gPSArYVtwcmVjaXNpb24uc2xpY2UoMSwgLTEpXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJlY2lzaW9uID0gK3ByZWNpc2lvbjtcblx0XHR9XG5cblx0XHQvLyBncmFiIHZhbHVlIHVzaW5nIHZhbHVlSW5kZXggaWYgcmVxdWlyZWQ/XG5cdFx0dmFyIHZhbHVlID0gdmFsdWVJbmRleCA/IGFbdmFsdWVJbmRleC5zbGljZSgwLCAtMSldIDogYVtpKytdO1xuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdzJzogcmV0dXJuIGZvcm1hdFN0cmluZyhTdHJpbmcodmFsdWUpLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgemVyb1BhZCk7XG5cdFx0XHRjYXNlICdjJzogcmV0dXJuIGZvcm1hdFN0cmluZyhTdHJpbmcuZnJvbUNoYXJDb2RlKCt2YWx1ZSksIGxlZnRKdXN0aWZ5LCBtaW5XaWR0aCwgcHJlY2lzaW9uLCB6ZXJvUGFkKTtcblx0XHRcdGNhc2UgJ2InOiByZXR1cm4gZm9ybWF0QmFzZVgodmFsdWUsIDIsIHByZWZpeEJhc2VYLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgemVyb1BhZCk7XG5cdFx0XHRjYXNlICdvJzogcmV0dXJuIGZvcm1hdEJhc2VYKHZhbHVlLCA4LCBwcmVmaXhCYXNlWCwgbGVmdEp1c3RpZnksIG1pbldpZHRoLCBwcmVjaXNpb24sIHplcm9QYWQpO1xuXHRcdFx0Y2FzZSAneCc6IHJldHVybiBmb3JtYXRCYXNlWCh2YWx1ZSwgMTYsIHByZWZpeEJhc2VYLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgemVyb1BhZCk7XG5cdFx0XHRjYXNlICdYJzogcmV0dXJuIGZvcm1hdEJhc2VYKHZhbHVlLCAxNiwgcHJlZml4QmFzZVgsIGxlZnRKdXN0aWZ5LCBtaW5XaWR0aCwgcHJlY2lzaW9uLCB6ZXJvUGFkKS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0Y2FzZSAndSc6IHJldHVybiBmb3JtYXRCYXNlWCh2YWx1ZSwgMTAsIHByZWZpeEJhc2VYLCBsZWZ0SnVzdGlmeSwgbWluV2lkdGgsIHByZWNpc2lvbiwgemVyb1BhZCk7XG5cdFx0XHRjYXNlICdpJzpcblx0XHRcdGNhc2UgJ2QnOiB7XG5cdFx0XHRcdFx0XHR2YXIgbnVtYmVyID0gdG9TYWZlSW50ZWdlcigrdmFsdWUpO1xuXHRcdFx0XHRcdFx0dmFyIHByZWZpeCA9IG51bWJlciA8IDAgPyAnLScgOiBwb3NpdGl2ZVByZWZpeDtcblx0XHRcdFx0XHRcdHZhbHVlID0gcHJlZml4ICsgcGFkRW5kKFN0cmluZyhNYXRoLmFicyhudW1iZXIpKSwgcHJlY2lzaW9uLCAnMCcpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGp1c3RpZnkodmFsdWUsIHByZWZpeCwgbGVmdEp1c3RpZnksIG1pbldpZHRoLCB6ZXJvUGFkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRjYXNlICdlJzpcblx0XHRcdGNhc2UgJ0UnOlxuXHRcdFx0Y2FzZSAnZic6XG5cdFx0XHRjYXNlICdGJzpcblx0XHRcdGNhc2UgJ2cnOlxuXHRcdFx0Y2FzZSAnRyc6XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR2YXIgbnVtYmVyID0gK3ZhbHVlO1xuXHRcdFx0XHRcdFx0dmFyIHByZWZpeCA9IG51bWJlciA8IDAgPyAnLScgOiBwb3NpdGl2ZVByZWZpeDtcblx0XHRcdFx0XHRcdHZhciBtZXRob2QgPSBbJ3RvRXhwb25lbnRpYWwnLCAndG9GaXhlZCcsICd0b1ByZWNpc2lvbiddWydlZmcnLmluZGV4T2YodHlwZS50b0xvd2VyQ2FzZSgpKV07XG5cdFx0XHRcdFx0XHR2YXIgdGV4dFRyYW5zZm9ybSA9IFsndG9TdHJpbmcnLCAndG9VcHBlckNhc2UnXVsnZUVmRmdHJy5pbmRleE9mKHR5cGUpICUgMl07XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHByZWZpeCArIE1hdGguYWJzKG51bWJlcilbbWV0aG9kXShwcmVjaXNpb24pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGp1c3RpZnkodmFsdWUsIHByZWZpeCwgbGVmdEp1c3RpZnksIG1pbldpZHRoLCB6ZXJvUGFkKVt0ZXh0VHJhbnNmb3JtXSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6IHJldHVybiBzdWJzdHJpbmc7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBmb3JtYXQucmVwbGFjZShyZWdleCwgZG9Gb3JtYXQpO1xufSIsImV4cG9ydCB7IGp1c3RpZnkgfSBmcm9tICcuL0p1c3RpZnknO1xyXG5leHBvcnQgeyBwbHVyYWxpemUgfSBmcm9tICcuL1BsdXJhbGl6ZSc7XHJcbmV4cG9ydCB7IHNwcmludGYgfSBmcm9tICcuL1NwcmludGYnOyIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC1lcy9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9ICguLi5mdW5jcykgPT4ge1xuICAgIHJldHVybiBmdW5jc1xuICAgICAgICAuZmlsdGVyKGYgPT4gKGlzRnVuY3Rpb24oZikpKVxuICAgICAgICAucmVkdWNlKChhY2MsIGYpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbihmKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjYyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgfSwgbnVsbCk7XG59IiwiZXhwb3J0IHsgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIH0gZnJvbSAnLi9DcmVhdGVDaGFpbmVkRnVuY3Rpb24nOyIsImV4cG9ydCAqIGZyb20gJy4vZm4vYXJyYXkvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZuL3N0cmluZy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZm4vbnVtYmVyL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9mbi9kYXRlL2luZGV4JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vZm4vdXRpbHMvaW5kZXgnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9hcHAvaW5kZXgnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IHsgSGFzaHRhYmxlIH0gZnJvbSAnLi9IYXNodGFibGUnO1xyXG5leHBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL0xvZ2dlcic7XHJcbmV4cG9ydCB7IEludGwgfSBmcm9tICcuL0ludGwnO1xyXG5pbXBvcnQgeyBJRGlzcG9zYWJsZSwgSVR5cGVkLCBJRXJyb3IgfSBmcm9tICcuL1R5cGVzJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==