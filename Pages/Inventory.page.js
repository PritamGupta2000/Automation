const { By } = require('selenium-webdriver');

class InventoryPage {
    constructor(driver) {
        this.driver = driver;
        this.menuButton = By.id('react-burger-menu-btn');
        this.resetAppStateButton = By.id('reset_sidebar_link');
        this.logoutButton = By.id('logout_sidebar_link');
        this.cartIcon = By.className('shopping_cart_link');
        this.addToCartButtons = By.css('button.btn_inventory');
        this.sortDropdown = By.className('product_sort_container');
    }

    async resetAppState() {
        await this.driver.findElement(this.menuButton).click();
        await this.driver.findElement(this.resetAppStateButton).click();
    }

    async logout() {
        await this.driver.findElement(this.menuButton).click();
        await this.driver.findElement(this.logoutButton).click();
    }

    async addItemsToCart(count) {
        const buttons = await this.driver.findElements(this.addToCartButtons);
        for (let i = 0; i < count; i++) {
            await buttons[i].click();
        }
    }

    async sortItemsBy(option) {
        await this.driver.findElement(this.sortDropdown).sendKeys(option);
    }

    async goToCart() {
        await this.driver.findElement(this.cartIcon).click();
    }
}

module.exports = InventoryPage;
