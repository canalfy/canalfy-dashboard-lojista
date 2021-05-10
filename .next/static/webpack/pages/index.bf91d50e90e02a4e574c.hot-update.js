self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layout/style.js":
/*!****************************************!*\
  !*** ./src/components/layout/style.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayout": function() { return /* binding */ MainLayout; },
/* harmony export */   "HeaderLayout": function() { return /* binding */ HeaderLayout; },
/* harmony export */   "FullLayout": function() { return /* binding */ FullLayout; },
/* harmony export */   "AsideArea": function() { return /* binding */ AsideArea; },
/* harmony export */   "ContentArea": function() { return /* binding */ ContentArea; },
/* harmony export */   "OpenAside": function() { return /* binding */ OpenAside; },
/* harmony export */   "AsideMobile": function() { return /* binding */ AsideMobile; },
/* harmony export */   "FooterLayout": function() { return /* binding */ FooterLayout; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.main.withConfig({
  displayName: "style__MainLayout",
  componentId: "sc-5i31n1-0"
})(["width:100%;min-height:100vh;"]);
var HeaderLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.header.withConfig({
  displayName: "style__HeaderLayout",
  componentId: "sc-5i31n1-1"
})(["width:100%;height:80px;background:#152937;@media screen and (max-width:520px){height:auto;}"]);
var FullLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "style__FullLayout",
  componentId: "sc-5i31n1-2"
})(["display:grid;grid-template-columns:1fr 4fr;gap:30px;justify-content:flex-start;align-items:flex-start;@media screen and (max-width:768px){grid-template-columns:1fr;}"]);
var AsideArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.aside.withConfig({
  displayName: "style__AsideArea",
  componentId: "sc-5i31n1-3"
})(["width:100%;height:100%;padding:20px;background:#122330;@media screen and (max-width:768px){display:none;}"]);
var ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "style__ContentArea",
  componentId: "sc-5i31n1-4"
})(["width:100%;height:100%;padding:20px;"]);
var OpenAside = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "style__OpenAside",
  componentId: "sc-5i31n1-5"
})(["display:none;@media screen and (max-width:768px){position:fixed;top:95px;left:0;display:flex;justify-content:center;align-items:center;width:40px;height:40px;background:#01C253;border-radius:0 5px 5px 0;box-shadow:0 0 10px rgba(0,0,0,.15);font-size:2rem;}"]);
var AsideMobile = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.aside.withConfig({
  displayName: "style__AsideMobile",
  componentId: "sc-5i31n1-6"
})(["position:fixed;top:0;right:0;bottom:0;left:0;width:100%;min-height:100%;padding:20px;background:#122330;text-align:right;z-index:15;"]);
var FooterLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.footer.withConfig({
  displayName: "style__FooterLayout",
  componentId: "sc-5i31n1-7"
})(["width:100%;height:80px;background:#152937;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3N0eWxlLmpzIl0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJzdHlsZWQiLCJIZWFkZXJMYXlvdXQiLCJGdWxsTGF5b3V0IiwiQXNpZGVBcmVhIiwiQ29udGVudEFyZWEiLCJPcGVuQXNpZGUiLCJBc2lkZU1vYmlsZSIsIkZvb3RlckxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsVUFBVSxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSxvQ0FBaEI7QUFLQSxJQUFNQyxZQUFZLEdBQUdELHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUFsQjtBQVdBLElBQU1FLFVBQVUsR0FBR0YseUVBQUg7QUFBQTtBQUFBO0FBQUEsNktBQWhCO0FBWUEsSUFBTUcsU0FBUyxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpSEFBZjtBQVlBLElBQU1JLFdBQVcsR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsNENBQWpCO0FBTUEsSUFBTUssU0FBUyxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1UUFBZjtBQXNCQSxJQUFNTSxXQUFXLEdBQUdOLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDRJQUFqQjtBQWtCQSxJQUFNTyxZQUFZLEdBQUdQLHdFQUFIO0FBQUE7QUFBQTtBQUFBLGtEQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZjkxZDUwZTkwZTAyYTRlNTc0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTGF5b3V0ID0gc3R5bGVkLm1haW5gXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTGF5b3V0ID0gc3R5bGVkLmhlYWRlcmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMxNTI5Mzc7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGdWxsTGF5b3V0ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEFzaWRlQXJlYSA9IHN0eWxlZC5hc2lkZWBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMTIyMzMwO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbnRBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE9wZW5Bc2lkZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogOTVweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDFDMjUzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQXNpZGVNb2JpbGUgPSBzdHlsZWQuYXNpZGVgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMTIyMzMwO1xyXG5cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAgIHotaW5kZXg6IDE1O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTGF5b3V0ID0gc3R5bGVkLmZvb3RlcmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMxNTI5Mzc7XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9