/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

var _loadImg = __webpack_require__(2);

var _loadImg2 = _interopRequireDefault(_loadImg);

var _toggleBg = __webpack_require__(3);

var _toggleBg2 = _interopRequireDefault(_toggleBg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _sum2.default)(1, 2));
var src = __webpack_require__(6);
(0, _loadImg2.default)(src).then(function (img) {
  console.log('\u56FE\u7247\u7684\u5BBD\u5EA6\uFF1A' + img.width);
  return img;
}).then(function (img) {
  console.log('\u56FE\u7247\u7684\u9AD8\u5EA6\uFF1A' + img.height);
  document.getElementById("app").appendChild(img);
});

(0, _toggleBg2.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by jinhua on 2018/12/27.
 */
exports.default = function (a, b) {
  return a + b;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Created by jinhua on 2018/12/27.
 */

exports.default = function (src) {
  return new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject();
    };
    img.src = src;
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _orange = __webpack_require__(4);

var _orange2 = _interopRequireDefault(_orange);

var _gray = __webpack_require__(5);

var _gray2 = _interopRequireDefault(_gray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jinhua on 2018/12/28.
 */

exports.default = function () {
  var bgFlag = true;
  document.onclick = function () {
    if (bgFlag) {
      _orange2.default.use();
      _gray2.default.unuse();
    } else {
      _orange2.default.unuse();
      _gray2.default.use();
    }
    bgFlag = !bgFlag;
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
/******/ ]);