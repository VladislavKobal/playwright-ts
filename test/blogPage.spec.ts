import { expect, test } from '@playwright/test';
import { LoginPage } from '../e2e/pages/loginPage';
import { blogPage } from '../e2e/pages/blogPage';
import { faker } from '@faker-js/faker';

const randomName = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomComment = faker.lorem.text();


test("Register_User",async ({page}) => {
    const addComment = new blogPage(page);
    const visited = new LoginPage(page);
    await visited.mainPage();
    await addComment.cButton.click();
    await addComment.shitLocator.click();
    await addComment.addName.fill(randomName);
    await addComment.addemail.fill(randomEmail);
    await addComment.addComment.fill(randomComment);
    await page.pause();
})

