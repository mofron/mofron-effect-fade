/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file mofron-effect-fade/index.js
	 */

	mofron.effect.Fade = function (_mofron$effect$Base) {
	    _inherits(_class, _mofron$effect$Base);

	    function _class(tgt, spd) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, tgt, spd));

	            _this.exec = false;
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'effect_func',
	        value: function effect_func(flg, vd) {
	            try {
	                if (false === this.exec) {
	                    vd.setStyle('-webkit-transition', this.speed + 's all linear 0s');
	                    vd.setStyle('-moz-transition', 'all ' + this.speed + 's');
	                    vd.setStyle('-ms-transition', 'all ' + this.speed + 's');
	                    vd.setStyle('-o-transition', 'all ' + this.speed + 's');
	                    vd.setStyle('transtion', this.speed + 's all linear 0s');

	                    if (true === flg) {
	                        vd.setStyle('opacity', '0');
	                    } else {
	                        vd.setStyle('opacity', '1');
	                    }
	                }

	                var disp = vd.getStyle('display');
	                if ('none' == disp) {
	                    vd.setStyle('display', null);
	                }

	                setTimeout(function (prm) {
	                    if (true === prm[1]) {
	                        prm[0].setStyle('opacity', '1');
	                    } else {
	                        prm[0].setStyle('opacity', '0');
	                    }
	                }, 200, [vd, flg]);
	                this.exec = true;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.effect.Base);

/***/ }
/******/ ]);