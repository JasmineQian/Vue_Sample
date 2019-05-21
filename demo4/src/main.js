import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './page/Home'
import Menu from './page/Menu'
import About from './about/About'
import Login from './page/Login'
import Register from './page/Register'


Vue.use(VueRouter)

const routes = [
  {path: '/home', component: Home},
  {path: '/menu', component: Menu},
  {path: '/admin', component: Admin},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/about', component: About},
]
 

const router = new VueRouter({
    routes,
    mode: 'history'
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
