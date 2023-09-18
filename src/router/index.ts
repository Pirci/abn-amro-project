import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue' // Import the LandingPage component
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/', // When user visits the root of the application
    name: 'landing', // Give it a name for referencing
    component: LandingPage // Use the LandingPage component
  },
  {
    path: '/home', // Moved HomeView to a new path to avoid conflict
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes
})

export default router
