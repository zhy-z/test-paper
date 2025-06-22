<script setup>
import { RouterView } from 'vue-router'
import TheMainNav from '@/components/TheMainNav.vue'
import TheSubNav from '@/components/TheSubNav.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <TheMainNav />
    <TheSubNav />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
  body {
    background-color: #f3f4f6;
}
</style>
