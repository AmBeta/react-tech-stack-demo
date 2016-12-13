'use strict';

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by wxk on 2016/8/8.
 */
var InputGroup = _input2.default.Group;

var SearchInput = React.createClass({
  displayName: 'SearchInput',
  getInitialState: function getInitialState() {
    return {
      value: '',
      focus: false
    };
  },
  handleInputChange: function handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  },
  handleFocusBlur: function handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement
    });
  },
  handleSearch: function handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.value);
    }
  },
  render: function render() {
    var _props = this.props,
        style = _props.style,
        size = _props.size,
        placeholder = _props.placeholder;

    var btnCls = (0, _classnames2.default)({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim()
    });
    var searchCls = (0, _classnames2.default)({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus
    });
    return React.createElement(
      'div',
      { className: 'ant-search-input-wrapper', style: style },
      React.createElement(
        InputGroup,
        { className: searchCls },
        React.createElement(_input2.default, { placeholder: placeholder, value: this.state.value, onChange: this.handleInputChange,
          onFocus: this.handleFocusBlur, onBlur: this.handleFocusBlur, onPressEnter: this.handleSearch
        }),
        React.createElement(
          'div',
          { className: 'ant-input-group-wrap' },
          React.createElement(_button2.default, { icon: 'search', className: btnCls, size: size, onClick: this.handleSearch })
        )
      )
    );
  }
});