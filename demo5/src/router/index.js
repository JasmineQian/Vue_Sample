import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Menu from '@/components/Menu'
import Register from '@/components/Register'
import About from '@/components/about/About'

//二级路由
import News from '@/components/about/News'
import Contact from '@/components/about/Contact'
import Donate from '@/components/about/Donate'
import Guide from '@/components/about/Guide'

//333级路由
import WechatDonate from '@/components/about/donate/WechatDonate'
import AlipayDonate from '@/components/about/donate/AlipayDonate'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path: '/menu',component: Menu},
    {path: '/admin',component: Admin},
    {path: '/about',component: About ,children :[
      {path: '/about/news',component: News},
      {path: '/about/contact',component: Contact},
      {path: '/about/donate',component: Donate,children:[
        {path: '/about/donate/wechat',component: WechatDonate},
         {path: '/about/donate/alipay',component: AlipayDonate},
         {path: '/about/donate*', redirect:'/about/donate/alipay'}
      ]},
      {path: '/about/guide',component: Guide},
      {path:'/about*',redirect:'/about/news'}
    ]
    },
    {path: '/login',component: Login},
    {path: '/register',component: Register},
    {path: '*',redirect: '/'}

  ]
})
