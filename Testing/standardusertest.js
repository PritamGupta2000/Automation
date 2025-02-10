const LoginPage = require('../Pages/login.page.js');
const InventoryPage = require('../Pages/Inventory.page.js');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');

describe('Standard User Checkout Flow', () => {
    let loginPage, inventoryPage, cartPage, checkoutPage;

    before(async () => {
        await browser.url('https://www.saucedemo.com/');
        loginPage = new LoginPage();
        inventoryPage = new InventoryPage();
        cartPage = new CartPage();
        checkoutPage = new CheckoutPage();
    });

    it('should complete a purchase successfully', async () => {
        await loginPage.login('standard_user', 'secret_sauce');

        // Reset App State
        await inventoryPage.resetAppState();

        // Add 3 items to the cart
        await inventoryPage.addItemsToCart(3);

        // Navigate to the cart
        await inventoryPage.goToCart();

        // Verify cart items
        const cartItems = await cartPage.verifyCartItems(3);
        expect(cartItems).toBe(true);

        // Proceed to checkout
        await cartPage.proceedToCheckout();
        await checkoutPage.fillCheckoutDetails('John', 'Doe', '12345');
        await checkoutPage.finishPurchase();

        // Verify success message
        const successMessage = await checkoutPage.getSuccessMessage();
        expect(successMessage).toBe('Thank you for your order!');

        // Reset App State & Logout
        await inventoryPage.resetAppState();
        await inventoryPage.logout();
    });
});
