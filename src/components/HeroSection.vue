<template>
  <div class="container mx-auto px-4 mt-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Left Side: Banner -->
      <div class="md:col-span-2 rounded-lg overflow-hidden">
        <el-carousel height="320px">
          <el-carousel-item v-for="item in carouselItems" :key="item.alt">
            <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- Right Side: Quick Actions -->
      <div class="grid grid-rows-4 gap-2">
        <div class="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
                <h3 class="font-bold">精品题库</h3>
                <p class="text-sm text-gray-500">优质、丰富</p>
            </div>
            <img src="@/assets/img/jingpintiku.png" alt="精品题库" class="h-12">
        </div>
        <div class="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
                <h3 class="font-bold">智能组卷</h3>
                <p class="text-sm text-gray-500">高效、便捷</p>
            </div>
            <img src="@/assets/img/zhinengzujuan.png" alt="智能组卷" class="h-12">
        </div>
        <div class="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
                <h3 class="font-bold">高考分析</h3>
                <p class="text-sm text-gray-500">深度剖析</p>
            </div>
            <img src="@/assets/img/gaokaofenxi.png" alt="高考分析" class="h-12">
        </div>
        <div class="bg-white p-4 rounded-lg flex items-center justify-between">
            <div class="text-center">
                <p>登录/注册</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const carouselItems = ref([
  { src: 'https://cdn.stzy.com/stzy/2025-06-06/fa07f91e-234a-4988-8575-72345b525c41/1749174604119.jpg', alt: 'Banner 1' },
  { src: 'https://cdn.stzy.com/stzy/2024-11-25/b1953c4d-3ea6-4b00-ab8c-671dd4478991/1732529802910.jpg', alt: 'Banner 2' },
  { src: 'https://cdn.stzy.com/stzy/2025-06-06/fa07f91e-234a-4988-8575-72345b525c41/1749174604119.jpg', alt: 'Banner 3' },
]);
</script>

<style scoped>
</style> 