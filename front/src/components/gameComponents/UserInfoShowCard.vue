<template>
  <div class="demo-collapse">
    <el-collapse>
      <el-collapse-item v-for="dataShowItem in dataShowList">
        <template #title>
          {{ dataShowItem.name }}
        </template>
        <div class="user_card_item">
          <div class="left_box shadow_box">
            <div class="s_left_box shadow_box">
              <div v-for="item in baseInfoList" class="base_info_item">
                {{ item.name }}: {{ dataShowItem[item.key] || '无' }}
              </div>

              <el-divider />

              <div class="property_title">战斗力：</div>

              <div class="user_combatPower">
                {{ dataShowItem.combatPower }}
              </div>

              <el-divider />

              <div class="property_title">属性：</div>
              <div
                v-for="item in characterBasicPropertyList"
                class="property_item"
              >
                <span class="property_name">{{ item.name }}: </span>
                <span class="property_num">
                  {{ dataShowItem.totoalProperty[item.key] }}
                  {{ resolvePercentNum(item.name) }}
                </span>
              </div>
            </div>
            <div class="s_center_box">
              <div v-for="item in equipmentTypeList.slice(0, 5)">
                <UserInfoShowEquipment
                  :name="dataShowItem[item.key]"
                  :num="dataShowItem[item.key + '_num']"
                  :property="dataShowItem[item.key + '_property']"
                  :type="1"
                />
              </div>
            </div>
            <div class="s_right_box">
              <div v-for="item in equipmentTypeList.slice(5, 9)">
                <UserInfoShowEquipment
                  :name="dataShowItem[item.key]"
                  :num="dataShowItem[item.key + '_num']"
                  :property="dataShowItem[item.key + '_property']"
                  :type="0"
                />
              </div>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGameData } from '../../core/useGameData';
import { db } from '../../core/userDataDB';

import UserInfoShowEquipment from './UserInfoShowEquipment.vue';

export default defineComponent({
  name: 'UserInfoShowCard',
  components: {
    UserInfoShowEquipment,
  },
  setup() {
    const {
      equipmentTypeList,
      baseInfoList,
      characterBasicPropertyList,
      caculateTotalProperty,
      refreshCombatPower,
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

    const dataShowList = db;

    for (const item of dataShowList) {
      // @ts-ignore
      item.totoalProperty = caculateTotalProperty(
        item as { [key: string]: any }
      );
      // @ts-ignore
      item.combatPower = refreshCombatPower(item.totoalProperty);
    }

    return {
      dataShowList,

      equipmentTypeList,
      baseInfoList,
      characterBasicPropertyList,

      resolvePercentNum,
    };
  },
});
</script>
<style scoped>
.shadow_box {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  padding: 30px;
}
.user_card_item {
  display: flex;
}

.left_box {
  flex: 1;
  display: flex;

  margin-right: 30px;

  font-size: 16px;
}
.s_center_box {
  flex: 1;
  padding: 25px;
}

.s_left_box {
  width: 400px;
  margin-right: 40px;

  display: flex;
  flex-direction: column;
}

.s_right_box {
  flex: 1;
  padding: 25px;
}

.base_info_item {
  font-size: 14px;
  color: #828181;
}

.user_combatPower {
  color: #828181;
}
.property_title {
  margin-bottom: 17px;
  color: #737171;
}

.property_item {
  font-size: 14px;
  color: #828181;
}
</style>
