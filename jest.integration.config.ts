import type { Config } from "jest";
import baseConfig from "./jest.config";

export default (): Config => {
  return {
    ...baseConfig(),
    testMatch: ["**/?(*.)+(integration.test).ts"],
    testPathIgnorePatterns: ["build"],
  };
};
