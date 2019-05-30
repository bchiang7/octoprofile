webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style */ "./style/index.js");

var _jsxFileName = "/Users/brittanychiang/Documents/personal/github-profile/pages/index.js";





var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "pages__StyledContainer",
  componentId: "sc-74v6dc-0"
})(["", ";height:100vh;form{box-shadow:0 5px 30px -15px rgba(0,0,0,0.2);background-color:", ";border-radius:5px;padding:2rem;width:50vw;max-width:700px;text-align:center;input{color:", ";font-size:60px;font-weight:700;text-align:center;outline:0;border:0;border-bottom:1px solid ", ";background-color:", ";width:100%;margin-top:2rem;}}"], _style__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexCenter, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.black;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.black;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white;
});

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setUsername(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "OctoProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
        pathname: '/user',
        query: {
          id: username
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "GitHub Username"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    name: "username",
    type: "text",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7ed9ea0fd67d581327a7.hot-update.js.map