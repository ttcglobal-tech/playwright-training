import { test, expect } from '@playwright/test';


test('Add a pet to pet store using post method', async ({ request }) => {

    const postRequest = await request.post('https://petstore.swagger.io/v2/pet', {

        data:
        {
            "id": 24,
            "category": {
                "id": 24,
                "name": "string"
            },
            "name": "dragon",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 24,
                    "name": "hellfire"
                }
            ],
            "status": "available"
        }
    });

    console.log("Post response body --> " + JSON.stringify(await postRequest.json(), null, 2))

    const statusCode = await postRequest.status();

    console.log("Post response status code --> " + statusCode)

    await expect(statusCode).toEqual(200)

    console.log("Post response status code --> " + postRequest.ok())

    await expect(postRequest.ok()).toBeTruthy();

})