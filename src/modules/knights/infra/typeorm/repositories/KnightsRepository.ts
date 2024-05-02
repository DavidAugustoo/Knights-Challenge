import { ICreateKnightDTO } from "@modules/knights/dtos/ICreateKnightDTO";
import { IUpdateKnightDTO } from "@modules/knights/dtos/IUpdateKnightDTO";
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

    listAll(): Promise<Knight[]> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<Knight> {
        const knight = this.repository.findOneBy({ _id: new ObjectId(id) });

        return knight;
    }

    async create(data: ICreateKnightDTO): Promise<Knight> {
        const knight = this.repository.create(data);

        await this.repository.save(data);

        return knight;
    }

    async list(isDead: boolean = false): Promise<Knight[]> {
        const filter = { isDead };
        return this.repository.find(filter);
    }

    async delete(id: string): Promise<Knight | undefined> {
        const knight = await this.repository.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { isDead: true } },
            { returnDocument: "after" },
        );

        return knight.value;
    }

    async update(id: string, data: Partial<IUpdateKnightDTO>): Promise<Knight> {
        const knight = await this.repository.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: data },
            { returnDocument: "after" },
        );

        return knight.value;
    }
}

export { KnightsRepository };
