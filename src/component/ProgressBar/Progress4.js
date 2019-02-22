import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Progres4() {
  return (
    <div>
      <h2>Striped</h2>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
    </div>
  );
}

export default Progres4;
