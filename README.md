# Events_app
## Frontend:
JavaScript/React,<br/>
hosted on Github Pages

## Backend:
Node/Express and Lambda finctions (FaaS), <br/>
hosted on AWS

## Backend (Database):
Google Calendar API

# Ex-4.1
Feature 1: Filter Events by City.<br/>
User story: As a User, I would like to filter the city and see the current and upcoming events in that particular city.<br/>
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.<br/>
Given: Events app is loaded.<br/>
When: user hasn’t searching for a city.<br/>
Then: App will show all the upcoming events from all cities.

Scenario 2: User should see a list of suggestions when they search for a city.<br/>
Given: Home page is opened with list of all events and user has clicked the search box to filter the city.<br/>
When: user starts to type the city name.<br/>
Then: App will show a list of cities, which matches the user’s criteria(suggestion).

Scenario 3: User can select a city from the suggested list.<br/>
Given: Events app is loaded.<br/>
When: user hasn’t searching for a city.<br/>
Then: App will show all the upcoming events from all cities.

Feature 2: Show/hide an event's details.<br/>
User story: As a User, I would like to view the details of the events and hide them back.<br/>
Scenario 1: An event element is collapsed by default.<br/>
Given:  All Events are loaded or events are loaded based on the city.<br/>
When: user hasn’t expanded to see the details.<br/>
Then: Event details will not be visible for the user.

Scenario 2: User can expand an event to see its details.<br/>
Given: All Events are loaded or events are loaded based on the city.<br/>
When: user can expand to see the details of the events.<br/>
Then: App will show all the details of the selected event.<br/>

Scenario 3: User can collapse an event to hide its details.<br/>
Given: User had read all the details of the event.<br/>
When: user collapses the expanded details of the event.<br/>
Then: App will show the upcoming events of a particular city or all the events. User can view the details of other events.

Feature 3: Specify number of events.<br/>
User story: As a User, I would like to specify number of events should be visible in the page. User should be able to specify certain number in the text box.<br/>
Scenario 1: When user hasn’t specified a number, 32 is the default number.<br/>
Given: Events app is loaded with the upcoming events.<br/>
When: user hasn’t specified a number of events to be seen.<br/>
Then: App will show the first 32 upcoming events from all cities or specifies city.

Scenario 2: User can change the number of events they want to see.<br/>
Given: Events app is loaded with the upcoming events.<br/>
When: user has specified a number of events to be seen (10 or 20 or 40 etc.).<br/>
Then: App will show the specified number of upcoming events from all cities or specific city.

Feature 4: Use the app when offline.<br/>
User story: As a User, when there is no internet connection, I should views the cached data when there’s no internet connection and should not see any 404 error.<br/>
Scenario 1: Show cached data when there’s no internet connection.<br/>
Given: Events app is loaded with the events that are previously opened when internet connection is available.<br/>
When: user opens the app without internet connection.<br/>
Then: User views the cached data when there’s no internet connection.

Scenario 2: Show error when user changes the settings (city, time range).<br/>
Given: Events app is loaded with the events that are previously opened when internet connection is available .<br/>
When: user changes the settings (city, time range).<br/>
Then: User receives an error message because it does not have events or data that is related to user’s specification.

Feature 5: Data visualization.<br/>
User story: As a user, I would like to be able to see a chart showing the upcoming events in<br/>
each city so that I know what events are organized in which city.<br/>
Scenario 1: Show a chart with the number of upcoming events in each city.<br/>
Given: Events app is loaded with the upcoming events.<br/>
When: User clicks a button “Event chart”.<br/>
Then: App will show graphical representation of all the upcoming events from all cities or a particular city.

# Ex-4.2
## Use of Serverless functions:
User logs into the app, a serverless function can be triggered to authenticate their credentials and generate an access token in an authorization server. This function can be hosted on AWS Lambda(Cloud platform) <br/>
Built-in services make it easy to develop and deploy your app, so you don’t need to implement it from scratch.<br/>
the pricing model of serverless services is somewhat interesting. The cost is execution-based, meaning that you’re charged for the execution time, unlike the 24/7 server maintaining cost of traditional architectures.

