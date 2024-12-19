import express from "express";
import { config, validateConfig } from "./config";

validateConfig()

export const PORT = config.PORT;

export const app = express();

export function listenerCallback() {
  console.log(`API server listening on port ${PORT}`)
}

app.listen(PORT, listenerCallback)