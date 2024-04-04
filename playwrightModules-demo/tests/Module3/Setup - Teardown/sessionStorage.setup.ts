import { test as setup, expect } from '@playwright/test';


const authFile = 'playwright/.auth/session.json';

setup('Session storage state', async ({ page }) => {

    console.log('Setup saving storage state...');

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verify products page
    await expect(page.locator('text=Products')).toHaveText('Products');
    await page.getByRole('button', { name: 'Open Menu' }).click();

    // Verify logout text
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toHaveText('Logout');

    await page.context().storageState({ path: authFile });
    await page.close();

});

