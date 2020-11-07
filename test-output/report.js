$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user entered credentials username and password",
  "rows": [
    {
      "cells": [
        "gilbert.baidya.tester@gmail.com",
        "simon123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_alrady_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.user_entered_credentials_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 4,
      "value": "#Given User is alrady on login page"
    },
    {
      "line": 5,
      "value": "#When Title of Login page is Free CRM"
    },
    {
      "line": 6,
      "value": "#Then user entered \"gilbert.baidya.tester@gmail.com\" and \"simon123\""
    },
    {
      "line": 7,
      "value": "#Then User clicks on Login button"
    },
    {
      "line": 8,
      "value": "#Then User is on Home Page"
    }
  ],
  "line": 9,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is alrady on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user entered credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user moves to new contact page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters contactInfo \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "gilbert.baidya.tester@gmail.com",
        "simon123",
        "Gilbert",
        "Baidya",
        "CEO"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "gilbert.baidya.tester@gmail.com",
        "simon123",
        "Abul",
        "Maal",
        "Tester"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is alrady on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user entered credentials \"gilbert.baidya.tester@gmail.com\" and \"simon123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user moves to new contact page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters contactInfo \"Gilbert\" and \"Baidya\" and \"CEO\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is alrady on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Title of Login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user entered credentials \"gilbert.baidya.tester@gmail.com\" and \"simon123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user moves to new contact page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters contactInfo \"Abul\" and \"Maal\" and \"Tester\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DealsStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});