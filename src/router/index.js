import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs.vue'
import JobDetail from '../views/JobDetail.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetail',
    component: JobDetail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
