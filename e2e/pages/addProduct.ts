import { Locator, Page } from "@playwright/test";

export class AddProduct {
  private page: Page;

  private bannerPhoto: Locator;
  private increaseButton: Locator;
  private addToCardButton: Locator;
  private checkoutButton: Locator;

  constructor(page: Page) {
    this.increaseButton = page.getByRole("button", {
      name: "Increase quantity",
    });
    this.addToCardButton = page.getByRole("button", {
      name: "Add to Cart",
    });
  }

  async clickOnImageIphone() {
    await this.page.getByRole("link", { name: "Iphone 11 pro max" }).click();
  }
  async clickOnIncreaseButton(n: number): Promise<void> {
    for (let i = 0; i < n; i++) {
      await this.increaseButton.click();
    }
  }
  async clickOnAddToCart() {
    await this.addToCardButton.click();
  }
}
