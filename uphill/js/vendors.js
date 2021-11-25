"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 7.3.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 18, 2021
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function t() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(a).forEach(function (i) {
      void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function a() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }

  var i = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function r() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, i), e;
  }

  var n = /*#__PURE__*/function (_Array) {
    _inherits(n, _Array);

    var _super = _createSuper(n);

    function n(e) {
      var _this;

      _classCallCheck(this, n);

      _this = _super.call.apply(_super, [this].concat(_toConsumableArray(e || []))), function (e) {
        var t = e.__proto__;
        Object.defineProperty(e, "__proto__", {
          get: function get() {
            return t;
          },
          set: function set(e) {
            t.__proto__ = e;
          }
        });
      }(_assertThisInitialized(_this));
      return _this;
    }

    return n;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function l() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, _toConsumableArray(l(e))) : t.push(e);
    }), t;
  }

  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function d(e, t) {
    var s = r(),
        i = a();
    var l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);

    if ("string" == typeof e) {
      var _s = e.trim();

      if (_s.indexOf("<") >= 0 && _s.indexOf(">") >= 0) {
        var _e = "div";
        0 === _s.indexOf("<li") && (_e = "ul"), 0 === _s.indexOf("<tr") && (_e = "tbody"), 0 !== _s.indexOf("<td") && 0 !== _s.indexOf("<th") || (_e = "tr"), 0 === _s.indexOf("<tbody") && (_e = "table"), 0 === _s.indexOf("<option") && (_e = "select");

        var _t = i.createElement(_e);

        _t.innerHTML = _s;

        for (var _e2 = 0; _e2 < _t.childNodes.length; _e2 += 1) {
          l.push(_t.childNodes[_e2]);
        }
      } else l = function (e, t) {
        if ("string" != typeof e) return [e];
        var s = [],
            a = t.querySelectorAll(e);

        for (var _e3 = 0; _e3 < a.length; _e3 += 1) {
          s.push(a[_e3]);
        }

        return s;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }

    return new n(function (e) {
      var t = [];

      for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
        -1 === t.indexOf(e[_s2]) && t.push(e[_s2]);
      }

      return t;
    }(l));
  }

  d.fn = n.prototype;
  var c = {
    addClass: function addClass() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(t));
      }), this;
    },
    removeClass: function removeClass() {
      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, _toConsumableArray(t));
      }), this;
    },
    hasClass: function hasClass() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      return o(this, function (e) {
        return t.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }

      var t = l(e.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        t.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
        if (2 === arguments.length) this[_s3].setAttribute(e, t);else for (var _t2 in e) {
          this[_s3][_t2] = e[_t2], this[_s3].setAttribute(_t2, e[_t2]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t3 = 0; _t3 < this.length; _t3 += 1) {
        this[_t3].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var _t4 = 0; _t4 < this.length; _t4 += 1) {
        this[_t4].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
        this[_t5].style.transitionDuration = "string" != typeof e ? "".concat(e, "ms") : e;
      }

      return this;
    },
    on: function on() {
      var _e5, _e6;

      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }

      var t = e[0],
          s = e[1],
          a = e[2],
          i = e[3];

      function r(e) {
        var t = e.target;
        if (!t) return;
        var i = e.target.dom7EventData || [];
        if (i.indexOf(e) < 0 && i.unshift(e), d(t).is(s)) a.apply(t, i);else {
          var _e4 = d(t).parents();

          for (var _t6 = 0; _t6 < _e4.length; _t6 += 1) {
            d(_e4[_t6]).is(s) && a.apply(_e4[_t6], i);
          }
        }
      }

      function n(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
      }

      "function" == typeof e[1] && ((_e5 = e, _e6 = _slicedToArray(_e5, 3), t = _e6[0], a = _e6[1], i = _e6[2], _e5), s = void 0), i || (i = !1);
      var l = t.split(" ");
      var o;

      for (var _e7 = 0; _e7 < this.length; _e7 += 1) {
        var _t7 = this[_e7];
        if (s) for (o = 0; o < l.length; o += 1) {
          var _e8 = l[o];
          _t7.dom7LiveListeners || (_t7.dom7LiveListeners = {}), _t7.dom7LiveListeners[_e8] || (_t7.dom7LiveListeners[_e8] = []), _t7.dom7LiveListeners[_e8].push({
            listener: a,
            proxyListener: r
          }), _t7.addEventListener(_e8, r, i);
        } else for (o = 0; o < l.length; o += 1) {
          var _e9 = l[o];
          _t7.dom7Listeners || (_t7.dom7Listeners = {}), _t7.dom7Listeners[_e9] || (_t7.dom7Listeners[_e9] = []), _t7.dom7Listeners[_e9].push({
            listener: a,
            proxyListener: n
          }), _t7.addEventListener(_e9, n, i);
        }
      }

      return this;
    },
    off: function off() {
      var _e10, _e11;

      for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        e[_key6] = arguments[_key6];
      }

      var t = e[0],
          s = e[1],
          a = e[2],
          i = e[3];
      "function" == typeof e[1] && ((_e10 = e, _e11 = _slicedToArray(_e10, 3), t = _e11[0], a = _e11[1], i = _e11[2], _e10), s = void 0), i || (i = !1);
      var r = t.split(" ");

      for (var _e12 = 0; _e12 < r.length; _e12 += 1) {
        var _t8 = r[_e12];

        for (var _e13 = 0; _e13 < this.length; _e13 += 1) {
          var _r = this[_e13];

          var _n2 = void 0;

          if (!s && _r.dom7Listeners ? _n2 = _r.dom7Listeners[_t8] : s && _r.dom7LiveListeners && (_n2 = _r.dom7LiveListeners[_t8]), _n2 && _n2.length) for (var _e14 = _n2.length - 1; _e14 >= 0; _e14 -= 1) {
            var _s4 = _n2[_e14];
            a && _s4.listener === a || a && _s4.listener && _s4.listener.dom7proxy && _s4.listener.dom7proxy === a ? (_r.removeEventListener(_t8, _s4.proxyListener, i), _n2.splice(_e14, 1)) : a || (_r.removeEventListener(_t8, _s4.proxyListener, i), _n2.splice(_e14, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }

      var t = r(),
          s = e[0].split(" "),
          a = e[1];

      for (var _i2 = 0; _i2 < s.length; _i2 += 1) {
        var _r2 = s[_i2];

        for (var _s5 = 0; _s5 < this.length; _s5 += 1) {
          var _i3 = this[_s5];

          if (t.CustomEvent) {
            var _s6 = new t.CustomEvent(_r2, {
              detail: a,
              bubbles: !0,
              cancelable: !0
            });

            _i3.dom7EventData = e.filter(function (e, t) {
              return t > 0;
            }), _i3.dispatchEvent(_s6), _i3.dom7EventData = [], delete _i3.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function s(a) {
        a.target === this && (e.call(this, a), t.off("transitionend", s));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e15 = this.styles();

          return this[0].offsetWidth + parseFloat(_e15.getPropertyValue("margin-right")) + parseFloat(_e15.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e16 = this.styles();

          return this[0].offsetHeight + parseFloat(_e16.getPropertyValue("margin-top")) + parseFloat(_e16.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e17 = r(),
            _t9 = a(),
            _s7 = this[0],
            _i4 = _s7.getBoundingClientRect(),
            _n3 = _t9.body,
            _l = _s7.clientTop || _n3.clientTop || 0,
            _o = _s7.clientLeft || _n3.clientLeft || 0,
            _d2 = _s7 === _e17 ? _e17.scrollY : _s7.scrollTop,
            _c = _s7 === _e17 ? _e17.scrollX : _s7.scrollLeft;

        return {
          top: _i4.top + _d2 - _l,
          left: _i4.left + _c - _o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var s = r();
      var a;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var _t10 in e) {
              this[a].style[_t10] = e[_t10];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, s) {
        e.apply(t, [t, s]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var _t11 = 0; _t11 < this.length; _t11 += 1) {
        this[_t11].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t12 = 0; _t12 < this.length; _t12 += 1) {
        this[_t12].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t = r(),
          s = a(),
          i = this[0];
      var l, o;
      if (!i || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);

        for (l = d(e), o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      if (e === s) return i === s;
      if (e === t) return i === t;

      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) {
          if (l[o] === i) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return d([]);

      if (e < 0) {
        var _s8 = t + e;

        return d(_s8 < 0 ? [] : [this[_s8]]);
      }

      return d([this[e]]);
    },
    append: function append() {
      var t;
      var s = a();

      for (var _a = 0; _a < arguments.length; _a += 1) {
        t = _a < 0 || arguments.length <= _a ? undefined : arguments[_a];

        for (var _e18 = 0; _e18 < this.length; _e18 += 1) {
          if ("string" == typeof t) {
            var _a2 = s.createElement("div");

            for (_a2.innerHTML = t; _a2.firstChild;) {
              this[_e18].appendChild(_a2.firstChild);
            }
          } else if (t instanceof n) for (var _s9 = 0; _s9 < t.length; _s9 += 1) {
            this[_e18].appendChild(t[_s9]);
          } else this[_e18].appendChild(t);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t = a();
      var s, i;

      for (s = 0; s < this.length; s += 1) {
        if ("string" == typeof e) {
          var _a3 = t.createElement("div");

          for (_a3.innerHTML = e, i = _a3.childNodes.length - 1; i >= 0; i -= 1) {
            this[s].insertBefore(_a3.childNodes[i], this[s].childNodes[0]);
          }
        } else if (e instanceof n) for (i = 0; i < e.length; i += 1) {
          this[s].insertBefore(e[i], this[s].childNodes[0]);
        } else this[s].insertBefore(e, this[s].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.nextElementSibling;) {
        var _a4 = s.nextElementSibling;
        e ? d(_a4).is(e) && t.push(_a4) : t.push(_a4), s = _a4;
      }

      return d(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t13 = this[0];
        return e ? _t13.previousElementSibling && d(_t13.previousElementSibling).is(e) ? d([_t13.previousElementSibling]) : d([]) : _t13.previousElementSibling ? d([_t13.previousElementSibling]) : d([]);
      }

      return d([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return d([]);

      for (; s.previousElementSibling;) {
        var _a5 = s.previousElementSibling;
        e ? d(_a5).is(e) && t.push(_a5) : t.push(_a5), s = _a5;
      }

      return d(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _s10 = 0; _s10 < this.length; _s10 += 1) {
        null !== this[_s10].parentNode && (e ? d(this[_s10].parentNode).is(e) && t.push(this[_s10].parentNode) : t.push(this[_s10].parentNode));
      }

      return d(t);
    },
    parents: function parents(e) {
      var t = [];

      for (var _s11 = 0; _s11 < this.length; _s11 += 1) {
        var _a6 = this[_s11].parentNode;

        for (; _a6;) {
          e ? d(_a6).is(e) && t.push(_a6) : t.push(_a6), _a6 = _a6.parentNode;
        }
      }

      return d(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _s12 = 0; _s12 < this.length; _s12 += 1) {
        var _a7 = this[_s12].querySelectorAll(e);

        for (var _e19 = 0; _e19 < _a7.length; _e19 += 1) {
          t.push(_a7[_e19]);
        }
      }

      return d(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s13 = 0; _s13 < this.length; _s13 += 1) {
        var _a8 = this[_s13].children;

        for (var _s14 = 0; _s14 < _a8.length; _s14 += 1) {
          e && !d(_a8[_s14]).is(e) || t.push(_a8[_s14]);
        }
      }

      return d(t);
    },
    filter: function filter(e) {
      return d(o(this, e));
    },
    remove: function remove() {
      for (var _e20 = 0; _e20 < this.length; _e20 += 1) {
        this[_e20].parentNode && this[_e20].parentNode.removeChild(this[_e20]);
      }

      return this;
    }
  };

  function p(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(e, t);
  }

  function u() {
    return Date.now();
  }

  function h(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
    var s = r();
    var a, i, n;

    var l = function (e) {
      var t = r();
      var s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);

    return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function m(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function f() {
    var t = Object(arguments.length <= 0 ? undefined : arguments[0]),
        s = ["__proto__", "constructor", "prototype"];

    for (var _i5 = 1; _i5 < arguments.length; _i5 += 1) {
      var _r3 = _i5 < 0 || arguments.length <= _i5 ? undefined : arguments[_i5];

      if (null != _r3 && (a = _r3, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
        var _e21 = Object.keys(Object(_r3)).filter(function (e) {
          return s.indexOf(e) < 0;
        });

        for (var _s15 = 0, _a9 = _e21.length; _s15 < _a9; _s15 += 1) {
          var _a10 = _e21[_s15],
              _i6 = Object.getOwnPropertyDescriptor(_r3, _a10);

          void 0 !== _i6 && _i6.enumerable && (m(t[_a10]) && m(_r3[_a10]) ? _r3[_a10].__swiper__ ? t[_a10] = _r3[_a10] : f(t[_a10], _r3[_a10]) : !m(t[_a10]) && m(_r3[_a10]) ? (t[_a10] = {}, _r3[_a10].__swiper__ ? t[_a10] = _r3[_a10] : f(t[_a10], _r3[_a10])) : t[_a10] = _r3[_a10]);
        }
      }
    }

    var a;
    return t;
  }

  function g(e, t, s) {
    e.style.setProperty(t, s);
  }

  function v(_ref) {
    var e = _ref.swiper,
        t = _ref.targetPosition,
        s = _ref.side;
    var a = r(),
        i = -e.translate;
    var n,
        l = null;
    var o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);

    var d = t > i ? "next" : "prev",
        c = function c(e, t) {
      return "next" === d && e >= t || "prev" === d && e <= t;
    },
        p = function p() {
      n = new Date().getTime(), null === l && (l = n);
      var r = Math.max(Math.min((n - l) / o, 1), 0),
          d = .5 - Math.cos(r * Math.PI) / 2;
      var u = i + d * (t - i);
      if (c(u, t) && (u = t), e.wrapperEl.scrollTo(_defineProperty({}, s, u)), c(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo(_defineProperty({}, s, u));
      }), void a.cancelAnimationFrame(e.cssModeFrameID);
      e.cssModeFrameID = a.requestAnimationFrame(p);
    };

    p();
  }

  var w, b, x;

  function y() {
    return w || (w = function () {
      var e = r(),
          t = a();
      return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function () {
          var t = !1;

          try {
            var _s16 = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });

            e.addEventListener("testPassiveListener", null, _s16);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), w;
  }

  function E() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return b || (b = function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          e = _ref2.userAgent;

      var t = y(),
          s = r(),
          a = s.navigator.platform,
          i = e || s.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          l = s.screen.width,
          o = s.screen.height,
          d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
      var c = i.match(/(iPad).*OS\s([\d_]+)/);
      var p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
          u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          h = "Win32" === a;
      var m = "MacIntel" === a;
      return !c && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(o)) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !h && (n.os = "android", n.android = !0), (c || u || p) && (n.os = "ios", n.ios = !0), n;
    }(e)), b;
  }

  function T() {
    return x || (x = function () {
      var e = r();
      return {
        isSafari: function () {
          var t = e.navigator.userAgent.toLowerCase();
          return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
      };
    }()), x;
  }

  Object.keys(c).forEach(function (e) {
    Object.defineProperty(d.fn, e, {
      value: c[e],
      writable: !0
    });
  });
  var C = {
    on: function on(e, t, s) {
      var a = this;
      if ("function" != typeof t) return a;
      var i = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
      }), a;
    },
    once: function once(e, t, s) {
      var a = this;
      if ("function" != typeof t) return a;

      function i() {
        for (var _len8 = arguments.length, s = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          s[_key8] = arguments[_key8];
        }

        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, s);
      }

      return i.__emitterProxy = t, a.on(e, i, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if ("function" != typeof e) return s;
      var a = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (a, i) {
          (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var t = this;
      if (!t.eventsListeners) return t;
      var s, a, i;

      for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        e[_key9] = arguments[_key9];
      }

      "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], a = e.slice(1, e.length), i = t) : (s = e[0].events, a = e[0].data, i = e[0].context || t), a.unshift(i);
      return (Array.isArray(s) ? s : s.split(" ")).forEach(function (e) {
        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(function (t) {
          t.apply(i, [e].concat(_toConsumableArray(a)));
        }), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(function (e) {
          e.apply(i, a);
        });
      }), t;
    }
  };

  function $(_ref3) {
    var e = _ref3.swiper,
        t = _ref3.runCallbacks,
        s = _ref3.direction,
        a = _ref3.step;
    var i = e.activeIndex,
        r = e.previousIndex;
    var n = s;

    if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit("transition".concat(a)), t && i !== r) {
      if ("reset" === n) return void e.emit("slideResetTransition".concat(a));
      e.emit("slideChangeTransition".concat(a)), "next" === n ? e.emit("slideNextTransition".concat(a)) : e.emit("slidePrevTransition".concat(a));
    }
  }

  function S(e) {
    var t = this,
        s = a(),
        i = r(),
        n = t.touchEventsData,
        l = t.params,
        o = t.touches,
        c = t.enabled;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var p = e;
    p.originalEvent && (p = p.originalEvent);
    var h = d(p.target);
    if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
    if (!n.isTouchEvent && "button" in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
    var m = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
        f = !(!p.target || !p.target.shadowRoot);
    if (l.noSwiping && (f ? function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      return function t(s) {
        return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
      }(t);
    }(m, p.target) : h.closest(m)[0])) return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
    var g = o.currentX,
        v = o.currentY,
        w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
        b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;

    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ("prevent" !== w) return;
      e.preventDefault();
    }

    if (Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
      var _e22 = !0;

      h.is(n.focusableElements) && (_e22 = !1), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();

      var _a11 = _e22 && t.allowTouchMove && l.touchStartPreventDefault;

      !l.touchStartForcePreventDefault && !_a11 || h[0].isContentEditable || p.preventDefault();
    }

    t.emit("touchStart", p);
  }

  function M(e) {
    var t = a(),
        s = this,
        i = s.touchEventsData,
        r = s.params,
        n = s.touches,
        l = s.rtlTranslate,
        o = s.enabled;
    if (!o) return;
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    var p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
        h = "touchmove" === c.type ? p.pageX : c.pageX,
        m = "touchmove" === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
    if (!s.allowTouchMove) return s.allowClick = !1, void (i.isTouched && (Object.assign(n, {
      startX: h,
      startY: m,
      currentX: h,
      currentY: m
    }), i.touchStartTime = u()));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
      if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    n.currentX = h, n.currentY = m;
    var f = n.currentX - n.startX,
        g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)) < s.params.threshold) return;

    if (void 0 === i.isScrolling) {
      var _e23;

      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (_e23 = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? _e23 > r.touchAngle : 90 - _e23 > r.touchAngle);
    }

    if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
    var v = s.isHorizontal() ? f : g;
    n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    var w = !0,
        b = r.resistanceRatio;

    if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + i.startTranslate + v, b))) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - i.startTranslate - v, b))), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }

    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
  }

  function P(e) {
    var t = this,
        s = t.touchEventsData,
        a = t.params,
        i = t.touches,
        r = t.rtlTranslate,
        n = t.slidesGrid,
        l = t.enabled;
    if (!l) return;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var d = u(),
        c = d - s.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(o), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)), s.lastClickTime = u(), p(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var h;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: h
    });
    var m = 0,
        f = t.slidesSizesGrid[0];

    for (var _e24 = 0; _e24 < n.length; _e24 += _e24 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      var _t14 = _e24 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

      void 0 !== n[_e24 + _t14] ? h >= n[_e24] && h < n[_e24 + _t14] && (m = _e24, f = n[_e24 + _t14] - n[_e24]) : h >= n[_e24] && (m = _e24, f = n[n.length - 1] - n[n.length - 2]);
    }

    var g = (h - n[m]) / f,
        v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;

    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), "prev" === t.swipeDirection && t.slideTo(m));
    }
  }

  function k() {
    var e = this,
        t = e.params,
        s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var a = e.allowSlideNext,
        i = e.allowSlidePrev,
        r = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function z(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function O() {
    var e = this,
        t = e.wrapperEl,
        s = e.rtlTranslate,
        a = e.enabled;
    if (!a) return;
    var i;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var r = e.maxTranslate() - e.minTranslate();
    i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }

  var I = !1;

  function L() {}

  var A = function A(e, t) {
    var s = a(),
        i = e.params,
        r = e.touchEvents,
        n = e.el,
        l = e.wrapperEl,
        o = e.device,
        d = e.support,
        c = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;

    if (d.touch) {
      var _t15 = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
        passive: !0,
        capture: !1
      };

      n[p](r.start, e.onTouchStart, _t15), n[p](r.move, e.onTouchMove, d.passiveListener ? {
        passive: !1,
        capture: c
      } : c), n[p](r.end, e.onTouchEnd, _t15), r.cancel && n[p](r.cancel, e.onTouchEnd, _t15);
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);

    (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0);
  };

  var D = function D(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };

  var G = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function N(e, t) {
    return function () {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var a = Object.keys(s)[0],
          i = s[a];
      "object" == _typeof(i) && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
        auto: !0
      }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
        enabled: !0
      }), "object" != _typeof(e[a]) || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
        enabled: !1
      }), f(t, s)) : f(t, s)) : f(t, s);
    };
  }

  var B = {
    eventsEmitter: C,
    update: {
      updateSize: function updateSize() {
        var e = this;
        var t, s;
        var a = e.$el;
        t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
          width: t,
          height: s,
          size: e.isHorizontal() ? t : s
        }));
      },
      updateSlides: function updateSlides() {
        var e = this;

        function t(t) {
          return e.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          }[t];
        }

        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }

        var a = e.params,
            i = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && a.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            c = i.children(".".concat(e.params.slideClass)),
            p = o ? e.virtual.slides.length : c.length;
        var u = [];
        var h = [],
            m = [];
        var f = a.slidesOffsetBefore;
        "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
        var v = a.slidesOffsetAfter;
        "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
        var w = e.snapGrid.length,
            b = e.slidesGrid.length;
        var x = a.spaceBetween,
            y = -f,
            E = 0,
            T = 0;
        if (void 0 === r) return;
        "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
          marginLeft: "",
          marginBottom: "",
          marginTop: ""
        }) : c.css({
          marginRight: "",
          marginBottom: "",
          marginTop: ""
        }), a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""), g(e.wrapperEl, "--swiper-centered-offset-after", ""));
        var C = a.grid && a.grid.rows > 1 && e.grid;
        var $;
        C && e.grid.initSlides(p);
        var S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter(function (e) {
          return void 0 !== a.breakpoints[e].slidesPerView;
        }).length > 0;

        for (var _i7 = 0; _i7 < p; _i7 += 1) {
          $ = 0;

          var _n4 = c.eq(_i7);

          if (C && e.grid.updateSlide(_i7, _n4, p, t), "none" !== _n4.css("display")) {
            if ("auto" === a.slidesPerView) {
              S && (c[_i7].style[t("width")] = "");

              var _r4 = getComputedStyle(_n4[0]),
                  _l2 = _n4[0].style.transform,
                  _o2 = _n4[0].style.webkitTransform;

              if (_l2 && (_n4[0].style.transform = "none"), _o2 && (_n4[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? _n4.outerWidth(!0) : _n4.outerHeight(!0);else {
                var _e25 = s(_r4, "width"),
                    _t16 = s(_r4, "padding-left"),
                    _a12 = s(_r4, "padding-right"),
                    _i8 = s(_r4, "margin-left"),
                    _l3 = s(_r4, "margin-right"),
                    _o3 = _r4.getPropertyValue("box-sizing");

                if (_o3 && "border-box" === _o3) $ = _e25 + _i8 + _l3;else {
                  var _n4$ = _n4[0],
                      _s17 = _n4$.clientWidth,
                      _r5 = _n4$.offsetWidth;
                  $ = _e25 + _t16 + _a12 + _i8 + _l3 + (_r5 - _s17);
                }
              }
              _l2 && (_n4[0].style.transform = _l2), _o2 && (_n4[0].style.webkitTransform = _o2), a.roundLengths && ($ = Math.floor($));
            } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[_i7] && (c[_i7].style[t("width")] = "".concat($, "px"));

            c[_i7] && (c[_i7].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== _i7 && (y = y - r / 2 - x), 0 === _i7 && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1;
          }
        }

        if (e.virtualSize = Math.max(e.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
          width: "".concat(e.virtualSize + a.spaceBetween, "px")
        }), a.setWrapperSize && i.css(_defineProperty({}, t("width"), "".concat(e.virtualSize + a.spaceBetween, "px"))), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
          var _t17 = [];

          for (var _s18 = 0; _s18 < u.length; _s18 += 1) {
            var _i9 = u[_s18];
            a.roundLengths && (_i9 = Math.floor(_i9)), u[_s18] <= e.virtualSize - r && _t17.push(_i9);
          }

          u = _t17, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
        }

        if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
          var _s19 = e.isHorizontal() && n ? "marginLeft" : t("marginRight");

          c.filter(function (e, t) {
            return !a.cssMode || t !== c.length - 1;
          }).css(_defineProperty({}, _s19, "".concat(x, "px")));
        }

        if (a.centeredSlides && a.centeredSlidesBounds) {
          var _e26 = 0;
          m.forEach(function (t) {
            _e26 += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), _e26 -= a.spaceBetween;

          var _t18 = _e26 - r;

          u = u.map(function (e) {
            return e < 0 ? -f : e > _t18 ? _t18 + v : e;
          });
        }

        if (a.centerInsufficientSlides) {
          var _e27 = 0;

          if (m.forEach(function (t) {
            _e27 += t + (a.spaceBetween ? a.spaceBetween : 0);
          }), _e27 -= a.spaceBetween, _e27 < r) {
            var _t19 = (r - _e27) / 2;

            u.forEach(function (e, s) {
              u[s] = e - _t19;
            }), h.forEach(function (e, s) {
              h[s] = e + _t19;
            });
          }
        }

        if (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m
        }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
          g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");

          var _t20 = -e.snapGrid[0],
              _s20 = -e.slidesGrid[0];

          e.snapGrid = e.snapGrid.map(function (e) {
            return e + _t20;
          }), e.slidesGrid = e.slidesGrid.map(function (e) {
            return e + _s20;
          });
        }

        p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset();
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t = this,
            s = [],
            a = t.virtual && t.params.virtual.enabled;
        var i,
            r = 0;
        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);

        var n = function n(e) {
          return a ? t.slides.filter(function (t) {
            return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
          })[0] : t.slides.eq(e)[0];
        };

        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
          if (t.params.centeredSlides) t.visibleSlides.each(function (e) {
            s.push(e);
          });else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            var _e28 = t.activeIndex + i;

            if (_e28 > t.slides.length && !a) break;
            s.push(n(_e28));
          }
        } else s.push(n(t.activeIndex));

        for (i = 0; i < s.length; i += 1) {
          if (void 0 !== s[i]) {
            var _e29 = s[i].offsetHeight;
            r = _e29 > r ? _e29 : r;
          }
        }

        r && t.$wrapperEl.css("height", "".concat(r, "px"));
      },
      updateSlidesOffset: function updateSlidesOffset() {
        var e = this,
            t = e.slides;

        for (var _s21 = 0; _s21 < t.length; _s21 += 1) {
          t[_s21].swiperSlideOffset = e.isHorizontal() ? t[_s21].offsetLeft : t[_s21].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
        var t = this,
            s = t.params,
            a = t.slides,
            i = t.rtlTranslate,
            r = t.snapGrid;
        if (0 === a.length) return;
        void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
        var n = -e;
        i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

        for (var _e30 = 0; _e30 < a.length; _e30 += 1) {
          var _l4 = a[_e30];
          var _o4 = _l4.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (_o4 -= a[0].swiperSlideOffset);

          var _d3 = (n + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
              _c2 = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - _o4) / (_l4.swiperSlideSize + s.spaceBetween),
              _p = -(n - _o4),
              _u = _p + t.slidesSizesGrid[_e30];

          (_p >= 0 && _p < t.size - 1 || _u > 1 && _u <= t.size || _p <= 0 && _u >= t.size) && (t.visibleSlides.push(_l4), t.visibleSlidesIndexes.push(_e30), a.eq(_e30).addClass(s.slideVisibleClass)), _l4.progress = i ? -_d3 : _d3, _l4.originalProgress = i ? -_c2 : _c2;
        }

        t.visibleSlides = d(t.visibleSlides);
      },
      updateProgress: function updateProgress(e) {
        var t = this;

        if (void 0 === e) {
          var _s22 = t.rtlTranslate ? -1 : 1;

          e = t && t.translate && t.translate * _s22 || 0;
        }

        var s = t.params,
            a = t.maxTranslate() - t.minTranslate();
        var i = t.progress,
            r = t.isBeginning,
            n = t.isEnd;
        var l = r,
            o = n;
        0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
          progress: i,
          isBeginning: r,
          isEnd: n
        }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e = this,
            t = e.slides,
            s = e.params,
            a = e.$wrapperEl,
            i = e.activeIndex,
            r = e.realIndex,
            n = e.virtual && s.virtual.enabled;
        var l;
        t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), l = n ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(s.slideDuplicateActiveClass));
        var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
        s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
        var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
        s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : a.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            a = t.slidesGrid,
            i = t.snapGrid,
            r = t.params,
            n = t.activeIndex,
            l = t.realIndex,
            o = t.snapIndex;
        var d,
            c = e;

        if (void 0 === c) {
          for (var _e31 = 0; _e31 < a.length; _e31 += 1) {
            void 0 !== a[_e31 + 1] ? s >= a[_e31] && s < a[_e31 + 1] - (a[_e31 + 1] - a[_e31]) / 2 ? c = _e31 : s >= a[_e31] && s < a[_e31 + 1] && (c = _e31 + 1) : s >= a[_e31] && (c = _e31);
          }

          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }

        if (i.indexOf(s) >= 0) d = i.indexOf(s);else {
          var _e32 = Math.min(r.slidesPerGroupSkip, c);

          d = _e32 + Math.floor((c - _e32) / r.slidesPerGroup);
        }
        if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
        var p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
        Object.assign(t, {
          snapIndex: d,
          realIndex: p,
          previousIndex: n,
          activeIndex: c
        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this,
            s = t.params,
            a = d(e.target).closest(".".concat(s.slideClass))[0];
        var i,
            r = !1;
        if (a) for (var _e33 = 0; _e33 < t.slides.length; _e33 += 1) {
          if (t.slides[_e33] === a) {
            r = !0, i = _e33;
            break;
          }
        }
        if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
        t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
        var t = this.params,
            s = this.rtlTranslate,
            a = this.translate,
            i = this.$wrapperEl;
        if (t.virtualTranslate) return s ? -a : a;
        if (t.cssMode) return a;
        var r = h(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var s = this,
            a = s.rtlTranslate,
            i = s.params,
            r = s.$wrapperEl,
            n = s.wrapperEl,
            l = s.progress;
        var o,
            d = 0,
            c = 0;
        s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform("translate3d(".concat(d, "px, ").concat(c, "px, 0px)")), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
        var p = s.maxTranslate() - s.minTranslate();
        o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var i = arguments.length > 4 ? arguments[4] : undefined;
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o = r.minTranslate(),
            d = r.maxTranslate();
        var c;

        if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
          var _e34 = r.isHorizontal();

          if (0 === t) l[_e34 ? "scrollLeft" : "scrollTop"] = -c;else {
            var _l$scrollTo;

            if (!r.support.smoothScroll) return v({
              swiper: r,
              targetPosition: -c,
              side: _e34 ? "left" : "top"
            }), !0;
            l.scrollTo((_l$scrollTo = {}, _defineProperty(_l$scrollTo, _e34 ? "left" : "top", -c), _defineProperty(_l$scrollTo, "behavior", "smooth"), _l$scrollTo));
          }
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        var s = this;
        s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var s = this,
            a = s.params;
        a.cssMode || (a.autoHeight && s.updateAutoHeight(), $({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "Start"
        }));
      },
      transitionEnd: function transitionEnd() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var s = this,
            a = s.params;
        s.animating = !1, a.cssMode || (s.setTransition(0), $({
          swiper: s,
          runCallbacks: e,
          direction: t,
          step: "End"
        }));
      }
    },
    slide: {
      slideTo: function slideTo() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var a = arguments.length > 3 ? arguments[3] : undefined;
        var i = arguments.length > 4 ? arguments[4] : undefined;
        if ("number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof(e), "] given."));

        if ("string" == typeof e) {
          var _t21 = parseInt(e, 10);

          if (!isFinite(_t21)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e, "] given."));
          e = _t21;
        }

        var r = this;
        var n = e;
        n < 0 && (n = 0);
        var l = r.params,
            o = r.snapGrid,
            d = r.slidesGrid,
            c = r.previousIndex,
            p = r.activeIndex,
            u = r.rtlTranslate,
            h = r.wrapperEl,
            m = r.enabled;
        if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
        var f = Math.min(r.params.slidesPerGroupSkip, n);
        var g = f + Math.floor((n - f) / r.params.slidesPerGroup);
        g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
        var w = -o[g];
        if (r.updateProgress(w), l.normalizeSlideIndex) for (var _e35 = 0; _e35 < d.length; _e35 += 1) {
          var _t22 = -Math.floor(100 * w),
              _s23 = Math.floor(100 * d[_e35]),
              _a13 = Math.floor(100 * d[_e35 + 1]);

          void 0 !== d[_e35 + 1] ? _t22 >= _s23 && _t22 < _a13 - (_a13 - _s23) / 2 ? n = _e35 : _t22 >= _s23 && _t22 < _a13 && (n = _e35 + 1) : _t22 >= _s23 && (n = _e35);
        }

        if (r.initialized && n !== p) {
          if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1;
        }

        var b;
        if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;

        if (l.cssMode) {
          var _e36 = r.isHorizontal(),
              _s24 = u ? w : -w;

          if (0 === t) {
            var _t23 = r.virtual && r.params.virtual.enabled;

            _t23 && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[_e36 ? "scrollLeft" : "scrollTop"] = _s24, _t23 && requestAnimationFrame(function () {
              r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
            });
          } else {
            var _h$scrollTo;

            if (!r.support.smoothScroll) return v({
              swiper: r,
              targetPosition: _s24,
              side: _e36 ? "left" : "top"
            }), !0;
            h.scrollTo((_h$scrollTo = {}, _defineProperty(_h$scrollTo, _e36 ? "left" : "top", _s24), _defineProperty(_h$scrollTo, "behavior", "smooth"), _h$scrollTo));
          }

          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.transitionEnd(s, b)) : (r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var a = arguments.length > 3 ? arguments[3] : undefined;
        var i = this;
        var r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
      },
      slideNext: function slideNext() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var a = this,
            i = a.animating,
            r = a.enabled,
            n = a.params;
        if (!r) return a;
        var l = n.slidesPerGroup;
        "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
        var o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;

        if (n.loop) {
          if (i && n.loopPreventsSlide) return !1;
          a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
        }

        return a.slideTo(a.activeIndex + o, e, t, s);
      },
      slidePrev: function slidePrev() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var a = this,
            i = a.params,
            r = a.animating,
            n = a.snapGrid,
            l = a.slidesGrid,
            o = a.rtlTranslate,
            d = a.enabled;
        if (!d) return a;

        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
        }

        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var p = c(o ? a.translate : -a.translate),
            u = n.map(function (e) {
          return c(e);
        });
        var h = n[u.indexOf(p) - 1];

        if (void 0 === h && i.cssMode) {
          var _e37;

          n.forEach(function (t, s) {
            p >= t && (_e37 = s);
          }), void 0 !== _e37 && (h = n[_e37 > 0 ? _e37 - 1 : _e37]);
        }

        var m = 0;
        return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), a.slideTo(m, e, t, s);
      },
      slideReset: function slideReset() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function slideToClosest() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = arguments.length > 2 ? arguments[2] : undefined;
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .5;
        var i = this;
        var r = i.activeIndex;
        var n = Math.min(i.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / i.params.slidesPerGroup),
            o = i.rtlTranslate ? i.translate : -i.translate;

        if (o >= i.snapGrid[l]) {
          var _e38 = i.snapGrid[l];
          o - _e38 > (i.snapGrid[l + 1] - _e38) * a && (r += i.params.slidesPerGroup);
        } else {
          var _e39 = i.snapGrid[l - 1];
          o - _e39 <= (i.snapGrid[l] - _e39) * a && (r -= i.params.slidesPerGroup);
        }

        return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e = this,
            t = e.params,
            s = e.$wrapperEl,
            a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        var i,
            r = e.clickedIndex;

        if (t.loop) {
          if (e.animating) return;
          i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
            e.slideTo(r);
          })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), p(function () {
            e.slideTo(r);
          })) : e.slideTo(r);
        } else e.slideTo(r);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = a(),
            s = e.params,
            i = e.$wrapperEl,
            r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
        r.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass)).remove();
        var n = r.children(".".concat(s.slideClass));

        if (s.loopFillGroupWithBlank) {
          var _e40 = s.slidesPerGroup - n.length % s.slidesPerGroup;

          if (_e40 !== s.slidesPerGroup) {
            for (var _a14 = 0; _a14 < _e40; _a14 += 1) {
              var _e41 = d(t.createElement("div")).addClass("".concat(s.slideClass, " ").concat(s.slideBlankClass));

              r.append(_e41);
            }

            n = r.children(".".concat(s.slideClass));
          }
        }

        "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
        var l = [],
            o = [];
        n.each(function (t, s) {
          var a = d(t);
          s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
        });

        for (var _e42 = 0; _e42 < o.length; _e42 += 1) {
          r.append(d(o[_e42].cloneNode(!0)).addClass(s.slideDuplicateClass));
        }

        for (var _e43 = l.length - 1; _e43 >= 0; _e43 -= 1) {
          r.prepend(d(l[_e43].cloneNode(!0)).addClass(s.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        var e = this;
        e.emit("beforeLoopFix");
        var t = e.activeIndex,
            s = e.slides,
            a = e.loopedSlides,
            i = e.allowSlidePrev,
            r = e.allowSlideNext,
            n = e.snapGrid,
            l = e.rtlTranslate;
        var o;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        var d = -n[t] - e.getTranslate();

        if (t < a) {
          o = s.length - 3 * a + t, o += a;
          e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
        } else if (t >= s.length - a) {
          o = -s.length + t + a, o += a;
          e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
        }

        e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            s = this.slides;
        e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;
        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
        var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
        s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab";
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = a(),
            s = e.params,
            i = e.support;
        e.onTouchStart = S.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = P.bind(e), s.cssMode && (e.onScroll = O.bind(e)), e.onClick = z.bind(e), i.touch && !I && (t.addEventListener("touchstart", L), I = !0), A(e, "on");
      },
      detachEvents: function detachEvents() {
        A(this, "off");
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            s = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            a = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            i = e.params,
            r = e.$el,
            n = i.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        var l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
        if (!l || e.currentBreakpoint === l) return;
        var o = (l in n ? n[l] : void 0) || e.originalParams,
            d = D(e, i),
            c = D(e, o),
            p = i.enabled;
        d && !c ? (r.removeClass("".concat(i.containerModifierClass, "grid ").concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !d && c && (r.addClass("".concat(i.containerModifierClass, "grid")), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass("".concat(i.containerModifierClass, "grid-column")), e.emitContainerClasses());
        var u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), f(e.params, o);
        var m = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev
        }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "window";
        var s = arguments.length > 2 ? arguments[2] : undefined;
        if (!e || "container" === t && !s) return;
        var a = !1;
        var i = r(),
            n = "window" === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map(function (e) {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            var _t24 = parseFloat(e.substr(1));

            return {
              value: n * _t24,
              point: e
            };
          }

          return {
            value: e,
            point: e
          };
        });
        l.sort(function (e, t) {
          return parseInt(e.value, 10) - parseInt(t.value, 10);
        });

        for (var _e44 = 0; _e44 < l.length; _e44 += 1) {
          var _l$_e = l[_e44],
              _r6 = _l$_e.point,
              _n5 = _l$_e.value;
          "window" === t ? i.matchMedia("(min-width: ".concat(_n5, "px)")).matches && (a = _r6) : _n5 <= s.clientWidth && (a = _r6);
        }

        return a || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked,
            s = e.params,
            a = s.slidesOffsetBefore;

        if (a) {
          var _t25 = e.slides.length - 1,
              _s25 = e.slidesGrid[_t25] + e.slidesSizesGrid[_t25] + 2 * a;

          e.isLocked = e.size > _s25;
        } else e.isLocked = 1 === e.snapGrid.length;

        !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this,
            t = e.classNames,
            s = e.params,
            a = e.rtl,
            i = e.$el,
            r = e.device,
            n = e.support,
            l = function (e, t) {
          var s = [];
          return e.forEach(function (e) {
            "object" == _typeof(e) ? Object.keys(e).forEach(function (a) {
              e[a] && s.push(t + a);
            }) : "string" == typeof e && s.push(t + e);
          }), s;
        }(["initialized", s.direction, {
          "pointer-events": !n.touch
        }, {
          "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
          autoheight: s.autoHeight
        }, {
          rtl: a
        }, {
          grid: s.grid && s.grid.rows > 1
        }, {
          "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
        }, {
          android: r.android
        }, {
          ios: r.ios
        }, {
          "css-mode": s.cssMode
        }, {
          centered: s.cssMode && s.centeredSlides
        }], s.containerModifierClass);

        t.push.apply(t, _toConsumableArray(l)), i.addClass(_toConsumableArray(t).join(" ")), e.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, s, a, i, n) {
        var l = r();
        var o;

        function c() {
          n && n();
        }

        d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image(), o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _s26 = 0; _s26 < e.imagesToLoad.length; _s26 += 1) {
          var _a15 = e.imagesToLoad[_s26];
          e.loadImage(_a15, _a15.currentSrc || _a15.getAttribute("src"), _a15.srcset || _a15.getAttribute("srcset"), _a15.sizes || _a15.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      X = {};

  var H = /*#__PURE__*/function () {
    function H() {
      var _e45, _e46, _a$modules;

      _classCallCheck(this, H);

      var t, s;

      for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        e[_key10] = arguments[_key10];
      }

      if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : (_e45 = e, _e46 = _slicedToArray(_e45, 2), t = _e46[0], s = _e46[1], _e45), s || (s = {}), s = f({}, s), t && !s.el && (s.el = t), s.el && d(s.el).length > 1) {
        var _e47 = [];
        return d(s.el).each(function (t) {
          var a = f({}, s, {
            el: t
          });

          _e47.push(new H(a));
        }), _e47;
      }

      var a = this;
      a.__swiper__ = !0, a.support = y(), a.device = E({
        userAgent: s.userAgent
      }), a.browser = T(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = _toConsumableArray(a.__modules__), s.modules && Array.isArray(s.modules) && (_a$modules = a.modules).push.apply(_a$modules, _toConsumableArray(s.modules));
      var i = {};
      a.modules.forEach(function (e) {
        e({
          swiper: a,
          extendParams: N(s, i),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a)
        });
      });
      var r = f({}, G, i);
      return a.params = f({}, r, X, s), a.originalParams = f({}, a.params), a.passedParams = f({}, s), a.params && a.params.on && Object.keys(a.params.on).forEach(function (e) {
        a.on(e, a.params.on[e]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = d, Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: d(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === a.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === a.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
          return a.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2],
            cancel: e[3]
          }, a.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: u(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), a.emit("_swiper"), a.params.init && a.init(), a;
    }

    _createClass(H, [{
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var a = s.minTranslate(),
            i = (s.maxTranslate() - a) * e + a;
        s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.each(function (s) {
          var a = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: a
          }), e.emit("_slideClass", s, a);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "current";
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var s = this.params,
            a = this.slides,
            i = this.slidesGrid,
            r = this.slidesSizesGrid,
            n = this.size,
            l = this.activeIndex;
        var o = 1;

        if (s.centeredSlides) {
          var _e48,
              _t26 = a[l].swiperSlideSize;

          for (var _s27 = l + 1; _s27 < a.length; _s27 += 1) {
            a[_s27] && !_e48 && (_t26 += a[_s27].swiperSlideSize, o += 1, _t26 > n && (_e48 = !0));
          }

          for (var _s28 = l - 1; _s28 >= 0; _s28 -= 1) {
            a[_s28] && !_e48 && (_t26 += a[_s28].swiperSlideSize, o += 1, _t26 > n && (_e48 = !0));
          }
        } else if ("current" === e) for (var _e49 = l + 1; _e49 < a.length; _e49 += 1) {
          (t ? i[_e49] + r[_e49] - i[l] < n : i[_e49] - i[l] < n) && (o += 1);
        } else for (var _e50 = l - 1; _e50 >= 0; _e50 -= 1) {
          i[l] - i[_e50] < n && (o += 1);
        }

        return o;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            s = e.params;

        function a() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var i;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
            a = s.params.direction;
        return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass("".concat(s.params.containerModifierClass).concat(a)).addClass("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = d(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;

        var i = function i() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };

        var r = function () {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var _t27 = d(e.shadowRoot.querySelector(i()));

            return _t27.children = function (e) {
              return s.children(e);
            }, _t27;
          }

          return s.children(i());
        }();

        if (0 === r.length && t.params.createElements) {
          var _e51 = a().createElement("div");

          r = d(_e51), _e51.className = t.params.wrapperClass, s.append(_e51), s.children(".".concat(t.params.slideClass)).each(function (e) {
            r.append(e);
          });
        }

        return Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === r.css("display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
            a = s.params,
            i = s.$el,
            r = s.$wrapperEl,
            n = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}

            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        f(X, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return X;
      }
    }, {
      key: "defaults",
      get: function get() {
        return G;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        H.prototype.__modules__ || (H.prototype.__modules__ = []);
        var t = H.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return H.installModule(e);
        }), H) : (H.installModule(e), H);
      }
    }]);

    return H;
  }();

  function Y(e, t, s, i) {
    var r = a();
    return e.params.createElements && Object.keys(i).forEach(function (a) {
      if (!s[a] && !0 === s.auto) {
        var _n6 = e.$el.children(".".concat(i[a]))[0];
        _n6 || (_n6 = r.createElement("div"), _n6.className = i[a], e.$el.append(_n6)), s[a] = _n6, t[a] = _n6;
      }
    }), s;
  }

  function W() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return ".".concat(e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, "."));
  }

  function R(e) {
    var t = this,
        s = t.$wrapperEl,
        a = t.params;
    if (a.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t28 = 0; _t28 < e.length; _t28 += 1) {
      e[_t28] && s.append(e[_t28]);
    } else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }

  function j(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    s.loop && t.loopDestroy();
    var r = i + 1;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _t29 = 0; _t29 < e.length; _t29 += 1) {
        e[_t29] && a.prepend(e[_t29]);
      }

      r = i + e.length;
    } else a.prepend(e);

    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }

  function _(e, t) {
    var s = this,
        a = s.$wrapperEl,
        i = s.params,
        r = s.activeIndex;
    var n = r;
    i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(".".concat(i.slideClass)));
    var l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    var o = n > e ? n + 1 : n;
    var d = [];

    for (var _t30 = l - 1; _t30 >= e; _t30 -= 1) {
      var _e52 = s.slides.eq(_t30);

      _e52.remove(), d.unshift(_e52);
    }

    if ("object" == _typeof(t) && "length" in t) {
      for (var _e53 = 0; _e53 < t.length; _e53 += 1) {
        t[_e53] && a.append(t[_e53]);
      }

      o = n > e ? n + t.length : n;
    } else a.append(t);

    for (var _e54 = 0; _e54 < d.length; _e54 += 1) {
      a.append(d[_e54]);
    }

    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }

  function V(e) {
    var t = this,
        s = t.params,
        a = t.$wrapperEl,
        i = t.activeIndex;
    var r = i;
    s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(".".concat(s.slideClass)));
    var n,
        l = r;

    if ("object" == _typeof(e) && "length" in e) {
      for (var _s29 = 0; _s29 < e.length; _s29 += 1) {
        n = e[_s29], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      }

      l = Math.max(l, 0);
    } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);

    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }

  function q() {
    var e = this,
        t = [];

    for (var _s30 = 0; _s30 < e.slides.length; _s30 += 1) {
      t.push(_s30);
    }

    e.removeSlide(t);
  }

  function F(e) {
    var t = e.effect,
        s = e.swiper,
        a = e.on,
        i = e.setTranslate,
        r = e.setTransition,
        n = e.overwriteParams,
        l = e.perspective;
    a("beforeInit", function () {
      if (s.params.effect !== t) return;
      s.classNames.push("".concat(s.params.containerModifierClass).concat(t)), l && l() && s.classNames.push("".concat(s.params.containerModifierClass, "3d"));
      var e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }), a("setTranslate", function () {
      s.params.effect === t && i();
    }), a("setTransition", function (e, a) {
      s.params.effect === t && r(a);
    });
  }

  function U(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({
      "backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden"
    }) : t;
  }

  function K(_ref4) {
    var e = _ref4.swiper,
        t = _ref4.duration,
        s = _ref4.transformEl,
        a = _ref4.allSlides;
    var i = e.slides,
        r = e.activeIndex,
        n = e.$wrapperEl;

    if (e.params.virtualTranslate && 0 !== t) {
      var _t31,
          _l5 = !1;

      _t31 = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), _t31.transitionEnd(function () {
        if (_l5) return;
        if (!e || e.destroyed) return;
        _l5 = !0, e.animating = !1;
        var t = ["webkitTransitionEnd", "transitionend"];

        for (var _e55 = 0; _e55 < t.length; _e55 += 1) {
          n.trigger(t[_e55]);
        }
      });
    }
  }

  function Z(e, t, s) {
    var a = "swiper-slide-shadow" + (s ? "-".concat(s) : ""),
        i = e.transformEl ? t.find(e.transformEl) : t;
    var r = i.children(".".concat(a));
    return r.length || (r = d("<div class=\"swiper-slide-shadow".concat(s ? "-".concat(s) : "", "\"></div>")), i.append(r)), r;
  }

  Object.keys(B).forEach(function (e) {
    Object.keys(B[e]).forEach(function (t) {
      H.prototype[t] = B[e][t];
    });
  }), H.use([function (_ref5) {
    var e = _ref5.swiper,
        t = _ref5.on,
        s = _ref5.emit;
    var a = r();
    var i = null;

    var n = function n() {
      e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"));
    },
        l = function l() {
      e && !e.destroyed && e.initialized && s("orientationchange");
    };

    t("init", function () {
      e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver(function (t) {
        var s = e.width,
            a = e.height;
        var i = s,
            r = a;
        t.forEach(function (_ref6) {
          var t = _ref6.contentBoxSize,
              s = _ref6.contentRect,
              a = _ref6.target;
          a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize);
        }), i === s && r === a || n();
      }), i.observe(e.el)) : (a.addEventListener("resize", n), a.addEventListener("orientationchange", l));
    }), t("destroy", function () {
      i && i.unobserve && e.el && (i.unobserve(e.el), i = null), a.removeEventListener("resize", n), a.removeEventListener("orientationchange", l);
    });
  }, function (_ref7) {
    var e = _ref7.swiper,
        t = _ref7.extendParams,
        s = _ref7.on,
        a = _ref7.emit;

    var i = [],
        n = r(),
        l = function l(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = new (n.MutationObserver || n.WebkitMutationObserver)(function (e) {
        if (1 === e.length) return void a("observerUpdate", e[0]);

        var t = function t() {
          a("observerUpdate", e[0]);
        };

        n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.push(s);
    };

    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", function () {
      if (e.params.observer) {
        if (e.params.observeParents) {
          var _t32 = e.$el.parents();

          for (var _e56 = 0; _e56 < _t32.length; _e56 += 1) {
            l(_t32[_e56]);
          }
        }

        l(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), l(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    }), s("destroy", function () {
      i.forEach(function (e) {
        e.disconnect();
      }), i.splice(0, i.length);
    });
  }]);
  var J = [function (_ref8) {
    var e = _ref8.swiper,
        t = _ref8.extendParams,
        s = _ref8.on;
    var a;

    function i(t, s) {
      var a = e.params.virtual;
      if (a.cache && e.virtual.cache[s]) return e.virtual.cache[s];
      var i = a.renderSlide ? d(a.renderSlide.call(e, t, s)) : d("<div class=\"".concat(e.params.slideClass, "\" data-swiper-slide-index=\"").concat(s, "\">").concat(t, "</div>"));
      return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s), a.cache && (e.virtual.cache[s] = i), i;
    }

    function r(t) {
      var _e$params = e.params,
          s = _e$params.slidesPerView,
          a = _e$params.slidesPerGroup,
          r = _e$params.centeredSlides,
          _e$params$virtual = e.params.virtual,
          n = _e$params$virtual.addSlidesBefore,
          l = _e$params$virtual.addSlidesAfter,
          _e$virtual = e.virtual,
          o = _e$virtual.from,
          d = _e$virtual.to,
          c = _e$virtual.slides,
          p = _e$virtual.slidesGrid,
          u = _e$virtual.offset;
      e.params.cssMode || e.updateActiveIndex();
      var h = e.activeIndex || 0;
      var m, f, g;
      m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a + l, g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l, g = a + n);
      var v = Math.max((h || 0) - g, 0),
          w = Math.min((h || 0) + f, c.length - 1),
          b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);

      function x() {
        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load();
      }

      if (Object.assign(e.virtual, {
        from: v,
        to: w,
        offset: b,
        slidesGrid: e.slidesGrid
      }), o === v && d === w && !t) return e.slidesGrid !== p && b !== u && e.slides.css(m, "".concat(b, "px")), void e.updateProgress();
      if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
        offset: b,
        from: v,
        to: w,
        slides: function () {
          var e = [];

          for (var _t33 = v; _t33 <= w; _t33 += 1) {
            e.push(c[_t33]);
          }

          return e;
        }()
      }), void (e.params.virtual.renderExternalUpdate && x());
      var y = [],
          E = [];
      if (t) e.$wrapperEl.find(".".concat(e.params.slideClass)).remove();else for (var _t34 = o; _t34 <= d; _t34 += 1) {
        (_t34 < v || _t34 > w) && e.$wrapperEl.find(".".concat(e.params.slideClass, "[data-swiper-slide-index=\"").concat(_t34, "\"]")).remove();
      }

      for (var _e57 = 0; _e57 < c.length; _e57 += 1) {
        _e57 >= v && _e57 <= w && (void 0 === d || t ? E.push(_e57) : (_e57 > d && E.push(_e57), _e57 < o && y.push(_e57)));
      }

      E.forEach(function (t) {
        e.$wrapperEl.append(i(c[t], t));
      }), y.sort(function (e, t) {
        return t - e;
      }).forEach(function (t) {
        e.$wrapperEl.prepend(i(c[t], t));
      }), e.$wrapperEl.children(".swiper-slide").css(m, "".concat(b, "px")), x();
    }

    t({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    }), e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    }, s("beforeInit", function () {
      e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push("".concat(e.params.containerModifierClass, "virtual")), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || r());
    }), s("setTranslate", function () {
      e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a), a = setTimeout(function () {
        r();
      }, 100)) : r());
    }), s("init update resize", function () {
      e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", "".concat(e.virtualSize, "px"));
    }), Object.assign(e.virtual, {
      appendSlide: function appendSlide(t) {
        if ("object" == _typeof(t) && "length" in t) for (var _s31 = 0; _s31 < t.length; _s31 += 1) {
          t[_s31] && e.virtual.slides.push(t[_s31]);
        } else e.virtual.slides.push(t);
        r(!0);
      },
      prependSlide: function prependSlide(t) {
        var s = e.activeIndex;
        var a = s + 1,
            i = 1;

        if (Array.isArray(t)) {
          for (var _s32 = 0; _s32 < t.length; _s32 += 1) {
            t[_s32] && e.virtual.slides.unshift(t[_s32]);
          }

          a = s + t.length, i = t.length;
        } else e.virtual.slides.unshift(t);

        if (e.params.virtual.cache) {
          var _t35 = e.virtual.cache,
              _s33 = {};
          Object.keys(_t35).forEach(function (e) {
            var a = _t35[e],
                r = a.attr("data-swiper-slide-index");
            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), _s33[parseInt(e, 10) + i] = a;
          }), e.virtual.cache = _s33;
        }

        r(!0), e.slideTo(a, 0);
      },
      removeSlide: function removeSlide(t) {
        if (null == t) return;
        var s = e.activeIndex;
        if (Array.isArray(t)) for (var _a16 = t.length - 1; _a16 >= 0; _a16 -= 1) {
          e.virtual.slides.splice(t[_a16], 1), e.params.virtual.cache && delete e.virtual.cache[t[_a16]], t[_a16] < s && (s -= 1), s = Math.max(s, 0);
        } else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < s && (s -= 1), s = Math.max(s, 0);
        r(!0), e.slideTo(s, 0);
      },
      removeAllSlides: function removeAllSlides() {
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), r(!0), e.slideTo(0, 0);
      },
      update: r
    });
  }, function (_ref9) {
    var e = _ref9.swiper,
        t = _ref9.extendParams,
        s = _ref9.on,
        i = _ref9.emit;
    var n = a(),
        l = r();

    function o(t) {
      if (!e.enabled) return;
      var s = e.rtlTranslate;
      var a = t;
      a.originalEvent && (a = a.originalEvent);
      var r = a.keyCode || a.charCode,
          o = e.params.keyboard.pageUpDown,
          d = o && 33 === r,
          c = o && 34 === r,
          p = 37 === r,
          u = 39 === r,
          h = 38 === r,
          m = 40 === r;
      if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || c)) return !1;
      if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && h || d)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
        if (e.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
          var _t36 = !1;

          if (e.$el.parents(".".concat(e.params.slideClass)).length > 0 && 0 === e.$el.parents(".".concat(e.params.slideActiveClass)).length) return;

          var _a17 = e.$el,
              _i10 = _a17[0].clientWidth,
              _r7 = _a17[0].clientHeight,
              _n7 = l.innerWidth,
              _o5 = l.innerHeight,
              _d4 = e.$el.offset();

          s && (_d4.left -= e.$el[0].scrollLeft);
          var _c3 = [[_d4.left, _d4.top], [_d4.left + _i10, _d4.top], [_d4.left, _d4.top + _r7], [_d4.left + _i10, _d4.top + _r7]];

          for (var _e58 = 0; _e58 < _c3.length; _e58 += 1) {
            var _s34 = _c3[_e58];

            if (_s34[0] >= 0 && _s34[0] <= _n7 && _s34[1] >= 0 && _s34[1] <= _o5) {
              if (0 === _s34[0] && 0 === _s34[1]) continue;
              _t36 = !0;
            }
          }

          if (!_t36) return;
        }

        e.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && e.slideNext(), ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && e.slideNext(), (d || h) && e.slidePrev()), i("keyPress", r);
      }
    }

    function c() {
      e.keyboard.enabled || (d(n).on("keydown", o), e.keyboard.enabled = !0);
    }

    function p() {
      e.keyboard.enabled && (d(n).off("keydown", o), e.keyboard.enabled = !1);
    }

    e.keyboard = {
      enabled: !1
    }, t({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    }), s("init", function () {
      e.params.keyboard.enabled && c();
    }), s("destroy", function () {
      e.keyboard.enabled && p();
    }), Object.assign(e.keyboard, {
      enable: c,
      disable: p
    });
  }, function (_ref10) {
    var e = _ref10.swiper,
        t = _ref10.extendParams,
        s = _ref10.on,
        a = _ref10.emit;
    var i = r();
    var n;
    t({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    }), e.mousewheel = {
      enabled: !1
    };
    var l,
        o = u();
    var c = [];

    function h() {
      e.enabled && (e.mouseEntered = !0);
    }

    function m() {
      e.enabled && (e.mouseEntered = !1);
    }

    function f(t) {
      return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && !(e.params.mousewheel.thresholdTime && u() - o < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && u() - o < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), a("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), a("scroll", t.raw)), o = new i.Date().getTime(), !1));
    }

    function g(t) {
      var s = t,
          i = !0;
      if (!e.enabled) return;
      var r = e.params.mousewheel;
      e.params.cssMode && s.preventDefault();
      var o = e.$el;
      if ("container" !== e.params.mousewheel.eventsTarget && (o = d(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges) return !0;
      s.originalEvent && (s = s.originalEvent);
      var h = 0;

      var m = e.rtlTranslate ? -1 : 1,
          g = function (e) {
        var t = 0,
            s = 0,
            a = 0,
            i = 0;
        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
          spinX: t,
          spinY: s,
          pixelX: a,
          pixelY: i
        };
      }(s);

      if (r.forceToAxis) {
        if (e.isHorizontal()) {
          if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
          h = -g.pixelX * m;
        } else {
          if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
          h = -g.pixelY;
        }
      } else h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
      if (0 === h) return !0;
      r.invert && (h = -h);
      var v = e.getTranslate() + h * r.sensitivity;

      if (v >= e.minTranslate() && (v = e.minTranslate()), v <= e.maxTranslate() && (v = e.maxTranslate()), i = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()), i && e.params.nested && s.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
        var _t37 = {
          time: u(),
          delta: Math.abs(h),
          direction: Math.sign(h)
        },
            _i11 = l && _t37.time < l.time + 500 && _t37.delta <= l.delta && _t37.direction === l.direction;

        if (!_i11) {
          l = void 0, e.params.loop && e.loopFix();

          var _o6 = e.getTranslate() + h * r.sensitivity;

          var _d5 = e.isBeginning,
              _u2 = e.isEnd;

          if (_o6 >= e.minTranslate() && (_o6 = e.minTranslate()), _o6 <= e.maxTranslate() && (_o6 = e.maxTranslate()), e.setTransition(0), e.setTranslate(_o6), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!_d5 && e.isBeginning || !_u2 && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
            clearTimeout(n), n = void 0, c.length >= 15 && c.shift();

            var _s35 = c.length ? c[c.length - 1] : void 0,
                _a18 = c[0];

            if (c.push(_t37), _s35 && (_t37.delta > _s35.delta || _t37.direction !== _s35.direction)) c.splice(0);else if (c.length >= 15 && _t37.time - _a18.time < 500 && _a18.delta - _t37.delta >= 1 && _t37.delta <= 6) {
              var _s36 = h > 0 ? .8 : .2;

              l = _t37, c.splice(0), n = p(function () {
                e.slideToClosest(e.params.speed, !0, void 0, _s36);
              }, 0);
            }
            n || (n = p(function () {
              l = _t37, c.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (_i11 || a("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), _o6 === e.minTranslate() || _o6 === e.maxTranslate()) return !0;
        }
      } else {
        var _s37 = {
          time: u(),
          delta: Math.abs(h),
          direction: Math.sign(h),
          raw: t
        };
        c.length >= 2 && c.shift();

        var _a19 = c.length ? c[c.length - 1] : void 0;

        if (c.push(_s37), _a19 ? (_s37.direction !== _a19.direction || _s37.delta > _a19.delta || _s37.time > _a19.time + 150) && f(_s37) : f(_s37), function (t) {
          var s = e.params.mousewheel;

          if (t.direction < 0) {
            if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0;
          } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;

          return !1;
        }(_s37)) return !0;
      }

      return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1;
    }

    function v(t) {
      var s = e.$el;
      "container" !== e.params.mousewheel.eventsTarget && (s = d(e.params.mousewheel.eventsTarget)), s[t]("mouseenter", h), s[t]("mouseleave", m), s[t]("wheel", g);
    }

    function w() {
      return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : !e.mousewheel.enabled && (v("on"), e.mousewheel.enabled = !0, !0);
    }

    function b() {
      return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g), !0) : !!e.mousewheel.enabled && (v("off"), e.mousewheel.enabled = !1, !0);
    }

    s("init", function () {
      !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && w();
    }), s("destroy", function () {
      e.params.cssMode && w(), e.mousewheel.enabled && b();
    }), Object.assign(e.mousewheel, {
      enable: w,
      disable: b
    });
  }, function (_ref11) {
    var e = _ref11.swiper,
        t = _ref11.extendParams,
        s = _ref11.on,
        a = _ref11.emit;

    function i(t) {
      var s;
      return t && (s = d(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s;
    }

    function r(t, s) {
      var a = e.params.navigation;
      t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass));
    }

    function n() {
      if (e.params.loop) return;
      var _e$navigation = e.navigation,
          t = _e$navigation.$nextEl,
          s = _e$navigation.$prevEl;
      r(s, e.isBeginning), r(t, e.isEnd);
    }

    function l(t) {
      t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev();
    }

    function o(t) {
      t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext();
    }

    function c() {
      var t = e.params.navigation;
      if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !t.nextEl && !t.prevEl) return;
      var s = i(t.nextEl),
          a = i(t.prevEl);
      s && s.length > 0 && s.on("click", o), a && a.length > 0 && a.on("click", l), Object.assign(e.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: a,
        prevEl: a && a[0]
      }), e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass));
    }

    function p() {
      var _e$navigation2 = e.navigation,
          t = _e$navigation2.$nextEl,
          s = _e$navigation2.$prevEl;
      t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass));
    }

    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    }), e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    }, s("init", function () {
      c(), n();
    }), s("toEdge fromEdge lock unlock", function () {
      n();
    }), s("destroy", function () {
      p();
    }), s("enable disable", function () {
      var _e$navigation3 = e.navigation,
          t = _e$navigation3.$nextEl,
          s = _e$navigation3.$prevEl;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
    }), s("click", function (t, s) {
      var _e$navigation4 = e.navigation,
          i = _e$navigation4.$nextEl,
          r = _e$navigation4.$prevEl,
          n = s.target;

      if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;

        var _t38;

        i ? _t38 = i.hasClass(e.params.navigation.hiddenClass) : r && (_t38 = r.hasClass(e.params.navigation.hiddenClass)), a(!0 === _t38 ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass);
      }
    }), Object.assign(e.navigation, {
      update: n,
      init: c,
      destroy: p
    });
  }, function (_ref12) {
    var e = _ref12.swiper,
        t = _ref12.extendParams,
        s = _ref12.on,
        a = _ref12.emit;
    var i = "swiper-pagination";
    var r;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "".concat(i, "-bullet"),
        bulletActiveClass: "".concat(i, "-bullet-active"),
        modifierClass: "".concat(i, "-"),
        currentClass: "".concat(i, "-current"),
        totalClass: "".concat(i, "-total"),
        hiddenClass: "".concat(i, "-hidden"),
        progressbarFillClass: "".concat(i, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(i, "-progressbar-opposite"),
        clickableClass: "".concat(i, "-clickable"),
        lockClass: "".concat(i, "-lock"),
        horizontalClass: "".concat(i, "-horizontal"),
        verticalClass: "".concat(i, "-vertical")
      }
    }), e.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var n = 0;

    function l() {
      return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length;
    }

    function o(t, s) {
      var a = e.params.pagination.bulletActiveClass;
      t[s]().addClass("".concat(a, "-").concat(s))[s]().addClass("".concat(a, "-").concat(s, "-").concat(s));
    }

    function c() {
      var t = e.rtl,
          s = e.params.pagination;
      if (l()) return;
      var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          c = e.pagination.$el;
      var p;
      var u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

      if (e.params.loop ? (p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), p > i - 1 - 2 * e.loopedSlides && (p -= i - 2 * e.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== e.params.paginationType && (p = u + p)) : p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var _a20 = e.pagination.bullets;

        var _i12, _l6, _u3;

        if (s.dynamicBullets && (r = _a20.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += p - e.previousIndex, n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), _i12 = p - n, _l6 = _i12 + (Math.min(_a20.length, s.dynamicMainBullets) - 1), _u3 = (_l6 + _i12) / 2), _a20.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(function (e) {
          return "".concat(s.bulletActiveClass).concat(e);
        }).join(" ")), c.length > 1) _a20.each(function (e) {
          var t = d(e),
              a = t.index();
          a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _i12 && a <= _l6 && t.addClass("".concat(s.bulletActiveClass, "-main")), a === _i12 && o(t, "prev"), a === _l6 && o(t, "next"));
        });else {
          var _t39 = _a20.eq(p),
              _r8 = _t39.index();

          if (_t39.addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _t40 = _a20.eq(_i12),
                _n8 = _a20.eq(_l6);

            for (var _e59 = _i12; _e59 <= _l6; _e59 += 1) {
              _a20.eq(_e59).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            if (e.params.loop) {
              if (_r8 >= _a20.length - s.dynamicMainBullets) {
                for (var _e60 = s.dynamicMainBullets; _e60 >= 0; _e60 -= 1) {
                  _a20.eq(_a20.length - _e60).addClass("".concat(s.bulletActiveClass, "-main"));
                }

                _a20.eq(_a20.length - s.dynamicMainBullets - 1).addClass("".concat(s.bulletActiveClass, "-prev"));
              } else o(_t40, "prev"), o(_n8, "next");
            } else o(_t40, "prev"), o(_n8, "next");
          }
        }

        if (s.dynamicBullets) {
          var _i13 = Math.min(_a20.length, s.dynamicMainBullets + 4),
              _n9 = (r * _i13 - r) / 2 - _u3 * r,
              _l7 = t ? "right" : "left";

          _a20.css(e.isHorizontal() ? _l7 : "top", "".concat(_n9, "px"));
        }
      }

      if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)), c.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
        var _t41;

        _t41 = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

        var _a21 = (p + 1) / u;

        var _i14 = 1,
            _r9 = 1;
        "horizontal" === _t41 ? _i14 = _a21 : _r9 = _a21, c.find(W(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_i14, ") scaleY(").concat(_r9, ")")).transition(e.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (c.html(s.renderCustom(e, p + 1, u)), a("paginationRender", c[0])) : a("paginationUpdate", c[0]), e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }

    function p() {
      var t = e.params.pagination;
      if (l()) return;
      var s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          i = e.pagination.$el;
      var r = "";

      if ("bullets" === t.type) {
        var _a22 = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && _a22 > s && (_a22 = s);

        for (var _s38 = 0; _s38 < _a22; _s38 += 1) {
          t.renderBullet ? r += t.renderBullet.call(e, _s38, t.bulletClass) : r += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
        }

        i.html(r), e.pagination.bullets = i.find(W(t.bulletClass));
      }

      "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : "<span class=\"".concat(t.currentClass, "\"></span> / <span class=\"").concat(t.totalClass, "\"></span>"), i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : "<span class=\"".concat(t.progressbarFillClass, "\"></span>"), i.html(r)), "custom" !== t.type && a("paginationRender", e.pagination.$el[0]);
    }

    function u() {
      e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      var t = e.params.pagination;
      if (!t.el) return;
      var s = d(t.el);
      0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter(function (t) {
        return d(t).parents(".swiper")[0] === e.el;
      }))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (s.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", W(t.bulletClass), function (t) {
        t.preventDefault();
        var s = d(this).index() * e.params.slidesPerGroup;
        e.params.loop && (s += e.loopedSlides), e.slideTo(s);
      }), Object.assign(e.pagination, {
        $el: s,
        el: s[0]
      }), e.enabled || s.addClass(t.lockClass));
    }

    function h() {
      var t = e.params.pagination;
      if (l()) return;
      var s = e.pagination.$el;
      s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", W(t.bulletClass));
    }

    s("init", function () {
      u(), p(), c();
    }), s("activeIndexChange", function () {
      (e.params.loop || void 0 === e.snapIndex) && c();
    }), s("snapIndexChange", function () {
      e.params.loop || c();
    }), s("slidesLengthChange", function () {
      e.params.loop && (p(), c());
    }), s("snapGridLengthChange", function () {
      e.params.loop || (p(), c());
    }), s("destroy", function () {
      h();
    }), s("enable disable", function () {
      var t = e.pagination.$el;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
    }), s("lock unlock", function () {
      c();
    }), s("click", function (t, s) {
      var i = s.target,
          r = e.pagination.$el;

      if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;

        var _t42 = r.hasClass(e.params.pagination.hiddenClass);

        a(!0 === _t42 ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass);
      }
    }), Object.assign(e.pagination, {
      render: p,
      update: c,
      init: u,
      destroy: h
    });
  }, function (_ref13) {
    var e = _ref13.swiper,
        t = _ref13.extendParams,
        s = _ref13.on,
        i = _ref13.emit;
    var r = a();
    var n,
        l,
        o,
        c,
        u = !1,
        h = null,
        m = null;

    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          s = e.rtlTranslate,
          a = e.progress,
          i = t.$dragEl,
          r = t.$el,
          n = e.params.scrollbar;
      var d = l,
          c = (o - l) * a;
      s ? (c = -c, c > 0 ? (d = l - c, c = 0) : -c + l > o && (d = o + c)) : c < 0 ? (d = l + c, c = 0) : c + l > o && (d = o - c), e.isHorizontal() ? (i.transform("translate3d(".concat(c, "px, 0, 0)")), i[0].style.width = "".concat(d, "px")) : (i.transform("translate3d(0px, ".concat(c, "px, 0)")), i[0].style.height = "".concat(d, "px")), n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout(function () {
        r[0].style.opacity = 0, r.transition(400);
      }, 1e3));
    }

    function g() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          s = t.$dragEl,
          a = t.$el;
      s[0].style.width = "", s[0].style.height = "", o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l = "auto" === e.params.scrollbar.dragSize ? o * c : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = "".concat(l, "px") : s[0].style.height = "".concat(l, "px"), a[0].style.display = c >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
    }

    function v(t) {
      return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY;
    }

    function w(t) {
      var s = e.scrollbar,
          a = e.rtlTranslate,
          i = s.$el;
      var r;
      r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
      var d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
      e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
    }

    function b(t) {
      var s = e.params.scrollbar,
          a = e.scrollbar,
          r = e.$wrapperEl,
          l = a.$el,
          o = a.$dragEl;
      u = !0, n = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), o.transition(100), w(t), clearTimeout(m), l.transition(0), s.hide && l.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), i("scrollbarDragStart", t);
    }

    function x(t) {
      var s = e.scrollbar,
          a = e.$wrapperEl,
          r = s.$el,
          n = s.$dragEl;
      u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, w(t), a.transition(0), r.transition(0), n.transition(0), i("scrollbarDragMove", t));
    }

    function y(t) {
      var s = e.params.scrollbar,
          a = e.scrollbar,
          r = e.$wrapperEl,
          n = a.$el;
      u && (u = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(m), m = p(function () {
        n.css("opacity", 0), n.transition(400);
      }, 1e3)), i("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest());
    }

    function E(t) {
      var s = e.scrollbar,
          a = e.touchEventsTouch,
          i = e.touchEventsDesktop,
          n = e.params,
          l = e.support,
          o = s.$el[0],
          d = !(!l.passiveListener || !n.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          c = !(!l.passiveListener || !n.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      if (!o) return;
      var p = "on" === t ? "addEventListener" : "removeEventListener";
      l.touch ? (o[p](a.start, b, d), o[p](a.move, x, d), o[p](a.end, y, c)) : (o[p](i.start, b, d), r[p](i.move, x, d), r[p](i.end, y, c));
    }

    function T() {
      var t = e.scrollbar,
          s = e.$el;
      e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      var a = e.params.scrollbar;
      if (!a.el) return;
      var i = d(a.el);
      e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
      var r = i.find(".".concat(e.params.scrollbar.dragClass));
      0 === r.length && (r = d("<div class=\"".concat(e.params.scrollbar.dragClass, "\"></div>")), i.append(r)), Object.assign(t, {
        $el: i,
        el: i[0],
        $dragEl: r,
        dragEl: r[0]
      }), a.draggable && e.params.scrollbar.el && E("on"), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
    }

    function C() {
      e.params.scrollbar.el && E("off");
    }

    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    }), e.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null
    }, s("init", function () {
      T(), g(), f();
    }), s("update resize observerUpdate lock unlock", function () {
      g();
    }), s("setTranslate", function () {
      f();
    }), s("setTransition", function (t, s) {
      !function (t) {
        e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t);
      }(s);
    }), s("enable disable", function () {
      var t = e.scrollbar.$el;
      t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
    }), s("destroy", function () {
      C();
    }), Object.assign(e.scrollbar, {
      updateSize: g,
      setTranslate: f,
      init: T,
      destroy: C
    });
  }, function (_ref14) {
    var e = _ref14.swiper,
        t = _ref14.extendParams,
        s = _ref14.on;
    t({
      parallax: {
        enabled: !1
      }
    });

    var a = function a(t, s) {
      var a = e.rtl,
          i = d(t),
          r = a ? -1 : 1,
          n = i.attr("data-swiper-parallax") || "0";
      var l = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
      var c = i.attr("data-swiper-parallax-scale"),
          p = i.attr("data-swiper-parallax-opacity");

      if (l || o ? (l = l || "0", o = o || "0") : e.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
        var _e61 = p - (p - 1) * (1 - Math.abs(s));

        i[0].style.opacity = _e61;
      }

      if (null == c) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
        var _e62 = c - (c - 1) * (1 - Math.abs(s));

        i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e62, ")"));
      }
    },
        i = function i() {
      var t = e.$el,
          s = e.slides,
          i = e.progress,
          r = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
        a(e, i);
      }), s.each(function (t, s) {
        var n = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          a(e, n);
        });
      });
    };

    s("beforeInit", function () {
      e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    }), s("init", function () {
      e.params.parallax.enabled && i();
    }), s("setTranslate", function () {
      e.params.parallax.enabled && i();
    }), s("setTransition", function (t, s) {
      e.params.parallax.enabled && function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.params.speed;
        var s = e.$el;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
          var s = d(e);
          var a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
          0 === t && (a = 0), s.transition(a);
        });
      }(s);
    });
  }, function (_ref15) {
    var e = _ref15.swiper,
        t = _ref15.extendParams,
        s = _ref15.on,
        a = _ref15.emit;
    var i = r();
    t({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), e.zoom = {
      enabled: !1
    };
    var n,
        l,
        o,
        c = 1,
        p = !1;
    var u = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3
    },
        m = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    },
        f = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    var g = 1;

    function v(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(a - t, 2) + Math.pow(i - s, 2));
    }

    function w(t) {
      var s = e.support,
          a = e.params.zoom;

      if (l = !1, o = !1, !s.gestures) {
        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
        l = !0, u.scaleStart = v(t);
      }

      u.$slideEl && u.$slideEl.length || (u.$slideEl = d(t.target).closest(".".concat(e.params.slideClass)), 0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(".".concat(a.containerClass)), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), p = !0) : u.$imageEl = void 0;
    }

    function b(t) {
      var s = e.support,
          a = e.params.zoom,
          i = e.zoom;

      if (!s.gestures) {
        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
        o = !0, u.scaleMove = v(t);
      }

      u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * c : i.scale = u.scaleMove / u.scaleStart * c, i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + Math.pow(i.scale - u.maxRatio + 1, .5)), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)), u.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")"))) : "gesturechange" === t.type && w(t);
    }

    function x(t) {
      var s = e.device,
          a = e.support,
          i = e.params.zoom,
          r = e.zoom;

      if (!a.gestures) {
        if (!l || !o) return;
        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android) return;
        l = !1, o = !1;
      }

      u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio), u.$imageEl.transition(e.params.speed).transform("translate3d(0,0,0) scale(".concat(r.scale, ")")), c = r.scale, p = !1, 1 === r.scale && (u.$slideEl = void 0));
    }

    function y(t) {
      var s = e.zoom;
      if (!u.$imageEl || 0 === u.$imageEl.length) return;
      if (e.allowClick = !1, !m.isTouched || !u.$slideEl) return;
      m.isMoved || (m.width = u.$imageEl[0].offsetWidth, m.height = u.$imageEl[0].offsetHeight, m.startX = h(u.$imageWrapEl[0], "x") || 0, m.startY = h(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
      var a = m.width * s.scale,
          i = m.height * s.scale;

      if (!(a < u.slideWidth && i < u.slideHeight)) {
        if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !p) {
          if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void (m.isTouched = !1);
          if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void (m.isTouched = !1);
        }

        t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - Math.pow(m.minX - m.currentX + 1, .8)), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + Math.pow(m.currentX - m.maxX + 1, .8)), m.currentY < m.minY && (m.currentY = m.minY + 1 - Math.pow(m.minY - m.currentY + 1, .8)), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + Math.pow(m.currentY - m.maxY + 1, .8)), f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x), f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y), f.prevTime || (f.prevTime = Date.now()), f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2, f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2, Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0), Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0), f.prevPositionX = m.touchesCurrent.x, f.prevPositionY = m.touchesCurrent.y, f.prevTime = Date.now(), u.$imageWrapEl.transform("translate3d(".concat(m.currentX, "px, ").concat(m.currentY, "px,0)"));
      }
    }

    function E() {
      var t = e.zoom;
      u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, c = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0);
    }

    function T(t) {
      var s = e.zoom,
          a = e.params.zoom;
      if (u.$slideEl || (t && t.target && (u.$slideEl = d(t.target).closest(".".concat(e.params.slideClass))), u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(".".concat(e.params.slideActiveClass)) : u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(".".concat(a.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(".".concat(a.containerClass))), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length) return;
      var r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
      e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), u.$slideEl.addClass("".concat(a.zoomedSlideClass)), void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y), s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, c = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, t ? ($ = u.$slideEl[0].offsetWidth, S = u.$slideEl[0].offsetHeight, l = u.$slideEl.offset().left + i.scrollX, o = u.$slideEl.offset().top + i.scrollY, p = l + $ / 2 - r, h = o + S / 2 - n, v = u.$imageEl[0].offsetWidth, w = u.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, f = p * s.scale, g = h * s.scale, f < y && (f = y), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0), u.$imageWrapEl.transition(300).transform("translate3d(".concat(f, "px, ").concat(g, "px,0)")), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    }

    function C() {
      var t = e.zoom,
          s = e.params.zoom;
      u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(".".concat(e.params.slideActiveClass)) : u.$slideEl = e.slides.eq(e.activeIndex), u.$imageEl = u.$slideEl.find(".".concat(s.containerClass)).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(".".concat(s.containerClass))), u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, c = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass("".concat(s.zoomedSlideClass)), u.$slideEl = void 0);
    }

    function $(t) {
      var s = e.zoom;
      s.scale && 1 !== s.scale ? C() : T(t);
    }

    function S() {
      var t = e.support;
      return {
        passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
        activeListenerWithCapture: !t.passiveListener || {
          passive: !1,
          capture: !0
        }
      };
    }

    function M() {
      return ".".concat(e.params.slideClass);
    }

    function P(t) {
      var _S = S(),
          s = _S.passiveListener,
          a = M();

      e.$wrapperEl[t]("gesturestart", a, w, s), e.$wrapperEl[t]("gesturechange", a, b, s), e.$wrapperEl[t]("gestureend", a, x, s);
    }

    function k() {
      n || (n = !0, P("on"));
    }

    function z() {
      n && (n = !1, P("off"));
    }

    function O() {
      var t = e.zoom;
      if (t.enabled) return;
      t.enabled = !0;

      var s = e.support,
          _S2 = S(),
          a = _S2.passiveListener,
          i = _S2.activeListenerWithCapture,
          r = M();

      s.gestures ? (e.$wrapperEl.on(e.touchEvents.start, k, a), e.$wrapperEl.on(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, w, a), e.$wrapperEl.on(e.touchEvents.move, r, b, i), e.$wrapperEl.on(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, x, a)), e.$wrapperEl.on(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), y, i);
    }

    function I() {
      var t = e.zoom;
      if (!t.enabled) return;
      var s = e.support;
      t.enabled = !1;

      var _S3 = S(),
          a = _S3.passiveListener,
          i = _S3.activeListenerWithCapture,
          r = M();

      s.gestures ? (e.$wrapperEl.off(e.touchEvents.start, k, a), e.$wrapperEl.off(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, w, a), e.$wrapperEl.off(e.touchEvents.move, r, b, i), e.$wrapperEl.off(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, x, a)), e.$wrapperEl.off(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), y, i);
    }

    Object.defineProperty(e.zoom, "scale", {
      get: function get() {
        return g;
      },
      set: function set(e) {
        if (g !== e) {
          var _t43 = u.$imageEl ? u.$imageEl[0] : void 0,
              _s39 = u.$slideEl ? u.$slideEl[0] : void 0;

          a("zoomChange", e, _t43, _s39);
        }

        g = e;
      }
    }), s("init", function () {
      e.params.zoom.enabled && O();
    }), s("destroy", function () {
      I();
    }), s("touchStart", function (t, s) {
      e.zoom.enabled && function (t) {
        var s = e.device;
        u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
      }(s);
    }), s("touchEnd", function (t, s) {
      e.zoom.enabled && function () {
        var t = e.zoom;
        if (!u.$imageEl || 0 === u.$imageEl.length) return;
        if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void (m.isMoved = !1);
        m.isTouched = !1, m.isMoved = !1;
        var s = 300,
            a = 300;
        var i = f.x * s,
            r = m.currentX + i,
            n = f.y * a,
            l = m.currentY + n;
        0 !== f.x && (s = Math.abs((r - m.currentX) / f.x)), 0 !== f.y && (a = Math.abs((l - m.currentY) / f.y));
        var o = Math.max(s, a);
        m.currentX = r, m.currentY = l;
        var d = m.width * t.scale,
            c = m.height * t.scale;
        m.minX = Math.min(u.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - c / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), u.$imageWrapEl.transition(o).transform("translate3d(".concat(m.currentX, "px, ").concat(m.currentY, "px,0)"));
      }();
    }), s("doubleTap", function (t, s) {
      !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && $(s);
    }), s("transitionEnd", function () {
      e.zoom.enabled && e.params.zoom.enabled && E();
    }), s("slideChange", function () {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E();
    }), Object.assign(e.zoom, {
      enable: O,
      disable: I,
      "in": T,
      out: C,
      toggle: $
    });
  }, function (_ref16) {
    var e = _ref16.swiper,
        t = _ref16.extendParams,
        s = _ref16.on,
        a = _ref16.emit;
    t({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    }), e.lazy = {};
    var i = !1,
        n = !1;

    function l(t) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = e.params.lazy;
      if (void 0 === t) return;
      if (0 === e.slides.length) return;
      var r = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-swiper-slide-index=\"").concat(t, "\"]")) : e.slides.eq(t),
          n = r.find(".".concat(i.elementClass, ":not(.").concat(i.loadedClass, "):not(.").concat(i.loadingClass, ")"));
      !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n.push(r[0]), 0 !== n.length && n.each(function (t) {
        var n = d(t);
        n.addClass(i.loadingClass);
        var o = n.attr("data-background"),
            c = n.attr("data-src"),
            p = n.attr("data-srcset"),
            u = n.attr("data-sizes"),
            h = n.parent("picture");
        e.loadImage(n[0], c || o, p, u, !1, function () {
          if (null != e && e && (!e || e.params) && !e.destroyed) {
            if (o ? (n.css("background-image", "url(\"".concat(o, "\")")), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each(function (e) {
              var t = d(e);
              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(i.loadedClass).removeClass(i.loadingClass), r.find(".".concat(i.preloaderClass)).remove(), e.params.loop && s) {
              var _t44 = r.attr("data-swiper-slide-index");

              if (r.hasClass(e.params.slideDuplicateClass)) {
                l(e.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_t44, "\"]:not(.").concat(e.params.slideDuplicateClass, ")")).index(), !1);
              } else {
                l(e.$wrapperEl.children(".".concat(e.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_t44, "\"]")).index(), !1);
              }
            }

            a("lazyImageReady", r[0], n[0]), e.params.autoHeight && e.updateAutoHeight();
          }
        }), a("lazyImageLoad", r[0], n[0]);
      });
    }

    function o() {
      var t = e.$wrapperEl,
          s = e.params,
          a = e.slides,
          i = e.activeIndex,
          r = e.virtual && s.virtual.enabled,
          o = s.lazy;
      var c = s.slidesPerView;

      function p(e) {
        if (r) {
          if (t.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length) return !0;
        } else if (a[e]) return !0;

        return !1;
      }

      function u(e) {
        return r ? d(e).attr("data-swiper-slide-index") : d(e).index();
      }

      if ("auto" === c && (c = 0), n || (n = !0), e.params.watchSlidesProgress) t.children(".".concat(s.slideVisibleClass)).each(function (e) {
        l(r ? d(e).attr("data-swiper-slide-index") : d(e).index());
      });else if (c > 1) for (var _e63 = i; _e63 < i + c; _e63 += 1) {
        p(_e63) && l(_e63);
      } else l(i);
      if (o.loadPrevNext) if (c > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        var _e64 = o.loadPrevNextAmount,
            _t45 = c,
            _s40 = Math.min(i + _t45 + Math.max(_e64, _t45), a.length),
            _r10 = Math.max(i - Math.max(_t45, _e64), 0);

        for (var _e65 = i + c; _e65 < _s40; _e65 += 1) {
          p(_e65) && l(_e65);
        }

        for (var _e66 = _r10; _e66 < i; _e66 += 1) {
          p(_e66) && l(_e66);
        }
      } else {
        var _e67 = t.children(".".concat(s.slideNextClass));

        _e67.length > 0 && l(u(_e67));

        var _a23 = t.children(".".concat(s.slidePrevClass));

        _a23.length > 0 && l(u(_a23));
      }
    }

    function c() {
      var t = r();
      if (!e || e.destroyed) return;
      var s = e.params.lazy.scrollingElement ? d(e.params.lazy.scrollingElement) : d(t),
          a = s[0] === t,
          n = a ? t.innerWidth : s[0].offsetWidth,
          l = a ? t.innerHeight : s[0].offsetHeight,
          p = e.$el.offset(),
          u = e.rtlTranslate;
      var h = !1;
      u && (p.left -= e.$el[0].scrollLeft);
      var m = [[p.left, p.top], [p.left + e.width, p.top], [p.left, p.top + e.height], [p.left + e.width, p.top + e.height]];

      for (var _e68 = 0; _e68 < m.length; _e68 += 1) {
        var _t46 = m[_e68];

        if (_t46[0] >= 0 && _t46[0] <= n && _t46[1] >= 0 && _t46[1] <= l) {
          if (0 === _t46[0] && 0 === _t46[1]) continue;
          h = !0;
        }
      }

      var f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      h ? (o(), s.off("scroll", c, f)) : i || (i = !0, s.on("scroll", c, f));
    }

    s("beforeInit", function () {
      e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
    }), s("init", function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o());
    }), s("scroll", function () {
      e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o();
    }), s("scrollbarDragMove resize _freeModeNoMomentumRelease", function () {
      e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o());
    }), s("transitionStart", function () {
      e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? c() : o());
    }), s("transitionEnd", function () {
      e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? c() : o());
    }), s("slideChange", function () {
      var _e$params2 = e.params,
          t = _e$params2.lazy,
          s = _e$params2.cssMode,
          a = _e$params2.watchSlidesProgress,
          i = _e$params2.touchReleaseOnEdges,
          r = _e$params2.resistanceRatio;
      t.enabled && (s || a && (i || 0 === r)) && o();
    }), Object.assign(e.lazy, {
      load: o,
      loadInSlide: l
    });
  }, function (_ref17) {
    var e = _ref17.swiper,
        t = _ref17.extendParams,
        s = _ref17.on;

    function a(e, t) {
      var s = function () {
        var e, t, s;
        return function (a, i) {
          for (t = -1, e = a.length; e - t > 1;) {
            s = e + t >> 1, a[s] <= i ? t = s : e = s;
          }

          return e;
        };
      }();

      var a, i;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
      }, this;
    }

    function i() {
      e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    }

    t({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    }), e.controller = {
      control: void 0
    }, s("beforeInit", function () {
      e.controller.control = e.params.controller.control;
    }), s("update", function () {
      i();
    }), s("resize", function () {
      i();
    }), s("observerUpdate", function () {
      i();
    }), s("setTranslate", function (t, s, a) {
      e.controller.control && e.controller.setTranslate(s, a);
    }), s("setTransition", function (t, s, a) {
      e.controller.control && e.controller.setTransition(s, a);
    }), Object.assign(e.controller, {
      setTranslate: function setTranslate(t, s) {
        var i = e.controller.control;
        var r, n;
        var l = e.constructor;

        function o(t) {
          var s = e.rtlTranslate ? -e.translate : e.translate;
          "slide" === e.params.controller.by && (!function (t) {
            e.controller.spline || (e.controller.spline = e.params.loop ? new a(e.slidesGrid, t.slidesGrid) : new a(e.snapGrid, t.snapGrid));
          }(t), n = -e.controller.spline.interpolate(-s)), n && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), n = (s - e.minTranslate()) * r + t.minTranslate()), e.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, e), t.updateActiveIndex(), t.updateSlidesClasses();
        }

        if (Array.isArray(i)) for (var _e69 = 0; _e69 < i.length; _e69 += 1) {
          i[_e69] !== s && i[_e69] instanceof l && o(i[_e69]);
        } else i instanceof l && s !== i && o(i);
      },
      setTransition: function setTransition(t, s) {
        var a = e.constructor,
            i = e.controller.control;
        var r;

        function n(s) {
          s.setTransition(t, e), 0 !== t && (s.transitionStart(), s.params.autoHeight && p(function () {
            s.updateAutoHeight();
          }), s.$wrapperEl.transitionEnd(function () {
            i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd());
          }));
        }

        if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) {
          i[r] !== s && i[r] instanceof a && n(i[r]);
        } else i instanceof a && s !== i && n(i);
      }
    });
  }, function (_ref18) {
    var e = _ref18.swiper,
        t = _ref18.extendParams,
        s = _ref18.on;
    t({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group"
      }
    });
    var a = null;

    function i(e) {
      var t = a;
      0 !== t.length && (t.html(""), t.html(e));
    }

    function r(e) {
      e.attr("tabIndex", "0");
    }

    function n(e) {
      e.attr("tabIndex", "-1");
    }

    function l(e, t) {
      e.attr("role", t);
    }

    function o(e, t) {
      e.attr("aria-roledescription", t);
    }

    function c(e, t) {
      e.attr("aria-label", t);
    }

    function p(e) {
      e.attr("aria-disabled", !0);
    }

    function u(e) {
      e.attr("aria-disabled", !1);
    }

    function h(t) {
      if (13 !== t.keyCode && 32 !== t.keyCode) return;
      var s = e.params.a11y,
          a = d(t.target);
      e.navigation && e.navigation.$nextEl && a.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)), e.navigation && e.navigation.$prevEl && a.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)), e.pagination && a.is(W(e.params.pagination.bulletClass)) && a[0].click();
    }

    function m() {
      if (e.params.loop || !e.navigation) return;
      var _e$navigation5 = e.navigation,
          t = _e$navigation5.$nextEl,
          s = _e$navigation5.$prevEl;
      s && s.length > 0 && (e.isBeginning ? (p(s), n(s)) : (u(s), r(s))), t && t.length > 0 && (e.isEnd ? (p(t), n(t)) : (u(t), r(t)));
    }

    function f() {
      return e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length;
    }

    var g = function g(e, t, s) {
      r(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)), c(e, s), function (e, t) {
        e.attr("aria-controls", t);
      }(e, t);
    };

    function v() {
      var t = e.params.a11y;
      e.$el.append(a);
      var s = e.$el;
      t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage), t.containerMessage && c(s, t.containerMessage);
      var i = e.$wrapperEl,
          r = i.attr("id") || "swiper-wrapper-".concat(function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      }(16)),
          n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      var p;
      p = r, i.attr("id", p), function (e, t) {
        e.attr("aria-live", t);
      }(i, n), t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage), l(d(e.slides), t.slideRole);
      var u = e.params.loop ? e.slides.filter(function (t) {
        return !t.classList.contains(e.params.slideDuplicateClass);
      }).length : e.slides.length;
      var m, v;
      e.slides.each(function (s, a) {
        var i = d(s),
            r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
        c(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u));
      }), e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (v = e.navigation.$prevEl), m && m.length && g(m, r, t.nextSlideMessage), v && v.length && g(v, r, t.prevSlideMessage), f() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h);
    }

    s("beforeInit", function () {
      a = d("<span class=\"".concat(e.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"));
    }), s("afterInit", function () {
      e.params.a11y.enabled && (v(), m());
    }), s("toEdge", function () {
      e.params.a11y.enabled && m();
    }), s("fromEdge", function () {
      e.params.a11y.enabled && m();
    }), s("paginationUpdate", function () {
      e.params.a11y.enabled && function () {
        var t = e.params.a11y;
        f() && e.pagination.bullets.each(function (s) {
          var a = d(s);
          r(a), e.params.pagination.renderBullet || (l(a, "button"), c(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)));
        });
      }();
    }), s("destroy", function () {
      e.params.a11y.enabled && function () {
        var t, s;
        a && a.length > 0 && a.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", h), s && s.off("keydown", h), f() && e.pagination.$el.off("keydown", W(e.params.pagination.bulletClass), h);
      }();
    });
  }, function (_ref19) {
    var e = _ref19.swiper,
        t = _ref19.extendParams,
        s = _ref19.on;
    t({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides"
      }
    });
    var a = !1,
        i = {};

    var n = function n(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
        l = function l(e) {
      var t = r();
      var s;
      s = e ? new URL(e) : t.location;
      var a = s.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
        o = function o(t, s) {
      var i = r();
      if (!a || !e.params.history.enabled) return;
      var l;
      l = e.params.url ? new URL(e.params.url) : i.location;
      var o = e.slides.eq(s);
      var d = n(o.attr("data-history"));

      if (e.params.history.root.length > 0) {
        var _s41 = e.params.history.root;
        "/" === _s41[_s41.length - 1] && (_s41 = _s41.slice(0, _s41.length - 1)), d = "".concat(_s41, "/").concat(t, "/").concat(d);
      } else l.pathname.includes(t) || (d = "".concat(t, "/").concat(d));

      var c = i.history.state;
      c && c.value === d || (e.params.history.replaceState ? i.history.replaceState({
        value: d
      }, null, d) : i.history.pushState({
        value: d
      }, null, d));
    },
        d = function d(t, s, a) {
      if (s) for (var _i15 = 0, _r11 = e.slides.length; _i15 < _r11; _i15 += 1) {
        var _r12 = e.slides.eq(_i15);

        if (n(_r12.attr("data-history")) === s && !_r12.hasClass(e.params.slideDuplicateClass)) {
          var _s42 = _r12.index();

          e.slideTo(_s42, t, a);
        }
      } else e.slideTo(0, t, a);
    },
        c = function c() {
      i = l(e.params.url), d(e.params.speed, e.paths.value, !1);
    };

    s("init", function () {
      e.params.history.enabled && function () {
        var t = r();

        if (e.params.history) {
          if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          a = !0, i = l(e.params.url), (i.key || i.value) && (d(0, i.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", c));
        }
      }();
    }), s("destroy", function () {
      e.params.history.enabled && function () {
        var t = r();
        e.params.history.replaceState || t.removeEventListener("popstate", c);
      }();
    }), s("transitionEnd _freeModeNoMomentumRelease", function () {
      a && o(e.params.history.key, e.activeIndex);
    }), s("slideChange", function () {
      a && e.params.cssMode && o(e.params.history.key, e.activeIndex);
    });
  }, function (_ref20) {
    var e = _ref20.swiper,
        t = _ref20.extendParams,
        s = _ref20.emit,
        i = _ref20.on;
    var n = !1;
    var l = a(),
        o = r();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    });

    var c = function c() {
      s("hashChange");
      var t = l.location.hash.replace("#", "");

      if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var _s43 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();

        if (void 0 === _s43) return;
        e.slideTo(_s43);
      }
    },
        p = function p() {
      if (n && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || ""), s("hashSet");else {
        var _t47 = e.slides.eq(e.activeIndex),
            _a24 = _t47.attr("data-hash") || _t47.attr("data-history");

        l.location.hash = _a24 || "", s("hashSet");
      }
    };

    i("init", function () {
      e.params.hashNavigation.enabled && function () {
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
        n = !0;
        var t = l.location.hash.replace("#", "");

        if (t) {
          var _s44 = 0;

          for (var _a25 = 0, _i16 = e.slides.length; _a25 < _i16; _a25 += 1) {
            var _i17 = e.slides.eq(_a25);

            if ((_i17.attr("data-hash") || _i17.attr("data-history")) === t && !_i17.hasClass(e.params.slideDuplicateClass)) {
              var _t48 = _i17.index();

              e.slideTo(_t48, _s44, e.params.runCallbacksOnInit, !0);
            }
          }
        }

        e.params.hashNavigation.watchState && d(o).on("hashchange", c);
      }();
    }), i("destroy", function () {
      e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", c);
    }), i("transitionEnd _freeModeNoMomentumRelease", function () {
      n && p();
    }), i("slideChange", function () {
      n && e.params.cssMode && p();
    });
  }, function (_ref21) {
    var e = _ref21.swiper,
        t = _ref21.extendParams,
        s = _ref21.on,
        i = _ref21.emit;
    var r;

    function n() {
      var t = e.slides.eq(e.activeIndex);
      var s = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = p(function () {
        var t;
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && n();
      }, s);
    }

    function l() {
      return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), n(), !0);
    }

    function o() {
      return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0);
    }

    function d(t) {
      e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].addEventListener(t, u);
      }) : (e.autoplay.paused = !1, n())));
    }

    function c() {
      var t = a();
      "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1);
    }

    function u(t) {
      e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].removeEventListener(t, u);
      }), e.autoplay.paused = !1, e.autoplay.running ? n() : o());
    }

    function h() {
      e.params.autoplay.disableOnInteraction ? o() : d(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].removeEventListener(t, u);
      });
    }

    function m() {
      e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, n());
    }

    e.autoplay = {
      running: !1,
      paused: !1
    }, t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    }), s("init", function () {
      if (e.params.autoplay.enabled) {
        l();
        a().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m));
      }
    }), s("beforeTransitionStart", function (t, s, a) {
      e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o());
    }), s("sliderFirstMove", function () {
      e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d());
    }), s("touchEnd", function () {
      e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n();
    }), s("destroy", function () {
      e.$el.off("mouseenter", h), e.$el.off("mouseleave", m), e.autoplay.running && o();
      a().removeEventListener("visibilitychange", c);
    }), Object.assign(e.autoplay, {
      pause: d,
      run: n,
      start: l,
      stop: o
    });
  }, function (_ref22) {
    var e = _ref22.swiper,
        t = _ref22.extendParams,
        s = _ref22.on;
    t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    var a = !1,
        i = !1;

    function r() {
      var t = e.thumbs.swiper;
      if (!t) return;
      var s = t.clickedIndex,
          a = t.clickedSlide;
      if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      var i;

      if (i = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
        var _t49 = e.activeIndex;
        e.slides.eq(_t49).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t49 = e.activeIndex);

        var _s45 = e.slides.eq(_t49).prevAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index(),
            _a26 = e.slides.eq(_t49).nextAll("[data-swiper-slide-index=\"".concat(i, "\"]")).eq(0).index();

        i = void 0 === _s45 ? _a26 : void 0 === _a26 ? _s45 : _a26 - _t49 < _t49 - _s45 ? _a26 : _s45;
      }

      e.slideTo(i);
    }

    function n() {
      var t = e.params.thumbs;
      if (a) return !1;
      a = !0;
      var s = e.constructor;
      if (t.swiper instanceof s) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      });else if (m(t.swiper)) {
        var _a27 = Object.assign({}, t.swiper);

        Object.assign(_a27, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), e.thumbs.swiper = new s(_a27), i = !0;
      }
      return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", r), !0;
    }

    function l(t) {
      var s = e.thumbs.swiper;
      if (!s) return;
      var a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
          i = e.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;

      if (e.realIndex !== s.realIndex || r) {
        var _n10,
            _l8,
            _o7 = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(_o7).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _o7 = s.activeIndex);

          var _t50 = s.slides.eq(_o7).prevAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index(),
              _a28 = s.slides.eq(_o7).nextAll("[data-swiper-slide-index=\"".concat(e.realIndex, "\"]")).eq(0).index();

          _n10 = void 0 === _t50 ? _a28 : void 0 === _a28 ? _t50 : _a28 - _o7 == _o7 - _t50 ? s.params.slidesPerGroup > 1 ? _a28 : _o7 : _a28 - _o7 < _o7 - _t50 ? _a28 : _t50, _l8 = e.activeIndex > e.previousIndex ? "next" : "prev";
        } else _n10 = e.realIndex, _l8 = _n10 > e.previousIndex ? "next" : "prev";

        r && (_n10 += "next" === _l8 ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(_n10) < 0 && (s.params.centeredSlides ? _n10 = _n10 > _o7 ? _n10 - Math.floor(a / 2) + 1 : _n10 + Math.floor(a / 2) - 1 : _n10 > _o7 && s.params.slidesPerGroup, s.slideTo(_n10, t ? 0 : void 0));
      }

      var n = 1;
      var l = e.params.thumbs.slideThumbActiveClass;
      if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (var _t51 = 0; _t51 < n; _t51 += 1) {
        s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(e.realIndex + _t51, "\"]")).addClass(l);
      } else for (var _t52 = 0; _t52 < n; _t52 += 1) {
        s.slides.eq(e.realIndex + _t52).addClass(l);
      }
    }

    e.thumbs = {
      swiper: null
    }, s("beforeInit", function () {
      var t = e.params.thumbs;
      t && t.swiper && (n(), l(!0));
    }), s("slideChange update resize observerUpdate", function () {
      e.thumbs.swiper && l();
    }), s("setTransition", function (t, s) {
      var a = e.thumbs.swiper;
      a && a.setTransition(s);
    }), s("beforeDestroy", function () {
      var t = e.thumbs.swiper;
      t && i && t && t.destroy();
    }), Object.assign(e.thumbs, {
      init: n,
      update: l
    });
  }, function (_ref23) {
    var e = _ref23.swiper,
        t = _ref23.extendParams,
        s = _ref23.emit,
        a = _ref23.once;
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(e, {
      freeMode: {
        onTouchMove: function onTouchMove() {
          var t = e.touchEventsData,
              s = e.touches;
          0 === t.velocities.length && t.velocities.push({
            position: s[e.isHorizontal() ? "startX" : "startY"],
            time: t.touchStartTime
          }), t.velocities.push({
            position: s[e.isHorizontal() ? "currentX" : "currentY"],
            time: u()
          });
        },
        onTouchEnd: function onTouchEnd(_ref24) {
          var t = _ref24.currentPos;
          var i = e.params,
              r = e.$wrapperEl,
              n = e.rtlTranslate,
              l = e.snapGrid,
              o = e.touchEventsData,
              d = u() - o.touchStartTime;
          if (t < -e.minTranslate()) e.slideTo(e.activeIndex);else if (t > -e.maxTranslate()) e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);else {
            if (i.freeMode.momentum) {
              if (o.velocities.length > 1) {
                var _t54 = o.velocities.pop(),
                    _s46 = o.velocities.pop(),
                    _a29 = _t54.position - _s46.position,
                    _r13 = _t54.time - _s46.time;

                e.velocity = _a29 / _r13, e.velocity /= 2, Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0), (_r13 > 150 || u() - _t54.time > 300) && (e.velocity = 0);
              } else e.velocity = 0;

              e.velocity *= i.freeMode.momentumVelocityRatio, o.velocities.length = 0;

              var _t53 = 1e3 * i.freeMode.momentumRatio;

              var _d6 = e.velocity * _t53;

              var _c4 = e.translate + _d6;

              n && (_c4 = -_c4);

              var _p2,
                  _h = !1;

              var _m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;

              var _f;

              if (_c4 < e.maxTranslate()) i.freeMode.momentumBounce ? (_c4 + e.maxTranslate() < -_m && (_c4 = e.maxTranslate() - _m), _p2 = e.maxTranslate(), _h = !0, o.allowMomentumBounce = !0) : _c4 = e.maxTranslate(), i.loop && i.centeredSlides && (_f = !0);else if (_c4 > e.minTranslate()) i.freeMode.momentumBounce ? (_c4 - e.minTranslate() > _m && (_c4 = e.minTranslate() + _m), _p2 = e.minTranslate(), _h = !0, o.allowMomentumBounce = !0) : _c4 = e.minTranslate(), i.loop && i.centeredSlides && (_f = !0);else if (i.freeMode.sticky) {
                var _t55;

                for (var _e70 = 0; _e70 < l.length; _e70 += 1) {
                  if (l[_e70] > -_c4) {
                    _t55 = _e70;
                    break;
                  }
                }

                _c4 = Math.abs(l[_t55] - _c4) < Math.abs(l[_t55 - 1] - _c4) || "next" === e.swipeDirection ? l[_t55] : l[_t55 - 1], _c4 = -_c4;
              }

              if (_f && a("transitionEnd", function () {
                e.loopFix();
              }), 0 !== e.velocity) {
                if (_t53 = n ? Math.abs((-_c4 - e.translate) / e.velocity) : Math.abs((_c4 - e.translate) / e.velocity), i.freeMode.sticky) {
                  var _s47 = Math.abs((n ? -_c4 : _c4) - e.translate),
                      _a30 = e.slidesSizesGrid[e.activeIndex];

                  _t53 = _s47 < _a30 ? i.speed : _s47 < 2 * _a30 ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeMode.sticky) return void e.slideToClosest();

              i.freeMode.momentumBounce && _h ? (e.updateProgress(_p2), e.setTransition(_t53), e.setTranslate(_c4), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd(function () {
                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"), e.setTransition(i.speed), setTimeout(function () {
                  e.setTranslate(_p2), r.transitionEnd(function () {
                    e && !e.destroyed && e.transitionEnd();
                  });
                }, 0));
              })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(_c4), e.setTransition(_t53), e.setTranslate(_c4), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd(function () {
                e && !e.destroyed && e.transitionEnd();
              }))) : e.updateProgress(_c4), e.updateActiveIndex(), e.updateSlidesClasses();
            } else {
              if (i.freeMode.sticky) return void e.slideToClosest();
              i.freeMode && s("_freeModeNoMomentumRelease");
            }

            (!i.freeMode.momentum || d >= i.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
          }
        }
      }
    });
  }, function (_ref25) {
    var e = _ref25.swiper,
        t = _ref25.extendParams;
    var s, a, i;
    t({
      grid: {
        rows: 1,
        fill: "column"
      }
    }), e.grid = {
      initSlides: function initSlides(t) {
        var r = e.params.slidesPerView,
            _e$params$grid = e.params.grid,
            n = _e$params$grid.rows,
            l = _e$params$grid.fill;
        a = s / n, i = Math.floor(t / n), s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n, "auto" !== r && "row" === l && (s = Math.max(s, r * n));
      },
      updateSlide: function updateSlide(t, r, n, l) {
        var _e$params3 = e.params,
            o = _e$params3.slidesPerGroup,
            d = _e$params3.spaceBetween,
            _e$params$grid2 = e.params.grid,
            c = _e$params$grid2.rows,
            p = _e$params$grid2.fill;
        var u, h, m;

        if ("row" === p && o > 1) {
          var _e71 = Math.floor(t / (o * c)),
              _a31 = t - c * o * _e71,
              _i18 = 0 === _e71 ? o : Math.min(Math.ceil((n - _e71 * c * o) / c), o);

          m = Math.floor(_a31 / _i18), h = _a31 - m * _i18 + _e71 * o, u = h + m * s / c, r.css({
            "-webkit-order": u,
            order: u
          });
        } else "column" === p ? (h = Math.floor(t / c), m = t - h * c, (h > i || h === i && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(t / a), h = t - m * a);

        r.css(l("margin-top"), 0 !== m ? d && "".concat(d, "px") : "");
      },
      updateWrapperSize: function updateWrapperSize(t, a, i) {
        var _e$params4 = e.params,
            r = _e$params4.spaceBetween,
            n = _e$params4.centeredSlides,
            l = _e$params4.roundLengths,
            o = e.params.grid.rows;

        if (e.virtualSize = (t + r) * s, e.virtualSize = Math.ceil(e.virtualSize / o) - r, e.$wrapperEl.css(_defineProperty({}, i("width"), "".concat(e.virtualSize + r, "px"))), n) {
          a.splice(0, a.length);
          var _t56 = [];

          for (var _s48 = 0; _s48 < a.length; _s48 += 1) {
            var _i19 = a[_s48];
            l && (_i19 = Math.floor(_i19)), a[_s48] < e.virtualSize + a[0] && _t56.push(_i19);
          }

          a.push.apply(a, _t56);
        }
      }
    };
  }, function (_ref26) {
    var e = _ref26.swiper;
    Object.assign(e, {
      appendSlide: R.bind(e),
      prependSlide: j.bind(e),
      addSlide: _.bind(e),
      removeSlide: V.bind(e),
      removeAllSlides: q.bind(e)
    });
  }, function (_ref27) {
    var e = _ref27.swiper,
        t = _ref27.extendParams,
        s = _ref27.on;
    t({
      fadeEffect: {
        crossFade: !1,
        transformEl: null
      }
    }), F({
      effect: "fade",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
            s = e.params.fadeEffect;

        for (var _a32 = 0; _a32 < t.length; _a32 += 1) {
          var _t57 = e.slides.eq(_a32);

          var _i20 = -_t57[0].swiperSlideOffset;

          e.params.virtualTranslate || (_i20 -= e.translate);
          var _r14 = 0;
          e.isHorizontal() || (_r14 = _i20, _i20 = 0);

          var _n11 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t57[0].progress), 0) : 1 + Math.min(Math.max(_t57[0].progress, -1), 0);

          U(s, _t57).css({
            opacity: _n11
          }).transform("translate3d(".concat(_i20, "px, ").concat(_r14, "px, 0px)"));
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.fadeEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s,
          allSlides: !0
        });
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }, function (_ref28) {
    var e = _ref28.swiper,
        t = _ref28.extendParams,
        s = _ref28.on;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    }), F({
      effect: "cube",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.$el,
            s = e.$wrapperEl,
            a = e.slides,
            i = e.width,
            r = e.height,
            n = e.rtlTranslate,
            l = e.size,
            o = e.browser,
            c = e.params.cubeEffect,
            p = e.isHorizontal(),
            u = e.virtual && e.params.virtual.enabled;
        var h,
            m = 0;
        c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
          height: "".concat(i, "px")
        })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), t.append(h))));

        for (var _e72 = 0; _e72 < a.length; _e72 += 1) {
          var _t58 = a.eq(_e72);

          var _s49 = _e72;
          u && (_s49 = parseInt(_t58.attr("data-swiper-slide-index"), 10));

          var _i21 = 90 * _s49,
              _r15 = Math.floor(_i21 / 360);

          n && (_i21 = -_i21, _r15 = Math.floor(-_i21 / 360));

          var _o8 = Math.max(Math.min(_t58[0].progress, 1), -1);

          var _h2 = 0,
              _f2 = 0,
              _g = 0;
          _s49 % 4 == 0 ? (_h2 = 4 * -_r15 * l, _g = 0) : (_s49 - 1) % 4 == 0 ? (_h2 = 0, _g = 4 * -_r15 * l) : (_s49 - 2) % 4 == 0 ? (_h2 = l + 4 * _r15 * l, _g = l) : (_s49 - 3) % 4 == 0 && (_h2 = -l, _g = 3 * l + 4 * l * _r15), n && (_h2 = -_h2), p || (_f2 = _h2, _h2 = 0);

          var _v = "rotateX(".concat(p ? 0 : -_i21, "deg) rotateY(").concat(p ? _i21 : 0, "deg) translate3d(").concat(_h2, "px, ").concat(_f2, "px, ").concat(_g, "px)");

          if (_o8 <= 1 && _o8 > -1 && (m = 90 * _s49 + 90 * _o8, n && (m = 90 * -_s49 - 90 * _o8)), _t58.transform(_v), c.slideShadows) {
            var _e73 = p ? _t58.find(".swiper-slide-shadow-left") : _t58.find(".swiper-slide-shadow-top"),
                _s50 = p ? _t58.find(".swiper-slide-shadow-right") : _t58.find(".swiper-slide-shadow-bottom");

            0 === _e73.length && (_e73 = d("<div class=\"swiper-slide-shadow-".concat(p ? "left" : "top", "\"></div>")), _t58.append(_e73)), 0 === _s50.length && (_s50 = d("<div class=\"swiper-slide-shadow-".concat(p ? "right" : "bottom", "\"></div>")), _t58.append(_s50)), _e73.length && (_e73[0].style.opacity = Math.max(-_o8, 0)), _s50.length && (_s50[0].style.opacity = Math.max(_o8, 0));
          }
        }

        if (s.css({
          "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"),
          "transform-origin": "50% 50% -".concat(l / 2, "px")
        }), c.shadow) if (p) h.transform("translate3d(0px, ".concat(i / 2 + c.shadowOffset, "px, ").concat(-i / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(c.shadowScale, ")"));else {
          var _e74 = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
              _t59 = 1.5 - (Math.sin(2 * _e74 * Math.PI / 360) / 2 + Math.cos(2 * _e74 * Math.PI / 360) / 2),
              _s51 = c.shadowScale,
              _a33 = c.shadowScale / _t59,
              _i22 = c.shadowOffset;

          h.transform("scale3d(".concat(_s51, ", 1, ").concat(_a33, ") translate3d(0px, ").concat(r / 2 + _i22, "px, ").concat(-r / 2 / _a33, "px) rotateX(-90deg)"));
        }
        var f = o.isSafari || o.isWebView ? -l / 2 : 0;
        s.transform("translate3d(0px,0,".concat(f, "px) rotateX(").concat(e.isHorizontal() ? 0 : m, "deg) rotateY(").concat(e.isHorizontal() ? -m : 0, "deg)"));
      },
      setTransition: function setTransition(t) {
        var s = e.$el,
            a = e.slides;
        a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
      }
    });
  }, function (_ref29) {
    var e = _ref29.swiper,
        t = _ref29.extendParams,
        s = _ref29.on;
    t({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null
      }
    }), F({
      effect: "flip",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
            s = e.rtlTranslate,
            a = e.params.flipEffect;

        for (var _i23 = 0; _i23 < t.length; _i23 += 1) {
          var _r16 = t.eq(_i23);

          var _n12 = _r16[0].progress;
          e.params.flipEffect.limitRotation && (_n12 = Math.max(Math.min(_r16[0].progress, 1), -1));
          var _l9 = _r16[0].swiperSlideOffset;

          var _o9 = -180 * _n12,
              _d7 = 0,
              _c5 = e.params.cssMode ? -_l9 - e.translate : -_l9,
              _p3 = 0;

          if (e.isHorizontal() ? s && (_o9 = -_o9) : (_p3 = _c5, _c5 = 0, _d7 = -_o9, _o9 = 0), _r16[0].style.zIndex = -Math.abs(Math.round(_n12)) + t.length, a.slideShadows) {
            var _t60 = e.isHorizontal() ? _r16.find(".swiper-slide-shadow-left") : _r16.find(".swiper-slide-shadow-top"),
                _s52 = e.isHorizontal() ? _r16.find(".swiper-slide-shadow-right") : _r16.find(".swiper-slide-shadow-bottom");

            0 === _t60.length && (_t60 = Z(a, _r16, e.isHorizontal() ? "left" : "top")), 0 === _s52.length && (_s52 = Z(a, _r16, e.isHorizontal() ? "right" : "bottom")), _t60.length && (_t60[0].style.opacity = Math.max(-_n12, 0)), _s52.length && (_s52[0].style.opacity = Math.max(_n12, 0));
          }

          var _u4 = "translate3d(".concat(_c5, "px, ").concat(_p3, "px, 0px) rotateX(").concat(_d7, "deg) rotateY(").concat(_o9, "deg)");

          U(a, _r16).transform(_u4);
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.flipEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }, function (_ref30) {
    var e = _ref30.swiper,
        t = _ref30.extendParams,
        s = _ref30.on;
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null
      }
    }), F({
      effect: "coverflow",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.width,
            s = e.height,
            a = e.slides,
            i = e.slidesSizesGrid,
            r = e.params.coverflowEffect,
            n = e.isHorizontal(),
            l = e.translate,
            o = n ? t / 2 - l : s / 2 - l,
            d = n ? r.rotate : -r.rotate,
            c = r.depth;

        for (var _e75 = 0, _t61 = a.length; _e75 < _t61; _e75 += 1) {
          var _t62 = a.eq(_e75),
              _s53 = i[_e75],
              _l10 = (o - _t62[0].swiperSlideOffset - _s53 / 2) / _s53 * r.modifier;

          var _p4 = n ? d * _l10 : 0,
              _u5 = n ? 0 : d * _l10,
              _h3 = -c * Math.abs(_l10),
              _m2 = r.stretch;

          "string" == typeof _m2 && -1 !== _m2.indexOf("%") && (_m2 = parseFloat(r.stretch) / 100 * _s53);

          var _f3 = n ? 0 : _m2 * _l10,
              _g2 = n ? _m2 * _l10 : 0,
              _v2 = 1 - (1 - r.scale) * Math.abs(_l10);

          Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_f3) < .001 && (_f3 = 0), Math.abs(_h3) < .001 && (_h3 = 0), Math.abs(_p4) < .001 && (_p4 = 0), Math.abs(_u5) < .001 && (_u5 = 0), Math.abs(_v2) < .001 && (_v2 = 0);

          var _w = "translate3d(".concat(_g2, "px,").concat(_f3, "px,").concat(_h3, "px)  rotateX(").concat(_u5, "deg) rotateY(").concat(_p4, "deg) scale(").concat(_v2, ")");

          if (U(r, _t62).transform(_w), _t62[0].style.zIndex = 1 - Math.abs(Math.round(_l10)), r.slideShadows) {
            var _e76 = n ? _t62.find(".swiper-slide-shadow-left") : _t62.find(".swiper-slide-shadow-top"),
                _s54 = n ? _t62.find(".swiper-slide-shadow-right") : _t62.find(".swiper-slide-shadow-bottom");

            0 === _e76.length && (_e76 = Z(r, _t62, n ? "left" : "top")), 0 === _s54.length && (_s54 = Z(r, _t62, n ? "right" : "bottom")), _e76.length && (_e76[0].style.opacity = _l10 > 0 ? _l10 : 0), _s54.length && (_s54[0].style.opacity = -_l10 > 0 ? -_l10 : 0);
          }
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.coverflowEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0
        };
      }
    });
  }, function (_ref31) {
    var e = _ref31.swiper,
        t = _ref31.extendParams,
        s = _ref31.on;
    t({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });

    var a = function a(e) {
      return "string" == typeof e ? e : "".concat(e, "px");
    };

    F({
      effect: "creative",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
            s = e.$wrapperEl,
            i = e.slidesSizesGrid,
            r = e.params.creativeEffect,
            n = r.progressMultiplier,
            l = e.params.centeredSlides;

        if (l) {
          var _t63 = i[0] / 2 - e.params.slidesOffsetBefore || 0;

          s.transform("translateX(calc(50% - ".concat(_t63, "px))"));
        }

        var _loop = function _loop(_s55) {
          var i = t.eq(_s55),
              o = i[0].progress,
              d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
          var c = d;
          l || (c = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
          var p = i[0].swiperSlideOffset,
              u = [e.params.cssMode ? -p - e.translate : -p, 0, 0],
              h = [0, 0, 0];
          var m = !1;
          e.isHorizontal() || (u[1] = u[0], u[0] = 0);
          var f = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(function (e, t) {
            u[t] = "calc(".concat(e, "px + (").concat(a(f.translate[t]), " * ").concat(Math.abs(d * n), "))");
          }), h.forEach(function (e, t) {
            h[t] = f.rotate[t] * Math.abs(d * n);
          }), i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
          var g = u.join(", "),
              v = "rotateX(".concat(h[0], "deg) rotateY(").concat(h[1], "deg) rotateZ(").concat(h[2], "deg)"),
              w = c < 0 ? "scale(".concat(1 + (1 - f.scale) * c * n, ")") : "scale(".concat(1 - (1 - f.scale) * c * n, ")"),
              b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
              x = "translate3d(".concat(g, ") ").concat(v, " ").concat(w);

          if (m && f.shadow || !m) {
            var _e77 = i.children(".swiper-slide-shadow");

            if (0 === _e77.length && f.shadow && (_e77 = Z(r, i)), _e77.length) {
              var _t64 = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;

              _e77[0].style.opacity = Math.min(Math.max(Math.abs(_t64), 0), 1);
            }
          }

          var y = U(r, i);
          y.transform(x).css({
            opacity: b
          }), f.origin && y.css("transform-origin", f.origin);
        };

        for (var _s55 = 0; _s55 < t.length; _s55 += 1) {
          _loop(_s55);
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.creativeEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s,
          allSlides: !0
        });
      },
      perspective: function perspective() {
        return e.params.creativeEffect.perspective;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }, function (_ref32) {
    var e = _ref32.swiper,
        t = _ref32.extendParams,
        s = _ref32.on;
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null
      }
    }), F({
      effect: "cards",
      swiper: e,
      on: s,
      setTranslate: function setTranslate() {
        var t = e.slides,
            s = e.activeIndex,
            a = e.params.cardsEffect,
            _e$touchEventsData = e.touchEventsData,
            i = _e$touchEventsData.startTranslate,
            r = _e$touchEventsData.isTouched,
            n = e.translate;

        for (var _l11 = 0; _l11 < t.length; _l11 += 1) {
          var _o10 = t.eq(_l11),
              _d8 = _o10[0].progress,
              _c6 = Math.min(Math.max(_d8, -4), 4);

          var _p5 = _o10[0].swiperSlideOffset;
          e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform("translateX(".concat(e.minTranslate(), "px)")), e.params.centeredSlides && e.params.cssMode && (_p5 -= t[0].swiperSlideOffset);

          var _u6 = e.params.cssMode ? -_p5 - e.translate : -_p5,
              _h4 = 0;

          var _m3 = -100 * Math.abs(_c6);

          var _f4 = 1,
              _g3 = -2 * _c6,
              _v3 = 8 - .75 * Math.abs(_c6);

          var _w2 = (_l11 === s || _l11 === s - 1) && _c6 > 0 && _c6 < 1 && (r || e.params.cssMode) && n < i,
              _b = (_l11 === s || _l11 === s + 1) && _c6 < 0 && _c6 > -1 && (r || e.params.cssMode) && n > i;

          if (_w2 || _b) {
            var _e78 = Math.pow(1 - Math.abs((Math.abs(_c6) - .5) / .5), .5);

            _g3 += -28 * _c6 * _e78, _f4 += -.5 * _e78, _v3 += 96 * _e78, _h4 = -25 * _e78 * Math.abs(_c6) + "%";
          }

          if (_u6 = _c6 < 0 ? "calc(".concat(_u6, "px + (").concat(_v3 * Math.abs(_c6), "%))") : _c6 > 0 ? "calc(".concat(_u6, "px + (-").concat(_v3 * Math.abs(_c6), "%))") : "".concat(_u6, "px"), !e.isHorizontal()) {
            var _e79 = _h4;
            _h4 = _u6, _u6 = _e79;
          }

          var _x = "\n        translate3d(".concat(_u6, ", ").concat(_h4, ", ").concat(_m3, "px)\n        rotateZ(").concat(_g3, "deg)\n        scale(").concat(_c6 < 0 ? "" + (1 + (1 - _f4) * _c6) : "" + (1 - (1 - _f4) * _c6), ")\n      ");

          if (a.slideShadows) {
            var _e80 = _o10.find(".swiper-slide-shadow");

            0 === _e80.length && (_e80 = Z(a, _o10)), _e80.length && (_e80[0].style.opacity = Math.min(Math.max((Math.abs(_c6) - .5) / .5, 0), 1));
          }

          _o10[0].style.zIndex = -Math.abs(Math.round(_d8)) + t.length;
          U(a, _o10).transform(_x);
        }
      },
      setTransition: function setTransition(t) {
        var s = e.params.cardsEffect.transformEl;
        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
          swiper: e,
          duration: t,
          transformEl: s
        });
      },
      perspective: function perspective() {
        return !0;
      },
      overwriteParams: function overwriteParams() {
        return {
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode
        };
      }
    });
  }];
  return H.use(J), H;
});
typeof navigator !== "undefined" && function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(function () {
      return factory(root);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
    module.exports = factory(root);
  } else {
    root.lottie = factory(root);
    root.bodymovin = root.lottie;
  }
}(window || {}, function (window) {
  "use strict";

  var svgNS = "http://www.w3.org/2000/svg",
      locationHref = "",
      initialDefaultFrame = -999999,
      subframeEnabled = !0,
      expressionsPlugin,
      isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      cachedColors = {},
      bm_rounder = Math.round,
      bm_rnd,
      bm_pow = Math.pow,
      bm_sqrt = Math.sqrt,
      bm_abs = Math.abs,
      bm_floor = Math.floor,
      bm_max = Math.max,
      bm_min = Math.min,
      blitter = 10,
      BMMath = {};

  function ProjectInterface() {
    return {};
  }

  !function () {
    var t,
        e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
        r = e.length;

    for (t = 0; t < r; t += 1) {
      BMMath[e[t]] = Math[e[t]];
    }
  }(), BMMath.random = Math.random, BMMath.abs = function (t) {
    if ("object" === _typeof(t) && t.length) {
      var e,
          r = createSizedArray(t.length),
          i = t.length;

      for (e = 0; e < i; e += 1) {
        r[e] = Math.abs(t[e]);
      }

      return r;
    }

    return Math.abs(t);
  };
  var defaultCurveSegments = 150,
      degToRads = Math.PI / 180,
      roundCorner = .5519;

  function roundValues(t) {
    bm_rnd = t ? Math.round : function (t) {
      return t;
    };
  }

  function styleDiv(t) {
    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d";
  }

  function BMEnterFrameEvent(t, e, r, i) {
    this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
  }

  function BMCompleteEvent(t, e) {
    this.type = t, this.direction = e < 0 ? -1 : 1;
  }

  function BMCompleteLoopEvent(t, e, r, i) {
    this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
  }

  function BMSegmentStartEvent(t, e, r) {
    this.type = t, this.firstFrame = e, this.totalFrames = r;
  }

  function BMDestroyEvent(t, e) {
    this.type = t, this.target = e;
  }

  function BMRenderFrameErrorEvent(t, e) {
    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
  }

  function BMConfigErrorEvent(t) {
    this.type = "configError", this.nativeError = t;
  }

  function BMAnimationConfigErrorEvent(t, e) {
    this.type = t, this.nativeError = e, this.currentTime = currentTime;
  }

  roundValues(!1);
  var createElementID = (G = 0, function () {
    return "__lottie_element_" + ++G;
  }),
      G;

  function HSVtoRGB(t, e, r) {
    var i, s, a, n, o, h, l, p;

    switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
      case 0:
        i = r, s = p, a = h;
        break;

      case 1:
        i = l, s = r, a = h;
        break;

      case 2:
        i = h, s = r, a = p;
        break;

      case 3:
        i = h, s = l, a = r;
        break;

      case 4:
        i = p, s = h, a = r;
        break;

      case 5:
        i = r, s = h, a = l;
    }

    return [i, s, a];
  }

  function RGBtoHSV(t, e, r) {
    var i,
        s = Math.max(t, e, r),
        a = Math.min(t, e, r),
        n = s - a,
        o = 0 === s ? 0 : n / s,
        h = s / 255;

    switch (s) {
      case a:
        i = 0;
        break;

      case t:
        i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
        break;

      case e:
        i = r - t + 2 * n, i /= 6 * n;
        break;

      case r:
        i = t - e + 4 * n, i /= 6 * n;
    }

    return [i, o, h];
  }

  function addSaturationToRGB(t, e) {
    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
    return r[1] += e, 1 < r[1] ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
  }

  function addBrightnessToRGB(t, e) {
    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
    return r[2] += e, 1 < r[2] ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
  }

  function addHueToRGB(t, e) {
    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
    return r[0] += e / 360, 1 < r[0] ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
  }

  var rgbToHex = function () {
    var t,
        e,
        i = [];

    for (t = 0; t < 256; t += 1) {
      e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e;
    }

    return function (t, e, r) {
      return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r];
    };
  }();

  function BaseEvent() {}

  BaseEvent.prototype = {
    triggerEvent: function triggerEvent(t, e) {
      if (this._cbs[t]) for (var r = this._cbs[t].length, i = 0; i < r; i++) {
        this._cbs[t][i](e);
      }
    },
    addEventListener: function addEventListener(t, e) {
      return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function () {
        this.removeEventListener(t, e);
      }.bind(this);
    },
    removeEventListener: function removeEventListener(t, e) {
      if (e) {
        if (this._cbs[t]) {
          for (var r = 0, i = this._cbs[t].length; r < i;) {
            this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
          }

          this._cbs[t].length || (this._cbs[t] = null);
        }
      } else this._cbs[t] = null;
    }
  };
  var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (t, e) {
    return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0;
  } : function (t, e) {
    var r,
        i = 0,
        s = [];

    switch (t) {
      case "int16":
      case "uint8c":
        r = 1;
        break;

      default:
        r = 1.1;
    }

    for (i = 0; i < e; i += 1) {
      s.push(r);
    }

    return s;
  };

  function createSizedArray(t) {
    return Array.apply(null, {
      length: t
    });
  }

  function createNS(t) {
    return document.createElementNS(svgNS, t);
  }

  function createTag(t) {
    return document.createElement(t);
  }

  function DynamicPropertyContainer() {}

  DynamicPropertyContainer.prototype = {
    addDynamicProperty: function addDynamicProperty(t) {
      -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
    },
    iterateDynamicProperties: function iterateDynamicProperties() {
      this._mdf = !1;
      var t,
          e = this.dynamicProperties.length;

      for (t = 0; t < e; t += 1) {
        this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
      }
    },
    initDynamicPropertyContainer: function initDynamicPropertyContainer(t) {
      this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
    }
  };

  var getBlendMode = (Pa = {
    0: "source-over",
    1: "multiply",
    2: "screen",
    3: "overlay",
    4: "darken",
    5: "lighten",
    6: "color-dodge",
    7: "color-burn",
    8: "hard-light",
    9: "soft-light",
    10: "difference",
    11: "exclusion",
    12: "hue",
    13: "saturation",
    14: "color",
    15: "luminosity"
  }, function (t) {
    return Pa[t] || "";
  }),
      Pa,
      Matrix = function () {
    var s = Math.cos,
        a = Math.sin,
        n = Math.tan,
        i = Math.round;

    function t() {
      return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
    }

    function e(t) {
      if (0 === t) return this;
      var e = s(t),
          r = a(t);
      return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function r(t) {
      if (0 === t) return this;
      var e = s(t),
          r = a(t);
      return this._t(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1);
    }

    function o(t) {
      if (0 === t) return this;
      var e = s(t),
          r = a(t);
      return this._t(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1);
    }

    function h(t) {
      if (0 === t) return this;
      var e = s(t),
          r = a(t);
      return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function l(t, e) {
      return this._t(1, e, t, 1, 0, 0);
    }

    function p(t, e) {
      return this.shear(n(t), n(e));
    }

    function m(t, e) {
      var r = s(e),
          i = a(e);
      return this._t(r, i, 0, 0, -i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function f(t, e, r) {
      return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1);
    }

    function c(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
      return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = m, this.props[12] = f, this.props[13] = c, this.props[14] = d, this.props[15] = u, this;
    }

    function d(t, e, r) {
      return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this;
    }

    function u(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
      var y = this.props;
      if (1 === t && 0 === e && 0 === r && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * a + y[15] * c, y[14] = y[14] * p + y[15] * d, y[15] = y[15] * u, this._identityCalculated = !1, this;
      var g = y[0],
          v = y[1],
          b = y[2],
          E = y[3],
          x = y[4],
          P = y[5],
          S = y[6],
          _ = y[7],
          A = y[8],
          C = y[9],
          T = y[10],
          k = y[11],
          M = y[12],
          D = y[13],
          F = y[14],
          w = y[15];
      return y[0] = g * t + v * s + b * h + E * f, y[1] = g * e + v * a + b * l + E * c, y[2] = g * r + v * n + b * p + E * d, y[3] = g * i + v * o + b * m + E * u, y[4] = x * t + P * s + S * h + _ * f, y[5] = x * e + P * a + S * l + _ * c, y[6] = x * r + P * n + S * p + _ * d, y[7] = x * i + P * o + S * m + _ * u, y[8] = A * t + C * s + T * h + k * f, y[9] = A * e + C * a + T * l + k * c, y[10] = A * r + C * n + T * p + k * d, y[11] = A * i + C * o + T * m + k * u, y[12] = M * t + D * s + F * h + w * f, y[13] = M * e + D * a + F * l + w * c, y[14] = M * r + D * n + F * p + w * d, y[15] = M * i + D * o + F * m + w * u, this._identityCalculated = !1, this;
    }

    function y() {
      return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity;
    }

    function g(t) {
      for (var e = 0; e < 16;) {
        if (t.props[e] !== this.props[e]) return !1;
        e += 1;
      }

      return !0;
    }

    function v(t) {
      var e;

      for (e = 0; e < 16; e += 1) {
        t.props[e] = this.props[e];
      }
    }

    function b(t) {
      var e;

      for (e = 0; e < 16; e += 1) {
        this.props[e] = t[e];
      }
    }

    function E(t, e, r) {
      return {
        x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
        y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
        z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
      };
    }

    function x(t, e, r) {
      return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12];
    }

    function P(t, e, r) {
      return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13];
    }

    function S(t, e, r) {
      return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14];
    }

    function _() {
      var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
          e = this.props[5] / t,
          r = -this.props[1] / t,
          i = -this.props[4] / t,
          s = this.props[0] / t,
          a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
          n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
          o = new Matrix();
      return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = s, o.props[12] = a, o.props[13] = n, o;
    }

    function A(t) {
      return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
    }

    function C(t) {
      var e,
          r = t.length,
          i = [];

      for (e = 0; e < r; e += 1) {
        i[e] = A(t[e]);
      }

      return i;
    }

    function T(t, e, r) {
      var i = createTypedArray("float32", 6);
      if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];else {
        var s = this.props[0],
            a = this.props[1],
            n = this.props[4],
            o = this.props[5],
            h = this.props[12],
            l = this.props[13];
        i[0] = t[0] * s + t[1] * n + h, i[1] = t[0] * a + t[1] * o + l, i[2] = e[0] * s + e[1] * n + h, i[3] = e[0] * a + e[1] * o + l, i[4] = r[0] * s + r[1] * n + h, i[5] = r[0] * a + r[1] * o + l;
      }
      return i;
    }

    function k(t, e, r) {
      return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]];
    }

    function M(t, e) {
      if (this.isIdentity()) return t + "," + e;
      var r = this.props;
      return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100;
    }

    function D() {
      for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) {
        r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
      }

      return r;
    }

    function F(t) {
      return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? i(1e4 * t) / 1e4 : t;
    }

    function w() {
      var t = this.props;
      return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")";
    }

    return function () {
      this.reset = t, this.rotate = e, this.rotateX = r, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = m, this.shear = l, this.scale = f, this.setTransform = c, this.translate = d, this.transform = u, this.applyToPoint = E, this.applyToX = x, this.applyToY = P, this.applyToZ = S, this.applyToPointArray = k, this.applyToTriplePoints = T, this.applyToPointStringified = M, this.toCSS = D, this.to2dCSS = w, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = C, this.inversePoint = A, this.getInverseMatrix = _, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
    };
  }();

  !function (o, h) {
    var l,
        p = this,
        m = 256,
        f = 6,
        c = "random",
        d = h.pow(m, f),
        u = h.pow(2, 52),
        y = 2 * u,
        g = m - 1;

    function v(t) {
      var e,
          r = t.length,
          n = this,
          i = 0,
          s = n.i = n.j = 0,
          a = n.S = [];

      for (r || (t = [r++]); i < m;) {
        a[i] = i++;
      }

      for (i = 0; i < m; i++) {
        a[i] = a[s = g & s + t[i % r] + (e = a[i])], a[s] = e;
      }

      n.g = function (t) {
        for (var e, r = 0, i = n.i, s = n.j, a = n.S; t--;) {
          e = a[i = g & i + 1], r = r * m + a[g & (a[i] = a[s = g & s + e]) + (a[s] = e)];
        }

        return n.i = i, n.j = s, r;
      };
    }

    function b(t, e) {
      return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e;
    }

    function E(t, e) {
      for (var r, i = t + "", s = 0; s < i.length;) {
        e[g & s] = g & (r ^= 19 * e[g & s]) + i.charCodeAt(s++);
      }

      return x(e);
    }

    function x(t) {
      return String.fromCharCode.apply(0, t);
    }

    h["seed" + c] = function (t, e, r) {
      var i = [],
          s = E(function t(e, r) {
        var i,
            s = [],
            a = _typeof(e);

        if (r && "object" == a) for (i in e) {
          try {
            s.push(t(e[i], r - 1));
          } catch (t) {}
        }
        return s.length ? s : "string" == a ? e : e + "\0";
      }((e = !0 === e ? {
        entropy: !0
      } : e || {}).entropy ? [t, x(o)] : null === t ? function () {
        try {
          if (l) return x(l.randomBytes(m));
          var t = new Uint8Array(m);
          return (p.crypto || p.msCrypto).getRandomValues(t), x(t);
        } catch (t) {
          var e = p.navigator,
              r = e && e.plugins;
          return [+new Date(), p, r, p.screen, x(o)];
        }
      }() : t, 3), i),
          a = new v(i),
          n = function n() {
        for (var t = a.g(f), e = d, r = 0; t < u;) {
          t = (t + r) * m, e *= m, r = a.g(1);
        }

        for (; y <= t;) {
          t /= 2, e /= 2, r >>>= 1;
        }

        return (t + r) / e;
      };

      return n.int32 = function () {
        return 0 | a.g(4);
      }, n.quick = function () {
        return a.g(4) / 4294967296;
      }, n["double"] = n, E(x(a.S), o), (e.pass || r || function (t, e, r, i) {
        return i && (i.S && b(i, a), t.state = function () {
          return b(a, {});
        }), r ? (h[c] = t, e) : t;
      })(n, s, "global" in e ? e.global : this == h, e.state);
    }, E(h.random(), o);
  }([], BMMath);

  var BezierFactory = function () {
    var t = {
      getBezierEasing: function getBezierEasing(t, e, r, i, s) {
        var a = s || ("bez_" + t + "_" + e + "_" + r + "_" + i).replace(/\./g, "p");
        if (o[a]) return o[a];
        var n = new h([t, e, r, i]);
        return o[a] = n;
      }
    },
        o = {};
    var l = 11,
        p = 1 / (l - 1),
        e = "function" == typeof Float32Array;

    function i(t, e) {
      return 1 - 3 * e + 3 * t;
    }

    function s(t, e) {
      return 3 * e - 6 * t;
    }

    function a(t) {
      return 3 * t;
    }

    function m(t, e, r) {
      return ((i(e, r) * t + s(e, r)) * t + a(e)) * t;
    }

    function f(t, e, r) {
      return 3 * i(e, r) * t * t + 2 * s(e, r) * t + a(e);
    }

    function h(t) {
      this._p = t, this._mSampleValues = e ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this);
    }

    return h.prototype = {
      get: function get(t) {
        var e = this._p[0],
            r = this._p[1],
            i = this._p[2],
            s = this._p[3];
        return this._precomputed || this._precompute(), e === r && i === s ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), r, s);
      },
      _precompute: function _precompute() {
        var t = this._p[0],
            e = this._p[1],
            r = this._p[2],
            i = this._p[3];
        this._precomputed = !0, t === e && r === i || this._calcSampleValues();
      },
      _calcSampleValues: function _calcSampleValues() {
        for (var t = this._p[0], e = this._p[2], r = 0; r < l; ++r) {
          this._mSampleValues[r] = m(r * p, t, e);
        }
      },
      _getTForX: function _getTForX(t) {
        for (var e = this._p[0], r = this._p[2], i = this._mSampleValues, s = 0, a = 1, n = l - 1; a !== n && i[a] <= t; ++a) {
          s += p;
        }

        var o = s + (t - i[--a]) / (i[a + 1] - i[a]) * p,
            h = f(o, e, r);
        return .001 <= h ? function (t, e, r, i) {
          for (var s = 0; s < 4; ++s) {
            var a = f(e, r, i);
            if (0 === a) return e;
            e -= (m(e, r, i) - t) / a;
          }

          return e;
        }(t, o, e, r) : 0 === h ? o : function (t, e, r, i, s) {
          for (var a, n, o = 0; 0 < (a = m(n = e + (r - e) / 2, i, s) - t) ? r = n : e = n, 1e-7 < Math.abs(a) && ++o < 10;) {
            ;
          }

          return n;
        }(t, s, s + p, e, r);
      }
    }, t;
  }();

  function extendPrototype(t, e) {
    var r,
        i,
        s = t.length;

    for (r = 0; r < s; r += 1) {
      for (var a in i = t[r].prototype) {
        i.hasOwnProperty(a) && (e.prototype[a] = i[a]);
      }
    }
  }

  function getDescriptor(t, e) {
    return Object.getOwnPropertyDescriptor(t, e);
  }

  function createProxyFunction(t) {
    function e() {}

    return e.prototype = t, e;
  }

  function bezFunction() {
    Math;

    function y(t, e, r, i, s, a) {
      var n = t * i + e * s + r * a - s * i - a * t - r * e;
      return -.001 < n && n < .001;
    }

    var p = function p(t, e, r, i) {
      var s,
          a,
          n,
          o,
          h,
          l,
          p = defaultCurveSegments,
          m = 0,
          f = [],
          c = [],
          d = bezier_length_pool.newElement();

      for (n = r.length, s = 0; s < p; s += 1) {
        for (h = s / (p - 1), a = l = 0; a < n; a += 1) {
          o = bm_pow(1 - h, 3) * t[a] + 3 * bm_pow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bm_pow(h, 2) * i[a] + bm_pow(h, 3) * e[a], f[a] = o, null !== c[a] && (l += bm_pow(f[a] - c[a], 2)), c[a] = f[a];
        }

        l && (m += l = bm_sqrt(l)), d.percents[s] = h, d.lengths[s] = m;
      }

      return d.addedLength = m, d;
    };

    function g(t) {
      this.segmentLength = 0, this.points = new Array(t);
    }

    function v(t, e) {
      this.partialLength = t, this.point = e;
    }

    var b,
        t = (b = {}, function (t, e, r, i) {
      var s = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + i[0] + "_" + i[1]).replace(/\./g, "p");

      if (!b[s]) {
        var a,
            n,
            o,
            h,
            l,
            p,
            m,
            f = defaultCurveSegments,
            c = 0,
            d = null;
        2 === t.length && (t[0] != e[0] || t[1] != e[1]) && y(t[0], t[1], e[0], e[1], t[0] + r[0], t[1] + r[1]) && y(t[0], t[1], e[0], e[1], e[0] + i[0], e[1] + i[1]) && (f = 2);
        var u = new g(f);

        for (o = r.length, a = 0; a < f; a += 1) {
          for (m = createSizedArray(o), l = a / (f - 1), n = p = 0; n < o; n += 1) {
            h = bm_pow(1 - l, 3) * t[n] + 3 * bm_pow(1 - l, 2) * l * (t[n] + r[n]) + 3 * (1 - l) * bm_pow(l, 2) * (e[n] + i[n]) + bm_pow(l, 3) * e[n], m[n] = h, null !== d && (p += bm_pow(m[n] - d[n], 2));
          }

          c += p = bm_sqrt(p), u.points[a] = new v(p, m), d = m;
        }

        u.segmentLength = c, b[s] = u;
      }

      return b[s];
    });

    function M(t, e) {
      var r = e.percents,
          i = e.lengths,
          s = r.length,
          a = bm_floor((s - 1) * t),
          n = t * e.addedLength,
          o = 0;
      if (a === s - 1 || 0 === a || n === i[a]) return r[a];

      for (var h = i[a] > n ? -1 : 1, l = !0; l;) {
        if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]), l = !1) : a += h, a < 0 || s - 1 <= a) {
          if (a === s - 1) return r[a];
          l = !1;
        }
      }

      return r[a] + (r[a + 1] - r[a]) * o;
    }

    var D = createTypedArray("float32", 8);
    return {
      getSegmentsLength: function getSegmentsLength(t) {
        var e,
            r = segments_length_pool.newElement(),
            i = t.c,
            s = t.v,
            a = t.o,
            n = t.i,
            o = t._length,
            h = r.lengths,
            l = 0;

        for (e = 0; e < o - 1; e += 1) {
          h[e] = p(s[e], s[e + 1], a[e], n[e + 1]), l += h[e].addedLength;
        }

        return i && o && (h[e] = p(s[e], s[0], a[e], n[0]), l += h[e].addedLength), r.totalLength = l, r;
      },
      getNewSegment: function getNewSegment(t, e, r, i, s, a, n) {
        var o,
            h = M(s = s < 0 ? 0 : 1 < s ? 1 : s, n),
            l = M(a = 1 < a ? 1 : a, n),
            p = t.length,
            m = 1 - h,
            f = 1 - l,
            c = m * m * m,
            d = h * m * m * 3,
            u = h * h * m * 3,
            y = h * h * h,
            g = m * m * f,
            v = h * m * f + m * h * f + m * m * l,
            b = h * h * f + m * h * l + h * m * l,
            E = h * h * l,
            x = m * f * f,
            P = h * f * f + m * l * f + m * f * l,
            S = h * l * f + m * l * l + h * f * l,
            _ = h * l * l,
            A = f * f * f,
            C = l * f * f + f * l * f + f * f * l,
            T = l * l * f + f * l * l + l * f * l,
            k = l * l * l;

        for (o = 0; o < p; o += 1) {
          D[4 * o] = Math.round(1e3 * (c * t[o] + d * r[o] + u * i[o] + y * e[o])) / 1e3, D[4 * o + 1] = Math.round(1e3 * (g * t[o] + v * r[o] + b * i[o] + E * e[o])) / 1e3, D[4 * o + 2] = Math.round(1e3 * (x * t[o] + P * r[o] + S * i[o] + _ * e[o])) / 1e3, D[4 * o + 3] = Math.round(1e3 * (A * t[o] + C * r[o] + T * i[o] + k * e[o])) / 1e3;
        }

        return D;
      },
      getPointInSegment: function getPointInSegment(t, e, r, i, s, a) {
        var n = M(s, a),
            o = 1 - n;
        return [Math.round(1e3 * (o * o * o * t[0] + (n * o * o + o * n * o + o * o * n) * r[0] + (n * n * o + o * n * n + n * o * n) * i[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (o * o * o * t[1] + (n * o * o + o * n * o + o * o * n) * r[1] + (n * n * o + o * n * n + n * o * n) * i[1] + n * n * n * e[1])) / 1e3];
      },
      buildBezierData: t,
      pointOnLine2D: y,
      pointOnLine3D: function pointOnLine3D(t, e, r, i, s, a, n, o, h) {
        if (0 === r && 0 === a && 0 === h) return y(t, e, i, s, n, o);
        var l,
            p = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - e, 2) + Math.pow(a - r, 2)),
            m = Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(h - r, 2)),
            f = Math.sqrt(Math.pow(n - i, 2) + Math.pow(o - s, 2) + Math.pow(h - a, 2));
        return -1e-4 < (l = m < p ? f < p ? p - m - f : f - m - p : m < f ? f - m - p : m - p - f) && l < 1e-4;
      }
    };
  }

  !function () {
    for (var a = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
      window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
    }

    window.requestAnimationFrame || (window.requestAnimationFrame = function (t, e) {
      var r = new Date().getTime(),
          i = Math.max(0, 16 - (r - a)),
          s = setTimeout(function () {
        t(r + i);
      }, i);
      return a = r + i, s;
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }();
  var bez = bezFunction();

  function dataFunctionManager() {
    function m(t, e, r) {
      var i,
          s,
          a,
          n,
          o,
          h,
          l = t.length;

      for (s = 0; s < l; s += 1) {
        if ("ks" in (i = t[s]) && !i.completed) {
          if (i.completed = !0, i.tt && (t[s - 1].td = i.tt), [], -1, i.hasMask) {
            var p = i.masksProperties;

            for (n = p.length, a = 0; a < n; a += 1) {
              if (p[a].pt.k.i) d(p[a].pt.k);else for (h = p[a].pt.k.length, o = 0; o < h; o += 1) {
                p[a].pt.k[o].s && d(p[a].pt.k[o].s[0]), p[a].pt.k[o].e && d(p[a].pt.k[o].e[0]);
              }
            }
          }

          0 === i.ty ? (i.layers = f(i.refId, e), m(i.layers, e, r)) : 4 === i.ty ? c(i.shapes) : 5 == i.ty && u(i, r);
        }
      }
    }

    function f(t, e) {
      for (var r = 0, i = e.length; r < i;) {
        if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
        r += 1;
      }
    }

    function c(t) {
      var e, r, i;

      for (e = t.length - 1; 0 <= e; e -= 1) {
        if ("sh" == t[e].ty) {
          if (t[e].ks.k.i) d(t[e].ks.k);else for (i = t[e].ks.k.length, r = 0; r < i; r += 1) {
            t[e].ks.k[r].s && d(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && d(t[e].ks.k[r].e[0]);
          }
          !0;
        } else "gr" == t[e].ty && c(t[e].it);
      }
    }

    function d(t) {
      var e,
          r = t.i.length;

      for (e = 0; e < r; e += 1) {
        t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1];
      }
    }

    function o(t, e) {
      var r = e ? e.split(".") : [100, 100, 100];
      return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0));
    }

    var h,
        r = function () {
      var i = [4, 4, 14];

      function s(t) {
        var e,
            r,
            i,
            s = t.length;

        for (e = 0; e < s; e += 1) {
          5 === t[e].ty && (r = t[e], void 0, i = r.t.d, r.t.d = {
            k: [{
              s: i,
              t: 0
            }]
          });
        }
      }

      return function (t) {
        if (o(i, t.v) && (s(t.layers), t.assets)) {
          var e,
              r = t.assets.length;

          for (e = 0; e < r; e += 1) {
            t.assets[e].layers && s(t.assets[e].layers);
          }
        }
      };
    }(),
        i = (h = [4, 7, 99], function (t) {
      if (t.chars && !o(h, t.v)) {
        var e,
            r,
            i,
            s,
            a,
            n = t.chars.length;

        for (e = 0; e < n; e += 1) {
          if (t.chars[e].data && t.chars[e].data.shapes) for (i = (a = t.chars[e].data.shapes[0].it).length, r = 0; r < i; r += 1) {
            (s = a[r].ks.k).__converted || (d(a[r].ks.k), s.__converted = !0);
          }
        }
      }
    }),
        s = function () {
      var i = [4, 1, 9];

      function a(t) {
        var e,
            r,
            i,
            s = t.length;

        for (e = 0; e < s; e += 1) {
          if ("gr" === t[e].ty) a(t[e].it);else if ("fl" === t[e].ty || "st" === t[e].ty) if (t[e].c.k && t[e].c.k[0].i) for (i = t[e].c.k.length, r = 0; r < i; r += 1) {
            t[e].c.k[r].s && (t[e].c.k[r].s[0] /= 255, t[e].c.k[r].s[1] /= 255, t[e].c.k[r].s[2] /= 255, t[e].c.k[r].s[3] /= 255), t[e].c.k[r].e && (t[e].c.k[r].e[0] /= 255, t[e].c.k[r].e[1] /= 255, t[e].c.k[r].e[2] /= 255, t[e].c.k[r].e[3] /= 255);
          } else t[e].c.k[0] /= 255, t[e].c.k[1] /= 255, t[e].c.k[2] /= 255, t[e].c.k[3] /= 255;
        }
      }

      function s(t) {
        var e,
            r = t.length;

        for (e = 0; e < r; e += 1) {
          4 === t[e].ty && a(t[e].shapes);
        }
      }

      return function (t) {
        if (o(i, t.v) && (s(t.layers), t.assets)) {
          var e,
              r = t.assets.length;

          for (e = 0; e < r; e += 1) {
            t.assets[e].layers && s(t.assets[e].layers);
          }
        }
      };
    }(),
        a = function () {
      var i = [4, 4, 18];

      function l(t) {
        var e, r, i;

        for (e = t.length - 1; 0 <= e; e -= 1) {
          if ("sh" == t[e].ty) {
            if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed;else for (i = t[e].ks.k.length, r = 0; r < i; r += 1) {
              t[e].ks.k[r].s && (t[e].ks.k[r].s[0].c = t[e].closed), t[e].ks.k[r].e && (t[e].ks.k[r].e[0].c = t[e].closed);
            }
            !0;
          } else "gr" == t[e].ty && l(t[e].it);
        }
      }

      function s(t) {
        var e,
            r,
            i,
            s,
            a,
            n,
            o = t.length;

        for (r = 0; r < o; r += 1) {
          if ((e = t[r]).hasMask) {
            var h = e.masksProperties;

            for (s = h.length, i = 0; i < s; i += 1) {
              if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;else for (n = h[i].pt.k.length, a = 0; a < n; a += 1) {
                h[i].pt.k[a].s && (h[i].pt.k[a].s[0].c = h[i].cl), h[i].pt.k[a].e && (h[i].pt.k[a].e[0].c = h[i].cl);
              }
            }
          }

          4 === e.ty && l(e.shapes);
        }
      }

      return function (t) {
        if (o(i, t.v) && (s(t.layers), t.assets)) {
          var e,
              r = t.assets.length;

          for (e = 0; e < r; e += 1) {
            t.assets[e].layers && s(t.assets[e].layers);
          }
        }
      };
    }();

    function u(t, e) {
      0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0);
    }

    var t = {
      completeData: function completeData(t, e) {
        t.__complete || (s(t), r(t), i(t), a(t), m(t.layers, t.assets, e), t.__complete = !0);
      }
    };
    return t.checkColors = s, t.checkChars = i, t.checkShapes = a, t.completeLayers = m, t;
  }

  var dataManager = dataFunctionManager(),
      FontManager = function () {
    var a = {
      w: 0,
      size: 0,
      shapes: []
    },
        t = [];

    function u(t, e) {
      var r = createTag("span");
      r.style.fontFamily = e;
      var i = createTag("span");
      i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
      var s = i.offsetWidth;
      return i.style.fontFamily = function (t) {
        var e,
            r = t.split(","),
            i = r.length,
            s = [];

        for (e = 0; e < i; e += 1) {
          "sans-serif" !== r[e] && "monospace" !== r[e] && s.push(r[e]);
        }

        return s.join(",");
      }(t) + ", " + e, {
        node: i,
        w: s,
        parent: r
      };
    }

    t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);

    var e = function e() {
      this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
    };

    return e.getCombinedCharacterCodes = function () {
      return t;
    }, e.prototype = {
      addChars: function addChars(t) {
        if (t) {
          this.chars || (this.chars = []);
          var e,
              r,
              i,
              s = t.length,
              a = this.chars.length;

          for (e = 0; e < s; e += 1) {
            for (r = 0, i = !1; r < a;) {
              this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
            }

            i || (this.chars.push(t[e]), a += 1);
          }
        }
      },
      addFonts: function addFonts(t, e) {
        if (t) {
          if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list);
          var r,
              i,
              s,
              a,
              n = t.list,
              o = n.length,
              h = o;

          for (r = 0; r < o; r += 1) {
            var l,
                p,
                m = !0;

            if (n[r].loaded = !1, n[r].monoCase = u(n[r].fFamily, "monospace"), n[r].sansCase = u(n[r].fFamily, "sans-serif"), n[r].fPath) {
              if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length && (m = !1), m) {
                  var f = createTag("style");
                  f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.setAttribute("f-family", n[r].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(f);
                }
              } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), p = 0; p < l.length; p++) {
                  -1 !== l[p].href.indexOf(n[r].fPath) && (m = !1);
                }

                if (m) {
                  var c = createTag("link");
                  c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.type = "text/css", c.rel = "stylesheet", c.href = n[r].fPath, document.body.appendChild(c);
                }
              } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), p = 0; p < l.length; p++) {
                  n[r].fPath === l[p].src && (m = !1);
                }

                if (m) {
                  var d = createTag("link");
                  d.setAttribute("f-forigin", n[r].fOrigin), d.setAttribute("f-origin", n[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", n[r].fPath), e.appendChild(d);
                }
              }
            } else n[r].loaded = !0, h -= 1;

            n[r].helper = (i = e, s = n[r], a = void 0, (a = createNS("text")).style.fontSize = "100px", a.setAttribute("font-family", s.fFamily), a.setAttribute("font-style", s.fStyle), a.setAttribute("font-weight", s.fWeight), a.textContent = "1", s.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", s.fClass)) : a.style.fontFamily = s.fFamily, i.appendChild(a), createTag("canvas").getContext("2d").font = s.fWeight + " " + s.fStyle + " 100px " + s.fFamily, a), n[r].cache = {}, this.fonts.push(n[r]);
          }

          0 === h ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
        } else this.isLoaded = !0;
      },
      getCharData: function getCharData(t, e, r) {
        for (var i = 0, s = this.chars.length; i < s;) {
          if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === r) return this.chars[i];
          i += 1;
        }

        return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, e, r), a;
      },
      getFontByName: function getFontByName(t) {
        for (var e = 0, r = this.fonts.length; e < r;) {
          if (this.fonts[e].fName === t) return this.fonts[e];
          e += 1;
        }

        return this.fonts[0];
      },
      measureText: function measureText(t, e, r) {
        var i = this.getFontByName(e),
            s = t.charCodeAt(0);

        if (!i.cache[s + 1]) {
          var a = i.helper;

          if (" " === t) {
            a.textContent = "|" + t + "|";
            var n = a.getComputedTextLength();
            a.textContent = "||";
            var o = a.getComputedTextLength();
            i.cache[s + 1] = (n - o) / 100;
          } else a.textContent = t, i.cache[s + 1] = a.getComputedTextLength() / 100;
        }

        return i.cache[s + 1] * r;
      },
      checkLoadedFonts: function checkLoadedFonts() {
        var t,
            e,
            r,
            i = this.fonts.length,
            s = i;

        for (t = 0; t < i; t += 1) {
          this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
        }

        0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      },
      setIsLoaded: function setIsLoaded() {
        this.isLoaded = !0;
      }
    }, e;
  }(),
      PropertyFactory = function () {
    var m = initialDefaultFrame,
        s = Math.abs;

    function f(t, e) {
      var r,
          i = this.offsetTime;
      "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));

      for (var s, a, n, o, h, l, p, m, f = e.lastIndex, c = f, d = this.keyframes.length - 1, u = !0; u;) {
        if (s = this.keyframes[c], a = this.keyframes[c + 1], c === d - 1 && t >= a.t - i) {
          s.h && (s = a), f = 0;
          break;
        }

        if (a.t - i > t) {
          f = c;
          break;
        }

        c < d - 1 ? c += 1 : (f = 0, u = !1);
      }

      var y,
          g,
          v,
          b,
          E,
          x,
          P,
          S,
          _,
          A,
          C = a.t - i,
          T = s.t - i;

      if (s.to) {
        s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
        var k = s.bezierData;

        if (C <= t || t < T) {
          var M = C <= t ? k.points.length - 1 : 0;

          for (o = k.points[M].point.length, n = 0; n < o; n += 1) {
            r[n] = k.points[M].point[n];
          }
        } else {
          s.__fnct ? m = s.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = m), h = m((t - T) / (C - T));
          var D,
              F = k.segmentLength * h,
              w = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastAddedLength : 0;

          for (p = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastPoint : 0, u = !0, l = k.points.length; u;) {
            if (w += k.points[p].partialLength, 0 === F || 0 === h || p === k.points.length - 1) {
              for (o = k.points[p].point.length, n = 0; n < o; n += 1) {
                r[n] = k.points[p].point[n];
              }

              break;
            }

            if (w <= F && F < w + k.points[p + 1].partialLength) {
              for (D = (F - w) / k.points[p + 1].partialLength, o = k.points[p].point.length, n = 0; n < o; n += 1) {
                r[n] = k.points[p].point[n] + (k.points[p + 1].point[n] - k.points[p].point[n]) * D;
              }

              break;
            }

            p < l - 1 ? p += 1 : u = !1;
          }

          e._lastPoint = p, e._lastAddedLength = w - k.points[p].partialLength, e._lastKeyframeIndex = c;
        }
      } else {
        var I, V, B, R, L;
        if (d = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h) {
          if (C <= t) r[0] = y[0], r[1] = y[1], r[2] = y[2];else if (t <= T) r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2];else {
            var G = N(s.s),
                z = N(y);
            g = r, v = function (t, e, r) {
              var i,
                  s,
                  a,
                  n,
                  o,
                  h = [],
                  l = t[0],
                  p = t[1],
                  m = t[2],
                  f = t[3],
                  c = e[0],
                  d = e[1],
                  u = e[2],
                  y = e[3];
              (s = l * c + p * d + m * u + f * y) < 0 && (s = -s, c = -c, d = -d, u = -u, y = -y);
              o = 1e-6 < 1 - s ? (i = Math.acos(s), a = Math.sin(i), n = Math.sin((1 - r) * i) / a, Math.sin(r * i) / a) : (n = 1 - r, r);
              return h[0] = n * l + o * c, h[1] = n * p + o * d, h[2] = n * m + o * u, h[3] = n * f + o * y, h;
            }(G, z, (t - T) / (C - T)), b = v[0], E = v[1], x = v[2], P = v[3], S = Math.atan2(2 * E * P - 2 * b * x, 1 - 2 * E * E - 2 * x * x), _ = Math.asin(2 * b * E + 2 * x * P), A = Math.atan2(2 * b * P - 2 * E * x, 1 - 2 * b * b - 2 * x * x), g[0] = S / degToRads, g[1] = _ / degToRads, g[2] = A / degToRads;
          }
        } else for (c = 0; c < d; c += 1) {
          1 !== s.h && (h = C <= t ? 1 : t < T ? 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[c] ? m = s.__fnct[c] : (I = void 0 === s.o.x[c] ? s.o.x[0] : s.o.x[c], V = void 0 === s.o.y[c] ? s.o.y[0] : s.o.y[c], B = void 0 === s.i.x[c] ? s.i.x[0] : s.i.x[c], R = void 0 === s.i.y[c] ? s.i.y[0] : s.i.y[c], m = BezierFactory.getBezierEasing(I, V, B, R).get, s.__fnct[c] = m)) : s.__fnct ? m = s.__fnct : (I = s.o.x, V = s.o.y, B = s.i.x, R = s.i.y, m = BezierFactory.getBezierEasing(I, V, B, R).get, s.__fnct = m), m((t - T) / (C - T)))), y = a.s || s.e, L = 1 === s.h ? s.s[c] : s.s[c] + (y[c] - s.s[c]) * h, "multidimensional" === this.propType ? r[c] = L : r = L;
        }
      }

      return e.lastIndex = f, r;
    }

    function N(t) {
      var e = t[0] * degToRads,
          r = t[1] * degToRads,
          i = t[2] * degToRads,
          s = Math.cos(e / 2),
          a = Math.cos(r / 2),
          n = Math.cos(i / 2),
          o = Math.sin(e / 2),
          h = Math.sin(r / 2),
          l = Math.sin(i / 2);
      return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l];
    }

    function c() {
      var t = this.comp.renderedFrame - this.offsetTime,
          e = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;

      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== m && (this._caching.lastFrame >= r && r <= t || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var i = this.interpolateValue(t, this._caching);
        this.pv = i;
      }

      return this._caching.lastFrame = t, this.pv;
    }

    function d(t) {
      var e;
      if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < s(this.v - e) && (this.v = e, this._mdf = !0);else for (var r = 0, i = this.v.length; r < i;) {
        e = t[r] * this.mult, 1e-5 < s(this.v[r] - e) && (this.v[r] = e, this._mdf = !0), r += 1;
      }
    }

    function u() {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv);else {
        this.lock = !0, this._mdf = this._isFirstFrame;
        var t,
            e = this.effectsSequence.length,
            r = this.kf ? this.pv : this.data.k;

        for (t = 0; t < e; t += 1) {
          r = this.effectsSequence[t](r);
        }

        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }

    function y(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }

    function n(t, e, r, i) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.addEffect = y;
    }

    function o(t, e, r, i) {
      this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var s,
          a = e.k.length;
      this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a);
      createTypedArray("float32", a);

      for (this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) {
        this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
      }

      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = u, this.setVValue = d, this.addEffect = y;
    }

    function h(t, e, r, i) {
      this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
        lastFrame: m,
        lastIndex: 0,
        value: 0,
        _lastKeyframeIndex: -1
      }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = m, this.pv = m, this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.effectsSequence = [c.bind(this)], this.addEffect = y;
    }

    function l(t, e, r, i) {
      this.propType = "multidimensional";
      var s,
          a,
          n,
          o,
          h,
          l = e.k.length;

      for (s = 0; s < l - 1; s += 1) {
        e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, n = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
      }

      this.effectsSequence = [c.bind(this)], this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.frameId = -1;
      var p = e.k[0].s.length;

      for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1) {
        this.v[s] = m, this.pv[s] = m;
      }

      this._caching = {
        lastFrame: m,
        lastIndex: 0,
        value: createTypedArray("float32", p)
      }, this.addEffect = y;
    }

    return {
      getProp: function getProp(t, e, r, i, s) {
        var a;
        if (e.k.length) {
          if ("number" == typeof e.k[0]) a = new o(t, e, i, s);else switch (r) {
            case 0:
              a = new h(t, e, i, s);
              break;

            case 1:
              a = new l(t, e, i, s);
          }
        } else a = new n(t, e, i, s);
        return a.effectsSequence.length && s.addDynamicProperty(a), a;
      }
    };
  }(),
      TransformPropertyFactory = function () {
    var n = [0, 0];

    function i(t, e, r) {
      if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
        k: [0, 0, 0]
      }, 1, 0, this), e.rx) {
        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
          var i,
              s = e.or.k.length;

          for (i = 0; i < s; i += 1) {
            e.or.k[i].to = e.or.k[i].ti = null;
          }
        }

        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0;
      } else this.r = PropertyFactory.getProp(t, e.r || {
        k: 0
      }, 0, degToRads, this);

      e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
        k: [0, 0, 0]
      }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
        k: [100, 100, 100]
      }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
        _mdf: !1,
        v: 1
      }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
    }

    return i.prototype = {
      applyToMatrix: function applyToMatrix(t) {
        var e = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      },
      getValue: function getValue(t) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var e,
                  r,
                  i = this.elem.globalData.frameRate;
              if (this.p && this.p.keyframes && this.p.getValueAtTime) r = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                e = [], r = [];
                var s = this.px,
                    a = this.py;
                s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (e[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (e[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (e = [s.pv, a.pv], r[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime));
              } else e = r = n;
              this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0]));
            }

            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }

          this.frameId = this.elem.globalData.frameId;
        }
      },
      precalculateMatrix: function precalculateMatrix() {
        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
          if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          }

          if (this.r) {
            if (this.r.effectsSequence.length) return;
            this.pre.rotate(-this.r.v), this.appliedTransformations = 4;
          } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
        }
      },
      autoOrient: function autoOrient() {}
    }, extendPrototype([DynamicPropertyContainer], i), i.prototype.addDynamicProperty = function (t) {
      this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0;
    }, i.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
      getTransformProperty: function getTransformProperty(t, e, r) {
        return new i(t, e, r);
      }
    };
  }();

  function ShapePath() {
    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
  }

  ShapePath.prototype.setPathData = function (t, e) {
    this.c = t, this.setLength(e);

    for (var r = 0; r < e;) {
      this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), this.i[r] = point_pool.newElement(), r += 1;
    }
  }, ShapePath.prototype.setLength = function (t) {
    for (; this._maxLength < t;) {
      this.doubleArrayLength();
    }

    this._length = t;
  }, ShapePath.prototype.doubleArrayLength = function () {
    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
  }, ShapePath.prototype.setXYAt = function (t, e, r, i, s) {
    var a;

    switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
      case "v":
        a = this.v;
        break;

      case "i":
        a = this.i;
        break;

      case "o":
        a = this.o;
    }

    (!a[i] || a[i] && !s) && (a[i] = point_pool.newElement()), a[i][0] = t, a[i][1] = e;
  }, ShapePath.prototype.setTripleAt = function (t, e, r, i, s, a, n, o) {
    this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(s, a, "i", n, o);
  }, ShapePath.prototype.reverse = function () {
    var t = new ShapePath();
    t.setPathData(this.c, this._length);
    var e = this.v,
        r = this.o,
        i = this.i,
        s = 0;
    this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
    var a,
        n = this._length - 1,
        o = this._length;

    for (a = s; a < o; a += 1) {
      t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, !1), n -= 1;
    }

    return t;
  };

  var ShapePropertyFactory = function () {
    var s = -999999;

    function t(t, e, r) {
      var i,
          s,
          a,
          n,
          o,
          h,
          l,
          p,
          m,
          f = r.lastIndex,
          c = this.keyframes;
      if (t < c[0].t - this.offsetTime) i = c[0].s[0], a = !0, f = 0;else if (t >= c[c.length - 1].t - this.offsetTime) i = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a = !0;else {
        for (var d, u, y = f, g = c.length - 1, v = !0; v && (d = c[y], !((u = c[y + 1]).t - this.offsetTime > t));) {
          y < g - 1 ? y += 1 : v = !1;
        }

        if (f = y, !(a = 1 === d.h)) {
          if (t >= u.t - this.offsetTime) p = 1;else if (t < d.t - this.offsetTime) p = 0;else {
            var b;
            d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), p = b((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)));
          }
          s = u.s ? u.s[0] : d.e[0];
        }

        i = d.s[0];
      }

      for (h = e._length, l = i.i[0].length, r.lastIndex = f, n = 0; n < h; n += 1) {
        for (o = 0; o < l; o += 1) {
          m = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p, e.i[n][o] = m, m = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p, e.o[n][o] = m, m = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p, e.v[n][o] = m;
        }
      }
    }

    function a() {
      this.paths = this.localShapeCollection;
    }

    function e(t) {
      (function (t, e) {
        if (t._length !== e._length || t.c !== e.c) return !1;
        var r,
            i = t._length;

        for (r = 0; r < i; r += 1) {
          if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
        }

        return !0;
      })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
    }

    function r() {
      if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) {
        if (this.lock) this.setVValue(this.pv);else {
          this.lock = !0, this._mdf = !1;
          var t,
              e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
              r = this.effectsSequence.length;

          for (t = 0; t < r; t += 1) {
            e = this.effectsSequence[t](e);
          }

          this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      } else this._mdf = !1;
    }

    function n(t, e, r) {
      this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
      var i = 3 === r ? e.pt.k : e.ks.k;
      this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = [];
    }

    function i(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }

    function o(t, e, r) {
      this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === r ? e.pt.k : e.ks.k, this.k = !0, this.kf = !0;
      var i = this.keyframes[0].s[0].i.length;
      this.keyframes[0].s[0].i[0].length;
      this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = s, this.reset = a, this._caching = {
        lastFrame: s,
        lastIndex: 0
      }, this.effectsSequence = [function () {
        var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
            i = this._caching.lastFrame;
        return i !== s && (i < e && t < e || r < i && r < t) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv;
      }.bind(this)];
    }

    n.prototype.interpolateShape = t, n.prototype.getValue = r, n.prototype.setVValue = e, n.prototype.addEffect = i, o.prototype.getValue = r, o.prototype.interpolateShape = t, o.prototype.setVValue = e, o.prototype.addEffect = i;

    var h = function () {
      var n = roundCorner;

      function t(t, e) {
        this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
      }

      return t.prototype = {
        reset: a,
        getValue: function getValue() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        },
        convertEllToPath: function convertEllToPath() {
          var t = this.p.v[0],
              e = this.p.v[1],
              r = this.s.v[0] / 2,
              i = this.s.v[1] / 2,
              s = 3 !== this.d,
              a = this.v;
          a.v[0][0] = t, a.v[0][1] = e - i, a.v[1][0] = s ? t + r : t - r, a.v[1][1] = e, a.v[2][0] = t, a.v[2][1] = e + i, a.v[3][0] = s ? t - r : t + r, a.v[3][1] = e, a.i[0][0] = s ? t - r * n : t + r * n, a.i[0][1] = e - i, a.i[1][0] = s ? t + r : t - r, a.i[1][1] = e - i * n, a.i[2][0] = s ? t + r * n : t - r * n, a.i[2][1] = e + i, a.i[3][0] = s ? t - r : t + r, a.i[3][1] = e + i * n, a.o[0][0] = s ? t + r * n : t - r * n, a.o[0][1] = e - i, a.o[1][0] = s ? t + r : t - r, a.o[1][1] = e + i * n, a.o[2][0] = s ? t - r * n : t + r * n, a.o[2][1] = e + i, a.o[3][0] = s ? t - r : t + r, a.o[3][1] = e - i * n;
        }
      }, extendPrototype([DynamicPropertyContainer], t), t;
    }(),
        l = function () {
      function t(t, e) {
        this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
      }

      return t.prototype = {
        reset: a,
        getValue: function getValue() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        },
        convertStarToPath: function convertStarToPath() {
          var t,
              e,
              r,
              i,
              s = 2 * Math.floor(this.pt.v),
              a = 2 * Math.PI / s,
              n = !0,
              o = this.or.v,
              h = this.ir.v,
              l = this.os.v,
              p = this.is.v,
              m = 2 * Math.PI * o / (2 * s),
              f = 2 * Math.PI * h / (2 * s),
              c = -Math.PI / 2;
          c += this.r.v;
          var d = 3 === this.data.d ? -1 : 1;

          for (t = this.v._length = 0; t < s; t += 1) {
            r = n ? l : p, i = n ? m : f;
            var u = (e = n ? o : h) * Math.cos(c),
                y = e * Math.sin(c),
                g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
                v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
            u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i * r * d, y - v * i * r * d, u + g * i * r * d, y + v * i * r * d, t, !0), n = !n, c += a * d;
          }
        },
        convertPolygonToPath: function convertPolygonToPath() {
          var t,
              e = Math.floor(this.pt.v),
              r = 2 * Math.PI / e,
              i = this.or.v,
              s = this.os.v,
              a = 2 * Math.PI * i / (4 * e),
              n = -Math.PI / 2,
              o = 3 === this.data.d ? -1 : 1;

          for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) {
            var h = i * Math.cos(n),
                l = i * Math.sin(n),
                p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
            h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0), n += r * o;
          }

          this.paths.length = 0, this.paths[0] = this.v;
        }
      }, extendPrototype([DynamicPropertyContainer], t), t;
    }(),
        p = function () {
      function t(t, e) {
        this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
      }

      return t.prototype = {
        convertRectToPath: function convertRectToPath() {
          var t = this.p.v[0],
              e = this.p.v[1],
              r = this.s.v[0] / 2,
              i = this.s.v[1] / 2,
              s = bm_min(r, i, this.r.v),
              a = s * (1 - roundCorner);
          this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + s, t + r, e - i + a, 0, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - a, t + r, e + i - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e + i, t + r - s, e + i, t + r - a, e + i, 2, !0), this.v.setTripleAt(t - r + s, e + i, t - r + a, e + i, t - r + s, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + a, t - r, e - i + s, 5, !0), this.v.setTripleAt(t - r + s, e - i, t - r + s, e - i, t - r + a, e - i, 6, !0), this.v.setTripleAt(t + r - s, e - i, t + r - a, e - i, t + r - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + a, t + r, e - i + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e - i, t + r - s, e - i, t + r - a, e - i, 1, !0), this.v.setTripleAt(t - r + s, e - i, t - r + a, e - i, t - r + s, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + s, t - r, e - i + a, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r + s, e + i, t - r + s, e + i, t - r + a, e + i, 5, !0), this.v.setTripleAt(t + r - s, e + i, t + r - a, e + i, t + r - s, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - s, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)));
        },
        getValue: function getValue(t) {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        },
        reset: a
      }, extendPrototype([DynamicPropertyContainer], t), t;
    }();

    var m = {
      getShapeProp: function getShapeProp(t, e, r) {
        var i;
        return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new o(t, e, r) : new n(t, e, r) : 5 === r ? i = new p(t, e) : 6 === r ? i = new h(t, e) : 7 === r && (i = new l(t, e)), i.k && t.addDynamicProperty(i), i;
      },
      getConstructorFunction: function getConstructorFunction() {
        return n;
      },
      getKeyframedConstructorFunction: function getKeyframedConstructorFunction() {
        return o;
      }
    };
    return m;
  }(),
      ShapeModifiers = (fs = {}, gs = {}, fs.registerModifier = function (t, e) {
    gs[t] || (gs[t] = e);
  }, fs.getModifier = function (t, e, r) {
    return new gs[t](e, r);
  }, fs),
      fs,
      gs;

  function ShapeModifier() {}

  function TrimModifier() {}

  function RoundCornersModifier() {}

  function PuckerAndBloatModifier() {}

  function RepeaterModifier() {}

  function ShapeCollection() {
    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
  }

  function DashProperty(t, e, r, i) {
    this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
    var s,
        a,
        n = e.length || 0;

    for (s = 0; s < n; s += 1) {
      a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
        n: e[s].n,
        p: a
      };
    }

    this.k || this.getValue(!0), this._isAnimated = this.k;
  }

  function GradientProperty(t, e, r) {
    this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
    var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
    this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
  }

  ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (t) {
    if (!this.closed) {
      t.sh.container.addDynamicProperty(t.sh);
      var e = {
        shape: t.sh,
        data: t,
        localShapeCollection: shapeCollection_pool.newShapeCollection()
      };
      this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
    }
  }, ShapeModifier.prototype.init = function (t, e) {
    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
  }, ShapeModifier.prototype.processKeys = function () {
    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
  }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) {
    this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
  }, TrimModifier.prototype.addShapeToModifier = function (t) {
    t.pathsData = [];
  }, TrimModifier.prototype.calculateShapeEdges = function (t, e, r, i, s) {
    var a = [];
    e <= 1 ? a.push({
      s: t,
      e: e
    }) : 1 <= t ? a.push({
      s: t - 1,
      e: e - 1
    }) : (a.push({
      s: t,
      e: 1
    }), a.push({
      s: 0,
      e: e - 1
    }));
    var n,
        o,
        h = [],
        l = a.length;

    for (n = 0; n < l; n += 1) {
      var p, m;
      if ((o = a[n]).e * s < i || o.s * s > i + r) ;else p = o.s * s <= i ? 0 : (o.s * s - i) / r, m = o.e * s >= i + r ? 1 : (o.e * s - i) / r, h.push([p, m]);
    }

    return h.length || h.push([0, 0]), h;
  }, TrimModifier.prototype.releasePathsData = function (t) {
    var e,
        r = t.length;

    for (e = 0; e < r; e += 1) {
      segments_length_pool.release(t[e]);
    }

    return t.length = 0, t;
  }, TrimModifier.prototype.processShapes = function (t) {
    var e, r, i;

    if (this._mdf || t) {
      var s = this.o.v % 360 / 360;

      if (s < 0 && (s += 1), e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + s, (r = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + s) < e) {
        var a = e;
        e = r, r = a;
      }

      e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r;
    } else e = this.sValue, r = this.eValue;

    var n,
        o,
        h,
        l,
        p,
        m,
        f = this.shapes.length,
        c = 0;
    if (r === e) for (n = 0; n < f; n += 1) {
      this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
    } else if (1 === r && 0 === e || 0 === r && 1 === e) {
      if (this._mdf) for (n = 0; n < f; n += 1) {
        this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
      }
    } else {
      var d,
          u,
          y = [];

      for (n = 0; n < f; n += 1) {
        if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
          if (h = (i = d.shape.paths)._length, m = 0, !d.shape._mdf && d.pathsData.length) m = d.totalShapeLength;else {
            for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) {
              p = bez.getSegmentsLength(i.shapes[o]), l.push(p), m += p.totalLength;
            }

            d.totalShapeLength = m, d.pathsData = l;
          }
          c += m, d.shape._mdf = !0;
        } else d.shape.paths = d.localShapeCollection;
      }

      var g,
          v = e,
          b = r,
          E = 0;

      for (n = f - 1; 0 <= n; n -= 1) {
        if ((d = this.shapes[n]).shape._mdf) {
          for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < f ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, E, c), E += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
            v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
              s: d.totalShapeLength * v,
              e: d.totalShapeLength * b
            }) : 1 <= v ? y.push({
              s: d.totalShapeLength * (v - 1),
              e: d.totalShapeLength * (b - 1)
            }) : (y.push({
              s: d.totalShapeLength * v,
              e: d.totalShapeLength
            }), y.push({
              s: 0,
              e: d.totalShapeLength * (b - 1)
            }));
            var x = this.addShapes(d, y[0]);

            if (y[0].s !== y[0].e) {
              if (1 < y.length) if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                var P = x.pop();
                this.addPaths(x, u), x = this.addShapes(d, y[1], P);
              } else this.addPaths(x, u), x = this.addShapes(d, y[1]);
              this.addPaths(x, u);
            }
          }

          d.shape.paths = u;
        }
      }
    }
  }, TrimModifier.prototype.addPaths = function (t, e) {
    var r,
        i = t.length;

    for (r = 0; r < i; r += 1) {
      e.addShape(t[r]);
    }
  }, TrimModifier.prototype.addSegment = function (t, e, r, i, s, a, n) {
    s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1);
  }, TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) {
    e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
  }, TrimModifier.prototype.addShapes = function (t, e, r) {
    var i,
        s,
        a,
        n,
        o,
        h,
        l,
        p,
        m = t.pathsData,
        f = t.shape.paths.shapes,
        c = t.shape.paths._length,
        d = 0,
        u = [],
        y = !0;

    for (p = r ? (o = r._length, r._length) : (r = shape_pool.newElement(), o = 0), u.push(r), i = 0; i < c; i += 1) {
      for (h = m[i].lengths, r.c = f[i].c, a = f[i].c ? h.length : h.length + 1, s = 1; s < a; s += 1) {
        if (d + (n = h[s - 1]).addedLength < e.s) d += n.addedLength, r.c = !1;else {
          if (d > e.e) {
            r.c = !1;
            break;
          }

          e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1), d += n.addedLength, o += 1;
        }
      }

      if (f[i].c && h.length) {
        if (n = h[s - 1], d <= e.e) {
          var g = h[s - 1].addedLength;
          e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1);
        } else r.c = !1;

        d += n.addedLength, o += 1;
      }

      if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
      i < c - 1 && (r = shape_pool.newElement(), y = !0, u.push(r), o = 0);
    }

    return u;
  }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
  }, RoundCornersModifier.prototype.processPath = function (t, e) {
    var r = shape_pool.newElement();
    r.c = t.c;
    var i,
        s,
        a,
        n,
        o,
        h,
        l,
        p,
        m,
        f,
        c,
        d,
        u,
        y = t._length,
        g = 0;

    for (i = 0; i < y; i += 1) {
      s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, c = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, m = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g)) : r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g) : r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1;
    }

    return r;
  }, RoundCornersModifier.prototype.processShapes = function (t) {
    var e,
        r,
        i,
        s,
        a,
        n,
        o = this.shapes.length,
        h = this.rd.v;
    if (0 !== h) for (r = 0; r < o; r += 1) {
      if ((a = this.shapes[r]).shape.paths, n = a.localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1) {
        n.addShape(this.processPath(e[i], h));
      }
      a.shape.paths = a.localShapeCollection;
    }
    this.dynamicProperties.length || (this._mdf = !1);
  }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
  }, PuckerAndBloatModifier.prototype.processPath = function (t, e) {
    var r = e / 100,
        i = [0, 0],
        s = t._length,
        a = 0;

    for (a = 0; a < s; a += 1) {
      i[0] += t.v[a][0], i[1] += t.v[a][1];
    }

    i[0] /= s, i[1] /= s;
    var n,
        o,
        h,
        l,
        p,
        m,
        f = shape_pool.newElement();

    for (f.c = t.c, a = 0; a < s; a += 1) {
      n = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, h = t.o[a][0] + (i[0] - t.o[a][0]) * -r, l = t.o[a][1] + (i[1] - t.o[a][1]) * -r, p = t.i[a][0] + (i[0] - t.i[a][0]) * -r, m = t.i[a][1] + (i[1] - t.i[a][1]) * -r, f.setTripleAt(n, o, h, l, p, m, a);
    }

    return f;
  }, PuckerAndBloatModifier.prototype.processShapes = function (t) {
    var e,
        r,
        i,
        s,
        a,
        n,
        o = this.shapes.length,
        h = this.amount.v;
    if (0 !== h) for (r = 0; r < o; r += 1) {
      if ((a = this.shapes[r]).shape.paths, n = a.localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1) {
        n.addShape(this.processPath(e[i], h));
      }
      a.shape.paths = a.localShapeCollection;
    }
    this.dynamicProperties.length || (this._mdf = !1);
  }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) {
    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
  }, RepeaterModifier.prototype.applyTransforms = function (t, e, r, i, s, a) {
    var n = a ? -1 : 1,
        o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
        h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
    t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
  }, RepeaterModifier.prototype.init = function (t, e, r, i) {
    this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]);

    for (; 0 < r;) {
      r -= 1, this._elements.unshift(e[r]), 1;
    }

    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
  }, RepeaterModifier.prototype.resetElements = function (t) {
    var e,
        r = t.length;

    for (e = 0; e < r; e += 1) {
      t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it);
    }
  }, RepeaterModifier.prototype.cloneElements = function (t) {
    t.length;
    var e = JSON.parse(JSON.stringify(t));
    return this.resetElements(e), e;
  }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
    var r,
        i = t.length;

    for (r = 0; r < i; r += 1) {
      t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
    }
  }, RepeaterModifier.prototype.processShapes = function (t) {
    var e, r, i, s, a;

    if (this._mdf || t) {
      var n,
          o = Math.ceil(this.c.v);

      if (this._groups.length < o) {
        for (; this._groups.length < o;) {
          var h = {
            it: this.cloneElements(this._elements),
            ty: "gr"
          };
          h.it.push({
            a: {
              a: 0,
              ix: 1,
              k: [0, 0]
            },
            nm: "Transform",
            o: {
              a: 0,
              ix: 7,
              k: 100
            },
            p: {
              a: 0,
              ix: 2,
              k: [0, 0]
            },
            r: {
              a: 1,
              ix: 6,
              k: [{
                s: 0,
                e: 0,
                t: 0
              }, {
                s: 0,
                e: 0,
                t: 1
              }]
            },
            s: {
              a: 0,
              ix: 3,
              k: [100, 100]
            },
            sa: {
              a: 0,
              ix: 5,
              k: 0
            },
            sk: {
              a: 0,
              ix: 4,
              k: 0
            },
            ty: "tr"
          }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1;
        }

        this.elem.reloadShapes();
      }

      for (i = a = 0; i <= this._groups.length - 1; i += 1) {
        n = a < o, this._groups[i]._render = n, this.changeGroupRender(this._groups[i].it, n), a += 1;
      }

      this._currentCopies = o;
      var l = this.o.v,
          p = l % 1,
          m = 0 < l ? Math.floor(l) : Math.ceil(l),
          f = (this.tr.v.props, this.pMatrix.props),
          c = this.rMatrix.props,
          d = this.sMatrix.props;
      this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
      var u,
          y,
          g = 0;

      if (0 < l) {
        for (; g < m;) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g += 1;
        }

        p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), g += p);
      } else if (l < 0) {
        for (; m < g;) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g -= 1;
        }

        p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), g -= p);
      }

      for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
        if (y = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== g) {
          for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), u = 0; u < y; u += 1) {
            r[u] = this.matrix.props[u];
          }

          this.matrix.reset();
        } else for (this.matrix.reset(), u = 0; u < y; u += 1) {
          r[u] = this.matrix.props[u];
        }

        g += 1, a -= 1, i += s;
      }
    } else for (a = this._currentCopies, i = 0, s = 1; a;) {
      r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
    }
  }, RepeaterModifier.prototype.addShape = function () {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function (t) {
    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
  }, ShapeCollection.prototype.releaseShapes = function () {
    var t;

    for (t = 0; t < this._length; t += 1) {
      shape_pool.release(this.shapes[t]);
    }

    this._length = 0;
  }, DashProperty.prototype.getValue = function (t) {
    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
      var e = 0,
          r = this.dataProps.length;

      for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) {
        "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }
  }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function (t, e) {
    for (var r = 0, i = this.o.length / 2; r < i;) {
      if (.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r])) return !1;
      r += 1;
    }

    return !0;
  }, GradientProperty.prototype.checkCollapsable = function () {
    if (this.o.length / 2 != this.c.length / 4) return !1;
    if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e;) {
      if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
      t += 1;
    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
    return !0;
  }, GradientProperty.prototype.getValue = function (t) {
    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
      var e,
          r,
          i,
          s = 4 * this.data.p;

      for (e = 0; e < s; e += 1) {
        r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
      }

      if (this.o.length) for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) {
        r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
      }
      this._mdf = !t;
    }
  }, extendPrototype([DynamicPropertyContainer], GradientProperty);

  var buildShapeString = function buildShapeString(t, e, r, i) {
    if (0 === e) return "";
    var s,
        a = t.o,
        n = t.i,
        o = t.v,
        h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);

    for (s = 1; s < e; s += 1) {
      h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
    }

    return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
  },
      audioControllerFactory = function () {
    function t(t) {
      this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1;
    }

    return t.prototype = {
      addAudio: function addAudio(t) {
        this.audios.push(t);
      },
      pause: function pause() {
        var t,
            e = this.audios.length;

        for (t = 0; t < e; t += 1) {
          this.audios[t].pause();
        }
      },
      resume: function resume() {
        var t,
            e = this.audios.length;

        for (t = 0; t < e; t += 1) {
          this.audios[t].resume();
        }
      },
      setRate: function setRate(t) {
        var e,
            r = this.audios.length;

        for (e = 0; e < r; e += 1) {
          this.audios[e].setRate(t);
        }
      },
      createAudio: function createAudio(t) {
        return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
          src: [t]
        }) : {
          isPlaying: !1,
          play: function play() {
            this.isPlaying = !0;
          },
          seek: function seek() {
            this.isPlaying = !1;
          },
          playing: function playing() {},
          rate: function rate() {},
          setVolume: function setVolume() {}
        };
      },
      setAudioFactory: function setAudioFactory(t) {
        this.audioFactory = t;
      },
      setVolume: function setVolume(t) {
        this._volume = t, this._updateVolume();
      },
      mute: function mute() {
        this._isMuted = !0, this._updateVolume();
      },
      unmute: function unmute() {
        this._isMuted = !1, this._updateVolume();
      },
      getVolume: function getVolume(t) {
        return this._volume;
      },
      _updateVolume: function _updateVolume() {
        var t,
            e = this.audios.length;

        for (t = 0; t < e; t += 1) {
          this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }
    }, function () {
      return new t();
    };
  }(),
      ImagePreloader = function () {
    var s = function () {
      var t = createTag("canvas");
      t.width = 1, t.height = 1;
      var e = t.getContext("2d");
      return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t;
    }();

    function e() {
      this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null);
    }

    function a(t, e, r) {
      var i = "";
      if (t.e) i = t.p;else if (e) {
        var s = t.p;
        -1 !== s.indexOf("img/intro-slider/") && (s = s.split("/")[1]), i = e + s;
      } else i = r, i += t.u ? t.u : "", i += t.p;
      return i;
    }

    function t(t) {
      this._imageLoaded = e.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = [];
    }

    return t.prototype = {
      loadAssets: function loadAssets(t, e) {
        this.imagesLoadedCb = e;
        var r,
            i = t.length;

        for (r = 0; r < i; r += 1) {
          t[r].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[r])));
        }
      },
      setAssetsPath: function setAssetsPath(t) {
        this.assetsPath = t || "";
      },
      setPath: function setPath(t) {
        this.path = t || "";
      },
      loaded: function loaded() {
        return this.totalImages === this.loadedAssets;
      },
      destroy: function destroy() {
        this.imagesLoadedCb = null, this.images.length = 0;
      },
      getImage: function getImage(t) {
        for (var e = 0, r = this.images.length; e < r;) {
          if (this.images[e].assetData === t) return this.images[e].img;
          e += 1;
        }
      },
      createImgData: function createImgData(t) {
        var e = a(t, this.assetsPath, this.path),
            r = createTag("img");
        r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function () {
          i.img = s, this._imageLoaded();
        }.bind(this), !1), r.src = e;
        var i = {
          img: r,
          assetData: t
        };
        return i;
      },
      createImageData: function createImageData(t) {
        var e = a(t, this.assetsPath, this.path),
            r = createNS("image");
        r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function () {
          i.img = s, this._imageLoaded();
        }.bind(this), !1), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
        var i = {
          img: r,
          assetData: t
        };
        return i;
      },
      imageLoaded: e,
      setCacheType: function setCacheType(t) {
        this._createImageData = "svg" === t ? this.createImageData.bind(this) : this.createImgData.bind(this);
      }
    }, t;
  }(),
      featureSupport = (ux = {
    maskType: !0
  }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (ux.maskType = !1), ux),
      ux,
      filtersFactory = (vx = {}, vx.createFilter = function (t) {
    var e = createNS("filter");
    return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e;
  }, vx.createAlphaToLuminanceFilter = function () {
    var t = createNS("feColorMatrix");
    return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
  }, vx),
      vx,
      assetLoader = function () {
    function a(t) {
      return t.response && "object" == _typeof(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0;
    }

    return {
      load: function load(t, e, r) {
        var i,
            s = new XMLHttpRequest();
        s.open("GET", t, !0);

        try {
          s.responseType = "json";
        } catch (t) {}

        s.send(), s.onreadystatechange = function () {
          if (4 == s.readyState) if (200 == s.status) i = a(s), e(i);else try {
            i = a(s), e(i);
          } catch (t) {
            r && r(t);
          }
        };
      }
    };
  }();

  function TextAnimatorProperty(t, e, r) {
    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
      alignment: {}
    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r);
  }

  function TextAnimatorDataProperty(t, e, r) {
    var i = {
      propType: !1
    },
        s = PropertyFactory.getProp,
        a = e.a;
    this.a = {
      r: a.r ? s(t, a.r, 0, degToRads, r) : i,
      rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
      ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
      sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
      sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
      s: a.s ? s(t, a.s, 1, .01, r) : i,
      a: a.a ? s(t, a.a, 1, 0, r) : i,
      o: a.o ? s(t, a.o, 0, .01, r) : i,
      p: a.p ? s(t, a.p, 1, 0, r) : i,
      sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
      sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
      fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
      fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
      fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
      fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
      t: a.t ? s(t, a.t, 0, 0, r) : i
    }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
  }

  function LetterProps(t, e, r, i, s, a) {
    this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
      o: !0,
      sw: !!e,
      sc: !!r,
      fc: !!i,
      m: !0,
      p: !0
    };
  }

  function TextProperty(t, e) {
    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
      ascent: 0,
      boxWidth: this.defaultBoxWidth,
      f: "",
      fStyle: "",
      fWeight: "",
      fc: "",
      j: "",
      justifyOffset: "",
      l: [],
      lh: 0,
      lineWidths: [],
      ls: "",
      of: "",
      s: "",
      sc: "",
      sw: 0,
      t: 0,
      tr: 0,
      sz: 0,
      ps: null,
      fillColorAnim: !1,
      strokeColorAnim: !1,
      strokeWidthAnim: !1,
      yOffset: 0,
      finalSize: 0,
      finalText: [],
      finalLineHeight: 0,
      __complete: !1
    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
  }

  TextAnimatorProperty.prototype.searchProperties = function () {
    var t,
        e,
        r = this._textData.a.length,
        i = PropertyFactory.getProp;

    for (t = 0; t < r; t += 1) {
      e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
    }

    this._textData.p && "m" in this._textData.p ? (this._pathData = {
      f: i(this._elem, this._textData.p.f, 0, 0, this),
      l: i(this._elem, this._textData.p.l, 0, 0, this),
      r: this._textData.p.r,
      m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
  }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
      this._isFirstFrame = !1;
      var r,
          i,
          s,
          a,
          n,
          o,
          h,
          l,
          p,
          m,
          f,
          c,
          d,
          u,
          y,
          g,
          v,
          b,
          E,
          x = this._moreOptions.alignment.v,
          P = this._animatorsData,
          S = this._textData,
          _ = this.mHelper,
          A = this._renderType,
          C = this.renderedLetters.length,
          T = (this.data, t.l);

      if (this._hasMaskedPath) {
        if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
          var k,
              M = E.v;

          for (this._pathData.r && (M = M.reverse()), n = {
            tLength: 0,
            segments: []
          }, a = M._length - 1, s = g = 0; s < a; s += 1) {
            k = bez.buildBezierData(M.v[s], M.v[s + 1], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[s + 1][0] - M.v[s + 1][0], M.i[s + 1][1] - M.v[s + 1][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength;
          }

          s = a, E.v.c && (k = bez.buildBezierData(M.v[s], M.v[0], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength), this._pathData.pi = n;
        }

        if (n = this._pathData.pi, o = this._pathData.f.v, m = 1, p = !(l = f = 0), u = n.segments, o < 0 && E.v.c) for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), m = (d = u[f = u.length - 1].points).length - 1; o < 0;) {
          o += d[m].partialLength, (m -= 1) < 0 && (m = (d = u[f -= 1].points).length - 1);
        }
        c = (d = u[f].points)[m - 1], y = (h = d[m]).partialLength;
      }

      a = T.length, i = r = 0;
      var D,
          F,
          w,
          I,
          V = 1.2 * t.finalSize * .714,
          B = !0;
      w = P.length;
      var R,
          L,
          G,
          z,
          N,
          O,
          H,
          j,
          q,
          W,
          Y,
          X,
          K,
          $ = -1,
          Z = o,
          J = f,
          U = m,
          Q = -1,
          tt = "",
          et = this.defaultPropsArray;

      if (2 === t.j || 1 === t.j) {
        var rt = 0,
            it = 0,
            st = 2 === t.j ? -.5 : -1,
            at = 0,
            nt = !0;

        for (s = 0; s < a; s += 1) {
          if (T[s].n) {
            for (rt && (rt += it); at < s;) {
              T[at].animatorJustifyOffset = rt, at += 1;
            }

            nt = !(rt = 0);
          } else {
            for (F = 0; F < w; F += 1) {
              (D = P[F].a).t.propType && (nt && 2 === t.j && (it += D.t.v * st), (R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? rt += D.t.v * R[0] * st : rt += D.t.v * R * st);
            }

            nt = !1;
          }
        }

        for (rt && (rt += it); at < s;) {
          T[at].animatorJustifyOffset = rt, at += 1;
        }
      }

      for (s = 0; s < a; s += 1) {
        if (_.reset(), N = 1, T[s].n) r = 0, i += t.yOffset, i += B ? 1 : 0, o = Z, B = !1, 0, this._hasMaskedPath && (m = U, c = (d = u[f = J].points)[m - 1], y = (h = d[m]).partialLength, l = 0), K = W = X = tt = "", et = this.defaultPropsArray;else {
          if (this._hasMaskedPath) {
            if (Q !== T[s].line) {
              switch (t.j) {
                case 1:
                  o += g - t.lineWidths[T[s].line];
                  break;

                case 2:
                  o += (g - t.lineWidths[T[s].line]) / 2;
              }

              Q = T[s].line;
            }

            $ !== T[s].ind && (T[$] && (o += T[$].extra), o += T[s].an / 2, $ = T[s].ind), o += x[0] * T[s].an / 200;
            var ot = 0;

            for (F = 0; F < w; F += 1) {
              (D = P[F].a).p.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.p.v[0] * R[0] : ot += D.p.v[0] * R), D.a.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.a.v[0] * R[0] : ot += D.a.v[0] * R);
            }

            for (p = !0; p;) {
              o + ot <= l + y || !d ? (v = (o + ot - l) / h.partialLength, G = c.point[0] + (h.point[0] - c.point[0]) * v, z = c.point[1] + (h.point[1] - c.point[1]) * v, _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100), p = !1) : d && (l += h.partialLength, (m += 1) >= d.length && (m = 0, d = u[f += 1] ? u[f].points : E.v.c ? u[f = m = 0].points : (l -= h.partialLength, null)), d && (c = h, y = (h = d[m]).partialLength));
            }

            L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0);
          } else L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0), _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100, 0);

          for (T[s].l / 2, F = 0; F < w; F += 1) {
            (D = P[F].a).t.propType && (R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? R.length ? o += D.t.v * R[0] : o += D.t.v * R : R.length ? r += D.t.v * R[0] : r += D.t.v * R));
          }

          for (T[s].l / 2, t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < w; F += 1) {
            (D = P[F].a).a.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? _.translate(-D.a.v[0] * R[0], -D.a.v[1] * R[1], D.a.v[2] * R[2]) : _.translate(-D.a.v[0] * R, -D.a.v[1] * R, D.a.v[2] * R));
          }

          for (F = 0; F < w; F += 1) {
            (D = P[F].a).s.propType && ((R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? _.scale(1 + (D.s.v[0] - 1) * R[0], 1 + (D.s.v[1] - 1) * R[1], 1) : _.scale(1 + (D.s.v[0] - 1) * R, 1 + (D.s.v[1] - 1) * R, 1));
          }

          for (F = 0; F < w; F += 1) {
            if (D = P[F].a, R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), D.sk.propType && (R.length ? _.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1]) : _.skewFromAxis(-D.sk.v * R, D.sa.v * R)), D.r.propType && (R.length ? _.rotateZ(-D.r.v * R[2]) : _.rotateZ(-D.r.v * R)), D.ry.propType && (R.length ? _.rotateY(D.ry.v * R[1]) : _.rotateY(D.ry.v * R)), D.rx.propType && (R.length ? _.rotateX(D.rx.v * R[0]) : _.rotateX(D.rx.v * R)), D.o.propType && (R.length ? N += (D.o.v * R[0] - N) * R[0] : N += (D.o.v * R - N) * R), t.strokeWidthAnim && D.sw.propType && (R.length ? H += D.sw.v * R[0] : H += D.sw.v * R), t.strokeColorAnim && D.sc.propType) for (q = 0; q < 3; q += 1) {
              R.length ? O[q] = O[q] + (D.sc.v[q] - O[q]) * R[0] : O[q] = O[q] + (D.sc.v[q] - O[q]) * R;
            }

            if (t.fillColorAnim && t.fc) {
              if (D.fc.propType) for (q = 0; q < 3; q += 1) {
                R.length ? j[q] = j[q] + (D.fc.v[q] - j[q]) * R[0] : j[q] = j[q] + (D.fc.v[q] - j[q]) * R;
              }
              D.fh.propType && (j = R.length ? addHueToRGB(j, D.fh.v * R[0]) : addHueToRGB(j, D.fh.v * R)), D.fs.propType && (j = R.length ? addSaturationToRGB(j, D.fs.v * R[0]) : addSaturationToRGB(j, D.fs.v * R)), D.fb.propType && (j = R.length ? addBrightnessToRGB(j, D.fb.v * R[0]) : addBrightnessToRGB(j, D.fb.v * R));
            }
          }

          for (F = 0; F < w; F += 1) {
            (D = P[F].a).p.propType && (R = P[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), this._hasMaskedPath ? R.length ? _.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1]) : _.translate(0, D.p.v[1] * R, -D.p.v[2] * R) : R.length ? _.translate(D.p.v[0] * R[0], D.p.v[1] * R[1], -D.p.v[2] * R[2]) : _.translate(D.p.v[0] * R, D.p.v[1] * R, -D.p.v[2] * R));
          }

          if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
            if (_.translate(0, -t.ls), _.translate(0, x[1] * V / 100 + i, 0), S.p.p) {
              b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
              var ht = 180 * Math.atan(b) / Math.PI;
              h.point[0] < c.point[0] && (ht += 180), _.rotate(-ht * Math.PI / 180);
            }

            _.translate(G, z, 0), o -= x[0] * T[s].an / 200, T[s + 1] && $ !== T[s + 1].ind && (o += T[s].an / 2, o += t.tr / 1e3 * t.finalSize);
          } else {
            switch (_.translate(r, i, 0), t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
              case 1:
                _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]), 0, 0);

                break;

              case 2:
                _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2, 0, 0);

            }

            _.translate(0, -t.ls), _.translate(L, 0, 0), _.translate(x[0] * T[s].an / 200, x[1] * V / 100, 0), r += T[s].l + t.tr / 1e3 * t.finalSize;
          }

          "html" === A ? tt = _.toCSS() : "svg" === A ? tt = _.to2dCSS() : et = [_.props[0], _.props[1], _.props[2], _.props[3], _.props[4], _.props[5], _.props[6], _.props[7], _.props[8], _.props[9], _.props[10], _.props[11], _.props[12], _.props[13], _.props[14], _.props[15]], K = N;
        }
        this.lettersChangedFlag = C <= s ? (I = new LetterProps(K, W, Y, X, tt, et), this.renderedLetters.push(I), C += 1, !0) : (I = this.renderedLetters[s]).update(K, W, Y, X, tt, et) || this.lettersChangedFlag;
      }
    }
  }, TextAnimatorProperty.prototype.getValue = function () {
    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
  }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function (t, e, r, i, s, a) {
    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;
    var n = this._mdf.p = !1;
    return this.o !== t && (this.o = t, n = this._mdf.o = !0), this.sw !== e && (this.sw = e, n = this._mdf.sw = !0), this.sc !== r && (this.sc = r, n = this._mdf.sc = !0), this.fc !== i && (this.fc = i, n = this._mdf.fc = !0), this.m !== s && (this.m = s, n = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, n = this._mdf.p = !0), n;
  }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) {
    for (var r in e) {
      e.hasOwnProperty(r) && (t[r] = e[r]);
    }

    return t;
  }, TextProperty.prototype.setCurrentData = function (t) {
    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
  }, TextProperty.prototype.searchProperty = function () {
    return this.searchKeyframes();
  }, TextProperty.prototype.searchKeyframes = function () {
    return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
  }, TextProperty.prototype.addEffect = function (t) {
    this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
  }, TextProperty.prototype.getValue = function (t) {
    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
      this.currentData.t = this.data.d.k[this.keysIndex].s.t;
      var e = this.currentData,
          r = this.keysIndex;
      if (this.lock) this.setCurrentData(this.currentData);else {
        this.lock = !0, this._mdf = !1;
        var i,
            s = this.effectsSequence.length,
            a = t || this.data.d.k[this.keysIndex].s;

        for (i = 0; i < s; i += 1) {
          a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
        }

        e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
  }, TextProperty.prototype.getKeyframeValue = function () {
    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && (t[r].s, !(r === i - 1 || t[r + 1].t > e));) {
      r += 1;
    }

    return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
  }, TextProperty.prototype.buildFinalText = function (t) {
    for (var e, r = FontManager.getCombinedCharacterCodes(), i = [], s = 0, a = t.length; s < a;) {
      e = t.charCodeAt(s), -1 !== r.indexOf(e) ? i[i.length - 1] += t.charAt(s) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(s + 1)) && e <= 57343 ? (i.push(t.substr(s, 2)), ++s) : i.push(t.charAt(s)), s += 1;
    }

    return i;
  }, TextProperty.prototype.completeTextData = function (t) {
    t.__complete = !0;
    var e,
        r,
        i,
        s,
        a,
        n,
        o,
        h = this.elem.globalData.fontManager,
        l = this.data,
        p = [],
        m = 0,
        f = l.m.g,
        c = 0,
        d = 0,
        u = 0,
        y = [],
        g = 0,
        v = 0,
        b = h.getFontByName(t.f),
        E = 0,
        x = b.fStyle ? b.fStyle.split(" ") : [],
        P = "normal",
        S = "normal";

    for (r = x.length, e = 0; e < r; e += 1) {
      switch (x[e].toLowerCase()) {
        case "italic":
          S = "italic";
          break;

        case "bold":
          P = "700";
          break;

        case "black":
          P = "900";
          break;

        case "medium":
          P = "500";
          break;

        case "regular":
        case "normal":
          P = "400";
          break;

        case "light":
        case "thin":
          P = "200";
      }
    }

    t.fWeight = b.fWeight || P, t.fStyle = S, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;

    var _,
        A = t.tr / 1e3 * t.finalSize;

    if (t.sz) for (var C, T, k = !0, M = t.sz[0], D = t.sz[1]; k;) {
      g = C = 0, r = (T = this.buildFinalText(t.t)).length, A = t.tr / 1e3 * t.finalSize;
      var F = -1;

      for (e = 0; e < r; e += 1) {
        _ = T[e].charCodeAt(0), i = !1, " " === T[e] ? F = e : 13 !== _ && 3 !== _ || (i = !(g = 0), C += t.finalLineHeight || 1.2 * t.finalSize), M < g + (E = h.chars ? (o = h.getCharData(T[e], b.fStyle, b.fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(T[e], t.f, t.finalSize)) && " " !== T[e] ? (-1 === F ? r += 1 : e = F, C += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, F === e ? 1 : 0, "\r"), F = -1, g = 0) : (g += E, g += A);
      }

      C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && D < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, r = t.finalText.length, k = !1);
    }
    g = -A;
    var w,
        I = E = 0;

    for (e = 0; e < r; e += 1) {
      if (i = !1, 13 === (_ = (w = t.finalText[e]).charCodeAt(0)) || 3 === _ ? (I = 0, y.push(g), v = v < g ? g : v, g = -2 * A, i = !(s = ""), u += 1) : s = w, E = h.chars ? (o = h.getCharData(w, b.fStyle, h.getFontByName(t.f).fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(s, t.f, t.finalSize), " " === w ? I += E + A : (g += E + A + I, I = 0), p.push({
        l: E,
        an: E,
        add: c,
        n: i,
        anIndexes: [],
        val: s,
        line: u,
        animatorJustifyOffset: 0
      }), 2 == f) {
        if (c += E, "" === s || " " === s || e === r - 1) {
          for ("" !== s && " " !== s || (c -= E); d <= e;) {
            p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
          }

          m += 1, c = 0;
        }
      } else if (3 == f) {
        if (c += E, "" === s || e === r - 1) {
          for ("" === s && (c -= E); d <= e;) {
            p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
          }

          c = 0, m += 1;
        }
      } else p[m].ind = m, p[m].extra = 0, m += 1;
    }

    if (t.l = p, v = v < g ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;else switch (t.boxWidth = v, t.j) {
      case 1:
        t.justifyOffset = -t.boxWidth;
        break;

      case 2:
        t.justifyOffset = -t.boxWidth / 2;
        break;

      default:
        t.justifyOffset = 0;
    }
    t.lineWidths = y;
    var V,
        B,
        R = l.a;
    n = R.length;
    var L,
        G,
        z = [];

    for (a = 0; a < n; a += 1) {
      for ((V = R[a]).a.sc && (t.strokeColorAnim = !0), V.a.sw && (t.strokeWidthAnim = !0), (V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (t.fillColorAnim = !0), G = 0, L = V.s.b, e = 0; e < r; e += 1) {
        (B = p[e]).anIndexes[a] = G, (1 == L && "" !== B.val || 2 == L && "" !== B.val && " " !== B.val || 3 == L && (B.n || " " == B.val || e == r - 1) || 4 == L && (B.n || e == r - 1)) && (1 === V.s.rn && z.push(G), G += 1);
      }

      l.a[a].s.totalChars = G;
      var N,
          O = -1;
      if (1 === V.s.rn) for (e = 0; e < r; e += 1) {
        O != (B = p[e]).anIndexes[a] && (O = B.anIndexes[a], N = z.splice(Math.floor(Math.random() * z.length), 1)[0]), B.anIndexes[a] = N;
      }
    }

    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
  }, TextProperty.prototype.updateDocumentData = function (t, e) {
    e = void 0 === e ? this.keysIndex : e;
    var r = this.copyData({}, this.data.d.k[e].s);
    r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this);
  }, TextProperty.prototype.recalculate = function (t) {
    var e = this.data.d.k[t].s;
    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
  }, TextProperty.prototype.canResizeFont = function (t) {
    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
  }, TextProperty.prototype.setMinimumFontSize = function (t) {
    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
  };

  var TextSelectorProp = function () {
    var c = Math.max,
        d = Math.min,
        u = Math.floor;

    function i(t, e) {
      this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
        k: 0
      }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
        v: 100
      }, this.o = PropertyFactory.getProp(t, e.o || {
        k: 0
      }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
        k: 0
      }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
        k: 0
      }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
    }

    return i.prototype = {
      getMult: function getMult(t) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var e = 0,
            r = 0,
            i = 1,
            s = 1;
        0 < this.ne.v ? e = this.ne.v / 100 : r = -this.ne.v / 100, 0 < this.xe.v ? i = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100;
        var a = BezierFactory.getBezierEasing(e, r, i, s).get,
            n = 0,
            o = this.finalS,
            h = this.finalE,
            l = this.data.sh;
        if (2 === l) n = a(n = h === o ? h <= t ? 1 : 0 : c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));else if (3 === l) n = a(n = h === o ? h <= t ? 0 : 1 : 1 - c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));else if (4 === l) h === o ? n = 0 : (n = c(0, d(.5 / (h - o) + (t - o) / (h - o), 1))) < .5 ? n *= 2 : n = 1 - 2 * (n - .5), n = a(n);else if (5 === l) {
          if (h === o) n = 0;else {
            var p = h - o,
                m = -p / 2 + (t = d(c(0, t + .5 - o), h - o)),
                f = p / 2;
            n = Math.sqrt(1 - m * m / (f * f));
          }
          n = a(n);
        } else n = 6 === l ? a(n = h === o ? 0 : (t = d(c(0, t + .5 - o), h - o), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (h - o))) / 2)) : (t >= u(o) && (n = c(0, d(t - o < 0 ? d(h, 1) - (o - t) : h - t, 1))), a(n));
        return n * this.a.v;
      },
      getValue: function getValue(t) {
        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
            r = this.o.v / e,
            i = this.s.v / e + r,
            s = this.e.v / e + r;

        if (s < i) {
          var a = i;
          i = s, s = a;
        }

        this.finalS = i, this.finalE = s;
      }
    }, extendPrototype([DynamicPropertyContainer], i), {
      getTextSelectorProp: function getTextSelectorProp(t, e, r) {
        return new i(t, e, r);
      }
    };
  }(),
      pool_factory = function pool_factory(t, e, r, i) {
    var s = 0,
        a = t,
        n = createSizedArray(a);

    function o() {
      return s ? n[s -= 1] : e();
    }

    return {
      newElement: o,
      release: function release(t) {
        s === a && (n = pooling["double"](n), a *= 2), r && r(t), n[s] = t, s += 1;
      }
    };
  },
      pooling = {
    "double": function double(t) {
      return t.concat(createSizedArray(t.length));
    }
  },
      point_pool = pool_factory(8, function () {
    return createTypedArray("float32", 2);
  }),
      shape_pool = (MB = pool_factory(4, function () {
    return new ShapePath();
  }, function (t) {
    var e,
        r = t._length;

    for (e = 0; e < r; e += 1) {
      point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
    }

    t._length = 0, t.c = !1;
  }), MB.clone = function (t) {
    var e,
        r = MB.newElement(),
        i = void 0 === t._length ? t.v.length : t._length;

    for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1) {
      r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
    }

    return r;
  }, MB),
      MB,
      shapeCollection_pool = (VB = {
    newShapeCollection: function newShapeCollection() {
      var t;
      t = WB ? YB[WB -= 1] : new ShapeCollection();
      return t;
    },
    release: function release(t) {
      var e,
          r = t._length;

      for (e = 0; e < r; e += 1) {
        shape_pool.release(t.shapes[e]);
      }

      t._length = 0, WB === XB && (YB = pooling["double"](YB), XB *= 2);
      YB[WB] = t, WB += 1;
    }
  }, WB = 0, XB = 4, YB = createSizedArray(XB), VB),
      VB,
      WB,
      XB,
      YB,
      segments_length_pool = pool_factory(8, function () {
    return {
      lengths: [],
      totalLength: 0
    };
  }, function (t) {
    var e,
        r = t.lengths.length;

    for (e = 0; e < r; e += 1) {
      bezier_length_pool.release(t.lengths[e]);
    }

    t.lengths.length = 0;
  }),
      bezier_length_pool = pool_factory(8, function () {
    return {
      addedLength: 0,
      percents: createTypedArray("float32", defaultCurveSegments),
      lengths: createTypedArray("float32", defaultCurveSegments)
    };
  });

  function BaseRenderer() {}

  function SVGRenderer(t, e) {
    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
    var r = "";

    if (e && e.title) {
      var i = createNS("title"),
          s = createElementID();
      i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s;
    }

    if (e && e.description) {
      var a = createNS("desc"),
          n = createElementID();
      a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n;
    }

    r && this.svgElement.setAttribute("aria-labelledby", r);
    var o = createNS("defs");
    this.svgElement.appendChild(o);
    var h = createNS("g");
    this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
      preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
      imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
      progressiveLoad: e && e.progressiveLoad || !1,
      hideOnTransparent: !e || !1 !== e.hideOnTransparent,
      viewBoxOnly: e && e.viewBoxOnly || !1,
      viewBoxSize: e && e.viewBoxSize || !1,
      className: e && e.className || "",
      id: e && e.id || "",
      focusable: e && e.focusable,
      filterSize: {
        width: e && e.filterSize && e.filterSize.width || "100%",
        height: e && e.filterSize && e.filterSize.height || "100%",
        x: e && e.filterSize && e.filterSize.x || "0%",
        y: e && e.filterSize && e.filterSize.y || "0%"
      }
    }, this.globalData = {
      _mdf: !1,
      frameNum: -1,
      defs: o,
      renderConfig: this.renderConfig
    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
  }

  function CanvasRenderer(t, e) {
    this.animationItem = t, this.renderConfig = {
      clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
      context: e && e.context || null,
      progressiveLoad: e && e.progressiveLoad || !1,
      preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
      imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
      className: e && e.className || "",
      id: e && e.id || ""
    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
      frameNum: -1,
      _mdf: !1,
      renderConfig: this.renderConfig,
      currentGlobalAlpha: -1
    }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas";
  }

  function HybridRenderer(t, e) {
    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
      className: e && e.className || "",
      imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
      hideOnTransparent: !e || !1 !== e.hideOnTransparent,
      filterSize: {
        width: e && e.filterSize && e.filterSize.width || "400%",
        height: e && e.filterSize && e.filterSize.height || "400%",
        x: e && e.filterSize && e.filterSize.x || "-100%",
        y: e && e.filterSize && e.filterSize.y || "-100%"
      }
    }, this.globalData = {
      _mdf: !1,
      frameNum: -1,
      renderConfig: this.renderConfig
    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
  }

  function MaskElement(t, e, r) {
    this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
    var i,
        s = this.globalData.defs,
        a = this.masksProperties ? this.masksProperties.length : 0;
    this.viewData = createSizedArray(a), this.solidPath = "";
    var n,
        o,
        h,
        l,
        p,
        m,
        f,
        c = this.masksProperties,
        d = 0,
        u = [],
        y = createElementID(),
        g = "clipPath",
        v = "clip-path";

    for (i = 0; i < a; i++) {
      if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k || c[i].o.x) && (v = g = "mask"), "s" != c[i].mode && "i" != c[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), n = createNS("path"), "n" != c[i].mode) {
        var b;

        if (d += 1, n.setAttribute("fill", "s" === c[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== c[i].x.k ? (v = g = "mask", f = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), p.appendChild(m), s.appendChild(p), n.setAttribute("stroke", "s" === c[i].mode ? "#000000" : "#ffffff")) : f = m = null, this.storedData[i] = {
          elem: n,
          x: f,
          expan: m,
          lastPath: "",
          lastOperator: "",
          filterId: b,
          lastRadius: 0
        }, "i" == c[i].mode) {
          h = u.length;
          var E = createNS("g");

          for (o = 0; o < h; o += 1) {
            E.appendChild(u[o]);
          }

          var x = createNS("mask");
          x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(n), s.appendChild(x), E.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), u.length = 0, u.push(E);
        } else u.push(n);

        c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
          elem: n,
          lastPath: "",
          op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
          invRect: l
        }, this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i]);
      } else this.viewData[i] = {
        op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
        prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
        elem: n,
        lastPath: ""
      }, s.appendChild(n);
    }

    for (this.maskElement = createNS(g), a = u.length, i = 0; i < a; i += 1) {
      this.maskElement.appendChild(u[i]);
    }

    0 < d && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
  }

  function HierarchyElement() {}

  function FrameElement() {}

  function TransformElement() {}

  function RenderableElement() {}

  function RenderableDOMElement() {}

  function ProcessedElement(t, e) {
    this.elem = t, this.pos = e;
  }

  function SVGStyleData(t, e) {
    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null;
  }

  function SVGShapeData(t, e, r) {
    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;

    for (var i = 0, s = t.length; i < s;) {
      if (t[i].mProps.dynamicProperties.length) {
        this._isAnimated = !0;
        break;
      }

      i += 1;
    }
  }

  function SVGTransformData(t, e, r) {
    this.transform = {
      mProps: t,
      op: e,
      container: r
    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
  }

  function SVGStrokeStyleData(t, e, r) {
    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
  }

  function SVGFillStyleData(t, e, r) {
    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
  }

  function SVGGradientFillStyleData(t, e, r) {
    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
  }

  function SVGGradientStrokeStyleData(t, e, r) {
    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
  }

  function ShapeGroupData() {
    this.it = [], this.prevViewData = [], this.gr = createNS("g");
  }

  BaseRenderer.prototype.checkLayers = function (t) {
    var e,
        r,
        i = this.layers.length;

    for (this.completeLayers = !0, e = i - 1; 0 <= e; e--) {
      this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
    }

    this.checkPendingElements();
  }, BaseRenderer.prototype.createItem = function (t) {
    switch (t.ty) {
      case 2:
        return this.createImage(t);

      case 0:
        return this.createComp(t);

      case 1:
        return this.createSolid(t);

      case 3:
        return this.createNull(t);

      case 4:
        return this.createShape(t);

      case 5:
        return this.createText(t);

      case 6:
        return this.createAudio(t);

      case 13:
        return this.createCamera(t);
    }

    return this.createNull(t);
  }, BaseRenderer.prototype.createCamera = function () {
    throw new Error("You're using a 3d camera. Try the html renderer.");
  }, BaseRenderer.prototype.createAudio = function (t) {
    return new AudioElement(t, this.globalData, this);
  }, BaseRenderer.prototype.buildAllItems = function () {
    var t,
        e = this.layers.length;

    for (t = 0; t < e; t += 1) {
      this.buildItem(t);
    }

    this.checkPendingElements();
  }, BaseRenderer.prototype.includeLayers = function (t) {
    this.completeLayers = !1;
    var e,
        r,
        i = t.length,
        s = this.layers.length;

    for (e = 0; e < i; e += 1) {
      for (r = 0; r < s;) {
        if (this.layers[r].id == t[e].id) {
          this.layers[r] = t[e];
          break;
        }

        r += 1;
      }
    }
  }, BaseRenderer.prototype.setProjectInterface = function (t) {
    this.globalData.projectInterface = t;
  }, BaseRenderer.prototype.initItems = function () {
    this.globalData.progressiveLoad || this.buildAllItems();
  }, BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
    for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;) {
      s[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;
    }
  }, BaseRenderer.prototype.addPendingElement = function (t) {
    this.pendingElements.push(t);
  }, BaseRenderer.prototype.searchExtraCompositions = function (t) {
    var e,
        r = t.length;

    for (e = 0; e < r; e += 1) {
      if (t[e].xt) {
        var i = this.createComp(t[e]);
        i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
      }
    }
  }, BaseRenderer.prototype.setupGlobalData = function (t, e) {
    this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
      w: t.w,
      h: t.h
    };
  }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function (t) {
    return new NullElement(t, this.globalData, this);
  }, SVGRenderer.prototype.createShape = function (t) {
    return new SVGShapeElement(t, this.globalData, this);
  }, SVGRenderer.prototype.createText = function (t) {
    return new SVGTextElement(t, this.globalData, this);
  }, SVGRenderer.prototype.createImage = function (t) {
    return new IImageElement(t, this.globalData, this);
  }, SVGRenderer.prototype.createComp = function (t) {
    return new SVGCompElement(t, this.globalData, this);
  }, SVGRenderer.prototype.createSolid = function (t) {
    return new ISolidElement(t, this.globalData, this);
  }, SVGRenderer.prototype.configAnimation = function (t) {
    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
    var e = this.globalData.defs;
    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
    var r = createNS("clipPath"),
        i = createNS("rect");
    i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
    var s = createElementID();
    r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
  }, SVGRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerText = "", this.layerElement = null, this.globalData.defs = null;
    var t,
        e = this.layers ? this.layers.length : 0;

    for (t = 0; t < e; t++) {
      this.elements[t] && this.elements[t].destroy();
    }

    this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
  }, SVGRenderer.prototype.updateContainerSize = function () {}, SVGRenderer.prototype.buildItem = function (t) {
    var e = this.elements;

    if (!e[t] && 99 != this.layers[t].ty) {
      e[t] = !0;
      var r = this.createItem(this.layers[t]);
      e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)));
    }
  }, SVGRenderer.prototype.checkPendingElements = function () {
    for (; this.pendingElements.length;) {
      var t = this.pendingElements.pop();
      if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; e < r;) {
        if (this.elements[e] === t) {
          t.setMatte(this.elements[e - 1].layerId);
          break;
        }

        e += 1;
      }
    }
  }, SVGRenderer.prototype.renderFrame = function (t) {
    if (this.renderedFrame !== t && !this.destroyed) {
      null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
      var e,
          r = this.layers.length;

      for (this.completeLayers || this.checkLayers(t), e = r - 1; 0 <= e; e--) {
        (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
      }

      if (this.globalData._mdf) for (e = 0; e < r; e += 1) {
        (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }
  }, SVGRenderer.prototype.appendElementInPos = function (t, e) {
    var r = t.getBaseElement();

    if (r) {
      for (var i, s = 0; s < e;) {
        this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1;
      }

      i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r);
    }
  }, SVGRenderer.prototype.hide = function () {
    this.layerElement.style.display = "none";
  }, SVGRenderer.prototype.show = function () {
    this.layerElement.style.display = "block";
  }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function (t) {
    return new CVShapeElement(t, this.globalData, this);
  }, CanvasRenderer.prototype.createText = function (t) {
    return new CVTextElement(t, this.globalData, this);
  }, CanvasRenderer.prototype.createImage = function (t) {
    return new CVImageElement(t, this.globalData, this);
  }, CanvasRenderer.prototype.createComp = function (t) {
    return new CVCompElement(t, this.globalData, this);
  }, CanvasRenderer.prototype.createSolid = function (t) {
    return new CVSolidElement(t, this.globalData, this);
  }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function (t) {
    if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) if (this.renderConfig.clearCanvas) {
      this.transformMat.cloneFromProps(t);
      var e = this.contextData.cTr.props;
      this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
      var r = this.contextData.cTr.props;
      this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
    } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
  }, CanvasRenderer.prototype.ctxOpacity = function (t) {
    if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
    this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO);
  }, CanvasRenderer.prototype.reset = function () {
    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
  }, CanvasRenderer.prototype.save = function (t) {
    if (this.renderConfig.clearCanvas) {
      t && this.canvasContext.save();
      var e = this.contextData.cTr.props;
      this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
      var r,
          i = this.contextData.saved[this.contextData.cArrPos];

      for (r = 0; r < 16; r += 1) {
        i[r] = e[r];
      }

      this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
    } else this.canvasContext.save();
  }, CanvasRenderer.prototype.restore = function (t) {
    if (this.renderConfig.clearCanvas) {
      t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
      var e,
          r = this.contextData.saved[this.contextData.cArrPos],
          i = this.contextData.cTr.props;

      for (e = 0; e < 16; e += 1) {
        i[e] = r[e];
      }

      this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r);
    } else this.canvasContext.restore();
  }, CanvasRenderer.prototype.configAnimation = function (t) {
    this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
      w: t.w,
      h: t.h,
      sx: 0,
      sy: 0,
      tx: 0,
      ty: 0
    }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
  }, CanvasRenderer.prototype.updateContainerSize = function () {
    var t, e, r, i;

    if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
      var s = this.renderConfig.preserveAspectRatio.split(" "),
          a = s[1] || "meet",
          n = s[0] || "xMidYMid",
          o = n.substr(0, 4),
          h = n.substr(4);
      r = t / e, i = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = r < i && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
    } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;

    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
  }, CanvasRenderer.prototype.destroy = function () {
    var t;

    for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1) {
      this.elements[t] && this.elements[t].destroy();
    }

    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
  }, CanvasRenderer.prototype.renderFrame = function (t, e) {
    if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
      this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
      var r,
          i = this.layers.length;

      for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r++) {
        (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
      }

      if (this.globalData._mdf) {
        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; 0 <= r; r -= 1) {
          (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
        }

        !0 !== this.renderConfig.clearCanvas && this.restore();
      }
    }
  }, CanvasRenderer.prototype.buildItem = function (t) {
    var e = this.elements;

    if (!e[t] && 99 != this.layers[t].ty) {
      var r = this.createItem(this.layers[t], this, this.globalData);
      (e[t] = r).initExpressions();
    }
  }, CanvasRenderer.prototype.checkPendingElements = function () {
    for (; this.pendingElements.length;) {
      this.pendingElements.pop().checkParenting();
    }
  }, CanvasRenderer.prototype.hide = function () {
    this.animationItem.container.style.display = "none";
  }, CanvasRenderer.prototype.show = function () {
    this.animationItem.container.style.display = "block";
  }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function () {
    for (; this.pendingElements.length;) {
      this.pendingElements.pop().checkParenting();
    }
  }, HybridRenderer.prototype.appendElementInPos = function (t, e) {
    var r = t.getBaseElement();

    if (r) {
      var i = this.layers[e];
      if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);else if (this.threeDElements) this.addTo3dContainer(r, e);else {
        for (var s, a, n = 0; n < e;) {
          this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
        }

        s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r);
      }
    }
  }, HybridRenderer.prototype.createShape = function (t) {
    return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
  }, HybridRenderer.prototype.createText = function (t) {
    return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this);
  }, HybridRenderer.prototype.createCamera = function (t) {
    return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
  }, HybridRenderer.prototype.createImage = function (t) {
    return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
  }, HybridRenderer.prototype.createComp = function (t) {
    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
  }, HybridRenderer.prototype.createSolid = function (t) {
    return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
  }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
    for (var e = 0, r = this.threeDElements.length; e < r;) {
      if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
      e += 1;
    }
  }, HybridRenderer.prototype.createThreeDContainer = function (t, e) {
    var r = createTag("div");
    styleDiv(r);
    var i = createTag("div");
    styleDiv(i), "3d" === e && (r.style.width = this.globalData.compSize.w + "px", r.style.height = this.globalData.compSize.h + "px", r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%", i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r.appendChild(i);
    var s = {
      container: i,
      perspectiveElem: r,
      startPos: t,
      endPos: t,
      type: e
    };
    return this.threeDElements.push(s), s;
  }, HybridRenderer.prototype.build3dContainers = function () {
    var t,
        e,
        r = this.layers.length,
        i = "";

    for (t = 0; t < r; t += 1) {
      this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
    }

    for (t = (r = this.threeDElements.length) - 1; 0 <= t; t--) {
      this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }
  }, HybridRenderer.prototype.addTo3dContainer = function (t, e) {
    for (var r = 0, i = this.threeDElements.length; r < i;) {
      if (e <= this.threeDElements[r].endPos) {
        for (var s, a = this.threeDElements[r].startPos; a < e;) {
          this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
        }

        s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
        break;
      }

      r += 1;
    }
  }, HybridRenderer.prototype.configAnimation = function (t) {
    var e = createTag("div"),
        r = this.animationItem.wrapper;
    e.style.width = t.w + "px", e.style.height = t.h + "px", styleDiv(this.resizerElem = e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), e.style.overflow = "hidden";
    var i = createNS("svg");
    i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
    var s = createNS("defs");
    i.appendChild(s), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
  }, HybridRenderer.prototype.destroy = function () {
    this.animationItem.wrapper.innerText = "", this.animationItem.container = null, this.globalData.defs = null;
    var t,
        e = this.layers ? this.layers.length : 0;

    for (t = 0; t < e; t++) {
      this.elements[t].destroy();
    }

    this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
  }, HybridRenderer.prototype.updateContainerSize = function () {
    var t,
        e,
        r,
        i,
        s = this.animationItem.wrapper.offsetWidth,
        a = this.animationItem.wrapper.offsetHeight;
    i = s / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, r = 0, (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)";
  }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function () {
    this.resizerElem.style.display = "none";
  }, HybridRenderer.prototype.show = function () {
    this.resizerElem.style.display = "block";
  }, HybridRenderer.prototype.initItems = function () {
    if (this.buildAllItems(), this.camera) this.camera.setup();else {
      var t,
          e = this.globalData.compSize.w,
          r = this.globalData.compSize.h,
          i = this.threeDElements.length;

      for (t = 0; t < i; t += 1) {
        this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px";
      }
    }
  }, HybridRenderer.prototype.searchExtraCompositions = function (t) {
    var e,
        r = t.length,
        i = createTag("div");

    for (e = 0; e < r; e += 1) {
      if (t[e].xt) {
        var s = this.createComp(t[e], i, this.globalData.comp, null);
        s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
      }
    }
  }, MaskElement.prototype.getMaskProperty = function (t) {
    return this.viewData[t].prop;
  }, MaskElement.prototype.renderFrame = function (t) {
    var e,
        r = this.element.finalTransform.mat,
        i = this.masksProperties.length;

    for (e = 0; e < i; e++) {
      if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
        var s = this.storedData[e].expan;
        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
      }
    }
  }, MaskElement.prototype.getMaskelement = function () {
    return this.maskElement;
  }, MaskElement.prototype.createLayerSolidPath = function () {
    var t = "M0,0 ";
    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
  }, MaskElement.prototype.drawPath = function (t, e, r) {
    var i,
        s,
        a = " M" + e.v[0][0] + "," + e.v[0][1];

    for (s = e._length, i = 1; i < s; i += 1) {
      a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
    }

    if (e.c && 1 < s && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
      var n = "";
      r.elem && (e.c && (n = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", n)), r.lastPath = a;
    }
  }, MaskElement.prototype.destroy = function () {
    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
  }, HierarchyElement.prototype = {
    initHierarchy: function initHierarchy() {
      this.hierarchy = [], this._isParent = !1, this.checkParenting();
    },
    setHierarchy: function setHierarchy(t) {
      this.hierarchy = t;
    },
    setAsParent: function setAsParent() {
      this._isParent = !0;
    },
    checkParenting: function checkParenting() {
      void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
    }
  }, FrameElement.prototype = {
    initFrame: function initFrame() {
      this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
    },
    prepareProperties: function prepareProperties(t, e) {
      var r,
          i = this.dynamicProperties.length;

      for (r = 0; r < i; r += 1) {
        (e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
      }
    },
    addDynamicProperty: function addDynamicProperty(t) {
      -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
    }
  }, TransformElement.prototype = {
    initTransform: function initTransform() {
      this.finalTransform = {
        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
          o: 0
        },
        _matMdf: !1,
        _opMdf: !1,
        mat: new Matrix()
      }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
    },
    renderTransform: function renderTransform() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var t,
            e = this.finalTransform.mat,
            r = 0,
            i = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; r < i;) {
          if (this.hierarchy[r].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = !0;
            break;
          }

          r += 1;
        }
        if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) {
          t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
        }
      }
    },
    globalToLocal: function globalToLocal(t) {
      var e = [];
      e.push(this.finalTransform);

      for (var r = !0, i = this.comp; r;) {
        i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1;
      }

      var s,
          a,
          n = e.length;

      for (s = 0; s < n; s += 1) {
        a = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
      }

      return t;
    },
    mHelper: new Matrix()
  }, RenderableElement.prototype = {
    initRenderable: function initRenderable() {
      this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
    },
    addRenderableComponent: function addRenderableComponent(t) {
      -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
    },
    removeRenderableComponent: function removeRenderableComponent(t) {
      -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
    },
    prepareRenderableFrame: function prepareRenderableFrame(t) {
      this.checkLayerLimits(t);
    },
    checkTransparency: function checkTransparency() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
    },
    checkLayerLimits: function checkLayerLimits(t) {
      this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
    },
    renderRenderable: function renderRenderable() {
      var t,
          e = this.renderableComponents.length;

      for (t = 0; t < e; t += 1) {
        this.renderableComponents[t].renderFrame(this._isFirstFrame);
      }
    },
    sourceRectAtTime: function sourceRectAtTime() {
      return {
        top: 0,
        left: 0,
        width: 100,
        height: 100
      };
    },
    getLayerSize: function getLayerSize() {
      return 5 === this.data.ty ? {
        w: this.data.textData.width,
        h: this.data.textData.height
      } : {
        w: this.data.width,
        h: this.data.height
      };
    }
  }, extendPrototype([RenderableElement, createProxyFunction({
    initElement: function initElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
    },
    hide: function hide() {
      this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
    },
    show: function show() {
      this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
    },
    renderFrame: function renderFrame() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    },
    renderInnerContent: function renderInnerContent() {},
    prepareFrame: function prepareFrame(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
    },
    destroy: function destroy() {
      this.innerElem = null, this.destroyBaseElement();
    }
  })], RenderableDOMElement), SVGStyleData.prototype.reset = function () {
    this.d = "", this._mdf = !1;
  }, SVGShapeData.prototype.setAsAnimated = function () {
    this._isAnimated = !0;
  }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function (t, e, r) {
    this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
      k: 0
    }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
      k: 0
    }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
  }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
    var r = createElementID(),
        i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
    i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
    var s,
        a,
        n,
        o = [];

    for (n = 4 * e.g.p, a = 0; a < n; a += 4) {
      s = createNS("stop"), i.appendChild(s), o.push(s);
    }

    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o;
  }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
    if (this.g._hasOpacity && !this.g._collapsable) {
      var r,
          i,
          s,
          a = createNS("mask"),
          n = createNS("path");
      a.appendChild(n);
      var o = createElementID(),
          h = createElementID();
      a.setAttribute("id", h);
      var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
      l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
      var p = this.stops;

      for (i = 4 * t.g.p; i < s; i += 2) {
        (r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
      }

      n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n;
    }
  }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

  var SVGElementsRenderer = function () {
    var y = new Matrix(),
        g = new Matrix();

    function e(t, e, r) {
      (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
    }

    function r(t, e, r) {
      var i,
          s,
          a,
          n,
          o,
          h,
          l,
          p,
          m,
          f,
          c,
          d = e.styles.length,
          u = e.lvl;

      for (h = 0; h < d; h += 1) {
        if (n = e.sh._mdf || r, e.styles[h].lvl < u) {
          for (p = g.reset(), f = u - e.styles[h].lvl, c = e.transformers.length - 1; !n && 0 < f;) {
            n = e.transformers[c].mProps._mdf || n, f--, c--;
          }

          if (n) for (f = u - e.styles[h].lvl, c = e.transformers.length - 1; 0 < f;) {
            m = e.transformers[c].mProps.v.props, p.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), f--, c--;
          }
        } else p = y;

        if (s = (l = e.sh.paths)._length, n) {
          for (a = "", i = 0; i < s; i += 1) {
            (o = l.shapes[i]) && o._length && (a += buildShapeString(o, o._length, o.c, p));
          }

          e.caches[h] = a;
        } else a = e.caches[h];

        e.styles[h].d += !0 === t.hd ? "" : a, e.styles[h]._mdf = n || e.styles[h]._mdf;
      }
    }

    function i(t, e, r) {
      var i = e.style;
      (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v);
    }

    function s(t, e, r) {
      a(t, e, r), n(t, e, r);
    }

    function a(t, e, r) {
      var i,
          s,
          a,
          n,
          o,
          h = e.gf,
          l = e.g._hasOpacity,
          p = e.s.v,
          m = e.e.v;

      if (e.o._mdf || r) {
        var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
        e.style.pElem.setAttribute(f, e.o.v);
      }

      if (e.s._mdf || r) {
        var c = 1 === t.t ? "x1" : "cx",
            d = "x1" === c ? "y1" : "cy";
        h.setAttribute(c, p[0]), h.setAttribute(d, p[1]), l && !e.g._collapsable && (e.of.setAttribute(c, p[0]), e.of.setAttribute(d, p[1]));
      }

      if (e.g._cmdf || r) {
        i = e.cst;
        var u = e.g.c;

        for (a = i.length, s = 0; s < a; s += 1) {
          (n = i[s]).setAttribute("offset", u[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")");
        }
      }

      if (l && (e.g._omdf || r)) {
        var y = e.g.o;

        for (a = (i = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1) {
          n = i[s], e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"), n.setAttribute("stop-opacity", y[2 * s + 1]);
        }
      }

      if (1 === t.t) (e.e._mdf || r) && (h.setAttribute("x2", m[0]), h.setAttribute("y2", m[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", m[0]), e.of.setAttribute("y2", m[1])));else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
        o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
        var g = Math.atan2(m[1] - p[1], m[0] - p[0]),
            v = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
            b = Math.cos(g + e.a.v) * v + p[0],
            E = Math.sin(g + e.a.v) * v + p[1];
        h.setAttribute("fx", b), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", E));
      }
    }

    function n(t, e, r) {
      var i = e.style,
          s = e.d;
      s && (s._mdf || r) && s.dashStr && (i.pElem.setAttribute("stroke-dasharray", s.dashStr), i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v));
    }

    return {
      createRenderFunction: function createRenderFunction(t) {
        t.ty;

        switch (t.ty) {
          case "fl":
            return i;

          case "gf":
            return a;

          case "gs":
            return s;

          case "st":
            return n;

          case "sh":
          case "el":
          case "rc":
          case "sr":
            return r;

          case "tr":
            return e;
        }
      }
    };
  }();

  function ShapeTransformManager() {
    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
  }

  function CVShapeData(t, e, r, i) {
    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
    var s = 4;
    "rc" == e.ty ? s = 5 : "el" == e.ty ? s = 6 : "sr" == e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
    var a,
        n,
        o = r.length;

    for (a = 0; a < o; a += 1) {
      r[a].closed || (n = {
        transforms: i.addTransformSequence(r[a].transforms),
        trNodes: []
      }, this.styledShapes.push(n), r[a].elements.push(n));
    }
  }

  function BaseElement() {}

  function NullElement(t, e, r) {
    this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
  }

  function SVGBaseElement() {}

  function IShapeElement() {}

  function ITextElement() {}

  function ICompElement() {}

  function IImageElement(t, e, r) {
    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
      top: 0,
      left: 0,
      width: this.assetData.w,
      height: this.assetData.h
    };
  }

  function ISolidElement(t, e, r) {
    this.initElement(t, e, r);
  }

  function AudioElement(t, e, r) {
    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
    var i = this.globalData.getAssetsPath(this.assetData);
    this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
      _placeholder: !0
    };
  }

  function SVGCompElement(t, e, r) {
    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
      _placeholder: !0
    };
  }

  function SVGTextElement(t, e, r) {
    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
  }

  function SVGShapeElement(t, e, r) {
    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
  }

  function SVGTintFilter(t, e) {
    this.filterManager = e;
    var r = createNS("feColorMatrix");

    if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
      var i,
          s = createNS("feMerge");
      t.appendChild(s), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(i);
    }
  }

  function SVGFillFilter(t, e) {
    this.filterManager = e;
    var r = createNS("feColorMatrix");
    r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r;
  }

  function SVGGaussianBlurEffect(t, e) {
    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
    var r = createNS("feGaussianBlur");
    t.appendChild(r), this.feGaussianBlur = r;
  }

  function SVGStrokeEffect(t, e) {
    this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [];
  }

  function SVGTritoneFilter(t, e) {
    this.filterManager = e;
    var r = createNS("feColorMatrix");
    r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
    var i = createNS("feComponentTransfer");
    i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
    var s = createNS("feFuncR");
    s.setAttribute("type", "table"), i.appendChild(s), this.feFuncR = s;
    var a = createNS("feFuncG");
    a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a;
    var n = createNS("feFuncB");
    n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n;
  }

  function SVGProLevelsFilter(t, e) {
    this.filterManager = e;
    var r = this.filterManager.effectElements,
        i = createNS("feComponentTransfer");
    (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i));
  }

  function SVGDropShadowEffect(t, e) {
    var r = e.container.globalData.renderConfig.filterSize;
    t.setAttribute("x", r.x), t.setAttribute("y", r.y), t.setAttribute("width", r.width), t.setAttribute("height", r.height), this.filterManager = e;
    var i = createNS("feGaussianBlur");
    i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
    var s = createNS("feOffset");
    s.setAttribute("dx", "25"), s.setAttribute("dy", "0"), s.setAttribute("in", "drop_shadow_1"), s.setAttribute("result", "drop_shadow_2"), this.feOffset = s, t.appendChild(s);
    var a = createNS("feFlood");
    a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
    var n = createNS("feComposite");
    n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
    var o,
        h = createNS("feMerge");
    t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(o);
  }

  ShapeTransformManager.prototype = {
    addTransformSequence: function addTransformSequence(t) {
      var e,
          r = t.length,
          i = "_";

      for (e = 0; e < r; e += 1) {
        i += t[e].transform.key + "_";
      }

      var s = this.sequences[i];
      return s || (s = {
        transforms: [].concat(t),
        finalTransform: new Matrix(),
        _mdf: !1
      }, this.sequences[i] = s, this.sequenceList.push(s)), s;
    },
    processSequence: function processSequence(t, e) {
      for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e;) {
        if (t.transforms[i].transform.mProps._mdf) {
          a = !0;
          break;
        }

        i += 1;
      }

      if (a) for (t.finalTransform.reset(), i = s - 1; 0 <= i; i -= 1) {
        r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
      }
      t._mdf = a;
    },
    processSequences: function processSequences(t) {
      var e,
          r = this.sequenceList.length;

      for (e = 0; e < r; e += 1) {
        this.processSequence(this.sequenceList[e], t);
      }
    },
    getNewKey: function getNewKey() {
      return "_" + this.transform_key_count++;
    }
  }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
    checkMasks: function checkMasks() {
      if (!this.data.hasMask) return !1;

      for (var t = 0, e = this.data.masksProperties.length; t < e;) {
        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
        t += 1;
      }

      return !1;
    },
    initExpressions: function initExpressions() {
      this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
      var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
      this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);
    },
    setBlendMode: function setBlendMode() {
      var t = getBlendMode(this.data.bm);
      (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
    },
    initBaseData: function initBaseData(t, e, r) {
      this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    },
    getType: function getType() {
      return this.type;
    },
    sourceRectAtTime: function sourceRectAtTime() {}
  }, NullElement.prototype.prepareFrame = function (t) {
    this.prepareProperties(t, !0);
  }, NullElement.prototype.renderFrame = function () {}, NullElement.prototype.getBaseElement = function () {
    return null;
  }, NullElement.prototype.destroy = function () {}, NullElement.prototype.sourceRectAtTime = function () {}, NullElement.prototype.hide = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
    initRendererElement: function initRendererElement() {
      this.layerElement = createNS("g");
    },
    createContainerElements: function createContainerElements() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
      var t,
          e,
          r,
          i = null;

      if (this.data.td) {
        if (3 == this.data.td || 1 == this.data.td) {
          var s = createNS("mask");
          s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), i = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, s.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"));
        } else if (2 == this.data.td) {
          var a = createNS("mask");
          a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
          var n = createNS("g");
          a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
          var o = createNS("feComponentTransfer");
          o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
          var h = createNS("feFuncA");
          h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
          var l = createNS("rect");
          l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), i = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), n.appendChild(l), r.appendChild(this.layerElement), i = r, n.appendChild(r)), this.globalData.defs.appendChild(a);
        }
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;

      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
        var p = createNS("clipPath"),
            m = createNS("path");
        m.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var f = createElementID();

        if (p.setAttribute("id", f), p.appendChild(m), this.globalData.defs.appendChild(p), this.checkMasks()) {
          var c = createNS("g");
          c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), c.appendChild(this.layerElement), this.transformedElement = c, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")");
      }

      0 !== this.data.bm && this.setBlendMode();
    },
    renderElement: function renderElement() {
      this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
    },
    destroyBaseElement: function destroyBaseElement() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    },
    getBaseElement: function getBaseElement() {
      return this.data.hd ? null : this.baseElement;
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
    },
    setMatte: function setMatte(t) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")");
    }
  }, IShapeElement.prototype = {
    addShapeToModifiers: function addShapeToModifiers(t) {
      var e,
          r = this.shapeModifiers.length;

      for (e = 0; e < r; e += 1) {
        this.shapeModifiers[e].addShape(t);
      }
    },
    isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(t) {
      for (var e = this.shapeModifiers.length; 0 < e;) {
        if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
      }

      return !1;
    },
    renderModifiers: function renderModifiers() {
      if (this.shapeModifiers.length) {
        var t,
            e = this.shapes.length;

        for (t = 0; t < e; t += 1) {
          this.shapes[t].sh.reset();
        }

        for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1) {
          this.shapeModifiers[t].processShapes(this._isFirstFrame);
        }
      }
    },
    lcEnum: {
      1: "butt",
      2: "round",
      3: "square"
    },
    ljEnum: {
      1: "miter",
      2: "round",
      3: "bevel"
    },
    searchProcessedElement: function searchProcessedElement(t) {
      for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
        if (e[r].elem === t) return e[r].pos;
        r += 1;
      }

      return 0;
    },
    addProcessedElement: function addProcessedElement(t, e) {
      for (var r = this.processedElements, i = r.length; i;) {
        if (r[i -= 1].elem === t) return void (r[i].pos = e);
      }

      r.push(new ProcessedElement(t, e));
    },
    prepareFrame: function prepareFrame(t) {
      this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }
  }, ITextElement.prototype.initElement = function (t, e, r) {
    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
  }, ITextElement.prototype.prepareFrame = function (t) {
    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
  }, ITextElement.prototype.createPathShape = function (t, e) {
    var r,
        i,
        s = e.length,
        a = "";

    for (r = 0; r < s; r += 1) {
      i = e[r].ks.k, a += buildShapeString(i, i.i.length, !0, t);
    }

    return a;
  }, ITextElement.prototype.updateDocumentData = function (t, e) {
    this.textProperty.updateDocumentData(t, e);
  }, ITextElement.prototype.canResizeFont = function (t) {
    this.textProperty.canResizeFont(t);
  }, ITextElement.prototype.setMinimumFontSize = function (t) {
    this.textProperty.setMinimumFontSize(t);
  }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, r, i, s) {
    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
      case 1:
        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
        break;

      case 2:
        e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
    }

    e.translate(i, s, 0);
  }, ITextElement.prototype.buildColor = function (t) {
    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
  }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, r) {
    this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
  }, ICompElement.prototype.prepareFrame = function (t) {
    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
      if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;else {
        var e = this.tm.v;
        e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
      }
      var r,
          i = this.elements.length;

      for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; 0 <= r; r -= 1) {
        (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0));
      }
    }
  }, ICompElement.prototype.renderInnerContent = function () {
    var t,
        e = this.layers.length;

    for (t = 0; t < e; t += 1) {
      (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }
  }, ICompElement.prototype.setElements = function (t) {
    this.elements = t;
  }, ICompElement.prototype.getElements = function () {
    return this.elements;
  }, ICompElement.prototype.destroyElements = function () {
    var t,
        e = this.layers.length;

    for (t = 0; t < e; t += 1) {
      this.elements[t] && this.elements[t].destroy();
    }
  }, ICompElement.prototype.destroy = function () {
    this.destroyElements(), this.destroyBaseElement();
  }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
    var t = this.globalData.getAssetsPath(this.assetData);
    this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
  }, IImageElement.prototype.sourceRectAtTime = function () {
    return this.sourceRect;
  }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
    var t = createNS("rect");
    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
  }, AudioElement.prototype.prepareFrame = function (t) {
    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;else {
      var e = this.tm.v;
      this._currentTime = e;
    }
  }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || .1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
  }, AudioElement.prototype.show = function () {}, AudioElement.prototype.hide = function () {
    this.audio.pause(), this._isPlaying = !1;
  }, AudioElement.prototype.pause = function () {
    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
  }, AudioElement.prototype.resume = function () {
    this._canPlay = !0;
  }, AudioElement.prototype.setRate = function (t) {
    this.audio.rate(t);
  }, AudioElement.prototype.volume = function (t) {
    this.audio.volume(t);
  }, AudioElement.prototype.getBaseElement = function () {
    return null;
  }, AudioElement.prototype.destroy = function () {}, AudioElement.prototype.sourceRectAtTime = function () {}, AudioElement.prototype.initExpressions = function () {}, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function () {
    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
  }, SVGTextElement.prototype.buildTextContents = function (t) {
    for (var e = 0, r = t.length, i = [], s = ""; e < r;) {
      t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
    }

    return i.push(s), i;
  }, SVGTextElement.prototype.buildNewText = function () {
    var t,
        e,
        r = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
    var i = this.globalData.fontManager.getFontByName(r.f);
    if (i.fClass) this.layerElement.setAttribute("class", i.fClass);else {
      this.layerElement.setAttribute("font-family", i.fFamily);
      var s = r.fWeight,
          a = r.fStyle;
      this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
    }
    this.layerElement.setAttribute("aria-label", r.t);
    var n,
        o = r.l || [],
        h = !!this.globalData.fontManager.chars;
    e = o.length;
    var l,
        p = this.mHelper,
        m = "",
        f = this.data.singleShape,
        c = 0,
        d = 0,
        u = !0,
        y = r.tr / 1e3 * r.finalSize;

    if (!f || h || r.sz) {
      var g,
          v,
          b = this.textSpans.length;

      for (t = 0; t < e; t += 1) {
        h && f && 0 !== t || (n = t < b ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (c = -y, d += r.yOffset, d += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, c, d), c += o[t].l || 0, c += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
      }

      f && n && n.setAttribute("d", m);
    } else {
      var E = this.textContainer,
          x = "start";

      switch (r.j) {
        case 1:
          x = "end";
          break;

        case 2:
          x = "middle";
      }

      E.setAttribute("text-anchor", x), E.setAttribute("letter-spacing", y);
      var P = this.buildTextContents(r.finalText);

      for (e = P.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) {
        (n = this.textSpans[t] || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", d), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] = n, d += r.finalLineHeight;
      }

      this.layerElement.appendChild(E);
    }

    for (; t < this.textSpans.length;) {
      this.textSpans[t].style.display = "none", t += 1;
    }

    this._sizeChanged = !0;
  }, SVGTextElement.prototype.sourceRectAtTime = function (t) {
    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
      this._sizeChanged = !1;
      var e = this.layerElement.getBBox();
      this.bbox = {
        top: e.y,
        left: e.x,
        width: e.width,
        height: e.height
      };
    }

    return this.bbox;
  }, SVGTextElement.prototype.renderInnerContent = function () {
    if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
      var t, e;
      this._sizeChanged = !0;
      var r,
          i,
          s = this.textAnimator.renderedLetters,
          a = this.textProperty.currentData.l;

      for (e = a.length, t = 0; t < e; t += 1) {
        a[t].n || (r = s[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc));
      }
    }
  }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {}, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function () {}, SVGShapeElement.prototype.createContent = function () {
    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
  }, SVGShapeElement.prototype.filterUniqueShapes = function () {
    var t,
        e,
        r,
        i,
        s = this.shapes.length,
        a = this.stylesList.length,
        n = [],
        o = !1;

    for (r = 0; r < a; r += 1) {
      for (i = this.stylesList[r], o = !1, t = n.length = 0; t < s; t += 1) {
        -1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
      }

      1 < n.length && o && this.setShapesAsAnimated(n);
    }
  }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
    var e,
        r = t.length;

    for (e = 0; e < r; e += 1) {
      t[e].setAsAnimated();
    }
  }, SVGShapeElement.prototype.createStyleElement = function (t, e) {
    var r,
        i = new SVGStyleData(t, e),
        s = i.pElem;
    if ("st" === t.ty) r = new SVGStrokeStyleData(this, t, i);else if ("fl" === t.ty) r = new SVGFillStyleData(this, t, i);else if ("gf" === t.ty || "gs" === t.ty) {
      r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"));
    }
    return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), s.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
  }, SVGShapeElement.prototype.createGroupElement = function (t) {
    var e = new ShapeGroupData();
    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
  }, SVGShapeElement.prototype.createTransformElement = function (t, e) {
    var r = TransformPropertyFactory.getTransformProperty(this, t, this),
        i = new SVGTransformData(r, r.o, e);
    return this.addToAnimatedContents(t, i), i;
  }, SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
    var i = 4;
    "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
    var s = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
    return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
  }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
    for (var r = 0, i = this.animatedContents.length; r < i;) {
      if (this.animatedContents[r].element === e) return;
      r += 1;
    }

    this.animatedContents.push({
      fn: SVGElementsRenderer.createRenderFunction(t),
      element: e,
      data: t
    });
  }, SVGShapeElement.prototype.setElementStyles = function (t) {
    var e,
        r = t.styles,
        i = this.stylesList.length;

    for (e = 0; e < i; e += 1) {
      this.stylesList[e].closed || r.push(this.stylesList[e]);
    }
  }, SVGShapeElement.prototype.reloadShapes = function () {
    this._isFirstFrame = !0;
    var t,
        e = this.itemsData.length;

    for (t = 0; t < e; t += 1) {
      this.prevViewData[t] = this.itemsData[t];
    }

    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) {
      this.dynamicProperties[t].getValue();
    }

    this.renderModifiers();
  }, SVGShapeElement.prototype.searchShapes = function (t, e, r, i, s, a, n) {
    var o,
        h,
        l,
        p,
        m,
        f,
        c = [].concat(a),
        d = t.length - 1,
        u = [],
        y = [];

    for (o = d; 0 <= o; o -= 1) {
      if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && i.appendChild(e[o].style.pElem), u.push(e[o].style);else if ("gr" == t[o].ty) {
        if (f) for (l = e[o].it.length, h = 0; h < l; h += 1) {
          e[o].prevViewData[h] = e[o].it[h];
        } else e[o] = this.createGroupElement(t[o]);
        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && i.appendChild(e[o].gr);
      } else "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, c.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty || "pb" == t[o].ty ? (f ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), y.push(m)) : "rp" == t[o].ty && (f ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty), (e[o] = m).init(this, t, o, e), this.shapeModifiers.push(m), n = !1), y.push(m));
      this.addProcessedElement(t[o], o + 1);
    }

    for (d = u.length, o = 0; o < d; o += 1) {
      u[o].closed = !0;
    }

    for (d = y.length, o = 0; o < d; o += 1) {
      y[o].closed = !0;
    }
  }, SVGShapeElement.prototype.renderInnerContent = function () {
    this.renderModifiers();
    var t,
        e = this.stylesList.length;

    for (t = 0; t < e; t += 1) {
      this.stylesList[t].reset();
    }

    for (this.renderShape(), t = 0; t < e; t += 1) {
      (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }
  }, SVGShapeElement.prototype.renderShape = function () {
    var t,
        e,
        r = this.animatedContents.length;

    for (t = 0; t < r; t += 1) {
      e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
    }
  }, SVGShapeElement.prototype.destroy = function () {
    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
  }, SVGTintFilter.prototype.renderFrame = function (t) {
    if (t || this.filterManager._mdf) {
      var e = this.filterManager.effectElements[0].p.v,
          r = this.filterManager.effectElements[1].p.v,
          i = this.filterManager.effectElements[2].p.v / 100;
      this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
    }
  }, SVGFillFilter.prototype.renderFrame = function (t) {
    if (t || this.filterManager._mdf) {
      var e = this.filterManager.effectElements[2].p.v,
          r = this.filterManager.effectElements[6].p.v;
      this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
    }
  }, SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
    if (t || this.filterManager._mdf) {
      var e = .3 * this.filterManager.effectElements[0].p.v,
          r = this.filterManager.effectElements[1].p.v,
          i = 3 == r ? 0 : e,
          s = 2 == r ? 0 : e;
      this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
      var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
      this.feGaussianBlur.setAttribute("edgeMode", a);
    }
  }, SVGStrokeEffect.prototype.initialize = function () {
    var t,
        e,
        r,
        i,
        s = this.elem.layerElement.children || this.elem.layerElement.childNodes;

    for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) {
      t = createNS("path"), e.appendChild(t), this.paths.push({
        p: t,
        m: r
      });
    }

    if (3 === this.filterManager.effectElements[10].p.v) {
      var a = createNS("mask"),
          n = createElementID();
      a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
      var o = createNS("g");

      for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0];) {
        o.appendChild(s[0]);
      }

      this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff");
    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
      if (2 === this.filterManager.effectElements[10].p.v) for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) {
        this.elem.layerElement.removeChild(s[0]);
      }
      this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
    }

    this.initialized = !0, this.pathMasker = e;
  }, SVGStrokeEffect.prototype.renderFrame = function (t) {
    this.initialized || this.initialize();
    var e,
        r,
        i,
        s = this.paths.length;

    for (e = 0; e < s; e += 1) {
      if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
        var a;

        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
          var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              h = i.getTotalLength();
          a = "0 0 0 " + h * n + " ";
          var l,
              p = h * (o - n),
              m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
              f = Math.floor(p / m);

          for (l = 0; l < f; l += 1) {
            a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
          }

          a += "0 " + 10 * h + " 0 0";
        } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;

        i.setAttribute("stroke-dasharray", a);
      }
    }

    if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
      var c = this.filterManager.effectElements[3].p.v;
      this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")");
    }
  }, SVGTritoneFilter.prototype.renderFrame = function (t) {
    if (t || this.filterManager._mdf) {
      var e = this.filterManager.effectElements[0].p.v,
          r = this.filterManager.effectElements[1].p.v,
          i = this.filterManager.effectElements[2].p.v,
          s = i[0] + " " + r[0] + " " + e[0],
          a = i[1] + " " + r[1] + " " + e[1],
          n = i[2] + " " + r[2] + " " + e[2];
      this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
    }
  }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
    var r = createNS(t);
    return r.setAttribute("type", "table"), e.appendChild(r), r;
  }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, i, s) {
    for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
      length: 256
    }), m = 0, f = s - i, c = e - t; o <= 256;) {
      n = (a = o / 256) <= h ? c < 0 ? s : i : l <= a ? c < 0 ? i : s : i + f * Math.pow((a - t) / c, 1 / r), p[m++] = n, o += 256 / 255;
    }

    return p.join(" ");
  }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
    if (t || this.filterManager._mdf) {
      var e,
          r = this.filterManager.effectElements;
      this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
    }
  }, SVGDropShadowEffect.prototype.renderFrame = function (t) {
    if (t || this.filterManager._mdf) {
      if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
        var e = this.filterManager.effectElements[0].p.v;
        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
      }

      if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
        var r = this.filterManager.effectElements[3].p.v,
            i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
            s = r * Math.cos(i),
            a = r * Math.sin(i);
        this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
      }
    }
  };
  var _svgMatteSymbols = [];

  function SVGMatte3Effect(t, e, r) {
    this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = r).matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
  }

  function SVGEffects(t) {
    var e,
        r,
        i = t.data.ef ? t.data.ef.length : 0,
        s = createElementID(),
        a = filtersFactory.createFilter(s),
        n = 0;

    for (this.filters = [], e = 0; e < i; e += 1) {
      r = null, 20 === t.data.ef[e].ty ? (n += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
    }

    n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
  }

  function CVContextData() {
    this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1;
    var t;

    for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) {
      this.saved[t] = createTypedArray("float32", 16);
    }

    this._length = 15;
  }

  function CVBaseElement() {}

  function CVImageElement(t, e, r) {
    this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, r);
  }

  function CVCompElement(t, e, r) {
    this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
      _placeholder: !0
    };
  }

  function CVMaskElement(t, e) {
    this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
    var r,
        i = this.masksProperties.length,
        s = !1;

    for (r = 0; r < i; r++) {
      "n" !== this.masksProperties[r].mode && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
    }

    (this.hasMasks = s) && this.element.addRenderableComponent(this);
  }

  function CVShapeElement(t, e, r) {
    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
  }

  function CVSolidElement(t, e, r) {
    this.initElement(t, e, r);
  }

  function CVTextElement(t, e, r) {
    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
      fill: "rgba(0,0,0,0)",
      stroke: "rgba(0,0,0,0)",
      sWidth: 0,
      fValue: ""
    }, this.initElement(t, e, r);
  }

  function CVEffects() {}

  function HBaseElement(t, e, r) {}

  function HSolidElement(t, e, r) {
    this.initElement(t, e, r);
  }

  function HCompElement(t, e, r) {
    this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
      _placeholder: !0
    };
  }

  function HShapeElement(t, e, r) {
    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
      x: 999999,
      y: -999999,
      h: 0,
      w: 0
    };
  }

  function HTextElement(t, e, r) {
    this.textSpans = [], this.textPaths = [], this.currentBBox = {
      x: 999999,
      y: -999999,
      h: 0,
      w: 0
    }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r);
  }

  function HImageElement(t, e, r) {
    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
  }

  function HCameraElement(t, e, r) {
    this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
    var i = PropertyFactory.getProp;

    if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
      var s,
          a = t.ks.or.k.length;

      for (s = 0; s < a; s += 1) {
        t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
      }
    }

    this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = {
      mProp: this
    };
  }

  function HEffects() {}

  SVGMatte3Effect.prototype.findSymbol = function (t) {
    for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
      if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
      e += 1;
    }

    return null;
  }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
    var r = t.layerElement.parentNode;

    if (r) {
      for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;) {
        a += 1;
      }

      a <= n - 2 && (i = s[a + 1]);
      var o = createNS("use");
      o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o);
    }
  }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
    if (!this.findSymbol(e)) {
      var r = createElementID(),
          i = createNS("mask");
      i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
      var s = t.globalData.defs;
      s.appendChild(i);
      var a = createNS("symbol");
      a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
      var n = createNS("use");
      n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show();
    }

    t.setMatte(e.layerId);
  }, SVGMatte3Effect.prototype.initialize = function () {
    for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) {
      e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
    }

    this.initialized = !0;
  }, SVGMatte3Effect.prototype.renderFrame = function () {
    this.initialized || this.initialize();
  }, SVGEffects.prototype.renderFrame = function (t) {
    var e,
        r = this.filters.length;

    for (e = 0; e < r; e += 1) {
      this.filters[e].renderFrame(t);
    }
  }, CVContextData.prototype.duplicate = function () {
    var t = 2 * this._length,
        e = this.savedOp;
    this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
    var r = 0;

    for (r = this._length; r < t; r += 1) {
      this.saved[r] = createTypedArray("float32", 16);
    }

    this._length = t;
  }, CVContextData.prototype.reset = function () {
    this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
  }, CVBaseElement.prototype = {
    createElements: function createElements() {},
    initRendererElement: function initRendererElement() {},
    createContainerElements: function createContainerElements() {
      this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
    },
    createContent: function createContent() {},
    setBlendMode: function setBlendMode() {
      var t = this.globalData;

      if (t.blendMode !== this.data.bm) {
        t.blendMode = this.data.bm;
        var e = getBlendMode(this.data.bm);
        t.canvasContext.globalCompositeOperation = e;
      }
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new CVMaskElement(this.data, this);
    },
    hideElement: function hideElement() {
      this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
    },
    showElement: function showElement() {
      this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
    },
    renderFrame: function renderFrame() {
      if (!this.hidden && !this.data.hd) {
        this.renderTransform(), this.renderRenderable(), this.setBlendMode();
        var t = 0 === this.data.ty;
        this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
      }
    },
    destroy: function destroy() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    },
    mHelper: new Matrix()
  }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
      var t = createTag("canvas");
      t.width = this.assetData.w, t.height = this.assetData.h;
      var e,
          r,
          i = t.getContext("2d"),
          s = this.img.width,
          a = this.img.height,
          n = s / a,
          o = this.assetData.w / this.assetData.h,
          h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
      o < n && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o, i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
    }
  }, CVImageElement.prototype.renderInnerContent = function (t) {
    this.canvasContext.drawImage(this.img, 0, 0);
  }, CVImageElement.prototype.destroy = function () {
    this.img = null;
  }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
    var t,
        e = this.canvasContext;

    for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; 0 <= t; t -= 1) {
      (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }
  }, CVCompElement.prototype.destroy = function () {
    var t;

    for (t = this.layers.length - 1; 0 <= t; t -= 1) {
      this.elements[t] && this.elements[t].destroy();
    }

    this.layers = null, this.elements = null;
  }, CVMaskElement.prototype.renderFrame = function () {
    if (this.hasMasks) {
      var t,
          e,
          r,
          i,
          s = this.element.finalTransform.mat,
          a = this.element.canvasContext,
          n = this.masksProperties.length;

      for (a.beginPath(), t = 0; t < n; t++) {
        if ("n" !== this.masksProperties[t].mode) {
          this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
          var o,
              h = i._length;

          for (o = 1; o < h; o++) {
            r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
          }

          r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
        }
      }

      this.element.globalData.renderer.save(!0), a.clip();
    }
  }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
    this.element = null;
  }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
    opacity: 1,
    _opMdf: !1
  }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
  }, CVShapeElement.prototype.createStyleElement = function (t, e) {
    var r = {
      data: t,
      type: t.ty,
      preTransforms: this.transformsManager.addTransformSequence(e),
      transforms: [],
      elements: [],
      closed: !0 === t.hd
    },
        i = {};

    if ("fl" == t.ty || "st" == t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
      k: 0
    }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
      k: 0
    }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
      if (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
        var s = new DashProperty(this, t.d, "canvas", this);
        i.d = s, i.d.k || (r.da = i.d.dashArray, r["do"] = i.d.dashoffset[0]);
      }
    } else r.r = 2 === t.r ? "evenodd" : "nonzero";

    return this.stylesList.push(r), i.style = r, i;
  }, CVShapeElement.prototype.createGroupElement = function (t) {
    return {
      it: [],
      prevViewData: []
    };
  }, CVShapeElement.prototype.createTransformElement = function (t) {
    return {
      transform: {
        opacity: 1,
        _opMdf: !1,
        key: this.transformsManager.getNewKey(),
        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
      }
    };
  }, CVShapeElement.prototype.createShapeElement = function (t) {
    var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
    return this.shapes.push(e), this.addShapeToModifiers(e), e;
  }, CVShapeElement.prototype.reloadShapes = function () {
    this._isFirstFrame = !0;
    var t,
        e = this.itemsData.length;

    for (t = 0; t < e; t += 1) {
      this.prevViewData[t] = this.itemsData[t];
    }

    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) {
      this.dynamicProperties[t].getValue();
    }

    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
  }, CVShapeElement.prototype.addTransformToStyleList = function (t) {
    var e,
        r = this.stylesList.length;

    for (e = 0; e < r; e += 1) {
      this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }
  }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
    var t,
        e = this.stylesList.length;

    for (t = 0; t < e; t += 1) {
      this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }
  }, CVShapeElement.prototype.closeStyles = function (t) {
    var e,
        r = t.length;

    for (e = 0; e < r; e += 1) {
      t[e].closed = !0;
    }
  }, CVShapeElement.prototype.searchShapes = function (t, e, r, i, s) {
    var a,
        n,
        o,
        h,
        l,
        p,
        m = t.length - 1,
        f = [],
        c = [],
        d = [].concat(s);

    for (a = m; 0 <= a; a -= 1) {
      if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i, "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);else if ("gr" == t[a].ty) {
        if (h) for (o = e[a].it.length, n = 0; n < o; n += 1) {
          e[a].prevViewData[n] = e[a].it[n];
        } else e[a] = this.createGroupElement(t[a]);
        this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d);
      } else "tr" == t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty || "pb" == t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" == t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), (e[a] = l).init(this, t, a, e), this.shapeModifiers.push(l), i = !1), c.push(l));
      this.addProcessedElement(t[a], a + 1);
    }

    for (this.removeTransformFromStyleList(), this.closeStyles(f), m = c.length, a = 0; a < m; a += 1) {
      c[a].closed = !0;
    }
  }, CVShapeElement.prototype.renderInnerContent = function () {
    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
  }, CVShapeElement.prototype.renderShapeTransform = function (t, e) {
    (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
  }, CVShapeElement.prototype.drawLayer = function () {
    var t,
        e,
        r,
        i,
        s,
        a,
        n,
        o,
        h,
        l = this.stylesList.length,
        p = this.globalData.renderer,
        m = this.globalData.canvasContext;

    for (t = 0; t < l; t += 1) {
      if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
        for (p.save(), a = h.elements, "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd, m.lineWidth = h.wi, m.lineCap = h.lc, m.lineJoin = h.lj, m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && m.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
          for ("st" !== o && "gs" !== o || (m.beginPath(), h.da && (m.setLineDash(h.da), m.lineDashOffset = h["do"])), s = (n = a[e].trNodes).length, i = 0; i < s; i += 1) {
            "m" == n[i].t ? m.moveTo(n[i].p[0], n[i].p[1]) : "c" == n[i].t ? m.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : m.closePath();
          }

          "st" !== o && "gs" !== o || (m.stroke(), h.da && m.setLineDash(this.dashResetter));
        }

        "st" !== o && "gs" !== o && m.fill(h.r), p.restore();
      }
    }
  }, CVShapeElement.prototype.renderShape = function (t, e, r, i) {
    var s, a;

    for (a = t, s = e.length - 1; 0 <= s; s -= 1) {
      "tr" == e[s].ty ? (a = r[s].transform, this.renderShapeTransform(t, a)) : "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], r[s]) : "fl" == e[s].ty ? this.renderFill(e[s], r[s], a) : "st" == e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" == e[s].ty || "gs" == e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" == e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
    }

    i && this.drawLayer();
  }, CVShapeElement.prototype.renderStyledShape = function (t, e) {
    if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
      var r,
          i,
          s,
          a = t.trNodes,
          n = e.paths,
          o = n._length;
      a.length = 0;
      var h = t.transforms.finalTransform;

      for (s = 0; s < o; s += 1) {
        var l = n.shapes[s];

        if (l && l.v) {
          for (i = l._length, r = 1; r < i; r += 1) {
            1 === r && a.push({
              t: "m",
              p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
            }), a.push({
              t: "c",
              pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
            });
          }

          1 === i && a.push({
            t: "m",
            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
          }), l.c && i && (a.push({
            t: "c",
            pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
          }), a.push({
            t: "z"
          }));
        }
      }

      t.trNodes = a;
    }
  }, CVShapeElement.prototype.renderPath = function (t, e) {
    if (!0 !== t.hd && t._shouldRender) {
      var r,
          i = e.styledShapes.length;

      for (r = 0; r < i; r += 1) {
        this.renderStyledShape(e.styledShapes[r], e.sh);
      }
    }
  }, CVShapeElement.prototype.renderFill = function (t, e, r) {
    var i = e.style;
    (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
  }, CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
    var i = e.style;

    if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
      var s = this.globalData.canvasContext,
          a = e.s.v,
          n = e.e.v;
      if (1 === t.t) f = s.createLinearGradient(a[0], a[1], n[0], n[1]);else var o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)),
          h = Math.atan2(n[1] - a[1], n[0] - a[0]),
          l = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
          p = Math.cos(h + e.a.v) * l + a[0],
          m = Math.sin(h + e.a.v) * l + a[1],
          f = s.createRadialGradient(p, m, 0, a[0], a[1], o);
      var c,
          d = t.g.p,
          u = e.g.c,
          y = 1;

      for (c = 0; c < d; c += 1) {
        e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * c + 1]), f.addColorStop(u[4 * c] / 100, "rgba(" + u[4 * c + 1] + "," + u[4 * c + 2] + "," + u[4 * c + 3] + "," + y + ")");
      }

      i.grd = f;
    }

    i.coOp = e.o.v * r.opacity;
  }, CVShapeElement.prototype.renderStroke = function (t, e, r) {
    var i = e.style,
        s = e.d;
    s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i["do"] = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
  }, CVShapeElement.prototype.destroy = function () {
    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
  }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
    var t = this.canvasContext;
    t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
  }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
    var t = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
    var e = !1;
    t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
    var r = !1;
    t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
    var i,
        s,
        a = this.globalData.fontManager.getFontByName(t.f),
        n = t.l,
        o = this.mHelper;
    this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
    var h,
        l,
        p,
        m,
        f,
        c,
        d,
        u,
        y,
        g,
        v = this.data.singleShape,
        b = t.tr / 1e3 * t.finalSize,
        E = 0,
        x = 0,
        P = !0,
        S = 0;

    for (i = 0; i < s; i += 1) {
      for (l = (h = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), v && n[i].n && (E = -b, x += t.yOffset, x += P ? 1 : 0, P = !1), d = (f = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, n[i].line, E, x), y = createSizedArray(d), c = 0; c < d; c += 1) {
        for (m = f[c].ks.k.i.length, u = f[c].ks.k, g = [], p = 1; p < m; p += 1) {
          1 == p && g.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
        }

        g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y[c] = g;
      }

      v && (E += n[i].l, E += b), this.textSpans[S] ? this.textSpans[S].elem = y : this.textSpans[S] = {
        elem: y
      }, S += 1;
    }
  }, CVTextElement.prototype.renderInnerContent = function () {
    var t,
        e,
        r,
        i,
        s,
        a,
        n = this.canvasContext;
    this.finalTransform.mat.props;
    n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    var o,
        h = this.textAnimator.renderedLetters,
        l = this.textProperty.currentData.l;
    e = l.length;
    var p,
        m,
        f = null,
        c = null,
        d = null;

    for (t = 0; t < e; t += 1) {
      if (!l[t].n) {
        if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
          for (o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1) {
            for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) {
              this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
            }
          }

          this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
        }

        if (this.stroke) {
          for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1) {
            for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) {
              this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
            }
          }

          this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
        }

        o && this.globalData.renderer.restore();
      }
    }
  }, CVEffects.prototype.renderFrame = function () {}, HBaseElement.prototype = {
    checkBlendMode: function checkBlendMode() {},
    initRendererElement: function initRendererElement() {
      this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
    },
    createContainerElements: function createContainerElements() {
      this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
    },
    renderElement: function renderElement() {
      this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v);
    },
    renderFrame: function renderFrame() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    },
    destroy: function destroy() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    },
    addEffects: function addEffects() {},
    setMatte: function setMatte() {}
  }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
    var t;
    this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
  }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
  }, HCompElement.prototype.addTo3dContainer = function (t, e) {
    for (var r, i = 0; i < e;) {
      this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
    }

    r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
  }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
    var t;
    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;else {
      t = createNS("svg");
      var e = this.comp.data ? this.comp.data : this.globalData.compSize;
      t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
    }
    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
  }, HShapeElement.prototype.getTransformedPoint = function (t, e) {
    var r,
        i = t.length;

    for (r = 0; r < i; r += 1) {
      e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
    }

    return e;
  }, HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
    var r,
        i,
        s,
        a,
        n,
        o = t.sh.v,
        h = t.transformers,
        l = o._length;

    if (!(l <= 1)) {
      for (r = 0; r < l - 1; r += 1) {
        i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, s, a, n, e);
      }

      o.c && (i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, s, a, n, e));
    }
  }, HShapeElement.prototype.checkBounds = function (t, e, r, i, s) {
    this.getBoundsOfCurve(t, e, r, i);
    var a = this.shapeBoundingBox;
    s.x = bm_min(a.left, s.x), s.xMax = bm_max(a.right, s.xMax), s.y = bm_min(a.top, s.y), s.yMax = bm_max(a.bottom, s.yMax);
  }, HShapeElement.prototype.shapeBoundingBox = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }, HShapeElement.prototype.tempBoundingBox = {
    x: 0,
    xMax: 0,
    y: 0,
    yMax: 0,
    width: 0,
    height: 0
  }, HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
    for (var s, a, n, o, h, l, p, m = [[t[0], i[0]], [t[1], i[1]]], f = 0; f < 2; ++f) {
      if (a = 6 * t[f] - 12 * e[f] + 6 * r[f], s = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 !== (s |= 0)) (h = a * a - 4 * n * s) < 0 || (0 < (l = (-a + bm_sqrt(h)) / (2 * s)) && l < 1 && m[f].push(this.calculateF(l, t, e, r, i, f)), 0 < (p = (-a - bm_sqrt(h)) / (2 * s)) && p < 1 && m[f].push(this.calculateF(p, t, e, r, i, f)));else {
        if (0 === a) continue;
        0 < (o = -n / a) && o < 1 && m[f].push(this.calculateF(o, t, e, r, i, f));
      }
    }

    this.shapeBoundingBox.left = bm_min.apply(null, m[0]), this.shapeBoundingBox.top = bm_min.apply(null, m[1]), this.shapeBoundingBox.right = bm_max.apply(null, m[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, m[1]);
  }, HShapeElement.prototype.calculateF = function (t, e, r, i, s, a) {
    return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bm_pow(t, 2) * i[a] + bm_pow(t, 3) * s[a];
  }, HShapeElement.prototype.calculateBoundingBox = function (t, e) {
    var r,
        i = t.length;

    for (r = 0; r < i; r += 1) {
      t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e);
    }
  }, HShapeElement.prototype.currentBoxContains = function (t) {
    return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
  }, HShapeElement.prototype.renderInnerContent = function () {
    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
      var t = this.tempBoundingBox,
          e = 999999;
      if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
      var r = !1;
      this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
    }
  }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
    if (this.isMasked = this.checkMasks(), this.isMasked) {
      this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
      var t = createNS("g");
      this.maskedElement.appendChild(t), this.innerElem = t;
    } else this.renderType = "html", this.innerElem = this.layerElement;

    this.checkParenting();
  }, HTextElement.prototype.buildNewText = function () {
    var t = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
    var e = this.innerElem.style;
    e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
    var r,
        i,
        s = this.globalData.fontManager.getFontByName(t.f);
    if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;else {
      e.fontFamily = s.fFamily;
      var a = t.fWeight,
          n = t.fStyle;
      e.fontStyle = n, e.fontWeight = a;
    }
    var o,
        h,
        l,
        p = t.l;
    i = p.length;
    var m,
        f = this.mHelper,
        c = "",
        d = 0;

    for (r = 0; r < i; r += 1) {
      if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? l = (h = this.textSpans[d]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (l = createNS("svg")).appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (h = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(h = createTag("span")), styleDiv(o = createTag("span")), h.appendChild(o)), this.globalData.fontManager.chars) {
        var u,
            y = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
        if (u = y ? y.data : null, f.reset(), u && u.shapes && (m = u.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), c = this.createPathShape(f, m), o.setAttribute("d", c)), this.isMasked) this.innerElem.appendChild(o);else {
          if (this.innerElem.appendChild(h), u && u.shapes) {
            document.body.appendChild(l);
            var g = l.getBBox();
            l.setAttribute("width", g.width + 2), l.setAttribute("height", g.height + 2), l.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), l.style.transform = l.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", p[r].yOffset = g.y - 1;
          } else l.setAttribute("width", 1), l.setAttribute("height", 1);

          h.appendChild(l);
        }
      } else o.textContent = p[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");

      this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = h, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1;
    }

    for (; d < this.textSpans.length;) {
      this.textSpans[d].style.display = "none", d += 1;
    }
  }, HTextElement.prototype.renderInnerContent = function () {
    if (this.data.singleShape) {
      if (!this._isFirstFrame && !this.lettersChangedFlag) return;
      this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)");
    }

    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
      var t,
          e,
          r,
          i,
          s,
          a = 0,
          n = this.textAnimator.renderedLetters,
          o = this.textProperty.currentData.l;

      for (e = o.length, t = 0; t < e; t += 1) {
        o[t].n ? a += 1 : (i = this.textSpans[t], s = this.textPaths[t], r = n[a], a += 1, r._mdf.m && (this.isMasked ? i.setAttribute("transform", r.m) : i.style.transform = i.style.webkitTransform = r.m), i.style.opacity = r.o, r.sw && r._mdf.sw && s.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && s.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (s.setAttribute("fill", r.fc), s.style.color = r.fc));
      }

      if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
        var h = this.innerElem.getBBox();
        this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height));
        this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)");
      }
    }
  }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
    var t = this.globalData.getAssetsPath(this.assetData),
        e = new Image();
    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
  }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
    var t,
        e,
        r = this.comp.threeDElements.length;

    for (t = 0; t < r; t += 1) {
      "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)");
    }
  }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
    var t,
        e,
        r = this._isFirstFrame;
    if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) {
      r = this.hierarchy[t].finalTransform.mProp._mdf || r;
    }

    if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
      if (this.mat.reset(), this.hierarchy) for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
        var i = this.hierarchy[t].finalTransform.mProp;
        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
      }

      if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
        var s;
        s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
        var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
            n = [s[0] / a, s[1] / a, s[2] / a],
            o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
            h = Math.atan2(n[1], o),
            l = Math.atan2(n[0], -n[2]);
        this.mat.rotateY(l).rotateX(-h);
      }

      this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
      var p = !this._prevMat.equals(this.mat);

      if ((p || this.pe._mdf) && this.comp.threeDElements) {
        var m;

        for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) {
          "3d" === (m = this.comp.threeDElements[t]).type && (p && (m.container.style.transform = m.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (m.perspectiveElem.style.perspective = m.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
        }

        this.mat.clone(this._prevMat);
      }
    }

    this._isFirstFrame = !1;
  }, HCameraElement.prototype.prepareFrame = function (t) {
    this.prepareProperties(t, !0);
  }, HCameraElement.prototype.destroy = function () {}, HCameraElement.prototype.getBaseElement = function () {
    return null;
  }, HEffects.prototype.renderFrame = function () {};

  var animationManager = function () {
    var t = {},
        s = [],
        i = 0,
        a = 0,
        n = 0,
        o = !0,
        h = !1;

    function r(t) {
      for (var e = 0, r = t.target; e < a;) {
        s[e].animation === r && (s.splice(e, 1), e -= 1, a -= 1, r.isPaused || m()), e += 1;
      }
    }

    function l(t, e) {
      if (!t) return null;

      for (var r = 0; r < a;) {
        if (s[r].elem == t && null !== s[r].elem) return s[r].animation;
        r += 1;
      }

      var i = new AnimationItem();
      return f(i, t), i.setData(t, e), i;
    }

    function p() {
      n += 1, d();
    }

    function m() {
      n -= 1;
    }

    function f(t, e) {
      t.addEventListener("destroy", r), t.addEventListener("_active", p), t.addEventListener("_idle", m), s.push({
        elem: e,
        animation: t
      }), a += 1;
    }

    function c(t) {
      var e,
          r = t - i;

      for (e = 0; e < a; e += 1) {
        s[e].animation.advanceTime(r);
      }

      i = t, n && !h ? window.requestAnimationFrame(c) : o = !0;
    }

    function e(t) {
      i = t, window.requestAnimationFrame(c);
    }

    function d() {
      !h && n && o && (window.requestAnimationFrame(e), o = !1);
    }

    return t.registerAnimation = l, t.loadAnimation = function (t) {
      var e = new AnimationItem();
      return f(e, null), e.setParams(t), e;
    }, t.setSpeed = function (t, e) {
      var r;

      for (r = 0; r < a; r += 1) {
        s[r].animation.setSpeed(t, e);
      }
    }, t.setDirection = function (t, e) {
      var r;

      for (r = 0; r < a; r += 1) {
        s[r].animation.setDirection(t, e);
      }
    }, t.play = function (t) {
      var e;

      for (e = 0; e < a; e += 1) {
        s[e].animation.play(t);
      }
    }, t.pause = function (t) {
      var e;

      for (e = 0; e < a; e += 1) {
        s[e].animation.pause(t);
      }
    }, t.stop = function (t) {
      var e;

      for (e = 0; e < a; e += 1) {
        s[e].animation.stop(t);
      }
    }, t.togglePause = function (t) {
      var e;

      for (e = 0; e < a; e += 1) {
        s[e].animation.togglePause(t);
      }
    }, t.searchAnimations = function (t, e, r) {
      var i,
          s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
          a = s.length;

      for (i = 0; i < a; i += 1) {
        r && s[i].setAttribute("data-bm-type", r), l(s[i], t);
      }

      if (e && 0 === a) {
        r || (r = "svg");
        var n = document.getElementsByTagName("body")[0];
        n.innerText = "";
        var o = createTag("div");
        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), l(o, t);
      }
    }, t.resize = function () {
      var t;

      for (t = 0; t < a; t += 1) {
        s[t].animation.resize();
      }
    }, t.goToAndStop = function (t, e, r) {
      var i;

      for (i = 0; i < a; i += 1) {
        s[i].animation.goToAndStop(t, e, r);
      }
    }, t.destroy = function (t) {
      var e;

      for (e = a - 1; 0 <= e; e -= 1) {
        s[e].animation.destroy(t);
      }
    }, t.freeze = function () {
      h = !0;
    }, t.unfreeze = function () {
      h = !1, d();
    }, t.setVolume = function (t, e) {
      var r;

      for (r = 0; r < a; r += 1) {
        s[r].animation.setVolume(t, e);
      }
    }, t.mute = function (t) {
      var e;

      for (e = 0; e < a; e += 1) {
        s[e].animation.mute(t);
      }
    }, t.unmute = function (t) {
      var e;

      for (e = 0; e < a; e += 1) {
        s[e].animation.unmute(t);
      }
    }, t.getRegisteredAnimations = function () {
      var t,
          e = s.length,
          r = [];

      for (t = 0; t < e; t += 1) {
        r.push(s[t].animation);
      }

      return r;
    }, t;
  }(),
      AnimationItem = function AnimationItem() {
    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory();
  };

  extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) {
    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
    var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";

    switch (e) {
      case "canvas":
        this.renderer = new CanvasRenderer(this, t.rendererSettings);
        break;

      case "svg":
        this.renderer = new SVGRenderer(this, t.rendererSettings);
        break;

      default:
        this.renderer = new HybridRenderer(this, t.rendererSettings);
    }

    this.imagePreloader.setCacheType(e), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function () {
      this.trigger("data_failed");
    }.bind(this)));
  }, AnimationItem.prototype.setData = function (t, e) {
    var r = {
      wrapper: t,
      animationData: e ? "object" == _typeof(e) ? e : JSON.parse(e) : null
    },
        i = t.attributes;
    r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
    var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
    "" === s || (r.loop = "false" !== s && ("true" === s || parseInt(s)));
    var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
    r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r);
  }, AnimationItem.prototype.includeLayers = function (t) {
    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
    var e,
        r,
        i = this.animationData.layers,
        s = i.length,
        a = t.layers,
        n = a.length;

    for (r = 0; r < n; r += 1) {
      for (e = 0; e < s;) {
        if (i[e].id == a[r].id) {
          i[e] = a[r];
          break;
        }

        e += 1;
      }
    }

    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, e = 0; e < s; e += 1) {
      this.animationData.assets.push(t.assets[e]);
    }
    this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment();
  }, AnimationItem.prototype.loadNextSegment = function () {
    var t = this.animationData.segments;
    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
    var e = t.shift();
    this.timeCompleted = e.time * this.frameRate;
    var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
    this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function () {
      this.trigger("data_failed");
    }.bind(this));
  }, AnimationItem.prototype.loadSegments = function () {
    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
  }, AnimationItem.prototype.imagesLoaded = function () {
    this.trigger("loaded_images"), this.checkLoaded();
  }, AnimationItem.prototype.preloadImages = function () {
    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
  }, AnimationItem.prototype.configAnimation = function (t) {
    if (this.renderer) try {
      this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
    } catch (t) {
      this.triggerConfigError(t);
    }
  }, AnimationItem.prototype.waitForFontsLoaded = function () {
    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
  }, AnimationItem.prototype.checkLoaded = function () {
    this.isLoaded || !this.renderer.globalData.fontManager.isLoaded || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
      this.trigger("DOMLoaded");
    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
  }, AnimationItem.prototype.resize = function () {
    this.renderer.updateContainerSize();
  }, AnimationItem.prototype.setSubframe = function (t) {
    this.isSubframeEnabled = !!t;
  }, AnimationItem.prototype.gotoFrame = function () {
    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();
  }, AnimationItem.prototype.renderFrame = function () {
    if (!1 !== this.isLoaded) try {
      this.renderer.renderFrame(this.currentFrame + this.firstFrame);
    } catch (t) {
      this.triggerRenderFrameError(t);
    }
  }, AnimationItem.prototype.play = function (t) {
    t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
  }, AnimationItem.prototype.pause = function (t) {
    t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause());
  }, AnimationItem.prototype.togglePause = function (t) {
    t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause());
  }, AnimationItem.prototype.stop = function (t) {
    t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
  }, AnimationItem.prototype.goToAndStop = function (t, e, r) {
    r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause());
  }, AnimationItem.prototype.goToAndPlay = function (t, e, r) {
    this.goToAndStop(t, e, r), this.play();
  }, AnimationItem.prototype.advanceTime = function (t) {
    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
      var e = this.currentRawFrame + t * this.frameModifier,
          r = !1;
      e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
    }
  }, AnimationItem.prototype.adjustSegment = function (t, e) {
    this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
  }, AnimationItem.prototype.setSegment = function (t, e) {
    var r = -1;
    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0);
  }, AnimationItem.prototype.playSegments = function (t, e) {
    if (e && (this.segments.length = 0), "object" == _typeof(t[0])) {
      var r,
          i = t.length;

      for (r = 0; r < i; r += 1) {
        this.segments.push(t[r]);
      }
    } else this.segments.push(t);

    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
  }, AnimationItem.prototype.resetSegments = function (t) {
    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
  }, AnimationItem.prototype.checkSegments = function (t) {
    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
  }, AnimationItem.prototype.destroy = function (t) {
    t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null);
  }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
    this.currentRawFrame = t, this.gotoFrame();
  }, AnimationItem.prototype.setSpeed = function (t) {
    this.playSpeed = t, this.updaFrameModifier();
  }, AnimationItem.prototype.setDirection = function (t) {
    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
  }, AnimationItem.prototype.setVolume = function (t, e) {
    e && this.name !== e || this.audioController.setVolume(t);
  }, AnimationItem.prototype.getVolume = function () {
    return this.audioController.getVolume();
  }, AnimationItem.prototype.mute = function (t) {
    t && this.name !== t || this.audioController.mute();
  }, AnimationItem.prototype.unmute = function (t) {
    t && this.name !== t || this.audioController.unmute();
  }, AnimationItem.prototype.updaFrameModifier = function () {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
  }, AnimationItem.prototype.getPath = function () {
    return this.path;
  }, AnimationItem.prototype.getAssetsPath = function (t) {
    var e = "";
    if (t.e) e = t.p;else if (this.assetsPath) {
      var r = t.p;
      -1 !== r.indexOf("img/intro-slider/") && (r = r.split("/")[1]), e = this.assetsPath + r;
    } else e = this.path, e += t.u ? t.u : "", e += t.p;
    return e;
  }, AnimationItem.prototype.getAssetData = function (t) {
    for (var e = 0, r = this.assets.length; e < r;) {
      if (t == this.assets[e].id) return this.assets[e];
      e += 1;
    }
  }, AnimationItem.prototype.hide = function () {
    this.renderer.hide();
  }, AnimationItem.prototype.show = function () {
    this.renderer.show();
  }, AnimationItem.prototype.getDuration = function (t) {
    return t ? this.totalFrames : this.totalFrames / this.frameRate;
  }, AnimationItem.prototype.trigger = function (t) {
    if (this._cbs && this._cbs[t]) switch (t) {
      case "enterFrame":
        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
        break;

      case "loopComplete":
        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
        break;

      case "complete":
        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
        break;

      case "segmentStart":
        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
        break;

      case "destroy":
        this.triggerEvent(t, new BMDestroyEvent(t, this));
        break;

      default:
        this.triggerEvent(t);
    }
    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
  }, AnimationItem.prototype.triggerRenderFrameError = function (t) {
    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
    this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
  }, AnimationItem.prototype.triggerConfigError = function (t) {
    var e = new BMConfigErrorEvent(t, this.currentFrame);
    this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
  };
  var Expressions = (fY = {}, fY.initExpressions = function (t) {
    var e = 0,
        r = [];

    function i() {
      var t,
          e = r.length;

      for (t = 0; t < e; t += 1) {
        r[t].release();
      }

      r.length = 0;
    }

    t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
      e += 1;
    }, t.renderer.globalData.popExpression = function () {
      0 == (e -= 1) && i();
    }, t.renderer.globalData.registerExpressionProperty = function (t) {
      -1 === r.indexOf(t) && r.push(t);
    };
  }, fY),
      fY;
  expressionsPlugin = Expressions;

  var ExpressionManager = function () {
    var ob = {},
        Math = BMMath,
        window = null,
        document = null;

    function $bm_isInstanceOfArray(t) {
      return t.constructor === Array || t.constructor === Float32Array;
    }

    function isNumerable(t, e) {
      return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
    }

    function $bm_neg(t) {
      var e = _typeof(t);

      if ("number" === e || "boolean" === e || t instanceof Number) return -t;

      if ($bm_isInstanceOfArray(t)) {
        var r,
            i = t.length,
            s = [];

        for (r = 0; r < i; r += 1) {
          s[r] = -t[r];
        }

        return s;
      }

      return t.propType ? t.v : void 0;
    }

    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

    function sum(t, e) {
      var r = _typeof(t),
          i = _typeof(e);

      if ("string" === r || "string" === i) return t + e;
      if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
      if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] + e, t;
      if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;

      if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
        for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;) {
          ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
        }

        return o;
      }

      return 0;
    }

    var add = sum;

    function sub(t, e) {
      var r = _typeof(t),
          i = _typeof(e);

      if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t)), "string" === i && (e = parseInt(e)), t - e;
      if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] - e, t;
      if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;

      if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
        for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;) {
          ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
        }

        return o;
      }

      return 0;
    }

    function mul(t, e) {
      var r,
          i,
          s,
          a = _typeof(t),
          n = _typeof(e);

      if (isNumerable(a, t) && isNumerable(n, e)) return t * e;

      if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
        for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) {
          r[i] = t[i] * e;
        }

        return r;
      }

      if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
        for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) {
          r[i] = t * e[i];
        }

        return r;
      }

      return 0;
    }

    function div(t, e) {
      var r,
          i,
          s,
          a = _typeof(t),
          n = _typeof(e);

      if (isNumerable(a, t) && isNumerable(n, e)) return t / e;

      if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
        for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) {
          r[i] = t[i] / e;
        }

        return r;
      }

      if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
        for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) {
          r[i] = t / e[i];
        }

        return r;
      }

      return 0;
    }

    function mod(t, e) {
      return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e;
    }

    var $bm_sum = sum,
        $bm_sub = sub,
        $bm_mul = mul,
        $bm_div = div,
        $bm_mod = mod;

    function clamp(t, e, r) {
      if (r < e) {
        var i = r;
        r = e, e = i;
      }

      return Math.min(Math.max(t, e), r);
    }

    function radiansToDegrees(t) {
      return t / degToRads;
    }

    var radians_to_degrees = radiansToDegrees;

    function degreesToRadians(t) {
      return t * degToRads;
    }

    var degrees_to_radians = radiansToDegrees,
        helperLengthArray = [0, 0, 0, 0, 0, 0];

    function length(t, e) {
      if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
      e || (e = helperLengthArray);
      var r,
          i = Math.min(t.length, e.length),
          s = 0;

      for (r = 0; r < i; r += 1) {
        s += Math.pow(e[r] - t[r], 2);
      }

      return Math.sqrt(s);
    }

    function normalize(t) {
      return div(t, length(t));
    }

    function rgbToHsl(t) {
      var e,
          r,
          i = t[0],
          s = t[1],
          a = t[2],
          n = Math.max(i, s, a),
          o = Math.min(i, s, a),
          h = (n + o) / 2;
      if (n == o) e = r = 0;else {
        var l = n - o;

        switch (r = .5 < h ? l / (2 - n - o) : l / (n + o), n) {
          case i:
            e = (s - a) / l + (s < a ? 6 : 0);
            break;

          case s:
            e = (a - i) / l + 2;
            break;

          case a:
            e = (i - s) / l + 4;
        }

        e /= 6;
      }
      return [e, r, h, t[3]];
    }

    function hue2rgb(t, e, r) {
      return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
    }

    function hslToRgb(t) {
      var e,
          r,
          i,
          s = t[0],
          a = t[1],
          n = t[2];
      if (0 === a) e = r = i = n;else {
        var o = n < .5 ? n * (1 + a) : n + a - n * a,
            h = 2 * n - o;
        e = hue2rgb(h, o, s + 1 / 3), r = hue2rgb(h, o, s), i = hue2rgb(h, o, s - 1 / 3);
      }
      return [e, r, i, t[3]];
    }

    function linear(t, e, r, i, s) {
      if (void 0 !== i && void 0 !== s || (i = e, s = r, e = 0, r = 1), r < e) {
        var a = r;
        r = e, e = a;
      }

      if (t <= e) return i;
      if (r <= t) return s;
      var n = r === e ? 0 : (t - e) / (r - e);
      if (!i.length) return i + (s - i) * n;
      var o,
          h = i.length,
          l = createTypedArray("float32", h);

      for (o = 0; o < h; o += 1) {
        l[o] = i[o] + (s[o] - i[o]) * n;
      }

      return l;
    }

    function random(t, e) {
      if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
        var r,
            i = e.length;
        t || (t = createTypedArray("float32", i));
        var s = createTypedArray("float32", i),
            a = BMMath.random();

        for (r = 0; r < i; r += 1) {
          s[r] = t[r] + a * (e[r] - t[r]);
        }

        return s;
      }

      return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
    }

    function createPath(t, e, r, i) {
      var s,
          a = t.length,
          n = shape_pool.newElement();
      n.setPathData(!!i, a);
      var o,
          h,
          l = [0, 0];

      for (s = 0; s < a; s += 1) {
        o = e && e[s] ? e[s] : l, h = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
      }

      return n;
    }

    function initiateExpression(elem, data, property) {
      var val = data.x,
          needsVelocity = /velocity(?![\w\d])/.test(val),
          _needsRandom = -1 !== val.indexOf("random"),
          elemType = elem.data.ty,
          transform,
          $bm_transform,
          content,
          effect,
          thisProperty = property;

      thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
        get: function get() {
          return thisProperty.v;
        }
      }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
      var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
          outPoint = elem.data.op / elem.comp.globalData.frameRate,
          width = elem.data.sw ? elem.data.sw : 0,
          height = elem.data.sh ? elem.data.sh : 0,
          name = elem.data.nm,
          loopIn,
          loop_in,
          loopOut,
          loop_out,
          smooth,
          toWorld,
          fromWorld,
          fromComp,
          toComp,
          fromCompToSurface,
          position,
          rotation,
          anchorPoint,
          scale,
          thisLayer,
          thisComp,
          mask,
          valueAtTime,
          velocityAtTime,
          __expression_functions = [],
          scoped_bm_rt;

      if (data.xf) {
        var i,
            len = data.xf.length;

        for (i = 0; i < len; i += 1) {
          __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())");
        }
      }

      var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
          numKeys = property.kf ? data.k.length : 0,
          active = !this.data || !0 !== this.data.hd,
          wiggle = function (t, e) {
        var r,
            i,
            s = this.pv.length ? this.pv.length : 1,
            a = createTypedArray("float32", s);
        var n = Math.floor(5 * time);

        for (i = r = 0; r < n;) {
          for (i = 0; i < s; i += 1) {
            a[i] += -e + 2 * e * BMMath.random();
          }

          r += 1;
        }

        var o = 5 * time,
            h = o - Math.floor(o),
            l = createTypedArray("float32", s);

        if (1 < s) {
          for (i = 0; i < s; i += 1) {
            l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
          }

          return l;
        }

        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
      }.bind(this);

      function loopInDuration(t, e) {
        return loopIn(t, e, !0);
      }

      function loopOutDuration(t, e) {
        return loopOut(t, e, !0);
      }

      thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
      var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
          time,
          velocity,
          value,
          text,
          textIndex,
          textTotal,
          selectorValue;

      function lookAt(t, e) {
        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
            i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
        return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
      }

      function easeOut(t, e, r, i, s) {
        return applyEase(easeOutBez, t, e, r, i, s);
      }

      function easeIn(t, e, r, i, s) {
        return applyEase(easeInBez, t, e, r, i, s);
      }

      function ease(t, e, r, i, s) {
        return applyEase(easeInOutBez, t, e, r, i, s);
      }

      function applyEase(t, e, r, i, s, a) {
        void 0 === s ? (s = r, a = i) : e = (e - r) / (i - r);
        var n = t(e = 1 < e ? 1 : e < 0 ? 0 : e);

        if ($bm_isInstanceOfArray(s)) {
          var o,
              h = s.length,
              l = createTypedArray("float32", h);

          for (o = 0; o < h; o += 1) {
            l[o] = (a[o] - s[o]) * n + s[o];
          }

          return l;
        }

        return (a - s) * n + s;
      }

      function nearestKey(t) {
        var e,
            r,
            i,
            s = data.k.length;
        if (data.k.length && "number" != typeof data.k[0]) {
          if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;else {
            for (e = 0; e < s - 1; e += 1) {
              if (t === data.k[e].t) {
                r = e + 1, i = data.k[e].t;
                break;
              }

              if (t > data.k[e].t && t < data.k[e + 1].t) {
                i = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, data.k[e + 1].t) : (r = e + 1, data.k[e].t);
                break;
              }
            }

            -1 === r && (r = e + 1, i = data.k[e].t);
          }
        } else i = r = 0;
        var a = {};
        return a.index = r, a.time = i / elem.comp.globalData.frameRate, a;
      }

      function key(t) {
        var e, r, i;
        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
        t -= 1, e = {
          time: data.k[t].t / elem.comp.globalData.frameRate,
          value: []
        };
        var s = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;

        for (i = s.length, r = 0; r < i; r += 1) {
          e[r] = s[r], e.value[r] = s[r];
        }

        return e;
      }

      function framesToTime(t, e) {
        return e || (e = elem.comp.globalData.frameRate), t / e;
      }

      function timeToFrames(t, e) {
        return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
      }

      function seedRandom(t) {
        BMMath.seedrandom(randSeed + t);
      }

      function sourceRectAtTime() {
        return elem.sourceRectAtTime();
      }

      function substring(t, e) {
        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
      }

      function substr(t, e) {
        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
      }

      function posterizeTime(t) {
        time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
      }

      var index = elem.data.ind,
          hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
          parent,
          randSeed = Math.floor(1e6 * Math.random()),
          globalData = elem.globalData;

      function executeExpression(t) {
        return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt);
      }

      return executeExpression;
    }

    return ob.initiateExpression = initiateExpression, ob;
  }(),
      expressionHelpers = {
    searchExpressions: function searchExpressions(t, e, r) {
      e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
    },
    getSpeedAtTime: function getSpeedAtTime(t) {
      var e = this.getValueAtTime(t),
          r = this.getValueAtTime(t + -.01),
          i = 0;

      if (e.length) {
        var s;

        for (s = 0; s < e.length; s += 1) {
          i += Math.pow(r[s] - e[s], 2);
        }

        i = 100 * Math.sqrt(i);
      } else i = 0;

      return i;
    },
    getVelocityAtTime: function getVelocityAtTime(t) {
      if (void 0 !== this.vel) return this.vel;
      var e,
          r,
          i = this.getValueAtTime(t),
          s = this.getValueAtTime(t + -.001);
      if (i.length) for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) {
        e[r] = (s[r] - i[r]) / -.001;
      } else e = (s - i) / -.001;
      return e;
    },
    getValueAtTime: function getValueAtTime(t) {
      return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
    },
    getStaticValueAtTime: function getStaticValueAtTime() {
      return this.pv;
    },
    setGroupProperty: function setGroupProperty(t) {
      this.propertyGroup = t;
    }
  };

  !function () {
    function o(t, e, r) {
      if (!this.k || !this.keyframes) return this.pv;
      t = t ? t.toLowerCase() : "";
      var i,
          s,
          a,
          n,
          o,
          h = this.comp.renderedFrame,
          l = this.keyframes,
          p = l[l.length - 1].t;
      if (h <= p) return this.pv;

      if (r ? s = p - (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
        if (Math.floor((h - s) / i) % 2 != 0) return this.getValueAtTime((i - (h - s) % i + s) / this.comp.globalData.frameRate, 0);
      } else {
        if ("offset" === t) {
          var m = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
              f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              c = this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0),
              d = Math.floor((h - s) / i);

          if (this.pv.length) {
            for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1) {
              o[a] = (f[a] - m[a]) * d + c[a];
            }

            return o;
          }

          return (f - m) * d + c;
        }

        if ("continue" === t) {
          var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);

          if (this.pv.length) {
            for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) {
              o[a] = u[a] + (u[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
            }

            return o;
          }

          return u + (h - p) / .001 * (u - y);
        }
      }

      return this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0);
    }

    function h(t, e, r) {
      if (!this.k) return this.pv;
      t = t ? t.toLowerCase() : "";
      var i,
          s,
          a,
          n,
          o,
          h = this.comp.renderedFrame,
          l = this.keyframes,
          p = l[0].t;
      if (p <= h) return this.pv;

      if (r ? s = p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (s = l[e].t) - p), "pingpong" === t) {
        if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0);
      } else {
        if ("offset" === t) {
          var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
              c = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0),
              d = Math.floor((p - h) / i) + 1;

          if (this.pv.length) {
            for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1) {
              o[a] = c[a] - (f[a] - m[a]) * d;
            }

            return o;
          }

          return c - (f - m) * d;
        }

        if ("continue" === t) {
          var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
              y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);

          if (this.pv.length) {
            for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) {
              o[a] = u[a] + (u[a] - y[a]) * (p - h) / .001;
            }

            return o;
          }

          return u + (u - y) * (p - h) / .001;
        }
      }

      return this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0);
    }

    function l(t, e) {
      if (!this.k) return this.pv;
      if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
      var r,
          i,
          s = this.comp.renderedFrame / this.comp.globalData.frameRate,
          a = s - t,
          n = 1 < e ? (s + t - a) / (e - 1) : 1,
          o = 0,
          h = 0;

      for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
        if (i = this.getValueAtTime(a + o * n), this.pv.length) for (h = 0; h < this.pv.length; h += 1) {
          r[h] += i[h];
        } else r += i;
        o += 1;
      }

      if (this.pv.length) for (h = 0; h < this.pv.length; h += 1) {
        r[h] /= e;
      } else r /= e;
      return r;
    }

    var s = TransformPropertyFactory.getTransformProperty;

    TransformPropertyFactory.getTransformProperty = function (t, e, r) {
      var i = s(t, e, r);
      return i.dynamicProperties.length ? i.getValueAtTime = function (t) {
        this._transformCachingAtTime || (this._transformCachingAtTime = {
          v: new Matrix()
        });
        var e = this._transformCachingAtTime.v;

        if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var r = this.a.getValueAtTime(t);
          e.translate(-r[0], -r[1], r[2]);
        }

        if (this.appliedTransformations < 2) {
          var i = this.s.getValueAtTime(t);
          e.scale(i[0], i[1], i[2]);
        }

        if (this.sk && this.appliedTransformations < 3) {
          var s = this.sk.getValueAtTime(t),
              a = this.sa.getValueAtTime(t);
          e.skewFromAxis(-s, a);
        }

        if (this.r && this.appliedTransformations < 4) {
          var n = this.r.getValueAtTime(t);
          e.rotate(-n);
        } else if (!this.r && this.appliedTransformations < 4) {
          var o = this.rz.getValueAtTime(t),
              h = this.ry.getValueAtTime(t),
              l = this.rx.getValueAtTime(t),
              p = this.or.getValueAtTime(t);
          e.rotateZ(-o.v).rotateY(h.v).rotateX(l.v).rotateZ(-p[2]).rotateY(p[1]).rotateX(p[0]);
        }

        if (this.data.p && this.data.p.s) {
          var m = this.px.getValueAtTime(t),
              f = this.py.getValueAtTime(t);

          if (this.data.p.z) {
            var c = this.pz.getValueAtTime(t);
            e.translate(m, f, -c);
          } else e.translate(m, f, 0);
        } else {
          var d = this.p.getValueAtTime(t);
          e.translate(d[0], d[1], -d[2]);
        }

        return e;
      }.bind(i) : i.getValueAtTime = function (t) {}.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i;
    };

    var p = PropertyFactory.getProp;

    PropertyFactory.getProp = function (t, e, r, i, s) {
      var a = p(t, e, r, i, s);
      a.kf ? a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a) : a.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a.loopOut = o, a.loopIn = h, a.smooth = l, a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a), a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a), a.numKeys = 1 === e.a ? e.k.length : 0, a.propertyIndex = e.ix;
      var n = 0;
      return 0 !== r && (n = createTypedArray("float32", 1 === e.a ? e.k[0].s.length : e.k.length)), a._cachingAtTime = {
        lastFrame: initialDefaultFrame,
        lastIndex: 0,
        value: n
      }, expressionHelpers.searchExpressions(t, e, a), a.k && s.addDynamicProperty(a), a;
    };

    var t = ShapePropertyFactory.getConstructorFunction(),
        e = ShapePropertyFactory.getKeyframedConstructorFunction();

    function r() {}

    r.prototype = {
      vertices: function vertices(t, e) {
        this.k && this.getValue();
        var r = this.v;
        void 0 !== e && (r = this.getValueAtTime(e, 0));
        var i,
            s = r._length,
            a = r[t],
            n = r.v,
            o = createSizedArray(s);

        for (i = 0; i < s; i += 1) {
          o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
        }

        return o;
      },
      points: function points(t) {
        return this.vertices("v", t);
      },
      inTangents: function inTangents(t) {
        return this.vertices("i", t);
      },
      outTangents: function outTangents(t) {
        return this.vertices("o", t);
      },
      isClosed: function isClosed() {
        return this.v.c;
      },
      pointOnPath: function pointOnPath(t, e) {
        var r = this.v;
        void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));

        for (var i, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
          if (l + a[o].addedLength > n) {
            var p = o,
                m = r.c && o === h - 1 ? 0 : o + 1,
                f = (n - l) / a[o].addedLength;
            i = bez.getPointInSegment(r.v[p], r.v[m], r.o[p], r.i[m], f, a[o]);
            break;
          }

          l += a[o].addedLength, o += 1;
        }

        return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i;
      },
      vectorOnPath: function vectorOnPath(t, e, r) {
        t = 1 == t ? this.v.c ? 0 : .999 : t;
        var i = this.pointOnPath(t, e),
            s = this.pointOnPath(t + .001, e),
            a = s[0] - i[0],
            n = s[1] - i[1],
            o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
        return 0 === o ? [0, 0] : "tangent" === r ? [a / o, n / o] : [-n / o, a / o];
      },
      tangentOnPath: function tangentOnPath(t, e) {
        return this.vectorOnPath(t, e, "tangent");
      },
      normalOnPath: function normalOnPath(t, e) {
        return this.vectorOnPath(t, e, "normal");
      },
      setGroupProperty: expressionHelpers.setGroupProperty,
      getValueAtTime: expressionHelpers.getStaticValueAtTime
    }, extendPrototype([r], t), extendPrototype([r], e), e.prototype.getValueAtTime = function (t) {
      return this._cachingAtTime || (this._cachingAtTime = {
        shapeValue: shape_pool.clone(this.pv),
        lastIndex: 0,
        lastTime: initialDefaultFrame
      }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
    }, e.prototype.initiateExpression = ExpressionManager.initiateExpression;
    var n = ShapePropertyFactory.getShapeProp;

    ShapePropertyFactory.getShapeProp = function (t, e, r, i, s) {
      var a = n(t, e, r, i, s);
      return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a;
    };
  }(), TextProperty.prototype.getExpressionValue = function (t, e) {
    var r = this.calculateExpression(e);
    if (t.t === r) return t;
    var i = {};
    return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i;
  }, TextProperty.prototype.searchProperty = function () {
    var t = this.searchKeyframes(),
        e = this.searchExpressions();
    return this.kf = t || e, this.kf;
  }, TextProperty.prototype.searchExpressions = function () {
    if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0;
  };

  var ShapePathInterface = function ShapePathInterface(t, e, r) {
    var i = e.sh;

    function s(t) {
      if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return s.path;
    }

    var a = propertyGroupFactory(s, r);
    return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
      path: {
        get: function get() {
          return i.k && i.getValue(), i;
        }
      },
      shape: {
        get: function get() {
          return i.k && i.getValue(), i;
        }
      },
      _name: {
        value: t.nm
      },
      ix: {
        value: t.ix
      },
      propertyIndex: {
        value: t.ix
      },
      mn: {
        value: t.mn
      },
      propertyGroup: {
        value: r
      }
    }), s;
  },
      propertyGroupFactory = function propertyGroupFactory(e, r) {
    return function (t) {
      return (t = void 0 === t ? 1 : t) <= 0 ? e : r(t - 1);
    };
  },
      PropertyInterface = function PropertyInterface(t, e) {
    var r = {
      _name: t
    };
    return function (t) {
      return (t = void 0 === t ? 1 : t) <= 0 ? r : e(--t);
    };
  },
      ShapeExpressionInterface = function () {
    function n(t, e, r) {
      var i,
          s = [],
          a = t ? t.length : 0;

      for (i = 0; i < a; i += 1) {
        "gr" == t[i].ty ? s.push(o(t[i], e[i], r)) : "fl" == t[i].ty ? s.push(h(t[i], e[i], r)) : "st" == t[i].ty ? s.push(l(t[i], e[i], r)) : "tm" == t[i].ty ? s.push(p(t[i], e[i], r)) : "tr" == t[i].ty || ("el" == t[i].ty ? s.push(f(t[i], e[i], r)) : "sr" == t[i].ty ? s.push(c(t[i], e[i], r)) : "sh" == t[i].ty ? s.push(ShapePathInterface(t[i], e[i], r)) : "rc" == t[i].ty ? s.push(d(t[i], e[i], r)) : "rd" == t[i].ty ? s.push(u(t[i], e[i], r)) : "rp" == t[i].ty && s.push(y(t[i], e[i], r)));
      }

      return s;
    }

    function o(t, e, r) {
      var i = function i(t) {
        switch (t) {
          case "ADBE Vectors Group":
          case "Contents":
          case 2:
            return i.content;

          default:
            return i.transform;
        }
      };

      i.propertyGroup = propertyGroupFactory(i, r);

      var s = function (t, e, r) {
        var i,
            s = function s(t) {
          for (var e = 0, r = i.length; e < r;) {
            if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
            e += 1;
          }

          if ("number" == typeof t) return i[t - 1];
        };

        s.propertyGroup = propertyGroupFactory(s, r), i = n(t.it, e.it, s.propertyGroup), s.numProperties = i.length;
        var a = m(t.it[t.it.length - 1], e.it[e.it.length - 1], s.propertyGroup);
        return s.transform = a, s.propertyIndex = t.cix, s._name = t.nm, s;
      }(t, e, i.propertyGroup),
          a = m(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup);

      return i.content = s, i.transform = a, Object.defineProperty(i, "_name", {
        get: function get() {
          return t.nm;
        }
      }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i;
    }

    function h(t, e, r) {
      function i(t) {
        return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0;
      }

      return Object.defineProperties(i, {
        color: {
          get: ExpressionPropertyInterface(e.c)
        },
        opacity: {
          get: ExpressionPropertyInterface(e.o)
        },
        _name: {
          value: t.nm
        },
        mn: {
          value: t.mn
        }
      }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i;
    }

    function l(t, e, r) {
      var i = propertyGroupFactory(l, r),
          s = propertyGroupFactory(h, i);
      var a,
          n,
          o = t.d ? t.d.length : 0,
          h = {};

      for (a = 0; a < o; a += 1) {
        n = a, Object.defineProperty(h, t.d[n].nm, {
          get: ExpressionPropertyInterface(e.d.dataProps[n].p)
        }), e.d.dataProps[a].p.setGroupProperty(s);
      }

      function l(t) {
        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0;
      }

      return Object.defineProperties(l, {
        color: {
          get: ExpressionPropertyInterface(e.c)
        },
        opacity: {
          get: ExpressionPropertyInterface(e.o)
        },
        strokeWidth: {
          get: ExpressionPropertyInterface(e.w)
        },
        dash: {
          get: function get() {
            return h;
          }
        },
        _name: {
          value: t.nm
        },
        mn: {
          value: t.mn
        }
      }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), e.w.setGroupProperty(PropertyInterface("Stroke Width", i)), l;
    }

    function p(e, t, r) {
      function i(t) {
        return t === e.e.ix || "End" === t || "end" === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : void 0;
      }

      var s = propertyGroupFactory(i, r);
      return i.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", s)), t.e.setGroupProperty(PropertyInterface("End", s)), t.o.setGroupProperty(PropertyInterface("Offset", s)), i.propertyIndex = e.ix, i.propertyGroup = r, Object.defineProperties(i, {
        start: {
          get: ExpressionPropertyInterface(t.s)
        },
        end: {
          get: ExpressionPropertyInterface(t.e)
        },
        offset: {
          get: ExpressionPropertyInterface(t.o)
        },
        _name: {
          value: e.nm
        }
      }), i.mn = e.mn, i;
    }

    function m(e, t, r) {
      function i(t) {
        return e.a.ix === t || "Anchor Point" === t ? i.anchorPoint : e.o.ix === t || "Opacity" === t ? i.opacity : e.p.ix === t || "Position" === t ? i.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? i.rotation : e.s.ix === t || "Scale" === t ? i.scale : e.sk && e.sk.ix === t || "Skew" === t ? i.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? i.skewAxis : void 0;
      }

      var s = propertyGroupFactory(i, r);
      return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(i, {
        opacity: {
          get: ExpressionPropertyInterface(t.transform.mProps.o)
        },
        position: {
          get: ExpressionPropertyInterface(t.transform.mProps.p)
        },
        anchorPoint: {
          get: ExpressionPropertyInterface(t.transform.mProps.a)
        },
        scale: {
          get: ExpressionPropertyInterface(t.transform.mProps.s)
        },
        rotation: {
          get: ExpressionPropertyInterface(t.transform.mProps.r)
        },
        skew: {
          get: ExpressionPropertyInterface(t.transform.mProps.sk)
        },
        skewAxis: {
          get: ExpressionPropertyInterface(t.transform.mProps.sa)
        },
        _name: {
          value: e.nm
        }
      }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = r, i;
    }

    function f(e, t, r) {
      function i(t) {
        return e.p.ix === t ? i.position : e.s.ix === t ? i.size : void 0;
      }

      var s = propertyGroupFactory(i, r);
      i.propertyIndex = e.ix;
      var a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
      return a.s.setGroupProperty(PropertyInterface("Size", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(i, {
        size: {
          get: ExpressionPropertyInterface(a.s)
        },
        position: {
          get: ExpressionPropertyInterface(a.p)
        },
        _name: {
          value: e.nm
        }
      }), i.mn = e.mn, i;
    }

    function c(e, t, r) {
      function i(t) {
        return e.p.ix === t ? i.position : e.r.ix === t ? i.rotation : e.pt.ix === t ? i.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? i.outerRadius : e.os.ix === t ? i.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? i.innerRoundness : void 0 : i.innerRadius;
      }

      var s = propertyGroupFactory(i, r),
          a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
      return i.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", s)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), a.pt.setGroupProperty(PropertyInterface("Points", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(i, {
        position: {
          get: ExpressionPropertyInterface(a.p)
        },
        rotation: {
          get: ExpressionPropertyInterface(a.r)
        },
        points: {
          get: ExpressionPropertyInterface(a.pt)
        },
        outerRadius: {
          get: ExpressionPropertyInterface(a.or)
        },
        outerRoundness: {
          get: ExpressionPropertyInterface(a.os)
        },
        innerRadius: {
          get: ExpressionPropertyInterface(a.ir)
        },
        innerRoundness: {
          get: ExpressionPropertyInterface(a.is)
        },
        _name: {
          value: e.nm
        }
      }), i.mn = e.mn, i;
    }

    function d(e, t, r) {
      function i(t) {
        return e.p.ix === t ? i.position : e.r.ix === t ? i.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? i.size : void 0;
      }

      var s = propertyGroupFactory(i, r),
          a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
      return i.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", s)), a.s.setGroupProperty(PropertyInterface("Size", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(i, {
        position: {
          get: ExpressionPropertyInterface(a.p)
        },
        roundness: {
          get: ExpressionPropertyInterface(a.r)
        },
        size: {
          get: ExpressionPropertyInterface(a.s)
        },
        _name: {
          value: e.nm
        }
      }), i.mn = e.mn, i;
    }

    function u(e, t, r) {
      function i(t) {
        if (e.r.ix === t || "Round Corners 1" === t) return i.radius;
      }

      var s = propertyGroupFactory(i, r),
          a = t;
      return i.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(i, {
        radius: {
          get: ExpressionPropertyInterface(a.rd)
        },
        _name: {
          value: e.nm
        }
      }), i.mn = e.mn, i;
    }

    function y(e, t, r) {
      function i(t) {
        return e.c.ix === t || "Copies" === t ? i.copies : e.o.ix === t || "Offset" === t ? i.offset : void 0;
      }

      var s = propertyGroupFactory(i, r),
          a = t;
      return i.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", s)), a.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(i, {
        copies: {
          get: ExpressionPropertyInterface(a.c)
        },
        offset: {
          get: ExpressionPropertyInterface(a.o)
        },
        _name: {
          value: e.nm
        }
      }), i.mn = e.mn, i;
    }

    return function (t, e, i) {
      var s;

      function r(t) {
        if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : s[t - 1];

        for (var e = 0, r = s.length; e < r;) {
          if (s[e]._name === t) return s[e];
          e += 1;
        }
      }

      return r.propertyGroup = i, s = n(t, e, r), r.numProperties = s.length, r;
    };
  }(),
      TextExpressionInterface = function TextExpressionInterface(e) {
    var r;

    function i(t) {
      switch (t) {
        case "ADBE Text Document":
          return i.sourceText;
      }
    }

    return Object.defineProperty(i, "sourceText", {
      get: function get() {
        e.textProperty.getValue();
        var t = e.textProperty.currentData.t;
        return void 0 !== t && (e.textProperty.currentData.t = void 0, (r = new String(t)).value = t || new String(t)), r;
      }
    }), i;
  },
      LayerExpressionInterface = function () {
    function s(t, e) {
      var r = new Matrix();

      if (r.reset(), void 0 !== e ? r = this._elem.finalTransform.mProp.getValueAtTime(e) : this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
        var i,
            s = this._elem.hierarchy.length;

        for (i = 0; i < s; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
        }

        return r.applyToPointArray(t[0], t[1], t[2] || 0);
      }

      return r.applyToPointArray(t[0], t[1], t[2] || 0);
    }

    function a(t, e) {
      var r = new Matrix();

      if (r.reset(), void 0 !== e ? r = this._elem.finalTransform.mProp.getValueAtTime(e) : this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
        var i,
            s = this._elem.hierarchy.length;

        for (i = 0; i < s; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
        }

        return r.inversePoint(t);
      }

      return r.inversePoint(t);
    }

    function n(t) {
      var e = new Matrix();

      if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
        var r,
            i = this._elem.hierarchy.length;

        for (r = 0; r < i; r += 1) {
          this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
        }

        return e.inversePoint(t);
      }

      return e.inversePoint(t);
    }

    function o() {
      return [1, 1, 1, 1];
    }

    return function (e) {
      var r;

      function i(t) {
        switch (t) {
          case "ADBE Root Vectors Group":
          case "Contents":
          case 2:
            return i.shapeInterface;

          case 1:
          case 6:
          case "Transform":
          case "transform":
          case "ADBE Transform Group":
            return r;

          case 4:
          case "ADBE Effect Parade":
          case "effects":
          case "Effects":
            return i.effect;

          case "ADBE Text Properties":
            return i.textInterface;
        }
      }

      i.toWorld = s, i.fromWorld = a, i.toComp = s, i.fromComp = n, i.sampleImage = o, i.sourceRectAtTime = e.sourceRectAtTime.bind(e);
      var t = getDescriptor(r = TransformExpressionInterface((i._elem = e).finalTransform.mProp), "anchorPoint");
      return Object.defineProperties(i, {
        hasParent: {
          get: function get() {
            return e.hierarchy.length;
          }
        },
        parent: {
          get: function get() {
            return e.hierarchy[0].layerInterface;
          }
        },
        rotation: getDescriptor(r, "rotation"),
        scale: getDescriptor(r, "scale"),
        position: getDescriptor(r, "position"),
        opacity: getDescriptor(r, "opacity"),
        anchorPoint: t,
        anchor_point: t,
        transform: {
          get: function get() {
            return r;
          }
        },
        active: {
          get: function get() {
            return e.isInRange;
          }
        }
      }), i.startTime = e.data.st, i.index = e.data.ind, i.source = e.data.refId, i.height = 0 === e.data.ty ? e.data.h : 100, i.width = 0 === e.data.ty ? e.data.w : 100, i.inPoint = e.data.ip / e.comp.globalData.frameRate, i.outPoint = e.data.op / e.comp.globalData.frameRate, i._name = e.data.nm, i.registerMaskInterface = function (t) {
        i.mask = new MaskManagerInterface(t, e);
      }, i.registerEffectsInterface = function (t) {
        i.effect = t;
      }, i;
    };
  }(),
      CompExpressionInterface = function CompExpressionInterface(i) {
    function t(t) {
      for (var e = 0, r = i.layers.length; e < r;) {
        if (i.layers[e].nm === t || i.layers[e].ind === t) return i.elements[e].layerInterface;
        e += 1;
      }

      return null;
    }

    return Object.defineProperty(t, "_name", {
      value: i.data.nm
    }), (t.layer = t).pixelAspect = 1, t.height = i.data.h || i.globalData.compSize.h, t.width = i.data.w || i.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / i.globalData.frameRate, t.displayStartTime = 0, t.numLayers = i.layers.length, t;
  },
      TransformExpressionInterface = function TransformExpressionInterface(t) {
    function e(t) {
      switch (t) {
        case "scale":
        case "Scale":
        case "ADBE Scale":
        case 6:
          return e.scale;

        case "rotation":
        case "Rotation":
        case "ADBE Rotation":
        case "ADBE Rotate Z":
        case 10:
          return e.rotation;

        case "ADBE Rotate X":
          return e.xRotation;

        case "ADBE Rotate Y":
          return e.yRotation;

        case "position":
        case "Position":
        case "ADBE Position":
        case 2:
          return e.position;

        case "ADBE Position_0":
          return e.xPosition;

        case "ADBE Position_1":
          return e.yPosition;

        case "ADBE Position_2":
          return e.zPosition;

        case "anchorPoint":
        case "AnchorPoint":
        case "Anchor Point":
        case "ADBE AnchorPoint":
        case 1:
          return e.anchorPoint;

        case "opacity":
        case "Opacity":
        case 11:
          return e.opacity;
      }
    }

    if (Object.defineProperty(e, "rotation", {
      get: ExpressionPropertyInterface(t.r || t.rz)
    }), Object.defineProperty(e, "zRotation", {
      get: ExpressionPropertyInterface(t.rz || t.r)
    }), Object.defineProperty(e, "xRotation", {
      get: ExpressionPropertyInterface(t.rx)
    }), Object.defineProperty(e, "yRotation", {
      get: ExpressionPropertyInterface(t.ry)
    }), Object.defineProperty(e, "scale", {
      get: ExpressionPropertyInterface(t.s)
    }), t.p) var r = ExpressionPropertyInterface(t.p);else {
      var i,
          s = ExpressionPropertyInterface(t.px),
          a = ExpressionPropertyInterface(t.py);
      t.pz && (i = ExpressionPropertyInterface(t.pz));
    }
    return Object.defineProperty(e, "position", {
      get: function get() {
        return t.p ? r() : [s(), a(), i ? i() : 0];
      }
    }), Object.defineProperty(e, "xPosition", {
      get: ExpressionPropertyInterface(t.px)
    }), Object.defineProperty(e, "yPosition", {
      get: ExpressionPropertyInterface(t.py)
    }), Object.defineProperty(e, "zPosition", {
      get: ExpressionPropertyInterface(t.pz)
    }), Object.defineProperty(e, "anchorPoint", {
      get: ExpressionPropertyInterface(t.a)
    }), Object.defineProperty(e, "opacity", {
      get: ExpressionPropertyInterface(t.o)
    }), Object.defineProperty(e, "skew", {
      get: ExpressionPropertyInterface(t.sk)
    }), Object.defineProperty(e, "skewAxis", {
      get: ExpressionPropertyInterface(t.sa)
    }), Object.defineProperty(e, "orientation", {
      get: ExpressionPropertyInterface(t.or)
    }), e;
  },
      ProjectInterface = function () {
    function e(t) {
      this.compositions.push(t);
    }

    return function () {
      function t(t) {
        for (var e = 0, r = this.compositions.length; e < r;) {
          if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
          e += 1;
        }
      }

      return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t;
    };
  }(),
      EffectsExpressionInterface = function () {
    function l(s, t, e, r) {
      function i(t) {
        for (var e = s.ef, r = 0, i = e.length; r < i;) {
          if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? o[r] : o[r]();
          r += 1;
        }

        throw new Error();
      }

      var a,
          n = propertyGroupFactory(i, e),
          o = [],
          h = s.ef.length;

      for (a = 0; a < h; a += 1) {
        5 === s.ef[a].ty ? o.push(l(s.ef[a], t.effectElements[a], t.effectElements[a].propertyGroup, r)) : o.push(p(t.effectElements[a], s.ef[a].ty, r, n));
      }

      return "ADBE Color Control" === s.mn && Object.defineProperty(i, "color", {
        get: function get() {
          return o[0]();
        }
      }), Object.defineProperties(i, {
        numProperties: {
          get: function get() {
            return s.np;
          }
        },
        _name: {
          value: s.nm
        },
        propertyGroup: {
          value: n
        }
      }), i.active = i.enabled = 0 !== s.en, i;
    }

    function p(t, e, r, i) {
      var s = ExpressionPropertyInterface(t.p);
      return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)), function () {
        return 10 === e ? r.comp.compInterface(t.p.v) : s();
      };
    }

    return {
      createEffectsInterface: function createEffectsInterface(t, e) {
        if (t.effectsManager) {
          var r,
              i = [],
              s = t.data.ef,
              a = t.effectsManager.effectElements.length;

          for (r = 0; r < a; r += 1) {
            i.push(l(s[r], t.effectsManager.effectElements[r], e, t));
          }

          var n = t.data.ef || [],
              o = function o(t) {
            for (r = 0, a = n.length; r < a;) {
              if (t === n[r].nm || t === n[r].mn || t === n[r].ix) return i[r];
              r += 1;
            }
          };

          return Object.defineProperty(o, "numProperties", {
            get: function get() {
              return n.length;
            }
          }), o;
        }
      }
    };
  }(),
      MaskManagerInterface = function () {
    function a(t, e) {
      this._mask = t, this._data = e;
    }

    Object.defineProperty(a.prototype, "maskPath", {
      get: function get() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      }
    }), Object.defineProperty(a.prototype, "maskOpacity", {
      get: function get() {
        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
      }
    });
    return function (e, t) {
      var r,
          i = createSizedArray(e.viewData.length),
          s = e.viewData.length;

      for (r = 0; r < s; r += 1) {
        i[r] = new a(e.viewData[r], e.masksProperties[r]);
      }

      return function (t) {
        for (r = 0; r < s;) {
          if (e.masksProperties[r].nm === t) return i[r];
          r += 1;
        }
      };
    };
  }(),
      ExpressionPropertyInterface = function () {
    var s = {
      pv: 0,
      v: 0,
      mult: 1
    },
        n = {
      pv: [0, 0, 0],
      v: [0, 0, 0],
      mult: 1
    };

    function o(i, s, a) {
      Object.defineProperty(i, "velocity", {
        get: function get() {
          return s.getVelocityAtTime(s.comp.currentFrame);
        }
      }), i.numKeys = s.keyframes ? s.keyframes.length : 0, i.key = function (t) {
        if (i.numKeys) {
          var e = "";
          e = "s" in s.keyframes[t - 1] ? s.keyframes[t - 1].s : "e" in s.keyframes[t - 2] ? s.keyframes[t - 2].e : s.keyframes[t - 2].s;
          var r = "unidimensional" === a ? new Number(e) : Object.assign({}, e);
          return r.time = s.keyframes[t - 1].t / s.elem.comp.globalData.frameRate, r.value = "unidimensional" === a ? e[0] : e, r;
        }

        return 0;
      }, i.valueAtTime = s.getValueAtTime, i.speedAtTime = s.getSpeedAtTime, i.velocityAtTime = s.getVelocityAtTime, i.propertyGroup = s.propertyGroup;
    }

    function e() {
      return s;
    }

    return function (t) {
      return t ? "unidimensional" === t.propType ? function (t) {
        t && "pv" in t || (t = s);
        var e = 1 / t.mult,
            r = t.pv * e,
            i = new Number(r);
        return i.value = r, o(i, t, "unidimensional"), function () {
          return t.k && t.getValue(), r = t.v * e, i.value !== r && ((i = new Number(r)).value = r, o(i, t, "unidimensional")), i;
        };
      }(t) : function (e) {
        e && "pv" in e || (e = n);
        var r = 1 / e.mult,
            i = e.pv.length,
            s = createTypedArray("float32", i),
            a = createTypedArray("float32", i);
        return s.value = a, o(s, e, "multidimensional"), function () {
          e.k && e.getValue();

          for (var t = 0; t < i; t += 1) {
            s[t] = a[t] = e.v[t] * r;
          }

          return s;
        };
      }(t) : e;
    };
  }(),
      b7,
      c7;

  function SliderEffect(t, e, r) {
    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
  }

  function AngleEffect(t, e, r) {
    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
  }

  function ColorEffect(t, e, r) {
    this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
  }

  function PointEffect(t, e, r) {
    this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
  }

  function LayerIndexEffect(t, e, r) {
    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
  }

  function MaskIndexEffect(t, e, r) {
    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
  }

  function CheckboxEffect(t, e, r) {
    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
  }

  function NoValueEffect() {
    this.p = {};
  }

  function EffectsManager() {}

  function EffectsManager(t, e) {
    var r = t.ef || [];
    this.effectElements = [];
    var i,
        s,
        a = r.length;

    for (i = 0; i < a; i++) {
      s = new GroupEffect(r[i], e), this.effectElements.push(s);
    }
  }

  function GroupEffect(t, e) {
    this.init(t, e);
  }

  b7 = function () {
    function r(t, e) {
      return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v;
    }

    return function (t, e) {
      this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = e.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, e, this), this.getMult = r, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty;
    };
  }(), c7 = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function (t, e, r) {
    return 1 === e.t ? new b7(t, e, r) : c7(t, e, r);
  }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) {
    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
    var r,
        i,
        s = this.data.ef.length,
        a = this.data.ef;

    for (r = 0; r < s; r += 1) {
      switch (i = null, a[r].ty) {
        case 0:
          i = new SliderEffect(a[r], e, this);
          break;

        case 1:
          i = new AngleEffect(a[r], e, this);
          break;

        case 2:
          i = new ColorEffect(a[r], e, this);
          break;

        case 3:
          i = new PointEffect(a[r], e, this);
          break;

        case 4:
        case 7:
          i = new CheckboxEffect(a[r], e, this);
          break;

        case 10:
          i = new LayerIndexEffect(a[r], e, this);
          break;

        case 11:
          i = new MaskIndexEffect(a[r], e, this);
          break;

        case 5:
          i = new EffectsManager(a[r], e, this);
          break;

        default:
          i = new NoValueEffect(a[r], e, this);
      }

      i && this.effectElements.push(i);
    }
  };

  var lottie = {},
      _isFrozen = !1;

  function setLocationHref(t) {
    locationHref = t;
  }

  function searchAnimations() {
    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
  }

  function setSubframeRendering(t) {
    subframeEnabled = t;
  }

  function loadAnimation(t) {
    return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
  }

  function setQuality(t) {
    if ("string" == typeof t) switch (t) {
      case "high":
        defaultCurveSegments = 200;
        break;

      case "medium":
        defaultCurveSegments = 50;
        break;

      case "low":
        defaultCurveSegments = 10;
    } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
    roundValues(!(50 <= defaultCurveSegments));
  }

  function inBrowser() {
    return "undefined" != typeof navigator;
  }

  function installPlugin(t, e) {
    "expressions" === t && (expressionsPlugin = e);
  }

  function getFactory(t) {
    switch (t) {
      case "propertyFactory":
        return PropertyFactory;

      case "shapePropertyFactory":
        return ShapePropertyFactory;

      case "matrix":
        return Matrix;
    }
  }

  function checkReady() {
    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
  }

  function getQueryVariable(t) {
    for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
      var i = e[r].split("=");
      if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
    }
  }

  lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.__getFactory = getFactory, lottie.version = "5.7.3";
  var standalone = "__[STANDALONE]__",
      animationData = "__[ANIMATIONDATA]__",
      renderer = "";

  if (standalone) {
    var scripts = document.getElementsByTagName("script"),
        index = scripts.length - 1,
        myScript = scripts[index] || {
      src: ""
    },
        queryString = myScript.src.replace(/^[^\?]+\??/, "");
    renderer = getQueryVariable("renderer");
  }

  var readyStateCheckInterval = setInterval(checkReady, 100);
  return lottie;
});