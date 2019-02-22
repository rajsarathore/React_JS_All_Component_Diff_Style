import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

class List3 extends Component {
  render() {
    return (
      <div>
        <h1>Active</h1>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default List3;
