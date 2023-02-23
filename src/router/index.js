import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import MatchDuelView from '../views/MatchDuelView.vue';
import ManMachineView from '../views/ManMachineView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/matchduel',
    name: 'matchduel',
    component: MatchDuelView
  },
  {
    path: '/manmachine',
    name: 'manmachine',
    component: ManMachineView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/404"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
