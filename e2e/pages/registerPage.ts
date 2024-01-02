import { Page } from 'playwright';

export class RegisterPage{


    constructor( public page: Page){

    }

    async enterFirstName(firstName:string): Promise <void>{
        await this.page.locator('#input-firstname')
    }

    async enterLastName(lastName:string){
        await this.page.locator('#input-lastname')
    }

    async enterEmail(email:string){
        await this.page.locator('#input-email')
    }
    
    async enterPhone(phone:string){
        await this.page.locator('#input-telephone')
    }

    async enterPassword(password:string){
        await this.page.locator('#input-password')
    }
    
    async enterConfirmPassword(confirmpassword:string){
        await this.page.locator('#input-confirm')
    }

    async isSubscribeChecked(){
        return await this.page.locator('#input-newsletter-no').isChecked()
    }
    
    async clickPrivacyPolicy(){
        await this.page.click('input[type="checkbox"]')
    }

    async clickToContinue(){
        await this.page.click('input[value="Continue"]')
    }
}
