import { expect } from "@playwright/test";
import { Page, Locator } from "playwright";

export class ContactListPage {
  readonly page: Page;
  readonly addNewContactButton: Locator;
  readonly name: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewContactButton = page.getByText("Add a New Contact");
    this.name = page.locator("tr.contactTableBodyRow");
  }

  async clickAddNewContact() {
    await expect(this.addNewContactButton).toBeVisible();
    await this.addNewContactButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  async isContactVisible(firstName: string, lastName: string) {
    await expect(this.name.first()).toContainText(firstName + " " + lastName);
  }
}