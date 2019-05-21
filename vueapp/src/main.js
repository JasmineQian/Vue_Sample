// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
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
  router,
  template: `
	<div id="app">
		<ul>
			<li>
				<router-link to="/">Users</router-link>
				<router-link to="/test">Test</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
  `
}).$mount("#app")
