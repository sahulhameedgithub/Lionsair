
Feature: Homepage test scenario
  Scenario Outline: HomePage Test scenario for booking a ticket
    Given HomePage Test scenario for booking a ticket
    When The user should select all the required data to search a flight  "<From>"
    Then The user should see the flight details

    Examples: 
		|From|
		|Aek Godang|