import { Attribute } from "../infra/typeorm/entities/Attribute";
import { Weapon } from "../infra/typeorm/entities/Weapon";

interface ICreateKnightDTO {
    name: string;
    nickname: string;
    birthday: Date;
    attributes: Attribute;
    keyAttribute: string;
    weapons: Weapon[];
    isDead?: boolean;
}

export { ICreateKnightDTO };
