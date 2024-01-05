import { Locator } from '@playwright/test';
import { time } from 'console';
import { Page } from 'playwright';
export class RegisterPage{
    firstName: Locator;
    lastName: Locator;
    email: Locator;
    phone: Locator;
    pwd: Locator;
    confirmPwd: Locator;
    policy: Locator;

    constructor( public page: Page){
        this.page = page;
        this.firstName = this.page.locator('#input-firstname');
        this.lastName = this.page.locator('#input-lastname');
        this.email = this.page.locator('#input-email');
        this.phone = this.page.locator('#input-telephone');
        this.pwd = this.page.locator('#input-password');
        this.confirmPwd = this.page.locator('#input-confirm');
        this.policy = page.getByText('I have read and agree to the');
    }

    async visited(){
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    }

    async isSubscribeChecked(){
        return await this.page.locator('#input-newsletter-no').isChecked()
    }
    
    //Actions
    async clickContinueButton(){
        await this.page.click('input[value="Continue"]')
    }

}
