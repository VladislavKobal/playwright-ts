import { Page } from '@playwright/test';

export class LoginPage{

    constructor(public page: Page){}
    
    async enterEmail(emailaddres: string){
        await this.page.locator('#input-email')
    }

    async enterPassword(password: string){
        await this.page.locator('#input-password')
    }

    async clickLogin(){
        await this.page.click('input[value="Login"]')
    }
}