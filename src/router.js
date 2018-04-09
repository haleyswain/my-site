import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Articles from './components/Articles.vue'
import Projects from './components/Projects.vue'
import Technologies from './components/Technologies.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: Technologies
    }
  ]
})
