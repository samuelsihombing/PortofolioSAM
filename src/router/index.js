import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import QA from '../pages/QA.vue'
import Projects from '../pages/Projects.vue'
import Data from '../pages/Data.vue'
import Contact from '../pages/Contact.vue'
import Skills from '../pages/Tentangsaya.vue'
import Exprience from '../pages/ExprienceProject.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/QA', component: QA },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/data', component: Data },
  { path: '/contact', component: Contact },
  { path: '/Tentangsaya', component: Skills },
  { path: '/Exprience', component: Exprience },
  
]

export default createRouter({
  history: createWebHistory(),
  routes
})
