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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var TitleArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "pedidos__TitleArea",
  componentId: "pniv90-0"
})(["margin:40px 0;.breadcrumb{font-size:1.2rem;line-height:2rem;color:rgba(255,255,255,.4);a{position:relative;color:rgba(255,255,255,.8);text-decoration:none;&:before{position:absolute;bottom:-2px;left:0;content:'';width:0;height:2px;background:rgba(255,255,255,.8);transition:width .5s ease-in-out;}&:hover:before{width:100%;transition:width .5s ease-in-out;}}}h2{font-size:4.2rem;line-height:6rem;color:rgba(255,255,255,.8);}"]);
var FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "pedidos__FilterArea",
  componentId: "pniv90-1"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;.orders{display:flex;justify-content:flex-start;align-items:center;.input label{display:block;font-size:1.2rem;line-height:2rem;font-weight:700;color:rgba(255,255,255,.6);}.input select{padding:10px 20px;margin-top:5px;background:transparent;border:1px solid rgba(255,255,255,.4);font-size:1.2rem;font-weight:700;color:rgba(255,255,255,.6);option{background:#0e1b25;font-size:1.2rem;font-weight:700;color:rgba(255,255,255,.6);}}}.download{.export-btn{padding:5px 15px;background:#01C253;border-radius:5px;color:#fff;font-size:1.2rem;font-weight:800;svg{width:auto !important;margin-left:5px;cursor:pointer;}.svg-inline--fa{height:15px !important;}}}@media screen and (max-width:768px){display:block;.filters{margin-bottom:20px;}}"]);
var TabArea = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "pedidos__TabArea",
  componentId: "pniv90-2"
})(["margin:40px 0;table{width:100%;}table tr{display:grid;grid-template-columns:repeat(10,1fr);gap:20px;justify-content:center;align-items:center;height:40px;}table tr th,table tr td{font-size:1.2rem;line-height:1.6rem;text-align:left;}.actions{position:relative;.options{position:absolute;top:20px;left:0;padding:20px;background:#152937;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.15);z-index:20;li{list-style:none;}a{color:rgba(255,255,255,0.8);text-decoration:none;&:hover{text-decoration:underline;}}}}@media screen and (max-width:768px){table tr{display:block;height:auto;padding:20px 0;}table,thead,tbody,th,td,tr{display:block;}thead tr{position:absolute;top:-9999px;left:-9999px;}td{border:none;position:relative;padding-left:50%;height:30px;line-height:3rem;}td:before{position:absolute;top:0;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:bold;}td:nth-of-type(1):before{content:\"C\xF3digo\";}td:nth-of-type(2):before{content:\"Data\";}td:nth-of-type(3):before{content:\"Parceiro Respons\xE1vel\";}td:nth-of-type(4):before{content:\"Cliente\";}td:nth-of-type(5):before{content:\"Forma de Pagamento\";}td:nth-of-type(6):before{content:\"Data de Pagamento\";}td:nth-of-type(7):before{content:\"Cupom\";}td:nth-of-type(8):before{content:\"Status\";}td:nth-of-type(9):before{content:\"Valor\";}td:nth-of-type(10):before{content:\"A\xE7\xF5es\";}}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nZXJlbmNpYW1lbnRvL3BlZGlkb3MuanMiXSwibmFtZXMiOlsiVGl0bGVBcmVhIiwic3R5bGVkIiwiRmlsdGVyQXJlYSIsIlRhYkFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdiQUFmO0FBNENBLElBQU1DLFVBQVUsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsc3pCQUFoQjtBQTRFQSxJQUFNRSxPQUFPLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHcyQ0FBYiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXJlbmNpYW1lbnRvL3BlZGlkb3MuZGUyY2UwOGFiYTlhYjM0YmI5YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgIC5icmVhZGNydW1iIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDZyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIC5vcmRlcnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5pbnB1dCBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTFiMjU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kb3dubG9hZCB7XHJcblxyXG4gICAgICAgIC5leHBvcnQtYnRuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDFDMjUzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcblxyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3ZnLWlubGluZS0tZmEge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgLmZpbHRlcnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRhYkFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiA0MHB4IDA7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgICAgIGdhcDogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ciB0aCwgdGFibGUgdHIgdGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE1MjkzNztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLC4xNSk7XHJcblxyXG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHRhYmxlIHRyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7IFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGVhZCB0ciB7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTk5OTlweDtcclxuICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQ6YmVmb3JlIHsgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7IFxyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUgeyBjb250ZW50OiBcIkPDs2RpZ29cIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiRGF0YVwiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHsgY29udGVudDogXCJQYXJjZWlybyBSZXNwb25zw6F2ZWxcIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDQpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQ2xpZW50ZVwiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoNSk6YmVmb3JlIHsgY29udGVudDogXCJGb3JtYSBkZSBQYWdhbWVudG9cIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDYpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiRGF0YSBkZSBQYWdhbWVudG9cIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDcpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQ3Vwb21cIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDgpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiU3RhdHVzXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSg5KTpiZWZvcmUgeyBjb250ZW50OiBcIlZhbG9yXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSgxMCk6YmVmb3JlIHsgY29udGVudDogXCJBw6fDtWVzXCI7IH1cclxuICAgIH1cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=