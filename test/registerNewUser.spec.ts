import { expect, test } from '@playwright/test';
import { RegisterPage } from '../e2e/pages/registerPage';
import { faker } from '@faker-js/faker';

const regUser = {
    name: faker.company.name(),
    secondName: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    pwd: faker.internet.password(),
}

test("register new user",async ({page}) => {
    const register = new RegisterPage(page);
    await register.visited()
    await register.firstName.fill(regUser.name);
    await register.lastName.fill(regUser.secondName);
    await register.email.fill(regUser.email);
    await register.phone.fill(regUser.phone);
    await register.pwd.fill(regUser.pwd)
    await register.confirmPwd.fill(regUser.pwd);
    await register.isSubscribeChecked();
    await register.policy.click();
    await register.clickContinueButton();
    await page.pause();
})

