/* eslint-disable no-underscore-dangle */
import { Knight } from "@modules/knights/infra/typeorm/entities/Knight";
import { IKnightsRepository } from "@modules/knights/repositories/IKnightsRepository";
import { calculateAttack } from "@utils/calculateAttack";
import { calculateExperience } from "@utils/calculateExperience";
import { inject, injectable } from "tsyringe";

@injectable()
class ListKnightUseCase {
    constructor(
        @inject("KnightsRepository")
        private knightsRepository: IKnightsRepository,
    ) {}

    async execute(): Promise<Knight[]> {
        const knightList = this.knightsRepository.list();

        const updatedKnightList = (await knightList).map((knight) => {
            const attack = calculateAttack(knight);
            const exp = calculateExperience(knight.birthday);

            return { ...knight, attack, exp };
        });

        return updatedKnightList;
    }
}

export { ListKnightUseCase };
