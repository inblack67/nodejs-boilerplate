import { Request, Response, NextFunction } from "express";
import logger from "loglevel";

export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      logger.error(
        `Error in ${req.method} ${req.originalUrl}: ${err.message}`,
        {
          stack: err.stack,
          requestBody: req.body,
        },
      );
      next(err);
    });
  };
};
