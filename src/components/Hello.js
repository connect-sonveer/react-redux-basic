import React, { Component } from "react";

class Hello extends Component {
  render() {
    return React.createElement(
      "div",
      { id: "welcome" },
      React.createElement(
        "h1",
        { className: "userName" },
        "Welcome Sonveer Singh"
      )
    );
  }
}

export default Hello;
