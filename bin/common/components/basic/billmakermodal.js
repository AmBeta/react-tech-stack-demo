'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _view = require('./view.js');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var MenuItem = _menu2.default.Item;
var MenuItemGroup = _menu2.default.ItemGroup;

var BillMakerModal = function (_React$Component) {
	_inherits(BillMakerModal, _React$Component);

	function BillMakerModal(props) {
		_classCallCheck(this, BillMakerModal);

		var _this = _possibleConstructorReturn(this, (BillMakerModal.__proto__ || Object.getPrototypeOf(BillMakerModal)).call(this, props));

		_this.state = {
			value: '',
			title: _this.props.title,
			visible: _this.props.visible
		};
		return _this;
	}

	_createClass(BillMakerModal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				visible: nextProps.visible
			});
		}
	}, {
		key: 'handleCancel',
		value: function handleCancel() {
			this.props.close();
		}
	}, {
		key: 'handleOk',
		value: function handleOk() {
			this.props.close();
			if (this.props.data.vm) {
				this.props.data.vm.okClick();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var width = document.body.clientWidth;
			var height = document.body.clientHeight;
			var modalContent = _react2.default.createElement(
				_modal2.default,
				{ style: { top: 0, height: height }, maskClosable: false, title: this.props.title, visible: true, onOk: function onOk(e) {
						return _this2.handleOk();
					}, onCancel: function onCancel(e) {
						return _this2.handleCancel();
					}, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88', width: width },
				_react2.default.createElement(
					_row2.default,
					null,
					_react2.default.createElement(_view2.default, { width: width - 50, vm: this.props.data.vm, metaData: this.props.data.viewmeta })
				)
			);
			return modalContent;
		}
	}]);

	return BillMakerModal;
}(_react2.default.Component);

exports.default = BillMakerModal;