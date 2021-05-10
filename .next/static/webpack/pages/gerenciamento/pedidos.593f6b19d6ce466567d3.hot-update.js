self["webpackHotUpdate_N_E"]("pages/gerenciamento/pedidos",{

/***/ "./src/styles/gerenciamento/pedidos.js":
/*!*********************************************!*\
  !*** ./src/styles/gerenciamento/pedidos.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleArea": function() { return /* binding */ TitleArea; },
/* harmony export */   "FilterArea": function() { return /* binding */ FilterArea; },
/* harmony export */   "TabArea": function() { return /* binding */ TabArea; }
/* harmony export */ });
/* harmony import */ var C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject3() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    margin: 40px 0;\n\n    table {\n        width: 100%;\n    }\n\n    table tr {\n        display: grid;\n        grid-template-columns: repeat(8, 1fr);\n        gap: 20px;\n        justify-content: center;\n        align-items: center;\n        height: 40px;\n    }\n\n    table tbody tr {\n        &:hover {\n            background: rgba(255, 255, 255, 0.05);\n\n            cursor: pointer;\n        }\n    }\n\n    table tr th, table tr td {\n        font-size: 1.2rem;\n        text-align: left;\n    }\n\n    @media screen and (max-width: 768px) {\n        overflow-x: scroll;\n\n        table tr th, table tr th {\n            min-width: 150px;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: auto;\n\n    .filters {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n\n        .input:first-child {\n            margin-right: 10px;\n        }\n\n        .input:last-child {\n            margin-left: 10px;\n        }\n\n        .input label {\n            display: block;\n\n            font-size: 1.2rem;\n            line-height: 2rem;\n            font-weight: 700;\n            color: rgba(255,255,255,.6);\n        }\n\n        .input select {\n            padding: 10px 20px;\n            margin-top: 5px;\n\n            background: transparent;\n            border: 1px solid rgba(255,255,255,.4);\n\n            font-size: 1.2rem;\n            font-weight: 700;\n            color: rgba(255,255,255,.6);\n\n            option {\n                background: #0e1b25;\n\n                font-size: 1.2rem;\n                font-weight: 700;\n                color: rgba(255,255,255,.6);\n            }\n        }\n    }\n\n    .download {\n        svg {\n            width: auto !important;\n\n            cursor: pointer;\n        }\n\n        .svg-inline--fa {\n            height: 15px !important;\n        }\n    }\n"]);

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
var FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nZXJlbmNpYW1lbnRvL3BlZGlkb3MuanMiXSwibmFtZXMiOlsiVGl0bGVBcmVhIiwic3R5bGVkIiwiRmlsdGVyQXJlYSIsIlRhYkFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLDBEQUFILG1CQUFmO0FBNENBLElBQU1DLFVBQVUsR0FBR0QsMERBQUgsb0JBQWhCO0FBK0RBLElBQU1FLE9BQU8sR0FBR0YsMERBQUgsb0JBQWIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2VyZW5jaWFtZW50by9wZWRpZG9zLjU5M2Y2YjE5ZDZjZTQ2NjU2N2QzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuXHJcbiAgICAuYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbHRlckFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAuZmlsdGVycyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmlucHV0OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dCBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTFiMjU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kb3dubG9hZCB7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdmctaW5saW5lLS1mYSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYkFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRib2R5IHRyIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdHIgdGgsIHRhYmxlIHRyIHRkIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG5cclxuICAgICAgICB0YWJsZSB0ciB0aCwgdGFibGUgdHIgdGgge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=