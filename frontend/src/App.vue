<template>
  <div class="flex flex-col h-screen">
    <TopNav />
    <div class="flex flex-1 overflow-hidden">
      <SideBar />
      <main class="flex-1 overflow-y-auto bg-gray-100 p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import TopNav from './components/TopNav.vue'
import SideBar from './components/SideBar.vue'
</script>
