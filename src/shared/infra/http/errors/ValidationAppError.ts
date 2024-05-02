import { ValidationError } from "class-validator";
import { Response } from "express";

export class ValidationAppError {
    public readonly errors: ValidationError[];

    public readonly statusCode: number;

    constructor(errors: ValidationError[], statusCode = 400) {
        this.errors = errors;
        this.statusCode = statusCode;
    }
}

export function handleValidationAppError(
    err: ValidationAppError,
    response: Response,
) {
    return response.status(err.statusCode).json({
        message: err.errors
            .map((error) => Object.values(error.constraints))
            .flat(),
    });
}
