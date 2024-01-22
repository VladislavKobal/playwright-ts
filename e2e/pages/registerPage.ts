import { faker } from "@faker-js/faker";
import { Locator } from "@playwright/test";
import { Page } from "playwright";

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
  async fillForm(fName, lName, eEmail, pPhone, pPwd, cPwd) {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.email.fill(eEmail);
    await this.phone.fill(pPhone);
    await this.pwd.fill(pPwd);
    await this.confirmPwd.fill(cPwd);
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

export const regUser = {
  name: faker.company.name(),
  secondName: faker.company.name(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  pwd: faker.internet.password(),
};
