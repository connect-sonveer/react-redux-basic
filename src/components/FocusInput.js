import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputFocusRef = React.createRef();
  }

  clickHandler = () => {
    this.inputFocusRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.inputFocusRef} />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    );
  }
}

export default FocusInput;
