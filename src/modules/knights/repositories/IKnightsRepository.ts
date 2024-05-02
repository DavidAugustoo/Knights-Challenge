import { ICreateKnightDTO } from "../dtos/ICreateKnightDTO";
import { IUpdateKnightDTO } from "../dtos/IUpdateKnightDTO";
import { Knight } from "../infra/typeorm/entities/Knight";

interface IKnightsRepository {
    create(data: ICreateKnightDTO): Promise<Knight>;
    list(isDead: boolean): Promise<Knight[]>;
    findById(id: string): Promise<Knight>;
    delete(id: string): Promise<Knight | undefined>;
    update(id: string, data: IUpdateKnightDTO): Promise<Knight | undefined>;
}

export { IKnightsRepository };
