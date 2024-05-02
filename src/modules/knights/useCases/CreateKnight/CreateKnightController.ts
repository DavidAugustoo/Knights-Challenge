import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateKnightUseCase } from "./CreateKnightUseCase";

class CreateKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, nickname, birthday, attributes, keyAttribute, weapons } =
            request.body;

        const createKnightUseCase = container.resolve(CreateKnightUseCase);

        const knight = await createKnightUseCase.execute({
            name,
            nickname,
            birthday,
            attributes,
            keyAttribute,
            weapons,
        });

        return response.status(201).json(knight);
    }
}

export { CreateKnightController };
