import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Progress1 from "./Progress1";
import Progress2 from "./Progress2";
import Progress3 from "./Progress3";
import Progress4 from "./Progress4";
import Progress5 from "./Progress5";
import Progress6 from "./Progress6";
import "./styles.css";
class ProgressBars extends React.Component {
  render() {
    return (
      <div>
        <div id="small" align="center">
          <Progress1 />
          <br />
          <hr />
          <br />
          <Progress2 />
          <br />
          <hr />
          <br />
          <Progress3 />
          <br />
          <hr />
          <br />
          <Progress4 />
          <br />
          <hr />
          <br />
          <Progress5 />
          <br />
          <hr />
          <br />
          <Progress6 />
          <br />
          <hr />
          <br />
        </div>
      </div>
    );
  }
}
export default ProgressBars;
