import React, { Component } from "react";

class Quote extends Component {
  state = {
    quote: "Chuck eats dinosaurs for a snack"
  }

  render() {
    const { quote } = this.state;
    return (
      <div>
        <p>Chuck Says...</p>
        <p>{ quote } </p>
      </div>
    );
  }
}

export default Quote;
