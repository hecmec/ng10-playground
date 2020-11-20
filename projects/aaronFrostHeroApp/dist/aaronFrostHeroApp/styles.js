(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ":root {\n  /* RGB */\n  --highlight: rgba(255, 22, 220, 1);\n  --backcolor: rgba(73, 73, 71, 1);\n  --backcolor2: rgba(191, 192, 192, 1);\n  --header: rgba(239, 93, 96, 1);\n  --header-dark: rgba(48, 52, 63, 1);\n}\n\n.stencil {\n  font-family: \"Saira Stencil One\", cursive;\n}\n\n.bungee {\n  font-family: \"Bungee Shade\", cursive;\n}\n\nhtml,\nbody {\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n}\n\n.background-scroll-shadows {\n  background: linear-gradient(var(--backcolor2) 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), var(--backcolor2) 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)) 0 100%;\n  background: linear-gradient(var(--backcolor2) 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), var(--backcolor2) 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)) 0 100%;\n  background-repeat: no-repeat;\n  background-color: var(--backcolor2);\n  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;\n  /* Opera doesn't support this in the shorthand */\n  background-attachment: local, local, scroll, scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvQzpcXGRldlxcZ2l0XFxoZWNtZWNcXG5nMTAtcGxheWdyb3VuZFxccHJvamVjdHNcXGFhcm9uRnJvc3RIZXJvQXBwL3NyY1xcc3R5bGVzXFxfdmFycy5zY3NzIiwic3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMvQzpcXGRldlxcZ2l0XFxoZWNtZWNcXG5nMTAtcGxheWdyb3VuZFxccHJvamVjdHNcXGFhcm9uRnJvc3RIZXJvQXBwL3NyY1xcc3R5bGVzXFxzdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0FDQUY7O0FDTEE7RUFDRSx5Q0FBQTtBRFFGOztBQ05BO0VBQ0Usb0NBQUE7QURTRjs7QUNQQTs7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRFVGOztBQ1BBO0VBQ0UseVRBQzhCO0VBaUI5Qix5VEFDOEI7RUFpQjlCLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyREFBQTtFQUVBLGdEQUFBO0VBQ0EsbURBQUE7QUR6QkYiLCJmaWxlIjoic3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAvLyBodHRwczovL2Nvb2xvcnMuY28vZmYxNmRjLTQ5NDk0Ny1iZmMwYzAtZWY1ZDYwLTMwMzQzZlxyXG4gIC8qIFJHQiAqL1xyXG4gIC0taGlnaGxpZ2h0OiByZ2JhKDI1NSwgMjIsIDIyMCwgMSk7XHJcbiAgLS1iYWNrY29sb3I6IHJnYmEoNzMsIDczLCA3MSwgMSk7XHJcbiAgLS1iYWNrY29sb3IyOiByZ2JhKDE5MSwgMTkyLCAxOTIsIDEpO1xyXG4gIC0taGVhZGVyOiByZ2JhKDIzOSwgOTMsIDk2LCAxKTtcclxuICAtLWhlYWRlci1kYXJrOiByZ2JhKDQ4LCA1MiwgNjMsIDEpO1xyXG59XHJcbiIsIjpyb290IHtcbiAgLyogUkdCICovXG4gIC0taGlnaGxpZ2h0OiByZ2JhKDI1NSwgMjIsIDIyMCwgMSk7XG4gIC0tYmFja2NvbG9yOiByZ2JhKDczLCA3MywgNzEsIDEpO1xuICAtLWJhY2tjb2xvcjI6IHJnYmEoMTkxLCAxOTIsIDE5MiwgMSk7XG4gIC0taGVhZGVyOiByZ2JhKDIzOSwgOTMsIDk2LCAxKTtcbiAgLS1oZWFkZXItZGFyazogcmdiYSg0OCwgNTIsIDYzLCAxKTtcbn1cblxuLnN0ZW5jaWwge1xuICBmb250LWZhbWlseTogXCJTYWlyYSBTdGVuY2lsIE9uZVwiLCBjdXJzaXZlO1xufVxuXG4uYnVuZ2VlIHtcbiAgZm9udC1mYW1pbHk6IFwiQnVuZ2VlIFNoYWRlXCIsIGN1cnNpdmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYmFja2dyb3VuZC1zY3JvbGwtc2hhZG93cyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1iYWNrY29sb3IyKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLCBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgdmFyKC0tYmFja2NvbG9yMikgNzAlKSAwIDEwMCUsIHJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1zaWRlIGF0IDUwJSAwLCByZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkpLCByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMTAwJSwgcmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDApKSAwIDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1iYWNrY29sb3IyKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpLCBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgdmFyKC0tYmFja2NvbG9yMikgNzAlKSAwIDEwMCUsIHJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1zaWRlIGF0IDUwJSAwLCByZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkpLCByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMTAwJSwgcmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDApKSAwIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tjb2xvcjIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNDBweCwgMTAwJSA0MHB4LCAxMDAlIDE0cHgsIDEwMCUgMTRweDtcbiAgLyogT3BlcmEgZG9lc24ndCBzdXBwb3J0IHRoaXMgaW4gdGhlIHNob3J0aGFuZCAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGxvY2FsLCBsb2NhbCwgc2Nyb2xsLCBzY3JvbGw7XG59IiwiQGltcG9ydCBcIi4vdmFyc1wiO1xyXG5cclxuLnN0ZW5jaWwge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNhaXJhIFN0ZW5jaWwgT25lXCIsIGN1cnNpdmU7XHJcbn1cclxuLmJ1bmdlZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQnVuZ2VlIFNoYWRlXCIsIGN1cnNpdmU7XHJcbn1cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1zY3JvbGwtc2hhZG93cyB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgLyogU2hhZG93IGNvdmVycyAqLyBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHZhcigtLWJhY2tjb2xvcjIpIDMwJSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxyXG4gICAgKSxcclxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB2YXIoLS1iYWNrY29sb3IyKSA3MCUpIDAgMTAwJSxcclxuICAgIC8qIFNoYWRvd3MgKi9cclxuICAgICAgcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgIGZhcnRoZXN0LXNpZGUgYXQgNTAlIDAsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMClcclxuICAgICAgKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBmYXJ0aGVzdC1zaWRlIGF0IDUwJSAxMDAlLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApXHJcbiAgICAgIClcclxuICAgICAgMCAxMDAlO1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIC8qIFNoYWRvdyBjb3ZlcnMgKi8gbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICB2YXIoLS1iYWNrY29sb3IyKSAzMCUsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcclxuICAgICksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgdmFyKC0tYmFja2NvbG9yMikgNzAlKSAwIDEwMCUsXHJcbiAgICAvKiBTaGFkb3dzICovXHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChcclxuICAgICAgICBmYXJ0aGVzdC1zaWRlIGF0IDUwJSAwLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDApXHJcbiAgICAgICksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgICAgZmFydGhlc3Qtc2lkZSBhdCA1MCUgMTAwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwKVxyXG4gICAgICApXHJcbiAgICAgIDAgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tjb2xvcjIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA0MHB4LCAxMDAlIDQwcHgsIDEwMCUgMTRweCwgMTAwJSAxNHB4O1xyXG5cclxuICAvKiBPcGVyYSBkb2Vzbid0IHN1cHBvcnQgdGhpcyBpbiB0aGUgc2hvcnRoYW5kICovXHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbCwgbG9jYWwsIHNjcm9sbCwgc2Nyb2xsO1xyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!**************************************!*\
  !*** multi ./src/styles/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\git\hecmec\ng10-playground\projects\aaronFrostHeroApp\src\styles\styles.scss */"./src/styles/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map