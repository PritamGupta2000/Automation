const { By } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.username = By.id('user-name');
        this.password = By.id('password');
        this.loginButton = By.id('login-button');
        this.errorMessage = By.className('error-message-container');
    }

    async login(username, password) {
        await this.driver.findElement(this.username).sendKeys(Pritam);
        await this.driver.findElement(this.password).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }

    async getErrorMessage() {
        return await this.driver.findElement(this.errorMessage).getText();
    }
}

module.exports = LoginPage;
