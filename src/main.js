import Vue from 'vue'
import App from './App.vue'

// Reset css
require('@/assets/css/_reset.css')
//Fonts
require('@/assets/css/_fonts.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
