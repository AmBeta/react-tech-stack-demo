'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _user = require('../../redux/modules/user');

var logactions = _interopRequireWildcard(_user);

var _ActionStatus = require('../../constants/ActionStatus');

var _ActionStatus2 = _interopRequireDefault(_ActionStatus);

var _reactRouter = require('react-router');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    //this.handleLogin = this.handleLogin.bind(this)

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.handleLogin = function () {
      _this.props.userlogin('zhangsan', '002', '2');
    };

    _this.handleSubmit = function (e) {
      console.log('123');
      //const { getFieldProps } = this.props.form;
      e.preventDefault();
      var logactions = _this.props.logactions;
      //console.log('收到表单值：', this.props.form.getFieldsValue());

      logactions.userLogin('zhangsan', '002', '2');
    };

    _this.handleUserChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.handleUserBlur = function (e) {
      //console.log(e);//e.target.value
      //console.log(e.target);
      //console.log(e.target.value);
      var logactions = _this.props.logactions;

      logactions.SetUserName(e.target.value);
      _this.setState({
        focus: e.target === document.activeElement
      });
    };

    _this.handleUserFocus = function (e) {
      _this.setState({
        focus: e.target === document.activeElement
      });
    };

    _this.handlePasswordChange = function (e) {
      _this.setState({
        value: e.target.value
      });
    };

    _this.handlePasswordFocus = function (e) {
      _this.setState({
        focus: e.target === document.activeElement
      });
    };

    _this.handlePasswordBlur = function (e) {
      var _this$props = _this.props,
          logactions = _this$props.logactions,
          user = _this$props.user;

      logactions.SetPassWord(user.UserName, e.target.value);
      _this.setState({
        focus: e.target === document.activeElement
      });
    };

    _this.handleSelectChange = function (value) {
      console.log('selected ' + value);
    };

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      //let {user}=this.props;
      console.log('this.props.id:' + _this.props.user.id + 'nextProps.id:' + nextProps.user.id);
      console.log(nextProps.user.id !== _this.props.user.id);
      return nextProps.user.id !== _this.props.user.id;
    };

    return _this;
  }
  /*componentWillMount = ()=>{
    let {user}=this.props,
      input = React.findDOMNode(this.refs.username);
    console.log(input);
    console.log(this.refs.username);
    input.value = user.username;
    if(user.username){
      this.username = user.username;
    }
    else {
    }
  }*/

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var optionList = [];
      var user = this.props.user;
      //const { getFieldProps } = this.props.form;

      if (user.loginStatus === _ActionStatus2.default.SUCCEED) {
        setTimeout(function () {
          //window.location.href = '/saleorders'
          _this2.props.history.pushState(null, '/');
        }, 300);
      } /*{...getFieldProps('userName')}  {...getFieldProps('password')}  {...getFieldProps('agreement')}*/
      console.log('user.account');
      if (user.account) {
        console.log(user.account);
        user.account.forEach(function (ele) {
          optionList.push(_react2.default.createElement(
            Option,
            { value: ele.code },
            ele.accountname
          ));
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'login-nav' },
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
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            { offset: 12 },
            _react2.default.createElement(
              _form2.default,
              { horizontal: true, onSubmit: this.handleSubmit },
              _react2.default.createElement(
                _card2.default,
                { style: { width: 300 } },
                _react2.default.createElement(
                  FormItem,
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    user.errorMsg
                  )
                ),
                _react2.default.createElement(
                  FormItem,
                  {
                    label: '\u8D26\u6237'
                  },
                  _react2.default.createElement(_input2.default, { placeholder: '\u8BF7\u8F93\u5165:\u8D26\u53F7/\u624B\u673A/\u90AE\u7BB1',
                    onChange: this.handleUserChange,
                    onFocus: this.handleUserFocus,
                    onBlur: this.handleUserBlur
                  })
                ),
                _react2.default.createElement(
                  FormItem,
                  {
                    label: '\u5BC6\u7801'
                  },
                  _react2.default.createElement(_input2.default, { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
                    onChange: this.handlePasswordChange,
                    onFocus: this.handlePasswordFocus,
                    onBlur: this.handlePasswordBlur
                  })
                ),
                _react2.default.createElement(
                  FormItem,
                  null,
                  _react2.default.createElement(
                    _checkbox2.default,
                    null,
                    '\u8BB0\u4F4F\u6211'
                  )
                ),
                _react2.default.createElement(
                  FormItem,
                  null,
                  _react2.default.createElement(
                    _select2.default,
                    { showSearch: true,
                      style: { width: 200 },
                      placeholder: '\u8BF7\u9009\u62E9\u8D26\u5957',
                      optionFilterProp: 'children',
                      notFoundContent: '\u65E0\u6CD5\u627E\u5230',
                      onChange: this.handleSelectChange
                    },
                    optionList
                  )
                ),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'primary', htmlType: 'submit' },
                  '\u767B\u5F55'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);
/**/


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.user.toJS()
  };
};
function mapDispatchToProps(dispatch) {
  return {
    userlogin: (0, _redux.bindActionCreators)(_user.userLogin, dispatch),
    logactions: (0, _redux.bindActionCreators)(logactions, dispatch)
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);