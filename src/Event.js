import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };
  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <h2 className="summary">{`Event: ${event.summary}`}</h2>
        <p className="event-start">
          {`Start date: ${new Date(event.start.dateTime).toISOString()}`}
        </p>
        <p className="event-location">
          {/* {`@${event.summary} | ${event.location}`} */}
          {`Location: ${event.location}`}
        </p>
        {!collapsed && (
          <>
            <div className="details">
              <h3 className="about">About event:</h3>
              <a className="link" href={event.htmlLink}>
                See details on Google Calendar
              </a>
              <p className="description">{event.description}</p>
            </div>
          </>
        )}
        <button className="details-btn" onClick={() => this.toggleDetails()}>
          {collapsed ? "Show" : "Hide"} details
        </button>
      </div>
    );
  }
}
export default Event;
