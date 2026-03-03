<template>
  <header class="navbar">
    <div class="navbar-inner">
      <h1 class="brand">Samuel sihombing</h1>
      <nav class="nav-links">
        <router-link
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
          class="nav-item"
        >{{ item.name }}</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
const menu = [
  { name: 'Beranda', path: '/' },
  { name: 'Portfolio', path: '/Tentangsaya' },
  { name: 'Exprience', path: '/Exprience' },
  { name: 'Skills', path: '/data' },
  { name: 'Kontak', path: '/contact' },
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
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

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>