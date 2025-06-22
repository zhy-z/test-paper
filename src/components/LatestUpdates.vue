<template>
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Latest Papers -->
      <div>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-green-600 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-green-600">最新试卷</h2>
          <a href="#" class="text-sm text-gray-500 hover:text-green-600">更多+</a>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <ul>
            <li v-for="paper in papers" :key="paper.title" class="flex justify-between items-center py-2">
              <a href="#" class="flex items-center text-gray-700 hover:text-green-600 truncate text-sm">
                <img src="@/assets/img/yasuoba.svg" class="w-4 h-4 mr-2"/>
                <span class="truncate">{{ paper.title }}</span>
              </a>
              <span class="text-sm text-gray-400 flex-shrink-0">{{ paper.date }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Education News -->
      <div>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-green-600 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[3px] after:bg-green-600">教育资讯</h2>
          <a href="#" class="text-sm text-gray-500 hover:text-green-600">更多+</a>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-sm">
          <ul>
            <li v-for="news in newsItems" :key="news.title" class="flex justify-between items-center py-2 ">
              <a href="#" class="text-gray-700 hover:text-green-600 truncate text-sm">
                <span class="font-bold mr-2">[ {{ news.category }} ]</span>{{ news.title }}
              </a>
              <span class="text-sm text-gray-400 flex-shrink-0">{{ news.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const papers = ref([
  { icon: 'https://img.shst.cn/images/fileType/exam.png', title: '[江苏省扬州市邗江中学] 2024-2025学年高二下学期期中语文试题', date: '06-19' },
  { icon: 'https://img.shst.cn/images/fileType/exam.png', title: '[江苏省南通市海安高级中学] 2024-2025学年高二下学期6月月考语文试题', date: '06-18' },
  { icon: 'https://img.shst.cn/images/fileType/exam.png', title: '[江苏省扬州市新华中学] 2024-2025学年高二下学期期中语文试题', date: '06-18' },
  { icon: 'https://img.shst.cn/images/fileType/exam.png', title: '[江苏省南京市师大附中] 2024-2025学年高一下学期期中语文试题', date: '06-17' },
  { icon: 'https://img.shst.cn/images/fileType/word.png', title: '[江苏省常州市北郊高级中学] 2024-2025学年高一下学期期中语文试题', date: '06-17' },
]);

const newsItems = ref([
    { category: '期末', title: '天津重要考试重磅来袭-2024学年/2025学年...', date: '06-18' },
    { category: '期末', title: '创新教程-高一下学期期末真实模拟卷', date: '06-17' },
    { category: '期末', title: '步步为赢-高一下学期期末综合冲刺卷', date: '06-12' },
    { category: '期末', title: '好题汇编-备战高一下学期期末真题分类...', date: '05-29' },
    { category: '期末', title: '天津重要考试重磅来袭-2024学年/2025学年...', date: '06-18' },
]);
</script> 