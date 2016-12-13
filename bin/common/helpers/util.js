'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 将fetch函数的response转化为json格式
 */
var toJSON = exports.toJSON = function toJSON(response) {
  var condition = response.status === 200;
  // warning(condition, ``, 1)

  return condition === true ? response.json() : {
    code: response.status
  };
};

/**
 * 提供fetch函数的第二个参数
 */
var genFetchOptions = exports.genFetchOptions = function genFetchOptions(method, paramsObj) {
  return {
    method: method,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(paramsObj)
  };
};

/**
 * 生成一个redux可用的action对象
 */
var genAction = exports.genAction = function genAction(type, payload) {
  return {
    type: type,
    payload: payload
  };
};