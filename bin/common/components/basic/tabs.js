'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _view = require('../../components/basic/view');

var _view2 = _interopRequireDefault(_view);

var _refer = require('./refer');

var _refer2 = _interopRequireDefault(_refer);

var _tabs3 = require('../../redux/modules/tabs');

var tabsactions = _interopRequireWildcard(_tabs3);

var _modal3 = require('../../redux/modules/modal');

var modalactions = _interopRequireWildcard(_modal3);

var _choicebox = require('./choicebox');

var _choicebox2 = _interopRequireDefault(_choicebox);

var _itemsPicker = require('./items-picker');

var _itemsPicker2 = _interopRequireDefault(_itemsPicker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by wxk on 2016/7/28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TabPane = _tabs2.default.TabPane;

var TabList = function (_Component) {
  _inherits(TabList, _Component);

  function TabList(props) {
    _classCallCheck(this, TabList);

    var _this = _possibleConstructorReturn(this, (TabList.__proto__ || Object.getPrototypeOf(TabList)).call(this, props));

    _this.onTreeChange = function (activeKey) {
      //tabs切换
      var _this$props = _this.props,
          tabsactions = _this$props.tabsactions,
          modal = _this$props.modal,
          tabs = _this$props.tabs,
          pane = tabs.panes.filter(function (item) {
        return item.key === activeKey;
      });

      if (pane.indexopen === modal.indexopen) {
        tabsactions.onTreeChange(activeKey);
        //let timestamp=new Date().getTime();
        //console.log('timestamp'+timestamp);
        _this.tabflag = true;
      } else {
        tabsactions.onRerander(activeKey, modal.indexopen);
      }
    };

    _this.onTreeEdit = function (targetKey, action) {
      //删除tab时候调用this.remove
      _this[action](targetKey);
    };

    _this.remove = function (targetKey) {
      var tabsactions = _this.props.tabsactions;

      tabsactions.TabDel(targetKey);
      _this.tabflag = true;
    };

    _this.list = []; //渲染队列
    _this.keylist = []; //维护渲染队列时候便于比对key值
    _this.newmetaid = 0;
    return _this;
  }

  _createClass(TabList, [{
    key: 'render',


    /*shouldComponentUpdate = (nextProps, nextState)=>{
      console.log('this.props.id:'+this.props.id+'nextProps.id:'+nextProps.id);
      return nextProps.id !== this.props.id;
    };*/

    value: function render() {
      var _props = this.props,
          tabs = _props.tabs,
          tabsactions = _props.tabsactions;

      if (tabs.tabflag) {
        //只有更新时候进入此分支
        var length = tabs.panes.length,
            //this.keylist.length>?this.keylist.length:tabs.panes.length;
        i = 0,
            width = 0;
        if (this.refs.container) {
          width = this.refs.container.clientWidth;
        }
        for (; i < length; i++) {
          //遍历panes数组，更新tabs渲染队列
          var pane = tabs.panes[i];
          if (this.list[i]) {
            if (pane.key !== this.keylist[i]) {
              //如果遍历到的渲染队列的元素跟panes的对不上，则认为是已经删除，就把其从渲染队列中删除
              this.list.splice(i, 1);
              this.keylist.splice(i, 1);
            } else {
              if (tabs.activeKey === pane.key) {
                if (pane.content !== 'index') {
                  if (pane.content.vm) {
                    this.list[i] = _react2.default.createElement(
                      TabPane,
                      { tab: pane.title, key: pane.key },
                      _react2.default.createElement(_view2.default, { width: width, vm: pane.content.vm, metaData: pane.content.metaData,
                        id: 'meta' + this.newmetaid++ })
                    );
                  }
                }
                /*else {//如果vm为空则认为是首页
                  this.list[i] =(
                    <TabPane tab={pane.title} key={pane.key}>
                      <p/>这是首页桌面
                    </TabPane>);
                  this.keylist.push(pane.key);
                }*/
              }
            }
          } else {
            //如果渲染队列比panes短，则将长出的元素放入渲染队列
            if (pane.content.vm) {
              //const width = parseInt(this.refs.container.clientWidth / 100) * 100;
              this.list.push(_react2.default.createElement(
                TabPane,
                { tab: pane.title, key: pane.key },
                _react2.default.createElement(_view2.default, { width: width, vm: pane.content.vm, metaData: pane.content.metaData, id: 'meta' + this.newmetaid++ })
              ));
              /*timestamp=new Date().getTime();
              console.log('timestamp2'+timestamp);*/
              this.keylist.push(pane.key);
            } else {
              //如果vm为空则认为是首页
              this.list.push(_react2.default.createElement(
                TabPane,
                { tab: pane.title, key: pane.key },
                _react2.default.createElement('p', null),
                '\u8FD9\u662F\u9996\u9875\u684C\u9762',
                _react2.default.createElement(_choicebox2.default, { modal: _modal2.default }),
                _react2.default.createElement(_itemsPicker2.default, null)
              ));
              this.keylist.push(pane.key);
            }
          }
        }
        if (this.list[i]) {
          //如果遍历完成后list内容比panes多，则删除多余的pane
          this.list.splice(i, 1);
          this.keylist.splice(i, 1);
        }
        tabsactions.disableTabflag();
      }

      console.log(this.list);
      return _react2.default.createElement(
        'div',
        { ref: 'container' },
        _react2.default.createElement(
          _tabs2.default,
          {
            hideAdd: true,
            onChange: this.onTreeChange,
            activeKey: tabs.activeKey,
            type: 'editable-card',
            onEdit: this.onTreeEdit
          },
          this.list
        )
      );
    }
  }]);

  return TabList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    tabs: state.tabs.toJS(),
    modal: state.modal.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tabsactions: (0, _redux.bindActionCreators)(tabsactions, dispatch),
    modalactions: (0, _redux.bindActionCreators)(modalactions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TabList);