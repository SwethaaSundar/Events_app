import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents updateNumberOfEvents={() => {}} updateEvents={() => {}} />
    );
    // noe = NumberOfEventsWrapper.find("input.number");
  });

  test("default number of events", () => {
    expect(NumberOfEventsWrapper.state("number")).toBe(32);
  });

  // test 4: the component changes state when user inputs value 10
  test("change state when user input changes", () => {
    expect(NumberOfEventsWrapper.state("number")).toBe(32);
    NumberOfEventsWrapper.find("input.number").simulate("change", {
      target: { value: 12 },
    });
    expect(NumberOfEventsWrapper.state("number")).toBe(12);
  });
});
