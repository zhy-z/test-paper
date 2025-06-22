<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <!-- Filters -->
    <div class="space-y-3 pb-4 text-sm">
      <div v-for="filter in filters" :key="filter.name" 
           :class="['flex items-baseline', { 'hidden md:flex': filters.name === '学科' }]">
        <span class="font-semibold w-16 text-gray-500 flex-shrink-0">{{ filter.name }}:</span>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <a v-for="option in filter.options" :key="option" href="#" 
             :class="['px-2 py-1 rounded', option === filter.selected ? 'text-white bg-green-600' : 'text-gray-600 hover:text-green-600']">
            {{ option }}
          </a>
        </div>
      </div>
    </div>
  
    <!-- Sort & Results -->
    <div class="flex flex-wrap justify-between items-center py-4 text-sm">
      <div class="flex items-center space-x-4">
        <a href="#" class="px-2 py-1 rounded text-white bg-green-600">最新</a>
        <a href="#" class="px-2 py-1 rounded text-gray-600 hover:bg-gray-100">高一</a>
        <a href="#" class="px-2 py-1 rounded text-gray-600 hover:bg-gray-100">高二</a>
        <a href="#" class="px-2 py-1 rounded text-gray-600 hover:bg-gray-100">高三</a>
      </div>
      <div class="flex items-center space-x-4 mt-2 sm:mt-0">
        <select class="border rounded px-2 py-1">
          <option>文档类型</option>
        </select>
        <label class="flex items-center"><input type="checkbox" class="mr-1">答案</label>
        <label class="flex items-center"><input type="checkbox" class="mr-1">解析</label>
        <span class="text-gray-500">共 <span class="text-green-600">111817</span> 条资源</span>
        <span class="text-gray-500">第 <span class="text-green-600">1</span>/1000 页</span>
      </div>
    </div>

    <!-- Paper List -->
   
  </div>
<div >
  <div class="space-y-4">
      <div v-for="paper in papers" :key="paper.id" class="pt-4">
        <div class="flex items-start space-x-4 bg-white p-4 rounded-lg">
          <img :src="paper.icon" alt="doc-icon" class="w-12 h-12 flex-shrink-0">
          <div class="flex-grow">
            <h4 class="font-bold text-gray-800">
              <span v-if="paper.tag" class="text-xs text-white bg-green-600 px-2 py-1 rounded-md mr-2">{{ paper.tag }}</span>
              {{ paper.title }}
            </h4>
            <div class="flex flex-wrap items-center gap-x-4 text-sm text-gray-500 mt-2">
              <div class="tag-btn">
                <span>{{ paper.level }}</span>
              </div>
              <div class="tag-btn">
                <span>{{ paper.year }}</span>
              </div>
              <div class="tag-btn">
                <span>{{ paper.region }}</span>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-x-4 text-sm text-gray-500 mt-2">
            <span><i class="far fa-clock mr-1"></i>{{ paper.date }}</span>
              <span><i class="far fa-file-alt mr-1"></i>{{ paper.pages }}</span>
              <span><i class="far fa-user mr-1"></i>{{ paper.user }}</span>
            </div>

          </div>
          <router-link :to="'/paper/' + 2" class="border border-green-600 text-green-600 px-8 py-2 rounded whitespace-nowrap hover:bg-green-50">查看</router-link>
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const filters = ref([
  { name: '年级', options: ['全部', '高一', '高二', '高三'], selected: '全部' },
  { name: '学科', options: ['全部', '语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'], selected: '全部' },
  { name: '省份', options: ['全部', '北京', '上海', '天津', '重庆', '河北', '山西', '辽宁', '更多...'], selected: '全部' },
  { name: '年份', options: ['全部', '2024', '2023', '2022', '2021', '2020', '2019', '2018'], selected: '全部' },
  { name: '卷型', options: ['全部', '真题', '模拟题', '期中', '期末', '月考', '单元测试'], selected: '全部' },
]);

