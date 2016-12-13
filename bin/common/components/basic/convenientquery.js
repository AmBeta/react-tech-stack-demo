'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _searchbox = require('./searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import QuerySchemeManager from '../QuerySchemeManager';

var TabPane = _tabs2.default.TabPane;

var QueryItemContent = function (_React$Component) {
    _inherits(QueryItemContent, _React$Component);

    function QueryItemContent(props) {
        _classCallCheck(this, QueryItemContent);

        var _this = _possibleConstructorReturn(this, (QueryItemContent.__proto__ || Object.getPrototypeOf(QueryItemContent)).call(this, props));

        _this.state = {
            visible: false,
            modalVisible: false,
            metaData: _this.props.metaData
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(QueryItemContent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                modalVisible: props.modalVisible
            });
        }
    }, {
        key: 'handleMoreClick',
        value: function handleMoreClick() {
            this.setState({
                modalVisible: true
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var params = this.props.metaData.vm.getData({});
            params.solutionid = this.props.metaData.tabKey;

            if (this.props.metaData.vm) this.props.metaData.vm.searchEvent(params);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var self = this;
            var rowArray = new Array();
            var qvlength = this.props.metaData.QuickView && this.props.metaData.QuickView.Controls.length;
            var getCtrlModel = function getCtrlModel(fieldName) {
                var ctrlModel = null;
                ctrlModel = self.props.metaData.CommonModel.length && self.props.metaData.CommonModel.filter(function (item) {
                    return item.ItemName == fieldName;
                });
                return ctrlModel && ctrlModel.length ? ctrlModel[0] : null;
            };
            this.props.metaData.QuickView && this.props.metaData.QuickView.Controls.forEach(function (item, index) {
                var ctrlModel = getCtrlModel(item.itemName);
                if (index < 6 && ctrlModel) {
                    var rowItem = _react2.default.createElement(
                        _col2.default,
                        { span: 8 },
                        _react2.default.createElement(_input2.default, { cShowCaption: ctrlModel.cShowCaption, title: item.itemTitle, model: self.props.metaData.vm.get(item.itemName) })
                    );
                    rowArray.push(rowItem);
                }
            });
            return _react2.default.createElement(
                _row2.default,
                { className: this.props.visible ? 'hide' : 'show' },
                _react2.default.createElement(
                    _col2.default,
                    { span: 18 },
                    _react2.default.createElement(
                        _row2.default,
                        null,
                        rowArray
                    )
                ),
                _react2.default.createElement(
                    _col2.default,
                    { span: 6 },
                    qvlength > 4 ? _react2.default.createElement(_row2.default, null) : null,
                    _react2.default.createElement(
                        _row2.default,
                        null,
                        _react2.default.createElement(
                            _col2.default,
                            { span: 6 },
                            _react2.default.createElement(
                                _button2.default,
                                { type: 'primary', onClick: function onClick(e) {
                                        return _this2.handleClick(e);
                                    }, className: 'no-border-radius' },
                                '\u786E\u5B9A'
                            )
                        ),
                        _react2.default.createElement(
                            _col2.default,
                            { span: 12 },
                            _react2.default.createElement(
                                _button2.default,
                                { type: 'ghost', onClick: function onClick(e) {
                                        return _this2.handleMoreClick(e);
                                    }, className: 'no-border' },
                                '\u66F4\u591A\u67E5\u8BE2\u6761\u4EF6'
                            ),
                            _react2.default.createElement(QueryModal, { modalVisible: this.state.modalVisible, title: '\u65B9\u6848\u8BE6\u60C5', metaData: this.props.metaData })
                        )
                    )
                )
            );
        }
    }]);

    return QueryItemContent;
}(_react2.default.Component);

;

var QueryModal = function (_React$Component2) {
    _inherits(QueryModal, _React$Component2);

    function QueryModal(props) {
        _classCallCheck(this, QueryModal);

        var _this3 = _possibleConstructorReturn(this, (QueryModal.__proto__ || Object.getPrototypeOf(QueryModal)).call(this, props));

        _this3.state = {
            title: _this3.props.title,
            visible: false,
            isShowMore: false
        };
        return _this3;
    }

    _createClass(QueryModal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                visible: props.modalVisible
            });
        }
    }, {
        key: 'handleOk',
        value: function handleOk() {
            this.setState({
                visible: false
            });
            var params = this.props.metaData.vm.getData({});
            params.solutionid = this.props.metaData.tabKey;

            if (this.props.metaData.vm) this.props.metaData.vm.searchEvent(params);
        }
    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            this.setState({
                visible: false
            });
        }
    }, {
        key: 'handleMoreClick',
        value: function handleMoreClick(e) {
            this.setState({
                isShowMore: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var self = this;
            var fieldsArray = new Array();
            var getCtrlModel = function getCtrlModel(fieldName) {
                var ctrlModel = null;
                ctrlModel = self.props.metaData.CommonModel.length && self.props.metaData.CommonModel.filter(function (item) {
                    return item.ItemName == fieldName;
                });
                return ctrlModel && ctrlModel.length ? ctrlModel[0] : null;
            };
            if (this.props.metaData.CommonView) {
                for (var i = 0; i < this.props.metaData.CommonView.Controls.length; i++) {
                    if (!this.state.isShowMore && i > 8) {
                        var _rowItem = _react2.default.createElement(
                            _col2.default,
                            { span: 20 },
                            _react2.default.createElement(
                                _button2.default,
                                { type: 'ghost', value: '\u5C55\u5F00\u66F4\u591A\u67E5\u8BE2\u6761\u4EF6', onClick: function onClick(e) {
                                        return _this4.handleMoreClick(e);
                                    } },
                                '\u5C55\u5F00\u66F4\u591A\u67E5\u8BE2\u6761\u4EF6'
                            )
                        );
                        fieldsArray.push(_rowItem);
                        break;
                    }
                    var item = this.props.metaData.CommonView.Controls[i];
                    var ctrlModel = getCtrlModel(item.itemName);
                    var rowItem = _react2.default.createElement(
                        _col2.default,
                        { span: 20 },
                        _react2.default.createElement(_input2.default, { cShowCaption: ctrlModel.cShowCaption, title: item.itemTitle, model: self.props.metaData.vm.get(item.itemName) })
                    );
                    fieldsArray.push(rowItem);
                }
            }

            return _react2.default.createElement(
                _modal2.default,
                { title: this.state.title, visible: this.state.visible, onOk: function onOk(e) {
                        return _this4.handleOk();
                    }, onCancel: function onCancel(e) {
                        return _this4.handleCancel();
                    }, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88' },
                _react2.default.createElement(
                    _row2.default,
                    { type: 'flex', justify: 'center' },
                    fieldsArray
                )
            );
        }
    }]);

    return QueryModal;
}(_react2.default.Component);

