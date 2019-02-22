import React from "react";
import Alerts from "../component/Alert/Alerts";
import AlertDismissable from "../component/Alert/AlertDismissable";
class Alert_Component extends React.Component {
  render() {
    return (
      <div>
        <Alerts />
        <AlertDismissable />
      </div>
    );
  }
}
export default Alert_Component;
