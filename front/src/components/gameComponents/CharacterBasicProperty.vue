<template>
  <div class="basic_property_list">
    <div>
      <el-table :data="dataShow" stripe style="width: 100%">
        <el-table-column
          v-for="item in characterBasicPropertyList"
          :prop="item.key"
          :label="item.name"
          width="120"
        />
      </el-table>
    </div>

    <!-- <el-input
      v-model="data"
      style="margin-top: 30px; font-size: 27px"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    /> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useGameData } from '../../core/useGameData';

export default defineComponent({
  name: 'CharacterBasicProperty',
  setup() {
    const { characterBasicPropertyData, characterBasicPropertyList } =
      useGameData();

    const data = ref(JSON.stringify(characterBasicPropertyData));
    const dataShow = computed(() => {
      return JSON.parse(data.value);
    });

    return {
      characterBasicPropertyList,

      data,
      dataShow,
    };
  },
});
</script>
<style scoped>
</style>
