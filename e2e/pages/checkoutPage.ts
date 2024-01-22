import { Locator, Page, test } from "@playwright/test";

export class checkoutProductPage {
  clickBasket: Locator;
  clickCheckoutButton: Locator;
  clickToLogin: Locator;
  emailField: Locator;
  pwdField: Locator;
  loginButton: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.clickBasket = page.getByRole("button", { name: "2" });
    this.clickCheckoutButton = page.getByRole("button", {
      name: " Checkout",
    });
    this.clickToLogin = page.locator("label").filter({ hasText: "Login" });
    this.emailField = page.locator("#input-login-email");
    this.pwdField = page.locator("#input-login-password");
    this.loginButton = page.locator("#button-login");
  }
}
