<template>
  <div class=" py-4">
    <div class="container mx-auto px-4">
      <div class="bg-white rounded-xl border border-gray-200 shadow p-6">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
          <div class="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 text-sm sm:text-sm">
            <button v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.name"
              :class="['py-1', activeTab === tab.name ? 'text-green-600 border-b-2 border-green-600 font-bold' : 'text-gray-600 hover:text-green-600']">
              {{ tab.name }}
            </button>
          </div>
        </div>
        <div class="flex flex-wrap gap-1 mt-2 items-start">
          <div
            v-for="(paper, index) in papers"
            :key="index"
            :class="['group paper-card relative flex justify-between items-center min-h-[42px] overflow-hidden w-full md:w-[calc(50%-12px)] cursor-pointer', { 'first-active': activeIndex === index }]"
            style="will-change: transform;"
            @mouseenter="activeIndex = index"
            @mouseleave="activeIndex = 0"
          >
            <img
              :src="ppt"
              alt=""
              :class="['w-5 h-5', activeIndex === index ? 'hidden' : '', 'group-hover:hidden']"
            >
            <img
              :src="newPPT"
              alt=""
              :class="['hidden', activeIndex === index ? 'inline-block' : '', 'group-hover:inline-block', 'w-[80px]', 'h-[96px]', 'mr-4']"
            >
            <div class="ml-2 flex-1 w-0 ">
              <div
                :class="[
                  activeIndex === index
                    ? 'overflow-hidden text-ellipsis line-clamp-2 font-bold text-lg'
                    : 'truncate overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-hidden sm:text-ellipsis sm:line-clamp-2',
                  'group-hover:overflow-hidden group-hover:text-ellipsis group-hover:line-clamp-2 group-hover:font-bold group-hover:text-lg'
                ]"
                :style="activeIndex === index ? 'display: -webkit-box; -webkit-box-orient: vertical;' : ''"
              >
                {{ paper.title }}
              </div>
              <div :class="[activeIndex === index ? 'block text-gray-600 font-medium' : 'hidden', 'group-hover:block', 'text-gray-400', 'text-xs', 'mt-1', 'group-hover:text-gray-600', 'group-hover:font-medium','mt-3.5']">
                时间：{{ paper.date }} &nbsp;|&nbsp; 页数：{{ paper.pages }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-6">
          <button
            class="bg-white border border-gray-300 text-gray-700 px-12 py-2 rounded-full hover:bg-gray-100 shadow-sm">加载更多</button>
        </div>
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

const activeIndex = ref(0);

const papers = ref([
  {
    icon: newPPT,
    title:"古诗3 登快阁 (教学课件) -高中语文人教版选择性必修下册 (共32张PPT)",
    date:"06-19",
    pages:32
  },
  {
    icon: newPPT,
    title:"2025届高考语文最后一课（考前指导）",
    date:"06-19",
    pages:32
  },
  {
    icon: newPPT,
    title:"高中主题班会 厉害了我的国 教案",
    date:"06-19",
    pages:32
  },
  {
    icon: newPPT, type: 'PPT',
    title: '高中主题班会 厉害了我的国 教案',
    date: '02-19', pages: 32,
  },
  {
    icon: newPPT, type: 'PPT',
    title: '古诗2《客至》课件统编版高中语文选择性必修下册',
    date: '02-19', pages: 32,
  },
  {
    icon: newPPT, type: 'PPT',
    title: '14 天文学上的旷世之争 (教学课件) -高中语文人教版选择性必修下',
    date: '02-19', pages: 32,
  },
]);
</script>
<style>
.space-station-item-hover :hover {
  height: 143px;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 6px;
  cursor: pointer;
}

.space-station-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px 0;
}

.group:hover,
.first-active {
  padding: 16px 16px 20px 16px;
  box-shadow: 0 8px 32px 0 rgba(60,60,60,0.10);
  background: #f5f5f5;
  z-index: 1;
}
</style>