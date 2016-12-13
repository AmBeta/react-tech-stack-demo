'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               参数        	       		说明					类型				默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               value	              	日期					string or Date	无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               defaultValue			默认日期				string or Date	无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               format					展示的日期格式		string			"yyyy-MM-dd"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               disabledDate			不可选择的日期		function	无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               disabled				禁用	bool			false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               style					自定义输入框样式		object	{}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               popupStyle				格外的弹出日历样式	object	{}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               size					输入框大小，large 高度为 32px，small 为 22px，默认是 28px	string	无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               locale					国际化配置								object	默认配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               onOk					点击确定按钮的回调						function(Date value)	无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               toggleOpen				弹出日历和关闭日历的回调					function(status)	无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               getCalendarContainer	定义浮层的容器，默认为 body 上新建 div		function(trigger)	无
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               showTime				增加时间选择功能							Object or Boolean	TimePicker Options
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var DatePickerControl = function (_React$Component) {
  _inherits(DatePickerControl, _React$Component);

  function DatePickerControl(props) {
    _classCallCheck(this, DatePickerControl);

    var _this = _possibleConstructorReturn(this, (DatePickerControl.__proto__ || Object.getPrototypeOf(DatePickerControl)).call(this, props));

    _this.state = { value: new Date(), format: 'yyyy-MM-dd', disabled: false, style: {}, size: 'default', locale: '', showTime: '' };
    Date.prototype.format = function (format) {
      var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
      };

      if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
      }
      return format;
    };
    return _this;
  }

  _createClass(DatePickerControl, [{
    key: 'dateFormat',
    value: function dateFormat(value, format) {
      if (this.state.value instanceof Date) {
        return value.format(format);
      } else {
        return value;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.model) {
        this.props.model.addListener(this);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.model) this.props.model.removeListener(this);
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      if (this.props.model) {
        value = !!value && value.format('yyyy-MM-dd');
        this.props.model.setData('value', value);
      }
    }
  }, {
    key: 'onOk',
    value: function onOk(Date, value) {}
  }, {
    key: 'toggleOpen',
    value: function toggleOpen(status) {
      if (this.props.model) {
        this.props.model.fireEvent('toggleOpen');
      }
    }
  }, {
    key: 'baseControl',
    value: function baseControl() {
      var _this2 = this;

      var baseControl = void 0;
      if (this.state.readOnly) {
        var value = this.dateFormat(this.state.value, this.state.format);
        baseControl = _react2.default.createElement(
          'label',
          null,
          ' ',
          value,
          ' '
        );
      } else {
        baseControl = _react2.default.createElement(_datePicker2.default, { toggleOpen: function toggleOpen(e) {
            return _this2.toggleOpen(e);
          }, onOk: this.onOk, showTime: this.state.showTime, locale: this.state.locale, size: this.state.size, style: this.state.style, disabled: this.state.disabled, format: this.state.format, value: this.state.value, onChange: function onChange(e) {
            return _this2.onChange(e);
          } });
      }

      return baseControl;
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

  return DatePickerControl;
}(_react2.default.Component);

exports.default = DatePickerControl;