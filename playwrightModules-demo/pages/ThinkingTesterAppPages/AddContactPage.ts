import { expect } from "@playwright/test";
import { Page, Locator } from "playwright";

export class AddContactPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly submitBtn: Locator;
    

    constructor(page: Page) {
        this.page = page;
        
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder('Last Name');
        this.submitBtn = page.getByRole("button", { name: "Submit" });
        
    }
      
    async submitANewContact(firstName: string, lastName: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.submitBtn.click();
        await this.page.waitForLoadState("networkidle");
    }
}
