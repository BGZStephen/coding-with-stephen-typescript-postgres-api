jest.mock("dotenv");

beforeEach(() => {
  jest.resetModules();
})

describe("config", () => {
  test("It picks up config values from process.env", () => {
    const processEnv = process.env;

    process.env = {
      PORT: "3000"
    }

    const { config } = require(".")

    expect(config).toEqual({
      PORT: "3000"
    })

    process.env = processEnv;
  })

  test("It picks up default config values when items are not found on process.env", () => {
    const processEnv = process.env;

    process.env = {}

    const { config } = require(".")

    expect(config).toEqual({
      PORT: ""
    })

    process.env = processEnv;
  })
})

describe("validateConfig", () => {
  test("It throws an error if required environment variables are missing", () => {
    const { requiredConfigKeys, validateConfig } = require(".");

    const processEnv = process.env;

    process.env = {}

    expect(() => validateConfig()).toThrow(
      new Error(
        `Missing required environment variables: ${requiredConfigKeys.join(", ")}`
      )
    )

    process.env = processEnv;
  })
})