Feature: Login successfully

    successfully log in, starting from the landing page 

    Scenario: Not already logged in
    Given I am on the landing page
    When I enter my correct credentials
    When I click on the login button
    Then I am on my profile page