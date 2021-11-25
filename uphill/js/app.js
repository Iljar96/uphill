"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function email_test(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
} // Function to make IE9+ support forEach:


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}

if (isIE()) {
  document.querySelector('html').classList.add('ie');
}

if (isMobile.any()) {
  document.querySelector('html').classList.add('_touch');
} // Получить цифры из строки
//parseInt(itemContactpagePhone.replace(/[^\d]/g, ''))


function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector('html').classList.add('_webp');
  } else {
    document.querySelector('html').classList.add('_no-webp');
  }
});

function ibg() {
  if (isIE()) {
    var _ibg = document.querySelectorAll("._ibg");

    for (var i = 0; i < _ibg.length; i++) {
      if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
        _ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}

ibg();
window.addEventListener("load", function () {
  if (document.querySelector('.wrapper')) {
    setTimeout(function () {
      document.querySelector('.wrapper').classList.add('_loaded');
    }, 0);
  }
});
var unlock = true; //=================
//ActionsOnHash

if (location.hash) {
  var hsh = location.hash.replace('#', '');

  if (document.querySelector('.popup_' + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector('div.' + hsh)) {
    _goto(document.querySelector('.' + hsh), 500, '');
  }
} //=================
//Menu


var iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
  var delay = 500;
  var menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    }
  });
}

;

function menu_close() {
  var iconMenu = document.querySelector(".icon-menu");
  var menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
} //=================
//BodyLock


function body_lock(delay) {
  var body = document.querySelector("body");

  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}

function body_lock_remove(delay) {
  var body = document.querySelector("body");

  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = '0px';
      }

      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}

function body_lock_add(delay) {
  var body = document.querySelector("body");

  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");

    for (var index = 0; index < lock_padding.length; index++) {
      var el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }

    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
} //=================
// LettersAnimation


var title = document.querySelectorAll('._letter-animation');

if (title) {
  for (var index = 0; index < title.length; index++) {
    var el = title[index];
    var txt = el.innerHTML;
    var txt_words = txt.replace('  ', ' ').split(' ');
    var new_title = '';

    for (var _index = 0; _index < txt_words.length; _index++) {
      var txt_word = txt_words[_index];
      var len = txt_word.length;
      new_title = new_title + '<p>';

      for (var _index2 = 0; _index2 < len; _index2++) {
        var it = txt_word.substr(_index2, 1);

        if (it == ' ') {
          it = '&nbsp;';
        }

        new_title = new_title + '<span>' + it + '</span>';
      }

      el.innerHTML = new_title;
      new_title = new_title + '&nbsp;</p>';
    }
  }
} //=================
//Tabs


var tabs = document.querySelectorAll("._tabs");

var _loop = function _loop(_index3) {
  var tab = tabs[_index3];
  var tabs_items = tab.querySelectorAll("._tabs-item");
  var tabs_blocks = tab.querySelectorAll("._tabs-block");

  var _loop9 = function _loop9(_index32) {
    var tabs_item = tabs_items[_index32];
    tabs_item.addEventListener("click", function (e) {
      for (var _index33 = 0; _index33 < tabs_items.length; _index33++) {
        var _tabs_item = tabs_items[_index33];

        _tabs_item.classList.remove('_active');

        tabs_blocks[_index33].classList.remove('_active');
      }

      tabs_item.classList.add('_active');

      tabs_blocks[_index32].classList.add('_active');

      e.preventDefault();
    });
  };

  for (var _index32 = 0; _index32 < tabs_items.length; _index32++) {
    _loop9(_index32);
  }
};

for (var _index3 = 0; _index3 < tabs.length; _index3++) {
  _loop(_index3);
} //=================

/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
// SPOLLERS


var spollersArray = document.querySelectorAll('[data-spollers]');

if (spollersArray.length > 0) {
  // Инициализация
  var initSpollers = function initSpollers(spollersArray) {
    var matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    spollersArray.forEach(function (spollersBlock) {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;

      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add('_init');
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove('_init');
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  }; // Работа с контентом


  var initSpollerBody = function initSpollerBody(spollersBlock) {
    var hideSpollerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');

    if (spollerTitles.length > 0) {
      spollerTitles.forEach(function (spollerTitle) {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');

          if (!spollerTitle.classList.contains('_active')) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  };

  var setSpollerAction = function setSpollerAction(e) {
    var el = e.target;

    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
      var spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
      var spollersBlock = spollerTitle.closest('[data-spollers]');
      var oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;

      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (oneSpoller && !spollerTitle.classList.contains('_active')) {
          hideSpollersBody(spollersBlock);
        }

        spollerTitle.classList.toggle('_active');

        _slideToggle(spollerTitle.nextElementSibling, 500);
      }

      e.preventDefault();
    }
  };

  var hideSpollersBody = function hideSpollersBody(spollersBlock) {
    var spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');

    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove('_active');

      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  };

  // Получение обычных слойлеров
  var spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0];
  }); // Инициализация обычных слойлеров

  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  } // Получение слойлеров с медиа запросами


  var spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
    return item.dataset.spollers.split(",")[0];
  }); // Инициализация слойлеров с медиа запросами

  if (spollersMedia.length > 0) {
    var breakpointsArray = [];
    spollersMedia.forEach(function (item) {
      var params = item.dataset.spollers;
      var breakpoint = {};
      var paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    }); // Получаем уникальные брейкпоинты

    var mediaQueries = breakpointsArray.map(function (item) {
      return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }); // Работаем с каждым брейкпоинтом

    mediaQueries.forEach(function (breakpoint) {
      var paramsArray = breakpoint.split(",");
      var mediaBreakpoint = paramsArray[1];
      var mediaType = paramsArray[2];
      var matchMedia = window.matchMedia(paramsArray[0]); // Объекты с нужными условиями

      var spollersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      }); // Событие

      matchMedia.addListener(function () {
        initSpollers(spollersArray, matchMedia);
      });
      initSpollers(spollersArray, matchMedia);
    });
  }
} //=================
//Gallery


var gallery = document.querySelectorAll('._gallery');

if (gallery) {
  gallery_init();
}

function gallery_init() {
  for (var _index4 = 0; _index4 < gallery.length; _index4++) {
    var _el = gallery[_index4];
    lightGallery(_el, {
      counter: false,
      selector: 'a',
      download: false
    });
  }
} //=================
//SearchInList


function search_in_list(input) {
  var ul = input.parentNode.querySelector('ul');
  var li = ul.querySelectorAll('li');
  var filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    var _el2 = li[i];
    var item = _el2;
    txtValue = item.textContent || item.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      _el2.style.display = "";
    } else {
      _el2.style.display = "none";
    }
  }
} //=================
//DigiFormat


function digi(str) {
  var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  return r;
} //=================
//DiGiAnimate


function digi_animate(digi_animate) {
  if (digi_animate.length > 0) {
    for (var _index5 = 0; _index5 < digi_animate.length; _index5++) {
      var _el3 = digi_animate[_index5];
      var el_to = parseInt(_el3.innerHTML.replace(' ', ''));

      if (!_el3.classList.contains('_done')) {
        digi_animate_value(_el3, 0, el_to, 1500);
      }
    }
  }
}

function digi_animate_value(el, start, end, duration) {
  var obj = el;
  var range = end - start; // no timer shorter than 50ms (not really visible any way)

  var minTimer = 50; // calc step time to show all interediate values

  var stepTime = Math.abs(Math.floor(duration / range)); // never go below minTimer

  stepTime = Math.max(stepTime, minTimer); // get current time and calculate desired end time

  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    obj.innerHTML = digi(value);

    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
  el.classList.add('_done');
} //=================
//Popups


var popup_link = document.querySelectorAll('._popup-link');
var popups = document.querySelectorAll('.popup');

var _loop2 = function _loop2(_index6) {
  var el = popup_link[_index6];
  el.addEventListener('click', function (e) {
    if (unlock) {
      var item = el.getAttribute('href').replace('#', '');
      var video = el.getAttribute('data-video');
      popup_open(item, video);
    }

    e.preventDefault();
  });
};

for (var _index6 = 0; _index6 < popup_link.length; _index6++) {
  _loop2(_index6);
}

for (var _index7 = 0; _index7 < popups.length; _index7++) {
  var popup = popups[_index7];
  popup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__body')) {
      popup_close(e.target.closest('.popup'));
    }
  });
}

function popup_open(item) {
  var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var activePopup = document.querySelectorAll('.popup._active');

  if (activePopup.length > 0) {
    popup_close('', false);
  }

  var curent_popup = document.querySelector('.popup_' + item);

  if (curent_popup && unlock) {
    if (video != '' && video != null) {
      var popup_video = document.querySelector('.popup_video');
      popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }

    if (!document.querySelector('.menu__body._active')) {
      body_lock_add(500);
    }

    curent_popup.classList.add('_active');
    history.pushState('', '', '#' + item);
  }
}

function popup_close(item) {
  var bodyUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlock) {
    if (!item) {
      for (var _index8 = 0; _index8 < popups.length; _index8++) {
        var _popup = popups[_index8];

        var video = _popup.querySelector('.popup__video');

        if (video) {
          video.innerHTML = '';
        }

        _popup.classList.remove('_active');
      }
    } else {
      var _video = item.querySelector('.popup__video');

      if (_video) {
        _video.innerHTML = '';
      }

      item.classList.remove('_active');
    }

    if (!document.querySelector('.menu__body._active') && bodyUnlock) {
      body_lock_remove(500);
    }

    history.pushState('', '', window.location.href.split('#')[0]);
  }
}

var popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');

if (popup_close_icon) {
  var _loop3 = function _loop3(_index9) {
    var el = popup_close_icon[_index9];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    });
  };

  for (var _index9 = 0; _index9 < popup_close_icon.length; _index9++) {
    _loop3(_index9);
  }
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    popup_close();
  }
}); //=================
//SlideToggle

var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (target.hidden) {
      target.hidden = false;
    }

    var height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(function () {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
}; //========================================
//Wrap


function _wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
} //========================================
//RemoveClasses


function _removeClasses(el, class_name) {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove(class_name);
  }
} //========================================
//IsHidden


function _is_hidden(el) {
  return el.offsetParent === null;
} // ShowMore Beta ========================


var moreBlocks = document.querySelectorAll('._more-block');

if (moreBlocks.length > 0) {
  (function () {
    var wrapper = document.querySelector('.wrapper');

    var _loop4 = function _loop4(_index10) {
      var moreBlock = moreBlocks[_index10];
      var items = moreBlock.querySelectorAll('._more-item');

      if (items.length > 0) {
        var setSize = function setSize(type) {
          var resultHeight;
          var itemsContentHeight = 0;
          var itemsContentStartHeight = 0;

          for (var _index11 = 0; _index11 < items.length; _index11++) {
            if (_index11 < itemsView) {
              itemsContentHeight += items[_index11].offsetHeight;
            }

            itemsContentStartHeight += items[_index11].offsetHeight;
          }

          resultHeight = type === 'start' ? itemsContentStartHeight : itemsContentHeight;
          isScrollStart = window.innerWidth - wrapper.offsetWidth;
          itemsContent.style.height = "".concat(resultHeight, "px");
        };

        var updateSize = function updateSize() {
          var isScrollEnd = window.innerWidth - wrapper.offsetWidth;

          if (isScrollStart === 0 && isScrollEnd > 0 || isScrollStart > 0 && isScrollEnd === 0) {
            if (itemsMore.classList.contains('_active')) {
              setSize('start');
            } else {
              setSize();
            }
          }
        };

        var itemsMore = moreBlock.querySelector('._more-link');
        var itemsContent = moreBlock.querySelector('._more-content');
        var itemsView = itemsContent.getAttribute('data-view');

        if (getComputedStyle(itemsContent).getPropertyValue("transition-duration") === '0s') {
          itemsContent.style.cssText = "transition-duration: 1ms";
        }

        itemsMore.addEventListener("click", function (e) {
          if (itemsMore.classList.contains('_active')) {
            setSize();
          } else {
            setSize('start');
          }

          itemsMore.classList.toggle('_active');
          e.preventDefault();
        });
        var isScrollStart;
        itemsContent.addEventListener("transitionend", updateSize, false);
        window.addEventListener("resize", function (e) {
          if (!itemsMore.classList.contains('_active')) {
            setSize();
          } else {
            setSize('start');
          }
        });
        setSize();
      }
    };

    for (var _index10 = 0; _index10 < moreBlocks.length; _index10++) {
      _loop4(_index10);
    }
  })();
} //==RATING======================================


var ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
  initRatings();
} // Основная функция


function initRatings() {
  var ratingActive, ratingValue; // "Бегаем" по всем рейтингам на странице

  for (var _index12 = 0; _index12 < ratings.length; _index12++) {
    var rating = ratings[_index12];
    initRating(rating);
  } // Инициализируем конкретный рейтинг


  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  } // Инициализайция переменных


  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  } // Изменяем ширину активных звезд


  function setRatingActiveWidth() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ratingValue.innerHTML;
    var ratingActiveWidth = index / 0.05;
    ratingActive.style.width = "".concat(ratingActiveWidth, "%");
  } // Возможность указать оценку 


  function setRating(rating) {
    var ratingItems = rating.querySelectorAll('.rating__item');

    var _loop5 = function _loop5(_index13) {
      var ratingItem = ratingItems[_index13];
      ratingItem.addEventListener("mouseenter", function (e) {
        // Обновление переменных
        initRatingVars(rating); // Обновление активных звезд

        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        // Обновление активных звезд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        // Обновление переменных
        initRatingVars(rating);

        if (rating.dataset.ajax) {
          // "Отправить" на сервер
          setRatingValue(ratingItem.value, rating);
        } else {
          // Отобразить указанную оцнку
          ratingValue.innerHTML = _index13 + 1;
          setRatingActiveWidth();
        }
      });
    };

    for (var _index13 = 0; _index13 < ratingItems.length; _index13++) {
      _loop5(_index13);
    }
  }

  function setRatingValue(_x, _x2) {
    return _setRatingValue.apply(this, arguments);
  }

  function _setRatingValue() {
    _setRatingValue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value, rating) {
      var response, result, newRating;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (rating.classList.contains('rating_sending')) {
                _context.next = 17;
                break;
              }

              rating.classList.add('rating_sending'); // Отправика данных (value) на сервер

              _context.next = 4;
              return fetch('rating.json', {
                method: 'GET' //body: JSON.stringify({
                //	userRating: value
                //}),
                //headers: {
                //	'content-type': 'application/json'
                //}

              });

            case 4:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 15;
                break;
              }

              _context.next = 8;
              return response.json();

            case 8:
              result = _context.sent;
              // Получаем новый рейтинг
              newRating = result.newRating; // Вывод нового среднего результата

              ratingValue.innerHTML = newRating; // Обновление активных звезд

              setRatingActiveWidth();
              rating.classList.remove('rating_sending');
              _context.next = 17;
              break;

            case 15:
              alert("Ошибка");
              rating.classList.remove('rating_sending');

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _setRatingValue.apply(this, arguments);
  }
} //========================================
//Animate


function animate(_ref) {
  var timing = _ref.timing,
      draw = _ref.draw,
      duration = _ref.duration;
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    var timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1; // вычисление текущего состояния анимации

    var progress = timing(timeFraction);
    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < .5) return timing(2 * timeFraction) / 2;else return (2 - timing(2 * (1 - timeFraction))) / 2;
  };
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/
//Полифилы


(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})();

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();

window.onload = function () {
  document.querySelectorAll('._hidden').forEach(function (item) {
    return item.classList.remove('_hidden');
  }); //Tabs line

  var navLine = document.querySelector('.documents__line'),
      navItem = document.querySelectorAll('.documents__navitem');

  if (navLine) {
    navLine.style.width = "".concat(navItem[0].offsetWidth, "px");
    navItem.forEach(function (el) {
      el.addEventListener('mouseenter', function (e) {
        setTimeout(function () {
          navLine.style.width = "".concat(e.target.offsetWidth, "px");
          navLine.style.left = "".concat(e.target.offsetLeft, "px");
        }, 10);
      });
      el.addEventListener('mouseleave', function () {
        var navItemActive = document.querySelector('.documents__navitem._active');
        navLine.style.width = "".concat(navItemActive.offsetWidth, "px");
        navLine.style.left = "".concat(navItemActive.offsetLeft, "px");
      });
    });
  }

  var formItems = document.querySelectorAll('.proposal-content__nav');
  var phoneText = 'Введите номер телефона';
  var emailText = 'Введите email';
  formItems.forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target.closest('.proposal-content__nav li')) {
        var input = e.target.closest('.proposal-content').querySelector('input[data-val]');
        e.target.closest('ul').querySelectorAll('li').forEach(function (el) {
          return el.classList.remove('_active');
        });
        e.target.classList.add('_active');
        input.classList.remove('_phone', '_email');

        if (e.target.getAttribute('data-type') === 'email') {
          input.classList.add('_email');
          input.setAttribute('placeholder', emailText);
          input.setAttribute('data-error', e.target.getAttribute('data-msg'));
        } else {
          input.classList.add('_phone');
          input.setAttribute('placeholder', phoneText);
          input.setAttribute('data-error', e.target.getAttribute('data-msg'));
        }
      }
    });
  });
  var center = [55.746294, 37.659030];
  var markerWidth = 79;
  var markerHeight = 100;

  if (window.matchMedia("(max-width: 1440.98px)").matches) {
    markerWidth = 40;
    markerHeight = 51;
  }

  function init() {
    var map = new ymaps.Map('map', {
      center: center,
      zoom: 17
    });
    var placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/location.png',
      iconImageSize: [markerWidth, markerHeight] // iconImageOffset: [-19, -55]

    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию

    map.controls.remove('searchControl'); // удаляем поиск

    map.controls.remove('trafficControl'); // удаляем контроль трафика

    map.controls.remove('typeSelector'); // удаляем тип

    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

    map.controls.remove('zoomControl'); // удаляем контрол зуммирования

    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};

