import { Locator, Page } from "@playwright/test";

export class AddProduct {
  bannerPhoto: Locator;
  increaseButton: Locator;
  addToCardButton: Locator;
  checkoutButton: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.increaseButton = page.getByRole("button", {
      name: "Increase quantity",
    });
    this.addToCardButton = page.getByRole("button", {
      name: "Add to Cart",
    });

    console.log(this.increaseButton);
  }
  async clickLinePhone() {
    await this.page.getByRole("link", { name: "Iphone 11 pro max" }).click();
  }
  async clickIncreaseButton(n: number): Promise<void> {
    /*  const res = await this.page
      .getByRole("button", {
        name: "Increase quantity",
      })
      .click({ clickCount: n });

    console.log(res);*/
    // const numArr = Array.from(Array(n).keys());

    // for (const item of numArr) {
    //   console.log("click item: ", item);
    //   const res = await this.increaseButton.click();

    //   console.log("btn click res: ", res);
    // }
    for (let i = 0; i < n; i++) {
      await this.increaseButton.click();
    }
  }
  async addToCart() {
    await this.addToCardButton.click();
  }
}
