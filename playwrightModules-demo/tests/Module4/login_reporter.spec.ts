import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'serial' });

test.describe('Tests in parallel @reporter', () => {
    test('Login a user with valid credentials', async ({ page }) => {

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

})

    test('Login a user with invalid credentials', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState();
    //await page.pause();

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

 
    // Verify Error message
    await expect(page.getByText("Epic sadface: sorry, this user has been locked out")).toBeVisible();

   })

   test.skip('Login test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState();
    //await page.pause();

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

 
    // Verify Error message
    await expect(page.getByText("Epic sadface: sorry, this user has been locked out")).toBeVisible();

   })
})
//npx playwright test --project=chromium -g "reporter" --headed