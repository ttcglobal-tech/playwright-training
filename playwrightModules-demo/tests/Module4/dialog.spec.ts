import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'serial' });



test('Delete contact @popup', async ({ page }) => {

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    await page.waitForLoadState();
    //await page.pause();

    await page.getByPlaceholder("Email").fill('playwright@training.com');
    await page.getByPlaceholder("Password").fill('playwright');
    
    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page).toHaveTitle("My Contacts");

    //Click on 1st row. 0th row is header.
    await page.locator('tr').nth(1).click();

    page.on('dialog', dialog => dialog.accept());

    await page.getByRole('button', {name: "Delete Contact"}).click();

})

//npx playwright test --project="chromium" -g "popup" --headed