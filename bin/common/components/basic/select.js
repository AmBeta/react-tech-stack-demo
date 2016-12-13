'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectControl = function (_React$Component) {
  _inherits(SelectControl, _React$Component);

  function SelectControl(props) {
    _classCallCheck(this, SelectControl);

    var _this = _possibleConstructorReturn(this, (SelectControl.__proto__ || Object.getPrototypeOf(SelectControl)).call(this, props));

    _this.state = {
      valueField: 'value',
      textField: 'text',
      text: '',
      options: [],
      value: undefined, //指定当前选中的条目 String/Array/{key: String, label: React.Node}/Array<{key, label}>
      defaultValue: [], //指定默认选中的条目 String/Array/{key: String, label: React.Node}/Array<{key, label}>
      multiple: false, //支持多选 boolean
      combobox: false, //输入框自动提示模式 boolean
      allowClear: false, //支持清除, 单选模式有效 boolean
      filterOption: true, //是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。  boolean or function(inputValue, option) true
      tags: false, // 可以把随意输入的条目作为 tag，输入项不需要与下拉选项匹配  boolean
      placeholder: null, //选择框默认文字  string
      notFoundContent: '未找到', //当下拉列表为空时显示的内容 string
      dropdownMatchSelectWidth: true, //下拉菜单和选择器同宽  boolean
      optionFilterProp: 'children', //搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索  string  value
      size: 'default', //输入框大小，可选 large default small
      disabled: false
    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(SelectControl, [{
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
    key: 'setData',
    value: function setData(data) {
      var states = {};
      for (var attr in data) {
        if (attr === 'dataSource') {
          states['options'] = data[attr];
        } else {
          states[attr] = data[attr];
        }
      }
      this.setState(states);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var valueField = this.state.valueField;
      var textField = this.state.textField;
      var states = {};
      var keys = [];
      var texts = [];
      value.forEach(function (item) {
        if (!item) return;
        keys.push(item[valueField]);
        texts.push(item[textField]);
      });
      states['value'] = keys;
      states['text'] = texts.join(',');
      this.setState(states);
    }
  }, {
    key: 'onSelect',
    value: function onSelect(value, option) {}
  }, {
    key: 'onDeselect',
    value: function onDeselect(value) {}
  }, {
    key: 'onSearch',
    value: function onSearch(value) {}
  }, {
    key: 'onChange',
    value: function onChange(value) {
      if (this.props.model) this.props.model.select(value);
    }
  }, {
    key: 'getOptions',
    value: function getOptions() {
      var valueField = this.state.valueField;
      var textField = this.state.textField;
      return this.state.options.map(function (item, index) {
        if (item.optGroup) {
          return _react2.default.createElement(
            _select2.default.OptGroup,
            { key: index, label: item.optGroup.label },
            item.optGroup.options.map(function (opt) {
              return _react2.default.createElement(
                _select2.default.Option,
                { key: opt.value, text: opt.text },
                opt.text
              );
            })
          );
        } else {
          return _react2.default.createElement(
            _select2.default.Option,
            { key: item[valueField], text: item[textField] },
            item[textField]
          );
        }
      });
    }
  }, {
    key: 'baseControl',
    value: function baseControl() {
      if (this.state.readOnly) return _react2.default.createElement(
        'label',
        null,
        this.state.text
      );
      var cProps = {
        value: this.state.value,
        defaultValue: this.state.defaultValue,
        multiple: this.state.multiple,
        combobox: this.state.combobox,
        allowClear: this.state.allowClear,
        tags: this.state.tags,
        placeholder: this.state.placeholder,
        notFoundContent: this.state.notFoundContent,
        dropdownMatchSelectWidth: this.state.dropdownMatchSelectWidth,
        size: this.state.size,
        onChange: this.onChange,
        onSelect: this.onSelect,
        onDeselect: this.onDeselect,
        onSearch: this.onSearch,
        optionFilterProp: this.state.optionFilterProp,
        optionLabelProp: this.state.optionLabelProp,
        disabled: this.state.disabled
      };
      var options = this.getOptions();
      return _react2.default.createElement(
        _select2.default,
        cProps,
        options
      );
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

  return SelectControl;
}(_react2.default.Component);

exports.default = SelectControl;