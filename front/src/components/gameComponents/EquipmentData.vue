<template>
  <div class="basic_property_list">
    <div>
      <el-table :data="dataShow" stripe style="width: 100%">
        <el-table-column
          v-for="item in list"
          :prop="item.key"
          :label="item.name"
          width="140"
        />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useGameData } from '../../core/useGameData';

export default defineComponent({
  name: 'EquipmentData',
  setup() {
    const { equipmentData } = useGameData();

    const list = [
      {
        key: 'character',
        name: '职业',
      },
      {
        key: 'c',
        name: '超武',
      },
      {
        key: 's',
        name: '圣武',
      },
      {
        key: 'q',
        name: '切糕',
      },
      {
        key: 'y',
        name: 'YY套',
      },
      {
        key: 'j',
        name: '精简',
      },
    ];

    const data = ref(JSON.stringify(equipmentData));
    const dataShow = computed(() => {
      return JSON.parse(data.value);
    });

    return {
      list,

      data,
      dataShow,
    };
  },
});
</script>
<style scoped></style>
