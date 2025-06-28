<template>
  <div class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center py-2">
        <!-- 左侧：Logo和江苏 -->
        <div class="flex items-center flex-shrink-0">
          <router-link to="/">
            <img src="@/assets/img/logo.svg" alt="聚优试卷网 Logo" class="h-8" />
          </router-link>
          <div class="ml-4 flex items-center text-gray-600 cursor-pointer hover:text-green-600">
            <span>江苏</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <!-- 中间：搜索框 -->
        <div class="flex-1 flex justify-center">
          <div class="hidden md:flex w-full max-w-sm items-center border-2 border-green-500 rounded-full overflow-hidden">
            <input type="text" placeholder="请输入关键词" class="px-4 py-1 w-full focus:outline-none text-sm">
            <button class="bg-green-500 text-white font-semibold px-6 py-1 hover:bg-green-600 text-sm">搜索</button>
          </div>
        </div>
        <!-- 右侧：菜单按钮，仅移动端显示 -->
        <div class="flex items-center flex-shrink-0 md:hidden">
          <button class="p-2" @click="toggleMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <!-- 移动端下方搜索框 -->
      <div class="flex md:hidden justify-center mt-2">
        <div class="w-full max-w-sm flex items-center border-2 border-green-500 rounded-full overflow-hidden mb-1.5">
          <input type="text" placeholder="请输入关键词" class="px-4 py-1 w-full focus:outline-none text-sm">
          <button class="bg-green-500 text-white font-semibold px-6 py-1 hover:bg-green-600 text-sm">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toggleMobileMenu } from '@/store/ui.js'
</script>

<style scoped>
</style> 