'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rate = require('antd/lib/rate');

var _rate2 = _interopRequireDefault(_rate);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               属性				说明					类型			默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               count			star总数				Number		5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               value			当前数，受控值		Number		-
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               defaultValue	默认值				Number		0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               allowHalf		是否允许半选			Boolean		false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               disabled		只读，无法进行交互	Boolean		false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RateControl = function (_React$Component) {
  _inherits(RateControl, _React$Component);

  function RateControl(props) {
    _classCallCheck(this, RateControl);

    var _this = _possibleConstructorReturn(this, (RateControl.__proto__ || Object.getPrototypeOf(RateControl)).call(this, props));

    _this.state = { value: 0, allowHalf: true, disabled: false, count: 10, showcount: false };
    return _this;
  }

  _createClass(RateControl, [{
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
    key: 'handleChange',
    value: function handleChange(number) {
      if (this.props.model) this.props.model.setData('value', number);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.state.showcount ? _react2.default.createElement(
        'span',
        { className: 'ant-rate-text' },
        this.state.value,
        ' \u661F'
      ) : '';
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_rate2.default, { allowHalf: this.state.allowHalf, disabled: this.state.disable, count: this.state.count, value: this.state.value, onChange: function onChange(e) {
            return _this2.handleChange(e);
          } }),
        data
      );
    }
  }]);

  return RateControl;
}(_react2.default.Component);

exports.default = RateControl;