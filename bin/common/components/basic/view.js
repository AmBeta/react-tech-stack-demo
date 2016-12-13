'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _tabs = require('antd/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _alert = require('./alert.jsx');

var _alert2 = _interopRequireDefault(_alert);

var _checkboxgroup = require('./checkboxgroup.jsx');

var _checkboxgroup2 = _interopRequireDefault(_checkboxgroup);

var _button = require('./button.jsx');

var _button2 = _interopRequireDefault(_button);

var _datepicker = require('./datepicker.jsx');

var _datepicker2 = _interopRequireDefault(_datepicker);

var _label = require('./label.jsx');

var _label2 = _interopRequireDefault(_label);

var _progress = require('./progress.jsx');

var _progress2 = _interopRequireDefault(_progress);

var _radio = require('./radio.jsx');

var _radio2 = _interopRequireDefault(_radio);

var _radiogroup = require('./radiogroup.jsx');

var _radiogroup2 = _interopRequireDefault(_radiogroup);

var _rate = require('./rate.jsx');

var _rate2 = _interopRequireDefault(_rate);

var _refer = require('./refer.jsx');

var _refer2 = _interopRequireDefault(_refer);

var _steps = require('./steps.jsx');

var _steps2 = _interopRequireDefault(_steps);

var _switch = require('./switch.jsx');

var _switch2 = _interopRequireDefault(_switch);

var _table = require('./table.jsx');

var _table2 = _interopRequireDefault(_table);

var _input = require('./input.jsx');

var _input2 = _interopRequireDefault(_input);

var _tooltip = require('./tooltip.jsx');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _transfer = require('./transfer.jsx');

var _transfer2 = _interopRequireDefault(_transfer);

var _tree = require('./tree.jsx');

var _tree2 = _interopRequireDefault(_tree);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _tabs3 = require('../../redux/modules/tabs.jsx');

