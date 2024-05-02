import { ICreateKnightDTO } from "../dtos/ICreateKnightDTO";
import { Knight } from "../infra/typeorm/entities/Knight";

interface IKnightsRepository {
    create(data: ICreateKnightDTO): Promise<Knight>;
    list(): Promise<Knight[]>;
}

export { IKnightsRepository };
