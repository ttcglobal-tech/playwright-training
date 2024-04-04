import { PlaywrightTestConfig } from "@playwright/test";

export interface environmentConfig extends PlaywrightTestConfig {
  baseUrl: string;
  // Declare more properies or variables
  // Repeat same steps like baseUrl
}

export const environment: Record<string, environmentConfig> = {
  dev: {
    baseUrl: "https://www.saucedemo.com/",
  },
  test: {
    baseUrl: "https://stage.mysite.com",
  },
  prod: {
    baseUrl: "https://prod.mysite.com",
  },
};