var tabsactions = _interopRequireWildcard(_tabs3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by wxk on 2016/7/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Option = _select2.default.Option;
//import Cascader from "./cascader.jsx";

//import Icon from './icon.jsx'

//import Menu from "./menu.jsx";
//import Message from "./message.jsx";
//import Notification from "./notification.jsx";
//import NumberBox from "./numberbox.jsx";

//import RadioButtonGroup from "./radiobuttongroup.jsx";

//import RangePicker from "./rangepicker.jsx";

//import "./test.jsx";
//import Input from "./textarea.jsx";./basic

//import Tip from "./tip.jsx";

//import TreeData from "./treedata.jsx";
//import Upload from "./upload.jsx";
var SubMenu = _menu2.default.SubMenu;
var MenuItem = _menu2.default.Item;
var MenuItemGroup = _menu2.default.ItemGroup;
//import * as metaaction from '../../redux/modules/meta.jsx'

//import { MetaViewModel } from '../index.jsx'

var TabPane = _tabs2.default.TabPane;
//import '../../../../demo/node_modules/antd/dist/antd.css';
// import Parser from 'xml2js';//parseString
//import cb from '../cube'
/*
 * json*/
var data = {
  "code": 200,
  "message": "操作成功",
  "data": {
    "viewApplication": {
      "view": {
        "containers": [{
          "controls": [{
            "cFieldName": "cMemo",
            "cItemName": "cMemo",
            "cCaption": "备注",
            "cShowCaption": "备注",
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": false,
            "bHidden": false,
            "bCanModify": true,
            "iMaxShowLen": 255,
            "iColWidth": 200,
            "iAlign": 2,
            "bShowIt": true,
            "bIsNull": true,
            "cControlType": "Input",
            "iOrder": 9999,
            "bMain": true,
            "id": 1,
            "iParentId": 1
          }, {
            "cFieldName": "ccuscode",
            "cItemName": "ccuscode",
            "cCaption": "客户编码",
            "cShowCaption": "客户编码",
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": false,
            "bHidden": false,
            "bCanModify": true,
            "iColWidth": 200,
            "iAlign": 2,
            "bShowIt": true,
            "bIsNull": false,
            "cControlType": "Input",
            "cRefType": "5",
            "iOrder": 9999,
            "bMain": true,
            "id": 3,
            "iParentId": 1
          }],
          "cTplGroupName": "销售订单表头",
          "iOrder": 9999,
          "bMain": true,
          "cGroupControlType": "TabPage",
          "id": 1,
          "iParentId": 1
        }, {
          "controls": [{
            "cFieldName": "cMemo",
            "cItemName": "cMemo",
            "cCaption": "备注",
            "cShowCaption": "备注",
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": false,
            "bHidden": false,
            "bCanModify": true,
            "iMaxShowLen": 255,
            "iColWidth": 200,
            "iAlign": 2,
            "bShowIt": true,
            "bIsNull": true,
            "cControlType": "Column",
            "iOrder": 9999,
            "bMain": false,
            "id": 2,
            "iParentId": 2
          }, {
            "cFieldName": "cinvcode",
            "cItemName": "cinvcode",
            "cCaption": "存货编码",
            "cShowCaption": "存货编码",
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": true,
            "bHidden": false,
            "bCanModify": true,
            "iMaxShowLen": 255,
            "iColWidth": 100,
            "iAlign": 2,
            "bShowIt": true,
            "bIsNull": false,
            "cRefType": "1",
            "cRefId": "AA_Inventory",
            "cRefRetId": "cInvCode",
            "iOrder": 9999,
            "bMain": false,
            "id": 4,
            "iParentId": 2
          }],
          "cTplGroupName": "销售订单表体",
          "iOrder": 9999,
          "bMain": false,
          "cGroupControlType": "Table",
          "id": 2,
          "iParentId": 1
        }],
        "cTemplateName": "销售订单显示模版1",
        "iTplMode": 1,
        "iWidth": 10000,
        "cTemplateTitle": "销售订单",
        "id": 1,
        "iParentId": 1
      },
      "cBillName": "销售订单",
      "id": 1
    },
    "viewmodelApplication": {
      "viewmodel": {
        "iTplId": 1,
        "cTemplateName": "销售订单显示模版1",
        "iTplMode": 1,
        "entities": [{
          "cEntityName": "销售订单主表",
          "cDataSourceName": "SO_SOMain",
          "cPrimaryKey": "id",
          "iBillEntityId": 1,
          "bMain": true,
          "fields": [{
            "cFieldName": "cMemo",
            "cItemName": "cMemo",
            "cCaption": "备注",
            "cShowCaption": "备注",
            "iBillEntityId": 1,
            "iBillTplGroupId": 1,
            "iTplId": 1,
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": false,
            "bHidden": false,
            "bCanModify": true,
            "iMaxShowLen": 255,
            "bShowIt": true,
            "bIsNull": true,
            "cTplGroupName": "销售订单表头",
            "bMain": true,
            "cDataSourceName": "SO_SOMain",
            "id": 1,
            "iParentId": 1
          }, {
            "cFieldName": "ccuscode",
            "cItemName": "ccuscode",
            "cCaption": "客户编码",
            "cShowCaption": "客户编码",
            "iBillEntityId": 1,
            "iBillTplGroupId": 1,
            "iTplId": 1,
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": false,
            "bHidden": false,
            "cRefType": "5",
            "bCanModify": true,
            "bShowIt": true,
            "bIsNull": false,
            "cTplGroupName": "销售订单表头",
            "bMain": true,
            "cDataSourceName": "SO_SOMain",
            "id": 3,
            "iParentId": 1
          }],
          "id": 1,
          "iParentId": 1
        }, {
          "cEntityName": "销售订单子表",
          "cDataSourceName": "SO_SODetails",
          "cPrimaryKey": "AutoId",
          "cForeignKey": "cSOCode",
          "iBillEntityId": 2,
          "bMain": false,
          "fields": [{
            "cFieldName": "cMemo",
            "cItemName": "cMemo",
            "cCaption": "备注",
            "cShowCaption": "备注",
            "iBillEntityId": 2,
            "iBillTplGroupId": 2,
            "iTplId": 1,
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": false,
            "bHidden": false,
            "bCanModify": true,
            "iMaxShowLen": 255,
            "bShowIt": true,
            "bIsNull": true,
            "cTplGroupName": "销售订单表体",
            "bMain": false,
            "cDataSourceName": "SO_SODetails",
            "id": 2,
            "iParentId": 2
          }, {
            "cFieldName": "cinvcode",
            "cItemName": "cinvcode",
            "cCaption": "存货编码",
            "cShowCaption": "存货编码",
            "iBillEntityId": 2,
            "iBillTplGroupId": 2,
            "iTplId": 1,
            "iMaxLength": 255,
            "iFieldType": 1,
            "bMustSelect": true,
            "bHidden": false,
            "cRefType": "1",
            "cRefId": "AA_Inventory",
            "cRefRetId": "cInvCode",
            "bCanModify": true,
            "iMaxShowLen": 255,
            "bShowIt": true,
            "bIsNull": false,
            "cTplGroupName": "销售订单表体",
            "bMain": false,
            "cDataSourceName": "SO_SODetails",
            "id": 4,
            "iParentId": 2
          }],
          "id": 2,
          "iParentId": 1
        }],
        "id": 1,
        "iParentId": 1
      },
      "iBillId": 1,
      "cBillName": "销售订单",
      "cBillNo": "17",
      "iSystem": 1,
      "id": 1
    }
  }
};
//JSON.parse
var spanv = {
  "1": "col-xs-1",
  "2": "col-xs-2",
  "3": "col-xs-3",
  "4": "col-xs-4",
  "5": "col-xs-5",
  "6": "col-xs-6",
  "7": "col-xs-7",
  "8": "col-xs-8",
  "9": "col-xs-9",
  "10": "col-xs-10",
  "11": "col-xs-11",
  "12": "col-xs-12",
  "13": "col-xs-13",
  "14": "col-xs-14",
  "15": "col-xs-15",
  "16": "col-xs-16",
  "17": "col-xs-17",
  "18": "col-xs-18",
  "19": "col-xs-19",
  "20": "col-xs-20",
  "21": "col-xs-21",
  "22": "col-xs-22",
  "23": "col-xs-23",
  "24": "col-xs-24"
};

var controlKey = 0;
function show(content) {
  if (false) {
    console.log(content);
  }
}

var Meta = function (_Component) {
  _inherits(Meta, _Component);

  function Meta(props) {
    _classCallCheck(this, Meta);

    var _this = _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).call(this, props));

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      console.log('this.props.id:' + _this.props.id + 'nextProps.id:' + nextProps.id);
      console.log(nextProps.id !== _this.props.id);
      return nextProps.id !== _this.props.id;
    };

    return _this;
  }

  _createClass(Meta, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var timestamp = new Date().getTime();
      console.log('timestamp-begin' + timestamp);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.vm.addListener(this);
      var timestamp = new Date().getTime();
      console.log('timestamp-end' + timestamp);
    }
  }, {
    key: 'communication',
    value: function communication(action) {
      // action.type, action.payload
      var tabsactions = this.props.tabsactions;

      var timestamp = new Date().getTime();
      tabsactions.TabAdd({
        title: action.payload.menuName,
        index: timestamp,
        content: {
          vm: action.payload.vm,
          metaData: action.payload.metaData
        }
      });
    }
  }, {
    key: 'comAlign',
    value: function comAlign(list, coms, callback) {
      var comArray = [];
      var top = [],
          bottom = [],
          left = -1;
      list.forEach(function (ele, i) {
        if (ele.cAlign) {
          console.log(ele.cAlign);
          switch (ele.cAlign.toLowerCase()) {
            case 'top':
              console.log('push top');
              console.log(ele);
              top.push(i);
              comArray.push(coms[i]);
              comArray.push(_react2.default.createElement(
                'p',
                null,
                '------------------------------------',
                'top',
                '-',
                i,
                '--------------------------------------'
              ));
              break;
            case 'left':
              left = i;
              comArray.push(_react2.default.createElement(
                'div',
                { style: 'float: left;width: 25%' },
                coms[i]
              ));
              break;
            case 'bottom':
              console.log('push bottom');
              console.log(ele);
              bottom.push(i);
              break;
            default:
              break;
          }
        }
      });
      //comArray
      if (top.length > 0) {
        coms.forEach(function (ele, i) {
          if (-1 === top.indexOf(i)) {
            if (-1 === bottom.indexOf(i)) {
              comArray.push(ele);
              comArray.push(_react2.default.createElement(
                'p',
                null,
                '-------------------------------------',
                i,
                '--------------------------------------'
              ));
            }
          }
        });
        bottom.forEach(function (ele) {
          console.log('push bottom');
          console.log(ele);
          comArray.push(coms[ele]);
          comArray.push(_react2.default.createElement(
            'p',
            null,
            '------------------------------------',
            'bottom',
            '-',
            ele,
            '--------------------------------------'
          ));
        });
      } else {
        if (left !== -1) {
          (function () {
            var comsTemp = [];
            coms.forEach(function (ele, i) {
              if (i !== left) {
                comsTemp.push(ele);
              }
            });
            comArray.push(_react2.default.createElement(
              'div',
              { style: 'float: left;width: 75%' },
              comsTemp
            ));
          })();
        }
      }
      callback(comArray);
    }
  }, {
    key: 'parseControlrMeta',
    value: function parseControlrMeta(meta, callback) {
      if (!meta) {
        return;
      }
      var component = void 0,
          cCaption = meta.cShowCaption,
          cControlType = meta.cControlType;
      if (!cControlType) {
        return;
      }
      show('cCaption');
      show(cCaption);
      show('cControlType');
      show(cControlType.toLowerCase());
      //cCaption = cControlType;
      switch (cControlType.toLowerCase()) {
        case 'button':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 2, sm: 2, md: 2, lg: 2 },
            _react2.default.createElement(_button2.default, _extends({
              value: cCaption,
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'checkbox':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(
              _button2.default,
              _extends({
                model: this.props.vm.get(meta.cItemName)
              }, meta),
              cCaption
            )
          );
          break;
        case 'cascader':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(Cascader, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'checkboxGroup':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_checkboxgroup2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'datepicker':
          //model={this.state.vm.get(meta.field)}
          component = _react2.default.createElement(
            _col2.default,
            { xs: 8 },
            _react2.default.createElement(_datepicker2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'icon':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(Icon, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'input':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 8 },
            _react2.default.createElement(_input2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'message':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(Message, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'menuitem':
          //<Col xs={24} sm={24} md={6} lg={4}>
          component = _react2.default.createElement(
            _button2.default,
            {
              value: cCaption },
            cCaption
          );
          break;
        case 'notification':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(Notification, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'numberBox':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(NumberBox, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'progress':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_progress2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'radio':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_radio2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'rate':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_rate2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'refer':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 12, lg: 8 },
            _react2.default.createElement(_refer2.default, _extends({
              value: cCaption,
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'steps':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_steps2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'spliter':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 1, sm: 1, md: 1, lg: 1 },
            _react2.default.createElement(
              'p',
              null,
              'spliter'
            )
          );
          break;
        case 'switch':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_switch2.default, _extends({
              model: this.props.vm.get(meta.cItemName)
            }, meta))
          );
          break;
        case 'textbox':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 2, sm: 2, md: 2, lg: 2 },
            _react2.default.createElement(
              'p',
              null,
              cCaption
            )
          );
          break;
        case 'tip':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(Tip, null)
          );
          break;
        case 'tooltip':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_tooltip2.default, null)
          );
          break;
        case 'transfer':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(_transfer2.default, null)
          );
          break;
        case 'treeData':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(TreeData, null)
          );
          break;
        case 'upload':
          component = _react2.default.createElement(
            _col2.default,
            { xs: 24, sm: 24, md: 6, lg: 4 },
            _react2.default.createElement(Upload, null)
          );
          break; //       TreeData Upload
        default:
          component = _react2.default.createElement(
            'div',
            null,
            cCaption
          );
          break;
      }
      if (callback) {
        callback(component);
      }
    }
  }, {
    key: 'parseContainerMeta',
    value: function parseContainerMeta(meta, com, callback) {
      var component = void 0;

      if (!meta) {
        return;
      }
      var cCaption = meta.cCaption;
      var cTplGroupName = meta.cTplGroupName,
          cControlType = meta.cControlType,
          cName = meta.cName;
      if (!cControlType) {
        return;
      }
      show('Con-cControlType');
      show(cControlType);
      show(cControlType.toLowerCase());
      switch (cControlType.toLowerCase()) {
        case 'toolbar':
          //show(meta.iCols);
          show(cName);
          show(cCaption);
          //show(spanv[meta.colspan])
          if (com) {
            component = _react2.default.createElement(
              _row2.default,
              null,
              _react2.default.createElement(
                _col2.default,
                { xs: 24, sm: 24, md: 18, lg: 20 },
                com
              )
            );
          }
          break;
        case 'group':
          //TabPane tab={cCaption} key={controlKey}
          show('controlKey');
          show(controlKey);
          if (com) {
            show(com);
            show(cCaption);
            component = _react2.default.createElement(
              TabPane,
              { tab: cName, key: controlKey.toString() },
              com
            );
            controlKey++;
          }
          break;

        case 'tabpage':
          //Tabs
          controlKey = 1;
          show('controlKey');
          show(controlKey);
          if (com) {
            show(com);
            component = _react2.default.createElement(
              _row2.default,
              null,
              _react2.default.createElement(
                _tabs2.default,
                null,
                com
              )
            );
          }
          break;
        case 'header':
        case 'footer':
          //TabPane tab={cCaption} key={controlKey}
          show('controlKey');
          show(controlKey);
          if (com) {
            show(com);
            show(cCaption);
            component = _react2.default.createElement(
              _form2.default,
              { horizontal: true, className: 'ant-advanced-search-form' },
              _react2.default.createElement(
                _row2.default,
                { gutter: 16 },
                com
              )
            );
            controlKey++;
          }
          break;
        case 'table':
          //TabPane tab={cCaption} key={controlKey}
          show('controlKey');
          show(controlKey);
          if (com) {
            show(com);
            show(cCaption);
            var columns = com.map(function (item, i) {
              return {
                title: item.cShowCaption,
                dataIndex: item.cItemName,
                key: item.cShowCaption + '-' + i
              };
            });
            var dataSource = [{
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号'
            }, {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号'
            }];
            //dataSource={dataSource} columns={columns}
            component = _react2.default.createElement(_table2.default, { model: this.props.vm.get(meta.childrenField || meta.cDataSourceName) });
          }
          break;
        /*case 'TabPage':
          //Tabs
          controlKey = 1;
          show('controlKey');
          show(controlKey);
          if(com) {
            show(com);
            component = (
              <div>
                {com}
              </div>
            );
          }
          break;*/
        case 'grid':
          if (com) {
            component = _react2.default.createElement(
              _row2.default,
              null,
              com
            );
          }
          break;
        case 'menu':
          if (com) {
            component = _react2.default.createElement(
              _select2.default,
              null,
              com
            );
          }
          break;
        case 'submenu':
          if (com) {
            component = _react2.default.createElement(
              _row2.default,
              null,
              com
            );
          }
          break;
        case 'tree':
          if (com) {
            component = _react2.default.createElement(
              _row2.default,
              null,
              com
            );
          }
          break;
        case 'radiogroup':
          if (com) {
            component = _react2.default.createElement(
              _row2.default,
              null,
              com
            );
          }
          break; //Menu
        case 'datagrid':
          component = _react2.default.createElement(
            _row2.default,
            null,
            com
          );
          break;
        default:
          component = _react2.default.createElement(
            _row2.default,
            null,
            com
          );
          break;
      }
      if (callback) {
        callback(component);
      }
    }
  }, {
    key: 'parseColumn',
    value: function parseColumn(column, callback) {
      var _this2 = this;

      var con = void 0,
          componentArr = [];
      var i = 1;
      show('column');
      column.forEach(function (ele) {
        show('column-' + i);
        show(ele);
        _this2.parseControlrMeta(ele, function (com) {
          con = com;
        });
        show(con);
        componentArr.push(con);
        i++;
      });
      if (callback) {
        callback(componentArr);
      }
    }
  }, {
    key: 'parseControl',
    value: function parseControl(control, callback) {
      var _this3 = this;

      var con = void 0,
          componentArr = [];
      var i = 1;
      show('control');
      control.forEach(function (ele) {
        show('Control-' + i);
        show(ele.$);
        if (ele.column) {
          //show(containerele.control);
          _this3.parseColumn(ele.column, function (com) {
            con = com;
          });
          _this3.parseContainerMeta(ele, con, function (com) {
            con = com;
          });
        } else {
          //if(ele.control){
          if (ele.controls) {
            show('eleControl');
            show(ele);
          }
          _this3.parseControlrMeta(ele, function (com) {
            con = com;
          });
          //show(con);
        }

        show(con);
        componentArr.push(con);
        i++;
      });
      if (callback) {
        callback(componentArr);
      }
    }
  }, {
    key: 'parseContainer',
    value: function parseContainer(ele, callback) {
      var _this4 = this;

      var componentArr = [];
      var i = 1,
          j = 1;
      //show('parseContainer ok')
      var con = void 0;
      //show(ele)
      //show('container');
      //show(ele.container);
      if (ele) {
        ele.forEach(function (containerele) {
          show('Container-' + i);
          _this4.parseContainerMeta(containerele);
          if (containerele.containers) {
            _this4.parseContainer(containerele.containers, function (com) {
              con = com;
            });
          } else {
            if (containerele.controls) {
              _this4.parseControl(containerele.controls, function (com) {
                con = com;
              });
            }
            //show(con);
          }
          show(con);
          show('parseContainerMeta');
          _this4.parseContainerMeta(containerele, con, function (com) {
            con = com;
          });
          show('component-' + j);
          //show(con);
          show('push');
          show(con);
          componentArr.push(con);
          j++;
        });
        i++;
        var flag = false;
        /*if(-1!==ele.indexOf('cAlign')){
          console.log('cAlign ok');
          flag = true;
        }*/
        ele.forEach(function (e) {
          if (e.cAlign) {
            flag = true;
          }
        });
        if (flag) {
          console.log('cAlign');
          //console.log(ele[0]);
          this.comAlign(ele, componentArr, function (comArray) {
            componentArr = comArray;
          });
        }
      }
      if (callback) {
        callback(componentArr);
      }
    }
  }, {
    key: 'parseView',
    value: function parseView(viewArray, callback) {
      var com = void 0,
          componentArr = [],
          meta = this.props.meta,
          vm = meta.vm;

      show(viewArray);
      if (viewArray) {
        var containerArray = viewArray.containers;
        if (containerArray) {
          this.parseContainer(containerArray, function (component) {
            com = component;
          });
        }

        //<MetaView {...viewmeta} key="MetaView" />
        //componentArr.push(<MetaViewModel vm={vm} key="MetaViewModel" />);
        componentArr.push(com);
        if (callback) {
          callback(componentArr);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var array = [],
          metaData = this.props.metaData,
          jsonData = void 0;

      if (metaData) {
        show('jsonData--');
        show(metaData); //viewApplication['data']['viewApplication']
        var viewarray = metaData['view']; //[0]['container']['data']['viewApplication']['view']
        this.parseView(viewarray, function (componentArr) {
          array = componentArr;
        });
        show(array);
        var timestamp = new Date().getTime();
        console.log('meta-timestamp' + timestamp);
      }
      return _react2.default.createElement(
        'div',
        null,
        array
      );
    }
  }]);

  return Meta;
}(_react.Component);

function mapStateToProps(state) {
  return {
    //modal: state.modal.toJS(),
    //tree : state.tree.toJS(),
    //meta : state.meta.toJS(),
    tabs: state.tabs.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //metaaction : bindActionCreators(metaaction, dispatch),
    //modalactions: bindActionCreators(modalactions, dispatch),
    //treeactions : bindActionCreators(treeactions , dispatch)//['view']
    tabsactions: (0, _redux.bindActionCreators)(tabsactions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Meta);