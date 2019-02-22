import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card, ListGroup, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "/src/styles.css";

function Card10() {
  return (
    <div>
      <h1>Card Group</h1>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Card10;
