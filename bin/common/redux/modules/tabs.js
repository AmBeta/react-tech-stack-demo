'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by wxk on 2016/7/25.
                                                                                                                                                                                                                                                                   */


exports.tabs = tabs;
exports.TabDel = TabDel;
exports.TabAdd = TabAdd;
exports.onTreeChange = onTreeChange;
exports.onRerander = onRerander;
exports.disableTabflag = disableTabflag;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initialState = _immutable2.default.fromJS({
  newTabIndex: 0,
  panes: [],
  id: 0,
  tabflag: true
});

function tabs() {
  var $$state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initialState;
  var action = arguments[1];

  //const panes = [];
  var newTabIndex = $$state.getIn(['newTabIndex']);

  var _ret = function () {
    switch (action.type) {
      case 'PLATFORM_UI_TAB_ADD':
        var key = 'newTab' + newTabIndex,
            newTabItem = _extends({}, action.value, { key: key }); //title: title, index: index, content: content
        return {
          v: $$state.update('panes', function (panes) {
            var _panes = _immutable2.default.Iterable.prototype.isPrototypeOf(panes) ? panes.toJS() : panes;
            //console.log('panes push');
            var index = (0, _lodash.findIndex)(_panes, ['index', newTabItem.index]);
            if (index === -1) {
              _panes.push(newTabItem);
              newTabIndex++;
            } else {
              key = _panes[index].key;
            }
            return _panes;
          }).merge({ activeKey: key, newTabIndex: newTabIndex, tabflag: true })
        };
        break;

      case 'PLATFORM_UI_TAB_CHANGE':
        var timestamp = new Date().getTime();
        console.log('timestamp' + timestamp);
        return {
          v: $$state
          //.update('activeKey',action.activeKey);
          .merge({ activeKey: action.activeKey })
        };
        break;
      case 'PLATFORM_UI_TAB_RERANDER':
        return {
          v: $$state
          //.update('activeKey',action.activeKey);
          .update('panes', function (panes) {
            var _panes = _immutable2.default.Iterable.prototype.isPrototypeOf(panes) ? panes.toJS() : panes;
            _panes.forEach(function (ele) {
              if (ele.key === action.activeKey) {
                ele.indexopen = action.indexopen;
              }
            });
            return _panes;
          }).merge({ activeKey: action.activeKey, tabflag: true })
        };

        break;

      case 'PLATFORM_UI_TAB_DEL':
        //console.log('TabRemove');
        var activeKey = $$state.getIn(['activeKey']);
        var lastIndex = void 0;
        return {
          v: $$state.update('panes', function (panes) {
            var list = panes.filter(function (pane, i) {
              //console.log('pane.key:'+pane.key+'action.targetKey:'+action.targetKey);
              if (pane.key === action.targetKey) {
                //console.log('TabRemove suc');
                lastIndex = i - 1;
                if (lastIndex >= 0 && activeKey === pane.key) {
                  activeKey = panes[lastIndex].key;
                }
                return false;
              }
              //newTabIndex--;
              return true;
            });
            console.log(list);
            return list;
          }).merge({ activeKey: activeKey, tabflag: true })
        }; //newTabIndex : newTabIndex,
        break;
      case 'PLATFORM_UI_TAB_RENDER_DISABLE':
        return {
          v: $$state.merge({ tabflag: false })
        };
        break;
      default:
        return {
          v: $$state
        };
    }
  }();

  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
}

function TabDel(value) {
  return function (dispatch) {
    dispatch({
      type: 'PLATFORM_UI_TAB_DEL',
      targetKey: value
    });
  };
}

function TabAdd(value) {
  //value
  return function (dispatch) {
    dispatch({
      type: 'PLATFORM_UI_TAB_ADD',
      value: value
    });
  };
}

function onTreeChange(activeKey) {
  return function (dispatch) {
    dispatch({
      type: 'PLATFORM_UI_TAB_CHANGE',
      activeKey: activeKey
    });
  };
}

function onRerander(activeKey, indexopen) {
  return function (dispatch) {
    dispatch({
      type: 'PLATFORM_UI_TAB_RERANDER',
      activeKey: activeKey,
      indexopen: indexopen
    });
  };
}

function disableTabflag() {
  return function (dispatch) {
    dispatch({
      type: 'PLATFORM_UI_TAB_RENDER_DISABLE'
    });
  };
}