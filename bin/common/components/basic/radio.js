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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               参数				说明									类型			默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               checked			指定当前是否选中						Boolean		false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               defaultChecked	初始是否选中							Boolean		false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               value			根据 value 进行比较，判断是否选中		String		无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RadioControl = function (_React$Component) {
    _inherits(RadioControl, _React$Component);

    function RadioControl(props) {
        _classCallCheck(this, RadioControl);

        var _this = _possibleConstructorReturn(this, (RadioControl.__proto__ || Object.getPrototypeOf(RadioControl)).call(this, props));

        _this.state = { value: '这是一个radio...', checked: '' };
        return _this;
    }

    _createClass(RadioControl, [{
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
            if (this.props.model) this.props.model.setData('checked', e.target.checked);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _radio2.default,
                { onChange: function onChange(e) {
                        return _this2.handleInputChange(e);
                    } },
                this.state.value
            );
        }
    }]);

    return RadioControl;
}(_react2.default.Component);

exports.default = RadioControl;