<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
      <!-- Center: Carousel/Banner -->
      <div class="col-span-12 md:col-span-7 rounded-lg overflow-hidden shadow-sm h-72">
        <el-carousel height="288px" class="h-full">
          <el-carousel-item v-for="item in carouselItems" :key="item.alt">
            <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- Right: User Panel -->
      <div class="col-span-12 md:col-span-5">
        <div class="bg-white p-6 rounded-lg shadow-sm text-center h-full flex flex-col justify-center items-center">
          <img src="@/assets/img/man.png" alt="Avatar" class="w-16 h-16 rounded-full mb-4">
          <a href="#" class="font-bold text-lg mb-6 hover:text-green-600">登录 / 注册</a>
          <div class="flex justify-around w-full">
            <div class="text-center">
              <p class="text-xs text-gray-500">近24小时更新 (套)</p>
              <p class="text-2xl font-bold text-green-600">16347</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500">近一周更新 (套)</p>
              <p class="text-2xl font-bold text-green-600">100184</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import jingpintiku from '@/assets/img/jingpintiku.png';
import gaokaofenxi from '@/assets/img/gaokaofenxi.png';
import zhinengzujuan from '@/assets/img/zhinengzujuan.png';

const carouselItems = ref([
  { src:"https://cdn.stzy.com/stzy/2025-06-06/fa07f91e-234a-4988-8575-72345b525c41/1749174604119.jpg", alt: '精品题库' },
  { src: "https://cdn.stzy.com/stzy/2025-06-06/fd08bdaf-b3fc-4fbf-b9e2-e2ecdef5bb2c/1749170679934.jpg", alt: '高考分析' },
  { src: "https://cdn.stzy.com/stzy/2025-06-06/fd08bdaf-b3fc-4fbf-b9e2-e2ecdef5bb2c/1749170679934.jpg", alt: '智能组卷' },
]);
</script> 