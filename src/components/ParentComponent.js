import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: "Sonveer"
    };

    this.greetHandler = this.greetHandler.bind(this);
  }

  greetParent() {
      this.setState({
          parent: `Hello Mr. ${this.state.parent}`
      }, () => {alert(`${this.state.parent}`)})
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
