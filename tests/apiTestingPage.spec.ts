import { test, expect } from '../fixtures/fixtures';
import apiPageTD from '../test-data/apiTestingPage';

test('Go to API Testing page', async ({ page }) => {
    await page.goto('');

    const apiTestingLink = page.getByRole('banner').getByRole('link', { name: 'API Testing' });
    await apiTestingLink.click();

    await expect(page).toHaveURL(/.*api-testing/);

});

test('Go to GET Users tab', async ({ apiPage, page }) => {
    await apiPage.navigate();

    await apiPage.getUsers.click();

    await expect(page.getByText(apiPageTD.getUsersDesc)).toBeInViewport();
});

test('Go to GET User by ID tab', async ({ apiPage, page }) => {
    await apiPage.navigate();

    await apiPage.getUserById.click();

    await expect(apiPage.getUsersByIdBox).toContainText(apiPageTD.getUserByIdDesc);
});