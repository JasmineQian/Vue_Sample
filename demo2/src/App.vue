<!--1 模版: html结构-->
<template>
  <div id="app">
    <h1> {{title}}</h1>
    <img src="./assets/logo.png">
    <h1> App Vue</h1>
    <router-link to="/helloworld">HelloWorld</router-link>
    <router-link to="/page1">第一个页面</router-link>
    <router-link to="/page2">第二个页面</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/friend">朋友圈</router-link>
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
