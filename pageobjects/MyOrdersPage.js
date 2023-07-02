class MyOrdersPage {
    constructor(page) {
        this.page = page;
        this.varBackToShopButton = page.locator("xpath=//button[@routerlink='/dashboard']");
        this.varOrderRows = page.locator("xpath=//tbody/tr");
    }

    async WaitForLoad() {
        await this.varBackToShopButton.waitFor();
    }

    async SearchAndViewOrder(varOrderID) {
        debugger
        for (let i = 0; i <= (await this.varOrderRows.count()); i++) {
            let varRowOrderID = await this.varOrderRows.nth(i).locator("th").textContent();
            if (varRowOrderID === varOrderID) {
                await this.varOrderRows.nth(i).locator("xpath=//td/button[text()='View']").click();
                break;
            }
        }
    }
}
module.exports = { MyOrdersPage };