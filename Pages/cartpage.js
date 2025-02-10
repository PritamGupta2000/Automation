class CartPage {
    get checkoutButton() { return $('#checkout'); }
    get cartItems() { return $$('.cart_item'); }

    async verifyCartItems(expectedCount) {
        const items = await this.cartItems;
        return items.length === expectedCount;
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();
