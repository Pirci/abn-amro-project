<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
</script>

<template>
  <div class="centered-content">
    <LandingPage />
  </div>
</template>

<style scoped>
.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
