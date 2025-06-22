<template>
  <div class="container mx-auto px-4 mt-8">
    <div class="bg-red-500 rounded-lg p-6 relative overflow-hidden text-white">
      <div class="absolute -top-4 -right-4 bg-yellow-400 text-red-600 px-4 py-1 transform rotate-45 font-bold">
        千元大奖
      </div>
      <div class="flex items-center justify-center mb-4">
        <h2 class="text-3xl font-bold">2025高考原创命题大赛</h2>
      </div>
      <div class="bg-white bg-opacity-20 p-4 rounded-lg">
        <div class="flex items-center mb-2">
            <span class="bg-yellow-400 text-red-600 text-sm font-bold px-2 py-1 rounded">参与动态</span>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <li v-for="item in activities" :key="item.text" class="flex justify-between">
                <span>{{ item.text }}</span>
                <span>{{ item.date }}</span>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activities = ref([
    { text: '英语 158****2518 进行了原创命题', date: '03-16 15:16' },
    { text: '山西英语 185****1988 进行了原创命题...', date: '03-15 17:24' },
    { text: '山西英语 185****1988 进行了原创命题...', date: '03-15 17:22' },
    { text: '广东英语 166****3405 进行了原创命题...', date: '03-12 09:36' },
    { text: '湖北语文 138****7749 进行了原创命题...', date: '03-08 20:11' },
    { text: '重庆数学 177****5719 原创命题通过', date: '02-28 10:32' },
]);
</script> 