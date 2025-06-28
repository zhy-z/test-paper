<template>
  <Transition name="fade">
    <div
      class="overlay"
      @click="closeMenu"
    >
      <Transition name="slide-right">
        <div 
          class="sidebar"
          @click.stop
        >
          <div class="sidebar-header">
            <h2 class="sidebar-title">试题网</h2>
            <button 
              class="close-btn"
              @click="closeMenu"
              aria-label="关闭菜单"
            >
              ✕
            </button>
          </div>
          
          <nav class="sidebar-nav">
            <ul class="nav-list">
              <li v-for="link in navLinks" :key="link.to" class="nav-item">
                <router-link 
                  :to="link.to" 
                  class="nav-link"
                  @click.native="handleNavClick"
                >
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';
import { isMobileMenuOpen } from '@/store/ui.js';

const navLinks = ref([
  { to: '/', text: '首页' },
  { to: '/test-papers', text: '试题试卷' },
  { to: '/news', text: '教育资讯' },
  { to: '/primary', text: '小学' },
  { to: '/middle', text: '初中' },
  { to: '/high', text: '高中' },
  { to: '/zhongkao', text: '中考' },
  { to: '/gaokao', text: '高考' },
]);

const closeMenu = () => {
  isMobileMenuOpen.set(false);
};

const handleNavClick = () => {
  closeMenu();
};
</script>

<style>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  max-width: 85vw;
  height: 100vh;
  background: #fff;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.sidebar-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #f3f4f6;
  color: #111827;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 1rem 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.nav-link:hover {
  background: #f9fafb;
  color: #00C950;
  border-left-color: #00C950;
}

.nav-link:active {
  background: #eff6ff;
}

/* 动画效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(100%);
}

/* 响应式设计 */
@media (max-width: 480px) {
  .sidebar {
    width: 280px;
  }
  
  .sidebar-header {
    padding: 0.75rem 1rem;
  }
  
  .nav-link {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
}
</style>