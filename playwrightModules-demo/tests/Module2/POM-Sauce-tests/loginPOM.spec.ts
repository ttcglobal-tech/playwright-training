import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/SauceAppPages/loginPage';

test("Login a new user with valid inputs @pomSauce", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLandingPage();

    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveTitle("Swag Labs");

    await loginPage.clickMenuButton();

    await expect(loginPage.logoutMenuItem).toBeVisible();

})