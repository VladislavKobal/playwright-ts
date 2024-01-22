import { Locator, Page } from "@playwright/test";

export class LoginPage {
  myAccount: Locator;
  email: Locator;
  pwd: Locator;
  loginButton: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.email = page.locator("#input-email");
    this.pwd = page.locator("#input-password");
  }

  async mainPage() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
  }
  async clickMainPage() {
    await this.page.getByRole("button", { name: " My account" }).click();
  }
  async fillLoginField(eEmail, pPwd) {
    await this.email.fill(eEmail);
    await this.pwd.fill(pPwd);
  }
  async clickLoginButton() {
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}

export const loginWithCredential = {
  email: "test1Q@gmail.com",
  pwd: "1111111111",
};
