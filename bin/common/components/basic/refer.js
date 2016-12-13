'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _popover = require('antd/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _tree = require('./tree');

var _tree2 = _interopRequireDefault(_tree);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _searchbox = require('./searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = _input2.default.Group;
var ButtonGroup = _button2.default.Group;

var TopToolBar = function (_React$Component) {
  _inherits(TopToolBar, _React$Component);

  function TopToolBar(props) {
    _classCallCheck(this, TopToolBar);

    var _this = _possibleConstructorReturn(this, (TopToolBar.__proto__ || Object.getPrototypeOf(TopToolBar)).call(this, props));

    _this.state = {
      vm: _this.props.vm
    };
    return _this;
  }

  _createClass(TopToolBar, [{
    key: 'render',
    value: function render() {
      var popContent = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            null,
            '\u5347\u5E8F\u6392\u5217'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            null,
            '\u964D\u5E8F\u6392\u5217'
          )
        )
      );
      return _react2.default.createElement(
        _row2.default,
        null,
        _react2.default.createElement(
          _col2.default,
          { span: 8 },
          _react2.default.createElement(_searchbox2.default, { placeholder: '\u8BF7\u8F93\u5165', model: this.props.vm.get('searchBox') })
        ),
        _react2.default.createElement(
          _col2.default,
          { span: 6, offset: 10 },
          _react2.default.createElement(
            _popover2.default,
            { content: popContent, title: '\u6807\u9898', placement: 'bottom', trigger: 'hover' },
            _react2.default.createElement(_button2.default, { type: 'ghost', icon: 'filter', shape: 'circle-outline' })
          ),
          _react2.default.createElement(_button2.default, { type: 'ghost', icon: 'reload', shape: 'circle-outline', model: this.props.vm.get('reload') }),
          _react2.default.createElement(_button2.default, { type: 'ghost', icon: 'setting', shape: 'circle-outline', model: this.props.vm.get('setting') })
        )
      );
    }
  }]);

  return TopToolBar;
}(_react2.default.Component);

;

var ReferModal = function (_React$Component2) {
  _inherits(ReferModal, _React$Component2);

  function ReferModal(props) {
    _classCallCheck(this, ReferModal);

    var _this2 = _possibleConstructorReturn(this, (ReferModal.__proto__ || Object.getPrototypeOf(ReferModal)).call(this, props));

    _this2.state = {
      value: '',
      title: _this2.props.title,
      visible: _this2.props.visible
    };
    return _this2;
  }

  _createClass(ReferModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      //nextProps.vm.get('table').addListener(this.refs.table);
      //nextProps.vm.get('tree').addListener(this.refs.tree);
      this.setState({
        visible: nextProps.visible
      });
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.props.close();
      // this.setState({
      // 	visible:false
      // });
    }
  }, {
    key: 'handleOk',
    value: function handleOk() {
      this.props.close();
      if (this.props.vm) this.props.vm.okClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var referType = this.props.referType;
      var treeContent = '';
      var cardContent = '';
      if (referType == 'Tree') {
        treeContent = _react2.default.createElement(
          _col2.default,
          { span: 20, offset: 2 },
          _react2.default.createElement(
            _row2.default,
            null,
            _react2.default.createElement(
              _col2.default,
              null,
              _react2.default.createElement(TopToolBar, { vm: this.props.vm })
            )
          ),
          _react2.default.createElement(
            _row2.default,
            null,
            _react2.default.createElement(
              _col2.default,
              { span: 12 },
              _react2.default.createElement(_tree2.default, { model: this.props.vm.get('tree') })
            )
          )
        );
      } else if (referType == 'TreeTable') {
        treeContent = _react2.default.createElement(
          _col2.default,
          { span: 6 },
          _react2.default.createElement(_tree2.default, { model: this.props.vm.get('tree') })
        );
        cardContent = _react2.default.createElement(
          _col2.default,
          { span: 18 },
          _react2.default.createElement(TopToolBar, { vm: this.props.vm }),
          _react2.default.createElement(
            _row2.default,
            null,
            _react2.default.createElement(
              _col2.default,
              null,
              _react2.default.createElement(_table2.default, { ref: 'table', model: this.props.vm.get('table'), width: 600 })
            )
          )
        );
      } else if (referType == 'Table') {
        cardContent = _react2.default.createElement(
          _col2.default,
          { span: 22, offset: 1 },
          _react2.default.createElement(
            _row2.default,
            null,
            _react2.default.createElement(TopToolBar, { vm: this.props.vm })
          ),
          _react2.default.createElement(
            _row2.default,
            null,
            _react2.default.createElement(_table2.default, { ref: 'table', model: this.props.vm.get('table'), width: 800 })
          )
        );
      }

      var modalContent = _react2.default.createElement(
        _modal2.default,
        { title: this.props.title, visible: this.state.visible, onOk: function onOk(e) {
            return _this3.handleOk();
          }, onCancel: function onCancel(e) {
            return _this3.handleCancel();
          }, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88', width: this.props.width },
        _react2.default.createElement(
          _row2.default,
          null,
          treeContent,
          cardContent
        )
      );
      var emptyContent = _react2.default.createElement('div', null);
      return this.props.vm && this.props.referType ? modalContent : emptyContent;
    }
  }]);

  return ReferModal;
}(_react2.default.Component);

