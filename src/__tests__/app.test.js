import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";

describe("<App /> component", () => {
  // beforeAll() - function will be executed before each and every one of the tests in your test suite
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    // const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    // const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});
