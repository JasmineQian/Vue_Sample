import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Title from '@/view/Title'
import Title1 from '@/view/Title1'
import Title2 from '@/view/Title2'
import Title3 from '@/view/Title3'
import Title4 from '@/view/Title4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: Title,
      children: [
        {
          path: 'title1',
          name:'title1',
          component:Title1

      },
      {
        path: 'title2',
        name:'title2',
        component:Title2

    },
    {
      path: 'title3',
      name:'title3',
      component:Title3

  },
  {
    path: 'title4',
    name:'title4',
    component:Title4

}
    
    ]
    }
  ]
})
