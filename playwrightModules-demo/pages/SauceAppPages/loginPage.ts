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
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutMenuItem = page.locator('text=Logout');
    }

    async navigateToLandingPage() {
        //module 4 change this to pick from config
        await this.page.goto("https://www.saucedemo.com/");
        await this.page.context().clearCookies();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState("networkidle");
    }

    async clickMenuButton() {
        await this.menuButton.click();
    }

}