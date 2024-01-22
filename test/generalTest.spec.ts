import { RegisterPage, regUser } from "../e2e/pages/registerPage";
import { AddProduct } from "../e2e/pages/addProduct";
import { LoginPage, loginWithCredential } from "../e2e/pages/loginPage";
import { test, Page } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe(() => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("register new user", async ({}) => {
    const register = new RegisterPage(page);
    //link to site
    await register.visited();
    //fill data into form
    await register.fillForm(
      regUser.name,
      regUser.secondName,
      regUser.email,
      regUser.phone,
      regUser.pwd,
      regUser.pwd
    );
    await register.isSubscribeChecked();
    await register.clickPolicyButton();
    await register.clickContinueButton();
    await register.logOut();
  });

  test("Login", async ({}) => {
    const authorization = new LoginPage(page);
    
    await authorization.mainPage();
    await authorization.clickMainPage();
    await authorization.fillLoginField(
      loginWithCredential.email,
      loginWithCredential.pwd
    );
    await authorization.clickLoginButton();
  });

  test("Add Product", async ({}) => {
    const addProductToBasket = new AddProduct(page);
    await addProductToBasket.specialHotPage.click();

    await addProductToBasket.selectedCategoryLaptop.click();
    await addProductToBasket.selectSomeProduct1.click();
    await addProductToBasket.selectSomeProduct2.click();
  });
});
