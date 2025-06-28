<script setup>
import { RouterView } from 'vue-router'
import TheMainNav from '@/components/TheMainNav.vue'
import TheSubNav from '@/components/TheSubNav.vue'
import TheFooter from '@/components/TheFooter.vue'
import { isMobileMenuOpen } from '@/store/ui.js'
import MobileSidebar from '@/components/MobileSidebar.vue'
import { useStore } from '@nanostores/vue'

const $isMobileMenuOpen = useStore(isMobileMenuOpen)
</script>

<template>
  <div id="app" class="bg-gray-100 min-h-screen overflow-x-hidden">
    <MobileSidebar v-if="$isMobileMenuOpen" />
    <TheMainNav />
    <TheSubNav />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style>
body {
  background-color: #f3f4f6;
  overflow-x: hidden;
  position: relative;
  width: 100%;
}

html {
  overflow-x: hidden;
}
@media (max-width: 640px) {
  .overflow-x-auto::-webkit-scrollbar {
    height: 3px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-track {
    background-color: #e5e7eb;
    border-radius: 9999px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-thumb {
    background-color: #4ade80;
    border-radius: 9999px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background-color: #22c55e;
  }
}

@media (min-width: 640px) {
  .overflow-x-auto::-webkit-scrollbar {
    height: 4px;
  }
}

@media (min-width: 1024px) {
  .overflow-x-auto::-webkit-scrollbar {
    height: 2px;
  }
  .overflow-x-auto::-webkit-scrollbar-thumb {
    background-color: #d1d5db;
  }
}
</style>
