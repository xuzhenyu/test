import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router-config.js'
import Mb1 from './assets/js/flexible.debug.js'
import Mb2 from './assets/js/flexible_css.debug.js'
import carSpeak from './components/sellcar.vue'


import './assets/css/swiper.min.css'
import './assets/js/swiper.min.js'

 Vue.use(VueRouter);

 const router = new VueRouter({
     routes
 });

new Vue({
  el: '#app',
  Mb1,
  Mb2,
  router,
  render: h => h(App)
})
