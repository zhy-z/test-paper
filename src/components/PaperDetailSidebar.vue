<template>
  <div class="hidden sm:block space-y-6">
    <!-- Download Box -->
    <div class="bg-white p-6 rounded-lg shadow-md text-center">
      <button class="bg-green-600 text-white font-bold py-3 px-12 rounded-lg w-full hover:bg-orange-600">
        立即下载
      </button>
      <p class="text-sm text-gray-500 mt-2">资源价格: <span class="text-orange-500 font-semibold">5元</span></p>
    </div>

    <!-- Recommendations -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-gray-800">猜你想找</h3>
        <a href="#" class="text-sm text-gray-500 hover:text-green-600 flex items-center">
          换一换
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h5M20 20v-5h-5M4 4l16 16"></path></svg>
        </a>
      </div>
      <ul class="space-y-3">
        <li v-for="item in recommendations" :key="item.title">
          <a href="#" class="flex items-start space-x-3 text-sm text-gray-700 hover:text-orange-500">
            <img src="@/assets/img/newWord.png" class="w-5 h-5 mt-0.5 flex-shrink-0" alt="">
            <span class="leading-tight">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const recommendations = ref([
    { icon: 'https://img.shst.cn/images/fileType/exam.png', title: '【高考必备刷卷】2022年全国新高考Ⅱ卷语文高考真题' },
    { icon: 'https://img.shst.cn/images/fileType/word.png', title: '2023届新高考二卷语文考点训练专题七：简答题' },
    { icon: 'https://img.shst.cn/images/fileType/word.png', title: '2023届新高考二卷语文考点训练专题十二：话题作文' },
    { icon: 'https://img.shst.cn/images/fileType/word.png', title: '渝玲辽名校联考2023届高三高考仿真模拟检测试题' },
    { icon: 'https://img.shst.cn/images/fileType/ppt.png', title: '2023届辽宁省大连市高三双基测试试题及答案评讲课件' },
]);
</script> 