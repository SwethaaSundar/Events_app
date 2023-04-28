Feature: Show/hide an event details

Scenario: An event element is collapsed by default
Given  All Events are loaded or events are loaded based on the city 
When User has not expanded to see the details
Then Event details will not be visible for the user.

Scenario: User can expand an event to see its details
Given All Events are loaded or events are loaded based on the city 
When user can expand to see the details of the events
And click on the “Show Details” button on any of the event card
Then App will show all the details of the selected event. 

Scenario: User can collapse an event to hide its details 
Given User had read all the details of the event 
When user collapses the expanded details of the event 
Then App will show the upcoming events of a particular city or all the events. User can view the details of other events.