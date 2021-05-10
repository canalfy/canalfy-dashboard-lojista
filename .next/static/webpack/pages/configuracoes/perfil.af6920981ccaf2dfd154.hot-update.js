self["webpackHotUpdate_N_E"]("pages/configuracoes/perfil",{

/***/ "./src/components/topbar/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/topbar/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/topbar/style.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\david\\Documents\\Projetos\\canalfy\\dashboard\\lojista\\src\\components\\topbar\\index.jsx";







function TopBar() {
  var profileToggle = function profileToggle(el) {
    el = document.querySelector(el);
    className = 'hidden';

    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);
      if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push(className);
      el.className = classes.join(' ');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.BarArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.LogoArea, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            alt: "Logotipo",
            src: "/images/logo-cliente.png",
            width: 126,
            height: 30
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.UserArea, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.MessageMenu, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.UserMenu, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "profileToggle",
            onClick: profileToggle,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faUser
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
            className: "submenu",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/configuracoes/perfil",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Visualizar Perfil"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 68
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/configuracoes/perfil/editar",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Editar Perfil"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 75
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Logout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_c = TopBar;
/* harmony default export */ __webpack_exports__["default"] = (TopBar);

var _c;

$RefreshReg$(_c, "TopBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJUb3BCYXIiLCJwcm9maWxlVG9nZ2xlIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbGFzc2VzIiwic3BsaXQiLCJleGlzdGluZ0luZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJqb2luIiwiZmFCYXJzIiwiZmFDb21tZW50cyIsImZhVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNkLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsRUFBRCxFQUFRO0FBQzFCQSxNQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkYsRUFBdkIsQ0FBTDtBQUNGRyxhQUFTLEdBQUcsUUFBWjs7QUFDQSxRQUFJSCxFQUFFLENBQUNJLFNBQVAsRUFBa0I7QUFDaEJKLFFBQUUsQ0FBQ0ksU0FBSCxDQUFhQyxNQUFiLENBQW9CRixTQUFwQjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlHLE9BQU8sR0FBR04sRUFBRSxDQUFDRyxTQUFILENBQWFJLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBZDtBQUNBLFVBQUlDLGFBQWEsR0FBR0YsT0FBTyxDQUFDRyxPQUFSLENBQWdCTixTQUFoQixDQUFwQjtBQUVBLFVBQUlLLGFBQWEsSUFBSSxDQUFyQixFQUNFRixPQUFPLENBQUNJLE1BQVIsQ0FBZUYsYUFBZixFQUE4QixDQUE5QixFQURGLEtBR0VGLE9BQU8sQ0FBQ0ssSUFBUixDQUFhUixTQUFiO0FBRUZILFFBQUUsQ0FBQ0csU0FBSCxHQUFlRyxPQUFPLENBQUNNLElBQVIsQ0FBYSxHQUFiLENBQWY7QUFDRDtBQUNGLEdBaEJEOztBQWlCQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLDJDQUFEO0FBQUEsOEJBQ0ksOERBQUMsNENBQUQ7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVDLHFFQUFNQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUNJLGVBQUcsRUFBQyxVQURSO0FBRUksZUFBRyxFQUFDLDBCQUZSO0FBR0ksaUJBQUssRUFBRSxHQUhYO0FBSUksa0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBZUksOERBQUMsNENBQUQ7QUFBQSxnQ0FDSSw4REFBQywrQ0FBRDtBQUFBLGlDQUNJLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVDLDJFQUFVQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUtJLDhEQUFDLDRDQUFEO0FBQUEsa0NBQ0k7QUFBUSxxQkFBUyxFQUFDLGVBQWxCO0FBQWtDLG1CQUFPLEVBQUVmLGFBQTNDO0FBQUEsbUNBQ0ksOERBQUMsMkVBQUQ7QUFBaUIsa0JBQUksRUFBRWdCLHVFQUFNQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUtJO0FBQUsscUJBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQ0k7QUFBQSxxQ0FBSSw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsdUJBQVg7QUFBQSx1Q0FBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHFDQUFJLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyw4QkFBWDtBQUFBLHVDQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUEscUNBQUksOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLFFBQVg7QUFBQSx1Q0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7O0tBdkRRakIsTTtBQXlEVCwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb25maWd1cmFjb2VzL3BlcmZpbC5hZjY5MjA5ODFjY2FmMmRmZDE1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCB7IEJhckFyZWEsIExvZ29BcmVhLCBVc2VyQXJlYSwgTWVzc2FnZU1lbnUsIFVzZXJNZW51IH0gZnJvbSAnLi9zdHlsZSdcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFDb21tZW50cywgZmFVc2VyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVG9wQmFyKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZVRvZ2dsZSA9IChlbCkgPT4ge1xyXG4gICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XHJcbiAgICAgIGNsYXNzTmFtZSA9ICdoaWRkZW4nO1xyXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMClcclxuICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICBcclxuICAgICAgICBlbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QmFyQXJlYT5cclxuICAgICAgICAgICAgICAgIDxMb2dvQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvdGlwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tY2xpZW50ZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyNn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Mb2dvQXJlYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8VXNlckFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29tbWVudHN9PjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVzc2FnZU1lbnU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcm9maWxlVG9nZ2xlXCIgb25DbGljaz17cHJvZmlsZVRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzdWJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb25maWd1cmFjb2VzL3BlcmZpbFwiPjxzcGFuPlZpc3VhbGl6YXIgUGVyZmlsPC9zcGFuPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29uZmlndXJhY29lcy9wZXJmaWwvZWRpdGFyXCI+PHNwYW4+RWRpdGFyIFBlcmZpbDwvc3Bhbj48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2xvZ2luXCI+PHNwYW4+TG9nb3V0PC9zcGFuPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1VzZXJNZW51PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VyQXJlYT5cclxuICAgICAgICAgICAgPC9CYXJBcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhciJdLCJzb3VyY2VSb290IjoiIn0=