self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/style */ "./src/styles/style.js");
/* harmony import */ var _src_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/layout */ "./src/components/layout/index.jsx");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\david\\Documents\\Projetos\\canalfy\\dashboard\\lojista\\pages\\index.jsx";



var pedidosChart = {
  labels: ['01', '10', '20', '30'],
  datasets: [{
    label: 'Pedidos',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#086930',
    borderColor: '#2EC76E',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#6bfafa',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#03A346',
    pointHoverBorderColor: '#01C253',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81]
  }, {
    label: 'Receita',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#03A346',
    borderColor: '#03A346',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#6bfafa',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#03A346',
    pointHoverBorderColor: '#01C253',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [32, 120, 100, 85]
  }, {
    label: 'Parceiros',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#2EC76E',
    borderColor: '#2EC76E',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#6bfafa',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#03A346',
    pointHoverBorderColor: '#01C253',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [80, 72, 75, 78]
  }]
};
var fonteChart = {
  labels: ['Google', 'Facebook', 'Direto'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#086930', '#03A346', '#2EC76E'],
    hoverBackgroundColor: ['#086930', '#03A346', '#2EC76E']
  }]
};

function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_style__WEBPACK_IMPORTED_MODULE_1__.TitleArea, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Ol\xE1, Paulo Lima"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "description",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Bem-vindo ao painel Canalfy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_style__WEBPACK_IMPORTED_MODULE_1__.OverviewArea, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxOne",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Total de Receitas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "R$ 560.000,00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxTwo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Total de Pedidos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "520"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxThree",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Total de Parceiros"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "32"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxFour",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Parceiros com Pedidos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxFive",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Ticket M\xE9dio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "R$ 320,00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxSix",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Taxa de Convers\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "5%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_style__WEBPACK_IMPORTED_MODULE_1__.DoubleBox, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxOne",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "titleBox",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "title",
              children: "Pedidos do m\xEAs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: "Confira um gr\xE1fico com os pedidos do m\xEAs atual"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chartBox",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {
              data: pedidosChart,
              width: 400,
              height: 200
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxTwo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "titleBox",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "title",
              children: "Fonte do Pedido"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: "Confira um gr\xE1fico de onde vem os pedidos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chartBox",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {
              data: fonteChart,
              width: 200,
              height: 200
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInBlZGlkb3NDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsInBvaW50SGl0UmFkaXVzIiwiZGF0YSIsImZvbnRlQ2hhcnQiLCJob3ZlckJhY2tncm91bmRDb2xvciIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FEUztBQUVqQkMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsU0FBSyxFQUFFLFNBRFQ7QUFFRUMsUUFBSSxFQUFFLEtBRlI7QUFHRUMsZUFBVyxFQUFFLEdBSGY7QUFJRUMsbUJBQWUsRUFBRSxTQUpuQjtBQUtFQyxlQUFXLEVBQUUsU0FMZjtBQU1FQyxrQkFBYyxFQUFFLE1BTmxCO0FBT0VDLGNBQVUsRUFBRSxFQVBkO0FBUUVDLG9CQUFnQixFQUFFLEdBUnBCO0FBU0VDLG1CQUFlLEVBQUUsT0FUbkI7QUFVRUMsb0JBQWdCLEVBQUUsU0FWcEI7QUFXRUMsd0JBQW9CLEVBQUUsTUFYeEI7QUFZRUMsb0JBQWdCLEVBQUUsQ0FacEI7QUFhRUMsb0JBQWdCLEVBQUUsQ0FicEI7QUFjRUMsNkJBQXlCLEVBQUUsU0FkN0I7QUFlRUMseUJBQXFCLEVBQUUsU0FmekI7QUFnQkVDLHlCQUFxQixFQUFFLENBaEJ6QjtBQWlCRUMsZUFBVyxFQUFFLENBakJmO0FBa0JFQyxrQkFBYyxFQUFFLEVBbEJsQjtBQW1CRUMsUUFBSSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYjtBQW5CUixHQURRLEVBc0JSO0FBQ0VsQixTQUFLLEVBQUUsU0FEVDtBQUVFQyxRQUFJLEVBQUUsS0FGUjtBQUdFQyxlQUFXLEVBQUUsR0FIZjtBQUlFQyxtQkFBZSxFQUFFLFNBSm5CO0FBS0VDLGVBQVcsRUFBRSxTQUxmO0FBTUVDLGtCQUFjLEVBQUUsTUFObEI7QUFPRUMsY0FBVSxFQUFFLEVBUGQ7QUFRRUMsb0JBQWdCLEVBQUUsR0FScEI7QUFTRUMsbUJBQWUsRUFBRSxPQVRuQjtBQVVFQyxvQkFBZ0IsRUFBRSxTQVZwQjtBQVdFQyx3QkFBb0IsRUFBRSxNQVh4QjtBQVlFQyxvQkFBZ0IsRUFBRSxDQVpwQjtBQWFFQyxvQkFBZ0IsRUFBRSxDQWJwQjtBQWNFQyw2QkFBeUIsRUFBRSxTQWQ3QjtBQWVFQyx5QkFBcUIsRUFBRSxTQWZ6QjtBQWdCRUMseUJBQXFCLEVBQUUsQ0FoQnpCO0FBaUJFQyxlQUFXLEVBQUUsQ0FqQmY7QUFrQkVDLGtCQUFjLEVBQUUsRUFsQmxCO0FBbUJFQyxRQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxFQUFmO0FBbkJSLEdBdEJRLEVBMkNSO0FBQ0VsQixTQUFLLEVBQUUsV0FEVDtBQUVFQyxRQUFJLEVBQUUsS0FGUjtBQUdFQyxlQUFXLEVBQUUsR0FIZjtBQUlFQyxtQkFBZSxFQUFFLFNBSm5CO0FBS0VDLGVBQVcsRUFBRSxTQUxmO0FBTUVDLGtCQUFjLEVBQUUsTUFObEI7QUFPRUMsY0FBVSxFQUFFLEVBUGQ7QUFRRUMsb0JBQWdCLEVBQUUsR0FScEI7QUFTRUMsbUJBQWUsRUFBRSxPQVRuQjtBQVVFQyxvQkFBZ0IsRUFBRSxTQVZwQjtBQVdFQyx3QkFBb0IsRUFBRSxNQVh4QjtBQVlFQyxvQkFBZ0IsRUFBRSxDQVpwQjtBQWFFQyxvQkFBZ0IsRUFBRSxDQWJwQjtBQWNFQyw2QkFBeUIsRUFBRSxTQWQ3QjtBQWVFQyx5QkFBcUIsRUFBRSxTQWZ6QjtBQWdCRUMseUJBQXFCLEVBQUUsQ0FoQnpCO0FBaUJFQyxlQUFXLEVBQUUsQ0FqQmY7QUFrQkVDLGtCQUFjLEVBQUUsRUFsQmxCO0FBbUJFQyxRQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiO0FBbkJSLEdBM0NRO0FBRk8sQ0FBckI7QUFxRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2xCckIsUUFBTSxFQUFFLENBQ1AsUUFETyxFQUVQLFVBRk8sRUFHUCxRQUhPLENBRFU7QUFNbEJDLFVBQVEsRUFBRSxDQUFDO0FBQ1ZtQixRQUFJLEVBQUUsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEdBQVYsQ0FESTtBQUVWZixtQkFBZSxFQUFFLENBQ2pCLFNBRGlCLEVBRWpCLFNBRmlCLEVBR2pCLFNBSGlCLENBRlA7QUFPVmlCLHdCQUFvQixFQUFFLENBQ3RCLFNBRHNCLEVBRXRCLFNBRnNCLEVBR3RCLFNBSHNCO0FBUFosR0FBRDtBQU5RLENBQW5COztBQXFCQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2hCLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsMkRBQUQ7QUFBQSw4QkFDSSw4REFBQyx3REFBRDtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsaUNBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUksOERBQUMsMkRBQUQ7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFTSTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEosZUFhSTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUFpQkk7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSixlQXFCSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU0scUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBaUNJLDhEQUFDLHdEQUFEO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG9DQUNJO0FBQU0sdUJBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQU0sdUJBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFNSTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNJLDhEQUFDLGlEQUFEO0FBQ0ksa0JBQUksRUFBRXhCLFlBRFY7QUFFSSxtQkFBSyxFQUFFLEdBRlg7QUFHSSxvQkFBTSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBZ0JJO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFNLHVCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDSSw4REFBQyxnREFBRDtBQUNJLGtCQUFJLEVBQUVzQixVQURWO0FBRUksbUJBQUssRUFBRSxHQUZYO0FBR0ksb0JBQU0sRUFBRTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBcUVIOztLQXRFUUUsUTtBQXdFVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZWYzYTRiYzMxZDA1MzU0NjJlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGl0bGVBcmVhLCBPdmVydmlld0FyZWEsIERvdWJsZUJveCB9IGZyb20gJy4uL3NyYy9zdHlsZXMvc3R5bGUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5cclxuaW1wb3J0IHsgTGluZSwgUGllIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbmNvbnN0IHBlZGlkb3NDaGFydCA9IHtcclxuICAgIGxhYmVsczogWycwMScsICcxMCcsICcyMCcsICczMCddLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnUGVkaWRvcycsXHJcbiAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDg2OTMwJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJyMyRUM3NkUnLFxyXG4gICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXHJcbiAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcclxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzZiZmFmYScsXHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyMwM0EzNDYnLFxyXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyMwMUMyNTMnLFxyXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcclxuICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgZGF0YTogWzY1LCA1OSwgODAsIDgxXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdSZWNlaXRhJyxcclxuICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwM0EzNDYnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnIzAzQTM0NicsXHJcbiAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcclxuICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxyXG4gICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjNmJmYWZhJyxcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcclxuICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzAzQTM0NicsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnIzAxQzI1MycsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICBkYXRhOiBbMzIsIDEyMCwgMTAwLCA4NV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnUGFyY2Vpcm9zJyxcclxuICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyRUM3NkUnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnIzJFQzc2RScsXHJcbiAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcclxuICAgICAgICBib3JkZXJEYXNoOiBbXSxcclxuICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXHJcbiAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxyXG4gICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjNmJmYWZhJyxcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcclxuICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzAzQTM0NicsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnIzAxQzI1MycsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICBkYXRhOiBbODAsIDcyLCA3NSwgNzhdXHJcbiAgICAgIH1cclxuICAgIF1cclxufTtcclxuXHJcbmNvbnN0IGZvbnRlQ2hhcnQgPSB7XHJcblx0bGFiZWxzOiBbXHJcblx0XHQnR29vZ2xlJyxcclxuXHRcdCdGYWNlYm9vaycsXHJcblx0XHQnRGlyZXRvJ1xyXG5cdF0sXHJcblx0ZGF0YXNldHM6IFt7XHJcblx0XHRkYXRhOiBbMzAwLCA1MCwgMTAwXSxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogW1xyXG5cdFx0JyMwODY5MzAnLFxyXG5cdFx0JyMwM0EzNDYnLFxyXG5cdFx0JyMyRUM3NkUnXHJcblx0XHRdLFxyXG5cdFx0aG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcclxuXHRcdCcjMDg2OTMwJyxcclxuXHRcdCcjMDNBMzQ2JyxcclxuXHRcdCcjMkVDNzZFJ1xyXG5cdFx0XVxyXG5cdH1dXHJcbn07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxUaXRsZUFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPjxoMj5PbMOhLCBQYXVsbyBMaW1hPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+PHNwYW4+QmVtLXZpbmRvIGFvIHBhaW5lbCBDYW5hbGZ5PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUFyZWE+XHJcblxyXG4gICAgICAgICAgICAgICAgPE92ZXJ2aWV3QXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveE9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRvdGFsIGRlIFJlY2VpdGFzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPlIkIDU2MC4wMDAsMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hUd29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Ub3RhbCBkZSBQZWRpZG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjUyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VG90YWwgZGUgUGFyY2Vpcm9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjMyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Rm91clwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlBhcmNlaXJvcyBjb20gUGVkaWRvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj4zMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveEZpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UaWNrZXQgTcOpZGlvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPlIkIDMyMCwwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFNpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRheGEgZGUgQ29udmVyc8Ojbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj41JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvT3ZlcnZpZXdBcmVhPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEb3VibGVCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hPbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZUJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5QZWRpZG9zIGRvIG3DqnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkNvbmZpcmEgdW0gZ3LDoWZpY28gY29tIG9zIHBlZGlkb3MgZG8gbcOqcyBhdHVhbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0Qm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3BlZGlkb3NDaGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94VHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Rm9udGUgZG8gUGVkaWRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5Db25maXJhIHVtIGdyw6FmaWNvIGRlIG9uZGUgdmVtIG9zIHBlZGlkb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydEJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2ZvbnRlQ2hhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Eb3VibGVCb3g+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==