import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class Home_Component extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div style={{ margin: "300px", marginTop: "10px" }}>
        <Card>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoTiqH28yAfK9lWsybUSjqL7pfrmPEc5PulkJmCEqZc9HElri"
            width={405}
            hieght={400}
          />
          <Card.Content>
            <Card.Header>React JS component Demos</Card.Header>

            <Card.Description>
              Select the component from the list to see the Demo.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
export default Home_Component;
