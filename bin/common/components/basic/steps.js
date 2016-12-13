'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _steps = require('antd/lib/steps');

var _steps2 = _interopRequireDefault(_steps);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = _steps2.default.Step;

var StepsControl = function (_React$Component) {
	_inherits(StepsControl, _React$Component);

	function StepsControl(props) {
		_classCallCheck(this, StepsControl);

		var _this = _possibleConstructorReturn(this, (StepsControl.__proto__ || Object.getPrototypeOf(StepsControl)).call(this, props));

		_this.state = {
			direction: '',
			current: 1,
			size: 'default',
			data: [{ status: 'finish', title: '已完成' }, { status: 'process', title: '进行中' }, { status: 'wait', title: '待运行' }, { status: 'wait', title: '待运行' }]
		};
		return _this;
	}

	_createClass(StepsControl, [{
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
		key: 'render',
		value: function render() {
			var steps = this.state.data.map(function (item, index) {
				if (item.icon) return _react2.default.createElement(Step, { key: index, title: item.title, description: item.description, icon: item.icon });else return _react2.default.createElement(Step, { key: index, title: item.title, description: item.description });
			});

			return _react2.default.createElement(
				_steps2.default,
				{ direction: this.state.direction, current: this.state.current, size: this.state.size, status: this.state.status },
				steps
			);
		}
	}]);

	return StepsControl;
}(_react2.default.Component);

exports.default = StepsControl;
;