import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Validate from "./Validate";
import "../styles.css";

class Forms extends React.Component {
  render() {
    return (
      <div class="marginStyle">
        <table>
          <tr>
            <td>
              <h1>Forms</h1>
              <Form action="#">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Form controls</h2>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Example select</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Example multiple select</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Plaintext</h2>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="email@example.com"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
              </Form>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Form grid</h2>
              <Form>
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
              </Form>
              <br />
              <br />
              <h4>
                <b>
                  More complex layouts can also be created with the grid system
                </b>
              </h4>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Checkboxes and Radios</h2>
              <Form>
                {["checkbox", "radio"].map(type => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="2"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      disabled
                      label="3 (disabled)"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2 />
              <Validate />
              <hr />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Forms;
