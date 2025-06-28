<template>
  <div class="bg-gray-50 py-4 sm:py-6" v-if="paper">
    <div class="container mx-auto px-2 sm:px-4">
      <!-- Breadcrumb -->
      <div class="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">
        <router-link to="/" class="hover:text-orange-500">首页</router-link> >
        <router-link to="/test-papers" class="hover:text-orange-500">试题试卷</router-link> >
        <span class="text-gray-800">资源详情</span>
      </div>

      <div class="flex flex-col md:flex-row gap-4 sm:gap-6">
        <!-- Left Content -->
        <div class="w-full md:w-3/4 bg-white p-3 sm:p-6 rounded-lg shadow-sm sm:shadow-md">
          <!-- Paper Header -->
          <div class="pb-3 sm:pb-4 mb-3 sm:mb-4">
            <h1 class="text-base sm:text-xl font-bold text-gray-800">
              <span v-if="paper.tag" class="text-xs text-white bg-orange-500 px-1 py-0.5 rounded-sm mr-1 sm:mr-2 font-medium align-middle">{{ paper.tag }}</span>
              {{ paper.title }}
            </h1>
            <div class="flex flex-wrap sm:flex-nowrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
              <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{{ paper.date|| "2025-06-22" }}</span>
              <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>{{ paper.user || "管理员" }}</span>
              <!-- <a href="#" class="hover:text-orange-500 flex items-center  sm:inline">详细信息 <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></a>
              <a href="#" class="text-orange-500 font-semibold block sm:inline">含答案与解析</a> -->
              <div class="flex-grow hidden sm:block"></div>
              <div class="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-end">
                 <a href="#" class="hover:text-orange-500 flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>纠错</a>
                 <a href="#" class="hover:text-orange-500 flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>收藏</a>
              </div>
            </div>
          </div>
          <!-- Related Files -->
          <div class="pb-3 sm:pb-4 mb-3 sm:mb-4">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-2 sm:p-3 rounded-lg">
              <div class="flex items-center space-x-2 text-xs sm:text-sm w-full overflow-hidden">
                <img src="@/assets/img/newWord.png" class="w-5 h-5 flex-shrink-0" alt="">
                <span class="truncate max-w-[70vw] sm:max-w-xs">{{ paper.fileName|| "2025届重庆市第一中学校高三下学期5月高考适应性月考语文试卷（原卷版）.docx" }}</span>
              </div>
            
            </div>
          </div>
          <!-- Paper Content Preview -->
          <!-- Document Content -->
          <div class="mt-4 sm:mt-6">
            <!-- Image Viewer -->
            <div v-if="activeFile" class="space-y-4 pt-2 sm:pt-4">
              <div v-for="(pic, idx) in activeFile.picList" :key="pic.picId" class="relative">
                <img
                  :src="pic.picUrl"
                  alt="Paper page"
                  class="w-full rounded-lg shadow border mb-2 sm:mb-4 bg-white object-contain"
                />
                <div class="absolute bottom-2 right-2 bg-black bg-opacity-40 text-white text-xs px-2 py-0.5 rounded select-none">{{ idx+1 }}/{{ activeFile.picList.length }}</div>
              </div>
            </div>
            <div v-else class="text-center py-10 text-gray-500">
              <p>暂无试卷内容可供预览。</p>
            </div>
          </div>
        </div>
        <!-- Right Sidebar -->
        <div class="w-full md:w-1/4 flex-shrink-0 hidden md:block">
          <PaperDetailSidebar />
        </div>
      </div>
    </div>
  </div>
   <div v-else class="text-center py-12">
    <p class="text-gray-500">加载中或未找到试卷...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import PaperDetailSidebar from '@/components/PaperDetailSidebar.vue';

const route = useRoute();
const paperId = ref(null);
const paper = ref({});
const fileListData = ref([]);
const activeFileIndex = ref(0);

const activeFile = computed(() => {
  if (fileListData.value && fileListData.value.length > 0) {
    return fileListData.value[activeFileIndex.value];
  }
  return null;
});

