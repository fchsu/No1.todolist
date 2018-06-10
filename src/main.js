// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/Reset.css'
import bus from '@/assets/js/EventBus.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      bus: bus
    }
  },
  router,
  components: { App },
  template: '<App/>'
})
