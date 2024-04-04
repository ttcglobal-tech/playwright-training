import { test, expect } from '@playwright/test';

const authFile = 'playwright/.auth/session.json';


test('reuse session state to login to sauce demo app @session', async ({ browser }) => {

    const loggedinContext = await browser.newContext({ storageState: authFile });

    const loggedinPage = await loggedinContext.newPage();

    await loggedinPage.goto('https://www.saucedemo.com/inventory.html');
    await loggedinPage.waitForLoadState();

    // add product to the cart
    await loggedinPage.locator("#add-to-cart-sauce-labs-backpack").click();
    await loggedinPage.locator("//a[@class='shopping_cart_link']").click();

    // verify the product added to the cart
    await expect(loggedinPage.locator("text=Sauce Labs Backpack")).toBeVisible();


})
