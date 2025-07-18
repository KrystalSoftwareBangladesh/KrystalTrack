<template>
    <aside :class="[
        'bg-white border-r h-full shadow-sm transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16' : 'w-64'
    ]">
        <!-- Top of sidebar -->
        <div class="flex items-center justify-between p-4">
            <span v-if="!isCollapsed" class="text-lg font-semibold text-gray-800">Menu</span>
            <button @click="toggleCollapse" class="text-gray-500 hover:text-gray-700 transition">
                <span v-if="isCollapsed">➡️</span>
                <span v-else>⬅️</span>
            </button>
        </div>

        <!-- Navigation Links -->
        <nav class="px-2 space-y-1">
            <RouterLink to="/" class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                :class="{ 'justify-center': isCollapsed }">
                <span>🏠</span>
                <span v-if="!isCollapsed">Dashboard</span>
            </RouterLink>
            <RouterLink to="/projects" class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                :class="{ 'justify-center': isCollapsed }">
                <span>📁</span>
                <span v-if="!isCollapsed">Projects</span>
            </RouterLink>
            <RouterLink to="/tasks" class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                :class="{ 'justify-center': isCollapsed }">
                <span>✅</span>
                <span v-if="!isCollapsed">Tasks</span>
            </RouterLink>
        </nav>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const isCollapsed = ref(false)

const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
}
</script>
