import { expect, test } from '@playwright/test';
import { HttpStatusCode } from 'axios';
import Ajv from "ajv";

import { UserSchemaData } from '../schema/getUserData.schema';
import { createUserSchemaData } from '../schema/createUser.schema';
import { updateUserSchemaData } from '../schema/updateUserData.schema';
import { createUserData, updateUserData } from '../data';

const ajv = new Ajv();

test.describe('Reqres API Tests', () => {
    test('TC-001 - Create user successfully', async ({ request }) => {
        const response = await request.post(`/api/users`, {
            data: createUserData
        });

        expect(response.status()).toBe(HttpStatusCode.Created);

        const data = await response.json();
        const validate = ajv.compile(createUserSchemaData);

        expect(validate(data)).toBe(true);
        expect(data).toEqual(expect.objectContaining(createUserData));
    });


    test('TC-002 - Get single user data successfully', async ({ request }) => {

        const userId = 2;
        const response = await request.get(`/api/users/${userId}`);

        expect(response.status()).toBe(HttpStatusCode.Ok);
     
        const data = await response.json();
        const validate = ajv.compile(UserSchemaData);

        expect(validate(data)).toBe(true);
        expect(data.data.id).toBe(userId);
    });

    test('TC-003 - Update user successfully', async ({ request }) => {
        const userId = 2;
        const response = await request.put(`/api/users/${userId}`, {
            data: updateUserData
        });

        expect(response.status()).toBe(HttpStatusCode.Ok);
       
        const data = await response.json();
        const validate = ajv.compile(updateUserSchemaData);

        expect(validate(data)).toBe(true);
        expect(data).toEqual(expect.objectContaining(updateUserData));
    });

    test('TC-004 - Delete user successfully', async ({ request }) => {
        const userId = 2;
        const response = await request.delete(`/api/users/${userId}`);

        expect(response.status()).toBe(HttpStatusCode.NoContent);
    });
});