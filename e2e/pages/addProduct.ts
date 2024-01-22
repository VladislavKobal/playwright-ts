import { Locator, Page, test } from '@playwright/test';

export class AddProduct{

    specialHotPage: Locator;
    selectedCategoryLaptop: Locator;
    selectSomeProduct1: Locator;
    selectSomeProduct2: Locator;

    constructor(public page: Page){
        this.page = page;
        this.specialHotPage = page.getByRole('link', { name: 'Special Hot', exact: true });
        this.selectedCategoryLaptop = page.getByRole('link', { name: 'Laptops (75)' });
        this.selectSomeProduct1 = page.locator('.product-action > button').first();
        this.selectSomeProduct2 = page.locator('div:nth-child(2) > .product-thumb > .product-thumb-top > .product-action > button').first();
    }

}