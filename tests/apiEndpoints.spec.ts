import { test, expect, request } from '@playwright/test';

test('GET Users', async ({ request }) => {
    const getResponse = await request.get('/api/users');

    expect(getResponse.status()).toBe(200);

    const getResponseBody = await getResponse.json();

    await console.log(getResponseBody);
});

test('GET User by ID', async ({ request }) => {
    const getResponse = await request.get('/api/users/2');

    expect(getResponse.status()).toBe(200);

    const getResponseBody = await getResponse.json();

    // await console.log(getResponseBody);
    expect(getResponseBody.data.first_name).toBe('Janet');
});

test('POST Create User', async ({ request }) => {
    const postResponse = await request.post('/api/users', {
        data: {
            job: 'Software Engineer in Testes',
            email: 'zeke.doe@example.com',
            first_name: 'Zeke',
            last_name: 'Doe',
        },
    });

    expect(postResponse.status()).toBe(201);
    // await console.log(postResponse.status());

    const postResponseBody = await postResponse.json();

    await console.log(postResponseBody);
});

test('PUT Update User', async ({ request }) => {
    const putResponse = await request.put('/api/users/2', {
        data: {
            job: 'Software Engineer in Charge'
        },
    });

    expect(putResponse.status()).toBe(200);

    const putResponseBody = await putResponse.json();

    await console.log(putResponseBody);
});

test('DELETE User', async ({ request }) => {
    const deleteResponse = await request.delete('/api/users/1');

    expect(deleteResponse.status()).toBe(204);
});