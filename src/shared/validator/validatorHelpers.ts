export function required(fieldName: string): string {
    return `${fieldName} é obrigatório`;
}

export function notEmpty(fieldName: string): string {
    return `${fieldName} não pode estar vazio`;
}

export function shouldBeString(fieldName: string): string {
    return `${fieldName} deve ser uma string`;
}

export function shouldBeBoolean(fieldName: string): string {
    return `${fieldName} deve ser um boolean`;
}

export function shouldBeNumber(fieldName: string): string {
    return `${fieldName} deve ser um número`;
}

export function shouldBeValidDate(fieldName: string): string {
    return `${fieldName} deve ser uma data válida`;
}

export function shouldBeArray(fieldName: string): string {
    return `${fieldName} deve ser um array`;
}

export function arrayMinSize(fieldName: string, minSize: number): string {
    return `${fieldName} deve ter no mínimo ${minSize} itens`;
}