var animationData = {
  "v": "5.7.3",
  "fr": 29.9700012207031,
  "ip": 0,
  "op": 914.000037227983,
  "w": 960,
  "h": 900,
  "nm": "UI-estimate",
  "ddd": 0,
  "assets": [{
    "id": "image_0",
    "w": 1849,
    "h": 900,
    "u": "img/intro-slider/",
    "p": "1.jpg",
    "e": 0
  }, {
    "id": "image_1",
    "w": 960,
    "h": 900,
    "u": "img/intro-slider/",
    "p": "2.jpg",
    "e": 0
  }, {
    "id": "image_2",
    "w": 960,
    "h": 900,
    "u": "img/intro-slider/",
    "p": "3.jpg",
    "e": 0
  }, {
    "id": "image_3",
    "w": 960,
    "h": 960,
    "u": "img/intro-slider/",
    "p": "4.jpg",
    "e": 0
  }, {
    "id": "image_4",
    "w": 1368,
    "h": 960,
    "u": "img/intro-slider/",
    "p": "1_0.jpg",
    "e": 0
  }, {
    "id": "image_5",
    "w": 960,
    "h": 900,
    "u": "img/intro-slider/",
    "p": "4_1.jpg",
    "e": 0
  }, {
    "id": "comp_0",
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 5,
      "nm": "пхилл",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0.836
            },
            "t": 648,
            "s": [540, 664, 0],
            "to": [0, -30, 0],
            "ti": [0, 30, 0]
          }, {
            "t": 677.000027574775,
            "s": [540, 484, 0]
          }],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "s": 150,
              "f": "OpenSans-Bold",
              "t": "пхилл",
              "j": 2,
              "tr": 0,
              "lh": 180,
              "ls": 0,
              "fc": [1, 1, 1]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 4496.00018312583,
      "st": 0,
      "bm": 0
    }]
  }],
  "fonts": {
    "list": [{
      "fName": "OpenSans-Bold",
      "fFamily": "Open Sans",
      "fStyle": "Bold",
      "ascent": 75.9994506835938
    }, {
      "fName": "SFUIDisplay-Light",
      "fFamily": "SF UI Display",
      "fStyle": "Light",
      "ascent": 73.53515625
    }, {
      "fName": "SFUIDisplay-Regular",
      "fFamily": "SF UI Display",
      "fStyle": "Regular",
      "ascent": 73.53515625
    }, {
      "fName": "SFUIDisplay-Bold",
      "fFamily": "SF UI Display",
      "fStyle": "Bold",
      "ascent": 73.828125
    }]
  },
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 5,
    "nm": "Сопровождаем вас после сдачи проекта",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 616,
          "s": [0]
        }, {
          "t": 641.000026108465,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.291,
            "y": 1
          },
          "t": 616,
          "s": [658, 739, 0],
          "to": [-10, 0, 0],
          "ti": [10, 0, 0]
        }, {
          "t": 657.000026760159,
          "s": [598, 739, 0]
        }],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "sz": [428, 172],
            "ps": [-214, -86],
            "s": 26,
            "f": "SFUIDisplay-Bold",
            "t": "Сопровождаем\rвас после сдачи\rпроекта",
            "j": 0,
            "tr": 0,
            "lh": 38,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 616.000025090194,
    "op": 812.000033073438,
    "st": 570.000023216576,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 2,
    "ty": 5,
    "nm": "04",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 616,
          "s": [0]
        }, {
          "t": 643.000026189927,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [227, 714, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [115, 115, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "s": 34,
            "f": "SFUIDisplay-Regular",
            "t": "04",
            "j": 0,
            "tr": 0,
            "lh": 40.8,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 616.000025090194,
    "op": 812.000033073438,
    "st": 570.000023216576,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 3,
    "ty": 5,
    "nm": "Все отчеты проверяет ученый в области экономики",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 420,
          "s": [0]
        }, {
          "t": 445.000018125222,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.291,
            "y": 1
          },
          "t": 420,
          "s": [658, 741, 0],
          "to": [-10, 0, 0],
          "ti": [10, 0, 0]
        }, {
          "t": 461.000018776915,
          "s": [598, 741, 0]
        }],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "sz": [428, 172],
            "ps": [-214, -86],
            "s": 26,
            "f": "SFUIDisplay-Bold",
            "t": "Все отчеты\rпроверяет ученый\rв области экономики",
            "j": 0,
            "tr": 0,
            "lh": 38,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 420.000017106951,
    "op": 616.000025090194,
    "st": 374.000015233332,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 4,
    "ty": 5,
    "nm": "03",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 420,
          "s": [0]
        }, {
          "t": 447.000018206683,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [227, 714, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [115, 115, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "s": 34,
            "f": "SFUIDisplay-Regular",
            "t": "03",
            "j": 0,
            "tr": 0,
            "lh": 40.8,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 420.000017106951,
    "op": 616.000025090194,
    "st": 374.000015233332,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 5,
    "ty": 5,
    "nm": "Быстрее в 2 раза.  Выезжаем на оценку даже в день обращения",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 224,
          "s": [0]
        }, {
          "t": 249.000010141978,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.291,
            "y": 1
          },
          "t": 224,
          "s": [658, 739, 0],
          "to": [-10, 0, 0],
          "ti": [10, 0, 0]
        }, {
          "t": 265.000010793671,
          "s": [598, 739, 0]
        }],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "sz": [428, 172],
            "ps": [-214, -86],
            "s": 26,
            "f": "SFUIDisplay-Bold",
            "t": "Быстрее в 2 раза. \rВыезжаем на оценку\rдаже в день обращения",
            "j": 0,
            "tr": 0,
            "lh": 38,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 224.000009123707,
    "op": 420.000017106951,
    "st": 178.000007250089,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 6,
    "ty": 5,
    "nm": "02",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 224,
          "s": [0]
        }, {
          "t": 251.00001022344,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [227, 714, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [115, 115, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "s": 34,
            "f": "SFUIDisplay-Regular",
            "t": "02",
            "j": 0,
            "tr": 0,
            "lh": 40.8,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 224.000009123707,
    "op": 420.000017106951,
    "st": 178.000007250089,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 7,
    "ty": 5,
    "nm": "100% соответствие российским и международным  стандартам    ",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 46,
          "s": [0]
        }, {
          "t": 71.0000028918893,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.291,
            "y": 1
          },
          "t": 46,
          "s": [658, 718, 0],
          "to": [-10, 0, 0],
          "ti": [10, 0, 0]
        }, {
          "t": 87.0000035435826,
          "s": [598, 718, 0]
        }],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "sz": [428, 172],
            "ps": [-214, -86],
            "s": 26,
            "f": "SFUIDisplay-Bold",
            "t": "100% соответствие\rроссийским\rи международным \rстандартам  \r\r",
            "j": 0,
            "tr": 0,
            "lh": 38,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 0,
    "op": 224.000009123707,
    "st": 0,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 8,
    "ty": 5,
    "nm": "01",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 46,
          "s": [0]
        }, {
          "t": 73.000002973351,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [227, 714, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [115, 115, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "s": 34,
            "f": "SFUIDisplay-Regular",
            "t": "01",
            "j": 0,
            "tr": 0,
            "lh": 40.8,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": 0,
    "op": 224.000009123707,
    "st": 0,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 9,
    "ty": 4,
    "nm": "Shape Layer 1",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [467, 393, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "shapes": [{
      "ty": "gr",
      "it": [{
        "d": 1,
        "ty": "el",
        "s": {
          "a": 0,
          "k": [161, 161],
          "ix": 2
        },
        "p": {
          "a": 0,
          "k": [0, 0],
          "ix": 3
        },
        "nm": "Ellipse Path 1",
        "mn": "ADBE Vector Shape - Ellipse",
        "hd": false
      }, {
        "ty": "st",
        "c": {
          "a": 0,
          "k": [1, 1, 1, 1],
          "ix": 3
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 4
        },
        "w": {
          "a": 0,
          "k": 4,
          "ix": 5
        },
        "lc": 1,
        "lj": 1,
        "ml": 4,
        "bm": 0,
        "nm": "Stroke 1",
        "mn": "ADBE Vector Graphic - Stroke",
        "hd": false
      }, {
        "ty": "tr",
        "p": {
          "a": 0,
          "k": [-216.5, 307.5],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100],
          "ix": 3
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 6
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 7
        },
        "sk": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "sa": {
          "a": 0,
          "k": 0,
          "ix": 5
        },
        "nm": "Transform"
      }],
      "nm": "Ellipse 2",
      "np": 3,
      "cix": 2,
      "bm": 0,
      "ix": 1,
      "mn": "ADBE Vector Group",
      "hd": false
    }, {
      "ty": "tm",
      "s": {
        "a": 0,
        "k": 0,
        "ix": 1
      },
      "e": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 46,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 224,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 225,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 420,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 421,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 616,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 617,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 812,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 813,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 893,
          "s": [100]
        }, {
          "t": 894.000036413367,
          "s": [0]
        }],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "m": 1,
      "ix": 2,
      "nm": "Trim Paths 1",
      "mn": "ADBE Vector Filter - Trim",
      "hd": false
    }],
    "ip": 0,
    "op": 812.000033073438,
    "st": 0,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 10,
    "ty": 4,
    "nm": ". Outlines",
    "parent": 11,
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 0,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 12,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 801,
          "s": [100]
        }, {
          "t": 830.000033806593,
          "s": [0]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [300.715, 238.363, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ind": 0,
        "ty": "sh",
        "ix": 1,
        "ks": {
          "a": 0,
          "k": {
            "i": [[-27.026, 0], [0, 26.726], [27.026, 0], [0, -27.026]],
            "o": [[27.026, 0], [0, -27.026], [-27.026, 0], [0, 26.726]],
            "v": [[85.583, 3.604], [133.931, -44.744], [85.583, -93.091], [37.236, -44.744]],
            "c": true
          },
          "ix": 2
        },
        "nm": ".",
        "mn": "ADBE Vector Shape - Group",
        "hd": false
      }, {
        "ty": "st",
        "c": {
          "a": 0,
          "k": [1, 1, 1, 1],
          "ix": 3
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 4
        },
        "w": {
          "a": 0,
          "k": 3,
          "ix": 5
        },
        "lc": 1,
        "lj": 1,
        "ml": 4,
        "bm": 0,
        "nm": "Stroke 1",
        "mn": "ADBE Vector Graphic - Stroke",
        "hd": false
      }, {
        "ty": "fl",
        "c": {
          "a": 0,
          "k": [1, 1, 1, 1],
          "ix": 4
        },
        "o": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 65,
            "s": [0]
          }, {
            "t": 100.000004073084,
            "s": [100]
          }],
          "ix": 5
        },
        "r": 1,
        "bm": 0,
        "nm": "Fill 1",
        "mn": "ADBE Vector Graphic - Fill",
        "hd": false
      }, {
        "ty": "tr",
        "p": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100],
          "ix": 3
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 6
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 7
        },
        "sk": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "sa": {
          "a": 0,
          "k": 0,
          "ix": 5
        },
        "nm": "Transform"
      }],
      "nm": ".",
      "np": 3,
      "cix": 2,
      "bm": 0,
      "ix": 1,
      "mn": "ADBE Vector Group",
      "hd": false
    }, {
      "ty": "tm",
      "s": {
        "a": 0,
        "k": 0,
        "ix": 1
      },
      "e": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667],
            "y": [1]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 0,
          "s": [0]
        }, {
          "t": 54.0000021994651,
          "s": [100]
        }],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "m": 1,
      "ix": 2,
      "nm": "Trim Paths 1",
      "mn": "ADBE Vector Filter - Trim",
      "hd": false
    }],
    "ip": -49.0000019958109,
    "op": 4496.00018312584,
    "st": 0,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 11,
    "ty": 4,
    "nm": "A Outlines",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 0,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 18,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 891,
          "s": [100]
        }, {
          "t": 913.000037187252,
          "s": [0]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.833,
            "y": 0.833
          },
          "o": {
            "x": 0.333,
            "y": 0.333
          },
          "t": 0,
          "s": [423, 457.75, 0],
          "to": [0, 0, 0],
          "ti": [0, 0, 0]
        }, {
          "i": {
            "x": 0.468,
            "y": 1
          },
          "o": {
            "x": 0.208,
            "y": 0.65
          },
          "t": 39,
          "s": [423, 457.75, 0],
          "to": [-14.902, -20.831, 0],
          "ti": [18.219, 25.467, 0]
        }, {
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.001,
            "y": 1
          },
          "t": 90,
          "s": [334.996, 347.541, 0],
          "to": [-0.731, -1.022, 0],
          "ti": [0, 0, 0]
        }, {
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.333,
            "y": 0.757
          },
          "t": 811,
          "s": [334.996, 347.541, 0],
          "to": [0, 0, 0],
          "ti": [0, 0, 0]
        }, {
          "t": 840.000034213901,
          "s": [225.996, 420.041, 0]
        }],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [1, 1, 1]
          },
          "o": {
            "x": [0.167, 0.167, 0.167],
            "y": [0, 0, 0.163]
          },
          "t": 0,
          "s": [101, 101, 100]
        }, {
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [1, 1, 1]
          },
          "o": {
            "x": [0.333, 0.333, 0.333],
            "y": [0.731, 0.731, 0]
          },
          "t": 39,
          "s": [101, 101, 100]
        }, {
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [1, 1, 1]
          },
          "o": {
            "x": [0.333, 0.333, 0.333],
            "y": [0, 0, 0]
          },
          "t": 90,
          "s": [65.614, 65.614, 100]
        }, {
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [1, 1, 1]
          },
          "o": {
            "x": [0.333, 0.333, 0.333],
            "y": [0.781, 0.781, 0]
          },
          "t": 811,
          "s": [65.614, 65.614, 100]
        }, {
          "t": 840.000034213901,
          "s": [27, 27, 100]
        }],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ind": 0,
        "ty": "sh",
        "ix": 1,
        "ks": {
          "a": 0,
          "k": {
            "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
            "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
            "v": [[18.974, -174.195], [21.466, -174.195], [87.318, 36.176], [-46.878, 36.176]],
            "c": true
          },
          "ix": 2
        },
        "nm": "A",
        "mn": "ADBE Vector Shape - Group",
        "hd": false
      }, {
        "ind": 1,
        "ty": "sh",
        "ix": 2,
        "ks": {
          "a": 0,
          "k": {
            "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            "v": [[149.611, 241.207], [263.873, 241.207], [85.182, -272.439], [-41.182, -272.439], [-219.517, 241.207], [-109.17, 241.207], [-70.015, 116.622], [110.455, 116.622]],
            "c": true
          },
          "ix": 2
        },
        "nm": "A",
        "mn": "ADBE Vector Shape - Group",
        "hd": false
      }, {
        "ty": "tm",
        "s": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 0,
            "s": [0]
          }, {
            "t": 79.000003217736,
            "s": [0]
          }],
          "ix": 1
        },
        "e": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 0,
            "s": [76]
          }, {
            "t": 79.000003217736,
            "s": [100]
          }],
          "ix": 2
        },
        "o": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 0,
            "s": [0]
          }, {
            "t": 79.000003217736,
            "s": [110]
          }],
          "ix": 3
        },
        "m": 1,
        "ix": 3,
        "nm": "Trim Paths 2",
        "mn": "ADBE Vector Filter - Trim",
        "hd": false
      }, {
        "ty": "mm",
        "mm": 1,
        "nm": "Merge Paths 1",
        "mn": "ADBE Vector Filter - Merge",
        "hd": false
      }, {
        "ty": "st",
        "c": {
          "a": 0,
          "k": [1, 1, 1, 1],
          "ix": 3
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 4
        },
        "w": {
          "a": 0,
          "k": 3,
          "ix": 5
        },
        "lc": 1,
        "lj": 1,
        "ml": 4,
        "bm": 0,
        "nm": "Stroke 1",
        "mn": "ADBE Vector Graphic - Stroke",
        "hd": false
      }, {
        "ty": "fl",
        "c": {
          "a": 0,
          "k": [1, 1, 1, 1],
          "ix": 4
        },
        "o": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 66,
            "s": [0]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 101,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 225,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 245,
            "s": [0]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 283,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 422,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 442,
            "s": [0]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.167],
              "y": [0]
            },
            "t": 480,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 615,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 635,
            "s": [0]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.167],
              "y": [0]
            },
            "t": 673,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 811,
            "s": [100]
          }, {
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 831,
            "s": [0]
          }, {
            "t": 869.000035395096,
            "s": [100]
          }],
          "ix": 5
        },
        "r": 1,
        "bm": 0,
        "nm": "Fill 1",
        "mn": "ADBE Vector Graphic - Fill",
        "hd": false
      }, {
        "ty": "tr",
        "p": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100],
          "ix": 3
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 6
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 7
        },
        "sk": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "sa": {
          "a": 0,
          "k": 0,
          "ix": 5
        },
        "nm": "Transform"
      }],
      "nm": "A",
      "np": 6,
      "cix": 2,
      "bm": 0,
      "ix": 1,
      "mn": "ADBE Vector Group",
      "hd": false
    }, {
      "ty": "gr",
      "it": [{
        "ty": "fl",
        "c": {
          "a": 0,
          "k": [1, 1, 1, 1],
          "ix": 4
        },
        "o": {
          "a": 1,
          "k": [{
            "i": {
              "x": [0.667],
              "y": [1]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 66,
            "s": [0]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.333],
              "y": [0]
            },
            "t": 101,
            "s": [0]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 179,
            "s": [100]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 191,
            "s": [0]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 225,
            "s": [100]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 328,
            "s": [100]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 340,
            "s": [0]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 374,
            "s": [100]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 477,
            "s": [100]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 489,
            "s": [0]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 523,
            "s": [100]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 820,
            "s": [100]
          }, {
            "i": {
              "x": [0.833],
              "y": [0.833]
            },
            "o": {
              "x": [0.167],
              "y": [0.167]
            },
            "t": 832,
            "s": [100]
          }, {
            "t": 866.000035272903,
            "s": [100]
          }],
          "ix": 5
        },
        "r": 1,
        "bm": 0,
        "nm": "Fill 1",
        "mn": "ADBE Vector Graphic - Fill",
        "hd": false
      }, {
        "ty": "tr",
        "p": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100],
          "ix": 3
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 6
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 7
        },
        "sk": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "sa": {
          "a": 0,
          "k": 0,
          "ix": 5
        },
        "nm": "Transform"
      }],
      "nm": "Group 1",
      "np": 1,
      "cix": 2,
      "bm": 0,
      "ix": 2,
      "mn": "ADBE Vector Group",
      "hd": false
    }],
    "ip": 0,
    "op": 4496.00018312583,
    "st": 0,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 12,
    "ty": 5,
    "nm": "На рынке с 2009 года",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 811,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 843,
          "s": [100]
        }, {
          "t": 884.000036006058,
          "s": [0]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [474, 634.5, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "t": {
      "d": {
        "k": [{
          "s": {
            "sz": [740, 129],
            "ps": [-364, -20.5],
            "s": 59,
            "f": "SFUIDisplay-Light",
            "t": "На рынке с 2009 года",
            "j": 2,
            "tr": 0,
            "lh": 70.8,
            "ls": 0,
            "fc": [1, 1, 1]
          },
          "t": 0
        }]
      },
      "p": {},
      "m": {
        "g": 1,
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        }
      },
      "a": []
    },
    "ip": -42.0000017106951,
    "op": 1338.00005449786,
    "st": -42.0000017106951,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 13,
    "ty": 4,
    "nm": "Shape Layer 2",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [464, 416, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [0, 0, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "shapes": [{
      "ty": "gr",
      "it": [{
        "ind": 0,
        "ty": "sh",
        "ix": 1,
        "ks": {
          "a": 0,
          "k": {
            "i": [[0, 0], [0, 0]],
            "o": [[0, 0], [0, 0]],
            "v": [[-286, 139], [285, 139]],
            "c": false
          },
          "ix": 2
        },
        "nm": "Path 1",
        "mn": "ADBE Vector Shape - Group",
        "hd": false
      }, {
        "ty": "st",
        "c": {
          "a": 0,
          "k": [1, 1, 1, 1],
          "ix": 3
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 4
        },
        "w": {
          "a": 0,
          "k": 5,
          "ix": 5
        },
        "lc": 1,
        "lj": 1,
        "ml": 4,
        "bm": 0,
        "nm": "Stroke 1",
        "mn": "ADBE Vector Graphic - Stroke",
        "hd": false
      }, {
        "ty": "fl",
        "c": {
          "a": 0,
          "k": [0.941175991881, 0.941175991881, 0.941175991881, 1],
          "ix": 4
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 5
        },
        "r": 1,
        "bm": 0,
        "nm": "Fill 1",
        "mn": "ADBE Vector Graphic - Fill",
        "hd": false
      }, {
        "ty": "tr",
        "p": {
          "a": 0,
          "k": [0, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100],
          "ix": 3
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 6
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 7
        },
        "sk": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "sa": {
          "a": 0,
          "k": 0,
          "ix": 5
        },
        "nm": "Transform"
      }],
      "nm": "Shape 1",
      "np": 3,
      "cix": 2,
      "bm": 0,
      "ix": 1,
      "mn": "ADBE Vector Group",
      "hd": false
    }, {
      "ty": "tm",
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667],
            "y": [1]
          },
          "o": {
            "x": [0.333],
            "y": [0]
          },
          "t": 833,
          "s": [0]
        }, {
          "t": 867.000035313634,
          "s": [100]
        }],
        "ix": 1
      },
      "e": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667],
            "y": [1]
          },
          "o": {
            "x": [0.333],
            "y": [0]
          },
          "t": 811,
          "s": [0]
        }, {
          "t": 844.000034376825,
          "s": [100]
        }],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "m": 1,
      "ix": 2,
      "nm": "Trim Paths 1",
      "mn": "ADBE Vector Filter - Trim",
      "hd": false
    }],
    "ip": 147.000005987433,
    "op": 4643.00018911327,
    "st": 147.000005987433,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 14,
    "ty": 0,
    "nm": "ynGen Comp 1",
    "refId": "comp_0",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 872,
          "s": [100]
        }, {
          "t": 894.000036413367,
          "s": [0]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [482, 452, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "hasMask": true,
    "masksProperties": [{
      "inv": false,
      "mode": "a",
      "pt": {
        "a": 0,
        "k": {
          "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
          "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
          "v": [[776, 350], [186, 350], [186, 523], [776, 523]],
          "c": true
        },
        "ix": 1
      },
      "o": {
        "a": 0,
        "k": 100,
        "ix": 3
      },
      "x": {
        "a": 0,
        "k": 0,
        "ix": 4
      },
      "nm": "Mask 1"
    }],
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "w": 960,
    "h": 900,
    "ip": 159.000006476203,
    "op": 4655.00018960204,
    "st": 159.000006476203,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 16,
    "ty": 2,
    "nm": "1.jpg",
    "cl": "jpg",
    "refId": "image_0",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 0,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 8,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 781,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 782,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 811,
          "s": [0]
        }, {
          "t": 831.000033847324,
          "s": [100]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.333,
            "y": 0.793
          },
          "t": 39,
          "s": [1228, 450, 0],
          "to": [-202.667, 0, 0],
          "ti": [202.667, 0, 0]
        }, {
          "i": {
            "x": 0.833,
            "y": 0.833
          },
          "o": {
            "x": 0.167,
            "y": 0.167
          },
          "t": 89,
          "s": [12, 450, 0],
          "to": [0, 0, 0],
          "ti": [0, 0, 0]
        }, {
          "i": {
            "x": 0.833,
            "y": 0.833
          },
          "o": {
            "x": 0.167,
            "y": 0.167
          },
          "t": 810,
          "s": [12, 450, 0],
          "to": [202.667, 0, 0],
          "ti": [-202.667, 0, 0]
        }, {
          "t": 811.000033032707,
          "s": [1228, 450, 0]
        }],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [924.5, 450, 0],
        "ix": 1
      },
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833, 0.833, 0.833],
            "y": [0.833, 0.833, 0.833]
          },
          "o": {
            "x": [0.167, 0.167, 0.167],
            "y": [0.167, 0.167, 0.167]
          },
          "t": 0,
          "s": [150, 150, 100]
        }, {
          "i": {
            "x": [0.833, 0.833, 0.833],
            "y": [0.833, 0.833, 0.833]
          },
          "o": {
            "x": [0.167, 0.167, 0.167],
            "y": [0.167, 0.167, 0.167]
          },
          "t": 39,
          "s": [140, 140, 100]
        }, {
          "i": {
            "x": [0.833, 0.833, 0.833],
            "y": [0.833, 0.833, 0.833]
          },
          "o": {
            "x": [0.167, 0.167, 0.167],
            "y": [0.167, 0.167, 0.167]
          },
          "t": 247,
          "s": [100, 100, 100]
        }, {
          "i": {
            "x": [0.833, 0.833, 0.833],
            "y": [0.833, 0.833, 0.833]
          },
          "o": {
            "x": [0.167, 0.167, 0.167],
            "y": [0.167, 0.167, 0.167]
          },
          "t": 810,
          "s": [100, 100, 100]
        }, {
          "t": 811.000033032707,
          "s": [150, 150, 100]
        }],
        "ix": 6
      }
    },
    "ao": 0,
    "hasMask": true,
    "masksProperties": [{
      "inv": false,
      "mode": "a",
      "pt": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.833,
            "y": 0.833
          },
          "o": {
            "x": 0.167,
            "y": 0.167
          },
          "t": 39,
          "s": [{
            "i": [[417.976, 0], [0, -372.24], [-417.977, 0], [0, 372.24]],
            "o": [[-417.976, 0], [0, 372.24], [417.977, 0], [0, -372.24]],
            "v": [[476.018, -232], [-280.794, 442], [476.018, 1116], [1232.831, 442]],
            "c": true
          }]
        }, {
          "i": {
            "x": 0.667,
            "y": 0.174
          },
          "o": {
            "x": 0.167,
            "y": 0.167
          },
          "t": 58,
          "s": [{
            "i": [[570.66, 0], [0, -372.24], [-570.661, 0], [0, 372.24]],
            "o": [[-570.66, 0], [0, 372.24], [570.661, 0], [0, -372.24]],
            "v": [[1077.804, -232], [44.533, 442], [1077.804, 1116], [2111.076, 442]],
            "c": true
          }]
        }, {
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.333,
            "y": 0.826
          },
          "t": 223,
          "s": [{
            "i": [[353.725, 0], [0, -357.074], [-353.726, 0], [0, 357.074]],
            "o": [[-353.725, 0], [0, 357.074], [353.726, 0], [0, -357.074]],
            "v": [[1372.815, -194.637], [732.339, 451.903], [1372.815, 1098.444], [2013.292, 451.903]],
            "c": true
          }]
        }, {
          "i": {
            "x": 0.833,
            "y": 0.833
          },
          "o": {
            "x": 0.167,
            "y": 0
          },
          "t": 269,
          "s": [{
            "i": [[15.555, 0], [0, -15.891], [-15.555, 0], [0, 15.891]],
            "o": [[-15.555, 0], [0, 15.891], [15.555, 0], [0, -15.891]],
            "v": [[1501.336, 445.952], [1473.172, 474.726], [1501.336, 503.5], [1529.5, 474.726]],
            "c": true
          }]
        }, {
          "i": {
            "x": 0.833,
            "y": 0.833
          },
          "o": {
            "x": 0.167,
            "y": 0.167
          },
          "t": 810,
          "s": [{
            "i": [[15.555, 0], [0, -15.891], [-15.555, 0], [0, 15.891]],
            "o": [[-15.555, 0], [0, 15.891], [15.555, 0], [0, -15.891]],
            "v": [[1501.336, 445.952], [1473.172, 474.726], [1501.336, 503.5], [1529.5, 474.726]],
            "c": true
          }]
        }, {
          "t": 811.000033032707,
          "s": [{
            "i": [[353.725, 0], [0, -357.074], [-353.726, 0], [0, 357.074]],
            "o": [[-353.725, 0], [0, 357.074], [353.726, 0], [0, -357.074]],
            "v": [[412.815, -194.637], [-227.661, 451.903], [412.815, 1098.444], [1053.292, 451.903]],
            "c": true
          }]
        }],
        "ix": 1
      },
      "o": {
        "a": 0,
        "k": 100,
        "ix": 3
      },
      "x": {
        "a": 0,
        "k": 0,
        "ix": 4
      },
      "nm": "Mask 1"
    }],
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "ip": 0,
    "op": 1102.00004488538,
    "st": 0,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 17,
    "ty": 2,
    "nm": "2.jpg",
    "cl": "jpg",
    "refId": "image_1",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [508, 474, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 1
      },
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [0.89, 0.89, 1]
          },
          "o": {
            "x": [0.333, 0.333, 0.333],
            "y": [0.792, 0.792, 0]
          },
          "t": 223,
          "s": [180, 180, 100]
        }, {
          "i": {
            "x": [0.67, 0.67, 0.833],
            "y": [0.547, 0.547, 1]
          },
          "o": {
            "x": [0.374, 0.374, 0.333],
            "y": [0.459, 0.459, 0]
          },
          "t": 270,
          "s": [140, 140, 100]
        }, {
          "t": 444.000018084491,
          "s": [100, 100, 100]
        }],
        "ix": 6
      }
    },
    "ao": 0,
    "hasMask": true,
    "masksProperties": [{
      "inv": false,
      "mode": "a",
      "pt": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.329,
            "y": 1
          },
          "t": 420,
          "s": [{
            "i": [[349.425, 0], [0, -349.425], [-349.426, 0], [0, 349.425]],
            "o": [[-349.425, 0], [0, 349.425], [349.426, 0], [0, -349.425]],
            "v": [[447.856, -198.547], [-184.834, 434.144], [447.856, 1066.835], [1080.547, 434.144]],
            "c": true
          }]
        }, {
          "t": 466.000018980569,
          "s": [{
            "i": [[17.742, 0], [0, -17.742], [-17.742, 0], [0, 17.742]],
            "o": [[-17.742, 0], [0, 17.742], [17.742, 0], [0, -17.742]],
            "v": [[559.875, 418.5], [527.75, 450.625], [559.875, 482.75], [592, 450.625]],
            "c": true
          }]
        }],
        "ix": 1
      },
      "o": {
        "a": 0,
        "k": 100,
        "ix": 3
      },
      "x": {
        "a": 0,
        "k": 0,
        "ix": 4
      },
      "nm": "Mask 1"
    }],
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "ip": 223.000009082976,
    "op": 467.0000190213,
    "st": 44.0000017921567,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 18,
    "ty": 2,
    "nm": "3.jpg",
    "cl": "jpg",
    "refId": "image_2",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 1
      },
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [0.89, 0.89, 1]
          },
          "o": {
            "x": [0.333, 0.333, 0.333],
            "y": [0.792, 0.792, 0]
          },
          "t": 420,
          "s": [180, 180, 100]
        }, {
          "i": {
            "x": [0.67, 0.67, 0.833],
            "y": [0.549, 0.549, 1]
          },
          "o": {
            "x": [0.374, 0.374, 0.333],
            "y": [0.456, 0.456, 0]
          },
          "t": 467,
          "s": [140, 140, 100]
        }, {
          "t": 640.000026067734,
          "s": [100, 100, 100]
        }],
        "ix": 6
      }
    },
    "ao": 0,
    "hasMask": true,
    "masksProperties": [{
      "inv": false,
      "mode": "a",
      "pt": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.329,
            "y": 1
          },
          "t": 616,
          "s": [{
            "i": [[349.425, 0], [0, -349.425], [-349.426, 0], [0, 349.425]],
            "o": [[-349.425, 0], [0, 349.426], [349.426, 0], [0, -349.425]],
            "v": [[447.856, -198.547], [-184.834, 434.144], [447.856, 1066.835], [1080.547, 434.144]],
            "c": true
          }]
        }, {
          "t": 662.000026963813,
          "s": [{
            "i": [[17.742, 0], [0, -17.742], [-17.742, 0], [0, 17.742]],
            "o": [[-17.742, 0], [0, 17.742], [17.742, 0], [0, -17.742]],
            "v": [[588.813, 442.5], [556.688, 474.625], [588.813, 506.75], [620.938, 474.625]],
            "c": true
          }]
        }],
        "ix": 1
      },
      "o": {
        "a": 0,
        "k": 100,
        "ix": 3
      },
      "x": {
        "a": 0,
        "k": 0,
        "ix": 4
      },
      "nm": "Mask 1"
    }],
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "ip": 420.000017106951,
    "op": 795.000032381014,
    "st": 15.0000006109625,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 19,
    "ty": 2,
    "nm": "4.jpg",
    "cl": "jpg",
    "refId": "image_3",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 1283,
          "s": [100]
        }, {
          "t": 1296.00005278716,
          "s": [0]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [480, 480, 0],
        "ix": 1
      },
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [0.926, 0.926, 1]
          },
          "o": {
            "x": [0.333, 0.333, 0.333],
            "y": [0.67, 0.67, 0]
          },
          "t": 1111,
          "s": [170, 170, 100]
        }, {
          "i": {
            "x": [0.67, 0.67, 0.833],
            "y": [0.562, 0.562, 1]
          },
          "o": {
            "x": [0.374, 0.374, 0.333],
            "y": [0.298, 0.298, 0]
          },
          "t": 1158,
          "s": [130, 130, 100]
        }, {
          "t": 1284.00005229839,
          "s": [100, 100, 100]
        }],
        "ix": 6
      }
    },
    "ao": 0,
    "hasMask": true,
    "masksProperties": [{
      "inv": false,
      "mode": "a",
      "pt": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.329,
            "y": 1
          },
          "t": 1260,
          "s": [{
            "i": [[372.239, 0], [0, -372.24], [-372.24, 0], [0, 372.24]],
            "o": [[-372.239, 0], [0, 372.24], [372.24, 0], [0, -372.24]],
            "v": [[580, -202], [-94, 472], [580, 1146], [1254, 472]],
            "c": true
          }]
        }, {
          "t": 1306.00005319447,
          "s": [{
            "i": [[17.742, 0], [0, -17.742], [-17.742, 0], [0, 17.742]],
            "o": [[-17.742, 0], [0, 17.742], [17.742, 0], [0, -17.742]],
            "v": [[559.875, 448.5], [527.75, 480.625], [559.875, 512.75], [592, 480.625]],
            "c": true
          }]
        }],
        "ix": 1
      },
      "o": {
        "a": 0,
        "k": 100,
        "ix": 3
      },
      "x": {
        "a": 0,
        "k": 0,
        "ix": 4
      },
      "nm": "Mask 1"
    }],
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "ip": 1109.0000451705,
    "op": 1306.00005319447,
    "st": 585.000023827538,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 20,
    "ty": 2,
    "nm": "1.jpg",
    "cl": "jpg",
    "refId": "image_4",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [896, 450, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [684, 480, 0],
        "ix": 1
      },
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833, 0.833, 0.833],
            "y": [0.833, 0.833, 0.833]
          },
          "o": {
            "x": [0.167, 0.167, 0.167],
            "y": [0.167, 0.167, 0.167]
          },
          "t": 1089,
          "s": [160, 160, 100]
        }, {
          "t": 1182.00004814385,
          "s": [140, 140, 100]
        }],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "ip": 1089.00004435588,
    "op": 1314.00005352032,
    "st": 1088.00004431515,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 21,
    "ty": 2,
    "nm": "4.jpg",
    "cl": "jpg",
    "refId": "image_5",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 1
      },
      "s": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.667, 0.667, 0.667],
            "y": [0.89, 0.89, 1]
          },
          "o": {
            "x": [0.333, 0.333, 0.333],
            "y": [0.792, 0.792, 0]
          },
          "t": 616,
          "s": [180, 180, 100]
        }, {
          "i": {
            "x": [0.67, 0.67, 0.833],
            "y": [0.505, 0.505, 1]
          },
          "o": {
            "x": [0.374, 0.374, 0.333],
            "y": [0.501, 0.501, 0]
          },
          "t": 663,
          "s": [140, 140, 100]
        }, {
          "t": 853.000034743402,
          "s": [100, 100, 100]
        }],
        "ix": 6
      }
    },
    "ao": 0,
    "hasMask": true,
    "masksProperties": [{
      "inv": false,
      "mode": "a",
      "pt": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.667,
            "y": 1
          },
          "o": {
            "x": 0.329,
            "y": 1
          },
          "t": 829,
          "s": [{
            "i": [[349.425, 0], [0, -349.425], [-349.426, 0], [0, 349.425]],
            "o": [[-349.425, 0], [0, 349.426], [349.426, 0], [0, -349.425]],
            "v": [[447.856, -198.547], [-184.834, 434.144], [447.856, 1066.835], [1080.547, 434.144]],
            "c": true
          }]
        }, {
          "t": 875.000035639481,
          "s": [{
            "i": [[17.742, 0], [0, -17.742], [-17.742, 0], [0, 17.742]],
            "o": [[-17.742, 0], [0, 17.742], [17.742, 0], [0, -17.742]],
            "v": [[559.875, 418.5], [527.75, 450.625], [559.875, 482.75], [592, 450.625]],
            "c": true
          }]
        }],
        "ix": 1
      },
      "o": {
        "a": 0,
        "k": 100,
        "ix": 3
      },
      "x": {
        "a": 0,
        "k": 0,
        "ix": 4
      },
      "nm": "Mask 1"
    }],
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "ip": 615.000025049463,
    "op": 1351.00005502736,
    "st": -29.0000011811942,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 22,
    "ty": 1,
    "nm": "White Solid 1",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [480, 450, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "sw": 960,
    "sh": 900,
    "sc": "#ffffff",
    "ip": 0,
    "op": 4496.00018312583,
    "st": 0,
    "bm": 0
  }],
  "markers": [],
  "chars": [{
    "ch": "п",
    "size": 150,
    "style": "Bold",
    "w": 65.19,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[7.813, -54.59], [7.813, 0], [22.705, 0], [22.705, -43.408], [42.48, -43.408], [42.48, 0], [57.422, 0], [57.422, -54.59]],
              "c": true
            },
            "ix": 2
          },
          "nm": "п",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "п",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Open Sans"
  }, {
    "ch": "х",
    "size": 150,
    "style": "Bold",
    "w": 57.81,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[0.488, 0], [17.383, 0], [28.906, -18.701], [40.381, 0], [57.324, 0], [38.721, -27.881], [56.494, -54.59], [39.6, -54.59], [28.906, -37.207], [18.311, -54.59], [1.416, -54.59], [18.994, -27.881]],
              "c": true
            },
            "ix": 2
          },
          "nm": "х",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "х",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Open Sans"
  }, {
    "ch": "и",
    "size": 150,
    "style": "Bold",
    "w": 72.02,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, -3.873], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 2.279], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [-0.652, 7.064], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.748, -8.854], [0, 0], [0, 0]],
              "v": [[7.813, -54.59], [7.813, 0], [25.684, 0], [50.781, -38.184], [49.805, -21.777], [49.805, 0], [64.209, 0], [64.209, -54.59], [46.289, -54.59], [21.094, -16.309], [22.217, -33.008], [22.217, -54.59]],
              "c": true
            },
            "ix": 2
          },
          "nm": "и",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "и",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Open Sans"
  }, {
    "ch": "л",
    "size": 150,
    "style": "Bold",
    "w": 64.5,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0.993, -6.233], [1.253, -2.669], [1.855, 0], [1.595, 0.652], [0, 0], [-3.451, 0], [-2.49, 2.686], [-1.498, 6.006], [-1.042, 12.207], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [-0.716, 10.905], [-0.993, 6.234], [-1.254, 2.67], [-1.595, 0], [0, 0], [2.213, 1.041], [4.036, 0], [2.49, -2.686], [1.497, -6.006], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[56.689, -54.59], [15.381, -54.59], [12.817, -28.882], [9.448, -15.527], [4.785, -11.523], [0, -12.5], [0, -0.586], [8.496, 0.977], [18.286, -3.052], [24.268, -16.089], [28.076, -43.408], [41.797, -43.408], [41.797, 0], [56.689, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "л",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "л",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Open Sans"
  }, {
    "ch": "Н",
    "size": 59,
    "style": "Light",
    "w": 68.7,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[61.621, 0], [61.621, -70.459], [54.932, -70.459], [54.932, -39.111], [13.721, -39.111], [13.721, -70.459], [7.08, -70.459], [7.08, 0], [13.721, 0], [13.721, -33.057], [54.932, -33.057], [54.932, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "Н",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "Н",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "а",
    "size": 59,
    "style": "Light",
    "w": 51.81,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[9.424, 0], [0, 5.664], [-8.838, 0.586], [0, 0], [0, 0]],
              "o": [[-7.324, 0], [0, -5.908], [0, 0], [0, 0], [0, 8.301]],
              "v": [[23.096, -5.078], [10.791, -14.6], [24.316, -24.512], [39.697, -25.586], [39.697, -19.775]],
              "c": true
            },
            "ix": 2
          },
          "nm": "а",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-10.498, 0], [-2.832, 6.396], [0, 0], [0, 0], [0, 0], [0, 0], [12.061, 0], [0.537, -9.229], [0, 0], [-7.324, 0], [0, -7.666], [0, 0], [0, 0], [0, -8.984]],
              "o": [[8.057, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -10.596], [-11.035, 0], [0, 0], [1.172, -6.25], [8.496, 0], [0, 0], [0, 0], [-12.598, 0.879], [0, 9.082]],
              "v": [[21.826, 0.586], [39.844, -10.059], [39.99, -10.059], [39.99, 0], [46.143, 0], [46.143, -35.84], [26.416, -53.174], [6.543, -37.402], [12.744, -37.402], [26.367, -47.412], [39.697, -35.303], [39.697, -30.811], [23.535, -29.736], [4.199, -14.648]],
              "c": true
            },
            "ix": 2
          },
          "nm": "а",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "а",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": " ",
    "size": 59,
    "style": "Light",
    "w": 22.17,
    "data": {},
    "fFamily": "SF UI Display"
  }, {
    "ch": "р",
    "size": 59,
    "style": "Light",
    "w": 56.84,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[13.281, 0], [2.783, -6.689], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-8.447, 0], [0, 16.064]],
              "o": [[-8.35, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [2.93, 6.836], [13.232, 0], [0, -16.016]],
              "v": [[30.762, -53.174], [12.549, -41.699], [12.402, -41.699], [12.402, -52.588], [6.299, -52.588], [6.299, 17.236], [12.744, 17.236], [12.744, -10.84], [12.891, -10.84], [30.859, 0.586], [53.174, -26.318]],
              "c": true
            },
            "ix": 2
          },
          "nm": "р",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[10.156, 0], [0, 12.549], [-10.01, 0], [0, -12.646]],
              "o": [[-10.01, 0], [0, -12.451], [10.156, 0], [0, 12.646]],
              "v": [[29.639, -5.225], [12.695, -26.318], [29.639, -47.412], [46.582, -26.27]],
              "c": true
            },
            "ix": 2
          },
          "nm": "р",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "р",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "ы",
    "size": 59,
    "style": "Light",
    "w": 63.67,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[50.977, 0], [57.373, 0], [57.373, -52.588], [50.977, -52.588]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, -7.275], [7.715, 0], [0, 0], [0, 0]],
              "o": [[7.666, 0], [0, 7.178], [0, 0], [0, 0], [0, 0]],
              "v": [[24.072, -29.248], [36.719, -17.334], [24.072, -5.42], [12.695, -5.42], [12.695, -29.248]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 2,
          "ty": "sh",
          "ix": 3,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 10.596], [11.572, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [11.572, 0], [0, -10.645], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[6.299, 0], [24.072, 0], [43.164, -17.334], [24.072, -34.717], [12.695, -34.717], [12.695, -52.588], [6.299, -52.588]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ы",
        "np": 6,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "н",
    "size": 59,
    "style": "Light",
    "w": 54.88,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[42.188, 0], [48.584, 0], [48.584, -52.588], [42.188, -52.588], [42.188, -30.029], [12.695, -30.029], [12.695, -52.588], [6.299, -52.588], [6.299, 0], [12.695, 0], [12.695, -24.609], [42.188, -24.609]],
              "c": true
            },
            "ix": 2
          },
          "nm": "н",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "н",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "к",
    "size": 59,
    "style": "Light",
    "w": 48.54,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[19.531, -27.588], [46.338, -52.588], [38.135, -52.588], [12.988, -28.906], [12.695, -28.906], [12.695, -52.588], [6.299, -52.588], [6.299, 0], [12.695, 0], [12.695, -25.732], [12.988, -25.732], [38.77, 0], [47.314, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "к",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "к",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "е",
    "size": 59,
    "style": "Light",
    "w": 53.47,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-9.424, 0], [-0.098, -10.449], [0, 0]],
              "o": [[9.521, 0], [0, 0], [0.586, -10.449]],
              "v": [[27.002, -47.461], [43.066, -29.98], [10.352, -29.98]],
              "c": true
            },
            "ix": 2
          },
          "nm": "е",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [7.91, 0], [0, 11.914], [0, 0], [0, 0], [0, 0], [13.818, 0], [0, -16.309], [-14.551, 0], [-1.563, 8.984]],
              "o": [[-1.563, 5.762], [-10.449, 0], [0, 0], [0, 0], [0, 0], [0, -15.625], [-14.16, 0], [0, 16.553], [11.426, 0], [0, 0]],
              "v": [[42.725, -14.893], [27.637, -5.127], [10.352, -24.365], [10.352, -24.707], [49.805, -24.707], [49.805, -27.539], [27.1, -53.174], [3.662, -26.172], [27.49, 0.586], [49.121, -14.893]],
              "c": true
            },
            "ix": 2
          },
          "nm": "е",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "е",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "с",
    "size": 59,
    "style": "Light",
    "w": 51.76,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [11.816, 0], [0, -16.26], [-14.307, 0], [-1.904, 9.326], [0, 0], [7.617, 0], [0, 13.037], [-10.303, 0], [-1.611, -5.957]],
              "o": [[-1.709, -8.838], [-14.258, 0], [0, 16.602], [11.182, 0], [0, 0], [-1.855, 6.201], [-10.303, 0], [0, -12.793], [7.959, 0], [0, 0]],
              "v": [[48.584, -37.061], [27.148, -53.174], [3.516, -26.318], [27.246, 0.586], [48.584, -15.137], [42.139, -15.137], [27.246, -5.225], [10.059, -26.318], [27.197, -47.412], [42.139, -37.061]],
              "c": true
            },
            "ix": 2
          },
          "nm": "с",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "с",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "2",
    "size": 59,
    "style": "Light",
    "w": 56.25,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0.098, -12.012], [0, 0], [0, 0], [0, 0], [-9.033, 0], [0, -7.715], [10.059, -10.596], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 7.715], [12.305, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0.098, -8.594], [8.643, 0], [0, 6.152], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [11.719, -12.158], [0, -10.791], [-12.891, 0]],
              "v": [[5.615, -50.732], [5.615, -50.684], [12.061, -50.684], [12.061, -50.732], [27.979, -65.723], [43.457, -51.953], [30.859, -31.006], [5.957, -4.688], [5.957, 0], [51.904, 0], [51.904, -5.957], [15.283, -5.957], [15.283, -6.152], [34.912, -26.66], [50.098, -52.344], [28.174, -71.582]],
              "c": true
            },
            "ix": 2
          },
          "nm": "2",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "2",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "0",
    "size": 59,
    "style": "Light",
    "w": 59.67,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-16.016, 0], [0, 22.266], [15.967, 0], [0, -22.119]],
              "o": [[16.016, 0], [0, -22.119], [-15.918, 0], [0, 22.266]],
              "v": [[29.834, 1.123], [55.322, -35.303], [29.834, -71.582], [4.297, -35.254]],
              "c": true
            },
            "ix": 2
          },
          "nm": "0",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[11.914, 0], [0, 18.701], [-11.768, 0], [0, -18.506]],
              "o": [[-11.914, 0], [0, -18.359], [11.816, 0], [0, 18.652]],
              "v": [[29.834, -4.736], [11.035, -35.303], [29.834, -65.674], [48.633, -35.254]],
              "c": true
            },
            "ix": 2
          },
          "nm": "0",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "0",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "9",
    "size": 59,
    "style": "Light",
    "w": 58.89,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-11.914, 0], [0, 23.584], [3.174, 5.518], [9.521, 0], [0, -13.916], [-13.428, 0], [-2.686, 7.91], [-0.049, 0], [-0.049, 0], [0, -0.439], [12.646, 0], [1.709, 7.031], [0, 0]],
              "o": [[16.797, 0], [0, -8.887], [-4.297, -8.496], [-14.16, 0], [0, 13.232], [9.668, 0], [0, 0], [0, 0], [0, 0.537], [-0.342, 19.727], [-8.154, 0], [0, 0], [1.953, 10.645]],
              "v": [[27.734, 1.123], [54.443, -36.719], [49.707, -58.252], [28.174, -71.582], [3.711, -47.461], [27.1, -24.316], [47.852, -37.793], [47.9, -37.793], [47.949, -37.793], [47.998, -36.182], [27.783, -4.736], [11.768, -16.748], [4.98, -16.748]],
              "c": true
            },
            "ix": 2
          },
          "nm": "9",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[10.107, 0], [0, 9.863], [-10.01, 0], [0, -10.205]],
              "o": [[-10.303, 0], [0, -10.059], [10.156, 0], [0, 9.473]],
              "v": [[28.174, -30.225], [10.449, -47.656], [28.223, -65.576], [46.143, -47.314]],
              "c": true
            },
            "ix": 2
          },
          "nm": "9",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "9",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "г",
    "size": 59,
    "style": "Light",
    "w": 42.77,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[39.648, -47.168], [39.648, -52.588], [6.299, -52.588], [6.299, 0], [12.695, 0], [12.695, -47.168]],
              "c": true
            },
            "ix": 2
          },
          "nm": "г",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "г",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "о",
    "size": 59,
    "style": "Light",
    "w": 55.13,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-14.453, 0], [0, 16.406], [14.453, 0], [0, -16.406]],
              "o": [[14.453, 0], [0, -16.406], [-14.453, 0], [0, 16.406]],
              "v": [[27.539, 0.586], [51.465, -26.318], [27.539, -53.174], [3.662, -26.318]],
              "c": true
            },
            "ix": 2
          },
          "nm": "о",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[10.693, 0], [0, 13.135], [-10.645, 0], [0, -13.135]],
              "o": [[-10.645, 0], [0, -13.086], [10.693, 0], [0, 13.135]],
              "v": [[27.539, -5.225], [10.254, -26.318], [27.539, -47.412], [44.873, -26.318]],
              "c": true
            },
            "ix": 2
          },
          "nm": "о",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "о",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "д",
    "size": 59,
    "style": "Light",
    "w": 61.38,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [-0.586, 7.08], [-0.146, 2.734], [0, 0]],
              "o": [[0, 0], [0, 0], [2.881, -3.516], [0.293, -2.93], [0, 0], [0, 0]],
              "v": [[42.383, -5.42], [12.988, -5.42], [12.988, -5.713], [17.725, -22.607], [19.531, -47.168], [42.383, -47.168]],
              "c": true
            },
            "ix": 2
          },
          "nm": "д",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.244, -3.027], [3.955, -2.588], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.146, 2.881], [-0.635, 7.813], [0, 0], [0, 0], [0, 0]],
              "v": [[7.129, 13.916], [7.129, 0], [51.27, 0], [51.27, 13.916], [57.324, 13.916], [57.324, -5.42], [48.828, -5.42], [48.828, -52.588], [13.77, -52.588], [11.719, -22.852], [5.322, -5.42], [1.074, -5.42], [1.074, 13.916]],
              "c": true
            },
            "ix": 2
          },
          "nm": "д",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "д",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "0",
    "size": 34,
    "style": "Regular",
    "w": 60.64,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-16.455, 0], [0, 22.266], [16.357, 0], [0, -22.07]],
              "o": [[16.406, 0], [0, -22.119], [-16.357, 0], [0, 22.266]],
              "v": [[30.371, 1.172], [56.25, -35.303], [30.371, -71.631], [4.395, -35.254]],
              "c": true
            },
            "ix": 2
          },
          "nm": "0",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[10.986, 0], [0, 17.578], [-10.889, 0], [0, -17.334]],
              "o": [[-11.035, 0], [0, -17.188], [10.889, 0], [0, 17.578]],
              "v": [[30.371, -6.494], [13.232, -35.303], [30.371, -63.916], [47.412, -35.254]],
              "c": true
            },
            "ix": 2
          },
          "nm": "0",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "0",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "1",
    "size": 34,
    "style": "Regular",
    "w": 44.34,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[23.682, 0], [32.178, 0], [32.178, -70.459], [23.584, -70.459], [4.834, -56.982], [4.834, -47.705], [23.486, -61.133], [23.682, -61.133]],
              "c": true
            },
            "ix": 2
          },
          "nm": "1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "1",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "1",
    "size": 26,
    "style": "Bold",
    "w": 48,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[22.607, 0], [37.207, 0], [37.207, -70.459], [22.559, -70.459], [4.346, -57.813], [4.346, -44.531], [22.314, -56.934], [22.607, -56.934]],
              "c": true
            },
            "ix": 2
          },
          "nm": "1",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "1",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "0",
    "size": 26,
    "style": "Bold",
    "w": 65.09,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-17.725, 0], [0, 22.754], [17.627, 0], [0, -22.754]],
              "o": [[17.725, 0], [0, -22.754], [-17.627, 0], [0, 22.803]],
              "v": [[32.568, 1.563], [61.035, -35.4], [32.568, -72.07], [4.053, -35.352]],
              "c": true
            },
            "ix": 2
          },
          "nm": "0",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[8.398, 0], [0, 16.016], [-8.301, 0], [0, -15.918]],
              "o": [[-8.398, 0], [0, -15.869], [8.35, 0], [0, 16.064]],
              "v": [[32.568, -10.254], [19.043, -35.352], [32.568, -60.254], [46.045, -35.352]],
              "c": true
            },
            "ix": 2
          },
          "nm": "0",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "0",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "%",
    "size": 26,
    "style": "Bold",
    "w": 79.15,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 11.182], [9.912, 0], [0, -11.133], [-9.814, 0]],
              "o": [[0, -11.133], [-9.863, 0], [0, 11.182], [9.814, 0]],
              "v": [[76.953, -17.285], [60.889, -35.4], [44.824, -17.285], [60.889, 1.025]],
              "c": true
            },
            "ix": 2
          },
          "nm": "%",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[3.223, 0], [0, 5.957], [-3.174, 0], [0, -6.055]],
              "o": [[-3.174, 0], [0, -6.006], [3.271, 0], [0, 6.055]],
              "v": [[60.889, -7.52], [55.762, -17.236], [60.889, -26.855], [66.016, -17.285]],
              "c": true
            },
            "ix": 2
          },
          "nm": "%",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 2,
          "ty": "sh",
          "ix": 3,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 11.182], [9.912, 0], [0, -11.133], [-9.814, 0]],
              "o": [[0, -11.133], [-9.863, 0], [0, 11.182], [9.814, 0]],
              "v": [[34.326, -54.297], [18.262, -72.412], [2.197, -54.297], [18.262, -35.986]],
              "c": true
            },
            "ix": 2
          },
          "nm": "%",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 3,
          "ty": "sh",
          "ix": 4,
          "ks": {
            "a": 0,
            "k": {
              "i": [[3.223, 0], [0, 5.957], [-3.174, 0], [0, -6.055]],
              "o": [[-3.174, 0], [0, -6.006], [3.271, 0], [0, 6.055]],
              "v": [[18.262, -44.531], [13.135, -54.248], [18.262, -63.867], [23.389, -54.297]],
              "c": true
            },
            "ix": 2
          },
          "nm": "%",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 4,
          "ty": "sh",
          "ix": 5,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[19.727, 0], [71.143, -70.459], [58.643, -70.459], [7.178, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "%",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "%",
        "np": 8,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": " ",
    "size": 26,
    "style": "Bold",
    "w": 21.48,
    "data": {},
    "fFamily": "SF UI Display"
  }, {
    "ch": "с",
    "size": 26,
    "style": "Bold",
    "w": 56.69,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [13.721, 0], [0, -17.041], [-16.016, 0], [-1.367, 11.719], [0, 0], [5.518, 0], [0, 10.498], [-7.324, 0], [-1.172, -4.736]],
              "o": [[-1.367, -11.133], [-15.918, 0], [0, 17.285], [13.477, 0], [0, 0], [-1.27, 5.078], [-7.373, 0], [0, -10.303], [5.615, 0], [0, 0]],
              "v": [[53.613, -35.498], [29.541, -54.688], [3.418, -26.904], [29.639, 0.928], [53.662, -18.213], [40.332, -18.213], [29.785, -10.352], [17.773, -26.904], [29.736, -43.457], [40.234, -35.498]],
              "c": true
            },
            "ix": 2
          },
          "nm": "с",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "с",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "о",
    "size": 26,
    "style": "Bold",
    "w": 59.86,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-16.309, 0], [0, 17.432], [16.211, 0], [0, -17.188]],
              "o": [[16.309, 0], [0, -17.236], [-16.162, 0], [0, 17.383]],
              "v": [[29.834, 0.928], [56.348, -26.904], [29.834, -54.688], [3.32, -26.904]],
              "c": true
            },
            "ix": 2
          },
          "nm": "о",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[7.52, 0], [0, 10.693], [-7.52, 0], [0, -10.596]],
              "o": [[-7.52, 0], [0, -10.547], [7.471, 0], [0, 10.693]],
              "v": [[29.834, -10.059], [17.773, -26.904], [29.834, -43.75], [41.846, -26.904]],
              "c": true
            },
            "ix": 2
          },
          "nm": "о",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "о",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "т",
    "size": 26,
    "style": "Bold",
    "w": 50.83,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[48.633, -53.76], [2.197, -53.76], [2.197, -42.969], [18.311, -42.969], [18.311, 0], [32.52, 0], [32.52, -42.969], [48.633, -42.969]],
              "c": true
            },
            "ix": 2
          },
          "nm": "т",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "т",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "в",
    "size": 26,
    "style": "Bold",
    "w": 56.2,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, -4.004], [5.469, 0], [0, 0], [0, 0]],
              "o": [[4.883, 0], [0, 4.102], [0, 0], [0, 0], [0, 0]],
              "v": [[28.613, -44.629], [36.23, -38.33], [27.832, -31.982], [19.287, -31.982], [19.287, -44.629]],
              "c": true
            },
            "ix": 2
          },
          "nm": "в",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, -4.736], [5.762, 0], [0, 0], [0, 0]],
              "o": [[6.299, 0], [0, 4.736], [0, 0], [0, 0], [0, 0]],
              "v": [[28.613, -23.584], [38.281, -16.406], [29.346, -9.18], [19.287, -9.18], [19.287, -23.584]],
              "c": true
            },
            "ix": 2
          },
          "nm": "в",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 2,
          "ty": "sh",
          "ix": 3,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 9.473], [7.129, 0.879], [0, 0], [0, 5.762], [11.084, 0], [0, 0]],
              "o": [[0, 0], [12.109, 0], [0, -6.689], [0, 0], [5.518, -0.879], [0, -8.496], [0, 0], [0, 0]],
              "v": [[5.322, 0], [32.861, 0], [52.539, -15.576], [40.479, -28.174], [40.479, -28.564], [50.146, -40.186], [32.373, -53.76], [5.322, -53.76]],
              "c": true
            },
            "ix": 2
          },
          "nm": "в",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "в",
        "np": 6,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "е",
    "size": 26,
    "style": "Bold",
    "w": 57.57,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-6.494, 0], [-0.244, -7.031], [0, 0]],
              "o": [[6.592, 0], [0, 0], [0.488, -6.885]],
              "v": [[29.297, -44.043], [40.723, -32.422], [17.529, -32.422]],
              "c": true
            },
            "ix": 2
          },
          "nm": "е",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [5.371, 0], [0, 7.764], [0, 0], [0, 0], [0, 0], [15.479, 0], [0, -17.09], [-16.357, 0], [-1.563, 10.4]],
              "o": [[-1.367, 4.15], [-7.52, 0], [0, 0], [0, 0], [0, 0], [0, -16.357], [-15.771, 0], [0, 17.09], [13.086, 0], [0, 0]],
              "v": [[40.918, -16.406], [29.932, -9.717], [17.383, -22.705], [17.383, -23.584], [54.492, -23.584], [54.492, -27.979], [29.15, -54.688], [3.32, -26.66], [29.688, 0.928], [54.053, -16.406]],
              "c": true
            },
            "ix": 2
          },
          "nm": "е",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "е",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "и",
    "size": 26,
    "style": "Bold",
    "w": 61.23,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[19.287, 0], [41.553, -34.424], [41.943, -34.424], [41.943, 0], [55.908, 0], [55.908, -53.76], [41.943, -53.76], [19.678, -19.727], [19.287, -19.727], [19.287, -53.76], [5.322, -53.76], [5.322, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "и",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "и",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "\r",
    "size": 26,
    "style": "Bold",
    "w": 0,
    "fFamily": "SF UI Display"
  }, {
    "ch": "р",
    "size": 26,
    "style": "Bold",
    "w": 61.87,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[13.623, 0], [2.832, -6.055], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-7.764, 0], [0, 17.09]],
              "o": [[-7.568, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [2.93, 6.104], [13.477, 0], [0, -17.09]],
              "v": [[36.377, -54.395], [19.678, -44.58], [19.385, -44.58], [19.385, -53.76], [5.322, -53.76], [5.322, 16.895], [19.58, 16.895], [19.58, -9.033], [19.873, -9.033], [36.572, 0.635], [58.447, -26.904]],
              "c": true
            },
            "ix": 2
          },
          "nm": "р",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[7.373, 0], [0, 9.668], [-7.275, 0], [0, -9.668]],
              "o": [[-7.275, 0], [0, -9.619], [7.373, 0], [0, 9.766]],
              "v": [[31.641, -10.889], [19.531, -26.855], [31.641, -42.871], [43.848, -26.904]],
              "c": true
            },
            "ix": 2
          },
          "nm": "р",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "р",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "й",
    "size": 26,
    "style": "Bold",
    "w": 61.23,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [-10.303, 0], [0, 9.619], [0, 0], [5.078, 0], [0.098, 5.225]],
              "o": [[0, 9.619], [10.254, 0], [0, 0], [-0.098, 5.225], [-5.127, 0], [0, 0]],
              "v": [[13.525, -77.49], [30.713, -61.426], [47.9, -77.49], [39.16, -77.49], [30.713, -68.506], [22.217, -77.49]],
              "c": true
            },
            "ix": 2
          },
          "nm": "й",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[19.287, 0], [41.553, -34.424], [41.943, -34.424], [41.943, 0], [55.908, 0], [55.908, -53.76], [41.943, -53.76], [19.678, -19.727], [19.287, -19.727], [19.287, -53.76], [5.322, -53.76], [5.322, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "й",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "й",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "к",
    "size": 26,
    "style": "Bold",
    "w": 56.3,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[32.764, -28.809], [54.492, -53.76], [38.184, -53.76], [19.922, -31.982], [19.531, -31.982], [19.531, -53.76], [5.322, -53.76], [5.322, 0], [19.531, 0], [19.531, -23.242], [19.922, -23.242], [38.477, 0], [55.713, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "к",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "к",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "м",
    "size": 26,
    "style": "Bold",
    "w": 76.42,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[18.701, 0], [18.701, -36.084], [19.092, -36.084], [33.252, -2.93], [43.164, -2.93], [57.275, -36.084], [57.666, -36.084], [57.666, 0], [71.094, 0], [71.094, -53.76], [52.881, -53.76], [38.525, -18.213], [38.135, -18.213], [23.73, -53.76], [5.322, -53.76], [5.322, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "м",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "м",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "ж",
    "size": 26,
    "style": "Bold",
    "w": 83.4,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[61.914, -28.809], [81.738, -53.76], [65.479, -53.76], [49.023, -31.982], [48.633, -31.982], [48.633, -53.76], [34.57, -53.76], [34.57, -31.982], [34.18, -31.982], [17.676, -53.76], [1.27, -53.76], [21.338, -28.467], [0.635, 0], [17.383, 0], [34.18, -23.242], [34.57, -23.242], [34.57, 0], [48.633, 0], [48.633, -23.242], [49.023, -23.242], [65.771, 0], [82.764, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ж",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ж",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "д",
    "size": 26,
    "style": "Bold",
    "w": 66.06,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [-0.439, 5.811], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [2.441, -3.613], [0, 0], [0, 0], [0, 0]],
              "v": [[41.309, -10.84], [19.678, -10.84], [19.678, -11.23], [23.682, -25.635], [24.902, -43.018], [41.309, -43.018]],
              "c": true
            },
            "ix": 2
          },
          "nm": "д",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.955, -2.197], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.488, 7.227], [0, 0], [0, 0], [0, 0]],
              "v": [[13.965, 13.916], [13.965, 0], [50.488, 0], [50.488, 13.916], [63.477, 13.916], [63.477, -10.84], [55.469, -10.84], [55.469, -53.76], [12.842, -53.76], [11.084, -26.514], [5.127, -10.84], [0.977, -10.84], [0.977, 13.916]],
              "c": true
            },
            "ix": 2
          },
          "nm": "д",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "д",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "у",
    "size": 26,
    "style": "Bold",
    "w": 57.18,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-0.537, 0], [-4.59, 13.721], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [5.322, 0], [0.488, 0.098], [0, 0]],
              "o": [[13.428, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1.123, 4.297], [-0.586, 0], [0, 0], [0.537, 0.098]],
              "v": [[12.158, 19.629], [36.768, 1.074], [55.371, -53.76], [40.332, -53.76], [28.662, -11.572], [28.369, -11.572], [16.748, -53.76], [1.123, -53.76], [19.971, 0.342], [19.482, 2.393], [9.961, 8.545], [6.738, 8.398], [6.738, 19.434]],
              "c": true
            },
            "ix": 2
          },
          "nm": "у",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "у",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "н",
    "size": 26,
    "style": "Bold",
    "w": 60.6,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[41.064, 0], [55.273, 0], [55.273, -53.76], [41.064, -53.76], [41.064, -33.008], [19.531, -33.008], [19.531, -53.76], [5.322, -53.76], [5.322, 0], [19.531, 0], [19.531, -22.168], [41.064, -22.168]],
              "c": true
            },
            "ix": 2
          },
          "nm": "н",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "н",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "а",
    "size": 26,
    "style": "Bold",
    "w": 56.1,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[6.592, 0], [0, 3.955], [-5.957, 0.391], [0, 0], [0, 0]],
              "o": [[-5.176, 0], [0, -3.955], [0, 0], [0, 0], [0, 5.859]],
              "v": [[25.879, -9.766], [17.334, -16.211], [26.465, -22.9], [37.744, -23.682], [37.744, -19.727]],
              "c": true
            },
            "ix": 2
          },
          "nm": "а",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-10.352, 0], [-2.93, 5.615], [0, 0], [0, 0], [0, 0], [0, 0], [13.818, 0], [0.391, -10.254], [0, 0], [-5.176, 0], [0, -5.176], [0, 0], [0, 0], [0, -9.766]],
              "o": [[6.885, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -10.742], [-13.428, 0], [0, 0], [0.684, -3.906], [5.859, 0], [0, 0], [0, 0], [-13.721, 0.83], [0, 9.619]],
              "v": [[21.24, 0.635], [37.695, -8.301], [37.988, -8.301], [37.988, 0], [51.758, 0], [51.758, -36.865], [28.906, -54.688], [5.811, -37.354], [18.848, -37.354], [28.32, -43.994], [37.744, -35.986], [37.744, -32.422], [24.316, -31.592], [3.125, -15.479]],
              "c": true
            },
            "ix": 2
          },
          "nm": "а",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "а",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "ы",
    "size": 26,
    "style": "Bold",
    "w": 75.63,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[56.104, 0], [70.313, 0], [70.313, -53.76], [56.104, -53.76]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, -5.029], [5.42, 0], [0, 0], [0, 0]],
              "o": [[5.42, 0], [0, 5.029], [0, 0], [0, 0], [0, 0]],
              "v": [[27.734, -27.539], [36.67, -19.141], [27.734, -10.693], [19.531, -10.693], [19.531, -27.539]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 2,
          "ty": "sh",
          "ix": 3,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 11.621], [12.695, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [12.695, 0], [0, -11.67], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[5.322, 0], [29.98, 0], [50.781, -19.043], [29.98, -38.135], [19.531, -38.135], [19.531, -53.76], [5.322, -53.76]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ы",
        "np": 6,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "2",
    "size": 34,
    "style": "Regular",
    "w": 56.59,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -12.305], [0, 0], [0, 0], [0, 0], [-8.252, 0], [0, -6.787], [9.473, -9.961], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 7.861], [12.598, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, -7.861], [7.764, 0], [0, 5.859], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [11.768, -12.158], [0, -10.791], [-13.281, 0]],
              "v": [[5.273, -50.146], [5.273, -50.098], [13.77, -50.098], [13.77, -50.146], [28.271, -63.965], [42.236, -51.758], [30.518, -32.178], [5.713, -6.055], [5.713, 0], [52.197, 0], [52.197, -7.813], [17.871, -7.813], [17.871, -8.008], [35.693, -26.416], [51.025, -52.295], [28.516, -71.631]],
              "c": true
            },
            "ix": 2
          },
          "nm": "2",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "2",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "Б",
    "size": 26,
    "style": "Bold",
    "w": 64.36,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 13.33], [14.697, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, -13.037], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [14.453, 0]],
              "v": [[60.205, -22.217], [35.303, -43.994], [21.631, -43.994], [21.631, -58.301], [53.711, -58.301], [53.711, -70.459], [6.885, -70.459], [6.885, 0], [35.791, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "Б",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, -6.836], [8.203, 0]],
              "o": [[0, 0], [0, 0], [8.252, 0], [0, 6.787], [0, 0]],
              "v": [[21.631, -11.768], [21.631, -32.764], [32.08, -32.764], [45.117, -22.217], [32.129, -11.768]],
              "c": true
            },
            "ix": 2
          },
          "nm": "Б",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "Б",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "2",
    "size": 26,
    "style": "Bold",
    "w": 60.3,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -13.33], [0, 0], [0, 0], [0, 0], [-6.836, 0], [0, -5.273], [7.129, -7.129], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 8.789], [14.844, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, -6.494], [6.543, 0], [0, 4.883], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [7.764, -7.715], [0, -11.768], [-15.381, 0]],
              "v": [[4.15, -49.268], [4.15, -49.023], [17.822, -49.023], [17.822, -49.268], [29.688, -60.547], [40.869, -51.074], [31.543, -35.498], [4.98, -9.912], [4.98, 0], [56.201, 0], [56.201, -11.719], [24.414, -11.719], [24.414, -12.012], [41.602, -28.564], [55.225, -51.66], [30.176, -72.021]],
              "c": true
            },
            "ix": 2
          },
          "nm": "2",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "2",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "з",
    "size": 26,
    "style": "Bold",
    "w": 53.86,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-13.818, 0], [0, 10.596], [6.543, 1.66], [0, 0], [0, 5.371], [14.16, 0], [1.025, -10.693], [0, 0], [-5.176, 0], [0, -3.564], [5.273, 0], [0, 0], [0, 0], [0, 0], [0, -4.297], [5.908, 0], [1.221, 4.541], [0, 0]],
              "o": [[14.453, 0], [0, -5.957], [0, 0], [5.029, -1.367], [0, -9.521], [-13.037, 0], [0, 0], [0.635, -4.053], [5.273, 0], [0, 3.906], [0, 0], [0, 0], [0, 0], [6.104, 0], [0, 4.053], [-5.518, 0], [0, 0], [1.025, 11.23]],
              "v": [[26.855, 1.123], [50.293, -16.113], [40.234, -28.076], [40.234, -28.467], [48.389, -39.648], [26.563, -54.932], [4.004, -37.744], [17.432, -37.744], [26.611, -44.141], [34.521, -38.135], [26.514, -32.275], [19.434, -32.275], [19.434, -22.9], [26.904, -22.9], [36.084, -16.602], [26.855, -9.912], [16.602, -16.846], [2.93, -16.846]],
              "c": true
            },
            "ix": 2
          },
          "nm": "з",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "з",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": ".",
    "size": 26,
    "style": "Bold",
    "w": 27.78,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-4.395, 0], [0, 4.346], [4.395, 0], [0, -4.395]],
              "o": [[4.395, 0], [0, -4.395], [-4.395, 0], [0, 4.346]],
              "v": [[13.916, 0.586], [21.777, -7.275], [13.916, -15.137], [6.055, -7.275]],
              "c": true
            },
            "ix": 2
          },
          "nm": ".",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": ".",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "В",
    "size": 26,
    "style": "Bold",
    "w": 65.97,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 12.402], [9.57, 0.732], [0, 0], [0, 7.715], [13.232, 0], [0, 0], [0, 0]],
              "o": [[15.039, 0], [0, -9.326], [0, 0], [7.471, -1.123], [0, -10.791], [0, 0], [0, 0], [0, 0]],
              "v": [[37.988, 0], [62.354, -20.166], [45.752, -37.207], [45.752, -37.598], [58.984, -52.881], [37.451, -70.459], [6.348, -70.459], [6.348, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "В",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, -5.664], [7.861, 0], [0, 0]],
              "o": [[0, 0], [6.885, 0], [0, 5.957], [0, 0], [0, 0]],
              "v": [[21.094, -59.473], [33.643, -59.473], [44.482, -50.586], [32.129, -41.162], [21.094, -41.162]],
              "c": true
            },
            "ix": 2
          },
          "nm": "В",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 2,
          "ty": "sh",
          "ix": 3,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, -6.592], [8.496, 0]],
              "o": [[0, 0], [0, 0], [8.691, 0], [0, 6.738], [0, 0]],
              "v": [[21.094, -10.986], [21.094, -31.445], [33.887, -31.445], [47.314, -21.338], [34.229, -10.986]],
              "c": true
            },
            "ix": 2
          },
          "nm": "В",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "В",
        "np": 6,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "ц",
    "size": 26,
    "style": "Bold",
    "w": 64.01,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[62.646, 13.916], [62.646, -10.84], [54.541, -10.84], [54.541, -53.76], [40.332, -53.76], [40.332, -10.84], [19.531, -10.84], [19.531, -53.76], [5.322, -53.76], [5.322, 0], [49.658, 0], [49.658, 13.916]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ц",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ц",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "ь",
    "size": 26,
    "style": "Bold",
    "w": 53.71,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, -5.029], [5.42, 0], [0, 0], [0, 0]],
              "o": [[5.42, 0], [0, 5.029], [0, 0], [0, 0], [0, 0]],
              "v": [[27.734, -27.539], [36.67, -19.141], [27.734, -10.693], [19.531, -10.693], [19.531, -27.539]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ь",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 11.621], [12.695, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [12.695, 0], [0, -11.67], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[5.322, 0], [29.98, 0], [50.781, -19.043], [29.98, -38.135], [19.531, -38.135], [19.531, -53.76], [5.322, -53.76]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ь",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ь",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "б",
    "size": 26,
    "style": "Bold",
    "w": 60.74,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-17.285, 0], [0, 16.943], [14.502, 0], [3.271, -6.348], [0, 0], [-13.477, 0.439], [0, 0], [-0.83, 0.781], [0, 0], [6.689, -0.244], [0, 0], [0, -30.566]],
              "o": [[16.357, 0], [0, -15.723], [-8.789, 0], [0, 0], [1.758, -14.111], [0, 0], [7.324, -0.195], [0, 0], [-1.514, 0.83], [0, 0], [-19.727, 0.684], [0, 21.094]],
              "v": [[30.811, 1.172], [57.324, -26.27], [33.398, -51.904], [15.234, -41.846], [14.844, -41.846], [34.766, -62.842], [40.527, -63.037], [53.76, -65.381], [53.76, -76.514], [39.648, -74.268], [33.545, -74.072], [3.809, -30.957]],
              "c": true
            },
            "ix": 2
          },
          "nm": "б",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[7.666, 0], [0, 10.107], [-7.666, 0], [0, -9.668]],
              "o": [[-7.715, 0], [0, -9.668], [7.617, 0], [0, 10.107]],
              "v": [[30.566, -10.107], [18.408, -25.928], [30.566, -41.211], [42.725, -25.928]],
              "c": true
            },
            "ix": 2
          },
          "nm": "б",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "б",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "щ",
    "size": 26,
    "style": "Bold",
    "w": 87.94,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[86.621, 13.916], [86.621, -10.84], [78.809, -10.84], [78.809, -53.76], [64.6, -53.76], [64.6, -10.84], [49.17, -10.84], [49.17, -53.76], [34.961, -53.76], [34.961, -10.84], [19.531, -10.84], [19.531, -53.76], [5.322, -53.76], [5.322, 0], [73.633, 0], [73.633, 13.916]],
              "c": true
            },
            "ix": 2
          },
          "nm": "щ",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "щ",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "я",
    "size": 26,
    "style": "Bold",
    "w": 55.57,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 4.443], [-5.273, 0], [0, 0], [0, 0]],
              "o": [[-5.225, 0], [0, -4.834], [0, 0], [0, 0], [0, 0]],
              "v": [[27.441, -27.539], [18.799, -35.156], [27.441, -43.115], [36.328, -43.115], [36.328, -27.539]],
              "c": true
            },
            "ix": 2
          },
          "nm": "я",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, -11.426], [-7.324, -2.295], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [-12.988, 0], [0, 7.715], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[36.328, 0], [50.244, 0], [50.244, -53.76], [26.074, -53.76], [4.688, -35.156], [16.504, -19.629], [2.344, 0], [18.164, 0], [30.176, -17.48], [36.328, -17.48]],
              "c": true
            },
            "ix": 2
          },
          "nm": "я",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "я",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "3",
    "size": 34,
    "style": "Regular",
    "w": 59.18,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, -8.301], [9.326, 0], [0.781, 7.227], [0, 0], [-14.746, 0], [0, 12.109], [10.645, 0.635], [0, 0], [0, 8.838], [12.598, 0], [0.977, -11.963], [0, 0], [-8.105, 0], [0, -6.982], [8.105, 0], [0, 0]],
              "o": [[0, 0], [10.059, 0], [0, 7.373], [-9.473, 0], [0, 0], [0.635, 11.67], [13.818, 0], [0, -9.912], [0, 0], [8.789, -1.563], [0, -10.596], [-13.232, 0], [0, 0], [0.781, -7.373], [8.936, 0], [0, 7.129], [0, 0], [0, 0]],
              "v": [[20.068, -32.52], [28.906, -32.52], [45.215, -19.092], [29.199, -6.445], [12.939, -18.652], [4.492, -18.652], [29.297, 1.172], [54.15, -19.385], [36.67, -36.523], [36.67, -36.719], [51.123, -53.467], [29.004, -71.631], [5.908, -52.002], [14.355, -52.002], [28.613, -64.014], [42.285, -52.295], [28.516, -39.941], [20.068, -39.941]],
              "c": true
            },
            "ix": 2
          },
          "nm": "3",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "3",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "ч",
    "size": 26,
    "style": "Bold",
    "w": 57.86,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [6.25, 0], [0, 6.25], [0, 0], [0, 0], [0, 0], [-11.377, 0], [-2.881, 3.467], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [-1.367, 2.051], [-5.518, 0], [0, 0], [0, 0], [0, 0], [0, 12.158], [7.129, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[52.539, 0], [52.539, -53.76], [38.33, -53.76], [38.33, -34.424], [27.49, -29.004], [18.506, -38.965], [18.506, -53.76], [4.297, -53.76], [4.297, -36.963], [23.047, -17.139], [37.939, -23.438], [38.33, -23.438], [38.33, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ч",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ч",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "п",
    "size": 26,
    "style": "Bold",
    "w": 60.11,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[40.576, 0], [54.785, 0], [54.785, -53.76], [5.322, -53.76], [5.322, 0], [19.531, 0], [19.531, -42.969], [40.576, -42.969]],
              "c": true
            },
            "ix": 2
          },
          "nm": "п",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "п",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "л",
    "size": 26,
    "style": "Bold",
    "w": 59.33,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-0.928, 15.869], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [5.176, 0], [0.586, 0.146], [0, 0], [-2.197, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.488, 8.545], [-1.416, 0], [0, 0], [0.732, 0.293], [13.184, 0]],
              "v": [[24.561, -25.635], [25.684, -42.969], [39.795, -42.969], [39.795, 0], [54.004, 0], [54.004, -53.76], [13.477, -53.76], [11.914, -26.514], [4.688, -11.719], [1.611, -12.109], [1.611, -0.049], [6.152, 0.635]],
              "c": true
            },
            "ix": 2
          },
          "nm": "л",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "л",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "э",
    "size": 26,
    "style": "Bold",
    "w": 56.69,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[1.318, 5.078], [0, 0], [-13.623, 0], [0, 17.285], [15.771, 0], [1.367, -11.133], [0, 0], [-5.762, 0], [-0.977, -6.982], [0, 0], [0, 0], [0, 0], [6.299, 0]],
              "o": [[0, 0], [1.367, 11.719], [15.869, 0], [0, -17.041], [-13.867, 0], [0, 0], [1.221, -4.736], [5.908, 0], [0, 0], [0, 0], [0, 0], [-0.586, 8.008], [-5.664, 0]],
              "v": [[16.357, -18.164], [3.076, -18.164], [27.295, 0.928], [53.271, -26.904], [27.393, -54.688], [3.125, -35.498], [16.455, -35.498], [27.197, -43.457], [38.672, -32.275], [19.238, -32.275], [19.238, -22.9], [38.867, -22.9], [27.148, -10.352]],
              "c": true
            },
            "ix": 2
          },
          "nm": "э",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "э",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "4",
    "size": 34,
    "style": "Regular",
    "w": 60.5,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [6.006, -11.133], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-16.65, 23.877], [0, 0], [0, 0], [0, 0]],
              "v": [[39.209, 0], [47.705, 0], [47.705, -14.648], [57.666, -14.648], [57.666, -22.363], [47.705, -22.363], [47.705, -70.459], [34.717, -70.459], [3.809, -22.607], [3.809, -14.648], [39.209, -14.648]],
              "c": true
            },
            "ix": 2
          },
          "nm": "4",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [-13.33, 19.043], [0, 0], [0, 0], [0, 0]],
              "o": [[5.566, -9.766], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[12.5, -22.559], [39.063, -63.135], [39.209, -63.135], [39.209, -22.363], [12.5, -22.363]],
              "c": true
            },
            "ix": 2
          },
          "nm": "4",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "4",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }, {
    "ch": "С",
    "size": 26,
    "style": "Bold",
    "w": 72.22,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-20.508, 0], [-2.246, 15.039], [0, 0], [8.301, 0], [0, 15.039], [-11.133, 0], [-1.855, -7.764], [0, 0], [16.455, 0], [0, -22.705]],
              "o": [[16.797, 0], [0, 0], [-2.002, 7.52], [-11.23, 0], [0, -14.844], [8.105, 0], [0, 0], [-1.855, -14.99], [-20.41, 0], [0, 22.754]],
              "v": [[37.598, 1.563], [68.506, -23.047], [54.004, -23.047], [37.646, -10.986], [19.336, -35.303], [37.598, -59.473], [53.955, -46.68], [68.457, -46.68], [37.598, -72.021], [4.248, -35.254]],
              "c": true
            },
            "ix": 2
          },
          "nm": "С",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "С",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "SF UI Display"
  }]
};
var params = {
  container: document.getElementById('lottie-slider'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animationData
};
var anim;
anim = lottie.loadAnimation(params);
var animationData = {
  "v": "5.7.3",
  "fr": 29.9700012207031,
  "ip": 0,
  "op": 2761.00011245784,
  "w": 430,
  "h": 400,
  "nm": "Текст",
  "ddd": 0,
  "assets": [{
    "id": "image_0",
    "w": 430,
    "h": 400,
    "u": "img/report/",
    "p": "img_0.png",
    "e": 0
  }, {
    "id": "image_1",
    "w": 23,
    "h": 15,
    "u": "img/report/",
    "p": "img_1.png",
    "e": 0
  }, {
    "id": "comp_0",
    "layers": [{
      "ddd": 0,
      "ind": 2,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 3551.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2700,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2715,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2730.00011119518,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2700.00010997325,
      "op": 7783.00031700809,
      "st": 2700.00010997325,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 3,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 3467.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2601,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2616,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2631.00010716283,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2601.0001059409,
      "op": 7684.00031297574,
      "st": 2601.0001059409,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 4,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 3386.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2532,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2547,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2562.0001043524,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2532.00010313047,
      "op": 7615.00031016531,
      "st": 2532.00010313047,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 5,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 3301.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2461,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2476,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2491.00010146051,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2461.00010023858,
      "op": 7544.00030727342,
      "st": 2461.00010023858,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 6,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 3196.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2375,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2390,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2405.00009795766,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2375.00009673573,
      "op": 7458.00030377057,
      "st": 2375.00009673573,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 7,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 3112.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2306,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2321,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2336.00009514723,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2306.00009392531,
      "op": 7389.00030096014,
      "st": 2306.00009392531,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 8,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 3007.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2219,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2234,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2249.00009160365,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2219.00009038172,
      "op": 7302.00029741656,
      "st": 2219.00009038172,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 9,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2922.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2150,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2165,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2180.00008879322,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2150.00008757129,
      "op": 7233.00029460613,
      "st": 2150.00008757129,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 10,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2837.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2080,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2095,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2110.00008594206,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2080.00008472014,
      "op": 7163.00029175497,
      "st": 2080.00008472014,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 11,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2755.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2011,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 2026,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 2041.00008313163,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 2011.00008190971,
      "op": 7094.00028894454,
      "st": 2011.00008190971,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 12,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2671.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1942,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1957,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1972.00008032121,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1942.00007909928,
      "op": 7025.00028613412,
      "st": 1942.00007909928,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 13,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2586.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1873,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1888,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1903.00007751078,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1873.00007628885,
      "op": 6956.00028332369,
      "st": 1873.00007628885,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 14,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2499.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1803,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1818,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1833.00007465962,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1803.0000734377,
      "op": 6886.00028047253,
      "st": 1803.0000734377,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 15,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2434.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1751,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1766,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1781.00007254162,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1751.00007131969,
      "op": 6834.00027835453,
      "st": 1751.00007131969,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 16,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2354.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1681,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1696,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1711.00006969046,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1681.00006846853,
      "op": 6764.00027550337,
      "st": 1681.00006846853,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 17,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2269.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1612,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1627,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1642.00006688003,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1612.00006565811,
      "op": 6695.00027269294,
      "st": 1612.00006565811,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 18,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2205.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1561,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1576,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1591.00006480276,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1561.00006358083,
      "op": 6644.00027061567,
      "st": 1561.00006358083,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 19,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2142.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1509,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1524,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1539.00006268476,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1509.00006146283,
      "op": 6592.00026849767,
      "st": 1509.00006146283,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 20,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 2082.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1457,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1472,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1487.00006056675,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1457.00005934483,
      "op": 6540.00026637966,
      "st": 1457.00005934483,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 21,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1998.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1387,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1402,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1417.00005771559,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1387.00005649367,
      "op": 6470.0002635285,
      "st": 1387.00005649367,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 22,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1934.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1334,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1349,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1364.00005555686,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1334.00005433493,
      "op": 6417.00026136977,
      "st": 1334.00005433493,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 23,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1870.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1282,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1297,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1312.00005343886,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1282.00005221693,
      "op": 6365.00025925176,
      "st": 1282.00005221693,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 24,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1786.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1213,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1228,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1243.00005062843,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1213.0000494065,
      "op": 6296.00025644134,
      "st": 1213.0000494065,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 25,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1721.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1162,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1177,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1192.00004855116,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1162.00004732923,
      "op": 6245.00025436406,
      "st": 1162.00004732923,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 26,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1659.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1110,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1125,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1140.00004643315,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1110.00004521123,
      "op": 6193.00025224606,
      "st": 1110.00004521123,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 27,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1596.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1057,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1072,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1087.00004427442,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1057.00004305249,
      "op": 6140.00025008733,
      "st": 1057.00004305249,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 28,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1535.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1005,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 1020,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 1035.00004215641,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 1005.00004093449,
      "op": 6088.00024796932,
      "st": 1005.00004093449,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 29,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1451.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 936,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 951,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 966.000039345987,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 936.000038124062,
      "op": 6019.0002451589,
      "st": 936.000038124062,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 30,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1385.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 884,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 899,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 914.000037227983,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 884.000036006058,
      "op": 5967.00024304089,
      "st": 884.000036006058,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 31,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1305.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 815,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 830,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 845.000034417556,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 815.000033195631,
      "op": 5898.00024023046,
      "st": 815.000033195631,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 32,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1238, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 763,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 778,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 793.000032299552,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 763.000031077627,
      "op": 5846.00023811246,
      "st": 763.000031077627,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 33,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1178, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 711,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 726,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 741.000030181549,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 711.000028959624,
      "op": 5794.00023599446,
      "st": 711.000028959624,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 34,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1113, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 659,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 674,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 689.000028063545,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 659.00002684162,
      "op": 5742.00023387645,
      "st": 659.00002684162,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 35,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 1050, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 606,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 621,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 636.000025904811,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 606.000024682886,
      "op": 5689.00023171772,
      "st": 606.000024682886,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 36,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 968.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 537,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 552,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 567.000023094383,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 537.000021872458,
      "op": 5620.00022890729,
      "st": 537.000021872458,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 37,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 903.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 485,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 500,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 515.00002097638,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 485.000019754455,
      "op": 5568.00022678929,
      "st": 485.000019754455,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 38,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 840, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 433,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 448,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 463.000018858377,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 433.000017636452,
      "op": 5516.00022467129,
      "st": 433.000017636452,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 39,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 759.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 365,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 380,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 395.00001608868,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 365.000014866755,
      "op": 5448.00022190159,
      "st": 365.000014866755,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 40,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 694, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 313,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 328,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 343.000013970676,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 313.000012748751,
      "op": 5396.00021978359,
      "st": 313.000012748751,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 41,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 613.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 244,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 259,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 274.000011160249,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 244.000009938324,
      "op": 5327.00021697316,
      "st": 244.000009938324,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 42,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 548.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 192,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 207,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 222.000009042245,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 192.00000782032,
      "op": 5275.00021485515,
      "st": 192.00000782032,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 43,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 484.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 140,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 155,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 170.000006924242,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 140.000005702317,
      "op": 5223.00021273715,
      "st": 140.000005702317,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 44,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 402.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 70,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 85,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 100.000004073084,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 70.0000028511585,
      "op": 5153.00020988599,
      "st": 70.0000028511585,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 45,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 332, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "hasMask": true,
      "masksProperties": [{
        "inv": false,
        "mode": "a",
        "pt": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 14,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [-2.125, 7.75], [-2.125, 7.875], [2.25, 4.375], [2.125, 4.375]],
              "c": true
            }]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0
            },
            "t": 29,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [8, 17.375], [8.25, 10.25], [8.25, 10.375]],
              "c": true
            }]
          }, {
            "t": 44.0000017921567,
            "s": [{
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[2.25, 4.625], [-1.875, 7.875], [8.125, 17.5], [25.625, 2], [21.875, -2], [8.25, 10.375]],
              "c": true
            }]
          }],
          "ix": 1
        },
        "o": {
          "a": 0,
          "k": 100,
          "ix": 3
        },
        "x": {
          "a": 0,
          "k": 0,
          "ix": 4
        },
        "nm": "Mask 1"
      }],
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 14.0000005702317,
      "op": 5097.00020760507,
      "st": 14.0000005702317,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 46,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 272, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 0,
      "op": 5083.00020703483,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 47,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 211.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 0,
      "op": 5083.00020703483,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 48,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 152.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 0,
      "op": 5083.00020703483,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 49,
      "ty": 2,
      "nm": "approve.png",
      "cl": "png",
      "refId": "image_1",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [20, 76.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [11.5, 7.5, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "ip": 0,
      "op": 5083.00020703483,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 50,
      "ty": 5,
      "nm": "ОПРЕДЕЛЕНИЕ ИТОГОВОЙ РЫНОЧНОЙ СТОИМОСТИ ОБЪЕКТА ОЦЕНКИ",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 3600.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "ОПРЕДЕЛЕНИЕ ИТОГОВОЙ РЫНОЧНОЙ СТОИМОСТИ ОБЪЕКТА ОЦЕНКИ",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 51,
      "ty": 5,
      "nm": "Расчет рыночной стоимости 100% пакета акция методом чистых активов 2",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 3516.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Расчет рыночной стоимости 100% пакета акция методом чистых активов",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 52,
      "ty": 5,
      "nm": "Определение рыночной стоимости кредиторской задолженности 2",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 3432.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости кредиторской задолженности",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 53,
      "ty": 5,
      "nm": "Определение рыночной стоимости краткосрочных кредитов",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 3349.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости краткосрочных кредитов",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 54,
      "ty": 5,
      "nm": "Определение рыночной стоимости предоставленных займов",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 3243.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости предоставленных займов",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 55,
      "ty": 5,
      "nm": "Определение рыночной стоимости дебиторской задолженности 2",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 3159.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости дебиторской задолженности",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 56,
      "ty": 5,
      "nm": "Определение рыночной стоимости запасов",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 3054.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости запасов",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 57,
      "ty": 5,
      "nm": "Определение рыночной стоимости основных средств 2",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2970.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости основных средств",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 58,
      "ty": 5,
      "nm": "Расчет рыночной стоимости 100% пакета акция методом чистых активов",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2885.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Расчет рыночной стоимости 100% пакета акция методом чистых активов",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 59,
      "ty": 5,
      "nm": "Определение рыночной стоимости кредиторской задолженности",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2802.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости кредиторской задолженности",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 60,
      "ty": 5,
      "nm": "Определение рыночной стоимости долгосрочных заемных средств",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2718.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости долгосрочных заемных средств",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 61,
      "ty": 5,
      "nm": "Определение рыночной стоимости дебиторской задолженности",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2634.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости дебиторской задолженности",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 62,
      "ty": 5,
      "nm": "Определение рыночной стоимости основных средств",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2549.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости основных средств",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 63,
      "ty": 5,
      "nm": "Определение рыночной стоимости",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2486.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение рыночной стоимости",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 64,
      "ty": 5,
      "nm": "Определение уровня существенности статей баланса",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2403.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Определение уровня существенности статей баланса",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 65,
      "ty": 5,
      "nm": "Расчет текущей стоимости денежных потоков",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2318.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Расчет текущей стоимости денежных потоков",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 66,
      "ty": 5,
      "nm": "Расчет терминальной стоимости",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2255.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Расчет терминальной стоимости",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 67,
      "ty": 5,
      "nm": "Расчет ставки дисконтирования",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2193.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Расчет ставки дисконтирования",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 68,
      "ty": 5,
      "nm": "Прогноз изменения рабочего капитала",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2129.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Прогноз изменения рабочего капитала",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 69,
      "ty": 5,
      "nm": "Прогноз амортизационных отчислений и налога на имущество",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 2045.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Прогноз амортизационных отчислений и налога на имущество",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 70,
      "ty": 5,
      "nm": "Прогноз капитальных вложений",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1982.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Прогноз капитальных вложений",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 71,
      "ty": 5,
      "nm": "Анализ рентабельности",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1920.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Анализ рентабельности",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 72,
      "ty": 5,
      "nm": "Прогноз прочих операционных и внереализационных доходов и расходов",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1836.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Прогноз прочих операционных и внереализационных доходов и расходов",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 73,
      "ty": 5,
      "nm": "Прогноз затрат",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1773.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Прогноз затрат",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 74,
      "ty": 5,
      "nm": "Прогноз выручки от реализации",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1710.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Прогноз выручки от реализации",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 75,
      "ty": 5,
      "nm": "Макроэкономические допущения",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1647.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Макроэкономические допущения",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 76,
      "ty": 5,
      "nm": "Выбор вида денежного потока",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1584.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Выбор вида денежного потока",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 77,
      "ty": 5,
      "nm": "Выбор длительности периода прогнозирования",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1499.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Выбор длительности периода прогнозирования",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 78,
      "ty": 5,
      "nm": "Предпринимательские риски в отрасли и их оценка",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1353.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Предпринимательские риски в отрасли\rи их оценка",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 79,
      "ty": 5,
      "nm": "Перспективы отрасли на рынке",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1437.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Перспективы отрасли на рынке",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 80,
      "ty": 5,
      "nm": "Масштабы отрасли в России",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1290.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Масштабы отрасли в России",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 81,
      "ty": 5,
      "nm": "Общая ситуация в отрасли рынке",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1227.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Общая ситуация в отрасли рынке",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 82,
      "ty": 5,
      "nm": "Современные тенденции в отрасли",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1163.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Современные тенденции в отрасли",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 83,
      "ty": 5,
      "nm": "Отраслевой обзор",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1101.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Отраслевой обзор",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 84,
      "ty": 5,
      "nm": "Потребительский спрос и доходы населения",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 1017.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Потребительский спрос и доходы населения",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 85,
      "ty": 5,
      "nm": "Инвестиционная активность",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 953.75, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Инвестиционная активность",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 86,
      "ty": 5,
      "nm": "Уровень инфляции и динамика цен",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 891.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Уровень инфляции и динамика цен",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 87,
      "ty": 5,
      "nm": "Состояние промышленного производства",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 807.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Состояние промышленного производства",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 88,
      "ty": 5,
      "nm": "Динамика ВВП",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 744.25, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Динамика ВВП",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 89,
      "ty": 5,
      "nm": "Основные показатели развития российской экономики",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 660, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Основные показатели развития российской экономики",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 90,
      "ty": 5,
      "nm": "Макроэкономический обзор",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 596.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Макроэкономический обзор",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 91,
      "ty": 5,
      "nm": "Общие выводы по финансовому анализу",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 534.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Общие выводы по финансовому анализу",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 92,
      "ty": 5,
      "nm": "Анализ рентабельности и отдачи на капитал",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 450, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Анализ рентабельности и отдачи на капитал",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 93,
      "ty": 5,
      "nm": "Анализ оборачиваемости",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 381.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Анализ оборачиваемости",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 94,
      "ty": 5,
      "nm": "Анализ финансовой устойчивости",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 321.5, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Анализ финансовой устойчивости",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 95,
      "ty": 5,
      "nm": "Анализ ликвидности",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 262, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Анализ ликвидности",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 96,
      "ty": 5,
      "nm": "Вертикальный анализ баланса-нетто",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 202, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Вертикальный анализ баланса-нетто",
              "j": 0,
              "tr": 0,
              "lh": 21.6,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }, {
      "ddd": 0,
      "ind": 97,
      "ty": 5,
      "nm": "Характеристика финансово-хозяйственной деятельности ",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 0,
          "k": [218.5, 122, 0],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [359, 113],
              "ps": [-174.5, -56.5],
              "s": 18,
              "f": "MullerLight",
              "t": "Характеристика финансово-хозяйственной деятельности ",
              "j": 0,
              "tr": 0,
              "lh": 21,
              "ls": 0,
              "fc": [0.137, 0.137, 0.137]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 5081.00020695337,
      "st": 0,
      "bm": 0
    }]
  }],
  "fonts": {
    "list": [{
      "origin": 3,
      "fPath": "fonts/muller_light.otf",
      "fClass": "Muller_light",
      "fFamily": "Muller",
      "fWeight": "",
      "fStyle": "Light",
      "fName": "MullerLight",
      "ascent": 69.9996948242188
    }]
  },
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 2,
    "nm": "white.png",
    "cl": "png",
    "refId": "image_0",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [215, 200, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [215, 200, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "ip": 0,
    "op": 3250.00013237521,
    "st": 0,
    "bm": 0
  }, {
    "ddd": 0,
    "ind": 2,
    "ty": 0,
    "nm": "Comp 4",
    "refId": "comp_0",
    "sr": 1,
    "ks": {
      "o": {
        "a": 1,
        "k": [{
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 0,
          "s": [0]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 13,
          "s": [100]
        }, {
          "i": {
            "x": [0.833],
            "y": [0.833]
          },
          "o": {
            "x": [0.167],
            "y": [0.167]
          },
          "t": 2728,
          "s": [100]
        }, {
          "t": 2760.0001124171,
          "s": [0]
        }],
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 1,
        "k": [{
          "i": {
            "x": 0.833,
            "y": 0.833
          },
          "o": {
            "x": 0.167,
            "y": 0.167
          },
          "t": 0,
          "s": [225, 1826, 0],
          "to": [0, -545, 0],
          "ti": [0, 545, 0]
        }, {
          "t": 2699.00010993252,
          "s": [225, -1444, 0]
        }],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [215, 1840.5, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "w": 430,
    "h": 3681,
    "ip": 0,
    "op": 3242.00013204937,
    "st": 0,
    "bm": 0
  }],
  "markers": []
};
var params = {
  container: document.getElementById('lottie-report'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animationData
};
var anim;
anim = lottie.loadAnimation(params);
var animationData = {
  "v": "5.7.3",
  "fr": 29.9700012207031,
  "ip": 0,
  "op": 297.000012097058,
  "w": 420,
  "h": 40,
  "nm": "Comp 5",
  "ddd": 0,
  "assets": [{
    "id": "comp_0",
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 5,
      "nm": "МосГорСуд МосОблСуд  Московский Арбитраж Арбитраж Московской области Апелляционный суд  МосГорСуд МосОблСуд  Московский Арбитраж Арбитраж Московской области Апелляционный суд  МосГорСуд МосОблСуд  Московский Арбитраж Арбитраж Московской области Апелляционный суд  МосГорСуд МосОблСуд  Московский Арбитраж Арбитраж Московской области Апелляционный суд ",
      "sr": 1,
      "ks": {
        "o": {
          "a": 0,
          "k": 100,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "p": {
          "a": 1,
          "k": [{
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.333,
              "y": 0.72
            },
            "t": 0,
            "s": [153.5, 582.25, 0],
            "to": [0, -9.917, 0],
            "ti": [0, 9.917, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 0.667
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 30,
            "s": [153.5, 522.75, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.167,
              "y": 0
            },
            "t": 60,
            "s": [153.5, 522.75, 0],
            "to": [0, -9.667, 0],
            "ti": [0, 9.667, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 0.667
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 91,
            "s": [153.5, 464.75, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.167,
              "y": 0
            },
            "t": 120,
            "s": [153.5, 464.75, 0],
            "to": [0, -9.833, 0],
            "ti": [0, 9.833, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 0.667
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 150,
            "s": [153.5, 405.75, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.167,
              "y": 0
            },
            "t": 180,
            "s": [153.5, 405.75, 0],
            "to": [0, -10, 0],
            "ti": [0, 10, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 0.667
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 210,
            "s": [153.5, 345.75, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.167,
              "y": 0
            },
            "t": 240,
            "s": [153.5, 345.75, 0],
            "to": [0, -9.667, 0],
            "ti": [0, 9.667, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 0.667
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 271,
            "s": [153.5, 287.75, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.167,
              "y": 0
            },
            "t": 299,
            "s": [153.5, 287.75, 0],
            "to": [0, -10, 0],
            "ti": [0, 10, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 0.667
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 330,
            "s": [153.5, 227.75, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.167,
              "y": 0
            },
            "t": 359,
            "s": [153.5, 227.75, 0],
            "to": [0, -9.667, 0],
            "ti": [0, 9.667, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 0.667
            },
            "o": {
              "x": 0.167,
              "y": 0.167
            },
            "t": 389,
            "s": [153.5, 169.75, 0],
            "to": [0, 0, 0],
            "ti": [0, 0, 0]
          }, {
            "i": {
              "x": 0.667,
              "y": 1
            },
            "o": {
              "x": 0.167,
              "y": 0
            },
            "t": 419,
            "s": [153.5, 169.75, 0],
            "to": [0, -10, 0],
            "ti": [0, 10, 0]
          }, {
            "t": 450.000018328876,
            "s": [153.5, 109.75, 0]
          }],
          "ix": 2
        },
        "a": {
          "a": 0,
          "k": [0, 0, 0],
          "ix": 1
        },
        "s": {
          "a": 0,
          "k": [100, 100, 100],
          "ix": 6
        }
      },
      "ao": 0,
      "sy": [{
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "lc": {
          "a": 0,
          "k": 1,
          "ix": 10
        },
        "ty": 1,
        "nm": "Drop Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [0, 0, 0, 1],
          "ix": 2
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 3
        },
        "a": {
          "a": 0,
          "k": 120,
          "ix": 5
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 8
        },
        "d": {
          "a": 0,
          "k": 5,
          "ix": 6
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 7
        },
        "bm": {
          "a": 0,
          "k": 5,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "ty": 2,
        "nm": "Inner Shadow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 10
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 11
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 9
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 12
        },
        "ty": 3,
        "nm": "Outer Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 1, 0.745098039216, 1],
          "ix": 5
        },
        "o": {
          "a": 0,
          "k": 75,
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 5,
          "ix": 11
        },
        "r": {
          "a": 0,
          "k": 50,
          "ix": 12
        },
        "sr": {
          "a": 0,
          "k": 1,
          "ix": 9
        },
        "ch": {
          "a": 0,
          "k": 0,
          "ix": 10
        },
        "bm": {
          "a": 0,
          "k": 11,
          "ix": 1
        },
        "no": {
          "a": 0,
          "k": 0,
          "ix": 3
        },
        "j": {
          "a": 0,
          "k": 0,
          "ix": 13
        },
        "ty": 4,
        "nm": "Inner Glow"
      }, {
        "c": {
          "a": 0,
          "k": [1, 0, 0, 1],
          "ix": 2
        },
        "s": {
          "a": 0,
          "k": 3,
          "ix": 3
        },
        "ty": 0,
        "nm": "Stroke"
      }],
      "t": {
        "d": {
          "k": [{
            "s": {
              "sz": [398.5, 1041.5],
              "ps": [-150.25, -520.75],
              "s": 26,
              "f": "MullerLight",
              "t": "МосГорСуд\rМосОблСуд \rМосковский Арбитраж Арбитраж Московской области\rАпелляционный суд \rМосГорСуд\rМосОблСуд \rМосковский Арбитраж Арбитраж Московской области\rАпелляционный суд \rМосГорСуд\rМосОблСуд \rМосковский Арбитраж Арбитраж Московской области\rАпелляционный суд \rМосГорСуд\rМосОблСуд \rМосковский Арбитраж Арбитраж Московской области\rАпелляционный суд ",
              "j": 0,
              "tr": 0,
              "lh": 59,
              "ls": 0,
              "fc": [0.333, 0.557, 0.761]
            },
            "t": 0
          }]
        },
        "p": {},
        "m": {
          "g": 1,
          "a": {
            "a": 0,
            "k": [0, 0],
            "ix": 2
          }
        },
        "a": []
      },
      "ip": 0,
      "op": 780.000031770051,
      "st": 0,
      "bm": 0
    }]
  }],
  "fonts": {
    "list": [{
      "fName": "MullerLight",
      "fFamily": "Muller",
      "fStyle": "Light",
      "ascent": 69.9996948242188
    }]
  },
  "layers": [{
    "ddd": 0,
    "ind": 1,
    "ty": 0,
    "nm": "Text 3 блок",
    "refId": "comp_0",
    "sr": 1,
    "ks": {
      "o": {
        "a": 0,
        "k": 100,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "p": {
        "a": 0,
        "k": [252.5, 149, 0],
        "ix": 2
      },
      "a": {
        "a": 0,
        "k": [250, 200, 0],
        "ix": 1
      },
      "s": {
        "a": 0,
        "k": [100, 100, 100],
        "ix": 6
      }
    },
    "ao": 0,
    "hasMask": true,
    "masksProperties": [{
      "inv": false,
      "mode": "a",
      "pt": {
        "a": 0,
        "k": {
          "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
          "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
          "v": [[447, 54], [-2.5, 54], [-2.5, 90], [447, 90]],
          "c": true
        },
        "ix": 1
      },
      "o": {
        "a": 0,
        "k": 100,
        "ix": 3
      },
      "x": {
        "a": 0,
        "k": 0,
        "ix": 4
      },
      "nm": "Mask 1"
    }],
    "sy": [{
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "lc": {
        "a": 0,
        "k": 1,
        "ix": 10
      },
      "ty": 1,
      "nm": "Drop Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [0, 0, 0, 1],
        "ix": 2
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 3
      },
      "a": {
        "a": 0,
        "k": 120,
        "ix": 5
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 8
      },
      "d": {
        "a": 0,
        "k": 5,
        "ix": 6
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 7
      },
      "bm": {
        "a": 0,
        "k": 5,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "ty": 2,
      "nm": "Inner Shadow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 10
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 11
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 9
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 12
      },
      "ty": 3,
      "nm": "Outer Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 1, 0.745098039216, 1],
        "ix": 5
      },
      "o": {
        "a": 0,
        "k": 75,
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 5,
        "ix": 11
      },
      "r": {
        "a": 0,
        "k": 50,
        "ix": 12
      },
      "sr": {
        "a": 0,
        "k": 1,
        "ix": 9
      },
      "ch": {
        "a": 0,
        "k": 0,
        "ix": 10
      },
      "bm": {
        "a": 0,
        "k": 11,
        "ix": 1
      },
      "no": {
        "a": 0,
        "k": 0,
        "ix": 3
      },
      "j": {
        "a": 0,
        "k": 0,
        "ix": 13
      },
      "ty": 4,
      "nm": "Inner Glow"
    }, {
      "c": {
        "a": 0,
        "k": [1, 0, 0, 1],
        "ix": 2
      },
      "s": {
        "a": 0,
        "k": 3,
        "ix": 3
      },
      "ty": 0,
      "nm": "Stroke"
    }],
    "w": 500,
    "h": 400,
    "ip": 0,
    "op": 780.000031770051,
    "st": 0,
    "bm": 0
  }],
  "markers": [],
  "chars": [{
    "ch": "М",
    "size": 26,
    "style": "Light",
    "w": 90.1,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[75.934, -70.496], [45.419, -25.278], [14.804, -70.496], [9.769, -70.496], [9.769, 0], [15.71, 0], [15.71, -59.015], [43.506, -17.926], [47.232, -17.926], [75.027, -59.015], [75.027, 0], [80.969, 0], [80.969, -70.496]],
              "c": true
            },
            "ix": 2
          },
          "nm": "М",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "М",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "о",
    "size": 26,
    "style": "Light",
    "w": 59.5,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -16.315], [-12.991, 0], [0, 16.315], [13.193, 0]],
              "o": [[0, 16.315], [13.193, 0], [0, -16.315], [-12.991, 0]],
              "v": [[4.532, -24.17], [29.91, 1.108], [55.389, -24.17], [29.91, -49.448]],
              "c": true
            },
            "ix": 2
          },
          "nm": "о",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -12.589], [10.675, 0], [0, 12.589], [-10.776, 0]],
              "o": [[0, 12.589], [-10.776, 0], [0, -12.589], [10.675, 0]],
              "v": [[49.649, -24.17], [30.011, -4.33], [10.272, -24.17], [30.011, -44.009]],
              "c": true
            },
            "ix": 2
          },
          "nm": "о",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "о",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "с",
    "size": 26,
    "style": "Light",
    "w": 48.7,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -17.825], [-12.488, 0], [-4.633, 2.316], [0, 0], [5.338, 0], [0, 13.596], [-10.373, 0], [-3.726, -2.82], [0, 0], [5.136, 0]],
              "o": [[0, 17.12], [5.841, 0], [0, 0], [-4.23, 2.518], [-10.373, 0], [0, -14.301], [4.935, 0], [0, 0], [-4.129, -2.82], [-12.589, 0]],
              "v": [[4.532, -23.868], [29.91, 1.108], [45.721, -2.316], [45.721, -8.057], [30.716, -4.129], [10.272, -23.969], [31.32, -44.211], [45.218, -39.981], [45.218, -45.52], [30.615, -49.448]],
              "c": true
            },
            "ix": 2
          },
          "nm": "с",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "с",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "Г",
    "size": 26,
    "style": "Light",
    "w": 56.7,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[15.71, 0], [15.71, -64.755], [55.692, -64.755], [55.692, -70.496], [9.769, -70.496], [9.769, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "Г",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "Г",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "р",
    "size": 26,
    "style": "Light",
    "w": 61.8,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[4.23, -6.143], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-9.668, 0], [0, 14.905], [13.797, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [3.625, 5.539], [13.797, 0], [0, -14.905], [-9.668, 0]],
              "v": [[12.991, -38.37], [12.991, -48.34], [7.855, -48.34], [7.855, 22.156], [13.596, 22.156], [13.596, -9.366], [33.636, 1.108], [57.706, -24.17], [33.636, -49.448]],
              "c": true
            },
            "ix": 2
          },
          "nm": "р",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -12.387], [10.675, 0], [2.82, 7.251], [0, 0], [-9.366, 0]],
              "o": [[0, 12.488], [-9.366, 0], [0, 0], [2.82, -7.251], [10.675, 0]],
              "v": [[51.965, -24.17], [32.932, -4.129], [13.495, -17.624], [13.495, -30.716], [32.932, -44.211]],
              "c": true
            },
            "ix": 2
          },
          "nm": "р",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "р",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "С",
    "size": 26,
    "style": "Light",
    "w": 63.9,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -24.573], [-17.624, 0], [-5.74, 3.122], [0, 0], [7.452, 0], [-0.101, 20.343], [-15.408, 0], [-5.136, -3.323], [0, 0], [7.05, 0]],
              "o": [[-0.101, 23.666], [7.654, 0], [0, 0], [-5.136, 3.323], [-15.408, 0], [0, -21.451], [6.848, 0], [0, 0], [-5.74, -3.122], [-18.027, 0]],
              "v": [[5.035, -34.543], [41.693, 1.108], [62.137, -3.726], [62.137, -9.668], [42.902, -4.532], [11.078, -34.543], [42.599, -65.964], [61.432, -60.828], [61.432, -66.87], [41.693, -71.603]],
              "c": true
            },
            "ix": 2
          },
          "nm": "С",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "С",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "у",
    "size": 26,
    "style": "Light",
    "w": 53.6,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [5.74, 0], [1.511, 0.403], [0, 0], [-1.712, 0], [-4.935, 11.179], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [-3.424, 8.459], [-1.41, 0], [0, 0], [1.813, 0.403], [6.747, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[27.997, -6.345], [7.452, -48.34], [1.41, -48.34], [25.177, 0.201], [22.76, 5.841], [9.567, 18.228], [5.136, 17.624], [5.136, 22.659], [10.272, 23.264], [27.594, 7.956], [52.066, -48.34], [46.024, -48.34]],
              "c": true
            },
            "ix": 2
          },
          "nm": "у",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "у",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "д",
    "size": 26,
    "style": "Light",
    "w": 62.2,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [6.143, -11.682], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.101, 19.034], [0, 0], [0, 0], [0, 0]],
              "v": [[8.157, 13.394], [8.157, 0], [53.677, 0], [53.677, 13.394], [59.317, 13.394], [59.317, -5.136], [52.267, -5.136], [52.267, -48.34], [17.725, -48.34], [8.963, -5.136], [2.618, -5.136], [2.618, 13.394]],
              "c": true
            },
            "ix": 2
          },
          "nm": "д",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-0.201, 16.516], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [5.035, -10.574]],
              "v": [[23.163, -43.204], [46.628, -43.204], [46.628, -5.136], [15.106, -5.136]],
              "c": true
            },
            "ix": 2
          },
          "nm": "д",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "д",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "\r",
    "size": 26,
    "style": "Light",
    "w": 0,
    "fFamily": "Muller"
  }, {
    "ch": "О",
    "size": 26,
    "style": "Light",
    "w": 82.4,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -17.926], [-24.573, 0], [0, 17.926], [24.573, 0]],
              "o": [[0, 17.926], [24.573, 0], [0, -17.926], [-24.573, 0]],
              "v": [[4.834, -35.248], [41.492, 1.108], [78.149, -35.248], [41.492, -71.603]],
              "c": true
            },
            "ix": 2
          },
          "nm": "О",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -15.308], [20.645, 0], [0, 15.308], [-20.645, 0]],
              "o": [[0, 15.308], [-20.645, 0], [0, -15.308], [20.645, 0]],
              "v": [[72.107, -35.248], [41.492, -4.532], [10.876, -35.248], [41.492, -65.964]],
              "c": true
            },
            "ix": 2
          },
          "nm": "О",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "О",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "б",
    "size": 26,
    "style": "Light",
    "w": 58.7,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 14.703], [12.891, 0], [3.625, -7.15], [-7.251, 4.431], [-6.848, 5.438], [0, 0], [13.898, -8.459], [0, -15.912], [-14.703, 0]],
              "o": [[0, -14.301], [-8.56, 0], [1.913, -8.762], [11.783, -6.949], [0, 0], [-6.848, 6.747], [-8.661, 5.438], [0, 17.322], [14.502, 0]],
              "v": [[54.584, -22.659], [30.917, -46.326], [10.876, -34.744], [23.566, -55.49], [50.052, -65.561], [50.052, -71.603], [20.242, -59.72], [5.136, -26.788], [30.112, 1.108]],
              "c": true
            },
            "ix": 2
          },
          "nm": "б",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 11.078], [-10.172, 0], [0, -10.574], [11.682, 0]],
              "o": [[1.108, -9.869], [11.38, 0], [0, 10.574], [-11.581, 0]],
              "v": [[10.876, -23.868], [30.212, -40.887], [48.944, -22.559], [30.011, -4.33]],
              "c": true
            },
            "ix": 2
          },
          "nm": "б",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "б",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "л",
    "size": 26,
    "style": "Light",
    "w": 59,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-1.41, 26.587], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [8.862, 0], [1.208, 0.504], [0, 0], [-1.611, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-0.906, 27.594], [-1.108, 0], [0, 0], [1.913, 0.705], [11.783, 0]],
              "v": [[23.163, -43.002], [45.923, -43.002], [45.923, 0], [51.563, 0], [51.563, -48.34], [17.523, -48.34], [4.532, -4.23], [1.108, -4.834], [1.108, -0.201], [6.244, 0.705]],
              "c": true
            },
            "ix": 2
          },
          "nm": "л",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "л",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": " ",
    "size": 26,
    "style": "Light",
    "w": 25.7,
    "data": {},
    "fFamily": "Muller"
  }, {
    "ch": "к",
    "size": 26,
    "style": "Light",
    "w": 51.2,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[13.596, 0], [13.596, -22.055], [24.472, -22.055], [44.11, 0], [50.858, 0], [29.306, -24.573], [48.34, -48.34], [41.693, -48.34], [24.774, -27.393], [13.596, -27.393], [13.596, -48.34], [7.855, -48.34], [7.855, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "к",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "к",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "в",
    "size": 26,
    "style": "Light",
    "w": 54.5,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 8.258], [4.733, 1.208], [0, 5.338], [8.762, 0], [0, 0], [0, 0]],
              "o": [[9.668, 0], [0, -6.647], [4.431, -1.511], [0, -8.157], [0, 0], [0, 0], [0, 0]],
              "v": [[34.442, 0], [49.85, -13.092], [40.887, -24.673], [48.239, -35.55], [33.435, -48.34], [7.855, -48.34], [7.855, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "в",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, -6.747], [6.042, 0], [0, 0]],
              "o": [[0, 0], [5.237, 0], [0, 6.244], [0, 0], [0, 0]],
              "v": [[13.495, -21.954], [33.939, -21.954], [44.11, -13.394], [33.536, -5.035], [13.495, -5.035]],
              "c": true
            },
            "ix": 2
          },
          "nm": "в",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 2,
          "ty": "sh",
          "ix": 3,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, -5.841], [5.841, 0], [0, 0]],
              "o": [[0, 0], [5.438, 0], [0, 5.539], [0, 0], [0, 0]],
              "v": [[13.495, -43.304], [32.73, -43.304], [42.398, -35.046], [32.932, -26.99], [13.495, -26.99]],
              "c": true
            },
            "ix": 2
          },
          "nm": "в",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "в",
        "np": 6,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "и",
    "size": 26,
    "style": "Light",
    "w": 58.7,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[12.79, 0], [45.621, -39.175], [45.621, 0], [51.26, 0], [51.26, -48.34], [46.326, -48.34], [13.596, -9.164], [13.596, -48.34], [7.855, -48.34], [7.855, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "и",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "и",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "й",
    "size": 26,
    "style": "Light",
    "w": 58.7,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[-4.23, 3.122], [0, 0], [4.834, 0], [4.532, 3.323], [0, 0], [-4.733, 0]],
              "o": [[0, 0], [-4.633, 3.323], [-4.733, 0], [0, 0], [4.129, 3.122], [4.834, 0]],
              "v": [[43.002, -60.324], [43.002, -65.662], [29.507, -61.23], [16.113, -65.662], [16.113, -60.324], [29.507, -56.195]],
              "c": true
            },
            "ix": 2
          },
          "nm": "й",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[12.79, 0], [45.621, -39.175], [45.621, 0], [51.26, 0], [51.26, -48.34], [46.326, -48.34], [13.596, -9.164], [13.596, -48.34], [7.855, -48.34], [7.855, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "й",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "й",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "А",
    "size": 26,
    "style": "Light",
    "w": 71.3,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[7.553, 0], [16.013, -18.933], [55.792, -18.933], [64.151, 0], [70.596, 0], [39.276, -70.496], [32.529, -70.496], [1.108, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "А",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [-0.302, 0.705], [-0.302, -0.806], [0, 0], [0, 0]],
              "o": [[0.302, -0.806], [0.302, 0.705], [0, 0], [0, 0], [0, 0]],
              "v": [[34.946, -62.137], [35.852, -64.352], [36.758, -62.137], [53.375, -24.573], [18.329, -24.573]],
              "c": true
            },
            "ix": 2
          },
          "nm": "А",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "А",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "т",
    "size": 26,
    "style": "Light",
    "w": 46.1,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[26.083, 0], [26.083, -43.002], [44.815, -43.002], [44.815, -48.34], [1.611, -48.34], [1.611, -43.002], [20.343, -43.002], [20.343, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "т",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "т",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "а",
    "size": 26,
    "style": "Light",
    "w": 54.6,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 3.223], [0, 0], [12.79, 0], [3.726, -1.309], [0, 0], [-7.352, 0], [0, -8.459], [0, 0], [5.136, 0], [0, -11.984], [-8.459, 0], [-4.834, 5.237], [-4.129, 0], [-1.611, 0.604], [0, 0], [1.309, 0]],
              "o": [[0, 0], [0, -12.891], [-7.855, 0], [0, 0], [4.028, -1.712], [9.97, 0], [0, 0], [-4.633, -1.309], [-10.272, 0], [0, 9.869], [8.057, 0], [0.504, 5.438], [1.813, 0], [0, 0], [-1.208, 0.403], [-2.316, 0]],
              "v": [[45.822, -8.762], [45.822, -29.407], [25.378, -49.448], [7.452, -46.426], [7.452, -40.787], [24.774, -44.211], [40.182, -30.112], [40.182, -26.889], [24.976, -29.004], [3.625, -13.193], [20.444, 1.108], [40.283, -7.05], [48.642, 0.403], [53.879, -0.604], [53.879, -5.237], [50.153, -4.532]],
              "c": true
            },
            "ix": 2
          },
          "nm": "а",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 6.647], [-7.956, 0], [-4.23, -1.108], [0, 0], [7.251, 0]],
              "o": [[0, -8.057], [4.834, 0], [0, 0], [-4.33, 6.143], [-6.143, 0]],
              "v": [[9.467, -13.495], [25.781, -24.17], [40.182, -22.156], [40.182, -13.293], [21.552, -3.827]],
              "c": true
            },
            "ix": 2
          },
          "nm": "а",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "а",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "ж",
    "size": 26,
    "style": "Light",
    "w": 73.6,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[73.215, 0], [52.872, -24.573], [70.697, -48.34], [64.352, -48.34], [48.138, -26.99], [39.88, -26.99], [39.88, -48.34], [34.241, -48.34], [34.241, -26.99], [25.983, -26.99], [9.769, -48.34], [3.424, -48.34], [21.249, -24.573], [0.906, 0], [7.352, 0], [25.781, -21.753], [34.241, -21.753], [34.241, 0], [39.88, 0], [39.88, -21.753], [48.34, -21.753], [66.769, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ж",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ж",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "п",
    "size": 26,
    "style": "Light",
    "w": 58.1,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[13.596, 0], [13.596, -43.002], [45.016, -43.002], [45.016, 0], [50.656, 0], [50.656, -48.34], [7.855, -48.34], [7.855, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "п",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "п",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "е",
    "size": 26,
    "style": "Light",
    "w": 54.6,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, -16.617], [-14.099, 0], [-4.33, 2.316], [0, 0], [5.841, 0], [0.705, 12.286], [0, 0], [18.329, 0]],
              "o": [[0, 17.422], [6.143, 0], [0, 0], [-4.129, 2.417], [-10.776, 0], [0, 0], [2.518, -12.689], [-11.682, 0]],
              "v": [[4.532, -24.17], [31.119, 1.108], [47.736, -2.417], [47.736, -8.057], [31.924, -4.129], [10.272, -21.552], [50.455, -21.552], [28.4, -49.448]],
              "c": true
            },
            "ix": 2
          },
          "nm": "е",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0.806, -6.848], [0, 0], [-9.467, 0]],
              "o": [[0, 0], [0.504, -11.481], [13.596, 0]],
              "v": [[45.419, -26.587], [10.272, -26.587], [28.802, -44.211]],
              "c": true
            },
            "ix": 2
          },
          "nm": "е",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "е",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "я",
    "size": 26,
    "style": "Light",
    "w": 54.1,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -8.459], [-7.855, -1.913], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-11.481, 0], [0, 6.949], [0, 0], [0, 0]],
              "v": [[10.071, 0], [23.868, -17.926], [40.887, -17.926], [40.887, 0], [46.628, 0], [46.628, -48.34], [23.566, -48.34], [5.539, -33.133], [17.725, -18.53], [3.323, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "я",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 6.143], [-8.057, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, -6.143], [0, 0], [0, 0], [0, 0], [-7.956, 0]],
              "v": [[11.279, -33.133], [24.069, -43.204], [40.988, -43.204], [40.988, -23.062], [24.069, -23.062]],
              "c": true
            },
            "ix": 2
          },
          "nm": "я",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "я",
        "np": 5,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "ц",
    "size": 26,
    "style": "Light",
    "w": 59.7,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[56.699, 13.394], [56.699, -5.338], [49.649, -5.338], [49.649, -48.34], [44.009, -48.34], [44.009, -5.338], [13.596, -5.338], [13.596, -48.34], [7.855, -48.34], [7.855, 0], [51.16, 0], [51.16, 13.394]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ц",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ц",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "н",
    "size": 26,
    "style": "Light",
    "w": 58.1,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[13.596, 0], [13.596, -21.552], [45.016, -21.552], [45.016, 0], [50.656, 0], [50.656, -48.34], [45.016, -48.34], [45.016, -26.788], [13.596, -26.788], [13.596, -48.34], [7.855, -48.34], [7.855, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "н",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "н",
        "np": 3,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }, {
    "ch": "ы",
    "size": 26,
    "style": "Light",
    "w": 71.1,
    "data": {
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ind": 0,
          "ty": "sh",
          "ix": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 8.862], [11.38, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[11.38, 0], [0, -8.762], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[30.011, 0], [48.441, -15.408], [30.011, -30.716], [13.596, -30.716], [13.596, -48.34], [7.855, -48.34], [7.855, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 1,
          "ty": "sh",
          "ix": 2,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, -6.445], [8.258, 0], [0, 0]],
              "o": [[0, 0], [8.157, 0], [0, 6.445], [0, 0], [0, 0]],
              "v": [[13.495, -25.58], [29.205, -25.58], [42.599, -15.408], [29.205, -5.136], [13.495, -5.136]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }, {
          "ind": 2,
          "ty": "sh",
          "ix": 3,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
              "v": [[63.748, 0], [63.748, -48.34], [58.008, -48.34], [58.008, 0]],
              "c": true
            },
            "ix": 2
          },
          "nm": "ы",
          "mn": "ADBE Vector Shape - Group",
          "hd": false
        }],
        "nm": "ы",
        "np": 6,
        "cix": 2,
        "bm": 0,
        "ix": 1,
        "mn": "ADBE Vector Group",
        "hd": false
      }]
    },
    "fFamily": "Muller"
  }]
};
var params = {
  container: document.getElementById('lottie-estimate'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: animationData
};
var anim;
anim = lottie.loadAnimation(params); //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');

var forms = document.querySelectorAll('form');

if (forms.length > 0) {
  for (var _index14 = 0; _index14 < forms.length; _index14++) {
    var _el4 = forms[_index14];

    _el4.addEventListener('submit', form_submit);
  }
}

function form_submit(_x3) {
  return _form_submit.apply(this, arguments);
}

function _form_submit() {
  _form_submit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var btn, form, error, formAction, formMethod, message, ajax, formData, response, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            btn = e.target;
            form = btn.closest('form');
            error = form_validate(form);

            if (!(error == 0)) {
              _context2.next = 28;
              break;
            }

            formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
            formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
            message = form.getAttribute('data-message');
            ajax = form.getAttribute('data-ajax'); //SendForm

            if (!ajax) {
              _context2.next = 26;
              break;
            }

            e.preventDefault();
            formData = new FormData(form);
            form.classList.add('_sending');
            _context2.next = 14;
            return fetch(formAction, {
              method: formMethod,
              body: formData
            });

          case 14:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 24;
              break;
            }

            _context2.next = 18;
            return response.json();

          case 18:
            result = _context2.sent;
            form.classList.remove('_sending');

            if (message) {
              popup_open(message + '-message');
            }

            form_clean(form);
            _context2.next = 26;
            break;

          case 24:
            alert("Ошибка");
            form.classList.remove('_sending');

          case 26:
            _context2.next = 29;
            break;

          case 28:
            e.preventDefault();

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _form_submit.apply(this, arguments);
}

