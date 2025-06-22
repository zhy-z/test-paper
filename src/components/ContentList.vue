<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <a href="#" class="text-sm text-gray-500 hover:text-orange-500 no-underline">换一批 🔄</a>
    </div>
    <ul>
      <li v-for="item in items" :key="item.text" class="flex justify-between items-center py-2">
        <a href="#" class="text-gray-700 hover:text-orange-500 truncate no-underline">📄 {{ item.text }}</a>
        <span class="text-sm text-gray-400 flex-shrink-0">{{ item.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array
});
</script> 