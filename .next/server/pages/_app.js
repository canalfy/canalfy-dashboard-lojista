(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
;// CONCATENATED MODULE: ./src/styles/global.js

const GlobalStyle = external_styled_components_.createGlobalStyle`
    /* poppins-regular - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/poppins-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* poppins-italic - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/poppins-v15-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* poppins-800 - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('../fonts/poppins-v15-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/poppins-v15-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* poppins-800italic - latin */
    @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('./fonts/poppins-v15-latin-800italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./fonts/poppins-v15-latin-800italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

	// Alterar estilos conforme desejado
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
        font-size: 10px;
        line-height: 10px;
        font-family: 'Poppins';
        color: rgba(255, 255, 255, 0.85);

        background: #0e1b25;

        overflow-x: hidden;
    }

    html, body, #__next {
        height: 100%;
    }

    .success {
        padding: 5px 15px;

        background: #01C253;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }

    .error {
        padding: 5px 15px;

        background: #C22115;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }

    .att {
        padding: 5px 15px;

        background: #C2A30C;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }

    .obs {
        padding: 5px 15px;

        background: #1C15C2;
        border-radius: 15px;

        color: #fff;
        font-weight: 700;
    }
`;
/* harmony default export */ var global = (GlobalStyle);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");;
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







fontawesome_svg_core_namespaceObject.config.autoAddCss = false;
router_default().events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  external_nprogress_default().start();
});
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done());

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Dashboard Canalfy"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/nprogress.css"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(global, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7224));
module.exports = __webpack_exports__;

})();