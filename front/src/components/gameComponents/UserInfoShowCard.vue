<template>
  <el-card class="show_card">
    <h4>角色信息</h4>
    <el-card class="base_info_list">
      <div v-for="item in baseInfoList" class="base_info_item">
        {{ item.name }}: {{ testData[item.key] }}
      </div>
    </el-card>
    <el-card class="property_card">
      <h4>属性</h4>

      <div v-for="item in characterBasicPropertyList">
        <span class="property_name">{{ item.name }}: </span>
        <span class="property_num"
          >{{ totoalProperty[item.key] }}{{ resolvePercentNum(item.name) }}</span
        >
      </div>
    </el-card>
    <el-collapse>
      <el-collapse-item v-for="item in equipmentTypeList" :title="item.name">
        <UserInfoShowEquipment
          :name="testData[item.key]"
          :num="testData[item.key + '_num']"
          :property="testData[item.key + '_property']"
        />
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGameData } from '../../core/useGameData';
import UserInfoShowEquipment from './UserInfoShowEquipment.vue';

export default defineComponent({
  name: 'UserInfoShowCard',
  components: {
    UserInfoShowEquipment,
  },
  setup() {
    const testData: { [key: string]: any } = {
      arms_property: {
        hp: '5',
        physicalDamage: '1',
        spellDamage: '2',
        physicalDefense: '3',
      },
      head_property: {
        spellDamage: '2',
        spellDefense: '5',
        physicalDamage: '33',
        hpPercent: '6',
      },
      cloth_property: {
        hp: '2',
        physicalDamage: '3',
        spellDamagePercent: '5',
        critPercent: '7',
      },
      pants_property: {
        physicalDefense: '5',
        spellDamage: '5',
        spellDamagePercent: '5',
        physicalDamagePercent: '5',
      },
      shoes_property: {
        physicalDamagePercent: '5',
        spellDamage: '5',
        spellDamagePercent: '5',
        physicalDefense: '5',
      },
      necklace_property: {
        hp: '2',
        spellDamage: '3',
        spellDefense: '3',
        physicalReductionPercent: '8',
      },
      pendant_property: {
        physicalDefense: '2',
        spellDamage: '2',
        physicalDamage: '2',
        hp: '2',
      },
      ring1_property: {
        physicalDamage: '2',
        hpPercent: '2',
        hp: '2',
        physicalDefense: '2',
      },
      ring2_property: {
        hp: '4',
        hpPercent: '4',
        physicalDamage: '4',
        physicalDamagePercent: '4',
      },
      name: '天无言',
      level: '70',
      character: '墨者',
      gang: '彼岸',
      country: '晋',
      arms: '长枪',
      arms_num: '10',
      head: '墨者帽',
      head_num: '10',
      cloth: '墨者衣',
      cloth_num: '2',
      pants: '墨库',
      pants_num: '6',
      shoes: '墨鞋',
      shoes_num: '7',
      necklace: '链',
      necklace_num: '9',
      pendant: '坠',
      pendant_num: '1',
      ring1: '戒1',
      ring2: '戒2',
      ring1_num: '4',
      ring2_num: '4',
    };

    const {
      equipmentTypeList,
      baseInfoList,
      characterBasicPropertyList,
      caculateTotalProperty,
    } = useGameData();

    const resolvePercentNum = (key: string) => {
      if (
        key.indexOf('暴击') !== -1 ||
        key.indexOf('减免') !== -1 ||
        key.indexOf('反弹') !== -1 ||
        key.indexOf('增强') !== -1
      ) {
        return '%';
      }
      return '';
    };

    const totoalProperty = caculateTotalProperty(testData);

    return {
      testData,

      equipmentTypeList,
      baseInfoList,
      characterBasicPropertyList,

      resolvePercentNum,

      totoalProperty,
    };
  },
});
</script>
<style scoped>
.show_card {
  width: 55%;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  font-size: 24px;

  margin: 30px;
}

.base_info_list {
  width: 300px;
  margin-bottom: 30px;
}

.base_info_item {
  font-size: 18px;
  color: #7e7e7f;
  margin-bottom: 4px;
}

.property_card {
  position: absolute;
  right: 10%;
  top: 7%;
  width: 300px;
  height: 420px;

  padding: 15px;

  font-size: 18px;
  line-height: 24px;
}

.property_name {
  color: #7e7e7f;
}
.property_num {
  color: #6e6ea8;
}
</style>