function form_validate(form) {
  var error = 0;
  var form_req = form.querySelectorAll('._req');

  if (form_req.length > 0) {
    for (var _index15 = 0; _index15 < form_req.length; _index15++) {
      var _el5 = form_req[_index15];

      if (!_is_hidden(_el5)) {
        error += form_validate_input(_el5);
      }
    }
  }

  return error;
}

function form_validate_input(input) {
  var error = 0;
  var input_g_value = input.getAttribute('data-value');

  if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
    if (input.value != input_g_value) {
      var em = input.value.replace(" ", "");
      input.value = em;
    }

    if (email_test(input) || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
    form_add_error(input);
    error++;
  } else {
    if (input.value == '' || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  }

  return error;
}

function form_add_error(input) {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');
  var input_error = input.parentElement.querySelector('.form__error');

  if (input_error) {
    input.parentElement.removeChild(input_error);
  }

  var input_error_text = input.getAttribute('data-error');

  if (input_error_text && input_error_text != '') {
    input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
  }
}

function form_remove_error(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');
  var input_error = input.parentElement.querySelector('.form__error');

  if (input_error) {
    input.parentElement.removeChild(input_error);
  }
}

function form_clean(form) {
  var inputs = form.querySelectorAll('input,textarea');

  for (var _index16 = 0; _index16 < inputs.length; _index16++) {
    var _el6 = inputs[_index16];

    _el6.parentElement.classList.remove('_focus');

    _el6.classList.remove('_focus');

    _el6.value = _el6.getAttribute('data-value');
  }

  var checkboxes = form.querySelectorAll('.checkbox__input');

  if (checkboxes.length > 0) {
    for (var _index17 = 0; _index17 < checkboxes.length; _index17++) {
      var checkbox = checkboxes[_index17];
      checkbox.checked = false;
    }
  }

  var selects = form.querySelectorAll('select');

  if (selects.length > 0) {
    for (var _index18 = 0; _index18 < selects.length; _index18++) {
      var select = selects[_index18];
      var select_default_value = select.getAttribute('data-default');
      select.value = select_default_value;
      select_item(select);
    }
  }
} //Placeholers


var inputs = document.querySelectorAll('input[data-val],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
  if (inputs.length > 0) {
    var _loop6 = function _loop6(_index19) {
      var input = inputs[_index19];
      var input_g_value = input.getAttribute('data-value'); // input_placeholder_add(input);

      if (input.value != '' && input.value != input_g_value) {
        input_focus_add(input);
      }

      input.addEventListener('focus', function (e) {
        if (input.value == input_g_value) {
          input_focus_add(input);
          input.value = '';
        }

        if (input.classList.contains('_phone')) {// const numInputs = document.querySelectorAll('._phone');
          // numInputs.forEach(item => {
          // 	item.addEventListener('input', () => {
          // 		item.value = item.value.replace(/\D/, '');
          // 	});
          // });
          //'+7(999) 999 9999'
          //'+38(999) 999 9999'
          //'+375(99)999-99-99'
          // input.classList.add('_mask');
          // Inputmask("+375 (99) 9999999", {
          // 	//"placeholder": '',
          // 	clearIncomplete: true,
          // 	clearMaskOnLostFocus: true,
          // 	onincomplete: function () {
          // 		input_clear_mask(input, input_g_value);
          // 	}
          // }).mask(input);
        }

        form_remove_error(input);
      });
      input.addEventListener('blur', function (e) {
        if (input.value == '') {
          input.value = input_g_value;
          input_focus_remove(input);

          if (input.classList.contains('_mask')) {
            input_clear_mask(input, input_g_value);
          }

          if (input.getAttribute('data-type') === "pass") {
            input.setAttribute('type', 'text');
          }
        }
      });
    };

    for (var _index19 = 0; _index19 < inputs.length; _index19++) {
      _loop6(_index19);
    }
  }
}

function input_placeholder_add(input) {
  var input_g_value = input.getAttribute('data-value');

  if (input.value == '' && input_g_value != '') {
    input.value = input_g_value;
  }
}

function input_focus_add(input) {
  input.classList.add('_focus');
  input.parentElement.classList.add('_focus');
}

function input_focus_remove(input) {
  input.classList.remove('_focus');
  input.parentElement.classList.remove('_focus');
}

function input_clear_mask(input, input_g_value) {
  input.inputmask.remove();
  input.value = input_g_value;
  input_focus_remove(input);
}

var scr_body = document.querySelector('body');
var scr_blocks = document.querySelectorAll('._scr-sector');
var scr_items = document.querySelectorAll('._scr-item');
var scr_fix_block = document.querySelectorAll('._side-wrapper');
var scr_min_height = 750;
var scrolling = true;
var scrolling_full = true;
var scrollDirection = 0;
var currentScroll; //ScrollOnScroll

window.addEventListener('scroll', scroll_scroll);

function scroll_scroll() {
  var src_value = currentScroll = pageYOffset;
  var header = document.querySelector('header.header');

  if (header !== null) {
    if (src_value > 10) {
      header.classList.add('_scroll');
    } else {
      header.classList.remove('_scroll');
    }
  }

  if (scr_blocks.length > 0) {
    for (var _index20 = 0; _index20 < scr_blocks.length; _index20++) {
      var block = scr_blocks[_index20];
      var block_offset = offset(block).top;
      var block_height = block.offsetHeight;
      /*
      if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
      	let scrProcent = (src_value - block_offset) / block_height * 100;
      	scrParallax(block, scrProcent, block_height);
      }
      */

      if (pageYOffset > block_offset - window.innerHeight / 1.5 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        block.classList.add('_scr-sector_active');
      } else {
        if (block.classList.contains('_scr-sector_active')) {
          block.classList.remove('_scr-sector_active');
        }
      }

      if (pageYOffset > block_offset - window.innerHeight / 2 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        if (!block.classList.contains('_scr-sector_current')) {
          block.classList.add('_scr-sector_current');
        }
      } else {
        if (block.classList.contains('_scr-sector_current')) {
          block.classList.remove('_scr-sector_current');
        }
      }
    }
  }

  if (scr_items.length > 0) {
    for (var _index21 = 0; _index21 < scr_items.length; _index21++) {
      var scr_item = scr_items[_index21];
      var scr_item_offset = offset(scr_item).top;
      var scr_item_height = scr_item.offsetHeight;
      var scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);

      if (window.innerHeight > scr_item_height) {
        scr_item_point = window.innerHeight - scr_item_height / 3;
      }

      if (src_value > scr_item_offset - scr_item_point && src_value < scr_item_offset + scr_item_height) {
        scr_item.classList.add('_active');
        scroll_load_item(scr_item);
      } else {
        scr_item.classList.remove('_active');
      }

      if (src_value > scr_item_offset - window.innerHeight) {
        if (scr_item.querySelectorAll('._lazy').length > 0) {
          scroll_lazy(scr_item);
        }
      }
    }
  }

  if (scr_fix_block.length > 0) {
    fix_block(scr_fix_block, src_value);
  }

  var custom_scroll_line = document.querySelector('._custom-scroll__line');

  if (custom_scroll_line) {
    var window_height = window.innerHeight;
    var content_height = document.querySelector('.wrapper').offsetHeight;
    var scr_procent = pageYOffset / (content_height - window_height) * 100;
    var custom_scroll_line_height = custom_scroll_line.offsetHeight;
    custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
  }

  if (src_value > scrollDirection) {// downscroll code
  } else {// upscroll code
  }

  scrollDirection = src_value <= 0 ? 0 : src_value;
}

