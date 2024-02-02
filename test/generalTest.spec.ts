import { RegisterPage } from "../e2e/pages/registerPage";
import { AddProduct } from "../e2e/pages/addProduct";
import { LoginPage, loginWithCredential } from "../e2e/pages/loginPage";
import { test, Page } from "@playwright/test";
import { checkoutProductPage } from "../e2e/pages/checkoutPage";
import { RandomDataForFillField } from "../e2e/pages/helpers";
import { getUserData } from "../e2e/pages/helpers";

test.describe.configure({ mode: "serial" });

test.describe(() => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("register new user", async () => {
    const register = new RegisterPage(page);
    //link to site
    await register.visited();
    //fill data into form
    await register.fillForm(getUserData());
    await register.isSubscribeChecked();
    await register.clickPolicyButton();
    await register.clickContinueButton();
    await register.logOut();
  });

  test("Login", async () => {
    const authorization = new LoginPage(page);

    await authorization.mainPage();
    await authorization.clickMainPage();
    await authorization.fillLoginField(
      loginWithCredential.email,
      loginWithCredential.pwd
    );
    await authorization.clickLoginButton();
    await authorization.mainPage();
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
    await checkoutAction.fillPersonalDetails(RandomDataForFillField);
    await checkoutAction.acceptPrivacy();
    await page.pause();
    await checkoutAction.continueB();
  });
});