const papers = ref([
  {
    id: 1,
    icon: '/src/assets/img/ppt.svg',
    tag: '首发',
    title: '2024届高三全国100所名校ABJ高考模拟金典卷（六）6·新高考·数学（新教材版）',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-20',
    pages: '5页',
    user: '管理员',
  },
    {
    id: 2,
    icon: '/src/assets/img/ppt.svg',
    tag: '热门',
    title: '2024届高三T8八省重点高中联盟第一次联考',
    level: '高三',
    year: '2024',
    region: 'T8八省',
    date: '2024-05-19',
    pages: '6页',
    user: '管理员',
  },
  {
    id: 3,
    icon: '/src/assets/img/yasuoba.svg',
    tag: '推荐',
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-18',
    pages: '8页',
    user: '管理员',
  },
  {
    id: 2,
    icon: '/src/assets/img/ppt.svg',
    tag: '热门',
    title: '2024届高三T8八省重点高中联盟第一次联考',
    level: '高三',
    year: '2024',
    region: 'T8八省',
    date: '2024-05-19',
    pages: '6页',
    user: '管理员',
  },
  {
    id: 3,
    icon: '/src/assets/img/yasuoba.svg',
    tag: '推荐',
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-18',
    pages: '8页',
    user: '管理员',
  },
  {
    id: 2,
    icon: '/src/assets/img/ppt.svg',
    tag: '热门',
    title: '2024届高三T8八省重点高中联盟第一次联考',
    level: '高三',
    year: '2024',
    region: 'T8八省',
    date: '2024-05-19',
    pages: '6页',
    user: '管理员',
  },
  {
    id: 3,
    icon: '/src/assets/img/yasuoba.svg',
    tag: '推荐',
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-18',
    pages: '8页',
    user: '管理员',
  },
  {
    id: 2,
    icon: '/src/assets/img/ppt.svg',
    tag: '热门',
    title: '2024届高三T8八省重点高中联盟第一次联考',
    level: '高三',
    year: '2024',
    region: 'T8八省',
    date: '2024-05-19',
    pages: '6页',
    user: '管理员',
  },
  {
    id: 3,
    icon: '/src/assets/img/yasuoba.svg',
    tag: '推荐',
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-18',
    pages: '8页',
    user: '管理员',
  },
  {
    id: 2,
    icon: '/src/assets/img/ppt.svg',
    tag: '热门',
    title: '2024届高三T8八省重点高中联盟第一次联考',
    level: '高三',
    year: '2024',
    region: 'T8八省',
    date: '2024-05-19',
    pages: '6页',
    user: '管理员',
  },
  {
    id: 3,
    icon: '/src/assets/img/yasuoba.svg',
    tag: '推荐',
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-18',
    pages: '8页',
    user: '管理员',
  },
  {
    id: 2,
    icon: '/src/assets/img/ppt.svg',
    tag: '热门',
    title: '2024届高三T8八省重点高中联盟第一次联考',
    level: '高三',
    year: '2024',
    region: 'T8八省',
    date: '2024-05-19',
    pages: '6页',
    user: '管理员',
  },
  {
    id: 3,
    icon: '/src/assets/img/yasuoba.svg',
    tag: '推荐',
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-18',
    pages: '8页',
    user: '管理员',
  },
  {
    id: 2,
    icon: '/src/assets/img/ppt.svg',
    tag: '热门',
    title: '2024届高三T8八省重点高中联盟第一次联考',
    level: '高三',
    year: '2024',
    region: 'T8八省',
    date: '2024-05-19',
    pages: '6页',
    user: '管理员',
  },
  {
    id: 3,
    icon: '/src/assets/img/yasuoba.svg',
    tag: '推荐',
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    level: '高三',
    year: '2024',
    region: '全国',
    date: '2024-05-18',
    pages: '8页',
    user: '管理员',
  },
]);
</script>

<style scoped>
/* Add any specific styles here */
i {
  font-style: normal;
}
.tag-btn {
  color: #7a7a7a;
    margin-right: 8px;
    padding-left: 10px;
    padding-right: 10px;
    height: 20px;
    line-height: 20px;
    border-radius: 2px;
    background: #f5f5f5;
}
</style>
