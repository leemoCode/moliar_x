import { ref, Ref } from 'vue';
import {
  PlayerInfoInterface,
  EquipmentPropertyInterface,
} from '../type/dataDesign';

const createData = ref({
  arms_property: {} as EquipmentPropertyInterface,
  head_property: {} as EquipmentPropertyInterface,
  cloth_property: {} as EquipmentPropertyInterface,
  pants_property: {} as EquipmentPropertyInterface,
  shoes_property: {} as EquipmentPropertyInterface,
  necklace_property: {} as EquipmentPropertyInterface,
  pendant_property: {} as EquipmentPropertyInterface,
  ring1_property: {} as EquipmentPropertyInterface,
  ring2_property: {} as EquipmentPropertyInterface,
} as PlayerInfoInterface);

interface UseGameDataInterface {
  createData: Ref<PlayerInfoInterface>;
  equipmentTypeList: { [key: string]: string }[];
  baseInfoList: { [key: string]: string }[];
  equipmentPropertyList: { [key: string]: string }[];
  characterBasicPropertyList: { [key: string]: string }[];
  characterBasicPropertyData: { [key: string]: string | number }[];
  equipmentData: { [key: string]: string | number }[];

  refreshCombatPower: (curUserTotalPorperty: PlayerInfoInterface) => number;

  caculateTotalProperty: (data: PlayerInfoInterface) => {
    [key: string]: string | number;
  };
}

const characterBasicPropertyList = [
  {
    name: '职业',
    key: 'character',
  },
  {
    name: '生命值',
    key: 'hp',
  },
  {
    name: '物理攻击',
    key: 'physicalDamage',
  },
  {
    name: '法术攻击',
    key: 'spellDamage',
  },
  {
    name: '物理防御',
    key: 'physicalDefense',
  },
  {
    name: '法术防御',
    key: 'spellDefense',
  },
  {
    name: '暴击率',
    key: 'critPercent',
  },
  {
    name: '暴击伤害',
    key: 'critBoostNum',
  },
  {
    name: '物理伤害减免',
    key: 'physicalReductionPercent',
  },
  {
    name: '法术伤害减免',
    key: 'spellReductionPercent',
  },
  {
    name: '物理伤害反弹',
    key: 'physicalReboundPercent',
  },
  {
    name: '法术伤害反弹',
    key: 'spellReboundPercent',
  },
  {
    name: '最终伤害增强',
    key: 'finalDamageBoostPercent',
  },
];

const characterBasicPropertyData = [
  {
    character: '武士',
    hp: 100000,
    physicalDamage: 10000,
    spellDamage: 0,
    physicalDefense: 3000,
    spellDefense: 3000,
    critPercent: 15,
    critBoostNum: 150,
    physicalReductionPercent: 0,
    spellReductionPercent: 0,
    physicalReboundPercent: 0,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 5,
  },
  {
    character: '力士',
    hp: 167000,
    physicalDamage: 6000,
    spellDamage: 0,
    physicalDefense: 5000,
    spellDefense: 2200,
    critPercent: 10,
    critBoostNum: 120,
    physicalReductionPercent: 10,
    spellReductionPercent: 0,
    physicalReboundPercent: 5,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 0,
  },

  {
    character: '方士',
    hp: 79000,
    physicalDamage: 100,
    spellDamage: 14600,
    physicalDefense: 1200,
    spellDefense: 2500,
    critPercent: 12,
    critBoostNum: 160,
    physicalReductionPercent: 0,
    spellReductionPercent: 5,
    physicalReboundPercent: 0,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 10,
  },

  {
    character: '祭司',
    hp: 120000,
    physicalDamage: 100,
    spellDamage: 7300,
    physicalDefense: 2000,
    spellDefense: 2600,
    critPercent: 8,
    critBoostNum: 115,
    physicalReductionPercent: 5,
    spellReductionPercent: 5,
    physicalReboundPercent: 0,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 3,
  },

  {
    character: '射手',
    hp: 85000,
    physicalDamage: 12750,
    spellDamage: 4000,
    physicalDefense: 1100,
    spellDefense: 2400,
    critPercent: 9,
    critBoostNum: 140,
    physicalReductionPercent: 0,
    spellReductionPercent: 50,
    physicalReboundPercent: 0,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 13,
  },

  {
    character: '刺客',
    hp: 94000,
    physicalDamage: 9200,
    spellDamage: 500,
    physicalDefense: 2200,
    spellDefense: 2300,
    critPercent: 20,
    critBoostNum: 190,
    physicalReductionPercent: 0,
    spellReductionPercent: 0,
    physicalReboundPercent: 0,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 11,
  },

  {
    character: '墨者',
    hp: 115000,
    physicalDamage: 8500,
    spellDamage: 9100,
    physicalDefense: 4000,
    spellDefense: 5000,
    critPercent: 7,
    critBoostNum: 130,
    physicalReductionPercent: 10,
    spellReductionPercent: 15,
    physicalReboundPercent: 0,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 6,
  },

  {
    character: '幻师',
    hp: 103000,
    physicalDamage: 8000,
    spellDamage: 8200,
    physicalDefense: 2550,
    spellDefense: 2750,
    critPercent: 17,
    critBoostNum: 170,
    physicalReductionPercent: 3,
    spellReductionPercent: 3,
    physicalReboundPercent: 0,
    spellReboundPercent: 0,
    finalDamageBoostPercent: 8,
  },
];

