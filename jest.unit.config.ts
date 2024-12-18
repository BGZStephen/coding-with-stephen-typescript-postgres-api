import type { Config } from "jest";
import baseConfig from "./jest.config";

export default (): Config => {
  return {
    ...baseConfig(),
    testMatch: ["**/?(*.)+(unit.test).ts"],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts", "!src/**/*.integration.test.ts"],
    clearMocks: true,
  };
};
