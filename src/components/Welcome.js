import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, hero } = this.props;
    return (
      <div>
        Welcome {name}, you love {hero} and eats Burger
      </div>
    );
  }
}

export default Welcome;