// Mock data for general paper info, matching PaperList
const papers = [
  {
    id: 1,
    title: '【首发】2024届高三全国100所名校ABJ高考模拟金典卷（六）6·新高考·数学（新教材版）',
    school: '全国100所名校',
    year: '2024',
    region: '全国',
    type: '模拟题',
    subject: '数学',
    uploader: '管理员',
    views: 1024,
  },
  {
    id: 2,
    title: '2024届高三T8八省重点高中联盟第一次联考',
    school: 'T8八省重点高中联盟',
    year: '2024',
    region: 'T8八省',
    type: '联考',
    subject: '综合',
    uploader: '编辑',
    views: 2048,
  },
  {
    id: 3,
    title: '百师联盟2024届高三一轮复习联考（四）4·新高考·全国卷',
    school: '百师联盟',
    year: '2024',
    region: '全国',
    type: '联考',
    subject: '综合',
    uploader: '管理员',
    views: 1536,
  },
];

// Data structure for paper details
const paperDetailsData = {
  2: { // Using paper ID 2 as an example
    fileList: [
      {
          "fileName": "2025届重庆市第一中学校高三下学期5月高考适应性月考语文试卷（原卷版）.docx",
          "fileSuffix": ".docx",
          "totalPage": 9,
          "picList": [
              { "picId": "1936604609633488898", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/55776c8d382f4a5bb9dc747c4640cb08.svg" },
              { "picId": "1936604609633488899", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/d50c10dcc239493eb7a9d5d7648b8b5a.svg" },
              { "picId": "1936604609633488900", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/97985db101e54a18a442814aa7f067f0.svg" },
              { "picId": "1936604609633488901", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/88cbf139523045c89cd53c43281110f3.svg" },
              { "picId": "1936604609633488902", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/6e8838e38afb407b851661013793824f.svg" },
              { "picId": "1936604609633488903", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/405d3c5dff074758ad16482b479fa6f8.svg" },
              { "picId": "1936604609633488904", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/524d69289d7446eb9ac59aeb7beb992b.svg" },
              { "picId": "1936604609633488905", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/64d0930e180c49e39ac140da86193ad8.svg" },
              { "picId": "1936604609633488906", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/5c674e49e4264f008d1f3f9d4c5822c9.svg" }
          ]
      },
      {
          "fileName": "2025届重庆市第一中学校高三下学期5月高考适应性月考语文试卷（解析版）.docx",
          "fileSuffix": ".docx",
          "totalPage": 10,
          "picList": [
              { "picId": "1936604609700597762", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/c407dba26a024392a01a429c92a67d11.svg" },
              { "picId": "1936604609700597763", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/f36cd588eab54dea8333457751d04fb7.svg" },
              { "picId": "1936604609700597764", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/767f397e03884e79bc532139807ce1b6.svg" },
              { "picId": "1936604609700597765", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/92f63d2c66434f949377baac74c66bc7.svg" },
              { "picId": "1936604609700597766", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/137f06e0df284cdb81e7f5d4b467a0b5.svg" },
              { "picId": "1936604609700597767", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/8387f901bf7141c5bb1c70de93976923.svg" },
              { "picId": "1936604609700597768", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/fe579f4b96ad427f8db0548ba1096c3f.svg" },
              { "picId": "1936604609700597769", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/1199f6f8240b439c997975dddcd733a7.svg" },
              { "picId": "1936604609700597770", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/cb1b35f9ce324d72afb5dd2a477d4238.svg" },
              { "picId": "1936604609700597771", "picUrl": "https://cdn.stzy.com/stzy/img/2025-06-22/5f1d0b9e58f74eb1bf5405064eede02e.svg" }
          ]
      }
    ]
  }
};

onMounted(() => {
  paperId.value = parseInt(route.params.id);
  paper.value = papers.find(p => p.id === paperId.value) || {};
  // In a real app, you would fetch this data. Here we use mock data based on paper ID.
  if (paperDetailsData[paperId.value]) {
    fileListData.value = paperDetailsData[paperId.value].fileList;
  }
});
</script>

<style scoped>
/* Scoped styles for the detail view */
</style> 