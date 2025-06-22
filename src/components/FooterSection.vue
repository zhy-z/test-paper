<template>
  <div class="container mx-auto px-4 mt-6 mb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Space Station Resources -->
      <div class="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">空间站资源</h3>
          <a href="#" class="text-sm text-gray-500 hover:text-orange-500">换一批 🔄</a>
        </div>
        <div>
          <div class="flex items-center space-x-4 py-2">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <span class="text-4xl">📄</span>
            </div>
            <div>
                <a href="#" class="font-bold text-gray-800 hover:text-orange-500">辽宁省实验中学2025届高三下第五次模拟语文试卷</a>
                <p class="text-sm text-gray-500 mt-1">卓越化学与管理</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Hot Space Stations -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">热门空间站</h3>
          <a href="#" class="text-sm text-gray-500 hover:text-orange-500">更多 ➡️</a>
        </div>
        <div>
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
                <img src="https://statics.shst.cn/images/station/20230228/63fe2e9672691.png" class="w-12 h-12 rounded-full">
                <div>
                    <h4 class="font-bold text-gray-800">惠地理，会地理</h4>
                    <p class="text-sm text-gray-500">惠地理，会地理</p>
                </div>
            </div>
            <div class="text-center">
                <p class="font-bold text-orange-500">25</p>
                <p class="text-xs text-gray-400">资源</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style> 