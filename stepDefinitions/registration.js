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

When('A user navigate to visit here link', async function () {
    driver = new Builder().forBrowser('chrome').build();
    basepage = new Basepage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    await basepage.navigateToVisitLink();
    //await basepage.advertClose();
});

When('the user enter the email as {string}', async function (string) {
  await basepage.navigateToEmail(string);
  
});
When('the user clicks on submit button', async function () {
  await basepage.submitButton();
  
});
Then('the user should receive confirmation table for credentials', async function () {
  await driver.wait(until.elementLocated(By.xpath('//table')), 10000);
    console.log('User received confirmation table for credentials');
    await driver.quit();
});
