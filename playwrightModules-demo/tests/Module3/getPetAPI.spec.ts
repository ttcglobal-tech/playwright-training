import { test, expect } from '@playwright/test';


test('Get a pet using get method', async ({ request }) => {

    const getResponse = await request.get('https://petstore.swagger.io/v2/pet/3', {});

    const jsonResponseBody = JSON.stringify(await getResponse.json());

    console.log("Post response body --> " + jsonResponseBody)

    const statusCode = await getResponse.status();
    console.log("Post response status code --> " + statusCode)
    await expect.soft(statusCode).toEqual(200)

    console.log("Post response status code --> " + getResponse.ok())
    await expect(getResponse.ok()).toBeTruthy();

    const parsedJson = JSON.parse(jsonResponseBody)
    const petName = parsedJson.tags[0].name;
    console.log("Parsed JSON == " + parsedJson.tags[0].name)
    await expect(petName).toEqual('cat')

})
