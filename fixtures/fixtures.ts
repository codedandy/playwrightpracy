import { test as base, expect } from '@playwright/test';
import { ApiPage } from '../pages/apiTestingPage';

type shinFixtures = {
    apiPage: ApiPage;
};

export const test = base.extend<shinFixtures>({
    apiPage: async ({ page }, use) => {
        await use(new ApiPage(page));
    },
});

export { expect };