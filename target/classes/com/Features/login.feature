Feature: Free CRM Login Feature

  #Scenario: Free CRM Login Test Scenario
  #Given User is alrady on login page
  #When Title of Login page is Free CRM
  #Then user entered "gilbert.baidya.tester@gmail.com" and "simon123"
  #Then User clicks on Login button
  #Then User is on Home Page
  Scenario Outline: Free CRM Login Test Scenario
    Given User is alrady on login page
    When Title of Login page is Free CRM
    Then user entered credentials "<username>" and "<password>"
    Then User clicks on Login button
    Then User is on Home Page
    And user moves to new contact page
    And user enters contactInfo "<firstname>" and "<lastname>" and "<position>"
    Then Close the browser

    Examples: 
      | username                        | password | firstname | lastname | position |
      | gilbert.baidya.tester@gmail.com | simon123 | Gilbert   | Baidya   | CEO      |
      | gilbert.baidya.tester@gmail.com | simon123 | Abul      | Maal     | Tester   |