const equipmentTypeList = [
  {
    name: '武器',
    key: 'arms',
  },
  {
    name: '帽子',
    key: 'head',
  },
  {
    name: '衣服',
    key: 'cloth',
  },
  {
    name: '裤子',
    key: 'pants',
  },
  {
    name: '鞋子',
    key: 'shoes',
  },
  {
    name: '项链',
    key: 'necklace',
  },
  {
    name: '腰坠',
    key: 'pendant',
  },
  {
    name: '戒指一',
    key: 'ring1',
  },
  {
    name: '戒指二',
    key: 'ring2',
  },
];

const equipmentPropertyList = [
  {
    name: '生命最大值',
    key: 'hp',
  },
  {
    name: '生命值百分比',
    key: 'hpPercent',
  },
  {
    name: '物理攻击',
    key: 'physicalDamage',
  },
  {
    name: '物理攻击百分比',
    key: 'physicalDamagePercent',
  },
  {
    name: '法术攻击',
    key: 'spellDamage',
  },
  {
    name: '法术攻击百分比',
    key: 'spellDamagePercent',
  },
  {
    name: '物理防御',
    key: 'physicalDefense',
  },
  {
    name: '法术防御',
    key: 'spellDefense',
  },
  {
    name: '暴击率',
    key: 'critPercent',
  },
  {
    name: '暴击伤害',
    key: 'critBoostNum',
  },
  {
    name: '物理伤害减免百分比',
    key: 'physicalReductionPercent',
  },
  {
    name: '法术伤害减免百分比',
    key: 'spellReductionPercent',
  },
  {
    name: '物理伤害反弹',
    key: 'physicalReboundPercent',
  },
  {
    name: '法术伤害反弹',
    key: 'spellReboundPercent',
  },
  {
    name: '最终伤害百分比',
    key: 'finalDamageBoostPercent',
  },
];

const equipmentData = [
  {
    character: '武士',
    c: '天怒·旷野孤疆',
    s: '金晨曦·泣血',
    q: '珠联璧合·紫龙寂地',
    y: '绝世教主·破阵',
    j: '',
  },
  {
    character: '刺客',
    c: '天怒·罪棘刺薇',
    s: '金晨曦·洞虚灵蛇',
    q: '珠联璧合·残月惊天',
    y: '绝世教主·九耀',
    j: '',
  },
  {
    character: '力士',
    c: '天劫·沉夜重雪',
    s: '笑苍生·四面边声',
    q: '珠联璧合·涅槃',
    y: '绝世教主·苍狼',
    j: '',
  },
  {
    character: '墨者',
    c: '天劫·威风吟',
    s: '笑苍生·岩鳞',
    q: '珠联璧合·周流星位',
    y: '绝世教主·无妄',
    j: '',
  },
  {
    character: '方士-奶',
    c: '天哭·月升海楼',
    s: '白云烟·风雪关河',
    q: '珠联璧合·兰亭香雪',
    y: '绝世教主·凤凰',
    j: '',
  },
  {
    character: '方士-输出',
    c: '天哭·璃光浮远',
    s: '白云烟·日月之昭',
    q: '珠联璧合·兰亭香雪',
    y: '绝世教主·凤凰',
    j: '',
  },
  {
    character: '祭司-奶',
    c: '天哭·众灵生息',
    s: '白云烟·烛幽',
    q: '珠联璧合·灵知',
    y: '绝世教主·重阳',
    j: '',
  },
  {
    character: '祭司-输出',
    c: '天哭·墨语沉香',
    s: '白云烟·昆山玉碎',
    q: '珠联璧合·灵知',
    y: '绝世教主·重阳',
    j: '',
  },
  {
    character: '射手',
    c: '天妒·苍冥游',
    s: '靛沧海·东河轻风',
    q: '珠联璧合·造化异轨',
    y: '绝世教主·鸿鹄',
    j: '',
  },
  {
    character: '幻师-奶',
    c: '天妒·玉叶瑶华',
    s: '靛沧海·求仁',
    q: '珠联璧合·青玉流',
    y: '绝世教主·天君',
    j: '',
  },
  {
    character: '幻师-输出',
    c: '天妒·天音非梦',
    s: '靛沧海·天下士人',
    q: '珠联璧合·青玉流',
    y: '绝世教主·天君',
    j: '',
  },
];

