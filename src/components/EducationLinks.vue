<template>
  <div class="bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <h2 class="text-xl font-bold text-gray-800">其他教育网站</h2>
        </div>
        <a href="#" class="text-sm text-gray-500 hover:text-green-600 flex items-center">
          换一批
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h5M20 20v-5h-5M4 4l16 16M4 4l-4 4"></path></svg>
        </a>
      </div>

      <!-- Links Grid Container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="site in sites" :key="site.name">
           <div 
             class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4 h-full">
            <img :src="site.logo" :alt="site.name" class="w-10 h-10 object-contain">
            <div>
              <h3 class="font-semibold text-gray-800">{{ site.name }}</h3>
              <p class="text-xs text-gray-400 truncate">{{ site.url }}</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// For logos, we use a favicon service as a placeholder. 
// For better quality, local assets in /src/assets/img/ would be ideal.
const sites = ref([
  { name: '中国教育在线', url: 'https://www.eol.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E4%B8%AD%E5%9B%BD%E6%95%99%E8%82%B2%E5%9C%A8%E7%BA%BF.jpg' },
  { name: '人民网', url: 'http://edu.people.com.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E4%BA%BA%E6%B0%91%E7%BD%91.jpg' },
  { name: '上海招考热线', url: 'https://www.shmeea.edu.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E4%B8%8A%E6%B5%B7%E6%8B%9B%E8%80%83%E7%83%AD%E7%BA%BF.jpg' },
  { name: '天津招考资讯', url: 'http://www.zhaokao.net/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E5%A4%A9%E6%B4%A5%E6%8B%9B%E8%80%83%E8%B5%84%E8%AE%AF.jpg' },
  { name: '重庆市教育考试院', url: 'http://www.cqksy.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E9%87%8D%E5%BA%86%E5%B8%82%E6%95%99%E8%82%B2%E8%80%83%E8%AF%95%E9%99%A2.jpg' },
  { name: '河北省教育考试院', url: 'http://www.hebeea.edu.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E6%B2%B3%E5%8C%97%E7%9C%81%E6%95%99%E8%82%B2%E8%80%83%E8%AF%95%E9%99%A2.jpg' },
  { name: '山西招生考试网', url: 'http://www.sxkszx.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E5%B1%B1%E8%A5%BF%E6%8B%9B%E7%94%9F%E8%80%83%E8%AF%95%E7%BD%91.jpg' },
  { name: '内蒙古招生考试信息网', url: 'https://www.nm.zsks.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E5%86%85%E8%92%99%E5%8F%A4%E6%8B%9B%E7%94%9F%E8%80%83%E8%AF%95%E4%BF%A1%E6%81%AF%E7%BD%91.jpg' },
  { name: '山东省教育招生考试院', url: 'http://www.sdzk.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E7%A6%8F%E5%BB%BA%E7%9C%81%E6%95%99%E8%82%B2%E8%80%83%E8%AF%95%E9%99%A2.jpg' },
  { name: '江苏省教育考试院', url: 'http://www.jseea.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E7%A6%8F%E5%BB%BA%E7%9C%81%E6%95%99%E8%82%B2%E8%80%83%E8%AF%95%E9%99%A2.jpg' },
  { name: '浙江省教育考试院', url: 'https://www.zjzs.net/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E6%B2%B3%E5%8D%97%E7%9C%81%E6%95%99%E8%82%B2%E8%80%83%E8%AF%95%E9%99%A2.jpg' },
  { name: '江西省教育考试院', url: 'http://www.jxeea.cn/', logo: 'https://cdn.stzy.com//img/youqinglianjie/%E6%B1%9F%E8%A5%BF%E7%9C%81%E6%95%99%E8%82%B2%E8%80%83%E8%AF%95%E9%99%A2.jpg' },
]);
</script> 