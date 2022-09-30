<template>
  <div class="create_form">
    <h1>基本信息</h1>
    <el-card class="base_info">
      <div v-for="item in baseInfoList">
        {{ item.name }}:
        <el-input v-model="createData[item.key]" />
      </div>
    </el-card>

    <h2>装备</h2>
    <div class="equipment_info">
      <div v-for="item in equipmentTypeList.slice(0, 5)">
        <el-card class="equipment_item">
          <template #header>
            <h3>{{ item.name }}</h3>
          </template>

          <div>
            名称:
            <el-input v-model="createData[item.key]" />
            强化:
            <el-input v-model="createData[item.key + '_num']" />

            <UserInfoCreateEquipment
              :data="createData[item.key + '_property']"
            />
          </div>
        </el-card>
      </div>
    </div>

    <h2>首饰</h2>
    <div class="equipment_info">
      <div v-for="item in equipmentTypeList.slice(5, 9)">
        <el-card class="equipment_item">
          <template #header>
            <h3>{{ item.name }}</h3>
          </template>

          <div>
            名称:
            <el-input v-model="createData[item.key]" />
            强化:
            <el-input v-model="createData[item.key + '_num']" />

            <UserInfoCreateEquipment
              :data="createData[item.key + '_property']"
            />
          </div>
        </el-card>
      </div>
    </div>
  </div>

  <el-input
    :value="JSON.stringify(createData)"
    style="margin-top: 30px; width: 1800px; height: 1000px; font-size: 30px"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserInfoCreateEquipment from './UserInfoCreateEquipment.vue';

import { useGameData } from '../../core/useGameData';

export default defineComponent({
  name: 'UserInfoCreateForm',
  components: {
    UserInfoCreateEquipment,
  },
  setup() {
    const { equipmentTypeList, baseInfoList } = useGameData();

    const createData = ref({
      arms_property: {
        critPercent: '5',
        critBoostNum: '11',
        finalDamageBoostPercent: '6',
        physicalDamagePercent: '11',
        physicalDamage: '9776',
      },
      head_property: {
        physicalReductionPercent: '4',
        spellReductionPercent: '2',
        physicalDefense: '2200',
        spellDefense: '1700',
        hpPercent: '3',
      },
      cloth_property: {
        physicalReductionPercent: '2',
        spellReductionPercent: '3',
        hpPercent: '5',
        hp: '33500',
        physicalDefense: '2600',
      },
      pants_property: {
        physicalReductionPercent: '2',
        spellReductionPercent: '2',
        hpPercent: '3',
        spellDefense: '2000',
        hp: '42000',
      },
      shoes_property: {
        physicalReductionPercent: '1',
        spellReductionPercent: '3',
        hpPercent: '2',
        hp: '27890',
        spellDefense: '2600',
      },
      necklace_property: {
        hp: '15000',
        physicalDamage: '3500',
        finalDamageBoostPercent: '2',
        hpPercent: '2',
        physicalDamagePercent: '2',
      },
      pendant_property: {
        hp: '14972',
        physicalDamage: '2227',
        physicalDefense: '1765',
        critBoostNum: '9',
        critPercent: '3',
      },
      ring1_property: {
        hp: '13984',
        physicalDamage: '2987',
        physicalDamagePercent: '1',
        physicalDefense: '1666',
        finalDamageBoostPercent: '1',
      },
      ring2_property: {
        hp: '19888',
        physicalDamage: '1977',
        critPercent: '2',
        critBoostNum: '7',
        physicalReductionPercent: '2',
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
    });

    return {
      baseInfoList,
      createData,
      equipmentTypeList,
    };
  },
});
</script>
<style scoped>
.el-input {
  height: 50px;
  font-size: 28px;
}
.create_form {
  font-size: 28px;
}
.base_info {
  width: 320px;
}
.equipment_info {
  display: flex;
  width: 320px;
}

.equipment_item {
  width: 300px;
  margin-right: 20px;
}
</style>
