import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render summary title correctly", () => {
    const summary = EventWrapper.find("h2");
    const summaryString = event.summary;
    expect(summary).toBeDefined();
    expect(summary.text()).toBe(`Details: ${summaryString}`);
  });

  test("render start time correctly", () => {
    const eventStart = EventWrapper.find(".event-start");
    expect(eventStart).toBeDefined();
    expect(eventStart.text()).toBe(
      `Start date: ${new Date(event.start.dateTime).toISOString()}`
    );
  });

  test("render location correctly", () => {
    const eventLocation = EventWrapper.find(".event-location");
    const eventLocationString = event.location;
    expect(eventLocation).toBeDefined();
    expect(eventLocation.text()).toBe(`Location: ${eventLocationString}`);
  });

  // test 8: renders expanded view
  test("event details is expanded and rendered correctly", () => {
    expect(EventWrapper.find("h3.about")).toHaveLength(1);
    expect(EventWrapper.find("a.link")).toHaveLength(1);
    expect(EventWrapper.find("p.description")).toHaveLength(1);
  });

  // test 9: user can not view event details when clicking button
  test("user can collapse an event when clicking hide details button", () => {
    const detailsButton = EventWrapper.find("button.details-btn");
    expect(detailsButton.text()).toBe("Hide details");
    detailsButton.simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
