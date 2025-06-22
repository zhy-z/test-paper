<template>
  <div class="container mx-auto px-4 mt-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">最新资源</h2>
      <div>
        <a href="#" class="text-gray-500 hover:text-orange-500 font-bold  border-orange-500 pb-1">好备课</a>
        <a href="#" class="text-gray-500 hover:text-orange-500 ml-6">新卷速递</a>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left Featured Item -->
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
        <div class="flex items-start space-x-4">
          <img src="@/assets/img/newWord.png" alt="Word" class="w-16 h-16">
          <div>
            <h3 class="text-xl font-bold text-gray-800">高一高二月考质量分析会校长讲话：以镜为鉴破困局，四维突破开新篇_</h3>
            <p class="text-sm text-gray-500 mt-2">时间: 2025-06-20  页数: 6</p>
          </div>
        </div>
        <ul class="mt-4 space-y-3">
          <li v-for="item in featuredItems" :key="item.text" class="flex justify-between items-center">
            <a href="#" class="text-gray-700 hover:text-orange-500 truncate">
              <span class="text-red-500 font-bold mr-2">[P]</span>{{ item.text }}
            </a>
            <span class="text-sm text-gray-400">{{ item.date }}</span>
          </li>
        </ul>
      </div>
      <!-- Right List -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <ul>
          <li v-for="item in listItems" :key="item.text" class="flex justify-between items-center py-2">
            <a href="#" class="text-gray-700 hover:text-orange-500 truncate">
              <span class="text-red-500 font-bold mr-2">[P]</span>{{ item.text }}
            </a>
            <span class="text-sm text-gray-400">{{ item.date }}</span>
          </li>
        </ul>
        <div class="bg-gray-100 p-4 rounded-lg mt-4 flex items-start space-x-4">
          <img src="@/assets/img/newPPT.png" alt="PPT" class="w-16 h-16">
          <div>
            <h4 class="font-bold text-gray-800">12 石钟山记(第2课时) (教学课件) -高中语文人教统编版选择性必修下册 (共32张PPT)</h4>
            <p class="text-sm text-gray-500 mt-2">时间: 2025-02-19  页数: 32</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const featuredItems = ref([
  { text: '2025届高考试语文最后一课 (考前指导)', date: '05-29' },
  { text: '《成长承责，逐梦十八》主题班会课件', date: '05-09' },
  { text: '2025年高考语文作文模拟导写学案：疾速发展时代下的身心坚守', date: '03-24' },
]);

const listItems = ref([
  { text: '古诗4 临安春雨初霁 (教学课件) -高中语文人教统编版选择性必修下册...', date: '02-19' },
  { text: '古诗3 登快阁 (教学课件) -高中语文人教统编版选择性必修下册 (共3...', date: '02-19' },
  { text: '古诗1 拟行路难(其四) (教学课件) -高中语文人教统编版选择性必修下...', date: '02-19' },
  { text: '14 天文学上的旷世之争 (教学课件) -高中语文人教统编版选择性必修下...', date: '02-19' },
  { text: '13.2 宇宙的边疆 (教学课件) -高中语文人教统编版选择性必修下册 (..', date: '02-19' },
  { text: '13.1 自然选择的证明 (教学课件) -高中语文人教统编版选择性必修下...', date: '02-19' },
]);
</script>
