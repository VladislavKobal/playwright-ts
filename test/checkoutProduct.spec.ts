import { AddProduct } from "../e2e/pages/addProduct";
import { test, Page, expect } from "@playwright/test";
import { checkoutProductPage } from "../e2e/pages/checkoutPage";
import { generateRandomUserData } from "../e2e/pages/helpers";
import { LoginPage } from "../e2e/pages/loginPage";
import { loginWithCredential } from "../e2e/pages/helpers";

test.describe.configure({ mode: "serial" });

test.describe(() => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("Login with good credential", async () => {
    const authorization = new LoginPage(page);

    await authorization.visited();
    await authorization.clickMainPage();
    await authorization.fillLoginForm(loginWithCredential);
    await authorization.clickLoginButton();
    await expect(page.getByText("My Orders")).toBeVisible();
  });
  test("Add Product", async () => {
    const addProductToBasket = new AddProduct(page);
    await addProductToBasket.clickOnImageIphone();
    await page.waitForLoadState("domcontentloaded");
    await addProductToBasket.clickOnIncreaseButton(5);
    await addProductToBasket.clickOnAddToCart();
  });
  test("checkout product", async () => {
    const checkoutAction = new checkoutProductPage(page);
    await checkoutAction.visitedHomePage();
    await checkoutAction.clickOnBacketIcon();
    await checkoutAction.clickOnCheckoutButton();
    await checkoutAction.fillPersonalDetails(generateRandomUserData);
    await checkoutAction.acceptPrivacy();
    await page.pause();
    await checkoutAction.clickOnContinueButton();
  });
});
