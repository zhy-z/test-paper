<template>
  <div class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center py-2 gap-y-2">
        <!-- Left: Logo and Location -->
        <div class="flex items-center">
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

        <!-- Center: Search Bar -->
        <div class="flex justify-center">
          <div class="w-full max-w-sm flex items-center border-2 border-green-500 rounded-full overflow-hidden">
            <input type="text" placeholder="请输入关键词" class="px-4 py-1 w-full focus:outline-none text-sm">
            <button class="bg-green-500 text-white font-semibold px-6 py-1 hover:bg-green-600 text-sm">搜索</button>
          </div>
        </div>

        <!-- Right: Spacer/Empty -->
        <div class="hidden md:block"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for this static component
</script>

<style scoped>
</style> 