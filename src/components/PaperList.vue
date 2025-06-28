<template>
  <div class="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md max-w-full">
    <!-- Filters -->
    <div class="space-y-2 sm:space-y-3 pb-3 sm:pb-4 text-xs sm:text-sm">
      <div v-for="filter in filters" :key="filter.name" 
           :class="[
             'flex flex-col space-y-2', 
             'sm:flex-row sm:items-baseline sm:space-y-0', 
             'md:flex-row md:items-center', 
             { 'hidden sm:flex md:flex lg:flex': filter.name === '学科' }
           ]">
        <span class="font-semibold text-gray-500 flex-shrink-0 w-full sm:w-12 md:w-16 lg:w-20">
          {{ filter.name }}:
        </span>
        <div class="flex flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
          <a v-for="option in filter.options" :key="option" href="#" 
             :class="[
               'px-2 py-1 rounded whitespace-nowrap transition-all duration-200',
               'text-xs sm:text-sm md:text-sm lg:text-base',
               'hover:scale-105 active:scale-95',
               option === filter.selected 
                 ? 'text-white bg-green-600 shadow-md' 
                 : 'text-gray-600 hover:text-green-600 hover:bg-green-50 hover:shadow-sm'
             ]">
            {{ option }}
          </a>
        </div>
      </div>
    </div>
  
    <!-- Sort & Results -->
    <div class="border-t border-gray-200 pt-3 sm:pt-4">
      <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
        <!-- Grade filters -->
        <div class="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 overflow-x-auto pb-2 sm:pb-0">
          <a href="#" class="px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded text-white bg-green-600 text-xs sm:text-sm md:text-base whitespace-nowrap shadow-md hover:bg-green-700 transition-colors">
            最新
          </a>
          <a href="#" class="px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded text-gray-600 hover:bg-gray-100 hover:text-green-600 text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-200">
            高一
          </a>
          <a href="#" class="px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded text-gray-600 hover:bg-gray-100 hover:text-green-600 text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-200">
            高二
          </a>
          <a href="#" class="px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded text-gray-600 hover:bg-gray-100 hover:text-green-600 text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-200">
            高三
          </a>
        </div>
        
        <!-- Controls and stats -->
        <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2 md:space-x-4">
          <div class="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
            <select class="border border-gray-300 rounded px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>文档类型</option>
            </select>
            <label class="flex items-center text-xs sm:text-sm cursor-pointer hover:text-green-600 transition-colors">
              <input type="checkbox" class="mr-1 accent-green-600">答案
            </label>
            <label class="flex items-center text-xs sm:text-sm cursor-pointer hover:text-green-600 transition-colors">
              <input type="checkbox" class="mr-1 accent-green-600">解析
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Paper List -->
    <div class="mt-4 sm:mt-6 space-y-2 sm:space-y-3 md:space-y-4">
      <div v-for="paper in papers" :key="paper.id" 
           class="border-b border-gray-100 pb-3 sm:pb-4 last:border-b-0 last:pb-0">
        <div class="flex items-start space-x-2 sm:space-x-3 md:space-x-4 bg-white p-2 sm:p-3 md:p-4 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 cursor-pointer group">
          <!-- Icon -->
          <div class="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <img src="@/assets/img/ppt.svg" alt="doc-icon" 
                 class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
          </div>
          
          <!-- Content -->
          <div class="flex-grow min-w-0">
            <!-- Title -->
            <h4 class="font-bold text-gray-800 leading-tight mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
              <span v-if="paper.tag" 
                    class="inline-block text-xs text-white bg-green-600 px-2 py-1 rounded-md mr-2 mb-1 sm:mb-0 shadow-sm">
                {{ paper.tag }}
              </span>
              <span class="break-words group-hover:text-green-700 transition-colors">
                {{ paper.title }}
              </span>
            </h4>
            
            <!-- Tags -->
            <div class="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 mt-4">
              <div class="bg-gray-100 text-gray-500 rounded-sm text-xs leading-5 px-2 py-1 transition-all hover:bg-green-50 hover:text-green-700 sm:px-3 sm:text-sm md:px-4 lg:px-4 lg:text-base cursor-pointer">
                <span>{{ paper.level }}</span>
              </div>
              <div class="bg-gray-100 text-gray-500 rounded-sm text-xs leading-5 px-2 py-1 transition-all hover:bg-green-50 hover:text-green-700 sm:px-3 sm:text-sm md:px-4 lg:px-4 lg:text-base cursor-pointer">
                <span>{{ paper.year }}</span>
              </div>
              <div class="bg-gray-100 text-gray-500 rounded-sm text-xs leading-5 px-2 py-1 transition-all hover:bg-green-50 hover:text-green-700 sm:px-3 sm:text-sm md:px-4 lg:px-4 lg:text-base cursor-pointer">
                <span>{{ paper.region }}</span>
              </div>
            </div>
            
            <!-- Meta info -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-500 mt-4">
              <span class="flex items-center hover:text-green-600 transition-colors">
                <i class="far fa-clock mr-1"></i>{{ paper.date }}
              </span>
              <span class="flex items-center hover:text-green-600 transition-colors">
                <i class="far fa-file-alt mr-1"></i>{{ paper.pages }}
              </span>
              <span class="flex items-center hover:text-green-600 transition-colors">
                <i class="far fa-user mr-1"></i>{{ paper.user }}
              </span>
            </div>
          </div>
          
          <!-- Action button -->
          <div class="flex-shrink-0">
            <button
              @click="goToDetail(paper.id)"
              class="border border-green-600 text-green-600 bg-white hover:bg-green-600 hover:text-white px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 rounded text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95"
            >
              查看
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-6 sm:mt-8">
      <!-- Mobile pagination -->
      <div class="flex justify-center items-center sm:hidden">
        <div class="flex items-center space-x-1 text-sm">
          <button class="px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 hover:border-green-500 transition-all duration-200 active:scale-95">
            上一页
          </button>
          <span class="px-3 py-2 bg-green-600 text-white rounded shadow-md">1</span>
          <span class="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition-colors">2</span>
          <span class="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition-colors">3</span>
          <span class="px-2 py-2 text-gray-400">...</span>
          <button class="px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 hover:border-green-500 transition-all duration-200 active:scale-95">
            下一页
          </button>
        </div>
      </div>
      
      <!-- Desktop pagination -->
      <div class="hidden sm:flex justify-between items-center">
        <div class="text-sm text-gray-500">
          显示第 1-20 条，共 111,817 条记录
        </div>
        <div class="flex items-center space-x-2">
          <button class="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 hover:border-green-500 transition-all duration-200">
            « 上一页
          </button>
          <span class="px-4 py-2 bg-green-600 text-white rounded shadow-md">1</span>
          <span class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition-colors">2</span>
          <span class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition-colors">3</span>
          <span class="px-2 py-2 text-gray-400">...</span>
          <span class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded cursor-pointer transition-colors">1000</span>
          <button class="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 hover:border-green-500 transition-all duration-200">
            下一页 »
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

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
    id: 4,
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
    id: 5,
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

function goToDetail(id) {
  router.push(`/paper/${2}`)
}
</script>

<style scoped>
i {
  font-style: normal;
}


</style>