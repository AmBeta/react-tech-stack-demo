'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TooltipControl = function (_React$Component) {
  _inherits(TooltipControl, _React$Component);

  function TooltipControl(props) {
    _classCallCheck(this, TooltipControl);

    var _this = _possibleConstructorReturn(this, (TooltipControl.__proto__ || Object.getPrototypeOf(TooltipControl)).call(this, props));

    _this.state = {
      title: 'hehe1',
      html: '<span></span>',
      placement: 'top'
    };
    return _this;
  }

  _createClass(TooltipControl, [{
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
    key: 'getTooltipContainer',
    value: function getTooltipContainer() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _tooltip2.default,
        { placement: 'topLeft', title: this.state.title },
        _react2.default.createElement(
          'span',
          null,
          this.state.html
        )
      );
    }
  }]);

  return TooltipControl;
}(_react2.default.Component);

exports.default = TooltipControl;