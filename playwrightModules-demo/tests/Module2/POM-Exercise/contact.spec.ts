import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/ThinkingTesterAppPages/loginPage';
import { ContactListPage } from '../../../pages/ThinkingTesterAppPages/ContactListPage';
import { AddContactPage } from '../../../pages/ThinkingTesterAppPages/AddContactPage';

test('Add contact @test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLandingPage();
  await loginPage.login("lan.nguyen@ttcglobal.com", "Khunglong@123");

  const contactListPage = new ContactListPage(page);
  await contactListPage.clickAddNewContact();

  const addANewContactPage = new AddContactPage(page);

  let firstName: string = "Lan";
  let lastName: string = "Nguyen";
  await addANewContactPage.submitANewContact(firstName, lastName);
  await contactListPage.isContactVisible(firstName, lastName);
})