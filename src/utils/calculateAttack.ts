import { Knight } from "@modules/knights/infra/typeorm/entities/Knight";

import { calculateModifier } from "./calculateModifier";

export const calculateAttack = ({ keyAttribute, weapons }: Knight) => {
    const modKeyAttr = calculateModifier(keyAttribute);

    const equippedWeapon = weapons.find((weapon) => weapon.equipped);

    let attack = 10;

    if (equippedWeapon) {
        attack += equippedWeapon.mod;
    }

    attack += modKeyAttr;

    return attack;
};
