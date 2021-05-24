self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    /* poppins-regular - latin */\n    @font-face {\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: local(''),\n        url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url('../fonts/poppins-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n\n    /* poppins-italic - latin */\n    @font-face {\n    font-family: 'Poppins';\n    font-style: italic;\n    font-weight: 400;\n    font-display: swap;\n    src: local(''),\n        url('../fonts/poppins-v15-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url('../fonts/poppins-v15-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n\n    /* poppins-800 - latin */\n    @font-face {\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 800;\n    font-display: swap;\n    src: local(''),\n        url('../fonts/poppins-v15-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url('../fonts/poppins-v15-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n\n    /* poppins-800italic - latin */\n    @font-face {\n    font-family: 'Poppins';\n    font-style: italic;\n    font-weight: 800;\n    font-display: swap;\n    src: local(''),\n        url('./fonts/poppins-v15-latin-800italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n        url('./fonts/poppins-v15-latin-800italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n    }\n\n\t// Alterar estilos conforme desejado\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    html, body {\n        font-size: 10px;\n        line-height: 10px;\n        font-family: 'Poppins';\n        color: rgba(255, 255, 255, 0.85);\n\n        background: #0e1b25;\n\n        overflow-x: hidden;\n    }\n\n    html, body, #__next {\n        height: 100%;\n    }\n\n    .success {\n        padding: 5px 15px;\n\n        background: #01C253;\n        border-radius: 15px;\n\n        color: #fff;\n        font-weight: 700;\n    }\n\n    .error {\n        padding: 5px 15px;\n\n        background: #C22115;\n        border-radius: 15px;\n\n        color: #fff;\n        font-weight: 700;\n    }\n\n    .att {\n        padding: 5px 15px;\n\n        background: #C2A30C;\n        border-radius: 15px;\n\n        color: #fff;\n        font-weight: 700;\n    }\n\n    .obs {\n        padding: 5px 15px;\n\n        background: #1C15C2;\n        border-radius: 15px;\n\n        color: #fff;\n        font-weight: 700;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWwuanMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxvRUFBSCxtQkFBakI7QUE4R0EsK0RBQWVELFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NDVhMmVlYTE2ZGUyYzU4Y2FkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAvKiBwb3BwaW5zLXJlZ3VsYXIgLSBsYXRpbiAqL1xyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgIHNyYzogbG9jYWwoJycpLFxyXG4gICAgICAgIHVybCgnLi4vZm9udHMvcG9wcGlucy12MTUtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgLyogQ2hyb21lIDI2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KyAqL1xyXG4gICAgICAgIHVybCgnLi4vZm9udHMvcG9wcGlucy12MTUtbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7IC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiBwb3BwaW5zLWl0YWxpYyAtIGxhdGluICovXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiBsb2NhbCgnJyksXHJcbiAgICAgICAgdXJsKCcuLi9mb250cy9wb3BwaW5zLXYxNS1sYXRpbi1pdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIENocm9tZSAyNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSsgKi9cclxuICAgICAgICB1cmwoJy4uL2ZvbnRzL3BvcHBpbnMtdjE1LWxhdGluLWl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7IC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiBwb3BwaW5zLTgwMCAtIGxhdGluICovXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiBsb2NhbCgnJyksXHJcbiAgICAgICAgdXJsKCcuLi9mb250cy9wb3BwaW5zLXYxNS1sYXRpbi04MDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIENocm9tZSAyNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSsgKi9cclxuICAgICAgICB1cmwoJy4uL2ZvbnRzL3BvcHBpbnMtdjE1LWxhdGluLTgwMC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7IC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiBwb3BwaW5zLTgwMGl0YWxpYyAtIGxhdGluICovXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgc3JjOiBsb2NhbCgnJyksXHJcbiAgICAgICAgdXJsKCcuL2ZvbnRzL3BvcHBpbnMtdjE1LWxhdGluLTgwMGl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgLyogQ2hyb21lIDI2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KyAqL1xyXG4gICAgICAgIHVybCgnLi9mb250cy9wb3BwaW5zLXYxNS1sYXRpbi04MDBpdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpOyAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXHJcbiAgICB9XHJcblxyXG5cdC8vIEFsdGVyYXIgZXN0aWxvcyBjb25mb3JtZSBkZXNlamFkb1xyXG4gICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMGUxYjI1O1xyXG5cclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWNjZXNzIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAxQzI1MztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDMjIxMTU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICAuYXR0IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogI0MyQTMwQztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5vYnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMUMxNUMyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==