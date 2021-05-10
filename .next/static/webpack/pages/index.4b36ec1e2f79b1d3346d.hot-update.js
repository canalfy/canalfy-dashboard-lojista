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
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    position: relative;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    margin-left: 10px;\n\n    background: #01C253;\n    border-radius: 5px;\n\n    button {\n        width: 40px;\n        height: 40px;\n        padding: 0;\n        margin: 0;\n\n        background: transparent;\n        border: none;\n\n        appearance: none;\n        -o-appearance: none;\n        -moz-appearance: none;\n        -webkit-appearance: none;\n        cursor: pointer;\n\n        color: #fff;\n    }\n\n    svg {\n        width: auto !important;\n    }\n\n    .svg-inline--fa {\n        height: 15px !important;\n    }\n\n    .submenu {\n        position: absolute;\n        top: 60px;\n        right: 0;\n        \n        display: flex;\n        justify-content: center;\n        align-items: flex-end;\n        flex-direction: column;\n        max-width: 200px;\n        width: 200px;\n        height: auto;\n        padding: 20px;\n\n        background: #152937;\n        border-radius: 0 0 5px 5px;\n\n        li {\n            margin: 10px 0;\n\n            list-style: none;\n            \n            font-size: 1.2rem;\n            line-height: 2rem;\n\n            a {\n                color: rgba(255,255,255,.8);\n                text-decoration: none;\n            }\n        }\n    }\n\n    @media screen and (max-width: 520px) {\n        .submenu {\n            left: 0;\n            max-width: 100%;\n            width: 100%;\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    margin-right: 10px;\n\n    cursor: pointer;\n\n    svg {\n        width: auto !important;\n    }\n\n    .svg-inline--fa {\n        height: 15px !important;\n    }\n"]);

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
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    img {\n        cursor: pointer;\n    }\n\n    @media screen and (max-width: 520px) {\n        margin-bottom: 20px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 80px;\n    padding: 0 20px;\n\n    @media screen and (max-width: 520px) {\n        flex-direction: column;\n        height: auto;\n        padding: 20px;\n    }\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyL3N0eWxlLmpzIl0sIm5hbWVzIjpbIkJhckFyZWEiLCJzdHlsZWQiLCJMb2dvQXJlYSIsIlVzZXJBcmVhIiwiTWVzc2FnZU1lbnUiLCJVc2VyTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLDBEQUFILG1CQUFiO0FBZUEsSUFBTUMsUUFBUSxHQUFHRCwwREFBSCxvQkFBZDtBQWNBLElBQU1FLFFBQVEsR0FBR0YsMERBQUgsb0JBQWQ7QUFNQSxJQUFNRyxXQUFXLEdBQUdILDBEQUFILG9CQUFqQjtBQWNBLElBQU1JLFFBQVEsR0FBR0osMERBQUgsb0JBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGIzNmVjMWUyZjc5YjFkMzM0NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQmFyQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExvZ29BcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VNZW51ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdmctaW5saW5lLS1mYSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzAxQzI1MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC1vLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ZnLWlubGluZS0tZmEge1xyXG4gICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJtZW51IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNTI5Mzc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAuc3VibWVudSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=