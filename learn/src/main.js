import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
//Vue.http.header.common['Cookie']='JSESSIONID=C06A6F752337FEA8FFA74E98D3E4D6E1'

/*
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  http: {
    root: '/',
    headers: {
      Cookie: "JSESSIONID=C06A6F752337FEA8FFA74E98D3E4D6E1"
    }
  }
})
*/


//runtime

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")