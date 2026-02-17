import { Page, Locator } from '@playwright/test';

export class ApiPage {
    readonly page: Page;
    readonly webElementsLink: Locator;
    readonly apiOverview: Locator;
    readonly getUsers: Locator;
    readonly getUserById: Locator;
    readonly postUsers: Locator;
    readonly putUserById: Locator;
    readonly deleteUserById: Locator;

    readonly getUsersByIdBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.webElementsLink = page.getByRole('link', { name: 'Back to Web Elements' });
        this.apiOverview = page.getByRole('link', { name: 'API Overview' });
        this.getUsers = page.getByRole('link', { name: 'GET /api/users', exact: true });
        this.getUserById = page.getByRole('link', { name: 'GET /api/users/{id}' });
        this.postUsers = page.getByRole('link', { name: 'POST /api/users' });
        this.putUserById = page.getByRole('link', { name: 'PUT /api/users/{id}' });
        this.deleteUserById = page.getByRole('link', { name: 'DELETE /api/users/{id}' });
        this.getUsersByIdBox = page.getByText('GET /api/users/{id} Fetch a');
    }

    async navigate() {
        await this.page.goto('api-testing');
    }

    // async login(username, password) {
    //     await this.usernameInput.fill(username);
    //     await this.passwordInput.fill(password);
    //     await this.loginButton.click();
    // }
}
