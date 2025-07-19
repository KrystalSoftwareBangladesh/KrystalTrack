import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TasksView from "../views/TasksView.vue";

const routes = [
  { path: "/", component: DashboardView },
  { path: "/projects", component: ProjectsView },
  { path: "/tasks", component: TasksView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
