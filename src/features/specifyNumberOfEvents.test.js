import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import React from "react";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import Event from "../Event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  afterEach(() => {
    AppWrapper.unmount();
  });
  test("When user has not specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("Events app is loaded with the upcoming events", async () => {
      await AppWrapper.update();
    });

    when("user has not specified a number of events to be seen", () => {});

    then(
      "App will show the first 32 upcoming events from all cities or specifies city",
      () => {
        expect(AppWrapper.state("numberOfEvents")).toEqual(32);
      }
    );
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("Events app is loaded with the upcoming events", async () => {
      await AppWrapper.update();
    });

    when("user has specified a number of events to be displayed", () => {
      const eventObject = { target: { value: 2 } };
      AppWrapper.find(NumberOfEvents)
        .find(".number")
        .simulate("change", eventObject);
    });

    then(
      "App will show the specified number of upcoming events from all cities or specific city",
      async () => {
        await AppWrapper.update();
        expect(AppWrapper.find(Event)).toHaveLength(2);
      }
    );
  });
});
