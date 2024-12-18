import express from "express";

export const PORT = 3000;

export const app = express();

export function listenerCallback() {
  console.log(`API server listening on port ${PORT}`)
}

app.listen(PORT, listenerCallback)