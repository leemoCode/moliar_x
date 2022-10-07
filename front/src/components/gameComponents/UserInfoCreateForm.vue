<template>
  <div class="create_form">
    <el-button @click="add">新建</el-button>
    <el-button v-for="item in db" @click="update(item)">{{
      item.name
    }}</el-button>
    <h1>基本信息</h1>
    <el-form :inline="true">
      <el-form-item
        v-for="item in baseInfoList"
        :label="item.name"
        class="base_info"
      >
        <el-input v-model="createData[item.key]" placeholder="Approved by" />
      </el-form-item>
    </el-form>
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
    class="data_input"
    :value="JSON.stringify(createData)"
    style="margin-top: 30px; width: 300px; font-size: 16px"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
  <el-card class="property_card">
    <div v-for="item in characterBasicPropertyList">
      <span class="property_name">{{ item.name }}: </span>
      <span class="property_num">
        {{ totoalProperty[item.key] }}
        {{ resolvePercentNum(item.name) }}
      </span>
    </div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import UserInfoCreateEquipment from './UserInfoCreateEquipment.vue';

import { useGameData } from '../../core/useGameData';
import { db } from '../../core/userDataDB';

export default defineComponent({
  name: 'UserInfoCreateForm',
  components: {
    UserInfoCreateEquipment,
  },
  setup() {
    const {
      equipmentTypeList,
      baseInfoList,
      characterBasicPropertyList,
      caculateTotalProperty,
    } = useGameData();

    const demo = {
      arms_property: {},
      head_property: {},
      cloth_property: {},
      pants_property: {},
      shoes_property: {},
      necklace_property: {},
      pendant_property: {},
      ring1_property: {},
      ring2_property: {},
    };
    const createData = ref(demo);

    const add = () => {
      // @ts-ignore
      createData.value = demo;
    };

    const update = (data: any) => {
      createData.value = data;
    };

    const totoalProperty = computed(() => {
      // @ts-ignore
      if (!createData.value.name) {
        return {};
      }
      // @ts-ignore
      return caculateTotalProperty(createData.value);
    });

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

    return {
      baseInfoList,
      createData,
      equipmentTypeList,
      db,

      add,
      update,

      totoalProperty,
      characterBasicPropertyList,
      resolvePercentNum,
    };
  },
});
</script>
<style scoped>
.create_form {
  font-size: 18px;
}

.el-input {
  height: 30px;
  font-size: 20px;
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

.data_input {
  position: fixed;
  right: 5%;
  top: 3%;
}

.property_card {
  position: fixed;
  right: 22%;
  top: 5%;
  font-size: 12px;
}
</style>
