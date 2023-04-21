import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
  let NumberOfEventsWrapper, noe;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    noe = NumberOfEventsWrapper.find("input.number");
  });

  test("default number of events", () => {
    expect(NumberOfEventsWrapper.state("number")).toBe(32);
  });

  test("change state when user input changes", () => {
    expect(NumberOfEventsWrapper.state("number")).toBe(32);
    noe.simulate("change", { target: { value: 12 } });
    expect(NumberOfEventsWrapper.state("query")).toBe(12);
  });
});
