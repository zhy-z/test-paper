<template>
    <div class="container mx-auto px-4 mt-8">
        <!-- Talks & Community -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="md:col-span-3">
                <h2 class="text-2xl font-bold mb-4">大咖讲讲</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="talk in talks" :key="talk.title" class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img :src="talk.image" :alt="talk.title" class="w-full h-40 object-cover">
                        <div class="p-4">
                            <h3 class="font-bold text-gray-800">{{ talk.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-2xl font-bold mb-4">交流社群</h2>
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 class="font-bold">试题网高中语文教师交流群</h3>
                    <p class="text-sm text-gray-500 my-4">试题网官方交流园地，最新教案、学案、试题、试卷课件等好资源每日分享，教育教研领域新鲜资讯不错过...</p>
                    <button class="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">申请加入</button>
                    <p class="text-xs text-gray-400 mt-2">TIPS! 添加小助理，拉你进群</p>
                </div>
            </div>
        </div>

        <!-- Experts -->
        <div class="mt-12">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">专家智库</h2>
                <a href="#" class="text-sm text-gray-500 hover:text-orange-500">换一批 🔄</a>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="expert in experts" :key="expert.name" class="text-center">
                    <img :src="expert.image" :alt="expert.name" class="w-32 h-32 rounded-full mx-auto shadow-lg">
                    <h3 class="mt-4 font-bold text-lg">{{ expert.name }}</h3>
                    <p class="text-sm text-gray-500">{{ expert.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const talks = ref([
    { title: '新课标下的学科实践与综合学习', image: 'https://img.shst.cn/images/2023/1025/20231025091748118.png' },
    { title: '语文一轮复习备考——2024江西新高考研讨会', image: 'https://img.shst.cn/images/2023/1025/20231025091748118.png' },
    { title: '高考冲刺专题视频 (上海专用)', image: 'https://img.shst.cn/images/2023/1025/20231025091748118.png' }
]);

const experts = ref([
    { name: '卢厚冰', title: '教育部国培计划授课教师', image: 'https://img.shst.cn/images/2023/1025/20231025091748118.png' },
    { name: '杨彩玲', title: '雅礼教育集团政治名师工作室首席名师', image: 'https://img.shst.cn/images/2023/1025/20231025091748118.png' },
    { name: '瞿建湘', title: '教育部学位中心评审专家', image: 'https://img.shst.cn/images/2023/1025/20231025091748118.png' },
    { name: '蒋建平', title: '四川省特级教师', image: 'https://img.shst.cn/images/2023/1025/20231025091748118.png' }
]);
</script> 