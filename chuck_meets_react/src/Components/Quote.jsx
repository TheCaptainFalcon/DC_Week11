import React, { Component } from "react";

class Quote extends Component {
  render() {
    const getQuote = "Chuck eats dinosaurs for a snack"
    return (
      <div>
        <p>Chuck Says...</p>
        <p>{getQuote}</p>
      </div>
    );
  }
}

export default Quote;
