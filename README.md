**Playwright E2E Automation Framework**
**Overview**

This repository demonstrates a production-style Playwright end-to-end automation framework validating a complete e-commerce user journey:
Login → Add Products → Checkout → Logout.

The focus is on stability, maintainability, and reporting, reflecting real-world QA automation practices.

**Key Practices**

**Playwright Test with TypeScript**

Page Object Model (POM)

Explicit synchronization for flaky UI behavior

Single, stable E2E flow

Allure reporting with screenshots, videos, and traces

Tech Stack

Playwright

TypeScript

**Allure Reports**

Node.js / npm

Project Structure
pages/    → Page Objects
tests/    → E2E tests
playwright.config.ts

Running Tests
npm install
npx playwright install
npx playwright test


**Headed mode:**

npx playwright test --headed

Reporting (Allure)
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

Test Target

https://www.demoblaze.com

(Public demo site used to simulate real-world application instability)


Summary

Designed to reflect real production automation, emphasizing clean architecture, reliable synchronization, and actionable reporting.
