import { Locator, Page, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class checkoutProductPage {
  clickBasket: Locator;
  clickCheckoutButton: Locator;
  clickToGuest: Locator;
  firstName: Locator;
  lastName: Locator;
  emailField: Locator;
  telephoneF: Locator;
  loginButton: Locator;
  addresF: Locator;
  addresL: Locator;
  postCode: Locator;
  privace: Locator;

  constructor(public page: Page) {
    this.page = page;
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

    this.loginButton = page.locator("#button-save");
  }

  async mainPage() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
  }
  async basket() {
    await this.page.getByRole("button", { name: "2" }).click();
  }
  async checKout() {
    await this.page.getByRole("button", { name: " Checkout" }).click();
  }

  async fillPersonalDetails(
    fName,
    lName,
    eEmail,
    pPhone,
    aDress,
    aDress2,
    postCode
  ) {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.emailField.fill(eEmail);
    await this.telephoneF.fill(pPhone);
    await this.addresF.fill(aDress);
    await this.addresL.fill(aDress2);
    await this.postCode.fill(postCode);
  }
  async acceptPrivacy() {
    await this.page
      .getByText("I have read and agree to the Terms & Conditions")
      .click();
  }
  async continueB() {
    await this.page.getByRole("button", { name: "Continue " }).click();
  }
}
export const personalDetails = {
  name: faker.company.name(),
  lname: faker.company.name(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  addres1: faker.company.name(),
  addres2: faker.company.name(),
  postcode: faker.number.int(),
};
