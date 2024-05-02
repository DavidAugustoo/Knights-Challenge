/* eslint-disable no-underscore-dangle */
import { Knight } from "@modules/knights/infra/typeorm/entities/Knight";
import { IKnightsRepository } from "@modules/knights/repositories/IKnightsRepository";
import { calculateAttack } from "@utils/calculateAttack";
import { calculateExperience } from "@utils/calculateExperience";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/infra/http/errors/AppError";

interface IRequest {
    id: string;
}

@injectable()
class ListSpecificKnightUseCase {
    constructor(
        @inject("KnightsRepository")
        private knightsRepository: IKnightsRepository,
    ) {}

    async execute({ id }: IRequest): Promise<Knight> {
        const knight = await this.knightsRepository.findById(id);

        if (!knight) {
            throw new AppError("Herói não encontrado", 404);
        }

        const attack = calculateAttack(knight);
        const exp = calculateExperience(knight.birthday);

        const knightUpdated = { ...knight, attack, exp };

        return knightUpdated;
    }
}

export { ListSpecificKnightUseCase };
