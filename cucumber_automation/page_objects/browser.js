"user strict"

const {Builder} = require("selenium-webdriver")

const driver = "firefox"

// Änderungsversuch ab hier zwecks Firefox-Fehler
// const webdriver = require('selenium-webdriver')
firefox = require('selenium-webdriver/firefox');

const myoptions =  new firefox.Options();
myoptions.setBinary('C:\\Program Files\\Mozilla Firefox\\firefox.exe');                     

let browser

// Open the Browser and maximise it
async function openBrowser (){
    if (browser) return browser
    browser = await new Builder().forBrowser(driver).setFirefoxOptions(myoptions).build()
    await browser.manage().window().maximize()
    return browser    
}
module.exports.openBrowser = openBrowser