import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/SauceAppPages/loginPage';

test.describe('Sauce app demo test', () => {

    test.beforeAll(async () => {
        console.log('Before all test');
    })

    test.afterAll(async () => {
        console.log('After all test');
    })

    test("Login a new user with valid inputs using hooks @pomSauceHooks", async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLandingPage();

        await loginPage.login("standard_user", "secret_sauce");

        await expect(page).toHaveTitle("Swag Labs");

        await loginPage.clickMenuButton();

        await expect(loginPage.logoutMenuItem).toBeVisible();

    })

})

