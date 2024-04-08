import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class ContactDetailsPage {
    readonly page: Page;
    readonly edit: Locator;
    readonly delete: Locator;
    readonly submit: Locator;


    constructor(page: Page) {
        this.page = page;
        this.edit = page.locator('[id="edit-contact"]');
        this.delete = page.locator('[id="delete"]');
    }

    async clickEdit() {
        await this.edit.dblclick();
        await this.page.waitForLoadState("networkidle");
    }

    async clickDelete() {
        await this.delete.dblclick();
        await this.page.waitForLoadState("networkidle");
    }

}