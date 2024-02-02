import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  private email: Locator;
  private pwd: Locator;

  constructor(page: Page) {
    this.email = page.locator("#input-email");
    this.pwd = page.locator("#input-password");
  }

  async visitedHomePage() {
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
