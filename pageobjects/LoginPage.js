class LoginPage {
    constructor(page) {
        this.page = page;
        this.varEmailTextbox = page.locator("xpath=//input[@id='userEmail']");
        this.varPasswordTextbox = page.locator("xpath=//input[@id='userPassword']");
        this.varLoginButton = page.locator("xpath=//input[@id='login']");
    }

    async OpenApp() {
        await this.page.goto("https://rahulshettyacademy.com/client");
        await this.page.waitForLoadState("networkidle");
    }

    async LoginToApp(varEmail, varPassword) {
        await this.varEmailTextbox.type(varEmail);
        await this.varPasswordTextbox.type(varPassword);
        await this.varLoginButton.click();
    }
}
module.exports = { LoginPage };