import { schema } from "@modules/knights/validator/yup/schema/CreateKnightControllerSchema";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/infra/http/errors/AppError";
import { validateSchemaKeys } from "@shared/validator/yup/validateSchemaKeys";

import { CreateKnightUseCase } from "./CreateKnightUseCase";

class CreateKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        await schema.validate(request.body, { abortEarly: false });

        const extraKeys = validateSchemaKeys(request.body, schema);

        if (extraKeys.length > 0) {
            throw new AppError(
                "Formato inválido, remova ou atualize as propriedades se necessário.",
                400,
            );
        }

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
            isDead: false,
        });

        return response.status(201).json(knight);
    }
}

export { CreateKnightController };