setTimeout(function () {
  //document.addEventListener("DOMContentLoaded", scroll_scroll);
  scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
  var lazy_src = scr_item.querySelectorAll('*[data-src]');

  if (lazy_src.length > 0) {
    for (var _index22 = 0; _index22 < lazy_src.length; _index22++) {
      var _el7 = lazy_src[_index22];

      if (!_el7.classList.contains('_loaded')) {
        _el7.setAttribute('src', _el7.getAttribute('data-src'));

        _el7.classList.add('_loaded');
      }
    }
  }

  var lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');

  if (lazy_srcset.length > 0) {
    for (var _index23 = 0; _index23 < lazy_srcset.length; _index23++) {
      var _el8 = lazy_srcset[_index23];

      if (!_el8.classList.contains('_loaded')) {
        _el8.setAttribute('srcset', _el8.getAttribute('data-srcset'));

        _el8.classList.add('_loaded');
      }
    }
  }
  /*
  window.onload = () => {
  	const observer = new IntersectionObserver((entries, observer) => {
  		entries.forEach(entry => {
  			if (entry.isIntersecting) {
  				console.log(entry)
  				// ссылка на оригинальное изображение хранится в атрибуте "data-src"
  				entry.target.src = entry.target.dataset.src
  				observer.unobserve(entry.target)
  			}
  		})
  	}, { threshold: 0.5 })
  
  	document.querySelectorAll('img').forEach(img => observer.observe(img))
  }
  */

}

function scroll_load_item(scr_item) {
  if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
    var map_item = document.getElementById('map');

    if (map_item) {
      scr_item.classList.add('_loaded-map');
      map();
    }
  }
}

