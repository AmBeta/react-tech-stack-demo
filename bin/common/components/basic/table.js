'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = require('antd/lib/pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fixedDataTable = require('fixed-data-table');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _refer = require('./refer');

var _refer2 = _interopRequireDefault(_refer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FixedDataTableControl = function (_React$Component) {
  _inherits(FixedDataTableControl, _React$Component);

  function FixedDataTableControl(props) {
    _classCallCheck(this, FixedDataTableControl);

    var _this = _possibleConstructorReturn(this, (FixedDataTableControl.__proto__ || Object.getPrototypeOf(FixedDataTableControl)).call(this, props));

    _this.state = {
      dataList: [],
      columns: {},
      editable: [],
      selectable: {},
      pagination: { total: 0, current: 0, pageSize: 0 },
      selectIndex: -1,
      readOnly: true,
      showAggregates: true,
      scrollRow: 0,
      scrollCol: 0,
      isPagination: true,
      keyNumber: {}
    };
    _this._onColumnResizeEndCallback = _this._onColumnResizeEndCallback.bind(_this); //列宽改变回调
    _this.rowClassNameGetter = _this.rowClassNameGetter.bind(_this); //行className改变
    _this._onRowClick = _this._onRowClick.bind(_this); //行单击事件
    _this._onRowDoubleClick = _this._onRowDoubleClick.bind(_this); //行双击事件
    _this.onCellClick = _this.onCellClick.bind(_this); //单元格单击事件
    _this.onCellblur = _this.onCellblur.bind(_this); //单元格丢失焦点事件
    _this._PaginChange = _this._PaginChange.bind(_this); //分页改变事件
    _this._setFooter = _this._setFooter.bind(_this); //设置footer事件
    _this.onKeyPress = _this.onKeyPress.bind(_this);
    return _this;
  }

  _createClass(FixedDataTableControl, [{
    key: 'rowClassNameGetter',
    value: function rowClassNameGetter(index) {
      var selectIndex = this.state.selectIndex;
      if (index === selectIndex) return 'public_fixedDataTableRow_selected';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.model) this.props.model.addListener(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.model) this.props.model.removeListener(this);
    }
    //设置grid中columns，datasource等属性

  }, {
    key: 'setGridProps',
    value: function setGridProps(params) {
      var KeyToNumber = {};
      var number = 0;
      var pageinfo = this.state.pagination;

      //栏目key与index对照
      for (var attr in params.columns) {
        if (number === 0) {
          KeyToNumber[attr] = 0;
        } else {
          KeyToNumber[attr] = number;
        }
        number = number + 1;
      }
      this.setState({
        showCheckBox: params.showCheckBox,
        showRowNo: params.showRowNo,
        readOnly: params.readOnly,
        dataList: params.rows,
        columns: params.columns,
        showAggregates: params.showAggregates,
        isRadio: !params.multiple,
        isPagination: params.pagination,
        keyNumber: KeyToNumber
      });
      if (params.rows !== undefined && !params.readOnly) {
        //设置初始单元格编辑状态 及 行选择初始状态
        var temp_editable = [];
        var temp_selectable = {};
        var length = params.rows.length;
        for (var i = 0; i < length; i++) {
          temp_editable[i] = {};
          temp_selectable[i] = false;
          for (var attr in params.columns) {
            if (attr === 'CheckBox' || 'GridRowNo') {
              temp_editable[i][attr] = true;
            } else {
              temp_editable[i][attr] = false;
            }
          }
        }
        temp_selectable[-1] = false;
        this.setState({
          editable: temp_editable,
          selectable: temp_selectable
        });
      }
    }
    //接受来自model的column信息

  }, {
    key: 'setColumns',
    value: function setColumns(columndata) {
      var dataList = this.state.dataList;
      this.setState({
        columns: columndata
      });
    }
    //接收来自model的data信息

  }, {
    key: 'setDataSource',
    value: function setDataSource(data) {
      var col = this.state.columns;
      //设置初始单元格编辑状态 及 行选择初始状态
      var temp_editable = [];
      var temp_selectable = {};
      var length = data.length;
      for (var i = 0; i < length; i++) {
        temp_editable[i] = {};
        temp_selectable[i] = false;
        for (var attr in col) {
          if (attr === 'CheckBox' || attr === 'GridRowNo') {
            temp_editable[i][attr] = true;
          } else {
            temp_editable[i][attr] = false;
          }
        }
      }
      temp_selectable[-1] = false;
      this.setState({
        editable: temp_editable,
        selectable: temp_selectable,
        dataList: data
      });
    }
    //组织column结构

  }, {
    key: 'RemodelingColumn',
    value: function RemodelingColumn(dataList, columnState) {
      var ret = [];
      if (this.state.showCheckBox && !columnState.CheckBox) columnState.CheckBox = { 'iFieldType': 2, 'width': 50 };
      if (this.state.showRowNo && !columnState.GridRowNo) columnState.GridRowNo = { 'iFieldType': 1, 'width': 50 };
      var column;
      for (var attr in columnState) {
        column = this.setColumn(attr, columnState, dataList);
        ret.push(column);
      }
      return ret;
    }
    //设置column

  }, {
    key: 'setColumn',
    value: function setColumn(attr, columnState, dataList) {
      var _this2 = this;

      var type = columnState[attr].iFieldType;
      var controlType = columnState[attr].cControlType;
      var width = columnState[attr].width || 150;
      var name = columnState[attr].cShowCaption;
      var isResizable = true;
      //		let isResizable = columnState[attr].isResizable;
      var headerCell = _react2.default.createElement(
        _fixedDataTable.Cell,
        null,
        name
      );
      var fiexd = false;
      var align = 'left';
      if (type === 2) {
        if (!this.state.isRadio) headerCell = this.RemodelingEditControl(type, controlType, '', -1);
        fiexd = true;
        align = 'center';
      }
      if (attr === 'GridRowNo') {
        headerCell = _react2.default.createElement(
          _fixedDataTable.Cell,
          null,
          '\u884C\u53F7'
        );
        fiexd = true;
        align = 'center';
      }
      return _react2.default.createElement(_fixedDataTable.Column, {
        allowCellsRecycling: true,
        columnKey: attr,
        isResizable: isResizable,
        header: headerCell,
        cell: function cell(rowIndex, type, bCanModify) {
          return _this2.setCell(rowIndex, columnState[attr].iFieldType, controlType, columnState[attr].bCanModify);
        },
        width: width,
        align: align,
        fixed: fiexd,
        footer: this._setFooter
      });
    }
    //设置cell

  }, {
    key: 'setCell',
    value: function setCell(rowIndex, type, controlType, bCanModify) {
      var index = rowIndex.rowIndex;
      var data = this.state.dataList;
      var columnKey = rowIndex.columnKey;
      if (data[index]) {
        if (bCanModify || type === 2 || columnKey === 'GridRowNo') {
          var _Cell = this.RemodelingCell(rowIndex, type, controlType, bCanModify);
          return _Cell;
        } else {
          return _react2.default.createElement(
            _fixedDataTable.Cell,
            { width: rowIndex.width, height: rowIndex.height },
            data[index][columnKey]
          );
        }
      }
    }
  }, {
    key: 'RemodelingCell',
    value: function RemodelingCell(rowIndex, type, controlType, bCanModify) {
      var _this3 = this;

      var index = rowIndex.rowIndex;
      var columnKey = rowIndex.columnKey;
      var data = this.state.dataList;
      var editable = false;
      var readOnly = this.state.readOnly;
      if (this.state.editable[index]) {
        editable = this.state.editable[index][columnKey];
      }
      //let editControls = this.RemodelingEditControl(type,controlType, data[index][columnKey], index);
      //let formatControls = this.RemodelingFormatControl(data[index][columnKey]);
      if (type === 2) {
        return _react2.default.createElement(
          _fixedDataTable.Cell,
          { width: rowIndex.width, height: rowIndex.height },
          this.RemodelingEditControl(type, controlType, data[index][columnKey], index, columnKey)
        );
      }
      if (columnKey === 'GridRowNo') {
        return _react2.default.createElement(
          _fixedDataTable.Cell,
          { width: rowIndex.width, height: rowIndex.height },
          index
        );
      }
      if (!bCanModify || readOnly) {
        return _react2.default.createElement(
          _fixedDataTable.Cell,
          { width: rowIndex.width, height: rowIndex.height },
          this.RemodelingFormatControl(data[index][columnKey])
        );
      }
      return editable ? _react2.default.createElement(
        _fixedDataTable.Cell,
        { width: rowIndex.width, height: rowIndex.height },
        _react2.default.createElement(
          'div',
          { className: 'public_fixedDataTableCell_empty' },
          this.RemodelingEditControl(type, controlType, data[index][columnKey], index, columnKey)
        )
      ) : _react2.default.createElement(
        _fixedDataTable.Cell,
        { width: rowIndex.width, height: rowIndex.height },
        _react2.default.createElement(
          'div',
          { className: 'public_fixedDataTableCell_empty', onClick: function onClick(e) {
              return _this3.onCellClick(e, index, columnKey);
            } },
          this.RemodelingFormatControl(data[index][columnKey])
        )
      );
    }
    //构建editControls结构

  }, {
    key: 'RemodelingEditControl',
    value: function RemodelingEditControl(ctype, controlType, text, index, columnKey) {
      var _this4 = this;

      var editRowModel = this.props.model.getEditRowModel();
      switch (controlType) {
        case 'Refer':
          return _react2.default.createElement(_refer2.default, { focus: true, model: editRowModel.get(columnKey) });
      }
      switch (ctype) {
        case 1:
          return _react2.default.createElement(_input2.default, { focus: true, defaultValue: text, model: editRowModel.get(columnKey) });
        case 2:
          return _react2.default.createElement(_checkbox2.default, { checked: this.state.selectable[index], onChange: function onChange(e, i) {
              return _this4.SelectChange(e, index);
            } });
        default:
          return _react2.default.createElement(_input2.default, { autofocus: 'true', defaultValue: text });
      }
    }
    //构建formatControls结构

  }, {
    key: 'RemodelingFormatControl',
    value: function RemodelingFormatControl(text) {
      if (text === '') return '';
      return text;
    }
    //监听选择

  }, {
    key: 'SelectChange',
    value: function SelectChange(e, index) {
      var temp_selectable = this.state.selectable;
      if (this.state.isRadio) {
        if (e.target.checked) {
          for (var attr in temp_selectable) {
            if (temp_selectable[attr]) {
              temp_selectable[attr] = false;
            }
          }
          temp_selectable[index] = e.target.checked;
          var indexes = [];
          indexes.push(index);
          this.props.model.select(indexes);
        } else {
          this.props.model.unselect(index);
        }
      } else {
        if (index === -1) {
          var selectAll = temp_selectable[-1];
          if (selectAll) {
            for (var attr in temp_selectable) {
              temp_selectable[attr] = false;
            }
            this.props.model.unselectAll();
          } else {
            for (var attr in temp_selectable) {
              temp_selectable[attr] = true;
            }
            this.props.model.selectAll();
          }
        } else {
          temp_selectable[index] = e.target.checked;
          var _indexes = [];
          for (var attr in temp_selectable) {
            if (temp_selectable[attr] && attr !== '-1') {
              _indexes.push(attr);
            }
          }
          if (e.target.checked) {
            this.props.model.select(_indexes);
          } else {
            this.props.model.unselect(index);
          }
        }
      }

      this.setState({
        selectable: temp_selectable
      });
    }
    //列宽改变拖动函数

  }, {
    key: '_onColumnResizeEndCallback',
    value: function _onColumnResizeEndCallback(newColumnWidth, columnKey) {
      var column = this.state.columns;
      column[columnKey].width = newColumnWidth;
      this.setState({
        columns: column
      });
    }
    //行单击事件

  }, {
    key: '_onRowClick',
    value: function _onRowClick(e, index) {
      if (!this.state.showCheckBox) this.props.model.select(index);
    }
    //

  }, {
    key: 'select',
    value: function select(indexes) {
      var selectable = this.state.selectable;
      for (var attr in indexes) {
        selectable[indexes[attr]] = true;
      }
      this.setState({
        selectIndex: indexes[0],
        scrollRow: indexes[0],
        selectable: selectable
      });
    }
    //单元格单击事件

  }, {
    key: 'onCellClick',
    value: function onCellClick(e, index, columnKey) {
      var editable = this.state.editable;
      var keyNumber = this.state.keyNumber;
      var keyindex = keyNumber[columnKey];
      if (editable[index] !== undefined) {
        editable[index][columnKey] = true;
        this.setState({ editable: editable, scrollCol: keyindex + 2 });
      }
    }
    //单元格丢失焦点事件

  }, {
    key: 'onCellblur',
    value: function onCellblur(index, columnKey, value) {
      // 更新数据
      if (this.props.model) this.props.model.setCellValue(index, columnKey, value);
      var state = this.state.editable;
      state[index][columnKey] = false;
      this.setState({
        editable: state
      });
    }
  }, {
    key: 'onKeyPress',
    value: function onKeyPress(e, index, columnKey) {
      if (arguments[0].key === 'Enter') {
        var editable = this.state.editable;
        var keyNumber = this.state.keyNumber;
        var keyIndex = keyNumber[columnKey];
        var column = this.state.columns;
        editable[index][columnKey] = false;
        var i = 1;
        for (var attr in keyNumber) {
          if (keyNumber[attr] === keyIndex + i) {
            if (column[attr].bCanModify) {
              editable[index][attr] = true;
            } else {
              i = i + 1;
            }
          }
        }
        this.setState({
          scrollCol: keyIndex + i + 2,
          editable: editable
        });
      }
    }
    //单元格数据改变事件

  }, {
    key: 'setCellValue',
    value: function setCellValue(data) {
      var dataList = [].concat(_toConsumableArray(this.state.dataList));
      dataList[data.rowIndex][data.cellName] = data.value;
      var state = this.state.editable;
      state[data.rowIndex][data.cellName] = false;
      this.setState({
        dataList: dataList,
        editable: state
      });
      if (data.mode === 'enter') this.onKeyPress({ key: 'Enter' }, data.rowIndex, data.cellName);
    }
  }, {
    key: 'setCellBlur',
    value: function setCellBlur(data) {
      var state = this.state.editable;
      state[data.rowIndex][data.cellName] = false;
      this.setState({
        editable: state
      });
    }
    //增行

  }, {
    key: 'insertRow',
    value: function insertRow(data) {
      var dataList = this.state.dataList;
      dataList.splice(data.index, 0, data.row);
      //设置新增行单元格初始状态
      var state = this.state.editable;
      var newstate = {};
      for (var field in state[0]) {
        if (field === 'CheckBox') {
          newstate[field] = true;
        } else {
          newstate[field] = false;
        }
      }
      state.push(newstate);
      this.setState({
        scrollRow: dataList.length - 1,
        editable: state,
        dataList: dataList
      });
      this.props.model.select(data.index);
    }
    //删行

  }, {
    key: 'deleteRows',
    value: function deleteRows(indexes) {
      var dataArry = this.state.dataList;
      var paginationData = this.state.pagination;
      indexes.forEach(function (index) {
        dataArry.splice(index, 1);
        paginationData.total = paginationData.total - 1;
      }, this);
      this.setState({
        pagination: paginationData,
        dataList: dataArry,
        selectIndex: -1
      });
    }

    //设置分页

  }, {
    key: 'setPageInfo',
    value: function setPageInfo(paginationlist) {
      var page = this.state.pagination;
      page.total = paginationlist.recordCount;
      page.current = paginationlist.pageIndex;
      page.pageSize = paginationlist.pageSize;
      this.setState({
        pagination: page
      });
    }
    //分页改变事件

  }, {
    key: '_PaginChange',
    value: function _PaginChange(page) {
      if (this.props.model) this.props.model.setPageIndex(page);
    }
  }, {
    key: '_setFooter',
    value: function _setFooter(cellProps) {
      var keyNumber = this.state.keyNumber;
      var column = this.state.columns;
      var showAggregates = this.state.showAggregates;
      if (showAggregates) {
        if (column['CheckBox'] === undefined) {
          if (column['GridRowNo'] === undefined) {
            if (keyNumber[cellProps.columnKey] === 0) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'public_fixedDataTableCell_cellContent' },
                  ' \u5C0F\u8BA1'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'public_fixedDataTableCell_cellContent' },
                  ' \u5408\u8BA1'
                )
              );
            }
          } else {
            if (cellProps.columnKey === 'GridRowNo') {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'public_fixedDataTableCell_cellContent' },
                  ' \u5C0F\u8BA1'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'public_fixedDataTableCell_cellContent' },
                  ' \u5408\u8BA1'
                )
              );
            }
          }
        } else {
          if (cellProps.columnKey === 'CheckBox') {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'public_fixedDataTableCell_cellContent' },
                ' \u5C0F\u8BA1'
              ),
              _react2.default.createElement(
                'div',
                { className: 'public_fixedDataTableCell_cellContent' },
                ' \u5408\u8BA1'
              )
            );
          }
        }
        if (column[cellProps.columnKey].bNeedSum) {
          var data = this.state.dataList;
          var sum = 0;
          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              sum = sum + data[i][cellProps.columnKey];
            }
          }
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'public_fixedDataTableCell_cellContent' },
              ' ',
              sum
            ),
            _react2.default.createElement(
              'div',
              { className: 'public_fixedDataTableCell_cellContent' },
              ' 999999'
            )
          );
        }
      }
    }
    //双击事件

  }, {
    key: '_onRowDoubleClick',
    value: function _onRowDoubleClick(e, index) {
      var dataArry = this.state.dataList;
      var rowData = dataArry[index];
      this.props.model.fireEvent('dblClick', rowData);
    }
  }, {
    key: 'setPage',
    value: function setPage(pagination, isPage) {
      if (isPage && pagination.total !== 0) {
        return _react2.default.createElement(_pagination2.default, {
          total: pagination.total,
          current: pagination.current,
          pageSize: pagination.pageSize,
          onChange: this._PaginChange,
          showQuickJumper: true,
          showTotal: function showTotal(total) {
            return '\u5171 ' + pagination.total + ' \u6761';
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var dataList = this.state.dataList;
      var columnState = this.state.columns;
      var column = this.RemodelingColumn(dataList, columnState);
      var pagination = this.setPage(this.state.pagination, this.state.isPagination);
      var footerHeight = 0;
      if (this.state.showAggregates) {
        footerHeight = this.props.footerHeigh || 60;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _fixedDataTable.Table,
          _extends({
            rowHeight: this.props.rowHeight || 50,
            headerHeight: this.props.headerHeight || 30,
            footerHeight: footerHeight,
            rowsCount: dataList.length,
            width: this.props.width || 1100,
            height: this.props.height || 400,
            onColumnResizeEndCallback: this._onColumnResizeEndCallback,
            isColumnResizing: false,
            onRowClick: this._onRowClick,
            onRowDoubleClick: this._onRowDoubleClick,
            rowClassNameGetter: this.rowClassNameGetter,
            scrollToRow: this.state.scrollRow,
            scrollToColumn: this.state.scrollCol
          }, this.props),
          column
        ),
        pagination
      );
    }
  }]);

  return FixedDataTableControl;
}(_react2.default.Component);

exports.default = FixedDataTableControl;