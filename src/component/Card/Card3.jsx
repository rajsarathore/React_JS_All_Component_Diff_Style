import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "/src/styles.css";

function Card3() {
  return (
    <div id="small2">
      <h1>Title Text Links</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card3;