;

var ConvenientQuery = function (_React$Component3) {
    _inherits(ConvenientQuery, _React$Component3);

    function ConvenientQuery(props) {
        _classCallCheck(this, ConvenientQuery);

        var _this5 = _possibleConstructorReturn(this, (ConvenientQuery.__proto__ || Object.getPrototypeOf(ConvenientQuery)).call(this, props));

        _this5.state = {
            visible: true,
            metaData: {},
            menuData: []
        };
        return _this5;
    }

    _createClass(ConvenientQuery, [{
        key: 'handleAreaClick',
        value: function handleAreaClick() {
            this.setState({
                visible: !this.state.visible
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            var proxy = cb.rest.DynamicProxy.create({
                getSolutionList: {
                    url: 'filterDesign/getSolutionList.do',
                    method: 'POST',
                    options: {
                        token: true
                    }
                }
            });
            proxy.getSolutionList({ filterId: self.props.model.getParams().filterId }, function (err, data) {
                if (err) {
                    console.error(err.message);
                    return;
                }
                self.setState({ menuData: data });
                if (data.length) self.handleMenuClick(data[0].id);
            });
        }
    }, {
        key: 'handleMenuClick',
        value: function handleMenuClick(key) {
            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object') key = key.key;
            if (key == 'manage') {
                var filterId = this.props.model.getParams().filterId;
                this.refs.querySchemeManager.mergedProps.fetchQuerySchemes(filterId);
            }
            var self = this;
            var proxy = cb.rest.DynamicProxy.create({
                getCommonFilters: {
                    url: 'filter/getcommonfilters.do',
                    method: 'GET',
                    options: {
                        unsure: false
                    }
                }
            });
            proxy.getCommonFilters({ solutionid: key }, function (err, data) {
                if (err) {
                    console.error(err.message);
                    return;
                }
                var newvmFunc = new Function(data.vm);
                newvmFunc();
                data.vm = new cb.viewmodels[data.vmName]();
                data.tabKey = key;
                self.setState({ metaData: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var tabItem = new Array();
            var menuItem = new Array();

            if (this.state.menuData.length) {
                this.state.menuData.map(function (item, index) {
                    if (index < 5) tabItem.push(_react2.default.createElement(TabPane, { tab: item.solutionName, key: item.id }));else menuItem.push(_react2.default.createElement(
                        _menu2.default.Item,
                        { key: item.id },
                        item.solutionName
                    ));
                });
            }
            var menu = _react2.default.createElement(
                _menu2.default,
                { onClick: function onClick(e) {
                        return _this6.handleMenuClick(e);
                    } },
                menuItem,
                _react2.default.createElement(_menu2.default.Divider, null),
                _react2.default.createElement(
                    _menu2.default.Item,
                    { key: 'manage' },
                    '\u7BA1\u7406\u65B9\u6848'
                )
            );
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _row2.default,
                    { className: 'common-query-row' },
                    _react2.default.createElement(
                        _col2.default,
                        { span: 15 },
                        _react2.default.createElement(
                            _tabs2.default,
                            { defaultActiveKey: this.state.menuData.length ? this.state.menuData[0].id : '0', onChange: function onChange(e) {
                                    return _this6.handleMenuClick(e);
                                } },
                            tabItem
                        )
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: 2 },
                        _react2.default.createElement(
                            _dropdown2.default,
                            { overlay: menu },
                            _react2.default.createElement(_button2.default, { type: 'ghost', shape: 'circle', icon: 'ellipsis', className: 'no-border' })
                        ),
                        _react2.default.createElement(_button2.default, { type: 'ghost', shape: 'circle', icon: 'plus', className: 'no-border' })
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: 4 },
                        _react2.default.createElement(_searchbox2.default, { placeholder: '\u5355\u53F7/\u5BA2\u6237/\u8054\u7CFB\u4EBA/\u7269\u6599' })
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: 2 },
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'ghost', className: 'no-border', onClick: function onClick(e) {
                                    return _this6.handleAreaClick();
                                } },
                            '\u5C55\u5F00\u67E5\u8BE2\u6761\u4EF6',
                            _react2.default.createElement(_icon2.default, { type: this.state.visible ? 'down' : 'up' })
                        )
                    )
                ),
                _react2.default.createElement(QueryItemContent, { visible: this.state.visible, metaData: this.state.metaData }),
                _react2.default.createElement(QuerySchemeManager, { ref: 'querySchemeManager' })
            );
        }
    }]);

    return ConvenientQuery;
}(_react2.default.Component);

exports.default = ConvenientQuery;