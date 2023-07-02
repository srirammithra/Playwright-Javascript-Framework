const { test, expect } = require("@playwright/test");
const { PageObjectsManager } = require("../pageobjects/PageObjectsManager");
const TC01_Testdata = JSON.parse(JSON.stringify(require("../test-data/TC01_E2EScenario_Testdata.json")));

for(const Testdata of TC01_Testdata ){
    test(`TC01 E2E Scenario, Product - ${Testdata.varProduct}`, async ({ page }) => {
        let varOrderID;
        const objPageObjectsManager = new PageObjectsManager(page);
        await test.step("Open App and Perform Login", async () => {
            const objLoginPage = objPageObjectsManager.GetLoginPage();
            await objLoginPage.OpenApp();
            await objLoginPage.LoginToApp(Testdata.varEmail, Testdata.varPassword);
        });
    
        await test.step("Add Product in Home page and Goto Cart page", async () => {
            const objHomePgae = objPageObjectsManager.GetHomePage();
            await objHomePgae.WaitForLoad();
            await objHomePgae.AddProduct(Testdata.varProduct);
            await objHomePgae.GotoCartPage();
        });
    
        await test.step("Verify Product in Cart page and Goto Checkout page", async () => {
            const objCartPage = objPageObjectsManager.GetCartPage();
            await objCartPage.WaitForLoad();
            expect(await objCartPage.CheckAddedItemInCart(Testdata.varProduct)).toBeTruthy();
            await objCartPage.GotoCheckoutPage();
        });
    
        await test.step("Enter CC details and Goto Confirm Order page", async () => {
            const objCheckoutPage = objPageObjectsManager.GetCheckoutPage();
            await objCheckoutPage.WaitForLoad();
            await objCheckoutPage.FillCCDetails(Testdata.varCCNumber, Testdata.varCCMonth, Testdata.varCCYear, Testdata.varCCName, Testdata.varCCCountry);
            await objCheckoutPage.GotoConfirmOrderPage();
        });
    
        await test.step("Verify Success message and OrderID in Confirmation page", async () => {
            const objConfirmPage = objPageObjectsManager.GetConfirmPage();
            expect(await objConfirmPage.GetSuccessMessageText()).toBe("Thankyou for the order.");
            varOrderID = await objConfirmPage.GetOrderIDText();
            await objConfirmPage.GotoMyOrdersPage();
        });
    
        await test.step("Verify OrderID in My Orders page", async () => {
            const objMyOrdersPage = objPageObjectsManager.GetMyOrdersPage();
            await objMyOrdersPage.WaitForLoad();
            await objMyOrdersPage.SearchAndViewOrder(varOrderID);
        });
    
        await test.step("Verify OrderID in Order Summary page", async () => {
            const objOrderSummaryPage = objPageObjectsManager.GetOrderSummaryPage();
            await objOrderSummaryPage.WaitForLoad();
            expect(await objOrderSummaryPage.GetOrderID()).toBe(varOrderID);
        });
    });
}