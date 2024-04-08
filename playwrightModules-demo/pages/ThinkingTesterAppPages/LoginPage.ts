import { Page, Locator } from "playwright";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder("Email");
    this.passwordInput = page.getByPlaceholder("Password");
    this.submitButton = page.getByText('Submit');
  }

  async navigateToLandingPage() {
    //module 4 change this to pick from config
    await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/login");
    await this.page.context().clearCookies();
  }

  async login(username: string, password: string) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await this.page.waitForLoadState("networkidle");
  }
}