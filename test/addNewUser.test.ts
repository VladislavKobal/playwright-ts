import { expect, test } from '@playwright/test';
import { RegisterPage } from '../e2e/pages/registerPage';

const USER = {
    email: "vlad@gmail.com",
    password: 1111111111
}

test("Register test_1",async ({page}) => {
    const register = new RegisterPage(page);
    //Open site
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    //fill some text into the field
    await register.fillInForm("Vlad","Kobal", USER.email,"1111111111",USER.password,USER.password)

})
