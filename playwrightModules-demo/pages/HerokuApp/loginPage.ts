import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly menuButton: Locator;
    readonly logoutMenuItem: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[id="email"]');
        this.passwordInput = page.locator('[id="password"]');
        this.loginButton = page.locator('[id="submit"]');
    }

    async navigateToLandingPage() {
        //module 4 change this to pick from config
        await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/login");
        await this.page.context().clearCookies();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }

}