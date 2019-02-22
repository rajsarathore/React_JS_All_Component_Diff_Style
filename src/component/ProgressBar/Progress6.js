import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Progres6() {
  return (
    <div>
      <h2>Stacked</h2>
      <ProgressBar>
        <ProgressBar striped variant="success" now={35} key={1} />
        <ProgressBar variant="warning" now={20} key={2} />
        <ProgressBar striped variant="danger" now={10} key={3} />
      </ProgressBar>
    </div>
  );
}

export default Progres6;
