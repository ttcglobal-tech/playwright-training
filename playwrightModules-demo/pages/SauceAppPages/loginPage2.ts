import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class ExerciseLoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[id="email"]');
        this.passwordInput = page.locator('[id="password"]');
        this.submitButton = page.locator('[id="submit"]');
    }

    async navigateToLandingPage() {
        //module 4 change this to pick from config
        await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/");
        await this.page.context().clearCookies();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
        await this.page.waitForLoadState("networkidle");
    }
}