import { test, expect } from '@playwright/test';
import { ExerciseLoginPage } from '../../../pages/SauceAppPages/loginPage2';
import { AddContactPage } from '../../../pages/SauceAppPages/addContactPage';
import { ContactListPage } from '../../../pages/SauceAppPages/contactListPage';

test("Add contact", async ({ page }) => {
    const loginPage = new ExerciseLoginPage(page);
    await loginPage.navigateToLandingPage();
    await loginPage.login('test@ttc.com', 'password!');

    const addContactPage = new AddContactPage(page);
    await addContactPage.addContactButton.click();

    const contactListPage = new ContactListPage(page);
    await contactListPage.addContact({ firstName: 'firstName', lastName: 'lastName', dateOfBirth: '2000-01-01', email: 'email@email.com', phone: '02111111111' });

    await expect(page.locator('text=firstName').first()).toHaveText('firstName lastName');
})