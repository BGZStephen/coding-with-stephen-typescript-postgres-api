import express from "express";
import { config, validateConfig } from "./config";
import { healthGetHandler } from "./handlers/health/get";

validateConfig()

export const PORT = config.PORT;

export const app = express();

app.get("/health", healthGetHandler)

export function listenerCallback() {
  console.log(`API server listening on port ${PORT}`)
}

app.listen(PORT, listenerCallback)