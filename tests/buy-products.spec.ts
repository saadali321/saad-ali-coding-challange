import { test } from '@playwright/test';
import { DemoBlazePage } from '../pages/DemoBlazePage';

test('Login, buy products, and logout', async ({ page }) => {
  test.setTimeout(60000);

  const demoBlaze = new DemoBlazePage(page);

  await demoBlaze.openSite();
  await demoBlaze.login('test', 'test');
  await demoBlaze.addProduct('Samsung galaxy s6');
  await demoBlaze.addProduct('Nokia lumia 1520');
  await demoBlaze.checkout();
  await demoBlaze.logout();
});
