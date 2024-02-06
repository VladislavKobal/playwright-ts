
import { AddProduct } from "../e2e/pages/addProduct";
import { test, Page } from "@playwright/test";
import { checkoutProductPage } from "../e2e/pages/checkoutPage";
import { generateRandomUserData } from "../e2e/pages/helpers";


test.describe.configure({ mode: "serial" });

test.describe(() => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("Add Product", async () => {
    const addProductToBasket = new AddProduct(page);
    await addProductToBasket.clickLinePhone();
    await page.waitForLoadState("domcontentloaded");
    await addProductToBasket.clickIncreaseButton(5);
    await addProductToBasket.addToCart();
  });
  test("checkout product", async () => {
    const checkoutAction = new checkoutProductPage(page);
    await checkoutAction.mainPage();
    await checkoutAction.basket();
    await checkoutAction.checKout();
    await checkoutAction.fillPersonalDetails(generateRandomUserData);
    await checkoutAction.acceptPrivacy();
    await page.pause();
    await checkoutAction.continueB();
  });
});
