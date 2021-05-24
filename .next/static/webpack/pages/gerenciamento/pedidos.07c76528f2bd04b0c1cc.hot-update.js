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
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;.orders{display:flex;justify-content:flex-start;align-items:center;.input label{display:block;font-size:1.2rem;line-height:2rem;font-weight:700;color:rgba(255,255,255,.6);}.input select{padding:10px 20px;margin-top:5px;background:transparent;border:1px solid rgba(255,255,255,.4);font-size:1.2rem;font-weight:700;color:rgba(255,255,255,.6);option{background:#0e1b25;font-size:1.2rem;font-weight:700;color:rgba(255,255,255,.6);}}}.download{.export-btn{padding:7.5px 15px;background:#01C253;border-radius:5px;color:#fff;font-size:1.2rem;font-weight:800;cursor:pointer;svg{width:auto !important;margin-left:5px;}.svg-inline--fa{height:15px !important;}}}@media screen and (max-width:768px){display:block;.filters{margin-bottom:20px;}}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nZXJlbmNpYW1lbnRvL3BlZGlkb3MuanMiXSwibmFtZXMiOlsiVGl0bGVBcmVhIiwic3R5bGVkIiwiRmlsdGVyQXJlYSIsIlRhYkFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdiQUFmO0FBNENBLElBQU1DLFVBQVUsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsd3pCQUFoQjtBQTRFQSxJQUFNRSxPQUFPLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHcyQ0FBYiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXJlbmNpYW1lbnRvL3BlZGlkb3MuMDdjNzY1MjhmMmJkMDRiMGMxY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgIC5icmVhZGNydW1iIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDZyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIC5vcmRlcnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5pbnB1dCBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQgc2VsZWN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwZTFiMjU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kb3dubG9hZCB7XHJcblxyXG4gICAgICAgIC5leHBvcnQtYnRuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNy41cHggMTVweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMUMyNTM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN2Zy1pbmxpbmUtLWZhIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIC5maWx0ZXJzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBUYWJBcmVhID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcclxuICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdHIgdGgsIHRhYmxlIHRyIHRkIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNTI5Mzc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwuMTUpO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogMjA7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB0YWJsZSB0ciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIgeyBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhlYWQgdHIgeyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC05OTk5cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC05OTk5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkOmJlZm9yZSB7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlOyBcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDsgXHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHsgY29udGVudDogXCJDw7NkaWdvXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUgeyBjb250ZW50OiBcIkRhdGFcIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiUGFyY2Vpcm8gUmVzcG9uc8OhdmVsXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUgeyBjb250ZW50OiBcIkNsaWVudGVcIjsgfVxyXG4gICAgICAgIHRkOm50aC1vZi10eXBlKDUpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiRm9ybWEgZGUgUGFnYW1lbnRvXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSg2KTpiZWZvcmUgeyBjb250ZW50OiBcIkRhdGEgZGUgUGFnYW1lbnRvXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSg3KTpiZWZvcmUgeyBjb250ZW50OiBcIkN1cG9tXCI7IH1cclxuICAgICAgICB0ZDpudGgtb2YtdHlwZSg4KTpiZWZvcmUgeyBjb250ZW50OiBcIlN0YXR1c1wiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoOSk6YmVmb3JlIHsgY29udGVudDogXCJWYWxvclwiOyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoMTApOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQcOnw7Vlc1wiOyB9XHJcbiAgICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9