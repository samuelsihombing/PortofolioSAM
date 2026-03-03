<template>
  <header class="navbar">
    <div class="navbar-inner">
      <h1 class="brand">Samuel Sihombing</h1>

      <!-- Desktop nav -->
      <nav class="nav-links">
        <router-link
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          class="nav-item"
        >{{ item.name }}</router-link>
      </nav>

      <!-- Hamburger button (mobile only) -->
      <button class="hamburger" @click="toggleMenu" :class="{ open: isOpen }" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <div class="mobile-menu" :class="{ open: isOpen }">
      <router-link
        v-for="item in menu"
        :key="item.name"
        :to="item.path"
        class="mobile-nav-item"
        @click="isOpen = false"
      >{{ item.name }}</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }

const menu = [
  { name: 'Beranda',    path: '/' },
  { name: 'Portfolio',  path: '/Tentangsaya' },
  { name: 'Experience', path: '/Exprience' },
  { name: 'Skills',     path: '/data' },
  { name: 'Kontak',     path: '/contact' },
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e8e8f0;
}

.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 72px;
  padding: 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: #6d28d9;
  letter-spacing: -0.02em;
  cursor: pointer;
  font-family: 'Segoe UI', sans-serif;
}

/* ── Desktop Nav ── */
.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-item {
  font-size: 0.95rem;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  position: relative;
  transition: color 0.25s;
  font-family: 'Segoe UI', sans-serif;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #7c3aed;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-item:hover,
.router-link-active {
  color: #7c3aed;
}

.nav-item:hover::after,
.router-link-active::after {
  width: 100%;
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 101;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #374151;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Animasi X saat open */
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile Menu ── */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.98);
  border-top: 1px solid #e8e8f0;
  padding: 8px 0 16px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.3s ease;
}

.mobile-menu.open {
  max-height: 400px;
  padding: 8px 0 16px;
}

.mobile-nav-item {
  display: block;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  font-family: 'Segoe UI', sans-serif;
  transition: background 0.2s, color 0.2s;
  border-left: 3px solid transparent;
}

.mobile-nav-item:hover,
.mobile-nav-item.router-link-active {
  background: #f5f3ff;
  color: #7c3aed;
  border-left-color: #7c3aed;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .navbar-inner {
    padding: 0 20px;
  }

  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }
}
</style>