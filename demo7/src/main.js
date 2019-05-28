import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Users from './components/Users'
import Test from './components/Test'

Vue.use(VueRouter)
Vue.use(vueResource)
Vue.config.productionTip = false

// 设置路由
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:"/",component:Users},
		{path:"/test",component:Test}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app")