'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = html;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _env = require('../../env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = _env2.default.HTTP_SCRIPT_BASEURL;
var suffix = _env2.default.HTTP_SCRIPT_SUFFIX;

function html(pageInfo, content, state) {
  (0, _invariant2.default)((typeof pageInfo === 'undefined' ? 'undefined' : _typeof(pageInfo)) === 'object', 'ctx.render\u51FD\u6570\u7684\u53C2\u6570\u683C\u5F0F\u4E3A\uFF1A' + JSON.stringify({
    title: 'html>head>title的值',
    keyword: 'html>head>keyword的值',
    description: 'html>head>description的值',
    baseUrl: '静态资源的根路径，如：http://localhost:3004/static/',
    content: 'ReactDOMServer.renderToString|renderToStaticMarkup输出的字符串',
    state: 'ctx.store.getState()'
  }) + '\uFF0C\u53EF\u4F20\u5165\u7A7A\u5BF9\u8C61\u3002');

  return '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charSet="utf-8"/>\n    <title>' + pageInfo.title + '</title>\n    <meta name="description" content=' + pageInfo.description + '/>\n    <meta name="keyword" content=' + pageInfo.keyword + '/>\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\n    <link href="' + baseUrl + '/styles/default/index.css" rel="stylesheet" type="text/css" />\n    <link href="' + baseUrl + '/styles/antd/1.6.4/antd.min.css" rel="stylesheet" type="text/css" />\n    <link href="' + baseUrl + '/styles/fixed-data-table/0.6.2/fixed-data-table.min.css" rel="stylesheet" type="text/css" />\n    <link href="' + baseUrl + '/styles/base.css" rel="stylesheet" type="text/css" />\n  </head>\n  <body>\n    <div id="container">' + content + '</div>\n    <script>\n      window.__INITIAL_STATE__ = ' + JSON.stringify(state) + '\n    </script>\n    <script src="' + baseUrl + '/scripts/common/vendor' + suffix + '.js"></script>\n    <script src="' + baseUrl + '/scripts/index' + suffix + '.js"></script>\n    <script src="' + baseUrl + '/scripts/business-index' + suffix + '.js"></script>\n  </body>\n</html>';
}