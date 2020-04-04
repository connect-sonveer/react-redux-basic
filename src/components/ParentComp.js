import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sonveer"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sonveer1"
      })
    }, 2000);
  }

  render() {
    console.log('****Parent Component****')
    return <div>Parent Component
        <PureComp name={this.state.name} />
      <RegularComp name={this.state.name} />
    </div>;
  }
}

export default ParentComp;
