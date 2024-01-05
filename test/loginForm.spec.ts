import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/pages/loginPage';

test('Authorization test', async ({ page }) => {
  const authorization = new LoginPage(page);

  await authorization.mainPage();
  await authorization.myAccount.click()
  await authorization.email.fill("test1Q@gmail.com")
  await authorization.pwd.fill("1111111111")
  await authorization.loginButton.click();

});