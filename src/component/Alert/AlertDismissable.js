import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Alert, Button } from "react-bootstrap";

class AlertDismissable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <div style={{ margin: "100px", marginTop: "1px" }}>
        <h2>AlertDismissable</h2>
        <p>
          "Dismissable" prop to add a functioning dismiss button to the Alert
        </p>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
      </div>
    );
  }
}
export default AlertDismissable;
