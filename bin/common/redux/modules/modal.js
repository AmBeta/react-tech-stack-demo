'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modal;
exports.indexOpenClose = indexOpenClose;
exports.modalclose = modalclose;
exports.modalopen = modalopen;
exports.content = content;
exports.callback = callback;
exports.title = title;
exports.width = width;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initialState = _immutable2.default.fromJS({
  lxs: 24, lsm: 24, lmd: 6, llg: 4, rxs: 24, rsm: 24, rmd: 18, rlg: 20, indexopen: true
});
function modal() {
  var $$state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'PLATFORM_UI_MODAL_OPEN':
      return $$state.merge({
        showModal: true
      });
    case 'PLATFORM_UI_MODAL_CLOSE':
      return $$state.merge({
        showModal: false
      });
    case 'PLATFORM_UI_MODAL_ONCHANGE':
      var value = new Object();
      value[action.name] = action.value;
      return $$state.merge(value);
    case 'PLATFORM_UI_MODAL_CONTENT':
      return $$state.merge({
        content: action.content
      });
    case 'PLATFORM_UI_ACTION_INIT_TREE':
      return $$state.merge(action.payload);

    case 'PLATFORM_UI_INDEX_CLOSE':
      console.log('PLATFORM_UI_INDEX_CLOSE');
      return $$state.merge({ lxs: 0, lsm: 0, lmd: 0, llg: 0, rxs: 24, rsm: 24, rmd: 24, rlg: 24, indexopen: false });
    //
    case 'PLATFORM_UI_INDEX_OPEN':
      console.log('PLATFORM_UI_INDEX_OPEN');
      return $$state.merge({ lxs: 24, lsm: 24, lmd: 6, llg: 4, rxs: 24, rsm: 24, rmd: 18, rlg: 20, indexopen: true });
    default:
      return $$state;
  }
}
function indexOpenClose(value) {
  return function (dispatch) {
    if (value) {
      console.log('PLATFORM_UI_INDEX_CLOSE');
      dispatch({
        type: 'PLATFORM_UI_INDEX_CLOSE'
      });
    } else {
      console.log('PLATFORM_UI_INDEX_OPEN');
      dispatch({
        type: 'PLATFORM_UI_INDEX_OPEN'
      });
    }
  };
}

function modalclose() {
  return function (dispatch) {
    console.log('PLATFORM_UI_MODAL_CLOSE');
    dispatch({
      type: 'PLATFORM_UI_MODAL_CLOSE'
    });
  };
}

function modalopen() {
  return function (dispatch) {
    console.log('PLATFORM_UI_MODAL_OPEN');
    dispatch({
      type: 'PLATFORM_UI_MODAL_OPEN'
    });
  };
}

function content(value) {
  return function (dispatch) {
    console.log('PLATFORM_UI_MODAL_CONTENT');
    dispatch({
      type: 'PLATFORM_UI_MODAL_CONTENT',
      content: value
    });
  };
}
function callback(value) {
  return function (dispatch) {
    console.log('MODAL_CALLBACK');
    dispatch({
      type: 'MODAL_CALLBACK',
      callback: value
    });
  };
}
function title(value) {
  return function (dispatch) {
    console.log('MODAL_TITLE');
    dispatch({
      type: 'MODAL_TITLE',
      modaltitle: value
    });
  };
}
function width(value) {
  return function (dispatch) {
    console.log('MODAL_WIDTH');
    dispatch({
      type: 'MODAL_WIDTH',
      modalWidth: value
    });
  };
}