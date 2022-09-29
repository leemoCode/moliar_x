<template>
  <div class="equipment_name">{{ name }} + {{ num }}</div>
  <div v-for="item in equipmentPropertyList">
    <div v-if="property[item.key]">
      <span class="equipment_property_title">属性: </span>
      <span class="equipment_property_content">
        {{ item.name }}: {{ property[item.key] }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useGameData } from '../../core/useGameData';

export default defineComponent({
  name: 'UserInfoShowEquipment',
  props: {
    name: {
      type: String,
      default: '',
    },
    num: {
      type: Number,
      default: 0,
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

    return {
      equipmentPropertyList,
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
