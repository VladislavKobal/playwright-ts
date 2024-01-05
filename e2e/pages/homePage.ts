import { Page } from '@playwright/test';

export class HomePage{

    constructor(public page: Page){}

    //Actions
    async clickHomePage(){
        await this.page.getByRole('link', { name: 'Home' }).click();
    }

    async clickOnLaptops(){
        await this.page.getByLabel('2 / 8').getByRole('link').click();
    }

    async searchField(){
        await this.page.getByRole("textbox", { name: "Search For Products" }).click();
        await this.page.getByRole('textbox', { name: 'Search For Products' }).fill('MackBook Pro');
        await this.page.locator(".type-text").click();
    }
    async addItemToTheCart(){
        await this.page.locator('#mz-product-grid-image-45-212469').click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    }


}