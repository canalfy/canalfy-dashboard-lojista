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
    borderColor: '#086930',
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
  labels: ['ID', 'Cupom'],
  datasets: [{
    data: [300, 50],
    backgroundColor: ['#086930', '#03A346'],
    hoverBackgroundColor: ['#086930', '#03A346']
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
            lineNumber: 98,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "description",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Bem-vindo ao painel Canalfy"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 50
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_style__WEBPACK_IMPORTED_MODULE_1__.OverviewArea, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxOne",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Total de Receitas"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "R$ 560.000,00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxTwo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Total de Pedidos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "520"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxThree",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Total de Parceiros"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "32"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxFour",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Parceiros com Pedidos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxFive",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Ticket M\xE9dio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "R$ 320,00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxSix",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "title",
            children: "Taxa de Convers\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "value",
            children: "5%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_styles_style__WEBPACK_IMPORTED_MODULE_1__.DoubleBox, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxOne",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "titleBox",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "title",
              children: "Resultados do m\xEAs"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: "Confira um gr\xE1fico com os resultados do m\xEAs atual"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chartBox",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {
              data: pedidosChart,
              width: 400,
              height: 200
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "boxTwo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "titleBox",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "title",
              children: "Origem dos Pedidos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: "Confira um gr\xE1fico de onde vem os pedidos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "chartBox",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {
              data: fonteChart,
              width: 200,
              height: 200
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbInBlZGlkb3NDaGFydCIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwibGluZVRlbnNpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlckNhcFN0eWxlIiwiYm9yZGVyRGFzaCIsImJvcmRlckRhc2hPZmZzZXQiLCJib3JkZXJKb2luU3R5bGUiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlcldpZHRoIiwicG9pbnRIb3ZlclJhZGl1cyIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsInBvaW50SGl0UmFkaXVzIiwiZGF0YSIsImZvbnRlQ2hhcnQiLCJob3ZlckJhY2tncm91bmRDb2xvciIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FEUztBQUVqQkMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsU0FBSyxFQUFFLFNBRFQ7QUFFRUMsUUFBSSxFQUFFLEtBRlI7QUFHRUMsZUFBVyxFQUFFLEdBSGY7QUFJRUMsbUJBQWUsRUFBRSxTQUpuQjtBQUtFQyxlQUFXLEVBQUUsU0FMZjtBQU1FQyxrQkFBYyxFQUFFLE1BTmxCO0FBT0VDLGNBQVUsRUFBRSxFQVBkO0FBUUVDLG9CQUFnQixFQUFFLEdBUnBCO0FBU0VDLG1CQUFlLEVBQUUsT0FUbkI7QUFVRUMsb0JBQWdCLEVBQUUsU0FWcEI7QUFXRUMsd0JBQW9CLEVBQUUsTUFYeEI7QUFZRUMsb0JBQWdCLEVBQUUsQ0FacEI7QUFh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UyxFQUFDLFFBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0k7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBU0k7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKLGVBYUk7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBaUJJO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0k7QUFBTSxxQkFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBTSxxQkFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkosZUFxQkk7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFNLHFCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQWlDSSw4REFBQyx3REFBRDtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFNLHVCQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBTUk7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDSSw4REFBQyxpREFBRDtBQUNJLGtCQUFJLEVBQUV4QixZQURWO0FBRUksbUJBQUssRUFBRSxHQUZYO0FBR0ksb0JBQU0sRUFBRTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQWdCSTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsb0NBQ0k7QUFBTSx1QkFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBTSx1QkFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU1JO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0ksOERBQUMsZ0RBQUQ7QUFDSSxrQkFBSSxFQUFFc0IsVUFEVjtBQUVJLG1CQUFLLEVBQUUsR0FGWDtBQUdJLG9CQUFNLEVBQUU7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXFFSDs7S0F0RVFFLFE7QUF3RVQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmZmZDkyNjNjNmNjYzljYjIxMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpdGxlQXJlYSwgT3ZlcnZpZXdBcmVhLCBEb3VibGVCb3ggfSBmcm9tICcuLi9zcmMvc3R5bGVzL3N0eWxlJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2xheW91dCdcclxuXHJcbmltcG9ydCB7IExpbmUsIFBpZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5jb25zdCBwZWRpZG9zQ2hhcnQgPSB7XHJcbiAgICBsYWJlbHM6IFsnMDEnLCAnMTAnLCAnMjAnLCAnMzAnXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1BlZGlkb3MnLFxyXG4gICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzA4NjkzMCcsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDg2OTMwJyxcclxuICAgICAgICBib3JkZXJDYXBTdHlsZTogJ2J1dHQnLFxyXG4gICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IDAuMCxcclxuICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdtaXRlcicsXHJcbiAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyM2YmZhZmEnLFxyXG4gICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDNBMzQ2JyxcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjMDFDMjUzJyxcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgcG9pbnRSYWRpdXM6IDEsXHJcbiAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxyXG4gICAgICAgIGRhdGE6IFs2NSwgNTksIDgwLCA4MV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnUmVjZWl0YScsXHJcbiAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDNBMzQ2JyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJyMwM0EzNDYnLFxyXG4gICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXHJcbiAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcclxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzZiZmFmYScsXHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyMwM0EzNDYnLFxyXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyMwMUMyNTMnLFxyXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcclxuICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgZGF0YTogWzMyLCAxMjAsIDEwMCwgODVdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ1BhcmNlaXJvcycsXHJcbiAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgbGluZVRlbnNpb246IDAuMSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMkVDNzZFJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJyMyRUM3NkUnLFxyXG4gICAgICAgIGJvcmRlckNhcFN0eWxlOiAnYnV0dCcsXHJcbiAgICAgICAgYm9yZGVyRGFzaDogW10sXHJcbiAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ21pdGVyJyxcclxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzZiZmFmYScsXHJcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBwb2ludEJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgIHBvaW50SG92ZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyMwM0EzNDYnLFxyXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyMwMUMyNTMnLFxyXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcclxuICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXHJcbiAgICAgICAgZGF0YTogWzgwLCA3MiwgNzUsIDc4XVxyXG4gICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5jb25zdCBmb250ZUNoYXJ0ID0ge1xyXG5cdGxhYmVsczogW1xyXG5cdFx0J0lEJyxcclxuXHRcdCdDdXBvbScsXHJcblx0XSxcclxuXHRkYXRhc2V0czogW3tcclxuXHRcdGRhdGE6IFszMDAsIDUwXSxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogW1xyXG5cdFx0JyMwODY5MzAnLFxyXG5cdFx0JyMwM0EzNDYnLFxyXG5cdFx0XSxcclxuXHRcdGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXHJcblx0XHQnIzA4NjkzMCcsXHJcblx0XHQnIzAzQTM0NicsXHJcblx0XHRdXHJcblx0fV1cclxufTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+PGgyPk9sw6EsIFBhdWxvIExpbWE8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj48c3Bhbj5CZW0tdmluZG8gYW8gcGFpbmVsIENhbmFsZnk8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlQXJlYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8T3ZlcnZpZXdBcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94T25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VG90YWwgZGUgUmVjZWl0YXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+UiQgNTYwLjAwMCwwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRvdGFsIGRlIFBlZGlkb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+NTIwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94VGhyZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Ub3RhbCBkZSBQYXJjZWlyb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+MzI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hGb3VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UGFyY2Vpcm9zIGNvbSBQZWRpZG9zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjMwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94Rml2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRpY2tldCBNw6lkaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZhbHVlXCI+UiQgMzIwLDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94U2l4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VGF4YSBkZSBDb252ZXJzw6NvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWx1ZVwiPjUlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9PdmVydmlld0FyZWE+XHJcblxyXG4gICAgICAgICAgICAgICAgPERvdWJsZUJveD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveE9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlJlc3VsdGFkb3MgZG8gbcOqczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+Q29uZmlyYSB1bSBncsOhZmljbyBjb20gb3MgcmVzdWx0YWRvcyBkbyBtw6pzIGF0dWFsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cGVkaWRvc0NoYXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hUd29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZUJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5PcmlnZW0gZG9zIFBlZGlkb3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPkNvbmZpcmEgdW0gZ3LDoWZpY28gZGUgb25kZSB2ZW0gb3MgcGVkaWRvczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0Qm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Zm9udGVDaGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RvdWJsZUJveD5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9