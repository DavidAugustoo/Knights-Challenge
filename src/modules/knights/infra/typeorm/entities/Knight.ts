import {
    IsDefined,
    IsNotEmpty,
    IsString,
    IsArray,
    ArrayMinSize,
    IsDateString,
} from "class-validator";
import { ObjectId } from "mongodb";
import { Column, Entity, Index, ObjectIdColumn } from "typeorm";

import {
    notEmpty,
    required,
    shouldBeArray,
    shouldBeString,
    shouldBeValidDate,
} from "@shared/validator/validatorHelpers";

import { Attribute } from "./Attribute";
import { Weapon } from "./Weapon";

@Entity()
export class Knight {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    @Index({ unique: true })
    @IsDefined({ message: required("name") })
    @IsNotEmpty({ message: notEmpty("name") })
    @IsString({ message: shouldBeString("name") })
    name: string;

    @Column()
    @Index({ unique: true })
    @IsDefined({ message: required("nickname") })
    @IsNotEmpty({ message: notEmpty("nickname") })
    @IsString({ message: shouldBeString("nickname") })
    nickname: string;

    @Column()
    @IsDefined({ message: required("birthday") })
    @IsNotEmpty({ message: notEmpty("birthday") })
    @IsDateString({}, { message: shouldBeValidDate("birthday") })
    birthday: Date;

    @Column()
    @IsDefined({ message: required("attributes") })
    @IsNotEmpty({ message: notEmpty("attributes") })
    attributes: Attribute;

    @Column()
    @IsDefined({ message: required("keyAttribute") })
    @IsNotEmpty({ message: notEmpty("keyAttribute") })
    @IsString({ message: shouldBeString("keyAttribute") })
    keyAttribute: string;

    @Column()
    @IsDefined({ message: required("weapons") })
    @IsArray({ message: shouldBeArray("weapons") })
    @ArrayMinSize(1)
    weapons: Weapon[];

    @Column({ default: false })
    isDead: boolean;
}
