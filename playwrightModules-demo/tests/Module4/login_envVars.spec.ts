import { test, expect } from '@playwright/test';
import config from '../../playwright.config';
test('Login a user with valid credentials @env-vars', async ({ page }) => {


    await page.goto(config.baseUrl);
    await page.waitForLoadState();
    //await page.pause();

    //"!" is the non-null assertion operator. It is a way to tell the compiler "this expression cannot be null or undefined here, so don't complain 
    //about the possibility of it being null or undefined
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill(process.env.password!);
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

//npx playwright test --project=chromium -g "env-vars" --headed