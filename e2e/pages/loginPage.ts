import { Locator, Page } from '@playwright/test';

export class LoginPage{

    myAccount: Locator;
    email: Locator;
    pwd: Locator;
    loginButton: Locator;

    constructor(public page: Page){
        this.page = page;
        this.myAccount = this.page.getByRole('button', { name: ' My account' });
        this.email = this.page.locator("#input-email");
        this.pwd = this.page.locator("#input-password");
        this.loginButton = this.page.getByRole('button', { name: 'Login' }); 
    }
    
    async mainPage(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home")
    }
}