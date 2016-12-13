'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = exports.userlogin = exports.PLATFORM_DATA_USER_GETLIST_FAILURE = exports.PLATFORM_DATA_USER_GETLIST_SUCCEED = exports.PLATFORM_DATA_USER_GETLIST = exports.PLATFORM_DATA_USER_LOGIN_FAILURE = exports.PLATFORM_DATA_USER_LOGIN_SUCCEED = exports.PLATFORM_DATA_USER_LOGIN = exports.PLATFORM_UI_USER_INIT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.SetUserName = SetUserName;
exports.SetPassWord = SetPassWord;
exports.logout = logout;
exports.getAccount = getAccount;
exports.queryUserBy = queryUserBy;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _cookiesJs = require('cookies-js');

var _cookiesJs2 = _interopRequireDefault(_cookiesJs);

var _ActionStatus = require('../../constants/ActionStatus');

var _ActionStatus2 = _interopRequireDefault(_ActionStatus);

var _env = require('../../helpers/env');

var _env2 = _interopRequireDefault(_env);

var _util = require('../../helpers/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PLATFORM_UI_USER_INIT = exports.PLATFORM_UI_USER_INIT = 'PLATFORM_UI_USER_INIT';

// 用户登陆
var PLATFORM_DATA_USER_LOGIN = exports.PLATFORM_DATA_USER_LOGIN = 'PLATFORM_DATA_USER_LOGIN';
var PLATFORM_DATA_USER_LOGIN_SUCCEED = exports.PLATFORM_DATA_USER_LOGIN_SUCCEED = 'PLATFORM_DATA_USER_LOGIN_SUCCEED';
var PLATFORM_DATA_USER_LOGIN_FAILURE = exports.PLATFORM_DATA_USER_LOGIN_FAILURE = 'PLATFORM_DATA_USER_LOGIN_FAILURE';

var PLATFORM_DATA_USER_GETLIST = exports.PLATFORM_DATA_USER_GETLIST = 'PLATFORM_DATA_USER_GETLIST';
var PLATFORM_DATA_USER_GETLIST_SUCCEED = exports.PLATFORM_DATA_USER_GETLIST_SUCCEED = 'PLATFORM_DATA_USER_GETLIST_SUCCEED';
var PLATFORM_DATA_USER_GETLIST_FAILURE = exports.PLATFORM_DATA_USER_GETLIST_FAILURE = 'PLATFORM_DATA_USER_GETLIST_FAILURE';

var user = {
  id: null,
  username: null,
  password: null,
  corp_id: null,
  pubuts: null,
  bActivate: null,
  bEmailValid: null,
  bMobileValid: null,
  mobile: null,
  salt: null,
  iDeleted: null,
  bCorpRegister: null,
  dataSourceName: null,
  alias: null,
  token: null
};

var $$initialState = _immutable2.default.fromJS(_extends({}, user, {

  // 登陆状态
  loginStatus: _ActionStatus2.default.READY,

  list: [],
  dataSource: [],
  columns: [],
  id: 'log' + new Date().getTime(),
  errorMsg: '直接点击登录即可登录，无需输入用户名密码'
}));

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initialState;
  var action = arguments[1];

  var timestamp = new Date().getTime(),
      loginid = 'log' + timestamp;
  console.log('timestamp' + timestamp);
  switch (action.type) {

    case PLATFORM_DATA_USER_GETLIST_SUCCEED:
      return state.merge(action.payload);

    case PLATFORM_UI_USER_INIT:
      if (process.env.__CLIENT__ === true) {
        var userCooke = _cookiesJs2.default.get('user');
        if (userCooke) {
          Object.assign(user, JSON.parse(decodeURIComponent(userCooke)));
        }
      }
      return state.merge(user);

    case PLATFORM_DATA_USER_LOGIN:
      return state.set('loginStatus', _ActionStatus2.default.ING);

    case PLATFORM_DATA_USER_LOGIN_SUCCEED:
      console.log('PLATFORM_DATA_USER_LOGIN_SUCCEED');
      return state.set('loginStatus', _ActionStatus2.default.SUCCEED).merge(action.payload).merge({ id: loginid });

    case PLATFORM_DATA_USER_LOGIN_FAILURE:
      return state.set('loginStatus', _ActionStatus2.default.FAILURE);

    case 'PLATFORM_DATA_LOGIN_USERNAME':
      return state.merge({
        UserName: action.username,
        errorMsg: action.errorMsg,
        id: loginid
      });

    case 'PLATFORM_DATA_LOGIN_PASSWORD':
      /*      let username = $$state.getIn(['username']),
              errorMsg = "";*/
      return state.merge({ errorMsg: action.errorMsg,
        id: loginid });

    case 'PLATFORM_DATA_LOGIN_GET_ACCOUT_SUC':
      return state.merge({ account: action.account,
        id: loginid });

    case 'PLATFORM_DATA_LOGIN_GET_ACCOUT_FAI':
      return state.merge({ account: action.account,
        id: loginid });
    case 'PLATFORM_DATA_LOGIN_OUT':
      return state.merge(_extends({}, user, { loginStatus: _ActionStatus2.default.READY }));
    default:
      return state;
  }
};

