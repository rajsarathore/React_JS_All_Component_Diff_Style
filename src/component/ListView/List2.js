import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

class List2 extends Component {
  render() {
    return (
      <div>
        <h1>Disabled</h1>
        <ListGroup>
          <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
        <br />
        <br />
      </div>
    );
  }
}

export default List2;
