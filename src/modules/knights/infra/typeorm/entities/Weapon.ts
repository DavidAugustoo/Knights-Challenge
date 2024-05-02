// eslint-disable-next-line max-classes-per-file

import {
    IsBoolean,
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsString,
} from "class-validator";
import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn } from "typeorm";

import {
    notEmpty,
    required,
    shouldBeBoolean,
    shouldBeNumber,
    shouldBeString,
} from "@shared/validator/validatorHelpers";

@Entity()
export class Weapon {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    @IsDefined({ message: required("name da arma") })
    @IsNotEmpty({ message: notEmpty("name da arma") })
    @IsString({ message: shouldBeString("name da arma") })
    name: string;

    @Column()
    @IsDefined({ message: required("mod") })
    @IsNotEmpty({ message: notEmpty("mod") })
    @IsNumber({}, { message: shouldBeNumber("mod") })
    mod: number;

    @Column()
    @IsDefined({ message: required("attr") })
    @IsNotEmpty({ message: notEmpty("attr") })
    @IsString({ message: shouldBeString("attr") })
    attr: string;

    @Column()
    @IsDefined({ message: required("equipped") })
    @IsNotEmpty({ message: notEmpty("equipped") })
    @IsBoolean({ message: shouldBeBoolean("equipped") })
    equipped: boolean;
}
