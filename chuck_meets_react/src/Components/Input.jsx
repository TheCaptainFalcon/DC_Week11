import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor="name">Enter a category</label>
        <input type="text" name="name" />
      </div>
    );
  }
}

export default Input;
