import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {
  ButtonToolbar,
  Button,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";

class Buttons extends React.Component {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false
    };
  }
  buttonClicked() {
    alert("Button Clicked");
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { isLoading } = this.state;
    var styleButton = {
      margin: "20px"
    };
    return (
      <div style={{ margin: "100px", marginTop: "10px" }}>
        <h1 align="center">Button</h1>
        <table>
          <tr>
            <p>Button using 'React-bootstrap' package</p>
            <ButtonToolbar>
              <Button style={styleButton} variant="primary">
                Primary
              </Button>
              <Button style={styleButton} variant="secondary">
                Secondary
              </Button>
              <Button style={styleButton} variant="success">
                Success
              </Button>
              <Button style={styleButton} variant="warning">
                Warning
              </Button>
              <Button style={styleButton} variant="danger">
                Danger
              </Button>
              <Button style={styleButton} variant="info">
                Info
              </Button>
              <Button style={styleButton} variant="light">
                Light
              </Button>
              <Button style={styleButton} variant="dark">
                Dark
              </Button>
              <Button style={styleButton} variant="link">
                Link
              </Button>
              <Button style={styleButton} href="#">
                Link
              </Button>
            </ButtonToolbar>
            <br />
            <br />
            <p> Button with diff. Size </p>
            <div>
              <ButtonToolbar>
                <Button style={styleButton} variant="primary" size="lg">
                  Large button
                </Button>
                <Button style={styleButton} variant="secondary" size="lg">
                  Large button{" "}
                </Button>
              </ButtonToolbar>

              <ButtonToolbar>
                <Button style={styleButton} variant="primary" size="sm">
                  {" "}
                  Small button
                </Button>
                <Button style={styleButton} variant="secondary" size="sm">
                  Small button{" "}
                </Button>
              </ButtonToolbar>
            </div>

            <hr />
          </tr>
          <tr>
            <p>Button loading state</p>
            <Button
              variant="primary"
              disabled={isLoading}
              onClick={!isLoading ? this.handleClick : null}
            >
              {isLoading ? "Loading…" : "Click to load"}
            </Button>
          </tr>
          <hr />

          <tr>
            <p> Checkbox and Radio Button </p>
            <ButtonToolbar>
              <ToggleButtonGroup type="checkbox">
                <ToggleButton value={1}>Checkbox 1 </ToggleButton>
                <ToggleButton value={2}>Checkbox 2</ToggleButton>
                <ToggleButton value={3}>Checkbox 3 </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
            <br />

            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                <ToggleButton value={2}>Radio 2</ToggleButton>
                <ToggleButton value={3}>Radio 3</ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </tr>
          <hr />
          <tr>
            <p> Button using 'Button' tag </p>
          </tr>
          <tr>
            <button
              style={styleButton}
              onClick={this.buttonClicked}
              value="Click"
            >
              Click
            </button>
            <hr />
          </tr>
          <tr>
            {" "}
            <p>Button using 'input' tag </p>
          </tr>
          <tr>
            <input
              style={styleButton}
              type="submit"
              value="Click"
              onClick={this.buttonClicked}
            />
          </tr>
          <hr />
        </table>
      </div>
    );
  }
}

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}
export default Buttons;
