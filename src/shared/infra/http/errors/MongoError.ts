/* eslint-disable consistent-return */

import { Response } from "express";
import { MongoBulkWriteError } from "mongodb";

export function handleMongoError(err: MongoBulkWriteError, response: Response) {
    if (err.code === 11000 && err.errmsg.includes("duplicate key error")) {
        return response.status(409).json({
            message: "Já existe um registro com esses dados.",
        });
    }
}