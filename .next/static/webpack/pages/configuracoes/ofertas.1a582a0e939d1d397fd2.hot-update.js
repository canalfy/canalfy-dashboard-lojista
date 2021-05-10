self["webpackHotUpdate_N_E"]("pages/configuracoes/ofertas",{

/***/ "./src/styles/configuracoes/ofertas.js":
/*!*********************************************!*\
  !*** ./src/styles/configuracoes/ofertas.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleArea": function() { return /* binding */ TitleArea; },
/* harmony export */   "Content": function() { return /* binding */ Content; },
/* harmony export */   "TabArea": function() { return /* binding */ TabArea; }
/* harmony export */ });
/* harmony import */ var C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject3() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    margin: 40px 0;\n\n    table {\n        width: 100%;\n    }\n\n    table tr {\n        display: grid;\n        grid-template-columns: repeat(7,1fr);\n        gap: 20px;\n        justify-content: center;\n        align-items: center;\n        height: 40px;\n    }\n\n    table tbody tr {\n        &:hover {\n            background: rgba(255, 255, 255, 0.05);\n\n            cursor: pointer;\n        }\n    }\n\n    table tr th, table tr td {\n        font-size: 1.2rem;\n        text-align: left;\n    }\n\n    @media screen and (max-width: 768px) {\n        overflow-x: scroll;\n        min-width: 100vh;\n\n        table {\n            min-width: 100%;\n        }\n\n        table tr th, table tr th {\n            min-width: 150px;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    form {\n        display: grid;\n        gap: 20px;\n        grid-template-columns: repeat(7, 1fr);\n        justify-content: center;\n        align-items: flex-end;\n\n        .input {\n            label {\n                display: block;\n\n                font-size: 1.2rem;\n                line-height: 2rem;\n                font-weight: 700;\n                color: rgba(255,255,255,.6);\n            }\n\n            input[type=\"text\"], input[type=\"email\"], input[type=\"tel\"] {\n                width: 100%;\n                height: 40px;\n                padding: 10px 20px;\n                margin-top: 5px;\n\n                background: transparent;\n                border-radius: 5px;\n                border: 1px solid rgba(255,255,255,.4);\n\n                font-size: 1.2rem;\n                font-weight: 700;\n                color: rgba(255,255,255,.6);\n            }\n\n            select {\n                width: 100%;\n                height: 40px;\n                padding: 10px 20px;\n                margin-top: 5px;\n\n                background: transparent;\n                border-radius: 5px;\n                border: 1px solid rgba(255,255,255,.4);\n\n                font-size: 1.2rem;\n                font-weight: 700;\n                color: rgba(255,255,255,.6);\n\n                option {\n                    background: #0e1b25;\n\n                    font-size: 1.2rem;\n                    font-weight: 700;\n                    color: rgba(255,255,255,.6);\n                }\n            }\n\n            button {\n                width: 100%;\n                height: 40px;\n\n                background: #01C253;\n                border-radius: 5px;\n                border: none;\n\n                appearance: none;\n                cursor: pointer;\n\n                font-size: 1.4rem;\n                font-weight: 700;\n                color: rgba(255,255,255,.8);\n            }\n        }\n    }\n\n    @media screen and (max-width: 768px) {\n        form {\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    margin: 40px 0;\n\n    .breadcrumb {\n        font-size: 1.2rem;\n        line-height: 2rem;\n        color: rgba(255,255,255,.4);\n\n        a {\n            position: relative;\n\n            color: rgba(255,255,255,.8);\n            text-decoration: none;\n\n            &:before {\n                position: absolute;\n                bottom: -2px;\n                left: 0;\n\n                content: '';\n\n                width: 0;\n                height: 2px;\n\n                background: rgba(255,255,255,.8);\n\n                transition: width .5s ease-in-out;\n            }\n\n            &:hover:before {\n                width: 100%;\n\n                transition: width .5s ease-in-out;\n            }\n        }\n    }\n\n    h2 {\n        font-size: 4.2rem;\n        line-height: 6rem;\n        color: rgba(255,255,255,.8);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TitleArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2());
var TabArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb25maWd1cmFjb2VzL29mZXJ0YXMuanMiXSwibmFtZXMiOlsiVGl0bGVBcmVhIiwic3R5bGVkIiwiQ29udGVudCIsIlRhYkFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLDBEQUFILG1CQUFmO0FBNENBLElBQU1DLE9BQU8sR0FBR0QsMERBQUgsb0JBQWI7QUFpRkEsSUFBTUUsT0FBTyxHQUFHRiwwREFBSCxvQkFBYiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb25maWd1cmFjb2VzL29mZXJ0YXMuMWE1ODJhMGU5MzlkMWQzOTdmZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgIC5icmVhZGNydW1iIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDZyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJ0ZWxcIl0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTFiMjU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxQzI1MztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYkFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsMWZyKTtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdGJvZHkgdHIge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ciB0aCwgdGFibGUgdHIgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDB2aDtcclxuXHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsZSB0ciB0aCwgdGFibGUgdHIgdGgge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=