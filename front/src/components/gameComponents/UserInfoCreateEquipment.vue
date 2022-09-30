<template>
  <h4>属性</h4>
  <div v-for="item in equipmentPropertyList">
    {{ item.name }}: <el-input v-model="data[item.key]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGameData } from '../../core/useGameData';

export default defineComponent({
  name: 'UserInfoCreateForm',
  props: {
    data: {
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
.el-input {
  height: 30px;
  font-size: 20px;
}
</style>
