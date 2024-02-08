import { test, expect } from "@playwright/test";
import { LoginPage } from "../e2e/pages/loginPage";
import { loginWithCredential } from "../e2e/pages/helpers";
import { Page } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe(() => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("Login with bad cred", async () => {
    const authorization = new LoginPage(page);

    await authorization.visited();
    await authorization.clickMainPage();
    await authorization.fillLoginForm(loginWithCredential);
    await authorization.clickLoginButton();
    await expect(
      page.getByText(" Warning: No match for E-Mail Address and/or Password.")
    ).toBeVisible();
  });

  test("Login with good credential", async () => {
    const authorization = new LoginPage(page);

    await authorization.visited();
    await authorization.clickMainPage();
    await authorization.fillLoginForm(loginWithCredential);
    await authorization.clickLoginButton();
    await expect(page.getByText("My Orders")).toBeVisible();
  });
});
