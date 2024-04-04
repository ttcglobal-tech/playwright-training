import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker'

test('faker demo @faker', async ({ page }) => {

    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.exampleEmail();

    console.log(faker.string.uuid())
    console.log(username)
    console.log(password)
    console.log(email)
    console.log(faker.image.avatar())
    console.log(faker.date.past())
});

//npx playwright test --project=chromium -g "faker"