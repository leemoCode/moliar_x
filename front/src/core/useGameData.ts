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
}

// demo
const characterBasicPropertyData = [
  {
    character: '武士',
    hp: 100000,
    physicalDamage: 9000,
    spellDamage: 1000,
  }

]

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
    name: '生命最大值提升',
    key: 'hp',
  },
  {
    name: '生命值提升百分比',
    key: 'hpPercent',
  },
  {
    name: '物理攻击提升',
    key: 'physicalDamage',
  },
  {
    name: '物理攻击提升百分比',
    key: 'physicalDamagePercent',
  },
  {
    name: '法术攻击提升',
    key: 'spellDamage',
  },
  {
    name: '法术攻击提升百分比',
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
    name: '暴击率提升',
    key: 'critPercent',
  },
  {
    name: '暴击伤害提升',
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
    name: '最终伤害提升百分比',
    key: 'finalDamageBoostPercent',
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

export const useGameData: () => UseGameDataInterface = function () {
  return {
    createData,
    baseInfoList,
    equipmentPropertyList,
    equipmentTypeList,
  };
};
