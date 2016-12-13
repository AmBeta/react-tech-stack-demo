'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _progress = require('antd/lib/progress');

var _progress2 = _interopRequireDefault(_progress);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //进度条


var ProgressControl = function (_React$Component) {
    _inherits(ProgressControl, _React$Component);

    function ProgressControl(props) {
        _classCallCheck(this, ProgressControl);

        var _this = _possibleConstructorReturn(this, (ProgressControl.__proto__ || Object.getPrototypeOf(ProgressControl)).call(this, props));

        _this.state = { type: 'line', percent: 0, status: 'active', showInfo: true, strokeWidth: 10, width: 132 };
        return _this;
    }

    _createClass(ProgressControl, [{
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
        key: 'format',
        value: function format(percent) {
            return percent + '%';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_progress2.default, { type: this.state.type, percent: this.state.percent, format: this.format, status: this.state.status, showInfo: this.state.showInfo, strokeWidth: this.state.strokeWidth, width: this.state.width });
        }
    }]);

    return ProgressControl;
}(_react2.default.Component);

exports.default = ProgressControl;