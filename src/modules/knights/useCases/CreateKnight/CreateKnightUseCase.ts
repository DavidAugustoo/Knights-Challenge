/* eslint-disable no-underscore-dangle */
import { ICreateKnightDTO } from "@modules/knights/dtos/ICreateKnightDTO";
import { Attribute } from "@modules/knights/infra/typeorm/entities/Attribute";
import { Knight } from "@modules/knights/infra/typeorm/entities/Knight";
import { Weapon } from "@modules/knights/infra/typeorm/entities/Weapon";
import { IKnightsRepository } from "@modules/knights/repositories/IKnightsRepository";
import { validate } from "class-validator";
import { inject, injectable } from "tsyringe";

import { ValidationAppError } from "@shared/infra/http/errors/ValidationAppError";

interface IRequest extends ICreateKnightDTO {}

@injectable()
class CreateKnightUseCase {
    constructor(
        @inject("KnightsRepository")
        private knightsRepository: IKnightsRepository,
    ) {}

    async execute(data: IRequest): Promise<Knight> {
        const errors = [];

        const knightErrors = await validate(Object.assign(new Knight(), data));

        const attributeErrors = await validate(
            Object.assign(new Attribute(), data.attributes),
        );

        const weaponErrorsArray = await Promise.all(
            data.weapons.map((weaponData) =>
                validate(Object.assign(new Weapon(), weaponData)),
            ),
        );
        const weaponErrors = weaponErrorsArray.flat();

        errors.push(...knightErrors, ...weaponErrors, ...attributeErrors);

        if (errors.length > 0) throw new ValidationAppError(errors, 400);

        const knight = await this.knightsRepository.create(data);

        return knight;
    }
}

export { CreateKnightUseCase };
