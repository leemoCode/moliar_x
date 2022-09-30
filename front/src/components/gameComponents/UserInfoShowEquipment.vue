<template>
  <div class="equipment_name">{{ name }} + {{ num }}</div>
  <div v-for="item in equipmentPropertyList">
    <div v-if="property[item.key]">
      <span class="equipment_property_title">属性: </span>
      <span class="equipment_property_content">
        {{ item.name }}提高 {{ property[item.key]
        }}{{ resolvePercentNum(item.name) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGameData } from '../../core/useGameData';

export default defineComponent({
  name: 'UserInfoShowEquipment',
  props: {
    name: {
      type: String,
      default: '',
    },
    num: {
      type: String,
      default: '',
    },
    property: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  setup() {
    const { equipmentPropertyList } = useGameData();

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
      return '点';
    };

    return {
      equipmentPropertyList,
      resolvePercentNum,
    };
  },
});
</script>
<style scoped>
.equipment_property_title {
  font-size: 17px;
  color: #7e7e7f;
}

.equipment_name {
  font-size: 20px;
}

.equipment_property_content {
  font-size: 17px;
}
</style>