function SetUserName(value) {
  //emptyAccountUL();
  console.log(value);
  var username = value,
      errorMsg = '';
  if (!username || username == "") {
    errorMsg = "登录账号不能为空，请输入";
    //hiddenTitle();
    //return;
    console.log(errorMsg);
  }
  return function (dispatch) {
    dispatch({
      type: 'PLATFORM_DATA_LOGIN_USERNAME',
      username: value,
      errorMsg: errorMsg
    });
  };
}

function SetPassWord(name, word) {
  //emptyAccountUL();
  console.log(name + '-' + word);
  var password = word,
      username = name,
      errorMsg = '';
  if (!username || username == "") {
    if (!password || password == "") {
      errorMsg = "登录账号和密码不能为空，请输入";
    } else {
      errorMsg = "登录账号不能为空，请输入";
    }
  } else {
    if (!password || password == "") {
      errorMsg = "密码不能为空，请输入";
    }
  }
  console.log(errorMsg);
  /*if (!password || password == "") {
    errorMsg = "密码不能空，请输入";
    //hiddenTitle();
    //return;
   }*/
  return function (dispatch) {
    //getAccount(username,password);
    dispatch({
      type: 'PLATFORM_DATA_LOGIN_PASSWORD',
      errorMsg: errorMsg
    });
    var options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      })
    };

    (0, _isomorphicFetch2.default)(_env2.default.HTTP_USER_COR_ACC, options).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      //let temp = response.json()
      //console.log(temp);
      return response.json();
    }).then(function (json) {
      if (json.code === 200) {
        //console.log(json.data);
        dispatch({
          type: 'PLATFORM_DATA_LOGIN_GET_ACCOUT_SUC',
          account: json.data
        });

        /*if (process.env.__CLIENT__ === true) {
         const cookie = encodeURIComponent(JSON.stringify(json.data))
         document.cookie = `user=${cookie}`
         }*/
      } else {
        //console.log(json.data);
        dispatch({
          type: 'PLATFORM_DATA_LOGIN_GET_ACCOUT_FAI',
          errorMsg: json.data
        });
      }
    });
  };
}
var userlogin = exports.userlogin = function userlogin(username, code, corp_id) {
  return function (dispatch, getState) {
    // 登陆中，做禁用登陆 Button 等操作
    dispatch((0, _util.genAction)(PLATFORM_DATA_USER_LOGIN));

    var options = (0, _util.genFetchOptions)('post', {
      username: username,
      code: code,
      corp_id: corp_id
    });

    (0, _isomorphicFetch2.default)(_env2.default.HTTP_USER_COR_ACC, options).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      //let temp = response.json()
      //console.log(temp);
      return response.json();
    }).then(function (json) {
      if (json.code === 200) {
        //console.log(json.data);
        dispatch((0, _util.genAction)(PLATFORM_DATA_USER_LOGIN_SUCCEED, json.data));

        if (process.env.__CLIENT__ === true) {
          cb.rest.AppContext.token = json.data.token;
          console.log('token');
          console.log(json.data);
          var cookie = encodeURIComponent(JSON.stringify(json.data));
          var expires = new Date(Date.now() + 2 * 3600 * 1000).toUTCString();

          document.cookie = 'user=' + cookie + ';domain=localhost;path=/;expires=' + expires;
        }
      } else {
        dispatch((0, _util.genAction)(PLATFORM_DATA_USER_LOGIN_FAILURE, json.data));
      }
      /*if (process.env.__CLIENT__ === true) {
       const cookie = encodeURIComponent(JSON.stringify(json.data))
       document.cookie = `user=${cookie}`
       }*/
      /*} else {
        //console.log(json.data);
        dispatch({
          type : 'GET_ACCOUT_FAI',
          errorMsg : json.data
        })
      }*/
    });
    /*fetch(env.HTTP_USER_LOGIN, options).then(toJSON).then(function (json) {
      if (json.code === 200) {
        dispatch(genAction(PLATFORM_DATA_USER_LOGIN_SUCCEED, json.data))
         if (process.env.__CLIENT__ === true) {
          cb.rest.AppContext.token = json.data.token;
          console.log(json.data);
          const cookie = encodeURIComponent(JSON.stringify(json.data))
          const expires = new Date(Date.now() + 2 * 3600 * 1000).toUTCString()
           document.cookie = `user=${cookie};domain=localhost;path=/;expires=${expires}`
        }
      } else {
        dispatch(genAction(PLATFORM_DATA_USER_LOGIN_FAILURE, json.data))
      }
    })*/
  };
};
function logout() {
  return function (dispatch) {
    dispatch({
      type: 'PLATFORM_DATA_LOGIN_OUT'
    });
  };
}

