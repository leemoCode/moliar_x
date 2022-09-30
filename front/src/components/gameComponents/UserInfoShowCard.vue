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

      <!-- 战斗力: {{ combatPower }} -->
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
import { baseWS } from '../../core/userDataDB';

import UserInfoShowEquipment from './UserInfoShowEquipment.vue';

export default defineComponent({
  name: 'UserInfoShowCard',
  components: {
    UserInfoShowEquipment,
  },
  setup() {
    const testData: { [key: string]: any } = baseWS;

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

    // todo
    const combatPower = 0;

    return {
      testData,

      equipmentTypeList,
      baseInfoList,
      characterBasicPropertyList,

      resolvePercentNum,

      totoalProperty,
      combatPower,
    };
  },
});
</script>
<style scoped>
.show_card {
  width: 60%;

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
