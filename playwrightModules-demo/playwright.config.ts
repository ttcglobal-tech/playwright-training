import { defineConfig, devices } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv'
import { environment, environmentConfig } from './config/envConfig'
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config();


/**
 * See https://playwright.dev/docs/test-configuration.
 */
const defaultConfig : PlaywrightTestConfig = {
  testDir: './tests',
  /*
    Demo config changes
  */
  // Timeout for each test, includes test, hooks and fixtures
  // timeout: 30 * 60 * 1000,

  // Timeout for each assertion
  //expect: { timeout: 10000 },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Module 4 retries
  retries: 2,
  */
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  /*Module 4 reporters*/
  reporter: [['line'],['html'], ["allure-playwright"]],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    
    /*Module 4 : screenshot and video
   screenshot: 'on',
   video: 'on',
    */

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /*Module 4 : traces
    trace: 'on',
    */
  },

  /* Configure projects for major browsers */
  projects: [
    // Global setup and teardown
    {
      name: 'setup login',
      testMatch: 'global.setup.ts',
      teardown: 'teardown logout'
    },

    {
      name: 'teardown logout',
      testMatch: 'global.teardown.ts'
    },

    //Module 3 - Session storage as setup
    {
      name: 'session setup login',
      testMatch: 'sessionStorage.setup.ts',
    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // Module 3 - Session storage dependency
       dependencies: ['session setup login']
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};

const environmentName = process.env.TEST_ENV || 'stage';

const config: environmentConfig = {
  ...defaultConfig,
  ...(environment[environmentName])
};


export default config;
