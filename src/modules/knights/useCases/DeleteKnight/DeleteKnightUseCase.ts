/* eslint-disable no-underscore-dangle */
import { Knight } from "@modules/knights/infra/typeorm/entities/Knight";
import { IKnightsRepository } from "@modules/knights/repositories/IKnightsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/infra/http/errors/AppError";

interface IRequest {
    id: string;
}

@injectable()
class DeleteKnightUseCase {
    constructor(
        @inject("KnightsRepository")
        private knightsRepository: IKnightsRepository,
    ) {}

    async execute({ id }: IRequest): Promise<Knight | undefined> {
        const knight = await this.knightsRepository.delete(id);

        if (!knight) {
            throw new AppError("Herói não encontrado", 404);
        }

        return knight;
    }
}

export { DeleteKnightUseCase };
