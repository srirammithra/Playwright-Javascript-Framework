class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.varCCNumberTextbox = page.locator("xpath=//div[contains(text(), 'Credit Card Number')]/following-sibling::input");
        this.varCCMonthYearDropdown = page.locator("xpath=//div[contains(text(), 'Expiry Date')]/following-sibling::select");
        this.varCCNameTextbox = page.locator("xpath=//div[contains(text(), 'Name on Card')]/following-sibling::input");
        this.varCCCountryTextbox = page.locator("xpath=//input[@placeholder='Select Country']");
        this.varCCCountryTypeAhead = page.locator("xpath=//section[contains(@class, 'ta-results')]//button[span[text()=' India']]");
        this.varPlaceOrderButton = page.locator("xpath=//div/a[text()='Place Order ']");
    }

    async WaitForLoad() {
        await this.varPlaceOrderButton.waitFor();
    }

    async FillCCDetails(varCCNumber, varCCMonth, varCCYear, varCCName, varCountry) {
        await this.varCCNumberTextbox.fill("");
        await this.varCCNumberTextbox.type(varCCNumber, { delay: 300 });
        await this.varCCMonthYearDropdown.first().selectOption(varCCMonth);
        await this.varCCMonthYearDropdown.last().selectOption(varCCYear);
        await this.varCCNameTextbox.type(varCCName);
        await this.varCCCountryTextbox.type(varCountry, { delay: 300 });
        await this.varCCCountryTypeAhead.dblclick();
    }

    async GotoConfirmOrderPage() {
        await this.varPlaceOrderButton.click();
        await this.page.waitForLoadState("networkidle");
    }
}
module.exports = { CheckoutPage };