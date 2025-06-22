<template>
  <div class="space-y-6 my-6">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <div class="text-sm text-gray-500">
        <router-link to="/" class="hover:text-orange-500">首页</router-link> >
        <span class="text-gray-800">试题试卷</span>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Left Sidebar -->
        <aside class="md:w-1/4 flex-shrink-0">
          <KnowledgePointSider />
        </aside>

        <!-- Right Content -->
        <main class="flex-grow">
          <PaperList />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import KnowledgePointSider from '../components/KnowledgePointSider.vue';
import PaperList from '../components/PaperList.vue';
</script> 