import React, { Component } from "react";

class BindEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Please click below button"
    };
    this.bindEvent = this.bindEvent.bind(this);
  }

  bindEvent = () => {
    this.setState({
      message: "You have successfully clicked on button"
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.bindEvent.bind(this)}>Bind Event</button>
        <br></br>
        <br></br>
        <button onClick={() => this.bindEvent()}>Bind Event</button>
        <br></br>
        <br></br>
        <button onClick={this.bindEvent}>Bind Event</button>
        <br></br>
        <br></br> */}
        <button onClick={this.bindEvent}>Bind Event</button>
      </div>
    );
  }
}

export default BindEvent;
