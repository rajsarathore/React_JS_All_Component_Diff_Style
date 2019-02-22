import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
import { Image } from "react-bootstrap";
import image from "/src/resources/Pictures/reactjs.jpg";

class Images extends React.Component {
  render() {
    return (
      <div id="small2" align="center">
        <h1>Images</h1>
        <br />
        <hr />
        <br />
        <h2>Rounded Edge</h2>
        <Image src={image} width="300px" rounded />
        <br />
        <hr />
        <br />
        <br />
        <h2>Circle</h2>
        <Image src={image} width="300px" roundedCircle />
        <br />
        <hr />
        <br />
        <br />
        <h2>Thumbnail</h2>
        <Image src={image} thumbnail />
        <br />
        <hr />
        <br />
        <br />
      </div>
    );
  }
}

export default Images;
