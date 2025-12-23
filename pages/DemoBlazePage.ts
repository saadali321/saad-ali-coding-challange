import { Page, expect } from '@playwright/test';

export class DemoBlazePage {
  constructor(private page: Page) {}

  async openSite() {
    await this.page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });
  }

  async login(username: string, password: string) {
    await this.page.click('#login2');

    await this.page.waitForSelector('#loginusername', { state: 'visible' });

    await this.page.fill('#loginusername', username);
    await this.page.fill('#loginpassword', password);

    await this.page.click('button[onclick="logIn()"]');

    await this.page.waitForSelector('#logout2', { timeout: 20000 });
  }

  async addProduct(productName: string) {
    await this.page.click(`a:has-text("${productName}")`);

    // Prepare alert handler BEFORE clicking
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.page.click('a:has-text("Add to cart")');

    const dialog = await dialogPromise;
    await dialog.accept();

    await this.page.goto('https://www.demoblaze.com/');
  }

  async checkout() {
    await this.page.click('#cartur');

    await this.page.waitForSelector('button:has-text("Place Order")');
    await this.page.click('button:has-text("Place Order")');

    await this.page.fill('#name', 'Saad Ali - CXT Test');
    await this.page.fill('#country', 'Pakistan - CXT Test');
    await this.page.fill('#city', 'Sialkot - CXT Test');
    await this.page.fill('#card', '4111111111111111');
    await this.page.fill('#month', '12');
    await this.page.fill('#year', '2026');

    await this.page.click('button:has-text("Purchase")');

    await this.page.waitForSelector('.sweet-alert', { timeout: 20000 });
    await this.page.click('button:has-text("OK")');
  }

  async logout() {
    await this.page.click('#logout2');
    await this.page.waitForSelector('#login2');
  }
}
