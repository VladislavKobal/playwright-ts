import { Locator, Page } from "@playwright/test";
export class AddProduct {
  private page: Page;

  private bannerPhoto: Locator;
  private increaseButton: Locator;
  private addToCardButton: Locator;

  constructor(page: Page) {
    this.increaseButton = page.getByRole("button", {
      name: "Increase quantity",
    });
    this.addToCardButton = page.getByRole("button", {
      name: "Add to Cart",
    });
    this.bannerPhoto = page.getByRole("link", { name: "Iphone 11 pro max" });
  }

  async clickOnImageIphone(): Promise<void> {
    await this.bannerPhoto.click();
  }
  async clickOnIncreaseButton(n: number): Promise<void> {
    for (let i = 0; i < n; i++) {
      await this.increaseButton.click();
    }
  }
  async clickOnAddToCart(): Promise<void> {
    await this.addToCardButton.click();
  }
}
