import { Knight } from "@modules/knights/infra/typeorm/entities/Knight";

import { calculateModifier } from "./calculateModifier";

export const calculateAttack = ({
    attributes,
    keyAttribute,
    weapons,
}: Knight) => {
    const modKeyAttr = calculateModifier(attributes[keyAttribute]);

    const averageMod =
        weapons.reduce(
            (acc, weapon) => acc + (weapon.equipped ? weapon.mod : 0),
            0,
        ) / Math.max(1, weapons.filter((weapon) => weapon.equipped).length);

    const attack = 10 + averageMod + modKeyAttr;

    return attack;
};
