import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Progres2() {
  const now = 60;
  return (
    <div>
      <h2>Label</h2>
      <ProgressBar now={now} label={`${now}%`} />
    </div>
  );
}

export default Progres2;
