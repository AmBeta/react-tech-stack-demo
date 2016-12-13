'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var MenuItem = _menu2.default.Item;
var MenuItemGroup = _menu2.default.ItemGroup;

var MenuControl = function (_React$Component) {
  _inherits(MenuControl, _React$Component);

  function MenuControl(props) {
    _classCallCheck(this, MenuControl);

    var _this = _possibleConstructorReturn(this, (MenuControl.__proto__ || Object.getPrototypeOf(MenuControl)).call(this, props));

    _this.state = {
      theme: 'light',
      mode: 'horizontal',
      data: [{
        key: 'add', name: '新建', children: [{ key: 'btnAdd', name: '新建空白单据' }, { key: 'btnAddFromOrder', name: '从采购订单创建' }]
      }]
    };
    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.close = _this.close.bind(_this);
    return _this;
  }

  _createClass(MenuControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.model) {
        //this.props.model.addListener(this);
        this.recursive(this.state.data, function (key) {
          var model = this.props.model.getParent().get(key);
          if (model) model.addListener(this);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.model) {
        //this.props.model.removeListener(this);
        this.recursive(this.state.data, function (key) {
          var model = this.props.model.getParent().get(key);
          if (model) model.removeListener(this);
        });
      }
    }
  }, {
    key: 'recursive',
    value: function recursive(data, callback) {
      data.forEach(function (item) {
        callback.call(this, item.key);
        if (item.children) this.recursive(item.children, callback);
      }, this);
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(e) {
      if (this.props.model) {
        //this.props.model.fireEvent('click', e.key);
        var model = this.props.model.getParent().get(e.key);
        if (model) model.fireEvent('click');
      }
    }
  }, {
    key: 'handleOnSelect',
    value: function handleOnSelect(e) {
      console.log(e);
    }
  }, {
    key: 'handleOnOpen',
    value: function handleOnOpen(e) {
      console.log(e);
    }
  }, {
    key: 'handleOnClose',
    value: function handleOnClose(e) {
      console.log(e);
    }
  }, {
    key: 'communication',
    value: function communication(data) {
      this.setState({ external: data });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ external: null });
    }
  }, {
    key: 'render',
    value: function render() {
      var tProps = {
        theme: this.state.theme,
        mode: this.state.mode,
        onClick: this.handleOnClick
      };
      var loop = function loop(data) {
        return data.map(function (item) {
          if (item.children) {
            return _react2.default.createElement(
              SubMenu,
              { key: item.key, title: item.name },
              loop(item.children)
            );
          }
          return _react2.default.createElement(
            MenuItem,
            { key: item.key },
            item.name
          );
        });
      };
      var menuContent = _react2.default.createElement(
        _menu2.default,
        tProps,
        loop(this.state.data)
      );
      if (this.state.external) {
        var com = require(this.state.external.com);
        if (com && com.default) {
          var array = [menuContent];
          array.push(_react2.default.createElement(com.default, { data: this.state.external.data, close: this.close, width: 820 }));
          return _react2.default.createElement(
            'div',
            null,
            array
          );
        }
      }
      return menuContent;
    }
  }]);

  return MenuControl;
}(_react2.default.Component);

exports.default = MenuControl;
;