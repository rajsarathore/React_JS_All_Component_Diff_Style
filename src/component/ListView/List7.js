import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

class List7 extends Component {
  render() {
    return (
      <div>
        <h1>Link </h1>
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
            Link 3
          </ListGroup.Item>
          <ListGroup.Item action href="#link4">
            Link 4
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default List7;
