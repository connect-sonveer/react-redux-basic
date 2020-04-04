import React, { Component } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.CBRef = null;
    this.setCBRef = element => {
      this.CBRef = element;
    };
  }

  componentDidMount() {
      if(this.CBRef){
        this.CBRef.focus();
      }
  }

  render() {
    return (
      <div>
        Name : <input type="text" name="fullname" ref={this.setCBRef}></input>
      </div>
    );
  }
}

export default Refs;
