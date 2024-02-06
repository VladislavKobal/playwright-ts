import { Locator, Page } from "@playwright/test";
import { LoginWithCreatedUser } from "./helpers";

export class LoginPage {
  private page: Page;

  private emailInput: Locator;
  private passwordInput: Locator;
  private clickHomePage: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator("#input-email");
    this.passwordInput = page.locator("#input-password");
    this.clickHomePage = page.getByRole("button", { name: " My account" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async visited() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
  }
  async clickMainPage(): Promise<void> {
    await this.clickHomePage.click();
  }
  async fillLoginForm(detail: LoginWithCreatedUser): Promise<void> {
    await this.emailInput.fill(detail.emailInput);
    await this.passwordInput.fill(detail.passwordInput);
  }
  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
}
