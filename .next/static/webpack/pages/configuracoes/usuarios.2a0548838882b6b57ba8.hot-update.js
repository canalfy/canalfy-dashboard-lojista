self["webpackHotUpdate_N_E"]("pages/configuracoes/usuarios",{

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

function TopBar() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.BarArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.LogoArea, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
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
            lineNumber: 37,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.UserArea, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.MessageMenu, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_3__.UserMenu, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "profileToggle",
            onClick: profileToggle,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
              icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faUser
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
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
                  lineNumber: 57,
                  columnNumber: 68
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/configuracoes/perfil/editar",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Editar Perfil"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 75
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
                href: "/login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Logout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 53
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
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJwcm9maWxlVG9nZ2xlIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbGFzc2VzIiwic3BsaXQiLCJleGlzdGluZ0luZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJqb2luIiwiVG9wQmFyIiwiZmFCYXJzIiwiZmFDb21tZW50cyIsImZhVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxFQUFELEVBQVE7QUFDMUJBLElBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCRixFQUF2QixDQUFMO0FBQ0ZHLFdBQVMsR0FBRyxRQUFaOztBQUNBLE1BQUlILEVBQUUsQ0FBQ0ksU0FBUCxFQUFrQjtBQUNoQkosTUFBRSxDQUFDSSxTQUFILENBQWFDLE1BQWIsQ0FBb0JGLFNBQXBCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSUcsT0FBTyxHQUFHTixFQUFFLENBQUNHLFNBQUgsQ0FBYUksS0FBYixDQUFtQixHQUFuQixDQUFkO0FBQ0EsUUFBSUMsYUFBYSxHQUFHRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JOLFNBQWhCLENBQXBCO0FBRUEsUUFBSUssYUFBYSxJQUFJLENBQXJCLEVBQ0VGLE9BQU8sQ0FBQ0ksTUFBUixDQUFlRixhQUFmLEVBQThCLENBQTlCLEVBREYsS0FHRUYsT0FBTyxDQUFDSyxJQUFSLENBQWFSLFNBQWI7QUFFRkgsTUFBRSxDQUFDRyxTQUFILEdBQWVHLE9BQU8sQ0FBQ00sSUFBUixDQUFhLEdBQWIsQ0FBZjtBQUNEO0FBQ0YsQ0FoQkQ7O0FBa0JBLFNBQVNDLE1BQVQsR0FBa0I7QUFDZCxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLDJDQUFEO0FBQUEsOEJBQ0ksOERBQUMsNENBQUQ7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVDLHFFQUFNQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSSw4REFBQyxtREFBRDtBQUNJLGVBQUcsRUFBQyxVQURSO0FBRUksZUFBRyxFQUFDLDBCQUZSO0FBR0ksaUJBQUssRUFBRSxHQUhYO0FBSUksa0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBZUksOERBQUMsNENBQUQ7QUFBQSxnQ0FDSSw4REFBQywrQ0FBRDtBQUFBLGlDQUNJLDhEQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVDLDJFQUFVQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUtJLDhEQUFDLDRDQUFEO0FBQUEsa0NBQ0k7QUFBUSxxQkFBUyxFQUFDLGVBQWxCO0FBQWtDLG1CQUFPLEVBQUVoQixhQUEzQztBQUFBLG1DQUNJLDhEQUFDLDJFQUFEO0FBQWlCLGtCQUFJLEVBQUVpQix1RUFBTUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFLSTtBQUFLLHFCQUFTLEVBQUMsU0FBZjtBQUFBLG9DQUNJO0FBQUEscUNBQUksOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLHVCQUFYO0FBQUEsdUNBQW1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQSxxQ0FBSSw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsOEJBQVg7QUFBQSx1Q0FBMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBLHFDQUFJLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxRQUFYO0FBQUEsdUNBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztLQXRDUUgsTTtBQXdDVCwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb25maWd1cmFjb2VzL3VzdWFyaW9zLjJhMDU0ODgzODg4MmI2YjU3YmE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHsgQmFyQXJlYSwgTG9nb0FyZWEsIFVzZXJBcmVhLCBNZXNzYWdlTWVudSwgVXNlck1lbnUgfSBmcm9tICcuL3N0eWxlJ1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYUNvbW1lbnRzLCBmYVVzZXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgZmFCYXJzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuY29uc3QgcHJvZmlsZVRvZ2dsZSA9IChlbCkgPT4ge1xyXG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcclxuICBjbGFzc05hbWUgPSAnaGlkZGVuJztcclxuICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICB2YXIgZXhpc3RpbmdJbmRleCA9IGNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpO1xyXG4gIFxyXG4gICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMClcclxuICAgICAgY2xhc3Nlcy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gIFxyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBUb3BCYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCYXJBcmVhPlxyXG4gICAgICAgICAgICAgICAgPExvZ29BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCYXJzfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ290aXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby1jbGllbnRlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ29BcmVhPlxyXG5cclxuICAgICAgICAgICAgICAgIDxVc2VyQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb21tZW50c30+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlTWVudT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByb2ZpbGVUb2dnbGVcIiBvbkNsaWNrPXtwcm9maWxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfT48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInN1Ym1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvbmZpZ3VyYWNvZXMvcGVyZmlsXCI+PHNwYW4+VmlzdWFsaXphciBQZXJmaWw8L3NwYW4+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb25maWd1cmFjb2VzL3BlcmZpbC9lZGl0YXJcIj48c3Bhbj5FZGl0YXIgUGVyZmlsPC9zcGFuPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvbG9naW5cIj48c3Bhbj5Mb2dvdXQ8L3NwYW4+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXNlck1lbnU+XHJcbiAgICAgICAgICAgICAgICA8L1VzZXJBcmVhPlxyXG4gICAgICAgICAgICA8L0JhckFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyIl0sInNvdXJjZVJvb3QiOiIifQ==