import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListKnightUseCase } from "./ListKnightUseCase";

class ListKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { filter } = request.query;

        const createKnightUseCase = container.resolve(ListKnightUseCase);

        const knightList = await createKnightUseCase.execute({
            filter: filter as string,
        });

        return response.status(201).json(knightList);
    }
}

export { ListKnightController };
