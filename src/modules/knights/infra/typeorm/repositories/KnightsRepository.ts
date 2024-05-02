import { ICreateKnightDTO } from "@modules/knights/dtos/ICreateKnightDTO";
import { IKnightsRepository } from "@modules/knights/repositories/IKnightsRepository";
import { ObjectId } from "mongodb";
import { MongoRepository } from "typeorm";

import { dataSource } from "@shared/infra/typeorm";

import { Knight } from "../entities/Knight";

class KnightsRepository implements IKnightsRepository {
    private repository: MongoRepository<Knight>;

    constructor() {
        this.repository = dataSource.manager.getMongoRepository(Knight);
    }

    async create(data: ICreateKnightDTO): Promise<Knight> {
        const knight = this.repository.create(data);

        await this.repository.save(data);

        return knight;
    }

    async list(): Promise<Knight[]> {
        return this.repository.find();
    }

    async delete(id: string): Promise<Knight | undefined> {
        const knight = await this.repository.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { isDead: true } },
            { returnDocument: "after" },
        );

        return knight.value;
    }
}

export { KnightsRepository };
