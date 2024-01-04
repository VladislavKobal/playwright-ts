import { time } from 'console';
import { Page } from 'playwright';

export class RegisterPage{

    constructor( public page: Page){
        this.page = page;
    }

    // Locators
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
        await this.page.locator("#input-agree")
       
    }
    //Actions
    async clickToContinue(){
        await this.page.click('input[value="Continue"]')
    }
    //Fill some data in field
    async fillInForm(firstName,lastName,email,phone,password,confirmpassword){
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPhone(phone);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmpassword);
    }
}
