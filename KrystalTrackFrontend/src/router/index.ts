import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TasksView from '../views/TasksView.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: DashboardView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/tasks', name: 'Tasks', component: TasksView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
