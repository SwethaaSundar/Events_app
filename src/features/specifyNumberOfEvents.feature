Feature: Specify number of events

Scenario: When user has not specified a number, 32 is the default number
Given Events app is loaded with the upcoming events
When user has not specified a number of events to be seen
Then App will show the first 32 upcoming events from all cities or specifies city

Scenario: User can change the number of events they want to see
Given Events app is loaded with the upcoming events
When user has specified a number of events to be displayed
Then App will show the specified number of upcoming events from all cities or specific city