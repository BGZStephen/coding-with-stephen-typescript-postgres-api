import { Request, Response } from "express";

export function healthGetHandler(_req: Request, res: Response): void {
  res.status(200).send("OK");
}