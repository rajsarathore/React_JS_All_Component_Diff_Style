import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Progres3() {
  return (
    <div>
      <h2>Grouped</h2>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
}

export default Progres3;
