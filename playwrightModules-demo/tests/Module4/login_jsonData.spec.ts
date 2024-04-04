import { test, expect } from '@playwright/test';
import userData from '../../test_data/user_data.json'



test(`Login Test @jsonData`, async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState();
    //await page.pause();

    await page.locator('[data-test="username"]').fill(userData.user[0].userName);
    await page.locator('[data-test="password"]').fill(userData.user[0].password);
    await page.locator('[data-test="login-button"]').click();

    // Verify products page
    await expect(page.locator('text=Products')).toHaveText('Products');
    await page.getByRole('button', { name: 'Open Menu' }).click();

    // Verify logout text
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toHaveText('Logout');

});


//npx playwright test --project=chromium -g "jsonData" --headed