function scrParallax(block, scrProcent, blockHeight) {
  var prlxItems = block.querySelectorAll('._prlx-item');

  if (prlxItems.length > 0) {
    for (var _index24 = 0; _index24 < prlxItems.length; _index24++) {
      var prlxItem = prlxItems[_index24];
      var prlxItemAttr = prlxItem.dataset.prlx ? prlxItem.dataset.prlx : 3;
      var prlxItemValue = -1 * (blockHeight / 100 * scrProcent / prlxItemAttr);
      prlxItem.style.cssText = "transform: translateY(".concat(prlxItemValue, "px);");
    }
  }
} //FullScreenScroll


if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener('wheel', full_scroll);
  var swiperScrolls = document.querySelectorAll('._swiper_scroll');

  if (swiperScrolls.length > 0) {
    for (var _index25 = 0; _index25 < swiperScrolls.length; _index25++) {
      var swiperScroll = swiperScrolls[_index25];
      swiperScroll.addEventListener("mouseenter", function (e) {
        window.removeEventListener('wheel', full_scroll);
      });
      swiperScroll.addEventListener("mouseleave", function (e) {
        window.addEventListener('wheel', full_scroll);
      });
    }
  }
}

function getPrevBlockPos(current_block_prev) {
  var viewport_height = window.innerHeight;
  var current_block_prev_height = current_block_prev.offsetHeight;
  var block_pos = offset(current_block_prev).top;

  if (current_block_prev_height >= viewport_height) {
    block_pos = block_pos + (current_block_prev_height - viewport_height);
  }

  return block_pos;
}

