/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { Knight } from "@modules/knights/infra/typeorm/entities/Knight";
import { IKnightsRepository } from "@modules/knights/repositories/IKnightsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/infra/http/errors/AppError";

interface IRequest {
    id: string;
    data: {
        nickname: string;
    };
}

@injectable()
class UpdateKnightUseCase {
    constructor(
        @inject("KnightsRepository")
        private knightsRepository: IKnightsRepository,
    ) {}

    async execute({ id, data }: IRequest): Promise<Knight> {
        const knight = await this.knightsRepository.update(id, data);

        if (!knight) {
            throw new AppError("Herói não encontrado", 404);
        }

        return knight;
    }
}

export { UpdateKnightUseCase };
