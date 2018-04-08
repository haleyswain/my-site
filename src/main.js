import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Banner from './components/Banner.vue'
import Articles from './components/Articles.vue'
import Biography from './components/Biography.vue'
import Projects from './components/Projects.vue'
import Technologies from './components/Technologies.vue'


Vue.component('Banner', Banner);
Vue.component('Articles', Articles);
Vue.component('Biography', Biography);
Vue.component('Projects', Projects);
Vue.component('Technologies', Technologies);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
