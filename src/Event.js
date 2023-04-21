import React, { Component } from "react";

class Event extends Component {
  state = {
    collapse: true,
  };
  handleItemClicked = () => {
    this.setState((prevState) => ({
      collapse: !prevState.collapse,
    }));
  };
  render() {
    const { event } = this.props;
    return (
      <div>
        <b className="title">Details: {event.summary}</b>
        {!this.collapse && (
          <ul className="details">
            <li>Description: {event.description}</li>
            <li>Venue: {event.location}</li>
            <li>Start: {new Date(event.start.dateTime).toISOString()}</li>
            <li>End: {new Date(event.end.dateTime).toISOString()}</li>
          </ul>
        )}
        <button
          className="detailsButton"
          onClick={() => this.handleItemClicked()}
        >
          Show Details
        </button>
      </div>
    );
  }
}
export default Event;
