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
          >{{ totoalProperty[item.key]
          }}{{ resolvePercentNum(item.name) }}</span
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
        critPercent: '2',
        critBoostNum: '10',
        finalDamageBoostPercent: '3',
        physicalDamagePercent: '3.2',
        physicalDamage: '9776',
      },
      head_property: {
        physicalReductionPercent: '1',
        spellReductionPercent: '1',
        physicalDefense: '3500',
        spellDefense: '3000',
        hpPercent: '3',
      },
      cloth_property: {
        physicalReductionPercent: '1.2',
        spellReductionPercent: '1.1',
        hpPercent: '2',
        hp: '37500',
        physicalDefense: '3000',
      },
      pants_property: {
        physicalReductionPercent: '1.3',
        spellReductionPercent: '0.8',
        hpPercent: '3',
        spellDefense: '3300',
        hp: '42000',
      },
      shoes_property: {
        physicalReductionPercent: '1',
        spellReductionPercent: '1',
        hpPercent: '2',
        hp: '27890',
        spellDefense: '2600',
      },
      necklace_property: {
        hp: '15000',
        physicalDamage: '3500',
        finalDamageBoostPercent: '0.6',
        hpPercent: '2',
        physicalDamagePercent: '1',
      },
      pendant_property: {
        hp: '14972',
        physicalDamage: '2800',
        physicalDefense: '1600',
        critBoostNum: '6',
        critPercent: '0.5',
      },
      ring1_property: {
        hp: '13984',
        physicalDamage: '2987',
        physicalDamagePercent: '1',
        physicalDefense: '1400',
        finalDamageBoostPercent: '0.5',
      },
      ring2_property: {
        hp: '19888',
        physicalDamage: '3077',
        critPercent: '0.8',
        critBoostNum: '7',
        physicalReductionPercent: '0.5',
      },
      name: '天无言',
      level: '70',
      character: '墨者',
      gang: '-名剑山庄-',
      country: '齐',
      arms: '笑苍生·摧城',
      arms_num: '17',
      head: '明镜台·望边战盔',
      head_num: '15',
      cloth: '明镜台·望边战甲',
      cloth_num: '15',
      pants: '明镜台·望边裳',
      shoes: '明镜台·望边战靴',
      pants_num: '15',
      shoes_num: '15',
      necklace: '皓灵链',
      pendant: '皓灵坠',
      ring1: '皓灵戒',
      ring2: '皓灵戒',
      necklace_num: '17',
      pendant_num: '18',
      ring1_num: '19',
      ring2_num: '20',
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
        key.indexOf('增强') !== -1 ||
        key.indexOf('百分比') !== -1
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
