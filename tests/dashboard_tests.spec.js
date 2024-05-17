const { test } = require('../utils/fixtures.js');
import { DashboardPage } from '../pages/DashboardPage.js';
const testData = JSON.parse(JSON.stringify(require('../test-data/qa/testData.json')));

test.describe('E2E Test Suite', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.GotoLoginPage(process.env.WEB_URL);
        await loginPage.Login(process.env.username, process.env.password);
    });

    test('Validate Total Balance', async ({ dashboardPage }) => {
        await dashboardPage.AssertTotalBalance(testData.financialDetails.totalBalance);
    });

    test('Validate Credit Available', async ({ dashboardPage }) => {
        await dashboardPage.AssertCreditAvailable(testData.financialDetails.creditAvailable);
    });

    test('Validate Due Today', async ({ dashboardPage }) => {
        await dashboardPage.AssertDueToday(testData.financialDetails.dueToday);
    });

    test.afterAll(async ({ page }) => {
        await page.close();
    });
    
});