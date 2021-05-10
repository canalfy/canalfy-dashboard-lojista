self["webpackHotUpdate_N_E"]("pages/configuracoes/perfil",{

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
/* harmony export */   "FooterLayout": function() { return /* binding */ FooterLayout; }
/* harmony export */ });
/* harmony import */ var C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject6() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 100%;\n    height: 80px;\n\n    background: #152937;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 100%;\n    height: 100%;\n    padding: 20px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 100%;\n    height: 100%;\n    padding: 20px;\n\n    background: #122330;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    gap: 30px;\n    justify-content: flex-start;\n    align-items: flex-start;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 100%;\n    height: 80px;\n\n    background: #152937;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_david_Documents_Projetos_canalfy_dashboard_lojista_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    width: 100%;\n    min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var MainLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.main(_templateObject());
var HeaderLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.header(_templateObject2());
var FullLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.section(_templateObject3());
var AsideArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.aside(_templateObject4());
var ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5());
var FooterLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.footer(_templateObject6());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L3N0eWxlLmpzIl0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJzdHlsZWQiLCJIZWFkZXJMYXlvdXQiLCJGdWxsTGF5b3V0IiwiQXNpZGVBcmVhIiwiQ29udGVudEFyZWEiLCJGb290ZXJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxVQUFVLEdBQUdDLDJEQUFILG1CQUFoQjtBQUtBLElBQU1DLFlBQVksR0FBR0QsNkRBQUgsb0JBQWxCO0FBT0EsSUFBTUUsVUFBVSxHQUFHRiw4REFBSCxvQkFBaEI7QUFRQSxJQUFNRyxTQUFTLEdBQUdILDREQUFILG9CQUFmO0FBWUEsSUFBTUksV0FBVyxHQUFHSiwwREFBSCxvQkFBakI7QUFNQSxJQUFNSyxZQUFZLEdBQUdMLDZEQUFILG9CQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb25maWd1cmFjb2VzL3BlcmZpbC4xMDViM2U1ZTgxYjBkM2I1YTNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTGF5b3V0ID0gc3R5bGVkLm1haW5gXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTGF5b3V0ID0gc3R5bGVkLmhlYWRlcmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMxNTI5Mzc7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGdWxsTGF5b3V0ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBBc2lkZUFyZWEgPSBzdHlsZWQuYXNpZGVgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzEyMjMzMDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50QXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJMYXlvdXQgPSBzdHlsZWQuZm9vdGVyYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzE1MjkzNztcclxuYCJdLCJzb3VyY2VSb290IjoiIn0=