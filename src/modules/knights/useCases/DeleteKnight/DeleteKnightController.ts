/* eslint-disable import/no-unresolved */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteKnightUseCase } from "./DeleteKnightUseCase";

class DeleteKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteKnightUseCase = container.resolve(DeleteKnightUseCase);

        const knight = await deleteKnightUseCase.execute({ id });

        return response.status(201).json(knight);
    }
}

export { DeleteKnightController };
