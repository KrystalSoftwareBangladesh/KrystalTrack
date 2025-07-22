<template>
    <aside :class="[
        'h-full bg-gray-800 text-white transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
    ]" class="flex flex-col">
        <div class="flex items-center justify-between h-16 px-2 border-b border-gray-700">
            <span v-if="!collapsed" class="font-bold text-lg p-2">Menu</span>
            <button @click="$emit('toggle')" class="text-white hover:text-gray-300">
                <i :class="collapsed ? 'fas fa-chevron-right p-2' : 'fas fa-chevron-left p-2'"></i>
            </button>
        </div>

        <nav class="flex-1 p-2 space-y-2">
            <RouterLink to="/" class="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
                <i class="fas fa-tachometer-alt"></i>
                <span v-if="!collapsed">Dashboard</span>
            </RouterLink>
            <RouterLink to="/projects" class="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
                <i class="fas fa-folder-open"></i>
                <span v-if="!collapsed">Projects</span>
            </RouterLink>
            <RouterLink to="/tasks" class="flex items-center gap-3 hover:bg-gray-700 p-2 rounded">
                <i class="fas fa-tasks"></i>
                <span v-if="!collapsed">Tasks</span>
            </RouterLink>
        </nav>
    </aside>
</template>

<script>
export default {
    props: {
        collapsed: Boolean
    }
}
</script>
