import { fa, faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/HerokuApp/loginPage';
import { ContactListPage } from '../../../pages/HerokuApp/contactListPage';
import { AddContactPage } from '../../../pages/HerokuApp/addContactPage';
import { ContactDetailsPage } from '../../../pages/HerokuApp/contactDetailsPage';
import { EditContactPage } from '../../../pages/HerokuApp/editContactPage';

test('Create and Edit Customer @herokuapp', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const contactListPage = new ContactListPage(page);
    const addContactPage = new AddContactPage(page);
    const contactDetailsPage = new ContactDetailsPage(page);
    const editContactPage = new EditContactPage(page);

    await loginPage.navigateToLandingPage();

    await loginPage.login("brian.rivadulla@ttcglobal.com", "Test@1234");

    await expect(page).toHaveTitle("My Contacts");

    // Add Contact
    await contactListPage.clickAddNewContact();

    // Verify Add Contact page
    await expect(page).toHaveTitle("Add Contact");
    await addContactPage.populateDetails('firstName', 'lastName');

    // Verify Contact List page
    await expect(page).toHaveTitle("My Contacts");
    await contactListPage.clickRowContact();

    // Verify Contact Details page
    await expect(page.locator('text=Contact Details')).toHaveText('Contact Details');
    await contactDetailsPage.clickEdit

    // Verify Edit Contact page
    await expect(page.locator('text=Edit Contact')).toHaveText('Edit Contact');
    await editContactPage.populateDetails(faker.person.firstName(), faker.person.lastName());

    // // Verify Contact Details page
    // await expect(page.locator('text=Contact Details')).toHaveText('Contact Details');
    // await page.locator('[id="delete"]').click();

    // Verify logout text
    await page.locator('[id="logout"]').click();
    await expect(page.locator('text=Contact List App')).toHaveText('Contact List App');

})