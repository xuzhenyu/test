
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
//import Swipe from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'

import Mb1 from './assets/js/flexible.debug.js'
import Mb2 from './assets/js/flexible_css.debug.js'

  Vue.use(MintUI)
  Vue.component(MintUI)
//import VueAwesomeSwiper from 'vue-awesome-swiper'

//import './assets/css/swiper-3.4.2.min.css'

  //Vue.use(VueAwesomeSwiper)


//Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  Mb1,
  Mb2,
  router,
  template: '<App/>',
  components: { App }
})
