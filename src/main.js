import Vue from 'vue'
import App from './App.vue'

import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui.js'

import './assets/index.scss'
import './plugins/element.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
