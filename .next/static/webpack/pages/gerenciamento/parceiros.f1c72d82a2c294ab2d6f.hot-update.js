self["webpackHotUpdate_N_E"]("pages/gerenciamento/parceiros",{

/***/ "./src/styles/gerenciamento/parceiros.js":
/*!***********************************************!*\
  !*** ./src/styles/gerenciamento/parceiros.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleArea": function() { return /* binding */ TitleArea; },
/* harmony export */   "FilterArea": function() { return /* binding */ FilterArea; },
/* harmony export */   "TabArea": function() { return /* binding */ TabArea; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var TitleArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "parceiros__TitleArea",
  componentId: "sc-1oz650v-0"
})(["margin:40px 0;.breadcrumb{font-size:1.2rem;line-height:2rem;color:rgba(255,255,255,.4);a{position:relative;color:rgba(255,255,255,.8);text-decoration:none;&:before{position:absolute;bottom:-2px;left:0;content:'';width:0;height:2px;background:rgba(255,255,255,.8);transition:width .5s ease-in-out;}&:hover:before{width:100%;transition:width .5s ease-in-out;}}}h2{margin-bottom:20px;font-size:4.2rem;line-height:6rem;color:rgba(255,255,255,.8);}p{font-size:1.4rem;line-height:2rem;}"]);
var FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "parceiros__FilterArea",
  componentId: "sc-1oz650v-1"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;.orders{display:flex;justify-content:flex-start;align-items:center;.input label{display:block;font-size:1.2rem;line-height:2rem;font-weight:700;color:rgba(255,255,255,.6);}.input select{padding:10px 20px;margin-top:5px;background:transparent;border:1px solid rgba(255,255,255,.4);font-size:1.2rem;font-weight:700;color:rgba(255,255,255,.6);option{background:#0e1b25;font-size:1.2rem;font-weight:700;color:rgba(255,255,255,.6);}}}.download{display:flex;gap:20px;justify-content:flex-end;align-items:center;.export-btn{padding:10px 20px;background:#01C253;border-radius:5px;color:#fff;font-size:1.2rem;font-weight:800;cursor:pointer;svg{width:auto !important;margin-left:5px;}.svg-inline--fa{height:15px !important;}}}@media screen and (max-width:768px){display:block;.orders{margin-bottom:20px;}}"]);
var TabArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "parceiros__TabArea",
  componentId: "sc-1oz650v-2"
})(["margin:40px 0;table{width:100%;}table tr{display:grid;grid-template-columns:repeat(8,1fr);gap:20px;justify-content:center;align-items:center;height:40px;}table tr th,table tr td{font-size:1.2rem;text-align:left;}.actions{display:flex;gap:10px;.ico-action{position:relative;cursor:pointer;svg{width:auto !important;height:13px;}.tooltip{position:absolute;top:-25px;left:0;padding:5px 15px;content:'';background:#fff;border-radius:15px;color:#212121;display:none;}&:hover .tooltip{display:block;}}}@media screen and (max-width:768px){table tr{display:block;height:auto;padding:20px;}table,thead,tbody,th,td,tr{display:block;}thead tr{position:absolute;top:-9999px;left:-9999px;}td{border:none;position:relative;padding-left:50%;height:30px;line-height:3rem;}td:before{position:absolute;top:0;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:bold;}td:nth-of-type(1):before{content:\"Nome do Parceiro\";}td:nth-of-type(2):before{content:\"Oferta\";}td:nth-of-type(3):before{content:\"Receita\";}td:nth-of-type(4):before{content:\"Pedidos\";}td:nth-of-type(5):before{content:\"Comiss\xE3o\";}td:nth-of-type(6):before{content:\"Status\";}td:nth-of-type(7):before{content:\"A\xE7\xF5es\";}}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nZXJlbmNpYW1lbnRvL3BhcmNlaXJvcy5qcyJdLCJuYW1lcyI6WyJUaXRsZUFyZWEiLCJzdHlsZWQiLCJGaWx0ZXJBcmVhIiwiVGFiQXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsd2VBQWY7QUFtREEsSUFBTUMsVUFBVSxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3M0JBQWhCO0FBZ0ZBLElBQU1FLE9BQU8sR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsMnJDQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dlcmVuY2lhbWVudG8vcGFyY2Vpcm9zLmYxYzcyZDgyYTJjMjk0YWIyZDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuXHJcbiAgICAuYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbHRlckFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAub3JkZXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuaW5wdXQgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0IHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGUxYjI1O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG93bmxvYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmV4cG9ydC1idG4ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDFDMjUzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdmctaW5saW5lLS1mYSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAub3JkZXJzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBUYWJBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LDFmcik7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRyIHRoLCB0YWJsZSB0ciB0ZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgIC5pY28tYWN0aW9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50b29sdGlwIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIgLnRvb2x0aXAge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB0YWJsZSB0ciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHsgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoZWFkIHRyIHsgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtOTk5OXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOTk5OXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZDpiZWZvcmUgeyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTsgXHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IFxyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiTm9tZSBkbyBQYXJjZWlyb1wiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHsgY29udGVudDogXCJPZmVydGFcIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiUmVjZWl0YVwiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoNCk6YmVmb3JlIHsgY29udGVudDogXCJQZWRpZG9zXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSg1KTpiZWZvcmUgeyBjb250ZW50OiBcIkNvbWlzc8Ojb1wiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoNik6YmVmb3JlIHsgY29udGVudDogXCJTdGF0dXNcIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDcpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQcOnw7Vlc1wiOyB9XHJcbiAgICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9