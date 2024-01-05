import { expect, test } from '@playwright/test';
import { RegisterPage } from '../e2e/pages/registerPage';

test("Register_User",async ({page}) => {
    const register = new RegisterPage(page);
    await register.visited()
    await register.firstName.fill("Vlad");
    await register.lastName.fill("Ivanovich");
    await register.email.fill("test12Q@gmail.com");
    await register.phone.fill("1111111111");
    await register.pwd.fill("1111111111")
    await register.confirmPwd.fill("1111111111");
    await register.isSubscribeChecked();
    await register.policy.click();
    await register.clickContinueButton();
    await page.pause();
})

