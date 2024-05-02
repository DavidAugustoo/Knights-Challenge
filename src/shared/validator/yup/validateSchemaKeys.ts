import * as Yup from "yup";

type SchemaType<T> = Yup.ObjectSchema<T>;

export function validateSchemaKeys<T>(
    object: Record<string, unknown>,
    schema: SchemaType<T>,
): string[] {
    const schemaKeys = Object.keys(schema.describe().fields);
    const objectKeys = Object.keys(object);

    const extraKeys = objectKeys.filter((key) => {
        const value = object[key];
        return value !== undefined && !schemaKeys.includes(key);
    });

    return extraKeys;
}
