import { Response } from "express";

export function handleUnknownError(err: Error, response: Response) {
    return response.status(500).json({
        message: `Internal server error - ${err.message}`,
    });
}
