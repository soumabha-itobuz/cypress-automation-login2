Feature:
  Scenario: Valid login 
    When I visit login page
    Then Fill valid credentials
    Then Can login