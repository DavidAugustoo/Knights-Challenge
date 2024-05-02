/* eslint-disable consistent-return */

import { Response } from "express";
import * as Yup from "yup";

export function handleYupError(err: Yup.ValidationError, response: Response) {
    const message = err.inner.map((error) => {
        return error.message;
    });
    return response.status(400).json({ message });
}
