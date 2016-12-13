'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               属性			说明													类型		默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               type		设置按钮类型，可选值为 primary ghost 或者不设			string	-
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               htmlType	设置 button 原生的 type 值							string	button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               icon		设置按钮的图标类型									string	-
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               shape		设置按钮形状，可选值为 circle circle-outline 或者不设	string	-
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               size		设置按钮大小，可选值为 small large 或者不设			string	default
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               loading		设置按钮载入状态	boolean	false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               onClick		click 事件的 handler	function	-
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var ButtonControl = function (_React$Component) {
  _inherits(ButtonControl, _React$Component);

  function ButtonControl(props) {
    _classCallCheck(this, ButtonControl);

    var _this = _possibleConstructorReturn(this, (ButtonControl.__proto__ || Object.getPrototypeOf(ButtonControl)).call(this, props));

    _this.state = { disabled: _this.props.disabled, value: _this.props.value, type: _this.props.type, size: 'default', icon: _this.props.icon, shape: _this.props.shape };
    return _this;
  }

  _createClass(ButtonControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //console.log('button model')
      //console.log(this.props.model)
      if (this.props.model) this.props.model.addListener(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.model) this.props.model.removeListener(this);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.props.model) this.props.model.fireEvent('click');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.model) {
        return _react2.default.createElement(
          _button2.default,
          { disabled: this.state.disabled, icon: this.state.icon, type: this.state.type, shape: this.state.shape, size: this.state.size, onClick: function onClick(e) {
              return _this2.onClick(e);
            } },
          this.props.value
        );
      } else {
        return _react2.default.createElement(_button2.default, this.props);
      }
    }
  }]);

  return ButtonControl;
}(_react2.default.Component);

exports.default = ButtonControl;