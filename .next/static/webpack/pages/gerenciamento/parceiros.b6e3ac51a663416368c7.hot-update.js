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
})(["margin:40px 0;table{width:100%;}table tr{display:grid;grid-template-columns:repeat(7,1fr);gap:20px;justify-content:center;align-items:center;height:40px;}table tbody tr{&:hover{background:rgba(255,255,255,0.05);cursor:pointer;}}table tr th,table tr td{font-size:1.2rem;text-align:left;}.actions{position:relative;.options{position:absolute;top:20px;left:0;padding:20px;background:#152937;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.15);z-index:20;li{list-style:none;}a{font-size:1.2rem;line-height:3rem;color:rgba(255,255,255,0.8);text-decoration:none;&:hover{text-decoration:underline;}}}}@media screen and (max-width:768px){table tr{display:block;height:auto;padding:20px;}table,thead,tbody,th,td,tr{display:block;}thead tr{position:absolute;top:-9999px;left:-9999px;}td{border:none;position:relative;padding-left:50%;height:30px;line-height:3rem;}td:before{position:absolute;top:0;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:bold;}td:nth-of-type(1):before{content:\"Nome do Parceiro\";}td:nth-of-type(2):before{content:\"Oferta\";}td:nth-of-type(3):before{content:\"Receita\";}td:nth-of-type(4):before{content:\"Pedidos\";}td:nth-of-type(5):before{content:\"Comiss\xE3o\";}td:nth-of-type(6):before{content:\"Status\";}td:nth-of-type(7):before{content:\"A\xE7\xF5es\";}}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nZXJlbmNpYW1lbnRvL3BhcmNlaXJvcy5qcyJdLCJuYW1lcyI6WyJUaXRsZUFyZWEiLCJzdHlsZWQiLCJGaWx0ZXJBcmVhIiwiVGFiQXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsd2VBQWY7QUFtREEsSUFBTUMsVUFBVSxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3M0JBQWhCO0FBZ0ZBLElBQU1FLE9BQU8sR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsK3hDQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dlcmVuY2lhbWVudG8vcGFyY2Vpcm9zLmI2ZTNhYzUxYTY2MzQxNjM2OGM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuXHJcbiAgICAuYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEZpbHRlckFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAub3JkZXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuaW5wdXQgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0IHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMGUxYjI1O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG93bmxvYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAuZXhwb3J0LWJ0biB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMUMyNTM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN2Zy1pbmxpbmUtLWZhIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIC5vcmRlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYkFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsMWZyKTtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdGJvZHkgdHIge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ciB0aCwgdGFibGUgdHIgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNTI5Mzc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwuMTUpO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogMjA7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgdGFibGUgdHIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7IFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGVhZCB0ciB7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTk5OTlweDtcclxuICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQ6YmVmb3JlIHsgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7IFxyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUgeyBjb250ZW50OiBcIk5vbWUgZG8gUGFyY2Vpcm9cIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiT2ZlcnRhXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUgeyBjb250ZW50OiBcIlJlY2VpdGFcIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDQpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiUGVkaWRvc1wiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoNSk6YmVmb3JlIHsgY29udGVudDogXCJDb21pc3PDo29cIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDYpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiU3RhdHVzXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSg3KTpiZWZvcmUgeyBjb250ZW50OiBcIkHDp8O1ZXNcIjsgfVxyXG4gICAgfVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==