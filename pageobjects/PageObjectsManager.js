const { LoginPage } = require("./LoginPage");
const { HomePage } = require("./HomePage");
const { CartPage } = require("./CartPage");
const { CheckoutPage } = require("./CheckoutPage");
const { ConfirmPage } = require("./ConfirmPage");
const { MyOrdersPage } = require("./MyOrdersPage");
const { OrderSummaryPage } = require("./OrderSummaryPage");

class PageObjectsManager {
    constructor(page) {
        this.page = page;
        this.objLoginPage = new LoginPage(this.page);
        this.objHomePage = new HomePage(this.page);
        this.objCartPage = new CartPage(this.page);
        this.objCheckoutPage = new CheckoutPage(this.page);
        this.objConfirmPage = new ConfirmPage(this.page);
        this.objMyOrdersPage = new MyOrdersPage(this.page);
        this.objOrderSummaryPage = new OrderSummaryPage(this.page);
    }

    GetLoginPage() {
        return this.objLoginPage;
    }

    GetHomePage() {
        return this.objHomePage;
    }

    GetCartPage() {
        return this.objCartPage;
    }

    GetCheckoutPage() {
        return this.objCheckoutPage;
    }

    GetConfirmPage() {
        return this.objConfirmPage;
    }

    GetMyOrdersPage() {
        return this.objMyOrdersPage;
    }

    GetOrderSummaryPage() {
        return this.objOrderSummaryPage;
    }
}
module.exports = { PageObjectsManager };