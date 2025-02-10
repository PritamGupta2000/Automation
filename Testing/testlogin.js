const { expect } = require('chai');
const getDriver = require('../utils/driverSetup');
const LoginPage = require('../Pages/login.page.js');

describe('Login Tests', function () {
    let driver, loginPage;

    before(async function () {
        driver = await getDriver();
        await driver.get('https://www.saucedemo.com/');
        loginPage = new LoginPage(driver);
    });

    it('should show an error for locked_out_user', async function () {
        await loginPage.login('locked_out_user', 'secret_sauce');
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).to.include('Epic sadface: Sorry, this user has been locked out.');
    });

    after(async function () {
        await driver.quit();
    });
});
