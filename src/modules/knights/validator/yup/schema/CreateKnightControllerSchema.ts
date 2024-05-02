import * as Yup from "yup";

import {
    required,
    notEmpty,
    shouldBeString,
    shouldBeValidDate,
    shouldBeNumber,
    shouldBeBoolean,
} from "@shared/validator/validatorHelpers";

export const schema = Yup.object().shape({
    name: Yup.string()
        .required(required("Name"))
        .notOneOf([""], notEmpty("Name"))
        .matches(/^\s*\S.*$/, shouldBeString("Name")),
    nickname: Yup.string()
        .required(required("Nickname"))
        .notOneOf([""], notEmpty("Nickname"))
        .matches(/^\s*\S.*$/, shouldBeString("Nickname")),
    birthday: Yup.string()
        .required(required("Birthday"))
        .matches(/^\d{4}-\d{2}-\d{2}$/, shouldBeValidDate("Birthday")),
    attributes: Yup.object().shape({
        strength: Yup.number().typeError(shouldBeNumber("Strength")).integer(),
        dexterity: Yup.number()
            .typeError(shouldBeNumber("Dexterity"))
            .integer(),
        constitution: Yup.number()
            .typeError(shouldBeNumber("Constitution"))
            .integer(),
        intelligence: Yup.number()
            .typeError(shouldBeNumber("Intelligence"))
            .integer(),
        wisdom: Yup.number().typeError(shouldBeNumber("Wisdom")).integer(),
        charisma: Yup.number().typeError(shouldBeNumber("Charisma")).integer(),
    }),
    keyAttribute: Yup.string()
        .required(required("keyAttribute"))
        .notOneOf([""], notEmpty("keyAttribute"))
        .matches(/^\s*\S.*$/, shouldBeString("keyAttribute")),
    weapons: Yup.array()
        .required(required("Weapons"))
        .min(1, `Deve conter pelo menos 1 arma`)
        .of(
            Yup.object().shape({
                name: Yup.string()
                    .required(required("Name da arma"))
                    .notOneOf([""], notEmpty("Name da arma"))
                    .matches(/^\s*\S.*$/, shouldBeString("Name da arma")),
                mod: Yup.number()
                    .required(required("Mod"))
                    .typeError(shouldBeNumber("Mod"))
                    .positive("Mod deve ser um número positivo"),
                attr: Yup.string()
                    .required(required("Attr"))
                    .notOneOf([""], notEmpty("Attr"))
                    .matches(/^\s*\S.*$/, shouldBeString("Attr")),
                equipped: Yup.boolean()
                    .required(required("Equipped"))
                    .typeError(shouldBeBoolean("Equipped")),
            }),
        ),
});
