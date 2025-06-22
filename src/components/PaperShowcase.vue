<template>
  <div class="bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <div class="hidden md:flex flex-wrap items-center space-x-6 mb-4">
        <div class="flex items-center space-x-6 text-sm">
          <button v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.name"
                  :class="['py-1', activeTab === tab.name ? 'text-green-600  border-green-600 font-bold' : 'text-gray-600 hover:text-green-600']">
            {{ tab.name }}
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div v-for="(paper, index) in papers" :key="index" class="bg-white p-4 rounded-lg shadow-sm">
              <div class="flex items-start space-x-4">
                  <img :src="paper.icon" :alt="paper.type" class="w-16 h-16 mt-1 flex-shrink-0">
                  <div class="flex-grow">
                      <h3 class="font-bold text-gray-800 mb-2 leading-tight text-base">{{ paper.title }}</h3>
                      <div class="flex items-center text-xs text-gray-500">
                          <span>时间: {{ paper.date }}</span>
                          <span class="mx-2">|</span>
                          <span>页数: {{ paper.pages }}</span>
                      </div>
                  </div>
              </div>
              <ul class="mt-3 space-y-2 text-sm pl-2">
                  <li v-for="item in paper.items" :key="item.title" class="flex justify-between items-center">
                      <a href="#" class="flex items-center text-gray-600 hover:text-green-600 truncate">
                          <img :src="item.icon" alt="doc" class="w-4 h-4 mr-2 flex-shrink-0">
                          <span class="truncate">{{ item.title }}</span>
                      </a>
                      <span class="text-xs text-gray-400 flex-shrink-0 ml-4">{{ item.date }}</span>
                  </li>
              </ul>
          </div>
      </div>
      <div class="text-center mt-6">
        <button class="bg-white border border-gray-300 text-gray-700 px-12 py-2 rounded-full hover:bg-gray-100 shadow-sm">加载更多</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import newPPT from '@/assets/img/newPPT.png';
import ppt from '@/assets/img/ppt.svg';

const activeTab = ref('试题试卷');
const tabs = ref([
  { name: '试题试卷' },
    { name: '语文' }, { name: '数学' }, { name: '外语' }, { name: '物理' }, 
    { name: '化学' }, { name: '生物' }, { name: '历史' }, { name: '政治' }, 
    { name: '地理' }, { name: '信息技术' }
]);

const papers = ref([
  {
    icon: newPPT, type: 'PPT',
    title: '古诗3 登快阁 (教学课件) -高中语文人教版选择性必修下册 (共32张PPT)',
    date: '2025-02-19', pages: 32,
    items: [
      { icon: ppt, title: '古诗1 拟行路难(其四) (教学课件) -高中语文人教版选择性必修下...', date: '06-19' },
      { icon: ppt, title: '14 天文学上的旷世之争 (教学课件) -高中语文人教版选择性必修下...', date: '06-18' },
      { icon: ppt, title: '13.2 宇宙的边疆 (教学课件) -高中语文人教版选择性必修下册 (..', date: '06-18' },
      { icon: ppt, title: '13.1 自然选择的证明 (教学课件) -高中语文人教版选择性必修下...', date: '06-17' },
      { icon: ppt, title: '12 石钟山记(第2课时) (教学课件) -高中语文人教版选择性必修下...', date: '06-17' }
    ]
  },
  {
    icon: newPPT, type: 'PPT',
    title: '古诗3 登快阁 (教学课件) -高中语文人教版选择性必修下册 (共32张PPT)',
    date: '2025-02-19', pages: 32,
    items: [
      { icon: ppt, title: '古诗1 拟行路难(其四) (教学课件) -高中语文人教版选择性必修下...', date: '06-19' },
      { icon: ppt, title: '14 天文学上的旷世之争 (教学课件) -高中语文人教版选择性必修下...', date: '06-18' },
      { icon: ppt, title: '13.2 宇宙的边疆 (教学课件) -高中语文人教版选择性必修下册 (..', date: '06-18' },
      { icon: ppt, title: '13.1 自然选择的证明 (教学课件) -高中语文人教版选择性必修下...', date: '06-17' },
      { icon: ppt, title: '12 石钟山记(第2课时) (教学课件) -高中语文人教版选择性必修下...', date: '06-17' }
    ]
  }
]);
</script> 