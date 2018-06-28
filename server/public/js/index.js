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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

//数组解构赋值
{
	var a = void 0,
	    b = void 0,
	    rest = void 0;
	a = 1;
	b = 2;

	console.log(a, b); //1 2
}

{
	var _a = void 0,
	    _b = void 0,
	    _rest = void 0;
	_a = 1;
	_b = 2;
	_rest = [3, 4, 5, 6];

	console.log(_a, _b, _rest); //1 2 [3, 4, 5, 6]
}

{
	var _a2 = void 0,
	    _b2 = void 0,
	    c = void 0,
	    _rest2 = void 0;
	var _ref = [1, 2];
	_a2 = _ref[0];
	_b2 = _ref[1];
	var _ref$ = _ref[2];
	c = _ref$ === undefined ? 3 : _ref$;

	console.log(_a2, _b2, c); //1 2 3
}

{
	var _a3 = void 0,
	    _b3 = void 0,
	    _c = void 0,
	    _rest3 = void 0;
	var _ref2 = [1, 2];
	_a3 = _ref2[0];
	_b3 = _ref2[1];
	_c = _ref2[2];

	console.log(_a3, _b3, _c); //1 2 undefined
}

//对象解构赋值
{
	var _a4 = void 0,
	    _b4 = void 0;
	var _a$b = { a: 1, b: 2 };
	_a4 = _a$b.a;
	_b4 = _a$b.b;

	console.log(_a4, _b4); //1 2
}

{
	var _a5 = void 0,
	    _b5 = void 0,
	    _c2 = void 0,
	    _rest4 = void 0;
	var _a$b2 = { a: 1, b: 2 };
	_a5 = _a$b2.a;
	_b5 = _a$b2.b;
	var _a$b2$c = _a$b2.c;
	_c2 = _a$b2$c === undefined ? 3 : _a$b2$c;

	console.log(_a5, _b5, _c2); //1 2 3
}

{
	var o = { e: 22, f: true };
	var e = o.e,
	    f = o.f;

	console.log(e, f); //22 true
}

{
	var _a7 = { a: 3 },
	    _a7$a = _a7.a,
	    _a6 = _a7$a === undefined ? 10 : _a7$a,
	    _a7$b = _a7.b,
	    _b6 = _a7$b === undefined ? 5 : _a7$b;

	console.log(_a6, _b6); //3 5
}

{
	var metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'description'
		}]
	};

	var esTitle = metaData.title,
	    _metaData$test = _slicedToArray(metaData.test, 1),
	    cnTitle = _metaData$test[0].title;

	console.log(esTitle, cnTitle);
}

/**
 *使用场景
 */

//交换变量
{
	var _a8 = 1;
	var _b7 = 2;
	var _ref3 = [_b7, _a8];
	_a8 = _ref3[0];
	_b7 = _ref3[1];

	console.log(_a8, _b7); //2 1
}

//取函数运行结果
{
	var _f = function _f() {
		return [1, 2];
	};

	var _a9 = void 0,
	    _b8 = void 0;

	var _f2 = _f();

	var _f3 = _slicedToArray(_f2, 2);

	_a9 = _f3[0];
	_b8 = _f3[1];

	console.log(_a9, _b8); //1 2
}

//函数返回多个值，选择性接收某几个变量
{
	var _f4 = function _f4() {
		return [1, 2, 3, 4, 5];
	};

	var _a10 = void 0,
	    _b9 = void 0,
	    _c3 = void 0;

	var _f5 = _f4();

	var _f6 = _slicedToArray(_f5, 4);

	_a10 = _f6[0];
	_b9 = _f6[3];

	console.log(_a10, _b9); //1 4
}

//不确定返回数组长度，只关心第一个
{
	var _f7 = function _f7() {
		return [1, 2, 3, 4, 5];
	};

	var _a11 = void 0,
	    _b10 = void 0,
	    _c4 = void 0;

	var _f8 = _f7();

	var _f9 = _toArray(_f8);

	_a11 = _f9[0];
	_b10 = _f9.slice(1);

	console.log(_a11, _b10); //1 [2, 3, 4, 5]
}

/***/ })
/******/ ]);