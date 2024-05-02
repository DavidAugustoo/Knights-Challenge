/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { MongoBulkWriteError } from "mongodb";

import { AppError, handleAppError } from "./AppError";
import { handleMongoError } from "./MongoError";
import { handleUnknownError } from "./UnknownError";
import {
    ValidationAppError,
    handleValidationAppError,
} from "./ValidationAppError";

const errorHandler = (
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    console.log(err);

    if (err instanceof AppError) {
        return handleAppError(err, response);
    }

    if (err instanceof ValidationAppError) {
        return handleValidationAppError(err, response);
    }

    if (err instanceof MongoBulkWriteError) {
        return handleMongoError(err, response);
    }

    return handleUnknownError(err, response);
};

export { errorHandler };
