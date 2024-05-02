import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListKnightUseCase } from "./ListKnightUseCase";

class ListKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createKnightUseCase = container.resolve(ListKnightUseCase);

        const knightList = await createKnightUseCase.execute();

        return response.status(201).json(knightList);
    }
}

export { ListKnightController };
