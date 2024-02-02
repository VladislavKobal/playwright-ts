import { Locator, Page } from "@playwright/test";
import { PersonalDetails } from "./helpers";

export class checkoutProductPage {
  private page: Page;

  private clickToGuest: Locator;
  private firstName: Locator;
  private lastName: Locator;
  private emailField: Locator;
  private telephoneF: Locator;
  private addresF: Locator;
  private addresL: Locator;
  private postCode: Locator;

  constructor(page: Page) {
    this.clickToGuest = page
      .locator("label")
      .filter({ hasText: "Guest Checkout" });
    this.firstName = page.locator("#input-payment-firstname");
    this.lastName = page.locator("#input-payment-lastname");
    this.emailField = page.locator("#input-login-email");
    this.telephoneF = page.locator("#input-payment-telephone");
    this.addresF = page.locator("#input-login-email");
    this.addresL = page.locator("#input-login-email");
    this.postCode = page.locator("#input-login-password");
  }

  async visitedHomePage() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
  }
  async clickOnBacketIcon() {
    await this.page.getByRole("button", { name: "2" }).click();
  }
  async clickOnCheckoutButton() {
    await this.page.getByRole("button", { name: " Checkout" }).click();
  }

  async fillPersonalDetails(details: PersonalDetails) {
    await this.firstName.fill(details.firstName);
    await this.lastName.fill(details.lastName);
    await this.emailField.fill(details.email);
    await this.telephoneF.fill(details.phone);
    await this.addresF.fill(details.address);
    await this.addresL.fill(details.address2);
    await this.postCode.fill(details.postCode);
  }
  async acceptPrivacy() {
    await this.page
      .getByText("I have read and agree to the Terms & Conditions")
      .click();
  }
  async clickOnContinueButton() {
    await this.page.getByRole("button", { name: "Continue " }).click();
  }
}
