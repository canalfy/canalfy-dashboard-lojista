self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/topbar/style.js":
/*!****************************************!*\
  !*** ./src/components/topbar/style.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarArea": function() { return /* binding */ BarArea; },
/* harmony export */   "LogoArea": function() { return /* binding */ LogoArea; },
/* harmony export */   "UserArea": function() { return /* binding */ UserArea; },
/* harmony export */   "MessageMenu": function() { return /* binding */ MessageMenu; },
/* harmony export */   "UserMenu": function() { return /* binding */ UserMenu; }
/* harmony export */ });
/* harmony import */ var C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject5() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    margin-left: 10px;\n\n    background: #01C253;\n    border-radius: 5px;\n\n    svg {\n        width: auto !important;\n    }\n\n    .svg-inline--fa {\n        height: 15px !important;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    margin-right: 10px;\n\n    svg {\n        width: auto !important;\n    }\n\n    .svg-inline--fa {\n        height: 15px !important;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    button {\n        width: 25px;\n        height: 25px;\n        padding: 0;\n        margin: 0;\n\n        background: #01C253;\n        border: none;\n        border-radius: 5px;\n\n        appearance: none;\n        -o-appearance: none;\n        -moz-appearance: none;\n        -webkit-appearance: none;\n    }\n\n    img {\n        cursor: pointer;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 80px;\n    padding: 0 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BarArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject());
var LogoArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2());
var UserArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3());
var MessageMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject4());
var UserMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyL3N0eWxlLmpzIl0sIm5hbWVzIjpbIkJhckFyZWEiLCJzdHlsZWQiLCJMb2dvQXJlYSIsIlVzZXJBcmVhIiwiTWVzc2FnZU1lbnUiLCJVc2VyTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLDBEQUFILG1CQUFiO0FBU0EsSUFBTUMsUUFBUSxHQUFHRCwwREFBSCxvQkFBZDtBQTBCQSxJQUFNRSxRQUFRLEdBQUdGLDBEQUFILG9CQUFkO0FBTUEsSUFBTUcsV0FBVyxHQUFHSCwwREFBSCxvQkFBakI7QUFZQSxJQUFNSSxRQUFRLEdBQUdKLDBEQUFILG9CQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiYjFkZjBkNTU2ZTJiNzE2MWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhckFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ29BcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDFDMjUzO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZU1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ZnLWlubGluZS0tZmEge1xyXG4gICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVXNlck1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzAxQzI1MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN2Zy1pbmxpbmUtLWZhIHtcclxuICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuYFxyXG4iXSwic291cmNlUm9vdCI6IiJ9