import React from "react";
import ReactDOM from "react-dom";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Button_Component from "./userComponent/Button_Component";
import Alert_Component from "./userComponent/Alert_Component";
import TextBox_Component from "./userComponent/TextBox_Component";
import Home_Component from "./userComponent/Home_Component";
import ListView_Component from "./userComponent/ListView_Component";
import DropDown_Component from "./userComponent/DropDown_Component";
import Form_Component from "./userComponent/Form_Component";
import ProgressBar_Component from "./userComponent/ProgressBar_Component";
import Image_Component from "./userComponent/Image_Component";
import Card_Component from "./userComponent/Card_Component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      open: false,
      pageNumber: 0
    };
    this.handleDrawerClick = this.handleDrawerClick.bind(this);

    this.handleMenuClick0 = this.handleMenuClick0.bind(this);
    this.handleMenuClick1 = this.handleMenuClick1.bind(this);
    this.handleMenuClick2 = this.handleMenuClick2.bind(this);
    this.handleMenuClick3 = this.handleMenuClick3.bind(this);
    this.handleMenuClick4 = this.handleMenuClick4.bind(this);
    this.handleMenuClick5 = this.handleMenuClick5.bind(this);
    this.handleMenuClick6 = this.handleMenuClick6.bind(this);
    this.handleMenuClick7 = this.handleMenuClick7.bind(this);
    this.handleMenuClick8 = this.handleMenuClick8.bind(this);
    this.handleMenuClick9 = this.handleMenuClick9.bind(this);
  }

  handleDrawerClick() {
    if (this.state.open == false) this.setState({ open: true });
    else this.setState({ open: false });
  }

  handleMenuClick0() {
    this.setState({ pageNumber: 0 });
    this.handleDrawerClick();
  }
  handleMenuClick1() {
    this.setState({ pageNumber: 1 });
    this.handleDrawerClick();
  }
  handleMenuClick2() {
    this.setState({ pageNumber: 2 });
    this.handleDrawerClick();
  }
  handleMenuClick3() {
    this.setState({ pageNumber: 3 });
    this.handleDrawerClick();
  }
  handleMenuClick4() {
    this.setState({ pageNumber: 4 });
    this.handleDrawerClick();
  }
  handleMenuClick5() {
    this.setState({ pageNumber: 5 });
    this.handleDrawerClick();
  }
  handleMenuClick6() {
    this.setState({ pageNumber: 6 });
    this.handleDrawerClick();
  }
  handleMenuClick7() {
    this.setState({ pageNumber: 7 });
    this.handleDrawerClick();
  }
  handleMenuClick8() {
    this.setState({ pageNumber: 8 });
    this.handleDrawerClick();
  }
  handleMenuClick9() {
    this.setState({ pageNumber: 9 });
    this.handleDrawerClick();
  }

  onSelected() {
    var div1 = document.getElementById("body");
    switch (this.state.pageNumber) {
      case 0:
        ReactDOM.render(<Home_Component />, div1);
        break;
      case 1:
        ReactDOM.render(<Alert_Component />, div1);
        break;
      case 2:
        ReactDOM.render(<Button_Component />, div1);
        break;
      case 3:
        ReactDOM.render(<Card_Component />, div1);
        break;
      case 4:
        ReactDOM.render(<DropDown_Component />, div1);
        break;
      case 5:
        ReactDOM.render(<Form_Component />, div1);
        break;
      case 6:
        ReactDOM.render(<Image_Component />, div1);
        break;
      case 7:
        ReactDOM.render(<ListView_Component />, div1);
        break;
      case 8:
        ReactDOM.render(<ProgressBar_Component />, div1);
        break;
      case 9:
        ReactDOM.render(<TextBox_Component />, div1);
        break;
      default:
        ReactDOM.render(<h1>Default</h1>, div1);
        console.log("default show");
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="React Components"
            onLeftIconButtonClick={this.handleDrawerClick.bind()}
          />

          <Drawer open={this.state.open}>
            <MenuItem onClick={this.handleDrawerClick.bind()}>
              -- Back --
            </MenuItem>
            <MenuItem onClick={this.handleMenuClick0.bind()}>Home</MenuItem>
            <MenuItem onClick={this.handleMenuClick1.bind()}>Alert</MenuItem>
            <MenuItem onClick={this.handleMenuClick2.bind()}>Buttons</MenuItem>
            <MenuItem onClick={this.handleMenuClick3.bind()}>Cards</MenuItem>
            <MenuItem onClick={this.handleMenuClick4.bind()}>DropDown</MenuItem>
            <MenuItem onClick={this.handleMenuClick5.bind()}>Form</MenuItem>
            <MenuItem onClick={this.handleMenuClick6.bind()}>Image</MenuItem>
            <MenuItem onClick={this.handleMenuClick7.bind()}>ListView</MenuItem>
            <MenuItem onClick={this.handleMenuClick8.bind()}>
              ProgressBar
            </MenuItem>
            <MenuItem onClick={this.handleMenuClick9.bind()}>TextBox</MenuItem>
          </Drawer>
        </MuiThemeProvider>
        {this.onSelected()}
      </div>
    );
  }
}
export default App;