var userLogin = exports.userLogin = function userLogin(username, code, corp_id) {
  return function (dispatch, getState) {
    // 登陆中，做禁用登陆 Button 等操作
    dispatch((0, _util.genAction)(PLATFORM_DATA_USER_LOGIN));

    var options = (0, _util.genFetchOptions)('post', {
      username: username,
      code: code,
      corp_id: corp_id
    });

    (0, _isomorphicFetch2.default)(_env2.default.HTTP_USER_LOGIN, options).then(_util.toJSON).then(function (json) {
      if (json.code === 200) {
        dispatch((0, _util.genAction)(PLATFORM_DATA_USER_LOGIN_SUCCEED, json.data));

        if (process.env.__CLIENT__ === true) {
          cb.rest.AppContext.token = json.data.token;
          console.log(json.data);
          var cookie = encodeURIComponent(JSON.stringify(json.data));
          var expires = new Date(Date.now() + 2 * 3600 * 1000).toUTCString();

          document.cookie = 'user=' + cookie + ';domain=localhost;path=/;expires=' + expires;
        }
      } else {
        dispatch((0, _util.genAction)(PLATFORM_DATA_USER_LOGIN_FAILURE, json.data));
      }
    });
  };
};
//HTTP_USER_COR_ACC
function getAccount(username, code) {
  return function (dispatch) {
    // 登陆中，做禁用登陆 Button 等操作
    //dispatch(userLoginAction(U8_USER_LOGIN));
    var options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        code: code
      })
    };

    (0, _isomorphicFetch2.default)(_env2.default.HTTP_USER_COR_ACC, options).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function (json) {
      if (json.code === 200) {
        dispatch({
          type: 'GET_ACCOUT_SUC',
          account: json.data
        });

        /*if (process.env.__CLIENT__ === true) {
          const cookie = encodeURIComponent(JSON.stringify(json.data))
          document.cookie = `user=${cookie}`
        }*/
      } else {
        dispatch({
          type: 'GET_ACCOUT_FAI',
          errorMsg: json.data
        });
      }
    });
  };
}
// 获取用户列表
function queryUserBy() {
  return function (dispatch, getState) {
    // 请求服务器接口
    (0, _isomorphicFetch2.default)('/users.do').then(_util.toJSON).then(function (json) {
      dispatch({
        type: PLATFORM_DATA_USER_GETLIST_SUCCEED,
        payload: json
      });
    });
  };
}
//PLATFORM_DATA_LOGIN_