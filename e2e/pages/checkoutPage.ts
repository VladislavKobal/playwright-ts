import { Locator, Page } from "@playwright/test";
import { PersonalDetailsData } from "./helpers";
import { promises } from "dns";

export class checkoutProductPage {
  private page: Page;

  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private emailInput: Locator;
  private telephoneInput: Locator;
  private address1Input: Locator;
  private address2Input: Locator;
  private postCodeInput: Locator;
  private basketIcon: Locator;
  private checkoutButton: Locator;
  private privacyCheckBox: Locator;
  private buttonContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#input-payment-firstname");
    this.lastNameInput = page.locator("#input-payment-lastname");
    this.emailInput = page.locator("#input-login-email");
    this.telephoneInput = page.locator("#input-payment-telephone");
    this.address1Input = page.locator("#input-payment-address-1");
    this.address2Input = page.locator("#input-payment-address-2");
    this.postCodeInput = page.locator("#input-payment-postcode");
    this.basketIcon = page.getByRole("button", { name: "2" });
    this.checkoutButton = page.getByRole("button", { name: " Checkout" });
    this.privacyCheckBox = page.getByText(
      "I have read and agree to the Terms & Conditions"
    );
    this.buttonContinue = page.getByRole("button", { name: "Continue " });
  }

  async visitedHomePage() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
  }
  async clickOnBacketIcon(): Promise<void> {
    await this.basketIcon.click();
  }
  async clickOnCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
  }

  async fillPersonalDetails(details: PersonalDetailsData) {
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.emailInput.fill(details.email);
    await this.telephoneInput.fill(details.phone);
    await this.address1Input.fill(details.address);
    await this.address2Input.fill(details.address2);
    await this.postCodeInput.fill(details.postCode);
  }
  async acceptPrivacy(): Promise<void> {
    await this.privacyCheckBox.click();
  }
  async clickOnContinueButton(): Promise<void> {
    await this.buttonContinue.click();
  }
}
