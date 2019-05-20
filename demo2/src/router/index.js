import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Friend from '@/components/Friend'
import News from '@/components/News'
import bbcNews from '@/components/news/bbcNews'
import cnNews from '@/components/news/cnNews'
import usaNews from '@/components/news/usaNews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      children:[
        {
          path: 'cnnews',
          name: 'cn',
          component: cnNews
        },
        {
          path: 'bbcnews',
          name: 'bbc',
          component: bbcNews
        },
        {
          path: 'usanews',
          name: 'usa',
          component: usaNews
        }

      ]
    },
    {
      path: '/friend',
      name: 'friend',
      component: Friend
    }

  ]
})
