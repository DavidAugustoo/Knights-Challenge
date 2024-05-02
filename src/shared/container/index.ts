import { KnightsRepository } from "@modules/knights/infra/typeorm/repositories/KnightsRepository";
import { IKnightsRepository } from "@modules/knights/repositories/IKnightsRepository";
import { container } from "tsyringe";

container.registerSingleton<IKnightsRepository>(
    "KnightsRepository",
    KnightsRepository,
);
