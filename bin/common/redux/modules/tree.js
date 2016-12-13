'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tree = tree;
exports.treeload = treeload;
exports.TreeNodeLoad = TreeNodeLoad;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _env = require('../../helpers/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by wxk on 2016/7/19.
 */
var $$initialState = _immutable2.default.fromJS({
  //logstatus : 'alogin'
});

function tree() {
  var $$state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initialState;
  var action = arguments[1];

  var status = void 0,
      account = void 0;
  switch (action.type) {

    case 'PLATFORM_UI_TREE_LOAD':
      //console.log(action.TreeData);
      return $$state.merge({
        TreeData: action.TreeData
      });
      break;
    case 'PLATFORM_UI_TREE_NODE_LOAD':
      //console.log('action.TreeNode');
      //console.log(action.TreeNode);
      return $$state.merge({
        TreeNode: action.TreeNode
      });
      break;

    default:
      return $$state;
  }
}

function treeload() {

  return function (dispatch) {
    //let proxy = cb.rest.DynamicProxy.create({ getTree: { url: 'menu/getMetaByMenu.do', method: 'POST' } });
    var options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    };

    fetch('/getMenuTree', options).then(function (response) {
      //console.log(response);
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function (json) {
      //console.log(json);
      dispatch({
        type: 'PLATFORM_UI_TREE_LOAD',
        TreeData: json.data
      });
    });
  };
}

function TreeNodeLoad(value, CallBack) {
  var options = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      menu_code: value
    })
  };
  console.log('PLATFORM_UI_TREE_NODE_LOAD');
  console.log('/meta/bill/' + value);
  return function (dispatch) {
    fetch('/meta.do/bill/' + value).then(function (response) {
      //console.log(response);
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function (json) {
      //console.log('TREE_NODE_LOAD');
      //console.log(json);
      dispatch({
        type: 'PLATFORM_UI_TREE_NODE_LOAD'
      });
      CallBack();
    });
  };
}