export interface PlayerInfoInterface {
    [key: string]: string | number;
    name?: string;
    level?: number; // 等级
    character?: string; // 职业
    
    gang?: string; // 帮会
    country?: string; // 国家

    // 装备
    arms?: string;
    arms_num?: number;
    arms_property?: EquipmentPropertyInterface;

    head?: string;
    head_num?: number;
    head_property?: EquipmentPropertyInterface;

    cloth?: string;
    cloth_num?: number;
    cloth_property?: EquipmentPropertyInterface;

    pants?: string;
    pants_num?: number;
    pants_property?: EquipmentPropertyInterface;

    shoes?: string;
    shoes_num?: number;
    shoes_property?: EquipmentPropertyInterface;

    // 首饰
    necklace?: string;
    necklace_num?: number;
    necklace_property?: EquipmentPropertyInterface;

    pendant?: string;
    pendant_num?: number;
    pendant_property?: EquipmentPropertyInterface;

    ring1?: string;
    ring1_num?: number;
    ring1_property?: EquipmentPropertyInterface;

    ring2?: string;
    ring2_num?: number;
    ring2_property?: EquipmentPropertyInterface;
}

export interface EquipmentPropertyInterface {
    [key: string]: string | number;
    hp?: number;
    hpPercent?: number;

    physicalDamage?: number;
    physicalDamagePercent?: number;

    spellDamage?: number;
    spellDamagePercent?: number;

    physicalDefense?: number;
    spellDefense?: number;

    critPercent?: number;
    critBoostNum?: number;

    physicalReductionPercent?: number;
    spellReductionPercent?: number;

    physicalReboundPercent?: number;
    spellReboundPercent?: number;

    finalDamageBoostPercent?: number;
}