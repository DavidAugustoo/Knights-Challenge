/* eslint-disable import/no-unresolved */
import { schema } from "@modules/knights/validator/yup/schema/UpdateKnightControllerSchema";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/infra/http/errors/AppError";
import { validateSchemaKeys } from "@shared/validator/yup/validateSchemaKeys";

import { UpdateKnightUseCase } from "./UpdateKnightUseCase";

class UpdateKnightController {
    async handle(request: Request, response: Response): Promise<Response> {
        await schema.validate(request.body, { abortEarly: false });

        const extraKeys = validateSchemaKeys(request.body, schema);

        if (extraKeys.length > 0) {
            throw new AppError(
                "Apenas a alteração do nickname é permitida. Por favor, remova ou atualize outras propriedades se necessário.",
                400,
            );
        }

        const { nickname } = request.body;
        const { id } = request.params;

        const updateKnightUseCase = container.resolve(UpdateKnightUseCase);

        const knight = await updateKnightUseCase.execute({
            id,
            data: { nickname },
        });

        return response.status(201).json(knight);
    }
}

export { UpdateKnightController };
