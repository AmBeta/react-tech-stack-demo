'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               参数	                      说明	               类型	默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               defaultValue	默认选中的选项	array		[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               value	              指定选中的选项	array		[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               options	              指定可选项	    array		[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               onChange	       变化时回调函数	Function(checkedValue)	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var CheckGroup = _checkbox2.default.Group;

var CheckboxGroup = function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        _classCallCheck(this, CheckboxGroup);

        var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

        _this.state = { value: [], options: [{ label: '苹果', value: 'Apple' }, { label: '梨', value: 'Pear' }, { label: '橘', value: 'Orange', disabled: true }] };
        return _this;
    }

    _createClass(CheckboxGroup, [{
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
        value: function handleChange(e) {
            if (this.props.model) this.props.model.setData('value', e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(CheckGroup, { value: this.state.value, options: this.state.options, onChange: function onChange(e) {
                    return _this2.handleChange(e);
                } });
        }
    }]);

    return CheckboxGroup;
}(_react2.default.Component);

exports.default = CheckboxGroup;