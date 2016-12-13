'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combine = undefined;

var _env = require('../../common/helpers/env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTP_SERVICE_BASEURL = process.env.NODE_ENV === 'production' ? 'http://10.10.12.93:8080/ucloud' : 'http://10.10.12.93:8080/ucloud';

var env = {
  // java 服务根路径
  HTTP_SCRIPT_BASEURL: _env2.default.HTTP_SCRIPT_BASEURL,

  HTTP_SCRIPT_SUFFIX: '',

  // nodejs 服务端口
  HTTP_SERVER_PORT: 8081,

  // 静态文件根路径
  HTTP_SERVICE_BASEURL: HTTP_SERVICE_BASEURL,

  // 关于用户的ajax接口
  HTTP_USER_FETCH_METABYMENU: (0, _env.combine)(HTTP_SERVICE_BASEURL, '/billmeta/getbill.do'),
  HTTP_USER_FETCH_METABYBILLNO: (0, _env.combine)(HTTP_SERVICE_BASEURL, '/menu/getMetaByMenu.do'),
  HTTP_USER_FETCH_TREE: (0, _env.combine)(HTTP_SERVICE_BASEURL, '/menu/getMenuTree.do'),
  HTTP_USER_FETCH_TREE_NODE: (0, _env.combine)(HTTP_SERVICE_BASEURL, '/menu/getMetaByMenu.do'),

  HTTP_INIT_QUERYSCHEME: (0, _env.combine)(HTTP_SERVICE_BASEURL, '/filter/getcommonfilters.do')
};

if (process.env.NODE_ENV === 'production') {
  Object.assign(env, {
    HTTP_SCRIPT_SUFFIX: '.min'
  });
}

exports.default = env;
exports.combine = _env.combine;