import { test, expect } from '@playwright/test';

test('Login a user with valid credentials @loginSauce', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState();
    //await page.pause();

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verify products page
    await expect(page.locator('text=Products')).toHaveText('Products');
    await page.getByRole('button', { name: 'Open Menu' }).click();

    // Verify logout text
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toHaveText('Logout');

    //soft assertion
    // await expect.soft(page.locator('text=Products')).toHaveText('Products');
    // await page.getByRole('button', { name: 'Open Menu' }).click();
    // await expect.soft(page.locator('[data-test="logout-sidebar-link"]')).toHaveText('Logout');


})