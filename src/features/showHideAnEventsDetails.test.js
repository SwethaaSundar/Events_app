import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import React from "react";
import App from "../App";
import Event from "../Event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  afterEach(() => {
    AppWrapper.unmount();
  });

  test("An event element is collapsed by default", ({ given, when, then }) => {
    given(
      "All Events are loaded or events are loaded based on the city",
      async () => {
        await AppWrapper.update();
      }
    );

    when("User has not expanded to see the details", () => {
      expect(AppWrapper.find(Event).length).toBeGreaterThan(0);
    });

    then("Event details will not be visible for the user.", () => {
      AppWrapper.find(Event).forEach((eventComponent) => {
        expect(eventComponent.find(".details")).toHaveLength(0);
        expect(eventComponent.state("collapsed")).toBe(true);
        expect(eventComponent.find(".details-btn").text()).toBe("Show details");
      });
    });
  });
  test("User can expand an event to see its details", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "All Events are loaded or events are loaded based on the city",
      async () => {
        await AppWrapper.update();
      }
    );

    when("user can expand to see the details of the events", () => {
      expect(AppWrapper.find(Event).length).toBeGreaterThan(0);
    });

    and("click on the “Show Details” button on any of the event card", () => {
      AppWrapper.find(Event).at(0).find(".details-btn").simulate("click");
    });

    then("App will show all the details of the selected event.", () => {
      expect(AppWrapper.find(Event).at(0).find(".details")).toHaveLength(1);
      expect(AppWrapper.find(Event).at(0).state("collapsed")).toBe(false);
      expect(AppWrapper.find(Event).at(0).find(".details-btn").text()).toBe(
        "Hide details"
      );
    });
  });
  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("User had read all the details of the event", async () => {
      await AppWrapper.update();
    });

    when("user collapses the expanded details of the event", () => {
      AppWrapper.find(Event).at(0).find(".details-btn").simulate("click");
    });

    then(
      "App will show the upcoming events of a particular city or all the events. User can view the details of other events.",
      () => {
        expect(AppWrapper.find(Event).at(0).find(".details")).toHaveLength(1);
        expect(AppWrapper.find(Event).at(0).state("collapsed")).toBe(false);

        expect(AppWrapper.find(Event).at(0).find(".details-btn").text()).toBe(
          "Hide details"
        );
      }
    );
  });
});
