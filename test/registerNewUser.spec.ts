import { test, expect } from "@playwright/test";
import { RegisterPage } from "../e2e/pages/registerPage";
import { getUserData } from "../e2e/pages/helpers";

test("register new user", async ({ page }) => {
  const register = new RegisterPage(page);

  await register.visited();
  await register.fillRegistrationForm(getUserData());
  await register.isSubscribeChecked();
  await register.clickPolicyButton();
  await register.clickRegisterButton();
  await expect(
    page.getByText(" Your Account Has Been Created!"),
    "OK"
  ).toBeVisible();
});
