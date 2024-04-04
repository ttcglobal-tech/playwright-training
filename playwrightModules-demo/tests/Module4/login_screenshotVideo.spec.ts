import { test, expect } from '@playwright/test';

test('Login a user with valid credentials @screenshot', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState();
    //await page.pause();

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verify products page
    await expect(page.locator('text=Products')).toHaveText('Products');
    await page.getByRole('button', { name: 'Open Menu' }).click();

    await page.screenshot({ path: 'Home_screenshot.png' });

    // Verify logout text
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toHaveText('Logout');

})
//npx playwright test --project=chromium -g "screenshot" --headed