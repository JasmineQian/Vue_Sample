<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <a-row>
        <a-col :span="3"
               :xs="12"
               :sm="8"
               :lg="6"
               style="line-height:60px;text-align:left;color:white; padding-left:20px">
          <img src="@/assets/logo.png"
               alt=""
               style="height:40px"
               spin
               class='logo' />
          <span style="padding-left:20px">{{brandName}}</span>
        </a-col>
        <a-col :span="3"
                :xs="12"
               :sm="16"
               :lg="18"
               style="text-align: right; padding-right:50px">
          <a-popover placement="bottomRight">
            <template slot="title">
              <a-row>
                <a-col style="text-align:center;padding-top:10px;padding-bottom:10px">
                  <span>{{user.firstName ? user.firstName +' ' +user.lastName :user.email}}</span>
                  <a-tag color="blue"
                         v-if="user.userRole==='view'">{{user.userRole}}</a-tag>
                  <a-tag color="#00CC33"
                         v-if="user.userRole==='admin'">{{user.userRole}}</a-tag>
                  <a-tag color="#FFCC00"
                         v-if="user.userRole==='pm'">{{user.userRole}}</a-tag>
                  <a-tag color="#FFCC00"
                         v-if="user.userRole==='sa'">{{user.userRole}}</a-tag>
                </a-col>
              </a-row>

            </template>
            <template slot="content">
              <a-row>
                <a-col>
                  <a-icon type="mail" /> {{user.email}}</a-col>
                <a-divider dashed/>
                <a-col style="text-align:center;">
                  <a-button type="primary"
                            icon="poweroff"
                            :loading="iconLoading"
                            @click="logout">
                    Logout
                  </a-button>
                </a-col>
              </a-row>
            </template>
            <a-badge :count="99" dot>
            <a-avatar style="color: #f56a00; backgroundColor: #fde3cf" :src="`https://tapnew.acxiom.com.cn/proxy.php?proxy=avatar&module=system&user_id=${user.id}`"></a-avatar>
            </a-badge>
          </a-popover>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="padding: 0 0">
      <a-layout style="padding: 0 0; background: #fff; height:100%">
        <a-layout-sider width="200"
                        style="background: #fff"
                        breakpoint="lg"
                        @collapse="collapse"
                        collapsedWidth='0'
                        :trigger='null'>
          <a-side-menu></a-side-menu>
        </a-layout-sider>
        <a-layout-content>
          <router-view class="main-content"></router-view>
          <!-- <a-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
          </a-layout-footer> -->
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-drawer @close="onDrawClose"
              :placement="placement"
              :closable="drawCloseable"
              :visible="drawVisible"
              ref='drawMenu'
              class="drawMenu">
      <div class="draw-header">
        <a-row>
          <a-col :span="24">
            <img src="@/assets/logo.png"
                 alt=""
                 style="height:40px" />
          </a-col>
          <a-row>
            <a-col :span="24">
              <span>{{brandName}}</span>
            </a-col>
          </a-row>
        </a-row>
      </div>
      <a-side-menu></a-side-menu>
      <div class="drawer-handle"
           ref="hand"
           v-if="!siderVisible"
           @click="drawToggle">
        <a-icon :type="handIcon" />
      </div>
    </a-drawer>
    <a-button @click="drawToggle"
              style="display:none"
              ref='hideHand'></a-button>
  </a-layout>
</template>
<script>
import router from '@/router'
import SideMenu from '@/components/frame/SideMenu'
export default {
  name: 'Home',
  components: { ASideMenu: SideMenu },
  data () {
    return {
      brandName: '  COE Change Request Review',
      brandLogo: '@/assets/logo.png',
      collapsed: true,
      placement: 'left',
      siderCloseable: true,
      drawCloseable: false,
      drawVisible: true,
      siderVisible: true,
      iconLoading: false,
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    goto (routerName) {
      router.push({ name: routerName })
    },
    collapse (collapsed, type) {
      this.siderVisible = !collapsed
      if (!collapsed) this.drawVisible = false
    },
    drawToggle () {
      this.drawVisible = !this.drawVisible
    },
    onDrawClose () {
      this.drawVisible = false
    },
    onMenuSelected (key) {
      console.log(key)
    },
    logout () {
      let $this = this
      this.iconLoading = true
      setTimeout(function () {
        $this.$router.push({ path: '/login' })
      }, 2000)
    }
  },
  computed: {
    handIcon () {
      return this.drawVisible ? 'close' : 'bars'
    }
  },
  mounted () {
    this.$refs.hideHand.$emit('click')
    console.log('%c \n' +
    '\n' +
    "                _..._                         .-'''-.                     \n" +
    "             .-'_..._''.                     '   _    \\                   \n" +
    "           .' .'      '.\\             .--. /   /` '.   \\  __  __   ___    \n" +
    "          / .'                        |__|.   |     \\  ' |  |/  `.'   `.  \n" +
    "         . '                          .--.|   '      |  '|   .-.  .-.   ' \n" +
    '    __   | |            ____     _____|  |\\    \\     / / |  |  |  |  |  | \n' +
    " .:--.'. | |           `.   \\  .'    /|  | `.   ` ..' /  |  |  |  |  |  | \n" +
    "/ |   \\ |. '             `.  `'    .' |  |    '-...-'`   |  |  |  |  |  | \n" +
    "`\" __ | | \\ '.          .  '.    .'   |  |               |  |  |  |  |  | \n" +
    " .'.''| |  '. `._____.-'/  .'     `.  |__|               |__|  |__|  |__| \n" +
    "/ /   | |_   `-.______ / .'  .'`.   `.                                    \n" +
    "\\ \\._,\\ '/            `.'   /    `.   `.                                  \n" +
    " `--'  `\"             '----'       '----'                                 \n" +
    '\n', 'color:#990000;')

    console.log('%c Acxiom COE Team', 'color:#990000;font-size:30px')
  }
}
</script>
<style>
body,
html {
  height: 100% !important;
}
.ant-layout-content {
  height: 100% !important;
}
.container {
  height: 100% !important;
}

#components-layout-demo-top-side {
  min-height: 100%;
  height: 100%;
}
.header {
  box-shadow: 0 2px 8px #f0f1f2;
}

.ant-layout-header {
  padding: 0;
}
.drawer-handle {
  position: absolute;
  top: 72px;
  width: 41px;
  height: 40px;
  cursor: pointer;
  z-index: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  right: -40px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 0 4px 4px 0;
}
.ant-drawer-body {
  padding: 0px !important;
}
.main-content {
  height: 100%;
  padding: 10px;
}
.draw-header {
  padding: 16px 24px;
  border-radius: 4px 4px 0 0;
  background: #fff;
  color: rgba(0, 0, 0, 0.65);
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
}
.logo {
  animation: haha1 20s linear infinite;
}
.welcome {
  color: whitesmoke;
  float: right;
}
.current {
  border: none
}
@keyframes haha1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
