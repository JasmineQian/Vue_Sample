<!--1 模版: html结构-->
<template>
  <div id="app">
    <h1> {{title}}</h1>
    <img src="./assets/logo.png">
    <router-link to="/account">Account</router-link>
    <router-link to="/page1">Page1</router-link>
    <router-link to="/page2">Page2</router-link>
    <router-view></router-view>
  </div>
</template>


<!--2 行为: 处理逻辑-->
<script>
export default {
  name: 'App',
  data(){
      return {
        title:"这是夏天里的Jasmine创建的第一个项目"
      }
  }
}
</script>


<!--3 样式：解决样式-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
