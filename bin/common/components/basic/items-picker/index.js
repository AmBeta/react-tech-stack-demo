'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemsPicker = function (_React$Component) {
  _inherits(ItemsPicker, _React$Component);

  function ItemsPicker(props) {
    _classCallCheck(this, ItemsPicker);

    var _this = _possibleConstructorReturn(this, (ItemsPicker.__proto__ || Object.getPrototypeOf(ItemsPicker)).call(this, props));

    _this.handleCheckAll = function (evt) {
      _this.setState({
        picked: evt.target.checked ? [].concat(_toConsumableArray(_this.state.items)) : []
      });
    };

    _this.state = {
      items: [{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 3, name: 'pineapple' }, { id: 4, name: 'pear' }, { id: 5, name: 'orange' }],
      picked: []
    };
    return _this;
  }

  _createClass(ItemsPicker, [{
    key: 'insertItem',
    value: function insertItem(item) {
      this.setState({
        picked: [].concat(_toConsumableArray(this.state.picked), [item])
      });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(id) {
      this.setState({
        picked: this.state.picked.filter(function (item) {
          return item.id !== id;
        })
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var allItems = this.state.items;
      var pickedItems = this.state.picked;
      return _react2.default.createElement(
        _row2.default,
        null,
        _react2.default.createElement(
          _col2.default,
          { span: 8 },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _checkbox2.default,
              {
                onChange: this.handleCheckAll,
                checked: allItems.length == pickedItems.length
              },
              'Choose All'
            )
          ),
          _react2.default.createElement('hr', null),
          allItems.map(function (item) {
            return _react2.default.createElement(
              'p',
              { key: item.id },
              _react2.default.createElement(
                _checkbox2.default,
                {
                  checked: !!pickedItems.find(function (pItem) {
                    return pItem.id == item.id;
                  }),
                  onChange: function onChange(evt) {
                    evt.target.checked ? _this2.insertItem(item) : _this2.removeItem(item.id);
                  }
                },
                item.name
              )
            );
          })
        ),
        _react2.default.createElement(
          _col2.default,
          { span: 8, offset: 1 },
          pickedItems.map(function (item) {
            return _react2.default.createElement(
              'p',
              { key: item.id,
                onClick: function onClick() {
                  return _this2.removeItem(item.id);
                }
              },
              item.name
            );
          })
        )
      );
    }
  }]);

  return ItemsPicker;
}(_react2.default.Component);

exports.default = ItemsPicker;