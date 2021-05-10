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
})(["position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;padding:20px;background:#122330;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3N0eWxlLmpzIl0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJzdHlsZWQiLCJIZWFkZXJMYXlvdXQiLCJGdWxsTGF5b3V0IiwiQXNpZGVBcmVhIiwiQ29udGVudEFyZWEiLCJPcGVuQXNpZGUiLCJBc2lkZU1vYmlsZSIsIkZvb3RlckxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsVUFBVSxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSxvQ0FBaEI7QUFLQSxJQUFNQyxZQUFZLEdBQUdELHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUFsQjtBQVdBLElBQU1FLFVBQVUsR0FBR0YseUVBQUg7QUFBQTtBQUFBO0FBQUEsNktBQWhCO0FBWUEsSUFBTUcsU0FBUyxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpSEFBZjtBQVlBLElBQU1JLFdBQVcsR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsNENBQWpCO0FBTUEsSUFBTUssU0FBUyxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1UUFBZjtBQXNCQSxJQUFNTSxXQUFXLEdBQUdOLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDRHQUFqQjtBQWNBLElBQU1PLFlBQVksR0FBR1Asd0VBQUg7QUFBQTtBQUFBO0FBQUEsa0RBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzMmRiZDZjYjgyZDNkNzJiYmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5MYXlvdXQgPSBzdHlsZWQubWFpbmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJMYXlvdXQgPSBzdHlsZWQuaGVhZGVyYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzE1MjkzNztcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZ1bGxMYXlvdXQgPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQXNpZGVBcmVhID0gc3R5bGVkLmFzaWRlYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMxMjIzMzA7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudEFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3BlbkFzaWRlID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA5NXB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMUMyNTM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwuMTUpO1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBc2lkZU1vYmlsZSA9IHN0eWxlZC5hc2lkZWBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzEyMjMzMDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckxheW91dCA9IHN0eWxlZC5mb290ZXJgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUyOTM3O1xyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==