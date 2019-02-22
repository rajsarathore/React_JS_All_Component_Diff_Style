import React from "react";
import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "/src/styles.css";

function Card2() {
  return (
    <div id="small2">
      <h1>Card with Button</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card2;
