import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'serial' });



test('Login a user with invalid credentials @regex', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState();
    //await page.pause();

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

 
    // Verify Error message
    await expect(page.getByText(/Epic sadface: sorry, this user has been locked out/i)).toBeVisible();

})

//npx playwright test --project=chromium -g "regex" --headed