<template>
  <el-tabs type="border-card" class="app_page">
    <el-tab-pane label="构建角色数据">
      <UserInfoCreateForm />
    </el-tab-pane>
    <el-tab-pane label="查看角色数据">
      <UserInfoShowCard />
    </el-tab-pane>
    <el-tab-pane label="查看基础属性">
      <CharacterBasicProperty />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfoCreateForm from './components/gameComponents/UserInfoCreateForm.vue';
import UserInfoShowCard from './components/gameComponents/UserInfoShowCard.vue';
import CharacterBasicProperty from './components/gameComponents/CharacterBasicProperty.vue';

export default defineComponent({
  name: 'App',
  components: {
    UserInfoCreateForm,
    UserInfoShowCard,
    CharacterBasicProperty,
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
