<template>
  <a-menu mode="inline"  style="height:100%" :selectedKeys="selKeys" :openKeys="openKeys" @openChange="onOpenChange" @select="go">
   <!-- <a-menu-item  v-if="!menu.subMenu">
     <a-icon type="menu.menuIcon" /> {{menu.menuName}}
   </a-menu-item> -->
   <template v-for="menu in menu">
    <a-sub-menu :key="menu.id" v-if="menu.subMenu">
      <span slot="title">
        <a-icon :type="menu.menuIcon" />{{menu.menuName}}</span>
        <a-menu-item :key="subMenu.id" v-for="subMenu in menu.subMenu" :to="subMenu.menuRouter" @click="go" >
         <a-icon :type="subMenu.menuIcon" />
          <span>{{subMenu.menuName}}</span>
        </a-menu-item>
          <a-divider dashed />
    </a-sub-menu>

    <a-menu-item :key="menu.id" v-if="!menu.subMenu" :to="menu.menuRouter" @click="go" >
      <a-icon :type="menu.menuIcon" :spin="menu.spin"/>{{menu.menuName}}
    </a-menu-item>
   </template>
  </a-menu>
</template>
<script>
import router from '@/router'
import { mapState } from 'vuex'
export default {
  name: 'SideMenu',
  methods: {
    go (obj) {
      // console.log(obj.item.$attrs['to'])
      this.$store.commit('MenuStore/setSelectedKey', obj.key)
      router.push({name: obj.item.$attrs['to']})
    },
    onOpenChange (keys) {
      this.$store.commit('MenuStore/setOpenKeys', keys)
    }
  },
  mounted () {
    let role = this.user.userRole
    this.menu = this.sourceData.filter((item) => {
      return (!item.role || item.role.length === 0 || item.role.indexOf(role) >= 0)
    })
  },
  computed: mapState(
    {
      selKeys: state => state.MenuStore.selectedKey,
      openKeys: state => state.MenuStore.openKeys
    }
  ),
  data () {
    return {
      // 这边菜单要换成 api 获取的方式
      sourceData: [
        {
          id: '2',
          menuName: 'People',
          menuRouter: 'users',
          menuIcon: 'usergroup-add',
          role: ['admin']
        },
        {
          id: '1',
          menuName: 'Client',
          menuRouter: 'client',
          menuIcon: 'solution',
          role: ['admin']
        },
        {
          id: '3',
          menuName: 'My Tickets',
          menuRouter: 'mycr',
          menuIcon: 'hdd',
          role: ['pm', 'sa', 'admin']
        },
        {
          id: '4',
          menuName: 'Pending Reviews',
          menuRouter: 'pending',
          menuIcon: 'loading',
          role: ['admin']
        },

        {
          id: '5',
          menuName: 'Pending Resource',
          menuRouter: 'pendingDistribution',
          menuIcon: 'share-alt',
          spin: true,
          role: ['admin']
        },
        {
          id: '6',
          menuName: 'Assigned To Me',
          menuRouter: 'tome',
          menuIcon: 'bulb'
        },
        {
          id: '7',
          menuName: 'Search',
          menuRouter: 'list',
          menuIcon: 'search'

        },
        {
          id: '8',
          menuName: 'My Calendar',
          menuRouter: 'myCalendar',
          menuIcon: 'calendar'
        },

        {
          id: '9',
          menuName: 'Calendar',
          menuRouter: 'calendar',
          menuIcon: 'calendar'
        }
        //
        // {
        //   id: '7',
        //   menuName: 'Assigned',
        //   menuRouter: 'assigned',
        //   menuIcon: 'share-alt',
        //   role: ['admin']
        // }

      ],
      user: JSON.parse(localStorage.getItem('user')),
      menu: null
    }
  }
}
</script>

  // { path: '/main', component: Main, name: 'main', hidden: true },
  //       { path: '/users', component: Users, name: 'users', hidden: true },
  //       { path: '/mycr', component: MyCr, name: 'mycr', hidden: true },
  //       { path: '/pending', component: Pending, name: 'pending', hidden: true },
  //       { path: '/approved', component: Approved, name: 'approved', hidden: true },
  //       { path: '/pendingDistribution', component: PendingDistribution, name: 'pendingDistribution', hidden: true },
  //       { path: '/assigned', component: Assigned, name: 'assigned', hidden: true }
