'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _user = require('./modules/user');

var _user2 = _interopRequireDefault(_user);

var _modal = require('./modules/modal');

var _modal2 = _interopRequireDefault(_modal);

var _tree = require('./modules/tree');

var _tabs = require('./modules/tabs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  user: _user2.default,
  modal: _modal2.default,
  tree: _tree.tree,
  tabs: _tabs.tabs,
  routing: _reactRouterRedux.routerReducer
});
//import meta from './modules/meta'