function full_scroll(e) {
  var viewport_height = window.innerHeight;

  if (viewport_height >= scr_min_height) {
    if (scrolling_full) {
      var current_block = document.querySelector('._scr-sector._scr-sector_current');
      var current_block_pos = offset(current_block).top;
      var current_block_height = current_block.offsetHeight;
      var current_block_next = current_block.nextElementSibling;
      var current_block_prev = current_block.previousElementSibling;

      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_height <= viewport_height) {
          if (current_block_prev) {
            full_scroll_to_sector(getPrevBlockPos(current_block_prev));
          }
        } else {
          enableScroll();

          if (currentScroll <= current_block_pos) {
            if (current_block_prev) {
              full_scroll_to_sector(getPrevBlockPos(current_block_prev));
            }
          }
        }
      } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
        if (current_block_height <= viewport_height) {
          if (current_block_next) {
            var block_pos = offset(current_block_next).top;
            full_scroll_to_sector(block_pos);
          }
        } else {
          enableScroll();

          if (current_block_next) {
            var _block_pos = offset(current_block_next).top;

            if (currentScroll >= _block_pos - viewport_height) {
              full_scroll_to_sector(_block_pos);
            }
          }
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}

function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling_full = false;

  _goto(pos, 800);

  var scr_pause = 500;

  if (navigator.appVersion.indexOf("Mac") != -1) {
    scr_pause = 1000;
  }

  ;
  setTimeout(function () {
    scrolling_full = true;
  }, scr_pause);
}

