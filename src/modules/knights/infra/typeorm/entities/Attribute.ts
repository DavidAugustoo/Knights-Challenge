import { IsNumber } from "class-validator";
import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn } from "typeorm";

import { shouldBeNumber } from "@shared/validator/validatorHelpers";

@Entity()
export class Attribute {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    @IsNumber({}, { message: shouldBeNumber("strength") })
    strength: number = 0;

    @Column()
    @IsNumber({}, { message: shouldBeNumber("dexterity") })
    dexterity: number = 0;

    @Column()
    @IsNumber({}, { message: shouldBeNumber("constitution") })
    constitution: number = 0;

    @Column()
    @IsNumber({}, { message: shouldBeNumber("intelligence") })
    intelligence: number = 0;

    @Column()
    @IsNumber({}, { message: shouldBeNumber("wisdom") })
    wisdom: number = 0;

    @Column()
    @IsNumber({}, { message: shouldBeNumber("charisma") })
    charisma: number = 0;
}
