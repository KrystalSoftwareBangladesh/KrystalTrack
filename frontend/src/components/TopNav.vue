<template>
  <header class="flex items-center justify-between px-4 py-4 bg-gray-900 text-white shadow-md">
    <!-- Left: Logo and sidebar toggle -->
    <div class="flex items-center gap-3 min-w-fit">
      <button @click="$emit('toggle-sidebar')" class="text-gray-700 hover:text-gray-900 text-xl">
        <i :class="collapsed ? 'fa-regular fa-square-caret-right' : 'fa-regular fa-square-caret-left'"></i>
      </button>
      <button class="text-xl hover:text-gray-400">
        <i class="fab fa-elementor"></i>
      </button>
      <img src="../assets/logo.png" alt="Jira" class="w-6 h-6" />
      <span class="text-lg font-semibold">KrystalTrack</span>
    </div>

    <!-- Center: Search + Create button -->
    <div class="flex items-center gap-3 flex-1 max-w-2xl mx-6">
      <div class="flex items-center w-full px-3 py-1 bg-gray-800 border border-gray-700 rounded">
        <i class="fas fa-search text-gray-400 mr-2"></i>
        <input type="text" placeholder="Search"
          class="w-full bg-transparent text-white placeholder-gray-400 outline-none" />
      </div>
      <button class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm whitespace-nowrap">
        <i class="fas fa-plus mr-1"></i> Create
      </button>
    </div>

    <!-- Right: Payment + Icons -->
    <div class="flex items-center gap-4 min-w-fit">
      <!-- <button
        class="border border-purple-500 text-purple-400 px-3 py-1 rounded text-sm hover:bg-purple-500 hover:text-white">
        <i class="fas fa-credit-card mr-1"></i> Add payment details
      </button> -->
      <i class="fas fa-bell hover:text-gray-400 cursor-pointer"></i>
      <i class="fas fa-question-circle hover:text-gray-400 cursor-pointer"></i>
      <i class="fas fa-cog hover:text-gray-400 cursor-pointer"></i>
      <img src="https://i.pravatar.cc/32" alt="User Avatar" class="w-8 h-8 rounded-full border border-gray-600" />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    collapsed: Boolean
  }
}
</script>