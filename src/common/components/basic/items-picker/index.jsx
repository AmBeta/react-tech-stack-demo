import React from 'react';

import { Row, Col, Checkbox, Button } from 'antd';

export default class ItemsPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'pineapple' },
        { id: 4, name: 'pear' },
        { id: 5, name: 'orange' },
      ],
      picked: []
    };
  }

  insertItem(item) {
    this.setState({
      picked: [...this.state.picked, item]
    });
  }

  removeItem(id) {
    this.setState({
      picked: this.state.picked.filter(item => item.id !== id)
    });
  }

  handleCheckAll = (evt) => {
    this.setState({
      picked: evt.target.checked
        ? [...this.state.items]
        : []
    });
  }

  render() {
    let allItems = this.state.items;
    let pickedItems = this.state.picked;
    return (
      <Row>
        <Col span={8}>
          <p>
            <Checkbox
              onChange={this.handleCheckAll}
              checked={allItems.length == pickedItems.length}
            >
              Choose All
            </Checkbox>
          </p>
          <hr/>
          {allItems.map(item => {
            return (
              <p key={item.id}>
                <Checkbox
                  checked={!!pickedItems.find(pItem => pItem.id == item.id)}
                  onChange={evt => {
                    evt.target.checked ? this.insertItem(item)
                      : this.removeItem(item.id)
                  }}
                >
                  {item.name}
                </Checkbox>
              </p>
            );
          })}
        </Col>
        <Col span={8} offset={1}>
          {pickedItems.map(item => {
            return (
              <p key={item.id}
                onClick={() => this.removeItem(item.id)}
              >
                {item.name}
              </p>
            );
          })}
        </Col>
      </Row>
    );
  }
}