function full_scroll_pagestart() {}

function full_scroll_pageend() {} //ScrollOnClick (Navigation)


var link = document.querySelectorAll('._goto-block');

if (link) {
  var blocks = [];

  var _loop7 = function _loop7(_index26) {
    var el = link[_index26];
    var block_name = el.getAttribute('href').replace('#', '');

    if (block_name != '' && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }

    el.addEventListener('click', function (e) {
      if (document.querySelector('.menu__body._active')) {
        menu_close();
        body_lock_remove(500);
      }

      var target_block_class = el.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index26 = 0; _index26 < link.length; _index26++) {
    _loop7(_index26);
  }

  window.addEventListener('scroll', function (el) {
    var old_current_link = document.querySelectorAll('._goto-block._active');

    if (old_current_link) {
      for (var _index27 = 0; _index27 < old_current_link.length; _index27++) {
        var _el9 = old_current_link[_index27];

        _el9.classList.remove('_active');
      }
    }

    for (var _index28 = 0; _index28 < blocks.length; _index28++) {
      var block = blocks[_index28];
      var block_item = document.querySelector('.' + block);

      if (block_item) {
        var block_offset = offset(block_item).top;
        var block_height = block_item.offsetHeight;

        if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
          var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

          for (var _index29 = 0; _index29 < current_links.length; _index29++) {
            var current_link = current_links[_index29];
            current_link.classList.add('_active');
          }
        }
      }
    }
  });
} //ScrollOnClick (Simple)


var goto_links = document.querySelectorAll('._goto');

if (goto_links) {
  var _loop8 = function _loop8(_index30) {
    var goto_link = goto_links[_index30];
    goto_link.addEventListener('click', function (e) {
      var target_block_class = goto_link.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index30 = 0; _index30 < goto_links.length; _index30++) {
    _loop8(_index30);
  }
}

function _goto(target_block, speed) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var header = ''; //OffsetHeader
  //if (window.innerWidth < 992) {
  //	header = 'header';
  //}

  var options = {
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset,
    easing: 'easeOutQuad'
  };
  var scr = new SmoothScroll();
  scr.animateScroll(target_block, '', options);
} //SameFunctions


function offset(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {
    passive: false
  }); // Disable scrolling in Chrome

  window.onwheel = preventDefault; // modern standard

  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

  window.ontouchmove = preventDefault; // mobile

  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {
    passive: false
  }); // Enable scrolling in Chrome

  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
  	preventDefault(e);
  	return false;
  }*/
}

