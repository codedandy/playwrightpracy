import { test, expect } from '@playwright/test';


test('Go to landing page', async ({ page }) => {
    await page.goto('');

    await expect(page).toHaveTitle(/Free Automation/);
});

test('Go to API Testing page', async ({ page }) => {
    await page.goto('');

    const apiTestingLink = page.getByRole('banner').getByRole('link', { name: 'API Testing' });
    await apiTestingLink.click();

    await expect(page).toHaveURL(/.*api-testing/);

});