import { ICreateKnightDTO } from "../dtos/ICreateKnightDTO";
import { Knight } from "../infra/typeorm/entities/Knight";

interface IKnightsRepository {
    create(data: ICreateKnightDTO): Promise<Knight>;
    list(isDead: boolean): Promise<Knight[]>;
    delete(id: string): Promise<Knight | undefined>;
}

export { IKnightsRepository };
