export const calculateModifier = (attributeValue) => {
    if (attributeValue <= 8) return -2;
    if (attributeValue <= 10) return -1;
    if (attributeValue <= 12) return 0;
    if (attributeValue <= 15) return 1;
    if (attributeValue <= 18) return 2;
    return 3; // Se o valor estiver acima de 18, retorna 3 por padrão
};
