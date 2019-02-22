import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Progres1() {
  return (
    <div>
      <h2>Normal</h2>
      <ProgressBar now={50} min-width={1} />
    </div>
  );
}

export default Progres1;
