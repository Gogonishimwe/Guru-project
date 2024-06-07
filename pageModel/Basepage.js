const { By} = require('selenium-webdriver');

class Basepage {
    constructor(driver) {
        this.driver = driver;
        this.hereLink=By.xpath('/html/body/div[3]/ol/li[1]/a');
        this.advertClose = By.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div/span');
        //this.emailInput = By.name("emailid");
        this.emailInput=By.xpath('/html/body/form/table/tbody/tr[5]/td[2]/input');
        this.submit=By.xpath('/html/body/form/table/tbody/tr[6]/td[2]/input');
    }
      async closePopups() {
        try {
            // Example: Close any pop-up with a specific class or ID
            const popupCloseButton = await this.driver.findElement(By.css('.close-popup'));
            if (popupCloseButton) {
                await popupCloseButton.click();
            }
        } catch (error) {
            // Pop-up not found, continue with the test
        }
      }
    async navigateToVisitLink() {
        const visitLinkElement = await this.driver.findElement(this.hereLink);
        await visitLinkElement.click();
    }
    async closeAlert(){
      const advertCloseElement = await this.driver.findElement(this.advertClose);
      await advertCloseElement.click();
  }
    async navigateToEmail(){
      const emailFieldElement= await this .driver.findElement(this.emailInput);
      await emailFieldElement.sendKeys('hofasi1308@lapeds.com');
    }
    async submitButton(){
      const submitElement=await this.driver.findElement(this.submit);
      await submitElement.click();
    }

      }
          
        
    
    
  

      module.exports = Basepage;