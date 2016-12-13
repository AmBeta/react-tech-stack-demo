'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _view = require('../../components/basic/view');

var _view2 = _interopRequireDefault(_view);

var _refer = require('../../components/basic/refer');

var _refer2 = _interopRequireDefault(_refer);

var _tree = require('../../components/basic/tree');

var _tree2 = _interopRequireDefault(_tree);

var _tabs3 = require('../../components/basic/tabs');

var _tabs4 = _interopRequireDefault(_tabs3);

var _modal = require('../../redux/modules/modal');

var modalactions = _interopRequireWildcard(_modal);

var _tree3 = require('../../redux/modules/tree');

var treeactions = _interopRequireWildcard(_tree3);

var _tabs5 = require('../../redux/modules/tabs');

var tabsactions = _interopRequireWildcard(_tabs5);

var _user = require('../../redux/modules/user');

var logactions = _interopRequireWildcard(_user);

var _ActionStatus = require('../../constants/ActionStatus');

var _ActionStatus2 = _interopRequireDefault(_ActionStatus);

var _tree4 = require('../../../__mock__/tree');

var _tree5 = _interopRequireDefault(_tree4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//ReactRouter.Link

//import TitleSetting from '../TitleSetting'

//import cb from '../../..'


var SubMenu = _menu2.default.SubMenu;
var MenuItemGroup = _menu2.default.ItemGroup;
var TabPane = _tabs2.default.TabPane;
var Link = _reactRouter.Router.Link;

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        user = _this$props.user,
        logactions = _this$props.logactions;

    var jsonData = null; //cb.rest.AppContext.viewmeta;
    /*if(!user.token){
      if (user.loginStatus !== ActionStatus.SUCCEED) {
        logactions.logout();
        this.props.history.pushState(null, '/login')
        //setTimeout(()=>{}, 300)
      }
    }*/
    var panes = [{ title: '我的桌面', content: _react2.default.createElement(_refer2.default, { value: '123' }), key: '1' }];

    _this.state = {
      visible: false
    };
    console.log('treeactions');
    var _this$props2 = _this.props,
        treeactions = _this$props2.treeactions,
        tabsactions = _this$props2.tabsactions,
        modal = _this$props2.modal;

    treeactions.treeload();
    console.log('TabAdd desktop');
    tabsactions.TabAdd({ indexopen: modal.indexopen, title: '我的桌面', index: 0, content: 'index' }); //{ title: '我的桌面', index : 0,content: <Refer value="123" /> }
    //className={ant-col-xs:24,ant-col-sm-24 ant-col-md-6 ant-col-lg-4}
    _this.list = [];
    _this.tabflag = true;

    return _this;
  }

  /*defineCubeMethods = ()=>{
    if (cb.route) return;
    cb.route = {};
    let { logactions } = this.props;
    cb.route.redirectLoginPage = ()=> {
      logactions.logout();
      this.props.history.pushState(null, '/login')
    };
  }*/

  /*  add = (value,callback)=>{
  /!*    let { tree } = this.props,
        TreeNode = tree.TreeNode.viewmeta;
      if(TreeNode){*!/
        //console.log('TreeNode');
        //console.log(TreeNode);
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: value, content: <Meta metaData = {TreeNode}/>, key: activeKey });//["viewApplication"]
        this.setState({ panes, activeKey });
        //Voucher.loadPageByMenu(value);
      //}
      callback(value);
    };*/

  _createClass(Page, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          user = _props.user,
          logactions = _props.logactions;
      //if(!user.token){
      //if (user.loginStatus !== ActionStatus.SUCCEED) {
      //logactions.logout();
      //this.props.history.pushState(null, '/login')
      //setTimeout(()=>{}, 300)
      //}
      //}
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          modal = _props2.modal,
          tree = _props2.tree,
          user = _props2.user;

      var modalflag = modal['showModal'],

      //content = modal['content'],
      //modalWidth=modal.modalWidth,
      //modaltitle = modal['modaltitle'],
      TreeData = tree.TreeData;
      console.log(_tree5.default);
      TreeData = _tree5.default.data;
      /*if(!user.token) {
        if (user.loginStatus !== ActionStatus.SUCCEED) {
          this.props.history.pushState(null, '/login');
          //setTimeout(()=>{}, 300)
        }
      }*/
      return _react2.default.createElement(
        _row2.default,
        null,
        _react2.default.createElement(
          _menu2.default,
          { onClick: this.handleClick,
            mode: 'horizontal',
            theme: 'dark'
          },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: 'indextree' },
            _react2.default.createElement(_icon2.default, { type: 'bars' })
          ),
          _react2.default.createElement(
            SubMenu,
            { title: _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_icon2.default, { type: 'user' }),
                '\u6211\u7684'
              ) },
            _react2.default.createElement(
              _menu2.default.Item,
              { key: 'setting:1' },
              '\u4E2A\u4EBA\u4E2D\u5FC3'
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: 'setting:2' },
              '\u6211\u7684\u8BBE\u7F6E'
            ),
            _react2.default.createElement(
              MenuItemGroup,
              { title: '\u5206\u7EC42' },
              _react2.default.createElement(
                _menu2.default.Item,
                { key: 'setting:3' },
                '\u9009\u98793'
              ),
              _react2.default.createElement(
                _menu2.default.Item,
                { key: 'setting:4' },
                '\u9009\u98794'
              )
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: 'dyn' },
            _react2.default.createElement(_icon2.default, { type: 'star-o' }),
            '\u52A8\u6001'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: 'app' },
            _react2.default.createElement(_icon2.default, { type: 'appstore' }),
            '\u5E94\u7528'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: 'setting' },
            _react2.default.createElement(_icon2.default, { type: 'setting' }),
            '\u8BBE\u7F6E'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: 'alipay' },
            _react2.default.createElement(
              'a',
              { href: 'http://www.baidu.com/', target: '_blank' },
              '\u5BFC\u822A\u56DB - \u94FE\u63A5'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: 'logout' },
            '\u9000\u51FA'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            null,
            '\u641C\u7D22'
          )
        ),
        _react2.default.createElement(
          _col2.default,
          { xs: modal.lxs, sm: modal.lsm, md: modal.lmd, lg: modal.llg },
          _react2.default.createElement(_tree2.default, { titleField: 'menu_name', keyField: 'menu_code',
            expendall: true,
            treeData: TreeData,
            onSelect: this.onClick
          })
        ),
        _react2.default.createElement(
          _col2.default,
          { xs: modal.rxs, sm: modal.rsm, md: modal.rmd, lg: modal.rlg },
          _react2.default.createElement(_tabs4.default, null)
        )
      );
    }
  }]);

  return Page;
}(_react.Component);
/*<Tabs
 hideAdd
 onChange={this.onTreeChange}
 activeKey={tabs.activeKey}
 type="editable-card"
 onEdit={this.onTreeEdit}
 >
 {this.list}
 </Tabs>*/


