'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {

  router.get('/login', function (ctx) {
    var pageInfo = {
      title: '用户登录',
      keyword: '',
      description: ''
    };

    // TODO: 调用 dispatch，store 会得到数据
    // ctx.store.dispatch({type: U8_USER_GET_LIST})

    ctx.render(pageInfo);
  });
  router.get('/user/login', function (ctx) {
    var pageInfo = {
      title: '用户登录',
      keyword: '',
      description: ''
    };

    // TODO: 调用 dispatch，store 会得到数据
    // ctx.store.dispatch({type: U8_USER_GET_LIST})

    ctx.render(pageInfo);
  });

  router.get('/user/:userId', function (ctx) {
    var userId = ctx.params.userId;
  });

  router.get('/users', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
      var pageInfo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageInfo = {
                title: '用户列表',
                keyword: '',
                description: ''
              };
              _context.next = 3;
              return queryUserByFromServices().then(function (json) {
                ctx.store.dispatch({
                  type: actions.PLATFORM_DATA_USER_GETLIST_SUCCEED,
                  payload: json
                });
                ctx.render(pageInfo);
              });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  router.get('/users.do', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryUserByFromServices().then(function (json) {
                ctx.body = json;
              });

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  return router;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('../../common/redux/modules/user');

var actions = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function queryUserByFromServices() {
  return fetch('http://xxx/mockjs/1/user/getlist.do') //预留
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  }).then(function (response) {
    return require('../../__mock__/users');
  });
}