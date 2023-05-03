import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    number: 32,
    errorText: "",
  };

  handleNumberChange = (event) => {
    let inputValue = event.target.value;
    this.props.updateEvents(undefined, inputValue);
    this.setState({ number: inputValue });
    if (inputValue <= 0 || inputValue > 32) {
      this.setState({
        number: inputValue,
        errorText: "Enter a number between 1 and 32",
      });
    } else {
      return this.setState({
        number: inputValue,
        errorText: "",
      });
    }
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
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;
