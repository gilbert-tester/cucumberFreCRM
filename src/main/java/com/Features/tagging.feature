@FunctionalTest
Feature: Free CRM Application Testing


@SmokeTest @RegressionTest
Scenario: Login With correct username and password
Given This is valid login test

@RegressionTest
Scenario: Login With correct username and password
Given This is invalid login test

@SmokeTest
Scenario: Create a contact
Given This is a contact test case

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is a dea; test case

@RegressionTest
Scenario: Create a tasks
Given This is a task test case

@SmokeTest
Scenario: Create a case
Given This is a case test case

@RegressionTest
Scenario: Varify left panel links
Given Clicking on left panel links

@RegressionTest
Scenario: Search a deal
Given This is a search deal test

@SmokeTest
Scenario: Search a contact
Given This is a search contact test

@RegressionTest
Scenario: Search a case
Given This is a search case test

@SmokeTest
Scenario: Search a task
Given This is a search task test

@RegressionTest
Scenario: Search an email
Given This is a search email test

@SmokeTest @RegressionTest
Scenario: Search a call
Given This is a search call test

@SmokeTest @E2ETest
Scenario: Search a Docs
Given This is a search docs test

@SmokeTest @E2ETest
Scenario: Search a forms
Given This is a search forms test

@E2ETest
Scenario: Search a report
Given This is a report test

@SmokeTest @RegressionTest
Scenario: Appication logout
Given This is a logout test







