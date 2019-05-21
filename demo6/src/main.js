import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'


Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App)
})
