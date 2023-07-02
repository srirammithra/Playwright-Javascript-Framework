class OrderSummaryPage {
    constructor(page) {
        this.page = page;
        this.varTitleText = page.locator("xpath=//div[@class='email-title']");
        this.varOrderIDText = page.locator("xpath=//div/small[text()='Order Id']/following-sibling::div");
    }

    async WaitForLoad() {
        await this.varTitleText.waitFor();
    }

    async GetOrderID() {
        return await this.varOrderIDText.textContent();
    }
}
module.exports = { OrderSummaryPage };