const baseInfoList = [
  {
    name: '名称',
    key: 'name',
  },
  {
    name: '等级',
    key: 'level',
  },
  {
    name: '职业',
    key: 'character',
  },
  {
    name: '帮会',
    key: 'gang',
  },
  {
    name: '国家',
    key: 'country',
  },
];

const getBasicProperty = (character: string) => {
  for (const item of characterBasicPropertyData) {
    if (item.character === character) {
      return item;
    }
  }
};

const ADDTION_1_5 = 0.04;
const ADDTION_6_10 = 0.08;

const ADDTION_LIST_OVER_10 = [
  0.1, // 11
  0.11, // 12
  0.13, // 13
  0.16, // 14
  0.2, // 15
  0.25, // 16
  0.31, // 17
  0.38, // 18
  0.46, // 19
  0.55, // 20
];

const getEquipmentProperty = (
  data: PlayerInfoInterface,
  propertyName: string
) => {
  let res = 0;

  for (const eqItem of equipmentTypeList) {
    const equipmentProperty = data[eqItem.key + '_property'];

    // 强化等级
    const strengthenNum = data[eqItem.key + '_num'] as number;

    let strengthenAddition = 1;

    // 0-10 强化计算
    strengthenAddition +=
      ADDTION_1_5 * (strengthenNum - 5 > 0 ? 5 : strengthenNum) +
      ADDTION_6_10 * (strengthenNum - 10 > 0 ? 5 : strengthenNum - 5);

    for (let i = 11; i <= 20; i++) {
      if (strengthenNum >= i) {
        strengthenAddition += ADDTION_LIST_OVER_10[i - 11];
      }
    }

    if (propertyName !== 'character') {
      res +=
        // @ts-ignore
        parseInt((equipmentProperty[propertyName] || 0) * strengthenAddition);
    }
  }

  return res || '';
};

const refreshCombatPower = (curUserTotalPorperty: PlayerInfoInterface) => {
  let res =
    parseInt(curUserTotalPorperty.hp as string) * 0.1 +
    parseInt(curUserTotalPorperty.physicalDamage as string) * 1 +
    parseInt(curUserTotalPorperty.spellDamage as string) * 0.9 +
    parseInt(curUserTotalPorperty.physicalDefense as string) * 3.3 +
    parseInt(curUserTotalPorperty.spellDefense as string) * 3.5 +
    parseInt(curUserTotalPorperty.critPercent as string) * 550 +
    parseInt(curUserTotalPorperty.critBoostNum as string) * 57 +
    parseInt(curUserTotalPorperty.physicalReductionPercent as string) * 8000 +
    parseInt(curUserTotalPorperty.spellReductionPercent as string) * 8300 +
    parseInt(curUserTotalPorperty.physicalReboundPercent as string) * 7700 +
    parseInt(curUserTotalPorperty.spellReboundPercent as string) * 8100 +
    parseInt(curUserTotalPorperty.finalDamageBoostPercent as string) * 9600;

  res = Math.round(res / 10);

  return res;
};

const caculateTotalProperty = (data: PlayerInfoInterface) => {
  // 单条属性 = 基础属性 + 装备属性 * 强化加成
  const character = data.character || '';

  // 基础属性
  const basicProperty = getBasicProperty(character);

  const res: PlayerInfoInterface = {};

  for (const item of characterBasicPropertyList) {
    // 装备加成
    const equipmentProperty = getEquipmentProperty(data, item.key);

    // @ts-ignore
    res[item.key] = basicProperty[item.key] + equipmentProperty;
  }

  console.log('curUserTotalPorperty', res, refreshCombatPower(res));

  return res;
};

export const useGameData: () => UseGameDataInterface = function () {
  return {
    createData,
    baseInfoList,
    equipmentPropertyList,
    equipmentTypeList,
    characterBasicPropertyList,
    characterBasicPropertyData,
    equipmentData,

    refreshCombatPower,
    caculateTotalProperty,
  };
};
