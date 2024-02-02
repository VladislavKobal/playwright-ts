import { Locator } from "@playwright/test";
import { Page } from "playwright";
import { RegisterNewUser } from "./helpers";

export class RegisterPage {
  firstName: Locator;
  lastName: Locator;
  email: Locator;
  phone: Locator;
  pwd: Locator;
  confirmPwd: Locator;
  policy: Locator;

  constructor(public page: Page) {
    this.page = page;

    this.firstName = page.locator("#input-firstname");
    this.lastName = page.locator("#input-lastname");
    this.email = page.locator("#input-email");
    this.phone = page.locator("#input-telephone");
    this.pwd = page.locator("#input-password");
    this.confirmPwd = page.locator("#input-confirm");
  }

  async visited() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );
  }
  async fillForm(details: RegisterNewUser) {
    await this.firstName.fill(details.firstName);
    await this.lastName.fill(details.lastName);
    await this.email.fill(details.email);
    await this.phone.fill(details.phone);
    await this.pwd.fill(details.password);
    await this.confirmPwd.fill(details.confirmPassword);
  }
  async isSubscribeChecked() {
    return await this.page.locator("#input-newsletter-no").isChecked();
  }
  async clickPolicyButton() {
    await this.page.getByText("I have read and agree to the").click();
  }
  //Actions
  async clickContinueButton() {
    await this.page.click('input[value="Continue"]');
  }
  async logOut() {
    await this.page.getByRole("link", { name: " Logout" }).click();
  }
}
