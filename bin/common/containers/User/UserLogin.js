'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _ActionStatus = require('../../constants/ActionStatus');

var _ActionStatus2 = _interopRequireDefault(_ActionStatus);

var _user = require('../../redux/modules/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.handleLogin = _this.handleLogin.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleLogin',
    value: function handleLogin() {
      this.props.userLogin('zhangsan', '002', '2');
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;


      if (user.loginStatus === _ActionStatus2.default.SUCCEED) {
        setTimeout(function () {
          window.location.href = '/saleorders';
        }, 300);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'login-nav' },
          _react2.default.createElement(
            'span',
            { className: 'logintext m-l-5' },
            '\u8D26\u53F7\u767B\u5F55'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'up-content' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row login-content' },
              _react2.default.createElement('div', { className: 'col-xs-7' }),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4  login-form' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 content-form' },
                  _react2.default.createElement('input', { type: 'text', id: 'corp_id', hidden: 'hidden' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'login-title' },
                    '\u8D26\u6237\u767B\u5F55'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'errorMsg glyphicon glyphicon-remove-sign', id: 'errorMsg' },
                    '\u8D26\u53F7\u4E0E\u5BC6\u7801\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement('div', { className: 'input-group-addon glyphicon glyphicon-user' }),
                      _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'username', ref: 'username', placeholder: '\u8D26\u53F7/\u624B\u673A/\u90AE\u7BB1' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement('div', { className: 'input-group-addon glyphicon glyphicon-lock' }),
                      _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', ref: 'password', placeholder: '\u5BC6\u7801' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement('div', { className: 'input-group-addon glyphicon glyphicon-th-list' }),
                      _react2.default.createElement(
                        'button',
                        { className: 'btn btn-default dropdown-toggle accountbtn', type: 'button', id: 'dropdownMenu1', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'true' },
                        _react2.default.createElement(
                          'span',
                          { id: 'sp-accountContext' },
                          ' \u8BF7\u9009\u62E9\u8D26\u5957'
                        ),
                        _react2.default.createElement('span', { className: 'caret' })
                      ),
                      _react2.default.createElement('ul', { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu1', id: 'accountSelect' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group login-box' },
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'forget-pwd', target: '_blank' },
                      '\u5FD8\u8BB0\u767B\u5F55\u5BC6\u7801'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '/register?f=login', className: 'register', target: '_blank' },
                      '\u514D\u8D39\u6CE8\u518C'
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-danger btn-width', onClick: this.handleLogin, id: 'submit' },
                    '\u767B\u5F55'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          _react2.default.createElement(
            'div',
            { className: 'text-center  m-t-15' },
            '\xA92016 \u7528\u53CB\u4F18\u666E\u4FE1\u606F\u6280\u672F\u6709\u9650\u516C\u53F8 \u5E73\u53F0\u6280\u672F\u652F\u6301 \u4EACICP\u590705007539\u53F7-10'
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.user.toJS()
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  userLogin: _user.userLogin
})(Login);