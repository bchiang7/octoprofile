webpackHotUpdate("static/development/pages/user.js",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gh_polyglot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gh-polyglot */ "./node_modules/gh-polyglot/lib/index.js");
/* harmony import */ var gh_polyglot__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gh_polyglot__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/brittanychiang/Documents/personal/github-profile/pages/user.js";





var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].main.withConfig({
  displayName: "user__StyledContainer",
  componentId: "sc-1xsms7j-0"
})(["padding:50px 100px;img{max-width:200px;}.chart{max-width:500px;}"]);

var User =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(User, _Component);

  function User() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, User);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(User)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      username: '',
      user: {},
      userLanguages: [],
      chartType: 'bar'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buildChart", function () {
      var _this$state = _this.state,
          userLanguages = _this$state.userLanguages,
          chartType = _this$state.chartType;
      console.log(userLanguages);
      var ctx = document.getElementById('langChart');
      var myChart;
      myChart.destroy();
      myChart = new chart_js__WEBPACK_IMPORTED_MODULE_9___default.a(ctx, {
        type: chartType,
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeChartType", function () {
      _this.setState({
        chartType: 'doughnut'
      }, function () {
        return _this.buildChart();
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(User, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        username: this.props.query.id
      });
      var username = this.props.query.id; // fetch(`https://api.github.com/users/${username}`)
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log(json);
      //     setUser(json);
      //   });

      this.setState({
        user: {
          login: 'bchiang7',
          id: 6599979,
          node_id: 'MDQ6VXNlcjY1OTk5Nzk=',
          avatar_url: 'https://avatars2.githubusercontent.com/u/6599979?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/bchiang7',
          html_url: 'https://github.com/bchiang7',
          followers_url: 'https://api.github.com/users/bchiang7/followers',
          following_url: 'https://api.github.com/users/bchiang7/following{/other_user}',
          gists_url: 'https://api.github.com/users/bchiang7/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/bchiang7/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/bchiang7/subscriptions',
          organizations_url: 'https://api.github.com/users/bchiang7/orgs',
          repos_url: 'https://api.github.com/users/bchiang7/repos',
          events_url: 'https://api.github.com/users/bchiang7/events{/privacy}',
          received_events_url: 'https://api.github.com/users/bchiang7/received_events',
          type: 'User',
          site_admin: false,
          name: 'Brittany Chiang',
          company: '@Upstatement ',
          blog: 'https://brittanychiang.com',
          location: 'Boston, MA',
          email: null,
          hireable: true,
          bio: null,
          public_repos: 53,
          public_gists: 4,
          followers: 248,
          following: 12,
          created_at: '2014-02-05T23:22:59Z',
          updated_at: '2019-04-17T03:18:31Z'
        }
      }); // const me = new GhPolyglot(`${username}`);
      // me.userStats((err, stats) => {
      //   if (err) {
      //     throw new Error(err);
      //   }
      //   this.setState({ userLanguages: stats }, () => this.buildChart());
      // });

      this.buildChart();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          username = _this$state2.username,
          user = _this$state2.user;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: user.html_url,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, username)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, user.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, user.company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, user.blog), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, user.location), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, user.email), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, user.hireable ? 'Hireable' : 'Not Available'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, user.bio), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Repos: ", user.public_repos), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Followers: ", user.followers), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Following: ", user.following), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Member since \xA0", new Date(user.created_at).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: user.avatar_url,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.changeChartType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Change"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        id: "langChart",
        className: "chart",
        width: "400",
        height: "400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

User.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=user.js.e10ad12a5e304bfa5e36.hot-update.js.map