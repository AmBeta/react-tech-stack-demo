'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               参数              说明                                          类型                  可选值                         默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               type            【必须】声明 input 类型                     string                                              'text'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               id              id                                          number 或 string
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               value           value 值                                     any
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               defaultValue    设置初始默认值                             any
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               size            控件大小                                        string              {'large','default','small'}     'default'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               disabled        是否禁用状态，默认为 false                    bool                                                false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               addonBefore     带标签的 input，设置前置标签                   node
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               addonAfter      带标签的 input，设置后置标签                   node
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               onPressEnter    按下回车的回调 function(e)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               autosize        自适应内容高度，只对 type="textarea" 有效       bool or object  true or { minRows: 2, maxRows: 6 }  false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputControl = function (_React$Component) {
  _inherits(InputControl, _React$Component);

  function InputControl(props) {
    _classCallCheck(this, InputControl);

    var _this = _possibleConstructorReturn(this, (InputControl.__proto__ || Object.getPrototypeOf(InputControl)).call(this, props));

    _this.state = {
      value: props.defaultValue, type: 'defalut', size: 'default', disabled: false, addonBefore: '', addonAfter: '',
      placeholder: '', autosize: false
    };
    _this.onPressEnter = _this.onPressEnter.bind(_this);
    return _this;
  }

  _createClass(InputControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.model) this.props.model.addListener(this);
      if (this.props.focus) this.refs.input.refs.input.focus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.model) this.props.model.removeListener(this);
    }
    //render前

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {}
    //render后

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {}
    // 监听外部props的变化, 如果变化了需要更新组件的state

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      // if (this.props.model) {
      // 		this.props.model.setData('value', e.target.value);
      // } else {
      this.setState({
        value: e.target.value
      });
      // }
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(e) {
      if (this.props.model) this.props.model.setValue({ mode: 'blur', data: e.target.value });
    }
  }, {
    key: 'onPressEnter',
    value: function onPressEnter(e) {
      if (this.props.model) this.props.model.setValue({ mode: 'enter', data: e.target.value });
    }
  }, {
    key: 'baseControl',
    value: function baseControl() {
      var _this2 = this;

      return this.state.readOnly ? _react2.default.createElement(
        'label',
        null,
        ' ',
        this.state.value,
        ' '
      ) : _react2.default.createElement(_input2.default, { ref: 'input', autosize: this.props.autosize, placeholder: this.props.placeholder, type: this.props.type, size: this.props.size, disabled: this.props.disabled, addonBefore: this.props.addonBefore, addonAfter: this.props.addonAfter, onPressEnter: this.onPressEnter, value: this.state.value, onBlur: function onBlur(e) {
          return _this2.handleInputBlur(e);
        }, onChange: function onChange(e) {
          return _this2.handleInputChange(e);
        } });
    }
  }, {
    key: 'getControl',
    value: function getControl() {
      var control = this.props.cShowCaption ? (0, _label2.default)(this.baseControl(), this.props.cShowCaption) : this.baseControl();
      return control;
    }
  }, {
    key: 'render',
    value: function render() {
      var control = this.getControl();
      return _react2.default.createElement(
        'div',
        null,
        control
      );
    }
  }]);

  return InputControl;
}(_react2.default.Component);

exports.default = InputControl;