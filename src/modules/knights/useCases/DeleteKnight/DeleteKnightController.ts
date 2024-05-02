/* eslint-disable import/no-unresolved */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/infra/http/errors/AppError";

import { DeleteKnightUseCase } from "./DeleteKnightUseCase";

class DeleteKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteKnightUseCase = container.resolve(DeleteKnightUseCase);

        const knight = await deleteKnightUseCase.execute({ id });

        if (!knight) {
            throw new AppError("Herói não encontrado", 404);
        }

        return response.status(201).json(knight);
    }
}

export { DeleteKnightController };
