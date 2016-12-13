'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeControl = undefined;

var _tree = require('antd/lib/tree');

var _tree2 = _interopRequireDefault(_tree);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import cb from '../cube.js';


var TreeNode = _tree2.default.TreeNode;

var TreeControl = exports.TreeControl = function (_React$Component) {
  _inherits(TreeControl, _React$Component);

  function TreeControl(props) {
    _classCallCheck(this, TreeControl);

    var _this = _possibleConstructorReturn(this, (TreeControl.__proto__ || Object.getPrototypeOf(TreeControl)).call(this, props));

    _this.state = {
      expendall: _this.props.expendall,
      multiple: _this.props.multiple,
      checkable: _this.props.checkable,
      defaultExpandAll: _this.props.defaultExpandAll,
      keyField: _this.props.keyField || 'key',
      titleField: _this.props.titleField || 'title',
      dataSource: []
    };
    _this.onSelect = _this.onSelect.bind(_this);
    return _this;
  }

  _createClass(TreeControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.model) this.props.model.addListener(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.model) this.props.model.removeListener(this);
    }
  }, {
    key: 'onSelect',
    value: function onSelect(selectedKeys, e) {
      if (this.props.model) this.props.model.select(selectedKeys);
    }
    //function(selectedKeys, e:{selected: bool, selectedNodes, node, event})

  }, {
    key: 'render',
    value: function render() {
      var loop = function loop(data) {
        return data.map(function (item) {
          if (item.children) {
            expandedKeys.push(item[keyField]);
            return _react2.default.createElement(
              TreeNode,
              { data: item, title: item[titleField], key: item[keyField] },
              loop(item.children)
            );
          } //item.key||item.menu_code
          expandedKeys.push(item[keyField]);
          return _react2.default.createElement(TreeNode, { data: item, title: item[titleField], key: item[keyField], isLeaf: item.isLeaf, disabled: item.disabled }); //onClick={}
        });
      };
      var treeData = void 0,
          titleField = void 0,
          keyField = void 0;
      if (this.props.treeData) {
        treeData = this.props.treeData;
        titleField = this.props.titleField;
        keyField = this.props.keyField;
        /*console.log('tree props');
        console.log(treeData)*/
      } else {
        treeData = this.state.dataSource;
        titleField = this.state.titleField;
        keyField = this.state.keyField;
        /*console.log('tree state');
        console.log(treeData)*/
      }
      var expandedKeys = [];
      var treeNodes = loop(treeData);
      var treeProps = {
        multiple: this.state.multiple,
        checkable: this.state.checkable,
        // expandedKeys:expandedKeys,
        defaultExpandAll: this.state.defaultExpandAll
      };
      if (this.state.expendall) {
        treeProps.expandedKeys = expandedKeys;
      }
      return _react2.default.createElement(
        _tree2.default,
        _extends({ onSelect: this.props.onSelect || this.onSelect }, treeProps),
        treeNodes
      );
    }
  }]);

  return TreeControl;
}(_react2.default.Component);

;
exports.default = TreeControl;
/*function mapStateToProps(state){
	return {
		$$modal : state.modal
	}
}

function mapDispatchToProps(dispatch){
	return {
		modalactions : bindActionCreators( modalactions , dispatch )
	}
}

export default connect(
	mapStateToProps ,
	mapDispatchToProps
)();*/