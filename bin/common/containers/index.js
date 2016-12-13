'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPage = exports.UserLoginPage = exports.UserListPage = exports.ErrorNotFoundPage = exports.DefaultPage = undefined;

var _Default = require('./Master/Default');

var _Default2 = _interopRequireDefault(_Default);

var _NotFound = require('./Errors/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _UserList = require('./User/UserList');

var _UserList2 = _interopRequireDefault(_UserList);

var _UserLogin = require('./User/UserLogin');

var _UserLogin2 = _interopRequireDefault(_UserLogin);

var _Login = require('./User/Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DefaultPage = _Default2.default;

// 错误页
// 母版页

exports.ErrorNotFoundPage = _NotFound2.default;

// 用户模块

exports.UserListPage = _UserList2.default;
exports.UserLoginPage = _UserLogin2.default;
exports.LoginPage = _Login2.default;