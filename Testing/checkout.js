const { By } = require('selenium-webdriver');

class CheckoutPage {
    constructor(driver) {
        this.driver = driver;
        this.firstName = By.id('first-name');
        this.lastName = By.id('last-name');
        this.postalCode = By.id('postal-code');
        this.continueButton = By.id('continue');
        this.finishButton = By.id('finish');
        this.successMessage = By.className('complete-header');
    }

    async fillCheckoutDetails(first, last, zip) {
        await this.driver.findElement(this.firstName).sendKeys(first);
        await this.driver.findElement(this.lastName).sendKeys(last);
        await this.driver.findElement(this.postalCode).sendKeys(zip);
        await this.driver.findElement(this.continueButton).click();
    }

    async finishPurchase() {
        await this.driver.findElement(this.finishButton).click();
    }

    async getSuccessMessage() {
        return await this.driver.findElement(this.successMessage).getText();
    }
}

module.exports = CheckoutPage;
