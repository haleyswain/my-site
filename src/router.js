import Vue from 'vue'
import Router from 'vue-router'

import Banner from './components/Banner.vue'
import Articles from './components/Articles.vue'
import Projects from './components/Projects.vue'
import Technologies from './components/Technologies.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'banner',
      component: Banner
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
