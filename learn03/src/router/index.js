import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Hive from '@/components/Hive'
import Learn from '@/components/learn/Learn'
import LearnDetails from '@/components/learn/LearnDetails'
import LearnUpdate from '@/components/learn/LearnUpdate'
import LearnInsert from '@/components/learn/LearnInsert'

import Work from '@/components/work/Work'
import WorkDetails from '@/components/work/WorkDetails'
import WorkUpdate from '@/components/work/WorkUpdate'
import WorkInsert from '@/components/work/WorkInsert'

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
import { compile } from 'vue-template-compiler';

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base:__dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/learn',component: Learn},
    {path: '/learnDetails/:id', name: 'learnDetails', component:LearnDetails},
    {path: '/learnUpdate/:id',name: 'learnUpdate', component:LearnUpdate},
    {path: '/learnInsert',component:LearnInsert},

    {path: '/work',component:Work},
    {path: '/workDetails/:id',component:WorkDetails},
    {path: '/workUpdate/:id',component:WorkUpdate},
    {path: '/workInsert',component:WorkInsert},


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
    {path: '/hive',component: Hive},
    {path: '/login',component: Login},
    {path: '/register',component: Register},
    {path: '*',redirect: '/'}

  ]
})
