import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {
  DropdownButton,
  Dropdown,
  ButtonToolbar,
  SplitButton,
  Button,
  ButtonGroup
} from "react-bootstrap";

class DropDowns extends React.Component {
  render() {
    return (
      <div style={{ margin: "100px", marginTop: "10px" }}>
        <table>
          <tr>
            <td>
              <h1>Dropdowns</h1>
              <ButtonToolbar>
                {[
                  "Primary",
                  "Secondary",
                  "Success",
                  "Info",
                  "Warning",
                  "Danger"
                ].map(variant => (
                  <DropdownButton
                    title={variant}
                    variant={variant.toLowerCase()}
                    id={`dropdown-variants-${variant}`}
                    key={variant}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                ))}
              </ButtonToolbar>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Split button dropdowns</h2>
              <ButtonToolbar>
                {[
                  "Primary",
                  "Secondary",
                  "Success",
                  "Info",
                  "Warning",
                  "Danger"
                ].map(variant => (
                  <SplitButton
                    title={variant}
                    variant={variant.toLowerCase()}
                    id={`dropdown-split-variants-${variant}`}
                    key={variant}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </SplitButton>
                ))}
              </ButtonToolbar>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Sizing</h2>
              <ButtonToolbar>
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                  <DropdownType
                    size="lg"
                    title="Drop small"
                    id={`dropdown-button-drop-${idx}`}
                    key={idx}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownType>
                ))}
              </ButtonToolbar>
              <ButtonToolbar>
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                  <DropdownType
                    size="sm"
                    variant="secondary"
                    title="Drop small"
                    id={`dropdown-button-drop-${idx}`}
                    key={idx}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownType>
                ))}
              </ButtonToolbar>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Drop directions</h2>
              <ButtonToolbar>
                {["up", "down", "left", "right"].map(direction => (
                  <DropdownButton
                    drop={direction}
                    variant="secondary"
                    title={` Drop ${direction} `}
                    id={`dropdown-button-drop-${direction}`}
                    key={direction}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                ))}
              </ButtonToolbar>
              <br />

              <ButtonToolbar>
                {["up", "down", "left", "right"].map(direction => (
                  <SplitButton
                    drop={direction}
                    variant="secondary"
                    title={`Drop ${direction}`}
                    id={`dropdown-button-drop-${direction}`}
                    key={direction}
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </SplitButton>
                ))}
              </ButtonToolbar>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Dropdown items as Buttons</h2>
              <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Menu alignment</h2>
              <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>

              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Customization</h2>
              <ButtonToolbar>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    Pow! Zoom!
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup}>
                  <Button variant="info">mix it up style-wise</Button>
                  <Dropdown.Toggle
                    split
                    variant="success"
                    id="dropdown-custom-2"
                  />
                  <Dropdown.Menu className="super-colors">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>

              <hr />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default DropDowns;
