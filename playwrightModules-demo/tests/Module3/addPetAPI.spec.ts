import { test, expect } from '@playwright/test';


test('Add a pet to pet store using post method', async ({ request }) => {

    const postRequest = await request.post('https://petstore.swagger.io/v2/pet', {

        data:
        {
            "id": 3,
            "category": {
                "id": 3,
                "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 3,
                    "name": "cat"
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