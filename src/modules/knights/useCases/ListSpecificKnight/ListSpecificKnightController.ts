/* eslint-disable import/no-unresolved */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificKnightUseCase } from "./ListSpecificKnightUseCase";

class ListSpecificKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listSpecificKnightUseCase = container.resolve(
            ListSpecificKnightUseCase,
        );

        const knight = await listSpecificKnightUseCase.execute({ id });

        return response.status(201).json(knight);
    }
}

export { ListSpecificKnightController };
