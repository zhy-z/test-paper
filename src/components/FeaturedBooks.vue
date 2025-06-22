<template>
  <div class="container mx-auto px-4 mt-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">精选图书</h2>
      <a href="#" class="text-sm text-gray-500 hover:text-orange-500">更多 ➡️</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="book in books" :key="book.title">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="book.image" :alt="book.title" class="w-full h-56 object-cover">
        </div>
        <h3 class="mt-2 font-bold text-gray-800">{{ book.title }}</h3>
        <div class="flex flex-wrap gap-2 mt-2">
            <span v-for="tag in book.tags" :key="tag" class="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                {{ tag }}
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const books = ref([
  {
    title: '2026高中领航卷 语文 选择性必修 上册 人教版 主书',
    image: 'https://img.shst.cn/goods/2023/0724/20230724041738724.png',
    tags: ['教辅用书']
  },
  {
    title: '2026领航计划 高考总复习 语文',
    image: 'https://img.shst.cn/goods/2023/0724/20230724041738724.png',
    tags: ['教辅用书', '精编PP...', 'Word格...']
  },
  {
    title: '2026理想领航 高三一轮复习 单元提升卷 语文',
    image: 'https://img.shst.cn/goods/2023/0724/20230724041738724.png',
    tags: ['单元测试卷']
  },
  {
    title: '2026理想领航卷 高三一轮复习 周测卷 语文 主书 (新)',
    image: 'https://img.shst.cn/goods/2023/0724/20230724041738724.png',
    tags: ['周测/月考...']
  }
]);
</script> 