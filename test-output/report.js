$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
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
formatter.match({
  "location": "LoginStepDefinition.user_is_alrady_on_login_page()"
});
formatter.result({
  "duration": 3377667567,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 837164965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gilbert.baidya.tester@gmail.com",
      "offset": 26
    },
    {
      "val": "simon123",
      "offset": 64
    }
  ],
  "location": "LoginStepDefinition.user_entered_username_And_password(String,String)"
});
formatter.result({
  "duration": 2386804107,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 69809471,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 32448316,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 3006052319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gilbert",
      "offset": 25
    },
    {
      "val": "Baidya",
      "offset": 39
    },
    {
      "val": "CEO",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactInfo_and_and(String,String,String)"
});
formatter.result({
  "duration": 635020223,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 98498223,
  "status": "passed"
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
formatter.match({
  "location": "LoginStepDefinition.user_is_alrady_on_login_page()"
});
formatter.result({
  "duration": 1831272451,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 1978360234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gilbert.baidya.tester@gmail.com",
      "offset": 26
    },
    {
      "val": "simon123",
      "offset": 64
    }
  ],
  "location": "LoginStepDefinition.user_entered_username_And_password(String,String)"
});
formatter.result({
  "duration": 335366487,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 65512861,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9217902,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2309524330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abul",
      "offset": 25
    },
    {
      "val": "Maal",
      "offset": 36
    },
    {
      "val": "Tester",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactInfo_and_and(String,String,String)"
});
formatter.result({
  "duration": 609985571,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 116690466,
  "status": "passed"
});
});