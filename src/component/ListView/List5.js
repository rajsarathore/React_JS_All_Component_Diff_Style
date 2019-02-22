import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

class List5 extends Component {
  render() {
    return (
      <div>
        <h1>Colored with Action</h1>
        <ListGroup>
          <ListGroup.Item>No style</ListGroup.Item>
          <ListGroup.Item variant="primary">Primary</ListGroup.Item>
          <ListGroup.Item action variant="secondary">
            Secondary
          </ListGroup.Item>
          <ListGroup.Item action variant="success">
            Success
          </ListGroup.Item>
          <ListGroup.Item action variant="danger">
            Danger
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            Warning
          </ListGroup.Item>
          <ListGroup.Item action variant="info">
            Info
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Light
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Dark
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default List5;
