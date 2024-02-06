import { Locator } from "@playwright/test";
import { Page } from "playwright";
import { RegistrationFormData } from "./helpers";

export class RegisterPage {
  private page: Page;

  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private emailInput: Locator;
  private phoneInput: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.phoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.confirmPasswordInput = page.locator("#input-confirm");
    this.registerButton = page.locator(
      'input[type="submit"][value="Continue"]'
    );
  }

  async visited() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );
  }
  async fillRegistrationForm(details: RegistrationFormData): Promise<void> {
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
    await this.passwordInput.fill(details.password);
    await this.confirmPasswordInput.fill(details.confirmPassword);
  }
  async isSubscribeChecked() {
    return await this.page.locator("#input-newsletter-no").isChecked();
  }
  async clickPolicyButton() {
    await this.page.getByText("I have read and agree to the").click();
  }
  async clickRegisterButton(): Promise<void> {
    await this.registerButton.click();
  }
}
