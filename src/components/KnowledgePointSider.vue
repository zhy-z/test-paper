<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <div class="flex ">
      <button 
        @click="activeTab = 'knowledge'" 
        :class="['py-2 px-4 font-semibold w-1/2', activeTab === 'knowledge' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-green-600']">
        知识点
      </button>
      <button 
        @click="activeTab = 'material'" 
        :class="['py-2 px-4 font-semibold w-1/2', activeTab === 'material' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500 hover:text-green-600']">
        教材
      </button>
    </div>
    <div class="mt-4">
      <ul v-if="activeTab === 'knowledge'" class="space-y-2 text-sm">
        <li v-for="item in knowledgeTree" :key="item.name">
          <div class="flex items-center cursor-pointer" @click="toggle(item)">
            <span class="w-6 text-gray-400 text-center">{{ item.children ? (item.open ? '−' : '+') : '' }}</span>
            <span class="font-semibold text-gray-700">{{ item.name }}</span>
          </div>
          <ul v-if="item.open && item.children" class="pl-8 mt-1 space-y-2 text-gray-600">
            <li v-for="child in item.children" :key="child.name">
              <a href="#" class="hover:text-green-600">{{ child.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div v-if="activeTab === 'material'">
        <p class="text-center text-gray-500 p-8">教材内容暂未实现</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('knowledge');

const knowledgeTree = ref([
  {
    name: '语言文字运用',
    open: true,
    children: [
      { name: '字音' }, { name: '字形' }, { name: '词语' }, { name: '标点符号' },
      { name: '修辞手法' }, { name: '句子' }, { name: '语言表达' }, { name: '名篇名句默写' },
    ]
  },
  {
    name: '阅读与鉴赏',
    open: false,
    children: [ { name: '现代文阅读' }, { name: '古代诗文阅读' }, ]
  },
  { name: '写作', open: false },
  { name: '整本书阅读', open: false },
  { name: '作家作品', open: false },
]);

const toggle = (item) => {
  if (item.children) {
    item.open = !item.open;
  }
};
</script> 