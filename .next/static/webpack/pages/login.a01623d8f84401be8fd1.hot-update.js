self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/styles/style.js":
/*!*****************************!*\
  !*** ./src/styles/style.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleArea": function() { return /* binding */ TitleArea; },
/* harmony export */   "OverviewArea": function() { return /* binding */ OverviewArea; },
/* harmony export */   "DoubleBox": function() { return /* binding */ DoubleBox; },
/* harmony export */   "LoginBox": function() { return /* binding */ LoginBox; }
/* harmony export */ });
/* harmony import */ var C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject4() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    min-height: 100vh;\n\n    background: #0e1b25;\n\n    .login-form {\n        width: 385px;\n        max-width: 385px;\n        padding: 40px;\n        margin: 40px 0;\n\n        background: #152937;\n        border-radius: 5px;\n        border: 1px solid rgba(255,255,255,.05);\n\n        h1 {\n            margin-bottom: 20px;\n\n            font-size: 2.4rem;\n            font-weight: 700;\n            line-height: 3.2rem;\n            text-align: center;\n        }\n\n        label {\n            display: block;\n\n            font-size: 1.2rem;\n            font-weight: 700;\n            line-height: 2rem;\n            letter-spacing: .025rem;\n            text-transform: uppercase;\n            color: rgba(255,255,255,.6)\n        }\n\n        input {\n            width: 100%;\n            height: 40px;\n            padding: 20px;\n            margin: 5px 0 10px;\n\n            background: rgba(14, 27, 37, .3);\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: auto;\n\n    .boxOne, .boxTwo {\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n\n        background: #152937;\n        border-radius: 5px;\n\n        .title {\n            display: block;\n            margin-bottom: 5px;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 1.4rem;\n            line-height: 2rem;\n            font-weight: 700;\n            letter-spacing: .15rem;\n            text-transform: uppercase;\n        }\n\n        .description {\n            display: block;\n            margin-bottom: 40px;\n            \n            color: rgba(255, 255, 255, .8);\n            font-size: 1.2rem;\n            line-height: 1.8rem;\n            letter-spacing: .15rem;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 150px;\n    margin-bottom: 20px;\n\n    .boxOne {\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n\n        background: #2EC76E;\n        border-radius: 5px;\n\n        .title {\n            display: block;\n            margin-bottom: 20px;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 1.2rem;\n            line-height: 1.8rem;\n            font-weight: 700;\n            letter-spacing: .15rem;\n            text-transform: uppercase;\n        }\n\n        .value {\n            display: block;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 2.8rem;\n            line-height: 3.2rem;\n            font-weight: 700;\n            text-transform: uppercase;\n        }\n    }\n\n    .boxTwo {\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n\n        background: #01C253;\n        border-radius: 5px;\n\n        .title {\n            display: block;\n            margin-bottom: 20px;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 1.2rem;\n            line-height: 1.8rem;\n            font-weight: 700;\n            letter-spacing: .15rem;\n            text-transform: uppercase;\n        }\n\n        .value {\n            display: block;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 2.8rem;\n            line-height: 3.2rem;\n            font-weight: 700;\n            text-transform: uppercase;\n        }\n    }\n\n    .boxThree {\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n\n        background: #03A346;\n        border-radius: 5px;\n\n        .title {\n            display: block;\n            margin-bottom: 20px;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 1.2rem;\n            line-height: 1.8rem;\n            font-weight: 700;\n            letter-spacing: .15rem;\n            text-transform: uppercase;\n        }\n\n        .value {\n            display: block;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 2.8rem;\n            line-height: 3.2rem;\n            font-weight: 700;\n            text-transform: uppercase;\n        }\n    }\n\n    .boxFour {\n        width: 100%;\n        height: 100%;\n        padding: 20px;\n\n        background: #086930;\n        border-radius: 5px;\n\n        .title {\n            display: block;\n            margin-bottom: 20px;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 1.2rem;\n            line-height: 1.8rem;\n            font-weight: 700;\n            letter-spacing: .15rem;\n            text-transform: uppercase;\n        }\n\n        .value {\n            display: block;\n            \n            color: rgba(255, 255, 255, 1);\n            font-size: 2.8rem;\n            line-height: 3.2rem;\n            font-weight: 700;\n            text-transform: uppercase;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    margin: 40px 0;\n\n    h2 {\n        font-size: 4.2rem;\n        line-height: 6rem;\n        color: rgba(255,255,255,.8);\n    }\n\n    span {\n        display: block;\n\n        font-size: 1.4rem;\n        line-height: 2rem;\n        letter-spacing: .05rem;\n        color: rgba(255,255,255,.8);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TitleArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject());
var OverviewArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2());
var DoubleBox = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3());
var LoginBox = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.main(_templateObject4());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9zdHlsZS5qcyJdLCJuYW1lcyI6WyJUaXRsZUFyZWEiLCJzdHlsZWQiLCJPdmVydmlld0FyZWEiLCJEb3VibGVCb3giLCJMb2dpbkJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQywwREFBSCxtQkFBZjtBQW1CQSxJQUFNQyxZQUFZLEdBQUdELDBEQUFILG9CQUFsQjtBQXVJQSxJQUFNRSxTQUFTLEdBQUdGLDBEQUFILG9CQUFmO0FBeUNBLElBQU1HLFFBQVEsR0FBR0gsMkRBQUgsb0JBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYTAxNjIzZDhmODQ0MDFiZThmZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDQuMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNnJlbTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMDVyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcnZpZXdBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuYm94T25lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJFQzc2RTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjE1cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3hUd28ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDFDMjUzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMTVyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJveFRocmVlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAzQTM0NjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjE1cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3hGb3VyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzA4NjkzMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjE1cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRG91YmxlQm94ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAuYm94T25lLCAuYm94VHdvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE1MjkzNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjE1cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjE1cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luQm94ID0gc3R5bGVkLm1haW5gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzBlMWIyNTtcclxuXHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDM4NXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMzg1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBtYXJnaW46IDQwcHggMDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE1MjkzNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMDUpO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wMjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwIDEwcHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAyNywgMzcsIC4zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9