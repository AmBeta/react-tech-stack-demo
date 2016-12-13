'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               成员				说明						类型				默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               min				最小值					Number			-Infinity
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               max				最大值					Number			Infinity
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               value			当前值					Number	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               step			每次改变步数，可以为小数	Number or String	1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               defaultValue	初始值					Number		
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               disabled		禁用						Boolean			false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               size			输入框大小				String			无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputNumberControl = function (_React$Component) {
    _inherits(InputNumberControl, _React$Component);

    function InputNumberControl(props) {
        _classCallCheck(this, InputNumberControl);

        var _this = _possibleConstructorReturn(this, (InputNumberControl.__proto__ || Object.getPrototypeOf(InputNumberControl)).call(this, props));

        _this.state = { value: '', min: -999999999, max: 999999999, step: 1, disabled: false, size: 'default' };
        return _this;
    }

    _createClass(InputNumberControl, [{
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

            return _react2.default.createElement(_inputNumber2.default, { min: this.state.min, max: this.state.max, step: this.state.step, disabled: this.state.disabled, size: this.state.size, value: this.state.value, onChange: function onChange(e) {
                    return _this2.onChange(e);
                } });
        }
    }]);

    return InputNumberControl;
}(_react2.default.Component);

exports.default = InputNumberControl;