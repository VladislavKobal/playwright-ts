import { expect, test } from '@playwright/test';

import { RegisterPage } from '../e2e/pages/registerPage';


const email = "vlad@gmail.com"
const password = "Vlad123@"

test("Register test_1",async ({page}) => {
    const register = new RegisterPage(page);
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    await register.enterFirstName("Vlad");
    await register.enterLastName("Kobal");   
    await register.enterEmail(email);   
    await register.enterPhone("1234567890");   
    await register.enterPassword(password);   
    await register.enterConfirmPassword(password);   
    await register.clickPrivacyPolicy()
    await register.clickToContinue();   

})
