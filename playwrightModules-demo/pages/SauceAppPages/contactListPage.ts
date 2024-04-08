import { Page, Locator } from "playwright";

export class ContactListPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly dateOfBirth: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.firstNameInput = page.locator('[id="firstName"]');
        this.lastNameInput = page.locator('[id="lastName"]');
        this.dateOfBirth = page.locator('[id="birthdate"]');
        this.emailInput = page.locator('[id="email"]');
        this.phoneInput = page.locator('[id="phone"]');
        this.submitButton = page.locator('[id="submit"]');
    }

    async addContact(person: any) {
        await this.firstNameInput.fill(person.firstName);
        await this.lastNameInput.fill(person.lastName);
        await this.dateOfBirth.fill(person.dateOfBirth);
        await this.emailInput.fill(person.email);
        await this.phoneInput.fill(person.phone);
        await this.submitButton.click();
    }
}