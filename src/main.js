import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Home from './components/Home.vue'
import Articles from './components/Articles.vue'
import Projects from './components/Projects.vue'
import Technologies from './components/Technologies.vue'
import Element from 'element-ui'

Vue.use(Element)


Vue.component('Home', Home);
Vue.component('Articles', Articles);
Vue.component('Projects', Projects);
Vue.component('Technologies', Technologies);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
