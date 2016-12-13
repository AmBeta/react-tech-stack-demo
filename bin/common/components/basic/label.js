'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

exports.default = function (control, title) {
    return _react2.default.createElement(
        _row2.default,
        null,
        _react2.default.createElement(
            _col2.default,
            { xs: 8 },
            title
        ),
        _react2.default.createElement(
            _col2.default,
            { xs: 16 },
            control
        )
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }