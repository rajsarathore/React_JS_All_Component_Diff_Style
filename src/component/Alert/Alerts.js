import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Alert } from "react-bootstrap";

export default class Alerts extends React.Component {
  render() {
    return (
      <div style={{ margin: "100px", marginTop: "10px" }}>
        <h1> Alerts</h1>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark"
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert with{" "}
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click
            if you like.
          </Alert>
        ))}
        <hr />
        <h2>Additional content</h2>
        <br />
        <h3>Success</h3>
        <br />

        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
        <hr />

        <h3>Error</h3>
        <h4>( Removable cross button )</h4>
        <br />
        <Alert dismissible variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
        <hr />
      </div>
    );
  }
}
