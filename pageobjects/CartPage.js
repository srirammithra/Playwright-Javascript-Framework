class CartPage {
    constructor(page) {
        this.page = page;
        this.varCartItems = page.locator("xpath=//div//li");
        this.varCheckoutButton = page.locator("xpath=//button[text()='Checkout']");
    }

    async WaitForLoad() {
        await this.varCartItems.last().waitFor();
    }

    async CheckAddedItemInCart(varProductName) {
        return await this.page.locator("h3:has-text('" + varProductName + "')").isVisible();
    }

    async GotoCheckoutPage() {
        await this.varCheckoutButton.click();
    }
}
module.exports = { CartPage };