if (process.env.__CLIENT__ === true) {
  require('./style.less');
}

import React from 'react';

import { Row, Col, Tag, Button } from 'antd';

export default class ChoiceBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: 1,
        name: 'Andy'
      }, {
        id: 2,
        name: 'Lucy'
      }, {
        id: 3,
        name: 'Lily'
      }]
    };
  }

  handleClose = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  addItem = () => {
    let seq = this.state.items.length + 1;
    this.setState({
      items: [...this.state.items, {
        id: seq,
        name: `new item ${seq}`
      }]
    });
  };

  render() {
    let items = this.state.items.map(item => {
      return (
        <Tag key={item.id} closable={true}
          afterClose={() => this.handleClose(item.id)}>
          {item.name}
        </Tag>
      );
    });
    if (items.length == 0) {
      items = [...items, (
        <Button size="large" type="dashed"
          onClick={this.addItem}>
          + New Item
        </Button>
      )];
    }

    return (
      <Row>
        <Col span={6}>
          <div className="bordered">{items}</div>
        </Col>
        {items.length > 0 ? (
          <Col span={2}>
            <Button size="small" type="dashed"
              onClick={this.addItem}>
              + New Item
            </Button>
          </Col>
        ) : ''}
      </Row>
    );
  }
}
