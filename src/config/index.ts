import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: string
}

export const config: Config = {
  PORT: process.env.PORT ?? ""
}

export const requiredConfigKeys: Array<keyof Config> = [
  "PORT"
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