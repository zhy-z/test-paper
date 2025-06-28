<template>
  <div class="bg-white sticky top-0 z-40">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Left: Category Selector & Main Nav -->
        <div class="flex items-center">
          <!-- Dropdown container -->
          <!-- <div 
            class="relative"
            @mouseover="isDropdownOpen = true"
            @mouseleave="isDropdownOpen = false"
          >
            <button class="bg-green-600 text-white font-bold py-3 px-6 flex items-center hover:bg-green-700 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              初中数学
            </button>

          
            <div v-if="isDropdownOpen" class="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border w-[400px] p-4 z-50">
                <div v-for="grade in categories" :key="grade.name" class="mb-4 last:mb-0">
                  <h3 class="text-base font-bold mb-2 flex items-center">
                    <span class="w-1 h-4 bg-green-500 mr-2"></span>
                    {{ grade.name }}
                  </h3>
                  <div class="grid grid-cols-5 gap-x-4 gap-y-2 text-sm">
                    <a v-for="subject in grade.subjects" :key="subject.name" href="#" 
                      :class="['text-gray-600 hover:text-green-600', { 'text-green-600 font-bold': subject.active }]">
                      {{ subject.name }}
                    </a>
                  </div>
                </div>
            </div>
          </div> -->
          
          <nav class="hidden md:flex items-center space-x-6 ml-8">
            <router-link to="/" class="text-gray-800 font-bold hover:text-green-600 py-3" exact-active-class="text-green-600 border-green-600">首页</router-link>
            <router-link to="/test-papers" class="text-gray-800 font-bold hover:text-green-600 py-3" active-class="text-green-600  border-green-600">试题试卷</router-link>
            <a href="#" class="text-gray-800 font-bold hover:text-green-600 py-3">教育资讯</a>
            <a href="#" class="text-gray-800 font-bold hover:text-green-600 py-3">小学</a>
            <a href="#" class="text-gray-800 font-bold hover:text-green-600 py-3">初中</a>
            <a href="#" class="text-gray-800 font-bold hover:text-green-600 py-3">高中</a>
            <a href="#" class="text-gray-800 font-bold hover:text-green-600 py-3">中考</a>
            <a href="#" class="text-gray-800 font-bold hover:text-green-600 py-3">高考</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const categories = ref([
  {
    name: '高中',
    subjects: [
      { name: '语文', active: false }, { name: '数学', active: false }, { name: '外语', active: false }, { name: '物理', active: false },
      { name: '化学', active: false }, { name: '生物', active: false }, { name: '历史', active: false }, { name: '政治', active: false },
      { name: '地理', active: false }, { name: '信息技术', active: false }
    ]
  },
  {
    name: '初中',
    subjects: [
      { name: '语文', active: false }, { name: '数学', active: true }, { name: '外语', active: false }, { name: '物理', active: false },
      { name: '化学', active: false }, { name: '生物', active: false }, { name: '历史', active: false }, { name: '政治', active: false },
      { name: '地理', active: false }, { name: '科学', active: false }
    ]
  }
]);
</script>

<style scoped>
</style>