import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class AddContactPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly submit: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('[id="firstName"]');
        this.lastName = page.locator('[id="lastName"]');
        this.submit = page.locator('[id="submit"]');
    }

    async populateDetails(firstName: string, lastName: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.submit.click();
        await this.page.waitForLoadState("networkidle");
    }

}