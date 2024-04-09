import { PlaywrightTestConfig } from "@playwright/test";

export interface environmentConfig extends PlaywrightTestConfig {
  baseUrl: string;
  // Declare more properies or variables
  // Repeat same steps like baseUrl
}

//record is a built-in utility type in TypeScript. It's used to define an object type where the keys are of a specific type and the values are of another specific type.
//The syntax for record type is: Record<Keys, Type>


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
