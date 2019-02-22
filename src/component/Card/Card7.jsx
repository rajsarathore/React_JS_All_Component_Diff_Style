import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "/src/styles.css";

function Card7() {
  return (
    <div id="small2">
      <h1>Image Caps</h1>
      <h5>Images at the top or bottom of a card</h5>
      <Card>
        <Card.Img
          variant="top"
          src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
        />
      </Card>
    </div>
  );
}

export default Card7;
