<template>
  <Navbar />
<main class="ml-64">
  <router-view v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
