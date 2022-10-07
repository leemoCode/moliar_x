<template>
  <div class="equipment_name" :style="eqNameStyle">{{ name }} + {{ num }}</div>
  <div v-for="item in equipmentPropertyList">
    <div v-if="property[item.key]">
      <span class="equipment_property_title">属性: </span>
      <span
        class="equipment_property_content"
        :style="caculatePorpertyStyle(item.name, property[item.key])"
      >
        {{ item.name }}提高 {{ property[item.key] }}
        {{ resolvePercentNum(item.name) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { numberLiteralTypeAnnotation } from '@babel/types';
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
    type: {
      type: Number,
      default: 1, // 1 装备 0 首饰
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
        name.indexOf('天妒') !== -1 ||
        name.indexOf('天劫') !== -1
      ) {
        color = '#CF270C';
      }

      if (
        name.indexOf('金晨曦') !== -1 ||
        name.indexOf('笑苍生') !== -1 ||
        name.indexOf('白云烟') !== -1 ||
        name.indexOf('靛沧海') !== -1
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

    const caculatePorpertyStyle = (name: string, value: number) => {
      // @ts-ignore
      const type = props.type;

      const style1 = {
        // 紫色
        color: '#EA24FA',
      };

      const style2 = {
        // 金色
        color: '#FAB924',
      };

      const style3 = {
        // 红色
        color: '#FF0000',
        'font-weight': 550,
      };

      const style4 = {
        // 粉红
        color: '#F967B9',
        'font-weight': 550,
      };

      const analysisData = (
        num1: number,
        num2: number,
        num3: number,
        value: number
      ) => {
        if (value < num1 * 0.8) {
          return style1;
        }

        if (value < num2 * 0.8 && value >= num1 * 0.8) {
          return style2;
        }

        if (value > num3 * 0.88 && value < num3) {
          return style3;
        }

        if (value >= num3) {
          return style4;
        }

        return {};
      };

      let res = {};

      if (type === 1) {
        // 装备
        switch (name) {
          case '生命最大值':
            res = analysisData(26000, 40000, 45000, value);
            break;
          case '生命值百分比':
            res = analysisData(2, 3, 4, value);
            break;
          case '物理攻击':
            res = analysisData(6000, 9000, 11000, value);
            break;
          case '物理攻击百分比':
            res = analysisData(2, 3, 4, value);
            break;
          case '法术攻击':
            res = analysisData(6000, 9000, 11000, value);
            break;
          case '法术攻击百分比':
            res = analysisData(2, 3, 4, value);
            break;
          case '物理防御':
            res = analysisData(3000, 5000, 6500, value);
            break;
          case '法术防御':
            res = analysisData(3000, 5000, 6500, value);
            break;
          case '暴击率':
            res = analysisData(0.5, 2, 3, value);
            break;
          case '暴击伤害':
            res = analysisData(7, 11, 15, value);
            break;
          case '物理伤害减免百分比':
            res = analysisData(0.5, 1, 2, value);
            break;
          case '法术伤害减免百分比':
            res = analysisData(0.5, 1, 2, value);
            break;
          case '物理伤害反弹':
            res = analysisData(1, 2, 3, value);
            break;
          case '法术伤害反弹':
            res = analysisData(1, 2, 3, value);
            break;
          case '最终伤害百分比':
            res = analysisData(0.2, 1.5, 3, value);
            break;
        }
      } else {
        // 首饰
        switch (name) {
          case '生命最大值':
            res = analysisData(15000, 22000, 35000, value);
            break;
          case '生命值百分比':
            res = analysisData(0.5, 1, 3, value);
            break;
          case '物理攻击':
            res = analysisData(2500, 4000, 7000, value);
            break;
          case '物理攻击百分比':
            res = analysisData(0.5, 1, 3, value);
            break;
          case '法术攻击':
            res = analysisData(2500, 4000, 7000, value);
            break;
          case '法术攻击百分比':
            res = analysisData(0.5, 1, 3, value);
            break;
          case '物理防御':
            res = analysisData(1000, 1500, 4000, value);
            break;
          case '法术防御':
            res = analysisData(1000, 1500, 4000, value);
            break;
          case '暴击率':
            res = analysisData(0.5, 1, 2, value);
            break;
          case '暴击伤害':
            res = analysisData(3, 5, 12, value);
            break;
          case '物理伤害减免百分比':
            res = analysisData(0.2, 0.5, 1.3, value);
            break;
          case '法术伤害减免百分比':
            res = analysisData(0.2, 0.5, 1.3, value);
            break;
          case '物理伤害反弹':
            res = analysisData(0.5, 1, 2, value);
            break;
          case '法术伤害反弹':
            res = analysisData(0.5, 1, 2, value);
            break;
          case '最终伤害百分比':
            res = analysisData(0.2, 0.5, 2, value);
            break;
        }
      }

      return res;
    };
    return {
      equipmentPropertyList,
      resolvePercentNum,
      caculatePorpertyStyle,
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
  color: #6474FB;
}
</style>
