class ConfirmPage {
    constructor(page) {
        this.page = page;
        this.varSuccessMessageText = page.locator("xpath=//h1[@class='hero-primary']");
        this.varOrderIDText = page.locator("xpath=//label[@class='ng-star-inserted']");
        this.varMyOrdersButton = page.locator("xpath=//button[contains(@routerlink, 'myorders')]");
    }

    async GetSuccessMessageText() {
        let varSuccessMessage = await this.varSuccessMessageText.textContent();
        varSuccessMessage = varSuccessMessage.trim();
        return varSuccessMessage;
    }

    async GetOrderIDText() {
        let varOrderID = await this.varOrderIDText.textContent();
        varOrderID = varOrderID.replaceAll("|", "");
        varOrderID = varOrderID.trim();
        return varOrderID;
    }

    async GotoMyOrdersPage() {
        await this.varMyOrdersButton.click();
    }
}
module.exports = { ConfirmPage };