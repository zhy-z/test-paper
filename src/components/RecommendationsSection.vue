<template>
  <div class="container mx-auto px-4 mt-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ContentList title="我的推荐" :items="myRecommendations" />
      <ContentList title="热点新卷" :items="hotPapers" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ContentList from './ContentList.vue';

const myRecommendations = ref([
  { text: '上海市黄浦区2024-2025学年高一下学期期末考试语文试题', date: '06-21' },
  { text: '上海市青浦区2024-2025学年高二下学期期末考试语文试题', date: '06-21' },
  { text: '上海市交通大学附中2024-2025学年高二下学期期中语文试题', date: '06-20' },
  { text: '上海市闵行区六校联考2024-2025学年高二下学期语文试题', date: '06-20' },
  { text: '上海市宝山区2024-2025学年高一下学期期末考试语文试题', date: '06-20' },
]);

const hotPapers = ref([
  { text: '上海市青浦区2024-2025学年高二下学期期末质量检测语文试卷', date: '06-21' },
  { text: '上海市静安区2024-2025学年高二下学期期末教学质量调研语文试卷', date: '06-21' },
  { text: '上海市静安区2024-2025学年高二下学期期末教学质量调研语文试卷', date: '06-14' },
  { text: '上海市嘉定区某校2024-2025学年高一下学期5月月考语文试题', date: '06-12' },
  { text: '上海市青浦高级中学2024-2025学年高二下学期期中语文试题', date: '06-09' },
]);
</script> 