var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClick = function (selectedKeys, e) {
    //this.defineCubeMethods();
    var self = _this2;
    var _props3 = _this2.props,
        tabsactions = _props3.tabsactions,
        tabs = _props3.tabs,
        modal = _props3.modal;

    var panes = tabs.panes;
    var flag = true;
    console.log('Click');
    console.log(e);
    if (selectedKeys[0]) {
      panes.forEach(function (pane) {
        //console.log(pane.title);
        if (pane.index == selectedKeys[0]) {
          flag = false;
          //this.setState({ activeKey : pane.key });
          tabsactions.onTreeChange(pane.key);
        }
      });
      if (flag) {
        var selectedNode = e.node.props.data;
        var _panes = self.state.panes;
        var activeKey = 'newTab' + self.newTabIndex++;
        //tabsactions.TabAdd({ title: '我的桌面',index : selectedKeys[0], content: null });
        tabsactions.TabAdd({
          indexopen: modal.indexopen,
          title: selectedNode.menu_name,
          index: selectedKeys[0],
          content: { vm: /*vm*/null, metaData: /*viewmeta*/null }
        });
        /*cb.loader.fromMenu(selectedNode, function (vm, viewmeta) {
        });*/
        _this2.tabflag = true;
      }
    }
  };

  this.onTreeChange = function (activeKey) {};

  this.onTreeEdit = function (targetKey, action) {
    console.log('targetKey:' + targetKey + ' action:' + action);
    //let {tabsactions,tabs} = this.props;
    //tabsactions.onTreeEdit(targetKey, action);
    _this2[action](targetKey);
  };

  this.remove = function (targetKey) {
    var tabsactions = _this2.props.tabsactions;

    tabsactions.TabDel(targetKey);
    _this2.tabflag = true;
  };

  this.handleClick = function (item) {
    var _props4 = _this2.props,
        logactions = _props4.logactions,
        modalactions = _props4.modalactions,
        modal = _props4.modal,
        tabsactions = _props4.tabsactions,
        tabs = _props4.tabs;

    switch (item.key) {
      case 'indextree':
        var indexopen = !modal.indexopen;
        modalactions.indexOpenClose(modal.indexopen);
        var pane = tabs.panes.filter(function (item) {
          return item.key === tabs.activeKey;
        });

        if (pane[0].indexopen === indexopen) {
          tabsactions.onTreeChange(tabs.activeKey);
        } else {
          tabsactions.onRerander(tabs.activeKey, indexopen);
        }
        break;
      case 'logout':
        logactions.logout();
        _this2.props.history.pushState(null, '/login');
        break;
      case 'setting':
        modalactions.modalopen();
        break;
      default:
        break;
    }
  };
};

function mapStateToProps(state) {
  return {
    modal: state.modal.toJS(),
    tree: state.tree.toJS(),
    //meta : state.meta.toJS(),
    tabs: state.tabs.toJS(),
    user: state.user.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalactions: (0, _redux.bindActionCreators)(modalactions, dispatch),
    treeactions: (0, _redux.bindActionCreators)(treeactions, dispatch),
    tabsactions: (0, _redux.bindActionCreators)(tabsactions, dispatch),
    logactions: (0, _redux.bindActionCreators)(logactions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Page);