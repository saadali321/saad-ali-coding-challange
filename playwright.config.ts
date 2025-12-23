import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  testDir: './tests',
  // 1. Run tests one by one (Sequential)
  fullyParallel: false,
  workers: 1, 
  
 reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    // 2. Slow motion and Browser setup
    launchOptions: {
      slowMo: 1000, // 1 second delay between actions for visibility
    },
    headless: false, // Ensure browser is visible
    viewport: { width: 1280, height: 720 },
    video: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});