function fix_block(scr_fix_block, scr_value) {
  var window_width = parseInt(window.innerWidth);
  var window_height = parseInt(window.innerHeight);
  var header_height = parseInt(document.querySelector('header').offsetHeight) + 15;

  for (var _index31 = 0; _index31 < scr_fix_block.length; _index31++) {
    var block = scr_fix_block[_index31];
    var block_width = block.getAttribute('data-width');
    var item = block.querySelector('._side-block');

    if (!block_width) {
      block_width = 0;
    }

    if (window_width > block_width) {
      if (item.offsetHeight < window_height - (header_height + 30)) {
        if (scr_value > offset(block).top - (header_height + 15)) {
          item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
        } else {
          gotoRelative(item);
        }

        if (scr_value > block.offsetHeight + offset(block).top - (item.offsetHeight + (header_height + 15))) {
          block.style.cssText = "position:relative;";
          item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
        }
      } else {
        gotoRelative(item);
      }
    }
  }

  function gotoRelative(item) {
    item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
  }
}

if (!isMobile.any()) {//custom_scroll();

  /*
  window.addEventListener('wheel', scroll_animate, {
  	capture: true,
  	passive: true
  });
  window.addEventListener('resize', custom_scroll, {
  	capture: true,
  	passive: true
  });
  */
}

function custom_scroll(event) {
  scr_body.style.overflow = 'hidden';
  var window_height = window.innerHeight;
  var custom_scroll_line = document.querySelector('._custom-scroll__line');
  var custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
  var custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));

  if (custom_scroll_content_height > window_height) {
    if (!custom_scroll_line) {
      var _custom_scroll = document.createElement('div');

      custom_scroll_line = document.createElement('div');

      _custom_scroll.setAttribute('class', '_custom-scroll');

      custom_scroll_line.setAttribute('class', '_custom-scroll__line');

      _custom_scroll.appendChild(custom_scroll_line);

      scr_body.appendChild(_custom_scroll);
    }

    custom_scroll_line.style.height = custom_cursor_height + 'px';
  }
}

var new_pos = pageYOffset;

function scroll_animate(event) {
  var window_height = window.innerHeight;
  var content_height = document.querySelector('.wrapper').offsetHeight;
  var start_position = pageYOffset;
  var pos_add = 100;

  if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
    new_pos = new_pos - pos_add;
  } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
    new_pos = new_pos + pos_add;
  }

  if (new_pos > content_height - window_height) new_pos = content_height - window_height;
  if (new_pos < 0) new_pos = 0;

  if (scrolling) {
    scrolling = false;

    _goto(new_pos, 1000);

    var scr_pause = 100;

    if (navigator.appVersion.indexOf("Mac") != -1) {
      scr_pause = scr_pause * 2;
    }

    ;
    setTimeout(function () {
      scrolling = true;

      _goto(new_pos, 1000);
    }, scr_pause);
  } //If native scroll
  //disableScroll();

} // var swiper = new Swiper(".mySwiper", {
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });


var sliderReport = new Swiper('.report__slider', {
  /*
  effect: 'fade',
  autoplay: {
  	delay: 3000,
  	disableOnInteraction: false,
  },
  */
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: ".report .swiper-button-next",
    prevEl: ".report .swiper-button-prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: '2.7%'
    }
  },
  on: {
    lazyImageReady: function lazyImageReady() {
      ibg();
    }
  } // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},

});
var sliderTestimonial = new Swiper('.testimonials__slider', {
  /*
  effect: 'fade',
  autoplay: {
  	delay: 3000,
  	disableOnInteraction: false,
  },
  */
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev"
  },

  /*
  breakpoints: {
  	320: {
  		slidesPerView: 1,
  		spaceBetween: 0,
  		autoHeight: true,
  	},
  	768: {
  		slidesPerView: 2,
  		spaceBetween: 20,
  	},
  	992: {
  		slidesPerView: 3,
  		spaceBetween: 20,
  	},
  	1268: {
  		slidesPerView: 4,
  		spaceBetween: 30,
  	},
  },
  */
  on: {
    lazyImageReady: function lazyImageReady() {
      ibg();
    }
  } // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},

});
var sliderTeam = new Swiper('.about__slider', {
  /*
  effect: 'fade',
  autoplay: {
  	delay: 3000,
  	disableOnInteraction: false,
  },
  */
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 32,
  autoHeight: true,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  //loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  //pagination: {
  //	el: '.slider-quality__pagging',
  //	clickable: true,
  //},
  // Arrows
  navigation: {
    nextEl: ".about .swiper-button-next",
    prevEl: ".about .swiper-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  },
  on: {
    lazyImageReady: function lazyImageReady() {
      ibg();
    }
  } // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},

});
var sliderCertificate;
var sliderProductInit = false;

function sliderInit() {
  sliderCertificate = new Swiper('.certificate', {
    // observer: true,
    // observeParents: true,
    slidesPerView: 2,
    // spaceBetween: 32,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,
    // Arrows
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 11
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 11
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    },
    on: {
      lazyImageReady: function lazyImageReady() {
        ibg();
      }
    } // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},

  });
}

if (window.matchMedia("(max-width: 1279.98px)").matches) {
  sliderInit();
  sliderProductInit = true;
}

window.addEventListener('resize', function (e) {
  if (window.matchMedia("(max-width: 1280.98px)").matches && !sliderProductInit) {
    sliderInit();
    sliderProductInit = true;
  } else if (window.matchMedia("(min-width: 1279.98px)").matches && sliderProductInit) {
    sliderProductInit = false;

    for (var _i = 0; _i < sliderCertificate.length; _i++) {
      sliderCertificate[_i].destroy(true, true);
    }
  }
});