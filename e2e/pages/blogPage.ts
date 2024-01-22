import { test, expect, Page, Locator } from "@playwright/test";

export class blogPage{
    blog: Locator;
    addName: Locator;
    addemail: Locator;
    addComment: Locator;
    cButton: Locator;
    shitLocator: Locator;

    constructor(public page: Page){
        this.page = page;
        this.blog = page.getByRole('button', {name: 'Blog'});
        this.addName = page.locator('#input-name');
        this.addemail = page.locator('#input-email');
        this.addComment = page.locator('#input-comment')
        this.cButton = page.getByRole('link', { name: 'Blog', exact: true });
        this.shitLocator = page.locator('#mz-article-tab-76210960-0').getByLabel('2 /').getByRole('link', { name: 'eget nunc lobortis mattis' }).first(); }}