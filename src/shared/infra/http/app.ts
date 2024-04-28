/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/infra/http/errors/appError";

const app = express();

app.use(express.json());

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    },
);

export { app };
