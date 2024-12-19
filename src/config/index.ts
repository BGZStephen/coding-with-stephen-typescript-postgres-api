import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: string
  API_URL: string
}

export const config: Config = {
  PORT: process.env.PORT ?? "",
  API_URL: process.env.API_URL ?? ""
}

export const requiredConfigKeys: Array<keyof Config> = [
  "PORT",
  "API_URL"
]

export function validateConfig(): void {
  const missingConfigValues: Array<keyof Config> = [];

  for (const requiredConfigKey of requiredConfigKeys) {
    if (!process.env[requiredConfigKey]) {
      missingConfigValues.push(requiredConfigKey)
    }
  }

  if (missingConfigValues.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingConfigValues.join(", ")}`
    )
  }
}