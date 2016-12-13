'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _env = require('../env');

var _env2 = _interopRequireDefault(_env);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = (0, _koaRouter2.default)();
exports.default = router;

(0, _user2.default)(router);

// TODO: 增加其他模块的路由，如：
// import xxx from './xxx'
// xxx(router)


router.get('/', function (ctx) {
  var pageInfo = {
    title: 'portal',
    keyword: '',
    description: ''
  };

  // TODO: 调用 dispatch，store 会得到数据
  // store.dispatch({type: U8_USER_GET_LIST})

  var mockTree = require('../../__mock__/tree');

  ctx.store.dispatch({
    type: 'U8_INIT_TREE',
    payload: {
      showModal: mockTree,
      content: mockTree,
      treejson: mockTree.data
    }
  });

  ctx.render(pageInfo);
});

// 取文件
var FILE_ROUTE = '/files/*';

router.get(FILE_ROUTE, function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
    var req, res, request, response, serviceUrl, CONTENT_TYPE, headers, options;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = ctx.req, res = ctx.res, request = ctx.request, response = ctx.response;
            serviceUrl = (0, _env.combine)(_env2.default.HTTP_SERVICE_BASEURL, req.url.substr(FILE_ROUTE.length - 1));
            CONTENT_TYPE = 'application/pdf';
            headers = {
              'content-type': CONTENT_TYPE,
              origin: 'koa2 server',
              cookie: req.headers.cookie
            };
            options = {
              method: req.method,
              headers: headers,
              credentials: 'include'
            };
            _context.next = 7;
            return fetch(serviceUrl, options).then(function (response) {
              switch (response.status) {
                case 200:
                  ctx.body = response.body;
                  ctx.type = CONTENT_TYPE;
                  break;

                default:
                  ctx.body = '文件打开出错';
                  break;
              }
            }, function (e) {
              ctx.body = '文件打开出错';
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getFile(_x) {
    return _ref.apply(this, arguments);
  }

  return getFile;
}());

// JAVA服务的路由放在Database里，所以只做透传
var UNSURE_ROUTE = '/api-unsure/*';

router.all(UNSURE_ROUTE, function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
    var req, res, request, response, CONTENT_TYPE, serviceUrl, headers, options;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = ctx.req, res = ctx.res, request = ctx.request, response = ctx.response;
            CONTENT_TYPE = 'application/json';
            serviceUrl = (0, _env.combine)(_env2.default.HTTP_SERVICE_BASEURL, req.url.substr(UNSURE_ROUTE.length - 1));
            headers = {
              'content-type': CONTENT_TYPE,
              origin: 'koa2 server',
              cookie: req.headers.cookie
            };
            options = {
              method: req.method,
              headers: headers,
              body: JSON.stringify(request.body),
              credentials: 'include'
            };
            _context2.next = 7;
            return fetch(serviceUrl, options).then(function (response) {
              // TODO: 未完成：完善合理的接口返回
              switch (response.status) {
                case 200:
                  ctx.body = response.body;
                  ctx.type = CONTENT_TYPE;
                  break;

                case 404:
                  ctx.body = { code: 404 };
                  break;

                default:
                  ctx.body = { code: 500 };
                  break;
              }
            }, function (e) {
              ctx.body = {
                code: 500,
                error: e.message
              };
            });

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function doUnsureHttpRequest(_x2) {
    return _ref2.apply(this, arguments);
  }

  return doUnsureHttpRequest;
}());