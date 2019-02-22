import React from "react";
import ReactDOM from "react-dom";
import { ListGroup } from "react-bootstrap";
import List1 from "../component/ListView/List1";
import List2 from "../component/ListView/List2";
import List3 from "../component/ListView/List3";
import List4 from "../component/ListView/List4";
import List5 from "../component/ListView/List5";
import List6 from "../component/ListView/List6";
import List7 from "../component/ListView/List7";
import "bootstrap/dist/css/bootstrap.css";

function ListView_Component() {
  return (
    <div align="center">
      <table>
        <tr>
          <td>
            <List1 />
          </td>
        </tr>
        <tr>
          <td>
            <List2 />
          </td>
        </tr>
        <tr>
          <td>
            <List3 />
          </td>
        </tr>
        <tr>
          <td>
            <List4 />
          </td>
        </tr>
        <tr>
          <td>
            <List5 />
          </td>
        </tr>
        <tr>
          <td>
            <List6 />
          </td>
        </tr>
        <tr>
          <td>
            <List7 />
          </td>
        </tr>
      </table>
      <hr />
      <br />
    </div>
  );
}
export default ListView_Component;
