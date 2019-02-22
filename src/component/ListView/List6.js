import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

class List6 extends Component {
  render() {
    return (
      <div>
        <h1>Flush / No Border </h1>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default List6;
