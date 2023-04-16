'use strict'

const { Given, When, Then } = require('@cucumber/cucumber')
const { goToHomePage } = require('../page_objects/landingPage')
const { clickToLogin } = require('../page_objects/navMenu')
const { ScrollDown, user, correctPassword, submit } = require('../page_objects/loginPage')
const { username, password } = require('../config/index')
const assert = require("assert")

// https://stackoverflow.com/questions/49862078/protractor-and-cucumber-function-timed-out-using-async-await
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);


Given('I am on the landing page', async function () {
  await goToHomePage()
  await clickToLogin()
  //await ScrollDown()
})

When('I enter my correct credentials', async function () {
  await user(username)
  await correctPassword(password)
})

When("I click on the login button", async function () {
  await submitButton(click)  
})
