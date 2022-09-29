<template>
  <!-- <UserInfoCreateForm /> -->
  <!-- <UserInfoShowCard /> -->
  <CharacterBasicProperty />
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

<style lang="scss"></style>
