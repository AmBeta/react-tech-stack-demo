'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _tag = require('antd/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = {
  'bordered': 'style__bordered___Pvrun'
};

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // if (process.env.__CLIENT__ === true) {
//   require('./style.less');
// }

var genID = function () {
  var id = 0;
  return function () {
    return id++;
  };
}();

var ChoiceBox = function (_React$Component) {
  _inherits(ChoiceBox, _React$Component);

  function ChoiceBox(props) {
    _classCallCheck(this, ChoiceBox);

    var _this = _possibleConstructorReturn(this, (ChoiceBox.__proto__ || Object.getPrototypeOf(ChoiceBox)).call(this, props));

    _this.handleClose = function (id) {
      _this.setState({
        items: _this.state.items.filter(function (item) {
          return item.id !== id;
        })
      });
    };

    _this.addItem = function () {
      _this.setState({
        showModal: true
      });
    };

    _this.handleModalCancle = function () {
      _this.setState({
        showModal: false
      });
    };

    _this.handleModalOk = function () {
      var newID = genID(),
          count = _this.state.items.length + 1;
      _this.setState({
        items: [].concat(_toConsumableArray(_this.state.items), [{
          id: newID
        }]),
        showModal: false
      });
    };

    _this.state = {
      items: [{
        id: genID(),
        name: 'Andy'
      }, {
        id: genID(),
        name: 'Lucy'
      }, {
        id: genID(),
        name: 'Lily'
      }],
      showModal: false
    };
    return _this;
  }

  _createClass(ChoiceBox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.state.items.map(function (item, idx) {
        return _react2.default.createElement(
          _tag2.default,
          { key: item.id, closable: true,
            afterClose: function afterClose() {
              return _this2.handleClose(item.id);
            } },
          item.name || 'new item ' + (idx + 1)
        );
      });
      var Modal = this.props.modal;

      return _react2.default.createElement(
        _row2.default,
        null,
        _react2.default.createElement(
          _col2.default,
          { span: 8 },
          _react2.default.createElement(
            'div',
            { className: _style2.default.bordered },
            items,
            items.length == 0 && _react2.default.createElement(
              _button2.default,
              { size: 'large', type: 'dashed',
                onClick: this.addItem },
              '+ New Item'
            )
          )
        ),
        items.length > 0 && _react2.default.createElement(
          _col2.default,
          { span: 2, offset: 1 },
          _react2.default.createElement(
            _button2.default,
            { size: 'small', type: 'dashed',
              onClick: this.addItem },
            '+ New Item'
          )
        ),
        this.state.showModal && _react2.default.createElement(
          Modal,
          { visible: this.state.showModal,
            title: 'Choose',
            onOk: this.handleModalOk,
            onCancel: this.handleModalCancle },
          'Comfirm to add a new item ?'
        )
      );
    }
  }]);

  return ChoiceBox;
}(_react2.default.Component);

exports.default = ChoiceBox;