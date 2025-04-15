import { NextFunction, Request, Response } from "express";
import { ClientError } from "../errors/ClientError";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ClientError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
}
