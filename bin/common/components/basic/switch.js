'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchControl = function (_React$Component) {
  _inherits(SwitchControl, _React$Component);

  function SwitchControl(props) {
    _classCallCheck(this, SwitchControl);

    var _this = _possibleConstructorReturn(this, (SwitchControl.__proto__ || Object.getPrototypeOf(SwitchControl)).call(this, props));

    _this.state = {
      value: false,
      checkedChildren: '开',
      unCheckedChildren: '关',
      defaultChecked: false,
      size: 'default',
      disabled: false,
      style: {}
    };
    return _this;
  }

  _createClass(SwitchControl, [{
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
    key: 'onChange',
    value: function onChange(value) {
      if (this.props.model) this.props.model.setData('value', value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_switch2.default, { checked: this.state.value, size: this.state.size, style: this.state.style,
        disabled: this.state.disabled, onChange: function onChange(e) {
          return _this2.onChange(e);
        }, checkedChildren: this.state.checkedChildren,
        unCheckedChildren: this.state.unCheckedChildren });
    }
  }]);

  return SwitchControl;
}(_react2.default.Component);

exports.default = SwitchControl;