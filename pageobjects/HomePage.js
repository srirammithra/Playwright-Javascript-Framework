class HomePage {
    constructor(page) {
        this.page = page;
        this.varProducts = page.locator("xpath=//div[@class='card-body']");
        this.varCartButton = page.locator("xpath=//li/button[contains(text(), 'Cart')]");
    }

    async WaitForLoad() {
        await this.varProducts.last().waitFor();
    }

    async AddProduct(varProductName) {
        for (let i = 0; i < (await this.varProducts.count()); i++) {
            if (await this.varProducts.nth(i).locator("xpath=//h5/b").textContent() === varProductName) {
                await this.varProducts.nth(i).locator("xpath=//button[contains(text(), 'Add To Cart')]").click();
                break;
            }
        }
    }

    async GotoCartPage() {
        await this.varCartButton.click();
    }
}
module.exports = { HomePage };