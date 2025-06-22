import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestPapersView from '../views/TestPapersView.vue';
import PaperDetailView from '../views/PaperDetailView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/test-papers',
    name: 'TestPapers',
    component: TestPapersView,
  },
  {
    path: '/paper/:id',
    name: 'paper-detail',
    component: PaperDetailView,
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router; 