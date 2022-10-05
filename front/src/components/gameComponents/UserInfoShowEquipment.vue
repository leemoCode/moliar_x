<template>
  <div class="equipment_name" :style="eqNameStyle">{{ name }} + {{ num }}</div>
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
import { indexOf } from 'lodash';
import { computed, defineComponent } from 'vue';
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
  setup(props) {
    const { equipmentPropertyList } = useGameData();

    const eqNameStyle = computed(() => {
      let fontWeight = 500;
      // @ts-ignore
      const num = parseInt(props.num);
      if (num > 15) {
        fontWeight = 550;
      }

      let color = '#EA24FA';
      // @ts-ignore
      const name = props.name;

      if (
        name.indexOf('天怒') !== -1 ||
        name.indexOf('天哭') !== -1 ||
        name.indexOf('天妒') !== -1
      ) {
        color = '#FF9210';
      }

      if (
        name.indexOf('金晨曦') !== -1 ||
        name.indexOf('笑苍生') !== -1 ||
        name.indexOf('明镜台') !== -1
      ) {
        color = '#FAB924';
      }

      if (name.indexOf('珠联璧合') !== -1) {
        color = '#A61EB1';
      }

      return {
        'font-weight': fontWeight,
        color: color,
      };
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
      return '点';
    };

    return {
      equipmentPropertyList,
      resolvePercentNum,

      eqNameStyle,
    };
  },
});
</script>
<style scoped>
.equipment_property_title {
  font-size: 14px;
  color: #7e7e7f;
}

.equipment_name {
  font-size: 18px;
}

.equipment_property_content {
  font-size: 13px;
  color: #AF7AC5;
}
</style>
