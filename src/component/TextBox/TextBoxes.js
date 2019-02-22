import React from "react";
import "./styles.css";

class TextBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: ""
    };
    this.texts = this.texts.bind(this);
  }
  texts(t) {
    this.setState({ text1: t.target.value });
  }

  render() {
    return (
      <div style={{ margin: "100px", marginTop: "20px" }}>
        <h1 style={{ color: "blue" }}>Different types of textboxes</h1>

        <form id="f1">
          <table>
            <tr>
              <td>
                {" "}
                <label>
                  <h3>Normal TextBox</h3>
                </label>
              </td>
              <td>
                {" "}
                <input type="text" autofocus="true" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>
                  <h3>Text Box with width and height</h3>
                </label>
              </td>
              <td>
                {" "}
                <input type="text" id="text1" name="text_name" />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>
                  <h3>Read only text box</h3>
                </label>
              </td>
              <td>
                <input type="text" value="Read only" readonly />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <h3>Color TextBox</h3>
                </label>
              </td>
              <td>
                {" "}
                <input type="text" class="tb1" />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <h3>Colored Text TextBox</h3>
                </label>
              </td>
              <td>
                <input type="text" class="tb2" />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <h3>TextBox with Text outside</h3>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.text1}
                  onChange={this.texts}
                />
              </td>

              <h1>{this.state.text1}</h1>
            </tr>
            <tr>
              <td>
                <label>
                  <h3>Normal Text Area</h3>
                </label>
              </td>
              <td>
                <textarea />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <h3>Text Area</h3>
                </label>
              </td>
              <td>
                <textarea id="ta1" />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <h3>Color Text Area</h3>
                </label>
              </td>
              <td>
                <textarea id="ta2" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default TextBoxes;
