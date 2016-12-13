'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = require('antd/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               按钮单选框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               参数				说明						类型					可选值				默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               onChange		选项变化时的回调函数		Function(e:Event)	无					无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               value			用于设置当前选中的值		String				无					无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               defaultValue	默认选中的值				String				无					无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               size			大小，只对按钮样式生效	String				large default small	default
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RadioGroup = _radio2.default.Group;
var RadioButton = _radio2.default.Button;

var RadioGroupControl = function (_React$Component) {
  _inherits(RadioGroupControl, _React$Component);

  function RadioGroupControl(props) {
    _classCallCheck(this, RadioGroupControl);

    var _this = _possibleConstructorReturn(this, (RadioGroupControl.__proto__ || Object.getPrototypeOf(RadioGroupControl)).call(this, props));

    _this.state = { type: 'button', value: 'beijing', size: 'default', data: [{ key: 1, value: 'beijing', name: '北京', disabled: false }, { key: 2, value: 'shanghai', name: '上海', disabled: false }] };
    return _this;
  }

  _createClass(RadioGroupControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.model) this.props.model.addListener(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.model) this.props.model.removeListener(this);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      if (this.props.model) this.props.model.setData('value', e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      //  	const data = this.state.data.map(item => <Radio key={item.key} value={item.value}>{item.name}</Radio>);
      var data = this.state.data.map(function (item) {
        var type = this.state.type;

        if (type == 'button') {
          return _react2.default.createElement(
            RadioButton,
            { key: item.key, disabled: item.disabled, value: item.value },
            item.name
          );
        } else {
          return _react2.default.createElement(
            _radio2.default,
            { key: item.key, disabled: item.disabled, value: item.value },
            item.name
          );
        }
      }.bind(this));
      return _react2.default.createElement(
        RadioGroup,
        { value: this.state.value, size: this.state.size, onChange: function onChange(e) {
            return _this2.handleInputChange(e);
          } },
        data
      );
    }
  }]);

  return RadioGroupControl;
}(_react2.default.Component);

exports.default = RadioGroupControl;