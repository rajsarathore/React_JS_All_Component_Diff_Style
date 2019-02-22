import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Progres5() {
  return (
    <div>
      <h2>Animated</h2>
      <ProgressBar animated now={45} />
    </div>
  );
}

export default Progres5;
