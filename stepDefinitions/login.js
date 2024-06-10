
const { Builder, By, until } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const Basepage = require('../pageModel/Basepage');
const assert = require('assert');
setDefaultTimeout(60 * 1000);
let driver;
let basepage;
async function closePopups() {
  try {
      // Example: Close any pop-up with a specific class or ID
      const popupCloseButton = await driver.findElement(By.css('.close-popup'));
      if (popupCloseButton) {
          await popupCloseButton.click();
      }
  } catch (error) {
      // Pop-up not found, continue with the test
  }
}
         When('A user enter user ID as {string}', async function (string) {
          driver = new Builder().forBrowser('chrome').build();
          basepage = new Basepage(driver);
          await driver.get('https://demo.guru99.com/V1/index.php');
          await basepage.loginInput(string);
        });

  

         When('the user enter password as {string}', async function (string) {
           await basepage.enterPassword(string);
         });

   

         When('the user clicks on Login button', async function () {
          await basepage.loginButton();
         });

   

         Then('the user should be redicted to Manager page', async function () {
          const pageTitle= await driver.wait(until.elementLocated(By.linkText("Manager")), 10000).getText();
          assert.strictEqual("Manager",pageTitle);
          // /html/body/div[3]/div/ul/li[1]/a
         });

