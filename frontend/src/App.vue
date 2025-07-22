<template>
  <div class="flex flex-col h-screen">
    <TopNav @toggle-sidebar="sidebarCollapsed = !sidebarCollapsed" :collapsed="sidebarCollapsed" />
    <div class=" flex flex-1 overflow-hidden">
      <SideBar :collapsed="sidebarCollapsed" @toggle="toggleSidebar" />
      <main class="flex-1 overflow-y-auto bg-gray-100 p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: { TopNav, SideBar },
  data() {
    return {
      sidebarCollapsed: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    }
  }
}
</script>
