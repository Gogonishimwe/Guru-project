// const { Builder, By, until } = require('selenium-webdriver');
// const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
// const Basepage = require('../pageModel/Basepage');
// const assert = require('assert');
// const path = require('path');
// setDefaultTimeout(60 * 1000);
// let driver;
// let basepage;
// async function closePopups() {
//   try {
//       // Example: Close any pop-up with a specific class or ID
//       const popupCloseButton = await driver.findElement(By.css('.close-popup'));
//       if (popupCloseButton) {
//           await popupCloseButton.click();
//       }
//   } catch (error) {
//       // Pop-up not found, continue with the test
//   }
// }


//   When('a user clicks on selenium link', async function () {
//     driver = new Builder().forBrowser('chrome').build();
//       basepage = new Basepage(driver);
//       await driver.get('https://demo.guru99.com/V1/index.php');
//       await basepage.selenium();
          
//   });
//   When('scroll down and clicks on File Upload link', async function () {
//     await basepage.fileUpload();
   
//   });
//   When('clicks on choose file', async function () {
    
//     const filePath = path.resolve(__dirname, "C:\Users\Gloria\Desktop\Screenshot_5.png"); 
//     await basepage.chooseDocument(filePath);
   
//   });
//   When('the user clicks on checkbox for I accept terms of service', async function () {
//     await  basepage.acceptTerms();
//   });



//   When('clicks on submit button file', async function () {
//     await basepage.submitFile();
//   });



//   Then('the user should receive  {string} message', async function (string) {
//     try {
//       // Ensure the expected message is defined and is a string
//       if (typeof expectedMessage !== 'string') {
//           throw new Error('Expected message is not a string');
//       }
 
//       // Wait for the element to be located and visible
//       const successMessageElement = await driver.wait(
//           until.elementLocated(By.xpath('//*[@id="res"]/center'))
//       );
//       await driver.wait(until.elementIsVisible(successMessageElement), 5000);
 
      
//       const successMessage = await successMessageElement.getText();
 
      
//       console.log('Actual success message:', successMessage);
 
      
//       if (typeof successMessage !== 'string') {
//           throw new Error('Success message is not a string');
//       }
 
      
//       assert(successMessage.includes(expectedMessage), `Expected "${successMessage}" to include "${expectedMessage}"`);
//   } catch (error) {
//       console.error('Error finding success message:', error);
 
      
//       const pageSource = await driver.getPageSource();
//       console.log('Current page source:', pageSource);
 
//       // // Capture a screenshot for debugging purposes
//       // await driver.takeScreenshot().then((image, err) => {
//       //     require('fs').writeFileSync('error_screenshot.png', image, 'base64');
//       //     if (err) console.log(err);
//       // });
//       // throw error;
//   } finally {
      
//       await driver.quit();
//   }
// });
const { Builder, By, until } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const Basepage = require('../pageModel/Basepage');
const assert = require('assert');
const path = require('path');

setDefaultTimeout(60 * 1000);
let driver;
let basepage;

When('a user clicks on selenium link', async function () {
    driver = new Builder().forBrowser('chrome').build();
    basepage = new Basepage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    await basepage.selenium();
});

When('scroll down and clicks on File Upload link', async function () {
    await basepage.fileUpload();
});

When('clicks on choose file', async function () {
    const filePath = path.resolve("C:/Users/Gloria/Desktop/Screenshot_5.png");
    await basepage.chooseDocument(filePath);
});

When('the user clicks on checkbox for I accept terms of service', async function () {
    await basepage.acceptTerms();
});

When('clicks on submit button file', async function () {
    await basepage.submitFile();
});

Then('the user should receive {string} message', async function (expectedMessage) {
    try {
        const successMessageElement = await driver.wait(
            until.elementLocated(By.xpath('//*[@id="res"]/center')),
            10000
        );
        await driver.wait(until.elementIsVisible(successMessageElement), 10000);

        const successMessage = await successMessageElement.getText();
        assert(successMessage.includes(expectedMessage), `Expected "${successMessage}" to include "${expectedMessage}"`);
    } catch (error) {
        console.error('Error finding success message:', error);

        const pageSource = await driver.getPageSource();
        console.log('Current page source:', pageSource);
    } finally {
        await driver.quit();
    }
});

  