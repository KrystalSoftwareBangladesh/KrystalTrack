<template>
    <aside :class="['bg-white border-r shadow-md h-full transition-all duration-300', isCollapsed ? 'w-16' : 'w-64']">
        <div class="p-4 flex justify-between items-center">
            <span v-if="!isCollapsed" class="font-bold text-gray-700">Menu</span>
            <button @click="toggleCollapse" class="text-gray-500">
                <span v-if="isCollapsed">➡️</span>
                <span v-else>⬅️</span>
            </button>
        </div>
        <nav class="space-y-2 px-2">
            <RouterLink to="/" class="block py-2 px-3 rounded hover:bg-gray-100">🏠 Dashboard</RouterLink>
            <RouterLink to="/projects" class="block py-2 px-3 rounded hover:bg-gray-100">📁 Projects</RouterLink>
            <RouterLink to="/tasks" class="block py-2 px-3 rounded hover:bg-gray-100">✅ Tasks</RouterLink>
        </nav>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
const isCollapsed = ref(false)
const toggleCollapse = () => (isCollapsed.value = !isCollapsed.value)
</script>
