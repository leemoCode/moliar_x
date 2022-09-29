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
      <div v-for="item in equipmentTypeList">
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
import { defineComponent } from 'vue';
import UserInfoCreateEquipment from './UserInfoCreateEquipment.vue';

import { useGameData } from '../../core/useGameData';

export default defineComponent({
  name: 'UserInfoCreateForm',
  components: {
    UserInfoCreateEquipment,
  },
  setup() {
    const { createData, equipmentTypeList, baseInfoList } = useGameData();

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
