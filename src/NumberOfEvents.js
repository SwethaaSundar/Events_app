import React, { Component } from "react";
// import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    number: 32,
    errorText: "",
  };

  handleNumberChange = (event) => {
    let inputValue = event.target.value;
    this.props.updateEvents(undefined, inputValue);
    this.setState({ number: inputValue });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <h3>Number of events:</h3>
        <input
          id="number-of-events"
          type="number"
          className="number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
      </div>
    );
  }
}
export default NumberOfEvents;
