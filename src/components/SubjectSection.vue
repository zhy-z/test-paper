<template>
  <div class="container mx-auto px-4 mt-6">
    <h2 class="text-2xl font-bold mb-4">学科专项</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ContentList title="高考复习" :items="examReviewItems" />
      <ContentList title="语文特色" :items="languageFeaturesItems" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ContentList from './ContentList.vue';

const examReviewItems = ref([
  { text: '2025年高考作文真题 (天津卷)', date: '06-07' },
  { text: '2025年高考作文真题 (北京卷)', date: '06-07' },
  { text: '2025年高考作文真题 (上海卷)', date: '06-07' },
  { text: '2025年高考作文真题 (全国一卷)', date: '06-10' },
  { text: '2025年高考作文真题 (全国二卷)', date: '06-10' },
]);

const languageFeaturesItems = ref([
  { text: '冯延巳古代诗歌阅读练习题', date: '04-23' },
  { text: '李煜古代诗歌阅读练习题', date: '04-23' },
  { text: '韦庄古代诗歌阅读练习题', date: '04-23' },
  { text: '《新五代史》文言文练习题', date: '03-19' },
  { text: '《中庸》文言文练习题', date: '03-19' },
]);
</script> 