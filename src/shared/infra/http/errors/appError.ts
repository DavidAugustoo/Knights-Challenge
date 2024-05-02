import { Response } from "express";

export class AppError {
    public readonly message: string;

    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export function handleAppError(err: AppError, response: Response) {
    return response.status(err.statusCode).json({
        message: err.message,
    });
}
