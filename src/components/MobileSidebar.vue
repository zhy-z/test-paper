<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="closeMenu">
    <div class="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6" @click.stop>
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-xl font-bold">导航</h2>
        <button @click="closeMenu" class="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-col space-y-4">
        <router-link v-for="link in navLinks" :key="link.to" :to="link.to" @click="closeMenu"
                     class="text-gray-800 font-bold hover:text-green-600 py-2 text-lg" 
                     :active-class="link.to !== '/' ? 'text-green-600' : ''"
                     :exact-active-class="link.to === '/' ? 'text-green-600' : ''">
          {{ link.text }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { uiState } from '@/store/ui.js';

const navLinks = ref([
  { to: '/', text: '首页' },
  { to: '/test-papers', text: '试题试卷' },
  { to: '#/1', text: '教育资讯' },
  { to: '#/2', text: '小学' },
  { to: '#/3', text: '初中' },
  { to: '#/4', text: '高中' },
  { to: '#/5', text: '中考' },
  { to: '#/6', text: '高考' },
]);

const closeMenu = () => {
  uiState.isMenuOpen = false;
};
</script> 