var ReferControl = function (_React$Component3) {
  _inherits(ReferControl, _React$Component3);

  function ReferControl(props) {
    _classCallCheck(this, ReferControl);

    var _this4 = _possibleConstructorReturn(this, (ReferControl.__proto__ || Object.getPrototypeOf(ReferControl)).call(this, props));

    _this4.state = {
      focus: false,
      modalVisible: false,
      value: '',
      referType: '',
      width: 600,
      title: '参照'
    };
    _this4.onClick = _this4.onClick.bind(_this4);
    _this4.close = _this4.close.bind(_this4);
    _this4.handleBodyClick = _this4.handleBodyClick.bind(_this4);
    return _this4;
  }

  _createClass(ReferControl, [{
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
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: 'handleBodyClick',
    value: function handleBodyClick(e) {
      var input = this.refs.input.refs.input;
      var button = this.refs.div.children[0];
      var icon = button.children[0];
      if (e.target === input) return;
      document.body.removeEventListener('click', this.handleBodyClick);
      if (e.target === button || e.target === icon) return;
      if (this.props.model) this.props.model.execute('blur');
    }
  }, {
    key: 'handleFocusBlur',
    value: function handleFocusBlur(e) {
      document.body.addEventListener('click', this.handleBodyClick);
    }
  }, {
    key: 'open',
    value: function open(e) {
      var width = 820;
      if (e.referType == 'Tree') {
        width = 620;
      }
      this.setState({
        referType: e.referType,
        width: width,
        vm: e.vm,
        modalVisible: true
      });
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.props.focus) this.refs.input.refs.input.focus();
      this.setState({ modalVisible: false });
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      document.body.removeEventListener('click', this.handleBodyClick);
      this.setState({
        value: value
      });
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (this.props.model) this.props.model.browse();
    }
  }, {
    key: 'handleOnPressEnter',
    value: function handleOnPressEnter(e) {
      if (this.props.model) this.props.model.fireEvent('pressEnter', this.state.value);
    }
  }, {
    key: 'baseControl',
    value: function baseControl() {
      var _this5 = this;

      var baseControl = void 0;
      if (this.state.readOnly) {
        baseControl = _react2.default.createElement(
          'label',
          null,
          this.state.value
        );
      } else {
        var _props = this.props,
            style = _props.style,
            size = _props.size,
            placeholder = _props.placeholder;

        var referTitle = '';
        if (this.props.title) {
          referTitle = _react2.default.createElement(
            _col2.default,
            { span: 6 },
            this.props.title
          );
        }

        var btnCls = (0, _classnames2.default)({
          'ant-search-btn': true
        });

        var searchCls = (0, _classnames2.default)({
          'ant-search-input': true,
          'ant-search-input-focus': this.state.focus
        });
        //{this.props.cShowCaptionaa ? <Col span={6}>{this.props.cShowCaptionaa}</Col> : null}
        baseControl = _react2.default.createElement(
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            { span: 24 },
            _react2.default.createElement(
              'div',
              { className: 'ant-search-input-wrapper', style: style },
              _react2.default.createElement(
                InputGroup,
                { className: searchCls },
                _react2.default.createElement(_input2.default, { ref: 'input', placeholder: placeholder, value: this.state.value, onFocus: function onFocus(e) {
                    return _this5.handleFocusBlur(e);
                  }, onChange: function onChange(e) {
                    return _this5.handleInputChange(e);
                  }, onPressEnter: function onPressEnter(e) {
                    return _this5.handleOnPressEnter(e);
                  } }),
                _react2.default.createElement(
                  'div',
                  { ref: 'div', className: 'ant-input-group-wrap' },
                  _react2.default.createElement(_button2.default, { icon: 'search', className: btnCls, size: size, onClick: this.onClick }),
                  _react2.default.createElement(ReferModal, { visible: this.state.modalVisible, close: this.close, title: this.props.title ? this.props.title : '参照', vm: this.state.vm, referType: this.state.referType, width: this.state.width })
                )
              )
            )
          )
        );
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

  return ReferControl;
}(_react2.default.Component);

exports.default = ReferControl;