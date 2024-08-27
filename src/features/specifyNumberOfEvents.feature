Feature: Specify Number of Events
    Scenario: When user has not not specified a number, 32 events are shown by default
        Given the user is on the main page
        When the user has not specified a number of events to display
        Then 32 events should be shown by default

    Scenario:  User can change the number of events displayed
        Given the user has not specified a number of events to display
        When the user changes the number of events to display to 10
        Then the user should see 10 events displayed

