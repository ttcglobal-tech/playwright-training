import { Page, Locator } from "playwright";

export class AddContactPage {
    readonly page: Page;
    readonly addContactButton: Locator;
    readonly contactTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addContactButton = page.locator('[id="add-contact"]');
        this.contactTable = page.locator('[id="contactTable"]');
    }
}