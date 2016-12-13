'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _transfer = require('antd/lib/transfer');

var _transfer2 = _interopRequireDefault(_transfer);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               参数					说明							类型					默认值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               dataSource			数据源						Array				[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               render				每行数据渲染函数				Function(record)	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               targetKeys			显示在右侧框数据的key集合		Array				[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               onChange			变化时回调函数				Function(targetKeys, direction, moveKeys)	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               listStyle			两个穿梭框的自定义样式		Object	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               className			自定义类						String	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               titles				标题集合,顺序从左至右			Array				['源列表', '目的列表']
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               operations			操作文案集合,顺序从上至下		Array				[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               showSearch			是否显示搜索框				Boolean				false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               searchPlaceholder	搜索框的默认值				String				'请输入搜索内容'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               notFoundContent		当列表为空时显示的内容		React.node			'列表为空'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               footer				底部渲染函数					Function(props)	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TransferControl = function (_React$Component) {
    _inherits(TransferControl, _React$Component);

    function TransferControl(props) {
        _classCallCheck(this, TransferControl);

        var _this = _possibleConstructorReturn(this, (TransferControl.__proto__ || Object.getPrototypeOf(TransferControl)).call(this, props));

        _this.state = { mockData: [], targetKeys: [], operations: [], titles: [], notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容' };
        return _this;
    }

    _createClass(TransferControl, [{
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
        value: function handleChange(targetKeys, direction, moveKeys) {
            this.props.model.setData('targetKeys', targetKeys);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_transfer2.default, { operations: this.state.operations, titles: this.state.titles, showSearch: true, notFoundContent: this.state.notFoundContent, searchPlaceholder: this.state.searchPlaceholder, dataSource: this.state.mockData, targetKeys: this.state.targetKeys, onChange: function onChange(e) {
                    return _this2.handleChange(e);
                }, render: function render(item) {
                    return item.title;
                } });
        }
    }]);

    return TransferControl;
}(_react2.default.Component);

exports.default = TransferControl;