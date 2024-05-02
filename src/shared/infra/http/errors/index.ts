/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { MongoBulkWriteError, MongoServerError } from "mongodb";
import * as Yup from "yup";

import { AppError, handleAppError } from "./AppError";
import { handleMongoError } from "./MongoError";
import { handleUnknownError } from "./UnknownError";
import {
    ValidationAppError,
    handleValidationAppError,
} from "./ValidationAppError";
import { handleYupError } from "./YupError";

const errorHandler = (
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    if (err instanceof AppError) {
        return handleAppError(err, response);
    }

    if (err instanceof ValidationAppError) {
        return handleValidationAppError(err, response);
    }

    if (err instanceof MongoBulkWriteError || err instanceof MongoServerError) {
        return handleMongoError(err, response);
    }

    if (err instanceof Yup.ValidationError) {
        return handleYupError(err, response);
    }

    return handleUnknownError(err, response);
};

export { errorHandler };
