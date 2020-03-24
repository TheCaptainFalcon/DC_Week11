import React, { Component } from "react";

class Quote extends Component {
  state = {
    quote: "Chuck eats dinosaurs for a snack"
  }

  componentDidMount() {
    this.setState({
      quote: "Chuck can skip boulders across the lake"
    })
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
