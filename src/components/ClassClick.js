import React, { Component } from "react";

class ClassClick extends Component {
  clickMe() {
    alert("Class Button Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Class Click Button</button>
      </div>
    );
  }
}

export default ClassClick;
