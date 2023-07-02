// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: ["TC01_E2EScenario.spec.js"],
  timeout: 30 * 1000,
  retries: 1,
  expect: {
    timeout: 30000
  },
  reporter: [["html"], ["line"], ["allure-playwright"]],
  workers:3,
  use: {
    headless: false,
    //browserName: "chromium",
    //channel: "chrome",
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    permissions: ["geolocation"],
    screenshot: "on",
    trace: "on",
    video:"on"
  },
  projects: [
    //{ name: "Chromium", use: { browserName: "chromium", channel: "chrome", ...devices["Desktop Chrome"] } },
    { name: "Chromium", use: { browserName: "chromium", channel: "chrome" } },
    { name: "Firefox", use: { browserName: "firefox", channel: "firefox" } },
    { name: "Edge", use: { browserName: "chromium", channel: "msedge" } }
  ]
});

