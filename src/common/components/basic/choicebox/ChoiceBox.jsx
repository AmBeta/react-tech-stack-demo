// if (process.env.__CLIENT__ === true) {
//   require('./style.less');
// }

import React from 'react';
import styles from './style.less';

import { Row, Col, Tag, Button } from 'antd';

const genID = (function () {
  let id = 0;
  return function () {
    return id++;
  };
})();

export default class ChoiceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  handleClose = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  addItem = () => {
    this.setState({
      showModal: true
    });
  };

  handleModalCancle = () => {
    this.setState({
      showModal: false
    });
  };

  handleModalOk = () => {
    let newID = genID(),
      count = this.state.items.length + 1;
    this.setState({
      items: [...this.state.items, {
        id: newID
      }],
      showModal: false
    });
  };

  render() {
    let items = this.state.items.map((item, idx) => {
      return (
        <Tag key={item.id} closable={true}
          afterClose={() => this.handleClose(item.id)}>
          {item.name || `new item ${idx + 1}`}
        </Tag>
      );
    });
    let Modal = this.props.modal;

    return (
      <Row>
        <Col span={8}>
          <div className={styles.borderedBox}>
            <div className="item"></div>
            {items}
            {items.length == 0 &&
              <Button size="large" type="dashed"
                onClick={this.addItem}>
                + New Item
              </Button>
            }
          </div>
        </Col>
        {items.length > 0 &&
          <Col span={2} offset={1}>
            <Button size="small" type="dashed"
              onClick={this.addItem}>
              + New Item
            </Button>
          </Col>
        }
        {this.state.showModal &&
          <Modal visible={this.state.showModal}
            title="Choose"
            onOk={this.handleModalOk}
            onCancel={this.handleModalCancle}>
            Comfirm to add a new item ?
          </Modal>
        }
      </Row>
    );
  }
}
