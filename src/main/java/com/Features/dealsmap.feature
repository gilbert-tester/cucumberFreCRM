Feature: Deal Data Creation

  Scenario: Free CRM create a new deal scenario
    Given User is already on login page
    When Title of Login page is Free CRM
    Then user entered credentials username and password
      | userName                        | passWord |
      | gilbert.baidya.tester@gmail.com | simon123 |
    Then User clicks on Login button
    Then User is on Home Page
    And user moves to new deal page
    And user enters deal details
      | title      | amount | probability | commission |
      | test deal  | 132000 |          50 |         10 |
      | test deal1 | 451000 |         550 |         40 |
      | test deal2 | 198000 |          60 |         50 |
    Then Close the browser
